!function($){

var itag1 = {'5':'flv','18':'mp4','22':'mp4','34':'flv','35':'flv','37':'mp4','38':'mp4','43':'webm','44':'webm','45':'webm','46':'webm','135':'mp4','137':'mp4','138':'mp4','139':'m4a','140':'m4a','141':'m4a','264':'mp4','298':'mp4','299':'mp4'};
var itag2 = {'5':'FLV 240p','18':'MP4 360p','22':'MP4 720p','34':'FLV 360p','35':'FLV 480p','37':'MP4 1080p','38':'MP4 2160p','43':'WebM 360p','44':'WebM 480p','45':'WebM 720p','46':'WebM 1080p','135':'MP4 480p - no audio','137':'MP4 1080p - no audio','138':'MP4 2160p - no audio','139':'M4A 48kbps - audio','140':'M4A 128kbps - audio','141':'M4A 256kbps - audio','264':'MP4 1440p - no audio','298':'MP4 720p60 - no audio','299':'MP4 1080p60 - no audio'};

var t = ytplayer.config.args.title;
var a = ytplayer.config.args.url_encoded_fmt_stream_map;
var b = a.replace(/\u0026/g, '&').split(',');
var c = [];

for(var i = 0; i < b.length; i++){
    b[i] = SplitQueryString(b[i]); //b[i] = {url,itag,type,quality,fallback_host}
    b[i].itag1 = itag1[b[i].itag];
    b[i].itag2 = itag2[b[i].itag];

    if(b[i].itag1 == "mp4" || b[i].itag1 == "flv"){ c.push(b[i]); }
}

if(c.length == 0){ return false; }
c.sort(function(x,y){ return (x.itag2 > y.itag2) ? -1 : 1; });
//console.log(c);

var video_title = t;
var video_url   = c[0].url;
var video_type  = c[0].itag1;

var download = "";
var useragent = window.navigator.userAgent.toLowerCase();
if (useragent.indexOf('msie') != -1 || useragent.indexOf('trident') != -1) {
    video_url = video_url + "&title=" + EscapeSJIS(video_title);
    download = $("<iframe></iframe>", {src:video_url, width:1, height:1});
    download.appendTo("body");
}
else{
    video_url = video_url + "&title=" + video_title;
    download = $("<a></a>", {href:video_url, download:video_title+'.'+video_type});
    download.appendTo("body");
    download[0].click();
}


function SplitQueryString(query){
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
}


}($.noConflict(true));
