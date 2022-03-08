
class Ninja{
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(this.name);
    }

    showStats(){
        console.log("Stength:", this.strength);
        console.log("Speed:", this.speed);
        console.log("Health:", this.health);
    }

    drinkSake(){
        this.health += 10;
    }
}

const ninja1 = new Ninja("Michelangelo")
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

console.log("--------------------------");

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        console.log("The path that leads to what we truly desire is long an difficult but only by following that path do we achieve what we truly desire.");
    }
}

const superSensei = new Sensei("Master Splinter")
superSensei.sayName();
superSensei.showStats();
superSensei.drinkSake();
superSensei.showStats();
superSensei.speakWisdom();