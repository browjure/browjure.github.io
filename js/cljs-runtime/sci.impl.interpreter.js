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
var G__127416 = xs;
args__$2 = G__127416;
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
var G__127418 = xs;
args__$2 = G__127418;
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
var len__4736__auto___127420 = arguments.length;
var i__4737__auto___127421 = (0);
while(true){
if((i__4737__auto___127421 < len__4736__auto___127420)){
args__4742__auto__.push((arguments[i__4737__auto___127421]));

var G__127422 = (i__4737__auto___127421 + (1));
i__4737__auto___127421 = G__127422;
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
var G__127424 = ctx__$2;
var G__127425 = rest_let_bindings;
ctx__$1 = G__127424;
let_bindings__$1 = G__127425;
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
var G__127426 = nexprs;
exprs__$1 = G__127426;
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
(sci.impl.interpreter.eval_let.cljs$lang$applyTo = (function (seq126132){
var G__126133 = cljs.core.first(seq126132);
var seq126132__$1 = cljs.core.next(seq126132);
var G__126134 = cljs.core.first(seq126132__$1);
var seq126132__$2 = cljs.core.next(seq126132__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__126133,G__126134,seq126132__$2);
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
sci.impl.interpreter.eval_def = (function sci$impl$interpreter$eval_def(ctx,p__126159){
var vec__126162 = p__126159;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126162,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126162,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126162,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126162,(3),null);
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
var v = (cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1)))?(function (){var G__126174 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__126174,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__126174;
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
var vec__126184 = libspec;
var seq__126185 = cljs.core.seq(vec__126184);
var first__126186 = cljs.core.first(seq__126185);
var seq__126185__$1 = cljs.core.next(seq__126185);
var lib_name = first__126186;
var opts = seq__126185__$1;
var ret = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),lib_name], null);
var G__126190 = opts;
var vec__126191 = G__126190;
var seq__126192 = cljs.core.seq(vec__126191);
var first__126193 = cljs.core.first(seq__126192);
var seq__126192__$1 = cljs.core.next(seq__126192);
var opt_name = first__126193;
var first__126193__$1 = cljs.core.first(seq__126192__$1);
var seq__126192__$2 = cljs.core.next(seq__126192__$1);
var fst_opt = first__126193__$1;
var rst_opts = seq__126192__$2;
var ret__$1 = ret;
var G__126190__$1 = G__126190;
while(true){
var ret__$2 = ret__$1;
var vec__126207 = G__126190__$1;
var seq__126208 = cljs.core.seq(vec__126207);
var first__126209 = cljs.core.first(seq__126208);
var seq__126208__$1 = cljs.core.next(seq__126208);
var opt_name__$1 = first__126209;
var first__126209__$1 = cljs.core.first(seq__126208__$1);
var seq__126208__$2 = cljs.core.next(seq__126208__$1);
var fst_opt__$1 = first__126209__$1;
var rst_opts__$1 = seq__126208__$2;
if(cljs.core.not(opt_name__$1)){
return ret__$2;
} else {
var G__126213 = opt_name__$1;
var G__126213__$1 = (((G__126213 instanceof cljs.core.Keyword))?G__126213.fqn:null);
switch (G__126213__$1) {
case "as":
var G__127433 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"as","as",1148689641),fst_opt__$1);
var G__127434 = rst_opts__$1;
ret__$1 = G__127433;
G__126190__$1 = G__127434;
continue;

break;
case "reload":
case "reload-all":
case "verbose":
var G__127435 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"reload","reload",863702807),true);
var G__127436 = cljs.core.cons(fst_opt__$1,rst_opts__$1);
ret__$1 = G__127435;
G__126190__$1 = G__127436;
continue;

break;
case "refer":
case "rename":
case "exclude":
case "only":
var G__127437 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,opt_name__$1,fst_opt__$1);
var G__127438 = rst_opts__$1;
ret__$1 = G__127437;
G__126190__$1 = G__127438;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__126213__$1)].join('')));

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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__126221){
var vec__126222 = p__126221;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126222,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126222,(1),null);
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
sci.impl.interpreter.handle_require_libspec_env = (function sci$impl$interpreter$handle_require_libspec_env(env,use_QMARK_,current_ns,the_loaded_ns,lib_name,p__126236){
var map__126237 = p__126236;
var map__126237__$1 = (((((!((map__126237 == null))))?(((((map__126237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126237):map__126237);
var _parsed_libspec = map__126237__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126237__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126237__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126237__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126237__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126237__$1,new cljs.core.Keyword(null,"only","only",1907811652));
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
var vec__126257 = temp__5751__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126257,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126257,(1),null);
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
var map__126269 = sci.impl.interpreter.parse_libspec(libspec);
var map__126269__$1 = (((((!((map__126269 == null))))?(((((map__126269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126269):map__126269);
var parsed_libspec = map__126269__$1;
var lib_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126269__$1,new cljs.core.Keyword(null,"lib-name","lib-name",1158024282));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126269__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
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
var temp__5751__auto____$2 = (function (){var G__126277 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib_name], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__126277) : load_fn.call(null,G__126277));
})();
if(cljs.core.truth_(temp__5751__auto____$2)){
var map__126280 = temp__5751__auto____$2;
var map__126280__$1 = (((((!((map__126280 == null))))?(((((map__126280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126280):map__126280);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126280__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126280__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__126291_127460 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY);
var G__126292_127461 = source;
(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(G__126291_127460,G__126292_127461) : sci.impl.interpreter.eval_string_STAR_.call(null,G__126291_127460,G__126292_127461));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e126284){if((e126284 instanceof Error)){
var e_127462 = e126284;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib_name], 0));

throw e_127462;
} else {
throw e126284;

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
var len__4736__auto___127463 = arguments.length;
var i__4737__auto___127464 = (0);
while(true){
if((i__4737__auto___127464 < len__4736__auto___127463)){
args__4742__auto__.push((arguments[i__4737__auto___127464]));

var G__127466 = (i__4737__auto___127464 + (1));
i__4737__auto___127464 = G__127466;
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
var ret = (function (){var G__126325 = ctx;
var G__126326 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126325,G__126326) : sci.impl.interpreter.interpret.call(null,G__126325,G__126326));
})();
if((ret instanceof cljs.core.Symbol)){
var G__127467 = (function (){var G__126328 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__126328,current_libspec);
} else {
return G__126328;
}
})();
var G__127468 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
var G__127469 = cljs.core.next(args__$1);
libspecs = G__127467;
current_libspec = G__127468;
args__$1 = G__127469;
continue;
} else {
if((ret instanceof cljs.core.Keyword)){
var G__127471 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_libspec,ret));
var G__127472 = null;
var G__127473 = cljs.core.next(args__$1);
libspecs = G__127471;
current_libspec = G__127472;
args__$1 = G__127473;
continue;
} else {
var G__127474 = (function (){var G__126332 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__126332,current_libspec);
} else {
return G__126332;
}
})();
var G__127475 = ret;
var G__127476 = cljs.core.next(args__$1);
libspecs = G__127474;
current_libspec = G__127475;
args__$1 = G__127476;
continue;

}
}
} else {
var libspecs__$1 = (function (){var G__126333 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__126333,current_libspec);
} else {
return G__126333;
}
})();
return cljs.core.run_BANG_(((function (libspecs,current_libspec,args__$1,libspecs__$1){
return (function (p1__126301_SHARP_){
return sci.impl.interpreter.handle_require_libspec(ctx,p1__126301_SHARP_);
});})(libspecs,current_libspec,args__$1,libspecs__$1))
,libspecs__$1);
}
break;
}
}));

