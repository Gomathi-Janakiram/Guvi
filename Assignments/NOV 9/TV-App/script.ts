
// videos url's
var channels = {
    1: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    2: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    3: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    4: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    5: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    6: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    7: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    8: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
}

// initializing count for on and off btn
var count = 0;
// Tv class
class Tv {
    channel_No: number;
    volume: number
    constructor() {
        // If we on the tv it'll be in channel 2 as default
        this.channel_No = 2;
        this.volume = 2;
        // for odd number of clicks tv will be on 
        var on_off = <HTMLButtonElement>document.getElementById("on")
        on_off.addEventListener("click", () => {
            count += 1;
            if (count % 2 !== 0) {
                let video = <HTMLVideoElement>document.getElementById("video")
                this.setChannel(this.channel_No)
                video.style.visibility = "visible";

                // for even number of clicks tv will be off
            } else {
                let video = <HTMLVideoElement>document.getElementById("video")
                video.style.visibility = "hidden";
                video.pause()

            }
        })
        // if left btn is pressed pevius channel will be shown
        var left = <HTMLButtonElement>document.getElementById("left")
        left.onclick = this.previousChannel();
        // if right btn is pressed next channel will be shown
        var right = <HTMLButtonElement>document.getElementById("right")
        right.onclick = this.nextChannel();
        // if plus btn is pressed volume will raise
        var plus = <HTMLButtonElement>document.getElementById("plus")
        plus.onclick = this.increaseVolume();
        // if minus btn is pressed volume will decrease
        var minus = <HTMLButtonElement>document.getElementById("minus")
        minus.onclick = this.decreaseVolume();
        // if play is clicked video is played using inbuilt play()
        var play = <HTMLButtonElement>document.getElementById("play")
        play.addEventListener("click", function () {
            let video = <HTMLVideoElement>document.getElementById("video")
            video.play()
        })
        // if pause is clicked video is played using inbulit pause()
        var pause = <HTMLButtonElement>document.getElementById("pause")
        pause.addEventListener("click", function () {
            let video = <HTMLVideoElement>document.getElementById("video")
            video.pause()
        })
    }
    // This method will call setchannel() for getting next video
    nextChannel(): () => void {
        return () => {
            this.setChannel(this.channel_No + 1)
        };
    }
    // this method will also call setchannel() for getting previous video
    previousChannel(): () => void {
        return () => {
            this.setChannel(this.channel_No - 1);
        };
    }
    // It increases the volume by calling setvolume()
    increaseVolume(): () => void {
        return () => {
            this.setVolume(this.volume + 1);
            console.log("Hi")
        };
    }
    // It decreases the volume by calling setvolume()
    decreaseVolume(): () => void {
        return () => {
            this.setVolume(this.volume - 1);
        };
    }
    // for each video it creates a video tag and gives its corresponding source 
    setChannel(channel_Number: number) {
        let cont = <HTMLDivElement>document.getElementById("video_container")
        cont.innerHTML = "";
        this.channel_No = channel_Number
        // for each video video tag is created
        let videoTag = document.createElement("video");
        videoTag.setAttribute("id", "video");
        videoTag.setAttribute("controls", "true");
        videoTag.style.width = "500px";
        videoTag.style.margin = "50px";
        videoTag.style.marginRight = "50px";
        // gives them specific src from object
        let VideoSource = document.createElement("source")
        VideoSource.setAttribute("src", channels[this.channel_No])
        VideoSource.setAttribute("type", "video/mp4")
        videoTag.append(VideoSource)
        cont.append(videoTag)

    }
    

    // it sets volume of video using inbulit volume()
    setVolume(vol: number) {
        this.volume = vol;
        var video_ele = <HTMLVideoElement>document.getElementById("video")
        video_ele.volume = this.volume / 10;
        let Vol_cont = <HTMLDivElement>document.getElementById("vol_container")
        Vol_cont.innerHTML = "";
        // progress bar
        var Progress = document.createElement("div")
        Progress.setAttribute("class", "progress")
        let progressbar = document.createElement("div")
        progressbar.setAttribute("class", "progress-bar")
        progressbar.setAttribute("role", "progress-bar")
        progressbar.setAttribute("aria-valuenow", "this.volume")
        progressbar.setAttribute("aria-valuemin", "100")
        progressbar.setAttribute("style","width:"+this.volume+"%");
        Progress.append(progressbar)
        Vol_cont.append(Progress)
    }
}


var a = new Tv()

