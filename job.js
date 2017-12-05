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
/******/ 	return __webpack_require__(__webpack_require__.s = 57);
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
/* 6 */,
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
/* 9 */,
/* 10 */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
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
/* 16 */,
/* 17 */
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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _keys = __webpack_require__(36);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _timers = __webpack_require__(18);

"use strict";

var moment = __webpack_require__(8),
    async = __webpack_require__(4),
    Following = __webpack_require__(19),
    Chanel = __webpack_require__(15),
    Pinterest = __webpack_require__(37),
    Post = __webpack_require__(7),
    logger = __webpack_require__(17),
    Request = __webpack_require__(20);

module.exports = {
  // count: 0,
  following: function following(data) {
    var $ = this;
    try {

      var _chanel = {
        _id: data._cid,
        access_token: data.tk
      };

      $.checkAccount(_chanel, function (err, chanel) {

        if (chanel) {

          (0, _timers.setTimeout)(function () {

            // console.log(chanel);
            Request.post({ url: "https://api.pinterest.com/v1/me/following/users/?access_token=" + chanel.access_token,
              form: {
                user: data.lnk
              }
            }, function (err, httpResponse, body) {
              // console.log(body);
              if (err) return callback(err, null);

              var _res = JSON.parse(body);

              // console.log(_res); // return empty or message error

              if (!_res.message) {

                Following.findById(data._id, function (err, doc) {
                  if (err) {
                    logger.info("ERROR :", err);
                  };

                  if (doc) {
                    doc.stt = 1;
                    doc.save();
                    // console.log("FOLLOWING ITEM SUCCESS "+ doc.lnk );
                    logger.info("FOLLOW JOB LINK SUCCESS ", doc.lnk);
                  }
                });
              } else {

                // console.log("FOLLOWING PENDING =====>"+ JSON.stringify(data));

                Following.findById(data._id, function (err, doc) {
                  if (err) {
                    console.log(err);
                  }

                  // NEU FOLLING FAIL + 1 ngay + rt++

                  if (doc) {
                    doc.rt = doc.rt + 1;
                    if (doc.rt != 3) {
                      doc._at = moment(doc._at).add(1, 'days').toDate();
                      doc.save();
                      logger.info("FOLLOW JOB LINK RT++ ", doc);
                    } else {
                      // xoa luon ban ghi neu thu lai 3 lan ko dc
                      // neu muon xoa theo dieu kien job co the tang stt = 7 sau do kiem tra neu cai nao co stt 7 thi remove
                      Following.findById(data._id, function (err, item) {
                        if (err) {
                          logger.info("ERROR :", err);
                        };
                        if (item) {
                          item.stt = 7;
                          item.save();
                          logger.info("FOLLOW JOB FAIL ", item);
                        }
                      });
                    }
                  }
                });
              }
            });
          }, 3000);
        } else {
          // CHANEL NULL 
          Following.findById(data._id, function (err, item) {

            if (err) {
              logger.info("ERROR :", err);
            };

            if (item) {
              item.stt = 7; // cho xoa
              item.save();
              logger.info("FOLLOW JOB FAIL ", item);
            }
          });
        }
      });
    } catch (err) {
      if (err) {
        logger.info("ERROR :", err);
      };
    }
  },


  // Post job pinterest
  // stt == 0 start | 1 == success | 9 pendding start | 7 pending remove
  post: function post(data) {

    var $ = this;
    var _chanel = {
      _id: data._cid,
      access_token: data.tk
      // console.log(_chanel);
      // get Post and using multi
    };$.checkAccount(_chanel, function (err, chanel) {

      if (chanel) {

        Post.findById(data._id, function (err, doc) {

          if (doc) {
            var _payload = {
              access_token: data.tk,
              link: data.link,
              image_url: data.img,
              board: data.br,
              note: data.nt
            };

            // console.log(_payload);
            // console.log("DATA RUN");
            Request.post({
              url: "https://api.pinterest.com/v1/pins/",
              form: _payload
            }, function (err, httpResponse, body) {
              // console.log(body);
              if (err) logger.info("ERROR POST PINT ", err);

              var response = JSON.parse(body);
              // console.log("LOG POST RESPONSE");
              // console.log(response);
              // console.log("END LOG POST RESPONSE");
              // neu thanh cong thi gan stop
              if (response.data) {
                doc.rt = 3;
                doc.stt = 1;
                doc.save(function (err, doc) {
                  if (err) {
                    logger.info("ERROR :", err);
                  };
                  if (doc) {
                    // console.log("POST SUCCESS"+ doc.nt);
                    logger.info("POST JOB SUCCESS ", doc.nt);
                  }
                });
              } else {
                // neu that bai thi thu lai stt = 9 and rt+1
                doc.rt = doc.rt + 1;
                if (doc.rt != 3) {
                  doc.stt = 9;
                  doc._at = moment(doc._at).add(1, 'days').toDate();
                  doc.save(function (err, doc) {
                    if (err) {
                      logger.info("ERROR :", err);
                    };
                    if (doc) {
                      // console.log("POST RT ++");
                      logger.info("POST JOB RT ++ ", doc.tl);
                    }
                  });
                } else {

                  // rt == 3 remove item 
                  // neu muon xoa theo dieu kien job co the tang stt = 7 sau do kiem tra neu cai nao co stt 7 thi remove
                  doc.stt = 7;
                  doc.save();
                  logger.info("POST JOB STATUS ", doc.tl);
                }
              }
            });
          }
        });
      }
    });
  },
  checkAccount: function checkAccount(chanel, callback) {

    var _this = this;

    if (chanel) {
      Request.get("https://api.pinterest.com/v1/me/?access_token=" + chanel.access_token + "&fields=first_name%2Cid%2Clast_name%2Curl%2Ccounts%2Ccreated_at%2Cbio%2Caccount_type%2Cimage%2Cusername", function (err, httpResponse, body) {
        // console.log(body);
        if (err) {
          callback(err, null);
        };

        var _res = JSON.parse(body);

        // null or not null

        //  console.log(_res);

        logger.info("CHANEL STATUS " + chanel._id, _res.data.username);

        if (_res.data) {

          Chanel.findByIdAndUpdate(chanel._id, { $set: { rt: 0 } }, function (err, doc) {

            if (err) {
              callback(err, null);
            };

            if (doc) {

              // console.log("check account success");
              // console.log("update info");

              _this.info(doc, _res);

              callback(null, doc);
            } else {
              callback(null, null);
            }
          });
        } else {
          // console.log("check accout status die");
          // console.log(body);

          Chanel.findById(chanel._id, function (err, chanel) {

            if (err) {
              callback(err, null);
            };

            if (chanel) {
              if (chanel.rt == 3) {
                // stop chanel if account spam
                Chanel.findByIdAndUpdate(chanel._id, { $set: { stt: 7, msg: "Account stop by account not load info" } }, function (err, doc) {});
                Post.findOneAndUpdate({ _cid: chanel._id }, { $set: { stt: 7 } }, function (err, docs) {});
                Rss.findOneAndUpdate({ _cid: chanel._id }, { $set: { stt: 7 } }, function (err, docs) {});
                Following.findOneAndUpdate({ _tid: chanel._id }, { $set: { stt: 7 } }, function (err, docs) {});
                callback(null, null);
              } else {
                // tang gia tri cua rt
                Chanel.findByIdAndUpdate(chanel._id, { $inc: { rt: 1, stt: 9 } }, function (err, doc) {});
                callback(null, null);
              }
            } else {
              callback(null, null);
            }
          });
        }
      });
    }
  },
  info: function info(chanel, response) {

    async.series([function (callback) {
      Post.count({ _cid: chanel._id, stt: { $in: 1 } }, function (err, cStart) {
        if (err) {
          callback(err, null);
        } else {
          callback(null, cStart);
        }
      });
    }, function (callback) {
      // count post pendding
      Post.count({ _cid: chanel._id, stt: { $in: [0, 9] } }, function (err, cPending) {
        if (err) {
          callback(err);
        } else {
          callback(null, cPending);
        }
      });
    }], function (err, pCount) {
      if (err) {
        logger.info("ERROR :", err);
      };

      var cStart = pCount[0];
      var cPending = pCount[1];

      var user = {
        id: response.data.id,
        br: response.data.counts.boards,
        flow: response.data.counts.followers,
        flowing: response.data.counts.following,
        pin: response.data.counts.pins,
        fn: response.data.username,
        img: response.data.image[(0, _keys2.default)(response.data.image)[0]].url,
        ps: cStart, // post start
        pd: cPending // post start
      };

      chanel.user = user;
      chanel.save(function (err, doc) {
        if (err) {
          logger.info("ERROR :", err);
        };
        if (doc) {
          logger.info("LOAD UPDATE CHANEL SUCCESS", doc.user.username);
        }
      });
    });
  }
};

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("moment-timezone");

