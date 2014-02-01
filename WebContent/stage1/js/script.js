var zhutou = angular.module('zhutou',  [
                                        
                'zhutou.filters', 'zhutou.directives', 'ngRoute', 'ngSanitize'
                
                ])

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

zhutou
.controller('VideosCntl', ['$scope',
  function($scope) {
    var videosource = [
      {
        id:1,src:"imgs/img1.jpg",label:"img1", desc:"Other YouTube users can post comments.",link:"#/videos/1"
        , date: "2012/4/5", viewed: 5, category: 'fundatemental' 
      },
      {
        id:2,src:"imgs/img2.jpg",label:"img2",desc:"...",link:"#/videos/2"
        , date: "2013/1/15", viewed: 15, category: 'directive' 
      },
      {
        id:3,src:"imgs/img3.jpg",label:"img3",desc:"desc3",link:"#/videos/3"
        , date: "2013/5/7", viewed: 7, category: 'routing' 
      },
      {
        id:4,src:"imgs/img4.jpg",label:"img4",desc:"desc4",link:"#/videos/4"
        , date: "2013/7/1", viewed: 1, category: 'testing' 
      },
      {
        id:5,src:"imgs/img5.jpg",label:"img5",desc:"desc5",link:"#/videos/5"
        , date: "2013/12/26", viewed: 26, category: 'fundatemental' 
      },
      {
        id:6,src:"imgs/img6.jpg",label:"img6",desc:"...",link:"#/videos/6"
        , date: "2011/9/29", viewed: 29, category: 'data binding' 
      },
      {
        id:7,src:"imgs/img7.jpg",label:"img7",desc:"...",link:"#/videos/7"
        , date: "2009/11/3", viewed: 3, category: 'routing' 
      },
      {
        id:8,src:"imgs/img8.jpg",label:"img8",desc:"...",link:"#/videos/8"
        , date: "2003/6/2", viewed: 2, category: 'directive' 
      },
      {
        id:9,src:"imgs/img9.jpg",label:"img9",desc:"...",link:"#/videos/9"
        , date: "2013/8/1", viewed: 1, category: 'directive' 
      },
      {
        id:10,src:"imgs/img10.jpg",label:"img10",desc:"...",link:"#/videos/10"
        , date: "2013/9/17", viewed: 10, category: 'data binding' 
      },
    ];
    
    $scope.videos = videosource;
}]).controller('VideoDetailCntl', ['$scope', '$routeParams', 
function ($scope, $routeParams){

  $routeParams.videoId = parseInt( $routeParams.videoId );

  $scope.hasPrevVideo = true;
  $scope.hasNextVideo = true;

  function renderCodeExample(id) {
	  function html(s) {
	      return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	    };

	  if($('#video_code_' + id).length != 0)
		  var theHtml = $('#video_code_' + id).html().trim();
	  else 
		  return ;
	  
	  var quineHtml = html( theHtml );

	  setTimeout(function(){
		  $('#quine').html(quineHtml);
		  prettyPrint();
	  });
  };
  
  var videos = [
    {
      id: 1, name: "video1", src: "//www.youtube.com/embed/ZS6V0Sx25Kk"
    },
    {
      id: 2, name: "video2", src: "//www.youtube.com/embed/TmMWvouqvdI"
    },
    {
      id: 3, name:"video3", src:'//www.youtube.com/embed/O9dK6S2tBZk'
    },
    {
      id: 4, name: "video4", src: '//www.youtube.com/embed/oyPuCw8xjEs'
    },
    {
      id: 5, name: "video5", src: '//www.youtube.com/embed/iuZgSt5qWrk'
    },
    {
      id: 6, name: "video6", src: '//www.youtube.com/embed/c5QV-7os5zw'
    },
    {
      id: 7, name: "video7", src: '//www.youtube.com/embed/dPXBQmZZYdQ'
    },
    {
      id: 8, name: "video8", src: '//www.youtube.com/embed/TiRhiArxEIs'
    },
    {
      id: 9, name: "video9", src: '//www.youtube.com/embed/SWC_ZYuLh7I'
    },
    {
      id: 10, name: "video10", src: '//www.youtube.com/embed/inx9U1JMS7o'
    }
  ];
  
  var count = 0;
  while( count < videos.length ){
    if ( videos[count].id == $routeParams.videoId ) {
      $scope.video = videos[count];
      break;
    } else {
      count++;
    }
  }
  if(count == videos.length){
    $scope.video = {
      id: null, name: "not existed", src: ""
    };
  }

  if( $routeParams.videoId != 1 ){
	  $scope.prevVideoName = videos[ $routeParams.videoId - 2 ].name;
	  $scope.prevVideoLink = "#/videos/" + ( $routeParams.videoId - 1 );
  }else {
	  $scope.hasPrevVideo = false;
  }
  if( $routeParams.videoId != ( videos.length ) ){
	  $scope.nextVideoName = videos[ $routeParams.videoId ].name;
	  $scope.nextVideoLink = "#/videos/" + ( $routeParams.videoId + 1 );
  }else {
	  $scope.hasNextVideo = false;
  }
  
  renderCodeExample($routeParams.videoId);

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
}])
.controller('TutorialListCtrl', ['$scope', '$routeParams', 
function ($scope, $routeParams){

  console.log("TutorialListCtrl");
	
  $scope.$on("$routeChangeSuccess", function (scope, next, current) {
    $scope.transitionState = "active";
  });
	
}])
.controller('ScheduleCntl', ['$scope', '$routeParams',
function ($scope, $routeParams){
	
	//temporary json for fcb schedule module
	//will be removed once database and server side implementation finish
	var scheduleJSON = {
		"matches":[
			{
				"opponent":"Malaga",
				"competition":"La Liga",
				"atHome":true,
				"roundinfo":"Round 21",
				"time":"Sun 01.26.2014 21:00"
			},
			{
				"opponent":"Levante",
				"competition":"Copa del Rey",
				"atHome":false,
				"roundinfo":"Quarterfinal 2nd leg",
				"time":"Wed 01.29.2014 22:00"
			},
			{
				"opponent":"Valencia",
				"competition":"La Liga",
				"atHome":true,
				"roundinfo":"Round 22",
				"time":"Sun 02.01.2014 16:00"
			},
			{
				"opponent":"Sevilla",
				"competition":"La Liga",
				"atHome":false,
				"roundinfo":"Round 23",
				"time":"Wed 02.09.2014 21:00"
			},
			{
				"opponent":"Rayo",
				"competition":"La Liga",
				"atHome":true,
				"roundinfo":"Round 24",
				"time":"Sun 02.15.2014 21:00"
			}	
		]
	};	
	
	$scope.getCompImageSrc = function(competition){
		if(competition === "La Liga")
		{
			return "laliga.jpg";
		}
		else if(competition === "Copa del Rey")
		{
			return "copa.png";
		}
		else if(competition === "Champions League")
		{
			return "ecl.jpg";
		}
		return "default.png";
	};
	
	$scope.getMatchTitle = function(match){
		return match.atHome ? "Barcelona v.s. "+match.opponent: match.opponent + " v.s. Barcelona";
	};
	
	$scope.generateCell = function(match)
	{
		var cellhtml = "";
		cellhtml += '<li>';
		cellhtml += '<div class="schedule-cell">';
		cellhtml += '<img src="imgs/'+$scope.getCompImageSrc(match.competition)+'"></img>';
		cellhtml += '<div class="info-cell">';
		cellhtml += '<div class="text-cell">';
		cellhtml += '<div><span class="match-title">'+$scope.getMatchTitle(match)+'<span></div>';
		cellhtml += '<span class="match-info">'+match.roundinfo+'<span>';
		cellhtml += '<span class="match-time">'+match.time+'<span>';
		cellhtml += '</div>';
		cellhtml += '<a href="#" class="schedule-btn">Buy ticket</a>';		
		cellhtml += '<a href="#" class="schedule-btn">Preview</a>';
		cellhtml += '</div>';
		cellhtml += '</div>';
		cellhtml += '</li>';
		return cellhtml;
	};
		
	$scope.init = function(){
		$scope.name = "ScheduleCntl";
		$scope.schedulejson = scheduleJSON;
		//generate li from json
		var $ul = $('<ul></ul>');
		var lis_html = "";
		for(var i in scheduleJSON.matches)
		{
			lis_html += $scope.generateCell(scheduleJSON.matches[i]);
		}	
		$ul.html(lis_html);			
		var container = document.getElementsByClassName("schedule-container")[0];
		$ul.appendTo(container);
	};
}])
.controller('TutorialDetailCtrl', ['$scope', '$http', '$q', '$routeParams', function( $scope, $http, $q, $routeParams ){
	console.log('TutorialDetailCtrl');
	var tId = $routeParams.tutorialId;
	
  $scope.$on('$viewContentLoaded', function() {
    console.log("viewContentLoaded");
  });

	
}])
.controller('TagContentListCtrl', ['$scope', '$http', '$q', '$routeParams', function( $scope, $http, $q, $routeParams ){
  console.log('TagContentListCtrl');
  var tagname = $routeParams.tagname;
  
  console.log("tagname " + tagname);

  $scope.$on('$viewContentLoaded', function() {
    console.log("viewContentLoaded");
  });

  
}])



