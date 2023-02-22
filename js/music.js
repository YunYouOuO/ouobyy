function addScript(url){
        document.write("<script language=javascript src="+url+"></script>");
}
addScript('https://www.youtube.com/iframe_api');











var ytlist = ["RlsX9mX1fus",
    "NaAFtpFWn2o",
    "75DVZcFXa0w",
    "-xQjhaqHWhg",
    "7LthTzz26Hc",
    "_MWFZCE79BU",
    "RQrkbhdQ3zc",
    "COu7_A0hRMQ"];
var num = 0;
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('YTvideo', {
        height: '0',
        width: '0',
        videoId: ytlist[num],
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(e) { 
    //player.playVideo();
    $("#video-title").text(player.videoTitle);
}
function onPlayerStateChange(e) {
    console.log(e.data)
    //顯示影片標題
    $("#video-title").text(player.videoTitle);
    //
    if(player.getPlayerState() === 0){
        num++;
        player.loadVideoById(ytlist[num]);
    }
    //調整影片音量
    $("#video-volume").val(player.getVolume());
    $("#video-volume").on('input',function(){
        player.setVolume($("#video-volume").val());
    })

}

$(function(){
    //播放 and 暫停
    $("#play").click(function(){
        if(player.getPlayerState() === 1){
            $("#play").attr("class","bx bx-play")
            player.pauseVideo();
        }
        else{
            $("#play").attr("class","bx bx-pause")
            player.playVideo();
        }
        
    })
    //下一首
    $("#next").click(function(){
        if(num < ytlist.length - 1){
            num++;
            player.loadVideoById(ytlist[num]);
        }
        else if(num === ytlist.length - 1){
            num = 0;
            player.loadVideoById(ytlist[num]);
        }
    })
/*
    $("#video-volume-icon").hover(function(){
        $("#video-volume").css("display","initial");
    },function(){
        $("#video-volume").css("display","none");
    })
*/    
    
})




    