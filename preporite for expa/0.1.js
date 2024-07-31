function solve(arr) {
    let messing = arr.shift()
    let commant = arr.shift()

    while (commant !== "Reveal") {
        let token = commant.split(':|:')
        let action = token.shift()
        if (action === 'ChangeAll') {
            let substring = token.shift()
            let replacement = token.shift()
            while (messing.includes(substring)) {
                messing = messing.replace(substring, replacement)
            }


        } else if (action === 'Reverse') {
            let point = token.shift()
            let firstString = messing.indexOf(point)
            if (firstString === -1) {
                console.log('error');
                commant = arr.shift()
                continue


            }

            let left = messing.slice(0, firstString)
            let indexTocontineForm = firstString + point.length
            let rigth = messing.slice(indexTocontineForm)
            let strToarr = point.split('')
            let reversetArr = strToarr.reverse()
            let reversetSubstring = reversetArr.join('')
            messing = `${rigth}${left}${reversetSubstring}`
        } else if (action === 'InsertSpace') {
            let index = Number(token.shift())
            let firstPast = messing.slice(0, index)
            let secontPast = messing.slice(index)
            messing = `${firstPast} ${secontPast}`

        }
        commant = arr.shift()
        console.log(messing);

    }
    console.log(`You have a new text message: ${messing}`);
}
solve([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]
)