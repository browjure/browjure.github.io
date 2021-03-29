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
var G__79729 = xs;
args__$2 = G__79729;
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
var G__79735 = xs;
args__$2 = G__79735;
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
var len__4736__auto___79738 = arguments.length;
var i__4737__auto___79741 = (0);
while(true){
if((i__4737__auto___79741 < len__4736__auto___79738)){
args__4742__auto__.push((arguments[i__4737__auto___79741]));

var G__79742 = (i__4737__auto___79741 + (1));
i__4737__auto___79741 = G__79742;
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
var G__79748 = ctx__$2;
var G__79749 = rest_let_bindings;
ctx__$1 = G__79748;
let_bindings__$1 = G__79749;
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
var G__79751 = nexprs;
exprs__$1 = G__79751;
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
(sci.impl.interpreter.eval_let.cljs$lang$applyTo = (function (seq78239){
var G__78240 = cljs.core.first(seq78239);
var seq78239__$1 = cljs.core.next(seq78239);
var G__78241 = cljs.core.first(seq78239__$1);
var seq78239__$2 = cljs.core.next(seq78239__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78240,G__78241,seq78239__$2);
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
sci.impl.interpreter.eval_def = (function sci$impl$interpreter$eval_def(ctx,p__78251){
var vec__78254 = p__78251;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78254,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78254,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78254,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78254,(3),null);
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
var v = (cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1)))?(function (){var G__78260 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__78260,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__78260;
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
var vec__78272 = libspec;
var seq__78273 = cljs.core.seq(vec__78272);
var first__78274 = cljs.core.first(seq__78273);
var seq__78273__$1 = cljs.core.next(seq__78273);
var lib_name = first__78274;
var opts = seq__78273__$1;
var ret = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),lib_name], null);
var G__78279 = opts;
var vec__78280 = G__78279;
var seq__78281 = cljs.core.seq(vec__78280);
var first__78282 = cljs.core.first(seq__78281);
var seq__78281__$1 = cljs.core.next(seq__78281);
var opt_name = first__78282;
var first__78282__$1 = cljs.core.first(seq__78281__$1);
var seq__78281__$2 = cljs.core.next(seq__78281__$1);
var fst_opt = first__78282__$1;
var rst_opts = seq__78281__$2;
var ret__$1 = ret;
var G__78279__$1 = G__78279;
while(true){
var ret__$2 = ret__$1;
var vec__78291 = G__78279__$1;
var seq__78292 = cljs.core.seq(vec__78291);
var first__78293 = cljs.core.first(seq__78292);
var seq__78292__$1 = cljs.core.next(seq__78292);
var opt_name__$1 = first__78293;
var first__78293__$1 = cljs.core.first(seq__78292__$1);
var seq__78292__$2 = cljs.core.next(seq__78292__$1);
var fst_opt__$1 = first__78293__$1;
var rst_opts__$1 = seq__78292__$2;
if(cljs.core.not(opt_name__$1)){
return ret__$2;
} else {
var G__78295 = opt_name__$1;
var G__78295__$1 = (((G__78295 instanceof cljs.core.Keyword))?G__78295.fqn:null);
switch (G__78295__$1) {
case "as":
var G__79780 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"as","as",1148689641),fst_opt__$1);
var G__79781 = rst_opts__$1;
ret__$1 = G__79780;
G__78279__$1 = G__79781;
continue;

break;
case "reload":
case "reload-all":
case "verbose":
var G__79784 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"reload","reload",863702807),true);
var G__79785 = cljs.core.cons(fst_opt__$1,rst_opts__$1);
ret__$1 = G__79784;
G__78279__$1 = G__79785;
continue;

break;
case "refer":
case "rename":
case "exclude":
case "only":
var G__79786 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,opt_name__$1,fst_opt__$1);
var G__79787 = rst_opts__$1;
ret__$1 = G__79786;
G__78279__$1 = G__79787;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__78295__$1)].join('')));

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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__78300){
var vec__78301 = p__78300;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78301,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78301,(1),null);
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
sci.impl.interpreter.handle_require_libspec_env = (function sci$impl$interpreter$handle_require_libspec_env(env,use_QMARK_,current_ns,the_loaded_ns,lib_name,p__78305){
var map__78306 = p__78305;
var map__78306__$1 = (((((!((map__78306 == null))))?(((((map__78306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78306):map__78306);
var _parsed_libspec = map__78306__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78306__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78306__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78306__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78306__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78306__$1,new cljs.core.Keyword(null,"only","only",1907811652));
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
var vec__78317 = temp__5751__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78317,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78317,(1),null);
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
var map__78323 = sci.impl.interpreter.parse_libspec(libspec);
var map__78323__$1 = (((((!((map__78323 == null))))?(((((map__78323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78323):map__78323);
var parsed_libspec = map__78323__$1;
var lib_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78323__$1,new cljs.core.Keyword(null,"lib-name","lib-name",1158024282));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78323__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
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
var temp__5751__auto____$2 = (function (){var G__78331 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib_name], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__78331) : load_fn.call(null,G__78331));
})();
if(cljs.core.truth_(temp__5751__auto____$2)){
var map__78332 = temp__5751__auto____$2;
var map__78332__$1 = (((((!((map__78332 == null))))?(((((map__78332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78332):map__78332);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78332__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78332__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__78340_79813 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY);
var G__78341_79814 = source;
(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(G__78340_79813,G__78341_79814) : sci.impl.interpreter.eval_string_STAR_.call(null,G__78340_79813,G__78341_79814));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e78337){if((e78337 instanceof Error)){
var e_79816 = e78337;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib_name], 0));

throw e_79816;
} else {
throw e78337;

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
var len__4736__auto___79824 = arguments.length;
var i__4737__auto___79825 = (0);
while(true){
if((i__4737__auto___79825 < len__4736__auto___79824)){
args__4742__auto__.push((arguments[i__4737__auto___79825]));

var G__79828 = (i__4737__auto___79825 + (1));
i__4737__auto___79825 = G__79828;
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
var ret = (function (){var G__78378 = ctx;
var G__78379 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78378,G__78379) : sci.impl.interpreter.interpret.call(null,G__78378,G__78379));
})();
if((ret instanceof cljs.core.Symbol)){
var G__79833 = (function (){var G__78380 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__78380,current_libspec);
} else {
return G__78380;
}
})();
var G__79834 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
var G__79835 = cljs.core.next(args__$1);
libspecs = G__79833;
current_libspec = G__79834;
args__$1 = G__79835;
continue;
} else {
if((ret instanceof cljs.core.Keyword)){
var G__79836 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_libspec,ret));
var G__79837 = null;
var G__79838 = cljs.core.next(args__$1);
libspecs = G__79836;
current_libspec = G__79837;
args__$1 = G__79838;
continue;
} else {
var G__79841 = (function (){var G__78384 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__78384,current_libspec);
} else {
return G__78384;
}
})();
var G__79842 = ret;
var G__79843 = cljs.core.next(args__$1);
libspecs = G__79841;
current_libspec = G__79842;
args__$1 = G__79843;
continue;

}
}
} else {
var libspecs__$1 = (function (){var G__78389 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__78389,current_libspec);
} else {
return G__78389;
}
})();
return cljs.core.run_BANG_(((function (libspecs,current_libspec,args__$1,libspecs__$1){
return (function (p1__78360_SHARP_){
return sci.impl.interpreter.handle_require_libspec(ctx,p1__78360_SHARP_);
});})(libspecs,current_libspec,args__$1,libspecs__$1))
,libspecs__$1);
}
break;
}
}));

