## Lesson02
- setInterval(fn, 100)
每幾秒執行

- transform: rotate(5deg);transform-origin: 100%;
旋轉角度搭配 transform-origin 定圓心使用

```
second.style.transform = `rotate(${nowDate.getSeconds() / 60 * 360 + 90}deg)`
```