goog.provide('org.browjure.deck.base');
var module$node_modules$$deck_DOT_gl$extensions$dist$es5$index=shadow.js.require("module$node_modules$$deck_DOT_gl$extensions$dist$es5$index", {});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
var module$node_modules$react_dom$server_browser=shadow.js.require("module$node_modules$react_dom$server_browser", {});
org.browjure.deck.base.mapbox_token = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
org.browjure.deck.base.active_layers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
org.browjure.deck.base.assoc_cljs_data = (function org$browjure$deck$base$assoc_cljs_data(o,data){
goog.object.set(o,"data",cljs.core.to_array(data));

return o;
});
org.browjure.deck.base.set_tooltip = (function org$browjure$deck$base$set_tooltip(var_args){
var G__83143 = arguments.length;
switch (G__83143) {
case 2:
return org.browjure.deck.base.set_tooltip.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return org.browjure.deck.base.set_tooltip.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(org.browjure.deck.base.set_tooltip.cljs$core$IFn$_invoke$arity$2 = (function (p__83145,label){
var vec__83147 = p__83145;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83147,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83147,(1),null);
return org.browjure.deck.base.set_tooltip.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),label,cljs.core.PersistentArrayMap.EMPTY);
}));

(org.browjure.deck.base.set_tooltip.cljs$core$IFn$_invoke$arity$3 = (function (p__83155,label,p__83156){
var vec__83157 = p__83155;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83157,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83157,(1),null);
var map__83160 = p__83156;
var map__83160__$1 = (((((!((map__83160 == null))))?(((((map__83160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83160):map__83160);
var font_color = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__83160__$1,new cljs.core.Keyword(null,"font-color","font-color",-2019660285),"white");
var tooltip = document.getElementById("tooltip");
var el = (cljs.core.truth_(tooltip)?tooltip:(function (){var new_el = document.createElement("div");
new_el.setAttribute("id","tooltip");

document.body.append(new_el);

return new_el;
})());
if(cljs.core.truth_(label)){
(el.innerHTML = label);

(el.style.display = "block");

(el.style.position = "absolute");

(el.style.zIndex = (10));

(el.style.left = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((x + (20))),"px"].join(''));

(el.style.top = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((y + (20))),"px"].join(''));

return (el.style.color = font_color);
} else {
return (el.style.display = "none");
}
}));

(org.browjure.deck.base.set_tooltip.cljs$lang$maxFixedArity = 3);

org.browjure.deck.base.window_resolve = (function org$browjure$deck$base$window_resolve(symbol){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__83162_SHARP_,p2__83163_SHARP_){
return (p1__83162_SHARP_[p2__83163_SHARP_]);
}),window,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(cljs.core.namespace(symbol),"-","_"),"."),clojure.string.replace(cljs.core.name(symbol),"-","_")));
});
org.browjure.deck.base.set_hiccup_tooltip = (function org$browjure$deck$base$set_hiccup_tooltip(p__83168,hiccup){
var vec__83169 = p__83168;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83169,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83169,(1),null);
var tooltip = document.getElementById("tooltip");
var el = (cljs.core.truth_(tooltip)?tooltip:(function (){var new_el = document.createElement("div");
new_el.setAttribute("id","tooltip");

document.body.append(new_el);

return new_el;
})());
if(cljs.core.truth_(hiccup)){
(el.innerHTML = module$node_modules$react_dom$server_browser.renderToStaticMarkup(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(org.browjure.deck.base.window_resolve(new cljs.core.Symbol("sablono.interpreter","element","sablono.interpreter/element",-1789587768,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hiccup], null))));

(el.style.display = "block");

(el.style.position = "absolute");

(el.style.zIndex = (10));

(el.style.left = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((x + (20))),"px"].join(''));

return (el.style.top = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((y + (20))),"px"].join(''));
} else {
return (el.style.display = "none");
}
});
org.browjure.deck.base.compile_and_add_layer = (function org$browjure$deck$base$compile_and_add_layer(layer_props){
var compiled_layer_props = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__83173){
var vec__83174 = p__83173;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83174,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83174,(1),null);
if(cljs.core.truth_(cognitect.transit.tagged_value_QMARK_(v))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","comp","cljs.core/comp",-2137591872,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","clj->js","cljs.core/clj->js",-1490083117,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(v["rep"]),null,(1),null))], 0))))], 0)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),console.log,new cljs.core.Symbol("js","document","js/document",311343521,null),document,new cljs.core.Symbol(null,"data-filter","data-filter",819088047,null),(function (p__83177){
var map__83178 = p__83177;
var map__83178__$1 = (((((!((map__83178 == null))))?(((((map__83178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83178):map__83178);
var fp64 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83178__$1,new cljs.core.Keyword(null,"fp64","fp64",1314988535));
var filter_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83178__$1,new cljs.core.Keyword(null,"filter-size","filter-size",-437273305));
return (new module$node_modules$$deck_DOT_gl$extensions$dist$es5$index.DataFilterExtension(({"filterSize": filter_size, "fp64": fp64})));
}),new cljs.core.Symbol(null,"DataFilterExtension","DataFilterExtension",-1060952149,null),module$node_modules$$deck_DOT_gl$extensions$dist$es5$index.DataFilterExtension,new cljs.core.Symbol(null,"set-tooltip","set-tooltip",-550723715,null),org.browjure.deck.base.set_tooltip,new cljs.core.Symbol(null,"set-hiccup-tooltip","set-hiccup-tooltip",2017825951,null),org.browjure.deck.base.set_hiccup_tooltip], null),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"all","all",892129742)], null)], null))], null);
} else {
return null;
}
}),layer_props)));
var uses_functions_QMARK_ = cljs.core.some((function (p__83180){
var vec__83181 = p__83180;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83181,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83181,(1),null);
return cognitect.transit.tagged_value_QMARK_(v);
}),layer_props);
if(cljs.core.truth_(uses_functions_QMARK_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(org.browjure.deck.base.active_layers,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(layer_props),cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__83184 = new cljs.core.Keyword(null,"layer-type","layer-type",816560917).cljs$core$IFn$_invoke$arity$1(layer_props);
return (org.browjure.deck.layers.key__GT_class.cljs$core$IFn$_invoke$arity$1 ? org.browjure.deck.layers.key__GT_class.cljs$core$IFn$_invoke$arity$1(G__83184) : org.browjure.deck.layers.key__GT_class.call(null,G__83184));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"geo-json-layer","geo-json-layer",1279697285),null], null), null),new cljs.core.Keyword(null,"layer-type","layer-type",816560917).cljs$core$IFn$_invoke$arity$1(layer_props)))?cljs_bean.core.__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layer_props,compiled_layer_props], 0))):org.browjure.deck.base.assoc_cljs_data(cljs_bean.core.__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layer_props,compiled_layer_props], 0))),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(layer_props)))], null)));

