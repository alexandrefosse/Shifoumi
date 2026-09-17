let nbVictoires = 0;
let nbDefaites = 0;
let coupJoue ;
const coups = ["pierre","feuille","ciseau"]

let btnPierre = document.getElementById("btn-pierre");
let btnFeuille = document.getElementById("btn-feuille");
let btnCiseaux = document.getElementById("btn-ciseaux");
let labelNbVictoires = document.getElementById("nb-victoire");
let labelNbDefaites = document.getElementById("nb-defaite");
let btnReset = document.getElementById("btn-reset");

btnPierre.addEventListener("click", pierre)
btnFeuille.addEventListener("click", feuille)
btnCiseaux.addEventListener("click", ciseaux)

btnReset.addEventListener("click", () => {
    nbDefaites = 0 ;
    nbVictoires = 0 ;
    labelNbVictoires.textContent = nbVictoires;
    labelNbDefaites.textContent = nbDefaites;
})

labelNbVictoires.textContent = nbVictoires;
labelNbDefaites.textContent = nbDefaites;




function pierre() {
    console.log("A joué Pierre") ;
    coupJoue = "pierre";
    botPlay();
}

function feuille() {
    console.log("A joué Feuille") ;
    coupJoue = "feuille";
    botPlay();
}

function ciseaux() {
    console.log("A joué Ciseaux") ;
    coupJoue = "ciseaux";
    botPlay();
}

function botPlay() {
    let botChoice = coups[Math.floor(Math.random()*coups.length)];

    if(botChoice === "pierre"){
        switch (coupJoue) {
            case "pierre":
                break ;

            case "feuille":
                nbVictoires += 1 ;
                break;

            case "ciseaux":
                nbDefaites += 1 ;
                break;
        }
    } else if (botChoice === "feuille") {
        switch (coupJoue) {
            case "pierre":
                nbDefaites += 1 ;
                break ;

            case "feuille":
                break;

            case "ciseaux":
                nbVictoires += 1 ;
                break;
        }
    }else {
        switch (coupJoue) {
            case "pierre":
                nbVictoires += 1 ;
                break ;

            case "feuille":
                nbDefaites += 1 ;
                break;

            case "ciseaux":
                break;
        }
    }
    labelNbVictoires.textContent = nbVictoires;
    labelNbDefaites.textContent = nbDefaites;
}
