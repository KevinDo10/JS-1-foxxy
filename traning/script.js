const fruits = ["Apple", "blue berry", "oranges"];

console.log(fruits.length);

fruits.push("mango")

fruits.unshift("grapes");

console.log(fruits);

fruits.pop();

const number = [3, 4 ,100, 88, 54, 5]

number.sort();
console.log(number)

const cars = ["bmw", "volswagen", "toyota"];

console.log("the index og volswagen: is ", cars.indexOf("volswagen"));

const user = {
    name : "kevin",
    age : 27,
    job: "font-end developer",
    wealth : 3252394823040
}

console.log(user);

console.log(user.age);
console.log(user.name);
console.log(user.job)
console.log(user.wealth)

const someText = "hello my name is " + user.name;
console.log(someText);

const someTextTwo = `hello my name is ${user.name}`;
console.log(someTextTwo);

const someTextTree = `hello my name ${user.name} and im ${user.age} years old and i work with  ${user.job} and i have ${user.wealth} in dollars`;
console.log(someTextTree)

const books = [
    {
        title: "the hobbitt",
        author: "Kevin Do",
        pages: 300
    },
    {
        title: "drive with me in my car",
        author: "kevin hearth",
        pages: 1000
    },
    {
        title: "Im in Love With The Fairytale",
        author: "Alexander Rybakk",
        pages: 3000
    }
]

console.log("my first book", books[0]);

const searchBook = books.filter(function(book) {
   return book.pages > 300
});

console.log(searchBook);

function doorRing (withCamera){
    console.log ("i will go open the door the person is: " + withCamera);
}
 doorRing("Monde Photo");

function logWord(theWord){
    console.log(theWord);
}

logWord("Kevin")

function adTwoNumbers (num1, num2){
    return num1 + num2;
}

const sum = adTwoNumbers(10, 20);

console.log("sums: ", sum);

