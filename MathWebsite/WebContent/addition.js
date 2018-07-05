/**
 * Filename: addition.js
 */

console.log("addition.js page called...");
//global variables


function n_a(num_problems){
	console.log("function n_a called...\n");
	document.location.href = 'problems.html';
}

function single_addition(num_problems){
	console.log("function single_addition called....\n");
	document.location.href = 'problems.html';
}

function addition(num_problems){
	console.log("function addition called...\n");
	document.location.href = 'problems.html';
}

function addition_renaming(num_problems){
	console.log("function addition_renaming called...\n");
	document.location.href = 'problems.html';

}


// SELECT FORM VALUES
function getResult(form){

	var type = form.type.value;
	var num_problems = form.num_problems.value;

	
	//get the numerical value of num_problems
	switch(num_problems){
	case 'five':
		num_problems = 5;
		break;
	case 'ten':
		num_problems = 10;
		break;	
	case 'fifteen':
		num_problems = 15;
		break;
	case 'twenty':
		num_problems = 20;
	}
	
	switch(type){
	case 'NA':
		n_a(num_problems);
		break;
	case 'single':
		single_addition(num_problems);
		break;
	case 'multiple':
		addition(num_problems);
		break;
	case 'multiple_rename':
		addition_renaming(num_problems);
		break;
	}

	//create n problems
	for(var i = 0; i < num_problems;i++){
		
	}
	
	console.log("type is: " + type);
	console.log("num_problems: " + num_problems);
}

	