// activacion de la libreria
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 15,
    autoWidth: true,

    // nav: true,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 4
      },
      1000: {
        items: 6
      }
    }
  });