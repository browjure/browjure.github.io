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
var G__81791 = xs;
args__$2 = G__81791;
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
var G__81792 = xs;
args__$2 = G__81792;
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
var len__4736__auto___81796 = arguments.length;
var i__4737__auto___81797 = (0);
while(true){
if((i__4737__auto___81797 < len__4736__auto___81796)){
args__4742__auto__.push((arguments[i__4737__auto___81797]));

var G__81799 = (i__4737__auto___81797 + (1));
i__4737__auto___81797 = G__81799;
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
var G__81806 = ctx__$2;
var G__81807 = rest_let_bindings;
ctx__$1 = G__81806;
let_bindings__$1 = G__81807;
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
var G__81808 = nexprs;
exprs__$1 = G__81808;
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
(sci.impl.interpreter.eval_let.cljs$lang$applyTo = (function (seq80667){
var G__80668 = cljs.core.first(seq80667);
var seq80667__$1 = cljs.core.next(seq80667);
var G__80669 = cljs.core.first(seq80667__$1);
var seq80667__$2 = cljs.core.next(seq80667__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80668,G__80669,seq80667__$2);
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
sci.impl.interpreter.eval_def = (function sci$impl$interpreter$eval_def(ctx,p__80686){
var vec__80689 = p__80686;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80689,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80689,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80689,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80689,(3),null);
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
var v = (cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1)))?(function (){var G__80693 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__80693,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__80693;
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
var vec__80703 = libspec;
var seq__80704 = cljs.core.seq(vec__80703);
var first__80705 = cljs.core.first(seq__80704);
var seq__80704__$1 = cljs.core.next(seq__80704);
var lib_name = first__80705;
var opts = seq__80704__$1;
var ret = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),lib_name], null);
var G__80709 = opts;
var vec__80710 = G__80709;
var seq__80711 = cljs.core.seq(vec__80710);
var first__80712 = cljs.core.first(seq__80711);
var seq__80711__$1 = cljs.core.next(seq__80711);
var opt_name = first__80712;
var first__80712__$1 = cljs.core.first(seq__80711__$1);
var seq__80711__$2 = cljs.core.next(seq__80711__$1);
var fst_opt = first__80712__$1;
var rst_opts = seq__80711__$2;
var ret__$1 = ret;
var G__80709__$1 = G__80709;
while(true){
var ret__$2 = ret__$1;
var vec__80721 = G__80709__$1;
var seq__80722 = cljs.core.seq(vec__80721);
var first__80723 = cljs.core.first(seq__80722);
var seq__80722__$1 = cljs.core.next(seq__80722);
var opt_name__$1 = first__80723;
var first__80723__$1 = cljs.core.first(seq__80722__$1);
var seq__80722__$2 = cljs.core.next(seq__80722__$1);
var fst_opt__$1 = first__80723__$1;
var rst_opts__$1 = seq__80722__$2;
if(cljs.core.not(opt_name__$1)){
return ret__$2;
} else {
var G__80727 = opt_name__$1;
var G__80727__$1 = (((G__80727 instanceof cljs.core.Keyword))?G__80727.fqn:null);
switch (G__80727__$1) {
case "as":
var G__81849 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"as","as",1148689641),fst_opt__$1);
var G__81850 = rst_opts__$1;
ret__$1 = G__81849;
G__80709__$1 = G__81850;
continue;

break;
case "reload":
case "reload-all":
case "verbose":
var G__81852 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"reload","reload",863702807),true);
var G__81853 = cljs.core.cons(fst_opt__$1,rst_opts__$1);
ret__$1 = G__81852;
G__80709__$1 = G__81853;
continue;

break;
case "refer":
case "rename":
case "exclude":
case "only":
var G__81855 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,opt_name__$1,fst_opt__$1);
var G__81856 = rst_opts__$1;
ret__$1 = G__81855;
G__80709__$1 = G__81856;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__80727__$1)].join('')));

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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__80728){
var vec__80730 = p__80728;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80730,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80730,(1),null);
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
sci.impl.interpreter.handle_require_libspec_env = (function sci$impl$interpreter$handle_require_libspec_env(env,use_QMARK_,current_ns,the_loaded_ns,lib_name,p__80739){
var map__80741 = p__80739;
var map__80741__$1 = (((((!((map__80741 == null))))?(((((map__80741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80741):map__80741);
var _parsed_libspec = map__80741__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80741__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80741__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80741__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80741__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80741__$1,new cljs.core.Keyword(null,"only","only",1907811652));
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
var vec__80748 = temp__5751__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80748,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80748,(1),null);
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
var map__80754 = sci.impl.interpreter.parse_libspec(libspec);
var map__80754__$1 = (((((!((map__80754 == null))))?(((((map__80754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80754):map__80754);
var parsed_libspec = map__80754__$1;
var lib_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80754__$1,new cljs.core.Keyword(null,"lib-name","lib-name",1158024282));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80754__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
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
var temp__5751__auto____$2 = (function (){var G__80769 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib_name], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__80769) : load_fn.call(null,G__80769));
})();
if(cljs.core.truth_(temp__5751__auto____$2)){
var map__80770 = temp__5751__auto____$2;
var map__80770__$1 = (((((!((map__80770 == null))))?(((((map__80770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80770):map__80770);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80770__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80770__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__80780_81884 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY);
var G__80781_81885 = source;
(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(G__80780_81884,G__80781_81885) : sci.impl.interpreter.eval_string_STAR_.call(null,G__80780_81884,G__80781_81885));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e80773){if((e80773 instanceof Error)){
var e_81889 = e80773;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib_name], 0));

throw e_81889;
} else {
throw e80773;

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
var len__4736__auto___81906 = arguments.length;
var i__4737__auto___81907 = (0);
while(true){
if((i__4737__auto___81907 < len__4736__auto___81906)){
args__4742__auto__.push((arguments[i__4737__auto___81907]));

var G__81909 = (i__4737__auto___81907 + (1));
i__4737__auto___81907 = G__81909;
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
var ret = (function (){var G__80801 = ctx;
var G__80802 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__80801,G__80802) : sci.impl.interpreter.interpret.call(null,G__80801,G__80802));
})();
if((ret instanceof cljs.core.Symbol)){
var G__81913 = (function (){var G__80803 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__80803,current_libspec);
} else {
return G__80803;
}
})();
var G__81914 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
var G__81915 = cljs.core.next(args__$1);
libspecs = G__81913;
current_libspec = G__81914;
args__$1 = G__81915;
continue;
} else {
if((ret instanceof cljs.core.Keyword)){
var G__81919 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_libspec,ret));
var G__81920 = null;
var G__81921 = cljs.core.next(args__$1);
libspecs = G__81919;
current_libspec = G__81920;
args__$1 = G__81921;
continue;
} else {
var G__81924 = (function (){var G__80804 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__80804,current_libspec);
} else {
return G__80804;
}
})();
var G__81925 = ret;
var G__81926 = cljs.core.next(args__$1);
libspecs = G__81924;
current_libspec = G__81925;
args__$1 = G__81926;
continue;

}
}
} else {
var libspecs__$1 = (function (){var G__80807 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__80807,current_libspec);
} else {
return G__80807;
}
})();
return cljs.core.run_BANG_(((function (libspecs,current_libspec,args__$1,libspecs__$1){
return (function (p1__80787_SHARP_){
return sci.impl.interpreter.handle_require_libspec(ctx,p1__80787_SHARP_);
});})(libspecs,current_libspec,args__$1,libspecs__$1))
,libspecs__$1);
}
break;
}
}));

