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
var G__83603 = xs;
args__$2 = G__83603;
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
var G__83609 = xs;
args__$2 = G__83609;
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
var len__4736__auto___83611 = arguments.length;
var i__4737__auto___83612 = (0);
while(true){
if((i__4737__auto___83612 < len__4736__auto___83611)){
args__4742__auto__.push((arguments[i__4737__auto___83612]));

var G__83613 = (i__4737__auto___83612 + (1));
i__4737__auto___83612 = G__83613;
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
var G__83618 = ctx__$2;
var G__83619 = rest_let_bindings;
ctx__$1 = G__83618;
let_bindings__$1 = G__83619;
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
var G__83623 = nexprs;
exprs__$1 = G__83623;
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
(sci.impl.interpreter.eval_let.cljs$lang$applyTo = (function (seq82551){
var G__82552 = cljs.core.first(seq82551);
var seq82551__$1 = cljs.core.next(seq82551);
var G__82553 = cljs.core.first(seq82551__$1);
var seq82551__$2 = cljs.core.next(seq82551__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__82552,G__82553,seq82551__$2);
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
sci.impl.interpreter.eval_def = (function sci$impl$interpreter$eval_def(ctx,p__82567){
var vec__82568 = p__82567;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82568,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82568,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82568,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82568,(3),null);
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
var v = (cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1)))?(function (){var G__82572 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__82572,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__82572;
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
var vec__82577 = libspec;
var seq__82578 = cljs.core.seq(vec__82577);
var first__82579 = cljs.core.first(seq__82578);
var seq__82578__$1 = cljs.core.next(seq__82578);
var lib_name = first__82579;
var opts = seq__82578__$1;
var ret = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),lib_name], null);
var G__82583 = opts;
var vec__82584 = G__82583;
var seq__82585 = cljs.core.seq(vec__82584);
var first__82586 = cljs.core.first(seq__82585);
var seq__82585__$1 = cljs.core.next(seq__82585);
var opt_name = first__82586;
var first__82586__$1 = cljs.core.first(seq__82585__$1);
var seq__82585__$2 = cljs.core.next(seq__82585__$1);
var fst_opt = first__82586__$1;
var rst_opts = seq__82585__$2;
var ret__$1 = ret;
var G__82583__$1 = G__82583;
while(true){
var ret__$2 = ret__$1;
var vec__82597 = G__82583__$1;
var seq__82598 = cljs.core.seq(vec__82597);
var first__82599 = cljs.core.first(seq__82598);
var seq__82598__$1 = cljs.core.next(seq__82598);
var opt_name__$1 = first__82599;
var first__82599__$1 = cljs.core.first(seq__82598__$1);
var seq__82598__$2 = cljs.core.next(seq__82598__$1);
var fst_opt__$1 = first__82599__$1;
var rst_opts__$1 = seq__82598__$2;
if(cljs.core.not(opt_name__$1)){
return ret__$2;
} else {
var G__82600 = opt_name__$1;
var G__82600__$1 = (((G__82600 instanceof cljs.core.Keyword))?G__82600.fqn:null);
switch (G__82600__$1) {
case "as":
var G__83638 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"as","as",1148689641),fst_opt__$1);
var G__83639 = rst_opts__$1;
ret__$1 = G__83638;
G__82583__$1 = G__83639;
continue;

break;
case "reload":
case "reload-all":
case "verbose":
var G__83640 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"reload","reload",863702807),true);
var G__83641 = cljs.core.cons(fst_opt__$1,rst_opts__$1);
ret__$1 = G__83640;
G__82583__$1 = G__83641;
continue;

break;
case "refer":
case "rename":
case "exclude":
case "only":
var G__83642 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,opt_name__$1,fst_opt__$1);
var G__83643 = rst_opts__$1;
ret__$1 = G__83642;
G__82583__$1 = G__83643;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__82600__$1)].join('')));

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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__82605){
var vec__82606 = p__82605;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82606,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82606,(1),null);
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
sci.impl.interpreter.handle_require_libspec_env = (function sci$impl$interpreter$handle_require_libspec_env(env,use_QMARK_,current_ns,the_loaded_ns,lib_name,p__82612){
var map__82613 = p__82612;
var map__82613__$1 = (((((!((map__82613 == null))))?(((((map__82613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82613):map__82613);
var _parsed_libspec = map__82613__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82613__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82613__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82613__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82613__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82613__$1,new cljs.core.Keyword(null,"only","only",1907811652));
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
var vec__82620 = temp__5751__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82620,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82620,(1),null);
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
var map__82629 = sci.impl.interpreter.parse_libspec(libspec);
var map__82629__$1 = (((((!((map__82629 == null))))?(((((map__82629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82629):map__82629);
var parsed_libspec = map__82629__$1;
var lib_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82629__$1,new cljs.core.Keyword(null,"lib-name","lib-name",1158024282));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82629__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
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
var temp__5751__auto____$2 = (function (){var G__82631 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib_name], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__82631) : load_fn.call(null,G__82631));
})();
if(cljs.core.truth_(temp__5751__auto____$2)){
var map__82635 = temp__5751__auto____$2;
var map__82635__$1 = (((((!((map__82635 == null))))?(((((map__82635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82635):map__82635);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82635__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82635__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__82641_83670 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY);
var G__82642_83671 = source;
(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(G__82641_83670,G__82642_83671) : sci.impl.interpreter.eval_string_STAR_.call(null,G__82641_83670,G__82642_83671));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e82637){if((e82637 instanceof Error)){
var e_83672 = e82637;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib_name], 0));

throw e_83672;
} else {
throw e82637;

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
var len__4736__auto___83675 = arguments.length;
var i__4737__auto___83676 = (0);
while(true){
if((i__4737__auto___83676 < len__4736__auto___83675)){
args__4742__auto__.push((arguments[i__4737__auto___83676]));

var G__83677 = (i__4737__auto___83676 + (1));
i__4737__auto___83676 = G__83677;
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
var ret = (function (){var G__82663 = ctx;
var G__82664 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__82663,G__82664) : sci.impl.interpreter.interpret.call(null,G__82663,G__82664));
})();
if((ret instanceof cljs.core.Symbol)){
var G__83679 = (function (){var G__82665 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__82665,current_libspec);
} else {
return G__82665;
}
})();
var G__83680 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
var G__83681 = cljs.core.next(args__$1);
libspecs = G__83679;
current_libspec = G__83680;
args__$1 = G__83681;
continue;
} else {
if((ret instanceof cljs.core.Keyword)){
var G__83682 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_libspec,ret));
var G__83683 = null;
var G__83684 = cljs.core.next(args__$1);
libspecs = G__83682;
current_libspec = G__83683;
args__$1 = G__83684;
continue;
} else {
var G__83685 = (function (){var G__82669 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__82669,current_libspec);
} else {
return G__82669;
}
})();
var G__83686 = ret;
var G__83687 = cljs.core.next(args__$1);
libspecs = G__83685;
current_libspec = G__83686;
args__$1 = G__83687;
continue;

}
}
} else {
var libspecs__$1 = (function (){var G__82670 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__82670,current_libspec);
} else {
return G__82670;
}
})();
return cljs.core.run_BANG_(((function (libspecs,current_libspec,args__$1,libspecs__$1){
return (function (p1__82649_SHARP_){
return sci.impl.interpreter.handle_require_libspec(ctx,p1__82649_SHARP_);
});})(libspecs,current_libspec,args__$1,libspecs__$1))
,libspecs__$1);
}
break;
}
}));

