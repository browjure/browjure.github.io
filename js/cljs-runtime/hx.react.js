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
var G__79122__delegate = function (args__$1){
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(first_child,args__$1);
if(cljs.core.vector_QMARK_(ret)){
return hx.hiccup._as_element(ret,config);
} else {
return ret;
}
};
var G__79122 = function (var_args){
var args__$1 = null;
if (arguments.length > 0) {
var G__79123__i = 0, G__79123__a = new Array(arguments.length -  0);
while (G__79123__i < G__79123__a.length) {G__79123__a[G__79123__i] = arguments[G__79123__i + 0]; ++G__79123__i;}
  args__$1 = new cljs.core.IndexedSeq(G__79123__a,0,null);
} 
return G__79122__delegate.call(this,args__$1);};
G__79122.cljs$lang$maxFixedArity = 0;
G__79122.cljs$lang$applyTo = (function (arglist__79125){
var args__$1 = cljs.core.seq(arglist__79125);
return G__79122__delegate(args__$1);
});
G__79122.cljs$core$IFn$_invoke$arity$variadic = G__79122__delegate;
return G__79122;
})()
;
});
hx.react.create_element = (function hx$react$create_element(config,el,args){
var first_arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(args,(0),null);
var props_QMARK_ = cljs.core.map_QMARK_(first_arg);
var props = hx.react.props(el,first_arg,props_QMARK_);
var children = ((props_QMARK_)?cljs.core._rest(args):args);
var first_child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(children,(0),null);
var G__78946 = cljs.core.count(children);
switch (G__78946) {
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

var G__79132 = a;
var G__79133 = cljs.core._next(c);
a = G__79132;
c = G__79133;
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
hx.react.Provider = (function hx$react$Provider(props__58967__auto__,maybe_ref__58968__auto__){
var vec__78955 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1 ? hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1(props__58967__auto__) : hx.react.props__GT_clj.call(null,props__58967__auto__)),maybe_ref__58968__auto__], null);
var map__78958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78955,(0),null);
var map__78958__$1 = (((((!((map__78958 == null))))?(((((map__78958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78958):map__78958);
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78958__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78958__$1,new cljs.core.Keyword(null,"value","value",305978217));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78958__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return hx.react.parse_body(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [context.Provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null),children], null));
});

if(cljs.core.truth_(goog.DEBUG)){
goog.object.set(hx.react.Provider,"displayName","hx.react/Provider");
} else {
}
hx.hiccup.extend_tag(new cljs.core.Keyword(null,"provider","provider",-302056900),hx.react.Provider);
hx.react.$ = (function hx$react$$(var_args){
var args__4742__auto__ = [];
var len__4736__auto___79137 = arguments.length;
var i__4737__auto___79138 = (0);
while(true){
if((i__4737__auto___79138 < len__4736__auto___79137)){
args__4742__auto__.push((arguments[i__4737__auto___79138]));

var G__79139 = (i__4737__auto___79138 + (1));
i__4737__auto___79138 = G__79139;
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
(hx.react.$.cljs$lang$applyTo = (function (seq78966){
var G__78967 = cljs.core.first(seq78966);
var seq78966__$1 = cljs.core.next(seq78966);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78967,seq78966__$1);
}));

hx.react.assign_methods = (function hx$react$assign_methods(class$,method_map){
var seq__78972_79149 = cljs.core.seq(method_map);
var chunk__78973_79150 = null;
var count__78974_79151 = (0);
var i__78975_79152 = (0);
while(true){
if((i__78975_79152 < count__78974_79151)){
var vec__78989_79156 = chunk__78973_79150.cljs$core$IIndexed$_nth$arity$2(null,i__78975_79152);
var method_name_79157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78989_79156,(0),null);
var method_fn_79158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78989_79156,(1),null);
goog.object.set(class$.prototype,cljs.core.munge(cljs.core.name(method_name_79157)),method_fn_79158);


var G__79163 = seq__78972_79149;
var G__79164 = chunk__78973_79150;
var G__79165 = count__78974_79151;
var G__79166 = (i__78975_79152 + (1));
seq__78972_79149 = G__79163;
chunk__78973_79150 = G__79164;
count__78974_79151 = G__79165;
i__78975_79152 = G__79166;
continue;
} else {
var temp__5753__auto___79169 = cljs.core.seq(seq__78972_79149);
if(temp__5753__auto___79169){
var seq__78972_79171__$1 = temp__5753__auto___79169;
if(cljs.core.chunked_seq_QMARK_(seq__78972_79171__$1)){
var c__4556__auto___79172 = cljs.core.chunk_first(seq__78972_79171__$1);
var G__79173 = cljs.core.chunk_rest(seq__78972_79171__$1);
var G__79174 = c__4556__auto___79172;
var G__79175 = cljs.core.count(c__4556__auto___79172);
var G__79176 = (0);
seq__78972_79149 = G__79173;
chunk__78973_79150 = G__79174;
count__78974_79151 = G__79175;
i__78975_79152 = G__79176;
continue;
} else {
var vec__78992_79177 = cljs.core.first(seq__78972_79171__$1);
var method_name_79178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78992_79177,(0),null);
var method_fn_79179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78992_79177,(1),null);
goog.object.set(class$.prototype,cljs.core.munge(cljs.core.name(method_name_79178)),method_fn_79179);


var G__79184 = cljs.core.next(seq__78972_79171__$1);
var G__79185 = null;
var G__79186 = (0);
var G__79187 = (0);
seq__78972_79149 = G__79184;
chunk__78973_79150 = G__79185;
count__78974_79151 = G__79186;
i__78975_79152 = G__79187;
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
var seq__79004_79188 = cljs.core.seq(method_names);
var chunk__79005_79189 = null;
var count__79006_79190 = (0);
var i__79007_79191 = (0);
while(true){
if((i__79007_79191 < count__79006_79190)){
var method_79194 = chunk__79005_79189.cljs$core$IIndexed$_nth$arity$2(null,i__79007_79191);
goog.object.set(this$,cljs.core.munge(method_79194),goog.object.get(this$,cljs.core.munge(method_79194)).bind(this$));


var G__79195 = seq__79004_79188;
var G__79196 = chunk__79005_79189;
var G__79197 = count__79006_79190;
var G__79198 = (i__79007_79191 + (1));
seq__79004_79188 = G__79195;
chunk__79005_79189 = G__79196;
count__79006_79190 = G__79197;
i__79007_79191 = G__79198;
continue;
} else {
var temp__5753__auto___79199 = cljs.core.seq(seq__79004_79188);
if(temp__5753__auto___79199){
var seq__79004_79200__$1 = temp__5753__auto___79199;
if(cljs.core.chunked_seq_QMARK_(seq__79004_79200__$1)){
var c__4556__auto___79201 = cljs.core.chunk_first(seq__79004_79200__$1);
var G__79202 = cljs.core.chunk_rest(seq__79004_79200__$1);
var G__79203 = c__4556__auto___79201;
var G__79204 = cljs.core.count(c__4556__auto___79201);
var G__79205 = (0);
seq__79004_79188 = G__79202;
chunk__79005_79189 = G__79203;
count__79006_79190 = G__79204;
i__79007_79191 = G__79205;
continue;
} else {
var method_79207 = cljs.core.first(seq__79004_79200__$1);
goog.object.set(this$,cljs.core.munge(method_79207),goog.object.get(this$,cljs.core.munge(method_79207)).bind(this$));


var G__79208 = cljs.core.next(seq__79004_79200__$1);
var G__79209 = null;
var G__79210 = (0);
var G__79211 = (0);
seq__79004_79188 = G__79208;
chunk__79005_79189 = G__79209;
count__79006_79190 = G__79210;
i__79007_79191 = G__79211;
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

var seq__79029_79212 = cljs.core.seq(static_properties);
var chunk__79030_79213 = null;
var count__79031_79214 = (0);
var i__79032_79215 = (0);
while(true){
if((i__79032_79215 < count__79031_79214)){
var vec__79050_79216 = chunk__79030_79213.cljs$core$IIndexed$_nth$arity$2(null,i__79032_79215);
var k_79217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79050_79216,(0),null);
var v_79218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79050_79216,(1),null);
goog.object.set(ctor,k_79217,v_79218);


var G__79219 = seq__79029_79212;
var G__79220 = chunk__79030_79213;
var G__79221 = count__79031_79214;
var G__79222 = (i__79032_79215 + (1));
seq__79029_79212 = G__79219;
chunk__79030_79213 = G__79220;
count__79031_79214 = G__79221;
i__79032_79215 = G__79222;
continue;
} else {
var temp__5753__auto___79223 = cljs.core.seq(seq__79029_79212);
if(temp__5753__auto___79223){
var seq__79029_79224__$1 = temp__5753__auto___79223;
if(cljs.core.chunked_seq_QMARK_(seq__79029_79224__$1)){
var c__4556__auto___79225 = cljs.core.chunk_first(seq__79029_79224__$1);
var G__79226 = cljs.core.chunk_rest(seq__79029_79224__$1);
var G__79227 = c__4556__auto___79225;
var G__79228 = cljs.core.count(c__4556__auto___79225);
var G__79229 = (0);
seq__79029_79212 = G__79226;
chunk__79030_79213 = G__79227;
count__79031_79214 = G__79228;
i__79032_79215 = G__79229;
continue;
} else {
var vec__79073_79230 = cljs.core.first(seq__79029_79224__$1);
var k_79231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79073_79230,(0),null);
var v_79232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79073_79230,(1),null);
goog.object.set(ctor,k_79231,v_79232);


var G__79233 = cljs.core.next(seq__79029_79224__$1);
var G__79234 = null;
var G__79235 = (0);
var G__79236 = (0);
seq__79029_79212 = G__79233;
chunk__79030_79213 = G__79234;
count__79031_79214 = G__79235;
i__79032_79215 = G__79236;
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
