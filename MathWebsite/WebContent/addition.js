/**
 * Filename: addition.js
 */

console.log("addition.js page called...");

// SELECT FORM VALUES
function getResult(form){
	//getting form values
	var type = form.type.value;
	var num_problems = form.num_problems.value;

	//verifying correct form values
	console.log("type is: " + type);
	console.log("num_problems: " + num_problems);
	
	//checking assigning values to a new page
	window.location.assign("http://localhost:8080/MathWebsite/additionproblems.html?type="+type+"&num_problems="+num_problems);
}

	