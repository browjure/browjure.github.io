goog.provide('sci.impl.reify');
sci.impl.reify.reify = (function sci$impl$reify$reify(var_args){
var args__4742__auto__ = [];
var len__4736__auto___66285 = arguments.length;
var i__4737__auto___66286 = (0);
while(true){
if((i__4737__auto___66286 < len__4736__auto___66285)){
args__4742__auto__.push((arguments[i__4737__auto___66286]));

var G__66289 = (i__4737__auto___66286 + (1));
i__4737__auto___66286 = G__66289;
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
var classes__GT_methods__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__66225){
var vec__66226 = p__66225;
var seq__66227 = cljs.core.seq(vec__66226);
var first__66228 = cljs.core.first(seq__66227);
var seq__66227__$1 = cljs.core.next(seq__66227);
var class$ = first__66228;
var methods$ = seq__66227__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (meth){
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first(meth),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.second(meth),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.nnext(meth)], 0)))),null,(1),null))))));
}),methods$))], null);
}),classes__GT_methods));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","reify*","cljs.core/reify*",1256833160,null),null,(1),null)),(new cljs.core.List(null,classes__GT_methods__$1,null,(1),null)))));
}));

(sci.impl.reify.reify.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.reify.reify.cljs$lang$applyTo = (function (seq66205){
var G__66206 = cljs.core.first(seq66205);
var seq66205__$1 = cljs.core.next(seq66205);
var G__66207 = cljs.core.first(seq66205__$1);
var seq66205__$2 = cljs.core.next(seq66205__$1);
var G__66208 = cljs.core.first(seq66205__$2);
var seq66205__$3 = cljs.core.next(seq66205__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66206,G__66207,G__66208,seq66205__$3);
}));

sci.impl.reify.reify_STAR_ = (function sci$impl$reify$reify_STAR_(_ctx,classes__GT_methods){
var vec__66276 = cljs.core.first(classes__GT_methods);
var interface$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66276,(0),null);
var methods$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66276,(1),null);
return sci.impl.types.__GT_Reified(interface$,methods$);
});

//# sourceMappingURL=sci.impl.reify.js.map
