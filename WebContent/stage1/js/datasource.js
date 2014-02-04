var ds = {};

var BASE_PATH_TUTORIALS = "";  
ds.tutorials = {          
  "tutorial-1": {                  
    tpl: BASE_PATH_TUTORIALS + "tutorialdetail.html",                  
    name: "tutorial-1",
    category: "angular",                 
    date: "2014.1.15",
    intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tags: ["tag1", "tag2"]         
  }
                	
	, "code-example-1": {
		tpl: BASE_PATH_TUTORIALS + "code-example-1.html",
    name: "code-example-1.html",
    category: "javascript",
    date: "2013.2.5",
    intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		tags: [ "tag1", "tag2", "tag3" ]
	}  
		
  , "code-example-2": {     
    tpl: BASE_PATH_TUTORIALS + "code-example-2.html",     
    name: "code-example-2",
    category: "bootstrap",
    date: "2012.1.2",
    intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    tags: [ "tag4" ]
  } 
};

ds.tutorials.tags = {
	"tag1": ["tutorial-1", "code-example-1"],
	"tag2": ["tutorial-1", "code-example-1"],
	"tag3": ["code-example-1"],
	"tag4": ["code-example-2"]
}

zhutou.DS = ds;





