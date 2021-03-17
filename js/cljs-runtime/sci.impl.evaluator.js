goog.provide('sci.impl.evaluator');

sci.impl.evaluator.macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, [new cljs.core.Symbol(null,"try","try",-1273693247,null),"null",new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),"null",new cljs.core.Symbol(null,"fn","fn",465265323,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),"null",new cljs.core.Symbol(null,"defn","defn",-126010802,null),"null",new cljs.core.Symbol(null,"or","or",1876275696,null),"null",new cljs.core.Symbol(null,"require","require",1172530194,null),"null",new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),"null",new cljs.core.Symbol(null,"set!","set!",250714521,null),"null",new cljs.core.Symbol(null,".",".",1975675962,null),"null",new cljs.core.Symbol(null,"quote","quote",1377916282,null),"null",new cljs.core.Symbol(null,"case","case",-1510733573,null),"null",new cljs.core.Symbol(null,"and","and",668631710,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
/**
 * The and macro from clojure.core. Note: and is unrolled in the analyzer, this is a fallback.
 */
sci.impl.evaluator.eval_and = (function sci$impl$evaluator$eval_and(ctx,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.evaluator.eval.call(null,ctx,x));
if(cljs.core.truth_(v)){
var xs = cljs.core.next(args__$2);
if(xs){
var G__66457 = xs;
args__$2 = G__66457;
continue;
} else {
return v;
}
} else {
return v;
}
} else {
return true;
}
break;
}
});
/**
 * The or macro from clojure.core. Note: or is unrolled in the analyzer, this is a fallback.
 */
sci.impl.evaluator.eval_or = (function sci$impl$evaluator$eval_or(ctx,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.evaluator.eval.call(null,ctx,x));
if(cljs.core.truth_(v)){
return v;
} else {
var xs = cljs.core.next(args__$2);
if(xs){
var G__66458 = xs;
args__$2 = G__66458;
continue;
} else {
return v;
}
}
} else {
return null;
}
break;
}
});
/**
 * The let macro from clojure.core
 */
sci.impl.evaluator.eval_let = (function sci$impl$evaluator$eval_let(ctx,let_bindings,exprs){
var ctx__$1 = (function (){var ctx__$1 = ctx;
var let_bindings__$1 = let_bindings;
while(true){
var let_name = cljs.core.first(let_bindings__$1);
var let_bindings__$2 = cljs.core.rest(let_bindings__$1);
var let_val = cljs.core.first(let_bindings__$2);
var rest_let_bindings = cljs.core.next(let_bindings__$2);
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx__$1,let_val) : sci.impl.evaluator.eval.call(null,ctx__$1,let_val));
var bindings = ctx__$1.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,let_name,v);
var ctx__$2 = cljs.core._assoc(ctx__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$1);
if(cljs.core.not(rest_let_bindings)){
return ctx__$2;
} else {
var G__66465 = ctx__$2;
var G__66466 = rest_let_bindings;
ctx__$1 = G__66465;
let_bindings__$1 = G__66466;
continue;
}
break;
}
})();
if(cljs.core.truth_(exprs)){
var exprs__$1 = exprs;
while(true){
var e = cljs.core.first(exprs__$1);
var ret = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx__$1,e) : sci.impl.evaluator.eval.call(null,ctx__$1,e));
var nexprs = cljs.core.next(exprs__$1);
if(nexprs){
var G__66471 = nexprs;
exprs__$1 = G__66471;
continue;
} else {
return ret;
}
break;
}
} else {
return null;
}
});
sci.impl.evaluator.eval_def = (function sci$impl$evaluator$eval_def(ctx,var_name,init){
var init__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,init) : sci.impl.evaluator.eval.call(null,ctx,init));
var m = cljs.core.meta(var_name);
var m__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,m) : sci.impl.evaluator.eval.call(null,ctx,m));
var cnn = sci.impl.vars.getName(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m__$1));
var assoc_in_env = (function (env){
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469)),cnn);
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns,var_name);
var prev__$1 = (((!(sci.impl.vars.var_QMARK_(prev))))?sci.impl.vars.__GT_SciVar(prev,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name)),cljs.core.meta(prev),false):prev);
var v = (cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1)))?(function (){var G__65299 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__65299,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__65299;
})():(function (){
sci.impl.vars.bindRoot(prev__$1,init__$1);

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(prev__$1,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return prev__$1;
})()
);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,var_name,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});
var env = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),assoc_in_env);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469)),cnn),var_name);
});
sci.impl.evaluator.eval_case = (function sci$impl$evaluator$eval_case(ctx,p__65320){
var vec__65321 = p__65320;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65321,(0),null);
var map__65324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65321,(1),null);
var map__65324__$1 = (((((!((map__65324 == null))))?(((((map__65324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65324):map__65324);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65324__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65324__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65324__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.evaluator.eval.call(null,ctx,case_val));
var temp__5751__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__65334 = temp__5751__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65334,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65334,(1),null);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.evaluator.eval.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__65338 = ctx;
var G__65339 = cljs.core.second(case_default);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65338,G__65339) : sci.impl.evaluator.eval.call(null,G__65338,G__65339));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.evaluator.eval_try = (function sci$impl$evaluator$eval_try(ctx,expr){
var map__65352 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__65352__$1 = (((((!((map__65352 == null))))?(((((map__65352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65352):map__65352);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65352__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65352__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65352__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var _STAR_in_try_STAR__orig_val__65377 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__65378 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__65378);

try{return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.evaluator.eval.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__65377);
}}catch (e65359){if((e65359 instanceof Error)){
var e = e65359;
var temp__5751__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.evaluator","try-result","sci.impl.evaluator/try-result",-1394897780),(function (){var G__65364 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__65365 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65364,G__65365) : sci.impl.evaluator.eval.call(null,G__65364,G__65365));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__65366 = temp__5751__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65366,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65366,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e65359;

}
}finally {(sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.evaluator.eval.call(null,ctx,finally$));
}});
sci.impl.evaluator.eval_throw = (function sci$impl$evaluator$eval_throw(ctx,p__65383){
var vec__65384 = p__65383;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65384,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65384,(1),null);
var ex__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.evaluator.eval.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.evaluator.eval_static_method_invocation = (function sci$impl$evaluator$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65392_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__65392_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__65392_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.evaluator.eval_constructor_invocation = (function sci$impl$evaluator$eval_constructor_invocation(ctx,p__65401){
var vec__65403 = p__65401;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65403,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65403,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65403,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65393_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__65393_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__65393_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.evaluator.eval_instance_method_invocation = (function sci$impl$evaluator$eval_instance_method_invocation(p__65421,p__65422){
var map__65425 = p__65421;
var map__65425__$1 = (((((!((map__65425 == null))))?(((((map__65425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65425):map__65425);
var ctx = map__65425__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65425__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__65435 = p__65422;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65435,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65435,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65435,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65435,(3),null);
var _expr = vec__65435;
var instance_meta = cljs.core.meta(instance_expr);
var tag_class = new cljs.core.Keyword(null,"tag-class","tag-class",714967874).cljs$core$IFn$_invoke$arity$1(instance_meta);
var instance_expr_STAR_ = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,instance_expr) : sci.impl.evaluator.eval.call(null,ctx,instance_expr));
if(cljs.core.truth_(((cljs.core.map_QMARK_(instance_expr_STAR_))?new cljs.core.Keyword("sci.impl","record","sci.impl/record",-1939193950).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(instance_expr_STAR_)):false))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instance_expr_STAR_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(method_str,(1))));
} else {
var instance_class = (function (){var or__4126__auto__ = tag_class;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.type(instance_expr_STAR_);
}
})();
var instance_class_name = instance_class.name;
var instance_class_symbol = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(instance_class_name);
var allowed_QMARK_ = (function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,new cljs.core.Keyword(null,"allow","allow",-1857325745));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,instance_class_symbol);
}
})();
var target_class = (cljs.core.truth_(allowed_QMARK_)?instance_class:(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"public-class","public-class",1127293019).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5753__auto__)){
var f = temp__5753__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(instance_expr_STAR_) : f.call(null,instance_expr_STAR_));
} else {
return null;
}
})());
if(cljs.core.truth_(target_class)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_class)," not allowed!"].join(''),instance_expr);
}

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65414_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__65414_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__65414_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
}
});
sci.impl.evaluator.eval_in_ns = (function sci$impl$evaluator$eval_in_ns(ctx,p__65469){
var vec__65470 = p__65469;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65470,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65470,(1),null);
var ns_sym = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.evaluator.eval.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.evaluator.eval_resolve = (function sci$impl$evaluator$eval_resolve(var_args){
var G__65489 = arguments.length;
switch (G__65489) {
case 2:
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$2 = (function (ctx,sym){
var sym__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,sym) : sci.impl.evaluator.eval.call(null,ctx,sym));
return cljs.core.second((function (){var fexpr__65496 = cljs.core.deref(sci.impl.utils.lookup);
return (fexpr__65496.cljs$core$IFn$_invoke$arity$3 ? fexpr__65496.cljs$core$IFn$_invoke$arity$3(ctx,sym__$1,false) : fexpr__65496.call(null,ctx,sym__$1,false));
})());
}));

(sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$3 = (function (ctx,env,sym){
if(cljs.core.contains_QMARK_(env,sym)){
return null;
} else {
var sym__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,sym) : sci.impl.evaluator.eval.call(null,ctx,sym));
return cljs.core.second((function (){var fexpr__65499 = cljs.core.deref(sci.impl.utils.lookup);
return (fexpr__65499.cljs$core$IFn$_invoke$arity$3 ? fexpr__65499.cljs$core$IFn$_invoke$arity$3(ctx,sym__$1,false) : fexpr__65499.call(null,ctx,sym__$1,false));
})());
}
}));

