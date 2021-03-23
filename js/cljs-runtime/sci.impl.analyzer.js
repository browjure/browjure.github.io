goog.provide('sci.impl.analyzer');
sci.impl.analyzer.special_syms = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [new cljs.core.Symbol(null,"try","try",-1273693247,null),"null",new cljs.core.Symbol(null,"finally","finally",-1065347064,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"if","if",1181717262,null),"null",new cljs.core.Symbol(null,"new","new",-444906321,null),"null",new cljs.core.Symbol(null,"recur","recur",1202958259,null),"null",new cljs.core.Symbol(null,"set!","set!",250714521,null),"null",new cljs.core.Symbol(null,".",".",1975675962,null),"null",new cljs.core.Symbol(null,"var","var",870848730,null),"null",new cljs.core.Symbol(null,"quote","quote",1377916282,null),"null",new cljs.core.Symbol(null,"catch","catch",-1616370245,null),"null",new cljs.core.Symbol(null,"throw","throw",595905694,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
sci.impl.analyzer.throw_error_with_location = (function sci$impl$analyzer$throw_error_with_location(msg,node){
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$3(msg,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),"analysis"], null));
});



sci.impl.analyzer.macroexpand_1 = (function sci$impl$analyzer$macroexpand_1(ctx,expr){
var original_expr = expr;
if(cljs.core.seq_QMARK_(expr)){
var op = cljs.core.first(expr);
if((op instanceof cljs.core.Symbol)){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.special_syms,op))){
return expr;
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"for","for",316745208,null),null], null), null),op)){
var G__70263 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825),true);
var G__70264 = expr;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__70263,G__70264) : sci.impl.analyzer.analyze.call(null,G__70263,G__70264));
} else {
var f = sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,op,true);
var f__$1 = (cljs.core.truth_(((sci.impl.vars.var_QMARK_(f))?sci.impl.vars.isMacro(f):false))?cljs.core.deref(f):f);
if(cljs.core.truth_(sci.impl.utils.macro_QMARK_(f__$1))){
var f__$2 = (((sci.impl.utils.needs_ctx === (function (){var G__70270 = f__$1;
var G__70270__$1 = (((G__70270 == null))?null:cljs.core.meta(G__70270));
if((G__70270__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(G__70270__$1);
}
})()))?cljs.core.partial.cljs$core$IFn$_invoke$arity$2(f__$1,ctx):f__$1);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$2,original_expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest(expr));
} else {
return expr;
}

}
}
} else {
return expr;
}
} else {
return expr;
}
});
sci.impl.analyzer.macroexpand = (function sci$impl$analyzer$macroexpand(ctx,form){
var ex = sci.impl.analyzer.macroexpand_1(ctx,form);
if((ex === form)){
return form;
} else {
return (sci.impl.analyzer.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.analyzer.macroexpand.call(null,ctx,ex));
}
});
cljs.core.vreset_BANG_(sci.impl.utils.macroexpand_STAR_,sci.impl.analyzer.macroexpand);
cljs.core.vreset_BANG_(sci.impl.utils.macroexpand_1_STAR_,sci.impl.analyzer.macroexpand_1);
sci.impl.analyzer.return_do = (function sci$impl$analyzer$return_do(expr,analyzed_children){
var G__70283 = cljs.core.count(analyzed_children);
switch (G__70283) {
case (0):
return null;

break;
case (1):
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return sci.impl.utils.ctx_fn((function (ctx){
sci.impl.evaluator.eval(ctx,arg0);

return sci.impl.evaluator.eval(ctx,arg1);
}),expr);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return sci.impl.utils.ctx_fn((function (ctx){
sci.impl.evaluator.eval(ctx,arg0);

sci.impl.evaluator.eval(ctx,arg1);

return sci.impl.evaluator.eval(ctx,arg2);
}),expr);

break;
default:
return sci.impl.utils.ctx_fn((function (ctx){
return sci.impl.evaluator.eval_do(ctx,analyzed_children);
}),expr);

}
});
sci.impl.analyzer.return_or = (function sci$impl$analyzer$return_or(expr,analyzed_children){
var G__70287 = cljs.core.count(analyzed_children);
switch (G__70287) {
case (0):
return null;

break;
case (1):
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return sci.impl.utils.ctx_fn((function (ctx){
var or__4126__auto__ = sci.impl.evaluator.eval(ctx,arg0);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return sci.impl.evaluator.eval(ctx,arg1);
}
}),expr);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return sci.impl.utils.ctx_fn((function (ctx){
var or__4126__auto__ = sci.impl.evaluator.eval(ctx,arg0);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = sci.impl.evaluator.eval(ctx,arg1);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return sci.impl.evaluator.eval(ctx,arg2);
}
}
}),expr);

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return sci.impl.utils.ctx_fn((function (ctx){
var or__4126__auto__ = sci.impl.evaluator.eval(ctx,arg0);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = sci.impl.evaluator.eval(ctx,arg1);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = sci.impl.evaluator.eval(ctx,arg2);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return sci.impl.evaluator.eval(ctx,arg3);
}
}
}
}),expr);

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return sci.impl.utils.ctx_fn((function (ctx){
var or__4126__auto__ = sci.impl.evaluator.eval(ctx,arg0);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = sci.impl.evaluator.eval(ctx,arg1);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = sci.impl.evaluator.eval(ctx,arg2);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = sci.impl.evaluator.eval(ctx,arg3);
if(cljs.core.truth_(or__4126__auto____$3)){
return or__4126__auto____$3;
} else {
return sci.impl.evaluator.eval(ctx,arg4);
}
}
}
}
}),expr);

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
return sci.impl.utils.ctx_fn((function (ctx){
var or__4126__auto__ = sci.impl.evaluator.eval(ctx,arg0);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = sci.impl.evaluator.eval(ctx,arg1);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = sci.impl.evaluator.eval(ctx,arg2);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = sci.impl.evaluator.eval(ctx,arg3);
if(cljs.core.truth_(or__4126__auto____$3)){
return or__4126__auto____$3;
} else {
var or__4126__auto____$4 = sci.impl.evaluator.eval(ctx,arg4);
if(cljs.core.truth_(or__4126__auto____$4)){
return or__4126__auto____$4;
} else {
return sci.impl.evaluator.eval(ctx,arg5);
}
}
}
}
}
}),expr);

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
return sci.impl.utils.ctx_fn((function (ctx){
var or__4126__auto__ = sci.impl.evaluator.eval(ctx,arg0);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = sci.impl.evaluator.eval(ctx,arg1);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = sci.impl.evaluator.eval(ctx,arg2);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = sci.impl.evaluator.eval(ctx,arg3);
if(cljs.core.truth_(or__4126__auto____$3)){
return or__4126__auto____$3;
} else {
var or__4126__auto____$4 = sci.impl.evaluator.eval(ctx,arg4);
if(cljs.core.truth_(or__4126__auto____$4)){
return or__4126__auto____$4;
} else {
var or__4126__auto____$5 = sci.impl.evaluator.eval(ctx,arg5);
if(cljs.core.truth_(or__4126__auto____$5)){
return or__4126__auto____$5;
} else {
return sci.impl.evaluator.eval(ctx,arg6);
}
}
}
}
}
}
}),expr);

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
return sci.impl.utils.ctx_fn((function (ctx){
var or__4126__auto__ = sci.impl.evaluator.eval(ctx,arg0);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = sci.impl.evaluator.eval(ctx,arg1);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = sci.impl.evaluator.eval(ctx,arg2);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = sci.impl.evaluator.eval(ctx,arg3);
if(cljs.core.truth_(or__4126__auto____$3)){
return or__4126__auto____$3;
} else {
var or__4126__auto____$4 = sci.impl.evaluator.eval(ctx,arg4);
if(cljs.core.truth_(or__4126__auto____$4)){
return or__4126__auto____$4;
} else {
var or__4126__auto____$5 = sci.impl.evaluator.eval(ctx,arg5);
if(cljs.core.truth_(or__4126__auto____$5)){
return or__4126__auto____$5;
} else {
var or__4126__auto____$6 = sci.impl.evaluator.eval(ctx,arg6);
if(cljs.core.truth_(or__4126__auto____$6)){
return or__4126__auto____$6;
} else {
return sci.impl.evaluator.eval(ctx,arg7);
}
}
}
}
}
}
}
}),expr);

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
return sci.impl.utils.ctx_fn((function (ctx){
var or__4126__auto__ = sci.impl.evaluator.eval(ctx,arg0);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = sci.impl.evaluator.eval(ctx,arg1);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = sci.impl.evaluator.eval(ctx,arg2);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = sci.impl.evaluator.eval(ctx,arg3);
if(cljs.core.truth_(or__4126__auto____$3)){
return or__4126__auto____$3;
} else {
var or__4126__auto____$4 = sci.impl.evaluator.eval(ctx,arg4);
if(cljs.core.truth_(or__4126__auto____$4)){
return or__4126__auto____$4;
} else {
var or__4126__auto____$5 = sci.impl.evaluator.eval(ctx,arg5);
if(cljs.core.truth_(or__4126__auto____$5)){
return or__4126__auto____$5;
} else {
var or__4126__auto____$6 = sci.impl.evaluator.eval(ctx,arg6);
if(cljs.core.truth_(or__4126__auto____$6)){
return or__4126__auto____$6;
} else {
var or__4126__auto____$7 = sci.impl.evaluator.eval(ctx,arg7);
if(cljs.core.truth_(or__4126__auto____$7)){
return or__4126__auto____$7;
} else {
return sci.impl.evaluator.eval(ctx,arg8);
}
}
}
}
}
}
}
}
}),expr);

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
return sci.impl.utils.ctx_fn((function (ctx){
var or__4126__auto__ = sci.impl.evaluator.eval(ctx,arg0);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = sci.impl.evaluator.eval(ctx,arg1);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = sci.impl.evaluator.eval(ctx,arg2);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = sci.impl.evaluator.eval(ctx,arg3);
if(cljs.core.truth_(or__4126__auto____$3)){
return or__4126__auto____$3;
} else {
var or__4126__auto____$4 = sci.impl.evaluator.eval(ctx,arg4);
if(cljs.core.truth_(or__4126__auto____$4)){
return or__4126__auto____$4;
} else {
var or__4126__auto____$5 = sci.impl.evaluator.eval(ctx,arg5);
if(cljs.core.truth_(or__4126__auto____$5)){
return or__4126__auto____$5;
} else {
var or__4126__auto____$6 = sci.impl.evaluator.eval(ctx,arg6);
if(cljs.core.truth_(or__4126__auto____$6)){
return or__4126__auto____$6;
} else {
var or__4126__auto____$7 = sci.impl.evaluator.eval(ctx,arg7);
if(cljs.core.truth_(or__4126__auto____$7)){
return or__4126__auto____$7;
} else {
var or__4126__auto____$8 = sci.impl.evaluator.eval(ctx,arg8);
if(cljs.core.truth_(or__4126__auto____$8)){
return or__4126__auto____$8;
} else {
return sci.impl.evaluator.eval(ctx,arg9);
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
return sci.impl.utils.ctx_fn((function (ctx){
var or__4126__auto__ = sci.impl.evaluator.eval(ctx,arg0);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = sci.impl.evaluator.eval(ctx,arg1);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = sci.impl.evaluator.eval(ctx,arg2);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = sci.impl.evaluator.eval(ctx,arg3);
if(cljs.core.truth_(or__4126__auto____$3)){
return or__4126__auto____$3;
} else {
var or__4126__auto____$4 = sci.impl.evaluator.eval(ctx,arg4);
if(cljs.core.truth_(or__4126__auto____$4)){
return or__4126__auto____$4;
} else {
var or__4126__auto____$5 = sci.impl.evaluator.eval(ctx,arg5);
if(cljs.core.truth_(or__4126__auto____$5)){
return or__4126__auto____$5;
} else {
var or__4126__auto____$6 = sci.impl.evaluator.eval(ctx,arg6);
if(cljs.core.truth_(or__4126__auto____$6)){
return or__4126__auto____$6;
} else {
var or__4126__auto____$7 = sci.impl.evaluator.eval(ctx,arg7);
if(cljs.core.truth_(or__4126__auto____$7)){
return or__4126__auto____$7;
} else {
var or__4126__auto____$8 = sci.impl.evaluator.eval(ctx,arg8);
if(cljs.core.truth_(or__4126__auto____$8)){
return or__4126__auto____$8;
} else {
var or__4126__auto____$9 = sci.impl.evaluator.eval(ctx,arg9);
if(cljs.core.truth_(or__4126__auto____$9)){
return or__4126__auto____$9;
} else {
return sci.impl.evaluator.eval(ctx,arg10);
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
return sci.impl.utils.ctx_fn((function (ctx){
var or__4126__auto__ = sci.impl.evaluator.eval(ctx,arg0);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = sci.impl.evaluator.eval(ctx,arg1);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = sci.impl.evaluator.eval(ctx,arg2);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = sci.impl.evaluator.eval(ctx,arg3);
if(cljs.core.truth_(or__4126__auto____$3)){
return or__4126__auto____$3;
} else {
var or__4126__auto____$4 = sci.impl.evaluator.eval(ctx,arg4);
if(cljs.core.truth_(or__4126__auto____$4)){
return or__4126__auto____$4;
} else {
var or__4126__auto____$5 = sci.impl.evaluator.eval(ctx,arg5);
if(cljs.core.truth_(or__4126__auto____$5)){
return or__4126__auto____$5;
} else {
var or__4126__auto____$6 = sci.impl.evaluator.eval(ctx,arg6);
if(cljs.core.truth_(or__4126__auto____$6)){
return or__4126__auto____$6;
} else {
var or__4126__auto____$7 = sci.impl.evaluator.eval(ctx,arg7);
if(cljs.core.truth_(or__4126__auto____$7)){
return or__4126__auto____$7;
} else {
var or__4126__auto____$8 = sci.impl.evaluator.eval(ctx,arg8);
if(cljs.core.truth_(or__4126__auto____$8)){
return or__4126__auto____$8;
} else {
var or__4126__auto____$9 = sci.impl.evaluator.eval(ctx,arg9);
if(cljs.core.truth_(or__4126__auto____$9)){
return or__4126__auto____$9;
} else {
var or__4126__auto____$10 = sci.impl.evaluator.eval(ctx,arg10);
if(cljs.core.truth_(or__4126__auto____$10)){
return or__4126__auto____$10;
} else {
return sci.impl.evaluator.eval(ctx,arg11);
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
return sci.impl.utils.ctx_fn((function (ctx){
var or__4126__auto__ = sci.impl.evaluator.eval(ctx,arg0);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = sci.impl.evaluator.eval(ctx,arg1);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = sci.impl.evaluator.eval(ctx,arg2);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = sci.impl.evaluator.eval(ctx,arg3);
if(cljs.core.truth_(or__4126__auto____$3)){
return or__4126__auto____$3;
} else {
var or__4126__auto____$4 = sci.impl.evaluator.eval(ctx,arg4);
if(cljs.core.truth_(or__4126__auto____$4)){
return or__4126__auto____$4;
} else {
var or__4126__auto____$5 = sci.impl.evaluator.eval(ctx,arg5);
if(cljs.core.truth_(or__4126__auto____$5)){
return or__4126__auto____$5;
} else {
var or__4126__auto____$6 = sci.impl.evaluator.eval(ctx,arg6);
if(cljs.core.truth_(or__4126__auto____$6)){
return or__4126__auto____$6;
} else {
var or__4126__auto____$7 = sci.impl.evaluator.eval(ctx,arg7);
if(cljs.core.truth_(or__4126__auto____$7)){
return or__4126__auto____$7;
} else {
var or__4126__auto____$8 = sci.impl.evaluator.eval(ctx,arg8);
if(cljs.core.truth_(or__4126__auto____$8)){
return or__4126__auto____$8;
} else {
var or__4126__auto____$9 = sci.impl.evaluator.eval(ctx,arg9);
if(cljs.core.truth_(or__4126__auto____$9)){
return or__4126__auto____$9;
} else {
var or__4126__auto____$10 = sci.impl.evaluator.eval(ctx,arg10);
if(cljs.core.truth_(or__4126__auto____$10)){
return or__4126__auto____$10;
} else {
var or__4126__auto____$11 = sci.impl.evaluator.eval(ctx,arg11);
if(cljs.core.truth_(or__4126__auto____$11)){
return or__4126__auto____$11;
} else {
return sci.impl.evaluator.eval(ctx,arg12);
}
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
return sci.impl.utils.ctx_fn((function (ctx){
var or__4126__auto__ = sci.impl.evaluator.eval(ctx,arg0);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = sci.impl.evaluator.eval(ctx,arg1);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = sci.impl.evaluator.eval(ctx,arg2);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = sci.impl.evaluator.eval(ctx,arg3);
if(cljs.core.truth_(or__4126__auto____$3)){
return or__4126__auto____$3;
} else {
var or__4126__auto____$4 = sci.impl.evaluator.eval(ctx,arg4);
if(cljs.core.truth_(or__4126__auto____$4)){
return or__4126__auto____$4;
} else {
var or__4126__auto____$5 = sci.impl.evaluator.eval(ctx,arg5);
if(cljs.core.truth_(or__4126__auto____$5)){
return or__4126__auto____$5;
} else {
var or__4126__auto____$6 = sci.impl.evaluator.eval(ctx,arg6);
if(cljs.core.truth_(or__4126__auto____$6)){
return or__4126__auto____$6;
} else {
var or__4126__auto____$7 = sci.impl.evaluator.eval(ctx,arg7);
if(cljs.core.truth_(or__4126__auto____$7)){
return or__4126__auto____$7;
} else {
var or__4126__auto____$8 = sci.impl.evaluator.eval(ctx,arg8);
if(cljs.core.truth_(or__4126__auto____$8)){
return or__4126__auto____$8;
} else {
var or__4126__auto____$9 = sci.impl.evaluator.eval(ctx,arg9);
if(cljs.core.truth_(or__4126__auto____$9)){
return or__4126__auto____$9;
} else {
var or__4126__auto____$10 = sci.impl.evaluator.eval(ctx,arg10);
if(cljs.core.truth_(or__4126__auto____$10)){
return or__4126__auto____$10;
} else {
var or__4126__auto____$11 = sci.impl.evaluator.eval(ctx,arg11);
if(cljs.core.truth_(or__4126__auto____$11)){
return or__4126__auto____$11;
} else {
var or__4126__auto____$12 = sci.impl.evaluator.eval(ctx,arg12);
if(cljs.core.truth_(or__4126__auto____$12)){
return or__4126__auto____$12;
} else {
return sci.impl.evaluator.eval(ctx,arg13);
}
}
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
return sci.impl.utils.ctx_fn((function (ctx){
var or__4126__auto__ = sci.impl.evaluator.eval(ctx,arg0);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = sci.impl.evaluator.eval(ctx,arg1);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = sci.impl.evaluator.eval(ctx,arg2);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = sci.impl.evaluator.eval(ctx,arg3);
if(cljs.core.truth_(or__4126__auto____$3)){
return or__4126__auto____$3;
} else {
var or__4126__auto____$4 = sci.impl.evaluator.eval(ctx,arg4);
if(cljs.core.truth_(or__4126__auto____$4)){
return or__4126__auto____$4;
} else {
var or__4126__auto____$5 = sci.impl.evaluator.eval(ctx,arg5);
if(cljs.core.truth_(or__4126__auto____$5)){
return or__4126__auto____$5;
} else {
var or__4126__auto____$6 = sci.impl.evaluator.eval(ctx,arg6);
if(cljs.core.truth_(or__4126__auto____$6)){
return or__4126__auto____$6;
} else {
var or__4126__auto____$7 = sci.impl.evaluator.eval(ctx,arg7);
if(cljs.core.truth_(or__4126__auto____$7)){
return or__4126__auto____$7;
} else {
var or__4126__auto____$8 = sci.impl.evaluator.eval(ctx,arg8);
if(cljs.core.truth_(or__4126__auto____$8)){
return or__4126__auto____$8;
} else {
var or__4126__auto____$9 = sci.impl.evaluator.eval(ctx,arg9);
if(cljs.core.truth_(or__4126__auto____$9)){
return or__4126__auto____$9;
} else {
var or__4126__auto____$10 = sci.impl.evaluator.eval(ctx,arg10);
if(cljs.core.truth_(or__4126__auto____$10)){
return or__4126__auto____$10;
} else {
var or__4126__auto____$11 = sci.impl.evaluator.eval(ctx,arg11);
if(cljs.core.truth_(or__4126__auto____$11)){
return or__4126__auto____$11;
} else {
var or__4126__auto____$12 = sci.impl.evaluator.eval(ctx,arg12);
if(cljs.core.truth_(or__4126__auto____$12)){
return or__4126__auto____$12;
} else {
var or__4126__auto____$13 = sci.impl.evaluator.eval(ctx,arg13);
if(cljs.core.truth_(or__4126__auto____$13)){
return or__4126__auto____$13;
} else {
return sci.impl.evaluator.eval(ctx,arg14);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
return sci.impl.utils.ctx_fn((function (ctx){
var or__4126__auto__ = sci.impl.evaluator.eval(ctx,arg0);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = sci.impl.evaluator.eval(ctx,arg1);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = sci.impl.evaluator.eval(ctx,arg2);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = sci.impl.evaluator.eval(ctx,arg3);
if(cljs.core.truth_(or__4126__auto____$3)){
return or__4126__auto____$3;
} else {
var or__4126__auto____$4 = sci.impl.evaluator.eval(ctx,arg4);
if(cljs.core.truth_(or__4126__auto____$4)){
return or__4126__auto____$4;
} else {
var or__4126__auto____$5 = sci.impl.evaluator.eval(ctx,arg5);
if(cljs.core.truth_(or__4126__auto____$5)){
return or__4126__auto____$5;
} else {
var or__4126__auto____$6 = sci.impl.evaluator.eval(ctx,arg6);
if(cljs.core.truth_(or__4126__auto____$6)){
return or__4126__auto____$6;
} else {
var or__4126__auto____$7 = sci.impl.evaluator.eval(ctx,arg7);
if(cljs.core.truth_(or__4126__auto____$7)){
return or__4126__auto____$7;
} else {
var or__4126__auto____$8 = sci.impl.evaluator.eval(ctx,arg8);
if(cljs.core.truth_(or__4126__auto____$8)){
return or__4126__auto____$8;
} else {
var or__4126__auto____$9 = sci.impl.evaluator.eval(ctx,arg9);
if(cljs.core.truth_(or__4126__auto____$9)){
return or__4126__auto____$9;
} else {
var or__4126__auto____$10 = sci.impl.evaluator.eval(ctx,arg10);
if(cljs.core.truth_(or__4126__auto____$10)){
return or__4126__auto____$10;
} else {
var or__4126__auto____$11 = sci.impl.evaluator.eval(ctx,arg11);
if(cljs.core.truth_(or__4126__auto____$11)){
return or__4126__auto____$11;
} else {
var or__4126__auto____$12 = sci.impl.evaluator.eval(ctx,arg12);
if(cljs.core.truth_(or__4126__auto____$12)){
return or__4126__auto____$12;
} else {
var or__4126__auto____$13 = sci.impl.evaluator.eval(ctx,arg13);
if(cljs.core.truth_(or__4126__auto____$13)){
return or__4126__auto____$13;
} else {
var or__4126__auto____$14 = sci.impl.evaluator.eval(ctx,arg14);
if(cljs.core.truth_(or__4126__auto____$14)){
return or__4126__auto____$14;
} else {
return sci.impl.evaluator.eval(ctx,arg15);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
return sci.impl.utils.ctx_fn((function (ctx){
var or__4126__auto__ = sci.impl.evaluator.eval(ctx,arg0);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = sci.impl.evaluator.eval(ctx,arg1);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = sci.impl.evaluator.eval(ctx,arg2);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = sci.impl.evaluator.eval(ctx,arg3);
if(cljs.core.truth_(or__4126__auto____$3)){
return or__4126__auto____$3;
} else {
var or__4126__auto____$4 = sci.impl.evaluator.eval(ctx,arg4);
if(cljs.core.truth_(or__4126__auto____$4)){
return or__4126__auto____$4;
} else {
var or__4126__auto____$5 = sci.impl.evaluator.eval(ctx,arg5);
if(cljs.core.truth_(or__4126__auto____$5)){
return or__4126__auto____$5;
} else {
var or__4126__auto____$6 = sci.impl.evaluator.eval(ctx,arg6);
if(cljs.core.truth_(or__4126__auto____$6)){
return or__4126__auto____$6;
} else {
var or__4126__auto____$7 = sci.impl.evaluator.eval(ctx,arg7);
if(cljs.core.truth_(or__4126__auto____$7)){
return or__4126__auto____$7;
} else {
var or__4126__auto____$8 = sci.impl.evaluator.eval(ctx,arg8);
if(cljs.core.truth_(or__4126__auto____$8)){
return or__4126__auto____$8;
} else {
var or__4126__auto____$9 = sci.impl.evaluator.eval(ctx,arg9);
if(cljs.core.truth_(or__4126__auto____$9)){
return or__4126__auto____$9;
} else {
var or__4126__auto____$10 = sci.impl.evaluator.eval(ctx,arg10);
if(cljs.core.truth_(or__4126__auto____$10)){
return or__4126__auto____$10;
} else {
var or__4126__auto____$11 = sci.impl.evaluator.eval(ctx,arg11);
if(cljs.core.truth_(or__4126__auto____$11)){
return or__4126__auto____$11;
} else {
var or__4126__auto____$12 = sci.impl.evaluator.eval(ctx,arg12);
if(cljs.core.truth_(or__4126__auto____$12)){
return or__4126__auto____$12;
} else {
var or__4126__auto____$13 = sci.impl.evaluator.eval(ctx,arg13);
if(cljs.core.truth_(or__4126__auto____$13)){
return or__4126__auto____$13;
} else {
var or__4126__auto____$14 = sci.impl.evaluator.eval(ctx,arg14);
if(cljs.core.truth_(or__4126__auto____$14)){
return or__4126__auto____$14;
} else {
var or__4126__auto____$15 = sci.impl.evaluator.eval(ctx,arg15);
if(cljs.core.truth_(or__4126__auto____$15)){
return or__4126__auto____$15;
} else {
return sci.impl.evaluator.eval(ctx,arg16);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
return sci.impl.utils.ctx_fn((function (ctx){
var or__4126__auto__ = sci.impl.evaluator.eval(ctx,arg0);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = sci.impl.evaluator.eval(ctx,arg1);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = sci.impl.evaluator.eval(ctx,arg2);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = sci.impl.evaluator.eval(ctx,arg3);
if(cljs.core.truth_(or__4126__auto____$3)){
return or__4126__auto____$3;
} else {
var or__4126__auto____$4 = sci.impl.evaluator.eval(ctx,arg4);
if(cljs.core.truth_(or__4126__auto____$4)){
return or__4126__auto____$4;
} else {
var or__4126__auto____$5 = sci.impl.evaluator.eval(ctx,arg5);
if(cljs.core.truth_(or__4126__auto____$5)){
return or__4126__auto____$5;
} else {
var or__4126__auto____$6 = sci.impl.evaluator.eval(ctx,arg6);
if(cljs.core.truth_(or__4126__auto____$6)){
return or__4126__auto____$6;
} else {
var or__4126__auto____$7 = sci.impl.evaluator.eval(ctx,arg7);
if(cljs.core.truth_(or__4126__auto____$7)){
return or__4126__auto____$7;
} else {
var or__4126__auto____$8 = sci.impl.evaluator.eval(ctx,arg8);
if(cljs.core.truth_(or__4126__auto____$8)){
return or__4126__auto____$8;
} else {
var or__4126__auto____$9 = sci.impl.evaluator.eval(ctx,arg9);
if(cljs.core.truth_(or__4126__auto____$9)){
return or__4126__auto____$9;
} else {
var or__4126__auto____$10 = sci.impl.evaluator.eval(ctx,arg10);
if(cljs.core.truth_(or__4126__auto____$10)){
return or__4126__auto____$10;
} else {
var or__4126__auto____$11 = sci.impl.evaluator.eval(ctx,arg11);
if(cljs.core.truth_(or__4126__auto____$11)){
return or__4126__auto____$11;
} else {
var or__4126__auto____$12 = sci.impl.evaluator.eval(ctx,arg12);
if(cljs.core.truth_(or__4126__auto____$12)){
return or__4126__auto____$12;
} else {
var or__4126__auto____$13 = sci.impl.evaluator.eval(ctx,arg13);
if(cljs.core.truth_(or__4126__auto____$13)){
return or__4126__auto____$13;
} else {
var or__4126__auto____$14 = sci.impl.evaluator.eval(ctx,arg14);
if(cljs.core.truth_(or__4126__auto____$14)){
return or__4126__auto____$14;
} else {
var or__4126__auto____$15 = sci.impl.evaluator.eval(ctx,arg15);
if(cljs.core.truth_(or__4126__auto____$15)){
return or__4126__auto____$15;
} else {
var or__4126__auto____$16 = sci.impl.evaluator.eval(ctx,arg16);
if(cljs.core.truth_(or__4126__auto____$16)){
return or__4126__auto____$16;
} else {
return sci.impl.evaluator.eval(ctx,arg17);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
return sci.impl.utils.ctx_fn((function (ctx){
var or__4126__auto__ = sci.impl.evaluator.eval(ctx,arg0);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = sci.impl.evaluator.eval(ctx,arg1);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = sci.impl.evaluator.eval(ctx,arg2);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = sci.impl.evaluator.eval(ctx,arg3);
if(cljs.core.truth_(or__4126__auto____$3)){
return or__4126__auto____$3;
} else {
var or__4126__auto____$4 = sci.impl.evaluator.eval(ctx,arg4);
if(cljs.core.truth_(or__4126__auto____$4)){
return or__4126__auto____$4;
} else {
var or__4126__auto____$5 = sci.impl.evaluator.eval(ctx,arg5);
if(cljs.core.truth_(or__4126__auto____$5)){
return or__4126__auto____$5;
} else {
var or__4126__auto____$6 = sci.impl.evaluator.eval(ctx,arg6);
if(cljs.core.truth_(or__4126__auto____$6)){
return or__4126__auto____$6;
} else {
var or__4126__auto____$7 = sci.impl.evaluator.eval(ctx,arg7);
if(cljs.core.truth_(or__4126__auto____$7)){
return or__4126__auto____$7;
} else {
var or__4126__auto____$8 = sci.impl.evaluator.eval(ctx,arg8);
if(cljs.core.truth_(or__4126__auto____$8)){
return or__4126__auto____$8;
} else {
var or__4126__auto____$9 = sci.impl.evaluator.eval(ctx,arg9);
if(cljs.core.truth_(or__4126__auto____$9)){
return or__4126__auto____$9;
} else {
var or__4126__auto____$10 = sci.impl.evaluator.eval(ctx,arg10);
if(cljs.core.truth_(or__4126__auto____$10)){
return or__4126__auto____$10;
} else {
var or__4126__auto____$11 = sci.impl.evaluator.eval(ctx,arg11);
if(cljs.core.truth_(or__4126__auto____$11)){
return or__4126__auto____$11;
} else {
var or__4126__auto____$12 = sci.impl.evaluator.eval(ctx,arg12);
if(cljs.core.truth_(or__4126__auto____$12)){
return or__4126__auto____$12;
} else {
var or__4126__auto____$13 = sci.impl.evaluator.eval(ctx,arg13);
if(cljs.core.truth_(or__4126__auto____$13)){
return or__4126__auto____$13;
} else {
var or__4126__auto____$14 = sci.impl.evaluator.eval(ctx,arg14);
if(cljs.core.truth_(or__4126__auto____$14)){
return or__4126__auto____$14;
} else {
var or__4126__auto____$15 = sci.impl.evaluator.eval(ctx,arg15);
if(cljs.core.truth_(or__4126__auto____$15)){
return or__4126__auto____$15;
} else {
var or__4126__auto____$16 = sci.impl.evaluator.eval(ctx,arg16);
if(cljs.core.truth_(or__4126__auto____$16)){
return or__4126__auto____$16;
} else {
var or__4126__auto____$17 = sci.impl.evaluator.eval(ctx,arg17);
if(cljs.core.truth_(or__4126__auto____$17)){
return or__4126__auto____$17;
} else {
return sci.impl.evaluator.eval(ctx,arg18);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
default:
return sci.impl.utils.ctx_fn((function (ctx){
return sci.impl.evaluator.eval_or(ctx,analyzed_children);
}),expr);

}
});
sci.impl.analyzer.return_and = (function sci$impl$analyzer$return_and(expr,analyzed_children){
var G__70450 = cljs.core.count(analyzed_children);
switch (G__70450) {
case (0):
return null;

break;
case (1):
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return sci.impl.utils.ctx_fn((function (ctx){
var and__4115__auto__ = sci.impl.evaluator.eval(ctx,arg0);
if(cljs.core.truth_(and__4115__auto__)){
return sci.impl.evaluator.eval(ctx,arg1);
} else {
return and__4115__auto__;
}
}),expr);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return sci.impl.utils.ctx_fn((function (ctx){
var and__4115__auto__ = sci.impl.evaluator.eval(ctx,arg0);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = sci.impl.evaluator.eval(ctx,arg1);
if(cljs.core.truth_(and__4115__auto____$1)){
return sci.impl.evaluator.eval(ctx,arg2);
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
}),expr);

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return sci.impl.utils.ctx_fn((function (ctx){
var and__4115__auto__ = sci.impl.evaluator.eval(ctx,arg0);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = sci.impl.evaluator.eval(ctx,arg1);
if(cljs.core.truth_(and__4115__auto____$1)){
var and__4115__auto____$2 = sci.impl.evaluator.eval(ctx,arg2);
if(cljs.core.truth_(and__4115__auto____$2)){
return sci.impl.evaluator.eval(ctx,arg3);
} else {
return and__4115__auto____$2;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
}),expr);

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return sci.impl.utils.ctx_fn((function (ctx){
var and__4115__auto__ = sci.impl.evaluator.eval(ctx,arg0);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = sci.impl.evaluator.eval(ctx,arg1);
if(cljs.core.truth_(and__4115__auto____$1)){
var and__4115__auto____$2 = sci.impl.evaluator.eval(ctx,arg2);
if(cljs.core.truth_(and__4115__auto____$2)){
var and__4115__auto____$3 = sci.impl.evaluator.eval(ctx,arg3);
if(cljs.core.truth_(and__4115__auto____$3)){
return sci.impl.evaluator.eval(ctx,arg4);
} else {
return and__4115__auto____$3;
}
} else {
return and__4115__auto____$2;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
}),expr);

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
return sci.impl.utils.ctx_fn((function (ctx){
var and__4115__auto__ = sci.impl.evaluator.eval(ctx,arg0);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = sci.impl.evaluator.eval(ctx,arg1);
if(cljs.core.truth_(and__4115__auto____$1)){
var and__4115__auto____$2 = sci.impl.evaluator.eval(ctx,arg2);
if(cljs.core.truth_(and__4115__auto____$2)){
var and__4115__auto____$3 = sci.impl.evaluator.eval(ctx,arg3);
if(cljs.core.truth_(and__4115__auto____$3)){
var and__4115__auto____$4 = sci.impl.evaluator.eval(ctx,arg4);
if(cljs.core.truth_(and__4115__auto____$4)){
return sci.impl.evaluator.eval(ctx,arg5);
} else {
return and__4115__auto____$4;
}
} else {
return and__4115__auto____$3;
}
} else {
return and__4115__auto____$2;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
}),expr);

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
return sci.impl.utils.ctx_fn((function (ctx){
var and__4115__auto__ = sci.impl.evaluator.eval(ctx,arg0);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = sci.impl.evaluator.eval(ctx,arg1);
if(cljs.core.truth_(and__4115__auto____$1)){
var and__4115__auto____$2 = sci.impl.evaluator.eval(ctx,arg2);
if(cljs.core.truth_(and__4115__auto____$2)){
var and__4115__auto____$3 = sci.impl.evaluator.eval(ctx,arg3);
if(cljs.core.truth_(and__4115__auto____$3)){
var and__4115__auto____$4 = sci.impl.evaluator.eval(ctx,arg4);
if(cljs.core.truth_(and__4115__auto____$4)){
var and__4115__auto____$5 = sci.impl.evaluator.eval(ctx,arg5);
if(cljs.core.truth_(and__4115__auto____$5)){
return sci.impl.evaluator.eval(ctx,arg6);
} else {
return and__4115__auto____$5;
}
} else {
return and__4115__auto____$4;
}
} else {
return and__4115__auto____$3;
}
} else {
return and__4115__auto____$2;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
}),expr);

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
return sci.impl.utils.ctx_fn((function (ctx){
var and__4115__auto__ = sci.impl.evaluator.eval(ctx,arg0);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = sci.impl.evaluator.eval(ctx,arg1);
if(cljs.core.truth_(and__4115__auto____$1)){
var and__4115__auto____$2 = sci.impl.evaluator.eval(ctx,arg2);
if(cljs.core.truth_(and__4115__auto____$2)){
var and__4115__auto____$3 = sci.impl.evaluator.eval(ctx,arg3);
if(cljs.core.truth_(and__4115__auto____$3)){
var and__4115__auto____$4 = sci.impl.evaluator.eval(ctx,arg4);
if(cljs.core.truth_(and__4115__auto____$4)){
var and__4115__auto____$5 = sci.impl.evaluator.eval(ctx,arg5);
if(cljs.core.truth_(and__4115__auto____$5)){
var and__4115__auto____$6 = sci.impl.evaluator.eval(ctx,arg6);
if(cljs.core.truth_(and__4115__auto____$6)){
return sci.impl.evaluator.eval(ctx,arg7);
} else {
return and__4115__auto____$6;
}
} else {
return and__4115__auto____$5;
}
} else {
return and__4115__auto____$4;
}
} else {
return and__4115__auto____$3;
}
} else {
return and__4115__auto____$2;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
}),expr);

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
return sci.impl.utils.ctx_fn((function (ctx){
var and__4115__auto__ = sci.impl.evaluator.eval(ctx,arg0);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = sci.impl.evaluator.eval(ctx,arg1);
if(cljs.core.truth_(and__4115__auto____$1)){
var and__4115__auto____$2 = sci.impl.evaluator.eval(ctx,arg2);
if(cljs.core.truth_(and__4115__auto____$2)){
var and__4115__auto____$3 = sci.impl.evaluator.eval(ctx,arg3);
if(cljs.core.truth_(and__4115__auto____$3)){
var and__4115__auto____$4 = sci.impl.evaluator.eval(ctx,arg4);
if(cljs.core.truth_(and__4115__auto____$4)){
var and__4115__auto____$5 = sci.impl.evaluator.eval(ctx,arg5);
if(cljs.core.truth_(and__4115__auto____$5)){
var and__4115__auto____$6 = sci.impl.evaluator.eval(ctx,arg6);
if(cljs.core.truth_(and__4115__auto____$6)){
var and__4115__auto____$7 = sci.impl.evaluator.eval(ctx,arg7);
if(cljs.core.truth_(and__4115__auto____$7)){
return sci.impl.evaluator.eval(ctx,arg8);
} else {
return and__4115__auto____$7;
}
} else {
return and__4115__auto____$6;
}
} else {
return and__4115__auto____$5;
}
} else {
return and__4115__auto____$4;
}
} else {
return and__4115__auto____$3;
}
} else {
return and__4115__auto____$2;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
}),expr);

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
return sci.impl.utils.ctx_fn((function (ctx){
var and__4115__auto__ = sci.impl.evaluator.eval(ctx,arg0);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = sci.impl.evaluator.eval(ctx,arg1);
if(cljs.core.truth_(and__4115__auto____$1)){
var and__4115__auto____$2 = sci.impl.evaluator.eval(ctx,arg2);
if(cljs.core.truth_(and__4115__auto____$2)){
var and__4115__auto____$3 = sci.impl.evaluator.eval(ctx,arg3);
if(cljs.core.truth_(and__4115__auto____$3)){
var and__4115__auto____$4 = sci.impl.evaluator.eval(ctx,arg4);
if(cljs.core.truth_(and__4115__auto____$4)){
var and__4115__auto____$5 = sci.impl.evaluator.eval(ctx,arg5);
if(cljs.core.truth_(and__4115__auto____$5)){
var and__4115__auto____$6 = sci.impl.evaluator.eval(ctx,arg6);
if(cljs.core.truth_(and__4115__auto____$6)){
var and__4115__auto____$7 = sci.impl.evaluator.eval(ctx,arg7);
if(cljs.core.truth_(and__4115__auto____$7)){
var and__4115__auto____$8 = sci.impl.evaluator.eval(ctx,arg8);
if(cljs.core.truth_(and__4115__auto____$8)){
return sci.impl.evaluator.eval(ctx,arg9);
} else {
return and__4115__auto____$8;
}
} else {
return and__4115__auto____$7;
}
} else {
return and__4115__auto____$6;
}
} else {
return and__4115__auto____$5;
}
} else {
return and__4115__auto____$4;
}
} else {
return and__4115__auto____$3;
}
} else {
return and__4115__auto____$2;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
}),expr);

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
return sci.impl.utils.ctx_fn((function (ctx){
var and__4115__auto__ = sci.impl.evaluator.eval(ctx,arg0);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = sci.impl.evaluator.eval(ctx,arg1);
if(cljs.core.truth_(and__4115__auto____$1)){
var and__4115__auto____$2 = sci.impl.evaluator.eval(ctx,arg2);
if(cljs.core.truth_(and__4115__auto____$2)){
var and__4115__auto____$3 = sci.impl.evaluator.eval(ctx,arg3);
if(cljs.core.truth_(and__4115__auto____$3)){
var and__4115__auto____$4 = sci.impl.evaluator.eval(ctx,arg4);
if(cljs.core.truth_(and__4115__auto____$4)){
var and__4115__auto____$5 = sci.impl.evaluator.eval(ctx,arg5);
if(cljs.core.truth_(and__4115__auto____$5)){
var and__4115__auto____$6 = sci.impl.evaluator.eval(ctx,arg6);
if(cljs.core.truth_(and__4115__auto____$6)){
var and__4115__auto____$7 = sci.impl.evaluator.eval(ctx,arg7);
if(cljs.core.truth_(and__4115__auto____$7)){
var and__4115__auto____$8 = sci.impl.evaluator.eval(ctx,arg8);
if(cljs.core.truth_(and__4115__auto____$8)){
var and__4115__auto____$9 = sci.impl.evaluator.eval(ctx,arg9);
if(cljs.core.truth_(and__4115__auto____$9)){
return sci.impl.evaluator.eval(ctx,arg10);
} else {
return and__4115__auto____$9;
}
} else {
return and__4115__auto____$8;
}
} else {
return and__4115__auto____$7;
}
} else {
return and__4115__auto____$6;
}
} else {
return and__4115__auto____$5;
}
} else {
return and__4115__auto____$4;
}
} else {
return and__4115__auto____$3;
}
} else {
return and__4115__auto____$2;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
}),expr);

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
return sci.impl.utils.ctx_fn((function (ctx){
var and__4115__auto__ = sci.impl.evaluator.eval(ctx,arg0);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = sci.impl.evaluator.eval(ctx,arg1);
if(cljs.core.truth_(and__4115__auto____$1)){
var and__4115__auto____$2 = sci.impl.evaluator.eval(ctx,arg2);
if(cljs.core.truth_(and__4115__auto____$2)){
var and__4115__auto____$3 = sci.impl.evaluator.eval(ctx,arg3);
if(cljs.core.truth_(and__4115__auto____$3)){
var and__4115__auto____$4 = sci.impl.evaluator.eval(ctx,arg4);
if(cljs.core.truth_(and__4115__auto____$4)){
var and__4115__auto____$5 = sci.impl.evaluator.eval(ctx,arg5);
if(cljs.core.truth_(and__4115__auto____$5)){
var and__4115__auto____$6 = sci.impl.evaluator.eval(ctx,arg6);
if(cljs.core.truth_(and__4115__auto____$6)){
var and__4115__auto____$7 = sci.impl.evaluator.eval(ctx,arg7);
if(cljs.core.truth_(and__4115__auto____$7)){
var and__4115__auto____$8 = sci.impl.evaluator.eval(ctx,arg8);
if(cljs.core.truth_(and__4115__auto____$8)){
var and__4115__auto____$9 = sci.impl.evaluator.eval(ctx,arg9);
if(cljs.core.truth_(and__4115__auto____$9)){
var and__4115__auto____$10 = sci.impl.evaluator.eval(ctx,arg10);
if(cljs.core.truth_(and__4115__auto____$10)){
return sci.impl.evaluator.eval(ctx,arg11);
} else {
return and__4115__auto____$10;
}
} else {
return and__4115__auto____$9;
}
} else {
return and__4115__auto____$8;
}
} else {
return and__4115__auto____$7;
}
} else {
return and__4115__auto____$6;
}
} else {
return and__4115__auto____$5;
}
} else {
return and__4115__auto____$4;
}
} else {
return and__4115__auto____$3;
}
} else {
return and__4115__auto____$2;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
}),expr);

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
return sci.impl.utils.ctx_fn((function (ctx){
var and__4115__auto__ = sci.impl.evaluator.eval(ctx,arg0);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = sci.impl.evaluator.eval(ctx,arg1);
if(cljs.core.truth_(and__4115__auto____$1)){
var and__4115__auto____$2 = sci.impl.evaluator.eval(ctx,arg2);
if(cljs.core.truth_(and__4115__auto____$2)){
var and__4115__auto____$3 = sci.impl.evaluator.eval(ctx,arg3);
if(cljs.core.truth_(and__4115__auto____$3)){
var and__4115__auto____$4 = sci.impl.evaluator.eval(ctx,arg4);
if(cljs.core.truth_(and__4115__auto____$4)){
var and__4115__auto____$5 = sci.impl.evaluator.eval(ctx,arg5);
if(cljs.core.truth_(and__4115__auto____$5)){
var and__4115__auto____$6 = sci.impl.evaluator.eval(ctx,arg6);
if(cljs.core.truth_(and__4115__auto____$6)){
var and__4115__auto____$7 = sci.impl.evaluator.eval(ctx,arg7);
if(cljs.core.truth_(and__4115__auto____$7)){
var and__4115__auto____$8 = sci.impl.evaluator.eval(ctx,arg8);
if(cljs.core.truth_(and__4115__auto____$8)){
var and__4115__auto____$9 = sci.impl.evaluator.eval(ctx,arg9);
if(cljs.core.truth_(and__4115__auto____$9)){
var and__4115__auto____$10 = sci.impl.evaluator.eval(ctx,arg10);
if(cljs.core.truth_(and__4115__auto____$10)){
var and__4115__auto____$11 = sci.impl.evaluator.eval(ctx,arg11);
if(cljs.core.truth_(and__4115__auto____$11)){
return sci.impl.evaluator.eval(ctx,arg12);
} else {
return and__4115__auto____$11;
}
} else {
return and__4115__auto____$10;
}
} else {
return and__4115__auto____$9;
}
} else {
return and__4115__auto____$8;
}
} else {
return and__4115__auto____$7;
}
} else {
return and__4115__auto____$6;
}
} else {
return and__4115__auto____$5;
}
} else {
return and__4115__auto____$4;
}
} else {
return and__4115__auto____$3;
}
} else {
return and__4115__auto____$2;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
}),expr);

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
return sci.impl.utils.ctx_fn((function (ctx){
var and__4115__auto__ = sci.impl.evaluator.eval(ctx,arg0);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = sci.impl.evaluator.eval(ctx,arg1);
if(cljs.core.truth_(and__4115__auto____$1)){
var and__4115__auto____$2 = sci.impl.evaluator.eval(ctx,arg2);
if(cljs.core.truth_(and__4115__auto____$2)){
var and__4115__auto____$3 = sci.impl.evaluator.eval(ctx,arg3);
if(cljs.core.truth_(and__4115__auto____$3)){
var and__4115__auto____$4 = sci.impl.evaluator.eval(ctx,arg4);
if(cljs.core.truth_(and__4115__auto____$4)){
var and__4115__auto____$5 = sci.impl.evaluator.eval(ctx,arg5);
if(cljs.core.truth_(and__4115__auto____$5)){
var and__4115__auto____$6 = sci.impl.evaluator.eval(ctx,arg6);
if(cljs.core.truth_(and__4115__auto____$6)){
var and__4115__auto____$7 = sci.impl.evaluator.eval(ctx,arg7);
if(cljs.core.truth_(and__4115__auto____$7)){
var and__4115__auto____$8 = sci.impl.evaluator.eval(ctx,arg8);
if(cljs.core.truth_(and__4115__auto____$8)){
var and__4115__auto____$9 = sci.impl.evaluator.eval(ctx,arg9);
if(cljs.core.truth_(and__4115__auto____$9)){
var and__4115__auto____$10 = sci.impl.evaluator.eval(ctx,arg10);
if(cljs.core.truth_(and__4115__auto____$10)){
var and__4115__auto____$11 = sci.impl.evaluator.eval(ctx,arg11);
if(cljs.core.truth_(and__4115__auto____$11)){
var and__4115__auto____$12 = sci.impl.evaluator.eval(ctx,arg12);
if(cljs.core.truth_(and__4115__auto____$12)){
return sci.impl.evaluator.eval(ctx,arg13);
} else {
return and__4115__auto____$12;
}
} else {
return and__4115__auto____$11;
}
} else {
return and__4115__auto____$10;
}
} else {
return and__4115__auto____$9;
}
} else {
return and__4115__auto____$8;
}
} else {
return and__4115__auto____$7;
}
} else {
return and__4115__auto____$6;
}
} else {
return and__4115__auto____$5;
}
} else {
return and__4115__auto____$4;
}
} else {
return and__4115__auto____$3;
}
} else {
return and__4115__auto____$2;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
}),expr);

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
return sci.impl.utils.ctx_fn((function (ctx){
var and__4115__auto__ = sci.impl.evaluator.eval(ctx,arg0);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = sci.impl.evaluator.eval(ctx,arg1);
if(cljs.core.truth_(and__4115__auto____$1)){
var and__4115__auto____$2 = sci.impl.evaluator.eval(ctx,arg2);
if(cljs.core.truth_(and__4115__auto____$2)){
var and__4115__auto____$3 = sci.impl.evaluator.eval(ctx,arg3);
if(cljs.core.truth_(and__4115__auto____$3)){
var and__4115__auto____$4 = sci.impl.evaluator.eval(ctx,arg4);
if(cljs.core.truth_(and__4115__auto____$4)){
var and__4115__auto____$5 = sci.impl.evaluator.eval(ctx,arg5);
if(cljs.core.truth_(and__4115__auto____$5)){
var and__4115__auto____$6 = sci.impl.evaluator.eval(ctx,arg6);
if(cljs.core.truth_(and__4115__auto____$6)){
var and__4115__auto____$7 = sci.impl.evaluator.eval(ctx,arg7);
if(cljs.core.truth_(and__4115__auto____$7)){
var and__4115__auto____$8 = sci.impl.evaluator.eval(ctx,arg8);
if(cljs.core.truth_(and__4115__auto____$8)){
var and__4115__auto____$9 = sci.impl.evaluator.eval(ctx,arg9);
if(cljs.core.truth_(and__4115__auto____$9)){
var and__4115__auto____$10 = sci.impl.evaluator.eval(ctx,arg10);
if(cljs.core.truth_(and__4115__auto____$10)){
var and__4115__auto____$11 = sci.impl.evaluator.eval(ctx,arg11);
if(cljs.core.truth_(and__4115__auto____$11)){
var and__4115__auto____$12 = sci.impl.evaluator.eval(ctx,arg12);
if(cljs.core.truth_(and__4115__auto____$12)){
var and__4115__auto____$13 = sci.impl.evaluator.eval(ctx,arg13);
if(cljs.core.truth_(and__4115__auto____$13)){
return sci.impl.evaluator.eval(ctx,arg14);
} else {
return and__4115__auto____$13;
}
} else {
return and__4115__auto____$12;
}
} else {
return and__4115__auto____$11;
}
} else {
return and__4115__auto____$10;
}
} else {
return and__4115__auto____$9;
}
} else {
return and__4115__auto____$8;
}
} else {
return and__4115__auto____$7;
}
} else {
return and__4115__auto____$6;
}
} else {
return and__4115__auto____$5;
}
} else {
return and__4115__auto____$4;
}
} else {
return and__4115__auto____$3;
}
} else {
return and__4115__auto____$2;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
}),expr);

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
return sci.impl.utils.ctx_fn((function (ctx){
var and__4115__auto__ = sci.impl.evaluator.eval(ctx,arg0);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = sci.impl.evaluator.eval(ctx,arg1);
if(cljs.core.truth_(and__4115__auto____$1)){
var and__4115__auto____$2 = sci.impl.evaluator.eval(ctx,arg2);
if(cljs.core.truth_(and__4115__auto____$2)){
var and__4115__auto____$3 = sci.impl.evaluator.eval(ctx,arg3);
if(cljs.core.truth_(and__4115__auto____$3)){
var and__4115__auto____$4 = sci.impl.evaluator.eval(ctx,arg4);
if(cljs.core.truth_(and__4115__auto____$4)){
var and__4115__auto____$5 = sci.impl.evaluator.eval(ctx,arg5);
if(cljs.core.truth_(and__4115__auto____$5)){
var and__4115__auto____$6 = sci.impl.evaluator.eval(ctx,arg6);
if(cljs.core.truth_(and__4115__auto____$6)){
var and__4115__auto____$7 = sci.impl.evaluator.eval(ctx,arg7);
if(cljs.core.truth_(and__4115__auto____$7)){
var and__4115__auto____$8 = sci.impl.evaluator.eval(ctx,arg8);
if(cljs.core.truth_(and__4115__auto____$8)){
var and__4115__auto____$9 = sci.impl.evaluator.eval(ctx,arg9);
if(cljs.core.truth_(and__4115__auto____$9)){
var and__4115__auto____$10 = sci.impl.evaluator.eval(ctx,arg10);
if(cljs.core.truth_(and__4115__auto____$10)){
var and__4115__auto____$11 = sci.impl.evaluator.eval(ctx,arg11);
if(cljs.core.truth_(and__4115__auto____$11)){
var and__4115__auto____$12 = sci.impl.evaluator.eval(ctx,arg12);
if(cljs.core.truth_(and__4115__auto____$12)){
var and__4115__auto____$13 = sci.impl.evaluator.eval(ctx,arg13);
if(cljs.core.truth_(and__4115__auto____$13)){
var and__4115__auto____$14 = sci.impl.evaluator.eval(ctx,arg14);
if(cljs.core.truth_(and__4115__auto____$14)){
return sci.impl.evaluator.eval(ctx,arg15);
} else {
return and__4115__auto____$14;
}
} else {
return and__4115__auto____$13;
}
} else {
return and__4115__auto____$12;
}
} else {
return and__4115__auto____$11;
}
} else {
return and__4115__auto____$10;
}
} else {
return and__4115__auto____$9;
}
} else {
return and__4115__auto____$8;
}
} else {
return and__4115__auto____$7;
}
} else {
return and__4115__auto____$6;
}
} else {
return and__4115__auto____$5;
}
} else {
return and__4115__auto____$4;
}
} else {
return and__4115__auto____$3;
}
} else {
return and__4115__auto____$2;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
}),expr);

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
return sci.impl.utils.ctx_fn((function (ctx){
var and__4115__auto__ = sci.impl.evaluator.eval(ctx,arg0);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = sci.impl.evaluator.eval(ctx,arg1);
if(cljs.core.truth_(and__4115__auto____$1)){
var and__4115__auto____$2 = sci.impl.evaluator.eval(ctx,arg2);
if(cljs.core.truth_(and__4115__auto____$2)){
var and__4115__auto____$3 = sci.impl.evaluator.eval(ctx,arg3);
if(cljs.core.truth_(and__4115__auto____$3)){
var and__4115__auto____$4 = sci.impl.evaluator.eval(ctx,arg4);
if(cljs.core.truth_(and__4115__auto____$4)){
var and__4115__auto____$5 = sci.impl.evaluator.eval(ctx,arg5);
if(cljs.core.truth_(and__4115__auto____$5)){
var and__4115__auto____$6 = sci.impl.evaluator.eval(ctx,arg6);
if(cljs.core.truth_(and__4115__auto____$6)){
var and__4115__auto____$7 = sci.impl.evaluator.eval(ctx,arg7);
if(cljs.core.truth_(and__4115__auto____$7)){
var and__4115__auto____$8 = sci.impl.evaluator.eval(ctx,arg8);
if(cljs.core.truth_(and__4115__auto____$8)){
var and__4115__auto____$9 = sci.impl.evaluator.eval(ctx,arg9);
if(cljs.core.truth_(and__4115__auto____$9)){
var and__4115__auto____$10 = sci.impl.evaluator.eval(ctx,arg10);
if(cljs.core.truth_(and__4115__auto____$10)){
var and__4115__auto____$11 = sci.impl.evaluator.eval(ctx,arg11);
if(cljs.core.truth_(and__4115__auto____$11)){
var and__4115__auto____$12 = sci.impl.evaluator.eval(ctx,arg12);
if(cljs.core.truth_(and__4115__auto____$12)){
var and__4115__auto____$13 = sci.impl.evaluator.eval(ctx,arg13);
if(cljs.core.truth_(and__4115__auto____$13)){
var and__4115__auto____$14 = sci.impl.evaluator.eval(ctx,arg14);
if(cljs.core.truth_(and__4115__auto____$14)){
var and__4115__auto____$15 = sci.impl.evaluator.eval(ctx,arg15);
if(cljs.core.truth_(and__4115__auto____$15)){
return sci.impl.evaluator.eval(ctx,arg16);
} else {
return and__4115__auto____$15;
}
} else {
return and__4115__auto____$14;
}
} else {
return and__4115__auto____$13;
}
} else {
return and__4115__auto____$12;
}
} else {
return and__4115__auto____$11;
}
} else {
return and__4115__auto____$10;
}
} else {
return and__4115__auto____$9;
}
} else {
return and__4115__auto____$8;
}
} else {
return and__4115__auto____$7;
}
} else {
return and__4115__auto____$6;
}
} else {
return and__4115__auto____$5;
}
} else {
return and__4115__auto____$4;
}
} else {
return and__4115__auto____$3;
}
} else {
return and__4115__auto____$2;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
}),expr);

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
return sci.impl.utils.ctx_fn((function (ctx){
var and__4115__auto__ = sci.impl.evaluator.eval(ctx,arg0);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = sci.impl.evaluator.eval(ctx,arg1);
if(cljs.core.truth_(and__4115__auto____$1)){
var and__4115__auto____$2 = sci.impl.evaluator.eval(ctx,arg2);
if(cljs.core.truth_(and__4115__auto____$2)){
var and__4115__auto____$3 = sci.impl.evaluator.eval(ctx,arg3);
if(cljs.core.truth_(and__4115__auto____$3)){
var and__4115__auto____$4 = sci.impl.evaluator.eval(ctx,arg4);
if(cljs.core.truth_(and__4115__auto____$4)){
var and__4115__auto____$5 = sci.impl.evaluator.eval(ctx,arg5);
if(cljs.core.truth_(and__4115__auto____$5)){
var and__4115__auto____$6 = sci.impl.evaluator.eval(ctx,arg6);
if(cljs.core.truth_(and__4115__auto____$6)){
var and__4115__auto____$7 = sci.impl.evaluator.eval(ctx,arg7);
if(cljs.core.truth_(and__4115__auto____$7)){
var and__4115__auto____$8 = sci.impl.evaluator.eval(ctx,arg8);
if(cljs.core.truth_(and__4115__auto____$8)){
var and__4115__auto____$9 = sci.impl.evaluator.eval(ctx,arg9);
if(cljs.core.truth_(and__4115__auto____$9)){
var and__4115__auto____$10 = sci.impl.evaluator.eval(ctx,arg10);
if(cljs.core.truth_(and__4115__auto____$10)){
var and__4115__auto____$11 = sci.impl.evaluator.eval(ctx,arg11);
if(cljs.core.truth_(and__4115__auto____$11)){
var and__4115__auto____$12 = sci.impl.evaluator.eval(ctx,arg12);
if(cljs.core.truth_(and__4115__auto____$12)){
var and__4115__auto____$13 = sci.impl.evaluator.eval(ctx,arg13);
if(cljs.core.truth_(and__4115__auto____$13)){
var and__4115__auto____$14 = sci.impl.evaluator.eval(ctx,arg14);
if(cljs.core.truth_(and__4115__auto____$14)){
var and__4115__auto____$15 = sci.impl.evaluator.eval(ctx,arg15);
if(cljs.core.truth_(and__4115__auto____$15)){
var and__4115__auto____$16 = sci.impl.evaluator.eval(ctx,arg16);
if(cljs.core.truth_(and__4115__auto____$16)){
return sci.impl.evaluator.eval(ctx,arg17);
} else {
return and__4115__auto____$16;
}
} else {
return and__4115__auto____$15;
}
} else {
return and__4115__auto____$14;
}
} else {
return and__4115__auto____$13;
}
} else {
return and__4115__auto____$12;
}
} else {
return and__4115__auto____$11;
}
} else {
return and__4115__auto____$10;
}
} else {
return and__4115__auto____$9;
}
} else {
return and__4115__auto____$8;
}
} else {
return and__4115__auto____$7;
}
} else {
return and__4115__auto____$6;
}
} else {
return and__4115__auto____$5;
}
} else {
return and__4115__auto____$4;
}
} else {
return and__4115__auto____$3;
}
} else {
return and__4115__auto____$2;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
}),expr);

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
return sci.impl.utils.ctx_fn((function (ctx){
var and__4115__auto__ = sci.impl.evaluator.eval(ctx,arg0);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = sci.impl.evaluator.eval(ctx,arg1);
if(cljs.core.truth_(and__4115__auto____$1)){
var and__4115__auto____$2 = sci.impl.evaluator.eval(ctx,arg2);
if(cljs.core.truth_(and__4115__auto____$2)){
var and__4115__auto____$3 = sci.impl.evaluator.eval(ctx,arg3);
if(cljs.core.truth_(and__4115__auto____$3)){
var and__4115__auto____$4 = sci.impl.evaluator.eval(ctx,arg4);
if(cljs.core.truth_(and__4115__auto____$4)){
var and__4115__auto____$5 = sci.impl.evaluator.eval(ctx,arg5);
if(cljs.core.truth_(and__4115__auto____$5)){
var and__4115__auto____$6 = sci.impl.evaluator.eval(ctx,arg6);
if(cljs.core.truth_(and__4115__auto____$6)){
var and__4115__auto____$7 = sci.impl.evaluator.eval(ctx,arg7);
if(cljs.core.truth_(and__4115__auto____$7)){
var and__4115__auto____$8 = sci.impl.evaluator.eval(ctx,arg8);
if(cljs.core.truth_(and__4115__auto____$8)){
var and__4115__auto____$9 = sci.impl.evaluator.eval(ctx,arg9);
if(cljs.core.truth_(and__4115__auto____$9)){
var and__4115__auto____$10 = sci.impl.evaluator.eval(ctx,arg10);
if(cljs.core.truth_(and__4115__auto____$10)){
var and__4115__auto____$11 = sci.impl.evaluator.eval(ctx,arg11);
if(cljs.core.truth_(and__4115__auto____$11)){
var and__4115__auto____$12 = sci.impl.evaluator.eval(ctx,arg12);
if(cljs.core.truth_(and__4115__auto____$12)){
var and__4115__auto____$13 = sci.impl.evaluator.eval(ctx,arg13);
if(cljs.core.truth_(and__4115__auto____$13)){
var and__4115__auto____$14 = sci.impl.evaluator.eval(ctx,arg14);
if(cljs.core.truth_(and__4115__auto____$14)){
var and__4115__auto____$15 = sci.impl.evaluator.eval(ctx,arg15);
if(cljs.core.truth_(and__4115__auto____$15)){
var and__4115__auto____$16 = sci.impl.evaluator.eval(ctx,arg16);
if(cljs.core.truth_(and__4115__auto____$16)){
var and__4115__auto____$17 = sci.impl.evaluator.eval(ctx,arg17);
if(cljs.core.truth_(and__4115__auto____$17)){
return sci.impl.evaluator.eval(ctx,arg18);
} else {
return and__4115__auto____$17;
}
} else {
return and__4115__auto____$16;
}
} else {
return and__4115__auto____$15;
}
} else {
return and__4115__auto____$14;
}
} else {
return and__4115__auto____$13;
}
} else {
return and__4115__auto____$12;
}
} else {
return and__4115__auto____$11;
}
} else {
return and__4115__auto____$10;
}
} else {
return and__4115__auto____$9;
}
} else {
return and__4115__auto____$8;
}
} else {
return and__4115__auto____$7;
}
} else {
return and__4115__auto____$6;
}
} else {
return and__4115__auto____$5;
}
} else {
return and__4115__auto____$4;
}
} else {
return and__4115__auto____$3;
}
} else {
return and__4115__auto____$2;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
}),expr);

break;
default:
return sci.impl.utils.ctx_fn((function (ctx){
return sci.impl.evaluator.eval_and(ctx,analyzed_children);
}),expr);

}
});
sci.impl.analyzer.recur_0 = sci.impl.fns.__GT_Recur(cljs.core.PersistentVector.EMPTY);
sci.impl.analyzer.return_recur = (function sci$impl$analyzer$return_recur(expr,analyzed_children){
var G__70698 = cljs.core.count(analyzed_children);
switch (G__70698) {
case (0):
return sci.impl.utils.ctx_fn((function (_){
return sci.impl.analyzer.recur_0;
}),expr);

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
return sci.impl.utils.ctx_fn((function (ctx){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,arg0)], null));
}),expr);

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return sci.impl.utils.ctx_fn((function (ctx){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,arg0),sci.impl.evaluator.eval(ctx,arg1)], null));
}),expr);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return sci.impl.utils.ctx_fn((function (ctx){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,arg0),sci.impl.evaluator.eval(ctx,arg1),sci.impl.evaluator.eval(ctx,arg2)], null));
}),expr);

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return sci.impl.utils.ctx_fn((function (ctx){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,arg0),sci.impl.evaluator.eval(ctx,arg1),sci.impl.evaluator.eval(ctx,arg2),sci.impl.evaluator.eval(ctx,arg3)], null));
}),expr);

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return sci.impl.utils.ctx_fn((function (ctx){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,arg0),sci.impl.evaluator.eval(ctx,arg1),sci.impl.evaluator.eval(ctx,arg2),sci.impl.evaluator.eval(ctx,arg3),sci.impl.evaluator.eval(ctx,arg4)], null));
}),expr);

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
return sci.impl.utils.ctx_fn((function (ctx){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,arg0),sci.impl.evaluator.eval(ctx,arg1),sci.impl.evaluator.eval(ctx,arg2),sci.impl.evaluator.eval(ctx,arg3),sci.impl.evaluator.eval(ctx,arg4),sci.impl.evaluator.eval(ctx,arg5)], null));
}),expr);

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
return sci.impl.utils.ctx_fn((function (ctx){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,arg0),sci.impl.evaluator.eval(ctx,arg1),sci.impl.evaluator.eval(ctx,arg2),sci.impl.evaluator.eval(ctx,arg3),sci.impl.evaluator.eval(ctx,arg4),sci.impl.evaluator.eval(ctx,arg5),sci.impl.evaluator.eval(ctx,arg6)], null));
}),expr);

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
return sci.impl.utils.ctx_fn((function (ctx){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,arg0),sci.impl.evaluator.eval(ctx,arg1),sci.impl.evaluator.eval(ctx,arg2),sci.impl.evaluator.eval(ctx,arg3),sci.impl.evaluator.eval(ctx,arg4),sci.impl.evaluator.eval(ctx,arg5),sci.impl.evaluator.eval(ctx,arg6),sci.impl.evaluator.eval(ctx,arg7)], null));
}),expr);

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
return sci.impl.utils.ctx_fn((function (ctx){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,arg0),sci.impl.evaluator.eval(ctx,arg1),sci.impl.evaluator.eval(ctx,arg2),sci.impl.evaluator.eval(ctx,arg3),sci.impl.evaluator.eval(ctx,arg4),sci.impl.evaluator.eval(ctx,arg5),sci.impl.evaluator.eval(ctx,arg6),sci.impl.evaluator.eval(ctx,arg7),sci.impl.evaluator.eval(ctx,arg8)], null));
}),expr);

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
return sci.impl.utils.ctx_fn((function (ctx){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,arg0),sci.impl.evaluator.eval(ctx,arg1),sci.impl.evaluator.eval(ctx,arg2),sci.impl.evaluator.eval(ctx,arg3),sci.impl.evaluator.eval(ctx,arg4),sci.impl.evaluator.eval(ctx,arg5),sci.impl.evaluator.eval(ctx,arg6),sci.impl.evaluator.eval(ctx,arg7),sci.impl.evaluator.eval(ctx,arg8),sci.impl.evaluator.eval(ctx,arg9)], null));
}),expr);

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
return sci.impl.utils.ctx_fn((function (ctx){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,arg0),sci.impl.evaluator.eval(ctx,arg1),sci.impl.evaluator.eval(ctx,arg2),sci.impl.evaluator.eval(ctx,arg3),sci.impl.evaluator.eval(ctx,arg4),sci.impl.evaluator.eval(ctx,arg5),sci.impl.evaluator.eval(ctx,arg6),sci.impl.evaluator.eval(ctx,arg7),sci.impl.evaluator.eval(ctx,arg8),sci.impl.evaluator.eval(ctx,arg9),sci.impl.evaluator.eval(ctx,arg10)], null));
}),expr);

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
return sci.impl.utils.ctx_fn((function (ctx){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,arg0),sci.impl.evaluator.eval(ctx,arg1),sci.impl.evaluator.eval(ctx,arg2),sci.impl.evaluator.eval(ctx,arg3),sci.impl.evaluator.eval(ctx,arg4),sci.impl.evaluator.eval(ctx,arg5),sci.impl.evaluator.eval(ctx,arg6),sci.impl.evaluator.eval(ctx,arg7),sci.impl.evaluator.eval(ctx,arg8),sci.impl.evaluator.eval(ctx,arg9),sci.impl.evaluator.eval(ctx,arg10),sci.impl.evaluator.eval(ctx,arg11)], null));
}),expr);

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
return sci.impl.utils.ctx_fn((function (ctx){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,arg0),sci.impl.evaluator.eval(ctx,arg1),sci.impl.evaluator.eval(ctx,arg2),sci.impl.evaluator.eval(ctx,arg3),sci.impl.evaluator.eval(ctx,arg4),sci.impl.evaluator.eval(ctx,arg5),sci.impl.evaluator.eval(ctx,arg6),sci.impl.evaluator.eval(ctx,arg7),sci.impl.evaluator.eval(ctx,arg8),sci.impl.evaluator.eval(ctx,arg9),sci.impl.evaluator.eval(ctx,arg10),sci.impl.evaluator.eval(ctx,arg11),sci.impl.evaluator.eval(ctx,arg12)], null));
}),expr);

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
return sci.impl.utils.ctx_fn((function (ctx){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,arg0),sci.impl.evaluator.eval(ctx,arg1),sci.impl.evaluator.eval(ctx,arg2),sci.impl.evaluator.eval(ctx,arg3),sci.impl.evaluator.eval(ctx,arg4),sci.impl.evaluator.eval(ctx,arg5),sci.impl.evaluator.eval(ctx,arg6),sci.impl.evaluator.eval(ctx,arg7),sci.impl.evaluator.eval(ctx,arg8),sci.impl.evaluator.eval(ctx,arg9),sci.impl.evaluator.eval(ctx,arg10),sci.impl.evaluator.eval(ctx,arg11),sci.impl.evaluator.eval(ctx,arg12),sci.impl.evaluator.eval(ctx,arg13)], null));
}),expr);

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
return sci.impl.utils.ctx_fn((function (ctx){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,arg0),sci.impl.evaluator.eval(ctx,arg1),sci.impl.evaluator.eval(ctx,arg2),sci.impl.evaluator.eval(ctx,arg3),sci.impl.evaluator.eval(ctx,arg4),sci.impl.evaluator.eval(ctx,arg5),sci.impl.evaluator.eval(ctx,arg6),sci.impl.evaluator.eval(ctx,arg7),sci.impl.evaluator.eval(ctx,arg8),sci.impl.evaluator.eval(ctx,arg9),sci.impl.evaluator.eval(ctx,arg10),sci.impl.evaluator.eval(ctx,arg11),sci.impl.evaluator.eval(ctx,arg12),sci.impl.evaluator.eval(ctx,arg13),sci.impl.evaluator.eval(ctx,arg14)], null));
}),expr);

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
return sci.impl.utils.ctx_fn((function (ctx){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,arg0),sci.impl.evaluator.eval(ctx,arg1),sci.impl.evaluator.eval(ctx,arg2),sci.impl.evaluator.eval(ctx,arg3),sci.impl.evaluator.eval(ctx,arg4),sci.impl.evaluator.eval(ctx,arg5),sci.impl.evaluator.eval(ctx,arg6),sci.impl.evaluator.eval(ctx,arg7),sci.impl.evaluator.eval(ctx,arg8),sci.impl.evaluator.eval(ctx,arg9),sci.impl.evaluator.eval(ctx,arg10),sci.impl.evaluator.eval(ctx,arg11),sci.impl.evaluator.eval(ctx,arg12),sci.impl.evaluator.eval(ctx,arg13),sci.impl.evaluator.eval(ctx,arg14),sci.impl.evaluator.eval(ctx,arg15)], null));
}),expr);

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
return sci.impl.utils.ctx_fn((function (ctx){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,arg0),sci.impl.evaluator.eval(ctx,arg1),sci.impl.evaluator.eval(ctx,arg2),sci.impl.evaluator.eval(ctx,arg3),sci.impl.evaluator.eval(ctx,arg4),sci.impl.evaluator.eval(ctx,arg5),sci.impl.evaluator.eval(ctx,arg6),sci.impl.evaluator.eval(ctx,arg7),sci.impl.evaluator.eval(ctx,arg8),sci.impl.evaluator.eval(ctx,arg9),sci.impl.evaluator.eval(ctx,arg10),sci.impl.evaluator.eval(ctx,arg11),sci.impl.evaluator.eval(ctx,arg12),sci.impl.evaluator.eval(ctx,arg13),sci.impl.evaluator.eval(ctx,arg14),sci.impl.evaluator.eval(ctx,arg15),sci.impl.evaluator.eval(ctx,arg16)], null));
}),expr);

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
return sci.impl.utils.ctx_fn((function (ctx){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,arg0),sci.impl.evaluator.eval(ctx,arg1),sci.impl.evaluator.eval(ctx,arg2),sci.impl.evaluator.eval(ctx,arg3),sci.impl.evaluator.eval(ctx,arg4),sci.impl.evaluator.eval(ctx,arg5),sci.impl.evaluator.eval(ctx,arg6),sci.impl.evaluator.eval(ctx,arg7),sci.impl.evaluator.eval(ctx,arg8),sci.impl.evaluator.eval(ctx,arg9),sci.impl.evaluator.eval(ctx,arg10),sci.impl.evaluator.eval(ctx,arg11),sci.impl.evaluator.eval(ctx,arg12),sci.impl.evaluator.eval(ctx,arg13),sci.impl.evaluator.eval(ctx,arg14),sci.impl.evaluator.eval(ctx,arg15),sci.impl.evaluator.eval(ctx,arg16),sci.impl.evaluator.eval(ctx,arg17)], null));
}),expr);

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
return sci.impl.utils.ctx_fn((function (ctx){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,arg0),sci.impl.evaluator.eval(ctx,arg1),sci.impl.evaluator.eval(ctx,arg2),sci.impl.evaluator.eval(ctx,arg3),sci.impl.evaluator.eval(ctx,arg4),sci.impl.evaluator.eval(ctx,arg5),sci.impl.evaluator.eval(ctx,arg6),sci.impl.evaluator.eval(ctx,arg7),sci.impl.evaluator.eval(ctx,arg8),sci.impl.evaluator.eval(ctx,arg9),sci.impl.evaluator.eval(ctx,arg10),sci.impl.evaluator.eval(ctx,arg11),sci.impl.evaluator.eval(ctx,arg12),sci.impl.evaluator.eval(ctx,arg13),sci.impl.evaluator.eval(ctx,arg14),sci.impl.evaluator.eval(ctx,arg15),sci.impl.evaluator.eval(ctx,arg16),sci.impl.evaluator.eval(ctx,arg17),sci.impl.evaluator.eval(ctx,arg18)], null));
}),expr);

break;
default:
return sci.impl.utils.ctx_fn((function (ctx){
return sci.impl.evaluator.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),analyzed_children);
}),expr);

}
});
sci.impl.analyzer.analyze_children = (function sci$impl$analyzer$analyze_children(ctx,children){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__70725_SHARP_){
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,p1__70725_SHARP_) : sci.impl.analyzer.analyze.call(null,ctx,p1__70725_SHARP_));
}),children);
});
sci.impl.analyzer.expand_fn_args_PLUS_body = (function sci$impl$analyzer$expand_fn_args_PLUS_body(p__70733,fn_name,p__70734,macro_QMARK_){
var map__70735 = p__70733;
var map__70735__$1 = (((((!((map__70735 == null))))?(((((map__70735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70735):map__70735);
var ctx = map__70735__$1;
var fn_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70735__$1,new cljs.core.Keyword(null,"fn-expr","fn-expr",-933027985));
var vec__70736 = p__70734;
var seq__70737 = cljs.core.seq(vec__70736);
var first__70738 = cljs.core.first(seq__70737);
var seq__70737__$1 = cljs.core.next(seq__70737);
var binding_vector = first__70738;
var body_exprs = seq__70737__$1;
if(cljs.core.truth_(binding_vector)){
} else {
sci.impl.analyzer.throw_error_with_location("Parameter declaration missing.",fn_expr);
}

if(cljs.core.vector_QMARK_(binding_vector)){
} else {
sci.impl.analyzer.throw_error_with_location("Parameter declaration should be a vector",fn_expr);
}

var binding_vector__$1 = (cljs.core.truth_(macro_QMARK_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",1482799337,null),new cljs.core.Symbol(null,"&env","&env",-919163083,null)], null),binding_vector):binding_vector);
var fixed_args = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__70727_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),p1__70727_SHARP_);
}),binding_vector__$1);
var fixed_arity = cljs.core.count(fixed_args);
var var_arg_name = cljs.core.second(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__70728_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),p1__70728_SHARP_);
}),binding_vector__$1));
var next_body = cljs.core.next(body_exprs);
var conds = ((next_body)?(function (){var e = cljs.core.first(body_exprs);
if(cljs.core.map_QMARK_(e)){
return e;
} else {
return null;
}
})():null);
var body_exprs__$1 = (cljs.core.truth_(conds)?next_body:body_exprs);
var conds__$1 = (function (){var or__4126__auto__ = conds;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.meta(binding_vector__$1);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body_exprs__$2 = (cljs.core.truth_(post)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null)),(new cljs.core.List(null,((((1) < cljs.core.count(body_exprs__$1)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body_exprs__$1))):cljs.core.first(body_exprs__$1)),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),post),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))], 0)))),null,(1),null))))):body_exprs__$1);
var body_exprs__$3 = (cljs.core.truth_(pre)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),pre),body_exprs__$2):body_exprs__$2);
var map__70743 = sci.impl.utils.maybe_destructured(binding_vector__$1,body_exprs__$3);
var map__70743__$1 = (((((!((map__70743 == null))))?(((((map__70743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70743):map__70743);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70743__$1,new cljs.core.Keyword(null,"params","params",710516235));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70743__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var ctx__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.merge,cljs.core.zipmap(params,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
var body__$1 = sci.impl.analyzer.return_do(fn_expr,sci.impl.analyzer.analyze_children(ctx__$1,body));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("sci.impl","body","sci.impl/body",-1493886648),body__$1,new cljs.core.Keyword("sci.impl","params","sci.impl/params",-175360738),params,new cljs.core.Keyword("sci.impl","fixed-arity","sci.impl/fixed-arity",-1251617052),fixed_arity,new cljs.core.Keyword("sci.impl","var-arg-name","sci.impl/var-arg-name",1800498100),var_arg_name,new cljs.core.Keyword("sci.impl","fn-name","sci.impl/fn-name",-1172300569),fn_name], null);
});
sci.impl.analyzer.analyzed_fn_meta = (function sci$impl$analyzer$analyzed_fn_meta(ctx,m){
var meta_needs_eval_QMARK_ = (cljs.core.count(m) > (2));
var m__$1 = ((meta_needs_eval_QMARK_)?sci.impl.utils.mark_eval((function (){var G__70747 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"meta","meta",1499536964),true);
var G__70748 = m;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__70747,G__70748) : sci.impl.analyzer.analyze.call(null,G__70747,G__70748));
})()):m);
return m__$1;
});
sci.impl.analyzer.expand_fn = (function sci$impl$analyzer$expand_fn(ctx,p__70749,macro_QMARK_){
var vec__70751 = p__70749;
var seq__70752 = cljs.core.seq(vec__70751);
var first__70753 = cljs.core.first(seq__70752);
var seq__70752__$1 = cljs.core.next(seq__70752);
var _fn = first__70753;
var first__70753__$1 = cljs.core.first(seq__70752__$1);
var seq__70752__$2 = cljs.core.next(seq__70752__$1);
var name_QMARK_ = first__70753__$1;
var body = seq__70752__$2;
var fn_expr = vec__70751;
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"fn-expr","fn-expr",-933027985),fn_expr);
var fn_name = (((name_QMARK_ instanceof cljs.core.Symbol))?name_QMARK_:null);
var body__$1 = (cljs.core.truth_(fn_name)?body:cljs.core.cons(name_QMARK_,body));
var bodies = ((cljs.core.seq_QMARK_(cljs.core.first(body__$1)))?body__$1:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [body__$1], null));
var ctx__$2 = (cljs.core.truth_(fn_name)?cljs.core.assoc_in(ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),fn_name], null),null):ctx__$1);
var analyzed_bodies = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__70754,body__$2){
var map__70755 = p__70754;
var map__70755__$1 = (((((!((map__70755 == null))))?(((((map__70755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70755):map__70755);
var acc = map__70755__$1;
var max_fixed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70755__$1,new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124));
var min_varargs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70755__$1,new cljs.core.Keyword(null,"min-varargs","min-varargs",1999010596));
var arglist = cljs.core.first(body__$2);
var body__$3 = sci.impl.analyzer.expand_fn_args_PLUS_body(ctx__$2,fn_name,body__$2,macro_QMARK_);
var body__$4 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(body__$3,new cljs.core.Keyword("sci.impl","arglist","sci.impl/arglist",2082561957),arglist);
var var_arg_name = new cljs.core.Keyword("sci.impl","var-arg-name","sci.impl/var-arg-name",1800498100).cljs$core$IFn$_invoke$arity$1(body__$4);
var fixed_arity = new cljs.core.Keyword("sci.impl","fixed-arity","sci.impl/fixed-arity",-1251617052).cljs$core$IFn$_invoke$arity$1(body__$4);
var new_min_varargs = (cljs.core.truth_(var_arg_name)?fixed_arity:null);
if(cljs.core.truth_((function (){var and__4115__auto__ = var_arg_name;
if(cljs.core.truth_(and__4115__auto__)){
return min_varargs;
} else {
return and__4115__auto__;
}
})())){
sci.impl.analyzer.throw_error_with_location("Can't have more than 1 variadic overload",fn_expr);
} else {
}

if(cljs.core.truth_(((cljs.core.not(var_arg_name))?(function (){var and__4115__auto__ = min_varargs;
if(cljs.core.truth_(and__4115__auto__)){
return (fixed_arity > min_varargs);
} else {
return and__4115__auto__;
}
})():false))){
sci.impl.analyzer.throw_error_with_location("Can't have fixed arity function with more params than variadic function",fn_expr);
} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(acc,new cljs.core.Keyword(null,"min-varargs","min-varargs",1999010596),new_min_varargs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124),(function (){var x__4214__auto__ = new cljs.core.Keyword("sci.impl","fixed-arity","sci.impl/fixed-arity",-1251617052).cljs$core$IFn$_invoke$arity$1(body__$4);
var y__4215__auto__ = max_fixed;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()], 0)),new cljs.core.Keyword(null,"bodies","bodies",-1295887172),cljs.core.conj,body__$4),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.conj,arglist);
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bodies","bodies",-1295887172),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"min-var-args","min-var-args",-1883389660),null,new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124),(-1)], null),bodies);
var arities = new cljs.core.Keyword(null,"bodies","bodies",-1295887172).cljs$core$IFn$_invoke$arity$1(analyzed_bodies);
var arglists = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(analyzed_bodies);
var fn_meta = cljs.core.meta(fn_expr);
var ana_fn_meta = sci.impl.analyzer.analyzed_fn_meta(ctx__$2,fn_meta);
var fn_meta__$1 = (((fn_meta === ana_fn_meta))?null:cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(ana_fn_meta,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"end-column","end-column",1425389514)], 0)));
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("sci.impl","fn-bodies","sci.impl/fn-bodies",134751661),arities,new cljs.core.Keyword("sci.impl","fn-name","sci.impl/fn-name",-1172300569),fn_name,new cljs.core.Keyword("sci.impl","arglists","sci.impl/arglists",-802264395),arglists,new cljs.core.Keyword("sci.impl","fn","sci.impl/fn",1695180073),true,new cljs.core.Keyword("sci.impl","fn-meta","sci.impl/fn-meta",1093684639),fn_meta__$1], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
});
sci.impl.analyzer.expand_let_STAR_ = (function sci$impl$analyzer$expand_let_STAR_(ctx,destructured_let_bindings,exprs){
var vec__70759 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__70764,p__70765){
var vec__70766 = p__70764;
var ctx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70766,(0),null);
var new_let_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70766,(1),null);
var vec__70769 = p__70765;
var binding_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70769,(0),null);
var binding_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70769,(1),null);
var v = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,binding_value) : sci.impl.analyzer.analyze.call(null,ctx__$1,binding_value));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$5(ctx__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.assoc,binding_name,v),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(new_let_bindings,binding_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,cljs.core.PersistentVector.EMPTY], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),destructured_let_bindings));
var ctx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70759,(0),null);
var new_let_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70759,(1),null);
var body = sci.impl.analyzer.analyze_children(ctx__$1,exprs);
return sci.impl.utils.ctx_fn((function (ctx__$2){
return sci.impl.evaluator.eval_let(ctx__$2,new_let_bindings,body);
}),null);
});
/**
 * The let macro from clojure.core
 */
sci.impl.analyzer.expand_let = (function sci$impl$analyzer$expand_let(ctx,p__70782){
var vec__70784 = p__70782;
var seq__70785 = cljs.core.seq(vec__70784);
var first__70786 = cljs.core.first(seq__70785);
var seq__70785__$1 = cljs.core.next(seq__70785);
var _let = first__70786;
var first__70786__$1 = cljs.core.first(seq__70785__$1);
var seq__70785__$2 = cljs.core.next(seq__70785__$1);
var let_bindings = first__70786__$1;
var exprs = seq__70785__$2;
var let_bindings__$1 = sci.impl.destructure.destructure(let_bindings);
return sci.impl.analyzer.expand_let_STAR_(ctx,let_bindings__$1,exprs);
});
sci.impl.analyzer.expand_def = (function sci$impl$analyzer$expand_def(ctx,expr){
var vec__70790 = expr;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70790,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70790,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70790,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70790,(3),null);
var G__70795_73004 = ctx;
var G__70796_73005 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,var_name], null);
(sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2(G__70795_73004,G__70796_73005) : sci.impl.analyzer.expand_declare.call(null,G__70795_73004,G__70796_73005));

if(cljs.core.simple_symbol_QMARK_(var_name)){
} else {
sci.impl.analyzer.throw_error_with_location("Var name should be simple symbol.",expr);
}

var arg_count = cljs.core.count(expr);
var docstring = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),arg_count)) && (typeof _QMARK_docstring === 'string')))?_QMARK_docstring:null);
var expected_arg_count = (cljs.core.truth_(docstring)?(4):(3));
if((arg_count <= expected_arg_count)){
} else {
throw (new Error("Too many arguments to def"));
}

var init = (cljs.core.truth_(docstring)?_QMARK_init:_QMARK_docstring);
var init__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),arg_count))?new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647):(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,init) : sci.impl.analyzer.analyze.call(null,ctx,init)));
var m = cljs.core.meta(var_name);
var mks = cljs.core.keys(m);
var k = cljs.core.some((function (p1__70789_SHARP_){
return (!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"private","private",-558947994),null,new cljs.core.Keyword(null,"column","column",2078222095),null,new cljs.core.Keyword(null,"const","const",1709929842),null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),null,new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null,new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),null], null), null),p1__70789_SHARP_)));
}),mks);
var m__$1 = (cljs.core.truth_(k)?(function (){var G__70804 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"meta","meta",1499536964),true);
var G__70805 = m;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__70804,G__70805) : sci.impl.analyzer.analyze.call(null,G__70804,G__70805));
})():m);
var m__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns));
var m__$3 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$2,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):m__$2);
var var_name__$1 = cljs.core.with_meta(var_name,m__$3);
return sci.impl.utils.ctx_fn((function (ctx__$1){
return sci.impl.evaluator.eval_def(ctx__$1,var_name__$1,init__$1);
}),expr);
});
sci.impl.analyzer.expand_defn = (function sci$impl$analyzer$expand_defn(ctx,p__70816){
var vec__70820 = p__70816;
var seq__70821 = cljs.core.seq(vec__70820);
var first__70822 = cljs.core.first(seq__70821);
var seq__70821__$1 = cljs.core.next(seq__70821);
var op = first__70822;
var first__70822__$1 = cljs.core.first(seq__70821__$1);
var seq__70821__$2 = cljs.core.next(seq__70821__$1);
var fn_name = first__70822__$1;
var body = seq__70821__$2;
var expr = vec__70820;
if(cljs.core.simple_symbol_QMARK_(fn_name)){
} else {
sci.impl.analyzer.throw_error_with_location("Var name should be simple symbol.",expr);
}

var G__70823_73022 = ctx;
var G__70824_73023 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,fn_name], null);
(sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2(G__70823_73022,G__70824_73023) : sci.impl.analyzer.expand_declare.call(null,G__70823_73022,G__70824_73023));

var macro_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("defmacro",cljs.core.name(op));
var vec__70827 = cljs.core.split_with(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.sequential_QMARK_),body);
var pre_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70827,(0),null);
var body__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70827,(1),null);
var _ = ((cljs.core.empty_QMARK_(body__$1))?sci.impl.analyzer.throw_error_with_location("Parameter declaration missing.",expr):null);
var docstring = (function (){var temp__5753__auto__ = cljs.core.first(pre_body);
if(cljs.core.truth_(temp__5753__auto__)){
var ds = temp__5753__auto__;
if(typeof ds === 'string'){
return ds;
} else {
return null;
}
} else {
return null;
}
})();
var meta_map = (function (){var temp__5753__auto__ = cljs.core.last(pre_body);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
if(cljs.core.map_QMARK_(m)){
return m;
} else {
return null;
}
} else {
return null;
}
})();
var meta_map__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(fn_name),cljs.core.meta(expr),meta_map], 0));
var mks = cljs.core.keys(meta_map__$1);
var k = cljs.core.some((function (p1__70812_SHARP_){
return (!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),null,new cljs.core.Keyword(null,"private","private",-558947994),null,new cljs.core.Keyword(null,"added","added",2057651688),null,new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),null,new cljs.core.Keyword(null,"column","column",2078222095),null,new cljs.core.Keyword(null,"const","const",1709929842),null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),null,new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"macro","macro",-867863404),null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null,new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),null,new cljs.core.Keyword(null,"doc","doc",1913296891),null], null), null),p1__70812_SHARP_)));
}),mks);
var meta_map__$2 = (cljs.core.truth_(k)?(function (){var G__70835 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"meta","meta",1499536964),true);
var G__70836 = meta_map__$1;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__70835,G__70836) : sci.impl.analyzer.analyze.call(null,G__70835,G__70836));
})():meta_map__$1);
var fn_body = cljs.core.with_meta(cljs.core.cons(new cljs.core.Symbol(null,"fn","fn",465265323,null),body__$1),cljs.core.meta(expr));
var f = sci.impl.analyzer.expand_fn(ctx,fn_body,macro_QMARK_);
var arglists = cljs.core.seq(new cljs.core.Keyword("sci.impl","arglists","sci.impl/arglists",-802264395).cljs$core$IFn$_invoke$arity$1(f));
var meta_map__$3 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(meta_map__$2,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arglists","arglists",1661989754),arglists], 0));
var fn_name__$1 = cljs.core.with_meta(fn_name,(function (){var G__70841 = meta_map__$3;
var G__70841__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70841,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):G__70841);
if(macro_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70841__$1,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
} else {
return G__70841__$1;
}
})());
var f__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(f,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sci.impl","fn-name","sci.impl/fn-name",-1172300569),fn_name__$1,new cljs.core.Keyword("sci.impl","var","sci.impl/var",-2041185552),true], 0));
return sci.impl.utils.ctx_fn((function (ctx__$1){
return sci.impl.evaluator.eval_def(ctx__$1,fn_name__$1,f__$1);
}),expr);
});
sci.impl.analyzer.expand_loop = (function sci$impl$analyzer$expand_loop(ctx,expr){
var bv = cljs.core.second(expr);
var arg_names = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bv);
var init_vals = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(bv));
var vec__70847 = ((cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,arg_names))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bv,arg_names], null):(function (){var syms = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_names),(function (){
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}));
var bv1 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,syms,init_vals);
var bv2 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,arg_names,syms);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(bv1,bv2)),syms], null);
})());
var bv__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70847,(0),null);
var syms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70847,(1),null);
var body = cljs.core.nnext(expr);
var expansion = (new cljs.core.List(null,new cljs.core.Symbol(null,"let","let",358118826,null),(new cljs.core.List(null,bv__$1,(new cljs.core.List(null,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(arg_names),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),syms),null,(1),null)),(2),null)),(3),null));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,expansion) : sci.impl.analyzer.analyze.call(null,ctx,expansion));
});
sci.impl.analyzer.expand_lazy_seq = (function sci$impl$analyzer$expand_lazy_seq(ctx,expr){
var body = cljs.core.rest(expr);
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","lazy-seq","cljs.core/lazy-seq",627681297,null),(new cljs.core.List(null,(function (){var G__70857 = ctx;
var G__70858 = (new cljs.core.List(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),(new cljs.core.List(null,cljs.core.PersistentVector.EMPTY,(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body),null,(1),null)),(2),null)),(3),null));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__70857,G__70858) : sci.impl.analyzer.analyze.call(null,G__70857,G__70858));
})(),null,(1),null)),(2),null)));
});
sci.impl.analyzer.return_if = (function sci$impl$analyzer$return_if(ctx,expr){
var exprs = cljs.core.rest(expr);
var children = sci.impl.analyzer.analyze_children(ctx,exprs);
var G__70866 = cljs.core.count(children);
switch (G__70866) {
case (0):
case (1):
return sci.impl.analyzer.throw_error_with_location("Too few arguments to if",expr);

break;
case (2):
var condition = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(0));
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(1));
if(cljs.core.not(condition)){
return null;
} else {
if(sci.impl.utils.constant_QMARK_(condition)){
return then;
} else {
return sci.impl.utils.ctx_fn((function (ctx__$1){
if(cljs.core.truth_(sci.impl.evaluator.eval(ctx__$1,condition))){
return sci.impl.evaluator.eval(ctx__$1,then);
} else {
return null;
}
}),cljs.core.with_meta(expr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"call","call",-519999866)], null)));

}
}

