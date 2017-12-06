!function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=57)}([function(t,e){t.exports=require("mongoose")},function(t,e){t.exports=require("mongoose-paginate")},function(t,e,n){"use strict";t.exports=n(5)},function(t,e){t.exports=require("mix-utils")},function(t,e){t.exports=require("async")},function(t,e,n){"use strict";t.exports={port:{www:8070,api:8090,admin:8080},db:"mongodb://localhost/pinterest",secret:"78ad3c62b2f44ec3b65f09ebf1236a6c3c56656d6593b39c250646ee375d2075",log:{collection:"logs",level:"all"},aws:{clientID:"AKIAJGNVNF32R6UBI4XQ",clientSecret:"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",region:"us-east-1",bucket:"i.geekrill.com"},facebook:{clientID:"687615191258150",clientSecret:"4f09bd8ee3a6cff3711200f9ef2e1045",callbackURL:"http://localhost:8080/auth/facebook/callback"},twitter:{clientID:"XVuGpFDcCIfIVZfhqkMiNjSuu",clientSecret:"0wp1Q50DPjtlqX8LtgoBWCqRxpJtxKXwpmmplwhYDOEMJzXPGA",callbackURL:"http://localhost:8080/auth/twitter/callback"},tumblr:{clientID:"sC2hNnCfMHYFh84vEWB6icAuSkFdupIBo1cdrpGMMCPHBvskEP",clientSecret:"ww3bd7R4o5LtOBFvTwnH0MkUx3UMGQuWLrm3LxCUYO5j3vUsuj",callbackURL:"http://localhost:8080/auth/tumblr/callback"},google:{clientID:"Google Application ID",clientSecret:"Google Application Secret",callbackURL:"http://localhost:8080/oauth/google/callback"},mail:{sparkpost:{ApiKey:"791214ab9be4177dee42f5b84e91e25f371348ae"}}}},,function(t,e,n){"use strict";var i=n(0),o=n(1),r=(n(10),new i.Schema({_uid:i.Schema.Types.ObjectId,_cid:i.Schema.Types.ObjectId,tk:String,br:String,tl:String,nt:String,img:String,link:String,url:String,stt:{type:Number,default:0},rt:{type:Number,default:0},at:{type:Date,default:Date.now},crt:{type:Date,default:Date.now}},{collection:"posts"}).plugin(o));t.exports=i.model("post",r)},function(t,e){t.exports=require("moment")},,function(t,e){t.exports=require("shortid")},,,,,function(t,e,n){"use strict";var i=n(34),o=n(2);n(35).MongoDB,i.add(i.transports.MongoDB,{db:o.db,level:o.log.level,collection:"logs"}),t.exports=i},function(t,e,n){"use strict";var i=n(0),o=n(1),r=new i.Schema({_uid:i.Schema.Types.ObjectId,_aid:i.Schema.Types.ObjectId,user:{},access_token:{type:String,unique:!0,index:!0},msg:{type:String,default:null},rt:{type:Number,default:1},stt:{type:Number,default:1},at:{type:Date,default:Date.now},crt:{type:Date,default:Date.now}},{collection:"chanels"}).plugin(o);t.exports=i.model("chanel",r)},,function(t,e){t.exports=require("core-js/library/web/timers")},function(t,e,n){"use strict";var i=n(0);t.exports=i.model("following",new i.Schema({_uid:i.Schema.Types.ObjectId,_tid:i.Schema.Types.ObjectId,tk:String,lnk:String,stt:{type:Number,default:0},rt:{type:Number,default:0},at:{type:Date,default:Date.now},crt:{type:Date,default:Date.now}},{collection:"followings"}))},function(t,e){t.exports=require("request")},function(t,e,n){"use strict";var i=n(0),o=n(1),r=new i.Schema({_uid:i.Schema.Types.ObjectId,_cid:i.Schema.Types.ObjectId,access_token:String,link:String,desc:String,board:String,tmp:String,tl:String,utm:String,rt:{type:Number,default:0},stt:{type:Number,default:1},crt:{type:Date,default:Date.now},at:{type:Date,default:Date.now}},{collection:"rss"}).plugin(o);t.exports=i.model("rss",r)},,,,,,,,,,,function(t,e){t.exports=require("cluster")},function(t,e){t.exports=require("os")},function(t,e){t.exports=require("winston")},function(t,e){t.exports=require("winston-mongodb")},function(t,e){t.exports=require("babel-runtime/core-js/object/keys")},function(t,e,n){"use strict";var i=n(0),o=n(1),r=new i.Schema({_uid:i.Schema.Types.ObjectId,name:{type:String,index:!0},key:{type:String,unique:!0,index:!0},serect:String,img:String,redirect:String,stt:{type:Number,default:0},crt:{type:Date,default:Date.now}},{collection:"apps"}).plugin(o);t.exports=i.model("app",r)},function(t,e,n){"use strict";var i=n(36),o=function(t){return t&&t.__esModule?t:{default:t}}(i),r=n(18),a=n(8),c=n(4),s=n(19),l=n(16),u=(n(37),n(7)),d=n(15),f=n(20);t.exports={following:function(t){var e=this;try{var n={_id:t._cid,access_token:t.tk};e.checkAccount(n,function(e,n){n?(0,r.setTimeout)(function(){f.post({url:"https://api.pinterest.com/v1/me/following/users/?access_token="+n.access_token,form:{user:t.lnk}},function(e,n,i){if(e)return callback(e,null);JSON.parse(i).message?s.findById(t._id,function(e,n){e&&d.info("ERROR :",e),n&&(n.rt=t.rt+1,3!=n.rt?(n._at=a(t._at).add(1,"days").toDate(),n.save(),d.info("FOLLOW JOB LINK RT++ ",n)):s.findById(t._id,function(e,n){e&&d.info("ERROR :",e),n&&(n.stt=7,n.save(),d.info("FOLLOW JOB FAIL ",t.lnk))}))}):s.findById(t._id,function(t,e){t&&d.info("ERROR :",t),e&&(e.stt=1,e.save(),d.info("FOLLOW JOB LINK SUCCESS ",e.lnk))})})},3e3):s.findById(t._id,function(e,n){e&&d.info("ERROR :",e),n&&(n.stt=7,n.save(),d.info("FOLLOW JOB FAIL ",t.lnk))})})}catch(t){t&&d.info("ERROR :",t)}},post:function(t){var e=this,n={_id:t._cid,access_token:t.tk};e.checkAccount(n,function(e,n){n&&u.findById(t._id,function(e,n){if(n){var i={access_token:t.tk,link:t.link,image_url:t.img,board:t.br,note:t.nt};console.log(i),console.log("DATA RUN"),f.post({url:"https://api.pinterest.com/v1/pins/",form:i},function(e,i,o){e&&d.info("ERROR POST PINT ",e),JSON.parse(o).data?(n.rt=3,n.stt=1,n.save(function(t,e){t&&d.info("ERROR :",t),e&&d.info("POST JOB SUCCESS ",e.nt)})):(n.rt=n.rt+1,console.log(t.rt),console.log(n.rt),console.log("BUG 2"),3!=n.rt?(n.stt=9,n._at=a(n._at).add(1,"days").toDate(),n.save(function(t,e){t&&d.info("ERROR :",t),e&&d.info("POST JOB RT ++ ",e.tl)})):(n.stt=7,n.save(),d.info("POST JOB STATUS ",n.tl)))})}})})},checkAccount:function(t,e){var n=this;t&&f.get("https://api.pinterest.com/v1/me/?access_token="+t.access_token+"&fields=first_name%2Cid%2Clast_name%2Curl%2Ccounts%2Ccreated_at%2Cbio%2Caccount_type%2Cimage%2Cusername",function(i,o,r){i&&e(i,null);var a=JSON.parse(r);d.info("CHANEL STATUS "+t._id,a.data.username),a.data?l.findByIdAndUpdate(t._id,{$set:{rt:0}},function(t,i){t&&e(t,null),i?(n.info(i,a),e(null,i)):e(null,null)}):l.findById(t._id,function(t,n){t&&e(t,null),n?3==n.rt?(l.findByIdAndUpdate(n._id,{$set:{stt:7,msg:"Account stop by account not load info"}},function(t,e){}),u.findOneAndUpdate({_cid:n._id},{$set:{stt:7}},function(t,e){}),Rss.findOneAndUpdate({_cid:n._id},{$set:{stt:7}},function(t,e){}),s.findOneAndUpdate({_tid:n._id},{$set:{stt:7}},function(t,e){}),e(null,null)):(l.findByIdAndUpdate(n._id,{$inc:{rt:1,stt:9}},function(t,e){}),e(null,null)):e(null,null)})})},info:function(t,e){c.series([function(e){s.count({_tid:t._id,stt:1},function(t,n){t?e(t,null):e(null,n)})},function(e){s.count({_tid:t._id,stt:{$in:0}},function(t,n){t?e(t,null):e(null,n)})},function(e){s.count({_tid:t._id,stt:7},function(t,n){t?e(t,null):e(null,n)})},function(e){u.count({_cid:t._id,stt:{$in:1}},function(t,n){t?e(t,null):e(null,n)})},function(e){u.count({_cid:t._id,stt:{$in:[0,9]}},function(t,n){t?e(t):e(null,n)})}],function(n,i){n&&d.info("ERROR :",n);var r=i[0],a=i[1],c=i[2],s=i[3],l=i[4],u={id:e.data.id,br:e.data.counts.boards,flow:e.data.counts.followers,flowing:e.data.counts.following,pin:e.data.counts.pins,fn:e.data.username,img:e.data.image[(0,o.default)(e.data.image)[0]].url,ps:s,pd:l,fs:r,fr:a,fd:c};t.user=u,t.save(function(t,e){t&&d.info("ERROR :",t),e&&d.info("LOAD UPDATE CHANEL SUCCESS",e.user.username)})})}}},function(t,e){t.exports=require("moment-timezone")},,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var i=n(32),o=n(33);if(i.isMaster){var r=o.cpus().length;console.log("Master cluster setting up "+r+" workers...");for(var a=0;a<r;a++)setTimeout(function(){i.fork()},18e4*a);i.on("online",function(t){console.log("Worker "+t.process.pid+" is online")}),i.on("exit",function(t,e,n){console.log("Worker "+t.process.pid+" died with code: "+e+", and signal: "+n),console.log("Starting a new worker"),i.fork()})}else n(58).init()},function(t,e,n){"use strict";var i=(n(18),n(4),n(39)),o=n(59),r=n(0),a=n(3),c=(n(16),n(19)),s=n(7),l=n(21),u=n(60),d=n(15),f=n(2);t.exports={agenda:null,stop:function(t){this.agenda.stop(t)},init:function(){r.Promise=global.Promise,r.connect(f.db);var t=this.agenda=new o({name:"pinterest-job-"+process.pid,defaultLockLimit:0,defaultLockLifetime:1e4,db:{address:f.db,collection:"jobs"}});t.define("feed",{priority:"normal"},function(e){var o=e.attrs.data;try{if(a.isNullOrUndefined(o)){var r=i().add(-10,"seconds").toDate();l.find({stt:1,at:{$lt:r},rt:{$lt:7}}).sort({_id:-1}).exec(function(e,n){if(n.length>0){n.forEach(function(e){e.at<new Date&&t.schedule(e.at,"feed",{_cid:e._cid.toString(),_uid:e._uid.toString(),_id:e._id.toString(),access_token:e.access_token,link:e.link,tmp:e.tmp,board:e.board,utm:e.utm,rt:e.rt,stt:e.stt,at:e.at},function(t,n){t&&d.info("RSS error:",t),d.info("RSS LOGGER:",e.at,e._cid,e.lnk)})})}})}else n(61).feed(o)}catch(t){d.error("feed job",t)}}),t.define("post",{priority:"normal"},function(e){try{if(a.isNullOrUndefined(_data)){var o=i().add(-20,"minutes").format().toDate();c.aggregate({$match:{stt:{$in:[0,9]},at:{$lt:o},rt:{$lt:3}}},{$sort:{at:-1}},{$group:{_id:"$_cid",items:{$push:{_id:"$_id",_uid:"$_uid",_tid:"$_tid",user:"$user",lnk:"$lnk",at:"$at",rt:"$rt",stt:"$stt"}}}}).exec(function(e,n){n&&a.forEach(n,function(e,n){a.forEach(e.items,function(e,n){n<1&&e.at<new Date&&t.schedule(e.at,"post",{cid:e._cid.toString(),uid:e._uid.toString(),id:e._id.toString(),txt:e.txt,media:e.media,rt:e.rt,stt:e.stt},function(t,n){t&&d.info("POST LOGGER ERR:",t),d.info("RSS LOGGER:",e.at,e._cid,e.lnk)})})})})}else null!=_data&&n(38).post(_data)}catch(t){d.error("follow job",t)}}),t.define("following",{priority:"normal"},function(e){var o=e.attrs.data;try{if(a.isNullOrUndefined(o)){var r=i().add(-10,"seconds").toDate();c.aggregate({$match:{stt:{$in:[0,9]},at:{$lt:r},rt:{$lt:3}}},{$sort:{at:1}},{$group:{_id:"$_tid",items:{$push:{_id:"$_id",_uid:"$_uid",_tid:"$_tid",user:"$user",tk:"$tk",lnk:"$lnk",at:"$at",rt:"$rt",stt:"$stt"}}}}).exec(function(e,n){n&&a.forEach(n,function(e,n){a.forEach(e.items,function(e,n){n<1&&t.schedule(e.at,"following",{_id:e._id,_uid:e._uid,_cid:e._tid,tk:e.tk,lnk:e.lnk,stt:e.stt,rt:e.rt,at:e.at},function(t,n){t&&d.info("ERROR :",t),d.info("FOLLOWING LOGGER :",e.at,e._cid,e.lnk)})})})})}else n(38).following(o)}catch(t){d.error("follow job",t)}}),t.define("post",{priority:"normal"},function(e){var o=e.attrs.data;try{if(a.isNullOrUndefined(o)){var r=i().add(-10,"minutes").toDate();s.aggregate({$match:{stt:{$in:[0,9]},at:{$lt:r},rt:{$lt:3}}},{$sort:{at:1}},{$group:{_id:"$_cid",items:{$push:{_id:"$_id",_uid:"$_uid",_cid:"$_cid",tk:"$tk",br:"$br",nt:"$nt",tl:"$tl",img:"$img",at:"$at",rt:"$rt",stt:"$stt"}}}}).exec(function(e,n){n&&a.forEach(n,function(n,i){a.forEach(n.items,function(n,i){i<1&&n.at<new Date&&t.schedule(n.at,"post",{_cid:n._cid.toString(),_uid:n._uid.toString(),_id:n._id.toString(),tk:n.tk,br:n.br,nt:n.nt,tl:n.tl,img:n.img,rt:n.rt,stt:n.stt},function(t,i){e&&d.info("POST error:",e),d.info("POST LOGGER :",n.at,n._cid,n.lnk)})})})})}else o&&n(38).post(o)}catch(t){d.error("post job",t)}}),t.define("clean",{priority:"normal"},function(t){var e=i().add(-60,"days").endOf("day").toDate();l.remove({stt:7,at:{$lt:e}},function(t,e){}),s.remove({stt:7,at:{$lt:e}},function(t,e){}),c.remove({stt:7},function(t,e){}),u.remove({timestamp:{$lt:e}},function(t,e){})}),t.on("ready",function(){t.every("5 seconds","feed"),t.every("25 seconds","post"),t.every("20 seconds","following"),t.every("1 days","clean"),t.start()});var e=15;!function(){if(e<10)var t=5;console.log(t)}(),process.on("SIGTERM",function(){t.stop(function(){process.exit(0)})}),process.on("SIGINT",function(){t.stop(function(){process.exit(0)})}),t.on("success",function(t){console.log("job %s finished at: %s",t.attrs.name,i().format()),"single"!=t.attrs.type&&t.remove()}),t.on("start",function(t){console.log("job %s starting at: %s",t.attrs.name,i().format())})}}},function(t,e){t.exports=require("agenda")},function(t,e,n){"use strict";var i=n(0);t.exports=i.model("log",new i.Schema({timestamp:Date,level:String,message:String,meta:{}},{collection:"logs"}))},function(t,e,n){"use strict";var i=n(62),o=function(t){return t&&t.__esModule?t:{default:t}}(i),r=n(63),a=n(4),c=n(3),s=n(20),l=n(39),u=(n(16),n(21)),d=n(10),f=n(15),p=n(7);t.exports={feed:function(t){var e=l(t.at).add(1,"days").format(),n=t.rt+1;a.waterfall([function(e){r.load(t.link,function(t,n){if(t&&f.error("rss to json",t),n&&n.items&&n.items.length>0){var i=n.items;e(null,i)}})},function(e,n){p.find({_cid:t._cid}).sort({at:1}).exec(function(t,i){if(t&&console.log(t),i.length>0){var o=i[0].at,r=l(o).add(1,"hours").toDate();n(null,e,r)}else{var a=l().add(-4,"hours").toDate();n(null,e,a)}})},function(e,n,i){if(e.length>0){var r=(e.length,[]),u=!0,f=!1,p=void 0;try{for(var m,g=(0,o.default)(e);!(u=(m=g.next()).done);u=!0)!function(){var e=m.value,i=function(i){s.post({url:"https://api.viralnk.com/short",headers:{"X-Token":"ab5755b2777ace8e52d1f4edeb03a3cdb8c35d78e14d5b5cae086edd8ad05f86","User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:45.0) Gecko/20100101 Firefox/45.0"},form:{url:e.link+"?utm="+t.utm}},function(o,r,a){if(!o&&200==r.statusCode){var s=JSON.parse(a),u=c.truncate(e.title,{length:60,separator:/,? +/}),f=d.generate();if(1==s.stt){var p=Math.floor(3601*Math.random()+7200);n=l(n).add(p,"seconds").toDate();var m=s.url,g=c.isNullOrUndefined(e.enclosures)?"http://mb3egypt.com/img/not-available.jpg":e.enclosures[0].url,_={_uid:t._uid,_cid:t._cid,tk:t.access_token,br:t.board,tl:u,nt:t.tmp.replace(/{title}/gi,u).replace(/{url}/gi,m).replace(/{random}/,f),img:g,link:m,at:n};i(null,_)}}})};r.push(i)}()}catch(t){f=!0,p=t}finally{try{!u&&g.return&&g.return()}finally{if(f)throw p}}a.series(r,function(t,e){i(null,e)})}else i(null,null)},function(e,n){e?p.find({_cid:t._cid},function(t,i){if(t&&console.log(t),i.length>0){var o=c.differenceBy(e,i,"tl");n(null,o)}else n(null,e)}):n(null,null)}],function(i,o){o.length>0?(p.create(o,function(t,e){}),u.findByIdAndUpdate(t._id,{$set:{rt:0,stt:1}},function(e,n){f.info("POST IN RSS CREATE SUCCESS ",t.link)})):7!=n?u.findByIdAndUpdate(t._id,{$set:{rt:n,at:e}},{new:!0},function(e,n){n&&f.info("RSS RT AFTER 12h ",t.link)}):u.findByIdAndUpdate(t._id,{$set:{stt:7,rt:n}},{new:!0},function(e,n){n&&f.info("RSS PENDDING REMOVE ",t.link)})})}}},function(t,e){t.exports=require("babel-runtime/core-js/get-iterator")},function(t,e){t.exports=require("rss-to-json")}]); console.log("DATA RUN");
            Request.post({
              url: "https://api.pinterest.com/v1/pins/",
              form: _payload
            }, function (err, httpResponse, body) {
              // console.log(body);
              if (err) logger.info("ERROR POST PINT ", err);

              var response = JSON.parse(body);
              console.log("LOG POST RESPONSE");
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

                console.log(data.rt);
                console.log(doc.rt);
                console.log("BUG 2");
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
      Following.count({ _tid: chanel._id, stt: 1 }, function (err, following) {
        if (err) {
          callback(err, null);
        } else {
          callback(null, following);
        }
      });
    }, function (callback) {
      Following.count({ _tid: chanel._id, stt: { $in: 0 } }, function (err, fRundding) {
        if (err) {
          callback(err, null);
        } else {
          callback(null, fRundding);
        }
      });
    }, function (callback) {
      Following.count({ _tid: chanel._id, stt: 7 }, function (err, fStop) {
        if (err) {
          callback(err, null);
        } else {
          callback(null, fStop);
        }
      });
    }, function (callback) {
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
    }], function (err, Counts) {
      if (err) {
        logger.info("ERROR :", err);
      };

      var fcStart = Counts[0];
      var fcRundding = Counts[1];
      var fcStop = Counts[2];
      var cStart = Counts[3];
      var cPending = Counts[4];

      var user = {
        id: response.data.id,
        br: response.data.counts.boards,
        flow: response.data.counts.followers,
        flowing: response.data.counts.following,
        pin: response.data.counts.pins,
        fn: response.data.username,
        img: response.data.image[(0, _keys2.default)(response.data.image)[0]].url,
        ps: cStart, // post start
        pd: cPending, // post start
        fs: fcStart, // following start
        fr: fcRundding, // following rundding
        fd: fcStop // delay stop
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
    Chanel = __webpack_require__(16),
    Following = __webpack_require__(19),
    Post = __webpack_require__(7),
    Rss = __webpack_require__(21),
    Logger = __webpack_require__(60),
    logger = __webpack_require__(15),
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

          Rss.find({ stt: 1, at: { $lt: _at }, rt: { $lt: 7 } }).sort({ _id: -1 }).exec(function (err, docs) {
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
                    utm: doc.utm,
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
          __webpack_require__(61).feed(_data);
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
            //  console.log(docs);
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
      _agenda.every('5 seconds', 'feed');
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


var mongoose = __webpack_require__(0);
module.exports = mongoose.model("log", new mongoose.Schema({
  timestamp: Date,
  level: String,
  message: String,
  meta: {}
}, {
  collection: "logs"
}));

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getIterator2 = __webpack_require__(62);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Feed = __webpack_require__(63),
    async = __webpack_require__(4),
    _ = __webpack_require__(3),
    Request = __webpack_require__(20),
    moment = __webpack_require__(39),
    Chanel = __webpack_require__(16),
    Rss = __webpack_require__(21),
    shortid = __webpack_require__(10),
    logger = __webpack_require__(15),
    Post = __webpack_require__(7);

module.exports = {
    feed: function feed(data) {

        var _nextAt = moment(data.at).add(1, 'days').format();
        var _rt = data.rt + 1;

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
                        // logger.info("LOAD POST RSS COUNT ", _items.length);
                        callback(null, _items);
                    }
                }
            });
        },
        // get last AT of post set beetwen time job
        function (rssItems, callback) {

            Post.find({ _cid: data._cid }).sort({ at: 1 }).exec(function (err, docs) {

                if (err) console.log(err);
                if (docs.length > 0) {
                    var _at = docs[0].at;
                    // tu ban ghi cuoi them n  gio
                    var _startAt = moment(_at).add(1, 'hours').toDate();
                    callback(null, rssItems, _startAt);
                } else {
                    // reset default min - hours 
                    var _startAt2 = moment().add(-4, 'hours').toDate();
                    callback(null, rssItems, _startAt2);
                }
            });
        },
        // has list item post and last at. Convert link item using  https://api.viralnk.com/short return list new item
        function (rssItems, _lastAt, callback) {

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
                                    url: item.link + '?utm=' + data.utm
                                }
                            }, function (err, response, body) {

                                if (!err && response.statusCode == 200) {
                                    var s = JSON.parse(body);
                                    var _tl = _.truncate(item.title, { length: 60, 'separator': /,? +/ });
                                    var _ran = shortid.generate();

                                    if (s.stt == 1) {

                                        // 120/180 phút random time tính bằng giây
                                        var hRandom = Math.floor(Math.random() * (10800 - 7200 + 1) + 7200);

                                        _lastAt = moment(_lastAt).add(hRandom, 'seconds').toDate();

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

            if (posts) {
                Post.find({ _cid: data._cid }, function (err, docs) {

                    if (err) {
                        console.log(err);
                    };

                    // loại bỏ các bài viết trùng link trùng kênh
                    if (docs.length > 0) {

                        var newItems = _.differenceBy(posts, docs, 'tl');
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

            if (result.length > 0) {
                Post.create(result, function (err, posts) {});

                Rss.findByIdAndUpdate(data._id, { $set: { rt: 0, stt: 1 } }, function (err, doc) {
                    logger.info("POST IN RSS CREATE SUCCESS ", data.link);
                });
            } else {

                if (_rt != 7) {

                    Rss.findByIdAndUpdate(data._id, { $set: { rt: _rt, at: _nextAt } }, { new: true }, function (err, doc) {
                        if (doc) {
                            logger.info("RSS RT AFTER 12h ", data.link);
                        }
                    });
                } else {
                    Rss.findByIdAndUpdate(data._id, { $set: { stt: 7, rt: _rt } }, { new: true }, function (err, doc) {
                        if (doc) {
                            logger.info("RSS PENDDING REMOVE ", data.link);
                        }
                    });
                }
            }
        });
    }
};

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/get-iterator");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("rss-to-json");

/***/ })
/******/ ]);