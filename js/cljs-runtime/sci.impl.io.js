goog.provide('sci.impl.io');
sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__64917 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__64918 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__64918);

try{var G__64919 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__64919);

return G__64919;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__64917);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__64920 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__64921 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__64921);

try{var G__64922 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__64922);

return G__64922;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__64920);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__64923 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__64924 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__64924);

try{var G__64925 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__64925);

return G__64925;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__64923);
}})();
sci.impl.io.print_meta = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),false);
sci.impl.io.print_length = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),null);
sci.impl.io.print_level = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),null);
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__4742__auto__ = [];
var len__4736__auto___65143 = arguments.length;
var i__4737__auto___65144 = (0);
while(true){
if((i__4737__auto___65144 < len__4736__auto___65143)){
args__4742__auto__.push((arguments[i__4737__auto___65144]));

var G__65145 = (i__4737__auto___65144 + (1));
i__4737__auto___65144 = G__65145;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__64948 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__64949 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__64950 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__64951 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__64952 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__64953 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__64951);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__64952);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__64953);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs));
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__64950);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__64949);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__64948);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq64932){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64932));
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
var len__4736__auto___65151 = arguments.length;
var i__4737__auto___65153 = (0);
while(true){
if((i__4737__auto___65153 < len__4736__auto___65151)){
args__4742__auto__.push((arguments[i__4737__auto___65153]));

var G__65154 = (i__4737__auto___65153 + (1));
i__4737__auto___65153 = G__65154;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__64984 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__64985 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__64986 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__64987 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__64988 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__64989 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__64987);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__64988);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__64989);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__64986);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__64985);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__64984);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq64971){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64971));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___65159 = arguments.length;
var i__4737__auto___65160 = (0);
while(true){
if((i__4737__auto___65160 < len__4736__auto___65159)){
args__4742__auto__.push((arguments[i__4737__auto___65160]));

var G__65162 = (i__4737__auto___65160 + (1));
i__4737__auto___65160 = G__65162;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__65004 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__65005 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__65006 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__65007 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__65008 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__65009 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__65007);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__65008);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__65009);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs));
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__65006);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__65005);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__65004);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq64997){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64997));
}));

/**
 * pr to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___65166 = arguments.length;
var i__4737__auto___65167 = (0);
while(true){
if((i__4737__auto___65167 < len__4736__auto___65166)){
args__4742__auto__.push((arguments[i__4737__auto___65167]));

var G__65168 = (i__4737__auto___65167 + (1));
i__4737__auto___65167 = G__65168;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__65030 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__65031 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__65032 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__65033 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__65034 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__65035 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__65033);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__65034);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__65035);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__65032);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__65031);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__65030);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq65014){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65014));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__4742__auto__ = [];
var len__4736__auto___65171 = arguments.length;
var i__4737__auto___65172 = (0);
while(true){
if((i__4737__auto___65172 < len__4736__auto___65171)){
args__4742__auto__.push((arguments[i__4737__auto___65172]));

var G__65173 = (i__4737__auto___65172 + (1));
i__4737__auto___65172 = G__65173;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__65053 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__65054 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR__temp_val__65055 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__65056 = cljs.core.deref(sci.impl.io.print_level);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__65055);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__65056);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs));
}finally {(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__65054);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__65053);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq65041){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65041));
}));

/**
 * pr to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___65182 = arguments.length;
var i__4737__auto___65183 = (0);
while(true){
if((i__4737__auto___65183 < len__4736__auto___65182)){
args__4742__auto__.push((arguments[i__4737__auto___65183]));

var G__65185 = (i__4737__auto___65183 + (1));
i__4737__auto___65183 = G__65185;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__65071 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__65072 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__65074 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__65075 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__65076 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__65077 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__65075);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__65076);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__65077);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__65074);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__65072);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__65071);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq65065){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65065));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__4742__auto__ = [];
var len__4736__auto___65189 = arguments.length;
var i__4737__auto___65190 = (0);
while(true){
if((i__4737__auto___65190 < len__4736__auto___65189)){
args__4742__auto__.push((arguments[i__4737__auto___65190]));

var G__65197 = (i__4737__auto___65190 + (1));
i__4737__auto___65190 = G__65197;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__65088 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__65089 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__65090 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__65091 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__65092 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__65093 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__65091);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__65092);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__65093);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println_str,objs));
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__65090);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__65089);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__65088);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq65081){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65081));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___65199 = arguments.length;
var i__4737__auto___65200 = (0);
while(true){
if((i__4737__auto___65200 < len__4736__auto___65199)){
args__4742__auto__.push((arguments[i__4737__auto___65200]));

var G__65201 = (i__4737__auto___65200 + (1));
i__4737__auto___65200 = G__65201;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__65103__auto__","s__65103__auto__",1016032577,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*out*","cljs.core/*out*",-1813565621,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__65103__auto__","s__65103__auto__",1016032577,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__65103__auto__","s__65103__auto__",1016032577,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq65106){
var G__65107 = cljs.core.first(seq65106);
var seq65106__$1 = cljs.core.next(seq65106);
var G__65108 = cljs.core.first(seq65106__$1);
var seq65106__$2 = cljs.core.next(seq65106__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65107,G__65108,seq65106__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
