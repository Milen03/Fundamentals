function equalSums(arr) {
    let isFount = false
    for (let i = 0; i < arr.length; i++) {
        let sumToLeft = 0
        let sumToRight = 0
        for (let j = 0; j < i; j++) {
            let numToLeft = arr[j]
            sumToLeft += numToLeft
        }

        for (let k = i + 1; k < arr.length; k++) {
            let numToRiagt = arr[k]
            sumToRight += numToRiagt
        }
        if (sumToLeft == sumToRight) {
            console.log(i);
            isFount = true;
            break
        }

    }
    if(isFount==false){
        console.log("no");
    }
}
equalSums([1, 2, 3, 3])