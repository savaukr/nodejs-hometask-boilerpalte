const addDefense = (fighter, countDefense) => {
    if (!('defense' in fighter)) {
        fighter.defense = countDefense;
    }
    return fighter;
}
module.exports = {
    addDefense
}