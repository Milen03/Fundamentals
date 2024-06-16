function sorting(arr){
let sortinArr=arr.sort((a,b)=>b-a)
let resultArr=[]

while(sortinArr.length>0){
    const fistElement=sortinArr.shift()
    resultArr.push(fistElement);
    if(sortinArr.length>0){
    const lastElement=sortinArr.pop()
    resultArr.push(lastElement)
}
}



console.log(resultArr.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])