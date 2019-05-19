'use strict';
class Person {
    name;
    age;
    constructor(name, age) {

        checkAge(age);
        checkNameLength(name);
        this.name = name;
        this.age = age;
    }
    get name() {
        return this.name;
    }

    set name(name) {
        checkNameLength(name)
        //this.name = name;
    }

    get age() {

        return this.age;
    }

    set age(age) {
        checkAge(age)
        this.age = age;
    }
    toString() {
        return `${this.name} - ${this.age}`;
    }


}




function checkAge(age) {
    if (age < 0) {
        throw new Error("Age must be positive!");
    }
}

function checkNameLength(name) {

    if (name.length < 3) {
        throw new Error("Name’s length should not be less than 3 symbols!");
    }

}

class Child extends Person {

    constructor(name, age) {

        checkChildAge(age);
        super(name, age);
    }

}

function checkChildAge(age) {
    if (age > 15) {
        throw new Error("Child’s age must be less than 16!");
    }
}
