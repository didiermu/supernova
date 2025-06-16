import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const header = () => {
    const buttons = gsap.utils.toArray("header");
    const banner = document.querySelector(".hero--banner");
    buttons.forEach((element) => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: "header",
                start: "+=300",
                end: "+=300",
                scrub: 5,
                toggleActions: "restart pause reverse pause",
                markers: false,
                onEnter() {
                    element.classList.add("collapse");
                    // banner.classList.add("collapse");
                },

                onLeaveBack() {
                    element.classList.remove("collapse");
                    // banner.classList.remove("collapse");
                },
            },
        });
    });
};

header();

const textAnim = () => {
    //Primero capturamos el elemento del DOM con el id que definimos en el html
    const text = document.getElementById("hero-text");
    let str = text.innerHTML;
    text.innerHTML = "";

    //Declaramos una varible en la que asignaremos un valor para que sea el tiempo en ms que durará la función setTimeout
    const speed = 120;
    let i = 0;

    //Esta función recorre todos los caracteres nuestro texto
    const typeWriter = () => {
        if (i < str.length) {
            text.innerHTML += str.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    };

    //Acá ejecutamos la función
    setTimeout(typeWriter, speed);
};

textAnim();

const videoPlay = () => {
    const video = document.querySelector(".hero video");
    const btnVideo = document.querySelector(".hero #btnVideo");

    btnVideo.addEventListener("click", () => {
        video.play();
        video.setAttribute("controls", true);
        btnVideo.remove();
    });
};

videoPlay();

const modalRegistro = () => {
    const modal = document.getElementById("modal-registro");
    const openBtn = document.getElementById("btnRegistro");
    const closeBtn = document.querySelector("#modal-registro #btn-close");

    // Update button opens a modal dialog
    openBtn.addEventListener("click", function () {
        modal.showModal();
    });

    closeBtn.addEventListener("click", function () {
        modal.close();
    });
};

modalRegistro();

const animacionEach = (element, inicio = "-=400") => {
    const boxes = gsap.utils.toArray(element);
    boxes.forEach((box) => {
        gsap.fromTo(
            box,
            {
                yPercent: 20,
            },
            {
                yPercent: 0,
                scrollTrigger: {
                    trigger: box,
                    start: inicio + " center",
                    end: "top center",
                    scrub: 3,
                    toggleActions: "restart pause reverse pause",
                    markers: false,
                },
            }
        );
    });
};

animacionEach(".hero .hero--video");
animacionEach(".registro h3");
animacionEach(".registro--info");

gsap.fromTo(
    "#img-parallax",

    {
        yPercent: 0,
    },
    {
        yPercent: -20,
        scrollTrigger: {
            trigger: "#img-parallax",
            start: "top top",
            end: "+=2000 center",
            scrub: 1,
            toggleActions: "restart pause reverse pause",
            markers: false,
        },
    }
);