break;
case (3):
var condition = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(0));
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(1));
var else$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(2));
if(cljs.core.not(condition)){
return else$;
} else {
if(sci.impl.utils.constant_QMARK_(condition)){
return then;
} else {
return sci.impl.utils.ctx_fn((function (ctx__$1){
if(cljs.core.truth_(sci.impl.evaluator.eval(ctx__$1,condition))){
return sci.impl.evaluator.eval(ctx__$1,then);
} else {
return sci.impl.evaluator.eval(ctx__$1,else$);
}
}),cljs.core.with_meta(expr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"call","call",-519999866)], null)));

}
}

break;
default:
return sci.impl.analyzer.throw_error_with_location("Too many arguments to if",expr);

}
});
sci.impl.analyzer.expand_case = (function sci$impl$analyzer$expand_case(ctx,expr){
var v = (function (){var G__70887 = ctx;
var G__70888 = cljs.core.second(expr);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__70887,G__70888) : sci.impl.analyzer.analyze.call(null,G__70887,G__70888));
})();
var clauses = cljs.core.nnext(expr);
var match_clauses = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),clauses);
var result_clauses = sci.impl.analyzer.analyze_children(ctx,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(clauses)));
var default$ = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),(function (){var G__70891 = ctx;
var G__70892 = cljs.core.last(clauses);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__70891,G__70892) : sci.impl.analyzer.analyze.call(null,G__70891,G__70892));
})()], null):null);
var cases = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(match_clauses,result_clauses);
var assoc_new = (function (m,k,v__$1){
if((!(cljs.core.contains_QMARK_(m,k)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v__$1);
} else {
return sci.impl.analyzer.throw_error_with_location(["Duplicate case test constant ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),expr);
}
});
var case_map = (function (){var cases__$1 = cljs.core.seq(cases);
var ret_map = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cases__$1){
var vec__70908 = cases__$1;
var seq__70909 = cljs.core.seq(vec__70908);
var first__70910 = cljs.core.first(seq__70909);
var seq__70909__$1 = cljs.core.next(seq__70909);
var k = first__70910;
var first__70910__$1 = cljs.core.first(seq__70909__$1);
var seq__70909__$2 = cljs.core.next(seq__70909__$1);
var v__$1 = first__70910__$1;
var cases__$2 = seq__70909__$2;
if(cljs.core.list_QMARK_(k)){
var G__73092 = cases__$2;
var G__73093 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (cases__$1,ret_map,vec__70908,seq__70909,first__70910,seq__70909__$1,k,first__70910__$1,seq__70909__$2,v__$1,cases__$2,v,clauses,match_clauses,result_clauses,default$,cases,assoc_new){
return (function (acc,k__$1){
return assoc_new(acc,k__$1,v__$1);
});})(cases__$1,ret_map,vec__70908,seq__70909,first__70910,seq__70909__$1,k,first__70910__$1,seq__70909__$2,v__$1,cases__$2,v,clauses,match_clauses,result_clauses,default$,cases,assoc_new))
,ret_map,k);
cases__$1 = G__73092;
ret_map = G__73093;
continue;
} else {
var G__73097 = cases__$2;
var G__73098 = assoc_new(ret_map,k,v__$1);
cases__$1 = G__73097;
ret_map = G__73098;
continue;
}
} else {
return ret_map;
}
break;
}
})();
var ret = sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"case","case",-1510733573,null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"case-map","case-map",955082964),case_map,new cljs.core.Keyword(null,"case-val","case-val",880926521),v,new cljs.core.Keyword(null,"case-default","case-default",1140470708),default$], null),(new cljs.core.List(null,default$,null,(1),null)),(2),null)),(3),null)));
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(ret);
});
sci.impl.analyzer.expand_try = (function sci$impl$analyzer$expand_try(ctx,p__70916){
var vec__70917 = p__70916;
var seq__70918 = cljs.core.seq(vec__70917);
var first__70919 = cljs.core.first(seq__70918);
var seq__70918__$1 = cljs.core.next(seq__70918);
var _try = first__70919;
var body = seq__70918__$1;
var vec__70920 = (function (){var exprs = cljs.core.seq(body);
var body_exprs = cljs.core.PersistentVector.EMPTY;
var catch_exprs = cljs.core.PersistentVector.EMPTY;
var finally_expr = null;
while(true){
if(exprs){
var expr = cljs.core.first(exprs);
var exprs__$1 = cljs.core.next(exprs);
if(((cljs.core.seq_QMARK_(expr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"catch","catch",-1616370245,null),cljs.core.first(expr))))){
var G__73105 = exprs__$1;
var G__73106 = body_exprs;
var G__73107 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(catch_exprs,expr);
var G__73108 = finally_expr;
exprs = G__73105;
body_exprs = G__73106;
catch_exprs = G__73107;
finally_expr = G__73108;
continue;
} else {
if(((cljs.core.not(exprs__$1)) && (((cljs.core.seq_QMARK_(expr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"finally","finally",-1065347064,null),cljs.core.first(expr))))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_exprs,catch_exprs,expr], null);
} else {
var G__73109 = exprs__$1;
var G__73110 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(body_exprs,expr);
var G__73111 = catch_exprs;
var G__73112 = finally_expr;
exprs = G__73109;
body_exprs = G__73110;
catch_exprs = G__73111;
finally_expr = G__73112;
continue;

}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_exprs,catch_exprs,finally_expr], null);
}
break;
}
})();
var body_exprs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70920,(0),null);
var catches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70920,(1),null);
var finally$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70920,(2),null);
var body__$1 = (function (){var G__70933 = ctx;
var G__70934 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body_exprs);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__70933,G__70934) : sci.impl.analyzer.analyze.call(null,G__70933,G__70934));
})();
var catches__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (c){
var vec__70935 = c;
var seq__70936 = cljs.core.seq(vec__70935);
var first__70937 = cljs.core.first(seq__70936);
var seq__70936__$1 = cljs.core.next(seq__70936);
var _ = first__70937;
var first__70937__$1 = cljs.core.first(seq__70936__$1);
var seq__70936__$2 = cljs.core.next(seq__70936__$1);
var ex = first__70937__$1;
var first__70937__$2 = cljs.core.first(seq__70936__$2);
var seq__70936__$3 = cljs.core.next(seq__70936__$2);
var binding = first__70937__$2;
var body__$2 = seq__70936__$3;
var temp__5751__auto__ = sci.impl.interop.resolve_class(ctx,ex);
if(cljs.core.truth_(temp__5751__auto__)){
var clazz = temp__5751__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),clazz,new cljs.core.Keyword(null,"binding","binding",539932593),binding,new cljs.core.Keyword(null,"body","body",-2049205669),(function (){var G__70938 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),binding], null),null);
var G__70939 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body__$2);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__70938,G__70939) : sci.impl.analyzer.analyze.call(null,G__70938,G__70939));
})()], null);
} else {
return sci.impl.analyzer.throw_error_with_location(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ex)].join(''),ex);
}
}),catches);
var finally$__$1 = (cljs.core.truth_(finally$)?(function (){var G__70941 = ctx;
var G__70942 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.rest(finally$));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__70941,G__70942) : sci.impl.analyzer.analyze.call(null,G__70941,G__70942));
})():null);
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"body","body",-2049205669),body__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617),catches__$1,new cljs.core.Keyword(null,"finally","finally",1589088705),finally$__$1], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"try","try",1380742522)], null));
});
sci.impl.analyzer.expand_declare = (function sci$impl$analyzer$expand_declare(ctx,p__70944){
var vec__70945 = p__70944;
var seq__70946 = cljs.core.seq(vec__70945);
var first__70947 = cljs.core.first(seq__70946);
var seq__70946__$1 = cljs.core.next(seq__70946);
var _declare = first__70947;
var names = seq__70946__$1;
var expr = vec__70945;
var cnn_73155 = sci.impl.vars.current_ns_name();
var env_73156 = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var the_current_ns_73157 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(env_73156),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_73155], null));
var refers_73158 = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns_73157);
var the_current_ns_73159__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,name){
var temp__5751__auto__ = (function (){var and__4115__auto__ = refers_73158;
if(cljs.core.truth_(and__4115__auto__)){
return refers_73158.get(name);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var x = temp__5751__auto__;
return sci.impl.analyzer.throw_error_with_location([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," already refers to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," in namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn_73155)].join(''),expr);
} else {
if(cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns_73157,name))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,name,(function (){var G__70951 = sci.impl.vars.__GT_SciVar(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn_73155),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], null),false);
G__70951.sci$impl$vars$IVar$unbind$arity$1(null);

return G__70951;
})());
} else {
return the_current_ns_73157;
}
}
}),the_current_ns_73157,names);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_73156,(function (env__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.assoc,cnn_73155,the_current_ns_73159__$1);
}));

