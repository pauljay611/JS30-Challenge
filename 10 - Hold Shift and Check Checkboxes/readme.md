# Lesson10
- 先取得所有 input dom
    document.querySelectorAll('input')

- 使用 forEach 遍歷所有 input dom 加上 eventListener
    check.forEach((el, key) => {
      el.addEventListener('input', (e) => {

- 判斷兩個input
先選一個後, 判斷後面數字大小, 若比較大則放進 last 反之則 fist last 對調
    if (first === null) {
        first = key
    } else {
        if (key > first) {
        last = key
        } else {
        last = key
        [first, last] = [last, first]
        }
    }

- 按下 shift 時, 則將 first 跟 last 中間所有數字都打勾勾
    if (press === true) {
        let i = first
        while (i < last) {
        check[i].checked = true
        i++
        }
        console.log(check[i].checked)
    }

- keydown 讓 press 等於 true 反之 keyup 則 false

## 官方
每次按下 shift 則判斷所有 input 是否為 inBetween