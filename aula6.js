const { ips, cpfs } = require('./base');

// ^ -> Começa com
// $ -> Termina com

// console.log(cpfs);
// console.log(cpfs.match(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/g));
// console.log(cpfs.match(/\d{3}\.\d{3}\.\d{3}\-\d{2}/g));
console.log(cpfs.match(/(\d{3}\.){2}\d{3}\-\d{2}/g));

// 250 - 255 25[0-5]
// 200 - 249 2[0-4][0-9]
// 100 - 199 1\d{2}
// 10  - 99  [1-9]\d
// 0   - 9   \d

const ipRegExp = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;

// for (let i = 0; i <= 300; i++) {
//   const ip = `${i}.${i}.${i}.${i}`;
//   console.log(ip, ip.match(ipRegExp));
// }

console.log(ips);
console.log(ips.match(ipRegExp));
