goog.provide('sci.impl.fns');
sci.impl.fns.throw_arity = (function sci$impl$fns$throw_arity(ctx,nsm,fn_name,macro_QMARK_,args){
if(cljs.core.truth_(new cljs.core.Keyword(null,"disable-arity-checks","disable-arity-checks",1131364206).cljs$core$IFn$_invoke$arity$1(ctx))){
return null;
} else {
throw (new Error((function (){var actual_count = (cljs.core.truth_(macro_QMARK_)?(cljs.core.count(args) - (2)):cljs.core.count(args));
return ["Wrong number of args (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual_count),") passed to: ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(nsm),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)].join('')].join('');
})()));
}
});

/**
* @constructor
 * @implements {sci.impl.types.IBox}
*/
sci.impl.fns.Recur = (function (val){
this.val = val;
});
(sci.impl.fns.Recur.prototype.sci$impl$types$IBox$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.fns.Recur.prototype.sci$impl$types$IBox$getVal$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
}));

(sci.impl.fns.Recur.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
}));

(sci.impl.fns.Recur.cljs$lang$type = true);

(sci.impl.fns.Recur.cljs$lang$ctorStr = "sci.impl.fns/Recur");

(sci.impl.fns.Recur.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"sci.impl.fns/Recur");
}));

/**
 * Positional factory function for sci.impl.fns/Recur.
 */
sci.impl.fns.__GT_Recur = (function sci$impl$fns$__GT_Recur(val){
return (new sci.impl.fns.Recur(val));
});

sci.impl.fns.fun = (function sci$impl$fns$fun(ctx,interpret,p__62556,fn_name,macro_QMARK_){
var map__62564 = p__62556;
var map__62564__$1 = (((((!((map__62564 == null))))?(((((map__62564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62564):map__62564);
var _m = map__62564__$1;
var fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62564__$1,new cljs.core.Keyword("sci.impl","fixed-arity","sci.impl/fixed-arity",-1251617052));
var var_arg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62564__$1,new cljs.core.Keyword("sci.impl","var-arg-name","sci.impl/var-arg-name",1800498100));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62564__$1,new cljs.core.Keyword("sci.impl","params","sci.impl/params",-175360738));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62564__$1,new cljs.core.Keyword("sci.impl","body","sci.impl/body",-1493886648));
var nsm = sci.impl.vars.current_ns_name();
var disable_arity_checks_QMARK_ = ctx.get(new cljs.core.Keyword(null,"disable-arity-checks","disable-arity-checks",1131364206));
var f = ((cljs.core.not(var_arg_name))?(function (){var G__62571 = (fixed_arity | (0));
switch (G__62571) {
case (0):
return (function sci$impl$fns$fun_$_arity_0(){
while(true){
var ret = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx,body) : interpret.call(null,ctx,body));
var recur_QMARK_ = (ret instanceof sci.impl.fns.Recur);
if(recur_QMARK_){
continue;
} else {
return ret;
}
break;
}
});

break;
case (1):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__62575 = cljs.core._nth(params,(0));
return (function sci$impl$fns$fun_$_arity_1(G__62574){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__62575,G__62574);
var ctx__61761__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$1);
var ret__61762__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__61761__auto__,body) : interpret.call(null,ctx__61761__auto__,body));
var recur_QMARK___61763__auto__ = (ret__61762__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___61763__auto__){
var recur_val = sci.impl.types.getVal(ret__61762__auto__);
var G__64075 = cljs.core._nth(recur_val,(0));
G__62574 = G__64075;
continue;
} else {
return ret__61762__auto__;
}
break;
}
});
} else {
var G__62588 = cljs.core._nth(params,(0));
return (function sci$impl$fns$fun_$_arity_1(G__62587){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__62588,G__62587);
var ctx__61761__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$1);
var ret__61762__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__61761__auto__,body) : interpret.call(null,ctx__61761__auto__,body));
var recur_QMARK___61763__auto__ = (ret__61762__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___61763__auto__){
var recur_val = sci.impl.types.getVal(ret__61762__auto__);
var G__64083 = cljs.core._nth(recur_val,(0));
G__62587 = G__64083;
continue;
} else {
return ret__61762__auto__;
}
break;
}
});
}

break;
case (2):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__62600 = cljs.core._nth(params,(0));
var G__62601 = cljs.core._nth(params,(1));
return (function sci$impl$fns$fun_$_arity_2(G__62598,G__62599){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__62600,G__62598);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__62601,G__62599);
var ctx__61761__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$2);
var ret__61762__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__61761__auto__,body) : interpret.call(null,ctx__61761__auto__,body));
var recur_QMARK___61763__auto__ = (ret__61762__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___61763__auto__){
var recur_val = sci.impl.types.getVal(ret__61762__auto__);
var G__64092 = cljs.core._nth(recur_val,(0));
var G__64093 = cljs.core._nth(recur_val,(1));
G__62598 = G__64092;
G__62599 = G__64093;
continue;
} else {
return ret__61762__auto__;
}
break;
}
});
} else {
var G__62610 = cljs.core._nth(params,(0));
var G__62611 = cljs.core._nth(params,(1));
return (function sci$impl$fns$fun_$_arity_2(G__62608,G__62609){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__62610,G__62608);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__62611,G__62609);
var ctx__61761__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$2);
var ret__61762__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__61761__auto__,body) : interpret.call(null,ctx__61761__auto__,body));
var recur_QMARK___61763__auto__ = (ret__61762__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___61763__auto__){
var recur_val = sci.impl.types.getVal(ret__61762__auto__);
var G__64102 = cljs.core._nth(recur_val,(0));
var G__64103 = cljs.core._nth(recur_val,(1));
G__62608 = G__64102;
G__62609 = G__64103;
continue;
} else {
return ret__61762__auto__;
}
break;
}
});
}

break;
case (3):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__62626 = cljs.core._nth(params,(0));
var G__62627 = cljs.core._nth(params,(1));
var G__62628 = cljs.core._nth(params,(2));
return (function sci$impl$fns$fun_$_arity_3(G__62623,G__62624,G__62625){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__62626,G__62623);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__62627,G__62624);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__62628,G__62625);
var ctx__61761__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$3);
var ret__61762__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__61761__auto__,body) : interpret.call(null,ctx__61761__auto__,body));
var recur_QMARK___61763__auto__ = (ret__61762__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___61763__auto__){
var recur_val = sci.impl.types.getVal(ret__61762__auto__);
var G__64113 = cljs.core._nth(recur_val,(0));
var G__64114 = cljs.core._nth(recur_val,(1));
var G__64115 = cljs.core._nth(recur_val,(2));
G__62623 = G__64113;
G__62624 = G__64114;
G__62625 = G__64115;
continue;
} else {
return ret__61762__auto__;
}
break;
}
});
} else {
var G__62643 = cljs.core._nth(params,(0));
var G__62644 = cljs.core._nth(params,(1));
var G__62645 = cljs.core._nth(params,(2));
return (function sci$impl$fns$fun_$_arity_3(G__62640,G__62641,G__62642){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__62643,G__62640);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__62644,G__62641);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__62645,G__62642);
var ctx__61761__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$3);
var ret__61762__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__61761__auto__,body) : interpret.call(null,ctx__61761__auto__,body));
var recur_QMARK___61763__auto__ = (ret__61762__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___61763__auto__){
var recur_val = sci.impl.types.getVal(ret__61762__auto__);
var G__64127 = cljs.core._nth(recur_val,(0));
var G__64128 = cljs.core._nth(recur_val,(1));
var G__64129 = cljs.core._nth(recur_val,(2));
G__62640 = G__64127;
G__62641 = G__64128;
G__62642 = G__64129;
continue;
} else {
return ret__61762__auto__;
}
break;
}
});
}

break;
case (4):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__62670 = cljs.core._nth(params,(0));
var G__62671 = cljs.core._nth(params,(1));
var G__62672 = cljs.core._nth(params,(2));
var G__62673 = cljs.core._nth(params,(3));
return (function sci$impl$fns$fun_$_arity_4(G__62666,G__62667,G__62668,G__62669){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__62670,G__62666);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__62671,G__62667);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__62672,G__62668);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__62673,G__62669);
var ctx__61761__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$4);
var ret__61762__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__61761__auto__,body) : interpret.call(null,ctx__61761__auto__,body));
var recur_QMARK___61763__auto__ = (ret__61762__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___61763__auto__){
var recur_val = sci.impl.types.getVal(ret__61762__auto__);
var G__64140 = cljs.core._nth(recur_val,(0));
var G__64141 = cljs.core._nth(recur_val,(1));
var G__64142 = cljs.core._nth(recur_val,(2));
var G__64143 = cljs.core._nth(recur_val,(3));
G__62666 = G__64140;
G__62667 = G__64141;
G__62668 = G__64142;
G__62669 = G__64143;
continue;
} else {
return ret__61762__auto__;
}
break;
}
});
} else {
var G__62686 = cljs.core._nth(params,(0));
var G__62687 = cljs.core._nth(params,(1));
var G__62688 = cljs.core._nth(params,(2));
var G__62689 = cljs.core._nth(params,(3));
return (function sci$impl$fns$fun_$_arity_4(G__62682,G__62683,G__62684,G__62685){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__62686,G__62682);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__62687,G__62683);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__62688,G__62684);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__62689,G__62685);
var ctx__61761__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$4);
var ret__61762__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__61761__auto__,body) : interpret.call(null,ctx__61761__auto__,body));
var recur_QMARK___61763__auto__ = (ret__61762__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___61763__auto__){
var recur_val = sci.impl.types.getVal(ret__61762__auto__);
var G__64168 = cljs.core._nth(recur_val,(0));
var G__64169 = cljs.core._nth(recur_val,(1));
var G__64170 = cljs.core._nth(recur_val,(2));
var G__64171 = cljs.core._nth(recur_val,(3));
G__62682 = G__64168;
G__62683 = G__64169;
G__62684 = G__64170;
G__62685 = G__64171;
continue;
} else {
return ret__61762__auto__;
}
break;
}
});
}

break;
case (5):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__62700 = cljs.core._nth(params,(0));
var G__62701 = cljs.core._nth(params,(1));
var G__62702 = cljs.core._nth(params,(2));
var G__62703 = cljs.core._nth(params,(3));
var G__62704 = cljs.core._nth(params,(4));
return (function sci$impl$fns$fun_$_arity_5(G__62695,G__62696,G__62697,G__62698,G__62699){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__62700,G__62695);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__62701,G__62696);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__62702,G__62697);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__62703,G__62698);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__62704,G__62699);
var ctx__61761__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$5);
var ret__61762__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__61761__auto__,body) : interpret.call(null,ctx__61761__auto__,body));
var recur_QMARK___61763__auto__ = (ret__61762__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___61763__auto__){
var recur_val = sci.impl.types.getVal(ret__61762__auto__);
var G__64189 = cljs.core._nth(recur_val,(0));
var G__64190 = cljs.core._nth(recur_val,(1));
var G__64191 = cljs.core._nth(recur_val,(2));
var G__64192 = cljs.core._nth(recur_val,(3));
var G__64193 = cljs.core._nth(recur_val,(4));
G__62695 = G__64189;
G__62696 = G__64190;
G__62697 = G__64191;
G__62698 = G__64192;
G__62699 = G__64193;
continue;
} else {
return ret__61762__auto__;
}
break;
}
});
} else {
var G__62719 = cljs.core._nth(params,(0));
var G__62720 = cljs.core._nth(params,(1));
var G__62721 = cljs.core._nth(params,(2));
var G__62722 = cljs.core._nth(params,(3));
var G__62723 = cljs.core._nth(params,(4));
return (function sci$impl$fns$fun_$_arity_5(G__62714,G__62715,G__62716,G__62717,G__62718){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((5),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__62719,G__62714);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__62720,G__62715);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__62721,G__62716);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__62722,G__62717);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__62723,G__62718);
var ctx__61761__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$5);
var ret__61762__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__61761__auto__,body) : interpret.call(null,ctx__61761__auto__,body));
var recur_QMARK___61763__auto__ = (ret__61762__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___61763__auto__){
var recur_val = sci.impl.types.getVal(ret__61762__auto__);
var G__64208 = cljs.core._nth(recur_val,(0));
var G__64209 = cljs.core._nth(recur_val,(1));
var G__64210 = cljs.core._nth(recur_val,(2));
var G__64211 = cljs.core._nth(recur_val,(3));
var G__64212 = cljs.core._nth(recur_val,(4));
G__62714 = G__64208;
G__62715 = G__64209;
G__62716 = G__64210;
G__62717 = G__64211;
G__62718 = G__64212;
continue;
} else {
return ret__61762__auto__;
}
break;
}
});
}

