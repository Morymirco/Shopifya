const btn = document.getElementById("btn");
const search = document.querySelector("#input");
const heart = document.querySelector("#heart");
const card = document.querySelector(".card");
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
if (window.innerWidth < 530) {
  card.style.width = "100%";
  card.style.transition = "width 2s ease-in-out";
} else {
  card.style.width = "18rem";
}
heart.addEventListener("click", () => {
  heart.classList.toggle("red");
  // heart.style.backgroundColor = "red";
});
