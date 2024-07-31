function solve(arr){
let patter=/([|#])(?<items>[A-Za-z\s]+)\1(?<exp_data>\d{2}\/\d{2}\/\d{2})\1(?<cals>\d+)\1/g
let str=arr.shift()

let tottalCalore=0
let items=[]
let match=patter.exec(str)

while(match){
let itemsName=match.groups.items
let expirationDate=match.groups.exp_data
let calories=Number(match.groups.cals)

tottalCalore+=calories
items.push(`Item: ${itemsName}, Best before: ${expirationDate}, Nutrition: ${calories}`)
    match=patter.exec(str)
}

let days=Math.floor(tottalCalore/2000)
console.log(`You have food to last you for: ${days} days!`);
console.log(items.join('\n'));
}
solve([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ]
    )