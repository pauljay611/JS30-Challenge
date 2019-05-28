# Lesson15

## 事件委派與 localstorage


流程
1. 將 item 儲存於 localstorage 並賦予他們編號
    {
        item0: "xxxx"
    }

2. 照著編號讀取所有 localstorage (.length) 並 push 進去 items
3. render 所有 items (記得將所有 input 與 label 用 id 跟 for 綁在一起!!)
4. 新增 submit 監聽，先清除預設事件，然後 .setItem 與 push 至 items
5. 重新 render
6. 點擊 input 打勾

- localstorage
.setItem
.getItem
.removeItem
.clear
.length

- addEventListener 機制
EventListener 建立事件物件，內容包含所有事件相關屬性

冒泡事件
如果元素內包含一個元素，點擊時會冒泡傳遞至最上面的元素
e.stopPropagation()
裡面的 this 是觸發事件目標 currentTarget 不是 target 所有會是最上層的元素

- 事件委託 Event Delegation
目的: 不用跑回圈讓所有 li 吃到事件監聽
作法: 監聽最外層 ul 判斷內部目標 e.target

e.target.matches 判斷目標 dom 是否 match 指定 dom 標籤