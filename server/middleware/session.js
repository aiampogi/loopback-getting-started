// var loopback = require("loopback");
// // var lusca = require('lusca');

// // module.exports = function(app) {
// //   app.use(loopback.session({
// //     secret: 'abc'
// //     // resave: true,
// //     // saveUninitialized: true
// //   }));

// //   app.use(lusca({
// //     csp: {
// //       policy: {
// //         'default-src': '\'self\''
// //       }
// //     },
// //     xframe: 'SAMEORIGIN',
// //     p3p: 'ABCDEF',
// //     //hsts: {maxAge: 31536000, includeSubDomains: true, preload: true},
// //     xssProtection: true
// //   }));
// // };


// module.exports = function() {
//   return loopback.session({
//     secret: 'abc'
//     // resave: true,
//     // saveUninitialized: true
//   });
// }