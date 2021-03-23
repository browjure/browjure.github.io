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
var G__68779 = xs;
args__$2 = G__68779;
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
var G__68780 = xs;
args__$2 = G__68780;
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
var G__68786 = ctx__$2;
var G__68787 = rest_let_bindings;
ctx__$1 = G__68786;
let_bindings__$1 = G__68787;
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
var G__68788 = nexprs;
exprs__$1 = G__68788;
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
var v = (cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1)))?(function (){var G__67596 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__67596,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__67596;
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
sci.impl.evaluator.eval_case = (function sci$impl$evaluator$eval_case(ctx,p__67615){
var vec__67616 = p__67615;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67616,(0),null);
var map__67620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67616,(1),null);
var map__67620__$1 = (((((!((map__67620 == null))))?(((((map__67620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67620):map__67620);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67620__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67620__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67620__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.evaluator.eval.call(null,ctx,case_val));
var temp__5751__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__67634 = temp__5751__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67634,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67634,(1),null);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.evaluator.eval.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__67638 = ctx;
var G__67639 = cljs.core.second(case_default);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__67638,G__67639) : sci.impl.evaluator.eval.call(null,G__67638,G__67639));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.evaluator.eval_try = (function sci$impl$evaluator$eval_try(ctx,expr){
var map__67655 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__67655__$1 = (((((!((map__67655 == null))))?(((((map__67655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67655):map__67655);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67655__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67655__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67655__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var _STAR_in_try_STAR__orig_val__67676 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__67677 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__67677);

try{return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.evaluator.eval.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__67676);
}}catch (e67663){if((e67663 instanceof Error)){
var e = e67663;
var temp__5751__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.evaluator","try-result","sci.impl.evaluator/try-result",-1394897780),(function (){var G__67666 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__67667 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__67666,G__67667) : sci.impl.evaluator.eval.call(null,G__67666,G__67667));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__67673 = temp__5751__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67673,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67673,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e67663;

}
}finally {(sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.evaluator.eval.call(null,ctx,finally$));
}});
sci.impl.evaluator.eval_throw = (function sci$impl$evaluator$eval_throw(ctx,p__67687){
var vec__67688 = p__67687;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67688,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67688,(1),null);
var ex__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.evaluator.eval.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.evaluator.eval_static_method_invocation = (function sci$impl$evaluator$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67693_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__67693_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__67693_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.evaluator.eval_constructor_invocation = (function sci$impl$evaluator$eval_constructor_invocation(ctx,p__67707){
var vec__67713 = p__67707;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67713,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67713,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67713,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67699_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__67699_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__67699_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.evaluator.eval_instance_method_invocation = (function sci$impl$evaluator$eval_instance_method_invocation(p__67734,p__67735){
var map__67736 = p__67734;
var map__67736__$1 = (((((!((map__67736 == null))))?(((((map__67736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67736):map__67736);
var ctx = map__67736__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67736__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__67737 = p__67735;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67737,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67737,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67737,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67737,(3),null);
var _expr = vec__67737;
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

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67729_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__67729_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__67729_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
}
});
sci.impl.evaluator.eval_in_ns = (function sci$impl$evaluator$eval_in_ns(ctx,p__67814){
var vec__67816 = p__67814;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67816,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67816,(1),null);
var ns_sym = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.evaluator.eval.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.evaluator.eval_resolve = (function sci$impl$evaluator$eval_resolve(var_args){
var G__67821 = arguments.length;
switch (G__67821) {
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
return cljs.core.second((function (){var fexpr__67825 = cljs.core.deref(sci.impl.utils.lookup);
return (fexpr__67825.cljs$core$IFn$_invoke$arity$3 ? fexpr__67825.cljs$core$IFn$_invoke$arity$3(ctx,sym__$1,false) : fexpr__67825.call(null,ctx,sym__$1,false));
})());
}));

(sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$3 = (function (ctx,env,sym){
if(cljs.core.contains_QMARK_(env,sym)){
return null;
} else {
var sym__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,sym) : sci.impl.evaluator.eval.call(null,ctx,sym));
return cljs.core.second((function (){var fexpr__67827 = cljs.core.deref(sci.impl.utils.lookup);
return (fexpr__67827.cljs$core$IFn$_invoke$arity$3 ? fexpr__67827.cljs$core$IFn$_invoke$arity$3(ctx,sym__$1,false) : fexpr__67827.call(null,ctx,sym__$1,false));
})());
}
}));

(sci.impl.evaluator.eval_resolve.cljs$lang$maxFixedArity = 3);

cljs.core.vreset_BANG_(sci.impl.utils.eval_resolve_state,sci.impl.evaluator.eval_resolve);
sci.impl.evaluator.eval_import = (function sci$impl$evaluator$eval_import(var_args){
var args__4742__auto__ = [];
var len__4736__auto___68910 = arguments.length;
var i__4737__auto___68913 = (0);
while(true){
if((i__4737__auto___68913 < len__4736__auto___68910)){
args__4742__auto__.push((arguments[i__4737__auto___68913]));

var G__68917 = (i__4737__auto___68913 + (1));
i__4737__auto___68913 = G__68917;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,import_symbols_or_lists){
var specs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67828_SHARP_){
if(((cljs.core.seq_QMARK_(p1__67828_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(p1__67828_SHARP_))))){
return cljs.core.second(p1__67828_SHARP_);
} else {
return p1__67828_SHARP_;
}
}),import_symbols_or_lists);
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,spec){
var vec__67848 = (((spec instanceof cljs.core.Symbol))?(function (){var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec);
var last_dot = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(s,".");
var package_PLUS_class_name = (cljs.core.truth_(last_dot)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),last_dot)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(last_dot + (1)),((s).length)))], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null)], null));
return package_PLUS_class_name;
})():(function (){var p = cljs.core.first(spec);
var cs = cljs.core.rest(spec);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cs], null);
})());
var package$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67848,(0),null);
var classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67848,(1),null);
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
(sci.impl.evaluator.eval_import.cljs$lang$applyTo = (function (seq67829){
var G__67830 = cljs.core.first(seq67829);
var seq67829__$1 = cljs.core.next(seq67829);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67830,seq67829__$1);
}));

sci.impl.evaluator.eval_set_BANG_ = (function sci$impl$evaluator$eval_set_BANG_(ctx,p__67877){
var vec__67878 = p__67877;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67878,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67878,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67878,(2),null);
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
var ret = (function (){var G__67888 = ctx;
var G__67889 = cljs.core.first(exprs__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__67888,G__67889) : sci.impl.evaluator.eval.call(null,G__67888,G__67889));
})();
var temp__5751__auto__ = cljs.core.next(exprs__$2);
if(temp__5751__auto__){
var exprs__$3 = temp__5751__auto__;
var G__68927 = exprs__$3;
exprs__$2 = G__68927;
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
var G__68103 = cljs.core.count(args);
switch (G__68103) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg67909 = (function (){var G__68104 = ctx;
var G__68105 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68104,G__68105) : sci.impl.evaluator.eval.call(null,G__68104,G__68105));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg67909) : f.call(null,arg67909));

