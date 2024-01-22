let White = true;
let bouton = document.querySelector("button");
let scroller = document.querySelector("label");
document.querySelector("header").style.transition = "300ms";
const elementEcriture = [document.querySelector("header").querySelectorAll("a"),
 document.querySelectorAll("p"), document.querySelectorAll("h2"),
  document.querySelectorAll("h1"), document.querySelectorAll("li")];

const backGround = document.querySelectorAll("aside");
function functionDarkMode() {
    if (White) {
        /* Partie en mode black */
        White = false;
        bouton.style.left = "62%";
        document.querySelector("header").style.backgroundColor = "black";
        scroller.style.backgroundColor = "white";
        bouton.style.backgroundColor = "black";
        for (let i = 0; i < elementEcriture.length; i++) {
            for (let j = 0; j < elementEcriture[i].length; j++) {
                elementEcriture[i][j].style.color = "white";
            }
        } for (let i = 0; i < backGround.length; i++) {
            backGround[i].style.background = "black";
        }
    } else {
        /* Partie en mode white */
        White = true;
        bouton.style.left = "5%";
        document.querySelector("header").style.backgroundColor = "white";
        scroller.style.backgroundColor = "black";
        bouton.style.backgroundColor = "white";
        for (let i = 0; i < elementEcriture.length; i++) {
            for (let j = 0; j < elementEcriture[i].length; j++) {
                elementEcriture[i][j].style.color = "black";
            }
        } for (let i = 0; i < backGround.length; i++) {
            backGround[i].style.background = "white";
        }
    }
}
