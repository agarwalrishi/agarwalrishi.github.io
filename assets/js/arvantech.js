$(function(){

    resizeDiv();

    $("#home").click(function() {
        $('html, body').animate({
            scrollTop: $("#arvan-home").offset().top
        }, 2000);
    });
    $("#about").click(function() {
        $('html, body').animate({
            scrollTop: $("#about-arvan").offset().top
        }, 2000);
    });
    $("#services").click(function() {
        $('html, body').animate({
            scrollTop: $("#arvan-services").offset().top
        }, 2000);
    });
    $("#portfolio").click(function() {
        $('html, body').animate({
            scrollTop: $("#arvan-projects").offset().top
        }, 2000);
    });
    $("#careers").click(function() {
        $('html, body').animate({
            scrollTop: $("#arvan-careers").offset().top
        }, 2000);
    });
    $("#contact").click(function() {$("#navbar").find("ul").find("li").removeClass('active');
        $('html, body').animate({
            scrollTop: $("#arvan-contact").offset().top
        }, 2000);
    });

    $("#back-to-home").click(function() {
        $('html, body').animate({
            scrollTop: $("#arvan-home").offset().top
        }, 2000);
    });

    //Sticky navbar after scroll
    $("#navbar-wrapper").affix({
        offset: {
            top: $('#arvan-home').height()
        }
    });

    //When navbar sticks to top after scroll
    $('#navbar-wrapper').on('affix.bs.affix', function () {
        //after navbar goes sticky we are adding class for different styling
        $('nav').addClass('sticky-navbar-inverse');
        $('#navbar-wrapper').css('margin-top','0');
        $('#navbar-container').removeClass('container');

    });

    //When navbar stick to it's original position
    $('#navbar-wrapper').on('affix-top.bs.affix', function () {
        //after navbar goes to original position we are removing class for different styling
        $('nav').removeClass('sticky-navbar-inverse');
        $('#navbar-wrapper').css('margin-top','20px');
        $('#navbar-container').addClass('container');
    });

    //When site is open on mobile device and menu icon is clicked.
    $("#navbar").on("shown.bs.collapse", function(){

        $('.navbar-nav').css('background-color','rgba(18, 43, 64, 0.61)')
    });

    //Job description loading static
    $("#job1").click(function(){
        $("#job-description").hide('slow');
        $("#job-description").load("mobile-developer.html",showNewJob);
    });
    $("#job2").click(function(){
        $("#job-description").hide('slow');
        $("#job-description").load("software-developer.html",showNewJob);
    });
    $("#job3").click(function(){
        $("#job-description").hide('slow');
        $("#job-description").load("business-developer.html",showNewJob);
    });

    function showNewJob()
    {
        $("#job-description").show("normal");
    }

    //Services details loading
    $("#service1").click(function(){
        $("#services-details").hide('slow');
        $("#services-details").load("staff-augmentation.html",showNewContent);
    });

    $("#service2").click(function(){
        $("#services-details").hide('slow');
        $("#services-details").load("web-development.html",showNewContent);
    });
    $("#service3").click(function(){
        $("#services-details").hide('slow');
        $("#services-details").load("mobile-development.html",showNewContent);
    });

    function showNewContent()
    {
        $("#services-details").show('normal');


            if ($(window).width() <= 616 ){

                $('html, body').animate({
                    scrollTop: $("#test").offset().top
                }, 2000);

            }





    }


    //Contact us with mail
    $("#contactus-button").click(function(e){
        e.preventDefault();

        if($("#name").val() == "" || $("#mail").val() == "" || $("#subject").val() == "" || $("#message").val() == "" )
        {
            alert("You must fill all the fields.");
        }
        else
        {
            $.ajax({
                url: 'contact.php',
                type: 'post',
                data: $('#contactForm').serialize(),
                success: function(data) {

                    if(data == "Sent")
                    {
                        alert("Your mail has been sent successfully");
                    }
                    else
                    {
                        alert("Something went wrong, try again later");
                    }
                }
            });

        }
    });


});

///Google maps code for getting arvan pin and set on div.
function initialize()
{
    var mapProp = {
        center: new google.maps.LatLng(18.53191,73.89725),
        zoom:18,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

function loadScript()
{
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://maps.googleapis.com/maps/api/js?key=&sensor=false&callback=initialize";
    document.body.appendChild(script);
}

window.onload = loadScript;

//Set width and height of image slider to size of screen.
window.onresize = function(event) {
    resizeDiv();
};
function resizeDiv() {
    vpw = $(window).width();
    vph = $(window).height();
    $(".carousel").css({"height": vph + "px"});
    $(".item").css({"height": vph + "px"});
    $(".carousel-inner").find(".item").find("img").css({"height": vph + "px"});

}

marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
});
var test ="# Marked in browser\n\n 1. Rendered by **marked**.\n2. Arvan technology";
console.log( marked(test));
/*Get section while scroll and make respective menu item active*/
$(window).scroll(function() {
    var offset1 = $("#about-arvan").offset().top;
    var offset2 = $("#arvan-services").offset().top;
    var offset3 = $("#arvan-careers").offset().top;
    var offset4 = $("#arvan-contact").offset().top;
    var offset5 = $("#arvan-home").offset().top;
    var offset7 = $("#arvan-projects").offset().top;


    if ($(window).scrollTop() >= offset1) {
        $("#navbar").find("ul").find("li").removeClass('active');
        $("#about").addClass('active');
    }
    if($(window).scrollTop() >= offset2) {
        $("#navbar").find("ul").find("li").removeClass('active');
        $("#services").addClass('active');
    }
    if($(window).scrollTop() >= offset3) {
        $("#navbar").find("ul").find("li").removeClass('active');
        $("#careers").addClass('active');
    }
    if($(window).scrollTop() >= offset4) {
        $("#navbar").find("ul").find("li").removeClass('active');
        $("#contact").addClass('active');
    }
    if($(window).scrollTop() == offset5) {
        $("#navbar").find("ul").find("li").removeClass('active');
        $("#home").addClass('active');
    }
    if($(window).scrollTop() == offset7) {
        $("#navbar").find("ul").find("li").removeClass('active');
        $("#portfolio").addClass('active');
    }
/*JS  to filter project by catagory*/
$('.radio-option').click(function() {
                    var check = $(this).find('input[type=radio]').val();
                    console.log(check);
                    if(check == "All")
                        $('[data-filter]').show();
                    else if(check == "Webapp")
                    {
                        $('[data-filter="mobileapp"]').hide();
                        $('[data-filter="webapp"]').show();
                    }
                    else
                    {
                       $('[data-filter="webapp"]').hide(); 
                       $('[data-filter="mobileapp"]').show(); 
                    }   

            });


});
