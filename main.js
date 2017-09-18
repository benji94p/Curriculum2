/* TRIGGER OVERLAY BURGER MENU */

let hamburger_btn = document.querySelector('.hamburger_btn');
hamburger_btn.addEventListener("click",toggleBurgerMenu);


function toggleBurgerMenu () {
    console.log("burger menu clicked");
    let modal = document.querySelector(".modal");
    if (modal.classList.contains('hide')) {
        modal.classList.remove('hide');
        }
    else {
         modal.classList.add('hide');
    }
  }
