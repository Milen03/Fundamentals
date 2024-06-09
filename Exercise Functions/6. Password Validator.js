function passWordValicator(password) {

    function between6And10Characters(pass) {
        if (pass.length >= 6 && pass.length <= 10) {

            return true
        } else {
            console.log(`Password must be between 6 and 10 characters`);
            return false
        }
    }

    function onlyOfLettersAndDigits(pass) {
        const patter = /^[A-Za-z0-9]+$/;
        if (patter.test(pass)) {
            return true
        } else {
            console.log(`Password must consist only of letters and digits`);
            return false
        }
    }

    function checkIf2Digits(pass) {
        const patter = /[0-9]{2,}/


        if (patter.test(pass)) {
            return true
        } else {
            console.log(`Password must have at least 2 digits`);
            return false
        }
    }

    const numberCorect = between6And10Characters(password)
    const lettersAndDifits = onlyOfLettersAndDigits(password)
    const only2digest = checkIf2Digits(password)
if(numberCorect&&lettersAndDifits&&only2digest){
    console.log(`Password is valid`);
}

}
//passWordValicator('logIn')
//passWordValicator('MyPass123')
passWordValicator('Pa$s$s')