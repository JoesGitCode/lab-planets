const PubSub = require('../helpers/pub_sub.js');

const PlanetInfoView = function (container) {
  this.container = container;
}

PlanetInfoView.prototype.bindEvents = function () {
  PubSub.subscribe('SolarSystem:selected-planet-ready', (event) => {
    const planet = event.detail;
    this.render(planet);
    console.log('planetInfoView subscribes to selected planet ready');
  })
};

PlanetInfoView.prototype.methodName = function (planet) {
  const planetData = document.createElement('p')
  planetData.textContent = `name: ${planet.name}`
  // this.container.innerHtml = ''
  this.container.appendChild(planetData)
};

module.exports = PlanetInfoView;
