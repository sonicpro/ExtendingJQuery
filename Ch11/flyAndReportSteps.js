/*global $ */
$(".flying-div").animate({ marginLeft: "800px" }, {
    duration: 4000,
    easing: "linear",
    step: function (now) {
        // Bitwise operations operate on signed 32 integers, so take care to not exceed the -2147483648/2147483647 values.
        var int = (now | 0);
        if (int % 2 === 0) {
            this.innerHTML = int + "px";
        }
    }
});
