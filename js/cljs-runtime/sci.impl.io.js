goog.provide('sci.impl.io');
sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__73539 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__73540 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__73540);

try{var G__73541 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__73541);

return G__73541;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__73539);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__73547 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__73548 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__73548);

try{var G__73551 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__73551);

return G__73551;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__73547);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__73555 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__73556 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__73556);

try{var G__73557 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__73557);

return G__73557;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__73555);
}})();
sci.impl.io.print_meta = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),false);
sci.impl.io.print_length = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),null);
sci.impl.io.print_level = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),null);
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73746 = arguments.length;
var i__4737__auto___73747 = (0);
while(true){
if((i__4737__auto___73747 < len__4736__auto___73746)){
args__4742__auto__.push((arguments[i__4737__auto___73747]));

var G__73751 = (i__4737__auto___73747 + (1));
i__4737__auto___73747 = G__73751;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__73567 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__73568 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__73569 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__73570 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__73571 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__73572 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__73570);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__73571);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__73572);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs));
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__73569);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__73568);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__73567);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq73566){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq73566));
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
var len__4736__auto___73765 = arguments.length;
var i__4737__auto___73766 = (0);
while(true){
if((i__4737__auto___73766 < len__4736__auto___73765)){
args__4742__auto__.push((arguments[i__4737__auto___73766]));

var G__73767 = (i__4737__auto___73766 + (1));
i__4737__auto___73766 = G__73767;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__73599 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__73600 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__73601 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__73602 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__73603 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__73604 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__73602);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__73603);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__73604);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__73601);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__73600);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__73599);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq73585){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq73585));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73775 = arguments.length;
var i__4737__auto___73776 = (0);
while(true){
if((i__4737__auto___73776 < len__4736__auto___73775)){
args__4742__auto__.push((arguments[i__4737__auto___73776]));

var G__73779 = (i__4737__auto___73776 + (1));
i__4737__auto___73776 = G__73779;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__73626 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__73627 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__73628 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__73629 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__73630 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__73631 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__73629);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__73630);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__73631);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs));
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__73628);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__73627);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__73626);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq73618){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq73618));
}));

/**
 * pr to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73786 = arguments.length;
var i__4737__auto___73787 = (0);
while(true){
if((i__4737__auto___73787 < len__4736__auto___73786)){
args__4742__auto__.push((arguments[i__4737__auto___73787]));

var G__73788 = (i__4737__auto___73787 + (1));
i__4737__auto___73787 = G__73788;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__73646 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__73647 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__73648 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__73649 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__73650 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__73651 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__73649);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__73650);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__73651);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__73648);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__73647);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__73646);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq73641){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq73641));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73797 = arguments.length;
var i__4737__auto___73798 = (0);
while(true){
if((i__4737__auto___73798 < len__4736__auto___73797)){
args__4742__auto__.push((arguments[i__4737__auto___73798]));

var G__73800 = (i__4737__auto___73798 + (1));
i__4737__auto___73798 = G__73800;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__73666 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__73667 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR__temp_val__73668 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__73669 = cljs.core.deref(sci.impl.io.print_level);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__73668);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__73669);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs));
}finally {(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__73667);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__73666);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq73659){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq73659));
}));

/**
 * pr to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73807 = arguments.length;
var i__4737__auto___73808 = (0);
while(true){
if((i__4737__auto___73808 < len__4736__auto___73807)){
args__4742__auto__.push((arguments[i__4737__auto___73808]));

var G__73809 = (i__4737__auto___73808 + (1));
i__4737__auto___73808 = G__73809;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__73702 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__73703 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__73704 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__73705 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__73706 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__73707 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__73705);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__73706);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__73707);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__73704);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__73703);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__73702);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq73683){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq73683));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73817 = arguments.length;
var i__4737__auto___73818 = (0);
while(true){
if((i__4737__auto___73818 < len__4736__auto___73817)){
args__4742__auto__.push((arguments[i__4737__auto___73818]));

var G__73819 = (i__4737__auto___73818 + (1));
i__4737__auto___73818 = G__73819;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__73713 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__73714 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__73715 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__73716 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__73717 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__73718 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__73716);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__73717);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__73718);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println_str,objs));
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__73715);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__73714);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__73713);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq73708){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq73708));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73843 = arguments.length;
var i__4737__auto___73844 = (0);
while(true){
if((i__4737__auto___73844 < len__4736__auto___73843)){
args__4742__auto__.push((arguments[i__4737__auto___73844]));

var G__73847 = (i__4737__auto___73844 + (1));
i__4737__auto___73844 = G__73847;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__73720__auto__","s__73720__auto__",2143617713,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*out*","cljs.core/*out*",-1813565621,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__73720__auto__","s__73720__auto__",2143617713,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__73720__auto__","s__73720__auto__",2143617713,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq73721){
var G__73723 = cljs.core.first(seq73721);
var seq73721__$1 = cljs.core.next(seq73721);
var G__73724 = cljs.core.first(seq73721__$1);
var seq73721__$2 = cljs.core.next(seq73721__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73723,G__73724,seq73721__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
