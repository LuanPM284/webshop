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