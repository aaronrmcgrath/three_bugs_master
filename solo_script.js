// ! ! !
// Three Bugs

//var arrayAtticus = ["Atticus", "2405", "47000", 3];
//var arrayJem = ["Jem", "62347", "63500", 4];
// var arrayBoo = ["Boo", "11435", "54000", 3];
// var arrayScout = ["Scout", "6243", "74750", 5];

var array = [];

var objAtticus = new Person("Atticus", "2405", "47000", 3);
var objJem = new Person("Jem", "62347", "63500", 4);
var objBoo = new Person("Boo", "11435", "54000", 3);
var objScout = new Person("Scout", "6243", "74750", 5);

var array = [objAtticus, objJem, objBoo, objScout];

console.log(array);
$(document).ready(function(){
  for(var i = 0; i < array.length; i++){
    appendDom(calculateSTI(array[i]));
  }
});


// var objAtticus = new Person("Atticus", "2405", "47000", 3);
// var objJem = new Person("Jem", "62347", "63500", 4);
// var objBoo = new Person("Boo", "11435", "54000", 3);
// var objScout = new Person("Scout", "6243", "74750", 5);

function Person(objName, objNumber, objSalary, objReview, bonus, newSalary, sti){
  this.objName = objName;
  this.objNumber = objNumber;
  this.objSalary = objSalary;
  this.objReview = objReview;
  this.bonus = bonus;
  this.newSalary = newSalary;
  this.sti= sti;
}

// function NewPerson(objName, objSalary, newSalary, sti) {
//   this.objName = objName;
//   this.objSalary = objSalary;
//   this.newSalary = newSalary;
//   this.sti = sti;
// }
//function


/// Previous Code...
// var array = [objAtticus, objJem, objBoo, objScout];


//Create variables used to write to the DOM
// var newEl, newText, position;


//Capture the position of insertion into the DOM
// position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
// for(var i = 0; i < array.length; i++){
//   array[i] = calculateSTI(array[i]);
//  	newEl = document.createElement('li');
// 	newText = document.createTextNode(array[i]);
// 	newEl.appendChild(newText);
// 	position.appendChild(newEl);
// }



function calculateSTI(person){
  // var employeeObj = new Person (person.objName, person.employeeNumber, person.baseSalary, person.reviewScore);
  // var newArray[0]= person.objName; ???
  // var name = this.objName;
  // var employeeNumber = this.objNumber;
  // var baseSalary = this.objSalary;
  // var reviewScore = this.objReview;

  var bonus = getBaseSTI(person.objReview) + getYearAdjustment(person.objNumber) - getIncomeAdjustment(person.objSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  person.bonus = bonus;
  //3rd bug I found - needed to round salary and bonus
  person.newSalary = Math.round(person.objSalary * (1.0 + bonus));
  person.sti = Math.round(person.objSalary * bonus);
  return person;
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
  return basePercent;
  //second bug!! I actually noticed this first but testing was no good until finding 1st bug


}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  var employeeNumber = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}


function appendDom (person) {
  $('.container').append('<div class="employees"></div>');
  var $el = $('.container').children().last();
  $el.append('<p>' + person.objName + '</p>');
}

// console.log(calculateSTI(employeeObj));
// console.log(calculateSTI(array));