(sci.impl.interpreter.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_require.cljs$lang$applyTo = (function (seq80788){
var G__80789 = cljs.core.first(seq80788);
var seq80788__$1 = cljs.core.next(seq80788);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80789,seq80788__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.interpreter.eval_require);
sci.impl.interpreter.eval_use = (function sci$impl$interpreter$eval_use(var_args){
var args__4742__auto__ = [];
var len__4736__auto___81942 = arguments.length;
var i__4737__auto___81943 = (0);
while(true){
if((i__4737__auto___81943 < len__4736__auto___81942)){
args__4742__auto__.push((arguments[i__4737__auto___81943]));

var G__81944 = (i__4737__auto___81943 + (1));
i__4737__auto___81943 = G__81944;
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
(sci.impl.interpreter.eval_use.cljs$lang$applyTo = (function (seq80811){
var G__80812 = cljs.core.first(seq80811);
var seq80811__$1 = cljs.core.next(seq80811);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80812,seq80811__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.interpreter.eval_use);
sci.impl.interpreter.eval_case = (function sci$impl$interpreter$eval_case(ctx,p__80816){
var vec__80817 = p__80816;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80817,(0),null);
var map__80820 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80817,(1),null);
var map__80820__$1 = (((((!((map__80820 == null))))?(((((map__80820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80820):map__80820);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80820__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80820__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80820__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.interpreter.interpret.call(null,ctx,case_val));
var temp__5751__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__80822 = temp__5751__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80822,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80822,(1),null);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.interpreter.interpret.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__80825 = ctx;
var G__80826 = cljs.core.second(case_default);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__80825,G__80826) : sci.impl.interpreter.interpret.call(null,G__80825,G__80826));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.interpreter.eval_try = (function sci$impl$interpreter$eval_try(ctx,expr){
var map__80828 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__80828__$1 = (((((!((map__80828 == null))))?(((((map__80828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80828):map__80828);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80828__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80828__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80828__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var _STAR_in_try_STAR__orig_val__80966 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__80967 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__80967);

try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.interpreter.interpret.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__80966);
}}catch (e80830){if((e80830 instanceof Error)){
var e = e80830;
var temp__5751__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.interpreter","try-result","sci.impl.interpreter/try-result",1789456125),(function (){var G__80961 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__80962 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__80961,G__80962) : sci.impl.interpreter.interpret.call(null,G__80961,G__80962));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__80963 = temp__5751__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80963,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80963,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e80830;

}
}finally {(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.interpreter.interpret.call(null,ctx,finally$));
}});
sci.impl.interpreter.eval_throw = (function sci$impl$interpreter$eval_throw(ctx,p__80971){
var vec__80974 = p__80971;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80974,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80974,(1),null);
var ex__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.interpret.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.interpreter.eval_static_method_invocation = (function sci$impl$interpreter$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__80977_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__80977_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__80977_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.interpreter.eval_constructor_invocation = (function sci$impl$interpreter$eval_constructor_invocation(ctx,p__80979){
var vec__80980 = p__80979;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80980,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80980,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80980,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__80978_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__80978_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__80978_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.interpreter.eval_instance_method_invocation = (function sci$impl$interpreter$eval_instance_method_invocation(p__80991,p__80992){
var map__80993 = p__80991;
var map__80993__$1 = (((((!((map__80993 == null))))?(((((map__80993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80993):map__80993);
var ctx = map__80993__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80993__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__80998 = p__80992;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80998,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80998,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80998,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80998,(3),null);
var _expr = vec__80998;
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

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__80987_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__80987_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__80987_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
}
});
sci.impl.interpreter.eval_in_ns = (function sci$impl$interpreter$eval_in_ns(ctx,p__81014){
var vec__81015 = p__81014;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81015,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81015,(1),null);
var ns_sym = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.interpreter.interpret.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.interpreter.eval_refer = (function sci$impl$interpreter$eval_refer(var_args){
var args__4742__auto__ = [];
var len__4736__auto___81985 = arguments.length;
var i__4737__auto___81986 = (0);
while(true){
if((i__4737__auto___81986 < len__4736__auto___81985)){
args__4742__auto__.push((arguments[i__4737__auto___81986]));

var G__81987 = (i__4737__auto___81986 + (1));
i__4737__auto___81986 = G__81987;
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
var vec__81021 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81021,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81021,(1),null);
var G__81024_81990 = k;
var G__81024_81991__$1 = (((G__81024_81990 instanceof cljs.core.Keyword))?G__81024_81990.fqn:null);
switch (G__81024_81991__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__81024_81990,G__81024_81991__$1,vec__81021,k,v,ns_sym__$1){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__81024_81990,G__81024_81991__$1,vec__81021,k,v,ns_sym__$1))
);

break;
case "only":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__81024_81990,G__81024_81991__$1,vec__81021,k,v,ns_sym__$1){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym__$1], null));
var other_vars = cljs.core.select_keys(other_ns,v);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),cljs.core.merge,other_vars);
});})(exprs__$1,G__81024_81990,G__81024_81991__$1,vec__81021,k,v,ns_sym__$1))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__81024_81991__$1)].join('')));

}

var G__81998 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__81998;
continue;
} else {
return null;
}
break;
}
}));

(sci.impl.interpreter.eval_refer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.interpreter.eval_refer.cljs$lang$applyTo = (function (seq81018){
var G__81019 = cljs.core.first(seq81018);
var seq81018__$1 = cljs.core.next(seq81018);
var G__81020 = cljs.core.first(seq81018__$1);
var seq81018__$2 = cljs.core.next(seq81018__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81019,G__81020,seq81018__$2);
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
var f__$2 = (cljs.core.truth_((function (){var G__81025 = new cljs.core.Keyword(null,"needs-ctx","needs-ctx",-35514403);
var G__81026 = (function (){var G__81027 = f__$1;
var G__81027__$1 = (((G__81027 == null))?null:cljs.core.meta(G__81027));
if((G__81027__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(G__81027__$1);
}
})();
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__81025,G__81026) : sci.impl.utils.kw_identical_QMARK_.call(null,G__81025,G__81026));
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
var len__4736__auto___82020 = arguments.length;
var i__4737__auto___82021 = (0);
while(true){
if((i__4737__auto___82021 < len__4736__auto___82020)){
args__4742__auto__.push((arguments[i__4737__auto___82021]));

var G__82022 = (i__4737__auto___82021 + (1));
i__4737__auto___82021 = G__82022;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sci.impl.interpreter.eval_import.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,import_symbols_or_lists){
var specs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__81030_SHARP_){
if(((cljs.core.seq_QMARK_(p1__81030_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(p1__81030_SHARP_))))){
return cljs.core.second(p1__81030_SHARP_);
} else {
return p1__81030_SHARP_;
}
}),import_symbols_or_lists);
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.core.run_BANG_((function (spec){
var vec__81034 = (((spec instanceof cljs.core.Symbol))?(function (){var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec);
var last_dot = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(s,".");
var package_PLUS_class_name = (cljs.core.truth_(last_dot)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),last_dot)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(last_dot + (1)),((s).length)))], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null)], null));
return package_PLUS_class_name;
})():(function (){var p = cljs.core.first(spec);
var cs = cljs.core.rest(spec);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cs], null);
})());
var package$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81034,(0),null);
var classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81034,(1),null);
var seq__81037 = cljs.core.seq(classes);
var chunk__81038 = null;
var count__81039 = (0);
var i__81040 = (0);
while(true){
if((i__81040 < count__81039)){
var class$ = chunk__81038.cljs$core$IIndexed$_nth$arity$2(null,i__81040);
var fq_class_name_82034 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(package$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):class$));
if(cljs.core.truth_(sci.impl.interop.resolve_class(ctx,fq_class_name_82034))){
var cnn_82035 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_82035,new cljs.core.Keyword(null,"imports","imports",-1249933394),class$], null),fq_class_name_82034);
} else {
var temp__5751__auto___82037 = sci.impl.records.resolve_record_class.cljs$core$IFn$_invoke$arity$3(ctx,package$,class$);
if(cljs.core.truth_(temp__5751__auto___82037)){
var rec_82038 = temp__5751__auto___82037;
var cnn_82039 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_82039,class$], null),rec_82038);
} else {
throw (new Error(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fq_class_name_82034)].join('')));
}
}


