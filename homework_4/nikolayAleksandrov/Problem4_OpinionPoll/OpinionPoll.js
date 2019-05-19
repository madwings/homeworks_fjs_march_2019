'use strict';

function results() {
    let persons = [];
    let arrayOfSequences = getArray('arrayih', "\n");
    persons = Person.getSortedOverThirtyPersons(arrayOfSequences);
    printResults(persons.join("<br>"));
}