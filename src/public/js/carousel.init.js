/* Theme Name: Caxos - Responsive Landing page template
   Author: Coderthemes
   Author e-mail: coderthemes@gmail.com
   Version: 1.0.0
   Created:March 2016
   File Description: carousel JS file of the template
*/
$(document).ready(function() {


    /* ==============================================
    carousel
    =============================================== */
        $('#testi-carousel').owlCarousel({
            items: 1,
            loop:false,
            margin:24,
            nav:false,
            responsive:{
                576:{
                    items:2
                },
    
            }
        });
    });

    $(document).ready(function() {


    /* ==============================================
    carousel
    =============================================== */
        $('#testi-carousel-2').owlCarousel({
            items: 1,
            loop:false,
            margin:24,
            nav:false,
            responsive:{
                576:{
                    items:4
                },
    
            },
            autoplay:true,
            autoplayTimeout:1500,
            autoplayHoverPause:true,
            loop: true,
            dots: false
        });
    });