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
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
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
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports) {

module.exports = require("mix-hash");

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports) {

module.exports = require("hapi");

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

module.exports = require("hapi-bodyparser");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var winston = __webpack_require__(34),
    config = __webpack_require__(2);

/**
* Requiring `winston-mongodb` will expose
* `winston.transports.MongoDB`
*/
__webpack_require__(35).MongoDB;

winston.add(winston.transports.MongoDB, {
    db: config.db,
    level: config.log.level,
    collection: 'logs'
});

module.exports = winston;

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/***/ (function(module, exports) {

module.exports = require("cluster");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("winston-mongodb");

/***/ }),
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cluster = __webpack_require__(32);

if (cluster.isMaster) {
    var numWorkers = __webpack_require__(33).cpus().length;

    console.log('Master cluster setting up ' + numWorkers + ' workers...');

    for (var i = 0; i < numWorkers; i++) {
        cluster.fork();
    }

    cluster.on('online', function (worker) {
        console.log('Worker ' + worker.process.pid + ' is online');
    });

    cluster.on('exit', function (worker, code, signal) {
        console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
        console.log('Starting a new worker');
        cluster.fork();
    });
} else {
    'use strict';

    var Hapi = __webpack_require__(11),
        mongoose = __webpack_require__(0),
        parser = __webpack_require__(14),
        api = __webpack_require__(44),
        config = __webpack_require__(2);

    var server = new Hapi.Server({
        connections: {
            router: {
                isCaseSensitive: true,
                stripTrailingSlash: true
            }
        }
    });

    server.connection({ port: config.port.api, host: 'localhost', routes: { cors: true } });

    //------------     PRODUCT    --------------------//

    server.register([{ register: parser, options: { merge: true } }], function (err) {
        server.route(api);
    });

    server.start(function (err) {
        if (err) {
            throw err;
        }
        // Create a new Mongoose connection instance
        mongoose.Promise = global.Promise;
        global.db = mongoose.connect(config.db, { useMongoClient: true, promiseLibrary: global.Promise });

        console.log('Server running at: ' + new Date() + ' ' + server.info.uri);
    });

    //------------       DEV    --------------------//


    // server.register({ register: require("blipp"), options: {} }, function (err) {
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
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://www.website.com/api/<point>/<end-point>

// GET api.website.com/{point}/{end-report} == GET api.website.com/v1/me/boards
// POST api.website.com/{point}/{end-report}

var async = __webpack_require__(4),
    _ = __webpack_require__(3),
    Hash = __webpack_require__(9),
    Member = __webpack_require__(6),
    Link = __webpack_require__(45);

var logger = __webpack_require__(15);

// Define the routes module' method
module.exports = [{
  method: "POST",
  path: "/api/v1/login",
  config: {
    // cors : true,
    cors: {
      origin: ["*"]
      // additionalHeaders: ['content-type', 'cache-control', 'x-requested-with', 'x-krawl-token']
      // additionalHeaders: ['content-type', 'cache-control', 'x-requested-with']
    }
  },
  handler: function handler(request, reply) {
    console.log(request.payload);
    if (!request.payload.uid || !request.payload.pwd) {
      reply({ msg: "Missing username or password", stt: 0 });
    } else {
      var _pwd = Hash.sha256(request.payload.pwd);

      var _uid = request.payload.uid;
      Member.findOne({ uid: _uid, pwd: _pwd }, function (err, doc) {
        if (doc) {
          if (doc.stt == 0) {
            return reply({
              stt: 0,
              msg: "Your account needs to be activated"
            });
          } else {
            //request.auth.session.set(doc);
            // request.cookieAuth.set(doc);
            // User is now logged in, redirect them to their account area
            return reply({ stt: 1, msg: "Login successfuly!", uid: doc._id });
          }
        } else {
          reply({ msg: "Invalid username or password", stt: 0 });
        }
      });
    }
  }
}];

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(0),
    mongoosePaginate = __webpack_require__(1);

var schema = new mongoose.Schema({

    // add user id sau cung dc

    _uid: mongoose.Schema.Types.ObjectId,

    cid: String,

    lnk: String,

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

}, { collection: 'links' });

module.exports = mongoose.model('link', schema);

/***/ })
/******/ ]);