
// POST requests
// a POST request can represent any action that requires the creation of new data

// creating a new account, creating a new order on a food delivery app, creating a new post, all of these will require POST requests

// the data can be sent along with the POST request itself in the request body
// the request body is data that is sent BY THE CLIENT, TO THE SERVER

// whenever a POST request is made, it is implied the web server that receives that POST request saves the data (almost always in a database)

// a GET request sends data FROM THE SERVER, TO THE CLIENT
// a POST request sends data FROM THE CLIENT, TO THE SERVER

// the client GETS data FROM THE SERVER
// the client POSTS data TO THE SERVER



const express = require('express')
const {users, posts} = require('./data')
const app = express()


// need to include this middleware if you want JSON in req.body to be read properly
app.use(express.json())
// need to include this middleware so that data sent through POST request is read properly
app.use(express.urlencoded({ extended: false }))



app.get('/', (req, res) => {
    res.send('GET request successful')
})

app.post('/', (req, res) => {
    // when the client posts data to the server, it is almost always posted in req.body
    console.log(req.body)

    // because the user is sending back data in req.body, let's create a variable for that data
    const newUser = {...req.body}

    // usually when we get data from the client, we save it to a database, but in this case, we're just pushing that data into our users array
    users.push(newUser)

    // when the user is done posting his data to the server, we can change what is displayed
    // typically we send back a status code of 201 for successful POST requests
    res.status(201).send('Created User')
})



app.listen(5000, () => {
    console.log('Server listening on port 5000...')
})



// we can put middleware functions into app.post() as well as the second parameter


