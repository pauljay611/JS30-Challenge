## Lesson05

### RxJS

-   from, map + fromevent
    做加入每個 node event

### 自己的版本

-   flex
    將五格變成橫的
    flex:1 讓整排填滿
    column 縱向往下排
    space-around 縱向撐開整排
    center 橫向置中

-   transform: translateY(400%);
    讓上下兩個字移動到格子外在滑動回來

-   transition
    每次增加這個 class 都會使用動畫效果

-   .classList.contains
    判斷是否為打開狀態

-   .style.transform
    加入兩個字滑入

### 官網版本

-   讓 panel 底下所有的 p 塞滿整個 block

```
.panel > * {
    margin: 0;
    width: 100%;
    transition: transform 0.5s;
    flex: 1 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.panel > *:first-child { transform: translateY(-100%); }
.panel.open-active > *:first-child { transform: translateY(0); }
.panel > *:last-child { transform: translateY(100%); }
.panel.open-active > *:last-child { transform: translateY(0); }
```

-   .addEventListener('transitionend', toggleActive));

監聽動畫動作並讓他加入 open-active class

-   .classList.toggle
    取代判斷是否有這個 class
