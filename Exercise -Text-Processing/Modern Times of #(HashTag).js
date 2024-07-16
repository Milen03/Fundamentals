function moderTimes(str) {
    let words = str.split(" ")
    let hastWords = words.filter(word => word.startsWith('#') && word.length > 1)

    let pattern = /\b[A-Za-z]+\b/

    for (let hashtag of hastWords) {
        hashtag = hashtag.substring(1)

        if (pattern.test(hashtag)) {
            console.log(hashtag);
        }
    }
}
moderTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')