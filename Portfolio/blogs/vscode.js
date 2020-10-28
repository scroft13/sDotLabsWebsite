const modal = document.querySelectorAll('.modal')

for (let i=0; i < modal.length; i++ ){
    modal[i].addEventListener('click', function(){
        modal[i].classList.toggle('openmodal')
    })
    console.log(modal[i])
}

console.log(modal)


