goog.provide('sci.impl.interpreter');

sci.impl.interpreter.macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),"null",new cljs.core.Symbol(null,"try","try",-1273693247,null),"null",new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),"null",new cljs.core.Symbol(null,"let","let",358118826,null),"null",new cljs.core.Symbol(null,"fn","fn",465265323,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),"null",new cljs.core.Symbol(null,"defn","defn",-126010802,null),"null",new cljs.core.Symbol(null,"if","if",1181717262,null),"null",new cljs.core.Symbol(null,"or","or",1876275696,null),"null",new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),"null",new cljs.core.Symbol(null,"require","require",1172530194,null),"null",new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),"null",new cljs.core.Symbol(null,"set!","set!",250714521,null),"null",new cljs.core.Symbol(null,".",".",1975675962,null),"null",new cljs.core.Symbol(null,"quote","quote",1377916282,null),"null",new cljs.core.Symbol(null,"case","case",-1510733573,null),"null",new cljs.core.Symbol(null,"and","and",668631710,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
/**
 * The and macro from clojure.core.
 */
sci.impl.interpreter.eval_and = (function sci$impl$interpreter$eval_and(ctx,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var xs = cljs.core.next(args__$2);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.interpreter.interpret.call(null,ctx,x));
if(cljs.core.truth_(v)){
if(xs){
var G__79985 = xs;
args__$2 = G__79985;
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
 * The or macro from clojure.core.
 */
sci.impl.interpreter.eval_or = (function sci$impl$interpreter$eval_or(ctx,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var xs = cljs.core.next(args__$2);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.interpreter.interpret.call(null,ctx,x));
if(cljs.core.truth_(v)){
return v;
} else {
if(xs){
var G__79992 = xs;
args__$2 = G__79992;
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
sci.impl.interpreter.eval_let = (function sci$impl$interpreter$eval_let(var_args){
var args__4742__auto__ = [];
var len__4736__auto___79993 = arguments.length;
var i__4737__auto___79995 = (0);
while(true){
if((i__4737__auto___79995 < len__4736__auto___79993)){
args__4742__auto__.push((arguments[i__4737__auto___79995]));

var G__79997 = (i__4737__auto___79995 + (1));
i__4737__auto___79995 = G__79997;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.interpreter.eval_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.interpreter.eval_let.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,let_bindings,exprs){
var ctx__$1 = (function (){var ctx__$1 = ctx;
var let_bindings__$1 = let_bindings;
while(true){
var let_name = cljs.core.first(let_bindings__$1);
var let_bindings__$2 = cljs.core.rest(let_bindings__$1);
var let_val = cljs.core.first(let_bindings__$2);
var rest_let_bindings = cljs.core.next(let_bindings__$2);
var val_tag = (function (){var temp__5753__auto__ = cljs.core.meta(let_val);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
})();
var let_name__$1 = (cljs.core.truth_(val_tag)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(let_name,cljs.core.update,new cljs.core.Keyword(null,"tag","tag",-1290361223),((function (ctx__$1,let_bindings__$1,let_name,let_bindings__$2,let_val,rest_let_bindings,val_tag){
return (function (t){
if(cljs.core.truth_(t)){
return t;
} else {
return val_tag;
}
});})(ctx__$1,let_bindings__$1,let_name,let_bindings__$2,let_val,rest_let_bindings,val_tag))
):let_name);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx__$1,let_val) : sci.impl.interpreter.interpret.call(null,ctx__$1,let_val));
var ctx__$2 = cljs.core.assoc_in(ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),let_name__$1], null),v);
if(cljs.core.not(rest_let_bindings)){
return ctx__$2;
} else {
var G__80003 = ctx__$2;
var G__80004 = rest_let_bindings;
ctx__$1 = G__80003;
let_bindings__$1 = G__80004;
continue;
}
break;
}
})();
if(cljs.core.truth_(exprs)){
var exprs__$1 = exprs;
while(true){
var e = cljs.core.first(exprs__$1);
var ret = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx__$1,e) : sci.impl.interpreter.interpret.call(null,ctx__$1,e));
var nexprs = cljs.core.next(exprs__$1);
if(nexprs){
var G__80005 = nexprs;
exprs__$1 = G__80005;
continue;
} else {
return ret;
}
break;
}
} else {
return null;
}
}));

(sci.impl.interpreter.eval_let.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.interpreter.eval_let.cljs$lang$applyTo = (function (seq78485){
var G__78486 = cljs.core.first(seq78485);
var seq78485__$1 = cljs.core.next(seq78485);
var G__78487 = cljs.core.first(seq78485__$1);
var seq78485__$2 = cljs.core.next(seq78485__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78486,G__78487,seq78485__$2);
}));

sci.impl.interpreter.eval_if = (function sci$impl$interpreter$eval_if(ctx,expr){
var cond = cljs.core.first(expr);
var expr__$1 = cljs.core.rest(expr);
var then = cljs.core.first(expr__$1);
var expr__$2 = cljs.core.rest(expr__$1);
var else$ = cljs.core.first(expr__$2);
if(cljs.core.truth_((sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,cond) : sci.impl.interpreter.interpret.call(null,ctx,cond)))){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,then) : sci.impl.interpreter.interpret.call(null,ctx,then));
} else {
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,else$) : sci.impl.interpreter.interpret.call(null,ctx,else$));
}
});
sci.impl.interpreter.eval_def = (function sci$impl$interpreter$eval_def(ctx,p__78505){
var vec__78506 = p__78505;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78506,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78506,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78506,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78506,(3),null);
var docstring = (cljs.core.truth_(_QMARK_init)?_QMARK_docstring:null);
var init = (cljs.core.truth_(docstring)?_QMARK_init:_QMARK_docstring);
var init__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,init) : sci.impl.interpreter.interpret.call(null,ctx,init));
var m = cljs.core.meta(var_name);
var m__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,m) : sci.impl.interpreter.interpret.call(null,ctx,m));
var cnn = sci.impl.vars.getName(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m__$1));
var assoc_in_env = (function (env){
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null));
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns,var_name);
var prev__$1 = (((!(sci.impl.vars.var_QMARK_(prev))))?sci.impl.vars.__GT_SciVar(prev,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name)),cljs.core.meta(prev)):prev);
var v = (cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1)))?(function (){var G__78512 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__78512,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__78512;
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
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,var_name], null));
});
sci.impl.interpreter.resolve_symbol = (function sci$impl$interpreter$resolve_symbol(ctx,sym){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var temp__5751__auto__ = cljs.core.find(bindings,sym);
if(cljs.core.truth_(temp__5751__auto__)){
var v = temp__5751__auto__;
return cljs.core.second(v);
} else {
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Could not resolve symbol: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym),"\nks:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx)))].join(''),sym);
}
});
sci.impl.interpreter.parse_libspec = (function sci$impl$interpreter$parse_libspec(libspec){
if(cljs.core.sequential_QMARK_(libspec)){
var vec__78525 = libspec;
var seq__78526 = cljs.core.seq(vec__78525);
var first__78527 = cljs.core.first(seq__78526);
var seq__78526__$1 = cljs.core.next(seq__78526);
var lib_name = first__78527;
var opts = seq__78526__$1;
var ret = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),lib_name], null);
var G__78531 = opts;
var vec__78533 = G__78531;
var seq__78534 = cljs.core.seq(vec__78533);
var first__78535 = cljs.core.first(seq__78534);
var seq__78534__$1 = cljs.core.next(seq__78534);
var opt_name = first__78535;
var first__78535__$1 = cljs.core.first(seq__78534__$1);
var seq__78534__$2 = cljs.core.next(seq__78534__$1);
var fst_opt = first__78535__$1;
var rst_opts = seq__78534__$2;
var ret__$1 = ret;
var G__78531__$1 = G__78531;
while(true){
var ret__$2 = ret__$1;
var vec__78545 = G__78531__$1;
var seq__78546 = cljs.core.seq(vec__78545);
var first__78547 = cljs.core.first(seq__78546);
var seq__78546__$1 = cljs.core.next(seq__78546);
var opt_name__$1 = first__78547;
var first__78547__$1 = cljs.core.first(seq__78546__$1);
var seq__78546__$2 = cljs.core.next(seq__78546__$1);
var fst_opt__$1 = first__78547__$1;
var rst_opts__$1 = seq__78546__$2;
if(cljs.core.not(opt_name__$1)){
return ret__$2;
} else {
var G__78551 = opt_name__$1;
var G__78551__$1 = (((G__78551 instanceof cljs.core.Keyword))?G__78551.fqn:null);
switch (G__78551__$1) {
case "as":
var G__80033 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"as","as",1148689641),fst_opt__$1);
var G__80034 = rst_opts__$1;
ret__$1 = G__80033;
G__78531__$1 = G__80034;
continue;

break;
case "reload":
case "reload-all":
case "verbose":
var G__80035 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"reload","reload",863702807),true);
var G__80036 = cljs.core.cons(fst_opt__$1,rst_opts__$1);
ret__$1 = G__80035;
G__78531__$1 = G__80036;
continue;

