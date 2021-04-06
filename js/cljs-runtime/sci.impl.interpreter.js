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
var G__79744 = xs;
args__$2 = G__79744;
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
var G__79747 = xs;
args__$2 = G__79747;
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
var len__4736__auto___79748 = arguments.length;
var i__4737__auto___79750 = (0);
while(true){
if((i__4737__auto___79750 < len__4736__auto___79748)){
args__4742__auto__.push((arguments[i__4737__auto___79750]));

var G__79754 = (i__4737__auto___79750 + (1));
i__4737__auto___79750 = G__79754;
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
var G__79758 = ctx__$2;
var G__79759 = rest_let_bindings;
ctx__$1 = G__79758;
let_bindings__$1 = G__79759;
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
var G__79761 = nexprs;
exprs__$1 = G__79761;
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
(sci.impl.interpreter.eval_let.cljs$lang$applyTo = (function (seq78532){
var G__78533 = cljs.core.first(seq78532);
var seq78532__$1 = cljs.core.next(seq78532);
var G__78534 = cljs.core.first(seq78532__$1);
var seq78532__$2 = cljs.core.next(seq78532__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78533,G__78534,seq78532__$2);
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
sci.impl.interpreter.eval_def = (function sci$impl$interpreter$eval_def(ctx,p__78562){
var vec__78563 = p__78562;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78563,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78563,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78563,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78563,(3),null);
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
var v = (cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1)))?(function (){var G__78574 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__78574,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__78574;
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
var vec__78589 = libspec;
var seq__78590 = cljs.core.seq(vec__78589);
var first__78591 = cljs.core.first(seq__78590);
var seq__78590__$1 = cljs.core.next(seq__78590);
var lib_name = first__78591;
var opts = seq__78590__$1;
var ret = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),lib_name], null);
var G__78596 = opts;
var vec__78597 = G__78596;
var seq__78598 = cljs.core.seq(vec__78597);
var first__78599 = cljs.core.first(seq__78598);
var seq__78598__$1 = cljs.core.next(seq__78598);
var opt_name = first__78599;
var first__78599__$1 = cljs.core.first(seq__78598__$1);
var seq__78598__$2 = cljs.core.next(seq__78598__$1);
var fst_opt = first__78599__$1;
var rst_opts = seq__78598__$2;
var ret__$1 = ret;
var G__78596__$1 = G__78596;
while(true){
var ret__$2 = ret__$1;
var vec__78616 = G__78596__$1;
var seq__78617 = cljs.core.seq(vec__78616);
var first__78618 = cljs.core.first(seq__78617);
var seq__78617__$1 = cljs.core.next(seq__78617);
var opt_name__$1 = first__78618;
var first__78618__$1 = cljs.core.first(seq__78617__$1);
var seq__78617__$2 = cljs.core.next(seq__78617__$1);
var fst_opt__$1 = first__78618__$1;
var rst_opts__$1 = seq__78617__$2;
if(cljs.core.not(opt_name__$1)){
return ret__$2;
} else {
var G__78620 = opt_name__$1;
var G__78620__$1 = (((G__78620 instanceof cljs.core.Keyword))?G__78620.fqn:null);
switch (G__78620__$1) {
case "as":
var G__79798 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"as","as",1148689641),fst_opt__$1);
var G__79799 = rst_opts__$1;
ret__$1 = G__79798;
G__78596__$1 = G__79799;
continue;

break;
case "reload":
case "reload-all":
case "verbose":
var G__79801 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"reload","reload",863702807),true);
var G__79802 = cljs.core.cons(fst_opt__$1,rst_opts__$1);
ret__$1 = G__79801;
G__78596__$1 = G__79802;
continue;

break;
case "refer":
case "rename":
case "exclude":
case "only":
var G__79804 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,opt_name__$1,fst_opt__$1);
var G__79805 = rst_opts__$1;
ret__$1 = G__79804;
G__78596__$1 = G__79805;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__78620__$1)].join('')));

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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__78630){
var vec__78632 = p__78630;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78632,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78632,(1),null);
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
sci.impl.interpreter.handle_require_libspec_env = (function sci$impl$interpreter$handle_require_libspec_env(env,use_QMARK_,current_ns,the_loaded_ns,lib_name,p__78644){
var map__78645 = p__78644;
var map__78645__$1 = (((((!((map__78645 == null))))?(((((map__78645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78645):map__78645);
var _parsed_libspec = map__78645__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78645__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78645__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78645__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78645__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78645__$1,new cljs.core.Keyword(null,"only","only",1907811652));
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
var vec__78659 = temp__5751__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78659,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78659,(1),null);
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
var map__78666 = sci.impl.interpreter.parse_libspec(libspec);
var map__78666__$1 = (((((!((map__78666 == null))))?(((((map__78666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78666):map__78666);
var parsed_libspec = map__78666__$1;
var lib_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78666__$1,new cljs.core.Keyword(null,"lib-name","lib-name",1158024282));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78666__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
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
var temp__5751__auto____$2 = (function (){var G__78673 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib_name], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__78673) : load_fn.call(null,G__78673));
})();
if(cljs.core.truth_(temp__5751__auto____$2)){
var map__78676 = temp__5751__auto____$2;
var map__78676__$1 = (((((!((map__78676 == null))))?(((((map__78676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78676):map__78676);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78676__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78676__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__78685_79837 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY);
var G__78686_79838 = source;
(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(G__78685_79837,G__78686_79838) : sci.impl.interpreter.eval_string_STAR_.call(null,G__78685_79837,G__78686_79838));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e78679){if((e78679 instanceof Error)){
var e_79843 = e78679;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib_name], 0));

throw e_79843;
} else {
throw e78679;

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
var len__4736__auto___79849 = arguments.length;
var i__4737__auto___79850 = (0);
while(true){
if((i__4737__auto___79850 < len__4736__auto___79849)){
args__4742__auto__.push((arguments[i__4737__auto___79850]));

var G__79851 = (i__4737__auto___79850 + (1));
i__4737__auto___79850 = G__79851;
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
var ret = (function (){var G__78705 = ctx;
var G__78708 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78705,G__78708) : sci.impl.interpreter.interpret.call(null,G__78705,G__78708));
})();
if((ret instanceof cljs.core.Symbol)){
var G__79858 = (function (){var G__78709 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__78709,current_libspec);
} else {
return G__78709;
}
})();
var G__79859 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
var G__79860 = cljs.core.next(args__$1);
libspecs = G__79858;
current_libspec = G__79859;
args__$1 = G__79860;
continue;
} else {
if((ret instanceof cljs.core.Keyword)){
var G__79861 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_libspec,ret));
var G__79862 = null;
var G__79863 = cljs.core.next(args__$1);
libspecs = G__79861;
current_libspec = G__79862;
args__$1 = G__79863;
continue;
} else {
var G__79865 = (function (){var G__78710 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__78710,current_libspec);
} else {
return G__78710;
}
})();
var G__79866 = ret;
var G__79867 = cljs.core.next(args__$1);
libspecs = G__79865;
current_libspec = G__79866;
args__$1 = G__79867;
continue;

}
}
} else {
var libspecs__$1 = (function (){var G__78711 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__78711,current_libspec);
} else {
return G__78711;
}
})();
return cljs.core.run_BANG_(((function (libspecs,current_libspec,args__$1,libspecs__$1){
return (function (p1__78691_SHARP_){
return sci.impl.interpreter.handle_require_libspec(ctx,p1__78691_SHARP_);
});})(libspecs,current_libspec,args__$1,libspecs__$1))
,libspecs__$1);
}
break;
}
}));

