var zhutou = angular.module('zhutou', ['ngRoute', 'ngSanitize'])

/*
ngViewExample.directive("facebook", function(){
	return {
		restrict: "E",
		//template: '<div class="fb-share-button" data-href="http://developers.facebook.com/docs/plugins/" data-type="button_count"></div>'
		template: "<p>zk</p>"
	}
});
*/

zhutou.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'home.html',
    controller: "HomeCntl"
  })
  .when('/videos', {
    templateUrl: 'videoList.html',
    controller: 'VideosCntl'
  })
  .when('/social', {
    templateUrl: 'social.html',
    controller: 'SocialCntl'
  })
  .when('/primary', {
    templateUrl: 'primary.html',
    controller: 'PrimaryCntl'
  })
  .when('/videos/:videoId', {
    templateUrl: 'videoDetail.html',
    controller: "VideoDetailCntl"
  })
  .when('/Contact', {
	    templateUrl: 'contactUs.html'
  });
});

zhutou.controller('VideosCntl', ['$scope',
  function($scope) {
    var videosource = [
      {
        id:1,src:"imgs/img1.jpg",label:"img1", desc:"Other YouTube users can post comments.",link:"#/videos/1"
        , date: "2012/4/5", viewed: '5', category: 'fundatemental' 
      },
      {
        id:2,src:"imgs/img2.jpg",label:"img2",desc:"...",link:"#/videos/2"
        , date: "2013/1/15", viewed: '15', category: 'directive' 
      },
      {
        id:3,src:"imgs/img3.jpg",label:"img3",desc:"desc3",link:"#/videos/3"
        , date: "2013/5/7", viewed: '7', category: 'routing' 
      },
      {
        id:4,src:"imgs/img4.jpg",label:"img4",desc:"desc4",link:"#/videos/4"
        , date: "2013/7/1", viewed: '1', category: 'testing' 
      },
      {
        id:5,src:"imgs/img5.jpg",label:"img5",desc:"desc5",link:"#/videos/5"
        , date: "2013/2/26", viewed: '26', category: 'fundatemental' 
      },
      {
        id:6,src:"imgs/img6.jpg",label:"img6",desc:"...",link:"#/videos/6"
        , date: "2011/9/29", viewed: '29', category: 'data binding' 
      },
      {
        id:7,src:"imgs/img7.jpg",label:"img7",desc:"...",link:"#/videos/7"
        , date: "2009/11/3", viewed: '3', category: 'routing' 
      },
      {
        id:8,src:"imgs/img8.jpg",label:"img8",desc:"...",link:"#/videos/8"
        , date: "2003/6/2", viewed: '2', category: 'directive' 
      },
      {
        id:9,src:"imgs/img9.jpg",label:"img9",desc:"...",link:"#/videos/9"
        , date: "2013/8/1", viewed: '1', category: 'directive' 
      },
      {
        id:10,src:"imgs/img10.jpg",label:"img10",desc:"...",link:"#/videos/10"
        , date: "2013/9/17", viewed: '10', category: 'data binding' 
      },
    ];
    
    /*
    var numberPerRow = 3;//TODO user can set this further
    var videos = [];
    var tempArray = [];
    for(var i = 1; i <= videosource.length; i++ ){
      tempArray.push(videosource[ i - 1 ]);
      if( i % numberPerRow == 0 || i == videosource.length ){
        videos.push(tempArray);
        tempArray = [];
      }
    }
    
    $scope.videos = videos;
    */
    $scope.videos = videosource;
    
  }]);

