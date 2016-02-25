// ! ! !
// Three Bugs

var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];

var array = [arrayAtticus, arrayJem, arrayBoo, arrayScout];

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < array.length; i++){
	array[i] = calculateSTI(array[i]);										//(array) should be array[i]
 	newEl = document.createElement('li');
	newText = document.createTextNode(array[i]);
	newEl.appendChild(newText);
	position.appendChild(newEl);
}

function calculateSTI(array){
  var newArray = [];
  	newArray[0] = array[0];
		// newArray[1] = array[1];
		// newArray[2] = array[2];
		// newArray[3] = array[3];

	var employeeNumber = array[1];
	var baseSalary = array[2];
	var reviewScore = array[3];

  var bonus = Math.round(getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary));
  if(bonus > 0.13){
  bonus = 0.13;
  }

  newArray[1] = bonus;
  newArray[2] = baseSalary * (1.0 + bonus);
  newArray[3] = baseSalary * bonus;
  console.log(newArray[0] + " " + newArray[1] + " " + newArray[2] + " " + newArray[3]);
  return newArray;
	console.log(newArray);
}

function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent; 														//Should this be - 1? NO(at least that's my thought)!
																									//Removed - 1 from line 69 that returns basePercent.
}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
	// parseInt(employeeNumber);
}

function getIncomeAdjustment(baseSalary){					//I thought updating the salary to baseSalary would fix the NaN
  var incomeAdjustment = 0;												//problem and convert the 'salary' or baseSalary from a string to
  baseSalary = parseInt(baseSalary);							//a number. It didn't seem to make a difference.
  if(baseSalary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
																									//Tried this too: return baseSalary;
}																									//Did not work. Fixing the (array) up top cleared the NaN.
