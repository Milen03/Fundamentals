function negativeOrPositiveNumber(arr)
{
let result=[]
for(let i=0;i<arr.length;i++){
    const element=arr[i]
    if(element>=0){
        result.push(element)
    }else{
        result.unshift(element)
    }
}
console.log(result.join("\n"));
}
negativeOrPositiveNumber(['7', '-2', '8', '9'])