(sci.impl.interpreter.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_require.cljs$lang$applyTo = (function (seq78692){
var G__78693 = cljs.core.first(seq78692);
var seq78692__$1 = cljs.core.next(seq78692);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78693,seq78692__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.interpreter.eval_require);
sci.impl.interpreter.eval_use = (function sci$impl$interpreter$eval_use(var_args){
var args__4742__auto__ = [];
var len__4736__auto___79872 = arguments.length;
var i__4737__auto___79874 = (0);
while(true){
if((i__4737__auto___79874 < len__4736__auto___79872)){
args__4742__auto__.push((arguments[i__4737__auto___79874]));

var G__79875 = (i__4737__auto___79874 + (1));
i__4737__auto___79874 = G__79875;
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
(sci.impl.interpreter.eval_use.cljs$lang$applyTo = (function (seq78719){
var G__78720 = cljs.core.first(seq78719);
var seq78719__$1 = cljs.core.next(seq78719);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78720,seq78719__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.interpreter.eval_use);
sci.impl.interpreter.eval_case = (function sci$impl$interpreter$eval_case(ctx,p__78728){
var vec__78730 = p__78728;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78730,(0),null);
var map__78734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78730,(1),null);
var map__78734__$1 = (((((!((map__78734 == null))))?(((((map__78734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78734):map__78734);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78734__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78734__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78734__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.interpreter.interpret.call(null,ctx,case_val));
var temp__5751__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__78741 = temp__5751__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78741,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78741,(1),null);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.interpreter.interpret.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__78746 = ctx;
var G__78747 = cljs.core.second(case_default);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78746,G__78747) : sci.impl.interpreter.interpret.call(null,G__78746,G__78747));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.interpreter.eval_try = (function sci$impl$interpreter$eval_try(ctx,expr){
var map__78753 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__78753__$1 = (((((!((map__78753 == null))))?(((((map__78753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78753):map__78753);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78753__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78753__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78753__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var _STAR_in_try_STAR__orig_val__78769 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__78770 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__78770);

try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.interpreter.interpret.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__78769);
}}catch (e78758){if((e78758 instanceof Error)){
var e = e78758;
var temp__5751__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.interpreter","try-result","sci.impl.interpreter/try-result",1789456125),(function (){var G__78762 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__78763 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78762,G__78763) : sci.impl.interpreter.interpret.call(null,G__78762,G__78763));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__78764 = temp__5751__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78764,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78764,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e78758;

}
}finally {(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.interpreter.interpret.call(null,ctx,finally$));
}});
sci.impl.interpreter.eval_throw = (function sci$impl$interpreter$eval_throw(ctx,p__78775){
var vec__78776 = p__78775;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78776,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78776,(1),null);
var ex__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.interpret.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.interpreter.eval_static_method_invocation = (function sci$impl$interpreter$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__78781_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__78781_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__78781_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.interpreter.eval_constructor_invocation = (function sci$impl$interpreter$eval_constructor_invocation(ctx,p__78790){
var vec__78791 = p__78790;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78791,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78791,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78791,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__78786_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__78786_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__78786_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.interpreter.eval_instance_method_invocation = (function sci$impl$interpreter$eval_instance_method_invocation(p__78803,p__78804){
var map__78806 = p__78803;
var map__78806__$1 = (((((!((map__78806 == null))))?(((((map__78806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78806):map__78806);
var ctx = map__78806__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78806__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__78807 = p__78804;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78807,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78807,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78807,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78807,(3),null);
var _expr = vec__78807;
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

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__78799_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__78799_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__78799_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
}
});
sci.impl.interpreter.eval_in_ns = (function sci$impl$interpreter$eval_in_ns(ctx,p__78831){
var vec__78832 = p__78831;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78832,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78832,(1),null);
var ns_sym = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.interpreter.interpret.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.interpreter.eval_refer = (function sci$impl$interpreter$eval_refer(var_args){
var args__4742__auto__ = [];
var len__4736__auto___79908 = arguments.length;
var i__4737__auto___79909 = (0);
while(true){
if((i__4737__auto___79909 < len__4736__auto___79908)){
args__4742__auto__.push((arguments[i__4737__auto___79909]));

var G__79910 = (i__4737__auto___79909 + (1));
i__4737__auto___79909 = G__79910;
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
var vec__78843 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78843,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78843,(1),null);
var G__78846_79913 = k;
var G__78846_79914__$1 = (((G__78846_79913 instanceof cljs.core.Keyword))?G__78846_79913.fqn:null);
switch (G__78846_79914__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__78846_79913,G__78846_79914__$1,vec__78843,k,v,ns_sym__$1){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__78846_79913,G__78846_79914__$1,vec__78843,k,v,ns_sym__$1))
);

break;
case "only":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__78846_79913,G__78846_79914__$1,vec__78843,k,v,ns_sym__$1){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym__$1], null));
var other_vars = cljs.core.select_keys(other_ns,v);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),cljs.core.merge,other_vars);
});})(exprs__$1,G__78846_79913,G__78846_79914__$1,vec__78843,k,v,ns_sym__$1))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__78846_79914__$1)].join('')));

}

var G__79918 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__79918;
continue;
} else {
return null;
}
break;
}
}));

(sci.impl.interpreter.eval_refer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.interpreter.eval_refer.cljs$lang$applyTo = (function (seq78836){
var G__78837 = cljs.core.first(seq78836);
var seq78836__$1 = cljs.core.next(seq78836);
var G__78838 = cljs.core.first(seq78836__$1);
var seq78836__$2 = cljs.core.next(seq78836__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78837,G__78838,seq78836__$2);
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
var f__$2 = (cljs.core.truth_((function (){var G__78865 = new cljs.core.Keyword(null,"needs-ctx","needs-ctx",-35514403);
var G__78866 = (function (){var G__78867 = f__$1;
var G__78867__$1 = (((G__78867 == null))?null:cljs.core.meta(G__78867));
if((G__78867__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(G__78867__$1);
}
})();
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__78865,G__78866) : sci.impl.utils.kw_identical_QMARK_.call(null,G__78865,G__78866));
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
var len__4736__auto___79923 = arguments.length;
var i__4737__auto___79924 = (0);
while(true){
if((i__4737__auto___79924 < len__4736__auto___79923)){
args__4742__auto__.push((arguments[i__4737__auto___79924]));

var G__79925 = (i__4737__auto___79924 + (1));
i__4737__auto___79924 = G__79925;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sci.impl.interpreter.eval_import.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,import_symbols_or_lists){
var specs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__78872_SHARP_){
if(((cljs.core.seq_QMARK_(p1__78872_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(p1__78872_SHARP_))))){
return cljs.core.second(p1__78872_SHARP_);
} else {
return p1__78872_SHARP_;
}
}),import_symbols_or_lists);
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.core.run_BANG_((function (spec){
var vec__78880 = (((spec instanceof cljs.core.Symbol))?(function (){var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec);
var last_dot = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(s,".");
var package_PLUS_class_name = (cljs.core.truth_(last_dot)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),last_dot)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(last_dot + (1)),((s).length)))], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null)], null));
return package_PLUS_class_name;
})():(function (){var p = cljs.core.first(spec);
var cs = cljs.core.rest(spec);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cs], null);
})());
var package$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78880,(0),null);
var classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78880,(1),null);
var seq__78883 = cljs.core.seq(classes);
var chunk__78884 = null;
var count__78885 = (0);
var i__78886 = (0);
while(true){
if((i__78886 < count__78885)){
var class$ = chunk__78884.cljs$core$IIndexed$_nth$arity$2(null,i__78886);
var fq_class_name_79926 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(package$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):class$));
if(cljs.core.truth_(sci.impl.interop.resolve_class(ctx,fq_class_name_79926))){
var cnn_79929 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_79929,new cljs.core.Keyword(null,"imports","imports",-1249933394),class$], null),fq_class_name_79926);
} else {
var temp__5751__auto___79930 = sci.impl.records.resolve_record_class.cljs$core$IFn$_invoke$arity$3(ctx,package$,class$);
if(cljs.core.truth_(temp__5751__auto___79930)){
var rec_79931 = temp__5751__auto___79930;
var cnn_79932 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_79932,class$], null),rec_79931);
} else {
throw (new Error(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fq_class_name_79926)].join('')));
}
}


