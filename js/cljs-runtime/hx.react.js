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
var G__76664__delegate = function (args__$1){
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(first_child,args__$1);
if(cljs.core.vector_QMARK_(ret)){
return hx.hiccup._as_element(ret,config);
} else {
return ret;
}
};
var G__76664 = function (var_args){
var args__$1 = null;
if (arguments.length > 0) {
var G__76666__i = 0, G__76666__a = new Array(arguments.length -  0);
while (G__76666__i < G__76666__a.length) {G__76666__a[G__76666__i] = arguments[G__76666__i + 0]; ++G__76666__i;}
  args__$1 = new cljs.core.IndexedSeq(G__76666__a,0,null);
} 
return G__76664__delegate.call(this,args__$1);};
G__76664.cljs$lang$maxFixedArity = 0;
G__76664.cljs$lang$applyTo = (function (arglist__76667){
var args__$1 = cljs.core.seq(arglist__76667);
return G__76664__delegate(args__$1);
});
G__76664.cljs$core$IFn$_invoke$arity$variadic = G__76664__delegate;
return G__76664;
})()
;
});
hx.react.create_element = (function hx$react$create_element(config,el,args){
var first_arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(args,(0),null);
var props_QMARK_ = cljs.core.map_QMARK_(first_arg);
var props = hx.react.props(el,first_arg,props_QMARK_);
var children = ((props_QMARK_)?cljs.core._rest(args):args);
var first_child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(children,(0),null);
var G__76565 = cljs.core.count(children);
switch (G__76565) {
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

var G__76681 = a;
var G__76682 = cljs.core._next(c);
a = G__76681;
c = G__76682;
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
hx.react.Provider = (function hx$react$Provider(props__58656__auto__,maybe_ref__58657__auto__){
var vec__76574 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1 ? hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1(props__58656__auto__) : hx.react.props__GT_clj.call(null,props__58656__auto__)),maybe_ref__58657__auto__], null);
var map__76577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76574,(0),null);
var map__76577__$1 = (((((!((map__76577 == null))))?(((((map__76577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76577):map__76577);
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76577__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76577__$1,new cljs.core.Keyword(null,"value","value",305978217));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76577__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return hx.react.parse_body(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [context.Provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null),children], null));
});

if(cljs.core.truth_(goog.DEBUG)){
goog.object.set(hx.react.Provider,"displayName","hx.react/Provider");
} else {
}
hx.hiccup.extend_tag(new cljs.core.Keyword(null,"provider","provider",-302056900),hx.react.Provider);
hx.react.$ = (function hx$react$$(var_args){
var args__4742__auto__ = [];
var len__4736__auto___76693 = arguments.length;
var i__4737__auto___76694 = (0);
while(true){
if((i__4737__auto___76694 < len__4736__auto___76693)){
args__4742__auto__.push((arguments[i__4737__auto___76694]));

var G__76695 = (i__4737__auto___76694 + (1));
i__4737__auto___76694 = G__76695;
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
(hx.react.$.cljs$lang$applyTo = (function (seq76585){
var G__76586 = cljs.core.first(seq76585);
var seq76585__$1 = cljs.core.next(seq76585);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__76586,seq76585__$1);
}));

hx.react.assign_methods = (function hx$react$assign_methods(class$,method_map){
var seq__76590_76701 = cljs.core.seq(method_map);
var chunk__76591_76702 = null;
var count__76592_76703 = (0);
var i__76593_76704 = (0);
while(true){
if((i__76593_76704 < count__76592_76703)){
var vec__76611_76709 = chunk__76591_76702.cljs$core$IIndexed$_nth$arity$2(null,i__76593_76704);
var method_name_76710 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76611_76709,(0),null);
var method_fn_76711 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76611_76709,(1),null);
goog.object.set(class$.prototype,cljs.core.munge(cljs.core.name(method_name_76710)),method_fn_76711);


var G__76717 = seq__76590_76701;
var G__76718 = chunk__76591_76702;
var G__76719 = count__76592_76703;
var G__76720 = (i__76593_76704 + (1));
seq__76590_76701 = G__76717;
chunk__76591_76702 = G__76718;
count__76592_76703 = G__76719;
i__76593_76704 = G__76720;
continue;
} else {
var temp__5753__auto___76721 = cljs.core.seq(seq__76590_76701);
if(temp__5753__auto___76721){
var seq__76590_76722__$1 = temp__5753__auto___76721;
if(cljs.core.chunked_seq_QMARK_(seq__76590_76722__$1)){
var c__4556__auto___76723 = cljs.core.chunk_first(seq__76590_76722__$1);
var G__76728 = cljs.core.chunk_rest(seq__76590_76722__$1);
var G__76729 = c__4556__auto___76723;
var G__76730 = cljs.core.count(c__4556__auto___76723);
var G__76731 = (0);
seq__76590_76701 = G__76728;
chunk__76591_76702 = G__76729;
count__76592_76703 = G__76730;
i__76593_76704 = G__76731;
continue;
} else {
var vec__76616_76733 = cljs.core.first(seq__76590_76722__$1);
var method_name_76734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76616_76733,(0),null);
var method_fn_76735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76616_76733,(1),null);
goog.object.set(class$.prototype,cljs.core.munge(cljs.core.name(method_name_76734)),method_fn_76735);


var G__76739 = cljs.core.next(seq__76590_76722__$1);
var G__76740 = null;
var G__76741 = (0);
var G__76742 = (0);
seq__76590_76701 = G__76739;
chunk__76591_76702 = G__76740;
count__76592_76703 = G__76741;
i__76593_76704 = G__76742;
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
var seq__76623_76743 = cljs.core.seq(method_names);
var chunk__76624_76744 = null;
var count__76625_76745 = (0);
var i__76626_76746 = (0);
while(true){
if((i__76626_76746 < count__76625_76745)){
var method_76748 = chunk__76624_76744.cljs$core$IIndexed$_nth$arity$2(null,i__76626_76746);
goog.object.set(this$,cljs.core.munge(method_76748),goog.object.get(this$,cljs.core.munge(method_76748)).bind(this$));


var G__76750 = seq__76623_76743;
var G__76751 = chunk__76624_76744;
var G__76752 = count__76625_76745;
var G__76753 = (i__76626_76746 + (1));
seq__76623_76743 = G__76750;
chunk__76624_76744 = G__76751;
count__76625_76745 = G__76752;
i__76626_76746 = G__76753;
continue;
} else {
var temp__5753__auto___76754 = cljs.core.seq(seq__76623_76743);
if(temp__5753__auto___76754){
var seq__76623_76755__$1 = temp__5753__auto___76754;
if(cljs.core.chunked_seq_QMARK_(seq__76623_76755__$1)){
var c__4556__auto___76756 = cljs.core.chunk_first(seq__76623_76755__$1);
var G__76757 = cljs.core.chunk_rest(seq__76623_76755__$1);
var G__76759 = c__4556__auto___76756;
var G__76760 = cljs.core.count(c__4556__auto___76756);
var G__76761 = (0);
seq__76623_76743 = G__76757;
chunk__76624_76744 = G__76759;
count__76625_76745 = G__76760;
i__76626_76746 = G__76761;
continue;
} else {
var method_76762 = cljs.core.first(seq__76623_76755__$1);
goog.object.set(this$,cljs.core.munge(method_76762),goog.object.get(this$,cljs.core.munge(method_76762)).bind(this$));


var G__76767 = cljs.core.next(seq__76623_76755__$1);
var G__76768 = null;
var G__76769 = (0);
var G__76770 = (0);
seq__76623_76743 = G__76767;
chunk__76624_76744 = G__76768;
count__76625_76745 = G__76769;
i__76626_76746 = G__76770;
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

var seq__76631_76772 = cljs.core.seq(static_properties);
var chunk__76632_76773 = null;
var count__76633_76774 = (0);
var i__76634_76775 = (0);
while(true){
if((i__76634_76775 < count__76633_76774)){
var vec__76648_76777 = chunk__76632_76773.cljs$core$IIndexed$_nth$arity$2(null,i__76634_76775);
var k_76778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76648_76777,(0),null);
var v_76779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76648_76777,(1),null);
goog.object.set(ctor,k_76778,v_76779);


var G__76780 = seq__76631_76772;
var G__76781 = chunk__76632_76773;
var G__76782 = count__76633_76774;
var G__76783 = (i__76634_76775 + (1));
seq__76631_76772 = G__76780;
chunk__76632_76773 = G__76781;
count__76633_76774 = G__76782;
i__76634_76775 = G__76783;
continue;
} else {
var temp__5753__auto___76784 = cljs.core.seq(seq__76631_76772);
if(temp__5753__auto___76784){
var seq__76631_76785__$1 = temp__5753__auto___76784;
if(cljs.core.chunked_seq_QMARK_(seq__76631_76785__$1)){
var c__4556__auto___76787 = cljs.core.chunk_first(seq__76631_76785__$1);
var G__76788 = cljs.core.chunk_rest(seq__76631_76785__$1);
var G__76789 = c__4556__auto___76787;
var G__76790 = cljs.core.count(c__4556__auto___76787);
var G__76791 = (0);
seq__76631_76772 = G__76788;
chunk__76632_76773 = G__76789;
count__76633_76774 = G__76790;
i__76634_76775 = G__76791;
continue;
} else {
var vec__76653_76792 = cljs.core.first(seq__76631_76785__$1);
var k_76793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76653_76792,(0),null);
var v_76794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76653_76792,(1),null);
goog.object.set(ctor,k_76793,v_76794);


var G__76796 = cljs.core.next(seq__76631_76785__$1);
var G__76797 = null;
var G__76798 = (0);
var G__76799 = (0);
seq__76631_76772 = G__76796;
chunk__76632_76773 = G__76797;
count__76633_76774 = G__76798;
i__76634_76775 = G__76799;
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
