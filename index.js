window.onload = function () {
  console.log("Welcome To My Portfolio Website");

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
};