break;
case (2):
var arg67910 = (function (){var G__68108 = ctx;
var G__68109 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68108,G__68109) : sci.impl.evaluator.eval.call(null,G__68108,G__68109));
})();
var args__$1 = cljs.core.rest(args);
var arg67911 = (function (){var G__68110 = ctx;
var G__68111 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68110,G__68111) : sci.impl.evaluator.eval.call(null,G__68110,G__68111));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg67910,arg67911) : f.call(null,arg67910,arg67911));

break;
case (3):
var arg67912 = (function (){var G__68113 = ctx;
var G__68114 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68113,G__68114) : sci.impl.evaluator.eval.call(null,G__68113,G__68114));
})();
var args__$1 = cljs.core.rest(args);
var arg67913 = (function (){var G__68115 = ctx;
var G__68116 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68115,G__68116) : sci.impl.evaluator.eval.call(null,G__68115,G__68116));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67914 = (function (){var G__68119 = ctx;
var G__68120 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68119,G__68120) : sci.impl.evaluator.eval.call(null,G__68119,G__68120));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg67912,arg67913,arg67914) : f.call(null,arg67912,arg67913,arg67914));

break;
case (4):
var arg67915 = (function (){var G__68122 = ctx;
var G__68123 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68122,G__68123) : sci.impl.evaluator.eval.call(null,G__68122,G__68123));
})();
var args__$1 = cljs.core.rest(args);
var arg67916 = (function (){var G__68124 = ctx;
var G__68125 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68124,G__68125) : sci.impl.evaluator.eval.call(null,G__68124,G__68125));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67917 = (function (){var G__68126 = ctx;
var G__68127 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68126,G__68127) : sci.impl.evaluator.eval.call(null,G__68126,G__68127));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67918 = (function (){var G__68128 = ctx;
var G__68129 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68128,G__68129) : sci.impl.evaluator.eval.call(null,G__68128,G__68129));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg67915,arg67916,arg67917,arg67918) : f.call(null,arg67915,arg67916,arg67917,arg67918));

break;
case (5):
var arg67919 = (function (){var G__68131 = ctx;
var G__68132 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68131,G__68132) : sci.impl.evaluator.eval.call(null,G__68131,G__68132));
})();
var args__$1 = cljs.core.rest(args);
var arg67920 = (function (){var G__68135 = ctx;
var G__68136 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68135,G__68136) : sci.impl.evaluator.eval.call(null,G__68135,G__68136));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67921 = (function (){var G__68138 = ctx;
var G__68139 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68138,G__68139) : sci.impl.evaluator.eval.call(null,G__68138,G__68139));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67922 = (function (){var G__68140 = ctx;
var G__68141 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68140,G__68141) : sci.impl.evaluator.eval.call(null,G__68140,G__68141));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67923 = (function (){var G__68142 = ctx;
var G__68143 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68142,G__68143) : sci.impl.evaluator.eval.call(null,G__68142,G__68143));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg67919,arg67920,arg67921,arg67922,arg67923) : f.call(null,arg67919,arg67920,arg67921,arg67922,arg67923));

break;
case (6):
var arg67924 = (function (){var G__68145 = ctx;
var G__68146 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68145,G__68146) : sci.impl.evaluator.eval.call(null,G__68145,G__68146));
})();
var args__$1 = cljs.core.rest(args);
var arg67925 = (function (){var G__68147 = ctx;
var G__68148 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68147,G__68148) : sci.impl.evaluator.eval.call(null,G__68147,G__68148));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67926 = (function (){var G__68149 = ctx;
var G__68150 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68149,G__68150) : sci.impl.evaluator.eval.call(null,G__68149,G__68150));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67927 = (function (){var G__68154 = ctx;
var G__68155 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68154,G__68155) : sci.impl.evaluator.eval.call(null,G__68154,G__68155));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67928 = (function (){var G__68157 = ctx;
var G__68158 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68157,G__68158) : sci.impl.evaluator.eval.call(null,G__68157,G__68158));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67929 = (function (){var G__68159 = ctx;
var G__68160 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68159,G__68160) : sci.impl.evaluator.eval.call(null,G__68159,G__68160));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg67924,arg67925,arg67926,arg67927,arg67928,arg67929) : f.call(null,arg67924,arg67925,arg67926,arg67927,arg67928,arg67929));

break;
case (7):
var arg67930 = (function (){var G__68161 = ctx;
var G__68162 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68161,G__68162) : sci.impl.evaluator.eval.call(null,G__68161,G__68162));
})();
var args__$1 = cljs.core.rest(args);
var arg67931 = (function (){var G__68163 = ctx;
var G__68164 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68163,G__68164) : sci.impl.evaluator.eval.call(null,G__68163,G__68164));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67932 = (function (){var G__68165 = ctx;
var G__68166 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68165,G__68166) : sci.impl.evaluator.eval.call(null,G__68165,G__68166));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67933 = (function (){var G__68167 = ctx;
var G__68168 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68167,G__68168) : sci.impl.evaluator.eval.call(null,G__68167,G__68168));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67934 = (function (){var G__68169 = ctx;
var G__68170 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68169,G__68170) : sci.impl.evaluator.eval.call(null,G__68169,G__68170));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67935 = (function (){var G__68171 = ctx;
var G__68172 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68171,G__68172) : sci.impl.evaluator.eval.call(null,G__68171,G__68172));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67936 = (function (){var G__68175 = ctx;
var G__68176 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68175,G__68176) : sci.impl.evaluator.eval.call(null,G__68175,G__68176));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg67930,arg67931,arg67932,arg67933,arg67934,arg67935,arg67936) : f.call(null,arg67930,arg67931,arg67932,arg67933,arg67934,arg67935,arg67936));

