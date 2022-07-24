// API for get requests
const wpUrl = "https://projectexamone.adaptmedia.net/wp-json/wp/v2/posts?per_page=20";
const postsConteiner = document.querySelector(".content");

async function getPosts() {
  try {
    const response = await fetch(wpUrl);
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
         <img class="post-img-thumbnai" src="${posts[i].jetpack_featured_media_url}" alt="Image of "/>
         <h3> ${posts[i].title.rendered}</h3>
         <p>${posts[i].id}</p>
         <a href="/blog_singel_page.html?post_id=${posts[i].id}">${posts[i].slug}</a>
        </div>`;
  }
}
