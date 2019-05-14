const Planets = require('../data/planets.js');


const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {
  PubSub.publish('SolarSystem:all-planets-ready', this.planets);
  console.log('solar system published planets');
};


SolarSystem.prototype.publishPlanetDetail = function (planetIndex) {
  const selectedPlanet = this.planets[planetIndex];
  PubSub.publish('SolarSystem:selected-planet-ready', selectedPlanet)
  console.log('solar system published selected planet');
};

module.exports = SolarSystem;
