// API for get requests
const wpPageUrl = "https://projectexamone.adaptmedia.net/wp-json/wp/v2/pages?slug=";

const pageConteiner = document.querySelector(".page-results");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("slug");
const blogTitle = document.title;

async function getPage() {
  try {
    document.title = "lodding | Banksy";
    const response = await fetch(wpPageUrl + id);
    const pageJson = await response.json();
    const pageDetails = pageJson[0];
    page(pageDetails);
  } catch (error) {
    pageConteiner.innerHTML = "";
    pageConteiner.innerHTML += displayError("Error: Failed to fetch API data");
  }
}

getPage();

function page(pageDetails) {
  document.title = pageDetails.title.rendered + " | Banksy";
  pageConteiner.innerHTML = `
  <div class="content-box"> 
    <div class="form-passed"></div>
      <h3> ${pageDetails.title.rendered}</h3>
      <p> ${pageDetails.content.rendered}</p>
  </div>`;
}
