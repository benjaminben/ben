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

    // ben.standUp = false;
    // ben.standLeft = false;
    // ben.standRight = false;
    // ben.standDown = false;
    // ben.stand = stand;

    function setSelectedProject (index) {
      ben.selectedProject = ben.projects[index];
      ben.selectedProject.index = index;
      // ben.$log.log(ben.selectedProject.index);
      // $('body').css('background', 'pink');
      // ben.$log(angular.element(document).find('body'));

    ben.walk(index);
    }

    function walk (index) {


      switch (index) {
        // case 0:
        // case 2:
        // case 4:
        // case 6:
        // case 8:
        //   ben.up = false;
        //   ben.down = false;
        //   ben.left = false;
        //   ben.right = false;
        //   break;
        case 1:
          ben.up = true;
          ben.down = false;
          ben.left = false;
          ben.right = false;
          break;
        case 3:
          ben.up = false;
          ben.down = false;
          ben.left = true;
          ben.right = false;
          break;
        case 5:
          ben.up = false;
          ben.down = false;
          ben.left = false;
          ben.right = true;
          break;
        case 7:
          ben.up = false;
          ben.down = true;
          ben.left = false;
          ben.right = false;
          break;
    }

    function stand (index) {
      switch (index) {
        case 1:
          ben.up = true;
          ben.down = false;
          ben.left = false;
          ben.right = false;
          break
        case 3:
          ben.up = false
          ben.down = false;
          ben.left = true;
          ben.right = false;
          break
        case 5:
          ben.up = false
          ben.down = false;
          ben.left = false;
          ben.right = true;
          break
        case 7:
          ben.up = false
          ben.down = true;
          ben.left = false;
          ben.right = false;
          break

      }
    }

    // if (index == 1) {
    //    ben.up = true;
    //    ben.down = false;
    //    ben.left = false;
    //    ben.right = false;
    // }

    // else if (index == 3) {
    //   ben.up = false;
    //   ben.left = false;
    //   ben.right = false;
    //   ben.down = true;
    // }
  }

}

})();
