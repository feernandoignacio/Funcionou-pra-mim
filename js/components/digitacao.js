const text = "O simples, quando bem praticado, se transforma em algo sólido.";
const typingElement = document.querySelector('.typing');
const typingSpeed = 70;
const pauseAfterTyping = 3000;
const pauseAfterDelete = 1000;

let i = 0;
let typing = true;

function type() {
  typingElement.style.visibility = 'visible';
  if (typing) {
    if (i <= text.length) {
      typingElement.textContent = text.slice(0, i);
      i++;
      setTimeout(type, typingSpeed);
    } else {
      typing = false;
      setTimeout(erase, pauseAfterTyping);
    }
  }
}

function erase() {
  if (!typing) {
    if (i >= 0) {
      typingElement.textContent = text.slice(0, i);
      i--;
      setTimeout(erase, typingSpeed / 1.5);
    } else {
      typing = true;
      setTimeout(type, pauseAfterDelete);
    }
  }
}

typingElement.style.animation = "blink-caret 0.75s step-end infinite";
type();
