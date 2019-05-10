$( document ).ready(function() {

    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 800,
        clip: true,
        
        // Function. Custom easing pattern
        // If this is set to anything other than null, will override the easing option above
        customEasing: function (time) {
    
            // return <your formulate with time as a multiplier>

            // Example: easeInOut Quad
            return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;
    
        }
    });

});



