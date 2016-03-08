!function(){


var itag1 = {'5':'flv','18':'mp4','22':'mp4','34':'flv','35':'flv','37':'mp4','38':'mp4','43':'webm','44':'webm','45':'webm','46':'webm','135':'mp4','137':'mp4','138':'mp4','139':'m4a','140':'m4a','141':'m4a','264':'mp4','298':'mp4','299':'mp4'};
var itag2 = {'5':'FLV 240p','18':'MP4 360p','22':'MP4 720p','34':'FLV 360p','35':'FLV 480p','37':'MP4 1080p','38':'MP4 2160p','43':'WebM 360p','44':'WebM 480p','45':'WebM 720p','46':'WebM 1080p','135':'MP4 480p - no audio','137':'MP4 1080p - no audio','138':'MP4 2160p - no audio','139':'M4A 48kbps - audio','140':'M4A 128kbps - audio','141':'M4A 256kbps - audio','264':'MP4 1440p - no audio','298':'MP4 720p60 - no audio','299':'MP4 1080p60 - no audio'};
//参考: https://github.com/gantt/downloadyoutube

var a = ytplayer.config.args.url_encoded_fmt_stream_map;
var b = a.replace(/\u0026/g, '&').split(',');
var c = [];

for(var i = 0; i < b.length; i++){
    b[i] = オトシゴロ.クエリ分解(b[i]); //b[i] = {s,url,itag,type,quality,fallback_host}
    b[i].itag1 = itag1[b[i].itag];
    b[i].itag2 = itag2[b[i].itag];

    if(b[i].itag1 == "mp4" || b[i].itag1 == "flv"){ c.push(b[i]); }
}

if(c.length == 0){ return; }
c.sort(function(x,y){ return (x.itag2 > y.itag2) ? -1 : 1; });


//IEの場合、タイトルをSJISに変換する
var t  = ytplayer.config.args.title;
var ua = window.navigator.userAgent.toLowerCase();
if(ua.indexOf('msie') != -1 || ua.indexOf('trident') != -1) {
    t = EscapeSJIS(t);
}

var 動画URL = c[0].url + "&title=" + t;

オトシゴロ.ダウンロード(動画URL);


}();
