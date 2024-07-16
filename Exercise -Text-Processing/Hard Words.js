function hardWords(arr) {
    let text = arr[0]
    let wortToPast = arr[1]

    let letterWords = text.split(/[.,!?:]? /)
    let templetes = letterWords.filter(word => word.includes('_'))

    for (const templete of templetes) {
        const rigthWord = wortToPast.find(word => word.length === templete.length)
        text = text.replace(templete, rigthWord)

    }
    console.log(text);

}
hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a__________. My brother\'s ankle is ________, and now it bothers me even more.Every night Mom cooks ___ on your recipe because it is the most delicious. Ihope this year Santa will _____ me a robot.',

    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])