break;
case (6):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__62740 = cljs.core._nth(params,(0));
var G__62741 = cljs.core._nth(params,(1));
var G__62742 = cljs.core._nth(params,(2));
var G__62743 = cljs.core._nth(params,(3));
var G__62744 = cljs.core._nth(params,(4));
var G__62745 = cljs.core._nth(params,(5));
return (function sci$impl$fns$fun_$_arity_6(G__62734,G__62735,G__62736,G__62737,G__62738,G__62739){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__62740,G__62734);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__62741,G__62735);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__62742,G__62736);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__62743,G__62737);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__62744,G__62738);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__62745,G__62739);
var ctx__61761__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$6);
var ret__61762__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__61761__auto__,body) : interpret.call(null,ctx__61761__auto__,body));
var recur_QMARK___61763__auto__ = (ret__61762__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___61763__auto__){
var recur_val = sci.impl.types.getVal(ret__61762__auto__);
var G__64237 = cljs.core._nth(recur_val,(0));
var G__64238 = cljs.core._nth(recur_val,(1));
var G__64239 = cljs.core._nth(recur_val,(2));
var G__64240 = cljs.core._nth(recur_val,(3));
var G__64241 = cljs.core._nth(recur_val,(4));
var G__64242 = cljs.core._nth(recur_val,(5));
G__62734 = G__64237;
G__62735 = G__64238;
G__62736 = G__64239;
G__62737 = G__64240;
G__62738 = G__64241;
G__62739 = G__64242;
continue;
} else {
return ret__61762__auto__;
}
break;
}
});
} else {
var G__62766 = cljs.core._nth(params,(0));
var G__62767 = cljs.core._nth(params,(1));
var G__62768 = cljs.core._nth(params,(2));
var G__62769 = cljs.core._nth(params,(3));
var G__62770 = cljs.core._nth(params,(4));
var G__62771 = cljs.core._nth(params,(5));
return (function sci$impl$fns$fun_$_arity_6(G__62760,G__62761,G__62762,G__62763,G__62764,G__62765){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((6),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__62766,G__62760);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__62767,G__62761);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__62768,G__62762);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__62769,G__62763);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__62770,G__62764);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__62771,G__62765);
var ctx__61761__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$6);
var ret__61762__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__61761__auto__,body) : interpret.call(null,ctx__61761__auto__,body));
var recur_QMARK___61763__auto__ = (ret__61762__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___61763__auto__){
var recur_val = sci.impl.types.getVal(ret__61762__auto__);
var G__64254 = cljs.core._nth(recur_val,(0));
var G__64255 = cljs.core._nth(recur_val,(1));
var G__64256 = cljs.core._nth(recur_val,(2));
var G__64257 = cljs.core._nth(recur_val,(3));
var G__64258 = cljs.core._nth(recur_val,(4));
var G__64259 = cljs.core._nth(recur_val,(5));
G__62760 = G__64254;
G__62761 = G__64255;
G__62762 = G__64256;
G__62763 = G__64257;
G__62764 = G__64258;
G__62765 = G__64259;
continue;
} else {
return ret__61762__auto__;
}
break;
}
});
}

break;
case (7):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__62791 = cljs.core._nth(params,(0));
var G__62792 = cljs.core._nth(params,(1));
var G__62793 = cljs.core._nth(params,(2));
var G__62794 = cljs.core._nth(params,(3));
var G__62795 = cljs.core._nth(params,(4));
var G__62796 = cljs.core._nth(params,(5));
var G__62797 = cljs.core._nth(params,(6));
return (function sci$impl$fns$fun_$_arity_7(G__62784,G__62785,G__62786,G__62787,G__62788,G__62789,G__62790){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__62791,G__62784);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__62792,G__62785);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__62793,G__62786);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__62794,G__62787);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__62795,G__62788);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__62796,G__62789);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__62797,G__62790);
var ctx__61761__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$7);
var ret__61762__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__61761__auto__,body) : interpret.call(null,ctx__61761__auto__,body));
var recur_QMARK___61763__auto__ = (ret__61762__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___61763__auto__){
var recur_val = sci.impl.types.getVal(ret__61762__auto__);
var G__64271 = cljs.core._nth(recur_val,(0));
var G__64272 = cljs.core._nth(recur_val,(1));
var G__64273 = cljs.core._nth(recur_val,(2));
var G__64274 = cljs.core._nth(recur_val,(3));
var G__64275 = cljs.core._nth(recur_val,(4));
var G__64276 = cljs.core._nth(recur_val,(5));
var G__64277 = cljs.core._nth(recur_val,(6));
G__62784 = G__64271;
G__62785 = G__64272;
G__62786 = G__64273;
G__62787 = G__64274;
G__62788 = G__64275;
G__62789 = G__64276;
G__62790 = G__64277;
continue;
} else {
return ret__61762__auto__;
}
break;
}
});
} else {
var G__62823 = cljs.core._nth(params,(0));
var G__62824 = cljs.core._nth(params,(1));
var G__62825 = cljs.core._nth(params,(2));
var G__62826 = cljs.core._nth(params,(3));
var G__62827 = cljs.core._nth(params,(4));
var G__62828 = cljs.core._nth(params,(5));
var G__62829 = cljs.core._nth(params,(6));
return (function sci$impl$fns$fun_$_arity_7(G__62816,G__62817,G__62818,G__62819,G__62820,G__62821,G__62822){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((7),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__62823,G__62816);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__62824,G__62817);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__62825,G__62818);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__62826,G__62819);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__62827,G__62820);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__62828,G__62821);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__62829,G__62822);
var ctx__61761__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$7);
var ret__61762__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__61761__auto__,body) : interpret.call(null,ctx__61761__auto__,body));
var recur_QMARK___61763__auto__ = (ret__61762__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___61763__auto__){
var recur_val = sci.impl.types.getVal(ret__61762__auto__);
var G__64290 = cljs.core._nth(recur_val,(0));
var G__64291 = cljs.core._nth(recur_val,(1));
var G__64292 = cljs.core._nth(recur_val,(2));
var G__64293 = cljs.core._nth(recur_val,(3));
var G__64294 = cljs.core._nth(recur_val,(4));
var G__64295 = cljs.core._nth(recur_val,(5));
var G__64296 = cljs.core._nth(recur_val,(6));
G__62816 = G__64290;
G__62817 = G__64291;
G__62818 = G__64292;
G__62819 = G__64293;
G__62820 = G__64294;
G__62821 = G__64295;
G__62822 = G__64296;
continue;
} else {
return ret__61762__auto__;
}
break;
}
});
}

break;
case (8):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__62840 = cljs.core._nth(params,(0));
var G__62841 = cljs.core._nth(params,(1));
var G__62842 = cljs.core._nth(params,(2));
var G__62843 = cljs.core._nth(params,(3));
var G__62844 = cljs.core._nth(params,(4));
var G__62845 = cljs.core._nth(params,(5));
var G__62846 = cljs.core._nth(params,(6));
var G__62847 = cljs.core._nth(params,(7));
return (function sci$impl$fns$fun_$_arity_8(G__62832,G__62833,G__62834,G__62835,G__62836,G__62837,G__62838,G__62839){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__62840,G__62832);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__62841,G__62833);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__62842,G__62834);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__62843,G__62835);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__62844,G__62836);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__62845,G__62837);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__62846,G__62838);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__62847,G__62839);
var ctx__61761__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$8);
var ret__61762__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__61761__auto__,body) : interpret.call(null,ctx__61761__auto__,body));
var recur_QMARK___61763__auto__ = (ret__61762__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___61763__auto__){
var recur_val = sci.impl.types.getVal(ret__61762__auto__);
var G__64307 = cljs.core._nth(recur_val,(0));
var G__64308 = cljs.core._nth(recur_val,(1));
var G__64309 = cljs.core._nth(recur_val,(2));
var G__64310 = cljs.core._nth(recur_val,(3));
var G__64311 = cljs.core._nth(recur_val,(4));
var G__64313 = cljs.core._nth(recur_val,(5));
var G__64314 = cljs.core._nth(recur_val,(6));
var G__64315 = cljs.core._nth(recur_val,(7));
G__62832 = G__64307;
G__62833 = G__64308;
G__62834 = G__64309;
G__62835 = G__64310;
G__62836 = G__64311;
G__62837 = G__64313;
G__62838 = G__64314;
G__62839 = G__64315;
continue;
} else {
return ret__61762__auto__;
}
break;
}
});
} else {
var G__62863 = cljs.core._nth(params,(0));
var G__62864 = cljs.core._nth(params,(1));
var G__62865 = cljs.core._nth(params,(2));
var G__62866 = cljs.core._nth(params,(3));
var G__62867 = cljs.core._nth(params,(4));
var G__62868 = cljs.core._nth(params,(5));
var G__62869 = cljs.core._nth(params,(6));
var G__62870 = cljs.core._nth(params,(7));
return (function sci$impl$fns$fun_$_arity_8(G__62855,G__62856,G__62857,G__62858,G__62859,G__62860,G__62861,G__62862){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((8),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__62863,G__62855);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__62864,G__62856);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__62865,G__62857);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__62866,G__62858);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__62867,G__62859);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__62868,G__62860);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__62869,G__62861);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__62870,G__62862);
var ctx__61761__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$8);
var ret__61762__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__61761__auto__,body) : interpret.call(null,ctx__61761__auto__,body));
var recur_QMARK___61763__auto__ = (ret__61762__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___61763__auto__){
var recur_val = sci.impl.types.getVal(ret__61762__auto__);
var G__64339 = cljs.core._nth(recur_val,(0));
var G__64340 = cljs.core._nth(recur_val,(1));
var G__64341 = cljs.core._nth(recur_val,(2));
var G__64342 = cljs.core._nth(recur_val,(3));
var G__64343 = cljs.core._nth(recur_val,(4));
var G__64344 = cljs.core._nth(recur_val,(5));
var G__64345 = cljs.core._nth(recur_val,(6));
var G__64346 = cljs.core._nth(recur_val,(7));
G__62855 = G__64339;
G__62856 = G__64340;
G__62857 = G__64341;
G__62858 = G__64342;
G__62859 = G__64343;
G__62860 = G__64344;
G__62861 = G__64345;
G__62862 = G__64346;
continue;
} else {
return ret__61762__auto__;
}
break;
}
});
}

