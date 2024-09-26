// Chapter 14-16 (ARRAYS):-

// Q1
// const studentNames = [];

// Q2
// const students = {

//     names: []

// }

// Q3
// var fruitsArr = ["Apple", "Banana", "Orange"];

// Q4
// var numberArr = [10 , 20 , 30];

// Q5
// var boolArr = [true,false];

// Q6
// var mixedArr = [42, "Hello", true, null];

// Q7
// var educationArr = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD" ];

// document.write(educationArr);

// Q8
// var studentNames = ["Bazil" , "Hammad" , "Faraz"]
// var studentScores = [400 , 380 , 480]
// var totalMarks = 500;

// for(i = 0; i < studentNames.length; i++){

//     var percentage = (studentScores[i] / totalMarks) * 100;
//     console.log(`${studentNames[i]}: Score = ${studentScores[i]}, Percentage = ${percentage}%`);
// }

// Q9
// var colorsNameArr = ["Red", "Green", "Blue", "Yellow", "Purple"];

// document.write(colorsNameArr);

// Q9 (A);
// var colorsArr = ["Red", "Green", "Blue", "Yellow", "Purple"];


// var newColor = prompt("What color do you want to add to the beginning of the array?");

// colorsArr.unshift(newColor);

// console.log("Updated Color Array:", colorsArr);

// Q9 (B);
// var colorsArr = ["Red", "Green", "Blue", "Yellow", "Purple"];

// var newColor = prompt("What color do you want to add to the end of the array?");

// colorsArr.push(newColor);

// console.log("Updated Color Array:", colorsArr);

// Q9 (C);
// var colorsArr = ["Red", "Green", "Blue", "Yellow", "Purple"];

// var newColor1 = prompt("What is the first color you want to add to the beginning of the array?");
// var newColor2 = prompt("What is the second color you want to add to the beginning of the array?");

// colorsArr.unshift(newColor1, newColor2);

// console.log("Updated Color Array:", colorsArr);

// Q9 (D)
// var colorsArr = ["Red", "Green", "Blue", "Yellow", "Purple"];

// colorsArr.shift();

// console.log("Updated Color Array after removing the first color:", colorsArr);

// Q9 (E)
// var colorsArr = ["Red", "Green", "Blue", "Yellow", "Purple"];

// colorsArr.pop();

// console.log("Updated Color Array after removing the last color:", colorsArr);

// Q9 (F)
// var colorsArr = ["Red", "Green", "Blue"];

// console.log("Original Color Array:", colorsArr);

// var newColor = prompt("What color do you want to add?");
// var index = +prompt("At which index do you want to add this color?");

// colorsArr.splice(index, 0, newColor);

// console.log("Updated Color Array:", colorsArr);

// Q9 (G)
// var colorsArr = ["Red", "Green", "Blue", "Yellow", "Purple"];


// console.log("Original Color Array:", colorsArr);


// var index = +prompt("At which index do you want to delete colors?");


// var numToDelete = +prompt("How many colors do you want to delete?");

// colorsArr.splice(index , numToDelete);

// console.log("Updated Color Array:", colorsArr);

// Q10
// var scoresArr = [320,230,480,120];

// console.log("Scores of students ", scoresArr);

// var sortedScores = [120,230,320,480];

// console.log("Ordered Scores of students ", sortedScores);

// Q11
// var citiesArr = ["Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar"];

// var selectedCities = []
// selectedCities[2] = citiesArr[2];
// selectedCities[3] = citiesArr[3];

// console.log("Original Cities Array:", citiesArr);
// console.log("Selected Cities Array:", selectedCities);

// Q12
// var arr = ["This" , "is" , "my" , "cat"];

// console.log("Array:", arr)

// var combine = ("This is my cat ");

// console.log("String:", combine);

// Q13
// var devicesnamesarr = ["keyboard", "mouse", "printer", "monitor <br><br>"];
// document.write("<h2>Devices:</h2>",devicesnamesarr)

// Q15
// var firstArr = ["keyborad <br>"]
// document.write("OUT: <br>",firstArr);

// var secArr = ["mouse <br>"]
// document.write("OUT: <br>",secArr);

// var thirdArr = ["printer <br>"]
// document.write("OUT: <br>",thirdArr);

// var fourthArr = ["monitor <br>"];
// document.write("OUT: <br>",fourthArr);

// Chapter 15 (ARRAY 1):-

// Q1
// var myArr = []

// Q2
// var myArr = ["hello"]

// Q3
// var alphabet = ["h", "i", "j", "k"];
// alert(alphabet[2]);

// Q4
// var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
// var totalLength = alphabet.length;

// console.log(totalLength);

// Q5
// var myArray = ["firstElement"];

// myArray[1] = "secondElement";

// alert(myArray[1]);

// Chapter 16 (Array II):-

// Q1
// let myArray = ["Hello"];

// myArray.push("World");

// alert(myArray[myArray.length - 1]);

// Q2
// var Alphabet=["h" , "i" , "j" , "k"];
// Alphabet.pop();

// console.log(Alphabet);

// Q3
// var Alphabet=["h" , "i" , "j" , "k"];

// Alphabet.push(5);

// console.log(Alphabet);

// Chapter 16 (Array III):-

// Q1
// var sizes = ["S","M", "XL", "XXL", "XXXL"];
// sizes.shift();

// console.log(sizes);

// Q2
// var sizes = ["S","M", "XL", "XXL", "XXXL"];
// sizes.unshift(1,2,3);

// console.log(sizes);

// Q3
// var myArr = ["firstElement"];

// myArr.unshift("newFirstElement");

// alert(myArr[0]);

// Q4
// var sizes = ["S","M", "XL", "XXL", "XXXL"];
// sizes.splice(2,0, "L");

// console.log(sizes);

// Q5
// var sizes = ["S","M", "XL", "XXL", "XXXL"];
// var regSizes = sizes.slice(0,3);

// console.log(regSizes);

// Q6
// var petsArr = ["dog", "cat", "ox", "duck", "frog"];

// petsArr.splice(1,3);

// petsArr.splice(1, 0, "hamster", "rabbit");

// console.log(petsArr);

// Q7
var petsArr = ["dog", "cat", "ox", "duck", "frog"];

petsArr.splice(1,2);

console.log(petsArr)

















