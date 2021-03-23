goog.provide('sci.impl.utils');
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.error","realized-beyond-max","sci.error/realized-beyond-max",-1094268187),new cljs.core.Keyword("sci","error","sci/error",-979082803));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.error","parse","sci.error/parse",-264338844),new cljs.core.Keyword("sci","error","sci/error",-979082803));
sci.impl.utils.constant_QMARK_ = (function sci$impl$utils$constant_QMARK_(x){
return ((typeof x === 'number') || (typeof x === 'string') || ((x instanceof cljs.core.Keyword)) || (cljs.core.boolean_QMARK_(x)));
});
sci.impl.utils.eval_QMARK_ = (function sci$impl$utils$eval_QMARK_(x){
var G__63370 = x;
var G__63370__$1 = (((G__63370 == null))?null:cljs.core.meta(G__63370));
if((G__63370__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(G__63370__$1);
}
});
sci.impl.utils.kw_identical_QMARK_ = cljs.core.keyword_identical_QMARK_;
sci.impl.utils.mark_eval_call = (function sci$impl$utils$mark_eval_call(var_args){
var G__63374 = arguments.length;
switch (G__63374) {
case 1:
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1 = (function (expr){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(expr,(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"call","call",-519999866)),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns)),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file));
}));
}));

(sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$3 = (function (expr,extra_key,extra_val){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(expr,(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"call","call",-519999866)),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns)),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)),extra_key,extra_val);
}));
}));

(sci.impl.utils.mark_eval_call.cljs$lang$maxFixedArity = 3);

sci.impl.utils.mark_eval = (function sci$impl$utils$mark_eval(expr){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(expr,(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"eval","eval",-1103567905));
}));
});
sci.impl.utils.throw_error_with_location = (function sci$impl$utils$throw_error_with_location(var_args){
var G__63393 = arguments.length;
switch (G__63393) {
case 2:
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2 = (function (msg,iobj){
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$3(msg,iobj,cljs.core.PersistentArrayMap.EMPTY);
}));

(sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$3 = (function (msg,iobj,data){
var map__63399 = cljs.core.meta(iobj);
var map__63399__$1 = (((((!((map__63399 == null))))?(((((map__63399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63399):map__63399);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63399__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63399__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63399__$1,new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file));
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("sci","error","sci/error",-979082803),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column,new cljs.core.Keyword(null,"file","file",-1269645878),file], null),data], 0)));
}));

(sci.impl.utils.throw_error_with_location.cljs$lang$maxFixedArity = 3);

sci.impl.utils._STAR_in_try_STAR_ = false;
sci.impl.utils.macro_QMARK_ = (function sci$impl$utils$macro_QMARK_(f){
var temp__5753__auto__ = cljs.core.meta(f);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
var or__4126__auto__ = new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
}
} else {
return null;
}
});
sci.impl.utils.needs_ctx = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("needs-ctx");
sci.impl.utils.rethrow_with_location_of_node = (function sci$impl$utils$rethrow_with_location_of_node(ctx,e,raw_node){
if(cljs.core.truth_(sci.impl.utils._STAR_in_try_STAR_)){
throw e;
} else {
var node = sci.impl.types.sexpr(raw_node);
var m = cljs.core.meta(node);
var f = ((cljs.core.seqable_QMARK_(node))?cljs.core.first(node):null);
var fm = (function (){var G__63407 = f;
if((G__63407 == null)){
return null;
} else {
return cljs.core.meta(G__63407);
}
})();
var op = (cljs.core.truth_((function (){var and__4115__auto__ = fm;
if(cljs.core.truth_(and__4115__auto__)){
return m;
} else {
return and__4115__auto__;
}
})())?m.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null);
var special_QMARK_ = (function (){var or__4126__auto__ = (((f instanceof cljs.core.Symbol)) && (cljs.core.not(op)));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),op) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),op));
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return (sci.impl.utils.needs_ctx === op);
}
}
})();
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.not(special_QMARK_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl","callstack","sci.impl/callstack",-1621010557),id], null),(function (vt){
if(cljs.core.truth_(vt)){
cljs.core._vreset_BANG_(vt,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(vt),node));

return vt;
} else {
return cljs.core.volatile_BANG_((new cljs.core.List(null,node,null,(1),null)));
}
}));
} else {
}

