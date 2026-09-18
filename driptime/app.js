const $ = id => document.getElementById(id);
const timer = new BrewTimer();
let language = 'ko', base, selected, dose, lastIndex = -1, autoFollow = true, cards = [];
const say = (ko,en) => language === 'ko' ? ko : en;
const text = key => recipeTranslations[key]?.[language] ?? (language === 'en' ? (english[key] ?? key) : key);
const time = seconds => { const n = Math.max(0,Math.floor(seconds)); return `${Math.floor(n/60)}:${String(n%60).padStart(2,'0')}`; };
const title = step => text(step.name).replace(/\s*\+\d+(?:\.\d+)?(?:ml|g)\b/g,'').trim();
function make(tag, className, content) { const el = document.createElement(tag); el.className = className; if(content !== undefined) el.textContent = content; return el; }
function prepare() {
  selected = scaleRecipe(base,dose);
  const last = selected.steps.at(-1);
  // Actual drawdown is determined by the brewer, not a fixed countdown.
  if(last.endWaterGrams === last.startWaterGrams) last.manualAdvance = true;
}
function renderRecipe() {
  document.documentElement.lang = language;
  document.querySelectorAll('[data-label]').forEach(el => el.textContent = text(el.dataset.label));
  $('recipe').replaceChildren(...recipes.map(r => { const o = make('option','',text(r.name)); o.value = r.id; return o; })); $('recipe').value = base.id;
  $('dose').value = dose; $('dose-label').textContent = say('원두 양','Coffee Dose');
  $('less').setAttribute('aria-label',say('원두 1g 줄이기','Decrease coffee by 1g')); $('more').setAttribute('aria-label',say('원두 1g 늘리기','Increase coffee by 1g'));
  $('metadata').textContent = `${text(selected.brewer)} · ${dose}g / ${selected.waterGrams}ml · ${selected.waterTemperature}°C`;
  const factor = dose / base.coffeeGrams;
  $('grind').textContent = text(base.grindNote).replace(/(\d+(?:\.\d+)?)(g|ml)\b/g,(_,value) => `${Math.round(Number(value)*factor/5)*5}ml`);
  $('dose-note').textContent = say('물 목표는 5ml 단위로 조절합니다. 단계 시간은 원본 기준이며 원두 양·분쇄에 따라 실제 추출 시간은 달라집니다.','Water targets use 5ml increments. Recipe timings stay unchanged; actual brew time varies with dose and grind.');
  $('locked').textContent = say('추출 중에는 레시피와 원두 양을 바꿀 수 없습니다. 초기화 후 변경하세요.','Reset before changing the recipe or coffee dose.');
  $('return-current').textContent = say('현재 단계로 돌아가기','Return to Current Step');
  $('reset').textContent = text('초기화');
  $('progress').setAttribute('aria-label',say('전체 진행률','Overall progress'));
  cards = selected.steps.map((s,i) => {
    const row=make('li','step-card'),heading=make('div','step-heading'),badge=make('span','step-badge',String(i+1)),name=make('h3','',title(s));heading.append(badge,name);
    const amount=s.endWaterGrams-s.startWaterGrams;
    const details=make('div','step-details');details.append(make('span','',amount>0 ? `${say('이번 단계','This Step')} +${amount}ml` : text('물 붓기 없음')), make('span','',`${say('누적 목표','Total Target')} ${s.endWaterGrams}ml`),make('span','',`${say('목표 시간','Target Time')} ${s.manualAdvance ? text('직접 확인') : time(s.endSeconds-s.startSeconds)}`));
    const activeLabel=make('p','active-label',say('현재 단계','Current Step'));
    const dial=make('div','dial');
    // Static SVG only; recipe text always uses textContent.
    dial.innerHTML='<svg viewBox="0 0 250 250" aria-hidden="true"><circle class="track" cx="125" cy="125" r="115"/><circle class="ring" cx="125" cy="125" r="115"/></svg>';
    const inner=make('div','dial-content'),water=make('strong','water'),elapsed=make('span','step-time');inner.append(water,elapsed);dial.append(inner);
    const instruction=make('p','manual-note',say('물이 모두 빠지면 버튼을 눌러 주세요.','Press the button when drawdown is complete.'));
    row.append(heading,details,activeLabel,dial,instruction);
    return {row,badge,activeLabel,dial,water,elapsed,ring:dial.querySelector('.ring'),instruction};
  });
  $('steps').replaceChildren(...cards.map(c=>c.row));render(false);
}
function followCurrent() {
  if(!selected || !timer.recipe) return;
  cards[timer.index(selected)].row.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'center'});
}
function render(allowScroll=true) {
  if(!selected) return;
  const index=timer.index(selected),runningSession=!!timer.recipe;
  cards.forEach((c,i)=>{
    const active=runningSession && i===index && !timer.complete,done=runningSession && (i<index || timer.complete);
    c.row.classList.toggle('active',active);c.row.classList.toggle('done',done);c.badge.textContent=done?'✓':String(i+1);
    if(active)c.row.setAttribute('aria-current','step');else c.row.removeAttribute('aria-current');
    c.activeLabel.hidden=c.dial.hidden=!active;
    c.instruction.hidden=!(active && timer.waiting);
    if(active){const step=selected.steps[i],elapsed=timer.stepElapsed(selected);c.water.textContent=`${Math.round(timer.water(selected))}ml`;c.elapsed.textContent=time(elapsed);c.ring.style.strokeDashoffset=722.567*(1-(step.manualAdvance?1:Math.min(elapsed/(step.endSeconds-step.startSeconds),1)));}
  });
  $('advance').hidden=!timer.waiting || timer.complete;
  $('advance').textContent=index===selected.steps.length-1 ? say('추출 완료','Finish Brew') : say('다음 단계','Next Step');
  $('total').textContent=`${say('전체','Total')} ${time(timer.elapsed)} · ${say('누적 목표','Total Target')} ${Math.round(timer.water(selected))} / ${selected.waterGrams}ml`;
  $('progress').value=Math.min(timer.timeline/selected.targetSeconds,1);
  $('toggle').textContent=timer.complete?text('완료'):`${timer.running?'Ⅱ':'▶'} ${text(timer.running?'일시정지':'시작')}`;
  $('toggle').disabled=timer.complete; $('reset').disabled=!runningSession;
  $('recipe').disabled=$('dose').disabled=runningSession; $('less').disabled=runningSession||dose<=5; $('more').disabled=runningSession||dose>=60;
  $('locked').hidden=!runningSession;
  $('return-current').hidden=autoFollow || !runningSession || timer.complete;
  const message=timer.complete?say('추출이 완료되었습니다.','Brew complete.'):timer.waiting?say('드로다운 완료를 직접 확인해 주세요.','Confirm drawdown completion.'):runningSession&&!timer.running?say('일시정지됨','Paused'):'';
  if($('status').textContent!==message)$('status').textContent=message;
  if(index!==lastIndex){lastIndex=index;if(allowScroll&&autoFollow&&runningSession&&!timer.complete)followCurrent();}
}
function changeDose(value) { if(timer.recipe || !Number.isFinite(value))return;dose=Math.min(60,Math.max(5,Math.round(value)));prepare();renderRecipe(); }
$('less').addEventListener('click',()=>changeDose(dose-1));$('more').addEventListener('click',()=>changeDose(dose+1));
$('dose').addEventListener('change',()=>{const n=$('dose').valueAsNumber;if(Number.isFinite(n))changeDose(n);else $('dose').value=dose;});
$('recipe').addEventListener('change',()=>{if(timer.recipe)return;base=recipes.find(r=>r.id===$('recipe').value);dose=base.coffeeGrams;prepare();lastIndex=-1;renderRecipe();});
$('language').addEventListener('change',()=>{language=$('language').value;if(selected)renderRecipe();});
$('toggle').addEventListener('click',()=>{if(!selected)return;const starting=!timer.recipe;timer.running?timer.pause():timer.start(selected);if(starting){autoFollow=true;lastIndex=-1;}render();});
$('advance').addEventListener('click',()=>{if(timer.waiting){timer.advance();timer.tick();render();}});
$('reset').addEventListener('click',()=>{timer.reset();autoFollow=true;lastIndex=-1;render();});
$('return-current').addEventListener('click',()=>{autoFollow=true;followCurrent();render(false);});
function userScrolling(){if(timer.recipe&&!timer.complete){autoFollow=false;render(false);}}
window.addEventListener('wheel',userScrolling,{passive:true});window.addEventListener('touchmove',userScrolling,{passive:true});
window.addEventListener('keydown',e=>{if(['ArrowDown','ArrowUp','PageDown','PageUp','Home','End',' '].includes(e.key)&& !['INPUT','SELECT','BUTTON'].includes(document.activeElement.tagName))userScrolling();});
// Scroll events include programmatic motion; only user input suspends follow mode.
setInterval(()=>{if(timer.running){timer.tick();render();}},100);
document.addEventListener('visibilitychange',()=>{if(!document.hidden){timer.tick();render();}});
async function loadRecipes(){try{const response=await fetch('recipes.json',{cache:'no-cache'});if(!response.ok)throw new Error('Recipe file unavailable');const catalog=await response.json();validateCatalog(catalog);recipes=catalog.recipes;recipeTranslations=catalog.translations;base=recipes[0];dose=base.coffeeGrams;prepare();renderRecipe();}catch(error){$('status').textContent=say('레시피를 읽을 수 없습니다. 새로고침해 주세요.','Unable to load recipes. Please refresh.');console.error(error);}}
function validateCatalog(catalog) {
  const uuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  if (catalog.version !== 1 || !catalog.translations || !Array.isArray(catalog.recipes) || !catalog.recipes.length) throw new Error('Invalid catalog');
  const ids = new Set();
  for (const r of catalog.recipes) {
    if (!uuid.test(r.id) || ids.has(r.id) || r.isBuiltIn !== true || !r.name || !Number.isFinite(r.coffeeGrams) || r.coffeeGrams <= 0 || !Number.isFinite(r.waterGrams) || r.waterGrams <= 0 || !Number.isInteger(r.targetSeconds) || !r.steps?.length) throw new Error('Invalid recipe');
    ids.add(r.id);
    let seconds = 0, water = 0; const steps = new Set();
    for (const step of r.steps) {
      if (!uuid.test(step.id) || steps.has(step.id) || !step.name || !Number.isInteger(step.startSeconds) || !Number.isInteger(step.endSeconds) || step.startSeconds !== seconds || step.endSeconds <= seconds || step.startWaterGrams !== water || !Number.isFinite(step.endWaterGrams) || step.endWaterGrams < water || step.endWaterGrams > r.waterGrams) throw new Error('Invalid step');
      steps.add(step.id); seconds = step.endSeconds; water = step.endWaterGrams;
    }
    if (seconds !== r.targetSeconds || water !== r.waterGrams) throw new Error('Invalid recipe target');
  }
}

new ResizeObserver(entries=>{document.documentElement.style.setProperty('--dock-height',`${entries[0].target.getBoundingClientRect().height}px`);}).observe(document.querySelector('.control-dock'));
loadRecipes();
