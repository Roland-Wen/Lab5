// explore.js

window.addEventListener('DOMContentLoaded', init);
var synth;
var voices;
var voiceSelect, talkButton, textArea;

function init() {
    voiceSelect = document.getElementById("voice-select");
    talkButton = document.querySelector("#explore button");
    textArea = document.getElementById("text-to-speak");
    synth = window.speechSynthesis;

    talkButton.addEventListener('click', speak);

    setTimeout(() => {
        populateVoiceList()
    }, 50);
}

function populateVoiceList() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
        const option = document.createElement('option');
        option.textContent = `${voices[i].name} (${voices[i].lang})`;
        option.setAttribute('data-lang', voices[i].lang);
        option.setAttribute('data-name', voices[i].name);
        voiceSelect.appendChild(option);
    }
}

function speak(e) {
    const text = new SpeechSynthesisUtterance(textArea.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length; i++) {
        if (voices[i].name === selectedOption) {
            text.voice = voices[i];
        }
    }
    synth.speak(text);
}