var d = cljs.core.ex_data(e);
var wrapping_sci_error_QMARK_ = cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword("sci","error","sci/error",-979082803));
if(wrapping_sci_error_QMARK_){
throw e;
} else {
var ex_msg = e.message;
var map__63412 = (function (){var or__4126__auto__ = (function (){var G__63417 = env;
var G__63417__$1 = (((G__63417 == null))?null:cljs.core.deref(G__63417));
var G__63417__$2 = (((G__63417__$1 == null))?null:new cljs.core.Keyword("sci.impl","callstack","sci.impl/callstack",-1621010557).cljs$core$IFn$_invoke$arity$1(G__63417__$1));
var G__63417__$3 = (((G__63417__$2 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__63417__$2,id));
var G__63417__$4 = (((G__63417__$3 == null))?null:cljs.core.deref(G__63417__$3));
var G__63417__$5 = (((G__63417__$4 == null))?null:cljs.core.last(G__63417__$4));
if((G__63417__$5 == null)){
return null;
} else {
return cljs.core.meta(G__63417__$5);
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.meta(node);
}
})();
var map__63412__$1 = (((((!((map__63412 == null))))?(((((map__63412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63412):map__63412);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63412__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63412__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63412__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
var ex_msg__$1 = (cljs.core.truth_((function (){var and__4115__auto__ = ex_msg;
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fm);
} else {
return and__4115__auto__;
}
})())?clojure.string.replace(ex_msg,/(sci\.impl\.)?fns\/fun\/[a-zA-Z0-9-]+--\d+/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(fm)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fm))].join('')):ex_msg);
var new_exception = (function (){var new_d = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("sci","error","sci/error",-979082803),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column,new cljs.core.Keyword(null,"message","message",-406056002),ex_msg__$1,new cljs.core.Keyword("sci.impl","callstack","sci.impl/callstack",-1621010557),(new cljs.core.Delay((function (){
var temp__5753__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl","callstack","sci.impl/callstack",-1621010557),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(ctx)], null));
if(cljs.core.truth_(temp__5753__auto__)){
var v = temp__5753__auto__;
return cljs.core.deref(v);
} else {
return null;
}
}),null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"locals","locals",535295783),new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx)], null);
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(ex_msg__$1,new_d,e);
})();
throw new_exception;
} else {
throw e;
}
}
}
});
sci.impl.utils.iobj_QMARK_ = (function sci$impl$utils$iobj_QMARK_(obj){
if((((!((obj == null))))?(((((obj.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IWithMeta$))))?true:false):false)){
return cljs.core.meta(obj);
} else {
return false;
}
});
/**
 * Only adds metadata to obj if d is not nil and if obj already has meta
 */
sci.impl.utils.vary_meta_STAR_ = (function sci$impl$utils$vary_meta_STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___63584 = arguments.length;
var i__4737__auto___63586 = (0);
while(true){
if((i__4737__auto___63586 < len__4736__auto___63584)){
args__4742__auto__.push((arguments[i__4737__auto___63586]));

var G__63592 = (i__4737__auto___63586 + (1));
i__4737__auto___63586 = G__63592;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.utils.vary_meta_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.utils.vary_meta_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,f,args){
if(cljs.core.truth_(sci.impl.utils.iobj_QMARK_(obj))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vary_meta,obj,f,args);
} else {
return obj;
}
}));

(sci.impl.utils.vary_meta_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.utils.vary_meta_STAR_.cljs$lang$applyTo = (function (seq63446){
var G__63447 = cljs.core.first(seq63446);
var seq63446__$1 = cljs.core.next(seq63446);
var G__63448 = cljs.core.first(seq63446__$1);
var seq63446__$2 = cljs.core.next(seq63446__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63447,G__63448,seq63446__$2);
}));

/**
 * Only adds metadata to obj if d is not nil and if meta on obj isn't already nil.
 */
