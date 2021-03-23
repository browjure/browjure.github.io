goog.provide('sci.impl.load');
sci.impl.load.handle_refer_all = (function sci$impl$load$handle_refer_all(the_current_ns,the_loaded_ns,include_sym_QMARK_,rename_sym,only){
var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns);
var only__$1 = (cljs.core.truth_(only)?cljs.core.set(only):null);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__64611){
var vec__64614 = p__64611;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64614,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64614,(1),null);
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
}),referred,the_loaded_ns);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
});
sci.impl.load.handle_require_libspec_env = (function sci$impl$load$handle_require_libspec_env(ctx,env,current_ns,the_loaded_ns,lib_name,p__64638){
var map__64639 = p__64638;
var map__64639__$1 = (((((!((map__64639 == null))))?(((((map__64639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64639):map__64639);
var _parsed_libspec = map__64639__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64639__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64639__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64639__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64639__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64639__$1,new cljs.core.Keyword(null,"only","only",1907811652));
var use = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64639__$1,new cljs.core.Keyword(null,"use","use",-1846382424));
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
return use;
}
})())?sci.impl.load.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,null):((cljs.core.sequential_QMARK_(refer))?(function (){var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns__$1);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,sym){
if(cljs.core.truth_(include_sym_QMARK_(sym))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(sym) : rename_sym.call(null,sym)),(function (){var temp__5751__auto__ = cljs.core.find(the_loaded_ns,sym);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__64692 = temp__5751__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64692,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64692,(1),null);
return v;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"uberscript","uberscript",701571092).cljs$core$IFn$_invoke$arity$1(ctx))){
return null;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')));
}
}
})());
} else {
return ns;
}
}),referred,refer);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns__$1,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
})():(function(){throw (new Error(":refer value must be a sequential collection of symbols"))})()
)):(cljs.core.truth_(use)?sci.impl.load.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,only):the_current_ns__$1
));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null),the_current_ns__$2);
var temp__5753__auto___65126 = (function (){var G__64709 = the_loaded_ns;
var G__64709__$1 = (((G__64709 == null))?null:new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__64709));
var G__64709__$2 = (((G__64709__$1 == null))?null:cljs.core.meta(G__64709__$1));
if((G__64709__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","required-fn","sci.impl/required-fn",2082701278).cljs$core$IFn$_invoke$arity$1(G__64709__$2);
}
})();
if(cljs.core.truth_(temp__5753__auto___65126)){
var on_loaded_65148 = temp__5753__auto___65126;
var G__64715_65149 = cljs.core.PersistentArrayMap.EMPTY;
(on_loaded_65148.cljs$core$IFn$_invoke$arity$1 ? on_loaded_65148.cljs$core$IFn$_invoke$arity$1(G__64715_65149) : on_loaded_65148.call(null,G__64715_65149));
} else {
}

