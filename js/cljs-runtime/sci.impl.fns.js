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

sci.impl.fns.fun = (function sci$impl$fns$fun(ctx,interpret,p__64688,fn_name,macro_QMARK_){
var map__64691 = p__64688;
var map__64691__$1 = (((((!((map__64691 == null))))?(((((map__64691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64691):map__64691);
var _m = map__64691__$1;
var fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64691__$1,new cljs.core.Keyword("sci.impl","fixed-arity","sci.impl/fixed-arity",-1251617052));
var var_arg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64691__$1,new cljs.core.Keyword("sci.impl","var-arg-name","sci.impl/var-arg-name",1800498100));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64691__$1,new cljs.core.Keyword("sci.impl","params","sci.impl/params",-175360738));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64691__$1,new cljs.core.Keyword("sci.impl","body","sci.impl/body",-1493886648));
var nsm = sci.impl.vars.current_ns_name();
var disable_arity_checks_QMARK_ = ctx.get(new cljs.core.Keyword(null,"disable-arity-checks","disable-arity-checks",1131364206));
var f = ((cljs.core.not(var_arg_name))?(function (){var G__64710 = (fixed_arity | (0));
switch (G__64710) {
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
var G__64717 = cljs.core._nth(params,(0));
return (function sci$impl$fns$fun_$_arity_1(G__64716){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__64717,G__64716);
var ctx__63901__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$1);
var ret__63902__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__63901__auto__,body) : interpret.call(null,ctx__63901__auto__,body));
var recur_QMARK___63903__auto__ = (ret__63902__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63903__auto__){
var recur_val = sci.impl.types.getVal(ret__63902__auto__);
var G__66415 = cljs.core._nth(recur_val,(0));
G__64716 = G__66415;
continue;
} else {
return ret__63902__auto__;
}
break;
}
});
} else {
var G__64738 = cljs.core._nth(params,(0));
return (function sci$impl$fns$fun_$_arity_1(G__64737){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__64738,G__64737);
var ctx__63901__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$1);
var ret__63902__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__63901__auto__,body) : interpret.call(null,ctx__63901__auto__,body));
var recur_QMARK___63903__auto__ = (ret__63902__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63903__auto__){
var recur_val = sci.impl.types.getVal(ret__63902__auto__);
var G__66416 = cljs.core._nth(recur_val,(0));
G__64737 = G__66416;
continue;
} else {
return ret__63902__auto__;
}
break;
}
});
}

break;
case (2):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__64757 = cljs.core._nth(params,(0));
var G__64758 = cljs.core._nth(params,(1));
return (function sci$impl$fns$fun_$_arity_2(G__64754,G__64755){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__64757,G__64754);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__64758,G__64755);
var ctx__63901__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$2);
var ret__63902__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__63901__auto__,body) : interpret.call(null,ctx__63901__auto__,body));
var recur_QMARK___63903__auto__ = (ret__63902__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63903__auto__){
var recur_val = sci.impl.types.getVal(ret__63902__auto__);
var G__66420 = cljs.core._nth(recur_val,(0));
var G__66421 = cljs.core._nth(recur_val,(1));
G__64754 = G__66420;
G__64755 = G__66421;
continue;
} else {
return ret__63902__auto__;
}
break;
}
});
} else {
var G__64780 = cljs.core._nth(params,(0));
var G__64781 = cljs.core._nth(params,(1));
return (function sci$impl$fns$fun_$_arity_2(G__64778,G__64779){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__64780,G__64778);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__64781,G__64779);
var ctx__63901__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$2);
var ret__63902__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__63901__auto__,body) : interpret.call(null,ctx__63901__auto__,body));
var recur_QMARK___63903__auto__ = (ret__63902__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63903__auto__){
var recur_val = sci.impl.types.getVal(ret__63902__auto__);
var G__66425 = cljs.core._nth(recur_val,(0));
var G__66426 = cljs.core._nth(recur_val,(1));
G__64778 = G__66425;
G__64779 = G__66426;
continue;
} else {
return ret__63902__auto__;
}
break;
}
});
}

break;
case (3):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__64809 = cljs.core._nth(params,(0));
var G__64810 = cljs.core._nth(params,(1));
var G__64811 = cljs.core._nth(params,(2));
return (function sci$impl$fns$fun_$_arity_3(G__64806,G__64807,G__64808){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__64809,G__64806);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__64810,G__64807);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__64811,G__64808);
var ctx__63901__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$3);
var ret__63902__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__63901__auto__,body) : interpret.call(null,ctx__63901__auto__,body));
var recur_QMARK___63903__auto__ = (ret__63902__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63903__auto__){
var recur_val = sci.impl.types.getVal(ret__63902__auto__);
var G__66429 = cljs.core._nth(recur_val,(0));
var G__66430 = cljs.core._nth(recur_val,(1));
var G__66431 = cljs.core._nth(recur_val,(2));
G__64806 = G__66429;
G__64807 = G__66430;
G__64808 = G__66431;
continue;
} else {
return ret__63902__auto__;
}
break;
}
});
} else {
var G__64822 = cljs.core._nth(params,(0));
var G__64823 = cljs.core._nth(params,(1));
var G__64824 = cljs.core._nth(params,(2));
return (function sci$impl$fns$fun_$_arity_3(G__64819,G__64820,G__64821){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__64822,G__64819);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__64823,G__64820);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__64824,G__64821);
var ctx__63901__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$3);
var ret__63902__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__63901__auto__,body) : interpret.call(null,ctx__63901__auto__,body));
var recur_QMARK___63903__auto__ = (ret__63902__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63903__auto__){
var recur_val = sci.impl.types.getVal(ret__63902__auto__);
var G__66434 = cljs.core._nth(recur_val,(0));
var G__66435 = cljs.core._nth(recur_val,(1));
var G__66436 = cljs.core._nth(recur_val,(2));
G__64819 = G__66434;
G__64820 = G__66435;
G__64821 = G__66436;
continue;
} else {
return ret__63902__auto__;
}
break;
}
});
}

break;
case (4):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__64836 = cljs.core._nth(params,(0));
var G__64837 = cljs.core._nth(params,(1));
var G__64838 = cljs.core._nth(params,(2));
var G__64839 = cljs.core._nth(params,(3));
return (function sci$impl$fns$fun_$_arity_4(G__64832,G__64833,G__64834,G__64835){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__64836,G__64832);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__64837,G__64833);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__64838,G__64834);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__64839,G__64835);
var ctx__63901__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$4);
var ret__63902__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__63901__auto__,body) : interpret.call(null,ctx__63901__auto__,body));
var recur_QMARK___63903__auto__ = (ret__63902__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63903__auto__){
var recur_val = sci.impl.types.getVal(ret__63902__auto__);
var G__66444 = cljs.core._nth(recur_val,(0));
var G__66445 = cljs.core._nth(recur_val,(1));
var G__66446 = cljs.core._nth(recur_val,(2));
var G__66447 = cljs.core._nth(recur_val,(3));
G__64832 = G__66444;
G__64833 = G__66445;
G__64834 = G__66446;
G__64835 = G__66447;
continue;
} else {
return ret__63902__auto__;
}
break;
}
});
} else {
var G__64852 = cljs.core._nth(params,(0));
var G__64853 = cljs.core._nth(params,(1));
var G__64854 = cljs.core._nth(params,(2));
var G__64855 = cljs.core._nth(params,(3));
return (function sci$impl$fns$fun_$_arity_4(G__64848,G__64849,G__64850,G__64851){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__64852,G__64848);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__64853,G__64849);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__64854,G__64850);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__64855,G__64851);
var ctx__63901__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$4);
var ret__63902__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__63901__auto__,body) : interpret.call(null,ctx__63901__auto__,body));
var recur_QMARK___63903__auto__ = (ret__63902__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63903__auto__){
var recur_val = sci.impl.types.getVal(ret__63902__auto__);
var G__66457 = cljs.core._nth(recur_val,(0));
var G__66458 = cljs.core._nth(recur_val,(1));
var G__66459 = cljs.core._nth(recur_val,(2));
var G__66460 = cljs.core._nth(recur_val,(3));
G__64848 = G__66457;
G__64849 = G__66458;
G__64850 = G__66459;
G__64851 = G__66460;
continue;
} else {
return ret__63902__auto__;
}
break;
}
});
}

break;
case (5):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__64884 = cljs.core._nth(params,(0));
var G__64885 = cljs.core._nth(params,(1));
var G__64886 = cljs.core._nth(params,(2));
var G__64887 = cljs.core._nth(params,(3));
var G__64888 = cljs.core._nth(params,(4));
return (function sci$impl$fns$fun_$_arity_5(G__64879,G__64880,G__64881,G__64882,G__64883){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__64884,G__64879);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__64885,G__64880);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__64886,G__64881);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__64887,G__64882);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__64888,G__64883);
var ctx__63901__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$5);
var ret__63902__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__63901__auto__,body) : interpret.call(null,ctx__63901__auto__,body));
var recur_QMARK___63903__auto__ = (ret__63902__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63903__auto__){
var recur_val = sci.impl.types.getVal(ret__63902__auto__);
var G__66464 = cljs.core._nth(recur_val,(0));
var G__66465 = cljs.core._nth(recur_val,(1));
var G__66466 = cljs.core._nth(recur_val,(2));
var G__66467 = cljs.core._nth(recur_val,(3));
var G__66468 = cljs.core._nth(recur_val,(4));
G__64879 = G__66464;
G__64880 = G__66465;
G__64881 = G__66466;
G__64882 = G__66467;
G__64883 = G__66468;
continue;
} else {
return ret__63902__auto__;
}
break;
}
});
} else {
var G__64902 = cljs.core._nth(params,(0));
var G__64903 = cljs.core._nth(params,(1));
var G__64904 = cljs.core._nth(params,(2));
var G__64905 = cljs.core._nth(params,(3));
var G__64906 = cljs.core._nth(params,(4));
return (function sci$impl$fns$fun_$_arity_5(G__64897,G__64898,G__64899,G__64900,G__64901){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((5),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__64902,G__64897);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__64903,G__64898);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__64904,G__64899);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__64905,G__64900);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__64906,G__64901);
var ctx__63901__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$5);
var ret__63902__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__63901__auto__,body) : interpret.call(null,ctx__63901__auto__,body));
var recur_QMARK___63903__auto__ = (ret__63902__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63903__auto__){
var recur_val = sci.impl.types.getVal(ret__63902__auto__);
var G__66472 = cljs.core._nth(recur_val,(0));
var G__66473 = cljs.core._nth(recur_val,(1));
var G__66474 = cljs.core._nth(recur_val,(2));
var G__66475 = cljs.core._nth(recur_val,(3));
var G__66476 = cljs.core._nth(recur_val,(4));
G__64897 = G__66472;
G__64898 = G__66473;
G__64899 = G__66474;
G__64900 = G__66475;
G__64901 = G__66476;
continue;
} else {
return ret__63902__auto__;
}
break;
}
});
}

