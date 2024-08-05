// Custom Scripts
$(document).ready(function () {
    console.log("Página cargada y lista");

    $('#sectoresCarousel').owlCarousel({
        loop: true,
        margin: 5,
        nav: false,
        dots: true,
        navText: [
            '<span class="carousel-control-prev-icon" aria-hidden="true"></span>',
            '<span class="carousel-control-next-icon" aria-hidden="true"></span>'
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

     // Efecto de desplazamiento suave para los enlaces de navegación
     $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();
        
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000); // Duración del desplazamiento en milisegundos
    });

});
