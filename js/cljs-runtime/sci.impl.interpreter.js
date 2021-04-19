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
var G__79347 = xs;
args__$2 = G__79347;
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
var G__79354 = xs;
args__$2 = G__79354;
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
var len__4736__auto___79357 = arguments.length;
var i__4737__auto___79358 = (0);
while(true){
if((i__4737__auto___79358 < len__4736__auto___79357)){
args__4742__auto__.push((arguments[i__4737__auto___79358]));

var G__79363 = (i__4737__auto___79358 + (1));
i__4737__auto___79358 = G__79363;
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
var G__79371 = ctx__$2;
var G__79372 = rest_let_bindings;
ctx__$1 = G__79371;
let_bindings__$1 = G__79372;
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
var G__79379 = nexprs;
exprs__$1 = G__79379;
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
(sci.impl.interpreter.eval_let.cljs$lang$applyTo = (function (seq77783){
var G__77784 = cljs.core.first(seq77783);
var seq77783__$1 = cljs.core.next(seq77783);
var G__77785 = cljs.core.first(seq77783__$1);
var seq77783__$2 = cljs.core.next(seq77783__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77784,G__77785,seq77783__$2);
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
sci.impl.interpreter.eval_def = (function sci$impl$interpreter$eval_def(ctx,p__77805){
var vec__77806 = p__77805;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77806,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77806,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77806,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77806,(3),null);
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
var v = (cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1)))?(function (){var G__77811 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__77811,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__77811;
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
var vec__77821 = libspec;
var seq__77822 = cljs.core.seq(vec__77821);
var first__77823 = cljs.core.first(seq__77822);
var seq__77822__$1 = cljs.core.next(seq__77822);
var lib_name = first__77823;
var opts = seq__77822__$1;
var ret = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),lib_name], null);
var G__77827 = opts;
var vec__77828 = G__77827;
var seq__77829 = cljs.core.seq(vec__77828);
var first__77830 = cljs.core.first(seq__77829);
var seq__77829__$1 = cljs.core.next(seq__77829);
var opt_name = first__77830;
var first__77830__$1 = cljs.core.first(seq__77829__$1);
var seq__77829__$2 = cljs.core.next(seq__77829__$1);
var fst_opt = first__77830__$1;
var rst_opts = seq__77829__$2;
var ret__$1 = ret;
var G__77827__$1 = G__77827;
while(true){
var ret__$2 = ret__$1;
var vec__77838 = G__77827__$1;
var seq__77839 = cljs.core.seq(vec__77838);
var first__77840 = cljs.core.first(seq__77839);
var seq__77839__$1 = cljs.core.next(seq__77839);
var opt_name__$1 = first__77840;
var first__77840__$1 = cljs.core.first(seq__77839__$1);
var seq__77839__$2 = cljs.core.next(seq__77839__$1);
var fst_opt__$1 = first__77840__$1;
var rst_opts__$1 = seq__77839__$2;
if(cljs.core.not(opt_name__$1)){
return ret__$2;
} else {
var G__77841 = opt_name__$1;
var G__77841__$1 = (((G__77841 instanceof cljs.core.Keyword))?G__77841.fqn:null);
switch (G__77841__$1) {
case "as":
var G__79404 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"as","as",1148689641),fst_opt__$1);
var G__79405 = rst_opts__$1;
ret__$1 = G__79404;
G__77827__$1 = G__79405;
continue;

break;
case "reload":
case "reload-all":
case "verbose":
var G__79408 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"reload","reload",863702807),true);
var G__79409 = cljs.core.cons(fst_opt__$1,rst_opts__$1);
ret__$1 = G__79408;
G__77827__$1 = G__79409;
continue;

break;
case "refer":
case "rename":
case "exclude":
case "only":
var G__79412 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,opt_name__$1,fst_opt__$1);
var G__79413 = rst_opts__$1;
ret__$1 = G__79412;
G__77827__$1 = G__79413;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77841__$1)].join('')));

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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__77848){
var vec__77849 = p__77848;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77849,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77849,(1),null);
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
sci.impl.interpreter.handle_require_libspec_env = (function sci$impl$interpreter$handle_require_libspec_env(env,use_QMARK_,current_ns,the_loaded_ns,lib_name,p__77863){
var map__77864 = p__77863;
var map__77864__$1 = (((((!((map__77864 == null))))?(((((map__77864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77864):map__77864);
var _parsed_libspec = map__77864__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77864__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77864__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77864__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77864__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77864__$1,new cljs.core.Keyword(null,"only","only",1907811652));
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
var vec__77871 = temp__5751__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77871,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77871,(1),null);
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
var map__77881 = sci.impl.interpreter.parse_libspec(libspec);
var map__77881__$1 = (((((!((map__77881 == null))))?(((((map__77881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77881):map__77881);
var parsed_libspec = map__77881__$1;
var lib_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77881__$1,new cljs.core.Keyword(null,"lib-name","lib-name",1158024282));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77881__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
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
var temp__5751__auto____$2 = (function (){var G__77888 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib_name], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__77888) : load_fn.call(null,G__77888));
})();
if(cljs.core.truth_(temp__5751__auto____$2)){
var map__77889 = temp__5751__auto____$2;
var map__77889__$1 = (((((!((map__77889 == null))))?(((((map__77889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77889):map__77889);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77889__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77889__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__77894_79455 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY);
var G__77895_79456 = source;
(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(G__77894_79455,G__77895_79456) : sci.impl.interpreter.eval_string_STAR_.call(null,G__77894_79455,G__77895_79456));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e77892){if((e77892 instanceof Error)){
var e_79458 = e77892;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib_name], 0));

throw e_79458;
} else {
throw e77892;

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
var len__4736__auto___79464 = arguments.length;
var i__4737__auto___79465 = (0);
while(true){
if((i__4737__auto___79465 < len__4736__auto___79464)){
args__4742__auto__.push((arguments[i__4737__auto___79465]));

var G__79466 = (i__4737__auto___79465 + (1));
i__4737__auto___79465 = G__79466;
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
var ret = (function (){var G__77924 = ctx;
var G__77925 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__77924,G__77925) : sci.impl.interpreter.interpret.call(null,G__77924,G__77925));
})();
if((ret instanceof cljs.core.Symbol)){
var G__79471 = (function (){var G__77926 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__77926,current_libspec);
} else {
return G__77926;
}
})();
var G__79472 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
var G__79473 = cljs.core.next(args__$1);
libspecs = G__79471;
current_libspec = G__79472;
args__$1 = G__79473;
continue;
} else {
if((ret instanceof cljs.core.Keyword)){
var G__79475 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_libspec,ret));
var G__79476 = null;
var G__79477 = cljs.core.next(args__$1);
libspecs = G__79475;
current_libspec = G__79476;
args__$1 = G__79477;
continue;
} else {
var G__79478 = (function (){var G__77927 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__77927,current_libspec);
} else {
return G__77927;
}
})();
var G__79479 = ret;
var G__79480 = cljs.core.next(args__$1);
libspecs = G__79478;
current_libspec = G__79479;
args__$1 = G__79480;
continue;

}
}
} else {
var libspecs__$1 = (function (){var G__77928 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__77928,current_libspec);
} else {
return G__77928;
}
})();
return cljs.core.run_BANG_(((function (libspecs,current_libspec,args__$1,libspecs__$1){
return (function (p1__77903_SHARP_){
return sci.impl.interpreter.handle_require_libspec(ctx,p1__77903_SHARP_);
});})(libspecs,current_libspec,args__$1,libspecs__$1))
,libspecs__$1);
}
break;
}
}));

