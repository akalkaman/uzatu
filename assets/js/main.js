var map;

DG.then(function () {
    map = DG.map('map', {
        center: [43.085201, 74.705646],
        zoom: 15
    });
    DG.marker([43.085201, 74.705646]).addTo(map);
});

const sr = ScrollReveal({
    origin:  'top',
    distance: '50px',
    duration: 2000,
    delay: 200
})


sr.reveal('.main-section')
sr.reveal('.text-section')
sr.reveal('.map-section')



$(document).ready(function () {
    $('.menu-burger').click(function (event) {
        $('body').toggleClass('lock');
        $('.menu-block').toggleClass('active');
    });
  });
  
  $(document).ready(function () {
    $('.menu-close').click(function (event) {
        $('body').toggleClass('lock');
        $('.menu-block').removeClass('active');
    });
  });
  
  $(document).ready(function () {
    $('.menu-list-item').click(function (event) {
      $('.menu-block').removeClass('active');
      $('body').removeClass('lock');
    });
});