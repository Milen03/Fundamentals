function gladiatorInventory(arr) {
    let inventory = arr.shift().split(" ")

    for (const commant of arr) {
        let token = commant.split(" ")
        const action = token.shift()
        const equipment = token.shift()

        if (action === 'Buy') {
            if (!inventory.includes(equipment)) {
                inventory.push(equipment)
            }
        } else if (action === 'Trash') {
            const equipmentIdx = inventory.indexOf(equipment)

            if (equipmentIdx !== -1) {
                inventory.splice(equipmentIdx, 1)
            }
        } else if (action === "Repair") {
            const equipmentIdx = inventory.indexOf(equipment)
            if (equipment !== -1) {
                inventory.splice(equipmentIdx, 1)
                inventory.push(equipment)
            }

        } else if (action === "Upgrade") {
            let equipmentToken = equipment.split('-')
            const oldEquipment = equipmentToken.shift()
            const upgrade = equipmentToken.shift()

            const oldEquipmentInd = inventory.indexOf(oldEquipment)
            if (oldEquipmentInd !== -1) {
                inventory.splice(oldEquipmentInd + 1, 0, `${oldEquipment}:${upgrade}`)
            }

        }
    }
    console.log(inventory.join(' '));
}
gladiatorInventory(['SWORD Shield Spear','Trash Bow','Repair Shield','Upgrade Helmet-V'])