break;
case (9):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__62899 = cljs.core._nth(params,(0));
var G__62900 = cljs.core._nth(params,(1));
var G__62901 = cljs.core._nth(params,(2));
var G__62902 = cljs.core._nth(params,(3));
var G__62903 = cljs.core._nth(params,(4));
var G__62904 = cljs.core._nth(params,(5));
var G__62905 = cljs.core._nth(params,(6));
var G__62906 = cljs.core._nth(params,(7));
var G__62907 = cljs.core._nth(params,(8));
return (function sci$impl$fns$fun_$_arity_9(G__62890,G__62891,G__62892,G__62893,G__62894,G__62895,G__62896,G__62897,G__62898){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__62899,G__62890);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__62900,G__62891);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__62901,G__62892);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__62902,G__62893);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__62903,G__62894);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__62904,G__62895);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__62905,G__62896);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__62906,G__62897);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__62907,G__62898);
var ctx__61761__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$9);
var ret__61762__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__61761__auto__,body) : interpret.call(null,ctx__61761__auto__,body));
var recur_QMARK___61763__auto__ = (ret__61762__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___61763__auto__){
var recur_val = sci.impl.types.getVal(ret__61762__auto__);
var G__64382 = cljs.core._nth(recur_val,(0));
var G__64383 = cljs.core._nth(recur_val,(1));
var G__64384 = cljs.core._nth(recur_val,(2));
var G__64385 = cljs.core._nth(recur_val,(3));
var G__64386 = cljs.core._nth(recur_val,(4));
var G__64387 = cljs.core._nth(recur_val,(5));
var G__64388 = cljs.core._nth(recur_val,(6));
var G__64389 = cljs.core._nth(recur_val,(7));
var G__64390 = cljs.core._nth(recur_val,(8));
G__62890 = G__64382;
G__62891 = G__64383;
G__62892 = G__64384;
G__62893 = G__64385;
G__62894 = G__64386;
G__62895 = G__64387;
G__62896 = G__64388;
G__62897 = G__64389;
G__62898 = G__64390;
continue;
} else {
return ret__61762__auto__;
}
break;
}
});
} else {
var G__62919 = cljs.core._nth(params,(0));
var G__62920 = cljs.core._nth(params,(1));
var G__62921 = cljs.core._nth(params,(2));
var G__62922 = cljs.core._nth(params,(3));
var G__62923 = cljs.core._nth(params,(4));
var G__62924 = cljs.core._nth(params,(5));
var G__62925 = cljs.core._nth(params,(6));
var G__62926 = cljs.core._nth(params,(7));
var G__62927 = cljs.core._nth(params,(8));
return (function sci$impl$fns$fun_$_arity_9(G__62910,G__62911,G__62912,G__62913,G__62914,G__62915,G__62916,G__62917,G__62918){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((9),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__62919,G__62910);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__62920,G__62911);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__62921,G__62912);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__62922,G__62913);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__62923,G__62914);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__62924,G__62915);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__62925,G__62916);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__62926,G__62917);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__62927,G__62918);
var ctx__61761__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$9);
var ret__61762__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__61761__auto__,body) : interpret.call(null,ctx__61761__auto__,body));
var recur_QMARK___61763__auto__ = (ret__61762__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___61763__auto__){
var recur_val = sci.impl.types.getVal(ret__61762__auto__);
var G__64398 = cljs.core._nth(recur_val,(0));
var G__64399 = cljs.core._nth(recur_val,(1));
var G__64400 = cljs.core._nth(recur_val,(2));
var G__64401 = cljs.core._nth(recur_val,(3));
var G__64402 = cljs.core._nth(recur_val,(4));
var G__64403 = cljs.core._nth(recur_val,(5));
var G__64404 = cljs.core._nth(recur_val,(6));
var G__64405 = cljs.core._nth(recur_val,(7));
var G__64406 = cljs.core._nth(recur_val,(8));
G__62910 = G__64398;
G__62911 = G__64399;
G__62912 = G__64400;
G__62913 = G__64401;
G__62914 = G__64402;
G__62915 = G__64403;
G__62916 = G__64404;
G__62917 = G__64405;
G__62918 = G__64406;
continue;
} else {
return ret__61762__auto__;
}
break;
}
});
}

break;
case (10):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__62944 = cljs.core._nth(params,(0));
var G__62945 = cljs.core._nth(params,(1));
var G__62946 = cljs.core._nth(params,(2));
var G__62947 = cljs.core._nth(params,(3));
var G__62948 = cljs.core._nth(params,(4));
var G__62949 = cljs.core._nth(params,(5));
var G__62950 = cljs.core._nth(params,(6));
var G__62951 = cljs.core._nth(params,(7));
var G__62952 = cljs.core._nth(params,(8));
var G__62953 = cljs.core._nth(params,(9));
return (function sci$impl$fns$fun_$_arity_10(G__62934,G__62935,G__62936,G__62937,G__62938,G__62939,G__62940,G__62941,G__62942,G__62943){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__62944,G__62934);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__62945,G__62935);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__62946,G__62936);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__62947,G__62937);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__62948,G__62938);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__62949,G__62939);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__62950,G__62940);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__62951,G__62941);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__62952,G__62942);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__62953,G__62943);
var ctx__61761__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$10);
var ret__61762__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__61761__auto__,body) : interpret.call(null,ctx__61761__auto__,body));
var recur_QMARK___61763__auto__ = (ret__61762__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___61763__auto__){
var recur_val = sci.impl.types.getVal(ret__61762__auto__);
var G__64428 = cljs.core._nth(recur_val,(0));
var G__64429 = cljs.core._nth(recur_val,(1));
var G__64430 = cljs.core._nth(recur_val,(2));
var G__64431 = cljs.core._nth(recur_val,(3));
var G__64432 = cljs.core._nth(recur_val,(4));
var G__64433 = cljs.core._nth(recur_val,(5));
var G__64434 = cljs.core._nth(recur_val,(6));
var G__64435 = cljs.core._nth(recur_val,(7));
var G__64436 = cljs.core._nth(recur_val,(8));
var G__64437 = cljs.core._nth(recur_val,(9));
G__62934 = G__64428;
G__62935 = G__64429;
G__62936 = G__64430;
G__62937 = G__64431;
G__62938 = G__64432;
G__62939 = G__64433;
G__62940 = G__64434;
G__62941 = G__64435;
G__62942 = G__64436;
G__62943 = G__64437;
continue;
} else {
return ret__61762__auto__;
}
break;
}
});
} else {
var G__62984 = cljs.core._nth(params,(0));
var G__62985 = cljs.core._nth(params,(1));
var G__62986 = cljs.core._nth(params,(2));
var G__62987 = cljs.core._nth(params,(3));
var G__62988 = cljs.core._nth(params,(4));
var G__62989 = cljs.core._nth(params,(5));
var G__62990 = cljs.core._nth(params,(6));
var G__62991 = cljs.core._nth(params,(7));
var G__62992 = cljs.core._nth(params,(8));
var G__62993 = cljs.core._nth(params,(9));
return (function sci$impl$fns$fun_$_arity_10(G__62974,G__62975,G__62976,G__62977,G__62978,G__62979,G__62980,G__62981,G__62982,G__62983){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((10),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__62984,G__62974);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__62985,G__62975);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__62986,G__62976);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__62987,G__62977);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__62988,G__62978);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__62989,G__62979);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__62990,G__62980);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__62991,G__62981);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__62992,G__62982);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__62993,G__62983);
var ctx__61761__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$10);
var ret__61762__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__61761__auto__,body) : interpret.call(null,ctx__61761__auto__,body));
var recur_QMARK___61763__auto__ = (ret__61762__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___61763__auto__){
var recur_val = sci.impl.types.getVal(ret__61762__auto__);
var G__64446 = cljs.core._nth(recur_val,(0));
var G__64447 = cljs.core._nth(recur_val,(1));
var G__64448 = cljs.core._nth(recur_val,(2));
var G__64449 = cljs.core._nth(recur_val,(3));
var G__64450 = cljs.core._nth(recur_val,(4));
var G__64451 = cljs.core._nth(recur_val,(5));
var G__64452 = cljs.core._nth(recur_val,(6));
var G__64453 = cljs.core._nth(recur_val,(7));
var G__64454 = cljs.core._nth(recur_val,(8));
var G__64455 = cljs.core._nth(recur_val,(9));
G__62974 = G__64446;
G__62975 = G__64447;
G__62976 = G__64448;
G__62977 = G__64449;
G__62978 = G__64450;
G__62979 = G__64451;
G__62980 = G__64452;
G__62981 = G__64453;
G__62982 = G__64454;
G__62983 = G__64455;
continue;
} else {
return ret__61762__auto__;
}
break;
}
});
}

break;
case (11):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__63010 = cljs.core._nth(params,(0));
var G__63011 = cljs.core._nth(params,(1));
var G__63012 = cljs.core._nth(params,(2));
var G__63013 = cljs.core._nth(params,(3));
var G__63014 = cljs.core._nth(params,(4));
var G__63015 = cljs.core._nth(params,(5));
var G__63016 = cljs.core._nth(params,(6));
var G__63017 = cljs.core._nth(params,(7));
var G__63018 = cljs.core._nth(params,(8));
var G__63019 = cljs.core._nth(params,(9));
var G__63020 = cljs.core._nth(params,(10));
return (function sci$impl$fns$fun_$_arity_11(G__62999,G__63000,G__63001,G__63002,G__63003,G__63004,G__63005,G__63006,G__63007,G__63008,G__63009){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__63010,G__62999);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__63011,G__63000);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__63012,G__63001);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__63013,G__63002);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__63014,G__63003);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__63015,G__63004);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__63016,G__63005);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__63017,G__63006);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__63018,G__63007);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__63019,G__63008);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__63020,G__63009);
var ctx__61761__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$11);
var ret__61762__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__61761__auto__,body) : interpret.call(null,ctx__61761__auto__,body));
var recur_QMARK___61763__auto__ = (ret__61762__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___61763__auto__){
var recur_val = sci.impl.types.getVal(ret__61762__auto__);
var G__64462 = cljs.core._nth(recur_val,(0));
var G__64463 = cljs.core._nth(recur_val,(1));
var G__64464 = cljs.core._nth(recur_val,(2));
var G__64465 = cljs.core._nth(recur_val,(3));
var G__64466 = cljs.core._nth(recur_val,(4));
var G__64467 = cljs.core._nth(recur_val,(5));
var G__64468 = cljs.core._nth(recur_val,(6));
var G__64469 = cljs.core._nth(recur_val,(7));
var G__64470 = cljs.core._nth(recur_val,(8));
var G__64471 = cljs.core._nth(recur_val,(9));
var G__64472 = cljs.core._nth(recur_val,(10));
G__62999 = G__64462;
G__63000 = G__64463;
G__63001 = G__64464;
G__63002 = G__64465;
G__63003 = G__64466;
G__63004 = G__64467;
G__63005 = G__64468;
G__63006 = G__64469;
G__63007 = G__64470;
G__63008 = G__64471;
G__63009 = G__64472;
continue;
} else {
return ret__61762__auto__;
}
break;
}
});
} else {
var G__63037 = cljs.core._nth(params,(0));
var G__63038 = cljs.core._nth(params,(1));
var G__63039 = cljs.core._nth(params,(2));
var G__63040 = cljs.core._nth(params,(3));
var G__63041 = cljs.core._nth(params,(4));
var G__63042 = cljs.core._nth(params,(5));
var G__63043 = cljs.core._nth(params,(6));
var G__63044 = cljs.core._nth(params,(7));
var G__63045 = cljs.core._nth(params,(8));
var G__63046 = cljs.core._nth(params,(9));
var G__63047 = cljs.core._nth(params,(10));
return (function sci$impl$fns$fun_$_arity_11(G__63026,G__63027,G__63028,G__63029,G__63030,G__63031,G__63032,G__63033,G__63034,G__63035,G__63036){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((11),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__63037,G__63026);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__63038,G__63027);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__63039,G__63028);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__63040,G__63029);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__63041,G__63030);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__63042,G__63031);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__63043,G__63032);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__63044,G__63033);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__63045,G__63034);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__63046,G__63035);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__63047,G__63036);
var ctx__61761__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$11);
var ret__61762__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__61761__auto__,body) : interpret.call(null,ctx__61761__auto__,body));
var recur_QMARK___61763__auto__ = (ret__61762__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___61763__auto__){
var recur_val = sci.impl.types.getVal(ret__61762__auto__);
var G__64498 = cljs.core._nth(recur_val,(0));
var G__64499 = cljs.core._nth(recur_val,(1));
var G__64500 = cljs.core._nth(recur_val,(2));
var G__64501 = cljs.core._nth(recur_val,(3));
var G__64502 = cljs.core._nth(recur_val,(4));
var G__64503 = cljs.core._nth(recur_val,(5));
var G__64504 = cljs.core._nth(recur_val,(6));
var G__64505 = cljs.core._nth(recur_val,(7));
var G__64506 = cljs.core._nth(recur_val,(8));
var G__64507 = cljs.core._nth(recur_val,(9));
var G__64508 = cljs.core._nth(recur_val,(10));
G__63026 = G__64498;
G__63027 = G__64499;
G__63028 = G__64500;
G__63029 = G__64501;
G__63030 = G__64502;
G__63031 = G__64503;
G__63032 = G__64504;
G__63033 = G__64505;
G__63034 = G__64506;
G__63035 = G__64507;
G__63036 = G__64508;
continue;
} else {
return ret__61762__auto__;
}
break;
}
});
}

