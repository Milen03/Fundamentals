function getProduct(product) {
    sum = 0
    switch (product) {
        case "coffee":
            return 1.50
          
        case "water":
            return 1
           
        case "coke":
            return 1.40
           
        case "snacks" :
            return
            
    }
}
function calcoleteTotalSum(product,quantity){
    let price=getProduct(product)
    let totalPrice= price*quantity
    console.log(totalPrice.toFixed(2));
}
calcoleteTotalSum("water", 5)