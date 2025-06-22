function showMessage() {
  alert("Thanks for your interest! We'll contact you shortly.");
}

// Typing animation
const text = "I design for impact Let’s scale your brand together.";
const speed = 100; // typing speed in ms
let i = 0;

function typeText() {
  if (i < text.length) {
    document.getElementById("typed-text").textContent += text.charAt(i);
    i++;
    setTimeout(typeText, speed);
  } else {
    setTimeout(() => {
      document.getElementById("typed-text").textContent = "";
      i = 0;
      typeText();
    }, 2000); // wait 2 seconds, then loop
  }
}

window.onload = typeText;