(sci.impl.interpreter.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_require.cljs$lang$applyTo = (function (seq82650){
var G__82651 = cljs.core.first(seq82650);
var seq82650__$1 = cljs.core.next(seq82650);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__82651,seq82650__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.interpreter.eval_require);
sci.impl.interpreter.eval_use = (function sci$impl$interpreter$eval_use(var_args){
var args__4742__auto__ = [];
var len__4736__auto___83690 = arguments.length;
var i__4737__auto___83691 = (0);
while(true){
if((i__4737__auto___83691 < len__4736__auto___83690)){
args__4742__auto__.push((arguments[i__4737__auto___83691]));

var G__83692 = (i__4737__auto___83691 + (1));
i__4737__auto___83691 = G__83692;
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
(sci.impl.interpreter.eval_use.cljs$lang$applyTo = (function (seq82671){
var G__82672 = cljs.core.first(seq82671);
var seq82671__$1 = cljs.core.next(seq82671);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__82672,seq82671__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.interpreter.eval_use);
sci.impl.interpreter.eval_case = (function sci$impl$interpreter$eval_case(ctx,p__82678){
var vec__82679 = p__82678;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82679,(0),null);
var map__82682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82679,(1),null);
var map__82682__$1 = (((((!((map__82682 == null))))?(((((map__82682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82682):map__82682);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82682__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82682__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82682__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.interpreter.interpret.call(null,ctx,case_val));
var temp__5751__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__82688 = temp__5751__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82688,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82688,(1),null);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.interpreter.interpret.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__82691 = ctx;
var G__82692 = cljs.core.second(case_default);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__82691,G__82692) : sci.impl.interpreter.interpret.call(null,G__82691,G__82692));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.interpreter.eval_try = (function sci$impl$interpreter$eval_try(ctx,expr){
var map__82696 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__82696__$1 = (((((!((map__82696 == null))))?(((((map__82696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82696):map__82696);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82696__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82696__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82696__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var _STAR_in_try_STAR__orig_val__82710 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__82711 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__82711);

try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.interpreter.interpret.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__82710);
}}catch (e82701){if((e82701 instanceof Error)){
var e = e82701;
var temp__5751__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.interpreter","try-result","sci.impl.interpreter/try-result",1789456125),(function (){var G__82702 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__82703 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__82702,G__82703) : sci.impl.interpreter.interpret.call(null,G__82702,G__82703));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__82707 = temp__5751__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82707,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82707,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e82701;

}
}finally {(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.interpreter.interpret.call(null,ctx,finally$));
}});
sci.impl.interpreter.eval_throw = (function sci$impl$interpreter$eval_throw(ctx,p__82715){
var vec__82716 = p__82715;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82716,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82716,(1),null);
var ex__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.interpret.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.interpreter.eval_static_method_invocation = (function sci$impl$interpreter$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__82719_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__82719_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__82719_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.interpreter.eval_constructor_invocation = (function sci$impl$interpreter$eval_constructor_invocation(ctx,p__82724){
var vec__82725 = p__82724;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82725,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82725,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82725,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__82720_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__82720_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__82720_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.interpreter.eval_instance_method_invocation = (function sci$impl$interpreter$eval_instance_method_invocation(p__82732,p__82733){
var map__82735 = p__82732;
var map__82735__$1 = (((((!((map__82735 == null))))?(((((map__82735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82735):map__82735);
var ctx = map__82735__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82735__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__82736 = p__82733;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82736,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82736,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82736,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82736,(3),null);
var _expr = vec__82736;
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

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__82729_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__82729_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__82729_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
}
});
sci.impl.interpreter.eval_in_ns = (function sci$impl$interpreter$eval_in_ns(ctx,p__82752){
var vec__82753 = p__82752;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82753,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82753,(1),null);
var ns_sym = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.interpreter.interpret.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.interpreter.eval_refer = (function sci$impl$interpreter$eval_refer(var_args){
var args__4742__auto__ = [];
var len__4736__auto___83722 = arguments.length;
var i__4737__auto___83723 = (0);
while(true){
if((i__4737__auto___83723 < len__4736__auto___83722)){
args__4742__auto__.push((arguments[i__4737__auto___83723]));

var G__83725 = (i__4737__auto___83723 + (1));
i__4737__auto___83723 = G__83725;
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
var vec__82765 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82765,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82765,(1),null);
var G__82768_83726 = k;
var G__82768_83727__$1 = (((G__82768_83726 instanceof cljs.core.Keyword))?G__82768_83726.fqn:null);
switch (G__82768_83727__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__82768_83726,G__82768_83727__$1,vec__82765,k,v,ns_sym__$1){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__82768_83726,G__82768_83727__$1,vec__82765,k,v,ns_sym__$1))
);

break;
case "only":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__82768_83726,G__82768_83727__$1,vec__82765,k,v,ns_sym__$1){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym__$1], null));
var other_vars = cljs.core.select_keys(other_ns,v);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),cljs.core.merge,other_vars);
});})(exprs__$1,G__82768_83726,G__82768_83727__$1,vec__82765,k,v,ns_sym__$1))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__82768_83727__$1)].join('')));

}

var G__83729 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__83729;
continue;
} else {
return null;
}
break;
}
}));

(sci.impl.interpreter.eval_refer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.interpreter.eval_refer.cljs$lang$applyTo = (function (seq82758){
var G__82759 = cljs.core.first(seq82758);
var seq82758__$1 = cljs.core.next(seq82758);
var G__82760 = cljs.core.first(seq82758__$1);
var seq82758__$2 = cljs.core.next(seq82758__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__82759,G__82760,seq82758__$2);
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
var f__$2 = (cljs.core.truth_((function (){var G__82774 = new cljs.core.Keyword(null,"needs-ctx","needs-ctx",-35514403);
var G__82775 = (function (){var G__82776 = f__$1;
var G__82776__$1 = (((G__82776 == null))?null:cljs.core.meta(G__82776));
if((G__82776__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(G__82776__$1);
}
})();
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__82774,G__82775) : sci.impl.utils.kw_identical_QMARK_.call(null,G__82774,G__82775));
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
var len__4736__auto___83737 = arguments.length;
var i__4737__auto___83738 = (0);
while(true){
if((i__4737__auto___83738 < len__4736__auto___83737)){
args__4742__auto__.push((arguments[i__4737__auto___83738]));

var G__83739 = (i__4737__auto___83738 + (1));
i__4737__auto___83738 = G__83739;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sci.impl.interpreter.eval_import.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,import_symbols_or_lists){
var specs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__82780_SHARP_){
if(((cljs.core.seq_QMARK_(p1__82780_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(p1__82780_SHARP_))))){
return cljs.core.second(p1__82780_SHARP_);
} else {
return p1__82780_SHARP_;
}
}),import_symbols_or_lists);
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.core.run_BANG_((function (spec){
var vec__82793 = (((spec instanceof cljs.core.Symbol))?(function (){var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec);
var last_dot = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(s,".");
var package_PLUS_class_name = (cljs.core.truth_(last_dot)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),last_dot)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(last_dot + (1)),((s).length)))], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null)], null));
return package_PLUS_class_name;
})():(function (){var p = cljs.core.first(spec);
var cs = cljs.core.rest(spec);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cs], null);
})());
var package$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82793,(0),null);
var classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82793,(1),null);
var seq__82797 = cljs.core.seq(classes);
var chunk__82798 = null;
var count__82799 = (0);
var i__82800 = (0);
while(true){
if((i__82800 < count__82799)){
var class$ = chunk__82798.cljs$core$IIndexed$_nth$arity$2(null,i__82800);
var fq_class_name_83745 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(package$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):class$));
if(cljs.core.truth_(sci.impl.interop.resolve_class(ctx,fq_class_name_83745))){
var cnn_83746 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_83746,new cljs.core.Keyword(null,"imports","imports",-1249933394),class$], null),fq_class_name_83745);
} else {
var temp__5751__auto___83747 = sci.impl.records.resolve_record_class.cljs$core$IFn$_invoke$arity$3(ctx,package$,class$);
if(cljs.core.truth_(temp__5751__auto___83747)){
var rec_83751 = temp__5751__auto___83747;
var cnn_83752 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_83752,class$], null),rec_83751);
} else {
throw (new Error(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fq_class_name_83745)].join('')));
}
}