break;
case "refer":
case "rename":
case "exclude":
case "only":
var G__80039 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,opt_name__$1,fst_opt__$1);
var G__80040 = rst_opts__$1;
ret__$1 = G__80039;
G__78531__$1 = G__80040;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__78551__$1)].join('')));

}
}
break;
}
} else {
if((libspec instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),libspec], null);
} else {
throw (new Error(["Invalid libspec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(libspec)].join('')));

}
}
});
sci.impl.interpreter.handle_refer_all = (function sci$impl$interpreter$handle_refer_all(the_current_ns,the_loaded_ns,include_sym_QMARK_,rename_sym,only){
var only__$1 = (cljs.core.truth_(only)?cljs.core.set(only):null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__78554){
var vec__78556 = p__78554;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78556,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78556,(1),null);
if(cljs.core.truth_((((k instanceof cljs.core.Symbol))?(function (){var and__4115__auto__ = (include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : include_sym_QMARK_.call(null,k));
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not(only__$1)) || (cljs.core.contains_QMARK_(only__$1,k)));
} else {
return and__4115__auto__;
}
})():false))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(k) : rename_sym.call(null,k)),v);
} else {
return ns;
}
}),the_current_ns,the_loaded_ns);
});
sci.impl.interpreter.handle_require_libspec_env = (function sci$impl$interpreter$handle_require_libspec_env(env,use_QMARK_,current_ns,the_loaded_ns,lib_name,p__78567){
var map__78569 = p__78567;
var map__78569__$1 = (((((!((map__78569 == null))))?(((((map__78569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78569):map__78569);
var _parsed_libspec = map__78569__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78569__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78569__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78569__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78569__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78569__$1,new cljs.core.Keyword(null,"only","only",1907811652));
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null));
var the_current_ns__$1 = (cljs.core.truth_(as)?cljs.core.assoc_in(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),as], null),lib_name):the_current_ns);
var rename_sym = (cljs.core.truth_(rename)?(function (sym){
var or__4126__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return sym;
}
}):cljs.core.identity);
var include_sym_QMARK_ = (cljs.core.truth_(exclude)?(function (){var excludes = cljs.core.set(exclude);
return (function (sym){
return (!(cljs.core.contains_QMARK_(excludes,sym)));
});
})():cljs.core.constantly(true));
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__4126__auto__ = (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),refer) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword(null,"all","all",892129742),refer));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return use_QMARK_;
}
})())?sci.impl.interpreter.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,null):((cljs.core.sequential_QMARK_(refer))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,sym){
if(cljs.core.truth_(include_sym_QMARK_(sym))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(sym) : rename_sym.call(null,sym)),(function (){var temp__5751__auto__ = cljs.core.find(the_loaded_ns,sym);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__78578 = temp__5751__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78578,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78578,(1),null);
return v;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')));
}
})());
} else {
return ns;
}
}),the_current_ns__$1,refer):(function(){throw (new Error(":refer value must be a sequential collection of symbols"))})()
)):(cljs.core.truth_(use_QMARK_)?sci.impl.interpreter.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,only):the_current_ns__$1
));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null),the_current_ns__$2);
return env__$1;
});
sci.impl.interpreter.handle_require_libspec = (function sci$impl$interpreter$handle_require_libspec(ctx,libspec){
var map__78584 = sci.impl.interpreter.parse_libspec(libspec);
var map__78584__$1 = (((((!((map__78584 == null))))?(((((map__78584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78584):map__78584);
var parsed_libspec = map__78584__$1;
var lib_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78584__$1,new cljs.core.Keyword(null,"lib-name","lib-name",1158024282));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78584__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var env_STAR_ = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var env = cljs.core.deref(env_STAR_);
var cnn = sci.impl.vars.current_ns_name();
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var use_QMARK_ = new cljs.core.Keyword("sci.impl","use","sci.impl/use",1724565881).cljs$core$IFn$_invoke$arity$1(ctx);
var temp__5751__auto__ = (cljs.core.truth_(reload)?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib_name));
if(cljs.core.truth_(temp__5751__auto__)){
var the_loaded_ns = temp__5751__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.interpreter.handle_require_libspec_env(env,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec));
} else {
var temp__5751__auto____$1 = new cljs.core.Keyword(null,"load-fn","load-fn",-2121144334).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__5751__auto____$1)){
var load_fn = temp__5751__auto____$1;
var temp__5751__auto____$2 = (function (){var G__78589 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib_name], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__78589) : load_fn.call(null,G__78589));
})();
if(cljs.core.truth_(temp__5751__auto____$2)){
var map__78591 = temp__5751__auto____$2;
var map__78591__$1 = (((((!((map__78591 == null))))?(((((map__78591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78591):map__78591);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78591__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78591__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__78594_80079 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY);
var G__78595_80080 = source;
(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(G__78594_80079,G__78595_80080) : sci.impl.interpreter.eval_string_STAR_.call(null,G__78594_80079,G__78595_80080));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e78593){if((e78593 instanceof Error)){
var e_80087 = e78593;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib_name], 0));

throw e_80087;
} else {
throw e78593;

}
}
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_STAR_,(function (env__$1){
var namespaces__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var the_loaded_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces__$1,lib_name);
return sci.impl.interpreter.handle_require_libspec_env(env__$1,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec);
}));
} else {
var or__4126__auto__ = (cljs.core.truth_(reload)?(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib_name);
if(cljs.core.truth_(temp__5753__auto__)){
var the_loaded_ns = temp__5753__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.interpreter.handle_require_libspec_env(env,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec));
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw (new Error(["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"."].join('')));
}
}
} else {
throw (new Error(["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"."].join('')));
}
}
});
sci.impl.interpreter.eval_require = (function sci$impl$interpreter$eval_require(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80102 = arguments.length;
var i__4737__auto___80105 = (0);
while(true){
if((i__4737__auto___80105 < len__4736__auto___80102)){
args__4742__auto__.push((arguments[i__4737__auto___80105]));

var G__80106 = (i__4737__auto___80105 + (1));
i__4737__auto___80105 = G__80106;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sci.impl.interpreter.eval_require.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
var libspecs = cljs.core.PersistentVector.EMPTY;
var current_libspec = null;
var args__$1 = args;
while(true){
if(cljs.core.truth_(args__$1)){
var ret = (function (){var G__78618 = ctx;
var G__78619 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78618,G__78619) : sci.impl.interpreter.interpret.call(null,G__78618,G__78619));
})();
if((ret instanceof cljs.core.Symbol)){
var G__80110 = (function (){var G__78620 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__78620,current_libspec);
} else {
return G__78620;
}
})();
var G__80111 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
var G__80112 = cljs.core.next(args__$1);
libspecs = G__80110;
current_libspec = G__80111;
args__$1 = G__80112;
continue;
} else {
if((ret instanceof cljs.core.Keyword)){
var G__80115 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_libspec,ret));
var G__80116 = null;
var G__80117 = cljs.core.next(args__$1);
libspecs = G__80115;
current_libspec = G__80116;
args__$1 = G__80117;
continue;
} else {
var G__80120 = (function (){var G__78622 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__78622,current_libspec);
} else {
return G__78622;
}
})();
var G__80121 = ret;
var G__80122 = cljs.core.next(args__$1);
libspecs = G__80120;
current_libspec = G__80121;
args__$1 = G__80122;
continue;

}
}
} else {
var libspecs__$1 = (function (){var G__78623 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__78623,current_libspec);
} else {
return G__78623;
}
})();
return cljs.core.run_BANG_(((function (libspecs,current_libspec,args__$1,libspecs__$1){
return (function (p1__78598_SHARP_){
return sci.impl.interpreter.handle_require_libspec(ctx,p1__78598_SHARP_);
});})(libspecs,current_libspec,args__$1,libspecs__$1))
,libspecs__$1);
}
break;
}
}));

