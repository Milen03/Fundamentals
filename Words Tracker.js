function wordsTracker(arr){
let targetWord=arr.shift().split(' ')
let wordOccurrences={}
for (const word of targetWord) {
    wordOccurrences[word]=0
}

for (const word of arr) {
    if(word in wordOccurrences){
        wordOccurrences[word]++
    }
}

let wordEntrie=Object.entries(wordOccurrences)
wordEntrie.sort((a,b)=>b[1]-a[1])

for (const [word,value] of wordEntrie) {
    console.log(`${word} - ${value}`);
}
}
wordsTracker([

    'this sentence',
    
    'In', 'this', 'sentence', 'you', 'have',
    
    'to', 'count', 'the', 'occurrences', 'of',
    
    'the', 'words', 'this', 'and', 'sentence',
    
    'because', 'this', 'is', 'your', 'task'
    
    ])