break;
case (8):
var arg67937 = (function (){var G__68178 = ctx;
var G__68179 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68178,G__68179) : sci.impl.evaluator.eval.call(null,G__68178,G__68179));
})();
var args__$1 = cljs.core.rest(args);
var arg67938 = (function (){var G__68181 = ctx;
var G__68182 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68181,G__68182) : sci.impl.evaluator.eval.call(null,G__68181,G__68182));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67939 = (function (){var G__68183 = ctx;
var G__68184 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68183,G__68184) : sci.impl.evaluator.eval.call(null,G__68183,G__68184));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67940 = (function (){var G__68186 = ctx;
var G__68187 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68186,G__68187) : sci.impl.evaluator.eval.call(null,G__68186,G__68187));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67941 = (function (){var G__68191 = ctx;
var G__68192 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68191,G__68192) : sci.impl.evaluator.eval.call(null,G__68191,G__68192));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67942 = (function (){var G__68193 = ctx;
var G__68194 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68193,G__68194) : sci.impl.evaluator.eval.call(null,G__68193,G__68194));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67943 = (function (){var G__68195 = ctx;
var G__68196 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68195,G__68196) : sci.impl.evaluator.eval.call(null,G__68195,G__68196));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67944 = (function (){var G__68197 = ctx;
var G__68198 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68197,G__68198) : sci.impl.evaluator.eval.call(null,G__68197,G__68198));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg67937,arg67938,arg67939,arg67940,arg67941,arg67942,arg67943,arg67944) : f.call(null,arg67937,arg67938,arg67939,arg67940,arg67941,arg67942,arg67943,arg67944));

break;
case (9):
var arg67945 = (function (){var G__68202 = ctx;
var G__68203 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68202,G__68203) : sci.impl.evaluator.eval.call(null,G__68202,G__68203));
})();
var args__$1 = cljs.core.rest(args);
var arg67946 = (function (){var G__68204 = ctx;
var G__68205 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68204,G__68205) : sci.impl.evaluator.eval.call(null,G__68204,G__68205));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67947 = (function (){var G__68206 = ctx;
var G__68207 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68206,G__68207) : sci.impl.evaluator.eval.call(null,G__68206,G__68207));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67948 = (function (){var G__68208 = ctx;
var G__68209 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68208,G__68209) : sci.impl.evaluator.eval.call(null,G__68208,G__68209));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67949 = (function (){var G__68210 = ctx;
var G__68211 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68210,G__68211) : sci.impl.evaluator.eval.call(null,G__68210,G__68211));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67950 = (function (){var G__68212 = ctx;
var G__68213 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68212,G__68213) : sci.impl.evaluator.eval.call(null,G__68212,G__68213));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67951 = (function (){var G__68214 = ctx;
var G__68215 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68214,G__68215) : sci.impl.evaluator.eval.call(null,G__68214,G__68215));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67952 = (function (){var G__68217 = ctx;
var G__68218 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68217,G__68218) : sci.impl.evaluator.eval.call(null,G__68217,G__68218));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67953 = (function (){var G__68219 = ctx;
var G__68220 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68219,G__68220) : sci.impl.evaluator.eval.call(null,G__68219,G__68220));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg67945,arg67946,arg67947,arg67948,arg67949,arg67950,arg67951,arg67952,arg67953) : f.call(null,arg67945,arg67946,arg67947,arg67948,arg67949,arg67950,arg67951,arg67952,arg67953));

break;
case (10):
var arg67954 = (function (){var G__68222 = ctx;
var G__68223 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68222,G__68223) : sci.impl.evaluator.eval.call(null,G__68222,G__68223));
})();
var args__$1 = cljs.core.rest(args);
var arg67955 = (function (){var G__68225 = ctx;
var G__68226 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68225,G__68226) : sci.impl.evaluator.eval.call(null,G__68225,G__68226));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67956 = (function (){var G__68227 = ctx;
var G__68228 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68227,G__68228) : sci.impl.evaluator.eval.call(null,G__68227,G__68228));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67957 = (function (){var G__68229 = ctx;
var G__68230 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68229,G__68230) : sci.impl.evaluator.eval.call(null,G__68229,G__68230));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67958 = (function (){var G__68231 = ctx;
var G__68232 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68231,G__68232) : sci.impl.evaluator.eval.call(null,G__68231,G__68232));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67959 = (function (){var G__68234 = ctx;
var G__68235 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68234,G__68235) : sci.impl.evaluator.eval.call(null,G__68234,G__68235));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67960 = (function (){var G__68236 = ctx;
var G__68237 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68236,G__68237) : sci.impl.evaluator.eval.call(null,G__68236,G__68237));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67961 = (function (){var G__68241 = ctx;
var G__68242 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68241,G__68242) : sci.impl.evaluator.eval.call(null,G__68241,G__68242));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67962 = (function (){var G__68243 = ctx;
var G__68244 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68243,G__68244) : sci.impl.evaluator.eval.call(null,G__68243,G__68244));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67963 = (function (){var G__68250 = ctx;
var G__68251 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68250,G__68251) : sci.impl.evaluator.eval.call(null,G__68250,G__68251));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg67954,arg67955,arg67956,arg67957,arg67958,arg67959,arg67960,arg67961,arg67962,arg67963) : f.call(null,arg67954,arg67955,arg67956,arg67957,arg67958,arg67959,arg67960,arg67961,arg67962,arg67963));

