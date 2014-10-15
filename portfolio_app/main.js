var PortfolioApp;

PortfolioApp = angular.module("PortfolioApp", []);

PortfolioApp.controller("PortfolioCtrl", [
  "$scope", function($scope) {
    $scope.index = 0

    $scope.newDemo = function(index) {
      console.log("INDEX", index)
      $scope.index = index
    }
    return $scope.apps = [
      {
        title: "RubySound",
        summary: "Listen to RubySound’s user picked and cultivated playlists. Users can search for songs to load into a queue, and can also vote on which song plays next.",
        breakdown: "Having a custom media player with a dynamically changing playlist, all to be updated in realtime, brought on a lot of corner cases that required immediate resolution. This app gave me a lot of insight to the power of both AngularJS and Socket.io, and I look forward to creating more applications with these tools.",
        tools: "HTML5, CSS3, AngularJS, NodeJS, Express & Sequelize, PostgreSQL, Passport & Bcrypt, Socket.io, Soundcloud API, Bandsintown API, Spotify API, Grunt, AJAX",
        imagecss: "rubysounddemo.png",
        heroku: "http://rubysound.herokuapp.com"
      }, {
        title: "GA Dashboard",
        summary: "Dashboard designed for General Assembly users. A collaborative effort of both myself and another alum. GA Dashboard comes with tons of neat features for the students and faculty located at General Assembly in San Francisco.",
        breakdown: "GA Dashboard was a fantastic experience of pair programming with another alum to design a rather cool product. Using tons of new tools, GA Dashboard is jam-packed with all of the information anyone in the SoMa district would gladly appreciate, from transportation, to food, to events. Even the weather!",
        tools: "HTML5, CSS3/Sass, Ruby on Rails, Nokogiri, AWS S3, Twitter REST API, BART API, OpenWeather API, Arduino (Dino), Rufus Scheduler, AJAX",
        imagecss: "dashboarddemo.png",
        heroku: "http://ga-dashboard.herokuapp.com"
      }, {
        title: "Groove For Me",
        summary: "Groove to this colorful rhythm game inspired by DDR. Shoot for your high score with precise key press, combo gauge, and accuracy.",
        breakdown: "Groove For Me really gave me the opportunity to explore a plethora of diverse javascript libraries, and allowed me to craft efficient methods for reading through their documentation. Groove For Me really allowed me to breathe life into a fun and high speed rhythm game.",
        tools: "HTML5, CSS3, CraftyJS",
        imagecss: "craftymusicdemo.png",
        heroku: "http://asbudik.github.io/craftymusic"
      }, {
        title: "Post-a-Pic",
        summary: "Seamlessly search for photos to upload to Twitter in two easy steps. Gone are the days of tedious image uploading.",
        breakdown: "Post-a-Pic was spawned from the belief that the world should be convenient. Uploading media to Oauth'd user's accounts became tricky due to the nature of Twitter's media policies; having to convert image links to binary data before upload was certainly a new experience that I'm glad I didn't pass up.",
        tools: "HTML5, CSS3, NodeJS, Express & Sequelize, PostgreSQL, Twitter REST API, Memegenerator API, Flickr API, OAuth",
        imagecss: "postapicdemo2.png",
        heroku: "http://asbpostapic.herokuapp.com"
      }
    ];
  }
]);
