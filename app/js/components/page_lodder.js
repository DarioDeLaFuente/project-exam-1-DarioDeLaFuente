// API for get requests
const wpUrl = "https://projectexamone.adaptmedia.net/wp-json/wp/v2/posts";
const postsConteiner = document.querySelector(".content");
const adding = document.querySelector(".adding");

let pages = "?page=1";

async function getPosts() {
  try {
    const response = await fetch(wpUrl + pages);
    const posts = await response.json();
    postsListDetails(posts);
  } catch (error) {
    postsConteiner.innerHTML = "";
    postsConteiner.innerHTML += displayError("Error: Failed to fetch API data");
  }
}

getPosts();

function postsListDetails(posts) {
  postsConteiner.innerHTML = "";
  for (let i = 0; i < posts.length; i++) {
    document.title = posts[i].id;
    postsConteiner.innerHTML += `
        <div class="post-details">
        <a href="/blog_singel_page.html?post_id=${posts[i].id}"> 
         <img class="post-img-thumbnai" src="${posts[i].jetpack_featured_media_url}" alt="Image of "/>
         <h3> ${posts[i].title.rendered}</h3>
         <p>${posts[i].id}</p>
         ${posts[i].slug}</a>
        </div>`;
  }
  console.log(posts);
}

adding.addEventListener("click", () => {
  pages = "?per_page=20";
  postsConteiner.innerHTML = `
  <div class="lodder-container">
  <div class="lodder-roller">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>`;
  getPosts(pages);
});
