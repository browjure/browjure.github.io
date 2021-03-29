goog.provide('sci.impl.protocols');
sci.impl.protocols.defprotocol = (function sci$impl$protocols$defprotocol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___65309 = arguments.length;
var i__4737__auto___65310 = (0);
while(true){
if((i__4737__auto___65310 < len__4736__auto___65309)){
args__4742__auto__.push((arguments[i__4737__auto___65310]));

var G__65311 = (i__4737__auto___65310 + (1));
i__4737__auto___65310 = G__65311;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,_ctx,protocol_name,signatures){
var vec__65094 = (function (){var sig = cljs.core.first(signatures);
if(typeof sig === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig,cljs.core.rest(signatures)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65094,(0),null);
var signatures__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65094,(1),null);
var vec__65097 = (function (){var opt = cljs.core.first(signatures__$1);
if((opt instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([opt,cljs.core.second(signatures__$1)]),cljs.core.nnext(signatures__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures__$1], null);
}
})();
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65097,(0),null);
var signatures__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65097,(1),null);
var current_ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.current_ns_name());
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(protocol_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),docstring], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"ns","ns",441598760),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*ns*","cljs.core/*ns*",1155497085,null),null,(1),null))], 0))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65103){
var vec__65104 = p__65103;
var seq__65105 = cljs.core.seq(vec__65104);
var first__65106 = cljs.core.first(seq__65105);
var seq__65105__$1 = cljs.core.next(seq__65105);
var method_name = first__65106;
var ___$2 = seq__65105__$1;
var fq_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name));
var impls = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmulti","cljs.core/defmulti",723984225,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__65062__auto__","x__65062__auto__",-970764532,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__65063__auto__","args__65063__auto__",-818527390,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"methods__65064__auto__","methods__65064__auto__",-2015517796,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-reified-methods","cljs.core/-reified-methods",-1833109469,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__65062__auto__","x__65062__auto__",-970764532,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"methods__65064__auto__","methods__65064__auto__",-2015517796,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__65062__auto__","x__65062__auto__",-970764532,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__65063__auto__","args__65063__auto__",-818527390,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
var impls__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(impls,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__65069__auto__","x__65069__auto__",1574065652,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__65070__auto__","args__65070__auto__",671448185,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"meta__65073__auto__","meta__65073__auto__",-1143010026,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__65069__auto__","x__65069__auto__",1574065652,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"method__65074__auto__","method__65074__auto__",1942473970,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meta__65073__auto__","meta__65073__auto__",-1143010026,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__65074__auto__","method__65074__auto__",1942473970,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__65074__auto__","method__65074__auto__",1942473970,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__65069__auto__","x__65069__auto__",1574065652,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__65070__auto__","args__65070__auto__",671448185,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No implementation of method: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_name),null,(1),null)),(new cljs.core.List(null," of protocol: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," found for: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__65069__auto__","x__65069__auto__",1574065652,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))):impls);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),impls__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","update","cljs.core/update",-908565906,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),signatures__$2)], 0))));
return expansion;
}));

(sci.impl.protocols.defprotocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.defprotocol.cljs$lang$applyTo = (function (seq65082){
var G__65083 = cljs.core.first(seq65082);
var seq65082__$1 = cljs.core.next(seq65082);
var G__65084 = cljs.core.first(seq65082__$1);
var seq65082__$2 = cljs.core.next(seq65082__$1);
var G__65085 = cljs.core.first(seq65082__$2);
var seq65082__$3 = cljs.core.next(seq65082__$2);
var G__65086 = cljs.core.first(seq65082__$3);
var seq65082__$4 = cljs.core.next(seq65082__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65083,G__65084,G__65085,G__65086,seq65082__$4);
}));

sci.impl.protocols.extend_protocol = (function sci$impl$protocols$extend_protocol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___65355 = arguments.length;
var i__4737__auto___65356 = (0);
while(true){
if((i__4737__auto___65356 < len__4736__auto___65355)){
args__4742__auto__.push((arguments[i__4737__auto___65356]));

var G__65359 = (i__4737__auto___65356 + (1));
i__4737__auto___65356 = G__65359;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,protocol_name,impls){
var impls__$1 = sci.impl.utils.split_when((function (p1__65125_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__65125_SHARP_)));
}),impls);
var protocol_var = (function (){var fexpr__65133 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__65133.cljs$core$IFn$_invoke$arity$2 ? fexpr__65133.cljs$core$IFn$_invoke$arity$2(ctx,protocol_name) : fexpr__65133.call(null,ctx,protocol_name));
})();
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(protocol_var));
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var fq_meth_name = (function (p1__65126_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns,p1__65126_SHARP_);
});
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65135){
var vec__65136 = p__65135;
var seq__65137 = cljs.core.seq(vec__65136);
var first__65138 = cljs.core.first(seq__65137);
var seq__65137__$1 = cljs.core.next(seq__65137);
var type = first__65138;
var meths = seq__65137__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (meth){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq_meth_name(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(meth))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,cljs.core.second(meth),null,(1),null)),cljs.core.nnext(meth)], 0))));
}),meths))));
}),impls__$1))));
return expansion;
}));

(sci.impl.protocols.extend_protocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_protocol.cljs$lang$applyTo = (function (seq65128){
var G__65129 = cljs.core.first(seq65128);
var seq65128__$1 = cljs.core.next(seq65128);
var G__65130 = cljs.core.first(seq65128__$1);
var seq65128__$2 = cljs.core.next(seq65128__$1);
var G__65131 = cljs.core.first(seq65128__$2);
var seq65128__$3 = cljs.core.next(seq65128__$2);
var G__65132 = cljs.core.first(seq65128__$3);
var seq65128__$4 = cljs.core.next(seq65128__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65129,G__65130,G__65131,G__65132,seq65128__$4);
}));

sci.impl.protocols.extend = (function sci$impl$protocols$extend(var_args){
var args__4742__auto__ = [];
var len__4736__auto___65381 = arguments.length;
var i__4737__auto___65382 = (0);
while(true){
if((i__4737__auto___65382 < len__4736__auto___65381)){
args__4742__auto__.push((arguments[i__4737__auto___65382]));

var G__65384 = (i__4737__auto___65382 + (1));
i__4737__auto___65382 = G__65384;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,atype,proto_PLUS_mmaps){
var seq__65155 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),proto_PLUS_mmaps));
var chunk__65157 = null;
var count__65158 = (0);
var i__65159 = (0);
while(true){
if((i__65159 < count__65158)){
var vec__65221 = chunk__65157.cljs$core$IIndexed$_nth$arity$2(null,i__65159);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65221,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65221,(1),null);
var proto_ns_65392 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_65393 = sci.impl.vars.getName(proto_ns_65392);
var seq__65224_65394 = cljs.core.seq(mmap);
var chunk__65225_65395 = null;
var count__65226_65396 = (0);
var i__65227_65397 = (0);
while(true){
if((i__65227_65397 < count__65226_65396)){
var vec__65236_65400 = chunk__65225_65395.cljs$core$IIndexed$_nth$arity$2(null,i__65227_65397);
var fn_name_65401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65236_65400,(0),null);
var f_65402 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65236_65400,(1),null);
var fn_sym_65405 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_65401));
var env_65406 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_65407 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_65406,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_65393,fn_sym_65405], null));
var multi_method_65408 = cljs.core.deref(multi_method_var_65407);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_65408,atype,f_65402);


var G__65414 = seq__65224_65394;
var G__65415 = chunk__65225_65395;
var G__65416 = count__65226_65396;
var G__65417 = (i__65227_65397 + (1));
seq__65224_65394 = G__65414;
chunk__65225_65395 = G__65415;
count__65226_65396 = G__65416;
i__65227_65397 = G__65417;
continue;
} else {
var temp__5753__auto___65420 = cljs.core.seq(seq__65224_65394);
if(temp__5753__auto___65420){
var seq__65224_65423__$1 = temp__5753__auto___65420;
if(cljs.core.chunked_seq_QMARK_(seq__65224_65423__$1)){
var c__4556__auto___65424 = cljs.core.chunk_first(seq__65224_65423__$1);
var G__65427 = cljs.core.chunk_rest(seq__65224_65423__$1);
var G__65428 = c__4556__auto___65424;
var G__65429 = cljs.core.count(c__4556__auto___65424);
var G__65430 = (0);
seq__65224_65394 = G__65427;
chunk__65225_65395 = G__65428;
count__65226_65396 = G__65429;
i__65227_65397 = G__65430;
continue;
} else {
var vec__65241_65434 = cljs.core.first(seq__65224_65423__$1);
var fn_name_65435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65241_65434,(0),null);
var f_65436 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65241_65434,(1),null);
var fn_sym_65439 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_65435));
var env_65440 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_65441 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_65440,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_65393,fn_sym_65439], null));
var multi_method_65442 = cljs.core.deref(multi_method_var_65441);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_65442,atype,f_65436);


var G__65446 = cljs.core.next(seq__65224_65423__$1);
var G__65447 = null;
var G__65448 = (0);
var G__65449 = (0);
seq__65224_65394 = G__65446;
chunk__65225_65395 = G__65447;
count__65226_65396 = G__65448;
i__65227_65397 = G__65449;
continue;
}
} else {
}
}
break;
}


var G__65450 = seq__65155;
var G__65451 = chunk__65157;
var G__65452 = count__65158;
var G__65453 = (i__65159 + (1));
seq__65155 = G__65450;
chunk__65157 = G__65451;
count__65158 = G__65452;
i__65159 = G__65453;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__65155);
if(temp__5753__auto__){
var seq__65155__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65155__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__65155__$1);
var G__65458 = cljs.core.chunk_rest(seq__65155__$1);
var G__65459 = c__4556__auto__;
var G__65460 = cljs.core.count(c__4556__auto__);
var G__65461 = (0);
seq__65155 = G__65458;
chunk__65157 = G__65459;
count__65158 = G__65460;
i__65159 = G__65461;
continue;
} else {
var vec__65247 = cljs.core.first(seq__65155__$1);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65247,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65247,(1),null);
var proto_ns_65462 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_65463 = sci.impl.vars.getName(proto_ns_65462);
var seq__65250_65464 = cljs.core.seq(mmap);
var chunk__65251_65466 = null;
var count__65252_65467 = (0);
var i__65253_65469 = (0);
while(true){
if((i__65253_65469 < count__65252_65467)){
var vec__65262_65474 = chunk__65251_65466.cljs$core$IIndexed$_nth$arity$2(null,i__65253_65469);
var fn_name_65475 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65262_65474,(0),null);
var f_65476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65262_65474,(1),null);
var fn_sym_65480 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_65475));
var env_65481 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_65482 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_65481,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_65463,fn_sym_65480], null));
var multi_method_65483 = cljs.core.deref(multi_method_var_65482);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_65483,atype,f_65476);


var G__65489 = seq__65250_65464;
var G__65490 = chunk__65251_65466;
var G__65491 = count__65252_65467;
var G__65492 = (i__65253_65469 + (1));
seq__65250_65464 = G__65489;
chunk__65251_65466 = G__65490;
count__65252_65467 = G__65491;
i__65253_65469 = G__65492;
continue;
} else {
var temp__5753__auto___65494__$1 = cljs.core.seq(seq__65250_65464);
if(temp__5753__auto___65494__$1){
var seq__65250_65495__$1 = temp__5753__auto___65494__$1;
if(cljs.core.chunked_seq_QMARK_(seq__65250_65495__$1)){
var c__4556__auto___65498 = cljs.core.chunk_first(seq__65250_65495__$1);
var G__65499 = cljs.core.chunk_rest(seq__65250_65495__$1);
var G__65500 = c__4556__auto___65498;
var G__65501 = cljs.core.count(c__4556__auto___65498);
var G__65502 = (0);
seq__65250_65464 = G__65499;
chunk__65251_65466 = G__65500;
count__65252_65467 = G__65501;
i__65253_65469 = G__65502;
continue;
} else {
var vec__65265_65504 = cljs.core.first(seq__65250_65495__$1);
var fn_name_65505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65265_65504,(0),null);
var f_65506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65265_65504,(1),null);
var fn_sym_65508 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_65505));
var env_65509 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_65510 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_65509,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_65463,fn_sym_65508], null));
var multi_method_65511 = cljs.core.deref(multi_method_var_65510);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_65511,atype,f_65506);


var G__65519 = cljs.core.next(seq__65250_65495__$1);
var G__65520 = null;
var G__65521 = (0);
var G__65522 = (0);
seq__65250_65464 = G__65519;
chunk__65251_65466 = G__65520;
count__65252_65467 = G__65521;
i__65253_65469 = G__65522;
continue;
}
} else {
}
}
break;
}


var G__65523 = cljs.core.next(seq__65155__$1);
var G__65524 = null;
var G__65525 = (0);
var G__65526 = (0);
seq__65155 = G__65523;
chunk__65157 = G__65524;
count__65158 = G__65525;
i__65159 = G__65526;
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
(sci.impl.protocols.extend.cljs$lang$applyTo = (function (seq65147){
var G__65149 = cljs.core.first(seq65147);
var seq65147__$1 = cljs.core.next(seq65147);
var G__65151 = cljs.core.first(seq65147__$1);
var seq65147__$2 = cljs.core.next(seq65147__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65149,G__65151,seq65147__$2);
}));

sci.impl.protocols.extend_type = (function sci$impl$protocols$extend_type(var_args){
var args__4742__auto__ = [];
var len__4736__auto___65531 = arguments.length;
var i__4737__auto___65532 = (0);
while(true){
if((i__4737__auto___65532 < len__4736__auto___65531)){
args__4742__auto__.push((arguments[i__4737__auto___65532]));

var G__65535 = (i__4737__auto___65532 + (1));
i__4737__auto___65532 = G__65535;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,type,proto_PLUS_meths){
var proto_PLUS_meths__$1 = sci.impl.utils.split_when((function (p1__65268_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__65268_SHARP_)));
}),proto_PLUS_meths);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65278){
var vec__65281 = p__65278;
var seq__65282 = cljs.core.seq(vec__65281);
var first__65283 = cljs.core.first(seq__65282);
var seq__65282__$1 = cljs.core.next(seq__65282);
var proto = first__65283;
var meths = seq__65282__$1;
var protocol_var = (function (){var fexpr__65287 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__65287.cljs$core$IFn$_invoke$arity$2 ? fexpr__65287.cljs$core$IFn$_invoke$arity$2(ctx,proto) : fexpr__65287.call(null,ctx,proto));
})();
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(protocol_var));
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var fq_meth_name = (function (p1__65269_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns,p1__65269_SHARP_);
});
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (meth){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq_meth_name(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(meth))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,cljs.core.second(meth),null,(1),null)),cljs.core.nnext(meth)], 0))));
}),meths))));
}),proto_PLUS_meths__$1))));
}));

(sci.impl.protocols.extend_type.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_type.cljs$lang$applyTo = (function (seq65270){
var G__65271 = cljs.core.first(seq65270);
var seq65270__$1 = cljs.core.next(seq65270);
var G__65272 = cljs.core.first(seq65270__$1);
var seq65270__$2 = cljs.core.next(seq65270__$1);
var G__65273 = cljs.core.first(seq65270__$2);
var seq65270__$3 = cljs.core.next(seq65270__$2);
var G__65274 = cljs.core.first(seq65270__$3);
var seq65270__$4 = cljs.core.next(seq65270__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65271,G__65272,G__65273,G__65274,seq65270__$4);
}));

sci.impl.protocols.reify = (function sci$impl$protocols$reify(var_args){
var args__4742__auto__ = [];
var len__4736__auto___65549 = arguments.length;
var i__4737__auto___65554 = (0);
while(true){
if((i__4737__auto___65554 < len__4736__auto___65549)){
args__4742__auto__.push((arguments[i__4737__auto___65554]));

var G__65557 = (i__4737__auto___65554 + (1));
i__4737__auto___65554 = G__65557;
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
(sci.impl.protocols.reify.cljs$lang$applyTo = (function (seq65291){
var G__65292 = cljs.core.first(seq65291);
var seq65291__$1 = cljs.core.next(seq65291);
var G__65293 = cljs.core.first(seq65291__$1);
var seq65291__$2 = cljs.core.next(seq65291__$1);
var G__65294 = cljs.core.first(seq65291__$2);
var seq65291__$3 = cljs.core.next(seq65291__$2);
var G__65295 = cljs.core.first(seq65291__$3);
var seq65291__$4 = cljs.core.next(seq65291__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65292,G__65293,G__65294,G__65295,seq65291__$4);
}));

sci.impl.protocols.satisfies_QMARK_ = (function sci$impl$protocols$satisfies_QMARK_(protocol,obj){
return cljs.core.boolean$(cljs.core.some((function (p1__65303_SHARP_){
return cljs.core.get_method(p1__65303_SHARP_,sci.impl.types.type_impl(obj));
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});
/**
 * Returns true if atype extends protocol
 */
sci.impl.protocols.extends_QMARK_ = (function sci$impl$protocols$extends_QMARK_(protocol,atype){
return cljs.core.boolean$(cljs.core.some((function (p1__65306_SHARP_){
return cljs.core.get_method(p1__65306_SHARP_,atype);
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});

//# sourceMappingURL=sci.impl.protocols.js.map
