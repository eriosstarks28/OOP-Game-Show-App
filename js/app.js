const startBtn = document.getElementById(`btn__reset`);
let game = `null`;

startBtn.addEventListener("click", () => {
  game = new Game();
  const display = document.querySelectorAll("#phrase li");
  display.forEach((item) => {
    item.remove();
  });

  //enable keyboard and reset class names 

  const [...keyboard] = document.querySelectorAll(".keyrow button");
  console.log(keyboard);

  keyboard.forEach((key) => {
    key.className = "key";
    key.disabled =  false;
  });

  //reseet all hearts
  const lives = document.querySelectorAll(".tries");

  lives.forEach((live) => {
    let img = live.firstChild;
    img.setAttribute("src", "images/liveHeart.png");
  });
  game.startGame();
});

//register clicks
const keyboard = document.getElementById("qwerty");
keyboard.addEventListener("click", () => {
  if (event.target.tagName === "BUTTON") {
    game.handleInteraction(event.target);
  }
});