return env__$1;
});
sci.impl.load.handle_require_libspec = (function sci$impl$load$handle_require_libspec(ctx,lib,opts){
var map__64725 = opts;
var map__64725__$1 = (((((!((map__64725 == null))))?(((((map__64725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64725):map__64725);
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64725__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var env_STAR_ = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var env = cljs.core.deref(env_STAR_);
var cnn = sci.impl.vars.current_ns_name();
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var uberscript = new cljs.core.Keyword(null,"uberscript","uberscript",701571092).cljs$core$IFn$_invoke$arity$1(ctx);
var reload_STAR_ = (function (){var or__4126__auto__ = reload;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return uberscript;
}
})();
var temp__5751__auto__ = (cljs.core.truth_(reload_STAR_)?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib));
if(cljs.core.truth_(temp__5751__auto__)){
var the_loaded_ns = temp__5751__auto__;
var loading = new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_((function (){var and__4115__auto__ = loading;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.nat_int_QMARK_(loading.indexOf(lib));
} else {
return and__4115__auto__;
}
})())){
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2((function (){var lib_emphasized = ["[ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib)," ]"].join('');
var loading__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loading,lib);
var loading__$2 = cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([lib,lib_emphasized]),loading__$1);
return ["Cyclic load dependency: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2("->",loading__$2)].join('');
})(),lib);
} else {
return cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,the_loaded_ns,lib,opts));
}
} else {
var temp__5751__auto____$1 = new cljs.core.Keyword(null,"load-fn","load-fn",-2121144334).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__5751__auto____$1)){
var load_fn = temp__5751__auto____$1;
var temp__5751__auto____$2 = (function (){var G__64751 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib,new cljs.core.Keyword(null,"reload","reload",863702807),reload], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__64751) : load_fn.call(null,G__64751));
})();
if(cljs.core.truth_(temp__5751__auto____$2)){
var map__64753 = temp__5751__auto____$2;
var map__64753__$1 = (((((!((map__64753 == null))))?(((((map__64753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64753):map__64753);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64753__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64753__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var ctx_65155__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"loading","loading",-737050189),(function (loading){
if((loading == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loading,lib);
}
}));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var fexpr__64784_65158 = cljs.core.deref(sci.impl.utils.eval_string_STAR_);
(fexpr__64784_65158.cljs$core$IFn$_invoke$arity$2 ? fexpr__64784_65158.cljs$core$IFn$_invoke$arity$2(ctx_65155__$1,source) : fexpr__64784_65158.call(null,ctx_65155__$1,source));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e64770){if((e64770 instanceof Error)){
var e_65179 = e64770;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib], 0));

throw e_65179;
} else {
throw e64770;

}
}
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_STAR_,(function (env__$1){
var namespaces__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var the_loaded_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces__$1,lib);
return sci.impl.load.handle_require_libspec_env(ctx,env__$1,cnn,the_loaded_ns,lib,opts);
}));
} else {
var or__4126__auto__ = (cljs.core.truth_(reload_STAR_)?(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib);
if(cljs.core.truth_(temp__5753__auto__)){
var the_loaded_ns = temp__5753__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,the_loaded_ns,lib,opts));
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw (new Error(["Could not find namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"."].join('')));
}
}
} else {
throw (new Error(["Could not find namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"."].join('')));
}
}
});
sci.impl.load.load_lib = (function sci$impl$load$load_lib(var_args){
var args__4742__auto__ = [];
var len__4736__auto___65182 = arguments.length;
var i__4737__auto___65183 = (0);
while(true){
if((i__4737__auto___65183 < len__4736__auto___65182)){
args__4742__auto__.push((arguments[i__4737__auto___65183]));

var G__65184 = (i__4737__auto___65183 + (1));
i__4737__auto___65183 = G__65184;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return sci.impl.load.load_lib.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(sci.impl.load.load_lib.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,prefix,lib,options){
if(cljs.core.truth_((function (){var and__4115__auto__ = prefix;
if(cljs.core.truth_(and__4115__auto__)){
return (cljs.core.name(lib).indexOf(".") > (0));
} else {
return and__4115__auto__;
}
})())){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Found lib name '",cljs.core.name(lib),"' containing period with prefix '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"'.  lib names inside prefix lists must not contain periods"].join(''),lib);
} else {
}

var lib__$1 = (cljs.core.truth_(prefix)?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib)].join('')):lib);
var opts = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,options);
return sci.impl.load.handle_require_libspec(ctx,lib__$1,opts);
}));

(sci.impl.load.load_lib.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.load.load_lib.cljs$lang$applyTo = (function (seq64802){
var G__64803 = cljs.core.first(seq64802);
var seq64802__$1 = cljs.core.next(seq64802);
var G__64804 = cljs.core.first(seq64802__$1);
var seq64802__$2 = cljs.core.next(seq64802__$1);
var G__64805 = cljs.core.first(seq64802__$2);
var seq64802__$3 = cljs.core.next(seq64802__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64803,G__64804,G__64805,seq64802__$3);
}));

/**
 * Prepends a symbol or a seq to coll
 */
sci.impl.load.prependss = (function sci$impl$load$prependss(x,coll){
if((x instanceof cljs.core.Symbol)){
return cljs.core.cons(x,coll);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(x,coll);
}
});
/**
 * Returns true if x is a libspec
 */
sci.impl.load.libspec_QMARK_ = (function sci$impl$load$libspec_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) || (((cljs.core.vector_QMARK_(x)) && ((((cljs.core.second(x) == null)) || ((cljs.core.second(x) instanceof cljs.core.Keyword)))))));
});
/**
 * Loads libs, evaling libspecs, prefix lists, and flags for
 *   forwarding to load-lib
 */
