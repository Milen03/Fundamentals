function sumFirstAndLast(arr){
    const firstElement=Number(arr.shift())
    const lastElement =Number(arr.pop())
    let sum=firstElement+lastElement
    console.log(sum);

}
sumFirstAndLast(['20', '30', '40'])