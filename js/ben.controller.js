(function() {
  'use strict';

  angular.module('ben')
    .controller('BenController', BenController);

  BenController.$inject = ["projectsDataService", "$log"];

  function BenController(projectsDataService, $log) {
    var ben = this;
    ben.message = "WELL COME ON IN"
    ben.projects = projectsDataService;
    ben.$log = $log;

    ben.selectedProject = {};
    ben.setSelectedProject = setSelectedProject;

    function setSelectedProject (index) {
      ben.selectedProject = ben.projects[index];
      ben.selectedProject.index = index;
      // ben.$log.log(ben.selectedProject.index);
    }

  }

})();
