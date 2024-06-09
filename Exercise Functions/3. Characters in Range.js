function charactersInRange(char1,char2){
let code1=char1.charCodeAt()
let code2=char2.charCodeAt()
let middleChars=[]

let starCode=Math.min(code1,code2)
let ednCode=Math.max(code1,code2)

for(let curCode=starCode+1;curCode<ednCode;curCode++){
    const curChar=String.fromCharCode(curCode)
    middleChars.push(curChar)
}
console.log(middleChars.join(' '));
}
charactersInRange('a','d')