(sci.impl.evaluator.eval_resolve.cljs$lang$maxFixedArity = 3);

cljs.core.vreset_BANG_(sci.impl.utils.eval_resolve_state,sci.impl.evaluator.eval_resolve);
sci.impl.evaluator.eval_import = (function sci$impl$evaluator$eval_import(var_args){
var args__4742__auto__ = [];
var len__4736__auto___66601 = arguments.length;
var i__4737__auto___66602 = (0);
while(true){
if((i__4737__auto___66602 < len__4736__auto___66601)){
args__4742__auto__.push((arguments[i__4737__auto___66602]));

var G__66603 = (i__4737__auto___66602 + (1));
i__4737__auto___66602 = G__66603;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,import_symbols_or_lists){
var specs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65500_SHARP_){
if(((cljs.core.seq_QMARK_(p1__65500_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(p1__65500_SHARP_))))){
return cljs.core.second(p1__65500_SHARP_);
} else {
return p1__65500_SHARP_;
}
}),import_symbols_or_lists);
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,spec){
var vec__65516 = (((spec instanceof cljs.core.Symbol))?(function (){var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec);
var last_dot = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(s,".");
var package_PLUS_class_name = (cljs.core.truth_(last_dot)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),last_dot)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(last_dot + (1)),((s).length)))], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null)], null));
return package_PLUS_class_name;
})():(function (){var p = cljs.core.first(spec);
var cs = cljs.core.rest(spec);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cs], null);
})());
var package$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65516,(0),null);
var classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65516,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (___$1,class$){
var fq_class_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(package$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):class$));
var temp__5751__auto__ = sci.impl.interop.resolve_class(ctx,fq_class_name);
if(cljs.core.truth_(temp__5751__auto__)){
var clazz = temp__5751__auto__;
var cnn = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"imports","imports",-1249933394),class$], null),fq_class_name);

return clazz;
} else {
var temp__5751__auto____$1 = sci.impl.records.resolve_record_or_protocol_class.cljs$core$IFn$_invoke$arity$3(ctx,package$,class$);
if(cljs.core.truth_(temp__5751__auto____$1)){
var rec = temp__5751__auto____$1;
var cnn = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,class$], null),rec);

return rec;
} else {
throw (new Error(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fq_class_name)].join('')));
}
}
}),null,classes);
}),null,specs);
}));

(sci.impl.evaluator.eval_import.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.evaluator.eval_import.cljs$lang$applyTo = (function (seq65506){
var G__65507 = cljs.core.first(seq65506);
var seq65506__$1 = cljs.core.next(seq65506);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65507,seq65506__$1);
}));

sci.impl.evaluator.eval_set_BANG_ = (function sci$impl$evaluator$eval_set_BANG_(ctx,p__65553){
var vec__65554 = p__65553;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65554,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65554,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65554,(2),null);
var obj__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.evaluator.eval.call(null,ctx,obj));
var v__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.evaluator.eval.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}
});
/**
 * Note: various arities of do have already been unrolled in the analyzer.
 */
sci.impl.evaluator.eval_do = (function sci$impl$evaluator$eval_do(ctx,exprs){
var exprs__$1 = cljs.core.seq(exprs);
var exprs__$2 = exprs__$1;
while(true){
if(exprs__$2){
var ret = (function (){var G__65567 = ctx;
var G__65568 = cljs.core.first(exprs__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65567,G__65568) : sci.impl.evaluator.eval.call(null,G__65567,G__65568));
})();
var temp__5751__auto__ = cljs.core.next(exprs__$2);
if(temp__5751__auto__){
var exprs__$3 = temp__5751__auto__;
var G__66634 = exprs__$3;
exprs__$2 = G__66634;
continue;
} else {
return ret;
}
} else {
return null;
}
break;
}
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_do_STAR_,sci.impl.evaluator.eval_do);
sci.impl.evaluator.fn_call = (function sci$impl$evaluator$fn_call(ctx,f,args){
var G__65772 = cljs.core.count(args);
switch (G__65772) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg65581 = (function (){var G__65774 = ctx;
var G__65775 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65774,G__65775) : sci.impl.evaluator.eval.call(null,G__65774,G__65775));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg65581) : f.call(null,arg65581));

break;
case (2):
var arg65582 = (function (){var G__65778 = ctx;
var G__65779 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65778,G__65779) : sci.impl.evaluator.eval.call(null,G__65778,G__65779));
})();
var args__$1 = cljs.core.rest(args);
var arg65583 = (function (){var G__65780 = ctx;
var G__65781 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65780,G__65781) : sci.impl.evaluator.eval.call(null,G__65780,G__65781));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg65582,arg65583) : f.call(null,arg65582,arg65583));

