function countStringOccurrences(text,word){
    countWord=0
textArr=text.split(' ')
for (const w of textArr) {
    if(w===word){
countWord++
    }
}
console.log(countWord);
}
countStringOccurrences('This is a word and it also is a sentence',

'is')