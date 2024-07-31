function solve(arr) {
    let message = arr.shift()
    let commant = arr.shift()

    while (commant !== 'Decode') {
        let token = commant.split('|')
        let action = token.shift()
if(action==='Move'){
let letterCount=Number(token.shift())
let letterrsToMove=message.substring(0,letterCount)

message=message.replace(letterrsToMove,'')
message+=letterrsToMove
}else if(action==='Insert'){
let index=Number(token.shift())
let value=token.shift()

message=message.substring(0,index)+value+message.substring(index)
}else if(action==='ChangeAll'){
let substring=token.shift()
let replace=token.shift()


while(message.includes(substring)){
    message=message.replace(substring,replace)
}

}

        commant = arr.shift()
    }
    console.log(`The decrypted message is: ${message}`);
}
solve([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]
)