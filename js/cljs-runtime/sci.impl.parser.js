goog.provide('sci.impl.parser');
sci.impl.parser.eof = new cljs.core.Keyword("sci.impl.parser.edamame","eof","sci.impl.parser.edamame/eof",-917261517);
sci.impl.parser.default_opts = edamame.impl.parser.normalize_opts(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"all","all",892129742),true,new cljs.core.Keyword(null,"read-eval","read-eval",1788733932),false,new cljs.core.Keyword(null,"row-key","row-key",-1189010712),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"col-key","col-key",-2009675766),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"read-cond","read-cond",1056899244),new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"location?","location?",425878086),(function (obj){
return (((obj instanceof cljs.core.Symbol)) || (cljs.core.seq_QMARK_(obj)));
}),new cljs.core.Keyword(null,"end-location","end-location",-1199449467),false], null));
sci.impl.parser.var__GT_sym = (function sci$impl$parser$var__GT_sym(v){
var temp__5753__auto__ = cljs.core.meta(v);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
var temp__5753__auto____$1 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto____$1)){
var var_name = temp__5753__auto____$1;
var temp__5753__auto____$2 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto____$2)){
var ns = temp__5753__auto____$2;
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(ns)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
sci.impl.parser.fully_qualify = (function sci$impl$parser$fully_qualify(ctx,sym){
var env = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var sym_ns = (function (){var temp__5753__auto__ = cljs.core.namespace(sym);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(n);
} else {
return null;
}
})();
var sym_name_str = cljs.core.name(sym);
var current_ns = sci.impl.vars.current_ns_name();
var current_ns_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_ns);
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,current_ns);
var aliases = new cljs.core.Keyword(null,"aliases","aliases",1346874714).cljs$core$IFn$_invoke$arity$1(the_current_ns);
var ret = ((cljs.core.not(sym_ns))?(function (){var or__4126__auto__ = (function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns);
if(cljs.core.truth_(temp__5753__auto__)){
var refers = temp__5753__auto__;
var temp__5753__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(refers,sym);
if(cljs.core.truth_(temp__5753__auto____$1)){
var v = temp__5753__auto____$1;
return sci.impl.parser.var__GT_sym(v);
} else {
return null;
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns,sym);
if(cljs.core.truth_(temp__5753__auto__)){
var v = temp__5753__auto__;
return sci.impl.parser.var__GT_sym(v);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = ((((((cljs.core.contains_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null)),sym)) && (cljs.core.not((function (){var G__69707 = the_current_ns;
var G__69707__$1 = (((G__69707 == null))?null:new cljs.core.Keyword(null,"refer","refer",-964295553).cljs$core$IFn$_invoke$arity$1(G__69707));
var G__69707__$2 = (((G__69707__$1 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__69707__$1,new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null)));
var G__69707__$3 = (((G__69707__$2 == null))?null:new cljs.core.Keyword(null,"exclude","exclude",-1230250334).cljs$core$IFn$_invoke$arity$1(G__69707__$2));
if((G__69707__$3 == null)){
return null;
} else {
return cljs.core.contains_QMARK_(G__69707__$3,sym);
}
})())))) || (cljs.core.contains_QMARK_(sci.impl.utils.ana_macros,sym))))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("clojure.core",sym_name_str):null);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = sci.impl.interop.fully_qualify_class(ctx,sym);
if(cljs.core.truth_(or__4126__auto____$3)){
return or__4126__auto____$3;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns_str,sym_name_str);
}
}
}
}
})():(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),sym_ns], null)))?sym:(function (){var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(aliases,sym_ns);
if(cljs.core.truth_(temp__5751__auto__)){
var ns = temp__5751__auto__;
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),sym_name_str);
} else {
return sym;
}
})()));
return ret;
});
sci.impl.parser.parse_next = (function sci$impl$parser$parse_next(var_args){
var G__69736 = arguments.length;
switch (G__69736) {
case 2:
return sci.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 = (function (ctx,r){
return sci.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$3(ctx,r,null);
}));

(sci.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$3 = (function (ctx,r,opts){
var features = new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(ctx);
var readers = new cljs.core.Keyword(null,"readers","readers",-2118263030).cljs$core$IFn$_invoke$arity$1(ctx);
var readers__$1 = ((sci.impl.vars.var_QMARK_(readers))?cljs.core.deref(readers):readers);
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var env_val = cljs.core.deref(env);
var current_ns = sci.impl.vars.current_ns_name();
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_val,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null));
var aliases = new cljs.core.Keyword(null,"aliases","aliases",1346874714).cljs$core$IFn$_invoke$arity$1(the_current_ns);
var auto_resolve = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aliases,new cljs.core.Keyword(null,"current","current",-1088038603),current_ns);
var parse_opts = (function (){var G__69752 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(sci.impl.parser.default_opts,new cljs.core.Keyword(null,"features","features",-1146962336),features,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"auto-resolve","auto-resolve",1851201983),auto_resolve,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"resolve-symbol","resolve-symbol",-319166964),(function (p1__69727_SHARP_){
return sci.impl.parser.fully_qualify(ctx,p1__69727_SHARP_);
})], null),new cljs.core.Keyword(null,"readers","readers",-2118263030),readers__$1], 0));
if(cljs.core.truth_(opts)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__69752,opts], 0));
} else {
return G__69752;
}
})();
var ret = (function (){try{var v = edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(parse_opts,r);
if(cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006)) : sci.impl.utils.kw_identical_QMARK_.call(null,v,new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006))))){
return new cljs.core.Keyword("sci.impl.parser.edamame","eof","sci.impl.parser.edamame/eof",-917261517);
} else {
return v;
}
}catch (e69759){if((e69759 instanceof cljs.core.ExceptionInfo)){
var e = e69759;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(e.message,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.ex_data(e),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("sci.error","parse","sci.error/parse",-264338844),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"phase","phase",575722892),"parse",new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0)),e);
} else {
throw e69759;

}
}})();
return ret;
}));

(sci.impl.parser.parse_next.cljs$lang$maxFixedArity = 3);

sci.impl.parser.reader = (function sci$impl$parser$reader(x){
var string_reader = cljs.tools.reader.reader_types.string_reader(x);
var buf_len = (1);
var pushback_reader = (new cljs.tools.reader.reader_types.PushbackReader(string_reader,cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(buf_len),buf_len,buf_len));
return cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(pushback_reader);
});
sci.impl.parser.get_line_number = (function sci$impl$parser$get_line_number(reader){
return cljs.tools.reader.reader_types.get_line_number(reader);
});
sci.impl.parser.get_column_number = (function sci$impl$parser$get_column_number(reader){
return cljs.tools.reader.reader_types.get_column_number(reader);
});
sci.impl.parser.parse_string = (function sci$impl$parser$parse_string(ctx,s){
var r = sci.impl.parser.reader(s);
var v = sci.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,r);
if(cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl.parser.edamame","eof","sci.impl.parser.edamame/eof",-917261517),v) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.parser.edamame","eof","sci.impl.parser.edamame/eof",-917261517),v)))){
return null;
} else {
return v;
}
});

//# sourceMappingURL=sci.impl.parser.js.map
