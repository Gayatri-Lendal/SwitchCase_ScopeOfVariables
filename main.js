console.log('Practice!');

// switch case 

// switch(expression){
//   case x:
//   //code block
//   break;
//   case y:
//   //code block
//   break;
//   default:
//   //code block
// } 

// var num_of_day = 4;
 
// if(num_of_day === 0){
//   console.log("Sunday");
//   //logic code 1
// } else if(num_of_day === 1){
//   console.log("Monday");
//   //loic code 2
// } else {
//   console.log("Other Day");
// }

var num_of_day = 0;
var day;

switch (num_of_day){
 case 0:
  day = "Sunday";
  break;
 case 1:
  day = "Monday";
  break;
 case 2:
  day = "Tuesday";
  break;
 case 3:
  day = "Wednesday";
  break;
 case 4:
  day = "Thursday";
  break;
 case 5:
  day = "Friday";
  break;
 case 6:
  day = "Sunday";
  break;
}

console.log(day);

//scope of variables
//types of scope

//block scope
//variables declared inside{} can't be accessed outside the block
//only var can be accessed outside the {} 
//let and const can't be accessed outside the {}

console.log(name2);//undefined

for(var i = 0; i < 4; i++){
  let name1 = "Kanha";
  var name2 = "Radha";
  const name3 = "Diksha";
  console.log(name2); //variable access
  console.log(i);
}

console.log(name2);
// console.log(name3); //error
// console.log(name1); //error

// function/local scope
// function declaration
function dummy(a = 10){
  let num1 = 1;
  var num2 = 2;
  const num3 = 3;
  console.log(num1);
  console.log(num2);
  console.log(num3);
  return num2;
}

var output = dummy();
console.log(output);

//console.log(num1); //cant be access 

//Global scope
//it can be use anywhere except before declaration of the variable 

console.log(mega_universe);
var mega_universe = 123;

for(var i = 0; i < 5; i++){
  console.log(mega_universe); 
} 

function dummy2(b){
  console.log(mega_universe);
}

dummy2();
