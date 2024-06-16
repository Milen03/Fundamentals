function distinctArray(arr){
let newArry=[]

for (let num of arr) {
    if(!newArry.includes(num)){
        newArry.push(num)
    }
}
console.log(newArry.join(' '));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])