break;
case (11):
var arg67964 = (function (){var G__68252 = ctx;
var G__68253 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68252,G__68253) : sci.impl.evaluator.eval.call(null,G__68252,G__68253));
})();
var args__$1 = cljs.core.rest(args);
var arg67965 = (function (){var G__68254 = ctx;
var G__68255 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68254,G__68255) : sci.impl.evaluator.eval.call(null,G__68254,G__68255));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67966 = (function (){var G__68261 = ctx;
var G__68262 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68261,G__68262) : sci.impl.evaluator.eval.call(null,G__68261,G__68262));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67967 = (function (){var G__68264 = ctx;
var G__68265 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68264,G__68265) : sci.impl.evaluator.eval.call(null,G__68264,G__68265));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67968 = (function (){var G__68266 = ctx;
var G__68267 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68266,G__68267) : sci.impl.evaluator.eval.call(null,G__68266,G__68267));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67969 = (function (){var G__68269 = ctx;
var G__68270 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68269,G__68270) : sci.impl.evaluator.eval.call(null,G__68269,G__68270));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67970 = (function (){var G__68273 = ctx;
var G__68274 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68273,G__68274) : sci.impl.evaluator.eval.call(null,G__68273,G__68274));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67971 = (function (){var G__68275 = ctx;
var G__68276 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68275,G__68276) : sci.impl.evaluator.eval.call(null,G__68275,G__68276));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67972 = (function (){var G__68278 = ctx;
var G__68279 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68278,G__68279) : sci.impl.evaluator.eval.call(null,G__68278,G__68279));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67973 = (function (){var G__68280 = ctx;
var G__68281 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68280,G__68281) : sci.impl.evaluator.eval.call(null,G__68280,G__68281));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67974 = (function (){var G__68288 = ctx;
var G__68289 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68288,G__68289) : sci.impl.evaluator.eval.call(null,G__68288,G__68289));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg67964,arg67965,arg67966,arg67967,arg67968,arg67969,arg67970,arg67971,arg67972,arg67973,arg67974) : f.call(null,arg67964,arg67965,arg67966,arg67967,arg67968,arg67969,arg67970,arg67971,arg67972,arg67973,arg67974));

break;
case (12):
var arg67975 = (function (){var G__68291 = ctx;
var G__68292 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68291,G__68292) : sci.impl.evaluator.eval.call(null,G__68291,G__68292));
})();
var args__$1 = cljs.core.rest(args);
var arg67976 = (function (){var G__68293 = ctx;
var G__68294 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68293,G__68294) : sci.impl.evaluator.eval.call(null,G__68293,G__68294));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67977 = (function (){var G__68295 = ctx;
var G__68296 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68295,G__68296) : sci.impl.evaluator.eval.call(null,G__68295,G__68296));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67978 = (function (){var G__68299 = ctx;
var G__68300 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68299,G__68300) : sci.impl.evaluator.eval.call(null,G__68299,G__68300));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67979 = (function (){var G__68301 = ctx;
var G__68302 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68301,G__68302) : sci.impl.evaluator.eval.call(null,G__68301,G__68302));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67980 = (function (){var G__68307 = ctx;
var G__68308 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68307,G__68308) : sci.impl.evaluator.eval.call(null,G__68307,G__68308));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67981 = (function (){var G__68309 = ctx;
var G__68310 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68309,G__68310) : sci.impl.evaluator.eval.call(null,G__68309,G__68310));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67982 = (function (){var G__68312 = ctx;
var G__68313 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68312,G__68313) : sci.impl.evaluator.eval.call(null,G__68312,G__68313));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67983 = (function (){var G__68318 = ctx;
var G__68319 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68318,G__68319) : sci.impl.evaluator.eval.call(null,G__68318,G__68319));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67984 = (function (){var G__68320 = ctx;
var G__68321 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68320,G__68321) : sci.impl.evaluator.eval.call(null,G__68320,G__68321));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67985 = (function (){var G__68322 = ctx;
var G__68323 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68322,G__68323) : sci.impl.evaluator.eval.call(null,G__68322,G__68323));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67986 = (function (){var G__68327 = ctx;
var G__68328 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68327,G__68328) : sci.impl.evaluator.eval.call(null,G__68327,G__68328));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg67975,arg67976,arg67977,arg67978,arg67979,arg67980,arg67981,arg67982,arg67983,arg67984,arg67985,arg67986) : f.call(null,arg67975,arg67976,arg67977,arg67978,arg67979,arg67980,arg67981,arg67982,arg67983,arg67984,arg67985,arg67986));

break;
case (13):
var arg67987 = (function (){var G__68332 = ctx;
var G__68333 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68332,G__68333) : sci.impl.evaluator.eval.call(null,G__68332,G__68333));
})();
var args__$1 = cljs.core.rest(args);
var arg67988 = (function (){var G__68337 = ctx;
var G__68338 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68337,G__68338) : sci.impl.evaluator.eval.call(null,G__68337,G__68338));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67989 = (function (){var G__68340 = ctx;
var G__68341 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68340,G__68341) : sci.impl.evaluator.eval.call(null,G__68340,G__68341));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67990 = (function (){var G__68342 = ctx;
var G__68343 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68342,G__68343) : sci.impl.evaluator.eval.call(null,G__68342,G__68343));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67991 = (function (){var G__68345 = ctx;
var G__68346 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68345,G__68346) : sci.impl.evaluator.eval.call(null,G__68345,G__68346));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67992 = (function (){var G__68351 = ctx;
var G__68352 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68351,G__68352) : sci.impl.evaluator.eval.call(null,G__68351,G__68352));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67993 = (function (){var G__68355 = ctx;
var G__68356 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68355,G__68356) : sci.impl.evaluator.eval.call(null,G__68355,G__68356));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67994 = (function (){var G__68357 = ctx;
var G__68358 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68357,G__68358) : sci.impl.evaluator.eval.call(null,G__68357,G__68358));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67995 = (function (){var G__68359 = ctx;
var G__68360 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68359,G__68360) : sci.impl.evaluator.eval.call(null,G__68359,G__68360));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67996 = (function (){var G__68363 = ctx;
var G__68364 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68363,G__68364) : sci.impl.evaluator.eval.call(null,G__68363,G__68364));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67997 = (function (){var G__68365 = ctx;
var G__68366 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68365,G__68366) : sci.impl.evaluator.eval.call(null,G__68365,G__68366));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67998 = (function (){var G__68370 = ctx;
var G__68371 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68370,G__68371) : sci.impl.evaluator.eval.call(null,G__68370,G__68371));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg67999 = (function (){var G__68372 = ctx;
var G__68373 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68372,G__68373) : sci.impl.evaluator.eval.call(null,G__68372,G__68373));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg67987,arg67988,arg67989,arg67990,arg67991,arg67992,arg67993,arg67994,arg67995,arg67996,arg67997,arg67998,arg67999) : f.call(null,arg67987,arg67988,arg67989,arg67990,arg67991,arg67992,arg67993,arg67994,arg67995,arg67996,arg67997,arg67998,arg67999));

