(function() {
  'use strict';

  angular.module('ben')
    .controller('BenController', BenController);

  BenController.$inject = ["projectsDataService", "$log"];



  function BenController(projectsDataService, $log) {
    var ben = this;
    ben.$log = $log;
    ben.message = "WELL COME ON IN"
    ben.projects = projectsDataService;


    ben.selectedProject = {};
    ben.setSelectedProject = setSelectedProject;

    ben.up = false;
    ben.left = false;
    ben.right = false;
    ben.down = false;
    ben.walk = walk;

    function setSelectedProject (index) {
      ben.selectedProject = ben.projects[index];
      ben.selectedProject.index = index;
      // ben.$log.log(ben.selectedProject.index);
      // $('body').css('background', 'pink');
      // ben.$log(angular.element(document).find('body'));
      }
    }

    function walk (index) {
      $log.log(index)

      switch (index) {
        case 1:
          ben.up = true;
          ben.down = false;
          ben.left = false;
          ben.right = false;
          break;
        case 3:
          ben.up = false;
          ben.left = true;
          ben.left = false;
          ben.right = false;
          break;
        case 5:
          ben.up = false;
          ben.left = false;
          ben.left = true;
          ben.right = false;
          break;
        case 7:
          ben.up = false;
          ben.left = false;
          ben.left = false;
          ben.right = true;
          break;
    }
  }

})();