/***/ }),
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Invoke 'strict' JavaScript mode


var cluster = __webpack_require__(32),
    os = __webpack_require__(33);

if (cluster.isMaster) {
    var numWorkers = os.cpus().length;

    console.log('Master cluster setting up ' + numWorkers + ' workers...');

    for (var i = 0; i < numWorkers; i++) {
        setTimeout(function () {
            cluster.fork();
        }, i * 180000);
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

    __webpack_require__(58).init();
}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _timers = __webpack_require__(18);

// Invoke 'strict' JavaScript mode
"use strict";

var async = __webpack_require__(4),
    moment = __webpack_require__(39),
    Agenda = __webpack_require__(59),
    mongoose = __webpack_require__(0),
    _ = __webpack_require__(3),
    Chanel = __webpack_require__(15),
    Following = __webpack_require__(19),
    Post = __webpack_require__(7),
    Rss = __webpack_require__(21),
    Logger = __webpack_require__(63),
    logger = __webpack_require__(17),
    config = __webpack_require__(2);

module.exports = {
  agenda: null,
  stop: function stop(callback) {
    this.agenda.stop(callback);
  },

  init: function init() {
    // Create a new Mongoose connection instance
    mongoose.Promise = global.Promise;
    mongoose.connect(config.db);
    //name: 'viralnk-job-'+ process.pid,
    //var _agenda = this.agenda = new Agenda({ name: 'viralr-job-' + process.pid, processEvery: '15 seconds', defaultLockLimit: 0, defaultLockLifetime: 60000, defaultConcurrency: 10, maxConcurrency: 20, db: { address: config.db, collection: 'jobs' } });
    var _agenda = this.agenda = new Agenda({
      name: "pinterest-job-" + process.pid,
      defaultLockLimit: 0,
      defaultLockLifetime: 10000,
      db: { address: config.db, collection: "jobs" }
    });

    var $ = this;

    /*  RSS FEED JOB */

    _agenda.define("feed", { priority: "normal" }, function (job) {

      var _data = job.attrs.data;

      try {
        if (_.isNullOrUndefined(_data)) {
          // QUET CAC BAN GHI TRC 10 Phut
          var _at = moment().add(-10, "seconds").toDate();
          Rss.find({ stt: 1, at: { $lt: _at }, rt: { $lte: 7 } }).sort({ _id: -1 }).exec(function (err, docs) {
            // get all rss
            // console.log("RSS DOCUMETN MATCH");
            // console.log(docs);
            // console.log("END SHOW RSS DOCUMETN MATCH");
            if (docs.length > 0) {
              var _series = [];
              docs.forEach(function (doc) {

                if (doc.at < new Date()) {

                  _agenda.schedule(doc.at, "feed", { _cid: doc._cid.toString(),
                    _uid: doc._uid.toString(),
                    _id: doc._id.toString(),
                    access_token: doc.access_token,
                    link: doc.link,
                    tmp: doc.tmp,
                    board: doc.board,
                    rt: doc.rt,
                    stt: doc.stt,
                    at: doc.at
                  }, function (e, d) {
                    if (e) {
                      logger.info("RSS error:", e);
                    }
                    logger.info("RSS LOGGER:", doc.at, doc._cid, doc.lnk);
                    // console.log("THONG BAO DA CHAY QUA JOB NAY");
                  });
                }
              }); // end forEach
            }
          }); // end find
        } else {
          __webpack_require__(60).feed(_data);
        }
      } catch (error) {
        logger.error("feed job", error);
      }
    });

    /*  POST JOB */
    _agenda.define("post", { priority: "normal" }, function (job) {

      try {
        if (_.isNullOrUndefined(_data)) {

          var _at = moment().add(-20, "minutes").format().toDate();
          // 0 start | stop 1 | delay = 9;
          Following.aggregate({
            $match: { stt: { $in: [0, 9] }, at: { $lt: _at }, rt: { $lt: 3 } }
          }, { $sort: { at: -1 } }, {
            $group: {
              _id: "$_cid", // target id
              items: {
                // list item
                $push: { _id: "$_id", _uid: "$_uid", _tid: "$_tid", user: "$user", lnk: "$lnk", at: "$at", rt: "$rt", stt: "$stt" }
              }
            }
            // { $limit: 5 } // quét post của tất cả các kênh
          }).exec(function (e, docs) {

            // console.log("POST DOCUMETN MATCH ============> ");
            console.log(docs);
            // console.log("POST SHOW RSS DOCUMETN MATCH ============>");

            if (docs) {
              // Giới hạn mỗi kênh mỗi lần post chỉ post 1 bài

              _.forEach(docs, function (value, index) {
                // chạy qua các item
                _.forEach(value.items, function (doc, key) {

                  // post 1 item moi chanel /1 action job
                  if (key < 1) {

                    if (doc.at < new Date()) {

                      _agenda.schedule(doc.at, "post", {
                        cid: doc._cid.toString(),
                        uid: doc._uid.toString(),
                        id: doc._id.toString(),
                        txt: doc.txt,
                        media: doc.media,
                        rt: doc.rt,
                        stt: doc.stt
                      }, function (e, d) {
                        // chay job 20 phut sau chay lai neu stt == 9 || neu ben trong action stt = 1  rt > 3 == end stop 
                        if (e) {
                          logger.info("POST LOGGER ERR:", e);
                        }
                        logger.info("RSS LOGGER:", doc.at, doc._cid, doc.lnk);
                        // console.log("POST JOB END ===> "+doc.lnk); 
                      });
                    }
                  }
                });
              });
            }
          });
        } else {
          if (_data != null) {
            __webpack_require__(38).post(_data);
          }
        }
      } catch (error) {
        logger.error("follow job", error);
      }
    });

    //---------------find audience----------------
    /*
     * job chạy quét qua các bản ghi có stt 0 or 1, có thời gian nhỏ hơn 10s so với thời gian hiện tại. Và có số lần job chạy nhỏ hơn 2  tức chỉ chạy 2 lần
    * Sắp xếp các bản ghi lấy ra theo at ngược lại cũ nhất
    * Nhóm các kênh và các bản ghi lại theo kênh. 
    * For các kênh  for các item của kênh. 
    * Lấy số lượng bản ghi để chạy key < 1 nếu key nhỏ hơn 1 tức 1 bản ghi follow mỗi kênh mỗi lần.
    * send data đó cho nhiệm vụ follows
    * 
    */

    _agenda.define("following", { priority: "normal" }, function (job) {

      var _data = job.attrs.data;

      try {
        if (_.isNullOrUndefined(_data)) {

          var _at = moment().add(-10, "seconds").toDate();

          // GET FOLLOWING LINK STT == 0 AND STT 9 .. 
          // lấy các bản ghi có stt chưa chạy và các bản ghi cần chạy lại trong thời gian đã định

          Following.aggregate({
            $match: { stt: { $in: [0, 9] }, at: { $lt: _at }, rt: { $lt: 3 } }
          }, { $sort: { at: 1 } }, {
            $group: {
              _id: "$_tid",
              items: {
                $push: { _id: "$_id", _uid: "$_uid", _tid: "$_tid", user: "$user", tk: "$tk", lnk: "$lnk", at: "$at", rt: "$rt", stt: "$stt" }
              }
            }
          }
          // { $limit: 5 } // default all tất cả các kênh
          ).exec(function (e, docs) {

            // console.log("FoLLOW DOCUMETN MATCH ============> ");
            // console.log(docs);
            // console.log("FoLLOW SHOW RSS DOCUMETN MATCH ============>");

            if (docs) {

              // value = Item Chanel 
              _.forEach(docs, function (value, index) {

                // doc == items document following
                _.forEach(value.items, function (doc, key) {

                  // get one
                  if (key < 1) {
                    // chanel id = targetid -tk =   access_token - lnk = link follower
                    _agenda.schedule(doc.at, "following", {
                      _id: doc._id,
                      _uid: doc._uid,
                      _cid: doc._tid,
                      tk: doc.tk,
                      lnk: doc.lnk,
                      stt: doc.stt,
                      rt: doc.rt,
                      at: doc.at
                    }, function (e, d) {

                      // console.log(e);

                      if (e) {
                        logger.info("ERROR :", e);
                      }

                      logger.info("FOLLOWING LOGGER :", doc.at, doc._cid, doc.lnk);
                      // console.log("FOLLOWING LOGGER :", doc.at, doc._cid, doc.lnk);
                    });
                  }
                });
              });
            }
          });
        } else {
          __webpack_require__(38).following(_data);
        }
      } catch (error) {
        logger.error("follow job", error);
      }
    });

    _agenda.define("post", { priority: "normal" }, function (job) {

      var _data = job.attrs.data;

      try {
        if (_.isNullOrUndefined(_data)) {
          // 20p up 1 loat bai
          var _at = moment().add(-10, "minutes").toDate();

          //  0 == chờ || 9 == chờ thử lại || 1 đã chạy xong stop 

          Post.aggregate({
            $match: { stt: { $in: [0, 9] }, at: { $lt: _at }, rt: { $lt: 3 } }
          }, { $sort: { at: 1 } }, {
            $group: {
              _id: "$_cid", // chanel id
              items: {
                // list item
                $push: {
                  _id: "$_id",
                  _uid: "$_uid",
                  _cid: "$_cid",
                  tk: "$tk",
                  br: "$br",
                  nt: "$nt",
                  tl: "$tl",
                  img: "$img",
                  at: "$at",
                  rt: "$rt",
                  stt: "$stt"
                }
              }
            }
            // { $limit: 5 } // post cùng lúc nhiều kênh default .. or giới hạn kênh
          }).exec(function (e, docs) {
            // console.log("POSTS DOCUMETN MATCH ============> ");
            // console.log(docs);
            // console.log("POSTS SHOW RSS DOCUMETN MATCH ============>");

            if (docs) {
              // Giới hạn số bài post nếu có time phù hợp
              // tỉ lệ này thấp bởi đầu vào input time đã cách nhau 3-4 giờ update 1 bài trên 1 kênh

              _.forEach(docs, function (value, index) {
                // chạy qua các item
                _.forEach(value.items, function (doc, key) {

                  if (key < 1) {

                    // console.log("LOAD ONE ITEM ============> ");
                    // console.log(doc);
                    // console.log("END LOAD ONE ITEM ============> ");

                    if (doc.at < new Date()) {
                      _agenda.schedule(doc.at, "post", {
                        _cid: doc._cid.toString(),
                        _uid: doc._uid.toString(),
                        _id: doc._id.toString(),
                        tk: doc.tk,
                        br: doc.br,
                        nt: doc.nt,
                        tl: doc.tl,
                        img: doc.img,
                        rt: doc.rt,
                        stt: doc.stt
                      }, function (err, d) {
                        // console.log(e);

                        if (e) {
                          logger.info("POST error:", e);
                        }

                        logger.info("POST LOGGER :", doc.at, doc._cid, doc.lnk);
                        // console.log("THONG BAO DA CHAY QUA JOB NAY POST" + doc.lnk);
                      });
                    }
                  }
                });
              });
            }
          });
        } else {
          if (_data) {
            __webpack_require__(38).post(_data);
          }
        }
      } catch (error) {
        logger.error("post job", error);
      }
    });

    // check account chanel

    _agenda.define("clean", { priority: "normal" }, function (job) {
      var _at = moment().add(-60, "days").endOf("day").toDate();
      Rss.remove({ stt: 7, at: { $lt: _at } }, function (err, docs) {});
      Post.remove({ stt: 7, at: { $lt: _at } }, function (err, docs) {});
      Following.remove({ stt: 7 }, function (err, docs) {});
      Logger.remove({ timestamp: { $lt: _at } }, function (err, docs) {}); // not logger
    });

    _agenda.on("ready", function () {
      // chạy job tại mỗi thời điểm nhất định
      _agenda.every('2 seconds', 'feed');
      _agenda.every('25 seconds', 'post');
      _agenda.every("20 seconds", "following");
      _agenda.every('1 days', 'clean');
      _agenda.start();
    });

    var x = 15;

    function a() {

      if (x < 10) {
        var i = 5;
      }
      console.log(i);
    }

    a();

    process.on("SIGTERM", function () {
      _agenda.stop(function () {
        process.exit(0);
      });
    });
    process.on("SIGINT", function () {
      _agenda.stop(function () {
        process.exit(0);
      });
    });

    _agenda.on("success", function (job) {
      console.log("job %s finished at: %s", job.attrs.name, moment().format());
      if (job.attrs.type != "single") {
        job.remove();
      }
    });
    _agenda.on("start", function (job) {
      console.log("job %s starting at: %s", job.attrs.name, moment().format());
    });
  }
};

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("agenda");

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getIterator2 = __webpack_require__(61);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Feed = __webpack_require__(62),
    async = __webpack_require__(4),
    _ = __webpack_require__(3),
    Request = __webpack_require__(20),
    moment = __webpack_require__(39),
    Chanel = __webpack_require__(15),
    Rss = __webpack_require__(21),
    shortid = __webpack_require__(10),
    logger = __webpack_require__(17),
    Post = __webpack_require__(7);

module.exports = {
    feed: function feed(data) {

        //    console.log(data);
        //    console.log("RUN IN DATA");
        async.waterfall([
        // load list post data by link rss
        function (callback) {
            Feed.load(data.link, function (err, rss) {
                if (err) {
                    logger.error("rss to json", err);
                }
                if (rss) {
                    // console.log(rss.items);


                    if (rss.items && rss.items.length > 0) {
                        // items rss
                        var _items = rss.items;
                        logger.info("LOAD POST COUNT ", _items.length);
                        callback(null, _items);
                    }
                }
            });
        },
        // get last AT of post set beetwen time job
        function (rssItems, callback) {

            Post.find({ _cid: data._cid }).sort({ _id: 1 }).exec(function (err, posts) {

                // console.log("FIND POST ITEM CRAWL LAST AT");
                if (err) console.log(err);
                if (posts.length > 0) {
                    // tu ban ghi cuoi them n  gio
                    _.last(posts, function (item) {
                        var lastAt = item.at;
                        var _lastAt = moment(lastAt).add(1, 'hours').toDate();
                        callback(null, rssItems, _lastAt);
                    });
                } else {
                    // reset default min - hours 
                    var _startAt = moment().add(-4, 'hours').toDate();
                    callback(null, rssItems, _startAt);
                }
            });
        },
        // has list item post and last at. Convert link item using  https://api.viralnk.com/short return list new item
        function (rssItems, _lastAt, callback) {
            console.log(_lastAt);

            console.log("RUN RSS ITEM DATA 2");
            if (rssItems.length > 0) {

                var count = rssItems.length;
                var n = 0;
                var posts = [];
                var _series = [];

                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    var _loop = function _loop() {
                        var item = _step.value;


                        var convertUrl = function convertUrl(callback) {

                            Request.post({
                                url: 'https://api.viralnk.com/short',
                                headers: {
                                    'X-Token': "ab5755b2777ace8e52d1f4edeb03a3cdb8c35d78e14d5b5cae086edd8ad05f86",
                                    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:45.0) Gecko/20100101 Firefox/45.0'
                                },
                                form: {
                                    url: item.link
                                }
                            }, function (err, response, body) {

                                if (!err && response.statusCode == 200) {
                                    var s = JSON.parse(body);
                                    var _tl = _.truncate(item.title, { length: 60, 'separator': /,? +/ });
                                    var _ran = shortid.generate();

                                    if (s.stt == 1) {

                                        // 120/180 phút random time tính bằng giây
                                        var hRandom = Math.floor(Math.random() * (10800 - 7200 + 1) + 7200);

                                        // console.log(hRandom);

                                        _lastAt = moment(_lastAt).add(hRandom, 'minutes').toDate();
                                        // _lastAt = moment(_lastAt).add(hRandom, 'seconds').toDate();

                                        var _lnk = s.url;

                                        var _img = !_.isNullOrUndefined(item.enclosures) ? item.enclosures[0].url : "http://mb3egypt.com/img/not-available.jpg";

                                        var post = {
                                            _uid: data._uid,
                                            _cid: data._cid,
                                            tk: data.access_token,
                                            br: data.board,
                                            tl: _tl, // field check unique
                                            nt: data.tmp.replace(/{title}/ig, _tl).replace(/{url}/ig, _lnk).replace(/{random}/, _ran),
                                            img: _img,
                                            link: _lnk,
                                            // utc: data.uic,// if has utcode
                                            at: _lastAt
                                        };

                                        callback(null, post);
                                    }
                                }
                            });
                        };
                        _series.push(convertUrl);
                    };

                    for (var _iterator = (0, _getIterator3.default)(rssItems), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        _loop();
                    }

                    // return list new item
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                async.series(_series, function (err, posts) {
                    callback(null, posts);
                });
            } else {
                callback(null, null);
            }
        }, function (posts, callback) {

            // console.log("POSTS ========>");
            // console.log(posts);
            // console.log("END POSTS ========>");


            if (posts) {

                Post.find({ _cid: data._cid }, function (err, docs) {
                    if (err) console.log(err);
                    // loại bỏ các bài viết trùng link trùng kênh
                    if (docs) {
                        var newItems = _.differenceBy(posts, docs, 'title');
                        callback(null, newItems);
                    } else {
                        callback(null, posts);
                    }
                });
            } else {
                callback(null, null);
            }
        }],
        // new item check exists and save item to post job
        function (err, result) {

            // console.log("POSTS SCANNER RSS SUCCESS");
            // console.log(result);
            // console.log("END POSTS SCANNER RSS SUCCESS");

            /**
             * If co rss + posts 
             * Posts success new item lui rss quet lai 1 ngay sau
             * if result
             */

            Rss.findById(data._id, function (err, rss) {

                if (err) console.log(err);

                if (rss && result.length > 0) {

                    Post.create(result, function (err, posts) {

                        if (err) console.log(err);

                        if (posts) {
                            rss.rt = 0;
                            rss.at = moment(rss.at).add(1, 'days').toDate();
                            rss.save();
                            // console.log("POST IN RSS CREATE SUCCESS");
                        } else {
                            // 10 phut sau thu lai
                            rss.at = moment(rss.at).add(1, 'days').toDate();
                            rss.save();
                            // console.log("POSTS SCANNER RSS LUI LAI 10 phut sau thu add lai post");
                        }
                    });
                } else {

                    console.log("KO CO POST MOI THU LAI 1 NGAY SAU NEU 5 NGAY KO DC XOA BAN GHI");
                    // neu ko co post nao moi tang job rss + 1 va lui lai 1 ngay sau quet thu lai
                    if (rss.rt != 7) {
                        rss.rt = rss.rt + 1;
                        rss.at = moment(rss.at).add(1, 'days').toDate();
                        rss.save();
                        // console.log("ko co ban ghi nao moi 1 ngay sau thu quet lai");
                    } else {
                        // neu thu lai 5 lan ko dc cho vao cho xoa
                        rss.stt = 7;
                        rss.save();
                        // console.log("NEU THU LAI 5 lan trong 5 ngay ko dc xoa ban ghi");
                    }
                }
            });
        });
    }
};

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/get-iterator");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("rss-to-json");

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(0);
module.exports = mongoose.model("log", new mongoose.Schema({
  timestamp: Date,
  level: String,
  message: String,
  meta: {}
}, {
  collection: "logs"
}));

/***/ })
/******/ ]);