function sumDigits(num){
let sum=0;
let numToString=num+""
for(let i=0;i<numToString.length;i++){
    let convertNum=Number(numToString[i])
    sum+=convertNum
}
console.log(sum);
}
sumDigits(245678)