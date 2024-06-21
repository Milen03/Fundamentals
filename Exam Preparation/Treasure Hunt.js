function treasureHund(arr) {
    let items = arr.shift().split('|')

    let command = arr.shift()
    while (command !== "Yohoho!") {
        let token = command.split(' ')
        let action = token.shift()

        switch (action) {
            case 'Loot':
                let newItems = token
                for (const newItem of newItems) {
                    if (!items.includes(newItem)) {
                        items.unshift(newItem)
                    }

                }
                break;
            case 'Drop':
                let index = Number(token.shift())
                if (index >= 0 && index < items.length) {
                    const delItem = items.splice(index, 1)
                    items.push(delItem)
                }

                break;
            case "Steal":
                let coundToDelit = Number(token.shift())
                let stolenItem = items.splice(-coundToDelit)
                console.log(stolenItem.join(', '));
                break;
        }


        command = arr.shift()
    }

    let gainSum=0
    for (const item of items) {
        gainSum+=item.length
    }

    let averegeGain=gainSum/items.length

    if(items.length===0){
        console.log(`Failed treasure hunt.`);
    }else{
        console.log(`Average treasure gain: ${averegeGain.toFixed(2)} pirate credits.`);
    }
}
treasureHund(["Gold|Silver|Bronze|Medallion|Cup",

    "Loot Wood Gold Coins",

    "Loot Silver Pistol",

    "Drop 3",

    "Steal 3",

    "Yohoho!"])