break;
case (3):
var arg65584 = (function (){var G__65783 = ctx;
var G__65784 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65783,G__65784) : sci.impl.evaluator.eval.call(null,G__65783,G__65784));
})();
var args__$1 = cljs.core.rest(args);
var arg65585 = (function (){var G__65786 = ctx;
var G__65787 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65786,G__65787) : sci.impl.evaluator.eval.call(null,G__65786,G__65787));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg65586 = (function (){var G__65789 = ctx;
var G__65790 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65789,G__65790) : sci.impl.evaluator.eval.call(null,G__65789,G__65790));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg65584,arg65585,arg65586) : f.call(null,arg65584,arg65585,arg65586));

break;
case (4):
var arg65587 = (function (){var G__65791 = ctx;
var G__65792 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65791,G__65792) : sci.impl.evaluator.eval.call(null,G__65791,G__65792));
})();
var args__$1 = cljs.core.rest(args);
var arg65588 = (function (){var G__65793 = ctx;
var G__65794 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65793,G__65794) : sci.impl.evaluator.eval.call(null,G__65793,G__65794));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg65589 = (function (){var G__65795 = ctx;
var G__65796 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65795,G__65796) : sci.impl.evaluator.eval.call(null,G__65795,G__65796));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg65590 = (function (){var G__65799 = ctx;
var G__65800 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65799,G__65800) : sci.impl.evaluator.eval.call(null,G__65799,G__65800));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg65587,arg65588,arg65589,arg65590) : f.call(null,arg65587,arg65588,arg65589,arg65590));

break;
case (5):
var arg65591 = (function (){var G__65802 = ctx;
var G__65803 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65802,G__65803) : sci.impl.evaluator.eval.call(null,G__65802,G__65803));
})();
var args__$1 = cljs.core.rest(args);
var arg65592 = (function (){var G__65804 = ctx;
var G__65805 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65804,G__65805) : sci.impl.evaluator.eval.call(null,G__65804,G__65805));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg65593 = (function (){var G__65806 = ctx;
var G__65807 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65806,G__65807) : sci.impl.evaluator.eval.call(null,G__65806,G__65807));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg65594 = (function (){var G__65808 = ctx;
var G__65809 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65808,G__65809) : sci.impl.evaluator.eval.call(null,G__65808,G__65809));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg65595 = (function (){var G__65810 = ctx;
var G__65811 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65810,G__65811) : sci.impl.evaluator.eval.call(null,G__65810,G__65811));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg65591,arg65592,arg65593,arg65594,arg65595) : f.call(null,arg65591,arg65592,arg65593,arg65594,arg65595));

break;
case (6):
var arg65596 = (function (){var G__65814 = ctx;
var G__65815 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65814,G__65815) : sci.impl.evaluator.eval.call(null,G__65814,G__65815));
})();
var args__$1 = cljs.core.rest(args);
var arg65597 = (function (){var G__65817 = ctx;
var G__65818 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65817,G__65818) : sci.impl.evaluator.eval.call(null,G__65817,G__65818));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg65598 = (function (){var G__65819 = ctx;
var G__65820 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65819,G__65820) : sci.impl.evaluator.eval.call(null,G__65819,G__65820));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg65599 = (function (){var G__65821 = ctx;
var G__65822 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65821,G__65822) : sci.impl.evaluator.eval.call(null,G__65821,G__65822));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg65600 = (function (){var G__65823 = ctx;
var G__65824 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65823,G__65824) : sci.impl.evaluator.eval.call(null,G__65823,G__65824));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg65601 = (function (){var G__65825 = ctx;
var G__65826 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65825,G__65826) : sci.impl.evaluator.eval.call(null,G__65825,G__65826));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg65596,arg65597,arg65598,arg65599,arg65600,arg65601) : f.call(null,arg65596,arg65597,arg65598,arg65599,arg65600,arg65601));

break;
case (7):
var arg65602 = (function (){var G__65833 = ctx;
var G__65834 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65833,G__65834) : sci.impl.evaluator.eval.call(null,G__65833,G__65834));
})();
var args__$1 = cljs.core.rest(args);
var arg65603 = (function (){var G__65836 = ctx;
var G__65837 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65836,G__65837) : sci.impl.evaluator.eval.call(null,G__65836,G__65837));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg65604 = (function (){var G__65842 = ctx;
var G__65843 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65842,G__65843) : sci.impl.evaluator.eval.call(null,G__65842,G__65843));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg65605 = (function (){var G__65848 = ctx;
var G__65849 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65848,G__65849) : sci.impl.evaluator.eval.call(null,G__65848,G__65849));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg65606 = (function (){var G__65850 = ctx;
var G__65851 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65850,G__65851) : sci.impl.evaluator.eval.call(null,G__65850,G__65851));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg65607 = (function (){var G__65852 = ctx;
var G__65853 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65852,G__65853) : sci.impl.evaluator.eval.call(null,G__65852,G__65853));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg65608 = (function (){var G__65854 = ctx;
var G__65855 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65854,G__65855) : sci.impl.evaluator.eval.call(null,G__65854,G__65855));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg65602,arg65603,arg65604,arg65605,arg65606,arg65607,arg65608) : f.call(null,arg65602,arg65603,arg65604,arg65605,arg65606,arg65607,arg65608));

break;
case (8):
var arg65609 = (function (){var G__65856 = ctx;
var G__65857 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65856,G__65857) : sci.impl.evaluator.eval.call(null,G__65856,G__65857));
})();
var args__$1 = cljs.core.rest(args);
var arg65610 = (function (){var G__65859 = ctx;
var G__65860 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65859,G__65860) : sci.impl.evaluator.eval.call(null,G__65859,G__65860));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg65611 = (function (){var G__65861 = ctx;
var G__65862 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65861,G__65862) : sci.impl.evaluator.eval.call(null,G__65861,G__65862));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg65612 = (function (){var G__65863 = ctx;
var G__65864 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65863,G__65864) : sci.impl.evaluator.eval.call(null,G__65863,G__65864));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg65613 = (function (){var G__65865 = ctx;
var G__65866 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65865,G__65866) : sci.impl.evaluator.eval.call(null,G__65865,G__65866));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg65614 = (function (){var G__65870 = ctx;
var G__65871 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65870,G__65871) : sci.impl.evaluator.eval.call(null,G__65870,G__65871));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg65615 = (function (){var G__65872 = ctx;
var G__65873 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65872,G__65873) : sci.impl.evaluator.eval.call(null,G__65872,G__65873));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg65616 = (function (){var G__65874 = ctx;
var G__65875 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65874,G__65875) : sci.impl.evaluator.eval.call(null,G__65874,G__65875));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg65609,arg65610,arg65611,arg65612,arg65613,arg65614,arg65615,arg65616) : f.call(null,arg65609,arg65610,arg65611,arg65612,arg65613,arg65614,arg65615,arg65616));