break;
case (12):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__63061 = cljs.core._nth(params,(0));
var G__63062 = cljs.core._nth(params,(1));
var G__63063 = cljs.core._nth(params,(2));
var G__63064 = cljs.core._nth(params,(3));
var G__63065 = cljs.core._nth(params,(4));
var G__63066 = cljs.core._nth(params,(5));
var G__63067 = cljs.core._nth(params,(6));
var G__63068 = cljs.core._nth(params,(7));
var G__63069 = cljs.core._nth(params,(8));
var G__63070 = cljs.core._nth(params,(9));
var G__63071 = cljs.core._nth(params,(10));
var G__63072 = cljs.core._nth(params,(11));
return (function sci$impl$fns$fun_$_arity_12(G__63049,G__63050,G__63051,G__63052,G__63053,G__63054,G__63055,G__63056,G__63057,G__63058,G__63059,G__63060){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__63061,G__63049);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__63062,G__63050);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__63063,G__63051);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__63064,G__63052);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__63065,G__63053);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__63066,G__63054);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__63067,G__63055);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__63068,G__63056);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__63069,G__63057);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__63070,G__63058);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__63071,G__63059);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__63072,G__63060);
var ctx__61761__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$12);
var ret__61762__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__61761__auto__,body) : interpret.call(null,ctx__61761__auto__,body));
var recur_QMARK___61763__auto__ = (ret__61762__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___61763__auto__){
var recur_val = sci.impl.types.getVal(ret__61762__auto__);
var G__64523 = cljs.core._nth(recur_val,(0));
var G__64524 = cljs.core._nth(recur_val,(1));
var G__64525 = cljs.core._nth(recur_val,(2));
var G__64526 = cljs.core._nth(recur_val,(3));
var G__64527 = cljs.core._nth(recur_val,(4));
var G__64528 = cljs.core._nth(recur_val,(5));
var G__64529 = cljs.core._nth(recur_val,(6));
var G__64530 = cljs.core._nth(recur_val,(7));
var G__64531 = cljs.core._nth(recur_val,(8));
var G__64532 = cljs.core._nth(recur_val,(9));
var G__64533 = cljs.core._nth(recur_val,(10));
var G__64534 = cljs.core._nth(recur_val,(11));
G__63049 = G__64523;
G__63050 = G__64524;
G__63051 = G__64525;
G__63052 = G__64526;
G__63053 = G__64527;
G__63054 = G__64528;
G__63055 = G__64529;
G__63056 = G__64530;
G__63057 = G__64531;
G__63058 = G__64532;
G__63059 = G__64533;
G__63060 = G__64534;
continue;
} else {
return ret__61762__auto__;
}
break;
}
});
} else {
var G__63093 = cljs.core._nth(params,(0));
var G__63094 = cljs.core._nth(params,(1));
var G__63095 = cljs.core._nth(params,(2));
var G__63096 = cljs.core._nth(params,(3));
var G__63097 = cljs.core._nth(params,(4));
var G__63098 = cljs.core._nth(params,(5));
var G__63099 = cljs.core._nth(params,(6));
var G__63100 = cljs.core._nth(params,(7));
var G__63101 = cljs.core._nth(params,(8));
var G__63102 = cljs.core._nth(params,(9));
var G__63103 = cljs.core._nth(params,(10));
var G__63104 = cljs.core._nth(params,(11));
return (function sci$impl$fns$fun_$_arity_12(G__63081,G__63082,G__63083,G__63084,G__63085,G__63086,G__63087,G__63088,G__63089,G__63090,G__63091,G__63092){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((12),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__63093,G__63081);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__63094,G__63082);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__63095,G__63083);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__63096,G__63084);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__63097,G__63085);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__63098,G__63086);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__63099,G__63087);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__63100,G__63088);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__63101,G__63089);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__63102,G__63090);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__63103,G__63091);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__63104,G__63092);
var ctx__61761__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$12);
var ret__61762__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__61761__auto__,body) : interpret.call(null,ctx__61761__auto__,body));
var recur_QMARK___61763__auto__ = (ret__61762__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___61763__auto__){
var recur_val = sci.impl.types.getVal(ret__61762__auto__);
var G__64547 = cljs.core._nth(recur_val,(0));
var G__64548 = cljs.core._nth(recur_val,(1));
var G__64549 = cljs.core._nth(recur_val,(2));
var G__64550 = cljs.core._nth(recur_val,(3));
var G__64551 = cljs.core._nth(recur_val,(4));
var G__64552 = cljs.core._nth(recur_val,(5));
var G__64553 = cljs.core._nth(recur_val,(6));
var G__64554 = cljs.core._nth(recur_val,(7));
var G__64555 = cljs.core._nth(recur_val,(8));
var G__64556 = cljs.core._nth(recur_val,(9));
var G__64557 = cljs.core._nth(recur_val,(10));
var G__64558 = cljs.core._nth(recur_val,(11));
G__63081 = G__64547;
G__63082 = G__64548;
G__63083 = G__64549;
G__63084 = G__64550;
G__63085 = G__64551;
G__63086 = G__64552;
G__63087 = G__64553;
G__63088 = G__64554;
G__63089 = G__64555;
G__63090 = G__64556;
G__63091 = G__64557;
G__63092 = G__64558;
continue;
} else {
return ret__61762__auto__;
}
break;
}
});
}

break;
case (13):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__63137 = cljs.core._nth(params,(0));
var G__63138 = cljs.core._nth(params,(1));
var G__63139 = cljs.core._nth(params,(2));
var G__63140 = cljs.core._nth(params,(3));
var G__63141 = cljs.core._nth(params,(4));
var G__63142 = cljs.core._nth(params,(5));
var G__63143 = cljs.core._nth(params,(6));
var G__63144 = cljs.core._nth(params,(7));
var G__63145 = cljs.core._nth(params,(8));
var G__63146 = cljs.core._nth(params,(9));
var G__63147 = cljs.core._nth(params,(10));
var G__63148 = cljs.core._nth(params,(11));
var G__63149 = cljs.core._nth(params,(12));
return (function sci$impl$fns$fun_$_arity_13(G__63124,G__63125,G__63126,G__63127,G__63128,G__63129,G__63130,G__63131,G__63132,G__63133,G__63134,G__63135,G__63136){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__63137,G__63124);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__63138,G__63125);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__63139,G__63126);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__63140,G__63127);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__63141,G__63128);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__63142,G__63129);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__63143,G__63130);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__63144,G__63131);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__63145,G__63132);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__63146,G__63133);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__63147,G__63134);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__63148,G__63135);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__63149,G__63136);
var ctx__61761__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$13);
var ret__61762__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__61761__auto__,body) : interpret.call(null,ctx__61761__auto__,body));
var recur_QMARK___61763__auto__ = (ret__61762__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___61763__auto__){
var recur_val = sci.impl.types.getVal(ret__61762__auto__);
var G__64567 = cljs.core._nth(recur_val,(0));
var G__64568 = cljs.core._nth(recur_val,(1));
var G__64569 = cljs.core._nth(recur_val,(2));
var G__64570 = cljs.core._nth(recur_val,(3));
var G__64571 = cljs.core._nth(recur_val,(4));
var G__64572 = cljs.core._nth(recur_val,(5));
var G__64573 = cljs.core._nth(recur_val,(6));
var G__64574 = cljs.core._nth(recur_val,(7));
var G__64575 = cljs.core._nth(recur_val,(8));
var G__64576 = cljs.core._nth(recur_val,(9));
var G__64577 = cljs.core._nth(recur_val,(10));
var G__64578 = cljs.core._nth(recur_val,(11));
var G__64579 = cljs.core._nth(recur_val,(12));
G__63124 = G__64567;
G__63125 = G__64568;
G__63126 = G__64569;
G__63127 = G__64570;
G__63128 = G__64571;
G__63129 = G__64572;
G__63130 = G__64573;
G__63131 = G__64574;
G__63132 = G__64575;
G__63133 = G__64576;
G__63134 = G__64577;
G__63135 = G__64578;
G__63136 = G__64579;
continue;
} else {
return ret__61762__auto__;
}
break;
}
});
} else {
var G__63184 = cljs.core._nth(params,(0));
var G__63185 = cljs.core._nth(params,(1));
var G__63186 = cljs.core._nth(params,(2));
var G__63187 = cljs.core._nth(params,(3));
var G__63189 = cljs.core._nth(params,(4));
var G__63190 = cljs.core._nth(params,(5));
var G__63191 = cljs.core._nth(params,(6));
var G__63192 = cljs.core._nth(params,(7));
var G__63193 = cljs.core._nth(params,(8));
var G__63194 = cljs.core._nth(params,(9));
var G__63195 = cljs.core._nth(params,(10));
var G__63196 = cljs.core._nth(params,(11));
var G__63197 = cljs.core._nth(params,(12));
return (function sci$impl$fns$fun_$_arity_13(G__63171,G__63172,G__63173,G__63174,G__63175,G__63176,G__63177,G__63178,G__63179,G__63180,G__63181,G__63182,G__63183){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((13),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__63184,G__63171);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__63185,G__63172);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__63186,G__63173);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__63187,G__63174);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__63189,G__63175);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__63190,G__63176);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__63191,G__63177);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__63192,G__63178);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__63193,G__63179);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__63194,G__63180);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__63195,G__63181);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__63196,G__63182);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__63197,G__63183);
var ctx__61761__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$13);
var ret__61762__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__61761__auto__,body) : interpret.call(null,ctx__61761__auto__,body));
var recur_QMARK___61763__auto__ = (ret__61762__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___61763__auto__){
var recur_val = sci.impl.types.getVal(ret__61762__auto__);
var G__64592 = cljs.core._nth(recur_val,(0));
var G__64593 = cljs.core._nth(recur_val,(1));
var G__64594 = cljs.core._nth(recur_val,(2));
var G__64595 = cljs.core._nth(recur_val,(3));
var G__64596 = cljs.core._nth(recur_val,(4));
var G__64597 = cljs.core._nth(recur_val,(5));
var G__64598 = cljs.core._nth(recur_val,(6));
var G__64599 = cljs.core._nth(recur_val,(7));
var G__64600 = cljs.core._nth(recur_val,(8));
var G__64601 = cljs.core._nth(recur_val,(9));
var G__64602 = cljs.core._nth(recur_val,(10));
var G__64603 = cljs.core._nth(recur_val,(11));
var G__64604 = cljs.core._nth(recur_val,(12));
G__63171 = G__64592;
G__63172 = G__64593;
G__63173 = G__64594;
G__63174 = G__64595;
G__63175 = G__64596;
G__63176 = G__64597;
G__63177 = G__64598;
G__63178 = G__64599;
G__63179 = G__64600;
G__63180 = G__64601;
G__63181 = G__64602;
G__63182 = G__64603;
G__63183 = G__64604;
continue;
} else {
return ret__61762__auto__;
}
break;
}
});
}

