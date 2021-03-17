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
var packer_84243 = taoensso.sente.packers.transit.get_transit_packer.cljs$core$IFn$_invoke$arity$0();
var map__83854_84244 = taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic("/chsk",org.browjure.base._QMARK_csrf_token,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),org.browjure.base._QMARK_csrf_token,new cljs.core.Keyword(null,"packer","packer",66077544),packer_84243], null)], 0));
var map__83854_84245__$1 = (((((!((map__83854_84244 == null))))?(((((map__83854_84244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83854_84244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83854_84244):map__83854_84244);
var chsk_84246 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83854_84245__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv_84247 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83854_84245__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn_84248 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83854_84245__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state_84249 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83854_84245__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
org.browjure.base.chsk = chsk_84246;

org.browjure.base.ch_chsk = ch_recv_84247;

org.browjure.base.chsk_send_BANG_ = send_fn_84248;

org.browjure.base.chsk_state = state_84249;

org.browjure.base.control_component = (function (){var G__83858 = (function org$browjure$base$control_component(props__69390__auto__,maybe_ref__69391__auto__){
var vec__83859 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__69390__auto__),maybe_ref__69391__auto__], null);
var map__83862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83859,(0),null);
var map__83862__$1 = (((((!((map__83862 == null))))?(((((map__83862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83862):map__83862);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83862__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83862__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83862__$1,new cljs.core.Keyword(null,"value","value",305978217));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83862__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var onChange = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83862__$1,new cljs.core.Keyword(null,"onChange","onChange",-312891301));

var on_change = sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(onChange["rep"])], 0)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),console.log,new cljs.core.Symbol("js","document","js/document",311343521,null),document], null),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"all","all",892129742)], null)], null));
var values = org.browjure.state.use_path_sub(path,value);
var G__83864 = type;
switch (G__83864) {
case "edn-multi-checkbox":
return helix.core.get_react().createElement("div",(function (){var obj84201 = ({"style":helix.impl.props.native_style(style)});
return obj84201;
})(),(function (){var iter__4529__auto__ = (function org$browjure$base$control_component_$_iter__84202(s__84203){
return (new cljs.core.LazySeq(null,(function (){
var s__84203__$1 = s__84203;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__84203__$1);
if(temp__5753__auto__){
var s__84203__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__84203__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__84203__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__84205 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__84204 = (0);
while(true){
if((i__84204 < size__4528__auto__)){
var vec__84206 = cljs.core._nth(c__4527__auto__,i__84204);
var control_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84206,(0),null);
var control_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84206,(1),null);
cljs.core.chunk_append(b__84205,helix.core.get_react().createElement("label",(function (){var obj84210 = ({"key":control_name});
return obj84210;
})(),control_name,helix.core.get_react().createElement("input",(function (){var obj84212 = ({"type":"checkbox","checked":control_val,"onChange":((function (i__84204,vec__84206,control_name,control_val,c__4527__auto__,size__4528__auto__,b__84205,s__84203__$2,temp__5753__auto__,G__83864,on_change,values,vec__83859,map__83862,map__83862__$1,type,path,value,style,onChange){
return (function (e){
var new_values = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(values,control_name,e.target.checked);
org.browjure.state.set_path_value(path,new_values);

return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(new_values) : on_change.call(null,new_values));
});})(i__84204,vec__84206,control_name,control_val,c__4527__auto__,size__4528__auto__,b__84205,s__84203__$2,temp__5753__auto__,G__83864,on_change,values,vec__83859,map__83862,map__83862__$1,type,path,value,style,onChange))
});
return obj84212;
})())));

var G__84251 = (i__84204 + (1));
i__84204 = G__84251;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__84205),org$browjure$base$control_component_$_iter__84202(cljs.core.chunk_rest(s__84203__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__84205),null);
}
} else {
var vec__84213 = cljs.core.first(s__84203__$2);
var control_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84213,(0),null);
var control_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84213,(1),null);
return cljs.core.cons(helix.core.get_react().createElement("label",(function (){var obj84217 = ({"key":control_name});
return obj84217;
})(),control_name,helix.core.get_react().createElement("input",(function (){var obj84219 = ({"type":"checkbox","checked":control_val,"onChange":((function (vec__84213,control_name,control_val,s__84203__$2,temp__5753__auto__,G__83864,on_change,values,vec__83859,map__83862,map__83862__$1,type,path,value,style,onChange){
return (function (e){
var new_values = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(values,control_name,e.target.checked);
org.browjure.state.set_path_value(path,new_values);

return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(new_values) : on_change.call(null,new_values));
});})(vec__84213,control_name,control_val,s__84203__$2,temp__5753__auto__,G__83864,on_change,values,vec__83859,map__83862,map__83862__$1,type,path,value,style,onChange))
});
return obj84219;
})())),org$browjure$base$control_component_$_iter__84202(cljs.core.rest(s__84203__$2)));
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__83864)].join('')));

}
});
if(goog.DEBUG === true){
var G__84220 = G__83858;
goog.object.set(G__84220,"displayName","org.browjure.base/control-component");

return G__84220;
} else {
return G__83858;
}
})();



