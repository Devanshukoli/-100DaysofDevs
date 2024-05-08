//Create a button that adds 1 to a botScore stored in localStorage

if (!localStorage.getItem('botScore')) {
    localStorage.setItem('botScore', 0)
}

document.querySelector('button').addEventListener('click', addAnotherOne)

function addAnotherOne() {
    let botScroeVal = Number(localStorage.getItem('botScore'))
    botScroeVal += 1
    localStorage.setItem('botScore', botScroeVal)
}
