AOS.init();
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
    var mediaqueryList1 = window.matchMedia("(max-width: 1300px) and (max-height: 1000px)");
    if (mediaqueryList1.matches) {
        $("#curiosidad").hover(function () {
            $("#imgHome2").css("display", "block");
            $("#imgHome3").css("display", "block");
            $("#imgHome1").css("display", "none");
            $("#imgHome4").css("display", "none");
        }, function () {
            $("#imgHome1").css("display", "none");
            $("#imgHome2").css("display", "none");
            $("#imgHome3").css("display", "none");
            $("#imgHome4").css("display", "none");
        });
    }
});

// start
const start = () => {
    setTimeout(function () {
        confetti.start()
    }, 000); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
};

//  Stop
const stop = () => {
    setTimeout(function () {
        confetti.stop()
    }, 5000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
};

// start();
// stop();

document.addEventListener("click", function (e) {
    if (e.target.closest(".menubtn")) {
        document.querySelector(".menupage").classList.toggle("open");
        // jQuery('body').addClass('scrollhidden');
        document.querySelector("body").classList.toggle("scrollhidden");
    }
    if (e.target.closest(".cerrarr")) {
        document.querySelector(".menupage").classList.toggle("open");
        jQuery('body').removeClass('scrollhidden');

    }
    if (e.target.closest(".noClick")) {
        start();
        stop();
    }
})

var mediaqueryList = window.matchMedia("(max-width: 426px)");
if (mediaqueryList.matches) {
    document.querySelector('.mostrar').removeAttribute('id');
}

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");
// const marqueeContent2 = document.querySelector("ul.marquee-content2");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);
// root.style.setProperty("--marquee-elements", marqueeContent2.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    // marqueeContent2.appendChild(marqueeContent2.children[i].cloneNode(true));
}

/* -----slider2----- */

const root2 = document.documentElement;
const marqueeElementsDisplayed2 = getComputedStyle(root2).getPropertyValue("--marquee-elements-displayed2");
const marqueeContent2 = document.querySelector("ul.marquee-content2");

root2.style.setProperty("--marquee-elements2", marqueeContent2.children.length);

for (let i = 0; i < marqueeElementsDisplayed2; i++) {
    // marqueeContent2.appendChild(marqueeContent2.children[i].cloneNode(true));
    marqueeContent2.insertAdjacentElement('afterbegin', marqueeContent2.children[i].cloneNode(true))
    marqueeContent2.insertAdjacentElement('afterbegin', marqueeContent2.children[i].cloneNode(true))
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

