function matchPhoneNumber(input){
let pattern=/[+]359([ -])2\1(\d{3})\1(\d{4})\b/g
let phoneNumbers=[]
let phoneNumber=null

while((phoneNumber=pattern.exec(input))!==null){
    phoneNumbers.push(phoneNumber[0])
}
console.log(phoneNumbers.join(', '));
}
matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])