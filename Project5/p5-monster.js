module.exports = class Monster {
    constructor({ monsterName = "Unknown", minimumLife = 0, currentLife = 100 }) {
        this.monsterName = monsterName;
        this.minimumLife = minmumLife
        this.currentLife = currentLife;
        this.isAlive = currentLife >= minmumLife;
}}