(sci.impl.interpreter.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_require.cljs$lang$applyTo = (function (seq78599){
var G__78600 = cljs.core.first(seq78599);
var seq78599__$1 = cljs.core.next(seq78599);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78600,seq78599__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.interpreter.eval_require);
sci.impl.interpreter.eval_use = (function sci$impl$interpreter$eval_use(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80129 = arguments.length;
var i__4737__auto___80131 = (0);
while(true){
if((i__4737__auto___80131 < len__4736__auto___80129)){
args__4742__auto__.push((arguments[i__4737__auto___80131]));

var G__80133 = (i__4737__auto___80131 + (1));
i__4737__auto___80131 = G__80133;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sci.impl.interpreter.eval_use.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","use","sci.impl/use",1724565881),true),args);
}));

(sci.impl.interpreter.eval_use.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_use.cljs$lang$applyTo = (function (seq78624){
var G__78625 = cljs.core.first(seq78624);
var seq78624__$1 = cljs.core.next(seq78624);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78625,seq78624__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.interpreter.eval_use);
sci.impl.interpreter.eval_case = (function sci$impl$interpreter$eval_case(ctx,p__78629){
var vec__78633 = p__78629;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78633,(0),null);
var map__78636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78633,(1),null);
var map__78636__$1 = (((((!((map__78636 == null))))?(((((map__78636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78636):map__78636);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78636__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78636__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78636__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.interpreter.interpret.call(null,ctx,case_val));
var temp__5751__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__78646 = temp__5751__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78646,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78646,(1),null);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.interpreter.interpret.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__78649 = ctx;
var G__78650 = cljs.core.second(case_default);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78649,G__78650) : sci.impl.interpreter.interpret.call(null,G__78649,G__78650));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.interpreter.eval_try = (function sci$impl$interpreter$eval_try(ctx,expr){
var map__78653 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__78653__$1 = (((((!((map__78653 == null))))?(((((map__78653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78653):map__78653);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78653__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78653__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78653__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var _STAR_in_try_STAR__orig_val__78664 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__78665 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__78665);

try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.interpreter.interpret.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__78664);
}}catch (e78656){if((e78656 instanceof Error)){
var e = e78656;
var temp__5751__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.interpreter","try-result","sci.impl.interpreter/try-result",1789456125),(function (){var G__78658 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__78659 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78658,G__78659) : sci.impl.interpreter.interpret.call(null,G__78658,G__78659));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__78661 = temp__5751__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78661,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78661,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e78656;

}
}finally {(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.interpreter.interpret.call(null,ctx,finally$));
}});
sci.impl.interpreter.eval_throw = (function sci$impl$interpreter$eval_throw(ctx,p__78667){
var vec__78668 = p__78667;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78668,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78668,(1),null);
var ex__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.interpret.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.interpreter.eval_static_method_invocation = (function sci$impl$interpreter$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__78675_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__78675_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__78675_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.interpreter.eval_constructor_invocation = (function sci$impl$interpreter$eval_constructor_invocation(ctx,p__78682){
var vec__78683 = p__78682;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78683,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78683,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78683,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__78678_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__78678_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__78678_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.interpreter.eval_instance_method_invocation = (function sci$impl$interpreter$eval_instance_method_invocation(p__78697,p__78698){
var map__78699 = p__78697;
var map__78699__$1 = (((((!((map__78699 == null))))?(((((map__78699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78699):map__78699);
var ctx = map__78699__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78699__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__78700 = p__78698;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78700,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78700,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78700,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78700,(3),null);
var _expr = vec__78700;
var instance_meta = cljs.core.meta(instance_expr);
var tag_class = new cljs.core.Keyword(null,"tag-class","tag-class",714967874).cljs$core$IFn$_invoke$arity$1(instance_meta);
var instance_expr_STAR_ = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,instance_expr) : sci.impl.interpreter.interpret.call(null,ctx,instance_expr));
if(cljs.core.map_QMARK_(instance_expr_STAR_)){
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

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__78694_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__78694_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__78694_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
}
});
sci.impl.interpreter.eval_in_ns = (function sci$impl$interpreter$eval_in_ns(ctx,p__78721){
var vec__78723 = p__78721;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78723,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78723,(1),null);
var ns_sym = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.interpreter.interpret.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.interpreter.eval_refer = (function sci$impl$interpreter$eval_refer(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80176 = arguments.length;
var i__4737__auto___80177 = (0);
while(true){
if((i__4737__auto___80177 < len__4736__auto___80176)){
args__4742__auto__.push((arguments[i__4737__auto___80177]));

var G__80180 = (i__4737__auto___80177 + (1));
i__4737__auto___80177 = G__80180;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.interpreter.eval_refer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.interpreter.eval_refer.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,ns_sym,exprs){
var ns_sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_sym) : sci.impl.interpreter.interpret.call(null,ctx,ns_sym));
var exprs__$1 = exprs;
while(true){
if(cljs.core.truth_(exprs__$1)){
var vec__78743 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78743,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78743,(1),null);
var G__78746_80182 = k;
var G__78746_80183__$1 = (((G__78746_80182 instanceof cljs.core.Keyword))?G__78746_80182.fqn:null);
switch (G__78746_80183__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__78746_80182,G__78746_80183__$1,vec__78743,k,v,ns_sym__$1){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__78746_80182,G__78746_80183__$1,vec__78743,k,v,ns_sym__$1))
);

break;
case "only":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__78746_80182,G__78746_80183__$1,vec__78743,k,v,ns_sym__$1){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym__$1], null));
var other_vars = cljs.core.select_keys(other_ns,v);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),cljs.core.merge,other_vars);
});})(exprs__$1,G__78746_80182,G__78746_80183__$1,vec__78743,k,v,ns_sym__$1))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__78746_80183__$1)].join('')));

}

var G__80193 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__80193;
continue;
} else {
return null;
}
break;
}
}));

(sci.impl.interpreter.eval_refer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.interpreter.eval_refer.cljs$lang$applyTo = (function (seq78729){
var G__78730 = cljs.core.first(seq78729);
var seq78729__$1 = cljs.core.next(seq78729);
var G__78731 = cljs.core.first(seq78729__$1);
var seq78729__$2 = cljs.core.next(seq78729__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78730,G__78731,seq78729__$2);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_refer_state,sci.impl.interpreter.eval_refer);
sci.impl.interpreter.eval_resolve = (function sci$impl$interpreter$eval_resolve(ctx,sym){
var sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,sym) : sci.impl.interpreter.interpret.call(null,ctx,sym));
return cljs.core.second(sci.impl.analyzer.lookup(ctx,sym__$1,false));
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_resolve_state,sci.impl.interpreter.eval_resolve);
sci.impl.interpreter.macroexpand_1 = (function sci$impl$interpreter$macroexpand_1(ctx,expr){
var original_expr = expr;
if(cljs.core.seq_QMARK_(expr)){
var op = cljs.core.first(expr);
if((op instanceof cljs.core.Symbol)){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.special_syms,op))){
return expr;
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"for","for",316745208,null),null], null), null),op)){
return sci.impl.analyzer.analyze(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825),true),expr);
} else {
var f = sci.impl.analyzer.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,op,true);
var f__$1 = (cljs.core.truth_(((sci.impl.vars.var_QMARK_(f))?sci.impl.vars.isMacro(f):false))?cljs.core.deref(f):f);
if(cljs.core.truth_(sci.impl.analyzer.macro_QMARK_(f__$1))){
var f__$2 = (cljs.core.truth_((function (){var G__78775 = new cljs.core.Keyword(null,"needs-ctx","needs-ctx",-35514403);
var G__78776 = (function (){var G__78779 = f__$1;
var G__78779__$1 = (((G__78779 == null))?null:cljs.core.meta(G__78779));
if((G__78779__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(G__78779__$1);
}
})();
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__78775,G__78776) : sci.impl.utils.kw_identical_QMARK_.call(null,G__78775,G__78776));
})())?cljs.core.partial.cljs$core$IFn$_invoke$arity$2(f__$1,ctx):f__$1);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$2,original_expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest(expr));
} else {
return expr;
}

}
}
} else {
return expr;
}
} else {
return expr;
}
});
sci.impl.interpreter.macroexpand = (function sci$impl$interpreter$macroexpand(ctx,form){
var ex = sci.impl.interpreter.macroexpand_1(ctx,form);
if((ex === form)){
return form;
} else {
return (sci.impl.interpreter.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.macroexpand.call(null,ctx,ex));
}
});
sci.impl.interpreter.eval_import = (function sci$impl$interpreter$eval_import(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80210 = arguments.length;
var i__4737__auto___80212 = (0);
while(true){
if((i__4737__auto___80212 < len__4736__auto___80210)){
args__4742__auto__.push((arguments[i__4737__auto___80212]));

var G__80213 = (i__4737__auto___80212 + (1));
i__4737__auto___80212 = G__80213;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sci.impl.interpreter.eval_import.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,import_symbols_or_lists){
var specs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__78793_SHARP_){
if(((cljs.core.seq_QMARK_(p1__78793_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(p1__78793_SHARP_))))){
return cljs.core.second(p1__78793_SHARP_);
} else {
return p1__78793_SHARP_;
}
}),import_symbols_or_lists);
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.core.run_BANG_((function (spec){
var vec__78808 = (((spec instanceof cljs.core.Symbol))?(function (){var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec);
var last_dot = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(s,".");
var package_PLUS_class_name = (cljs.core.truth_(last_dot)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),last_dot)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(last_dot + (1)),((s).length)))], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null)], null));
return package_PLUS_class_name;
})():(function (){var p = cljs.core.first(spec);
var cs = cljs.core.rest(spec);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cs], null);
})());
var package$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78808,(0),null);
var classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78808,(1),null);
var seq__78816 = cljs.core.seq(classes);
var chunk__78817 = null;
var count__78818 = (0);
var i__78819 = (0);
while(true){
if((i__78819 < count__78818)){
var class$ = chunk__78817.cljs$core$IIndexed$_nth$arity$2(null,i__78819);
var fq_class_name_80225 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(package$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):class$));
if(cljs.core.truth_(sci.impl.interop.resolve_class(ctx,fq_class_name_80225))){
var cnn_80228 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_80228,new cljs.core.Keyword(null,"imports","imports",-1249933394),class$], null),fq_class_name_80225);
} else {
var temp__5751__auto___80229 = sci.impl.records.resolve_record_class.cljs$core$IFn$_invoke$arity$3(ctx,package$,class$);
if(cljs.core.truth_(temp__5751__auto___80229)){
var rec_80230 = temp__5751__auto___80229;
var cnn_80231 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_80231,class$], null),rec_80230);
} else {
throw (new Error(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fq_class_name_80225)].join('')));
}
}


var G__80233 = seq__78816;
var G__80234 = chunk__78817;
var G__80235 = count__78818;
var G__80236 = (i__78819 + (1));
seq__78816 = G__80233;
chunk__78817 = G__80234;
count__78818 = G__80235;
i__78819 = G__80236;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__78816);
if(temp__5753__auto__){
var seq__78816__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__78816__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__78816__$1);
var G__80240 = cljs.core.chunk_rest(seq__78816__$1);
var G__80241 = c__4556__auto__;
var G__80242 = cljs.core.count(c__4556__auto__);
var G__80243 = (0);
seq__78816 = G__80240;
chunk__78817 = G__80241;
count__78818 = G__80242;
i__78819 = G__80243;
continue;
} else {
var class$ = cljs.core.first(seq__78816__$1);
var fq_class_name_80245 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(package$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):class$));
if(cljs.core.truth_(sci.impl.interop.resolve_class(ctx,fq_class_name_80245))){
var cnn_80246 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_80246,new cljs.core.Keyword(null,"imports","imports",-1249933394),class$], null),fq_class_name_80245);
} else {
var temp__5751__auto___80248 = sci.impl.records.resolve_record_class.cljs$core$IFn$_invoke$arity$3(ctx,package$,class$);
if(cljs.core.truth_(temp__5751__auto___80248)){
var rec_80251 = temp__5751__auto___80248;
var cnn_80252 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_80252,class$], null),rec_80251);
} else {
throw (new Error(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fq_class_name_80245)].join('')));
}
}


