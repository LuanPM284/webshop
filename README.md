# LEARN VERSION
## Back end 

Freshshop already owns the frontend part of the project. You must now implement the back-end.

### Must-have features

- All the features of the home page must work

  - Register & sign in/out

  - Client account 

  - Research bar 

  - Newsletter 

  - The shopping cart must work (add / remove / calculate / order)

    

### Nice-to-have features

- All img should be displayed dynamically
- The shop filters are working (sidebar shop)
- Wishlist
- Contact Us

### Miscellanous information
**Do not connect the platform to a payment system**



## Mega Death Bonus

Do the job like a fullstack



## Deliverables
1. Publish your source code on the GitHub repository.
2. Pimp up the readme file:
	- What, Why, When, How, Who.
	- Pending things to do
	- ...

### Steps
1. Download the folder containing the template (clone the repo)
2. Analyze the different template files
3. Create the repository
4. Study the request (What & Why ?)
5. Identify technical challenges (How ?)
6. Create the ReadMe
7. Start coding 

---

## Possible Roadmap

- Vite ??

- Node.js
  - Description: A JavaScript runtime built on Chrome's V8 JavaScript engine, allowing you to build scalable network applications.
  - Learning Resources:
    - Node.js [Documentation](https://nodejs.org/docs/latest/api/documentation.html)
    - Online courses on platforms like Udemy or Coursera.
- Express.js
  - Description: A web application framework for Node.js, designed for building web applications and APIs.
  - Learning Resources:
    - Express.js [Documentation](https://expressjs.com/)
    - Tutorials on YouTube or freeCodeCamp.
- MongoDB
  - Description: A NoSQL database that uses a document-oriented data model, perfect for handling large volumes of unstructured data.
  - Learning Resources:
    - [MongoDB University](https://learn.mongodb.com/)
    - Courses available on platforms like Codecademy and Coursera.

## Notes

### Node js

[Source](https://www.youtube.com/watch?v=32M1al-Y6Ag) used for this set of notes and learning. A video by Traversy Media name "Node.js Crash Course"
--
#### Install

Use the official [website](https://nodejs.org/en) and get the latest and more stable version.

Check version if already installed with terminal: `node --version`

With a classic Node installation we have a terminal where we can write JavaScript code and execute. It will not be used much but it is there.

We start a project by creating a directory and using our code editor to start.

We need a *package.json* file. 

We could create one file and name it that, but we also have access to `npm` (Node Package Manager) so we will use that instead.

`npm init`
- different options will appear, we can interact with them

`npm init -y` 
- -y will skip the options

Next we need to create a entry point. 

We will use *index.js*, once we write inside it we can run it, using Node installed in the machine, by typing `node index.js` or ´node fileName´ no need for the `.js`.

A detail to pay attention to, is since this is not running on a browser de `window` type variable gives us an error.

We instead have a `global` type object that will store several variables. Also have a `process` object
---
#### Modules

An example:
```JS
// a function to generate a random number
function generateRandomNumber() {
    // we remove the decimal with Math.floor, and we will get numvers from 1 to 100.
    // since random gives us a range from 0 to 1
    return Math.floor(Math.random() * 100) + 1;
}
```
The are two ways to interact with modules:
1. Common JS

As an example we created *utils.js*:
```JS
// this goes inside the same file we want to export from
module.exports = generateRandomNumber
```
Inside *index.js*:
```JS
// a variable receives the required file
const generateRandomNumber = require('./utils') // we give the placement

console.log(`Random Number: ${generateRandomNumber()}`) 
// terminal: node index
// output: Random Number: 85
```
We can use other functions, objects, arrays or other types of data from other files. 

Have in mind that if more than one function is being exported it is better to create an object.

```js
function celciusToF(celcius) {
    return (celcius * 9) / 32
}

module.exports = {
    generateRandomNumber,
    celciusToF,
}
```
And we will use:
```js
const { generateRandomNumber, celciusToF } = require('./utils')

// we are then able to use the function outside
console.log(`Celcius to fahrenhiet : ${celciusToF(0)}`)
// ouput: Celcius to fahrenhiet : 0
```
\
2. IS modules (Import/Export syntax)

To start we need to add into *package.json*, just under `"main"` the following:

```JSON
  "type": "module",
```
As example we created *postController.js*:

```JS
// a post controller on a website
const posts = [
    { id: 1, title: 'Post One' },
    { id: 2, title: 'Post Two' }
]
// we can use arrow functions and export diretcly to posts
// to export we can do this:
export const getPosts = () => posts

// or
// we can add at the end as the following:
const getPosts = () => posts
export { getPosts }

//or
// we can export them as default, like in React components
const getPosts = () => posts
export default getPosts

// we can also export other objects outside of default
export const getPostsLength = () => posts.length
```
Inside *index.js* :

```JS
// we use import, and the module we want, with the correct path including the .js
import { getPosts } from './postController.js'

console.log(getPosts())
// output: [ { id: 1, title: 'Post One' }, { id: 2, title: 'Post Two' } ]

// or
// for the default type export we use without {}
import getPosts from './postController.js'

// for other than default
import getPosts, { getPostsLength } from './postController.js'

console.log(`Post Length: ${getPostsLength()}`)
// output: Post Length: 2
```
---
#### For webtype application

We start by creating a *server.js* file.

Normally the following would be done via a framework like *Express* but this video will shows how to work without them.

```JS
// a module, included with Node
import http from 'http'
const PORT = 8000
// method createServer, it takes in a function,two objects a request req and a response res
const server = http.createServer((req, res) => {
    res.write('Hello, World!') // like a feedback
    res.end() // not nedded with a framework
})

//or
// we can have results using only the end() method, the following also works to get a message as feedback for a succeful connection
const server = http.createServer((req, res) => {
    res.end('Hello Word!') // not nedded with a framework
})


// we need to create a connection using method listen(), 5000 is often used, we can use a function to dictate what will happen once we have a connection
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`) // we created a variable for the port, but no need
})
```
On terminal: `node server`

We can open the browser and see the results by entering `localhost:8000`. For this case we will be presented with a message: `Hello, World!`

We an also change the content type using the `setHeader()` method, we need to reset the server in order to see changes.

By using *dev tools* and openning the *network* tab and reload and click on *localhost* we can see the Content-Type: text/html

```JS
// to have an HTML type content
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Hello World!</h1>')
})

