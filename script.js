score = 0;
cross = true;
audio = new Audio('music.mp3');
audioclash = new Audio('clash.mp3')
audiogo = new Audio('gameover.mp3');
document.onkeydown = function (e) {
     console.log("key code is: ", e.keyCode)
     if (e.keyCode == 38) {
          player = document.querySelector('.player');
          player.classList.add('animateplayer');
          setTimeout(() => {
               player.classList.remove('animateplayer');
          }, 700);
     }
     if (e.keyCode == 39) {
          player = document.querySelector('.player');
          playerX = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
          player.style.left = playerX + 150 + "px";

     }
     if (e.keyCode == 37) {
          player = document.querySelector('.player');
          playerX = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
          player.style.left = playerX - 150 + "px";
     }
}
setInterval(() => {
     audio.play();
     player = document.querySelector('.player');
     gameover = document.querySelector('.gameover');
     dino = document.querySelector('.dino');

     px = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
     py = parseInt(window.getComputedStyle(player, null).getPropertyValue('top'));

     dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
     dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

     dinoX = Math.abs(px - dx);
     dinoY = Math.abs(py - dy);
     // console.log(dinoX && dinoY)
     if (dinoX < 70 && dinoY < 54) {
          gameover.style.visibility = 'visible';
          dino.classList.remove('dinoanimate');
          audioclash.play();
          audiogo.play();
          audio.puase();
               
     }
     else if (dinoX < 145 && cross) {
          score += 1;
          updateScore(score);
          cross = false;
          setTimeout(() => {
               cross = true;
          }, 1000);
          setTimeout(() => {
               aniDur = parseFloat(window.getComputedStyle(dino, null).getPropertyValue('animation-duration'));
               newDur = aniDur - 0.1;
               dino.style.animationDuration = newDur + 's';
               console.log('new animation duration : ', newDur);

          }, 1000);
     }
     function updateScore(score) {
          scoreCont.innerHTML ="Your Score: "+score;
     }


}, 10)