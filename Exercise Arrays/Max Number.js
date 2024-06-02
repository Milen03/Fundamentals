function maxNumber(arr){
let newArr=[]
for(let i =0;i<arr.length;i++){
    let currNum=arr[i]
    let isTop=true

    for(let j=i+1;j<arr.length;j++){
        let numToRiagt=arr[j]

        if(currNum<=numToRiagt){
            isTop=false
            break
        }
    }
    if(isTop){
        newArr.push(currNum)
    }
}
console.log(newArr.join(' '));
}
maxNumber([1, 4, 3, 2])