break;
case (9):
var arg65617 = (function (){var G__65879 = ctx;
var G__65880 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65879,G__65880) : sci.impl.evaluator.eval.call(null,G__65879,G__65880));
})();
var args__$1 = cljs.core.rest(args);
var arg65618 = (function (){var G__65881 = ctx;
var G__65882 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65881,G__65882) : sci.impl.evaluator.eval.call(null,G__65881,G__65882));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg65619 = (function (){var G__65883 = ctx;
var G__65884 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65883,G__65884) : sci.impl.evaluator.eval.call(null,G__65883,G__65884));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg65620 = (function (){var G__65887 = ctx;
var G__65888 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65887,G__65888) : sci.impl.evaluator.eval.call(null,G__65887,G__65888));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg65621 = (function (){var G__65890 = ctx;
var G__65891 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65890,G__65891) : sci.impl.evaluator.eval.call(null,G__65890,G__65891));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg65622 = (function (){var G__65892 = ctx;
var G__65893 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65892,G__65893) : sci.impl.evaluator.eval.call(null,G__65892,G__65893));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg65623 = (function (){var G__65894 = ctx;
var G__65895 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65894,G__65895) : sci.impl.evaluator.eval.call(null,G__65894,G__65895));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg65624 = (function (){var G__65896 = ctx;
var G__65897 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65896,G__65897) : sci.impl.evaluator.eval.call(null,G__65896,G__65897));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg65625 = (function (){var G__65898 = ctx;
var G__65899 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65898,G__65899) : sci.impl.evaluator.eval.call(null,G__65898,G__65899));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg65617,arg65618,arg65619,arg65620,arg65621,arg65622,arg65623,arg65624,arg65625) : f.call(null,arg65617,arg65618,arg65619,arg65620,arg65621,arg65622,arg65623,arg65624,arg65625));

break;
case (10):
var arg65626 = (function (){var G__65904 = ctx;
var G__65905 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65904,G__65905) : sci.impl.evaluator.eval.call(null,G__65904,G__65905));
})();
var args__$1 = cljs.core.rest(args);
var arg65627 = (function (){var G__65907 = ctx;
var G__65908 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65907,G__65908) : sci.impl.evaluator.eval.call(null,G__65907,G__65908));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg65628 = (function (){var G__65909 = ctx;
var G__65910 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65909,G__65910) : sci.impl.evaluator.eval.call(null,G__65909,G__65910));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg65629 = (function (){var G__65911 = ctx;
var G__65912 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65911,G__65912) : sci.impl.evaluator.eval.call(null,G__65911,G__65912));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg65630 = (function (){var G__65913 = ctx;
var G__65914 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65913,G__65914) : sci.impl.evaluator.eval.call(null,G__65913,G__65914));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg65631 = (function (){var G__65915 = ctx;
var G__65916 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65915,G__65916) : sci.impl.evaluator.eval.call(null,G__65915,G__65916));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg65632 = (function (){var G__65920 = ctx;
var G__65921 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65920,G__65921) : sci.impl.evaluator.eval.call(null,G__65920,G__65921));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg65633 = (function (){var G__65922 = ctx;
var G__65924 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65922,G__65924) : sci.impl.evaluator.eval.call(null,G__65922,G__65924));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg65634 = (function (){var G__65927 = ctx;
var G__65928 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65927,G__65928) : sci.impl.evaluator.eval.call(null,G__65927,G__65928));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg65635 = (function (){var G__65929 = ctx;
var G__65930 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65929,G__65930) : sci.impl.evaluator.eval.call(null,G__65929,G__65930));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg65626,arg65627,arg65628,arg65629,arg65630,arg65631,arg65632,arg65633,arg65634,arg65635) : f.call(null,arg65626,arg65627,arg65628,arg65629,arg65630,arg65631,arg65632,arg65633,arg65634,arg65635));

break;
case (11):
var arg65636 = (function (){var G__65934 = ctx;
var G__65935 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65934,G__65935) : sci.impl.evaluator.eval.call(null,G__65934,G__65935));
})();
var args__$1 = cljs.core.rest(args);
var arg65637 = (function (){var G__65936 = ctx;
var G__65937 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65936,G__65937) : sci.impl.evaluator.eval.call(null,G__65936,G__65937));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg65638 = (function (){var G__65938 = ctx;
var G__65939 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65938,G__65939) : sci.impl.evaluator.eval.call(null,G__65938,G__65939));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg65639 = (function (){var G__65942 = ctx;
var G__65943 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65942,G__65943) : sci.impl.evaluator.eval.call(null,G__65942,G__65943));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg65640 = (function (){var G__65944 = ctx;
var G__65945 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65944,G__65945) : sci.impl.evaluator.eval.call(null,G__65944,G__65945));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg65641 = (function (){var G__65949 = ctx;
var G__65950 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65949,G__65950) : sci.impl.evaluator.eval.call(null,G__65949,G__65950));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg65642 = (function (){var G__65951 = ctx;
var G__65952 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65951,G__65952) : sci.impl.evaluator.eval.call(null,G__65951,G__65952));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg65643 = (function (){var G__65953 = ctx;
var G__65954 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65953,G__65954) : sci.impl.evaluator.eval.call(null,G__65953,G__65954));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg65644 = (function (){var G__65955 = ctx;
var G__65956 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65955,G__65956) : sci.impl.evaluator.eval.call(null,G__65955,G__65956));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg65645 = (function (){var G__65958 = ctx;
var G__65959 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65958,G__65959) : sci.impl.evaluator.eval.call(null,G__65958,G__65959));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg65646 = (function (){var G__65963 = ctx;
var G__65964 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65963,G__65964) : sci.impl.evaluator.eval.call(null,G__65963,G__65964));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg65636,arg65637,arg65638,arg65639,arg65640,arg65641,arg65642,arg65643,arg65644,arg65645,arg65646) : f.call(null,arg65636,arg65637,arg65638,arg65639,arg65640,arg65641,arg65642,arg65643,arg65644,arg65645,arg65646));

break;
case (12):
var arg65647 = (function (){var G__65972 = ctx;
var G__65973 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65972,G__65973) : sci.impl.evaluator.eval.call(null,G__65972,G__65973));
})();
var args__$1 = cljs.core.rest(args);
var arg65648 = (function (){var G__65975 = ctx;
var G__65976 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65975,G__65976) : sci.impl.evaluator.eval.call(null,G__65975,G__65976));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg65649 = (function (){var G__65978 = ctx;
var G__65979 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65978,G__65979) : sci.impl.evaluator.eval.call(null,G__65978,G__65979));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg65650 = (function (){var G__65981 = ctx;
var G__65982 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65981,G__65982) : sci.impl.evaluator.eval.call(null,G__65981,G__65982));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg65651 = (function (){var G__65984 = ctx;
var G__65985 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65984,G__65985) : sci.impl.evaluator.eval.call(null,G__65984,G__65985));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg65652 = (function (){var G__65991 = ctx;
var G__65992 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65991,G__65992) : sci.impl.evaluator.eval.call(null,G__65991,G__65992));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg65653 = (function (){var G__65993 = ctx;
var G__65994 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65993,G__65994) : sci.impl.evaluator.eval.call(null,G__65993,G__65994));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg65654 = (function (){var G__65997 = ctx;
var G__65998 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__65997,G__65998) : sci.impl.evaluator.eval.call(null,G__65997,G__65998));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg65655 = (function (){var G__66000 = ctx;
var G__66001 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66000,G__66001) : sci.impl.evaluator.eval.call(null,G__66000,G__66001));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg65656 = (function (){var G__66008 = ctx;
var G__66009 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66008,G__66009) : sci.impl.evaluator.eval.call(null,G__66008,G__66009));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg65657 = (function (){var G__66011 = ctx;
var G__66012 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66011,G__66012) : sci.impl.evaluator.eval.call(null,G__66011,G__66012));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg65658 = (function (){var G__66013 = ctx;
var G__66014 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66013,G__66014) : sci.impl.evaluator.eval.call(null,G__66013,G__66014));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg65647,arg65648,arg65649,arg65650,arg65651,arg65652,arg65653,arg65654,arg65655,arg65656,arg65657,arg65658) : f.call(null,arg65647,arg65648,arg65649,arg65650,arg65651,arg65652,arg65653,arg65654,arg65655,arg65656,arg65657,arg65658));

