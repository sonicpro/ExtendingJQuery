/*global $ */
var $form = $("form").on("submit", function (e) {
    e.preventDefault();
    // Trigger handler of focus() for every input so as to cleanup placeholders before the form submit.
    // It is important not to call focus() itself to prevent triggering blur() on the other inputs.
    $("input[type='text']", this).each(function () {
        $(this).triggerHandler("focus");
    });
    var urlencoded = $(this).serialize();
    $.ajax({
        url: "default.php",
        data: urlencoded,
        type: "POST"
    });
});

// Initialize inputs with placeholders using "watermark" plugin.
$("input[type='text']", $form).watermark();
