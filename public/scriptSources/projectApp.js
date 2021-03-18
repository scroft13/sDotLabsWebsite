db.collection("projects")
  .onSnapshot((snapshot) => {
    setupProjects(snapshot.docs);
    setupButtons(snapshot.docs);
    

    
  });

// DOM elements
const projectContainer = document.querySelector(".project-center");
const buttonContainer = document.querySelector(".btn-container");

const setupButtons = (data) => {
  let html = "";
  let projectArray = [];

  //Create Array of project categories
  data.forEach((doc) => {
    const project = doc.data();
    projectArray.push(project.category);
  });

  //filter through array and remove duplicates
  uniqArray = [...new Set(projectArray)];

  //ouput array to buttonList
  uniqArray.forEach((category) => {
    console.log(category);
    const buttonList = `
      <button class="filter-btn" type="button" data-store="${category}">${category}</button>
  
    `;
    html += buttonList;
  });
  //set buttonList to the button container
  const buttonCenter = document.querySelector(".btn-container");
  buttonCenter.innerHTML = `
  <button class="filter-btn" type="button" data-store="All">All</button>
  ` + html;

  //Filter projects based on which category is selected
  //Create reference to btns in html
  const btns = document.querySelectorAll(".filter-btn");
  // cycle through all buttons
  btns.forEach((btn) => {
    //on button click, fire function
    btn.addEventListener("click", (e) => {
      //current selected category
      const category = e.currentTarget.dataset.store;
      if (category != "All"){
        //create reference to project database
      const projectsRef = db.collection("projects")
      //filter through the database
      projectQuery = projectsRef.where("category", "==", category)
        //start live listen to database and pass it in to a function as querySnapshot
        .onSnapshot(((querySnapshot) => {
          querySnapshot.forEach((doc) =>{
            setupProjects(querySnapshot.docs)
            
          })
        })
        )} else {
          setupProjects(data);
        }
      }
      
      
    );
  }
  )}
// setup project list
const setupProjects = (data) => {
  let html = "";
  data.forEach((doc) => {
    const project = doc.data();
    const li = `
    <div class="project-item">
    <img class="photo" src=${project.img} alt=${project.title}/>
    <div class="item-info">
    <div class="item-info">
      <div class="header">
      <h4>${project.title}</h4>
      <a href="${project.link}" target="_blank" class="proj-link link">&ltlink&gt</a>
    </div>
    <p class="item-text">
      ${project.description}
    </p>
    </div>
    </div>
</div>
    `;
    html += li;
  });
  projectContainer.innerHTML = html;
};






//   {
//     title: "Random Quote Generator",
//     category: "React",
//     link: "https://stoic-murdock-c13ebc.netlify.app/",
//     img: "imgs/randompreview.png",
//     desc:
//       "Random Quote Box, developed using Meact and the material-ui library. Pulls quote from a prefined .JSON github page.",
//   },
// ];