break;
case (14):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__63287 = cljs.core._nth(params,(0));
var G__63288 = cljs.core._nth(params,(1));
var G__63289 = cljs.core._nth(params,(2));
var G__63290 = cljs.core._nth(params,(3));
var G__63291 = cljs.core._nth(params,(4));
var G__63292 = cljs.core._nth(params,(5));
var G__63293 = cljs.core._nth(params,(6));
var G__63294 = cljs.core._nth(params,(7));
var G__63295 = cljs.core._nth(params,(8));
var G__63296 = cljs.core._nth(params,(9));
var G__63297 = cljs.core._nth(params,(10));
var G__63298 = cljs.core._nth(params,(11));
var G__63299 = cljs.core._nth(params,(12));
var G__63300 = cljs.core._nth(params,(13));
var G__63301 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__63272,G__63273,G__63274,G__63275,G__63276,G__63277,G__63278,G__63279,G__63280,G__63281,G__63282,G__63283,G__63284,G__63285,G__63286){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__63287,G__63272);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__63288,G__63273);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__63289,G__63274);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__63290,G__63275);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__63291,G__63276);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__63292,G__63277);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__63293,G__63278);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__63294,G__63279);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__63295,G__63280);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__63296,G__63281);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__63297,G__63282);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__63298,G__63283);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__63299,G__63284);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__63300,G__63285);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__63301,G__63286);
var ctx__61761__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$15);
var ret__61762__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__61761__auto__,body) : interpret.call(null,ctx__61761__auto__,body));
var recur_QMARK___61763__auto__ = (ret__61762__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___61763__auto__){
var recur_val = sci.impl.types.getVal(ret__61762__auto__);
var G__64636 = cljs.core._nth(recur_val,(0));
var G__64637 = cljs.core._nth(recur_val,(1));
var G__64638 = cljs.core._nth(recur_val,(2));
var G__64639 = cljs.core._nth(recur_val,(3));
var G__64640 = cljs.core._nth(recur_val,(4));
var G__64641 = cljs.core._nth(recur_val,(5));
var G__64642 = cljs.core._nth(recur_val,(6));
var G__64643 = cljs.core._nth(recur_val,(7));
var G__64644 = cljs.core._nth(recur_val,(8));
var G__64645 = cljs.core._nth(recur_val,(9));
var G__64646 = cljs.core._nth(recur_val,(10));
var G__64647 = cljs.core._nth(recur_val,(11));
var G__64648 = cljs.core._nth(recur_val,(12));
var G__64649 = cljs.core._nth(recur_val,(13));
var G__64650 = cljs.core._nth(recur_val,(14));
G__63272 = G__64636;
G__63273 = G__64637;
G__63274 = G__64638;
G__63275 = G__64639;
G__63276 = G__64640;
G__63277 = G__64641;
G__63278 = G__64642;
G__63279 = G__64643;
G__63280 = G__64644;
G__63281 = G__64645;
G__63282 = G__64646;
G__63283 = G__64647;
G__63284 = G__64648;
G__63285 = G__64649;
G__63286 = G__64650;
continue;
} else {
return ret__61762__auto__;
}
break;
}
});
} else {
var G__63332 = cljs.core._nth(params,(0));
var G__63333 = cljs.core._nth(params,(1));
var G__63334 = cljs.core._nth(params,(2));
var G__63335 = cljs.core._nth(params,(3));
var G__63336 = cljs.core._nth(params,(4));
var G__63337 = cljs.core._nth(params,(5));
var G__63338 = cljs.core._nth(params,(6));
var G__63339 = cljs.core._nth(params,(7));
var G__63340 = cljs.core._nth(params,(8));
var G__63341 = cljs.core._nth(params,(9));
var G__63342 = cljs.core._nth(params,(10));
var G__63343 = cljs.core._nth(params,(11));
var G__63344 = cljs.core._nth(params,(12));
var G__63345 = cljs.core._nth(params,(13));
var G__63346 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__63317,G__63318,G__63319,G__63320,G__63321,G__63322,G__63323,G__63324,G__63325,G__63326,G__63327,G__63328,G__63329,G__63330,G__63331){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((15),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__63332,G__63317);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__63333,G__63318);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__63334,G__63319);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__63335,G__63320);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__63336,G__63321);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__63337,G__63322);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__63338,G__63323);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__63339,G__63324);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__63340,G__63325);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__63341,G__63326);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__63342,G__63327);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__63343,G__63328);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__63344,G__63329);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__63345,G__63330);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__63346,G__63331);
var ctx__61761__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$15);
var ret__61762__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__61761__auto__,body) : interpret.call(null,ctx__61761__auto__,body));
var recur_QMARK___61763__auto__ = (ret__61762__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___61763__auto__){
var recur_val = sci.impl.types.getVal(ret__61762__auto__);
var G__64660 = cljs.core._nth(recur_val,(0));
var G__64661 = cljs.core._nth(recur_val,(1));
var G__64662 = cljs.core._nth(recur_val,(2));
var G__64663 = cljs.core._nth(recur_val,(3));
var G__64664 = cljs.core._nth(recur_val,(4));
var G__64665 = cljs.core._nth(recur_val,(5));
var G__64666 = cljs.core._nth(recur_val,(6));
var G__64667 = cljs.core._nth(recur_val,(7));
var G__64668 = cljs.core._nth(recur_val,(8));
var G__64669 = cljs.core._nth(recur_val,(9));
var G__64670 = cljs.core._nth(recur_val,(10));
var G__64671 = cljs.core._nth(recur_val,(11));
var G__64672 = cljs.core._nth(recur_val,(12));
var G__64673 = cljs.core._nth(recur_val,(13));
var G__64674 = cljs.core._nth(recur_val,(14));
G__63317 = G__64660;
G__63318 = G__64661;
G__63319 = G__64662;
G__63320 = G__64663;
G__63321 = G__64664;
G__63322 = G__64665;
G__63323 = G__64666;
G__63324 = G__64667;
G__63325 = G__64668;
G__63326 = G__64669;
G__63327 = G__64670;
G__63328 = G__64671;
G__63329 = G__64672;
G__63330 = G__64673;
G__63331 = G__64674;
continue;
} else {
return ret__61762__auto__;
}
break;
}
});
}

break;
case (15):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__63384 = cljs.core._nth(params,(0));
var G__63385 = cljs.core._nth(params,(1));
var G__63386 = cljs.core._nth(params,(2));
var G__63387 = cljs.core._nth(params,(3));
var G__63388 = cljs.core._nth(params,(4));
var G__63389 = cljs.core._nth(params,(5));
var G__63390 = cljs.core._nth(params,(6));
var G__63391 = cljs.core._nth(params,(7));
var G__63392 = cljs.core._nth(params,(8));
var G__63393 = cljs.core._nth(params,(9));
var G__63394 = cljs.core._nth(params,(10));
var G__63395 = cljs.core._nth(params,(11));
var G__63396 = cljs.core._nth(params,(12));
var G__63397 = cljs.core._nth(params,(13));
var G__63398 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__63369,G__63370,G__63371,G__63372,G__63373,G__63374,G__63375,G__63376,G__63377,G__63378,G__63379,G__63380,G__63381,G__63382,G__63383){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__63384,G__63369);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__63385,G__63370);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__63386,G__63371);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__63387,G__63372);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__63388,G__63373);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__63389,G__63374);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__63390,G__63375);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__63391,G__63376);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__63392,G__63377);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__63393,G__63378);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__63394,G__63379);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__63395,G__63380);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__63396,G__63381);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__63397,G__63382);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__63398,G__63383);
var ctx__61761__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$15);
var ret__61762__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__61761__auto__,body) : interpret.call(null,ctx__61761__auto__,body));
var recur_QMARK___61763__auto__ = (ret__61762__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___61763__auto__){
var recur_val = sci.impl.types.getVal(ret__61762__auto__);
var G__64686 = cljs.core._nth(recur_val,(0));
var G__64687 = cljs.core._nth(recur_val,(1));
var G__64688 = cljs.core._nth(recur_val,(2));
var G__64689 = cljs.core._nth(recur_val,(3));
var G__64690 = cljs.core._nth(recur_val,(4));
var G__64691 = cljs.core._nth(recur_val,(5));
var G__64692 = cljs.core._nth(recur_val,(6));
var G__64693 = cljs.core._nth(recur_val,(7));
var G__64694 = cljs.core._nth(recur_val,(8));
var G__64695 = cljs.core._nth(recur_val,(9));
var G__64696 = cljs.core._nth(recur_val,(10));
var G__64697 = cljs.core._nth(recur_val,(11));
var G__64698 = cljs.core._nth(recur_val,(12));
var G__64699 = cljs.core._nth(recur_val,(13));
var G__64700 = cljs.core._nth(recur_val,(14));
G__63369 = G__64686;
G__63370 = G__64687;
G__63371 = G__64688;
G__63372 = G__64689;
G__63373 = G__64690;
G__63374 = G__64691;
G__63375 = G__64692;
G__63376 = G__64693;
G__63377 = G__64694;
G__63378 = G__64695;
G__63379 = G__64696;
G__63380 = G__64697;
G__63381 = G__64698;
G__63382 = G__64699;
G__63383 = G__64700;
continue;
} else {
return ret__61762__auto__;
}
break;
}
});
} else {
var G__63434 = cljs.core._nth(params,(0));
var G__63435 = cljs.core._nth(params,(1));
var G__63436 = cljs.core._nth(params,(2));
var G__63437 = cljs.core._nth(params,(3));
var G__63438 = cljs.core._nth(params,(4));
var G__63439 = cljs.core._nth(params,(5));
var G__63440 = cljs.core._nth(params,(6));
var G__63441 = cljs.core._nth(params,(7));
var G__63442 = cljs.core._nth(params,(8));
var G__63443 = cljs.core._nth(params,(9));
var G__63444 = cljs.core._nth(params,(10));
var G__63445 = cljs.core._nth(params,(11));
var G__63446 = cljs.core._nth(params,(12));
var G__63447 = cljs.core._nth(params,(13));
var G__63448 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__63419,G__63420,G__63421,G__63422,G__63423,G__63424,G__63425,G__63426,G__63427,G__63428,G__63429,G__63430,G__63431,G__63432,G__63433){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((15),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__63434,G__63419);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__63435,G__63420);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__63436,G__63421);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__63437,G__63422);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__63438,G__63423);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__63439,G__63424);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__63440,G__63425);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__63441,G__63426);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__63442,G__63427);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__63443,G__63428);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__63444,G__63429);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__63445,G__63430);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__63446,G__63431);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__63447,G__63432);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__63448,G__63433);
var ctx__61761__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$15);
var ret__61762__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__61761__auto__,body) : interpret.call(null,ctx__61761__auto__,body));
var recur_QMARK___61763__auto__ = (ret__61762__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___61763__auto__){
var recur_val = sci.impl.types.getVal(ret__61762__auto__);
var G__64716 = cljs.core._nth(recur_val,(0));
var G__64717 = cljs.core._nth(recur_val,(1));
var G__64718 = cljs.core._nth(recur_val,(2));
var G__64719 = cljs.core._nth(recur_val,(3));
var G__64720 = cljs.core._nth(recur_val,(4));
var G__64721 = cljs.core._nth(recur_val,(5));
var G__64722 = cljs.core._nth(recur_val,(6));
var G__64723 = cljs.core._nth(recur_val,(7));
var G__64724 = cljs.core._nth(recur_val,(8));
var G__64725 = cljs.core._nth(recur_val,(9));
var G__64726 = cljs.core._nth(recur_val,(10));
var G__64727 = cljs.core._nth(recur_val,(11));
var G__64728 = cljs.core._nth(recur_val,(12));
var G__64729 = cljs.core._nth(recur_val,(13));
var G__64730 = cljs.core._nth(recur_val,(14));
G__63419 = G__64716;
G__63420 = G__64717;
G__63421 = G__64718;
G__63422 = G__64719;
G__63423 = G__64720;
G__63424 = G__64721;
G__63425 = G__64722;
G__63426 = G__64723;
G__63427 = G__64724;
G__63428 = G__64725;
G__63429 = G__64726;
G__63430 = G__64727;
G__63431 = G__64728;
G__63432 = G__64729;
G__63433 = G__64730;
continue;
} else {
return ret__61762__auto__;
}
break;
}
});
}

