
$(document).ready(function(){
  $("#customer-testimonial").owlCarousel({

  
  	loop:true,
  	mouseDrag:true,
  	autoplay:true,
  	nav:false,
  	margin:0,

  	center:true,
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
  })

});