(sci.impl.interpreter.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_require.cljs$lang$applyTo = (function (seq77904){
var G__77905 = cljs.core.first(seq77904);
var seq77904__$1 = cljs.core.next(seq77904);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77905,seq77904__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.interpreter.eval_require);
sci.impl.interpreter.eval_use = (function sci$impl$interpreter$eval_use(var_args){
var args__4742__auto__ = [];
var len__4736__auto___79491 = arguments.length;
var i__4737__auto___79492 = (0);
while(true){
if((i__4737__auto___79492 < len__4736__auto___79491)){
args__4742__auto__.push((arguments[i__4737__auto___79492]));

var G__79493 = (i__4737__auto___79492 + (1));
i__4737__auto___79492 = G__79493;
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
(sci.impl.interpreter.eval_use.cljs$lang$applyTo = (function (seq77930){
var G__77931 = cljs.core.first(seq77930);
var seq77930__$1 = cljs.core.next(seq77930);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77931,seq77930__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.interpreter.eval_use);
sci.impl.interpreter.eval_case = (function sci$impl$interpreter$eval_case(ctx,p__77937){
var vec__77939 = p__77937;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77939,(0),null);
var map__77942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77939,(1),null);
var map__77942__$1 = (((((!((map__77942 == null))))?(((((map__77942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77942):map__77942);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77942__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77942__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77942__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.interpreter.interpret.call(null,ctx,case_val));
var temp__5751__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__77944 = temp__5751__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77944,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77944,(1),null);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.interpreter.interpret.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__77948 = ctx;
var G__77949 = cljs.core.second(case_default);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__77948,G__77949) : sci.impl.interpreter.interpret.call(null,G__77948,G__77949));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.interpreter.eval_try = (function sci$impl$interpreter$eval_try(ctx,expr){
var map__77955 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__77955__$1 = (((((!((map__77955 == null))))?(((((map__77955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77955):map__77955);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77955__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77955__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77955__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var _STAR_in_try_STAR__orig_val__77973 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__77974 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__77974);

try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.interpreter.interpret.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__77973);
}}catch (e77958){if((e77958 instanceof Error)){
var e = e77958;
var temp__5751__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.interpreter","try-result","sci.impl.interpreter/try-result",1789456125),(function (){var G__77965 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__77966 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__77965,G__77966) : sci.impl.interpreter.interpret.call(null,G__77965,G__77966));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__77970 = temp__5751__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77970,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77970,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e77958;

}
}finally {(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.interpreter.interpret.call(null,ctx,finally$));
}});
sci.impl.interpreter.eval_throw = (function sci$impl$interpreter$eval_throw(ctx,p__77979){
var vec__77981 = p__77979;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77981,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77981,(1),null);
var ex__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.interpret.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.interpreter.eval_static_method_invocation = (function sci$impl$interpreter$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__77986_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__77986_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__77986_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.interpreter.eval_constructor_invocation = (function sci$impl$interpreter$eval_constructor_invocation(ctx,p__77990){
var vec__77991 = p__77990;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77991,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77991,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77991,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__77988_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__77988_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__77988_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.interpreter.eval_instance_method_invocation = (function sci$impl$interpreter$eval_instance_method_invocation(p__78012,p__78013){
var map__78017 = p__78012;
var map__78017__$1 = (((((!((map__78017 == null))))?(((((map__78017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78017):map__78017);
var ctx = map__78017__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78017__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__78018 = p__78013;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78018,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78018,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78018,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78018,(3),null);
var _expr = vec__78018;
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

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__78002_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__78002_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__78002_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
}
});
sci.impl.interpreter.eval_in_ns = (function sci$impl$interpreter$eval_in_ns(ctx,p__78043){
var vec__78047 = p__78043;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78047,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78047,(1),null);
var ns_sym = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.interpreter.interpret.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.interpreter.eval_refer = (function sci$impl$interpreter$eval_refer(var_args){
var args__4742__auto__ = [];
var len__4736__auto___79560 = arguments.length;
var i__4737__auto___79562 = (0);
while(true){
if((i__4737__auto___79562 < len__4736__auto___79560)){
args__4742__auto__.push((arguments[i__4737__auto___79562]));

var G__79563 = (i__4737__auto___79562 + (1));
i__4737__auto___79562 = G__79563;
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
var vec__78066 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78066,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78066,(1),null);
var G__78072_79571 = k;
var G__78072_79572__$1 = (((G__78072_79571 instanceof cljs.core.Keyword))?G__78072_79571.fqn:null);
switch (G__78072_79572__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__78072_79571,G__78072_79572__$1,vec__78066,k,v,ns_sym__$1){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__78072_79571,G__78072_79572__$1,vec__78066,k,v,ns_sym__$1))
);

break;
case "only":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__78072_79571,G__78072_79572__$1,vec__78066,k,v,ns_sym__$1){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym__$1], null));
var other_vars = cljs.core.select_keys(other_ns,v);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),cljs.core.merge,other_vars);
});})(exprs__$1,G__78072_79571,G__78072_79572__$1,vec__78066,k,v,ns_sym__$1))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__78072_79572__$1)].join('')));

}

var G__79583 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__79583;
continue;
} else {
return null;
}
break;
}
}));

(sci.impl.interpreter.eval_refer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.interpreter.eval_refer.cljs$lang$applyTo = (function (seq78055){
var G__78056 = cljs.core.first(seq78055);
var seq78055__$1 = cljs.core.next(seq78055);
var G__78057 = cljs.core.first(seq78055__$1);
var seq78055__$2 = cljs.core.next(seq78055__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78056,G__78057,seq78055__$2);
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
var f__$2 = (cljs.core.truth_((function (){var G__78110 = new cljs.core.Keyword(null,"needs-ctx","needs-ctx",-35514403);
var G__78111 = (function (){var G__78114 = f__$1;
var G__78114__$1 = (((G__78114 == null))?null:cljs.core.meta(G__78114));
if((G__78114__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(G__78114__$1);
}
})();
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__78110,G__78111) : sci.impl.utils.kw_identical_QMARK_.call(null,G__78110,G__78111));
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
var len__4736__auto___79604 = arguments.length;
var i__4737__auto___79605 = (0);
while(true){
if((i__4737__auto___79605 < len__4736__auto___79604)){
args__4742__auto__.push((arguments[i__4737__auto___79605]));

var G__79609 = (i__4737__auto___79605 + (1));
i__4737__auto___79605 = G__79609;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sci.impl.interpreter.eval_import.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,import_symbols_or_lists){
var specs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__78126_SHARP_){
if(((cljs.core.seq_QMARK_(p1__78126_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(p1__78126_SHARP_))))){
return cljs.core.second(p1__78126_SHARP_);
} else {
return p1__78126_SHARP_;
}
}),import_symbols_or_lists);
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.core.run_BANG_((function (spec){
var vec__78142 = (((spec instanceof cljs.core.Symbol))?(function (){var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec);
var last_dot = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(s,".");
var package_PLUS_class_name = (cljs.core.truth_(last_dot)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),last_dot)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(last_dot + (1)),((s).length)))], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null)], null));
return package_PLUS_class_name;
})():(function (){var p = cljs.core.first(spec);
var cs = cljs.core.rest(spec);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cs], null);
})());
var package$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78142,(0),null);
var classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78142,(1),null);
var seq__78152 = cljs.core.seq(classes);
var chunk__78153 = null;
var count__78154 = (0);
var i__78155 = (0);
while(true){
if((i__78155 < count__78154)){
var class$ = chunk__78153.cljs$core$IIndexed$_nth$arity$2(null,i__78155);
var fq_class_name_79617 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(package$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):class$));
if(cljs.core.truth_(sci.impl.interop.resolve_class(ctx,fq_class_name_79617))){
var cnn_79620 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_79620,new cljs.core.Keyword(null,"imports","imports",-1249933394),class$], null),fq_class_name_79617);
} else {
var temp__5751__auto___79623 = sci.impl.records.resolve_record_class.cljs$core$IFn$_invoke$arity$3(ctx,package$,class$);
if(cljs.core.truth_(temp__5751__auto___79623)){
var rec_79624 = temp__5751__auto___79623;
var cnn_79625 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_79625,class$], null),rec_79624);
} else {
throw (new Error(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fq_class_name_79617)].join('')));
}
}