(sci.impl.interpreter.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_require.cljs$lang$applyTo = (function (seq126305){
var G__126306 = cljs.core.first(seq126305);
var seq126305__$1 = cljs.core.next(seq126305);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__126306,seq126305__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.interpreter.eval_require);
sci.impl.interpreter.eval_use = (function sci$impl$interpreter$eval_use(var_args){
var args__4742__auto__ = [];
var len__4736__auto___127478 = arguments.length;
var i__4737__auto___127479 = (0);
while(true){
if((i__4737__auto___127479 < len__4736__auto___127478)){
args__4742__auto__.push((arguments[i__4737__auto___127479]));

var G__127480 = (i__4737__auto___127479 + (1));
i__4737__auto___127479 = G__127480;
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
(sci.impl.interpreter.eval_use.cljs$lang$applyTo = (function (seq126337){
var G__126338 = cljs.core.first(seq126337);
var seq126337__$1 = cljs.core.next(seq126337);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__126338,seq126337__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.interpreter.eval_use);
sci.impl.interpreter.eval_case = (function sci$impl$interpreter$eval_case(ctx,p__126347){
var vec__126348 = p__126347;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126348,(0),null);
var map__126351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126348,(1),null);
var map__126351__$1 = (((((!((map__126351 == null))))?(((((map__126351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126351):map__126351);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126351__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126351__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126351__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.interpreter.interpret.call(null,ctx,case_val));
var temp__5751__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__126360 = temp__5751__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126360,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126360,(1),null);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.interpreter.interpret.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__126364 = ctx;
var G__126365 = cljs.core.second(case_default);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126364,G__126365) : sci.impl.interpreter.interpret.call(null,G__126364,G__126365));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.interpreter.eval_try = (function sci$impl$interpreter$eval_try(ctx,expr){
var map__126370 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__126370__$1 = (((((!((map__126370 == null))))?(((((map__126370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126370):map__126370);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126370__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126370__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126370__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var _STAR_in_try_STAR__orig_val__126385 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__126386 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__126386);

try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.interpreter.interpret.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__126385);
}}catch (e126374){if((e126374 instanceof Error)){
var e = e126374;
var temp__5751__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.interpreter","try-result","sci.impl.interpreter/try-result",1789456125),(function (){var G__126379 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__126380 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126379,G__126380) : sci.impl.interpreter.interpret.call(null,G__126379,G__126380));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__126381 = temp__5751__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126381,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126381,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e126374;

}
}finally {(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.interpreter.interpret.call(null,ctx,finally$));
}});
sci.impl.interpreter.eval_throw = (function sci$impl$interpreter$eval_throw(ctx,p__126389){
var vec__126390 = p__126389;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126390,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126390,(1),null);
var ex__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.interpret.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.interpreter.eval_static_method_invocation = (function sci$impl$interpreter$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__126393_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__126393_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__126393_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.interpreter.eval_constructor_invocation = (function sci$impl$interpreter$eval_constructor_invocation(ctx,p__126398){
var vec__126399 = p__126398;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126399,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126399,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126399,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__126397_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__126397_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__126397_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.interpreter.eval_instance_method_invocation = (function sci$impl$interpreter$eval_instance_method_invocation(p__126411,p__126412){
var map__126414 = p__126411;
var map__126414__$1 = (((((!((map__126414 == null))))?(((((map__126414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__126414):map__126414);
var ctx = map__126414__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126414__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__126415 = p__126412;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126415,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126415,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126415,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126415,(3),null);
var _expr = vec__126415;
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

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__126407_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__126407_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__126407_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
}
});
sci.impl.interpreter.eval_in_ns = (function sci$impl$interpreter$eval_in_ns(ctx,p__126439){
var vec__126441 = p__126439;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126441,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126441,(1),null);
var ns_sym = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.interpreter.interpret.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.interpreter.eval_refer = (function sci$impl$interpreter$eval_refer(var_args){
var args__4742__auto__ = [];
var len__4736__auto___127496 = arguments.length;
var i__4737__auto___127497 = (0);
while(true){
if((i__4737__auto___127497 < len__4736__auto___127496)){
args__4742__auto__.push((arguments[i__4737__auto___127497]));

var G__127498 = (i__4737__auto___127497 + (1));
i__4737__auto___127497 = G__127498;
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
var vec__126459 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126459,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126459,(1),null);
var G__126462_127499 = k;
var G__126462_127500__$1 = (((G__126462_127499 instanceof cljs.core.Keyword))?G__126462_127499.fqn:null);
switch (G__126462_127500__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__126462_127499,G__126462_127500__$1,vec__126459,k,v,ns_sym__$1){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__126462_127499,G__126462_127500__$1,vec__126459,k,v,ns_sym__$1))
);

break;
case "only":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__126462_127499,G__126462_127500__$1,vec__126459,k,v,ns_sym__$1){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym__$1], null));
var other_vars = cljs.core.select_keys(other_ns,v);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),cljs.core.merge,other_vars);
});})(exprs__$1,G__126462_127499,G__126462_127500__$1,vec__126459,k,v,ns_sym__$1))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__126462_127500__$1)].join('')));

}

var G__127505 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__127505;
continue;
} else {
return null;
}
break;
}
}));

(sci.impl.interpreter.eval_refer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.interpreter.eval_refer.cljs$lang$applyTo = (function (seq126451){
var G__126452 = cljs.core.first(seq126451);
var seq126451__$1 = cljs.core.next(seq126451);
var G__126453 = cljs.core.first(seq126451__$1);
var seq126451__$2 = cljs.core.next(seq126451__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__126452,G__126453,seq126451__$2);
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
var f__$2 = (cljs.core.truth_((function (){var G__126490 = new cljs.core.Keyword(null,"needs-ctx","needs-ctx",-35514403);
var G__126491 = (function (){var G__126492 = f__$1;
var G__126492__$1 = (((G__126492 == null))?null:cljs.core.meta(G__126492));
if((G__126492__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(G__126492__$1);
}
})();
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__126490,G__126491) : sci.impl.utils.kw_identical_QMARK_.call(null,G__126490,G__126491));
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
var len__4736__auto___127513 = arguments.length;
var i__4737__auto___127514 = (0);
while(true){
if((i__4737__auto___127514 < len__4736__auto___127513)){
args__4742__auto__.push((arguments[i__4737__auto___127514]));

var G__127515 = (i__4737__auto___127514 + (1));
i__4737__auto___127514 = G__127515;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sci.impl.interpreter.eval_import.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,import_symbols_or_lists){
var specs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__126503_SHARP_){
if(((cljs.core.seq_QMARK_(p1__126503_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(p1__126503_SHARP_))))){
return cljs.core.second(p1__126503_SHARP_);
} else {
return p1__126503_SHARP_;
}
}),import_symbols_or_lists);
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.core.run_BANG_((function (spec){
var vec__126519 = (((spec instanceof cljs.core.Symbol))?(function (){var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec);
var last_dot = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(s,".");
var package_PLUS_class_name = (cljs.core.truth_(last_dot)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),last_dot)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(last_dot + (1)),((s).length)))], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null)], null));
return package_PLUS_class_name;
})():(function (){var p = cljs.core.first(spec);
var cs = cljs.core.rest(spec);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cs], null);
})());
var package$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126519,(0),null);
var classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126519,(1),null);
var seq__126527 = cljs.core.seq(classes);
var chunk__126528 = null;
var count__126529 = (0);
var i__126530 = (0);
while(true){
if((i__126530 < count__126529)){
var class$ = chunk__126528.cljs$core$IIndexed$_nth$arity$2(null,i__126530);
var fq_class_name_127518 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(package$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):class$));
if(cljs.core.truth_(sci.impl.interop.resolve_class(ctx,fq_class_name_127518))){
var cnn_127519 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_127519,new cljs.core.Keyword(null,"imports","imports",-1249933394),class$], null),fq_class_name_127518);
} else {
var temp__5751__auto___127520 = sci.impl.records.resolve_record_class.cljs$core$IFn$_invoke$arity$3(ctx,package$,class$);
if(cljs.core.truth_(temp__5751__auto___127520)){
var rec_127521 = temp__5751__auto___127520;
var cnn_127522 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_127522,class$], null),rec_127521);
} else {
throw (new Error(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fq_class_name_127518)].join('')));
}
}


