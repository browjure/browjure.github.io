goog.provide('sci.impl.io');
sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__64228 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__64229 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__64229);

try{var G__64231 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__64231);

return G__64231;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__64228);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__64235 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__64236 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__64236);

try{var G__64241 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__64241);

return G__64241;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__64235);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__64248 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__64249 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__64249);

try{var G__64251 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__64251);

return G__64251;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__64248);
}})();
sci.impl.io.print_meta = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),false);
sci.impl.io.print_length = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),null);
sci.impl.io.print_level = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),null);
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64483 = arguments.length;
var i__4737__auto___64484 = (0);
while(true){
if((i__4737__auto___64484 < len__4736__auto___64483)){
args__4742__auto__.push((arguments[i__4737__auto___64484]));

var G__64485 = (i__4737__auto___64484 + (1));
i__4737__auto___64484 = G__64485;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__64276 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__64277 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__64278 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__64279 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__64280 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__64281 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__64279);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__64280);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__64281);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs));
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__64278);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__64277);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__64276);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq64266){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64266));
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
var len__4736__auto___64498 = arguments.length;
var i__4737__auto___64499 = (0);
while(true){
if((i__4737__auto___64499 < len__4736__auto___64498)){
args__4742__auto__.push((arguments[i__4737__auto___64499]));

var G__64501 = (i__4737__auto___64499 + (1));
i__4737__auto___64499 = G__64501;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__64315 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__64316 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__64317 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__64318 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__64319 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__64320 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__64318);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__64319);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__64320);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__64317);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__64316);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__64315);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq64314){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64314));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64513 = arguments.length;
var i__4737__auto___64514 = (0);
while(true){
if((i__4737__auto___64514 < len__4736__auto___64513)){
args__4742__auto__.push((arguments[i__4737__auto___64514]));

var G__64515 = (i__4737__auto___64514 + (1));
i__4737__auto___64514 = G__64515;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__64340 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__64341 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__64342 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__64343 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__64344 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__64345 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__64343);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__64344);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__64345);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs));
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__64342);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__64341);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__64340);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq64335){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64335));
}));

/**
 * pr to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64533 = arguments.length;
var i__4737__auto___64534 = (0);
while(true){
if((i__4737__auto___64534 < len__4736__auto___64533)){
args__4742__auto__.push((arguments[i__4737__auto___64534]));

var G__64535 = (i__4737__auto___64534 + (1));
i__4737__auto___64534 = G__64535;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__64368 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__64369 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__64370 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__64371 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__64372 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__64373 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__64371);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__64372);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__64373);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__64370);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__64369);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__64368);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq64352){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64352));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64542 = arguments.length;
var i__4737__auto___64543 = (0);
while(true){
if((i__4737__auto___64543 < len__4736__auto___64542)){
args__4742__auto__.push((arguments[i__4737__auto___64543]));

var G__64544 = (i__4737__auto___64543 + (1));
i__4737__auto___64543 = G__64544;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__64381 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__64382 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR__temp_val__64383 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__64384 = cljs.core.deref(sci.impl.io.print_level);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__64383);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__64384);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs));
}finally {(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__64382);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__64381);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq64380){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64380));
}));

/**
 * pr to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64547 = arguments.length;
var i__4737__auto___64548 = (0);
while(true){
if((i__4737__auto___64548 < len__4736__auto___64547)){
args__4742__auto__.push((arguments[i__4737__auto___64548]));

var G__64549 = (i__4737__auto___64548 + (1));
i__4737__auto___64548 = G__64549;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__64395 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__64396 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__64397 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__64398 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__64399 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__64400 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__64398);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__64399);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__64400);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__64397);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__64396);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__64395);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq64389){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64389));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64556 = arguments.length;
var i__4737__auto___64557 = (0);
while(true){
if((i__4737__auto___64557 < len__4736__auto___64556)){
args__4742__auto__.push((arguments[i__4737__auto___64557]));

var G__64558 = (i__4737__auto___64557 + (1));
i__4737__auto___64557 = G__64558;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__64416 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__64417 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__64418 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__64419 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__64420 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__64421 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__64419);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__64420);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__64421);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println_str,objs));
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__64418);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__64417);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__64416);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq64409){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64409));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64565 = arguments.length;
var i__4737__auto___64567 = (0);
while(true){
if((i__4737__auto___64567 < len__4736__auto___64565)){
args__4742__auto__.push((arguments[i__4737__auto___64567]));

var G__64574 = (i__4737__auto___64567 + (1));
i__4737__auto___64567 = G__64574;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__64424__auto__","s__64424__auto__",-1039434757,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*out*","cljs.core/*out*",-1813565621,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__64424__auto__","s__64424__auto__",-1039434757,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__64424__auto__","s__64424__auto__",-1039434757,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq64430){
var G__64431 = cljs.core.first(seq64430);
var seq64430__$1 = cljs.core.next(seq64430);
var G__64432 = cljs.core.first(seq64430__$1);
var seq64430__$2 = cljs.core.next(seq64430__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64431,G__64432,seq64430__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
