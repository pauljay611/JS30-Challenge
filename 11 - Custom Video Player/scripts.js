const playVideo = document.querySelector('.viewer')
const playButton = document.querySelector('.toggle')
const volume = document.querySelector('input[name="volume"]')
const playbackRate = document.querySelector('input[name="playbackRate"]')
const back = document.querySelector('button[data-skip="-10"]')
const forward = document.querySelector('button[data-skip="25"]')
const bar = document.querySelector('.progress__filled')
const allBar = document.querySelector('.progress')
let toggle = false

playButton.addEventListener('click', () => {
    if (playVideo.paused) {
        playVideo.play()
        playButton.textContent = '❚ ❚'
    } else {
        playVideo.pause()
        playButton.textContent = '►'
    }
})

volume.addEventListener('input', function () {
    playVideo.volume = this.value
})

playbackRate.addEventListener('input', function () {
    playVideo.playbackRate = this.value
})

forward.addEventListener('click', function () {
    let time = playVideo.currentTime
    playVideo.currentTime = Number(time) + Number(this.dataset.skip)
})

back.addEventListener('click', function () {
    let time = playVideo.currentTime
    if (Number(time) + Number(this.dataset.skip) >= 0) {
        playVideo.currentTime = Number(time) + Number(this.dataset.skip)
    } else {
        playVideo.currentTime = 0
    }
})

playVideo.addEventListener('timeupdate', () => {

    bar.style['flex-basis'] = playVideo.currentTime / playVideo.duration * 100 + '%'
})

allBar.addEventListener('mousedown', (e) => {
    toggle = true
    let width = allBar.clientWidth
    let pos = e.offsetX
    playVideo.currentTime = pos
    bar.style['flex-basis'] = pos / width * 100 + '%'
})

allBar.addEventListener('mousemove', (e) => {
    if (toggle == true) {
        let width = allBar.clientWidth
        let pos = e.offsetX
        playVideo.currentTime = pos
        bar.style['flex-basis'] = pos / width * 100 + '%'
    }
})

allBar.addEventListener('mouseup', (e) => {
    toggle = false
    // let width = allBar.clientWidth
    // let pos = e.offsetX
    // playVideo.currentTime = pos
    // bar.style['flex-basis'] = pos / width * 100 + '%'
})