var G__127523 = seq__126527;
var G__127524 = chunk__126528;
var G__127525 = count__126529;
var G__127526 = (i__126530 + (1));
seq__126527 = G__127523;
chunk__126528 = G__127524;
count__126529 = G__127525;
i__126530 = G__127526;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__126527);
if(temp__5753__auto__){
var seq__126527__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__126527__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__126527__$1);
var G__127527 = cljs.core.chunk_rest(seq__126527__$1);
var G__127528 = c__4556__auto__;
var G__127529 = cljs.core.count(c__4556__auto__);
var G__127530 = (0);
seq__126527 = G__127527;
chunk__126528 = G__127528;
count__126529 = G__127529;
i__126530 = G__127530;
continue;
} else {
var class$ = cljs.core.first(seq__126527__$1);
var fq_class_name_127531 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(package$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):class$));
if(cljs.core.truth_(sci.impl.interop.resolve_class(ctx,fq_class_name_127531))){
var cnn_127532 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_127532,new cljs.core.Keyword(null,"imports","imports",-1249933394),class$], null),fq_class_name_127531);
} else {
var temp__5751__auto___127533 = sci.impl.records.resolve_record_class.cljs$core$IFn$_invoke$arity$3(ctx,package$,class$);
if(cljs.core.truth_(temp__5751__auto___127533)){
var rec_127534 = temp__5751__auto___127533;
var cnn_127535 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_127535,class$], null),rec_127534);
} else {
throw (new Error(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fq_class_name_127531)].join('')));
}
}


var G__127536 = cljs.core.next(seq__126527__$1);
var G__127537 = null;
var G__127538 = (0);
var G__127539 = (0);
seq__126527 = G__127536;
chunk__126528 = G__127537;
count__126529 = G__127538;
i__126530 = G__127539;
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
(sci.impl.interpreter.eval_import.cljs$lang$applyTo = (function (seq126507){
var G__126508 = cljs.core.first(seq126507);
var seq126507__$1 = cljs.core.next(seq126507);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__126508,seq126507__$1);
}));

sci.impl.interpreter.eval_set_BANG_ = (function sci$impl$interpreter$eval_set_BANG_(ctx,p__126549){
var vec__126550 = p__126549;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126550,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126550,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126550,(2),null);
var obj__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.interpreter.interpret.call(null,ctx,obj));
var v__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.interpreter.interpret.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}
});
sci.impl.interpreter.eval_do_STAR_ = (function sci$impl$interpreter$eval_do_STAR_(ctx,exprs){
var G__126557 = exprs;
var vec__126559 = G__126557;
var seq__126560 = cljs.core.seq(vec__126559);
var first__126561 = cljs.core.first(seq__126560);
var seq__126560__$1 = cljs.core.next(seq__126560);
var expr = first__126561;
var exprs__$1 = seq__126560__$1;
var G__126557__$1 = G__126557;
while(true){
var vec__126562 = G__126557__$1;
var seq__126563 = cljs.core.seq(vec__126562);
var first__126564 = cljs.core.first(seq__126563);
var seq__126563__$1 = cljs.core.next(seq__126563);
var expr__$1 = first__126564;
var exprs__$2 = seq__126563__$1;
var ret = (function (){try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.interpreter.interpret.call(null,ctx,expr__$1));
}catch (e126565){if((e126565 instanceof Error)){
var e = e126565;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr__$1);
} else {
throw e126565;

}
}})();
var temp__5751__auto__ = cljs.core.seq(exprs__$2);
if(temp__5751__auto__){
var exprs__$3 = temp__5751__auto__;
var G__127540 = exprs__$3;
G__126557__$1 = G__127540;
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
var G__126770 = cljs.core.count(args);
switch (G__126770) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg126579 = (function (){var G__126773 = ctx;
var G__126774 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126773,G__126774) : sci.impl.interpreter.interpret.call(null,G__126773,G__126774));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg126579) : f.call(null,arg126579));

break;
case (2):
var arg126580 = (function (){var G__126777 = ctx;
var G__126778 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126777,G__126778) : sci.impl.interpreter.interpret.call(null,G__126777,G__126778));
})();
var args__$1 = cljs.core.rest(args);
var arg126581 = (function (){var G__126780 = ctx;
var G__126781 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126780,G__126781) : sci.impl.interpreter.interpret.call(null,G__126780,G__126781));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg126580,arg126581) : f.call(null,arg126580,arg126581));

break;
case (3):
var arg126582 = (function (){var G__126783 = ctx;
var G__126784 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126783,G__126784) : sci.impl.interpreter.interpret.call(null,G__126783,G__126784));
})();
var args__$1 = cljs.core.rest(args);
var arg126583 = (function (){var G__126787 = ctx;
var G__126788 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126787,G__126788) : sci.impl.interpreter.interpret.call(null,G__126787,G__126788));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg126584 = (function (){var G__126793 = ctx;
var G__126795 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126793,G__126795) : sci.impl.interpreter.interpret.call(null,G__126793,G__126795));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg126582,arg126583,arg126584) : f.call(null,arg126582,arg126583,arg126584));

break;
case (4):
var arg126585 = (function (){var G__126799 = ctx;
var G__126800 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126799,G__126800) : sci.impl.interpreter.interpret.call(null,G__126799,G__126800));
})();
var args__$1 = cljs.core.rest(args);
var arg126586 = (function (){var G__126801 = ctx;
var G__126802 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126801,G__126802) : sci.impl.interpreter.interpret.call(null,G__126801,G__126802));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg126587 = (function (){var G__126805 = ctx;
var G__126806 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126805,G__126806) : sci.impl.interpreter.interpret.call(null,G__126805,G__126806));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg126588 = (function (){var G__126810 = ctx;
var G__126811 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126810,G__126811) : sci.impl.interpreter.interpret.call(null,G__126810,G__126811));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg126585,arg126586,arg126587,arg126588) : f.call(null,arg126585,arg126586,arg126587,arg126588));

break;
case (5):
var arg126589 = (function (){var G__126815 = ctx;
var G__126816 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126815,G__126816) : sci.impl.interpreter.interpret.call(null,G__126815,G__126816));
})();
var args__$1 = cljs.core.rest(args);
var arg126590 = (function (){var G__126818 = ctx;
var G__126819 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126818,G__126819) : sci.impl.interpreter.interpret.call(null,G__126818,G__126819));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg126591 = (function (){var G__126821 = ctx;
var G__126822 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126821,G__126822) : sci.impl.interpreter.interpret.call(null,G__126821,G__126822));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg126592 = (function (){var G__126823 = ctx;
var G__126824 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126823,G__126824) : sci.impl.interpreter.interpret.call(null,G__126823,G__126824));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg126593 = (function (){var G__126827 = ctx;
var G__126828 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126827,G__126828) : sci.impl.interpreter.interpret.call(null,G__126827,G__126828));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg126589,arg126590,arg126591,arg126592,arg126593) : f.call(null,arg126589,arg126590,arg126591,arg126592,arg126593));