break;
case (6):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__64924 = cljs.core._nth(params,(0));
var G__64925 = cljs.core._nth(params,(1));
var G__64926 = cljs.core._nth(params,(2));
var G__64927 = cljs.core._nth(params,(3));
var G__64928 = cljs.core._nth(params,(4));
var G__64929 = cljs.core._nth(params,(5));
return (function sci$impl$fns$fun_$_arity_6(G__64918,G__64919,G__64920,G__64921,G__64922,G__64923){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__64924,G__64918);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__64925,G__64919);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__64926,G__64920);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__64927,G__64921);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__64928,G__64922);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__64929,G__64923);
var ctx__63901__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$6);
var ret__63902__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__63901__auto__,body) : interpret.call(null,ctx__63901__auto__,body));
var recur_QMARK___63903__auto__ = (ret__63902__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63903__auto__){
var recur_val = sci.impl.types.getVal(ret__63902__auto__);
var G__66485 = cljs.core._nth(recur_val,(0));
var G__66486 = cljs.core._nth(recur_val,(1));
var G__66487 = cljs.core._nth(recur_val,(2));
var G__66488 = cljs.core._nth(recur_val,(3));
var G__66489 = cljs.core._nth(recur_val,(4));
var G__66490 = cljs.core._nth(recur_val,(5));
G__64918 = G__66485;
G__64919 = G__66486;
G__64920 = G__66487;
G__64921 = G__66488;
G__64922 = G__66489;
G__64923 = G__66490;
continue;
} else {
return ret__63902__auto__;
}
break;
}
});
} else {
var G__64946 = cljs.core._nth(params,(0));
var G__64947 = cljs.core._nth(params,(1));
var G__64948 = cljs.core._nth(params,(2));
var G__64949 = cljs.core._nth(params,(3));
var G__64950 = cljs.core._nth(params,(4));
var G__64951 = cljs.core._nth(params,(5));
return (function sci$impl$fns$fun_$_arity_6(G__64940,G__64941,G__64942,G__64943,G__64944,G__64945){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((6),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__64946,G__64940);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__64947,G__64941);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__64948,G__64942);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__64949,G__64943);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__64950,G__64944);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__64951,G__64945);
var ctx__63901__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$6);
var ret__63902__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__63901__auto__,body) : interpret.call(null,ctx__63901__auto__,body));
var recur_QMARK___63903__auto__ = (ret__63902__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63903__auto__){
var recur_val = sci.impl.types.getVal(ret__63902__auto__);
var G__66499 = cljs.core._nth(recur_val,(0));
var G__66500 = cljs.core._nth(recur_val,(1));
var G__66501 = cljs.core._nth(recur_val,(2));
var G__66502 = cljs.core._nth(recur_val,(3));
var G__66503 = cljs.core._nth(recur_val,(4));
var G__66504 = cljs.core._nth(recur_val,(5));
G__64940 = G__66499;
G__64941 = G__66500;
G__64942 = G__66501;
G__64943 = G__66502;
G__64944 = G__66503;
G__64945 = G__66504;
continue;
} else {
return ret__63902__auto__;
}
break;
}
});
}

break;
case (7):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__64979 = cljs.core._nth(params,(0));
var G__64980 = cljs.core._nth(params,(1));
var G__64981 = cljs.core._nth(params,(2));
var G__64982 = cljs.core._nth(params,(3));
var G__64983 = cljs.core._nth(params,(4));
var G__64984 = cljs.core._nth(params,(5));
var G__64985 = cljs.core._nth(params,(6));
return (function sci$impl$fns$fun_$_arity_7(G__64972,G__64973,G__64974,G__64975,G__64976,G__64977,G__64978){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__64979,G__64972);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__64980,G__64973);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__64981,G__64974);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__64982,G__64975);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__64983,G__64976);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__64984,G__64977);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__64985,G__64978);
var ctx__63901__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$7);
var ret__63902__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__63901__auto__,body) : interpret.call(null,ctx__63901__auto__,body));
var recur_QMARK___63903__auto__ = (ret__63902__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63903__auto__){
var recur_val = sci.impl.types.getVal(ret__63902__auto__);
var G__66523 = cljs.core._nth(recur_val,(0));
var G__66524 = cljs.core._nth(recur_val,(1));
var G__66525 = cljs.core._nth(recur_val,(2));
var G__66526 = cljs.core._nth(recur_val,(3));
var G__66527 = cljs.core._nth(recur_val,(4));
var G__66528 = cljs.core._nth(recur_val,(5));
var G__66529 = cljs.core._nth(recur_val,(6));
G__64972 = G__66523;
G__64973 = G__66524;
G__64974 = G__66525;
G__64975 = G__66526;
G__64976 = G__66527;
G__64977 = G__66528;
G__64978 = G__66529;
continue;
} else {
return ret__63902__auto__;
}
break;
}
});
} else {
var G__65002 = cljs.core._nth(params,(0));
var G__65003 = cljs.core._nth(params,(1));
var G__65004 = cljs.core._nth(params,(2));
var G__65005 = cljs.core._nth(params,(3));
var G__65006 = cljs.core._nth(params,(4));
var G__65007 = cljs.core._nth(params,(5));
var G__65008 = cljs.core._nth(params,(6));
return (function sci$impl$fns$fun_$_arity_7(G__64995,G__64996,G__64997,G__64998,G__64999,G__65000,G__65001){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((7),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__65002,G__64995);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__65003,G__64996);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__65004,G__64997);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__65005,G__64998);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__65006,G__64999);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__65007,G__65000);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__65008,G__65001);
var ctx__63901__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$7);
var ret__63902__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__63901__auto__,body) : interpret.call(null,ctx__63901__auto__,body));
var recur_QMARK___63903__auto__ = (ret__63902__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63903__auto__){
var recur_val = sci.impl.types.getVal(ret__63902__auto__);
var G__66547 = cljs.core._nth(recur_val,(0));
var G__66548 = cljs.core._nth(recur_val,(1));
var G__66549 = cljs.core._nth(recur_val,(2));
var G__66550 = cljs.core._nth(recur_val,(3));
var G__66551 = cljs.core._nth(recur_val,(4));
var G__66552 = cljs.core._nth(recur_val,(5));
var G__66553 = cljs.core._nth(recur_val,(6));
G__64995 = G__66547;
G__64996 = G__66548;
G__64997 = G__66549;
G__64998 = G__66550;
G__64999 = G__66551;
G__65000 = G__66552;
G__65001 = G__66553;
continue;
} else {
return ret__63902__auto__;
}
break;
}
});
}

break;
case (8):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__65030 = cljs.core._nth(params,(0));
var G__65031 = cljs.core._nth(params,(1));
var G__65032 = cljs.core._nth(params,(2));
var G__65033 = cljs.core._nth(params,(3));
var G__65034 = cljs.core._nth(params,(4));
var G__65035 = cljs.core._nth(params,(5));
var G__65036 = cljs.core._nth(params,(6));
var G__65037 = cljs.core._nth(params,(7));
return (function sci$impl$fns$fun_$_arity_8(G__65021,G__65022,G__65023,G__65024,G__65025,G__65026,G__65027,G__65028){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__65030,G__65021);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__65031,G__65022);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__65032,G__65023);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__65033,G__65024);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__65034,G__65025);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__65035,G__65026);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__65036,G__65027);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__65037,G__65028);
var ctx__63901__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$8);
var ret__63902__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__63901__auto__,body) : interpret.call(null,ctx__63901__auto__,body));
var recur_QMARK___63903__auto__ = (ret__63902__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63903__auto__){
var recur_val = sci.impl.types.getVal(ret__63902__auto__);
var G__66569 = cljs.core._nth(recur_val,(0));
var G__66570 = cljs.core._nth(recur_val,(1));
var G__66571 = cljs.core._nth(recur_val,(2));
var G__66572 = cljs.core._nth(recur_val,(3));
var G__66573 = cljs.core._nth(recur_val,(4));
var G__66574 = cljs.core._nth(recur_val,(5));
var G__66575 = cljs.core._nth(recur_val,(6));
var G__66576 = cljs.core._nth(recur_val,(7));
G__65021 = G__66569;
G__65022 = G__66570;
G__65023 = G__66571;
G__65024 = G__66572;
G__65025 = G__66573;
G__65026 = G__66574;
G__65027 = G__66575;
G__65028 = G__66576;
continue;
} else {
return ret__63902__auto__;
}
break;
}
});
} else {
var G__65046 = cljs.core._nth(params,(0));
var G__65047 = cljs.core._nth(params,(1));
var G__65048 = cljs.core._nth(params,(2));
var G__65049 = cljs.core._nth(params,(3));
var G__65050 = cljs.core._nth(params,(4));
var G__65051 = cljs.core._nth(params,(5));
var G__65052 = cljs.core._nth(params,(6));
var G__65053 = cljs.core._nth(params,(7));
return (function sci$impl$fns$fun_$_arity_8(G__65038,G__65039,G__65040,G__65041,G__65042,G__65043,G__65044,G__65045){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((8),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__65046,G__65038);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__65047,G__65039);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__65048,G__65040);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__65049,G__65041);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__65050,G__65042);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__65051,G__65043);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__65052,G__65044);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__65053,G__65045);
var ctx__63901__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$8);
var ret__63902__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__63901__auto__,body) : interpret.call(null,ctx__63901__auto__,body));
var recur_QMARK___63903__auto__ = (ret__63902__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63903__auto__){
var recur_val = sci.impl.types.getVal(ret__63902__auto__);
var G__66586 = cljs.core._nth(recur_val,(0));
var G__66587 = cljs.core._nth(recur_val,(1));
var G__66588 = cljs.core._nth(recur_val,(2));
var G__66589 = cljs.core._nth(recur_val,(3));
var G__66590 = cljs.core._nth(recur_val,(4));
var G__66591 = cljs.core._nth(recur_val,(5));
var G__66592 = cljs.core._nth(recur_val,(6));
var G__66593 = cljs.core._nth(recur_val,(7));
G__65038 = G__66586;
G__65039 = G__66587;
G__65040 = G__66588;
G__65041 = G__66589;
G__65042 = G__66590;
G__65043 = G__66591;
G__65044 = G__66592;
G__65045 = G__66593;
continue;
} else {
return ret__63902__auto__;
}
break;
}
});
}

