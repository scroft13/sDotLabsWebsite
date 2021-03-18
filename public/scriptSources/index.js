const actModal = document.querySelector("#accountData");

// setup Account
const setupAccount = (user) => {
  if (user){
    let html = "";
    const modal = `
       <div>
          <h2 class="modal-title">Account</h2>
          <h4>Welcome to your account ${user.email}</h4>
      </div>
      
      `;
    html += modal;
    actModal.innerHTML = html;
  } else {
    let html = "";
    const modal = `
       <div>
          <h2 class="modal-title">Please Log In</h2>
          
      </div>
      
      `;
    html += modal;
    actModal.innerHTML = html;
  }
  
};