break;
case (6):
var arg126594 = (function (){var G__126832 = ctx;
var G__126833 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126832,G__126833) : sci.impl.interpreter.interpret.call(null,G__126832,G__126833));
})();
var args__$1 = cljs.core.rest(args);
var arg126595 = (function (){var G__126834 = ctx;
var G__126835 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126834,G__126835) : sci.impl.interpreter.interpret.call(null,G__126834,G__126835));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg126596 = (function (){var G__126836 = ctx;
var G__126837 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126836,G__126837) : sci.impl.interpreter.interpret.call(null,G__126836,G__126837));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg126597 = (function (){var G__126839 = ctx;
var G__126841 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126839,G__126841) : sci.impl.interpreter.interpret.call(null,G__126839,G__126841));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg126598 = (function (){var G__126844 = ctx;
var G__126845 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126844,G__126845) : sci.impl.interpreter.interpret.call(null,G__126844,G__126845));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg126599 = (function (){var G__126847 = ctx;
var G__126848 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126847,G__126848) : sci.impl.interpreter.interpret.call(null,G__126847,G__126848));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg126594,arg126595,arg126596,arg126597,arg126598,arg126599) : f.call(null,arg126594,arg126595,arg126596,arg126597,arg126598,arg126599));

break;
case (7):
var arg126600 = (function (){var G__126849 = ctx;
var G__126850 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126849,G__126850) : sci.impl.interpreter.interpret.call(null,G__126849,G__126850));
})();
var args__$1 = cljs.core.rest(args);
var arg126601 = (function (){var G__126852 = ctx;
var G__126853 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126852,G__126853) : sci.impl.interpreter.interpret.call(null,G__126852,G__126853));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg126602 = (function (){var G__126855 = ctx;
var G__126856 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126855,G__126856) : sci.impl.interpreter.interpret.call(null,G__126855,G__126856));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg126603 = (function (){var G__126858 = ctx;
var G__126859 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126858,G__126859) : sci.impl.interpreter.interpret.call(null,G__126858,G__126859));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg126604 = (function (){var G__126862 = ctx;
var G__126863 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126862,G__126863) : sci.impl.interpreter.interpret.call(null,G__126862,G__126863));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg126605 = (function (){var G__126865 = ctx;
var G__126866 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126865,G__126866) : sci.impl.interpreter.interpret.call(null,G__126865,G__126866));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg126606 = (function (){var G__126869 = ctx;
var G__126870 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126869,G__126870) : sci.impl.interpreter.interpret.call(null,G__126869,G__126870));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg126600,arg126601,arg126602,arg126603,arg126604,arg126605,arg126606) : f.call(null,arg126600,arg126601,arg126602,arg126603,arg126604,arg126605,arg126606));

break;
case (8):
var arg126607 = (function (){var G__126871 = ctx;
var G__126872 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126871,G__126872) : sci.impl.interpreter.interpret.call(null,G__126871,G__126872));
})();
var args__$1 = cljs.core.rest(args);
var arg126608 = (function (){var G__126873 = ctx;
var G__126874 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126873,G__126874) : sci.impl.interpreter.interpret.call(null,G__126873,G__126874));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg126609 = (function (){var G__126876 = ctx;
var G__126877 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126876,G__126877) : sci.impl.interpreter.interpret.call(null,G__126876,G__126877));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg126610 = (function (){var G__126878 = ctx;
var G__126879 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126878,G__126879) : sci.impl.interpreter.interpret.call(null,G__126878,G__126879));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg126611 = (function (){var G__126882 = ctx;
var G__126883 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126882,G__126883) : sci.impl.interpreter.interpret.call(null,G__126882,G__126883));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg126612 = (function (){var G__126884 = ctx;
var G__126885 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126884,G__126885) : sci.impl.interpreter.interpret.call(null,G__126884,G__126885));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg126613 = (function (){var G__126888 = ctx;
var G__126889 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126888,G__126889) : sci.impl.interpreter.interpret.call(null,G__126888,G__126889));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg126614 = (function (){var G__126890 = ctx;
var G__126891 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126890,G__126891) : sci.impl.interpreter.interpret.call(null,G__126890,G__126891));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg126607,arg126608,arg126609,arg126610,arg126611,arg126612,arg126613,arg126614) : f.call(null,arg126607,arg126608,arg126609,arg126610,arg126611,arg126612,arg126613,arg126614));

break;
case (9):
var arg126615 = (function (){var G__126898 = ctx;
var G__126899 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126898,G__126899) : sci.impl.interpreter.interpret.call(null,G__126898,G__126899));
})();
var args__$1 = cljs.core.rest(args);
var arg126616 = (function (){var G__126905 = ctx;
var G__126906 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126905,G__126906) : sci.impl.interpreter.interpret.call(null,G__126905,G__126906));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg126617 = (function (){var G__126908 = ctx;
var G__126909 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126908,G__126909) : sci.impl.interpreter.interpret.call(null,G__126908,G__126909));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg126618 = (function (){var G__126914 = ctx;
var G__126915 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126914,G__126915) : sci.impl.interpreter.interpret.call(null,G__126914,G__126915));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg126619 = (function (){var G__126917 = ctx;
var G__126918 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126917,G__126918) : sci.impl.interpreter.interpret.call(null,G__126917,G__126918));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg126620 = (function (){var G__126920 = ctx;
var G__126921 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126920,G__126921) : sci.impl.interpreter.interpret.call(null,G__126920,G__126921));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg126621 = (function (){var G__126923 = ctx;
var G__126924 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126923,G__126924) : sci.impl.interpreter.interpret.call(null,G__126923,G__126924));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg126622 = (function (){var G__126927 = ctx;
var G__126928 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126927,G__126928) : sci.impl.interpreter.interpret.call(null,G__126927,G__126928));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg126623 = (function (){var G__126930 = ctx;
var G__126931 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126930,G__126931) : sci.impl.interpreter.interpret.call(null,G__126930,G__126931));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg126615,arg126616,arg126617,arg126618,arg126619,arg126620,arg126621,arg126622,arg126623) : f.call(null,arg126615,arg126616,arg126617,arg126618,arg126619,arg126620,arg126621,arg126622,arg126623));

break;
case (10):
var arg126624 = (function (){var G__126933 = ctx;
var G__126934 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126933,G__126934) : sci.impl.interpreter.interpret.call(null,G__126933,G__126934));
})();
var args__$1 = cljs.core.rest(args);
var arg126625 = (function (){var G__126936 = ctx;
var G__126937 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126936,G__126937) : sci.impl.interpreter.interpret.call(null,G__126936,G__126937));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg126626 = (function (){var G__126939 = ctx;
var G__126940 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126939,G__126940) : sci.impl.interpreter.interpret.call(null,G__126939,G__126940));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg126627 = (function (){var G__126941 = ctx;
var G__126942 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126941,G__126942) : sci.impl.interpreter.interpret.call(null,G__126941,G__126942));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg126628 = (function (){var G__126944 = ctx;
var G__126945 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126944,G__126945) : sci.impl.interpreter.interpret.call(null,G__126944,G__126945));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg126629 = (function (){var G__126946 = ctx;
var G__126947 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126946,G__126947) : sci.impl.interpreter.interpret.call(null,G__126946,G__126947));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg126630 = (function (){var G__126948 = ctx;
var G__126949 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126948,G__126949) : sci.impl.interpreter.interpret.call(null,G__126948,G__126949));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg126631 = (function (){var G__126950 = ctx;
var G__126951 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126950,G__126951) : sci.impl.interpreter.interpret.call(null,G__126950,G__126951));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg126632 = (function (){var G__126954 = ctx;
var G__126955 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126954,G__126955) : sci.impl.interpreter.interpret.call(null,G__126954,G__126955));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg126633 = (function (){var G__126957 = ctx;
var G__126958 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126957,G__126958) : sci.impl.interpreter.interpret.call(null,G__126957,G__126958));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg126624,arg126625,arg126626,arg126627,arg126628,arg126629,arg126630,arg126631,arg126632,arg126633) : f.call(null,arg126624,arg126625,arg126626,arg126627,arg126628,arg126629,arg126630,arg126631,arg126632,arg126633));

