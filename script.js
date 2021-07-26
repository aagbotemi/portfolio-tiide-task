// HAMBUEGER MENU
var menu = document.querySelector(".menu");
var ham = document.querySelector(".ham");
var xIcon = document.querySelector(".xIcon");
var menuIcon = document.querySelector(".menuIcon");
var menuLinks = document.querySelectorAll(".menuLink");

ham.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        xIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        xIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

menuLinks.forEach(function(menuLink) { 
    menuLink.addEventListener("click", toggleMenu);
})



//TYPEWRITER WORD
const typeWord = document.getElementById('describe');

const typewriter = new Typewriter (typeWord, {
    loop: true
});

typewriter.typeString('I am a frontend Software Developer.')
    .pauseFor(1500)
    .deleteAll()
    .typeString('I turn designs into beautiful & efficient code')
    .pauseFor(1500)
    // .deleteChars(7)
    // .typeString('<strong>I turn designs into beautiful code</strong>')
    //.pauseFor(1500)
    .deleteAll()
    .typeString('I am a content creator')
    .pauseFor(1500)
    .start();



//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = () => scrollFunction();

const scrollFunction = () => {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
const topFunction = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}