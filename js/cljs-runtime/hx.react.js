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
var G__66327__delegate = function (args__$1){
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(first_child,args__$1);
if(cljs.core.vector_QMARK_(ret)){
return hx.hiccup._as_element(ret,config);
} else {
return ret;
}
};
var G__66327 = function (var_args){
var args__$1 = null;
if (arguments.length > 0) {
var G__66331__i = 0, G__66331__a = new Array(arguments.length -  0);
while (G__66331__i < G__66331__a.length) {G__66331__a[G__66331__i] = arguments[G__66331__i + 0]; ++G__66331__i;}
  args__$1 = new cljs.core.IndexedSeq(G__66331__a,0,null);
} 
return G__66327__delegate.call(this,args__$1);};
G__66327.cljs$lang$maxFixedArity = 0;
G__66327.cljs$lang$applyTo = (function (arglist__66332){
var args__$1 = cljs.core.seq(arglist__66332);
return G__66327__delegate(args__$1);
});
G__66327.cljs$core$IFn$_invoke$arity$variadic = G__66327__delegate;
return G__66327;
})()
;
});
hx.react.create_element = (function hx$react$create_element(config,el,args){
var first_arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(args,(0),null);
var props_QMARK_ = cljs.core.map_QMARK_(first_arg);
var props = hx.react.props(el,first_arg,props_QMARK_);
var children = ((props_QMARK_)?cljs.core._rest(args):args);
var first_child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(children,(0),null);
var G__66162 = cljs.core.count(children);
switch (G__66162) {
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

var G__66340 = a;
var G__66341 = cljs.core._next(c);
a = G__66340;
c = G__66341;
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
hx.react.Provider = (function hx$react$Provider(props__66097__auto__,maybe_ref__66098__auto__){
var vec__66193 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1 ? hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1(props__66097__auto__) : hx.react.props__GT_clj.call(null,props__66097__auto__)),maybe_ref__66098__auto__], null);
var map__66196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66193,(0),null);
var map__66196__$1 = (((((!((map__66196 == null))))?(((((map__66196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66196):map__66196);
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66196__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66196__$1,new cljs.core.Keyword(null,"value","value",305978217));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66196__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return hx.react.parse_body(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [context.Provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null),children], null));
});

if(cljs.core.truth_(goog.DEBUG)){
goog.object.set(hx.react.Provider,"displayName","hx.react/Provider");
} else {
}
hx.hiccup.extend_tag(new cljs.core.Keyword(null,"provider","provider",-302056900),hx.react.Provider);
hx.react.$ = (function hx$react$$(var_args){
var args__4742__auto__ = [];
var len__4736__auto___66358 = arguments.length;
var i__4737__auto___66360 = (0);
while(true){
if((i__4737__auto___66360 < len__4736__auto___66358)){
args__4742__auto__.push((arguments[i__4737__auto___66360]));

var G__66361 = (i__4737__auto___66360 + (1));
i__4737__auto___66360 = G__66361;
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
(hx.react.$.cljs$lang$applyTo = (function (seq66216){
var G__66217 = cljs.core.first(seq66216);
var seq66216__$1 = cljs.core.next(seq66216);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66217,seq66216__$1);
}));

hx.react.assign_methods = (function hx$react$assign_methods(class$,method_map){
var seq__66236_66365 = cljs.core.seq(method_map);
var chunk__66237_66366 = null;
var count__66238_66367 = (0);
var i__66239_66368 = (0);
while(true){
if((i__66239_66368 < count__66238_66367)){
var vec__66252_66370 = chunk__66237_66366.cljs$core$IIndexed$_nth$arity$2(null,i__66239_66368);
var method_name_66371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66252_66370,(0),null);
var method_fn_66372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66252_66370,(1),null);
goog.object.set(class$.prototype,cljs.core.munge(cljs.core.name(method_name_66371)),method_fn_66372);


var G__66373 = seq__66236_66365;
var G__66374 = chunk__66237_66366;
var G__66375 = count__66238_66367;
var G__66376 = (i__66239_66368 + (1));
seq__66236_66365 = G__66373;
chunk__66237_66366 = G__66374;
count__66238_66367 = G__66375;
i__66239_66368 = G__66376;
continue;
} else {
var temp__5753__auto___66377 = cljs.core.seq(seq__66236_66365);
if(temp__5753__auto___66377){
var seq__66236_66378__$1 = temp__5753__auto___66377;
if(cljs.core.chunked_seq_QMARK_(seq__66236_66378__$1)){
var c__4556__auto___66380 = cljs.core.chunk_first(seq__66236_66378__$1);
var G__66381 = cljs.core.chunk_rest(seq__66236_66378__$1);
var G__66382 = c__4556__auto___66380;
var G__66383 = cljs.core.count(c__4556__auto___66380);
var G__66384 = (0);
seq__66236_66365 = G__66381;
chunk__66237_66366 = G__66382;
count__66238_66367 = G__66383;
i__66239_66368 = G__66384;
continue;
} else {
var vec__66258_66385 = cljs.core.first(seq__66236_66378__$1);
var method_name_66386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66258_66385,(0),null);
var method_fn_66387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66258_66385,(1),null);
goog.object.set(class$.prototype,cljs.core.munge(cljs.core.name(method_name_66386)),method_fn_66387);


var G__66388 = cljs.core.next(seq__66236_66378__$1);
var G__66389 = null;
var G__66390 = (0);
var G__66391 = (0);
seq__66236_66365 = G__66388;
chunk__66237_66366 = G__66389;
count__66238_66367 = G__66390;
i__66239_66368 = G__66391;
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
var seq__66262_66396 = cljs.core.seq(method_names);
var chunk__66263_66397 = null;
var count__66264_66398 = (0);
var i__66265_66399 = (0);
while(true){
if((i__66265_66399 < count__66264_66398)){
var method_66403 = chunk__66263_66397.cljs$core$IIndexed$_nth$arity$2(null,i__66265_66399);
goog.object.set(this$,cljs.core.munge(method_66403),goog.object.get(this$,cljs.core.munge(method_66403)).bind(this$));


var G__66405 = seq__66262_66396;
var G__66406 = chunk__66263_66397;
var G__66407 = count__66264_66398;
var G__66408 = (i__66265_66399 + (1));
seq__66262_66396 = G__66405;
chunk__66263_66397 = G__66406;
count__66264_66398 = G__66407;
i__66265_66399 = G__66408;
continue;
} else {
var temp__5753__auto___66410 = cljs.core.seq(seq__66262_66396);
if(temp__5753__auto___66410){
var seq__66262_66414__$1 = temp__5753__auto___66410;
if(cljs.core.chunked_seq_QMARK_(seq__66262_66414__$1)){
var c__4556__auto___66415 = cljs.core.chunk_first(seq__66262_66414__$1);
var G__66416 = cljs.core.chunk_rest(seq__66262_66414__$1);
var G__66417 = c__4556__auto___66415;
var G__66418 = cljs.core.count(c__4556__auto___66415);
var G__66419 = (0);
seq__66262_66396 = G__66416;
chunk__66263_66397 = G__66417;
count__66264_66398 = G__66418;
i__66265_66399 = G__66419;
continue;
} else {
var method_66420 = cljs.core.first(seq__66262_66414__$1);
goog.object.set(this$,cljs.core.munge(method_66420),goog.object.get(this$,cljs.core.munge(method_66420)).bind(this$));


var G__66424 = cljs.core.next(seq__66262_66414__$1);
var G__66425 = null;
var G__66426 = (0);
var G__66427 = (0);
seq__66262_66396 = G__66424;
chunk__66263_66397 = G__66425;
count__66264_66398 = G__66426;
i__66265_66399 = G__66427;
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

var seq__66272_66429 = cljs.core.seq(static_properties);
var chunk__66273_66430 = null;
var count__66274_66431 = (0);
var i__66275_66432 = (0);
while(true){
if((i__66275_66432 < count__66274_66431)){
var vec__66299_66434 = chunk__66273_66430.cljs$core$IIndexed$_nth$arity$2(null,i__66275_66432);
var k_66435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66299_66434,(0),null);
var v_66436 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66299_66434,(1),null);
goog.object.set(ctor,k_66435,v_66436);


var G__66439 = seq__66272_66429;
var G__66440 = chunk__66273_66430;
var G__66441 = count__66274_66431;
var G__66442 = (i__66275_66432 + (1));
seq__66272_66429 = G__66439;
chunk__66273_66430 = G__66440;
count__66274_66431 = G__66441;
i__66275_66432 = G__66442;
continue;
} else {
var temp__5753__auto___66444 = cljs.core.seq(seq__66272_66429);
if(temp__5753__auto___66444){
var seq__66272_66445__$1 = temp__5753__auto___66444;
if(cljs.core.chunked_seq_QMARK_(seq__66272_66445__$1)){
var c__4556__auto___66446 = cljs.core.chunk_first(seq__66272_66445__$1);
var G__66447 = cljs.core.chunk_rest(seq__66272_66445__$1);
var G__66448 = c__4556__auto___66446;
var G__66449 = cljs.core.count(c__4556__auto___66446);
var G__66450 = (0);
seq__66272_66429 = G__66447;
chunk__66273_66430 = G__66448;
count__66274_66431 = G__66449;
i__66275_66432 = G__66450;
continue;
} else {
var vec__66302_66451 = cljs.core.first(seq__66272_66445__$1);
var k_66452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66302_66451,(0),null);
var v_66453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66302_66451,(1),null);
goog.object.set(ctor,k_66452,v_66453);


var G__66454 = cljs.core.next(seq__66272_66445__$1);
var G__66455 = null;
var G__66456 = (0);
var G__66457 = (0);
seq__66272_66429 = G__66454;
chunk__66273_66430 = G__66455;
count__66274_66431 = G__66456;
i__66275_66432 = G__66457;
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