break;
case (9):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__65078 = cljs.core._nth(params,(0));
var G__65079 = cljs.core._nth(params,(1));
var G__65080 = cljs.core._nth(params,(2));
var G__65081 = cljs.core._nth(params,(3));
var G__65082 = cljs.core._nth(params,(4));
var G__65083 = cljs.core._nth(params,(5));
var G__65084 = cljs.core._nth(params,(6));
var G__65085 = cljs.core._nth(params,(7));
var G__65086 = cljs.core._nth(params,(8));
return (function sci$impl$fns$fun_$_arity_9(G__65069,G__65070,G__65071,G__65072,G__65073,G__65074,G__65075,G__65076,G__65077){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__65078,G__65069);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__65079,G__65070);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__65080,G__65071);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__65081,G__65072);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__65082,G__65073);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__65083,G__65074);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__65084,G__65075);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__65085,G__65076);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__65086,G__65077);
var ctx__63901__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$9);
var ret__63902__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__63901__auto__,body) : interpret.call(null,ctx__63901__auto__,body));
var recur_QMARK___63903__auto__ = (ret__63902__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63903__auto__){
var recur_val = sci.impl.types.getVal(ret__63902__auto__);
var G__66603 = cljs.core._nth(recur_val,(0));
var G__66604 = cljs.core._nth(recur_val,(1));
var G__66605 = cljs.core._nth(recur_val,(2));
var G__66606 = cljs.core._nth(recur_val,(3));
var G__66607 = cljs.core._nth(recur_val,(4));
var G__66608 = cljs.core._nth(recur_val,(5));
var G__66609 = cljs.core._nth(recur_val,(6));
var G__66610 = cljs.core._nth(recur_val,(7));
var G__66611 = cljs.core._nth(recur_val,(8));
G__65069 = G__66603;
G__65070 = G__66604;
G__65071 = G__66605;
G__65072 = G__66606;
G__65073 = G__66607;
G__65074 = G__66608;
G__65075 = G__66609;
G__65076 = G__66610;
G__65077 = G__66611;
continue;
} else {
return ret__63902__auto__;
}
break;
}
});
} else {
var G__65103 = cljs.core._nth(params,(0));
var G__65104 = cljs.core._nth(params,(1));
var G__65105 = cljs.core._nth(params,(2));
var G__65106 = cljs.core._nth(params,(3));
var G__65107 = cljs.core._nth(params,(4));
var G__65108 = cljs.core._nth(params,(5));
var G__65109 = cljs.core._nth(params,(6));
var G__65110 = cljs.core._nth(params,(7));
var G__65111 = cljs.core._nth(params,(8));
return (function sci$impl$fns$fun_$_arity_9(G__65094,G__65095,G__65096,G__65097,G__65098,G__65099,G__65100,G__65101,G__65102){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((9),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__65103,G__65094);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__65104,G__65095);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__65105,G__65096);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__65106,G__65097);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__65107,G__65098);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__65108,G__65099);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__65109,G__65100);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__65110,G__65101);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__65111,G__65102);
var ctx__63901__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$9);
var ret__63902__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__63901__auto__,body) : interpret.call(null,ctx__63901__auto__,body));
var recur_QMARK___63903__auto__ = (ret__63902__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63903__auto__){
var recur_val = sci.impl.types.getVal(ret__63902__auto__);
var G__66617 = cljs.core._nth(recur_val,(0));
var G__66618 = cljs.core._nth(recur_val,(1));
var G__66619 = cljs.core._nth(recur_val,(2));
var G__66620 = cljs.core._nth(recur_val,(3));
var G__66621 = cljs.core._nth(recur_val,(4));
var G__66622 = cljs.core._nth(recur_val,(5));
var G__66623 = cljs.core._nth(recur_val,(6));
var G__66624 = cljs.core._nth(recur_val,(7));
var G__66625 = cljs.core._nth(recur_val,(8));
G__65094 = G__66617;
G__65095 = G__66618;
G__65096 = G__66619;
G__65097 = G__66620;
G__65098 = G__66621;
G__65099 = G__66622;
G__65100 = G__66623;
G__65101 = G__66624;
G__65102 = G__66625;
continue;
} else {
return ret__63902__auto__;
}
break;
}
});
}

break;
case (10):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__65138 = cljs.core._nth(params,(0));
var G__65139 = cljs.core._nth(params,(1));
var G__65140 = cljs.core._nth(params,(2));
var G__65141 = cljs.core._nth(params,(3));
var G__65142 = cljs.core._nth(params,(4));
var G__65143 = cljs.core._nth(params,(5));
var G__65144 = cljs.core._nth(params,(6));
var G__65145 = cljs.core._nth(params,(7));
var G__65146 = cljs.core._nth(params,(8));
var G__65147 = cljs.core._nth(params,(9));
return (function sci$impl$fns$fun_$_arity_10(G__65128,G__65129,G__65130,G__65131,G__65132,G__65133,G__65134,G__65135,G__65136,G__65137){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__65138,G__65128);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__65139,G__65129);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__65140,G__65130);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__65141,G__65131);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__65142,G__65132);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__65143,G__65133);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__65144,G__65134);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__65145,G__65135);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__65146,G__65136);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__65147,G__65137);
var ctx__63901__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$10);
var ret__63902__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__63901__auto__,body) : interpret.call(null,ctx__63901__auto__,body));
var recur_QMARK___63903__auto__ = (ret__63902__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63903__auto__){
var recur_val = sci.impl.types.getVal(ret__63902__auto__);
var G__66640 = cljs.core._nth(recur_val,(0));
var G__66641 = cljs.core._nth(recur_val,(1));
var G__66642 = cljs.core._nth(recur_val,(2));
var G__66643 = cljs.core._nth(recur_val,(3));
var G__66644 = cljs.core._nth(recur_val,(4));
var G__66645 = cljs.core._nth(recur_val,(5));
var G__66646 = cljs.core._nth(recur_val,(6));
var G__66647 = cljs.core._nth(recur_val,(7));
var G__66648 = cljs.core._nth(recur_val,(8));
var G__66649 = cljs.core._nth(recur_val,(9));
G__65128 = G__66640;
G__65129 = G__66641;
G__65130 = G__66642;
G__65131 = G__66643;
G__65132 = G__66644;
G__65133 = G__66645;
G__65134 = G__66646;
G__65135 = G__66647;
G__65136 = G__66648;
G__65137 = G__66649;
continue;
} else {
return ret__63902__auto__;
}
break;
}
});
} else {
var G__65169 = cljs.core._nth(params,(0));
var G__65170 = cljs.core._nth(params,(1));
var G__65171 = cljs.core._nth(params,(2));
var G__65172 = cljs.core._nth(params,(3));
var G__65173 = cljs.core._nth(params,(4));
var G__65174 = cljs.core._nth(params,(5));
var G__65175 = cljs.core._nth(params,(6));
var G__65176 = cljs.core._nth(params,(7));
var G__65177 = cljs.core._nth(params,(8));
var G__65178 = cljs.core._nth(params,(9));
return (function sci$impl$fns$fun_$_arity_10(G__65159,G__65160,G__65161,G__65162,G__65163,G__65164,G__65165,G__65166,G__65167,G__65168){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((10),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__65169,G__65159);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__65170,G__65160);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__65171,G__65161);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__65172,G__65162);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__65173,G__65163);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__65174,G__65164);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__65175,G__65165);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__65176,G__65166);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__65177,G__65167);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__65178,G__65168);
var ctx__63901__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$10);
var ret__63902__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__63901__auto__,body) : interpret.call(null,ctx__63901__auto__,body));
var recur_QMARK___63903__auto__ = (ret__63902__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63903__auto__){
var recur_val = sci.impl.types.getVal(ret__63902__auto__);
var G__66665 = cljs.core._nth(recur_val,(0));
var G__66666 = cljs.core._nth(recur_val,(1));
var G__66667 = cljs.core._nth(recur_val,(2));
var G__66668 = cljs.core._nth(recur_val,(3));
var G__66669 = cljs.core._nth(recur_val,(4));
var G__66670 = cljs.core._nth(recur_val,(5));
var G__66671 = cljs.core._nth(recur_val,(6));
var G__66672 = cljs.core._nth(recur_val,(7));
var G__66673 = cljs.core._nth(recur_val,(8));
var G__66674 = cljs.core._nth(recur_val,(9));
G__65159 = G__66665;
G__65160 = G__66666;
G__65161 = G__66667;
G__65162 = G__66668;
G__65163 = G__66669;
G__65164 = G__66670;
G__65165 = G__66671;
G__65166 = G__66672;
G__65167 = G__66673;
G__65168 = G__66674;
continue;
} else {
return ret__63902__auto__;
}
break;
}
});
}

break;
case (11):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__65207 = cljs.core._nth(params,(0));
var G__65208 = cljs.core._nth(params,(1));
var G__65209 = cljs.core._nth(params,(2));
var G__65210 = cljs.core._nth(params,(3));
var G__65211 = cljs.core._nth(params,(4));
var G__65212 = cljs.core._nth(params,(5));
var G__65213 = cljs.core._nth(params,(6));
var G__65214 = cljs.core._nth(params,(7));
var G__65215 = cljs.core._nth(params,(8));
var G__65216 = cljs.core._nth(params,(9));
var G__65217 = cljs.core._nth(params,(10));
return (function sci$impl$fns$fun_$_arity_11(G__65196,G__65197,G__65198,G__65199,G__65200,G__65201,G__65202,G__65203,G__65204,G__65205,G__65206){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__65207,G__65196);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__65208,G__65197);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__65209,G__65198);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__65210,G__65199);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__65211,G__65200);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__65212,G__65201);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__65213,G__65202);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__65214,G__65203);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__65215,G__65204);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__65216,G__65205);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__65217,G__65206);
var ctx__63901__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$11);
var ret__63902__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__63901__auto__,body) : interpret.call(null,ctx__63901__auto__,body));
var recur_QMARK___63903__auto__ = (ret__63902__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63903__auto__){
var recur_val = sci.impl.types.getVal(ret__63902__auto__);
var G__66683 = cljs.core._nth(recur_val,(0));
var G__66684 = cljs.core._nth(recur_val,(1));
var G__66685 = cljs.core._nth(recur_val,(2));
var G__66686 = cljs.core._nth(recur_val,(3));
var G__66687 = cljs.core._nth(recur_val,(4));
var G__66688 = cljs.core._nth(recur_val,(5));
var G__66689 = cljs.core._nth(recur_val,(6));
var G__66690 = cljs.core._nth(recur_val,(7));
var G__66691 = cljs.core._nth(recur_val,(8));
var G__66692 = cljs.core._nth(recur_val,(9));
var G__66693 = cljs.core._nth(recur_val,(10));
G__65196 = G__66683;
G__65197 = G__66684;
G__65198 = G__66685;
G__65199 = G__66686;
G__65200 = G__66687;
G__65201 = G__66688;
G__65202 = G__66689;
G__65203 = G__66690;
G__65204 = G__66691;
G__65205 = G__66692;
G__65206 = G__66693;
continue;
} else {
return ret__63902__auto__;
}
break;
}
});
} else {
var G__65268 = cljs.core._nth(params,(0));
var G__65269 = cljs.core._nth(params,(1));
var G__65270 = cljs.core._nth(params,(2));
var G__65271 = cljs.core._nth(params,(3));
var G__65272 = cljs.core._nth(params,(4));
var G__65273 = cljs.core._nth(params,(5));
var G__65274 = cljs.core._nth(params,(6));
var G__65275 = cljs.core._nth(params,(7));
var G__65276 = cljs.core._nth(params,(8));
var G__65277 = cljs.core._nth(params,(9));
var G__65278 = cljs.core._nth(params,(10));
return (function sci$impl$fns$fun_$_arity_11(G__65257,G__65258,G__65259,G__65260,G__65261,G__65262,G__65263,G__65264,G__65265,G__65266,G__65267){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((11),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__65268,G__65257);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__65269,G__65258);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__65270,G__65259);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__65271,G__65260);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__65272,G__65261);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__65273,G__65262);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__65274,G__65263);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__65275,G__65264);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__65276,G__65265);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__65277,G__65266);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__65278,G__65267);
var ctx__63901__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$11);
var ret__63902__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__63901__auto__,body) : interpret.call(null,ctx__63901__auto__,body));
var recur_QMARK___63903__auto__ = (ret__63902__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63903__auto__){
var recur_val = sci.impl.types.getVal(ret__63902__auto__);
var G__66706 = cljs.core._nth(recur_val,(0));
var G__66707 = cljs.core._nth(recur_val,(1));
var G__66708 = cljs.core._nth(recur_val,(2));
var G__66709 = cljs.core._nth(recur_val,(3));
var G__66710 = cljs.core._nth(recur_val,(4));
var G__66711 = cljs.core._nth(recur_val,(5));
var G__66712 = cljs.core._nth(recur_val,(6));
var G__66713 = cljs.core._nth(recur_val,(7));
var G__66714 = cljs.core._nth(recur_val,(8));
var G__66715 = cljs.core._nth(recur_val,(9));
var G__66716 = cljs.core._nth(recur_val,(10));
G__65257 = G__66706;
G__65258 = G__66707;
G__65259 = G__66708;
G__65260 = G__66709;
G__65261 = G__66710;
G__65262 = G__66711;
G__65263 = G__66712;
G__65264 = G__66713;
G__65265 = G__66714;
G__65266 = G__66715;
G__65267 = G__66716;
continue;
} else {
return ret__63902__auto__;
}
break;
}
});
}

