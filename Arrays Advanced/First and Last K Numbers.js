function firstAndLastKNumbers(arr){
    const k=arr[0]
const copy=arr.slice(1)
const fistResult=copy.slice(0,k)
const secontResult=copy.slice(-k)
console.log(fistResult.join(' '));
console.log(secontResult.join(' '));

}
firstAndLastKNumbers([2,7, 8, 9])