var G__80256 = cljs.core.next(seq__78816__$1);
var G__80257 = null;
var G__80258 = (0);
var G__80259 = (0);
seq__78816 = G__80256;
chunk__78817 = G__80257;
count__78818 = G__80258;
i__78819 = G__80259;
continue;
}
} else {
return null;
}
}
break;
}
}),specs);
}));

(sci.impl.interpreter.eval_import.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_import.cljs$lang$applyTo = (function (seq78795){
var G__78796 = cljs.core.first(seq78795);
var seq78795__$1 = cljs.core.next(seq78795);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78796,seq78795__$1);
}));

sci.impl.interpreter.eval_set_BANG_ = (function sci$impl$interpreter$eval_set_BANG_(ctx,p__78868){
var vec__78869 = p__78868;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78869,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78869,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78869,(2),null);
var obj__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.interpreter.interpret.call(null,ctx,obj));
var v__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.interpreter.interpret.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}
});
sci.impl.interpreter.eval_do_STAR_ = (function sci$impl$interpreter$eval_do_STAR_(ctx,exprs){
var G__78886 = exprs;
var vec__78888 = G__78886;
var seq__78889 = cljs.core.seq(vec__78888);
var first__78890 = cljs.core.first(seq__78889);
var seq__78889__$1 = cljs.core.next(seq__78889);
var expr = first__78890;
var exprs__$1 = seq__78889__$1;
var G__78886__$1 = G__78886;
while(true){
var vec__78893 = G__78886__$1;
var seq__78894 = cljs.core.seq(vec__78893);
var first__78895 = cljs.core.first(seq__78894);
var seq__78894__$1 = cljs.core.next(seq__78894);
var expr__$1 = first__78895;
var exprs__$2 = seq__78894__$1;
var ret = (function (){try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.interpreter.interpret.call(null,ctx,expr__$1));
}catch (e78900){if((e78900 instanceof Error)){
var e = e78900;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr__$1);
} else {
throw e78900;

}
}})();
var temp__5751__auto__ = cljs.core.seq(exprs__$2);
if(temp__5751__auto__){
var exprs__$3 = temp__5751__auto__;
var G__80270 = exprs__$3;
G__78886__$1 = G__80270;
continue;
} else {
return ret;
}
break;
}
});
sci.impl.interpreter.eval_do = (function sci$impl$interpreter$eval_do(ctx,expr){
var temp__5753__auto__ = cljs.core.next(expr);
if(temp__5753__auto__){
var exprs = temp__5753__auto__;
return sci.impl.interpreter.eval_do_STAR_(ctx,exprs);
} else {
return null;
}
});
sci.impl.interpreter.fn_call = (function sci$impl$interpreter$fn_call(ctx,f,args){
var G__79108 = cljs.core.count(args);
switch (G__79108) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg78916 = (function (){var G__79111 = ctx;
var G__79112 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79111,G__79112) : sci.impl.interpreter.interpret.call(null,G__79111,G__79112));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg78916) : f.call(null,arg78916));

break;
case (2):
var arg78917 = (function (){var G__79113 = ctx;
var G__79114 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79113,G__79114) : sci.impl.interpreter.interpret.call(null,G__79113,G__79114));
})();
var args__$1 = cljs.core.rest(args);
var arg78918 = (function (){var G__79115 = ctx;
var G__79116 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79115,G__79116) : sci.impl.interpreter.interpret.call(null,G__79115,G__79116));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg78917,arg78918) : f.call(null,arg78917,arg78918));

break;
case (3):
var arg78919 = (function (){var G__79118 = ctx;
var G__79119 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79118,G__79119) : sci.impl.interpreter.interpret.call(null,G__79118,G__79119));
})();
var args__$1 = cljs.core.rest(args);
var arg78920 = (function (){var G__79122 = ctx;
var G__79123 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79122,G__79123) : sci.impl.interpreter.interpret.call(null,G__79122,G__79123));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78921 = (function (){var G__79124 = ctx;
var G__79125 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79124,G__79125) : sci.impl.interpreter.interpret.call(null,G__79124,G__79125));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg78919,arg78920,arg78921) : f.call(null,arg78919,arg78920,arg78921));

break;
case (4):
var arg78922 = (function (){var G__79130 = ctx;
var G__79131 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79130,G__79131) : sci.impl.interpreter.interpret.call(null,G__79130,G__79131));
})();
var args__$1 = cljs.core.rest(args);
var arg78923 = (function (){var G__79132 = ctx;
var G__79133 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79132,G__79133) : sci.impl.interpreter.interpret.call(null,G__79132,G__79133));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78924 = (function (){var G__79139 = ctx;
var G__79140 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79139,G__79140) : sci.impl.interpreter.interpret.call(null,G__79139,G__79140));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78925 = (function (){var G__79144 = ctx;
var G__79145 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79144,G__79145) : sci.impl.interpreter.interpret.call(null,G__79144,G__79145));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg78922,arg78923,arg78924,arg78925) : f.call(null,arg78922,arg78923,arg78924,arg78925));

break;
case (5):
var arg78926 = (function (){var G__79154 = ctx;
var G__79155 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79154,G__79155) : sci.impl.interpreter.interpret.call(null,G__79154,G__79155));
})();
var args__$1 = cljs.core.rest(args);
var arg78927 = (function (){var G__79158 = ctx;
var G__79159 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79158,G__79159) : sci.impl.interpreter.interpret.call(null,G__79158,G__79159));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78928 = (function (){var G__79165 = ctx;
var G__79166 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79165,G__79166) : sci.impl.interpreter.interpret.call(null,G__79165,G__79166));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78929 = (function (){var G__79171 = ctx;
var G__79172 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79171,G__79172) : sci.impl.interpreter.interpret.call(null,G__79171,G__79172));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78930 = (function (){var G__79173 = ctx;
var G__79174 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79173,G__79174) : sci.impl.interpreter.interpret.call(null,G__79173,G__79174));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg78926,arg78927,arg78928,arg78929,arg78930) : f.call(null,arg78926,arg78927,arg78928,arg78929,arg78930));

break;
case (6):
var arg78931 = (function (){var G__79187 = ctx;
var G__79188 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79187,G__79188) : sci.impl.interpreter.interpret.call(null,G__79187,G__79188));
})();
var args__$1 = cljs.core.rest(args);
var arg78932 = (function (){var G__79189 = ctx;
var G__79190 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79189,G__79190) : sci.impl.interpreter.interpret.call(null,G__79189,G__79190));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78933 = (function (){var G__79192 = ctx;
var G__79193 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79192,G__79193) : sci.impl.interpreter.interpret.call(null,G__79192,G__79193));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78934 = (function (){var G__79195 = ctx;
var G__79196 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79195,G__79196) : sci.impl.interpreter.interpret.call(null,G__79195,G__79196));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78935 = (function (){var G__79199 = ctx;
var G__79200 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79199,G__79200) : sci.impl.interpreter.interpret.call(null,G__79199,G__79200));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78936 = (function (){var G__79203 = ctx;
var G__79204 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79203,G__79204) : sci.impl.interpreter.interpret.call(null,G__79203,G__79204));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg78931,arg78932,arg78933,arg78934,arg78935,arg78936) : f.call(null,arg78931,arg78932,arg78933,arg78934,arg78935,arg78936));

break;
case (7):
var arg78937 = (function (){var G__79205 = ctx;
var G__79206 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79205,G__79206) : sci.impl.interpreter.interpret.call(null,G__79205,G__79206));
})();
var args__$1 = cljs.core.rest(args);
var arg78938 = (function (){var G__79208 = ctx;
var G__79209 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79208,G__79209) : sci.impl.interpreter.interpret.call(null,G__79208,G__79209));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78939 = (function (){var G__79210 = ctx;
var G__79211 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79210,G__79211) : sci.impl.interpreter.interpret.call(null,G__79210,G__79211));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78940 = (function (){var G__79214 = ctx;
var G__79215 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79214,G__79215) : sci.impl.interpreter.interpret.call(null,G__79214,G__79215));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78941 = (function (){var G__79218 = ctx;
var G__79219 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79218,G__79219) : sci.impl.interpreter.interpret.call(null,G__79218,G__79219));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78942 = (function (){var G__79220 = ctx;
var G__79221 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79220,G__79221) : sci.impl.interpreter.interpret.call(null,G__79220,G__79221));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78943 = (function (){var G__79222 = ctx;
var G__79223 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79222,G__79223) : sci.impl.interpreter.interpret.call(null,G__79222,G__79223));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg78937,arg78938,arg78939,arg78940,arg78941,arg78942,arg78943) : f.call(null,arg78937,arg78938,arg78939,arg78940,arg78941,arg78942,arg78943));

break;
case (8):
var arg78944 = (function (){var G__79232 = ctx;
var G__79233 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79232,G__79233) : sci.impl.interpreter.interpret.call(null,G__79232,G__79233));
})();
var args__$1 = cljs.core.rest(args);
var arg78945 = (function (){var G__79236 = ctx;
var G__79237 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79236,G__79237) : sci.impl.interpreter.interpret.call(null,G__79236,G__79237));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78946 = (function (){var G__79238 = ctx;
var G__79239 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79238,G__79239) : sci.impl.interpreter.interpret.call(null,G__79238,G__79239));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78947 = (function (){var G__79240 = ctx;
var G__79241 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79240,G__79241) : sci.impl.interpreter.interpret.call(null,G__79240,G__79241));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78948 = (function (){var G__79243 = ctx;
var G__79244 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79243,G__79244) : sci.impl.interpreter.interpret.call(null,G__79243,G__79244));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78949 = (function (){var G__79247 = ctx;
var G__79248 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79247,G__79248) : sci.impl.interpreter.interpret.call(null,G__79247,G__79248));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78950 = (function (){var G__79251 = ctx;
var G__79252 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79251,G__79252) : sci.impl.interpreter.interpret.call(null,G__79251,G__79252));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg78951 = (function (){var G__79253 = ctx;
var G__79254 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79253,G__79254) : sci.impl.interpreter.interpret.call(null,G__79253,G__79254));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg78944,arg78945,arg78946,arg78947,arg78948,arg78949,arg78950,arg78951) : f.call(null,arg78944,arg78945,arg78946,arg78947,arg78948,arg78949,arg78950,arg78951));

