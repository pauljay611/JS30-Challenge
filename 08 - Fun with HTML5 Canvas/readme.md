# Lesson08

## RxJS

map + takeUntil + concatAll: 監聽畫布

1. map 把一按下去的事件做處理並把事件轉成 mousemove 事件
2. takeUntil 用來使用當 mouseUp 時
3. concatAll 用來攤平每個事件 = 直到最後監聽 mousemove 事件做完才會 complete

Canvas 起手式

```const canvas = document.getElementById('draw')
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
```

-   監聽三事件
    mousedown
    mousemove
    mouseup

-   取得 mousedown 座標
    `event.clientX`

-   當 mousemove 時判斷有無下筆
    `let drawing = true`

-   開始移動到滑鼠位置
    `ctx.beginPath(); ctx.moveTo(pos.x, pos.y);`

-   畫筆
    hsl 色相角度 用 360 度代表每個色碼

```
ctx.strokeStyle = `hsl(${randomColor}, 100%, 50%)`;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
```

-   移動畫線
    `let pos = getMousePos(e) ctx.lineTo(pos.x, pos.y); ctx.stroke()`

## 官方版本

使用每次畫時改變座標來改變畫筆
`hue++; if(direction) { ctx.lineWidth++; } else { ctx.lineWidth--; }`

紀錄 mouseDown 與 mouseMove 後的座標
`[lastX, lastY] = [e.offsetX, e.offsetY];`
