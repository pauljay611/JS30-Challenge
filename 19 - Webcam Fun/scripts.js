const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');


// 獲得 camera 區域
function getVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(localMediaStream => {
            console.log(localMediaStream)
            video.srcObject = MediaStream;
            video.play();
        }).catch(err => {
            console.error(`OH NO!!!`, err);
        });
}

function paintCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;
    // 一直讀取 攝像頭畫面
    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
    }, 16);
}


// 拍照
function takePhoto() {
    // 讓短時間多次拍照都有聲音
    snap.currentTime = 0;
    snap.play();

    // take the data out of the canvas
    // 會變成 data:image/jpeg;base64xxxxxx 的 url
    const data = canvas.toDataURL('image/jpeg');
    console.log(data)
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'handsome');
    link.innerHTML = `<img src="${data}" alt="Handsome Man" />`;
    // 在結點之前插入新結點
    strip.insertBefore(link, strip.firstChild);
}

getVideo()

video.addEventListener('canplay', paintCanvas);