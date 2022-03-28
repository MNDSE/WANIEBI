
// This gives the ability to users to enter there won groupe

const element = document.getElementById("myH1");

element.textContent = window.prompt("PLEASE GIVE A TITLE TO WHAT YOU ARE COUNTING ! like (PEOPLE)");
document.body.append(element);


// Creating the counter board
let myTotal = document.getElementById("myTotal");
let meDepot = document.getElementById("myH2");

let count = 0;

function ajout(){
   
    count = count + 1;
    
    meDepot.innerText = count;

}

function enregistrer(){
    let newCount = count + "-";
    myTotal.innerText += newCount;
    meDepot.textContent = 0;
    count = 0
}