var G__82040 = seq__81037;
var G__82041 = chunk__81038;
var G__82042 = count__81039;
var G__82043 = (i__81040 + (1));
seq__81037 = G__82040;
chunk__81038 = G__82041;
count__81039 = G__82042;
i__81040 = G__82043;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__81037);
if(temp__5753__auto__){
var seq__81037__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__81037__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__81037__$1);
var G__82046 = cljs.core.chunk_rest(seq__81037__$1);
var G__82047 = c__4556__auto__;
var G__82048 = cljs.core.count(c__4556__auto__);
var G__82049 = (0);
seq__81037 = G__82046;
chunk__81038 = G__82047;
count__81039 = G__82048;
i__81040 = G__82049;
continue;
} else {
var class$ = cljs.core.first(seq__81037__$1);
var fq_class_name_82051 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(package$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):class$));
if(cljs.core.truth_(sci.impl.interop.resolve_class(ctx,fq_class_name_82051))){
var cnn_82053 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_82053,new cljs.core.Keyword(null,"imports","imports",-1249933394),class$], null),fq_class_name_82051);
} else {
var temp__5751__auto___82054 = sci.impl.records.resolve_record_class.cljs$core$IFn$_invoke$arity$3(ctx,package$,class$);
if(cljs.core.truth_(temp__5751__auto___82054)){
var rec_82055 = temp__5751__auto___82054;
var cnn_82056 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_82056,class$], null),rec_82055);
} else {
throw (new Error(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fq_class_name_82051)].join('')));
}
}


var G__82057 = cljs.core.next(seq__81037__$1);
var G__82058 = null;
var G__82059 = (0);
var G__82060 = (0);
seq__81037 = G__82057;
chunk__81038 = G__82058;
count__81039 = G__82059;
i__81040 = G__82060;
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
(sci.impl.interpreter.eval_import.cljs$lang$applyTo = (function (seq81031){
var G__81032 = cljs.core.first(seq81031);
var seq81031__$1 = cljs.core.next(seq81031);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81032,seq81031__$1);
}));

sci.impl.interpreter.eval_set_BANG_ = (function sci$impl$interpreter$eval_set_BANG_(ctx,p__81046){
var vec__81047 = p__81046;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81047,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81047,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81047,(2),null);
var obj__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.interpreter.interpret.call(null,ctx,obj));
var v__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.interpreter.interpret.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}
});
sci.impl.interpreter.eval_do_STAR_ = (function sci$impl$interpreter$eval_do_STAR_(ctx,exprs){
var G__81054 = exprs;
var vec__81055 = G__81054;
var seq__81056 = cljs.core.seq(vec__81055);
var first__81057 = cljs.core.first(seq__81056);
var seq__81056__$1 = cljs.core.next(seq__81056);
var expr = first__81057;
var exprs__$1 = seq__81056__$1;
var G__81054__$1 = G__81054;
while(true){
var vec__81058 = G__81054__$1;
var seq__81059 = cljs.core.seq(vec__81058);
var first__81060 = cljs.core.first(seq__81059);
var seq__81059__$1 = cljs.core.next(seq__81059);
var expr__$1 = first__81060;
var exprs__$2 = seq__81059__$1;
var ret = (function (){try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.interpreter.interpret.call(null,ctx,expr__$1));
}catch (e81061){if((e81061 instanceof Error)){
var e = e81061;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr__$1);
} else {
throw e81061;

}
}})();
var temp__5751__auto__ = cljs.core.seq(exprs__$2);
if(temp__5751__auto__){
var exprs__$3 = temp__5751__auto__;
var G__82071 = exprs__$3;
G__81054__$1 = G__82071;
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
var G__81254 = cljs.core.count(args);
switch (G__81254) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg81064 = (function (){var G__81256 = ctx;
var G__81257 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81256,G__81257) : sci.impl.interpreter.interpret.call(null,G__81256,G__81257));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg81064) : f.call(null,arg81064));

break;
case (2):
var arg81065 = (function (){var G__81258 = ctx;
var G__81259 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81258,G__81259) : sci.impl.interpreter.interpret.call(null,G__81258,G__81259));
})();
var args__$1 = cljs.core.rest(args);
var arg81066 = (function (){var G__81260 = ctx;
var G__81261 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81260,G__81261) : sci.impl.interpreter.interpret.call(null,G__81260,G__81261));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg81065,arg81066) : f.call(null,arg81065,arg81066));

break;
case (3):
var arg81067 = (function (){var G__81262 = ctx;
var G__81263 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81262,G__81263) : sci.impl.interpreter.interpret.call(null,G__81262,G__81263));
})();
var args__$1 = cljs.core.rest(args);
var arg81068 = (function (){var G__81265 = ctx;
var G__81266 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81265,G__81266) : sci.impl.interpreter.interpret.call(null,G__81265,G__81266));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81069 = (function (){var G__81267 = ctx;
var G__81268 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81267,G__81268) : sci.impl.interpreter.interpret.call(null,G__81267,G__81268));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg81067,arg81068,arg81069) : f.call(null,arg81067,arg81068,arg81069));

break;
case (4):
var arg81070 = (function (){var G__81269 = ctx;
var G__81270 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81269,G__81270) : sci.impl.interpreter.interpret.call(null,G__81269,G__81270));
})();
var args__$1 = cljs.core.rest(args);
var arg81071 = (function (){var G__81271 = ctx;
var G__81272 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81271,G__81272) : sci.impl.interpreter.interpret.call(null,G__81271,G__81272));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81072 = (function (){var G__81273 = ctx;
var G__81274 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81273,G__81274) : sci.impl.interpreter.interpret.call(null,G__81273,G__81274));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81073 = (function (){var G__81275 = ctx;
var G__81276 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81275,G__81276) : sci.impl.interpreter.interpret.call(null,G__81275,G__81276));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg81070,arg81071,arg81072,arg81073) : f.call(null,arg81070,arg81071,arg81072,arg81073));

break;
case (5):
var arg81074 = (function (){var G__81277 = ctx;
var G__81278 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81277,G__81278) : sci.impl.interpreter.interpret.call(null,G__81277,G__81278));
})();
var args__$1 = cljs.core.rest(args);
var arg81075 = (function (){var G__81282 = ctx;
var G__81283 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81282,G__81283) : sci.impl.interpreter.interpret.call(null,G__81282,G__81283));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81076 = (function (){var G__81284 = ctx;
var G__81285 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81284,G__81285) : sci.impl.interpreter.interpret.call(null,G__81284,G__81285));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81077 = (function (){var G__81287 = ctx;
var G__81288 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81287,G__81288) : sci.impl.interpreter.interpret.call(null,G__81287,G__81288));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg81078 = (function (){var G__81292 = ctx;
var G__81293 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81292,G__81293) : sci.impl.interpreter.interpret.call(null,G__81292,G__81293));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg81074,arg81075,arg81076,arg81077,arg81078) : f.call(null,arg81074,arg81075,arg81076,arg81077,arg81078));

