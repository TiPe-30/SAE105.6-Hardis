let White = true;
let bouton = document.querySelector("button");
let scroller = document.querySelector("label");
/* Récupération élements header */
const elementEcriture = document.querySelector("header").querySelectorAll("a");
const backGroundHeader = document.querySelector("header");
backGroundHeader.style.transition = "300ms";
/* fin récupération élements  header */
/* Récupération des éléments du footer */
const backGroundFooter = document.querySelector("footer").querySelectorAll("div");
const elementEcritureFooter = [document.querySelector("footer").querySelectorAll("a"),document.querySelector("footer").querySelectorAll("li"), document.querySelector("footer").querySelectorAll("p"),
document.querySelector("footer").querySelectorAll("h2")];
/* fin récupération element footer */


function functionDarkMode(){
    if (White){
        /* Partie en mode black */
        White = false;
        bouton.style.left = "62%";
        scroller.style.backgroundColor = "white";
        bouton.style.backgroundColor = "black";
        /* HEADER */
        document.querySelector("header").style.backgroundColor = "#1c1c1c";
        for(let i = 0; i < elementEcriture.length;i++){
            elementEcriture[i].style.color = "white";
        }
        /* FOOTER */
        for(let i = 0; i< backGroundFooter.length;i++){
            backGroundFooter[i].style.backgroundColor = "#1c1c1c";
        }
        for(let i = 0; i < elementEcritureFooter.length;i++){
            for(let j = 0; j < elementEcritureFooter[i].length;j++){
                elementEcritureFooter[i][j].style.color = "white";
            }
        }
        document.querySelector("footer").querySelector("img").src = "../img/logo-hardis-footer.png";
        /* PAGE EN COURS */


    }else{
        /* Partie en mode white */
        window.innerWidth < 1000 ? location.reload():location;
        White = true;
        bouton.style.left = "5%";
        scroller.style.backgroundColor = "black";
        bouton.style.backgroundColor = "white";
        /* HEADER */
        document.querySelector("header").style.backgroundColor = "white";
        for(let i = 0; i < elementEcriture.length;i++){
            elementEcriture[i].style.color = "black";
        }
        /* FOOTER */
        for(let i = 0; i< backGroundFooter.length;i++){
            backGroundFooter[i].style.backgroundColor = "white";
        }
        for(let i = 0; i < elementEcritureFooter.length;i++){
            for(let j = 0; j < elementEcritureFooter[i].length;j++){
                elementEcritureFooter[i][j].style.color = "black";
            }
        }
        document.querySelector("footer").querySelector("img").src = "../img/logo-hardis-group(2).png";
        /* PAGE EN COURS */



    }
}
