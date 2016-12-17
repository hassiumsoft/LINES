"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var s=0;s<t.length;s++){var i=t[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,s,i){return s&&e(t.prototype,s),i&&e(t,i),t}}();!function e(t,s,i){function n(r,o){if(!s[r]){if(!t[r]){var c="function"==typeof require&&require;if(!o&&c)return c(r,!0);if(a)return a(r,!0);throw new Error("Cannot find module '"+r+"'")}var l=s[r]={exports:{}};t[r][0].call(l.exports,function(e){var s=t[r][1][e];return n(s?s:e)},l,l.exports,e,t,s,i)}return s[r].exports}for(var a="function"==typeof require&&require,r=0;r<i.length;r++)n(i[r]);return n}({1:[function(e,t,s){var i=e("./scenes/CanvasEffect"),n=e("./scenes/Settings"),a=e("./scenes/Interface"),r=e("./scenes/Menu"),o=e("./scenes/Play"),c=e("./scenes/Splash"),l=e("./mixins/Navigation"),h=e("./mixins/WindowManager"),u=e("./mixins/AjaxRequests"),y=(e("./mixins/helper"),function p(t){_classCallCheck(this,p),$("#splash").fadeOut(),this.edition=t.edition||"FREE",this.notifications=e("./mixins/notifications"),this.ads=e("./mixins/ads"),this.notifications(this),this.ads.init(this),this.zoom=$(window).width()/1e3>1?1:$(window).width()/1e3,$("body").css("zoom",this.zoom),this.w=Math.round($(window).width()/this.zoom),this.h=Math.round($(window).height()/this.zoom),this.centerX=this.w/2,this.centerY=this.h/2,this.levelOverClicks=0,this.restartClicks=0,this.navigation=new l(this),this.windowManager=new h(this),this.ajaxRequests=new u(this,t.repository),this.effect=new i(this,t.effect),this.play=new o(this,t.play),this.settings=new n(this),this["interface"]=new a(this),this.menu=new r(this),this.splash=new c(this),this.navigation.toMenu(),this.music=AudioFX(t.music.file,{volume:.5,loop:!0,autoplay:!0})});t.exports=y},{"./mixins/AjaxRequests":14,"./mixins/Navigation":15,"./mixins/WindowManager":16,"./mixins/ads":17,"./mixins/helper":18,"./mixins/notifications":19,"./scenes/CanvasEffect":20,"./scenes/Interface":21,"./scenes/Menu":22,"./scenes/Play":23,"./scenes/Settings":24,"./scenes/Splash":25}],2:[function(e,t,s){var i=e("./Game"),n=function(){this.game=new i({play:{currentLevel:0},effect:{particles:Math.round(window.innerWidth/50),image:"./assets/img/particle.png",config:{r:[20,100],x:[0,window.innerWidth],y:[0,window.innerHeight],vecX:[-.5,.5],vecY:[-.5,.5],alpha:[.1,.2],blur:[.7,.8]}},music:{file:"assets/music/loneliness.ogg",volume:.5,loop:!0},repository:"https://raw.githubusercontent.com/AZbang/LINES/master/levels",edition:"FREE"})};window.cordova?document.addEventListener("deviceready",n,!1):window.onload=n},{"./Game":1}],3:[function(e,t,s){var i=e("../mixins/helper"),n=e("./TouchArea"),a=e("./UntouchArea"),r=function(){function e(t,s){_classCallCheck(this,e),this.level=t,this.game=this.level.game,this.group=this.level.svg.g(),this.areas=[],this._parseConfig(s||[])}return _createClass(e,[{key:"_parseConfig",value:function(e){if(e.length)for(var t=0;t<e.length;t++){var s=e[t];this.addArea(this.level.game.centerX+s.x,this.level.game.centerY+s.y,s.w,s.h,s.type)}else this.addArea(0,0,this.level.game.w,this.level.game.h,"touch")}},{key:"deleteAreas",value:function(){for(var e=0;e<this.areas.length;e++)this.areas.rect.remove();this.areas=[]}},{key:"activateArea",value:function(e,t){for(var s=0;s<this.areas.length;s++){var n=this.areas[s];if(i.isContains(n.x,n.y,n.w,n.h,e,t))return this.areas[s].touchEvent()}}},{key:"addArea",value:function(t,s,i,n,a){var r=new e.types[a](this,t,s,i,n);this.areas.push(r)}}]),e}();r.types={touch:n,untouch:a},t.exports=r},{"../mixins/helper":18,"./TouchArea":9,"./UntouchArea":11}],4:[function(e,t,s){var i=e("./UserCircle"),n=e("./CrossCircle"),a=e("./UncrossCircle"),r=e("./HintCircle"),o=function(){function e(t,s){_classCallCheck(this,e),this.level=t,this.game=this.level.game,this.group=this.level.svg.g(),this.circles=[],s&&this._parseConfig(s)}return _createClass(e,[{key:"_parseConfig",value:function(e){for(var t=0;t<e.length;t++){var s=e[t];this.addCircle(this.level.game.centerX+s.x,this.level.game.centerY+s.y,s.type)}}},{key:"deleteCircles",value:function(){for(var e=0;e<this.circles.length;e++)this.circles[e].circle.remove();this.circles=[]}},{key:"addCircle",value:function(t,s,i){var n=new e.types[i](this,t,s);this.circles.push(n)}}]),e}();o.types={user:i,uncross:a,cross:n,hint:r},t.exports=o},{"./CrossCircle":5,"./HintCircle":6,"./UncrossCircle":10,"./UserCircle":12}],5:[function(e,t,s){var i=function(){function e(t,s,i){_classCallCheck(this,e),this.manager=t,this.circle=this.manager.group.circle(s,i,0),this.circle.attr({fill:"rgb(228, 78, 78)",strokeWidth:3}),this.circle.animate({r:25},1e3,mina.elastic),this.type="cross",this.x=s,this.y=i,this.r=25}return _createClass(e,[{key:"startCrossAnimation",value:function(){this.circle.animate({fill:"#8BC34A"},1e3)}},{key:"crossEvent",value:function(){this.manager.level.intersectionsLeft--}}]),e}();t.exports=i},{}],6:[function(e,t,s){var i=function n(e,t,s){_classCallCheck(this,n),this.manager=e,this.circle=this.manager.group.circle(t,s,35),this.circle.attr({fill:"rgba(225, 225, 225, 0.3)",stroke:"#fff",strokeWidth:2,r:0}),this.circle.animate({r:30},500,mina.elastic),this.type="hint",this.r=35};t.exports=i},{}],7:[function(e,t,s){var i=e("../mixins/helper"),n=e("./CirclesManager"),a=e("./AreasManager"),r=e("./PathManager"),o=function(){function e(t,s,i){_classCallCheck(this,e),this.game=t.game,this.play=t,this.config=i||{},this.isNew=s,this.svg=this.play.paper.svg(0,0,this.game.w,this.game.h),this.currentWindow=0,this.label=this.config.label||"LEVEL",this.stepsLeft=this.config.steps||0,this.intersectionsLeft=this.config.intersections||0,this.clicks=localStorage.getItem("clicks")-0||0,this.currentHint=localStorage.getItem("currentHint")-0||0,this.game.ads.load(),this._loadLevel(),this.update()}return _createClass(e,[{key:"_loadLevel",value:function(){this.areas=new a(this,this.config.areas),this.hints=new n(this),this.userPath=new r(this),this.circles=new n(this,this.config.objects),this.user=new n(this),this.game["interface"].selectButtons({restart:!!~this.config.buttons.indexOf("R"),closePath:!!~this.config.buttons.indexOf("Z"),hint:!1}),this.game["interface"].hint.css("right",~this.config.buttons.indexOf("Z")?210:120),this.isNew&&this.config.windows&&this.nextWindow()}},{key:"update",value:function(){this.clicks>=this.config.clicks&&this.game["interface"].selectButtons({hint:!0})}},{key:"checkLevelOver",value:function(){var e=this;this.checkCollisionLineWithCircle(),this.intersectionsLeft<=0&&(this.play.isLevelOver=!0,setTimeout(function(){e.game.levelOverClicks++,e.game.levelOverClicks>2&&(e.game.ads.show(),e.game.levelOverClicks=0),localStorage.setItem("clicks",0),localStorage.setItem("currentHint",0),e.play.isLevelOver=!1,e.play.nextLevel()},1e3))}},{key:"checkCollisionLineWithCircle",value:function(){var e=this.userPath.points.length-1;if(e)for(var t=0;t<this.circles.circles.length;t++){var s=this.circles.circles[t],n=this.userPath.points[e],a=this.userPath.points[e-1];i.getHeightTriangle(n.x,n.y,a.x,a.y,s.x,s.y)<s.r&&(s.startCrossAnimation(),s.isCollision||s.crossEvent(),s.isCollision=!0)}}},{key:"showHint",value:function(){this.clicks=Math.min(this.clicks,this.config.hints.length*this.config.clicks),this.hints.deleteCircles(),this.currentHint=Math.round(this.clicks/this.config.clicks),localStorage.setItem("currentHint",this.currentHint);for(var e,t=0;t<this.currentHint;t++)e=this.config.hints[t],this.hints.addCircle(this.game.centerX+e.x,this.game.centerY+e.y,"hint");this.game["interface"].selectButtons({hint:!0})}},{key:"nextWindow",value:function(){var e=this,t=this.config.windows[this.game.settings.lang];!t||this.currentWindow>t.length-1||(this.game.windowManager.addWindow(t[this.currentWindow],function(){return e.nextWindow()}),this.currentWindow++)}},{key:"closePath",value:function(){!this.isLevelClosePath&&this.user.circles.length&&(this.isLevelClosePath=!0,this.userPath.closePath(),this.checkLevelOver())}}]),e}();t.exports=o},{"../mixins/helper":18,"./AreasManager":3,"./CirclesManager":4,"./PathManager":8}],8:[function(e,t,s){var i=function(){function e(t){_classCallCheck(this,e),this.level=t,this.game=this.level.game,this.path=this.level.svg.path(""),this.path.attr({fill:"transparent",stroke:"#fff",strokeWidth:3}),this.points=[]}return _createClass(e,[{key:"addPoint",value:function(e,t){var s=this.path.attr("d");this.path.attr({d:""+s+(this.points.length?"L":"M")+e+","+t}),this.points.push({x:e,y:t})}},{key:"closePath",value:function(){var e=this.path.attr("d");this.path.attr({d:e+" Z"}),this.addPoint(this.points[0].x,this.points[0].y)}}]),e}();t.exports=i},{}],9:[function(e,t,s){var i=function(){function e(t,s,i,n,a){_classCallCheck(this,e),this.manager=t,this.rect=this.manager.group.rect(s,i,n,a),this.rect.attr({fill:"transparent",stroke:"#fff",strokeWidth:5}),this.type="touch",this.x=s||0,this.y=i||0,this.w=n||0,this.h=a||0}return _createClass(e,[{key:"touchEvent",value:function(){return!0}}]),e}();t.exports=i},{}],10:[function(e,t,s){var i=function(){function e(t,s,i){_classCallCheck(this,e),this.manager=t,this.circle=this.manager.group.circle(s,i,25),this.circle.attr({r:25,fill:"rgba(103, 58, 183)",opacity:.63,strokeWidth:3}),this.type="uncross",this.x=s,this.y=i,this.r=25}return _createClass(e,[{key:"startCrossAnimation",value:function(){this.circle.animate({r:20,fill:"#fff"},500)}},{key:"crossEvent",value:function(){this.manager.level.intersectionsLeft="X",this.manager.level.stepsLeft=0}}]),e}();t.exports=i},{}],11:[function(e,t,s){var i=function(){function e(t,s,i,n,a){_classCallCheck(this,e),this.manager=t,this.rect=this.manager.group.rect(s,i,n,a),this.rect.attr({fill:"transparent",stroke:"#FF3535",opacity:.8,strokeWidth:5}),this.type="untouch",this.x=s||0,this.y=i||0,this.w=n||0,this.h=a||0}return _createClass(e,[{key:"touchEvent",value:function(){return!1}}]),e}();t.exports=i},{}],12:[function(e,t,s){var i=function n(e,t,s){_classCallCheck(this,n),this.manager=e,this.circle=this.manager.group.circle(t,s,0),this.circle.attr({fill:"#fff"}),this.circle.animate({r:20},1e3,mina.elastic),this.type="user",this.r=20};t.exports=i},{}],13:[function(e,t,s){t.exports=[{label:"EASY",objects:[{type:"cross",x:0,y:0}],steps:2,intersections:1,buttons:"R",windows:{ru:[{label:"LINES",text:"В живописи, как и в морали, главное состоит в том, чтобы в нужном месте провести линию — Гилберт Кит Честертон"},{label:"INFO",text:"Чтобы перезагрузить игру, нажмите R"}],en:[{label:"LINES",text:"Art, like morality, consists in drawing the line somewhere. — Gilbert Keith Chesterton"},{label:"INFO",text:"To reset the game, press R"}]}},{label:"I ANGULUS",objects:[{type:"cross",x:-75,y:-75},{type:"cross",x:-75,y:75},{type:"cross",x:75,y:-75},{type:"cross",x:75,y:75}],steps:3,intersections:4,buttons:"R",windows:{ru:[{label:"LINES",text:"Конец уже содержится в начале. — Джордж Оруэлл. 1984"},{label:"INFO",text:"Нажмите на H, чтобы получить подсказку, когда она появится"}],en:[{label:"LINES",text:"The end is already contained in the beginning. - George Orwell. 1984"},{label:"INFO",text:"Press H, to get a clue when it appears"}]},clicks:18,hints:[{x:250,y:-125},{x:-350,y:0},{x:250,y:125}]},{label:"V and IX",intersections:9,steps:4,clicks:50,objects:[{x:95,y:95,type:"cross"},{x:0,y:95,type:"cross"},{x:-95,y:95,type:"cross"},{x:-95,y:0,type:"cross"},{x:0,y:0,type:"cross"},{x:95,y:0,type:"cross"},{x:95,y:-95,type:"cross"},{x:0,y:-95,type:"cross"},{x:-95,y:-95,type:"cross"}],hints:[{x:-268.5,y:141.5},{x:331.5,y:41.5},{x:-268.5,y:-58.5},{x:331.5,y:-158.5}],buttons:"R",areas:null,hintRU:null,hintUS:null},{label:"III IN A ROW",objects:[{type:"cross",x:-50,y:-50},{type:"cross",x:0,y:-50},{type:"cross",x:50,y:-50},{type:"cross",x:-50,y:0},{type:"cross",x:0,y:0},{type:"cross",x:50,y:0},{type:"cross",x:-50,y:50},{type:"cross",x:0,y:50},{type:"cross",x:50,y:50}],steps:2,intersections:5,buttons:"R",windows:{en:[{label:"LINES",text:"Do not lose not one who knows all the options of victory, but the one who knows all the options defeat. — Haroun Agatsarsky"}],ru:[{label:"LINES",text:"Не проигрывает не тот, кто знает все варианты победы, а тот, кто знает все варианты поражения. — Гарун Агацарский"}]},clicks:22,hints:[{x:-100,y:100},{x:60,y:-100}]},{label:"CONIUNCTIS",intersections:4,steps:3,clicks:50,objects:[{x:-230,y:-80,type:"cross"},{x:220,y:-80,type:"cross"},{x:270,y:20,type:"cross"},{x:-280,y:20,type:"cross"}],hints:[{x:-5,y:-30},{x:-130,y:-5},{x:120,y:-5}],areas:[{x:-189,y:-119,w:368,h:208,type:"touch"}],buttons:"R",windows:{ru:[{label:"LINES",text:"Если бы отрезок не считал себя бесконечной прямой, он вряд ли бы дотянул от одной до другой точки — Феликс Кривин"}],en:[{label:"LINES",text:"If the line segment is not considered himself an infinite straight line, he is unlikely to reach from one to another point — Felix Krivine"}]}},{label:"RATS",intersections:8,steps:5,objects:[{x:-230,y:-30,type:"cross"},{x:220,y:-30,type:"cross"},{x:-30,y:-230,type:"cross"},{x:20,y:-230,type:"cross"},{x:-100,y:260,type:"cross"},{x:100,y:260,type:"cross"},{x:-135,y:225,type:"cross"},{x:135,y:225,type:"cross"}],clicks:50,hints:[{x:145,y:20},{x:-80,y:170},{x:-5,y:-180},{x:70,y:170},{x:-155,y:20}],areas:[{x:-175,y:-175,w:350,h:350,type:"touch"}],buttons:"R",windows:{ru:[{label:"LINES",text:"Начиная с определенной точки, возврат уже невозможен. Этой точки надо достичь. — Франц Кафка"}],en:[{label:"LINES",text:"There is a point of no return. This point has to be reached. — Franz Kafka"}]}},{label:"TRIGONUS",clicks:50,objects:[{x:-180,y:-5,type:"cross"},{x:-130,y:-55,type:"cross"},{x:170,y:45,type:"cross"},{x:70,y:-55,type:"cross"},{x:120,y:95,type:"cross"},{x:-80,y:95,type:"cross"}],hints:[{x:-280,y:95},{x:-30,y:-155},{x:220,y:95}],steps:3,intersections:6,areas:[{x:-300,w:600,y:-160,h:340,type:"touch"}],buttons:"R Z",windows:{ru:[{label:"LINES",text:"Когда пора возвращаться, судьба найдет способ тебя вернуть. — Сара Джио. Фиалки в марте"},{label:"INFO",text:"Чтобы замкнуть точки линией, нажмите Z"}],en:[{label:"LINES",text:"Fate has a way of bringing you back when it's time to come back — Sarah Jio. The Violets of March"},{label:"INFO",text:"To close the line points, press Z"}]}},{label:"BEAR",steps:3,intersections:6,clicks:50,buttons:"R Z",objects:[{x:-130,y:70,type:"cross"},{x:45,y:45,type:"cross"},{x:245,y:195,type:"cross"},{x:295,y:70,type:"cross"},{x:-305,y:-55,type:"cross"},{x:70,y:170,type:"cross"}],hints:[{x:245,y:220},{x:-330,y:-30},{x:70,y:45}],areas:[{x:-339,y:-91,w:69,h:70,type:"touch"},{x:10,y:11,w:71,h:68,type:"touch"},{x:212,y:163,w:67,h:66,type:"touch"}],hintRU:null,hintUS:null,"new":!0},{label:"BACKWARDS",clicks:50,hints:[{x:-80,y:70},{x:-5,y:-155},{x:95,y:-155},{x:45,y:120}],objects:[{type:"cross",x:-50,y:0},{type:"cross",x:100,y:-100},{type:"cross",x:50,y:50},{type:"cross",x:50,y:250},{type:"cross",x:-150,y:250}],areas:[{x:-125,w:325,y:-160,h:300,type:"touch"}],steps:4,intersections:5,buttons:"R Z",windows:{ru:[{label:"LINES",text:"Мы не отступаем — мы идем в другом направлении. — Дуглас Макартур"}],en:[{label:"LINES",text:"We are not retreating - we are going in the other direction — Douglas MacArthur"}]}},{label:"MALUM",clicks:5,objects:[{x:-5,y:-5,type:"cross"},{x:45,y:-5,type:"uncross"},{x:-55,y:-5,type:"uncross"},{x:-5,y:-55,type:"uncross"},{x:-5,y:45,type:"uncross"}],hints:[{x:-55,y:45},{x:45,y:-55},{x:-55,y:-55},{x:45,y:45}],steps:2,intersections:1,buttons:"R Z",windows:{ru:[{label:"LINES",text:"Мы замечаем препятствия, когда отрываем взгляд от цели. — Джозеф Коссман"}],en:[{label:"LINES",text:"We notice the obstacles, when we do not look at the goal. — Joseph Kossman"}]}},{label:"III",clicks:30,objects:[{x:-155,y:45,type:"cross"},{x:-80,y:-30,type:"cross"},{x:-5,y:-105,type:"cross"},{x:70,y:-30,type:"cross"},{x:145,y:45,type:"cross"},{x:-5,y:170,type:"cross"},{x:-5,y:-30,type:"uncross"},{x:70,y:95,type:"uncross"},{x:-80,y:95,type:"uncross"},{x:-5,y:45,type:"uncross"},{x:70,y:-155,type:"uncross"},{x:-80,y:-155,type:"uncross"}],hints:[{x:-255,y:170},{x:20,y:-180},{x:195,y:170}],steps:3,intersections:6,buttons:"RZ",areas:null},{label:"EAZY?",objects:[{x:-43,y:-48,type:"cross"},{x:-42,y:-8,type:"cross"},{x:-41,y:29,type:"cross"},{x:-40,y:70,type:"cross"},{x:-39,y:112,type:"cross"},{x:-44,y:-83,type:"cross"},{x:-19,y:-38,type:"cross"},{x:-2,y:-7,type:"cross"},{x:18,y:23,type:"cross"},{x:40,y:51,type:"cross"},{x:57,y:86,type:"cross"},{x:78,y:114,type:"cross"},{x:84,y:80,type:"cross"},{x:86,y:49,type:"cross"},{x:87,y:20,type:"cross"},{x:87,y:-13,type:"cross"},{x:87,y:-47,type:"cross"},{x:139,y:-84,type:"cross"},{x:174,y:-85,type:"cross"},{x:220,y:-85,type:"cross"},{x:125,y:2,type:"cross"},{x:160,y:5,type:"cross"},{x:198,y:7,type:"cross"},{x:227,y:7,type:"cross"},{x:115,y:108,type:"cross"},{x:156,y:112,type:"cross"},{x:201,y:110,type:"cross"},{x:234,y:113,type:"cross"},{x:92,y:-85,type:"cross"},{x:394,y:-52,type:"cross"},{x:364,y:-76,type:"cross"},{x:320,y:-65,type:"cross"},{x:305,y:-22,type:"cross"},{x:325,y:13,type:"cross"},{x:369,y:35,type:"cross"},{x:390,y:73,type:"cross"},{x:371,y:116,type:"cross"},{x:329,y:131,type:"cross"},{x:298,y:123,type:"cross"},{x:-257,y:-90,type:"cross"},{x:-257,y:-54,type:"cross"},{x:-258,y:-13,type:"cross"},{x:-257,y:24,type:"cross"},{x:-259,y:55,type:"cross"},{x:-260,y:102,type:"cross"},{x:-214,y:104,type:"cross"},{x:-173,y:105,type:"cross"},{x:-128,y:72,type:"uncross"},{x:-128,y:41,type:"uncross"},{x:-127,y:12,type:"uncross"},{x:-125,y:-21,type:"uncross"},{x:-124,y:-56,type:"uncross"},{x:-123,y:-91,type:"uncross"},{x:-131,y:111,type:"uncross"}],clicks:50,hints:[{x:95,y:145},{x:120,y:-105},{x:-180,y:-230}],steps:3,intersections:20,buttons:"RZ",areas:null,hintRU:null,hintUS:null,"new":!0},{label:"CHAOS",clicks:50,objects:[{x:-205,y:-155,type:"cross"},{x:95,y:20,type:"cross"},{x:145,y:-80,type:"cross"},{x:220,y:-155,type:"cross"},{x:-30,y:45,type:"cross"},{x:-30,y:-130,type:"cross"},{x:-130,y:-155,type:"cross"},{x:-239,y:98,type:"cross"},{x:195,y:95,type:"uncross"},{x:120,y:145,type:"uncross"},{x:-280,y:20,type:"uncross"},{x:-205,y:170,type:"uncross"},{x:-130,y:195,type:"uncross"},{x:-280,y:195,type:"uncross"},{x:-304,y:78,type:"uncross"},{x:-105,y:120,type:"uncross"},{x:95,y:-155,type:"uncross"},{x:170,y:-230,type:"uncross"},{x:20,y:-230,type:"uncross"},{x:-105,y:-30,type:"uncross"},{x:-230,y:-80,type:"cross"},{x:-230,y:20,type:"uncross"},{x:245,y:-55,type:"uncross"},{x:-5,y:270,type:"uncross"}],hints:[{x:-305,y:120},{x:195,y:-5},{x:-330,y:-205},{x:-105,y:45},{x:295,y:-205}],steps:5,intersections:9,buttons:"RZ",areas:null,windows:{ru:[{label:"LINES",text:"Жизнь — это прежде всего хаос, в котором ты затерян. Хосе Ортега-и-Гассет"}],en:[{label:"LINES",text:"Life - is first of all the chaos, in which you lost. Josе Ortega y Gasset"}]}},{label:"IMPEDIMENTA",objects:[{type:"cross",x:-90,y:-70},{type:"cross",x:90,y:-70},{type:"uncross",x:55,y:-30},{type:"uncross",x:-55,y:-30},{type:"cross",x:55,y:30},{type:"cross",x:-55,y:30},{type:"cross",x:90,y:70},{type:"cross",x:-90,y:70},{type:"uncross",x:-175,y:40},{type:"uncross",x:175,y:40},{type:"uncross",x:55,y:200},{type:"uncross",x:-55,y:200}],clicks:50,hints:[{x:-230,y:-80},{x:-205,y:95},{x:220,y:95},{x:245,y:-80}],steps:4,intersections:6,buttons:"R Z",windows:{ru:[{label:"LINES",text:"Не тратьте время в поиске препятствий: их может и не существовать. — Франц Кафка"}],en:[{label:"LINES",text:"Do not waste your time searching for obstacles: they may does not exist. — Franz Kafka"}]}}]},{}],14:[function(e,t,s){var i=function(){function e(t,s){_classCallCheck(this,e),this.game=t,this.repository=s,this.translates={ask:{ru:{label:"INFO",text:"Загрузить новые уровни?"},en:{label:"INFO",text:"Download new levels?"}},noNewLevels:{ru:{label:"INFO",text:"Вы прошли все головоломки в игре. Ожидайте новых уровней каждую неделю!"},en:{label:"INFO",text:"You passed all the puzzles in the game. Expect new levels every week!"}},failLoadNewLevels:{ru:{label:"INFO",text:"Отсутствует соединение с сервером."},en:{label:"INFO",text:"No connection to the server."}}}}return _createClass(e,[{key:"requestNewLevels",value:function(){var e=this,t=this.repository+"/levels"+(this.game.play.currentLevel+1)+".json";this.game.windowManager.addWindow(this.translates.ask[this.game.settings.lang],function(){$.getJSON(t).done(function(t){e.game.play.levels=e.game.play.levels.concat(t),localStorage.setItem("levels",JSON.stringify(e.game.play.levels)),e.game.play.loadLevel(e.game.play.currentLevel+1)}).fail(function(t){var s;s=404===t.status?e.translates.noNewLevels[e.game.settings.lang]:e.translates.failLoadNewLevels[e.game.settings.lang],e.game.windowManager.addWindow(s,function(){setTimeout(function(){return e.game.navigation.toMenu()},300)})})})}}]),e}();t.exports=i},{}],15:[function(e,t,s){var i=function(){function e(t){_classCallCheck(this,e),this.game=t,this._bindEvents()}return _createClass(e,[{key:"_bindEvents",value:function(){document.addEventListener("pause",this.pause.bind(this),!1),document.addEventListener("resume",this.resume.bind(this),!1)}},{key:"toMenu",value:function(){this.game.splash.show(),this.game.menu.scene.show(),this.game["interface"].scene.hide(),this.game.play.scene.hide(),this.game.settings.scene.hide()}},{key:"toSettings",value:function(){this.game.splash.show(),this.game.settings.scene.show(),this.game.menu.scene.hide(),this.game["interface"].scene.hide(),this.game.play.scene.hide()}},{key:"toPlay",value:function(){this.game.splash.show(),this.game.play.scene.show(),this.game["interface"].scene.show(),this.game.settings.scene.hide(),this.game.menu.scene.hide(),this.game.play.loadLevel()}},{key:"pause",value:function(){this.game.music.stop(),this.game.effect.toggle(!1)}},{key:"resume",value:function(){this.game.settings.isMusic&&this.game.music.play(),this.game.effect.toggle(!0)}}]),e}();t.exports=i},{}],16:[function(e,t,s){var i=function(){function e(t){_classCallCheck(this,e),this.game=t,this.closingSpeed=300,this.isClosing=!1,this.window=$("#window"),this.content=$("#content"),this.label=this.window.find("h1"),this.text=this.window.find("p"),this.button=this.window.find("button"),this.on,this._bindEvents(),this.close()}return _createClass(e,[{key:"_bindEvents",value:function(){var e=this;this.button.on("click",function(){e.window.fadeOut(function(){return e.close()}),setTimeout(function(){return e.on&&e.on()},500)})}},{key:"addWindow",value:function(e,t){this.label.html(e.label),this.text.html(e.text),this.on=t,this.open()}},{key:"open",value:function(){this.window.show()}},{key:"close",value:function(){this.window.hide()}}]),e}();t.exports=i},{}],17:[function(e,t,s){var i={init:function(e){i.game=e,i.isLoad=!1,window.Cocoon&&"PAID"!==e.edition&&(i.interstitial=Cocoon.Ad.AdMob.createInterstitial("ad mob key"),i.interstitial.on("load",function(){i.isLoad=!0}))},load:function(){window.Cocoon&&"FREE"===i.game.edition&&(i.interstitial.load(),i.isLoad=!1)},show:function(){window.Cocoon&&"FREE"===i.game.edition&&i.interstitial.show()}};t.exports=i},{}],18:[function(e,t,s){var i={getHeightTriangle:function(e,t,s,n,a,r){var o=i.getDistance(e,t,a,r),c=i.getDistance(s,n,a,r),l=i.getDistance(e,t,s,n),h=(o+c+l)/2,u=2/l*Math.sqrt(h*(h-l)*(h-o)*(h-c));return u},getDistance:function(e,t,s,i){return Math.sqrt(Math.pow(s-e,2)+Math.pow(i-t,2))},"getlongСoordsLine":function(e,t,s,i,n){var a=s-e,r=i-t;return{x:s+a*n,y:i+r*n}},isContains:function(e,t,s,i,n,a){return n>=e&&n<=e+s&&a>=t&&a<=t+i},intRandRange:function(e,t){return Math.floor(Math.random()*(t-e+1))+e},floatRandRange:function(e,t){return+(Math.random()*(t-e)+e).toFixed(1)},inRangeArray:function(e,t){return e>t.length-1?0:e<0?t.length-1:e}};t.exports=i},{}],19:[function(e,t,s){var i=function(e){if(window.plugins&&window.plugins.OneSignal){var t=function(e){console.log("notificationOpenedCallback: "+JSON.stringify(e))};window.plugins.OneSignal.startInit("OneSignal key","googlePlay id").handleNotificationOpened(t).endInit(),window.plugins.OneSignal.sendTag("edition",e.edition)}};t.exports=i},{}],20:[function(e,t,s){var i=e("../mixins/helper"),n=function(){function e(t,s){var i=this;_classCallCheck(this,e),this.game=t,this.scene=$("#effect"),this.scene[0].width=this.game.w,this.scene[0].height=this.game.h,this.ctx=this.scene[0].getContext("2d"),this.isRenderGraphy=!0,this.particles=[],this.image=new Image,this.image.onload=function(){i.createParticles(s.particles,s.config),i.loop()},this.image.src=s.image}return _createClass(e,[{key:"toggle",value:function(e){this.isRenderGraphy=e,e?this.scene.show():this.scene.hide(),e&&this.loop()}},{key:"loop",value:function(){this.isRenderGraphy&&(this.update(),this.draw(),requestAnimationFrame(this.loop.bind(this)))}},{key:"update",value:function(){var e=!0,t=!1,s=void 0;try{for(var i,n=this.particles[Symbol.iterator]();!(e=(i=n.next()).done);e=!0){var a=i.value;a.update()}}catch(r){t=!0,s=r}finally{try{!e&&n["return"]&&n["return"]()}finally{if(t)throw s}}}},{key:"draw",value:function(){this.clearScreen();var e=!0,t=!1,s=void 0;try{for(var i,n=this.particles[Symbol.iterator]();!(e=(i=n.next()).done);e=!0){var a=i.value;a.draw()}}catch(r){t=!0,s=r}finally{try{!e&&n["return"]&&n["return"]()}finally{if(t)throw s}}}},{key:"clearScreen",value:function(){this.ctx.clearRect(0,0,this.game.w,this.game.h)}},{key:"createParticles",value:function(e,t){for(var s=0;s<e;s++)this.particles.push(new a(this,{r:i.intRandRange(t.r[0],t.r[1]),x:i.intRandRange(t.x[0],t.x[1]),y:i.intRandRange(t.y[0],t.y[1]),vecX:i.intRandRange(t.vecX[0],t.vecY[1]),vecY:i.intRandRange(t.vecY[0],t.vecY[1]),alpha:i.floatRandRange(t.alpha[0],t.alpha[1])}))}}]),e}(),a=function(){function e(t,s){_classCallCheck(this,e),this.effect=t,this.game=this.effect.game,this.r=s.r||10,this.x=s.x||0,this.y=s.y||0,this.vecX=s.vecX||1,this.vecY=s.vecY||1,this.alpha=s.alpha||1}return _createClass(e,[{key:"update",value:function(){this.x+this.r<0?(this.x=this.game.w+this.r,this.vecY=i.intRandRange(-this.vecY,this.vecY)):this.x-this.r>this.game.w&&(this.x=-this.r,this.vecY=i.intRandRange(-this.vecY,this.vecY)),this.y+this.r<0?(this.y=this.game.h+this.r,this.vecX=i.intRandRange(-this.vecX,this.vecX)):this.y-this.r>this.game.h&&(this.y=-this.r,this.vecX=i.intRandRange(-this.vecX,this.vecX)),this.x+=this.vecX,this.y+=this.vecY}},{key:"draw",value:function(){this.effect.ctx.globalAlpha=this.alpha,this.effect.ctx.drawImage(this.effect.image,this.x-this.r,this.y-this.r,2*this.r,2*this.r)}}]),e}();t.exports=n},{"../mixins/helper":18}],21:[function(e,t,s){var i=(e("../mixins/helper"),function(){function e(t){_classCallCheck(this,e),this.game=t,this.scene=$("#interface"),this.label=$("#label"),this.steps=$("#steps"),this.intersections=$("#intersections"),this.restart=$("#restart"),this.hint=$("#hint"),this.closePath=$("#closePath"),this._bindEvents()}return _createClass(e,[{key:"_bindEvents",value:function(){var e=this;this.restart.on("click",function(){e.game.restartClicks++,e.game.restartClicks>20&&(e.game.ads.show(),e.game.restartClicks=0),e.game.play.restartLevel()}),this.closePath.on("click",function(){e.game.play.level.closePath()}),this.hint.on("click",function(){Math.round(e.game.play.level.clicks/e.game.play.level.config.clicks)>e.game.play.level.currentHint&&e.game.ads.show(),e.game.play.level.showHint()})}},{key:"selectButtons",value:function(e){for(var t in e)this[t]&&e[t]?this[t].show():this[t].hide()}},{key:"updateGameInfo",value:function(){this.intersections.html("INTERSECTIONS "+this.game.play.level.intersectionsLeft),this.steps.html("STEPS "+this.game.play.level.stepsLeft),this.label.html(this.game.play.level.label)}}]),e}());t.exports=i},{"../mixins/helper":18}],22:[function(e,t,s){var i=function(){function e(t){_classCallCheck(this,e),this.game=t,this.scene=$("#menu"),this.start=$(".start"),this.setup=$(".setup"),this.exit=$(".exit"),this.tutorial=$(".tutorial"),this._bindEvents(),this._createWindows()}return _createClass(e,[{key:"_bindEvents",value:function(){var e=this;this.start.on("click",function(){return e.game.navigation.toPlay()}),this.setup.on("click",function(){return e.game.navigation.toSettings()}),this.exit.on("click",function(){return e.game.navigation.toMenu()}),this.tutorial.on("click",function(){return e.showTutorial()})}},{key:"_createWindows",value:function(){var e=this;localStorage.getItem("isShowInfo")||(this.game.windowManager.addWindow({label:"INFO",text:"\n\t\t\t\t\tTo Settings, press S <br>\n\t\t\t\t\tShow Tutorial, press T\n\t\t\t\t"},function(){e.showTutorial()}),localStorage.setItem("isShowInfo",1))}},{key:"showTutorial",value:function(){this.game.windowManager.addWindow({label:"TUTORIAL",text:"Для прохождения головоломки необходимо пересекать игровые точки линиями, которые вы расставляете нажатиями по экрану, однако запомните, что линии являются бесконечными, но Вы видите только отрезки этих линий! В игре так же присутствуют различный комбинации объектов. Например есть точки, которые нельзя пересекать и так далее, с этим Вам необходимо разобраться и решать головоломки самим!"})}}]),e}();t.exports=i},{}],23:[function(e,t,s){var i=e("../level/Level"),n=function(){function t(s){_classCallCheck(this,t),this.game=s,this.scene=$("#game"),this.paper=Snap("svg"),this.paper.attr({width:this.game.w,height:this.game.h}),this.currentLevel=localStorage.getItem("currentLevel")-0||0,this.levels=localStorage.getItem("levels")?JSON.parse(localStorage.getItem("levels")):e("../levels"),this.isLevelOver=!1,this._bindEvents()}return _createClass(t,[{key:"_bindEvents",value:function(){var e=this;$("#game").on("click",function(t){return e.userAction(t)}),$("#interface").on("click",function(t){return e.userAction(t)})}},{key:"userAction",value:function(e){if("BUTTON"!==e.target.tagName){var t=Math.round(e.clientX/this.game.zoom),s=Math.round(e.clientY/this.game.zoom);this.level.areas.activateArea(t,s)&&this.level.stepsLeft&&!this.isLevelOver&&(this.level.stepsLeft--,this.level.clicks++,this.level.update(),this.level.userPath.addPoint(t,s),this.level.user.addCircle(t,s,"user"),this.level.checkLevelOver(),this.game["interface"].updateGameInfo(),localStorage.setItem("clicks",this.level.clicks))}}},{key:"loadLevel",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.currentLevel,t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.levels[e]?(this.currentLevel=e,this.deleteLevel(),this.level=new i(this,t,this.levels[e]),this.game["interface"].updateGameInfo(),localStorage.setItem("currentLevel",this.currentLevel)):this.game.ajaxRequests.requestNewLevels()}},{key:"deleteLevel",value:function(){this.level&&(this.level.svg.remove(),this.level=null)}},{key:"nextLevel",value:function(){this.isLevelOver||this.loadLevel(this.currentLevel+1,!0)}},{key:"backLevel",value:function(){this.isLevelOver||this.loadLevel(this.currentLevel-1,!0)}},{key:"restartLevel",value:function(){this.isLevelOver||this.loadLevel(this.currentLevel,!1)}}]),t}();t.exports=n},{"../level/Level":7,"../levels":13}],24:[function(e,t,s){var i=e("../mixins/helper"),n=function(){function e(t){_classCallCheck(this,e),this.game=t,this.scene=$("#settings"),this.propMusic=$("#propMusic"),this.propEffect=$("#propEffect"),this.propLang=$("#propLang"),this.curLang=localStorage.getItem("lang")-0||0,this.langs=["en","ru"],this.lang=this.langs[this.curLang],this.isMusic=!0,this.isGraphics=!0,this._bindEvents()}return _createClass(e,[{key:"_bindEvents",value:function(){var e=this;this.propMusic.children().on("click",function(){return e.toggleMusic()}),this.propEffect.children().on("click",function(){return e.toggleEffect()}),this.propLang.children().on("click",function(){return e.selectLang()})}},{key:"toggleMusic",value:function(){this.isMusic=!this.isMusic,this.propMusic.children().html(this.isMusic?"ON":"OFF"),this.isMusic?this.game.music.play():this.game.music.stop()}},{key:"toggleEffect",
value:function(){this.isGraphics=!this.isGraphics,this.propEffect.children().html(this.isGraphics?"ON":"OFF"),this.game.effect.toggle(this.isGraphics)}},{key:"selectLang",value:function(){this.curLang=i.inRangeArray(this.curLang+1,this.langs),this.lang=this.langs[this.curLang],this.propLang.children().html(this.lang.toUpperCase()),localStorage.setItem("lang",this.curLang)}}]),e}();t.exports=n},{"../mixins/helper":18}],25:[function(e,t,s){var i=function(){function e(t){_classCallCheck(this,e),this.game=t,this.splash=$("#splash")}return _createClass(e,[{key:"show",value:function(e){this.splash.css({opacity:1,display:"block"}).fadeOut(400,e)}}]),e}();t.exports=i},{}]},{},[2]);