break;
case (13):
var arg65659 = (function (){var G__66019 = ctx;
var G__66020 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66019,G__66020) : sci.impl.evaluator.eval.call(null,G__66019,G__66020));
})();
var args__$1 = cljs.core.rest(args);
var arg65660 = (function (){var G__66022 = ctx;
var G__66023 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66022,G__66023) : sci.impl.evaluator.eval.call(null,G__66022,G__66023));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg65661 = (function (){var G__66027 = ctx;
var G__66028 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66027,G__66028) : sci.impl.evaluator.eval.call(null,G__66027,G__66028));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg65662 = (function (){var G__66029 = ctx;
var G__66030 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66029,G__66030) : sci.impl.evaluator.eval.call(null,G__66029,G__66030));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg65663 = (function (){var G__66037 = ctx;
var G__66038 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66037,G__66038) : sci.impl.evaluator.eval.call(null,G__66037,G__66038));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg65664 = (function (){var G__66039 = ctx;
var G__66040 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66039,G__66040) : sci.impl.evaluator.eval.call(null,G__66039,G__66040));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg65665 = (function (){var G__66041 = ctx;
var G__66042 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66041,G__66042) : sci.impl.evaluator.eval.call(null,G__66041,G__66042));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg65666 = (function (){var G__66044 = ctx;
var G__66045 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66044,G__66045) : sci.impl.evaluator.eval.call(null,G__66044,G__66045));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg65667 = (function (){var G__66046 = ctx;
var G__66047 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66046,G__66047) : sci.impl.evaluator.eval.call(null,G__66046,G__66047));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg65668 = (function (){var G__66049 = ctx;
var G__66050 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66049,G__66050) : sci.impl.evaluator.eval.call(null,G__66049,G__66050));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg65669 = (function (){var G__66054 = ctx;
var G__66055 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66054,G__66055) : sci.impl.evaluator.eval.call(null,G__66054,G__66055));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg65670 = (function (){var G__66056 = ctx;
var G__66057 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66056,G__66057) : sci.impl.evaluator.eval.call(null,G__66056,G__66057));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg65671 = (function (){var G__66061 = ctx;
var G__66062 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66061,G__66062) : sci.impl.evaluator.eval.call(null,G__66061,G__66062));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg65659,arg65660,arg65661,arg65662,arg65663,arg65664,arg65665,arg65666,arg65667,arg65668,arg65669,arg65670,arg65671) : f.call(null,arg65659,arg65660,arg65661,arg65662,arg65663,arg65664,arg65665,arg65666,arg65667,arg65668,arg65669,arg65670,arg65671));

break;
case (14):
var arg65672 = (function (){var G__66064 = ctx;
var G__66065 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66064,G__66065) : sci.impl.evaluator.eval.call(null,G__66064,G__66065));
})();
var args__$1 = cljs.core.rest(args);
var arg65673 = (function (){var G__66066 = ctx;
var G__66067 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66066,G__66067) : sci.impl.evaluator.eval.call(null,G__66066,G__66067));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg65674 = (function (){var G__66069 = ctx;
var G__66070 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66069,G__66070) : sci.impl.evaluator.eval.call(null,G__66069,G__66070));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg65675 = (function (){var G__66071 = ctx;
var G__66072 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66071,G__66072) : sci.impl.evaluator.eval.call(null,G__66071,G__66072));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg65676 = (function (){var G__66073 = ctx;
var G__66074 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66073,G__66074) : sci.impl.evaluator.eval.call(null,G__66073,G__66074));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg65677 = (function (){var G__66076 = ctx;
var G__66077 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66076,G__66077) : sci.impl.evaluator.eval.call(null,G__66076,G__66077));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg65678 = (function (){var G__66078 = ctx;
var G__66079 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66078,G__66079) : sci.impl.evaluator.eval.call(null,G__66078,G__66079));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg65679 = (function (){var G__66080 = ctx;
var G__66081 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66080,G__66081) : sci.impl.evaluator.eval.call(null,G__66080,G__66081));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg65680 = (function (){var G__66082 = ctx;
var G__66083 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66082,G__66083) : sci.impl.evaluator.eval.call(null,G__66082,G__66083));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg65681 = (function (){var G__66084 = ctx;
var G__66085 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66084,G__66085) : sci.impl.evaluator.eval.call(null,G__66084,G__66085));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg65682 = (function (){var G__66087 = ctx;
var G__66088 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66087,G__66088) : sci.impl.evaluator.eval.call(null,G__66087,G__66088));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg65683 = (function (){var G__66089 = ctx;
var G__66090 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66089,G__66090) : sci.impl.evaluator.eval.call(null,G__66089,G__66090));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg65684 = (function (){var G__66091 = ctx;
var G__66092 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66091,G__66092) : sci.impl.evaluator.eval.call(null,G__66091,G__66092));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg65685 = (function (){var G__66093 = ctx;
var G__66094 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66093,G__66094) : sci.impl.evaluator.eval.call(null,G__66093,G__66094));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg65672,arg65673,arg65674,arg65675,arg65676,arg65677,arg65678,arg65679,arg65680,arg65681,arg65682,arg65683,arg65684,arg65685) : f.call(null,arg65672,arg65673,arg65674,arg65675,arg65676,arg65677,arg65678,arg65679,arg65680,arg65681,arg65682,arg65683,arg65684,arg65685));