break;
case (11):
var arg126634 = (function (){var G__126963 = ctx;
var G__126964 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126963,G__126964) : sci.impl.interpreter.interpret.call(null,G__126963,G__126964));
})();
var args__$1 = cljs.core.rest(args);
var arg126635 = (function (){var G__126965 = ctx;
var G__126966 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126965,G__126966) : sci.impl.interpreter.interpret.call(null,G__126965,G__126966));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg126636 = (function (){var G__126967 = ctx;
var G__126968 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126967,G__126968) : sci.impl.interpreter.interpret.call(null,G__126967,G__126968));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg126637 = (function (){var G__126970 = ctx;
var G__126971 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126970,G__126971) : sci.impl.interpreter.interpret.call(null,G__126970,G__126971));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg126638 = (function (){var G__126974 = ctx;
var G__126975 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126974,G__126975) : sci.impl.interpreter.interpret.call(null,G__126974,G__126975));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg126639 = (function (){var G__126977 = ctx;
var G__126978 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126977,G__126978) : sci.impl.interpreter.interpret.call(null,G__126977,G__126978));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg126640 = (function (){var G__126979 = ctx;
var G__126980 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126979,G__126980) : sci.impl.interpreter.interpret.call(null,G__126979,G__126980));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg126641 = (function (){var G__126983 = ctx;
var G__126984 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126983,G__126984) : sci.impl.interpreter.interpret.call(null,G__126983,G__126984));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg126642 = (function (){var G__126985 = ctx;
var G__126986 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126985,G__126986) : sci.impl.interpreter.interpret.call(null,G__126985,G__126986));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg126643 = (function (){var G__126987 = ctx;
var G__126988 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126987,G__126988) : sci.impl.interpreter.interpret.call(null,G__126987,G__126988));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg126644 = (function (){var G__126992 = ctx;
var G__126993 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126992,G__126993) : sci.impl.interpreter.interpret.call(null,G__126992,G__126993));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg126634,arg126635,arg126636,arg126637,arg126638,arg126639,arg126640,arg126641,arg126642,arg126643,arg126644) : f.call(null,arg126634,arg126635,arg126636,arg126637,arg126638,arg126639,arg126640,arg126641,arg126642,arg126643,arg126644));

break;
case (12):
var arg126645 = (function (){var G__126995 = ctx;
var G__126996 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126995,G__126996) : sci.impl.interpreter.interpret.call(null,G__126995,G__126996));
})();
var args__$1 = cljs.core.rest(args);
var arg126646 = (function (){var G__126998 = ctx;
var G__126999 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__126998,G__126999) : sci.impl.interpreter.interpret.call(null,G__126998,G__126999));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg126647 = (function (){var G__127001 = ctx;
var G__127002 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127001,G__127002) : sci.impl.interpreter.interpret.call(null,G__127001,G__127002));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg126648 = (function (){var G__127003 = ctx;
var G__127004 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127003,G__127004) : sci.impl.interpreter.interpret.call(null,G__127003,G__127004));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg126649 = (function (){var G__127005 = ctx;
var G__127006 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127005,G__127006) : sci.impl.interpreter.interpret.call(null,G__127005,G__127006));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg126650 = (function (){var G__127008 = ctx;
var G__127009 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127008,G__127009) : sci.impl.interpreter.interpret.call(null,G__127008,G__127009));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg126651 = (function (){var G__127011 = ctx;
var G__127012 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127011,G__127012) : sci.impl.interpreter.interpret.call(null,G__127011,G__127012));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg126652 = (function (){var G__127013 = ctx;
var G__127014 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127013,G__127014) : sci.impl.interpreter.interpret.call(null,G__127013,G__127014));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg126653 = (function (){var G__127016 = ctx;
var G__127017 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127016,G__127017) : sci.impl.interpreter.interpret.call(null,G__127016,G__127017));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg126654 = (function (){var G__127019 = ctx;
var G__127020 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127019,G__127020) : sci.impl.interpreter.interpret.call(null,G__127019,G__127020));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg126655 = (function (){var G__127022 = ctx;
var G__127023 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127022,G__127023) : sci.impl.interpreter.interpret.call(null,G__127022,G__127023));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg126656 = (function (){var G__127024 = ctx;
var G__127025 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127024,G__127025) : sci.impl.interpreter.interpret.call(null,G__127024,G__127025));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg126645,arg126646,arg126647,arg126648,arg126649,arg126650,arg126651,arg126652,arg126653,arg126654,arg126655,arg126656) : f.call(null,arg126645,arg126646,arg126647,arg126648,arg126649,arg126650,arg126651,arg126652,arg126653,arg126654,arg126655,arg126656));

break;
case (13):
var arg126657 = (function (){var G__127029 = ctx;
var G__127030 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127029,G__127030) : sci.impl.interpreter.interpret.call(null,G__127029,G__127030));
})();
var args__$1 = cljs.core.rest(args);
var arg126658 = (function (){var G__127032 = ctx;
var G__127033 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127032,G__127033) : sci.impl.interpreter.interpret.call(null,G__127032,G__127033));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg126659 = (function (){var G__127034 = ctx;
var G__127035 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127034,G__127035) : sci.impl.interpreter.interpret.call(null,G__127034,G__127035));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg126660 = (function (){var G__127036 = ctx;
var G__127037 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127036,G__127037) : sci.impl.interpreter.interpret.call(null,G__127036,G__127037));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg126661 = (function (){var G__127040 = ctx;
var G__127041 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127040,G__127041) : sci.impl.interpreter.interpret.call(null,G__127040,G__127041));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg126662 = (function (){var G__127044 = ctx;
var G__127045 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127044,G__127045) : sci.impl.interpreter.interpret.call(null,G__127044,G__127045));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg126663 = (function (){var G__127046 = ctx;
var G__127047 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127046,G__127047) : sci.impl.interpreter.interpret.call(null,G__127046,G__127047));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg126664 = (function (){var G__127048 = ctx;
var G__127049 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127048,G__127049) : sci.impl.interpreter.interpret.call(null,G__127048,G__127049));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg126665 = (function (){var G__127051 = ctx;
var G__127052 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127051,G__127052) : sci.impl.interpreter.interpret.call(null,G__127051,G__127052));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg126666 = (function (){var G__127054 = ctx;
var G__127055 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127054,G__127055) : sci.impl.interpreter.interpret.call(null,G__127054,G__127055));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg126667 = (function (){var G__127057 = ctx;
var G__127058 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127057,G__127058) : sci.impl.interpreter.interpret.call(null,G__127057,G__127058));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg126668 = (function (){var G__127059 = ctx;
var G__127060 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127059,G__127060) : sci.impl.interpreter.interpret.call(null,G__127059,G__127060));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg126669 = (function (){var G__127062 = ctx;
var G__127063 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127062,G__127063) : sci.impl.interpreter.interpret.call(null,G__127062,G__127063));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg126657,arg126658,arg126659,arg126660,arg126661,arg126662,arg126663,arg126664,arg126665,arg126666,arg126667,arg126668,arg126669) : f.call(null,arg126657,arg126658,arg126659,arg126660,arg126661,arg126662,arg126663,arg126664,arg126665,arg126666,arg126667,arg126668,arg126669));

