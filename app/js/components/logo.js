// API for get requests
const media = "https://projectexamone.adaptmedia.net/app/uploads/2022/08/";
const logo = "logo.webp";
const logoImg = media + logo;
const logoConteiner = document.querySelector("#logo");

function getLogo() {
  logoConteiner.innerHTML += `
  <a href="/index.html"><img class="img-logo" src="${logoImg}" alt="Image of banksy logo"/></a>
  `;
}
getLogo();
