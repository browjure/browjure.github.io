goog.provide('sci.impl.for_macro');
sci.impl.for_macro.assert_args = (function sci$impl$for_macro$assert_args(seq_exprs,_body_expr){
if(cljs.core.vector_QMARK_(seq_exprs)){
} else {
throw (new Error("for requires a vector for its binding"));
}

if(cljs.core.even_QMARK_(cljs.core.count(seq_exprs))){
return null;
} else {
throw (new Error("for requires an even number of forms in binding vector"));
}
});
sci.impl.for_macro.expand_for = (function sci$impl$for_macro$expand_for(_,p__75838){
var vec__75839 = p__75838;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75839,(0),null);
var seq_exprs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75839,(1),null);
var body_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75839,(2),null);
sci.impl.for_macro.assert_args(seq_exprs,body_expr);

var to_groups = (function (seq_exprs__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (groups,p__75842){
var vec__75843 = p__75842;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75843,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75843,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(groups),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.peek(groups),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),seq_exprs__$1));
});
var err = (function() { 
var G__76074__delegate = function (msg){
throw (new Error(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg)));
};
var G__76074 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__76075__i = 0, G__76075__a = new Array(arguments.length -  0);
while (G__76075__i < G__76075__a.length) {G__76075__a[G__76075__i] = arguments[G__76075__i + 0]; ++G__76075__i;}
  msg = new cljs.core.IndexedSeq(G__76075__a,0,null);
} 
return G__76074__delegate.call(this,msg);};
G__76074.cljs$lang$maxFixedArity = 0;
G__76074.cljs$lang$applyTo = (function (arglist__76076){
var msg = cljs.core.seq(arglist__76076);
return G__76074__delegate(msg);
});
G__76074.cljs$core$IFn$_invoke$arity$variadic = G__76074__delegate;
return G__76074;
})()
;
var emit_bind = (function sci$impl$for_macro$expand_for_$_emit_bind(p__75865){
var vec__75873 = p__75865;
var seq__75874 = cljs.core.seq(vec__75873);
var first__75875 = cljs.core.first(seq__75874);
var seq__75874__$1 = cljs.core.next(seq__75874);
var vec__75876 = first__75875;
var seq__75877 = cljs.core.seq(vec__75876);
var first__75878 = cljs.core.first(seq__75877);
var seq__75877__$1 = cljs.core.next(seq__75877);
var bind = first__75878;
var first__75878__$1 = cljs.core.first(seq__75877__$1);
var seq__75877__$2 = cljs.core.next(seq__75877__$1);
var expr = first__75878__$1;
var mod_pairs = seq__75877__$2;
var vec__75879 = seq__75874__$1;
var vec__75882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75879,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75882,(0),null);
var next_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75882,(1),null);
var next_groups = vec__75879;
var giter = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("iter__");
var gxs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("s__");
var do_mod = (function sci$impl$for_macro$expand_for_$_emit_bind_$_do_mod(p__75885){
var vec__75890 = p__75885;
var seq__75891 = cljs.core.seq(vec__75890);
var first__75892 = cljs.core.first(seq__75891);
var seq__75891__$1 = cljs.core.next(seq__75891);
var vec__75893 = first__75892;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75893,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75893,(1),null);
var pair = vec__75893;
var etc = seq__75891__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci$impl$for_macro$expand_for_$_emit_bind_$_do_mod(etc),null,(1),null))], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci$impl$for_macro$expand_for_$_emit_bind_$_do_mod(etc),null,(1),null))], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci$impl$for_macro$expand_for_$_emit_bind_$_do_mod(etc),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,sci.impl.utils.allowed_recur,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),null,(1),null))))),null,(1),null))], 0))));
} else {
if((k instanceof cljs.core.Keyword)){
return err("Invalid 'for' keyword ",k);
} else {
if(next_groups){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"iterys__75817__auto__","iterys__75817__auto__",1511401386,null),null,(1),null)),(new cljs.core.List(null,sci$impl$for_macro$expand_for_$_emit_bind(next_groups),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"fs__75818__auto__","fs__75818__auto__",2017486517,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"iterys__75817__auto__","iterys__75817__auto__",1511401386,null),null,(1),null)),(new cljs.core.List(null,next_expr,null,(1),null))))),null,(1),null))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"fs__75818__auto__","fs__75818__auto__",2017486517,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"fs__75818__auto__","fs__75818__auto__",2017486517,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,giter,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,sci.impl.utils.allowed_recur,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null),null,(1),null)),(new cljs.core.List(null,body_expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,giter,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),null,(1),null))))),null,(1),null))], 0))));

}
}
}
}
}
});
if(next_groups){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,giter,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,gxs,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","lazy-seq","cljs.core/lazy-seq",627681297,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,sci.impl.utils.allowed_loop,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,gxs,null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-first","cljs.core/when-first",-667185267,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,bind,null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,do_mod(mod_pairs),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0))));
} else {
var gi = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("i__");
var gb = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("b__");
var do_cmod = (function sci$impl$for_macro$expand_for_$_emit_bind_$_do_cmod(p__75982){
var vec__75983 = p__75982;
var seq__75984 = cljs.core.seq(vec__75983);
var first__75985 = cljs.core.first(seq__75984);
var seq__75984__$1 = cljs.core.next(seq__75984);
var vec__75986 = first__75985;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75986,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75986,(1),null);
var pair = vec__75986;
var etc = seq__75984__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci$impl$for_macro$expand_for_$_emit_bind_$_do_cmod(etc),null,(1),null))], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci$impl$for_macro$expand_for_$_emit_bind_$_do_cmod(etc),null,(1),null))], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci$impl$for_macro$expand_for_$_emit_bind_$_do_cmod(etc),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,sci.impl.utils.allowed_recur,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","unchecked-inc","cljs.core/unchecked-inc",-501313167,null),null,(1),null)),(new cljs.core.List(null,gi,null,(1),null))))),null,(1),null))))),null,(1),null))], 0))));
} else {
if((k instanceof cljs.core.Keyword)){
return err("Invalid 'for' keyword ",k);
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk-append","cljs.core/chunk-append",-243671470,null),null,(1),null)),(new cljs.core.List(null,gb,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,body_expr,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,sci.impl.utils.allowed_recur,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","unchecked-inc","cljs.core/unchecked-inc",-501313167,null),null,(1),null)),(new cljs.core.List(null,gi,null,(1),null))))),null,(1),null))))),null,(1),null))], 0))));

}
}
}
}
});
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,giter,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,gxs,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","lazy-seq","cljs.core/lazy-seq",627681297,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,sci.impl.utils.allowed_loop,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,gxs,null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,gxs,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"c__75833__auto__","c__75833__auto__",1193739845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"size__75834__auto__","size__75834__auto__",971859777,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","int","cljs.core/int",20935062,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"c__75833__auto__","c__75833__auto__",1193739845,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,gb,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk-buffer","cljs.core/chunk-buffer",14093626,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"size__75834__auto__","size__75834__auto__",971859777,null),null,(1),null))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,sci.impl.utils.allowed_loop,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,gi,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","int","cljs.core/int",20935062,null),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<","cljs.core/<",1677496129,null),null,(1),null)),(new cljs.core.List(null,gi,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"size__75834__auto__","size__75834__auto__",971859777,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,bind,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"c__75833__auto__","c__75833__auto__",1193739845,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,gi,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,do_cmod(mod_pairs),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null),null,(1),null)),(new cljs.core.List(null,gb,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,giter,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null),null,(1),null)),(new cljs.core.List(null,gb,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,bind,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,do_mod(mod_pairs),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0))));
}
});
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"iter__75837__auto__","iter__75837__auto__",1164951706,null),null,(1),null)),(new cljs.core.List(null,emit_bind(to_groups(seq_exprs)),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"iter__75837__auto__","iter__75837__auto__",1164951706,null),null,(1),null)),(new cljs.core.List(null,cljs.core.second(seq_exprs),null,(1),null))))),null,(1),null))], 0))));
});

//# sourceMappingURL=sci.impl.for_macro.js.map
