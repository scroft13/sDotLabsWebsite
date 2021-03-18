

//Track auth status


auth.onAuthStateChanged(user => {
  
  
  if (user){
    setupAccount(user);
    setupNav(user);
  } else {
    setupNav();
    setupAccount();
    console.log("not logged in`")
   }
})

//setup nav elements
const setupNav = (user) => {
  const signedInLinks = document.querySelectorAll('.signed-in-links')
  const signedOutLinks = document.querySelectorAll('.signedOutLinks')
  if (user) {
    signedInLinks.forEach(item => item.style.display = 'block')
    signedOutLinks.forEach(item => item.style.display = 'none')
    
  } else {
    signedInLinks.forEach(item => item.style.display = 'none')
    signedOutLinks.forEach(item => item.style.display = 'block')
  }
}


// signup
const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // get user info
  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;
  const modal = document.getElementById("signUpModal");
  const content = document.getElementById("signUpContent");
  const confirm = document.getElementById("signUpConfirm");
  // sign up the user
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      
      // close the signup modal & reset form

      content.style.display = "none";
      confirm.style.display = "block";
      setTimeout(() => {
        modal.style.display = "none";
        content.style.display = "block";
        confirm.style.display = "none";
        signupForm.reset();
      }, 3000);
    });
});

const signinForm = document.querySelector("#signin-form");
signinForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = signinForm["signin-email"].value;
  const password = signinForm["signin-password"].value;
  const modal = document.getElementById("signInModal");
  const content = document.getElementById("signInContent");
  const confirm = document.getElementById("signInConfirm");
  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      let user = userCredential.user;
      
      content.style.display = "none";
      confirm.style.display = "block";
      setTimeout(() => {
        modal.style.display = "none";
        content.style.display = "block";
        confirm.style.display = "none";
        signinForm.reset();
      }, 3000);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
});

const logout = document.getElementById("#logout");
logout.addEventListener("click", (e) => {
  e.preventDefault();
  
  auth.signOut().then
  
});


const projectForm = document.querySelector("#project-form");
projectForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = projectForm["project-title"].value;
  const category = projectForm["project-category"].value;
  const link = projectForm["project-link"].value;
  const img = projectForm["project-img"].value;
  const desc = projectForm["project-desc"].value;
  let newProjectModal = document.getElementById("newProjectModal");

  const content = document.getElementById("newProjectContent");
  const confirm = document.getElementById("projectConfirm");

  db.collection("projects").add({
    title: title,
    category: category,
    link: link,
    img: img,
    description: desc,
  }).then(() => {
    content.style.display = "none";
    confirm.style.display = "block";
    setTimeout(() => {
    newProjectModal.style.display = "none"
      
      projectForm.reset();
    }, 3000);

  }).catch(err => {
    console.log(err.message)
  })
  
  
});
