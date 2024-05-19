function triangleOfNumbers(n) {
    for (let curNum = 1; curNum <= n; curNum++) {
        let line = '';
        for (let numCount = 1; numCount <= curNum; numCount++) {
            line += curNum + ' ';
        }
        console.log(line.trim());
    }
}
triangleOfNumbers(5)