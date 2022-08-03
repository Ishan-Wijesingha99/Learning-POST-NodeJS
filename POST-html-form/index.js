
const express = require('express')
const app = express()


app.use(express.static('./public')) // remember, the cool thing about this is, we don't even need to set up a GET request for index.html, that will automatically be served for '/'

app.use(express.json())
app.use(express.urlencoded({extended: false}))


// let's pretend this array is our database, when a form is submitted, the information should be stored in a single object, and that object pushed into this array
let arrayOfUserObjects = []

app.post('/submitted', (req, res) => {
    // the information the user posts will be available in req.body
    const currentUserData = req.body

    // check if user wrote nothing for any of the 4 inputs
    // if any of these are undefined, the entire thing will be undefined, which is falsy
    if(!(currentUserData.firstName && currentUserData.lastName && currentUserData.age && currentUserData.email)) {
        return res.status(401).send('Error 401 - Did not write something for all entrees in form')
    }

    // store data sent by user in the arrayOfUserObjects
    arrayOfUserObjects.push(currentUserData)
    console.log(arrayOfUserObjects)

    // make sure you END the post request by sending something back
    res.status(200).send('POST request successful')
})



app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})