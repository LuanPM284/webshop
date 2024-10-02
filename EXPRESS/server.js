const express = require('express')

// Initialize express - app is used as a convention
const app = express()


// Creating a simple route, we decide the method to respond to GET , POTS, etc
app.get('/', (req, res) => { // the callback function uses to objects that has many methods we can use
    res.send("Hello, world") // contrary to Node we don't need to precise the content-type or module, and we can already write HTML, or JSON stringify.
    // we can add JSON type data that it will recognize and show
    // res.send('<h1>Hello, H1</h1>')

    // res.send({ name: 'Bob' })
})

// Create a local server
app.listen(8000, () => console.log('Server is running on port 8000'))
// output: Server is running on port 9000