//or
// to have a plain text type content
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain')
    res.end('<h1>Hello World!</h1>')
})

```
By using *dev tools* and openning the *network* tab and reload and click on *localhost*.

The status can also be changed on the network tab, if everything works properly a 'Status Code: 200' shoud be display.

We can change it to 404 for exemple, and display a missing page.
```JS
const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html')
    res.statusCode = 404
    res.end('<h1>Hello World!</h1>')
})

//or
//we can shorten the syntax by using a writeHead, ans add to the type we can output. For the example we use JSONs
```
```JS
const server = http.createServer((req, res) => {
    // 500 is a server error, we pass an object
    res.writeHead(500, { 'Content-type': 'application.json' })
    // here we add a JSON
    res.end(JSON.stringify({ 'message': 'Server Error' }))
})

```

**Scripts and NPM modules **

Going inside `package.json` we can add or change the scripts. Useful to add shortcuts.

```JSON
"scripts": {
  "start": "node server.js"
},
```
Now we are able to just write `npm start` to start the server. Other than the work start, dev for example, we will need to use `npm run dev`.

Next intalling [nodemon](https://www.npmjs.com/package/nodemon), a package that allows a faster update on the server allowing for a more dynamic type work.

Where to find [packages](https://www.npmjs.com/).

Install as dev dependencies (not needed for the development evenronment), we use `-D`. ('install' can also be just 'i')

`npm install -D nodemon`

A thing to have in mind is that we don't need to push the new *nodes_modules* directory into github, since we have a new `"devDependencies"` inside *package.json* all we need to do once we start a new project or clone a repos from github is type:`npm intall`

We should create a *.gitignore* and add *node_modules* inside, so the folder is not pushed.

To initiate *nodemon*, we need to change the script. There are more fonctonnalites on the documentations.
```JSON
  "scripts": {
    "start": "nodemon server.js"
  },