var G__79936 = seq__78883;
var G__79937 = chunk__78884;
var G__79938 = count__78885;
var G__79939 = (i__78886 + (1));
seq__78883 = G__79936;
chunk__78884 = G__79937;
count__78885 = G__79938;
i__78886 = G__79939;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__78883);
if(temp__5753__auto__){
var seq__78883__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__78883__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__78883__$1);
var G__79940 = cljs.core.chunk_rest(seq__78883__$1);
var G__79941 = c__4556__auto__;
var G__79942 = cljs.core.count(c__4556__auto__);
var G__79943 = (0);
seq__78883 = G__79940;
chunk__78884 = G__79941;
count__78885 = G__79942;
i__78886 = G__79943;
continue;
} else {
var class$ = cljs.core.first(seq__78883__$1);
var fq_class_name_79944 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(package$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):class$));
if(cljs.core.truth_(sci.impl.interop.resolve_class(ctx,fq_class_name_79944))){
var cnn_79945 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_79945,new cljs.core.Keyword(null,"imports","imports",-1249933394),class$], null),fq_class_name_79944);
} else {
var temp__5751__auto___79946 = sci.impl.records.resolve_record_class.cljs$core$IFn$_invoke$arity$3(ctx,package$,class$);
if(cljs.core.truth_(temp__5751__auto___79946)){
var rec_79947 = temp__5751__auto___79946;
var cnn_79948 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_79948,class$], null),rec_79947);
} else {
throw (new Error(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fq_class_name_79944)].join('')));
}
}


var G__79951 = cljs.core.next(seq__78883__$1);
var G__79952 = null;
var G__79953 = (0);
var G__79954 = (0);
seq__78883 = G__79951;
chunk__78884 = G__79952;
count__78885 = G__79953;
i__78886 = G__79954;
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
(sci.impl.interpreter.eval_import.cljs$lang$applyTo = (function (seq78873){
var G__78874 = cljs.core.first(seq78873);
var seq78873__$1 = cljs.core.next(seq78873);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78874,seq78873__$1);
}));

sci.impl.interpreter.eval_set_BANG_ = (function sci$impl$interpreter$eval_set_BANG_(ctx,p__78902){
var vec__78905 = p__78902;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78905,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78905,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78905,(2),null);
var obj__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.interpreter.interpret.call(null,ctx,obj));
var v__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.interpreter.interpret.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}
});
sci.impl.interpreter.eval_do_STAR_ = (function sci$impl$interpreter$eval_do_STAR_(ctx,exprs){
var G__78914 = exprs;
var vec__78916 = G__78914;
var seq__78917 = cljs.core.seq(vec__78916);
var first__78918 = cljs.core.first(seq__78917);
var seq__78917__$1 = cljs.core.next(seq__78917);
var expr = first__78918;
var exprs__$1 = seq__78917__$1;
var G__78914__$1 = G__78914;
while(true){
var vec__78920 = G__78914__$1;
var seq__78921 = cljs.core.seq(vec__78920);
var first__78922 = cljs.core.first(seq__78921);
var seq__78921__$1 = cljs.core.next(seq__78921);
var expr__$1 = first__78922;
var exprs__$2 = seq__78921__$1;
var ret = (function (){try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.interpreter.interpret.call(null,ctx,expr__$1));
}catch (e78923){if((e78923 instanceof Error)){
var e = e78923;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr__$1);
} else {
throw e78923;

}
}})();
var temp__5751__auto__ = cljs.core.seq(exprs__$2);
if(temp__5751__auto__){
var exprs__$3 = temp__5751__auto__;
var G__79961 = exprs__$3;
G__78914__$1 = G__79961;
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
var G__79120 = cljs.core.count(args);
switch (G__79120) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg78929 = (function (){var G__79122 = ctx;
var G__79123 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79122,G__79123) : sci.impl.interpreter.interpret.call(null,G__79122,G__79123));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg78929) : f.call(null,arg78929));

break;
case (2):
var arg78930 = (function (){var G__79126 = ctx;
var G__79127 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79126,G__79127) : sci.impl.interpreter.interpret.call(null,G__79126,G__79127));
})();
var args__$1 = cljs.core.rest(args);
var arg78931 = (function (){var G__79128 = ctx;
var G__79129 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79128,G__79129) : sci.impl.interpreter.interpret.call(null,G__79128,G__79129));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg78930,arg78931) : f.call(null,arg78930,arg78931));

break;
case (3):
var arg78932 = (function (){var G__79130 = ctx;
var G__79131 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79130,G__79131) : sci.impl.interpreter.interpret.call(null,G__79130,G__79131));
})();
var args__$1 = cljs.core.rest(args);
var arg78933 = (function (){var G__79133 = ctx;
var G__79134 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79133,G__79134) : sci.impl.interpreter.interpret.call(null,G__79133,G__79134));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78934 = (function (){var G__79138 = ctx;
var G__79139 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79138,G__79139) : sci.impl.interpreter.interpret.call(null,G__79138,G__79139));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg78932,arg78933,arg78934) : f.call(null,arg78932,arg78933,arg78934));

break;
case (4):
var arg78935 = (function (){var G__79140 = ctx;
var G__79141 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79140,G__79141) : sci.impl.interpreter.interpret.call(null,G__79140,G__79141));
})();
var args__$1 = cljs.core.rest(args);
var arg78936 = (function (){var G__79142 = ctx;
var G__79143 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79142,G__79143) : sci.impl.interpreter.interpret.call(null,G__79142,G__79143));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78937 = (function (){var G__79145 = ctx;
var G__79146 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79145,G__79146) : sci.impl.interpreter.interpret.call(null,G__79145,G__79146));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78938 = (function (){var G__79147 = ctx;
var G__79148 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79147,G__79148) : sci.impl.interpreter.interpret.call(null,G__79147,G__79148));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg78935,arg78936,arg78937,arg78938) : f.call(null,arg78935,arg78936,arg78937,arg78938));

break;
case (5):
var arg78939 = (function (){var G__79149 = ctx;
var G__79150 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79149,G__79150) : sci.impl.interpreter.interpret.call(null,G__79149,G__79150));
})();
var args__$1 = cljs.core.rest(args);
var arg78940 = (function (){var G__79152 = ctx;
var G__79154 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79152,G__79154) : sci.impl.interpreter.interpret.call(null,G__79152,G__79154));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78941 = (function (){var G__79155 = ctx;
var G__79156 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79155,G__79156) : sci.impl.interpreter.interpret.call(null,G__79155,G__79156));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78942 = (function (){var G__79158 = ctx;
var G__79159 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79158,G__79159) : sci.impl.interpreter.interpret.call(null,G__79158,G__79159));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78943 = (function (){var G__79160 = ctx;
var G__79161 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79160,G__79161) : sci.impl.interpreter.interpret.call(null,G__79160,G__79161));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg78939,arg78940,arg78941,arg78942,arg78943) : f.call(null,arg78939,arg78940,arg78941,arg78942,arg78943));