sci.impl.utils.merge_meta = (function sci$impl$utils$merge_meta(obj,d){
if(cljs.core.truth_((function (){var and__4115__auto__ = d;
if(cljs.core.truth_(and__4115__auto__)){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IWithMeta$)))){
return true;
} else {
return false;
}
} else {
return false;
}
} else {
return and__4115__auto__;
}
})())){
var temp__5751__auto__ = cljs.core.meta(obj);
if(cljs.core.truth_(temp__5751__auto__)){
var m = temp__5751__auto__;

return cljs.core.with_meta(obj,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,d], 0)));
} else {
return obj;
}
} else {
return obj;
}
});
sci.impl.utils.strip_core_ns = (function sci$impl$utils$strip_core_ns(sym){
var G__63458 = cljs.core.namespace(sym);
switch (G__63458) {
case "clojure.core":
case "cljs.core":
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym));

break;
default:
return sym;

}
});
sci.impl.utils.allowed_loop = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("loop");
sci.impl.utils.allowed_recur = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("recur");
sci.impl.utils.walk_STAR_ = (function sci$impl$utils$walk_STAR_(inner,form){
if(cljs.core.truth_(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form)))){
return form;
} else {
if(cljs.core.list_QMARK_(form)){
return cljs.core.with_meta(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,form)),cljs.core.meta(form));
} else {
if(cljs.core.map_entry_QMARK_(form)){
return (new cljs.core.MapEntry((function (){var G__63466 = cljs.core.key(form);
return (inner.cljs$core$IFn$_invoke$arity$1 ? inner.cljs$core$IFn$_invoke$arity$1(G__63466) : inner.call(null,G__63466));
})(),(function (){var G__63468 = cljs.core.val(form);
return (inner.cljs$core$IFn$_invoke$arity$1 ? inner.cljs$core$IFn$_invoke$arity$1(G__63468) : inner.call(null,G__63468));
})(),null));
} else {
if(cljs.core.seq_QMARK_(form)){
return cljs.core.with_meta(cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,form)),cljs.core.meta(form));
} else {
if(cljs.core.record_QMARK_(form)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,x){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(inner.cljs$core$IFn$_invoke$arity$1 ? inner.cljs$core$IFn$_invoke$arity$1(x) : inner.call(null,x)));
}),form,form);
} else {
if(cljs.core.coll_QMARK_(form)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(form),cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,form));
} else {
return form;

}
}
}
}
}
}
});
/**
 * Prewalk with metadata preservation. Does not prewalk :sci.impl/op nodes.
 */
sci.impl.utils.prewalk = (function sci$impl$utils$prewalk(f,form){
return sci.impl.utils.walk_STAR_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(sci.impl.utils.prewalk,f),(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(form) : f.call(null,form)));
});
/**
 * Fetches namespaces from env if it exists. Else, if `create?`,
 *   produces one regardless of the existince of the namespace in env and
 *   adds it to env before returning it.
 */
sci.impl.utils.namespace_object = (function sci$impl$utils$namespace_object(env,ns_sym,create_QMARK_,attr_map){
var env_STAR_ = cljs.core.deref(env);
var ns_map = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym], null));
var or__4126__auto__ = new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(ns_map);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.truth_((function (){var or__4126__auto____$1 = ns_map;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return create_QMARK_;
}
})())){
var ns_obj = sci.impl.vars.__GT_SciNamespace(ns_sym,attr_map);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym,new cljs.core.Keyword(null,"obj","obj",981763962)], null),ns_obj);

return ns_obj;
} else {
return null;
}
}
});
sci.impl.utils.set_namespace_BANG_ = (function sci$impl$utils$set_namespace_BANG_(ctx,ns_sym,attr_map){
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var attr_map__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(ns_sym),attr_map], 0));
var ns_obj = sci.impl.utils.namespace_object(env,ns_sym,true,attr_map__$1);
return sci.impl.types.setVal(sci.impl.vars.current_ns,ns_obj);
});
sci.impl.utils.eval_form_state = cljs.core.volatile_BANG_(null);
sci.impl.utils.eval_require_state = cljs.core.volatile_BANG_(null);
sci.impl.utils.eval_use_state = cljs.core.volatile_BANG_(null);
sci.impl.utils.eval_resolve_state = cljs.core.volatile_BANG_(null);
sci.impl.utils.eval_refer_state = cljs.core.volatile_BANG_(null);
sci.impl.utils.macroexpand_STAR_ = cljs.core.volatile_BANG_(null);
sci.impl.utils.macroexpand_1_STAR_ = cljs.core.volatile_BANG_(null);
sci.impl.utils.eval_STAR_ = cljs.core.volatile_BANG_(null);
sci.impl.utils.eval_do_STAR_ = cljs.core.volatile_BANG_(null);
sci.impl.utils.eval_fn = cljs.core.volatile_BANG_(null);
sci.impl.utils.eval_string_STAR_ = cljs.core.volatile_BANG_(null);
sci.impl.utils.lookup = cljs.core.volatile_BANG_(null);
/**
 * Like partition-by but splits collection only when `pred` returns
 *   a truthy value. E.g. `(split-when odd? [1 2 3 4 5]) => ((1 2) (3 4) (5))`
 */
