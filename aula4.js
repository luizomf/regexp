const { html } = require('./base');

console.log(html);
console.log(html.match(/<.+>.+<\/.+>/g));  // greedy
console.log(html.match(/<.+?>.+?<\/.+?>/g));  // non-greedy