break;
case (9):
var arg78952 = (function (){var G__79256 = ctx;
var G__79257 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79256,G__79257) : sci.impl.interpreter.interpret.call(null,G__79256,G__79257));
})();
var args__$1 = cljs.core.rest(args);
var arg78953 = (function (){var G__79260 = ctx;
var G__79261 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79260,G__79261) : sci.impl.interpreter.interpret.call(null,G__79260,G__79261));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78954 = (function (){var G__79264 = ctx;
var G__79265 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79264,G__79265) : sci.impl.interpreter.interpret.call(null,G__79264,G__79265));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78955 = (function (){var G__79266 = ctx;
var G__79267 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79266,G__79267) : sci.impl.interpreter.interpret.call(null,G__79266,G__79267));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78956 = (function (){var G__79269 = ctx;
var G__79270 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79269,G__79270) : sci.impl.interpreter.interpret.call(null,G__79269,G__79270));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78957 = (function (){var G__79272 = ctx;
var G__79273 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79272,G__79273) : sci.impl.interpreter.interpret.call(null,G__79272,G__79273));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78958 = (function (){var G__79275 = ctx;
var G__79276 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79275,G__79276) : sci.impl.interpreter.interpret.call(null,G__79275,G__79276));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg78959 = (function (){var G__79281 = ctx;
var G__79282 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79281,G__79282) : sci.impl.interpreter.interpret.call(null,G__79281,G__79282));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg78960 = (function (){var G__79284 = ctx;
var G__79285 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79284,G__79285) : sci.impl.interpreter.interpret.call(null,G__79284,G__79285));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg78952,arg78953,arg78954,arg78955,arg78956,arg78957,arg78958,arg78959,arg78960) : f.call(null,arg78952,arg78953,arg78954,arg78955,arg78956,arg78957,arg78958,arg78959,arg78960));

break;
case (10):
var arg78961 = (function (){var G__79288 = ctx;
var G__79289 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79288,G__79289) : sci.impl.interpreter.interpret.call(null,G__79288,G__79289));
})();
var args__$1 = cljs.core.rest(args);
var arg78962 = (function (){var G__79291 = ctx;
var G__79292 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79291,G__79292) : sci.impl.interpreter.interpret.call(null,G__79291,G__79292));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78963 = (function (){var G__79295 = ctx;
var G__79296 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79295,G__79296) : sci.impl.interpreter.interpret.call(null,G__79295,G__79296));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78964 = (function (){var G__79298 = ctx;
var G__79299 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79298,G__79299) : sci.impl.interpreter.interpret.call(null,G__79298,G__79299));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78965 = (function (){var G__79301 = ctx;
var G__79302 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79301,G__79302) : sci.impl.interpreter.interpret.call(null,G__79301,G__79302));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78966 = (function (){var G__79303 = ctx;
var G__79304 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79303,G__79304) : sci.impl.interpreter.interpret.call(null,G__79303,G__79304));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78967 = (function (){var G__79306 = ctx;
var G__79307 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79306,G__79307) : sci.impl.interpreter.interpret.call(null,G__79306,G__79307));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg78968 = (function (){var G__79308 = ctx;
var G__79309 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79308,G__79309) : sci.impl.interpreter.interpret.call(null,G__79308,G__79309));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg78969 = (function (){var G__79312 = ctx;
var G__79313 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79312,G__79313) : sci.impl.interpreter.interpret.call(null,G__79312,G__79313));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg78970 = (function (){var G__79316 = ctx;
var G__79317 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79316,G__79317) : sci.impl.interpreter.interpret.call(null,G__79316,G__79317));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg78961,arg78962,arg78963,arg78964,arg78965,arg78966,arg78967,arg78968,arg78969,arg78970) : f.call(null,arg78961,arg78962,arg78963,arg78964,arg78965,arg78966,arg78967,arg78968,arg78969,arg78970));

break;
case (11):
var arg78971 = (function (){var G__79319 = ctx;
var G__79320 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79319,G__79320) : sci.impl.interpreter.interpret.call(null,G__79319,G__79320));
})();
var args__$1 = cljs.core.rest(args);
var arg78972 = (function (){var G__79321 = ctx;
var G__79322 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79321,G__79322) : sci.impl.interpreter.interpret.call(null,G__79321,G__79322));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78973 = (function (){var G__79327 = ctx;
var G__79328 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79327,G__79328) : sci.impl.interpreter.interpret.call(null,G__79327,G__79328));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78974 = (function (){var G__79331 = ctx;
var G__79333 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79331,G__79333) : sci.impl.interpreter.interpret.call(null,G__79331,G__79333));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78975 = (function (){var G__79334 = ctx;
var G__79335 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79334,G__79335) : sci.impl.interpreter.interpret.call(null,G__79334,G__79335));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78976 = (function (){var G__79336 = ctx;
var G__79337 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79336,G__79337) : sci.impl.interpreter.interpret.call(null,G__79336,G__79337));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78977 = (function (){var G__79340 = ctx;
var G__79341 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79340,G__79341) : sci.impl.interpreter.interpret.call(null,G__79340,G__79341));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg78978 = (function (){var G__79346 = ctx;
var G__79347 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79346,G__79347) : sci.impl.interpreter.interpret.call(null,G__79346,G__79347));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg78979 = (function (){var G__79351 = ctx;
var G__79352 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79351,G__79352) : sci.impl.interpreter.interpret.call(null,G__79351,G__79352));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg78980 = (function (){var G__79353 = ctx;
var G__79354 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79353,G__79354) : sci.impl.interpreter.interpret.call(null,G__79353,G__79354));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg78981 = (function (){var G__79355 = ctx;
var G__79356 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79355,G__79356) : sci.impl.interpreter.interpret.call(null,G__79355,G__79356));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg78971,arg78972,arg78973,arg78974,arg78975,arg78976,arg78977,arg78978,arg78979,arg78980,arg78981) : f.call(null,arg78971,arg78972,arg78973,arg78974,arg78975,arg78976,arg78977,arg78978,arg78979,arg78980,arg78981));

break;
case (12):
var arg78982 = (function (){var G__79360 = ctx;
var G__79361 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79360,G__79361) : sci.impl.interpreter.interpret.call(null,G__79360,G__79361));
})();
var args__$1 = cljs.core.rest(args);
var arg78983 = (function (){var G__79364 = ctx;
var G__79365 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79364,G__79365) : sci.impl.interpreter.interpret.call(null,G__79364,G__79365));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78984 = (function (){var G__79366 = ctx;
var G__79367 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79366,G__79367) : sci.impl.interpreter.interpret.call(null,G__79366,G__79367));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78985 = (function (){var G__79368 = ctx;
var G__79369 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79368,G__79369) : sci.impl.interpreter.interpret.call(null,G__79368,G__79369));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78986 = (function (){var G__79371 = ctx;
var G__79372 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79371,G__79372) : sci.impl.interpreter.interpret.call(null,G__79371,G__79372));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78987 = (function (){var G__79374 = ctx;
var G__79375 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79374,G__79375) : sci.impl.interpreter.interpret.call(null,G__79374,G__79375));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78988 = (function (){var G__79379 = ctx;
var G__79380 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79379,G__79380) : sci.impl.interpreter.interpret.call(null,G__79379,G__79380));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg78989 = (function (){var G__79381 = ctx;
var G__79382 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79381,G__79382) : sci.impl.interpreter.interpret.call(null,G__79381,G__79382));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg78990 = (function (){var G__79383 = ctx;
var G__79384 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79383,G__79384) : sci.impl.interpreter.interpret.call(null,G__79383,G__79384));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg78991 = (function (){var G__79387 = ctx;
var G__79388 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79387,G__79388) : sci.impl.interpreter.interpret.call(null,G__79387,G__79388));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg78992 = (function (){var G__79390 = ctx;
var G__79391 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79390,G__79391) : sci.impl.interpreter.interpret.call(null,G__79390,G__79391));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg78993 = (function (){var G__79392 = ctx;
var G__79393 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79392,G__79393) : sci.impl.interpreter.interpret.call(null,G__79392,G__79393));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg78982,arg78983,arg78984,arg78985,arg78986,arg78987,arg78988,arg78989,arg78990,arg78991,arg78992,arg78993) : f.call(null,arg78982,arg78983,arg78984,arg78985,arg78986,arg78987,arg78988,arg78989,arg78990,arg78991,arg78992,arg78993));

