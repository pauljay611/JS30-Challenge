# Lesson16

## mousemove + textshadow

- 先來看看各種座標關係
e.clientX e.clientY

相對於瀏覽器窗口可視區域
不包括工具欄和滾動條

event.pageX、event.pageY

類似於event.clientX、event.clientY，但它們使用的是文檔坐標而非窗口坐標
別用的意思

event.offsetX、event.offsetY

滑鼠相對於事件源元素（srcElement）的X,Y坐標

event.screenX、event.screenY

滑鼠相對於用戶顯示器螢幕左上角的X,Y坐標

offsetWidth 
元素除去 margin 佔用的寬度

offsetLeft, Top
表示Element左邊距離與offsetParent左邊界距離

- 重置偏移比例, 如果不在 hero 上的就要加上父層的 offset
      if (hero !== e.target) {
        x = x + e.target.offsetLeft
        y = y + e.target.offsetTop
      }

- 先計算元素中心位置 0 , x / width 為滑鼠偏移比例再乘以陰影要偏移的基數 , 減掉偏移基數除以二就是中心點
const xWalk = Math.round((x / width * walk) - (walk / 2));

- 陰影與偏移
${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),