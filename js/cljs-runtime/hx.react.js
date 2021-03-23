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
var G__70607__delegate = function (args__$1){
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(first_child,args__$1);
if(cljs.core.vector_QMARK_(ret)){
return hx.hiccup._as_element(ret,config);
} else {
return ret;
}
};
var G__70607 = function (var_args){
var args__$1 = null;
if (arguments.length > 0) {
var G__70608__i = 0, G__70608__a = new Array(arguments.length -  0);
while (G__70608__i < G__70608__a.length) {G__70608__a[G__70608__i] = arguments[G__70608__i + 0]; ++G__70608__i;}
  args__$1 = new cljs.core.IndexedSeq(G__70608__a,0,null);
} 
return G__70607__delegate.call(this,args__$1);};
G__70607.cljs$lang$maxFixedArity = 0;
G__70607.cljs$lang$applyTo = (function (arglist__70609){
var args__$1 = cljs.core.seq(arglist__70609);
return G__70607__delegate(args__$1);
});
G__70607.cljs$core$IFn$_invoke$arity$variadic = G__70607__delegate;
return G__70607;
})()
;
});
hx.react.create_element = (function hx$react$create_element(config,el,args){
var first_arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(args,(0),null);
var props_QMARK_ = cljs.core.map_QMARK_(first_arg);
var props = hx.react.props(el,first_arg,props_QMARK_);
var children = ((props_QMARK_)?cljs.core._rest(args):args);
var first_child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(children,(0),null);
var G__70526 = cljs.core.count(children);
switch (G__70526) {
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

var G__70612 = a;
var G__70613 = cljs.core._next(c);
a = G__70612;
c = G__70613;
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
hx.react.Provider = (function hx$react$Provider(props__70488__auto__,maybe_ref__70489__auto__){
var vec__70530 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1 ? hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1(props__70488__auto__) : hx.react.props__GT_clj.call(null,props__70488__auto__)),maybe_ref__70489__auto__], null);
var map__70533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70530,(0),null);
var map__70533__$1 = (((((!((map__70533 == null))))?(((((map__70533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70533):map__70533);
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70533__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70533__$1,new cljs.core.Keyword(null,"value","value",305978217));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70533__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return hx.react.parse_body(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [context.Provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null),children], null));
});

if(cljs.core.truth_(goog.DEBUG)){
goog.object.set(hx.react.Provider,"displayName","hx.react/Provider");
} else {
}
hx.hiccup.extend_tag(new cljs.core.Keyword(null,"provider","provider",-302056900),hx.react.Provider);
hx.react.$ = (function hx$react$$(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70616 = arguments.length;
var i__4737__auto___70617 = (0);
while(true){
if((i__4737__auto___70617 < len__4736__auto___70616)){
args__4742__auto__.push((arguments[i__4737__auto___70617]));

var G__70618 = (i__4737__auto___70617 + (1));
i__4737__auto___70617 = G__70618;
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
(hx.react.$.cljs$lang$applyTo = (function (seq70536){
var G__70537 = cljs.core.first(seq70536);
var seq70536__$1 = cljs.core.next(seq70536);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70537,seq70536__$1);
}));

hx.react.assign_methods = (function hx$react$assign_methods(class$,method_map){
var seq__70544_70621 = cljs.core.seq(method_map);
var chunk__70545_70622 = null;
var count__70546_70623 = (0);
var i__70547_70624 = (0);
while(true){
if((i__70547_70624 < count__70546_70623)){
var vec__70555_70625 = chunk__70545_70622.cljs$core$IIndexed$_nth$arity$2(null,i__70547_70624);
var method_name_70626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70555_70625,(0),null);
var method_fn_70627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70555_70625,(1),null);
goog.object.set(class$.prototype,cljs.core.munge(cljs.core.name(method_name_70626)),method_fn_70627);


var G__70628 = seq__70544_70621;
var G__70629 = chunk__70545_70622;
var G__70630 = count__70546_70623;
var G__70631 = (i__70547_70624 + (1));
seq__70544_70621 = G__70628;
chunk__70545_70622 = G__70629;
count__70546_70623 = G__70630;
i__70547_70624 = G__70631;
continue;
} else {
var temp__5753__auto___70634 = cljs.core.seq(seq__70544_70621);
if(temp__5753__auto___70634){
var seq__70544_70636__$1 = temp__5753__auto___70634;
if(cljs.core.chunked_seq_QMARK_(seq__70544_70636__$1)){
var c__4556__auto___70637 = cljs.core.chunk_first(seq__70544_70636__$1);
var G__70638 = cljs.core.chunk_rest(seq__70544_70636__$1);
var G__70639 = c__4556__auto___70637;
var G__70640 = cljs.core.count(c__4556__auto___70637);
var G__70641 = (0);
seq__70544_70621 = G__70638;
chunk__70545_70622 = G__70639;
count__70546_70623 = G__70640;
i__70547_70624 = G__70641;
continue;
} else {
var vec__70562_70642 = cljs.core.first(seq__70544_70636__$1);
var method_name_70643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70562_70642,(0),null);
var method_fn_70644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70562_70642,(1),null);
goog.object.set(class$.prototype,cljs.core.munge(cljs.core.name(method_name_70643)),method_fn_70644);


var G__70646 = cljs.core.next(seq__70544_70636__$1);
var G__70647 = null;
var G__70648 = (0);
var G__70649 = (0);
seq__70544_70621 = G__70646;
chunk__70545_70622 = G__70647;
count__70546_70623 = G__70648;
i__70547_70624 = G__70649;
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
var seq__70565_70650 = cljs.core.seq(method_names);
var chunk__70566_70651 = null;
var count__70567_70652 = (0);
var i__70568_70653 = (0);
while(true){
if((i__70568_70653 < count__70567_70652)){
var method_70654 = chunk__70566_70651.cljs$core$IIndexed$_nth$arity$2(null,i__70568_70653);
goog.object.set(this$,cljs.core.munge(method_70654),goog.object.get(this$,cljs.core.munge(method_70654)).bind(this$));


var G__70657 = seq__70565_70650;
var G__70658 = chunk__70566_70651;
var G__70659 = count__70567_70652;
var G__70660 = (i__70568_70653 + (1));
seq__70565_70650 = G__70657;
chunk__70566_70651 = G__70658;
count__70567_70652 = G__70659;
i__70568_70653 = G__70660;
continue;
} else {
var temp__5753__auto___70663 = cljs.core.seq(seq__70565_70650);
if(temp__5753__auto___70663){
var seq__70565_70664__$1 = temp__5753__auto___70663;
if(cljs.core.chunked_seq_QMARK_(seq__70565_70664__$1)){
var c__4556__auto___70665 = cljs.core.chunk_first(seq__70565_70664__$1);
var G__70666 = cljs.core.chunk_rest(seq__70565_70664__$1);
var G__70667 = c__4556__auto___70665;
var G__70668 = cljs.core.count(c__4556__auto___70665);
var G__70669 = (0);
seq__70565_70650 = G__70666;
chunk__70566_70651 = G__70667;
count__70567_70652 = G__70668;
i__70568_70653 = G__70669;
continue;
} else {
var method_70670 = cljs.core.first(seq__70565_70664__$1);
goog.object.set(this$,cljs.core.munge(method_70670),goog.object.get(this$,cljs.core.munge(method_70670)).bind(this$));


var G__70672 = cljs.core.next(seq__70565_70664__$1);
var G__70673 = null;
var G__70674 = (0);
var G__70675 = (0);
seq__70565_70650 = G__70672;
chunk__70566_70651 = G__70673;
count__70567_70652 = G__70674;
i__70568_70653 = G__70675;
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

var seq__70569_70676 = cljs.core.seq(static_properties);
var chunk__70570_70677 = null;
var count__70571_70678 = (0);
var i__70572_70679 = (0);
while(true){
if((i__70572_70679 < count__70571_70678)){
var vec__70579_70680 = chunk__70570_70677.cljs$core$IIndexed$_nth$arity$2(null,i__70572_70679);
var k_70681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70579_70680,(0),null);
var v_70682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70579_70680,(1),null);
goog.object.set(ctor,k_70681,v_70682);


var G__70683 = seq__70569_70676;
var G__70684 = chunk__70570_70677;
var G__70685 = count__70571_70678;
var G__70686 = (i__70572_70679 + (1));
seq__70569_70676 = G__70683;
chunk__70570_70677 = G__70684;
count__70571_70678 = G__70685;
i__70572_70679 = G__70686;
continue;
} else {
var temp__5753__auto___70688 = cljs.core.seq(seq__70569_70676);
if(temp__5753__auto___70688){
var seq__70569_70689__$1 = temp__5753__auto___70688;
if(cljs.core.chunked_seq_QMARK_(seq__70569_70689__$1)){
var c__4556__auto___70690 = cljs.core.chunk_first(seq__70569_70689__$1);
var G__70691 = cljs.core.chunk_rest(seq__70569_70689__$1);
var G__70692 = c__4556__auto___70690;
var G__70693 = cljs.core.count(c__4556__auto___70690);
var G__70694 = (0);
seq__70569_70676 = G__70691;
chunk__70570_70677 = G__70692;
count__70571_70678 = G__70693;
i__70572_70679 = G__70694;
continue;
} else {
var vec__70582_70695 = cljs.core.first(seq__70569_70689__$1);
var k_70696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70582_70695,(0),null);
var v_70697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70582_70695,(1),null);
goog.object.set(ctor,k_70696,v_70697);


var G__70699 = cljs.core.next(seq__70569_70689__$1);
var G__70700 = null;
var G__70701 = (0);
var G__70702 = (0);
seq__70569_70676 = G__70699;
chunk__70570_70677 = G__70700;
count__70571_70678 = G__70701;
i__70572_70679 = G__70702;
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
