// const nextIcon = '<i class="fas fa-arrow-right"></i>';
// const prevIcon = '<i class="fas fa-arrow-left"></i>';

$(document).ready(function($){
	"use strict";
        $('.slider-area').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true">', '<i class="fa fa-angle-right" aria-hidden="true">'],
            animateIn: "fadeIn",
            animateOut: "fadeOut",
            // navText:[
            //     prevIcon,
            //     nextIcon
            // ],
            
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });
        	    
});