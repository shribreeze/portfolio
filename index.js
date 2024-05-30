document.addEventListener('DOMContentLoaded', function() {
  revealOnLoad();
});

function revealOnLoad() {
  var reveals = document.querySelectorAll('.reveal1');

  for (var i = 0; i < reveals.length; i++) {
    reveals[i].classList.add('active');
  }
}



document.addEventListener('DOMContentLoaded', function() {
  revealOnLoadpic();
});

function revealOnLoadpic() {
  var reveals = document.querySelectorAll('.reveal2');

  for (var i = 0; i < reveals.length; i++) {
    reveals[i].classList.add('active');
  }
}


window.addEventListener('scroll', reveal3);

function reveal3() {
  var reveals = document.querySelectorAll('.reveal3');

  for(var i=0; i<reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 150;

    if(revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    }
    else {
      reveals[i].classList.remove('active');
    }
  }
}


window.addEventListener('scroll', reveal4);
function reveal4() {
  var reveals = document.querySelectorAll('.reveal4');

  for(var i=0; i<reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 150;

    if(revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    }
    else {
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', reveal5);
function reveal5() {
  var reveals = document.querySelectorAll('.reveal5');

  for(var i=0; i<reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 150;

    if(revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    }
    else {
      reveals[i].classList.remove('active');
    }
  }
}


document.addEventListener("DOMContentLoaded", function() {
  var adCard = document.getElementById("ad-card");
  document.getElementById("close-ad").addEventListener("click", function() {
      adCard.style.display = "none";
  });
});
