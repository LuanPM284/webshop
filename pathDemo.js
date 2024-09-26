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