;

function MainCntl($scope, $route, $sce, $location) {

  //utility method
  $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  };
  
  console.log( $location.path() );

  $scope.getNavClass = function(){
	  
	  if(this.tab.children)
		  return "dropdown";
	  else {
		  if( ( "#" + $location.$$path == this.tab.url ) && ( $location.$$path == '/' ) )
			  return "active";
		  
		  if ( 
				  ( ("#" + $location.$$path ).indexOf( this.tab.url ) != -1 ) && 
				  ( this.tab.url != '#/' ) 
		  ) {
			  return "active"; 
		  }
	      return "";  
	  }
  };
  
  $scope.isActive = function(){
	
	  if( ( "#" + $location.$$path == this.tab.url ) && ( $location.$$path == '/' ) )
		  return true;
	  
	  if ( 
			  ( ("#" + $location.$$path ).indexOf( this.tab.url ) != -1 ) && 
			  ( this.tab.url != '#/' ) 
	  ) {
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
      , class: "active"
    },
    {
      url:"#/projects", 
      text:"Projects"
      , class: ""
    }
    , {
      url:"#/tutorials", 
      text:"Tutorials"
      , class: ""
    }
    , {
   	  url:"#/schedule",
   	  text:"FCB Schedule"
   	  , class: ""	
    }    
    , {
        url:"some url", 
        text:"Tabs"
        , class: ""
        , children: [
	                   {
	                	   url: "#/tab1",
	                	   text: "Tab 1"
	                   },
	                   {
	                	   url: "#/tab2",
	                	   text: "Tab 2"
	                   },
	                   {
	                	   url: "#/tab3",
	                	   text: "Tab 3"
	                   }
                   ]
    
      }
    
    
  ];
  $scope.$on("$routeChangeSuccess", function (scope, next, current) {
      $scope.transitionState = "active";
  });
  
};


function HomeCntl($scope){

}

function VideosCntl($scope) {

  console.log("video controller");
	
  $scope.init = function(){
    $scope.name = "VideosCntl";
    $scope.orderProp = "date";
    $scope.query = "";
    $scope.category = "all";
  };
}

function PrimaryCntl($scope) {
  $scope.name = "PrimaryCntl";
}

function SocialCntl($scope) {
  $scope.name = "SocialCntl";
}


function getTutorialDetailTpl(tId){

  var TUTORIAL_DETAIL_MAP = {
    "tutorial-1": "tutorialdetail.html",
    "code-example-1": "code-example-1.html",
    "default": "tutorialdetail.html"
  }

  return TUTORIAL_DETAIL_MAP[tId];
}





