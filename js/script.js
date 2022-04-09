var minMoney = 100;
var userMoney = prompt("Pulingizni kiriting:");
var paragraph = document.createElement("h1");
document.body.append(paragraph);

if(userMoney >= minMoney){
  console.log("Telefonni sotib olishingiz mumkin");
  paragraph.append("Telefonni sotib olishingiz mumkin");
}else
{
  console.log("Oylik olganingizdan keyin keling :)");
  paragraph.append("Oylik olganingizdan keyin keling :)");
}