break;
case (13):
var arg78994 = (function (){var G__79399 = ctx;
var G__79400 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79399,G__79400) : sci.impl.interpreter.interpret.call(null,G__79399,G__79400));
})();
var args__$1 = cljs.core.rest(args);
var arg78995 = (function (){var G__79401 = ctx;
var G__79402 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79401,G__79402) : sci.impl.interpreter.interpret.call(null,G__79401,G__79402));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78996 = (function (){var G__79404 = ctx;
var G__79405 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79404,G__79405) : sci.impl.interpreter.interpret.call(null,G__79404,G__79405));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78997 = (function (){var G__79408 = ctx;
var G__79409 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79408,G__79409) : sci.impl.interpreter.interpret.call(null,G__79408,G__79409));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78998 = (function (){var G__79412 = ctx;
var G__79413 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79412,G__79413) : sci.impl.interpreter.interpret.call(null,G__79412,G__79413));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78999 = (function (){var G__79416 = ctx;
var G__79417 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79416,G__79417) : sci.impl.interpreter.interpret.call(null,G__79416,G__79417));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg79000 = (function (){var G__79419 = ctx;
var G__79420 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79419,G__79420) : sci.impl.interpreter.interpret.call(null,G__79419,G__79420));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg79001 = (function (){var G__79421 = ctx;
var G__79422 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79421,G__79422) : sci.impl.interpreter.interpret.call(null,G__79421,G__79422));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg79002 = (function (){var G__79424 = ctx;
var G__79425 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79424,G__79425) : sci.impl.interpreter.interpret.call(null,G__79424,G__79425));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg79003 = (function (){var G__79428 = ctx;
var G__79429 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79428,G__79429) : sci.impl.interpreter.interpret.call(null,G__79428,G__79429));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg79004 = (function (){var G__79431 = ctx;
var G__79432 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79431,G__79432) : sci.impl.interpreter.interpret.call(null,G__79431,G__79432));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg79005 = (function (){var G__79434 = ctx;
var G__79435 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79434,G__79435) : sci.impl.interpreter.interpret.call(null,G__79434,G__79435));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg79006 = (function (){var G__79436 = ctx;
var G__79437 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79436,G__79437) : sci.impl.interpreter.interpret.call(null,G__79436,G__79437));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg78994,arg78995,arg78996,arg78997,arg78998,arg78999,arg79000,arg79001,arg79002,arg79003,arg79004,arg79005,arg79006) : f.call(null,arg78994,arg78995,arg78996,arg78997,arg78998,arg78999,arg79000,arg79001,arg79002,arg79003,arg79004,arg79005,arg79006));

break;
case (14):
var arg79007 = (function (){var G__79442 = ctx;
var G__79443 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79442,G__79443) : sci.impl.interpreter.interpret.call(null,G__79442,G__79443));
})();
var args__$1 = cljs.core.rest(args);
var arg79008 = (function (){var G__79446 = ctx;
var G__79447 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79446,G__79447) : sci.impl.interpreter.interpret.call(null,G__79446,G__79447));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg79009 = (function (){var G__79448 = ctx;
var G__79449 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79448,G__79449) : sci.impl.interpreter.interpret.call(null,G__79448,G__79449));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg79010 = (function (){var G__79450 = ctx;
var G__79451 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79450,G__79451) : sci.impl.interpreter.interpret.call(null,G__79450,G__79451));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg79011 = (function (){var G__79453 = ctx;
var G__79454 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79453,G__79454) : sci.impl.interpreter.interpret.call(null,G__79453,G__79454));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg79012 = (function (){var G__79455 = ctx;
var G__79456 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79455,G__79456) : sci.impl.interpreter.interpret.call(null,G__79455,G__79456));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg79013 = (function (){var G__79460 = ctx;
var G__79461 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79460,G__79461) : sci.impl.interpreter.interpret.call(null,G__79460,G__79461));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg79014 = (function (){var G__79464 = ctx;
var G__79465 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79464,G__79465) : sci.impl.interpreter.interpret.call(null,G__79464,G__79465));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg79015 = (function (){var G__79466 = ctx;
var G__79467 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79466,G__79467) : sci.impl.interpreter.interpret.call(null,G__79466,G__79467));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg79016 = (function (){var G__79470 = ctx;
var G__79471 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79470,G__79471) : sci.impl.interpreter.interpret.call(null,G__79470,G__79471));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg79017 = (function (){var G__79473 = ctx;
var G__79474 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79473,G__79474) : sci.impl.interpreter.interpret.call(null,G__79473,G__79474));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg79018 = (function (){var G__79481 = ctx;
var G__79482 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79481,G__79482) : sci.impl.interpreter.interpret.call(null,G__79481,G__79482));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg79019 = (function (){var G__79485 = ctx;
var G__79486 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79485,G__79486) : sci.impl.interpreter.interpret.call(null,G__79485,G__79486));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg79020 = (function (){var G__79487 = ctx;
var G__79488 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79487,G__79488) : sci.impl.interpreter.interpret.call(null,G__79487,G__79488));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg79007,arg79008,arg79009,arg79010,arg79011,arg79012,arg79013,arg79014,arg79015,arg79016,arg79017,arg79018,arg79019,arg79020) : f.call(null,arg79007,arg79008,arg79009,arg79010,arg79011,arg79012,arg79013,arg79014,arg79015,arg79016,arg79017,arg79018,arg79019,arg79020));

break;
case (15):
var arg79021 = (function (){var G__79490 = ctx;
var G__79491 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79490,G__79491) : sci.impl.interpreter.interpret.call(null,G__79490,G__79491));
})();
var args__$1 = cljs.core.rest(args);
var arg79022 = (function (){var G__79492 = ctx;
var G__79493 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79492,G__79493) : sci.impl.interpreter.interpret.call(null,G__79492,G__79493));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg79023 = (function (){var G__79498 = ctx;
var G__79499 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79498,G__79499) : sci.impl.interpreter.interpret.call(null,G__79498,G__79499));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg79024 = (function (){var G__79502 = ctx;
var G__79503 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79502,G__79503) : sci.impl.interpreter.interpret.call(null,G__79502,G__79503));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg79025 = (function (){var G__79504 = ctx;
var G__79505 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79504,G__79505) : sci.impl.interpreter.interpret.call(null,G__79504,G__79505));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg79026 = (function (){var G__79509 = ctx;
var G__79510 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79509,G__79510) : sci.impl.interpreter.interpret.call(null,G__79509,G__79510));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg79027 = (function (){var G__79511 = ctx;
var G__79512 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79511,G__79512) : sci.impl.interpreter.interpret.call(null,G__79511,G__79512));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg79028 = (function (){var G__79515 = ctx;
var G__79516 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79515,G__79516) : sci.impl.interpreter.interpret.call(null,G__79515,G__79516));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg79029 = (function (){var G__79519 = ctx;
var G__79520 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79519,G__79520) : sci.impl.interpreter.interpret.call(null,G__79519,G__79520));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg79030 = (function (){var G__79521 = ctx;
var G__79522 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79521,G__79522) : sci.impl.interpreter.interpret.call(null,G__79521,G__79522));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg79031 = (function (){var G__79524 = ctx;
var G__79525 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79524,G__79525) : sci.impl.interpreter.interpret.call(null,G__79524,G__79525));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg79032 = (function (){var G__79526 = ctx;
var G__79527 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79526,G__79527) : sci.impl.interpreter.interpret.call(null,G__79526,G__79527));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg79033 = (function (){var G__79530 = ctx;
var G__79531 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79530,G__79531) : sci.impl.interpreter.interpret.call(null,G__79530,G__79531));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg79034 = (function (){var G__79534 = ctx;
var G__79535 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79534,G__79535) : sci.impl.interpreter.interpret.call(null,G__79534,G__79535));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg79035 = (function (){var G__79536 = ctx;
var G__79537 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79536,G__79537) : sci.impl.interpreter.interpret.call(null,G__79536,G__79537));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg79021,arg79022,arg79023,arg79024,arg79025,arg79026,arg79027,arg79028,arg79029,arg79030,arg79031,arg79032,arg79033,arg79034,arg79035) : f.call(null,arg79021,arg79022,arg79023,arg79024,arg79025,arg79026,arg79027,arg79028,arg79029,arg79030,arg79031,arg79032,arg79033,arg79034,arg79035));

break;
case (16):
var arg79036 = (function (){var G__79544 = ctx;
var G__79545 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79544,G__79545) : sci.impl.interpreter.interpret.call(null,G__79544,G__79545));
})();
var args__$1 = cljs.core.rest(args);
var arg79037 = (function (){var G__79548 = ctx;
var G__79549 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79548,G__79549) : sci.impl.interpreter.interpret.call(null,G__79548,G__79549));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg79038 = (function (){var G__79550 = ctx;
var G__79551 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79550,G__79551) : sci.impl.interpreter.interpret.call(null,G__79550,G__79551));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg79039 = (function (){var G__79553 = ctx;
var G__79554 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79553,G__79554) : sci.impl.interpreter.interpret.call(null,G__79553,G__79554));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg79040 = (function (){var G__79555 = ctx;
var G__79556 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79555,G__79556) : sci.impl.interpreter.interpret.call(null,G__79555,G__79556));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg79041 = (function (){var G__79561 = ctx;
var G__79562 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79561,G__79562) : sci.impl.interpreter.interpret.call(null,G__79561,G__79562));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg79042 = (function (){var G__79565 = ctx;
var G__79566 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79565,G__79566) : sci.impl.interpreter.interpret.call(null,G__79565,G__79566));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg79043 = (function (){var G__79568 = ctx;
var G__79569 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79568,G__79569) : sci.impl.interpreter.interpret.call(null,G__79568,G__79569));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg79044 = (function (){var G__79570 = ctx;
var G__79571 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79570,G__79571) : sci.impl.interpreter.interpret.call(null,G__79570,G__79571));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg79045 = (function (){var G__79573 = ctx;
var G__79574 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79573,G__79574) : sci.impl.interpreter.interpret.call(null,G__79573,G__79574));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg79046 = (function (){var G__79577 = ctx;
var G__79578 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79577,G__79578) : sci.impl.interpreter.interpret.call(null,G__79577,G__79578));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg79047 = (function (){var G__79581 = ctx;
var G__79582 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79581,G__79582) : sci.impl.interpreter.interpret.call(null,G__79581,G__79582));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg79048 = (function (){var G__79583 = ctx;
var G__79584 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79583,G__79584) : sci.impl.interpreter.interpret.call(null,G__79583,G__79584));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg79049 = (function (){var G__79585 = ctx;
var G__79586 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79585,G__79586) : sci.impl.interpreter.interpret.call(null,G__79585,G__79586));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg79050 = (function (){var G__79588 = ctx;
var G__79589 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79588,G__79589) : sci.impl.interpreter.interpret.call(null,G__79588,G__79589));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg79051 = (function (){var G__79593 = ctx;
var G__79594 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79593,G__79594) : sci.impl.interpreter.interpret.call(null,G__79593,G__79594));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg79036,arg79037,arg79038,arg79039,arg79040,arg79041,arg79042,arg79043,arg79044,arg79045,arg79046,arg79047,arg79048,arg79049,arg79050,arg79051) : f.call(null,arg79036,arg79037,arg79038,arg79039,arg79040,arg79041,arg79042,arg79043,arg79044,arg79045,arg79046,arg79047,arg79048,arg79049,arg79050,arg79051));