break;
case (6):
var arg78944 = (function (){var G__79165 = ctx;
var G__79166 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79165,G__79166) : sci.impl.interpreter.interpret.call(null,G__79165,G__79166));
})();
var args__$1 = cljs.core.rest(args);
var arg78945 = (function (){var G__79168 = ctx;
var G__79169 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79168,G__79169) : sci.impl.interpreter.interpret.call(null,G__79168,G__79169));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78946 = (function (){var G__79171 = ctx;
var G__79172 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79171,G__79172) : sci.impl.interpreter.interpret.call(null,G__79171,G__79172));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78947 = (function (){var G__79173 = ctx;
var G__79174 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79173,G__79174) : sci.impl.interpreter.interpret.call(null,G__79173,G__79174));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78948 = (function (){var G__79175 = ctx;
var G__79176 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79175,G__79176) : sci.impl.interpreter.interpret.call(null,G__79175,G__79176));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78949 = (function (){var G__79177 = ctx;
var G__79178 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79177,G__79178) : sci.impl.interpreter.interpret.call(null,G__79177,G__79178));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg78944,arg78945,arg78946,arg78947,arg78948,arg78949) : f.call(null,arg78944,arg78945,arg78946,arg78947,arg78948,arg78949));

break;
case (7):
var arg78950 = (function (){var G__79181 = ctx;
var G__79182 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79181,G__79182) : sci.impl.interpreter.interpret.call(null,G__79181,G__79182));
})();
var args__$1 = cljs.core.rest(args);
var arg78951 = (function (){var G__79183 = ctx;
var G__79184 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79183,G__79184) : sci.impl.interpreter.interpret.call(null,G__79183,G__79184));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78952 = (function (){var G__79186 = ctx;
var G__79187 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79186,G__79187) : sci.impl.interpreter.interpret.call(null,G__79186,G__79187));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78953 = (function (){var G__79188 = ctx;
var G__79189 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79188,G__79189) : sci.impl.interpreter.interpret.call(null,G__79188,G__79189));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78954 = (function (){var G__79190 = ctx;
var G__79191 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79190,G__79191) : sci.impl.interpreter.interpret.call(null,G__79190,G__79191));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78955 = (function (){var G__79193 = ctx;
var G__79194 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79193,G__79194) : sci.impl.interpreter.interpret.call(null,G__79193,G__79194));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78956 = (function (){var G__79195 = ctx;
var G__79196 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79195,G__79196) : sci.impl.interpreter.interpret.call(null,G__79195,G__79196));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg78950,arg78951,arg78952,arg78953,arg78954,arg78955,arg78956) : f.call(null,arg78950,arg78951,arg78952,arg78953,arg78954,arg78955,arg78956));

break;
case (8):
var arg78957 = (function (){var G__79198 = ctx;
var G__79199 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79198,G__79199) : sci.impl.interpreter.interpret.call(null,G__79198,G__79199));
})();
var args__$1 = cljs.core.rest(args);
var arg78958 = (function (){var G__79200 = ctx;
var G__79201 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79200,G__79201) : sci.impl.interpreter.interpret.call(null,G__79200,G__79201));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78959 = (function (){var G__79202 = ctx;
var G__79203 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79202,G__79203) : sci.impl.interpreter.interpret.call(null,G__79202,G__79203));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78960 = (function (){var G__79204 = ctx;
var G__79205 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79204,G__79205) : sci.impl.interpreter.interpret.call(null,G__79204,G__79205));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78961 = (function (){var G__79207 = ctx;
var G__79208 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79207,G__79208) : sci.impl.interpreter.interpret.call(null,G__79207,G__79208));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78962 = (function (){var G__79210 = ctx;
var G__79211 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79210,G__79211) : sci.impl.interpreter.interpret.call(null,G__79210,G__79211));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78963 = (function (){var G__79213 = ctx;
var G__79214 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79213,G__79214) : sci.impl.interpreter.interpret.call(null,G__79213,G__79214));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg78964 = (function (){var G__79215 = ctx;
var G__79216 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79215,G__79216) : sci.impl.interpreter.interpret.call(null,G__79215,G__79216));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg78957,arg78958,arg78959,arg78960,arg78961,arg78962,arg78963,arg78964) : f.call(null,arg78957,arg78958,arg78959,arg78960,arg78961,arg78962,arg78963,arg78964));

break;
case (9):
var arg78965 = (function (){var G__79217 = ctx;
var G__79218 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79217,G__79218) : sci.impl.interpreter.interpret.call(null,G__79217,G__79218));
})();
var args__$1 = cljs.core.rest(args);
var arg78966 = (function (){var G__79219 = ctx;
var G__79220 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79219,G__79220) : sci.impl.interpreter.interpret.call(null,G__79219,G__79220));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78967 = (function (){var G__79222 = ctx;
var G__79223 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79222,G__79223) : sci.impl.interpreter.interpret.call(null,G__79222,G__79223));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78968 = (function (){var G__79225 = ctx;
var G__79226 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79225,G__79226) : sci.impl.interpreter.interpret.call(null,G__79225,G__79226));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78969 = (function (){var G__79227 = ctx;
var G__79228 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79227,G__79228) : sci.impl.interpreter.interpret.call(null,G__79227,G__79228));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78970 = (function (){var G__79229 = ctx;
var G__79230 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79229,G__79230) : sci.impl.interpreter.interpret.call(null,G__79229,G__79230));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78971 = (function (){var G__79231 = ctx;
var G__79232 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79231,G__79232) : sci.impl.interpreter.interpret.call(null,G__79231,G__79232));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg78972 = (function (){var G__79233 = ctx;
var G__79234 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79233,G__79234) : sci.impl.interpreter.interpret.call(null,G__79233,G__79234));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg78973 = (function (){var G__79235 = ctx;
var G__79236 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79235,G__79236) : sci.impl.interpreter.interpret.call(null,G__79235,G__79236));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg78965,arg78966,arg78967,arg78968,arg78969,arg78970,arg78971,arg78972,arg78973) : f.call(null,arg78965,arg78966,arg78967,arg78968,arg78969,arg78970,arg78971,arg78972,arg78973));

break;
case (10):
var arg78974 = (function (){var G__79237 = ctx;
var G__79238 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79237,G__79238) : sci.impl.interpreter.interpret.call(null,G__79237,G__79238));
})();
var args__$1 = cljs.core.rest(args);
var arg78975 = (function (){var G__79240 = ctx;
var G__79241 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79240,G__79241) : sci.impl.interpreter.interpret.call(null,G__79240,G__79241));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78976 = (function (){var G__79242 = ctx;
var G__79243 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79242,G__79243) : sci.impl.interpreter.interpret.call(null,G__79242,G__79243));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78977 = (function (){var G__79244 = ctx;
var G__79245 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79244,G__79245) : sci.impl.interpreter.interpret.call(null,G__79244,G__79245));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78978 = (function (){var G__79247 = ctx;
var G__79248 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79247,G__79248) : sci.impl.interpreter.interpret.call(null,G__79247,G__79248));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78979 = (function (){var G__79249 = ctx;
var G__79250 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79249,G__79250) : sci.impl.interpreter.interpret.call(null,G__79249,G__79250));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78980 = (function (){var G__79252 = ctx;
var G__79253 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79252,G__79253) : sci.impl.interpreter.interpret.call(null,G__79252,G__79253));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg78981 = (function (){var G__79254 = ctx;
var G__79255 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79254,G__79255) : sci.impl.interpreter.interpret.call(null,G__79254,G__79255));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg78982 = (function (){var G__79258 = ctx;
var G__79259 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79258,G__79259) : sci.impl.interpreter.interpret.call(null,G__79258,G__79259));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg78983 = (function (){var G__79265 = ctx;
var G__79266 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79265,G__79266) : sci.impl.interpreter.interpret.call(null,G__79265,G__79266));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg78974,arg78975,arg78976,arg78977,arg78978,arg78979,arg78980,arg78981,arg78982,arg78983) : f.call(null,arg78974,arg78975,arg78976,arg78977,arg78978,arg78979,arg78980,arg78981,arg78982,arg78983));

