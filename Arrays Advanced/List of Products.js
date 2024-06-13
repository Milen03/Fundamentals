function listOfProducts(arr){
let sordet=arr.sort();
for(let i= 0;i<sordet.length;i++){
    console.log(`${i+1}.${sordet[i]}`);
}
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions',

    'Apples'])