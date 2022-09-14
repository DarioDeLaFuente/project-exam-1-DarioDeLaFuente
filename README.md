# WP blogg the Project Exam 1

![image](https://schoolassignment.adaptmedia.net/app/uploads/2022/09/Screenshot-2022-09-14-at-15.41.30.png)

This is a simple overview of the use/purpose of the project.

## Description

A detailed description of what the project entails and set out to do.
The project exam reflects my creative and technical knowledge and skills based on the first semester curriculum. This includes design principles, project management, communication technology, and developing with HTML/CSS.

This are some bullet points:

- The HTML i semantic and neat.
- CSS, I follow the DRY principle it makes it easy to read.
- The website i responsive and look good at every screen size with no horizontal scrollbars. 
- I use Flexbox and CSS Grids where appropriate. 
- I do not use a CSS framework like Bootstrap, The want to see that we can build responsive sites without the help of a framework.
- The site is WCAG compliant and accessibility taken into account.
- Each page has a unique meta description, title, and h1.
- All code submitted is written by me. 
- The site download quickly, and is not overly "heavy". Images are not over 200kb.
- The is easy to use on a variety of devices.
- The site show consideration for content strategy and SEO (i considerd the use of meta tags and alt text).


## This is the exam brief:
I have been tasked with creating a blog site. I choose to design a art blog, contains the following pages:
-	Home page
-	About page
-	List of blog posts
-	Blog post specific pages
-	Contact page.

### Home Page
The home page should have a ‘Latest Posts’ section which uses a carousel (slider) for users to click to view more posts. For example, by default the user can see four posts, then they can click an arrow on the right to view the next four posts, and click it again to view the next four posts. The user can also click back to view results they had previously seen. This must be implemented for desktop at least, but if you want a simpler layout for mobile, you can change it from being in a carousel.

### Blog Page

The blog posts page should show the first 10 blogs, and the user should click to view more results which then show underneath the first 10 blogs.

### Blog Specific Page

The content of the blog specific page should be dynamically built using a query string parameter based on whatever link the user clicked. The title of the blog specific page should change based on the blog that has been clicked on e.g. “My Blog | An Article I Wrote”.

If images on the blog post page are clicked, a modal should appear giving the user a bigger view of that image. Clicking outside the image should hide the modal.

### Contact page

Create a contact us page, there should be 4 textboxes on this page.
-	Name (Should be more than 5 characters long)
-	Email address (Must be a valid email address)
-	Subject (Should be more than 15 characters long)
-	Message content (Should be more than 25 characters long)

Please use JavaScript for validation, show error messages if the values in the textboxes do not meet the requirements.

### WordPress

The content for your website will be stored on a WordPress installation used as a Headless CMS. It’s important to note that we are only using WordPress to provide an API and add content for the blog. You should not submit a link to a WordPress site, but build your website using HTML, CSS and JavaScript and making a call to the WordPress REST API to fetch the data. 

The project has two aspects:
-	API from your WordPress installation
-	Your website built with HTML, CSS and JavaScript

You will need to add at least 12 blogs for your website. You can use lorem ipsum for paragraphs if you need, but headings, images etc. should all make sense.


## Built With

A list of the tech stack that i used:

- [HTHL](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [WP API](https://developer.wordpress.org/rest-api/)
- [POSTMAN](https://www.postman.com/)
- [DOCKER](https://docs.docker.com/get-started/)

## Getting Started

### Installing

This is how to get the project started.

1. Clone the repo:

```bash
git clone https://github.com/DarioDeLaFuente/project-exam-1-DarioDeLaFuente.git
```
### Running

To run the porodject, run the following commands:

## RUN DOCKER
```
docker-compose up -d
```
```
docker-compose start
```

2. Install the dependencies:

```
npm install
```

## END DOCKER
> 
```
docker-compose stop
```

## Link to the site: https://vermillion-donut-4575b5.netlify.app/index.html 

## Contact

[My LinkedIn page]()
