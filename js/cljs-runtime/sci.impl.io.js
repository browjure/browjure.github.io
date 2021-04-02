goog.provide('sci.impl.io');
sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__77167 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__77168 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__77168);

try{var G__77169 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__77169);

return G__77169;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__77167);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__77170 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__77171 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__77171);

try{var G__77176 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__77176);

return G__77176;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__77170);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__77179 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__77180 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__77180);

try{var G__77182 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__77182);

return G__77182;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__77179);
}})();
sci.impl.io.print_meta = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),false);
sci.impl.io.print_length = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),null);
sci.impl.io.print_level = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),null);
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__4742__auto__ = [];
var len__4736__auto___77381 = arguments.length;
var i__4737__auto___77382 = (0);
while(true){
if((i__4737__auto___77382 < len__4736__auto___77381)){
args__4742__auto__.push((arguments[i__4737__auto___77382]));

var G__77383 = (i__4737__auto___77382 + (1));
i__4737__auto___77382 = G__77383;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__77198 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__77199 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__77200 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__77201 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__77202 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__77203 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__77201);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__77202);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__77203);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs));
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__77200);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__77199);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__77198);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq77191){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq77191));
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
var len__4736__auto___77390 = arguments.length;
var i__4737__auto___77391 = (0);
while(true){
if((i__4737__auto___77391 < len__4736__auto___77390)){
args__4742__auto__.push((arguments[i__4737__auto___77391]));

var G__77395 = (i__4737__auto___77391 + (1));
i__4737__auto___77391 = G__77395;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__77224 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__77225 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__77226 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__77227 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__77228 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__77229 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__77227);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__77228);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__77229);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__77226);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__77225);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__77224);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq77212){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq77212));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___77405 = arguments.length;
var i__4737__auto___77406 = (0);
while(true){
if((i__4737__auto___77406 < len__4736__auto___77405)){
args__4742__auto__.push((arguments[i__4737__auto___77406]));

var G__77408 = (i__4737__auto___77406 + (1));
i__4737__auto___77406 = G__77408;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__77236 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__77237 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__77238 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__77239 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__77240 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__77241 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__77239);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__77240);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__77241);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs));
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__77238);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__77237);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__77236);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq77234){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq77234));
}));

/**
 * pr to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___77412 = arguments.length;
var i__4737__auto___77415 = (0);
while(true){
if((i__4737__auto___77415 < len__4736__auto___77412)){
args__4742__auto__.push((arguments[i__4737__auto___77415]));

var G__77418 = (i__4737__auto___77415 + (1));
i__4737__auto___77415 = G__77418;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__77261 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__77262 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__77263 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__77264 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__77265 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__77266 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__77264);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__77265);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__77266);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__77263);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__77262);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__77261);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq77256){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq77256));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__4742__auto__ = [];
var len__4736__auto___77434 = arguments.length;
var i__4737__auto___77435 = (0);
while(true){
if((i__4737__auto___77435 < len__4736__auto___77434)){
args__4742__auto__.push((arguments[i__4737__auto___77435]));

var G__77440 = (i__4737__auto___77435 + (1));
i__4737__auto___77435 = G__77440;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__77278 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__77279 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR__temp_val__77280 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__77281 = cljs.core.deref(sci.impl.io.print_level);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__77280);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__77281);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs));
}finally {(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__77279);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__77278);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq77273){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq77273));
}));

/**
 * pr to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___77454 = arguments.length;
var i__4737__auto___77456 = (0);
while(true){
if((i__4737__auto___77456 < len__4736__auto___77454)){
args__4742__auto__.push((arguments[i__4737__auto___77456]));

var G__77457 = (i__4737__auto___77456 + (1));
i__4737__auto___77456 = G__77457;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__77296 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__77297 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__77298 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__77299 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__77300 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__77301 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__77299);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__77300);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__77301);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__77298);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__77297);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__77296);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq77290){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq77290));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__4742__auto__ = [];
var len__4736__auto___77463 = arguments.length;
var i__4737__auto___77464 = (0);
while(true){
if((i__4737__auto___77464 < len__4736__auto___77463)){
args__4742__auto__.push((arguments[i__4737__auto___77464]));

var G__77466 = (i__4737__auto___77464 + (1));
i__4737__auto___77464 = G__77466;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__77313 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__77314 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__77315 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__77316 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__77317 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__77318 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__77316);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__77317);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__77318);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println_str,objs));
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__77315);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__77314);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__77313);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq77308){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq77308));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___77477 = arguments.length;
var i__4737__auto___77478 = (0);
while(true){
if((i__4737__auto___77478 < len__4736__auto___77477)){
args__4742__auto__.push((arguments[i__4737__auto___77478]));

var G__77479 = (i__4737__auto___77478 + (1));
i__4737__auto___77478 = G__77479;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__77322__auto__","s__77322__auto__",-1794034700,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*out*","cljs.core/*out*",-1813565621,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__77322__auto__","s__77322__auto__",-1794034700,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__77322__auto__","s__77322__auto__",-1794034700,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq77324){
var G__77325 = cljs.core.first(seq77324);
var seq77324__$1 = cljs.core.next(seq77324);
var G__77326 = cljs.core.first(seq77324__$1);
var seq77324__$2 = cljs.core.next(seq77324__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77325,G__77326,seq77324__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
