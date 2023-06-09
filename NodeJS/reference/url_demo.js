const url = require('url');

const myUrl = new URL(
    'http://mywebsite.com/hello.html?id=100&status=active'
    );

//Serialized url

console.log(myUrl.href);
console.log(myUrl.href.toString());

//host (root domain)
console.log(myUrl.host);

//hostname (does not give port)
console.log(myUrl.hostname);

//pathname
console.log(myUrl.pathname);

//serialized query
console.log(myUrl.search);

//param object
console.log(myUrl.searchParams);

//add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

//loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));

