# Lesson14

## 傳址拷貝

    let players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // and we want to make a copy of it.
    let team = players;

    
    console.log(players, team);

    //  傳值只會改變變數值
    team = 3

    // 傳址改變原來陣列
    team[3] = 'aaaa'
    const team2 = players.push(1);

    console.log(players, team);

    // 真正創建新的址
    const team3 = [].concat(players);

    const team4 = [...players];
    team4[3] = 'heeee hawww';
    console.log(team4);

    // 物件
    let person2 = Object.assign({}, person)
    let person3 = { ...person }
    //deep clone
    const person5 = JSON.parse(JSON.stringify(person))