sci.impl.load.load_libs = (function sci$impl$load$load_libs(ctx,kw,args){
var args_STAR_ = cljs.core.cons(kw,args);
var flags = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,args_STAR_);
var opts = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(flags,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
var args_STAR___$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.keyword_QMARK_),args_STAR_);
var supported_65218 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"use","use",-1846382424),null,new cljs.core.Keyword(null,"as","as",1148689641),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"verbose","verbose",1694226060),null,new cljs.core.Keyword(null,"reload","reload",863702807),null,new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null,new cljs.core.Keyword(null,"refer","refer",-964295553),null], null), null);
var unsupported_65219 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(supported_65218,flags));
if(unsupported_65219){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"Unsupported option(s) supplied: ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",unsupported_65219)),args);
} else {
}

if(cljs.core.seq(args_STAR___$1)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("Nothing specified to load",args);
}

var seq__64864 = cljs.core.seq(args_STAR___$1);
var chunk__64865 = null;
var count__64866 = (0);
var i__64867 = (0);
while(true){
if((i__64867 < count__64866)){
var arg = chunk__64865.cljs$core$IIndexed$_nth$arity$2(null,i__64867);
if(sci.impl.load.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,null,sci.impl.load.prependss(arg,opts));
} else {
var vec__64932_65220 = arg;
var seq__64933_65221 = cljs.core.seq(vec__64932_65220);
var first__64934_65222 = cljs.core.first(seq__64933_65221);
var seq__64933_65223__$1 = cljs.core.next(seq__64933_65221);
var prefix_65224 = first__64934_65222;
var args_STAR__65225__$2 = seq__64933_65223__$1;
if((prefix_65224 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__64936_65228 = cljs.core.seq(args_STAR__65225__$2);
var chunk__64937_65229 = null;
var count__64938_65230 = (0);
var i__64939_65231 = (0);
while(true){
if((i__64939_65231 < count__64938_65230)){
var arg_65232__$1 = chunk__64937_65229.cljs$core$IIndexed$_nth$arity$2(null,i__64939_65231);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_65224,sci.impl.load.prependss(arg_65232__$1,opts));


var G__65233 = seq__64936_65228;
var G__65234 = chunk__64937_65229;
var G__65235 = count__64938_65230;
var G__65236 = (i__64939_65231 + (1));
seq__64936_65228 = G__65233;
chunk__64937_65229 = G__65234;
count__64938_65230 = G__65235;
i__64939_65231 = G__65236;
continue;
} else {
var temp__5753__auto___65237 = cljs.core.seq(seq__64936_65228);
if(temp__5753__auto___65237){
var seq__64936_65238__$1 = temp__5753__auto___65237;
if(cljs.core.chunked_seq_QMARK_(seq__64936_65238__$1)){
var c__4556__auto___65239 = cljs.core.chunk_first(seq__64936_65238__$1);
var G__65240 = cljs.core.chunk_rest(seq__64936_65238__$1);
var G__65241 = c__4556__auto___65239;
var G__65242 = cljs.core.count(c__4556__auto___65239);
var G__65243 = (0);
seq__64936_65228 = G__65240;
chunk__64937_65229 = G__65241;
count__64938_65230 = G__65242;
i__64939_65231 = G__65243;
continue;
} else {
var arg_65244__$1 = cljs.core.first(seq__64936_65238__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_65224,sci.impl.load.prependss(arg_65244__$1,opts));


var G__65246 = cljs.core.next(seq__64936_65238__$1);
var G__65247 = null;
var G__65248 = (0);
var G__65249 = (0);
seq__64936_65228 = G__65246;
chunk__64937_65229 = G__65247;
count__64938_65230 = G__65248;
i__64939_65231 = G__65249;
continue;
}
} else {
}
}
break;
}
}


var G__65253 = seq__64864;
var G__65254 = chunk__64865;
var G__65255 = count__64866;
var G__65256 = (i__64867 + (1));
seq__64864 = G__65253;
chunk__64865 = G__65254;
count__64866 = G__65255;
i__64867 = G__65256;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__64864);
if(temp__5753__auto__){
var seq__64864__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64864__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__64864__$1);
var G__65279 = cljs.core.chunk_rest(seq__64864__$1);
var G__65280 = c__4556__auto__;
var G__65281 = cljs.core.count(c__4556__auto__);
var G__65282 = (0);
seq__64864 = G__65279;
chunk__64865 = G__65280;
count__64866 = G__65281;
i__64867 = G__65282;
continue;
} else {
var arg = cljs.core.first(seq__64864__$1);
if(sci.impl.load.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,null,sci.impl.load.prependss(arg,opts));
} else {
var vec__64952_65283 = arg;
var seq__64953_65284 = cljs.core.seq(vec__64952_65283);
var first__64954_65285 = cljs.core.first(seq__64953_65284);
var seq__64953_65286__$1 = cljs.core.next(seq__64953_65284);
var prefix_65287 = first__64954_65285;
var args_STAR__65288__$2 = seq__64953_65286__$1;
if((prefix_65287 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__64956_65290 = cljs.core.seq(args_STAR__65288__$2);
var chunk__64957_65291 = null;
var count__64958_65292 = (0);
var i__64959_65293 = (0);
while(true){
if((i__64959_65293 < count__64958_65292)){
var arg_65294__$1 = chunk__64957_65291.cljs$core$IIndexed$_nth$arity$2(null,i__64959_65293);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_65287,sci.impl.load.prependss(arg_65294__$1,opts));


var G__65295 = seq__64956_65290;
var G__65296 = chunk__64957_65291;
var G__65297 = count__64958_65292;
var G__65298 = (i__64959_65293 + (1));
seq__64956_65290 = G__65295;
chunk__64957_65291 = G__65296;
count__64958_65292 = G__65297;
i__64959_65293 = G__65298;
continue;
} else {
var temp__5753__auto___65299__$1 = cljs.core.seq(seq__64956_65290);
if(temp__5753__auto___65299__$1){
var seq__64956_65300__$1 = temp__5753__auto___65299__$1;
if(cljs.core.chunked_seq_QMARK_(seq__64956_65300__$1)){
var c__4556__auto___65301 = cljs.core.chunk_first(seq__64956_65300__$1);
var G__65302 = cljs.core.chunk_rest(seq__64956_65300__$1);
var G__65303 = c__4556__auto___65301;
var G__65304 = cljs.core.count(c__4556__auto___65301);
var G__65305 = (0);
seq__64956_65290 = G__65302;
chunk__64957_65291 = G__65303;
count__64958_65292 = G__65304;
i__64959_65293 = G__65305;
continue;
} else {
var arg_65306__$1 = cljs.core.first(seq__64956_65300__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_65287,sci.impl.load.prependss(arg_65306__$1,opts));


var G__65307 = cljs.core.next(seq__64956_65300__$1);
var G__65308 = null;
var G__65309 = (0);
var G__65310 = (0);
seq__64956_65290 = G__65307;
chunk__64957_65291 = G__65308;
count__64958_65292 = G__65309;
i__64959_65293 = G__65310;
continue;
}
} else {
}
}
break;
}
}


var G__65312 = cljs.core.next(seq__64864__$1);
var G__65313 = null;
var G__65314 = (0);
var G__65315 = (0);
seq__64864 = G__65312;
chunk__64865 = G__65313;
count__64866 = G__65314;
i__64867 = G__65315;
continue;
}
} else {
return null;
}
}
break;
}
});
sci.impl.load.eval_require = (function sci$impl$load$eval_require(var_args){
var args__4742__auto__ = [];
var len__4736__auto___65317 = arguments.length;
var i__4737__auto___65318 = (0);
while(true){
if((i__4737__auto___65318 < len__4736__auto___65317)){
args__4742__auto__.push((arguments[i__4737__auto___65318]));

var G__65321 = (i__4737__auto___65318 + (1));
i__4737__auto___65318 = G__65321;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sci.impl.load.eval_require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sci.impl.load.eval_require.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return sci.impl.load.load_libs(ctx,new cljs.core.Keyword(null,"require","require",-468001333),args);
}));

(sci.impl.load.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.load.eval_require.cljs$lang$applyTo = (function (seq64987){
var G__64988 = cljs.core.first(seq64987);
var seq64987__$1 = cljs.core.next(seq64987);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64988,seq64987__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.load.eval_require);
sci.impl.load.eval_use = (function sci$impl$load$eval_use(var_args){
var args__4742__auto__ = [];
var len__4736__auto___65353 = arguments.length;
var i__4737__auto___65354 = (0);
while(true){
if((i__4737__auto___65354 < len__4736__auto___65353)){
args__4742__auto__.push((arguments[i__4737__auto___65354]));

var G__65356 = (i__4737__auto___65354 + (1));
i__4737__auto___65354 = G__65356;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sci.impl.load.eval_use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sci.impl.load.eval_use.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return sci.impl.load.load_libs(ctx,new cljs.core.Keyword(null,"use","use",-1846382424),args);
}));

(sci.impl.load.eval_use.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.load.eval_use.cljs$lang$applyTo = (function (seq65009){
var G__65010 = cljs.core.first(seq65009);
var seq65009__$1 = cljs.core.next(seq65009);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65010,seq65009__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.load.eval_use);
sci.impl.load.eval_refer_clojure = (function sci$impl$load$eval_refer_clojure(ctx,exprs){
var ns_sym = new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null);
var exprs__$1 = exprs;
while(true){
if(cljs.core.truth_(exprs__$1)){
var vec__65018 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65018,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65018,(1),null);
var G__65029_65361 = k;
var G__65029_65362__$1 = (((G__65029_65361 instanceof cljs.core.Keyword))?G__65029_65361.fqn:null);
switch (G__65029_65362__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__65029_65361,G__65029_65362__$1,vec__65018,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__65029_65361,G__65029_65362__$1,vec__65018,k,v,ns_sym))
);

break;
case "only":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__65029_65361,G__65029_65362__$1,vec__65018,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym], null));
var other_vars = cljs.core.select_keys(other_ns,v);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),cljs.core.merge,other_vars);
});})(exprs__$1,G__65029_65361,G__65029_65362__$1,vec__65018,k,v,ns_sym))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65029_65362__$1)].join('')));

}

