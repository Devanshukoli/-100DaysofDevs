//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function TonyHawkProSkater(skate, name, board, stamina) {
    this.skate = skate;
    this.name = name
    this.board = board
    this.stamina = stamina

    this.speed = () => {console.log('speedy')}
    this.jump = () => {console.log('jumpy')}
    this.run = () => {console.log('runy')}
}

const stan = new TonyHawkProSkater('majuala', 'stan', 'cheap', 23)