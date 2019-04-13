/*global $ */
var $form = $("form").on("submit", function (e) {
    e.preventDefault();
    var urlencoded = $(this).serialize();
    $.ajax({
        url: "default.php",
        data: urlencoded,
        type: "POST"
    });
});
