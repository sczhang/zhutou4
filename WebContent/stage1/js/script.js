var ngViewExample = angular.module('ngViewExample', ['ngRoute', 'ngSanitize'])

ngViewExample.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'videoList.html',
    controller: "ThumbnailCntl"
  })
  .when('/Primary', {
    templateUrl: 'primary.html',
    controller: PrimaryCntl
  })
  .when('/Social', {
    templateUrl: 'social.html',
    controller: SocialCntl
  })
  .when('/Video/:videoId', {
    templateUrl: 'videoDetail.html',
    controller: "VideoDetailCntl"
  });
});

ngViewExample.controller('ThumbnailCntl', ['$scope',
  function($scope) {
    var thumbnails = [
      {id:1,src:"imgs/img1.jpg",label:"img1", desc:"Other YouTube users can post comments on your videos and your channel (if the Discussion tab is enabled for your channel). Since it's your content, you have ...",link:"#Video/1"},
      {id:2,src:"imgs/img2.jpg",label:"img2",desc:"...",link:"#Video/2"},
      {id:3,src:"imgs/img3.jpg",label:"img3",desc:"desc3",link:"#Video/3"},
      {id:4,src:"imgs/img4.jpg",label:"img4",desc:"desc4",link:"#Video/4"},
      {id:5,src:"imgs/img5.jpg",label:"img5",desc:"desc5",link:"#Video/5"},
      {id:6,src:"imgs/img6.jpg",label:"img6",desc:"...",link:"#Video/6"},
      {id:7,src:"imgs/img7.jpg",label:"img7",desc:"...",link:"#Video/7"},
      {id:8,src:"imgs/img8.jpg",label:"img8",desc:"...",link:"#Video/8"},
      {id:9,src:"imgs/img9.jpg",label:"img9",desc:"...",link:"#Video/9"},
      {id:10,src:"imgs/img10.jpg",label:"img10",desc:"...",link:"#Video/10"},
    ];
    
    var numberPerRow = 3;//TODO user can set this further
    var rows = [];
    var tempArray = [];
    for(var i=1; i<=thumbnails.length; i++){
      tempArray.push(thumbnails[i-1]);
      if(i%numberPerRow==0||i==thumbnails.length){
        rows.push(tempArray);
        tempArray = [];
      }
    }
    
    $scope.rows = rows;
    
  }]);

ngViewExample.controller('VideoDetailCntl', ['$scope', '$routeParams', 
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
  
  /*
  // TODO how to add js to control page?
  window.scrollTo(0,0);
  $( document ).ready(function() {
    // Handler for .ready() called.
    window.scrollTo(0,0);
  });
  */
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
      url:"#/Primary", 
      text:"Primary"
      , class: ""
    },
    {
      url:"#/Social", 
      text:"Social"
      , class: ""
    }
  ];
  $scope.$on("$routeChangeSuccess", function (scope, next, current) {
      $scope.transitionState = "active";
  });
}

function PrimaryCntl($scope) {
  $scope.name = "PrimaryCntl";
  console.log("PrimaryCntl: transitionState: " + $scope.transitionState);
}

function SocialCntl($scope) {
  $scope.name = "SocialCntl";
  console.log("SocialCntl: transitionState: " + $scope.transitionState);
}