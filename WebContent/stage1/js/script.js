var zhutou = angular.module('zhutou', ['ngRoute', 'ngSanitize'])

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
    templateUrl: 'tutorialdetail.html',
    controller: 'TutorialDetailCtrl'
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
	
	console.log("schedule controller");
		
	$scope.init = function(){
		$scope.name = "ScheduleCntl";
		$scope.schedulejson = scheduleJSON;
		//generate li by jquery
		var $ul = $('<ul></ul>');
		$.each(scheduleJSON.matches, function(i,match){			
			$ul.append('<li>'+match.opponent+'</li>');
		});		
		var container = document.getElementsByClassName("schedule-container")[0];
		$ul.appendTo(container);
	};
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

.directive('codesinppet', ['$http', '$templateCache', '$location', function($http, $templateCache, $location){
	
	// http://demo.stanleyhlng.com/prettify-js/?id=bootstrap-light
	
	function htmlSanitize(s) {
	  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	};
	
	return {
		restrict: "EA",
		template: "<div directive><pre class=\"prettyprint linenums\"></pre></div>",
		link: function(scope, el, attrs){
			var snippet = attrs.tplUrl;
			
			$http.get( 
					'codetemplate/' + snippet,
					
					{ cache: $templateCache } ).success(function(html) {
		        console.log("loading done: " + html);
		        
		        var htmlEl = htmlSanitize(html);
		        
		        el.find("pre").append(htmlEl);
		        
		        prettyPrint();
		        
		      });
		}
	}
}])

;