goog.provide('sci.impl.protocols');
sci.impl.protocols.defprotocol = (function sci$impl$protocols$defprotocol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___122463 = arguments.length;
var i__4737__auto___122464 = (0);
while(true){
if((i__4737__auto___122464 < len__4736__auto___122463)){
args__4742__auto__.push((arguments[i__4737__auto___122464]));

var G__122465 = (i__4737__auto___122464 + (1));
i__4737__auto___122464 = G__122465;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,_ctx,protocol_name,signatures){
var vec__122146 = (function (){var sig = cljs.core.first(signatures);
if(typeof sig === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig,cljs.core.rest(signatures)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__122146,(0),null);
var signatures__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__122146,(1),null);
var vec__122149 = (function (){var opt = cljs.core.first(signatures__$1);
if((opt instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([opt,cljs.core.second(signatures__$1)]),cljs.core.nnext(signatures__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures__$1], null);
}
})();
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__122149,(0),null);
var signatures__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__122149,(1),null);
var current_ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.current_ns_name());
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(protocol_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),docstring], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"ns","ns",441598760),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*ns*","cljs.core/*ns*",1155497085,null),null,(1),null))], 0))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__122156){
var vec__122157 = p__122156;
var seq__122158 = cljs.core.seq(vec__122157);
var first__122159 = cljs.core.first(seq__122158);
var seq__122158__$1 = cljs.core.next(seq__122158);
var method_name = first__122159;
var ___$2 = seq__122158__$1;
var fq_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name));
var impls = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmulti","cljs.core/defmulti",723984225,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__122129__auto__","x__122129__auto__",1850981255,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__122130__auto__","args__122130__auto__",-1006588327,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"methods__122131__auto__","methods__122131__auto__",461037169,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-reified-methods","cljs.core/-reified-methods",-1833109469,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__122129__auto__","x__122129__auto__",1850981255,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"methods__122131__auto__","methods__122131__auto__",461037169,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__122129__auto__","x__122129__auto__",1850981255,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__122130__auto__","args__122130__auto__",-1006588327,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
var impls__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(impls,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__122132__auto__","x__122132__auto__",628077162,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__122133__auto__","args__122133__auto__",-1780622208,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"meta__122134__auto__","meta__122134__auto__",-1098402554,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__122132__auto__","x__122132__auto__",628077162,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"method__122135__auto__","method__122135__auto__",1980979445,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meta__122134__auto__","meta__122134__auto__",-1098402554,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__122135__auto__","method__122135__auto__",1980979445,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__122135__auto__","method__122135__auto__",1980979445,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__122132__auto__","x__122132__auto__",628077162,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__122133__auto__","args__122133__auto__",-1780622208,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No implementation of method: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_name),null,(1),null)),(new cljs.core.List(null," of protocol: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," found for: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__122132__auto__","x__122132__auto__",628077162,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))):impls);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),impls__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","update","cljs.core/update",-908565906,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),signatures__$2)], 0))));
return expansion;
}));

(sci.impl.protocols.defprotocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.defprotocol.cljs$lang$applyTo = (function (seq122138){
var G__122139 = cljs.core.first(seq122138);
var seq122138__$1 = cljs.core.next(seq122138);
var G__122140 = cljs.core.first(seq122138__$1);
var seq122138__$2 = cljs.core.next(seq122138__$1);
var G__122141 = cljs.core.first(seq122138__$2);
var seq122138__$3 = cljs.core.next(seq122138__$2);
var G__122142 = cljs.core.first(seq122138__$3);
var seq122138__$4 = cljs.core.next(seq122138__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__122139,G__122140,G__122141,G__122142,seq122138__$4);
}));

sci.impl.protocols.extend_protocol = (function sci$impl$protocols$extend_protocol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___122518 = arguments.length;
var i__4737__auto___122519 = (0);
while(true){
if((i__4737__auto___122519 < len__4736__auto___122518)){
args__4742__auto__.push((arguments[i__4737__auto___122519]));

var G__122520 = (i__4737__auto___122519 + (1));
i__4737__auto___122519 = G__122520;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,protocol_name,impls){
var impls__$1 = sci.impl.utils.split_when((function (p1__122227_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__122227_SHARP_)));
}),impls);
var protocol_var = (function (){var fexpr__122251 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__122251.cljs$core$IFn$_invoke$arity$2 ? fexpr__122251.cljs$core$IFn$_invoke$arity$2(ctx,protocol_name) : fexpr__122251.call(null,ctx,protocol_name));
})();
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(protocol_var));
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var fq_meth_name = (function (p1__122229_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns,p1__122229_SHARP_);
});
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__122254){
var vec__122255 = p__122254;
var seq__122256 = cljs.core.seq(vec__122255);
var first__122257 = cljs.core.first(seq__122256);
var seq__122256__$1 = cljs.core.next(seq__122256);
var type = first__122257;
var meths = seq__122256__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (meth){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq_meth_name(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(meth))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,cljs.core.second(meth),null,(1),null)),cljs.core.nnext(meth)], 0))));
}),meths))));
}),impls__$1))));
return expansion;
}));

(sci.impl.protocols.extend_protocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_protocol.cljs$lang$applyTo = (function (seq122232){
var G__122233 = cljs.core.first(seq122232);
var seq122232__$1 = cljs.core.next(seq122232);
var G__122234 = cljs.core.first(seq122232__$1);
var seq122232__$2 = cljs.core.next(seq122232__$1);
var G__122235 = cljs.core.first(seq122232__$2);
var seq122232__$3 = cljs.core.next(seq122232__$2);
var G__122236 = cljs.core.first(seq122232__$3);
var seq122232__$4 = cljs.core.next(seq122232__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__122233,G__122234,G__122235,G__122236,seq122232__$4);
}));

sci.impl.protocols.extend = (function sci$impl$protocols$extend(var_args){
var args__4742__auto__ = [];
var len__4736__auto___122549 = arguments.length;
var i__4737__auto___122550 = (0);
while(true){
if((i__4737__auto___122550 < len__4736__auto___122549)){
args__4742__auto__.push((arguments[i__4737__auto___122550]));

var G__122552 = (i__4737__auto___122550 + (1));
i__4737__auto___122550 = G__122552;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,atype,proto_PLUS_mmaps){
var seq__122275 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),proto_PLUS_mmaps));
var chunk__122277 = null;
var count__122278 = (0);
var i__122279 = (0);
while(true){
if((i__122279 < count__122278)){
var vec__122346 = chunk__122277.cljs$core$IIndexed$_nth$arity$2(null,i__122279);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__122346,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__122346,(1),null);
var proto_ns_122555 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_122556 = sci.impl.vars.getName(proto_ns_122555);
var seq__122349_122557 = cljs.core.seq(mmap);
var chunk__122350_122558 = null;
var count__122351_122559 = (0);
var i__122352_122560 = (0);
while(true){
if((i__122352_122560 < count__122351_122559)){
var vec__122367_122563 = chunk__122350_122558.cljs$core$IIndexed$_nth$arity$2(null,i__122352_122560);
var fn_name_122564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__122367_122563,(0),null);
var f_122565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__122367_122563,(1),null);
var fn_sym_122566 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_122564));
var env_122567 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_122568 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_122567,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_122556,fn_sym_122566], null));
var multi_method_122569 = cljs.core.deref(multi_method_var_122568);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_122569,atype,f_122565);


var G__122571 = seq__122349_122557;
var G__122572 = chunk__122350_122558;
var G__122573 = count__122351_122559;
var G__122574 = (i__122352_122560 + (1));
seq__122349_122557 = G__122571;
chunk__122350_122558 = G__122572;
count__122351_122559 = G__122573;
i__122352_122560 = G__122574;
continue;
} else {
var temp__5753__auto___122576 = cljs.core.seq(seq__122349_122557);
if(temp__5753__auto___122576){
var seq__122349_122578__$1 = temp__5753__auto___122576;
if(cljs.core.chunked_seq_QMARK_(seq__122349_122578__$1)){
var c__4556__auto___122579 = cljs.core.chunk_first(seq__122349_122578__$1);
var G__122580 = cljs.core.chunk_rest(seq__122349_122578__$1);
var G__122581 = c__4556__auto___122579;
var G__122582 = cljs.core.count(c__4556__auto___122579);
var G__122583 = (0);
seq__122349_122557 = G__122580;
chunk__122350_122558 = G__122581;
count__122351_122559 = G__122582;
i__122352_122560 = G__122583;
continue;
} else {
var vec__122371_122584 = cljs.core.first(seq__122349_122578__$1);
var fn_name_122585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__122371_122584,(0),null);
var f_122586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__122371_122584,(1),null);
var fn_sym_122587 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_122585));
var env_122588 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_122589 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_122588,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_122556,fn_sym_122587], null));
var multi_method_122590 = cljs.core.deref(multi_method_var_122589);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_122590,atype,f_122586);


var G__122593 = cljs.core.next(seq__122349_122578__$1);
var G__122594 = null;
var G__122595 = (0);
var G__122596 = (0);
seq__122349_122557 = G__122593;
chunk__122350_122558 = G__122594;
count__122351_122559 = G__122595;
i__122352_122560 = G__122596;
continue;
}
} else {
}
}
break;
}


var G__122598 = seq__122275;
var G__122599 = chunk__122277;
var G__122600 = count__122278;
var G__122601 = (i__122279 + (1));
seq__122275 = G__122598;
chunk__122277 = G__122599;
count__122278 = G__122600;
i__122279 = G__122601;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__122275);
if(temp__5753__auto__){
var seq__122275__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__122275__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__122275__$1);
var G__122603 = cljs.core.chunk_rest(seq__122275__$1);
var G__122604 = c__4556__auto__;
var G__122605 = cljs.core.count(c__4556__auto__);
var G__122606 = (0);
seq__122275 = G__122603;
chunk__122277 = G__122604;
count__122278 = G__122605;
i__122279 = G__122606;
continue;
} else {
var vec__122377 = cljs.core.first(seq__122275__$1);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__122377,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__122377,(1),null);
var proto_ns_122610 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_122611 = sci.impl.vars.getName(proto_ns_122610);
var seq__122382_122612 = cljs.core.seq(mmap);
var chunk__122383_122613 = null;
var count__122384_122614 = (0);
var i__122385_122615 = (0);
while(true){
if((i__122385_122615 < count__122384_122614)){
var vec__122398_122617 = chunk__122383_122613.cljs$core$IIndexed$_nth$arity$2(null,i__122385_122615);
var fn_name_122618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__122398_122617,(0),null);
var f_122619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__122398_122617,(1),null);
var fn_sym_122620 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_122618));
var env_122621 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_122622 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_122621,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_122611,fn_sym_122620], null));
var multi_method_122623 = cljs.core.deref(multi_method_var_122622);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_122623,atype,f_122619);


var G__122625 = seq__122382_122612;
var G__122626 = chunk__122383_122613;
var G__122627 = count__122384_122614;
var G__122628 = (i__122385_122615 + (1));
seq__122382_122612 = G__122625;
chunk__122383_122613 = G__122626;
count__122384_122614 = G__122627;
i__122385_122615 = G__122628;
continue;
} else {
var temp__5753__auto___122629__$1 = cljs.core.seq(seq__122382_122612);
if(temp__5753__auto___122629__$1){
var seq__122382_122630__$1 = temp__5753__auto___122629__$1;
if(cljs.core.chunked_seq_QMARK_(seq__122382_122630__$1)){
var c__4556__auto___122631 = cljs.core.chunk_first(seq__122382_122630__$1);
var G__122632 = cljs.core.chunk_rest(seq__122382_122630__$1);
var G__122633 = c__4556__auto___122631;
var G__122634 = cljs.core.count(c__4556__auto___122631);
var G__122635 = (0);
seq__122382_122612 = G__122632;
chunk__122383_122613 = G__122633;
count__122384_122614 = G__122634;
i__122385_122615 = G__122635;
continue;
} else {
var vec__122407_122636 = cljs.core.first(seq__122382_122630__$1);
var fn_name_122637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__122407_122636,(0),null);
var f_122638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__122407_122636,(1),null);
var fn_sym_122639 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_122637));
var env_122640 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_122641 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_122640,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_122611,fn_sym_122639], null));
var multi_method_122642 = cljs.core.deref(multi_method_var_122641);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_122642,atype,f_122638);


var G__122647 = cljs.core.next(seq__122382_122630__$1);
var G__122648 = null;
var G__122649 = (0);
var G__122650 = (0);
seq__122382_122612 = G__122647;
chunk__122383_122613 = G__122648;
count__122384_122614 = G__122649;
i__122385_122615 = G__122650;
continue;
}
} else {
}
}
break;
}


var G__122652 = cljs.core.next(seq__122275__$1);
var G__122653 = null;
var G__122654 = (0);
var G__122655 = (0);
seq__122275 = G__122652;
chunk__122277 = G__122653;
count__122278 = G__122654;
i__122279 = G__122655;
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
(sci.impl.protocols.extend.cljs$lang$applyTo = (function (seq122271){
var G__122272 = cljs.core.first(seq122271);
var seq122271__$1 = cljs.core.next(seq122271);
var G__122273 = cljs.core.first(seq122271__$1);
var seq122271__$2 = cljs.core.next(seq122271__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__122272,G__122273,seq122271__$2);
}));

sci.impl.protocols.extend_type = (function sci$impl$protocols$extend_type(var_args){
var args__4742__auto__ = [];
var len__4736__auto___122659 = arguments.length;
var i__4737__auto___122660 = (0);
while(true){
if((i__4737__auto___122660 < len__4736__auto___122659)){
args__4742__auto__.push((arguments[i__4737__auto___122660]));

var G__122663 = (i__4737__auto___122660 + (1));
i__4737__auto___122660 = G__122663;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,type,proto_PLUS_meths){
var proto_PLUS_meths__$1 = sci.impl.utils.split_when((function (p1__122415_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__122415_SHARP_)));
}),proto_PLUS_meths);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__122429){
var vec__122430 = p__122429;
var seq__122431 = cljs.core.seq(vec__122430);
var first__122432 = cljs.core.first(seq__122431);
var seq__122431__$1 = cljs.core.next(seq__122431);
var proto = first__122432;
var meths = seq__122431__$1;
var protocol_var = (function (){var fexpr__122436 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__122436.cljs$core$IFn$_invoke$arity$2 ? fexpr__122436.cljs$core$IFn$_invoke$arity$2(ctx,proto) : fexpr__122436.call(null,ctx,proto));
})();
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(protocol_var));
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var fq_meth_name = (function (p1__122417_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns,p1__122417_SHARP_);
});
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (meth){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq_meth_name(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(meth))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,cljs.core.second(meth),null,(1),null)),cljs.core.nnext(meth)], 0))));
}),meths))));
}),proto_PLUS_meths__$1))));
}));

(sci.impl.protocols.extend_type.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_type.cljs$lang$applyTo = (function (seq122423){
var G__122424 = cljs.core.first(seq122423);
var seq122423__$1 = cljs.core.next(seq122423);
var G__122425 = cljs.core.first(seq122423__$1);
var seq122423__$2 = cljs.core.next(seq122423__$1);
var G__122426 = cljs.core.first(seq122423__$2);
var seq122423__$3 = cljs.core.next(seq122423__$2);
var G__122427 = cljs.core.first(seq122423__$3);
var seq122423__$4 = cljs.core.next(seq122423__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__122424,G__122425,G__122426,G__122427,seq122423__$4);
}));

sci.impl.protocols.reify = (function sci$impl$protocols$reify(var_args){
var args__4742__auto__ = [];
var len__4736__auto___122683 = arguments.length;
var i__4737__auto___122684 = (0);
while(true){
if((i__4737__auto___122684 < len__4736__auto___122683)){
args__4742__auto__.push((arguments[i__4737__auto___122684]));

var G__122686 = (i__4737__auto___122684 + (1));
i__4737__auto___122684 = G__122686;
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
(sci.impl.protocols.reify.cljs$lang$applyTo = (function (seq122438){
var G__122439 = cljs.core.first(seq122438);
var seq122438__$1 = cljs.core.next(seq122438);
var G__122440 = cljs.core.first(seq122438__$1);
var seq122438__$2 = cljs.core.next(seq122438__$1);
var G__122441 = cljs.core.first(seq122438__$2);
var seq122438__$3 = cljs.core.next(seq122438__$2);
var G__122442 = cljs.core.first(seq122438__$3);
var seq122438__$4 = cljs.core.next(seq122438__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__122439,G__122440,G__122441,G__122442,seq122438__$4);
}));

sci.impl.protocols.satisfies_QMARK_ = (function sci$impl$protocols$satisfies_QMARK_(protocol,obj){
return cljs.core.boolean$(cljs.core.some((function (p1__122450_SHARP_){
return cljs.core.get_method(p1__122450_SHARP_,sci.impl.types.type_impl(obj));
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});
/**
 * Returns true if atype extends protocol
 */
sci.impl.protocols.extends_QMARK_ = (function sci$impl$protocols$extends_QMARK_(protocol,atype){
return cljs.core.boolean$(cljs.core.some((function (p1__122452_SHARP_){
return cljs.core.get_method(p1__122452_SHARP_,atype);
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});

//# sourceMappingURL=sci.impl.protocols.js.map
