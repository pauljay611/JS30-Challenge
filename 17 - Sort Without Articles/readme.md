# Lesson17

## 排序
1. sort 排序
bands.sort((a, b) => 
a 為後一個 b 為前一個
當 a > b 回傳 1 代表不用動
反之則回傳 -1 交換

2. 判斷是否有 The An A 若有則回傳刪去後的最前面字母
3. 開始排序
4. 排序完成後用 map 在 render 至畫面上

## 官方
使用正規表達判斷
return bandName.replace(/^(a |the |an )/i, '').trim();