'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const c = require('../lib/calculations');
test('solar self-use and export are bounded by production', () => {
  assert.deepEqual(c.solarMetrics(1200, 300), { self_consumption_w: 900, self_consumption_percent: 75, exported_w: 300 });
  assert.equal(c.solarMetrics(0, 30).self_consumption_percent, 0);
  assert.equal(c.solarMetrics(120, 400).exported_w, 120);
});
test('daily estimate separates self-use and exported production', () => {
  const result = c.projectDay(10, 60, 0.3);
  assert.equal(result.self_used_kwh, 6);
  assert.equal(result.exported_kwh, 4);
  assert.ok(Math.abs(result.estimated_savings - 1.8) < 1e-10);
});
test('surplus threshold and full solar coverage are explicit', () => {
  assert.equal(c.surplusAbove(1000, 700, 300), true);
  assert.equal(c.solarCoversLoad(700, 701), false);
});
test('negative and out-of-range values are rejected', () => {
  assert.throws(() => c.solarMetrics(-1, 0));
  assert.throws(() => c.projectDay(1, 101, 0.2));
});
