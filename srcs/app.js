var $logginBox = $("#loggin-name")
var $logginContent = $("#loggin-actions");
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


 function noCookie(form) {
    var passwordHash1 = "a91567b2122d783392991c124636dd6723e5541620c02c2000d800539e8a34fe2677bd77e62e382a468af13a2195f7ce26a17d53956acabd00e575fc4ff17855";
    var passwordHash2 = "7ebce0f4c4d17c50879b81c5e5a500063a7e84f2eae6ec13538b9e1d686860e325e5229c97675001d5ed7207bb2962c4aea6277887071f9afc5fce27b3c2d491";
    var passwordHash3 = "8a49091eafb389c756b7f823ea9bff0dd28c94ce7e9e9355ea80062e720a5fba380d6bf96b45e24ed943b55403890aaa31e1793454c4f4b8da39811c4e1d1fef";
 	var passwordInput = form.passwordBox.value;
    var pageCode = form.pageCode.value;
	var hash = CryptoJS.SHA512(passwordInput);
    console.log("First check");
    setCookie("code",pageCode,"1");
    if (passwordHash1 == hash) {
        setCookie("password","check","10");
        setCookie("username","jack","10");
        location.reload(true);
    } else if (passwordHash2 == hash) {
        setCookie("password","check","4");
        setCookie("username","heshiki","4");
        location.reload(true);
	} else if (passwordHash3 == hash) {
        setCookie("password","check","2");
        setCookie("username","katelyn","2");
        location.reload(true);
     } else if (hash == "") {

     } else {
       document.getElementById("incorrect").innerHTML="Incorrect";
       document.getElementById("incorrect").style.color='red';
	}
}
 
function eraseCookie() {
    document.cookie = "password" + '=; Max-Age=0; path=/';
    location.reload(true);
}

function goToForgot() {
    window.location.href = "forgotPassword.html";
}
$logginContent.hide();
$(document).ready(() => {
    $logginBox.on('click', () => {
    $logginContent.slideToggle(600);
    })
	var cookiePassword=getCookie("password");
    var cookieUsername=getCookie("username");
    var cookieCode+getCookie("code");
    window.location.href = cookieCode+".html";
})

