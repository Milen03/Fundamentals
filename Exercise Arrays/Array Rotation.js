function arrayRotation(arr,numRout){
for(let curRotacion=1;curRotacion<=numRout;curRotacion++){
     let element=arr.shift();
arr.push(element)

}
console.log(arr.join(' '));   
}
arrayRotation([51, 47, 32, 61, 21], 2)