return (org.browjure.deck.base.rerender.cljs$core$IFn$_invoke$arity$0 ? org.browjure.deck.base.rerender.cljs$core$IFn$_invoke$arity$0() : org.browjure.deck.base.rerender.call(null));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(org.browjure.deck.base.active_layers,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(layer_props),cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__83186 = new cljs.core.Keyword(null,"layer-type","layer-type",816560917).cljs$core$IFn$_invoke$arity$1(layer_props);
return (org.browjure.deck.layers.key__GT_class.cljs$core$IFn$_invoke$arity$1 ? org.browjure.deck.layers.key__GT_class.cljs$core$IFn$_invoke$arity$1(G__83186) : org.browjure.deck.layers.key__GT_class.call(null,G__83186));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_bean.core.__GT_js(layer_props)], null)));

return (org.browjure.deck.base.rerender.cljs$core$IFn$_invoke$arity$0 ? org.browjure.deck.base.rerender.cljs$core$IFn$_invoke$arity$0() : org.browjure.deck.base.rerender.call(null));
}
});
if((typeof org !== 'undefined') && (typeof org.browjure !== 'undefined') && (typeof org.browjure.deck !== 'undefined') && (typeof org.browjure.deck.base !== 'undefined') && (typeof org.browjure.deck.base.default_view_state !== 'undefined')){
} else {
org.browjure.deck.base.default_view_state = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"latitude","latitude",394867543),37.618889,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),-122.375,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(10),new cljs.core.Keyword(null,"bearing","bearing",-1189702101),(0),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(0),new cljs.core.Keyword(null,"width","width",-384071477),goog.object.get(window,"innerWidth"),new cljs.core.Keyword(null,"height","height",1025178622),goog.object.get(window,"innerHeight")], null));
}
org.browjure.deck.base.rerender = (function org$browjure$deck$base$rerender(){
return module$node_modules$react_dom$index.render(org.browjure.deck.layers.deck(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),"deck",new cljs.core.Keyword(null,"controller","controller",2013778659),true,new cljs.core.Keyword(null,"pickingRadius","pickingRadius",473010889),(10),new cljs.core.Keyword(null,"initialViewState","initialViewState",740431837),org.browjure.deck.base.default_view_state,new cljs.core.Keyword(null,"layers","layers",1944875032),cljs.core.to_array(cljs.core.vals(cljs.core.deref(org.browjure.deck.base.active_layers))),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.deref(org.browjure.deck.base.mapbox_token))?org.browjure.deck.layers.static_map(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),"map",new cljs.core.Keyword(null,"mapboxApiAccessToken","mapboxApiAccessToken",-842486051),cljs.core.deref(org.browjure.deck.base.mapbox_token),new cljs.core.Keyword(null,"reuseMaps","reuseMaps",-1634223454),true,new cljs.core.Keyword(null,"mapStyle","mapStyle",1133058219),"mapbox://styles/mapbox/dark-v9",new cljs.core.Keyword(null,"preventStyleDiffing","preventStyleDiffing",136247515),true], null)):null)], null)], null)),document.getElementById("app"));
});
org.browjure.deck.base.handler = (function org$browjure$deck$base$handler(p__83193){
var map__83194 = p__83193;
var map__83194__$1 = (((((!((map__83194 == null))))?(((((map__83194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83194):map__83194);
var command = map__83194__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83194__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83194__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83194__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
console.log("deck handler command: ",command);

var G__83196 = type;
var G__83196__$1 = (((G__83196 instanceof cljs.core.Keyword))?G__83196.fqn:null);
switch (G__83196__$1) {
case "mapbox-token":
if(cljs.core.truth_(cljs.core.deref(org.browjure.deck.base.mapbox_token))){
return null;
} else {
return cljs.core.reset_BANG_(org.browjure.deck.base.mapbox_token,payload);
}

break;
case "register-plugin":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(org.browjure.base.registry,cljs.core.update,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__83198){
var vec__83199 = p__83198;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83199,(0),null);
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83199,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("org.browjure.deck.layers",cljs.core.name(key)),class$], null);
}),org.browjure.deck.layers.key__GT_class)),new cljs.core.Symbol("org.browjure.deck.layers","deck","org.browjure.deck.layers/deck",-406317351,null),org.browjure.deck.layers.deck,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol("org.browjure.deck.layers","static-map","org.browjure.deck.layers/static-map",280007178,null),org.browjure.deck.layers.static_map], 0))], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"mapbox-token","mapbox-token",1742898605).cljs$core$IFn$_invoke$arity$1(payload))){
return cljs.core.reset_BANG_(org.browjure.deck.base.mapbox_token,new cljs.core.Keyword(null,"mapbox-token","mapbox-token",1742898605).cljs$core$IFn$_invoke$arity$1(payload));
} else {
return null;
}

