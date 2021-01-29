/*console.log("Go Chuck !");
document.querySelector("div").onmouseover = function () {
  mouseOver();
};
document.querySelector("div").onmouseout = function () {
  mouseOut();
};

function mouseOver() {
  document.querySelector("div").style.borderRadius = "0%";
}

function mouseOut() {
    document.querySelector("div").style.borderRadius = "50%";
}

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
}*/

/*console.log(divChuck);*/

/*changer l'apparence*/

const divChuck = document.querySelector("main > section > aside > div");
divChuck.addEventListener("mouseover", function () {
  /*alert();*/
  divChuck.style.borderRadius = 0;
});

divChuck.addEventListener("mouseout", function () {
  divChuck.style.borderRadius = "50%";
});

const articleHeaders = document.querySelectorAll(
  "main > section > section > article"
);
/*methode avec un seul element
articleHeaders.addEventListener("click, function()"){} */
/*on cherche tous les elements headers présents dans un article*/
articleHeaders.forEach(function (element) {
  /*console.log("element")*/
  /*element.addEventListener("click", function()) {} doit être 
dans la première fonction = articleHeaders, elles sont imbriquées, interdependantes
car une fonction click pour chacun*/
  element.addEventListener("click", function () {
    /*test pour savoir qui est ciblé dans cette function*/
    console.log(this, this.querySelector("div"));
    /*si j'ajoute This.querySelector('div) je cible bien la div, donc je
    déclare je n'en fais pas une constante*/
    let divTarget = this.querySelector("div");
    /*divTarget est déclarée donc je la vise dans if*/

    // if (divTarget.style.visibility !== "hidden") { si un soucis de chargement au
    // click prendre cette option mais probleme pour revenir à 0
    if (divTarget.style.visibility === "hidden") {
      divTarget.style.visibility = "visible";
      divTarget.style.height = "auto";
      divTarget.style.visibility = "visible";
    } else {
      divTarget.style.visibility = "hidden";
      divTarget.style.height = "0px";
    }
  });
});

/*etape 3 de l'exo*/
/* renvoie à une promesse*/
fetch("data/menu.Json"); then ().then(reponse.json()).then(()=>{
 .then(response.json)
 .then((datas)=>{
   console.
 })
// });
