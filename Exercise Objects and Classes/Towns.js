function towns(arr){
for (const townsInf of arr) {
    let tokken=townsInf.split(' | ')
    let townName=tokken.shift()
    let townlatitude=Number(tokken.shift())
    let townlongitude=Number(tokken.shift())


    let curTown={
        name:townName,
        latitude:townlatitude.toFixed(2),
        longitude:townlongitude.toFixed(2)
    }

    console.log(curTown);
}
}
towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625'])