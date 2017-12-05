/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 46);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mongoose-paginate");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(5);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("mix-utils");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("async");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Invoke 'strict' JavaScript mode


// Set the 'development' environment configuration object

module.exports = {
    port: {
        www: 8080,
        api: 8090,
        admin: 80
    },
    db: 'mongodb://localhost/pinterest',
    secret: '78ad3c62b2f44ec3b65f09ebf1236a6c3c56656d6593b39c250646ee375d2075',
    log: {
        collection: 'logs',
        level: 'info'
    },

    facebook: {
        clientID: '687615191258150',
        clientSecret: '4f09bd8ee3a6cff3711200f9ef2e1045',
        callbackURL: 'http://localhost:8080/auth/facebook/callback'
    },

    twitter: {
        clientID: 'XVuGpFDcCIfIVZfhqkMiNjSuu',
        clientSecret: '0wp1Q50DPjtlqX8LtgoBWCqRxpJtxKXwpmmplwhYDOEMJzXPGA',
        callbackURL: 'http://localhost:8080/auth/twitter/callback'
    },

    tumblr: {
        clientID: 'sC2hNnCfMHYFh84vEWB6icAuSkFdupIBo1cdrpGMMCPHBvskEP',
        clientSecret: 'ww3bd7R4o5LtOBFvTwnH0MkUx3UMGQuWLrm3LxCUYO5j3vUsuj',
        callbackURL: 'http://localhost:8080/auth/tumblr/callback'
    },
    google: {
        clientID: 'Google Application ID',
        clientSecret: 'Google Application Secret',
        callbackURL: 'http://localhost:8080/oauth/google/callback'
    },

    mail: {
        sparkpost: {
            ApiKey: "791214ab9be4177dee42f5b84e91e25f371348ae"
            // mail send form: '', // required domain config
        }
    }

};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(0),
    mongoosePaginate = __webpack_require__(1);

module.exports = mongoose.model('member', new mongoose.Schema({
    uid: {
        type: String,
        index: true,
        unique: true
    },
    mail: {
        type: String,
        index: true,
        unique: true
    },
    pwd: String,
    fn: String,
    ln: String,
    bth: Date,
    sex: Number,
    //avata
    avt: String,
    //cover
    cv: String,
    //website   
    www: String,
    bio: String,
    // twitter
    tw: {},
    // facebook
    fb: {},
    // github
    git: {},
    // google
    gg: {},
    stt: {
        type: Number,
        default: 0
    },

    crt: {
        type: Date,
        default: Date.now
    }

}, { collection: 'members' }).plugin(mongoosePaginate));

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(0);
var paginate = __webpack_require__(1);
var shortid = __webpack_require__(10);
var schema = new mongoose.Schema({
    // User Id
    // User Id
    _uid: mongoose.Schema.Types.ObjectId,

    _cid: mongoose.Schema.Types.ObjectId,
    // access_token
    tk: String,
    // board
    br: String,
    // tl
    tl: String,
    // note
    nt: String,
    // image_url
    img: String,

    // link redirect page target
    link: String,
    // link pinterest
    url: String,

    stt: {
        type: Number,
        default: 0
    },
    rt: {
        type: Number,
        default: 0
    },
    at: {
        type: Date,
        default: Date.now
    },
    crt: {
        type: Date,
        default: Date.now
    }

}, { collection: 'posts' }).plugin(paginate);

module.exports = mongoose.model('post', schema);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("mix-hash");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("hapi");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("boom");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("hapi-bodyparser");

/***/ }),
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(0),
    mongoosePaginate = __webpack_require__(1);

var schema = new mongoose.Schema({
    // app id
    _uid: mongoose.Schema.Types.ObjectId,

    _aid: mongoose.Schema.Types.ObjectId,

    user: {},
    access_token: {
        type: String,
        unique: true,
        index: true
    },
    msg: {
        type: String,
        default: null
    },
    rt: {
        type: Number,
        default: 1
    },

    stt: {
        type: Number,
        default: 1
    },

    at: {
        type: Date,
        default: Date.now
    },

    crt: {
        type: Date,
        default: Date.now
    }

}, { collection: 'chanels' }).plugin(mongoosePaginate);

module.exports = mongoose.model('chanel', schema);

// user = {
//     id: user id pinterest,
//     br: boards,
//     flow: followers,
//     flowing : following,
//     pin: pins ,
//     fn: rusername,
//     img: img,
//     ps: cStart, // post start
//     pd: cPending // post pending
//   }

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("joi");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("core-js/library/web/timers");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(0);

module.exports = mongoose.model('following', new mongoose.Schema({

    _uid: mongoose.Schema.Types.ObjectId,
    _tid: mongoose.Schema.Types.ObjectId, // target id == token id member
    // user: {},
    // token
    tk: String,
    lnk: String, // link following
    stt: {
        type: Number,
        default: 0
    },
    rt: {
        type: Number,
        default: 0
    },
    at: {
        type: Date,
        default: Date.now
    },
    crt: {
        type: Date,
        default: Date.now
    }

}, {
    collection: 'followings'
}));

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("request");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(0);
var mongoosePaginate = __webpack_require__(1);

var rssSchema = new mongoose.Schema({
  _uid: mongoose.Schema.Types.ObjectId,
  _cid: mongoose.Schema.Types.ObjectId,
  access_token: String,
  link: String,
  //Description // 
  desc: String,
  // chanel / boad insert
  board: String,
  // Template
  tmp: String,
  //  số lần thực thi qua rss
  rt: { type: Number, default: 0 },
  // Status 1: activate | 0: pause
  stt: { type: Number, default: 1 },
  // 
  // tt: { type: Date, default: Date.now },
  crt: { type: Date, default: Date.now },

  at: { type: Date, default: Date.now }

}, { collection: "rss" }).plugin(mongoosePaginate);

module.exports = mongoose.model("rss", rssSchema);

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("inert");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(0),
    moment = __webpack_require__(8),
    path = __webpack_require__(12),
    _ = __webpack_require__(3),
    Hash = __webpack_require__(9),
    async = __webpack_require__(4),
    config = __webpack_require__(2),
    Joi = __webpack_require__(17),
    Boom = __webpack_require__(13),
    Member = __webpack_require__(6);

