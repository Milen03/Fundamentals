function muOline(arr) {
    let hp = 100
    let loot = 0

    let rooms = arr.split('|')
    for (let i = 0; i < rooms.length; i++) {
        let room = rooms[i].split(" ")
        let commant = room[0]
        let value = Number(room[1])

        if (commant === 'potion') {
            if (hp + value > 100) {
                value = 100 - hp
            }
            hp += value
            console.log(`You healed for ${value} hp.`);
            console.log(`Current health: ${hp} hp.`);
        } else if (commant === 'chest') {
            loot += value
            console.log(`You found ${value} bitcoins.`);
        } else {
            hp -= value
            if (hp <= 0) {
                console.log(`You died! Killed by ${commant}.`);
                console.log(`Best room: ${i + 1}`);

                return;
            } else {
                console.log(`You slayed ${commant}.`);
            }
        }
    }
console.log(`You've made it!`);
console.log(`Bitcoins: ${loot}`);
console.log(`Health: ${hp}`);

}
muOline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")