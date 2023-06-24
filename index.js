function female() {
    var element = document.getElementById('female');
  element.style.opacity = '0'; // Set initial opacity to 0

  setTimeout(function() {
    element.style.opacity = '1'; // Fade in
    setTimeout(function() {
      element.style.opacity = '0'; // Fade out
    }, 2000); // Wait for 2 seconds before fading out
  }, 0); // Start the animation immediately
}

function headline1() {
    var element = document.getElementById('headline1');
    element.style.opacity = '0';
    element.style.left = '-100px'; // Initial position off the left side
    
  
    setTimeout(function() {
        element.style.transform = 'scale(1)';
        element.style.opacity = '1';
        element.style.left = '565px'; // Position to the left at 565px
        setTimeout(function() {
        element.classList.add('fadeout');
        element.style.opacity = '0'; // Fade out
      }, 2200);
    }, 500); // Wait for 2 seconds before starting the fade-in animation
}


function headline2() {
    var element = document.getElementById('headline2');
    element.style.opacity = '0';
    element.style.left = '1100px'; // Initial position off the left side
    setTimeout(function() {
        element.style.opacity = '1'; 
        element.style.left = '565px';
    }, 2800); 
}

function subheadline() {
    var element = document.getElementById('subheadline');
    element.style.opacity = '0';
    setTimeout(function() {
        element.style.opacity = '1'; 
    }, 3480);
}

function learnmore(){
    var element = document.getElementById('learnmore');
    element.style.opacity = '0';
    setTimeout(function() {
        element.style.opacity = '1'; 
    }, 4200);

}

function logo() {
    var element = document.getElementById('logo');
    element.style.opacity = '0';
    setTimeout(function() {
        element.style.opacity = '1';
        element.style.left = '840px'; // Position to the left at 565px
       
    }, 5000); // Wait for 2 seconds before starting the fade-in animation
    
}

function replay() {
    var element = document.getElementById('replay');
    element.style.opacity = '0';
    setTimeout(function() {
        element.style.opacity = '1';
       
    }, 6000); 
}

window.onload = function() {
    female();
    headline1();
    headline2();
    subheadline();
    learnmore();
    logo();
    replay();
};

function reload() {
    female();
    headline1();
    headline2();
    subheadline();
    learnmore();
    logo();
    replay();
}