break;
case (14):
var arg126670 = (function (){var G__127066 = ctx;
var G__127067 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127066,G__127067) : sci.impl.interpreter.interpret.call(null,G__127066,G__127067));
})();
var args__$1 = cljs.core.rest(args);
var arg126671 = (function (){var G__127069 = ctx;
var G__127070 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127069,G__127070) : sci.impl.interpreter.interpret.call(null,G__127069,G__127070));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg126672 = (function (){var G__127071 = ctx;
var G__127072 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127071,G__127072) : sci.impl.interpreter.interpret.call(null,G__127071,G__127072));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg126673 = (function (){var G__127073 = ctx;
var G__127074 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127073,G__127074) : sci.impl.interpreter.interpret.call(null,G__127073,G__127074));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg126674 = (function (){var G__127076 = ctx;
var G__127077 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127076,G__127077) : sci.impl.interpreter.interpret.call(null,G__127076,G__127077));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg126675 = (function (){var G__127079 = ctx;
var G__127080 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127079,G__127080) : sci.impl.interpreter.interpret.call(null,G__127079,G__127080));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg126676 = (function (){var G__127082 = ctx;
var G__127083 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127082,G__127083) : sci.impl.interpreter.interpret.call(null,G__127082,G__127083));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg126677 = (function (){var G__127085 = ctx;
var G__127086 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127085,G__127086) : sci.impl.interpreter.interpret.call(null,G__127085,G__127086));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg126678 = (function (){var G__127087 = ctx;
var G__127088 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127087,G__127088) : sci.impl.interpreter.interpret.call(null,G__127087,G__127088));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg126679 = (function (){var G__127090 = ctx;
var G__127091 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127090,G__127091) : sci.impl.interpreter.interpret.call(null,G__127090,G__127091));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg126680 = (function (){var G__127092 = ctx;
var G__127093 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127092,G__127093) : sci.impl.interpreter.interpret.call(null,G__127092,G__127093));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg126681 = (function (){var G__127095 = ctx;
var G__127096 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127095,G__127096) : sci.impl.interpreter.interpret.call(null,G__127095,G__127096));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg126682 = (function (){var G__127098 = ctx;
var G__127099 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127098,G__127099) : sci.impl.interpreter.interpret.call(null,G__127098,G__127099));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg126683 = (function (){var G__127100 = ctx;
var G__127101 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127100,G__127101) : sci.impl.interpreter.interpret.call(null,G__127100,G__127101));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg126670,arg126671,arg126672,arg126673,arg126674,arg126675,arg126676,arg126677,arg126678,arg126679,arg126680,arg126681,arg126682,arg126683) : f.call(null,arg126670,arg126671,arg126672,arg126673,arg126674,arg126675,arg126676,arg126677,arg126678,arg126679,arg126680,arg126681,arg126682,arg126683));

break;
case (15):
var arg126684 = (function (){var G__127103 = ctx;
var G__127104 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127103,G__127104) : sci.impl.interpreter.interpret.call(null,G__127103,G__127104));
})();
var args__$1 = cljs.core.rest(args);
var arg126685 = (function (){var G__127105 = ctx;
var G__127106 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127105,G__127106) : sci.impl.interpreter.interpret.call(null,G__127105,G__127106));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg126686 = (function (){var G__127107 = ctx;
var G__127108 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127107,G__127108) : sci.impl.interpreter.interpret.call(null,G__127107,G__127108));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg126687 = (function (){var G__127110 = ctx;
var G__127111 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127110,G__127111) : sci.impl.interpreter.interpret.call(null,G__127110,G__127111));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg126688 = (function (){var G__127113 = ctx;
var G__127114 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127113,G__127114) : sci.impl.interpreter.interpret.call(null,G__127113,G__127114));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg126689 = (function (){var G__127116 = ctx;
var G__127117 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127116,G__127117) : sci.impl.interpreter.interpret.call(null,G__127116,G__127117));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg126690 = (function (){var G__127119 = ctx;
var G__127120 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127119,G__127120) : sci.impl.interpreter.interpret.call(null,G__127119,G__127120));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg126691 = (function (){var G__127121 = ctx;
var G__127122 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127121,G__127122) : sci.impl.interpreter.interpret.call(null,G__127121,G__127122));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg126692 = (function (){var G__127123 = ctx;
var G__127124 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127123,G__127124) : sci.impl.interpreter.interpret.call(null,G__127123,G__127124));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg126693 = (function (){var G__127126 = ctx;
var G__127127 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127126,G__127127) : sci.impl.interpreter.interpret.call(null,G__127126,G__127127));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg126694 = (function (){var G__127128 = ctx;
var G__127129 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127128,G__127129) : sci.impl.interpreter.interpret.call(null,G__127128,G__127129));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg126695 = (function (){var G__127131 = ctx;
var G__127132 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127131,G__127132) : sci.impl.interpreter.interpret.call(null,G__127131,G__127132));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg126696 = (function (){var G__127133 = ctx;
var G__127134 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127133,G__127134) : sci.impl.interpreter.interpret.call(null,G__127133,G__127134));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg126697 = (function (){var G__127135 = ctx;
var G__127136 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127135,G__127136) : sci.impl.interpreter.interpret.call(null,G__127135,G__127136));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg126698 = (function (){var G__127139 = ctx;
var G__127140 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127139,G__127140) : sci.impl.interpreter.interpret.call(null,G__127139,G__127140));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg126684,arg126685,arg126686,arg126687,arg126688,arg126689,arg126690,arg126691,arg126692,arg126693,arg126694,arg126695,arg126696,arg126697,arg126698) : f.call(null,arg126684,arg126685,arg126686,arg126687,arg126688,arg126689,arg126690,arg126691,arg126692,arg126693,arg126694,arg126695,arg126696,arg126697,arg126698));

