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