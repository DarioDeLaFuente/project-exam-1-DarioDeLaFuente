// API for get requests
const wpNavUrl = "https://projectexamone.adaptmedia.net/wp-json/wp/v2/categories";

const navConteiner = document.querySelector("#sideNav");

async function getNav() {
  try {
    const response = await fetch(wpNavUrl);
    const nav = await response.json();

    navConteiner.innerHTML = "";
    for (let i = 0; i < nav.length; i++) {
      let link = "";
      if (nav[i].count) {
        link = nav[i].slug + ".html";
      } else {
        link = "/cms.html?slug=" + nav[i].slug;
      }
      navConteiner.innerHTML += `
      <a
          href="javascript:void(0)"
          class="sideNavCloseButton"
          onclick="closeSideNav()"
          onkeyup="closeSideNav()"
          >&times;
        </a>
      <a class="navbar" href="${link}">${nav[i].name}</a>`;
    }
  } catch (error) {
    navConteiner.innerHTML = "";
    navConteiner.innerHTML += displayError("Error: Failed to fetch API data");
  }
}

getNav();
