goog.provide('sci.impl.io');
sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__75058 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__75059 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__75059);

try{var G__75062 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__75062);

return G__75062;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__75058);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__75064 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__75065 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__75065);

try{var G__75066 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__75066);

return G__75066;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__75064);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__75069 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__75070 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__75070);

try{var G__75072 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__75072);

return G__75072;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__75069);
}})();
sci.impl.io.print_meta = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),false);
sci.impl.io.print_length = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),null);
sci.impl.io.print_level = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),null);
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__4742__auto__ = [];
var len__4736__auto___75354 = arguments.length;
var i__4737__auto___75355 = (0);
while(true){
if((i__4737__auto___75355 < len__4736__auto___75354)){
args__4742__auto__.push((arguments[i__4737__auto___75355]));

var G__75358 = (i__4737__auto___75355 + (1));
i__4737__auto___75355 = G__75358;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__75094 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__75095 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__75096 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__75097 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__75098 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__75099 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__75097);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__75098);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__75099);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs));
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__75096);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__75095);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__75094);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq75092){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq75092));
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
var len__4736__auto___75370 = arguments.length;
var i__4737__auto___75372 = (0);
while(true){
if((i__4737__auto___75372 < len__4736__auto___75370)){
args__4742__auto__.push((arguments[i__4737__auto___75372]));

var G__75373 = (i__4737__auto___75372 + (1));
i__4737__auto___75372 = G__75373;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__75115 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__75116 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__75117 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__75118 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__75119 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__75120 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__75118);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__75119);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__75120);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__75117);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__75116);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__75115);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq75106){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq75106));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___75378 = arguments.length;
var i__4737__auto___75379 = (0);
while(true){
if((i__4737__auto___75379 < len__4736__auto___75378)){
args__4742__auto__.push((arguments[i__4737__auto___75379]));

var G__75380 = (i__4737__auto___75379 + (1));
i__4737__auto___75379 = G__75380;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__75135 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__75136 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__75137 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__75138 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__75139 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__75140 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__75138);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__75139);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__75140);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs));
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__75137);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__75136);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__75135);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq75130){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq75130));
}));

/**
 * pr to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___75394 = arguments.length;
var i__4737__auto___75395 = (0);
while(true){
if((i__4737__auto___75395 < len__4736__auto___75394)){
args__4742__auto__.push((arguments[i__4737__auto___75395]));

var G__75400 = (i__4737__auto___75395 + (1));
i__4737__auto___75395 = G__75400;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__75162 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__75163 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__75164 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__75165 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__75166 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__75167 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__75165);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__75166);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__75167);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__75164);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__75163);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__75162);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq75146){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq75146));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__4742__auto__ = [];
var len__4736__auto___75416 = arguments.length;
var i__4737__auto___75417 = (0);
while(true){
if((i__4737__auto___75417 < len__4736__auto___75416)){
args__4742__auto__.push((arguments[i__4737__auto___75417]));

var G__75418 = (i__4737__auto___75417 + (1));
i__4737__auto___75417 = G__75418;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__75186 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__75187 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR__temp_val__75188 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__75189 = cljs.core.deref(sci.impl.io.print_level);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__75188);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__75189);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs));
}finally {(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__75187);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__75186);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq75180){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq75180));
}));

/**
 * pr to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___75439 = arguments.length;
var i__4737__auto___75440 = (0);
while(true){
if((i__4737__auto___75440 < len__4736__auto___75439)){
args__4742__auto__.push((arguments[i__4737__auto___75440]));

var G__75442 = (i__4737__auto___75440 + (1));
i__4737__auto___75440 = G__75442;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__75228 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__75229 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__75230 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__75231 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__75232 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__75233 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__75231);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__75232);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__75233);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__75230);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__75229);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__75228);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq75226){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq75226));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__4742__auto__ = [];
var len__4736__auto___75470 = arguments.length;
var i__4737__auto___75472 = (0);
while(true){
if((i__4737__auto___75472 < len__4736__auto___75470)){
args__4742__auto__.push((arguments[i__4737__auto___75472]));

var G__75474 = (i__4737__auto___75472 + (1));
i__4737__auto___75472 = G__75474;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__75246 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__75247 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__75248 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__75249 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__75250 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__75251 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__75249);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__75250);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__75251);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println_str,objs));
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__75248);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__75247);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__75246);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq75237){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq75237));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___75506 = arguments.length;
var i__4737__auto___75508 = (0);
while(true){
if((i__4737__auto___75508 < len__4736__auto___75506)){
args__4742__auto__.push((arguments[i__4737__auto___75508]));

var G__75509 = (i__4737__auto___75508 + (1));
i__4737__auto___75508 = G__75509;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__75265__auto__","s__75265__auto__",-776305756,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*out*","cljs.core/*out*",-1813565621,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__75265__auto__","s__75265__auto__",-776305756,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__75265__auto__","s__75265__auto__",-776305756,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq75267){
var G__75268 = cljs.core.first(seq75267);
var seq75267__$1 = cljs.core.next(seq75267);
var G__75269 = cljs.core.first(seq75267__$1);
var seq75267__$2 = cljs.core.next(seq75267__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__75268,G__75269,seq75267__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