return null;
});
sci.impl.analyzer.expand_dot = (function sci$impl$analyzer$expand_dot(ctx,p__70960){
var vec__70962 = p__70960;
var seq__70963 = cljs.core.seq(vec__70962);
var first__70964 = cljs.core.first(seq__70963);
var seq__70963__$1 = cljs.core.next(seq__70963);
var _dot = first__70964;
var first__70964__$1 = cljs.core.first(seq__70963__$1);
var seq__70963__$2 = cljs.core.next(seq__70963__$1);
var instance_expr = first__70964__$1;
var first__70964__$2 = cljs.core.first(seq__70963__$2);
var seq__70963__$3 = cljs.core.next(seq__70963__$2);
var method_expr = first__70964__$2;
var args = seq__70963__$3;
var _expr = vec__70962;
var vec__70965 = ((cljs.core.seq_QMARK_(method_expr))?method_expr:cljs.core.cons(method_expr,args));
var seq__70966 = cljs.core.seq(vec__70965);
var first__70967 = cljs.core.first(seq__70966);
var seq__70966__$1 = cljs.core.next(seq__70966);
var method_expr__$1 = first__70967;
var args__$1 = seq__70966__$1;
var instance_expr__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,instance_expr) : sci.impl.analyzer.analyze.call(null,ctx,instance_expr));
var instance_expr__$2 = sci.impl.utils.vary_meta_STAR_(instance_expr__$1,(function (m){
var temp__5751__auto__ = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5751__auto__)){
var t = temp__5751__auto__;
var clazz = (function (){var or__4126__auto__ = sci.impl.interop.resolve_class(ctx,t);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = sci.impl.records.resolve_record_class(ctx,t);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return sci.impl.analyzer.throw_error_with_location(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''),t);
}
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"tag-class","tag-class",714967874),clazz);
} else {
return m;
}
}));
var method_expr__$2 = cljs.core.name(method_expr__$1);
var args__$2 = ((args__$1)?sci.impl.analyzer.analyze_children(ctx,args__$1):null);
var res = sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,instance_expr__$2,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,method_expr__$2,null,(1),null)),(new cljs.core.List(null,args__$2,null,(1),null))], 0)))));
return res;
});
/**
 * Expands (. x method)
 */