```
Now I can work on my project without the need to always restart my server.

---
**Environment variables**

We create a file *.env*, and we make sure to <u>exlude</u> from pushing to gitHub since it often contains API keys or other sensible information. (so inside *.gitignore* it goes!)

For example:

Inside *.env*
```
PORT = 8080
```
We will need to add a flag to the terminal command, in order to call the *.env* file.

Inside *package.json*
```JSON
"scripts": {
  "start": "nodemon --env-file=.env server.js"
},
```
Inside *server.js*

```JS
const PORT = process.env.PORT // using process.env. I can access any variables in the file or the system
```
Once I restart the server, I have port 8080. So it is looking inside the *.env* file.

**Request Object**

Inside Server:
```JS
const server = http.createServer((req, res) => {
    console.log(req.url)
    console.log(req.method)

    res.writeHead(200, { 'Content-type': 'text/html' })
    res.end('<h1>Hello World</h1>')
})

// output, on console: /
//                    GET
```
The `/` will be the URL and a `GET` resquest, as it is always on a webpage (in my case it went to localhost:8000 since nothing else is given). 

Forms are generally a `POST` resquest, there is also `PUT` or `DELETE` resquests depending on the different behaviour we are looking for.

If I write *localhost:8000/about* I will have on my console `/about
GET` but no difference in page, since we do not have anything set up.

**For this tutorial, we will use Postman**

With Postman it will be easier to work with API's and requests. An test frontend type behaviout without having to create one.

For a router.

Inside `server.js`:
```JS
// creating a router, a way to direct users to a specific page using the type of url given
if (req.url === '/') { // the homepage
    res.writeHead(200, { 'Content-type': 'text/html' })
    res.end('<h1>Homepage</h1>')
} else if (req.url === '/about') { // PORT/about
    res.writeHead(200, { 'Content-type': 'text/html' })
    res.end('<h2>About</h2>')
} else { // any other
    res.writeHead(404, { 'Content-type': 'text/html' })
    res.end('<h1>404 Not Found!</h1>')
}
```
Now, if I want only one type of request method I would do the following:

```JS
    try {
        // Check if GET request
        if (req.method === 'GET') {
            if (req.url === '/') {
                res.writeHead(200, { 'Content-type': 'text/html' })
                res.end('<h1>Homepage</h1>')
            } else if (req.url === '/about') {
                res.writeHead(200, { 'Content-type': 'text/html' })
                res.end('<h2>About</h2>')
            } else {
                res.writeHead(404, { 'Content-type': 'text/html' })
                res.end('<h1>404 Not Found!</h1>')
            }
        } else {
          // we create a new error
            throw new Error('Method not allowed')
        }
    } catch (error) {
      // and we send a 500 that is considered a server error
        res.writeHead(500, { 'Content-type': 'text/plain' })
        res.end('Server Error')
    }
```

**Loading files**

In or case, we are just sending a simple message. But for a more complete page more files will be sent from the server.

We will use the *file system* module. There are multiple ways to do this,
Read/Write, an asynchronos callback, a synchronos version and promise version.

Here the promise version is used:

```JS
import fs from 'fs/promises'
import url from 'url' // to get path + filename
import path from 'path' // to get path

// Get current path ; present in classic JS
__filename // will give me the current file name with the path
__dirname // will give me the current path of the current file