break;
case (11):
var arg78984 = (function (){var G__79268 = ctx;
var G__79269 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79268,G__79269) : sci.impl.interpreter.interpret.call(null,G__79268,G__79269));
})();
var args__$1 = cljs.core.rest(args);
var arg78985 = (function (){var G__79271 = ctx;
var G__79272 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79271,G__79272) : sci.impl.interpreter.interpret.call(null,G__79271,G__79272));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78986 = (function (){var G__79274 = ctx;
var G__79275 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79274,G__79275) : sci.impl.interpreter.interpret.call(null,G__79274,G__79275));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78987 = (function (){var G__79277 = ctx;
var G__79278 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79277,G__79278) : sci.impl.interpreter.interpret.call(null,G__79277,G__79278));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78988 = (function (){var G__79282 = ctx;
var G__79283 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79282,G__79283) : sci.impl.interpreter.interpret.call(null,G__79282,G__79283));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78989 = (function (){var G__79285 = ctx;
var G__79286 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79285,G__79286) : sci.impl.interpreter.interpret.call(null,G__79285,G__79286));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78990 = (function (){var G__79288 = ctx;
var G__79289 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79288,G__79289) : sci.impl.interpreter.interpret.call(null,G__79288,G__79289));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg78991 = (function (){var G__79290 = ctx;
var G__79291 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79290,G__79291) : sci.impl.interpreter.interpret.call(null,G__79290,G__79291));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg78992 = (function (){var G__79292 = ctx;
var G__79293 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79292,G__79293) : sci.impl.interpreter.interpret.call(null,G__79292,G__79293));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg78993 = (function (){var G__79294 = ctx;
var G__79295 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79294,G__79295) : sci.impl.interpreter.interpret.call(null,G__79294,G__79295));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg78994 = (function (){var G__79296 = ctx;
var G__79297 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79296,G__79297) : sci.impl.interpreter.interpret.call(null,G__79296,G__79297));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg78984,arg78985,arg78986,arg78987,arg78988,arg78989,arg78990,arg78991,arg78992,arg78993,arg78994) : f.call(null,arg78984,arg78985,arg78986,arg78987,arg78988,arg78989,arg78990,arg78991,arg78992,arg78993,arg78994));

break;
case (12):
var arg78995 = (function (){var G__79303 = ctx;
var G__79304 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79303,G__79304) : sci.impl.interpreter.interpret.call(null,G__79303,G__79304));
})();
var args__$1 = cljs.core.rest(args);
var arg78996 = (function (){var G__79305 = ctx;
var G__79306 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79305,G__79306) : sci.impl.interpreter.interpret.call(null,G__79305,G__79306));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78997 = (function (){var G__79307 = ctx;
var G__79308 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79307,G__79308) : sci.impl.interpreter.interpret.call(null,G__79307,G__79308));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78998 = (function (){var G__79310 = ctx;
var G__79311 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79310,G__79311) : sci.impl.interpreter.interpret.call(null,G__79310,G__79311));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78999 = (function (){var G__79312 = ctx;
var G__79313 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79312,G__79313) : sci.impl.interpreter.interpret.call(null,G__79312,G__79313));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg79000 = (function (){var G__79316 = ctx;
var G__79317 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79316,G__79317) : sci.impl.interpreter.interpret.call(null,G__79316,G__79317));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg79001 = (function (){var G__79318 = ctx;
var G__79319 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79318,G__79319) : sci.impl.interpreter.interpret.call(null,G__79318,G__79319));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg79002 = (function (){var G__79320 = ctx;
var G__79321 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79320,G__79321) : sci.impl.interpreter.interpret.call(null,G__79320,G__79321));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg79003 = (function (){var G__79322 = ctx;
var G__79323 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79322,G__79323) : sci.impl.interpreter.interpret.call(null,G__79322,G__79323));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg79004 = (function (){var G__79325 = ctx;
var G__79326 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79325,G__79326) : sci.impl.interpreter.interpret.call(null,G__79325,G__79326));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg79005 = (function (){var G__79328 = ctx;
var G__79329 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79328,G__79329) : sci.impl.interpreter.interpret.call(null,G__79328,G__79329));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg79006 = (function (){var G__79330 = ctx;
var G__79331 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79330,G__79331) : sci.impl.interpreter.interpret.call(null,G__79330,G__79331));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg78995,arg78996,arg78997,arg78998,arg78999,arg79000,arg79001,arg79002,arg79003,arg79004,arg79005,arg79006) : f.call(null,arg78995,arg78996,arg78997,arg78998,arg78999,arg79000,arg79001,arg79002,arg79003,arg79004,arg79005,arg79006));

break;
case (13):
var arg79008 = (function (){var G__79333 = ctx;
var G__79334 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79333,G__79334) : sci.impl.interpreter.interpret.call(null,G__79333,G__79334));
})();
var args__$1 = cljs.core.rest(args);
var arg79009 = (function (){var G__79335 = ctx;
var G__79336 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79335,G__79336) : sci.impl.interpreter.interpret.call(null,G__79335,G__79336));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg79010 = (function (){var G__79337 = ctx;
var G__79338 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79337,G__79338) : sci.impl.interpreter.interpret.call(null,G__79337,G__79338));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg79011 = (function (){var G__79340 = ctx;
var G__79341 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79340,G__79341) : sci.impl.interpreter.interpret.call(null,G__79340,G__79341));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg79012 = (function (){var G__79343 = ctx;
var G__79344 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79343,G__79344) : sci.impl.interpreter.interpret.call(null,G__79343,G__79344));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg79013 = (function (){var G__79345 = ctx;
var G__79346 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79345,G__79346) : sci.impl.interpreter.interpret.call(null,G__79345,G__79346));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg79014 = (function (){var G__79348 = ctx;
var G__79349 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79348,G__79349) : sci.impl.interpreter.interpret.call(null,G__79348,G__79349));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg79015 = (function (){var G__79350 = ctx;
var G__79351 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79350,G__79351) : sci.impl.interpreter.interpret.call(null,G__79350,G__79351));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg79016 = (function (){var G__79355 = ctx;
var G__79356 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79355,G__79356) : sci.impl.interpreter.interpret.call(null,G__79355,G__79356));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg79017 = (function (){var G__79358 = ctx;
var G__79359 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79358,G__79359) : sci.impl.interpreter.interpret.call(null,G__79358,G__79359));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg79018 = (function (){var G__79360 = ctx;
var G__79361 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79360,G__79361) : sci.impl.interpreter.interpret.call(null,G__79360,G__79361));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg79019 = (function (){var G__79362 = ctx;
var G__79363 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79362,G__79363) : sci.impl.interpreter.interpret.call(null,G__79362,G__79363));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg79020 = (function (){var G__79368 = ctx;
var G__79369 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79368,G__79369) : sci.impl.interpreter.interpret.call(null,G__79368,G__79369));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg79008,arg79009,arg79010,arg79011,arg79012,arg79013,arg79014,arg79015,arg79016,arg79017,arg79018,arg79019,arg79020) : f.call(null,arg79008,arg79009,arg79010,arg79011,arg79012,arg79013,arg79014,arg79015,arg79016,arg79017,arg79018,arg79019,arg79020));

