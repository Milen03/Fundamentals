function solve(str) {
    let nonRepeatedChars = ''
    let curredLastChars = ''

    for (const char of str) {
        if(char!==curredLastChars){
            nonRepeatedChars+=char
            curredLastChars=char
        }
    }
    console.log(nonRepeatedChars);
}
solve('aaaaabbbbbcdddeeeedssaa')