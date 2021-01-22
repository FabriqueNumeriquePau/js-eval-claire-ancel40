/*exo1*/

console.log("Go Chuck !");
document.querySelector("div").onmouseover = function() {mouseOver()};
document.querySelector("div").onmouseout = function() {mouseOut()};

function mouseOver() {
    document.querySelector("div").style.borderRadius = "0%";
}

function mouseOut() {
    document.querySelector("div").style.borderRadius = "50%";
}

/*document.getElementsByClassName('picto').onmousemove = beeGame.mouseMove;

beeGame.mouseMove = function(mouseMovement) {
   
};*/

/*exo2*/

let fleche = document.querySelectorAll("header");
let i;
for (i = 0; i < fleche.length; i++) {
    fleche[i].addEventListener("click", function() {
        
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.visibility === "hidden" || content.style.visibility === "" )
         {
            content.style.visibility = "visible"; 
            content.style.height = "auto";
        }  else {
            content.style.visibility = "hidden";
            content.style.height = "0px"
        }

    });
/*exo 3*/

class pied{
    constructor(nom, lien){
        this.nom = mentions legales;
        this.lien = mentions;
    }
}
getHtml = ()=>{
    const titre = document.createElement(h2);
    titre.textContent=this.nom
    returntitre;
};

{"nom":"RGPD", "lien":"#rgpd"},
        {"nom":"Mentions légales", "lien":"#mentions"},
        {"nom":"Copyright", "lien":"#copyright"}