sci.impl.analyzer.expand_dot_STAR__STAR_ = (function sci$impl$analyzer$expand_dot_STAR__STAR_(ctx,expr){
if((cljs.core.count(expr) < (3))){
throw (new Error("Malformed member expression, expecting (.member target ...)"));
} else {
}

return sci.impl.analyzer.expand_dot(ctx,expr);
});
/**
 * Expands (.foo x)
 */
sci.impl.analyzer.expand_dot_STAR_ = (function sci$impl$analyzer$expand_dot_STAR_(ctx,p__70987){
var vec__70992 = p__70987;
var seq__70993 = cljs.core.seq(vec__70992);
var first__70994 = cljs.core.first(seq__70993);
var seq__70993__$1 = cljs.core.next(seq__70993);
var method_name = first__70994;
var first__70994__$1 = cljs.core.first(seq__70993__$1);
var seq__70993__$2 = cljs.core.next(seq__70993__$1);
var obj = first__70994__$1;
var args = seq__70993__$2;
var expr = vec__70992;
if((cljs.core.count(expr) < (2))){
throw (new Error("Malformed member expression, expecting (.member target ...)"));
} else {
}

return sci.impl.analyzer.expand_dot(ctx,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),(new cljs.core.List(null,obj,(new cljs.core.List(null,cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.name(method_name),(1))),args),null,(1),null)),(2),null)),(3),null)));
});
sci.impl.analyzer.expand_new = (function sci$impl$analyzer$expand_new(ctx,p__71000){
var vec__71003 = p__71000;
var seq__71004 = cljs.core.seq(vec__71003);
var first__71005 = cljs.core.first(seq__71004);
var seq__71004__$1 = cljs.core.next(seq__71004);
var _new = first__71005;
var first__71005__$1 = cljs.core.first(seq__71004__$1);
var seq__71004__$2 = cljs.core.next(seq__71004__$1);
var class_sym = first__71005__$1;
var args = seq__71004__$2;
var _expr = vec__71003;
var temp__5751__auto__ = sci.impl.interop.resolve_class_opts(ctx,class_sym);
if(cljs.core.truth_(temp__5751__auto__)){
var map__71013 = temp__5751__auto__;
var map__71013__$1 = (((((!((map__71013 == null))))?(((((map__71013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71013):map__71013);
var _opts = map__71013__$1;
var constructor$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71013__$1,new cljs.core.Keyword(null,"constructor","constructor",-1953928811));
var args__$1 = sci.impl.analyzer.analyze_children(ctx,args);
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),(new cljs.core.List(null,constructor$,(new cljs.core.List(null,args__$1,null,(1),null)),(2),null)),(3),null)));
} else {
var temp__5751__auto____$1 = sci.impl.records.resolve_record_class(ctx,class_sym);
if(cljs.core.truth_(temp__5751__auto____$1)){
var record = temp__5751__auto____$1;
var args__$1 = sci.impl.analyzer.analyze_children(ctx,args);
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl.record","constructor","sci.impl.record/constructor",-2025684209).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(record)),args__$1));
} else {
return sci.impl.analyzer.throw_error_with_location(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_sym)].join(''),class_sym);
}
}
});
sci.impl.analyzer.expand_constructor = (function sci$impl$analyzer$expand_constructor(ctx,p__71035){
var vec__71039 = p__71035;
var seq__71040 = cljs.core.seq(vec__71039);
var first__71041 = cljs.core.first(seq__71040);
var seq__71040__$1 = cljs.core.next(seq__71040);
var constructor_sym = first__71041;
var args = seq__71040__$1;
var constructor_name = cljs.core.name(constructor_sym);
var class_sym = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(constructor_name,(0),(((constructor_name).length) - (1)))),cljs.core.meta(constructor_sym));
return sci.impl.analyzer.expand_new(ctx,cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"new","new",-444906321,null),class_sym,args),cljs.core.meta(constructor_sym)));
});
sci.impl.analyzer.analyze_ns_form = (function sci$impl$analyzer$analyze_ns_form(ctx,p__71053){
var vec__71058 = p__71053;
var seq__71059 = cljs.core.seq(vec__71058);
var first__71060 = cljs.core.first(seq__71059);
var seq__71059__$1 = cljs.core.next(seq__71059);
var _ns = first__71060;
var first__71060__$1 = cljs.core.first(seq__71059__$1);
var seq__71059__$2 = cljs.core.next(seq__71059__$1);
var ns_name = first__71060__$1;
var exprs = seq__71059__$2;
var expr = vec__71058;
if((ns_name instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Namespace name must be symbol, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns_name], 0))].join('')));
}

