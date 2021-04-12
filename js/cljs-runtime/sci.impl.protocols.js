goog.provide('sci.impl.protocols');
sci.impl.protocols.defprotocol = (function sci$impl$protocols$defprotocol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___75963 = arguments.length;
var i__4737__auto___75964 = (0);
while(true){
if((i__4737__auto___75964 < len__4736__auto___75963)){
args__4742__auto__.push((arguments[i__4737__auto___75964]));

var G__75968 = (i__4737__auto___75964 + (1));
i__4737__auto___75964 = G__75968;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,_ctx,protocol_name,signatures){
var vec__75703 = (function (){var sig = cljs.core.first(signatures);
if(typeof sig === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig,cljs.core.rest(signatures)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75703,(0),null);
var signatures__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75703,(1),null);
var vec__75706 = (function (){var opt = cljs.core.first(signatures__$1);
if((opt instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([opt,cljs.core.second(signatures__$1)]),cljs.core.nnext(signatures__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures__$1], null);
}
})();
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75706,(0),null);
var signatures__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75706,(1),null);
var current_ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.current_ns_name());
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(protocol_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),docstring], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"ns","ns",441598760),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*ns*","cljs.core/*ns*",1155497085,null),null,(1),null))], 0))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__75711){
var vec__75712 = p__75711;
var seq__75713 = cljs.core.seq(vec__75712);
var first__75714 = cljs.core.first(seq__75713);
var seq__75713__$1 = cljs.core.next(seq__75713);
var method_name = first__75714;
var ___$2 = seq__75713__$1;
var fq_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name));
var impls = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmulti","cljs.core/defmulti",723984225,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__75687__auto__","x__75687__auto__",310370091,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__75688__auto__","args__75688__auto__",-860477116,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"methods__75689__auto__","methods__75689__auto__",2144662101,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-reified-methods","cljs.core/-reified-methods",-1833109469,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__75687__auto__","x__75687__auto__",310370091,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"methods__75689__auto__","methods__75689__auto__",2144662101,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__75687__auto__","x__75687__auto__",310370091,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__75688__auto__","args__75688__auto__",-860477116,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
var impls__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(impls,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__75690__auto__","x__75690__auto__",563066466,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__75691__auto__","args__75691__auto__",1270088050,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"meta__75694__auto__","meta__75694__auto__",1873299480,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__75690__auto__","x__75690__auto__",563066466,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"method__75695__auto__","method__75695__auto__",-157116411,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meta__75694__auto__","meta__75694__auto__",1873299480,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__75695__auto__","method__75695__auto__",-157116411,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__75695__auto__","method__75695__auto__",-157116411,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__75690__auto__","x__75690__auto__",563066466,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__75691__auto__","args__75691__auto__",1270088050,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No implementation of method: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_name),null,(1),null)),(new cljs.core.List(null," of protocol: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," found for: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__75690__auto__","x__75690__auto__",563066466,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))):impls);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),impls__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","update","cljs.core/update",-908565906,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),signatures__$2)], 0))));
return expansion;
}));

(sci.impl.protocols.defprotocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.defprotocol.cljs$lang$applyTo = (function (seq75698){
var G__75699 = cljs.core.first(seq75698);
var seq75698__$1 = cljs.core.next(seq75698);
var G__75700 = cljs.core.first(seq75698__$1);
var seq75698__$2 = cljs.core.next(seq75698__$1);
var G__75701 = cljs.core.first(seq75698__$2);
var seq75698__$3 = cljs.core.next(seq75698__$2);
var G__75702 = cljs.core.first(seq75698__$3);
var seq75698__$4 = cljs.core.next(seq75698__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__75699,G__75700,G__75701,G__75702,seq75698__$4);
}));

sci.impl.protocols.extend_protocol = (function sci$impl$protocols$extend_protocol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___76042 = arguments.length;
var i__4737__auto___76044 = (0);
while(true){
if((i__4737__auto___76044 < len__4736__auto___76042)){
args__4742__auto__.push((arguments[i__4737__auto___76044]));

var G__76045 = (i__4737__auto___76044 + (1));
i__4737__auto___76044 = G__76045;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,protocol_name,impls){
var impls__$1 = sci.impl.utils.split_when((function (p1__75771_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__75771_SHARP_)));
}),impls);
var protocol_var = (function (){var fexpr__75783 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__75783.cljs$core$IFn$_invoke$arity$2 ? fexpr__75783.cljs$core$IFn$_invoke$arity$2(ctx,protocol_name) : fexpr__75783.call(null,ctx,protocol_name));
})();
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(protocol_var));
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var fq_meth_name = (function (p1__75773_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns,p1__75773_SHARP_);
});
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__75785){
var vec__75786 = p__75785;
var seq__75787 = cljs.core.seq(vec__75786);
var first__75788 = cljs.core.first(seq__75787);
var seq__75787__$1 = cljs.core.next(seq__75787);
var type = first__75788;
var meths = seq__75787__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (meth){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq_meth_name(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(meth))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,cljs.core.second(meth),null,(1),null)),cljs.core.nnext(meth)], 0))));
}),meths))));
}),impls__$1))));
return expansion;
}));

(sci.impl.protocols.extend_protocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_protocol.cljs$lang$applyTo = (function (seq75775){
var G__75776 = cljs.core.first(seq75775);
var seq75775__$1 = cljs.core.next(seq75775);
var G__75777 = cljs.core.first(seq75775__$1);
var seq75775__$2 = cljs.core.next(seq75775__$1);
var G__75778 = cljs.core.first(seq75775__$2);
var seq75775__$3 = cljs.core.next(seq75775__$2);
var G__75779 = cljs.core.first(seq75775__$3);
var seq75775__$4 = cljs.core.next(seq75775__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__75776,G__75777,G__75778,G__75779,seq75775__$4);
}));

sci.impl.protocols.extend = (function sci$impl$protocols$extend(var_args){
var args__4742__auto__ = [];
var len__4736__auto___76074 = arguments.length;
var i__4737__auto___76075 = (0);
while(true){
if((i__4737__auto___76075 < len__4736__auto___76074)){
args__4742__auto__.push((arguments[i__4737__auto___76075]));

var G__76080 = (i__4737__auto___76075 + (1));
i__4737__auto___76075 = G__76080;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,atype,proto_PLUS_mmaps){
var seq__75801 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),proto_PLUS_mmaps));
var chunk__75803 = null;
var count__75804 = (0);
var i__75805 = (0);
while(true){
if((i__75805 < count__75804)){
var vec__75855 = chunk__75803.cljs$core$IIndexed$_nth$arity$2(null,i__75805);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75855,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75855,(1),null);
var proto_ns_76094 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_76095 = sci.impl.vars.getName(proto_ns_76094);
var seq__75858_76100 = cljs.core.seq(mmap);
var chunk__75859_76101 = null;
var count__75860_76102 = (0);
var i__75861_76103 = (0);
while(true){
if((i__75861_76103 < count__75860_76102)){
var vec__75872_76107 = chunk__75859_76101.cljs$core$IIndexed$_nth$arity$2(null,i__75861_76103);
var fn_name_76108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75872_76107,(0),null);
var f_76109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75872_76107,(1),null);
var fn_sym_76114 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_76108));
var env_76115 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_76116 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_76115,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_76095,fn_sym_76114], null));
var multi_method_76117 = cljs.core.deref(multi_method_var_76116);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_76117,atype,f_76109);


var G__76118 = seq__75858_76100;
var G__76119 = chunk__75859_76101;
var G__76120 = count__75860_76102;
var G__76121 = (i__75861_76103 + (1));
seq__75858_76100 = G__76118;
chunk__75859_76101 = G__76119;
count__75860_76102 = G__76120;
i__75861_76103 = G__76121;
continue;
} else {
var temp__5753__auto___76122 = cljs.core.seq(seq__75858_76100);
if(temp__5753__auto___76122){
var seq__75858_76123__$1 = temp__5753__auto___76122;
if(cljs.core.chunked_seq_QMARK_(seq__75858_76123__$1)){
var c__4556__auto___76124 = cljs.core.chunk_first(seq__75858_76123__$1);
var G__76125 = cljs.core.chunk_rest(seq__75858_76123__$1);
var G__76126 = c__4556__auto___76124;
var G__76127 = cljs.core.count(c__4556__auto___76124);
var G__76128 = (0);
seq__75858_76100 = G__76125;
chunk__75859_76101 = G__76126;
count__75860_76102 = G__76127;
i__75861_76103 = G__76128;
continue;
} else {
var vec__75881_76130 = cljs.core.first(seq__75858_76123__$1);
var fn_name_76131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75881_76130,(0),null);
var f_76132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75881_76130,(1),null);
var fn_sym_76133 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_76131));
var env_76134 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_76135 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_76134,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_76095,fn_sym_76133], null));
var multi_method_76136 = cljs.core.deref(multi_method_var_76135);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_76136,atype,f_76132);


var G__76137 = cljs.core.next(seq__75858_76123__$1);
var G__76138 = null;
var G__76139 = (0);
var G__76140 = (0);
seq__75858_76100 = G__76137;
chunk__75859_76101 = G__76138;
count__75860_76102 = G__76139;
i__75861_76103 = G__76140;
continue;
}
} else {
}
}
break;
}


var G__76141 = seq__75801;
var G__76142 = chunk__75803;
var G__76143 = count__75804;
var G__76144 = (i__75805 + (1));
seq__75801 = G__76141;
chunk__75803 = G__76142;
count__75804 = G__76143;
i__75805 = G__76144;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__75801);
if(temp__5753__auto__){
var seq__75801__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__75801__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__75801__$1);
var G__76146 = cljs.core.chunk_rest(seq__75801__$1);
var G__76147 = c__4556__auto__;
var G__76148 = cljs.core.count(c__4556__auto__);
var G__76149 = (0);
seq__75801 = G__76146;
chunk__75803 = G__76147;
count__75804 = G__76148;
i__75805 = G__76149;
continue;
} else {
var vec__75892 = cljs.core.first(seq__75801__$1);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75892,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75892,(1),null);
var proto_ns_76151 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_76152 = sci.impl.vars.getName(proto_ns_76151);
var seq__75897_76153 = cljs.core.seq(mmap);
var chunk__75898_76154 = null;
var count__75899_76155 = (0);
var i__75900_76156 = (0);
while(true){
if((i__75900_76156 < count__75899_76155)){
var vec__75911_76157 = chunk__75898_76154.cljs$core$IIndexed$_nth$arity$2(null,i__75900_76156);
var fn_name_76158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75911_76157,(0),null);
var f_76159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75911_76157,(1),null);
var fn_sym_76161 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_76158));
var env_76162 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_76163 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_76162,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_76152,fn_sym_76161], null));
var multi_method_76164 = cljs.core.deref(multi_method_var_76163);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_76164,atype,f_76159);


var G__76169 = seq__75897_76153;
var G__76170 = chunk__75898_76154;
var G__76171 = count__75899_76155;
var G__76172 = (i__75900_76156 + (1));
seq__75897_76153 = G__76169;
chunk__75898_76154 = G__76170;
count__75899_76155 = G__76171;
i__75900_76156 = G__76172;
continue;
} else {
var temp__5753__auto___76173__$1 = cljs.core.seq(seq__75897_76153);
if(temp__5753__auto___76173__$1){
var seq__75897_76174__$1 = temp__5753__auto___76173__$1;
if(cljs.core.chunked_seq_QMARK_(seq__75897_76174__$1)){
var c__4556__auto___76175 = cljs.core.chunk_first(seq__75897_76174__$1);
var G__76176 = cljs.core.chunk_rest(seq__75897_76174__$1);
var G__76177 = c__4556__auto___76175;
var G__76178 = cljs.core.count(c__4556__auto___76175);
var G__76179 = (0);
seq__75897_76153 = G__76176;
chunk__75898_76154 = G__76177;
count__75899_76155 = G__76178;
i__75900_76156 = G__76179;
continue;
} else {
var vec__75916_76182 = cljs.core.first(seq__75897_76174__$1);
var fn_name_76183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75916_76182,(0),null);
var f_76184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75916_76182,(1),null);
var fn_sym_76185 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_76183));
var env_76186 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_76187 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_76186,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_76152,fn_sym_76185], null));
var multi_method_76188 = cljs.core.deref(multi_method_var_76187);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_76188,atype,f_76184);


var G__76191 = cljs.core.next(seq__75897_76174__$1);
var G__76192 = null;
var G__76193 = (0);
var G__76194 = (0);
seq__75897_76153 = G__76191;
chunk__75898_76154 = G__76192;
count__75899_76155 = G__76193;
i__75900_76156 = G__76194;
continue;
}
} else {
}
}
break;
}


var G__76195 = cljs.core.next(seq__75801__$1);
var G__76196 = null;
var G__76197 = (0);
var G__76198 = (0);
seq__75801 = G__76195;
chunk__75803 = G__76196;
count__75804 = G__76197;
i__75805 = G__76198;
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
(sci.impl.protocols.extend.cljs$lang$applyTo = (function (seq75794){
var G__75795 = cljs.core.first(seq75794);
var seq75794__$1 = cljs.core.next(seq75794);
var G__75796 = cljs.core.first(seq75794__$1);
var seq75794__$2 = cljs.core.next(seq75794__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__75795,G__75796,seq75794__$2);
}));

sci.impl.protocols.extend_type = (function sci$impl$protocols$extend_type(var_args){
var args__4742__auto__ = [];
var len__4736__auto___76203 = arguments.length;
var i__4737__auto___76206 = (0);
while(true){
if((i__4737__auto___76206 < len__4736__auto___76203)){
args__4742__auto__.push((arguments[i__4737__auto___76206]));

var G__76207 = (i__4737__auto___76206 + (1));
i__4737__auto___76206 = G__76207;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,type,proto_PLUS_meths){
var proto_PLUS_meths__$1 = sci.impl.utils.split_when((function (p1__75920_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__75920_SHARP_)));
}),proto_PLUS_meths);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__75929){
var vec__75930 = p__75929;
var seq__75931 = cljs.core.seq(vec__75930);
var first__75932 = cljs.core.first(seq__75931);
var seq__75931__$1 = cljs.core.next(seq__75931);
var proto = first__75932;
var meths = seq__75931__$1;
var protocol_var = (function (){var fexpr__75933 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__75933.cljs$core$IFn$_invoke$arity$2 ? fexpr__75933.cljs$core$IFn$_invoke$arity$2(ctx,proto) : fexpr__75933.call(null,ctx,proto));
})();
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(protocol_var));
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var fq_meth_name = (function (p1__75921_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns,p1__75921_SHARP_);
});
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (meth){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq_meth_name(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(meth))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,cljs.core.second(meth),null,(1),null)),cljs.core.nnext(meth)], 0))));
}),meths))));
}),proto_PLUS_meths__$1))));
}));

(sci.impl.protocols.extend_type.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_type.cljs$lang$applyTo = (function (seq75922){
var G__75923 = cljs.core.first(seq75922);
var seq75922__$1 = cljs.core.next(seq75922);
var G__75924 = cljs.core.first(seq75922__$1);
var seq75922__$2 = cljs.core.next(seq75922__$1);
var G__75925 = cljs.core.first(seq75922__$2);
var seq75922__$3 = cljs.core.next(seq75922__$2);
var G__75926 = cljs.core.first(seq75922__$3);
var seq75922__$4 = cljs.core.next(seq75922__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__75923,G__75924,G__75925,G__75926,seq75922__$4);
}));

sci.impl.protocols.reify = (function sci$impl$protocols$reify(var_args){
var args__4742__auto__ = [];
var len__4736__auto___76229 = arguments.length;
var i__4737__auto___76230 = (0);
while(true){
if((i__4737__auto___76230 < len__4736__auto___76229)){
args__4742__auto__.push((arguments[i__4737__auto___76230]));

var G__76231 = (i__4737__auto___76230 + (1));
i__4737__auto___76230 = G__76231;
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
(sci.impl.protocols.reify.cljs$lang$applyTo = (function (seq75939){
var G__75940 = cljs.core.first(seq75939);
var seq75939__$1 = cljs.core.next(seq75939);
var G__75941 = cljs.core.first(seq75939__$1);
var seq75939__$2 = cljs.core.next(seq75939__$1);
var G__75942 = cljs.core.first(seq75939__$2);
var seq75939__$3 = cljs.core.next(seq75939__$2);
var G__75943 = cljs.core.first(seq75939__$3);
var seq75939__$4 = cljs.core.next(seq75939__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__75940,G__75941,G__75942,G__75943,seq75939__$4);
}));

sci.impl.protocols.satisfies_QMARK_ = (function sci$impl$protocols$satisfies_QMARK_(protocol,obj){
return cljs.core.boolean$(cljs.core.some((function (p1__75952_SHARP_){
return cljs.core.get_method(p1__75952_SHARP_,sci.impl.types.type_impl(obj));
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});
/**
 * Returns true if atype extends protocol
 */
sci.impl.protocols.extends_QMARK_ = (function sci$impl$protocols$extends_QMARK_(protocol,atype){
return cljs.core.boolean$(cljs.core.some((function (p1__75956_SHARP_){
return cljs.core.get_method(p1__75956_SHARP_,atype);
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});

//# sourceMappingURL=sci.impl.protocols.js.map
