(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 1260,
	height: 719,
	fps: 24,
	color: "#252525",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.approdo = function() {
	this.spriteSheet = ss["naufragiolinePresentazione_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banchina = function() {
	this.spriteSheet = ss["naufragiolinePresentazione_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.chiglia01 = function() {
	this.spriteSheet = ss["naufragiolinePresentazione_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.chiglia02 = function() {
	this.spriteSheet = ss["naufragiolinePresentazione_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.circum01 = function() {
	this.spriteSheet = ss["naufragiolinePresentazione_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.circum02 = function() {
	this.spriteSheet = ss["naufragiolinePresentazione_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.controfiocco = function() {
	this.spriteSheet = ss["naufragiolinePresentazione_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.deriva = function() {
	this.spriteSheet = ss["naufragiolinePresentazione_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.ecoscandaglio = function() {
	this.spriteSheet = ss["naufragiolinePresentazione_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.entro01 = function() {
	this.spriteSheet = ss["naufragiolinePresentazione_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.entro02 = function() {
	this.spriteSheet = ss["naufragiolinePresentazione_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.fuori01 = function() {
	this.spriteSheet = ss["naufragiolinePresentazione_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.fuori02 = function() {
	this.spriteSheet = ss["naufragiolinePresentazione_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.preventivo = function() {
	this.spriteSheet = ss["naufragiolinePresentazione_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.WifiAP = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#009999").ss(11,1,1).p("AktFwQgBgBgBgCQhnhmgTiIQgFggAAgiQAAiwB/h+QB+h/CxAAQCyAAB+B/QBoBnASCKQAFAdAAAgQAACwh8B+");
	this.shape.setTransform(0,-81.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#006666").ss(11,1,1).p("AoMJ5QjZjaAAkzQAAkxDZjZQDajaEyAAQEzAADaDaQDEDEATENQACAcAAAdQAAEwjVDY");
	this.shape_1.setTransform(0,-86.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Livello 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CC99").s().p("AkTJ0QAIgPAmiCQAjiYAkjiQAjjfAkiVQAFgWATgKQANgLAVAAIA6AAQARAAASAKQAQALAHAWQAiCVAmDfQAjDhAkCZQAmCDAIAOQgOAkhgAuIlMABQhhgxgMgigAhpnGQgsgsAAg+QAAglAQgfQALgUARgSQAsgsA9AAQA+AAAsAsQARASALAUQAQAfAAAlQAAA+gsAsQgsAsg+AAQg9AAgsgsg");
	this.shape_2.setTransform(0,-18.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.7,-155.7,159.5,208.1);


(lib.subnet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C3C3C").s().p("EglDAuwQjYAAiZiFQiYiHAAi/MAAAhPJQAAi/CYiGQCZiGDYAAMBKGAAAQDYAACZCGQCZCGAAC/MAAABPJQAAC/iZCHQiZCFjYAAg");
	this.shape.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-289.3,-299.2,578.7,598.5);


(lib.Server = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DFEBF4").s().p("AL8KUQgygyABhGQgBhHAygyQAxgxBFAAIAFAAQBFAAAxAxQAyAyAABHQAABGgyAyQgyAyhGgBQhHABgygygAu+KAQgoAAgcgcQgbgcgBgoQABgnAbgcQAcgbAoAAITVAAQAoAAAcAbQAcAcAAAnQAAAogcAcQgcAcgoAAgANyCpQhFAAgxgxQgygyABhGQgBhFAygyQAygxBHAAQBGAAAyAxQAyAyAABFQAABGgyAyQgxAxhFAAgAu+BkQgoAAgcgcQgbgcgBgoQABglAbgcQAcgbAoAAITVAAQAoAAAcAbQAcAcAAAlQAAAogcAcQgcAcgoAAgAL8miQgygyABhGQgBhHAygyQAygxBHAAQBGAAAyAxQAyAyAABHQAABGgyAyQgyAyhGgBQhHABgygygAu+m2QgoAAgcgcQgbgcgBgoQABgnAbgcQAcgbAoAAITVAAQAoAAAcAbQAcAcAAAnQAAAogcAcQgcAcgoAAg");
	this.shape.setTransform(-1.5,-98.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Livello 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009999").s().p("EgRCAgVQhoAAhIhIQhJhJAAhnMAAAg45QAAhnBJhJQBIhIBoAAMAiFAAAQBoAABIBIQBJBJAABnMAAAA45QAABnhJBJQhIBIhoAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-134,-206.9,268,414);


(lib.routerbase = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E7FB7").s().p("AsAMAQk/k+AAnCQAAnBE/k/QE/k/HBAAQHCAAE+E/QFAE/AAHBQAAHClAE+Qk+FAnCAAQnBAAk/lAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.8,-108.8,217.6,217.6);


(lib.prev_bright = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Livello 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AjhDhQhehdAAiEQAAiDBeheQBeheCDAAQCEAABdBeQBfBeAACDQAACEhfBdQhdBfiEAAQiDAAhehfg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#676666").s().p("AjhDhQhehdAAiEQAAiDBeheQBeheCDAAQCEAABdBeQBfBeAACDQAACEhfBdQhdBfiEAAQiDAAhehfg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#686765").s().p("AjhDhQhehdAAiEQAAiDBeheQBeheCDAAQCEAABdBeQBfBeAACDQAACEhfBdQhdBfiEAAQiDAAhehfg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6B6863").s().p("AjhDhQhehdAAiEQAAiDBeheQBeheCDAAQCEAABdBeQBfBeAACDQAACEhfBdQhdBfiEAAQiDAAhehfg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6F6A62").s().p("AjhDhQhehdAAiEQAAiDBeheQBeheCDAAQCEAABdBeQBfBeAACDQAACEhfBdQhdBfiEAAQiDAAhehfg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#746B5F").s().p("AjhDhQhehdAAiEQAAiDBeheQBeheCDAAQCEAABdBeQBfBeAACDQAACEhfBdQhdBfiEAAQiDAAhehfg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7A6E5C").s().p("AjhDhQhehdAAiEQAAiDBeheQBeheCDAAQCEAABdBeQBfBeAACDQAACEhfBdQhdBfiEAAQiDAAhehfg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#827158").s().p("AjhDhQhehdAAiEQAAiDBeheQBeheCDAAQCEAABdBeQBfBeAACDQAACEhfBdQhdBfiEAAQiDAAhehfg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8A7454").s().p("AjhDhQhehdAAiEQAAiDBeheQBeheCDAAQCEAABdBeQBfBeAACDQAACEhfBdQhdBfiEAAQiDAAhehfg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#94784F").s().p("AjhDhQhehdAAiEQAAiDBeheQBeheCDAAQCEAABdBeQBfBeAACDQAACEhfBdQhdBfiEAAQiDAAhehfg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9F7C4A").s().p("AjhDhQhehdAAiEQAAiDBeheQBeheCDAAQCEAABdBeQBfBeAACDQAACEhfBdQhdBfiEAAQiDAAhehfg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#AB8144").s().p("AjhDhQhehdAAiEQAAiDBeheQBeheCDAAQCEAABdBeQBfBeAACDQAACEhfBdQhdBfiEAAQiDAAhehfg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B8863E").s().p("AjhDhQhehdAAiEQAAiDBeheQBeheCDAAQCEAABdBeQBfBeAACDQAACEhfBdQhdBfiEAAQiDAAhehfg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C68B37").s().p("AjhDhQhehdAAiEQAAiDBeheQBeheCDAAQCEAABdBeQBfBeAACDQAACEhfBdQhdBfiEAAQiDAAhehfg");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D5912F").s().p("AjhDhQhehdAAiEQAAiDBeheQBeheCDAAQCEAABdBeQBfBeAACDQAACEhfBdQhdBfiEAAQiDAAhehfg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-32,64.1,64.1);


(lib.Interpolazione13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 1
	this.instance = new lib.chiglia01();
	this.instance.setTransform(-398.5,-181);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-398.5,-181,797,362);


(lib.Interpolazione11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 1
	this.instance = new lib.chiglia02();
	this.instance.setTransform(-399,-256,0.996,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-399,-256,798,512);


(lib.Internet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CFDFEB").ss(6,1,1).p("AMiqtQERDwAAFUQAABagUBSQAdgFAfAAQCZAABsB4QBtB4AACqQAACqhtB4QgpAugvAcQhOAuhfAAIAAAAQrjAmqDAFQknADlMgLQkngKhCgJQhkgPg4gvQgIgHgHgHQg6g8AAhVQAAhVBMg8QA+gwBSgJQgKgtAAgwQAAjHCjiMQCLh2C8gSQAAgGAAgGQAAlUERjwQEQjwGAAAQGBAAEQDwg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#94A0DA").s().p("At9OVQkngKhDgJQhkgPg4gvIgPgOQg5g8gBhVQABhVBLg8QA+gwBSgJQgKgtAAgwQAAjHCjiMQCLh2C9gSIAAgMQgBlUERjwQERjwF+AAQGBAAERDwQEQDwAAFUQAABagTBSQAdgFAfAAQCZAABsB4QBsB4ABCqQgBCqhsB4QgpAugvAcQhOAuhfAAIAAAAQrkAmqCAFIhuABQj2AAkOgJg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151.5,-95.6,303,191.3);


(lib.Host = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4FFFF").s().p("Ap2IlQhoAAhIhIQhJhJAAhnIAApZQAAhnBJhJQBIhIBoAAITtAAQBoAABIBIQBJBJAABnIAAJZQAABnhJBJQhIBIhoAAg");
	this.shape.setTransform(0,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Livello 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#816B87").s().p("AkCMvIlKlJIPDAAQA+AAAsAPQAsAPAAAWIAADhQAAAWgsAPQgsAPg+AAgAJ7G0IypgBIhQAAIk6k5IgCgFIZeugIADgDIEUEUIAAAKIAAALIAAKQIAAAxIgBAXQgHBYhABAQhJBJhnAAg");
	this.shape_1.setTransform(13.4,33.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Livello 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A492A9").s().p("An9PEQg9AAgsgPQgtgPABgXIAAjgQgBgWAtgQQAsgOA9AAIP7AAQA9AAAsAOQAtAQgBAWIAADgQABAXgtAPQgsAPg9AAgAtJJIQhmAAhJhIQhIhJAAhmIAAwcQAAhnBIhJQBJhIBmAAIaTAAQBmAABJBIQBIBJAABnIAAQcIAAAXQgIBYhABAQhJBIhmAAg");
	this.shape_2.setTransform(0,19);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109,-77.4,218,192.9);


(lib.fw_bright = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.247)","rgba(227,185,185,0)","rgba(145,0,0,0.047)","rgba(70,0,0,0)"],[0,0.329,0.42,1],0,0,0,0,0,191.6).s().p("A0+U/QososAAsTQAAsSIsosQIsosMSAAQMTAAIsIsQIsIsAAMSQAAMTosIsQosIssTAAQsSAAososg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(255,255,255,0.247)","rgba(227,185,185,0)","rgba(145,1,1,0.047)","rgba(70,1,1,0)","rgba(70,0,0,0)"],[0,0.329,0.42,1,1],0,0,0,0,0,191.6).s().p("A0+U/QososAAsTQAAsSIsosQIsosMSAAQMTAAIsIsQIsIsAAMSQAAMTosIsQosIssTAAQsSAAososg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(255,255,255,0.247)","rgba(227,185,185,0)","rgba(146,3,3,0.051)","rgba(71,2,2,0.004)","rgba(70,0,0,0)"],[0,0.329,0.42,0.996,1],0,0,0,0,0,191.6).s().p("A0+U/QososAAsTQAAsSIsosQIsosMSAAQMTAAIsIsQIsIsAAMSQAAMTosIsQosIssTAAQsSAAososg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["rgba(255,255,255,0.247)","rgba(227,185,185,0)","rgba(148,6,6,0.055)","rgba(73,5,5,0.008)","rgba(69,1,1,0)"],[0,0.329,0.42,0.996,1],0,0,0,0,0,191.6).s().p("A0+U/QososAAsTQAAsSIsosQIsosMSAAQMTAAIsIsQIsIsAAMSQAAMTosIsQosIssTAAQsSAAososg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(255,255,255,0.247)","rgba(227,185,185,0)","rgba(150,11,11,0.063)","rgba(76,9,9,0.012)","rgba(69,2,2,0)"],[0,0.329,0.42,0.988,1],0,0,0,0,0,191.6).s().p("A0+U/QososAAsTQAAsSIsosQIsosMSAAQMTAAIsIsQIsIsAAMSQAAMTosIsQosIssTAAQsSAAososg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["rgba(255,255,255,0.247)","rgba(227,185,185,0)","rgba(153,18,18,0.071)","rgba(79,14,14,0.02)","rgba(68,3,3,0)"],[0,0.329,0.42,0.984,1],0,0,0,0,0,191.6).s().p("A0+U/QososAAsTQAAsSIsosQIsosMSAAQMTAAIsIsQIsIsAAMSQAAMTosIsQosIssTAAQsSAAososg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["rgba(255,255,255,0.247)","rgba(227,185,185,0)","rgba(156,25,25,0.082)","rgba(83,20,20,0.031)","rgba(67,4,4,0)"],[0,0.329,0.42,0.976,1],0,0,0,0,0,191.6).s().p("A0+U/QososAAsTQAAsSIsosQIsosMSAAQMTAAIsIsQIsIsAAMSQAAMTosIsQosIssTAAQsSAAososg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["rgba(255,255,255,0.247)","rgba(227,185,185,0)","rgba(160,35,35,0.094)","rgba(88,28,28,0.039)","rgba(66,5,5,0)"],[0,0.329,0.42,0.969,1],0,0,0,0,0,191.6).s().p("A0+U/QososAAsTQAAsSIsosQIsosMSAAQMTAAIsIsQIsIsAAMSQAAMTosIsQosIssTAAQsSAAososg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["rgba(255,255,255,0.247)","rgba(227,185,185,0)","rgba(165,45,45,0.11)","rgba(94,36,36,0.051)","rgba(64,7,7,0)"],[0,0.329,0.42,0.961,1],0,0,0,0,0,191.6).s().p("A0+U/QososAAsTQAAsSIsosQIsosMSAAQMTAAIsIsQIsIsAAMSQAAMTosIsQosIssTAAQsSAAososg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["rgba(255,255,255,0.247)","rgba(227,185,185,0)","rgba(170,57,57,0.125)","rgba(100,46,46,0.067)","rgba(63,8,8,0)"],[0,0.329,0.42,0.949,1],0,0,0,0,0,191.6).s().p("A0+U/QososAAsTQAAsSIsosQIsosMSAAQMTAAIsIsQIsIsAAMSQAAMTosIsQosIssTAAQsSAAososg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["rgba(255,255,255,0.247)","rgba(227,185,185,0)","rgba(175,71,71,0.145)","rgba(107,57,57,0.082)","rgba(61,10,10,0)"],[0,0.329,0.42,0.937,1],0,0,0,0,0,191.6).s().p("A0+U/QososAAsTQAAsSIsosQIsosMSAAQMTAAIsIsQIsIsAAMSQAAMTosIsQosIssTAAQsSAAososg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["rgba(255,255,255,0.247)","rgba(227,185,185,0)","rgba(182,85,85,0.165)","rgba(115,68,68,0.098)","rgba(59,12,12,0)"],[0,0.329,0.42,0.922,1],0,0,0,0,0,191.6).s().p("A0+U/QososAAsTQAAsSIsosQIsosMSAAQMTAAIsIsQIsIsAAMSQAAMTosIsQosIssTAAQsSAAososg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["rgba(255,255,255,0.247)","rgba(227,185,185,0)","rgba(189,102,102,0.188)","rgba(123,81,81,0.118)","rgba(57,15,15,0)"],[0,0.329,0.42,0.906,1],0,0,0,0,0,191.6).s().p("A0+U/QososAAsTQAAsSIsosQIsosMSAAQMTAAIsIsQIsIsAAMSQAAMTosIsQosIssTAAQsSAAososg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["rgba(255,255,255,0.247)","rgba(227,185,185,0)","rgba(196,119,119,0.212)","rgba(133,96,96,0.141)","rgba(55,17,17,0)"],[0,0.329,0.42,0.89,1],0,0,0,0,0,191.6).s().p("A0+U/QososAAsTQAAsSIsosQIsosMSAAQMTAAIsIsQIsIsAAMSQAAMTosIsQosIssTAAQsSAAososg");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["rgba(255,255,255,0.247)","rgba(227,185,185,0)","rgba(205,138,138,0.239)","rgba(143,111,111,0.161)","rgba(52,20,20,0)"],[0,0.329,0.42,0.875,1],0,0,0,0,0,191.6).s().p("A0+U/QososAAsTQAAsSIsosQIsosMSAAQMTAAIsIsQIsIsAAMSQAAMTosIsQosIssTAAQsSAAososg");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["rgba(255,255,255,0.247)","rgba(227,185,185,0)","rgba(214,159,159,0.267)","rgba(154,127,127,0.184)","rgba(49,23,23,0)"],[0,0.329,0.42,0.855,1],0,0,0,0,0,191.6).s().p("A0+U/QososAAsTQAAsSIsosQIsosMSAAQMTAAIsIsQIsIsAAMSQAAMTosIsQosIssTAAQsSAAososg");

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["rgba(255,255,255,0.247)","rgba(227,185,185,0)","rgba(223,181,181,0.298)","rgba(165,145,145,0.212)","rgba(47,26,26,0)"],[0,0.329,0.42,0.835,1],0,0,0,0,0,191.6).s().p("A0+U/QososAAsTQAAsSIsosQIsosMSAAQMTAAIsIsQIsIsAAMSQAAMTosIsQosIssTAAQsSAAososg");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["rgba(255,255,255,0.247)","rgba(227,185,185,0)","rgba(233,204,204,0.329)","rgba(177,163,163,0.239)","rgba(44,30,30,0)"],[0,0.329,0.42,0.816,1],0,0,0,0,0,191.6).s().p("A0+U/QososAAsTQAAsSIsosQIsosMSAAQMTAAIsIsQIsIsAAMSQAAMTosIsQosIssTAAQsSAAososg");

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["rgba(255,255,255,0.247)","rgba(227,185,185,0)","rgba(244,229,229,0.365)","rgba(190,183,183,0.267)","rgba(40,33,33,0)"],[0,0.329,0.42,0.792,1],0,0,0,0,0,191.6).s().p("A0+U/QososAAsTQAAsSIsosQIsosMSAAQMTAAIsIsQIsIsAAMSQAAMTosIsQosIssTAAQsSAAososg");

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["rgba(255,255,255,0.247)","rgba(227,185,185,0)","rgba(255,255,255,0.4)","rgba(204,204,204,0.298)","rgba(37,37,37,0)"],[0,0.329,0.42,0.769,1],0,0,0,0,0,191.6).s().p("A0+U/QososAAsTQAAsSIsosQIsosMSAAQMTAAIsIsQIsIsAAMSQAAMTosIsQosIssTAAQsSAAososg");

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["rgba(255,255,255,0.247)","rgba(227,185,185,0)","rgba(255,254,254,0.4)","rgba(204,203,203,0.298)","rgba(37,37,37,0)"],[0,0.329,0.42,0.769,1],0,0,0,0,0,191.6).s().p("A0+U/QososAAsTQAAsSIsosQIsosMSAAQMTAAIsIsQIsIsAAMSQAAMTosIsQosIssTAAQsSAAososg");

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["rgba(255,255,255,0.247)","rgba(227,185,185,0)","rgba(254,252,252,0.396)","rgba(203,202,202,0.294)","rgba(37,37,37,0)"],[0,0.329,0.42,0.773,1],0,0,0,0,0,191.6).s().p("A0+U/QososAAsTQAAsSIsosQIsosMSAAQMTAAIsIsQIsIsAAMSQAAMTosIsQosIssTAAQsSAAososg");

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["rgba(255,255,255,0.247)","rgba(227,185,185,0)","rgba(253,249,249,0.392)","rgba(201,199,199,0.29)","rgba(38,36,36,0)"],[0,0.329,0.42,0.773,1],0,0,0,0,0,191.6).s().p("A0+U/QososAAsTQAAsSIsosQIsosMSAAQMTAAIsIsQIsIsAAMSQAAMTosIsQosIssTAAQsSAAososg");

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["rgba(255,255,255,0.247)","rgba(227,185,185,0)","rgba(251,245,245,0.384)","rgba(199,196,196,0.286)","rgba(38,36,36,0)"],[0,0.329,0.42,0.776,1],0,0,0,0,0,191.6).s().p("A0+U/QososAAsTQAAsSIsosQIsosMSAAQMTAAIsIsQIsIsAAMSQAAMTosIsQosIssTAAQsSAAososg");

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["rgba(255,255,255,0.247)","rgba(227,185,185,0)","rgba(248,239,239,0.376)","rgba(196,191,191,0.278)","rgba(39,35,35,0)"],[0,0.329,0.42,0.784,1],0,0,0,0,0,191.6).s().p("A0+U/QososAAsTQAAsSIsosQIsosMSAAQMTAAIsIsQIsIsAAMSQAAMTosIsQosIssTAAQsSAAososg");

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["rgba(255,255,255,0.247)","rgba(227,185,185,0)","rgba(245,232,232,0.369)","rgba(192,186,186,0.271)","rgba(40,34,34,0)"],[0,0.329,0.42,0.788,1],0,0,0,0,0,191.6).s().p("A0+U/QososAAsTQAAsSIsosQIsosMSAAQMTAAIsIsQIsIsAAMSQAAMTosIsQosIssTAAQsSAAososg");

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["rgba(255,255,255,0.247)","rgba(227,185,185,0)","rgba(242,224,224,0.357)","rgba(188,179,179,0.263)","rgba(41,32,32,0)"],[0,0.329,0.42,0.796,1],0,0,0,0,0,191.6).s().p("A0+U/QososAAsTQAAsSIsosQIsosMSAAQMTAAIsIsQIsIsAAMSQAAMTosIsQosIssTAAQsSAAososg");

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.rf(["rgba(255,255,255,0.247)","rgba(227,185,185,0)","rgba(237,214,214,0.345)","rgba(183,171,171,0.251)","rgba(42,31,31,0)"],[0,0.329,0.42,0.804,1],0,0,0,0,0,191.6).s().p("A0+U/QososAAsTQAAsSIsosQIsosMSAAQMTAAIsIsQIsIsAAMSQAAMTosIsQosIssTAAQsSAAososg");

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.rf(["rgba(255,255,255,0.247)","rgba(227,185,185,0)","rgba(233,203,203,0.329)","rgba(177,163,163,0.239)","rgba(44,30,30,0)"],[0,0.329,0.42,0.816,1],0,0,0,0,0,191.6).s().p("A0+U/QososAAsTQAAsSIsosQIsosMSAAQMTAAIsIsQIsIsAAMSQAAMTosIsQosIssTAAQsSAAososg");

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.rf(["rgba(255,255,255,0.247)","rgba(227,185,185,0)","rgba(228,191,191,0.314)","rgba(171,153,153,0.224)","rgba(45,28,28,0)"],[0,0.329,0.42,0.827,1],0,0,0,0,0,191.6).s().p("A0+U/QososAAsTQAAsSIsosQIsosMSAAQMTAAIsIsQIsIsAAMSQAAMTosIsQosIssTAAQsSAAososg");

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["rgba(255,255,255,0.247)","rgba(227,185,185,0)","rgba(222,178,178,0.294)","rgba(163,142,142,0.208)","rgba(47,26,26,0)"],[0,0.329,0.42,0.839,1],0,0,0,0,0,191.6).s().p("A0+U/QososAAsTQAAsSIsosQIsosMSAAQMTAAIsIsQIsIsAAMSQAAMTosIsQosIssTAAQsSAAososg");

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.rf(["rgba(255,255,255,0.247)","rgba(227,185,185,0)","rgba(215,163,163,0.275)","rgba(156,131,131,0.192)","rgba(49,24,24,0)"],[0,0.329,0.42,0.851,1],0,0,0,0,0,191.6).s().p("A0+U/QososAAsTQAAsSIsosQIsosMSAAQMTAAIsIsQIsIsAAMSQAAMTosIsQosIssTAAQsSAAososg");

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["rgba(255,255,255,0.247)","rgba(227,185,185,0)","rgba(209,147,147,0.251)","rgba(147,118,118,0.173)","rgba(51,21,21,0)"],[0,0.329,0.42,0.867,1],0,0,0,0,0,191.6).s().p("A0+U/QososAAsTQAAsSIsosQIsosMSAAQMTAAIsIsQIsIsAAMSQAAMTosIsQosIssTAAQsSAAososg");

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.rf(["rgba(255,255,255,0.247)","rgba(227,185,185,0)","rgba(201,130,130,0.227)","rgba(138,104,104,0.153)","rgba(53,19,19,0)"],[0,0.329,0.42,0.882,1],0,0,0,0,0,191.6).s().p("A0+U/QososAAsTQAAsSIsosQIsosMSAAQMTAAIsIsQIsIsAAMSQAAMTosIsQosIssTAAQsSAAososg");

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.rf(["rgba(255,255,255,0.247)","rgba(227,185,185,0)","rgba(193,112,112,0.2)","rgba(129,89,89,0.129)","rgba(56,16,16,0)"],[0,0.329,0.42,0.898,1],0,0,0,0,0,191.6).s().p("A0+U/QososAAsTQAAsSIsosQIsosMSAAQMTAAIsIsQIsIsAAMSQAAMTosIsQosIssTAAQsSAAososg");

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.rf(["rgba(255,255,255,0.247)","rgba(227,185,185,0)","rgba(185,92,92,0.173)","rgba(118,73,73,0.106)","rgba(58,13,13,0)"],[0,0.329,0.42,0.918,1],0,0,0,0,0,191.6).s().p("A0+U/QososAAsTQAAsSIsosQIsosMSAAQMTAAIsIsQIsIsAAMSQAAMTosIsQosIssTAAQsSAAososg");

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.rf(["rgba(255,255,255,0.247)","rgba(227,185,185,0)","rgba(176,71,71,0.145)","rgba(107,57,57,0.082)","rgba(61,10,10,0)"],[0,0.329,0.42,0.937,1],0,0,0,0,0,191.6).s().p("A0+U/QososAAsTQAAsSIsosQIsosMSAAQMTAAIsIsQIsIsAAMSQAAMTosIsQosIssTAAQsSAAososg");

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.rf(["rgba(255,255,255,0.247)","rgba(227,185,185,0)","rgba(166,48,48,0.114)","rgba(95,39,39,0.055)","rgba(64,7,7,0)"],[0,0.329,0.42,0.957,1],0,0,0,0,0,191.6).s().p("A0+U/QososAAsTQAAsSIsosQIsosMSAAQMTAAIsIsQIsIsAAMSQAAMTosIsQosIssTAAQsSAAososg");

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.rf(["rgba(255,255,255,0.247)","rgba(227,185,185,0)","rgba(156,25,25,0.082)","rgba(83,20,20,0.027)","rgba(67,4,4,0)"],[0,0.329,0.42,0.976,1],0,0,0,0,0,191.6).s().p("A0+U/QososAAsTQAAsSIsosQIsosMSAAQMTAAIsIsQIsIsAAMSQAAMTosIsQosIssTAAQsSAAososg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-190,-190,380,380);


(lib.frecciadx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7F8FE").s().p("ADuAfQgNgNAAgSQAAgRANgPQAOgMATAAQATAAAMAMQAOAPAAARQAAASgOANQgMAOgTAAQgTAAgOgOgAkoAsQgIAAgGgOQgFgMAAgSIAAAAQAAgQAFgNQAGgNAIAAIG+AAQAIAAAGANQAFANAAAQIAAAAQAAASgFAMQgGAOgIAAg");
	this.shape.setTransform(1.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.5,-4.5,63.4,9.1);


(lib.firewallbase = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BE3D36").s().p("AsAMAQk/k+AAnCQAAnBE/k/QE/k/HBAAQHCAAE+E/QFAE/AAHBQAAHClAE+Qk+FAnCAAQnBAAk/lAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.8,-108.8,217.6,217.6);


(lib.Edificio = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#996666").s().p("AqEOJQhmAAhHhJQhHhIAAhoIAA0gQAAhmBHhJQBHhIBmAAIUKAAQBlAABIBIQBGBJAABmIAAUgQAABohGBIQhIBJhlAAg");
	this.shape.setTransform(-44.5,44.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#855858").s().p("AlzTaQghglAAhnIAA0gQAAhnAhhsQAghtAvgyIJKqHQAugzAhAlQAfAlAABnIAAUgQAABngfBsQghBsguAzIpKKHQgbAdgWAAQgQAAgOgPg");
	this.shape_1.setTransform(93,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AC8282").s().p("AwhGVQhqAAgtghQgsghArgtIIppKQAsgvBpggQBqghBqAAIVKAAQBqAAAsAhQAsAggrAvIopJKQgrAthqAhQhpAhhqAAg");
	this.shape_2.setTransform(-6.8,-94.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.5,-134.9,267,270);


(lib.down_icon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("Akjj8IJHAAIkkH5g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999999").ss(1,1,1).p("AAAD9Ikjn5IJHAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#999999").ss(1,1,1).p("AAADnIkKnNIIVAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AkKjmIIVAAIkLHNg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape},{t:this.shape_1}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.2,-25.3,58.5,50.7);


(lib.conf_fuoribordo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 1
	this.instance = new lib.fuori02();
	this.instance.setTransform(0,419.7);

	this.instance_1 = new lib.fuori01();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,869,869.7);


(lib.conf_entrobordo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 1
	this.instance = new lib.entro02();
	this.instance.setTransform(0,449);

	this.instance_1 = new lib.entro01();
	this.instance_1.setTransform(1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,728,824);


(lib.conf_ecoscandaglio = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 1
	this.instance = new lib.ecoscandaglio();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,518,413);


(lib.conf_deriva = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 1
	this.instance = new lib.deriva();
	this.instance.setTransform(0,0,0.803,0.803);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,532.6,552.7);


(lib.conf_controfiocco = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 1
	this.instance = new lib.controfiocco();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,763,861);


(lib.conf_circumnavigante = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 1
	this.instance = new lib.circum02();
	this.instance.setTransform(1.1,526);

	this.instance_1 = new lib.circum01();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,984,1050);


(lib.conf_banchina = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 1
	this.instance = new lib.banchina();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,545,551);


(lib.conf_approdo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 1
	this.instance = new lib.approdo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,534,399);


(lib.back_selected = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AjfAAIG/xCMAAAAiFg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#363636").s().p("AjfAAIG/xCMAAAAiFg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#383838").s().p("AjfAAIG/xCMAAAAiFg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3B3B3B").s().p("AjfAAIG/xCMAAAAiFg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3E3E3E").s().p("AjfAAIG/xCMAAAAiFg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#404040").s().p("AjfAAIG/xCMAAAAiFg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#434343").s().p("AjfAAIG/xCMAAAAiFg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#464646").s().p("AjfAAIG/xCMAAAAiFg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#484848").s().p("AjfAAIG/xCMAAAAiFg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4B4B4B").s().p("AjfAAIG/xCMAAAAiFg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4E4E4E").s().p("AjfAAIG/xCMAAAAiFg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#515151").s().p("AjfAAIG/xCMAAAAiFg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#535353").s().p("AjfAAIG/xCMAAAAiFg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#565656").s().p("AjfAAIG/xCMAAAAiFg");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#595959").s().p("AjfAAIG/xCMAAAAiFg");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5B5B5B").s().p("AjfAAIG/xCMAAAAiFg");

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#5E5E5E").s().p("AjfAAIG/xCMAAAAiFg");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#616161").s().p("AjfAAIG/xCMAAAAiFg");

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#636363").s().p("AjfAAIG/xCMAAAAiFg");

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#666666").s().p("AjfAAIG/xCMAAAAiFg");

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#5C5C5C").s().p("AjfAAIG/xCMAAAAiFg");

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#575757").s().p("AjfAAIG/xCMAAAAiFg");

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#545454").s().p("AjfAAIG/xCMAAAAiFg");

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#525252").s().p("AjfAAIG/xCMAAAAiFg");

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4F4F4F").s().p("AjfAAIG/xCMAAAAiFg");

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#4D4D4D").s().p("AjfAAIG/xCMAAAAiFg");

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4A4A4A").s().p("AjfAAIG/xCMAAAAiFg");

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#474747").s().p("AjfAAIG/xCMAAAAiFg");

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#454545").s().p("AjfAAIG/xCMAAAAiFg");

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#424242").s().p("AjfAAIG/xCMAAAAiFg");

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#3D3D3D").s().p("AjfAAIG/xCMAAAAiFg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},10).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.4,-109.1,44.8,218.3);


(lib.Switch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 2
	this.instance = new lib.frecciadx("synched",0);
	this.instance.setTransform(51,18.1);

	this.instance_1 = new lib.frecciadx("synched",0);
	this.instance_1.setTransform(-50,18.1,1,1,0,0,180);

	this.instance_2 = new lib.frecciadx("synched",0);
	this.instance_2.setTransform(51,-18,1,1,0,0,180);

	this.instance_3 = new lib.frecciadx("synched",0);
	this.instance_3.setTransform(-49.9,-18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Livello 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AvmHbIAAu1IfNAAIAAO1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.9,-47.5,199.8,95);


(lib.Server_web = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7F8FE").s().p("AApClIAAhLIiZAAICyj+IAHAAIAADfIAnAAIAAAfIgnAAIAABLgAg0A7IBdAAIAAiFg");
	this.shape.setTransform(93.5,-261.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7F8FE").s().p("AgRATQgJgIABgLQgBgKAJgIQAHgIAKAAQALAAAIAIQAHAIABAKQgBALgHAIQgIAIgLAAQgKAAgHgIg");
	this.shape_1.setTransform(75.4,-247.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7F8FE").s().p("AgxCdQgXgNgNgYQgNgXAAgaQAAgUAIgWQAIgWAUgdIBgiSIAbARIhVCFQARgGAOAAQAnAAAbAaQAaAbAAApQAAAcgNAWQgNAXgYANQgXANgaAAQgbAAgWgMgAgvAWQgUAUAAAcQAAAcAUAUQAUAUAbAAQAcAAAUgUQATgUABgcQgBgcgTgUQgVgUgbAAQgbAAgUAUg");
	this.shape_2.setTransform(56.7,-261.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7F8FE").s().p("AgSATQgHgIgBgLQABgKAHgIQAIgIAKAAQALAAAHAIQAJAIgBAKQABALgJAIQgHAIgLAAQgKAAgIgIg");
	this.shape_3.setTransform(38,-247.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E7F8FE").s().p("Ag4CYQgZgSgOgjQgOgkAAg/QAAg+AOgjQANgjAagSQAZgSAfAAQAdAAAZASQAaASAPAkQAPAlAAA7QAAA9gPAkQgPAkgZASQgaASgdAAQgfAAgZgRgAgoh7QgTAOgKAcQgJAcAAA1QAAA3AJAcQAKAcATAPQATAOAVAAQAUAAATgOQATgOAJgdQAMgiAAgxQAAgvgKgfQgLgfgTgOQgTgPgUAAQgVAAgTAPg");
	this.shape_4.setTransform(18.7,-261.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E7F8FE").s().p("AAIChIAAkhIgwAAIATggIA+AAIAAFBg");
	this.shape_5.setTransform(-8.1,-261.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E7F8FE").s().p("AgSATQgHgIgBgLQABgKAHgIQAJgIAJAAQALAAAIAIQAHAIAAAKQAAALgHAIQgIAIgLAAQgJAAgJgIg");
	this.shape_6.setTransform(-24.3,-247.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E7F8FE").s().p("AhsClIB5iFQAmgnALgTQALgTAAgWQAAgbgUgUQgUgUgeAAQgdAAgUAVQgVAVgDAlIgfAAQACgwAegeQAfgfArAAQAtAAAbAdQAcAcAAAoQAAAbgNAYQgOAWglApIhPBXICTAAIAAAfg");
	this.shape_7.setTransform(-43.8,-261.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E7F8FE").s().p("AAJChIAAkhIgxAAIATggIA+AAIAAFBg");
	this.shape_8.setTransform(-70.5,-261.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E7F8FE").s().p("AhsClIB5iFQAmgnALgTQALgTAAgWQAAgbgUgUQgUgUgeAAQgdAAgUAVQgVAVgDAlIgfAAQACgwAegeQAfgfArAAQAtAAAbAdQAcAcAAAoQAAAbgNAYQgOAWglApIhPBXICTAAIAAAfg");
	this.shape_9.setTransform(-93.7,-261.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Livello 2
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#252525").s().p("AhMDsQglgUgbgmIAABDIguAAIAAnzIAuAAIAADKQAdgkAkgRQAlgTApABQBMAAA2A4QA2A3AABNQAABOg2A4Qg3A3hMABQgrgBgjgSgAhIg9QgjATgSAgQgSAgAAApQAAA+ApAqQApAqA8ABQAlgBAhgSQAhgUATgiQATgiAAgnQABgngUggQgTgkgigSQgggUgkAAQgmAAgiAUg");
	this.shape_10.setTransform(55.8,87.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#252525").s().p("AiHCDQgyg6AAhIQAAhDAqg2QA2hEBZAAQBbAAA3BFQAnAyABBIIlDAAQACA/AmApQAnAoA5gBQAaAAAZgJQAbgKASgQQATgPAUgkIAoAVQgTAlgZAYQgaAXgfANQggALgnABQhYAAgxg7gAhbhuQgbAagOAxIEKAAQgIglgTgXQgRgWgegNQgcgOggAAQg0AAgnAig");
	this.shape_11.setTransform(9.4,94.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#252525").s().p("ACRDzIiRlvIiRFvIgKAAIiKnmIAyAAIBkFeICMleIAIAAICKFeIBlleIAyAAIiNHmg");
	this.shape_12.setTransform(-45.2,88);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).wait(1));

	// Livello 1
	this.instance = new lib.Server("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-134,-207,268,414);


(lib.Server_proxy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7F8FE").s().p("AhQCdQgegbgGgqIAlAAQAEAUAKAOQAKAMAQAIQARAIASAAQAhAAAagbQAZgbAAgoQAAgkgXgUQgXgYgkAAQggABgtATIAhiyICaAAIAAAhIh+AAIgSBiQAYgGAQAAQAxAAAgAgQAgAgAAAzQAAAjgQAeQgRAdgcAQQgcAPgiABQgsAAgegbg");
	this.shape.setTransform(103.8,-257.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7F8FE").s().p("AgTAVQgJgJAAgMQAAgLAJgJQAIgJALAAQAMAAAJAJQAJAJgBALQABAMgJAJQgJAJgMAAQgLAAgIgJg");
	this.shape_1.setTransform(83.7,-242.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7F8FE").s().p("Ag3CuQgZgOgPgbQgOgZAAgeQAAgWAJgYQAJgZAXggIBriiIAdATIhfCTQAUgGAPAAQArAAAeAcQAdAfAAAuQAAAegOAZQgOAZgbAPQgaAPgdAAQgeAAgZgOgAg0AYQgWAWAAAgQAAAfAWAWQAWAWAeAAQAfAAAWgWQAWgWAAgfQAAgggWgWQgWgWgfAAQgeAAgWAWg");
	this.shape_2.setTransform(62.9,-258.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7F8FE").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_3.setTransform(42.2,-242.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E7F8FE").s().p("Ag/CpQgbgVgPgnQgQgnAAhGQAAhFAQgnQAPgnAbgUQAcgUAiAAQAiAAAbAUQAdAUAQAoQARAoAABDQAABDgQAoQgQApgdAUQgcAUgiAAQgiAAgcgTgAgsiJQgVAQgLAfQgLAfAAA7QAAA9ALAfQAKAfAWARQAVAPAXAAQAXAAAUgPQAVgQALggQANgmAAg2QAAg0gMgjQgMgigVgQQgVgQgWAAQgXAAgVAQg");
	this.shape_4.setTransform(20.8,-258.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg2AAIAVgjIBEAAIAAFlg");
	this.shape_5.setTransform(-9.1,-258.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E7F8FE").s().p("AgTAVQgJgJAAgMQAAgLAJgJQAIgJALAAQAMAAAJAJQAIAJAAALQAAAMgIAJQgJAJgMAAQgLAAgIgJg");
	this.shape_6.setTransform(-27.1,-242.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E7F8FE").s().p("Ah4C4ICGiVQAqgqANgWQANgWAAgYQgBgegWgWQgXgVgggBQghABgWAWQgYAXgCApIgjAAQABg1AjgiQAhghAwAAQAyAAAfAfQAeAhAAArQAAAegOAbQgPAZgqAtIhXBhICjAAIAAAjg");
	this.shape_7.setTransform(-48.6,-258.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg3AAIAWgjIBFAAIAAFlg");
	this.shape_8.setTransform(-78.3,-258.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E7F8FE").s().p("Ah5C4ICIiVQAqgqAMgWQAMgWAAgYQABgegXgWQgXgVghgBQggABgXAWQgXAXgDApIgiAAQACg1AhgiQAjghAwAAQAxAAAfAfQAeAhABArQAAAegPAbQgPAZgqAtIhYBhICkAAIAAAjg");
	this.shape_9.setTransform(-104,-258.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Livello 2
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#252525").s().p("AhbD2IBFifIiUlMIAxAAIB6EUIB5kUIAxAAIjWHrg");
	this.shape_10.setTransform(69.1,100.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#252525").s().p("ABsC0IhsiYIhtCYIg3AAICJi8Ih8irIA4AAIBfCEIBeiEIA3AAIh6CrICKC8g");
	this.shape_11.setTransform(34.3,94.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#252525").s().p("AiGCFQg1g5AAhLQAAhJAyg4QA3g8BSAAQBTgBA3A9QAyA3AABKQAABLg1A5Qg1A4hSABQhRgBg1g4gAhihkQgpArAAA7QAAAnASAhQATAjAhASQAgASAlAAQAmAAAhgSQAggSATgjQATghAAgnQAAg7gqgrQgqgrg5AAQg4AAgqArg");
	this.shape_12.setTransform(-4.3,94.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#252525").s().p("AhaC5IAAlnIAwAAIAAA1QAVggAWgPQAXgQAaAAQATAAAWANIgYAnQgPgGgKAAQgXAAgUATQgVATgMAoQgIAfAABcIAAB6g");
	this.shape_13.setTransform(-34.4,93.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#252525").s().p("AiXDzIAAnmIBiAAQBRABAdAHQAqAKAbAgQAaAgAAAxQAAAwgaAgQgaAfgtAJQgiAJhZgBIgiAAIAADjgAhmgdIBSABQAwAAAYgJQAXgJAOgUQANgWgBgYQABgZgNgUQgOgUgVgJQgWgJgwAAIhWAAg");
	this.shape_14.setTransform(-66,88);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).wait(1));

	// Livello 1
	this.instance = new lib.Server("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-134,-206.9,268,414);


(lib.Server_mail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7F8FE").s().p("Ah4C4ICHiVQAqgqAMgWQAMgWAAgYQAAgegWgWQgWgVghgBQghABgXAWQgWAXgEApIgiAAQABg1AjgiQAhghAxAAQAxAAAfAfQAfAhgBArQAAAegOAbQgPAZgqAtIhYBhIClAAIAAAjg");
	this.shape.setTransform(103.7,-258.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7F8FE").s().p("AgTAVQgJgJAAgMQAAgLAJgJQAIgJALAAQAMAAAJAJQAJAJgBALQABAMgJAJQgJAJgMAAQgLAAgIgJg");
	this.shape_1.setTransform(83.7,-242.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7F8FE").s().p("Ag3CuQgZgOgPgbQgOgZAAgeQAAgWAJgYQAJgZAXggIBriiIAdATIhfCTQAUgGAPAAQArAAAeAcQAdAfAAAuQAAAegOAZQgOAZgbAPQgaAPgdAAQgeAAgZgOgAg0AYQgWAWAAAgQAAAfAWAWQAWAWAeAAQAfAAAWgWQAWgWAAgfQAAgggWgWQgWgWgfAAQgeAAgWAWg");
	this.shape_2.setTransform(62.9,-258.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7F8FE").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_3.setTransform(42.2,-242.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E7F8FE").s().p("Ag/CpQgbgVgPgnQgQgnAAhGQAAhFAQgnQAPgnAbgUQAcgUAiAAQAiAAAbAUQAdAUAQAoQARAoAABDQAABDgQAoQgQApgdAUQgcAUgiAAQgiAAgcgTgAgsiJQgVAQgLAfQgLAfAAA7QAAA9ALAfQAKAfAWARQAVAPAXAAQAXAAAUgPQAVgQALggQANgmAAg2QAAg0gMgjQgMgigVgQQgVgQgWAAQgXAAgVAQg");
	this.shape_4.setTransform(20.8,-258.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg2AAIAVgjIBEAAIAAFlg");
	this.shape_5.setTransform(-9.1,-258.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E7F8FE").s().p("AgTAVQgJgJAAgMQAAgLAJgJQAIgJALAAQAMAAAJAJQAIAJAAALQAAAMgIAJQgJAJgMAAQgLAAgIgJg");
	this.shape_6.setTransform(-27.1,-242.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E7F8FE").s().p("Ah4C4ICGiVQAqgqANgWQANgWAAgYQgBgegWgWQgXgVgggBQghABgWAWQgYAXgCApIgjAAQABg1AjgiQAhghAwAAQAyAAAfAfQAeAhAAArQAAAegOAbQgPAZgqAtIhXBhICjAAIAAAjg");
	this.shape_7.setTransform(-48.6,-258.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg3AAIAWgjIBFAAIAAFlg");
	this.shape_8.setTransform(-78.3,-258.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E7F8FE").s().p("Ah5C4ICIiVQAqgqAMgWQAMgWAAgYQABgegXgWQgXgVghgBQggABgXAWQgXAXgDApIgiAAQACg1AhgiQAjghAwAAQAxAAAfAfQAeAhABArQAAAegPAbQgPAZgqAtIhYBhICkAAIAAAjg");
	this.shape_9.setTransform(-104,-258.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Livello 2
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#252525").s().p("AgVD6IAAnzIAsAAIAAHzg");
	this.shape_10.setTransform(61.2,87.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#252525").s().p("AgVD+IAAlnIAsAAIAAFngAgai8QgKgLgBgQQABgQAKgLQAMgLAOAAQAPAAALALQAMALAAAQQAAAQgMALQgLALgPAAQgOAAgMgLg");
	this.shape_11.setTransform(47.6,86.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#252525").s().p("AiECGQg2g4gBhOQABhOA2g3QA3g3BNAAQArgBAkAUQAkASAbAmIAAhCIAtAAIAAFnIgtAAIAAg+QgeAkgjASQglARgpABQhNgBg2g3gAhEh8QggATgUAiQgTAigBAlQABAmATAjQAUAjAgATQAiAUAjgBQAnABAhgUQAjgTASghQATghgBgoQABg9gpgrQgqgpg8AAQglgBghAUg");
	this.shape_12.setTransform(16.8,94.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#252525").s().p("ADjDzIgwlaIitFaIgKAAIivldIgvFdIgwAAIBGnmIAIAAIDEGPIDFmPIAIAAIBGHmg");
	this.shape_13.setTransform(-36.8,88);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).wait(1));

	// Livello 1
	this.instance = new lib.Server("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-134,-206.9,268,414);


(lib.Server_dns_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7F8FE").s().p("Ag+CpQgcgVgPgnQgQgnAAhGQAAhFAQgnQAOgnAcgUQAcgUAjAAQAgAAAdAUQAcAUARAoQAQAoAABDQAABDgQAoQgRApgcAUQgdAUggAAQgjAAgbgTgAgsiJQgVAQgLAfQgLAfAAA7QAAA9ALAfQAKAfAWARQAVAPAXAAQAWAAAWgPQAUgQALggQAOgmAAg2QAAg0gNgjQgMgigUgQQgWgQgWAAQgXAAgVAQg");
	this.shape.setTransform(117.7,-258.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7F8FE").s().p("AhOChQgfgagKg0IAjAAQAKAiARAQQAWAUAjAAQAlAAAXgXQAYgYAAgfQAAgVgMgTQgMgSgTgJQgUgIgogBIAAgiQAXAAAUgIQAUgJAJgNQAJgOAAgQQAAgXgSgRQgTgSgaAAQgYAAgRAOQgQANgMAfIglAAQAKgsAdgYQAcgYAnAAQAaAAAYANQAYAMAOAWQANAWAAAXQAAAvguAbQAaAKAQATQAYAdAAAjQAAAegRAcQgQAcgbAPQgcAPghAAQguAAgfgbg");
	this.shape_1.setTransform(89.9,-258.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7F8FE").s().p("AgTAVQgKgJABgMQgBgLAKgJQAIgJALAAQAMAAAJAJQAJAJgBALQABAMgJAJQgJAJgMAAQgLAAgIgJg");
	this.shape_2.setTransform(69.9,-242.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7F8FE").s().p("Ag3CuQgZgOgPgbQgOgZAAgeQAAgWAJgYQAJgZAXggIBriiIAdATIhfCTQAUgGAPAAQArAAAeAcQAdAfAAAuQAAAegOAZQgOAZgbAPQgaAPgdAAQgeAAgZgOgAg0AYQgWAWAAAgQAAAfAWAWQAWAWAeAAQAfAAAWgWQAWgWAAgfQAAgggWgWQgWgWgfAAQgeAAgWAWg");
	this.shape_3.setTransform(49,-258.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E7F8FE").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_4.setTransform(28.3,-242.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E7F8FE").s().p("Ag+CpQgcgVgPgnQgQgnAAhGQAAhFAQgnQAPgnAbgUQAcgUAiAAQAhAAAcAUQAdAUAQAoQARAoAABDQAABDgQAoQgQApgdAUQgcAUgiAAQgiAAgbgTgAgsiJQgVAQgLAfQgLAfAAA7QAAA9ALAfQALAfAVARQAVAPAXAAQAWAAAWgPQAUgQALggQAOgmAAg2QAAg0gNgjQgMgigUgQQgWgQgWAAQgXAAgVAQg");
	this.shape_5.setTransform(6.9,-258.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg2AAIAVgjIBEAAIAAFlg");
	this.shape_6.setTransform(-22.9,-258.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E7F8FE").s().p("AgTAVQgJgJAAgMQAAgLAJgJQAIgJALAAQAMAAAJAJQAJAJgBALQABAMgJAJQgJAJgMAAQgLAAgIgJg");
	this.shape_7.setTransform(-40.9,-242.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E7F8FE").s().p("Ah5C4ICHiVQAqgqANgWQANgWAAgYQgBgegWgWQgXgVghgBQggABgWAWQgYAXgCApIgjAAQACg1AigiQAighAvAAQAyAAAfAfQAfAhAAArQAAAegPAbQgPAZgqAtIhXBhICjAAIAAAjg");
	this.shape_8.setTransform(-62.5,-258.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg3AAIAWgjIBFAAIAAFlg");
	this.shape_9.setTransform(-92.2,-258.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E7F8FE").s().p("Ah5C4ICIiVQApgqANgWQAMgWAAgYQABgegXgWQgXgVghgBQggABgXAWQgXAXgDApIgiAAQACg1AhgiQAjghAwAAQAxAAAfAfQAeAhAAArQAAAegOAbQgPAZgqAtIhYBhIClAAIAAAjg");
	this.shape_10.setTransform(-117.9,-258.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Livello 2
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#252525").s().p("AgYAZQgLgLAAgOQAAgOALgLQAKgKAOAAQAPAAAKAKQALALAAAOQAAAOgLALQgKALgPAAQgOAAgKgLg");
	this.shape_11.setTransform(77.7,106.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#252525").s().p("AhCDPQghgVgbgyIAlgWQAnBIAyAAQAVAAAUgKQATgLAKgRQAKgRAAgTQAAgWgPgVQgVgdg0goQg2gogNgSQgYgfAAgkQAAgdAOgXQAOgXAZgOQAYgNAbAAQAfAAAbAPQAbAPAdApIgjAbQgYghgSgKQgRgKgUAAQgZAAgQAQQgRAQgBAXQAAAOAHAOQAFANAQAQQAIAIAuAjQA5AoAVAhQAVAgAAAhQAAAvgkAjQgkAjgzAAQgmAAgggVg");
	this.shape_12.setTransform(51.9,87.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#252525").s().p("AgYAZQgLgLAAgOQAAgOALgLQAKgKAOAAQAPAAAKAKQALALAAAOQAAAOgLALQgKALgPAAQgOAAgKgLg");
	this.shape_13.setTransform(30.7,106.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#252525").s().p("AChDZIkdlIIAAFIIgtAAIAAmxIAJAAIEgFMIAAlMIArAAIAAGxg");
	this.shape_14.setTransform(-0.8,87.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#252525").s().p("AgYAZQgLgLAAgOQAAgOALgLQAKgKAOAAQAPAAAKAKQALALAAAOQAAAOgLALQgKALgPAAQgOAAgKgLg");
	this.shape_15.setTransform(-30.9,106.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#252525").s().p("Ai2DZIAAmxIBaAAQBgAAAsAPQA/AXAkA2QAkA3AABKQAABBgcAyQgdAygsAYQguAXhPAAgAiMCwIAyAAQBaAAAhgLQAygQAbgqQAcgpAAg8QAAg9gegtQgegtg3gQQgngNheAAIgeAAg");
	this.shape_16.setTransform(-61.5,87.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).wait(1));

	// Livello 1
	this.instance = new lib.Server("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-134,-206.9,268,414);


(lib.Server_dns = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7F8FE").s().p("AhOChQgfgagKg0IAjAAQAKAiARAQQAWAUAjAAQAlAAAXgXQAYgYAAgfQAAgVgMgTQgMgSgTgJQgUgIgogBIAAgiQAXAAAUgIQAUgJAJgNQAJgOAAgQQAAgXgSgRQgTgSgaAAQgYAAgRAOQgQANgMAfIglAAQAKgsAdgYQAcgYAnAAQAaAAAYANQAYAMAOAWQANAWAAAXQAAAvguAbQAaAKAQATQAYAdAAAjQAAAegRAcQgQAcgbAPQgcAPghAAQguAAgfgbg");
	this.shape.setTransform(103.8,-258.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7F8FE").s().p("AgTAVQgJgJAAgMQAAgLAJgJQAIgJALAAQAMAAAJAJQAJAJgBALQABAMgJAJQgJAJgMAAQgLAAgIgJg");
	this.shape_1.setTransform(83.7,-242.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7F8FE").s().p("Ag3CuQgZgOgPgbQgOgZAAgeQAAgWAJgYQAJgZAXggIBriiIAdATIhfCTQAUgGAPAAQArAAAeAcQAdAfAAAuQAAAegOAZQgOAZgbAPQgaAPgdAAQgeAAgZgOgAg0AYQgWAWAAAgQAAAfAWAWQAWAWAeAAQAfAAAWgWQAWgWAAgfQAAgggWgWQgWgWgfAAQgeAAgWAWg");
	this.shape_2.setTransform(62.9,-258.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7F8FE").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_3.setTransform(42.2,-242.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E7F8FE").s().p("Ag/CpQgbgVgPgnQgQgnAAhGQAAhFAQgnQAPgnAbgUQAcgUAiAAQAiAAAbAUQAdAUAQAoQARAoAABDQAABDgQAoQgQApgdAUQgcAUgiAAQgiAAgcgTgAgsiJQgVAQgLAfQgLAfAAA7QAAA9ALAfQAKAfAWARQAVAPAXAAQAXAAAUgPQAVgQALggQANgmAAg2QAAg0gMgjQgMgigVgQQgVgQgWAAQgXAAgVAQg");
	this.shape_4.setTransform(20.8,-258.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg2AAIAVgjIBEAAIAAFlg");
	this.shape_5.setTransform(-9.1,-258.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E7F8FE").s().p("AgTAVQgJgJAAgMQAAgLAJgJQAIgJALAAQAMAAAJAJQAIAJAAALQAAAMgIAJQgJAJgMAAQgLAAgIgJg");
	this.shape_6.setTransform(-27.1,-242.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E7F8FE").s().p("Ah4C4ICGiVQAqgqANgWQANgWAAgYQgBgegWgWQgXgVgggBQghABgWAWQgYAXgCApIgjAAQABg1AjgiQAhghAwAAQAyAAAfAfQAeAhAAArQAAAegOAbQgPAZgqAtIhXBhICjAAIAAAjg");
	this.shape_7.setTransform(-48.6,-258.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg3AAIAWgjIBFAAIAAFlg");
	this.shape_8.setTransform(-78.3,-258.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E7F8FE").s().p("Ah5C4ICIiVQAqgqAMgWQAMgWAAgYQABgegXgWQgXgVghgBQggABgXAWQgXAXgDApIgiAAQACg1AhgiQAjghAwAAQAxAAAfAfQAeAhABArQAAAegPAbQgPAZgqAtIhYBhICkAAIAAAjg");
	this.shape_9.setTransform(-104,-258.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Livello 2
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#252525").s().p("AgYAZQgLgLAAgOQAAgOALgLQAKgKAOAAQAPAAAKAKQALALAAAOQAAAOgLALQgKALgPAAQgOAAgKgLg");
	this.shape_10.setTransform(77.7,106.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#252525").s().p("AhCDPQghgVgbgyIAlgWQAnBIAyAAQAVAAAUgKQATgLAKgRQAKgRAAgTQAAgWgPgVQgVgdg0goQg2gogNgSQgYgfAAgkQAAgdAOgXQAOgXAZgOQAYgNAbAAQAfAAAbAPQAbAPAdApIgjAbQgYghgSgKQgRgKgUAAQgZAAgQAQQgRAQgBAXQAAAOAHAOQAFANAQAQQAIAIAuAjQA5AoAVAhQAVAgAAAhQAAAvgkAjQgkAjgzAAQgmAAgggVg");
	this.shape_11.setTransform(51.9,87.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#252525").s().p("AgYAZQgLgLAAgOQAAgOALgLQAKgKAOAAQAPAAAKAKQALALAAAOQAAAOgLALQgKALgPAAQgOAAgKgLg");
	this.shape_12.setTransform(30.7,106.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#252525").s().p("AChDZIkdlIIAAFIIgtAAIAAmxIAJAAIEgFMIAAlMIArAAIAAGxg");
	this.shape_13.setTransform(-0.8,87.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#252525").s().p("AgYAZQgLgLAAgOQAAgOALgLQAKgKAOAAQAPAAAKAKQALALAAAOQAAAOgLALQgKALgPAAQgOAAgKgLg");
	this.shape_14.setTransform(-30.9,106.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#252525").s().p("Ai2DZIAAmxIBaAAQBgAAAsAPQA/AXAkA2QAkA3AABKQAABBgcAyQgdAygsAYQguAXhPAAgAiMCwIAyAAQBaAAAhgLQAygQAbgqQAcgpAAg8QAAg9gegtQgegtg3gQQgngNheAAIgeAAg");
	this.shape_15.setTransform(-61.5,87.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).wait(1));

	// Livello 1
	this.instance = new lib.Server("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-134,-206.9,268,414);


(lib.Server_dhcp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7F8FE").s().p("AhQCdQgegbgGgqIAlAAQAEAUAKAOQAKAMAQAIQARAIASAAQAhAAAagbQAZgbAAgoQAAgkgXgUQgXgYgkAAQggABgtATIAhiyICaAAIAAAhIh+AAIgSBiQAYgGAQAAQAxAAAgAgQAgAgAAAzQAAAjgQAeQgRAdgcAQQgcAPgiABQgsAAgegbg");
	this.shape.setTransform(173,-257.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7F8FE").s().p("Ag/CpQgbgVgPgnQgQgnAAhGQAAhFAQgnQAPgnAbgUQAcgUAiAAQAiAAAbAUQAdAUAQAoQARAoAABDQAABDgQAoQgQApgdAUQgcAUgiAAQgiAAgcgTgAgsiJQgVAQgLAfQgLAfAAA7QAAA9ALAfQAKAfAWARQAVAPAXAAQAXAAAUgPQAVgQALggQANgmAAg2QAAg0gMgjQgMgigVgQQgVgQgWAAQgXAAgVAQg");
	this.shape_1.setTransform(145.4,-258.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7F8FE").s().p("Ah4C4ICHiVQApgqANgWQAMgWAAgYQABgegXgWQgWgVghgBQghABgXAWQgWAXgEApIgiAAQACg1AhgiQAjghAwAAQAxAAAfAfQAeAhAAArQAAAegOAbQgPAZgqAtIhYBhIClAAIAAAjg");
	this.shape_2.setTransform(117.6,-258.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7F8FE").s().p("AgTAVQgJgJAAgMQAAgLAJgJQAIgJALAAQAMAAAJAJQAIAJAAALQAAAMgIAJQgJAJgMAAQgLAAgIgJg");
	this.shape_3.setTransform(97.6,-242.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E7F8FE").s().p("AAuC4IAAhUIiqAAIDHkaIAHAAIAAD4IArAAIAAAiIgrAAIAABUgAg6BCIBoAAIAAiVg");
	this.shape_4.setTransform(76.1,-258.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E7F8FE").s().p("Ag/CpQgbgVgQgnQgPgnAAhGQAAhFAPgnQAQgnAbgUQAcgUAiAAQAiAAAbAUQAdAUAQAoQARAoAABDQAABDgQAoQgRApgcAUQgcAUgiAAQgiAAgcgTgAgsiJQgVAQgLAfQgLAfAAA7QAAA9ALAfQAKAfAWARQAVAPAXAAQAXAAAUgPQAVgQALggQANgmAAg2QABg0gMgjQgMgigWgQQgVgQgWAAQgXAAgVAQg");
	this.shape_5.setTransform(48.5,-258.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg2AAIAVgjIBFAAIAAFlg");
	this.shape_6.setTransform(18.6,-258.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E7F8FE").s().p("AgUAVQgIgJgBgMQABgLAIgJQAJgJALAAQAMAAAJAJQAIAJAAALQAAAMgIAJQgJAJgMAAQgLAAgJgJg");
	this.shape_7.setTransform(0.6,-242.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E7F8FE").s().p("AhZCaQgfgiAAgpQAAgeAQgYQAQgYAlgRQgagOgNgUQgNgUAAgXQAAgYAOgWQAOgXAZgMQAYgNAbAAQAcAAAZANQAYAMANAXQAOAWAAAZQAAAYgOATQgMATgaAOQAkAQARAXQAPAYAAAdQAAAqgbAfQgiAng8AAQg6AAgfgigAg7AYQgZAYAAAgQAAAUALARQAKASAUAJQATAKAYAAQAnAAAXgXQAXgYAAgeQAAgfgYgWQgZgYgjAAQgiAAgaAYgAgwiHQgTARAAAZQAAAYAVATQAVAUAaAAQASAAAQgJQAPgJAJgPQAKgQAAgPQAAgWgSgSQgSgTghAAQgcABgUARg");
	this.shape_8.setTransform(-20.8,-258.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E7F8FE").s().p("Ag3CuQgZgOgPgbQgOgZAAgeQAAgWAJgYQAJgZAXggIBriiIAdATIhfCTQAUgGAPAAQArAAAeAcQAdAfAAAuQAAAegOAZQgOAZgbAPQgaAPgdAAQgeAAgZgOgAg0AYQgWAWAAAgQAAAfAWAWQAWAWAeAAQAfAAAWgWQAWgWAAgfQAAgggWgWQgWgWgfAAQgeAAgWAWg");
	this.shape_9.setTransform(-47.9,-258.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg3AAIAWgjIBFAAIAAFlg");
	this.shape_10.setTransform(-78.3,-258.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E7F8FE").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_11.setTransform(-96.3,-242.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E7F8FE").s().p("Ah5C4ICIiVQApgqANgWQAMgWAAgYQABgegXgWQgXgVghgBQggABgXAWQgXAXgDApIgiAAQACg1AhgiQAjghAwAAQAxAAAfAfQAeAhAAArQAAAegOAbQgPAZgqAtIhYBhIClAAIAAAjg");
	this.shape_12.setTransform(-117.9,-258.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E7F8FE").s().p("AhDCpIBfiTQgUAHgPgBQgrAAgegcQgdgfAAguQAAgfAOgZQAOgZAcgOQAZgPAdAAQAeAAAZAOQAaAOAOAaQAOAaAAAdQAAAXgJAZQgJAXgWAgIhrCjgAg0iCQgWAWAAAfQAAAgAWAWQAWAWAeAAQAfAAAWgWQAWgWAAggQAAgfgWgWQgWgWgfAAQgdAAgXAWg");
	this.shape_13.setTransform(-145.8,-258.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg3AAIAWgjIBEAAIAAFlg");
	this.shape_14.setTransform(-175.3,-258.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Livello 2
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#252525").s().p("AgYAZQgLgLAAgOQAAgOALgLQAKgKAOAAQAPAAAKAKQALALAAAOQAAAOgLALQgKALgPAAQgOAAgKgLg");
	this.shape_15.setTransform(111.8,106.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#252525").s().p("AiHDZIAAmxIBXAAQBJAAAaAGQAlAJAYAdQAYAdAAArQAAArgYAdQgXAcgoAIQgeAHhPAAIgfAAIAADKgAhbgaIBKABQAqAAAVgIQAVgIAMgSQAMgTAAgWQAAgWgMgSQgMgSgTgIQgUgIgqAAIhNAAg");
	this.shape_16.setTransform(85.6,87.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#252525").s().p("AgYAZQgLgLAAgOQAAgOALgLQAKgKAOAAQAPAAAKAKQALALAAAOQAAAOgLALQgKALgPAAQgOAAgKgLg");
	this.shape_17.setTransform(59.2,106.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#252525").s().p("AicCYQg3hAAAhZQAAhgBDhBQBDhBBjAAQA9AAAxAYQAxAYAfAsIgiAaQgcglgogTQgogTgwAAQgyAAgsAZQgtAZgYAqQgYAqAAAzQAABPA2A2QA3A1BRAAQBbAAA+hIIAiAaQggAqgxAXQgxAWg8AAQhwAAhChMg");
	this.shape_18.setTransform(25.3,87.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#252525").s().p("AgYAZQgLgLAAgOQAAgOALgLQAKgKAOAAQAPAAAKAKQALALAAAOQAAAOgLALQgKALgPAAQgOAAgKgLg");
	this.shape_19.setTransform(-6.8,106.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#252525").s().p("ABuDZIAAjSIjbAAIAADSIgsAAIAAmxIAsAAIAAC2IDbAAIAAi2IAsAAIAAGxg");
	this.shape_20.setTransform(-36.7,87.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#252525").s().p("AgYAZQgLgLAAgOQAAgOALgLQAKgKAOAAQAPAAAKAKQALALAAAOQAAAOgLALQgKALgPAAQgOAAgKgLg");
	this.shape_21.setTransform(-65,106.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#252525").s().p("Ai2DZIAAmxIBaAAQBgAAAsAPQBAAXAjA2QAkA3AABKQAABBgdAyQgcAygsAYQguAXhPAAgAiNCwIAzAAQBaAAAigLQAwgQAcgqQAcgpAAg8QABg9gfgtQgegtg3gQQgngNheAAIgfAAg");
	this.shape_22.setTransform(-95.6,87.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).wait(1));

	// Livello 1
	this.instance = new lib.Server("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-134,-206.9,268,414);


(lib.Server_backup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7F8FE").s().p("Ag+CpQgcgVgPgnQgQgnAAhGQAAhFAQgnQAOgnAcgUQAcgUAjAAQAgAAAdAUQAcAUARAoQAQAoAABDQAABDgQAoQgRApgcAUQgdAUggAAQgjAAgbgTgAgsiJQgVAQgLAfQgLAfAAA7QAAA9ALAfQAKAfAWARQAVAPAXAAQAWAAAWgPQAUgQALggQAOgmAAg2QAAg0gNgjQgMgigUgQQgWgQgWAAQgXAAgVAQg");
	this.shape.setTransform(117.7,-258.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7F8FE").s().p("Ah4C4ICGiVQArgqAMgWQAMgWAAgYQAAgegWgWQgWgVghgBQghABgXAWQgWAXgDApIgjAAQABg1AjgiQAhghAwAAQAyAAAfAfQAfAhgBArQAAAegOAbQgPAZgqAtIhYBhIClAAIAAAjg");
	this.shape_1.setTransform(89.9,-258.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7F8FE").s().p("AgTAVQgKgJABgMQgBgLAKgJQAIgJALAAQAMAAAJAJQAJAJgBALQABAMgJAJQgJAJgMAAQgLAAgIgJg");
	this.shape_2.setTransform(69.9,-242.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7F8FE").s().p("Ag3CuQgZgOgPgbQgOgZAAgeQAAgWAJgYQAJgZAXggIBriiIAdATIhfCTQAUgGAPAAQArAAAeAcQAdAfAAAuQAAAegOAZQgOAZgbAPQgaAPgdAAQgeAAgZgOgAg0AYQgWAWAAAgQAAAfAWAWQAWAWAeAAQAfAAAWgWQAWgWAAgfQAAgggWgWQgWgWgfAAQgeAAgWAWg");
	this.shape_3.setTransform(49,-258.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E7F8FE").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_4.setTransform(28.3,-242.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E7F8FE").s().p("Ag+CpQgcgVgPgnQgQgnAAhGQAAhFAQgnQAPgnAbgUQAcgUAiAAQAhAAAcAUQAdAUAQAoQARAoAABDQAABDgQAoQgQApgdAUQgcAUgiAAQgiAAgbgTgAgsiJQgVAQgLAfQgLAfAAA7QAAA9ALAfQALAfAVARQAVAPAXAAQAWAAAWgPQAUgQALggQAOgmAAg2QAAg0gNgjQgMgigUgQQgWgQgWAAQgXAAgVAQg");
	this.shape_5.setTransform(6.9,-258.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg2AAIAVgjIBEAAIAAFlg");
	this.shape_6.setTransform(-22.9,-258.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E7F8FE").s().p("AgTAVQgJgJAAgMQAAgLAJgJQAIgJALAAQAMAAAJAJQAJAJgBALQABAMgJAJQgJAJgMAAQgLAAgIgJg");
	this.shape_7.setTransform(-40.9,-242.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E7F8FE").s().p("Ah5C4ICHiVQAqgqANgWQANgWAAgYQgBgegWgWQgXgVghgBQggABgWAWQgYAXgCApIgjAAQACg1AigiQAighAvAAQAyAAAfAfQAfAhAAArQAAAegPAbQgPAZgqAtIhXBhICjAAIAAAjg");
	this.shape_8.setTransform(-62.5,-258.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg3AAIAWgjIBFAAIAAFlg");
	this.shape_9.setTransform(-92.2,-258.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E7F8FE").s().p("Ah5C4ICIiVQApgqANgWQAMgWAAgYQABgegXgWQgXgVghgBQggABgXAWQgXAXgDApIgiAAQACg1AhgiQAjghAwAAQAxAAAfAfQAeAhAAArQAAAegOAbQgPAZgqAtIhYBhIClAAIAAAjg");
	this.shape_10.setTransform(-117.9,-258.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Livello 2
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#252525").s().p("Ai6D7IAAnrIAuAAIAABCQAbgmAkgTQAkgTAqAAQBNAAA2A4QA4A3AABOQAABOg3A4Qg2A3hNAAQgpAAgkgSQgkgSgdgjIAADCgAhnijQgoArAAA+QAAApASAfQASAhAiATQAjATAmAAQAjAAAhgTQAhgUATgiQAUghAAgmQAAgngTgiQgUgjgggTQghgTglAAQg8AAgqAqg");
	this.shape_11.setTransform(103.2,100.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#252525").s().p("AhWCjQgkgVgRgmQgRgnAAhLIAAiuIAuAAIAACpQAAA8AHAXQAKAhAcATQAcATAlAAQAnAAAagSQAcgTAKgfQAHgUAAhCIAAipIAvAAIAACxQAABJgRAmQgRAmgjAVQgjAWg1AAQgzAAgjgWg");
	this.shape_12.setTransform(58.3,94.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#252525").s().p("ABRD6Ii0ijIAACjIguAAIAAnzIAuAAIAAEbICliPIBFAAIjFCqIDQC9g");
	this.shape_13.setTransform(23.6,87.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#252525").s().p("Ah+CHQg4g3AAhOQAAgyAagtQAbgtAtgZQAvgZA3AAQAjAAAiALQAhAKAYASQAXASAQAbIgkAXQgxhAhSABQhAAAgsAqQgrArAAA7QAAAnAUAiQAUAjAjATQAjAUApgBQBQAAAzg/IAkAZQgaAmgrAVQgsAXg4AAQhUgBg4g2g");
	this.shape_14.setTransform(-18.4,94.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#252525").s().p("AiECGQg2g4AAhOQAAhOA2g3QA3g3BNAAQArgBAjAUQAkASAbAmIAAhCIAuAAIAAFnIguAAIAAg+QgcAkglASQgkARgqABQhMgBg2g3gAhDh8QgiATgTAiQgUAiABAlQgBAmAUAjQAUAjAhATQAhAUAkgBQAlABAjgUQAigTATghQASghAAgoQAAg9gqgrQgpgpg8AAQglgBggAUg");
	this.shape_15.setTransform(-64.3,94.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#252525").s().p("AiRDzIAAnmIBhAAQA4ABAfAOQAfANASAcQASAdAAAjQAAAggQAbQgQAbgeARQAmAMAUAQQAVARALAZQAMAZAAAdQAAA6grApQgrAohGAAgAhhDDIA9AAQAzABAZgKQAZgLAPgXQAPgVAAgaQAAghgVgYQgVgYglgJQgXgHg+AAIgcAAgAhhgmIAcAAQAzAAAWgKQAYgJAOgVQAOgUAAgZQAAgigYgSQgXgUgxAAIg5AAg");
	this.shape_16.setTransform(-104.9,88);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).wait(1));

	// Livello 1
	this.instance = new lib.Server("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-134,-206.9,268,414);


(lib.Server_app = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7F8FE").s().p("Ag/CpQgbgVgQgnQgPgnAAhGQAAhFAPgnQAQgnAbgUQAcgUAiAAQAiAAAbAUQAdAUAQAoQARAoAABDQAABDgQAoQgRApgcAUQgcAUgiAAQgiAAgcgTgAgsiJQgVAQgLAfQgLAfAAA7QAAA9ALAfQAKAfAWARQAVAPAXAAQAXAAAUgPQAVgQALggQANgmAAg2QABg0gMgjQgMgigWgQQgVgQgWAAQgXAAgVAQg");
	this.shape.setTransform(173.1,-258.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg2AAIAVgjIBFAAIAAFlg");
	this.shape_1.setTransform(143.3,-258.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7F8FE").s().p("Ah4C4ICHiVQApgqANgWQAMgWAAgYQABgegXgWQgWgVghgBQghABgXAWQgWAXgEApIgiAAQACg1AhgiQAjghAwAAQAxAAAfAfQAeAhAAArQAAAegOAbQgPAZgqAtIhYBhIClAAIAAAjg");
	this.shape_2.setTransform(117.6,-258.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7F8FE").s().p("AgTAVQgJgJAAgMQAAgLAJgJQAIgJALAAQAMAAAJAJQAIAJAAALQAAAMgIAJQgJAJgMAAQgLAAgIgJg");
	this.shape_3.setTransform(97.6,-242.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E7F8FE").s().p("Ah4C4ICGiVQAqgqANgWQANgWAAgYQgBgegWgWQgXgVgggBQghABgWAWQgYAXgCApIgjAAQABg1AjgiQAhghAwAAQAyAAAfAfQAeAhAAArQAAAegOAbQgPAZgqAtIhXBhICjAAIAAAjg");
	this.shape_4.setTransform(76,-258.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E7F8FE").s().p("Ag/CpQgbgVgQgnQgPgnAAhGQAAhFAPgnQAQgnAbgUQAcgUAiAAQAiAAAbAUQAdAUAQAoQARAoAABDQAABDgQAoQgRApgcAUQgcAUgiAAQgiAAgcgTgAgsiJQgVAQgLAfQgLAfAAA7QAAA9ALAfQAKAfAWARQAVAPAXAAQAXAAAUgPQAVgQALggQANgmAAg2QABg0gMgjQgMgigWgQQgVgQgWAAQgXAAgVAQg");
	this.shape_5.setTransform(48.5,-258.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg2AAIAVgjIBFAAIAAFlg");
	this.shape_6.setTransform(18.6,-258.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E7F8FE").s().p("AgUAVQgIgJgBgMQABgLAIgJQAJgJALAAQAMAAAJAJQAIAJAAALQAAAMgIAJQgJAJgMAAQgLAAgJgJg");
	this.shape_7.setTransform(0.6,-242.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E7F8FE").s().p("AhZCaQgfgiAAgpQAAgeAQgYQAQgYAlgRQgagOgNgUQgNgUAAgXQAAgYAOgWQAOgXAZgMQAYgNAbAAQAcAAAZANQAYAMANAXQAOAWAAAZQAAAYgOATQgMATgaAOQAkAQARAXQAPAYAAAdQAAAqgbAfQgiAng8AAQg6AAgfgigAg7AYQgZAYAAAgQAAAUALARQAKASAUAJQATAKAYAAQAnAAAXgXQAXgYAAgeQAAgfgYgWQgZgYgjAAQgiAAgaAYgAgwiHQgTARAAAZQAAAYAVATQAVAUAaAAQASAAAQgJQAPgJAJgPQAKgQAAgPQAAgWgSgSQgSgTghAAQgcABgUARg");
	this.shape_8.setTransform(-20.8,-258.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E7F8FE").s().p("Ag3CuQgZgOgPgbQgOgZAAgeQAAgWAJgYQAJgZAXggIBriiIAdATIhfCTQAUgGAPAAQArAAAeAcQAdAfAAAuQAAAegOAZQgOAZgbAPQgaAPgdAAQgeAAgZgOgAg0AYQgWAWAAAgQAAAfAWAWQAWAWAeAAQAfAAAWgWQAWgWAAgfQAAgggWgWQgWgWgfAAQgeAAgWAWg");
	this.shape_9.setTransform(-47.9,-258.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg3AAIAWgjIBFAAIAAFlg");
	this.shape_10.setTransform(-78.3,-258.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E7F8FE").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_11.setTransform(-96.3,-242.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E7F8FE").s().p("AhZCaQgfgiAAgpQAAgeAQgYQAQgYAmgRQgbgOgNgUQgNgUAAgXQAAgYAOgWQAOgXAZgMQAZgNAbAAQAbAAAZANQAXAMAOAXQANAWAAAZQAAAYgMATQgNATgaAOQAlAQAPAXQAQAYAAAdQAAAqgbAfQghAng9AAQg6AAgfgigAg7AYQgZAYAAAgQAAAUAKARQAMASATAJQATAKAYAAQAnAAAXgXQAXgYAAgeQAAgfgZgWQgYgYgjAAQgiAAgaAYgAgwiHQgTARAAAZQAAAYAVATQAVAUAaAAQARAAARgJQAPgJAJgPQAJgQAAgPQABgWgTgSQgRgTghAAQgcABgUARg");
	this.shape_12.setTransform(-117.7,-258.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E7F8FE").s().p("AhDCpIBfiTQgUAHgPgBQgrAAgegcQgdgfAAguQAAgfAOgZQAOgZAcgOQAZgPAdAAQAeAAAZAOQAaAOAOAaQAOAaAAAdQAAAXgJAZQgJAXgWAgIhrCjgAg0iCQgWAWAAAfQAAAgAWAWQAWAWAeAAQAfAAAWgWQAWgWAAggQAAgfgWgWQgWgWgfAAQgdAAgXAWg");
	this.shape_13.setTransform(-145.8,-258.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg3AAIAWgjIBEAAIAAFlg");
	this.shape_14.setTransform(-175.3,-258.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Livello 2
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#252525").s().p("Ai6D7IAAnrIAuAAIAABCQAbgmAkgTQAkgTAqAAQBNAAA2A4QA4A3AABOQAABOg3A4Qg2A3hNAAQgpAAgkgSQgkgSgdgjIAADCgAhnijQgoArAAA+QAAApASAfQASAhAiATQAjATAmAAQAjAAAhgTQAhgUATgiQAUghAAgmQAAgngTgiQgUgjgggTQghgTglAAQg8AAgqAqg");
	this.shape_15.setTransform(49.2,100.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#252525").s().p("Ai7D7IAAnrIAvAAIAABCQAbgmAkgTQAkgTAqAAQBNAAA3A4QA2A3ABBOQgBBOg2A4Qg2A3hNAAQgoAAglgSQgkgSgdgjIAADCgAhmijQgpArgBA+QAAApATAfQASAhAjATQAiATAmAAQAkAAAggTQAhgUAUgiQATghAAgmQAAgngTgiQgTgjghgTQghgTglAAQg8AAgpAqg");
	this.shape_16.setTransform(2.8,100.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#252525").s().p("AC1DzIhMigIjRAAIhLCgIg2AAIDmnmIAKAAIDjHmgAhRAkIClAAIhUiug");
	this.shape_17.setTransform(-46.3,88);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).wait(1));

	// Livello 1
	this.instance = new lib.Server("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-134,-206.9,268,414);


(lib.routerfrecce = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 2
	this.instance = new lib.frecciadx("synched",0);
	this.instance.setTransform(-40,38.6,1,1,0,-45,135);

	this.instance_1 = new lib.frecciadx("synched",0);
	this.instance_1.setTransform(38.7,-39.9,1,1,0,135,-45);

	this.instance_2 = new lib.frecciadx("synched",0);
	this.instance_2.setTransform(42.8,42.8,1,1,0,45,-135);

	this.instance_3 = new lib.frecciadx("synched",0);
	this.instance_3.setTransform(-42.7,-42.7,1,1,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.3,-66.2,132.6,132.6);


(lib.Router = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 2
	this.instance = new lib.routerfrecce("synched",0);
	this.instance.setTransform(0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Livello 1
	this.instance_1 = new lib.routerbase();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Livello 3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#438BC8","rgba(67,139,200,0)"],[0.502,0.984],0,0,0,0,0,125).s().p("AtkNlQloloAAn9QAAn8FoloQFoloH8AAQH9AAFoFoQFoFoAAH8QAAH9loFoQloFon9AAQn8AAlolog");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.9,-122.9,245.9,245.9);


(lib.preventivo_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// label (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AgfCZQgxgkgSg/IgjAAIAKgnIATAAIgBgPIABgOIgdAAIAKgpIAaAAQASg9AzgkQAwgjBAAAQAZAAAZAHIgPBAQgTgFgRAAQgjAAgeARQgcASgPAfICBAAIgJApIiEAAIgBAOIABAPIB9AAIgKAnIhoAAQAPAhAcASQAeARAlAAQAYABAagKIAABFQgXAGgcAAQhCAAgwgjg");
	var mask_graphics_1 = new cjs.Graphics().p("AgnDAQg+gtgWhOIgsAAIAMgzIAYAAIAAgSIAAgTIgkAAIAMgyIAhAAQAXhNBAgsQA9gtBPAAQAgAAAfAJIgTBRQgYgIgVAAQgtAAglAXQgjAVgTAoICjAAIgLAyIinAAIgBATIABASICdAAIgLAzIiDAAQASAoAjAXQAlAWAvAAQAfAAAggNIAABXQgcAIgkAAQhTAAg8gsg");
	var mask_graphics_2 = new cjs.Graphics().p("AgfCZQgxgkgSg/IgjAAIAKgnIATAAIgBgPIABgOIgdAAIAKgpIAaAAQASg9AzgkQAwgjBAAAQAZAAAZAHIgPBAQgTgFgRAAQgjAAgeARQgcASgPAfICBAAIgJApIiEAAIgBAOIABAPIB9AAIgKAnIhoAAQAPAhAcASQAeARAlAAQAYABAagKIAABFQgXAGgcAAQhCAAgwgjg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-3.3,y:-0.1}).wait(1).to({graphics:mask_graphics_1,x:-3.4,y:0.2}).wait(1).to({graphics:mask_graphics_2,x:-3.3,y:-0.1}).wait(2));

	// Livello 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AjhDhQhehdAAiEQAAiDBeheQBeheCDAAQCEAABdBeQBfBeAACDQAACEhfBdQhdBfiEAAQiDAAhehfg");

	this.instance = new lib.prev_bright();

	this.shape.mask = this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape}]},1).wait(2));

	// circle
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("Aj1D2QhnhmAAiQQAAiPBnhmQBmhnCPAAQCQAABmBnQBmBmABCPQgBCQhmBmQhmBmiQABQiPgBhmhmg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({scaleX:1.12,scaleY:1.12},0).wait(1).to({scaleX:1,scaleY:1},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.9,-34.9,69.8,69.8);


(lib.host_151 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7F8FE").s().p("AAMDQIAAl2IhAAAIAZgpIBQAAIAAGfg");
	this.shape.setTransform(37.7,144.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7F8FE").s().p("AhdC2QgjgfgHgxIArAAQAFAYALAPQAMAPATAJQATAJAVAAQAnAAAdgfQAegfAAgvQAAgpgbgZQgagbgrAAQglABg0AWIAmjPICzAAIAAAoIiSAAIgVByQAbgJAUAAQA5ABAlAlQAlAkAAA8QAAApgTAiQgTAjghASQggASgpAAQgyAAgjgfg");
	this.shape_1.setTransform(7.9,145.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7F8FE").s().p("AAMDQIAAl2IhAAAIAZgpIBQAAIAAGfg");
	this.shape_2.setTransform(-26.6,144.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7F8FE").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgLANAAQAOAAAKALQAKAKAAANQAAAOgKAKQgKALgOAAQgNAAgKgLg");
	this.shape_3.setTransform(-47.4,162.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Livello 1
	this.instance = new lib.Host("synched",0);
	this.instance.setTransform(0,0,1,1,0,0,0,0,19);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109,-96.4,218,192.9);


(lib.host_132 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7F8FE").s().p("AiMDVICdisQAwgyAPgZQAPgZAAgcQAAgjgagZQgbgagmAAQgmAAgaAbQgaAbgEAwIgoAAQACg+AngnQAogoA4AAQA5AAAkAlQAjAlAAAzQAAAjgRAfQgRAdgxA1IhlBwIC+AAIAAAog");
	this.shape.setTransform(40,144);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7F8FE").s().p("AhbC7QgkgfgLg8IApAAQALAoAUASQAZAYAoAAQAsAAAbgbQAcgcAAgkQAAgYgOgWQgOgVgXgLQgXgJgugCIAAgnQAaAAAYgKQAXgJALgQQAKgPAAgTQAAgbgVgUQgWgUgfAAQgbAAgTAPQgUAPgOAlIgqAAQAMg0AggbQAhgcAtAAQAfAAAcAPQAcAOAPAaQAQAZAAAcQAAA1g2AfQAeAMATAWQAcAhAAApQAAAkgTAgQgTAgggARQggASgmAAQg2AAgkgfg");
	this.shape_1.setTransform(7.9,144.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7F8FE").s().p("AAMDQIAAl2IhAAAIAZgpIBQAAIAAGfg");
	this.shape_2.setTransform(-26.6,144.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7F8FE").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgLANAAQAOAAAKALQAKAKAAANQAAAOgKAKQgKALgOAAQgNAAgKgLg");
	this.shape_3.setTransform(-47.4,162.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Livello 1
	this.instance = new lib.Host("synched",0);
	this.instance.setTransform(0,0,1,1,0,0,0,0,19);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109,-96.4,218,192.9);


(lib.host_101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7F8FE").s().p("AAMDQIAAl2IhAAAIAZgpIBQAAIAAGfg");
	this.shape.setTransform(37.7,144.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7F8FE").s().p("AhIDDQghgXgSgtQgRgugBhRQAAhRASgtQASgtAggXQAhgXAnAAQAmAAAiAXQAgAXAUAvQATAvAABNQgBBOgSAvQgTAtghAZQghAXgnAAQgoAAgfgXgAgzifQgZASgMAkQgOAlAABEQAABHAOAkQAMAkAZASQAYAUAbgBQAbAAAYgSQAXgSANglQAPgsAAg/QAAg8gNgoQgOgpgYgSQgZgTgaAAQgbAAgYATg");
	this.shape_1.setTransform(8,144.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7F8FE").s().p("AAMDQIAAl2IhAAAIAZgpIBQAAIAAGfg");
	this.shape_2.setTransform(-26.6,144.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7F8FE").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgLANAAQAOAAAKALQAKAKAAANQAAAOgKAKQgKALgOAAQgNAAgKgLg");
	this.shape_3.setTransform(-47.4,162.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Livello 1
	this.instance = new lib.Host("synched",0);
	this.instance.setTransform(0,0,1,1,0,0,0,0,19);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109,-96.4,218,192.9);


(lib.host_52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7F8FE").s().p("AiMDVICdisQAwgyAPgZQAPgZAAgcQAAgjgagZQgbgagmAAQgmAAgaAbQgaAbgEAwIgoAAQACg+AngnQAogoA4AAQA5AAAkAlQAjAlAAAzQAAAjgRAfQgRAdgxA1IhlBwIC+AAIAAAog");
	this.shape.setTransform(23.9,144);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7F8FE").s().p("AhdC2QgjgfgHgxIArAAQAFAYALAPQAMAPATAJQATAJAVAAQAnAAAdgfQAegfAAgvQAAgpgbgZQgagbgrAAQglABg0AWIAmjPICzAAIAAAoIiSAAIgVByQAbgJAUAAQA5ABAlAlQAlAkAAA8QAAApgTAiQgTAjghASQggASgpAAQgyAAgjgfg");
	this.shape_1.setTransform(-8.1,145.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7F8FE").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgLANAAQAOAAAKALQAKAKAAANQAAAOgKAKQgKALgOAAQgNAAgKgLg");
	this.shape_2.setTransform(-31.3,162.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Livello 1
	this.instance = new lib.Host("synched",0);
	this.instance.setTransform(0,0,1,1,0,0,0,0,19);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109,-96.4,218,192.9);


(lib.host_51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7F8FE").s().p("AAMDQIAAl2IhAAAIAZgpIBQAAIAAGfg");
	this.shape.setTransform(21.6,144.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7F8FE").s().p("AhdC2QgjgfgHgxIArAAQAFAYALAPQAMAPATAJQATAJAVAAQAnAAAdgfQAegfAAgvQAAgpgbgZQgagbgrAAQglABg0AWIAmjPICzAAIAAAoIiSAAIgVByQAbgJAUAAQA5ABAlAlQAlAkAAA8QAAApgTAiQgTAjghASQggASgpAAQgyAAgjgfg");
	this.shape_1.setTransform(-8.1,145.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7F8FE").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgLANAAQAOAAAKALQAKAKAAANQAAAOgKAKQgKALgOAAQgNAAgKgLg");
	this.shape_2.setTransform(-31.3,162.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Livello 1
	this.instance = new lib.Host("synched",0);
	this.instance.setTransform(0,0,1,1,0,0,0,0,19);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109,-96.4,218,192.9);


(lib.host_42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7F8FE").s().p("AiMDVICdisQAwgyAPgZQAPgZAAgcQAAgjgagZQgbgagmAAQgmAAgaAbQgaAbgEAwIgoAAQACg+AngnQAogoA4AAQA5AAAkAlQAjAlAAAzQAAAjgRAfQgRAdgxA1IhlBwIC+AAIAAAog");
	this.shape.setTransform(23.9,144);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7F8FE").s().p("AA1DVIAAhhIjFAAIDnlIIAIAAIAAEgIAyAAIAAAoIgyAAIAABhgAhEBMIB5AAIAAitg");
	this.shape_1.setTransform(-8.1,144);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7F8FE").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgLANAAQAOAAAKALQAKAKAAANQAAAOgKAKQgKALgOAAQgNAAgKgLg");
	this.shape_2.setTransform(-31.3,162.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Livello 1
	this.instance = new lib.Host("synched",0);
	this.instance.setTransform(0,0,1,1,0,0,0,0,19);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109,-96.4,218,192.9);


(lib.host_41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7F8FE").s().p("AAMDQIAAl2IhAAAIAZgpIBQAAIAAGfg");
	this.shape.setTransform(21.6,144.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7F8FE").s().p("AA1DVIAAhhIjFAAIDnlIIAIAAIAAEgIAyAAIAAAoIgyAAIAABhgAhEBMIB5AAIAAitg");
	this.shape_1.setTransform(-8.1,144);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7F8FE").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgLANAAQAOAAAKALQAKAKAAANQAAAOgKAKQgKALgOAAQgNAAgKgLg");
	this.shape_2.setTransform(-31.3,162.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Livello 1
	this.instance = new lib.Host("synched",0);
	this.instance.setTransform(0,0,1,1,0,0,0,0,19);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109,-96.4,218,192.9);


(lib.host_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7F8FE").s().p("AhbC7QgkgfgLg8IApAAQALAoAUASQAZAYAoAAQAsAAAbgbQAcgcAAgkQAAgYgOgWQgOgVgXgLQgXgJgugCIAAgnQAaAAAYgKQAXgJALgQQAKgPAAgTQAAgbgVgUQgWgUgfAAQgbAAgTAPQgUAPgOAlIgqAAQAMg0AggbQAhgcAtAAQAfAAAcAPQAcAOAPAaQAQAZAAAcQAAA1g2AfQAeAMATAWQAcAhAAApQAAAkgTAgQgTAgggARQggASgmAAQg2AAgkgfg");
	this.shape.setTransform(7.9,144.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7F8FE").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgLANAAQAOAAAKALQAKAKAAANQAAAOgKAKQgKALgOAAQgNAAgKgLg");
	this.shape_1.setTransform(-15.3,162.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Livello 1
	this.instance = new lib.Host("synched",0);
	this.instance.setTransform(0,0,1,1,0,0,0,0,19);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109,-96.4,218,192.9);


(lib.host_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7F8FE").s().p("AiMDVICdisQAwgyAPgZQAPgZAAgcQAAgjgagZQgbgagmAAQgmAAgaAbQgaAbgEAwIgoAAQACg+AngnQAogoA4AAQA5AAAkAlQAjAlAAAzQAAAjgRAfQgRAdgxA1IhlBwIC+AAIAAAog");
	this.shape.setTransform(7.8,144);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7F8FE").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgLANAAQAOAAAKALQAKAKAAANQAAAOgKAKQgKALgOAAQgNAAgKgLg");
	this.shape_1.setTransform(-15.3,162.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Livello 1
	this.instance = new lib.Host("synched",0);
	this.instance.setTransform(0,0,1,1,0,0,0,0,19);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109,-96.4,218,192.9);


(lib.Firewall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 2
	this.instance = new lib.routerfrecce("synched",0);
	this.instance.setTransform(0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Livello 1
	this.instance_1 = new lib.firewallbase();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Livello 3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#9C302B","rgba(190,61,54,0)"],[0.537,0.984],0,0,0,0,0,125).s().p("AtkNlQloloAAn9QAAn8FoloQFoloH8AAQH9AAFoFoQFoFoAAH8QAAH9loFoQloFon9AAQn8AAlolog");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.9,-122.9,245.9,245.9);


(lib.down_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 1
	this.instance = new lib.down_icon("single",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.2,-25.3,58.5,50.7);


(lib.conf_chiglia = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 1
	this.instance = new lib.Interpolazione13("synched",0);
	this.instance.setTransform(399.5,181);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Livello 2
	this.instance_1 = new lib.Interpolazione11("synched",0);
	this.instance_1.setTransform(399,613);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,798,869);


(lib.buildingE_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlmJ0IAAznILOAAIAAB7IpRAAIAAGKIJLAAIAAB5IpLAAIAAHtIJLAAIAAB8g");
	mask.setTransform(-40.1,48.4);

	// Livello 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#252525").s().p("AstMvIAA5dIZcAAIAAZdg");
	this.shape.setTransform(-44.4,45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AstMvIAA5dIZcAAIAAZdg");
	this.shape_1.setTransform(-44.4,45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AstMvIAA5dIZcAAIAAZdg");
	this.shape_2.setTransform(-44.4,45);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(2));

	// Livello 2
	this.instance = new lib.Edificio("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Livello 5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#006600").ss(1,1,1).p("AFazmIgFAGAlaTiIAGAF");
	this.shape_3.setTransform(-95,-4.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(68,68,68,0.008)").s().p("AyuUcIhjhjIAB71IKrrSIazgeIDEBdIgWaTIq8MdIkbBMg");
	this.shape_4.setTransform(0.6,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.5,-135,267,270);


(lib.buildingD_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoPJ0IAAznIEEAAQEXAACAAtQC3BABnCeQBnCfgBDYQABC9hSCQQhSCPiBBEQiDBEjpABgAmXH9ICRAAQEEAABjghQCOguBRh3QBRh4AAiuQAAizhYiBQhYiBidgwQh0gkkOAAIhZAAg");
	mask.setTransform(-41.4,48.4);

	// Livello 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#252525").s().p("AstMvIAA5dIZcAAIAAZdg");
	this.shape.setTransform(-44.4,45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AstMvIAA5dIZcAAIAAZdg");
	this.shape_1.setTransform(-44.4,45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AstMvIAA5dIZcAAIAAZdg");
	this.shape_2.setTransform(-44.4,45);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(2));

	// Livello 2
	this.instance = new lib.Edificio("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Livello 5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#006600").ss(1,1,1).p("AFazmIgFAGAlaTiIAGAF");
	this.shape_3.setTransform(-95,-4.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(68,68,68,0.008)").s().p("AyuUcIhjhjIAB71IKrrSIazgeIDEBdIgWaTIq8MdIkbBMg");
	this.shape_4.setTransform(0.6,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.5,-135,267,270);


(lib.buildingC_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnFG3Qifi5AAkEQAAkUDBi7QDBi9EiAAQCvAACOBGQCOBFBaB9IhjBNQhShrhyg3Qhzg3iKAAQiUAAiABIQiABIhGB6QhHB5AACXQAADlCeCZQCdCbDugBQEIAACxjOIBjBLQhdB3iNBCQiMBBiuAAQlHAAi/jcg");
	mask.setTransform(-44.7,48.4);

	// Livello 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#252525").s().p("AstMvIAA5dIZcAAIAAZdg");
	this.shape.setTransform(-44.4,45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AstMvIAA5dIZcAAIAAZdg");
	this.shape_1.setTransform(-44.4,45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AstMvIAA5dIZcAAIAAZdg");
	this.shape_2.setTransform(-44.4,45);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(2));

	// Livello 2
	this.instance = new lib.Edificio("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Livello 5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#006600").ss(1,1,1).p("AFazmIgFAGAlaTiIAGAF");
	this.shape_3.setTransform(-95,-4.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(68,68,68,0.008)").s().p("AyuUcIhjhjIAB71IKrrSIazgeIDEBdIgWaTIq8MdIkbBMg");
	this.shape_4.setTransform(0.6,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.5,-135,267,270);


(lib.buildingB_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Al2J0IAAznID3AAQCUAABQAkQBQAkAvBIQAuBKAABaQAABTgpBGQgpBEhPArQBiAhA1ArQA1AsAeBBQAcA/AABKQAACYhtBoQhvBoi4ABgAj8H4ICbAAQCJAABAgaQBAgcAmg4QAog5AAhEQAAhTg3g/Qg2g+hggWQg+gQigAAIhHAAgAj8hlIBIAAQCDAAA8gZQA+gYAjg0QAkg1AAhAQAAhWg8gxQg8gyiDAAIiRAAg");
	mask.setTransform(-41.5,48.4);

	// Livello 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#252525").s().p("AstMvIAA5dIZcAAIAAZdg");
	this.shape.setTransform(-44.4,45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AstMvIAA5dIZcAAIAAZdg");
	this.shape_1.setTransform(-44.4,45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AstMvIAA5dIZcAAIAAZdg");
	this.shape_2.setTransform(-44.4,45);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(2));

	// Livello 2
	this.instance = new lib.Edificio("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Livello 5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#006600").ss(1,1,1).p("AFazmIgFAGAlaTiIAGAF");
	this.shape_3.setTransform(-95,-4.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(68,68,68,0.008)").s().p("AyuUcIhjhjIAB71IKrrSIazgeIDEBdIgWaTIq8MdIkbBMg");
	this.shape_4.setTransform(0.6,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.5,-135,267,270);


(lib.buildingA_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AHVJ0IjFmeIocAAIjDGeIiNAAIJSznIAdAAIJKTngAjTBdIGsAAIjWnFg");
	mask.setTransform(-44.5,48.4);

	// Livello 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#252525").s().p("AstMvIAA5dIZcAAIAAZdg");
	this.shape.setTransform(-44.4,45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AstMvIAA5dIZcAAIAAZdg");
	this.shape_1.setTransform(-44.4,45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AstMvIAA5dIZcAAIAAZdg");
	this.shape_2.setTransform(-44.4,45);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(2));

	// Livello 2
	this.instance = new lib.Edificio("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Livello 5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#006600").ss(1,1,1).p("AFazmIgFAGAlaTiIAGAF");
	this.shape_3.setTransform(-95,-4.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(68,68,68,0.008)").s().p("AyuUcIhjhjIAB71IKrrSIazgeIDEBdIgWaTIq8MdIkbBMg");
	this.shape_4.setTransform(0.6,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.5,-135,267,270);


(lib.back_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AjfAAIG/xCMAAAAiFg");

	this.instance = new lib.back_selected();

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1C1C1C").s().p("AjfAAIG/xCMAAAAiFg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_1}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.4,-109.1,44.8,218.3);


(lib.router_ecoscandaglio = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// indirizzo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7F8FE").s().p("Ah5C4ICHiVQAqgrANgVQANgWAAgYQgBgegWgWQgXgWghABQgggBgWAXQgYAXgCApIgjAAQACg0AigiQAigjAvAAQAyAAAfAhQAfAfAAAsQAAAfgPAaQgPAZgqAtIhXBhICjAAIAAAjg");
	this.shape.setTransform(172.9,-151.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7F8FE").s().p("Ag/CoQgbgTgPgnQgQgoAAhGQAAhGAQgnQAPgmAbgUQAcgUAiAAQAiAAAbAUQAdAUAQAoQARAoAABDQAABDgQAoQgQAogdAVQgcAUgiAAQgiAAgcgUgAgsiJQgVAQgLAfQgLAfAAA8QAAA8ALAfQAKAgAWAPQAVAQAXABQAXgBAUgQQAVgPALgfQANgnAAg1QAAg1gMgiQgLgjgWgQQgVgQgWAAQgXAAgVAQg");
	this.shape_1.setTransform(145.3,-150.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7F8FE").s().p("Ah5C4ICIiVQApgrANgVQAMgWAAgYQABgegXgWQgXgWghABQgggBgXAXQgXAXgDApIgiAAQACg0AhgiQAjgjAwAAQAxAAAfAhQAeAfAAAsQAAAfgOAaQgPAZgqAtIhYBhIClAAIAAAjg");
	this.shape_2.setTransform(117.5,-151.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7F8FE").s().p("AgUAVQgIgJgBgMQABgLAIgJQAJgJALAAQAMAAAJAJQAIAJAAALQAAAMgIAJQgJAJgMAAQgLAAgJgJg");
	this.shape_3.setTransform(97.5,-135.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E7F8FE").s().p("AhQCdQgegbgGgrIAlAAQAEAWAKAMQAKANAQAIQARAIASAAQAhAAAagbQAZgaAAgoQAAglgXgVQgXgWgkAAQggAAgtATIAhizICaAAIAAAjIh+AAIgSBiQAYgIAQABQAxgBAgAiQAgAeAAA0QAAAjgQAdQgRAegcAQQgcAQgiAAQgsgBgegag");
	this.shape_4.setTransform(76,-150.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E7F8FE").s().p("Ag/CoQgbgTgQgnQgPgoAAhGQAAhGAPgnQAPgmAcgUQAcgUAiAAQAiAAAcAUQAcAUARAoQAQAoAABDQAABDgQAoQgRAogcAVQgdAUghAAQgiAAgcgUgAgsiJQgVAQgLAfQgLAfAAA8QAAA8ALAfQAKAgAWAPQAVAQAXABQAXgBAUgQQAVgPALgfQANgnAAg1QABg1gMgiQgMgjgWgQQgVgQgWAAQgXAAgVAQg");
	this.shape_5.setTransform(48.4,-150.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg3AAIAWgjIBFAAIAAFlg");
	this.shape_6.setTransform(18.5,-150.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E7F8FE").s().p("AgUAVQgIgJgBgMQABgLAIgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_7.setTransform(0.5,-135.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E7F8FE").s().p("AhZCaQgfgiAAgpQAAgeAQgYQAQgYAlgRQgagNgNgVQgNgUAAgXQAAgYAOgWQAOgWAZgNQAYgNAbAAQAcAAAZANQAYANANAWQANAWAAAYQAAAZgNATQgMATgaAOQAkAQARAXQAPAXAAAeQAAAqgbAfQgiAng8AAQg6AAgfgigAg7AYQgZAYAAAgQAAAUAKASQAMARATAKQATAJAYAAQAnAAAXgXQAXgYAAgfQAAgdgYgYQgZgXgjAAQgjAAgZAYgAgwiHQgTASAAAYQAAAYAVAUQAVASAaABQARAAARgJQAPgJAJgPQAKgQgBgPQABgVgTgTQgRgSghgBQgcAAgUASg");
	this.shape_8.setTransform(-20.9,-150.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E7F8FE").s().p("Ag3CuQgZgPgPgaQgOgaAAgdQAAgWAJgYQAJgZAXgfIBrijIAdATIhfCTQAUgGAPgBQArAAAeAeQAdAfAAAsQAAAfgOAZQgOAagbAPQgaAOgdAAQgeAAgZgOgAg0AYQgWAWAAAfQAAAgAWAWQAWAWAeAAQAfAAAWgWQAWgWAAggQAAgfgWgWQgWgWgfAAQgeAAgWAWg");
	this.shape_9.setTransform(-48,-150.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg3AAIAWgjIBEAAIAAFlg");
	this.shape_10.setTransform(-78.4,-150.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E7F8FE").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_11.setTransform(-96.4,-135.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E7F8FE").s().p("Ah5C4ICIiVQAqgrAMgVQAMgWAAgYQABgegXgWQgXgWghABQgggBgXAXQgXAXgDApIgiAAQACg0AhgiQAjgjAwAAQAxAAAfAhQAeAfABAsQAAAfgPAaQgPAZgqAtIhYBhICkAAIAAAjg");
	this.shape_12.setTransform(-118,-151.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E7F8FE").s().p("AhDCpIBfiTQgUAHgPAAQgqAAgegeQgegfAAgsQAAggAOgYQAOgaAcgPQAZgOAdAAQAeAAAZAOQAaAPAOAaQAOAZAAAeQAAAWgJAZQgIAYgXAfIhrCjgAg0iCQgWAWAAAgQAAAfAWAWQAXAWAdAAQAfAAAWgWQAWgWAAgfQAAgggWgWQgWgWgfAAQgdAAgXAWg");
	this.shape_13.setTransform(-145.9,-150.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg3AAIAWgjIBEAAIAAFlg");
	this.shape_14.setTransform(-175.4,-150.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[]},1).wait(1));

	// Router
	this.instance = new lib.Router("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.9,-122.9,245.9,245.9);


(lib.router_deriva = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// indirizzo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7F8FE").s().p("Ah5C4ICHiVQAqgrANgVQANgWAAgYQgBgegWgWQgXgWghABQgggBgWAXQgYAXgCApIgjAAQACg0AigiQAigjAvAAQAyAAAfAhQAfAfAAAsQAAAfgPAaQgPAZgqAtIhXBhICjAAIAAAjg");
	this.shape.setTransform(172.9,-151.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7F8FE").s().p("Ag/CoQgbgTgPgnQgQgoAAhGQAAhGAQgnQAPgmAbgUQAcgUAiAAQAiAAAbAUQAdAUAQAoQARAoAABDQAABDgQAoQgQAogdAVQgcAUgiAAQgiAAgcgUgAgsiJQgVAQgLAfQgLAfAAA8QAAA8ALAfQAKAgAWAPQAVAQAXABQAXgBAUgQQAVgPALgfQANgnAAg1QAAg1gMgiQgLgjgWgQQgVgQgWAAQgXAAgVAQg");
	this.shape_1.setTransform(145.3,-150.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7F8FE").s().p("Ah5C4ICIiVQApgrANgVQAMgWAAgYQABgegXgWQgXgWghABQgggBgXAXQgXAXgDApIgiAAQACg0AhgiQAjgjAwAAQAxAAAfAhQAeAfAAAsQAAAfgOAaQgPAZgqAtIhYBhIClAAIAAAjg");
	this.shape_2.setTransform(117.5,-151.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7F8FE").s().p("AgUAVQgIgJgBgMQABgLAIgJQAJgJALAAQAMAAAJAJQAIAJAAALQAAAMgIAJQgJAJgMAAQgLAAgJgJg");
	this.shape_3.setTransform(97.5,-135.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E7F8FE").s().p("AAuC4IAAhUIiqAAIDHkbIAHAAIAAD5IArAAIAAAiIgrAAIAABUgAg6BCIBoAAIAAiVg");
	this.shape_4.setTransform(76,-151.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E7F8FE").s().p("Ag/CoQgbgTgQgnQgPgoAAhGQAAhGAPgnQAPgmAcgUQAcgUAiAAQAiAAAcAUQAcAUARAoQAQAoAABDQAABDgQAoQgRAogcAVQgdAUghAAQgiAAgcgUgAgsiJQgVAQgLAfQgLAfAAA8QAAA8ALAfQAKAgAWAPQAVAQAXABQAXgBAUgQQAVgPALgfQANgnAAg1QABg1gMgiQgMgjgWgQQgVgQgWAAQgXAAgVAQg");
	this.shape_5.setTransform(48.4,-150.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg3AAIAWgjIBFAAIAAFlg");
	this.shape_6.setTransform(18.5,-150.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E7F8FE").s().p("AgUAVQgIgJgBgMQABgLAIgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_7.setTransform(0.5,-135.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E7F8FE").s().p("AhZCaQgfgiAAgpQAAgeAQgYQAQgYAlgRQgagNgNgVQgNgUAAgXQAAgYAOgWQAOgWAZgNQAYgNAbAAQAcAAAZANQAYANANAWQANAWAAAYQAAAZgNATQgMATgaAOQAkAQARAXQAPAXAAAeQAAAqgbAfQgiAng8AAQg6AAgfgigAg7AYQgZAYAAAgQAAAUAKASQAMARATAKQATAJAYAAQAnAAAXgXQAXgYAAgfQAAgdgYgYQgZgXgjAAQgjAAgZAYgAgwiHQgTASAAAYQAAAYAVAUQAVASAaABQARAAARgJQAPgJAJgPQAKgQgBgPQABgVgTgTQgRgSghgBQgcAAgUASg");
	this.shape_8.setTransform(-20.9,-150.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E7F8FE").s().p("Ag3CuQgZgPgPgaQgOgaAAgdQAAgWAJgYQAJgZAXgfIBrijIAdATIhfCTQAUgGAPgBQArAAAeAeQAdAfAAAsQAAAfgOAZQgOAagbAPQgaAOgdAAQgeAAgZgOgAg0AYQgWAWAAAfQAAAgAWAWQAWAWAeAAQAfAAAWgWQAWgWAAggQAAgfgWgWQgWgWgfAAQgeAAgWAWg");
	this.shape_9.setTransform(-48,-150.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg3AAIAWgjIBEAAIAAFlg");
	this.shape_10.setTransform(-78.4,-150.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E7F8FE").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_11.setTransform(-96.4,-135.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E7F8FE").s().p("Ah5C4ICIiVQAqgrAMgVQAMgWAAgYQABgegXgWQgXgWghABQgggBgXAXQgXAXgDApIgiAAQACg0AhgiQAjgjAwAAQAxAAAfAhQAeAfABAsQAAAfgPAaQgPAZgqAtIhYBhICkAAIAAAjg");
	this.shape_12.setTransform(-118,-151.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E7F8FE").s().p("AhDCpIBfiTQgUAHgPAAQgqAAgegeQgegfAAgsQAAggAOgYQAOgaAcgPQAZgOAdAAQAeAAAZAOQAaAPAOAaQAOAZAAAeQAAAWgJAZQgIAYgXAfIhrCjgAg0iCQgWAWAAAgQAAAfAWAWQAXAWAdAAQAfAAAWgWQAWgWAAgfQAAgggWgWQgWgWgfAAQgdAAgXAWg");
	this.shape_13.setTransform(-145.9,-150.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg3AAIAWgjIBEAAIAAFlg");
	this.shape_14.setTransform(-175.4,-150.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[]},1).wait(1));

	// altri ip
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E7F8FE").s().p("AhOCiQgfgcgKgzIAjAAQAKAiARARQAWATAjAAQAlAAAXgYQAYgXAAgfQAAgVgMgSQgMgTgTgJQgUgIgogCIAAggQAXAAAUgJQAUgJAJgOQAJgNAAgQQAAgXgSgRQgTgRgaAAQgYAAgRANQgQANgMAfIglAAQAKgtAdgXQAcgYAnAAQAaAAAYANQAYANAOAVQANAWAAAXQAAAvguAbQAaALAQASQAYAdAAAjQAAAfgRAbQgQAcgbAPQgcAPghAAQguAAgfgag");
	this.shape_15.setTransform(170.1,166.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E7F8FE").s().p("AAuC3IAAhTIiqAAIDHkbIAGAAIAAD5IAsAAIAAAiIgsAAIAABTgAg6BCIBoAAIAAiVg");
	this.shape_16.setTransform(142.4,166.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E7F8FE").s().p("Ah4C3ICGiTQArgsAMgVQAMgWAAgYQAAgegWgWQgWgWghAAQghAAgXAXQgWAXgDAqIgjAAQABg1AjgjQAhghAwgBQAyABAfAgQAfAggBArQAAAegOAbQgPAYgqAvIhYBgIClAAIAAAig");
	this.shape_17.setTransform(114.6,166.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E7F8FE").s().p("AgTAVQgKgJABgMQgBgLAKgJQAIgJALAAQAMAAAJAJQAJAJgBALQABAMgJAJQgJAJgMAAQgLAAgIgJg");
	this.shape_18.setTransform(94.6,182.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E7F8FE").s().p("Ah5C3ICHiTQAqgsANgVQANgWAAgYQgBgegWgWQgXgWghAAQggAAgWAXQgYAXgCAqIgjAAQACg1AigjQAighAvgBQAyABAfAgQAfAgAAArQAAAegPAbQgPAYgqAvIhXBgICjAAIAAAig");
	this.shape_19.setTransform(-97.6,166.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E7F8FE").s().p("AAuC3IAAhTIiqAAIDGkbIAHAAIAAD5IAsAAIAAAiIgsAAIAABTgAg7BCIBpAAIAAiVg");
	this.shape_20.setTransform(-125.2,166.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E7F8FE").s().p("Ah5C3ICIiTQApgsANgVQAMgWAAgYQABgegXgWQgXgWghAAQggAAgXAXQgXAXgDAqIgiAAQACg1AhgjQAjghAwgBQAxABAfAgQAeAgAAArQAAAegOAbQgPAYgqAvIhYBgIClAAIAAAig");
	this.shape_21.setTransform(-153,166.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E7F8FE").s().p("AgUAVQgIgJgBgMQABgLAIgJQAJgJALAAQAMAAAJAJQAIAJAAALQAAAMgIAJQgJAJgMAAQgLAAgJgJg");
	this.shape_22.setTransform(-173,182.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},2).to({state:[]},1).wait(1));

	// Router
	this.instance = new lib.Router("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.9,-122.9,245.9,245.9);


(lib.router_controfiocco = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// indirizzo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7F8FE").s().p("Ah5C4ICHiVQAqgrANgVQANgWAAgYQgBgegWgWQgXgWghABQgggBgWAXQgYAXgCApIgjAAQACg0AigiQAigjAvAAQAyAAAfAhQAfAfAAAsQAAAfgPAaQgPAZgqAtIhXBhICjAAIAAAjg");
	this.shape.setTransform(172.9,-151.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7F8FE").s().p("Ag/CoQgbgTgPgnQgQgoAAhGQAAhGAQgnQAPgmAbgUQAcgUAiAAQAiAAAbAUQAdAUAQAoQARAoAABDQAABDgQAoQgQAogdAVQgcAUgiAAQgiAAgcgUgAgsiJQgVAQgLAfQgLAfAAA8QAAA8ALAfQAKAgAWAPQAVAQAXABQAXgBAUgQQAVgPALgfQANgnAAg1QAAg1gMgiQgLgjgWgQQgVgQgWAAQgXAAgVAQg");
	this.shape_1.setTransform(145.3,-150.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7F8FE").s().p("Ah5C4ICIiVQApgrANgVQAMgWAAgYQABgegXgWQgXgWghABQgggBgXAXQgXAXgDApIgiAAQACg0AhgiQAjgjAwAAQAxAAAfAhQAeAfAAAsQAAAfgOAaQgPAZgqAtIhYBhIClAAIAAAjg");
	this.shape_2.setTransform(117.5,-151.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7F8FE").s().p("AgUAVQgIgJgBgMQABgLAIgJQAJgJALAAQAMAAAJAJQAIAJAAALQAAAMgIAJQgJAJgMAAQgLAAgJgJg");
	this.shape_3.setTransform(97.5,-135.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E7F8FE").s().p("AhOChQgfgbgKgzIAjAAQAKAjARAPQAWAUAjAAQAlAAAXgXQAYgYAAgfQAAgVgMgTQgMgSgTgJQgUgIgogCIAAghQAXABAUgJQAUgJAJgOQAJgNAAgPQAAgYgSgRQgTgSgaAAQgYAAgRAOQgQANgMAfIglAAQAKgtAdgXQAcgYAnAAQAaAAAYANQAYANAOAVQANAWAAAYQAAAuguAbQAaAKAQATQAYAcAAAkQAAAegRAcQgQAcgbAPQgcAPghAAQguAAgfgbg");
	this.shape_4.setTransform(76,-150.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E7F8FE").s().p("Ag/CoQgbgTgQgnQgPgoAAhGQAAhGAPgnQAPgmAcgUQAcgUAiAAQAiAAAcAUQAcAUARAoQAQAoAABDQAABDgQAoQgRAogcAVQgdAUghAAQgiAAgcgUgAgsiJQgVAQgLAfQgLAfAAA8QAAA8ALAfQAKAgAWAPQAVAQAXABQAXgBAUgQQAVgPALgfQANgnAAg1QABg1gMgiQgMgjgWgQQgVgQgWAAQgXAAgVAQg");
	this.shape_5.setTransform(48.4,-150.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg3AAIAWgjIBFAAIAAFlg");
	this.shape_6.setTransform(18.5,-150.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E7F8FE").s().p("AgUAVQgIgJgBgMQABgLAIgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_7.setTransform(0.5,-135.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E7F8FE").s().p("AhZCaQgfgiAAgpQAAgeAQgYQAQgYAlgRQgagNgNgVQgNgUAAgXQAAgYAOgWQAOgWAZgNQAYgNAbAAQAcAAAZANQAYANANAWQANAWAAAYQAAAZgNATQgMATgaAOQAkAQARAXQAPAXAAAeQAAAqgbAfQgiAng8AAQg6AAgfgigAg7AYQgZAYAAAgQAAAUAKASQAMARATAKQATAJAYAAQAnAAAXgXQAXgYAAgfQAAgdgYgYQgZgXgjAAQgjAAgZAYgAgwiHQgTASAAAYQAAAYAVAUQAVASAaABQARAAARgJQAPgJAJgPQAKgQgBgPQABgVgTgTQgRgSghgBQgcAAgUASg");
	this.shape_8.setTransform(-20.9,-150.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E7F8FE").s().p("Ag3CuQgZgPgPgaQgOgaAAgdQAAgWAJgYQAJgZAXgfIBrijIAdATIhfCTQAUgGAPgBQArAAAeAeQAdAfAAAsQAAAfgOAZQgOAagbAPQgaAOgdAAQgeAAgZgOgAg0AYQgWAWAAAfQAAAgAWAWQAWAWAeAAQAfAAAWgWQAWgWAAggQAAgfgWgWQgWgWgfAAQgeAAgWAWg");
	this.shape_9.setTransform(-48,-150.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg3AAIAWgjIBEAAIAAFlg");
	this.shape_10.setTransform(-78.4,-150.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E7F8FE").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_11.setTransform(-96.4,-135.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E7F8FE").s().p("Ah5C4ICIiVQAqgrAMgVQAMgWAAgYQABgegXgWQgXgWghABQgggBgXAXQgXAXgDApIgiAAQACg0AhgiQAjgjAwAAQAxAAAfAhQAeAfABAsQAAAfgPAaQgPAZgqAtIhYBhICkAAIAAAjg");
	this.shape_12.setTransform(-118,-151.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E7F8FE").s().p("AhDCpIBfiTQgUAHgPAAQgqAAgegeQgegfAAgsQAAggAOgYQAOgaAcgPQAZgOAdAAQAeAAAZAOQAaAPAOAaQAOAZAAAeQAAAWgJAZQgIAYgXAfIhrCjgAg0iCQgWAWAAAgQAAAfAWAWQAXAWAdAAQAfAAAWgWQAWgWAAgfQAAgggWgWQgWgWgfAAQgdAAgXAWg");
	this.shape_13.setTransform(-145.9,-150.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg3AAIAWgjIBEAAIAAFlg");
	this.shape_14.setTransform(-175.4,-150.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[]},1).wait(1));

	// altri ip
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E7F8FE").s().p("AAuC3IAAhTIiqAAIDGkbIAHAAIAAD5IAsAAIAAAiIgsAAIAABTgAg7BCIBpAAIAAiVg");
	this.shape_15.setTransform(170.1,166.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E7F8FE").s().p("AhOCiQgfgcgKgzIAjAAQAKAiARARQAWATAjAAQAlAAAXgYQAYgXAAgfQAAgVgMgSQgMgTgTgJQgUgIgogCIAAggQAXAAAUgJQAUgJAJgOQAJgNAAgQQAAgXgSgRQgTgRgaAAQgYAAgRANQgQANgMAfIglAAQAKgtAdgXQAcgYAnAAQAaAAAYANQAYANAOAVQANAWAAAXQAAAvguAbQAaALAQASQAYAdAAAjQAAAfgRAbQgQAcgbAPQgcAPghAAQguAAgfgag");
	this.shape_16.setTransform(142.4,166.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E7F8FE").s().p("Ah4C3ICGiTQArgsAMgVQAMgWAAgYQAAgegWgWQgWgWghAAQghAAgXAXQgWAXgDAqIgjAAQABg1AjgjQAhghAwgBQAyABAfAgQAfAggBArQAAAegOAbQgPAYgqAvIhYBgIClAAIAAAig");
	this.shape_17.setTransform(114.6,166.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E7F8FE").s().p("AgTAVQgKgJABgMQgBgLAKgJQAIgJALAAQAMAAAJAJQAJAJgBALQABAMgJAJQgJAJgMAAQgLAAgIgJg");
	this.shape_18.setTransform(94.6,182.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E7F8FE").s().p("Ah5C3ICHiTQArgsAMgVQANgWAAgYQAAgegXgWQgWgWgiAAQggAAgWAXQgYAXgDAqIgiAAQACg1AhgjQAjghAvgBQAyABAfAgQAeAgABArQAAAegPAbQgPAYgqAvIhXBgICjAAIAAAig");
	this.shape_19.setTransform(34.5,166.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E7F8FE").s().p("AhOCiQgfgcgKgzIAjAAQAKAiARARQAWATAjAAQAlAAAXgYQAYgXAAgfQAAgVgMgSQgMgTgTgJQgUgIgogCIAAggQAXAAAUgJQAUgJAJgOQAJgNAAgQQAAgXgSgRQgTgRgaAAQgYAAgRANQgQANgMAfIglAAQAKgtAdgXQAcgYAnAAQAaAAAYANQAYANAOAVQANAWAAAXQAAAvguAbQAaALAQASQAYAdAAAjQAAAfgRAbQgQAcgbAPQgcAPghAAQguAAgfgag");
	this.shape_20.setTransform(6.8,166.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E7F8FE").s().p("Ah4C3ICHiTQAqgsAMgVQAMgWAAgYQAAgegWgWQgWgWghAAQghAAgXAXQgWAXgEAqIgiAAQABg1AjgjQAhghAxgBQAxABAfAgQAfAggBArQAAAegOAbQgPAYgqAvIhYBgIClAAIAAAig");
	this.shape_21.setTransform(-20.9,166.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E7F8FE").s().p("AgTAVQgJgJAAgMQAAgLAJgJQAIgJALAAQAMAAAJAJQAJAJgBALQABAMgJAJQgJAJgMAAQgLAAgIgJg");
	this.shape_22.setTransform(-40.9,182.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg3AAIAWgjIBEAAIAAFlg");
	this.shape_23.setTransform(-99.6,166.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E7F8FE").s().p("AhOCiQgfgcgKgzIAjAAQAKAiARARQAWATAjAAQAlAAAXgYQAYgXAAgfQAAgVgMgSQgMgTgTgJQgUgIgogCIAAggQAXAAAUgJQAUgJAJgOQAJgNAAgQQAAgXgSgRQgTgRgaAAQgYAAgRANQgQANgMAfIglAAQAKgtAdgXQAcgYAnAAQAaAAAYANQAYANAOAVQANAWAAAXQAAAvguAbQAaALAQASQAYAdAAAjQAAAfgRAbQgQAcgbAPQgcAPghAAQguAAgfgag");
	this.shape_24.setTransform(-125.2,166.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E7F8FE").s().p("Ah5C3ICIiTQApgsANgVQAMgWAAgYQABgegXgWQgXgWghAAQggAAgXAXQgXAXgDAqIgiAAQACg1AhgjQAjghAwgBQAxABAfAgQAeAgAAArQAAAegOAbQgPAYgqAvIhYBgIClAAIAAAig");
	this.shape_25.setTransform(-153,166.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E7F8FE").s().p("AgUAVQgIgJgBgMQABgLAIgJQAJgJALAAQAMAAAJAJQAIAJAAALQAAAMgIAJQgJAJgMAAQgLAAgJgJg");
	this.shape_26.setTransform(-173,182.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},2).to({state:[]},1).wait(1));

	// Router
	this.instance = new lib.Router("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.9,-122.9,245.9,245.9);


(lib.router_banchina = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// indirizzo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7F8FE").s().p("Ah5C4ICHiVQAqgrANgVQANgWAAgYQgBgegWgWQgXgWghABQgggBgWAXQgYAXgCApIgjAAQACg0AigiQAigjAvAAQAyAAAfAhQAfAfAAAsQAAAfgPAaQgPAZgqAtIhXBhICjAAIAAAjg");
	this.shape.setTransform(172.9,-151.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7F8FE").s().p("Ag/CoQgbgTgPgnQgQgoAAhGQAAhGAQgnQAPgmAbgUQAcgUAiAAQAiAAAbAUQAdAUAQAoQARAoAABDQAABDgQAoQgQAogdAVQgcAUgiAAQgiAAgcgUgAgsiJQgVAQgLAfQgLAfAAA8QAAA8ALAfQAKAgAWAPQAVAQAXABQAXgBAUgQQAVgPALgfQANgnAAg1QAAg1gMgiQgLgjgWgQQgVgQgWAAQgXAAgVAQg");
	this.shape_1.setTransform(145.3,-150.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7F8FE").s().p("Ah5C4ICIiVQApgrANgVQAMgWAAgYQABgegXgWQgXgWghABQgggBgXAXQgXAXgDApIgiAAQACg0AhgiQAjgjAwAAQAxAAAfAhQAeAfAAAsQAAAfgOAaQgPAZgqAtIhYBhIClAAIAAAjg");
	this.shape_2.setTransform(117.5,-151.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7F8FE").s().p("AgUAVQgIgJgBgMQABgLAIgJQAJgJALAAQAMAAAJAJQAIAJAAALQAAAMgIAJQgJAJgMAAQgLAAgJgJg");
	this.shape_3.setTransform(97.5,-135.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E7F8FE").s().p("Ah4C4ICHiVQAqgrAMgVQAMgWAAgYQAAgegWgWQgWgWghABQghgBgXAXQgWAXgDApIgjAAQABg0AjgiQAhgjAwAAQAyAAAfAhQAfAfgBAsQAAAfgOAaQgPAZgqAtIhYBhIClAAIAAAjg");
	this.shape_4.setTransform(75.9,-151.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E7F8FE").s().p("Ag/CoQgbgTgQgnQgPgoAAhGQAAhGAPgnQAPgmAcgUQAcgUAiAAQAiAAAcAUQAcAUARAoQAQAoAABDQAABDgQAoQgRAogcAVQgdAUghAAQgiAAgcgUgAgsiJQgVAQgLAfQgLAfAAA8QAAA8ALAfQAKAgAWAPQAVAQAXABQAXgBAUgQQAVgPALgfQANgnAAg1QABg1gMgiQgMgjgWgQQgVgQgWAAQgXAAgVAQg");
	this.shape_5.setTransform(48.4,-150.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg3AAIAWgjIBFAAIAAFlg");
	this.shape_6.setTransform(18.5,-150.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E7F8FE").s().p("AgUAVQgIgJgBgMQABgLAIgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_7.setTransform(0.5,-135.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E7F8FE").s().p("AhZCaQgfgiAAgpQAAgeAQgYQAQgYAlgRQgagNgNgVQgNgUAAgXQAAgYAOgWQAOgWAZgNQAYgNAbAAQAcAAAZANQAYANANAWQANAWAAAYQAAAZgNATQgMATgaAOQAkAQARAXQAPAXAAAeQAAAqgbAfQgiAng8AAQg6AAgfgigAg7AYQgZAYAAAgQAAAUAKASQAMARATAKQATAJAYAAQAnAAAXgXQAXgYAAgfQAAgdgYgYQgZgXgjAAQgjAAgZAYgAgwiHQgTASAAAYQAAAYAVAUQAVASAaABQARAAARgJQAPgJAJgPQAKgQgBgPQABgVgTgTQgRgSghgBQgcAAgUASg");
	this.shape_8.setTransform(-20.9,-150.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E7F8FE").s().p("Ag3CuQgZgPgPgaQgOgaAAgdQAAgWAJgYQAJgZAXgfIBrijIAdATIhfCTQAUgGAPgBQArAAAeAeQAdAfAAAsQAAAfgOAZQgOAagbAPQgaAOgdAAQgeAAgZgOgAg0AYQgWAWAAAfQAAAgAWAWQAWAWAeAAQAfAAAWgWQAWgWAAggQAAgfgWgWQgWgWgfAAQgeAAgWAWg");
	this.shape_9.setTransform(-48,-150.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg3AAIAWgjIBEAAIAAFlg");
	this.shape_10.setTransform(-78.4,-150.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E7F8FE").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_11.setTransform(-96.4,-135.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E7F8FE").s().p("Ah5C4ICIiVQAqgrAMgVQAMgWAAgYQABgegXgWQgXgWghABQgggBgXAXQgXAXgDApIgiAAQACg0AhgiQAjgjAwAAQAxAAAfAhQAeAfABAsQAAAfgPAaQgPAZgqAtIhYBhICkAAIAAAjg");
	this.shape_12.setTransform(-118,-151.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E7F8FE").s().p("AhDCpIBfiTQgUAHgPAAQgqAAgegeQgegfAAgsQAAggAOgYQAOgaAcgPQAZgOAdAAQAeAAAZAOQAaAPAOAaQAOAZAAAeQAAAWgJAZQgIAYgXAfIhrCjgAg0iCQgWAWAAAgQAAAfAWAWQAXAWAdAAQAfAAAWgWQAWgWAAgfQAAgggWgWQgWgWgfAAQgdAAgXAWg");
	this.shape_13.setTransform(-145.9,-150.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg3AAIAWgjIBEAAIAAFlg");
	this.shape_14.setTransform(-175.4,-150.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[]},1).wait(1));

	// altri ip
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E7F8FE").s().p("AAuC3IAAhTIiqAAIDGkbIAHAAIAAD5IAsAAIAAAiIgsAAIAABTgAg7BCIBpAAIAAiVg");
	this.shape_15.setTransform(170.1,166.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E7F8FE").s().p("Ah4C3ICHiTQApgsANgVQAMgWAAgYQABgegXgWQgWgWghAAQghAAgXAXQgWAXgEAqIgiAAQACg1AhgjQAjghAwgBQAxABAfAgQAeAgAAArQAAAegOAbQgPAYgqAvIhYBgIClAAIAAAig");
	this.shape_16.setTransform(142.3,166.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E7F8FE").s().p("Ah4C3ICGiTQArgsAMgVQAMgWAAgYQAAgegWgWQgWgWghAAQghAAgXAXQgWAXgDAqIgjAAQABg1AjgjQAhghAwgBQAyABAfAgQAfAggBArQAAAegOAbQgPAYgqAvIhYBgIClAAIAAAig");
	this.shape_17.setTransform(114.6,166.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E7F8FE").s().p("AgTAVQgKgJABgMQgBgLAKgJQAIgJALAAQAMAAAJAJQAJAJgBALQABAMgJAJQgJAJgMAAQgLAAgIgJg");
	this.shape_18.setTransform(94.6,182.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E7F8FE").s().p("AhOCiQgfgcgKgzIAjAAQAKAiARARQAWATAjAAQAlAAAXgYQAYgXAAgfQAAgVgMgSQgMgTgTgJQgUgIgogCIAAggQAXAAAUgJQAUgJAJgOQAJgNAAgQQAAgXgSgRQgTgRgaAAQgYAAgRANQgQANgMAfIglAAQAKgtAdgXQAcgYAnAAQAaAAAYANQAYANAOAVQANAWAAAXQAAAvguAbQAaALAQASQAYAdAAAjQAAAfgRAbQgQAcgbAPQgcAPghAAQguAAgfgag");
	this.shape_19.setTransform(-97.5,166.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E7F8FE").s().p("Ah5C3ICHiTQArgsAMgVQANgWAAgYQAAgegXgWQgWgWgiAAQggAAgWAXQgYAXgDAqIgiAAQACg1AhgjQAjghAvgBQAyABAfAgQAeAgABArQAAAegPAbQgPAYgqAvIhXBgICjAAIAAAig");
	this.shape_20.setTransform(-125.3,166.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E7F8FE").s().p("Ah5C3ICIiTQApgsANgVQAMgWAAgYQABgegXgWQgXgWghAAQggAAgXAXQgXAXgDAqIgiAAQACg1AhgjQAjghAwgBQAxABAfAgQAeAgAAArQAAAegOAbQgPAYgqAvIhYBgIClAAIAAAig");
	this.shape_21.setTransform(-153,166.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E7F8FE").s().p("AgUAVQgIgJgBgMQABgLAIgJQAJgJALAAQAMAAAJAJQAIAJAAALQAAAMgIAJQgJAJgMAAQgLAAgJgJg");
	this.shape_22.setTransform(-173,182.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},2).to({state:[]},1).wait(1));

	// Router
	this.instance = new lib.Router("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.9,-122.9,245.9,245.9);


(lib.router_approdo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// indirizzo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7F8FE").s().p("Ah5C4ICHiVQAqgrANgVQANgWAAgYQgBgegWgWQgXgWghABQgggBgWAXQgYAXgCApIgjAAQACg0AigiQAigjAvAAQAyAAAfAhQAfAfAAAsQAAAfgPAaQgPAZgqAtIhXBhICjAAIAAAjg");
	this.shape.setTransform(172.9,-151.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7F8FE").s().p("Ag/CoQgbgTgPgnQgQgoAAhGQAAhGAQgnQAPgmAbgUQAcgUAiAAQAiAAAbAUQAdAUAQAoQARAoAABDQAABDgQAoQgQAogdAVQgcAUgiAAQgiAAgcgUgAgsiJQgVAQgLAfQgLAfAAA8QAAA8ALAfQAKAgAWAPQAVAQAXABQAXgBAUgQQAVgPALgfQANgnAAg1QAAg1gMgiQgLgjgWgQQgVgQgWAAQgXAAgVAQg");
	this.shape_1.setTransform(145.3,-150.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7F8FE").s().p("Ah5C4ICIiVQApgrANgVQAMgWAAgYQABgegXgWQgXgWghABQgggBgXAXQgXAXgDApIgiAAQACg0AhgiQAjgjAwAAQAxAAAfAhQAeAfAAAsQAAAfgOAaQgPAZgqAtIhYBhIClAAIAAAjg");
	this.shape_2.setTransform(117.5,-151.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7F8FE").s().p("AgUAVQgIgJgBgMQABgLAIgJQAJgJALAAQAMAAAJAJQAIAJAAALQAAAMgIAJQgJAJgMAAQgLAAgJgJg");
	this.shape_3.setTransform(97.5,-135.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg3AAIAWgjIBEAAIAAFlg");
	this.shape_4.setTransform(73.9,-150.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E7F8FE").s().p("Ag/CoQgbgTgQgnQgPgoAAhGQAAhGAPgnQAPgmAcgUQAcgUAiAAQAiAAAcAUQAcAUARAoQAQAoAABDQAABDgQAoQgRAogcAVQgdAUghAAQgiAAgcgUgAgsiJQgVAQgLAfQgLAfAAA8QAAA8ALAfQAKAgAWAPQAVAQAXABQAXgBAUgQQAVgPALgfQANgnAAg1QABg1gMgiQgMgjgWgQQgVgQgWAAQgXAAgVAQg");
	this.shape_5.setTransform(48.4,-150.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg3AAIAWgjIBFAAIAAFlg");
	this.shape_6.setTransform(18.5,-150.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E7F8FE").s().p("AgUAVQgIgJgBgMQABgLAIgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_7.setTransform(0.5,-135.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E7F8FE").s().p("AhZCaQgfgiAAgpQAAgeAQgYQAQgYAlgRQgagNgNgVQgNgUAAgXQAAgYAOgWQAOgWAZgNQAYgNAbAAQAcAAAZANQAYANANAWQANAWAAAYQAAAZgNATQgMATgaAOQAkAQARAXQAPAXAAAeQAAAqgbAfQgiAng8AAQg6AAgfgigAg7AYQgZAYAAAgQAAAUAKASQAMARATAKQATAJAYAAQAnAAAXgXQAXgYAAgfQAAgdgYgYQgZgXgjAAQgjAAgZAYgAgwiHQgTASAAAYQAAAYAVAUQAVASAaABQARAAARgJQAPgJAJgPQAKgQgBgPQABgVgTgTQgRgSghgBQgcAAgUASg");
	this.shape_8.setTransform(-20.9,-150.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E7F8FE").s().p("Ag3CuQgZgPgPgaQgOgaAAgdQAAgWAJgYQAJgZAXgfIBrijIAdATIhfCTQAUgGAPgBQArAAAeAeQAdAfAAAsQAAAfgOAZQgOAagbAPQgaAOgdAAQgeAAgZgOgAg0AYQgWAWAAAfQAAAgAWAWQAWAWAeAAQAfAAAWgWQAWgWAAggQAAgfgWgWQgWgWgfAAQgeAAgWAWg");
	this.shape_9.setTransform(-48,-150.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg3AAIAWgjIBEAAIAAFlg");
	this.shape_10.setTransform(-78.4,-150.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E7F8FE").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_11.setTransform(-96.4,-135.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E7F8FE").s().p("Ah5C4ICIiVQAqgrAMgVQAMgWAAgYQABgegXgWQgXgWghABQgggBgXAXQgXAXgDApIgiAAQACg0AhgiQAjgjAwAAQAxAAAfAhQAeAfABAsQAAAfgPAaQgPAZgqAtIhYBhICkAAIAAAjg");
	this.shape_12.setTransform(-118,-151.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E7F8FE").s().p("AhDCpIBfiTQgUAHgPAAQgqAAgegeQgegfAAgsQAAggAOgYQAOgaAcgPQAZgOAdAAQAeAAAZAOQAaAPAOAaQAOAZAAAeQAAAWgJAZQgIAYgXAfIhrCjgAg0iCQgWAWAAAgQAAAfAWAWQAXAWAdAAQAfAAAWgWQAWgWAAgfQAAgggWgWQgWgWgfAAQgdAAgXAWg");
	this.shape_13.setTransform(-145.9,-150.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg3AAIAWgjIBEAAIAAFlg");
	this.shape_14.setTransform(-175.4,-150.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[]},1).wait(1));

	// altri ip
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E7F8FE").s().p("AhOCiQgfgcgKgzIAjAAQAKAiARARQAWATAjAAQAlAAAXgYQAYgXAAgfQAAgVgMgSQgMgTgTgJQgUgIgogCIAAggQAXAAAUgJQAUgJAJgOQAJgNAAgQQAAgXgSgRQgTgRgaAAQgYAAgRANQgQANgMAfIglAAQAKgtAdgXQAcgYAnAAQAaAAAYANQAYANAOAVQANAWAAAXQAAAvguAbQAaALAQASQAYAdAAAjQAAAfgRAbQgQAcgbAPQgcAPghAAQguAAgfgag");
	this.shape_15.setTransform(34.5,166.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg2AAIAVgjIBFAAIAAFlg");
	this.shape_16.setTransform(4.8,166.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E7F8FE").s().p("Ah4C3ICHiTQAqgsAMgVQAMgWAAgYQAAgegWgWQgWgWghAAQghAAgXAXQgWAXgEAqIgiAAQABg1AjgjQAhghAxgBQAxABAfAgQAfAggBArQAAAegOAbQgPAYgqAvIhYBgIClAAIAAAig");
	this.shape_17.setTransform(-20.9,166.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E7F8FE").s().p("AgTAVQgJgJAAgMQAAgLAJgJQAIgJALAAQAMAAAJAJQAJAJgBALQABAMgJAJQgJAJgMAAQgLAAgIgJg");
	this.shape_18.setTransform(-40.9,182.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},2).to({state:[]},1).wait(1));

	// Router
	this.instance = new lib.Router("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.9,-122.9,245.9,245.9);


(lib.firewall_fuoribordo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// indirizzi
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7F8FE").s().p("Ag+CoQgcgUgPgmQgQgoAAhGQAAhFAQgoQAOgmAcgUQAcgUAjAAQAgAAAdAUQAcAUARAoQAQAoAABDQAABDgQAoQgRAogcAVQgdAUggAAQgjAAgbgUgAgsiJQgVAQgLAfQgLAfAAA7QAAA9ALAfQAKAfAWARQAVAQAXAAQAWAAAWgQQAUgQALgfQAOgnAAg2QAAg0gNgiQgMgjgUgQQgWgQgWAAQgXAAgVAQg");
	this.shape.setTransform(-138.8,-31.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7F8FE").s().p("Ag3CuQgZgPgPgaQgOgaAAgdQAAgWAJgYQAJgYAXghIBriiIAdATIhfCTQAUgGAPgBQArAAAeAeQAdAfAAAsQAAAfgOAZQgOAagbAPQgaAOgdAAQgeAAgZgOgAg0AYQgWAWAAAfQAAAgAWAWQAWAWAeAAQAfAAAWgWQAWgWAAggQAAgfgWgWQgWgWgfAAQgeAAgWAWg");
	this.shape_1.setTransform(-165.9,-31.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7F8FE").s().p("AgTAVQgKgJABgMQgBgLAKgJQAIgJALAAQAMAAAJAJQAJAJgBALQABAMgJAJQgJAJgMAAQgLAAgIgJg");
	this.shape_2.setTransform(-186.6,-15.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7F8FE").s().p("Ag3CuQgZgPgPgaQgOgaAAgdQAAgWAJgYQAJgYAXghIBriiIAdATIhfCTQAUgGAPgBQArAAAeAeQAdAfAAAsQAAAfgOAZQgOAagbAPQgaAOgdAAQgeAAgZgOgAg0AYQgWAWAAAfQAAAgAWAWQAWAWAeAAQAfAAAWgWQAWgWAAggQAAgfgWgWQgWgWgfAAQgeAAgWAWg");
	this.shape_3.setTransform(-207.5,-31.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E7F8FE").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_4.setTransform(-228.2,-15.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E7F8FE").s().p("Ag+CoQgcgUgPgmQgQgoAAhGQAAhFAQgoQAPgmAbgUQAcgUAiAAQAhAAAcAUQAdAUAQAoQARAoAABDQAABDgQAoQgQAogdAVQgcAUgiAAQgiAAgbgUgAgsiJQgVAQgLAfQgLAfAAA7QAAA9ALAfQAKAfAWARQAVAQAXAAQAWAAAWgQQAUgQALgfQAOgnAAg2QAAg0gNgiQgMgjgUgQQgWgQgWAAQgXAAgVAQg");
	this.shape_5.setTransform(-249.6,-31.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg2AAIAVgjIBEAAIAAFlg");
	this.shape_6.setTransform(-279.4,-31.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E7F8FE").s().p("AgTAVQgJgJAAgMQAAgLAJgJQAIgJALAAQAMAAAJAJQAJAJgBALQABAMgJAJQgJAJgMAAQgLAAgIgJg");
	this.shape_7.setTransform(-297.4,-15.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E7F8FE").s().p("Ah5C4ICHiVQAqgqANgWQANgWAAgYQgBgegWgWQgXgVghAAQggAAgWAWQgYAXgCApIgjAAQACg1AighQAigjAvABQAyAAAfAfQAfAhAAArQAAAfgPAaQgPAZgqAtIhXBhICjAAIAAAjg");
	this.shape_8.setTransform(-319,-31.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg3AAIAWgjIBFAAIAAFlg");
	this.shape_9.setTransform(-348.7,-31.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E7F8FE").s().p("Ah5C4ICIiVQApgqANgWQAMgWAAgYQABgegXgWQgXgVghAAQggAAgXAWQgXAXgDApIgiAAQACg1AhghQAjgjAwABQAxAAAfAfQAeAhAAArQAAAfgOAaQgPAZgqAtIhYBhIClAAIAAAjg");
	this.shape_10.setTransform(-374.4,-31.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg3AAIAWgjIBEAAIAAFlg");
	this.shape_11.setTransform(-137.9,32.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E7F8FE").s().p("AhOChQgfgbgKgzIAjAAQAKAjARAPQAWAUAjAAQAlAAAXgXQAYgYAAgfQAAgVgMgTQgMgSgTgJQgUgIgogCIAAghQAXABAUgJQAUgJAJgOQAJgNAAgPQAAgYgSgRQgTgSgaAAQgYAAgRAOQgQANgMAfIglAAQAKgtAdgXQAcgYAnAAQAaAAAYANQAYANAOAVQANAWAAAYQAAAuguAbQAaAKAQATQAYAcAAAkQAAAegRAcQgQAcgbAPQgcAPghAAQguAAgfgbg");
	this.shape_12.setTransform(-163.6,32.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E7F8FE").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_13.setTransform(-183.6,48);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E7F8FE").s().p("Ag+CoQgcgTgPgnQgQgoAAhGQAAhGAQgnQAPgmAbgUQAcgUAiAAQAhAAAcAUQAdAUAQAoQARAoAABDQAABDgQAoQgQAogdAVQgcAUgiAAQgiAAgbgUgAgsiJQgVAQgLAfQgLAfAAA8QAAA8ALAfQALAgAVAPQAVAQAXABQAWgBAWgQQAUgPALgfQAOgnAAg1QAAg1gNgiQgMgjgUgQQgWgQgWAAQgXAAgVAQg");
	this.shape_14.setTransform(-205,32.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E7F8FE").s().p("AAuC4IAAhUIiqAAIDHkbIAGAAIAAD5IAsAAIAAAiIgsAAIAABUgAg6BCIBoAAIAAiVg");
	this.shape_15.setTransform(-232.8,31.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E7F8FE").s().p("Ah4C4ICGiVQAqgrANgVQANgWAAgYQgBgegWgWQgXgWggABQghgBgWAXQgYAXgCApIgjAAQABg0AjgiQAhgjAwAAQAyAAAfAhQAeAfAAAsQAAAfgOAaQgPAZgqAtIhXBhICjAAIAAAjg");
	this.shape_16.setTransform(-260.6,31.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E7F8FE").s().p("AgTAVQgKgJABgMQgBgLAKgJQAIgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgIgJg");
	this.shape_17.setTransform(-280.6,48);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E7F8FE").s().p("AAuC4IAAhUIiqAAIDGkbIAHAAIAAD5IAsAAIAAAiIgsAAIAABUgAg7BCIBpAAIAAiVg");
	this.shape_18.setTransform(-302,31.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E7F8FE").s().p("AgUAVQgIgJgBgMQABgLAIgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_19.setTransform(-322.1,48);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E7F8FE").s().p("AhZCaQgfgiAAgpQAAgeAQgYQAQgYAlgRQgagNgNgVQgNgUAAgXQAAgYAOgWQAOgWAZgNQAYgNAbAAQAcAAAZANQAYANANAWQANAWAAAYQAAAZgNATQgMATgaAOQAkAQARAXQAPAXAAAeQAAAqgbAfQgiAng8AAQg6AAgfgigAg7AYQgZAYAAAgQAAAUAKASQAMARATAKQATAJAYAAQAnAAAXgXQAXgYAAgfQAAgdgYgYQgZgXgjAAQgjAAgZAYgAgwiHQgTASAAAYQAAAYAVAUQAVASAaABQARAAARgJQAPgJAJgPQAKgQgBgPQABgVgTgTQgRgSghgBQgcAAgUASg");
	this.shape_20.setTransform(-343.5,32.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E7F8FE").s().p("AhrCoICkk8IipAAIAAgjIDhAAIi+Fvg");
	this.shape_21.setTransform(-370.1,32.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Livello 1
	this.instance = new lib.Firewall("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.9,-122.9,245.9,245.9);


(lib.firewall_entrobordo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// indirizzi
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7F8FE").s().p("Ag/CpQgbgVgQgnQgPgnAAhGQAAhGAPgmQAPgnAcgUQAcgUAiAAQAiAAAbAUQAdAUAQApQARAoAABCQAABDgQAoQgRAogcAVQgdAUghAAQgiAAgcgTgAgsiJQgVAQgLAfQgLAfAAA8QAAA8ALAfQAKAfAWAQQAVARAXgBQAXABAUgRQAVgPALggQANgmAAg1QABg1gMgjQgMgigWgQQgVgQgWAAQgXAAgVAQg");
	this.shape.setTransform(-54.7,154.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7F8FE").s().p("AhrCpICkk+IipAAIAAgiIDhAAIi+Fug");
	this.shape_1.setTransform(-81.3,154.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7F8FE").s().p("AgUAVQgIgJgBgMQABgLAIgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_2.setTransform(-102.5,169.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7F8FE").s().p("Ag3CuQgZgOgPgaQgOgbAAgdQAAgWAJgYQAJgZAXgfIBrijIAdATIhfCTQAUgHAPABQArAAAeAcQAdAfAAAtQAAAggOAZQgOAZgbAOQgaAPgdAAQgeAAgZgOgAg0AYQgWAWAAAfQAAAgAWAWQAWAWAeAAQAfAAAWgWQAWgWAAggQAAgfgWgWQgWgWgfAAQgeAAgWAWg");
	this.shape_3.setTransform(-123.4,154.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E7F8FE").s().p("AgTAVQgJgJAAgMQAAgLAJgJQAIgJALAAQAMAAAJAJQAIAJAAALQAAAMgIAJQgJAJgMAAQgLAAgIgJg");
	this.shape_4.setTransform(-144.1,169.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E7F8FE").s().p("Ag/CpQgbgVgQgnQgPgnAAhGQAAhGAPgmQAPgnAcgUQAcgUAjAAQAgAAAdAUQAcAUARApQAQAoAABCQAABDgQAoQgQAogdAVQgdAUggAAQgjAAgcgTgAgsiJQgVAQgLAfQgLAfAAA8QAAA8ALAfQALAfAVAQQAVARAXgBQAWABAVgRQAVgPALggQANgmAAg1QABg1gMgjQgMgigWgQQgVgQgWAAQgXAAgVAQg");
	this.shape_5.setTransform(-165.5,154.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg3AAIAWgjIBFAAIAAFlg");
	this.shape_6.setTransform(-195.3,154.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E7F8FE").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_7.setTransform(-213.3,169.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E7F8FE").s().p("Ah5C3ICIiTQApgsANgVQAMgWAAgYQABgegXgWQgXgWghAAQggAAgXAXQgXAXgDAqIgiAAQACg1AhgjQAjghAwgBQAxABAfAgQAeAgAAArQAAAegOAbQgPAYgqAvIhYBgIClAAIAAAig");
	this.shape_8.setTransform(-234.9,153.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg2AAIAVgjIBEAAIAAFlg");
	this.shape_9.setTransform(-264.6,154.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E7F8FE").s().p("Ah4C3ICGiTQAqgsANgVQANgWAAgYQgBgegWgWQgXgWggAAQghAAgWAXQgYAXgCAqIgjAAQABg1AjgjQAhghAwgBQAyABAfAgQAeAgAAArQAAAegOAbQgPAYgqAvIhXBgICjAAIAAAig");
	this.shape_10.setTransform(-290.3,153.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E7F8FE").s().p("AhOCiQgfgcgKgzIAjAAQAKAiARARQAWATAjAAQAlAAAXgYQAYgXAAgfQAAgVgMgSQgMgTgTgJQgUgIgogCIAAggQAXAAAUgJQAUgJAJgOQAJgNAAgQQAAgXgSgRQgTgRgaAAQgYAAgRANQgQANgMAfIglAAQAKgtAdgXQAcgYAnAAQAaAAAYANQAYANAOAVQANAWAAAXQAAAvguAbQAaALAQASQAYAdAAAjQAAAfgRAbQgQAcgbAPQgcAPghAAQguAAgfgag");
	this.shape_11.setTransform(394.2,154.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E7F8FE").s().p("Ag/CpQgbgVgQgnQgPgnAAhGQAAhGAPgmQAQgnAbgUQAcgUAiAAQAiAAAbAUQAdAUAQApQARAoAABCQAABDgQAoQgRAogcAVQgcAUgiAAQgiAAgcgTgAgsiJQgVAQgLAfQgLAfAAA8QAAA8ALAfQAKAfAWAQQAVARAXgBQAXABAUgRQAVgPALggQANgmAAg1QABg1gMgjQgMgigWgQQgVgQgWAAQgXAAgVAQg");
	this.shape_12.setTransform(366.6,154.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E7F8FE").s().p("Ah5C3ICIiTQAqgsAMgVQAMgWAAgYQABgegXgWQgWgWgiAAQggAAgXAXQgXAXgDAqIgiAAQACg1AhgjQAjghAwgBQAxABAfAgQAeAgABArQAAAegPAbQgPAYgqAvIhXBgICjAAIAAAig");
	this.shape_13.setTransform(338.8,153.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E7F8FE").s().p("AgUAVQgIgJgBgMQABgLAIgJQAJgJALAAQAMAAAJAJQAIAJABALQgBAMgIAJQgJAJgMAAQgLAAgJgJg");
	this.shape_14.setTransform(318.8,169.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E7F8FE").s().p("AhQCdQgegbgGgqIAlAAQAEAUAKANQAKANAQAJQARAHASAAQAhAAAagbQAZgbAAgoQAAgkgXgUQgXgYgkAAQggAAgtAUIAhizICaAAIAAAiIh+AAIgSBiQAYgHAQAAQAxAAAgAiQAgAeAAAzQAAAkgQAdQgRAegcAQQgcAPgiAAQgsABgegbg");
	this.shape_15.setTransform(297.3,154.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E7F8FE").s().p("Ag+CpQgcgVgQgnQgPgnAAhGQAAhGAPgmQAPgnAcgUQAcgUAjAAQAgAAAdAUQAcAUARApQAQAoAABCQAABDgQAoQgQAogdAVQgdAUggAAQgjAAgbgTgAgsiJQgVAQgLAfQgLAfAAA8QAAA8ALAfQALAfAVAQQAVARAXgBQAWABAVgRQAVgPALggQAOgmgBg1QABg1gMgjQgMgigWgQQgVgQgWAAQgXAAgVAQg");
	this.shape_16.setTransform(269.7,154.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg3AAIAWgjIBFAAIAAFlg");
	this.shape_17.setTransform(239.8,154.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E7F8FE").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_18.setTransform(221.8,169.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E7F8FE").s().p("AhZCaQgfgiAAgpQAAgeAQgYQAQgYAmgRQgbgOgNgUQgNgUAAgYQAAgXAOgWQAOgWAZgNQAZgNAbAAQAbAAAZANQAXANAOAWQANAWAAAYQAAAZgMATQgNATgaAOQAlAQAPAXQAQAYAAAdQAAAqgbAfQghAng9AAQg6AAgfgigAg7AYQgZAYAAAgQAAAUAKASQAMARATAKQATAJAYAAQAnAAAXgXQAXgXAAggQAAgegZgXQgYgXgjAAQgiAAgaAYgAgwiGQgTAQAAAZQAAAYAVATQAVAUAagBQARAAARgIQAPgJAJgPQAJgPAAgQQABgVgTgTQgRgSghAAQgcgBgUATg");
	this.shape_19.setTransform(200.4,154.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E7F8FE").s().p("Ag3CuQgZgOgPgaQgOgbAAgdQAAgWAJgYQAJgZAXgfIBrijIAdATIhfCTQAUgHAPABQArAAAeAcQAdAfAAAtQAAAggOAZQgOAZgbAOQgaAPgdAAQgeAAgZgOgAg0AYQgWAWAAAfQAAAgAWAWQAWAWAeAAQAfAAAWgWQAWgWAAggQAAgfgWgWQgWgWgfAAQgeAAgWAWg");
	this.shape_20.setTransform(173.3,154.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg3AAIAWgjIBEAAIAAFlg");
	this.shape_21.setTransform(142.9,154.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E7F8FE").s().p("AgTAVQgKgJABgMQgBgLAKgJQAIgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgIgJg");
	this.shape_22.setTransform(124.9,169.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E7F8FE").s().p("Ah5C3ICHiTQArgsAMgVQANgWAAgYQAAgegXgWQgWgWgiAAQggAAgWAXQgYAXgCAqIgjAAQACg1AhgjQAjghAvgBQAyABAfAgQAeAgABArQAAAegPAbQgPAYgqAvIhXBgICjAAIAAAig");
	this.shape_23.setTransform(103.3,153.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E7F8FE").s().p("AhDCpIBfiTQgUAGgOABQgrAAgegdQgeggAAgtQAAgeAOgZQAPgZAbgQQAagOAcAAQAeAAAZAOQAZAPAOAaQAPAaAAAcQAAAXgJAYQgJAYgWAhIhsCigAgziCQgXAWAAAfQAAAfAXAXQAWAWAdAAQAfAAAWgWQAWgXAAgfQAAgfgWgWQgWgWgfAAQgeAAgVAWg");
	this.shape_24.setTransform(75.4,154.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg2AAIAVgjIBEAAIAAFlg");
	this.shape_25.setTransform(45.9,154.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Livello 1
	this.instance = new lib.Firewall("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.9,-122.9,245.9,245.9);


(lib.firewall_circumnavigante = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// indirizzi
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7F8FE").s().p("Ag3CuQgZgOgPgaQgOgbAAgdQAAgWAJgYQAJgYAXghIBriiIAdATIhfCTQAUgHAPABQArAAAeAcQAdAfAAAuQAAAegOAaQgOAZgbAOQgaAPgdAAQgeAAgZgOgAg0AYQgWAWAAAgQAAAfAWAWQAWAWAeAAQAfAAAWgWQAWgWAAgfQAAgggWgWQgWgWgfAAQgeAAgWAWg");
	this.shape.setTransform(-149.1,-30.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7F8FE").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_1.setTransform(-169.8,-15.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7F8FE").s().p("Ag3CuQgZgOgPgaQgOgbAAgdQAAgWAJgYQAJgYAXghIBriiIAdATIhfCTQAUgHAPABQArAAAeAcQAdAfAAAuQAAAegOAaQgOAZgbAOQgaAPgdAAQgeAAgZgOgAg0AYQgWAWAAAgQAAAfAWAWQAWAWAeAAQAfAAAWgWQAWgWAAgfQAAgggWgWQgWgWgfAAQgeAAgWAWg");
	this.shape_2.setTransform(-190.6,-30.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7F8FE").s().p("AgUAVQgIgJgBgMQABgLAIgJQAJgJALAAQAMAAAJAJQAIAJAAALQAAAMgIAJQgJAJgMAAQgLAAgJgJg");
	this.shape_3.setTransform(-211.3,-15.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E7F8FE").s().p("Ag+CpQgcgVgQgnQgPgnAAhGQAAhFAPgnQAPgnAcgUQAcgUAjAAQAgAAAdAUQAcAUARApQAQAoAABCQAABDgQAoQgRApgcAUQgdAUggAAQgjAAgbgTgAgsiJQgVAQgLAfQgLAfAAA7QAAA9ALAfQALAfAVAQQAVARAXgBQAXABAVgRQAUgPALggQAOgmAAg2QgBg0gMgjQgLgigVgQQgWgQgWAAQgXAAgVAQg");
	this.shape_4.setTransform(-232.7,-30.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg3AAIAWgjIBEAAIAAFlg");
	this.shape_5.setTransform(-262.6,-30.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E7F8FE").s().p("AgTAVQgKgJABgMQgBgLAKgJQAIgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgIgJg");
	this.shape_6.setTransform(-280.6,-15.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E7F8FE").s().p("Ah5C3ICHiTQArgrAMgWQANgWAAgYQAAgegXgWQgWgVgigBQggABgWAWQgYAXgDAqIgiAAQACg1AhgjQAjghAvgBQAyABAfAfQAeAgABAsQAAAegPAbQgPAYgqAvIhXBgICjAAIAAAig");
	this.shape_7.setTransform(-302.1,-31.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg2AAIAVgjIBFAAIAAFlg");
	this.shape_8.setTransform(-331.8,-30.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E7F8FE").s().p("Ah4C3ICHiTQAqgrAMgWQAMgWAAgYQAAgegWgWQgWgVghgBQghABgXAWQgWAXgEAqIgiAAQABg1AjgjQAhghAxgBQAxABAfAfQAfAggBAsQAAAegOAbQgPAYgqAvIhYBgIClAAIAAAig");
	this.shape_9.setTransform(-357.5,-31.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E7F8FE").s().p("Ag/CoQgbgTgQgnQgPgoAAhGQAAhGAPgnQAPgmAcgUQAcgUAjAAQAgAAAdAUQAcAUARAoQAQAoAABDQAABDgQAoQgQAogdAVQgdAUggAAQgjAAgcgUgAgsiJQgVAQgLAfQgLAfAAA8QAAA8ALAfQALAgAVAPQAVAQAXABQAWgBAVgQQAVgPALgfQANgnAAg1QABg1gMgiQgMgjgWgQQgVgQgWAAQgXAAgVAQg");
	this.shape_10.setTransform(-135.8,32.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E7F8FE").s().p("AhOChQgfgbgKgzIAjAAQAKAjARAPQAWAUAjAAQAlAAAXgXQAYgYAAgfQAAgVgMgTQgMgSgTgJQgUgIgogCIAAghQAXABAUgJQAUgJAJgOQAJgNAAgPQAAgYgSgRQgTgSgaAAQgYAAgRAOQgQANgMAfIglAAQAKgtAdgXQAcgYAnAAQAaAAAYANQAYANAOAVQANAWAAAYQAAAuguAbQAaAKAQATQAYAcAAAkQAAAegRAcQgQAcgbAPQgcAPghAAQguAAgfgbg");
	this.shape_11.setTransform(-163.6,32.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E7F8FE").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_12.setTransform(-183.6,48);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E7F8FE").s().p("Ag+CoQgcgTgPgnQgQgoAAhGQAAhGAQgnQAPgmAbgUQAcgUAiAAQAhAAAcAUQAdAUAQAoQARAoAABDQAABDgQAoQgQAogdAVQgcAUgiAAQgiAAgbgUgAgsiJQgVAQgLAfQgLAfAAA8QAAA8ALAfQALAgAVAPQAVAQAXABQAWgBAWgQQAUgPALgfQAOgnAAg1QAAg1gNgiQgMgjgUgQQgWgQgWAAQgXAAgVAQg");
	this.shape_13.setTransform(-205,32.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E7F8FE").s().p("AAuC4IAAhUIiqAAIDHkbIAGAAIAAD5IAsAAIAAAiIgsAAIAABUgAg6BCIBoAAIAAiVg");
	this.shape_14.setTransform(-232.8,31.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E7F8FE").s().p("Ah4C4ICGiVQAqgrANgVQANgWAAgYQgBgegWgWQgXgWggABQghgBgWAXQgYAXgCApIgjAAQABg0AjgiQAhgjAwAAQAyAAAfAhQAeAfAAAsQAAAfgOAaQgPAZgqAtIhXBhICjAAIAAAjg");
	this.shape_15.setTransform(-260.6,31.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E7F8FE").s().p("AgTAVQgKgJABgMQgBgLAKgJQAIgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgIgJg");
	this.shape_16.setTransform(-280.6,48);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E7F8FE").s().p("AAuC4IAAhUIiqAAIDGkbIAHAAIAAD5IAsAAIAAAiIgsAAIAABUgAg7BCIBpAAIAAiVg");
	this.shape_17.setTransform(-302,31.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E7F8FE").s().p("AgUAVQgIgJgBgMQABgLAIgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_18.setTransform(-322.1,48);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E7F8FE").s().p("AhZCaQgfgiAAgpQAAgeAQgYQAQgYAlgRQgagNgNgVQgNgUAAgXQAAgYAOgWQAOgWAZgNQAYgNAbAAQAcAAAZANQAYANANAWQANAWAAAYQAAAZgNATQgMATgaAOQAkAQARAXQAPAXAAAeQAAAqgbAfQgiAng8AAQg6AAgfgigAg7AYQgZAYAAAgQAAAUAKASQAMARATAKQATAJAYAAQAnAAAXgXQAXgYAAgfQAAgdgYgYQgZgXgjAAQgjAAgZAYgAgwiHQgTASAAAYQAAAYAVAUQAVASAaABQARAAARgJQAPgJAJgPQAKgQgBgPQABgVgTgTQgRgSghgBQgcAAgUASg");
	this.shape_19.setTransform(-343.5,32.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E7F8FE").s().p("AhrCoICkk8IipAAIAAgjIDhAAIi+Fvg");
	this.shape_20.setTransform(-370.1,32.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Livello 1
	this.instance = new lib.Firewall("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.9,-122.9,245.9,245.9);


(lib.firewall_chiglia = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// indirizzi
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7F8FE").s().p("AhrCpICkk+IipAAIAAgiIDhAAIi+Fug");
	this.shape.setTransform(-47,154.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7F8FE").s().p("AgTAVQgKgJABgMQgBgLAKgJQAIgJALAAQAMAAAJAJQAJAJgBALQABAMgJAJQgJAJgMAAQgLAAgIgJg");
	this.shape_1.setTransform(-68.3,169.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7F8FE").s().p("Ag3CuQgZgOgPgaQgOgbAAgdQAAgWAJgYQAJgZAXgfIBrijIAdATIhfCTQAUgHAPABQArAAAeAcQAdAfAAAtQAAAggOAZQgOAZgbAOQgaAPgdAAQgeAAgZgOgAg0AYQgWAWAAAfQAAAgAWAWQAWAWAeAAQAfAAAWgWQAWgWAAggQAAgfgWgWQgWgWgfAAQgeAAgWAWg");
	this.shape_2.setTransform(-89.1,154.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7F8FE").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_3.setTransform(-109.8,169.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E7F8FE").s().p("Ag+CpQgcgVgPgnQgQgnAAhGQAAhGAQgmQAPgnAbgUQAcgUAiAAQAhAAAcAUQAdAUAQApQARAoAABCQAABDgQAoQgQAogdAVQgcAUgiAAQgiAAgbgTgAgsiJQgVAQgLAfQgLAfAAA8QAAA8ALAfQALAfAVAQQAVARAXgBQAWABAWgRQAUgPALggQAOgmAAg1QAAg1gNgjQgMgigUgQQgWgQgWAAQgXAAgVAQg");
	this.shape_4.setTransform(-131.2,154.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg2AAIAVgjIBEAAIAAFlg");
	this.shape_5.setTransform(-161.1,154.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E7F8FE").s().p("AgTAVQgJgJAAgMQAAgLAJgJQAIgJALAAQAMAAAJAJQAJAJgBALQABAMgJAJQgJAJgMAAQgLAAgIgJg");
	this.shape_6.setTransform(-179.1,169.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E7F8FE").s().p("Ah5C3ICHiTQAqgsANgVQANgWAAgYQgBgegWgWQgXgWghAAQggAAgWAXQgYAXgCAqIgjAAQACg1AigjQAighAvgBQAyABAfAgQAfAgAAArQAAAegPAbQgPAYgqAvIhXBgICjAAIAAAig");
	this.shape_7.setTransform(-200.6,153.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg3AAIAWgjIBFAAIAAFlg");
	this.shape_8.setTransform(-230.3,154.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E7F8FE").s().p("Ah5C3ICIiTQApgsANgVQAMgWAAgYQABgegXgWQgXgWghAAQggAAgXAXQgXAXgDAqIgiAAQACg1AhgjQAjghAwgBQAxABAfAgQAeAgAAArQAAAegOAbQgPAYgqAvIhYBgIClAAIAAAig");
	this.shape_9.setTransform(-256,153.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E7F8FE").s().p("AhOCiQgfgcgKgzIAjAAQAKAiARARQAWATAjAAQAlAAAXgYQAYgXAAgfQAAgVgMgSQgMgTgTgJQgUgIgogCIAAggQAXAAAUgJQAUgJAJgOQAJgNAAgQQAAgXgSgRQgTgRgaAAQgYAAgRANQgQANgMAfIglAAQAKgtAdgXQAcgYAnAAQAaAAAYANQAYANAOAVQANAWAAAXQAAAvguAbQAaALAQASQAYAdAAAjQAAAfgRAbQgQAcgbAPQgcAPghAAQguAAgfgag");
	this.shape_10.setTransform(394.2,154.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E7F8FE").s().p("Ag/CpQgbgVgQgnQgPgnAAhGQAAhGAPgmQAQgnAbgUQAcgUAiAAQAiAAAbAUQAdAUAQApQARAoAABCQAABDgQAoQgRAogcAVQgcAUgiAAQgiAAgcgTgAgsiJQgVAQgLAfQgLAfAAA8QAAA8ALAfQAKAfAWAQQAVARAXgBQAXABAUgRQAVgPALggQANgmAAg1QABg1gMgjQgMgigWgQQgVgQgWAAQgXAAgVAQg");
	this.shape_11.setTransform(366.6,154.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E7F8FE").s().p("Ah5C3ICIiTQAqgsAMgVQAMgWAAgYQABgegXgWQgWgWgiAAQggAAgXAXQgXAXgDAqIgiAAQACg1AhgjQAjghAwgBQAxABAfAgQAeAgABArQAAAegPAbQgPAYgqAvIhXBgICjAAIAAAig");
	this.shape_12.setTransform(338.8,153.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E7F8FE").s().p("AgUAVQgIgJgBgMQABgLAIgJQAJgJALAAQAMAAAJAJQAIAJABALQgBAMgIAJQgJAJgMAAQgLAAgJgJg");
	this.shape_13.setTransform(318.8,169.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E7F8FE").s().p("AhOCiQgfgcgKgzIAjAAQAKAiARARQAWATAjAAQAlAAAXgYQAYgXAAgfQAAgVgMgSQgMgTgTgJQgUgIgogCIAAggQAXAAAUgJQAUgJAJgOQAJgNAAgQQAAgXgSgRQgTgRgaAAQgYAAgRANQgQANgMAfIglAAQAKgtAdgXQAcgYAnAAQAaAAAYANQAYANAOAVQANAWAAAXQAAAvguAbQAaALAQASQAYAdAAAjQAAAfgRAbQgQAcgbAPQgcAPghAAQguAAgfgag");
	this.shape_14.setTransform(297.3,154.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E7F8FE").s().p("Ag+CpQgcgVgQgnQgPgnAAhGQAAhGAPgmQAPgnAcgUQAcgUAjAAQAgAAAdAUQAcAUARApQAQAoAABCQAABDgQAoQgQAogdAVQgdAUggAAQgjAAgbgTgAgsiJQgVAQgLAfQgLAfAAA8QAAA8ALAfQALAfAVAQQAVARAXgBQAWABAVgRQAVgPALggQAOgmgBg1QABg1gMgjQgMgigWgQQgVgQgWAAQgXAAgVAQg");
	this.shape_15.setTransform(269.7,154.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg3AAIAWgjIBFAAIAAFlg");
	this.shape_16.setTransform(239.8,154.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E7F8FE").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_17.setTransform(221.8,169.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E7F8FE").s().p("AhZCaQgfgiAAgpQAAgeAQgYQAQgYAmgRQgbgOgNgUQgNgUAAgYQAAgXAOgWQAOgWAZgNQAZgNAbAAQAbAAAZANQAXANAOAWQANAWAAAYQAAAZgMATQgNATgaAOQAlAQAPAXQAQAYAAAdQAAAqgbAfQghAng9AAQg6AAgfgigAg7AYQgZAYAAAgQAAAUAKASQAMARATAKQATAJAYAAQAnAAAXgXQAXgXAAggQAAgegZgXQgYgXgjAAQgiAAgaAYgAgwiGQgTAQAAAZQAAAYAVATQAVAUAagBQARAAARgIQAPgJAJgPQAJgPAAgQQABgVgTgTQgRgSghAAQgcgBgUATg");
	this.shape_18.setTransform(200.4,154.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E7F8FE").s().p("Ag3CuQgZgOgPgaQgOgbAAgdQAAgWAJgYQAJgZAXgfIBrijIAdATIhfCTQAUgHAPABQArAAAeAcQAdAfAAAtQAAAggOAZQgOAZgbAOQgaAPgdAAQgeAAgZgOgAg0AYQgWAWAAAfQAAAgAWAWQAWAWAeAAQAfAAAWgWQAWgWAAggQAAgfgWgWQgWgWgfAAQgeAAgWAWg");
	this.shape_19.setTransform(173.3,154.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg3AAIAWgjIBEAAIAAFlg");
	this.shape_20.setTransform(142.9,154.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E7F8FE").s().p("AgTAVQgKgJABgMQgBgLAKgJQAIgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgIgJg");
	this.shape_21.setTransform(124.9,169.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E7F8FE").s().p("Ah5C3ICHiTQArgsAMgVQANgWAAgYQAAgegXgWQgWgWgiAAQggAAgWAXQgYAXgCAqIgjAAQACg1AhgjQAjghAvgBQAyABAfAgQAeAgABArQAAAegPAbQgPAYgqAvIhXBgICjAAIAAAig");
	this.shape_22.setTransform(103.3,153.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E7F8FE").s().p("AhDCpIBfiTQgUAGgOABQgrAAgegdQgeggAAgtQAAgeAOgZQAPgZAbgQQAagOAcAAQAeAAAZAOQAZAPAOAaQAPAaAAAcQAAAXgJAYQgJAYgWAhIhsCigAgziCQgXAWAAAfQAAAfAXAXQAWAWAdAAQAfAAAWgWQAWgXAAgfQAAgfgWgWQgWgWgfAAQgeAAgVAWg");
	this.shape_23.setTransform(75.4,154.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E7F8FE").s().p("AAKCzIAAlCIg2AAIAVgjIBEAAIAAFlg");
	this.shape_24.setTransform(45.9,154.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Livello 1
	this.instance = new lib.Firewall("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.9,-122.9,245.9,245.9);


(lib.rtEcoscandaglio_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 1
	this.instance = new lib.router_ecoscandaglio("single",2);
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// bright
	this.instance_1 = new lib.fw_bright();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-192.1,-184.4,382,306.4);


(lib.rtDeriva_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 1
	this.instance = new lib.router_deriva("single",2);
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// bright
	this.instance_1 = new lib.fw_bright();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225.1,-184.4,451.8,381.1);


(lib.rtControfiocco_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 1
	this.instance = new lib.router_controfiocco("single",2);
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// bright
	this.instance_1 = new lib.fw_bright();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225.1,-184.4,451.8,381.1);


(lib.rtBanchina_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 1
	this.instance = new lib.router_banchina("single",2);
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// bright
	this.instance_1 = new lib.fw_bright();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225.1,-184.4,451.8,381.1);


(lib.rtApprodo_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 1
	this.instance = new lib.router_approdo("single",2);
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// bright
	this.instance_1 = new lib.fw_bright();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-192.1,-184.4,382,381.1);


(lib.fwFuoribordo_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 1
	this.instance = new lib.firewall_fuoribordo("single",1);
	this.instance.setTransform(68.5,38,1,1,0,0,0,69.6,38.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// bright
	this.instance_1 = new lib.fw_bright();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-445.6,-123.1,567.5,245.9);


(lib.fwEntrobordo_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 1
	this.instance = new lib.firewall_entrobordo("single",1);
	this.instance.setTransform(68.5,38,1,1,0,0,0,69.6,38.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// bright
	this.instance_1 = new lib.fw_bright();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-314.9,-123.1,726,308);


(lib.fwCircumnavigante_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 1
	this.instance = new lib.firewall_circumnavigante("single",1);
	this.instance.setTransform(68.5,38,1,1,0,0,0,69.6,38.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// bright
	this.instance_1 = new lib.fw_bright();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-445.6,-123.1,567.5,245.9);


(lib.fwChiglia_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 1
	this.instance = new lib.firewall_chiglia("single",1);
	this.instance.setTransform(68.5,38,1,1,0,0,0,69.6,38.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// bright
	this.instance_1 = new lib.fw_bright();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-274.1,-123.1,685.2,308);


(lib.Edifici_map = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var rA = 10;
		
		this.backBtn.addEventListener("click", fl_ClickToGoToAndStopAtFrame_back.bind(this));
		this.Ain0.addEventListener("click", fl_ClickToGoToAndStopAtFrame_A.bind(this));
		this.Bin0.addEventListener("click", fl_ClickToGoToAndStopAtFrame_B.bind(this));
		this.Cin0.addEventListener("click", fl_ClickToGoToAndStopAtFrame_C.bind(this));
		this.Din0.addEventListener("click", fl_ClickToGoToAndStopAtFrame_D.bind(this));
		this.Ein0.addEventListener("click", fl_ClickToGoToAndStopAtFrame_E.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_back() {
			this.gotoAndStop(0);
		}
		function fl_ClickToGoToAndStopAtFrame_A() {
			this.gotoAndStop(1);
		}
		function fl_ClickToGoToAndStopAtFrame_B() {
			this.gotoAndStop(2);
		}
		function fl_ClickToGoToAndStopAtFrame_C() {
			this.gotoAndStop(3);
		}
		function fl_ClickToGoToAndStopAtFrame_D() {
			this.gotoAndStop(4);
		}
		function fl_ClickToGoToAndStopAtFrame_E() {
			this.gotoAndStop(5);
		}
		
		this.chiglia.addEventListener("click", fl_ClickToGoToAndStopAtFrame_Chiglia.bind(this));
		this.circumnavigante.addEventListener("click", fl_ClickToGoToAndStopAtFrame_Circumnavigante.bind(this));
		this.entrobordo.addEventListener("click", fl_ClickToGoToAndStopAtFrame_Entrobordo.bind(this));
		this.fuoribordo.addEventListener("click", fl_ClickToGoToAndStopAtFrame_Fuoribordo.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_Chiglia() {
			this.gotoAndStop(6);
		}
		function fl_ClickToGoToAndStopAtFrame_Circumnavigante() {
			this.gotoAndStop(7);
		}
		function fl_ClickToGoToAndStopAtFrame_Entrobordo() {
			this.gotoAndStop(8);
		}
		function fl_ClickToGoToAndStopAtFrame_Fuoribordo() {
			this.gotoAndStop(9);
		}
		
		this.approdo.addEventListener("click", fl_ClickToGoToAndStopAtFrame_rA.bind(this));
		this.banchina.addEventListener("click", fl_ClickToGoToAndStopAtFrame_rB.bind(this));
		this.controfiocco.addEventListener("click", fl_ClickToGoToAndStopAtFrame_rC.bind(this));
		this.deriva.addEventListener("click", fl_ClickToGoToAndStopAtFrame_rD.bind(this));
		this.ecoscandaglio.addEventListener("click", fl_ClickToGoToAndStopAtFrame_rE.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_rA() {
			this.gotoAndStop(rA);
		}
		function fl_ClickToGoToAndStopAtFrame_rB() {
			this.gotoAndStop(rA + 1);
		}
		function fl_ClickToGoToAndStopAtFrame_rC() {
			this.gotoAndStop(rA + 2);
		}
		function fl_ClickToGoToAndStopAtFrame_rD() {
			this.gotoAndStop(rA + 3);
		}
		function fl_ClickToGoToAndStopAtFrame_rE() {
			this.gotoAndStop(rA + 4);
		}
		
		//Preventivo
		this.prevBtn.addEventListener("click", fl_ClickToGoToAndStopAtFrame_p.bind(this));
		function fl_ClickToGoToAndStopAtFrame_p() {
			this.gotoAndStop(rA + 5);
		}
	}
	this.frame_6 = function() {
		this.stop();
		this.confC1.y = 140;
		var yTop = this.confC1.y;
		
		this.downBtn.addEventListener("click", fl_ClickToScroll_down.bind(this));
		
		function fl_ClickToScroll_down() {
			if (this.confC1.y > -200) {
				this.confC1.y -= 50;
			}
		}
		
		this.upBtn.addEventListener("click", fl_ClickToScroll_up.bind(this));
		
		function fl_ClickToScroll_up() {
			if (this.confC1.y < yTop) {
				this.confC1.y += 50;
			}
		}
	}
	this.frame_7 = function() {
		this.stop();
		var yTop = this.confC2.y;
		
		this.downBtn.addEventListener("click", fl_ClickToScroll_down.bind(this));
		
		function fl_ClickToScroll_down() {
			if (this.confC2.y > -250) {
				this.confC2.y -= 50;
			}
		}
		
		this.upBtn.addEventListener("click", fl_ClickToScroll_up.bind(this));
		
		function fl_ClickToScroll_up() {
			if (this.confC2.y < yTop) {
				this.confC2.y += 50;
			}
		}
	}
	this.frame_8 = function() {
		this.stop();
		var yTop = this.confE1.y;
		
		this.downBtn.addEventListener("click", fl_ClickToScroll_down.bind(this));
		
		function fl_ClickToScroll_down() {
			if (this.confE1.y > -200) {
				this.confE1.y -= 50;
			}
		}
		
		this.upBtn.addEventListener("click", fl_ClickToScroll_up.bind(this));
		
		function fl_ClickToScroll_up() {
			if (this.confE1.y < yTop) {
				this.confE1.y += 50;
			}
		}
	}
	this.frame_9 = function() {
		this.stop();
		var yTop = this.confE2.y;
		
		this.downBtn.addEventListener("click", fl_ClickToScroll_down.bind(this));
		
		function fl_ClickToScroll_down() {
			if (this.confE2.y > -200) {
				this.confE2.y -= 50;
			}
		}
		
		this.upBtn.addEventListener("click", fl_ClickToScroll_up.bind(this));
		
		function fl_ClickToScroll_up() {
			if (this.confE2.y < yTop) {
				this.confE2.y += 50;
			}
		}
	}
	this.frame_12 = function() {
		this.stop();
		var yTop = this.confC3.y;
		
		this.downBtn.addEventListener("click", fl_ClickToScroll_down.bind(this));
		
		function fl_ClickToScroll_down() {
			if (this.confC3.y > -200) {
				this.confC3.y -= 50;
			}
		}
		
		this.upBtn.addEventListener("click", fl_ClickToScroll_up.bind(this));
		
		function fl_ClickToScroll_up() {
			if (this.confC3.y < yTop) {
				this.confC3.y += 50;
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(3).call(this.frame_12).wait(4));

	// Nome edificio
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7F8FE").s().p("AhZBXQghgmAAgxQAAgsAcgjQAjgtA7AAQA8AAAkAuQAbAhAAAvIjVAAQAAApAaAbQAaAbAmAAQAQAAARgHQASgGAMgLQAMgKAOgXIAaANQgNAZgRAQQgQAPgVAIQgVAIgaAAQg5AAghgmgAg7hIQgSARgKAgICwAAQgGgYgMgPQgLgPgUgJQgTgJgVAAQgiAAgZAXg");
	this.shape.setTransform(-145.4,-292.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7F8FE").s().p("ABJB6IAAhyQAAgogEgNQgFgYgPgMQgPgMgZAAQgaAAgWASQgWATgHAbQgEASAAAuIAABXIgfAAIAAjtIAfAAIAAArQASgZAXgMQAWgMAYAAQAbAAAVAOQAVANAKAXQAKAXAAAwIAAB6g");
	this.shape_1.setTransform(-173.6,-293.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7F8FE").s().p("AgOCoIAAjtIAdAAIAADtgAgRh8QgHgHAAgLQAAgKAHgIQAIgHAJAAQAKAAAHAHQAIAIAAAKQAAALgIAHQgHAIgKAAQgJAAgIgIg");
	this.shape_2.setTransform(-191.9,-297.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7F8FE").s().p("AgOClIAAlJIAdAAIAAFJg");
	this.shape_3.setTransform(-200.9,-297.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E7F8FE").s().p("AhYBYQgjgmAAgyQAAgvAhglQAkgoA2AAQA3AAAkAoQAhAlAAAvQAAAygjAmQgjAlg2AAQg1AAgjglgAhAhCQgcAcAAAnQAAAZANAXQAMAXAWAMQAVAMAYAAQAZAAAVgMQAWgMANgXQAMgXAAgZQAAgngcgcQgbgcgmAAQglAAgbAcg");
	this.shape_4.setTransform(-232.6,-292.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E7F8FE").s().p("AgOCoIAAjtIAdAAIAADtgAgRh8QgHgHAAgLQAAgKAHgIQAIgHAJAAQAKAAAHAHQAIAIAAAKQAAALgIAHQgHAIgKAAQgJAAgIgIg");
	this.shape_5.setTransform(-251.8,-297.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E7F8FE").s().p("AiCBsQgpgvAAg9QAAgsAYgoQAXgnAogXQAogWAxAAQApAAAkAPQAkAPAjAgIgZAYQgbgbgggNQghgOgeAAQgkAAgiATQgjASgTAgQgTAgAAAjQAAAjAUAhQATAhAjATQAiATAnAAQAyAAAjgdQAigcAHgsIhnAAIAAggICLAAQAABLgsAsQgtAshJAAQhYAAg0g9g");
	this.shape_6.setTransform(-275.8,-297.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E7F8FE").s().p("AhXBYQgkglAAgzQAAgzAlglQAjgkAzAAQAcAAAYANQAXAMATAZIAAgsIAeAAIAADtIgeAAIAAgpQgUAYgYAMQgYALgbAAQgyAAgkglgAgthSQgVAMgNAYQgNAWAAAYQAAAZANAXQANAXAWANQAWANAXAAQAZAAAXgNQAWgNANgVQAMgWgBgbQAAgngbgcQgbgdgoAAQgXAAgXANg");
	this.shape_7.setTransform(-311.5,-292.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E7F8FE").s().p("Ag7B6IAAjtIAfAAIAAAjQAOgVAOgKQAQgKAQAAQAOAAAOAIIgQAaQgKgFgGAAQgPAAgNAOQgOAMgIAaQgFAVgBA8IAABRg");
	this.shape_8.setTransform(-331.6,-293.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E7F8FE").s().p("AhQChIAAlBICgAAIAAAfIh/AAIAABlIB/AAIAAAfIh/AAIAACeg");
	this.shape_9.setTransform(-349.6,-297);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E7F8FE").s().p("Ag4BsQgYgOgLgaQgMgZAAgxIAAhzIAeAAIAABvQABAnAEAQQAGAWATAMQASANAZABQAZAAASgNQASgMAHgVQAFgNgBgsIAAhvIAgAAIAAB2QAAAvgLAZQgMAZgXAOQgYAOgiAAQgiAAgWgOg");
	this.shape_10.setTransform(-375.5,-292.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E7F8FE").s().p("AhXBYQgkglAAgzQAAgzAkglQAkgkAzAAQAcAAAYANQAYAMARAZIAAgsIAfAAIAADtIgfAAIAAgpQgTAYgXAMQgZALgaAAQgzAAgkglgAgshSQgWAMgNAYQgNAWAAAYQAAAZANAXQANAXAWANQAWANAXAAQAZAAAWgNQAXgNAMgVQANgWAAgbQAAgngbgcQgcgdgoAAQgXAAgWANg");
	this.shape_11.setTransform(-405,-292.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E7F8FE").s().p("ABJB6IAAhyQAAgogEgNQgFgYgPgMQgPgMgZAAQgaAAgWASQgWATgHAbQgEASAAAuIAABXIgfAAIAAjtIAfAAIAAArQASgZAXgMQAWgMAYAAQAbAAAVAOQAVANAKAXQAKAXAAAwIAAB6g");
	this.shape_12.setTransform(-433.4,-293.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E7F8FE").s().p("AB4ChIgyhqIiKAAIgyBqIgkAAICZlBIAGAAICWFBgAg1AXIBsAAIg3hzg");
	this.shape_13.setTransform(-318.1,-297);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E7F8FE").s().p("AA/ChIhziWIgSAAIAACWIggAAIAAlBIBBAAQA0AAASAEQAdAHASAVQASAWAAAgQAAAbgMATQgMAVgXAIQgYAJgmABIByCWgAhGgTIA4AAQAeAAAQgFQAPgHAJgNQAJgOAAgRQAAgPgJgNQgIgOgPgGQgPgFgegBIg6AAg");
	this.shape_14.setTransform(-347.6,-297);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E7F8FE").s().p("Ah3B4QgygxAAhGQAAgtAXgnQAWgoAngWQAngXAuAAQBHAAAxAxQAyAxAABGQAABHgyAxQgxAxhHAAQhGAAgxgxgAhDh2QggATgSAfQgSAgAAAlQAAA6AoAnQAoAoA3AAQAlAAAggSQAggTARgfQASggAAgmQAAglgSgfQgRgfghgTQghgTgjAAQgjAAggATg");
	this.shape_15.setTransform(-381.7,-297.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E7F8FE").s().p("Ah0BxQgpgwABhBQAAhHAxgxQAygwBJAAQAtAAAkASQAlASAYAgIgaAUQgVgcgegOQgdgOgkAAQgkAAgiASQggATgSAfQgTAgABAlQAAA7AoAnQApAoA7AAQBEAAAug1IAaATQgZAfgkARQgkAQgtAAQhSAAgyg4g");
	this.shape_16.setTransform(-419.5,-297.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E7F8FE").s().p("AB4ChIjUjzIAADzIgiAAIAAlBIAHAAIDVD1IAAj1IAhAAIAAFBg");
	this.shape_17.setTransform(-454.4,-297);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E7F8FE").s().p("AB4ChIgzhqIiJAAIgyBqIgkAAICYlBIAGAAICXFBgAg1AXIBtAAIg4hzg");
	this.shape_18.setTransform(-487.7,-297);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E7F8FE").s().p("AiHChIAAlBIBEAAQBGAAAhAMQAuAQAbAoQAbApAAA3QAAAwgWAlQgVAlghARQgiASg6AAgAhnCCIAkAAQBDAAAYgIQAlgMAVgfQAVgeAAgtQAAgtgXghQgXghgogNQgcgJhGAAIgWAAg");
	this.shape_19.setTransform(-346,-297);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E7F8FE").s().p("AA/ChIhyiWIgSAAIAACWIghAAIAAlBIBAAAQA0AAAUAEQAcAHASAVQASAWAAAgQAAAbgMATQgNAVgXAIQgWAJgoABIBzCWgAhFgTIA3AAQAfAAAPgFQAPgHAJgNQAJgOAAgRQAAgPgJgNQgJgOgOgGQgOgFgggBIg4AAg");
	this.shape_20.setTransform(-376.4,-297);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E7F8FE").s().p("Ah3B4QgygxAAhGQAAgtAXgnQAWgoAngWQAngXAuAAQBHAAAxAxQAyAxAABGQAABHgyAxQgxAxhHAAQhGAAgxgxgAhDh2QggATgSAfQgSAgAAAlQAAA6AoAnQAoAoA3AAQAlAAAggSQAggTARgfQASggAAgmQAAglgSgfQgRgfghgTQghgTgjAAQgjAAggATg");
	this.shape_21.setTransform(-410.4,-297.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E7F8FE").s().p("AhgChIAAlBIBAAAQAlAAAVAJQAUAJAMATQAMATAAAXQAAAVgLASQgKASgUALQAZAJANAJQAOALAIARQAIAQAAATQAAAngdAbQgdAbgtAAgAg/CCIAnAAQAiAAARgIQAQgGAKgPQAKgPAAgRQAAgWgOgQQgOgQgZgFQgOgFgpAAIgSAAgAg/gZIASAAQAiAAANgGQAQgGAKgOQAJgOAAgQQAAgXgQgMQgPgNggAAIglAAg");
	this.shape_22.setTransform(-442.1,-297);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E7F8FE").s().p("AhfChIAAlBIBAAAQAkAAAUAJQAVAJAMATQAMATAAAXQAAAVgLASQgKASgUALQAZAJANAJQAOALAIARQAIAQgBATQAAAngcAbQgdAbgtAAgAhACCIApAAQAhAAARgIQAQgGAKgPQAKgPAAgRQAAgWgOgQQgOgQgZgFQgPgFgpAAIgSAAgAhAgZIATAAQAhAAAPgGQAPgGAKgOQAIgOABgQQAAgXgQgMQgPgNghAAIglAAg");
	this.shape_23.setTransform(-501.2,-297);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E7F8FE").s().p("AB3ChIjTjzIAADzIghAAIAAlBIAGAAIDVD1IAAj1IAhAAIAAFBg");
	this.shape_24.setTransform(-358.9,-297);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E7F8FE").s().p("AhbChIAAlBIC3AAIAAAfIiXAAIAABlICWAAIAAAfIiWAAIAAB/ICWAAIAAAfg");
	this.shape_25.setTransform(-386.5,-297);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E7F8FE").s().p("AA/ChIhyiWIgSAAIAACWIghAAIAAlBIBAAAQA0AAATAEQAdAHASAVQASAWAAAgQAAAbgMATQgMAVgYAIQgWAJgoABIBzCWgAhFgTIA3AAQAfAAAPgFQAQgHAIgNQAJgOAAgRQAAgPgJgNQgIgOgPgGQgPgFgfgBIg4AAg");
	this.shape_26.setTransform(-412.6,-297);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E7F8FE").s().p("Ah0BxQgogwAAhBQgBhHAygxQAygwBJAAQAtAAAkASQAlASAYAgIgaAUQgVgcgegOQgdgOgkAAQglAAghASQggATgTAfQgSAgAAAlQAAA7ApAnQApAoA7AAQBEAAAug1IAaATQgZAfgkARQgkAQgtAAQhSAAgyg4g");
	this.shape_27.setTransform(-478.7,-297.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E7F8FE").s().p("AgPChIAAkiIhIAAIAAgfICvAAIAAAfIhIAAIAAEig");
	this.shape_28.setTransform(-374.5,-297);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E7F8FE").s().p("AgPChIAAkiIhIAAIAAgfICvAAIAAAfIhIAAIAAEig");
	this.shape_29.setTransform(-393.7,-297);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E7F8FE").s().p("AgPChIAAlBIAfAAIAAFBg");
	this.shape_30.setTransform(-408.4,-297);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E7F8FE").s().p("AA/ChIhziWIgSAAIAACWIggAAIAAlBIBAAAQA1AAASAEQAdAHASAVQASAWAAAgQAAAbgMATQgMAVgYAIQgXAJgmABIByCWgAhGgTIA4AAQAfAAAPgFQAQgHAIgNQAJgOAAgRQAAgPgJgNQgJgOgOgGQgOgFgfgBIg6AAg");
	this.shape_31.setTransform(-426.3,-297);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E7F8FE").s().p("AhNChIAAlBIAgAAIAAEiIB7AAIAAAfg");
	this.shape_32.setTransform(-375.7,-297);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E7F8FE").s().p("Ag+CSQgcgSgKgfQgFgTAAgxIAAjBIAfAAIAADBQAAAiACAJQACAUAKANQAIAMATAJQARAJARAAQAQAAAOgIQAPgGAKgNQAKgMAFgQQADgNAAgmIAAjBIAhAAIAADBQAAArgJAbQgJAbgYATQgaAUglAAQgkAAgcgTg");
	this.shape_33.setTransform(-402.1,-296.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E7F8FE").s().p("AgxCaQgYgQgUglIAbgQQAdA1AlAAQAPAAAPgIQAOgHAHgNQAIgNAAgOQAAgQgLgQQgPgVgmgeQgpgdgKgOQgRgXAAgaQABgVAJgSQALgRASgKQATgKATAAQAWAAAVALQATAMAWAeIgZAUQgTgYgNgIQgMgIgQAAQgSAAgMAMQgMAMAAARQAAALAEAKQAEAKAMALQAGAHAiAaQAqAdAPAYQAQAYAAAYQAAAkgbAZQgaAagmAAQgcAAgYgPg");
	this.shape_34.setTransform(-429.2,-297.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E7F8FE").s().p("AhbChIAAlBIC3AAIAAAfIiXAAIAABlICWAAIAAAfIiWAAIAAB/ICWAAIAAAfg");
	this.shape_35.setTransform(-450.2,-297);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AhPBNQgdgiAAgrQAAgmAZggQAfgoA0AAQA1AAAhApQAXAdAAAqIi9AAQABAlAXAXQAWAYAiAAQAOAAAQgGQAPgFALgKQALgJAMgVIAXAMQgLAXgPANQgPAOgSAHQgTAHgXAAQgzAAgdgigAg0hAQgRAPgIAdICcAAQgFgWgLgNQgKgNgRgIQgSgIgSAAQgeAAgWAUg");
	this.shape_36.setTransform(151.5,-224.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AgjBnQgQgIgLgOIARgTQAVAXAXAAQAPAAALgKQAMgLAAgOQAAgMgHgJQgIgJgZgOQgdgNgKgOQgLgOAAgTQAAgYARgQQAQgQAYAAQAdAAAeAcIgSATQgWgWgUAAQgMAAgKAJQgJAJAAAMQAAAKAIAJQAIAKAXANQAeAOALAOQALAPAAATQAAAagTASQgSASgaAAQgSAAgRgIg");
	this.shape_37.setTransform(130.4,-224.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AhPBNQgdgiAAgrQAAgmAZggQAfgoA0AAQA1AAAhApQAXAdAAAqIi9AAQABAlAXAXQAWAYAiAAQAOAAAQgGQAPgFALgKQALgJAMgVIAXAMQgLAXgPANQgPAOgSAHQgTAHgXAAQgzAAgdgigAg0hAQgRAPgIAdICcAAQgFgWgLgNQgKgNgRgIQgSgIgSAAQgeAAgWAUg");
	this.shape_38.setTransform(109.9,-224.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("AhtCTIAAkgIAbAAIAAAnQARgWAUgLQAWgLAXAAQAuAAAgAgQAgAhAAAuQAAAtgfAhQggAgguAAQgXAAgWgKQgUgLgSgVIAABygAg8hfQgXAZAAAlQAAAYAKARQALATAUAMQAUALAWAAQAVAAATgLQAUgMALgUQALgTAAgWQAAgXgLgUQgMgUgSgMQgUgLgVAAQgjAAgZAZg");
	this.shape_39.setTransform(83.8,-221.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("AgjBnQgQgIgLgOIARgTQAVAXAXAAQAPAAALgKQAMgLAAgOQAAgMgHgJQgIgJgZgOQgdgNgKgOQgLgOAAgTQAAgYARgQQAQgQAYAAQAdAAAeAcIgSATQgWgWgUAAQgMAAgKAJQgJAJAAAMQAAAKAIAJQAIAKAXANQAeAOALAOQALAPAAATQAAAagTASQgSASgaAAQgSAAgRgIg");
	this.shape_40.setTransform(61.5,-224.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AhOBOQgfghgBgtQAAgqAeggQAhgkAvAAQAwAAAhAjQAeAhgBAqQAAAtgfAhQgfAhgwAAQgwAAgeghgAg5g6QgYAZAAAiQAAAXALAUQAKAUAUALQASAKAWAAQAWAAATgKQATgLAMgUQALgUAAgXQAAgigZgZQgZgZghAAQggAAgZAZg");
	this.shape_41.setTransform(30,-224.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333333").s().p("AgBBqIhijTIAeAAIBFCZIBGiZIAeAAIhhDTg");
	this.shape_42.setTransform(5.8,-224.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("AgMCVIAAjSIAZAAIAADSgAgPhuQgGgHAAgJQAAgJAGgHQAIgGAHgBQAIABAHAGQAHAHAAAJQAAAJgHAHQgHAGgIAAQgHAAgIgGg");
	this.shape_43.setTransform(-9.2,-229.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("AgPCRIAAi7IgmAAIAAgXIAmAAIAAhPIAZAAIAABPIArAAIAAAXIgrAAIAAC7g");
	this.shape_44.setTransform(-19.7,-228.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("ABBBsIAAhlQAAgjgDgMQgFgVgOgLQgNgLgWAAQgXAAgTARQgUARgGAYQgEAQAAAoIAABNIgbAAIAAjSIAbAAIAAAmQAQgWAUgLQAUgKAWgBQAYABASAMQASAMAJAUQAJAVAAAqIAABsg");
	this.shape_45.setTransform(-38.9,-225.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#333333").s().p("AhPBNQgdgiAAgrQAAgmAZggQAfgoA0AAQA1AAAhApQAXAdAAAqIi9AAQABAlAXAXQAWAYAiAAQAOAAAQgGQAPgFALgKQALgJAMgVIAXAMQgLAXgPANQgPAOgSAHQgTAHgXAAQgzAAgdgigAg0hAQgRAPgIAdICcAAQgFgWgLgNQgKgNgRgIQgSgIgSAAQgeAAgWAUg");
	this.shape_46.setTransform(-64.2,-224.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#333333").s().p("AgBBqIhijTIAeAAIBFCZIBGiZIAeAAIhhDTg");
	this.shape_47.setTransform(-88.2,-224.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#333333").s().p("AhPBNQgdgiAAgrQAAgmAZggQAfgoA0AAQA1AAAhApQAXAdAAAqIi9AAQABAlAXAXQAWAYAiAAQAOAAAQgGQAPgFALgKQALgJAMgVIAXAMQgLAXgPANQgPAOgSAHQgTAHgXAAQgzAAgdgigAg0hAQgRAPgIAdICcAAQgFgWgLgNQgKgNgRgIQgSgIgSAAQgeAAgWAUg");
	this.shape_48.setTransform(-112.3,-224.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#333333").s().p("Ag0BsIAAjSIAcAAIAAAfQAMgTAMgJQAOgIAPgBQALAAANAIIgOAXQgJgEgFAAQgOAAgLALQgMALgHAYQgFASAAA1IAABIg");
	this.shape_49.setTransform(-130,-225.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#333333").s().p("AhtCTIAAkgIAbAAIAAAnQAQgWAWgLQAUgLAZAAQAtAAAgAgQAgAhAAAuQAAAtgfAhQghAggtAAQgXAAgVgKQgWgLgRgVIAABygAg8hfQgYAZAAAlQAAAYALARQALATAUAMQAUALAWAAQAUAAAUgLQATgMAMgUQALgTAAgWQAAgXgLgUQgLgUgUgMQgTgLgVAAQgkAAgYAZg");
	this.shape_50.setTransform(-150.5,-221.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_18,p:{x:-487.7}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15,p:{x:-381.7}},{t:this.shape_14},{t:this.shape_13,p:{x:-318.1}}]},1).to({state:[{t:this.shape_23},{t:this.shape_18,p:{x:-472.4}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19,p:{x:-346}},{t:this.shape_15,p:{x:-310.5}}]},1).to({state:[{t:this.shape_27},{t:this.shape_13,p:{x:-443.7}},{t:this.shape_26},{t:this.shape_25,p:{x:-386.5}},{t:this.shape_24},{t:this.shape_18,p:{x:-325.6}}]},1).to({state:[{t:this.shape_19,p:{x:-456.7}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_18,p:{x:-348.3}}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_25,p:{x:-353.4}}]},1).to({state:[]},1).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},9).wait(1));

	// IP edificio
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#6B6B6B").s().p("AgYAwQgLgHgFgLQgFgLAAgVIAAgzIAOAAIAAAyQAAAQACAHQADAJAIAGQAIAGAKAAQALAAAIgGQAIgFADgJQACgGAAgSIAAgyIAOAAIAAA0QAAAUgFALQgFALgLAHQgKAGgPAAQgOAAgKgGg");
	this.shape_51.setTransform(-317.5,296.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#6B6B6B").s().p("AgkAnQgRgPAAgXQABgOAHgNQAIgNAOgIQANgHAPAAQAKAAAKADQAKAEAHAFQAGAFAFAHIgLAHQgNgSgYAAQgSAAgNAMQgNAMABARQgBALAHAKQAGAKAJAGQALAGALAAQAXgBAOgSIALAHQgHALgNAHQgNAGgQAAQgXAAgRgQg");
	this.shape_52.setTransform(-330,296.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#6B6B6B").s().p("AgjAnQgRgPgBgXQAAgOAJgNQAHgNANgIQAOgHAPAAQAKAAALADQAJAEAHAFQAHAFAEAHIgKAHQgPgSgXAAQgSAAgNAMQgMAMAAARQAAALAFAKQAHAKAJAGQALAGALAAQAXgBAPgSIAKAHQgHALgNAHQgNAGgQAAQgXAAgQgQg");
	this.shape_53.setTransform(-342.9,296.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#6B6B6B").s().p("AgYAwQgLgHgFgLQgFgLAAgVIAAgzIAOAAIAAAyQAAAQACAHQADAJAIAGQAIAGAKAAQALAAAIgGQAIgFADgJQACgGAAgSIAAgyIAOAAIAAA0QAAAUgFALQgFALgLAHQgKAGgPAAQgOAAgKgGg");
	this.shape_54.setTransform(-355.4,296.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#6B6B6B").s().p("AgyAyQgSgWAAgcQAAgfAWgVQAWgWAfABQAUgBAQAJQAQAHAKAOIgLAJQgJgMgNgHQgNgFgQgBQgPABgPAHQgOAJgIAOQgIANAAAQQAAAaASARQASASAZAAQAeAAAUgYIALAJQgKAOgQAHQgQAIgUAAQgkAAgVgZg");
	this.shape_55.setTransform(-369.5,294.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#6B6B6B").s().p("AgmAnQgQgRAAgWQAAgWAQgQQAQgQAWAAQAMAAAKAFQALAGAIALIAAgTIAOAAIAABoIgOAAIAAgSQgJAJgKAGQgKAFgMAAQgWAAgQgQgAgTgjQgKAFgFAKQgGAKAAAKQAAALAGAKQAFAKAKAGQAKAGAJAAQALAAALgGQAJgGAGgJQAFgKAAgMQAAgQgMgNQgMgMgRAAQgKAAgKAGg");
	this.shape_56.setTransform(-390.2,296.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#6B6B6B").s().p("AgHBIIAAhcIgTAAIAAgMIATAAIAAgnIAMAAIAAAnIAVAAIAAAMIgVAAIAABcg");
	this.shape_57.setTransform(-399.9,294.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#6B6B6B").s().p("AgZA2IAAhoIAOAAIAAAPQAGgJAFgEQAHgFAHAAQAGAAAGAEIgHALQgEgCgDAAQgHAAgFAGQgFAGgEALQgCAJAAAaIAAAkg");
	this.shape_58.setTransform(-405.8,296.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#6B6B6B").s().p("AgnAmQgOgQAAgWQAAgTAMgPQAQgUAZAAQAaAAAQAVQAMAOAAAUIhdAAQAAASAMAMQALAMAQAAQAHAAAHgDQAIgDAFgFQAGgEAGgKIAMAFQgGAMgIAGQgHAHgJAEQgJADgMAAQgYAAgPgRgAgagfQgIAHgEAPIBNAAQgDgLgFgGQgFgHgJgEQgIgEgJAAQgOAAgMAKg");
	this.shape_59.setTransform(-415.9,296.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#6B6B6B").s().p("AgVBEQgLgFgIgLIAAAUIgOAAIAAiRIAOAAIAAA7QAIgKALgGQALgFAKAAQAXAAAQAQQAQARAAAVQAAAWgRARQgQAQgWAAQgLAAgKgGgAgUgRQgKAGgGAJQgFAIAAAMQAAATAMALQAMANARAAQAKAAAKgFQAJgGAGgKQAGgKAAgLQAAgMgGgIQgGgKgJgGQgKgFgKgBQgKABgKAFg");
	this.shape_60.setTransform(-428.9,294.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#6B6B6B").s().p("AgmAmQgQgQAAgWQAAgUAPgQQAQgSAXAAQAYAAAQASQAPAQAAAUQAAAWgQAQQgPARgYAAQgXAAgPgRgAgcgcQgMANAAAPQAAALAGAKQAFALAKAFQAJAGAKAAQALAAAJgGQAKgFAFgLQAGgKAAgLQAAgPgMgNQgNgNgQAAQgPAAgNANg");
	this.shape_61.setTransform(-442.5,296.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#6B6B6B").s().p("AAcBHIgyhCIgIAAIAABCIgOAAIAAiNIAcAAQAWAAAJACQAMADAIAKQAIAJAAAOQAAALgFAKQgGAIgKADQgKAEgQABIAxBCgAgegIIAZAAQAMABAHgDQAHgDAEgGQAEgFAAgIQAAgIgEgFQgEgGgGgDQgHgCgNAAIgZAAg");
	this.shape_62.setTransform(-454.7,294.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#6B6B6B").s().p("AgmAnQgPgRAAgWQAAgWAPgQQARgQAVAAQAMAAAKAFQALAGAIALIAAgTIAOAAIAABoIgOAAIAAgSQgJAJgKAGQgKAFgMAAQgWAAgQgQgAgTgjQgJAFgGAKQgGAKAAAKQAAALAGAKQAGAKAJAGQAKAGAJAAQALAAAKgGQAKgGAGgJQAFgKAAgMQAAgQgMgNQgMgMgRAAQgKAAgKAGg");
	this.shape_63.setTransform(-473.7,296.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#6B6B6B").s().p("AgZA2IAAhoIAOAAIAAAPQAGgJAFgEQAHgFAHAAQAGAAAGAEIgHALQgEgCgDAAQgHAAgFAGQgFAGgEALQgCAJAAAaIAAAkg");
	this.shape_64.setTransform(-482.5,296.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#6B6B6B").s().p("AgmAnQgQgRAAgWQAAgWAQgQQAQgQAWAAQAMAAAKAFQALAGAIALIAAgTIAOAAIAABoIgOAAIAAgSQgJAJgKAGQgKAFgMAAQgWAAgQgQgAgTgjQgKAFgFAKQgGAKAAAKQAAALAGAKQAGAKAJAGQAKAGAJAAQALAAALgGQAJgGAGgJQAFgKAAgMQAAgQgMgNQgMgMgRAAQgKAAgKAGg");
	this.shape_65.setTransform(-493.2,296.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#6B6B6B").s().p("AgmAmQgQgQAAgWQAAgUAPgQQAQgSAXAAQAYAAAQASQAPAQAAAUQAAAWgQAQQgPARgYAAQgXAAgPgRgAgcgcQgMANAAAPQAAALAGAKQAFALAKAFQAJAGAKAAQALAAAJgGQAKgFAFgLQAGgKAAgLQAAgPgMgNQgNgNgQAAQgPAAgNANg");
	this.shape_66.setTransform(-506.3,296.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#6B6B6B").s().p("AgFBKIAAhoIALAAIAABogAgGg2QgEgDAAgFQAAgFAEgDQADgDADAAQAEAAADADQAEADAAAFQAAAFgEADQgDADgEAAQgDAAgDgDg");
	this.shape_67.setTransform(-514.8,294.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#6B6B6B").s().p("Ag5AwQgSgWAAgaQAAgTAKgSQALgRARgKQASgJAVAAQASAAAQAGQAQAHAPAOIgLAKQgMgLgOgHQgOgFgOgBQgPAAgPAJQgPAIgJAOQgIAOAAAPQAAAPAJAPQAIAPAQAHQAPAJAQAAQAWAAAQgMQAPgNADgUIguAAIAAgNIA+AAQgBAggTAUQgUATggABQgmAAgXgbg");
	this.shape_68.setTransform(-525.4,294.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#6B6B6B").s().p("AgFBKIAAhoIALAAIAABogAgGg2QgEgDAAgFQAAgFAEgDQADgDADAAQAEAAADADQAEADAAAFQAAAFgEADQgDADgEAAQgDAAgDgDg");
	this.shape_69.setTransform(-369.4,267.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#6B6B6B").s().p("AAgA2IAAgzQAAgQgBgGQgDgLgGgFQgHgFgLAAQgKAAgKAIQgKAIgDAMQgCAIAAATIAAAnIgOAAIAAhoIAOAAIAAATQAIgLAKgFQAKgGAKAAQAMAAAJAGQAJAGAEAKQAFALAAAUIAAA2g");
	this.shape_70.setTransform(-377.4,269.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#6B6B6B").s().p("AgFBKIAAhoIALAAIAABogAgGg2QgDgDgBgFQABgFADgDQADgDADAAQAEAAAEADQADADAAAFQAAAFgDADQgEADgEAAQgDAAgDgDg");
	this.shape_71.setTransform(-385.5,267.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#6B6B6B").s().p("AgZA2IAAhoIAOAAIAAAPQAGgJAFgEQAHgFAHAAQAGAAAGAEIgHALQgEgCgDAAQgHAAgFAGQgFAGgEALQgCAJAAAaIAAAkg");
	this.shape_72.setTransform(-389.8,269.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#6B6B6B").s().p("AgHBIIAAhcIgTAAIAAgMIATAAIAAgnIAMAAIAAAnIAVAAIAAAMIgVAAIAABcg");
	this.shape_73.setTransform(-396.7,268);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#6B6B6B").s().p("AgGBJIAAiRIANAAIAACRg");
	this.shape_74.setTransform(-402.2,267.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#6B6B6B").s().p("AgYAwQgLgHgFgLQgFgLAAgVIAAgzIAOAAIAAAyQAAAQACAHQADAJAIAGQAIAGAKAAQALAAAIgGQAIgFADgJQACgGAAgSIAAgyIAOAAIAAA0QAAAUgFALQgFALgLAHQgKAGgPAAQgOAAgKgGg");
	this.shape_75.setTransform(-410.4,270.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#6B6B6B").s().p("AgpBHIAAiNIAcAAQAPAAAJAEQAJAEAFAJQAGAIAAAKQAAAJgFAJQgFAHgJAFQAMAEAGADQAGAFADAIQADAGAAAJQAAARgMAMQgNAMgTAAgAgbA5IARAAQAOAAAHgDQAIgDAEgGQAEgHAAgIQAAgJgGgIQgGgGgLgDQgFgCgSAAIgIAAgAgbgKIAIAAQAPAAAFgDQAHgDAEgGQAEgGAAgHQAAgKgHgGQgHgFgNAAIgQAAg");
	this.shape_76.setTransform(-421.7,268.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#6B6B6B").s().p("AgmAnQgQgRAAgWQAAgUAPgRQAQgRAXAAQAYAAAQARQAPARAAAUQAAAWgQARQgPAQgYAAQgXAAgPgQgAgcgcQgMANAAAPQAAALAGALQAFAKAKAFQAJAGAKgBQALABAJgGQAKgFAFgKQAGgLAAgLQAAgPgMgNQgNgMgQAAQgPAAgNAMg");
	this.shape_77.setTransform(-439.8,270);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#6B6B6B").s().p("AgjAoQgRgRAAgWQgBgOAJgNQAHgNANgIQAOgHAPAAQALAAAKADQAJADAHAGQAHAEAFAJIgLAHQgOgTgZAAQgRAAgMAMQgOAMAAARQABALAFAKQAHALAKAFQAKAGAKgBQAYAAAPgSIALAHQgIAMgNAGQgNAGgQAAQgXAAgQgPg");
	this.shape_78.setTransform(-452.8,270);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#6B6B6B").s().p("AgQAzQgJgEgFgHIAIgJQALAMALgBQAHABAGgGQAFgFAAgIQAAgFgDgFQgEgEgMgHQgOgFgFgIQgFgHAAgJQAAgMAIgIQAIgIALAAQAOAAAPAOIgJAKQgLgLgKAAQgFgBgEAFQgFAFAAAFQAAAGAEAEQAEAFAKAHQAPAFAGAHQAFAIAAAJQAAANgJAJQgJAJgNAAQgIAAgIgEg");
	this.shape_79.setTransform(-463.3,270);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#6B6B6B").s().p("AgnAnQgOgRAAgWQAAgTAMgPQAQgUAZAAQAaAAAQAVQAMAOAAAUIhdAAQAAASAMAMQALALAQAAQAHABAHgDQAIgDAFgFQAGgEAGgLIAMAGQgGAMgIAGQgHAHgJADQgJAEgMAAQgYAAgPgQgAgagfQgIAIgEAOIBNAAQgDgLgFgHQgFgGgJgEQgIgEgJAAQgOAAgMAKg");
	this.shape_80.setTransform(-473.4,270);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#6B6B6B").s().p("AgkAoQgQgRAAgWQAAgOAHgNQAIgNAOgIQANgHAPAAQAKAAAKADQAKADAHAGQAGAEAGAJIgMAHQgOgTgYAAQgRAAgMAMQgNAMgBARQAAALAHAKQAFALALAFQAKAGAKgBQAYAAAOgSIAMAHQgIAMgNAGQgNAGgQAAQgXAAgRgPg");
	this.shape_81.setTransform(-486.4,270);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#6B6B6B").s().p("AAgA2IAAgzQAAgQgBgGQgDgLgGgFQgHgFgLAAQgKAAgKAIQgKAIgDAMQgCAIAAATIAAAnIgOAAIAAhoIAOAAIAAATQAIgLAKgFQAKgGAKAAQAMAAAJAGQAJAGAEAKQAFALAAAUIAAA2g");
	this.shape_82.setTransform(-498.8,269.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#6B6B6B").s().p("AglAnQgQgRgBgWQABgVAQgRQAPgQAWAAQAMAAALAGQAKAFAIALIAAgTIANAAIAABnIgNAAIAAgSQgIAKgLAGQgLAFgLAAQgWAAgPgQgAgTgkQgJAGgGAKQgGALAAAJQAAALAGAKQAFALALAFQAJAGAJgBQALABALgGQAJgFAFgKQAGgKAAgMQAAgQgMgNQgMgMgSAAQgJAAgKAFg");
	this.shape_83.setTransform(-512,270);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#6B6B6B").s().p("AgZA2IAAhoIAOAAIAAAPQAGgJAFgEQAHgFAHAAQAGAAAGAEIgHALQgEgCgDAAQgHAAgFAGQgFAGgEALQgCAJAAAaIAAAkg");
	this.shape_84.setTransform(-520.9,269.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#6B6B6B").s().p("AgiBHIAAiNIBFAAIAAAOIg3AAIAAAsIA3AAIAAANIg3AAIAABGg");
	this.shape_85.setTransform(-528.9,268.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#6B6B6B").s().p("ABHB3IhHhlIhIBlIgkAAIBah8IhShxIAlAAIA/BYIA+hYIAlAAIhSBxIBcB8g");
	this.shape_86.setTransform(11.9,-292.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#6B6B6B").s().p("AgSATQgHgIgBgLQABgKAHgIQAJgIAJAAQALAAAIAIQAHAIAAAKQAAALgHAIQgIAIgLAAQgJAAgJgIg");
	this.shape_87.setTransform(-4.5,-283);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#6B6B6B").s().p("AAJChIAAkiIgxAAIATgfIA+AAIAAFBg");
	this.shape_88.setTransform(-25.7,-297);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#6B6B6B").s().p("Ag4CYQgZgSgOgjQgOgkAAg/QAAg+AOgjQANgjAagSQAZgSAfAAQAdAAAZASQAaASAPAkQAPAlAAA7QAAA9gPAkQgPAkgZASQgaASgdAAQgfAAgZgRgAgoh7QgTAOgKAcQgJAcAAA1QAAA3AJAcQAKAcATAPQATAOAVAAQAUAAATgOQATgOAJgdQAMgiAAgxQAAgvgKgfQgLgfgTgOQgTgPgUAAQgVAAgTAPg");
	this.shape_89.setTransform(-48.8,-297.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#6B6B6B").s().p("AAIChIAAkiIgwAAIATgfIA+AAIAAFBg");
	this.shape_90.setTransform(-75.6,-297);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#6B6B6B").s().p("AgSATQgHgIgBgLQABgKAHgIQAJgIAJAAQALAAAIAIQAHAIAAAKQAAALgHAIQgIAIgLAAQgJAAgJgIg");
	this.shape_91.setTransform(-91.8,-283);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#6B6B6B").s().p("AhQCLQgcgfAAglQAAgbAOgVQAPgWAigPQgXgMgMgTQgMgSAAgVQAAgVAMgUQANgUAWgLQAWgMAYAAQAZAAAWAMQAVALANAUQAMAUAAAWQAAAWgMARQgLARgXANQAgAOAPAVQAOAVAAAbQAAAlgZAcQgdAjg3AAQg1AAgbgegAg1AWQgXAVAAAdQAAASALAQQAJAQASAIQAQAJAWAAQAjAAAUgVQAWgVAAgcQAAgbgXgVQgWgVgfAAQgfAAgXAWgAgrh5QgRAQAAAVQAAAWATASQASARAYAAQAQAAAOgIQAOgIAIgNQAJgOAAgOQgBgUgQgQQgPgRgeAAQgZAAgSAQg");
	this.shape_92.setTransform(-111.1,-297.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#6B6B6B").s().p("AgyCdQgWgNgNgYQgNgXAAgaQAAgUAIgWQAIgWAVgdIBgiSIAbARIhWCFQARgGAOAAQAmAAAbAaQAbAbAAApQAAAcgNAWQgNAXgYANQgYANgZAAQgbAAgXgMgAgvAWQgUAUAAAcQAAAcAUAUQAUAUAbAAQAcAAATgUQAVgUgBgcQABgcgVgUQgUgUgbAAQgbAAgUAUg");
	this.shape_93.setTransform(-135.5,-297.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#6B6B6B").s().p("AAIChIAAkiIgwAAIATgfIA+AAIAAFBg");
	this.shape_94.setTransform(-162.9,-297);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#6B6B6B").s().p("AgSATQgHgIgBgLQABgKAHgIQAJgIAJAAQALAAAIAIQAHAIAAAKQAAALgHAIQgIAIgLAAQgJAAgJgIg");
	this.shape_95.setTransform(-179.1,-283);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#6B6B6B").s().p("AhsClIB5iFQAmgnALgTQALgTAAgWQAAgbgUgUQgUgUgeAAQgdAAgUAVQgVAVgDAlIgfAAQACgwAegeQAfgfArAAQAtAAAbAdQAcAcAAAoQAAAbgNAYQgOAWglApIhPBXICTAAIAAAfg");
	this.shape_96.setTransform(-198.6,-297.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#6B6B6B").s().p("Ag8CYIBViEQgSAGgMAAQgnAAgbgaQgbgcAAgpQAAgbANgXQANgWAYgOQAXgNAaAAQAaAAAXANQAXANANAXQANAXAAAbQAAAUgIAWQgIAWgVAcIhfCSgAgvh0QgTATAAAcQAAAdATAUQAVATAaAAQAcAAAUgTQAUgUgBgdQABgcgUgTQgUgUgcAAQgaAAgVAUg");
	this.shape_97.setTransform(-223.7,-297.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#6B6B6B").s().p("AAIChIAAkiIgwAAIATgfIA+AAIAAFBg");
	this.shape_98.setTransform(-250.2,-297);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#6B6B6B").s().p("AhsClIB5iFQAmgnALgTQALgTAAgWQAAgbgUgUQgUgUgeAAQgdAAgUAVQgVAVgDAlIgfAAQACgwAegeQAfgfArAAQAtAAAbAdQAcAcAAAoQAAAbgNAYQgOAWglApIhPBXICTAAIAAAfg");
	this.shape_99.setTransform(-198.6,-297.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#6B6B6B").s().p("AhGCRQgcgYgJguIAgAAQAJAfAPAOQAUASAfAAQAhAAAWgVQAUgVABgdQAAgSgLgRQgLgQgRgJQgTgHgjgBIAAgeQAUAAATgHQASgIAIgMQAIgNAAgOQAAgVgQgPQgRgQgYAAQgVAAgPAMQgPAMgLAcIghAAQAJgoAZgWQAagVAjAAQAXAAAWAMQAWALAMAUQAMATgBAVQAAAqgpAZQAYAJAOAQQAWAagBAgQAAAbgOAZQgPAZgZAOQgYANgeAAQgqAAgbgYg");
	this.shape_100.setTransform(-23.9,-297.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#6B6B6B").s().p("AApClIAAhLIiZAAICyj+IAHAAIAADfIAoAAIAAAfIgoAAIAABLgAg1A7IBeAAIAAiFg");
	this.shape_101.setTransform(-23.8,-297.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#6B6B6B").s().p("AhICNQgbgYgFgmIAhAAQAEATAJALQAJALAPAIQAOAHARAAQAdAAAXgYQAXgZAAgjQAAghgUgSQgVgVghAAQgcAAgpARIAeigICKAAIAAAfIhxAAIgQBYQAVgHAPAAQAsABAdAdQAcAcAAAuQAAAggOAaQgPAbgZAOQgZAOgfAAQgoAAgbgYg");
	this.shape_102.setTransform(-23.9,-296.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51}]}).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96,p:{x:-198.6}},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_99},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_96,p:{x:-24}},{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96,p:{x:-198.6}},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_100},{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96,p:{x:-198.6}},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_101},{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96,p:{x:-198.6}},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_102},{t:this.shape_87},{t:this.shape_86}]},1).to({state:[]},1).wait(10));

	// utenti label
	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#816B87").s().p("AgRBuQgHgIAAgKQAAgLAHgHQAIgIAJAAQAKAAAHAIQAIAHAAALQAAAKgIAIQgHAHgKAAQgJAAgIgHgAgRhIQgHgIAAgKQAAgLAHgHQAIgIAJAAQAKAAAHAIQAIAHAAALQAAAKgIAIQgHAHgKAAQgJAAgIgHg");
	this.shape_103.setTransform(376.7,-291.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#816B87").s().p("AgNCdIAAjdIAbAAIAADdgAgPh0QgHgHAAgJQAAgKAHgHQAHgHAIAAQAJAAAHAHQAHAHAAAKQAAAJgHAHQgHAIgJAAQgIAAgHgIg");
	this.shape_104.setTransform(366.2,-296);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#816B87").s().p("AgQCYIAAjEIgnAAIAAgZIAnAAIAAhTIAaAAIAABTIAuAAIAAAZIguAAIAADEg");
	this.shape_105.setTransform(355.2,-295.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#816B87").s().p("ABEByIAAhqQAAglgDgNQgFgWgOgLQgOgMgXAAQgYAAgVASQgUARgHAaQgEAQAAAqIAABSIgdAAIAAjdIAdAAIAAAoQARgXAVgMQAVgLAXAAQAZAAATANQATAMAKAWQAJAVAAAtIAAByg");
	this.shape_106.setTransform(335,-291.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#816B87").s().p("AhTBRQgfgkAAgtQAAgoAaghQAhgrA3AAQA4AAAiAsQAYAeABAsIjHAAQABAnAYAZQAYAZAjAAQAPAAAQgGQAQgGAMgKQALgKANgWIAYANQgMAXgPAPQgQAOgTAIQgUAHgYAAQg1AAgfgkgAg3hDQgRAPgJAfICkAAQgGgXgLgOQgLgNgSgJQgSgIgTAAQggAAgXAVg");
	this.shape_107.setTransform(308.4,-291.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#816B87").s().p("AgQCYIAAjEIgnAAIAAgZIAnAAIAAhTIAaAAIAABTIAuAAIAAAZIguAAIAADEg");
	this.shape_108.setTransform(288,-295.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#816B87").s().p("Ag1BlQgWgNgKgYQgLgYAAgtIAAhsIAdAAIAABoQAAAkADAPQAHAUARAMQASAMAWAAQAXAAARgLQARgMAGgTQAFgNAAgoIAAhoIAdAAIAABuQAAAsgLAXQgLAYgVANQgWANggAAQgfAAgWgNg");
	this.shape_109.setTransform(267.6,-291.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103}]},1).to({state:[]},5).wait(10));

	// num_utenti
	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#A492A9").s().p("Ag0CNQgXgQgNghQgNghAAg7QAAg6ANghQAMggAYgRQAXgRAdAAQAbAAAYASQAYAQAOAiQANAiAAA3QAAA4gNAiQgOAigYARQgYARgbAAQgdAAgXgRgAglhzQgRANgKAbQgJAaAAAxQAAAzAJAaQAJAaASAOQASAOATAAQATAAARgOQASgMAJgbQALggAAguQAAgsgKgdQgKgdgSgNQgRgOgTABQgTgBgSAOg");
	this.shape_110.setTransform(468.6,-295.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#A492A9").s().p("AhDCDQgZgWgFgkIAfAAQADASAJALQAIAKAOAHQAOAHAPAAQAbAAAWgXQAVgWAAgiQAAgfgTgQQgTgUgfAAQgaAAgmAQIAciVICAAAIAAAdIhpAAIgPBSQAUgGANAAQAqAAAaAbQAbAaAAArQAAAegOAZQgNAZgYANQgXANgdAAQglAAgZgXg");
	this.shape_111.setTransform(445.2,-294.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#A492A9").s().p("Ag0CNQgXgQgNghQgNghAAg7QAAg6ANghQAMggAYgRQAXgRAdAAQAbAAAYASQAYAQAOAiQANAiAAA3QAAA4gNAiQgOAigYARQgYARgbAAQgdAAgXgRgAglhzQgRANgKAbQgJAaAAAxQAAAzAJAaQAJAaASAOQASAOATAAQATAAARgOQASgMAJgbQALggAAguQAAgsgKgdQgKgdgSgNQgRgOgTABQgTgBgSAOg");
	this.shape_112.setTransform(445.3,-295.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#A492A9").s().p("AAICWIAAkOIgtAAIASgdIA5AAIAAErg");
	this.shape_113.setTransform(420.2,-295.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#A492A9").s().p("AguCSQgWgMgMgVQgMgXAAgYQABgTAHgUQAHgUAUgbIBZiJIAZARIhPB7QAQgGAMABQAkAAAaAYQAZAZAAAmQAAAagNAWQgMAUgWANQgWAMgYAAQgZAAgVgMgAgsAVQgSASgBAbQABAZASAUQATASAZAAQAZAAATgSQASgUAAgZQAAgbgSgSQgTgTgZAAQgZAAgTATg");
	this.shape_114.setTransform(445.8,-295.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#A492A9").s().p("AhlCaIByh8QAigkALgSQALgSAAgUQgBgagSgSQgUgTgbAAQgbAAgTAUQgTATgDAjIgdAAQABgtAdgcQAdgdAoAAQAqAAAZAbQAaAbAAAkQAAAagMAWQgNAVgjAmIhKBRICKAAIAAAdg");
	this.shape_115.setTransform(421.9,-295.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_113},{t:this.shape_112},{t:this.shape_110}]},1).to({state:[{t:this.shape_115},{t:this.shape_114},{t:this.shape_110}]},1).to({state:[{t:this.shape_113},{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_111},{t:this.shape_110}]},1).to({state:[]},1).wait(10));

	// nomi zone
	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#6B6B6B").s().p("ABLA+IAAhBQAAgTgDgIQgDgHgHgFQgGgDgKAAQgMgBgJAHQgJAGgEAMQgFALAAAYIAAAwIgNAAIAAg+QAAgVgEgIQgCgHgHgFQgHgFgJABQgLgBgKAHQgJAGgEALQgFALAAAVIAAA0IgQAAIAAh4IAQAAIAAAVQAIgLAJgGQALgHAOAAQAJAAAIADQAHAEAFAGQADAFAEALQAJgOALgHQAMgIANAAQANAAAKAHQAJAGAFALQAFAMAAAWIAABBg");
	this.shape_116.setTransform(181.4,-1.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#6B6B6B").s().p("AAbBUIg8g3IAAA3IgPAAIAAinIAPAAIAABfIA3gwIAXAAIhBA5IBFA/g");
	this.shape_117.setTransform(165.7,-3.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#6B6B6B").s().p("AgwBNIBKiQIhNAAIAAgQIBnAAIhWCng");
	this.shape_118.setTransform(153.2,-2.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#6B6B6B").s().p("ABLA+IAAhAQAAgUgDgHQgDgIgHgFQgGgDgKAAQgMAAgJAGQgJAGgEAMQgFALAAAZIAAAvIgNAAIAAg+QAAgVgEgHQgCgIgHgFQgHgFgJABQgLAAgKAGQgJAHgEAKQgFAMAAAUIAAA0IgQAAIAAh4IAQAAIAAAVQAIgLAJgGQALgHAOAAQAJAAAIADQAHAEAFAGQADAGAEAKQAJgOALgHQAMgIANAAQANAAAKAHQAJAGAFALQAFALAAAYIAABAg");
	this.shape_119.setTransform(181.4,-94.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#6B6B6B").s().p("AAbBUIg8g3IAAA3IgPAAIAAinIAPAAIAABfIA3gwIAXAAIhBA5IBFA/g");
	this.shape_120.setTransform(165.7,-97.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#6B6B6B").s().p("AgwBNIBKiQIhNAAIAAgQIBnAAIhWCng");
	this.shape_121.setTransform(153.2,-96.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#6B6B6B").s().p("ABKA+IAAhBQAAgTgCgIQgDgHgHgFQgHgDgJAAQgMgBgIAHQgKAGgFAMQgEALAAAZIAAAvIgOAAIAAg+QAAgVgCgHQgDgIgHgFQgGgFgKABQgLgBgJAHQgKAHgFAKQgEALAAAVIAAA0IgPAAIAAh4IAPAAIAAAVQAIgLAJgGQAMgHANAAQAJAAAHADQAJAEAEAGQAEAFADALQAIgOAMgHQAMgIANAAQANAAAKAHQAJAGAFALQAEAMABAWIAABBg");
	this.shape_122.setTransform(-4.6,-53.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#6B6B6B").s().p("AgcBNQgMgJgIgSQgGgSAAggQAAgfAGgSQAIgRAMgKQANgJAPAAQAPAAANAJQAMAJAIATQAHASAAAeQABAegIATQgHASgNAKQgNAJgPAAQgPAAgNgJgAgUg+QgJAIgFANQgFAPAAAaQAAAcAFAOQAFAPAJAHQAKAIAKAAQAKAAAJgIQAKgHAFgPQAGgRAAgZQAAgXgFgQQgFgPgLgIQgJgHgKAAQgKAAgKAHg");
	this.shape_123.setTransform(-21.8,-55.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#6B6B6B").s().p("AgcBNQgNgJgGgSQgIgSABggQgBgfAIgSQAGgRANgKQANgJAPAAQAOAAANAJQANAJAIATQAIASgBAeQAAAegGATQgIASgOAKQgNAJgOAAQgPAAgNgJgAgTg+QgKAIgFANQgFAPAAAaQAAAcAFAOQAFAPAKAHQAKAIAJAAQAKAAAJgIQAKgHAFgPQAGgRAAgZQAAgXgFgQQgGgPgKgIQgJgHgKAAQgKAAgJAHg");
	this.shape_124.setTransform(-34.5,-55.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#6B6B6B").s().p("AAEBSIAAiTIgYAAIAKgQIAfAAIAACjg");
	this.shape_125.setTransform(-48.2,-55.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#6B6B6B").s().p("ABKA+IAAhAQAAgUgDgHQgCgIgHgFQgHgDgJAAQgLAAgJAGQgKAGgFAMQgEALAAAZIAAAvIgOAAIAAg+QAAgVgCgHQgDgIgHgFQgGgFgKABQgLAAgJAGQgKAHgFAKQgEAMAAAUIAAA0IgPAAIAAh4IAPAAIAAAVQAIgLAJgGQAMgHANAAQAJAAAHADQAIAEAGAGQACAGAFAKQAHgOAMgHQALgIAOAAQANAAAJAHQAKAGAFALQAEALAAAYIAABAg");
	this.shape_126.setTransform(-161.5,-94.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#6B6B6B").s().p("AgcBNQgMgJgIgSQgGgSAAggQAAgfAGgSQAIgRAMgKQANgJAPAAQAOAAANAJQANAJAIATQAHASAAAeQABAegIATQgHASgOAKQgNAJgOAAQgPAAgNgJgAgTg+QgKAIgFANQgFAPAAAaQAAAcAFAOQAFAPAKAHQAKAIAJAAQAKAAAJgIQAKgHAFgOQAGgSAAgZQAAgXgFgQQgFgPgLgIQgJgHgKAAQgKAAgJAHg");
	this.shape_127.setTransform(-178.7,-96.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#6B6B6B").s().p("AgcBNQgMgJgHgSQgIgSAAggQAAgfAIgSQAHgRAMgKQANgJAPAAQAOAAANAJQAOAJAHATQAIASgBAeQAAAegGATQgIASgOAKQgNAJgOAAQgPAAgNgJgAgTg+QgKAIgFANQgFAPAAAaQAAAcAFAOQAFAPAKAHQAKAIAJAAQAKAAAJgIQAKgHAFgOQAGgSAAgZQAAgXgFgQQgGgPgKgIQgJgHgKAAQgKAAgJAHg");
	this.shape_128.setTransform(-191.5,-96.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#6B6B6B").s().p("AAEBSIAAiTIgYAAIAKgQIAfAAIAACjg");
	this.shape_129.setTransform(-205.2,-96.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#6B6B6B").s().p("ABKA+IAAhAQAAgUgDgHQgCgIgHgFQgHgDgJAAQgLAAgJAGQgKAGgFAMQgEALAAAZIAAAvIgOAAIAAg+QAAgVgCgHQgDgIgHgFQgGgFgKABQgLAAgJAGQgKAHgFAKQgEAMAAAUIAAA0IgPAAIAAh4IAPAAIAAAVQAIgLAJgGQAMgHANAAQAJAAAHADQAIAEAGAGQACAGAFAKQAHgOAMgHQALgIAOAAQANAAAJAHQAKAGAFALQAEAMAAAXIAABAg");
	this.shape_130.setTransform(-161.5,9.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#6B6B6B").s().p("AgcBNQgMgJgIgSQgGgSAAggQAAgfAGgSQAIgRAMgKQANgJAPAAQAOAAANAJQANAJAIATQAHASAAAeQABAegIATQgHASgOAKQgNAJgOAAQgPAAgNgJgAgTg+QgKAIgFANQgFAPAAAaQAAAcAFAOQAFAPAKAHQAKAIAJAAQAKAAAJgIQAKgHAFgOQAGgSAAgZQAAgXgFgQQgFgPgLgIQgJgHgKAAQgKAAgJAHg");
	this.shape_131.setTransform(-178.7,7.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#6B6B6B").s().p("AgcBNQgMgJgHgSQgIgSAAggQAAgfAIgSQAHgRAMgKQANgJAPAAQAOAAANAJQAOAJAHATQAIASgBAeQAAAegGATQgIASgOAKQgNAJgOAAQgPAAgNgJgAgTg+QgKAIgFANQgFAPAAAaQAAAcAFAOQAFAPAKAHQAKAIAJAAQAKAAAJgIQAKgHAFgOQAGgSAAgZQAAgXgFgQQgGgPgKgIQgJgHgKAAQgKAAgJAHg");
	this.shape_132.setTransform(-191.5,7.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#6B6B6B").s().p("AAEBSIAAiTIgYAAIAKgQIAfAAIAACjg");
	this.shape_133.setTransform(-205.2,7.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#6B6B6B").s().p("ABKA+IAAhAQAAgUgDgHQgCgIgHgFQgHgDgJAAQgLAAgJAGQgKAHgFALQgEALAAAZIAAAvIgOAAIAAg+QAAgVgCgHQgDgIgHgFQgGgEgKAAQgLAAgJAGQgKAHgFALQgEAKAAAVIAAA0IgPAAIAAh4IAPAAIAAAVQAIgMAJgFQAMgHANAAQAJAAAHAEQAIADAGAGQACAGAFAKQAHgOAMgIQALgHAOAAQANAAAJAHQAKAGAFALQAEALAAAYIAABAg");
	this.shape_134.setTransform(-161.5,169.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#6B6B6B").s().p("AgcBNQgMgJgIgSQgGgSAAggQAAgfAGgSQAIgRAMgKQANgJAPAAQAOAAANAJQANAKAIASQAHATAAAdQABAfgIASQgHASgOAKQgNAJgOAAQgPAAgNgJgAgTg+QgKAIgFANQgFAPAAAaQAAAcAFAOQAFAOAKAIQAKAHAJABQAKgBAJgHQAKgHAFgOQAGgSAAgZQAAgXgFgQQgFgPgLgIQgJgHgKgBQgKABgJAHg");
	this.shape_135.setTransform(-178.7,167.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#6B6B6B").s().p("AgcBNQgMgJgHgSQgIgSAAggQAAgfAIgSQAHgRAMgKQANgJAPAAQAOAAANAJQAOAKAHASQAIATgBAdQAAAfgGASQgIASgOAKQgNAJgOAAQgPAAgNgJgAgTg+QgKAIgFANQgFAPAAAaQAAAcAFAOQAFAOAKAIQAKAHAJABQAKgBAJgHQAKgHAFgOQAGgSAAgZQAAgXgFgQQgGgPgKgIQgJgHgKgBQgKABgJAHg");
	this.shape_136.setTransform(-191.5,167.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#6B6B6B").s().p("AAEBSIAAiTIgYAAIAKgQIAfAAIAACjg");
	this.shape_137.setTransform(-205.2,167.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#E7F8FE").s().p("AgdBRQgOgJgHgTQgIgTAAgiQAAghAIgSQAHgTAOgKQANgKAQAAQAPAAAOAKQAOAKAIATQAIAUAAAfQAAAggIAUQgIATgOAKQgOAKgPAAQgQAAgNgKgAgUhBQgLAHgFAPQgFAPAAAcQAAAdAFAPQAFAPALAIQAKAIAKAAQALAAAKgIQAKgHAFgPQAGgTAAgaQAAgYgFgRQgGgRgKgHQgKgIgLAAQgKAAgKAIg");
	this.shape_138.setTransform(320.9,-97.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#E7F8FE").s().p("AgvAvQgSgVgBgaQABgZASgTQATgWAcAAQAdAAAUAWQARATABAZQgBAagSAVQgTAUgdAAQgcAAgTgUgAgigiQgOAPAAATQAAAOAGAMQAHAMAMAHQALAGAMAAQANAAALgGQAMgHAHgMQAGgMAAgOQAAgTgOgPQgPgQgUAAQgTAAgPAQg");
	this.shape_139.setTransform(299.7,-95.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#E7F8FE").s().p("AAmBBIAAg9QAAgUgBgIQgDgMgIgHQgIgGgNAAQgNAAgMAKQgMAKgEAOQgCAKAAAXIAAAvIgQAAIAAh+IAQAAIAAAXQAKgNAMgHQAMgGAMAAQAPAAALAHQALAHAFANQAGAMgBAZIAABBg");
	this.shape_140.setTransform(284.5,-95.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#E7F8FE").s().p("AguAvQgTgUAAgbQAAgaATgVQAUgTAaAAQAPAAANAGQAMAIAKANIAAgXIAQAAIAAB+IgQAAIAAgXQgKANgNAHQgNAGgOAAQgbAAgTgUgAgXgrQgMAGgHANQgGAMAAAMQAAANAHANQAHAMALAHQAMAHALAAQAOAAAMgHQAMgHAHgLQAGgNAAgOQAAgUgOgPQgPgPgVAAQgMAAgMAHg");
	this.shape_141.setTransform(268.5,-95.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#E7F8FE").s().p("AgGBaIAAh+IAOAAIAAB+gAgIhCQgEgEAAgFQAAgGAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAGQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_142.setTransform(258.1,-98.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#E7F8FE").s().p("Ag1BWIAAirIAjAAQAbAAALACQAPAEAJAMQAKALAAARQAAARgKAMQgJAKgQADQgMADgeAAIgMAAIAABQgAgjgJIAdAAQAQAAAIgDQAIgDAFgIQAFgHAAgJQAAgJgFgHQgFgHgHgDQgIgDgQAAIgeAAg");
	this.shape_143.setTransform(248.9,-97.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#6B6B6B").s().p("AAmBAIgmg2IglA2IgUAAIAwhCIgsg8IAUAAIAhAuIAhguIAUAAIgsA8IAyBCg");
	this.shape_144.setTransform(483.4,-95.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#6B6B6B").s().p("AgIAKQgFgFAAgFQAAgFAFgEQADgEAFAAQAFAAAFAEQAEAEAAAFQAAAFgEAFQgFAEgFAAQgFAAgDgEg");
	this.shape_145.setTransform(474.6,-90.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#6B6B6B").s().p("AAFBWIAAiaIgZAAIAKgRIAgAAIAACrg");
	this.shape_146.setTransform(463.2,-97.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#6B6B6B").s().p("AgdBRQgOgJgHgTQgIgTAAgiQAAghAIgSQAHgTAOgKQANgKAQAAQAPAAAOAKQAOAKAIATQAIAUAAAfQAAAggIAUQgIATgOAKQgOAKgPAAQgQAAgNgKgAgUhBQgLAHgFAPQgFAPAAAcQAAAdAFAPQAFAPALAIQAKAIAKAAQALAAAKgIQAKgHAFgPQAGgTAAgaQAAgYgFgRQgGgRgKgHQgKgIgLAAQgKAAgKAIg");
	this.shape_147.setTransform(450.8,-97.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#6B6B6B").s().p("AAEBWIAAiaIgZAAIALgRIAfAAIAACrg");
	this.shape_148.setTransform(436.4,-97.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#6B6B6B").s().p("AgJAKQgEgFAAgFQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAFgEAFQgEAEgGAAQgFAAgEgEg");
	this.shape_149.setTransform(427.7,-90.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#6B6B6B").s().p("AgqBKQgPgQAAgUQAAgPAIgLQAHgMATgHQgNgGgHgKQgGgKAAgLQAAgMAHgKQAHgLAMgGQAMgHAMAAQANAAAMAHQALAGAHALQAGAKAAAMQAAAMgGAJQgGAJgMAHQARAHAIALQAHALAAAPQAAAUgNAPQgQATgdAAQgbAAgPgRgAgcAMQgMALAAAQQAAAJAGAJQAFAIAJAFQAJAEALAAQASAAAMgLQALgLAAgPQAAgPgMgLQgMgLgRAAQgPAAgNAMgAgWhAQgJAIAAAMQAAALAKAKQAKAJALAAQAJAAAIgEQAHgEAEgIQAFgHAAgHQAAgLgJgJQgIgJgQAAQgNAAgJAJg");
	this.shape_150.setTransform(417.4,-97.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#6B6B6B").s().p("AgaBUQgMgHgHgNQgHgMAAgOQAAgLAEgMQAFgLALgPIAyhPIAPAKIgtBHQAJgDAGAAQAVAAAPANQAOAOAAAWQAAAPgHAMQgHAMgNAIQgNAHgNAAQgOAAgMgHgAgYAMQgLAKAAAPQAAAPALALQAKALAOAAQAPAAAKgLQALgLAAgPQAAgPgLgKQgKgLgPAAQgOAAgKALg");
	this.shape_151.setTransform(404.3,-97.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#6B6B6B").s().p("AAFBWIAAiaIgZAAIAKgRIAgAAIAACrg");
	this.shape_152.setTransform(389.6,-97.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#6B6B6B").s().p("AgJAKQgEgFAAgFQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAFgEAFQgEAEgGAAQgFAAgEgEg");
	this.shape_153.setTransform(380.9,-90.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#6B6B6B").s().p("Ag5BZIBAhIQAUgTAGgLQAGgLAAgLQAAgPgLgLQgKgKgRAAQgOAAgLALQgLAMgBAUIgRAAQABgaAQgRQARgRAVAAQAZAAAPAQQAOAPAAAWQAAAOgHANQgHALgUAWIgpAvIBOAAIAAARg");
	this.shape_154.setTransform(370.5,-98.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#6B6B6B").s().p("AggBRIAthHQgJAEgGAAQgVAAgPgOQgOgOAAgWQAAgPAHgMQAHgMANgHQANgIAMAAQAPAAAMAHQAMAHAHANQAHAMAAAPQAAAKgEAMQgFAMgLAOIgyBPgAgYg+QgLALAAAPQAAAPALALQAKAKAOAAQAPAAAKgKQALgLAAgPQAAgPgLgLQgKgLgPAAQgOAAgKALg");
	this.shape_155.setTransform(357,-97.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#6B6B6B").s().p("AAFBWIAAiaIgZAAIAJgRIAhAAIAACrg");
	this.shape_156.setTransform(342.8,-97.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#E7F8FE").s().p("AAEBWIAAiaIgZAAIAKgRIAhAAIAACrg");
	this.shape_157.setTransform(319.9,-41);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#E7F8FE").s().p("AgvAvQgSgVgBgaQABgZASgTQATgWAcAAQAdAAAUAWQARATABAZQgBAagSAVQgTAUgdAAQgcAAgTgUgAgigjQgOAPAAAUQAAAOAGAMQAHAMAMAGQALAHAMAAQANAAALgHQAMgGAHgMQAGgMAAgOQAAgUgOgPQgPgPgUAAQgTAAgPAPg");
	this.shape_158.setTransform(299.7,-38.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#E7F8FE").s().p("AguAvQgTgTAAgcQAAgbATgTQAUgUAaAAQAPAAANAGQAMAIAKANIAAgXIAQAAIAAB9IgQAAIAAgVQgKAMgNAHQgNAGgOAAQgbAAgTgUgAgXgsQgMAIgHALQgGANAAAMQAAANAHANQAHAMALAHQAMAGALABQAOgBAMgGQAMgHAHgMQAGgLAAgPQAAgUgOgPQgPgPgVAAQgMAAgMAGg");
	this.shape_159.setTransform(268.5,-38.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#E7F8FE").s().p("AgGBaIAAh+IAOAAIAAB+gAgIhCQgEgEAAgGQAAgFAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_160.setTransform(258.1,-41.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#6B6B6B").s().p("AAmA/Igmg2IglA2IgUAAIAwhBIgsg8IAUAAIAhAuIAhguIAUAAIgsA8IAyBBg");
	this.shape_161.setTransform(483.4,-38.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#6B6B6B").s().p("Ag6BYIBBhHQAUgUAGgKQAGgKAAgMQAAgPgKgLQgMgKgPAAQgPAAgLALQgLALgCAVIgQAAQABgbAQgQQAQgRAWAAQAZAAAOAQQAPAQAAAUQAAAPgHANQgHALgVAWIgpAvIBOAAIAAAQg");
	this.shape_162.setTransform(464.1,-41.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#6B6B6B").s().p("Ag5BYIBAhHQAUgUAGgKQAGgKAAgMQAAgPgLgLQgKgKgRAAQgOAAgLALQgLALgBAVIgRAAQABgbAQgQQARgRAVAAQAZAAAPAQQAOAQAAAUQAAAPgHANQgHALgUAWIgpAvIBOAAIAAAQg");
	this.shape_163.setTransform(370.5,-41.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#E7F8FE").s().p("AgvAvQgSgUgBgbQABgZASgUQATgVAcAAQAdAAAUAVQARAUABAZQgBAbgSAUQgTAUgdAAQgcAAgTgUgAgigiQgOAPAAATQAAAOAGAMQAHAMAMAHQALAGAMAAQANAAALgGQAMgHAHgMQAGgMAAgOQAAgTgOgPQgPgQgUAAQgTAAgPAQg");
	this.shape_164.setTransform(299.7,-254.2);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#E7F8FE").s().p("AAmBBIAAg9QAAgUgBgIQgDgMgIgHQgIgGgNAAQgNAAgMAKQgMAKgEAOQgCAKAAAXIAAAvIgQAAIAAh+IAQAAIAAAXQAKgNAMgHQAMgGAMAAQAPAAALAHQALAHAFANQAGAMgBAZIAABBg");
	this.shape_165.setTransform(284.5,-254.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#E7F8FE").s().p("AguAvQgTgTAAgcQAAgaATgVQAUgTAaAAQAPAAANAHQAMAGAKAOIAAgYIAQAAIAAB/IgQAAIAAgXQgKANgNAGQgNAHgOAAQgbAAgTgUgAgXgrQgMAGgHANQgGAMAAAMQAAANAHAMQAHANALAHQAMAHALgBQAOABAMgHQAMgHAHgLQAGgMAAgPQAAgUgOgPQgPgPgVAAQgMAAgMAHg");
	this.shape_166.setTransform(268.5,-254.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#E7F8FE").s().p("Ag1BWIAAirIAjAAQAbAAALACQAPAEAJAMQAKALAAARQAAARgKAMQgJAKgQADQgMADgeAAIgMAAIAABQgAgjgJIAdAAQAQAAAIgDQAIgDAFgIQAFgHAAgJQAAgJgFgHQgFgHgHgDQgIgDgQAAIgeAAg");
	this.shape_167.setTransform(248.9,-256.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#6B6B6B").s().p("AAmBAIgmg2IglA2IgUAAIAwhCIgsg9IAUAAIAhAvIAhgvIAUAAIgsA9IAyBCg");
	this.shape_168.setTransform(483.4,-254.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#6B6B6B").s().p("AgIAKQgFgFAAgFQAAgFAFgEQADgEAFAAQAFAAAFAEQAEAEAAAFQAAAFgEAFQgFAEgFAAQgFAAgDgEg");
	this.shape_169.setTransform(474.6,-248.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#6B6B6B").s().p("Ag6BZIBBhIQAUgUAGgKQAGgLAAgLQAAgPgKgKQgMgLgPAAQgPAAgLALQgLAMgCATIgQAAQABgZAQgRQAQgQAWAAQAZAAAOAPQAPAPAAAWQAAAPgHANQgHAKgVAWIgpAvIBOAAIAAARg");
	this.shape_170.setTransform(464.1,-256.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#6B6B6B").s().p("AgdBRQgOgJgHgTQgIgTAAgiQAAghAIgSQAHgTAOgKQANgKAQAAQAPAAAOAKQAOAKAIATQAIAUAAAfQAAAggIAUQgIATgOAKQgOAKgPAAQgQAAgNgKgAgUhBQgLAHgFAPQgFAPAAAcQAAAdAFAPQAFAPALAIQAKAIAKAAQALAAAKgIQAKgHAFgPQAGgTAAgaQAAgYgFgRQgGgRgKgHQgKgIgLAAQgKAAgKAIg");
	this.shape_171.setTransform(450.8,-256.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#6B6B6B").s().p("AAEBWIAAiaIgZAAIALgRIAfAAIAACrg");
	this.shape_172.setTransform(436.4,-256.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#6B6B6B").s().p("AgJAKQgEgFAAgFQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAFgEAFQgEAEgGAAQgFAAgEgEg");
	this.shape_173.setTransform(427.7,-248.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#6B6B6B").s().p("AgqBKQgPgQAAgUQAAgPAIgLQAHgMATgHQgNgGgHgKQgGgKAAgLQAAgMAHgKQAHgLAMgGQAMgHAMAAQANAAAMAHQALAGAHALQAGAKAAAMQAAAMgGAJQgGAJgMAHQARAHAIALQAHALAAAPQAAAUgNAPQgQATgdAAQgbAAgPgRgAgcAMQgMALAAAQQAAAJAGAJQAFAIAJAFQAJAEALAAQASAAAMgLQALgLAAgPQAAgPgMgLQgMgLgRAAQgPAAgNAMgAgWhAQgJAIAAAMQAAALAKAKQAKAJALAAQAJAAAIgEQAHgEAEgIQAFgHAAgHQAAgLgJgJQgIgJgQAAQgNAAgJAJg");
	this.shape_174.setTransform(417.4,-256.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#6B6B6B").s().p("AgaBUQgMgHgHgNQgHgMAAgOQAAgLAEgMQAFgLALgPIAyhPIAPAKIgtBHQAJgDAGAAQAVAAAPANQAOAOAAAWQAAAPgHAMQgHAMgNAIQgNAHgNAAQgOAAgMgHgAgYAMQgLAKAAAPQAAAPALALQAKALAOAAQAPAAAKgLQALgLAAgPQAAgPgLgKQgKgLgPAAQgOAAgKALg");
	this.shape_175.setTransform(404.3,-256.5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#6B6B6B").s().p("AgJAKQgEgFAAgFQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAFgEAFQgEAEgGAAQgFAAgEgEg");
	this.shape_176.setTransform(380.9,-248.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#6B6B6B").s().p("Ag5BZIBAhIQAUgUAGgKQAGgLAAgLQAAgPgLgKQgKgLgRAAQgOAAgLALQgLAMgBATIgRAAQABgZAQgRQARgQAVAAQAZAAAPAPQAOAPAAAWQAAAPgHANQgHAKgUAWIgpAvIBOAAIAAARg");
	this.shape_177.setTransform(370.5,-256.7);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#6B6B6B").s().p("AggBRIAthHQgJAEgGAAQgVAAgPgOQgOgOAAgWQAAgPAHgMQAHgMANgHQANgIAMAAQAPAAAMAHQAMAHAHANQAHAMAAAPQAAAKgEAMQgFAMgLAOIgyBPgAgYg+QgLALAAAPQAAAPALALQAKAKAOAAQAPAAAKgKQALgLAAgPQAAgPgLgLQgKgLgPAAQgOAAgKALg");
	this.shape_178.setTransform(357,-256.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#6B6B6B").s().p("AAFBWIAAiaIgZAAIAJgRIAhAAIAACrg");
	this.shape_179.setTransform(342.8,-256.5);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#6B6B6B").s().p("AglBOQgPgNgEgZIARAAQAEARAIAHQALAKAQAAQARAAAMgMQAMgLAAgPQAAgKgHgJQgFgJgKgEQgJgEgTAAIAAgQQALAAAKgEQAJgEAEgHQAFgGAAgIQAAgLgJgIQgJgJgMAAQgLAAgIAHQgJAGgFAPIgSAAQAFgVAOgMQANgMATAAQAMAAAMAHQALAGAHAKQAGALAAALQAAAXgXANQANAFAIAIQAMANAAASQgBAOgHAOQgIANgOAHQgNAIgPAAQgWAAgPgNg");
	this.shape_180.setTransform(464.2,-41);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#6B6B6B").s().p("Ag5BYIBAhHQAUgUAGgKQAGgKAAgMQAAgPgKgLQgLgKgQAAQgPAAgLALQgLALgCAVIgQAAQAAgbARgQQARgRAWAAQAXAAAPAQQAPAQAAAUQAAAPgHANQgHALgUAWIgqAvIBPAAIAAAQg");
	this.shape_181.setTransform(450.8,-41.2);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#6B6B6B").s().p("AglBOQgPgNgEgZIARAAQAEARAIAHQALAKAQAAQARAAAMgMQAMgLAAgPQAAgKgHgJQgFgJgKgEQgJgEgTAAIAAgQQALAAAKgEQAJgEAEgHQAFgGAAgIQAAgLgJgIQgJgJgMAAQgLAAgIAHQgJAGgFAPIgSAAQAFgVAOgMQANgMATAAQAMAAAMAHQALAGAHAKQAGALAAALQAAAXgXANQANAFAIAIQAMANAAASQgBAOgHAOQgIANgOAHQgNAIgPAAQgWAAgPgNg");
	this.shape_182.setTransform(464.2,-256.5);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#6B6B6B").s().p("AAEBWIAAiaIgZAAIAKgRIAgAAIAACrg");
	this.shape_183.setTransform(449.8,-256.5);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#E7F8FE").s().p("AgwBWIBHiaIg/AAIAAgRIBZAAIhGCaIBCAAIAAARg");
	this.shape_184.setTransform(-403.7,-234.5);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#E7F8FE").s().p("ABRBWIgSh6Ig9B6IgCAAIg+h7IgRB7IgSAAIAairIACAAIBFCMIBGiMIACAAIAaCrg");
	this.shape_185.setTransform(-420.4,-234.5);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#E7F8FE").s().p("AhIBWIAAirIAkAAQAlAAASAGQAZAJAOAWQAPAWAAAcQAAAagMAUQgLATgSAKQgSAJgeAAgAg3BGIAVAAQAiAAANgFQATgGAMgQQALgRAAgYQAAgXgMgSQgMgSgWgGQgOgFglAAIgNAAg");
	this.shape_186.setTransform(-440,-234.5);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#6B6B6B").s().p("AAmA/Igmg2IgmA2IgTAAIAwhBIgsg8IAUAAIAhAuIAhguIAUAAIgsA8IAxBBg");
	this.shape_187.setTransform(-231.8,-232.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#6B6B6B").s().p("AgJAKQgEgFAAgFQAAgFAEgEQAFgEAEAAQAFAAAFAEQAEAEAAAFQAAAFgEAFQgFAEgFAAQgEAAgFgEg");
	this.shape_188.setTransform(-240.6,-226.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#6B6B6B").s().p("AgaBUQgMgHgHgNQgHgMAAgOQAAgLAEgMQAFgLALgPIAyhPIAPAKIgtBHQAJgDAGAAQAVAAAPANQAOAOAAAWQAAAPgHAMQgHAMgNAIQgNAHgNAAQgOAAgMgHgAgYAMQgLAKAAAPQAAAPALALQAKALAOAAQAPAAAKgLQALgLAAgPQAAgPgLgKQgKgLgPAAQgOAAgKALg");
	this.shape_189.setTransform(-250.7,-234.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#6B6B6B").s().p("AgJAKQgEgFAAgFQAAgFAEgEQAFgEAEAAQAGAAAEAEQAEAEAAAFQAAAFgEAFQgEAEgGAAQgEAAgFgEg");
	this.shape_190.setTransform(-260.7,-226.9);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#6B6B6B").s().p("AAFBWIAAiaIgZAAIAJgRIAhAAIAACrg");
	this.shape_191.setTransform(-285.4,-234.5);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#6B6B6B").s().p("AgIAKQgFgFAAgFQAAgFAFgEQADgEAFAAQAFAAAFAEQAEAEAAAFQAAAFgEAFQgFAEgFAAQgFAAgDgEg");
	this.shape_192.setTransform(-294.1,-226.9);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#6B6B6B").s().p("Ag6BYIBBhHQAUgUAGgKQAGgKAAgMQAAgPgKgLQgMgKgPAAQgPAAgLALQgLALgCAVIgQAAQABgbAQgQQAQgRAXAAQAYAAAOAQQAPAQAAAUQAAAPgHANQgHALgVAWIgpAvIBOAAIAAAQg");
	this.shape_193.setTransform(-304.6,-234.7);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#6B6B6B").s().p("AAEBWIAAiaIgZAAIAKgRIAgAAIAACrg");
	this.shape_194.setTransform(-318.9,-234.5);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#6B6B6B").s().p("Ag5BYIBAhHQAUgUAGgKQAGgKAAgMQAAgPgKgLQgLgKgQAAQgPAAgLALQgLALgCAVIgQAAQAAgbARgQQAQgRAXAAQAXAAAPAQQAPAQAAAUQAAAPgHANQgHALgUAWIgqAvIBPAAIAAAQg");
	this.shape_195.setTransform(-331.3,-234.7);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#6B6B6B").s().p("AAWBYIAAgoIhRAAIBfiIIADAAIAAB4IAVAAIAAAQIgVAAIAAAogAgcAgIAyAAIAAhHg");
	this.shape_196.setTransform(464.2,-41.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#6B6B6B").s().p("AAWBZIAAgpIhRAAIBfiHIADAAIAAB2IAVAAIAAARIgVAAIAAApgAgcAfIAyAAIAAhGg");
	this.shape_197.setTransform(464.2,-256.7);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#E7F8FE").s().p("AgvAvQgSgUgBgbQABgZASgUQATgVAcAAQAdAAAUAVQARAUABAZQgBAbgSAUQgTAUgdAAQgcAAgTgUgAgigjQgOAPAAAUQAAAOAGAMQAHAMAMAGQALAHAMAAQANAAALgHQAMgGAHgMQAGgMAAgOQAAgUgOgPQgPgPgUAAQgTAAgPAPg");
	this.shape_198.setTransform(299.7,-117.1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#E7F8FE").s().p("AguAvQgTgTAAgcQAAgbATgUQAUgTAaAAQAPAAANAHQAMAGAKAOIAAgYIAQAAIAAB+IgQAAIAAgWQgKANgNAGQgNAHgOAAQgbAAgTgUgAgXgsQgMAIgHALQgGANAAAMQAAANAHAMQAHANALAHQAMAGALAAQAOAAAMgGQAMgHAHgMQAGgMAAgOQAAgUgOgPQgPgPgVAAQgMAAgMAGg");
	this.shape_199.setTransform(268.5,-117.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#6B6B6B").s().p("AAmA/Igmg2IglA2IgUAAIAwhBIgsg9IAUAAIAhAvIAhgvIAUAAIgsA9IAyBBg");
	this.shape_200.setTransform(483.4,-117.1);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#6B6B6B").s().p("AgmBLQgOgNgDgUIASAAQABAKAGAGQAEAHAIADQAIAEAJAAQAPAAAMgNQANgMAAgUQAAgRgMgKQgLgKgRgBQgOAAgWAKIAQhWIBJAAIAAAQIg8AAIgJAwQAMgEAGAAQAYAAAQAQQAPAOAAAZQAAARgHAOQgJAOgNAIQgOAIgPgBQgWAAgOgNg");
	this.shape_201.setTransform(464.2,-119.2);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#6B6B6B").s().p("Ag5BYIBAhHQAUgUAGgKQAGgKAAgMQAAgPgLgKQgKgLgRAAQgOAAgLALQgLAMgBATIgRAAQABgaAQgQQARgQAVAAQAZAAAPAPQAOAQAAAUQAAAQgHANQgHAKgUAWIgpAvIBOAAIAAAQg");
	this.shape_202.setTransform(370.5,-119.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116}]}).to({state:[{t:this.shape_156,p:{y:-97.9}},{t:this.shape_155,p:{y:-97.9}},{t:this.shape_154},{t:this.shape_153,p:{y:-90.3}},{t:this.shape_152,p:{y:-97.9}},{t:this.shape_151,p:{y:-97.9}},{t:this.shape_150,p:{y:-97.9}},{t:this.shape_149,p:{y:-90.3}},{t:this.shape_148,p:{y:-97.9}},{t:this.shape_147,p:{y:-97.9,x:450.8}},{t:this.shape_146,p:{x:463.2,y:-97.9}},{t:this.shape_145,p:{y:-90.3}},{t:this.shape_144},{t:this.shape_143,p:{y:-97.9}},{t:this.shape_142,p:{y:-98.2}},{t:this.shape_141},{t:this.shape_140,p:{y:-95.8}},{t:this.shape_139},{t:this.shape_138,p:{y:-97.9}}]},1).to({state:[{t:this.shape_179,p:{x:342.8,y:-256.5}},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_152,p:{y:-256.5}},{t:this.shape_175,p:{x:404.3,y:-256.5}},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171,p:{x:450.8,y:-256.5}},{t:this.shape_170},{t:this.shape_169,p:{x:474.6,y:-248.9}},{t:this.shape_168},{t:this.shape_167},{t:this.shape_142,p:{y:-256.8}},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_138,p:{y:-256.5}},{t:this.shape_156,p:{y:-41}},{t:this.shape_155,p:{y:-41}},{t:this.shape_163},{t:this.shape_153,p:{y:-33.4}},{t:this.shape_146,p:{x:389.6,y:-41}},{t:this.shape_151,p:{y:-41}},{t:this.shape_150,p:{y:-41}},{t:this.shape_149,p:{y:-33.4}},{t:this.shape_148,p:{y:-41}},{t:this.shape_147,p:{y:-41,x:450.8}},{t:this.shape_162},{t:this.shape_145,p:{y:-33.4}},{t:this.shape_161},{t:this.shape_143,p:{y:-41}},{t:this.shape_160,p:{y:-41.3}},{t:this.shape_159},{t:this.shape_140,p:{y:-38.9}},{t:this.shape_158},{t:this.shape_157}]},1).to({state:[{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_147,p:{y:-234.5,x:-271.1}},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_179,p:{x:342.8,y:-256.5}},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_152,p:{y:-256.5}},{t:this.shape_175,p:{x:404.3,y:-256.5}},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_183,p:{x:449.8,y:-256.5}},{t:this.shape_182},{t:this.shape_169,p:{x:474.6,y:-248.9}},{t:this.shape_168},{t:this.shape_167},{t:this.shape_142,p:{y:-256.8}},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_138,p:{y:-256.5}},{t:this.shape_156,p:{y:-41}},{t:this.shape_155,p:{y:-41}},{t:this.shape_163},{t:this.shape_153,p:{y:-33.4}},{t:this.shape_146,p:{x:389.6,y:-41}},{t:this.shape_151,p:{y:-41}},{t:this.shape_150,p:{y:-41}},{t:this.shape_149,p:{y:-33.4}},{t:this.shape_148,p:{y:-41}},{t:this.shape_181},{t:this.shape_180},{t:this.shape_145,p:{y:-33.4}},{t:this.shape_161},{t:this.shape_143,p:{y:-41}},{t:this.shape_160,p:{y:-41.3}},{t:this.shape_159},{t:this.shape_140,p:{y:-38.9}},{t:this.shape_158},{t:this.shape_157}]},1).to({state:[{t:this.shape_179,p:{x:342.8,y:-256.5}},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_152,p:{y:-256.5}},{t:this.shape_175,p:{x:404.3,y:-256.5}},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171,p:{x:450.8,y:-256.5}},{t:this.shape_197},{t:this.shape_169,p:{x:474.6,y:-248.9}},{t:this.shape_168},{t:this.shape_167},{t:this.shape_142,p:{y:-256.8}},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_138,p:{y:-256.5}},{t:this.shape_156,p:{y:-41}},{t:this.shape_155,p:{y:-41}},{t:this.shape_163},{t:this.shape_153,p:{y:-33.4}},{t:this.shape_146,p:{x:389.6,y:-41}},{t:this.shape_151,p:{y:-41}},{t:this.shape_150,p:{y:-41}},{t:this.shape_149,p:{y:-33.4}},{t:this.shape_148,p:{y:-41}},{t:this.shape_147,p:{y:-41,x:450.8}},{t:this.shape_196},{t:this.shape_145,p:{y:-33.4}},{t:this.shape_161},{t:this.shape_143,p:{y:-41}},{t:this.shape_160,p:{y:-41.3}},{t:this.shape_159},{t:this.shape_140,p:{y:-38.9}},{t:this.shape_158},{t:this.shape_157}]},1).to({state:[{t:this.shape_195},{t:this.shape_183,p:{x:-318.9,y:-234.5}},{t:this.shape_193},{t:this.shape_169,p:{x:-294.1,y:-226.9}},{t:this.shape_179,p:{x:-285.4,y:-234.5}},{t:this.shape_171,p:{x:-271.1,y:-234.5}},{t:this.shape_190},{t:this.shape_175,p:{x:-250.7,y:-234.5}},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_156,p:{y:-119.4}},{t:this.shape_155,p:{y:-119.4}},{t:this.shape_202},{t:this.shape_153,p:{y:-111.9}},{t:this.shape_146,p:{x:389.6,y:-119.4}},{t:this.shape_151,p:{y:-119.4}},{t:this.shape_150,p:{y:-119.4}},{t:this.shape_149,p:{y:-111.9}},{t:this.shape_148,p:{y:-119.4}},{t:this.shape_147,p:{y:-119.4,x:450.8}},{t:this.shape_201},{t:this.shape_145,p:{y:-111.9}},{t:this.shape_200},{t:this.shape_143,p:{y:-119.4}},{t:this.shape_160,p:{y:-119.8}},{t:this.shape_199},{t:this.shape_140,p:{y:-117.3}},{t:this.shape_198},{t:this.shape_138,p:{y:-119.4}}]},1).to({state:[]},1).wait(10));

	// oggetti
	this.prevBtn = new lib.preventivo_btn();
	this.prevBtn.setTransform(480.2,-241.3,0.852,0.852);
	new cjs.ButtonHelper(this.prevBtn, 0, 1, 2, false, new lib.preventivo_btn(), 3);

	this.Cin0 = new lib.buildingC_btn();
	this.Cin0.setTransform(-47.8,84.3,0.309,0.309,0,0,0,0,11.5);
	new cjs.ButtonHelper(this.Cin0, 0, 1, 2, false, new lib.buildingC_btn(), 3);

	this.Bin0 = new lib.buildingB_btn();
	this.Bin0.setTransform(-351.4,-48,0.309,0.309,0,0,0,0,11.3);
	new cjs.ButtonHelper(this.Bin0, 0, 1, 2, false, new lib.buildingB_btn(), 3);

	this.Ein0 = new lib.buildingE_btn();
	this.Ein0.setTransform(367.4,-48,0.309,0.309,0,0,0,0,11.3);
	new cjs.ButtonHelper(this.Ein0, 0, 1, 2, false, new lib.buildingE_btn(), 3);

	this.Din0 = new lib.buildingD_btn();
	this.Din0.setTransform(-47.8,-187.3,0.309,0.309,0,0,0,0,11.7);
	new cjs.ButtonHelper(this.Din0, 0, 1, 2, false, new lib.buildingD_btn(), 3);

	this.Ain0 = new lib.buildingA_btn();
	this.Ain0.setTransform(-351.4,209.2,0.309,0.309,0,0,0,0,11.7);
	new cjs.ButtonHelper(this.Ain0, 0, 1, 2, false, new lib.buildingA_btn(), 3);

	this.instance = new lib.host_51("single",1);
	this.instance.setTransform(422.3,21.5,0.202,0.202,0,0,0,0,-9.9);

	this.instance_1 = new lib.host_2("single",1);
	this.instance_1.setTransform(422.3,-63.5,0.202,0.202,0,0,0,0,-9.9);

	this.instance_2 = new lib.Switch("synched",0);
	this.instance_2.setTransform(267.5,-21.9,0.32,0.32);

	this.approdo = new lib.rtApprodo_btn();
	this.approdo.setTransform(-99.4,-21.7,0.288,0.288);
	new cjs.ButtonHelper(this.approdo, 0, 1, 2, false, new lib.rtApprodo_btn(), 3);

	this.instance_3 = new lib.host_101("single",1);
	this.instance_3.setTransform(422.3,80.4,0.202,0.202,0,0,0,0,-9.9);

	this.instance_4 = new lib.host_52("single",1);
	this.instance_4.setTransform(422.3,-4.6,0.202,0.202,0,0,0,0,-9.9);

	this.banchina = new lib.rtBanchina_btn();
	this.banchina.setTransform(-99.4,-21.7,0.288,0.288);
	new cjs.ButtonHelper(this.banchina, 0, 1, 2, false, new lib.rtBanchina_btn(), 3);

	this.instance_5 = new lib.Server_app("synched",1,false);
	this.instance_5.setTransform(-371.6,-30.1,0.219,0.219);

	this.instance_6 = new lib.host_132("synched",1,false);
	this.instance_6.setTransform(422.3,80.4,0.202,0.202,0,0,0,0,-9.9);

	this.instance_7 = new lib.host_3("synched",1,false);
	this.instance_7.setTransform(422.3,-4.6,0.202,0.202,0,0,0,0,-9.9);

	this.instance_8 = new lib.host_132("synched",1,false);
	this.instance_8.setTransform(422.3,-137.1,0.202,0.202,0,0,0,0,-9.9);

	this.instance_9 = new lib.host_3("synched",1,false);
	this.instance_9.setTransform(422.3,-222.1,0.202,0.202,0,0,0,0,-9.9);

	this.instance_10 = new lib.Switch("synched",0);
	this.instance_10.setTransform(267.5,-159.8,0.32,0.32);

	this.controfiocco = new lib.rtControfiocco_btn();
	this.controfiocco.setTransform(126.6,-21.7,0.288,0.288);
	new cjs.ButtonHelper(this.controfiocco, 0, 1, 2, false, new lib.rtControfiocco_btn(), 3);

	this.chiglia = new lib.fwChiglia_btn();
	this.chiglia.setTransform(-86.4,-21.7,0.286,0.286);
	new cjs.ButtonHelper(this.chiglia, 0, 1, 2, false, new lib.fwChiglia_btn(), 3);

	this.instance_11 = new lib.Server_web("synched",1,false);
	this.instance_11.setTransform(-242.8,-129.7,0.219,0.219);

	this.instance_12 = new lib.Server_proxy("synched",1,false);
	this.instance_12.setTransform(-154.9,-129.7,0.219,0.219);

	this.instance_13 = new lib.Server_mail("synched",1,false);
	this.instance_13.setTransform(-418.4,-129.7,0.219,0.219);

	this.instance_14 = new lib.Server_dns("synched",1,false);
	this.instance_14.setTransform(-330.6,-129.7,0.219,0.219);

	this.instance_15 = new lib.Switch("synched",0);
	this.instance_15.setTransform(-285.8,-21.9,0.32,0.32);

	this.circumnavigante = new lib.fwCircumnavigante_btn();
	this.circumnavigante.setTransform(-285.8,118.2,0.286,0.286);
	new cjs.ButtonHelper(this.circumnavigante, 0, 1, 2, false, new lib.fwCircumnavigante_btn(), 3);

	this.instance_16 = new lib.Internet("synched",0);
	this.instance_16.setTransform(-285.8,280.6,0.411,0.411);

	this.instance_17 = new lib.WifiAP("synched",0);
	this.instance_17.setTransform(262.4,-169.9,0.261,0.261,0,0,0,0,-32.8);

	this.instance_18 = new lib.host_41("single",1);
	this.instance_18.setTransform(422.3,80.4,0.202,0.202,0,0,0,0,-9.9);

	this.instance_19 = new lib.host_151("single",1);
	this.instance_19.setTransform(422.3,-137.1,0.202,0.202,0,0,0,0,-9.9);

	this.instance_20 = new lib.host_42("single",1);
	this.instance_20.setTransform(422.3,-222.1,0.202,0.202,0,0,0,0,-9.9);

	this.deriva = new lib.rtDeriva_btn();
	this.deriva.setTransform(-99.4,-21.7,0.288,0.288);
	new cjs.ButtonHelper(this.deriva, 0, 1, 2, false, new lib.rtDeriva_btn(), 3);

	this.instance_21 = new lib.Server_dhcp("synched",1,false);
	this.instance_21.setTransform(-371.6,-22.6,0.219,0.219);

	this.ecoscandaglio = new lib.rtEcoscandaglio_btn();
	this.ecoscandaglio.setTransform(126.6,-21.7,0.288,0.288);
	new cjs.ButtonHelper(this.ecoscandaglio, 0, 1, 2, false, new lib.rtEcoscandaglio_btn(), 3);

	this.entrobordo = new lib.fwEntrobordo_btn();
	this.entrobordo.setTransform(-86.4,-21.7,0.286,0.286);
	new cjs.ButtonHelper(this.entrobordo, 0, 1, 2, false, new lib.fwEntrobordo_btn(), 3);

	this.instance_22 = new lib.Server_dns_2("synched",1,false);
	this.instance_22.setTransform(-242.8,-129.7,0.219,0.219);

	this.instance_23 = new lib.Server_backup("synched",1,false);
	this.instance_23.setTransform(-330.6,-129.7,0.219,0.219);

	this.fuoribordo = new lib.fwFuoribordo_btn();
	this.fuoribordo.setTransform(-285.8,118.2,0.286,0.286);
	new cjs.ButtonHelper(this.fuoribordo, 0, 1, 2, false, new lib.fwFuoribordo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Ain0,p:{regY:11.7,scaleX:0.309,scaleY:0.309,x:-351.4,y:209.2}},{t:this.Din0,p:{regY:11.7,scaleX:0.309,scaleY:0.309,x:-47.8,y:-187.3}},{t:this.Ein0},{t:this.Bin0,p:{regY:11.3,scaleX:0.309,scaleY:0.309,x:-351.4,y:-48}},{t:this.Cin0,p:{regY:11.5,scaleX:0.309,scaleY:0.309,x:-47.8,y:84.3}},{t:this.prevBtn}]}).to({state:[{t:this.approdo},{t:this.instance_2,p:{x:267.5,y:-21.9}},{t:this.instance_1,p:{y:-63.5,mode:"single",loop:undefined}},{t:this.instance,p:{y:21.5,mode:"single",loop:undefined}},{t:this.Cin0,p:{regY:11.8,scaleX:0.296,scaleY:0.296,x:-98.6,y:283.2}}]},1).to({state:[{t:this.instance_5},{t:this.banchina},{t:this.instance_2,p:{x:102.8,y:-21.9}},{t:this.instance_1,p:{y:-222.1,mode:"single",loop:undefined}},{t:this.instance,p:{y:-137.1,mode:"single",loop:undefined}},{t:this.instance_4},{t:this.instance_3},{t:this.Cin0,p:{regY:11.8,scaleX:0.296,scaleY:0.296,x:-214.4,y:283.2}},{t:this.Din0,p:{regY:11.8,scaleX:0.296,scaleY:0.296,x:21.2,y:283.2}}]},1).to({state:[{t:this.instance_16},{t:this.circumnavigante},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.chiglia},{t:this.controfiocco},{t:this.instance_10,p:{x:267.5,y:-159.8}},{t:this.instance_9},{t:this.instance_2,p:{x:267.5,y:55.9}},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.Ain0,p:{regY:11.8,scaleX:0.296,scaleY:0.296,x:11.6,y:283.2}},{t:this.Bin0,p:{regY:11.8,scaleX:0.296,scaleY:0.296,x:129.2,y:283.2}},{t:this.Din0,p:{regY:11.8,scaleX:0.296,scaleY:0.296,x:247.2,y:283.2}}]},1).to({state:[{t:this.instance_21},{t:this.deriva},{t:this.instance_2,p:{x:267.3,y:43.4}},{t:this.instance_20},{t:this.instance_19},{t:this.instance_1,p:{y:-4.6,mode:"single",loop:undefined}},{t:this.instance_18},{t:this.Bin0,p:{regY:11.8,scaleX:0.296,scaleY:0.296,x:-214.4,y:283.2}},{t:this.Cin0,p:{regY:11.8,scaleX:0.296,scaleY:0.296,x:21.2,y:283.2}},{t:this.instance_17}]},1).to({state:[{t:this.instance_16},{t:this.fuoribordo},{t:this.instance_10,p:{x:-285.8,y:-21.9}},{t:this.instance_23},{t:this.instance_22},{t:this.entrobordo},{t:this.ecoscandaglio},{t:this.instance_2,p:{x:267.5,y:-22.6}},{t:this.instance_1,p:{y:-83.1,mode:"synched",loop:false}},{t:this.instance,p:{y:1.9,mode:"synched",loop:false}}]},1).to({state:[]},1).wait(10));

	// link
	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#E7F8FE").s().p("EgzEAeiIgBgBIAAAAIABgBIegw2IABAAIAAABIABABIgBAAI+gQ2IgBAAIAAAAgAZBd+QgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAYUdpQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAXndTQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAW6c+QgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgEAlFAcuQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAWNcoQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAVgcTQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgEAlaAcBQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAUzb+QgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAUGboQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgEAlvAbUQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgATZbTQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgASsa9QgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAR/aoQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgEAmEAanQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgARSaTQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAQlZ9QgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgEAmZAZ6QgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAP4ZoQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAPLZSQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgEAmuAZNQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAOeY9QgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgANxYnQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgEAnDAYgQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgANEYSQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAMXX9QgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgEAnYAXzQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgALqXnQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAK9XSQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgEAntAXGQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAKQW8QgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAJjWnQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgEAoCAWZQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAI2WRQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAIJV8QgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgEAoXAVsQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAHcVmQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAGvVRQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgEAosAU/QgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAGCU8QgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAFVUmQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgEApBAUSQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAEoURQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAD7T7QgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgADOTmQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgEApWATkQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAChTRQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAB0S7QgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgEAprAS3QgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgABHSlQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAAaSPQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgEAqAASJQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAgRR5QgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAg+RjQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgEAqVARbQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAhrRNQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAiYQ3QgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgEAqqAQtQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAjFQhQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAjyQLQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgEAq/AQAQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAkfP1QgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgEArUAPSQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgEArpAOkQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgEAr+AN2QgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgEAsTANIQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgEAsoAMaQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAjdL6QgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIA3gXQAAAAABAAQAAgBABAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAAAAAQgBABAAAAIg3AXIgCAAIgCAAgA0kLyI+gzPIgBgBIAAgBIABAAIABAAIegTPIABABIgBABIAAAAIgBAAIAAAAgEAs9ALsQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgEAtSAK+QgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAg4K0QAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAAAIA3gXQABAAAAAAQAAgBAAAAQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAIg1AXIgCAAIgCAAgEAtnAKQQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgABrJuQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAAAIA3gXQABAAAAAAQABgBAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAIg3AXIgCAAIgCAAgEAt8AJiQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgEAuRAI0QgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAERIoQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAAAIA3gXQABAAAAAAQABgBAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAIg3AXIgCAAIgCAAgEAumAIGQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAG2HiQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAAAIA3gXQABAAAAAAQABgBAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAIg3AXIgCAAIgCAAgEAu7AHYQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgEAvQAGqQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAJbGcQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAAAIA3gXQABAAAAAAQABgBAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAIg3AXIgCAAIgCAAgEAvlAF8QgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAMAFWQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAAAIA3gXQABAAAAAAQABgBAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAIg3AXIgCAAIgCAAgEAv6AFOQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgEAwPAEgQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAOlEQQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAAAIA3gXQABAAAAAAQABgBAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAIg3AXIgCAAIgCAAgEAwkADyQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgARLDKQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAAAIA3gXQABAAAAAAQABgBAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAIg3AXIgCAAIgCAAgEAw5ADEQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgEAxNACWQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAteCSIgBgBIAAgBIAA5dIAAgBIABAAIABAAIABABIAAZdIgBABIAAABIgBAAgATwCEQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAAAIA3gXQABAAAAAAQABgBAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAIg3AXIgCAAIgCAAgEAxiABoQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAWWA+QAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAAAIA3gXQABAAAAAAQABgBAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAIg3AXIgCAAIgCAAgEAx3AA6QgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgEAyLAAMQgDgDAAgEQAAgEADgBQADgDAEAAQAEAAADADQADABAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAY7gGQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAAAIA3gXQABAAAAAAQABgBAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAIg3AXIgCAAIgCAAgEAyggAgQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgEAy1gBOQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAbghMQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAAAIA3gXQABAAAAAAQABgBAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAIg3AXIgCAAIgCAAgAeFiSQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAAAIA3gXQABAAAAAAQABgBAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAIg3AXIgCAAIgCAAgEAgqgDYQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAAAIA3gXQABAAAAAAQABgBAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAIg3AXIgCAAIgCAAgEAjQgEeQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAAAIA3gXQABAAAAAAQABgBAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAIg3AXIgCAAIgCAAgEAl1gFkQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAAAIA3gXQABAAAAAAQABgBAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAIg3AXIgCAAIgCAAgEAobgGqQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAAAIA3gXQABAAAAAAQABgBAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAIg3AXIgCAAIgCAAgEArBgHwQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAIA4gYQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAIg4AYIgCAAIgBAAgEgzEgJ3IgBAAIAAgBIABgBIegzRIABAAIAAABIABABIgBAAI+gTRIgBAAIAAAAgEAr4gKUIg3gXQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIA3AXQABAAAAABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAIgCABIgCgBgEApSgLaIg3gYQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAIA3AYQABABAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABIgBAAIgDgBgEAmsgMhIg3gXQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIA3AXQABAAAAABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAIgCABIgCgBgEAkHgNnIg3gXQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIA3AXQABAAAAABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAIgCABIgCgBgEAhhgOtIg3gXQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIA3AXQABAAAAABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAIgCABIgCgBgAe8vzIg3gXQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIA3AXQABAAAAABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAIgCABIgCgBgAcXw5Ig3gXQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIA3AXQABAAAAABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAIgCABIgCgBgAZyx/Ig3gXQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIA3AXQABAAAAABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAIgCABIgCgBgAXNzFIg3gXQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIA3AXQABAAAAABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAIgCABIgCgBgAUn0LIg3gXQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIA3AXQABAAAAABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAIgCABIgCgBgASC1RIg3gXQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIA3AXQABAAAAABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAIgCABIgCgBgAPc2XIg3gXQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIA3AXQABAAAAABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAIgCABIgCgBgAM33dIg3gXQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIA3AXQABAAAAABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAIgCABIgCgBgAKS4jIg3gXQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIA3AXQABAAAAABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAIgCABIgCgBgAHt5pIg3gXQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIA3AXQABAAAAABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAIgCABIgCgBgAFI6vIg3gXQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIA3AXQABAAAAABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAIgCABIgCgBgACi71Ig3gXQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIA3AXQABAAAAABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAIgCABIgCgBgAgB87Ig3gXQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIA1AXQABAAAAABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAIgBABIgBgBgAim+BIg3gXQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAIA3AXQAAAAABABQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgCABIgCgBg");
	this.shape_203.setTransform(29.2,11.3);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#E7F8FE").ss(1,1,1,3,true).p("AAAvCIAAeF");
	this.shape_204.setTransform(-98.6,131.5);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#E7F8FE").ss(3.5,1,1).p("AWVg/IMclgAWVBAIMcFgAI4gCMgroAAA");
	this.shape_205.setTransform(165.5,-21.8);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#E7F8FE").ss(1,1,1,3,true).p("Aj3vGIuEeNADNvRIOvej");
	this.shape_206.setTransform(-97,131.1);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#E7F8FE").ss(3.5,1,1).p("AOmDtIAAydAVhImMAl1ABkAVcGUMAlogQ4AVIEhMAmLgblAVIKUMAl3AMxAOgu1MhJ1AAAIAAKOAH7HdIyXAA");
	this.shape_207.setTransform(9.9,-69.9);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#E7F8FE").ss(1,1,1,3,true).p("AW/vMIAAdxATiviIuFeOAanvtIOwekEgpWAD/IAALv");
	this.shape_208.setTransform(-20.9,133.8);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#E7F8FE").ss(3.5,1,1).p("AcBGUIGbAAIAA0IIC/AAAcBHxIGbAAIAAMVIC/AAEAx4gPeINen5EAx+gL5INPBhEAx+AVvINPBhEAx4ASKINen5Eg/VgAuIOlFTEgkLgA1Ik0FSEgjdAH1IQ/AAA17guIulFTEgxWgA1IE0FSEgqmALpIAALvAk9H1IUGAA");
	this.shape_209.setTransform(-12.8,-72.5);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#E7F8FE").ss(3.5,1,1).p("AtsCUIODAAIAA1uIeJAAA7DDrI9CAAAtsFMIODAAIAAIvIeJAAEArmAOvIMYEsEArfAM7IMnmh");
	this.shape_210.setTransform(30.7,-45.6);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#E7F8FE").ss(1,1,1,3,true).p("AAAl2IAALt");
	this.shape_211.setTransform(-285.6,196.9);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#E7F8FE").ss(3.5,1,1).p("AVCi5IJWAAEAq/gBMINOBfEAq4gExINfn5EgrKgLhIk1FTEgqcgC2IQ+AAEg4WgLhIE1FTEgxmAA8IAALvAr8i2IUFAA");
	this.shape_212.setTransform(31.9,-4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_203}]}).to({state:[{t:this.shape_205},{t:this.shape_204}]},1).to({state:[{t:this.shape_207},{t:this.shape_206}]},1).to({state:[{t:this.shape_209},{t:this.shape_208}]},1).to({state:[{t:this.shape_210},{t:this.shape_206}]},1).to({state:[{t:this.shape_212},{t:this.shape_211}]},1).to({state:[]},1).wait(10));

	// zone
	this.instance_24 = new lib.Internet("synched",0);
	this.instance_24.setTransform(229.6,257,0.544,0.544);

	this.instance_25 = new lib.subnet("synched",0);
	this.instance_25.setTransform(368.4,-13.2,0.393,0.27);

	this.instance_26 = new lib.subnet("synched",0);
	this.instance_26.setTransform(368.4,-171.8,0.393,0.27);

	this.instance_27 = new lib.subnet("synched",0);
	this.instance_27.setTransform(-286.1,-58.1,0.689,0.59);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_24}]}).to({state:[{t:this.instance_25,p:{y:-13.2}}]},1).to({state:[{t:this.instance_26,p:{y:-171.8,scaleX:0.393,scaleY:0.27,x:368.4}},{t:this.instance_25,p:{y:43.7}}]},1).to({state:[{t:this.instance_27,p:{scaleX:0.689,scaleY:0.59,x:-286.1,y:-58.1,mode:"synched"}},{t:this.instance_26,p:{y:-171.8,scaleX:0.393,scaleY:0.27,x:368.4}},{t:this.instance_25,p:{y:43.7}}]},1).to({state:[{t:this.instance_27,p:{scaleX:0.393,scaleY:0.27,x:368.4,y:-171.8,mode:"single"}},{t:this.instance_26,p:{y:43.7,scaleX:0.393,scaleY:0.27,x:368.4}},{t:this.instance_25,p:{y:-172}}]},1).to({state:[{t:this.instance_26,p:{y:-58.1,scaleX:0.689,scaleY:0.59,x:-286.1}},{t:this.instance_25,p:{y:-34.8}}]},1).to({state:[]},1).wait(10));

	// BACK
	this.backBtn = new lib.back_btn();
	this.backBtn.setTransform(-569.6,-22.5);
	this.backBtn._off = true;
	new cjs.ButtonHelper(this.backBtn, 0, 1, 2, false, new lib.back_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.backBtn).wait(1).to({_off:false},0).wait(15));

	// tasti
	this.upBtn = new lib.down_btn();
	this.upBtn.setTransform(-458.4,-245.5,1,1,180);
	new cjs.ButtonHelper(this.upBtn, 0, 1, 2);

	this.downBtn = new lib.down_btn();
	this.downBtn.setTransform(-458.4,198.7);
	new cjs.ButtonHelper(this.downBtn, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.downBtn},{t:this.upBtn}]},6).to({state:[]},4).to({state:[{t:this.downBtn},{t:this.upBtn}]},2).to({state:[]},1).wait(3));

	// bordo
	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#0A0A0A").ss(1,1,1).p("EBSqgp3QhCg9hdAAMigUAAAQheAAhCA9QhCA/AABXMAAABPDQAABXBCA+QBCA+BeAAMCgUAAAQBdAABCg+QBCg+AAhXMAAAhPDQAAhXhCg/g");
	this.shape_213.setTransform(0,-22.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_213).wait(16));

	// maschera (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_6 = new cjs.Graphics().p("Eg9lAqsMAAAhVXMB7LAAAMAAABVXg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(6).to({graphics:mask_graphics_6,x:-3.1,y:-23.4}).wait(9).to({graphics:null,x:0,y:0}).wait(1));

	// testi
	this.confC1 = new lib.conf_chiglia();
	this.confC1.setTransform(-5.5,135.5,1,1,0,0,0,393.5,432.2);

	this.confC2 = new lib.conf_circumnavigante();
	this.confC2.setTransform(101.7,229.1,1,1,0,0,0,492,525);

	this.confE1 = new lib.conf_entrobordo();
	this.confE1.setTransform(-25.5,116.9,1,1,0,0,0,364,412);

	this.confE2 = new lib.conf_fuoribordo();
	this.confE2.setTransform(45.4,138.7,1,1,0,0,0,434.5,434.9);

	this.instance_28 = new lib.conf_approdo();
	this.instance_28.setTransform(-122.6,-96.5,1,1,0,0,0,267,199.5);

	this.instance_29 = new lib.conf_banchina();
	this.instance_29.setTransform(-120.6,-21.9,1,1,0,0,0,272.5,275.5);

	this.confC3 = new lib.conf_controfiocco();
	this.confC3.setTransform(-9.4,135.4,1,1,0,0,0,381.5,430.5);

	this.instance_30 = new lib.conf_deriva();
	this.instance_30.setTransform(-120.4,-20.7,1,1,0,0,0,266.3,276.4);

	this.instance_31 = new lib.conf_ecoscandaglio();
	this.instance_31.setTransform(-130.8,-90.4,1,1,0,0,0,259,206.5);

	this.instance_32 = new lib.preventivo();
	this.instance_32.setTransform(-535.6,-165,0.695,0.695);

	this.confC1.mask = this.confC2.mask = this.confE1.mask = this.confE2.mask = this.instance_28.mask = this.instance_29.mask = this.confC3.mask = this.instance_30.mask = this.instance_31.mask = this.instance_32.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.confC1}]},6).to({state:[{t:this.confC2}]},1).to({state:[{t:this.confE1}]},1).to({state:[{t:this.confE2}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.confC3}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).wait(1));

	// bg
	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#252525").s().p("EhiOA4OMAAAhwbMDEdAAAMAAABwbg");
	this.shape_214.setTransform(0.9,-0.3);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#141414").s().p("EBADAq1MiFnAAAMAAAhVpMCFnAAAQA7gFAyAFQBeAIBCAlIACABIARAPQA+A6AEBRMAAABPYQAFBJg6A0QgRAQgXAOQg9AlhTAJQgbADgdAAQgdAAgggDg");
	this.shape_215.setTransform(90.2,-22.6);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#2E3436").s().p("EgKjAq1QheAAhCg+QhCg9AAhZMAAAhPCQAAhXBCg/QBCg9BeAAIYpAAMAAABVpg");
	this.shape_216.setTransform(-445.4,-22.6);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#252525").s().p("EhiOA4OMAAAhwbMDEdAAAMAAABwbgEhSxgtWQhCA+AABYMAAABPCQAABYBCA+QBBA+BeAAIYrAAMCFoAAAQA/AFA1gFIANAAQBdAABCg+IANgNQA6g1gGhJMAAAhPYQgDhRg+g6IgSgPQg8guhRAAIgUAAQgzgFg6AFMiFoAAAI4rAAQheAAhBA9g");
	this.shape_217.setTransform(0.9,-0.3);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#D5912F").s().p("EBOJAq1MieSAAAQheAAhCg+QhCg+AAhYMAAAhPCQAAhYBCg+QBCg9BeAAMCeSAAAQA7gFAyAFQBeAIBCAlIACABIARAPQA+A6AEBRMAAABPYQAGBJg6A0QgSAQgXAOQg8AlhUAJQgbADgdAAQgdAAgggDg");
	this.shape_218.setTransform(0,-22.6);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#252525").s().p("EhiOA4OMAAAhwbMDEdAAAMAAABwbgEhSxgtWQhCA+AABYMAAABPCQAABYBCA+QBBA+BeAAMCeTAAAQA/AFA1gFIANAAQBdAABCg+IANgNQA6g1gGhJMAAAhPYQgDhRg+g6IgSgPQg8guhRAAIgUAAQgzgFg6AFMieTAAAQheAAhBA9g");
	this.shape_219.setTransform(0.9,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_214}]}).to({state:[{t:this.shape_217},{t:this.shape_216},{t:this.shape_215}]},6).to({state:[{t:this.shape_219},{t:this.shape_218}]},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-627.9,-360.1,1257.6,719.7);


// stage content:
(lib.naufragiopresentazione05final = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Livello 1
	this.maps = new lib.Edifici_map();
	this.maps.setTransform(628.7,359.8,1,1,0,0,0,0.8,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.maps).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(630,359.5,1257.6,719.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;