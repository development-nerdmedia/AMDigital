$(document).ready(function () {
    $("#curiosidad").hover(function () {
        $("#imgHome1").css("display", "block");
        // $("#imgHome1").css("mostrar", "desaparecer 0.8s ease");
        $("#imgHome2").css("display", "block");
        $("#imgHome3").css("display", "block");
        $("#imgHome4").css("display", "block");
    }, function () {
        // $("#imgHome1").css("animation", "desaparecer 0.8s ease");
        $("#imgHome1").css("display", "none");
        $("#imgHome2").css("display", "none");
        $("#imgHome3").css("display", "none");
        $("#imgHome4").css("display", "none");
    });
});

var mediaqueryList = window.matchMedia("(max-width: 426px)");
if (mediaqueryList.matches) {
    document.querySelector('.mostrar').removeAttribute('id');
}

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");
const marqueeContent2 = document.querySelector("ul.marquee-content2");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);
root.style.setProperty("--marquee-elements", marqueeContent2.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    marqueeContent2.appendChild(marqueeContent2.children[i].cloneNode(true));
}


/* elementos de contacto en pantalla */
const nombre = document.querySelector("#full-name");
const telephone = document.querySelector("#telephone");
const message = document.querySelector("#message");

document.addEventListener("click", function (e) {
    if (e.target.type == "submit") {
        if (nombre.value.length === 0) {
            if ($("#full-name2.focus-visible")) {
                nombre.classList.add("falto");
            }
            else {
                nombre.classList.remove("falto");
            }
        }
        if (telephone.value.length === 0) {

            if ($("#telephone2.focus-visible")) {
                telephone.classList.add("falto");
            }
            else {
                telephone.classList.remove("falto");
            }
        }
        // if (email.value.length === 0) {

        //     if ($("#telephone2.focus-visible")) {
        //         email.classList.add("falto");
        //     }
        //     else {
        //         email.classList.remove("falto");
        //     }
        // }
        if (message.value.length === 0) {

            if ($("#telephone2.focus-visible")) {
                message.classList.add("falto");
            }
            else {
                message.classList.remove("falto");
            }
        }
    }
})



/* -----slider home----- */

const root1 = document.documentElement;
const marqueeElementsDisplayed1 = getComputedStyle(root1).getPropertyValue("--marquee-elements-displayed1");
const marqueeContent1 = document.querySelector("ul.marquee-content1");

root1.style.setProperty("--marquee-elements1", marqueeContent1.children.length);

for (let i = 0; i < marqueeElementsDisplayed1; i++) {
    marqueeContent1.appendChild(marqueeContent1.children[i].cloneNode(true));
}