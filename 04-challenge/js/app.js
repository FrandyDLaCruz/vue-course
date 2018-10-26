new Vue({
    el: '#app',
    data: {
        gameStarted: false,
        userHealth: 100,
        monsterHealth: 100,
        log: [],
        userAttack: 0,
        monsterAttack: 0
    },
    methods: {
        attack: function() {
            this.userAttack = Math.round(Math.random() * 10);
            this.monsterAttack = Math.round(Math.random() * 10);
            this.userHealth -= this.userAttack;
            this.monsterHealth -= this.monsterAttack;

            this.log.push("Player hits Monster for " + this.userAttack);
            this.log.push("Monster hits Player for " + this.monsterAttack);

            if(this.userHealth <= 0) {
                alert("Monster kills you! You lose!!");
                this.giveUp();
            }
            else if(this.monsterHealth <= 0) {
                alert("You killed Monster! You won!!");
                this.giveUp();
            }
        },
        specialAttack: function() {
            this.userAttack = Math.round(Math.random() * 20);
            this.monsterAttack = Math.round(Math.random() * 10);
            this.userHealth -= this.monsterAttack;
            this.monsterHealth -= this.userAttack;

            this.log.push("Player hits Monster for " + this.userAttack);
            this.log.push("Monster hits Player for " + this.monsterAttack);

            if(this.userHealth <= 0) {
                alert("Monster kills you! You lose!!");
                this.giveUp();
            }
            else if(this.monsterHealth <= 0) {
                alert("You killed Monster! You won!!");
                this.giveUp();
            }
        },
        heal: function() {
            this.userAttack = Math.round(Math.random() * 10);
            this.monsterAttack = Math.round(Math.random() * 10);
            this.userHealth += this.userAttack;
            this.userHealth -= this.monsterAttack;

            this.log.push("Player heals himself for " + this.userAttack);
            this.log.push("Monster hits Player for " + this.monsterAttack);

            if(this.userHealth <= 0) {
                alert("Monster kills you! You lose!!");
                this.giveUp();
            }
            else if(this.monsterHealth <= 0) {
                alert("You killed Monster! You won!!");
                this.giveUp();
            }
        },
        giveUp: function() {
            this.gameStarted = !this.gameStarted;
            this.userHealth = 100;
            this.monsterHealth = 100;
            this.log = [];
        }
    }
});