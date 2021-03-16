

//Track auth status


auth.onAuthStateChanged(user => {
  const accountTitle = document.querySelector("#accntTitle")
  const accountModal = document.querySelector('#accountContent')
  if (user){
    accountTitle.innerHTML = "Welcome to your account " + user.email
    
    
  } else {
    accountModal.innerHTML = "Please Sign In"
  }
  
  user ? (
    
    console.log("logged in")
   ) : (
    console.log("not logged in`")
  )
})


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

