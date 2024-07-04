function addressBook(arr) {
    let bookaddress = {}
    for (const pepopleInfo of arr) {
        let [name, address] = pepopleInfo.split(":")
        bookaddress[name] = address
    }
    let sordet = Object.entries(bookaddress)
    sordet.sort((a, b) => a[0].localeCompare(b[0]))

    for (const [name,address] of sordet) {
        console.log(`${name} -> ${address}`);
    }
}
addressBook(['Tim:Doe Crossing',

    'Bill:Nelson Place',

    'Peter:Carlyle Ave',

    'Bill:Ornery Rd'])