break;
case (14):
var arg68000 = (function (){var G__68383 = ctx;
var G__68384 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68383,G__68384) : sci.impl.evaluator.eval.call(null,G__68383,G__68384));
})();
var args__$1 = cljs.core.rest(args);
var arg68001 = (function (){var G__68385 = ctx;
var G__68386 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68385,G__68386) : sci.impl.evaluator.eval.call(null,G__68385,G__68386));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg68002 = (function (){var G__68387 = ctx;
var G__68388 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68387,G__68388) : sci.impl.evaluator.eval.call(null,G__68387,G__68388));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg68003 = (function (){var G__68389 = ctx;
var G__68390 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68389,G__68390) : sci.impl.evaluator.eval.call(null,G__68389,G__68390));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg68004 = (function (){var G__68391 = ctx;
var G__68392 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68391,G__68392) : sci.impl.evaluator.eval.call(null,G__68391,G__68392));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg68005 = (function (){var G__68394 = ctx;
var G__68395 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68394,G__68395) : sci.impl.evaluator.eval.call(null,G__68394,G__68395));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg68006 = (function (){var G__68397 = ctx;
var G__68398 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68397,G__68398) : sci.impl.evaluator.eval.call(null,G__68397,G__68398));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg68007 = (function (){var G__68406 = ctx;
var G__68407 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68406,G__68407) : sci.impl.evaluator.eval.call(null,G__68406,G__68407));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg68008 = (function (){var G__68409 = ctx;
var G__68410 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68409,G__68410) : sci.impl.evaluator.eval.call(null,G__68409,G__68410));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg68009 = (function (){var G__68411 = ctx;
var G__68412 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68411,G__68412) : sci.impl.evaluator.eval.call(null,G__68411,G__68412));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg68010 = (function (){var G__68413 = ctx;
var G__68414 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68413,G__68414) : sci.impl.evaluator.eval.call(null,G__68413,G__68414));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg68011 = (function (){var G__68415 = ctx;
var G__68416 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68415,G__68416) : sci.impl.evaluator.eval.call(null,G__68415,G__68416));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg68012 = (function (){var G__68418 = ctx;
var G__68419 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68418,G__68419) : sci.impl.evaluator.eval.call(null,G__68418,G__68419));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg68013 = (function (){var G__68420 = ctx;
var G__68421 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68420,G__68421) : sci.impl.evaluator.eval.call(null,G__68420,G__68421));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg68000,arg68001,arg68002,arg68003,arg68004,arg68005,arg68006,arg68007,arg68008,arg68009,arg68010,arg68011,arg68012,arg68013) : f.call(null,arg68000,arg68001,arg68002,arg68003,arg68004,arg68005,arg68006,arg68007,arg68008,arg68009,arg68010,arg68011,arg68012,arg68013));

break;
case (15):
var arg68014 = (function (){var G__68425 = ctx;
var G__68426 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68425,G__68426) : sci.impl.evaluator.eval.call(null,G__68425,G__68426));
})();
var args__$1 = cljs.core.rest(args);
var arg68015 = (function (){var G__68427 = ctx;
var G__68428 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68427,G__68428) : sci.impl.evaluator.eval.call(null,G__68427,G__68428));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg68016 = (function (){var G__68433 = ctx;
var G__68434 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68433,G__68434) : sci.impl.evaluator.eval.call(null,G__68433,G__68434));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg68017 = (function (){var G__68435 = ctx;
var G__68436 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68435,G__68436) : sci.impl.evaluator.eval.call(null,G__68435,G__68436));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg68018 = (function (){var G__68437 = ctx;
var G__68438 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68437,G__68438) : sci.impl.evaluator.eval.call(null,G__68437,G__68438));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg68019 = (function (){var G__68439 = ctx;
var G__68440 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68439,G__68440) : sci.impl.evaluator.eval.call(null,G__68439,G__68440));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg68020 = (function (){var G__68441 = ctx;
var G__68442 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68441,G__68442) : sci.impl.evaluator.eval.call(null,G__68441,G__68442));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg68021 = (function (){var G__68443 = ctx;
var G__68444 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68443,G__68444) : sci.impl.evaluator.eval.call(null,G__68443,G__68444));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg68022 = (function (){var G__68445 = ctx;
var G__68446 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68445,G__68446) : sci.impl.evaluator.eval.call(null,G__68445,G__68446));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg68023 = (function (){var G__68447 = ctx;
var G__68448 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68447,G__68448) : sci.impl.evaluator.eval.call(null,G__68447,G__68448));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg68024 = (function (){var G__68452 = ctx;
var G__68453 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68452,G__68453) : sci.impl.evaluator.eval.call(null,G__68452,G__68453));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg68025 = (function (){var G__68454 = ctx;
var G__68455 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68454,G__68455) : sci.impl.evaluator.eval.call(null,G__68454,G__68455));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg68026 = (function (){var G__68456 = ctx;
var G__68457 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68456,G__68457) : sci.impl.evaluator.eval.call(null,G__68456,G__68457));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg68027 = (function (){var G__68458 = ctx;
var G__68459 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68458,G__68459) : sci.impl.evaluator.eval.call(null,G__68458,G__68459));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg68028 = (function (){var G__68466 = ctx;
var G__68467 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68466,G__68467) : sci.impl.evaluator.eval.call(null,G__68466,G__68467));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg68014,arg68015,arg68016,arg68017,arg68018,arg68019,arg68020,arg68021,arg68022,arg68023,arg68024,arg68025,arg68026,arg68027,arg68028) : f.call(null,arg68014,arg68015,arg68016,arg68017,arg68018,arg68019,arg68020,arg68021,arg68022,arg68023,arg68024,arg68025,arg68026,arg68027,arg68028));

