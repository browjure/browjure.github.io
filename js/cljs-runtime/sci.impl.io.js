goog.provide('sci.impl.io');
sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__121443 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__121444 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__121444);

try{var G__121446 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__121446);

return G__121446;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__121443);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__121449 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__121450 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__121450);

try{var G__121452 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__121452);

return G__121452;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__121449);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__121456 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__121457 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__121457);

try{var G__121458 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__121458);

return G__121458;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__121456);
}})();
sci.impl.io.print_meta = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),false);
sci.impl.io.print_length = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),null);
sci.impl.io.print_level = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),null);
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__4742__auto__ = [];
var len__4736__auto___121596 = arguments.length;
var i__4737__auto___121597 = (0);
while(true){
if((i__4737__auto___121597 < len__4736__auto___121596)){
args__4742__auto__.push((arguments[i__4737__auto___121597]));

var G__121598 = (i__4737__auto___121597 + (1));
i__4737__auto___121597 = G__121598;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__121470 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__121471 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__121472 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__121473 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__121474 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__121475 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__121473);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__121474);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__121475);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs));
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__121472);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__121471);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__121470);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq121466){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq121466));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
return (sci.impl.io.println.cljs$core$IFn$_invoke$arity$0 ? sci.impl.io.println.cljs$core$IFn$_invoke$arity$0() : sci.impl.io.println.call(null));
});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___121599 = arguments.length;
var i__4737__auto___121600 = (0);
while(true){
if((i__4737__auto___121600 < len__4736__auto___121599)){
args__4742__auto__.push((arguments[i__4737__auto___121600]));

var G__121602 = (i__4737__auto___121600 + (1));
i__4737__auto___121600 = G__121602;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__121499 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__121500 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__121501 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__121502 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__121503 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__121504 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__121502);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__121503);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__121504);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__121501);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__121500);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__121499);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq121488){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq121488));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___121604 = arguments.length;
var i__4737__auto___121605 = (0);
while(true){
if((i__4737__auto___121605 < len__4736__auto___121604)){
args__4742__auto__.push((arguments[i__4737__auto___121605]));

var G__121606 = (i__4737__auto___121605 + (1));
i__4737__auto___121605 = G__121606;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__121513 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__121514 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__121515 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__121516 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__121517 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__121518 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__121516);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__121517);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__121518);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs));
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__121515);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__121514);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__121513);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq121509){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq121509));
}));

/**
 * pr to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___121617 = arguments.length;
var i__4737__auto___121618 = (0);
while(true){
if((i__4737__auto___121618 < len__4736__auto___121617)){
args__4742__auto__.push((arguments[i__4737__auto___121618]));

var G__121619 = (i__4737__auto___121618 + (1));
i__4737__auto___121618 = G__121619;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__121525 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__121526 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__121527 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__121528 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__121529 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__121530 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__121528);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__121529);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__121530);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__121527);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__121526);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__121525);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq121522){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq121522));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__4742__auto__ = [];
var len__4736__auto___121633 = arguments.length;
var i__4737__auto___121634 = (0);
while(true){
if((i__4737__auto___121634 < len__4736__auto___121633)){
args__4742__auto__.push((arguments[i__4737__auto___121634]));

var G__121635 = (i__4737__auto___121634 + (1));
i__4737__auto___121634 = G__121635;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__121534 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__121535 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR__temp_val__121536 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__121537 = cljs.core.deref(sci.impl.io.print_level);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__121536);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__121537);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs));
}finally {(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__121535);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__121534);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq121533){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq121533));
}));

/**
 * pr to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___121646 = arguments.length;
var i__4737__auto___121647 = (0);
while(true){
if((i__4737__auto___121647 < len__4736__auto___121646)){
args__4742__auto__.push((arguments[i__4737__auto___121647]));

var G__121652 = (i__4737__auto___121647 + (1));
i__4737__auto___121647 = G__121652;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__121554 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__121555 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__121556 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__121557 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__121558 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__121559 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__121557);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__121558);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__121559);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__121556);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__121555);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__121554);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq121546){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq121546));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__4742__auto__ = [];
var len__4736__auto___121658 = arguments.length;
var i__4737__auto___121659 = (0);
while(true){
if((i__4737__auto___121659 < len__4736__auto___121658)){
args__4742__auto__.push((arguments[i__4737__auto___121659]));

var G__121660 = (i__4737__auto___121659 + (1));
i__4737__auto___121659 = G__121660;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__121566 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__121567 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__121568 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__121569 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__121570 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__121571 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__121569);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__121570);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__121571);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println_str,objs));
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__121568);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__121567);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__121566);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq121564){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq121564));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___121673 = arguments.length;
var i__4737__auto___121674 = (0);
while(true){
if((i__4737__auto___121674 < len__4736__auto___121673)){
args__4742__auto__.push((arguments[i__4737__auto___121674]));

var G__121675 = (i__4737__auto___121674 + (1));
i__4737__auto___121674 = G__121675;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__121572__auto__","s__121572__auto__",863897546,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*out*","cljs.core/*out*",-1813565621,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__121572__auto__","s__121572__auto__",863897546,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__121572__auto__","s__121572__auto__",863897546,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq121578){
var G__121579 = cljs.core.first(seq121578);
var seq121578__$1 = cljs.core.next(seq121578);
var G__121580 = cljs.core.first(seq121578__$1);
var seq121578__$2 = cljs.core.next(seq121578__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__121579,G__121580,seq121578__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
