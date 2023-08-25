//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

// If a function start with  a capital letter it is a constructor function
// This is basically about constructor function.
function StreetFighter() {
    this.name = 'Devanshu'
    this.skill = 'unknown'
    this.health = 'unknown'
    this.ability = 'unknown'

    this.attack = function () {
        console.log('attack')
    }
    this.run = function () {
        console.log('run')
    }
    this.fly = function () {
        console.log('fly')
    }
}

let fighter1 = new StreetFighter('Ryu', 'fly', '100', 'fireball')