(sci.impl.interpreter.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_require.cljs$lang$applyTo = (function (seq78361){
var G__78362 = cljs.core.first(seq78361);
var seq78361__$1 = cljs.core.next(seq78361);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78362,seq78361__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.interpreter.eval_require);
sci.impl.interpreter.eval_use = (function sci$impl$interpreter$eval_use(var_args){
var args__4742__auto__ = [];
var len__4736__auto___79848 = arguments.length;
var i__4737__auto___79850 = (0);
while(true){
if((i__4737__auto___79850 < len__4736__auto___79848)){
args__4742__auto__.push((arguments[i__4737__auto___79850]));

var G__79851 = (i__4737__auto___79850 + (1));
i__4737__auto___79850 = G__79851;
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
(sci.impl.interpreter.eval_use.cljs$lang$applyTo = (function (seq78391){
var G__78392 = cljs.core.first(seq78391);
var seq78391__$1 = cljs.core.next(seq78391);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78392,seq78391__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.interpreter.eval_use);
sci.impl.interpreter.eval_case = (function sci$impl$interpreter$eval_case(ctx,p__78397){
var vec__78400 = p__78397;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78400,(0),null);
var map__78403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78400,(1),null);
var map__78403__$1 = (((((!((map__78403 == null))))?(((((map__78403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78403):map__78403);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78403__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78403__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78403__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.interpreter.interpret.call(null,ctx,case_val));
var temp__5751__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__78408 = temp__5751__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78408,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78408,(1),null);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.interpreter.interpret.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__78411 = ctx;
var G__78412 = cljs.core.second(case_default);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78411,G__78412) : sci.impl.interpreter.interpret.call(null,G__78411,G__78412));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.interpreter.eval_try = (function sci$impl$interpreter$eval_try(ctx,expr){
var map__78413 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__78413__$1 = (((((!((map__78413 == null))))?(((((map__78413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78413):map__78413);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78413__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78413__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78413__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var _STAR_in_try_STAR__orig_val__78426 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__78427 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__78427);

try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.interpreter.interpret.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__78426);
}}catch (e78418){if((e78418 instanceof Error)){
var e = e78418;
var temp__5751__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.interpreter","try-result","sci.impl.interpreter/try-result",1789456125),(function (){var G__78421 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__78422 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78421,G__78422) : sci.impl.interpreter.interpret.call(null,G__78421,G__78422));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__78423 = temp__5751__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78423,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78423,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e78418;

}
}finally {(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.interpreter.interpret.call(null,ctx,finally$));
}});
sci.impl.interpreter.eval_throw = (function sci$impl$interpreter$eval_throw(ctx,p__78430){
var vec__78431 = p__78430;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78431,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78431,(1),null);
var ex__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.interpret.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.interpreter.eval_static_method_invocation = (function sci$impl$interpreter$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__78435_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__78435_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__78435_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.interpreter.eval_constructor_invocation = (function sci$impl$interpreter$eval_constructor_invocation(ctx,p__78438){
var vec__78440 = p__78438;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78440,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78440,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78440,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__78437_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__78437_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__78437_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.interpreter.eval_instance_method_invocation = (function sci$impl$interpreter$eval_instance_method_invocation(p__78454,p__78455){
var map__78456 = p__78454;
var map__78456__$1 = (((((!((map__78456 == null))))?(((((map__78456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78456):map__78456);
var ctx = map__78456__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78456__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__78457 = p__78455;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78457,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78457,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78457,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78457,(3),null);
var _expr = vec__78457;
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

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__78448_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__78448_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__78448_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
}
});
sci.impl.interpreter.eval_in_ns = (function sci$impl$interpreter$eval_in_ns(ctx,p__78476){
var vec__78478 = p__78476;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78478,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78478,(1),null);
var ns_sym = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.interpreter.interpret.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.interpreter.eval_refer = (function sci$impl$interpreter$eval_refer(var_args){
var args__4742__auto__ = [];
var len__4736__auto___79890 = arguments.length;
var i__4737__auto___79892 = (0);
while(true){
if((i__4737__auto___79892 < len__4736__auto___79890)){
args__4742__auto__.push((arguments[i__4737__auto___79892]));

var G__79895 = (i__4737__auto___79892 + (1));
i__4737__auto___79892 = G__79895;
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
var vec__78494 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78494,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78494,(1),null);
var G__78499_79901 = k;
var G__78499_79902__$1 = (((G__78499_79901 instanceof cljs.core.Keyword))?G__78499_79901.fqn:null);
switch (G__78499_79902__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__78499_79901,G__78499_79902__$1,vec__78494,k,v,ns_sym__$1){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__78499_79901,G__78499_79902__$1,vec__78494,k,v,ns_sym__$1))
);

break;
case "only":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__78499_79901,G__78499_79902__$1,vec__78494,k,v,ns_sym__$1){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym__$1], null));
var other_vars = cljs.core.select_keys(other_ns,v);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),cljs.core.merge,other_vars);
});})(exprs__$1,G__78499_79901,G__78499_79902__$1,vec__78494,k,v,ns_sym__$1))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__78499_79902__$1)].join('')));

}

var G__79915 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__79915;
continue;
} else {
return null;
}
break;
}
}));

(sci.impl.interpreter.eval_refer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.interpreter.eval_refer.cljs$lang$applyTo = (function (seq78485){
var G__78487 = cljs.core.first(seq78485);
var seq78485__$1 = cljs.core.next(seq78485);
var G__78488 = cljs.core.first(seq78485__$1);
var seq78485__$2 = cljs.core.next(seq78485__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78487,G__78488,seq78485__$2);
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
var f__$2 = (cljs.core.truth_((function (){var G__78535 = new cljs.core.Keyword(null,"needs-ctx","needs-ctx",-35514403);
var G__78536 = (function (){var G__78539 = f__$1;
var G__78539__$1 = (((G__78539 == null))?null:cljs.core.meta(G__78539));
if((G__78539__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(G__78539__$1);
}
})();
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__78535,G__78536) : sci.impl.utils.kw_identical_QMARK_.call(null,G__78535,G__78536));
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
var len__4736__auto___79939 = arguments.length;
var i__4737__auto___79940 = (0);
while(true){
if((i__4737__auto___79940 < len__4736__auto___79939)){
args__4742__auto__.push((arguments[i__4737__auto___79940]));

var G__79941 = (i__4737__auto___79940 + (1));
i__4737__auto___79940 = G__79941;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sci.impl.interpreter.eval_import.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,import_symbols_or_lists){
var specs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__78549_SHARP_){
if(((cljs.core.seq_QMARK_(p1__78549_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(p1__78549_SHARP_))))){
return cljs.core.second(p1__78549_SHARP_);
} else {
return p1__78549_SHARP_;
}
}),import_symbols_or_lists);
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.core.run_BANG_((function (spec){
var vec__78569 = (((spec instanceof cljs.core.Symbol))?(function (){var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec);
var last_dot = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(s,".");
var package_PLUS_class_name = (cljs.core.truth_(last_dot)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),last_dot)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(last_dot + (1)),((s).length)))], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null)], null));
return package_PLUS_class_name;
})():(function (){var p = cljs.core.first(spec);
var cs = cljs.core.rest(spec);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cs], null);
})());
var package$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78569,(0),null);
var classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78569,(1),null);
var seq__78577 = cljs.core.seq(classes);
var chunk__78578 = null;
var count__78579 = (0);
var i__78580 = (0);
while(true){
if((i__78580 < count__78579)){
var class$ = chunk__78578.cljs$core$IIndexed$_nth$arity$2(null,i__78580);
var fq_class_name_79955 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(package$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):class$));
if(cljs.core.truth_(sci.impl.interop.resolve_class(ctx,fq_class_name_79955))){
var cnn_79957 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_79957,new cljs.core.Keyword(null,"imports","imports",-1249933394),class$], null),fq_class_name_79955);
} else {
var temp__5751__auto___79960 = sci.impl.records.resolve_record_class.cljs$core$IFn$_invoke$arity$3(ctx,package$,class$);
if(cljs.core.truth_(temp__5751__auto___79960)){
var rec_79961 = temp__5751__auto___79960;
var cnn_79962 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_79962,class$], null),rec_79961);
} else {
throw (new Error(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fq_class_name_79955)].join('')));
}
}


