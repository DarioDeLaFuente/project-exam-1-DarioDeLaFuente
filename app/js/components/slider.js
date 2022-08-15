/**
 * slider
 */

// API for get requests
wpUrl = "https://projectexamone.adaptmedia.net/wp-json/wp/v2/posts?per_page=5";
const postsConteiner = document.querySelector(".content");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

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
    //formating the date
    const postDate = posts[i];
    const date = new Date(postDate.date);
    const formattedDate = date.toLocaleDateString();
    postsConteiner.innerHTML += `
        <div class="post-details">
         <img class="post-img-thumbnai" src="${posts[i].jetpack_featured_media_url}" alt="Image of ${posts[i].title.rendered}"/> 
         <h3> ${posts[i].title.rendered}</h3>
         <div class="pots-btn-box">
         <a class="pots-btn-read-more" href="/blog_singel_page.html?post_id=${posts[i].id}">Read more</a>
         </div>
         <p class="entry-date">${posts[i].type} ${posts[i].status}:${formattedDate}</p>
        </div>`;
  }
  for (let i = 0; i < posts.length; i++) {
    //formating the date
    const postDate = posts[i];
    const date = new Date(postDate.date);
    const formattedDate = date.toLocaleDateString();
    postsConteiner.innerHTML += `
        <div class="post-details">
         <img class="post-img-thumbnai" src="${posts[i].jetpack_featured_media_url}" alt="Image of ${posts[i].title.rendered}"/> 
         <h3> ${posts[i].title.rendered}</h3>
         <div class="pots-btn-box">
         <a class="pots-btn-read-more" href="/blog_singel_page.html?post_id=${posts[i].id}">Read more</a>
         </div>
         <p class="entry-date">${posts[i].type} ${posts[i].status}:${formattedDate}</p>
        </div>`;
  }

  const postItems = document.querySelectorAll(".post-details");

  postItems.forEach(function (itemSlide, indexOfItem) {
    itemSlide.style.left = `${indexOfItem * itemSlide.offsetWidth}px`;
  });

  let counter = 0;

  nextBtn.addEventListener("click", function () {
    counter++;
    imgSlide();
  });

  prevBtn.addEventListener("click", function () {
    counter--;
    imgSlide();
  });

  function imgSlide() {
    if (counter === postItems.length / 2) {
      counter = 0;
    } else if (counter < 0) {
      counter = postItems.length / 2 - 1;
    }
    postItems.forEach(function (itemSlide) {
      itemSlide.style.transform = `translateX(-${counter * itemSlide.offsetWidth}px)`;
    });
  }
}