sci.impl.utils.split_when = (function sci$impl$utils$split_when(pred,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__5753__auto__ = cljs.core.seq(coll);
if(temp__5753__auto__){
var s = temp__5753__auto__;
var fst = cljs.core.first(s);
var f = cljs.core.complement(pred);
var run = cljs.core.cons(fst,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__63494_SHARP_){
return f(p1__63494_SHARP_);
}),cljs.core.next(s)));
return cljs.core.cons(run,(function (){var G__63495 = pred;
var G__63496 = (new cljs.core.LazySeq(null,(function (){
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(run),s);
}),null,null));
return (sci.impl.utils.split_when.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.split_when.cljs$core$IFn$_invoke$arity$2(G__63495,G__63496) : sci.impl.utils.split_when.call(null,G__63495,G__63496));
})());
} else {
return null;
}
}),null,null));
});
sci.impl.utils.ana_macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 28, [new cljs.core.Symbol(null,"try","try",-1273693247,null),"null",new cljs.core.Symbol(null,"import","import",241030818,null),"null",new cljs.core.Symbol(null,"doseq","doseq",221164135,null),"null",new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),"null",new cljs.core.Symbol(null,"let","let",358118826,null),"null",new cljs.core.Symbol(null,"fn","fn",465265323,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),"null",new cljs.core.Symbol(null,"defn","defn",-126010802,null),"null",new cljs.core.Symbol(null,"if","if",1181717262,null),"null",new cljs.core.Symbol(null,"new","new",-444906321,null),"null",new cljs.core.Symbol(null,"ns","ns",2082130287,null),"null",new cljs.core.Symbol(null,"declare","declare",654042991,null),"null",new cljs.core.Symbol(null,"or","or",1876275696,null),"null",new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),"null",new cljs.core.Symbol(null,"loop","loop",1244978678,null),"null",new cljs.core.Symbol(null,"for","for",316745208,null),"null",new cljs.core.Symbol(null,"expand-constructor","expand-constructor",-343741576,null),"null",new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),"null",new cljs.core.Symbol(null,"set!","set!",250714521,null),"null",new cljs.core.Symbol(null,".",".",1975675962,null),"null",new cljs.core.Symbol(null,"var","var",870848730,null),"null",new cljs.core.Symbol(null,"case","case",-1510733573,null),"null",new cljs.core.Symbol(null,"comment","comment",-2122229700,null),"null",new cljs.core.Symbol(null,"resolve","resolve",56086045,null),"null",new cljs.core.Symbol(null,"and","and",668631710,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null",new cljs.core.Symbol(null,"expand-dot*","expand-dot*",-1946890561,null),"null"], null), null);
sci.impl.utils.ctx_fn = (function sci$impl$utils$ctx_fn(f,expr){
return sci.impl.types.__GT_EvalFn(f,null,expr);
});
sci.impl.utils.maybe_destructured = (function sci$impl$utils$maybe_destructured(params,body){
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,params)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,cljs.core.meta(params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first(params__$1) instanceof cljs.core.Symbol)){
var G__63682 = cljs.core.next(params__$1);
var G__63683 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__63684 = lets;
params__$1 = G__63682;
new_params = G__63683;
lets = G__63684;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__63686 = cljs.core.next(params__$1);
var G__63687 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__63688 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__63686;
new_params = G__63687;
lets = G__63688;
continue;
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new_params,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,lets,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))))], null)], null);
}
break;
}
}
});

//# sourceMappingURL=sci.impl.utils.js.map
