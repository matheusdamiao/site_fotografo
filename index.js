/* 
let i = 0;
let time = 6000;
let images = ['pexels-asad-photo-maldives-2548558.jpg',
          'pexels-pham-hoang-kha-3347413.jpg',
          'pexels-helena-jankovičová-kováčová-6972345.jpg',
          'pexels-alberto-ramírez-sobrino-6877078.jpg'
        ];


function slideShow() {

       document.getElementById('slide').src = images[i];

      if (i < images.length - 1) {
         i++;
      } else {
        i = 0;
      }
      setTimeout("slideShow()", time);
}

window.onload = slideShow;
 */






// Modal pictures


const modalPictures = document.querySelectorAll('.column img')
const modalDiv = document.querySelector('.modal')
const modalContent = document.querySelector('#modal-img')
const modalText = document.querySelector('#caption')
const closeModal = document.querySelector('.close')
const topNav = document.querySelector('#nav')

modalPictures.forEach( (image) => {
  image.addEventListener("click", ()=> {
    topNav.style.display = 'none';
    modalDiv.style.display = 'block';
    modalContent.src = image.src;
    modalText.innerHTML = image.alt;

    closeModal.addEventListener("click", ()=>{
      modalDiv.style.display = 'none';
      topNav.style.display = 'flex';
    })

  });
  
});


const lastModalPics = document.querySelectorAll('.last-modal img')

lastModalPics.forEach( (image)=> {
  image.addEventListener("click", () => {
    topNav.style.display = 'none';
    modalDiv.style.display = 'block';
    modalContent.src = image.src;
    modalText.innerHTML = image.alt;

    closeModal.addEventListener("click", ()=>{
      modalDiv.style.display = 'none';
      topNav.style.display = 'flex';
    })
  })


})



const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 1000,
  parallax: true,
 

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  autoplay: {
    delay: 4000,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }

  
  
});





function openModal() {
  document.querySelector('.modal-galeria').style.display = 'block';
  document.querySelector('#nav').style.display = 'none';
}

function closemodal() {
  document.querySelector('.modal-galeria').style.display = 'none';
  document.querySelector('#nav').style.display = 'flex'
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function plusSlides(n) {
  showSlides(slideIndex += n)
}

function showSlides(n) {
  
  let slides = document.querySelectorAll('.mySlides');
  var i;
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
     
  slides[slideIndex-1].style.display = 'block';

  
}