var G__79965 = seq__78577;
var G__79966 = chunk__78578;
var G__79967 = count__78579;
var G__79968 = (i__78580 + (1));
seq__78577 = G__79965;
chunk__78578 = G__79966;
count__78579 = G__79967;
i__78580 = G__79968;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__78577);
if(temp__5753__auto__){
var seq__78577__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__78577__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__78577__$1);
var G__79970 = cljs.core.chunk_rest(seq__78577__$1);
var G__79971 = c__4556__auto__;
var G__79972 = cljs.core.count(c__4556__auto__);
var G__79973 = (0);
seq__78577 = G__79970;
chunk__78578 = G__79971;
count__78579 = G__79972;
i__78580 = G__79973;
continue;
} else {
var class$ = cljs.core.first(seq__78577__$1);
var fq_class_name_79974 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(package$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):class$));
if(cljs.core.truth_(sci.impl.interop.resolve_class(ctx,fq_class_name_79974))){
var cnn_79977 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_79977,new cljs.core.Keyword(null,"imports","imports",-1249933394),class$], null),fq_class_name_79974);
} else {
var temp__5751__auto___79981 = sci.impl.records.resolve_record_class.cljs$core$IFn$_invoke$arity$3(ctx,package$,class$);
if(cljs.core.truth_(temp__5751__auto___79981)){
var rec_79984 = temp__5751__auto___79981;
var cnn_79985 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_79985,class$], null),rec_79984);
} else {
throw (new Error(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fq_class_name_79974)].join('')));
}
}


var G__79987 = cljs.core.next(seq__78577__$1);
var G__79988 = null;
var G__79989 = (0);
var G__79990 = (0);
seq__78577 = G__79987;
chunk__78578 = G__79988;
count__78579 = G__79989;
i__78580 = G__79990;
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
(sci.impl.interpreter.eval_import.cljs$lang$applyTo = (function (seq78554){
var G__78555 = cljs.core.first(seq78554);
var seq78554__$1 = cljs.core.next(seq78554);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78555,seq78554__$1);
}));

sci.impl.interpreter.eval_set_BANG_ = (function sci$impl$interpreter$eval_set_BANG_(ctx,p__78629){
var vec__78632 = p__78629;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78632,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78632,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78632,(2),null);
var obj__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.interpreter.interpret.call(null,ctx,obj));
var v__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.interpreter.interpret.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}
});
sci.impl.interpreter.eval_do_STAR_ = (function sci$impl$interpreter$eval_do_STAR_(ctx,exprs){
var G__78648 = exprs;
var vec__78651 = G__78648;
var seq__78652 = cljs.core.seq(vec__78651);
var first__78653 = cljs.core.first(seq__78652);
var seq__78652__$1 = cljs.core.next(seq__78652);
var expr = first__78653;
var exprs__$1 = seq__78652__$1;
var G__78648__$1 = G__78648;
while(true){
var vec__78654 = G__78648__$1;
var seq__78655 = cljs.core.seq(vec__78654);
var first__78656 = cljs.core.first(seq__78655);
var seq__78655__$1 = cljs.core.next(seq__78655);
var expr__$1 = first__78656;
var exprs__$2 = seq__78655__$1;
var ret = (function (){try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.interpreter.interpret.call(null,ctx,expr__$1));
}catch (e78658){if((e78658 instanceof Error)){
var e = e78658;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr__$1);
} else {
throw e78658;

}
}})();
var temp__5751__auto__ = cljs.core.seq(exprs__$2);
if(temp__5751__auto__){
var exprs__$3 = temp__5751__auto__;
var G__80010 = exprs__$3;
G__78648__$1 = G__80010;
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
var G__78864 = cljs.core.count(args);
switch (G__78864) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg78674 = (function (){var G__78869 = ctx;
var G__78870 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78869,G__78870) : sci.impl.interpreter.interpret.call(null,G__78869,G__78870));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg78674) : f.call(null,arg78674));

break;
case (2):
var arg78675 = (function (){var G__78871 = ctx;
var G__78872 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78871,G__78872) : sci.impl.interpreter.interpret.call(null,G__78871,G__78872));
})();
var args__$1 = cljs.core.rest(args);
var arg78676 = (function (){var G__78873 = ctx;
var G__78874 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78873,G__78874) : sci.impl.interpreter.interpret.call(null,G__78873,G__78874));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg78675,arg78676) : f.call(null,arg78675,arg78676));

break;
case (3):
var arg78677 = (function (){var G__78875 = ctx;
var G__78876 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78875,G__78876) : sci.impl.interpreter.interpret.call(null,G__78875,G__78876));
})();
var args__$1 = cljs.core.rest(args);
var arg78678 = (function (){var G__78877 = ctx;
var G__78878 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78877,G__78878) : sci.impl.interpreter.interpret.call(null,G__78877,G__78878));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78679 = (function (){var G__78880 = ctx;
var G__78881 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78880,G__78881) : sci.impl.interpreter.interpret.call(null,G__78880,G__78881));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg78677,arg78678,arg78679) : f.call(null,arg78677,arg78678,arg78679));

break;
case (4):
var arg78680 = (function (){var G__78884 = ctx;
var G__78885 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78884,G__78885) : sci.impl.interpreter.interpret.call(null,G__78884,G__78885));
})();
var args__$1 = cljs.core.rest(args);
var arg78681 = (function (){var G__78887 = ctx;
var G__78888 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78887,G__78888) : sci.impl.interpreter.interpret.call(null,G__78887,G__78888));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78682 = (function (){var G__78890 = ctx;
var G__78891 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78890,G__78891) : sci.impl.interpreter.interpret.call(null,G__78890,G__78891));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78683 = (function (){var G__78892 = ctx;
var G__78893 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78892,G__78893) : sci.impl.interpreter.interpret.call(null,G__78892,G__78893));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg78680,arg78681,arg78682,arg78683) : f.call(null,arg78680,arg78681,arg78682,arg78683));

break;
case (5):
var arg78684 = (function (){var G__78895 = ctx;
var G__78896 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78895,G__78896) : sci.impl.interpreter.interpret.call(null,G__78895,G__78896));
})();
var args__$1 = cljs.core.rest(args);
var arg78685 = (function (){var G__78898 = ctx;
var G__78899 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78898,G__78899) : sci.impl.interpreter.interpret.call(null,G__78898,G__78899));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78686 = (function (){var G__78904 = ctx;
var G__78905 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78904,G__78905) : sci.impl.interpreter.interpret.call(null,G__78904,G__78905));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78687 = (function (){var G__78908 = ctx;
var G__78909 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78908,G__78909) : sci.impl.interpreter.interpret.call(null,G__78908,G__78909));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78688 = (function (){var G__78910 = ctx;
var G__78911 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78910,G__78911) : sci.impl.interpreter.interpret.call(null,G__78910,G__78911));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg78684,arg78685,arg78686,arg78687,arg78688) : f.call(null,arg78684,arg78685,arg78686,arg78687,arg78688));

