## Lesson03
- .addEventListener('input',()=>{})

當 input 改變時的監聽

- css var 原生變數用法

```
    :root {
      --base: #ffc600;
      --spacing: 10px;
      --blur: 10px;
    }

    img {
      padding: var(--spacing);
      background: var(--base);
      filter: blur(var(--blur));
    }
```
- 重複事件拉出一個 function 
for loop 監聽 -> input -> 改變 :root數值