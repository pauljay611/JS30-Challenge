# Lesson29

## 計時器倒數

1. form submit 後必須開始倒數，所以先把數字搞好
   time = Number(input.value) \* 60;

2. time 為倒數秒數，之後顯示 countdown.textContent 與 endTime.textContent
   countdown.textContent 為總秒數除以分與秒 並計算是否進位或補 0
   endTime.textContent 取得時與分後加上 time 並計算是否進位或補 0

3. 開始跑 setInterval
   setInterval 設定 setCounter

4. setCounter 每次會更新倒數
   每次 time-- 中斷後 clearInterval
   重新 render
   let minutes = Math.floor(time / 60);
   let sec = time % 60;
   if (sec < 10) sec = "0" + sec;
   countdown.textContent = `${minutes}:${sec}`;