var G__83754 = seq__82797;
var G__83755 = chunk__82798;
var G__83756 = count__82799;
var G__83757 = (i__82800 + (1));
seq__82797 = G__83754;
chunk__82798 = G__83755;
count__82799 = G__83756;
i__82800 = G__83757;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__82797);
if(temp__5753__auto__){
var seq__82797__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__82797__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__82797__$1);
var G__83758 = cljs.core.chunk_rest(seq__82797__$1);
var G__83759 = c__4556__auto__;
var G__83760 = cljs.core.count(c__4556__auto__);
var G__83761 = (0);
seq__82797 = G__83758;
chunk__82798 = G__83759;
count__82799 = G__83760;
i__82800 = G__83761;
continue;
} else {
var class$ = cljs.core.first(seq__82797__$1);
var fq_class_name_83762 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(package$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):class$));
if(cljs.core.truth_(sci.impl.interop.resolve_class(ctx,fq_class_name_83762))){
var cnn_83763 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_83763,new cljs.core.Keyword(null,"imports","imports",-1249933394),class$], null),fq_class_name_83762);
} else {
var temp__5751__auto___83764 = sci.impl.records.resolve_record_class.cljs$core$IFn$_invoke$arity$3(ctx,package$,class$);
if(cljs.core.truth_(temp__5751__auto___83764)){
var rec_83765 = temp__5751__auto___83764;
var cnn_83766 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_83766,class$], null),rec_83765);
} else {
throw (new Error(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fq_class_name_83762)].join('')));
}
}


var G__83767 = cljs.core.next(seq__82797__$1);
var G__83768 = null;
var G__83769 = (0);
var G__83770 = (0);
seq__82797 = G__83767;
chunk__82798 = G__83768;
count__82799 = G__83769;
i__82800 = G__83770;
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
(sci.impl.interpreter.eval_import.cljs$lang$applyTo = (function (seq82784){
var G__82785 = cljs.core.first(seq82784);
var seq82784__$1 = cljs.core.next(seq82784);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__82785,seq82784__$1);
}));

sci.impl.interpreter.eval_set_BANG_ = (function sci$impl$interpreter$eval_set_BANG_(ctx,p__82815){
var vec__82816 = p__82815;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82816,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82816,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82816,(2),null);
var obj__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.interpreter.interpret.call(null,ctx,obj));
var v__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.interpreter.interpret.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}
});
sci.impl.interpreter.eval_do_STAR_ = (function sci$impl$interpreter$eval_do_STAR_(ctx,exprs){
var G__82822 = exprs;
var vec__82823 = G__82822;
var seq__82824 = cljs.core.seq(vec__82823);
var first__82825 = cljs.core.first(seq__82824);
var seq__82824__$1 = cljs.core.next(seq__82824);
var expr = first__82825;
var exprs__$1 = seq__82824__$1;
var G__82822__$1 = G__82822;
while(true){
var vec__82826 = G__82822__$1;
var seq__82827 = cljs.core.seq(vec__82826);
var first__82828 = cljs.core.first(seq__82827);
var seq__82827__$1 = cljs.core.next(seq__82827);
var expr__$1 = first__82828;
var exprs__$2 = seq__82827__$1;
var ret = (function (){try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.interpreter.interpret.call(null,ctx,expr__$1));
}catch (e82829){if((e82829 instanceof Error)){
var e = e82829;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr__$1);
} else {
throw e82829;

}
}})();
var temp__5751__auto__ = cljs.core.seq(exprs__$2);
if(temp__5751__auto__){
var exprs__$3 = temp__5751__auto__;
var G__83777 = exprs__$3;
G__82822__$1 = G__83777;
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
var G__83038 = cljs.core.count(args);
switch (G__83038) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg82843 = (function (){var G__83040 = ctx;
var G__83041 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83040,G__83041) : sci.impl.interpreter.interpret.call(null,G__83040,G__83041));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg82843) : f.call(null,arg82843));

break;
case (2):
var arg82844 = (function (){var G__83042 = ctx;
var G__83043 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83042,G__83043) : sci.impl.interpreter.interpret.call(null,G__83042,G__83043));
})();
var args__$1 = cljs.core.rest(args);
var arg82845 = (function (){var G__83044 = ctx;
var G__83045 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83044,G__83045) : sci.impl.interpreter.interpret.call(null,G__83044,G__83045));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg82844,arg82845) : f.call(null,arg82844,arg82845));

break;
case (3):
var arg82846 = (function (){var G__83047 = ctx;
var G__83048 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83047,G__83048) : sci.impl.interpreter.interpret.call(null,G__83047,G__83048));
})();
var args__$1 = cljs.core.rest(args);
var arg82847 = (function (){var G__83049 = ctx;
var G__83050 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83049,G__83050) : sci.impl.interpreter.interpret.call(null,G__83049,G__83050));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg82848 = (function (){var G__83051 = ctx;
var G__83052 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83051,G__83052) : sci.impl.interpreter.interpret.call(null,G__83051,G__83052));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg82846,arg82847,arg82848) : f.call(null,arg82846,arg82847,arg82848));

break;
case (4):
var arg82849 = (function (){var G__83053 = ctx;
var G__83054 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83053,G__83054) : sci.impl.interpreter.interpret.call(null,G__83053,G__83054));
})();
var args__$1 = cljs.core.rest(args);
var arg82850 = (function (){var G__83056 = ctx;
var G__83057 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83056,G__83057) : sci.impl.interpreter.interpret.call(null,G__83056,G__83057));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg82851 = (function (){var G__83059 = ctx;
var G__83060 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83059,G__83060) : sci.impl.interpreter.interpret.call(null,G__83059,G__83060));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg82852 = (function (){var G__83063 = ctx;
var G__83064 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83063,G__83064) : sci.impl.interpreter.interpret.call(null,G__83063,G__83064));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg82849,arg82850,arg82851,arg82852) : f.call(null,arg82849,arg82850,arg82851,arg82852));

break;
case (5):
var arg82853 = (function (){var G__83066 = ctx;
var G__83067 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83066,G__83067) : sci.impl.interpreter.interpret.call(null,G__83066,G__83067));
})();
var args__$1 = cljs.core.rest(args);
var arg82854 = (function (){var G__83068 = ctx;
var G__83069 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83068,G__83069) : sci.impl.interpreter.interpret.call(null,G__83068,G__83069));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg82855 = (function (){var G__83074 = ctx;
var G__83075 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83074,G__83075) : sci.impl.interpreter.interpret.call(null,G__83074,G__83075));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg82856 = (function (){var G__83076 = ctx;
var G__83077 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83076,G__83077) : sci.impl.interpreter.interpret.call(null,G__83076,G__83077));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg82857 = (function (){var G__83078 = ctx;
var G__83079 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83078,G__83079) : sci.impl.interpreter.interpret.call(null,G__83078,G__83079));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg82853,arg82854,arg82855,arg82856,arg82857) : f.call(null,arg82853,arg82854,arg82855,arg82856,arg82857));