break;
case (6):
var arg81079 = (function (){var G__81294 = ctx;
var G__81295 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81294,G__81295) : sci.impl.interpreter.interpret.call(null,G__81294,G__81295));
})();
var args__$1 = cljs.core.rest(args);
var arg81080 = (function (){var G__81296 = ctx;
var G__81297 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81296,G__81297) : sci.impl.interpreter.interpret.call(null,G__81296,G__81297));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81081 = (function (){var G__81298 = ctx;
var G__81299 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81298,G__81299) : sci.impl.interpreter.interpret.call(null,G__81298,G__81299));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81082 = (function (){var G__81303 = ctx;
var G__81304 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81303,G__81304) : sci.impl.interpreter.interpret.call(null,G__81303,G__81304));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg81083 = (function (){var G__81305 = ctx;
var G__81306 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81305,G__81306) : sci.impl.interpreter.interpret.call(null,G__81305,G__81306));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg81084 = (function (){var G__81307 = ctx;
var G__81308 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81307,G__81308) : sci.impl.interpreter.interpret.call(null,G__81307,G__81308));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg81079,arg81080,arg81081,arg81082,arg81083,arg81084) : f.call(null,arg81079,arg81080,arg81081,arg81082,arg81083,arg81084));

break;
case (7):
var arg81085 = (function (){var G__81309 = ctx;
var G__81310 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81309,G__81310) : sci.impl.interpreter.interpret.call(null,G__81309,G__81310));
})();
var args__$1 = cljs.core.rest(args);
var arg81086 = (function (){var G__81313 = ctx;
var G__81314 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81313,G__81314) : sci.impl.interpreter.interpret.call(null,G__81313,G__81314));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81087 = (function (){var G__81315 = ctx;
var G__81316 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81315,G__81316) : sci.impl.interpreter.interpret.call(null,G__81315,G__81316));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81088 = (function (){var G__81317 = ctx;
var G__81318 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81317,G__81318) : sci.impl.interpreter.interpret.call(null,G__81317,G__81318));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg81089 = (function (){var G__81320 = ctx;
var G__81321 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81320,G__81321) : sci.impl.interpreter.interpret.call(null,G__81320,G__81321));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg81090 = (function (){var G__81325 = ctx;
var G__81326 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81325,G__81326) : sci.impl.interpreter.interpret.call(null,G__81325,G__81326));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg81091 = (function (){var G__81327 = ctx;
var G__81328 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81327,G__81328) : sci.impl.interpreter.interpret.call(null,G__81327,G__81328));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg81085,arg81086,arg81087,arg81088,arg81089,arg81090,arg81091) : f.call(null,arg81085,arg81086,arg81087,arg81088,arg81089,arg81090,arg81091));

break;
case (8):
var arg81092 = (function (){var G__81329 = ctx;
var G__81330 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81329,G__81330) : sci.impl.interpreter.interpret.call(null,G__81329,G__81330));
})();
var args__$1 = cljs.core.rest(args);
var arg81093 = (function (){var G__81331 = ctx;
var G__81332 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81331,G__81332) : sci.impl.interpreter.interpret.call(null,G__81331,G__81332));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81094 = (function (){var G__81333 = ctx;
var G__81334 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81333,G__81334) : sci.impl.interpreter.interpret.call(null,G__81333,G__81334));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81095 = (function (){var G__81335 = ctx;
var G__81336 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81335,G__81336) : sci.impl.interpreter.interpret.call(null,G__81335,G__81336));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg81096 = (function (){var G__81338 = ctx;
var G__81339 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81338,G__81339) : sci.impl.interpreter.interpret.call(null,G__81338,G__81339));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg81097 = (function (){var G__81340 = ctx;
var G__81341 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81340,G__81341) : sci.impl.interpreter.interpret.call(null,G__81340,G__81341));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg81098 = (function (){var G__81344 = ctx;
var G__81345 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81344,G__81345) : sci.impl.interpreter.interpret.call(null,G__81344,G__81345));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg81099 = (function (){var G__81347 = ctx;
var G__81348 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81347,G__81348) : sci.impl.interpreter.interpret.call(null,G__81347,G__81348));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg81092,arg81093,arg81094,arg81095,arg81096,arg81097,arg81098,arg81099) : f.call(null,arg81092,arg81093,arg81094,arg81095,arg81096,arg81097,arg81098,arg81099));

break;
case (9):
var arg81100 = (function (){var G__81349 = ctx;
var G__81350 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81349,G__81350) : sci.impl.interpreter.interpret.call(null,G__81349,G__81350));
})();
var args__$1 = cljs.core.rest(args);
var arg81101 = (function (){var G__81352 = ctx;
var G__81353 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81352,G__81353) : sci.impl.interpreter.interpret.call(null,G__81352,G__81353));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81102 = (function (){var G__81354 = ctx;
var G__81355 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81354,G__81355) : sci.impl.interpreter.interpret.call(null,G__81354,G__81355));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81103 = (function (){var G__81357 = ctx;
var G__81358 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81357,G__81358) : sci.impl.interpreter.interpret.call(null,G__81357,G__81358));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg81104 = (function (){var G__81359 = ctx;
var G__81360 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81359,G__81360) : sci.impl.interpreter.interpret.call(null,G__81359,G__81360));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg81105 = (function (){var G__81361 = ctx;
var G__81362 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81361,G__81362) : sci.impl.interpreter.interpret.call(null,G__81361,G__81362));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg81106 = (function (){var G__81363 = ctx;
var G__81364 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81363,G__81364) : sci.impl.interpreter.interpret.call(null,G__81363,G__81364));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg81107 = (function (){var G__81365 = ctx;
var G__81366 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81365,G__81366) : sci.impl.interpreter.interpret.call(null,G__81365,G__81366));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg81108 = (function (){var G__81367 = ctx;
var G__81368 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81367,G__81368) : sci.impl.interpreter.interpret.call(null,G__81367,G__81368));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg81100,arg81101,arg81102,arg81103,arg81104,arg81105,arg81106,arg81107,arg81108) : f.call(null,arg81100,arg81101,arg81102,arg81103,arg81104,arg81105,arg81106,arg81107,arg81108));

break;
case (10):
var arg81109 = (function (){var G__81369 = ctx;
var G__81370 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81369,G__81370) : sci.impl.interpreter.interpret.call(null,G__81369,G__81370));
})();
var args__$1 = cljs.core.rest(args);
var arg81110 = (function (){var G__81371 = ctx;
var G__81372 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81371,G__81372) : sci.impl.interpreter.interpret.call(null,G__81371,G__81372));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81111 = (function (){var G__81373 = ctx;
var G__81374 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81373,G__81374) : sci.impl.interpreter.interpret.call(null,G__81373,G__81374));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81112 = (function (){var G__81375 = ctx;
var G__81376 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81375,G__81376) : sci.impl.interpreter.interpret.call(null,G__81375,G__81376));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg81113 = (function (){var G__81380 = ctx;
var G__81381 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81380,G__81381) : sci.impl.interpreter.interpret.call(null,G__81380,G__81381));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg81114 = (function (){var G__81382 = ctx;
var G__81383 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81382,G__81383) : sci.impl.interpreter.interpret.call(null,G__81382,G__81383));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg81115 = (function (){var G__81384 = ctx;
var G__81385 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81384,G__81385) : sci.impl.interpreter.interpret.call(null,G__81384,G__81385));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg81116 = (function (){var G__81386 = ctx;
var G__81387 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81386,G__81387) : sci.impl.interpreter.interpret.call(null,G__81386,G__81387));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg81117 = (function (){var G__81388 = ctx;
var G__81389 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81388,G__81389) : sci.impl.interpreter.interpret.call(null,G__81388,G__81389));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg81118 = (function (){var G__81390 = ctx;
var G__81391 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81390,G__81391) : sci.impl.interpreter.interpret.call(null,G__81390,G__81391));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg81109,arg81110,arg81111,arg81112,arg81113,arg81114,arg81115,arg81116,arg81117,arg81118) : f.call(null,arg81109,arg81110,arg81111,arg81112,arg81113,arg81114,arg81115,arg81116,arg81117,arg81118));