break;
case (16):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__63476 = cljs.core._nth(params,(0));
var G__63477 = cljs.core._nth(params,(1));
var G__63478 = cljs.core._nth(params,(2));
var G__63479 = cljs.core._nth(params,(3));
var G__63480 = cljs.core._nth(params,(4));
var G__63481 = cljs.core._nth(params,(5));
var G__63482 = cljs.core._nth(params,(6));
var G__63483 = cljs.core._nth(params,(7));
var G__63484 = cljs.core._nth(params,(8));
var G__63485 = cljs.core._nth(params,(9));
var G__63486 = cljs.core._nth(params,(10));
var G__63487 = cljs.core._nth(params,(11));
var G__63488 = cljs.core._nth(params,(12));
var G__63489 = cljs.core._nth(params,(13));
var G__63490 = cljs.core._nth(params,(14));
var G__63491 = cljs.core._nth(params,(15));
return (function sci$impl$fns$fun_$_arity_16(G__63460,G__63461,G__63462,G__63463,G__63464,G__63465,G__63466,G__63467,G__63468,G__63469,G__63470,G__63471,G__63472,G__63473,G__63474,G__63475){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__63476,G__63460);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__63477,G__63461);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__63478,G__63462);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__63479,G__63463);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__63480,G__63464);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__63481,G__63465);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__63482,G__63466);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__63483,G__63467);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__63484,G__63468);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__63485,G__63469);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__63486,G__63470);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__63487,G__63471);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__63488,G__63472);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__63489,G__63473);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__63490,G__63474);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__63491,G__63475);
var ctx__61761__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$16);
var ret__61762__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__61761__auto__,body) : interpret.call(null,ctx__61761__auto__,body));
var recur_QMARK___61763__auto__ = (ret__61762__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___61763__auto__){
var recur_val = sci.impl.types.getVal(ret__61762__auto__);
var G__64737 = cljs.core._nth(recur_val,(0));
var G__64738 = cljs.core._nth(recur_val,(1));
var G__64739 = cljs.core._nth(recur_val,(2));
var G__64740 = cljs.core._nth(recur_val,(3));
var G__64741 = cljs.core._nth(recur_val,(4));
var G__64742 = cljs.core._nth(recur_val,(5));
var G__64743 = cljs.core._nth(recur_val,(6));
var G__64744 = cljs.core._nth(recur_val,(7));
var G__64745 = cljs.core._nth(recur_val,(8));
var G__64746 = cljs.core._nth(recur_val,(9));
var G__64747 = cljs.core._nth(recur_val,(10));
var G__64748 = cljs.core._nth(recur_val,(11));
var G__64749 = cljs.core._nth(recur_val,(12));
var G__64750 = cljs.core._nth(recur_val,(13));
var G__64751 = cljs.core._nth(recur_val,(14));
var G__64752 = cljs.core._nth(recur_val,(15));
G__63460 = G__64737;
G__63461 = G__64738;
G__63462 = G__64739;
G__63463 = G__64740;
G__63464 = G__64741;
G__63465 = G__64742;
G__63466 = G__64743;
G__63467 = G__64744;
G__63468 = G__64745;
G__63469 = G__64746;
G__63470 = G__64747;
G__63471 = G__64748;
G__63472 = G__64749;
G__63473 = G__64750;
G__63474 = G__64751;
G__63475 = G__64752;
continue;
} else {
return ret__61762__auto__;
}
break;
}
});
} else {
var G__63523 = cljs.core._nth(params,(0));
var G__63524 = cljs.core._nth(params,(1));
var G__63525 = cljs.core._nth(params,(2));
var G__63526 = cljs.core._nth(params,(3));
var G__63527 = cljs.core._nth(params,(4));
var G__63528 = cljs.core._nth(params,(5));
var G__63529 = cljs.core._nth(params,(6));
var G__63530 = cljs.core._nth(params,(7));
var G__63531 = cljs.core._nth(params,(8));
var G__63532 = cljs.core._nth(params,(9));
var G__63533 = cljs.core._nth(params,(10));
var G__63534 = cljs.core._nth(params,(11));
var G__63535 = cljs.core._nth(params,(12));
var G__63536 = cljs.core._nth(params,(13));
var G__63537 = cljs.core._nth(params,(14));
var G__63538 = cljs.core._nth(params,(15));
return (function sci$impl$fns$fun_$_arity_16(G__63507,G__63508,G__63509,G__63510,G__63511,G__63512,G__63513,G__63514,G__63515,G__63516,G__63517,G__63518,G__63519,G__63520,G__63521,G__63522){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((16),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__63523,G__63507);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__63524,G__63508);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__63525,G__63509);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__63526,G__63510);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__63527,G__63511);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__63528,G__63512);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__63529,G__63513);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__63530,G__63514);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__63531,G__63515);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__63532,G__63516);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__63533,G__63517);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__63534,G__63518);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__63535,G__63519);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__63536,G__63520);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__63537,G__63521);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__63538,G__63522);
var ctx__61761__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$16);
var ret__61762__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__61761__auto__,body) : interpret.call(null,ctx__61761__auto__,body));
var recur_QMARK___61763__auto__ = (ret__61762__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___61763__auto__){
var recur_val = sci.impl.types.getVal(ret__61762__auto__);
var G__64774 = cljs.core._nth(recur_val,(0));
var G__64775 = cljs.core._nth(recur_val,(1));
var G__64776 = cljs.core._nth(recur_val,(2));
var G__64777 = cljs.core._nth(recur_val,(3));
var G__64778 = cljs.core._nth(recur_val,(4));
var G__64779 = cljs.core._nth(recur_val,(5));
var G__64780 = cljs.core._nth(recur_val,(6));
var G__64781 = cljs.core._nth(recur_val,(7));
var G__64782 = cljs.core._nth(recur_val,(8));
var G__64783 = cljs.core._nth(recur_val,(9));
var G__64784 = cljs.core._nth(recur_val,(10));
var G__64785 = cljs.core._nth(recur_val,(11));
var G__64786 = cljs.core._nth(recur_val,(12));
var G__64787 = cljs.core._nth(recur_val,(13));
var G__64788 = cljs.core._nth(recur_val,(14));
var G__64789 = cljs.core._nth(recur_val,(15));
G__63507 = G__64774;
G__63508 = G__64775;
G__63509 = G__64776;
G__63510 = G__64777;
G__63511 = G__64778;
G__63512 = G__64779;
G__63513 = G__64780;
G__63514 = G__64781;
G__63515 = G__64782;
G__63516 = G__64783;
G__63517 = G__64784;
G__63518 = G__64785;
G__63519 = G__64786;
G__63520 = G__64787;
G__63521 = G__64788;
G__63522 = G__64789;
continue;
} else {
return ret__61762__auto__;
}
break;
}
});
}

break;
case (17):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__63567 = cljs.core._nth(params,(0));
var G__63568 = cljs.core._nth(params,(1));
var G__63569 = cljs.core._nth(params,(2));
var G__63570 = cljs.core._nth(params,(3));
var G__63571 = cljs.core._nth(params,(4));
var G__63572 = cljs.core._nth(params,(5));
var G__63573 = cljs.core._nth(params,(6));
var G__63574 = cljs.core._nth(params,(7));
var G__63575 = cljs.core._nth(params,(8));
var G__63576 = cljs.core._nth(params,(9));
var G__63577 = cljs.core._nth(params,(10));
var G__63578 = cljs.core._nth(params,(11));
var G__63579 = cljs.core._nth(params,(12));
var G__63580 = cljs.core._nth(params,(13));
var G__63581 = cljs.core._nth(params,(14));
var G__63582 = cljs.core._nth(params,(15));
var G__63583 = cljs.core._nth(params,(16));
return (function sci$impl$fns$fun_$_arity_17(G__63550,G__63551,G__63552,G__63553,G__63554,G__63555,G__63556,G__63557,G__63558,G__63559,G__63560,G__63561,G__63562,G__63563,G__63564,G__63565,G__63566){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__63567,G__63550);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__63568,G__63551);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__63569,G__63552);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__63570,G__63553);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__63571,G__63554);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__63572,G__63555);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__63573,G__63556);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__63574,G__63557);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__63575,G__63558);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__63576,G__63559);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__63577,G__63560);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__63578,G__63561);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__63579,G__63562);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__63580,G__63563);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__63581,G__63564);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__63582,G__63565);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__63583,G__63566);
var ctx__61761__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$17);
var ret__61762__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__61761__auto__,body) : interpret.call(null,ctx__61761__auto__,body));
var recur_QMARK___61763__auto__ = (ret__61762__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___61763__auto__){
var recur_val = sci.impl.types.getVal(ret__61762__auto__);
var G__64828 = cljs.core._nth(recur_val,(0));
var G__64829 = cljs.core._nth(recur_val,(1));
var G__64830 = cljs.core._nth(recur_val,(2));
var G__64831 = cljs.core._nth(recur_val,(3));
var G__64832 = cljs.core._nth(recur_val,(4));
var G__64833 = cljs.core._nth(recur_val,(5));
var G__64834 = cljs.core._nth(recur_val,(6));
var G__64835 = cljs.core._nth(recur_val,(7));
var G__64836 = cljs.core._nth(recur_val,(8));
var G__64837 = cljs.core._nth(recur_val,(9));
var G__64838 = cljs.core._nth(recur_val,(10));
var G__64839 = cljs.core._nth(recur_val,(11));
var G__64840 = cljs.core._nth(recur_val,(12));
var G__64841 = cljs.core._nth(recur_val,(13));
var G__64842 = cljs.core._nth(recur_val,(14));
var G__64843 = cljs.core._nth(recur_val,(15));
var G__64844 = cljs.core._nth(recur_val,(16));
G__63550 = G__64828;
G__63551 = G__64829;
G__63552 = G__64830;
G__63553 = G__64831;
G__63554 = G__64832;
G__63555 = G__64833;
G__63556 = G__64834;
G__63557 = G__64835;
G__63558 = G__64836;
G__63559 = G__64837;
G__63560 = G__64838;
G__63561 = G__64839;
G__63562 = G__64840;
G__63563 = G__64841;
G__63564 = G__64842;
G__63565 = G__64843;
G__63566 = G__64844;
continue;
} else {
return ret__61762__auto__;
}
break;
}
});
} else {
var G__63601 = cljs.core._nth(params,(0));
var G__63602 = cljs.core._nth(params,(1));
var G__63603 = cljs.core._nth(params,(2));
var G__63604 = cljs.core._nth(params,(3));
var G__63605 = cljs.core._nth(params,(4));
var G__63606 = cljs.core._nth(params,(5));
var G__63607 = cljs.core._nth(params,(6));
var G__63608 = cljs.core._nth(params,(7));
var G__63609 = cljs.core._nth(params,(8));
var G__63610 = cljs.core._nth(params,(9));
var G__63611 = cljs.core._nth(params,(10));
var G__63612 = cljs.core._nth(params,(11));
var G__63613 = cljs.core._nth(params,(12));
var G__63614 = cljs.core._nth(params,(13));
var G__63615 = cljs.core._nth(params,(14));
var G__63616 = cljs.core._nth(params,(15));
var G__63617 = cljs.core._nth(params,(16));
return (function sci$impl$fns$fun_$_arity_17(G__63584,G__63585,G__63586,G__63587,G__63588,G__63589,G__63590,G__63591,G__63592,G__63593,G__63594,G__63595,G__63596,G__63597,G__63598,G__63599,G__63600){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((17),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__63601,G__63584);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__63602,G__63585);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__63603,G__63586);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__63604,G__63587);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__63605,G__63588);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__63606,G__63589);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__63607,G__63590);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__63608,G__63591);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__63609,G__63592);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__63610,G__63593);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__63611,G__63594);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__63612,G__63595);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__63613,G__63596);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__63614,G__63597);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__63615,G__63598);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__63616,G__63599);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__63617,G__63600);
var ctx__61761__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$17);
var ret__61762__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__61761__auto__,body) : interpret.call(null,ctx__61761__auto__,body));
var recur_QMARK___61763__auto__ = (ret__61762__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___61763__auto__){
var recur_val = sci.impl.types.getVal(ret__61762__auto__);
var G__64876 = cljs.core._nth(recur_val,(0));
var G__64877 = cljs.core._nth(recur_val,(1));
var G__64878 = cljs.core._nth(recur_val,(2));
var G__64879 = cljs.core._nth(recur_val,(3));
var G__64880 = cljs.core._nth(recur_val,(4));
var G__64881 = cljs.core._nth(recur_val,(5));
var G__64882 = cljs.core._nth(recur_val,(6));
var G__64883 = cljs.core._nth(recur_val,(7));
var G__64884 = cljs.core._nth(recur_val,(8));
var G__64885 = cljs.core._nth(recur_val,(9));
var G__64886 = cljs.core._nth(recur_val,(10));
var G__64887 = cljs.core._nth(recur_val,(11));
var G__64888 = cljs.core._nth(recur_val,(12));
var G__64889 = cljs.core._nth(recur_val,(13));
var G__64890 = cljs.core._nth(recur_val,(14));
var G__64891 = cljs.core._nth(recur_val,(15));
var G__64892 = cljs.core._nth(recur_val,(16));
G__63584 = G__64876;
G__63585 = G__64877;
G__63586 = G__64878;
G__63587 = G__64879;
G__63588 = G__64880;
G__63589 = G__64881;
G__63590 = G__64882;
G__63591 = G__64883;
G__63592 = G__64884;
G__63593 = G__64885;
G__63594 = G__64886;
G__63595 = G__64887;
G__63596 = G__64888;
G__63597 = G__64889;
G__63598 = G__64890;
G__63599 = G__64891;
G__63600 = G__64892;
continue;
} else {
return ret__61762__auto__;
}
break;
}
});
}