break;
case (16):
var arg126699 = (function (){var G__127143 = ctx;
var G__127144 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127143,G__127144) : sci.impl.interpreter.interpret.call(null,G__127143,G__127144));
})();
var args__$1 = cljs.core.rest(args);
var arg126700 = (function (){var G__127146 = ctx;
var G__127147 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127146,G__127147) : sci.impl.interpreter.interpret.call(null,G__127146,G__127147));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg126701 = (function (){var G__127149 = ctx;
var G__127150 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127149,G__127150) : sci.impl.interpreter.interpret.call(null,G__127149,G__127150));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg126702 = (function (){var G__127151 = ctx;
var G__127152 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127151,G__127152) : sci.impl.interpreter.interpret.call(null,G__127151,G__127152));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg126703 = (function (){var G__127155 = ctx;
var G__127156 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127155,G__127156) : sci.impl.interpreter.interpret.call(null,G__127155,G__127156));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg126704 = (function (){var G__127157 = ctx;
var G__127158 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127157,G__127158) : sci.impl.interpreter.interpret.call(null,G__127157,G__127158));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg126705 = (function (){var G__127159 = ctx;
var G__127160 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127159,G__127160) : sci.impl.interpreter.interpret.call(null,G__127159,G__127160));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg126706 = (function (){var G__127162 = ctx;
var G__127163 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127162,G__127163) : sci.impl.interpreter.interpret.call(null,G__127162,G__127163));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg126707 = (function (){var G__127165 = ctx;
var G__127166 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127165,G__127166) : sci.impl.interpreter.interpret.call(null,G__127165,G__127166));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg126708 = (function (){var G__127168 = ctx;
var G__127169 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127168,G__127169) : sci.impl.interpreter.interpret.call(null,G__127168,G__127169));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg126709 = (function (){var G__127171 = ctx;
var G__127172 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127171,G__127172) : sci.impl.interpreter.interpret.call(null,G__127171,G__127172));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg126710 = (function (){var G__127175 = ctx;
var G__127176 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127175,G__127176) : sci.impl.interpreter.interpret.call(null,G__127175,G__127176));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg126711 = (function (){var G__127178 = ctx;
var G__127179 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127178,G__127179) : sci.impl.interpreter.interpret.call(null,G__127178,G__127179));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg126712 = (function (){var G__127180 = ctx;
var G__127181 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127180,G__127181) : sci.impl.interpreter.interpret.call(null,G__127180,G__127181));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg126713 = (function (){var G__127183 = ctx;
var G__127184 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127183,G__127184) : sci.impl.interpreter.interpret.call(null,G__127183,G__127184));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg126714 = (function (){var G__127186 = ctx;
var G__127187 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127186,G__127187) : sci.impl.interpreter.interpret.call(null,G__127186,G__127187));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg126699,arg126700,arg126701,arg126702,arg126703,arg126704,arg126705,arg126706,arg126707,arg126708,arg126709,arg126710,arg126711,arg126712,arg126713,arg126714) : f.call(null,arg126699,arg126700,arg126701,arg126702,arg126703,arg126704,arg126705,arg126706,arg126707,arg126708,arg126709,arg126710,arg126711,arg126712,arg126713,arg126714));

break;
case (17):
var arg126715 = (function (){var G__127189 = ctx;
var G__127190 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127189,G__127190) : sci.impl.interpreter.interpret.call(null,G__127189,G__127190));
})();
var args__$1 = cljs.core.rest(args);
var arg126716 = (function (){var G__127191 = ctx;
var G__127192 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127191,G__127192) : sci.impl.interpreter.interpret.call(null,G__127191,G__127192));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg126717 = (function (){var G__127193 = ctx;
var G__127194 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127193,G__127194) : sci.impl.interpreter.interpret.call(null,G__127193,G__127194));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg126718 = (function (){var G__127195 = ctx;
var G__127196 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127195,G__127196) : sci.impl.interpreter.interpret.call(null,G__127195,G__127196));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg126719 = (function (){var G__127197 = ctx;
var G__127198 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127197,G__127198) : sci.impl.interpreter.interpret.call(null,G__127197,G__127198));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg126720 = (function (){var G__127199 = ctx;
var G__127200 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127199,G__127200) : sci.impl.interpreter.interpret.call(null,G__127199,G__127200));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg126721 = (function (){var G__127201 = ctx;
var G__127202 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127201,G__127202) : sci.impl.interpreter.interpret.call(null,G__127201,G__127202));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg126722 = (function (){var G__127203 = ctx;
var G__127204 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127203,G__127204) : sci.impl.interpreter.interpret.call(null,G__127203,G__127204));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg126723 = (function (){var G__127205 = ctx;
var G__127206 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127205,G__127206) : sci.impl.interpreter.interpret.call(null,G__127205,G__127206));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg126724 = (function (){var G__127207 = ctx;
var G__127208 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127207,G__127208) : sci.impl.interpreter.interpret.call(null,G__127207,G__127208));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg126725 = (function (){var G__127209 = ctx;
var G__127210 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127209,G__127210) : sci.impl.interpreter.interpret.call(null,G__127209,G__127210));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg126726 = (function (){var G__127211 = ctx;
var G__127212 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127211,G__127212) : sci.impl.interpreter.interpret.call(null,G__127211,G__127212));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg126727 = (function (){var G__127213 = ctx;
var G__127214 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127213,G__127214) : sci.impl.interpreter.interpret.call(null,G__127213,G__127214));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg126728 = (function (){var G__127215 = ctx;
var G__127216 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127215,G__127216) : sci.impl.interpreter.interpret.call(null,G__127215,G__127216));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg126729 = (function (){var G__127217 = ctx;
var G__127218 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127217,G__127218) : sci.impl.interpreter.interpret.call(null,G__127217,G__127218));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg126730 = (function (){var G__127219 = ctx;
var G__127220 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127219,G__127220) : sci.impl.interpreter.interpret.call(null,G__127219,G__127220));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg126731 = (function (){var G__127221 = ctx;
var G__127222 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127221,G__127222) : sci.impl.interpreter.interpret.call(null,G__127221,G__127222));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg126715,arg126716,arg126717,arg126718,arg126719,arg126720,arg126721,arg126722,arg126723,arg126724,arg126725,arg126726,arg126727,arg126728,arg126729,arg126730,arg126731) : f.call(null,arg126715,arg126716,arg126717,arg126718,arg126719,arg126720,arg126721,arg126722,arg126723,arg126724,arg126725,arg126726,arg126727,arg126728,arg126729,arg126730,arg126731));

break;
case (18):
var arg126732 = (function (){var G__127223 = ctx;
var G__127224 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127223,G__127224) : sci.impl.interpreter.interpret.call(null,G__127223,G__127224));
})();
var args__$1 = cljs.core.rest(args);
var arg126733 = (function (){var G__127225 = ctx;
var G__127226 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127225,G__127226) : sci.impl.interpreter.interpret.call(null,G__127225,G__127226));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg126734 = (function (){var G__127227 = ctx;
var G__127228 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127227,G__127228) : sci.impl.interpreter.interpret.call(null,G__127227,G__127228));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg126735 = (function (){var G__127229 = ctx;
var G__127230 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127229,G__127230) : sci.impl.interpreter.interpret.call(null,G__127229,G__127230));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg126736 = (function (){var G__127231 = ctx;
var G__127232 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127231,G__127232) : sci.impl.interpreter.interpret.call(null,G__127231,G__127232));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg126737 = (function (){var G__127233 = ctx;
var G__127234 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127233,G__127234) : sci.impl.interpreter.interpret.call(null,G__127233,G__127234));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg126738 = (function (){var G__127235 = ctx;
var G__127236 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127235,G__127236) : sci.impl.interpreter.interpret.call(null,G__127235,G__127236));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg126739 = (function (){var G__127237 = ctx;
var G__127238 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127237,G__127238) : sci.impl.interpreter.interpret.call(null,G__127237,G__127238));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg126740 = (function (){var G__127239 = ctx;
var G__127240 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127239,G__127240) : sci.impl.interpreter.interpret.call(null,G__127239,G__127240));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg126741 = (function (){var G__127241 = ctx;
var G__127242 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127241,G__127242) : sci.impl.interpreter.interpret.call(null,G__127241,G__127242));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg126742 = (function (){var G__127243 = ctx;
var G__127244 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127243,G__127244) : sci.impl.interpreter.interpret.call(null,G__127243,G__127244));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg126743 = (function (){var G__127245 = ctx;
var G__127246 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127245,G__127246) : sci.impl.interpreter.interpret.call(null,G__127245,G__127246));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg126744 = (function (){var G__127247 = ctx;
var G__127248 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127247,G__127248) : sci.impl.interpreter.interpret.call(null,G__127247,G__127248));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg126745 = (function (){var G__127249 = ctx;
var G__127250 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127249,G__127250) : sci.impl.interpreter.interpret.call(null,G__127249,G__127250));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg126746 = (function (){var G__127251 = ctx;
var G__127252 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127251,G__127252) : sci.impl.interpreter.interpret.call(null,G__127251,G__127252));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg126747 = (function (){var G__127253 = ctx;
var G__127254 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127253,G__127254) : sci.impl.interpreter.interpret.call(null,G__127253,G__127254));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg126748 = (function (){var G__127255 = ctx;
var G__127256 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127255,G__127256) : sci.impl.interpreter.interpret.call(null,G__127255,G__127256));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg126749 = (function (){var G__127257 = ctx;
var G__127258 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127257,G__127258) : sci.impl.interpreter.interpret.call(null,G__127257,G__127258));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg126732,arg126733,arg126734,arg126735,arg126736,arg126737,arg126738,arg126739,arg126740,arg126741,arg126742,arg126743,arg126744,arg126745,arg126746,arg126747,arg126748,arg126749) : f.call(null,arg126732,arg126733,arg126734,arg126735,arg126736,arg126737,arg126738,arg126739,arg126740,arg126741,arg126742,arg126743,arg126744,arg126745,arg126746,arg126747,arg126748,arg126749));

