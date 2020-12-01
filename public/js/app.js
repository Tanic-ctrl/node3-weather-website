//Fetch es una popular API de recuperaciòn que no forma parte de node js, por lo que utilizaremos javascript del lado del cliente. 
// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

// messageOne.textContent = 'From JavaScript'

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const placename = search.value

    messageOne.textContent = 'Searching...'
    messageTwo.textContent = ''

    fetch('/weather?address=' + placename).then((response) => {
        response.json().then((data) => {

            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.placename
                messageTwo.textContent = data.forecast
                    // console.log(data.placename)
                    // console.log(data.forecast)
            }
        })
    })
})