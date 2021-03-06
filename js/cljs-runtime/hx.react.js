goog.provide('hx.react');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
hx.react.props__GT_clj = hx.utils.props__GT_clj;
hx.react.props = (function hx$react$props(el,first_arg,props_QMARK_){
if(cljs.core.truth_(((typeof el === 'string')?props_QMARK_:false))){
return hx.utils.clj__GT_props.cljs$core$IFn$_invoke$arity$1(first_arg);
} else {
if(cljs.core.truth_(props_QMARK_)){
return hx.utils.clj__GT_props.cljs$core$IFn$_invoke$arity$2(first_arg,false);
} else {
return null;

}
}
});
hx.react.fn_as_child = (function hx$react$fn_as_child(config,first_child,args){
return (function() { 
var G__66177__delegate = function (args__$1){
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(first_child,args__$1);
if(cljs.core.vector_QMARK_(ret)){
return hx.hiccup._as_element(ret,config);
} else {
return ret;
}
};
var G__66177 = function (var_args){
var args__$1 = null;
if (arguments.length > 0) {
var G__66181__i = 0, G__66181__a = new Array(arguments.length -  0);
while (G__66181__i < G__66181__a.length) {G__66181__a[G__66181__i] = arguments[G__66181__i + 0]; ++G__66181__i;}
  args__$1 = new cljs.core.IndexedSeq(G__66181__a,0,null);
} 
return G__66177__delegate.call(this,args__$1);};
G__66177.cljs$lang$maxFixedArity = 0;
G__66177.cljs$lang$applyTo = (function (arglist__66183){
var args__$1 = cljs.core.seq(arglist__66183);
return G__66177__delegate(args__$1);
});
G__66177.cljs$core$IFn$_invoke$arity$variadic = G__66177__delegate;
return G__66177;
})()
;
});
hx.react.create_element = (function hx$react$create_element(config,el,args){
var first_arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(args,(0),null);
var props_QMARK_ = cljs.core.map_QMARK_(first_arg);
var props = hx.react.props(el,first_arg,props_QMARK_);
var children = ((props_QMARK_)?cljs.core._rest(args):args);
var first_child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(children,(0),null);
var G__65955 = cljs.core.count(children);
switch (G__65955) {
case (0):
return module$node_modules$react$index.createElement(el,props);

break;
case (1):
if(goog.isFunction(first_child)){
return module$node_modules$react$index.createElement(el,props,hx.react.fn_as_child(config,first_child,args));
} else {
return module$node_modules$react$index.createElement(el,props,hx.hiccup._as_element(first_child,config));
}

break;
default:
return module$node_modules$react$index.createElement.apply(null,(function (){var a = [el,props];
var c = children;
while(true){
if((!((c == null)))){
a.push(hx.hiccup._as_element(cljs.core._first(c),config));

var G__66190 = a;
var G__66191 = cljs.core._next(c);
a = G__66190;
c = G__66191;
continue;
} else {
return a;
}
break;
}
})());

}
});
hx.react.react_hiccup_config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"create-element","create-element",193243064),hx.react.create_element,new cljs.core.Keyword(null,"is-element?","is-element?",-1231778016),module$node_modules$react$index.isValidElement,new cljs.core.Keyword(null,"fragment","fragment",826775688),module$node_modules$react$index.Fragment], null);
hx.react.f = (function hx$react$f(form){
return hx.hiccup.parse(hx.react.react_hiccup_config,form);
});
hx.react.parse_body = (function hx$react$parse_body(body){
if(cljs.core.vector_QMARK_(body)){
return hx.react.f(body);
} else {
return body;
}
});
hx.react.fragment = module$node_modules$react$index.Fragment;
hx.hiccup.extend_tag(new cljs.core.Keyword(null,"<>","<>",1280186386),hx.react.fragment);
hx.react.Provider = (function hx$react$Provider(props__65893__auto__,maybe_ref__65894__auto__){
var vec__65975 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1 ? hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1(props__65893__auto__) : hx.react.props__GT_clj.call(null,props__65893__auto__)),maybe_ref__65894__auto__], null);
var map__65978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65975,(0),null);
var map__65978__$1 = (((((!((map__65978 == null))))?(((((map__65978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65978):map__65978);
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65978__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65978__$1,new cljs.core.Keyword(null,"value","value",305978217));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65978__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return hx.react.parse_body(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [context.Provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null),children], null));
});

if(cljs.core.truth_(goog.DEBUG)){
goog.object.set(hx.react.Provider,"displayName","hx.react/Provider");
} else {
}
hx.hiccup.extend_tag(new cljs.core.Keyword(null,"provider","provider",-302056900),hx.react.Provider);
hx.react.$ = (function hx$react$$(var_args){
var args__4742__auto__ = [];
var len__4736__auto___66218 = arguments.length;
var i__4737__auto___66219 = (0);
while(true){
if((i__4737__auto___66219 < len__4736__auto___66218)){
args__4742__auto__.push((arguments[i__4737__auto___66219]));

var G__66220 = (i__4737__auto___66219 + (1));
i__4737__auto___66219 = G__66220;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return hx.react.$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(hx.react.$.cljs$core$IFn$_invoke$arity$variadic = (function (el,args){
return hx.hiccup.make_element(hx.react.react_hiccup_config,el,args);
}));

(hx.react.$.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(hx.react.$.cljs$lang$applyTo = (function (seq66003){
var G__66004 = cljs.core.first(seq66003);
var seq66003__$1 = cljs.core.next(seq66003);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66004,seq66003__$1);
}));

hx.react.assign_methods = (function hx$react$assign_methods(class$,method_map){
var seq__66041_66235 = cljs.core.seq(method_map);
var chunk__66042_66236 = null;
var count__66043_66237 = (0);
var i__66044_66238 = (0);
while(true){
if((i__66044_66238 < count__66043_66237)){
var vec__66055_66242 = chunk__66042_66236.cljs$core$IIndexed$_nth$arity$2(null,i__66044_66238);
var method_name_66243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66055_66242,(0),null);
var method_fn_66244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66055_66242,(1),null);
goog.object.set(class$.prototype,cljs.core.munge(cljs.core.name(method_name_66243)),method_fn_66244);


var G__66250 = seq__66041_66235;
var G__66251 = chunk__66042_66236;
var G__66252 = count__66043_66237;
var G__66253 = (i__66044_66238 + (1));
seq__66041_66235 = G__66250;
chunk__66042_66236 = G__66251;
count__66043_66237 = G__66252;
i__66044_66238 = G__66253;
continue;
} else {
var temp__5753__auto___66256 = cljs.core.seq(seq__66041_66235);
if(temp__5753__auto___66256){
var seq__66041_66257__$1 = temp__5753__auto___66256;
if(cljs.core.chunked_seq_QMARK_(seq__66041_66257__$1)){
var c__4556__auto___66261 = cljs.core.chunk_first(seq__66041_66257__$1);
var G__66262 = cljs.core.chunk_rest(seq__66041_66257__$1);
var G__66263 = c__4556__auto___66261;
var G__66264 = cljs.core.count(c__4556__auto___66261);
var G__66265 = (0);
seq__66041_66235 = G__66262;
chunk__66042_66236 = G__66263;
count__66043_66237 = G__66264;
i__66044_66238 = G__66265;
continue;
} else {
var vec__66062_66268 = cljs.core.first(seq__66041_66257__$1);
var method_name_66269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66062_66268,(0),null);
var method_fn_66270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66062_66268,(1),null);
goog.object.set(class$.prototype,cljs.core.munge(cljs.core.name(method_name_66269)),method_fn_66270);


var G__66274 = cljs.core.next(seq__66041_66257__$1);
var G__66275 = null;
var G__66276 = (0);
var G__66277 = (0);
seq__66041_66235 = G__66274;
chunk__66042_66236 = G__66275;
count__66043_66237 = G__66276;
i__66044_66238 = G__66277;
continue;
}
} else {
}
}
break;
}

return class$;
});
hx.react.create_class = (function hx$react$create_class(super_class,init_fn,static_properties,method_names){
var ctor = (function (props){
var this$ = this;
var seq__66069_66280 = cljs.core.seq(method_names);
var chunk__66070_66281 = null;
var count__66071_66282 = (0);
var i__66072_66283 = (0);
while(true){
if((i__66072_66283 < count__66071_66282)){
var method_66284 = chunk__66070_66281.cljs$core$IIndexed$_nth$arity$2(null,i__66072_66283);
goog.object.set(this$,cljs.core.munge(method_66284),goog.object.get(this$,cljs.core.munge(method_66284)).bind(this$));


var G__66285 = seq__66069_66280;
var G__66286 = chunk__66070_66281;
var G__66287 = count__66071_66282;
var G__66288 = (i__66072_66283 + (1));
seq__66069_66280 = G__66285;
chunk__66070_66281 = G__66286;
count__66071_66282 = G__66287;
i__66072_66283 = G__66288;
continue;
} else {
var temp__5753__auto___66291 = cljs.core.seq(seq__66069_66280);
if(temp__5753__auto___66291){
var seq__66069_66292__$1 = temp__5753__auto___66291;
if(cljs.core.chunked_seq_QMARK_(seq__66069_66292__$1)){
var c__4556__auto___66293 = cljs.core.chunk_first(seq__66069_66292__$1);
var G__66294 = cljs.core.chunk_rest(seq__66069_66292__$1);
var G__66295 = c__4556__auto___66293;
var G__66296 = cljs.core.count(c__4556__auto___66293);
var G__66297 = (0);
seq__66069_66280 = G__66294;
chunk__66070_66281 = G__66295;
count__66071_66282 = G__66296;
i__66072_66283 = G__66297;
continue;
} else {
var method_66301 = cljs.core.first(seq__66069_66292__$1);
goog.object.set(this$,cljs.core.munge(method_66301),goog.object.get(this$,cljs.core.munge(method_66301)).bind(this$));


var G__66302 = cljs.core.next(seq__66069_66292__$1);
var G__66303 = null;
var G__66304 = (0);
var G__66305 = (0);
seq__66069_66280 = G__66302;
chunk__66070_66281 = G__66303;
count__66071_66282 = G__66304;
i__66072_66283 = G__66305;
continue;
}
} else {
}
}
break;
}

return (init_fn.cljs$core$IFn$_invoke$arity$2 ? init_fn.cljs$core$IFn$_invoke$arity$2(this$,props) : init_fn.call(null,this$,props));
});
goog.inherits(ctor,super_class);

var seq__66090_66307 = cljs.core.seq(static_properties);
var chunk__66091_66308 = null;
var count__66092_66309 = (0);
var i__66093_66310 = (0);
while(true){
if((i__66093_66310 < count__66092_66309)){
var vec__66114_66311 = chunk__66091_66308.cljs$core$IIndexed$_nth$arity$2(null,i__66093_66310);
var k_66312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66114_66311,(0),null);
var v_66313 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66114_66311,(1),null);
goog.object.set(ctor,k_66312,v_66313);


var G__66314 = seq__66090_66307;
var G__66315 = chunk__66091_66308;
var G__66316 = count__66092_66309;
var G__66317 = (i__66093_66310 + (1));
seq__66090_66307 = G__66314;
chunk__66091_66308 = G__66315;
count__66092_66309 = G__66316;
i__66093_66310 = G__66317;
continue;
} else {
var temp__5753__auto___66319 = cljs.core.seq(seq__66090_66307);
if(temp__5753__auto___66319){
var seq__66090_66320__$1 = temp__5753__auto___66319;
if(cljs.core.chunked_seq_QMARK_(seq__66090_66320__$1)){
var c__4556__auto___66321 = cljs.core.chunk_first(seq__66090_66320__$1);
var G__66322 = cljs.core.chunk_rest(seq__66090_66320__$1);
var G__66323 = c__4556__auto___66321;
var G__66324 = cljs.core.count(c__4556__auto___66321);
var G__66325 = (0);
seq__66090_66307 = G__66322;
chunk__66091_66308 = G__66323;
count__66092_66309 = G__66324;
i__66093_66310 = G__66325;
continue;
} else {
var vec__66136_66326 = cljs.core.first(seq__66090_66320__$1);
var k_66327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66136_66326,(0),null);
var v_66328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66136_66326,(1),null);
goog.object.set(ctor,k_66327,v_66328);


var G__66329 = cljs.core.next(seq__66090_66320__$1);
var G__66330 = null;
var G__66331 = (0);
var G__66332 = (0);
seq__66090_66307 = G__66329;
chunk__66091_66308 = G__66330;
count__66092_66309 = G__66331;
i__66093_66310 = G__66332;
continue;
}
} else {
}
}
break;
}

return ctor;
});
hx.react.create_component = (function hx$react$create_component(init_fn,static_properties,method_names){
return hx.react.create_class(module$node_modules$react$index.Component,init_fn,static_properties,method_names);
});
hx.react.create_pure_component = (function hx$react$create_pure_component(init_fn,static_properties,method_names){
return hx.react.create_class(module$node_modules$react$index.PureComponent,init_fn,static_properties,method_names);
});
/**
 * Just react/createContext
 */
hx.react.create_context = module$node_modules$react$index.createContext;
/**
 * Takes a React component, and creates a function that returns
 *   a new React element
 */
hx.react.factory = (function hx$react$factory(component){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hx.react.$,component);
});

//# sourceMappingURL=hx.react.js.map
