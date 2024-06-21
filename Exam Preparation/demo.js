let health = 100;
let bitcoins = 0;
let counterRooms = 0;

let dungeonRooms = prompt().split("|");
for (let i = 0; i < dungeonRooms.length; i++) {
  let currentRoom = dungeonRooms[i].split(" ");
  let command = currentRoom[0];
  let number = parseInt(currentRoom[1]);

  switch (command) {
    case "potion":
      if (health === 100) {
        counterRooms++;
        continue;
      } else if (health < 100) {
        let isEnoughHealing = number + health > 100;
        if (!isEnoughHealing) {
          let healthPoint = number;
          health += number;
          console.log(`You healed for ${healthPoint} hp.`);
          console.log(`Current health: ${health} hp.`);
          counterRooms++;
        } else {
          let difference = 100 - health;
          health += difference;
          console.log(`You healed for ${difference} hp.`);
          console.log(`Current health: ${health} hp.`);
          counterRooms++;
        }
      }
      break;
    case "chest":
      let currentBitcoin = number;
      console.log(`You found ${number} bitcoins.`);
      bitcoins += currentBitcoin;
      counterRooms++;
      break;
    default:
      let isHealthZero = health - number <= 0;

      if (isHealthZero) {
        counterRooms++;
        console.log(`You died! Killed by ${command}.`);
        console.log(`Best room: ${counterRooms}`);
        return;
      }
      let monster = command;
      let monsterDamage = number;
      console.log(`You slayed ${monster}.`);
      health -= monsterDamage;
      counterRooms++;
      break;
  }
}
console.log("You've made it!");
console.log(`Bitcoins: ${bitcoins}`);
console.log(`Health: ${health}`);   