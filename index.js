//-------------Player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
// var randomDiceImage1 = "dice"+ randomNumber1 + ".png";
var randomImgeSource1 = "images/dice" + randomNumber1 + ".png";

//-------------Player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6
// var randomDiceImage2 = "dice"+ randomNumber2 + ".png";
var randomImgeSource2 = "images/dice" + randomNumber2 + ".png";

//-------------Player 3
var randomNumber3 = Math.floor(Math.random()*6) + 1;
var randomImgeSource3 = "images/dice" + randomNumber3 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImgeSource1);

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImgeSource2);

var image3 = document.querySelectorAll("img")[2];
image3.setAttribute("src", randomImgeSource3);
// console.log(randomNumber1);
// console.log(randomNumber2);

// if(randomNumber1 > randomNumber2) {
//   document.querySelector("h1").innerHTML = "🏆 Player 1 Wins!";
// }
// else if(randomNumber1 < randomNumber2) {
//     document.querySelector("h1").innerHTML = "Player 2 Wins! 🏆";
// }
// else {
//    document.querySelector("h1").innerHTML = "👏 Draw! 👏";
// }

var sumScore = randomNumber1 + randomNumber2 + randomNumber3;
var yourScore = document.querySelector("h2").innerHTML = "Your score " + sumScore;
