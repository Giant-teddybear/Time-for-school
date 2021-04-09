$(".secondpage").hide();
$(".thirdpage").hide();
$(".firstpage").show();
$(".forthpage").hide();

$(".button1").click(function() {
    $(".secondpage").show();
    $(".firstpage").hide();
});
$(".button2").click(function() {
    $(".thirdpage").show();
    $(".secondpage").hide();
    $(".firstpage").hide();
});

$(document).ready(function() {
    $(".class").click(function() {
        $(".forthpage").show();
        $(".secondpage").hide();
    });
});

$(document).ready(function() {
    var a = $(".question");
    a.each(function(index) {
        var flip = $(this).find(".flip");
        var panel = $(this).find(".panel");
        flip.click(function() {
            panel.slideDown("fast");
        });
    });
});