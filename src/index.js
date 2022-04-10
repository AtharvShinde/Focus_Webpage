import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import { doc } from "prettier";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
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
      } // End if
    });
    // activetabControl();
  });

  function activetabControl() {
    $('.nav .nav-item a').click(function() {
        $('.nav-item').removeClass('active');
        $(this).closest('.nav-item').addClass('active');
    });
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('#navbarToggler li a')

    window.addEventListener('scroll', ()=> {
        console.log(document.getElementById('hero').offsetLeft);
    });
  }x