break;
case (12):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__65336 = cljs.core._nth(params,(0));
var G__65337 = cljs.core._nth(params,(1));
var G__65338 = cljs.core._nth(params,(2));
var G__65339 = cljs.core._nth(params,(3));
var G__65340 = cljs.core._nth(params,(4));
var G__65341 = cljs.core._nth(params,(5));
var G__65342 = cljs.core._nth(params,(6));
var G__65343 = cljs.core._nth(params,(7));
var G__65344 = cljs.core._nth(params,(8));
var G__65345 = cljs.core._nth(params,(9));
var G__65346 = cljs.core._nth(params,(10));
var G__65347 = cljs.core._nth(params,(11));
return (function sci$impl$fns$fun_$_arity_12(G__65324,G__65325,G__65326,G__65327,G__65328,G__65329,G__65330,G__65331,G__65332,G__65333,G__65334,G__65335){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__65336,G__65324);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__65337,G__65325);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__65338,G__65326);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__65339,G__65327);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__65340,G__65328);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__65341,G__65329);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__65342,G__65330);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__65343,G__65331);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__65344,G__65332);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__65345,G__65333);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__65346,G__65334);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__65347,G__65335);
var ctx__63901__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$12);
var ret__63902__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__63901__auto__,body) : interpret.call(null,ctx__63901__auto__,body));
var recur_QMARK___63903__auto__ = (ret__63902__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63903__auto__){
var recur_val = sci.impl.types.getVal(ret__63902__auto__);
var G__66729 = cljs.core._nth(recur_val,(0));
var G__66730 = cljs.core._nth(recur_val,(1));
var G__66731 = cljs.core._nth(recur_val,(2));
var G__66732 = cljs.core._nth(recur_val,(3));
var G__66733 = cljs.core._nth(recur_val,(4));
var G__66734 = cljs.core._nth(recur_val,(5));
var G__66735 = cljs.core._nth(recur_val,(6));
var G__66736 = cljs.core._nth(recur_val,(7));
var G__66737 = cljs.core._nth(recur_val,(8));
var G__66738 = cljs.core._nth(recur_val,(9));
var G__66739 = cljs.core._nth(recur_val,(10));
var G__66740 = cljs.core._nth(recur_val,(11));
G__65324 = G__66729;
G__65325 = G__66730;
G__65326 = G__66731;
G__65327 = G__66732;
G__65328 = G__66733;
G__65329 = G__66734;
G__65330 = G__66735;
G__65331 = G__66736;
G__65332 = G__66737;
G__65333 = G__66738;
G__65334 = G__66739;
G__65335 = G__66740;
continue;
} else {
return ret__63902__auto__;
}
break;
}
});
} else {
var G__65377 = cljs.core._nth(params,(0));
var G__65378 = cljs.core._nth(params,(1));
var G__65379 = cljs.core._nth(params,(2));
var G__65380 = cljs.core._nth(params,(3));
var G__65381 = cljs.core._nth(params,(4));
var G__65382 = cljs.core._nth(params,(5));
var G__65383 = cljs.core._nth(params,(6));
var G__65384 = cljs.core._nth(params,(7));
var G__65385 = cljs.core._nth(params,(8));
var G__65386 = cljs.core._nth(params,(9));
var G__65387 = cljs.core._nth(params,(10));
var G__65388 = cljs.core._nth(params,(11));
return (function sci$impl$fns$fun_$_arity_12(G__65365,G__65366,G__65367,G__65368,G__65369,G__65370,G__65371,G__65372,G__65373,G__65374,G__65375,G__65376){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((12),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__65377,G__65365);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__65378,G__65366);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__65379,G__65367);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__65380,G__65368);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__65381,G__65369);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__65382,G__65370);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__65383,G__65371);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__65384,G__65372);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__65385,G__65373);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__65386,G__65374);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__65387,G__65375);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__65388,G__65376);
var ctx__63901__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$12);
var ret__63902__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__63901__auto__,body) : interpret.call(null,ctx__63901__auto__,body));
var recur_QMARK___63903__auto__ = (ret__63902__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63903__auto__){
var recur_val = sci.impl.types.getVal(ret__63902__auto__);
var G__66761 = cljs.core._nth(recur_val,(0));
var G__66762 = cljs.core._nth(recur_val,(1));
var G__66763 = cljs.core._nth(recur_val,(2));
var G__66764 = cljs.core._nth(recur_val,(3));
var G__66765 = cljs.core._nth(recur_val,(4));
var G__66766 = cljs.core._nth(recur_val,(5));
var G__66767 = cljs.core._nth(recur_val,(6));
var G__66768 = cljs.core._nth(recur_val,(7));
var G__66769 = cljs.core._nth(recur_val,(8));
var G__66770 = cljs.core._nth(recur_val,(9));
var G__66771 = cljs.core._nth(recur_val,(10));
var G__66772 = cljs.core._nth(recur_val,(11));
G__65365 = G__66761;
G__65366 = G__66762;
G__65367 = G__66763;
G__65368 = G__66764;
G__65369 = G__66765;
G__65370 = G__66766;
G__65371 = G__66767;
G__65372 = G__66768;
G__65373 = G__66769;
G__65374 = G__66770;
G__65375 = G__66771;
G__65376 = G__66772;
continue;
} else {
return ret__63902__auto__;
}
break;
}
});
}

break;
case (13):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__65421 = cljs.core._nth(params,(0));
var G__65422 = cljs.core._nth(params,(1));
var G__65423 = cljs.core._nth(params,(2));
var G__65424 = cljs.core._nth(params,(3));
var G__65425 = cljs.core._nth(params,(4));
var G__65426 = cljs.core._nth(params,(5));
var G__65427 = cljs.core._nth(params,(6));
var G__65428 = cljs.core._nth(params,(7));
var G__65429 = cljs.core._nth(params,(8));
var G__65430 = cljs.core._nth(params,(9));
var G__65431 = cljs.core._nth(params,(10));
var G__65432 = cljs.core._nth(params,(11));
var G__65433 = cljs.core._nth(params,(12));
return (function sci$impl$fns$fun_$_arity_13(G__65408,G__65409,G__65410,G__65411,G__65412,G__65413,G__65414,G__65415,G__65416,G__65417,G__65418,G__65419,G__65420){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__65421,G__65408);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__65422,G__65409);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__65423,G__65410);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__65424,G__65411);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__65425,G__65412);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__65426,G__65413);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__65427,G__65414);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__65428,G__65415);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__65429,G__65416);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__65430,G__65417);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__65431,G__65418);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__65432,G__65419);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__65433,G__65420);
var ctx__63901__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$13);
var ret__63902__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__63901__auto__,body) : interpret.call(null,ctx__63901__auto__,body));
var recur_QMARK___63903__auto__ = (ret__63902__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63903__auto__){
var recur_val = sci.impl.types.getVal(ret__63902__auto__);
var G__66785 = cljs.core._nth(recur_val,(0));
var G__66786 = cljs.core._nth(recur_val,(1));
var G__66787 = cljs.core._nth(recur_val,(2));
var G__66788 = cljs.core._nth(recur_val,(3));
var G__66789 = cljs.core._nth(recur_val,(4));
var G__66790 = cljs.core._nth(recur_val,(5));
var G__66791 = cljs.core._nth(recur_val,(6));
var G__66792 = cljs.core._nth(recur_val,(7));
var G__66793 = cljs.core._nth(recur_val,(8));
var G__66794 = cljs.core._nth(recur_val,(9));
var G__66795 = cljs.core._nth(recur_val,(10));
var G__66796 = cljs.core._nth(recur_val,(11));
var G__66797 = cljs.core._nth(recur_val,(12));
G__65408 = G__66785;
G__65409 = G__66786;
G__65410 = G__66787;
G__65411 = G__66788;
G__65412 = G__66789;
G__65413 = G__66790;
G__65414 = G__66791;
G__65415 = G__66792;
G__65416 = G__66793;
G__65417 = G__66794;
G__65418 = G__66795;
G__65419 = G__66796;
G__65420 = G__66797;
continue;
} else {
return ret__63902__auto__;
}
break;
}
});
} else {
var G__65457 = cljs.core._nth(params,(0));
var G__65458 = cljs.core._nth(params,(1));
var G__65459 = cljs.core._nth(params,(2));
var G__65460 = cljs.core._nth(params,(3));
var G__65461 = cljs.core._nth(params,(4));
var G__65462 = cljs.core._nth(params,(5));
var G__65463 = cljs.core._nth(params,(6));
var G__65464 = cljs.core._nth(params,(7));
var G__65465 = cljs.core._nth(params,(8));
var G__65466 = cljs.core._nth(params,(9));
var G__65467 = cljs.core._nth(params,(10));
var G__65468 = cljs.core._nth(params,(11));
var G__65469 = cljs.core._nth(params,(12));
return (function sci$impl$fns$fun_$_arity_13(G__65444,G__65445,G__65446,G__65447,G__65448,G__65449,G__65450,G__65451,G__65452,G__65453,G__65454,G__65455,G__65456){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((13),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__65457,G__65444);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__65458,G__65445);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__65459,G__65446);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__65460,G__65447);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__65461,G__65448);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__65462,G__65449);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__65463,G__65450);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__65464,G__65451);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__65465,G__65452);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__65466,G__65453);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__65467,G__65454);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__65468,G__65455);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__65469,G__65456);
var ctx__63901__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$13);
var ret__63902__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__63901__auto__,body) : interpret.call(null,ctx__63901__auto__,body));
var recur_QMARK___63903__auto__ = (ret__63902__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63903__auto__){
var recur_val = sci.impl.types.getVal(ret__63902__auto__);
var G__66806 = cljs.core._nth(recur_val,(0));
var G__66807 = cljs.core._nth(recur_val,(1));
var G__66808 = cljs.core._nth(recur_val,(2));
var G__66809 = cljs.core._nth(recur_val,(3));
var G__66810 = cljs.core._nth(recur_val,(4));
var G__66811 = cljs.core._nth(recur_val,(5));
var G__66812 = cljs.core._nth(recur_val,(6));
var G__66813 = cljs.core._nth(recur_val,(7));
var G__66814 = cljs.core._nth(recur_val,(8));
var G__66815 = cljs.core._nth(recur_val,(9));
var G__66816 = cljs.core._nth(recur_val,(10));
var G__66817 = cljs.core._nth(recur_val,(11));
var G__66818 = cljs.core._nth(recur_val,(12));
G__65444 = G__66806;
G__65445 = G__66807;
G__65446 = G__66808;
G__65447 = G__66809;
G__65448 = G__66810;
G__65449 = G__66811;
G__65450 = G__66812;
G__65451 = G__66813;
G__65452 = G__66814;
G__65453 = G__66815;
G__65454 = G__66816;
G__65455 = G__66817;
G__65456 = G__66818;
continue;
} else {
return ret__63902__auto__;
}
break;
}
});
}

