

console.log(auth)

const user = auth.currentUser

const accountTitle = document.querySelector('#accntTitle')

user ? (accountTitle.innerHTML = "Welcome to your account" + auth.currentUser.email) : (accountTitle.innerHTML = "Log in to access your account")