var G__65364 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__65364;
continue;
} else {
return null;
}
break;
}
});
sci.impl.load.eval_refer_STAR_ = (function sci$impl$load$eval_refer_STAR_(env,ns_sym,filters){

var cnn = sci.impl.vars.current_ns_name();
var namespaces = new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(env);
var ns = (function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,ns_sym);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw (new Error(["No namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_sym)].join('')));
}
})();
var fs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,filters);
var public_keys = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,cljs.core.keys(ns));
var rename = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"rename","rename",1508157613).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var exclude = cljs.core.set(new cljs.core.Keyword(null,"exclude","exclude",-1230250334).cljs$core$IFn$_invoke$arity$1(fs));
var to_do = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"refer","refer",-964295553).cljs$core$IFn$_invoke$arity$1(fs)))?public_keys:(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"refer","refer",-964295553).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"only","only",1907811652).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return public_keys;
}
}
})());
var _ = (cljs.core.truth_((function (){var and__4115__auto__ = to_do;
if(cljs.core.truth_(and__4115__auto__)){
return (!(cljs.core.sequential_QMARK_(to_do)));
} else {
return and__4115__auto__;
}
})())?(function(){throw (new Error(":only/:refer value must be a sequential collection of symbols"))})():null);
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,cnn);
var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (referred__$1,sym){
if(cljs.core.not((exclude.cljs$core$IFn$_invoke$arity$1 ? exclude.cljs$core$IFn$_invoke$arity$1(sym) : exclude.call(null,sym)))){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ns,sym);
if(cljs.core.truth_(v)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')
));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(referred__$1,(function (){var or__4126__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return sym;
}
})(),v);
} else {
return referred__$1;
}
}),referred,to_do);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
var namespaces__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(namespaces,cnn,the_current_ns__$1);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1);
return env__$1;
});
/**
 * The function equivalent of :refer is handled differently than what we
 *   did before (this is more like what Clojure itself does.) For
 *   referring clojure.core we still use the old code.
 */
sci.impl.load.eval_refer = (function sci$impl$load$eval_refer(var_args){
var args__4742__auto__ = [];
var len__4736__auto___65397 = arguments.length;
var i__4737__auto___65398 = (0);
while(true){
if((i__4737__auto___65398 < len__4736__auto___65397)){
args__4742__auto__.push((arguments[i__4737__auto___65398]));

var G__65399 = (i__4737__auto___65398 + (1));
i__4737__auto___65398 = G__65399;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.load.eval_refer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.load.eval_refer.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,ns_sym,filters){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),ns_sym)){
sci.impl.load.eval_refer_clojure(ctx,filters);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),sci.impl.load.eval_refer_STAR_,ns_sym,filters);
}

return null;
}));

(sci.impl.load.eval_refer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.load.eval_refer.cljs$lang$applyTo = (function (seq65087){
var G__65088 = cljs.core.first(seq65087);
var seq65087__$1 = cljs.core.next(seq65087);
var G__65089 = cljs.core.first(seq65087__$1);
var seq65087__$2 = cljs.core.next(seq65087__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65088,G__65089,seq65087__$2);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_refer_state,sci.impl.load.eval_refer);

//# sourceMappingURL=sci.impl.load.js.map
