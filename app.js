let joueurScore = 0;
let adversaireScore = 0;
const joueurScore_span = document.getElementById("joueur-score");
const adversaireScore_span = document.getElementById("adversaire-score");
const scoreBoard_div = document.querySelector(".score_board");
const result_p = document.querySelector(".result > p");
const pierre_div = document.getElementById("p");
const feuille_div = document.getElementById("f");
const ciseau_div = document.getElementById("c");

function getAdversaireChoice() {
    const choices = ['p', 'f', 'c'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertisseur(lettre){
    if (lettre == "p") return "La pierre";
    if (lettre == "c") return "Le ciseau";
    return "La feuille";
}

function win(joueurChoice , adversaireChoice){
    const choice1 = "joueur".fontsize(3).sub();
    const choice2 = "adversaire".fontsize(3).sub();
    const joueurChoice_div = document.getElementById(joueurChoice);
    joueurScore++;
    joueurScore_span.innerHTML = joueurScore;
    adversaireScore_span.innerHTML = adversaireScore;
    result_p.innerHTML = `${convertisseur(joueurChoice)}${choice1} bats ${convertisseur(adversaireChoice)}${choice2}. Tu gagnes`;
    joueurChoice_div.classList.add('green-glow');
    setTimeout(function(){ joueurChoice_div.classList.remove('green-glow') }, 1000);
}



function lose(joueurChoice , adversaireChoice){
    const choice1 = "joueur".fontsize(3).sub();
    const choice2 = "adversaire".fontsize(3).sub();
    const joueurChoice_div = document.getElementById(joueurChoice);
    adversaireScore++;
    joueurScore_span.innerHTML = joueurScore;
    adversaireScore_span.innerHTML = adversaireScore;
    result_p.innerHTML = `${convertisseur(joueurChoice)}${choice1} perd contre ${convertisseur(adversaireChoice)}${choice2}. Tu as perdu`;
    joueurChoice_div.classList.add('red-glow');
    setTimeout(function(){ joueurChoice_div.classList.remove('red-glow') }, 1000);
}


function equal(joueurChoice , adversaireChoice){
    const choice1 = "joueur".fontsize(3).sub();
    const choice2 = "adversaire".fontsize(3).sub();
    const joueurChoice_div = document.getElementById(joueurChoice);
    result_p.innerHTML = `${convertisseur(joueurChoice)}${choice1} annule ${convertisseur(adversaireChoice)}${choice2}. Match nul`;
    joueurChoice_div.classList.add('grey-glow');
    setTimeout(function(){ joueurChoice_div.classList.remove('grey-glow') }, 1000);
}


function game(joueurChoice){
    const adversaireChoice = getAdversaireChoice();
    switch( joueurChoice + adversaireChoice){
        case "pc":
        case "cf":
        case "fp":
            win(joueurChoice, adversaireChoice);
            break;
        case "pf":
        case "cp":
        case "fc":
            lose(joueurChoice, adversaireChoice);
            break;
        case "pp":
        case "cc":
        case "ff":
            equal(joueurChoice, adversaireChoice);
            break;
    }
    
}




function main(){
pierre_div.addEventListener('click', function() {
    game("p");
})

feuille_div.addEventListener('click', function() {
    game("f");

})

ciseau_div.addEventListener('click', function() {
    game("c");

})
}

main();