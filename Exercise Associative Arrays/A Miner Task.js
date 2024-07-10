function minerTask(arr) {
    let resourceQuantities = {}
    for (let i = 0; i < arr.length; i += 2) {
        let resource = arr[i]
        let quantity = Number(arr[i + 1])

        if (resource in resourceQuantities) {
            resourceQuantities[resource] += quantity
        } else {
            resourceQuantities[resource] = quantity
        }
    }
    let resursFinal=Object.entries(resourceQuantities)
    for (const [resourse, quantity] of resursFinal) {
        console.log(`${resourse} -> ${quantity}`);
    }
}
minerTask(['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15'])