// normally it can't be used in an environment, but there is a module that alllows the creation of our own

const __filename = url.fileURLToPath(import.meta.url) // "import.meta.url" gives us the file url, but we only want the path so "fileURLtoPath" does that
const __dirname = path.dirname(__filename)// also uses a module called path
```

As an example of a router using the file system:
```JS
// make sure the function is async
const server = http.createServer(async (req, res) => {
    try {
        // Check if GET request
        if (req.method === 'GET') {
          // create variable to use fs (file system)
            let filePath
            if (req.url === '/') {
              // here we will show where to get the files, starting with the path "__dirname" folowed by the directory and the file
                filePath = path.join(__dirname, 'public', 'index.html')
            } else if (req.url === '/about') {
              // the join is a method for concatenate the paths
                filePath = path.join(__dirname, 'public', 'about.html')
            } else {
                throw new Error('Not found')
            }
            // here we put att possible options inside data, that awaits the promise, being async no need to wait for one to finish
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
```
**Build an API**

We start by creating a new file *serve2.js* in orde for all to work properly, change the `script`, in *package.json* where it says *server.js* to *server2.js*.

```JS
// we import `CreateServer` from `http`
import { createServer } from 'http'
// we cann upon the .env file
const PORT = process.env.PORT
//create a simple JSON file
const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Jim Doe' }
]

// create a server, 
const server = createServer((req, res) => {
    if (req.url === '/api/users' && req.method === 'GET') {
        res.setHeader('Content-type', 'application/json')
        res.write(JSON.stringify(users))
        res.end() // not forget or no work
    } else {
        res.setHeader('Content-type', 'application/json')
        res.statusCode = 404 // a convention
        res.write(JSON.stringify({ message: 'Route not Found' }))
        res.end()
    }
})

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
```
Imagine we can to be able to call a single user from our API, in that case we will need to create a condition and specify the type of path. With Node is not as easy as with Express

```JS
// /\/api\/users\/([0-9+])/ ; this to get ./api/users/1
else if (req.url.match(/\/api\/users\/([0-9+])/) && req.method === 'GET') {
    res.setHeader('Content-type', 'application/json')
    res.write(JSON.stringify({ id: 1, name: 'John Doe' }))
    res.end()
}
```
Now if we want something more organized and an error message for an user not found.
```JS
else if (req.url.match(/\/api\/users\/([0-9+])/) && req.method === 'GET') {
    // we slit the third
    const id = req.url.split('/')[3]
    // use function find that gets a callback and return a true if exists
    const user = users.find((user) => user.id === parseInt(id))
    if (user) {
        res.setHeader('Content-type', 'application/json')
        res.write(JSON.stringify(user))
        res.end()
    } else {
        res.setHeader('Content-type', 'application/json')
        res.statusCode = 404
        res.write(JSON.stringify({ message: 'User not Found' })) // use not found
        res.end()
    }
}
// ./api/users/1 ok
// ./api/users/2 ok
// ./api/users/100 user not found
```

**Midleware**

Modules/functions that have access to the `req` and `res` objects. Change `req`,`res`.

Used to clean code or avoid repetitions.

This example we have a `logger()` that displays on the console/terminal the method and the path everytime a page is called.


```JS
import { createServer } from 'http'

const PORT = process.env.PORT
const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Jim Doe' }
]

// Logger midleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next() // we need to call next
}

const server = createServer((req, res) => {
    logger(req, res, () => {
        if (req.url === '/api/users' && req.method === 'GET') {
            res.setHeader('Content-type', 'application/json')
            res.write(JSON.stringify(users))
            res.end()
        } else if (req.url.match(/\/api\/users\/([0-9+])/) && req.method === 'GET') {
            const id = req.url.split('/')[3]
            const user = users.find((user) => user.id === parseInt(id))
            res.setHeader('Content-type', 'application/json')
            if (user) {
                res.write(JSON.stringify(user))
            } else {
                res.statusCode = 404
                res.write(JSON.stringify({ message: 'User not Found' }))
            }
            res.end()
        } else {
            res.setHeader('Content-type', 'application/json')
            res.statusCode = 404
            res.write(JSON.stringify({ message: 'Route not Found' }))
            res.end()
        }
    })
})

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
```

Using Handlers we can simplify the routing and avoid mistakes by creating functions.
```JS
import { createServer } from 'http'

const PORT = process.env.PORT || 8080 // Use 8080 as a fallback
const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Jim Doe' }
]