break;
case (11):
var arg81119 = (function (){var G__81392 = ctx;
var G__81393 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81392,G__81393) : sci.impl.interpreter.interpret.call(null,G__81392,G__81393));
})();
var args__$1 = cljs.core.rest(args);
var arg81120 = (function (){var G__81394 = ctx;
var G__81395 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81394,G__81395) : sci.impl.interpreter.interpret.call(null,G__81394,G__81395));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81121 = (function (){var G__81396 = ctx;
var G__81397 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81396,G__81397) : sci.impl.interpreter.interpret.call(null,G__81396,G__81397));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81122 = (function (){var G__81398 = ctx;
var G__81399 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81398,G__81399) : sci.impl.interpreter.interpret.call(null,G__81398,G__81399));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg81123 = (function (){var G__81401 = ctx;
var G__81402 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81401,G__81402) : sci.impl.interpreter.interpret.call(null,G__81401,G__81402));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg81124 = (function (){var G__81403 = ctx;
var G__81404 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81403,G__81404) : sci.impl.interpreter.interpret.call(null,G__81403,G__81404));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg81125 = (function (){var G__81406 = ctx;
var G__81407 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81406,G__81407) : sci.impl.interpreter.interpret.call(null,G__81406,G__81407));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg81126 = (function (){var G__81408 = ctx;
var G__81409 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81408,G__81409) : sci.impl.interpreter.interpret.call(null,G__81408,G__81409));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg81127 = (function (){var G__81410 = ctx;
var G__81411 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81410,G__81411) : sci.impl.interpreter.interpret.call(null,G__81410,G__81411));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg81128 = (function (){var G__81416 = ctx;
var G__81417 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81416,G__81417) : sci.impl.interpreter.interpret.call(null,G__81416,G__81417));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg81129 = (function (){var G__81419 = ctx;
var G__81420 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81419,G__81420) : sci.impl.interpreter.interpret.call(null,G__81419,G__81420));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg81119,arg81120,arg81121,arg81122,arg81123,arg81124,arg81125,arg81126,arg81127,arg81128,arg81129) : f.call(null,arg81119,arg81120,arg81121,arg81122,arg81123,arg81124,arg81125,arg81126,arg81127,arg81128,arg81129));

break;
case (12):
var arg81130 = (function (){var G__81421 = ctx;
var G__81422 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81421,G__81422) : sci.impl.interpreter.interpret.call(null,G__81421,G__81422));
})();
var args__$1 = cljs.core.rest(args);
var arg81131 = (function (){var G__81424 = ctx;
var G__81425 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81424,G__81425) : sci.impl.interpreter.interpret.call(null,G__81424,G__81425));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81132 = (function (){var G__81426 = ctx;
var G__81427 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81426,G__81427) : sci.impl.interpreter.interpret.call(null,G__81426,G__81427));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81133 = (function (){var G__81428 = ctx;
var G__81429 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81428,G__81429) : sci.impl.interpreter.interpret.call(null,G__81428,G__81429));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg81134 = (function (){var G__81430 = ctx;
var G__81431 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81430,G__81431) : sci.impl.interpreter.interpret.call(null,G__81430,G__81431));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg81135 = (function (){var G__81432 = ctx;
var G__81433 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81432,G__81433) : sci.impl.interpreter.interpret.call(null,G__81432,G__81433));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg81136 = (function (){var G__81435 = ctx;
var G__81436 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81435,G__81436) : sci.impl.interpreter.interpret.call(null,G__81435,G__81436));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg81137 = (function (){var G__81437 = ctx;
var G__81438 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81437,G__81438) : sci.impl.interpreter.interpret.call(null,G__81437,G__81438));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg81138 = (function (){var G__81439 = ctx;
var G__81440 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81439,G__81440) : sci.impl.interpreter.interpret.call(null,G__81439,G__81440));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg81139 = (function (){var G__81441 = ctx;
var G__81442 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81441,G__81442) : sci.impl.interpreter.interpret.call(null,G__81441,G__81442));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg81140 = (function (){var G__81444 = ctx;
var G__81445 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81444,G__81445) : sci.impl.interpreter.interpret.call(null,G__81444,G__81445));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg81141 = (function (){var G__81447 = ctx;
var G__81448 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81447,G__81448) : sci.impl.interpreter.interpret.call(null,G__81447,G__81448));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg81130,arg81131,arg81132,arg81133,arg81134,arg81135,arg81136,arg81137,arg81138,arg81139,arg81140,arg81141) : f.call(null,arg81130,arg81131,arg81132,arg81133,arg81134,arg81135,arg81136,arg81137,arg81138,arg81139,arg81140,arg81141));

break;
case (13):
var arg81142 = (function (){var G__81449 = ctx;
var G__81450 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81449,G__81450) : sci.impl.interpreter.interpret.call(null,G__81449,G__81450));
})();
var args__$1 = cljs.core.rest(args);
var arg81143 = (function (){var G__81451 = ctx;
var G__81452 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81451,G__81452) : sci.impl.interpreter.interpret.call(null,G__81451,G__81452));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81144 = (function (){var G__81456 = ctx;
var G__81457 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81456,G__81457) : sci.impl.interpreter.interpret.call(null,G__81456,G__81457));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81145 = (function (){var G__81460 = ctx;
var G__81461 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81460,G__81461) : sci.impl.interpreter.interpret.call(null,G__81460,G__81461));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg81146 = (function (){var G__81466 = ctx;
var G__81467 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81466,G__81467) : sci.impl.interpreter.interpret.call(null,G__81466,G__81467));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg81147 = (function (){var G__81469 = ctx;
var G__81470 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81469,G__81470) : sci.impl.interpreter.interpret.call(null,G__81469,G__81470));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg81148 = (function (){var G__81471 = ctx;
var G__81472 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81471,G__81472) : sci.impl.interpreter.interpret.call(null,G__81471,G__81472));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg81149 = (function (){var G__81473 = ctx;
var G__81474 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81473,G__81474) : sci.impl.interpreter.interpret.call(null,G__81473,G__81474));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg81150 = (function (){var G__81475 = ctx;
var G__81476 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81475,G__81476) : sci.impl.interpreter.interpret.call(null,G__81475,G__81476));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg81151 = (function (){var G__81477 = ctx;
var G__81478 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81477,G__81478) : sci.impl.interpreter.interpret.call(null,G__81477,G__81478));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg81152 = (function (){var G__81480 = ctx;
var G__81481 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81480,G__81481) : sci.impl.interpreter.interpret.call(null,G__81480,G__81481));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg81153 = (function (){var G__81483 = ctx;
var G__81484 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81483,G__81484) : sci.impl.interpreter.interpret.call(null,G__81483,G__81484));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg81154 = (function (){var G__81487 = ctx;
var G__81488 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81487,G__81488) : sci.impl.interpreter.interpret.call(null,G__81487,G__81488));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg81142,arg81143,arg81144,arg81145,arg81146,arg81147,arg81148,arg81149,arg81150,arg81151,arg81152,arg81153,arg81154) : f.call(null,arg81142,arg81143,arg81144,arg81145,arg81146,arg81147,arg81148,arg81149,arg81150,arg81151,arg81152,arg81153,arg81154));

