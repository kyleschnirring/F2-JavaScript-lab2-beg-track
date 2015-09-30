'use strict';

/* ********************************************************
LAB 2: LOOPY SCI-FI

Welcome to Lab 2 =)

Be sure to read all the comments!

All of the instructions are inline with the assignment below.
Look for the word TODO in comments.  Each TODO will have a
description of what is required.

To run this file (in the terminal) use: node lab2.js */

//*********************************************************
// SETUP
//*********************************************************

// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ', failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: The Blob. 20 points
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

    for the...      | starting rate of | persons consumed |
                    |  consumption     |    that hour     |
--------------------|------------------|------------------|
    first hour      |    1/hour        |        1         |
    second hour     |    2/hour        |        2         |
    third hour      |    3/hour        |        3         |
    fourth hour     |    4/hour        |        4         |

 TODO: First, make a constructor function, called Blob, that makes blobs.


 TODO: Next, create an instance of Blob named blob.

 TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington. */
function Blob() {

}

var blob = new Blob();

var hours = 1;
var myPopulation = 1000;
var peoplePerHour = 1;

for (peoplePerHour; peoplePerHour < myPopulation; hours++) {
  peoplePerHour *= hours;
}

var hoursSpentInDowington = hours; // TODO: assign me the value of the
                           // above calculation (how long it took
                           // the blob to eat Dowington)



// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

function hoursToOoze(population, peoplePerHour) {
  // TODO: implement me based on the instructions above.
  // Be sure to then assign me to the Blob's prototype.
  var hours = 1;
  this.population = population;
  this.peoplePerHour = peoplePerHour;

  if (population === 0) {
    return 0;
  }
  for (peoplePerHour; peoplePerHour < population; hours++) {
    peoplePerHour *= hours;
  }
  return hours;
}

Blob.prototype.hoursToOoze = function (population, peoplePerHour) {
  var hours = 1;
  this.population = population;
  this.peoplePerHour = peoplePerHour;

  if (population === 0) {
    return 0;
  }
  for (peoplePerHour; peoplePerHour < population; hours++) {
    peoplePerHour *= hours;
  }
  return hours;
}

assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  'hoursSpentInDowington should match hoursToOoze\'s result for 1000');
assert(blob.hoursToOoze(500, 2) === 7, 'should be 7.');
assert(blob.hoursToOoze(98, 3) === 6, 'should be 6.');
assert(blob.hoursToOoze(11111016, 82) === 10, 'should be 10.');

// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.

//*********************************************************
// PROBLEM 2: Universal Translator. 20 points
//*********************************************************

var hello = {
  klingon: 'nuqneH',  // home planet is Qo'noS
  romulan: 'Jolan\'tru', // home planet is Romulus
  'federation standard': 'hello' // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method (that you'll place on the prototype) called
// sayHello.

function SentientBeing (homePlanet, beingslanguage) {
  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
  this.homePlanet = homePlanet;
  this.beingslanguage = beingslanguage;
}

// sb is a SentientBeing object
function sayHello (sb) {
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating

    //TODO: put this on the SentientBeing prototype
    console.log(hello[this.beingslanguage]);
    return hello[sb.beingslanguage];
  }

SentientBeing.prototype.sayHello = function(sb){
  console.log(hello[this.beingslanguage]);
    return hello[sb.beingslanguage];
}

// TODO: create three SentientBeings, one for each language in the
// 'hello' object above.
var klingon = new SentientBeing("Qo'noS", 'klingon'); // TODO: make a klingon
var romulan = new SentientBeing('Romulus', 'romulan'); // TODO: make a romulan
var human = new SentientBeing('Earth', 'federation standard'); // TODO: make a human

assert(human.sayHello(klingon) === 'nuqneH',
  'the klingon should hear nuqneH');
assert(human.sayHello(romulan) === 'Jolan\'tru', 'the romulan should hear Jolan tru');
assert(klingon.sayHello(human) === 'hello', 'the human should hear hello');
assert(klingon.sayHello(romulan) === 'Jolan\'tru', 'the romulan should hear Jolan tru');
assert(romulan.sayHello(klingon) === 'nuqneH',
  'the klingon should hear nuqneH');
assert(romulan.sayHello(human) === 'hello', 'the human should hear hello');


// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.

//*********************************************************
// PROBLEM 3: Moar Loops. 20 points.
//
// Implement the following functions. Write at least 3
// assertions for each one
//*********************************************************
function max(array) {
  // TODO: return the largest number in the given array
  var myArray = array;
  var theBiggestNum = Math.max.apply(null, myArray);
  return theBiggestNum;
}

// TODO: write three more assertions
assert(max([ 1, 3, 2 ]) === 3, '[1,3,2]');
assert(max([ 10, 59, 45]) === 59, '[10,59,45]');
assert(max([100, 2, 73]) === 100, '[100,2,73]');
assert(max([99, 10000, 560]) === 10000, '[99,10000,560]');

function variablify(string) {
  // TODO: you are given a string with several words in it
  // return a corresponding variable name that follows
  // javascript conventions
  // HINT:
  // you might want to use these string methods:
  //  split(), charAt(), toUpperCase()
  // and this array method: join()
  var myString = string.split(' ');

  for (var i = 1; i < myString.length; i++) {
    myString[i] = myString[i].charAt(0).toUpperCase() + myString[i].slice(1);
  }

  myString = myString.join('');
  return myString;
}

// TODO: write three more assertions
assert(variablify('one two three') === 'oneTwoThree',
  'variablify(\'one two three\')');
assert(variablify('code fellow is awesome') === 'codeFellowsIsAwesome');
assert(variablify('i love pizza') === 'iLovePizza');
assert(variablify('dogs rule') === 'dogsRule');

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
