/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const menu = document.getElementById('navbar__list');
const secs = document.querySelectorAll('section');

/**
 * End Global Variables

* Start Helper Functions
 * 
*/
function navBuild(){
    // menu.innerHTML='';
    for(sec of secs){
        const secID = sec.id;
        const anchor = document.createElement('a');
        anchor.href = `#${sec.id}`;
        anchor.className="menu__link";
        anchor.innerText=sec.getAttribute('data-nav');
        let li=document.createElement('li');
        li.appendChild(anchor);
        menu.appendChild(li);
    };
};
navBuild();
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/




// Add class 'active' to section when near top of viewport
    const offSet = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
    };
    // remove active from section After leaving it
    const removeActive=(section)=>{
        section.classList.remove('your-active-class');
        section.style.cssText="background-color:linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%);"; 
    };
    // what happen when section is Active
    const addActive=(conditional,section)=>{
        if(conditional){
            section.classList.add('your-active-class');
            section.style.cssText="background-color:Silver"; 
        };
    };
const sectionActivation=() =>{
    secs.forEach(section=>{
        const elemOffset = offSet(section);
        inViewport=() =>elemOffset<150 && elemOffset>= -150;
        removeActive(section);
        addActive(inViewport(),section);
    });
};
window.addEventListener('scroll',sectionActivation);
// });

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 


// Scroll to section on link click
const scrollTO=()=>{
    const links=document.querySelectorAll('.navbar__menu a');
    links.forEach(link=>{
        link.addEventListener('click',() =>{
            for (let i = 0; i < secs; i++) {
                secs[i].addEventListener("click",sectionScroll(link));
            }
        })
    })
};
scrollTO();

// Set sections as active