break;
case (6):
var arg78689 = (function (){var G__78913 = ctx;
var G__78914 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78913,G__78914) : sci.impl.interpreter.interpret.call(null,G__78913,G__78914));
})();
var args__$1 = cljs.core.rest(args);
var arg78690 = (function (){var G__78917 = ctx;
var G__78918 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78917,G__78918) : sci.impl.interpreter.interpret.call(null,G__78917,G__78918));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78691 = (function (){var G__78921 = ctx;
var G__78922 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78921,G__78922) : sci.impl.interpreter.interpret.call(null,G__78921,G__78922));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78692 = (function (){var G__78923 = ctx;
var G__78924 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78923,G__78924) : sci.impl.interpreter.interpret.call(null,G__78923,G__78924));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78693 = (function (){var G__78925 = ctx;
var G__78926 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78925,G__78926) : sci.impl.interpreter.interpret.call(null,G__78925,G__78926));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78694 = (function (){var G__78928 = ctx;
var G__78929 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78928,G__78929) : sci.impl.interpreter.interpret.call(null,G__78928,G__78929));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg78689,arg78690,arg78691,arg78692,arg78693,arg78694) : f.call(null,arg78689,arg78690,arg78691,arg78692,arg78693,arg78694));

break;
case (7):
var arg78695 = (function (){var G__78932 = ctx;
var G__78933 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78932,G__78933) : sci.impl.interpreter.interpret.call(null,G__78932,G__78933));
})();
var args__$1 = cljs.core.rest(args);
var arg78696 = (function (){var G__78936 = ctx;
var G__78937 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78936,G__78937) : sci.impl.interpreter.interpret.call(null,G__78936,G__78937));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78697 = (function (){var G__78939 = ctx;
var G__78940 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78939,G__78940) : sci.impl.interpreter.interpret.call(null,G__78939,G__78940));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78698 = (function (){var G__78941 = ctx;
var G__78942 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78941,G__78942) : sci.impl.interpreter.interpret.call(null,G__78941,G__78942));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78699 = (function (){var G__78944 = ctx;
var G__78945 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78944,G__78945) : sci.impl.interpreter.interpret.call(null,G__78944,G__78945));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78700 = (function (){var G__78946 = ctx;
var G__78947 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78946,G__78947) : sci.impl.interpreter.interpret.call(null,G__78946,G__78947));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78701 = (function (){var G__78951 = ctx;
var G__78952 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78951,G__78952) : sci.impl.interpreter.interpret.call(null,G__78951,G__78952));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg78695,arg78696,arg78697,arg78698,arg78699,arg78700,arg78701) : f.call(null,arg78695,arg78696,arg78697,arg78698,arg78699,arg78700,arg78701));

break;
case (8):
var arg78702 = (function (){var G__78956 = ctx;
var G__78957 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78956,G__78957) : sci.impl.interpreter.interpret.call(null,G__78956,G__78957));
})();
var args__$1 = cljs.core.rest(args);
var arg78703 = (function (){var G__78959 = ctx;
var G__78960 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78959,G__78960) : sci.impl.interpreter.interpret.call(null,G__78959,G__78960));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78704 = (function (){var G__78961 = ctx;
var G__78962 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78961,G__78962) : sci.impl.interpreter.interpret.call(null,G__78961,G__78962));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78705 = (function (){var G__78965 = ctx;
var G__78966 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78965,G__78966) : sci.impl.interpreter.interpret.call(null,G__78965,G__78966));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78706 = (function (){var G__78969 = ctx;
var G__78970 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78969,G__78970) : sci.impl.interpreter.interpret.call(null,G__78969,G__78970));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78707 = (function (){var G__78971 = ctx;
var G__78972 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78971,G__78972) : sci.impl.interpreter.interpret.call(null,G__78971,G__78972));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78708 = (function (){var G__78973 = ctx;
var G__78974 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78973,G__78974) : sci.impl.interpreter.interpret.call(null,G__78973,G__78974));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg78709 = (function (){var G__78976 = ctx;
var G__78977 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78976,G__78977) : sci.impl.interpreter.interpret.call(null,G__78976,G__78977));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg78702,arg78703,arg78704,arg78705,arg78706,arg78707,arg78708,arg78709) : f.call(null,arg78702,arg78703,arg78704,arg78705,arg78706,arg78707,arg78708,arg78709));

break;
case (9):
var arg78710 = (function (){var G__78981 = ctx;
var G__78982 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78981,G__78982) : sci.impl.interpreter.interpret.call(null,G__78981,G__78982));
})();
var args__$1 = cljs.core.rest(args);
var arg78711 = (function (){var G__78985 = ctx;
var G__78986 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78985,G__78986) : sci.impl.interpreter.interpret.call(null,G__78985,G__78986));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78712 = (function (){var G__78987 = ctx;
var G__78988 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78987,G__78988) : sci.impl.interpreter.interpret.call(null,G__78987,G__78988));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78713 = (function (){var G__78989 = ctx;
var G__78990 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78989,G__78990) : sci.impl.interpreter.interpret.call(null,G__78989,G__78990));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78714 = (function (){var G__78992 = ctx;
var G__78993 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78992,G__78993) : sci.impl.interpreter.interpret.call(null,G__78992,G__78993));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78715 = (function (){var G__78996 = ctx;
var G__78997 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78996,G__78997) : sci.impl.interpreter.interpret.call(null,G__78996,G__78997));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78716 = (function (){var G__78999 = ctx;
var G__79000 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78999,G__79000) : sci.impl.interpreter.interpret.call(null,G__78999,G__79000));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg78717 = (function (){var G__79002 = ctx;
var G__79003 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79002,G__79003) : sci.impl.interpreter.interpret.call(null,G__79002,G__79003));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg78718 = (function (){var G__79004 = ctx;
var G__79005 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79004,G__79005) : sci.impl.interpreter.interpret.call(null,G__79004,G__79005));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg78710,arg78711,arg78712,arg78713,arg78714,arg78715,arg78716,arg78717,arg78718) : f.call(null,arg78710,arg78711,arg78712,arg78713,arg78714,arg78715,arg78716,arg78717,arg78718));

break;
case (10):
var arg78719 = (function (){var G__79009 = ctx;
var G__79010 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79009,G__79010) : sci.impl.interpreter.interpret.call(null,G__79009,G__79010));
})();
var args__$1 = cljs.core.rest(args);
var arg78720 = (function (){var G__79013 = ctx;
var G__79014 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79013,G__79014) : sci.impl.interpreter.interpret.call(null,G__79013,G__79014));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78721 = (function (){var G__79016 = ctx;
var G__79017 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79016,G__79017) : sci.impl.interpreter.interpret.call(null,G__79016,G__79017));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78722 = (function (){var G__79019 = ctx;
var G__79020 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79019,G__79020) : sci.impl.interpreter.interpret.call(null,G__79019,G__79020));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78723 = (function (){var G__79023 = ctx;
var G__79024 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79023,G__79024) : sci.impl.interpreter.interpret.call(null,G__79023,G__79024));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78724 = (function (){var G__79025 = ctx;
var G__79026 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79025,G__79026) : sci.impl.interpreter.interpret.call(null,G__79025,G__79026));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78725 = (function (){var G__79027 = ctx;
var G__79028 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79027,G__79028) : sci.impl.interpreter.interpret.call(null,G__79027,G__79028));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg78726 = (function (){var G__79029 = ctx;
var G__79030 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79029,G__79030) : sci.impl.interpreter.interpret.call(null,G__79029,G__79030));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg78727 = (function (){var G__79033 = ctx;
var G__79034 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79033,G__79034) : sci.impl.interpreter.interpret.call(null,G__79033,G__79034));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg78728 = (function (){var G__79035 = ctx;
var G__79036 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79035,G__79036) : sci.impl.interpreter.interpret.call(null,G__79035,G__79036));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg78719,arg78720,arg78721,arg78722,arg78723,arg78724,arg78725,arg78726,arg78727,arg78728) : f.call(null,arg78719,arg78720,arg78721,arg78722,arg78723,arg78724,arg78725,arg78726,arg78727,arg78728));

