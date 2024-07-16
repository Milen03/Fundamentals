function extractFile(text) {
    let textWord = text.split('\\')
    let lastWord = textWord.pop()
    let lastDonIntex = lastWord.lastIndexOf('.')
    //console.log(lastDonIntex);

    const fileName = lastWord.substring(0, lastDonIntex)
    const fileExtension = lastWord.substring(lastDonIntex + 1)

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx')