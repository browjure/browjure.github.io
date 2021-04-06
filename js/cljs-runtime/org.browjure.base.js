goog.provide('org.browjure.base');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof org !== 'undefined') && (typeof org.browjure !== 'undefined') && (typeof org.browjure.base !== 'undefined') && (typeof org.browjure.base.router_ !== 'undefined')){
} else {
org.browjure.base.router_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
org.browjure.base.stop_router_BANG_ = (function org$browjure$base$stop_router_BANG_(){
var temp__5753__auto__ = cljs.core.deref(org.browjure.base.router_);
if(cljs.core.truth_(temp__5753__auto__)){
var stop_f = temp__5753__auto__;
return (stop_f.cljs$core$IFn$_invoke$arity$0 ? stop_f.cljs$core$IFn$_invoke$arity$0() : stop_f.call(null));
} else {
return null;
}
});
org.browjure.base._QMARK_csrf_token = (function (){var temp__5753__auto__ = document.getElementById("sente-csrf-token");
if(cljs.core.truth_(temp__5753__auto__)){
var el = temp__5753__auto__;
return el.getAttribute("data-csrf-token");
} else {
return null;
}
})();
var packer_81480 = taoensso.sente.packers.transit.get_transit_packer.cljs$core$IFn$_invoke$arity$0();
var map__81438_81481 = taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic("/chsk",org.browjure.base._QMARK_csrf_token,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),org.browjure.base._QMARK_csrf_token,new cljs.core.Keyword(null,"packer","packer",66077544),packer_81480], null)], 0));
var map__81438_81482__$1 = (((((!((map__81438_81481 == null))))?(((((map__81438_81481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81438_81481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__81438_81481):map__81438_81481);
var chsk_81483 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81438_81482__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv_81484 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81438_81482__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn_81485 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81438_81482__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state_81486 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81438_81482__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
org.browjure.base.chsk = chsk_81483;

org.browjure.base.ch_chsk = ch_recv_81484;

org.browjure.base.chsk_send_BANG_ = send_fn_81485;

org.browjure.base.chsk_state = state_81486;
org.browjure.base.registry = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hiccup-fn","hiccup-fn",223212621),org.browjure.base.make_component,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"render","render",232498073,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol("js","document","js/document",311343521,null),new cljs.core.Symbol(null,"use-combined-sub","use-combined-sub",764757410,null),new cljs.core.Symbol("js","window","js/window",-1929916804,null),new cljs.core.Symbol(null,"window-resolve","window-resolve",346312639,null),new cljs.core.Symbol(null,"set-path-value","set-path-value",424354368,null),new cljs.core.Symbol(null,"use-path-sub","use-path-sub",-792752499,null),new cljs.core.Symbol(null,"gset","gset",558136426,null),new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),new cljs.core.Symbol("hx.react","f","hx.react/f",-1228046660,null),new cljs.core.Symbol(null,"gget","gget",-757535927,null)],[module$node_modules$react_dom$index.render,helix.core.$,document,org.browjure.state.use_combined_sub,window,org.browjure.state.window_resolve,org.browjure.state.set_path_value,org.browjure.state.use_path_sub,goog.object.set,console.log,hx.react.f,goog.object.get])], 0))], null));
org.browjure.base.make_component = (function org$browjure$base$make_component(var_args){
var args__4742__auto__ = [];
var len__4736__auto___81488 = arguments.length;
var i__4737__auto___81489 = (0);
while(true){
if((i__4737__auto___81489 < len__4736__auto___81488)){
args__4742__auto__.push((arguments[i__4737__auto___81489]));

var G__81490 = (i__4737__auto___81489 + (1));
i__4737__auto___81489 = G__81490;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return org.browjure.base.make_component.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(org.browjure.base.make_component.cljs$core$IFn$_invoke$arity$variadic = (function (argss){
console.log(argss,cljs.core.second(argss),new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(org.browjure.base.registry)));

var compiled_component_fn = org.browjure.state.compile(cljs.core.first(argss),new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(org.browjure.base.registry)));
return module$node_modules$react$index.createElement(compiled_component_fn,({}),[]);
}));

(org.browjure.base.make_component.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(org.browjure.base.make_component.cljs$lang$applyTo = (function (seq81440){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq81440));
}));

org.browjure.base.browjure_components__GT_react_element = (function org$browjure$base$browjure_components__GT_react_element(form){
if(cljs.core.truth_(((cljs.core.vector_QMARK_(form))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(org.browjure.base.registry),cljs.core.first(form)):false))){
var component = org.browjure.state.window_resolve(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(org.browjure.base.registry),cljs.core.first(form)));
console.log(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(org.browjure.base.registry),cljs.core.first(form)));

if(cljs.core.truth_((function (){var and__4115__auto__ = component;
if(cljs.core.truth_(and__4115__auto__)){
return component.displayName;
} else {
return and__4115__auto__;
}
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(helix.core.$,component,cljs.core.rest(form));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(org.browjure.state.window_resolve(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(org.browjure.base.registry),cljs.core.first(form))),cljs.core.rest(form));
}
} else {
return form;

}
});
org.browjure.base.handle_command = (function org$browjure$base$handle_command(command){
var G__81442 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(command);
var G__81442__$1 = (((G__81442 instanceof cljs.core.Keyword))?G__81442.fqn:null);
switch (G__81442__$1) {
case "clear-cache":
return window.location.reload(true);

break;
case "register-plugin":
if(cljs.core.truth_(new cljs.core.Keyword(null,"base-path","base-path",495760020).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(command)))){
document.head.append((function (){var G__81443 = document.createElement("script");
G__81443.setAttribute("type","text/javascript");

G__81443.setAttribute("src",new cljs.core.Keyword(null,"base-path","base-path",495760020).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(command)));

return G__81443;
})());
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(org.browjure.base.registry,cljs.core.merge,new cljs.core.Keyword(null,"hiccup-tag->factory-symbol","hiccup-tag->factory-symbol",2002770270).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sablono","sablono",-1448501015).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(command))));

return setTimeout((function (){
var id = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(command));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(command));
}
})();
var base_path_handler = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(command),"browjure"))?((((window["org"])[id])["base"])["handler"]):(((((window["org"])["browjure"])[clojure.string.replace(id,"-","_")])["base"])["handler"]));
console.log("calling base handler with register plugin command",id,command);

return (base_path_handler.cljs$core$IFn$_invoke$arity$1 ? base_path_handler.cljs$core$IFn$_invoke$arity$1(command) : base_path_handler.call(null,command));
}),(1000));

break;
case "view-sablono":
var hiccup = clojure.walk.postwalk(org.browjure.base.browjure_components__GT_react_element,command);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(org.browjure.state.window_resolve(new cljs.core.Symbol("org.browjure.sablono.base","handler","org.browjure.sablono.base/handler",1361588756,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hiccup], null));

break;
case "set-path-value":
return org.browjure.state.set_path_value(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(command)),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(command)));

