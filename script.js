const btn = document.getElementById("btn");
const search = document.querySelector(" #input");
// Ajoutez l'événement click une seule fois
btn.addEventListener("click", () => {
  if (window.innerWidth < 510) {
    console.log("arrete");
    search.style.width = "100%";
    search.style.transition = "width 2s ease-in-out";
  }
});
btn.addEventListener("moveover", () => {
  if (window.innerWidth < 510) {
    console.log("arrete");
    search.style.width = "100%";
    search.style.transition = "width 2s ease-in-out";
  }
});
