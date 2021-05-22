function getComputerChoice() {
  const comp = Math.random();
  if (comp < 0.34) return "elefant";
  if (comp >= 0.34 && comp < 0.67) return "human";
  return "ant";
}

function getResult(comp, player) {
  if (player == comp) return "DRAW!";
  if (player == "elefant") return comp == "human" ? "WIN!" : "LOSE!";
  if (player == "human") return comp == "elefant" ? "LOSE!" : "WIN!";
  if (player == "ant") return comp == "human" ? "LOSE!" : "WIN!";
}

// const playerElefant = document.querySelector(".elefant");
// playerElefant.addEventListener("click", function(){
//   const computerChoice = getComputerChoice();
//   const playerChoice = playerElefant.className;
//   // console.log("computer: "+computerChoice);
//   // console.log("player: "+playerChoice);
//   const result = getResult(computerChoice, playerChoice);
//   // console.log(result);
//   const computerImage = document.querySelector(".computer-image");
//   computerImage.setAttribute("src","img/"+computerChoice+".png");
//   const info = document.querySelector(".info");
//   info.innerHTML=result;
// });
// const playerHuman = document.querySelector(".human");
// playerHuman.addEventListener("click", function(){
//   const computerChoice = getComputerChoice();
//   const playerChoice = playerHuman.className;
//   // console.log("computer: "+computerChoice);
//   // console.log("player: "+playerChoice);
//   const result = getResult(computerChoice, playerChoice);
//   // console.log(result);
//   const computerImage = document.querySelector(".computer-image");
//   computerImage.setAttribute("src","img/"+computerChoice+".png");
//   const info = document.querySelector(".info");
//   info.innerHTML=result;
// });
// const playerAnt = document.querySelector(".ant");
// playerAnt.addEventListener("click", function(){
//   const computerChoice = getComputerChoice();
//   const playerChoice = playerAnt.className;
//   // console.log("computer: "+computerChoice);
//   // console.log("player: "+playerChoice);
//   const result = getResult(computerChoice, playerChoice);
//   // console.log(result);
//   const computerImage = document.querySelector(".computer-image");
//   computerImage.setAttribute("src","img/"+computerChoice+".png");
//   const info = document.querySelector(".info");
//   info.innerHTML=result;
// });

function turn() {
  const computerImage = document.querySelector(".computer-image");
  const image = ["elefant", "ant", "human"];
  let i = 0;
  const startTime = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - startTime > 1000) {
      clearInterval;
      return;
    }
    computerImage.setAttribute("src", "img/" + image[i++] + ".png");
    if (i == image.length) i = 0;
  }, 200);
}
const choice = document.querySelectorAll("li img");
choice.forEach(function (e) {
  // console.log(e);
  e.addEventListener("click", function () {
    // console.log(e);
    const computerChoice = getComputerChoice();
    const playerChoice = e.className;
    // console.log("computer: "+computerChoice);
    // console.log("player: "+playerChoice);
    const result = getResult(computerChoice, playerChoice);
    turn();
    setTimeout(function () {
      // console.log(result);
      const computerImage = document.querySelector(".computer-image");
      computerImage.setAttribute("src", "img/" + computerChoice + ".png");
      const info = document.querySelector(".info");
      info.innerHTML = result;
    }, 1000);
  });
});