break;
case (14):
var arg79021 = (function (){var G__79373 = ctx;
var G__79374 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79373,G__79374) : sci.impl.interpreter.interpret.call(null,G__79373,G__79374));
})();
var args__$1 = cljs.core.rest(args);
var arg79022 = (function (){var G__79375 = ctx;
var G__79376 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79375,G__79376) : sci.impl.interpreter.interpret.call(null,G__79375,G__79376));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg79023 = (function (){var G__79378 = ctx;
var G__79379 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79378,G__79379) : sci.impl.interpreter.interpret.call(null,G__79378,G__79379));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg79024 = (function (){var G__79380 = ctx;
var G__79381 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79380,G__79381) : sci.impl.interpreter.interpret.call(null,G__79380,G__79381));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg79025 = (function (){var G__79382 = ctx;
var G__79383 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79382,G__79383) : sci.impl.interpreter.interpret.call(null,G__79382,G__79383));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg79026 = (function (){var G__79385 = ctx;
var G__79386 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79385,G__79386) : sci.impl.interpreter.interpret.call(null,G__79385,G__79386));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg79027 = (function (){var G__79387 = ctx;
var G__79388 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79387,G__79388) : sci.impl.interpreter.interpret.call(null,G__79387,G__79388));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg79028 = (function (){var G__79389 = ctx;
var G__79390 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79389,G__79390) : sci.impl.interpreter.interpret.call(null,G__79389,G__79390));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg79029 = (function (){var G__79395 = ctx;
var G__79396 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79395,G__79396) : sci.impl.interpreter.interpret.call(null,G__79395,G__79396));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg79030 = (function (){var G__79399 = ctx;
var G__79400 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79399,G__79400) : sci.impl.interpreter.interpret.call(null,G__79399,G__79400));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg79031 = (function (){var G__79405 = ctx;
var G__79406 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79405,G__79406) : sci.impl.interpreter.interpret.call(null,G__79405,G__79406));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg79032 = (function (){var G__79408 = ctx;
var G__79409 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79408,G__79409) : sci.impl.interpreter.interpret.call(null,G__79408,G__79409));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg79033 = (function (){var G__79414 = ctx;
var G__79415 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79414,G__79415) : sci.impl.interpreter.interpret.call(null,G__79414,G__79415));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg79034 = (function (){var G__79417 = ctx;
var G__79418 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79417,G__79418) : sci.impl.interpreter.interpret.call(null,G__79417,G__79418));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg79021,arg79022,arg79023,arg79024,arg79025,arg79026,arg79027,arg79028,arg79029,arg79030,arg79031,arg79032,arg79033,arg79034) : f.call(null,arg79021,arg79022,arg79023,arg79024,arg79025,arg79026,arg79027,arg79028,arg79029,arg79030,arg79031,arg79032,arg79033,arg79034));

break;
case (15):
var arg79035 = (function (){var G__79421 = ctx;
var G__79422 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79421,G__79422) : sci.impl.interpreter.interpret.call(null,G__79421,G__79422));
})();
var args__$1 = cljs.core.rest(args);
var arg79036 = (function (){var G__79424 = ctx;
var G__79425 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79424,G__79425) : sci.impl.interpreter.interpret.call(null,G__79424,G__79425));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg79037 = (function (){var G__79427 = ctx;
var G__79428 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79427,G__79428) : sci.impl.interpreter.interpret.call(null,G__79427,G__79428));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg79038 = (function (){var G__79430 = ctx;
var G__79431 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79430,G__79431) : sci.impl.interpreter.interpret.call(null,G__79430,G__79431));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg79039 = (function (){var G__79432 = ctx;
var G__79433 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79432,G__79433) : sci.impl.interpreter.interpret.call(null,G__79432,G__79433));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg79040 = (function (){var G__79435 = ctx;
var G__79436 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79435,G__79436) : sci.impl.interpreter.interpret.call(null,G__79435,G__79436));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg79041 = (function (){var G__79437 = ctx;
var G__79438 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79437,G__79438) : sci.impl.interpreter.interpret.call(null,G__79437,G__79438));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg79042 = (function (){var G__79439 = ctx;
var G__79440 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79439,G__79440) : sci.impl.interpreter.interpret.call(null,G__79439,G__79440));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg79043 = (function (){var G__79442 = ctx;
var G__79443 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79442,G__79443) : sci.impl.interpreter.interpret.call(null,G__79442,G__79443));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg79044 = (function (){var G__79445 = ctx;
var G__79446 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79445,G__79446) : sci.impl.interpreter.interpret.call(null,G__79445,G__79446));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg79045 = (function (){var G__79447 = ctx;
var G__79448 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79447,G__79448) : sci.impl.interpreter.interpret.call(null,G__79447,G__79448));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg79046 = (function (){var G__79449 = ctx;
var G__79450 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79449,G__79450) : sci.impl.interpreter.interpret.call(null,G__79449,G__79450));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg79047 = (function (){var G__79452 = ctx;
var G__79453 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79452,G__79453) : sci.impl.interpreter.interpret.call(null,G__79452,G__79453));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg79048 = (function (){var G__79454 = ctx;
var G__79455 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79454,G__79455) : sci.impl.interpreter.interpret.call(null,G__79454,G__79455));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg79049 = (function (){var G__79456 = ctx;
var G__79457 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79456,G__79457) : sci.impl.interpreter.interpret.call(null,G__79456,G__79457));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg79035,arg79036,arg79037,arg79038,arg79039,arg79040,arg79041,arg79042,arg79043,arg79044,arg79045,arg79046,arg79047,arg79048,arg79049) : f.call(null,arg79035,arg79036,arg79037,arg79038,arg79039,arg79040,arg79041,arg79042,arg79043,arg79044,arg79045,arg79046,arg79047,arg79048,arg79049));

