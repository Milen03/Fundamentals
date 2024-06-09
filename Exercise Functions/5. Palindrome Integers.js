function palindrome(arr){
function checkIsPalindrome(num){
    let numString=num+''
    let numStringRevers=''
    for(let i=numString.length-1;i>=0;i--){
        let curChar=numString[i]
        numStringRevers+=curChar
    }

    return numStringRevers===numString 
}

for (let num of arr) {
    let isPalindorm=checkIsPalindrome(num)
    console.log(isPalindorm);
}
}
palindrome([123,323,421,121])