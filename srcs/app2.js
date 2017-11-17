let $main = $('#main');
let $uhOh = $('#uh-oh');

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

var cookiePassword=getCookie("password");
var cookieUsername=getCookie("username");

uhOh.hide();

if ((cookiePassword == "check") && (cookieUsername == "jack")) {
  document.getElementById("loggin-name").innerHTML="Welcome Jack, &#9662;";
} else if ((cookiePassword == "check") && (cookieUsername == "heshiki")) {
  document.getElementById("loggin-name").innerHTML="Welcome Ms.Heshiki, &#9662;";
} else if ((cookiePassword == "check") && (cookieUsername == "katelyn")) {
 document.getElementById("loggin-name").innerHTML="Welcome Katelyn, &#9662;";
} else {
  main.hide();
  uhOh.show();
}