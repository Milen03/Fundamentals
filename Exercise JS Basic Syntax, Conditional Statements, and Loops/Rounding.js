function rounding(num,precision){
if(precision>15){
    precision=15
}
let fixNum=num.toFixed(precision)
let zeroDel =parseFloat(fixNum)
console.log(zeroDel);
}
rounding(10.5,3)