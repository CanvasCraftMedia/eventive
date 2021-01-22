$(document).ready(function() {
    // begin load
    $(window).on('load',function(){
        var delayMs = 100; // delay in milliseconds
        
        setTimeout(function(){
            $('#myModal').modal('show');
        }, delayMs);
    });

}); // end ready