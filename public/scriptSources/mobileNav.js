const hamburgerBtn = document.querySelector('#mobile-btn')
const mobileMenu = document.querySelector('#mobile-menu')
const header = document.querySelector('.header')
const closeBtnMobile = document.querySelector("#closeMobileNav");
const main = document.querySelector('#main')

hamburgerBtn.onclick = () => {
    if(mobileMenu.style.display == "block"){
        mobileMenu.style.display = "none"
    } else {
        mobileMenu.style.display = "block"
    }
   
    
}



closeBtnMobile.onclick = ()  => {
    mobileMenu.style.display = "none"; 
  }
  