// Logger middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
}

// JSON middleware
const jsonMiddleware = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json')
    next()
}

// Route handler for GET /api/users
const getUsersHandler = (req, res) => {
    res.end(JSON.stringify(users))
}

// Route handler for GET /api/users/:id
const getUserByIdHandler = (req, res) => {
    const id = req.url.split('/')[3]
    const user = users.find((user) => user.id === parseInt(id))
    if (user) {
        res.end(JSON.stringify(user))
    } else {
        res.statusCode = 404
        res.end(JSON.stringify({ message: 'User not Found' }))
    }
}

// Route handler for POST /api/users
const createUserHandler = (req, res) => {
    let body = ''
    // Listen for data (the envent is called data)
    req.on('data', (chunk) => {
        body += chunk.toString()
    })
    req.on('end', () => {
        const newUser = JSON.parse(body)
        users.push(newUser)
        res.statusCode = 201 // susseceful 
        res.end(JSON.stringify(newUser))
    })
}

// Not found handler
const notFoundHandler = (req, res) => {
    res.statusCode = 404
    res.end(JSON.stringify({ message: 'Route not Found' }))
}

// a somewhat router/switch

const server = createServer((req, res) => {
    logger(req, res, () => {
        jsonMiddleware(req, res, () => {
            if (req.url === '/api/users' && req.method === 'GET') {
                getUsersHandler(req, res)
            } else if (req.url.match(/^\/api\/users\/([0-9]+)$/) && req.method === 'GET') {
                getUserByIdHandler(req, res)
            } else if (req.url === '/api/users' && req.method === 'POST') {
                createUserHandler(req, res)
            } else {
                notFoundHandler(req, res)
            }
        })
    })
})

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
```
**Fyle System modules**

[Documentation](https://nodejs.org/docs/latest/api/fs.html)

There are several ways to mess with the file system, here we will see read,write and append.

For reading:

In *fsDemo.js*:
```JS
// for the read
import fs from 'fs'

// readFile() - callback, Asynchronous version
// takes a path, incoding , callback
fs.readFile('./test.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data)
})

// readFileSunc() - Synchronous version (not recommended for big files, since it blocks all else)
const data = fs.readFileSync('./test.txt', 'utf8')
console.log(data)

```
For the promises version of reading, the async/await wil be used for the write and append:

```JS
import fs from 'fs/promises'

// readFile() - Promise .then()
fs.readFile('./test.txt', 'utf8')
    .then((data) => console.log(data))
    .catch((err) => console.log(err))

