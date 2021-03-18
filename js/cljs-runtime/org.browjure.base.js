goog.provide('org.browjure.base');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
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
var packer_72443 = taoensso.sente.packers.transit.get_transit_packer.cljs$core$IFn$_invoke$arity$0();
var map__72355_72444 = taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic("/chsk",org.browjure.base._QMARK_csrf_token,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),org.browjure.base._QMARK_csrf_token,new cljs.core.Keyword(null,"packer","packer",66077544),packer_72443], null)], 0));
var map__72355_72445__$1 = (((((!((map__72355_72444 == null))))?(((((map__72355_72444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72355_72444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72355_72444):map__72355_72444);
var chsk_72446 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72355_72445__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv_72447 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72355_72445__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn_72448 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72355_72445__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state_72449 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72355_72445__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
org.browjure.base.chsk = chsk_72446;

org.browjure.base.ch_chsk = ch_recv_72447;

org.browjure.base.chsk_send_BANG_ = send_fn_72448;

org.browjure.base.chsk_state = state_72449;

org.browjure.base.control_component = (function (){var G__72359 = (function org$browjure$base$control_component(props__61744__auto__,maybe_ref__61745__auto__){
var vec__72360 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__61744__auto__),maybe_ref__61745__auto__], null);
var map__72363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72360,(0),null);
var map__72363__$1 = (((((!((map__72363 == null))))?(((((map__72363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72363):map__72363);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72363__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72363__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72363__$1,new cljs.core.Keyword(null,"value","value",305978217));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72363__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var onChange = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72363__$1,new cljs.core.Keyword(null,"onChange","onChange",-312891301));

var on_change = sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(onChange["rep"])], 0)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),console.log,new cljs.core.Symbol("js","document","js/document",311343521,null),document], null),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"all","all",892129742)], null)], null));
var values = org.browjure.state.use_path_sub(path,value);
var G__72365 = type;
switch (G__72365) {
case "edn-multi-checkbox":
return helix.core.get_react().createElement("div",(function (){var obj72381 = ({"style":helix.impl.props.native_style(style)});
return obj72381;
})(),(function (){var iter__4529__auto__ = (function org$browjure$base$control_component_$_iter__72383(s__72384){
return (new cljs.core.LazySeq(null,(function (){
var s__72384__$1 = s__72384;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__72384__$1);
if(temp__5753__auto__){
var s__72384__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__72384__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__72384__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__72386 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__72385 = (0);
while(true){
if((i__72385 < size__4528__auto__)){
var vec__72393 = cljs.core._nth(c__4527__auto__,i__72385);
var control_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72393,(0),null);
var control_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72393,(1),null);
cljs.core.chunk_append(b__72386,helix.core.get_react().createElement("label",(function (){var obj72407 = ({"key":control_name});
return obj72407;
})(),control_name,helix.core.get_react().createElement("input",(function (){var obj72412 = ({"type":"checkbox","checked":control_val,"onChange":((function (i__72385,vec__72393,control_name,control_val,c__4527__auto__,size__4528__auto__,b__72386,s__72384__$2,temp__5753__auto__,G__72365,on_change,values,vec__72360,map__72363,map__72363__$1,type,path,value,style,onChange){
return (function (e){
var new_values = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(values,control_name,e.target.checked);
org.browjure.state.set_path_value(path,new_values);

return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(new_values) : on_change.call(null,new_values));
});})(i__72385,vec__72393,control_name,control_val,c__4527__auto__,size__4528__auto__,b__72386,s__72384__$2,temp__5753__auto__,G__72365,on_change,values,vec__72360,map__72363,map__72363__$1,type,path,value,style,onChange))
});
return obj72412;
})())));

var G__72451 = (i__72385 + (1));
i__72385 = G__72451;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__72386),org$browjure$base$control_component_$_iter__72383(cljs.core.chunk_rest(s__72384__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__72386),null);
}
} else {
var vec__72413 = cljs.core.first(s__72384__$2);
var control_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72413,(0),null);
var control_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72413,(1),null);
return cljs.core.cons(helix.core.get_react().createElement("label",(function (){var obj72417 = ({"key":control_name});
return obj72417;
})(),control_name,helix.core.get_react().createElement("input",(function (){var obj72419 = ({"type":"checkbox","checked":control_val,"onChange":((function (vec__72413,control_name,control_val,s__72384__$2,temp__5753__auto__,G__72365,on_change,values,vec__72360,map__72363,map__72363__$1,type,path,value,style,onChange){
return (function (e){
var new_values = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(values,control_name,e.target.checked);
org.browjure.state.set_path_value(path,new_values);

return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(new_values) : on_change.call(null,new_values));
});})(vec__72413,control_name,control_val,s__72384__$2,temp__5753__auto__,G__72365,on_change,values,vec__72360,map__72363,map__72363__$1,type,path,value,style,onChange))
});
return obj72419;
})())),org$browjure$base$control_component_$_iter__72383(cljs.core.rest(s__72384__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(values);
})());

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__72365)].join('')));

}
});
if(goog.DEBUG === true){
var G__72420 = G__72359;
goog.object.set(G__72420,"displayName","org.browjure.base/control-component");

return G__72420;
} else {
return G__72359;
}
})();