org.browjure.base.hiccup_registry = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("browjure","control","browjure/control",-1708403734),new cljs.core.Symbol("org.browjure.base","control-component","org.browjure.base/control-component",1901512152,null)], null));
org.browjure.base.window_resolve = (function org$browjure$base$window_resolve(symbol){
console.log("split ns",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(cljs.core.namespace(symbol),"-","_"),"."),clojure.string.replace(cljs.core.name(symbol),"-","_")));

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__84221_SHARP_,p2__84222_SHARP_){
return (p1__84221_SHARP_[p2__84222_SHARP_]);
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
document.head.append((function (){var G__84225 = document.createElement("script");
G__84225.setAttribute("type","text/javascript");

G__84225.setAttribute("src",new cljs.core.Keyword(null,"base-path","base-path",495760020).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(command)));

return G__84225;
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
var react_componentized = clojure.walk.postwalk((function (p1__84223_SHARP_){
if(((cljs.core.vector_QMARK_(p1__84223_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"react-fn-component","react-fn-component",-1964010316),cljs.core.first(p1__84223_SHARP_))))){
var make_component = org.browjure.base.window_resolve(new cljs.core.Symbol("org.browjure.material-ui.base","make-component","org.browjure.material-ui.base/make-component",2014286145,null));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"built-react-fn-component","built-react-fn-component",-974186473),(function (){var G__84226 = cljs.core.second(p1__84223_SHARP_);
return (make_component.cljs$core$IFn$_invoke$arity$1 ? make_component.cljs$core$IFn$_invoke$arity$1(G__84226) : make_component.call(null,G__84226));
})()], null),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),p1__84223_SHARP_)));
} else {
return p1__84223_SHARP_;

}
}),command);
var hiccup = clojure.walk.postwalk((function (p1__84224_SHARP_){
if(cljs.core.truth_(((cljs.core.vector_QMARK_(p1__84224_SHARP_))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(org.browjure.base.hiccup_registry),cljs.core.first(p1__84224_SHARP_)):false))){
var component = org.browjure.base.window_resolve(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(org.browjure.base.hiccup_registry),cljs.core.first(p1__84224_SHARP_)));
if(cljs.core.truth_(component.displayName)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(helix.core.$,component,cljs.core.rest(p1__84224_SHARP_));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(org.browjure.base.window_resolve(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(org.browjure.base.hiccup_registry),cljs.core.first(p1__84224_SHARP_))),cljs.core.rest(p1__84224_SHARP_));
}
} else {
if(((cljs.core.vector_QMARK_(p1__84224_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__84224_SHARP_),new cljs.core.Keyword(null,"built-react-fn-component","built-react-fn-component",-974186473))))){
var vec__84227 = p1__84224_SHARP_;
var seq__84228 = cljs.core.seq(vec__84227);
var first__84229 = cljs.core.first(seq__84228);
var seq__84228__$1 = cljs.core.next(seq__84228);
var _ = first__84229;
var first__84229__$1 = cljs.core.first(seq__84228__$1);
var seq__84228__$2 = cljs.core.next(seq__84228__$1);
var element = first__84229__$1;
var props = seq__84228__$2;
var G__84230 = cljs.core.clj__GT_js(cljs.core.first(props));
return (element.cljs$core$IFn$_invoke$arity$1 ? element.cljs$core$IFn$_invoke$arity$1(G__84230) : element.call(null,G__84230));
} else {
return p1__84224_SHARP_;

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

var fexpr__84231 = (((((window["org"])["browjure"])[clojure.string.replace(id,"-","_")])["base"])["handler"]);
return (fexpr__84231.cljs$core$IFn$_invoke$arity$1 ? fexpr__84231.cljs$core$IFn$_invoke$arity$1(command) : fexpr__84231.call(null,command));

}
}
}
}
});
org.browjure.base.make_component = (function org$browjure$base$make_component(var_args){
var args__4742__auto__ = [];
var len__4736__auto___84252 = arguments.length;
var i__4737__auto___84253 = (0);
while(true){
if((i__4737__auto___84253 < len__4736__auto___84252)){
args__4742__auto__.push((arguments[i__4737__auto___84253]));

var G__84254 = (i__4737__auto___84253 + (1));
i__4737__auto___84253 = G__84254;
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
(org.browjure.base.make_component.cljs$lang$applyTo = (function (seq84232){
var G__84233 = cljs.core.first(seq84232);
var seq84232__$1 = cljs.core.next(seq84232);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__84233,seq84232__$1);
}));

org.browjure.base.handler = (function org$browjure$base$handler(msg){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),cljs.core.first(new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(msg)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304),cljs.core.first(cljs.core.second(new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(msg))))))){
var vec__84234 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(msg);
var sente_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84234,(0),null);
var vec__84237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84234,(1),null);
var browjure_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84237,(0),null);
var lib_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84237,(1),null);
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
return fetch(["command-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),".json"].join('')).then((function (p1__84240_SHARP_){
return p1__84240_SHARP_.text().then((function (command_str){
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
var log_84255 = window.console.log;
(window.console.log = (function (){
var G__84241_84256 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("browjure","log","browjure/log",-877135194),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arguments], 0))], null);
(org.browjure.base.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1 ? org.browjure.base.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1(G__84241_84256) : org.browjure.base.chsk_send_BANG_.call(null,G__84241_84256));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(log_84255,arguments);
}));
(window.onerror = (function (){
var G__84242_84257 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("browjure","error","browjure/error",-1401241814),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arguments], 0))], null);
(org.browjure.base.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1 ? org.browjure.base.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1(G__84242_84257) : org.browjure.base.chsk_send_BANG_.call(null,G__84242_84257));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(window.console.error,arguments);
}));

//# sourceMappingURL=org.browjure.base.js.map
