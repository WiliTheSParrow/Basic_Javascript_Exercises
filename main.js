// JAVASCRIPT BASICS
//Pringles in console:
console.log("Starting JS...");

//exercise 1-2-3:
var myName = "Julia Wilhelm";
console.log(myName);

var age = 27;
console.log(age);

var ignasiAge = 32;
var ageDiff = age - ignasiAge;
console.log(ageDiff);

//exercise 4:
if (age > 21) {
    console.log("You are older than 21.");
} else if (age < 21) {
    console.log("You are younger than 21.");
} else {
    console.log("You are 21 years old.");
}

//exercise 5:
if (age > ignasiAge) {
    console.log("You are older than Ignasi.");
} else if (age < ignasiAge) {
    console.log("You are younger than Ignasi.");
} else {
    console.log("You have the same age as Ignasi.");
}

console.log("** Array ****************************");
// JAVASCRIPT ARRAY FUNCTIONS

var lst = [1, [2, 5], 2, 3, 4, 5];

console.log(lst.length);
console.log(lst.push(6));
console.log(lst.length);
console.log(lst.indexOf(5));
console.log(lst.join("-"));

//Array exercise 1:
var myClass = ['Annamari', 'Bogi', 'Csilla', 'Dani', 'Emese', 'Fanni', 'Georgina', 'Heni', 'Vica'];


console.log('This is the 1st name: ' + myClass[0]);
console.log('This is the last name: ' + myClass[8]);

for (i = 0; i < myClass.length; i++) {
    console.log(myClass[i]);
};

//Array exercise 2:
var myClassAges = [25, 25, 30, 32, 19, 20, 27, 27, 31];
var a = 0;
var evenAges = [];

while (a < myClassAges.length) {
    console.log(myClassAges[a]);
    a++;
};

for (i = 0; i < myClassAges.length; i++) {
    if (myClassAges[i] % 2 === 0) {
        console.log(myClassAges[i]);
    };
};

//Array exercise 3:
var list01 = [4, 6, 7, 8, 3, 7, 10, 22, 1, 7];
var list02 = [5, 4, 3, 2, 100, 55, 6];
var list03 = [33, 44, 66, 77, 102, 31, 45];

function lowestNo(givenList) {
    //The .sort() function vould order int.s like 1,10,2,20,etc. so I used a Compare Function (function(a, b){return a - b}) to define an alternative sor order. 
    var sortedList = givenList.sort(function (a, b) {
        return a - b
    });
    return sortedList[0];
};

console.log(lowestNo(list01));
console.log(lowestNo(list02));
console.log(lowestNo(list03));

//Array exercise 4:
function biggestNo(givenList) {
    //The .sort() function vould order int.s like 1,10,2,20,etc. so I used a Compare Function (function(a, b){return a - b}) to define an alternative sor order. 
    var sortedList = givenList.sort(function (a, b) {
        return b - a
    });
    return sortedList[0];
};

console.log(biggestNo(list01));
console.log(biggestNo(list02));
console.log(biggestNo(list03));

//Array exercise 5:
var list04 = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
var index = 10;

function arrayFunction(givenList, givenIndex) {
    return givenList[givenIndex];
};

console.log(arrayFunction(list04, index));

//Array exercise 6:
var list05 = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];

function multiplicationsInArray(givenList) {
    var list06 = [];
    var sortedList = givenList.sort(function (a, b) {
        return a - b
    });
    for (i = 0; i < sortedList.length; i++) {
        if (givenList[i] == givenList[i - 1]) {
            list06.push(givenList[i]);
        };
    };

    return list06;
};

console.log(multiplicationsInArray(list05));

//Array exercise 6:
myColor = ["Red", "Green", "White", "Black"];

function youNeedThisInString(givenList) {
    return givenList.join(',')
};

console.log(youNeedThisInString(myColor));

console.log("**String Func ********************");
// JAVASCRIPT STRING FUNCTIONS
// exercise 1:
var x = 4569;

function reversing(givenNumber) {
    return givenNumber.toString().split('').reverse().join('')
};

console.log(reversing(x));

// exercise 2:
var y = 'idontknow';

function revString(givenString) {
    return givenString.split('').sort().join('');
};

console.log(revString(y));

// exercise 3:
var z = 'prince of persia';

function capitalizeFirstLetters(givenString) {
    var stringList = [];
    var splitting = givenString.split(' ');
    for (i=0;i<splitting.length;i++){
        stringList.push(splitting[i].charAt(0).toUpperCase() + splitting[i].slice(1));
        
    }
    return stringList.join(' ');
};

console.log(capitalizeFirstLetters(z));

// exercise 4:
var lastone = "Last Feast Of The Wolves";

function longestWord(givenString){
    var splitting = givenString.split(' ');
    var longestWord = 0;
    var theWord = '';
    for (i=0; i<splitting.length; i++){
        if(splitting[i].length>longestWord){
            longestWord=splitting[i].length;
            theWord=splitting[i];
        }
        
    }
    return theWord;
}

console.log(longestWord(lastone));