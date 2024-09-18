let buttonPlay = document.getElementById('playButton');
let buttonPause = document.getElementById('pauseButton');
const audio = document.getElementById('audioElement');
const fotoMusicSpin = document.getElementById('foto-music-spin');
function togglePlay(isPlay){
    switch (isPlay) {
        case true:
            buttonPlay.classList.add('d-none');
            buttonPause.classList.remove('d-none');
            audio.play();
            fotoMusicSpin.classList.add('spin');
            break;

        case false:
            buttonPlay.classList.remove('d-none');
            buttonPause.classList.add('d-none');
            audio.pause();
            fotoMusicSpin.classList.remove('spin');
            break;
    
        default:
            buttonPlay.classList.add('d-none');
            buttonPause.classList.remove('d-none');
            fotoMusicSpin.classList.remove('spin');
            break;
    }
}