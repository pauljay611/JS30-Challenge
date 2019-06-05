# Lesson26

## mouseover 後移動 background

1. 將 mouseover 後加入 class
2. 計算 background 偏移多少
3. setTimeout 讓內容計算完再出現
   setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
