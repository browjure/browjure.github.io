goog.provide('sci.impl.io');
sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__65267 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__65268 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__65268);

try{var G__65269 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__65269);

return G__65269;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__65267);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__65271 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__65272 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__65272);

try{var G__65274 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__65274);

return G__65274;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__65271);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__65276 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__65277 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__65277);

try{var G__65279 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__65279);

return G__65279;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__65276);
}})();
sci.impl.io.print_meta = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),false);
sci.impl.io.print_length = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),null);
sci.impl.io.print_level = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),null);
sci.impl.io.print_namespace_maps = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),true);
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__4742__auto__ = [];
var len__4736__auto___65524 = arguments.length;
var i__4737__auto___65525 = (0);
while(true){
if((i__4737__auto___65525 < len__4736__auto___65524)){
args__4742__auto__.push((arguments[i__4737__auto___65525]));

var G__65527 = (i__4737__auto___65525 + (1));
i__4737__auto___65525 = G__65527;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__65286 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__65287 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__65288 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__65289 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__65290 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__65291 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__65292 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__65293 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__65290);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__65291);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__65292);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__65293);

try{cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs));

return null;
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__65289);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__65288);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__65287);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__65286);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq65283){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65283));
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
var len__4736__auto___65538 = arguments.length;
var i__4737__auto___65539 = (0);
while(true){
if((i__4737__auto___65539 < len__4736__auto___65538)){
args__4742__auto__.push((arguments[i__4737__auto___65539]));

var G__65540 = (i__4737__auto___65539 + (1));
i__4737__auto___65539 = G__65540;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__65307 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__65308 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__65309 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__65310 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__65311 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__65312 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__65313 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__65314 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__65311);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__65312);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__65313);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__65314);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__65310);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__65309);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__65308);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__65307);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq65302){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65302));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___65557 = arguments.length;
var i__4737__auto___65558 = (0);
while(true){
if((i__4737__auto___65558 < len__4736__auto___65557)){
args__4742__auto__.push((arguments[i__4737__auto___65558]));

var G__65559 = (i__4737__auto___65558 + (1));
i__4737__auto___65558 = G__65559;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__65340 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__65341 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__65342 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__65343 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__65345 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__65346 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__65347 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__65348 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__65345);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__65346);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__65347);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__65348);

try{cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs));

return null;
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__65343);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__65342);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__65341);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__65340);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq65331){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65331));
}));

/**
 * pr to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___65572 = arguments.length;
var i__4737__auto___65573 = (0);
while(true){
if((i__4737__auto___65573 < len__4736__auto___65572)){
args__4742__auto__.push((arguments[i__4737__auto___65573]));

var G__65575 = (i__4737__auto___65573 + (1));
i__4737__auto___65573 = G__65575;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__65369 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__65370 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__65371 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__65372 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__65373 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__65374 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__65375 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__65376 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__65373);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__65374);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__65375);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__65376);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__65372);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__65371);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__65370);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__65369);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq65360){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65360));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__4742__auto__ = [];
var len__4736__auto___65773 = arguments.length;
var i__4737__auto___65776 = (0);
while(true){
if((i__4737__auto___65776 < len__4736__auto___65773)){
args__4742__auto__.push((arguments[i__4737__auto___65776]));

var G__65777 = (i__4737__auto___65776 + (1));
i__4737__auto___65776 = G__65777;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__65395 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__65396 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__65397 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__65398 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__65399 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__65400 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__65398);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__65399);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__65400);

try{cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs));

return null;
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__65397);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__65396);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__65395);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq65389){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65389));
}));

/**
 * pr to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___65797 = arguments.length;
var i__4737__auto___65798 = (0);
while(true){
if((i__4737__auto___65798 < len__4736__auto___65797)){
args__4742__auto__.push((arguments[i__4737__auto___65798]));

var G__65801 = (i__4737__auto___65798 + (1));
i__4737__auto___65798 = G__65801;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__65426 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__65427 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__65428 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__65429 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__65430 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__65431 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__65432 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__65434 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__65430);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__65431);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__65432);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__65434);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__65429);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__65428);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__65427);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__65426);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq65412){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65412));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__4742__auto__ = [];
var len__4736__auto___65812 = arguments.length;
var i__4737__auto___65813 = (0);
while(true){
if((i__4737__auto___65813 < len__4736__auto___65812)){
args__4742__auto__.push((arguments[i__4737__auto___65813]));

var G__65816 = (i__4737__auto___65813 + (1));
i__4737__auto___65813 = G__65816;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__65454 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__65455 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__65456 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__65457 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__65458 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__65459 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__65460 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__65461 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__65458);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__65459);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__65460);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__65461);

try{cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println_str,objs));

return null;
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__65457);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__65456);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__65455);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__65454);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq65445){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65445));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___65831 = arguments.length;
var i__4737__auto___65832 = (0);
while(true){
if((i__4737__auto___65832 < len__4736__auto___65831)){
args__4742__auto__.push((arguments[i__4737__auto___65832]));

var G__65835 = (i__4737__auto___65832 + (1));
i__4737__auto___65832 = G__65835;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__65475__auto__","s__65475__auto__",400637316,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*out*","cljs.core/*out*",-1813565621,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__65475__auto__","s__65475__auto__",400637316,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__65475__auto__","s__65475__auto__",400637316,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq65480){
var G__65481 = cljs.core.first(seq65480);
var seq65480__$1 = cljs.core.next(seq65480);
var G__65482 = cljs.core.first(seq65480__$1);
var seq65480__$2 = cljs.core.next(seq65480__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65481,G__65482,seq65480__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
