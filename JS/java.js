var score = 0;

function random(min,max){
 	return Math.round(Math.random() * (max-min) + min);
}

/*image in landing change back and forth*/
// function displayNextImage() {
//               x = (x === images.length - 1) ? 0 : x + 1;
//               document.getElementById("meatball").src = images[x];
//           }

//           function displayPreviousImage() {
//               x = (x <= 0) ? images.length - 1 : x - 1;
//               document.getElementById("rock").src = images[x];
//           }

//           function startTimer() {
//               setInterval(displayNextImage, 3000);
//           }

//           var images = [], x = -1;
//           images[0] = "https://lh6.ggpht.com/ISGeGaE-HYuTQ0qLxC10hmFKI0rTc_ZiTU8OYoqpt0_q7D3fKoW6tzllA-_wNi9mKPM=w300";
//           images[1] = "http://www.bryanrock.com/application/files/7914/3349/4593/rock.png";
// displayNextImage();

// for (i = 0; i < 100000000; i ++){
//     setInterval(displayNextImage, 3000);

// }
// function startTimer() {
//               setInterval(displayNextImage, 3000);
//           }




function setBG(){
  if (Math.round(Math.random())){
    return "https://lh6.ggpht.com/ISGeGaE-HYuTQ0qLxC10hmFKI0rTc_ZiTU8OYoqpt0_q7D3fKoW6tzllA-_wNi9mKPM=w300";
  } else {
    return "http://www.bryanrock.com/application/files/7914/3349/4593/rock.png";
  }
}


function dropBox(){
  var length = random(100, ($(".game").width() - 100));
  var velocity = random(850, 10000);
  var size = random(50, 150);
  var thisBox = $("<div/>", {
    class: "box",
    style:  "width:" +size+ "px; height:"+size+"px; left:" + length+  "px; transition: transform " +velocity+ "ms linear;"
  });
  
  //set data and bg based on data
  thisBox.data("test", Math.round(Math.random()));
  if(thisBox.data("test")){
    thisBox.css({"background": "url('https://lh6.ggpht.com/ISGeGaE-HYuTQ0qLxC10hmFKI0rTc_ZiTU8OYoqpt0_q7D3fKoW6tzllA-_wNi9mKPM=w300')", "background-size":"contain"});
  } else {
    thisBox.css({"background": "url('http://www.bryanrock.com/application/files/7914/3349/4593/rock.png')", "background-size":"contain", "background-repeat":"no-repeat"});
  }
  
  
  //insert gift element
  $(".game").append(thisBox);
  
  //random start for animation
  setTimeout(function(){
    thisBox.addClass("move");
  }, random(0, 5000) );
  
  //remove this object when animation is over
  thisBox.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
              function(event) {
    $(this).remove();
  });
}

//start button for the game
var startButton = document.getElementById('start');
  startButton.addEventListener('click', function() {
    for (i = 0; i < 10; i++) { 
      dropBox();
      countdown();
    }
  });

$(document).on('click', '.box', function(){

  
  if($(this).data("test")){
    score += 1;
  } else {
    score -= 1;
  }
  
  $(".score").html(score);
  $(this).remove();
});

var runGame = setInterval(function(){
                for (i = 0; i < 10; i++) { 
                  dropBox();
                }  
              }, 5000);

//countdown from 60 seconds
function countdown() {
    	var seconds = 60;
	    function tick() {
	        var counter = document.getElementById("counter");
	        seconds--;
	        counter.innerHTML = (seconds < 10 ? "0" : "")  + String(seconds) + " seconds left";
	        if( seconds > 0 ) {
	          setTimeout(tick, 1000);
            draw();
          update();
	        } else {
	          alert("Game over");
	          clearInterval(runGame);
	        }
	    }
    	tick();
	}

//reset game
var reset = document.querySelector('.restart');
 console.log(reset);
 function resetGame () {
  reset.addEventListener("click", function() {
    location.reload();
    // alert("clicked reset button");
  });
  
 }
 resetGame();