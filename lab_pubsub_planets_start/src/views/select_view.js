const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (element) {
    this.element = element;
}

SelectView.prototype.bindEvents = function () {
  // PubSub.subscribe('SolarSystem:all-planets-ready', (event) => {
  //     console.log('selectView sbuscribed to all planets ready ');
  //     const allPlanets = event.detail;
  //     this.populate(allPlanets)
  // })

  this.element.addEventListener('click', (event) => {
    const selectedIndex = event.target.id;
    console.log("planet", selectedIndex);
    PubSub.publish('SelectView:change', selectedIndex);
    console.log("SelectView publishes planet selected change");
  })
};

SelectView.prototype.populate = function (planetsData) {
  planetsData.forEach((planet, index) => {
    const option = document.createElement('li');
    // option.textContent =
  })
};


module.exports = SelectView;