var vec__71068 = (function (){var fexpr = cljs.core.first(exprs);
if(typeof fexpr === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fexpr,cljs.core.next(exprs)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,exprs], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71068,(0),null);
var exprs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71068,(1),null);
var vec__71071 = (function (){var m = cljs.core.first(exprs__$1);
if(cljs.core.map_QMARK_(m)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,cljs.core.next(exprs__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,exprs__$1], null);
}
})();
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71071,(0),null);
var exprs__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71071,(1),null);
var attr_map__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attr_map,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):attr_map);
sci.impl.utils.set_namespace_BANG_(ctx,ns_name,attr_map__$1);

var exprs__$3 = exprs__$2;
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(exprs__$3)){
var vec__71097 = cljs.core.first(exprs__$3);
var seq__71098 = cljs.core.seq(vec__71097);
var first__71099 = cljs.core.first(seq__71098);
var seq__71098__$1 = cljs.core.next(seq__71098);
var k = first__71099;
var args = seq__71098__$1;
var expr__$1 = vec__71097;
var G__71101 = k;
var G__71101__$1 = (((G__71101 instanceof cljs.core.Keyword))?G__71101.fqn:null);
switch (G__71101__$1) {
case "require":
case "use":
var G__73186 = cljs.core.next(exprs__$3);
var G__73187 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),args),cljs.core.meta(expr__$1))));
exprs__$3 = G__73186;
ret = G__73187;
continue;

break;
case "import":
var G__73188 = cljs.core.next(exprs__$3);
var G__73189 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"import","import",241030818,null),args),cljs.core.meta(expr__$1))));
exprs__$3 = G__73188;
ret = G__73189;
continue;

break;
case "refer-clojure":
var G__73191 = cljs.core.next(exprs__$3);
var G__73192 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"refer","refer",676235974,null),new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),args),cljs.core.meta(expr__$1))));
exprs__$3 = G__73191;
ret = G__73192;
continue;

