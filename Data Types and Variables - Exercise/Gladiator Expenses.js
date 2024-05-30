function gladiatorExpenses(lostFightsCount, helmet, sword, shield, armor) {
    expenses = 0;
    shieldBreack = 0

    for (let curFights = 1; curFights <= lostFightsCount; curFights++) {
        if (curFights % 2 === 0) {
            expenses += helmet
        }
        if (curFights % 3 === 0) {
            expenses += sword
        }
        if (curFights % 2 === 0 && curFights % 3 === 0) {
            expenses += shield
            shieldBreack++;

            if (shieldBreack % 2 === 0) {
                expenses += armor
            }
    
        }
        
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiatorExpenses(7,

    2,

    3,

    4,

    5)