break;
case "visualize":
org.browjure.deck.base.compile_and_add_layer(payload);

return org.browjure.deck.base.rerender();

break;
case "erase":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(org.browjure.deck.base.active_layers,cljs.core.dissoc,payload);

return org.browjure.deck.base.rerender();

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__83196__$1)].join('')));

}
});
org.browjure.deck.base.compile = (function org$browjure$deck$base$compile(form){
return sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),console.log,new cljs.core.Symbol("js","document","js/document",311343521,null),document,new cljs.core.Symbol(null,"set-tooltip","set-tooltip",-550723715,null),org.browjure.deck.base.set_tooltip,new cljs.core.Symbol(null,"data-filter","data-filter",819088047,null),(function (p__83206){
var map__83207 = p__83206;
var map__83207__$1 = (((((!((map__83207 == null))))?(((((map__83207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83207):map__83207);
var fp64 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83207__$1,new cljs.core.Keyword(null,"fp64","fp64",1314988535));
var filter_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83207__$1,new cljs.core.Keyword(null,"filter-size","filter-size",-437273305));
return (new module$node_modules$$deck_DOT_gl$extensions$dist$es5$index.DataFilterExtension(({"filterSize": filter_size, "fp64": fp64})));
}),new cljs.core.Symbol(null,"DataFilterExtension","DataFilterExtension",-1060952149,null),module$node_modules$$deck_DOT_gl$extensions$dist$es5$index.DataFilterExtension,new cljs.core.Symbol(null,"set-path-value","set-path-value",424354368,null),org.browjure.state.set_path_value], null),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"all","all",892129742)], null)], null));
});
org.browjure.deck.base.compile_layer_props = (function org$browjure$deck$base$compile_layer_props(layer_props){
var compiled_layer_props = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__83230){
var vec__83231 = p__83230;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83231,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83231,(1),null);
if(cljs.core.truth_(cognitect.transit.tagged_value_QMARK_(v))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","comp","cljs.core/comp",-2137591872,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","clj->js","cljs.core/clj->js",-1490083117,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(v["rep"]),null,(1),null))], 0))))], 0)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),console.log,new cljs.core.Symbol("js","document","js/document",311343521,null),document,new cljs.core.Symbol(null,"data-filter","data-filter",819088047,null),(function (p__83245){
var map__83246 = p__83245;
var map__83246__$1 = (((((!((map__83246 == null))))?(((((map__83246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83246):map__83246);
var fp64 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83246__$1,new cljs.core.Keyword(null,"fp64","fp64",1314988535));
var filter_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83246__$1,new cljs.core.Keyword(null,"filter-size","filter-size",-437273305));
return (new module$node_modules$$deck_DOT_gl$extensions$dist$es5$index.DataFilterExtension(({"filterSize": filter_size, "fp64": fp64})));
}),new cljs.core.Symbol(null,"DataFilterExtension","DataFilterExtension",-1060952149,null),module$node_modules$$deck_DOT_gl$extensions$dist$es5$index.DataFilterExtension,new cljs.core.Symbol(null,"set-tooltip","set-tooltip",-550723715,null),org.browjure.deck.base.set_tooltip,new cljs.core.Symbol(null,"set-path-value","set-path-value",424354368,null),org.browjure.state.set_path_value], null),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"all","all",892129742)], null)], null))], null);
} else {
return null;
}
}),layer_props)));
var uses_functions_QMARK_ = cljs.core.some((function (p__83261){
var vec__83262 = p__83261;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83262,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83262,(1),null);
return cognitect.transit.tagged_value_QMARK_(v);
}),layer_props);
if(cljs.core.truth_(uses_functions_QMARK_)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__83268 = new cljs.core.Keyword(null,"layer-type","layer-type",816560917).cljs$core$IFn$_invoke$arity$1(layer_props);
return (org.browjure.deck.layers.key__GT_class.cljs$core$IFn$_invoke$arity$1 ? org.browjure.deck.layers.key__GT_class.cljs$core$IFn$_invoke$arity$1(G__83268) : org.browjure.deck.layers.key__GT_class.call(null,G__83268));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"geo-json-layer","geo-json-layer",1279697285),null], null), null),new cljs.core.Keyword(null,"layer-type","layer-type",816560917).cljs$core$IFn$_invoke$arity$1(layer_props)))?cljs_bean.core.__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layer_props,compiled_layer_props], 0))):org.browjure.deck.base.assoc_cljs_data(cljs_bean.core.__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layer_props,compiled_layer_props], 0))),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(layer_props)))], null));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__83275 = new cljs.core.Keyword(null,"layer-type","layer-type",816560917).cljs$core$IFn$_invoke$arity$1(layer_props);
return (org.browjure.deck.layers.key__GT_class.cljs$core$IFn$_invoke$arity$1 ? org.browjure.deck.layers.key__GT_class.cljs$core$IFn$_invoke$arity$1(G__83275) : org.browjure.deck.layers.key__GT_class.call(null,G__83275));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_bean.core.__GT_js(layer_props)], null));
}
});
org.browjure.deck.base.embed_component = (function org$browjure$deck$base$embed_component(var_args){
var args__4742__auto__ = [];
var len__4736__auto___83546 = arguments.length;
var i__4737__auto___83547 = (0);
while(true){
if((i__4737__auto___83547 < len__4736__auto___83546)){
args__4742__auto__.push((arguments[i__4737__auto___83547]));

var G__83548 = (i__4737__auto___83547 + (1));
i__4737__auto___83547 = G__83548;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return org.browjure.deck.base.embed_component.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(org.browjure.deck.base.embed_component.cljs$core$IFn$_invoke$arity$variadic = (function (config_or_layers){
var layers = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"layer-type","layer-type",816560917),config_or_layers);
var config = (function (){var or__4126__auto__ = cljs.core.some(cljs.core.identity,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,config_or_layers));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"600px",new cljs.core.Keyword(null,"height","height",1025178622),"600px"], null),new cljs.core.Keyword(null,"ref","ref",1289896967),(function (c){
if(cljs.core.truth_(c)){
return module$node_modules$react_dom$index.render(org.browjure.deck.layers.deck(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"key","key",-1516042587),"deck",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"controller","controller",2013778659),true,new cljs.core.Keyword(null,"container","container",-1736937707),c,new cljs.core.Keyword(null,"pickingRadius","pickingRadius",473010889),(10),new cljs.core.Keyword(null,"initialViewState","initialViewState",740431837),(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"initial-view-state","initial-view-state",1367461903).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return org.browjure.deck.base.default_view_state;
}
})(),new cljs.core.Keyword(null,"layers","layers",1944875032),cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(org.browjure.deck.base.compile_layer_props,layers)),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.deref(org.browjure.deck.base.mapbox_token);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"mapbox-token","mapbox-token",1742898605).cljs$core$IFn$_invoke$arity$1(config);
}
})())?org.browjure.deck.layers.static_map(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),"map",new cljs.core.Keyword(null,"mapboxApiAccessToken","mapboxApiAccessToken",-842486051),(function (){var or__4126__auto__ = cljs.core.deref(org.browjure.deck.base.mapbox_token);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"mapbox-token","mapbox-token",1742898605).cljs$core$IFn$_invoke$arity$1(config);
}
})(),new cljs.core.Keyword(null,"reuseMaps","reuseMaps",-1634223454),true,new cljs.core.Keyword(null,"mapStyle","mapStyle",1133058219),"mapbox://styles/mapbox/dark-v9",new cljs.core.Keyword(null,"preventStyleDiffing","preventStyleDiffing",136247515),true], null)):null)], null)], null)),c);
} else {
return null;
}
})], null),new cljs.core.Keyword(null,"container-props","container-props",-1692729191).cljs$core$IFn$_invoke$arity$1(config)], 0))], null);
}));

