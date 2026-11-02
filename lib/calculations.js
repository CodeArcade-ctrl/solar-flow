'use strict';
function nonNegative(value, name) {
  if (!Number.isFinite(value) || value < 0) throw new Error(`${name} must be a non-negative number.`);
  return value;
}
function percentage(value, name) {
  nonNegative(value, name);
  if (value > 100) throw new Error(`${name} must be between 0 and 100.`);
  return value;
}
function solarMetrics(pvW, exportW) {
  nonNegative(pvW, 'PV production');
  nonNegative(exportW, 'Exported power');
  const selfConsumedW = Math.min(pvW, Math.max(0, pvW - exportW));
  return {
    self_consumption_w: selfConsumedW,
    self_consumption_percent: pvW === 0 ? 0 : (selfConsumedW / pvW) * 100,
    exported_w: Math.min(pvW, exportW),
  };
}
function projectDay(producedKwh, selfUsePercent, pricePerKwh) {
  nonNegative(producedKwh, 'Daily production');
  percentage(selfUsePercent, 'Self-use percentage');
  nonNegative(pricePerKwh, 'Electricity price');
  const selfUsedKwh = producedKwh * selfUsePercent / 100;
  return {
    self_used_kwh: selfUsedKwh,
    exported_kwh: producedKwh - selfUsedKwh,
    estimated_savings: selfUsedKwh * pricePerKwh,
  };
}
function surplusAbove(pvW, loadW, thresholdW) {
  nonNegative(pvW, 'PV production');
  nonNegative(loadW, 'Home load');
  nonNegative(thresholdW, 'Surplus threshold');
  return pvW - loadW >= thresholdW;
}
function solarCoversLoad(pvW, loadW) {
  nonNegative(pvW, 'PV production');
  nonNegative(loadW, 'Home load');
  return pvW >= loadW;
}
module.exports = { solarMetrics, projectDay, surplusAbove, solarCoversLoad };
