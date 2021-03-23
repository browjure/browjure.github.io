goog.provide('sci.impl.reify');
sci.impl.reify.reify = (function sci$impl$reify$reify(var_args){
var args__4742__auto__ = [];
var len__4736__auto___68374 = arguments.length;
var i__4737__auto___68375 = (0);
while(true){
if((i__4737__auto___68375 < len__4736__auto___68374)){
args__4742__auto__.push((arguments[i__4737__auto___68375]));

var G__68382 = (i__4737__auto___68375 + (1));
i__4737__auto___68375 = G__68382;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return sci.impl.reify.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(sci.impl.reify.reify.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,_ctx,args){
var classes__GT_methods = sci.impl.utils.split_when(cljs.core.symbol_QMARK_,args);
var classes__GT_methods__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__68331){
var vec__68334 = p__68331;
var seq__68335 = cljs.core.seq(vec__68334);
var first__68336 = cljs.core.first(seq__68335);
var seq__68335__$1 = cljs.core.next(seq__68335);
var class$ = first__68336;
var methods$ = seq__68335__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (meth){
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first(meth),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.second(meth),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.nnext(meth)], 0)))),null,(1),null))))));
}),methods$))], null);
}),classes__GT_methods));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","reify*","cljs.core/reify*",1256833160,null),null,(1),null)),(new cljs.core.List(null,classes__GT_methods__$1,null,(1),null)))));
}));

(sci.impl.reify.reify.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.reify.reify.cljs$lang$applyTo = (function (seq68314){
var G__68315 = cljs.core.first(seq68314);
var seq68314__$1 = cljs.core.next(seq68314);
var G__68316 = cljs.core.first(seq68314__$1);
var seq68314__$2 = cljs.core.next(seq68314__$1);
var G__68317 = cljs.core.first(seq68314__$2);
var seq68314__$3 = cljs.core.next(seq68314__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__68315,G__68316,G__68317,seq68314__$3);
}));

sci.impl.reify.reify_STAR_ = (function sci$impl$reify$reify_STAR_(_ctx,classes__GT_methods){
var vec__68367 = cljs.core.first(classes__GT_methods);
var interface$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68367,(0),null);
var methods$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68367,(1),null);
return sci.impl.types.__GT_Reified(interface$,methods$);
});

//# sourceMappingURL=sci.impl.reify.js.map
