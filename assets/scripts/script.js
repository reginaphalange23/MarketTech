function myFunction() {
    var x = $('.dropdown');
    if (x.css("display") === 'block') {
        x.css("display", "none");
    } else {
        x.css("display", "block");
    }
}


$(document).ready(function(){
    $("#burger").click(function(){
        $(".menu").toggleClass("hidden")
        $(".wrapin").toggleClass("translated")
        $(".layer").toggleClass("show")
        $("body").toggleClass("noscroll")
        $("#close").toggleClass("displayblock")
        $("#burger").toggleClass("displaynone")
    })

    $("#close").click(function(){
        $(".menu").toggleClass("hidden")
        $(".wrapin").toggleClass("translated")
        $(".layer").toggleClass("show")
        $("body").toggleClass("noscroll")
        $("#close").toggleClass("displayblock")
        $("#burger").toggleClass("displaynone")
    });


    $(".clickable").click(function(e){
        $(e.target).find('.showable').toggleClass('something');
    });


    $("#click_one").click(function(){

    });

    $("#click_two").click(function(){
        $("#click_two").addClass("active")
        $("#first_tab").addClass("display_none")
        $("#second_tab").removeClass("display_none")
        $("#click_one").removeClass("active")
        $("#click_three").removeClass("active")
        $("#click_one").addClass("tab_bgd")
        $("#third_tab").addClass("display_none")
    });

    $("#click_one").click(function(){
        $("#click_one").addClass("active")
        $("#click_two").removeClass("active")
        $("#click_three").removeClass("active")
        $("#first_tab").removeClass("display_none")
        $("#second_tab").addClass("display_none")
        $("#third_tab").addClass("display_none")
    });


    $("#click_three").click(function(){
        $("#click_one").removeClass("active")
        $("#click_two").removeClass("active")
        $("#click_three").addClass("active")
        $("#first_tab").addClass("display_none")
        $("#second_tab").addClass("display_none")
        $("#third_tab").removeClass("display_none")
    });

})


function displayMenu() {
    var x = $('.clickable');
    if (x.css("display") === 'block') {
        x.css("display", "none");
    } else {
        x.css("display", "block");
    }
}
