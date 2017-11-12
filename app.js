var passwordHash = "11566c9949ebfc75b33c06023e969509c8dedbeb4261bc087af3b9edd6039ca5b53625fb7ae5ff6362218dfadc59e5ecc72624366275113bfb56a06a6d1e76cf";
var passwordPassed = 0;
var $password = $(".password");
var $water = $(".water");
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
	if (passwordHash == hash) {
		setCookie("password","check","10");
        $password.fadeOut();
        $water.fadeIn();
	} else {
        document.getElementById("incorrect").innerHTML = "Incorrect";
        document.getElementById("incorrect").style.color = 'red';
	}
 }
 

$(document).ready(() => {
    $water.hide();
	var cookie=getCookie("password");
	   if (cookie == "check") {
        $password.fadeOut();
        $water.fadeIn();
	   } else if (passwordPassed = 1) {
        $password.fadeOut();
        $water.fadeIn();
        }
})