break;
case (6):
var arg82858 = (function (){var G__83080 = ctx;
var G__83081 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83080,G__83081) : sci.impl.interpreter.interpret.call(null,G__83080,G__83081));
})();
var args__$1 = cljs.core.rest(args);
var arg82859 = (function (){var G__83082 = ctx;
var G__83083 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83082,G__83083) : sci.impl.interpreter.interpret.call(null,G__83082,G__83083));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg82860 = (function (){var G__83084 = ctx;
var G__83085 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83084,G__83085) : sci.impl.interpreter.interpret.call(null,G__83084,G__83085));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg82861 = (function (){var G__83086 = ctx;
var G__83087 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83086,G__83087) : sci.impl.interpreter.interpret.call(null,G__83086,G__83087));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg82862 = (function (){var G__83088 = ctx;
var G__83089 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83088,G__83089) : sci.impl.interpreter.interpret.call(null,G__83088,G__83089));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg82863 = (function (){var G__83092 = ctx;
var G__83093 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83092,G__83093) : sci.impl.interpreter.interpret.call(null,G__83092,G__83093));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg82858,arg82859,arg82860,arg82861,arg82862,arg82863) : f.call(null,arg82858,arg82859,arg82860,arg82861,arg82862,arg82863));

break;
case (7):
var arg82864 = (function (){var G__83102 = ctx;
var G__83103 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83102,G__83103) : sci.impl.interpreter.interpret.call(null,G__83102,G__83103));
})();
var args__$1 = cljs.core.rest(args);
var arg82865 = (function (){var G__83104 = ctx;
var G__83105 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83104,G__83105) : sci.impl.interpreter.interpret.call(null,G__83104,G__83105));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg82866 = (function (){var G__83110 = ctx;
var G__83111 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83110,G__83111) : sci.impl.interpreter.interpret.call(null,G__83110,G__83111));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg82867 = (function (){var G__83112 = ctx;
var G__83113 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83112,G__83113) : sci.impl.interpreter.interpret.call(null,G__83112,G__83113));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg82868 = (function (){var G__83114 = ctx;
var G__83115 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83114,G__83115) : sci.impl.interpreter.interpret.call(null,G__83114,G__83115));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg82869 = (function (){var G__83118 = ctx;
var G__83119 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83118,G__83119) : sci.impl.interpreter.interpret.call(null,G__83118,G__83119));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg82870 = (function (){var G__83121 = ctx;
var G__83122 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83121,G__83122) : sci.impl.interpreter.interpret.call(null,G__83121,G__83122));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg82864,arg82865,arg82866,arg82867,arg82868,arg82869,arg82870) : f.call(null,arg82864,arg82865,arg82866,arg82867,arg82868,arg82869,arg82870));

break;
case (8):
var arg82871 = (function (){var G__83125 = ctx;
var G__83126 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83125,G__83126) : sci.impl.interpreter.interpret.call(null,G__83125,G__83126));
})();
var args__$1 = cljs.core.rest(args);
var arg82872 = (function (){var G__83127 = ctx;
var G__83128 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83127,G__83128) : sci.impl.interpreter.interpret.call(null,G__83127,G__83128));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg82873 = (function (){var G__83129 = ctx;
var G__83130 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83129,G__83130) : sci.impl.interpreter.interpret.call(null,G__83129,G__83130));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg82874 = (function (){var G__83131 = ctx;
var G__83132 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83131,G__83132) : sci.impl.interpreter.interpret.call(null,G__83131,G__83132));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg82875 = (function (){var G__83133 = ctx;
var G__83134 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83133,G__83134) : sci.impl.interpreter.interpret.call(null,G__83133,G__83134));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg82876 = (function (){var G__83135 = ctx;
var G__83136 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83135,G__83136) : sci.impl.interpreter.interpret.call(null,G__83135,G__83136));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg82877 = (function (){var G__83137 = ctx;
var G__83138 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83137,G__83138) : sci.impl.interpreter.interpret.call(null,G__83137,G__83138));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg82878 = (function (){var G__83139 = ctx;
var G__83140 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83139,G__83140) : sci.impl.interpreter.interpret.call(null,G__83139,G__83140));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg82871,arg82872,arg82873,arg82874,arg82875,arg82876,arg82877,arg82878) : f.call(null,arg82871,arg82872,arg82873,arg82874,arg82875,arg82876,arg82877,arg82878));

break;
case (9):
var arg82879 = (function (){var G__83143 = ctx;
var G__83144 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83143,G__83144) : sci.impl.interpreter.interpret.call(null,G__83143,G__83144));
})();
var args__$1 = cljs.core.rest(args);
var arg82880 = (function (){var G__83145 = ctx;
var G__83146 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83145,G__83146) : sci.impl.interpreter.interpret.call(null,G__83145,G__83146));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg82881 = (function (){var G__83147 = ctx;
var G__83148 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83147,G__83148) : sci.impl.interpreter.interpret.call(null,G__83147,G__83148));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg82882 = (function (){var G__83149 = ctx;
var G__83150 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83149,G__83150) : sci.impl.interpreter.interpret.call(null,G__83149,G__83150));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg82883 = (function (){var G__83151 = ctx;
var G__83152 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83151,G__83152) : sci.impl.interpreter.interpret.call(null,G__83151,G__83152));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg82884 = (function (){var G__83153 = ctx;
var G__83154 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83153,G__83154) : sci.impl.interpreter.interpret.call(null,G__83153,G__83154));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg82885 = (function (){var G__83155 = ctx;
var G__83156 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83155,G__83156) : sci.impl.interpreter.interpret.call(null,G__83155,G__83156));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg82886 = (function (){var G__83157 = ctx;
var G__83159 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83157,G__83159) : sci.impl.interpreter.interpret.call(null,G__83157,G__83159));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg82887 = (function (){var G__83161 = ctx;
var G__83162 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83161,G__83162) : sci.impl.interpreter.interpret.call(null,G__83161,G__83162));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg82879,arg82880,arg82881,arg82882,arg82883,arg82884,arg82885,arg82886,arg82887) : f.call(null,arg82879,arg82880,arg82881,arg82882,arg82883,arg82884,arg82885,arg82886,arg82887));

break;
case (10):
var arg82888 = (function (){var G__83163 = ctx;
var G__83164 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83163,G__83164) : sci.impl.interpreter.interpret.call(null,G__83163,G__83164));
})();
var args__$1 = cljs.core.rest(args);
var arg82889 = (function (){var G__83165 = ctx;
var G__83166 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83165,G__83166) : sci.impl.interpreter.interpret.call(null,G__83165,G__83166));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg82890 = (function (){var G__83167 = ctx;
var G__83168 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83167,G__83168) : sci.impl.interpreter.interpret.call(null,G__83167,G__83168));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg82891 = (function (){var G__83169 = ctx;
var G__83170 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83169,G__83170) : sci.impl.interpreter.interpret.call(null,G__83169,G__83170));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg82892 = (function (){var G__83171 = ctx;
var G__83172 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83171,G__83172) : sci.impl.interpreter.interpret.call(null,G__83171,G__83172));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg82893 = (function (){var G__83175 = ctx;
var G__83176 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83175,G__83176) : sci.impl.interpreter.interpret.call(null,G__83175,G__83176));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg82894 = (function (){var G__83177 = ctx;
var G__83178 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83177,G__83178) : sci.impl.interpreter.interpret.call(null,G__83177,G__83178));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg82895 = (function (){var G__83179 = ctx;
var G__83180 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83179,G__83180) : sci.impl.interpreter.interpret.call(null,G__83179,G__83180));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg82896 = (function (){var G__83181 = ctx;
var G__83182 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83181,G__83182) : sci.impl.interpreter.interpret.call(null,G__83181,G__83182));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg82897 = (function (){var G__83183 = ctx;
var G__83184 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83183,G__83184) : sci.impl.interpreter.interpret.call(null,G__83183,G__83184));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg82888,arg82889,arg82890,arg82891,arg82892,arg82893,arg82894,arg82895,arg82896,arg82897) : f.call(null,arg82888,arg82889,arg82890,arg82891,arg82892,arg82893,arg82894,arg82895,arg82896,arg82897));

