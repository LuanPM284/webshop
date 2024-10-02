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