break;
case "gen-class":
var G__73193 = cljs.core.next(exprs__$3);
var G__73194 = ret;
exprs__$3 = G__73193;
ret = G__73194;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__71101__$1)].join('')));

}
} else {
return sci.impl.analyzer.return_do(expr,ret);
}
break;
}
});
sci.impl.analyzer.analyze_var = (function sci$impl$analyzer$analyze_var(ctx,p__71111){
var vec__71112 = p__71111;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71112,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71112,(1),null);
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","prevent-deref","sci.impl/prevent-deref",-1401491385),true),var_name);
});
sci.impl.analyzer.analyze_set_BANG_ = (function sci$impl$analyzer$analyze_set_BANG_(ctx,p__71138){
var vec__71139 = p__71138;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71139,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71139,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71139,(2),null);
var obj__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.analyzer.analyze.call(null,ctx,obj));
var v__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.analyzer.analyze.call(null,ctx,v));
var obj__$2 = sci.impl.types.getVal(obj__$1);
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),(new cljs.core.List(null,obj__$2,(new cljs.core.List(null,v__$1,null,(1),null)),(2),null)),(3),null)));
});
sci.impl.analyzer.return_binding_call = (function sci$impl$analyzer$return_binding_call(_ctx,expr,f,analyzed_children){
return sci.impl.utils.ctx_fn((function (){var G__71157 = cljs.core.count(analyzed_children);
switch (G__71157) {
case (0):
return (function (ctx){
var fexpr__71167 = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192)).get(f);
return (fexpr__71167.cljs$core$IFn$_invoke$arity$0 ? fexpr__71167.cljs$core$IFn$_invoke$arity$0() : fexpr__71167.call(null));
});

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
return (function (ctx){
var G__71169 = sci.impl.evaluator.eval(ctx,arg0);
var fexpr__71168 = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192)).get(f);
return (fexpr__71168.cljs$core$IFn$_invoke$arity$1 ? fexpr__71168.cljs$core$IFn$_invoke$arity$1(G__71169) : fexpr__71168.call(null,G__71169));
});

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return (function (ctx){
var G__71177 = sci.impl.evaluator.eval(ctx,arg0);
var G__71178 = sci.impl.evaluator.eval(ctx,arg1);
var fexpr__71176 = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192)).get(f);
return (fexpr__71176.cljs$core$IFn$_invoke$arity$2 ? fexpr__71176.cljs$core$IFn$_invoke$arity$2(G__71177,G__71178) : fexpr__71176.call(null,G__71177,G__71178));
});

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return (function (ctx){
var G__71182 = sci.impl.evaluator.eval(ctx,arg0);
var G__71183 = sci.impl.evaluator.eval(ctx,arg1);
var G__71184 = sci.impl.evaluator.eval(ctx,arg2);
var fexpr__71181 = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192)).get(f);
return (fexpr__71181.cljs$core$IFn$_invoke$arity$3 ? fexpr__71181.cljs$core$IFn$_invoke$arity$3(G__71182,G__71183,G__71184) : fexpr__71181.call(null,G__71182,G__71183,G__71184));
});

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return (function (ctx){
var G__71193 = sci.impl.evaluator.eval(ctx,arg0);
var G__71194 = sci.impl.evaluator.eval(ctx,arg1);
var G__71195 = sci.impl.evaluator.eval(ctx,arg2);
var G__71196 = sci.impl.evaluator.eval(ctx,arg3);
var fexpr__71192 = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192)).get(f);
return (fexpr__71192.cljs$core$IFn$_invoke$arity$4 ? fexpr__71192.cljs$core$IFn$_invoke$arity$4(G__71193,G__71194,G__71195,G__71196) : fexpr__71192.call(null,G__71193,G__71194,G__71195,G__71196));
});

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return (function (ctx){
var G__71205 = sci.impl.evaluator.eval(ctx,arg0);
var G__71206 = sci.impl.evaluator.eval(ctx,arg1);
var G__71207 = sci.impl.evaluator.eval(ctx,arg2);
var G__71208 = sci.impl.evaluator.eval(ctx,arg3);
var G__71209 = sci.impl.evaluator.eval(ctx,arg4);
var fexpr__71204 = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192)).get(f);
return (fexpr__71204.cljs$core$IFn$_invoke$arity$5 ? fexpr__71204.cljs$core$IFn$_invoke$arity$5(G__71205,G__71206,G__71207,G__71208,G__71209) : fexpr__71204.call(null,G__71205,G__71206,G__71207,G__71208,G__71209));
});

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
return (function (ctx){
var G__71224 = sci.impl.evaluator.eval(ctx,arg0);
var G__71225 = sci.impl.evaluator.eval(ctx,arg1);
var G__71226 = sci.impl.evaluator.eval(ctx,arg2);
var G__71227 = sci.impl.evaluator.eval(ctx,arg3);
var G__71228 = sci.impl.evaluator.eval(ctx,arg4);
var G__71229 = sci.impl.evaluator.eval(ctx,arg5);
var fexpr__71223 = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192)).get(f);
return (fexpr__71223.cljs$core$IFn$_invoke$arity$6 ? fexpr__71223.cljs$core$IFn$_invoke$arity$6(G__71224,G__71225,G__71226,G__71227,G__71228,G__71229) : fexpr__71223.call(null,G__71224,G__71225,G__71226,G__71227,G__71228,G__71229));
});

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
return (function (ctx){
var G__71243 = sci.impl.evaluator.eval(ctx,arg0);
var G__71244 = sci.impl.evaluator.eval(ctx,arg1);
var G__71245 = sci.impl.evaluator.eval(ctx,arg2);
var G__71246 = sci.impl.evaluator.eval(ctx,arg3);
var G__71247 = sci.impl.evaluator.eval(ctx,arg4);
var G__71248 = sci.impl.evaluator.eval(ctx,arg5);
var G__71249 = sci.impl.evaluator.eval(ctx,arg6);
var fexpr__71242 = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192)).get(f);
return (fexpr__71242.cljs$core$IFn$_invoke$arity$7 ? fexpr__71242.cljs$core$IFn$_invoke$arity$7(G__71243,G__71244,G__71245,G__71246,G__71247,G__71248,G__71249) : fexpr__71242.call(null,G__71243,G__71244,G__71245,G__71246,G__71247,G__71248,G__71249));
});

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
return (function (ctx){
var G__71254 = sci.impl.evaluator.eval(ctx,arg0);
var G__71255 = sci.impl.evaluator.eval(ctx,arg1);
var G__71256 = sci.impl.evaluator.eval(ctx,arg2);
var G__71257 = sci.impl.evaluator.eval(ctx,arg3);
var G__71258 = sci.impl.evaluator.eval(ctx,arg4);
var G__71259 = sci.impl.evaluator.eval(ctx,arg5);
var G__71260 = sci.impl.evaluator.eval(ctx,arg6);
var G__71261 = sci.impl.evaluator.eval(ctx,arg7);
var fexpr__71253 = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192)).get(f);
return (fexpr__71253.cljs$core$IFn$_invoke$arity$8 ? fexpr__71253.cljs$core$IFn$_invoke$arity$8(G__71254,G__71255,G__71256,G__71257,G__71258,G__71259,G__71260,G__71261) : fexpr__71253.call(null,G__71254,G__71255,G__71256,G__71257,G__71258,G__71259,G__71260,G__71261));
});

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
return (function (ctx){
var G__71270 = sci.impl.evaluator.eval(ctx,arg0);
var G__71271 = sci.impl.evaluator.eval(ctx,arg1);
var G__71272 = sci.impl.evaluator.eval(ctx,arg2);
var G__71273 = sci.impl.evaluator.eval(ctx,arg3);
var G__71274 = sci.impl.evaluator.eval(ctx,arg4);
var G__71275 = sci.impl.evaluator.eval(ctx,arg5);
var G__71276 = sci.impl.evaluator.eval(ctx,arg6);
var G__71277 = sci.impl.evaluator.eval(ctx,arg7);
var G__71278 = sci.impl.evaluator.eval(ctx,arg8);
var fexpr__71269 = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192)).get(f);
return (fexpr__71269.cljs$core$IFn$_invoke$arity$9 ? fexpr__71269.cljs$core$IFn$_invoke$arity$9(G__71270,G__71271,G__71272,G__71273,G__71274,G__71275,G__71276,G__71277,G__71278) : fexpr__71269.call(null,G__71270,G__71271,G__71272,G__71273,G__71274,G__71275,G__71276,G__71277,G__71278));
});

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
return (function (ctx){
var G__71289 = sci.impl.evaluator.eval(ctx,arg0);
var G__71290 = sci.impl.evaluator.eval(ctx,arg1);
var G__71291 = sci.impl.evaluator.eval(ctx,arg2);
var G__71292 = sci.impl.evaluator.eval(ctx,arg3);
var G__71293 = sci.impl.evaluator.eval(ctx,arg4);
var G__71294 = sci.impl.evaluator.eval(ctx,arg5);
var G__71295 = sci.impl.evaluator.eval(ctx,arg6);
var G__71296 = sci.impl.evaluator.eval(ctx,arg7);
var G__71297 = sci.impl.evaluator.eval(ctx,arg8);
var G__71298 = sci.impl.evaluator.eval(ctx,arg9);
var fexpr__71288 = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192)).get(f);
return (fexpr__71288.cljs$core$IFn$_invoke$arity$10 ? fexpr__71288.cljs$core$IFn$_invoke$arity$10(G__71289,G__71290,G__71291,G__71292,G__71293,G__71294,G__71295,G__71296,G__71297,G__71298) : fexpr__71288.call(null,G__71289,G__71290,G__71291,G__71292,G__71293,G__71294,G__71295,G__71296,G__71297,G__71298));
});

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
return (function (ctx){
var G__71316 = sci.impl.evaluator.eval(ctx,arg0);
var G__71317 = sci.impl.evaluator.eval(ctx,arg1);
var G__71318 = sci.impl.evaluator.eval(ctx,arg2);
var G__71319 = sci.impl.evaluator.eval(ctx,arg3);
var G__71320 = sci.impl.evaluator.eval(ctx,arg4);
var G__71321 = sci.impl.evaluator.eval(ctx,arg5);
var G__71322 = sci.impl.evaluator.eval(ctx,arg6);
var G__71323 = sci.impl.evaluator.eval(ctx,arg7);
var G__71324 = sci.impl.evaluator.eval(ctx,arg8);
var G__71325 = sci.impl.evaluator.eval(ctx,arg9);
var G__71326 = sci.impl.evaluator.eval(ctx,arg10);
var fexpr__71315 = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192)).get(f);
return (fexpr__71315.cljs$core$IFn$_invoke$arity$11 ? fexpr__71315.cljs$core$IFn$_invoke$arity$11(G__71316,G__71317,G__71318,G__71319,G__71320,G__71321,G__71322,G__71323,G__71324,G__71325,G__71326) : fexpr__71315.call(null,G__71316,G__71317,G__71318,G__71319,G__71320,G__71321,G__71322,G__71323,G__71324,G__71325,G__71326));
});

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
return (function (ctx){
var G__71362 = sci.impl.evaluator.eval(ctx,arg0);
var G__71363 = sci.impl.evaluator.eval(ctx,arg1);
var G__71364 = sci.impl.evaluator.eval(ctx,arg2);
var G__71365 = sci.impl.evaluator.eval(ctx,arg3);
var G__71366 = sci.impl.evaluator.eval(ctx,arg4);
var G__71367 = sci.impl.evaluator.eval(ctx,arg5);
var G__71368 = sci.impl.evaluator.eval(ctx,arg6);
var G__71369 = sci.impl.evaluator.eval(ctx,arg7);
var G__71370 = sci.impl.evaluator.eval(ctx,arg8);
var G__71371 = sci.impl.evaluator.eval(ctx,arg9);
var G__71372 = sci.impl.evaluator.eval(ctx,arg10);
var G__71373 = sci.impl.evaluator.eval(ctx,arg11);
var fexpr__71361 = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192)).get(f);
return (fexpr__71361.cljs$core$IFn$_invoke$arity$12 ? fexpr__71361.cljs$core$IFn$_invoke$arity$12(G__71362,G__71363,G__71364,G__71365,G__71366,G__71367,G__71368,G__71369,G__71370,G__71371,G__71372,G__71373) : fexpr__71361.call(null,G__71362,G__71363,G__71364,G__71365,G__71366,G__71367,G__71368,G__71369,G__71370,G__71371,G__71372,G__71373));
});

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
return (function (ctx){
var G__71402 = sci.impl.evaluator.eval(ctx,arg0);
var G__71403 = sci.impl.evaluator.eval(ctx,arg1);
var G__71404 = sci.impl.evaluator.eval(ctx,arg2);
var G__71405 = sci.impl.evaluator.eval(ctx,arg3);
var G__71406 = sci.impl.evaluator.eval(ctx,arg4);
var G__71407 = sci.impl.evaluator.eval(ctx,arg5);
var G__71408 = sci.impl.evaluator.eval(ctx,arg6);
var G__71409 = sci.impl.evaluator.eval(ctx,arg7);
var G__71410 = sci.impl.evaluator.eval(ctx,arg8);
var G__71411 = sci.impl.evaluator.eval(ctx,arg9);
var G__71412 = sci.impl.evaluator.eval(ctx,arg10);
var G__71413 = sci.impl.evaluator.eval(ctx,arg11);
var G__71414 = sci.impl.evaluator.eval(ctx,arg12);
var fexpr__71401 = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192)).get(f);
return (fexpr__71401.cljs$core$IFn$_invoke$arity$13 ? fexpr__71401.cljs$core$IFn$_invoke$arity$13(G__71402,G__71403,G__71404,G__71405,G__71406,G__71407,G__71408,G__71409,G__71410,G__71411,G__71412,G__71413,G__71414) : fexpr__71401.call(null,G__71402,G__71403,G__71404,G__71405,G__71406,G__71407,G__71408,G__71409,G__71410,G__71411,G__71412,G__71413,G__71414));
});

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
return (function (ctx){
var G__71427 = sci.impl.evaluator.eval(ctx,arg0);
var G__71428 = sci.impl.evaluator.eval(ctx,arg1);
var G__71429 = sci.impl.evaluator.eval(ctx,arg2);
var G__71431 = sci.impl.evaluator.eval(ctx,arg3);
var G__71432 = sci.impl.evaluator.eval(ctx,arg4);
var G__71433 = sci.impl.evaluator.eval(ctx,arg5);
var G__71435 = sci.impl.evaluator.eval(ctx,arg6);
var G__71436 = sci.impl.evaluator.eval(ctx,arg7);
var G__71437 = sci.impl.evaluator.eval(ctx,arg8);
var G__71438 = sci.impl.evaluator.eval(ctx,arg9);
var G__71440 = sci.impl.evaluator.eval(ctx,arg10);
var G__71441 = sci.impl.evaluator.eval(ctx,arg11);
var G__71443 = sci.impl.evaluator.eval(ctx,arg12);
var G__71444 = sci.impl.evaluator.eval(ctx,arg13);
var fexpr__71426 = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192)).get(f);
return (fexpr__71426.cljs$core$IFn$_invoke$arity$14 ? fexpr__71426.cljs$core$IFn$_invoke$arity$14(G__71427,G__71428,G__71429,G__71431,G__71432,G__71433,G__71435,G__71436,G__71437,G__71438,G__71440,G__71441,G__71443,G__71444) : fexpr__71426.call(null,G__71427,G__71428,G__71429,G__71431,G__71432,G__71433,G__71435,G__71436,G__71437,G__71438,G__71440,G__71441,G__71443,G__71444));
});

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
return (function (ctx){
var G__71466 = sci.impl.evaluator.eval(ctx,arg0);
var G__71467 = sci.impl.evaluator.eval(ctx,arg1);
var G__71468 = sci.impl.evaluator.eval(ctx,arg2);
var G__71469 = sci.impl.evaluator.eval(ctx,arg3);
var G__71470 = sci.impl.evaluator.eval(ctx,arg4);
var G__71471 = sci.impl.evaluator.eval(ctx,arg5);
var G__71472 = sci.impl.evaluator.eval(ctx,arg6);
var G__71473 = sci.impl.evaluator.eval(ctx,arg7);
var G__71474 = sci.impl.evaluator.eval(ctx,arg8);
var G__71475 = sci.impl.evaluator.eval(ctx,arg9);
var G__71476 = sci.impl.evaluator.eval(ctx,arg10);
var G__71477 = sci.impl.evaluator.eval(ctx,arg11);
var G__71478 = sci.impl.evaluator.eval(ctx,arg12);
var G__71479 = sci.impl.evaluator.eval(ctx,arg13);
var G__71480 = sci.impl.evaluator.eval(ctx,arg14);
var fexpr__71465 = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192)).get(f);
return (fexpr__71465.cljs$core$IFn$_invoke$arity$15 ? fexpr__71465.cljs$core$IFn$_invoke$arity$15(G__71466,G__71467,G__71468,G__71469,G__71470,G__71471,G__71472,G__71473,G__71474,G__71475,G__71476,G__71477,G__71478,G__71479,G__71480) : fexpr__71465.call(null,G__71466,G__71467,G__71468,G__71469,G__71470,G__71471,G__71472,G__71473,G__71474,G__71475,G__71476,G__71477,G__71478,G__71479,G__71480));
});

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
return (function (ctx){
var G__71503 = sci.impl.evaluator.eval(ctx,arg0);
var G__71504 = sci.impl.evaluator.eval(ctx,arg1);
var G__71505 = sci.impl.evaluator.eval(ctx,arg2);
var G__71506 = sci.impl.evaluator.eval(ctx,arg3);
var G__71507 = sci.impl.evaluator.eval(ctx,arg4);
var G__71508 = sci.impl.evaluator.eval(ctx,arg5);
var G__71509 = sci.impl.evaluator.eval(ctx,arg6);
var G__71510 = sci.impl.evaluator.eval(ctx,arg7);
var G__71511 = sci.impl.evaluator.eval(ctx,arg8);
var G__71512 = sci.impl.evaluator.eval(ctx,arg9);
var G__71513 = sci.impl.evaluator.eval(ctx,arg10);
var G__71514 = sci.impl.evaluator.eval(ctx,arg11);
var G__71515 = sci.impl.evaluator.eval(ctx,arg12);
var G__71516 = sci.impl.evaluator.eval(ctx,arg13);
var G__71517 = sci.impl.evaluator.eval(ctx,arg14);
var G__71518 = sci.impl.evaluator.eval(ctx,arg15);
var fexpr__71502 = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192)).get(f);
return (fexpr__71502.cljs$core$IFn$_invoke$arity$16 ? fexpr__71502.cljs$core$IFn$_invoke$arity$16(G__71503,G__71504,G__71505,G__71506,G__71507,G__71508,G__71509,G__71510,G__71511,G__71512,G__71513,G__71514,G__71515,G__71516,G__71517,G__71518) : fexpr__71502.call(null,G__71503,G__71504,G__71505,G__71506,G__71507,G__71508,G__71509,G__71510,G__71511,G__71512,G__71513,G__71514,G__71515,G__71516,G__71517,G__71518));
});

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
return (function (ctx){
var G__71539 = sci.impl.evaluator.eval(ctx,arg0);
var G__71540 = sci.impl.evaluator.eval(ctx,arg1);
var G__71541 = sci.impl.evaluator.eval(ctx,arg2);
var G__71542 = sci.impl.evaluator.eval(ctx,arg3);
var G__71543 = sci.impl.evaluator.eval(ctx,arg4);
var G__71544 = sci.impl.evaluator.eval(ctx,arg5);
var G__71545 = sci.impl.evaluator.eval(ctx,arg6);
var G__71546 = sci.impl.evaluator.eval(ctx,arg7);
var G__71547 = sci.impl.evaluator.eval(ctx,arg8);
var G__71548 = sci.impl.evaluator.eval(ctx,arg9);
var G__71549 = sci.impl.evaluator.eval(ctx,arg10);
var G__71550 = sci.impl.evaluator.eval(ctx,arg11);
var G__71551 = sci.impl.evaluator.eval(ctx,arg12);
var G__71552 = sci.impl.evaluator.eval(ctx,arg13);
var G__71553 = sci.impl.evaluator.eval(ctx,arg14);
var G__71554 = sci.impl.evaluator.eval(ctx,arg15);
var G__71555 = sci.impl.evaluator.eval(ctx,arg16);
var fexpr__71538 = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192)).get(f);
return (fexpr__71538.cljs$core$IFn$_invoke$arity$17 ? fexpr__71538.cljs$core$IFn$_invoke$arity$17(G__71539,G__71540,G__71541,G__71542,G__71543,G__71544,G__71545,G__71546,G__71547,G__71548,G__71549,G__71550,G__71551,G__71552,G__71553,G__71554,G__71555) : fexpr__71538.call(null,G__71539,G__71540,G__71541,G__71542,G__71543,G__71544,G__71545,G__71546,G__71547,G__71548,G__71549,G__71550,G__71551,G__71552,G__71553,G__71554,G__71555));
});

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
return (function (ctx){
var G__71570 = sci.impl.evaluator.eval(ctx,arg0);
var G__71571 = sci.impl.evaluator.eval(ctx,arg1);
var G__71572 = sci.impl.evaluator.eval(ctx,arg2);
var G__71573 = sci.impl.evaluator.eval(ctx,arg3);
var G__71574 = sci.impl.evaluator.eval(ctx,arg4);
var G__71575 = sci.impl.evaluator.eval(ctx,arg5);
var G__71576 = sci.impl.evaluator.eval(ctx,arg6);
var G__71577 = sci.impl.evaluator.eval(ctx,arg7);
var G__71578 = sci.impl.evaluator.eval(ctx,arg8);
var G__71579 = sci.impl.evaluator.eval(ctx,arg9);
var G__71580 = sci.impl.evaluator.eval(ctx,arg10);
var G__71581 = sci.impl.evaluator.eval(ctx,arg11);
var G__71582 = sci.impl.evaluator.eval(ctx,arg12);
var G__71583 = sci.impl.evaluator.eval(ctx,arg13);
var G__71584 = sci.impl.evaluator.eval(ctx,arg14);
var G__71585 = sci.impl.evaluator.eval(ctx,arg15);
var G__71586 = sci.impl.evaluator.eval(ctx,arg16);
var G__71587 = sci.impl.evaluator.eval(ctx,arg17);
var fexpr__71569 = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192)).get(f);
return (fexpr__71569.cljs$core$IFn$_invoke$arity$18 ? fexpr__71569.cljs$core$IFn$_invoke$arity$18(G__71570,G__71571,G__71572,G__71573,G__71574,G__71575,G__71576,G__71577,G__71578,G__71579,G__71580,G__71581,G__71582,G__71583,G__71584,G__71585,G__71586,G__71587) : fexpr__71569.call(null,G__71570,G__71571,G__71572,G__71573,G__71574,G__71575,G__71576,G__71577,G__71578,G__71579,G__71580,G__71581,G__71582,G__71583,G__71584,G__71585,G__71586,G__71587));
});

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
return (function (ctx){
var G__71600 = sci.impl.evaluator.eval(ctx,arg0);
var G__71601 = sci.impl.evaluator.eval(ctx,arg1);
var G__71602 = sci.impl.evaluator.eval(ctx,arg2);
var G__71603 = sci.impl.evaluator.eval(ctx,arg3);
var G__71604 = sci.impl.evaluator.eval(ctx,arg4);
var G__71605 = sci.impl.evaluator.eval(ctx,arg5);
var G__71606 = sci.impl.evaluator.eval(ctx,arg6);
var G__71607 = sci.impl.evaluator.eval(ctx,arg7);
var G__71608 = sci.impl.evaluator.eval(ctx,arg8);
var G__71609 = sci.impl.evaluator.eval(ctx,arg9);
var G__71610 = sci.impl.evaluator.eval(ctx,arg10);
var G__71611 = sci.impl.evaluator.eval(ctx,arg11);
var G__71612 = sci.impl.evaluator.eval(ctx,arg12);
var G__71613 = sci.impl.evaluator.eval(ctx,arg13);
var G__71614 = sci.impl.evaluator.eval(ctx,arg14);
var G__71615 = sci.impl.evaluator.eval(ctx,arg15);
var G__71616 = sci.impl.evaluator.eval(ctx,arg16);
var G__71617 = sci.impl.evaluator.eval(ctx,arg17);
var G__71618 = sci.impl.evaluator.eval(ctx,arg18);
var fexpr__71599 = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192)).get(f);
return (fexpr__71599.cljs$core$IFn$_invoke$arity$19 ? fexpr__71599.cljs$core$IFn$_invoke$arity$19(G__71600,G__71601,G__71602,G__71603,G__71604,G__71605,G__71606,G__71607,G__71608,G__71609,G__71610,G__71611,G__71612,G__71613,G__71614,G__71615,G__71616,G__71617,G__71618) : fexpr__71599.call(null,G__71600,G__71601,G__71602,G__71603,G__71604,G__71605,G__71606,G__71607,G__71608,G__71609,G__71610,G__71611,G__71612,G__71613,G__71614,G__71615,G__71616,G__71617,G__71618));
});

