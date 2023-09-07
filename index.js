const randomNumber1 = Math.floor(Math.random() * 3 + 1);
const randomNumber2 = Math.floor(Math.random() * 3 + 1);

document.querySelector(".img1").setAttribute("src", "./images/img" + randomNumber1 + ".jpg");
document.querySelector(".img2").setAttribute("src", "./images/img" + randomNumber2 + ".jpg");

if (randomNumber1 === randomNumber2) {
    document.querySelector(".container h1").innerHTML = "It's a Draw";
} else if (
    (randomNumber1 === 1 && randomNumber2 === 3) ||
    (randomNumber1 === 2 && randomNumber2 === 1) ||
    (randomNumber1 === 3 && randomNumber2 === 2)
) {
    document.querySelector(".container h1").innerHTML = "Player 1 Wins";
} else {
    document.querySelector(".container h1").innerHTML = "Player 2 Wins";
}
