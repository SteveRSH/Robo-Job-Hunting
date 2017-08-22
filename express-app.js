const mustacheExpress = require('mustache-express');
const express = require('express');
const data = require('./data');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')
app.use(express.static("public"))

app.get('/', function (req, res) {
  res.render('index.mustache', {users: data.users });
});

app.listen(3001, function () {
  console.log('coding helps solve problems!')
});


















//changing roboHunt into users

// app.listen(3000, function () {
// const body = document.querySelector("body");
// for (i = 0; i < roboHunt.users.length; i++) {
// header += `
//  <div>
//  <p><img src= "${roboHunt.users[i].avatar}" ></img></p>
//   <p id = "name">${roboHunt.users[i].name} </p>
//   <p id = "job">${roboHunt.users[i].job}</p>
//   <p id = "street">${roboHunt.users[i].company}</p>
//
//
//
//   </div>`;
// }


 // body.innerHTML = header;

// })


 // app.get('/', function (req, res) {
 //   res.send('Hello World!');
 // });

 // app.get('/banana', function (req, res) {
 //   res.send('I am not going bananas yet!');
 // });

 // requires and environment setup ...

 // const mustacheExpress = require('mustache-express');
 // app.engine('mustache', mustacheExpress());
 // app.set('views', './views');
 // app.set('view engine', 'mustache');
 //
 // app.get('/', function (req, res) {
 //   res.render('index', { userName: 'You are doing great Steve' })
 // })
 // app.use(express.static('public'))
 //
 //
 // app.listen(3000, function () {
 //   console.log('Successfully started express application!')
 // });
