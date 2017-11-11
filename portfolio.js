$(document).ready(function(){
          // Add scrollspy to <body>
          $('body').scrollspy({target: ".navbar", offset: 50});   

          // Add smooth scrolling on all links inside the navbar
          $("#toggler a, #to-top a,#top a").on('click', function(event) {
            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
              // Prevent default anchor click behavior
              event.preventDefault();

              // Store hash
              var hash = this.hash;

              // Using jQuery's animate() method to add smooth page scroll
              // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
              $('html, body').animate({
                scrollTop: $(hash).offset().top
              }, 800, function(){
           
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
              });
            }  // End if
          });
        });

$(function() {
	    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
	      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
	    }).on("focus", ".floating-label-form-group", function() {
	      $(this).addClass("floating-label-form-group-with-focus");
	    }).on("blur", ".floating-label-form-group", function() {
	      $(this).removeClass("floating-label-form-group-with-focus");
	});
});