var G__79627 = seq__78152;
var G__79628 = chunk__78153;
var G__79629 = count__78154;
var G__79630 = (i__78155 + (1));
seq__78152 = G__79627;
chunk__78153 = G__79628;
count__78154 = G__79629;
i__78155 = G__79630;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__78152);
if(temp__5753__auto__){
var seq__78152__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__78152__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__78152__$1);
var G__79634 = cljs.core.chunk_rest(seq__78152__$1);
var G__79635 = c__4556__auto__;
var G__79636 = cljs.core.count(c__4556__auto__);
var G__79637 = (0);
seq__78152 = G__79634;
chunk__78153 = G__79635;
count__78154 = G__79636;
i__78155 = G__79637;
continue;
} else {
var class$ = cljs.core.first(seq__78152__$1);
var fq_class_name_79642 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(package$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):class$));
if(cljs.core.truth_(sci.impl.interop.resolve_class(ctx,fq_class_name_79642))){
var cnn_79644 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_79644,new cljs.core.Keyword(null,"imports","imports",-1249933394),class$], null),fq_class_name_79642);
} else {
var temp__5751__auto___79646 = sci.impl.records.resolve_record_class.cljs$core$IFn$_invoke$arity$3(ctx,package$,class$);
if(cljs.core.truth_(temp__5751__auto___79646)){
var rec_79649 = temp__5751__auto___79646;
var cnn_79650 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_79650,class$], null),rec_79649);
} else {
throw (new Error(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fq_class_name_79642)].join('')));
}
}


var G__79653 = cljs.core.next(seq__78152__$1);
var G__79654 = null;
var G__79655 = (0);
var G__79656 = (0);
seq__78152 = G__79653;
chunk__78153 = G__79654;
count__78154 = G__79655;
i__78155 = G__79656;
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
(sci.impl.interpreter.eval_import.cljs$lang$applyTo = (function (seq78128){
var G__78129 = cljs.core.first(seq78128);
var seq78128__$1 = cljs.core.next(seq78128);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78129,seq78128__$1);
}));

sci.impl.interpreter.eval_set_BANG_ = (function sci$impl$interpreter$eval_set_BANG_(ctx,p__78205){
var vec__78207 = p__78205;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78207,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78207,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78207,(2),null);
var obj__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.interpreter.interpret.call(null,ctx,obj));
var v__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.interpreter.interpret.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}
});
sci.impl.interpreter.eval_do_STAR_ = (function sci$impl$interpreter$eval_do_STAR_(ctx,exprs){
var G__78219 = exprs;
var vec__78221 = G__78219;
var seq__78222 = cljs.core.seq(vec__78221);
var first__78223 = cljs.core.first(seq__78222);
var seq__78222__$1 = cljs.core.next(seq__78222);
var expr = first__78223;
var exprs__$1 = seq__78222__$1;
var G__78219__$1 = G__78219;
while(true){
var vec__78226 = G__78219__$1;
var seq__78227 = cljs.core.seq(vec__78226);
var first__78228 = cljs.core.first(seq__78227);
var seq__78227__$1 = cljs.core.next(seq__78227);
var expr__$1 = first__78228;
var exprs__$2 = seq__78227__$1;
var ret = (function (){try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.interpreter.interpret.call(null,ctx,expr__$1));
}catch (e78231){if((e78231 instanceof Error)){
var e = e78231;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr__$1);
} else {
throw e78231;

}
}})();
var temp__5751__auto__ = cljs.core.seq(exprs__$2);
if(temp__5751__auto__){
var exprs__$3 = temp__5751__auto__;
var G__79680 = exprs__$3;
G__78219__$1 = G__79680;
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
var G__78441 = cljs.core.count(args);
switch (G__78441) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg78248 = (function (){var G__78444 = ctx;
var G__78445 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78444,G__78445) : sci.impl.interpreter.interpret.call(null,G__78444,G__78445));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg78248) : f.call(null,arg78248));

break;
case (2):
var arg78249 = (function (){var G__78446 = ctx;
var G__78447 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78446,G__78447) : sci.impl.interpreter.interpret.call(null,G__78446,G__78447));
})();
var args__$1 = cljs.core.rest(args);
var arg78250 = (function (){var G__78448 = ctx;
var G__78449 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78448,G__78449) : sci.impl.interpreter.interpret.call(null,G__78448,G__78449));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg78249,arg78250) : f.call(null,arg78249,arg78250));

break;
case (3):
var arg78251 = (function (){var G__78451 = ctx;
var G__78452 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78451,G__78452) : sci.impl.interpreter.interpret.call(null,G__78451,G__78452));
})();
var args__$1 = cljs.core.rest(args);
var arg78252 = (function (){var G__78455 = ctx;
var G__78456 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78455,G__78456) : sci.impl.interpreter.interpret.call(null,G__78455,G__78456));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78253 = (function (){var G__78463 = ctx;
var G__78464 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78463,G__78464) : sci.impl.interpreter.interpret.call(null,G__78463,G__78464));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg78251,arg78252,arg78253) : f.call(null,arg78251,arg78252,arg78253));

break;
case (4):
var arg78254 = (function (){var G__78466 = ctx;
var G__78467 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78466,G__78467) : sci.impl.interpreter.interpret.call(null,G__78466,G__78467));
})();
var args__$1 = cljs.core.rest(args);
var arg78255 = (function (){var G__78470 = ctx;
var G__78471 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78470,G__78471) : sci.impl.interpreter.interpret.call(null,G__78470,G__78471));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78256 = (function (){var G__78474 = ctx;
var G__78475 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78474,G__78475) : sci.impl.interpreter.interpret.call(null,G__78474,G__78475));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78257 = (function (){var G__78476 = ctx;
var G__78477 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78476,G__78477) : sci.impl.interpreter.interpret.call(null,G__78476,G__78477));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg78254,arg78255,arg78256,arg78257) : f.call(null,arg78254,arg78255,arg78256,arg78257));

break;
case (5):
var arg78258 = (function (){var G__78480 = ctx;
var G__78481 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78480,G__78481) : sci.impl.interpreter.interpret.call(null,G__78480,G__78481));
})();
var args__$1 = cljs.core.rest(args);
var arg78259 = (function (){var G__78484 = ctx;
var G__78485 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78484,G__78485) : sci.impl.interpreter.interpret.call(null,G__78484,G__78485));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78260 = (function (){var G__78488 = ctx;
var G__78489 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78488,G__78489) : sci.impl.interpreter.interpret.call(null,G__78488,G__78489));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78261 = (function (){var G__78490 = ctx;
var G__78491 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78490,G__78491) : sci.impl.interpreter.interpret.call(null,G__78490,G__78491));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78262 = (function (){var G__78493 = ctx;
var G__78494 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78493,G__78494) : sci.impl.interpreter.interpret.call(null,G__78493,G__78494));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg78258,arg78259,arg78260,arg78261,arg78262) : f.call(null,arg78258,arg78259,arg78260,arg78261,arg78262));

