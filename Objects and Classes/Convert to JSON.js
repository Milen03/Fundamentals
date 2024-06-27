function coneverToJSON(name,lastName,hairColor){
let person ={
name,
lastName,
hairColor
}
console.log(JSON.stringify(person));
}
coneverToJSON('George', 'Jones',

'Brown')