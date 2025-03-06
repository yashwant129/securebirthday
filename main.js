const loveBubble = document.getElementById("container");
const shyKitty = document.querySelector(".image-1");
const happyPuppy = document.querySelector(".image-2");
const bigYes = document.querySelector(".btn-yes");
const sneakyNo = document.querySelector(".btn-no");

const countdownDiv = document.createElement("div");
countdownDiv.classList.add("countdown");
document.body.appendChild(countdownDiv);

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

sneakyNo.addEventListener("mouseover", () => {
  const bubbleHeight = loveBubble.getBoundingClientRect().height;
  const bubbleWidth = loveBubble.getBoundingClientRect().width;
  const buttonHeight = sneakyNo.getBoundingClientRect().height;
  const buttonWidth = sneakyNo.getBoundingClientRect().width;
  const currentTop = sneakyNo.getBoundingClientRect().top;
  const currentLeft = sneakyNo.getBoundingClientRect().left;

  let newTop = currentTop;
  let newLeft = currentLeft;

  while (Math.abs(newTop - currentTop) < bubbleHeight / 3) {
    newTop = getRandomNumber(0, bubbleHeight - buttonHeight);
  }
  while (Math.abs(newLeft - currentLeft) < bubbleWidth / 3) {
    newLeft = getRandomNumber(0, bubbleWidth - buttonWidth);
  }

  sneakyNo.style.top = Math.floor(newTop) + "px";
  sneakyNo.style.left = Math.floor(newLeft) + "px";
});

bigYes.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default action
  sneakyNo.classList.add("hide");
  shyKitty.classList.add("hide");
  happyPuppy.classList.remove("hide");

  let countdown = 3;
  countdownDiv.innerText = `Please wait till all the pages are loading ${countdown}...`;
  countdownDiv.classList.add("show");

  const countdownInterval = setInterval(() => {
    countdown--;
    countdownDiv.innerText = `Please wait till all the pages are loading ${countdown}...`;

    if (countdown <= 0) {
      clearInterval(countdownInterval);
      window.location.href = "letter.html"; // Redirect after countdown
    }
  }, 2000);
});