break;
case (18):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__63645 = cljs.core._nth(params,(0));
var G__63646 = cljs.core._nth(params,(1));
var G__63647 = cljs.core._nth(params,(2));
var G__63648 = cljs.core._nth(params,(3));
var G__63649 = cljs.core._nth(params,(4));
var G__63650 = cljs.core._nth(params,(5));
var G__63651 = cljs.core._nth(params,(6));
var G__63652 = cljs.core._nth(params,(7));
var G__63653 = cljs.core._nth(params,(8));
var G__63654 = cljs.core._nth(params,(9));
var G__63655 = cljs.core._nth(params,(10));
var G__63656 = cljs.core._nth(params,(11));
var G__63657 = cljs.core._nth(params,(12));
var G__63658 = cljs.core._nth(params,(13));
var G__63659 = cljs.core._nth(params,(14));
var G__63660 = cljs.core._nth(params,(15));
var G__63661 = cljs.core._nth(params,(16));
var G__63662 = cljs.core._nth(params,(17));
return (function sci$impl$fns$fun_$_arity_18(G__63627,G__63628,G__63629,G__63630,G__63631,G__63632,G__63633,G__63634,G__63635,G__63636,G__63637,G__63638,G__63639,G__63640,G__63641,G__63642,G__63643,G__63644){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__63645,G__63627);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__63646,G__63628);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__63647,G__63629);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__63648,G__63630);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__63649,G__63631);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__63650,G__63632);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__63651,G__63633);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__63652,G__63634);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__63653,G__63635);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__63654,G__63636);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__63655,G__63637);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__63656,G__63638);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__63657,G__63639);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__63658,G__63640);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__63659,G__63641);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__63660,G__63642);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__63661,G__63643);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__63662,G__63644);
var ctx__61761__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$18);
var ret__61762__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__61761__auto__,body) : interpret.call(null,ctx__61761__auto__,body));
var recur_QMARK___61763__auto__ = (ret__61762__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___61763__auto__){
var recur_val = sci.impl.types.getVal(ret__61762__auto__);
var G__64914 = cljs.core._nth(recur_val,(0));
var G__64915 = cljs.core._nth(recur_val,(1));
var G__64916 = cljs.core._nth(recur_val,(2));
var G__64917 = cljs.core._nth(recur_val,(3));
var G__64918 = cljs.core._nth(recur_val,(4));
var G__64919 = cljs.core._nth(recur_val,(5));
var G__64920 = cljs.core._nth(recur_val,(6));
var G__64921 = cljs.core._nth(recur_val,(7));
var G__64922 = cljs.core._nth(recur_val,(8));
var G__64923 = cljs.core._nth(recur_val,(9));
var G__64924 = cljs.core._nth(recur_val,(10));
var G__64925 = cljs.core._nth(recur_val,(11));
var G__64926 = cljs.core._nth(recur_val,(12));
var G__64927 = cljs.core._nth(recur_val,(13));
var G__64928 = cljs.core._nth(recur_val,(14));
var G__64929 = cljs.core._nth(recur_val,(15));
var G__64930 = cljs.core._nth(recur_val,(16));
var G__64931 = cljs.core._nth(recur_val,(17));
G__63627 = G__64914;
G__63628 = G__64915;
G__63629 = G__64916;
G__63630 = G__64917;
G__63631 = G__64918;
G__63632 = G__64919;
G__63633 = G__64920;
G__63634 = G__64921;
G__63635 = G__64922;
G__63636 = G__64923;
G__63637 = G__64924;
G__63638 = G__64925;
G__63639 = G__64926;
G__63640 = G__64927;
G__63641 = G__64928;
G__63642 = G__64929;
G__63643 = G__64930;
G__63644 = G__64931;
continue;
} else {
return ret__61762__auto__;
}
break;
}
});
} else {
var G__63707 = cljs.core._nth(params,(0));
var G__63708 = cljs.core._nth(params,(1));
var G__63709 = cljs.core._nth(params,(2));
var G__63710 = cljs.core._nth(params,(3));
var G__63711 = cljs.core._nth(params,(4));
var G__63712 = cljs.core._nth(params,(5));
var G__63713 = cljs.core._nth(params,(6));
var G__63714 = cljs.core._nth(params,(7));
var G__63715 = cljs.core._nth(params,(8));
var G__63716 = cljs.core._nth(params,(9));
var G__63717 = cljs.core._nth(params,(10));
var G__63718 = cljs.core._nth(params,(11));
var G__63719 = cljs.core._nth(params,(12));
var G__63720 = cljs.core._nth(params,(13));
var G__63721 = cljs.core._nth(params,(14));
var G__63722 = cljs.core._nth(params,(15));
var G__63723 = cljs.core._nth(params,(16));
var G__63724 = cljs.core._nth(params,(17));
return (function sci$impl$fns$fun_$_arity_18(G__63689,G__63690,G__63691,G__63692,G__63693,G__63694,G__63695,G__63696,G__63697,G__63698,G__63699,G__63700,G__63701,G__63702,G__63703,G__63704,G__63705,G__63706){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((18),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__63707,G__63689);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__63708,G__63690);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__63709,G__63691);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__63710,G__63692);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__63711,G__63693);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__63712,G__63694);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__63713,G__63695);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__63714,G__63696);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__63715,G__63697);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__63716,G__63698);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__63717,G__63699);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__63718,G__63700);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__63719,G__63701);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__63720,G__63702);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__63721,G__63703);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__63722,G__63704);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__63723,G__63705);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__63724,G__63706);
var ctx__61761__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$18);
var ret__61762__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__61761__auto__,body) : interpret.call(null,ctx__61761__auto__,body));
var recur_QMARK___61763__auto__ = (ret__61762__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___61763__auto__){
var recur_val = sci.impl.types.getVal(ret__61762__auto__);
var G__64958 = cljs.core._nth(recur_val,(0));
var G__64959 = cljs.core._nth(recur_val,(1));
var G__64960 = cljs.core._nth(recur_val,(2));
var G__64961 = cljs.core._nth(recur_val,(3));
var G__64962 = cljs.core._nth(recur_val,(4));
var G__64963 = cljs.core._nth(recur_val,(5));
var G__64964 = cljs.core._nth(recur_val,(6));
var G__64965 = cljs.core._nth(recur_val,(7));
var G__64966 = cljs.core._nth(recur_val,(8));
var G__64967 = cljs.core._nth(recur_val,(9));
var G__64968 = cljs.core._nth(recur_val,(10));
var G__64969 = cljs.core._nth(recur_val,(11));
var G__64970 = cljs.core._nth(recur_val,(12));
var G__64971 = cljs.core._nth(recur_val,(13));
var G__64972 = cljs.core._nth(recur_val,(14));
var G__64973 = cljs.core._nth(recur_val,(15));
var G__64974 = cljs.core._nth(recur_val,(16));
var G__64975 = cljs.core._nth(recur_val,(17));
G__63689 = G__64958;
G__63690 = G__64959;
G__63691 = G__64960;
G__63692 = G__64961;
G__63693 = G__64962;
G__63694 = G__64963;
G__63695 = G__64964;
G__63696 = G__64965;
G__63697 = G__64966;
G__63698 = G__64967;
G__63699 = G__64968;
G__63700 = G__64969;
G__63701 = G__64970;
G__63702 = G__64971;
G__63703 = G__64972;
G__63704 = G__64973;
G__63705 = G__64974;
G__63706 = G__64975;
continue;
} else {
return ret__61762__auto__;
}
break;
}
});
}

break;
case (19):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__63775 = cljs.core._nth(params,(0));
var G__63776 = cljs.core._nth(params,(1));
var G__63777 = cljs.core._nth(params,(2));
var G__63778 = cljs.core._nth(params,(3));
var G__63779 = cljs.core._nth(params,(4));
var G__63780 = cljs.core._nth(params,(5));
var G__63781 = cljs.core._nth(params,(6));
var G__63782 = cljs.core._nth(params,(7));
var G__63783 = cljs.core._nth(params,(8));
var G__63784 = cljs.core._nth(params,(9));
var G__63785 = cljs.core._nth(params,(10));
var G__63786 = cljs.core._nth(params,(11));
var G__63787 = cljs.core._nth(params,(12));
var G__63788 = cljs.core._nth(params,(13));
var G__63789 = cljs.core._nth(params,(14));
var G__63790 = cljs.core._nth(params,(15));
var G__63791 = cljs.core._nth(params,(16));
var G__63792 = cljs.core._nth(params,(17));
var G__63793 = cljs.core._nth(params,(18));
return (function sci$impl$fns$fun_$_arity_19(G__63756,G__63757,G__63758,G__63759,G__63760,G__63761,G__63762,G__63763,G__63764,G__63765,G__63766,G__63767,G__63768,G__63769,G__63770,G__63771,G__63772,G__63773,G__63774){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__63775,G__63756);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__63776,G__63757);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__63777,G__63758);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__63778,G__63759);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__63779,G__63760);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__63780,G__63761);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__63781,G__63762);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__63782,G__63763);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__63783,G__63764);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__63784,G__63765);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__63785,G__63766);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__63786,G__63767);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__63787,G__63768);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__63788,G__63769);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__63789,G__63770);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__63790,G__63771);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__63791,G__63772);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__63792,G__63773);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__63793,G__63774);
var ctx__61761__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$19);
var ret__61762__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__61761__auto__,body) : interpret.call(null,ctx__61761__auto__,body));
var recur_QMARK___61763__auto__ = (ret__61762__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___61763__auto__){
var recur_val = sci.impl.types.getVal(ret__61762__auto__);
var G__65177 = cljs.core._nth(recur_val,(0));
var G__65178 = cljs.core._nth(recur_val,(1));
var G__65179 = cljs.core._nth(recur_val,(2));
var G__65180 = cljs.core._nth(recur_val,(3));
var G__65181 = cljs.core._nth(recur_val,(4));
var G__65182 = cljs.core._nth(recur_val,(5));
var G__65183 = cljs.core._nth(recur_val,(6));
var G__65184 = cljs.core._nth(recur_val,(7));
var G__65185 = cljs.core._nth(recur_val,(8));
var G__65186 = cljs.core._nth(recur_val,(9));
var G__65187 = cljs.core._nth(recur_val,(10));
var G__65188 = cljs.core._nth(recur_val,(11));
var G__65189 = cljs.core._nth(recur_val,(12));
var G__65190 = cljs.core._nth(recur_val,(13));
var G__65191 = cljs.core._nth(recur_val,(14));
var G__65192 = cljs.core._nth(recur_val,(15));
var G__65193 = cljs.core._nth(recur_val,(16));
var G__65194 = cljs.core._nth(recur_val,(17));
var G__65195 = cljs.core._nth(recur_val,(18));
G__63756 = G__65177;
G__63757 = G__65178;
G__63758 = G__65179;
G__63759 = G__65180;
G__63760 = G__65181;
G__63761 = G__65182;
G__63762 = G__65183;
G__63763 = G__65184;
G__63764 = G__65185;
G__63765 = G__65186;
G__63766 = G__65187;
G__63767 = G__65188;
G__63768 = G__65189;
G__63769 = G__65190;
G__63770 = G__65191;
G__63771 = G__65192;
G__63772 = G__65193;
G__63773 = G__65194;
G__63774 = G__65195;
continue;
} else {
return ret__61762__auto__;
}
break;
}
});
} else {
var G__63845 = cljs.core._nth(params,(0));
var G__63846 = cljs.core._nth(params,(1));
var G__63847 = cljs.core._nth(params,(2));
var G__63848 = cljs.core._nth(params,(3));
var G__63849 = cljs.core._nth(params,(4));
var G__63850 = cljs.core._nth(params,(5));
var G__63851 = cljs.core._nth(params,(6));
var G__63852 = cljs.core._nth(params,(7));
var G__63853 = cljs.core._nth(params,(8));
var G__63854 = cljs.core._nth(params,(9));
var G__63855 = cljs.core._nth(params,(10));
var G__63856 = cljs.core._nth(params,(11));
var G__63857 = cljs.core._nth(params,(12));
var G__63858 = cljs.core._nth(params,(13));
var G__63859 = cljs.core._nth(params,(14));
var G__63860 = cljs.core._nth(params,(15));
var G__63861 = cljs.core._nth(params,(16));
var G__63862 = cljs.core._nth(params,(17));
var G__63863 = cljs.core._nth(params,(18));
return (function sci$impl$fns$fun_$_arity_19(G__63826,G__63827,G__63828,G__63829,G__63830,G__63831,G__63832,G__63833,G__63834,G__63835,G__63836,G__63837,G__63838,G__63839,G__63840,G__63841,G__63842,G__63843,G__63844){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((19),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__63845,G__63826);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__63846,G__63827);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__63847,G__63828);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__63848,G__63829);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__63849,G__63830);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__63850,G__63831);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__63851,G__63832);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__63852,G__63833);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__63853,G__63834);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__63854,G__63835);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__63855,G__63836);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__63856,G__63837);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__63857,G__63838);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__63858,G__63839);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__63859,G__63840);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__63860,G__63841);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__63861,G__63842);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__63862,G__63843);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__63863,G__63844);
var ctx__61761__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$19);
var ret__61762__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__61761__auto__,body) : interpret.call(null,ctx__61761__auto__,body));
var recur_QMARK___61763__auto__ = (ret__61762__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___61763__auto__){
var recur_val = sci.impl.types.getVal(ret__61762__auto__);
var G__65199 = cljs.core._nth(recur_val,(0));
var G__65200 = cljs.core._nth(recur_val,(1));
var G__65201 = cljs.core._nth(recur_val,(2));
var G__65202 = cljs.core._nth(recur_val,(3));
var G__65203 = cljs.core._nth(recur_val,(4));
var G__65204 = cljs.core._nth(recur_val,(5));
var G__65205 = cljs.core._nth(recur_val,(6));
var G__65206 = cljs.core._nth(recur_val,(7));
var G__65207 = cljs.core._nth(recur_val,(8));
var G__65208 = cljs.core._nth(recur_val,(9));
var G__65209 = cljs.core._nth(recur_val,(10));
var G__65210 = cljs.core._nth(recur_val,(11));
var G__65211 = cljs.core._nth(recur_val,(12));
var G__65212 = cljs.core._nth(recur_val,(13));
var G__65213 = cljs.core._nth(recur_val,(14));
var G__65214 = cljs.core._nth(recur_val,(15));
var G__65215 = cljs.core._nth(recur_val,(16));
var G__65216 = cljs.core._nth(recur_val,(17));
var G__65217 = cljs.core._nth(recur_val,(18));
G__63826 = G__65199;
G__63827 = G__65200;
G__63828 = G__65201;
G__63829 = G__65202;
G__63830 = G__65203;
G__63831 = G__65204;
G__63832 = G__65205;
G__63833 = G__65206;
G__63834 = G__65207;
G__63835 = G__65208;
G__63836 = G__65209;
G__63837 = G__65210;
G__63838 = G__65211;
G__63839 = G__65212;
G__63840 = G__65213;
G__63841 = G__65214;
G__63842 = G__65215;
G__63843 = G__65216;
G__63844 = G__65217;
continue;
} else {
return ret__61762__auto__;
}
break;
}
});
}