break;
default:
return (function (ctx){
return sci.impl.evaluator.fn_call(ctx,ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192)).get(f),analyzed_children);
});

}
})(),expr);
});
sci.impl.analyzer.return_needs_ctx_call = (function sci$impl$analyzer$return_needs_ctx_call(_ctx,expr,f,analyzed_children){
return sci.impl.utils.ctx_fn((function (){var G__71635 = cljs.core.count(analyzed_children);
switch (G__71635) {
case (0):
return (function (ctx){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(ctx) : f.call(null,ctx));
});

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
return (function (ctx){
var G__71642 = ctx;
var G__71643 = sci.impl.evaluator.eval(ctx,arg0);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__71642,G__71643) : f.call(null,G__71642,G__71643));
});

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return (function (ctx){
var G__71644 = ctx;
var G__71645 = sci.impl.evaluator.eval(ctx,arg0);
var G__71646 = sci.impl.evaluator.eval(ctx,arg1);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__71644,G__71645,G__71646) : f.call(null,G__71644,G__71645,G__71646));
});

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return (function (ctx){
var G__71650 = ctx;
var G__71651 = sci.impl.evaluator.eval(ctx,arg0);
var G__71652 = sci.impl.evaluator.eval(ctx,arg1);
var G__71653 = sci.impl.evaluator.eval(ctx,arg2);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__71650,G__71651,G__71652,G__71653) : f.call(null,G__71650,G__71651,G__71652,G__71653));
});

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return (function (ctx){
var G__71657 = ctx;
var G__71658 = sci.impl.evaluator.eval(ctx,arg0);
var G__71659 = sci.impl.evaluator.eval(ctx,arg1);
var G__71660 = sci.impl.evaluator.eval(ctx,arg2);
var G__71661 = sci.impl.evaluator.eval(ctx,arg3);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__71657,G__71658,G__71659,G__71660,G__71661) : f.call(null,G__71657,G__71658,G__71659,G__71660,G__71661));
});

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return (function (ctx){
var G__71662 = ctx;
var G__71663 = sci.impl.evaluator.eval(ctx,arg0);
var G__71664 = sci.impl.evaluator.eval(ctx,arg1);
var G__71665 = sci.impl.evaluator.eval(ctx,arg2);
var G__71666 = sci.impl.evaluator.eval(ctx,arg3);
var G__71667 = sci.impl.evaluator.eval(ctx,arg4);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__71662,G__71663,G__71664,G__71665,G__71666,G__71667) : f.call(null,G__71662,G__71663,G__71664,G__71665,G__71666,G__71667));
});

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
return (function (ctx){
var G__71670 = ctx;
var G__71671 = sci.impl.evaluator.eval(ctx,arg0);
var G__71672 = sci.impl.evaluator.eval(ctx,arg1);
var G__71673 = sci.impl.evaluator.eval(ctx,arg2);
var G__71674 = sci.impl.evaluator.eval(ctx,arg3);
var G__71675 = sci.impl.evaluator.eval(ctx,arg4);
var G__71676 = sci.impl.evaluator.eval(ctx,arg5);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(G__71670,G__71671,G__71672,G__71673,G__71674,G__71675,G__71676) : f.call(null,G__71670,G__71671,G__71672,G__71673,G__71674,G__71675,G__71676));
});

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
return (function (ctx){
var G__71682 = ctx;
var G__71683 = sci.impl.evaluator.eval(ctx,arg0);
var G__71684 = sci.impl.evaluator.eval(ctx,arg1);
var G__71685 = sci.impl.evaluator.eval(ctx,arg2);
var G__71686 = sci.impl.evaluator.eval(ctx,arg3);
var G__71687 = sci.impl.evaluator.eval(ctx,arg4);
var G__71688 = sci.impl.evaluator.eval(ctx,arg5);
var G__71689 = sci.impl.evaluator.eval(ctx,arg6);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(G__71682,G__71683,G__71684,G__71685,G__71686,G__71687,G__71688,G__71689) : f.call(null,G__71682,G__71683,G__71684,G__71685,G__71686,G__71687,G__71688,G__71689));
});

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
return (function (ctx){
var G__71692 = ctx;
var G__71693 = sci.impl.evaluator.eval(ctx,arg0);
var G__71694 = sci.impl.evaluator.eval(ctx,arg1);
var G__71695 = sci.impl.evaluator.eval(ctx,arg2);
var G__71696 = sci.impl.evaluator.eval(ctx,arg3);
var G__71697 = sci.impl.evaluator.eval(ctx,arg4);
var G__71698 = sci.impl.evaluator.eval(ctx,arg5);
var G__71699 = sci.impl.evaluator.eval(ctx,arg6);
var G__71700 = sci.impl.evaluator.eval(ctx,arg7);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(G__71692,G__71693,G__71694,G__71695,G__71696,G__71697,G__71698,G__71699,G__71700) : f.call(null,G__71692,G__71693,G__71694,G__71695,G__71696,G__71697,G__71698,G__71699,G__71700));
});

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
return (function (ctx){
var G__71703 = ctx;
var G__71704 = sci.impl.evaluator.eval(ctx,arg0);
var G__71705 = sci.impl.evaluator.eval(ctx,arg1);
var G__71706 = sci.impl.evaluator.eval(ctx,arg2);
var G__71707 = sci.impl.evaluator.eval(ctx,arg3);
var G__71708 = sci.impl.evaluator.eval(ctx,arg4);
var G__71709 = sci.impl.evaluator.eval(ctx,arg5);
var G__71710 = sci.impl.evaluator.eval(ctx,arg6);
var G__71711 = sci.impl.evaluator.eval(ctx,arg7);
var G__71712 = sci.impl.evaluator.eval(ctx,arg8);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(G__71703,G__71704,G__71705,G__71706,G__71707,G__71708,G__71709,G__71710,G__71711,G__71712) : f.call(null,G__71703,G__71704,G__71705,G__71706,G__71707,G__71708,G__71709,G__71710,G__71711,G__71712));
});

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
return (function (ctx){
var G__71717 = ctx;
var G__71718 = sci.impl.evaluator.eval(ctx,arg0);
var G__71719 = sci.impl.evaluator.eval(ctx,arg1);
var G__71720 = sci.impl.evaluator.eval(ctx,arg2);
var G__71721 = sci.impl.evaluator.eval(ctx,arg3);
var G__71722 = sci.impl.evaluator.eval(ctx,arg4);
var G__71723 = sci.impl.evaluator.eval(ctx,arg5);
var G__71724 = sci.impl.evaluator.eval(ctx,arg6);
var G__71725 = sci.impl.evaluator.eval(ctx,arg7);
var G__71726 = sci.impl.evaluator.eval(ctx,arg8);
var G__71727 = sci.impl.evaluator.eval(ctx,arg9);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(G__71717,G__71718,G__71719,G__71720,G__71721,G__71722,G__71723,G__71724,G__71725,G__71726,G__71727) : f.call(null,G__71717,G__71718,G__71719,G__71720,G__71721,G__71722,G__71723,G__71724,G__71725,G__71726,G__71727));
});

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
return (function (ctx){
var G__71735 = ctx;
var G__71736 = sci.impl.evaluator.eval(ctx,arg0);
var G__71737 = sci.impl.evaluator.eval(ctx,arg1);
var G__71738 = sci.impl.evaluator.eval(ctx,arg2);
var G__71739 = sci.impl.evaluator.eval(ctx,arg3);
var G__71740 = sci.impl.evaluator.eval(ctx,arg4);
var G__71741 = sci.impl.evaluator.eval(ctx,arg5);
var G__71742 = sci.impl.evaluator.eval(ctx,arg6);
var G__71743 = sci.impl.evaluator.eval(ctx,arg7);
var G__71744 = sci.impl.evaluator.eval(ctx,arg8);
var G__71745 = sci.impl.evaluator.eval(ctx,arg9);
var G__71746 = sci.impl.evaluator.eval(ctx,arg10);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(G__71735,G__71736,G__71737,G__71738,G__71739,G__71740,G__71741,G__71742,G__71743,G__71744,G__71745,G__71746) : f.call(null,G__71735,G__71736,G__71737,G__71738,G__71739,G__71740,G__71741,G__71742,G__71743,G__71744,G__71745,G__71746));
});

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
return (function (ctx){
var G__71757 = ctx;
var G__71758 = sci.impl.evaluator.eval(ctx,arg0);
var G__71759 = sci.impl.evaluator.eval(ctx,arg1);
var G__71760 = sci.impl.evaluator.eval(ctx,arg2);
var G__71761 = sci.impl.evaluator.eval(ctx,arg3);
var G__71762 = sci.impl.evaluator.eval(ctx,arg4);
var G__71763 = sci.impl.evaluator.eval(ctx,arg5);
var G__71764 = sci.impl.evaluator.eval(ctx,arg6);
var G__71765 = sci.impl.evaluator.eval(ctx,arg7);
var G__71766 = sci.impl.evaluator.eval(ctx,arg8);
var G__71767 = sci.impl.evaluator.eval(ctx,arg9);
var G__71768 = sci.impl.evaluator.eval(ctx,arg10);
var G__71769 = sci.impl.evaluator.eval(ctx,arg11);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(G__71757,G__71758,G__71759,G__71760,G__71761,G__71762,G__71763,G__71764,G__71765,G__71766,G__71767,G__71768,G__71769) : f.call(null,G__71757,G__71758,G__71759,G__71760,G__71761,G__71762,G__71763,G__71764,G__71765,G__71766,G__71767,G__71768,G__71769));
});

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
return (function (ctx){
var G__71773 = ctx;
var G__71774 = sci.impl.evaluator.eval(ctx,arg0);
var G__71775 = sci.impl.evaluator.eval(ctx,arg1);
var G__71776 = sci.impl.evaluator.eval(ctx,arg2);
var G__71777 = sci.impl.evaluator.eval(ctx,arg3);
var G__71778 = sci.impl.evaluator.eval(ctx,arg4);
var G__71779 = sci.impl.evaluator.eval(ctx,arg5);
var G__71780 = sci.impl.evaluator.eval(ctx,arg6);
var G__71781 = sci.impl.evaluator.eval(ctx,arg7);
var G__71782 = sci.impl.evaluator.eval(ctx,arg8);
var G__71783 = sci.impl.evaluator.eval(ctx,arg9);
var G__71784 = sci.impl.evaluator.eval(ctx,arg10);
var G__71785 = sci.impl.evaluator.eval(ctx,arg11);
var G__71786 = sci.impl.evaluator.eval(ctx,arg12);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(G__71773,G__71774,G__71775,G__71776,G__71777,G__71778,G__71779,G__71780,G__71781,G__71782,G__71783,G__71784,G__71785,G__71786) : f.call(null,G__71773,G__71774,G__71775,G__71776,G__71777,G__71778,G__71779,G__71780,G__71781,G__71782,G__71783,G__71784,G__71785,G__71786));
});

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
return (function (ctx){
var G__71789 = ctx;
var G__71790 = sci.impl.evaluator.eval(ctx,arg0);
var G__71791 = sci.impl.evaluator.eval(ctx,arg1);
var G__71792 = sci.impl.evaluator.eval(ctx,arg2);
var G__71793 = sci.impl.evaluator.eval(ctx,arg3);
var G__71794 = sci.impl.evaluator.eval(ctx,arg4);
var G__71795 = sci.impl.evaluator.eval(ctx,arg5);
var G__71796 = sci.impl.evaluator.eval(ctx,arg6);
var G__71797 = sci.impl.evaluator.eval(ctx,arg7);
var G__71798 = sci.impl.evaluator.eval(ctx,arg8);
var G__71799 = sci.impl.evaluator.eval(ctx,arg9);
var G__71800 = sci.impl.evaluator.eval(ctx,arg10);
var G__71801 = sci.impl.evaluator.eval(ctx,arg11);
var G__71802 = sci.impl.evaluator.eval(ctx,arg12);
var G__71803 = sci.impl.evaluator.eval(ctx,arg13);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(G__71789,G__71790,G__71791,G__71792,G__71793,G__71794,G__71795,G__71796,G__71797,G__71798,G__71799,G__71800,G__71801,G__71802,G__71803) : f.call(null,G__71789,G__71790,G__71791,G__71792,G__71793,G__71794,G__71795,G__71796,G__71797,G__71798,G__71799,G__71800,G__71801,G__71802,G__71803));
});

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
return (function (ctx){
var G__71805 = ctx;
var G__71806 = sci.impl.evaluator.eval(ctx,arg0);
var G__71807 = sci.impl.evaluator.eval(ctx,arg1);
var G__71808 = sci.impl.evaluator.eval(ctx,arg2);
var G__71809 = sci.impl.evaluator.eval(ctx,arg3);
var G__71810 = sci.impl.evaluator.eval(ctx,arg4);
var G__71811 = sci.impl.evaluator.eval(ctx,arg5);
var G__71812 = sci.impl.evaluator.eval(ctx,arg6);
var G__71813 = sci.impl.evaluator.eval(ctx,arg7);
var G__71814 = sci.impl.evaluator.eval(ctx,arg8);
var G__71815 = sci.impl.evaluator.eval(ctx,arg9);
var G__71816 = sci.impl.evaluator.eval(ctx,arg10);
var G__71817 = sci.impl.evaluator.eval(ctx,arg11);
var G__71818 = sci.impl.evaluator.eval(ctx,arg12);
var G__71819 = sci.impl.evaluator.eval(ctx,arg13);
var G__71820 = sci.impl.evaluator.eval(ctx,arg14);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(G__71805,G__71806,G__71807,G__71808,G__71809,G__71810,G__71811,G__71812,G__71813,G__71814,G__71815,G__71816,G__71817,G__71818,G__71819,G__71820) : f.call(null,G__71805,G__71806,G__71807,G__71808,G__71809,G__71810,G__71811,G__71812,G__71813,G__71814,G__71815,G__71816,G__71817,G__71818,G__71819,G__71820));
});

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
return (function (ctx){
var G__71824 = ctx;
var G__71825 = sci.impl.evaluator.eval(ctx,arg0);
var G__71826 = sci.impl.evaluator.eval(ctx,arg1);
var G__71827 = sci.impl.evaluator.eval(ctx,arg2);
var G__71828 = sci.impl.evaluator.eval(ctx,arg3);
var G__71829 = sci.impl.evaluator.eval(ctx,arg4);
var G__71830 = sci.impl.evaluator.eval(ctx,arg5);
var G__71831 = sci.impl.evaluator.eval(ctx,arg6);
var G__71832 = sci.impl.evaluator.eval(ctx,arg7);
var G__71833 = sci.impl.evaluator.eval(ctx,arg8);
var G__71834 = sci.impl.evaluator.eval(ctx,arg9);
var G__71835 = sci.impl.evaluator.eval(ctx,arg10);
var G__71836 = sci.impl.evaluator.eval(ctx,arg11);
var G__71837 = sci.impl.evaluator.eval(ctx,arg12);
var G__71838 = sci.impl.evaluator.eval(ctx,arg13);
var G__71839 = sci.impl.evaluator.eval(ctx,arg14);
var G__71840 = sci.impl.evaluator.eval(ctx,arg15);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(G__71824,G__71825,G__71826,G__71827,G__71828,G__71829,G__71830,G__71831,G__71832,G__71833,G__71834,G__71835,G__71836,G__71837,G__71838,G__71839,G__71840) : f.call(null,G__71824,G__71825,G__71826,G__71827,G__71828,G__71829,G__71830,G__71831,G__71832,G__71833,G__71834,G__71835,G__71836,G__71837,G__71838,G__71839,G__71840));
});

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
return (function (ctx){
var G__71844 = ctx;
var G__71845 = sci.impl.evaluator.eval(ctx,arg0);
var G__71846 = sci.impl.evaluator.eval(ctx,arg1);
var G__71847 = sci.impl.evaluator.eval(ctx,arg2);
var G__71848 = sci.impl.evaluator.eval(ctx,arg3);
var G__71849 = sci.impl.evaluator.eval(ctx,arg4);
var G__71850 = sci.impl.evaluator.eval(ctx,arg5);
var G__71851 = sci.impl.evaluator.eval(ctx,arg6);
var G__71852 = sci.impl.evaluator.eval(ctx,arg7);
var G__71853 = sci.impl.evaluator.eval(ctx,arg8);
var G__71854 = sci.impl.evaluator.eval(ctx,arg9);
var G__71855 = sci.impl.evaluator.eval(ctx,arg10);
var G__71856 = sci.impl.evaluator.eval(ctx,arg11);
var G__71857 = sci.impl.evaluator.eval(ctx,arg12);
var G__71858 = sci.impl.evaluator.eval(ctx,arg13);
var G__71859 = sci.impl.evaluator.eval(ctx,arg14);
var G__71860 = sci.impl.evaluator.eval(ctx,arg15);
var G__71861 = sci.impl.evaluator.eval(ctx,arg16);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(G__71844,G__71845,G__71846,G__71847,G__71848,G__71849,G__71850,G__71851,G__71852,G__71853,G__71854,G__71855,G__71856,G__71857,G__71858,G__71859,G__71860,G__71861) : f.call(null,G__71844,G__71845,G__71846,G__71847,G__71848,G__71849,G__71850,G__71851,G__71852,G__71853,G__71854,G__71855,G__71856,G__71857,G__71858,G__71859,G__71860,G__71861));
});

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
return (function (ctx){
var G__71870 = ctx;
var G__71871 = sci.impl.evaluator.eval(ctx,arg0);
var G__71872 = sci.impl.evaluator.eval(ctx,arg1);
var G__71873 = sci.impl.evaluator.eval(ctx,arg2);
var G__71874 = sci.impl.evaluator.eval(ctx,arg3);
var G__71875 = sci.impl.evaluator.eval(ctx,arg4);
var G__71876 = sci.impl.evaluator.eval(ctx,arg5);
var G__71877 = sci.impl.evaluator.eval(ctx,arg6);
var G__71878 = sci.impl.evaluator.eval(ctx,arg7);
var G__71879 = sci.impl.evaluator.eval(ctx,arg8);
var G__71880 = sci.impl.evaluator.eval(ctx,arg9);
var G__71881 = sci.impl.evaluator.eval(ctx,arg10);
var G__71882 = sci.impl.evaluator.eval(ctx,arg11);
var G__71883 = sci.impl.evaluator.eval(ctx,arg12);
var G__71884 = sci.impl.evaluator.eval(ctx,arg13);
var G__71885 = sci.impl.evaluator.eval(ctx,arg14);
var G__71886 = sci.impl.evaluator.eval(ctx,arg15);
var G__71887 = sci.impl.evaluator.eval(ctx,arg16);
var G__71888 = sci.impl.evaluator.eval(ctx,arg17);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(G__71870,G__71871,G__71872,G__71873,G__71874,G__71875,G__71876,G__71877,G__71878,G__71879,G__71880,G__71881,G__71882,G__71883,G__71884,G__71885,G__71886,G__71887,G__71888) : f.call(null,G__71870,G__71871,G__71872,G__71873,G__71874,G__71875,G__71876,G__71877,G__71878,G__71879,G__71880,G__71881,G__71882,G__71883,G__71884,G__71885,G__71886,G__71887,G__71888));
});

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
return (function (ctx){
var G__71893 = ctx;
var G__71894 = sci.impl.evaluator.eval(ctx,arg0);
var G__71895 = sci.impl.evaluator.eval(ctx,arg1);
var G__71896 = sci.impl.evaluator.eval(ctx,arg2);
var G__71897 = sci.impl.evaluator.eval(ctx,arg3);
var G__71898 = sci.impl.evaluator.eval(ctx,arg4);
var G__71899 = sci.impl.evaluator.eval(ctx,arg5);
var G__71900 = sci.impl.evaluator.eval(ctx,arg6);
var G__71901 = sci.impl.evaluator.eval(ctx,arg7);
var G__71902 = sci.impl.evaluator.eval(ctx,arg8);
var G__71903 = sci.impl.evaluator.eval(ctx,arg9);
var G__71904 = sci.impl.evaluator.eval(ctx,arg10);
var G__71905 = sci.impl.evaluator.eval(ctx,arg11);
var G__71906 = sci.impl.evaluator.eval(ctx,arg12);
var G__71907 = sci.impl.evaluator.eval(ctx,arg13);
var G__71908 = sci.impl.evaluator.eval(ctx,arg14);
var G__71909 = sci.impl.evaluator.eval(ctx,arg15);
var G__71910 = sci.impl.evaluator.eval(ctx,arg16);
var G__71911 = sci.impl.evaluator.eval(ctx,arg17);
var G__71912 = sci.impl.evaluator.eval(ctx,arg18);
return (f.cljs$core$IFn$_invoke$arity$20 ? f.cljs$core$IFn$_invoke$arity$20(G__71893,G__71894,G__71895,G__71896,G__71897,G__71898,G__71899,G__71900,G__71901,G__71902,G__71903,G__71904,G__71905,G__71906,G__71907,G__71908,G__71909,G__71910,G__71911,G__71912) : f.call(null,G__71893,G__71894,G__71895,G__71896,G__71897,G__71898,G__71899,G__71900,G__71901,G__71902,G__71903,G__71904,G__71905,G__71906,G__71907,G__71908,G__71909,G__71910,G__71911,G__71912));
});

