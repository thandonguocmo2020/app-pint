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
/******/ 	return __webpack_require__(__webpack_require__.s = 40);
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
/* 16 */,
/* 17 */
/***/ (function(module, exports) {

module.exports = require("joi");

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
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
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//const Blipp = require('blipp'); // module display all router

var Hapi = __webpack_require__(11),
    mongoose = __webpack_require__(0),
    Path = __webpack_require__(12),
    _ = __webpack_require__(3),
    config = __webpack_require__(2);

var server = new Hapi.Server();

server.connection({ port: config.port.admin, host: 'localhost', routes: { cors: true } });

server.register({ register: __webpack_require__(22) }, function (err) {
    if (err) throw err;

    server.route([{
        method: 'GET',
        path: '/www/{file*}',

        handler: {
            directory: {
                path: './www'
            }
        }
    }]
    // {
    //     method: 'GET',
    //     path: '/www/css/{file*}',
    //     handler: {
    //         directory: {
    //             path: './www/css'
    //         }
    //     }

    // },
    // {
    //     method: 'GET',
    //     path: '/favicon/{file*}',
    //     handler: {
    //         directory: {
    //             path: './www/favicon'
    //         }
    //     }

    // }
    );
});

var routes = _.concat(__webpack_require__(23), __webpack_require__(41));

__webpack_require__(24)(server, routes);

server.start(function (err) {
    if (err) {
        throw err;
    }
    // Create a new Mongoose connection instance
    mongoose.Promise = global.Promise;
    global.db = mongoose.connect(config.db, { useMongoClient: true, promiseLibrary: global.Promise });

    console.log('Server running at: ' + new Date() + ' ' + server.info.uri);
});

// server.register({ register: require('blipp'), options: {} }, function (err) {
//     server.start((err) => {
//         if (err) {
//             throw err;
//         }
//         // Create a new Mongoose connection instance
//         mongoose.Promise = global.Promise;
//         global.db = mongoose.connect(config.db, { useMongoClient: true, promiseLibrary: global.Promise });

//         console.log(`Server running at: ${new Date()} ${server.info.uri}`);
//     });

// });

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Invoke 'strict' JavaScript mode


var mongoose = __webpack_require__(0),
    _ = __webpack_require__(3),
    http = __webpack_require__(42),
    async = __webpack_require__(4),
    config = __webpack_require__(2),
    Joi = __webpack_require__(17),
    Boom = __webpack_require__(13),
    Member = __webpack_require__(6),
    Post = __webpack_require__(7);

// Define the routes module' method
module.exports = [
// {
//     method: 'GET',
//     path: '/p/{id}',
//     config: {
//         handler: function (request, reply) {
//             reply.view('detail.html', { html: 'Hello seo' });
//         }

//     }

// },


// {
//     method: 'POST',
//     path: '/api/post/fetch',
//     handler: function (request, reply) {

//         var _kwd = request.payload.kwd;
//         var _page = parseInt(request.payload.page) || 1;
//         var _limit = parseInt(request.payload.limit) || 15;

//         if (_limit > 50) {
//             _limit = 50;
//         }
//         //let _tid = req.body.uid ? req.body.uid : req.body._tid;
//         var _condition = [{ stt: { $gte: 1 } }];
//         var _sort = { crt: -1 };
//         var _series = [];


//         switch (_kwd) {
//             case 'hit':
//                 _condition = [{ stt: 2 }];
//                 break;
//             case 'best':
//                 _condition = [{ stt: 2 }];
//                 _sort = { rd: 1 };
//                 break;
//             default:

//                 if (!_.isEmpty(_kwd)) {

//                     //_condition.push({ $text: { $search: _kwd } });
//                     _condition.push({
//                         $or: [{ "tags": new RegExp(_kwd, "i") }, { "tl": new RegExp(_kwd, "i") }]
//                     });
//                     _sort = { crt: -1 };
//                 }


//                 break;

//         }


//         Post.paginate({ $and: _condition }, {
//             select: { tl: 1, img: 1, sid: 1, stt: 1, slg: 1 },
//             page: _page,
//             limit: _limit,
//             sort: _sort
//         }, (err, result) => {
//             if (err) {
//                 console.log(err);
//             }
//             if (result) {
//                 //  console.log(result);
//                 return reply(result);
//             } else {
//                 return reply({ docs: [] });
//             }
//         });
//     }

// },

// {
//     method: '*',
//     path: '/api/post/info',
//     handler: function (req, reply) {
//         var _id = req.payload.id;

//         Post.findOne({ sid: _id }, (err, doc) => {
//             if (doc) {
//                 //Update views + 1
//                 var _ran = Math.random();
//                 Post.update({ _id: doc._id }, { $set: { v: doc.v + 1, rd: _ran } }, () => { });

//                 var _kwd = doc.tags.length > 0 ? doc.tags.join(' ') : doc.tl;
//                 var _tag = doc.tags.length > 0 ? doc.tags[0] : doc.tl;

//                 async.parallel({
//                     suggest: function (callback) {

//                         Post.find({ $text: { $search: _kwd }, _id: { $ne: doc._id }, stt: { $gte: 1 } }, { score: { $meta: "textScore" } })
//                             .sort({ score: { $meta: 'textScore' } })
//                             .select({ tl: 1, v: 1, img: 1, sid: 1, stt: 1, slg: 1 })
//                             .limit(6)
//                             .exec(function (err, docs) {
//                                 if (err)
//                                     console.log(err);

//                                 callback(null, docs);

//                             });


//                     },
//                     recommended: function (callback) {

//                         // Post.find({ $text: { $search: _tag }, _id: { $ne: doc._id }, stt: { $gte: 1 }, })
//                         Post.find({ $text: { $search: _tag }, _id: { $ne: doc._id }, stt: { $gte: 1 } }, { score: { $meta: "textScore" } })
//                             .sort({ score: { $meta: 'textScore' } })
//                             // .sort({ st: -1, crt: -1 })
//                             .select({ tl: 1, v: 1, img: 1, sid: 1, stt: 1, slg: 1 })
//                             .limit(3)
//                             .exec(function (err, docs) {
//                                 if (err)
//                                     console.log(err);

//                                 callback(null, docs);
//                             });


//                     }

//                 },
//                     function (err, results) {
//                         if (err)
//                             console.log(err);

//                         return reply({
//                             info: doc,
//                             suggest: results.suggest,
//                             recommended: results.recommended
//                         });
//                     });


//             } else {
//                 return reply({});
//             }
//         })
//     }
// },


// path khac
{
    method: 'GET',
    //path: '/',
    path: '/{path*}',
    config: {
        plugins: {
            seo: { enabled: false }
        },
        handler: function handler(request, reply) {
            reply.view('index.html', {});
        }

    }

}];

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ })
/******/ ]);