break;
case (11):
var arg78729 = (function (){var G__79037 = ctx;
var G__79038 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79037,G__79038) : sci.impl.interpreter.interpret.call(null,G__79037,G__79038));
})();
var args__$1 = cljs.core.rest(args);
var arg78730 = (function (){var G__79041 = ctx;
var G__79042 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79041,G__79042) : sci.impl.interpreter.interpret.call(null,G__79041,G__79042));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78731 = (function (){var G__79043 = ctx;
var G__79044 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79043,G__79044) : sci.impl.interpreter.interpret.call(null,G__79043,G__79044));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78732 = (function (){var G__79045 = ctx;
var G__79046 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79045,G__79046) : sci.impl.interpreter.interpret.call(null,G__79045,G__79046));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78733 = (function (){var G__79047 = ctx;
var G__79048 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79047,G__79048) : sci.impl.interpreter.interpret.call(null,G__79047,G__79048));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78734 = (function (){var G__79050 = ctx;
var G__79051 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79050,G__79051) : sci.impl.interpreter.interpret.call(null,G__79050,G__79051));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78735 = (function (){var G__79052 = ctx;
var G__79053 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79052,G__79053) : sci.impl.interpreter.interpret.call(null,G__79052,G__79053));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg78736 = (function (){var G__79056 = ctx;
var G__79057 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79056,G__79057) : sci.impl.interpreter.interpret.call(null,G__79056,G__79057));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg78737 = (function (){var G__79059 = ctx;
var G__79060 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79059,G__79060) : sci.impl.interpreter.interpret.call(null,G__79059,G__79060));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg78738 = (function (){var G__79062 = ctx;
var G__79063 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79062,G__79063) : sci.impl.interpreter.interpret.call(null,G__79062,G__79063));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg78739 = (function (){var G__79064 = ctx;
var G__79065 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79064,G__79065) : sci.impl.interpreter.interpret.call(null,G__79064,G__79065));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg78729,arg78730,arg78731,arg78732,arg78733,arg78734,arg78735,arg78736,arg78737,arg78738,arg78739) : f.call(null,arg78729,arg78730,arg78731,arg78732,arg78733,arg78734,arg78735,arg78736,arg78737,arg78738,arg78739));

break;
case (12):
var arg78740 = (function (){var G__79067 = ctx;
var G__79068 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79067,G__79068) : sci.impl.interpreter.interpret.call(null,G__79067,G__79068));
})();
var args__$1 = cljs.core.rest(args);
var arg78741 = (function (){var G__79069 = ctx;
var G__79070 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79069,G__79070) : sci.impl.interpreter.interpret.call(null,G__79069,G__79070));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78742 = (function (){var G__79075 = ctx;
var G__79076 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79075,G__79076) : sci.impl.interpreter.interpret.call(null,G__79075,G__79076));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78743 = (function (){var G__79080 = ctx;
var G__79081 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79080,G__79081) : sci.impl.interpreter.interpret.call(null,G__79080,G__79081));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78744 = (function (){var G__79083 = ctx;
var G__79084 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79083,G__79084) : sci.impl.interpreter.interpret.call(null,G__79083,G__79084));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78745 = (function (){var G__79085 = ctx;
var G__79086 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79085,G__79086) : sci.impl.interpreter.interpret.call(null,G__79085,G__79086));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78746 = (function (){var G__79088 = ctx;
var G__79089 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79088,G__79089) : sci.impl.interpreter.interpret.call(null,G__79088,G__79089));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg78747 = (function (){var G__79090 = ctx;
var G__79091 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79090,G__79091) : sci.impl.interpreter.interpret.call(null,G__79090,G__79091));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg78748 = (function (){var G__79094 = ctx;
var G__79095 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79094,G__79095) : sci.impl.interpreter.interpret.call(null,G__79094,G__79095));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg78749 = (function (){var G__79098 = ctx;
var G__79099 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79098,G__79099) : sci.impl.interpreter.interpret.call(null,G__79098,G__79099));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg78750 = (function (){var G__79100 = ctx;
var G__79101 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79100,G__79101) : sci.impl.interpreter.interpret.call(null,G__79100,G__79101));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg78751 = (function (){var G__79102 = ctx;
var G__79103 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79102,G__79103) : sci.impl.interpreter.interpret.call(null,G__79102,G__79103));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg78740,arg78741,arg78742,arg78743,arg78744,arg78745,arg78746,arg78747,arg78748,arg78749,arg78750,arg78751) : f.call(null,arg78740,arg78741,arg78742,arg78743,arg78744,arg78745,arg78746,arg78747,arg78748,arg78749,arg78750,arg78751));

break;
case (13):
var arg78752 = (function (){var G__79105 = ctx;
var G__79106 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79105,G__79106) : sci.impl.interpreter.interpret.call(null,G__79105,G__79106));
})();
var args__$1 = cljs.core.rest(args);
var arg78753 = (function (){var G__79109 = ctx;
var G__79110 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79109,G__79110) : sci.impl.interpreter.interpret.call(null,G__79109,G__79110));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78754 = (function (){var G__79113 = ctx;
var G__79114 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79113,G__79114) : sci.impl.interpreter.interpret.call(null,G__79113,G__79114));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78755 = (function (){var G__79118 = ctx;
var G__79119 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79118,G__79119) : sci.impl.interpreter.interpret.call(null,G__79118,G__79119));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78756 = (function (){var G__79121 = ctx;
var G__79122 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79121,G__79122) : sci.impl.interpreter.interpret.call(null,G__79121,G__79122));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78757 = (function (){var G__79123 = ctx;
var G__79124 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79123,G__79124) : sci.impl.interpreter.interpret.call(null,G__79123,G__79124));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78758 = (function (){var G__79126 = ctx;
var G__79127 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79126,G__79127) : sci.impl.interpreter.interpret.call(null,G__79126,G__79127));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg78759 = (function (){var G__79128 = ctx;
var G__79129 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79128,G__79129) : sci.impl.interpreter.interpret.call(null,G__79128,G__79129));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg78760 = (function (){var G__79132 = ctx;
var G__79133 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79132,G__79133) : sci.impl.interpreter.interpret.call(null,G__79132,G__79133));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg78761 = (function (){var G__79136 = ctx;
var G__79137 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79136,G__79137) : sci.impl.interpreter.interpret.call(null,G__79136,G__79137));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg78762 = (function (){var G__79138 = ctx;
var G__79139 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79138,G__79139) : sci.impl.interpreter.interpret.call(null,G__79138,G__79139));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg78763 = (function (){var G__79142 = ctx;
var G__79143 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79142,G__79143) : sci.impl.interpreter.interpret.call(null,G__79142,G__79143));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg78764 = (function (){var G__79146 = ctx;
var G__79147 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79146,G__79147) : sci.impl.interpreter.interpret.call(null,G__79146,G__79147));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg78752,arg78753,arg78754,arg78755,arg78756,arg78757,arg78758,arg78759,arg78760,arg78761,arg78762,arg78763,arg78764) : f.call(null,arg78752,arg78753,arg78754,arg78755,arg78756,arg78757,arg78758,arg78759,arg78760,arg78761,arg78762,arg78763,arg78764));

