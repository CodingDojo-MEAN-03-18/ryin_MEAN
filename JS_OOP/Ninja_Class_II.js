function notNinja(name){
    this.name = name;
}

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
    // this.punch = function(ninja){
    //     if(ninja instanceof Ninja){
    //         ninja.health -= 5;
    //         console.log(ninja.name + " was punched by " + this.name + " and lost 5 health!");
    //     }
    // }
    this.kick = function(ninja){
        if(ninja instanceof Ninja){
            let damage = strength*15
            ninja.health = ninja.health - damage;
            console.log(ninja.name + " was kicked by " + this.name + " and lost " + damage +" health!");
        }
    }   
}

Ninja.prototype.punch = function(ninja){
    if(ninja instanceof Ninja){
        ninja.health -= 5;
        console.log(ninja.name + " was punched by " + this.name + " and lost 5 health!");
    }
}


const ninja1 = new Ninja("Goemon");
const ninja2 = new Ninja("Bill Gates");
const notninja1 = new notNinja("Elon Musk");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.punch(ninja2);
ninja2.kick(ninja1);
ninja2.punch(notninja1);
ninja1.kick(notninja1);
