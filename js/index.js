const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.querySelector("#logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// Nav Links
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link, index) => { // loop through nav links -- forEach link and their index to add corresponding number to the end of each nav-item-
  link.textContent = siteContent["nav"][`nav-item-${index+1}`] // traverse through the siteContent object and set each links text content to nav-item-index+1 which will start at nav-item-1 instead of nav-item-0 and end at nav-item-6. If the nav-item- in the object started at nav-item-0, then I would only need to have ${index} instead of ${index+1}. It appends the number to the end of each nav-item- starting at number 1 because I made it start the loop at number 1 instead of 0 by adding +1 to index.
})

// call to action Title
const ctaTitle = document.querySelector(".cta .cta-text h1")
ctaTitle.textContent = siteContent["cta"]["h1"]

// call to action image
const ctaImg = document.querySelector(".cta img")
ctaImg.src = siteContent["cta"]["img-src"]

// call to action button
const ctaButton = document.querySelector(".cta .cta-text button")
ctaButton.textContent = siteContent["cta"]["button"]

// ######## TOP CONTENT ####### //
// main top heading 1
const topHeading1 = document.querySelectorAll(".top-content .text-content h4")
topHeading1[0].textContent = siteContent["main-content"]["features-h4"]

// main top paragraph 1
const topPara1 = document.querySelectorAll(".top-content .text-content p")
topPara1[0].textContent = siteContent["main-content"]["features-content"]

// main top heading 2
const topHeading2 = document.querySelectorAll(".top-content .text-content h4")
topHeading2[1].textContent = siteContent["main-content"]["about-h4"]

// main top paragraph 2
const topPara2 = document.querySelectorAll(".top-content .text-content p")
topPara2[1].textContent = siteContent["main-content"]["about-content"]

// main middle image
const midImg = document.querySelector("#middle-img")
midImg.src = siteContent["main-content"]["middle-img-src"]


// ######## TOP CONTENT ####### //
// bottom heading 1
const botHeading1 = document.querySelectorAll(".bottom-content .text-content h4")
botHeading1[0].textContent = siteContent["main-content"]["services-h4"]

// bottom paragraph 1
const botPara1 = document.querySelectorAll(".bottom-content .text-content p")
botPara1[0].textContent = siteContent["main-content"]["services-content"]

// bottom heading 2
const botHeading2 = document.querySelectorAll(".bottom-content .text-content h4")
botHeading2[1].textContent = siteContent["main-content"]["product-h4"]

// bottom paragraph 2
const botPara2 = document.querySelectorAll(".bottom-content .text-content p")
botPara2[1].textContent = siteContent["main-content"]["product-content"]

// bottom heading 3
const botHeading3 = document.querySelectorAll(".bottom-content .text-content h4")
botHeading3[2].textContent = siteContent["main-content"]["vision-h4"]

// bottom paragraph 3
const botPara3 = document.querySelectorAll(".bottom-content .text-content p")
botPara3[2].textContent = siteContent["main-content"]["vision-content"]