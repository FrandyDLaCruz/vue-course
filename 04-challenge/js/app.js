new Vue({
    el: '#app',
    data: {
        gameStarted: false,
        userHealth: 100,
        monsterHealth: 100,
        log: []
    },
    watch: {
        userHealth: function(life) {
            if(life <= 0) {
                alert("Monster kills you! You lose!!");
                this.endGame();
            }
        },
        monsterHealth: function(life) {
            if(life <= 0) {
                alert("You killed Monster! You won!!");
                this.endGame();
            }
        }
    },
    methods: {
        attack: function() {
            let userAttack = this.getRandom(0, 10);
            let monsterAttack = this.getRandom(0, 10);
            this.userHealth -= monsterAttack;
            this.monsterHealth -= userAttack;

            this.log.unshift("Player hits Monster for " + userAttack);
            this.log.unshift("Monster hits Player for " + monsterAttack); 
        },
        specialAttack: function() {
            let userAttack = this.getRandom(10, 20);
            let monsterAttack = this.getRandom(0, 10);
            this.userHealth -= monsterAttack;
            this.monsterHealth -= userAttack;

            this.log.unshift("Player hits Monster for " + userAttack);
            this.log.unshift("Monster hits Player for " + monsterAttack);
        },
        heal: function() {
            let userAttack = this.getRandom(0, 10);
            let monsterAttack = this.getRandom(0, 10);
            this.userHealth += userAttack;
            this.userHealth -= monsterAttack;

            this.log.unshift("Player heals himself for " + userAttack);
            this.log.unshift("Monster hits Player for " + monsterAttack);
        },
        endGame: function() {
            this.gameStarted = !this.gameStarted;
            this.userHealth = 100;
            this.monsterHealth = 100;
            this.log = [];
        },
        getRandom: function(min, max) {
            return Math.max(Math.round(Math.random() * max), min);
        }
    }
});