module.exports = [{
    method: 'POST',
    path: '/login',
    config: {
        // Use the 'session' auth strategy to allow bell to handle the oauth flow.
        //auth: { mode: 'try' },
        //auth: 'session',
        auth: false,
        //plugins: { 'hapi-auth-cookie': { redirectTo: false } },
        handler: function handler(request, reply) {
            // Here we take the profile that was kindly pulled in
            // by bell and set it to our cookie session.
            // This will set the cookie during the redirect and
            // log them into your application.

            //  console.log(request.payload);

            if (!request.payload.uid || !request.payload.pwd) {
                reply({ msg: 'Missing username or password', stt: 0 });
            } else {
                var _pwd = Hash.sha256(request.payload.pwd);

                var _uid = request.payload.uid || request.payload.mail;
                Member.findOne({ uid: _uid, pwd: _pwd }, function (err, doc) {
                    if (doc) {

                        if (doc.stt == 0) {
                            return reply({ stt: 0, msg: "Your account needs to be activated" });
                        } else {
                            //request.auth.session.set(doc);
                            request.cookieAuth.set(doc);
                            // User is now logged in, redirect them to their account area
                            return reply({ stt: 1, msg: "Login successfuly!" });
                        }
                    } else {
                        reply({ msg: 'Invalid username or password', stt: 0 });
                    }
                });
            }
        }
    }
},
// --------------Register----------------

{
    method: 'POST',
    path: '/register',
    config: {
        // Use the 'session' auth strategy to allow bell to handle the oauth flow.
        //auth: { mode: 'try' },
        //auth: 'session',
        auth: false,
        //plugins: { 'hapi-auth-cookie': { redirectTo: false } },
        handler: function handler(request, reply) {
            // Here we take the profile that was kindly pulled in
            // by bell and set it to our cookie session.
            // This will set the cookie during the redirect and
            // log them into your application.

            //  console.log(request.payload);

            if (!request.payload.uid || !request.payload.pwd) {
                reply({ msg: 'Missing username or password', stt: 0 });
            } else {
                var _pwd = Hash.sha256(request.payload.pwd);
                var _uid = request.payload.uid || request.payload.mail;
                Member.findOne({ uid: _uid }, function (err, doc) {
                    if (doc) {
                        return reply({ stt: -1, msg: "Email has been registered" });
                    } else {
                        var _obj = new Member({
                            fn: request.payload.fn,
                            ln: request.payload.ln,
                            pwd: _pwd,
                            uid: _uid,
                            mail: _uid,
                            stt: 1 // set 0 not active
                        }).save(function (err, doc) {
                            return reply({ stt: 1, msg: "Congratulations on your successful registration" });
                        });
                    }
                });
            }
        }
    }
},

// Use the 'twitter' authentication strategy to protect the
// endpoint handling the incoming authentication credentials.
// This endpoints usually looks up the third party account in
// the database and sets some application state (cookie) with
// the local application account information.
{
    method: ['GET', 'POST'], // Must handle both GET and POST
    path: '/auth/twitter', // The callback endpoint registered with the provider
    config: {
        auth: 'twitter',
        handler: function handler(request, reply) {

            if (!request.auth.isAuthenticated) {
                return reply('Authentication failed due to: ' + request.auth.error.message);
            }

            request.cookieAuth.set(request.auth.credentials.profile);

            // Perform any account lookup or registration, setup local session,
            // and redirect to the application. The third-party credentials are
            // stored in request.auth.credentials. Any query parameters from
            // the initial request are passed back via request.auth.credentials.query.
            return reply.redirect('/');
        }
    }
},

// Get credentials info

{
    method: ['GET', 'POST'],
    path: '/auth/session',
    config: {
        auth: {
            strategy: 'session',
            mode: 'try'
        },

        handler: function handler(request, reply) {

            if (request.auth.isAuthenticated) {
                var auth = request.auth.credentials;
                reply({
                    session: {
                        id: auth._id,
                        user_id: auth.uid,
                        mail: auth.mail,
                        fn: auth.fn,
                        ln: auth.ln,
                        avt: auth.avt,
                        cv: auth.cv,
                        name: [auth.fn, auth.ln].join(' ')
                    },
                    token: '',
                    authenticated: request.auth.isAuthenticated
                });
            } else {
                reply({
                    session: null,
                    authenticated: false
                });
            }
        }
    }
},

// This route is used to the logout the user.  This will **not**
// logout the user from the provider they used to login.

{
    method: 'GET',
    path: '/logout',

    config: {
        auth: {
            strategy: 'session',
            mode: 'try'
        },
        handler: function handler(request, reply) {
            // Clear the cookie
            //request.auth.session.clear();
            request.cookieAuth.clear();
            return reply.redirect('/');
        }
    }
}];

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Invoke 'strict' JavaScript mode


// http://www.bigeng.io/oauth-authentication-and-session-management-in/
// https://github.com/adambrault/hapi-bell-twitter-cookie/blob/master/index.js


// Load the module dependencies

var Mustache = __webpack_require__(25),
    cookie = __webpack_require__(26),
    bell = __webpack_require__(27),
    parser = __webpack_require__(14),
    vision = __webpack_require__(28),
    seo = __webpack_require__(29),
    crumb = __webpack_require__(30),
    session = __webpack_require__(31),

// s3 = require('hapi-s3-uploader'),
config = __webpack_require__(2);

