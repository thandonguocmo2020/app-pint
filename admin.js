!function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=45)}([function(t,e){t.exports=require("mongoose")},function(t,e){t.exports=require("mongoose-paginate")},function(t,e,n){"use strict";t.exports=n(5)},function(t,e){t.exports=require("mix-utils")},function(t,e){t.exports=require("async")},function(t,e,n){"use strict";t.exports={port:{www:8070,api:8090,admin:8080},db:"mongodb://localhost/pinterest",secret:"78ad3c62b2f44ec3b65f09ebf1236a6c3c56656d6593b39c250646ee375d2075",log:{collection:"logs",level:"all"},aws:{clientID:"AKIAJGNVNF32R6UBI4XQ",clientSecret:"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",region:"us-east-1",bucket:"i.geekrill.com"},facebook:{clientID:"687615191258150",clientSecret:"4f09bd8ee3a6cff3711200f9ef2e1045",callbackURL:"http://localhost:8080/auth/facebook/callback"},twitter:{clientID:"XVuGpFDcCIfIVZfhqkMiNjSuu",clientSecret:"0wp1Q50DPjtlqX8LtgoBWCqRxpJtxKXwpmmplwhYDOEMJzXPGA",callbackURL:"http://localhost:8080/auth/twitter/callback"},tumblr:{clientID:"sC2hNnCfMHYFh84vEWB6icAuSkFdupIBo1cdrpGMMCPHBvskEP",clientSecret:"ww3bd7R4o5LtOBFvTwnH0MkUx3UMGQuWLrm3LxCUYO5j3vUsuj",callbackURL:"http://localhost:8080/auth/tumblr/callback"},google:{clientID:"Google Application ID",clientSecret:"Google Application Secret",callbackURL:"http://localhost:8080/oauth/google/callback"},mail:{sparkpost:{ApiKey:"791214ab9be4177dee42f5b84e91e25f371348ae"}}}},function(t,e,n){"use strict";var o=n(0),i=n(1);t.exports=o.model("member",new o.Schema({uid:{type:String,index:!0,unique:!0},mail:{type:String,index:!0,unique:!0},pwd:String,fn:String,ln:String,bth:Date,sex:Number,avt:String,cv:String,www:String,bio:String,tw:{},fb:{},git:{},gg:{},stt:{type:Number,default:0},crt:{type:Date,default:Date.now}},{collection:"members"}).plugin(i))},function(t,e,n){"use strict";var o=n(0),i=n(1),a=(n(10),new o.Schema({_uid:o.Schema.Types.ObjectId,_cid:o.Schema.Types.ObjectId,tk:String,br:String,nt:String,img:String,link:String,url:String,stt:{type:Number,default:0},rt:{type:Number,default:0},at:{type:Date,default:Date.now},crt:{type:Date,default:Date.now}},{collection:"posts"}).plugin(i));t.exports=o.model("post",a)},function(t,e){t.exports=require("moment")},function(t,e){t.exports=require("mix-hash")},function(t,e){t.exports=require("shortid")},function(t,e,n){"use strict";var o=n(0);t.exports=o.model("following",new o.Schema({_uid:o.Schema.Types.ObjectId,_tid:o.Schema.Types.ObjectId,tk:String,lnk:String,stt:{type:Number,default:0},rt:{type:Number,default:0},at:{type:Date,default:Date.now},crt:{type:Date,default:Date.now}},{collection:"followings"}))},function(t,e){t.exports=require("hapi")},function(t,e){t.exports=require("path")},function(t,e){t.exports=require("boom")},function(t,e){t.exports=require("hapi-bodyparser")},,function(t,e,n){"use strict";var o=n(0),i=n(1),a=new o.Schema({_uid:o.Schema.Types.ObjectId,_aid:o.Schema.Types.ObjectId,user:{},access_token:{type:String,unique:!0,index:!0},msg:{type:String,default:null},rt:{type:Number,default:1},stt:{type:Number,default:1},at:{type:Date,default:Date.now},crt:{type:Date,default:Date.now}},{collection:"chanels"}).plugin(i);t.exports=o.model("chanel",a)},function(t,e,n){"use strict";var o=n(0),i=n(1),a=new o.Schema({_uid:o.Schema.Types.ObjectId,_cid:o.Schema.Types.ObjectId,access_token:String,link:String,desc:String,board:String,tmp:String,tl:String,utm:String,rt:{type:Number,default:0},stt:{type:Number,default:1},crt:{type:Date,default:Date.now},at:{type:Date,default:Date.now}},{collection:"rss"}).plugin(i);t.exports=o.model("rss",a)},function(t,e){t.exports=require("joi")},function(t,e){t.exports=require("core-js/library/web/timers")},function(t,e){t.exports=require("request")},function(t,e){t.exports=require("inert")},function(t,e,n){"use strict";var o=(n(0),n(8),n(13),n(3),n(9)),i=(n(4),n(2),n(19),n(14),n(6));t.exports=[{method:"POST",path:"/login",config:{auth:!1,handler:function(t,e){if(t.payload.uid&&t.payload.pwd){var n=o.sha256(t.payload.pwd),a=t.payload.uid;i.findOne({$or:[{un:a},{mail:a}]},function(o,i){return o&&console.log(o),i&&n==i.pwd?0==i.stt?e({stt:0,msg:"Your account needs to be activated"}):(t.cookieAuth.set(i),e({stt:1,msg:"Login successfuly!"})):e({msg:"Invalid username or password",stt:0})})}else e({msg:"Missing username or password",stt:0})}}},{method:"POST",path:"/register",config:{auth:!1,handler:function(t,e){if(t.payload.uid&&t.payload.pwd){var n=o.sha256(t.payload.pwd),a=t.payload.uid||t.payload.mail;i.findOne({uid:a},function(o,s){if(s)return e({stt:-1,msg:"Email has been registered"});var r={fn:t.payload.fn,ln:t.payload.ln,pwd:n,uid:a,mail:a,stt:1};i.create(r,function(t,n){if(t&&console.log(t),n)return e({stt:1,msg:"Congratulations on your successful registration"});console.log({stt:0,msg:"Register fail ! Please try again"})})})}else e({msg:"Missing username or password",stt:0})}}},{method:["GET","POST"],path:"/auth/twitter",config:{auth:"twitter",handler:function(t,e){return t.auth.isAuthenticated?(t.cookieAuth.set(t.auth.credentials.profile),e.redirect("/")):e("Authentication failed due to: "+t.auth.error.message)}}},{method:["GET","POST"],path:"/auth/session",config:{auth:{strategy:"session",mode:"try"},handler:function(t,e){if(t.auth.isAuthenticated){var n=t.auth.credentials;e({session:{id:n._id,user_id:n.uid,mail:n.mail,fn:n.fn,ln:n.ln,avt:n.avt,cv:n.cv,name:[n.fn,n.ln].join(" ")},token:"",authenticated:t.auth.isAuthenticated})}else e({session:null,authenticated:!1})}}},{method:"GET",path:"/logout",config:{auth:{strategy:"session",mode:"try"},handler:function(t,e){return t.cookieAuth.clear(),e.redirect("/")}}}]},function(t,e,n){"use strict";var o=n(25),i=n(26),a=n(27),s=n(15),r=n(28),c=(n(29),n(30),n(31)),l=n(2);t.exports=function(t,e){t.register([{register:c,options:{cookie:{path:"/"}}},{register:i},{register:a},{register:s},{register:r}],function(n){t.views({engines:{html:{compile:function(t){return o.parse(t),function(e){return o.render(t,e)}}}},path:"./views"}),t.auth.strategy("session","cookie",{cookie:"sid",password:l.secret,appendNext:!0,isSecure:!1}),t.auth.strategy("twitter","bell",{provider:"twitter",password:l.secret,clientId:l.twitter.clientID,clientSecret:l.twitter.clientSecret,isSecure:!1}),t.auth.strategy("facebook","bell",{provider:"facebook",password:l.secret,clientId:l.facebook.clientID,clientSecret:l.facebook.clientSecret,isSecure:!1}),t.auth.strategy("google","bell",{provider:"google",password:l.secret,clientId:l.google.clientID,clientSecret:l.google.clientSecret,isSecure:!1}),t.route(e)})}},function(t,e){t.exports=require("mustache")},function(t,e){t.exports=require("hapi-auth-cookie")},function(t,e){t.exports=require("bell")},function(t,e){t.exports=require("vision")},function(t,e){t.exports=require("hapi-seo")},function(t,e){t.exports=require("crumb")},function(t,e){t.exports=require("hapi-server-session")},,,,,function(t,e){t.exports=require("babel-runtime/core-js/object/keys")},function(t,e,n){"use strict";var o=n(0),i=n(1),a=new o.Schema({_uid:o.Schema.Types.ObjectId,name:{type:String,index:!0},key:{type:String,unique:!0,index:!0},serect:String,img:String,redirect:String,stt:{type:Number,default:0},crt:{type:Date,default:Date.now}},{collection:"apps"}).plugin(i);t.exports=o.model("app",a)},,,,,,,,function(t,e,n){"use strict";var o=n(12),i=(n(13),n(0)),a=n(3),s=n(2),r=new o.Server({connections:{router:{isCaseSensitive:!0,stripTrailingSlash:!0}}});r.connection({port:s.port.admin,host:"localhost",routes:{cors:!0}}),r.state("data",{ttl:null,isSecure:!0,isHttpOnly:!0,encoding:"base64json",clearInvalid:!1,strictHeader:!0}),r.register({register:n(22)},function(t){if(t)throw t;r.route([{method:"GET",path:"/admin/js/{file*}",handler:{directory:{path:"./admin/js"}}},{method:"GET",path:"/admin/css/{file*}",handler:{directory:{path:"./admin/css"}}}])});var c=a.concat(n(23),n(46));n(24)(r,c),r.start(function(t){if(t)throw t;i.Promise=global.Promise,global.db=i.connect(s.db,{useMongoClient:!0,promiseLibrary:global.Promise})})},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,u.default)(t)}var a=n(36),s=o(a),r=n(47),c=o(r),l=n(48),u=o(l),d=n(49),p=o(d),f=p.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},m=(n(50),n(20)),g=n(14),h=n(0),y=(n(6),n(8)),b=n(7),_=n(37),v=n(17),w=n(11),S=n(51),k=n(4),x=n(21),O=n(52),I=n(18),P=n(54),T=(n(9),n(55),n(3)),D={auth:{strategy:"session"}};t.exports=[{method:"POST",path:"/app/fetch",config:D,handler:function(t,e){var n=t.payload;n._uid=t.auth.credentials._id;var o=t.payload.search;o&&o.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1");var i={default:{sort:{at:-1},condition:[{_uid:n._uid}]},condition:[{name:new RegExp(o,"i")}],select:{name:1,desc:1,key:1,serect:1,redirect:1,img:1,stt:1,crt:1}};O(n,_,i,function(t,n){return t?e(g.create(500,"Error Fetch Posts",t)):n?e(n):void 0})}},{method:"POST",path:"/app/save",config:D,handler:function(t,e){var n=t.payload;n.key=n.key.trim(),n.serect=n.serect.trim(),n._uid=t.auth.credentials._id;var o={condition:{_uid:n._uid,key:n.key,serect:n.serect}};P(n,_,o,function(t,n){return t?e(g.create(500,"Error save Posts",t)):n?e(n):void 0})}},{method:"POST",path:"/app/delete",config:D,handler:function(t,e){var n=[].concat(i(t.payload.ids));_.remove({_id:n},function(t,n){return e(t?g.create(500,"Error Delete Posts",t):0===n.nMatched?{stt:0,msg:"App not found"}:{stt:1,msg:"App delete success"})})}},{method:"GET",path:"/oauth/pinterest/{appid*}",config:D,handler:function(t,e){if(t.query.appid){var n=h.Types.ObjectId(t.query.appid);_.findById(n,function(n,o){if(n&&console.log("Error find app",(0,c.default)(n)),o){t.session.pinterest=o,t.session.uid=t.auth.credentials._id;var i=" https://api.pinterest.com/oauth/?scope=read_public,write_public,read_relationships,write_relationships&client_id="+o.key+"&redirect_uri="+o.redirect+"&response_type=code";e.redirect(i)}else e({stt:0,msg:"Not find App"})})}}},{method:"GET",path:"/oauth/pinterest/callback",handler:function(t,e){var n=t.session.pinterest,o=t.session.uid;k.waterfall([function(e){if(!t.query.code||!n)return e(null,"Not query and App pinterest");var i={grant_type:"authorization_code",client_id:n.key,client_secret:n.serect,code:t.query.code};x.post({url:"https://api.pinterest.com/v1/oauth/token",form:i},function(t,i,a){if(t)return e(t,null);var r=JSON.parse(a);r._aid=n._id;var c="https://api.pinterest.com/v1/me/?access_token="+r.access_token+"&fields=first_name%2Cid%2Clast_name%2Curl%2Ccounts%2Ccreated_at%2Cbio%2Caccount_type%2Cimage%2Cusername";x.get(c,function(t,n,i){var a=JSON.parse(i);if(a.data){var c={id:a.data.id,br:a.data.counts.boards,flow:a.data.counts.followers,flowing:a.data.counts.following,pin:a.data.counts.pins,fn:a.data.username,img:a.data.image[(0,s.default)(a.data.image)[0]].url};return r._uid=o,r.user=c,e(null,r)}})})},function(t,e){if(!t.user)return e(t,null);v.findOne({"user.id":t.user.id},function(n,o){n&&e(g.create(500,"Error save Posts",n),null),o?v.findByIdAndUpdate(o._id,{$set:t},{new:!0},function(t,n){t&&e(g.create(500,"Error save Posts",t),null),n?k.series([function(t){w.update({_cid:n._id},{$set:{tk:n.access_token}},{multi:!0,new:!0},function(e,n){e&&t(e),t(null,n)})},function(t){b.update({_tid:n._id},{$set:{tk:n.access_token}},{multi:!0,new:!0},function(e,n){e&&t(e),t(null,n)})}],function(t){e(null,n)}):e(null,"not update token and info")}):(t.user.ps=0,t.user.pd=0,P(t,v,null,function(t,n){t?e(t,null):n?e(null,n):e(null,"not save token and info")}))})}],function(t,n){if(t&&console.log("ERRPR LOGGER "),n){return e.redirect("/chanel/")}})}},{method:"POST",path:"/token/fetch",config:D,handler:function(t,e){var n=t.auth.credentials._id||t.payload._uid,o=t.payload,i=t.payload.search,a=t.payload._aid,s=parseInt(o.page)||1,r=parseInt(o.limit)||15,c={at:1},l=[{_uid:n}];T.isEmpty(o.search)||l.push({$or:[{"user.url":new RegExp(i,"i")}]}),h.Types.ObjectId.isValid(a)&&(l=[{_aid:a},{_uid:n}]),v.paginate({$and:l},{page:s,limit:r,sort:c},function(t,n){t&&console.log(t),e(n?{total:n.total,rows:n.docs}:{total:0,rows:[]})})}},{method:"POST",path:"/token/delete",config:D,handler:function(t,e){var n=[].concat(i(t.payload.ids));v.remove({_id:n},function(t,n){t&&console.log(t),0===n.nMatched&&e({stt:0,msg:"Follow Link not found"}),e(null,{stt:1,msg:"Link Follow delete success"})})}},{method:"POST",path:"/pinterest/board/fetch",config:D,handler:function(t,e){var n=t.auth.credentials._id,o=t.payload,i=t.payload.search,a=t.payload._cid,s=parseInt(o.page)||1,r=parseInt(o.limit)||15,c={ctr:-1},l=[{_uid:n}];T.isEmpty(o.search)||l.push({$or:[{name:new RegExp(i,"i")}]}),h.Types.ObjectId.isValid(a)&&(l=[{_cid:a},{_uid:n}]),S.paginate({$and:l},{page:s,limit:r,sort:c},function(t,n){t&&console.log(t),e(n.docs?{total:n.total,rows:n.docs}:{total:0,rows:[]})})}},{method:"POST",path:"/pinterest/board/put",handler:function(t,e){var n=t.payload;!n._id&&n._cid?k.waterfall([function(t){n.access_token=n.tk,x.post({url:"https://api.pinterest.com/v1/boards/",form:n},function(e,o,i){if(e&&console.log("Error Send APi Boadr) =====>"+(0,c.default)(e)),i){var a=JSON.parse(i);a.data?t(null,a.data):t(null,n)}})},function(t,e){x.get({url:"https://api.pinterest.com/v1/me/boards/?access_token="+n.tk+"&fields=id%2Cname%2Cdescription%2Curl"},function(o,i,a){o&&console.log("Load Boards New ) =====>"+(0,c.default)(o));var s=JSON.parse(a);if(s.data){var r=s.data;S.find({_cid:n._cid},function(t,n){if(n.length>0){var o=T.differenceBy(r,n,"url");e(null,o)}else e(null,r)})}else e(null,t)})},function(t,e){var o=[];k.series([function(e){T.forEach(t,function(t){o.push(f({_uid:n._uid,_cid:n._cid},t))}),e(null,o)}],function(t,n){e(null,n[0])})},function(t,e){S.create(t,function(t,n){t&&console.log("Create board) =====>"+(0,c.default)(t)),e(null,n)})}],function(t,n){n?e(null,{stt:1,msg:"Create Boards",data:n}):e(null,{stt:0,msg:"Create faild"})}):v.findById(n._cid,function(t,o){o&&S.findById(n._id,function(t,i){if(t&&console.log("Create board) =====>"+(0,c.default)(t)),i){var a=n.url.replace("https://www.pinterest.com/",""),s="https://api.pinterest.com/v1/boards/"+a+"?access_token="+o.access_token+"&fields=id%2Cname%2Cdescription",r={name:n.name,description:n.description};x.patch({url:s,form:r},function(t,o,a){t&&console.log("Error Send APi Boadr) =====>"+(0,c.default)(t));var s=JSON.parse(a);s.data?k.waterfall([function(t){i.name=s.data.name,i.id=s.data.id,i.description=s.data.description,i.save(function(e,n){e&&t(e,null),t(null,i)})},function(t,e){var o=n.url.replace("https://www.pinterest.com/","");o=o.substring(0,o.length-1);var i=t.url.replace("https://www.pinterest.com/","");i=o.substring(0,o.length-1),b.findOneAndUpdate({br:o},{$set:{br:i}},{multi:!0,new:!0},function(t,e){}),I.findOneAndUpdate({board:o},{$set:{board:i}},{multi:!0,new:!0},function(t,e){}),e(null,i)}],function(t,n){t&&e({stt:0,msg:"Update failt"+t}),e(n?{stt:1,msg:"Update success"}:{stt:0,msg:"Update failt"})}):e({stt:0,msg:"Update failt"+s.msg})})}})})}},{method:"POST",path:"/pinterest/post/fetch",config:D,handler:function(t,e){var n=t.auth.credentials._id,o=t.payload,i=t.payload.search,a=t.payload._cid,s=parseInt(o.page)||1,r=parseInt(o.limit)||15,c={at:1},l=[{_uid:n}];T.isEmpty(o.search)||(i=i.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1"),l.push({$or:[{nt:new RegExp(i,"i")}]})),o.br&&l.push({$or:[{br:new RegExp(o.br,"i")}]}),h.Types.ObjectId.isValid(a)&&(l=[{_cid:a},{_uid:n}]),b.paginate({$and:l},{page:s,limit:r,sort:c},function(t,n){t&&console.log(t),e(n.docs?{total:n.total,rows:n.docs}:{total:0,rows:[]})})}},{method:"POST",path:"/pinterest/post/put",handler:function(t,e){var n=t.payload;if(n._id){var o={_id:n._id,br:n.board,nt:n.note,img:n.img,link:n.link};b.findByIdAndUpdate(o._id,{$set:o},{new:!0},function(t,n){t&&console.log("ERROR UPDATE POST) =====>"+(0,c.default)(t)),n?e({stt:1,msg:"Update post success",data:n}):e(null,{stt:0,msg:"Post not match"})})}else{var i={_uid:n._uid,_cid:n._cid,tk:n.access_token,br:n.board,nt:n.note,tl:n.note,img:n.img,link:n.link,at:n.at};b.findOne({_cid:i._cid,br:i.board,nt:i.note},function(t,n){t&&console.log("ERROR FIND BEFORE PUT POST) =====>"+(0,c.default)(t)),n?e(null,{stt:0,msg:"Post exists"}):b.create(i,function(t,n){t&&console.log("ERROR PUT POST) =====>"+(0,c.default)(t)),n?e({stt:1,msg:"Create post success",data:n}):e(null,{stt:0,msg:"Post exists"})})})}}},{method:"post",path:"/pinterest/post/start",handler:function(t,e){var n=[].concat(i(t.payload.ids));b.find({_id:n},function(t,n){t&&console.log(t),n.length>0&&k.waterfall([function(t){var o=[];T.forEach(n,function(t){var n=function(n){var o=Math.floor(2001*Math.random()+1e3);(0,m.setTimeout)(function(){var o={access_token:t.tk,link:t.link,image_url:t.img,board:t.br,note:t.nt};x.post({url:"https://api.pinterest.com/v1/pins/?fields=url",form:o},function(o,i,a){if(o)return e({stt:0,msg:o});var s=JSON.parse(a);s.data?b.update({_id:t},{$set:{stt:1,rt:3,url:s.data.url}},{new:!0},function(e,o){e&&n.log(e,null),n(null,{pid:t._id,data:s.data})}):n(null,{pid:t._id,data:s.data})})},o)};o.push(n)}),k.series(o,function(e,n){t(e,n)})}],function(t,n){e(n.length>0?{stt:1,msg:"Public post success"+n.length,data:n}:{stt:0,msg:"Public post fail"})})})}},{method:"POST",path:"/pinterest/post/stop",handler:function(t,e){var n=[].concat(i(t.payload.ids));k.waterfall([function(t){var e=[];T.forEach(n,function(t){var n=function(e){b.findByIdAndUpdate({_id:t},{$set:{stt:7,rt:0}},{new:!0},function(n,o){n&&e(n,null),o?e(null,{pid:t,stt:0,msg:"Post  stop success"}):e(null,{pid:t,stt:1,msg:"Post  stop fail"})})};e.push(n)}),k.series(e,function(e,n){t(e,n)})}],function(t,n){e(n.length>0?{stt:1,msg:"Public post success"+n.lengt,data:n}:{stt:0,msg:"Public post fail"})})}},{method:"POST",path:"/pinterest/post/del",handler:function(t,e){var n=[].concat(i(t.payload.ids));b.remove({_id:n},function(t,n){t&&console.log(t),0===n.nMatched&&e({stt:0,msg:"Post  delete success"}),e(null,{stt:1,msg:"Post  delete success"})})}},{method:"post",path:"/pinterest/rss/put",handler:function(t,e){var n=t.payload;I.findOne({_uid:n._uid,board:n.board,link:n.link},function(t,o){t&&console.log(t),o?e({stt:0,msg:"Document exists on chanel !"}):I.find({_cid:n._cid}).sort({_id:-1}).exec(function(t,o){t&&console.log(t),o?(n.at=y(o.at).add(5,"minutes").toDate(),I.create(n,function(t,n){t&&console.log(t),e(n?{stt:1,msg:"Document save success !",data:n}:{stt:0,msg:"Rss not save !"})})):I.create(n,function(t,n){t&&console.log(t),e(n?{stt:1,msg:"Document save success !",data:n}:{stt:0,msg:"Rss not save !"})})})})}},{method:"post",path:"/pinterest/rss/update",handler:function(t,e){var n=y().toDate();I.findByIdAndUpdate(t.payload._id,{$set:{at:n,stt:1}},{new:!0},function(t,n){t&&console.log(t),e(n?{stt:1,msg:"Update rss run now ",data:n}:{stt:0,msg:"Rss not find match document",data:n})})}},{method:"post",path:"/pinterest/rss/del",handler:function(t,e){var n=[].concat(i(t.payload.ids));I.remove({_id:n},function(t,n){t&&console.log(t),0===n.nMatched&&e({stt:0,msg:"Rss  delete success"}),e(null,{stt:1,msg:"Rss  delete success"})})}},{method:"POST",path:"/pinterest/rss/fetch",config:D,handler:function(t,e){var n=t.auth.credentials._id||t.payload._uid,o=t.payload,i=t.payload.search,a=t.payload._cid,s=parseInt(o.page)||1,r=parseInt(o.limit)||15,c={ctr:-1},l=[{_uid:n}];T.isEmpty(o.search)||(i.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1"),l.push({$or:[{link:new RegExp(i,"i")}]})),h.Types.ObjectId.isValid(a)&&(l=[{_cid:a},{_uid:n}]),I.paginate({$and:l},{page:s,limit:r,sort:c},function(t,n){t&&console.log(t),e(n?{total:n.total,rows:n.docs}:{total:0,rows:[]})})}},{method:"POST",path:"/pinterest/following/add",handler:function(t,e){var n=t.payload;console.log(n.tk);var o=[];n.items.split(",").forEach(function(t){o.push({_uid:n._uid,_tid:n._tid,user:n.user,tk:n.tk,lnk:t})}),k.waterfall([function(t){w.find({_tid:o[0]._tid}).sort({_id:-1}).limit(1).exec(function(e,n){if(e&&t(e,null),n.length>0){var o=n[0].at;t(null,o)}else{var i=Date.now();t(null,i)}})}],function(t,n){w.find({_uid:o[0]._uid,_tid:o[0]._tid},function(t,i){if(t&&console.log(t),i.length>0){var a=T.differenceBy(o,i,"lnk"),s=[],r=y(n).add(10,"minutes").format();T.forEach(a,function(t){var e=Math.floor(21*Math.random()+40);r=y(r).add(e,"minutes").format(),t=T.assignIn({},t,{at:r,crt:r}),s.push(t)}),w.create(s,function(t,n){t&&console.log(t),e(n?{stt:1,msg:"followings add success"}:{stt:0,msg:"list followings exists"})})}else{var c=[],l=y(n).add(10,"minutes").format();T.forEach(o,function(t){var e=Math.floor(41*Math.random()+40);l=y(l).add(e,"minutes").format(),t=T.assignIn({},t,{at:l,ctr:l}),c.push(t)}),w.create(c,function(t,n){t&&console.log(n),e(n?{stt:1,msg:"followings add success"}:{stt:0,msg:"no add followings"})})}})})}},{method:"GET",path:"/{params*}",handler:function(t,e){return e.file("./views/admin.html")}}]},function(t,e){t.exports=require("babel-runtime/core-js/json/stringify")},function(t,e){t.exports=require("babel-runtime/core-js/array/from")},function(t,e){t.exports=require("babel-runtime/core-js/object/assign")},function(t,e){t.exports=require("url")},function(t,e,n){"use strict";var o=n(0),i=n(1),a=new o.Schema({_uid:o.Schema.Types.ObjectId,_cid:o.Schema.Types.ObjectId,url:String,name:String,description:String,stt:{type:Number,default:0},crt:{type:Date,default:Date.now}},{collection:"boadrs"}).plugin(i);t.exports=o.model("boadr",a)},function(t,e,n){"use strict";var o=n(53),i=function(t){return t&&t.__esModule?t:{default:t}}(o);t.exports=function(t,e,n,o){var a=parseInt(t.page)||1,s=parseInt(t.limit)||15,r=n.default.sort,c=n.default.condition;i.default.isEmpty(t.search)||c.push({$or:n.condition}),e.paginate({$and:c},{select:n.select,page:a,limit:s,sort:r},function(t,e){t&&o(t,null),e?o(null,{total:e.total,rows:e.docs}):o(null,{total:0,rows:[]})})}},function(t,e){t.exports=require("lodash")},function(t,e,n){"use strict";t.exports=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments[3];t._id?e.findByIdAndUpdate(t._id,{$set:t},{new:!0},function(t,e){t&&o(t,null),e&&o(null,{stt:1,msg:"Update success",data:e})}):n?e.findOne(n.condition).then(function(n){n?o(null,{stt:0,msg:"Document already exists"}):e.create(t,function(t,e){o(null,{stt:1,msg:"Save document success",data:e})})}).catch(function(t){t&&o(t,null)}):e.create(t,function(t,e){o(null,{stt:1,msg:"Save document success",data:e})})}},function(t,e){t.exports=require("fs")}]);   }
    // Create a new Mongoose connection instance
    mongoose.Promise = global.Promise;
    global.db = mongoose.connect(config.db, { useMongoClient: true, promiseLibrary: global.Promise });
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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _keys = __webpack_require__(36);

var _keys2 = _interopRequireDefault(_keys);

var _stringify = __webpack_require__(47);

var _stringify2 = _interopRequireDefault(_stringify);

var _from = __webpack_require__(48);

var _from2 = _interopRequireDefault(_from);

var _assign = __webpack_require__(49);

var _assign2 = _interopRequireDefault(_assign);

var _extends = _assign2.default || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _url = __webpack_require__(50);

var _timers = __webpack_require__(20);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return (0, _from2.default)(arr); } }

// Invoke 'strict' JavaScript mode
"use strict";

var Boom = __webpack_require__(14),
    mongoose = __webpack_require__(0),
    Member = __webpack_require__(6),
    moment = __webpack_require__(8),
    Post = __webpack_require__(7),
    Pinterest = __webpack_require__(37),
    Chanel = __webpack_require__(17),
    Following = __webpack_require__(11),
    Board = __webpack_require__(51),
    async = __webpack_require__(4),
    Request = __webpack_require__(21),
    fetch = __webpack_require__(52),
    Rss = __webpack_require__(18),
    put = __webpack_require__(54),
    Hash = __webpack_require__(9),
    fs = __webpack_require__(55),
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
    _obj.key = _obj.key.trim();
    _obj.serect = _obj.serect.trim();

    _obj._uid = request.auth.credentials._id;

    var query = {
      condition: { _uid: _obj._uid, key: _obj.key, serect: _obj.serect }
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

        //  _.forEach( result.docs,(item)=>{

        //     Following.findOne({_tid: item._id, stt:  })

        //  });

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
    var _sort = { at: 1 };
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
            reply({ stt: 1, msg: "Public post success" + docs.length, data: docs });
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

    Rss.findByIdAndUpdate(request.payload._id, { $set: { at: _at, stt: 1 } }, { new: true }, function (err, doc) {

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
            var hRandom = Math.floor(Math.random() * (80 - 40 + 1) + 40);

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
            // random 40-80 đơn vị ví dụ phút
            var hRandom = Math.floor(Math.random() * (80 - 40 + 1) + 40);

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
/* 47 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/array/from");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/assign");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 51 */
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
/* 52 */
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

var _lodash = __webpack_require__(53);

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
/* 53 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 54 */
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
/* 55 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ })
/******/ ]);