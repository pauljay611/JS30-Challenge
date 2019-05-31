# Lesson19

## 分成兩部份 拍照與圖像
拍照使用
    navigator.mediaDevices.getUserMedia

圖像用 canvas

## 拍照部分

1. 先獲得拍照區域
navigator.mediaDevices.getUserMedia 回傳 promise

srcObject
A MediaStream, MediaSource, Blob, or File object

2. 拍完照繪製 canvas
先取得攝像頭寬度與高度並將此高度設為 canvas 寬高, 繪製 video 至 canvas
    const width = video.videoWidth;
    const height = video.videoHeight;
    ctx.drawImage(video, 0, 0, width, height);

3. takePhoto
canvas 轉為 base64 編碼
canvas.toDataURL('image/jpeg');
放到圖片的 src 當中

4. 監聽canplay事件
當攝像頭開始時可以偵測

基本是這樣

然後加入進階的顏色濾鏡

