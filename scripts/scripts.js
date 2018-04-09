var $;
var console;


$(document).ready(function () {
    
    // Displays the loading icon until page is fully loaded
    "use strict";
    $("#loading-overlay").fadeOut(100);
    $('#loading-box').css({'transform' : 'translateY(50%)'});
    
    

    

    
});


// Event Handlers that require updating on page load and resize
$(window).on("ready load resize", function () {

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
    if (navigator.userAgent.match(/(iPod|iPhone|iPad)/i)) {
        
        $('main').css({'margin-bottom' : 0});
        $('footer').css({
            'position' : 'relative',
            'bottom' : 'auto'
        });
        
        console.log('This is not iOS');
        
    } else if (footerHeight >= screenHeight) {
        
        $('main').css({'margin-bottom' : 0});
        $('footer').css({
            'position' : 'relative',
            'bottom' : 'auto'
        });
        console.log('This is not iOS');
        
    } else if (footerHeight < screenHeight) {
        
        $('main').css({'margin-bottom' : footerHeight + 'px'});
        $('footer').css({
            'position' : 'fixed',
            'bottom' : '0'
        });
        
        console.log('This is not iOS');
        
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


// Back Button
$('.back-button-container').on('click', function () {
    
    "use strict";
    window.history.back();
    
});

$(document).ready(function () {
    
    // Variables for custom course content
    "use strict";
    var pageBody = $('body'),
        headerVideo = $('.student-header-video-wrapper'),
        studentSpecialsims = $('.student-specialisms');
    
    
    var linesLeftCDME =
        '<video class="vertical-align" autoplay><source     src="vid/Course_Lines/CDME_page-lines-left_vid1.mp4" type="video/mp4"></video>' + '<img class="video-replacement-image vertical-align" src="img/brand_elements/course_line_images/CDME_student_lines_left1.png">',
        linesRightCDME =
        '<video class="vertical-align" autoplay><source src="vid/Course_Lines/CDME_page-lines-right_vid1.mp4" type="video/mp4"></video>' + '<img class="video-replacement-image vertical-align" src="img/brand_elements/course_line_images/CDME_student_lines_right1.png">',
        cdmeSpecialism = '<a href="" class="blue-font"><span>//</span>Creative Digital Media</a>';
    
    var linesLeftANIM =
        '<video class="vertical-align" autoplay><source     src="vid/Course_Lines/ANIM_page-lines-left_vid1.mp4" type="video/mp4"></video' + '><img class="video-replacement-image vertical-align" src="img/brand_elements/course_line_images/ANIM_student_lines_left1.png">',
        linesRightANIM =
        '<video class="vertical-align" autoplay><source src="vid/Course_Lines/ANIM_page-lines-right_vid1.mp4" type="video/mp4"></video>' + '<img class="video-replacement-image vertical-align" src="img/brand_elements/course_line_images/ANIM_student_lines_right1.png">',
        animSpecialism = '<a href="" class="green-font"><span>//</span>Animation</a>';
        
    var linesLeftGDES =
        '<video class="vertical-align" autoplay><source     src="vid/Course_Lines/GDES_page-lines-left_vid1.mp4" type="video/mp4"></video>' + '<img class="video-replacement-image vertical-align" src="img/brand_elements/course_line_images/GDES_student_lines_left1.png">',
        linesRightGDES =
        '<video class="vertical-align" autoplay><source src="vid/Course_Lines/GDES_page-lines-right_vid1.mp4" type="video/mp4"></video>' + '<img class="video-replacement-image vertical-align" src="img/brand_elements/course_line_images/GDES_student_lines_right1.png">',
        gdesSpecialism = '<a href="" class="purple-font"><span>//</span>Graphic Design</a>';
    
    var linesLeftILLU =
        '<video class="vertical-align" autoplay><source     src="vid/Course_Lines/ILLU_page-lines-left_vid1.mp4" type="video/mp4"></video><img class="video-replacement-image vertical-align" src="img/brand_elements/course_line_images/ILLU_student_lines_left1.png">',
        linesRightILLU =
        '<video class="vertical-align" autoplay><source src="vid/Course_Lines/ILLU_page-lines-right_vid1.mp4" type="video/mp4"></video>' + '<img class="video-replacement-image vertical-align" src="img/brand_elements/course_line_images/ILLU_student_lines_right1.png">',
        illuSpecialism = '<a href="" class="yellow-font"><span>//</span>Illustration</a>';
    
    var linesLeftART =
        '<video class="vertical-align" autoplay><source     src="vid/Course_Lines/ART_page-lines-left_vid1.mp4" type="video/mp4"></video>' + '<img class="video-replacement-image vertical-align" src="img/brand_elements/course_line_images/ART_student_lines_left1.png">',
        linesRightART =
        '<video class="vertical-align" autoplay><source src="vid/Course_Lines/ART_page-lines-right_vid1.mp4" type="video/mp4"></video>' + '<img class="video-replacement-image vertical-align" src="img/brand_elements/course_line_images/ART_student_lines_right1.png">',
        artSpecialism = '<a href="" class="red-font"><span>//</span>Fine Art &amp Art and Design</a>';
        
    
    // Course Classes 
    // - anim
    // - illust
    // - cdme
    // - graphics
    // - fine-art
    
    /*
    // If body has only one class, do this, or if more than one class do this
    if (pageBody.hasClass('cdme') && pageBody[0].classList.length === 1) {
        
        headerVideo.append(linesLeftCDME, linesRightCDME);
        studentSpecialsims.append(cdmeSpecialism);
        
        console.log("CDME");
        
        
    } else if (pageBody.hasClass('graphics') && pageBody[0].classList.length === 1) {
        
        headerVideo.append(linesLeftGDES, linesRightGDES);
        studentSpecialsims.append(gdesSpecialism);
        
        console.log("GDES");
        
    } else if (pageBody.hasClass('illust') && pageBody[0].classList.length === 1) {
        
        headerVideo.append(linesLeftILLU, linesRightILLU);
        studentSpecialsims.append(illuSpecialism);
        
        console.log("ILLU");
        
    } else if (pageBody.hasClass('fine-art') && pageBody[0].classList.length === 1) {
        
        headerVideo.append(linesLeftART, linesRightART);
        studentSpecialsims.append(artSpecialism);
        
        console.log("ART");
        
    } else if (pageBody.hasClass('anim') && pageBody[0].classList.length === 1) {
        
        headerVideo.append(linesLeftANIM, linesRightANIM);
        studentSpecialsims.append(animSpecialism);
        
        console.log("ANIM");
        
    } else if ((pageBody.hasClass('anim')) && (pageBody.hasClass('illust'))) {
        
        headerVideo.append(linesLeftANIM, linesRightILLU);
        studentSpecialsims.append(animSpecialism, illuSpecialism);
        
        console.log("ANIM ILLU");
        
    } else if ((pageBody.hasClass('anim')) && (pageBody.hasClass('cdme'))) {
        
        headerVideo.append(linesLeftCDME, linesRightANIM);
        studentSpecialsims.append(cdmeSpecialism, animSpecialism);
        
        console.log("CDME ANIM");
        
    } else if ((pageBody.hasClass('anim')) && (pageBody.hasClass('graphics'))) {
        
        headerVideo.append(linesLeftANIM, linesRightGDES);
        studentSpecialsims.append(animSpecialism, gdesSpecialism);
        
        console.log("ANIM GDES");
        
    } else if ((pageBody.hasClass('anim')) && (pageBody.hasClass('fine-art'))) {
        
        headerVideo.append(linesLeftANIM, linesRightART);
        studentSpecialsims.append(animSpecialism, artSpecialism);
        
        console.log("ANIM ART");
        
    } else if ((pageBody.hasClass('illust')) && (pageBody.hasClass('cdme'))) {
        
        headerVideo.append(linesLeftCDME, linesRightILLU);
        studentSpecialsims.append(cdmeSpecialism, illuSpecialism);
        
        console.log("CDME ILLU");
        
    } else if ((pageBody.hasClass('illust')) && (pageBody.hasClass('graphics'))) {
        
        headerVideo.append(linesLeftILLU, linesRightGDES);
        studentSpecialsims.append(illuSpecialism, gdesSpecialism);
        
        console.log("ILLU GDES");
        
    } else if ((pageBody.hasClass('illust')) && (pageBody.hasClass('fine-art'))) {
        
        headerVideo.append(linesLeftILLU, linesRightART);
        studentSpecialsims.append(illuSpecialism, artSpecialism);
        
        console.log("ILLU ART");
        
    } else if ((pageBody.hasClass('graphics')) && (pageBody.hasClass('cdme'))) {
        
        headerVideo.append(linesLeftCDME, linesRightGDES);
        studentSpecialsims.append(cdmeSpecialism, gdesSpecialism);
        
        console.log("CDME GDES");
        
    } else if ((pageBody.hasClass('cdme')) && (pageBody.hasClass('fine-art'))) {
        
        headerVideo.append(linesLeftCDME, linesRightART);
        studentSpecialsims.append(cdmeSpecialism, artSpecialism);
        
        console.log("CDME ART");
        
    } else if ((pageBody.hasClass('graphics')) && (pageBody.hasClass('fine-art'))) {
        
        headerVideo.append(linesLeftGDES, linesRightART);
        studentSpecialsims.append(gdesSpecialism, artSpecialism);
        
        console.log("GDES ART");
        
    } */
    
    
    var courseList = ["cdme", "graphics", "anim", "illust", "fine-art"],
        courseLongTitle = ["cdme", "graphics", "anim", "illust", "fine-art"],
        i,
        leftHandLines,
        rightHandLines;
    
    
    for (i = 0; i < courseList.length; i++) {
        
        if (pageBody.hasClass(courseList[i])) {
            
            leftHandLines = courseList[i];
            
            break;
            
        }
        
//        console.log(courseList[i]);
        
    }    
    
    for (i = 0; i < courseList.length; i++) {
        
        if (pageBody.hasClass(courseList[i]) && leftHandLines !== courseList[i]) {
            
            rightHandLines = courseList[i];
            break;
            
        }
        
//        console.log(courseList[i]);
        
    }
    
    if (!rightHandLines) {
        
        rightHandLines = leftHandLines;
        
    }
    
    console.log(rightHandLines);
    console.log(leftHandLines);
    
    
    headerVideo.append('<video class="vertical-align" autoplay><source     src="vid/Course_Lines/' + leftHandLines  + '_page-lines-left_vid1.mp4" type="video/mp4"></video><img class="video-replacement-image vertical-align" src="img/brand_elements/course_line_images/' + leftHandLines + '_student_lines_left1.png">', '<video class="vertical-align" autoplay><source src="vid/Course_Lines/' + rightHandLines + '_page-lines-right_vid1.mp4" type="video/mp4"></video>' + '<img class="video-replacement-image vertical-align" src="img/brand_elements/course_line_images/' + rightHandLines + '_student_lines_right1.png">');
    
    
    
//    switch(leftHandLines) {
//            
//        case "anim":
//            studentSpecialsims.append(animSpecialism);
//            break;
//            
//        case "illust":
//            studentSpecialsims.append(illuSpecialism);
//            break;
//            
//        case "cdme":
//            studentSpecialsims.append(cdmeSpecialism);
//            break;
//            
//        case "graphics":
//            studentSpecialsims.append(gdesSpecialism);
//            break;
//                
//        case "fine-art":
//            studentSpecialsims.append(artSpecialism);
//            break;
//            
//        default:
//            break;
//            
//    }
    
    if (pageBody.hasClass('anim')) {
        studentSpecialsims.append(animSpecialism);
    }
    
    if (pageBody.hasClass('illust')) {
        studentSpecialsims.append(illuSpecialism);
    }
    
    if (pageBody.hasClass('cdme')) {
        studentSpecialsims.append(cdmeSpecialism);
    }
    
    if (pageBody.hasClass('graphics')) {
        studentSpecialsims.append(gdesSpecialism);
    }
    
    if (pageBody.hasClass('fine-art')) {
        studentSpecialsims.append(artSpecialism);
    }
    
    
    
    
    // Mobile detection
    
    var isMobile = false; //Initiate as false
    
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|iP(hone|od)|iPad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {

        isMobile = true;
    }
    
    var mobileScreenWidth = $(window).width();
    
    // Checks to ensure device is mobile but not a tablet (iPad) 
    if (isMobile && (mobileScreenWidth < 768)) {
        
//        alert('This is mobile');
        
        // Makes header videos display as images
        $(".header-content-video video").css({'display': 'none'});
        $(".header-content-video img").css({'display': 'block'});
        $(".student-header-video-wrapper video").css({'display': 'none'});
        $(".video-replacement-image").css({'display': 'block'});
        $(".mobile-header-lines>video").css({'display': 'none'});
        $(".mobile-header-lines>img").css({'display': 'block'});
        
        
//        $('.screen-size p').append("<span>This is mobile</span>");
        
    } else {
        
//        $('.screen-size span').html("This is not mobile.");
//        alert('This isn\'t mobile');
    }
    
});


// Countdown timer for holding page
$(window).on('load', function (e) {
    
    "use strict";
    var countDownDate = new Date("May 18, 2018 18:00:00").getTime();
    
    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        $('#countdown').html(days + "d " + hours + "h "
                             + minutes + "m " + seconds + "s ");

        // If the count down is finished, write some text 
        if (distance < 0) {
            clearInterval(x);
            $('#countdown').html("The Degree Show is now open.");
        }
    }, 1000);
    
});

