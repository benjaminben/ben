(function() {
  'use strict';

  angular.module('ben')
    .factory('projectsDataService', projectsDataService);

  projectsDataService.$inject = ["$log"];

  function projectsDataService($log) {
    var projects = [
    {
      title: "rem",
      logo: "",
      desc: "immersive art showroom displaying mobile VR, compatible with Cardboard",
      tech: "AngularJS, three.js",
      link: "rem.gallery",
      href: "http://rem.gallery",
      picture: "assets/projects/1.png"
    },
    {
      title: "Pi Radio",
      logo: "",
      desc: "Pi Radio: democratically generate group playlists via Spotify API",
      tech: "Node, Express, Mongo, jQuery",
      link: "PiRS.fm",
      href: "http://PiRS.fm",
      picture: "assets/projects/2.png"
    },
    {
      title: "Fullstaff",
      logo: "",
      desc: "tutorial hub for full-stack musicians: learn to write, mix, and more",
      tech: "Ruby, Rails",
      link: "fullstaff.io",
      href: "http://fullstaff.io",
      picture: "assets/projects/3.png"
    },
    {
      title: "SRiS",
      logo: "",
      desc: "HTML5 Canvas game with 🙏reverence🙏 to arcade classics",
      tech: "JavaScript, CSS3, HTML5",
      link: "play",
      href: "http://benjaminben.github.io/sris",
      picture: "assets/projects/4.png"
    }
    ];
    return projects
  };

})();
