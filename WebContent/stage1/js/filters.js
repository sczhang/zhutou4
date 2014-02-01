angular.module('zhutou.filters', []).filter('videoQuery', function(){
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
});