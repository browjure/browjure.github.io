goog.provide('sci.impl.protocols');
sci.impl.protocols.defprotocol = (function sci$impl$protocols$defprotocol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___68765 = arguments.length;
var i__4737__auto___68766 = (0);
while(true){
if((i__4737__auto___68766 < len__4736__auto___68765)){
args__4742__auto__.push((arguments[i__4737__auto___68766]));

var G__68767 = (i__4737__auto___68766 + (1));
i__4737__auto___68766 = G__68767;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,_ctx,protocol_name,signatures){
var vec__68282 = (function (){var sig = cljs.core.first(signatures);
if(typeof sig === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig,cljs.core.rest(signatures)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68282,(0),null);
var signatures__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68282,(1),null);
var vec__68285 = (function (){var opt = cljs.core.first(signatures__$1);
if((opt instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([opt,cljs.core.second(signatures__$1)]),cljs.core.nnext(signatures__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures__$1], null);
}
})();
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68285,(0),null);
var signatures__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68285,(1),null);
var current_ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.current_ns_name());
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(protocol_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),docstring], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"ns","ns",441598760),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*ns*","cljs.core/*ns*",1155497085,null),null,(1),null))], 0))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__68303){
var vec__68304 = p__68303;
var seq__68305 = cljs.core.seq(vec__68304);
var first__68306 = cljs.core.first(seq__68305);
var seq__68305__$1 = cljs.core.next(seq__68305);
var method_name = first__68306;
var ___$2 = seq__68305__$1;
var fq_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name));
var impls = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmulti","cljs.core/defmulti",723984225,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__68238__auto__","x__68238__auto__",479664564,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__68239__auto__","args__68239__auto__",-314730224,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"methods__68240__auto__","methods__68240__auto__",-1070220284,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-reified-methods","cljs.core/-reified-methods",-1833109469,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__68238__auto__","x__68238__auto__",479664564,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"methods__68240__auto__","methods__68240__auto__",-1070220284,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__68238__auto__","x__68238__auto__",479664564,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__68239__auto__","args__68239__auto__",-314730224,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
var impls__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(impls,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__68245__auto__","x__68245__auto__",64509352,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__68246__auto__","args__68246__auto__",-700166167,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"meta__68247__auto__","meta__68247__auto__",-975020569,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__68245__auto__","x__68245__auto__",64509352,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"method__68248__auto__","method__68248__auto__",-252350660,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meta__68247__auto__","meta__68247__auto__",-975020569,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__68248__auto__","method__68248__auto__",-252350660,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__68248__auto__","method__68248__auto__",-252350660,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__68245__auto__","x__68245__auto__",64509352,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__68246__auto__","args__68246__auto__",-700166167,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No implementation of method: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_name),null,(1),null)),(new cljs.core.List(null," of protocol: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," found for: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__68245__auto__","x__68245__auto__",64509352,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))):impls);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),impls__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","update","cljs.core/update",-908565906,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),signatures__$2)], 0))));
return expansion;
}));

(sci.impl.protocols.defprotocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.defprotocol.cljs$lang$applyTo = (function (seq68256){
var G__68257 = cljs.core.first(seq68256);
var seq68256__$1 = cljs.core.next(seq68256);
var G__68258 = cljs.core.first(seq68256__$1);
var seq68256__$2 = cljs.core.next(seq68256__$1);
var G__68259 = cljs.core.first(seq68256__$2);
var seq68256__$3 = cljs.core.next(seq68256__$2);
var G__68260 = cljs.core.first(seq68256__$3);
var seq68256__$4 = cljs.core.next(seq68256__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__68257,G__68258,G__68259,G__68260,seq68256__$4);
}));

sci.impl.protocols.extend_protocol = (function sci$impl$protocols$extend_protocol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___68803 = arguments.length;
var i__4737__auto___68804 = (0);
while(true){
if((i__4737__auto___68804 < len__4736__auto___68803)){
args__4742__auto__.push((arguments[i__4737__auto___68804]));

var G__68805 = (i__4737__auto___68804 + (1));
i__4737__auto___68804 = G__68805;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,protocol_name,impls){
var impls__$1 = sci.impl.utils.split_when((function (p1__68393_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__68393_SHARP_)));
}),impls);
var protocol_var = (function (){var fexpr__68424 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__68424.cljs$core$IFn$_invoke$arity$2 ? fexpr__68424.cljs$core$IFn$_invoke$arity$2(ctx,protocol_name) : fexpr__68424.call(null,ctx,protocol_name));
})();
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(protocol_var));
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var fq_meth_name = (function (p1__68396_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns,p1__68396_SHARP_);
});
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__68429){
var vec__68430 = p__68429;
var seq__68431 = cljs.core.seq(vec__68430);
var first__68432 = cljs.core.first(seq__68431);
var seq__68431__$1 = cljs.core.next(seq__68431);
var type = first__68432;
var meths = seq__68431__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (meth){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq_meth_name(cljs.core.name(cljs.core.first(meth))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,cljs.core.second(meth),null,(1),null)),cljs.core.nnext(meth)], 0))));
}),meths))));
}),impls__$1))));
return expansion;
}));

(sci.impl.protocols.extend_protocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_protocol.cljs$lang$applyTo = (function (seq68401){
var G__68402 = cljs.core.first(seq68401);
var seq68401__$1 = cljs.core.next(seq68401);
var G__68403 = cljs.core.first(seq68401__$1);
var seq68401__$2 = cljs.core.next(seq68401__$1);
var G__68404 = cljs.core.first(seq68401__$2);
var seq68401__$3 = cljs.core.next(seq68401__$2);
var G__68405 = cljs.core.first(seq68401__$3);
var seq68401__$4 = cljs.core.next(seq68401__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__68402,G__68403,G__68404,G__68405,seq68401__$4);
}));

sci.impl.protocols.extend = (function sci$impl$protocols$extend(var_args){
var args__4742__auto__ = [];
var len__4736__auto___68812 = arguments.length;
var i__4737__auto___68813 = (0);
while(true){
if((i__4737__auto___68813 < len__4736__auto___68812)){
args__4742__auto__.push((arguments[i__4737__auto___68813]));

var G__68814 = (i__4737__auto___68813 + (1));
i__4737__auto___68813 = G__68814;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,atype,proto_PLUS_mmaps){
var seq__68460 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),proto_PLUS_mmaps));
var chunk__68462 = null;
var count__68463 = (0);
var i__68464 = (0);
while(true){
if((i__68464 < count__68463)){
var vec__68598 = chunk__68462.cljs$core$IIndexed$_nth$arity$2(null,i__68464);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68598,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68598,(1),null);
var proto_ns_68815 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_68816 = sci.impl.vars.getName(proto_ns_68815);
var seq__68601_68817 = cljs.core.seq(mmap);
var chunk__68602_68818 = null;
var count__68603_68819 = (0);
var i__68604_68820 = (0);
while(true){
if((i__68604_68820 < count__68603_68819)){
var vec__68632_68823 = chunk__68602_68818.cljs$core$IIndexed$_nth$arity$2(null,i__68604_68820);
var fn_name_68824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68632_68823,(0),null);
var f_68825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68632_68823,(1),null);
var fn_sym_68829 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_68824));
var env_68830 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_68831 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_68830,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_68816,fn_sym_68829], null));
var multi_method_68832 = cljs.core.deref(multi_method_var_68831);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_68832,atype,f_68825);


var G__68834 = seq__68601_68817;
var G__68835 = chunk__68602_68818;
var G__68836 = count__68603_68819;
var G__68837 = (i__68604_68820 + (1));
seq__68601_68817 = G__68834;
chunk__68602_68818 = G__68835;
count__68603_68819 = G__68836;
i__68604_68820 = G__68837;
continue;
} else {
var temp__5753__auto___68838 = cljs.core.seq(seq__68601_68817);
if(temp__5753__auto___68838){
var seq__68601_68839__$1 = temp__5753__auto___68838;
if(cljs.core.chunked_seq_QMARK_(seq__68601_68839__$1)){
var c__4556__auto___68840 = cljs.core.chunk_first(seq__68601_68839__$1);
var G__68841 = cljs.core.chunk_rest(seq__68601_68839__$1);
var G__68842 = c__4556__auto___68840;
var G__68843 = cljs.core.count(c__4556__auto___68840);
var G__68844 = (0);
seq__68601_68817 = G__68841;
chunk__68602_68818 = G__68842;
count__68603_68819 = G__68843;
i__68604_68820 = G__68844;
continue;
} else {
var vec__68642_68845 = cljs.core.first(seq__68601_68839__$1);
var fn_name_68846 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68642_68845,(0),null);
var f_68847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68642_68845,(1),null);
var fn_sym_68848 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_68846));
var env_68849 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_68850 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_68849,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_68816,fn_sym_68848], null));
var multi_method_68851 = cljs.core.deref(multi_method_var_68850);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_68851,atype,f_68847);


var G__68853 = cljs.core.next(seq__68601_68839__$1);
var G__68854 = null;
var G__68855 = (0);
var G__68856 = (0);
seq__68601_68817 = G__68853;
chunk__68602_68818 = G__68854;
count__68603_68819 = G__68855;
i__68604_68820 = G__68856;
continue;
}
} else {
}
}
break;
}


var G__68858 = seq__68460;
var G__68859 = chunk__68462;
var G__68860 = count__68463;
var G__68861 = (i__68464 + (1));
seq__68460 = G__68858;
chunk__68462 = G__68859;
count__68463 = G__68860;
i__68464 = G__68861;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__68460);
if(temp__5753__auto__){
var seq__68460__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68460__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__68460__$1);
var G__68863 = cljs.core.chunk_rest(seq__68460__$1);
var G__68864 = c__4556__auto__;
var G__68865 = cljs.core.count(c__4556__auto__);
var G__68866 = (0);
seq__68460 = G__68863;
chunk__68462 = G__68864;
count__68463 = G__68865;
i__68464 = G__68866;
continue;
} else {
var vec__68653 = cljs.core.first(seq__68460__$1);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68653,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68653,(1),null);
var proto_ns_68867 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_68868 = sci.impl.vars.getName(proto_ns_68867);
var seq__68660_68869 = cljs.core.seq(mmap);
var chunk__68661_68870 = null;
var count__68662_68871 = (0);
var i__68663_68872 = (0);
while(true){
if((i__68663_68872 < count__68662_68871)){
var vec__68682_68873 = chunk__68661_68870.cljs$core$IIndexed$_nth$arity$2(null,i__68663_68872);
var fn_name_68874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68682_68873,(0),null);
var f_68875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68682_68873,(1),null);
var fn_sym_68876 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_68874));
var env_68877 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_68878 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_68877,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_68868,fn_sym_68876], null));
var multi_method_68879 = cljs.core.deref(multi_method_var_68878);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_68879,atype,f_68875);


var G__68880 = seq__68660_68869;
var G__68881 = chunk__68661_68870;
var G__68882 = count__68662_68871;
var G__68883 = (i__68663_68872 + (1));
seq__68660_68869 = G__68880;
chunk__68661_68870 = G__68881;
count__68662_68871 = G__68882;
i__68663_68872 = G__68883;
continue;
} else {
var temp__5753__auto___68885__$1 = cljs.core.seq(seq__68660_68869);
if(temp__5753__auto___68885__$1){
var seq__68660_68887__$1 = temp__5753__auto___68885__$1;
if(cljs.core.chunked_seq_QMARK_(seq__68660_68887__$1)){
var c__4556__auto___68888 = cljs.core.chunk_first(seq__68660_68887__$1);
var G__68889 = cljs.core.chunk_rest(seq__68660_68887__$1);
var G__68890 = c__4556__auto___68888;
var G__68891 = cljs.core.count(c__4556__auto___68888);
var G__68892 = (0);
seq__68660_68869 = G__68889;
chunk__68661_68870 = G__68890;
count__68662_68871 = G__68891;
i__68663_68872 = G__68892;
continue;
} else {
var vec__68700_68894 = cljs.core.first(seq__68660_68887__$1);
var fn_name_68895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68700_68894,(0),null);
var f_68896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68700_68894,(1),null);
var fn_sym_68897 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_68895));
var env_68898 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_68899 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_68898,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_68868,fn_sym_68897], null));
var multi_method_68900 = cljs.core.deref(multi_method_var_68899);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_68900,atype,f_68896);


var G__68901 = cljs.core.next(seq__68660_68887__$1);
var G__68902 = null;
var G__68903 = (0);
var G__68904 = (0);
seq__68660_68869 = G__68901;
chunk__68661_68870 = G__68902;
count__68662_68871 = G__68903;
i__68663_68872 = G__68904;
continue;
}
} else {
}
}
break;
}


var G__68905 = cljs.core.next(seq__68460__$1);
var G__68906 = null;
var G__68907 = (0);
var G__68908 = (0);
seq__68460 = G__68905;
chunk__68462 = G__68906;
count__68463 = G__68907;
i__68464 = G__68908;
continue;
}
} else {
return null;
}
}
break;
}
}));

(sci.impl.protocols.extend.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.protocols.extend.cljs$lang$applyTo = (function (seq68449){
var G__68450 = cljs.core.first(seq68449);
var seq68449__$1 = cljs.core.next(seq68449);
var G__68451 = cljs.core.first(seq68449__$1);
var seq68449__$2 = cljs.core.next(seq68449__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__68450,G__68451,seq68449__$2);
}));

sci.impl.protocols.extend_type = (function sci$impl$protocols$extend_type(var_args){
var args__4742__auto__ = [];
var len__4736__auto___68911 = arguments.length;
var i__4737__auto___68912 = (0);
while(true){
if((i__4737__auto___68912 < len__4736__auto___68911)){
args__4742__auto__.push((arguments[i__4737__auto___68912]));

var G__68914 = (i__4737__auto___68912 + (1));
i__4737__auto___68912 = G__68914;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,atype,proto_PLUS_meths){
var proto_PLUS_meths__$1 = sci.impl.utils.split_when((function (p1__68719_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__68719_SHARP_)));
}),proto_PLUS_meths);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__68727){
var vec__68728 = p__68727;
var seq__68729 = cljs.core.seq(vec__68728);
var first__68730 = cljs.core.first(seq__68729);
var seq__68729__$1 = cljs.core.next(seq__68729);
var proto = first__68730;
var meths = seq__68729__$1;
var protocol_var = (function (){var fexpr__68731 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__68731.cljs$core$IFn$_invoke$arity$2 ? fexpr__68731.cljs$core$IFn$_invoke$arity$2(ctx,proto) : fexpr__68731.call(null,ctx,proto));
})();
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(protocol_var));
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var fq_meth_name = (function (p1__68720_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns,p1__68720_SHARP_);
});
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (meth){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq_meth_name(cljs.core.name(cljs.core.first(meth))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,atype,null,(1),null)),(new cljs.core.List(null,cljs.core.second(meth),null,(1),null)),cljs.core.nnext(meth)], 0))));
}),meths))));
}),proto_PLUS_meths__$1))));
}));

(sci.impl.protocols.extend_type.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_type.cljs$lang$applyTo = (function (seq68721){
var G__68722 = cljs.core.first(seq68721);
var seq68721__$1 = cljs.core.next(seq68721);
var G__68723 = cljs.core.first(seq68721__$1);
var seq68721__$2 = cljs.core.next(seq68721__$1);
var G__68724 = cljs.core.first(seq68721__$2);
var seq68721__$3 = cljs.core.next(seq68721__$2);
var G__68725 = cljs.core.first(seq68721__$3);
var seq68721__$4 = cljs.core.next(seq68721__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__68722,G__68723,G__68724,G__68725,seq68721__$4);
}));

sci.impl.protocols.find_matching_non_default_method = (function sci$impl$protocols$find_matching_non_default_method(protocol,obj){
return cljs.core.boolean$(cljs.core.some((function (p1__68737_SHARP_){
var temp__5753__auto__ = cljs.core.get_method(p1__68737_SHARP_,sci.impl.types.type_impl(obj));
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
var ms = cljs.core.methods$(p1__68737_SHARP_);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.Keyword(null,"default","default",-1987822328));
return (!((m === default$)));
} else {
return null;
}
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});
sci.impl.protocols.satisfies_QMARK_ = (function sci$impl$protocols$satisfies_QMARK_(protocol,obj){
if((((!((obj == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj.sci$impl$types$IReified$))))?true:(((!obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(sci.impl.types.IReified,obj):false)):cljs.core.native_satisfies_QMARK_(sci.impl.types.IReified,obj))){
var temp__5753__auto__ = sci.impl.types.getInterface(obj);
if(cljs.core.truth_(temp__5753__auto__)){
var obj_type = temp__5753__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,obj_type);
} else {
return null;
}
} else {
var p = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(protocol);
var or__4126__auto__ = (function (){var and__4115__auto__ = p;
if(cljs.core.truth_(and__4115__auto__)){
var pred__68748 = cljs.core._EQ_;
var expr__68749 = p;
if(cljs.core.truth_((pred__68748.cljs$core$IFn$_invoke$arity$2 ? pred__68748.cljs$core$IFn$_invoke$arity$2(cljs.core.IDeref,expr__68749) : pred__68748.call(null,cljs.core.IDeref,expr__68749)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj);
}
} else {
if(cljs.core.truth_((pred__68748.cljs$core$IFn$_invoke$arity$2 ? pred__68748.cljs$core$IFn$_invoke$arity$2(cljs.core.ISwap,expr__68749) : pred__68748.call(null,cljs.core.ISwap,expr__68749)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition1$ & (65536))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$ISwap$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISwap,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISwap,obj);
}
} else {
if(cljs.core.truth_((pred__68748.cljs$core$IFn$_invoke$arity$2 ? pred__68748.cljs$core$IFn$_invoke$arity$2(cljs.core.IReset,expr__68749) : pred__68748.call(null,cljs.core.IReset,expr__68749)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition1$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IReset$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IReset,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IReset,obj);
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__68749)].join('')));
}
}
}
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return sci.impl.protocols.find_matching_non_default_method(protocol,obj);
}
}
});
sci.impl.protocols.instance_impl = (function sci$impl$protocols$instance_impl(clazz,x){
if(cljs.core.truth_((((clazz instanceof cljs.core.Symbol))?(function (){var G__68760 = clazz;
var G__68760__$1 = (((G__68760 == null))?null:cljs.core.meta(G__68760));
if((G__68760__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","record","sci.impl/record",-1939193950).cljs$core$IFn$_invoke$arity$1(G__68760__$1);
}
})():false))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clazz,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x)));
} else {
return (x instanceof clazz);

}
});
/**
 * Returns true if atype extends protocol
 */
sci.impl.protocols.extends_QMARK_ = (function sci$impl$protocols$extends_QMARK_(protocol,atype){
return cljs.core.boolean$(cljs.core.some((function (p1__68761_SHARP_){
return cljs.core.get_method(p1__68761_SHARP_,atype);
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});

//# sourceMappingURL=sci.impl.protocols.js.map
