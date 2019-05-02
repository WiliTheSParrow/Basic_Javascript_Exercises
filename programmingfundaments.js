// PROGRAMMING FUNDAMENTS IN JAVASCRIPT

// 1. addition:
var exampleArray = [1, 1, 3, 6, 33, 100, 2];
var additionResult = 0;

for (i = 0; i < exampleArray.length; i++) {
    additionResult = additionResult + exampleArray[i];
};

console.log(additionResult);

// 2. numerable:

var numerableResult = 0;
var examineNo = 2;

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
if (index01 < exampleArray.length) {
    console.log("There is " + examineNo + " in the array!");
} else {
    console.log("There is NO " + examineNo + " in the array!");
};


// 4. selection:
var index02 = 0;

while (index02 < exampleArray.length && exampleArray[index02] != examineNo) {
    index02++;
};

var resultSelection = index02 + 1;

console.log(resultSelection);

// 5. search:
var index03 = 0;

while (index03 < exampleArray.length && exampleArray[index03] != examineNo) {
    index03++;
};

if (index03 < exampleArray.length && exampleArray[index03] == examineNo) {
    console.log("There is number " + examineNo + " on the " + (index03 + 1) + ". place in the array!")
} else {
    console.log("There is no " + examineNo + " number in the array.")
}

// 6. sorting1:
var exampleArray02 = [1, 60, 58, 3, 6, 5, 4, 9, 100];
var newArray02 = [];
var index04 = 0;

for (i = 0; i < exampleArray02.length; i++) {
    if (exampleArray02[i] > 10) {
        newArray02[index04] = exampleArray02[i]
        index04++;
    };
};

// Checking:
console.log("Example array numbers:")
for (i = 0; i < exampleArray02.length; i++) {
    console.log(exampleArray02[i]);
};

console.log("Sorted array numbers:")
for (i = 0; i < newArray02.length; i++) {
    console.log(newArray02[i]);
};

// 7. sorting2:
var exampleArray03 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var newArray03 = [];
var newArray04 = [];
var index05 = 0;
var index06 = 0;

for (i = 0; i < exampleArray03.length; i++) {
    if (exampleArray03[i] < 6) {
        newArray03[index05++] = exampleArray03[i];
    } else {
        newArray04[index06++] = exampleArray03[i];
    };
};

// Checking:
console.log("Example array:");
console.log(exampleArray03);
console.log("Sorted array #1:");
console.log(newArray03);
console.log(newArray04);

// 8.

// 9.

// 10.
