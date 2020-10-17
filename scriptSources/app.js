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

//projects section app

// Items

const project = [{
        id: 1,
        title: "Tribute Page",
        category: "HTML/CSS",
        link: "Portfolio/HTMLProjects/Tribute/tribute.html",
        img: "imgs/tributePreview.png",
        desc: "A practice begining website, I decided to do a tribute to Tribute, the song by Tenacious D. This was the first part of the freeCodeCamp.org HTML/CSS certificate.",
    },
    {
        id: 2,
        title: "Unnescessary",
        category: "HTML/CSS",
        link: "Portfolio/HTMLProjects/UnnescessarySurvey/survey.html",
        linkdesc: "Link",
        img: "imgs/surveyPreview.png",
        desc: `I wanted to learn a little about forms and how they work, but wasn't sure what to make a survey of. I present - The Pointless Survey. Part 2 of the freeCodeCamp HTML/CSS certificate.`,
    },
    {
        id: 3,
        title: "Background-Color Flip App",
        category: "JavaScript",
        link: "Portfolio/JS Projects/colorFlip/colorFlip.html",
        linkdesc: "Link",
        img: "imgs/colorFlipPreview.png",
        desc: "A simple app that switches the background color when you flip a switch. Fun learning how to manipulate the DOM and use jQuery.",
    },
    {
        id: 4,
        title: "Counter App",
        category: "JavaScript",
        link: "Portfolio/JS Projects/counter/counter.html",
        linkdesc: "Link",
        img: "imgs/counterpreview.png",
        desc: "More practice manipulating the DOM. Count when a button is clicked and changes the counter color depending on if it is negative or positive."
    },
    {
        title: "Reviews Switch App",
        category: "JavaScript",
        link: "Portfolio/JS Projects/Reviews/reviews.html",
        img: "imgs/reviewspreview.png",
        desc: "Practice switching back and forth between different elements or an array containing different reviews. And a random button that selects a review at random."
    },
    {
        title: "Questions App",
        category: "JavaScript",
        link: "Portfolio/JS Projects/questions/questions.html",
        img: "imgs/questionspreview.png",
        desc: "Simple app that expands to reveal the anser to the questions below, and only one is open above. Look above at my 'About' section to check it out in action in a different setting."

    },
    {
        title: "Modal Container App",
        category: "JavaScript",
        link: "Portfolio/JS Projects/modal/modal.html",
        img: "imgs/modalpreview.png",
        desc: "Made a pretty nifty little modal container, one of the nifty things that you click on and it darkens the background to bring the subject into focus a little more."

    },
    {
        title: "Menu App",
        category: "JavaScript",
        link: "Portfolio/JS Projects/menu(dynamic)/menuDynamic.html",
        img: "imgs/menupreview.png",
        desc: "An interactive menu for a fictitious restraunt. All menu items, as well as the menu button labels, are loaded from an array of objects."

    }, 
    {
        title: "Random Quote Generator",
        category: "React",
        link: "https://stoic-murdock-c13ebc.netlify.app/",
        img: "imgs/randompreview.png",
        desc: "Random Quote Box, developed using Meact and the material-ui library. Pulls quote from a prefined .JSON github page."
    }
];

const sectionCenter = document.querySelector('.section-center');

const buttonCenter = document.querySelector('.btn-container')
const categories = project.reduce(
    function(values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category)
        }
        return values;
    }, ['all'])


// load items
window.addEventListener('DOMContentLoaded', function() {
    displayProjectItems(project);
    displayButtons(categories);
});






function displayButtons(buttons) {
    let buttonDisplay = buttons.map(function(category) {
        return `<button class="filter-btn" type="button" data-store="${category}">${category}</button>`
    })
    buttonDisplay = buttonDisplay.join("");
    buttonCenter.innerHTML = buttonDisplay;
    const btns = document.querySelectorAll('.filter-btn');
    // filter buttons
    btns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            const category = e.currentTarget.dataset.store;
            const projectCategory = project.filter(function(projectItem) {
                if (projectItem.category === category) {
                    return projectItem
                }
            })
            console.log(projectCategory);
            if (category === "all") {
                displayProjectItems(project);
            } else {
                displayProjectItems(projectCategory)
            }
        });
    })

}



function displayProjectItems(projectItems) {
    let displayProjects = projectItems.map(function(item) {
        return `  <div class="project-item">
        <img class="photo" src=${item.img} alt=${item.title}/>
        <div class="item-info">
        <div class="item-info">
          <div class="header">
          <h4>${item.title}</h4>
          <a href="${item.link}" target="_blank" class="proj-link link">&ltlink&gt</a>
        </div>
        <p class="item-text">
          ${item.desc}
        </p>
        </div>
        </div>
    </div>`;
    })
    displayProjects = displayProjects.join("");
    sectionCenter.innerHTML = displayProjects;

}