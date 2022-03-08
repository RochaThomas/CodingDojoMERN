
class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }

    sayName(){
        console.log(this.name);
    }
}

class Unit extends Card {
    constructor(name, cost, power, resilience){
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }
    
    attack(target) {
        console.log(this.name, "attacks", target.name);
        target.resilience -= this.power;
    }

    showStats(){
        console.log("Power:", this.power);
        console.log("Resilience:", this.resilience);
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play(target) {
        if (target instanceof Unit) {
            console.log("Played on", target.name);
            console.log(this.text);
            if (this.stat == 'resilience') {
                target.resilience += this.magnitude;
            }
            else if (this.stat == 'power') {
                target.power += this.magnitude;
            }
            else {
                throw new Error("This is not a stat")
            }
        }
        else {
            throw new Error("Target must be a unit")
        }
    }
}

const unit1 = new Unit("Red Belt Ninja", 3, 3, 4);
const unit2 = new Unit("Black Belt Ninja", 4, 5, 4);

const effect1 = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);
const effect2 = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
const effect3 = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);

console.log("START GAME");
unit1.sayName();
unit1.showStats();
console.log("---------------------");
unit2.sayName();
unit2.showStats();
console.log("=====================");

console.log("TURN 1");
effect1.sayName();
effect1.play(unit1);
console.log("---------------------");
unit1.sayName();
unit1.showStats();
console.log("---------------------");
unit2.sayName();
unit2.showStats();
console.log("=====================");

console.log("TURN 2");
effect2.sayName();
effect2.play(unit2);
console.log("---------------------");
unit1.sayName();
unit1.showStats();
console.log("---------------------");
unit2.sayName();
unit2.showStats();
console.log("=====================");

console.log("TURN 3");
effect3.sayName();
effect3.play(unit1);
console.log("---------------------");
unit1.sayName();
unit1.showStats();
console.log("---------------------");
unit2.sayName();
unit2.showStats();
console.log("---------------------");
unit1.attack(unit2);
console.log("---------------------");
unit1.sayName();
unit1.showStats();
console.log("---------------------");
unit2.sayName();
unit2.showStats();
console.log("=====================");

console.log("BLACK BELT NINJA WAS DEFEATED");
console.log("RED BELT NINJA WINS!!!");