break;
case (15):
var arg65686 = (function (){var G__66095 = ctx;
var G__66096 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66095,G__66096) : sci.impl.evaluator.eval.call(null,G__66095,G__66096));
})();
var args__$1 = cljs.core.rest(args);
var arg65687 = (function (){var G__66097 = ctx;
var G__66098 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66097,G__66098) : sci.impl.evaluator.eval.call(null,G__66097,G__66098));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg65688 = (function (){var G__66101 = ctx;
var G__66102 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66101,G__66102) : sci.impl.evaluator.eval.call(null,G__66101,G__66102));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg65689 = (function (){var G__66104 = ctx;
var G__66105 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66104,G__66105) : sci.impl.evaluator.eval.call(null,G__66104,G__66105));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg65690 = (function (){var G__66106 = ctx;
var G__66107 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66106,G__66107) : sci.impl.evaluator.eval.call(null,G__66106,G__66107));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg65691 = (function (){var G__66108 = ctx;
var G__66109 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66108,G__66109) : sci.impl.evaluator.eval.call(null,G__66108,G__66109));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg65692 = (function (){var G__66111 = ctx;
var G__66112 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66111,G__66112) : sci.impl.evaluator.eval.call(null,G__66111,G__66112));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg65693 = (function (){var G__66113 = ctx;
var G__66114 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66113,G__66114) : sci.impl.evaluator.eval.call(null,G__66113,G__66114));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg65694 = (function (){var G__66115 = ctx;
var G__66116 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66115,G__66116) : sci.impl.evaluator.eval.call(null,G__66115,G__66116));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg65695 = (function (){var G__66120 = ctx;
var G__66121 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66120,G__66121) : sci.impl.evaluator.eval.call(null,G__66120,G__66121));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg65696 = (function (){var G__66127 = ctx;
var G__66128 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66127,G__66128) : sci.impl.evaluator.eval.call(null,G__66127,G__66128));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg65697 = (function (){var G__66129 = ctx;
var G__66130 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66129,G__66130) : sci.impl.evaluator.eval.call(null,G__66129,G__66130));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg65698 = (function (){var G__66131 = ctx;
var G__66132 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66131,G__66132) : sci.impl.evaluator.eval.call(null,G__66131,G__66132));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg65699 = (function (){var G__66133 = ctx;
var G__66134 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66133,G__66134) : sci.impl.evaluator.eval.call(null,G__66133,G__66134));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg65700 = (function (){var G__66135 = ctx;
var G__66136 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66135,G__66136) : sci.impl.evaluator.eval.call(null,G__66135,G__66136));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg65686,arg65687,arg65688,arg65689,arg65690,arg65691,arg65692,arg65693,arg65694,arg65695,arg65696,arg65697,arg65698,arg65699,arg65700) : f.call(null,arg65686,arg65687,arg65688,arg65689,arg65690,arg65691,arg65692,arg65693,arg65694,arg65695,arg65696,arg65697,arg65698,arg65699,arg65700));

break;
case (16):
var arg65701 = (function (){var G__66141 = ctx;
var G__66142 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66141,G__66142) : sci.impl.evaluator.eval.call(null,G__66141,G__66142));
})();
var args__$1 = cljs.core.rest(args);
var arg65702 = (function (){var G__66143 = ctx;
var G__66144 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66143,G__66144) : sci.impl.evaluator.eval.call(null,G__66143,G__66144));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg65703 = (function (){var G__66145 = ctx;
var G__66146 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66145,G__66146) : sci.impl.evaluator.eval.call(null,G__66145,G__66146));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg65704 = (function (){var G__66147 = ctx;
var G__66148 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66147,G__66148) : sci.impl.evaluator.eval.call(null,G__66147,G__66148));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg65705 = (function (){var G__66149 = ctx;
var G__66150 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66149,G__66150) : sci.impl.evaluator.eval.call(null,G__66149,G__66150));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg65706 = (function (){var G__66151 = ctx;
var G__66152 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66151,G__66152) : sci.impl.evaluator.eval.call(null,G__66151,G__66152));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg65707 = (function (){var G__66153 = ctx;
var G__66154 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66153,G__66154) : sci.impl.evaluator.eval.call(null,G__66153,G__66154));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg65708 = (function (){var G__66157 = ctx;
var G__66158 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66157,G__66158) : sci.impl.evaluator.eval.call(null,G__66157,G__66158));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg65709 = (function (){var G__66160 = ctx;
var G__66161 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66160,G__66161) : sci.impl.evaluator.eval.call(null,G__66160,G__66161));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg65710 = (function (){var G__66162 = ctx;
var G__66163 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66162,G__66163) : sci.impl.evaluator.eval.call(null,G__66162,G__66163));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg65711 = (function (){var G__66164 = ctx;
var G__66165 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66164,G__66165) : sci.impl.evaluator.eval.call(null,G__66164,G__66165));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg65712 = (function (){var G__66166 = ctx;
var G__66167 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66166,G__66167) : sci.impl.evaluator.eval.call(null,G__66166,G__66167));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg65713 = (function (){var G__66168 = ctx;
var G__66169 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66168,G__66169) : sci.impl.evaluator.eval.call(null,G__66168,G__66169));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg65714 = (function (){var G__66173 = ctx;
var G__66174 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66173,G__66174) : sci.impl.evaluator.eval.call(null,G__66173,G__66174));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg65715 = (function (){var G__66178 = ctx;
var G__66179 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66178,G__66179) : sci.impl.evaluator.eval.call(null,G__66178,G__66179));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg65716 = (function (){var G__66180 = ctx;
var G__66181 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66180,G__66181) : sci.impl.evaluator.eval.call(null,G__66180,G__66181));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg65701,arg65702,arg65703,arg65704,arg65705,arg65706,arg65707,arg65708,arg65709,arg65710,arg65711,arg65712,arg65713,arg65714,arg65715,arg65716) : f.call(null,arg65701,arg65702,arg65703,arg65704,arg65705,arg65706,arg65707,arg65708,arg65709,arg65710,arg65711,arg65712,arg65713,arg65714,arg65715,arg65716));

break;
case (17):
var arg65717 = (function (){var G__66182 = ctx;
var G__66183 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66182,G__66183) : sci.impl.evaluator.eval.call(null,G__66182,G__66183));
})();
var args__$1 = cljs.core.rest(args);
var arg65718 = (function (){var G__66184 = ctx;
var G__66185 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66184,G__66185) : sci.impl.evaluator.eval.call(null,G__66184,G__66185));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg65719 = (function (){var G__66186 = ctx;
var G__66187 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66186,G__66187) : sci.impl.evaluator.eval.call(null,G__66186,G__66187));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg65720 = (function (){var G__66188 = ctx;
var G__66189 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66188,G__66189) : sci.impl.evaluator.eval.call(null,G__66188,G__66189));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg65721 = (function (){var G__66190 = ctx;
var G__66191 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66190,G__66191) : sci.impl.evaluator.eval.call(null,G__66190,G__66191));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg65722 = (function (){var G__66192 = ctx;
var G__66193 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66192,G__66193) : sci.impl.evaluator.eval.call(null,G__66192,G__66193));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg65723 = (function (){var G__66195 = ctx;
var G__66196 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66195,G__66196) : sci.impl.evaluator.eval.call(null,G__66195,G__66196));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg65724 = (function (){var G__66197 = ctx;
var G__66198 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66197,G__66198) : sci.impl.evaluator.eval.call(null,G__66197,G__66198));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg65725 = (function (){var G__66199 = ctx;
var G__66200 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66199,G__66200) : sci.impl.evaluator.eval.call(null,G__66199,G__66200));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg65726 = (function (){var G__66201 = ctx;
var G__66202 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66201,G__66202) : sci.impl.evaluator.eval.call(null,G__66201,G__66202));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg65727 = (function (){var G__66203 = ctx;
var G__66204 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66203,G__66204) : sci.impl.evaluator.eval.call(null,G__66203,G__66204));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg65728 = (function (){var G__66209 = ctx;
var G__66210 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66209,G__66210) : sci.impl.evaluator.eval.call(null,G__66209,G__66210));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg65729 = (function (){var G__66211 = ctx;
var G__66212 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66211,G__66212) : sci.impl.evaluator.eval.call(null,G__66211,G__66212));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg65730 = (function (){var G__66213 = ctx;
var G__66214 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66213,G__66214) : sci.impl.evaluator.eval.call(null,G__66213,G__66214));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg65731 = (function (){var G__66215 = ctx;
var G__66216 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66215,G__66216) : sci.impl.evaluator.eval.call(null,G__66215,G__66216));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg65732 = (function (){var G__66220 = ctx;
var G__66221 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66220,G__66221) : sci.impl.evaluator.eval.call(null,G__66220,G__66221));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg65733 = (function (){var G__66222 = ctx;
var G__66223 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66222,G__66223) : sci.impl.evaluator.eval.call(null,G__66222,G__66223));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg65717,arg65718,arg65719,arg65720,arg65721,arg65722,arg65723,arg65724,arg65725,arg65726,arg65727,arg65728,arg65729,arg65730,arg65731,arg65732,arg65733) : f.call(null,arg65717,arg65718,arg65719,arg65720,arg65721,arg65722,arg65723,arg65724,arg65725,arg65726,arg65727,arg65728,arg65729,arg65730,arg65731,arg65732,arg65733));

