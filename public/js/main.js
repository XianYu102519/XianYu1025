//輪播圖
let slideIdx = 1;
let autoplay;

function changeSlide(ctrl) {
    showSlides(slideIdx + ctrl);
}

function showSlides(idx) {
    slideIdx = idx;
    let slides = document.getElementsByClassName("slide");
    if(slideIdx > slides.length) {
        slideIdx = 1;
    }else if(slideIdx == 0) {
        slideIdx = slides.length;
    }
    for(let i=0; i<slides.length; i++) {
        slides[i].className = slides[i].className.replace(" show", "")
    }
    slides[slideIdx - 1].className += " show";
    setAutoPlay();
}

function setAutoPlay() {
    if(autoplay != undefined) clearInterval(autoplay);
    autoplay = setInterval(function() {
        changeSlide(1);
    }, 2500);
}

window.onload = function() {
    showSlides(slideIdx);
}


// 會員互動功能
const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const loginbtn = document.querySelector('.loginbtn');
const iconclose = document.querySelector('.icon-close');
const submitbtn = document.querySelector('.submitbtn');

document.addEventListener('DOMContentLoaded', () => {
    // 行星評分功能
    const planets = document.querySelectorAll('.planet');
    const doneButton = document.querySelector('.done');
  
    planets.forEach((planet, i) => {
      planet.addEventListener('click', () => {
        const currentRating = i + 1; // 獲取行星評分
        planets.forEach((p, j) => {
          const icon = p.querySelector('iconify-icon');
          if (icon) {
            icon.style.color = j < currentRating ? '#ffd700' : '#64663d'; // 黃色高亮表示評分
          }
        });
      });
    });
  
    // Done 按鈕事件：檢查用戶反饋和行星評分
    doneButton.addEventListener('click', () => {
      const feedback1 = document.getElementById('feedback1').value.trim();
      const feedback2 = document.getElementById('feedback2').value.trim();
      const selectedPlanets = Array.from(planets).filter(planet => {
        const icon = planet.querySelector('iconify-icon');
        return icon && icon.style.color === 'rgb(255, 215, 0)'; // 選中行星為黃色
      });
  
      if (!feedback1 || !feedback2) {
        alert('Please fill out both feedback fields!');
        return;
      }
  
      const rating = selectedPlanets.length;
      alert(`Thank you for your feedback! You rated ${rating} stars.`);
    });
  });
  