break;
default:
return (function (ctx){
return sci.impl.evaluator.fn_call(ctx,f,cljs.core.cons(ctx,analyzed_children));
});

}
})(),expr);
});
sci.impl.analyzer.return_call = (function sci$impl$analyzer$return_call(_ctx,expr,f,analyzed_children){
return sci.impl.utils.ctx_fn((function (){var G__71920 = cljs.core.count(analyzed_children);
switch (G__71920) {
case (0):
return (function (ctx){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
return (function (ctx){
var G__71923 = sci.impl.evaluator.eval(ctx,arg0);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__71923) : f.call(null,G__71923));
});

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return (function (ctx){
var G__71924 = sci.impl.evaluator.eval(ctx,arg0);
var G__71925 = sci.impl.evaluator.eval(ctx,arg1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__71924,G__71925) : f.call(null,G__71924,G__71925));
});

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return (function (ctx){
var G__71926 = sci.impl.evaluator.eval(ctx,arg0);
var G__71927 = sci.impl.evaluator.eval(ctx,arg1);
var G__71928 = sci.impl.evaluator.eval(ctx,arg2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__71926,G__71927,G__71928) : f.call(null,G__71926,G__71927,G__71928));
});

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return (function (ctx){
var G__71930 = sci.impl.evaluator.eval(ctx,arg0);
var G__71931 = sci.impl.evaluator.eval(ctx,arg1);
var G__71932 = sci.impl.evaluator.eval(ctx,arg2);
var G__71933 = sci.impl.evaluator.eval(ctx,arg3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__71930,G__71931,G__71932,G__71933) : f.call(null,G__71930,G__71931,G__71932,G__71933));
});

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return (function (ctx){
var G__71936 = sci.impl.evaluator.eval(ctx,arg0);
var G__71937 = sci.impl.evaluator.eval(ctx,arg1);
var G__71938 = sci.impl.evaluator.eval(ctx,arg2);
var G__71939 = sci.impl.evaluator.eval(ctx,arg3);
var G__71940 = sci.impl.evaluator.eval(ctx,arg4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__71936,G__71937,G__71938,G__71939,G__71940) : f.call(null,G__71936,G__71937,G__71938,G__71939,G__71940));
});

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
return (function (ctx){
var G__71947 = sci.impl.evaluator.eval(ctx,arg0);
var G__71948 = sci.impl.evaluator.eval(ctx,arg1);
var G__71949 = sci.impl.evaluator.eval(ctx,arg2);
var G__71950 = sci.impl.evaluator.eval(ctx,arg3);
var G__71951 = sci.impl.evaluator.eval(ctx,arg4);
var G__71952 = sci.impl.evaluator.eval(ctx,arg5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__71947,G__71948,G__71949,G__71950,G__71951,G__71952) : f.call(null,G__71947,G__71948,G__71949,G__71950,G__71951,G__71952));
});

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
return (function (ctx){
var G__71955 = sci.impl.evaluator.eval(ctx,arg0);
var G__71956 = sci.impl.evaluator.eval(ctx,arg1);
var G__71957 = sci.impl.evaluator.eval(ctx,arg2);
var G__71958 = sci.impl.evaluator.eval(ctx,arg3);
var G__71959 = sci.impl.evaluator.eval(ctx,arg4);
var G__71960 = sci.impl.evaluator.eval(ctx,arg5);
var G__71961 = sci.impl.evaluator.eval(ctx,arg6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(G__71955,G__71956,G__71957,G__71958,G__71959,G__71960,G__71961) : f.call(null,G__71955,G__71956,G__71957,G__71958,G__71959,G__71960,G__71961));
});

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
return (function (ctx){
var G__71965 = sci.impl.evaluator.eval(ctx,arg0);
var G__71966 = sci.impl.evaluator.eval(ctx,arg1);
var G__71967 = sci.impl.evaluator.eval(ctx,arg2);
var G__71968 = sci.impl.evaluator.eval(ctx,arg3);
var G__71969 = sci.impl.evaluator.eval(ctx,arg4);
var G__71970 = sci.impl.evaluator.eval(ctx,arg5);
var G__71971 = sci.impl.evaluator.eval(ctx,arg6);
var G__71972 = sci.impl.evaluator.eval(ctx,arg7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(G__71965,G__71966,G__71967,G__71968,G__71969,G__71970,G__71971,G__71972) : f.call(null,G__71965,G__71966,G__71967,G__71968,G__71969,G__71970,G__71971,G__71972));
});

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
return (function (ctx){
var G__71983 = sci.impl.evaluator.eval(ctx,arg0);
var G__71984 = sci.impl.evaluator.eval(ctx,arg1);
var G__71985 = sci.impl.evaluator.eval(ctx,arg2);
var G__71986 = sci.impl.evaluator.eval(ctx,arg3);
var G__71987 = sci.impl.evaluator.eval(ctx,arg4);
var G__71988 = sci.impl.evaluator.eval(ctx,arg5);
var G__71989 = sci.impl.evaluator.eval(ctx,arg6);
var G__71990 = sci.impl.evaluator.eval(ctx,arg7);
var G__71991 = sci.impl.evaluator.eval(ctx,arg8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(G__71983,G__71984,G__71985,G__71986,G__71987,G__71988,G__71989,G__71990,G__71991) : f.call(null,G__71983,G__71984,G__71985,G__71986,G__71987,G__71988,G__71989,G__71990,G__71991));
});

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
return (function (ctx){
var G__71993 = sci.impl.evaluator.eval(ctx,arg0);
var G__71994 = sci.impl.evaluator.eval(ctx,arg1);
var G__71995 = sci.impl.evaluator.eval(ctx,arg2);
var G__71996 = sci.impl.evaluator.eval(ctx,arg3);
var G__71997 = sci.impl.evaluator.eval(ctx,arg4);
var G__71998 = sci.impl.evaluator.eval(ctx,arg5);
var G__71999 = sci.impl.evaluator.eval(ctx,arg6);
var G__72000 = sci.impl.evaluator.eval(ctx,arg7);
var G__72001 = sci.impl.evaluator.eval(ctx,arg8);
var G__72002 = sci.impl.evaluator.eval(ctx,arg9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(G__71993,G__71994,G__71995,G__71996,G__71997,G__71998,G__71999,G__72000,G__72001,G__72002) : f.call(null,G__71993,G__71994,G__71995,G__71996,G__71997,G__71998,G__71999,G__72000,G__72001,G__72002));
});

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
return (function (ctx){
var G__72007 = sci.impl.evaluator.eval(ctx,arg0);
var G__72008 = sci.impl.evaluator.eval(ctx,arg1);
var G__72009 = sci.impl.evaluator.eval(ctx,arg2);
var G__72010 = sci.impl.evaluator.eval(ctx,arg3);
var G__72011 = sci.impl.evaluator.eval(ctx,arg4);
var G__72012 = sci.impl.evaluator.eval(ctx,arg5);
var G__72013 = sci.impl.evaluator.eval(ctx,arg6);
var G__72014 = sci.impl.evaluator.eval(ctx,arg7);
var G__72015 = sci.impl.evaluator.eval(ctx,arg8);
var G__72016 = sci.impl.evaluator.eval(ctx,arg9);
var G__72017 = sci.impl.evaluator.eval(ctx,arg10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(G__72007,G__72008,G__72009,G__72010,G__72011,G__72012,G__72013,G__72014,G__72015,G__72016,G__72017) : f.call(null,G__72007,G__72008,G__72009,G__72010,G__72011,G__72012,G__72013,G__72014,G__72015,G__72016,G__72017));
});

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
return (function (ctx){
var G__72020 = sci.impl.evaluator.eval(ctx,arg0);
var G__72021 = sci.impl.evaluator.eval(ctx,arg1);
var G__72022 = sci.impl.evaluator.eval(ctx,arg2);
var G__72023 = sci.impl.evaluator.eval(ctx,arg3);
var G__72024 = sci.impl.evaluator.eval(ctx,arg4);
var G__72025 = sci.impl.evaluator.eval(ctx,arg5);
var G__72026 = sci.impl.evaluator.eval(ctx,arg6);
var G__72027 = sci.impl.evaluator.eval(ctx,arg7);
var G__72028 = sci.impl.evaluator.eval(ctx,arg8);
var G__72029 = sci.impl.evaluator.eval(ctx,arg9);
var G__72030 = sci.impl.evaluator.eval(ctx,arg10);
var G__72031 = sci.impl.evaluator.eval(ctx,arg11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(G__72020,G__72021,G__72022,G__72023,G__72024,G__72025,G__72026,G__72027,G__72028,G__72029,G__72030,G__72031) : f.call(null,G__72020,G__72021,G__72022,G__72023,G__72024,G__72025,G__72026,G__72027,G__72028,G__72029,G__72030,G__72031));
});

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
return (function (ctx){
var G__72034 = sci.impl.evaluator.eval(ctx,arg0);
var G__72035 = sci.impl.evaluator.eval(ctx,arg1);
var G__72036 = sci.impl.evaluator.eval(ctx,arg2);
var G__72037 = sci.impl.evaluator.eval(ctx,arg3);
var G__72038 = sci.impl.evaluator.eval(ctx,arg4);
var G__72039 = sci.impl.evaluator.eval(ctx,arg5);
var G__72040 = sci.impl.evaluator.eval(ctx,arg6);
var G__72041 = sci.impl.evaluator.eval(ctx,arg7);
var G__72042 = sci.impl.evaluator.eval(ctx,arg8);
var G__72043 = sci.impl.evaluator.eval(ctx,arg9);
var G__72044 = sci.impl.evaluator.eval(ctx,arg10);
var G__72045 = sci.impl.evaluator.eval(ctx,arg11);
var G__72046 = sci.impl.evaluator.eval(ctx,arg12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(G__72034,G__72035,G__72036,G__72037,G__72038,G__72039,G__72040,G__72041,G__72042,G__72043,G__72044,G__72045,G__72046) : f.call(null,G__72034,G__72035,G__72036,G__72037,G__72038,G__72039,G__72040,G__72041,G__72042,G__72043,G__72044,G__72045,G__72046));
});

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
return (function (ctx){
var G__72052 = sci.impl.evaluator.eval(ctx,arg0);
var G__72053 = sci.impl.evaluator.eval(ctx,arg1);
var G__72054 = sci.impl.evaluator.eval(ctx,arg2);
var G__72055 = sci.impl.evaluator.eval(ctx,arg3);
var G__72056 = sci.impl.evaluator.eval(ctx,arg4);
var G__72057 = sci.impl.evaluator.eval(ctx,arg5);
var G__72058 = sci.impl.evaluator.eval(ctx,arg6);
var G__72059 = sci.impl.evaluator.eval(ctx,arg7);
var G__72060 = sci.impl.evaluator.eval(ctx,arg8);
var G__72061 = sci.impl.evaluator.eval(ctx,arg9);
var G__72062 = sci.impl.evaluator.eval(ctx,arg10);
var G__72063 = sci.impl.evaluator.eval(ctx,arg11);
var G__72064 = sci.impl.evaluator.eval(ctx,arg12);
var G__72065 = sci.impl.evaluator.eval(ctx,arg13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(G__72052,G__72053,G__72054,G__72055,G__72056,G__72057,G__72058,G__72059,G__72060,G__72061,G__72062,G__72063,G__72064,G__72065) : f.call(null,G__72052,G__72053,G__72054,G__72055,G__72056,G__72057,G__72058,G__72059,G__72060,G__72061,G__72062,G__72063,G__72064,G__72065));
});

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
return (function (ctx){
var G__72078 = sci.impl.evaluator.eval(ctx,arg0);
var G__72079 = sci.impl.evaluator.eval(ctx,arg1);
var G__72080 = sci.impl.evaluator.eval(ctx,arg2);
var G__72081 = sci.impl.evaluator.eval(ctx,arg3);
var G__72082 = sci.impl.evaluator.eval(ctx,arg4);
var G__72083 = sci.impl.evaluator.eval(ctx,arg5);
var G__72084 = sci.impl.evaluator.eval(ctx,arg6);
var G__72085 = sci.impl.evaluator.eval(ctx,arg7);
var G__72086 = sci.impl.evaluator.eval(ctx,arg8);
var G__72087 = sci.impl.evaluator.eval(ctx,arg9);
var G__72088 = sci.impl.evaluator.eval(ctx,arg10);
var G__72089 = sci.impl.evaluator.eval(ctx,arg11);
var G__72090 = sci.impl.evaluator.eval(ctx,arg12);
var G__72091 = sci.impl.evaluator.eval(ctx,arg13);
var G__72092 = sci.impl.evaluator.eval(ctx,arg14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(G__72078,G__72079,G__72080,G__72081,G__72082,G__72083,G__72084,G__72085,G__72086,G__72087,G__72088,G__72089,G__72090,G__72091,G__72092) : f.call(null,G__72078,G__72079,G__72080,G__72081,G__72082,G__72083,G__72084,G__72085,G__72086,G__72087,G__72088,G__72089,G__72090,G__72091,G__72092));
});

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
return (function (ctx){
var G__72096 = sci.impl.evaluator.eval(ctx,arg0);
var G__72097 = sci.impl.evaluator.eval(ctx,arg1);
var G__72098 = sci.impl.evaluator.eval(ctx,arg2);
var G__72099 = sci.impl.evaluator.eval(ctx,arg3);
var G__72100 = sci.impl.evaluator.eval(ctx,arg4);
var G__72101 = sci.impl.evaluator.eval(ctx,arg5);
var G__72102 = sci.impl.evaluator.eval(ctx,arg6);
var G__72103 = sci.impl.evaluator.eval(ctx,arg7);
var G__72104 = sci.impl.evaluator.eval(ctx,arg8);
var G__72105 = sci.impl.evaluator.eval(ctx,arg9);
var G__72106 = sci.impl.evaluator.eval(ctx,arg10);
var G__72107 = sci.impl.evaluator.eval(ctx,arg11);
var G__72108 = sci.impl.evaluator.eval(ctx,arg12);
var G__72109 = sci.impl.evaluator.eval(ctx,arg13);
var G__72110 = sci.impl.evaluator.eval(ctx,arg14);
var G__72111 = sci.impl.evaluator.eval(ctx,arg15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(G__72096,G__72097,G__72098,G__72099,G__72100,G__72101,G__72102,G__72103,G__72104,G__72105,G__72106,G__72107,G__72108,G__72109,G__72110,G__72111) : f.call(null,G__72096,G__72097,G__72098,G__72099,G__72100,G__72101,G__72102,G__72103,G__72104,G__72105,G__72106,G__72107,G__72108,G__72109,G__72110,G__72111));
});

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
return (function (ctx){
var G__72116 = sci.impl.evaluator.eval(ctx,arg0);
var G__72117 = sci.impl.evaluator.eval(ctx,arg1);
var G__72118 = sci.impl.evaluator.eval(ctx,arg2);
var G__72119 = sci.impl.evaluator.eval(ctx,arg3);
var G__72120 = sci.impl.evaluator.eval(ctx,arg4);
var G__72121 = sci.impl.evaluator.eval(ctx,arg5);
var G__72122 = sci.impl.evaluator.eval(ctx,arg6);
var G__72123 = sci.impl.evaluator.eval(ctx,arg7);
var G__72124 = sci.impl.evaluator.eval(ctx,arg8);
var G__72125 = sci.impl.evaluator.eval(ctx,arg9);
var G__72126 = sci.impl.evaluator.eval(ctx,arg10);
var G__72127 = sci.impl.evaluator.eval(ctx,arg11);
var G__72128 = sci.impl.evaluator.eval(ctx,arg12);
var G__72129 = sci.impl.evaluator.eval(ctx,arg13);
var G__72130 = sci.impl.evaluator.eval(ctx,arg14);
var G__72131 = sci.impl.evaluator.eval(ctx,arg15);
var G__72132 = sci.impl.evaluator.eval(ctx,arg16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(G__72116,G__72117,G__72118,G__72119,G__72120,G__72121,G__72122,G__72123,G__72124,G__72125,G__72126,G__72127,G__72128,G__72129,G__72130,G__72131,G__72132) : f.call(null,G__72116,G__72117,G__72118,G__72119,G__72120,G__72121,G__72122,G__72123,G__72124,G__72125,G__72126,G__72127,G__72128,G__72129,G__72130,G__72131,G__72132));
});

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
return (function (ctx){
var G__72136 = sci.impl.evaluator.eval(ctx,arg0);
var G__72137 = sci.impl.evaluator.eval(ctx,arg1);
var G__72138 = sci.impl.evaluator.eval(ctx,arg2);
var G__72139 = sci.impl.evaluator.eval(ctx,arg3);
var G__72140 = sci.impl.evaluator.eval(ctx,arg4);
var G__72141 = sci.impl.evaluator.eval(ctx,arg5);
var G__72142 = sci.impl.evaluator.eval(ctx,arg6);
var G__72143 = sci.impl.evaluator.eval(ctx,arg7);
var G__72144 = sci.impl.evaluator.eval(ctx,arg8);
var G__72145 = sci.impl.evaluator.eval(ctx,arg9);
var G__72146 = sci.impl.evaluator.eval(ctx,arg10);
var G__72147 = sci.impl.evaluator.eval(ctx,arg11);
var G__72148 = sci.impl.evaluator.eval(ctx,arg12);
var G__72149 = sci.impl.evaluator.eval(ctx,arg13);
var G__72150 = sci.impl.evaluator.eval(ctx,arg14);
var G__72151 = sci.impl.evaluator.eval(ctx,arg15);
var G__72152 = sci.impl.evaluator.eval(ctx,arg16);
var G__72153 = sci.impl.evaluator.eval(ctx,arg17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(G__72136,G__72137,G__72138,G__72139,G__72140,G__72141,G__72142,G__72143,G__72144,G__72145,G__72146,G__72147,G__72148,G__72149,G__72150,G__72151,G__72152,G__72153) : f.call(null,G__72136,G__72137,G__72138,G__72139,G__72140,G__72141,G__72142,G__72143,G__72144,G__72145,G__72146,G__72147,G__72148,G__72149,G__72150,G__72151,G__72152,G__72153));
});

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
return (function (ctx){
var G__72159 = sci.impl.evaluator.eval(ctx,arg0);
var G__72160 = sci.impl.evaluator.eval(ctx,arg1);
var G__72161 = sci.impl.evaluator.eval(ctx,arg2);
var G__72162 = sci.impl.evaluator.eval(ctx,arg3);
var G__72163 = sci.impl.evaluator.eval(ctx,arg4);
var G__72164 = sci.impl.evaluator.eval(ctx,arg5);
var G__72165 = sci.impl.evaluator.eval(ctx,arg6);
var G__72166 = sci.impl.evaluator.eval(ctx,arg7);
var G__72167 = sci.impl.evaluator.eval(ctx,arg8);
var G__72168 = sci.impl.evaluator.eval(ctx,arg9);
var G__72169 = sci.impl.evaluator.eval(ctx,arg10);
var G__72170 = sci.impl.evaluator.eval(ctx,arg11);
var G__72171 = sci.impl.evaluator.eval(ctx,arg12);
var G__72172 = sci.impl.evaluator.eval(ctx,arg13);
var G__72173 = sci.impl.evaluator.eval(ctx,arg14);
var G__72174 = sci.impl.evaluator.eval(ctx,arg15);
var G__72175 = sci.impl.evaluator.eval(ctx,arg16);
var G__72176 = sci.impl.evaluator.eval(ctx,arg17);
var G__72177 = sci.impl.evaluator.eval(ctx,arg18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(G__72159,G__72160,G__72161,G__72162,G__72163,G__72164,G__72165,G__72166,G__72167,G__72168,G__72169,G__72170,G__72171,G__72172,G__72173,G__72174,G__72175,G__72176,G__72177) : f.call(null,G__72159,G__72160,G__72161,G__72162,G__72163,G__72164,G__72165,G__72166,G__72167,G__72168,G__72169,G__72170,G__72171,G__72172,G__72173,G__72174,G__72175,G__72176,G__72177));
});

break;
default:
return (function (ctx){
return sci.impl.evaluator.fn_call(ctx,f,analyzed_children);
});

}
})(),expr);
});
sci.impl.analyzer.analyze_call = (function sci$impl$analyzer$analyze_call(ctx,expr,top_level_QMARK_){
var f = cljs.core.first(expr);
if((f instanceof cljs.core.Symbol)){
var special_sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.special_syms,f);
var _ = (cljs.core.truth_(special_sym)?sci.impl.resolve.check_permission_BANG_(ctx,special_sym,f,null):null);
var f__$1 = (function (){var or__4126__auto__ = special_sym;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,f,true);
}
})();
var f_meta = cljs.core.meta(f__$1);
var eval_QMARK_ = (function (){var and__4115__auto__ = f_meta;
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(f_meta);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_((function (){var and__4115__auto__ = f_meta;
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword("sci.impl.analyzer","static-access","sci.impl.analyzer/static-access",-79014000).cljs$core$IFn$_invoke$arity$1(f_meta);
} else {
return and__4115__auto__;
}
})())){
return sci.impl.analyzer.expand_dot_STAR__STAR_(ctx,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,".",".",1975675962,null),cljs.core.first(f__$1),cljs.core.second(f__$1),cljs.core.rest(expr)));
} else {
if(cljs.core.truth_(((cljs.core.not(eval_QMARK_))?(function (){var or__4126__auto__ = special_sym;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.contains_QMARK_(sci.impl.utils.ana_macros,f__$1);
}
})():false))){
var G__72195 = f__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__72195)){
return sci.impl.analyzer.expand_dot_STAR__STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__72195)){
return sci.impl.analyzer.return_and(expr,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"import","import",241030818,null),G__72195)){
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__72195)){
return sci.impl.analyzer.expand_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),G__72195)){
return sci.impl.analyzer.expand_fn(ctx,expr,false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__72195)){
return sci.impl.analyzer.return_if(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),G__72195)){
var ret = sci.impl.analyzer.expand_defn(ctx,expr);
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"defn","defn",-126010802,null),G__72195)){
var ret = sci.impl.analyzer.expand_defn(ctx,expr);
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__72195)){
return sci.impl.analyzer.return_do(expr,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"loop","loop",1244978678,null),G__72195)){
return sci.impl.analyzer.expand_loop(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"doseq","doseq",221164135,null),G__72195)){
var G__72200 = ctx;
var G__72201 = sci.impl.doseq_macro.expand_doseq(ctx,expr);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__72200,G__72201) : sci.impl.analyzer.analyze.call(null,G__72200,G__72201));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"expand-constructor","expand-constructor",-343741576,null),G__72195)){
return sci.impl.analyzer.expand_constructor(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__72195)){
return sci.impl.analyzer.expand_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"declare","declare",654042991,null),G__72195)){
return sci.impl.analyzer.expand_declare(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),G__72195)){
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"expand-dot*","expand-dot*",-1946890561,null),G__72195)){
return sci.impl.analyzer.expand_dot_STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"ns","ns",2082130287,null),G__72195)){
return sci.impl.analyzer.analyze_ns_form(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"for","for",316745208,null),G__72195)){
var res = sci.impl.for_macro.expand_for(ctx,expr);
if(cljs.core.truth_(new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825).cljs$core$IFn$_invoke$arity$1(ctx))){
return res;
} else {
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,res) : sci.impl.analyzer.analyze.call(null,ctx,res));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__72195)){
return sci.impl.analyzer.expand_let(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn","fn",465265323,null),G__72195)){
return sci.impl.analyzer.expand_fn(ctx,expr,false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__72195)){
return sci.impl.analyzer.analyze_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__72195)){
return sci.impl.analyzer.return_recur(expr,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__72195)){
return sci.impl.analyzer.expand_new(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"var","var",870848730,null),G__72195)){
return sci.impl.analyzer.analyze_var(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__72195)){
return sci.impl.analyzer.expand_lazy_seq(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__72195)){
return sci.impl.analyzer.expand_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__72195)){
return sci.impl.analyzer.return_or(expr,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)));
} else {
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(f__$1,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr))));

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
} else {
try{if(cljs.core.truth_(sci.impl.utils.macro_QMARK_(f__$1))){
var needs_ctx_QMARK_ = (sci.impl.utils.needs_ctx === new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(f__$1)));
var v = ((needs_ctx_QMARK_)?cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$1,expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),ctx,cljs.core.rest(expr)):cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$1,expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest(expr)));
var expanded = (cljs.core.truth_(new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825).cljs$core$IFn$_invoke$arity$1(ctx))?v:(cljs.core.truth_((function (){var and__4115__auto__ = top_level_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.seq_QMARK_(v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.first(v))));
} else {
return and__4115__auto__;
}
})())?sci.impl.types.__GT_EvalForm(v):(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.analyzer.analyze.call(null,ctx,v))
));
return expanded;
} else {
var temp__5751__auto__ = new cljs.core.Keyword("sci.impl","inlined","sci.impl/inlined",-478453593).cljs$core$IFn$_invoke$arity$1(f_meta);
if(cljs.core.truth_(temp__5751__auto__)){
var f__$2 = temp__5751__auto__;
return sci.impl.analyzer.return_call(ctx,sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$3(cljs.core.cons(f__$2,cljs.core.rest(expr)),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta),f__$2,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)));
} else {
var temp__5751__auto____$1 = new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(f__$1));
if(cljs.core.truth_(temp__5751__auto____$1)){
var op = temp__5751__auto____$1;
if((sci.impl.utils.needs_ctx === op)){
return sci.impl.analyzer.return_needs_ctx_call(ctx,expr,f__$1,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)));
} else {
if(cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"resolve-sym","resolve-sym",-1193683260),op) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword(null,"resolve-sym","resolve-sym",-1193683260),op)))){
return sci.impl.analyzer.return_binding_call(ctx,sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$3(cljs.core.cons(f__$1,cljs.core.rest(expr)),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta),f__$1,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)));
} else {
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(f__$1,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr))));

}
}
} else {
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.analyzer.return_call(ctx,sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$3(cljs.core.cons(f__$1,children),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta),f__$1,children);
}
}
}
}catch (e72208){if((e72208 instanceof Error)){
var e = e72208;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(cljs.core.cons(f__$1,cljs.core.rest(expr)),cljs.core.meta(expr))));
} else {
throw e72208;

}
}
}
}
} else {
if((f instanceof cljs.core.Keyword)){
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
var G__72222 = cljs.core.count(children);
switch (G__72222) {
case (1):
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(0));
return sci.impl.utils.ctx_fn((function (ctx__$1){
return f.cljs$core$IFn$_invoke$arity$1(sci.impl.evaluator.eval(ctx__$1,arg));
}),expr);

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(1));
return sci.impl.utils.ctx_fn((function (ctx__$1){
return f.cljs$core$IFn$_invoke$arity$2(sci.impl.evaluator.eval(ctx__$1,arg0),sci.impl.evaluator.eval(ctx__$1,arg1));
}),expr);

break;
default:
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(f,children));

}
} else {
var ret = sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(sci.impl.analyzer.analyze_children(ctx,expr));
return ret;

}
}
});
sci.impl.analyzer.constant_colls = true;
sci.impl.analyzer.return_map = (function sci$impl$analyzer$return_map(ctx,the_map){
var children = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,the_map);
var analyzed_children = sci.impl.analyzer.analyze_children(ctx,children);
if((cljs.core.count(analyzed_children) <= (16))){
return sci.impl.analyzer.return_call(ctx,the_map,cljs.core.array_map,analyzed_children);
} else {
return sci.impl.analyzer.return_call(ctx,the_map,cljs.core.hash_map,analyzed_children);
}
});
sci.impl.analyzer.analyze_map = (function sci$impl$analyzer$analyze_map(ctx,expr,m){
var ks = cljs.core.keys(expr);
var vs = cljs.core.vals(expr);
var constant_map_QMARK_ = ((true) && (cljs.core.every_QMARK_(sci.impl.utils.constant_QMARK_,ks)) && (cljs.core.every_QMARK_(sci.impl.utils.constant_QMARK_,vs)));
var analyzed_map = ((constant_map_QMARK_)?expr:((cljs.core.not(new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(ctx)))?sci.impl.analyzer.return_map(ctx,expr):cljs.core.zipmap(sci.impl.analyzer.analyze_children(ctx,ks),sci.impl.analyzer.analyze_children(ctx,vs))
));
var analyzed_meta = (cljs.core.truth_(m)?(function (){var G__72230 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"meta","meta",1499536964),true);
var G__72231 = m;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__72230,G__72231) : sci.impl.analyzer.analyze.call(null,G__72230,G__72231));
})():null);
var analyzed_meta__$1 = ((((constant_map_QMARK_) && ((m === analyzed_meta))))?analyzed_meta:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(analyzed_meta,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"eval","eval",-1103567905)));
if(cljs.core.truth_(analyzed_meta__$1)){
return cljs.core.with_meta(analyzed_map,analyzed_meta__$1);
} else {
return analyzed_map;
}
});
/**
 * Returns analyzed vector or set
 */
sci.impl.analyzer.analyze_vec_or_set = (function sci$impl$analyzer$analyze_vec_or_set(ctx,_f1,f2,expr,m){
var constant_coll_QMARK_ = ((true) && (cljs.core.every_QMARK_(sci.impl.utils.constant_QMARK_,expr)));
var analyzed_meta = (cljs.core.truth_(m)?(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,m) : sci.impl.analyzer.analyze.call(null,ctx,m)):null);
var must_eval = (((!(constant_coll_QMARK_))) || ((!((m === analyzed_meta)))));
var analyzed_coll = (((!(must_eval)))?expr:(cljs.core.truth_(m)?(function (){var ef = sci.impl.analyzer.return_call(ctx,expr,f2,sci.impl.analyzer.analyze_children(ctx,expr));
return sci.impl.utils.ctx_fn((function (ctx__$1){
var md = sci.impl.evaluator.eval(ctx__$1,analyzed_meta);
var coll = sci.impl.evaluator.eval(ctx__$1,ef);
return cljs.core.with_meta(coll,md);
}),expr);
})():sci.impl.analyzer.return_call(ctx,expr,f2,sci.impl.analyzer.analyze_children(ctx,expr))));
return analyzed_coll;
});
sci.impl.analyzer.analyze = (function sci$impl$analyzer$analyze(var_args){
var G__72246 = arguments.length;
switch (G__72246) {
case 2:
return sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 = (function (ctx,expr){
return sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3(ctx,expr,false);
}));

(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3 = (function (ctx,expr,top_level_QMARK_){
var m = cljs.core.meta(expr);
if(sci.impl.utils.constant_QMARK_(expr)){
return expr;
} else {
if((expr instanceof cljs.core.Symbol)){
var v = sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,expr,false);
if(sci.impl.utils.constant_QMARK_(v)){
return v;
} else {
if(sci.impl.vars.var_QMARK_(v)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"const","const",1709929842).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v)))){
return cljs.core.deref(v);
} else {
if(cljs.core.truth_(sci.impl.vars.isMacro(v))){
throw (new Error(["Can't take value of a macro: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),""].join('')));
} else {
return sci.impl.types.__GT_EvalVar(v);
}
}
} else {
return sci.impl.utils.merge_meta(v,m);

}
}
} else {
if(cljs.core.record_QMARK_(expr)){
return expr;
} else {
if(cljs.core.map_QMARK_(expr)){
return sci.impl.analyzer.analyze_map(ctx,expr,m);
} else {
if(cljs.core.vector_QMARK_(expr)){
return sci.impl.analyzer.analyze_vec_or_set(ctx,cljs.core.identity,cljs.core.vector,expr,m);
} else {
if(cljs.core.set_QMARK_(expr)){
return sci.impl.analyzer.analyze_vec_or_set(ctx,cljs.core.set,cljs.core.hash_set,expr,m);
} else {
if(cljs.core.seq_QMARK_(expr)){
if(cljs.core.seq(expr)){
return sci.impl.utils.merge_meta(sci.impl.analyzer.analyze_call(ctx,expr,top_level_QMARK_),m);
} else {
return expr;
}
} else {
return expr;

}
}
}
}
}
}
}
}));

(sci.impl.analyzer.analyze.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=sci.impl.analyzer.js.map