break;
case (16):
var arg68029 = (function (){var G__68486 = ctx;
var G__68487 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68486,G__68487) : sci.impl.evaluator.eval.call(null,G__68486,G__68487));
})();
var args__$1 = cljs.core.rest(args);
var arg68030 = (function (){var G__68488 = ctx;
var G__68489 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68488,G__68489) : sci.impl.evaluator.eval.call(null,G__68488,G__68489));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg68031 = (function (){var G__68490 = ctx;
var G__68491 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68490,G__68491) : sci.impl.evaluator.eval.call(null,G__68490,G__68491));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg68032 = (function (){var G__68492 = ctx;
var G__68493 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68492,G__68493) : sci.impl.evaluator.eval.call(null,G__68492,G__68493));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg68033 = (function (){var G__68494 = ctx;
var G__68495 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68494,G__68495) : sci.impl.evaluator.eval.call(null,G__68494,G__68495));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg68034 = (function (){var G__68505 = ctx;
var G__68506 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68505,G__68506) : sci.impl.evaluator.eval.call(null,G__68505,G__68506));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg68035 = (function (){var G__68507 = ctx;
var G__68508 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68507,G__68508) : sci.impl.evaluator.eval.call(null,G__68507,G__68508));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg68036 = (function (){var G__68516 = ctx;
var G__68517 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68516,G__68517) : sci.impl.evaluator.eval.call(null,G__68516,G__68517));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg68037 = (function (){var G__68521 = ctx;
var G__68522 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68521,G__68522) : sci.impl.evaluator.eval.call(null,G__68521,G__68522));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg68038 = (function (){var G__68523 = ctx;
var G__68524 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68523,G__68524) : sci.impl.evaluator.eval.call(null,G__68523,G__68524));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg68039 = (function (){var G__68525 = ctx;
var G__68526 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68525,G__68526) : sci.impl.evaluator.eval.call(null,G__68525,G__68526));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg68040 = (function (){var G__68530 = ctx;
var G__68531 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68530,G__68531) : sci.impl.evaluator.eval.call(null,G__68530,G__68531));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg68041 = (function (){var G__68532 = ctx;
var G__68533 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68532,G__68533) : sci.impl.evaluator.eval.call(null,G__68532,G__68533));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg68042 = (function (){var G__68534 = ctx;
var G__68535 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68534,G__68535) : sci.impl.evaluator.eval.call(null,G__68534,G__68535));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg68043 = (function (){var G__68536 = ctx;
var G__68537 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68536,G__68537) : sci.impl.evaluator.eval.call(null,G__68536,G__68537));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg68044 = (function (){var G__68538 = ctx;
var G__68539 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68538,G__68539) : sci.impl.evaluator.eval.call(null,G__68538,G__68539));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg68029,arg68030,arg68031,arg68032,arg68033,arg68034,arg68035,arg68036,arg68037,arg68038,arg68039,arg68040,arg68041,arg68042,arg68043,arg68044) : f.call(null,arg68029,arg68030,arg68031,arg68032,arg68033,arg68034,arg68035,arg68036,arg68037,arg68038,arg68039,arg68040,arg68041,arg68042,arg68043,arg68044));

break;
case (17):
var arg68045 = (function (){var G__68548 = ctx;
var G__68549 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68548,G__68549) : sci.impl.evaluator.eval.call(null,G__68548,G__68549));
})();
var args__$1 = cljs.core.rest(args);
var arg68046 = (function (){var G__68553 = ctx;
var G__68554 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68553,G__68554) : sci.impl.evaluator.eval.call(null,G__68553,G__68554));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg68047 = (function (){var G__68555 = ctx;
var G__68556 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68555,G__68556) : sci.impl.evaluator.eval.call(null,G__68555,G__68556));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg68048 = (function (){var G__68557 = ctx;
var G__68558 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68557,G__68558) : sci.impl.evaluator.eval.call(null,G__68557,G__68558));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg68049 = (function (){var G__68559 = ctx;
var G__68560 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68559,G__68560) : sci.impl.evaluator.eval.call(null,G__68559,G__68560));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg68050 = (function (){var G__68564 = ctx;
var G__68565 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68564,G__68565) : sci.impl.evaluator.eval.call(null,G__68564,G__68565));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg68051 = (function (){var G__68568 = ctx;
var G__68569 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68568,G__68569) : sci.impl.evaluator.eval.call(null,G__68568,G__68569));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg68052 = (function (){var G__68570 = ctx;
var G__68571 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68570,G__68571) : sci.impl.evaluator.eval.call(null,G__68570,G__68571));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg68053 = (function (){var G__68575 = ctx;
var G__68576 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68575,G__68576) : sci.impl.evaluator.eval.call(null,G__68575,G__68576));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg68054 = (function (){var G__68577 = ctx;
var G__68578 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68577,G__68578) : sci.impl.evaluator.eval.call(null,G__68577,G__68578));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg68055 = (function (){var G__68579 = ctx;
var G__68580 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68579,G__68580) : sci.impl.evaluator.eval.call(null,G__68579,G__68580));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg68056 = (function (){var G__68583 = ctx;
var G__68584 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68583,G__68584) : sci.impl.evaluator.eval.call(null,G__68583,G__68584));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg68057 = (function (){var G__68588 = ctx;
var G__68589 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68588,G__68589) : sci.impl.evaluator.eval.call(null,G__68588,G__68589));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg68058 = (function (){var G__68590 = ctx;
var G__68591 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68590,G__68591) : sci.impl.evaluator.eval.call(null,G__68590,G__68591));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg68059 = (function (){var G__68592 = ctx;
var G__68593 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68592,G__68593) : sci.impl.evaluator.eval.call(null,G__68592,G__68593));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg68060 = (function (){var G__68594 = ctx;
var G__68595 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68594,G__68595) : sci.impl.evaluator.eval.call(null,G__68594,G__68595));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg68061 = (function (){var G__68596 = ctx;
var G__68597 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68596,G__68597) : sci.impl.evaluator.eval.call(null,G__68596,G__68597));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg68045,arg68046,arg68047,arg68048,arg68049,arg68050,arg68051,arg68052,arg68053,arg68054,arg68055,arg68056,arg68057,arg68058,arg68059,arg68060,arg68061) : f.call(null,arg68045,arg68046,arg68047,arg68048,arg68049,arg68050,arg68051,arg68052,arg68053,arg68054,arg68055,arg68056,arg68057,arg68058,arg68059,arg68060,arg68061));

