let links = document.querySelectorAll('.link')


links.forEach((e) => {
  e.addEventListener('click', () => {
    links.forEach((e) => { e.classList.remove('active') })
    e.classList.add('active')
  })
})

let drop = document.querySelectorAll('.drop');

drop.forEach((e) => {
  e.addEventListener('click', () => {
    e.classList.toggle('active');
  })
})


document.addEventListener("DOMContentLoaded", function() {
  let goTop = document.querySelector(".goTop");
  let footer = document.querySelector("footer");
  let homeMedia = document.querySelector(".homeMedia");

  goTop.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 400) {
      goTop.style.display = "block";
    } else {
      goTop.style.display = "none";
    }
    if (footer && window.scrollY >= footer.offsetTop - 600) {
      if (homeMedia) {
        goTop.style.display = "none";
        homeMedia.style.display = "none";
      }
    } else {
      if (homeMedia) {
        goTop.style.display = "flex";
        homeMedia.style.display = "flex";
      }
    }
  });
});



function toggleMenu() {
  var close = document.getElementById("closeicon");
  var menuItems = document.getElementById("menuItems");
  if (menuItems.style.display === "none" || menuItems.style.display === "") {
      menuItems.style.display = "block";
      close.style.display = "block";
  } else {
      menuItems.style.display = "none";
      close.style.display = "none";
  }
}

// Start Faqs
let faqs = document.querySelectorAll(".faq");

faqs.forEach((e) => {
  e.addEventListener("click", () => {
    faqs.forEach((el) => {
      el !== e ? el.classList.remove("active") : "";
    });
    e.classList.toggle('active');
  });
});

// End Faqs



// 
function toggleMenu() {
  var close = document.getElementById("closeicon");
  var menuItems = document.getElementById("menuItems");
  if (menuItems.style.display === "none" || menuItems.style.display === "") {
      menuItems.style.display = "block";
      close.style.display = "block";
  } else {
      menuItems.style.display = "none";
      close.style.display = "none";
  }
}


let header = document.querySelector(".header");
window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
      header.classList.add('color');
    } else {
      header.classList.remove('color');
    }
})


// 

let nav = document.querySelector(".nav");
let menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
  if (nav.style.left === "0px") {
    nav.style.left = "-400px";
  } else {
    nav.style.left = "0px";
  }
  menu.classList.toggle("active");
});


document.addEventListener("DOMContentLoaded", function () {
  var overlay = document.querySelector('.overlay');
  var body = document.querySelector('body');

  // Users can skip the loading process if they want.
  document.querySelector('.skip').addEventListener('click', function () {
      overlay.classList.add('loaded');
      body.classList.add('loaded');
  });

  // Will wait for everything on the page to load.
  window.addEventListener('load', function () {
      setTimeout(function () {
          overlay.classList.add('loaded');
          body.classList.add('loaded');
      }, 2000); // Remove overlay after 2 seconds
  });

  // Will remove overlay after 1 minute if users cannot load properly.
  setTimeout(function () {
      overlay.classList.add('loaded');
      body.classList.add('loaded');
  }, 60000);
});