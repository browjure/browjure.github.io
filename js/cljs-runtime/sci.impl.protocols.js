goog.provide('sci.impl.protocols');
sci.impl.protocols.defprotocol = (function sci$impl$protocols$defprotocol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___66671 = arguments.length;
var i__4737__auto___66672 = (0);
while(true){
if((i__4737__auto___66672 < len__4736__auto___66671)){
args__4742__auto__.push((arguments[i__4737__auto___66672]));

var G__66673 = (i__4737__auto___66672 + (1));
i__4737__auto___66672 = G__66673;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,_ctx,protocol_name,signatures){
var vec__66290 = (function (){var sig = cljs.core.first(signatures);
if(typeof sig === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig,cljs.core.rest(signatures)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66290,(0),null);
var signatures__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66290,(1),null);
var vec__66293 = (function (){var opt = cljs.core.first(signatures__$1);
if((opt instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([opt,cljs.core.second(signatures__$1)]),cljs.core.nnext(signatures__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures__$1], null);
}
})();
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66293,(0),null);
var signatures__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66293,(1),null);
var current_ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.current_ns_name());
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(protocol_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),docstring], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"ns","ns",441598760),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*ns*","cljs.core/*ns*",1155497085,null),null,(1),null))], 0))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__66319){
var vec__66320 = p__66319;
var seq__66321 = cljs.core.seq(vec__66320);
var first__66322 = cljs.core.first(seq__66321);
var seq__66321__$1 = cljs.core.next(seq__66321);
var method_name = first__66322;
var ___$2 = seq__66321__$1;
var fq_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name));
var impls = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmulti","cljs.core/defmulti",723984225,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__66247__auto__","x__66247__auto__",1014558984,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__66248__auto__","args__66248__auto__",-1630694700,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"methods__66249__auto__","methods__66249__auto__",380406508,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-reified-methods","cljs.core/-reified-methods",-1833109469,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__66247__auto__","x__66247__auto__",1014558984,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"methods__66249__auto__","methods__66249__auto__",380406508,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__66247__auto__","x__66247__auto__",1014558984,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__66248__auto__","args__66248__auto__",-1630694700,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
var impls__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(impls,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__66253__auto__","x__66253__auto__",-1226538516,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__66254__auto__","args__66254__auto__",880266899,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"meta__66255__auto__","meta__66255__auto__",956967948,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__66253__auto__","x__66253__auto__",-1226538516,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"method__66256__auto__","method__66256__auto__",1346322343,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meta__66255__auto__","meta__66255__auto__",956967948,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__66256__auto__","method__66256__auto__",1346322343,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__66256__auto__","method__66256__auto__",1346322343,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__66253__auto__","x__66253__auto__",-1226538516,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__66254__auto__","args__66254__auto__",880266899,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No implementation of method: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_name),null,(1),null)),(new cljs.core.List(null," of protocol: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," found for: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__66253__auto__","x__66253__auto__",-1226538516,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))):impls);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),impls__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","update","cljs.core/update",-908565906,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),signatures__$2)], 0))));
return expansion;
}));

(sci.impl.protocols.defprotocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.defprotocol.cljs$lang$applyTo = (function (seq66267){
var G__66268 = cljs.core.first(seq66267);
var seq66267__$1 = cljs.core.next(seq66267);
var G__66269 = cljs.core.first(seq66267__$1);
var seq66267__$2 = cljs.core.next(seq66267__$1);
var G__66270 = cljs.core.first(seq66267__$2);
var seq66267__$3 = cljs.core.next(seq66267__$2);
var G__66271 = cljs.core.first(seq66267__$3);
var seq66267__$4 = cljs.core.next(seq66267__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66268,G__66269,G__66270,G__66271,seq66267__$4);
}));

sci.impl.protocols.extend_protocol = (function sci$impl$protocols$extend_protocol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___66693 = arguments.length;
var i__4737__auto___66694 = (0);
while(true){
if((i__4737__auto___66694 < len__4736__auto___66693)){
args__4742__auto__.push((arguments[i__4737__auto___66694]));

var G__66695 = (i__4737__auto___66694 + (1));
i__4737__auto___66694 = G__66695;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,protocol_name,impls){
var impls__$1 = sci.impl.utils.split_when((function (p1__66366_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__66366_SHARP_)));
}),impls);
var protocol_var = (function (){var fexpr__66396 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__66396.cljs$core$IFn$_invoke$arity$2 ? fexpr__66396.cljs$core$IFn$_invoke$arity$2(ctx,protocol_name) : fexpr__66396.call(null,ctx,protocol_name));
})();
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(protocol_var));
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var fq_meth_name = (function (p1__66369_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns,p1__66369_SHARP_);
});
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__66399){
var vec__66400 = p__66399;
var seq__66401 = cljs.core.seq(vec__66400);
var first__66402 = cljs.core.first(seq__66401);
var seq__66401__$1 = cljs.core.next(seq__66401);
var type = first__66402;
var meths = seq__66401__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (meth){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq_meth_name(cljs.core.name(cljs.core.first(meth))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,cljs.core.second(meth),null,(1),null)),cljs.core.nnext(meth)], 0))));
}),meths))));
}),impls__$1))));
return expansion;
}));

(sci.impl.protocols.extend_protocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_protocol.cljs$lang$applyTo = (function (seq66376){
var G__66377 = cljs.core.first(seq66376);
var seq66376__$1 = cljs.core.next(seq66376);
var G__66378 = cljs.core.first(seq66376__$1);
var seq66376__$2 = cljs.core.next(seq66376__$1);
var G__66379 = cljs.core.first(seq66376__$2);
var seq66376__$3 = cljs.core.next(seq66376__$2);
var G__66380 = cljs.core.first(seq66376__$3);
var seq66376__$4 = cljs.core.next(seq66376__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66377,G__66378,G__66379,G__66380,seq66376__$4);
}));

sci.impl.protocols.extend = (function sci$impl$protocols$extend(var_args){
var args__4742__auto__ = [];
var len__4736__auto___66702 = arguments.length;
var i__4737__auto___66703 = (0);
while(true){
if((i__4737__auto___66703 < len__4736__auto___66702)){
args__4742__auto__.push((arguments[i__4737__auto___66703]));

var G__66705 = (i__4737__auto___66703 + (1));
i__4737__auto___66703 = G__66705;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,atype,proto_PLUS_mmaps){
var seq__66416 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),proto_PLUS_mmaps));
var chunk__66418 = null;
var count__66419 = (0);
var i__66420 = (0);
while(true){
if((i__66420 < count__66419)){
var vec__66535 = chunk__66418.cljs$core$IIndexed$_nth$arity$2(null,i__66420);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66535,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66535,(1),null);
var proto_ns_66709 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_66710 = sci.impl.vars.getName(proto_ns_66709);
var seq__66538_66711 = cljs.core.seq(mmap);
var chunk__66539_66712 = null;
var count__66540_66713 = (0);
var i__66541_66714 = (0);
while(true){
if((i__66541_66714 < count__66540_66713)){
var vec__66554_66716 = chunk__66539_66712.cljs$core$IIndexed$_nth$arity$2(null,i__66541_66714);
var fn_name_66717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66554_66716,(0),null);
var f_66718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66554_66716,(1),null);
var fn_sym_66720 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_66717));
var env_66721 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_66722 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_66721,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_66710,fn_sym_66720], null));
var multi_method_66723 = cljs.core.deref(multi_method_var_66722);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_66723,atype,f_66718);


var G__66727 = seq__66538_66711;
var G__66728 = chunk__66539_66712;
var G__66729 = count__66540_66713;
var G__66730 = (i__66541_66714 + (1));
seq__66538_66711 = G__66727;
chunk__66539_66712 = G__66728;
count__66540_66713 = G__66729;
i__66541_66714 = G__66730;
continue;
} else {
var temp__5753__auto___66733 = cljs.core.seq(seq__66538_66711);
if(temp__5753__auto___66733){
var seq__66538_66735__$1 = temp__5753__auto___66733;
if(cljs.core.chunked_seq_QMARK_(seq__66538_66735__$1)){
var c__4556__auto___66736 = cljs.core.chunk_first(seq__66538_66735__$1);
var G__66738 = cljs.core.chunk_rest(seq__66538_66735__$1);
var G__66739 = c__4556__auto___66736;
var G__66740 = cljs.core.count(c__4556__auto___66736);
var G__66741 = (0);
seq__66538_66711 = G__66738;
chunk__66539_66712 = G__66739;
count__66540_66713 = G__66740;
i__66541_66714 = G__66741;
continue;
} else {
var vec__66558_66742 = cljs.core.first(seq__66538_66735__$1);
var fn_name_66743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66558_66742,(0),null);
var f_66744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66558_66742,(1),null);
var fn_sym_66745 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_66743));
var env_66746 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_66747 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_66746,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_66710,fn_sym_66745], null));
var multi_method_66748 = cljs.core.deref(multi_method_var_66747);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_66748,atype,f_66744);


var G__66749 = cljs.core.next(seq__66538_66735__$1);
var G__66750 = null;
var G__66751 = (0);
var G__66752 = (0);
seq__66538_66711 = G__66749;
chunk__66539_66712 = G__66750;
count__66540_66713 = G__66751;
i__66541_66714 = G__66752;
continue;
}
} else {
}
}
break;
}


var G__66753 = seq__66416;
var G__66754 = chunk__66418;
var G__66755 = count__66419;
var G__66756 = (i__66420 + (1));
seq__66416 = G__66753;
chunk__66418 = G__66754;
count__66419 = G__66755;
i__66420 = G__66756;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__66416);
if(temp__5753__auto__){
var seq__66416__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66416__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__66416__$1);
var G__66757 = cljs.core.chunk_rest(seq__66416__$1);
var G__66758 = c__4556__auto__;
var G__66759 = cljs.core.count(c__4556__auto__);
var G__66760 = (0);
seq__66416 = G__66757;
chunk__66418 = G__66758;
count__66419 = G__66759;
i__66420 = G__66760;
continue;
} else {
var vec__66562 = cljs.core.first(seq__66416__$1);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66562,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66562,(1),null);
var proto_ns_66765 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_66766 = sci.impl.vars.getName(proto_ns_66765);
var seq__66566_66768 = cljs.core.seq(mmap);
var chunk__66567_66769 = null;
var count__66568_66770 = (0);
var i__66569_66771 = (0);
while(true){
if((i__66569_66771 < count__66568_66770)){
var vec__66587_66772 = chunk__66567_66769.cljs$core$IIndexed$_nth$arity$2(null,i__66569_66771);
var fn_name_66773 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66587_66772,(0),null);
var f_66774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66587_66772,(1),null);
var fn_sym_66776 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_66773));
var env_66777 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_66778 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_66777,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_66766,fn_sym_66776], null));
var multi_method_66779 = cljs.core.deref(multi_method_var_66778);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_66779,atype,f_66774);


var G__66780 = seq__66566_66768;
var G__66781 = chunk__66567_66769;
var G__66782 = count__66568_66770;
var G__66783 = (i__66569_66771 + (1));
seq__66566_66768 = G__66780;
chunk__66567_66769 = G__66781;
count__66568_66770 = G__66782;
i__66569_66771 = G__66783;
continue;
} else {
var temp__5753__auto___66784__$1 = cljs.core.seq(seq__66566_66768);
if(temp__5753__auto___66784__$1){
var seq__66566_66785__$1 = temp__5753__auto___66784__$1;
if(cljs.core.chunked_seq_QMARK_(seq__66566_66785__$1)){
var c__4556__auto___66786 = cljs.core.chunk_first(seq__66566_66785__$1);
var G__66787 = cljs.core.chunk_rest(seq__66566_66785__$1);
var G__66788 = c__4556__auto___66786;
var G__66789 = cljs.core.count(c__4556__auto___66786);
var G__66790 = (0);
seq__66566_66768 = G__66787;
chunk__66567_66769 = G__66788;
count__66568_66770 = G__66789;
i__66569_66771 = G__66790;
continue;
} else {
var vec__66594_66791 = cljs.core.first(seq__66566_66785__$1);
var fn_name_66792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66594_66791,(0),null);
var f_66793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66594_66791,(1),null);
var fn_sym_66795 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_66792));
var env_66796 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_66798 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_66796,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_66766,fn_sym_66795], null));
var multi_method_66799 = cljs.core.deref(multi_method_var_66798);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_66799,atype,f_66793);


var G__66804 = cljs.core.next(seq__66566_66785__$1);
var G__66805 = null;
var G__66806 = (0);
var G__66807 = (0);
seq__66566_66768 = G__66804;
chunk__66567_66769 = G__66805;
count__66568_66770 = G__66806;
i__66569_66771 = G__66807;
continue;
}
} else {
}
}
break;
}


var G__66808 = cljs.core.next(seq__66416__$1);
var G__66809 = null;
var G__66810 = (0);
var G__66811 = (0);
seq__66416 = G__66808;
chunk__66418 = G__66809;
count__66419 = G__66810;
i__66420 = G__66811;
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
(sci.impl.protocols.extend.cljs$lang$applyTo = (function (seq66409){
var G__66410 = cljs.core.first(seq66409);
var seq66409__$1 = cljs.core.next(seq66409);
var G__66412 = cljs.core.first(seq66409__$1);
var seq66409__$2 = cljs.core.next(seq66409__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66410,G__66412,seq66409__$2);
}));

sci.impl.protocols.extend_type = (function sci$impl$protocols$extend_type(var_args){
var args__4742__auto__ = [];
var len__4736__auto___66815 = arguments.length;
var i__4737__auto___66816 = (0);
while(true){
if((i__4737__auto___66816 < len__4736__auto___66815)){
args__4742__auto__.push((arguments[i__4737__auto___66816]));

var G__66817 = (i__4737__auto___66816 + (1));
i__4737__auto___66816 = G__66817;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,atype,proto_PLUS_meths){
var proto_PLUS_meths__$1 = sci.impl.utils.split_when((function (p1__66605_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__66605_SHARP_)));
}),proto_PLUS_meths);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__66617){
var vec__66618 = p__66617;
var seq__66619 = cljs.core.seq(vec__66618);
var first__66620 = cljs.core.first(seq__66619);
var seq__66619__$1 = cljs.core.next(seq__66619);
var proto = first__66620;
var meths = seq__66619__$1;
var protocol_var = (function (){var fexpr__66621 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__66621.cljs$core$IFn$_invoke$arity$2 ? fexpr__66621.cljs$core$IFn$_invoke$arity$2(ctx,proto) : fexpr__66621.call(null,ctx,proto));
})();
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(protocol_var));
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var fq_meth_name = (function (p1__66606_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns,p1__66606_SHARP_);
});
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (meth){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq_meth_name(cljs.core.name(cljs.core.first(meth))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,atype,null,(1),null)),(new cljs.core.List(null,cljs.core.second(meth),null,(1),null)),cljs.core.nnext(meth)], 0))));
}),meths))));
}),proto_PLUS_meths__$1))));
}));

(sci.impl.protocols.extend_type.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_type.cljs$lang$applyTo = (function (seq66611){
var G__66612 = cljs.core.first(seq66611);
var seq66611__$1 = cljs.core.next(seq66611);
var G__66613 = cljs.core.first(seq66611__$1);
var seq66611__$2 = cljs.core.next(seq66611__$1);
var G__66614 = cljs.core.first(seq66611__$2);
var seq66611__$3 = cljs.core.next(seq66611__$2);
var G__66615 = cljs.core.first(seq66611__$3);
var seq66611__$4 = cljs.core.next(seq66611__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66612,G__66613,G__66614,G__66615,seq66611__$4);
}));

sci.impl.protocols.find_matching_non_default_method = (function sci$impl$protocols$find_matching_non_default_method(protocol,obj){
return cljs.core.boolean$(cljs.core.some((function (p1__66632_SHARP_){
var temp__5753__auto__ = cljs.core.get_method(p1__66632_SHARP_,sci.impl.types.type_impl(obj));
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
var ms = cljs.core.methods$(p1__66632_SHARP_);
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
var pred__66655 = cljs.core._EQ_;
var expr__66656 = p;
if(cljs.core.truth_((pred__66655.cljs$core$IFn$_invoke$arity$2 ? pred__66655.cljs$core$IFn$_invoke$arity$2(cljs.core.IDeref,expr__66656) : pred__66655.call(null,cljs.core.IDeref,expr__66656)))){
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
if(cljs.core.truth_((pred__66655.cljs$core$IFn$_invoke$arity$2 ? pred__66655.cljs$core$IFn$_invoke$arity$2(cljs.core.ISwap,expr__66656) : pred__66655.call(null,cljs.core.ISwap,expr__66656)))){
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
if(cljs.core.truth_((pred__66655.cljs$core$IFn$_invoke$arity$2 ? pred__66655.cljs$core$IFn$_invoke$arity$2(cljs.core.IReset,expr__66656) : pred__66655.call(null,cljs.core.IReset,expr__66656)))){
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__66656)].join('')));
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
if(cljs.core.truth_((((clazz instanceof cljs.core.Symbol))?(function (){var G__66665 = clazz;
var G__66665__$1 = (((G__66665 == null))?null:cljs.core.meta(G__66665));
if((G__66665__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","record","sci.impl/record",-1939193950).cljs$core$IFn$_invoke$arity$1(G__66665__$1);
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
return cljs.core.boolean$(cljs.core.some((function (p1__66667_SHARP_){
return cljs.core.get_method(p1__66667_SHARP_,atype);
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});

//# sourceMappingURL=sci.impl.protocols.js.map
