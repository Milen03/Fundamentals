function stringSubstring(word,text){
let textTolow=text.toLowerCase()
let textWord=textTolow.split(' ')

if(textWord.includes(word)){
    console.log(word);
}else{
    console.log(`${word} not found!`);
}
}
stringSubstring('javascript',
'JavaScript is the best programming language')