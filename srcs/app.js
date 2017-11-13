var passwordHash1 = "a91567b2122d783392991c124636dd6723e5541620c02c2000d800539e8a34fe2677bd77e62e382a468af13a2195f7ce26a17d53956acabd00e575fc4ff17855";
var passwordHash2 = "7ebce0f4c4d17c50879b81c5e5a500063a7e84f2eae6ec13538b9e1d686860e325e5229c97675001d5ed7207bb2962c4aea6277887071f9afc5fce27b3c2d491";
var passwordHash3 = "8a49091eafb389c756b7f823ea9bff0dd28c94ce7e9e9355ea80062e720a5fba380d6bf96b45e24ed943b55403890aaa31e1793454c4f4b8da39811c4e1d1fef";
var $password = $(".password");
var $water = $(".water");
var $mail = $("#mail");
var $logginBox = $("#loggin-name")
var $logginContent = $("#loggin-actions");
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

 function noCookie(form) {
 	var passwordTest = form.passwordBox.value;
	var hash = CryptoJS.SHA512(passwordTest);
	if ((passwordHash1||passwordHash2||passwordHash3) == hash) {
        console.log("First check");
       if (passwordHash1 == hash) {
        setCookie("password","check","10");
        setCookie("username","jack","10");
        $password.fadeOut();
        $mail.fadeOut(100);
        $water.fadeIn();
        document.getElementById("loggin-name").innerHTML="Welcome Jack, &#9662;";
       } else if (passwordHash2 == hash) {
        setCookie("password","check","4");
        setCookie("username","heshiki","4");
        $password.fadeOut();
        $water.fadeIn();
        document.getElementById("loggin-name").innerHTML="Welcome Ms.Heshiki, &#9662;";
	   } else if (passwordHash3 == hash) {
        setCookie("password","check","2");
        setCookie("username","katelyn","2");
        $password.fadeOut();
        $water.fadeIn();
        document.getElementById("loggin-name").innerHTML="Welcome Katelyn, &#9662;";
       } else {
       document.getElementById("incorrect").innerHTML="Incorrect";
       document.getElementById("incorrect").style.color='red';
	}
 }
}
 
function eraseCookie(name) {
    document.cookie = "password" + '=; Max-Age=0; path=/';
    reload();
}
$(document).ready(() => {
    $water.hide();
    $logginContent.hide();
    $logginBox.on('click', () => {
        $logginContent.slideToggle(600);
    })
	var cookiePassword=getCookie("password");
    var cookieUsername=getCookie("username");
	   if ((cookiePassword == "check") && (cookieUsername == "jack")) {
        $password.fadeOut();
        $mail.fadeOut(100);
        $water.fadeIn();
        document.getElementById("loggin-name").innerHTML="Welcome Jack, &#9662;";
	   } else if ((cookiePassword == "check") && (cookieUsername == "heshiki")) {
        $password.fadeOut();
        $water.fadeIn();
        document.getElementById("loggin-name").innerHTML="Welcome Ms.Heshiki, &#9662;";
       } else if ((cookiePassword == "check") && (cookieUsername == "katelyn")) {
        $password.fadeOut();
        $water.fadeIn();
        document.getElementById("loggin-name").innerHTML="Welcome Katelyn, &#9662;";
       } else {

       }
})

