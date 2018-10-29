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
            this.userAttack = this.getRandom(10);
            this.monsterAttack = this.getRandom(10);
            this.userHealth -= this.monsterAttack;
            this.monsterHealth -= this.userAttack;

            this.log.unshift("Player hits Monster for " + this.userAttack);
            this.log.unshift("Monster hits Player for " + this.monsterAttack); 
        },
        specialAttack: function() {
            this.userAttack = this.getRandom(20);
            this.monsterAttack = this.getRandom(10);
            this.userHealth -= this.monsterAttack;
            this.monsterHealth -= this.userAttack;

            this.log.unshift("Player hits Monster for " + this.userAttack);
            this.log.unshift("Monster hits Player for " + this.monsterAttack);
        },
        heal: function() {
            this.userAttack = this.getRandom(10);
            this.monsterAttack = this.getRandom(10);
            this.userHealth += this.userAttack;
            this.userHealth -= this.monsterAttack;

            this.log.unshift("Player heals himself for " + this.userAttack);
            this.log.unshift("Monster hits Player for " + this.monsterAttack);
        },
        endGame: function() {
            this.gameStarted = !this.gameStarted;
            this.userHealth = 100;
            this.monsterHealth = 100;
            this.log = [];
        },
        getRandom: function(value) {
            return Math.round(Math.random() * value);
        }
    }
});