break;
case (18):
var arg68062 = (function (){var G__68608 = ctx;
var G__68609 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68608,G__68609) : sci.impl.evaluator.eval.call(null,G__68608,G__68609));
})();
var args__$1 = cljs.core.rest(args);
var arg68063 = (function (){var G__68610 = ctx;
var G__68611 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68610,G__68611) : sci.impl.evaluator.eval.call(null,G__68610,G__68611));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg68064 = (function (){var G__68612 = ctx;
var G__68613 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68612,G__68613) : sci.impl.evaluator.eval.call(null,G__68612,G__68613));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg68065 = (function (){var G__68614 = ctx;
var G__68615 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68614,G__68615) : sci.impl.evaluator.eval.call(null,G__68614,G__68615));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg68066 = (function (){var G__68619 = ctx;
var G__68620 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68619,G__68620) : sci.impl.evaluator.eval.call(null,G__68619,G__68620));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg68067 = (function (){var G__68623 = ctx;
var G__68624 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68623,G__68624) : sci.impl.evaluator.eval.call(null,G__68623,G__68624));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg68068 = (function (){var G__68630 = ctx;
var G__68631 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68630,G__68631) : sci.impl.evaluator.eval.call(null,G__68630,G__68631));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg68069 = (function (){var G__68636 = ctx;
var G__68637 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68636,G__68637) : sci.impl.evaluator.eval.call(null,G__68636,G__68637));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg68070 = (function (){var G__68638 = ctx;
var G__68639 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68638,G__68639) : sci.impl.evaluator.eval.call(null,G__68638,G__68639));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg68071 = (function (){var G__68640 = ctx;
var G__68641 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68640,G__68641) : sci.impl.evaluator.eval.call(null,G__68640,G__68641));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg68072 = (function (){var G__68645 = ctx;
var G__68646 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68645,G__68646) : sci.impl.evaluator.eval.call(null,G__68645,G__68646));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg68073 = (function (){var G__68647 = ctx;
var G__68648 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68647,G__68648) : sci.impl.evaluator.eval.call(null,G__68647,G__68648));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg68074 = (function (){var G__68649 = ctx;
var G__68650 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68649,G__68650) : sci.impl.evaluator.eval.call(null,G__68649,G__68650));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg68075 = (function (){var G__68651 = ctx;
var G__68652 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68651,G__68652) : sci.impl.evaluator.eval.call(null,G__68651,G__68652));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg68076 = (function (){var G__68656 = ctx;
var G__68657 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68656,G__68657) : sci.impl.evaluator.eval.call(null,G__68656,G__68657));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg68077 = (function (){var G__68658 = ctx;
var G__68659 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68658,G__68659) : sci.impl.evaluator.eval.call(null,G__68658,G__68659));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg68078 = (function (){var G__68664 = ctx;
var G__68665 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68664,G__68665) : sci.impl.evaluator.eval.call(null,G__68664,G__68665));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg68079 = (function (){var G__68669 = ctx;
var G__68670 = cljs.core.first(args__$17);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68669,G__68670) : sci.impl.evaluator.eval.call(null,G__68669,G__68670));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg68062,arg68063,arg68064,arg68065,arg68066,arg68067,arg68068,arg68069,arg68070,arg68071,arg68072,arg68073,arg68074,arg68075,arg68076,arg68077,arg68078,arg68079) : f.call(null,arg68062,arg68063,arg68064,arg68065,arg68066,arg68067,arg68068,arg68069,arg68070,arg68071,arg68072,arg68073,arg68074,arg68075,arg68076,arg68077,arg68078,arg68079));

