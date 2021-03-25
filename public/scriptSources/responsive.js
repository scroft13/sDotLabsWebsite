const title = document.querySelector('#title')
const x = window.matchMedia("(max-width: 700px)")

const titleChange = (x) => {
  if (x.matches) {
    title.innerHTML = `
    <h1 id="responsive-title">
    <div>
    sDotLabs
    </div>
    <div>
        <img
        id="title-logo"
        src="sDotLabsNavLogo.svg"
        alt="logo"
        class="logo" />
    </div>
    <div>
    Development
    </div>    
        
  </h1>
    `

  } else {
    /* The viewport is greater than 700 pixels wide */
    title.innerHTML =`
    <h1>
            sDotLabs<span
              ><img
                id="title-logo"
                src="sDotLabsNavLogo.svg"
                alt="logo"
                class="logo" /></span
            >Development
          </h1>
    `
  }
}



titleChange(x) // Call listener function at run time
window.addEventListener("resize", titleChange) // Attach listener function on state changes