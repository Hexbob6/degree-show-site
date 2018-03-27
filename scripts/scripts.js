// Displays the loading icon until page is fully loaded
$(window).ready(function () {
    
    "use strict";
    $("#loading-overlay").fadeOut(100);
    $('#loading-box').css({'transform' : 'translateY(50%)'});
    
});


// Event Handlers that require updating on page load and resize
$(window).on("load resize", function () {

    "use strict";
    
    // Makes featured content boxes consistently square
    var featuredStudentContentHeight = $('.featured-student-content').width();
    
    $('.featured-student-content').css({'height' : featuredStudentContentHeight + 'px'});
    
    
    // Gives <main> a margin bottom height to reveal the footer
    var footerHeight = $('footer').height();
    
    $('main').css({'margin-bottom' : footerHeight + 'px'});
    
    
    // Checks if student images are landscape or portrait and scales accordingly
    $(".student-work img").each(function () {
        
        var imgWidth = $(this).width(),
            imgHeight = $(this).height();
        
        if (imgWidth < imgHeight) {
            
            $(this).css({'max-width' : '400px'});
            
        } else if (imgWidth > imgHeight) {
            
            $(this).css({'max-width' : '100%'});
        
        } else if (imgWidth === imgHeight) {

            $(this).css({'max-width' : '600px'});
        }
    });
    
});


// Creates the hover scrolling effects for the student panels
$('.featured-student-content').mouseenter(function () {
    "use strict";
    $(this).find('.featured-student-logo').css({'transform' : 'translateY(-100%)'});
});

$('.featured-student-content').mouseleave(function () {
    "use strict";
    $(this).find('.featured-student-logo').css({'transform' : 'translateY(0%)'});
});


// Takes the first word of name and changes the font weight to 'light' (300)
$('.featured-student-name , .student-name').each(function () {
    
    "use strict";
    var firstName = $(this);
    
    firstName.html(firstName.text().replace(/(^\w+)/, '<span class="light-text">$1</span>'));
    
});


// Randomises box colour (for demonstration only) 
$('.featured-student-logo').each(function () {
    
    "use strict";
    
    var colors = ['#ef5451', '#fcb64e', '#81c784', '#5ac7da', '#ac6cad'],
        
        random_color = colors[Math.floor(Math.random() * colors.length)];
        
    $(this).css({'background-color': random_color});
    
});


// Previous Shows Dropdown
$('.dropdown-button').click(function (e) {
    
    "use strict";
    
    e.stopPropagation();
    
    $(this).toggleClass('dropdown-active');
    $('.previous-dropdown').toggleClass('dropdown-move');
    
});

$(document).click(function () {
    
    "use strict";
    
    // Hides dropdown when clicking anywhere outside of it
    $('.dropdown-button').removeClass('dropdown-active');
    $('.previous-dropdown').addClass('dropdown-move');
    
});