break;
case (17):
var arg79052 = (function (){var G__79602 = ctx;
var G__79603 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79602,G__79603) : sci.impl.interpreter.interpret.call(null,G__79602,G__79603));
})();
var args__$1 = cljs.core.rest(args);
var arg79053 = (function (){var G__79608 = ctx;
var G__79609 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79608,G__79609) : sci.impl.interpreter.interpret.call(null,G__79608,G__79609));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg79054 = (function (){var G__79612 = ctx;
var G__79613 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79612,G__79613) : sci.impl.interpreter.interpret.call(null,G__79612,G__79613));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg79055 = (function (){var G__79616 = ctx;
var G__79617 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79616,G__79617) : sci.impl.interpreter.interpret.call(null,G__79616,G__79617));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg79056 = (function (){var G__79619 = ctx;
var G__79620 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79619,G__79620) : sci.impl.interpreter.interpret.call(null,G__79619,G__79620));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg79057 = (function (){var G__79621 = ctx;
var G__79622 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79621,G__79622) : sci.impl.interpreter.interpret.call(null,G__79621,G__79622));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg79058 = (function (){var G__79624 = ctx;
var G__79625 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79624,G__79625) : sci.impl.interpreter.interpret.call(null,G__79624,G__79625));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg79059 = (function (){var G__79628 = ctx;
var G__79629 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79628,G__79629) : sci.impl.interpreter.interpret.call(null,G__79628,G__79629));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg79060 = (function (){var G__79630 = ctx;
var G__79631 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79630,G__79631) : sci.impl.interpreter.interpret.call(null,G__79630,G__79631));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg79061 = (function (){var G__79634 = ctx;
var G__79635 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79634,G__79635) : sci.impl.interpreter.interpret.call(null,G__79634,G__79635));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg79062 = (function (){var G__79636 = ctx;
var G__79637 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79636,G__79637) : sci.impl.interpreter.interpret.call(null,G__79636,G__79637));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg79063 = (function (){var G__79638 = ctx;
var G__79639 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79638,G__79639) : sci.impl.interpreter.interpret.call(null,G__79638,G__79639));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg79064 = (function (){var G__79640 = ctx;
var G__79641 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79640,G__79641) : sci.impl.interpreter.interpret.call(null,G__79640,G__79641));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg79065 = (function (){var G__79647 = ctx;
var G__79648 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79647,G__79648) : sci.impl.interpreter.interpret.call(null,G__79647,G__79648));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg79066 = (function (){var G__79650 = ctx;
var G__79651 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79650,G__79651) : sci.impl.interpreter.interpret.call(null,G__79650,G__79651));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg79067 = (function (){var G__79655 = ctx;
var G__79656 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79655,G__79656) : sci.impl.interpreter.interpret.call(null,G__79655,G__79656));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg79068 = (function (){var G__79657 = ctx;
var G__79658 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79657,G__79658) : sci.impl.interpreter.interpret.call(null,G__79657,G__79658));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg79052,arg79053,arg79054,arg79055,arg79056,arg79057,arg79058,arg79059,arg79060,arg79061,arg79062,arg79063,arg79064,arg79065,arg79066,arg79067,arg79068) : f.call(null,arg79052,arg79053,arg79054,arg79055,arg79056,arg79057,arg79058,arg79059,arg79060,arg79061,arg79062,arg79063,arg79064,arg79065,arg79066,arg79067,arg79068));

break;
case (18):
var arg79069 = (function (){var G__79662 = ctx;
var G__79663 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79662,G__79663) : sci.impl.interpreter.interpret.call(null,G__79662,G__79663));
})();
var args__$1 = cljs.core.rest(args);
var arg79070 = (function (){var G__79665 = ctx;
var G__79666 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79665,G__79666) : sci.impl.interpreter.interpret.call(null,G__79665,G__79666));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg79071 = (function (){var G__79667 = ctx;
var G__79668 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79667,G__79668) : sci.impl.interpreter.interpret.call(null,G__79667,G__79668));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg79072 = (function (){var G__79670 = ctx;
var G__79671 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79670,G__79671) : sci.impl.interpreter.interpret.call(null,G__79670,G__79671));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg79073 = (function (){var G__79674 = ctx;
var G__79675 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79674,G__79675) : sci.impl.interpreter.interpret.call(null,G__79674,G__79675));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg79074 = (function (){var G__79678 = ctx;
var G__79679 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79678,G__79679) : sci.impl.interpreter.interpret.call(null,G__79678,G__79679));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg79075 = (function (){var G__79680 = ctx;
var G__79681 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79680,G__79681) : sci.impl.interpreter.interpret.call(null,G__79680,G__79681));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg79076 = (function (){var G__79683 = ctx;
var G__79684 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79683,G__79684) : sci.impl.interpreter.interpret.call(null,G__79683,G__79684));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg79077 = (function (){var G__79685 = ctx;
var G__79686 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79685,G__79686) : sci.impl.interpreter.interpret.call(null,G__79685,G__79686));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg79078 = (function (){var G__79688 = ctx;
var G__79689 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79688,G__79689) : sci.impl.interpreter.interpret.call(null,G__79688,G__79689));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg79079 = (function (){var G__79690 = ctx;
var G__79691 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79690,G__79691) : sci.impl.interpreter.interpret.call(null,G__79690,G__79691));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg79080 = (function (){var G__79695 = ctx;
var G__79696 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79695,G__79696) : sci.impl.interpreter.interpret.call(null,G__79695,G__79696));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg79081 = (function (){var G__79699 = ctx;
var G__79700 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79699,G__79700) : sci.impl.interpreter.interpret.call(null,G__79699,G__79700));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg79082 = (function (){var G__79701 = ctx;
var G__79702 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79701,G__79702) : sci.impl.interpreter.interpret.call(null,G__79701,G__79702));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg79083 = (function (){var G__79703 = ctx;
var G__79704 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79703,G__79704) : sci.impl.interpreter.interpret.call(null,G__79703,G__79704));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg79084 = (function (){var G__79705 = ctx;
var G__79706 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79705,G__79706) : sci.impl.interpreter.interpret.call(null,G__79705,G__79706));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg79085 = (function (){var G__79709 = ctx;
var G__79710 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79709,G__79710) : sci.impl.interpreter.interpret.call(null,G__79709,G__79710));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg79086 = (function (){var G__79712 = ctx;
var G__79713 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79712,G__79713) : sci.impl.interpreter.interpret.call(null,G__79712,G__79713));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg79069,arg79070,arg79071,arg79072,arg79073,arg79074,arg79075,arg79076,arg79077,arg79078,arg79079,arg79080,arg79081,arg79082,arg79083,arg79084,arg79085,arg79086) : f.call(null,arg79069,arg79070,arg79071,arg79072,arg79073,arg79074,arg79075,arg79076,arg79077,arg79078,arg79079,arg79080,arg79081,arg79082,arg79083,arg79084,arg79085,arg79086));

