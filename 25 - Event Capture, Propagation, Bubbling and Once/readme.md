# Lesson25

## 事件冒泡

1. 裡面事件會冒泡至外面元素

2. addEventListener 第三個參數可以帶觸發一次或是從元素外面冒泡至裡面
   {
   capture: false,
   once: true
   }

3. 停止冒泡
   // e.stopPropagation(); // stop bubbling!