break;
case (14):
var arg78765 = (function (){var G__79148 = ctx;
var G__79149 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79148,G__79149) : sci.impl.interpreter.interpret.call(null,G__79148,G__79149));
})();
var args__$1 = cljs.core.rest(args);
var arg78766 = (function (){var G__79150 = ctx;
var G__79151 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79150,G__79151) : sci.impl.interpreter.interpret.call(null,G__79150,G__79151));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78767 = (function (){var G__79153 = ctx;
var G__79154 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79153,G__79154) : sci.impl.interpreter.interpret.call(null,G__79153,G__79154));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78768 = (function (){var G__79155 = ctx;
var G__79156 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79155,G__79156) : sci.impl.interpreter.interpret.call(null,G__79155,G__79156));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78769 = (function (){var G__79159 = ctx;
var G__79160 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79159,G__79160) : sci.impl.interpreter.interpret.call(null,G__79159,G__79160));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78770 = (function (){var G__79162 = ctx;
var G__79163 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79162,G__79163) : sci.impl.interpreter.interpret.call(null,G__79162,G__79163));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78771 = (function (){var G__79166 = ctx;
var G__79167 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79166,G__79167) : sci.impl.interpreter.interpret.call(null,G__79166,G__79167));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg78772 = (function (){var G__79172 = ctx;
var G__79173 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79172,G__79173) : sci.impl.interpreter.interpret.call(null,G__79172,G__79173));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg78773 = (function (){var G__79174 = ctx;
var G__79175 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79174,G__79175) : sci.impl.interpreter.interpret.call(null,G__79174,G__79175));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg78774 = (function (){var G__79176 = ctx;
var G__79177 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79176,G__79177) : sci.impl.interpreter.interpret.call(null,G__79176,G__79177));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg78775 = (function (){var G__79180 = ctx;
var G__79181 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79180,G__79181) : sci.impl.interpreter.interpret.call(null,G__79180,G__79181));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg78776 = (function (){var G__79182 = ctx;
var G__79183 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79182,G__79183) : sci.impl.interpreter.interpret.call(null,G__79182,G__79183));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg78777 = (function (){var G__79189 = ctx;
var G__79190 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79189,G__79190) : sci.impl.interpreter.interpret.call(null,G__79189,G__79190));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg78778 = (function (){var G__79193 = ctx;
var G__79194 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79193,G__79194) : sci.impl.interpreter.interpret.call(null,G__79193,G__79194));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg78765,arg78766,arg78767,arg78768,arg78769,arg78770,arg78771,arg78772,arg78773,arg78774,arg78775,arg78776,arg78777,arg78778) : f.call(null,arg78765,arg78766,arg78767,arg78768,arg78769,arg78770,arg78771,arg78772,arg78773,arg78774,arg78775,arg78776,arg78777,arg78778));

break;
case (15):
var arg78779 = (function (){var G__79197 = ctx;
var G__79198 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79197,G__79198) : sci.impl.interpreter.interpret.call(null,G__79197,G__79198));
})();
var args__$1 = cljs.core.rest(args);
var arg78780 = (function (){var G__79199 = ctx;
var G__79200 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79199,G__79200) : sci.impl.interpreter.interpret.call(null,G__79199,G__79200));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78781 = (function (){var G__79203 = ctx;
var G__79204 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79203,G__79204) : sci.impl.interpreter.interpret.call(null,G__79203,G__79204));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78782 = (function (){var G__79207 = ctx;
var G__79208 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79207,G__79208) : sci.impl.interpreter.interpret.call(null,G__79207,G__79208));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78783 = (function (){var G__79210 = ctx;
var G__79211 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79210,G__79211) : sci.impl.interpreter.interpret.call(null,G__79210,G__79211));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78784 = (function (){var G__79214 = ctx;
var G__79215 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79214,G__79215) : sci.impl.interpreter.interpret.call(null,G__79214,G__79215));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78785 = (function (){var G__79221 = ctx;
var G__79222 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79221,G__79222) : sci.impl.interpreter.interpret.call(null,G__79221,G__79222));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg78786 = (function (){var G__79225 = ctx;
var G__79226 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79225,G__79226) : sci.impl.interpreter.interpret.call(null,G__79225,G__79226));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg78787 = (function (){var G__79229 = ctx;
var G__79230 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79229,G__79230) : sci.impl.interpreter.interpret.call(null,G__79229,G__79230));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg78788 = (function (){var G__79232 = ctx;
var G__79233 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79232,G__79233) : sci.impl.interpreter.interpret.call(null,G__79232,G__79233));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg78789 = (function (){var G__79235 = ctx;
var G__79236 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79235,G__79236) : sci.impl.interpreter.interpret.call(null,G__79235,G__79236));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg78790 = (function (){var G__79239 = ctx;
var G__79240 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79239,G__79240) : sci.impl.interpreter.interpret.call(null,G__79239,G__79240));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg78791 = (function (){var G__79242 = ctx;
var G__79243 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79242,G__79243) : sci.impl.interpreter.interpret.call(null,G__79242,G__79243));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg78792 = (function (){var G__79244 = ctx;
var G__79245 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79244,G__79245) : sci.impl.interpreter.interpret.call(null,G__79244,G__79245));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg78793 = (function (){var G__79248 = ctx;
var G__79249 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79248,G__79249) : sci.impl.interpreter.interpret.call(null,G__79248,G__79249));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg78779,arg78780,arg78781,arg78782,arg78783,arg78784,arg78785,arg78786,arg78787,arg78788,arg78789,arg78790,arg78791,arg78792,arg78793) : f.call(null,arg78779,arg78780,arg78781,arg78782,arg78783,arg78784,arg78785,arg78786,arg78787,arg78788,arg78789,arg78790,arg78791,arg78792,arg78793));

