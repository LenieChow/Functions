/ Short Question 1
function short1 (a,b) {
  if (a > b) {
    return a;
  }
  else {
    return b;
  }
}

console.log(short1(30,50))
// output 50

// Short Question 2
var short2 = Math.max(a,b,c);
console.log(short2(2,3,4));
 // returns 4

 function short2 (a, b, c) {
  if (a > b) && (a > c){
    return a;
  }
  else if (b > a) && (b > c) {
    return b;
  }
  else {
    return c;
  }

 console.log(short2(5,8,10));
 // output 10


// Short Question 4
 var short4sum = function(array) {
   var length = array.length;
   var total = 0;
   for (i = 0; i < length; i++) {
     total += array[i];
   }
   return total;
 }

 console.log(short4sum([2,9,3]));
// output 14

var short4multiply = function(array) {
  var length = array.length;
  var total = 1;
  for (i = 0; i < length;  i++) {
    total *= array[i];
  }
  return total;
};

console.log(short4multiply([2,9]))
// output 18

 // Short Question 6
 function reverseString(stringtosplit) {
    return stringtosplit.split("").reverse().join("");
}
console.log(reverseString("jag testar"))
 // output"ratset gej

 // Short Question 7
 function short7(str) {
   var split = str.split(' ');
   var longestWord = 0;
   for(var i = 0; i < split.length; i++){
     if(split[i].length > longestWord){
 	longestWord = split[i].length;
      }
   }
   return longestWord;
 }
 console.log(short7("Hello are you in Malaysia"));

 var array = ["hello", "are", "you", "a", "teacher"];

function long1(arrayOfStrings){
  var myArray = [];
  for (i = 0; i  < arrayOfStrings.length; i++) {
    myArray.push(arrayOfStrings[i].length);
  }
  console.log(myArray);
  return myArray;
}
long1(array);

// Output [5, 3, 3, 1, 7]

function long2 (a,b,c){
var multiply= a * b;
return Math.pow(multiply,c);
}

console.log(long2(5,3,2));

 // output [225]
