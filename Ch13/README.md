The technique shown in this demo is used for emulating "transitionend" event on any environment in Bootstrap4 Util.js file code. Basically we bind "transitionend" handlers to elements but have the ability to handle our custom "bsTransitionEnd" whenever the native event is handled. If the environment does not support "transitionend", given that we call emulateTransitionEnd(duration) collection plugin function for the element on setup phase, the handler attached by the end user will be called even if the native event haven't been dispatched.

Also, jQuery uses this technique to substitute mouseover / mouseout events with mouseenter / mouseleave ones.

----------------

jquery.js included for this demo is a custom build of jQuery 3.4.1-pre with most of the modules but css, effects, and event cut off.
