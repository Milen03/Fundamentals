function houseParty(arr){
    let guest=[]

    for (const commant of arr) {
        let token=commant.split(' ')
        let name=token.shift()
        if(token.includes('not')){
            const nameIdx=guest.indexOf(name);
            if(nameIdx!==-1){
                guest.splice(nameIdx,1)
            }else{
                console.log(`${name} is not in the list!`);
            }
        }else{
            if(guest.includes(name)){
                console.log(`${name} is already in the list!`);
            }else{
                guest.push(name)
            }
        }
    }
console.log(guest.join('\n'));
}
houseParty(['Allie is going!',

    'George is going!',
    
    'John is not going!',
    
    'George is not going!'])