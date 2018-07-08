/**
 * 
 */

console.log("problems.js page called...\n");

// ================ FUNCTION IMPLEMENTATIONS =======
function na(num_problems){
	console.log("na function called... with argument of: " + num_problems);
}

function single(num_problems){
	console.log("single function called... with argument of: " + num_problems);
}

function multiple(num_problems){
	console.log("multiple function called... with argument of: " + num_problems);
}

function multiple_rename(num_problems){
	console.log("multiple_rename function called... with argument of: " + num_problems);
}


// ======== END FUNCTION IMPLEMENTATIONS ===========

var query = window.location.search;
console.log(query);
//I need to parse these values somehow...
//this is an example of what query will look like: 
//type=NA&num_problems=5

//check if the value contains certain thing
var amp_position = query.indexOf("&");

var type = query.slice(6,amp_position);
console.log("type is: " + type);

var num_problems = query.slice((amp_position+14),query.length)
console.log("num_problems is: " + num_problems);

if(type == "NA"){
	na(num_problems);	 
}
else if(type == "single"){
	single(num_problems);
}
else if(type = "multiple"){
	multiple(num_problems);
}
else(type = "multiple_rename"){
	multiple_rename(num_problems);
}


