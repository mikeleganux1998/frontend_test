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
});
