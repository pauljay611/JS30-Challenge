# Lesson09
debugger 的101種方式
首先可以用中斷點來看當前 dom or variable 數值
1. 在元素上按下右鍵 break on
![](https://i.imgur.com/yG8eAKo.png)

2. 基本 console.log
- %s 帶字串
'Hello I am a %s string!', '💩'

- %c
'%c','font-size:50px; background:red; text-shadow: 10px 10px 0 blue'

- warn
console.warn('OH NOOO');

- error
console.error('Shit!');

- info
console.info('Crocodiles eat 3-4 people per year');

- assert 斷言若為 false 則噴錯
const p = document.querySelector('p');

console.assert(p.classList.contains('ouch'), 'That is wrong!');

- clear
console.clear();

- dir 列出所有 dom 屬性
console.dir(p);

- groupCollapsed + groupEnd
將 console.log 包成物件

- count 
自動計算出現數量

- time + timeEnd
計算兩個包在一起 time + timeEnd 時間
console.time('fetching data');
console.timeEnd('fetching data');