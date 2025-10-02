// Example: Simple button alert
document.querySelector(".hero button").addEventListener("click", () => {
  alert("Welcome to Perlis Tourism!");
});

function loadComponent(id, file) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    });
}

loadComponent("navbar", "components/navbar.html");
loadComponent("hero", "components/hero.html");
loadComponent("about", "components/about.html");
loadComponent("travel", "components/travel.html");
loadComponent("houses", "components/houses.html");
loadComponent("contact", "components/contact.html");
loadComponent("footer", "components/footer.html");
