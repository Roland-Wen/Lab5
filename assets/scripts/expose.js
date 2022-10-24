// expose.js

window.addEventListener('DOMContentLoaded', init);
var jsConfetti;
var hornType, playButton, volumeSider;
var imgFrame, audioFrame, volumeIcon;

function init() {
    hornType = document.getElementById("horn-select");
    hornType.addEventListener('change', typeChange);

    playButton = document.querySelector("#expose button");
    playButton.addEventListener('click', play);

    volumeSlider = document.getElementById("volume");
    volumeSlider.addEventListener('change', volumeChange);

    imgFrame = document.querySelector("#expose img");
    audioFrame = document.querySelector("#expose audio");
    volumeIcon = document.querySelector("#volume-controls img");
    jsConfetti = new JSConfetti();
}

function typeChange(e) {
    imgFrame.src = "assets/images/" + e.target.value + ".svg";
    audioFrame.src = "assets/audio/" + e.target.value + ".mp3";
}

function play(e) {
    audioFrame.play();
    if (hornType.value == "party-horn") jsConfetti.addConfetti();
}

function volumeChange(e) {
    if (e.target.value == 0) {
        volumeIcon.setAttribute("src", "assets/icons/volume-level-0.svg");
        volumeIcon.setAttribute("alt", "Volume level 0");
    } else if (e.target.value < 33) {
        volumeIcon.setAttribute("src", "assets/icons/volume-level-1.svg");
        volumeIcon.setAttribute("alt", "Volume level 1");
    } else if (e.target.value < 67) {
        volumeIcon.setAttribute("src", "assets/icons/volume-level-2.svg");
        volumeIcon.setAttribute("alt", "Volume level 2");
    } else{
        volumeIcon.setAttribute("src", "assets/icons/volume-level-3.svg");
        volumeIcon.setAttribute("alt", "Volume level 3");
    }

    audioFrame.volume = e.target.value / 100;
}