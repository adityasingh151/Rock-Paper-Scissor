let randomNumber1 = Math.floor(Math.random() * 3 + 1);
let randomNumber2 = Math.floor(Math.random() * 3 + 1);

document.querySelector(".img1").setAttribute("src", "./images/img" + randomNumber1 + ".jpg");
document.querySelector(".img2").setAttribute("src", "./images/img" + randomNumber2 + ".jpg");

function setPlayer2Choice(choice) {
  randomNumber2 = choice;
  updatePlayer1Choice(); 
  updatePlayer2Image();
  updateResult();
}

function updatePlayer1Choice() {
  randomNumber1 = Math.floor(Math.random() * 3 + 1);
  document.querySelector(".img1").setAttribute("src", "./images/img" + randomNumber1 + ".jpg");
}

function updatePlayer2Image() {
  const img2 = document.querySelector(".img2");
  img2.setAttribute("src", "./images/img" + randomNumber2 + ".jpg");
}

function updateResult() {
  if (randomNumber1 === randomNumber2) {
    document.querySelector(".container h1").innerHTML = "It's a Draw";
  } else if (
    (randomNumber1 === 1 && randomNumber2 === 3) ||
    (randomNumber1 === 2 && randomNumber2 === 1) ||
    (randomNumber1 === 3 && randomNumber2 === 2)
  ) {
    document.querySelector(".container h1").innerHTML = "Better luck next time";
  } else {
    document.querySelector(".container h1").innerHTML = "You won";
  }
}
