function phoneBook (arr){
    let thePhoneBook={}
for (const pepopleInfo of arr) {
    let [name,number]=pepopleInfo.split(' ')
    thePhoneBook[name]=number
}
for (const key in thePhoneBook) {
    console.log(`${key} -> ${thePhoneBook[key]}`);
}
}
phoneBook(['Tim 0834212554',

    'Peter 0877547887',
    
    'Bill 0896543112',
    
    'Tim 0876566344'])