module.exports = function (server, routes) {

    server.register([{
        register: session,
        options: {
            cookie: {
                // isSecure: false,
                path: '/'
            }
        }
    }, {
        register: cookie
    }, {
        register: bell
    }, {
        register: parser
    }, {
        register: vision
    }], function (err) {

        // Register Mustache Templates rendering 
        server.views({
            engines: {
                html: {
                    compile: function compile(template) {
                        Mustache.parse(template);
                        return function (context) {
                            return Mustache.render(template, context);
                        };
                    }
                }
            },
            //relativeTo: __dirname,
            path: './views'
        });

        //Setup the session strategy
        server.auth.strategy('session', 'cookie', {
            cookie: 'sid',
            password: config.secret, //Use something more secure in production
            //redirectTo: '/login', //If there is no session, redirect here
            appendNext: true,
            isSecure: false //Should be set to true (which is the default) in production
        });

        //Setup the social Twitter login strategy
        server.auth.strategy('twitter', 'bell', {
            provider: 'twitter',
            password: config.secret, //Use something more secure in production
            clientId: config.twitter.clientID,
            clientSecret: config.twitter.clientSecret,
            isSecure: false //Should be set to true (which is the default) in production
        });

        //Setup the social facebook login strategy
        server.auth.strategy('facebook', 'bell', {
            provider: 'facebook',
            password: config.secret, //Use something more secure in production
            clientId: config.facebook.clientID,
            clientSecret: config.facebook.clientSecret,
            isSecure: false //Should be set to true (which is the default) in production
        });

        //Setup the social google login strategy
        server.auth.strategy('google', 'bell', {
            provider: 'google',
            password: config.secret, //Use something more secure in production
            clientId: config.google.clientID,
            clientSecret: config.google.clientSecret,
            isSecure: false //Should be set to true (which is the default) in production
        });

        server.route(routes);
    });
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("mustache");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("hapi-auth-cookie");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("bell");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("vision");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("hapi-seo");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("crumb");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("hapi-server-session");

/***/ }),
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/keys");

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(0),
    mongoosePaginate = __webpack_require__(1);

var schema = new mongoose.Schema({
    _uid: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        index: true
    },
    key: {
        type: String,
        unique: true,
        index: true
    },
    serect: String,

    img: String,

    redirect: String,

    stt: {
        type: Number,
        default: 0
    },
    crt: {
        type: Date,
        default: Date.now
    }

}, { collection: 'apps' }).plugin(mongoosePaginate);

module.exports = mongoose.model('app', schema);

/***/ }),
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var Hapi = __webpack_require__(11),
    path = __webpack_require__(12),
    mongoose = __webpack_require__(0),
    _ = __webpack_require__(3),
    config = __webpack_require__(2);

var server = new Hapi.Server({
    connections: {
        router: {
            isCaseSensitive: true,
            stripTrailingSlash: true
        }
    }
});

// var fs = require('fs');
// var tls = {
//     key: fs.readFileSync('apache-selfsigned.key'),
//     cert: fs.readFileSync('apache-selfsigned.crt')
// };

// server.connection({ host: 'localhost', port: 443, tls: tls });

server.connection({ port: config.port.admin, host: 'localhost', routes: { cors: true } });

server.state('data', {
    ttl: null,
    isSecure: true,
    isHttpOnly: true,
    encoding: 'base64json',
    clearInvalid: false, // remove invalid cookies
    strictHeader: true // don't allow violations of RFC 6265
});

server.register({ register: __webpack_require__(22) }, function (err) {
    if (err) throw err;

    server.route([{
        method: 'GET',
        path: '/admin/js/{file*}',

        handler: {
            directory: {
                path: './admin/js'
            }
        }
    }, {
        method: 'GET',
        path: '/admin/css/{file*}',
        handler: {
            directory: {
                path: './admin/css'
            }
        }

    }]);
});

var routes = _.concat(__webpack_require__(23), __webpack_require__(47));

__webpack_require__(24)(server, routes);

server.start(function (err) {
    if (err) {
        throw err;
    }
    // Create a new Mongoose connection instance
    mongoose.Promise = global.Promise;
    global.db = mongoose.connect(config.db, { useMongoClient: true, promiseLibrary: global.Promise });

    console.log('Server running at: ' + server.info.uri);
});

// server.register({ register: require('blipp'), options: {} }, function (err) {
//     server.start((err) => {
//         if (err) {
//             throw err;
//         }
//         // Create a new Mongoose connection instance
//         mongoose.Promise = global.Promise;
//         global.db = mongoose.connect(config.db, { useMongoClient: true, promiseLibrary: global.Promise });

//         // console.log(`Server running at: ${server.info.uri}`);
//     });

// });

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _keys = __webpack_require__(36);

var _keys2 = _interopRequireDefault(_keys);

var _stringify = __webpack_require__(48);

var _stringify2 = _interopRequireDefault(_stringify);

var _from = __webpack_require__(49);

var _from2 = _interopRequireDefault(_from);

var _assign = __webpack_require__(50);

var _assign2 = _interopRequireDefault(_assign);

var _extends = _assign2.default || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _url = __webpack_require__(51);

var _timers = __webpack_require__(18);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return (0, _from2.default)(arr); } }

// Invoke 'strict' JavaScript mode
"use strict";

var Boom = __webpack_require__(13),
    mongoose = __webpack_require__(0),
    Member = __webpack_require__(6),
    moment = __webpack_require__(8),
    Post = __webpack_require__(7),
    Pinterest = __webpack_require__(37),
    Chanel = __webpack_require__(16),
    Following = __webpack_require__(19),
    Board = __webpack_require__(52),
    async = __webpack_require__(4),
    Request = __webpack_require__(20),
    fetch = __webpack_require__(53),
    Rss = __webpack_require__(21),
    put = __webpack_require__(55),
    Hash = __webpack_require__(9),
    fs = __webpack_require__(56),
    _ = __webpack_require__(3);

var auth = {
  auth: {
    strategy: "session"
  }
};