break;
case (11):
var arg82898 = (function (){var G__83185 = ctx;
var G__83186 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83185,G__83186) : sci.impl.interpreter.interpret.call(null,G__83185,G__83186));
})();
var args__$1 = cljs.core.rest(args);
var arg82899 = (function (){var G__83189 = ctx;
var G__83190 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83189,G__83190) : sci.impl.interpreter.interpret.call(null,G__83189,G__83190));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg82901 = (function (){var G__83191 = ctx;
var G__83192 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83191,G__83192) : sci.impl.interpreter.interpret.call(null,G__83191,G__83192));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg82902 = (function (){var G__83193 = ctx;
var G__83194 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83193,G__83194) : sci.impl.interpreter.interpret.call(null,G__83193,G__83194));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg82904 = (function (){var G__83195 = ctx;
var G__83196 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83195,G__83196) : sci.impl.interpreter.interpret.call(null,G__83195,G__83196));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg82906 = (function (){var G__83197 = ctx;
var G__83198 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83197,G__83198) : sci.impl.interpreter.interpret.call(null,G__83197,G__83198));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg82907 = (function (){var G__83199 = ctx;
var G__83200 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83199,G__83200) : sci.impl.interpreter.interpret.call(null,G__83199,G__83200));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg82908 = (function (){var G__83201 = ctx;
var G__83202 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83201,G__83202) : sci.impl.interpreter.interpret.call(null,G__83201,G__83202));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg82909 = (function (){var G__83203 = ctx;
var G__83204 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83203,G__83204) : sci.impl.interpreter.interpret.call(null,G__83203,G__83204));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg82910 = (function (){var G__83205 = ctx;
var G__83206 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83205,G__83206) : sci.impl.interpreter.interpret.call(null,G__83205,G__83206));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg82911 = (function (){var G__83208 = ctx;
var G__83209 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83208,G__83209) : sci.impl.interpreter.interpret.call(null,G__83208,G__83209));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg82898,arg82899,arg82901,arg82902,arg82904,arg82906,arg82907,arg82908,arg82909,arg82910,arg82911) : f.call(null,arg82898,arg82899,arg82901,arg82902,arg82904,arg82906,arg82907,arg82908,arg82909,arg82910,arg82911));

break;
case (12):
var arg82912 = (function (){var G__83211 = ctx;
var G__83212 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83211,G__83212) : sci.impl.interpreter.interpret.call(null,G__83211,G__83212));
})();
var args__$1 = cljs.core.rest(args);
var arg82913 = (function (){var G__83213 = ctx;
var G__83214 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83213,G__83214) : sci.impl.interpreter.interpret.call(null,G__83213,G__83214));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg82914 = (function (){var G__83215 = ctx;
var G__83216 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83215,G__83216) : sci.impl.interpreter.interpret.call(null,G__83215,G__83216));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg82915 = (function (){var G__83217 = ctx;
var G__83218 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83217,G__83218) : sci.impl.interpreter.interpret.call(null,G__83217,G__83218));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg82916 = (function (){var G__83219 = ctx;
var G__83220 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83219,G__83220) : sci.impl.interpreter.interpret.call(null,G__83219,G__83220));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg82917 = (function (){var G__83221 = ctx;
var G__83222 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83221,G__83222) : sci.impl.interpreter.interpret.call(null,G__83221,G__83222));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg82918 = (function (){var G__83223 = ctx;
var G__83224 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83223,G__83224) : sci.impl.interpreter.interpret.call(null,G__83223,G__83224));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg82919 = (function (){var G__83227 = ctx;
var G__83228 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83227,G__83228) : sci.impl.interpreter.interpret.call(null,G__83227,G__83228));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg82920 = (function (){var G__83229 = ctx;
var G__83230 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83229,G__83230) : sci.impl.interpreter.interpret.call(null,G__83229,G__83230));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg82921 = (function (){var G__83231 = ctx;
var G__83232 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83231,G__83232) : sci.impl.interpreter.interpret.call(null,G__83231,G__83232));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg82922 = (function (){var G__83233 = ctx;
var G__83234 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83233,G__83234) : sci.impl.interpreter.interpret.call(null,G__83233,G__83234));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg82923 = (function (){var G__83235 = ctx;
var G__83236 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83235,G__83236) : sci.impl.interpreter.interpret.call(null,G__83235,G__83236));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg82912,arg82913,arg82914,arg82915,arg82916,arg82917,arg82918,arg82919,arg82920,arg82921,arg82922,arg82923) : f.call(null,arg82912,arg82913,arg82914,arg82915,arg82916,arg82917,arg82918,arg82919,arg82920,arg82921,arg82922,arg82923));

break;
case (13):
var arg82924 = (function (){var G__83241 = ctx;
var G__83242 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83241,G__83242) : sci.impl.interpreter.interpret.call(null,G__83241,G__83242));
})();
var args__$1 = cljs.core.rest(args);
var arg82925 = (function (){var G__83243 = ctx;
var G__83244 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83243,G__83244) : sci.impl.interpreter.interpret.call(null,G__83243,G__83244));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg82926 = (function (){var G__83245 = ctx;
var G__83246 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83245,G__83246) : sci.impl.interpreter.interpret.call(null,G__83245,G__83246));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg82927 = (function (){var G__83247 = ctx;
var G__83248 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83247,G__83248) : sci.impl.interpreter.interpret.call(null,G__83247,G__83248));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg82928 = (function (){var G__83251 = ctx;
var G__83252 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83251,G__83252) : sci.impl.interpreter.interpret.call(null,G__83251,G__83252));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg82929 = (function (){var G__83253 = ctx;
var G__83254 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83253,G__83254) : sci.impl.interpreter.interpret.call(null,G__83253,G__83254));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg82930 = (function (){var G__83255 = ctx;
var G__83256 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83255,G__83256) : sci.impl.interpreter.interpret.call(null,G__83255,G__83256));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg82931 = (function (){var G__83257 = ctx;
var G__83258 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83257,G__83258) : sci.impl.interpreter.interpret.call(null,G__83257,G__83258));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg82932 = (function (){var G__83259 = ctx;
var G__83260 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83259,G__83260) : sci.impl.interpreter.interpret.call(null,G__83259,G__83260));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg82933 = (function (){var G__83265 = ctx;
var G__83266 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83265,G__83266) : sci.impl.interpreter.interpret.call(null,G__83265,G__83266));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg82934 = (function (){var G__83267 = ctx;
var G__83268 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83267,G__83268) : sci.impl.interpreter.interpret.call(null,G__83267,G__83268));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg82935 = (function (){var G__83269 = ctx;
var G__83270 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83269,G__83270) : sci.impl.interpreter.interpret.call(null,G__83269,G__83270));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg82936 = (function (){var G__83271 = ctx;
var G__83272 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83271,G__83272) : sci.impl.interpreter.interpret.call(null,G__83271,G__83272));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg82924,arg82925,arg82926,arg82927,arg82928,arg82929,arg82930,arg82931,arg82932,arg82933,arg82934,arg82935,arg82936) : f.call(null,arg82924,arg82925,arg82926,arg82927,arg82928,arg82929,arg82930,arg82931,arg82932,arg82933,arg82934,arg82935,arg82936));