break;
case (6):
var arg78263 = (function (){var G__78500 = ctx;
var G__78501 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78500,G__78501) : sci.impl.interpreter.interpret.call(null,G__78500,G__78501));
})();
var args__$1 = cljs.core.rest(args);
var arg78264 = (function (){var G__78502 = ctx;
var G__78503 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78502,G__78503) : sci.impl.interpreter.interpret.call(null,G__78502,G__78503));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78265 = (function (){var G__78507 = ctx;
var G__78508 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78507,G__78508) : sci.impl.interpreter.interpret.call(null,G__78507,G__78508));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78266 = (function (){var G__78509 = ctx;
var G__78510 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78509,G__78510) : sci.impl.interpreter.interpret.call(null,G__78509,G__78510));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78267 = (function (){var G__78512 = ctx;
var G__78513 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78512,G__78513) : sci.impl.interpreter.interpret.call(null,G__78512,G__78513));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78268 = (function (){var G__78514 = ctx;
var G__78515 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78514,G__78515) : sci.impl.interpreter.interpret.call(null,G__78514,G__78515));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg78263,arg78264,arg78265,arg78266,arg78267,arg78268) : f.call(null,arg78263,arg78264,arg78265,arg78266,arg78267,arg78268));

break;
case (7):
var arg78269 = (function (){var G__78520 = ctx;
var G__78521 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78520,G__78521) : sci.impl.interpreter.interpret.call(null,G__78520,G__78521));
})();
var args__$1 = cljs.core.rest(args);
var arg78270 = (function (){var G__78523 = ctx;
var G__78524 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78523,G__78524) : sci.impl.interpreter.interpret.call(null,G__78523,G__78524));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78271 = (function (){var G__78526 = ctx;
var G__78527 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78526,G__78527) : sci.impl.interpreter.interpret.call(null,G__78526,G__78527));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78272 = (function (){var G__78530 = ctx;
var G__78531 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78530,G__78531) : sci.impl.interpreter.interpret.call(null,G__78530,G__78531));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78273 = (function (){var G__78535 = ctx;
var G__78536 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78535,G__78536) : sci.impl.interpreter.interpret.call(null,G__78535,G__78536));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78274 = (function (){var G__78537 = ctx;
var G__78538 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78537,G__78538) : sci.impl.interpreter.interpret.call(null,G__78537,G__78538));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78275 = (function (){var G__78540 = ctx;
var G__78541 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78540,G__78541) : sci.impl.interpreter.interpret.call(null,G__78540,G__78541));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg78269,arg78270,arg78271,arg78272,arg78273,arg78274,arg78275) : f.call(null,arg78269,arg78270,arg78271,arg78272,arg78273,arg78274,arg78275));

break;
case (8):
var arg78276 = (function (){var G__78546 = ctx;
var G__78547 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78546,G__78547) : sci.impl.interpreter.interpret.call(null,G__78546,G__78547));
})();
var args__$1 = cljs.core.rest(args);
var arg78277 = (function (){var G__78550 = ctx;
var G__78551 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78550,G__78551) : sci.impl.interpreter.interpret.call(null,G__78550,G__78551));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78278 = (function (){var G__78552 = ctx;
var G__78553 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78552,G__78553) : sci.impl.interpreter.interpret.call(null,G__78552,G__78553));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78279 = (function (){var G__78555 = ctx;
var G__78556 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78555,G__78556) : sci.impl.interpreter.interpret.call(null,G__78555,G__78556));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78280 = (function (){var G__78557 = ctx;
var G__78558 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78557,G__78558) : sci.impl.interpreter.interpret.call(null,G__78557,G__78558));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78281 = (function (){var G__78559 = ctx;
var G__78560 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78559,G__78560) : sci.impl.interpreter.interpret.call(null,G__78559,G__78560));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78282 = (function (){var G__78562 = ctx;
var G__78563 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78562,G__78563) : sci.impl.interpreter.interpret.call(null,G__78562,G__78563));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg78283 = (function (){var G__78565 = ctx;
var G__78566 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78565,G__78566) : sci.impl.interpreter.interpret.call(null,G__78565,G__78566));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg78276,arg78277,arg78278,arg78279,arg78280,arg78281,arg78282,arg78283) : f.call(null,arg78276,arg78277,arg78278,arg78279,arg78280,arg78281,arg78282,arg78283));

break;
case (9):
var arg78284 = (function (){var G__78569 = ctx;
var G__78570 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78569,G__78570) : sci.impl.interpreter.interpret.call(null,G__78569,G__78570));
})();
var args__$1 = cljs.core.rest(args);
var arg78285 = (function (){var G__78571 = ctx;
var G__78572 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78571,G__78572) : sci.impl.interpreter.interpret.call(null,G__78571,G__78572));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78286 = (function (){var G__78574 = ctx;
var G__78575 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78574,G__78575) : sci.impl.interpreter.interpret.call(null,G__78574,G__78575));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78287 = (function (){var G__78576 = ctx;
var G__78577 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78576,G__78577) : sci.impl.interpreter.interpret.call(null,G__78576,G__78577));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78288 = (function (){var G__78580 = ctx;
var G__78581 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78580,G__78581) : sci.impl.interpreter.interpret.call(null,G__78580,G__78581));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78289 = (function (){var G__78584 = ctx;
var G__78585 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78584,G__78585) : sci.impl.interpreter.interpret.call(null,G__78584,G__78585));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78290 = (function (){var G__78589 = ctx;
var G__78590 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78589,G__78590) : sci.impl.interpreter.interpret.call(null,G__78589,G__78590));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg78291 = (function (){var G__78592 = ctx;
var G__78593 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78592,G__78593) : sci.impl.interpreter.interpret.call(null,G__78592,G__78593));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg78292 = (function (){var G__78594 = ctx;
var G__78595 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78594,G__78595) : sci.impl.interpreter.interpret.call(null,G__78594,G__78595));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg78284,arg78285,arg78286,arg78287,arg78288,arg78289,arg78290,arg78291,arg78292) : f.call(null,arg78284,arg78285,arg78286,arg78287,arg78288,arg78289,arg78290,arg78291,arg78292));

break;
case (10):
var arg78293 = (function (){var G__78597 = ctx;
var G__78598 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78597,G__78598) : sci.impl.interpreter.interpret.call(null,G__78597,G__78598));
})();
var args__$1 = cljs.core.rest(args);
var arg78294 = (function (){var G__78602 = ctx;
var G__78603 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78602,G__78603) : sci.impl.interpreter.interpret.call(null,G__78602,G__78603));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78295 = (function (){var G__78606 = ctx;
var G__78607 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78606,G__78607) : sci.impl.interpreter.interpret.call(null,G__78606,G__78607));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78296 = (function (){var G__78608 = ctx;
var G__78609 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78608,G__78609) : sci.impl.interpreter.interpret.call(null,G__78608,G__78609));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78297 = (function (){var G__78611 = ctx;
var G__78612 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78611,G__78612) : sci.impl.interpreter.interpret.call(null,G__78611,G__78612));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78298 = (function (){var G__78614 = ctx;
var G__78615 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78614,G__78615) : sci.impl.interpreter.interpret.call(null,G__78614,G__78615));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78299 = (function (){var G__78617 = ctx;
var G__78618 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78617,G__78618) : sci.impl.interpreter.interpret.call(null,G__78617,G__78618));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg78300 = (function (){var G__78622 = ctx;
var G__78623 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78622,G__78623) : sci.impl.interpreter.interpret.call(null,G__78622,G__78623));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg78301 = (function (){var G__78624 = ctx;
var G__78625 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78624,G__78625) : sci.impl.interpreter.interpret.call(null,G__78624,G__78625));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg78302 = (function (){var G__78627 = ctx;
var G__78628 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78627,G__78628) : sci.impl.interpreter.interpret.call(null,G__78627,G__78628));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg78293,arg78294,arg78295,arg78296,arg78297,arg78298,arg78299,arg78300,arg78301,arg78302) : f.call(null,arg78293,arg78294,arg78295,arg78296,arg78297,arg78298,arg78299,arg78300,arg78301,arg78302));

