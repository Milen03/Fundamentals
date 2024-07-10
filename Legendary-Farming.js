function legendaryFaarming(str) {
    let keyMaterialQualiti = { shards: 0, fragments: 0, motes: 0 }
    let junkMaterialQuantities = {}

    let matirialInfo = str.split(' ')

    for (let i = 0; i < matirialInfo.length; i += 2) {
        let quetiti = Number(matirialInfo[i])
        let matirial = matirialInfo[i + 1].toLowerCase()
        let legendatri = { shards: 'Shadowmourn', fragments: 'Valanyr', motes: 'Dragonwrath'} //see to corect
        if (matirial in keyMaterialQualiti) {
            keyMaterialQualiti[matirial] += quetiti

            if (keyMaterialQualiti[matirial] >= 250) {
                keyMaterialQualiti[matirial] -= 250

                let legendariWon = legendatri[matirial]
                console.log(`${legendariWon} obtained!`);
                break;
            }
        } else if (matirial in junkMaterialQuantities) {
            junkMaterialQuantities[matirial] += quetiti
        } else {
            junkMaterialQuantities[matirial] = quetiti
        }
    }


    let keyMaterialEntris = Object.entries(keyMaterialQualiti)
   

    keyMaterialEntris.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    for (const [matrial, quetiti] of keyMaterialEntris) {
        console.log(`${matrial}: ${quetiti}`);
    } 
    
    let junkMatririalEntri = Object.entries(junkMaterialQuantities)
    junkMatririalEntri.sort((a,b)=>a[0].localeCompare(b[0]))
    for (const [matrial, quetiti] of junkMatririalEntri) {
        console.log(`${matrial}: ${quetiti}`);
    } 
}
legendaryFaarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')