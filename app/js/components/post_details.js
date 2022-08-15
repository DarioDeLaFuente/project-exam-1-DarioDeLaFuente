// Get calls
const detailsConteiner = document.querySelector(".post-results");
const postQueryString = document.location.search;
const params = new URLSearchParams(postQueryString);
const id = params.get("post_id");

// API for get requests
const detailsUrlPost = "https://projectexamone.adaptmedia.net/wp-json/wp/v2/posts/" + id;

async function detailsOfPost() {
  try {
    const response = await fetch(detailsUrlPost);
    const details = await response.json();
    postDetails(details);
  } catch (error) {
    detailsConteiner.innerHTML = displayError("Error: Failed to fetch API data");
  }
}
detailsOfPost();

function postDetails(details) {
  document.title = details.title.rendered;
  detailsConteiner.innerHTML = `
  <div class="post-results"> 
        <div class="post-details-page">
        <div class="block_1">
          <div class="alert_block" id="alert_block_popup-1">
            <div class="alert_block_overlay" onclick="toggleAlertBlock()"
            onkeyup="toggleAlertBlock()"></div>
            <div class="alert_block_content">
              <div class="product_description">
              <img class="post-img-thumbnai-zoom" src="${details.jetpack_featured_media_url}" alt="Image of ${details.title.rendered} "/></div>
            </div>
          </div>
        </div>
         <img class="post-img-thumbnai alert" onclick="toggleAlertBlock()" onkeyup="toggleAlertBlock()" src="${details.jetpack_featured_media_url}" alt="Image of ${details.title.rendered}"/>
         <h3> ${details.title.rendered}</h3>
         <p>${details.content.rendered}</p>
        </div>
      </div>`;
}
/*
 * Alert Block
 */

function toggleAlertBlock() {
  document.getElementById("alert_block_popup-1").classList.toggle("active");
}
