
class Hero {
    // properties or attributes
    // "variables that belong to each instance"
    constructor(health=18, power=5) {
        this.health = health;
        this.power = power;
    }

    // behaviors or methods
    // "functions that belong to each instance"
    heal(otherHero) {
        // otherHero.health += this.power;
        otherHero.receiveHealth(this.power);
        console.log(`other hero has ${otherHero.health}`);
    }

    receiveHealth(power) {
        this.health += power;
    }
}

class Dog {

    constructor(age, weight, breed) {
        this.age = age;
        this.weight = weight;
        this.breed = breed;
    }

    eat(foodUnit) {
        this.weight += foodUnit;
        console.log(`Weight is now ${this.weight}.`);
    }
}

class Student {

    constructor(age, GPA, major) {
        this.age = age;
        this.GPA = GPA;
        this.major = major;
    }

    assignmentCompleted(pointsEarned) {
        this.GPA += pointsEarned * 0.5;
        console.log(`Student GPA is now ${this.GPA}.`);
    }

    changeMajor(newMajor) {
        this.major = newMajor;
        console.log(`Major has been changed to ${this.major}.`);
    }

}

class Car {

    constructor(year, make, model, value) {
        this.year = year;
        this.make = make;
        this.model = model;
        this.value = value;
    }

    upgradePart(partsCost) {
        this.value += partsCost;
        console.log(`Parts have been upgraded. Car's new value is ${this.value}.`);
    }

}

const aHero = new Hero();
const anotherHero = new Hero();

aHero.heal(anotherHero);
aHero.heal(anotherHero);

console.log(aHero);
console.log(anotherHero);

const germanShepherd = new Dog(3, 40, "German Shepherd");
console.log(germanShepherd);
germanShepherd.eat(2);

const David = new Student(26, 3.5, "Psychology");
console.log(David);
David.assignmentCompleted(4);
David.changeMajor("Economics");

const Volkswagen = new Car(2006, "Volkswagen", "Rabbit", 3000);
console.log(Volkswagen);
Volkswagen.upgradePart(500);