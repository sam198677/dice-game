var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var randice1 = "images/dice" + randomNumber1 + ".png" ;
var randice2 = "images/dice" + randomNumber2 + ".png" ;

document.querySelector(".img1").setAttribute("src",randice1);
document.querySelector(".img2").setAttribute("src",randice2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML="Player 1 Wins!!";
}
else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 Wins!!";
}
else {
  document.querySelector("h1").innerHTML="Draw!!";
}