break;
case (14):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__65502 = cljs.core._nth(params,(0));
var G__65503 = cljs.core._nth(params,(1));
var G__65504 = cljs.core._nth(params,(2));
var G__65505 = cljs.core._nth(params,(3));
var G__65506 = cljs.core._nth(params,(4));
var G__65507 = cljs.core._nth(params,(5));
var G__65508 = cljs.core._nth(params,(6));
var G__65509 = cljs.core._nth(params,(7));
var G__65510 = cljs.core._nth(params,(8));
var G__65511 = cljs.core._nth(params,(9));
var G__65512 = cljs.core._nth(params,(10));
var G__65513 = cljs.core._nth(params,(11));
var G__65514 = cljs.core._nth(params,(12));
var G__65515 = cljs.core._nth(params,(13));
var G__65516 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__65487,G__65488,G__65489,G__65490,G__65491,G__65492,G__65493,G__65494,G__65495,G__65496,G__65497,G__65498,G__65499,G__65500,G__65501){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__65502,G__65487);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__65503,G__65488);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__65504,G__65489);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__65505,G__65490);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__65506,G__65491);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__65507,G__65492);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__65508,G__65493);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__65509,G__65494);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__65510,G__65495);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__65511,G__65496);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__65512,G__65497);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__65513,G__65498);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__65514,G__65499);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__65515,G__65500);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__65516,G__65501);
var ctx__63901__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$15);
var ret__63902__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__63901__auto__,body) : interpret.call(null,ctx__63901__auto__,body));
var recur_QMARK___63903__auto__ = (ret__63902__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63903__auto__){
var recur_val = sci.impl.types.getVal(ret__63902__auto__);
var G__66831 = cljs.core._nth(recur_val,(0));
var G__66832 = cljs.core._nth(recur_val,(1));
var G__66833 = cljs.core._nth(recur_val,(2));
var G__66834 = cljs.core._nth(recur_val,(3));
var G__66835 = cljs.core._nth(recur_val,(4));
var G__66836 = cljs.core._nth(recur_val,(5));
var G__66837 = cljs.core._nth(recur_val,(6));
var G__66838 = cljs.core._nth(recur_val,(7));
var G__66839 = cljs.core._nth(recur_val,(8));
var G__66840 = cljs.core._nth(recur_val,(9));
var G__66841 = cljs.core._nth(recur_val,(10));
var G__66842 = cljs.core._nth(recur_val,(11));
var G__66843 = cljs.core._nth(recur_val,(12));
var G__66844 = cljs.core._nth(recur_val,(13));
var G__66845 = cljs.core._nth(recur_val,(14));
G__65487 = G__66831;
G__65488 = G__66832;
G__65489 = G__66833;
G__65490 = G__66834;
G__65491 = G__66835;
G__65492 = G__66836;
G__65493 = G__66837;
G__65494 = G__66838;
G__65495 = G__66839;
G__65496 = G__66840;
G__65497 = G__66841;
G__65498 = G__66842;
G__65499 = G__66843;
G__65500 = G__66844;
G__65501 = G__66845;
continue;
} else {
return ret__63902__auto__;
}
break;
}
});
} else {
var G__65551 = cljs.core._nth(params,(0));
var G__65552 = cljs.core._nth(params,(1));
var G__65553 = cljs.core._nth(params,(2));
var G__65554 = cljs.core._nth(params,(3));
var G__65555 = cljs.core._nth(params,(4));
var G__65556 = cljs.core._nth(params,(5));
var G__65557 = cljs.core._nth(params,(6));
var G__65558 = cljs.core._nth(params,(7));
var G__65559 = cljs.core._nth(params,(8));
var G__65560 = cljs.core._nth(params,(9));
var G__65561 = cljs.core._nth(params,(10));
var G__65562 = cljs.core._nth(params,(11));
var G__65563 = cljs.core._nth(params,(12));
var G__65564 = cljs.core._nth(params,(13));
var G__65565 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__65536,G__65537,G__65538,G__65539,G__65540,G__65541,G__65542,G__65543,G__65544,G__65545,G__65546,G__65547,G__65548,G__65549,G__65550){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((15),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__65551,G__65536);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__65552,G__65537);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__65553,G__65538);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__65554,G__65539);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__65555,G__65540);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__65556,G__65541);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__65557,G__65542);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__65558,G__65543);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__65559,G__65544);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__65560,G__65545);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__65561,G__65546);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__65562,G__65547);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__65563,G__65548);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__65564,G__65549);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__65565,G__65550);
var ctx__63901__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$15);
var ret__63902__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__63901__auto__,body) : interpret.call(null,ctx__63901__auto__,body));
var recur_QMARK___63903__auto__ = (ret__63902__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63903__auto__){
var recur_val = sci.impl.types.getVal(ret__63902__auto__);
var G__66855 = cljs.core._nth(recur_val,(0));
var G__66856 = cljs.core._nth(recur_val,(1));
var G__66857 = cljs.core._nth(recur_val,(2));
var G__66858 = cljs.core._nth(recur_val,(3));
var G__66859 = cljs.core._nth(recur_val,(4));
var G__66860 = cljs.core._nth(recur_val,(5));
var G__66861 = cljs.core._nth(recur_val,(6));
var G__66862 = cljs.core._nth(recur_val,(7));
var G__66863 = cljs.core._nth(recur_val,(8));
var G__66864 = cljs.core._nth(recur_val,(9));
var G__66865 = cljs.core._nth(recur_val,(10));
var G__66866 = cljs.core._nth(recur_val,(11));
var G__66867 = cljs.core._nth(recur_val,(12));
var G__66868 = cljs.core._nth(recur_val,(13));
var G__66869 = cljs.core._nth(recur_val,(14));
G__65536 = G__66855;
G__65537 = G__66856;
G__65538 = G__66857;
G__65539 = G__66858;
G__65540 = G__66859;
G__65541 = G__66860;
G__65542 = G__66861;
G__65543 = G__66862;
G__65544 = G__66863;
G__65545 = G__66864;
G__65546 = G__66865;
G__65547 = G__66866;
G__65548 = G__66867;
G__65549 = G__66868;
G__65550 = G__66869;
continue;
} else {
return ret__63902__auto__;
}
break;
}
});
}

break;
case (15):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__65606 = cljs.core._nth(params,(0));
var G__65607 = cljs.core._nth(params,(1));
var G__65608 = cljs.core._nth(params,(2));
var G__65609 = cljs.core._nth(params,(3));
var G__65610 = cljs.core._nth(params,(4));
var G__65611 = cljs.core._nth(params,(5));
var G__65612 = cljs.core._nth(params,(6));
var G__65613 = cljs.core._nth(params,(7));
var G__65614 = cljs.core._nth(params,(8));
var G__65615 = cljs.core._nth(params,(9));
var G__65616 = cljs.core._nth(params,(10));
var G__65617 = cljs.core._nth(params,(11));
var G__65618 = cljs.core._nth(params,(12));
var G__65619 = cljs.core._nth(params,(13));
var G__65620 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__65591,G__65592,G__65593,G__65594,G__65595,G__65596,G__65597,G__65598,G__65599,G__65600,G__65601,G__65602,G__65603,G__65604,G__65605){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__65606,G__65591);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__65607,G__65592);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__65608,G__65593);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__65609,G__65594);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__65610,G__65595);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__65611,G__65596);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__65612,G__65597);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__65613,G__65598);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__65614,G__65599);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__65615,G__65600);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__65616,G__65601);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__65617,G__65602);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__65618,G__65603);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__65619,G__65604);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__65620,G__65605);
var ctx__63901__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$15);
var ret__63902__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__63901__auto__,body) : interpret.call(null,ctx__63901__auto__,body));
var recur_QMARK___63903__auto__ = (ret__63902__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63903__auto__){
var recur_val = sci.impl.types.getVal(ret__63902__auto__);
var G__66888 = cljs.core._nth(recur_val,(0));
var G__66889 = cljs.core._nth(recur_val,(1));
var G__66890 = cljs.core._nth(recur_val,(2));
var G__66891 = cljs.core._nth(recur_val,(3));
var G__66892 = cljs.core._nth(recur_val,(4));
var G__66893 = cljs.core._nth(recur_val,(5));
var G__66894 = cljs.core._nth(recur_val,(6));
var G__66895 = cljs.core._nth(recur_val,(7));
var G__66896 = cljs.core._nth(recur_val,(8));
var G__66897 = cljs.core._nth(recur_val,(9));
var G__66898 = cljs.core._nth(recur_val,(10));
var G__66899 = cljs.core._nth(recur_val,(11));
var G__66900 = cljs.core._nth(recur_val,(12));
var G__66901 = cljs.core._nth(recur_val,(13));
var G__66902 = cljs.core._nth(recur_val,(14));
G__65591 = G__66888;
G__65592 = G__66889;
G__65593 = G__66890;
G__65594 = G__66891;
G__65595 = G__66892;
G__65596 = G__66893;
G__65597 = G__66894;
G__65598 = G__66895;
G__65599 = G__66896;
G__65600 = G__66897;
G__65601 = G__66898;
G__65602 = G__66899;
G__65603 = G__66900;
G__65604 = G__66901;
G__65605 = G__66902;
continue;
} else {
return ret__63902__auto__;
}
break;
}
});
} else {
var G__65650 = cljs.core._nth(params,(0));
var G__65651 = cljs.core._nth(params,(1));
var G__65652 = cljs.core._nth(params,(2));
var G__65653 = cljs.core._nth(params,(3));
var G__65654 = cljs.core._nth(params,(4));
var G__65655 = cljs.core._nth(params,(5));
var G__65656 = cljs.core._nth(params,(6));
var G__65657 = cljs.core._nth(params,(7));
var G__65658 = cljs.core._nth(params,(8));
var G__65659 = cljs.core._nth(params,(9));
var G__65660 = cljs.core._nth(params,(10));
var G__65661 = cljs.core._nth(params,(11));
var G__65662 = cljs.core._nth(params,(12));
var G__65663 = cljs.core._nth(params,(13));
var G__65664 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__65635,G__65636,G__65637,G__65638,G__65639,G__65640,G__65641,G__65642,G__65643,G__65644,G__65645,G__65646,G__65647,G__65648,G__65649){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((15),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__65650,G__65635);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__65651,G__65636);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__65652,G__65637);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__65653,G__65638);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__65654,G__65639);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__65655,G__65640);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__65656,G__65641);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__65657,G__65642);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__65658,G__65643);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__65659,G__65644);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__65660,G__65645);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__65661,G__65646);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__65662,G__65647);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__65663,G__65648);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__65664,G__65649);
var ctx__63901__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$15);
var ret__63902__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__63901__auto__,body) : interpret.call(null,ctx__63901__auto__,body));
var recur_QMARK___63903__auto__ = (ret__63902__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63903__auto__){
var recur_val = sci.impl.types.getVal(ret__63902__auto__);
var G__66932 = cljs.core._nth(recur_val,(0));
var G__66933 = cljs.core._nth(recur_val,(1));
var G__66934 = cljs.core._nth(recur_val,(2));
var G__66935 = cljs.core._nth(recur_val,(3));
var G__66936 = cljs.core._nth(recur_val,(4));
var G__66937 = cljs.core._nth(recur_val,(5));
var G__66938 = cljs.core._nth(recur_val,(6));
var G__66939 = cljs.core._nth(recur_val,(7));
var G__66940 = cljs.core._nth(recur_val,(8));
var G__66941 = cljs.core._nth(recur_val,(9));
var G__66942 = cljs.core._nth(recur_val,(10));
var G__66943 = cljs.core._nth(recur_val,(11));
var G__66944 = cljs.core._nth(recur_val,(12));
var G__66945 = cljs.core._nth(recur_val,(13));
var G__66946 = cljs.core._nth(recur_val,(14));
G__65635 = G__66932;
G__65636 = G__66933;
G__65637 = G__66934;
G__65638 = G__66935;
G__65639 = G__66936;
G__65640 = G__66937;
G__65641 = G__66938;
G__65642 = G__66939;
G__65643 = G__66940;
G__65644 = G__66941;
G__65645 = G__66942;
G__65646 = G__66943;
G__65647 = G__66944;
G__65648 = G__66945;
G__65649 = G__66946;
continue;
} else {
return ret__63902__auto__;
}
break;
}
});
}