break;
case (14):
var arg81155 = (function (){var G__81490 = ctx;
var G__81491 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81490,G__81491) : sci.impl.interpreter.interpret.call(null,G__81490,G__81491));
})();
var args__$1 = cljs.core.rest(args);
var arg81156 = (function (){var G__81492 = ctx;
var G__81493 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81492,G__81493) : sci.impl.interpreter.interpret.call(null,G__81492,G__81493));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81157 = (function (){var G__81494 = ctx;
var G__81495 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81494,G__81495) : sci.impl.interpreter.interpret.call(null,G__81494,G__81495));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81158 = (function (){var G__81496 = ctx;
var G__81497 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81496,G__81497) : sci.impl.interpreter.interpret.call(null,G__81496,G__81497));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg81159 = (function (){var G__81498 = ctx;
var G__81499 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81498,G__81499) : sci.impl.interpreter.interpret.call(null,G__81498,G__81499));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg81160 = (function (){var G__81500 = ctx;
var G__81501 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81500,G__81501) : sci.impl.interpreter.interpret.call(null,G__81500,G__81501));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg81161 = (function (){var G__81503 = ctx;
var G__81504 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81503,G__81504) : sci.impl.interpreter.interpret.call(null,G__81503,G__81504));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg81162 = (function (){var G__81506 = ctx;
var G__81507 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81506,G__81507) : sci.impl.interpreter.interpret.call(null,G__81506,G__81507));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg81163 = (function (){var G__81510 = ctx;
var G__81511 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81510,G__81511) : sci.impl.interpreter.interpret.call(null,G__81510,G__81511));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg81164 = (function (){var G__81512 = ctx;
var G__81513 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81512,G__81513) : sci.impl.interpreter.interpret.call(null,G__81512,G__81513));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg81165 = (function (){var G__81514 = ctx;
var G__81515 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81514,G__81515) : sci.impl.interpreter.interpret.call(null,G__81514,G__81515));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg81166 = (function (){var G__81516 = ctx;
var G__81517 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81516,G__81517) : sci.impl.interpreter.interpret.call(null,G__81516,G__81517));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg81167 = (function (){var G__81518 = ctx;
var G__81519 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81518,G__81519) : sci.impl.interpreter.interpret.call(null,G__81518,G__81519));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg81168 = (function (){var G__81520 = ctx;
var G__81521 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81520,G__81521) : sci.impl.interpreter.interpret.call(null,G__81520,G__81521));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg81155,arg81156,arg81157,arg81158,arg81159,arg81160,arg81161,arg81162,arg81163,arg81164,arg81165,arg81166,arg81167,arg81168) : f.call(null,arg81155,arg81156,arg81157,arg81158,arg81159,arg81160,arg81161,arg81162,arg81163,arg81164,arg81165,arg81166,arg81167,arg81168));

break;
case (15):
var arg81169 = (function (){var G__81522 = ctx;
var G__81523 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81522,G__81523) : sci.impl.interpreter.interpret.call(null,G__81522,G__81523));
})();
var args__$1 = cljs.core.rest(args);
var arg81170 = (function (){var G__81524 = ctx;
var G__81525 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81524,G__81525) : sci.impl.interpreter.interpret.call(null,G__81524,G__81525));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81171 = (function (){var G__81526 = ctx;
var G__81527 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81526,G__81527) : sci.impl.interpreter.interpret.call(null,G__81526,G__81527));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81172 = (function (){var G__81529 = ctx;
var G__81530 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81529,G__81530) : sci.impl.interpreter.interpret.call(null,G__81529,G__81530));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg81173 = (function (){var G__81531 = ctx;
var G__81532 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81531,G__81532) : sci.impl.interpreter.interpret.call(null,G__81531,G__81532));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg81174 = (function (){var G__81534 = ctx;
var G__81535 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81534,G__81535) : sci.impl.interpreter.interpret.call(null,G__81534,G__81535));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg81175 = (function (){var G__81537 = ctx;
var G__81538 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81537,G__81538) : sci.impl.interpreter.interpret.call(null,G__81537,G__81538));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg81176 = (function (){var G__81540 = ctx;
var G__81541 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81540,G__81541) : sci.impl.interpreter.interpret.call(null,G__81540,G__81541));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg81177 = (function (){var G__81542 = ctx;
var G__81543 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81542,G__81543) : sci.impl.interpreter.interpret.call(null,G__81542,G__81543));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg81178 = (function (){var G__81544 = ctx;
var G__81545 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81544,G__81545) : sci.impl.interpreter.interpret.call(null,G__81544,G__81545));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg81179 = (function (){var G__81546 = ctx;
var G__81547 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81546,G__81547) : sci.impl.interpreter.interpret.call(null,G__81546,G__81547));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg81180 = (function (){var G__81548 = ctx;
var G__81549 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81548,G__81549) : sci.impl.interpreter.interpret.call(null,G__81548,G__81549));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg81181 = (function (){var G__81550 = ctx;
var G__81551 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81550,G__81551) : sci.impl.interpreter.interpret.call(null,G__81550,G__81551));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg81182 = (function (){var G__81554 = ctx;
var G__81555 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81554,G__81555) : sci.impl.interpreter.interpret.call(null,G__81554,G__81555));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg81183 = (function (){var G__81556 = ctx;
var G__81557 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81556,G__81557) : sci.impl.interpreter.interpret.call(null,G__81556,G__81557));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg81169,arg81170,arg81171,arg81172,arg81173,arg81174,arg81175,arg81176,arg81177,arg81178,arg81179,arg81180,arg81181,arg81182,arg81183) : f.call(null,arg81169,arg81170,arg81171,arg81172,arg81173,arg81174,arg81175,arg81176,arg81177,arg81178,arg81179,arg81180,arg81181,arg81182,arg81183));

