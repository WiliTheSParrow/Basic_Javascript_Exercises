// PROGRAMMING FUNDAMENTS IN JAVASCRIPT

// 1. addition:
var exampleArray = [1, 1, 3, 6, 33, 100];
var additionResult = 0;

for (i = 0; i < exampleArray.length; i++) {
    additionResult = additionResult + exampleArray[i];
};

console.log(additionResult);

// 2. numerable:

var numerableResult = 0;
var examineNo = 33;

for (i = 0; i < exampleArray.length; i++) {
    if (exampleArray[i] > examineNo) {
        numerableResult++;
    };
};

console.log(numerableResult);

// 3. decision:

var index01 = 0;

while (index01 < exampleArray.length && exampleArray[index01] != examineNo) {
    index01++
};

// OR exampleArray[index01] == examineNo in the if
if (index01<exampleArray.length){
    console.log("There is " + examineNo + " in the array!");
} else {
    console.log("There is NO " + examineNo + " in the array!");
};


// 4.

// 5.

// 6.

// 7.

// 8.

// 9.

// 10.