module.exports = [
//-------------   App   ----------------------//

//-------------   FETCH   ----------------------//

{
  method: "POST",
  path: "/app/fetch",
  config: auth,
  handler: function handler(request, reply) {
    var _objs = request.payload;
    _objs._uid = request.auth.credentials._id;
    var _kwd = request.payload.search;

    if (_kwd) {
      _kwd.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
    }

    var query = {
      default: {
        sort: { at: -1 },
        condition: [{ _uid: _objs._uid }]
      },
      condition: [{ name: new RegExp(_kwd, "i") }],
      select: {
        name: 1,
        desc: 1,
        key: 1,
        serect: 1,
        redirect: 1,
        img: 1,
        stt: 1,
        crt: 1
      }
    };

    fetch(_objs, Pinterest, query, function (err, result) {
      if (err) return reply(Boom.create(500, "Error Fetch Posts", err));
      if (result) {
        return reply(result);
      }
    });
  }
},
//-------------   PUT   ----------------------//
{
  method: "POST",
  path: "/app/save",
  config: auth,
  handler: function handler(request, reply) {
    var _obj = request.payload;

    console.log(_obj);

    _obj._uid = request.auth.credentials._id;

    var query = {
      condition: { key: _obj.key, serect: _obj.serect }
    };

    put(_obj, Pinterest, query, function (err, result) {
      if (err) return reply(Boom.create(500, "Error save Posts", err));
      if (result) {
        return reply(result);
      }
    });
  }
},

//-------------   DELETE   ----------------------//
{
  method: "POST",
  path: "/app/delete",
  config: auth,
  handler: function handler(request, reply) {
    var ids = [].concat(_toConsumableArray(request.payload.ids));
    Pinterest.remove({ _id: ids }, function (err, doc) {
      if (err) return reply(Boom.create(500, "Error Delete Posts", err));

      if (doc.nMatched === 0) {
        return reply({ stt: 0, msg: "App not found" });
      }

      return reply({ stt: 1, msg: "App delete success" });
    });
  }
},

//-------------   TOKEN   ----------------------//
{
  method: "GET",
  path: "/oauth/pinterest/{appid*}",
  config: auth,
  handler: function handler(request, reply) {
    // http = true
    // https == false
    if (request.query.appid) {
      var id = mongoose.Types.ObjectId(request.query.appid);

      Pinterest.findById(id, function (err, app) {
        if (err) console.log("Error find app", (0, _stringify2.default)(err));

        // scope: Defaults to ['read_public', 'write_public', 'read_relationships', 'write_relationships']
        // auth: https://api.pinterest.com/oauth/
        // token: https://api.pinterest.com/v1/oauth/token

        if (app) {
          request.session.pinterest = app;
          request.session.uid = request.auth.credentials._id;
          // let oauth = ` https://api.pinterest.com/oauth/?state=9750187663&scope=read_public,write_public,read_relationships,write_relationships&client_id=${app.key}&redirect_uri=${app.redirect}&response_type=code`;
          var oauth = " https://api.pinterest.com/oauth/?scope=read_public,write_public,read_relationships,write_relationships&client_id=" + app.key + "&redirect_uri=" + app.redirect + "&response_type=code";
          reply.redirect(oauth);
        } else {
          reply({ stt: 0, msg: "Not find App" });
        }
      });
    }
  }
}, {
  method: "GET",
  path: "/oauth/pinterest/callback",
  handler: function handler(request, reply) {
    var _appPint = request.session.pinterest;
    var _uid = request.session.uid;

    async.waterfall([
    // GET TOKEN AND INFO USER
    function (callback) {
      if (request.query.code && _appPint) {
        var _data = {
          grant_type: "authorization_code",
          client_id: _appPint.key,
          client_secret: _appPint.serect,
          code: request.query.code
        };

        // send get token
        Request.post({
          url: "https://api.pinterest.com/v1/oauth/token",
          form: _data
        }, function (err, httpResponse, body) {
          if (err) {
            return callback(err, null);
          }

          var _token = JSON.parse(body);

          _token._aid = _appPint._id;

          var me = "https://api.pinterest.com/v1/me/?access_token=" + _token.access_token + "&fields=first_name%2Cid%2Clast_name%2Curl%2Ccounts%2Ccreated_at%2Cbio%2Caccount_type%2Cimage%2Cusername";

          // console.log(_token.access_token);

          Request.get(me, function (err, httpResponse, body) {

            var response = JSON.parse(body);

            if (response.data) {

              var user = {
                id: response.data.id,
                br: response.data.counts.boards,
                flow: response.data.counts.followers,
                flowing: response.data.counts.following,
                pin: response.data.counts.pins,
                fn: response.data.username,
                img: response.data.image[(0, _keys2.default)(response.data.image)[0]].url
              };
              _token._uid = _uid;
              _token.user = user;

              return callback(null, _token);
            }
          });
        });
      } else {
        return callback(null, "Not query and App pinterest");
      }
    },
    // UPDATE CHANEL AND POST AND FOLLOW TOKEN IF HAVE CHANEL
    function (_chanel, callback) {

      if (_chanel.user) {

        // update token of user by id
        Chanel.findOne({ "user.id": _chanel.user.id }, function (err, doc) {
          if (err) {
            callback(Boom.create(500, "Error save Posts", err), null);
          }

          if (doc) {

            Chanel.findByIdAndUpdate(doc._id, { $set: _chanel }, { new: true }, function (err, result) {

              if (err) {
                callback(Boom.create(500, "Error save Posts", err), null);
              }

              if (result) {

                async.series([function (cb) {
                  Following.update({ _cid: result._id }, { $set: { tk: result.access_token } }, { multi: true, new: true }, function (err, cUp) {
                    if (err) {
                      cb(err);
                    }
                    cb(null, cUp);
                  });
                }, function (cb) {
                  Post.update({ _tid: result._id }, { $set: { tk: result.access_token } }, { multi: true, new: true }, function (err, cUp) {
                    if (err) {
                      cb(err);
                    }
                    cb(null, cUp);
                  });
                }
                // update Post And Follow has token Success
                ], function (err) {
                  // call callback
                  callback(null, result);
                });
              } else {
                callback(null, "not update token and info");
              }
            });
          } else {
            // save new chanel
            _chanel.user.ps = 0;
            _chanel.user.pd = 0;

            put(_chanel, Chanel, null, function (err, result) {
              if (err) {
                callback(err, null);
              } else {
                result ? callback(null, result) : callback(null, "not save token and info");
              }
            });
          }
        });
      } else {
        return callback(_chanel, null);
      }
    }], function (err, result) {
      if (err) {
        console.log("ERRPR LOGGER ");
      }

      if (result) {
        var url = "/chanel/";
        return reply.redirect(url);
      }
    });
  }
},

//-------------   FETCH TOKEN BY APP ID  ----------------------//

{
  method: "POST",
  path: "/token/fetch",
  config: auth,
  handler: function handler(request, reply) {
    var uid = request.auth.credentials._id || request.payload._uid;

    var _obj = request.payload;
    var _kwd = request.payload.search;
    var _aid = request.payload._aid;

    var _page = parseInt(_obj.page) || 1;
    var _limit = parseInt(_obj.limit) || 15;
    var _sort = { at: 1 };
    var _series = [];

    var _condition = [{ _uid: uid }];

    if (!_.isEmpty(_obj.search)) {
      _condition.push({
        $or: [{ "user.url": new RegExp(_kwd, "i") }]
      });
    }

    if (mongoose.Types.ObjectId.isValid(_aid)) {
      _condition = [{ _aid: _aid }, { _uid: uid }];
    }

    Chanel.paginate({ $and: _condition }, {
      page: _page,
      limit: _limit,
      sort: _sort
    }, function (err, result) {
      if (err) console.log(err);

      if (result) {
        reply({
          total: result.total,
          rows: result.docs
        });
      } else {
        reply({ total: 0, rows: [] });
      }
    });
  }
},
//-------------   DELETE   ----------------------//
{
  method: "POST",
  path: "/token/delete",
  config: auth,
  handler: function handler(request, reply) {
    var ids = [].concat(_toConsumableArray(request.payload.ids));

    Chanel.remove({ _id: ids }, function (err, doc) {
      if (err) console.log(err);

      if (doc.nMatched === 0) {
        reply({ stt: 0, msg: "Follow Link not found" });
      }

      reply(null, { stt: 1, msg: "Link Follow delete success" });
    });
  }
},

//-------------   CREATE  BOADR   ----------------------//
{
  method: "POST",
  path: "/pinterest/board/fetch",
  config: auth,
  handler: function handler(request, reply) {
    var uid = request.auth.credentials._id;

    var _obj = request.payload;
    var _kwd = request.payload.search;
    var _cid = request.payload._cid;

    var _page = parseInt(_obj.page) || 1;
    var _limit = parseInt(_obj.limit) || 15;
    var _sort = { ctr: -1 };
    var _series = [];

    var _condition = [{ _uid: uid }];

    if (!_.isEmpty(_obj.search)) {
      _condition.push({
        $or: [{ name: new RegExp(_kwd, "i") }]
      });
    }

    // fetch by chanel id

    if (mongoose.Types.ObjectId.isValid(_cid)) {
      _condition = [{ _cid: _cid }, { _uid: uid }];
    }

    Board.paginate({ $and: _condition }, {
      page: _page,
      limit: _limit,
      sort: _sort
    }, function (err, result) {
      if (err) console.log(err);

      if (result.docs) {
        reply({
          total: result.total,
          rows: result.docs
        });
      } else {
        reply({ total: 0, rows: [] });
      }
    });
  }
},

//-------------   CREATE  BOADR   ----------------------//
/*
save new item and update list item from api pinterest board
update item and update list item from api pinterest board
if update item update post board + rss board
*/
{
  method: "POST",
  path: "/pinterest/board/put",
  handler: function handler(request, reply) {

    var _obj = request.payload;

    if (!_obj._id && _obj._cid) {

      async.waterfall([
      // new boards
      function (callback) {

        _obj.access_token = _obj.tk;

        // console.log(_obj);

        Request.post({
          url: "https://api.pinterest.com/v1/boards/",
          form: _obj
        }, function (err, httpResponse, body) {
          if (err) {
            console.log("Error Send APi Boadr) =====>" + (0, _stringify2.default)(err));
          }

          if (body) {
            var _result = JSON.parse(body);

            if (_result.data) {
              // list data board
              callback(null, _result.data);
            } else {
              callback(null, _obj);
            }
          }
        });
      },
      // end list board
      function (items, callback) {

        Request.get({
          url: "https://api.pinterest.com/v1/me/boards/?access_token=" + _obj.tk + "&fields=id%2Cname%2Cdescription%2Curl"
        }, function (err, httpResponse, body) {

          if (err) {
            console.log("Load Boards New ) =====>" + (0, _stringify2.default)(err));
          }
          var _body = JSON.parse(body);
          // console.log(_body.data);
          if (_body.data) {

            var listBoard = _body.data;

            // console.log(_obj);
            Board.find({ _cid: _obj._cid }, function (err, docs) {

              if (docs.length > 0) {
                // lọc trùng
                var newBoards = _.differenceBy(listBoard, docs, 'url');
                callback(null, newBoards);
              } else {
                callback(null, listBoard);
              }
            });
          } else {
            callback(null, items);
          }
        });
      },
      // end new board unique
      function (newBoards, callback) {

        var _boards = [];

        async.series([function (cb) {

          _.forEach(newBoards, function (item) {
            _boards.push(_extends({
              _uid: _obj._uid,
              _cid: _obj._cid
            }, item));
          });
          cb(null, _boards);
        }], function (err, rest) {
          callback(null, rest[0]);
        });
      },
      // end _boards add attribute _uid + _cid to list items
      function (_boards, callback) {
        // console.log(_boards);
        Board.create(_boards, function (err, boards) {
          if (err) {
            console.log("Create board) =====>" + (0, _stringify2.default)(err));
          }
          callback(null, boards);
        });
      }], function (err, result) {
        if (result) {
          reply(null, { stt: 1, msg: "Create Boards", data: result });
        } else {
          reply(null, { stt: 0, msg: "Create faild" });
        }
      });
    } else {
      // update board from Post + Rss

      Chanel.findById(_obj._cid, function (err, chanel) {

        if (chanel) {

          Board.findById(_obj._id, function (err, board) {
            if (err) {
              console.log("Create board) =====>" + (0, _stringify2.default)(err));
            }

            if (board) {

              var _boardOld = _obj.url.replace('https://www.pinterest.com/', '');

              // lỗi ở đây // lay url xoa bo 
              // console.log(_boardOld);

              var url = "https://api.pinterest.com/v1/boards/" + _boardOld + "?access_token=" + chanel.access_token + "&fields=id%2Cname%2Cdescription";

              var data = {
                name: _obj.name,
                description: _obj.description
              };
              Request.patch({
                url: url,
                form: data
              }, function (err, httpResponse, body) {

                if (err) {
                  console.log("Error Send APi Boadr) =====>" + (0, _stringify2.default)(err));
                }

                var _body = JSON.parse(body);

                if (_body.data) {

                  async.waterfall([function (cb) {
                    board.name = _body.data.name, board.id = _body.data.id, board.description = _body.data.description;
                    board.save(function (err, doc) {
                      if (err) {
                        cb(err, null);
                      }

                      cb(null, board);
                    });
                  }, function (board, callback) {

                    // remove "https://www.pinterest.com/" and last string / 
                    var _boardOld = _obj.url.replace('https://www.pinterest.com/', '');
                    _boardOld = _boardOld.substring(0, _boardOld.length - 1);
                    var _boardNew = board.url.replace('https://www.pinterest.com/', '');
                    _boardNew = _boardOld.substring(0, _boardOld.length - 1);
                    // console.log(_boardOld); 
                    // console.log(_boardNew);
                    Post.findOneAndUpdate({ br: _boardOld }, { $set: { br: _boardNew } }, { multi: true, new: true }, function (err, doc) {});
                    Rss.findOneAndUpdate({ board: _boardOld }, { $set: { board: _boardNew } }, { multi: true, new: true }, function (err, doc) {});

                    callback(null, _boardNew);
                  }], function (error, result) {

                    if (error) {
                      reply({ stt: 0, msg: "Update failt" + error });
                    }
                    if (result) {
                      reply({ stt: 1, msg: "Update success" });
                    } else {
                      reply({ stt: 0, msg: "Update failt" });
                    }
                  });
                } else {
                  reply({ stt: 0, msg: "Update failt" + _body.msg });
                }
              });
            }
          });
        }
      });
    }
  }
},

//*** POST FETCH BY USER AND SEACH AND FETCH BY CHANEL  */

{
  method: "POST",
  path: "/pinterest/post/fetch",
  config: auth,
  handler: function handler(request, reply) {
    var uid = request.auth.credentials._id;
    var _obj = request.payload;
    var _kwd = request.payload.search;
    var _cid = request.payload._cid;

    var _page = parseInt(_obj.page) || 1;
    var _limit = parseInt(_obj.limit) || 15;
    var _sort = { ctr: -1 };
    var _series = [];

    var _condition = [{ _uid: uid }];

    if (!_.isEmpty(_obj.search)) {
      _kwd = _kwd.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
      _condition.push({
        $or: [{ nt: new RegExp(_kwd, "i") }]
      });
    }

    if (_obj.br) {
      _condition.push({
        $or: [{ br: new RegExp(_obj.br, "i") }]
      });
    }

    if (mongoose.Types.ObjectId.isValid(_cid)) {
      _condition = [{ _cid: _cid }, { _uid: uid }];
    }

    Post.paginate({ $and: _condition }, {
      page: _page,
      limit: _limit,
      sort: _sort
    }, function (err, result) {
      if (err) console.log(err);

      if (result.docs) {
        reply({
          total: result.total,
          rows: result.docs
        });
      } else {
        reply({ total: 0, rows: [] });
      }
    });
  }
},

//** POST PUT  */

{
  method: "POST",
  path: "/pinterest/post/put",
  handler: function handler(request, reply) {
    var _payload = request.payload;

    if (_payload._id) {

      var _obj = {
        _id: _payload._id,
        br: _payload.board,
        nt: _payload.note,
        tl: _payload.note,
        img: _payload.img,
        link: _payload.link
      };
      Post.findByIdAndUpdate(_obj._id, { $set: _obj }, { new: true }, function (err, doc) {
        if (err) {
          console.log("ERROR UPDATE POST) =====>" + (0, _stringify2.default)(err));
        }

        if (doc) {
          reply({ stt: 1, msg: "Update post success", data: doc });
        } else {
          reply(null, { stt: 0, msg: "Post not match" });
        }
      });
    } else {

      var _obj2 = {
        _uid: _payload._uid,
        _cid: _payload._cid,
        tk: _payload.access_token,
        br: _payload.board,
        nt: _payload.note,
        tl: _payload.note,
        img: _payload.img,
        link: _payload.link,
        at: _payload.at
      };

      Post.findOne({ _cid: _obj2._cid, br: _obj2.board, nt: _obj2.note }, function (err, item) {
        if (err) {
          console.log("ERROR FIND BEFORE PUT POST) =====>" + (0, _stringify2.default)(err));
        }

        if (item) {
          reply(null, { stt: 0, msg: "Post exists" });
        } else {
          Post.create(_obj2, function (err, doc) {
            if (err) {
              console.log("ERROR PUT POST) =====>" + (0, _stringify2.default)(err));
            }

            if (doc) {
              reply({ stt: 1, msg: "Create post success", data: doc });
            } else {
              reply(null, { stt: 0, msg: "Post exists" });
            }
          });
        }
      });
    }
  }
}, {
  method: 'post',
  path: '/pinterest/post/start',
  handler: function handler(request, reply) {

    var ids = [].concat(_toConsumableArray(request.payload.ids));

    Post.find({ _id: ids }, function (err, docs) {
      if (err) console.log(err);

      if (docs.length > 0) {

        async.waterfall([function (cb) {

          var _series = [];

          _.forEach(docs, function (post) {

            var _public = function _public(callback) {

              // deylay 5 den 20s
              // let _delay = Math.floor(Math.random()*(20000-5000+1)+5000);
              var _delay = Math.floor(Math.random() * (3000 - 1000 + 1) + 1000);

              (0, _timers.setTimeout)(function () {

                var _payload = {
                  access_token: post.tk,
                  link: post.link,
                  image_url: post.img,
                  board: post.br,
                  note: post.nt
                };

                Request.post({
                  url: "https://api.pinterest.com/v1/pins/?fields=url",
                  form: _payload
                }, function (err, httpResponse, body) {
                  // console.log(body);
                  if (err) {
                    return reply({ stt: 0, msg: err });
                  };

                  var _body = JSON.parse(body);

                  if (_body.data) {

                    console.log(_body.data);

                    Post.update({ _id: post }, { $set: { stt: 1, rt: 3, url: _body.data.url } }, { new: true }, function (err, doc) {
                      if (err) {
                        callback.log(err, null);
                      }
                      // id = post._id ; data == body or undefined
                      callback(null, { pid: post._id, data: _body.data });
                    });
                  } else {
                    callback(null, { pid: post._id, data: _body.data });
                  }
                });
              }, _delay);
            };
            _series.push(_public);
          });

          async.series(_series, function (err, results) {
            cb(err, results);
          });
        }], function (err, docs) {

          if (docs.length > 0) {
            reply({ stt: 1, msg: "Public post success" + docs.lengt, data: docs });
          } else {
            reply({ stt: 0, msg: "Public post fail" });
          }
        });
      }
    });
  }
}, {
  method: "POST",

  path: "/pinterest/post/stop",

  handler: function handler(request, reply) {

    var _ids = [].concat(_toConsumableArray(request.payload.ids));

    async.waterfall([function (cb) {

      var _series = [];

      _.forEach(_ids, function (item) {

        var _stop = function _stop(callback) {

          Post.findByIdAndUpdate({ _id: item }, { $set: { stt: 7, rt: 0 } }, { new: true }, function (err, doc) {

            if (err) callback(err, null);

            if (doc) {
              callback(null, { pid: item, stt: 0, msg: "Post  stop success" });
            } else {
              callback(null, { pid: item, stt: 1, msg: "Post  stop fail" });
            }
          });
        };

        _series.push(_stop);
      });

      async.series(_series, function (err, results) {
        //  console.log(results);
        cb(err, results);
      });
    }], function (err, result) {

      if (result.length > 0) {
        reply({ stt: 1, msg: "Public post success" + result.lengt, data: result });
      } else {
        reply({ stt: 0, msg: "Public post fail" });
      }
    });
  }
}, {
  method: "POST",

  path: "/pinterest/post/del",

  handler: function handler(request, reply) {

    var ids = [].concat(_toConsumableArray(request.payload.ids));

    Post.remove({ _id: ids }, function (err, doc) {
      if (err) console.log(err);

      if (doc.nMatched === 0) {
        reply({ stt: 0, msg: "Post  delete success" });
      }

      reply(null, { stt: 1, msg: "Post  delete success" });
    });
  }
}, {
  method: "post",
  path: "/pinterest/rss/put",
  handler: function handler(request, reply) {
    var _reqBody = request.payload;

    Rss.findOne({ _uid: _reqBody._uid, board: _reqBody.board, link: _reqBody.link }, function (err, doc) {
      if (err) console.log(err);

      if (doc) {
        reply({ stt: 0, msg: "Document exists on chanel !" });
      } else {
        // lay ban ghi cuoi cung cua kenh
        Rss.find({ _cid: _reqBody._cid }).sort({ _id: -1 }).exec(function (err, result) {
          if (err) console.log(err);

          if (result) {
            _reqBody.at = moment(result.at).add(5, "minutes").toDate();

            Rss.create(_reqBody, function (err, rss) {
              if (err) console.log(err);

              if (rss) {
                reply({
                  stt: 1,
                  msg: "Document save success !",
                  data: rss
                });
              } else {
                reply({ stt: 0, msg: "Rss not save !" });
              }
            });
          } else {
            // thi se gan theo default
            Rss.create(_reqBody, function (err, rss) {
              if (err) console.log(err);

              if (rss) {
                reply({
                  stt: 1,
                  msg: "Document save success !",
                  data: rss
                });
              } else {
                reply({ stt: 0, msg: "Rss not save !" });
              }
            });
          }
        });
      }
    });
  }
}, {
  method: 'post',
  path: '/pinterest/rss/update',
  handler: function handler(request, reply) {

    var _at = moment().toDate();

    Rss.findByIdAndUpdate(request.payload._id, { $set: { at: _at } }, { new: true }, function (err, doc) {

      if (err) {
        console.log(err);
      }

      if (doc) {
        reply({ stt: 1, msg: "Update rss run now ", data: doc });
      } else {
        reply({ stt: 0, msg: "Rss not find match document", data: doc });
      }
    });
  }
}, {
  method: "post",
  path: "/pinterest/rss/del",
  handler: function handler(request, reply) {
    var ids = [].concat(_toConsumableArray(request.payload.ids));

    Rss.remove({ _id: ids }, function (err, doc) {
      if (err) console.log(err);

      if (doc.nMatched === 0) {
        reply({ stt: 0, msg: "Rss  delete success" });
      }

      reply(null, { stt: 1, msg: "Rss  delete success" });
    });
  }
},
//-------------   APP/PINTEREST/FOLLOW  FETCH  ----------------------//

{
  method: "POST",
  path: "/pinterest/rss/fetch",
  config: auth,
  handler: function handler(request, reply) {
    var uid = request.auth.credentials._id || request.payload._uid;

    var _obj = request.payload;
    var _kwd = request.payload.search;
    var _cid = request.payload._cid;

    var _page = parseInt(_obj.page) || 1;
    var _limit = parseInt(_obj.limit) || 15;
    var _sort = { ctr: -1 };
    var _series = [];

    var _condition = [{ _uid: uid }];

    if (!_.isEmpty(_obj.search)) {
      _kwd.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
      _condition.push({
        $or: [{ "link": new RegExp(_kwd, "i") }]
      });
    }

    if (mongoose.Types.ObjectId.isValid(_cid)) {
      _condition = [{ _cid: _cid }, { _uid: uid }];
    }

    Rss.paginate({ $and: _condition }, {
      page: _page,
      limit: _limit,
      sort: _sort
    }, function (err, result) {
      if (err) console.log(err);

      if (result) {
        reply({
          total: result.total,
          rows: result.docs
        });
      } else {
        reply({ total: 0, rows: [] });
      }
    });
  }
},

//-------------   APP/LINK/FOLLOW  ----------------------//
{
  method: "POST",
  path: "/pinterest/following/add",
  handler: function handler(request, reply) {
    var _payload = request.payload;

    console.log(_payload.tk);
    var _follows = [];
    var _arr = _payload.items.split(",");

    _arr.forEach(function (item) {
      _follows.push({
        _uid: _payload._uid,
        _tid: _payload._tid,
        user: _payload.user,
        tk: _payload.tk,
        lnk: item
      });
    });

    async.waterfall([function (cb) {
      // có được thời gian bản ghi cuối cùng của kênh

      Following.find({ _tid: _follows[0]._tid }).sort({ _id: -1 }).limit(1).exec(function (err, doc) {
        if (err) {
          cb(err, null);
        }

        if (doc.length > 0) {
          var lastAt = doc[0].at;

          cb(null, lastAt);
        } else {
          var _lastAt = Date.now();

          cb(null, _lastAt);
        }
      });
    }], function (error, lastAt) {
      // sau khi có được mốc time cuối cùng của chanel tiến hành lọc link follow đã tồn tại
      // có list document và time của nó rồi

      Following.find({ _uid: _follows[0]._uid, _tid: _follows[0]._tid }, function (err, docs) {
        if (err) console.log(err);

        if (docs.length > 0) {
          // console.log("chạy đây");

          // lọc link thành công
          var listFollowing = _.differenceBy(_follows, docs, "lnk");

          // kéo dài thời gian theo mốc thời gian đã có
          // tạo list mới và add vào database.

          var result = [];

          var _delay = moment(lastAt).add(10, "minutes").format();

          _.forEach(listFollowing, function (item) {
            // random 5-10 đơn vị ví dụ phút
            var hRandom = Math.floor(Math.random() * (10 - 5 + 1) + 5);

            _delay = moment(_delay).add(hRandom, "minutes").format();

            item = _.assignIn({}, item, { at: _delay, crt: _delay });
            result.push(item);
          });

          Following.create(result, function (err, result) {
            if (err) console.log(err);

            if (result) {
              reply({ stt: 1, msg: "followings add success" });
            } else {
              reply({ stt: 0, msg: "list followings exists" });
            }
          });
        } else {
          // nếu chưa có bản ghi ko cần lọc
          // kéo dài thời gian theo mốc thời gian đã có
          // tạo list mới và add vào database.

          var _result2 = [];
          var _delay2 = moment(lastAt).add(10, "minutes").format();

          _.forEach(_follows, function (item) {
            // random 5-10 đơn vị ví dụ phút
            var hRandom = Math.floor(Math.random() * (10 - 5 + 1) + 5);

            _delay2 = moment(_delay2).add(hRandom, "minutes").format();

            item = _.assignIn({}, item, { at: _delay2, ctr: _delay2 });
            _result2.push(item);
          });

          // console.log(result);
          Following.create(_result2, function (err, result) {
            if (err) console.log(result);

            if (result) {
              reply({ stt: 1, msg: "followings add success" });
            } else {
              reply({ stt: 0, msg: "no add followings" });
            }
          });
        }
      });
    });
  }
}, {
  method: "GET",
  path: "/{params*}",
  handler: function handler(request, reply) {
    return reply.file("./views/admin.html");
  }
}];

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/array/from");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/assign");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(0),
    mongoosePaginate = __webpack_require__(1);

