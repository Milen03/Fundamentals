function computerStore(arr) {
    let totalPriceNoTaks = 0


    let commant = arr.shift()
    while (commant !== 'special' && commant !== 'regular') {
        let pastPriceWithouldTax = Number(commant)

        if (pastPriceWithouldTax <= 0) {
            console.log(`Invalid price!`);
            commant = arr.shift()
            continue
        }
        totalPriceNoTaks += pastPriceWithouldTax
        commant = arr.shift()
    }
    let totalTax = 0.2 * totalPriceNoTaks
    let totoalPriceWhidTax = totalPriceNoTaks + totalTax
    if (commant === 'special') {
        totoalPriceWhidTax *= 0.9
    }
    if (totoalPriceWhidTax === 0) {
        console.log(`Invalid order!`);
    }else{
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${totalPriceNoTaks.toFixed(2)}$`);
        console.log(`Taxes: ${totalTax.toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${totoalPriceWhidTax.toFixed(2)}$`);
    }

}
computerStore(['1023',

'15',

'-20',

'-5.50',

'450',

'20',

'17.66',

'19.30',

'regular'

])