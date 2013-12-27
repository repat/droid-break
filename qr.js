$(document).ready(function(){
    qrName = 'firefox';
    $('.qr').click(function(){
        var curId = $(this).attr('id');
        $('body').prepend('<div id="qrBackground"></div><img src="firefox.gif" alt="firefox" id="qrCode" />');
        //$('#qrBackground').css({"height" : window.innerHeight});
        $('#qrCode').css({"top": window.innerHeight / 2.5, "right": window.innerWidth / 2});
        $('#qrBackground').fadeIn('slow');
        $('#qrCode').fadeIn('slow');
    });
});

$(document).on('click', '#qrBackground', function(){
    $('#qrBackground').remove();
    $('#qrCode').remove();
});
