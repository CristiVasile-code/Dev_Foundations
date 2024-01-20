const input1 = document.getElementById("in1");
const input2 = document.getElementById("in2");
const input3 = document.getElementById("in3");

const cardUnu = document.getElementById("card1");
const cardDoi = document.getElementById("card2");
const cardTrei = document.getElementById("card3");
const butonUnu = document.getElementById("but1");
const butonDoi = document.getElementById("but2");
const butonTrei = document.getElementById("but3");
const ulUnu = document.getElementById("ul1");
const ulDoi = document.getElementById("ul2");
const ulTrei = document.getElementById("ul3");


cardUnu.addEventListener("submit", (event)=>{
    event.preventDefault();
    notita(input1, ulUnu)} );



cardDoi.addEventListener("submit", (event)=>{
    event.preventDefault();
    notita(input2, ulDoi)} );

cardTrei.addEventListener("submit", (event)=>{
    event.preventDefault();
    notita(input3, ulTrei)} );

function notita(input,ul){
// cred ca o sa primeasca parametri card, input si numaistiuce
// o sa adauge intr-un li nou, in cardul x continutul inputului x
// apoi o sa apeleze o alta functie care sa scrie in localstorage si
//  trebuie sa fac cumva sa si citesc ce e in local storage si sa scriu
//  in cardurile corespunzatoare
let text = input.value;
const liElem = document.createElement("li");
ul.appendChild(liElem)
liElem.innerText = text;
input.value ="";
}