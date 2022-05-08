var container = document.getElementById('container');
var text = document.getElementById('text');

var totalTime = 7500;
var breatheTime = (totalTime / 5) * 2;
var holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() 
{
  text.innerText = "Breathe In!";
  container.className = "container grow";

  setTimeout(() => 
  {
    text.innerText = "Hold";

    setTimeout(() => 
    {
      text.innerText = "Breathe Out!";
      container.className = "container shrink";
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);