(org.browjure.deck.base.embed_component.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(org.browjure.deck.base.embed_component.cljs$lang$applyTo = (function (seq83281){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq83281));
}));


org.browjure.deck.base.deck_component = (function (){var G__83303 = (function org$browjure$deck$base$deck_component(props__60294__auto__,maybe_ref__60295__auto__){
var vec__83306 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__60294__auto__),maybe_ref__60295__auto__], null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83306,(0),null);

var use_path_sub = org.browjure.deck.base.window_resolve(new cljs.core.Symbol("org.browjure.state","use-path-sub","org.browjure.state/use-path-sub",2030957290,null));
var dep_values = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__83312){
var vec__83313 = p__83312;
var dep_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83313,(0),null);
var dep_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83313,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_name,(use_path_sub.cljs$core$IFn$_invoke$arity$1 ? use_path_sub.cljs$core$IFn$_invoke$arity$1(dep_path) : use_path_sub.call(null,dep_path))], null);
}),new cljs.core.Keyword("dataset","dependencies","dataset/dependencies",2019679717).cljs$core$IFn$_invoke$arity$1(props))));
var view_state = (function (){var G__83316 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view-state","view-state",-976675614)], null);
return (use_path_sub.cljs$core$IFn$_invoke$arity$1 ? use_path_sub.cljs$core$IFn$_invoke$arity$1(G__83316) : use_path_sub.call(null,G__83316));
})();
var map__83310 = props;
var map__83310__$1 = (((((!((map__83310 == null))))?(((((map__83310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83310):map__83310);
var data__GT_layers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83310__$1,new cljs.core.Keyword("deck","data->layers","deck/data->layers",-2136602585));
var data__GT_layers__$1 = org.browjure.deck.base.compile((data__GT_layers["rep"]));
var container_props_fn = (cljs.core.truth_(new cljs.core.Keyword(null,"container-props-fn","container-props-fn",1109831263).cljs$core$IFn$_invoke$arity$1(props))?org.browjure.deck.base.compile((new cljs.core.Keyword(null,"container-props-fn","container-props-fn",1109831263).cljs$core$IFn$_invoke$arity$1(props)["rep"])):(function (){
return cljs.core.PersistentArrayMap.EMPTY;
}));
var container_props = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"container-props","container-props",-1692729191).cljs$core$IFn$_invoke$arity$1(props),(container_props_fn.cljs$core$IFn$_invoke$arity$1 ? container_props_fn.cljs$core$IFn$_invoke$arity$1(dep_values) : container_props_fn.call(null,dep_values))], 0));
return helix.core.get_react().createElement("div",helix.impl.props.merge_obj((function (){var obj83538 = ({"key":["deck",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props))].join(''),"ref":(function (c){
if(cljs.core.truth_(c)){
return module$node_modules$react_dom$index.render(org.browjure.deck.layers.deck(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"key","key",-1516042587),"deck",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"controller","controller",2013778659),true,new cljs.core.Keyword(null,"container","container",-1736937707),c,new cljs.core.Keyword(null,"pickingRadius","pickingRadius",473010889),(10),new cljs.core.Keyword(null,"initialViewState","initialViewState",740431837),(function (){var or__4126__auto__ = cljs.core.clj__GT_js(view_state);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"initial-view-state","initial-view-state",1367461903).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return org.browjure.deck.base.default_view_state;
}
}
})(),new cljs.core.Keyword(null,"layers","layers",1944875032),cljs.core.to_array(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__83539){
var vec__83540 = p__83539;
var layer_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83540,(0),null);
var layers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83540,(1),null);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (layer){
return org.browjure.deck.base.compile_layer_props(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(layer,new cljs.core.Keyword(null,"layer-type","layer-type",816560917),layer_type));
}),layers));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(data__GT_layers__$1.cljs$core$IFn$_invoke$arity$1 ? data__GT_layers__$1.cljs$core$IFn$_invoke$arity$1(dep_values) : data__GT_layers__$1.call(null,dep_values))], 0))),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.deref(org.browjure.deck.base.mapbox_token);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"mapbox-token","mapbox-token",1742898605).cljs$core$IFn$_invoke$arity$1(props);
}
})())?org.browjure.deck.layers.static_map(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),"map",new cljs.core.Keyword(null,"mapboxApiAccessToken","mapboxApiAccessToken",-842486051),(function (){var or__4126__auto__ = cljs.core.deref(org.browjure.deck.base.mapbox_token);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"mapbox-token","mapbox-token",1742898605).cljs$core$IFn$_invoke$arity$1(props);
}
})(),new cljs.core.Keyword(null,"reuseMaps","reuseMaps",-1634223454),true,new cljs.core.Keyword(null,"mapStyle","mapStyle",1133058219),"mapbox://styles/mapbox/dark-v9",new cljs.core.Keyword(null,"preventStyleDiffing","preventStyleDiffing",136247515),true], null)):null)], null)], null)),c);
} else {
return null;
}
})});
return obj83538;
})(),helix.impl.props._native_props.cljs$core$IFn$_invoke$arity$1(container_props)));
});
if(goog.DEBUG === true){
var G__83543 = G__83303;
goog.object.set(G__83543,"displayName","org.browjure.deck.base/deck-component");

return G__83543;
} else {
return G__83303;
}
})();




//# sourceMappingURL=org.browjure.deck.base.js.map
