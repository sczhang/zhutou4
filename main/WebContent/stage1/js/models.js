model = {};

model.getAllTutorialsByTag = function(tagName){
	return zhutou.DS.tutorials.tags[tagName]; 
};

zhutou.MODEL = model;