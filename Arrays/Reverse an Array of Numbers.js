function solven(n,inputArr){
    let arr=[];
    for(let i=0;i<n;i++){
        arr.push(inputArr[i]) 
    }
    let newArr=[]
    for(let i=arr.length-1;i>=0;i--){
        newArr[newArr.length]=arr[i]
        
    }
    console.log(newArr.join(" "));
}
solven(3, [10, 20, 30, 40, 50])