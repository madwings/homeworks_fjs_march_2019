class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    toString() {
        return `${this.name} - ${this.age}`;
    }
    saying(text) {
        return `${this.name} says " ${text} "!`;
    }

    static getPersons(arrayOfStrings) {
        let persons = [];
        for (let i = 0; i < arrayOfStrings.length; i++) {

            let singlePerson = [];
            singlePerson = arrayOfStrings[i].split(" ");
            persons[i] = new Person(singlePerson[0], singlePerson[1])
        }
        return persons;
    }

    static getSortedOverThirtyPersons(arrayOfStrings) {
        let countPerson = 0;
        let Allpersons = this.getPersons(arrayOfStrings)
        let persons = [];

        for ( let currPerson of Allpersons){

                if(currPerson.age>30){
                    persons[countPerson]=currPerson;
                    countPerson++;
                }
        }
        return persons.sort(function (a,b) { return a.name.localeCompare(b.name) });
    }
}