break;
case (18):
var arg65734 = (function (){var G__66230 = ctx;
var G__66231 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66230,G__66231) : sci.impl.evaluator.eval.call(null,G__66230,G__66231));
})();
var args__$1 = cljs.core.rest(args);
var arg65735 = (function (){var G__66233 = ctx;
var G__66234 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66233,G__66234) : sci.impl.evaluator.eval.call(null,G__66233,G__66234));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg65736 = (function (){var G__66239 = ctx;
var G__66240 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66239,G__66240) : sci.impl.evaluator.eval.call(null,G__66239,G__66240));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg65737 = (function (){var G__66245 = ctx;
var G__66246 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66245,G__66246) : sci.impl.evaluator.eval.call(null,G__66245,G__66246));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg65738 = (function (){var G__66250 = ctx;
var G__66251 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66250,G__66251) : sci.impl.evaluator.eval.call(null,G__66250,G__66251));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg65739 = (function (){var G__66257 = ctx;
var G__66258 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66257,G__66258) : sci.impl.evaluator.eval.call(null,G__66257,G__66258));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg65740 = (function (){var G__66259 = ctx;
var G__66260 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66259,G__66260) : sci.impl.evaluator.eval.call(null,G__66259,G__66260));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg65741 = (function (){var G__66261 = ctx;
var G__66262 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66261,G__66262) : sci.impl.evaluator.eval.call(null,G__66261,G__66262));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg65742 = (function (){var G__66265 = ctx;
var G__66266 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66265,G__66266) : sci.impl.evaluator.eval.call(null,G__66265,G__66266));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg65743 = (function (){var G__66272 = ctx;
var G__66273 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66272,G__66273) : sci.impl.evaluator.eval.call(null,G__66272,G__66273));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg65744 = (function (){var G__66274 = ctx;
var G__66275 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66274,G__66275) : sci.impl.evaluator.eval.call(null,G__66274,G__66275));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg65745 = (function (){var G__66279 = ctx;
var G__66280 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66279,G__66280) : sci.impl.evaluator.eval.call(null,G__66279,G__66280));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg65746 = (function (){var G__66281 = ctx;
var G__66282 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66281,G__66282) : sci.impl.evaluator.eval.call(null,G__66281,G__66282));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg65747 = (function (){var G__66283 = ctx;
var G__66284 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66283,G__66284) : sci.impl.evaluator.eval.call(null,G__66283,G__66284));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg65748 = (function (){var G__66287 = ctx;
var G__66288 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66287,G__66288) : sci.impl.evaluator.eval.call(null,G__66287,G__66288));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg65749 = (function (){var G__66302 = ctx;
var G__66303 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66302,G__66303) : sci.impl.evaluator.eval.call(null,G__66302,G__66303));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg65750 = (function (){var G__66304 = ctx;
var G__66305 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66304,G__66305) : sci.impl.evaluator.eval.call(null,G__66304,G__66305));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg65751 = (function (){var G__66306 = ctx;
var G__66307 = cljs.core.first(args__$17);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66306,G__66307) : sci.impl.evaluator.eval.call(null,G__66306,G__66307));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg65734,arg65735,arg65736,arg65737,arg65738,arg65739,arg65740,arg65741,arg65742,arg65743,arg65744,arg65745,arg65746,arg65747,arg65748,arg65749,arg65750,arg65751) : f.call(null,arg65734,arg65735,arg65736,arg65737,arg65738,arg65739,arg65740,arg65741,arg65742,arg65743,arg65744,arg65745,arg65746,arg65747,arg65748,arg65749,arg65750,arg65751));

