function mostrarCarta() {

    const intro = document.getElementById("intro");

    const carta = document.getElementById("carta");

    const music = document.getElementById("music");
    music.play();
    // Desaparece la portada
    intro.style.opacity = "0";

    setTimeout(() => {

        intro.style.display = "none";

        carta.classList.remove("hidden");

        carta.classList.add("show");

    }, 800);

}