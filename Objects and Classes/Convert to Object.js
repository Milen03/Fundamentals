function converToObject(jsonStr){
let person=JSON.parse(jsonStr)
let entries =Object.entries(person)
//console.log(entries);

for (const key of entries) {
    console.log(`${key[0]}: ${key[1]}`);
}
}
converToObject('{"name": "George", "age": 40, "town": "Sofia"}')