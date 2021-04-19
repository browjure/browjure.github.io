goog.provide('sci.impl.protocols');
sci.impl.protocols.defprotocol = (function sci$impl$protocols$defprotocol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64872 = arguments.length;
var i__4737__auto___64873 = (0);
while(true){
if((i__4737__auto___64873 < len__4736__auto___64872)){
args__4742__auto__.push((arguments[i__4737__auto___64873]));

var G__64874 = (i__4737__auto___64873 + (1));
i__4737__auto___64873 = G__64874;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,_ctx,protocol_name,signatures){
var vec__64626 = (function (){var sig = cljs.core.first(signatures);
if(typeof sig === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig,cljs.core.rest(signatures)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64626,(0),null);
var signatures__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64626,(1),null);
var vec__64629 = (function (){var opt = cljs.core.first(signatures__$1);
if((opt instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([opt,cljs.core.second(signatures__$1)]),cljs.core.nnext(signatures__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures__$1], null);
}
})();
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64629,(0),null);
var signatures__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64629,(1),null);
var current_ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.current_ns_name());
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(protocol_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),docstring], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"ns","ns",441598760),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*ns*","cljs.core/*ns*",1155497085,null),null,(1),null))], 0))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__64632){
var vec__64633 = p__64632;
var seq__64634 = cljs.core.seq(vec__64633);
var first__64635 = cljs.core.first(seq__64634);
var seq__64634__$1 = cljs.core.next(seq__64634);
var method_name = first__64635;
var ___$2 = seq__64634__$1;
var fq_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name));
var impls = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmulti","cljs.core/defmulti",723984225,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__64612__auto__","x__64612__auto__",-1009746018,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__64613__auto__","args__64613__auto__",1954802542,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"methods__64614__auto__","methods__64614__auto__",1432910243,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-reified-methods","cljs.core/-reified-methods",-1833109469,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__64612__auto__","x__64612__auto__",-1009746018,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"methods__64614__auto__","methods__64614__auto__",1432910243,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__64612__auto__","x__64612__auto__",-1009746018,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__64613__auto__","args__64613__auto__",1954802542,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
var impls__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(impls,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__64615__auto__","x__64615__auto__",-1176242252,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__64616__auto__","args__64616__auto__",-1131892489,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"meta__64617__auto__","meta__64617__auto__",-1890659080,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__64615__auto__","x__64615__auto__",-1176242252,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"method__64618__auto__","method__64618__auto__",1651389766,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meta__64617__auto__","meta__64617__auto__",-1890659080,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__64618__auto__","method__64618__auto__",1651389766,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__64618__auto__","method__64618__auto__",1651389766,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__64615__auto__","x__64615__auto__",-1176242252,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__64616__auto__","args__64616__auto__",-1131892489,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No implementation of method: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_name),null,(1),null)),(new cljs.core.List(null," of protocol: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," found for: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__64615__auto__","x__64615__auto__",-1176242252,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))):impls);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),impls__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","update","cljs.core/update",-908565906,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),signatures__$2)], 0))));
return expansion;
}));

(sci.impl.protocols.defprotocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.defprotocol.cljs$lang$applyTo = (function (seq64621){
var G__64622 = cljs.core.first(seq64621);
var seq64621__$1 = cljs.core.next(seq64621);
var G__64623 = cljs.core.first(seq64621__$1);
var seq64621__$2 = cljs.core.next(seq64621__$1);
var G__64624 = cljs.core.first(seq64621__$2);
var seq64621__$3 = cljs.core.next(seq64621__$2);
var G__64625 = cljs.core.first(seq64621__$3);
var seq64621__$4 = cljs.core.next(seq64621__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64622,G__64623,G__64624,G__64625,seq64621__$4);
}));

sci.impl.protocols.extend_protocol = (function sci$impl$protocols$extend_protocol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64936 = arguments.length;
var i__4737__auto___64937 = (0);
while(true){
if((i__4737__auto___64937 < len__4736__auto___64936)){
args__4742__auto__.push((arguments[i__4737__auto___64937]));

var G__64940 = (i__4737__auto___64937 + (1));
i__4737__auto___64937 = G__64940;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,protocol_name,impls){
var impls__$1 = sci.impl.utils.split_when((function (p1__64655_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__64655_SHARP_)));
}),impls);
var protocol_var = (function (){var fexpr__64666 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__64666.cljs$core$IFn$_invoke$arity$2 ? fexpr__64666.cljs$core$IFn$_invoke$arity$2(ctx,protocol_name) : fexpr__64666.call(null,ctx,protocol_name));
})();
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(protocol_var));
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var fq_meth_name = (function (p1__64656_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns,p1__64656_SHARP_);
});
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__64667){
var vec__64668 = p__64667;
var seq__64669 = cljs.core.seq(vec__64668);
var first__64670 = cljs.core.first(seq__64669);
var seq__64669__$1 = cljs.core.next(seq__64669);
var type = first__64670;
var meths = seq__64669__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (meth){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq_meth_name(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(meth))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,cljs.core.second(meth),null,(1),null)),cljs.core.nnext(meth)], 0))));
}),meths))));
}),impls__$1))));
return expansion;
}));

(sci.impl.protocols.extend_protocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_protocol.cljs$lang$applyTo = (function (seq64660){
var G__64661 = cljs.core.first(seq64660);
var seq64660__$1 = cljs.core.next(seq64660);
var G__64662 = cljs.core.first(seq64660__$1);
var seq64660__$2 = cljs.core.next(seq64660__$1);
var G__64663 = cljs.core.first(seq64660__$2);
var seq64660__$3 = cljs.core.next(seq64660__$2);
var G__64664 = cljs.core.first(seq64660__$3);
var seq64660__$4 = cljs.core.next(seq64660__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64661,G__64662,G__64663,G__64664,seq64660__$4);
}));

sci.impl.protocols.extend = (function sci$impl$protocols$extend(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64958 = arguments.length;
var i__4737__auto___64959 = (0);
while(true){
if((i__4737__auto___64959 < len__4736__auto___64958)){
args__4742__auto__.push((arguments[i__4737__auto___64959]));

var G__64962 = (i__4737__auto___64959 + (1));
i__4737__auto___64959 = G__64962;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,atype,proto_PLUS_mmaps){
var seq__64679 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),proto_PLUS_mmaps));
var chunk__64681 = null;
var count__64682 = (0);
var i__64683 = (0);
while(true){
if((i__64683 < count__64682)){
var vec__64734 = chunk__64681.cljs$core$IIndexed$_nth$arity$2(null,i__64683);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64734,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64734,(1),null);
var proto_ns_64974 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_64975 = sci.impl.vars.getName(proto_ns_64974);
var seq__64738_64976 = cljs.core.seq(mmap);
var chunk__64739_64977 = null;
var count__64740_64978 = (0);
var i__64741_64979 = (0);
while(true){
if((i__64741_64979 < count__64740_64978)){
var vec__64753_64986 = chunk__64739_64977.cljs$core$IIndexed$_nth$arity$2(null,i__64741_64979);
var fn_name_64987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64753_64986,(0),null);
var f_64988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64753_64986,(1),null);
var fn_sym_64989 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_64987));
var env_64990 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_64991 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_64990,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_64975,fn_sym_64989], null));
var multi_method_64992 = cljs.core.deref(multi_method_var_64991);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_64992,atype,f_64988);


var G__64999 = seq__64738_64976;
var G__65000 = chunk__64739_64977;
var G__65001 = count__64740_64978;
var G__65002 = (i__64741_64979 + (1));
seq__64738_64976 = G__64999;
chunk__64739_64977 = G__65000;
count__64740_64978 = G__65001;
i__64741_64979 = G__65002;
continue;
} else {
var temp__5753__auto___65004 = cljs.core.seq(seq__64738_64976);
if(temp__5753__auto___65004){
var seq__64738_65006__$1 = temp__5753__auto___65004;
if(cljs.core.chunked_seq_QMARK_(seq__64738_65006__$1)){
var c__4556__auto___65007 = cljs.core.chunk_first(seq__64738_65006__$1);
var G__65008 = cljs.core.chunk_rest(seq__64738_65006__$1);
var G__65009 = c__4556__auto___65007;
var G__65010 = cljs.core.count(c__4556__auto___65007);
var G__65011 = (0);
seq__64738_64976 = G__65008;
chunk__64739_64977 = G__65009;
count__64740_64978 = G__65010;
i__64741_64979 = G__65011;
continue;
} else {
var vec__64756_65013 = cljs.core.first(seq__64738_65006__$1);
var fn_name_65014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64756_65013,(0),null);
var f_65015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64756_65013,(1),null);
var fn_sym_65016 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_65014));
var env_65017 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_65018 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_65017,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_64975,fn_sym_65016], null));
var multi_method_65019 = cljs.core.deref(multi_method_var_65018);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_65019,atype,f_65015);


var G__65021 = cljs.core.next(seq__64738_65006__$1);
var G__65022 = null;
var G__65023 = (0);
var G__65024 = (0);
seq__64738_64976 = G__65021;
chunk__64739_64977 = G__65022;
count__64740_64978 = G__65023;
i__64741_64979 = G__65024;
continue;
}
} else {
}
}
break;
}


var G__65032 = seq__64679;
var G__65033 = chunk__64681;
var G__65034 = count__64682;
var G__65035 = (i__64683 + (1));
seq__64679 = G__65032;
chunk__64681 = G__65033;
count__64682 = G__65034;
i__64683 = G__65035;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__64679);
if(temp__5753__auto__){
var seq__64679__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64679__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__64679__$1);
var G__65036 = cljs.core.chunk_rest(seq__64679__$1);
var G__65037 = c__4556__auto__;
var G__65038 = cljs.core.count(c__4556__auto__);
var G__65039 = (0);
seq__64679 = G__65036;
chunk__64681 = G__65037;
count__64682 = G__65038;
i__64683 = G__65039;
continue;
} else {
var vec__64776 = cljs.core.first(seq__64679__$1);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64776,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64776,(1),null);
var proto_ns_65040 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_65041 = sci.impl.vars.getName(proto_ns_65040);
var seq__64779_65042 = cljs.core.seq(mmap);
var chunk__64780_65043 = null;
var count__64781_65044 = (0);
var i__64782_65045 = (0);
while(true){
if((i__64782_65045 < count__64781_65044)){
var vec__64795_65048 = chunk__64780_65043.cljs$core$IIndexed$_nth$arity$2(null,i__64782_65045);
var fn_name_65049 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64795_65048,(0),null);
var f_65050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64795_65048,(1),null);
var fn_sym_65051 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_65049));
var env_65052 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_65053 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_65052,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_65041,fn_sym_65051], null));
var multi_method_65054 = cljs.core.deref(multi_method_var_65053);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_65054,atype,f_65050);


var G__65055 = seq__64779_65042;
var G__65056 = chunk__64780_65043;
var G__65057 = count__64781_65044;
var G__65058 = (i__64782_65045 + (1));
seq__64779_65042 = G__65055;
chunk__64780_65043 = G__65056;
count__64781_65044 = G__65057;
i__64782_65045 = G__65058;
continue;
} else {
var temp__5753__auto___65059__$1 = cljs.core.seq(seq__64779_65042);
if(temp__5753__auto___65059__$1){
var seq__64779_65060__$1 = temp__5753__auto___65059__$1;
if(cljs.core.chunked_seq_QMARK_(seq__64779_65060__$1)){
var c__4556__auto___65061 = cljs.core.chunk_first(seq__64779_65060__$1);
var G__65062 = cljs.core.chunk_rest(seq__64779_65060__$1);
var G__65063 = c__4556__auto___65061;
var G__65064 = cljs.core.count(c__4556__auto___65061);
var G__65065 = (0);
seq__64779_65042 = G__65062;
chunk__64780_65043 = G__65063;
count__64781_65044 = G__65064;
i__64782_65045 = G__65065;
continue;
} else {
var vec__64800_65066 = cljs.core.first(seq__64779_65060__$1);
var fn_name_65067 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64800_65066,(0),null);
var f_65068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64800_65066,(1),null);
var fn_sym_65069 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_65067));
var env_65070 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_65071 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_65070,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_65041,fn_sym_65069], null));
var multi_method_65072 = cljs.core.deref(multi_method_var_65071);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_65072,atype,f_65068);


var G__65073 = cljs.core.next(seq__64779_65060__$1);
var G__65074 = null;
var G__65075 = (0);
var G__65076 = (0);
seq__64779_65042 = G__65073;
chunk__64780_65043 = G__65074;
count__64781_65044 = G__65075;
i__64782_65045 = G__65076;
continue;
}
} else {
}
}
break;
}


var G__65081 = cljs.core.next(seq__64679__$1);
var G__65082 = null;
var G__65083 = (0);
var G__65084 = (0);
seq__64679 = G__65081;
chunk__64681 = G__65082;
count__64682 = G__65083;
i__64683 = G__65084;
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
(sci.impl.protocols.extend.cljs$lang$applyTo = (function (seq64675){
var G__64676 = cljs.core.first(seq64675);
var seq64675__$1 = cljs.core.next(seq64675);
var G__64677 = cljs.core.first(seq64675__$1);
var seq64675__$2 = cljs.core.next(seq64675__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64676,G__64677,seq64675__$2);
}));

sci.impl.protocols.extend_type = (function sci$impl$protocols$extend_type(var_args){
var args__4742__auto__ = [];
var len__4736__auto___65091 = arguments.length;
var i__4737__auto___65096 = (0);
while(true){
if((i__4737__auto___65096 < len__4736__auto___65091)){
args__4742__auto__.push((arguments[i__4737__auto___65096]));

var G__65098 = (i__4737__auto___65096 + (1));
i__4737__auto___65096 = G__65098;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,type,proto_PLUS_meths){
var proto_PLUS_meths__$1 = sci.impl.utils.split_when((function (p1__64805_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__64805_SHARP_)));
}),proto_PLUS_meths);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__64815){
var vec__64816 = p__64815;
var seq__64817 = cljs.core.seq(vec__64816);
var first__64818 = cljs.core.first(seq__64817);
var seq__64817__$1 = cljs.core.next(seq__64817);
var proto = first__64818;
var meths = seq__64817__$1;
var protocol_var = (function (){var fexpr__64820 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__64820.cljs$core$IFn$_invoke$arity$2 ? fexpr__64820.cljs$core$IFn$_invoke$arity$2(ctx,proto) : fexpr__64820.call(null,ctx,proto));
})();
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(protocol_var));
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var fq_meth_name = (function (p1__64806_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns,p1__64806_SHARP_);
});
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (meth){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq_meth_name(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(meth))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,cljs.core.second(meth),null,(1),null)),cljs.core.nnext(meth)], 0))));
}),meths))));
}),proto_PLUS_meths__$1))));
}));

(sci.impl.protocols.extend_type.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_type.cljs$lang$applyTo = (function (seq64807){
var G__64808 = cljs.core.first(seq64807);
var seq64807__$1 = cljs.core.next(seq64807);
var G__64809 = cljs.core.first(seq64807__$1);
var seq64807__$2 = cljs.core.next(seq64807__$1);
var G__64810 = cljs.core.first(seq64807__$2);
var seq64807__$3 = cljs.core.next(seq64807__$2);
var G__64811 = cljs.core.first(seq64807__$3);
var seq64807__$4 = cljs.core.next(seq64807__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64808,G__64809,G__64810,G__64811,seq64807__$4);
}));

sci.impl.protocols.reify = (function sci$impl$protocols$reify(var_args){
var args__4742__auto__ = [];
var len__4736__auto___65135 = arguments.length;
var i__4737__auto___65136 = (0);
while(true){
if((i__4737__auto___65136 < len__4736__auto___65135)){
args__4742__auto__.push((arguments[i__4737__auto___65136]));

var G__65137 = (i__4737__auto___65136 + (1));
i__4737__auto___65136 = G__65137;
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
(sci.impl.protocols.reify.cljs$lang$applyTo = (function (seq64829){
var G__64830 = cljs.core.first(seq64829);
var seq64829__$1 = cljs.core.next(seq64829);
var G__64831 = cljs.core.first(seq64829__$1);
var seq64829__$2 = cljs.core.next(seq64829__$1);
var G__64832 = cljs.core.first(seq64829__$2);
var seq64829__$3 = cljs.core.next(seq64829__$2);
var G__64833 = cljs.core.first(seq64829__$3);
var seq64829__$4 = cljs.core.next(seq64829__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64830,G__64831,G__64832,G__64833,seq64829__$4);
}));

sci.impl.protocols.satisfies_QMARK_ = (function sci$impl$protocols$satisfies_QMARK_(protocol,obj){
return cljs.core.boolean$(cljs.core.some((function (p1__64857_SHARP_){
return cljs.core.get_method(p1__64857_SHARP_,sci.impl.types.type_impl(obj));
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});
/**
 * Returns true if atype extends protocol
 */
sci.impl.protocols.extends_QMARK_ = (function sci$impl$protocols$extends_QMARK_(protocol,atype){
return cljs.core.boolean$(cljs.core.some((function (p1__64867_SHARP_){
return cljs.core.get_method(p1__64867_SHARP_,atype);
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});

//# sourceMappingURL=sci.impl.protocols.js.map
