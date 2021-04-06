goog.provide('sci.impl.protocols');
sci.impl.protocols.defprotocol = (function sci$impl$protocols$defprotocol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___74454 = arguments.length;
var i__4737__auto___74455 = (0);
while(true){
if((i__4737__auto___74455 < len__4736__auto___74454)){
args__4742__auto__.push((arguments[i__4737__auto___74455]));

var G__74456 = (i__4737__auto___74455 + (1));
i__4737__auto___74455 = G__74456;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,_ctx,protocol_name,signatures){
var vec__74172 = (function (){var sig = cljs.core.first(signatures);
if(typeof sig === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig,cljs.core.rest(signatures)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74172,(0),null);
var signatures__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74172,(1),null);
var vec__74175 = (function (){var opt = cljs.core.first(signatures__$1);
if((opt instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([opt,cljs.core.second(signatures__$1)]),cljs.core.nnext(signatures__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures__$1], null);
}
})();
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74175,(0),null);
var signatures__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74175,(1),null);
var current_ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.current_ns_name());
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(protocol_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),docstring], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"ns","ns",441598760),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*ns*","cljs.core/*ns*",1155497085,null),null,(1),null))], 0))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__74191){
var vec__74192 = p__74191;
var seq__74193 = cljs.core.seq(vec__74192);
var first__74194 = cljs.core.first(seq__74193);
var seq__74193__$1 = cljs.core.next(seq__74193);
var method_name = first__74194;
var ___$2 = seq__74193__$1;
var fq_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name));
var impls = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmulti","cljs.core/defmulti",723984225,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__74152__auto__","x__74152__auto__",748699587,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__74153__auto__","args__74153__auto__",1383836701,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"methods__74154__auto__","methods__74154__auto__",-1967163249,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-reified-methods","cljs.core/-reified-methods",-1833109469,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__74152__auto__","x__74152__auto__",748699587,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"methods__74154__auto__","methods__74154__auto__",-1967163249,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__74152__auto__","x__74152__auto__",748699587,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__74153__auto__","args__74153__auto__",1383836701,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
var impls__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(impls,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__74155__auto__","x__74155__auto__",-1278255226,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__74156__auto__","args__74156__auto__",-294163123,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"meta__74157__auto__","meta__74157__auto__",-1933465040,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__74155__auto__","x__74155__auto__",-1278255226,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"method__74158__auto__","method__74158__auto__",1514205863,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meta__74157__auto__","meta__74157__auto__",-1933465040,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__74158__auto__","method__74158__auto__",1514205863,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__74158__auto__","method__74158__auto__",1514205863,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__74155__auto__","x__74155__auto__",-1278255226,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__74156__auto__","args__74156__auto__",-294163123,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No implementation of method: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_name),null,(1),null)),(new cljs.core.List(null," of protocol: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," found for: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__74155__auto__","x__74155__auto__",-1278255226,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))):impls);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),impls__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","update","cljs.core/update",-908565906,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),signatures__$2)], 0))));
return expansion;
}));

(sci.impl.protocols.defprotocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.defprotocol.cljs$lang$applyTo = (function (seq74167){
var G__74168 = cljs.core.first(seq74167);
var seq74167__$1 = cljs.core.next(seq74167);
var G__74169 = cljs.core.first(seq74167__$1);
var seq74167__$2 = cljs.core.next(seq74167__$1);
var G__74170 = cljs.core.first(seq74167__$2);
var seq74167__$3 = cljs.core.next(seq74167__$2);
var G__74171 = cljs.core.first(seq74167__$3);
var seq74167__$4 = cljs.core.next(seq74167__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74168,G__74169,G__74170,G__74171,seq74167__$4);
}));

sci.impl.protocols.extend_protocol = (function sci$impl$protocols$extend_protocol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___74518 = arguments.length;
var i__4737__auto___74521 = (0);
while(true){
if((i__4737__auto___74521 < len__4736__auto___74518)){
args__4742__auto__.push((arguments[i__4737__auto___74521]));

var G__74522 = (i__4737__auto___74521 + (1));
i__4737__auto___74521 = G__74522;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,protocol_name,impls){
var impls__$1 = sci.impl.utils.split_when((function (p1__74222_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__74222_SHARP_)));
}),impls);
var protocol_var = (function (){var fexpr__74236 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__74236.cljs$core$IFn$_invoke$arity$2 ? fexpr__74236.cljs$core$IFn$_invoke$arity$2(ctx,protocol_name) : fexpr__74236.call(null,ctx,protocol_name));
})();
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(protocol_var));
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var fq_meth_name = (function (p1__74223_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns,p1__74223_SHARP_);
});
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__74238){
var vec__74239 = p__74238;
var seq__74240 = cljs.core.seq(vec__74239);
var first__74241 = cljs.core.first(seq__74240);
var seq__74240__$1 = cljs.core.next(seq__74240);
var type = first__74241;
var meths = seq__74240__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (meth){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq_meth_name(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(meth))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,cljs.core.second(meth),null,(1),null)),cljs.core.nnext(meth)], 0))));
}),meths))));
}),impls__$1))));
return expansion;
}));

(sci.impl.protocols.extend_protocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_protocol.cljs$lang$applyTo = (function (seq74225){
var G__74226 = cljs.core.first(seq74225);
var seq74225__$1 = cljs.core.next(seq74225);
var G__74227 = cljs.core.first(seq74225__$1);
var seq74225__$2 = cljs.core.next(seq74225__$1);
var G__74228 = cljs.core.first(seq74225__$2);
var seq74225__$3 = cljs.core.next(seq74225__$2);
var G__74229 = cljs.core.first(seq74225__$3);
var seq74225__$4 = cljs.core.next(seq74225__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74226,G__74227,G__74228,G__74229,seq74225__$4);
}));

sci.impl.protocols.extend = (function sci$impl$protocols$extend(var_args){
var args__4742__auto__ = [];
var len__4736__auto___74550 = arguments.length;
var i__4737__auto___74551 = (0);
while(true){
if((i__4737__auto___74551 < len__4736__auto___74550)){
args__4742__auto__.push((arguments[i__4737__auto___74551]));

var G__74556 = (i__4737__auto___74551 + (1));
i__4737__auto___74551 = G__74556;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,atype,proto_PLUS_mmaps){
var seq__74253 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),proto_PLUS_mmaps));
var chunk__74255 = null;
var count__74256 = (0);
var i__74257 = (0);
while(true){
if((i__74257 < count__74256)){
var vec__74324 = chunk__74255.cljs$core$IIndexed$_nth$arity$2(null,i__74257);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74324,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74324,(1),null);
var proto_ns_74566 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_74567 = sci.impl.vars.getName(proto_ns_74566);
var seq__74328_74568 = cljs.core.seq(mmap);
var chunk__74329_74569 = null;
var count__74330_74570 = (0);
var i__74331_74571 = (0);
while(true){
if((i__74331_74571 < count__74330_74570)){
var vec__74346_74572 = chunk__74329_74569.cljs$core$IIndexed$_nth$arity$2(null,i__74331_74571);
var fn_name_74573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74346_74572,(0),null);
var f_74574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74346_74572,(1),null);
var fn_sym_74575 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_74573));
var env_74576 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_74577 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_74576,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_74567,fn_sym_74575], null));
var multi_method_74578 = cljs.core.deref(multi_method_var_74577);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_74578,atype,f_74574);


var G__74580 = seq__74328_74568;
var G__74581 = chunk__74329_74569;
var G__74582 = count__74330_74570;
var G__74583 = (i__74331_74571 + (1));
seq__74328_74568 = G__74580;
chunk__74329_74569 = G__74581;
count__74330_74570 = G__74582;
i__74331_74571 = G__74583;
continue;
} else {
var temp__5753__auto___74584 = cljs.core.seq(seq__74328_74568);
if(temp__5753__auto___74584){
var seq__74328_74585__$1 = temp__5753__auto___74584;
if(cljs.core.chunked_seq_QMARK_(seq__74328_74585__$1)){
var c__4556__auto___74586 = cljs.core.chunk_first(seq__74328_74585__$1);
var G__74587 = cljs.core.chunk_rest(seq__74328_74585__$1);
var G__74588 = c__4556__auto___74586;
var G__74589 = cljs.core.count(c__4556__auto___74586);
var G__74590 = (0);
seq__74328_74568 = G__74587;
chunk__74329_74569 = G__74588;
count__74330_74570 = G__74589;
i__74331_74571 = G__74590;
continue;
} else {
var vec__74351_74591 = cljs.core.first(seq__74328_74585__$1);
var fn_name_74592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74351_74591,(0),null);
var f_74593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74351_74591,(1),null);
var fn_sym_74596 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_74592));
var env_74597 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_74598 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_74597,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_74567,fn_sym_74596], null));
var multi_method_74599 = cljs.core.deref(multi_method_var_74598);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_74599,atype,f_74593);


var G__74602 = cljs.core.next(seq__74328_74585__$1);
var G__74603 = null;
var G__74604 = (0);
var G__74605 = (0);
seq__74328_74568 = G__74602;
chunk__74329_74569 = G__74603;
count__74330_74570 = G__74604;
i__74331_74571 = G__74605;
continue;
}
} else {
}
}
break;
}


var G__74607 = seq__74253;
var G__74608 = chunk__74255;
var G__74609 = count__74256;
var G__74610 = (i__74257 + (1));
seq__74253 = G__74607;
chunk__74255 = G__74608;
count__74256 = G__74609;
i__74257 = G__74610;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__74253);
if(temp__5753__auto__){
var seq__74253__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__74253__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__74253__$1);
var G__74616 = cljs.core.chunk_rest(seq__74253__$1);
var G__74617 = c__4556__auto__;
var G__74618 = cljs.core.count(c__4556__auto__);
var G__74619 = (0);
seq__74253 = G__74616;
chunk__74255 = G__74617;
count__74256 = G__74618;
i__74257 = G__74619;
continue;
} else {
var vec__74354 = cljs.core.first(seq__74253__$1);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74354,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74354,(1),null);
var proto_ns_74628 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_74629 = sci.impl.vars.getName(proto_ns_74628);
var seq__74358_74631 = cljs.core.seq(mmap);
var chunk__74359_74632 = null;
var count__74360_74633 = (0);
var i__74361_74634 = (0);
while(true){
if((i__74361_74634 < count__74360_74633)){
var vec__74378_74640 = chunk__74359_74632.cljs$core$IIndexed$_nth$arity$2(null,i__74361_74634);
var fn_name_74641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74378_74640,(0),null);
var f_74642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74378_74640,(1),null);
var fn_sym_74649 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_74641));
var env_74650 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_74651 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_74650,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_74629,fn_sym_74649], null));
var multi_method_74652 = cljs.core.deref(multi_method_var_74651);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_74652,atype,f_74642);


var G__74669 = seq__74358_74631;
var G__74670 = chunk__74359_74632;
var G__74671 = count__74360_74633;
var G__74672 = (i__74361_74634 + (1));
seq__74358_74631 = G__74669;
chunk__74359_74632 = G__74670;
count__74360_74633 = G__74671;
i__74361_74634 = G__74672;
continue;
} else {
var temp__5753__auto___74674__$1 = cljs.core.seq(seq__74358_74631);
if(temp__5753__auto___74674__$1){
var seq__74358_74676__$1 = temp__5753__auto___74674__$1;
if(cljs.core.chunked_seq_QMARK_(seq__74358_74676__$1)){
var c__4556__auto___74678 = cljs.core.chunk_first(seq__74358_74676__$1);
var G__74683 = cljs.core.chunk_rest(seq__74358_74676__$1);
var G__74684 = c__4556__auto___74678;
var G__74685 = cljs.core.count(c__4556__auto___74678);
var G__74686 = (0);
seq__74358_74631 = G__74683;
chunk__74359_74632 = G__74684;
count__74360_74633 = G__74685;
i__74361_74634 = G__74686;
continue;
} else {
var vec__74381_74690 = cljs.core.first(seq__74358_74676__$1);
var fn_name_74691 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74381_74690,(0),null);
var f_74692 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74381_74690,(1),null);
var fn_sym_74693 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_74691));
var env_74694 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_74695 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_74694,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_74629,fn_sym_74693], null));
var multi_method_74696 = cljs.core.deref(multi_method_var_74695);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_74696,atype,f_74692);


var G__74701 = cljs.core.next(seq__74358_74676__$1);
var G__74702 = null;
var G__74703 = (0);
var G__74704 = (0);
seq__74358_74631 = G__74701;
chunk__74359_74632 = G__74702;
count__74360_74633 = G__74703;
i__74361_74634 = G__74704;
continue;
}
} else {
}
}
break;
}


var G__74705 = cljs.core.next(seq__74253__$1);
var G__74706 = null;
var G__74707 = (0);
var G__74708 = (0);
seq__74253 = G__74705;
chunk__74255 = G__74706;
count__74256 = G__74707;
i__74257 = G__74708;
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
(sci.impl.protocols.extend.cljs$lang$applyTo = (function (seq74247){
var G__74248 = cljs.core.first(seq74247);
var seq74247__$1 = cljs.core.next(seq74247);
var G__74249 = cljs.core.first(seq74247__$1);
var seq74247__$2 = cljs.core.next(seq74247__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74248,G__74249,seq74247__$2);
}));

sci.impl.protocols.extend_type = (function sci$impl$protocols$extend_type(var_args){
var args__4742__auto__ = [];
var len__4736__auto___74719 = arguments.length;
var i__4737__auto___74720 = (0);
while(true){
if((i__4737__auto___74720 < len__4736__auto___74719)){
args__4742__auto__.push((arguments[i__4737__auto___74720]));

var G__74721 = (i__4737__auto___74720 + (1));
i__4737__auto___74720 = G__74721;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,type,proto_PLUS_meths){
var proto_PLUS_meths__$1 = sci.impl.utils.split_when((function (p1__74388_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__74388_SHARP_)));
}),proto_PLUS_meths);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__74408){
var vec__74409 = p__74408;
var seq__74410 = cljs.core.seq(vec__74409);
var first__74411 = cljs.core.first(seq__74410);
var seq__74410__$1 = cljs.core.next(seq__74410);
var proto = first__74411;
var meths = seq__74410__$1;
var protocol_var = (function (){var fexpr__74412 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__74412.cljs$core$IFn$_invoke$arity$2 ? fexpr__74412.cljs$core$IFn$_invoke$arity$2(ctx,proto) : fexpr__74412.call(null,ctx,proto));
})();
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(protocol_var));
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var fq_meth_name = (function (p1__74390_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns,p1__74390_SHARP_);
});
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (meth){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq_meth_name(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(meth))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,cljs.core.second(meth),null,(1),null)),cljs.core.nnext(meth)], 0))));
}),meths))));
}),proto_PLUS_meths__$1))));
}));

(sci.impl.protocols.extend_type.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_type.cljs$lang$applyTo = (function (seq74391){
var G__74392 = cljs.core.first(seq74391);
var seq74391__$1 = cljs.core.next(seq74391);
var G__74393 = cljs.core.first(seq74391__$1);
var seq74391__$2 = cljs.core.next(seq74391__$1);
var G__74394 = cljs.core.first(seq74391__$2);
var seq74391__$3 = cljs.core.next(seq74391__$2);
var G__74395 = cljs.core.first(seq74391__$3);
var seq74391__$4 = cljs.core.next(seq74391__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74392,G__74393,G__74394,G__74395,seq74391__$4);
}));

sci.impl.protocols.reify = (function sci$impl$protocols$reify(var_args){
var args__4742__auto__ = [];
var len__4736__auto___74750 = arguments.length;
var i__4737__auto___74751 = (0);
while(true){
if((i__4737__auto___74751 < len__4736__auto___74750)){
args__4742__auto__.push((arguments[i__4737__auto___74751]));

var G__74752 = (i__4737__auto___74751 + (1));
i__4737__auto___74751 = G__74752;
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
(sci.impl.protocols.reify.cljs$lang$applyTo = (function (seq74429){
var G__74430 = cljs.core.first(seq74429);
var seq74429__$1 = cljs.core.next(seq74429);
var G__74432 = cljs.core.first(seq74429__$1);
var seq74429__$2 = cljs.core.next(seq74429__$1);
var G__74433 = cljs.core.first(seq74429__$2);
var seq74429__$3 = cljs.core.next(seq74429__$2);
var G__74434 = cljs.core.first(seq74429__$3);
var seq74429__$4 = cljs.core.next(seq74429__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74430,G__74432,G__74433,G__74434,seq74429__$4);
}));

sci.impl.protocols.satisfies_QMARK_ = (function sci$impl$protocols$satisfies_QMARK_(protocol,obj){
return cljs.core.boolean$(cljs.core.some((function (p1__74447_SHARP_){
return cljs.core.get_method(p1__74447_SHARP_,sci.impl.types.type_impl(obj));
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});
/**
 * Returns true if atype extends protocol
 */
sci.impl.protocols.extends_QMARK_ = (function sci$impl$protocols$extends_QMARK_(protocol,atype){
return cljs.core.boolean$(cljs.core.some((function (p1__74448_SHARP_){
return cljs.core.get_method(p1__74448_SHARP_,atype);
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});

//# sourceMappingURL=sci.impl.protocols.js.map