break;
case (16):
var arg78794 = (function (){var G__79253 = ctx;
var G__79254 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79253,G__79254) : sci.impl.interpreter.interpret.call(null,G__79253,G__79254));
})();
var args__$1 = cljs.core.rest(args);
var arg78795 = (function (){var G__79255 = ctx;
var G__79256 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79255,G__79256) : sci.impl.interpreter.interpret.call(null,G__79255,G__79256));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78796 = (function (){var G__79258 = ctx;
var G__79259 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79258,G__79259) : sci.impl.interpreter.interpret.call(null,G__79258,G__79259));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78797 = (function (){var G__79261 = ctx;
var G__79262 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79261,G__79262) : sci.impl.interpreter.interpret.call(null,G__79261,G__79262));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78798 = (function (){var G__79265 = ctx;
var G__79266 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79265,G__79266) : sci.impl.interpreter.interpret.call(null,G__79265,G__79266));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78799 = (function (){var G__79267 = ctx;
var G__79268 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79267,G__79268) : sci.impl.interpreter.interpret.call(null,G__79267,G__79268));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78800 = (function (){var G__79272 = ctx;
var G__79273 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79272,G__79273) : sci.impl.interpreter.interpret.call(null,G__79272,G__79273));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg78801 = (function (){var G__79275 = ctx;
var G__79276 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79275,G__79276) : sci.impl.interpreter.interpret.call(null,G__79275,G__79276));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg78802 = (function (){var G__79279 = ctx;
var G__79280 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79279,G__79280) : sci.impl.interpreter.interpret.call(null,G__79279,G__79280));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg78803 = (function (){var G__79283 = ctx;
var G__79284 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79283,G__79284) : sci.impl.interpreter.interpret.call(null,G__79283,G__79284));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg78804 = (function (){var G__79285 = ctx;
var G__79286 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79285,G__79286) : sci.impl.interpreter.interpret.call(null,G__79285,G__79286));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg78805 = (function (){var G__79287 = ctx;
var G__79288 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79287,G__79288) : sci.impl.interpreter.interpret.call(null,G__79287,G__79288));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg78806 = (function (){var G__79291 = ctx;
var G__79292 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79291,G__79292) : sci.impl.interpreter.interpret.call(null,G__79291,G__79292));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg78807 = (function (){var G__79293 = ctx;
var G__79294 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79293,G__79294) : sci.impl.interpreter.interpret.call(null,G__79293,G__79294));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg78808 = (function (){var G__79297 = ctx;
var G__79298 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79297,G__79298) : sci.impl.interpreter.interpret.call(null,G__79297,G__79298));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg78809 = (function (){var G__79301 = ctx;
var G__79302 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79301,G__79302) : sci.impl.interpreter.interpret.call(null,G__79301,G__79302));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg78794,arg78795,arg78796,arg78797,arg78798,arg78799,arg78800,arg78801,arg78802,arg78803,arg78804,arg78805,arg78806,arg78807,arg78808,arg78809) : f.call(null,arg78794,arg78795,arg78796,arg78797,arg78798,arg78799,arg78800,arg78801,arg78802,arg78803,arg78804,arg78805,arg78806,arg78807,arg78808,arg78809));

break;
case (17):
var arg78810 = (function (){var G__79304 = ctx;
var G__79305 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79304,G__79305) : sci.impl.interpreter.interpret.call(null,G__79304,G__79305));
})();
var args__$1 = cljs.core.rest(args);
var arg78811 = (function (){var G__79307 = ctx;
var G__79308 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79307,G__79308) : sci.impl.interpreter.interpret.call(null,G__79307,G__79308));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78812 = (function (){var G__79311 = ctx;
var G__79312 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79311,G__79312) : sci.impl.interpreter.interpret.call(null,G__79311,G__79312));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78813 = (function (){var G__79317 = ctx;
var G__79318 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79317,G__79318) : sci.impl.interpreter.interpret.call(null,G__79317,G__79318));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78814 = (function (){var G__79320 = ctx;
var G__79321 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79320,G__79321) : sci.impl.interpreter.interpret.call(null,G__79320,G__79321));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78815 = (function (){var G__79322 = ctx;
var G__79323 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79322,G__79323) : sci.impl.interpreter.interpret.call(null,G__79322,G__79323));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78816 = (function (){var G__79324 = ctx;
var G__79325 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79324,G__79325) : sci.impl.interpreter.interpret.call(null,G__79324,G__79325));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg78817 = (function (){var G__79327 = ctx;
var G__79328 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79327,G__79328) : sci.impl.interpreter.interpret.call(null,G__79327,G__79328));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg78818 = (function (){var G__79329 = ctx;
var G__79330 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79329,G__79330) : sci.impl.interpreter.interpret.call(null,G__79329,G__79330));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg78819 = (function (){var G__79333 = ctx;
var G__79334 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79333,G__79334) : sci.impl.interpreter.interpret.call(null,G__79333,G__79334));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg78820 = (function (){var G__79337 = ctx;
var G__79338 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79337,G__79338) : sci.impl.interpreter.interpret.call(null,G__79337,G__79338));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg78821 = (function (){var G__79349 = ctx;
var G__79350 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79349,G__79350) : sci.impl.interpreter.interpret.call(null,G__79349,G__79350));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg78822 = (function (){var G__79352 = ctx;
var G__79353 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79352,G__79353) : sci.impl.interpreter.interpret.call(null,G__79352,G__79353));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg78823 = (function (){var G__79356 = ctx;
var G__79357 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79356,G__79357) : sci.impl.interpreter.interpret.call(null,G__79356,G__79357));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg78824 = (function (){var G__79360 = ctx;
var G__79361 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79360,G__79361) : sci.impl.interpreter.interpret.call(null,G__79360,G__79361));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg78825 = (function (){var G__79362 = ctx;
var G__79363 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79362,G__79363) : sci.impl.interpreter.interpret.call(null,G__79362,G__79363));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg78826 = (function (){var G__79365 = ctx;
var G__79366 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79365,G__79366) : sci.impl.interpreter.interpret.call(null,G__79365,G__79366));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg78810,arg78811,arg78812,arg78813,arg78814,arg78815,arg78816,arg78817,arg78818,arg78819,arg78820,arg78821,arg78822,arg78823,arg78824,arg78825,arg78826) : f.call(null,arg78810,arg78811,arg78812,arg78813,arg78814,arg78815,arg78816,arg78817,arg78818,arg78819,arg78820,arg78821,arg78822,arg78823,arg78824,arg78825,arg78826));

break;
case (18):
var arg78827 = (function (){var G__79371 = ctx;
var G__79372 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79371,G__79372) : sci.impl.interpreter.interpret.call(null,G__79371,G__79372));
})();
var args__$1 = cljs.core.rest(args);
var arg78828 = (function (){var G__79375 = ctx;
var G__79376 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79375,G__79376) : sci.impl.interpreter.interpret.call(null,G__79375,G__79376));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78829 = (function (){var G__79386 = ctx;
var G__79387 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79386,G__79387) : sci.impl.interpreter.interpret.call(null,G__79386,G__79387));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78830 = (function (){var G__79392 = ctx;
var G__79393 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79392,G__79393) : sci.impl.interpreter.interpret.call(null,G__79392,G__79393));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78831 = (function (){var G__79396 = ctx;
var G__79397 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79396,G__79397) : sci.impl.interpreter.interpret.call(null,G__79396,G__79397));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78832 = (function (){var G__79400 = ctx;
var G__79401 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79400,G__79401) : sci.impl.interpreter.interpret.call(null,G__79400,G__79401));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78833 = (function (){var G__79402 = ctx;
var G__79403 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79402,G__79403) : sci.impl.interpreter.interpret.call(null,G__79402,G__79403));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg78834 = (function (){var G__79406 = ctx;
var G__79407 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79406,G__79407) : sci.impl.interpreter.interpret.call(null,G__79406,G__79407));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg78835 = (function (){var G__79410 = ctx;
var G__79411 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79410,G__79411) : sci.impl.interpreter.interpret.call(null,G__79410,G__79411));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg78836 = (function (){var G__79413 = ctx;
var G__79414 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79413,G__79414) : sci.impl.interpreter.interpret.call(null,G__79413,G__79414));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg78837 = (function (){var G__79416 = ctx;
var G__79417 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79416,G__79417) : sci.impl.interpreter.interpret.call(null,G__79416,G__79417));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg78838 = (function (){var G__79420 = ctx;
var G__79421 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79420,G__79421) : sci.impl.interpreter.interpret.call(null,G__79420,G__79421));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg78839 = (function (){var G__79424 = ctx;
var G__79425 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79424,G__79425) : sci.impl.interpreter.interpret.call(null,G__79424,G__79425));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg78840 = (function (){var G__79427 = ctx;
var G__79428 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79427,G__79428) : sci.impl.interpreter.interpret.call(null,G__79427,G__79428));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg78841 = (function (){var G__79430 = ctx;
var G__79431 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79430,G__79431) : sci.impl.interpreter.interpret.call(null,G__79430,G__79431));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg78842 = (function (){var G__79434 = ctx;
var G__79435 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79434,G__79435) : sci.impl.interpreter.interpret.call(null,G__79434,G__79435));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg78843 = (function (){var G__79438 = ctx;
var G__79439 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79438,G__79439) : sci.impl.interpreter.interpret.call(null,G__79438,G__79439));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg78844 = (function (){var G__79440 = ctx;
var G__79441 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79440,G__79441) : sci.impl.interpreter.interpret.call(null,G__79440,G__79441));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg78827,arg78828,arg78829,arg78830,arg78831,arg78832,arg78833,arg78834,arg78835,arg78836,arg78837,arg78838,arg78839,arg78840,arg78841,arg78842,arg78843,arg78844) : f.call(null,arg78827,arg78828,arg78829,arg78830,arg78831,arg78832,arg78833,arg78834,arg78835,arg78836,arg78837,arg78838,arg78839,arg78840,arg78841,arg78842,arg78843,arg78844));

