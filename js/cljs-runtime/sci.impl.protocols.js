goog.provide('sci.impl.protocols');
sci.impl.protocols.defprotocol = (function sci$impl$protocols$defprotocol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___77990 = arguments.length;
var i__4737__auto___77995 = (0);
while(true){
if((i__4737__auto___77995 < len__4736__auto___77990)){
args__4742__auto__.push((arguments[i__4737__auto___77995]));

var G__77996 = (i__4737__auto___77995 + (1));
i__4737__auto___77995 = G__77996;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,_ctx,protocol_name,signatures){
var vec__77682 = (function (){var sig = cljs.core.first(signatures);
if(typeof sig === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig,cljs.core.rest(signatures)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77682,(0),null);
var signatures__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77682,(1),null);
var vec__77685 = (function (){var opt = cljs.core.first(signatures__$1);
if((opt instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([opt,cljs.core.second(signatures__$1)]),cljs.core.nnext(signatures__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures__$1], null);
}
})();
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77685,(0),null);
var signatures__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77685,(1),null);
var current_ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.current_ns_name());
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(protocol_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),docstring], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"ns","ns",441598760),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*ns*","cljs.core/*ns*",1155497085,null),null,(1),null))], 0))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__77692){
var vec__77693 = p__77692;
var seq__77694 = cljs.core.seq(vec__77693);
var first__77695 = cljs.core.first(seq__77694);
var seq__77694__$1 = cljs.core.next(seq__77694);
var method_name = first__77695;
var ___$2 = seq__77694__$1;
var fq_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name));
var impls = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmulti","cljs.core/defmulti",723984225,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__77667__auto__","x__77667__auto__",-720465534,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__77668__auto__","args__77668__auto__",415823509,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"methods__77669__auto__","methods__77669__auto__",1313599058,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-reified-methods","cljs.core/-reified-methods",-1833109469,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__77667__auto__","x__77667__auto__",-720465534,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"methods__77669__auto__","methods__77669__auto__",1313599058,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__77667__auto__","x__77667__auto__",-720465534,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__77668__auto__","args__77668__auto__",415823509,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
var impls__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(impls,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__77670__auto__","x__77670__auto__",-1981415532,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__77671__auto__","args__77671__auto__",1514015154,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"meta__77672__auto__","meta__77672__auto__",207752261,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__77670__auto__","x__77670__auto__",-1981415532,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"method__77673__auto__","method__77673__auto__",665787796,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meta__77672__auto__","meta__77672__auto__",207752261,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__77673__auto__","method__77673__auto__",665787796,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__77673__auto__","method__77673__auto__",665787796,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__77670__auto__","x__77670__auto__",-1981415532,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__77671__auto__","args__77671__auto__",1514015154,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No implementation of method: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_name),null,(1),null)),(new cljs.core.List(null," of protocol: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," found for: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__77670__auto__","x__77670__auto__",-1981415532,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))):impls);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),impls__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","update","cljs.core/update",-908565906,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),signatures__$2)], 0))));
return expansion;
}));

(sci.impl.protocols.defprotocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.defprotocol.cljs$lang$applyTo = (function (seq77675){
var G__77676 = cljs.core.first(seq77675);
var seq77675__$1 = cljs.core.next(seq77675);
var G__77677 = cljs.core.first(seq77675__$1);
var seq77675__$2 = cljs.core.next(seq77675__$1);
var G__77678 = cljs.core.first(seq77675__$2);
var seq77675__$3 = cljs.core.next(seq77675__$2);
var G__77679 = cljs.core.first(seq77675__$3);
var seq77675__$4 = cljs.core.next(seq77675__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77676,G__77677,G__77678,G__77679,seq77675__$4);
}));

sci.impl.protocols.extend_protocol = (function sci$impl$protocols$extend_protocol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___78089 = arguments.length;
var i__4737__auto___78090 = (0);
while(true){
if((i__4737__auto___78090 < len__4736__auto___78089)){
args__4742__auto__.push((arguments[i__4737__auto___78090]));

var G__78091 = (i__4737__auto___78090 + (1));
i__4737__auto___78090 = G__78091;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,protocol_name,impls){
var impls__$1 = sci.impl.utils.split_when((function (p1__77720_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__77720_SHARP_)));
}),impls);
var protocol_var = (function (){var fexpr__77730 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__77730.cljs$core$IFn$_invoke$arity$2 ? fexpr__77730.cljs$core$IFn$_invoke$arity$2(ctx,protocol_name) : fexpr__77730.call(null,ctx,protocol_name));
})();
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(protocol_var));
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var fq_meth_name = (function (p1__77721_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns,p1__77721_SHARP_);
});
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__77732){
var vec__77733 = p__77732;
var seq__77734 = cljs.core.seq(vec__77733);
var first__77735 = cljs.core.first(seq__77734);
var seq__77734__$1 = cljs.core.next(seq__77734);
var type = first__77735;
var meths = seq__77734__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (meth){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq_meth_name(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(meth))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,cljs.core.second(meth),null,(1),null)),cljs.core.nnext(meth)], 0))));
}),meths))));
}),impls__$1))));
return expansion;
}));

(sci.impl.protocols.extend_protocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_protocol.cljs$lang$applyTo = (function (seq77722){
var G__77723 = cljs.core.first(seq77722);
var seq77722__$1 = cljs.core.next(seq77722);
var G__77724 = cljs.core.first(seq77722__$1);
var seq77722__$2 = cljs.core.next(seq77722__$1);
var G__77725 = cljs.core.first(seq77722__$2);
var seq77722__$3 = cljs.core.next(seq77722__$2);
var G__77726 = cljs.core.first(seq77722__$3);
var seq77722__$4 = cljs.core.next(seq77722__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77723,G__77724,G__77725,G__77726,seq77722__$4);
}));

sci.impl.protocols.extend = (function sci$impl$protocols$extend(var_args){
var args__4742__auto__ = [];
var len__4736__auto___78141 = arguments.length;
var i__4737__auto___78143 = (0);
while(true){
if((i__4737__auto___78143 < len__4736__auto___78141)){
args__4742__auto__.push((arguments[i__4737__auto___78143]));

var G__78149 = (i__4737__auto___78143 + (1));
i__4737__auto___78143 = G__78149;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,atype,proto_PLUS_mmaps){
var seq__77750 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),proto_PLUS_mmaps));
var chunk__77752 = null;
var count__77753 = (0);
var i__77754 = (0);
while(true){
if((i__77754 < count__77753)){
var vec__77820 = chunk__77752.cljs$core$IIndexed$_nth$arity$2(null,i__77754);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77820,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77820,(1),null);
var proto_ns_78168 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_78169 = sci.impl.vars.getName(proto_ns_78168);
var seq__77824_78179 = cljs.core.seq(mmap);
var chunk__77825_78180 = null;
var count__77826_78181 = (0);
var i__77827_78184 = (0);
while(true){
if((i__77827_78184 < count__77826_78181)){
var vec__77845_78186 = chunk__77825_78180.cljs$core$IIndexed$_nth$arity$2(null,i__77827_78184);
var fn_name_78187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77845_78186,(0),null);
var f_78188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77845_78186,(1),null);
var fn_sym_78192 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_78187));
var env_78193 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_78194 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_78193,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_78169,fn_sym_78192], null));
var multi_method_78195 = cljs.core.deref(multi_method_var_78194);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_78195,atype,f_78188);


var G__78205 = seq__77824_78179;
var G__78206 = chunk__77825_78180;
var G__78207 = count__77826_78181;
var G__78208 = (i__77827_78184 + (1));
seq__77824_78179 = G__78205;
chunk__77825_78180 = G__78206;
count__77826_78181 = G__78207;
i__77827_78184 = G__78208;
continue;
} else {
var temp__5753__auto___78210 = cljs.core.seq(seq__77824_78179);
if(temp__5753__auto___78210){
var seq__77824_78211__$1 = temp__5753__auto___78210;
if(cljs.core.chunked_seq_QMARK_(seq__77824_78211__$1)){
var c__4556__auto___78213 = cljs.core.chunk_first(seq__77824_78211__$1);
var G__78214 = cljs.core.chunk_rest(seq__77824_78211__$1);
var G__78215 = c__4556__auto___78213;
var G__78216 = cljs.core.count(c__4556__auto___78213);
var G__78217 = (0);
seq__77824_78179 = G__78214;
chunk__77825_78180 = G__78215;
count__77826_78181 = G__78216;
i__77827_78184 = G__78217;
continue;
} else {
var vec__77852_78223 = cljs.core.first(seq__77824_78211__$1);
var fn_name_78224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77852_78223,(0),null);
var f_78225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77852_78223,(1),null);
var fn_sym_78236 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_78224));
var env_78237 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_78238 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_78237,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_78169,fn_sym_78236], null));
var multi_method_78239 = cljs.core.deref(multi_method_var_78238);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_78239,atype,f_78225);


var G__78253 = cljs.core.next(seq__77824_78211__$1);
var G__78254 = null;
var G__78255 = (0);
var G__78256 = (0);
seq__77824_78179 = G__78253;
chunk__77825_78180 = G__78254;
count__77826_78181 = G__78255;
i__77827_78184 = G__78256;
continue;
}
} else {
}
}
break;
}


var G__78259 = seq__77750;
var G__78260 = chunk__77752;
var G__78261 = count__77753;
var G__78262 = (i__77754 + (1));
seq__77750 = G__78259;
chunk__77752 = G__78260;
count__77753 = G__78261;
i__77754 = G__78262;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__77750);
if(temp__5753__auto__){
var seq__77750__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__77750__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__77750__$1);
var G__78263 = cljs.core.chunk_rest(seq__77750__$1);
var G__78264 = c__4556__auto__;
var G__78265 = cljs.core.count(c__4556__auto__);
var G__78266 = (0);
seq__77750 = G__78263;
chunk__77752 = G__78264;
count__77753 = G__78265;
i__77754 = G__78266;
continue;
} else {
var vec__77870 = cljs.core.first(seq__77750__$1);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77870,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77870,(1),null);
var proto_ns_78274 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_78275 = sci.impl.vars.getName(proto_ns_78274);
var seq__77874_78281 = cljs.core.seq(mmap);
var chunk__77875_78282 = null;
var count__77876_78283 = (0);
var i__77877_78284 = (0);
while(true){
if((i__77877_78284 < count__77876_78283)){
var vec__77892_78288 = chunk__77875_78282.cljs$core$IIndexed$_nth$arity$2(null,i__77877_78284);
var fn_name_78289 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77892_78288,(0),null);
var f_78290 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77892_78288,(1),null);
var fn_sym_78291 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_78289));
var env_78292 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_78293 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_78292,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_78275,fn_sym_78291], null));
var multi_method_78294 = cljs.core.deref(multi_method_var_78293);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_78294,atype,f_78290);


var G__78305 = seq__77874_78281;
var G__78306 = chunk__77875_78282;
var G__78307 = count__77876_78283;
var G__78308 = (i__77877_78284 + (1));
seq__77874_78281 = G__78305;
chunk__77875_78282 = G__78306;
count__77876_78283 = G__78307;
i__77877_78284 = G__78308;
continue;
} else {
var temp__5753__auto___78309__$1 = cljs.core.seq(seq__77874_78281);
if(temp__5753__auto___78309__$1){
var seq__77874_78315__$1 = temp__5753__auto___78309__$1;
if(cljs.core.chunked_seq_QMARK_(seq__77874_78315__$1)){
var c__4556__auto___78316 = cljs.core.chunk_first(seq__77874_78315__$1);
var G__78321 = cljs.core.chunk_rest(seq__77874_78315__$1);
var G__78322 = c__4556__auto___78316;
var G__78323 = cljs.core.count(c__4556__auto___78316);
var G__78324 = (0);
seq__77874_78281 = G__78321;
chunk__77875_78282 = G__78322;
count__77876_78283 = G__78323;
i__77877_78284 = G__78324;
continue;
} else {
var vec__77899_78327 = cljs.core.first(seq__77874_78315__$1);
var fn_name_78328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77899_78327,(0),null);
var f_78329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77899_78327,(1),null);
var fn_sym_78330 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_78328));
var env_78331 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_78332 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_78331,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_78275,fn_sym_78330], null));
var multi_method_78333 = cljs.core.deref(multi_method_var_78332);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_78333,atype,f_78329);


var G__78339 = cljs.core.next(seq__77874_78315__$1);
var G__78340 = null;
var G__78341 = (0);
var G__78342 = (0);
seq__77874_78281 = G__78339;
chunk__77875_78282 = G__78340;
count__77876_78283 = G__78341;
i__77877_78284 = G__78342;
continue;
}
} else {
}
}
break;
}


var G__78347 = cljs.core.next(seq__77750__$1);
var G__78348 = null;
var G__78349 = (0);
var G__78350 = (0);
seq__77750 = G__78347;
chunk__77752 = G__78348;
count__77753 = G__78349;
i__77754 = G__78350;
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
(sci.impl.protocols.extend.cljs$lang$applyTo = (function (seq77739){
var G__77740 = cljs.core.first(seq77739);
var seq77739__$1 = cljs.core.next(seq77739);
var G__77741 = cljs.core.first(seq77739__$1);
var seq77739__$2 = cljs.core.next(seq77739__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77740,G__77741,seq77739__$2);
}));

sci.impl.protocols.extend_type = (function sci$impl$protocols$extend_type(var_args){
var args__4742__auto__ = [];
var len__4736__auto___78356 = arguments.length;
var i__4737__auto___78357 = (0);
while(true){
if((i__4737__auto___78357 < len__4736__auto___78356)){
args__4742__auto__.push((arguments[i__4737__auto___78357]));

var G__78358 = (i__4737__auto___78357 + (1));
i__4737__auto___78357 = G__78358;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,type,proto_PLUS_meths){
var proto_PLUS_meths__$1 = sci.impl.utils.split_when((function (p1__77904_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__77904_SHARP_)));
}),proto_PLUS_meths);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__77923){
var vec__77924 = p__77923;
var seq__77925 = cljs.core.seq(vec__77924);
var first__77926 = cljs.core.first(seq__77925);
var seq__77925__$1 = cljs.core.next(seq__77925);
var proto = first__77926;
var meths = seq__77925__$1;
var protocol_var = (function (){var fexpr__77931 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__77931.cljs$core$IFn$_invoke$arity$2 ? fexpr__77931.cljs$core$IFn$_invoke$arity$2(ctx,proto) : fexpr__77931.call(null,ctx,proto));
})();
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(protocol_var));
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var fq_meth_name = (function (p1__77905_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns,p1__77905_SHARP_);
});
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (meth){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq_meth_name(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(meth))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,cljs.core.second(meth),null,(1),null)),cljs.core.nnext(meth)], 0))));
}),meths))));
}),proto_PLUS_meths__$1))));
}));

(sci.impl.protocols.extend_type.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_type.cljs$lang$applyTo = (function (seq77907){
var G__77908 = cljs.core.first(seq77907);
var seq77907__$1 = cljs.core.next(seq77907);
var G__77909 = cljs.core.first(seq77907__$1);
var seq77907__$2 = cljs.core.next(seq77907__$1);
var G__77910 = cljs.core.first(seq77907__$2);
var seq77907__$3 = cljs.core.next(seq77907__$2);
var G__77911 = cljs.core.first(seq77907__$3);
var seq77907__$4 = cljs.core.next(seq77907__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77908,G__77909,G__77910,G__77911,seq77907__$4);
}));

sci.impl.protocols.reify = (function sci$impl$protocols$reify(var_args){
var args__4742__auto__ = [];
var len__4736__auto___78392 = arguments.length;
var i__4737__auto___78394 = (0);
while(true){
if((i__4737__auto___78394 < len__4736__auto___78392)){
args__4742__auto__.push((arguments[i__4737__auto___78394]));

var G__78395 = (i__4737__auto___78394 + (1));
i__4737__auto___78394 = G__78395;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.reify.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,_ctx,interface$,meths){
var meths__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (meth){
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first(meth),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.second(meth),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.nnext(meth)], 0)))),null,(1),null))))));
}),meths));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-reified","cljs.core/-reified",-1831583173,null),null,(1),null)),(new cljs.core.List(null,interface$,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,meths__$1,null,(1),null))], 0))));
}));

(sci.impl.protocols.reify.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.reify.cljs$lang$applyTo = (function (seq77946){
var G__77947 = cljs.core.first(seq77946);
var seq77946__$1 = cljs.core.next(seq77946);
var G__77948 = cljs.core.first(seq77946__$1);
var seq77946__$2 = cljs.core.next(seq77946__$1);
var G__77949 = cljs.core.first(seq77946__$2);
var seq77946__$3 = cljs.core.next(seq77946__$2);
var G__77950 = cljs.core.first(seq77946__$3);
var seq77946__$4 = cljs.core.next(seq77946__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77947,G__77948,G__77949,G__77950,seq77946__$4);
}));

sci.impl.protocols.satisfies_QMARK_ = (function sci$impl$protocols$satisfies_QMARK_(protocol,obj){
return cljs.core.boolean$(cljs.core.some((function (p1__77979_SHARP_){
return cljs.core.get_method(p1__77979_SHARP_,sci.impl.types.type_impl(obj));
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});
/**
 * Returns true if atype extends protocol
 */
sci.impl.protocols.extends_QMARK_ = (function sci$impl$protocols$extends_QMARK_(protocol,atype){
return cljs.core.boolean$(cljs.core.some((function (p1__77986_SHARP_){
return cljs.core.get_method(p1__77986_SHARP_,atype);
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});

//# sourceMappingURL=sci.impl.protocols.js.map
