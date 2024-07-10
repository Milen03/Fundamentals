function companiUser(arr) {
    let companiEnloyees = {}

    for (const enloyeeData of arr) {
        let [compani, enloyeesId] = enloyeeData.split(' -> ')

        if (compani in companiEnloyees) {
            if (!companiEnloyees[compani].includes(enloyeesId)) {
                companiEnloyees[compani].push(enloyeesId)
            }
        } else {

            companiEnloyees[compani] = [enloyeesId]
        }
        
    }
    let companiEntries=Object.entries(companiEnloyees)
    companiEntries.sort((a,b)=>a[0].localeCompare(b[0]))
    for (const [name,enloyees] of companiEntries) {
        console.log(name);
        for (const enloyeesIdarr of enloyees) {
            console.log(`-- ${enloyeesIdarr}`);
        }
    }
}
companiUser(['SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'])