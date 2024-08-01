function solve(arr) {
    let citysData = []
    let commant = arr.shift()

    while (commant !== "Sail") {
        let tokens = commant.split('||')
        let cityName = tokens.shift()
        let cityPopulation = Number(tokens.shift())
        let cityGold = Number(tokens.shift())


        if (cityName in citysData) {
            citysData[cityName].population += cityPopulation
            citysData[cityName].gold += cityGold
        } else {
            citysData[cityName] = { population: cityPopulation, gold: cityGold }
        }

        commant = arr.shift()
    }

    commant = arr.shift()

    while (commant !== "End") {
        let token = commant.split('=>')
        let action = token.shift()
        let cityName = token.shift()
        if (action === 'Plunder') {
            let peopleKilled = Number(token.shift())
            let goldStolen = Number(token.shift())


            citysData[cityName].population -= peopleKilled
            citysData[cityName].gold -= goldStolen

            console.log(`${cityName} plundered! ${goldStolen} gold stolen, ${peopleKilled} citizens killed.`);

            if (citysData[cityName].population <= 0 || citysData[cityName].gold <= 0) {
                console.log(`${cityName} has been wiped off the map!`);
                delete citysData[cityName]
            }
        } else if (action === 'Prosper') {
            let goldAcquired = Number(token.shift())
            if (goldAcquired < 0) {
                console.log(`Gold added cannot be a negative number!`);
            } else {
                citysData[cityName].gold += goldAcquired
                console.log(`${goldAcquired} gold added to the city treasury. ${cityName} now has ${citysData[cityName].gold} gold.`);
            }
        }
        commant = arr.shift()
    }
let cityEntries=Object.entries(citysData)

if(cityEntries.length===0){
    console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
}else{
    console.log(`Ahoy, Captain! There are ${cityEntries.length} wealthy settlements to go to:`);

    for (const [cityName,cityStats] of cityEntries) {
        console.log(`${cityName} -> Population: ${cityStats.population} citizens, Gold: ${cityStats.gold} kg`);
    }
}

}
solve(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"])
