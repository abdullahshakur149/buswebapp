// Function for Hamburger Menu (All Pages)

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".ham>img");
    const list = document.querySelector(".list");
    function toggleMenu() {
        list.classList.toggle("active");
    }
    hamburger.addEventListener("click", toggleMenu);
});

// Function for the Slider (Index Page)

let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName("image");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index-1].style.display = "block";
  setTimeout(displayImages, 3000); 
}

// Functions for Revealing Element Upwards

function checkForVisibility() {
    var upwards = document.querySelectorAll(".upward");
    upwards.forEach(function(upward) {
      if (isElementInViewport(upward)) {
        upward.classList.add("upwardVisible");
      } 
    });

    var right = document.querySelectorAll(".right");
    right.forEach(function(right) {
      if (isElementInViewport(right)) {
        right.classList.add("rightVisible");
      } 
    });
}
  
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
  
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
  
if (window.addEventListener) {
    addEventListener("DOMContentLoaded", checkForVisibility, false);
    addEventListener("load", checkForVisibility, false);
    addEventListener("scroll", checkForVisibility, false);
}

// Functions for Card buttons (Services Page)

function showCard(button) {
    const modal = document.getElementById("card");
    const overlay = document.getElementById("overlay");
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalList = document.getElementById("modalList");

    const title = button.getAttribute("data-title");
    const content = button.getAttribute("data-content");
    const imageSrc = button.getAttribute("data-image-src");

    modalImage.src = imageSrc;
    modalTitle.textContent = title;

    modalList.innerHTML = "";
    modalList.innerHTML = content;

    modal.style.display = "flex";
    overlay.style.display = "block";

    overlay.addEventListener("click", hideCard);
}

function hideCard() {
        const modal = document.getElementById("card");
        const overlay = document.getElementById("overlay");

        modal.style.display = "none";
        overlay.style.display = "none";

        overlay.removeEventListener("click", hideCard);
}

document.addEventListener("DOMContentLoaded", function () {
    const btns = document.querySelectorAll(".btn");
    btns.forEach((btn, index) => {
        btn.addEventListener("click", (event) => {
            event.stopPropagation();
            const serviceDiv = btn.closest(".ss");
            const title = serviceDiv.querySelector("h3").textContent;
            const imageSrc = getComputedStyle(serviceDiv).backgroundImage.slice(5, -2);
            const listItems = Array.from(serviceDiv.querySelectorAll("ul li")).map(item => item.textContent);

            showCard(title, imageSrc, listItems);
        });
    });
});