org.browjure.base.hiccup_registry = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("browjure","control","browjure/control",-1708403734),new cljs.core.Symbol("org.browjure.base","control-component","org.browjure.base/control-component",1901512152,null)], null));
org.browjure.base.window_resolve = (function org$browjure$base$window_resolve(symbol){
console.log("split ns",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(cljs.core.namespace(symbol),"-","_"),"."),clojure.string.replace(cljs.core.name(symbol),"-","_")));

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__72421_SHARP_,p2__72422_SHARP_){
return (p1__72421_SHARP_[p2__72422_SHARP_]);
}),window,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(cljs.core.namespace(symbol),"-","_"),"."),clojure.string.replace(cljs.core.name(symbol),"-","_")));
});
org.browjure.base.connected = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
org.browjure.base.handle_command = (function org$browjure$base$handle_command(command){
console.log(command);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"register-plugin","register-plugin",1705269136),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(command))){
cljs.core.reset_BANG_(org.browjure.base.connected,true);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-cache","clear-cache",423074668),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(command))){
return window.location.reload(true);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"register-plugin","register-plugin",1705269136),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(command))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"base-path","base-path",495760020).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(command)))){
document.head.append((function (){var G__72425 = document.createElement("script");
G__72425.setAttribute("type","text/javascript");

G__72425.setAttribute("src",new cljs.core.Keyword(null,"base-path","base-path",495760020).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(command)));

return G__72425;
})());
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(org.browjure.base.hiccup_registry,cljs.core.merge,new cljs.core.Keyword(null,"hiccup-tag->factory-symbol","hiccup-tag->factory-symbol",2002770270).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sablono","sablono",-1448501015).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(command))));

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
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"view-sablono","view-sablono",1410763305),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(command))){
var react_componentized = clojure.walk.postwalk((function (p1__72423_SHARP_){
if(((cljs.core.vector_QMARK_(p1__72423_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"react-fn-component","react-fn-component",-1964010316),cljs.core.first(p1__72423_SHARP_))))){
var make_component = org.browjure.base.window_resolve(new cljs.core.Symbol("org.browjure.material-ui.base","make-component","org.browjure.material-ui.base/make-component",2014286145,null));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"built-react-fn-component","built-react-fn-component",-974186473),(function (){var G__72426 = cljs.core.second(p1__72423_SHARP_);
return (make_component.cljs$core$IFn$_invoke$arity$1 ? make_component.cljs$core$IFn$_invoke$arity$1(G__72426) : make_component.call(null,G__72426));
})()], null),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),p1__72423_SHARP_)));
} else {
return p1__72423_SHARP_;

}
}),command);
var hiccup = clojure.walk.postwalk((function (p1__72424_SHARP_){
if(cljs.core.truth_(((cljs.core.vector_QMARK_(p1__72424_SHARP_))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(org.browjure.base.hiccup_registry),cljs.core.first(p1__72424_SHARP_)):false))){
var component = org.browjure.base.window_resolve(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(org.browjure.base.hiccup_registry),cljs.core.first(p1__72424_SHARP_)));
if(cljs.core.truth_(component.displayName)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(helix.core.$,component,cljs.core.rest(p1__72424_SHARP_));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(org.browjure.base.window_resolve(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(org.browjure.base.hiccup_registry),cljs.core.first(p1__72424_SHARP_))),cljs.core.rest(p1__72424_SHARP_));
}
} else {
if(((cljs.core.vector_QMARK_(p1__72424_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__72424_SHARP_),new cljs.core.Keyword(null,"built-react-fn-component","built-react-fn-component",-974186473))))){
var vec__72427 = p1__72424_SHARP_;
var seq__72428 = cljs.core.seq(vec__72427);
var first__72429 = cljs.core.first(seq__72428);
var seq__72428__$1 = cljs.core.next(seq__72428);
var _ = first__72429;
var first__72429__$1 = cljs.core.first(seq__72428__$1);
var seq__72428__$2 = cljs.core.next(seq__72428__$1);
var element = first__72429__$1;
var props = seq__72428__$2;
var G__72430 = cljs.core.clj__GT_js(cljs.core.first(props));
return (element.cljs$core$IFn$_invoke$arity$1 ? element.cljs$core$IFn$_invoke$arity$1(G__72430) : element.call(null,G__72430));
} else {
return p1__72424_SHARP_;

}
}
}),react_componentized);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(org.browjure.base.window_resolve(new cljs.core.Symbol("org.browjure.sablono.base","handler","org.browjure.sablono.base/handler",1361588756,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hiccup], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-path-value","set-path-value",-1216177159),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(command))){
return org.browjure.state.set_path_value(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(command)),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(command)));
} else {
var id = cljs.core.name(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(command));
console.log("else",command);

var fexpr__72431 = (((((window["org"])["browjure"])[clojure.string.replace(id,"-","_")])["base"])["handler"]);
return (fexpr__72431.cljs$core$IFn$_invoke$arity$1 ? fexpr__72431.cljs$core$IFn$_invoke$arity$1(command) : fexpr__72431.call(null,command));

}
}
}
}
});
org.browjure.base.make_component = (function org$browjure$base$make_component(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72452 = arguments.length;
var i__4737__auto___72453 = (0);
while(true){
if((i__4737__auto___72453 < len__4736__auto___72452)){
args__4742__auto__.push((arguments[i__4737__auto___72453]));

var G__72454 = (i__4737__auto___72453 + (1));
i__4737__auto___72453 = G__72454;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return org.browjure.base.make_component.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(org.browjure.base.make_component.cljs$core$IFn$_invoke$arity$variadic = (function (material_component_fn,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){
return module$node_modules$react$index.createElement(org.browjure.state.compile(clojure.walk.postwalk((function (form){
if(((cljs.core.vector_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(form),new cljs.core.Keyword(null,"style","style",-496642736))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(form),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"clj->js","clj->js",-1880244676,null),null,(1),null)),(new cljs.core.List(null,cljs.core.second(form),null,(1),null)))))], null);
} else {
return form;
}
}),material_component_fn)));
}),rest);
}));

