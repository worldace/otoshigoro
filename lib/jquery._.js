!function($){


$.deparam = function(query){
    if(!query){ return false; }

    var result = {};
    var parameters = query.split('&');

    for(var i = 0; i < parameters.length; i++){
        var element = parameters[i].split('=');
        var name    = decodeURIComponent(element[0]);
        var value   = decodeURIComponent(element[1]);

        result[name] = value;
    }
    return result;
};



$.download = function(url, filename, mode){
    switch(mode){
        case "a":
            $("<a></a>", {href:url, download:filename}).appendTo("body").get(0).click();
            break;

        case "blank":
            $("<a></a>", {href:url, download:filename, target:"_blank"}).appendTo("body").get(0).click();
            break;

        default:
            $("<iframe></iframe>", {src:url, width:1, height:1}).appendTo("body");
    }
};



$.browserName = null;
var user_agent = window.navigator.userAgent.toLowerCase();
if (user_agent.indexOf('msie') != -1 || user_agent.indexOf('trident') != -1){ $.browserName = "ie"; }
if (user_agent.indexOf('firefox') != -1){ $.browserName = "firefox"; }
if (user_agent.indexOf('chrome') != -1){ $.browserName = "chrome"; }


}(jQuery);
