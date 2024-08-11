const input = document.querySelector("input"),
  guess = document.querySelector(".guess"),
  checkButton = document.querySelector("button"),
  remainChances = document.querySelector(".chances");

input.focus();

let randomNum = Math.floor(Math.random() * 100);
chance = 10;

checkButton.addEventListener("click", () => {
  chance--;
  let inputValue = input.value;
  let difference = randomNum - inputValue;

  if (inputValue == randomNum) {
    // در صورت برد
    [guess.textContent, input.disabled] = ["😃درست بود،برنده شدید", true];

    [checkButton.textContent, guess.style.color] = ["مجدد", "#00D000"];
  } else if (difference < 10 && difference > 0) {[guess.textContent, remainChances.textContent] = ["نزدیک شدی، بیشتر حدس بزن",chance,];

  }
   else if (difference < 0 && difference > -10) {[guess.textContent, remainChances.textContent] = ["نزدیک شدی، کمتر حدس بزن",chance,];
  }

  //کمتر
  else if (inputValue > randomNum && inputValue <= 100 && inputValue > 0){[guess.textContent, remainChances.textContent] = ["کمتر حدس بزن", chance];
  }

  //بیشتر
  else if (inputValue < randomNum && inputValue <= 100 && inputValue > 0) {[guess.textContent, remainChances.textContent] = ["بیشتر حدس بزن", chance];
  }

  // عدد خارچ از بازه
  else {
    [guess.textContent, remainChances.textContent] = ["  گفتم از 1 تا 100 (از شانسات کم کردم که بفهمی)",chance, ];
  }
  // اتمام شانس
  if (chance == 0) {
    [checkButton.textContent, input.disabled, inputValue] = ["مجدد", true, ""];[guess.textContent, guess.style.color] = [ "😞 متاسفم باختی " + "(" + randomNum + ")","#DE0611", ];
  }
  if (chance < 0) {
    window.location.reload();
  }
});
