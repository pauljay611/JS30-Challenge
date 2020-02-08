## Lesson01

### 2020/2/8 UPDATE WITH RXJS

-   Observable.from

    > 將 keys 變成 observable

-   map

    > Iterate 各 observable

-   fromEvent

    > 加入 event 並 subscribe reaction

-   querySelector
    通用選取器

```
document.querySelector(`audio[data-key="${e.keyCode}"]`)
```

-   addEventListener
    **keydown keypress 有差喔！**
    https://medium.com/@yitailin/%E6%AF%94%E8%BC%83-keydown-keypress-keyup-%E7%9A%84%E5%B7%AE%E7%95%B0-4e873ba17e81

```
window.addEventListener('keydown', playSound);
```

-   propertyName, target
    Listener 傳遞 event 後的參數
    屬性名稱與節點目標

```
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}
```

-   classList
    讓你直接 addclass or remove
