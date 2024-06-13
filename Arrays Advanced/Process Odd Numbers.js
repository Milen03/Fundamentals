function processOddNumbers(arr) {
    const newArr = []
    for (let index = 0; index < arr.length; index++) {
        const num = arr[index];
        if (index % 2 !== 0) {
            //console.log(num);
            const oddNum = num * 2
            newArr.unshift(oddNum)
        }


    }
    console.log(newArr.join(' '));
}
processOddNumbers([10, 15, 20, 25])