break;
case (14):
var arg82937 = (function (){var G__83273 = ctx;
var G__83274 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83273,G__83274) : sci.impl.interpreter.interpret.call(null,G__83273,G__83274));
})();
var args__$1 = cljs.core.rest(args);
var arg82938 = (function (){var G__83275 = ctx;
var G__83276 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83275,G__83276) : sci.impl.interpreter.interpret.call(null,G__83275,G__83276));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg82939 = (function (){var G__83277 = ctx;
var G__83278 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83277,G__83278) : sci.impl.interpreter.interpret.call(null,G__83277,G__83278));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg82940 = (function (){var G__83279 = ctx;
var G__83280 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83279,G__83280) : sci.impl.interpreter.interpret.call(null,G__83279,G__83280));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg82941 = (function (){var G__83281 = ctx;
var G__83282 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83281,G__83282) : sci.impl.interpreter.interpret.call(null,G__83281,G__83282));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg82942 = (function (){var G__83284 = ctx;
var G__83285 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83284,G__83285) : sci.impl.interpreter.interpret.call(null,G__83284,G__83285));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg82943 = (function (){var G__83289 = ctx;
var G__83290 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83289,G__83290) : sci.impl.interpreter.interpret.call(null,G__83289,G__83290));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg82944 = (function (){var G__83291 = ctx;
var G__83292 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83291,G__83292) : sci.impl.interpreter.interpret.call(null,G__83291,G__83292));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg82945 = (function (){var G__83293 = ctx;
var G__83294 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83293,G__83294) : sci.impl.interpreter.interpret.call(null,G__83293,G__83294));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg82946 = (function (){var G__83295 = ctx;
var G__83296 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83295,G__83296) : sci.impl.interpreter.interpret.call(null,G__83295,G__83296));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg82947 = (function (){var G__83297 = ctx;
var G__83298 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83297,G__83298) : sci.impl.interpreter.interpret.call(null,G__83297,G__83298));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg82948 = (function (){var G__83300 = ctx;
var G__83301 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83300,G__83301) : sci.impl.interpreter.interpret.call(null,G__83300,G__83301));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg82949 = (function (){var G__83303 = ctx;
var G__83304 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83303,G__83304) : sci.impl.interpreter.interpret.call(null,G__83303,G__83304));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg82950 = (function (){var G__83305 = ctx;
var G__83306 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83305,G__83306) : sci.impl.interpreter.interpret.call(null,G__83305,G__83306));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg82937,arg82938,arg82939,arg82940,arg82941,arg82942,arg82943,arg82944,arg82945,arg82946,arg82947,arg82948,arg82949,arg82950) : f.call(null,arg82937,arg82938,arg82939,arg82940,arg82941,arg82942,arg82943,arg82944,arg82945,arg82946,arg82947,arg82948,arg82949,arg82950));

break;
case (15):
var arg82951 = (function (){var G__83307 = ctx;
var G__83308 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83307,G__83308) : sci.impl.interpreter.interpret.call(null,G__83307,G__83308));
})();
var args__$1 = cljs.core.rest(args);
var arg82952 = (function (){var G__83309 = ctx;
var G__83310 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83309,G__83310) : sci.impl.interpreter.interpret.call(null,G__83309,G__83310));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg82953 = (function (){var G__83315 = ctx;
var G__83316 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83315,G__83316) : sci.impl.interpreter.interpret.call(null,G__83315,G__83316));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg82954 = (function (){var G__83317 = ctx;
var G__83318 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83317,G__83318) : sci.impl.interpreter.interpret.call(null,G__83317,G__83318));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg82955 = (function (){var G__83319 = ctx;
var G__83320 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83319,G__83320) : sci.impl.interpreter.interpret.call(null,G__83319,G__83320));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg82956 = (function (){var G__83321 = ctx;
var G__83322 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83321,G__83322) : sci.impl.interpreter.interpret.call(null,G__83321,G__83322));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg82957 = (function (){var G__83323 = ctx;
var G__83324 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83323,G__83324) : sci.impl.interpreter.interpret.call(null,G__83323,G__83324));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg82958 = (function (){var G__83325 = ctx;
var G__83326 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83325,G__83326) : sci.impl.interpreter.interpret.call(null,G__83325,G__83326));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg82959 = (function (){var G__83327 = ctx;
var G__83328 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83327,G__83328) : sci.impl.interpreter.interpret.call(null,G__83327,G__83328));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg82960 = (function (){var G__83329 = ctx;
var G__83330 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83329,G__83330) : sci.impl.interpreter.interpret.call(null,G__83329,G__83330));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg82961 = (function (){var G__83331 = ctx;
var G__83332 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83331,G__83332) : sci.impl.interpreter.interpret.call(null,G__83331,G__83332));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg82962 = (function (){var G__83333 = ctx;
var G__83334 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83333,G__83334) : sci.impl.interpreter.interpret.call(null,G__83333,G__83334));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg82963 = (function (){var G__83335 = ctx;
var G__83336 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83335,G__83336) : sci.impl.interpreter.interpret.call(null,G__83335,G__83336));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg82964 = (function (){var G__83337 = ctx;
var G__83338 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83337,G__83338) : sci.impl.interpreter.interpret.call(null,G__83337,G__83338));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg82965 = (function (){var G__83339 = ctx;
var G__83340 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83339,G__83340) : sci.impl.interpreter.interpret.call(null,G__83339,G__83340));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg82951,arg82952,arg82953,arg82954,arg82955,arg82956,arg82957,arg82958,arg82959,arg82960,arg82961,arg82962,arg82963,arg82964,arg82965) : f.call(null,arg82951,arg82952,arg82953,arg82954,arg82955,arg82956,arg82957,arg82958,arg82959,arg82960,arg82961,arg82962,arg82963,arg82964,arg82965));

