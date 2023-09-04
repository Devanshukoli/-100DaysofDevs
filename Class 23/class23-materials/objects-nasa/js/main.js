//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
fetch("https://api.nasa.gov/")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
        document.querySelector("img").src = data.message
    })
    .catch(err => {
        console.log(`error.................... ${err}`)
    });