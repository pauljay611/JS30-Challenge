# Lesson30

## 打地鼠

1. 使用 setInterval 出現地鼠
2. click e.isTrusted
   if (e.isTrusted !== true) return;
   沒按到就不加分
3. id = Math.floor(Math.random() \* 6);
   用 id 紀錄隨機出現地鼠位置並且顯示，當下一個顯示前一個就消失
4. setTimeout 倒數結算結果
   clearInterval(startInterval);
5. 加入地鼠隨機出現時間
   const time = randomTime(200, 1000);