break;
case (11):
var arg78303 = (function (){var G__78633 = ctx;
var G__78634 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78633,G__78634) : sci.impl.interpreter.interpret.call(null,G__78633,G__78634));
})();
var args__$1 = cljs.core.rest(args);
var arg78304 = (function (){var G__78636 = ctx;
var G__78637 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78636,G__78637) : sci.impl.interpreter.interpret.call(null,G__78636,G__78637));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78305 = (function (){var G__78640 = ctx;
var G__78641 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78640,G__78641) : sci.impl.interpreter.interpret.call(null,G__78640,G__78641));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78306 = (function (){var G__78644 = ctx;
var G__78645 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78644,G__78645) : sci.impl.interpreter.interpret.call(null,G__78644,G__78645));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78307 = (function (){var G__78647 = ctx;
var G__78648 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78647,G__78648) : sci.impl.interpreter.interpret.call(null,G__78647,G__78648));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78308 = (function (){var G__78650 = ctx;
var G__78651 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78650,G__78651) : sci.impl.interpreter.interpret.call(null,G__78650,G__78651));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78309 = (function (){var G__78654 = ctx;
var G__78655 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78654,G__78655) : sci.impl.interpreter.interpret.call(null,G__78654,G__78655));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg78310 = (function (){var G__78658 = ctx;
var G__78659 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78658,G__78659) : sci.impl.interpreter.interpret.call(null,G__78658,G__78659));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg78311 = (function (){var G__78663 = ctx;
var G__78664 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78663,G__78664) : sci.impl.interpreter.interpret.call(null,G__78663,G__78664));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg78312 = (function (){var G__78666 = ctx;
var G__78667 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78666,G__78667) : sci.impl.interpreter.interpret.call(null,G__78666,G__78667));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg78313 = (function (){var G__78669 = ctx;
var G__78671 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78669,G__78671) : sci.impl.interpreter.interpret.call(null,G__78669,G__78671));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg78303,arg78304,arg78305,arg78306,arg78307,arg78308,arg78309,arg78310,arg78311,arg78312,arg78313) : f.call(null,arg78303,arg78304,arg78305,arg78306,arg78307,arg78308,arg78309,arg78310,arg78311,arg78312,arg78313));

break;
case (12):
var arg78314 = (function (){var G__78680 = ctx;
var G__78681 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78680,G__78681) : sci.impl.interpreter.interpret.call(null,G__78680,G__78681));
})();
var args__$1 = cljs.core.rest(args);
var arg78315 = (function (){var G__78684 = ctx;
var G__78685 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78684,G__78685) : sci.impl.interpreter.interpret.call(null,G__78684,G__78685));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78316 = (function (){var G__78688 = ctx;
var G__78689 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78688,G__78689) : sci.impl.interpreter.interpret.call(null,G__78688,G__78689));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78317 = (function (){var G__78690 = ctx;
var G__78691 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78690,G__78691) : sci.impl.interpreter.interpret.call(null,G__78690,G__78691));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78318 = (function (){var G__78693 = ctx;
var G__78694 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78693,G__78694) : sci.impl.interpreter.interpret.call(null,G__78693,G__78694));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78319 = (function (){var G__78699 = ctx;
var G__78700 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78699,G__78700) : sci.impl.interpreter.interpret.call(null,G__78699,G__78700));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78320 = (function (){var G__78707 = ctx;
var G__78708 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78707,G__78708) : sci.impl.interpreter.interpret.call(null,G__78707,G__78708));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg78321 = (function (){var G__78711 = ctx;
var G__78712 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78711,G__78712) : sci.impl.interpreter.interpret.call(null,G__78711,G__78712));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg78322 = (function (){var G__78714 = ctx;
var G__78715 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78714,G__78715) : sci.impl.interpreter.interpret.call(null,G__78714,G__78715));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg78323 = (function (){var G__78718 = ctx;
var G__78719 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78718,G__78719) : sci.impl.interpreter.interpret.call(null,G__78718,G__78719));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg78324 = (function (){var G__78722 = ctx;
var G__78723 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78722,G__78723) : sci.impl.interpreter.interpret.call(null,G__78722,G__78723));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg78325 = (function (){var G__78726 = ctx;
var G__78727 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78726,G__78727) : sci.impl.interpreter.interpret.call(null,G__78726,G__78727));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg78314,arg78315,arg78316,arg78317,arg78318,arg78319,arg78320,arg78321,arg78322,arg78323,arg78324,arg78325) : f.call(null,arg78314,arg78315,arg78316,arg78317,arg78318,arg78319,arg78320,arg78321,arg78322,arg78323,arg78324,arg78325));

break;
case (13):
var arg78326 = (function (){var G__78737 = ctx;
var G__78738 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78737,G__78738) : sci.impl.interpreter.interpret.call(null,G__78737,G__78738));
})();
var args__$1 = cljs.core.rest(args);
var arg78327 = (function (){var G__78739 = ctx;
var G__78740 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78739,G__78740) : sci.impl.interpreter.interpret.call(null,G__78739,G__78740));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78328 = (function (){var G__78742 = ctx;
var G__78743 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78742,G__78743) : sci.impl.interpreter.interpret.call(null,G__78742,G__78743));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78329 = (function (){var G__78750 = ctx;
var G__78751 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78750,G__78751) : sci.impl.interpreter.interpret.call(null,G__78750,G__78751));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78330 = (function (){var G__78755 = ctx;
var G__78756 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78755,G__78756) : sci.impl.interpreter.interpret.call(null,G__78755,G__78756));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78331 = (function (){var G__78758 = ctx;
var G__78759 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78758,G__78759) : sci.impl.interpreter.interpret.call(null,G__78758,G__78759));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78332 = (function (){var G__78760 = ctx;
var G__78761 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78760,G__78761) : sci.impl.interpreter.interpret.call(null,G__78760,G__78761));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg78333 = (function (){var G__78766 = ctx;
var G__78767 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78766,G__78767) : sci.impl.interpreter.interpret.call(null,G__78766,G__78767));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg78334 = (function (){var G__78770 = ctx;
var G__78771 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78770,G__78771) : sci.impl.interpreter.interpret.call(null,G__78770,G__78771));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg78335 = (function (){var G__78774 = ctx;
var G__78775 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78774,G__78775) : sci.impl.interpreter.interpret.call(null,G__78774,G__78775));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg78336 = (function (){var G__78778 = ctx;
var G__78779 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78778,G__78779) : sci.impl.interpreter.interpret.call(null,G__78778,G__78779));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg78337 = (function (){var G__78782 = ctx;
var G__78783 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78782,G__78783) : sci.impl.interpreter.interpret.call(null,G__78782,G__78783));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg78338 = (function (){var G__78784 = ctx;
var G__78786 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78784,G__78786) : sci.impl.interpreter.interpret.call(null,G__78784,G__78786));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg78326,arg78327,arg78328,arg78329,arg78330,arg78331,arg78332,arg78333,arg78334,arg78335,arg78336,arg78337,arg78338) : f.call(null,arg78326,arg78327,arg78328,arg78329,arg78330,arg78331,arg78332,arg78333,arg78334,arg78335,arg78336,arg78337,arg78338));

