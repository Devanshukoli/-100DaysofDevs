//Create a dog object that has four properties and three methods
// var dog = {}
 
// dog.name = "Fido";
// dog.breed = "Lab";
// dog.age = 3;
// dog.color = "Black";

// dog.bark = () => {console.log('bark')}
// dog.jump = () => {console.log('jump')}
// dog.run = () => { console.log('run') }

// Using Constructor function.
function Dog(name, breed, age, color) {
    this.name = 'Fido'
    this.breed = 'Lab'
    this.age = 3
    this.color = 'Black'

    this.bark = () => { console.log('bark') }
    this.jump = () => { console.log('jump') }
    this.run = () => { console.log('run') }
}

var germanSheford = new Dog('German Sheford', 'German Sheford', 5, 'Brown')