function evenAndOddSubtraction(arr){
let even =0;
let odd=0;
for(let i = 0; i < arr.length;i++){
    arr[i]=Number(arr[i])
}
for (const i of arr) {
    if(i%2===0){
        even+=i
    }else{
        odd+=i
    }
}
console.log(even-odd);
}
evenAndOddSubtraction([1,2,3,4,5,6])
//evenAndOddSubtraction([3,5,7,9])
