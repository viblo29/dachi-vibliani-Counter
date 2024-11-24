// + da - dacheritac ro adi-chadiodes ricxvebi da DEL -ze ishlebodes (an nuldebodes).
const num = document.getElementById(`num`);
const decrease = document.getElementById(`decrease`);
const reset = document.getElementById(`reset`);
const increase = document.getElementById(`increase`);

let counter = 0;

function changeColor() {
  if (counter === 0) {
    num.style.color = `#102b42`;
  }
  if (counter > 0) {
    num.style.color = `green`;
  }
  if (counter < 0) {
    num.style.color = `red`;
  }
}

document.addEventListener(`keydown`, (e) => {
  if (e.key === `ArrowUp`) {
    counter++;
    num.textContent = counter;
    changeColor();
  } else if (e.key === `ArrowDown`) {
    counter--;
    num.textContent = counter;
    changeColor();
  } else if (e.key === `Backspace`) {
    counter = 0;
    num.textContent = counter;
    changeColor();
  } else {
    alert(
      "You can use these keys: \nArrow Up - Increase; Arrow Down - Decrease; Backspace - Reset"
    );
  }
});

decrease.addEventListener(`click`, function () {
  counter--;
  num.textContent = counter;
  changeColor();
});

increase.addEventListener(`click`, function () {
  counter++;
  num.textContent = counter;
  changeColor();
});

reset.addEventListener(`click`, function () {
  counter = 0;
  num.textContent = counter;
  changeColor();
});
