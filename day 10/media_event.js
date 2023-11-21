var video=document.querySelector("video");

video.addEventListener("canplay",()=>console.log("the video is ready to play "));

video.addEventListener("play",()=>console.log("congratulation you find the play button and you played the video  "));

video.addEventListener("playing", () =>console.log("now the video is playing which is a continuous tense sentence "));

video.addEventListener("pause",()=>console.log("why you paused the video you got a pee right hmmmm"));

video.addEventListener("ended",()=>console.log("not so thank you to watch the full video "));

video.addEventListener("volumechange",()=>console.log("you adjust the volume i see"));