break;
case (14):
var arg78339 = (function (){var G__78792 = ctx;
var G__78793 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78792,G__78793) : sci.impl.interpreter.interpret.call(null,G__78792,G__78793));
})();
var args__$1 = cljs.core.rest(args);
var arg78340 = (function (){var G__78795 = ctx;
var G__78796 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78795,G__78796) : sci.impl.interpreter.interpret.call(null,G__78795,G__78796));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78341 = (function (){var G__78799 = ctx;
var G__78800 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78799,G__78800) : sci.impl.interpreter.interpret.call(null,G__78799,G__78800));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78342 = (function (){var G__78804 = ctx;
var G__78805 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78804,G__78805) : sci.impl.interpreter.interpret.call(null,G__78804,G__78805));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78343 = (function (){var G__78808 = ctx;
var G__78809 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78808,G__78809) : sci.impl.interpreter.interpret.call(null,G__78808,G__78809));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78344 = (function (){var G__78811 = ctx;
var G__78812 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78811,G__78812) : sci.impl.interpreter.interpret.call(null,G__78811,G__78812));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78345 = (function (){var G__78815 = ctx;
var G__78816 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78815,G__78816) : sci.impl.interpreter.interpret.call(null,G__78815,G__78816));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg78346 = (function (){var G__78819 = ctx;
var G__78820 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78819,G__78820) : sci.impl.interpreter.interpret.call(null,G__78819,G__78820));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg78347 = (function (){var G__78821 = ctx;
var G__78822 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78821,G__78822) : sci.impl.interpreter.interpret.call(null,G__78821,G__78822));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg78348 = (function (){var G__78823 = ctx;
var G__78824 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78823,G__78824) : sci.impl.interpreter.interpret.call(null,G__78823,G__78824));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg78349 = (function (){var G__78826 = ctx;
var G__78827 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78826,G__78827) : sci.impl.interpreter.interpret.call(null,G__78826,G__78827));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg78350 = (function (){var G__78831 = ctx;
var G__78832 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78831,G__78832) : sci.impl.interpreter.interpret.call(null,G__78831,G__78832));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg78351 = (function (){var G__78835 = ctx;
var G__78836 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78835,G__78836) : sci.impl.interpreter.interpret.call(null,G__78835,G__78836));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg78352 = (function (){var G__78837 = ctx;
var G__78838 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78837,G__78838) : sci.impl.interpreter.interpret.call(null,G__78837,G__78838));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg78339,arg78340,arg78341,arg78342,arg78343,arg78344,arg78345,arg78346,arg78347,arg78348,arg78349,arg78350,arg78351,arg78352) : f.call(null,arg78339,arg78340,arg78341,arg78342,arg78343,arg78344,arg78345,arg78346,arg78347,arg78348,arg78349,arg78350,arg78351,arg78352));

break;
case (15):
var arg78353 = (function (){var G__78842 = ctx;
var G__78843 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78842,G__78843) : sci.impl.interpreter.interpret.call(null,G__78842,G__78843));
})();
var args__$1 = cljs.core.rest(args);
var arg78354 = (function (){var G__78846 = ctx;
var G__78847 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78846,G__78847) : sci.impl.interpreter.interpret.call(null,G__78846,G__78847));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78355 = (function (){var G__78848 = ctx;
var G__78849 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78848,G__78849) : sci.impl.interpreter.interpret.call(null,G__78848,G__78849));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78356 = (function (){var G__78850 = ctx;
var G__78851 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78850,G__78851) : sci.impl.interpreter.interpret.call(null,G__78850,G__78851));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78357 = (function (){var G__78853 = ctx;
var G__78854 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78853,G__78854) : sci.impl.interpreter.interpret.call(null,G__78853,G__78854));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78358 = (function (){var G__78867 = ctx;
var G__78868 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78867,G__78868) : sci.impl.interpreter.interpret.call(null,G__78867,G__78868));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78359 = (function (){var G__78871 = ctx;
var G__78872 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78871,G__78872) : sci.impl.interpreter.interpret.call(null,G__78871,G__78872));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg78360 = (function (){var G__78874 = ctx;
var G__78875 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78874,G__78875) : sci.impl.interpreter.interpret.call(null,G__78874,G__78875));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg78361 = (function (){var G__78876 = ctx;
var G__78877 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78876,G__78877) : sci.impl.interpreter.interpret.call(null,G__78876,G__78877));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg78362 = (function (){var G__78883 = ctx;
var G__78885 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78883,G__78885) : sci.impl.interpreter.interpret.call(null,G__78883,G__78885));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg78363 = (function (){var G__78887 = ctx;
var G__78888 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78887,G__78888) : sci.impl.interpreter.interpret.call(null,G__78887,G__78888));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg78364 = (function (){var G__78890 = ctx;
var G__78891 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78890,G__78891) : sci.impl.interpreter.interpret.call(null,G__78890,G__78891));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg78365 = (function (){var G__78895 = ctx;
var G__78896 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78895,G__78896) : sci.impl.interpreter.interpret.call(null,G__78895,G__78896));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg78366 = (function (){var G__78908 = ctx;
var G__78909 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78908,G__78909) : sci.impl.interpreter.interpret.call(null,G__78908,G__78909));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg78367 = (function (){var G__78910 = ctx;
var G__78911 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78910,G__78911) : sci.impl.interpreter.interpret.call(null,G__78910,G__78911));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg78353,arg78354,arg78355,arg78356,arg78357,arg78358,arg78359,arg78360,arg78361,arg78362,arg78363,arg78364,arg78365,arg78366,arg78367) : f.call(null,arg78353,arg78354,arg78355,arg78356,arg78357,arg78358,arg78359,arg78360,arg78361,arg78362,arg78363,arg78364,arg78365,arg78366,arg78367));

