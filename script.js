/* JavaScript code here */
console.log("External Javascript");

// Task 2: Array Sum

function sum(arr){
    var sum = 0;
    arr.forEach(function(item, index){
        sum = sum + item;
    })
    return sum;
}

console.log("Array Sum: " + sum([5, 10, 15, 20]));