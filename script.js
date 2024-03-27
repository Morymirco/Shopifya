const btn = document.getElementById("btn");
const search = document.querySelector("#input");

btn.addEventListener("click", () => {
  if (window.innerWidth < 510) {
    console.log("Arrêtez");
    search.style.width = "100%";
    search.style.transition = "width 2s ease-in-out";

    // Ajouter l'écouteur d'événement change ici
    search.addEventListener("change", () => {
      search.style.width = "0px";
      search.style.transition = "width 2s ease-in-out";
    });
  }
});
