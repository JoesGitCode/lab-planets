const Planets = require('../data/planets.js');
const PubSub = require('../helpers/pub_sub.js')


const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {
  // PubSub.publish('SolarSystem:all-planets-ready', this.planets);
  // console.log('solar system published planets');

  PubSub.subscribe('SelectView:change', (event) => {
    console.log(event.detail);
  })
};


SolarSystem.prototype.publishPlanetDetail = function (planetIndex) {
  const selectedPlanet = this.planets[planetIndex];
  PubSub.publish('SolarSystem:selected-planet-ready', selectedPlanet)
  console.log('solar system published selected planet');
};

module.exports = SolarSystem;
