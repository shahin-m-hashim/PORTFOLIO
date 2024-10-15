document.addEventListener("DOMContentLoaded", () => {
  const skills = {
    HTML: 100,
    CSS: 100,
    "Java Script": 100,
    Bootstrap: 90,
    React: 95,
    "Type Script": 60,
    Tailwind: 80,
    "Express JS": 60,
    "Mongo DB": 60,
    Python: 70,
    SQL: 60,
    GIT: 90,
  };

  const skillsContainer = document.getElementById("skills");

  for (const [skillName, skillValue] of Object.entries(skills)) {
    const skillElement = document.createElement("div");
    skillElement.classList.add("skill");
    skillElement.setAttribute("data-countervalue", skillValue);
    skillElement.setAttribute("data-start", true);

    const p = document.createElement("p");
    p.classList.add("fs-5");
    p.style.fontWeight = "bold";
    p.innerText = skillName;

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.classList.add("radial-progress");
    svg.setAttribute("viewBox", "0 0 80 80");

    const staticCircle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );

    staticCircle.setAttribute("r", "35");
    staticCircle.setAttribute("cx", "40");
    staticCircle.setAttribute("cy", "40");
    staticCircle.classList.add("bar-static");

    const animatedCircle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );

    animatedCircle.setAttribute("r", "35");
    animatedCircle.setAttribute("cx", "40");
    animatedCircle.setAttribute("cy", "40");
    animatedCircle.classList.add("bar-animated");
    animatedCircle.setAttribute("id", "progressBar");

    const progressText = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text"
    );

    progressText.textContent = "0%";
    progressText.setAttribute("x", "50%");
    progressText.setAttribute("y", "57%");
    progressText.classList.add("progress-text");
    progressText.setAttribute("id", "progressText");
    progressText.setAttribute("transform", "matrix(0, 1, -1, 0, 80, 0)");

    svg.appendChild(staticCircle);
    svg.appendChild(animatedCircle);
    svg.appendChild(progressText);

    skillElement.appendChild(p);
    skillElement.appendChild(svg);
    skillsContainer.appendChild(skillElement);
  }
});

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

  // Section 2 interests animation
  ScrollOut({
    targets: ".interest-heading, .interest",
  });

  // Section 3 skills animation
  function triggerSkillAnimation() {
    const skillElements = document.querySelectorAll(".skill");

    skillElements.forEach((skill) => {
      const rect = skill.getBoundingClientRect();
      const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;
      const start = skill.getAttribute("data-start") === "true";

      if (isInView && start) {
        animateSkillProgress(skill);
        skill.setAttribute("data-start", "false");
      }
    });
  }

  function animateSkillProgress(skill) {
    const progressCircle = skill.querySelector("#progressBar");
    const progressTextEl = skill.querySelector("#progressText");
    const progress = parseInt(skill.dataset.countervalue);

    const circumference = 219.91148575129;
    const offset = circumference - (circumference * progress) / 100;

    progressCircle.style.strokeDashoffset = offset;

    let counter = 0;
    const interval = setInterval(() => {
      counter++;
      progressTextEl.textContent = `${counter}%`;

      if (counter >= progress) {
        clearInterval(interval);
      }
    }, 30);
  }

  window.addEventListener("scroll", triggerSkillAnimation);

  triggerSkillAnimation();
};