var schema = new mongoose.Schema({
  _uid: mongoose.Schema.Types.ObjectId,
  _cid: mongoose.Schema.Types.ObjectId, // target id == token id member
  url: String,
  name: String,
  description: String, // link following
  stt: {
    type: Number,
    default: 0
  },

  crt: {
    type: Date,
    default: Date.now
  }
}, { collection: 'boadrs' }).plugin(mongoosePaginate);

module.exports = mongoose.model('boadr', schema);

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// model model

// query.default and query.condition and query.select 
/*
query : {
    default: {
        _sort: {crt: -1},
        _condition: [{ stt: { $gte: 1 } }]
    },
    condition:  [{ "tags": new RegExp(_kwd, "i") }, { "tl": new RegExp(_kwd, "i") }];
    select:  { tl: 1, img: 1, sid: 1, stt: 1, slg: 1 },
}

*/

var _lodash = __webpack_require__(54);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (payload, model, query, callback) {

    var _page = parseInt(payload.page) || 1;
    var _limit = parseInt(payload.limit) || 15;
    var _sort = query.default.sort;
    var _series = [];

    var _condition = query.default.condition;

    if (!_lodash2.default.isEmpty(payload.search)) {
        _condition.push({
            $or: query.condition
        });
    }

    model.paginate({ $and: _condition }, {
        select: query.select,
        page: _page,
        limit: _limit,
        sort: _sort
    }, function (err, result) {
        if (err) {
            callback(err, null);
        }

        if (result) {

            callback(null, {
                total: result.total,
                rows: result.docs
            });
        } else {
            callback(null, { total: 0, rows: [] });
        }
    });
};

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// model model

