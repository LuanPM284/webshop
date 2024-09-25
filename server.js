// a module, included with Node
import http from 'http'
// const PORT = 8000
import fs from 'fs/promises'
import url from 'url'
import path from 'path'

const PORT = process.env.PORT // using process.env. I can access any variables in the file or the system

// method createServer, it takes in a function,two objects a request req and a response res
const server = http.createServer(async (req, res) => {
    // res.write('Hello, World!') // like a feedback
    // res.setHeader('Content-Type', 'text/html')
    // res.statusCode = 404
    // res.end('<h1>Hello World!</h1>') // not nedded with a framework
    // console.log(req.url)
    // console.log(req.method)

    // creating a router, a way to direct users to a specific page using the type of url given

    // Get current path ; present in classic JS
    // __filename // will give me the current file name with the path
    // __dirname // will give me the current path of the current file

    // normally it can't be used in an environment, but there is a module that alllows the creation of our own
    // import url from 'url'

    const __filename = url.fileURLToPath(import.meta.url) // "import.meta.url" gives us the file url, but we only want the path so "fileURLtoPath" does that
    const __dirname = path.dirname(__filename)// also uses a module called path

    console.log(__filename)

    try {
        // Check if GET request
        if (req.method === 'GET') {
            let filePath
            if (req.url === '/') {
                filePath = path.join(__dirname, 'public', 'index.html')
            } else if (req.url === '/about') {
                filePath = path.join(__dirname, 'public', 'about.html')
            } else {
                throw new Error('Not found')
            }
            const data = await fs.readFile(filePath)
            res.setHeader('Content-Type', 'text/html')
            res.write(data)
            res.end()
        } else {
            throw new Error('Method not allowed')
        }
    } catch (error) {
        res.writeHead(500, { 'Content-type': 'text/plain' })
        res.end('Server Error')
    }

})

// we need to create a connection using method listen(), 5000 is often used, we can use a function to dictate what will happen once we have a connection
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`) // we created a variable for the port, but no need

})
