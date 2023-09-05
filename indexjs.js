var x = Math.random();
var y = Math.random();
x = Math.floor(x*6)+1;
y = Math.floor(y*6)+1;
var dice_name1 = "images/dice"+x+".png";
var dice_name2 = "images/dice"+y+".png";
document.querySelector('.img1').setAttribute('src',dice_name1);
document.querySelector('.img2').setAttribute('src',dice_name2);
var txt;
if(x>y){txt = "🚩 Player 1 wins";}
else if (x<y) {txt = "Player 2 wins 🚩";}
else{txt = "Draw"}
document.querySelector("h1").textContent = txt;