break;
default:
return (function() { 
var sci$impl$fns$fun_$_varargs__delegate = function (args){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = (function (){var args_STAR_ = cljs.core.seq(args);
var params__$1 = cljs.core.seq(params);
var ret = bindings;
while(true){
if(params__$1){
var fp = cljs.core.first(params__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),fp)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.second(params__$1),args_STAR_);
} else {
if(args_STAR_){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,args);
}

var G__65219 = cljs.core.next(args_STAR_);
var G__65220 = cljs.core.next(params__$1);
var G__65221 = cljs.core._assoc(ret,fp,cljs.core.first(args_STAR_));
args_STAR_ = G__65219;
params__$1 = G__65220;
ret = G__65221;
continue;
}
} else {
if(args_STAR_){
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,args);
} else {
}

return ret;
}
break;
}
})();
var ctx__$1 = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$1);
var ret = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__$1,body) : interpret.call(null,ctx__$1,body));
var recur_QMARK_ = (ret instanceof sci.impl.fns.Recur);
if(recur_QMARK_){
var recur_val = sci.impl.types.getVal(ret);
var min_var_args_arity = (cljs.core.truth_(var_arg_name)?fixed_arity:null);
if(cljs.core.truth_(min_var_args_arity)){
var vec__63910 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(recur_val,(0),min_var_args_arity),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(recur_val,min_var_args_arity)], null);
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63910,(0),null);
var vec__63913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63910,(1),null);
var rest_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63913,(0),null);
var G__65222 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(fixed_args,rest_args);
args = G__65222;
continue;
} else {
var G__65223 = recur_val;
args = G__65223;
continue;
}
} else {
return ret;
}
break;
}
};
var sci$impl$fns$fun_$_varargs = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65224__i = 0, G__65224__a = new Array(arguments.length -  0);
while (G__65224__i < G__65224__a.length) {G__65224__a[G__65224__i] = arguments[G__65224__i + 0]; ++G__65224__i;}
  args = new cljs.core.IndexedSeq(G__65224__a,0,null);
} 
return sci$impl$fns$fun_$_varargs__delegate.call(this,args);};
sci$impl$fns$fun_$_varargs.cljs$lang$maxFixedArity = 0;
sci$impl$fns$fun_$_varargs.cljs$lang$applyTo = (function (arglist__65225){
var args = cljs.core.seq(arglist__65225);
return sci$impl$fns$fun_$_varargs__delegate(args);
});
sci$impl$fns$fun_$_varargs.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_varargs__delegate;
return sci$impl$fns$fun_$_varargs;
})()
;

}
})():(function() { 
var sci$impl$fns$fun_$_varargs__delegate = function (args){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = (function (){var args_STAR_ = cljs.core.seq(args);
var params__$1 = cljs.core.seq(params);
var ret = bindings;
while(true){
if(params__$1){
var fp = cljs.core.first(params__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),fp)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.second(params__$1),args_STAR_);
} else {
if(args_STAR_){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,args);
}

var G__65227 = cljs.core.next(args_STAR_);
var G__65228 = cljs.core.next(params__$1);
var G__65229 = cljs.core._assoc(ret,fp,cljs.core.first(args_STAR_));
args_STAR_ = G__65227;
params__$1 = G__65228;
ret = G__65229;
continue;
}
} else {
if(args_STAR_){
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,args);
} else {
}

return ret;
}
break;
}
})();
var ctx__$1 = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$1);
var ret = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__$1,body) : interpret.call(null,ctx__$1,body));
var recur_QMARK_ = (ret instanceof sci.impl.fns.Recur);
if(recur_QMARK_){
var recur_val = sci.impl.types.getVal(ret);
var min_var_args_arity = (cljs.core.truth_(var_arg_name)?fixed_arity:null);
if(cljs.core.truth_(min_var_args_arity)){
var vec__63935 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(recur_val,(0),min_var_args_arity),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(recur_val,min_var_args_arity)], null);
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63935,(0),null);
var vec__63938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63935,(1),null);
var rest_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63938,(0),null);
var G__65230 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(fixed_args,rest_args);
args = G__65230;
continue;
} else {
var G__65231 = recur_val;
args = G__65231;
continue;
}
} else {
return ret;
}
break;
}
};
var sci$impl$fns$fun_$_varargs = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65232__i = 0, G__65232__a = new Array(arguments.length -  0);
while (G__65232__i < G__65232__a.length) {G__65232__a[G__65232__i] = arguments[G__65232__i + 0]; ++G__65232__i;}
  args = new cljs.core.IndexedSeq(G__65232__a,0,null);
} 
return sci$impl$fns$fun_$_varargs__delegate.call(this,args);};
sci$impl$fns$fun_$_varargs.cljs$lang$maxFixedArity = 0;
sci$impl$fns$fun_$_varargs.cljs$lang$applyTo = (function (arglist__65233){
var args = cljs.core.seq(arglist__65233);
return sci$impl$fns$fun_$_varargs__delegate(args);
});
sci$impl$fns$fun_$_varargs.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_varargs__delegate;
return sci$impl$fns$fun_$_varargs;
})()
);
return f;
});
sci.impl.fns.lookup_by_arity = (function sci$impl$fns$lookup_by_arity(arities,arity){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(arities,arity);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(arities);
}
});
sci.impl.fns.fn_arity_map = (function sci$impl$fns$fn_arity_map(ctx,interpret,fn_name,macro_QMARK_,fn_bodies){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (arity_map,fn_body){
var f = sci.impl.fns.fun(ctx,interpret,fn_body,fn_name,macro_QMARK_);
var var_arg_QMARK_ = new cljs.core.Keyword("sci.impl","var-arg-name","sci.impl/var-arg-name",1800498100).cljs$core$IFn$_invoke$arity$1(fn_body);
var fixed_arity = new cljs.core.Keyword("sci.impl","fixed-arity","sci.impl/fixed-arity",-1251617052).cljs$core$IFn$_invoke$arity$1(fn_body);
if(cljs.core.truth_(var_arg_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,new cljs.core.Keyword(null,"variadic","variadic",882626057),f);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,fixed_arity,f);
}
}),cljs.core.PersistentArrayMap.EMPTY,fn_bodies);
});
sci.impl.fns.eval_fn = (function sci$impl$fns$eval_fn(ctx,interpret,p__64002){
var map__64005 = p__64002;
var map__64005__$1 = (((((!((map__64005 == null))))?(((((map__64005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64005):map__64005);
var f = map__64005__$1;
var fn_bodies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64005__$1,new cljs.core.Keyword("sci.impl","fn-bodies","sci.impl/fn-bodies",134751661));
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64005__$1,new cljs.core.Keyword("sci.impl","fn-name","sci.impl/fn-name",-1172300569));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64005__$1,new cljs.core.Keyword("sci.impl","var","sci.impl/var",-2041185552));
var macro_QMARK_ = new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(f);
var self_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ctx__$1 = (cljs.core.truth_(((cljs.core.not(var$))?fn_name:false))?cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),fn_name], null),(function() { 
var sci$impl$fns$eval_fn_$_call_self__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self_ref),args);
};
var sci$impl$fns$eval_fn_$_call_self = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65237__i = 0, G__65237__a = new Array(arguments.length -  0);
while (G__65237__i < G__65237__a.length) {G__65237__a[G__65237__i] = arguments[G__65237__i + 0]; ++G__65237__i;}
  args = new cljs.core.IndexedSeq(G__65237__a,0,null);
} 
return sci$impl$fns$eval_fn_$_call_self__delegate.call(this,args);};
sci$impl$fns$eval_fn_$_call_self.cljs$lang$maxFixedArity = 0;
sci$impl$fns$eval_fn_$_call_self.cljs$lang$applyTo = (function (arglist__65238){
var args = cljs.core.seq(arglist__65238);
return sci$impl$fns$eval_fn_$_call_self__delegate(args);
});
sci$impl$fns$eval_fn_$_call_self.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$eval_fn_$_call_self__delegate;
return sci$impl$fns$eval_fn_$_call_self;
})()
):ctx);
var single_arity_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(fn_bodies));
var f__$1 = ((single_arity_QMARK_)?sci.impl.fns.fun(ctx__$1,interpret,cljs.core.first(fn_bodies),fn_name,macro_QMARK_):(function (){var arities = sci.impl.fns.fn_arity_map(ctx__$1,interpret,fn_name,macro_QMARK_,fn_bodies);
return (function() { 
var G__65239__delegate = function (args){
var arg_count = cljs.core.count(args);
var temp__5751__auto__ = sci.impl.fns.lookup_by_arity(arities,arg_count);
if(cljs.core.truth_(temp__5751__auto__)){
var f__$1 = temp__5751__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f__$1,args);
} else {
throw (new Error((function (){var actual_count = (cljs.core.truth_(macro_QMARK_)?(arg_count - (2)):arg_count);
return ["Cannot call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual_count)," arguments"].join('');
})()));
}
};
var G__65239 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65240__i = 0, G__65240__a = new Array(arguments.length -  0);
while (G__65240__i < G__65240__a.length) {G__65240__a[G__65240__i] = arguments[G__65240__i + 0]; ++G__65240__i;}
  args = new cljs.core.IndexedSeq(G__65240__a,0,null);
} 
return G__65239__delegate.call(this,args);};
G__65239.cljs$lang$maxFixedArity = 0;
G__65239.cljs$lang$applyTo = (function (arglist__65241){
var args = cljs.core.seq(arglist__65241);
return G__65239__delegate(args);
});
G__65239.cljs$core$IFn$_invoke$arity$variadic = G__65239__delegate;
return G__65239;
})()
;
})());
var f__$2 = (cljs.core.truth_(macro_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(f__$1,(function (p1__63960_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__63960_SHARP_,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_);
})):f__$1);
cljs.core.reset_BANG_(self_ref,f__$2);

return f__$2;
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_fn,sci.impl.fns.eval_fn);

//# sourceMappingURL=sci.impl.fns.js.map
