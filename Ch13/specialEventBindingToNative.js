/*global jQuery */
(function ($) {
    // Define a new event type "rightclick" and bind it to the native "contextmenu" event.
    // Attach jQuery Event object for the new event to $.event.special.
    $.event.special.rightclick = {
        bindType: "contextmenu",
        delegateType: "contextmenu",
        eventType: "rightclick",
        handle: function(event) {
            // Change the event type.
            event.type = $.event.special.rightclick.eventType;
            // Accessing the handler attached by the end user through event.handleObj.handler and call it.
            return event.handleObj.handler.apply(this, arguments);
        }
    };

    var console$ = $(".console");
    $(".target").on("contextmenu", function (e) {
        e.preventDefault();
        console$.append( "<p>The native event has fired, no special handling is required for \"contextmenu\".</p>" );
    }).on("rightclick", function () {
        console$.append( "<p>In \"rightclick\" handler we can provide the special handling for the native event. For example, we can check if it has fired and trigger it explicitly if it hasn't.</p>" );
        console$.append( "<hr/>" );
    });
}(jQuery));
