const words = ["Front-End Developer", "UI/UX Designer", "Back-End Developer"];
let w = 0; 
let i = 0;

function type() {
  const current = words[w];
  if (i < current.length) {
    document.getElementById("typewriter").textContent += current[i];
    i++;
    setTimeout(type, 80);
  } else {
    setTimeout(() => erase(), 1000);
  }
}

function erase() {
  const current = words[w];
  if (i > 0) {
    document.getElementById("typewriter").textContent = current.substring(0, i - 1);
    i--;
    setTimeout(erase, 50);
  } else {
    w = (w + 1) % words.length;
    setTimeout(type, 300);
  }
}

type();