// query.default and query.condition and query.select 
/*
query : {
    default: {
        _sort: {crt: -1},
        _condition: [{ stt: { $gte: 1 } }]
    },
    condition:  [{ "tags": new RegExp(_kwd, "i") }, { "tl": new RegExp(_kwd, "i") }];
    select:  { tl: 1, img: 1, sid: 1, stt: 1, slg: 1 },
}

*/

module.exports = function (obj, Model) {
    var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var callback = arguments[3];


    if (obj._id) {

        Model.findByIdAndUpdate(obj._id, { $set: obj }, { new: true }, function (err, result) {

            if (err) callback(err, null);

            if (result) {
                callback(null, { stt: 1, msg: "Update success", data: result });
            }
        });
    } else {
        // save and has query

        if (query) {
            Model.findOne(query.condition).then(function (result) {
                if (result) {
                    callback(null, { stt: 0, msg: "Document already exists" });
                } else {
                    Model.create(obj, function (err, doc) {
                        callback(null, { stt: 1, msg: "Save document success", data: doc });
                    });
                }
            }).catch(function (err) {
                if (err) callback(err, null);
            });
        } else {
            Model.create(obj, function (err, doc) {
                callback(null, { stt: 1, msg: "Save document success", data: doc });
            });
        }
    }
};

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ })
/******/ ]);