break;
case (19):
var arg126750 = (function (){var G__127259 = ctx;
var G__127260 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127259,G__127260) : sci.impl.interpreter.interpret.call(null,G__127259,G__127260));
})();
var args__$1 = cljs.core.rest(args);
var arg126751 = (function (){var G__127261 = ctx;
var G__127262 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127261,G__127262) : sci.impl.interpreter.interpret.call(null,G__127261,G__127262));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg126752 = (function (){var G__127264 = ctx;
var G__127265 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127264,G__127265) : sci.impl.interpreter.interpret.call(null,G__127264,G__127265));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg126753 = (function (){var G__127266 = ctx;
var G__127267 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127266,G__127267) : sci.impl.interpreter.interpret.call(null,G__127266,G__127267));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg126754 = (function (){var G__127269 = ctx;
var G__127270 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127269,G__127270) : sci.impl.interpreter.interpret.call(null,G__127269,G__127270));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg126755 = (function (){var G__127271 = ctx;
var G__127272 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127271,G__127272) : sci.impl.interpreter.interpret.call(null,G__127271,G__127272));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg126756 = (function (){var G__127274 = ctx;
var G__127275 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127274,G__127275) : sci.impl.interpreter.interpret.call(null,G__127274,G__127275));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg126757 = (function (){var G__127277 = ctx;
var G__127278 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127277,G__127278) : sci.impl.interpreter.interpret.call(null,G__127277,G__127278));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg126758 = (function (){var G__127279 = ctx;
var G__127280 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127279,G__127280) : sci.impl.interpreter.interpret.call(null,G__127279,G__127280));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg126759 = (function (){var G__127282 = ctx;
var G__127283 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127282,G__127283) : sci.impl.interpreter.interpret.call(null,G__127282,G__127283));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg126760 = (function (){var G__127285 = ctx;
var G__127286 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127285,G__127286) : sci.impl.interpreter.interpret.call(null,G__127285,G__127286));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg126761 = (function (){var G__127287 = ctx;
var G__127288 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127287,G__127288) : sci.impl.interpreter.interpret.call(null,G__127287,G__127288));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg126762 = (function (){var G__127291 = ctx;
var G__127292 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127291,G__127292) : sci.impl.interpreter.interpret.call(null,G__127291,G__127292));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg126763 = (function (){var G__127293 = ctx;
var G__127294 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127293,G__127294) : sci.impl.interpreter.interpret.call(null,G__127293,G__127294));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg126764 = (function (){var G__127295 = ctx;
var G__127296 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127295,G__127296) : sci.impl.interpreter.interpret.call(null,G__127295,G__127296));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg126765 = (function (){var G__127298 = ctx;
var G__127299 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127298,G__127299) : sci.impl.interpreter.interpret.call(null,G__127298,G__127299));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg126766 = (function (){var G__127301 = ctx;
var G__127302 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127301,G__127302) : sci.impl.interpreter.interpret.call(null,G__127301,G__127302));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg126767 = (function (){var G__127304 = ctx;
var G__127305 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127304,G__127305) : sci.impl.interpreter.interpret.call(null,G__127304,G__127305));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg126768 = (function (){var G__127306 = ctx;
var G__127307 = cljs.core.first(args__$18);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127306,G__127307) : sci.impl.interpreter.interpret.call(null,G__127306,G__127307));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg126750,arg126751,arg126752,arg126753,arg126754,arg126755,arg126756,arg126757,arg126758,arg126759,arg126760,arg126761,arg126762,arg126763,arg126764,arg126765,arg126766,arg126767,arg126768) : f.call(null,arg126750,arg126751,arg126752,arg126753,arg126754,arg126755,arg126756,arg126757,arg126758,arg126759,arg126760,arg126761,arg126762,arg126763,arg126764,arg126765,arg126766,arg126767,arg126768));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__67198_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__67198_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__67198_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.interpreter.eval_special_call = (function sci$impl$interpreter$eval_special_call(ctx,f_sym,expr){
var G__127312 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__127312)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_instance_method_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__127312)){
return sci.impl.interpreter.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"import","import",241030818,null),G__127312)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_import,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__127312)){
return sci.impl.interpreter.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__127312)){
return sci.impl.interpreter.eval_if(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__127312)){
return sci.impl.interpreter.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),G__127312)){
return sci.impl.interpreter.macroexpand(ctx,(function (){var G__127315 = ctx;
var G__127316 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127315,G__127316) : sci.impl.interpreter.interpret.call(null,G__127315,G__127316));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__127312)){
return sci.impl.interpreter.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__127312)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_let,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__127312)){
return sci.impl.interpreter.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"use","use",-205850897,null),G__127312)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_use,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__127312)){
return sci.impl.interpreter.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__127312)){
return sci.impl.interpreter.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__127312)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__127312)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_constructor_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),G__127312)){
return sci.impl.interpreter.macroexpand_1(ctx,(function (){var G__127321 = ctx;
var G__127322 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127321,G__127322) : sci.impl.interpreter.interpret.call(null,G__127321,G__127322));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__127312)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_refer,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__127312)){
return (new cljs.core.LazySeq(null,(function (){var G__127325 = ctx;
var G__127326 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__127325,G__127326) : sci.impl.interpreter.interpret.call(null,G__127325,G__127326));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__127312)){
return sci.impl.interpreter.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__127312)){
return sci.impl.interpreter.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"resolve","resolve",56086045,null),G__127312)){
return sci.impl.interpreter.eval_resolve(ctx,cljs.core.second(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__127312)){
return sci.impl.interpreter.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__127312)].join('')));

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
}catch (e127329){if((e127329 instanceof Error)){
var e = e127329;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e127329;

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
var ret = ((cljs.core.not(op))?expr:(function (){var G__127381 = op;
var G__127381__$1 = (((G__127381 instanceof cljs.core.Keyword))?G__127381.fqn:null);
switch (G__127381__$1) {
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
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__127374_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__127374_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__127374_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__127375_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__127375_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__127375_SHARP_));
}),cljs.core.vals(expr)));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__127376_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__127376_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__127376_SHARP_));
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
var G__127590 = cljs.core.rest(exprs);
var G__127591 = (function (){var G__127393 = ctx;
var G__127394 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__127393,G__127394) : sci.impl.interpreter.eval_form.call(null,G__127393,G__127394));
})();
exprs = G__127590;
ret = G__127591;
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
var G__127593 = ret__$1;
ret = G__127593;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__127404 = arguments.length;
switch (G__127404) {
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