break;
case (16):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__65714 = cljs.core._nth(params,(0));
var G__65715 = cljs.core._nth(params,(1));
var G__65716 = cljs.core._nth(params,(2));
var G__65717 = cljs.core._nth(params,(3));
var G__65718 = cljs.core._nth(params,(4));
var G__65719 = cljs.core._nth(params,(5));
var G__65720 = cljs.core._nth(params,(6));
var G__65721 = cljs.core._nth(params,(7));
var G__65722 = cljs.core._nth(params,(8));
var G__65723 = cljs.core._nth(params,(9));
var G__65724 = cljs.core._nth(params,(10));
var G__65725 = cljs.core._nth(params,(11));
var G__65726 = cljs.core._nth(params,(12));
var G__65727 = cljs.core._nth(params,(13));
var G__65728 = cljs.core._nth(params,(14));
var G__65729 = cljs.core._nth(params,(15));
return (function sci$impl$fns$fun_$_arity_16(G__65697,G__65698,G__65699,G__65700,G__65702,G__65703,G__65704,G__65705,G__65706,G__65707,G__65708,G__65709,G__65710,G__65711,G__65712,G__65713){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__65714,G__65697);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__65715,G__65698);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__65716,G__65699);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__65717,G__65700);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__65718,G__65702);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__65719,G__65703);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__65720,G__65704);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__65721,G__65705);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__65722,G__65706);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__65723,G__65707);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__65724,G__65708);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__65725,G__65709);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__65726,G__65710);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__65727,G__65711);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__65728,G__65712);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__65729,G__65713);
var ctx__63901__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$16);
var ret__63902__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__63901__auto__,body) : interpret.call(null,ctx__63901__auto__,body));
var recur_QMARK___63903__auto__ = (ret__63902__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63903__auto__){
var recur_val = sci.impl.types.getVal(ret__63902__auto__);
var G__66968 = cljs.core._nth(recur_val,(0));
var G__66969 = cljs.core._nth(recur_val,(1));
var G__66970 = cljs.core._nth(recur_val,(2));
var G__66971 = cljs.core._nth(recur_val,(3));
var G__66972 = cljs.core._nth(recur_val,(4));
var G__66973 = cljs.core._nth(recur_val,(5));
var G__66974 = cljs.core._nth(recur_val,(6));
var G__66975 = cljs.core._nth(recur_val,(7));
var G__66976 = cljs.core._nth(recur_val,(8));
var G__66977 = cljs.core._nth(recur_val,(9));
var G__66978 = cljs.core._nth(recur_val,(10));
var G__66979 = cljs.core._nth(recur_val,(11));
var G__66980 = cljs.core._nth(recur_val,(12));
var G__66981 = cljs.core._nth(recur_val,(13));
var G__66982 = cljs.core._nth(recur_val,(14));
var G__66983 = cljs.core._nth(recur_val,(15));
G__65697 = G__66968;
G__65698 = G__66969;
G__65699 = G__66970;
G__65700 = G__66971;
G__65702 = G__66972;
G__65703 = G__66973;
G__65704 = G__66974;
G__65705 = G__66975;
G__65706 = G__66976;
G__65707 = G__66977;
G__65708 = G__66978;
G__65709 = G__66979;
G__65710 = G__66980;
G__65711 = G__66981;
G__65712 = G__66982;
G__65713 = G__66983;
continue;
} else {
return ret__63902__auto__;
}
break;
}
});
} else {
var G__65802 = cljs.core._nth(params,(0));
var G__65803 = cljs.core._nth(params,(1));
var G__65804 = cljs.core._nth(params,(2));
var G__65805 = cljs.core._nth(params,(3));
var G__65806 = cljs.core._nth(params,(4));
var G__65807 = cljs.core._nth(params,(5));
var G__65808 = cljs.core._nth(params,(6));
var G__65809 = cljs.core._nth(params,(7));
var G__65810 = cljs.core._nth(params,(8));
var G__65811 = cljs.core._nth(params,(9));
var G__65812 = cljs.core._nth(params,(10));
var G__65813 = cljs.core._nth(params,(11));
var G__65814 = cljs.core._nth(params,(12));
var G__65815 = cljs.core._nth(params,(13));
var G__65816 = cljs.core._nth(params,(14));
var G__65817 = cljs.core._nth(params,(15));
return (function sci$impl$fns$fun_$_arity_16(G__65786,G__65787,G__65788,G__65789,G__65790,G__65791,G__65792,G__65793,G__65794,G__65795,G__65796,G__65797,G__65798,G__65799,G__65800,G__65801){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((16),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__65802,G__65786);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__65803,G__65787);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__65804,G__65788);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__65805,G__65789);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__65806,G__65790);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__65807,G__65791);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__65808,G__65792);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__65809,G__65793);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__65810,G__65794);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__65811,G__65795);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__65812,G__65796);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__65813,G__65797);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__65814,G__65798);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__65815,G__65799);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__65816,G__65800);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__65817,G__65801);
var ctx__63901__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$16);
var ret__63902__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__63901__auto__,body) : interpret.call(null,ctx__63901__auto__,body));
var recur_QMARK___63903__auto__ = (ret__63902__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63903__auto__){
var recur_val = sci.impl.types.getVal(ret__63902__auto__);
var G__66996 = cljs.core._nth(recur_val,(0));
var G__66997 = cljs.core._nth(recur_val,(1));
var G__66998 = cljs.core._nth(recur_val,(2));
var G__66999 = cljs.core._nth(recur_val,(3));
var G__67000 = cljs.core._nth(recur_val,(4));
var G__67001 = cljs.core._nth(recur_val,(5));
var G__67002 = cljs.core._nth(recur_val,(6));
var G__67003 = cljs.core._nth(recur_val,(7));
var G__67004 = cljs.core._nth(recur_val,(8));
var G__67005 = cljs.core._nth(recur_val,(9));
var G__67006 = cljs.core._nth(recur_val,(10));
var G__67007 = cljs.core._nth(recur_val,(11));
var G__67008 = cljs.core._nth(recur_val,(12));
var G__67009 = cljs.core._nth(recur_val,(13));
var G__67010 = cljs.core._nth(recur_val,(14));
var G__67011 = cljs.core._nth(recur_val,(15));
G__65786 = G__66996;
G__65787 = G__66997;
G__65788 = G__66998;
G__65789 = G__66999;
G__65790 = G__67000;
G__65791 = G__67001;
G__65792 = G__67002;
G__65793 = G__67003;
G__65794 = G__67004;
G__65795 = G__67005;
G__65796 = G__67006;
G__65797 = G__67007;
G__65798 = G__67008;
G__65799 = G__67009;
G__65800 = G__67010;
G__65801 = G__67011;
continue;
} else {
return ret__63902__auto__;
}
break;
}
});
}

break;
case (17):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__65898 = cljs.core._nth(params,(0));
var G__65899 = cljs.core._nth(params,(1));
var G__65900 = cljs.core._nth(params,(2));
var G__65901 = cljs.core._nth(params,(3));
var G__65902 = cljs.core._nth(params,(4));
var G__65903 = cljs.core._nth(params,(5));
var G__65904 = cljs.core._nth(params,(6));
var G__65905 = cljs.core._nth(params,(7));
var G__65906 = cljs.core._nth(params,(8));
var G__65907 = cljs.core._nth(params,(9));
var G__65908 = cljs.core._nth(params,(10));
var G__65909 = cljs.core._nth(params,(11));
var G__65910 = cljs.core._nth(params,(12));
var G__65911 = cljs.core._nth(params,(13));
var G__65912 = cljs.core._nth(params,(14));
var G__65913 = cljs.core._nth(params,(15));
var G__65914 = cljs.core._nth(params,(16));
return (function sci$impl$fns$fun_$_arity_17(G__65881,G__65882,G__65883,G__65884,G__65885,G__65886,G__65887,G__65888,G__65889,G__65890,G__65891,G__65892,G__65893,G__65894,G__65895,G__65896,G__65897){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__65898,G__65881);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__65899,G__65882);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__65900,G__65883);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__65901,G__65884);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__65902,G__65885);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__65903,G__65886);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__65904,G__65887);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__65905,G__65888);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__65906,G__65889);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__65907,G__65890);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__65908,G__65891);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__65909,G__65892);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__65910,G__65893);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__65911,G__65894);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__65912,G__65895);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__65913,G__65896);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__65914,G__65897);
var ctx__63901__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$17);
var ret__63902__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__63901__auto__,body) : interpret.call(null,ctx__63901__auto__,body));
var recur_QMARK___63903__auto__ = (ret__63902__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63903__auto__){
var recur_val = sci.impl.types.getVal(ret__63902__auto__);
var G__67046 = cljs.core._nth(recur_val,(0));
var G__67047 = cljs.core._nth(recur_val,(1));
var G__67048 = cljs.core._nth(recur_val,(2));
var G__67049 = cljs.core._nth(recur_val,(3));
var G__67050 = cljs.core._nth(recur_val,(4));
var G__67051 = cljs.core._nth(recur_val,(5));
var G__67052 = cljs.core._nth(recur_val,(6));
var G__67053 = cljs.core._nth(recur_val,(7));
var G__67054 = cljs.core._nth(recur_val,(8));
var G__67055 = cljs.core._nth(recur_val,(9));
var G__67056 = cljs.core._nth(recur_val,(10));
var G__67057 = cljs.core._nth(recur_val,(11));
var G__67058 = cljs.core._nth(recur_val,(12));
var G__67059 = cljs.core._nth(recur_val,(13));
var G__67060 = cljs.core._nth(recur_val,(14));
var G__67061 = cljs.core._nth(recur_val,(15));
var G__67062 = cljs.core._nth(recur_val,(16));
G__65881 = G__67046;
G__65882 = G__67047;
G__65883 = G__67048;
G__65884 = G__67049;
G__65885 = G__67050;
G__65886 = G__67051;
G__65887 = G__67052;
G__65888 = G__67053;
G__65889 = G__67054;
G__65890 = G__67055;
G__65891 = G__67056;
G__65892 = G__67057;
G__65893 = G__67058;
G__65894 = G__67059;
G__65895 = G__67060;
G__65896 = G__67061;
G__65897 = G__67062;
continue;
} else {
return ret__63902__auto__;
}
break;
}
});
} else {
var G__65989 = cljs.core._nth(params,(0));
var G__65990 = cljs.core._nth(params,(1));
var G__65991 = cljs.core._nth(params,(2));
var G__65992 = cljs.core._nth(params,(3));
var G__65993 = cljs.core._nth(params,(4));
var G__65994 = cljs.core._nth(params,(5));
var G__65995 = cljs.core._nth(params,(6));
var G__65996 = cljs.core._nth(params,(7));
var G__65997 = cljs.core._nth(params,(8));
var G__65998 = cljs.core._nth(params,(9));
var G__65999 = cljs.core._nth(params,(10));
var G__66000 = cljs.core._nth(params,(11));
var G__66001 = cljs.core._nth(params,(12));
var G__66002 = cljs.core._nth(params,(13));
var G__66003 = cljs.core._nth(params,(14));
var G__66004 = cljs.core._nth(params,(15));
var G__66005 = cljs.core._nth(params,(16));
return (function sci$impl$fns$fun_$_arity_17(G__65972,G__65973,G__65974,G__65975,G__65976,G__65977,G__65978,G__65979,G__65980,G__65981,G__65982,G__65983,G__65984,G__65985,G__65986,G__65987,G__65988){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((17),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__65989,G__65972);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__65990,G__65973);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__65991,G__65974);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__65992,G__65975);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__65993,G__65976);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__65994,G__65977);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__65995,G__65978);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__65996,G__65979);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__65997,G__65980);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__65998,G__65981);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__65999,G__65982);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__66000,G__65983);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__66001,G__65984);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__66002,G__65985);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__66003,G__65986);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__66004,G__65987);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__66005,G__65988);
var ctx__63901__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$17);
var ret__63902__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__63901__auto__,body) : interpret.call(null,ctx__63901__auto__,body));
var recur_QMARK___63903__auto__ = (ret__63902__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63903__auto__){
var recur_val = sci.impl.types.getVal(ret__63902__auto__);
var G__67102 = cljs.core._nth(recur_val,(0));
var G__67103 = cljs.core._nth(recur_val,(1));
var G__67104 = cljs.core._nth(recur_val,(2));
var G__67105 = cljs.core._nth(recur_val,(3));
var G__67106 = cljs.core._nth(recur_val,(4));
var G__67107 = cljs.core._nth(recur_val,(5));
var G__67108 = cljs.core._nth(recur_val,(6));
var G__67109 = cljs.core._nth(recur_val,(7));
var G__67110 = cljs.core._nth(recur_val,(8));
var G__67111 = cljs.core._nth(recur_val,(9));
var G__67112 = cljs.core._nth(recur_val,(10));
var G__67113 = cljs.core._nth(recur_val,(11));
var G__67114 = cljs.core._nth(recur_val,(12));
var G__67115 = cljs.core._nth(recur_val,(13));
var G__67116 = cljs.core._nth(recur_val,(14));
var G__67117 = cljs.core._nth(recur_val,(15));
var G__67118 = cljs.core._nth(recur_val,(16));
G__65972 = G__67102;
G__65973 = G__67103;
G__65974 = G__67104;
G__65975 = G__67105;
G__65976 = G__67106;
G__65977 = G__67107;
G__65978 = G__67108;
G__65979 = G__67109;
G__65980 = G__67110;
G__65981 = G__67111;
G__65982 = G__67112;
G__65983 = G__67113;
G__65984 = G__67114;
G__65985 = G__67115;
G__65986 = G__67116;
G__65987 = G__67117;
G__65988 = G__67118;
continue;
} else {
return ret__63902__auto__;
}
break;
}
});
}

