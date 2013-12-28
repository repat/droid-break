$(document).ready(function(){
    $('.qr').click(function(){
        qrName = $(this).attr('id');
        $('body').prepend('<div id="qrFade"></div><div class="emph-Block" id="qrBackground"><div id="qrText"><h2>'+qrName+'</h2><h4>Scan using a barcode scanner.</h4></div><img src="'+qrName+'.gif" alt="'+qrName+' QR" id="qrCode" /></div>');
        $('#qrFade').fadeIn('slow');
        $('#qrBackground').fadeIn('slow');
        $('#qrText').fadeIn('slow');
        $('#qrCode').fadeIn('slow');
    });
});

$(document).on('click', '#qrFade', function(){
    $('#qrFade').remove();
    $('#qrBackground').remove();
    $('#qrText').remove();
    $('#qrCode').remove();
});


// Maybe add resize reposition for .qrCode.
