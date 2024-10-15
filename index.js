window.onload = function () {
  console.log("Welcome To My Portfolio Website");

  // Custom Mouse Cursor
  let cursorX = 0;
  let cursorY = 0;
  const smoothness = 0.15;

  window.addEventListener("mousemove", updateCursor);
  const bubbleCursor = document.getElementById("bubbleCursor");

  function updateCursor(e) {
    const dx = e.clientX - cursorX;
    const dy = e.clientY - cursorY;

    cursorX += dx * smoothness;
    cursorY += dy * smoothness;

    const centerX = cursorX - bubbleCursor.clientWidth / 2;
    const centerY = cursorY - bubbleCursor.clientHeight / 2;

    bubbleCursor.style.top = `${centerY}px`;
    bubbleCursor.style.left = `${centerX}px`;
  }

  const navLinks = document.querySelectorAll("button, a");

  navLinks.forEach((navLink) => {
    navLink.addEventListener("mouseenter", () => {
      bubbleCursor.style.transform = "scale(1.2)";
      bubbleCursor.style.backdropFilter = "blur(0.5px)";
    });

    navLink.addEventListener("mouseleave", () => {
      bubbleCursor.style.transform = "scale(1)";
      bubbleCursor.style.backdropFilter = "blur(10px)";
    });
  });

  const projectLinks = document.querySelectorAll("#prLink");
  const cursorContent = document.getElementById("cursorContent");

  projectLinks.forEach((prLink) => {
    prLink.addEventListener("mouseenter", () => {
      cursorContent.style.opacity = "1";
    });

    prLink.addEventListener("mouseleave", () => {
      cursorContent.style.opacity = "0";
    });
  });

  // Navigation Link Scroll Animation
  document.querySelectorAll("#nav-link").forEach((navLink) => {
    navLink.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      let startTime = null;
      const duration = 500;
      const defaultOffset = 50;

      const offset = targetId === "#home" ? 0 : defaultOffset;

      const startPosition = window.scrollY;
      const targetOffset = targetElement.offsetTop - offset;
      const distance = targetOffset - startPosition;

      // Animation function
      function animateScroll(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(
          timeElapsed,
          startPosition,
          distance,
          duration
        );
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animateScroll);
      }

      // Easing function for smooth animation
      function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      }

      requestAnimationFrame(animateScroll);
      document.querySelector(".navbar-collapse").classList.toggle("show");
    });
  });

  // Background Scroll Animation
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    sections.forEach((box) => {
      if (box.getBoundingClientRect().top - 60 <= document.body.scrollTop) {
        document.body.style.backgroundColor = box.dataset.color;
      }
    });
  });

  // slogan
  new Typed("#slogTxt1", {
    strings: ["Websites And Web Applications"],
    typeSpeed: 100,
    backSpeed: 100,
    showCursor: false,
    loop: false,
  });

  new Typed("#slogTxt2", {
    strings: ["That Just Feels RIGHT"],
    typeSpeed: 150,
    backSpeed: 110,
    loop: true,
  });

  // section 1 job caption header
  const words = document.querySelectorAll(".word");
  words.forEach((word) => {
    const letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
      const span = document.createElement("span");
      span.textContent = letter;
      span.className = "letter";
      word.append(span);
    });
  });

  let currentWordIdx = 0;
  let maxWordIndex = words.length - 1;
  words[currentWordIdx].style.opacity = "1";

  let changeText = () => {
    const currentWord = words[currentWordIdx];
    const nextWord =
      currentWordIdx === maxWordIndex ? words[0] : words[currentWordIdx + 1];

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

    currentWordIdx = currentWordIdx === maxWordIndex ? 0 : currentWordIdx + 1;
  };

  changeText();
  setInterval(changeText, 3500);

  // SCROLL REVEAL Elements
  const sr = ScrollReveal();

  sr.reveal("#introduction", {
    delay: 300,
    reset: true,
    duration: 300,
    origin: "bottom",
    easing: "ease-in",
    distance: "100px",
  });

  sr.reveal("#leftReveal", {
    delay: 200,
    reset: true,
    duration: 300,
    origin: "left",
    easing: "ease-in",
    distance: "100px",
  });

  sr.reveal("#rightReveal", {
    delay: 200,
    reset: true,
    duration: 300,
    origin: "right",
    easing: "ease-in",
    distance: "100px",
  });

  sr.reveal("#topReveal", {
    delay: 200,
    reset: true,
    duration: 300,
    origin: "top",
    easing: "ease-in",
    distance: "50px",
  });

  sr.reveal("#bottomReveal", {
    delay: 200,
    reset: true,
    duration: 300,
    origin: "bottom",
    easing: "ease-in",
    distance: "50px",
  });
};
