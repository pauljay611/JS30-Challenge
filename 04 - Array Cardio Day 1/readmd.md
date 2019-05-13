## Lesson04
- filter
查找後面接條件

- map 
對每個陣列進行操作並返回該操作的新值

- sort
排序 a - b 為升冪 b-a 為降冪

- reduce 
起始值為最後返回 fn 後面, 可讓第一個 accumulator 變成該 init
```
arr.reduce((accumulator,cur)=>accumulator+cur,init)
```

- reduce hash
讓起始值變成 hash map 在進行判斷加總就好了，記得返回的是 map 不是值 