break;
case (16):
var arg79050 = (function (){var G__79460 = ctx;
var G__79461 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79460,G__79461) : sci.impl.interpreter.interpret.call(null,G__79460,G__79461));
})();
var args__$1 = cljs.core.rest(args);
var arg79051 = (function (){var G__79463 = ctx;
var G__79464 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79463,G__79464) : sci.impl.interpreter.interpret.call(null,G__79463,G__79464));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg79052 = (function (){var G__79466 = ctx;
var G__79467 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79466,G__79467) : sci.impl.interpreter.interpret.call(null,G__79466,G__79467));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg79053 = (function (){var G__79468 = ctx;
var G__79469 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79468,G__79469) : sci.impl.interpreter.interpret.call(null,G__79468,G__79469));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg79054 = (function (){var G__79471 = ctx;
var G__79472 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79471,G__79472) : sci.impl.interpreter.interpret.call(null,G__79471,G__79472));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg79055 = (function (){var G__79473 = ctx;
var G__79474 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79473,G__79474) : sci.impl.interpreter.interpret.call(null,G__79473,G__79474));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg79056 = (function (){var G__79476 = ctx;
var G__79477 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79476,G__79477) : sci.impl.interpreter.interpret.call(null,G__79476,G__79477));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg79057 = (function (){var G__79478 = ctx;
var G__79479 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79478,G__79479) : sci.impl.interpreter.interpret.call(null,G__79478,G__79479));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg79058 = (function (){var G__79480 = ctx;
var G__79481 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79480,G__79481) : sci.impl.interpreter.interpret.call(null,G__79480,G__79481));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg79059 = (function (){var G__79482 = ctx;
var G__79483 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79482,G__79483) : sci.impl.interpreter.interpret.call(null,G__79482,G__79483));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg79060 = (function (){var G__79485 = ctx;
var G__79486 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79485,G__79486) : sci.impl.interpreter.interpret.call(null,G__79485,G__79486));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg79061 = (function (){var G__79487 = ctx;
var G__79488 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79487,G__79488) : sci.impl.interpreter.interpret.call(null,G__79487,G__79488));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg79062 = (function (){var G__79489 = ctx;
var G__79490 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79489,G__79490) : sci.impl.interpreter.interpret.call(null,G__79489,G__79490));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg79063 = (function (){var G__79491 = ctx;
var G__79492 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79491,G__79492) : sci.impl.interpreter.interpret.call(null,G__79491,G__79492));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg79064 = (function (){var G__79494 = ctx;
var G__79495 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79494,G__79495) : sci.impl.interpreter.interpret.call(null,G__79494,G__79495));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg79065 = (function (){var G__79497 = ctx;
var G__79498 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79497,G__79498) : sci.impl.interpreter.interpret.call(null,G__79497,G__79498));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg79050,arg79051,arg79052,arg79053,arg79054,arg79055,arg79056,arg79057,arg79058,arg79059,arg79060,arg79061,arg79062,arg79063,arg79064,arg79065) : f.call(null,arg79050,arg79051,arg79052,arg79053,arg79054,arg79055,arg79056,arg79057,arg79058,arg79059,arg79060,arg79061,arg79062,arg79063,arg79064,arg79065));

break;
case (17):
var arg79066 = (function (){var G__79504 = ctx;
var G__79505 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79504,G__79505) : sci.impl.interpreter.interpret.call(null,G__79504,G__79505));
})();
var args__$1 = cljs.core.rest(args);
var arg79067 = (function (){var G__79506 = ctx;
var G__79507 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79506,G__79507) : sci.impl.interpreter.interpret.call(null,G__79506,G__79507));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg79068 = (function (){var G__79508 = ctx;
var G__79509 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79508,G__79509) : sci.impl.interpreter.interpret.call(null,G__79508,G__79509));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg79069 = (function (){var G__79510 = ctx;
var G__79511 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79510,G__79511) : sci.impl.interpreter.interpret.call(null,G__79510,G__79511));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg79070 = (function (){var G__79514 = ctx;
var G__79515 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79514,G__79515) : sci.impl.interpreter.interpret.call(null,G__79514,G__79515));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg79071 = (function (){var G__79516 = ctx;
var G__79517 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79516,G__79517) : sci.impl.interpreter.interpret.call(null,G__79516,G__79517));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg79072 = (function (){var G__79518 = ctx;
var G__79519 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79518,G__79519) : sci.impl.interpreter.interpret.call(null,G__79518,G__79519));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg79073 = (function (){var G__79521 = ctx;
var G__79522 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79521,G__79522) : sci.impl.interpreter.interpret.call(null,G__79521,G__79522));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg79074 = (function (){var G__79524 = ctx;
var G__79525 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79524,G__79525) : sci.impl.interpreter.interpret.call(null,G__79524,G__79525));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg79075 = (function (){var G__79527 = ctx;
var G__79528 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79527,G__79528) : sci.impl.interpreter.interpret.call(null,G__79527,G__79528));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg79076 = (function (){var G__79529 = ctx;
var G__79530 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79529,G__79530) : sci.impl.interpreter.interpret.call(null,G__79529,G__79530));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg79077 = (function (){var G__79532 = ctx;
var G__79533 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79532,G__79533) : sci.impl.interpreter.interpret.call(null,G__79532,G__79533));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg79078 = (function (){var G__79537 = ctx;
var G__79538 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79537,G__79538) : sci.impl.interpreter.interpret.call(null,G__79537,G__79538));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg79079 = (function (){var G__79539 = ctx;
var G__79540 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79539,G__79540) : sci.impl.interpreter.interpret.call(null,G__79539,G__79540));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg79080 = (function (){var G__79541 = ctx;
var G__79542 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79541,G__79542) : sci.impl.interpreter.interpret.call(null,G__79541,G__79542));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg79081 = (function (){var G__79543 = ctx;
var G__79544 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79543,G__79544) : sci.impl.interpreter.interpret.call(null,G__79543,G__79544));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg79082 = (function (){var G__79546 = ctx;
var G__79547 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79546,G__79547) : sci.impl.interpreter.interpret.call(null,G__79546,G__79547));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg79066,arg79067,arg79068,arg79069,arg79070,arg79071,arg79072,arg79073,arg79074,arg79075,arg79076,arg79077,arg79078,arg79079,arg79080,arg79081,arg79082) : f.call(null,arg79066,arg79067,arg79068,arg79069,arg79070,arg79071,arg79072,arg79073,arg79074,arg79075,arg79076,arg79077,arg79078,arg79079,arg79080,arg79081,arg79082));

break;
case (18):
var arg79083 = (function (){var G__79550 = ctx;
var G__79551 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79550,G__79551) : sci.impl.interpreter.interpret.call(null,G__79550,G__79551));
})();
var args__$1 = cljs.core.rest(args);
var arg79084 = (function (){var G__79552 = ctx;
var G__79553 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79552,G__79553) : sci.impl.interpreter.interpret.call(null,G__79552,G__79553));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg79085 = (function (){var G__79554 = ctx;
var G__79555 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79554,G__79555) : sci.impl.interpreter.interpret.call(null,G__79554,G__79555));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg79086 = (function (){var G__79556 = ctx;
var G__79557 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79556,G__79557) : sci.impl.interpreter.interpret.call(null,G__79556,G__79557));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg79087 = (function (){var G__79558 = ctx;
var G__79559 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79558,G__79559) : sci.impl.interpreter.interpret.call(null,G__79558,G__79559));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg79088 = (function (){var G__79560 = ctx;
var G__79561 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79560,G__79561) : sci.impl.interpreter.interpret.call(null,G__79560,G__79561));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg79089 = (function (){var G__79565 = ctx;
var G__79566 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79565,G__79566) : sci.impl.interpreter.interpret.call(null,G__79565,G__79566));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg79090 = (function (){var G__79567 = ctx;
var G__79568 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79567,G__79568) : sci.impl.interpreter.interpret.call(null,G__79567,G__79568));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg79091 = (function (){var G__79569 = ctx;
var G__79570 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79569,G__79570) : sci.impl.interpreter.interpret.call(null,G__79569,G__79570));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg79092 = (function (){var G__79571 = ctx;
var G__79572 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79571,G__79572) : sci.impl.interpreter.interpret.call(null,G__79571,G__79572));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg79093 = (function (){var G__79573 = ctx;
var G__79574 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79573,G__79574) : sci.impl.interpreter.interpret.call(null,G__79573,G__79574));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg79094 = (function (){var G__79575 = ctx;
var G__79576 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79575,G__79576) : sci.impl.interpreter.interpret.call(null,G__79575,G__79576));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg79095 = (function (){var G__79577 = ctx;
var G__79578 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79577,G__79578) : sci.impl.interpreter.interpret.call(null,G__79577,G__79578));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg79096 = (function (){var G__79579 = ctx;
var G__79580 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79579,G__79580) : sci.impl.interpreter.interpret.call(null,G__79579,G__79580));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg79097 = (function (){var G__79581 = ctx;
var G__79582 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79581,G__79582) : sci.impl.interpreter.interpret.call(null,G__79581,G__79582));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg79098 = (function (){var G__79583 = ctx;
var G__79584 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79583,G__79584) : sci.impl.interpreter.interpret.call(null,G__79583,G__79584));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg79099 = (function (){var G__79585 = ctx;
var G__79586 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79585,G__79586) : sci.impl.interpreter.interpret.call(null,G__79585,G__79586));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg79100 = (function (){var G__79590 = ctx;
var G__79591 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79590,G__79591) : sci.impl.interpreter.interpret.call(null,G__79590,G__79591));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg79083,arg79084,arg79085,arg79086,arg79087,arg79088,arg79089,arg79090,arg79091,arg79092,arg79093,arg79094,arg79095,arg79096,arg79097,arg79098,arg79099,arg79100) : f.call(null,arg79083,arg79084,arg79085,arg79086,arg79087,arg79088,arg79089,arg79090,arg79091,arg79092,arg79093,arg79094,arg79095,arg79096,arg79097,arg79098,arg79099,arg79100));