(org.browjure.base.make_component.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(org.browjure.base.make_component.cljs$lang$applyTo = (function (seq72432){
var G__72433 = cljs.core.first(seq72432);
var seq72432__$1 = cljs.core.next(seq72432);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72433,seq72432__$1);
}));

org.browjure.base.handler = (function org$browjure$base$handler(msg){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),cljs.core.first(new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(msg)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304),cljs.core.first(cljs.core.second(new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(msg))))))){
var vec__72434 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(msg);
var sente_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72434,(0),null);
var vec__72437 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72434,(1),null);
var browjure_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72437,(0),null);
var lib_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72437,(1),null);
console.log(cljs.core.deref(org.browjure.base.hiccup_registry));

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
setTimeout((function (){
console.log("connected to back-end?",cljs.core.deref(org.browjure.base.connected));

if(cljs.core.not(cljs.core.deref(org.browjure.base.connected))){
return fetch("commands.json").then((function (response){
return response.json().then((function (number_of_commands){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
return setTimeout((function (){
return fetch(["command-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),".json"].join('')).then((function (p1__72440_SHARP_){
return p1__72440_SHARP_.text().then((function (command_str){
console.log("handling command: ",i);

return org.browjure.base.handle_command(cognitect.transit.read(cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570)),command_str));
}));
}));
}),((1000) * i));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(number_of_commands)));
}));
}));
} else {
return null;
}
}),(5000));
var log_72455 = window.console.log;
(window.console.log = (function (){
var G__72441_72456 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("browjure","log","browjure/log",-877135194),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arguments], 0))], null);
(org.browjure.base.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1 ? org.browjure.base.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1(G__72441_72456) : org.browjure.base.chsk_send_BANG_.call(null,G__72441_72456));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(log_72455,arguments);
}));
(window.onerror = (function (){
var G__72442_72457 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("browjure","error","browjure/error",-1401241814),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arguments], 0))], null);
(org.browjure.base.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1 ? org.browjure.base.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1(G__72442_72457) : org.browjure.base.chsk_send_BANG_.call(null,G__72442_72457));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(window.console.error,arguments);
}));

//# sourceMappingURL=org.browjure.base.js.map
