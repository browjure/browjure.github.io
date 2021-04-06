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
var G__75180__delegate = function (args__$1){
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(first_child,args__$1);
if(cljs.core.vector_QMARK_(ret)){
return hx.hiccup._as_element(ret,config);
} else {
return ret;
}
};
var G__75180 = function (var_args){
var args__$1 = null;
if (arguments.length > 0) {
var G__75181__i = 0, G__75181__a = new Array(arguments.length -  0);
while (G__75181__i < G__75181__a.length) {G__75181__a[G__75181__i] = arguments[G__75181__i + 0]; ++G__75181__i;}
  args__$1 = new cljs.core.IndexedSeq(G__75181__a,0,null);
} 
return G__75180__delegate.call(this,args__$1);};
G__75180.cljs$lang$maxFixedArity = 0;
G__75180.cljs$lang$applyTo = (function (arglist__75183){
var args__$1 = cljs.core.seq(arglist__75183);
return G__75180__delegate(args__$1);
});
G__75180.cljs$core$IFn$_invoke$arity$variadic = G__75180__delegate;
return G__75180;
})()
;
});
hx.react.create_element = (function hx$react$create_element(config,el,args){
var first_arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(args,(0),null);
var props_QMARK_ = cljs.core.map_QMARK_(first_arg);
var props = hx.react.props(el,first_arg,props_QMARK_);
var children = ((props_QMARK_)?cljs.core._rest(args):args);
var first_child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(children,(0),null);
var G__75067 = cljs.core.count(children);
switch (G__75067) {
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

var G__75189 = a;
var G__75190 = cljs.core._next(c);
a = G__75189;
c = G__75190;
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
hx.react.Provider = (function hx$react$Provider(props__60404__auto__,maybe_ref__60405__auto__){
var vec__75083 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1 ? hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1(props__60404__auto__) : hx.react.props__GT_clj.call(null,props__60404__auto__)),maybe_ref__60405__auto__], null);
var map__75086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75083,(0),null);
var map__75086__$1 = (((((!((map__75086 == null))))?(((((map__75086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75086):map__75086);
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75086__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75086__$1,new cljs.core.Keyword(null,"value","value",305978217));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75086__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return hx.react.parse_body(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [context.Provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null),children], null));
});

if(cljs.core.truth_(goog.DEBUG)){
goog.object.set(hx.react.Provider,"displayName","hx.react/Provider");
} else {
}
hx.hiccup.extend_tag(new cljs.core.Keyword(null,"provider","provider",-302056900),hx.react.Provider);
hx.react.$ = (function hx$react$$(var_args){
var args__4742__auto__ = [];
var len__4736__auto___75194 = arguments.length;
var i__4737__auto___75195 = (0);
while(true){
if((i__4737__auto___75195 < len__4736__auto___75194)){
args__4742__auto__.push((arguments[i__4737__auto___75195]));

var G__75196 = (i__4737__auto___75195 + (1));
i__4737__auto___75195 = G__75196;
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
(hx.react.$.cljs$lang$applyTo = (function (seq75089){
var G__75090 = cljs.core.first(seq75089);
var seq75089__$1 = cljs.core.next(seq75089);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__75090,seq75089__$1);
}));

hx.react.assign_methods = (function hx$react$assign_methods(class$,method_map){
var seq__75094_75198 = cljs.core.seq(method_map);
var chunk__75095_75199 = null;
var count__75096_75200 = (0);
var i__75097_75201 = (0);
while(true){
if((i__75097_75201 < count__75096_75200)){
var vec__75106_75203 = chunk__75095_75199.cljs$core$IIndexed$_nth$arity$2(null,i__75097_75201);
var method_name_75204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75106_75203,(0),null);
var method_fn_75205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75106_75203,(1),null);
goog.object.set(class$.prototype,cljs.core.munge(cljs.core.name(method_name_75204)),method_fn_75205);


var G__75211 = seq__75094_75198;
var G__75212 = chunk__75095_75199;
var G__75213 = count__75096_75200;
var G__75214 = (i__75097_75201 + (1));
seq__75094_75198 = G__75211;
chunk__75095_75199 = G__75212;
count__75096_75200 = G__75213;
i__75097_75201 = G__75214;
continue;
} else {
var temp__5753__auto___75215 = cljs.core.seq(seq__75094_75198);
if(temp__5753__auto___75215){
var seq__75094_75216__$1 = temp__5753__auto___75215;
if(cljs.core.chunked_seq_QMARK_(seq__75094_75216__$1)){
var c__4556__auto___75217 = cljs.core.chunk_first(seq__75094_75216__$1);
var G__75218 = cljs.core.chunk_rest(seq__75094_75216__$1);
var G__75219 = c__4556__auto___75217;
var G__75220 = cljs.core.count(c__4556__auto___75217);
var G__75221 = (0);
seq__75094_75198 = G__75218;
chunk__75095_75199 = G__75219;
count__75096_75200 = G__75220;
i__75097_75201 = G__75221;
continue;
} else {
var vec__75124_75223 = cljs.core.first(seq__75094_75216__$1);
var method_name_75224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75124_75223,(0),null);
var method_fn_75225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75124_75223,(1),null);
goog.object.set(class$.prototype,cljs.core.munge(cljs.core.name(method_name_75224)),method_fn_75225);


var G__75226 = cljs.core.next(seq__75094_75216__$1);
var G__75227 = null;
var G__75228 = (0);
var G__75229 = (0);
seq__75094_75198 = G__75226;
chunk__75095_75199 = G__75227;
count__75096_75200 = G__75228;
i__75097_75201 = G__75229;
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
var seq__75128_75232 = cljs.core.seq(method_names);
var chunk__75129_75233 = null;
var count__75130_75234 = (0);
var i__75131_75235 = (0);
while(true){
if((i__75131_75235 < count__75130_75234)){
var method_75237 = chunk__75129_75233.cljs$core$IIndexed$_nth$arity$2(null,i__75131_75235);
goog.object.set(this$,cljs.core.munge(method_75237),goog.object.get(this$,cljs.core.munge(method_75237)).bind(this$));


var G__75239 = seq__75128_75232;
var G__75240 = chunk__75129_75233;
var G__75241 = count__75130_75234;
var G__75242 = (i__75131_75235 + (1));
seq__75128_75232 = G__75239;
chunk__75129_75233 = G__75240;
count__75130_75234 = G__75241;
i__75131_75235 = G__75242;
continue;
} else {
var temp__5753__auto___75244 = cljs.core.seq(seq__75128_75232);
if(temp__5753__auto___75244){
var seq__75128_75245__$1 = temp__5753__auto___75244;
if(cljs.core.chunked_seq_QMARK_(seq__75128_75245__$1)){
var c__4556__auto___75246 = cljs.core.chunk_first(seq__75128_75245__$1);
var G__75247 = cljs.core.chunk_rest(seq__75128_75245__$1);
var G__75248 = c__4556__auto___75246;
var G__75249 = cljs.core.count(c__4556__auto___75246);
var G__75250 = (0);
seq__75128_75232 = G__75247;
chunk__75129_75233 = G__75248;
count__75130_75234 = G__75249;
i__75131_75235 = G__75250;
continue;
} else {
var method_75251 = cljs.core.first(seq__75128_75245__$1);
goog.object.set(this$,cljs.core.munge(method_75251),goog.object.get(this$,cljs.core.munge(method_75251)).bind(this$));


var G__75252 = cljs.core.next(seq__75128_75245__$1);
var G__75253 = null;
var G__75254 = (0);
var G__75255 = (0);
seq__75128_75232 = G__75252;
chunk__75129_75233 = G__75253;
count__75130_75234 = G__75254;
i__75131_75235 = G__75255;
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

var seq__75145_75258 = cljs.core.seq(static_properties);
var chunk__75146_75259 = null;
var count__75147_75260 = (0);
var i__75148_75261 = (0);
while(true){
if((i__75148_75261 < count__75147_75260)){
var vec__75159_75262 = chunk__75146_75259.cljs$core$IIndexed$_nth$arity$2(null,i__75148_75261);
var k_75263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75159_75262,(0),null);
var v_75264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75159_75262,(1),null);
goog.object.set(ctor,k_75263,v_75264);


var G__75265 = seq__75145_75258;
var G__75266 = chunk__75146_75259;
var G__75267 = count__75147_75260;
var G__75268 = (i__75148_75261 + (1));
seq__75145_75258 = G__75265;
chunk__75146_75259 = G__75266;
count__75147_75260 = G__75267;
i__75148_75261 = G__75268;
continue;
} else {
var temp__5753__auto___75269 = cljs.core.seq(seq__75145_75258);
if(temp__5753__auto___75269){
var seq__75145_75270__$1 = temp__5753__auto___75269;
if(cljs.core.chunked_seq_QMARK_(seq__75145_75270__$1)){
var c__4556__auto___75271 = cljs.core.chunk_first(seq__75145_75270__$1);
var G__75272 = cljs.core.chunk_rest(seq__75145_75270__$1);
var G__75273 = c__4556__auto___75271;
var G__75274 = cljs.core.count(c__4556__auto___75271);
var G__75275 = (0);
seq__75145_75258 = G__75272;
chunk__75146_75259 = G__75273;
count__75147_75260 = G__75274;
i__75148_75261 = G__75275;
continue;
} else {
var vec__75165_75276 = cljs.core.first(seq__75145_75270__$1);
var k_75277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75165_75276,(0),null);
var v_75278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75165_75276,(1),null);
goog.object.set(ctor,k_75277,v_75278);


var G__75280 = cljs.core.next(seq__75145_75270__$1);
var G__75281 = null;
var G__75282 = (0);
var G__75283 = (0);
seq__75145_75258 = G__75280;
chunk__75146_75259 = G__75281;
count__75147_75260 = G__75282;
i__75148_75261 = G__75283;
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
