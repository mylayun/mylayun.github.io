// Mirrors TimerViewModel: elapsed brew time and recipe time are separate
// so manual drawdown waits never consume the following bypass pour.
class BrewTimer {
  constructor(now = () => performance.now() / 1000) { this.now = now; this.reset(); }
  reset() {
    this.elapsed = this.timeline = this.accumulated = this.waitTotal = this.skipped = 0;
    this.running = this.complete = this.waiting = false;
    this.recipe = null; this.startedAt = null; this.manualIndex = null;
    this.confirmed = new Set();
  }
  start(recipe) {
    if (this.running || this.complete) return;
    this.recipe ??= recipe;
    this.startedAt = this.now(); this.running = true;
  }
  pause() { if (this.running) { this.tick(); this.finishPause(); } }
  finishPause() { this.accumulated = this.elapsed; this.startedAt = null; this.running = false; }
  tick() {
    if (!this.running) return;
    this.elapsed = this.accumulated + Math.max(this.now() - this.startedAt, 0);
    if (this.waiting) return;
    this.timeline = Math.max(this.elapsed - this.waitTotal + this.skipped, 0);
    const index = this.recipe.steps.findIndex((s, i) => s.manualAdvance && this.timeline >= s.startSeconds && !this.confirmed.has(i));
    if (index >= 0) {
      const s = this.recipe.steps[index];
      this.waiting = true; this.manualIndex = index;
      this.waitStarted = this.elapsed - (this.timeline - s.startSeconds);
      this.timeline = s.startSeconds;
      return;
    }
    if (this.timeline >= this.recipe.targetSeconds) {
      this.timeline = this.recipe.targetSeconds;
      this.finishPause(); this.complete = true;
    }
  }
  advance() {
    if (!this.waiting) return;
    this.tick();
    const s = this.recipe.steps[this.manualIndex];
    this.confirmed.add(this.manualIndex);
    this.waitTotal += Math.max(this.elapsed - this.waitStarted, 0);
    this.skipped += s.endSeconds - s.startSeconds;
    this.timeline = s.endSeconds; this.waiting = false; this.manualIndex = null;
  }
  index(recipe) {
    if (this.manualIndex !== null) return this.manualIndex;
    return Math.max(0, recipe.steps.findLastIndex(s => this.timeline >= s.startSeconds));
  }
  stepElapsed(recipe) {
    const s = recipe.steps[this.index(recipe)];
    return this.waiting ? Math.max(this.elapsed - this.waitStarted, 0) : Math.min(Math.max(this.timeline - s.startSeconds, 0), s.endSeconds - s.startSeconds);
  }
  water(recipe) {
    const s = recipe.steps[this.index(recipe)];
    const p = Math.min(Math.max((this.timeline - s.startSeconds) / (s.endSeconds - s.startSeconds), 0), 1);
    return Math.min(s.startWaterGrams + (s.endWaterGrams - s.startWaterGrams) * p, recipe.waterGrams);
  }
}
if (typeof module !== 'undefined') module.exports = BrewTimer;
