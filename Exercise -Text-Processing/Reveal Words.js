function revealWords(word,str){
let wordTofill=word.split(', ')
let textWord=str.split(" ")

let teplets=textWord.filter(word=>word.includes('*'))
for (const telete of teplets) {
   let rightWord=wordTofill.find(word=>word.length===telete.length)
    str=str.replace(telete,rightWord)
}
console.log(str);
}
revealWords('great',

'softuni is ***** place for learning new programming languages')