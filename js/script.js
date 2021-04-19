$(function(){
    $(".navbar a, footer a").on('click', function(event){
        event.preventDefault();
        var hash = this.hash;
        
        $('body, html').animate({scrollTop: $(hash).offset().top},700 , function(){
            window.location.hash=hash;
        })
    });
    $('#to, #hi').tooltip();
})