break;
case (19):
var arg79101 = (function (){var G__79592 = ctx;
var G__79593 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79592,G__79593) : sci.impl.interpreter.interpret.call(null,G__79592,G__79593));
})();
var args__$1 = cljs.core.rest(args);
var arg79102 = (function (){var G__79594 = ctx;
var G__79595 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79594,G__79595) : sci.impl.interpreter.interpret.call(null,G__79594,G__79595));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg79103 = (function (){var G__79596 = ctx;
var G__79597 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79596,G__79597) : sci.impl.interpreter.interpret.call(null,G__79596,G__79597));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg79104 = (function (){var G__79598 = ctx;
var G__79599 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79598,G__79599) : sci.impl.interpreter.interpret.call(null,G__79598,G__79599));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg79105 = (function (){var G__79600 = ctx;
var G__79601 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79600,G__79601) : sci.impl.interpreter.interpret.call(null,G__79600,G__79601));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg79106 = (function (){var G__79602 = ctx;
var G__79603 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79602,G__79603) : sci.impl.interpreter.interpret.call(null,G__79602,G__79603));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg79107 = (function (){var G__79604 = ctx;
var G__79605 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79604,G__79605) : sci.impl.interpreter.interpret.call(null,G__79604,G__79605));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg79108 = (function (){var G__79606 = ctx;
var G__79607 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79606,G__79607) : sci.impl.interpreter.interpret.call(null,G__79606,G__79607));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg79109 = (function (){var G__79608 = ctx;
var G__79609 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79608,G__79609) : sci.impl.interpreter.interpret.call(null,G__79608,G__79609));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg79110 = (function (){var G__79610 = ctx;
var G__79611 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79610,G__79611) : sci.impl.interpreter.interpret.call(null,G__79610,G__79611));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg79111 = (function (){var G__79612 = ctx;
var G__79613 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79612,G__79613) : sci.impl.interpreter.interpret.call(null,G__79612,G__79613));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg79112 = (function (){var G__79614 = ctx;
var G__79615 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79614,G__79615) : sci.impl.interpreter.interpret.call(null,G__79614,G__79615));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg79113 = (function (){var G__79619 = ctx;
var G__79620 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79619,G__79620) : sci.impl.interpreter.interpret.call(null,G__79619,G__79620));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg79114 = (function (){var G__79621 = ctx;
var G__79622 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79621,G__79622) : sci.impl.interpreter.interpret.call(null,G__79621,G__79622));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg79115 = (function (){var G__79623 = ctx;
var G__79624 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79623,G__79624) : sci.impl.interpreter.interpret.call(null,G__79623,G__79624));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg79116 = (function (){var G__79625 = ctx;
var G__79626 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79625,G__79626) : sci.impl.interpreter.interpret.call(null,G__79625,G__79626));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg79117 = (function (){var G__79627 = ctx;
var G__79628 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79627,G__79628) : sci.impl.interpreter.interpret.call(null,G__79627,G__79628));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg79118 = (function (){var G__79629 = ctx;
var G__79630 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79629,G__79630) : sci.impl.interpreter.interpret.call(null,G__79629,G__79630));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg79119 = (function (){var G__79631 = ctx;
var G__79632 = cljs.core.first(args__$18);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79631,G__79632) : sci.impl.interpreter.interpret.call(null,G__79631,G__79632));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg79101,arg79102,arg79103,arg79104,arg79105,arg79106,arg79107,arg79108,arg79109,arg79110,arg79111,arg79112,arg79113,arg79114,arg79115,arg79116,arg79117,arg79118,arg79119) : f.call(null,arg79101,arg79102,arg79103,arg79104,arg79105,arg79106,arg79107,arg79108,arg79109,arg79110,arg79111,arg79112,arg79113,arg79114,arg79115,arg79116,arg79117,arg79118,arg79119));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__67270_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__67270_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__67270_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.interpreter.eval_special_call = (function sci$impl$interpreter$eval_special_call(ctx,f_sym,expr){
var G__79637 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__79637)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_instance_method_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__79637)){
return sci.impl.interpreter.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"import","import",241030818,null),G__79637)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_import,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__79637)){
return sci.impl.interpreter.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__79637)){
return sci.impl.interpreter.eval_if(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__79637)){
return sci.impl.interpreter.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),G__79637)){
return sci.impl.interpreter.macroexpand(ctx,(function (){var G__79644 = ctx;
var G__79645 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79644,G__79645) : sci.impl.interpreter.interpret.call(null,G__79644,G__79645));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__79637)){
return sci.impl.interpreter.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__79637)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_let,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__79637)){
return sci.impl.interpreter.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"use","use",-205850897,null),G__79637)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_use,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__79637)){
return sci.impl.interpreter.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__79637)){
return sci.impl.interpreter.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__79637)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__79637)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_constructor_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),G__79637)){
return sci.impl.interpreter.macroexpand_1(ctx,(function (){var G__79654 = ctx;
var G__79655 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79654,G__79655) : sci.impl.interpreter.interpret.call(null,G__79654,G__79655));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__79637)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_refer,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__79637)){
return (new cljs.core.LazySeq(null,(function (){var G__79657 = ctx;
var G__79658 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79657,G__79658) : sci.impl.interpreter.interpret.call(null,G__79657,G__79658));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__79637)){
return sci.impl.interpreter.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__79637)){
return sci.impl.interpreter.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"resolve","resolve",56086045,null),G__79637)){
return sci.impl.interpreter.eval_resolve(ctx,cljs.core.second(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__79637)){
return sci.impl.interpreter.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__79637)].join('')));

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
}catch (e79666){if((e79666 instanceof Error)){
var e = e79666;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e79666;

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
var ret = ((cljs.core.not(op))?expr:(function (){var G__79693 = op;
var G__79693__$1 = (((G__79693 instanceof cljs.core.Keyword))?G__79693.fqn:null);
switch (G__79693__$1) {
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
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__79683_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__79683_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__79683_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__79684_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__79684_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__79684_SHARP_));
}),cljs.core.vals(expr)));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__79686_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__79686_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__79686_SHARP_));
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
var G__80105 = cljs.core.rest(exprs);
var G__80106 = (function (){var G__79714 = ctx;
var G__79715 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__79714,G__79715) : sci.impl.interpreter.eval_form.call(null,G__79714,G__79715));
})();
exprs = G__80105;
ret = G__80106;
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
var G__80110 = ret__$1;
ret = G__80110;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__79726 = arguments.length;
switch (G__79726) {
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
