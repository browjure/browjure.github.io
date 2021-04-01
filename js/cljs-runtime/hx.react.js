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
var G__66769__delegate = function (args__$1){
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(first_child,args__$1);
if(cljs.core.vector_QMARK_(ret)){
return hx.hiccup._as_element(ret,config);
} else {
return ret;
}
};
var G__66769 = function (var_args){
var args__$1 = null;
if (arguments.length > 0) {
var G__66774__i = 0, G__66774__a = new Array(arguments.length -  0);
while (G__66774__i < G__66774__a.length) {G__66774__a[G__66774__i] = arguments[G__66774__i + 0]; ++G__66774__i;}
  args__$1 = new cljs.core.IndexedSeq(G__66774__a,0,null);
} 
return G__66769__delegate.call(this,args__$1);};
G__66769.cljs$lang$maxFixedArity = 0;
G__66769.cljs$lang$applyTo = (function (arglist__66775){
var args__$1 = cljs.core.seq(arglist__66775);
return G__66769__delegate(args__$1);
});
G__66769.cljs$core$IFn$_invoke$arity$variadic = G__66769__delegate;
return G__66769;
})()
;
});
hx.react.create_element = (function hx$react$create_element(config,el,args){
var first_arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(args,(0),null);
var props_QMARK_ = cljs.core.map_QMARK_(first_arg);
var props = hx.react.props(el,first_arg,props_QMARK_);
var children = ((props_QMARK_)?cljs.core._rest(args):args);
var first_child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(children,(0),null);
var G__66601 = cljs.core.count(children);
switch (G__66601) {
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

var G__66782 = a;
var G__66783 = cljs.core._next(c);
a = G__66782;
c = G__66783;
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
hx.react.Provider = (function hx$react$Provider(props__66506__auto__,maybe_ref__66507__auto__){
var vec__66630 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1 ? hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1(props__66506__auto__) : hx.react.props__GT_clj.call(null,props__66506__auto__)),maybe_ref__66507__auto__], null);
var map__66633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66630,(0),null);
var map__66633__$1 = (((((!((map__66633 == null))))?(((((map__66633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66633):map__66633);
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66633__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66633__$1,new cljs.core.Keyword(null,"value","value",305978217));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66633__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return hx.react.parse_body(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [context.Provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null),children], null));
});

if(cljs.core.truth_(goog.DEBUG)){
goog.object.set(hx.react.Provider,"displayName","hx.react/Provider");
} else {
}
hx.hiccup.extend_tag(new cljs.core.Keyword(null,"provider","provider",-302056900),hx.react.Provider);
hx.react.$ = (function hx$react$$(var_args){
var args__4742__auto__ = [];
var len__4736__auto___66791 = arguments.length;
var i__4737__auto___66792 = (0);
while(true){
if((i__4737__auto___66792 < len__4736__auto___66791)){
args__4742__auto__.push((arguments[i__4737__auto___66792]));

var G__66793 = (i__4737__auto___66792 + (1));
i__4737__auto___66792 = G__66793;
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
(hx.react.$.cljs$lang$applyTo = (function (seq66642){
var G__66643 = cljs.core.first(seq66642);
var seq66642__$1 = cljs.core.next(seq66642);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66643,seq66642__$1);
}));

hx.react.assign_methods = (function hx$react$assign_methods(class$,method_map){
var seq__66664_66800 = cljs.core.seq(method_map);
var chunk__66665_66801 = null;
var count__66666_66802 = (0);
var i__66667_66803 = (0);
while(true){
if((i__66667_66803 < count__66666_66802)){
var vec__66682_66804 = chunk__66665_66801.cljs$core$IIndexed$_nth$arity$2(null,i__66667_66803);
var method_name_66805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66682_66804,(0),null);
var method_fn_66806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66682_66804,(1),null);
goog.object.set(class$.prototype,cljs.core.munge(cljs.core.name(method_name_66805)),method_fn_66806);


var G__66809 = seq__66664_66800;
var G__66810 = chunk__66665_66801;
var G__66811 = count__66666_66802;
var G__66812 = (i__66667_66803 + (1));
seq__66664_66800 = G__66809;
chunk__66665_66801 = G__66810;
count__66666_66802 = G__66811;
i__66667_66803 = G__66812;
continue;
} else {
var temp__5753__auto___66813 = cljs.core.seq(seq__66664_66800);
if(temp__5753__auto___66813){
var seq__66664_66814__$1 = temp__5753__auto___66813;
if(cljs.core.chunked_seq_QMARK_(seq__66664_66814__$1)){
var c__4556__auto___66816 = cljs.core.chunk_first(seq__66664_66814__$1);
var G__66817 = cljs.core.chunk_rest(seq__66664_66814__$1);
var G__66818 = c__4556__auto___66816;
var G__66819 = cljs.core.count(c__4556__auto___66816);
var G__66820 = (0);
seq__66664_66800 = G__66817;
chunk__66665_66801 = G__66818;
count__66666_66802 = G__66819;
i__66667_66803 = G__66820;
continue;
} else {
var vec__66690_66821 = cljs.core.first(seq__66664_66814__$1);
var method_name_66822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66690_66821,(0),null);
var method_fn_66823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66690_66821,(1),null);
goog.object.set(class$.prototype,cljs.core.munge(cljs.core.name(method_name_66822)),method_fn_66823);


var G__66825 = cljs.core.next(seq__66664_66814__$1);
var G__66826 = null;
var G__66827 = (0);
var G__66828 = (0);
seq__66664_66800 = G__66825;
chunk__66665_66801 = G__66826;
count__66666_66802 = G__66827;
i__66667_66803 = G__66828;
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
var seq__66694_66831 = cljs.core.seq(method_names);
var chunk__66697_66832 = null;
var count__66698_66833 = (0);
var i__66699_66834 = (0);
while(true){
if((i__66699_66834 < count__66698_66833)){
var method_66835 = chunk__66697_66832.cljs$core$IIndexed$_nth$arity$2(null,i__66699_66834);
goog.object.set(this$,cljs.core.munge(method_66835),goog.object.get(this$,cljs.core.munge(method_66835)).bind(this$));


var G__66836 = seq__66694_66831;
var G__66837 = chunk__66697_66832;
var G__66838 = count__66698_66833;
var G__66839 = (i__66699_66834 + (1));
seq__66694_66831 = G__66836;
chunk__66697_66832 = G__66837;
count__66698_66833 = G__66838;
i__66699_66834 = G__66839;
continue;
} else {
var temp__5753__auto___66840 = cljs.core.seq(seq__66694_66831);
if(temp__5753__auto___66840){
var seq__66694_66841__$1 = temp__5753__auto___66840;
if(cljs.core.chunked_seq_QMARK_(seq__66694_66841__$1)){
var c__4556__auto___66845 = cljs.core.chunk_first(seq__66694_66841__$1);
var G__66846 = cljs.core.chunk_rest(seq__66694_66841__$1);
var G__66847 = c__4556__auto___66845;
var G__66848 = cljs.core.count(c__4556__auto___66845);
var G__66849 = (0);
seq__66694_66831 = G__66846;
chunk__66697_66832 = G__66847;
count__66698_66833 = G__66848;
i__66699_66834 = G__66849;
continue;
} else {
var method_66852 = cljs.core.first(seq__66694_66841__$1);
goog.object.set(this$,cljs.core.munge(method_66852),goog.object.get(this$,cljs.core.munge(method_66852)).bind(this$));


var G__66853 = cljs.core.next(seq__66694_66841__$1);
var G__66854 = null;
var G__66855 = (0);
var G__66856 = (0);
seq__66694_66831 = G__66853;
chunk__66697_66832 = G__66854;
count__66698_66833 = G__66855;
i__66699_66834 = G__66856;
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

var seq__66708_66857 = cljs.core.seq(static_properties);
var chunk__66710_66858 = null;
var count__66711_66859 = (0);
var i__66712_66860 = (0);
while(true){
if((i__66712_66860 < count__66711_66859)){
var vec__66725_66862 = chunk__66710_66858.cljs$core$IIndexed$_nth$arity$2(null,i__66712_66860);
var k_66863 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66725_66862,(0),null);
var v_66864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66725_66862,(1),null);
goog.object.set(ctor,k_66863,v_66864);


var G__66868 = seq__66708_66857;
var G__66869 = chunk__66710_66858;
var G__66870 = count__66711_66859;
var G__66871 = (i__66712_66860 + (1));
seq__66708_66857 = G__66868;
chunk__66710_66858 = G__66869;
count__66711_66859 = G__66870;
i__66712_66860 = G__66871;
continue;
} else {
var temp__5753__auto___66872 = cljs.core.seq(seq__66708_66857);
if(temp__5753__auto___66872){
var seq__66708_66874__$1 = temp__5753__auto___66872;
if(cljs.core.chunked_seq_QMARK_(seq__66708_66874__$1)){
var c__4556__auto___66875 = cljs.core.chunk_first(seq__66708_66874__$1);
var G__66876 = cljs.core.chunk_rest(seq__66708_66874__$1);
var G__66877 = c__4556__auto___66875;
var G__66878 = cljs.core.count(c__4556__auto___66875);
var G__66879 = (0);
seq__66708_66857 = G__66876;
chunk__66710_66858 = G__66877;
count__66711_66859 = G__66878;
i__66712_66860 = G__66879;
continue;
} else {
var vec__66738_66880 = cljs.core.first(seq__66708_66874__$1);
var k_66881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66738_66880,(0),null);
var v_66882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66738_66880,(1),null);
goog.object.set(ctor,k_66881,v_66882);


var G__66889 = cljs.core.next(seq__66708_66874__$1);
var G__66890 = null;
var G__66891 = (0);
var G__66892 = (0);
seq__66708_66857 = G__66889;
chunk__66710_66858 = G__66890;
count__66711_66859 = G__66891;
i__66712_66860 = G__66892;
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