break;
default:
var id = cljs.core.name(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(command));
console.log("else",command);

var fexpr__81444 = (((((window["org"])["browjure"])[clojure.string.replace(id,"-","_")])["base"])["handler"]);
return (fexpr__81444.cljs$core$IFn$_invoke$arity$1 ? fexpr__81444.cljs$core$IFn$_invoke$arity$1(command) : fexpr__81444.call(null,command));

}
});
org.browjure.base.handler = (function org$browjure$base$handler(msg){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),cljs.core.first(new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(msg)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304),cljs.core.first(cljs.core.second(new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(msg))))))){
var vec__81445 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(msg);
var sente_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81445,(0),null);
var vec__81448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81445,(1),null);
var browjure_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81448,(0),null);
var lib_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81448,(1),null);
console.log(cljs.core.deref(org.browjure.base.registry));

console.log("event type",cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"view-sablono","view-sablono",1410763305),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(lib_event)),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(lib_event),lib_event);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(browjure_event,new cljs.core.Keyword("event","echo","event/echo",542994207))){
return org.browjure.base.handle_command(lib_event);
} else {
return null;
}
} else {
return null;
}
});
org.browjure.base.start_router_BANG_ = (function org$browjure$base$start_router_BANG_(){
org.browjure.base.stop_router_BANG_();

return cljs.core.reset_BANG_(org.browjure.base.router_,taoensso.sente.start_client_chsk_router_BANG_(org.browjure.base.ch_chsk,org.browjure.base.handler));
});
org.browjure.base.start_router_BANG_();
org.browjure.base.load_commands_BANG_ = (function org$browjure$base$load_commands_BANG_(){
return fetch("commands.json").then((function (response){
return response.json().then((function (number_of_commands){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
return setTimeout((function (){
return fetch(["command-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),".json"].join('')).then((function (p1__81466_SHARP_){
return p1__81466_SHARP_.text().then((function (command_str){
console.log("handling command: ",i);

return org.browjure.base.handle_command(cognitect.transit.read(cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570)),command_str));
}));
}));
}),((1000) * i));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(number_of_commands)));
}));
}));
});
var log_81513 = window.console.log;
(window.console.log = (function (){
var G__81475_81514 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("browjure","log","browjure/log",-877135194),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arguments], 0))], null);
(org.browjure.base.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1 ? org.browjure.base.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1(G__81475_81514) : org.browjure.base.chsk_send_BANG_.call(null,G__81475_81514));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(log_81513,arguments);
}));
(window.onerror = (function (){
var G__81476_81515 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("browjure","error","browjure/error",-1401241814),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arguments], 0))], null);
(org.browjure.base.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1 ? org.browjure.base.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1(G__81476_81515) : org.browjure.base.chsk_send_BANG_.call(null,G__81476_81515));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(window.console.error,arguments);
}));

//# sourceMappingURL=org.browjure.base.js.map
