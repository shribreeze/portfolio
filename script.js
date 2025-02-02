const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const closeMenu = document.getElementById('nav-close');

// Show menu
navToggle.addEventListener('click', () => { navMenu.classList.toggle('show'); })

// Hide menu
closeMenu.addEventListener('click', () => { navMenu.classList.remove('show'); })

// Remove menu mobile
const navLink = document.querySelectorAll('.nav-link');

function linkAction() { navMenu.classList.remove('show'); }
navLink.forEach(n => n.addEventListener('click', linkAction));

// Scroll sections active link
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', scrollActive);

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active');
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active');
        }
    })
}

document.addEventListener("DOMContentLoaded", function() {
    var adCard = document.getElementById("ad-card");
    document.getElementById("close-ad").addEventListener("click", function() {
        adCard.style.display = "none";
    });
  });



  const track = document.querySelector(".certificate-track");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const dotsContainer = document.querySelector(".dots-container");
  
  let index = 0;
  let startX = 0;
  let currentX = 0;
  let isDragging = false;
  
  // Create Dots
  const totalCertificates = track.children.length;
  for (let i = 0; i < totalCertificates; i++) {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => {
          index = i;
          updateSlider();
      });
      dotsContainer.appendChild(dot);
  }
  
  const dots = document.querySelectorAll(".dot");
  
  // Button Events
  nextBtn.addEventListener("click", () => {
      index = (index + 1) % totalCertificates;
      updateSlider();
  });
  
  prevBtn.addEventListener("click", () => {
      index = (index - 1 + totalCertificates) % totalCertificates;
      updateSlider();
  });
  
  // Touch Event Listeners
  track.addEventListener("touchstart", touchStart);
  track.addEventListener("touchmove", touchMove);
  track.addEventListener("touchend", touchEnd);
  
  function touchStart(event) {
      startX = event.touches[0].clientX;
      isDragging = true;
  }
  
  function touchMove(event) {
      if (!isDragging) return;
      currentX = event.touches[0].clientX;
  }
  
  function touchEnd() {
      if (!isDragging) return;
      isDragging = false;
  
      let diff = startX - currentX;
      if (diff > 50) {
          // Swipe left (next)
          index = (index + 1) % totalCertificates;
      } else if (diff < -50) {
          // Swipe right (previous)
          index = (index - 1 + totalCertificates) % totalCertificates;
      }
      updateSlider();
  }
  
  // Update Slider & Dots
  function updateSlider() {
      track.style.transform = `translateX(-${index * 100}%)`;
  
      // Update active dot
      dots.forEach((dot, i) => {
          dot.classList.toggle("active", i === index);
      });
  }
  