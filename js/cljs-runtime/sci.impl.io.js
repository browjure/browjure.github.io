goog.provide('sci.impl.io');
sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__64428 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__64429 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__64429);

try{var G__64434 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__64434);

return G__64434;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__64428);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__64436 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__64437 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__64437);

try{var G__64440 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__64440);

return G__64440;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__64436);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__64447 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__64448 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__64448);

try{var G__64450 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__64450);

return G__64450;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__64447);
}})();
sci.impl.io.print_meta = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),false);
sci.impl.io.print_length = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),null);
sci.impl.io.print_level = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),null);
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64688 = arguments.length;
var i__4737__auto___64689 = (0);
while(true){
if((i__4737__auto___64689 < len__4736__auto___64688)){
args__4742__auto__.push((arguments[i__4737__auto___64689]));

var G__64690 = (i__4737__auto___64689 + (1));
i__4737__auto___64689 = G__64690;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__64463 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__64464 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__64465 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__64466 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__64467 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__64468 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__64466);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__64467);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__64468);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs));
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__64465);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__64464);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__64463);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq64452){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64452));
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
var len__4736__auto___64696 = arguments.length;
var i__4737__auto___64697 = (0);
while(true){
if((i__4737__auto___64697 < len__4736__auto___64696)){
args__4742__auto__.push((arguments[i__4737__auto___64697]));

var G__64698 = (i__4737__auto___64697 + (1));
i__4737__auto___64697 = G__64698;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__64478 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__64479 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__64480 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__64481 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__64482 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__64483 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__64481);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__64482);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__64483);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__64480);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__64479);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__64478);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq64473){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64473));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64702 = arguments.length;
var i__4737__auto___64703 = (0);
while(true){
if((i__4737__auto___64703 < len__4736__auto___64702)){
args__4742__auto__.push((arguments[i__4737__auto___64703]));

var G__64704 = (i__4737__auto___64703 + (1));
i__4737__auto___64703 = G__64704;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__64499 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__64500 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__64501 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__64502 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__64503 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__64504 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__64502);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__64503);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__64504);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs));
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__64501);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__64500);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__64499);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq64492){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64492));
}));

/**
 * pr to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64705 = arguments.length;
var i__4737__auto___64706 = (0);
while(true){
if((i__4737__auto___64706 < len__4736__auto___64705)){
args__4742__auto__.push((arguments[i__4737__auto___64706]));

var G__64707 = (i__4737__auto___64706 + (1));
i__4737__auto___64706 = G__64707;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__64528 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__64529 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__64530 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__64531 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__64532 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__64533 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__64531);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__64532);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__64533);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__64530);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__64529);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__64528);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq64513){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64513));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64719 = arguments.length;
var i__4737__auto___64721 = (0);
while(true){
if((i__4737__auto___64721 < len__4736__auto___64719)){
args__4742__auto__.push((arguments[i__4737__auto___64721]));

var G__64727 = (i__4737__auto___64721 + (1));
i__4737__auto___64721 = G__64727;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__64560 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__64562 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR__temp_val__64563 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__64564 = cljs.core.deref(sci.impl.io.print_level);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__64563);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__64564);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs));
}finally {(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__64562);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__64560);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq64546){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64546));
}));

/**
 * pr to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64751 = arguments.length;
var i__4737__auto___64752 = (0);
while(true){
if((i__4737__auto___64752 < len__4736__auto___64751)){
args__4742__auto__.push((arguments[i__4737__auto___64752]));

var G__64753 = (i__4737__auto___64752 + (1));
i__4737__auto___64752 = G__64753;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__64591 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__64592 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__64593 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__64594 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__64595 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__64596 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__64594);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__64595);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__64596);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__64593);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__64592);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__64591);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq64577){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64577));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64765 = arguments.length;
var i__4737__auto___64766 = (0);
while(true){
if((i__4737__auto___64766 < len__4736__auto___64765)){
args__4742__auto__.push((arguments[i__4737__auto___64766]));

var G__64767 = (i__4737__auto___64766 + (1));
i__4737__auto___64766 = G__64767;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__64618 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__64619 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__64620 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__64621 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__64622 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__64623 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__64621);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__64622);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__64623);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println_str,objs));
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__64620);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__64619);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__64618);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq64609){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64609));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64784 = arguments.length;
var i__4737__auto___64785 = (0);
while(true){
if((i__4737__auto___64785 < len__4736__auto___64784)){
args__4742__auto__.push((arguments[i__4737__auto___64785]));

var G__64786 = (i__4737__auto___64785 + (1));
i__4737__auto___64785 = G__64786;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__64632__auto__","s__64632__auto__",-161089566,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*out*","cljs.core/*out*",-1813565621,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__64632__auto__","s__64632__auto__",-161089566,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__64632__auto__","s__64632__auto__",-161089566,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq64636){
var G__64637 = cljs.core.first(seq64636);
var seq64636__$1 = cljs.core.next(seq64636);
var G__64638 = cljs.core.first(seq64636__$1);
var seq64636__$2 = cljs.core.next(seq64636__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64637,G__64638,seq64636__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
