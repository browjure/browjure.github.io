goog.provide('sci.impl.records');
sci.impl.records.defrecord = (function sci$impl$records$defrecord(var_args){
var args__4742__auto__ = [];
var len__4736__auto___120148 = arguments.length;
var i__4737__auto___120149 = (0);
while(true){
if((i__4737__auto___120149 < len__4736__auto___120148)){
args__4742__auto__.push((arguments[i__4737__auto___120149]));

var G__120150 = (i__4737__auto___120149 + (1));
i__4737__auto___120149 = G__120150;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((5) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((5)),(0),null)):null);
return sci.impl.records.defrecord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4743__auto__);
});

(sci.impl.records.defrecord.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,record_name,fields,protocol_impls){
var factory_fn_sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["->",cljs.core.str.cljs$core$IFn$_invoke$arity$1(record_name)].join(''));
var keys = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,fields);
var protocol_impls__$1 = sci.impl.utils.split_when(cljs.core.symbol_QMARK_,protocol_impls);
var protocol_impls__$2 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__120101){
var vec__120102 = p__120101;
var seq__120103 = cljs.core.seq(vec__120102);
var first__120104 = cljs.core.first(seq__120103);
var seq__120103__$1 = cljs.core.next(seq__120103);
var protocol_name = first__120104;
var impls = seq__120103__$1;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (impl){
var protocol_var = (function (){var fexpr__120109 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__120109.cljs$core$IFn$_invoke$arity$2 ? fexpr__120109.cljs$core$IFn$_invoke$arity$2(ctx,protocol_name) : fexpr__120109.call(null,ctx,protocol_name));
})();
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(protocol_var));
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var fq_meth_name = (function (p1__120076_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns,p1__120076_SHARP_);
});
var args = cljs.core.second(impl);
var this$ = cljs.core.first(args);
var bindings = cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (field){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [field,(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(field),(new cljs.core.List(null,this$,null,(1),null)),(2),null))], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fields], 0)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq_meth_name(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(impl))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,record_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.second(impl),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.nnext(impl)], 0)))),null,(1),null))], 0))));
}),impls);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([protocol_impls__$1], 0));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,factory_fn_sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__120080__auto__","args__120080__auto__",236557853,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","vary-meta","cljs.core/vary-meta",-938366546,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),null,(1),null)),(new cljs.core.List(null,keys,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__120080__auto__","args__120080__auto__",236557853,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("sci.impl","record","sci.impl/record",-1939193950),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("sci.impl","type","sci.impl/type",1797552241),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,record_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,record_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",749126446,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,record_name,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword("sci.impl","record","sci.impl/record",-1939193950),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("sci.impl.record","constructor","sci.impl.record/constructor",-2025684209),null,(1),null)),(new cljs.core.List(null,factory_fn_sym,null,(1),null))], 0))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),protocol_impls__$2], 0))));
}));

(sci.impl.records.defrecord.cljs$lang$maxFixedArity = (5));

/** @this {Function} */
(sci.impl.records.defrecord.cljs$lang$applyTo = (function (seq120082){
var G__120083 = cljs.core.first(seq120082);
var seq120082__$1 = cljs.core.next(seq120082);
var G__120084 = cljs.core.first(seq120082__$1);
var seq120082__$2 = cljs.core.next(seq120082__$1);
var G__120085 = cljs.core.first(seq120082__$2);
var seq120082__$3 = cljs.core.next(seq120082__$2);
var G__120086 = cljs.core.first(seq120082__$3);
var seq120082__$4 = cljs.core.next(seq120082__$3);
var G__120087 = cljs.core.first(seq120082__$4);
var seq120082__$5 = cljs.core.next(seq120082__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__120083,G__120084,G__120085,G__120086,G__120087,seq120082__$5);
}));

sci.impl.records.sci_record_QMARK_ = (function sci$impl$records$sci_record_QMARK_(x){
var or__4126__auto__ = ((cljs.core.map_QMARK_(x))?(function (){var G__120142 = x;
var G__120142__$1 = (((G__120142 == null))?null:cljs.core.meta(G__120142));
if((G__120142__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","record","sci.impl/record",-1939193950).cljs$core$IFn$_invoke$arity$1(G__120142__$1);
}
})():null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.record_QMARK_(x);
}
});
sci.impl.records.resolve_record_class = (function sci$impl$records$resolve_record_class(var_args){
var G__120145 = arguments.length;
switch (G__120145) {
case 2:
return sci.impl.records.resolve_record_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.records.resolve_record_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.records.resolve_record_class.cljs$core$IFn$_invoke$arity$2 = (function (ctx,sym){
var sym_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym);
var last_dot = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(sym_str,".");
var class_name = (cljs.core.truth_(last_dot)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(sym_str,(last_dot + (1)),((sym_str).length)):sym_str);
var namespace = (cljs.core.truth_(last_dot)?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(sym_str,(0),last_dot)):sci.impl.vars.current_ns_name());
return sci.impl.records.resolve_record_class.cljs$core$IFn$_invoke$arity$3(ctx,namespace,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(class_name));
}));

(sci.impl.records.resolve_record_class.cljs$core$IFn$_invoke$arity$3 = (function (ctx,package$,class$){
var namespace = package$;
var temp__5753__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespace,class$], null));
if(cljs.core.truth_(temp__5753__auto__)){
var sci_var = temp__5753__auto__;
if(sci.impl.vars.var_QMARK_(sci_var)){
return cljs.core.deref(sci_var);
} else {
return sci_var;
}
} else {
return null;
}
}));

(sci.impl.records.resolve_record_class.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=sci.impl.records.js.map
