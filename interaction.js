window.onload = function () {
    console.log(`The Page Loaded Successfully${"\n"}Welcome To My Portfolio`);
}

// document.addEventListener('contextmenu', function (event) {
//     event.preventDefault(); // Prevent the default context menu from appearing
// });

//custom mouse cursor
let mouseCursor = document.querySelector(".bubble-cursor");

// Initialize cursor position
let cursorX = 0;
let cursorY = 0;

// Smoothly update cursor position
const smoothness = 0.15;

window.addEventListener('mousemove', updateCursor);

function updateCursor(e) {
    // Calculate the difference between the current and new position
    const dx = e.clientX - cursorX;
    const dy = e.clientY - cursorY;

    // Apply easing to the cursor's movement
    cursorX += dx * smoothness;
    cursorY += dy * smoothness;

    // Calculate the centered position
    const centerX = cursorX - mouseCursor.clientWidth / 2;
    const centerY = cursorY - mouseCursor.clientHeight / 2;

    // Update the cursor's position
    mouseCursor.style.left = `${centerX}px`;
    mouseCursor.style.top = `${centerY}px`;
}

// Mouse Cursor Hover Animation
const navLinks = document.querySelectorAll('.navbar-brand,.nav-item,#sec4-prev-btn,#sec4-nxt-btn,.resume-link-btn,#github-link,#linkedin-link,#instagram-link,#email-me');

navLinks.forEach((navLink) => {
    navLink.addEventListener('mouseenter', () => {
        mouseCursor.style.backdropFilter = 'blur(0.5px)';
        mouseCursor.style.transform = 'scale(1.3)';
    });

    navLink.addEventListener('mouseleave', () => {
        mouseCursor.style.backdropFilter = 'blur(10px)';
        mouseCursor.style.transform = 'scale(1)';
    });
});

// Project Link Mouse Cursor Animation on Hover

// Select all links with IDs starting with "pr-link"
const projectLinks = document.querySelectorAll('[id^="pr-link"]');
const cursorContent = document.querySelector('.cursor-content');

projectLinks.forEach((prLink) => {
    prLink.addEventListener('mouseenter', () => {
        cursorContent.style.opacity = '1';
    });

    prLink.addEventListener('mouseleave', () => {
        cursorContent.style.opacity = '0';
    });
});

//page navigation + smooth animation using jquery
$(document).ready(function () {
    $("a#nav-link").click(function (event) {
        event.preventDefault();
        const targetId = $(this).attr("href");
        const targetElement = $(targetId);

        // Define offset and padding values for specific sections
        const sectionOffsets = {
            '#section-2': { offset: 60, padding: 200 },
            '#section-3': { offset: 60, padding: 200 },
            '#section-4': { offset: 60, padding: 200 },
            '#section-5': { offset: 60, padding: 200 }
        };

        const { offset, padding } = sectionOffsets[targetId] || { offset: 70, padding: 20 };

        const targetOffset = targetElement.offset().top - offset + padding;

        $("html, body").animate({
            scrollTop: targetOffset
        }, 500);
    });
});

// manually collapse the dropdown
document.querySelectorAll('.navbar-nav a.nav-link').forEach(function (element) {
    element.addEventListener('click', function () {
        var navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    });
});

//body background color transition
const coloredBoxes = document.querySelectorAll('.colored-box');

window.addEventListener('scroll', () => {
    coloredBoxes.forEach(box => {
        if (
            box.getBoundingClientRect().top - 300 <= document.body.scrollTop
        ) {
            document.body.style.backgroundColor = box.dataset.color;
        }
    });
});

//header
var typed1 = new Typed('#slog-txt1', {
    strings: ['Websites, Images And Videos'],
    typeSpeed: 100,
    backSpeed: 100,
    showCursor: false,
    loop: false
});

var typed2 = new Typed('#slog-txt2', {
    strings: ['That Just Feels RIGHT'],
    typeSpeed: 150,
    backSpeed: 110,
    loop: true
});

