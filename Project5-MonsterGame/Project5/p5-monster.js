module.exports = class Monster {
    constructor({ monsterName = "Unknown", minimumLife = 0, currentLife = 100 }) {
        this.monsterName = monsterName;
        this.minimumLife = minimumLife
        this.currentLife = currentLife;
        this.isAlive = currentLife >= minimumLife
}

    randomLifeDrain(min = 1, max = 30) {
        const drain = Math.floor(Math.random() * (max - min + 1)) + min;
        this.currentLife -= drain;
        if (this.currentLife < this.minimumLife) this.isAlive = false;
        console.log(`${this.monsterName} lost ${drain} life. Current life: ${this.currentLife}, Alive: ${this.isAlive}`);
    }
}