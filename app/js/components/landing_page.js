pageLandigUrl = "https://projectexamone.adaptmedia.net/wp-json/wp/v2/pages/?page_id=93";

pageConteiner = document.querySelector(".landing-box");

async function getPage() {
  try {
    const response = await fetch(pageLandigUrl);
    const pageJson = await response.json();
    const pageDetails = pageJson[0];
    landigPage(pageDetails);
  } catch (error) {
    pageConteiner.innerHTML = "";
    pageConteiner.innerHTML += displayError("Error: Failed to fetch API data");
  }
}

getPage();

function landigPage(pageDetails) {
  document.title = pageDetails.title.rendered;
  pageConteiner.innerHTML = `
  <div class="banner-post-results-continer"> 
    <div class="post-details-landig">
      <p> ${pageDetails.content.rendered}</p>
    </div>
  </div>`;
}
