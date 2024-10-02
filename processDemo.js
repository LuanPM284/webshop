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