// readFile() - async/await
const readFile = async () => {
    try {
        const data = await fs.readFile('./test.txt', 'utf8')
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

readFile() // call upon the function
```
For writting and appendding:
```JS
// writeFile() - takes path and what to write
// it overwrites into the files
const writeFile = async () => {
    try {
        await fs.writeFile('./test.txt', 'Hello, I am writting to this file')
        console.log('File Written to ')
    } catch (error) {
        console.log(error)
    }
}

// appendFile()
const appendFile = async () => {
    try {
        await fs.appendFile('./test.txt', '\nThis is appended text')
        console.log('File appended to')
    } catch (error) {
        console.log(error)
    }
}

writeFile()
appendFile()
readFile()

// output: 
// File appended to
// File Written to
// Hello, I am writting to this file
// This is appended text
```
On terminal: 
```sh
node fsDemo.js

```
**Path module**

[Documentation](https://nodejs.org/api/path.html)

In *pathDemo.js*:
```JS
import path, { dirname } from 'path'
import url from 'url'

const filePath = '.dir1/dir2/text.txt'

// basename() - gives us the file name
console.log(path.basename(filePath))
// output: text.txt

// dirname - gives us the file path
console.log(path.dirname(filePath))
// output: .dir1/dir2

// extname() - gives us the file extenteion
console.log(path.extname(filePath))

// ouput: .txt

// parse() - gives us object with all the information
console.log(path.parse(filePath))
// output:
// {
// root: '',
// dir: '.dir1/dir2',
// base: 'text.txt',
// ext: '.txt',
// name: 'text'
// }


// if standart JavaScript we have access to __filename and __dirname
// buth without we need to create our own, using the url module

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log(__filename, __dirname)
// output:
// D:\Code\BeCode\webshop\pathDemo.js
// D:\Code\BeCode\webshop

// join() - linux: user / brad windows: user \ brad
// join corrects the path or constructs one
const filePath2 = path.join(__dirname, 'dir1', 'dir2', 'test.txt')
console.log(filePath2)
// output: D:\Code\BeCode\webshop\dir1\dir2\test.txt

// resolve() - same idea as join but with absolute paths
const filePath3 = path.resolve(__dirname, 'dir1', 'dir2', 'test.txt')
console.log(filePath3)
// output: D:\Code\BeCode\webshop\dir1\dir2\test.txt
```
**OS modules**
[Documentation](https://nodejs.org/api/os.html)

Gives us information about out system.

In *osDemo.js*:
```JS
import os from 'os'

// useInfo()
console.log(os.userInfo())
// output:
// {
//     uid: -1,
//     gid: -1,
//     username: 'MSI MSI',
//     homedir: 'C:\\Users\\MSI MSI',
//     shell: null
// }

console.log(os.userInfo().username)
// output: MSI MSI

// totalmem() - memory in bytes
console.log(os.totalmem())
// output: 17096101888

// freemen()
console.log(os.freemem())
// output: 8157605888

//cpus() - gives an array for every core of system
console.log(os.cpus())
// output:
// [
//     {
//       model: 'Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz',
//       speed: 2808,
//       times: {
//         user: 40670640,
//         nice: 0,
//         sys: 34102828,
//         idle: 395507187,
//         irq: 5373234
//       }
//     },
//     {
//       model: 'Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz',
//       speed: 2808,
//       times: {
//         user: 32520843,
//         nice: 0,
//         sys: 15613250,
//         idle: 422146328,
//         irq: 785171
//       }
//     },
//     {
//       model: 'Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz',
//       speed: 2808,
//       times: {
//         user: 51632500,
//         nice: 0,
//         sys: 24173640,
//         idle: 394474296,
//         irq: 468312
//       }
//     },
//     {
//       model: 'Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz',
//       speed: 2808,
//       times: {
//         user: 37487031,
//         nice: 0,
//         sys: 15165578,
//         idle: 417627812,
//         irq: 237890
//       }
//     },
//     {
//       model: 'Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz',
//       speed: 2808,
//       times: {
//         user: 41357000,
//         nice: 0,
//         sys: 22082140,
//         idle: 406841281,
//         irq: 505468
//       }
//     },
//     {
//       model: 'Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz',
//       speed: 2808,
//       times: {
//         user: 30923437,
//         nice: 0,
//         sys: 14237250,
//         idle: 425119734,
//         irq: 316625
//       }
//     },
//     {
//       model: 'Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz',
//       speed: 2808,
//       times: {
//         user: 40147484,
//         nice: 0,
//         sys: 18875437,
//         idle: 411257515,
//         irq: 421093
//       }
//     },
//     {
//       model: 'Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz',
//       speed: 2808,
//       times: {
//         user: 40071093,
//         nice: 0,
//         sys: 17332312,
//         idle: 412877031,
//         irq: 292203
//       }
//     }
//   ]
```
**URL modules**

[Documentation](https://nodejs.org/api/url.html)

In *urlDemo.js*
```JS
import url from 'url'

const urlString = 'https://www.goole.com/search?q=hello+world'

// URL Object
const urlObj = new URL(urlString)

console.log(urlObj)
// output:
// URL {
//     href: 'https://www.goole.com/search?q=hello+world',
//     origin: 'https://www.goole.com',
//     protocol: 'https:',
//     username: '',
//     password: '',
//     host: 'www.goole.com',
//     hostname: 'www.goole.com',
//     port: '',
//     pathname: '/search',
//     search: '?q=hello+world',
//     searchParams: URLSearchParams { 'q' => 'hello world' },
//     hash: ''
//   }

// format() - takes an object and makes it back into a string
console.log(url.format(urlObj))
// output: https://www.goole.com/search?q=hello+world

// import.meta.url - file URL -a special variable
console.log(import.meta.url)
// output: file:///D:/Code/BeCode/webshop/urlDemo.js
// the file protocol and than te path

// fileURMToPath() - convert to a regular path
console.log(url.fileURLToPath(import.meta.url))
// output: D:\Code\BeCode\webshop\urlDemo.js

// we can also extract specific parts of the object, here the querry for the search
console.log(urlObj.search)
// output: ?q=hello+world

const params = new URLSearchParams(urlObj.search)
console.log(params)
// output: URLSearchParams { 'q' => 'hello world' }

// if I want just the values, we use a get() method
console.log(params.get('q'))
// output: hello world

// adding to the object
params.append('limit', '5')
console.log(params)
// output: URLSearchParams { 'q' => 'hello world', 'limit' => '5' }

// deleting from object
params.delete('limit')
console.log(params)
// output: URLSearchParams { 'q' => 'hello world' }
```
**Crypto module**

[Documentation](https://nodejs.org/api/crypto.html)

In *cryptoDemo.js*:
```JS
import crypto from 'crypto'

// createHash() - a way to scrumble information
const hash = crypto.createHash('sha256')
hash.update('password1234')
// console.log(hash.digest('hex'))
// output: b9c950640e1b3740e98acb93e669c65766f6670dd1609ba91ff41052ba48c6f3

// randomBytes()
// create high cryptograph type data - always different, could be used for user id ofr example
crypto.randomBytes(16, (err, buf) => {
    if (err) throw err
    // console.log(buf.toString('hex'))
})
// output:
// a21164da5783ecb9b359792a0cd44dbb
// de2e76263d68c38475ce4e28ae742069
// b01e1d9a468bf44b84b6b1ae4e883da4
// ...

// incrypt text to cipher text and vise-versa
//createCipheriv() & createDecipheriv() // 3 things are needed
const algorithm = 'aes-256-cbc'
const key = crypto.randomBytes(32) // random string of 32
const iv = crypto.randomBytes(16) // random string of 16

const cipher = crypto.createCipheriv(algorithm, key, iv)
let encrypted = cipher.update('Hello, this is a secret meassage', 'utf8', 'hex') // update(what I want to incrypt, incoding type, hex)
encrypted += cipher.final('hex')
console.log(encrypted)
// output: 78fd4683561235c709e9dc82ae32a4c2d7e91c1072d3e8d3829c62f43d5401d7810d7c91c6b0bd8374aacf121b667f63

const decipher = crypto.createDecipheriv(algorithm, key, iv)
let decrypted = decipher.update(encrypted, 'hex', 'utf8') // update(what I want to incrypt, incoding type, hex)
decrypted += decipher.final('utf8')
console.log(decrypted)
// output:
//c221f2a862ba17661083a30f87fea918903cbc1fd70903cbd3b475de7d68ff990f6717b8436bcb973e495a9bbbfd54aa
// Hello, this is a secret meassage
```
**Event modules**

[Documentation](https://nodejs.org/api/events.html)

```JS
import { EventEmitter } from 'events'

// good for runtime applications

const myEmitter = new EventEmitter()

function greetHandler() {
    console.log('Hello, world')
}

function goodbyeHandler() {
    console.log('Goodbye, world')
}

// Register event listeners
myEmitter.on('greet', greetHandler)
myEmitter.on('goodbye', goodbyeHandler)

// Emit events
myEmitter.emit('greet')
myEmitter.emit('goodbye')
//output:
// Hello, world
// Goodbye, world

// we can also add arguments
function greetHandler(name) {
    console.log('Hello ' + name)
}

function goodbyeHandler(name) {
    console.log('Goodbye ' + name)
}

myEmitter.on('greet', greetHandler)
myEmitter.on('goodbye', goodbyeHandler)

myEmitter.emit('greet', 'John')
myEmitter.emit('goodbye', 'John')
// output:
// Hello John
// Goodbye John

// Error handling
myEmitter.on('error', (err) => {
    console.log('Error Occured: ', err)
})

// Simulate error
myEmitter.emit('error', new Error('Something went wrong'))
// output:
// Hello John
// Goodbye John
// Error Occured:  Error: Something went wrong
//     at file:///D:/Code/BeCode/webshop/eventsDemo.js:50:25
//     at ModuleJob.run (node:internal/modules/esm/module_job:222:25)
//     at async ModuleLoader.import (node:internal/modules/esm/loader:316:24)
//     at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:123:5)
```
**Process module**

[Documentation](https://nodejs.org/api/process.html)

In *processDemo.js*
```JS
// this gives us access to an object with many processes, this can allow us to  create CLI and add argv
// console.log(process)

// argv 
console.log(process.argv) // the path to node, and the file
// output:
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'D:\\Code\\BeCode\\webshop\\processDemo.js'
// ]

// we can run the file : node processDemo.js
// and add to the argv, being it an array we can call to it and execute CLI commands

// example
// node processDemo.js -s
// output:
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'D:\\Code\\BeCode\\webshop\\processDemo.js',
//   '-s'
// ]

// access to the array
console.log(process.argv[2])
// output: -s

// I can than say, if(process.argv == -s) then ...


// process.env
// console.log(process.env)
// output: a lot!!!, of stuff from the system

console.log(process.env.USERDOMAIN)
// output: LUAN-PC


// pid - id of node.js process
console.log(process.pid)
// output: 14924

// cwd - current working directory
console.log(process.cwd())
// output: D:\Code\BeCode\webshop

// title
console.log(process.title)

// memoryUsage()
console.log(process.memoryUsage())
// output:
// {
//     rss: 24743936,
//     heapTotal: 4935680,
//     heapUsed: 4438088,
//     external: 1711220,
//     arrayBuffers: 12298
// }

// uptime() - time from runnin the command to the script executing
console.log(process.uptime())

// exit() - 0 for a success and ends the process and 1 to error
process.on('exit', (code) => { // this should fire off when I run process.exit(0)
    console.log(`About to exit with code: ${code}`)
})

process.exit(0)
// output: About to exit with code: 0
```
---
### Express js
[Documentation](https://expressjs.com/)

Create a directory for the project.

Intall express with the terminal by typing:

`npm i express`

! Remember to exclude the */node_modules* from the git repository by adding it to *.gitignore* and the *.env*.

#### Basic Server

Create the file *server.js*. Or another type of name, since it will depend on the kind of project it is, an app for example would be better to have *app.js*.

A simple example, and firt commands using Express and comparing to Node.

In *server.js*:

```JS
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
```

We still have a problem that the server needs to be reset for every change that is made. To solve the issue we can use the following:

```JS
```
```JS
```
```JS
```
```JS
```
```JS
```