break;
case (16):
var arg82966 = (function (){var G__83343 = ctx;
var G__83344 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83343,G__83344) : sci.impl.interpreter.interpret.call(null,G__83343,G__83344));
})();
var args__$1 = cljs.core.rest(args);
var arg82967 = (function (){var G__83345 = ctx;
var G__83346 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83345,G__83346) : sci.impl.interpreter.interpret.call(null,G__83345,G__83346));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg82968 = (function (){var G__83347 = ctx;
var G__83348 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83347,G__83348) : sci.impl.interpreter.interpret.call(null,G__83347,G__83348));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg82969 = (function (){var G__83350 = ctx;
var G__83351 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83350,G__83351) : sci.impl.interpreter.interpret.call(null,G__83350,G__83351));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg82970 = (function (){var G__83355 = ctx;
var G__83356 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83355,G__83356) : sci.impl.interpreter.interpret.call(null,G__83355,G__83356));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg82971 = (function (){var G__83357 = ctx;
var G__83358 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83357,G__83358) : sci.impl.interpreter.interpret.call(null,G__83357,G__83358));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg82972 = (function (){var G__83359 = ctx;
var G__83360 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83359,G__83360) : sci.impl.interpreter.interpret.call(null,G__83359,G__83360));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg82973 = (function (){var G__83361 = ctx;
var G__83362 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83361,G__83362) : sci.impl.interpreter.interpret.call(null,G__83361,G__83362));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg82974 = (function (){var G__83363 = ctx;
var G__83364 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83363,G__83364) : sci.impl.interpreter.interpret.call(null,G__83363,G__83364));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg82975 = (function (){var G__83365 = ctx;
var G__83366 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83365,G__83366) : sci.impl.interpreter.interpret.call(null,G__83365,G__83366));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg82976 = (function (){var G__83367 = ctx;
var G__83368 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83367,G__83368) : sci.impl.interpreter.interpret.call(null,G__83367,G__83368));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg82977 = (function (){var G__83369 = ctx;
var G__83370 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83369,G__83370) : sci.impl.interpreter.interpret.call(null,G__83369,G__83370));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg82978 = (function (){var G__83371 = ctx;
var G__83372 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83371,G__83372) : sci.impl.interpreter.interpret.call(null,G__83371,G__83372));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg82979 = (function (){var G__83373 = ctx;
var G__83374 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83373,G__83374) : sci.impl.interpreter.interpret.call(null,G__83373,G__83374));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg82980 = (function (){var G__83375 = ctx;
var G__83376 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83375,G__83376) : sci.impl.interpreter.interpret.call(null,G__83375,G__83376));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg82981 = (function (){var G__83377 = ctx;
var G__83378 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83377,G__83378) : sci.impl.interpreter.interpret.call(null,G__83377,G__83378));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg82966,arg82967,arg82968,arg82969,arg82970,arg82971,arg82972,arg82973,arg82974,arg82975,arg82976,arg82977,arg82978,arg82979,arg82980,arg82981) : f.call(null,arg82966,arg82967,arg82968,arg82969,arg82970,arg82971,arg82972,arg82973,arg82974,arg82975,arg82976,arg82977,arg82978,arg82979,arg82980,arg82981));

break;
case (17):
var arg82982 = (function (){var G__83379 = ctx;
var G__83380 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83379,G__83380) : sci.impl.interpreter.interpret.call(null,G__83379,G__83380));
})();
var args__$1 = cljs.core.rest(args);
var arg82983 = (function (){var G__83381 = ctx;
var G__83382 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83381,G__83382) : sci.impl.interpreter.interpret.call(null,G__83381,G__83382));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg82984 = (function (){var G__83383 = ctx;
var G__83384 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83383,G__83384) : sci.impl.interpreter.interpret.call(null,G__83383,G__83384));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg82985 = (function (){var G__83387 = ctx;
var G__83389 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83387,G__83389) : sci.impl.interpreter.interpret.call(null,G__83387,G__83389));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg82986 = (function (){var G__83390 = ctx;
var G__83391 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83390,G__83391) : sci.impl.interpreter.interpret.call(null,G__83390,G__83391));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg82987 = (function (){var G__83392 = ctx;
var G__83393 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83392,G__83393) : sci.impl.interpreter.interpret.call(null,G__83392,G__83393));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg82988 = (function (){var G__83394 = ctx;
var G__83395 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83394,G__83395) : sci.impl.interpreter.interpret.call(null,G__83394,G__83395));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg82989 = (function (){var G__83396 = ctx;
var G__83397 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83396,G__83397) : sci.impl.interpreter.interpret.call(null,G__83396,G__83397));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg82990 = (function (){var G__83398 = ctx;
var G__83399 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83398,G__83399) : sci.impl.interpreter.interpret.call(null,G__83398,G__83399));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg82991 = (function (){var G__83400 = ctx;
var G__83401 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83400,G__83401) : sci.impl.interpreter.interpret.call(null,G__83400,G__83401));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg82992 = (function (){var G__83402 = ctx;
var G__83403 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83402,G__83403) : sci.impl.interpreter.interpret.call(null,G__83402,G__83403));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg82993 = (function (){var G__83404 = ctx;
var G__83405 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83404,G__83405) : sci.impl.interpreter.interpret.call(null,G__83404,G__83405));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg82994 = (function (){var G__83406 = ctx;
var G__83407 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83406,G__83407) : sci.impl.interpreter.interpret.call(null,G__83406,G__83407));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg82995 = (function (){var G__83408 = ctx;
var G__83409 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83408,G__83409) : sci.impl.interpreter.interpret.call(null,G__83408,G__83409));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg82996 = (function (){var G__83410 = ctx;
var G__83411 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83410,G__83411) : sci.impl.interpreter.interpret.call(null,G__83410,G__83411));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg82997 = (function (){var G__83412 = ctx;
var G__83413 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83412,G__83413) : sci.impl.interpreter.interpret.call(null,G__83412,G__83413));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg82998 = (function (){var G__83414 = ctx;
var G__83415 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83414,G__83415) : sci.impl.interpreter.interpret.call(null,G__83414,G__83415));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg82982,arg82983,arg82984,arg82985,arg82986,arg82987,arg82988,arg82989,arg82990,arg82991,arg82992,arg82993,arg82994,arg82995,arg82996,arg82997,arg82998) : f.call(null,arg82982,arg82983,arg82984,arg82985,arg82986,arg82987,arg82988,arg82989,arg82990,arg82991,arg82992,arg82993,arg82994,arg82995,arg82996,arg82997,arg82998));

break;
case (18):
var arg82999 = (function (){var G__83419 = ctx;
var G__83420 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83419,G__83420) : sci.impl.interpreter.interpret.call(null,G__83419,G__83420));
})();
var args__$1 = cljs.core.rest(args);
var arg83000 = (function (){var G__83421 = ctx;
var G__83422 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83421,G__83422) : sci.impl.interpreter.interpret.call(null,G__83421,G__83422));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg83001 = (function (){var G__83423 = ctx;
var G__83424 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83423,G__83424) : sci.impl.interpreter.interpret.call(null,G__83423,G__83424));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg83002 = (function (){var G__83425 = ctx;
var G__83426 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83425,G__83426) : sci.impl.interpreter.interpret.call(null,G__83425,G__83426));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg83003 = (function (){var G__83430 = ctx;
var G__83431 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83430,G__83431) : sci.impl.interpreter.interpret.call(null,G__83430,G__83431));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg83004 = (function (){var G__83432 = ctx;
var G__83433 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83432,G__83433) : sci.impl.interpreter.interpret.call(null,G__83432,G__83433));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg83005 = (function (){var G__83434 = ctx;
var G__83435 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83434,G__83435) : sci.impl.interpreter.interpret.call(null,G__83434,G__83435));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg83006 = (function (){var G__83436 = ctx;
var G__83437 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83436,G__83437) : sci.impl.interpreter.interpret.call(null,G__83436,G__83437));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg83007 = (function (){var G__83438 = ctx;
var G__83439 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83438,G__83439) : sci.impl.interpreter.interpret.call(null,G__83438,G__83439));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg83008 = (function (){var G__83440 = ctx;
var G__83441 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83440,G__83441) : sci.impl.interpreter.interpret.call(null,G__83440,G__83441));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg83009 = (function (){var G__83442 = ctx;
var G__83443 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83442,G__83443) : sci.impl.interpreter.interpret.call(null,G__83442,G__83443));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg83010 = (function (){var G__83444 = ctx;
var G__83445 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83444,G__83445) : sci.impl.interpreter.interpret.call(null,G__83444,G__83445));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg83011 = (function (){var G__83446 = ctx;
var G__83447 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83446,G__83447) : sci.impl.interpreter.interpret.call(null,G__83446,G__83447));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg83012 = (function (){var G__83451 = ctx;
var G__83452 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83451,G__83452) : sci.impl.interpreter.interpret.call(null,G__83451,G__83452));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg83013 = (function (){var G__83453 = ctx;
var G__83454 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83453,G__83454) : sci.impl.interpreter.interpret.call(null,G__83453,G__83454));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg83014 = (function (){var G__83455 = ctx;
var G__83456 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83455,G__83456) : sci.impl.interpreter.interpret.call(null,G__83455,G__83456));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg83015 = (function (){var G__83457 = ctx;
var G__83458 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83457,G__83458) : sci.impl.interpreter.interpret.call(null,G__83457,G__83458));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg83016 = (function (){var G__83463 = ctx;
var G__83464 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83463,G__83464) : sci.impl.interpreter.interpret.call(null,G__83463,G__83464));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg82999,arg83000,arg83001,arg83002,arg83003,arg83004,arg83005,arg83006,arg83007,arg83008,arg83009,arg83010,arg83011,arg83012,arg83013,arg83014,arg83015,arg83016) : f.call(null,arg82999,arg83000,arg83001,arg83002,arg83003,arg83004,arg83005,arg83006,arg83007,arg83008,arg83009,arg83010,arg83011,arg83012,arg83013,arg83014,arg83015,arg83016));

