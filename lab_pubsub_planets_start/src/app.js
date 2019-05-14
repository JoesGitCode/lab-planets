const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const PlanetInfoView = require('./views/planet_info_view.js');
const SelectView = require('./views/select_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  planetsDataModel.bindEvents();
  console.log(planetsDataModel.planets);


  const planetInfoView = new PlanetInfoView()
  planetInfoView.bindEvents()

  const menu = document.querySelector('nav.planets-menu')
  const selectView = new SelectView(menu)
  selectView.bindEvents()

});
