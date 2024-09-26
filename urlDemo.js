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