break;
case (19):
var arg83017 = (function (){var G__83468 = ctx;
var G__83469 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83468,G__83469) : sci.impl.interpreter.interpret.call(null,G__83468,G__83469));
})();
var args__$1 = cljs.core.rest(args);
var arg83018 = (function (){var G__83470 = ctx;
var G__83471 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83470,G__83471) : sci.impl.interpreter.interpret.call(null,G__83470,G__83471));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg83019 = (function (){var G__83475 = ctx;
var G__83476 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83475,G__83476) : sci.impl.interpreter.interpret.call(null,G__83475,G__83476));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg83020 = (function (){var G__83477 = ctx;
var G__83478 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83477,G__83478) : sci.impl.interpreter.interpret.call(null,G__83477,G__83478));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg83021 = (function (){var G__83479 = ctx;
var G__83480 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83479,G__83480) : sci.impl.interpreter.interpret.call(null,G__83479,G__83480));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg83022 = (function (){var G__83481 = ctx;
var G__83482 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83481,G__83482) : sci.impl.interpreter.interpret.call(null,G__83481,G__83482));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg83023 = (function (){var G__83483 = ctx;
var G__83484 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83483,G__83484) : sci.impl.interpreter.interpret.call(null,G__83483,G__83484));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg83024 = (function (){var G__83486 = ctx;
var G__83487 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83486,G__83487) : sci.impl.interpreter.interpret.call(null,G__83486,G__83487));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg83025 = (function (){var G__83491 = ctx;
var G__83492 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83491,G__83492) : sci.impl.interpreter.interpret.call(null,G__83491,G__83492));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg83026 = (function (){var G__83496 = ctx;
var G__83497 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83496,G__83497) : sci.impl.interpreter.interpret.call(null,G__83496,G__83497));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg83027 = (function (){var G__83498 = ctx;
var G__83499 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83498,G__83499) : sci.impl.interpreter.interpret.call(null,G__83498,G__83499));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg83028 = (function (){var G__83500 = ctx;
var G__83501 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83500,G__83501) : sci.impl.interpreter.interpret.call(null,G__83500,G__83501));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg83029 = (function (){var G__83502 = ctx;
var G__83503 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83502,G__83503) : sci.impl.interpreter.interpret.call(null,G__83502,G__83503));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg83030 = (function (){var G__83506 = ctx;
var G__83507 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83506,G__83507) : sci.impl.interpreter.interpret.call(null,G__83506,G__83507));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg83031 = (function (){var G__83508 = ctx;
var G__83509 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83508,G__83509) : sci.impl.interpreter.interpret.call(null,G__83508,G__83509));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg83032 = (function (){var G__83510 = ctx;
var G__83511 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83510,G__83511) : sci.impl.interpreter.interpret.call(null,G__83510,G__83511));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg83033 = (function (){var G__83512 = ctx;
var G__83513 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83512,G__83513) : sci.impl.interpreter.interpret.call(null,G__83512,G__83513));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg83034 = (function (){var G__83514 = ctx;
var G__83515 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83514,G__83515) : sci.impl.interpreter.interpret.call(null,G__83514,G__83515));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg83035 = (function (){var G__83516 = ctx;
var G__83517 = cljs.core.first(args__$18);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83516,G__83517) : sci.impl.interpreter.interpret.call(null,G__83516,G__83517));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg83017,arg83018,arg83019,arg83020,arg83021,arg83022,arg83023,arg83024,arg83025,arg83026,arg83027,arg83028,arg83029,arg83030,arg83031,arg83032,arg83033,arg83034,arg83035) : f.call(null,arg83017,arg83018,arg83019,arg83020,arg83021,arg83022,arg83023,arg83024,arg83025,arg83026,arg83027,arg83028,arg83029,arg83030,arg83031,arg83032,arg83033,arg83034,arg83035));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__67198_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__67198_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__67198_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.interpreter.eval_special_call = (function sci$impl$interpreter$eval_special_call(ctx,f_sym,expr){
var G__83521 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__83521)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_instance_method_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__83521)){
return sci.impl.interpreter.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"import","import",241030818,null),G__83521)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_import,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__83521)){
return sci.impl.interpreter.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__83521)){
return sci.impl.interpreter.eval_if(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__83521)){
return sci.impl.interpreter.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),G__83521)){
return sci.impl.interpreter.macroexpand(ctx,(function (){var G__83522 = ctx;
var G__83523 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83522,G__83523) : sci.impl.interpreter.interpret.call(null,G__83522,G__83523));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__83521)){
return sci.impl.interpreter.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__83521)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_let,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__83521)){
return sci.impl.interpreter.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"use","use",-205850897,null),G__83521)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_use,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__83521)){
return sci.impl.interpreter.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__83521)){
return sci.impl.interpreter.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__83521)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__83521)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_constructor_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),G__83521)){
return sci.impl.interpreter.macroexpand_1(ctx,(function (){var G__83524 = ctx;
var G__83525 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83524,G__83525) : sci.impl.interpreter.interpret.call(null,G__83524,G__83525));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__83521)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_refer,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__83521)){
return (new cljs.core.LazySeq(null,(function (){var G__83526 = ctx;
var G__83527 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__83526,G__83527) : sci.impl.interpreter.interpret.call(null,G__83526,G__83527));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__83521)){
return sci.impl.interpreter.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__83521)){
return sci.impl.interpreter.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"resolve","resolve",56086045,null),G__83521)){
return sci.impl.interpreter.eval_resolve(ctx,cljs.core.second(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__83521)){
return sci.impl.interpreter.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__83521)].join('')));

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
}catch (e83534){if((e83534 instanceof Error)){
var e = e83534;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e83534;

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
var ret = ((cljs.core.not(op))?expr:(function (){var G__83553 = op;
var G__83553__$1 = (((G__83553 instanceof cljs.core.Keyword))?G__83553.fqn:null);
switch (G__83553__$1) {
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
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__83544_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__83544_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__83544_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__83545_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__83545_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__83545_SHARP_));
}),cljs.core.vals(expr)));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__83546_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__83546_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__83546_SHARP_));
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
var G__84006 = cljs.core.rest(exprs);
var G__84007 = (function (){var G__83567 = ctx;
var G__83568 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__83567,G__83568) : sci.impl.interpreter.eval_form.call(null,G__83567,G__83568));
})();
exprs = G__84006;
ret = G__84007;
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
var G__84009 = ret__$1;
ret = G__84009;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__83584 = arguments.length;
switch (G__83584) {
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