break;
case (19):
var arg79087 = (function (){var G__79717 = ctx;
var G__79718 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79717,G__79718) : sci.impl.interpreter.interpret.call(null,G__79717,G__79718));
})();
var args__$1 = cljs.core.rest(args);
var arg79088 = (function (){var G__79720 = ctx;
var G__79721 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79720,G__79721) : sci.impl.interpreter.interpret.call(null,G__79720,G__79721));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg79089 = (function (){var G__79722 = ctx;
var G__79723 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79722,G__79723) : sci.impl.interpreter.interpret.call(null,G__79722,G__79723));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg79090 = (function (){var G__79725 = ctx;
var G__79726 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79725,G__79726) : sci.impl.interpreter.interpret.call(null,G__79725,G__79726));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg79091 = (function (){var G__79728 = ctx;
var G__79729 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79728,G__79729) : sci.impl.interpreter.interpret.call(null,G__79728,G__79729));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg79092 = (function (){var G__79733 = ctx;
var G__79734 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79733,G__79734) : sci.impl.interpreter.interpret.call(null,G__79733,G__79734));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg79093 = (function (){var G__79735 = ctx;
var G__79736 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79735,G__79736) : sci.impl.interpreter.interpret.call(null,G__79735,G__79736));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg79094 = (function (){var G__79737 = ctx;
var G__79738 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79737,G__79738) : sci.impl.interpreter.interpret.call(null,G__79737,G__79738));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg79095 = (function (){var G__79739 = ctx;
var G__79740 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79739,G__79740) : sci.impl.interpreter.interpret.call(null,G__79739,G__79740));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg79096 = (function (){var G__79742 = ctx;
var G__79743 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79742,G__79743) : sci.impl.interpreter.interpret.call(null,G__79742,G__79743));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg79097 = (function (){var G__79744 = ctx;
var G__79745 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79744,G__79745) : sci.impl.interpreter.interpret.call(null,G__79744,G__79745));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg79098 = (function (){var G__79748 = ctx;
var G__79749 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79748,G__79749) : sci.impl.interpreter.interpret.call(null,G__79748,G__79749));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg79099 = (function (){var G__79752 = ctx;
var G__79753 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79752,G__79753) : sci.impl.interpreter.interpret.call(null,G__79752,G__79753));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg79100 = (function (){var G__79754 = ctx;
var G__79755 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79754,G__79755) : sci.impl.interpreter.interpret.call(null,G__79754,G__79755));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg79101 = (function (){var G__79757 = ctx;
var G__79758 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79757,G__79758) : sci.impl.interpreter.interpret.call(null,G__79757,G__79758));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg79102 = (function (){var G__79759 = ctx;
var G__79760 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79759,G__79760) : sci.impl.interpreter.interpret.call(null,G__79759,G__79760));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg79103 = (function (){var G__79772 = ctx;
var G__79773 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79772,G__79773) : sci.impl.interpreter.interpret.call(null,G__79772,G__79773));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg79104 = (function (){var G__79774 = ctx;
var G__79775 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79774,G__79775) : sci.impl.interpreter.interpret.call(null,G__79774,G__79775));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg79105 = (function (){var G__79778 = ctx;
var G__79779 = cljs.core.first(args__$18);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79778,G__79779) : sci.impl.interpreter.interpret.call(null,G__79778,G__79779));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg79087,arg79088,arg79089,arg79090,arg79091,arg79092,arg79093,arg79094,arg79095,arg79096,arg79097,arg79098,arg79099,arg79100,arg79101,arg79102,arg79103,arg79104,arg79105) : f.call(null,arg79087,arg79088,arg79089,arg79090,arg79091,arg79092,arg79093,arg79094,arg79095,arg79096,arg79097,arg79098,arg79099,arg79100,arg79101,arg79102,arg79103,arg79104,arg79105));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__78189_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__78189_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__78189_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.interpreter.eval_special_call = (function sci$impl$interpreter$eval_special_call(ctx,f_sym,expr){
var G__79800 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__79800)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_instance_method_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__79800)){
return sci.impl.interpreter.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"import","import",241030818,null),G__79800)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_import,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__79800)){
return sci.impl.interpreter.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__79800)){
return sci.impl.interpreter.eval_if(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__79800)){
return sci.impl.interpreter.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),G__79800)){
return sci.impl.interpreter.macroexpand(ctx,(function (){var G__79809 = ctx;
var G__79810 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79809,G__79810) : sci.impl.interpreter.interpret.call(null,G__79809,G__79810));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__79800)){
return sci.impl.interpreter.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__79800)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_let,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__79800)){
return sci.impl.interpreter.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"use","use",-205850897,null),G__79800)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_use,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__79800)){
return sci.impl.interpreter.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__79800)){
return sci.impl.interpreter.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__79800)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__79800)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_constructor_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),G__79800)){
return sci.impl.interpreter.macroexpand_1(ctx,(function (){var G__79819 = ctx;
var G__79820 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79819,G__79820) : sci.impl.interpreter.interpret.call(null,G__79819,G__79820));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__79800)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_refer,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__79800)){
return (new cljs.core.LazySeq(null,(function (){var G__79822 = ctx;
var G__79823 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79822,G__79823) : sci.impl.interpreter.interpret.call(null,G__79822,G__79823));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__79800)){
return sci.impl.interpreter.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__79800)){
return sci.impl.interpreter.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"resolve","resolve",56086045,null),G__79800)){
return sci.impl.interpreter.eval_resolve(ctx,cljs.core.second(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__79800)){
return sci.impl.interpreter.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__79800)].join('')));

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
}
}
}
}
}
}
}
});
sci.impl.interpreter.eval_call = (function sci$impl$interpreter$eval_call(ctx,expr){
try{var f = cljs.core.first(expr);
var m = cljs.core.meta(f);
var op = (cljs.core.truth_(m)?m.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null);
if((((f instanceof cljs.core.Symbol)) && (cljs.core.not(op)))){
return sci.impl.interpreter.eval_special_call(ctx,f,expr);
} else {
if(cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"static-access","static-access",-1860919441)) : sci.impl.utils.kw_identical_QMARK_.call(null,op,new cljs.core.Keyword(null,"static-access","static-access",-1860919441))))){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_static_method_invocation(ctx,expr);
}
} else {
var f__$1 = (cljs.core.truth_(op)?(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,f) : sci.impl.interpreter.interpret.call(null,ctx,f)):f);
if(cljs.core.ifn_QMARK_(f__$1)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.fn_call(ctx,f__$1,cljs.core.rest(expr));
}
} else {
throw (new Error(["Cannot call ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1], 0))," as a function."].join('')));
}

}
}
}catch (e79837){if((e79837 instanceof Error)){
var e = e79837;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e79837;

}
}});
sci.impl.interpreter.fix_meta = (function sci$impl$interpreter$fix_meta(v,old_meta){
if(cljs.core.truth_((((((!((v == null))))?(((((v.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$IWithMeta$))))?true:false):false))?cljs.core.meta(v):false))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(v,(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(old_meta));
}));
} else {
return v;
}
});
sci.impl.interpreter.interpret = (function sci$impl$interpreter$interpret(ctx,expr){
if((expr instanceof sci.impl.types.EvalVar)){
var v = expr.sci$impl$types$IBox$getVal$arity$1(null);
if(cljs.core.not(sci.impl.vars.isMacro(v))){
return cljs.core.deref(v);
} else {
throw (new Error(["Can't take value of a macro: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),""].join('')));
}
} else {
var m = cljs.core.meta(expr);
var op = (cljs.core.truth_(m)?m.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null);
var ret = ((cljs.core.not(op))?expr:(function (){var G__79897 = op;
var G__79897__$1 = (((G__79897 instanceof cljs.core.Keyword))?G__79897.fqn:null);
switch (G__79897__$1) {
case "call":
return sci.impl.interpreter.eval_call(ctx,expr);

break;
case "try":
return sci.impl.interpreter.eval_try(ctx,expr);

break;
case "fn":
return sci.impl.fns.eval_fn(ctx,sci.impl.interpreter.interpret,sci.impl.interpreter.eval_do_STAR_,expr);

break;
case "static-access":
return sci.impl.interop.get_static_field(expr);

break;
case "var-value":
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr,(0));

break;
case "deref!":
var v = cljs.core.first(expr);
var v__$1 = ((sci.impl.vars.var_QMARK_(v))?cljs.core.deref(v):v);
var v__$2 = cljs.core.force(v__$1);
return v__$2;

break;
case "resolve-sym":
return sci.impl.interpreter.resolve_symbol(ctx,expr);

break;
case "needs-ctx":
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expr,ctx);

break;
default:
if(cljs.core.map_QMARK_(expr)){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__79873_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__79873_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__79873_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__79874_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__79874_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__79874_SHARP_));
}),cljs.core.vals(expr)));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__79875_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__79875_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__79875_SHARP_));
}),expr));
} else {
throw (new Error(["unexpected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr),", type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(expr)),", meta:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(expr))].join('')));

}
}

}
})());
var ret__$1 = (cljs.core.truth_(m)?sci.impl.interpreter.fix_meta(ret,m):ret);
var temp__5751__auto__ = ctx.get(new cljs.core.Keyword(null,"realize-max","realize-max",-1846442543));
if(cljs.core.truth_(temp__5751__auto__)){
var n = temp__5751__auto__;
return sci.impl.max_or_throw.max_or_throw(ret__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"expression","expression",202311876),expr),n);
} else {
return ret__$1;
}
}
});
sci.impl.interpreter.do_QMARK_ = (function sci$impl$interpreter$do_QMARK_(expr){
return ((cljs.core.list_QMARK_(expr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.first(expr))));
});
sci.impl.interpreter.eval_form = (function sci$impl$interpreter$eval_form(ctx,form){
if(sci.impl.interpreter.do_QMARK_(form)){
var exprs = cljs.core.rest(form);
var ret = null;
while(true){
if(cljs.core.seq(exprs)){
var G__80516 = cljs.core.rest(exprs);
var G__80517 = (function (){var G__79932 = ctx;
var G__79933 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__79932,G__79933) : sci.impl.interpreter.eval_form.call(null,G__79932,G__79933));
})();
exprs = G__80516;
ret = G__80517;
continue;
} else {
return ret;
}
break;
}
} else {
var analyzed = sci.impl.analyzer.analyze(ctx,form);
var ret = sci.impl.interpreter.interpret(ctx,analyzed);
return ret;
}
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_form_state,sci.impl.interpreter.eval_form);
sci.impl.interpreter.eval_string_STAR_ = (function sci$impl$interpreter$eval_string_STAR_(ctx,s){
sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns)]));

try{var reader = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s));
var ret = null;
while(true){
var expr = sci.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader);
if(cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006),expr) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006),expr)))){
return ret;
} else {
var ret__$1 = sci.impl.interpreter.eval_form(ctx,expr);
var G__80521 = ret__$1;
ret = G__80521;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__79952 = arguments.length;
switch (G__79952) {
case 1:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2(s,null);
}));

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
var init_ctx = sci.impl.opts.init(opts);
var ret = sci.impl.interpreter.eval_string_STAR_(init_ctx,s);
return ret;
}));

(sci.impl.interpreter.eval_string.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=sci.impl.interpreter.js.map
