function addThreeNumbers(numb1, numb2, numb3){
    return numb1 + numb2 + numb3;
}

let result = addThreeNumbers(10, 20, 50);

console.log("result: ",result);

function minusThreeNumbers(numb1, numb2, numb3){
    return numb1 - numb2 - numb3;
}

let resultMinus = minusThreeNumbers(400, 120, 100)

console.log(resultMinus)

let heading = document.querySelector("h1")

let button = document.querySelector("button");
let buttonColours = document.querySelector(".colours");
let body = document.querySelector("body");

function changeHeading(){
    heading.innerHTML = "it´s a good dag idag";
}

button.onclick = changeHeading;

function changeColours (){
    body.style.backgroundColor = "green";
    heading.style.color = "blue";
}
buttonColours.onclick = changeColours;

let buttonWoof = document.querySelector(".woofWoof");

const pet = {
    type : "dog",
    name : "Titty",
    age : 10,
    isFriendly: false,
    woofWoof : function (){
        console.log("the sound of the dog");
    }
}

console.log("type: ", pet.type);
console.log("is the dog friendly: ", pet.isFriendly)

buttonWoof.onclick = pet.woofWoof;