break;
case (19):
var arg78845 = (function (){var G__79451 = ctx;
var G__79452 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79451,G__79452) : sci.impl.interpreter.interpret.call(null,G__79451,G__79452));
})();
var args__$1 = cljs.core.rest(args);
var arg78846 = (function (){var G__79453 = ctx;
var G__79454 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79453,G__79454) : sci.impl.interpreter.interpret.call(null,G__79453,G__79454));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78847 = (function (){var G__79456 = ctx;
var G__79457 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79456,G__79457) : sci.impl.interpreter.interpret.call(null,G__79456,G__79457));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78848 = (function (){var G__79458 = ctx;
var G__79460 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79458,G__79460) : sci.impl.interpreter.interpret.call(null,G__79458,G__79460));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78849 = (function (){var G__79462 = ctx;
var G__79463 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79462,G__79463) : sci.impl.interpreter.interpret.call(null,G__79462,G__79463));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78850 = (function (){var G__79466 = ctx;
var G__79467 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79466,G__79467) : sci.impl.interpreter.interpret.call(null,G__79466,G__79467));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78851 = (function (){var G__79468 = ctx;
var G__79469 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79468,G__79469) : sci.impl.interpreter.interpret.call(null,G__79468,G__79469));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg78852 = (function (){var G__79470 = ctx;
var G__79471 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79470,G__79471) : sci.impl.interpreter.interpret.call(null,G__79470,G__79471));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg78853 = (function (){var G__79474 = ctx;
var G__79475 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79474,G__79475) : sci.impl.interpreter.interpret.call(null,G__79474,G__79475));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg78854 = (function (){var G__79477 = ctx;
var G__79478 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79477,G__79478) : sci.impl.interpreter.interpret.call(null,G__79477,G__79478));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg78855 = (function (){var G__79482 = ctx;
var G__79483 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79482,G__79483) : sci.impl.interpreter.interpret.call(null,G__79482,G__79483));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg78856 = (function (){var G__79484 = ctx;
var G__79485 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79484,G__79485) : sci.impl.interpreter.interpret.call(null,G__79484,G__79485));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg78857 = (function (){var G__79486 = ctx;
var G__79487 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79486,G__79487) : sci.impl.interpreter.interpret.call(null,G__79486,G__79487));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg78858 = (function (){var G__79490 = ctx;
var G__79491 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79490,G__79491) : sci.impl.interpreter.interpret.call(null,G__79490,G__79491));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg78859 = (function (){var G__79492 = ctx;
var G__79493 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79492,G__79493) : sci.impl.interpreter.interpret.call(null,G__79492,G__79493));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg78860 = (function (){var G__79496 = ctx;
var G__79497 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79496,G__79497) : sci.impl.interpreter.interpret.call(null,G__79496,G__79497));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg78861 = (function (){var G__79500 = ctx;
var G__79501 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79500,G__79501) : sci.impl.interpreter.interpret.call(null,G__79500,G__79501));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg78862 = (function (){var G__79502 = ctx;
var G__79503 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79502,G__79503) : sci.impl.interpreter.interpret.call(null,G__79502,G__79503));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg78863 = (function (){var G__79506 = ctx;
var G__79507 = cljs.core.first(args__$18);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79506,G__79507) : sci.impl.interpreter.interpret.call(null,G__79506,G__79507));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg78845,arg78846,arg78847,arg78848,arg78849,arg78850,arg78851,arg78852,arg78853,arg78854,arg78855,arg78856,arg78857,arg78858,arg78859,arg78860,arg78861,arg78862,arg78863) : f.call(null,arg78845,arg78846,arg78847,arg78848,arg78849,arg78850,arg78851,arg78852,arg78853,arg78854,arg78855,arg78856,arg78857,arg78858,arg78859,arg78860,arg78861,arg78862,arg78863));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__77922_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__77922_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__77922_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.interpreter.eval_special_call = (function sci$impl$interpreter$eval_special_call(ctx,f_sym,expr){
var G__79522 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__79522)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_instance_method_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__79522)){
return sci.impl.interpreter.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"import","import",241030818,null),G__79522)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_import,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__79522)){
return sci.impl.interpreter.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__79522)){
return sci.impl.interpreter.eval_if(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__79522)){
return sci.impl.interpreter.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),G__79522)){
return sci.impl.interpreter.macroexpand(ctx,(function (){var G__79573 = ctx;
var G__79574 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79573,G__79574) : sci.impl.interpreter.interpret.call(null,G__79573,G__79574));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__79522)){
return sci.impl.interpreter.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__79522)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_let,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__79522)){
return sci.impl.interpreter.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"use","use",-205850897,null),G__79522)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_use,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__79522)){
return sci.impl.interpreter.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__79522)){
return sci.impl.interpreter.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__79522)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__79522)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_constructor_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),G__79522)){
return sci.impl.interpreter.macroexpand_1(ctx,(function (){var G__79583 = ctx;
var G__79584 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79583,G__79584) : sci.impl.interpreter.interpret.call(null,G__79583,G__79584));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__79522)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_refer,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__79522)){
return (new cljs.core.LazySeq(null,(function (){var G__79586 = ctx;
var G__79587 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79586,G__79587) : sci.impl.interpreter.interpret.call(null,G__79586,G__79587));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__79522)){
return sci.impl.interpreter.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__79522)){
return sci.impl.interpreter.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"resolve","resolve",56086045,null),G__79522)){
return sci.impl.interpreter.eval_resolve(ctx,cljs.core.second(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__79522)){
return sci.impl.interpreter.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__79522)].join('')));

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
}catch (e79602){if((e79602 instanceof Error)){
var e = e79602;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e79602;

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
var ret = ((cljs.core.not(op))?expr:(function (){var G__79664 = op;
var G__79664__$1 = (((G__79664 instanceof cljs.core.Keyword))?G__79664.fqn:null);
switch (G__79664__$1) {
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
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__79649_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__79649_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__79649_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__79650_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__79650_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__79650_SHARP_));
}),cljs.core.vals(expr)));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__79651_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__79651_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__79651_SHARP_));
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
var G__80389 = cljs.core.rest(exprs);
var G__80390 = (function (){var G__79685 = ctx;
var G__79686 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__79685,G__79686) : sci.impl.interpreter.eval_form.call(null,G__79685,G__79686));
})();
exprs = G__80389;
ret = G__80390;
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
var G__80394 = ret__$1;
ret = G__80394;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__79699 = arguments.length;
switch (G__79699) {
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
