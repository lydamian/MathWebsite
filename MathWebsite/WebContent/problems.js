/**
 * Filename: problem.js
 */

console.log("problems.js page called...\n");

// ================ FUNCTION IMPLEMENTATIONS =======

// we will assume this is single?
function na(num_problems){
	console.log("na function called... with argument of: " + num_problems);
	//local variables
	var counter = 0;
	
	//dynamically generation content.
	for(var i = 0; i < num_problems; i++){
		
		//creating question
		var x = Math.floor((Math.random() * 10) + 1);
		var y = Math.floor((Math.random() * 10) + 1);
		
		console.log("x is: " + x);
		console.log("y is: " + y);
		
		//generating html content for question and form value
		var question = i + ") " + x + " + " + y + " = ";
		var input_str = "<input type=number name="+ x + "+" + y + ">";
			
		var markup = "<tr>" + 
			"<td>" + question + "<form action=# class=answer_form>" + input_str + "</form>" + "</td>";
			"</tr>";
		
		//appending html elements to table.
		$("#addition_table").append(markup);
		
		counter++;
	}
}

function single(num_problems){
	console.log("single function called... with argument of: " + num_problems);
	
	//local variables
	var counter = 0;
	
	//dynamically generation content.
	for(var i = 0; i < num_problems; i++){
		
		//creating question
		var x = Math.floor((Math.random() * 10) + 1);
		var y = Math.floor((Math.random() * 10) + 1);
		
		console.log("x is: " + x);
		console.log("y is: " + y);
		
		//generating html content for question and form value
		var question = i + ") " + x + " + " + y + " = ";
		var input_str = "<input type=\"number\" name=" + x + "+" + y + ">" + "</input>";
			
		var markup = "<tr>" + 
			"<td>" + question + "<form class=\"answer_form\">" + input_str + "</form>" + "</td>";
			"</tr>";
		
		//appending html elements to table.
		$("#addition_table").append("\"" + markup + "\"");
		
		counter++;
	}
}

function multiple(num_problems){
	console.log("multiple function called... with argument of: " + num_problems);
	
	//local variables
	var counter = 0;
	
	//dynamically generation content.
	for(var i = 0; i < num_problems; i++){
		
		//creating question
		var x = Math.floor((Math.random() * 10) + 1);
		var y = Math.floor((Math.random() * 10) + 1);
		
		console.log("x is: " + x);
		console.log("y is: " + y);
		
		//generating html content for question and form value
		var question = i + ") " + x + " + " + y + " = ";
		var input_str = "<input type=\"number\" name=" + x + "+" + y + ">" + "</input>";
			
		var markup = "<tr>" + 
			"<td>" + question + "<form action=\"#\" class=\"answer_form\">" + input_str + "</form>" + "</td>";
			"</tr>";
		
		//appending html elements to table.
		$("#addition_table").append("\"" + markup + "\"");
		
		counter++;
	}
}

function multiple_rename(num_problems){
	console.log("multiple_rename function called... with argument of: " + num_problems);
	
	//local variables
	var counter = 0;
	
	//dynamically generation content.
	for(var i = 0; i < num_problems; i++){
		
		//creating question
		var x = Math.floor((Math.random() * 100) + 1);
		var y = Math.floor((Math.random() * 100) + 1);
		
		console.log("x is: " + x);
		console.log("y is: " + y);
		
		//generating html content for question and form value
		var question = i + ") " + x + " + " + y + " = ";
		var input_str = "<input type=\"number\" name=" + x + "+" + y + ">" + "</input>";
			
		var markup = "<tr>" + 
			"<td>" + question + "<form class=\"answer_form\">" + input_str + "</form>" + "</td>";
			"</tr>";
		
		//appending html elements to table.
		$("#addition_table").append("\"" + markup + "\"");
		
		counter++;
	}
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
else if(type == "multiple"){
	multiple(num_problems);
}
else{
	multiple_rename(num_problems);
}

function submit_answers(){
	console.log("submit_answers function called...");	
}