// section 1 intro description
let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letters = word.textContent.split(""); word.textContent = "";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });

    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3500);

//Scroll Or Refresh Reveal Items 
const sr = ScrollReveal();

//section 2 about 
sr.reveal('.scroll-reveal', {
    delay: 50,
    reset: true,
    duration: 300,
    origin: 'left',
    easing: 'ease-in-out',
    distance: '150px',
});

//section 2 character
sr.reveal('.scroll-reveal-character-heading', {
    delay: 200,
    reset: true,
    duration: 500,
    origin: 'top',
    easing: 'ease',
    distance: '100px',
});


sr.reveal('#section-1', {
    delay: 10,
    reset: true,
    duration: 700,
    origin: 'bottom',
    easing: 'ease-in',
    distance: '100px',
});

// Scroll Reveal Section 1 

sr.reveal('#intro-text', {
    delay: 100,
    reset: true,
    duration: 500,
    origin: 'bottom',
    easing: 'ease-in',
    distance: '100px',
});

sr.reveal('#intro-name', {
    delay: 200,
    reset: true,
    duration: 500,
    origin: 'bottom',
    easing: 'ease-in',
    distance: '100px',
});

sr.reveal('#intro-description', {
    delay: 300,
    reset: true,
    duration: 500,
    origin: 'bottom',
    easing: 'ease-in',
    distance: '100px',
});

sr.reveal('#resume-link', {
    delay: 400,
    reset: true,
    duration: 500,
    origin: 'bottom',
    easing: 'ease-in',
    distance: '100px',
});

sr.reveal('#section-1-img-container', {
    delay: 100,
    reset: true,
    duration: 500,
    origin: 'bottom',
    easing: 'ease-in',
    distance: '100px',
});

// Scroll Reveal Section 2 Paragraphs 

sr.reveal('#sec2-abt-me-p1', {
    delay: 100,
    reset: true,
    duration: 300,
    origin: 'bottom',
    easing: 'ease-in',
    distance: '50px',
});

sr.reveal('#sec2-abt-me-p2', {
    delay: 200,
    reset: true,
    duration: 300,
    origin: 'bottom',
    easing: 'ease-in',
    distance: '50px',
});

sr.reveal('#sec2-abt-me-p3', {
    delay: 300,
    reset: true,
    duration: 300,
    origin: 'bottom',
    easing: 'ease-in',
    distance: '50px',
});

//section 2 interests
ScrollOut({
    targets: '.pb-scroll-out h1,.pb-scroll-out h2,.pb-scroll-out h3'
});


//section 3 skills progress bar animation on scroll
function radial_animate() {
    $('svg.radial-progress').each(function (index, value) {

        $(this).find($('circle.bar--animated')).removeAttr('style');
        // Get element in View port
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        if (elementBottom > viewportTop && elementTop < viewportBottom) {
            var percent = $(value).data('countervalue');
            var radius = $(this).find($('circle.bar--animated')).attr('r');
            var circumference = 2 * Math.PI * radius;
            var strokeDashOffset = circumference - ((percent * circumference) / 100);
            $(this).find($('circle.bar--animated')).animate({ 'stroke-dashoffset': strokeDashOffset }, 2800);
        }
    });
}

// Progress text
var $window = $(window);
function check_if_in_view() {
    $('.countervalue').each(function () {
        if ($(this).hasClass('start')) {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();

            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).removeClass('start');
                $('.countervalue').text();
                var myNumbers = $(this).text();
                if (myNumbers == Math.floor(myNumbers)) {
                    $(this).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 2800,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now) + '%');
                        }
                    });
                } else {
                    $(this).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 2800,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(now.toFixed(2) + '$');
                        }
                    });
                }
                radial_animate();
            }
        }
    });
}
$window.on('scroll', check_if_in_view);


//Project Slideshow Container in Section 3

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("Slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}