const $ = id => document.getElementById(id);
const timer = new BrewTimer();
let language = 'ko';
let selected = recipes[0];
let lastStatus = '';
const text = key => language === 'en' ? (english[key] ?? key) : key;
const time = seconds => { const n = Math.max(0, Math.floor(seconds)); return `${Math.floor(n / 60)}:${String(n % 60).padStart(2, '0')}`; };
const title = s => { const amount = s.endWaterGrams - s.startWaterGrams; const name = text(s.name); return amount > 0 && !name.includes(`+${amount}g`) ? `${name} +${amount}g` : name; };
function adjacent(id, step, empty) {
  const el = $(id); el.replaceChildren();
  const name = document.createElement('span'); name.textContent = step ? title(step) : text(empty); el.append(name);
  if (step) { const detail = document.createElement('small'); detail.textContent = `${step.manualAdvance ? text('직접 확인') : time(step.endSeconds - step.startSeconds)} · ${language === 'ko' ? '누적' : 'Total'} ${step.endWaterGrams}g`; el.append(detail); }
}
function renderRecipe() {
  document.documentElement.lang = language;
  document.querySelectorAll('[data-label]').forEach(el => el.textContent = text(el.dataset.label));
  $('recipe').replaceChildren(...recipes.map(r => { const o = document.createElement('option'); o.value = r.id; o.textContent = text(r.name); return o; }));
  $('recipe').value = selected.id;
  $('metadata').textContent = `${text(selected.brewer)} · ${selected.coffeeGrams}g / ${selected.waterGrams}g · ${selected.waterTemperature}°C · 1:${(selected.waterGrams / selected.coffeeGrams).toFixed(1)}`;
  $('grind').textContent = text(selected.grindNote);
  $('locked').textContent = language === 'ko' ? '레시피를 바꾸려면 타이머를 초기화해 주세요.' : 'Reset the timer to choose another recipe.';
  $('advance').textContent = text('Drawdown 완료 · 다음 단계');
  $('progress').setAttribute('aria-label', language === 'ko' ? '전체 진행률' : 'Overall progress');
  $('steps').replaceChildren(...selected.steps.map(s => {
    const row = document.createElement('li'), body = document.createElement('div'), name = document.createElement('strong'), detail = document.createElement('small'), grams = document.createElement('span');
    name.textContent = title(s);
    detail.textContent = s.manualAdvance ? `${time(s.startSeconds)} ${language === 'ko' ? '이후 · 직접 확인' : 'onward · Manual'}` : `${time(s.startSeconds)} – ${time(s.endSeconds)}`;
    grams.textContent = `${s.endWaterGrams}g`; body.append(name, detail); row.append(body, grams); return row;
  }));
  lastStatus = ''; render();
}
function render() {
  const index = timer.index(selected), step = selected.steps[index], elapsed = timer.stepElapsed(selected);
  const duration = step.endSeconds - step.startSeconds, water = timer.water(selected), amount = step.endWaterGrams - step.startWaterGrams;
  $('current').textContent = timer.complete ? text('완료') : title(step);
  $('water').textContent = amount > 0 ? `${Math.round(Math.max(water - step.startWaterGrams, 0))}g` : '–';
  $('water-total').textContent = amount > 0 ? `/ ${amount}g` : text('물 붓기 없음');
  $('step-time').textContent = `${time(elapsed)} / ${step.manualAdvance ? text('직접 확인') : time(duration)}`;
  $('ring').style.strokeDashoffset = 722.567 * (1 - (step.manualAdvance ? 1 : Math.min(elapsed / duration, 1)));
  $('completed').hidden = !timer.complete;
  adjacent('previous', selected.steps[index - 1], '첫 단계입니다'); adjacent('next', selected.steps[index + 1], '마지막 단계입니다');
  const hasManual = selected.steps.some(s => s.manualAdvance);
  $('total').textContent = language === 'ko' ? `전체 ${time(timer.elapsed)}${hasManual ? ' · Drawdown 직접 확인 포함' : ` / ${time(selected.targetSeconds)}`} · 누적 목표 ${Math.round(water)} / ${selected.waterGrams}g` : `Total ${time(timer.elapsed)}${hasManual ? ' · Manual Drawdown' : ` / ${time(selected.targetSeconds)}`} · Total Target ${Math.round(water)} / ${selected.waterGrams}g`;
  $('progress').value = Math.min(timer.timeline / selected.targetSeconds, 1);
  $('toggle').textContent = `${timer.running ? 'Ⅱ' : '▶'} ${text(timer.running ? '일시정지' : '시작')}`;
  $('toggle').disabled = timer.complete; $('reset').disabled = !timer.recipe;
  $('recipe').disabled = !!timer.recipe; $('locked').hidden = !timer.recipe;
  $('advance').hidden = !timer.waiting;
  Array.from($('steps').children).forEach((el,i) => { el.classList.toggle('active',i === index); if (i === index) el.setAttribute('aria-current','step'); else el.removeAttribute('aria-current'); });
  const status = timer.complete ? (language === 'ko' ? '추출이 완료되었습니다.' : 'Brew complete.') : timer.waiting ? (language === 'ko' ? '물이 모두 빠지면 다음 단계 버튼을 눌러 주세요.' : 'When drawdown finishes, press Next Step.') : timer.recipe && !timer.running ? (language === 'ko' ? '일시정지됨' : 'Paused') : '';
  if (lastStatus !== status) { $('status').textContent = status; lastStatus = status; }
}
$('toggle').addEventListener('click', () => { timer.running ? timer.pause() : timer.start(selected); render(); });
$('reset').addEventListener('click', () => { timer.reset(); render(); });
$('advance').addEventListener('click', () => { timer.advance(); render(); });
$('recipe').addEventListener('change', () => { if (timer.recipe) return; selected = recipes.find(r => r.id === $('recipe').value) ?? recipes[0]; timer.reset(); renderRecipe(); });
$('language').addEventListener('change', () => { language = $('language').value; renderRecipe(); });
setInterval(() => { if (timer.running) { timer.tick(); render(); } }, 100);
document.addEventListener('visibilitychange', () => { if (!document.hidden) { timer.tick(); render(); } });
renderRecipe();
