function Ninja(name){
    const speed = 3;
    const strength = 3;
    this.name = name;
    this.health = 100;
    this.sayName = function(){
        console.log("My ninja name is " + this.name);
    }
    this.showStats = function(){
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed:" + speed + ", Strength: " + strength);
    }
    this.drinkSake = function(){
        this.health += 10;
        console.log(this.health);
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();