break;
case (16):
var arg81184 = (function (){var G__81562 = ctx;
var G__81563 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81562,G__81563) : sci.impl.interpreter.interpret.call(null,G__81562,G__81563));
})();
var args__$1 = cljs.core.rest(args);
var arg81185 = (function (){var G__81566 = ctx;
var G__81567 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81566,G__81567) : sci.impl.interpreter.interpret.call(null,G__81566,G__81567));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81186 = (function (){var G__81570 = ctx;
var G__81571 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81570,G__81571) : sci.impl.interpreter.interpret.call(null,G__81570,G__81571));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81187 = (function (){var G__81573 = ctx;
var G__81574 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81573,G__81574) : sci.impl.interpreter.interpret.call(null,G__81573,G__81574));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg81188 = (function (){var G__81576 = ctx;
var G__81577 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81576,G__81577) : sci.impl.interpreter.interpret.call(null,G__81576,G__81577));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg81189 = (function (){var G__81579 = ctx;
var G__81580 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81579,G__81580) : sci.impl.interpreter.interpret.call(null,G__81579,G__81580));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg81190 = (function (){var G__81583 = ctx;
var G__81584 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81583,G__81584) : sci.impl.interpreter.interpret.call(null,G__81583,G__81584));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg81191 = (function (){var G__81585 = ctx;
var G__81586 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81585,G__81586) : sci.impl.interpreter.interpret.call(null,G__81585,G__81586));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg81192 = (function (){var G__81588 = ctx;
var G__81589 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81588,G__81589) : sci.impl.interpreter.interpret.call(null,G__81588,G__81589));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg81193 = (function (){var G__81590 = ctx;
var G__81591 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81590,G__81591) : sci.impl.interpreter.interpret.call(null,G__81590,G__81591));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg81194 = (function (){var G__81592 = ctx;
var G__81593 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81592,G__81593) : sci.impl.interpreter.interpret.call(null,G__81592,G__81593));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg81195 = (function (){var G__81594 = ctx;
var G__81595 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81594,G__81595) : sci.impl.interpreter.interpret.call(null,G__81594,G__81595));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg81196 = (function (){var G__81596 = ctx;
var G__81597 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81596,G__81597) : sci.impl.interpreter.interpret.call(null,G__81596,G__81597));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg81197 = (function (){var G__81599 = ctx;
var G__81600 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81599,G__81600) : sci.impl.interpreter.interpret.call(null,G__81599,G__81600));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg81198 = (function (){var G__81601 = ctx;
var G__81602 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81601,G__81602) : sci.impl.interpreter.interpret.call(null,G__81601,G__81602));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg81199 = (function (){var G__81605 = ctx;
var G__81606 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81605,G__81606) : sci.impl.interpreter.interpret.call(null,G__81605,G__81606));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg81184,arg81185,arg81186,arg81187,arg81188,arg81189,arg81190,arg81191,arg81192,arg81193,arg81194,arg81195,arg81196,arg81197,arg81198,arg81199) : f.call(null,arg81184,arg81185,arg81186,arg81187,arg81188,arg81189,arg81190,arg81191,arg81192,arg81193,arg81194,arg81195,arg81196,arg81197,arg81198,arg81199));

break;
case (17):
var arg81200 = (function (){var G__81608 = ctx;
var G__81609 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81608,G__81609) : sci.impl.interpreter.interpret.call(null,G__81608,G__81609));
})();
var args__$1 = cljs.core.rest(args);
var arg81201 = (function (){var G__81610 = ctx;
var G__81611 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81610,G__81611) : sci.impl.interpreter.interpret.call(null,G__81610,G__81611));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81202 = (function (){var G__81613 = ctx;
var G__81614 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81613,G__81614) : sci.impl.interpreter.interpret.call(null,G__81613,G__81614));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81203 = (function (){var G__81615 = ctx;
var G__81616 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81615,G__81616) : sci.impl.interpreter.interpret.call(null,G__81615,G__81616));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg81204 = (function (){var G__81617 = ctx;
var G__81618 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81617,G__81618) : sci.impl.interpreter.interpret.call(null,G__81617,G__81618));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg81205 = (function (){var G__81619 = ctx;
var G__81620 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81619,G__81620) : sci.impl.interpreter.interpret.call(null,G__81619,G__81620));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg81206 = (function (){var G__81621 = ctx;
var G__81622 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81621,G__81622) : sci.impl.interpreter.interpret.call(null,G__81621,G__81622));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg81207 = (function (){var G__81623 = ctx;
var G__81624 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81623,G__81624) : sci.impl.interpreter.interpret.call(null,G__81623,G__81624));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg81208 = (function (){var G__81626 = ctx;
var G__81627 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81626,G__81627) : sci.impl.interpreter.interpret.call(null,G__81626,G__81627));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg81209 = (function (){var G__81628 = ctx;
var G__81629 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81628,G__81629) : sci.impl.interpreter.interpret.call(null,G__81628,G__81629));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg81210 = (function (){var G__81634 = ctx;
var G__81635 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81634,G__81635) : sci.impl.interpreter.interpret.call(null,G__81634,G__81635));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg81211 = (function (){var G__81636 = ctx;
var G__81637 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81636,G__81637) : sci.impl.interpreter.interpret.call(null,G__81636,G__81637));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg81212 = (function (){var G__81638 = ctx;
var G__81639 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81638,G__81639) : sci.impl.interpreter.interpret.call(null,G__81638,G__81639));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg81213 = (function (){var G__81640 = ctx;
var G__81641 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81640,G__81641) : sci.impl.interpreter.interpret.call(null,G__81640,G__81641));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg81214 = (function (){var G__81642 = ctx;
var G__81643 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81642,G__81643) : sci.impl.interpreter.interpret.call(null,G__81642,G__81643));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg81215 = (function (){var G__81644 = ctx;
var G__81645 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81644,G__81645) : sci.impl.interpreter.interpret.call(null,G__81644,G__81645));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg81216 = (function (){var G__81646 = ctx;
var G__81647 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81646,G__81647) : sci.impl.interpreter.interpret.call(null,G__81646,G__81647));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg81200,arg81201,arg81202,arg81203,arg81204,arg81205,arg81206,arg81207,arg81208,arg81209,arg81210,arg81211,arg81212,arg81213,arg81214,arg81215,arg81216) : f.call(null,arg81200,arg81201,arg81202,arg81203,arg81204,arg81205,arg81206,arg81207,arg81208,arg81209,arg81210,arg81211,arg81212,arg81213,arg81214,arg81215,arg81216));

break;
case (18):
var arg81217 = (function (){var G__81649 = ctx;
var G__81650 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81649,G__81650) : sci.impl.interpreter.interpret.call(null,G__81649,G__81650));
})();
var args__$1 = cljs.core.rest(args);
var arg81218 = (function (){var G__81651 = ctx;
var G__81652 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81651,G__81652) : sci.impl.interpreter.interpret.call(null,G__81651,G__81652));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81219 = (function (){var G__81653 = ctx;
var G__81654 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81653,G__81654) : sci.impl.interpreter.interpret.call(null,G__81653,G__81654));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81220 = (function (){var G__81655 = ctx;
var G__81656 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81655,G__81656) : sci.impl.interpreter.interpret.call(null,G__81655,G__81656));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg81221 = (function (){var G__81657 = ctx;
var G__81658 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81657,G__81658) : sci.impl.interpreter.interpret.call(null,G__81657,G__81658));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg81222 = (function (){var G__81659 = ctx;
var G__81660 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81659,G__81660) : sci.impl.interpreter.interpret.call(null,G__81659,G__81660));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg81223 = (function (){var G__81661 = ctx;
var G__81662 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81661,G__81662) : sci.impl.interpreter.interpret.call(null,G__81661,G__81662));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg81224 = (function (){var G__81663 = ctx;
var G__81664 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81663,G__81664) : sci.impl.interpreter.interpret.call(null,G__81663,G__81664));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg81225 = (function (){var G__81665 = ctx;
var G__81666 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81665,G__81666) : sci.impl.interpreter.interpret.call(null,G__81665,G__81666));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg81226 = (function (){var G__81667 = ctx;
var G__81668 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81667,G__81668) : sci.impl.interpreter.interpret.call(null,G__81667,G__81668));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg81227 = (function (){var G__81669 = ctx;
var G__81670 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81669,G__81670) : sci.impl.interpreter.interpret.call(null,G__81669,G__81670));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg81228 = (function (){var G__81671 = ctx;
var G__81672 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81671,G__81672) : sci.impl.interpreter.interpret.call(null,G__81671,G__81672));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg81229 = (function (){var G__81673 = ctx;
var G__81674 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81673,G__81674) : sci.impl.interpreter.interpret.call(null,G__81673,G__81674));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg81230 = (function (){var G__81675 = ctx;
var G__81676 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81675,G__81676) : sci.impl.interpreter.interpret.call(null,G__81675,G__81676));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg81231 = (function (){var G__81677 = ctx;
var G__81678 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81677,G__81678) : sci.impl.interpreter.interpret.call(null,G__81677,G__81678));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg81232 = (function (){var G__81679 = ctx;
var G__81680 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81679,G__81680) : sci.impl.interpreter.interpret.call(null,G__81679,G__81680));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg81233 = (function (){var G__81681 = ctx;
var G__81682 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81681,G__81682) : sci.impl.interpreter.interpret.call(null,G__81681,G__81682));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg81234 = (function (){var G__81683 = ctx;
var G__81684 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81683,G__81684) : sci.impl.interpreter.interpret.call(null,G__81683,G__81684));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg81217,arg81218,arg81219,arg81220,arg81221,arg81222,arg81223,arg81224,arg81225,arg81226,arg81227,arg81228,arg81229,arg81230,arg81231,arg81232,arg81233,arg81234) : f.call(null,arg81217,arg81218,arg81219,arg81220,arg81221,arg81222,arg81223,arg81224,arg81225,arg81226,arg81227,arg81228,arg81229,arg81230,arg81231,arg81232,arg81233,arg81234));

