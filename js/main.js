$(document).ready(function () {
    $("#curiosidad").hover(function () {
        $("#imgHome1").css("display", "block");
        $("#imgHome2").css("display", "block");
        $("#imgHome3").css("display", "block");
        $("#imgHome4").css("display", "block");
    }, function () {
        $("#imgHome1").css("display", "none");
        $("#imgHome2").css("display", "none");
        $("#imgHome3").css("display", "none");
        $("#imgHome4").css("display", "none");
    });
});