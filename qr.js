// Function for returning the aesthetically pleasing stylization of an app name
// The case is the id of the app in the HTML, the return is what the user
// will see.
function appNames(appID){
    switch(appID){
        case 'andless':
            return 'andLess';
        case 'andstatus':
            return 'AndStatus';
        case 'antennapod':
            return 'AntennaPod';
        case 'anysoftkeyboard':
            return 'AnySoftKeyboard';
        case 'cgeo':
            return 'c:geo';
        case 'chatsecure':
            return 'ChatSecure';
        case 'csipsimple':
            return 'CSipSimple';
        case 'fbreader':
            return 'FBReader';
        case 'feedex':
            return 'FeedEx';
        case 'fileexplorer':
            return 'File Explorer';
        case 'firefox':
            return 'Firefox';
        case 'ghostcommander':
            return 'Ghost Commander';
        case 'hackerskeyboard':
            return 'Hacker\'s Keyboard';
        case 'impeller':
            return 'Impeller';
        case 'k9':
            return 'K-9 Mail';
        case 'linphone':
            return 'Linphone Video';
        case 'mupdf':
            return 'MuPDF';
        case 'musicplayer':
            return 'Music Player';
        case 'navit':
            return 'Navit';
        case 'notecipher':
            return 'NoteCipher';
        case 'oifilemanager':
            return 'OI File Manager';
        case 'oiflashlight':
            return 'OI Flashlight';
        case 'oinotepad':
            return 'OI Notepad';
        case 'openmanager':
            return 'Open Manager';
        case 'osmand':
            return 'OsmAnd';
        case 'owncloud':
            return 'ownCloud';
        case 'owncloudnewsreader':
            return 'ownCloud News Reader';
        case 'prey':
            return 'Prey';
        case 'redphone':
            return 'RedPhone';
        case 'redreader':
            return 'RedReader';
        case 'sipdroid':
            return 'Sipdroid';
        case 'surespot':
            return 'surespot';
        case 'telegram':
            return 'Telegram';
        case 'tinfoil':
            return 'Tinfoil';
        case 'tint':
            return 'Tint';
        case 'tomdroid':
            return 'Tomdroid';
        case 'ttrssreader':
            return 'TTRSS-Reader';
        case 'twidere':
            return 'Twidere';
        case 'vanillamusic':
            return 'Vanilla Music';
        case 'vlc':
            return 'VLC';
        case 'vudroid':
            return 'VuDroid';
        case 'xabber':
            return 'Xabber';
        case 'zirco':
            return 'Zirco Browser';
        case 'barcodescanner':
            return 'Barcode Scanner';
        default:
            return appID;
    }
}


// Variables
var qrFade = '#qrFade';             // The big, faded background behind the white one.
var qrBackground = '#qrBackground'; // The white background behind the QR code/text.
var qrText = '#qrText';             // The text with the app name and description.
var qrCode = '#qrCode';             // The actual QR code.


// Displays a faded background along with a popup of a QR code when the
// user clicks an image of the 'qr' class.
$(document).ready(function(){
    $('.qr').click(function(){
 
        // This sets some variables, like...
        qrName = $(this).attr('id'); // ...which QR link was clicked.
        appName = appNames(qrName);  // ...how the app's name is stylized.

        // This weirdy indented mess is the block of HTML added to index.html
        // when clicking the QR link. The backslashes(\) are JS, not HTML, and
        // they allow us to escape newlines and thus make the indentions.
        // I like it, Vim's syntax hilighting does not.
        $('body').prepend('<div id="qrFade">\
                           </div>\
                           <div class="emph-Block" id="qrBackground">\
                               <div id="qrText">\
                                   <h2>'+appName+'</h2>\
                                   <hr>\
                                   <h4>Scan using a barcode scanner.</h4>\
                               </div>\
                           <img src="'+qrName+'.gif" alt="'+qrName+' QR" id="qrCode" />\
                           </div>');

        // This sets the margin and centers the popup.
        marginTop = $(qrBackground).height()/2;
        marginRight = $(qrBackground).width()/2;
        $(qrBackground).css({'margin-top': -marginTop, 'margin-right': -marginRight});

        //This fades the whole thing in, making it look quite nice.
        $(qrFade).fadeIn('slow');
        $(qrBackground).fadeIn('slow');
        $(qrText).fadeIn('slow');
        $(qrCode).fadeIn('slow');
    });
});


// Removes the QR popup and fade when clicking outside the white, i.e., on qrFade.
$(document).on('click', '#qrFade', function(){
    $(qrFade).remove();
    $(qrBackground).remove();
    $(qrText).remove();
    $(qrCode).remove();
});


// Maybe add resize reposition for .$(qrCode).
