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

// Task 3: Email Validation with reg expression

function validateEmail(email){
// Regular Expression to validate proper email address
// /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

console.log("Email: yellow.com is " + validateEmail("yellow.com"));
console.log("Email: 1510927@iub.edu.bd is " + validateEmail("1510927@iub.edu.bd"));
console.log("Email: rifatmahmud196@gmail.com is " + validateEmail("rifatmahmud196@gmail.com"));

var company = {
    name: "Google", 
    age: 19, 
    ceo: {
    first_name: "Sundar", 
    last_name: "Pichai"
    }
    };

    company.updateAge = function (newAge) {
        this.age = newAge;
    }

    company.updateAge(23);
    console.log(company["age"])

    //Task 4: Access Object status at a specified index of array

    var library = [ 
        {
            author: 'Bill Gates',
            title: 'The Road Ahead',
            readingStatus: true
        },
        {
            author: 'Steve Jobs',
            title: 'Walter Isaacson',
            readingStatus: true
        },
        {
            author: 'Suzanne Collins',
            title:  'Mockingjay: The Final Book of The Hunger Games', 
            readingStatus: false
        }];

        
library.readingStatus = function (index) {
    return library[index].readingStatus;
}

console.log(library.readingStatus(2))