break;
case (18):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__66084 = cljs.core._nth(params,(0));
var G__66085 = cljs.core._nth(params,(1));
var G__66086 = cljs.core._nth(params,(2));
var G__66087 = cljs.core._nth(params,(3));
var G__66088 = cljs.core._nth(params,(4));
var G__66089 = cljs.core._nth(params,(5));
var G__66090 = cljs.core._nth(params,(6));
var G__66091 = cljs.core._nth(params,(7));
var G__66092 = cljs.core._nth(params,(8));
var G__66093 = cljs.core._nth(params,(9));
var G__66094 = cljs.core._nth(params,(10));
var G__66095 = cljs.core._nth(params,(11));
var G__66096 = cljs.core._nth(params,(12));
var G__66097 = cljs.core._nth(params,(13));
var G__66098 = cljs.core._nth(params,(14));
var G__66099 = cljs.core._nth(params,(15));
var G__66100 = cljs.core._nth(params,(16));
var G__66101 = cljs.core._nth(params,(17));
return (function sci$impl$fns$fun_$_arity_18(G__66066,G__66067,G__66068,G__66069,G__66070,G__66071,G__66072,G__66073,G__66074,G__66075,G__66076,G__66077,G__66078,G__66079,G__66080,G__66081,G__66082,G__66083){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__66084,G__66066);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__66085,G__66067);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__66086,G__66068);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__66087,G__66069);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__66088,G__66070);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__66089,G__66071);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__66090,G__66072);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__66091,G__66073);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__66092,G__66074);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__66093,G__66075);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__66094,G__66076);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__66095,G__66077);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__66096,G__66078);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__66097,G__66079);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__66098,G__66080);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__66099,G__66081);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__66100,G__66082);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__66101,G__66083);
var ctx__63901__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$18);
var ret__63902__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__63901__auto__,body) : interpret.call(null,ctx__63901__auto__,body));
var recur_QMARK___63903__auto__ = (ret__63902__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63903__auto__){
var recur_val = sci.impl.types.getVal(ret__63902__auto__);
var G__67146 = cljs.core._nth(recur_val,(0));
var G__67147 = cljs.core._nth(recur_val,(1));
var G__67148 = cljs.core._nth(recur_val,(2));
var G__67149 = cljs.core._nth(recur_val,(3));
var G__67150 = cljs.core._nth(recur_val,(4));
var G__67151 = cljs.core._nth(recur_val,(5));
var G__67152 = cljs.core._nth(recur_val,(6));
var G__67153 = cljs.core._nth(recur_val,(7));
var G__67154 = cljs.core._nth(recur_val,(8));
var G__67155 = cljs.core._nth(recur_val,(9));
var G__67156 = cljs.core._nth(recur_val,(10));
var G__67157 = cljs.core._nth(recur_val,(11));
var G__67158 = cljs.core._nth(recur_val,(12));
var G__67159 = cljs.core._nth(recur_val,(13));
var G__67160 = cljs.core._nth(recur_val,(14));
var G__67161 = cljs.core._nth(recur_val,(15));
var G__67162 = cljs.core._nth(recur_val,(16));
var G__67163 = cljs.core._nth(recur_val,(17));
G__66066 = G__67146;
G__66067 = G__67147;
G__66068 = G__67148;
G__66069 = G__67149;
G__66070 = G__67150;
G__66071 = G__67151;
G__66072 = G__67152;
G__66073 = G__67153;
G__66074 = G__67154;
G__66075 = G__67155;
G__66076 = G__67156;
G__66077 = G__67157;
G__66078 = G__67158;
G__66079 = G__67159;
G__66080 = G__67160;
G__66081 = G__67161;
G__66082 = G__67162;
G__66083 = G__67163;
continue;
} else {
return ret__63902__auto__;
}
break;
}
});
} else {
var G__66142 = cljs.core._nth(params,(0));
var G__66143 = cljs.core._nth(params,(1));
var G__66144 = cljs.core._nth(params,(2));
var G__66145 = cljs.core._nth(params,(3));
var G__66146 = cljs.core._nth(params,(4));
var G__66147 = cljs.core._nth(params,(5));
var G__66148 = cljs.core._nth(params,(6));
var G__66149 = cljs.core._nth(params,(7));
var G__66150 = cljs.core._nth(params,(8));
var G__66151 = cljs.core._nth(params,(9));
var G__66152 = cljs.core._nth(params,(10));
var G__66153 = cljs.core._nth(params,(11));
var G__66154 = cljs.core._nth(params,(12));
var G__66155 = cljs.core._nth(params,(13));
var G__66156 = cljs.core._nth(params,(14));
var G__66157 = cljs.core._nth(params,(15));
var G__66158 = cljs.core._nth(params,(16));
var G__66159 = cljs.core._nth(params,(17));
return (function sci$impl$fns$fun_$_arity_18(G__66124,G__66125,G__66126,G__66127,G__66128,G__66129,G__66130,G__66131,G__66132,G__66133,G__66134,G__66135,G__66136,G__66137,G__66138,G__66139,G__66140,G__66141){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((18),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__66142,G__66124);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__66143,G__66125);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__66144,G__66126);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__66145,G__66127);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__66146,G__66128);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__66147,G__66129);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__66148,G__66130);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__66149,G__66131);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__66150,G__66132);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__66151,G__66133);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__66152,G__66134);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__66153,G__66135);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__66154,G__66136);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__66155,G__66137);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__66156,G__66138);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__66157,G__66139);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__66158,G__66140);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__66159,G__66141);
var ctx__63901__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$18);
var ret__63902__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__63901__auto__,body) : interpret.call(null,ctx__63901__auto__,body));
var recur_QMARK___63903__auto__ = (ret__63902__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63903__auto__){
var recur_val = sci.impl.types.getVal(ret__63902__auto__);
var G__67191 = cljs.core._nth(recur_val,(0));
var G__67192 = cljs.core._nth(recur_val,(1));
var G__67193 = cljs.core._nth(recur_val,(2));
var G__67194 = cljs.core._nth(recur_val,(3));
var G__67195 = cljs.core._nth(recur_val,(4));
var G__67196 = cljs.core._nth(recur_val,(5));
var G__67197 = cljs.core._nth(recur_val,(6));
var G__67198 = cljs.core._nth(recur_val,(7));
var G__67199 = cljs.core._nth(recur_val,(8));
var G__67200 = cljs.core._nth(recur_val,(9));
var G__67201 = cljs.core._nth(recur_val,(10));
var G__67202 = cljs.core._nth(recur_val,(11));
var G__67203 = cljs.core._nth(recur_val,(12));
var G__67204 = cljs.core._nth(recur_val,(13));
var G__67205 = cljs.core._nth(recur_val,(14));
var G__67206 = cljs.core._nth(recur_val,(15));
var G__67207 = cljs.core._nth(recur_val,(16));
var G__67208 = cljs.core._nth(recur_val,(17));
G__66124 = G__67191;
G__66125 = G__67192;
G__66126 = G__67193;
G__66127 = G__67194;
G__66128 = G__67195;
G__66129 = G__67196;
G__66130 = G__67197;
G__66131 = G__67198;
G__66132 = G__67199;
G__66133 = G__67200;
G__66134 = G__67201;
G__66135 = G__67202;
G__66136 = G__67203;
G__66137 = G__67204;
G__66138 = G__67205;
G__66139 = G__67206;
G__66140 = G__67207;
G__66141 = G__67208;
continue;
} else {
return ret__63902__auto__;
}
break;
}
});
}

