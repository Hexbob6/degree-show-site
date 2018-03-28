// Displays the loading icon until page is fully loaded
$(document).ready(function () {
    
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
    
    // Gets height of the window
    var screenWidth = $(window).width(),
        screenHeight = $(window).height(),
        //Compensates for chrome scrollbar (17px)
        screenSize = (screenWidth + 17) + ' x ' + screenHeight;
    
    // Gives <main> a margin bottom height to reveal the footer
    var footerHeight = $('footer').height();
    
    
    // Adjusts the footer so it scrolls on mobile
    if (footerHeight >= screenHeight) {
        
        $('main').css({'margin-bottom' : 0});
        $('footer').css({
            'position' : 'relative',
            'bottom' : 'auto'
        });
        
    } else if (footerHeight < screenHeight) {
        
        $('main').css({'margin-bottom' : footerHeight + 'px'});
        $('footer').css({
            'position' : 'fixed',
            'bottom' : '0'
        });
        
    }
    
    // Adds the window screensize to the Screensize box
    $('.screen-size p').html(screenSize);
    
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


$(document).ready(function () {
        
    "use strict";
    var isMobile = false; // Initiate as 'False'

    // Device Detection
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
            
        isMobile = true;
    }


    if (isMobile) {
        
        // For the whole HTML Document
        $(".header-content-video video").css({'display': 'none'});
        $(".header-content-video img").css({'display': 'block'});
    }
    
});