break;
case (16):
var arg78369 = (function (){var G__78918 = ctx;
var G__78919 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78918,G__78919) : sci.impl.interpreter.interpret.call(null,G__78918,G__78919));
})();
var args__$1 = cljs.core.rest(args);
var arg78370 = (function (){var G__78921 = ctx;
var G__78922 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78921,G__78922) : sci.impl.interpreter.interpret.call(null,G__78921,G__78922));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78371 = (function (){var G__78924 = ctx;
var G__78925 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78924,G__78925) : sci.impl.interpreter.interpret.call(null,G__78924,G__78925));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78372 = (function (){var G__78928 = ctx;
var G__78929 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78928,G__78929) : sci.impl.interpreter.interpret.call(null,G__78928,G__78929));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78373 = (function (){var G__78932 = ctx;
var G__78933 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78932,G__78933) : sci.impl.interpreter.interpret.call(null,G__78932,G__78933));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78374 = (function (){var G__78937 = ctx;
var G__78938 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78937,G__78938) : sci.impl.interpreter.interpret.call(null,G__78937,G__78938));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78375 = (function (){var G__78939 = ctx;
var G__78940 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78939,G__78940) : sci.impl.interpreter.interpret.call(null,G__78939,G__78940));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg78376 = (function (){var G__78942 = ctx;
var G__78943 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78942,G__78943) : sci.impl.interpreter.interpret.call(null,G__78942,G__78943));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg78377 = (function (){var G__78945 = ctx;
var G__78946 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78945,G__78946) : sci.impl.interpreter.interpret.call(null,G__78945,G__78946));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg78378 = (function (){var G__78949 = ctx;
var G__78950 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78949,G__78950) : sci.impl.interpreter.interpret.call(null,G__78949,G__78950));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg78379 = (function (){var G__78953 = ctx;
var G__78954 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78953,G__78954) : sci.impl.interpreter.interpret.call(null,G__78953,G__78954));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg78380 = (function (){var G__78955 = ctx;
var G__78956 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78955,G__78956) : sci.impl.interpreter.interpret.call(null,G__78955,G__78956));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg78381 = (function (){var G__78957 = ctx;
var G__78958 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78957,G__78958) : sci.impl.interpreter.interpret.call(null,G__78957,G__78958));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg78382 = (function (){var G__78960 = ctx;
var G__78961 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78960,G__78961) : sci.impl.interpreter.interpret.call(null,G__78960,G__78961));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg78383 = (function (){var G__78964 = ctx;
var G__78965 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78964,G__78965) : sci.impl.interpreter.interpret.call(null,G__78964,G__78965));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg78384 = (function (){var G__78968 = ctx;
var G__78969 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78968,G__78969) : sci.impl.interpreter.interpret.call(null,G__78968,G__78969));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg78369,arg78370,arg78371,arg78372,arg78373,arg78374,arg78375,arg78376,arg78377,arg78378,arg78379,arg78380,arg78381,arg78382,arg78383,arg78384) : f.call(null,arg78369,arg78370,arg78371,arg78372,arg78373,arg78374,arg78375,arg78376,arg78377,arg78378,arg78379,arg78380,arg78381,arg78382,arg78383,arg78384));

break;
case (17):
var arg78385 = (function (){var G__78972 = ctx;
var G__78973 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78972,G__78973) : sci.impl.interpreter.interpret.call(null,G__78972,G__78973));
})();
var args__$1 = cljs.core.rest(args);
var arg78386 = (function (){var G__78974 = ctx;
var G__78975 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78974,G__78975) : sci.impl.interpreter.interpret.call(null,G__78974,G__78975));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78387 = (function (){var G__78978 = ctx;
var G__78979 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78978,G__78979) : sci.impl.interpreter.interpret.call(null,G__78978,G__78979));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78388 = (function (){var G__78980 = ctx;
var G__78981 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78980,G__78981) : sci.impl.interpreter.interpret.call(null,G__78980,G__78981));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78389 = (function (){var G__78984 = ctx;
var G__78985 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78984,G__78985) : sci.impl.interpreter.interpret.call(null,G__78984,G__78985));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78390 = (function (){var G__78986 = ctx;
var G__78987 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78986,G__78987) : sci.impl.interpreter.interpret.call(null,G__78986,G__78987));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78391 = (function (){var G__78988 = ctx;
var G__78989 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78988,G__78989) : sci.impl.interpreter.interpret.call(null,G__78988,G__78989));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg78392 = (function (){var G__78992 = ctx;
var G__78993 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78992,G__78993) : sci.impl.interpreter.interpret.call(null,G__78992,G__78993));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg78393 = (function (){var G__78994 = ctx;
var G__78995 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78994,G__78995) : sci.impl.interpreter.interpret.call(null,G__78994,G__78995));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg78394 = (function (){var G__78998 = ctx;
var G__78999 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78998,G__78999) : sci.impl.interpreter.interpret.call(null,G__78998,G__78999));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg78395 = (function (){var G__79002 = ctx;
var G__79003 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79002,G__79003) : sci.impl.interpreter.interpret.call(null,G__79002,G__79003));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg78396 = (function (){var G__79004 = ctx;
var G__79005 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79004,G__79005) : sci.impl.interpreter.interpret.call(null,G__79004,G__79005));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg78397 = (function (){var G__79006 = ctx;
var G__79007 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79006,G__79007) : sci.impl.interpreter.interpret.call(null,G__79006,G__79007));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg78398 = (function (){var G__79009 = ctx;
var G__79010 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79009,G__79010) : sci.impl.interpreter.interpret.call(null,G__79009,G__79010));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg78399 = (function (){var G__79013 = ctx;
var G__79014 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79013,G__79014) : sci.impl.interpreter.interpret.call(null,G__79013,G__79014));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg78400 = (function (){var G__79019 = ctx;
var G__79020 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79019,G__79020) : sci.impl.interpreter.interpret.call(null,G__79019,G__79020));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg78401 = (function (){var G__79022 = ctx;
var G__79023 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79022,G__79023) : sci.impl.interpreter.interpret.call(null,G__79022,G__79023));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg78385,arg78386,arg78387,arg78388,arg78389,arg78390,arg78391,arg78392,arg78393,arg78394,arg78395,arg78396,arg78397,arg78398,arg78399,arg78400,arg78401) : f.call(null,arg78385,arg78386,arg78387,arg78388,arg78389,arg78390,arg78391,arg78392,arg78393,arg78394,arg78395,arg78396,arg78397,arg78398,arg78399,arg78400,arg78401));

break;
case (18):
var arg78402 = (function (){var G__79026 = ctx;
var G__79027 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79026,G__79027) : sci.impl.interpreter.interpret.call(null,G__79026,G__79027));
})();
var args__$1 = cljs.core.rest(args);
var arg78403 = (function (){var G__79029 = ctx;
var G__79030 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79029,G__79030) : sci.impl.interpreter.interpret.call(null,G__79029,G__79030));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78404 = (function (){var G__79032 = ctx;
var G__79033 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79032,G__79033) : sci.impl.interpreter.interpret.call(null,G__79032,G__79033));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78405 = (function (){var G__79036 = ctx;
var G__79037 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79036,G__79037) : sci.impl.interpreter.interpret.call(null,G__79036,G__79037));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78406 = (function (){var G__79038 = ctx;
var G__79039 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79038,G__79039) : sci.impl.interpreter.interpret.call(null,G__79038,G__79039));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78407 = (function (){var G__79042 = ctx;
var G__79043 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79042,G__79043) : sci.impl.interpreter.interpret.call(null,G__79042,G__79043));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78408 = (function (){var G__79045 = ctx;
var G__79046 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79045,G__79046) : sci.impl.interpreter.interpret.call(null,G__79045,G__79046));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg78409 = (function (){var G__79048 = ctx;
var G__79049 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79048,G__79049) : sci.impl.interpreter.interpret.call(null,G__79048,G__79049));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg78410 = (function (){var G__79050 = ctx;
var G__79051 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79050,G__79051) : sci.impl.interpreter.interpret.call(null,G__79050,G__79051));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg78411 = (function (){var G__79055 = ctx;
var G__79056 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79055,G__79056) : sci.impl.interpreter.interpret.call(null,G__79055,G__79056));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg78412 = (function (){var G__79059 = ctx;
var G__79060 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79059,G__79060) : sci.impl.interpreter.interpret.call(null,G__79059,G__79060));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg78413 = (function (){var G__79064 = ctx;
var G__79065 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79064,G__79065) : sci.impl.interpreter.interpret.call(null,G__79064,G__79065));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg78414 = (function (){var G__79066 = ctx;
var G__79067 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79066,G__79067) : sci.impl.interpreter.interpret.call(null,G__79066,G__79067));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg78415 = (function (){var G__79068 = ctx;
var G__79069 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79068,G__79069) : sci.impl.interpreter.interpret.call(null,G__79068,G__79069));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg78416 = (function (){var G__79071 = ctx;
var G__79072 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79071,G__79072) : sci.impl.interpreter.interpret.call(null,G__79071,G__79072));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg78417 = (function (){var G__79073 = ctx;
var G__79074 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79073,G__79074) : sci.impl.interpreter.interpret.call(null,G__79073,G__79074));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg78418 = (function (){var G__79075 = ctx;
var G__79076 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79075,G__79076) : sci.impl.interpreter.interpret.call(null,G__79075,G__79076));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg78419 = (function (){var G__79079 = ctx;
var G__79080 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79079,G__79080) : sci.impl.interpreter.interpret.call(null,G__79079,G__79080));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg78402,arg78403,arg78404,arg78405,arg78406,arg78407,arg78408,arg78409,arg78410,arg78411,arg78412,arg78413,arg78414,arg78415,arg78416,arg78417,arg78418,arg78419) : f.call(null,arg78402,arg78403,arg78404,arg78405,arg78406,arg78407,arg78408,arg78409,arg78410,arg78411,arg78412,arg78413,arg78414,arg78415,arg78416,arg78417,arg78418,arg78419));

