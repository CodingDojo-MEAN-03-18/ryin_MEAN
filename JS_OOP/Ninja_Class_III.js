// function notNinja(name){
//     this.name = name;
// }

class Ninja {
    constructor(name){
        this.speed = 3;
        this.strength = 3;
        this.name = name;
        this.health = 100;
    }
    sayName(){
        console.log(`My name is ${this.name}`);
        return this;
    }
    showStats(){
        console.log(`Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
        return this;
    }
    drinkSake(){
        this.health += 10;
        console.log(this.health);
        return this;
    }
}

class Sensei extends Ninja {
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
        return this;
    }
}


const ninja1 = new Ninja("Goemon");
const sensei1 = new Sensei("Master Splinter");
// const notninja1 = new notNinja("Elon Musk");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
sensei1.speakWisdom();
sensei1.showStats();
