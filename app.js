'use strict';
const Homey = require('homey');
const calculations = require('./lib/calculations');

class App extends Homey.App {
  async onInit() {
    this.homey.flow.getActionCard('calculate_solar')
      .registerRunListener(async args => calculations.solarMetrics(args.pv_w, args.export_w));
    this.homey.flow.getActionCard('project_day')
      .registerRunListener(async args => calculations.projectDay(args.produced_kwh, args.self_use_percent, args.price_per_kwh));
    this.homey.flow.getConditionCard('surplus_above')
      .registerRunListener(async args => calculations.surplusAbove(args.pv_w, args.load_w, args.threshold_w));
    this.homey.flow.getConditionCard('solar_covers_load')
      .registerRunListener(async args => calculations.solarCoversLoad(args.pv_w, args.load_w));
  }
}

module.exports = App;
