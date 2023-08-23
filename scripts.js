document.addEventListener("DOMContentLoaded", function () {
    const cookieBar = document.querySelector(".cookie-bar");
    const acceptButton = document.getElementById("accept-cookies");
    const rejectButton = document.getElementById("reject-cookies");

    // Controlla se l'utente ha già accettato i cookie
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");

    if (cookiesAccepted) {
        cookieBar.style.display = "none"; // Nascondi la barra dei cookie se sono già stati accettati
    } else {
        cookieBar.style.display = "block"; // Mostra la barra dei cookie se non sono ancora stati accettati
    }

    // Gestisci il click sul pulsante "Accetta"
    acceptButton.addEventListener("click", function () {
        localStorage.setItem("cookiesAccepted", "true");
        cookieBar.style.display = "none"; // Nascondi la barra dei cookie dopo l'accettazione
    });

    // Gestisci il click sul pulsante "Rifiuta"
    rejectButton.addEventListener("click", function () {
        localStorage.removeItem("cookiesAccepted");
        cookieBar.style.display = "none"; // Nascondi la barra dei cookie dopo il rifiuto
    });
});
