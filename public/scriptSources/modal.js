var modal = document.getElementById("signUpModal");
var signinmodal = document.getElementById("signInModal");
var accountModal = document.getElementById("accountModal");

// Get the button that opens the modal
var btn = document.getElementById("sign-up-btn");
var signinbtn = document.getElementById("sign-in-btn");
const accountBtn = document.getElementById("account-btn")

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var accountSpan = document.getElementsByClassName("close")[2];


// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

signinbtn.onclick = function() {
  signinmodal.style.display = "block";
}

accountBtn.onclick = function() {
  accountModal.style.display = "block"
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none"; 
}

span2.onclick = function() {
  signinmodal.style.display = "none"; 
}

accountSpan.onclick = function() {
  accountModal.style.display = "none"
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == signinmodal) {
    signinmodal.style.display = "none";
  }
  if (event.target == accountModal){
    accountModal.style.display = "none"
  }
}

