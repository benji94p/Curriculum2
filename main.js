/* TRIGGER OVERLAY BURGER MENU */

let hamburger_btn = document.querySelector('.hamburger_btn');
let cross_btn = document.querySelector('.cross-btn');
let modal = document.querySelector(".modal");
cross_btn.addEventListener("click",closeBurger);
hamburger_btn.addEventListener("click",toggleBurgerMenu);


function toggleBurgerMenu () {
    console.log("burger menu clicked");
    if (modal.classList.contains('hide')) {
        modal.classList.remove('hide');
        document.querySelector(".cross-btn").style.display ="block";
        document.querySelector(".hamburger_btn").style.display ="none";
        }

  }

function closeBurger () {
    console.log("burge closed");
    document.querySelector(".cross-btn").style.display ="none";
    modal.classList.add('hide');
    document.querySelector(".hamburger_btn").style.display ="block";
}

/* DYNAMIC JSON GALLERY PHOTO */

let data_json = "/image_path.json";
let templateGallery = document.querySelector(".templateGallery").content;
let clonedDiv = document.querySelector('.clonedGallery');

fetch(data_json)
.then((resp) => resp.json())
.then(function(data) {
    console.log(data);

    data.forEach(createObjects);

});


function createObjects (object_prop) {
    let cloneGallery = templateGallery.cloneNode(true);
    cloneGallery.querySelector('.image_gallery').src=object_prop.src;
    clonedDiv.appendChild(cloneGallery);
}

/* Checked NAV when onsite */

