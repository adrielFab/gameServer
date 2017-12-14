$(document).ready(function(){
    $("#image1").hover(function(){
        $(this).addClass('hover');
        $("#caption1").addClass('hover-caption');
    }, function(){
        $(this).removeClass('hover');
        $("#caption1").removeClass('hover-caption');
    });
    $("#caption1").hover(function(){
        $("#image1").addClass('hover');
        $(this).addClass('hover-caption');
    }, function(){
        $("#image1").removeClass('hover');
        $("#caption1").removeClass('hover-caption');
    });

    $("#image2").hover(function(){
        $(this).addClass('hover');
        $("#caption2").addClass('hover-caption');
    }, function(){
        $(this).removeClass('hover');
        $("#caption2").removeClass('hover-caption');
    });
    $("#caption2").hover(function(){
        $("#image2").addClass('hover');
        $(this).addClass('hover-caption');
    }, function(){
        $("#image2").removeClass('hover');
        $("#caption2").removeClass('hover-caption');
    });

    $("#image3").hover(function(){
        $(this).addClass('hover');
        $("#caption3").addClass('hover-caption');
    }, function(){
        $(this).removeClass('hover');
        $("#caption3").removeClass('hover-caption');
    });
    $("#caption3").hover(function(){
        $("#image3").addClass('hover');
        $(this).addClass('hover-caption');
    }, function(){
        $("#image3").removeClass('hover');
        $("#caption3").removeClass('hover-caption');
    });
});
