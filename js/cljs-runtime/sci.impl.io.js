goog.provide('sci.impl.io');
sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__67532 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__67533 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__67533);

try{var G__67535 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__67535);

return G__67535;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__67532);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__67538 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__67539 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__67539);

try{var G__67541 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__67541);

return G__67541;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__67538);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__67543 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__67544 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__67544);

try{var G__67546 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__67546);

return G__67546;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__67543);
}})();
sci.impl.io.print_meta = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),false);
sci.impl.io.print_length = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),null);
sci.impl.io.print_level = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),null);
sci.impl.io.print_namespace_maps = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),true);
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__4742__auto__ = [];
var len__4736__auto___67837 = arguments.length;
var i__4737__auto___67838 = (0);
while(true){
if((i__4737__auto___67838 < len__4736__auto___67837)){
args__4742__auto__.push((arguments[i__4737__auto___67838]));

var G__67840 = (i__4737__auto___67838 + (1));
i__4737__auto___67838 = G__67840;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__67555 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__67556 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__67557 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__67558 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__67559 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__67560 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__67561 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__67562 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__67559);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__67560);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__67561);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__67562);

try{cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs));

return null;
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__67558);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__67557);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__67556);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__67555);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq67551){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67551));
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
var len__4736__auto___67856 = arguments.length;
var i__4737__auto___67857 = (0);
while(true){
if((i__4737__auto___67857 < len__4736__auto___67856)){
args__4742__auto__.push((arguments[i__4737__auto___67857]));

var G__67858 = (i__4737__auto___67857 + (1));
i__4737__auto___67857 = G__67858;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__67584 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__67585 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__67586 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__67587 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__67588 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__67589 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__67590 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__67591 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__67588);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__67589);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__67590);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__67591);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__67587);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__67586);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__67585);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__67584);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq67575){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67575));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___67865 = arguments.length;
var i__4737__auto___67866 = (0);
while(true){
if((i__4737__auto___67866 < len__4736__auto___67865)){
args__4742__auto__.push((arguments[i__4737__auto___67866]));

var G__67867 = (i__4737__auto___67866 + (1));
i__4737__auto___67866 = G__67867;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__67607 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__67608 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__67609 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__67610 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__67611 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__67612 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__67613 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__67614 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__67611);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__67612);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__67613);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__67614);

try{cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs));

return null;
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__67610);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__67609);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__67608);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__67607);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq67600){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67600));
}));

/**
 * pr to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___67881 = arguments.length;
var i__4737__auto___67882 = (0);
while(true){
if((i__4737__auto___67882 < len__4736__auto___67881)){
args__4742__auto__.push((arguments[i__4737__auto___67882]));

var G__67883 = (i__4737__auto___67882 + (1));
i__4737__auto___67882 = G__67883;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__67646 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__67647 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__67648 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__67649 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__67650 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__67651 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__67652 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__67653 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__67650);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__67651);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__67652);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__67653);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__67649);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__67648);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__67647);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__67646);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq67637){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67637));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__4742__auto__ = [];
var len__4736__auto___67890 = arguments.length;
var i__4737__auto___67897 = (0);
while(true){
if((i__4737__auto___67897 < len__4736__auto___67890)){
args__4742__auto__.push((arguments[i__4737__auto___67897]));

var G__67898 = (i__4737__auto___67897 + (1));
i__4737__auto___67897 = G__67898;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__67681 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__67682 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__67683 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__67684 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__67685 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__67686 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__67684);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__67685);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__67686);

try{cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs));

return null;
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__67683);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__67682);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__67681);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq67668){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67668));
}));

/**
 * pr to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___68100 = arguments.length;
var i__4737__auto___68101 = (0);
while(true){
if((i__4737__auto___68101 < len__4736__auto___68100)){
args__4742__auto__.push((arguments[i__4737__auto___68101]));

var G__68102 = (i__4737__auto___68101 + (1));
i__4737__auto___68101 = G__68102;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__67717 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__67718 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__67719 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__67720 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__67721 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__67722 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__67723 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__67724 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__67721);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__67722);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__67723);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__67724);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__67720);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__67719);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__67718);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__67717);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq67697){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67697));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__4742__auto__ = [];
var len__4736__auto___68117 = arguments.length;
var i__4737__auto___68118 = (0);
while(true){
if((i__4737__auto___68118 < len__4736__auto___68117)){
args__4742__auto__.push((arguments[i__4737__auto___68118]));

var G__68121 = (i__4737__auto___68118 + (1));
i__4737__auto___68118 = G__68121;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__67772 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__67773 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__67774 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__67775 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__67776 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__67777 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__67778 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__67779 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__67776);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__67777);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__67778);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__67779);

try{cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println_str,objs));

return null;
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__67775);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__67774);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__67773);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__67772);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq67746){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67746));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___68133 = arguments.length;
var i__4737__auto___68134 = (0);
while(true){
if((i__4737__auto___68134 < len__4736__auto___68133)){
args__4742__auto__.push((arguments[i__4737__auto___68134]));

var G__68137 = (i__4737__auto___68134 + (1));
i__4737__auto___68134 = G__68137;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__67805__auto__","s__67805__auto__",2065978908,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*out*","cljs.core/*out*",-1813565621,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__67805__auto__","s__67805__auto__",2065978908,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__67805__auto__","s__67805__auto__",2065978908,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq67811){
var G__67812 = cljs.core.first(seq67811);
var seq67811__$1 = cljs.core.next(seq67811);
var G__67813 = cljs.core.first(seq67811__$1);
var seq67811__$2 = cljs.core.next(seq67811__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67812,G__67813,seq67811__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
