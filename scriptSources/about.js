// about section button shows text and transforms

const aboutBtn = document.querySelectorAll('.about-container');

aboutBtn.forEach(function(e) {

    const btn = e.querySelector('.about-btn')

    btn.addEventListener('click', function() {
        aboutBtn.forEach(function(item) {
            console.log(item);
            if (item !== e) {
                item.classList.remove('show-text')
                item.classList.remove('rotate-btn')
                item.classList.remove('border-radius-fix')
            }
        })
        e.classList.toggle('show-text');
        e.classList.toggle('rotate-btn');
        e.classList.remove('border-radius-fix');
    })
});