//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class Netflix{
    constructor(title, genre, numOfEp, rating) {
        this.title = title
        this.genre = genre
        this.numOfEp = numOfEp
        this.rating = rating
    }
    play() {
        console.log('Playing...')
    }
    Pause() {
        console.log('Pausing...')
    }
    SaveToList() {
        console.log('Save To List...')
    }
}

let breakingBad = new Netflix('Breaking Bad', 'Interesting', 164, 9.9)