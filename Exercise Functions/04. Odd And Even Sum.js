function oddAndEvenSum(singleNum){
    let oddSum = 0;
    let evenSum = 0;
for (let num of String(singleNum)) {
    let toNum=Number(num)
    if(toNum%2===0){
        evenSum+=toNum
    }else{
        oddSum+=toNum
    }
}
console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435)