break;
case (19):
var arg68080 = (function (){var G__68671 = ctx;
var G__68672 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68671,G__68672) : sci.impl.evaluator.eval.call(null,G__68671,G__68672));
})();
var args__$1 = cljs.core.rest(args);
var arg68081 = (function (){var G__68676 = ctx;
var G__68677 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68676,G__68677) : sci.impl.evaluator.eval.call(null,G__68676,G__68677));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg68082 = (function (){var G__68678 = ctx;
var G__68679 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68678,G__68679) : sci.impl.evaluator.eval.call(null,G__68678,G__68679));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg68083 = (function (){var G__68680 = ctx;
var G__68681 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68680,G__68681) : sci.impl.evaluator.eval.call(null,G__68680,G__68681));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg68084 = (function (){var G__68685 = ctx;
var G__68686 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68685,G__68686) : sci.impl.evaluator.eval.call(null,G__68685,G__68686));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg68085 = (function (){var G__68687 = ctx;
var G__68688 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68687,G__68688) : sci.impl.evaluator.eval.call(null,G__68687,G__68688));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg68086 = (function (){var G__68689 = ctx;
var G__68690 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68689,G__68690) : sci.impl.evaluator.eval.call(null,G__68689,G__68690));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg68087 = (function (){var G__68692 = ctx;
var G__68693 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68692,G__68693) : sci.impl.evaluator.eval.call(null,G__68692,G__68693));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg68088 = (function (){var G__68694 = ctx;
var G__68695 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68694,G__68695) : sci.impl.evaluator.eval.call(null,G__68694,G__68695));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg68089 = (function (){var G__68696 = ctx;
var G__68697 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68696,G__68697) : sci.impl.evaluator.eval.call(null,G__68696,G__68697));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg68090 = (function (){var G__68698 = ctx;
var G__68699 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68698,G__68699) : sci.impl.evaluator.eval.call(null,G__68698,G__68699));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg68091 = (function (){var G__68703 = ctx;
var G__68704 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68703,G__68704) : sci.impl.evaluator.eval.call(null,G__68703,G__68704));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg68092 = (function (){var G__68705 = ctx;
var G__68706 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68705,G__68706) : sci.impl.evaluator.eval.call(null,G__68705,G__68706));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg68093 = (function (){var G__68707 = ctx;
var G__68708 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68707,G__68708) : sci.impl.evaluator.eval.call(null,G__68707,G__68708));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg68094 = (function (){var G__68709 = ctx;
var G__68710 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68709,G__68710) : sci.impl.evaluator.eval.call(null,G__68709,G__68710));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg68095 = (function (){var G__68711 = ctx;
var G__68712 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68711,G__68712) : sci.impl.evaluator.eval.call(null,G__68711,G__68712));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg68096 = (function (){var G__68713 = ctx;
var G__68714 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68713,G__68714) : sci.impl.evaluator.eval.call(null,G__68713,G__68714));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg68097 = (function (){var G__68715 = ctx;
var G__68716 = cljs.core.first(args__$17);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68715,G__68716) : sci.impl.evaluator.eval.call(null,G__68715,G__68716));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg68098 = (function (){var G__68717 = ctx;
var G__68718 = cljs.core.first(args__$18);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68717,G__68718) : sci.impl.evaluator.eval.call(null,G__68717,G__68718));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg68080,arg68081,arg68082,arg68083,arg68084,arg68085,arg68086,arg68087,arg68088,arg68089,arg68090,arg68091,arg68092,arg68093,arg68094,arg68095,arg68096,arg68097,arg68098) : f.call(null,arg68080,arg68081,arg68082,arg68083,arg68084,arg68085,arg68086,arg68087,arg68088,arg68089,arg68090,arg68091,arg68092,arg68093,arg68094,arg68095,arg68096,arg68097,arg68098));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__67229_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__67229_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__67229_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.evaluator.eval_special_call = (function sci$impl$evaluator$eval_special_call(ctx,f_sym,expr){
var G__68726 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__68726)){
return sci.impl.evaluator.eval_instance_method_invocation(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__68726)){
return sci.impl.evaluator.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"import","import",241030818,null),G__68726)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.evaluator.eval_import,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__68726)){
return sci.impl.evaluator.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),G__68726)){
return cljs.core.second(expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__68726)){
return sci.impl.evaluator.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"use","use",-205850897,null),G__68726)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.load.eval_use,ctx,cljs.core.with_meta(cljs.core.rest(expr),cljs.core.meta(expr)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__68726)){
return sci.impl.evaluator.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__68726)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.load.eval_require,ctx,cljs.core.with_meta(cljs.core.rest(expr),cljs.core.meta(expr)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__68726)){
return sci.impl.evaluator.eval_constructor_invocation(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__68726)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.load.eval_refer,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__68726)){
return (new cljs.core.LazySeq(null,(function (){var G__68732 = ctx;
var G__68733 = cljs.core.second(expr);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__68732,G__68733) : sci.impl.evaluator.eval.call(null,G__68732,G__68733));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__68726)){
return sci.impl.evaluator.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__68726)){
return sci.impl.evaluator.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__68726)){
return sci.impl.evaluator.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68726)].join('')));

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
var op = ((eval_QMARK_)?null:(function (){var G__68744 = cljs.core.meta(f);
if((G__68744 == null)){
return null;
} else {
return G__68744.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978));
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
}catch (e68739){if((e68739 instanceof Error)){
var e = e68739;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e68739;

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
var ret = ((cljs.core.not(op))?expr:(function (){var G__68764 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),G__68764)){
return sci.impl.evaluator.eval_call(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"try","try",1380742522),G__68764)){
return sci.impl.evaluator.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),G__68764)){
var fn_meta = new cljs.core.Keyword("sci.impl","fn-meta","sci.impl/fn-meta",1093684639).cljs$core$IFn$_invoke$arity$1(expr);
var the_fn = sci.impl.fns.eval_fn(ctx,sci.impl.evaluator.eval,expr);
var fn_meta__$1 = (cljs.core.truth_(fn_meta)?sci.impl.evaluator.handle_meta(ctx,fn_meta):null);
if(cljs.core.truth_(fn_meta__$1)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(the_fn,cljs.core.merge,fn_meta__$1);
} else {
return the_fn;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"static-access","static-access",-1860919441),G__68764)){
return sci.impl.interop.get_static_field(expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"deref!","deref!",153059469),G__68764)){
var v = cljs.core.first(expr);
var v__$1 = ((sci.impl.vars.var_QMARK_(v))?cljs.core.deref(v):v);
var v__$2 = cljs.core.force(v__$1);
return v__$2;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"resolve-sym","resolve-sym",-1193683260),G__68764)){
return ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192)).get(expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"needs-ctx","needs-ctx",1605017124,null),G__68764)){
if((op === sci.impl.utils.needs_ctx)){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expr,ctx);
} else {
throw (new Error(["unexpected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr),", type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(expr)),", meta:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(expr))].join('')));
}
} else {
if(cljs.core.map_QMARK_(expr)){
return cljs.core.with_meta(cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__68756_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__68756_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__68756_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__68757_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__68757_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__68757_SHARP_));
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
}catch (e68759){if((e68759 instanceof Error)){
var e = e68759;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e68759;

}
}});
cljs.core.vreset_BANG_(sci.impl.utils.eval_STAR_,sci.impl.evaluator.eval);

//# sourceMappingURL=sci.impl.evaluator.js.map
