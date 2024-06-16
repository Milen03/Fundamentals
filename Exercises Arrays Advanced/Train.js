function train(arr){
let wagons=arr.shift().split(' ').map(Number)
let capacitet =Number(arr.shift())

for(let i=0;i<arr.length;i++){
    let commant=arr[i]
    
    if(commant.includes('Add')){
        const token=commant.split(' ')
        const passenger=Number(token[1])
        wagons.push(passenger)
    }else{
        const newPassenger=Number(commant)

        for(let j=0;j<wagons.length;j++){
            if(wagons[j]+newPassenger<=capacitet){
                wagons[j]+=newPassenger
                break;
            }
        }
    }

    
}
console.log(wagons.join(" "));
}
train(['32 54 21 12 4 0 23',

    '75',
    
    'Add 10',
    
    'Add 0',
    
    '30',
    
    '10',
    
    '75'])