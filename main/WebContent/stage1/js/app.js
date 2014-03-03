var zhutou = angular.module('zhutou',  [
                                        
                'zhutou.filters', 
                'zhutou.directives', 
                'ngRoute', 
                'ngSanitize',
                'zhutou.controllers'
                
                ]);

zhutou.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'home.html',
    controller: "HomeCntl"
  })
  .when('/videos', {
    templateUrl: 'videoList.html',
    controller: 'VideosCntl'
  })
  .when('/tutorials', {
    templateUrl: 'tutoriallist.html',
    controller: 'TutorialListCtrl'
  })
  .when('/projects', {
    templateUrl: 'primary.html',
    controller: 'PrimaryCntl'
  })
  .when('/videos/:videoId', {
    templateUrl: 'videoDetail.html',
    controller: "VideoDetailCntl"
  })
  .when('/Contact', {
	    templateUrl: 'contactUs.html'
  })
  .when('/schedule', {
  	templateUrl: 'schedule.html',
  	controller: "ScheduleCntl"
  })
  .when('/tutorial/:tutorialId', {
    controller: 'TutorialDetailCtrl',
    templateUrl: function(params){
      var tid = params.tutorialId;
      
      return getTutorialDetailTpl(tid);
    }

  })
  .when('/tag/:tagname', {
    controller: 'TagContentListCtrl',
    templateUrl: 'tutoriallist.html'
  })
  
  
  ;
});
