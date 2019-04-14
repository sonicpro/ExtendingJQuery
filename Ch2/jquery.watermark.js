/*global $ */

$.fn.watermark = function (options) {
    options = $.extend({
        watermarkClass: "watermark"
    }, options || {});
    // On focus, check if the value of the input equals to the value of title attribute, style it as the placeholder.
    return this.focus(function () {
        var $input = $(this);

        if ($input.attr("title") === $input.val()) {
            $input.val("");
        }
        $input.removeClass(options.watermarkClass);
    }).blur(function () {
        var $input = $(this);

        if ($input.val() === "") {
            $input.val($input.attr("title"));
        }
        if ($input.attr("title") === $input.val()) {
            $input.addClass(options.watermarkClass);
        }
    }).blur();
};
