let White = true;
let bouton = document.querySelector("button");
let scroller = document.querySelector("label");
document.querySelector("header").style.transition = "300ms";
const elementEcriture = [document.querySelector("header").querySelectorAll("a"),
document.querySelectorAll("p"), document.querySelectorAll("h2"),
document.querySelectorAll("h1"), document.querySelectorAll("li"), document.querySelector("footer").querySelectorAll("a")];
const backGroundFooter = document.querySelector("footer").querySelectorAll("div");
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
        /* PARTIE FOOTER */
        for(let i = 0; i < backGroundFooter.length;i++){
            if(backGroundFooter[i].getAttribute('class') == "ligne1" || backGroundFooter[i].getAttribute('class') == "ligne2"){
                backGroundFooter[i].style.backgroundColor = "#1c1c1c";
            }
            document.querySelector("footer").querySelector("img").src = "../img/logo-hardis-footer.png";
        }
    } else {
        /* Partie en mode white */
        location.reload();
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
        /* PARTIE FOOTER */
        for(let i = 0; i < backGroundFooter.length;i++){
            if(backGroundFooter[i].getAttribute('class') == "ligne1" || backGroundFooter[i].getAttribute('class') == "ligne2"){
                backGroundFooter[i].style.backgroundColor = "white";
            }
        }
        document.querySelector("footer").querySelector("img").src = "../img/logo-hardis-group(2).png";

    }
}
