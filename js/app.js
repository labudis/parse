$(function () {

    checkHashLogin();

    $('.btn-asana').click(function () {
        asanaLogin();
    });
})

var appID = "14435930554813";

function asanaLogin() {
    var path = 'https://app.asana.com/-/oauth_authorize';
    var queryParams = [	'client_id=' + appID,
					    'redirect_uri=' + window.location,
					    'response_type=token'];
    var query = queryParams.join('&');
    var url = path + "?" + query;
    window.location.replace(url);
}

function checkHashLogin() {
	if (window.location.hash.length > 3) {
	    var hash = window.location.hash.substring(1);
	    if(hash.split('=')[0] == 'access_token')
	    {
	        var path = "https://app.asana.com/-/oauth_authorize";
	        var queryParams = [hash, 'callback=displayUser'];
	        var query = queryParams.join('&');
	        var url = path + "?" + query;

	        //use jsonp to call the graph
	        var script = document.createElement('script');
	        script.src = url;
	        document.body.appendChild(script);
	    }

	}
} 



function displayUser(user) {
    setTimeout(function () { }, 1000);
    if (user.id != null && user.id != "undefined") {
       //Do Stuff
    }
    else {
        alert('user error');
    }
}