// HEADER LOGO
import header from "./../templates/header.html?raw";
import footer from "./../templates/footer.html?raw";

document.addEventListener("DOMContentLoaded", function () {
    // HEADER
    document.querySelector("header").innerHTML = header;

    if (import.meta.hot) {
        import.meta.hot.accept(() => {
            location.reload();
        });
    }

    // FOOTER
    document.querySelector("footer").innerHTML = footer;

    if (import.meta.hot) {
        import.meta.hot.accept(() => {
            location.reload();
        });
    }
});

// FOOTER

// document.addEventListener("DOMContentLoaded", function () {
//     fetch("../../templates/footer.html")
//         .then((response) => response.text())
//         .then((data) => {
//             document.querySelector("#footer").innerHTML = data;
//         })
//         .catch((error) => console.error("Error cargando el footer:", error));
// });
