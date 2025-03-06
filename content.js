console.log("AI Sign Language Interpreter Script Loaded!");

let youtubeEmbed = document.querySelector("iframe[src*='youtube.com/embed']");
if (youtubeEmbed) {
    let overlayVideo = document.createElement("video");
    overlayVideo.src = chrome.runtime.getURL("videos/avatar.mp4");
    overlayVideo.autoplay = true;
    overlayVideo.loop = true;
    overlayVideo.muted = true;
    overlayVideo.style.position = "absolute";
    overlayVideo.style.bottom = "10px";
    overlayVideo.style.right = "170px";
    overlayVideo.style.width = "150px";
    overlayVideo.style.height = "150px";
    overlayVideo.style.borderRadius = "8px";

    youtubeEmbed.parentElement.appendChild(overlayVideo);
}
