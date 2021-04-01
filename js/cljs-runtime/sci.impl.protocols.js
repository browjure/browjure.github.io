goog.provide('sci.impl.protocols');
sci.impl.protocols.defprotocol = (function sci$impl$protocols$defprotocol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___65459 = arguments.length;
var i__4737__auto___65460 = (0);
while(true){
if((i__4737__auto___65460 < len__4736__auto___65459)){
args__4742__auto__.push((arguments[i__4737__auto___65460]));

var G__65461 = (i__4737__auto___65460 + (1));
i__4737__auto___65460 = G__65461;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,_ctx,protocol_name,signatures){
var vec__65248 = (function (){var sig = cljs.core.first(signatures);
if(typeof sig === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig,cljs.core.rest(signatures)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65248,(0),null);
var signatures__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65248,(1),null);
var vec__65251 = (function (){var opt = cljs.core.first(signatures__$1);
if((opt instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([opt,cljs.core.second(signatures__$1)]),cljs.core.nnext(signatures__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures__$1], null);
}
})();
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65251,(0),null);
var signatures__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65251,(1),null);
var current_ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.current_ns_name());
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(protocol_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),docstring], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"ns","ns",441598760),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*ns*","cljs.core/*ns*",1155497085,null),null,(1),null))], 0))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65267){
var vec__65268 = p__65267;
var seq__65269 = cljs.core.seq(vec__65268);
var first__65270 = cljs.core.first(seq__65269);
var seq__65269__$1 = cljs.core.next(seq__65269);
var method_name = first__65270;
var ___$2 = seq__65269__$1;
var fq_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name));
var impls = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmulti","cljs.core/defmulti",723984225,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__65211__auto__","x__65211__auto__",-1228975887,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__65212__auto__","args__65212__auto__",1842808283,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"methods__65213__auto__","methods__65213__auto__",-196822173,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-reified-methods","cljs.core/-reified-methods",-1833109469,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__65211__auto__","x__65211__auto__",-1228975887,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"methods__65213__auto__","methods__65213__auto__",-196822173,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__65211__auto__","x__65211__auto__",-1228975887,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__65212__auto__","args__65212__auto__",1842808283,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
var impls__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(impls,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__65214__auto__","x__65214__auto__",-875697081,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__65215__auto__","args__65215__auto__",1249256216,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"meta__65216__auto__","meta__65216__auto__",1317292310,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__65214__auto__","x__65214__auto__",-875697081,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"method__65217__auto__","method__65217__auto__",-1327083026,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meta__65216__auto__","meta__65216__auto__",1317292310,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__65217__auto__","method__65217__auto__",-1327083026,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__65217__auto__","method__65217__auto__",-1327083026,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__65214__auto__","x__65214__auto__",-875697081,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__65215__auto__","args__65215__auto__",1249256216,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No implementation of method: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_name),null,(1),null)),(new cljs.core.List(null," of protocol: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," found for: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__65214__auto__","x__65214__auto__",-875697081,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))):impls);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),impls__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","update","cljs.core/update",-908565906,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),signatures__$2)], 0))));
return expansion;
}));

(sci.impl.protocols.defprotocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.defprotocol.cljs$lang$applyTo = (function (seq65231){
var G__65232 = cljs.core.first(seq65231);
var seq65231__$1 = cljs.core.next(seq65231);
var G__65233 = cljs.core.first(seq65231__$1);
var seq65231__$2 = cljs.core.next(seq65231__$1);
var G__65234 = cljs.core.first(seq65231__$2);
var seq65231__$3 = cljs.core.next(seq65231__$2);
var G__65235 = cljs.core.first(seq65231__$3);
var seq65231__$4 = cljs.core.next(seq65231__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65232,G__65233,G__65234,G__65235,seq65231__$4);
}));

sci.impl.protocols.extend_protocol = (function sci$impl$protocols$extend_protocol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___65504 = arguments.length;
var i__4737__auto___65505 = (0);
while(true){
if((i__4737__auto___65505 < len__4736__auto___65504)){
args__4742__auto__.push((arguments[i__4737__auto___65505]));

var G__65506 = (i__4737__auto___65505 + (1));
i__4737__auto___65505 = G__65506;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,protocol_name,impls){
var impls__$1 = sci.impl.utils.split_when((function (p1__65287_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__65287_SHARP_)));
}),impls);
var protocol_var = (function (){var fexpr__65295 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__65295.cljs$core$IFn$_invoke$arity$2 ? fexpr__65295.cljs$core$IFn$_invoke$arity$2(ctx,protocol_name) : fexpr__65295.call(null,ctx,protocol_name));
})();
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(protocol_var));
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var fq_meth_name = (function (p1__65288_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns,p1__65288_SHARP_);
});
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65304){
var vec__65305 = p__65304;
var seq__65306 = cljs.core.seq(vec__65305);
var first__65307 = cljs.core.first(seq__65306);
var seq__65306__$1 = cljs.core.next(seq__65306);
var type = first__65307;
var meths = seq__65306__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (meth){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq_meth_name(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(meth))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,cljs.core.second(meth),null,(1),null)),cljs.core.nnext(meth)], 0))));
}),meths))));
}),impls__$1))));
return expansion;
}));

(sci.impl.protocols.extend_protocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_protocol.cljs$lang$applyTo = (function (seq65290){
var G__65291 = cljs.core.first(seq65290);
var seq65290__$1 = cljs.core.next(seq65290);
var G__65292 = cljs.core.first(seq65290__$1);
var seq65290__$2 = cljs.core.next(seq65290__$1);
var G__65293 = cljs.core.first(seq65290__$2);
var seq65290__$3 = cljs.core.next(seq65290__$2);
var G__65294 = cljs.core.first(seq65290__$3);
var seq65290__$4 = cljs.core.next(seq65290__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65291,G__65292,G__65293,G__65294,seq65290__$4);
}));

sci.impl.protocols.extend = (function sci$impl$protocols$extend(var_args){
var args__4742__auto__ = [];
var len__4736__auto___65522 = arguments.length;
var i__4737__auto___65523 = (0);
while(true){
if((i__4737__auto___65523 < len__4736__auto___65522)){
args__4742__auto__.push((arguments[i__4737__auto___65523]));

var G__65524 = (i__4737__auto___65523 + (1));
i__4737__auto___65523 = G__65524;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,atype,proto_PLUS_mmaps){
var seq__65311 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),proto_PLUS_mmaps));
var chunk__65313 = null;
var count__65314 = (0);
var i__65315 = (0);
while(true){
if((i__65315 < count__65314)){
var vec__65372 = chunk__65313.cljs$core$IIndexed$_nth$arity$2(null,i__65315);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65372,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65372,(1),null);
var proto_ns_65538 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_65539 = sci.impl.vars.getName(proto_ns_65538);
var seq__65376_65540 = cljs.core.seq(mmap);
var chunk__65377_65541 = null;
var count__65378_65542 = (0);
var i__65379_65543 = (0);
while(true){
if((i__65379_65543 < count__65378_65542)){
var vec__65387_65544 = chunk__65377_65541.cljs$core$IIndexed$_nth$arity$2(null,i__65379_65543);
var fn_name_65545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65387_65544,(0),null);
var f_65546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65387_65544,(1),null);
var fn_sym_65550 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_65545));
var env_65551 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_65552 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_65551,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_65539,fn_sym_65550], null));
var multi_method_65553 = cljs.core.deref(multi_method_var_65552);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_65553,atype,f_65546);


var G__65557 = seq__65376_65540;
var G__65558 = chunk__65377_65541;
var G__65559 = count__65378_65542;
var G__65560 = (i__65379_65543 + (1));
seq__65376_65540 = G__65557;
chunk__65377_65541 = G__65558;
count__65378_65542 = G__65559;
i__65379_65543 = G__65560;
continue;
} else {
var temp__5753__auto___65561 = cljs.core.seq(seq__65376_65540);
if(temp__5753__auto___65561){
var seq__65376_65562__$1 = temp__5753__auto___65561;
if(cljs.core.chunked_seq_QMARK_(seq__65376_65562__$1)){
var c__4556__auto___65565 = cljs.core.chunk_first(seq__65376_65562__$1);
var G__65566 = cljs.core.chunk_rest(seq__65376_65562__$1);
var G__65567 = c__4556__auto___65565;
var G__65568 = cljs.core.count(c__4556__auto___65565);
var G__65569 = (0);
seq__65376_65540 = G__65566;
chunk__65377_65541 = G__65567;
count__65378_65542 = G__65568;
i__65379_65543 = G__65569;
continue;
} else {
var vec__65390_65570 = cljs.core.first(seq__65376_65562__$1);
var fn_name_65571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65390_65570,(0),null);
var f_65572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65390_65570,(1),null);
var fn_sym_65574 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_65571));
var env_65575 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_65576 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_65575,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_65539,fn_sym_65574], null));
var multi_method_65577 = cljs.core.deref(multi_method_var_65576);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_65577,atype,f_65572);


var G__65579 = cljs.core.next(seq__65376_65562__$1);
var G__65580 = null;
var G__65581 = (0);
var G__65582 = (0);
seq__65376_65540 = G__65579;
chunk__65377_65541 = G__65580;
count__65378_65542 = G__65581;
i__65379_65543 = G__65582;
continue;
}
} else {
}
}
break;
}


var G__65585 = seq__65311;
var G__65587 = chunk__65313;
var G__65588 = count__65314;
var G__65590 = (i__65315 + (1));
seq__65311 = G__65585;
chunk__65313 = G__65587;
count__65314 = G__65588;
i__65315 = G__65590;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__65311);
if(temp__5753__auto__){
var seq__65311__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65311__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__65311__$1);
var G__65594 = cljs.core.chunk_rest(seq__65311__$1);
var G__65595 = c__4556__auto__;
var G__65596 = cljs.core.count(c__4556__auto__);
var G__65597 = (0);
seq__65311 = G__65594;
chunk__65313 = G__65595;
count__65314 = G__65596;
i__65315 = G__65597;
continue;
} else {
var vec__65393 = cljs.core.first(seq__65311__$1);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65393,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65393,(1),null);
var proto_ns_65603 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_65604 = sci.impl.vars.getName(proto_ns_65603);
var seq__65396_65605 = cljs.core.seq(mmap);
var chunk__65397_65606 = null;
var count__65398_65607 = (0);
var i__65399_65608 = (0);
while(true){
if((i__65399_65608 < count__65398_65607)){
var vec__65408_65610 = chunk__65397_65606.cljs$core$IIndexed$_nth$arity$2(null,i__65399_65608);
var fn_name_65611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65408_65610,(0),null);
var f_65612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65408_65610,(1),null);
var fn_sym_65614 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_65611));
var env_65615 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_65616 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_65615,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_65604,fn_sym_65614], null));
var multi_method_65617 = cljs.core.deref(multi_method_var_65616);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_65617,atype,f_65612);


var G__65621 = seq__65396_65605;
var G__65622 = chunk__65397_65606;
var G__65623 = count__65398_65607;
var G__65624 = (i__65399_65608 + (1));
seq__65396_65605 = G__65621;
chunk__65397_65606 = G__65622;
count__65398_65607 = G__65623;
i__65399_65608 = G__65624;
continue;
} else {
var temp__5753__auto___65625__$1 = cljs.core.seq(seq__65396_65605);
if(temp__5753__auto___65625__$1){
var seq__65396_65626__$1 = temp__5753__auto___65625__$1;
if(cljs.core.chunked_seq_QMARK_(seq__65396_65626__$1)){
var c__4556__auto___65627 = cljs.core.chunk_first(seq__65396_65626__$1);
var G__65628 = cljs.core.chunk_rest(seq__65396_65626__$1);
var G__65629 = c__4556__auto___65627;
var G__65630 = cljs.core.count(c__4556__auto___65627);
var G__65631 = (0);
seq__65396_65605 = G__65628;
chunk__65397_65606 = G__65629;
count__65398_65607 = G__65630;
i__65399_65608 = G__65631;
continue;
} else {
var vec__65411_65633 = cljs.core.first(seq__65396_65626__$1);
var fn_name_65634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65411_65633,(0),null);
var f_65635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65411_65633,(1),null);
var fn_sym_65638 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_65634));
var env_65639 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_65640 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_65639,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_65604,fn_sym_65638], null));
var multi_method_65641 = cljs.core.deref(multi_method_var_65640);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_65641,atype,f_65635);


var G__65644 = cljs.core.next(seq__65396_65626__$1);
var G__65645 = null;
var G__65646 = (0);
var G__65647 = (0);
seq__65396_65605 = G__65644;
chunk__65397_65606 = G__65645;
count__65398_65607 = G__65646;
i__65399_65608 = G__65647;
continue;
}
} else {
}
}
break;
}


var G__65648 = cljs.core.next(seq__65311__$1);
var G__65649 = null;
var G__65650 = (0);
var G__65651 = (0);
seq__65311 = G__65648;
chunk__65313 = G__65649;
count__65314 = G__65650;
i__65315 = G__65651;
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
(sci.impl.protocols.extend.cljs$lang$applyTo = (function (seq65308){
var G__65309 = cljs.core.first(seq65308);
var seq65308__$1 = cljs.core.next(seq65308);
var G__65310 = cljs.core.first(seq65308__$1);
var seq65308__$2 = cljs.core.next(seq65308__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65309,G__65310,seq65308__$2);
}));

sci.impl.protocols.extend_type = (function sci$impl$protocols$extend_type(var_args){
var args__4742__auto__ = [];
var len__4736__auto___65658 = arguments.length;
var i__4737__auto___65659 = (0);
while(true){
if((i__4737__auto___65659 < len__4736__auto___65658)){
args__4742__auto__.push((arguments[i__4737__auto___65659]));

var G__65660 = (i__4737__auto___65659 + (1));
i__4737__auto___65659 = G__65660;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,type,proto_PLUS_meths){
var proto_PLUS_meths__$1 = sci.impl.utils.split_when((function (p1__65414_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__65414_SHARP_)));
}),proto_PLUS_meths);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65424){
var vec__65425 = p__65424;
var seq__65426 = cljs.core.seq(vec__65425);
var first__65427 = cljs.core.first(seq__65426);
var seq__65426__$1 = cljs.core.next(seq__65426);
var proto = first__65427;
var meths = seq__65426__$1;
var protocol_var = (function (){var fexpr__65429 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__65429.cljs$core$IFn$_invoke$arity$2 ? fexpr__65429.cljs$core$IFn$_invoke$arity$2(ctx,proto) : fexpr__65429.call(null,ctx,proto));
})();
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(protocol_var));
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var fq_meth_name = (function (p1__65417_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns,p1__65417_SHARP_);
});
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (meth){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq_meth_name(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(meth))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,cljs.core.second(meth),null,(1),null)),cljs.core.nnext(meth)], 0))));
}),meths))));
}),proto_PLUS_meths__$1))));
}));

(sci.impl.protocols.extend_type.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_type.cljs$lang$applyTo = (function (seq65418){
var G__65419 = cljs.core.first(seq65418);
var seq65418__$1 = cljs.core.next(seq65418);
var G__65420 = cljs.core.first(seq65418__$1);
var seq65418__$2 = cljs.core.next(seq65418__$1);
var G__65421 = cljs.core.first(seq65418__$2);
var seq65418__$3 = cljs.core.next(seq65418__$2);
var G__65422 = cljs.core.first(seq65418__$3);
var seq65418__$4 = cljs.core.next(seq65418__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65419,G__65420,G__65421,G__65422,seq65418__$4);
}));

sci.impl.protocols.reify = (function sci$impl$protocols$reify(var_args){
var args__4742__auto__ = [];
var len__4736__auto___65668 = arguments.length;
var i__4737__auto___65669 = (0);
while(true){
if((i__4737__auto___65669 < len__4736__auto___65668)){
args__4742__auto__.push((arguments[i__4737__auto___65669]));

var G__65670 = (i__4737__auto___65669 + (1));
i__4737__auto___65669 = G__65670;
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
(sci.impl.protocols.reify.cljs$lang$applyTo = (function (seq65431){
var G__65432 = cljs.core.first(seq65431);
var seq65431__$1 = cljs.core.next(seq65431);
var G__65433 = cljs.core.first(seq65431__$1);
var seq65431__$2 = cljs.core.next(seq65431__$1);
var G__65434 = cljs.core.first(seq65431__$2);
var seq65431__$3 = cljs.core.next(seq65431__$2);
var G__65435 = cljs.core.first(seq65431__$3);
var seq65431__$4 = cljs.core.next(seq65431__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65432,G__65433,G__65434,G__65435,seq65431__$4);
}));

sci.impl.protocols.satisfies_QMARK_ = (function sci$impl$protocols$satisfies_QMARK_(protocol,obj){
return cljs.core.boolean$(cljs.core.some((function (p1__65440_SHARP_){
return cljs.core.get_method(p1__65440_SHARP_,sci.impl.types.type_impl(obj));
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});
/**
 * Returns true if atype extends protocol
 */
sci.impl.protocols.extends_QMARK_ = (function sci$impl$protocols$extends_QMARK_(protocol,atype){
return cljs.core.boolean$(cljs.core.some((function (p1__65444_SHARP_){
return cljs.core.get_method(p1__65444_SHARP_,atype);
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});

//# sourceMappingURL=sci.impl.protocols.js.map