break;
case (19):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__66211 = cljs.core._nth(params,(0));
var G__66212 = cljs.core._nth(params,(1));
var G__66213 = cljs.core._nth(params,(2));
var G__66214 = cljs.core._nth(params,(3));
var G__66215 = cljs.core._nth(params,(4));
var G__66216 = cljs.core._nth(params,(5));
var G__66217 = cljs.core._nth(params,(6));
var G__66218 = cljs.core._nth(params,(7));
var G__66219 = cljs.core._nth(params,(8));
var G__66220 = cljs.core._nth(params,(9));
var G__66221 = cljs.core._nth(params,(10));
var G__66222 = cljs.core._nth(params,(11));
var G__66223 = cljs.core._nth(params,(12));
var G__66224 = cljs.core._nth(params,(13));
var G__66225 = cljs.core._nth(params,(14));
var G__66226 = cljs.core._nth(params,(15));
var G__66227 = cljs.core._nth(params,(16));
var G__66228 = cljs.core._nth(params,(17));
var G__66229 = cljs.core._nth(params,(18));
return (function sci$impl$fns$fun_$_arity_19(G__66192,G__66193,G__66194,G__66195,G__66196,G__66197,G__66198,G__66199,G__66200,G__66201,G__66202,G__66203,G__66204,G__66205,G__66206,G__66207,G__66208,G__66209,G__66210){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__66211,G__66192);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__66212,G__66193);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__66213,G__66194);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__66214,G__66195);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__66215,G__66196);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__66216,G__66197);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__66217,G__66198);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__66218,G__66199);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__66219,G__66200);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__66220,G__66201);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__66221,G__66202);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__66222,G__66203);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__66223,G__66204);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__66224,G__66205);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__66225,G__66206);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__66226,G__66207);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__66227,G__66208);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__66228,G__66209);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__66229,G__66210);
var ctx__63901__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$19);
var ret__63902__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__63901__auto__,body) : interpret.call(null,ctx__63901__auto__,body));
var recur_QMARK___63903__auto__ = (ret__63902__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63903__auto__){
var recur_val = sci.impl.types.getVal(ret__63902__auto__);
var G__67240 = cljs.core._nth(recur_val,(0));
var G__67241 = cljs.core._nth(recur_val,(1));
var G__67242 = cljs.core._nth(recur_val,(2));
var G__67243 = cljs.core._nth(recur_val,(3));
var G__67244 = cljs.core._nth(recur_val,(4));
var G__67245 = cljs.core._nth(recur_val,(5));
var G__67246 = cljs.core._nth(recur_val,(6));
var G__67247 = cljs.core._nth(recur_val,(7));
var G__67248 = cljs.core._nth(recur_val,(8));
var G__67249 = cljs.core._nth(recur_val,(9));
var G__67250 = cljs.core._nth(recur_val,(10));
var G__67251 = cljs.core._nth(recur_val,(11));
var G__67252 = cljs.core._nth(recur_val,(12));
var G__67253 = cljs.core._nth(recur_val,(13));
var G__67254 = cljs.core._nth(recur_val,(14));
var G__67255 = cljs.core._nth(recur_val,(15));
var G__67256 = cljs.core._nth(recur_val,(16));
var G__67257 = cljs.core._nth(recur_val,(17));
var G__67258 = cljs.core._nth(recur_val,(18));
G__66192 = G__67240;
G__66193 = G__67241;
G__66194 = G__67242;
G__66195 = G__67243;
G__66196 = G__67244;
G__66197 = G__67245;
G__66198 = G__67246;
G__66199 = G__67247;
G__66200 = G__67248;
G__66201 = G__67249;
G__66202 = G__67250;
G__66203 = G__67251;
G__66204 = G__67252;
G__66205 = G__67253;
G__66206 = G__67254;
G__66207 = G__67255;
G__66208 = G__67256;
G__66209 = G__67257;
G__66210 = G__67258;
continue;
} else {
return ret__63902__auto__;
}
break;
}
});
} else {
var G__66284 = cljs.core._nth(params,(0));
var G__66285 = cljs.core._nth(params,(1));
var G__66286 = cljs.core._nth(params,(2));
var G__66287 = cljs.core._nth(params,(3));
var G__66288 = cljs.core._nth(params,(4));
var G__66289 = cljs.core._nth(params,(5));
var G__66290 = cljs.core._nth(params,(6));
var G__66291 = cljs.core._nth(params,(7));
var G__66292 = cljs.core._nth(params,(8));
var G__66293 = cljs.core._nth(params,(9));
var G__66294 = cljs.core._nth(params,(10));
var G__66295 = cljs.core._nth(params,(11));
var G__66296 = cljs.core._nth(params,(12));
var G__66297 = cljs.core._nth(params,(13));
var G__66298 = cljs.core._nth(params,(14));
var G__66299 = cljs.core._nth(params,(15));
var G__66300 = cljs.core._nth(params,(16));
var G__66301 = cljs.core._nth(params,(17));
var G__66302 = cljs.core._nth(params,(18));
return (function sci$impl$fns$fun_$_arity_19(G__66265,G__66266,G__66267,G__66268,G__66269,G__66270,G__66271,G__66272,G__66273,G__66274,G__66275,G__66276,G__66277,G__66278,G__66279,G__66280,G__66281,G__66282,G__66283){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((19),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__66284,G__66265);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__66285,G__66266);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__66286,G__66267);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__66287,G__66268);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__66288,G__66269);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__66289,G__66270);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__66290,G__66271);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__66291,G__66272);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__66292,G__66273);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__66293,G__66274);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__66294,G__66275);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__66295,G__66276);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__66296,G__66277);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__66297,G__66278);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__66298,G__66279);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__66299,G__66280);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__66300,G__66281);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__66301,G__66282);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__66302,G__66283);
var ctx__63901__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$19);
var ret__63902__auto__ = (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(ctx__63901__auto__,body) : interpret.call(null,ctx__63901__auto__,body));
var recur_QMARK___63903__auto__ = (ret__63902__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63903__auto__){
var recur_val = sci.impl.types.getVal(ret__63902__auto__);
var G__67469 = cljs.core._nth(recur_val,(0));
var G__67470 = cljs.core._nth(recur_val,(1));
var G__67471 = cljs.core._nth(recur_val,(2));
var G__67472 = cljs.core._nth(recur_val,(3));
var G__67473 = cljs.core._nth(recur_val,(4));
var G__67474 = cljs.core._nth(recur_val,(5));
var G__67475 = cljs.core._nth(recur_val,(6));
var G__67476 = cljs.core._nth(recur_val,(7));
var G__67477 = cljs.core._nth(recur_val,(8));
var G__67478 = cljs.core._nth(recur_val,(9));
var G__67479 = cljs.core._nth(recur_val,(10));
var G__67480 = cljs.core._nth(recur_val,(11));
var G__67481 = cljs.core._nth(recur_val,(12));
var G__67482 = cljs.core._nth(recur_val,(13));
var G__67483 = cljs.core._nth(recur_val,(14));
var G__67484 = cljs.core._nth(recur_val,(15));
var G__67485 = cljs.core._nth(recur_val,(16));
var G__67486 = cljs.core._nth(recur_val,(17));
var G__67487 = cljs.core._nth(recur_val,(18));
G__66265 = G__67469;
G__66266 = G__67470;
G__66267 = G__67471;
G__66268 = G__67472;
G__66269 = G__67473;
G__66270 = G__67474;
G__66271 = G__67475;
G__66272 = G__67476;
G__66273 = G__67477;
G__66274 = G__67478;
G__66275 = G__67479;
G__66276 = G__67480;
G__66277 = G__67481;
G__66278 = G__67482;
G__66279 = G__67483;
G__66280 = G__67484;
G__66281 = G__67485;
G__66282 = G__67486;
G__66283 = G__67487;
continue;
} else {
return ret__63902__auto__;
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

var G__67488 = cljs.core.next(args_STAR_);
var G__67489 = cljs.core.next(params__$1);
var G__67490 = cljs.core._assoc(ret,fp,cljs.core.first(args_STAR_));
args_STAR_ = G__67488;
params__$1 = G__67489;
ret = G__67490;
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
var vec__66335 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(recur_val,(0),min_var_args_arity),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(recur_val,min_var_args_arity)], null);
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66335,(0),null);
var vec__66338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66335,(1),null);
var rest_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66338,(0),null);
var G__67491 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(fixed_args,rest_args);
args = G__67491;
continue;
} else {
var G__67492 = recur_val;
args = G__67492;
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
var G__67493__i = 0, G__67493__a = new Array(arguments.length -  0);
while (G__67493__i < G__67493__a.length) {G__67493__a[G__67493__i] = arguments[G__67493__i + 0]; ++G__67493__i;}
  args = new cljs.core.IndexedSeq(G__67493__a,0,null);
} 
return sci$impl$fns$fun_$_varargs__delegate.call(this,args);};
sci$impl$fns$fun_$_varargs.cljs$lang$maxFixedArity = 0;
sci$impl$fns$fun_$_varargs.cljs$lang$applyTo = (function (arglist__67494){
var args = cljs.core.seq(arglist__67494);
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

var G__67495 = cljs.core.next(args_STAR_);
var G__67496 = cljs.core.next(params__$1);
var G__67497 = cljs.core._assoc(ret,fp,cljs.core.first(args_STAR_));
args_STAR_ = G__67495;
params__$1 = G__67496;
ret = G__67497;
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
var vec__66346 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(recur_val,(0),min_var_args_arity),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(recur_val,min_var_args_arity)], null);
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66346,(0),null);
var vec__66349 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66346,(1),null);
var rest_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66349,(0),null);
var G__67498 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(fixed_args,rest_args);
args = G__67498;
continue;
} else {
var G__67499 = recur_val;
args = G__67499;
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
var G__67500__i = 0, G__67500__a = new Array(arguments.length -  0);
while (G__67500__i < G__67500__a.length) {G__67500__a[G__67500__i] = arguments[G__67500__i + 0]; ++G__67500__i;}
  args = new cljs.core.IndexedSeq(G__67500__a,0,null);
} 
return sci$impl$fns$fun_$_varargs__delegate.call(this,args);};
sci$impl$fns$fun_$_varargs.cljs$lang$maxFixedArity = 0;
sci$impl$fns$fun_$_varargs.cljs$lang$applyTo = (function (arglist__67501){
var args = cljs.core.seq(arglist__67501);
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
sci.impl.fns.eval_fn = (function sci$impl$fns$eval_fn(ctx,interpret,p__66385){
var map__66387 = p__66385;
var map__66387__$1 = (((((!((map__66387 == null))))?(((((map__66387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66387):map__66387);
var f = map__66387__$1;
var fn_bodies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66387__$1,new cljs.core.Keyword("sci.impl","fn-bodies","sci.impl/fn-bodies",134751661));
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66387__$1,new cljs.core.Keyword("sci.impl","fn-name","sci.impl/fn-name",-1172300569));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66387__$1,new cljs.core.Keyword("sci.impl","var","sci.impl/var",-2041185552));
var macro_QMARK_ = new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(f);
var self_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ctx__$1 = (cljs.core.truth_(((cljs.core.not(var$))?fn_name:false))?cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),fn_name], null),(function() { 
var sci$impl$fns$eval_fn_$_call_self__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self_ref),args);
};
var sci$impl$fns$eval_fn_$_call_self = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67502__i = 0, G__67502__a = new Array(arguments.length -  0);
while (G__67502__i < G__67502__a.length) {G__67502__a[G__67502__i] = arguments[G__67502__i + 0]; ++G__67502__i;}
  args = new cljs.core.IndexedSeq(G__67502__a,0,null);
} 
return sci$impl$fns$eval_fn_$_call_self__delegate.call(this,args);};
sci$impl$fns$eval_fn_$_call_self.cljs$lang$maxFixedArity = 0;
sci$impl$fns$eval_fn_$_call_self.cljs$lang$applyTo = (function (arglist__67503){
var args = cljs.core.seq(arglist__67503);
return sci$impl$fns$eval_fn_$_call_self__delegate(args);
});
sci$impl$fns$eval_fn_$_call_self.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$eval_fn_$_call_self__delegate;
return sci$impl$fns$eval_fn_$_call_self;
})()
):ctx);
var single_arity_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(fn_bodies));
var f__$1 = ((single_arity_QMARK_)?sci.impl.fns.fun(ctx__$1,interpret,cljs.core.first(fn_bodies),fn_name,macro_QMARK_):(function (){var arities = sci.impl.fns.fn_arity_map(ctx__$1,interpret,fn_name,macro_QMARK_,fn_bodies);
return (function() { 
var G__67504__delegate = function (args){
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
var G__67504 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67505__i = 0, G__67505__a = new Array(arguments.length -  0);
while (G__67505__i < G__67505__a.length) {G__67505__a[G__67505__i] = arguments[G__67505__i + 0]; ++G__67505__i;}
  args = new cljs.core.IndexedSeq(G__67505__a,0,null);
} 
return G__67504__delegate.call(this,args);};
G__67504.cljs$lang$maxFixedArity = 0;
G__67504.cljs$lang$applyTo = (function (arglist__67506){
var args = cljs.core.seq(arglist__67506);
return G__67504__delegate(args);
});
G__67504.cljs$core$IFn$_invoke$arity$variadic = G__67504__delegate;
return G__67504;
})()
;
})());
var f__$2 = (cljs.core.truth_(macro_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(f__$1,(function (p1__66377_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__66377_SHARP_,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_);
})):f__$1);
cljs.core.reset_BANG_(self_ref,f__$2);

return f__$2;
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_fn,sci.impl.fns.eval_fn);

//# sourceMappingURL=sci.impl.fns.js.map
