// videos url's
var channels = {
    1: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    2: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    3: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    4: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    5: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    6: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    7: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    8: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
};
// initializing count for on and off btn
var count = 0;
// Tv class
var Tv = /** @class */ (function () {
    function Tv() {
        var _this = this;
        // If we on the tv it'll be in channel 2 as default
        this.channel_No = 2;
        this.volume = 2;
        // for odd number of clicks tv will be on 
        var on_off = document.getElementById("on");
        on_off.addEventListener("click", function () {
            count += 1;
            if (count % 2 !== 0) {
                var video = document.getElementById("video");
                _this.setChannel(_this.channel_No);
                video.style.visibility = "visible";
                // for even number of clicks tv will be off
            }
            else {
                var video = document.getElementById("video");
                video.style.visibility = "hidden";
                video.pause();
            }
        });
        // if left btn is pressed pevius channel will be shown
        var left = document.getElementById("left");
        left.onclick = this.previousChannel();
        // if right btn is pressed next channel will be shown
        var right = document.getElementById("right");
        right.onclick = this.nextChannel();
        // if plus btn is pressed volume will raise
        var plus = document.getElementById("plus");
        plus.onclick = this.increaseVolume();
        // if minus btn is pressed volume will decrease
        var minus = document.getElementById("minus");
        minus.onclick = this.decreaseVolume();
        // if play is clicked video is played using inbuilt play()
        var play = document.getElementById("play");
        play.addEventListener("click", function () {
            var video = document.getElementById("video");
            video.play();
        });
        // if pause is clicked video is played using inbulit pause()
        var pause = document.getElementById("pause");
        pause.addEventListener("click", function () {
            var video = document.getElementById("video");
            video.pause();
        });
    }
    // This method will call setchannel() for getting next video
    Tv.prototype.nextChannel = function () {
        var _this = this;
        return function () {
            _this.setChannel(_this.channel_No + 1);
        };
    };
    // this method will also call setchannel() for getting previous video
    Tv.prototype.previousChannel = function () {
        var _this = this;
        return function () {
            _this.setChannel(_this.channel_No - 1);
        };
    };
    // It increases the volume by calling setvolume()
    Tv.prototype.increaseVolume = function () {
        var _this = this;
        return function () {
            _this.setVolume(_this.volume + 1);
            console.log("Hi");
        };
    };
    // It decreases the volume by calling setvolume()
    Tv.prototype.decreaseVolume = function () {
        var _this = this;
        return function () {
            _this.setVolume(_this.volume - 1);
        };
    };
    // for each video it creates a video tag and gives its corresponding source 
    Tv.prototype.setChannel = function (channel_Number) {
        var cont = document.getElementById("video_container");
        cont.innerHTML = "";
        this.channel_No = channel_Number;
        // for each video video tag is created
        var videoTag = document.createElement("video");
        videoTag.setAttribute("id", "video");
        videoTag.setAttribute("controls", "true");
        videoTag.style.width = "500px";
        // videoTag.style.height = "700px";
        videoTag.style.margin = "50px";
        videoTag.style.marginRight = "50px";
        // gives them specific src from object
        var VideoSource = document.createElement("source");
        VideoSource.setAttribute("src", channels[this.channel_No]);
        VideoSource.setAttribute("type", "video/mp4");
        videoTag.append(VideoSource);
        cont.append(videoTag);
    };
    // it sets volume of video using inbulit volume()
    Tv.prototype.setVolume = function (vol) {
        this.volume = vol;
        var video_ele = document.getElementById("video");
        video_ele.volume = this.volume / 10;
        //     <div class="progress">
        //     <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
        //   </div>  
        var Vol_cont = document.getElementById("vol_container");
        Vol_cont.innerHTML = "";
        // Progress.innerHTML="";
        var Progress = document.createElement("div");
        Progress.setAttribute("class", "progress");
        var progressbar = document.createElement("div");
        progressbar.setAttribute("class", "progress-bar");
        progressbar.setAttribute("role", "progress-bar");
        progressbar.setAttribute("aria-valuenow", "this.volume");
        progressbar.setAttribute("aria-valuemin", "100");
        progressbar.setAttribute("style", "width:" + this.volume + "%");
        Progress.append(progressbar);
        Vol_cont.append(Progress);
    };
    return Tv;
}());
var a = new Tv();