zhutou.controller('VideoDetailCntl', ['$scope', '$routeParams', 
function ($scope, $routeParams){
  var videos = [
    {id:1, name:"video1", src:"//www.youtube.com/embed/ZS6V0Sx25Kk"},
    {id:2, name:"video2", src:"//www.youtube.com/embed/TmMWvouqvdI"},
    {id:3, name:"video3", src:'//www.youtube.com/embed/O9dK6S2tBZk'},
    {id:4, name:"video4", src:'//www.youtube.com/embed/oyPuCw8xjEs'},
    {id:5, name:"video5", src:'//www.youtube.com/embed/iuZgSt5qWrk'},
    {id:6, name:"video6", src:'//www.youtube.com/embed/c5QV-7os5zw'},
    {id:7, name:"video7", src:'//www.youtube.com/embed/dPXBQmZZYdQ'},
    {id:8, name:"video8", src:'//www.youtube.com/embed/TiRhiArxEIs'},
    {id:9, name:"video9", src:'//www.youtube.com/embed/SWC_ZYuLh7I'},
    {id:10, name:"video10", src:'//www.youtube.com/embed/inx9U1JMS7o'}
  ];
  
  var count = 0;
  while(count<videos.length){
    if (videos[count].id==$routeParams.videoId) {
      $scope.video = videos[count];
      break;
    } else {
      count++;
    }
  }
  if(count==videos.length){
    $scope.video = {id:null, name:"not existed", src:""};
  }
  
  //TODO how to add js to ng-view?
  // like domready
  $scope.$on('$viewContentLoaded', function() {
	  //facebook
	  /*
	  (function(d, s, id) {
		  var js, fjs = d.getElementsByTagName(s)[0];
		  if (d.getElementById(id)) return;
		  js = d.createElement(s); js.id = id;
		  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
		  fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
	  */
	  //twitter
	  //!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
  });
}]);

function MainCntl($scope, $route, $sce, $location) {

  //utility method
  $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  };

//  $scope.$route = $route;
  $scope.isActive = function(){
	  if ("#" + $location.$$path === this.tab.url) {
		  return true; 
	  }
      return false;  
  };
  $scope.tabs = [
    {
      url:"#/", 
      text:"Home"
      , class: "active"
    },
    {
      url:"#/videos", 
      text:"Videos"
      , class: ""
    },
    {
      url:"#/primary", 
      text:"Primary"
      , class: ""
    },
    {
      url:"#/social", 
      text:"Social"
      , class: ""
    }
  ];
  $scope.$on("$routeChangeSuccess", function (scope, next, current) {
      $scope.transitionState = "active";
  });
};

zhutou.filter('videoQuery', function(){
  return function(input, query){

    if(!input)
      return [];

    if(
        !query ||
        query.length == 0 ||
        input.length == 0
      )
      return input;

    query = query.toLowerCase();

    var vn, vd, 
        i = 0,
        out = [];


    for ( ; i < input.length; i++ ){
      vn = ( input[i].label ).toLowerCase();
      vd = ( input[i].desc ).toLowerCase();

      if(
        vn.indexOf(query) != -1 ||
        vd.indexOf(query) != -1
        )
      {
        out.push(input[i]);
      }
    }


    return out;
  };
})

.filter('videoCategory', function(){
  return function(input, query){

    if(!input)
      return [];

    if(
    	!query ||
        input.length == 0 || 
        query == "all"
      )
      return input;

    query = query.toLowerCase();

    var vc,
        i = 0,
        out = [];


    for ( ; i < input.length; i++ ){
      vc = ( input[i].category ).toLowerCase();

      if(
        vc == (query)
        )
      {
        out.push(input[i]);
      }
    }

    return out;
  };
})

;

function HomeCntl($scope){

};

function VideosCntl($scope) {

  $scope.init = function(){
    $scope.name = "VideosCntl";
    $scope.orderProp = "date";
    $scope.query = "";
    $scope.category = "all";
  };

  console.log("VideosCntl: transitionState: " + $scope.transitionState);
};

function PrimaryCntl($scope) {
  $scope.name = "PrimaryCntl";
  console.log("PrimaryCntl: transitionState: " + $scope.transitionState);
};

function SocialCntl($scope) {
  $scope.name = "SocialCntl";
  console.log("SocialCntl: transitionState: " + $scope.transitionState);
};
