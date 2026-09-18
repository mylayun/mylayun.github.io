function scaleRecipe(base, coffee) {
  const factor = coffee / base.coffeeGrams;
  const round = value => Math.round(value * factor / 5) * 5;
  return {...base, coffeeGrams: coffee, waterGrams: round(base.waterGrams), steps: base.steps.map(s => ({...s, startWaterGrams: round(s.startWaterGrams), endWaterGrams: round(s.endWaterGrams)}))};
}
if (typeof module !== 'undefined') module.exports = scaleRecipe;
