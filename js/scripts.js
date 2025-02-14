// Select all the letters
document.querySelectorAll(".googleLetter").forEach((letter) => {
  // Create a duplicate trail element
  let trail = letter.cloneNode(true);
  trail.classList.add("trail");
  letter.parentElement.appendChild(trail);

  // Animate the original letters
  gsap.to(letter, {
    duration: 1,
    x: window.innerWidth,
    stagger: 0.2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    repeatDelay: 2
  });

  // Animate the trail effect with a slight delay
  gsap.to(trail, {
    duration: 1,
    x: window.innerWidth,
    stagger: 0.2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    repeatDelay: 2,
    opacity: 0,  // Fades out
    delay: 0.1  // Slight delay to create the trailing effect
  });
});

// CSS for trail effect
const style = document.createElement("style");
style.innerHTML = `
  .trail {
    position: absolute;
    filter: blur(4px);
    opacity: 0.5;
  }
`;
document.head.appendChild(style);