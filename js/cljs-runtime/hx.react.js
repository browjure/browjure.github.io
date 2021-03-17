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
var G__68445__delegate = function (args__$1){
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(first_child,args__$1);
if(cljs.core.vector_QMARK_(ret)){
return hx.hiccup._as_element(ret,config);
} else {
return ret;
}
};
var G__68445 = function (var_args){
var args__$1 = null;
if (arguments.length > 0) {
var G__68446__i = 0, G__68446__a = new Array(arguments.length -  0);
while (G__68446__i < G__68446__a.length) {G__68446__a[G__68446__i] = arguments[G__68446__i + 0]; ++G__68446__i;}
  args__$1 = new cljs.core.IndexedSeq(G__68446__a,0,null);
} 
return G__68445__delegate.call(this,args__$1);};
G__68445.cljs$lang$maxFixedArity = 0;
G__68445.cljs$lang$applyTo = (function (arglist__68447){
var args__$1 = cljs.core.seq(arglist__68447);
return G__68445__delegate(args__$1);
});
G__68445.cljs$core$IFn$_invoke$arity$variadic = G__68445__delegate;
return G__68445;
})()
;
});
hx.react.create_element = (function hx$react$create_element(config,el,args){
var first_arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(args,(0),null);
var props_QMARK_ = cljs.core.map_QMARK_(first_arg);
var props = hx.react.props(el,first_arg,props_QMARK_);
var children = ((props_QMARK_)?cljs.core._rest(args):args);
var first_child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(children,(0),null);
var G__68335 = cljs.core.count(children);
switch (G__68335) {
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

var G__68449 = a;
var G__68450 = cljs.core._next(c);
a = G__68449;
c = G__68450;
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
hx.react.Provider = (function hx$react$Provider(props__68283__auto__,maybe_ref__68284__auto__){
var vec__68338 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1 ? hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1(props__68283__auto__) : hx.react.props__GT_clj.call(null,props__68283__auto__)),maybe_ref__68284__auto__], null);
var map__68341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68338,(0),null);
var map__68341__$1 = (((((!((map__68341 == null))))?(((((map__68341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68341):map__68341);
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68341__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68341__$1,new cljs.core.Keyword(null,"value","value",305978217));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68341__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return hx.react.parse_body(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [context.Provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null),children], null));
});

if(cljs.core.truth_(goog.DEBUG)){
goog.object.set(hx.react.Provider,"displayName","hx.react/Provider");
} else {
}
hx.hiccup.extend_tag(new cljs.core.Keyword(null,"provider","provider",-302056900),hx.react.Provider);
hx.react.$ = (function hx$react$$(var_args){
var args__4742__auto__ = [];
var len__4736__auto___68454 = arguments.length;
var i__4737__auto___68455 = (0);
while(true){
if((i__4737__auto___68455 < len__4736__auto___68454)){
args__4742__auto__.push((arguments[i__4737__auto___68455]));

var G__68456 = (i__4737__auto___68455 + (1));
i__4737__auto___68455 = G__68456;
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
(hx.react.$.cljs$lang$applyTo = (function (seq68372){
var G__68373 = cljs.core.first(seq68372);
var seq68372__$1 = cljs.core.next(seq68372);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__68373,seq68372__$1);
}));

hx.react.assign_methods = (function hx$react$assign_methods(class$,method_map){
var seq__68393_68459 = cljs.core.seq(method_map);
var chunk__68394_68460 = null;
var count__68395_68461 = (0);
var i__68396_68462 = (0);
while(true){
if((i__68396_68462 < count__68395_68461)){
var vec__68409_68463 = chunk__68394_68460.cljs$core$IIndexed$_nth$arity$2(null,i__68396_68462);
var method_name_68464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68409_68463,(0),null);
var method_fn_68465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68409_68463,(1),null);
goog.object.set(class$.prototype,cljs.core.munge(cljs.core.name(method_name_68464)),method_fn_68465);


var G__68466 = seq__68393_68459;
var G__68467 = chunk__68394_68460;
var G__68468 = count__68395_68461;
var G__68469 = (i__68396_68462 + (1));
seq__68393_68459 = G__68466;
chunk__68394_68460 = G__68467;
count__68395_68461 = G__68468;
i__68396_68462 = G__68469;
continue;
} else {
var temp__5753__auto___68470 = cljs.core.seq(seq__68393_68459);
if(temp__5753__auto___68470){
var seq__68393_68471__$1 = temp__5753__auto___68470;
if(cljs.core.chunked_seq_QMARK_(seq__68393_68471__$1)){
var c__4556__auto___68475 = cljs.core.chunk_first(seq__68393_68471__$1);
var G__68476 = cljs.core.chunk_rest(seq__68393_68471__$1);
var G__68477 = c__4556__auto___68475;
var G__68478 = cljs.core.count(c__4556__auto___68475);
var G__68479 = (0);
seq__68393_68459 = G__68476;
chunk__68394_68460 = G__68477;
count__68395_68461 = G__68478;
i__68396_68462 = G__68479;
continue;
} else {
var vec__68414_68480 = cljs.core.first(seq__68393_68471__$1);
var method_name_68481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68414_68480,(0),null);
var method_fn_68482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68414_68480,(1),null);
goog.object.set(class$.prototype,cljs.core.munge(cljs.core.name(method_name_68481)),method_fn_68482);


var G__68484 = cljs.core.next(seq__68393_68471__$1);
var G__68485 = null;
var G__68486 = (0);
var G__68487 = (0);
seq__68393_68459 = G__68484;
chunk__68394_68460 = G__68485;
count__68395_68461 = G__68486;
i__68396_68462 = G__68487;
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
var seq__68420_68488 = cljs.core.seq(method_names);
var chunk__68421_68489 = null;
var count__68422_68490 = (0);
var i__68423_68491 = (0);
while(true){
if((i__68423_68491 < count__68422_68490)){
var method_68492 = chunk__68421_68489.cljs$core$IIndexed$_nth$arity$2(null,i__68423_68491);
goog.object.set(this$,cljs.core.munge(method_68492),goog.object.get(this$,cljs.core.munge(method_68492)).bind(this$));


var G__68497 = seq__68420_68488;
var G__68498 = chunk__68421_68489;
var G__68499 = count__68422_68490;
var G__68500 = (i__68423_68491 + (1));
seq__68420_68488 = G__68497;
chunk__68421_68489 = G__68498;
count__68422_68490 = G__68499;
i__68423_68491 = G__68500;
continue;
} else {
var temp__5753__auto___68501 = cljs.core.seq(seq__68420_68488);
if(temp__5753__auto___68501){
var seq__68420_68502__$1 = temp__5753__auto___68501;
if(cljs.core.chunked_seq_QMARK_(seq__68420_68502__$1)){
var c__4556__auto___68503 = cljs.core.chunk_first(seq__68420_68502__$1);
var G__68504 = cljs.core.chunk_rest(seq__68420_68502__$1);
var G__68505 = c__4556__auto___68503;
var G__68506 = cljs.core.count(c__4556__auto___68503);
var G__68507 = (0);
seq__68420_68488 = G__68504;
chunk__68421_68489 = G__68505;
count__68422_68490 = G__68506;
i__68423_68491 = G__68507;
continue;
} else {
var method_68508 = cljs.core.first(seq__68420_68502__$1);
goog.object.set(this$,cljs.core.munge(method_68508),goog.object.get(this$,cljs.core.munge(method_68508)).bind(this$));


var G__68509 = cljs.core.next(seq__68420_68502__$1);
var G__68510 = null;
var G__68511 = (0);
var G__68512 = (0);
seq__68420_68488 = G__68509;
chunk__68421_68489 = G__68510;
count__68422_68490 = G__68511;
i__68423_68491 = G__68512;
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

var seq__68424_68513 = cljs.core.seq(static_properties);
var chunk__68425_68514 = null;
var count__68426_68515 = (0);
var i__68427_68516 = (0);
while(true){
if((i__68427_68516 < count__68426_68515)){
var vec__68437_68517 = chunk__68425_68514.cljs$core$IIndexed$_nth$arity$2(null,i__68427_68516);
var k_68518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68437_68517,(0),null);
var v_68519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68437_68517,(1),null);
goog.object.set(ctor,k_68518,v_68519);


var G__68520 = seq__68424_68513;
var G__68521 = chunk__68425_68514;
var G__68522 = count__68426_68515;
var G__68523 = (i__68427_68516 + (1));
seq__68424_68513 = G__68520;
chunk__68425_68514 = G__68521;
count__68426_68515 = G__68522;
i__68427_68516 = G__68523;
continue;
} else {
var temp__5753__auto___68524 = cljs.core.seq(seq__68424_68513);
if(temp__5753__auto___68524){
var seq__68424_68525__$1 = temp__5753__auto___68524;
if(cljs.core.chunked_seq_QMARK_(seq__68424_68525__$1)){
var c__4556__auto___68526 = cljs.core.chunk_first(seq__68424_68525__$1);
var G__68527 = cljs.core.chunk_rest(seq__68424_68525__$1);
var G__68528 = c__4556__auto___68526;
var G__68529 = cljs.core.count(c__4556__auto___68526);
var G__68530 = (0);
seq__68424_68513 = G__68527;
chunk__68425_68514 = G__68528;
count__68426_68515 = G__68529;
i__68427_68516 = G__68530;
continue;
} else {
var vec__68440_68531 = cljs.core.first(seq__68424_68525__$1);
var k_68532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68440_68531,(0),null);
var v_68533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68440_68531,(1),null);
goog.object.set(ctor,k_68532,v_68533);


var G__68535 = cljs.core.next(seq__68424_68525__$1);
var G__68536 = null;
var G__68537 = (0);
var G__68538 = (0);
seq__68424_68513 = G__68535;
chunk__68425_68514 = G__68536;
count__68426_68515 = G__68537;
i__68427_68516 = G__68538;
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
