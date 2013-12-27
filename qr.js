var qrCode = '.qrCode';
var qrBackground = '#qrBackground';


$(document).ready(function(){
    $('.qr').click(function(){
        qrName = $(this).attr('id');
        $('body').prepend('<div id="qrBackground"></div><div class="qrCode"><p class="qrCode">Firefox<br>market://details?id=org.mozilla.firefox</p><img src="'+qrName+'.gif" alt="'+qrName+'" class="qrCode" /></div>');
        qrTop = $('div'+qrCode).height() / 2;
        qrRight = $('div'+qrCode).width() / 2;
        $('div'+qrCode).css({"margin-top": -qrTop, "margin-right": -qrRight});
        $('p'+qrCode).css({"margin-top": -qrTop + 12, "margin-right": -$('p'+qrCode).width()/2}); // Fix this shit.
        $('img'+qrCode).css({"margin-top": -qrTop + 12, "margin-right": -qrRight + 12});
        $(qrBackground).fadeIn('slow');
        $(qrCode).fadeIn('slow');
    });
});

$(document).on('click', qrBackground, function(){
    $(qrBackground).remove();
    $(qrCode).remove();
});


// Maybe add resize reposition for .qrCode.
