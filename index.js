
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