break;
case (19):
var arg81235 = (function (){var G__81685 = ctx;
var G__81686 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81685,G__81686) : sci.impl.interpreter.interpret.call(null,G__81685,G__81686));
})();
var args__$1 = cljs.core.rest(args);
var arg81236 = (function (){var G__81693 = ctx;
var G__81694 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81693,G__81694) : sci.impl.interpreter.interpret.call(null,G__81693,G__81694));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81237 = (function (){var G__81695 = ctx;
var G__81696 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81695,G__81696) : sci.impl.interpreter.interpret.call(null,G__81695,G__81696));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81238 = (function (){var G__81697 = ctx;
var G__81698 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81697,G__81698) : sci.impl.interpreter.interpret.call(null,G__81697,G__81698));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg81239 = (function (){var G__81699 = ctx;
var G__81700 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81699,G__81700) : sci.impl.interpreter.interpret.call(null,G__81699,G__81700));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg81240 = (function (){var G__81702 = ctx;
var G__81703 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81702,G__81703) : sci.impl.interpreter.interpret.call(null,G__81702,G__81703));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg81241 = (function (){var G__81706 = ctx;
var G__81707 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81706,G__81707) : sci.impl.interpreter.interpret.call(null,G__81706,G__81707));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg81242 = (function (){var G__81708 = ctx;
var G__81709 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81708,G__81709) : sci.impl.interpreter.interpret.call(null,G__81708,G__81709));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg81243 = (function (){var G__81710 = ctx;
var G__81711 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81710,G__81711) : sci.impl.interpreter.interpret.call(null,G__81710,G__81711));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg81244 = (function (){var G__81712 = ctx;
var G__81713 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81712,G__81713) : sci.impl.interpreter.interpret.call(null,G__81712,G__81713));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg81245 = (function (){var G__81714 = ctx;
var G__81715 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81714,G__81715) : sci.impl.interpreter.interpret.call(null,G__81714,G__81715));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg81246 = (function (){var G__81717 = ctx;
var G__81718 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81717,G__81718) : sci.impl.interpreter.interpret.call(null,G__81717,G__81718));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg81247 = (function (){var G__81721 = ctx;
var G__81722 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81721,G__81722) : sci.impl.interpreter.interpret.call(null,G__81721,G__81722));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg81248 = (function (){var G__81724 = ctx;
var G__81725 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81724,G__81725) : sci.impl.interpreter.interpret.call(null,G__81724,G__81725));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg81249 = (function (){var G__81726 = ctx;
var G__81727 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81726,G__81727) : sci.impl.interpreter.interpret.call(null,G__81726,G__81727));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg81250 = (function (){var G__81728 = ctx;
var G__81729 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81728,G__81729) : sci.impl.interpreter.interpret.call(null,G__81728,G__81729));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg81251 = (function (){var G__81730 = ctx;
var G__81731 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81730,G__81731) : sci.impl.interpreter.interpret.call(null,G__81730,G__81731));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg81252 = (function (){var G__81732 = ctx;
var G__81733 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81732,G__81733) : sci.impl.interpreter.interpret.call(null,G__81732,G__81733));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg81253 = (function (){var G__81734 = ctx;
var G__81735 = cljs.core.first(args__$18);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81734,G__81735) : sci.impl.interpreter.interpret.call(null,G__81734,G__81735));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg81235,arg81236,arg81237,arg81238,arg81239,arg81240,arg81241,arg81242,arg81243,arg81244,arg81245,arg81246,arg81247,arg81248,arg81249,arg81250,arg81251,arg81252,arg81253) : f.call(null,arg81235,arg81236,arg81237,arg81238,arg81239,arg81240,arg81241,arg81242,arg81243,arg81244,arg81245,arg81246,arg81247,arg81248,arg81249,arg81250,arg81251,arg81252,arg81253));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__67191_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__67191_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__67191_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.interpreter.eval_special_call = (function sci$impl$interpreter$eval_special_call(ctx,f_sym,expr){
var G__81740 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__81740)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_instance_method_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__81740)){
return sci.impl.interpreter.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"import","import",241030818,null),G__81740)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_import,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__81740)){
return sci.impl.interpreter.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__81740)){
return sci.impl.interpreter.eval_if(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__81740)){
return sci.impl.interpreter.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),G__81740)){
return sci.impl.interpreter.macroexpand(ctx,(function (){var G__81743 = ctx;
var G__81744 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81743,G__81744) : sci.impl.interpreter.interpret.call(null,G__81743,G__81744));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__81740)){
return sci.impl.interpreter.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__81740)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_let,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__81740)){
return sci.impl.interpreter.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"use","use",-205850897,null),G__81740)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_use,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__81740)){
return sci.impl.interpreter.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__81740)){
return sci.impl.interpreter.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__81740)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__81740)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_constructor_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),G__81740)){
return sci.impl.interpreter.macroexpand_1(ctx,(function (){var G__81748 = ctx;
var G__81749 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81748,G__81749) : sci.impl.interpreter.interpret.call(null,G__81748,G__81749));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__81740)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_refer,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__81740)){
return (new cljs.core.LazySeq(null,(function (){var G__81751 = ctx;
var G__81752 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81751,G__81752) : sci.impl.interpreter.interpret.call(null,G__81751,G__81752));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__81740)){
return sci.impl.interpreter.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__81740)){
return sci.impl.interpreter.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"resolve","resolve",56086045,null),G__81740)){
return sci.impl.interpreter.eval_resolve(ctx,cljs.core.second(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__81740)){
return sci.impl.interpreter.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__81740)].join('')));

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
}catch (e81753){if((e81753 instanceof Error)){
var e = e81753;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e81753;

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
var ret = ((cljs.core.not(op))?expr:(function (){var G__81762 = op;
var G__81762__$1 = (((G__81762 instanceof cljs.core.Keyword))?G__81762.fqn:null);
switch (G__81762__$1) {
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
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__81758_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__81758_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__81758_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__81759_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__81759_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__81759_SHARP_));
}),cljs.core.vals(expr)));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__81760_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__81760_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__81760_SHARP_));
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
var G__82465 = cljs.core.rest(exprs);
var G__82466 = (function (){var G__81770 = ctx;
var G__81771 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__81770,G__81771) : sci.impl.interpreter.eval_form.call(null,G__81770,G__81771));
})();
exprs = G__82465;
ret = G__82466;
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
var G__82472 = ret__$1;
ret = G__82472;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__81777 = arguments.length;
switch (G__81777) {
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