break;
case (19):
var arg78420 = (function (){var G__79089 = ctx;
var G__79090 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79089,G__79090) : sci.impl.interpreter.interpret.call(null,G__79089,G__79090));
})();
var args__$1 = cljs.core.rest(args);
var arg78421 = (function (){var G__79091 = ctx;
var G__79092 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79091,G__79092) : sci.impl.interpreter.interpret.call(null,G__79091,G__79092));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78422 = (function (){var G__79096 = ctx;
var G__79097 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79096,G__79097) : sci.impl.interpreter.interpret.call(null,G__79096,G__79097));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78423 = (function (){var G__79102 = ctx;
var G__79103 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79102,G__79103) : sci.impl.interpreter.interpret.call(null,G__79102,G__79103));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78424 = (function (){var G__79106 = ctx;
var G__79107 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79106,G__79107) : sci.impl.interpreter.interpret.call(null,G__79106,G__79107));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78425 = (function (){var G__79109 = ctx;
var G__79110 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79109,G__79110) : sci.impl.interpreter.interpret.call(null,G__79109,G__79110));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78426 = (function (){var G__79112 = ctx;
var G__79113 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79112,G__79113) : sci.impl.interpreter.interpret.call(null,G__79112,G__79113));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg78427 = (function (){var G__79117 = ctx;
var G__79118 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79117,G__79118) : sci.impl.interpreter.interpret.call(null,G__79117,G__79118));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg78428 = (function (){var G__79121 = ctx;
var G__79122 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79121,G__79122) : sci.impl.interpreter.interpret.call(null,G__79121,G__79122));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg78429 = (function (){var G__79125 = ctx;
var G__79126 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79125,G__79126) : sci.impl.interpreter.interpret.call(null,G__79125,G__79126));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg78430 = (function (){var G__79128 = ctx;
var G__79129 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79128,G__79129) : sci.impl.interpreter.interpret.call(null,G__79128,G__79129));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg78431 = (function (){var G__79132 = ctx;
var G__79133 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79132,G__79133) : sci.impl.interpreter.interpret.call(null,G__79132,G__79133));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg78432 = (function (){var G__79134 = ctx;
var G__79135 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79134,G__79135) : sci.impl.interpreter.interpret.call(null,G__79134,G__79135));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg78433 = (function (){var G__79138 = ctx;
var G__79139 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79138,G__79139) : sci.impl.interpreter.interpret.call(null,G__79138,G__79139));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg78434 = (function (){var G__79142 = ctx;
var G__79143 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79142,G__79143) : sci.impl.interpreter.interpret.call(null,G__79142,G__79143));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg78435 = (function (){var G__79145 = ctx;
var G__79146 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79145,G__79146) : sci.impl.interpreter.interpret.call(null,G__79145,G__79146));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg78436 = (function (){var G__79150 = ctx;
var G__79151 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79150,G__79151) : sci.impl.interpreter.interpret.call(null,G__79150,G__79151));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg78437 = (function (){var G__79152 = ctx;
var G__79153 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79152,G__79153) : sci.impl.interpreter.interpret.call(null,G__79152,G__79153));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg78438 = (function (){var G__79156 = ctx;
var G__79157 = cljs.core.first(args__$18);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79156,G__79157) : sci.impl.interpreter.interpret.call(null,G__79156,G__79157));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg78420,arg78421,arg78422,arg78423,arg78424,arg78425,arg78426,arg78427,arg78428,arg78429,arg78430,arg78431,arg78432,arg78433,arg78434,arg78435,arg78436,arg78437,arg78438) : f.call(null,arg78420,arg78421,arg78422,arg78423,arg78424,arg78425,arg78426,arg78427,arg78428,arg78429,arg78430,arg78431,arg78432,arg78433,arg78434,arg78435,arg78436,arg78437,arg78438));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__77490_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__77490_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__77490_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.interpreter.eval_special_call = (function sci$impl$interpreter$eval_special_call(ctx,f_sym,expr){
var G__79168 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__79168)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_instance_method_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__79168)){
return sci.impl.interpreter.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"import","import",241030818,null),G__79168)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_import,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__79168)){
return sci.impl.interpreter.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__79168)){
return sci.impl.interpreter.eval_if(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__79168)){
return sci.impl.interpreter.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),G__79168)){
return sci.impl.interpreter.macroexpand(ctx,(function (){var G__79180 = ctx;
var G__79181 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79180,G__79181) : sci.impl.interpreter.interpret.call(null,G__79180,G__79181));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__79168)){
return sci.impl.interpreter.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__79168)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_let,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__79168)){
return sci.impl.interpreter.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"use","use",-205850897,null),G__79168)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_use,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__79168)){
return sci.impl.interpreter.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__79168)){
return sci.impl.interpreter.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__79168)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__79168)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_constructor_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),G__79168)){
return sci.impl.interpreter.macroexpand_1(ctx,(function (){var G__79187 = ctx;
var G__79188 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79187,G__79188) : sci.impl.interpreter.interpret.call(null,G__79187,G__79188));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__79168)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_refer,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__79168)){
return (new cljs.core.LazySeq(null,(function (){var G__79191 = ctx;
var G__79192 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79191,G__79192) : sci.impl.interpreter.interpret.call(null,G__79191,G__79192));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__79168)){
return sci.impl.interpreter.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__79168)){
return sci.impl.interpreter.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"resolve","resolve",56086045,null),G__79168)){
return sci.impl.interpreter.eval_resolve(ctx,cljs.core.second(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__79168)){
return sci.impl.interpreter.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__79168)].join('')));

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
}catch (e79217){if((e79217 instanceof Error)){
var e = e79217;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e79217;

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
var ret = ((cljs.core.not(op))?expr:(function (){var G__79266 = op;
var G__79266__$1 = (((G__79266 instanceof cljs.core.Keyword))?G__79266.fqn:null);
switch (G__79266__$1) {
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
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__79248_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__79248_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__79248_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__79249_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__79249_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__79249_SHARP_));
}),cljs.core.vals(expr)));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__79250_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__79250_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__79250_SHARP_));
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
var G__79983 = cljs.core.rest(exprs);
var G__79984 = (function (){var G__79292 = ctx;
var G__79293 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__79292,G__79293) : sci.impl.interpreter.eval_form.call(null,G__79292,G__79293));
})();
exprs = G__79983;
ret = G__79984;
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
var G__79986 = ret__$1;
ret = G__79986;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__79314 = arguments.length;
switch (G__79314) {
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
