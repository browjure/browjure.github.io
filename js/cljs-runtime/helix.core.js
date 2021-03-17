goog.provide('helix.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
if((typeof Symbol !== 'undefined')){
(Symbol.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(Symbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (sym,writer,_){
var sym__$1 = this;
return cljs.core._write(writer,["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym__$1.toString()),"\""].join(''));
}));
} else {
}
helix.core.Fragment = module$node_modules$react$index.Fragment;
helix.core.Suspense = module$node_modules$react$index.Suspense;
helix.core.create_element = module$node_modules$react$index.createElement;
helix.core.create_context = module$node_modules$react$index.createContext;
helix.core.get_react = (function helix$core$get_react(){
return module$node_modules$react$index;
});
/**
 * Create a new React element from a valid React type.
 * 
 *   Example:
 *   ```
 *   ($ MyComponent
 * "child1"
 * ($ "span"
 *   {:style {:color "green"}}
 *   "child2" ))
 *   ```
 */
helix.core.$ = (function helix$core$$(var_args){
var args__4742__auto__ = [];
var len__4736__auto___69827 = arguments.length;
var i__4737__auto___69828 = (0);
while(true){
if((i__4737__auto___69828 < len__4736__auto___69827)){
args__4742__auto__.push((arguments[i__4737__auto___69828]));

var G__69830 = (i__4737__auto___69828 + (1));
i__4737__auto___69828 = G__69830;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return helix.core.$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(helix.core.$.cljs$core$IFn$_invoke$arity$variadic = (function (type,args){
var _QMARK_p = cljs.core.first(args);
var _QMARK_c = cljs.core.rest(args);
var native_QMARK_ = (function (){var or__4126__auto__ = (type instanceof cljs.core.Keyword);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = typeof type === 'string';
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
return new cljs.core.Keyword(null,"native","native",-613060878).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(type));
}
}
})();
var type_SINGLEQUOTE_ = (((type instanceof cljs.core.Keyword))?cljs.core.name(type):type);
if(cljs.core.map_QMARK_(_QMARK_p)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(helix.core.create_element,type_SINGLEQUOTE_,(cljs.core.truth_(native_QMARK_)?helix.impl.props._native_props.cljs$core$IFn$_invoke$arity$1(_QMARK_p):helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(_QMARK_p)),_QMARK_c);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(helix.core.create_element,type_SINGLEQUOTE_,null,args);
}
}));

(helix.core.$.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(helix.core.$.cljs$lang$applyTo = (function (seq69625){
var G__69626 = cljs.core.first(seq69625);
var seq69625__$1 = cljs.core.next(seq69625);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69626,seq69625__$1);
}));

/**
 * Dynamically create a new React element from a valid React type.
 * 
 *   `$` can typically be faster, because it will statically process the arguments
 *   at macro-time if possible.
 * 
 *   Example:
 *   ```
 *   ($$ MyComponent
 * "child1"
 * ($$ "span"
 *   {:style {:color "green"}}
 *   "child2" ))
 *   ```
 */
helix.core.$$ = helix.core.$;

/**
 * @interface
 */
helix.core.IExtractType = function(){};

var helix$core$IExtractType$_type$dyn_69845 = (function (factory){
var x__4428__auto__ = (((factory == null))?null:factory);
var m__4429__auto__ = (helix.core._type[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(factory) : m__4429__auto__.call(null,factory));
} else {
var m__4426__auto__ = (helix.core._type["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(factory) : m__4426__auto__.call(null,factory));
} else {
throw cljs.core.missing_protocol("IExtractType.-type",factory);
}
}
});
/**
 * Extracts the underlying type from the factory function.
 */
helix.core._type = (function helix$core$_type(factory){
if((((!((factory == null)))) && ((!((factory.helix$core$IExtractType$_type$arity$1 == null)))))){
return factory.helix$core$IExtractType$_type$arity$1(factory);
} else {
return helix$core$IExtractType$_type$dyn_69845(factory);
}
});

helix.core.type = (function helix$core$type(f){
return helix.core._type(f);
});
/**
 * Creates a factory function for a React component
 */
helix.core.factory = (function helix$core$factory(type){
var x69697 = (function() { 
var helix$core$factory_$_factory__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(helix.core.$,type,args);
};
var helix$core$factory_$_factory = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__69872__i = 0, G__69872__a = new Array(arguments.length -  0);
while (G__69872__i < G__69872__a.length) {G__69872__a[G__69872__i] = arguments[G__69872__i + 0]; ++G__69872__i;}
  args = new cljs.core.IndexedSeq(G__69872__a,0,null);
} 
return helix$core$factory_$_factory__delegate.call(this,args);};
helix$core$factory_$_factory.cljs$lang$maxFixedArity = 0;
helix$core$factory_$_factory.cljs$lang$applyTo = (function (arglist__69873){
var args = cljs.core.seq(arglist__69873);
return helix$core$factory_$_factory__delegate(args);
});
helix$core$factory_$_factory.cljs$core$IFn$_invoke$arity$variadic = helix$core$factory_$_factory__delegate;
return helix$core$factory_$_factory;
})()
;
(x69697.helix$core$IExtractType$ = cljs.core.PROTOCOL_SENTINEL);

(x69697.helix$core$IExtractType$_type$arity$1 = (function (_){
var ___$1 = this;
return type;
}));

return x69697;
});
helix.core.cljs_factory = (function helix$core$cljs_factory(type){
var x69709 = (function() { 
var helix$core$cljs_factory_$_factory__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var props = cljs.core.first(args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,type,({"helix/props": cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ref","ref",1289896967)], 0)), "key": cljs.core.get.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"key","key",-1516042587),undefined), "ref": cljs.core.get.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"ref","ref",1289896967),undefined)}),cljs.core.rest(args));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,type,({}),args);
}
};
var helix$core$cljs_factory_$_factory = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__69897__i = 0, G__69897__a = new Array(arguments.length -  0);
while (G__69897__i < G__69897__a.length) {G__69897__a[G__69897__i] = arguments[G__69897__i + 0]; ++G__69897__i;}
  args = new cljs.core.IndexedSeq(G__69897__a,0,null);
} 
return helix$core$cljs_factory_$_factory__delegate.call(this,args);};
helix$core$cljs_factory_$_factory.cljs$lang$maxFixedArity = 0;
helix$core$cljs_factory_$_factory.cljs$lang$applyTo = (function (arglist__69898){
var args = cljs.core.seq(arglist__69898);
return helix$core$cljs_factory_$_factory__delegate(args);
});
helix$core$cljs_factory_$_factory.cljs$core$IFn$_invoke$arity$variadic = helix$core$cljs_factory_$_factory__delegate;
return helix$core$cljs_factory_$_factory;
})()
;
(x69709.helix$core$IExtractType$ = cljs.core.PROTOCOL_SENTINEL);

(x69709.helix$core$IExtractType$_type$arity$1 = (function (_){
var ___$1 = this;
return type;
}));

return x69709;
});
helix.core.assoc_some = (function helix$core$assoc_some(m,k,x){
if((!((x == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,x);
} else {
return m;
}
});
helix.core.extract_cljs_props = (function helix$core$extract_cljs_props(o){
if(((goog.DEBUG) && (((cljs.core.map_QMARK_(o)) || ((o == null)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Props received were a map. This probably means you're calling your component as a function.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"props","props",453281727),o], null));
} else {
}

var temp__5751__auto__ = goog.object.get(o,"helix/props");
if(cljs.core.truth_(temp__5751__auto__)){
var props = temp__5751__auto__;
return helix.core.assoc_some(props,new cljs.core.Keyword(null,"children","children",-940561982),goog.object.get(o,"children"));
} else {
return cljs_bean.core.bean.cljs$core$IFn$_invoke$arity$1(o);
}
});
/**
 * Like React.memo, but passes props as CLJS map-likes instead of JS objects.
 */
helix.core.memo = (function helix$core$memo(var_args){
var G__69756 = arguments.length;
switch (G__69756) {
case 1:
return helix.core.memo.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return helix.core.memo.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(helix.core.memo.cljs$core$IFn$_invoke$arity$1 = (function (component){
return module$node_modules$react$index.memo(component);
}));

(helix.core.memo.cljs$core$IFn$_invoke$arity$2 = (function (component,compare){
return module$node_modules$react$index.memo(component,(function helix$core$memo_compare(o,o_SINGLEQUOTE_){
var G__69771 = helix.core.extract_cljs_props(o);
var G__69772 = helix.core.extract_cljs_props(o_SINGLEQUOTE_);
return (compare.cljs$core$IFn$_invoke$arity$2 ? compare.cljs$core$IFn$_invoke$arity$2(G__69771,G__69772) : compare.call(null,G__69771,G__69772));
}));
}));

(helix.core.memo.cljs$lang$maxFixedArity = 2);

helix.core.create_component = (function helix$core$create_component(spec,statics){
var render = spec.render;
var render_SINGLEQUOTE_ = (function (this$){
var G__69784 = this$;
var G__69785 = helix.core.extract_cljs_props(this$.props);
var G__69786 = this$.state;
return (render.cljs$core$IFn$_invoke$arity$3 ? render.cljs$core$IFn$_invoke$arity$3(G__69784,G__69785,G__69786) : render.call(null,G__69784,G__69785,G__69786));
});
goog.object.set(spec,"render",render_SINGLEQUOTE_);

return helix.impl.classes.createComponent(module$node_modules$react$index.Component,spec,statics);
});
/**
 * Registers a component with the React Fresh runtime.
 *   `type` is the component function, and `id` is the unique ID assigned to it
 *   (e.g. component name) for cache invalidation.
 */
helix.core.register_BANG_ = (function helix$core$register_BANG_(type,id){
if((!((window.$$Register$$ == null)))){
return window.$$Register$$(type,id);
} else {
return null;
}
});
helix.core.signature_BANG_ = (function helix$core$signature_BANG_(){
if((!((window.$$Signature$$ == null)))){
return window.$$Signature$$();
} else {
return false;
}
});

//# sourceMappingURL=helix.core.js.map
