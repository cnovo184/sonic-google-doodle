// Select all the letters once
const letters = document.querySelectorAll(".googleLetter");

// Create a container for trails
const trailContainer = document.createElement("div");
trailContainer.classList.add("trail-container");
document.body.appendChild(trailContainer);

// Iterate through each letter
letters.forEach((letter, index) => {
  // Clone the letter for the trail effect
  const trail = letter.cloneNode(true);
  trail.classList.add("trail");
  trailContainer.appendChild(trail);

  // Use GSAP Timeline for smoother movement and rotation
  let tl = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 2 });

  // Move and rotate the original letters
  tl.to(letter, {
    duration: 1,
    x: window.innerWidth - 100, // Prevent moving offscreen
    rotation: 360, // Full rotation
    stagger: 0.2 * index, // Stagger effect per letter
    ease: "power1.inOut"
  });

  // Move, rotate, and fade out the trail
  tl.to(trail, {
    duration: 1,
    x: window.innerWidth - 100,
    rotation: 360, // Match the rotation
    stagger: 0.2 * index,
    opacity: 0, // Fade out effect
    ease: "power1.inOut",
    delay: 0.1 // Delayed to create a trailing effect
  }, 0); // Start at the same time as the original letter
});

// 🌲 Add a swaying effect to the trees 🌲
gsap.to("#treeone, #treetwo", {
  duration: 2,
  rotation: 5, // Slight sway to the right
  transformOrigin: "bottom center", // Rotate from the bottom
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut"
});

// ☁️ Animate the cloud (keeps it inside #stage) ☁️
gsap.to("#cloud", {
  duration: 5, // Smooth drifting motion
  x: "+=50", // Moves slightly right
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut"
});

// Add a floating effect (subtle up and down motion)
gsap.to("#cloud", {
  duration: 3,
  y: "+=10", // Moves slightly up
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut"
});

// Select Sonic
const sonic = document.getElementById("pixel-sonic");

// Add click event to make Sonic jump
sonic.addEventListener("click", () => {
  if (!sonic.classList.contains("jump")) {
    sonic.classList.add("jump");

    // Remove the class after the animation ends
    setTimeout(() => {
      sonic.classList.remove("jump");
    }, 600); // Matches the animation duration
  }
});

// CSS for trail effect
const style = document.createElement("style");
style.innerHTML = `
  .trail-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  
  .trail {
    position: absolute;
    filter: blur(5px);
    opacity: 0.5;
    transform: scale(0.9); /* Slightly smaller than the main letters */
  }
`;
document.head.appendChild(style);