break;
case (19):
var arg65752 = (function (){var G__66310 = ctx;
var G__66311 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66310,G__66311) : sci.impl.evaluator.eval.call(null,G__66310,G__66311));
})();
var args__$1 = cljs.core.rest(args);
var arg65753 = (function (){var G__66312 = ctx;
var G__66313 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66312,G__66313) : sci.impl.evaluator.eval.call(null,G__66312,G__66313));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg65754 = (function (){var G__66316 = ctx;
var G__66317 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66316,G__66317) : sci.impl.evaluator.eval.call(null,G__66316,G__66317));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg65755 = (function (){var G__66323 = ctx;
var G__66324 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66323,G__66324) : sci.impl.evaluator.eval.call(null,G__66323,G__66324));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg65756 = (function (){var G__66326 = ctx;
var G__66327 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66326,G__66327) : sci.impl.evaluator.eval.call(null,G__66326,G__66327));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg65757 = (function (){var G__66330 = ctx;
var G__66331 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66330,G__66331) : sci.impl.evaluator.eval.call(null,G__66330,G__66331));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg65758 = (function (){var G__66332 = ctx;
var G__66333 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66332,G__66333) : sci.impl.evaluator.eval.call(null,G__66332,G__66333));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg65759 = (function (){var G__66334 = ctx;
var G__66335 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66334,G__66335) : sci.impl.evaluator.eval.call(null,G__66334,G__66335));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg65760 = (function (){var G__66336 = ctx;
var G__66337 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66336,G__66337) : sci.impl.evaluator.eval.call(null,G__66336,G__66337));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg65761 = (function (){var G__66339 = ctx;
var G__66340 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66339,G__66340) : sci.impl.evaluator.eval.call(null,G__66339,G__66340));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg65762 = (function (){var G__66342 = ctx;
var G__66343 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66342,G__66343) : sci.impl.evaluator.eval.call(null,G__66342,G__66343));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg65763 = (function (){var G__66344 = ctx;
var G__66345 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66344,G__66345) : sci.impl.evaluator.eval.call(null,G__66344,G__66345));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg65764 = (function (){var G__66346 = ctx;
var G__66347 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66346,G__66347) : sci.impl.evaluator.eval.call(null,G__66346,G__66347));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg65765 = (function (){var G__66348 = ctx;
var G__66349 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66348,G__66349) : sci.impl.evaluator.eval.call(null,G__66348,G__66349));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg65766 = (function (){var G__66350 = ctx;
var G__66351 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66350,G__66351) : sci.impl.evaluator.eval.call(null,G__66350,G__66351));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg65767 = (function (){var G__66352 = ctx;
var G__66353 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66352,G__66353) : sci.impl.evaluator.eval.call(null,G__66352,G__66353));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg65768 = (function (){var G__66354 = ctx;
var G__66355 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66354,G__66355) : sci.impl.evaluator.eval.call(null,G__66354,G__66355));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg65769 = (function (){var G__66356 = ctx;
var G__66357 = cljs.core.first(args__$17);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66356,G__66357) : sci.impl.evaluator.eval.call(null,G__66356,G__66357));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg65770 = (function (){var G__66358 = ctx;
var G__66359 = cljs.core.first(args__$18);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66358,G__66359) : sci.impl.evaluator.eval.call(null,G__66358,G__66359));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg65752,arg65753,arg65754,arg65755,arg65756,arg65757,arg65758,arg65759,arg65760,arg65761,arg65762,arg65763,arg65764,arg65765,arg65766,arg65767,arg65768,arg65769,arg65770) : f.call(null,arg65752,arg65753,arg65754,arg65755,arg65756,arg65757,arg65758,arg65759,arg65760,arg65761,arg65762,arg65763,arg65764,arg65765,arg65766,arg65767,arg65768,arg65769,arg65770));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__64951_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__64951_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__64951_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.evaluator.eval_special_call = (function sci$impl$evaluator$eval_special_call(ctx,f_sym,expr){
var G__66360 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__66360)){
return sci.impl.evaluator.eval_instance_method_invocation(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__66360)){
return sci.impl.evaluator.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"import","import",241030818,null),G__66360)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.evaluator.eval_import,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__66360)){
return sci.impl.evaluator.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),G__66360)){
return cljs.core.second(expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__66360)){
return sci.impl.evaluator.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"use","use",-205850897,null),G__66360)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.load.eval_use,ctx,cljs.core.with_meta(cljs.core.rest(expr),cljs.core.meta(expr)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__66360)){
return sci.impl.evaluator.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__66360)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.load.eval_require,ctx,cljs.core.with_meta(cljs.core.rest(expr),cljs.core.meta(expr)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__66360)){
return sci.impl.evaluator.eval_constructor_invocation(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__66360)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.load.eval_refer,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__66360)){
return (new cljs.core.LazySeq(null,(function (){var G__66367 = ctx;
var G__66368 = cljs.core.second(expr);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__66367,G__66368) : sci.impl.evaluator.eval.call(null,G__66367,G__66368));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__66360)){
return sci.impl.evaluator.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__66360)){
return sci.impl.evaluator.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__66360)){
return sci.impl.evaluator.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66360)].join('')));

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
sci.impl.evaluator.eval_call = (function sci$impl$evaluator$eval_call(ctx,expr){
try{var f = cljs.core.first(expr);
var eval_QMARK_ = (f instanceof sci.impl.types.EvalFn);
var op = ((eval_QMARK_)?null:(function (){var G__66397 = cljs.core.meta(f);
if((G__66397 == null)){
return null;
} else {
return G__66397.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978));
}
})());
if((((f instanceof cljs.core.Symbol)) && (cljs.core.not(op)))){
return sci.impl.evaluator.eval_special_call(ctx,f,expr);
} else {
if(cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"static-access","static-access",-1860919441)) : sci.impl.utils.kw_identical_QMARK_.call(null,op,new cljs.core.Keyword(null,"static-access","static-access",-1860919441))))){
return sci.impl.evaluator.eval_static_method_invocation(ctx,expr);
} else {
var f__$1 = (cljs.core.truth_((function (){var or__4126__auto__ = op;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return eval_QMARK_;
}
})())?(sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,f) : sci.impl.evaluator.eval.call(null,ctx,f)):f);
if(cljs.core.ifn_QMARK_(f__$1)){
return sci.impl.evaluator.fn_call(ctx,f__$1,cljs.core.rest(expr));
} else {
throw (new Error(["Cannot call ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1], 0))," as a function."].join('')));
}

}
}
}catch (e66381){if((e66381 instanceof Error)){
var e = e66381;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e66381;

}
}});
sci.impl.evaluator.handle_meta = (function sci$impl$evaluator$handle_meta(ctx,m){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((function (){var temp__5751__auto__ = cljs.core.meta(m);
if(cljs.core.truth_(temp__5751__auto__)){
var mm = temp__5751__auto__;
if(cljs.core.truth_((cljs.core.truth_(mm)?mm.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null))){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,m) : sci.impl.evaluator.eval.call(null,ctx,m));
} else {
return m;
}
} else {
return m;
}
})(),new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978));
});
sci.impl.evaluator.eval = (function sci$impl$evaluator$eval(ctx,expr){
try{if((expr instanceof sci.impl.types.EvalFn)){
var f = expr.f;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(ctx) : f.call(null,ctx));
} else {
if((expr instanceof sci.impl.types.EvalVar)){
var v = expr.v;
return cljs.core._deref(v);
} else {
var m = cljs.core.meta(expr);
var op = (cljs.core.truth_(m)?m.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null);
var ret = ((cljs.core.not(op))?expr:(function (){var G__66415 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),G__66415)){
return sci.impl.evaluator.eval_call(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"try","try",1380742522),G__66415)){
return sci.impl.evaluator.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),G__66415)){
var fn_meta = new cljs.core.Keyword("sci.impl","fn-meta","sci.impl/fn-meta",1093684639).cljs$core$IFn$_invoke$arity$1(expr);
var the_fn = sci.impl.fns.eval_fn(ctx,sci.impl.evaluator.eval,expr);
var fn_meta__$1 = (cljs.core.truth_(fn_meta)?sci.impl.evaluator.handle_meta(ctx,fn_meta):null);
if(cljs.core.truth_(fn_meta__$1)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(the_fn,cljs.core.merge,fn_meta__$1);
} else {
return the_fn;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"static-access","static-access",-1860919441),G__66415)){
return sci.impl.interop.get_static_field(expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"deref!","deref!",153059469),G__66415)){
var v = cljs.core.first(expr);
var v__$1 = ((sci.impl.vars.var_QMARK_(v))?cljs.core.deref(v):v);
var v__$2 = cljs.core.force(v__$1);
return v__$2;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"resolve-sym","resolve-sym",-1193683260),G__66415)){
return ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192)).get(expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"needs-ctx","needs-ctx",1605017124,null),G__66415)){
if((op === sci.impl.utils.needs_ctx)){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expr,ctx);
} else {
throw (new Error(["unexpected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr),", type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(expr)),", meta:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(expr))].join('')));
}
} else {
if(cljs.core.map_QMARK_(expr)){
return cljs.core.with_meta(cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66407_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__66407_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__66407_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66408_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__66408_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__66408_SHARP_));
}),cljs.core.vals(expr))),sci.impl.evaluator.handle_meta(ctx,m));
} else {
throw (new Error(["unexpected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr),", type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(expr)),", meta:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(expr))].join('')));

}

}
}
}
}
}
}
}
})());
return ret;

}
}
}catch (e66411){if((e66411 instanceof Error)){
var e = e66411;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e66411;

}
}});
cljs.core.vreset_BANG_(sci.impl.utils.eval_STAR_,sci.impl.evaluator.eval);

//# sourceMappingURL=sci.impl.evaluator.js.map
