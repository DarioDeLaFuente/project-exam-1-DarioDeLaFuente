// API for get requests
const wpUrl = "https://projectexamone.adaptmedia.net/wp-json/wp/v2/posts";
const postsConteiner = document.querySelector(".content");
const adding = document.querySelector(".adding");
let pageNumber = 1;
let maxPageNumber;
const blogTitle = document.title;

async function getPosts() {
  try {
    document.title = "lodding | Banksy";
    adding.innerHTML = "Loading...";
    const response = await fetch(wpUrl + "?page=" + pageNumber);
    maxPageNumber = parseInt(response.headers.get("x-wp-totalpages"));

    console.log(pageNumber, maxPageNumber, pageNumber >= maxPageNumber);
    if (pageNumber >= maxPageNumber) {
      adding.style.display = "none";
    }
    pageNumber++;
    adding.innerHTML = "Load more";
    const posts = await response.json();
    postsListDetails(posts);
    document.title = blogTitle;
  } catch (error) {
    console.error("error catched ", error);
    postsConteiner.innerHTML = "";
    postsConteiner.innerHTML += displayError("Error: Failed to fetch API data");
  }
}

getPosts(pageNumber);

function postsListDetails(posts) {
  document.querySelector(".lodder-container").style.display = "none";
  for (let i = 0; i < posts.length; i++) {
    document.title = posts[i].id;
    const postDate = posts[i];
    const date = new Date(postDate.date);
    const formattedDate = date.toLocaleDateString();
    console.log(formattedDate);
    postsConteiner.innerHTML += `
        <div class="post-details">
        <a href="/blog_singel_page.html?post_id=${posts[i].id}"> 
         <img class="post-img-thumbnai" src="${posts[i].jetpack_featured_media_url}" alt="Image of ${posts[i].title.rendered}"/>
         <h3> ${posts[i].title.rendered}</h3>
         </a>
         <div class="pots-btn-box">
         <a class="pots-btn-read-more" href="/blog_singel_page.html?post_id=${posts[i].id}">Read more</a>
         </div>
         <p class="entry-date">${posts[i].type} ${posts[i].status}:${formattedDate}</p>
        </div>`;
  }
}

adding.addEventListener("click", () => {
  getPosts();
});
