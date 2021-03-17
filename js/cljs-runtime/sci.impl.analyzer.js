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
var G__68033 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825),true);
var G__68034 = expr;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__68033,G__68034) : sci.impl.analyzer.analyze.call(null,G__68033,G__68034));
} else {
var f = sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,op,true);
var f__$1 = (cljs.core.truth_(((sci.impl.vars.var_QMARK_(f))?sci.impl.vars.isMacro(f):false))?cljs.core.deref(f):f);
if(cljs.core.truth_(sci.impl.utils.macro_QMARK_(f__$1))){
var f__$2 = (((sci.impl.utils.needs_ctx === (function (){var G__68036 = f__$1;
var G__68036__$1 = (((G__68036 == null))?null:cljs.core.meta(G__68036));
if((G__68036__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(G__68036__$1);
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
var G__68041 = cljs.core.count(analyzed_children);
switch (G__68041) {
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
var G__68052 = cljs.core.count(analyzed_children);
switch (G__68052) {
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
var G__68168 = cljs.core.count(analyzed_children);
switch (G__68168) {
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
var G__68444 = cljs.core.count(analyzed_children);
switch (G__68444) {
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__68577_SHARP_){
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,p1__68577_SHARP_) : sci.impl.analyzer.analyze.call(null,ctx,p1__68577_SHARP_));
}),children);
});
sci.impl.analyzer.expand_fn_args_PLUS_body = (function sci$impl$analyzer$expand_fn_args_PLUS_body(p__68589,fn_name,p__68590,macro_QMARK_){
var map__68593 = p__68589;
var map__68593__$1 = (((((!((map__68593 == null))))?(((((map__68593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68593):map__68593);
var ctx = map__68593__$1;
var fn_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68593__$1,new cljs.core.Keyword(null,"fn-expr","fn-expr",-933027985));
var vec__68594 = p__68590;
var seq__68595 = cljs.core.seq(vec__68594);
var first__68596 = cljs.core.first(seq__68595);
var seq__68595__$1 = cljs.core.next(seq__68595);
var binding_vector = first__68596;
var body_exprs = seq__68595__$1;
if(cljs.core.truth_(binding_vector)){
} else {
sci.impl.analyzer.throw_error_with_location("Parameter declaration missing.",fn_expr);
}

if(cljs.core.vector_QMARK_(binding_vector)){
} else {
sci.impl.analyzer.throw_error_with_location("Parameter declaration should be a vector",fn_expr);
}

var binding_vector__$1 = (cljs.core.truth_(macro_QMARK_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",1482799337,null),new cljs.core.Symbol(null,"&env","&env",-919163083,null)], null),binding_vector):binding_vector);
var fixed_args = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__68583_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),p1__68583_SHARP_);
}),binding_vector__$1);
var fixed_arity = cljs.core.count(fixed_args);
var var_arg_name = cljs.core.second(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__68584_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),p1__68584_SHARP_);
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
var map__68600 = sci.impl.utils.maybe_destructured(binding_vector__$1,body_exprs__$3);
var map__68600__$1 = (((((!((map__68600 == null))))?(((((map__68600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68600):map__68600);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68600__$1,new cljs.core.Keyword(null,"params","params",710516235));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68600__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var ctx__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.merge,cljs.core.zipmap(params,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
var body__$1 = sci.impl.analyzer.return_do(fn_expr,sci.impl.analyzer.analyze_children(ctx__$1,body));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("sci.impl","body","sci.impl/body",-1493886648),body__$1,new cljs.core.Keyword("sci.impl","params","sci.impl/params",-175360738),params,new cljs.core.Keyword("sci.impl","fixed-arity","sci.impl/fixed-arity",-1251617052),fixed_arity,new cljs.core.Keyword("sci.impl","var-arg-name","sci.impl/var-arg-name",1800498100),var_arg_name,new cljs.core.Keyword("sci.impl","fn-name","sci.impl/fn-name",-1172300569),fn_name], null);
});
sci.impl.analyzer.analyzed_fn_meta = (function sci$impl$analyzer$analyzed_fn_meta(ctx,m){
var meta_needs_eval_QMARK_ = (cljs.core.count(m) > (2));
var m__$1 = ((meta_needs_eval_QMARK_)?sci.impl.utils.mark_eval((function (){var G__68610 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"meta","meta",1499536964),true);
var G__68611 = m;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__68610,G__68611) : sci.impl.analyzer.analyze.call(null,G__68610,G__68611));
})()):m);
return m__$1;
});
sci.impl.analyzer.expand_fn = (function sci$impl$analyzer$expand_fn(ctx,p__68612,macro_QMARK_){
var vec__68613 = p__68612;
var seq__68614 = cljs.core.seq(vec__68613);
var first__68615 = cljs.core.first(seq__68614);
var seq__68614__$1 = cljs.core.next(seq__68614);
var _fn = first__68615;
var first__68615__$1 = cljs.core.first(seq__68614__$1);
var seq__68614__$2 = cljs.core.next(seq__68614__$1);
var name_QMARK_ = first__68615__$1;
var body = seq__68614__$2;
var fn_expr = vec__68613;
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"fn-expr","fn-expr",-933027985),fn_expr);
var fn_name = (((name_QMARK_ instanceof cljs.core.Symbol))?name_QMARK_:null);
var body__$1 = (cljs.core.truth_(fn_name)?body:cljs.core.cons(name_QMARK_,body));
var bodies = ((cljs.core.seq_QMARK_(cljs.core.first(body__$1)))?body__$1:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [body__$1], null));
var ctx__$2 = (cljs.core.truth_(fn_name)?cljs.core.assoc_in(ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),fn_name], null),null):ctx__$1);
var analyzed_bodies = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__68616,body__$2){
var map__68617 = p__68616;
var map__68617__$1 = (((((!((map__68617 == null))))?(((((map__68617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68617):map__68617);
var acc = map__68617__$1;
var max_fixed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68617__$1,new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124));
var min_varargs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68617__$1,new cljs.core.Keyword(null,"min-varargs","min-varargs",1999010596));
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
var vec__68627 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__68631,p__68632){
var vec__68634 = p__68631;
var ctx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68634,(0),null);
var new_let_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68634,(1),null);
var vec__68637 = p__68632;
var binding_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68637,(0),null);
var binding_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68637,(1),null);
var v = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,binding_value) : sci.impl.analyzer.analyze.call(null,ctx__$1,binding_value));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$5(ctx__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.assoc,binding_name,v),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(new_let_bindings,binding_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,cljs.core.PersistentVector.EMPTY], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),destructured_let_bindings));
var ctx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68627,(0),null);
var new_let_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68627,(1),null);
var body = sci.impl.analyzer.analyze_children(ctx__$1,exprs);
return sci.impl.utils.ctx_fn((function (ctx__$2){
return sci.impl.evaluator.eval_let(ctx__$2,new_let_bindings,body);
}),null);
});
/**
 * The let macro from clojure.core
 */
sci.impl.analyzer.expand_let = (function sci$impl$analyzer$expand_let(ctx,p__68646){
var vec__68647 = p__68646;
var seq__68648 = cljs.core.seq(vec__68647);
var first__68649 = cljs.core.first(seq__68648);
var seq__68648__$1 = cljs.core.next(seq__68648);
var _let = first__68649;
var first__68649__$1 = cljs.core.first(seq__68648__$1);
var seq__68648__$2 = cljs.core.next(seq__68648__$1);
var let_bindings = first__68649__$1;
var exprs = seq__68648__$2;
var let_bindings__$1 = sci.impl.destructure.destructure(let_bindings);
return sci.impl.analyzer.expand_let_STAR_(ctx,let_bindings__$1,exprs);
});
sci.impl.analyzer.expand_def = (function sci$impl$analyzer$expand_def(ctx,expr){
var vec__68659 = expr;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68659,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68659,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68659,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68659,(3),null);
var G__68662_70586 = ctx;
var G__68663_70587 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,var_name], null);
(sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2(G__68662_70586,G__68663_70587) : sci.impl.analyzer.expand_declare.call(null,G__68662_70586,G__68663_70587));

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
var k = cljs.core.some((function (p1__68657_SHARP_){
return (!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"private","private",-558947994),null,new cljs.core.Keyword(null,"column","column",2078222095),null,new cljs.core.Keyword(null,"const","const",1709929842),null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),null,new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null,new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),null], null), null),p1__68657_SHARP_)));
}),mks);
var m__$1 = (cljs.core.truth_(k)?(function (){var G__68667 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"meta","meta",1499536964),true);
var G__68668 = m;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__68667,G__68668) : sci.impl.analyzer.analyze.call(null,G__68667,G__68668));
})():m);
var m__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns));
var m__$3 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$2,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):m__$2);
var var_name__$1 = cljs.core.with_meta(var_name,m__$3);
return sci.impl.utils.ctx_fn((function (ctx__$1){
return sci.impl.evaluator.eval_def(ctx__$1,var_name__$1,init__$1);
}),expr);
});
sci.impl.analyzer.expand_defn = (function sci$impl$analyzer$expand_defn(ctx,p__68674){
var vec__68678 = p__68674;
var seq__68679 = cljs.core.seq(vec__68678);
var first__68680 = cljs.core.first(seq__68679);
var seq__68679__$1 = cljs.core.next(seq__68679);
var op = first__68680;
var first__68680__$1 = cljs.core.first(seq__68679__$1);
var seq__68679__$2 = cljs.core.next(seq__68679__$1);
var fn_name = first__68680__$1;
var body = seq__68679__$2;
var expr = vec__68678;
if(cljs.core.simple_symbol_QMARK_(fn_name)){
} else {
sci.impl.analyzer.throw_error_with_location("Var name should be simple symbol.",expr);
}

var G__68682_70595 = ctx;
var G__68683_70596 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,fn_name], null);
(sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2(G__68682_70595,G__68683_70596) : sci.impl.analyzer.expand_declare.call(null,G__68682_70595,G__68683_70596));

var macro_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("defmacro",cljs.core.name(op));
var vec__68684 = cljs.core.split_with(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.sequential_QMARK_),body);
var pre_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68684,(0),null);
var body__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68684,(1),null);
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
var k = cljs.core.some((function (p1__68671_SHARP_){
return (!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),null,new cljs.core.Keyword(null,"private","private",-558947994),null,new cljs.core.Keyword(null,"added","added",2057651688),null,new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),null,new cljs.core.Keyword(null,"column","column",2078222095),null,new cljs.core.Keyword(null,"const","const",1709929842),null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),null,new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"macro","macro",-867863404),null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null,new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),null,new cljs.core.Keyword(null,"doc","doc",1913296891),null], null), null),p1__68671_SHARP_)));
}),mks);
var meta_map__$2 = (cljs.core.truth_(k)?(function (){var G__68689 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"meta","meta",1499536964),true);
var G__68690 = meta_map__$1;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__68689,G__68690) : sci.impl.analyzer.analyze.call(null,G__68689,G__68690));
})():meta_map__$1);
var fn_body = cljs.core.with_meta(cljs.core.cons(new cljs.core.Symbol(null,"fn","fn",465265323,null),body__$1),cljs.core.meta(expr));
var f = sci.impl.analyzer.expand_fn(ctx,fn_body,macro_QMARK_);
var arglists = cljs.core.seq(new cljs.core.Keyword("sci.impl","arglists","sci.impl/arglists",-802264395).cljs$core$IFn$_invoke$arity$1(f));
var meta_map__$3 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(meta_map__$2,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arglists","arglists",1661989754),arglists], 0));
var fn_name__$1 = cljs.core.with_meta(fn_name,(function (){var G__68693 = meta_map__$3;
var G__68693__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68693,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):G__68693);
if(macro_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68693__$1,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
} else {
return G__68693__$1;
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
var vec__68699 = ((cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,arg_names))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bv,arg_names], null):(function (){var syms = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_names),(function (){
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}));
var bv1 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,syms,init_vals);
var bv2 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,arg_names,syms);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(bv1,bv2)),syms], null);
})());
var bv__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68699,(0),null);
var syms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68699,(1),null);
var body = cljs.core.nnext(expr);
var expansion = (new cljs.core.List(null,new cljs.core.Symbol(null,"let","let",358118826,null),(new cljs.core.List(null,bv__$1,(new cljs.core.List(null,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(arg_names),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),syms),null,(1),null)),(2),null)),(3),null));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,expansion) : sci.impl.analyzer.analyze.call(null,ctx,expansion));
});
sci.impl.analyzer.expand_lazy_seq = (function sci$impl$analyzer$expand_lazy_seq(ctx,expr){
var body = cljs.core.rest(expr);
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","lazy-seq","cljs.core/lazy-seq",627681297,null),(new cljs.core.List(null,(function (){var G__68719 = ctx;
var G__68720 = (new cljs.core.List(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),(new cljs.core.List(null,cljs.core.PersistentVector.EMPTY,(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body),null,(1),null)),(2),null)),(3),null));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__68719,G__68720) : sci.impl.analyzer.analyze.call(null,G__68719,G__68720));
})(),null,(1),null)),(2),null)));
});
sci.impl.analyzer.return_if = (function sci$impl$analyzer$return_if(ctx,expr){
var exprs = cljs.core.rest(expr);
var children = sci.impl.analyzer.analyze_children(ctx,exprs);
var G__68726 = cljs.core.count(children);
switch (G__68726) {
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
var v = (function (){var G__68739 = ctx;
var G__68740 = cljs.core.second(expr);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__68739,G__68740) : sci.impl.analyzer.analyze.call(null,G__68739,G__68740));
})();
var clauses = cljs.core.nnext(expr);
var match_clauses = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),clauses);
var result_clauses = sci.impl.analyzer.analyze_children(ctx,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(clauses)));
var default$ = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),(function (){var G__68744 = ctx;
var G__68745 = cljs.core.last(clauses);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__68744,G__68745) : sci.impl.analyzer.analyze.call(null,G__68744,G__68745));
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
var vec__68758 = cases__$1;
var seq__68759 = cljs.core.seq(vec__68758);
var first__68760 = cljs.core.first(seq__68759);
var seq__68759__$1 = cljs.core.next(seq__68759);
var k = first__68760;
var first__68760__$1 = cljs.core.first(seq__68759__$1);
var seq__68759__$2 = cljs.core.next(seq__68759__$1);
var v__$1 = first__68760__$1;
var cases__$2 = seq__68759__$2;
if(cljs.core.list_QMARK_(k)){
var G__70644 = cases__$2;
var G__70645 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (cases__$1,ret_map,vec__68758,seq__68759,first__68760,seq__68759__$1,k,first__68760__$1,seq__68759__$2,v__$1,cases__$2,v,clauses,match_clauses,result_clauses,default$,cases,assoc_new){
return (function (acc,k__$1){
return assoc_new(acc,k__$1,v__$1);
});})(cases__$1,ret_map,vec__68758,seq__68759,first__68760,seq__68759__$1,k,first__68760__$1,seq__68759__$2,v__$1,cases__$2,v,clauses,match_clauses,result_clauses,default$,cases,assoc_new))
,ret_map,k);
cases__$1 = G__70644;
ret_map = G__70645;
continue;
} else {
var G__70654 = cases__$2;
var G__70655 = assoc_new(ret_map,k,v__$1);
cases__$1 = G__70654;
ret_map = G__70655;
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
sci.impl.analyzer.expand_try = (function sci$impl$analyzer$expand_try(ctx,p__68770){
var vec__68772 = p__68770;
var seq__68773 = cljs.core.seq(vec__68772);
var first__68774 = cljs.core.first(seq__68773);
var seq__68773__$1 = cljs.core.next(seq__68773);
var _try = first__68774;
var body = seq__68773__$1;
var vec__68775 = (function (){var exprs = cljs.core.seq(body);
var body_exprs = cljs.core.PersistentVector.EMPTY;
var catch_exprs = cljs.core.PersistentVector.EMPTY;
var finally_expr = null;
while(true){
if(exprs){
var expr = cljs.core.first(exprs);
var exprs__$1 = cljs.core.next(exprs);
if(((cljs.core.seq_QMARK_(expr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"catch","catch",-1616370245,null),cljs.core.first(expr))))){
var G__70672 = exprs__$1;
var G__70673 = body_exprs;
var G__70674 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(catch_exprs,expr);
var G__70675 = finally_expr;
exprs = G__70672;
body_exprs = G__70673;
catch_exprs = G__70674;
finally_expr = G__70675;
continue;
} else {
if(((cljs.core.not(exprs__$1)) && (((cljs.core.seq_QMARK_(expr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"finally","finally",-1065347064,null),cljs.core.first(expr))))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_exprs,catch_exprs,expr], null);
} else {
var G__70677 = exprs__$1;
var G__70678 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(body_exprs,expr);
var G__70679 = catch_exprs;
var G__70680 = finally_expr;
exprs = G__70677;
body_exprs = G__70678;
catch_exprs = G__70679;
finally_expr = G__70680;
continue;

}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_exprs,catch_exprs,finally_expr], null);
}
break;
}
})();
var body_exprs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68775,(0),null);
var catches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68775,(1),null);
var finally$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68775,(2),null);
var body__$1 = (function (){var G__68788 = ctx;
var G__68789 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body_exprs);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__68788,G__68789) : sci.impl.analyzer.analyze.call(null,G__68788,G__68789));
})();
var catches__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (c){
var vec__68793 = c;
var seq__68794 = cljs.core.seq(vec__68793);
var first__68795 = cljs.core.first(seq__68794);
var seq__68794__$1 = cljs.core.next(seq__68794);
var _ = first__68795;
var first__68795__$1 = cljs.core.first(seq__68794__$1);
var seq__68794__$2 = cljs.core.next(seq__68794__$1);
var ex = first__68795__$1;
var first__68795__$2 = cljs.core.first(seq__68794__$2);
var seq__68794__$3 = cljs.core.next(seq__68794__$2);
var binding = first__68795__$2;
var body__$2 = seq__68794__$3;
var temp__5751__auto__ = sci.impl.interop.resolve_class(ctx,ex);
if(cljs.core.truth_(temp__5751__auto__)){
var clazz = temp__5751__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),clazz,new cljs.core.Keyword(null,"binding","binding",539932593),binding,new cljs.core.Keyword(null,"body","body",-2049205669),(function (){var G__68798 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),binding], null),null);
var G__68799 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body__$2);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__68798,G__68799) : sci.impl.analyzer.analyze.call(null,G__68798,G__68799));
})()], null);
} else {
return sci.impl.analyzer.throw_error_with_location(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ex)].join(''),ex);
}
}),catches);
var finally$__$1 = (cljs.core.truth_(finally$)?(function (){var G__68800 = ctx;
var G__68801 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.rest(finally$));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__68800,G__68801) : sci.impl.analyzer.analyze.call(null,G__68800,G__68801));
})():null);
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"body","body",-2049205669),body__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617),catches__$1,new cljs.core.Keyword(null,"finally","finally",1589088705),finally$__$1], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"try","try",1380742522)], null));
});
sci.impl.analyzer.expand_declare = (function sci$impl$analyzer$expand_declare(ctx,p__68806){
var vec__68807 = p__68806;
var seq__68808 = cljs.core.seq(vec__68807);
var first__68809 = cljs.core.first(seq__68808);
var seq__68808__$1 = cljs.core.next(seq__68808);
var _declare = first__68809;
var names = seq__68808__$1;
var expr = vec__68807;
var cnn_70710 = sci.impl.vars.current_ns_name();
var env_70711 = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var the_current_ns_70712 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(env_70711),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_70710], null));
var refers_70713 = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns_70712);
var the_current_ns_70714__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,name){
var temp__5751__auto__ = (function (){var and__4115__auto__ = refers_70713;
if(cljs.core.truth_(and__4115__auto__)){
return refers_70713.get(name);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var x = temp__5751__auto__;
return sci.impl.analyzer.throw_error_with_location([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," already refers to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," in namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn_70710)].join(''),expr);
} else {
if(cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns_70712,name))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,name,(function (){var G__68815 = sci.impl.vars.__GT_SciVar(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn_70710),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], null),false);
G__68815.sci$impl$vars$IVar$unbind$arity$1(null);

return G__68815;
})());
} else {
return the_current_ns_70712;
}
}
}),the_current_ns_70712,names);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_70711,(function (env__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.assoc,cnn_70710,the_current_ns_70714__$1);
}));

return null;
});
sci.impl.analyzer.expand_dot = (function sci$impl$analyzer$expand_dot(ctx,p__68827){
var vec__68831 = p__68827;
var seq__68832 = cljs.core.seq(vec__68831);
var first__68833 = cljs.core.first(seq__68832);
var seq__68832__$1 = cljs.core.next(seq__68832);
var _dot = first__68833;
var first__68833__$1 = cljs.core.first(seq__68832__$1);
var seq__68832__$2 = cljs.core.next(seq__68832__$1);
var instance_expr = first__68833__$1;
var first__68833__$2 = cljs.core.first(seq__68832__$2);
var seq__68832__$3 = cljs.core.next(seq__68832__$2);
var method_expr = first__68833__$2;
var args = seq__68832__$3;
var _expr = vec__68831;
var vec__68836 = ((cljs.core.seq_QMARK_(method_expr))?method_expr:cljs.core.cons(method_expr,args));
var seq__68837 = cljs.core.seq(vec__68836);
var first__68838 = cljs.core.first(seq__68837);
var seq__68837__$1 = cljs.core.next(seq__68837);
var method_expr__$1 = first__68838;
var args__$1 = seq__68837__$1;
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
sci.impl.analyzer.expand_dot_STAR_ = (function sci$impl$analyzer$expand_dot_STAR_(ctx,p__68850){
var vec__68852 = p__68850;
var seq__68853 = cljs.core.seq(vec__68852);
var first__68854 = cljs.core.first(seq__68853);
var seq__68853__$1 = cljs.core.next(seq__68853);
var method_name = first__68854;
var first__68854__$1 = cljs.core.first(seq__68853__$1);
var seq__68853__$2 = cljs.core.next(seq__68853__$1);
var obj = first__68854__$1;
var args = seq__68853__$2;
var expr = vec__68852;
if((cljs.core.count(expr) < (2))){
throw (new Error("Malformed member expression, expecting (.member target ...)"));
} else {
}

return sci.impl.analyzer.expand_dot(ctx,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),(new cljs.core.List(null,obj,(new cljs.core.List(null,cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.name(method_name),(1))),args),null,(1),null)),(2),null)),(3),null)));
});
sci.impl.analyzer.expand_new = (function sci$impl$analyzer$expand_new(ctx,p__68860){
var vec__68861 = p__68860;
var seq__68862 = cljs.core.seq(vec__68861);
var first__68863 = cljs.core.first(seq__68862);
var seq__68862__$1 = cljs.core.next(seq__68862);
var _new = first__68863;
var first__68863__$1 = cljs.core.first(seq__68862__$1);
var seq__68862__$2 = cljs.core.next(seq__68862__$1);
var class_sym = first__68863__$1;
var args = seq__68862__$2;
var _expr = vec__68861;
var temp__5751__auto__ = sci.impl.interop.resolve_class_opts(ctx,class_sym);
if(cljs.core.truth_(temp__5751__auto__)){
var map__68866 = temp__5751__auto__;
var map__68866__$1 = (((((!((map__68866 == null))))?(((((map__68866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68866):map__68866);
var _opts = map__68866__$1;
var constructor$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68866__$1,new cljs.core.Keyword(null,"constructor","constructor",-1953928811));
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
sci.impl.analyzer.expand_constructor = (function sci$impl$analyzer$expand_constructor(ctx,p__68884){
var vec__68885 = p__68884;
var seq__68886 = cljs.core.seq(vec__68885);
var first__68887 = cljs.core.first(seq__68886);
var seq__68886__$1 = cljs.core.next(seq__68886);
var constructor_sym = first__68887;
var args = seq__68886__$1;
var constructor_name = cljs.core.name(constructor_sym);
var class_sym = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(constructor_name,(0),(((constructor_name).length) - (1)))),cljs.core.meta(constructor_sym));
return sci.impl.analyzer.expand_new(ctx,cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"new","new",-444906321,null),class_sym,args),cljs.core.meta(constructor_sym)));
});
sci.impl.analyzer.analyze_ns_form = (function sci$impl$analyzer$analyze_ns_form(ctx,p__68890){
var vec__68892 = p__68890;
var seq__68893 = cljs.core.seq(vec__68892);
var first__68894 = cljs.core.first(seq__68893);
var seq__68893__$1 = cljs.core.next(seq__68893);
var _ns = first__68894;
var first__68894__$1 = cljs.core.first(seq__68893__$1);
var seq__68893__$2 = cljs.core.next(seq__68893__$1);
var ns_name = first__68894__$1;
var exprs = seq__68893__$2;
var expr = vec__68892;
if((ns_name instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Namespace name must be symbol, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns_name], 0))].join('')));
}

var vec__68902 = (function (){var fexpr = cljs.core.first(exprs);
if(typeof fexpr === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fexpr,cljs.core.next(exprs)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,exprs], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68902,(0),null);
var exprs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68902,(1),null);
var vec__68905 = (function (){var m = cljs.core.first(exprs__$1);
if(cljs.core.map_QMARK_(m)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,cljs.core.next(exprs__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,exprs__$1], null);
}
})();
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68905,(0),null);
var exprs__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68905,(1),null);
var attr_map__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attr_map,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):attr_map);
sci.impl.utils.set_namespace_BANG_(ctx,ns_name,attr_map__$1);

var exprs__$3 = exprs__$2;
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(exprs__$3)){
var vec__68912 = cljs.core.first(exprs__$3);
var seq__68913 = cljs.core.seq(vec__68912);
var first__68914 = cljs.core.first(seq__68913);
var seq__68913__$1 = cljs.core.next(seq__68913);
var k = first__68914;
var args = seq__68913__$1;
var expr__$1 = vec__68912;
var G__68915 = k;
var G__68915__$1 = (((G__68915 instanceof cljs.core.Keyword))?G__68915.fqn:null);
switch (G__68915__$1) {
case "require":
case "use":
var G__70835 = cljs.core.next(exprs__$3);
var G__70836 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),args),cljs.core.meta(expr__$1))));
exprs__$3 = G__70835;
ret = G__70836;
continue;

break;
case "import":
var G__70838 = cljs.core.next(exprs__$3);
var G__70839 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"import","import",241030818,null),args),cljs.core.meta(expr__$1))));
exprs__$3 = G__70838;
ret = G__70839;
continue;

break;
case "refer-clojure":
var G__70842 = cljs.core.next(exprs__$3);
var G__70843 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"refer","refer",676235974,null),new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),args),cljs.core.meta(expr__$1))));
exprs__$3 = G__70842;
ret = G__70843;
continue;

break;
case "gen-class":
var G__70848 = cljs.core.next(exprs__$3);
var G__70849 = ret;
exprs__$3 = G__70848;
ret = G__70849;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68915__$1)].join('')));

}
} else {
return sci.impl.analyzer.return_do(expr,ret);
}
break;
}
});
sci.impl.analyzer.analyze_var = (function sci$impl$analyzer$analyze_var(ctx,p__68916){
var vec__68917 = p__68916;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68917,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68917,(1),null);
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","prevent-deref","sci.impl/prevent-deref",-1401491385),true),var_name);
});
sci.impl.analyzer.analyze_set_BANG_ = (function sci$impl$analyzer$analyze_set_BANG_(ctx,p__68922){
var vec__68925 = p__68922;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68925,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68925,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68925,(2),null);
var obj__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.analyzer.analyze.call(null,ctx,obj));
var v__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.analyzer.analyze.call(null,ctx,v));
var obj__$2 = sci.impl.types.getVal(obj__$1);
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),(new cljs.core.List(null,obj__$2,(new cljs.core.List(null,v__$1,null,(1),null)),(2),null)),(3),null)));
});
sci.impl.analyzer.return_binding_call = (function sci$impl$analyzer$return_binding_call(_ctx,expr,f,analyzed_children){
return sci.impl.utils.ctx_fn((function (){var G__68936 = cljs.core.count(analyzed_children);
switch (G__68936) {
case (0):
return (function (ctx){
var fexpr__68938 = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192)).get(f);
return (fexpr__68938.cljs$core$IFn$_invoke$arity$0 ? fexpr__68938.cljs$core$IFn$_invoke$arity$0() : fexpr__68938.call(null));
});

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
return (function (ctx){
var G__68946 = sci.impl.evaluator.eval(ctx,arg0);
var fexpr__68945 = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192)).get(f);
return (fexpr__68945.cljs$core$IFn$_invoke$arity$1 ? fexpr__68945.cljs$core$IFn$_invoke$arity$1(G__68946) : fexpr__68945.call(null,G__68946));
});

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return (function (ctx){
var G__68950 = sci.impl.evaluator.eval(ctx,arg0);
var G__68951 = sci.impl.evaluator.eval(ctx,arg1);
var fexpr__68949 = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192)).get(f);
return (fexpr__68949.cljs$core$IFn$_invoke$arity$2 ? fexpr__68949.cljs$core$IFn$_invoke$arity$2(G__68950,G__68951) : fexpr__68949.call(null,G__68950,G__68951));
});

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return (function (ctx){
var G__68958 = sci.impl.evaluator.eval(ctx,arg0);
var G__68959 = sci.impl.evaluator.eval(ctx,arg1);
var G__68960 = sci.impl.evaluator.eval(ctx,arg2);
var fexpr__68957 = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192)).get(f);
return (fexpr__68957.cljs$core$IFn$_invoke$arity$3 ? fexpr__68957.cljs$core$IFn$_invoke$arity$3(G__68958,G__68959,G__68960) : fexpr__68957.call(null,G__68958,G__68959,G__68960));
});

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return (function (ctx){
var G__68967 = sci.impl.evaluator.eval(ctx,arg0);
var G__68968 = sci.impl.evaluator.eval(ctx,arg1);
var G__68969 = sci.impl.evaluator.eval(ctx,arg2);
var G__68970 = sci.impl.evaluator.eval(ctx,arg3);
var fexpr__68966 = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192)).get(f);
return (fexpr__68966.cljs$core$IFn$_invoke$arity$4 ? fexpr__68966.cljs$core$IFn$_invoke$arity$4(G__68967,G__68968,G__68969,G__68970) : fexpr__68966.call(null,G__68967,G__68968,G__68969,G__68970));
});

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return (function (ctx){
var G__68977 = sci.impl.evaluator.eval(ctx,arg0);
var G__68978 = sci.impl.evaluator.eval(ctx,arg1);
var G__68979 = sci.impl.evaluator.eval(ctx,arg2);
var G__68980 = sci.impl.evaluator.eval(ctx,arg3);
var G__68981 = sci.impl.evaluator.eval(ctx,arg4);
var fexpr__68976 = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192)).get(f);
return (fexpr__68976.cljs$core$IFn$_invoke$arity$5 ? fexpr__68976.cljs$core$IFn$_invoke$arity$5(G__68977,G__68978,G__68979,G__68980,G__68981) : fexpr__68976.call(null,G__68977,G__68978,G__68979,G__68980,G__68981));
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
var G__68986 = sci.impl.evaluator.eval(ctx,arg0);
var G__68987 = sci.impl.evaluator.eval(ctx,arg1);
var G__68988 = sci.impl.evaluator.eval(ctx,arg2);
var G__68989 = sci.impl.evaluator.eval(ctx,arg3);
var G__68990 = sci.impl.evaluator.eval(ctx,arg4);
var G__68991 = sci.impl.evaluator.eval(ctx,arg5);
var fexpr__68985 = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192)).get(f);
return (fexpr__68985.cljs$core$IFn$_invoke$arity$6 ? fexpr__68985.cljs$core$IFn$_invoke$arity$6(G__68986,G__68987,G__68988,G__68989,G__68990,G__68991) : fexpr__68985.call(null,G__68986,G__68987,G__68988,G__68989,G__68990,G__68991));
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
var G__68996 = sci.impl.evaluator.eval(ctx,arg0);
var G__68997 = sci.impl.evaluator.eval(ctx,arg1);
var G__68998 = sci.impl.evaluator.eval(ctx,arg2);
var G__68999 = sci.impl.evaluator.eval(ctx,arg3);
var G__69000 = sci.impl.evaluator.eval(ctx,arg4);
var G__69001 = sci.impl.evaluator.eval(ctx,arg5);
var G__69002 = sci.impl.evaluator.eval(ctx,arg6);
var fexpr__68995 = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192)).get(f);
return (fexpr__68995.cljs$core$IFn$_invoke$arity$7 ? fexpr__68995.cljs$core$IFn$_invoke$arity$7(G__68996,G__68997,G__68998,G__68999,G__69000,G__69001,G__69002) : fexpr__68995.call(null,G__68996,G__68997,G__68998,G__68999,G__69000,G__69001,G__69002));
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
var G__69009 = sci.impl.evaluator.eval(ctx,arg0);
var G__69010 = sci.impl.evaluator.eval(ctx,arg1);
var G__69011 = sci.impl.evaluator.eval(ctx,arg2);
var G__69012 = sci.impl.evaluator.eval(ctx,arg3);
var G__69013 = sci.impl.evaluator.eval(ctx,arg4);
var G__69014 = sci.impl.evaluator.eval(ctx,arg5);
var G__69015 = sci.impl.evaluator.eval(ctx,arg6);
var G__69016 = sci.impl.evaluator.eval(ctx,arg7);
var fexpr__69008 = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192)).get(f);
return (fexpr__69008.cljs$core$IFn$_invoke$arity$8 ? fexpr__69008.cljs$core$IFn$_invoke$arity$8(G__69009,G__69010,G__69011,G__69012,G__69013,G__69014,G__69015,G__69016) : fexpr__69008.call(null,G__69009,G__69010,G__69011,G__69012,G__69013,G__69014,G__69015,G__69016));
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
var G__69030 = sci.impl.evaluator.eval(ctx,arg0);
var G__69031 = sci.impl.evaluator.eval(ctx,arg1);
var G__69032 = sci.impl.evaluator.eval(ctx,arg2);
var G__69033 = sci.impl.evaluator.eval(ctx,arg3);
var G__69034 = sci.impl.evaluator.eval(ctx,arg4);
var G__69035 = sci.impl.evaluator.eval(ctx,arg5);
var G__69036 = sci.impl.evaluator.eval(ctx,arg6);
var G__69037 = sci.impl.evaluator.eval(ctx,arg7);
var G__69038 = sci.impl.evaluator.eval(ctx,arg8);
var fexpr__69029 = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192)).get(f);
return (fexpr__69029.cljs$core$IFn$_invoke$arity$9 ? fexpr__69029.cljs$core$IFn$_invoke$arity$9(G__69030,G__69031,G__69032,G__69033,G__69034,G__69035,G__69036,G__69037,G__69038) : fexpr__69029.call(null,G__69030,G__69031,G__69032,G__69033,G__69034,G__69035,G__69036,G__69037,G__69038));
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
var G__69060 = sci.impl.evaluator.eval(ctx,arg0);
var G__69061 = sci.impl.evaluator.eval(ctx,arg1);
var G__69062 = sci.impl.evaluator.eval(ctx,arg2);
var G__69063 = sci.impl.evaluator.eval(ctx,arg3);
var G__69064 = sci.impl.evaluator.eval(ctx,arg4);
var G__69065 = sci.impl.evaluator.eval(ctx,arg5);
var G__69066 = sci.impl.evaluator.eval(ctx,arg6);
var G__69067 = sci.impl.evaluator.eval(ctx,arg7);
var G__69068 = sci.impl.evaluator.eval(ctx,arg8);
var G__69069 = sci.impl.evaluator.eval(ctx,arg9);
var fexpr__69059 = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192)).get(f);
return (fexpr__69059.cljs$core$IFn$_invoke$arity$10 ? fexpr__69059.cljs$core$IFn$_invoke$arity$10(G__69060,G__69061,G__69062,G__69063,G__69064,G__69065,G__69066,G__69067,G__69068,G__69069) : fexpr__69059.call(null,G__69060,G__69061,G__69062,G__69063,G__69064,G__69065,G__69066,G__69067,G__69068,G__69069));
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
var G__69078 = sci.impl.evaluator.eval(ctx,arg0);
var G__69079 = sci.impl.evaluator.eval(ctx,arg1);
var G__69080 = sci.impl.evaluator.eval(ctx,arg2);
var G__69081 = sci.impl.evaluator.eval(ctx,arg3);
var G__69082 = sci.impl.evaluator.eval(ctx,arg4);
var G__69083 = sci.impl.evaluator.eval(ctx,arg5);
var G__69084 = sci.impl.evaluator.eval(ctx,arg6);
var G__69085 = sci.impl.evaluator.eval(ctx,arg7);
var G__69086 = sci.impl.evaluator.eval(ctx,arg8);
var G__69087 = sci.impl.evaluator.eval(ctx,arg9);
var G__69088 = sci.impl.evaluator.eval(ctx,arg10);
var fexpr__69077 = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192)).get(f);
return (fexpr__69077.cljs$core$IFn$_invoke$arity$11 ? fexpr__69077.cljs$core$IFn$_invoke$arity$11(G__69078,G__69079,G__69080,G__69081,G__69082,G__69083,G__69084,G__69085,G__69086,G__69087,G__69088) : fexpr__69077.call(null,G__69078,G__69079,G__69080,G__69081,G__69082,G__69083,G__69084,G__69085,G__69086,G__69087,G__69088));
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
var G__69123 = sci.impl.evaluator.eval(ctx,arg0);
var G__69124 = sci.impl.evaluator.eval(ctx,arg1);
var G__69125 = sci.impl.evaluator.eval(ctx,arg2);
var G__69126 = sci.impl.evaluator.eval(ctx,arg3);
var G__69127 = sci.impl.evaluator.eval(ctx,arg4);
var G__69128 = sci.impl.evaluator.eval(ctx,arg5);
var G__69129 = sci.impl.evaluator.eval(ctx,arg6);
var G__69130 = sci.impl.evaluator.eval(ctx,arg7);
var G__69131 = sci.impl.evaluator.eval(ctx,arg8);
var G__69132 = sci.impl.evaluator.eval(ctx,arg9);
var G__69133 = sci.impl.evaluator.eval(ctx,arg10);
var G__69134 = sci.impl.evaluator.eval(ctx,arg11);
var fexpr__69122 = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192)).get(f);
return (fexpr__69122.cljs$core$IFn$_invoke$arity$12 ? fexpr__69122.cljs$core$IFn$_invoke$arity$12(G__69123,G__69124,G__69125,G__69126,G__69127,G__69128,G__69129,G__69130,G__69131,G__69132,G__69133,G__69134) : fexpr__69122.call(null,G__69123,G__69124,G__69125,G__69126,G__69127,G__69128,G__69129,G__69130,G__69131,G__69132,G__69133,G__69134));
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
var G__69158 = sci.impl.evaluator.eval(ctx,arg0);
var G__69159 = sci.impl.evaluator.eval(ctx,arg1);
var G__69160 = sci.impl.evaluator.eval(ctx,arg2);
var G__69161 = sci.impl.evaluator.eval(ctx,arg3);
var G__69162 = sci.impl.evaluator.eval(ctx,arg4);
var G__69163 = sci.impl.evaluator.eval(ctx,arg5);
var G__69164 = sci.impl.evaluator.eval(ctx,arg6);
var G__69165 = sci.impl.evaluator.eval(ctx,arg7);
var G__69166 = sci.impl.evaluator.eval(ctx,arg8);
var G__69167 = sci.impl.evaluator.eval(ctx,arg9);
var G__69168 = sci.impl.evaluator.eval(ctx,arg10);
var G__69169 = sci.impl.evaluator.eval(ctx,arg11);
var G__69170 = sci.impl.evaluator.eval(ctx,arg12);
var fexpr__69157 = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192)).get(f);
return (fexpr__69157.cljs$core$IFn$_invoke$arity$13 ? fexpr__69157.cljs$core$IFn$_invoke$arity$13(G__69158,G__69159,G__69160,G__69161,G__69162,G__69163,G__69164,G__69165,G__69166,G__69167,G__69168,G__69169,G__69170) : fexpr__69157.call(null,G__69158,G__69159,G__69160,G__69161,G__69162,G__69163,G__69164,G__69165,G__69166,G__69167,G__69168,G__69169,G__69170));
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
var G__69192 = sci.impl.evaluator.eval(ctx,arg0);
var G__69193 = sci.impl.evaluator.eval(ctx,arg1);
var G__69194 = sci.impl.evaluator.eval(ctx,arg2);
var G__69195 = sci.impl.evaluator.eval(ctx,arg3);
var G__69196 = sci.impl.evaluator.eval(ctx,arg4);
var G__69197 = sci.impl.evaluator.eval(ctx,arg5);
var G__69198 = sci.impl.evaluator.eval(ctx,arg6);
var G__69199 = sci.impl.evaluator.eval(ctx,arg7);
var G__69200 = sci.impl.evaluator.eval(ctx,arg8);
var G__69201 = sci.impl.evaluator.eval(ctx,arg9);
var G__69202 = sci.impl.evaluator.eval(ctx,arg10);
var G__69203 = sci.impl.evaluator.eval(ctx,arg11);
var G__69204 = sci.impl.evaluator.eval(ctx,arg12);
var G__69205 = sci.impl.evaluator.eval(ctx,arg13);
var fexpr__69191 = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192)).get(f);
return (fexpr__69191.cljs$core$IFn$_invoke$arity$14 ? fexpr__69191.cljs$core$IFn$_invoke$arity$14(G__69192,G__69193,G__69194,G__69195,G__69196,G__69197,G__69198,G__69199,G__69200,G__69201,G__69202,G__69203,G__69204,G__69205) : fexpr__69191.call(null,G__69192,G__69193,G__69194,G__69195,G__69196,G__69197,G__69198,G__69199,G__69200,G__69201,G__69202,G__69203,G__69204,G__69205));
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
var G__69212 = sci.impl.evaluator.eval(ctx,arg0);
var G__69213 = sci.impl.evaluator.eval(ctx,arg1);
var G__69214 = sci.impl.evaluator.eval(ctx,arg2);
var G__69215 = sci.impl.evaluator.eval(ctx,arg3);
var G__69216 = sci.impl.evaluator.eval(ctx,arg4);
var G__69217 = sci.impl.evaluator.eval(ctx,arg5);
var G__69218 = sci.impl.evaluator.eval(ctx,arg6);
var G__69219 = sci.impl.evaluator.eval(ctx,arg7);
var G__69220 = sci.impl.evaluator.eval(ctx,arg8);
var G__69221 = sci.impl.evaluator.eval(ctx,arg9);
var G__69222 = sci.impl.evaluator.eval(ctx,arg10);
var G__69223 = sci.impl.evaluator.eval(ctx,arg11);
var G__69224 = sci.impl.evaluator.eval(ctx,arg12);
var G__69225 = sci.impl.evaluator.eval(ctx,arg13);
var G__69226 = sci.impl.evaluator.eval(ctx,arg14);
var fexpr__69211 = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192)).get(f);
return (fexpr__69211.cljs$core$IFn$_invoke$arity$15 ? fexpr__69211.cljs$core$IFn$_invoke$arity$15(G__69212,G__69213,G__69214,G__69215,G__69216,G__69217,G__69218,G__69219,G__69220,G__69221,G__69222,G__69223,G__69224,G__69225,G__69226) : fexpr__69211.call(null,G__69212,G__69213,G__69214,G__69215,G__69216,G__69217,G__69218,G__69219,G__69220,G__69221,G__69222,G__69223,G__69224,G__69225,G__69226));
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
var G__69238 = sci.impl.evaluator.eval(ctx,arg0);
var G__69239 = sci.impl.evaluator.eval(ctx,arg1);
var G__69240 = sci.impl.evaluator.eval(ctx,arg2);
var G__69241 = sci.impl.evaluator.eval(ctx,arg3);
var G__69242 = sci.impl.evaluator.eval(ctx,arg4);
var G__69243 = sci.impl.evaluator.eval(ctx,arg5);
var G__69244 = sci.impl.evaluator.eval(ctx,arg6);
var G__69245 = sci.impl.evaluator.eval(ctx,arg7);
var G__69246 = sci.impl.evaluator.eval(ctx,arg8);
var G__69247 = sci.impl.evaluator.eval(ctx,arg9);
var G__69248 = sci.impl.evaluator.eval(ctx,arg10);
var G__69249 = sci.impl.evaluator.eval(ctx,arg11);
var G__69250 = sci.impl.evaluator.eval(ctx,arg12);
var G__69251 = sci.impl.evaluator.eval(ctx,arg13);
var G__69252 = sci.impl.evaluator.eval(ctx,arg14);
var G__69253 = sci.impl.evaluator.eval(ctx,arg15);
var fexpr__69237 = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192)).get(f);
return (fexpr__69237.cljs$core$IFn$_invoke$arity$16 ? fexpr__69237.cljs$core$IFn$_invoke$arity$16(G__69238,G__69239,G__69240,G__69241,G__69242,G__69243,G__69244,G__69245,G__69246,G__69247,G__69248,G__69249,G__69250,G__69251,G__69252,G__69253) : fexpr__69237.call(null,G__69238,G__69239,G__69240,G__69241,G__69242,G__69243,G__69244,G__69245,G__69246,G__69247,G__69248,G__69249,G__69250,G__69251,G__69252,G__69253));
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
var G__69263 = sci.impl.evaluator.eval(ctx,arg0);
var G__69264 = sci.impl.evaluator.eval(ctx,arg1);
var G__69265 = sci.impl.evaluator.eval(ctx,arg2);
var G__69266 = sci.impl.evaluator.eval(ctx,arg3);
var G__69267 = sci.impl.evaluator.eval(ctx,arg4);
var G__69268 = sci.impl.evaluator.eval(ctx,arg5);
var G__69269 = sci.impl.evaluator.eval(ctx,arg6);
var G__69270 = sci.impl.evaluator.eval(ctx,arg7);
var G__69271 = sci.impl.evaluator.eval(ctx,arg8);
var G__69272 = sci.impl.evaluator.eval(ctx,arg9);
var G__69273 = sci.impl.evaluator.eval(ctx,arg10);
var G__69274 = sci.impl.evaluator.eval(ctx,arg11);
var G__69275 = sci.impl.evaluator.eval(ctx,arg12);
var G__69276 = sci.impl.evaluator.eval(ctx,arg13);
var G__69277 = sci.impl.evaluator.eval(ctx,arg14);
var G__69278 = sci.impl.evaluator.eval(ctx,arg15);
var G__69279 = sci.impl.evaluator.eval(ctx,arg16);
var fexpr__69262 = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192)).get(f);
return (fexpr__69262.cljs$core$IFn$_invoke$arity$17 ? fexpr__69262.cljs$core$IFn$_invoke$arity$17(G__69263,G__69264,G__69265,G__69266,G__69267,G__69268,G__69269,G__69270,G__69271,G__69272,G__69273,G__69274,G__69275,G__69276,G__69277,G__69278,G__69279) : fexpr__69262.call(null,G__69263,G__69264,G__69265,G__69266,G__69267,G__69268,G__69269,G__69270,G__69271,G__69272,G__69273,G__69274,G__69275,G__69276,G__69277,G__69278,G__69279));
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
var G__69311 = sci.impl.evaluator.eval(ctx,arg0);
var G__69312 = sci.impl.evaluator.eval(ctx,arg1);
var G__69313 = sci.impl.evaluator.eval(ctx,arg2);
var G__69314 = sci.impl.evaluator.eval(ctx,arg3);
var G__69315 = sci.impl.evaluator.eval(ctx,arg4);
var G__69316 = sci.impl.evaluator.eval(ctx,arg5);
var G__69317 = sci.impl.evaluator.eval(ctx,arg6);
var G__69318 = sci.impl.evaluator.eval(ctx,arg7);
var G__69319 = sci.impl.evaluator.eval(ctx,arg8);
var G__69320 = sci.impl.evaluator.eval(ctx,arg9);
var G__69321 = sci.impl.evaluator.eval(ctx,arg10);
var G__69322 = sci.impl.evaluator.eval(ctx,arg11);
var G__69323 = sci.impl.evaluator.eval(ctx,arg12);
var G__69324 = sci.impl.evaluator.eval(ctx,arg13);
var G__69325 = sci.impl.evaluator.eval(ctx,arg14);
var G__69326 = sci.impl.evaluator.eval(ctx,arg15);
var G__69327 = sci.impl.evaluator.eval(ctx,arg16);
var G__69328 = sci.impl.evaluator.eval(ctx,arg17);
var fexpr__69310 = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192)).get(f);
return (fexpr__69310.cljs$core$IFn$_invoke$arity$18 ? fexpr__69310.cljs$core$IFn$_invoke$arity$18(G__69311,G__69312,G__69313,G__69314,G__69315,G__69316,G__69317,G__69318,G__69319,G__69320,G__69321,G__69322,G__69323,G__69324,G__69325,G__69326,G__69327,G__69328) : fexpr__69310.call(null,G__69311,G__69312,G__69313,G__69314,G__69315,G__69316,G__69317,G__69318,G__69319,G__69320,G__69321,G__69322,G__69323,G__69324,G__69325,G__69326,G__69327,G__69328));
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
var G__69342 = sci.impl.evaluator.eval(ctx,arg0);
var G__69343 = sci.impl.evaluator.eval(ctx,arg1);
var G__69344 = sci.impl.evaluator.eval(ctx,arg2);
var G__69345 = sci.impl.evaluator.eval(ctx,arg3);
var G__69346 = sci.impl.evaluator.eval(ctx,arg4);
var G__69347 = sci.impl.evaluator.eval(ctx,arg5);
var G__69348 = sci.impl.evaluator.eval(ctx,arg6);
var G__69349 = sci.impl.evaluator.eval(ctx,arg7);
var G__69350 = sci.impl.evaluator.eval(ctx,arg8);
var G__69351 = sci.impl.evaluator.eval(ctx,arg9);
var G__69352 = sci.impl.evaluator.eval(ctx,arg10);
var G__69353 = sci.impl.evaluator.eval(ctx,arg11);
var G__69354 = sci.impl.evaluator.eval(ctx,arg12);
var G__69355 = sci.impl.evaluator.eval(ctx,arg13);
var G__69356 = sci.impl.evaluator.eval(ctx,arg14);
var G__69357 = sci.impl.evaluator.eval(ctx,arg15);
var G__69358 = sci.impl.evaluator.eval(ctx,arg16);
var G__69359 = sci.impl.evaluator.eval(ctx,arg17);
var G__69360 = sci.impl.evaluator.eval(ctx,arg18);
var fexpr__69341 = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192)).get(f);
return (fexpr__69341.cljs$core$IFn$_invoke$arity$19 ? fexpr__69341.cljs$core$IFn$_invoke$arity$19(G__69342,G__69343,G__69344,G__69345,G__69346,G__69347,G__69348,G__69349,G__69350,G__69351,G__69352,G__69353,G__69354,G__69355,G__69356,G__69357,G__69358,G__69359,G__69360) : fexpr__69341.call(null,G__69342,G__69343,G__69344,G__69345,G__69346,G__69347,G__69348,G__69349,G__69350,G__69351,G__69352,G__69353,G__69354,G__69355,G__69356,G__69357,G__69358,G__69359,G__69360));
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
return sci.impl.utils.ctx_fn((function (){var G__69383 = cljs.core.count(analyzed_children);
switch (G__69383) {
case (0):
return (function (ctx){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(ctx) : f.call(null,ctx));
});

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
return (function (ctx){
var G__69386 = ctx;
var G__69387 = sci.impl.evaluator.eval(ctx,arg0);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__69386,G__69387) : f.call(null,G__69386,G__69387));
});

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return (function (ctx){
var G__69392 = ctx;
var G__69393 = sci.impl.evaluator.eval(ctx,arg0);
var G__69394 = sci.impl.evaluator.eval(ctx,arg1);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__69392,G__69393,G__69394) : f.call(null,G__69392,G__69393,G__69394));
});

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return (function (ctx){
var G__69396 = ctx;
var G__69397 = sci.impl.evaluator.eval(ctx,arg0);
var G__69398 = sci.impl.evaluator.eval(ctx,arg1);
var G__69399 = sci.impl.evaluator.eval(ctx,arg2);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__69396,G__69397,G__69398,G__69399) : f.call(null,G__69396,G__69397,G__69398,G__69399));
});

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return (function (ctx){
var G__69402 = ctx;
var G__69403 = sci.impl.evaluator.eval(ctx,arg0);
var G__69404 = sci.impl.evaluator.eval(ctx,arg1);
var G__69405 = sci.impl.evaluator.eval(ctx,arg2);
var G__69406 = sci.impl.evaluator.eval(ctx,arg3);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__69402,G__69403,G__69404,G__69405,G__69406) : f.call(null,G__69402,G__69403,G__69404,G__69405,G__69406));
});

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return (function (ctx){
var G__69411 = ctx;
var G__69412 = sci.impl.evaluator.eval(ctx,arg0);
var G__69413 = sci.impl.evaluator.eval(ctx,arg1);
var G__69414 = sci.impl.evaluator.eval(ctx,arg2);
var G__69415 = sci.impl.evaluator.eval(ctx,arg3);
var G__69416 = sci.impl.evaluator.eval(ctx,arg4);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__69411,G__69412,G__69413,G__69414,G__69415,G__69416) : f.call(null,G__69411,G__69412,G__69413,G__69414,G__69415,G__69416));
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
var G__69417 = ctx;
var G__69418 = sci.impl.evaluator.eval(ctx,arg0);
var G__69419 = sci.impl.evaluator.eval(ctx,arg1);
var G__69420 = sci.impl.evaluator.eval(ctx,arg2);
var G__69421 = sci.impl.evaluator.eval(ctx,arg3);
var G__69422 = sci.impl.evaluator.eval(ctx,arg4);
var G__69423 = sci.impl.evaluator.eval(ctx,arg5);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(G__69417,G__69418,G__69419,G__69420,G__69421,G__69422,G__69423) : f.call(null,G__69417,G__69418,G__69419,G__69420,G__69421,G__69422,G__69423));
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
var G__69425 = ctx;
var G__69426 = sci.impl.evaluator.eval(ctx,arg0);
var G__69427 = sci.impl.evaluator.eval(ctx,arg1);
var G__69428 = sci.impl.evaluator.eval(ctx,arg2);
var G__69429 = sci.impl.evaluator.eval(ctx,arg3);
var G__69430 = sci.impl.evaluator.eval(ctx,arg4);
var G__69431 = sci.impl.evaluator.eval(ctx,arg5);
var G__69432 = sci.impl.evaluator.eval(ctx,arg6);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(G__69425,G__69426,G__69427,G__69428,G__69429,G__69430,G__69431,G__69432) : f.call(null,G__69425,G__69426,G__69427,G__69428,G__69429,G__69430,G__69431,G__69432));
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
var G__69437 = ctx;
var G__69438 = sci.impl.evaluator.eval(ctx,arg0);
var G__69439 = sci.impl.evaluator.eval(ctx,arg1);
var G__69440 = sci.impl.evaluator.eval(ctx,arg2);
var G__69441 = sci.impl.evaluator.eval(ctx,arg3);
var G__69442 = sci.impl.evaluator.eval(ctx,arg4);
var G__69443 = sci.impl.evaluator.eval(ctx,arg5);
var G__69444 = sci.impl.evaluator.eval(ctx,arg6);
var G__69445 = sci.impl.evaluator.eval(ctx,arg7);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(G__69437,G__69438,G__69439,G__69440,G__69441,G__69442,G__69443,G__69444,G__69445) : f.call(null,G__69437,G__69438,G__69439,G__69440,G__69441,G__69442,G__69443,G__69444,G__69445));
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
var G__69447 = ctx;
var G__69448 = sci.impl.evaluator.eval(ctx,arg0);
var G__69449 = sci.impl.evaluator.eval(ctx,arg1);
var G__69450 = sci.impl.evaluator.eval(ctx,arg2);
var G__69451 = sci.impl.evaluator.eval(ctx,arg3);
var G__69452 = sci.impl.evaluator.eval(ctx,arg4);
var G__69453 = sci.impl.evaluator.eval(ctx,arg5);
var G__69454 = sci.impl.evaluator.eval(ctx,arg6);
var G__69455 = sci.impl.evaluator.eval(ctx,arg7);
var G__69456 = sci.impl.evaluator.eval(ctx,arg8);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(G__69447,G__69448,G__69449,G__69450,G__69451,G__69452,G__69453,G__69454,G__69455,G__69456) : f.call(null,G__69447,G__69448,G__69449,G__69450,G__69451,G__69452,G__69453,G__69454,G__69455,G__69456));
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
var G__69460 = ctx;
var G__69461 = sci.impl.evaluator.eval(ctx,arg0);
var G__69462 = sci.impl.evaluator.eval(ctx,arg1);
var G__69463 = sci.impl.evaluator.eval(ctx,arg2);
var G__69464 = sci.impl.evaluator.eval(ctx,arg3);
var G__69465 = sci.impl.evaluator.eval(ctx,arg4);
var G__69466 = sci.impl.evaluator.eval(ctx,arg5);
var G__69467 = sci.impl.evaluator.eval(ctx,arg6);
var G__69468 = sci.impl.evaluator.eval(ctx,arg7);
var G__69469 = sci.impl.evaluator.eval(ctx,arg8);
var G__69470 = sci.impl.evaluator.eval(ctx,arg9);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(G__69460,G__69461,G__69462,G__69463,G__69464,G__69465,G__69466,G__69467,G__69468,G__69469,G__69470) : f.call(null,G__69460,G__69461,G__69462,G__69463,G__69464,G__69465,G__69466,G__69467,G__69468,G__69469,G__69470));
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
var G__69474 = ctx;
var G__69475 = sci.impl.evaluator.eval(ctx,arg0);
var G__69476 = sci.impl.evaluator.eval(ctx,arg1);
var G__69477 = sci.impl.evaluator.eval(ctx,arg2);
var G__69478 = sci.impl.evaluator.eval(ctx,arg3);
var G__69479 = sci.impl.evaluator.eval(ctx,arg4);
var G__69480 = sci.impl.evaluator.eval(ctx,arg5);
var G__69481 = sci.impl.evaluator.eval(ctx,arg6);
var G__69482 = sci.impl.evaluator.eval(ctx,arg7);
var G__69483 = sci.impl.evaluator.eval(ctx,arg8);
var G__69484 = sci.impl.evaluator.eval(ctx,arg9);
var G__69485 = sci.impl.evaluator.eval(ctx,arg10);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(G__69474,G__69475,G__69476,G__69477,G__69478,G__69479,G__69480,G__69481,G__69482,G__69483,G__69484,G__69485) : f.call(null,G__69474,G__69475,G__69476,G__69477,G__69478,G__69479,G__69480,G__69481,G__69482,G__69483,G__69484,G__69485));
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
var G__69495 = ctx;
var G__69496 = sci.impl.evaluator.eval(ctx,arg0);
var G__69497 = sci.impl.evaluator.eval(ctx,arg1);
var G__69498 = sci.impl.evaluator.eval(ctx,arg2);
var G__69499 = sci.impl.evaluator.eval(ctx,arg3);
var G__69500 = sci.impl.evaluator.eval(ctx,arg4);
var G__69501 = sci.impl.evaluator.eval(ctx,arg5);
var G__69502 = sci.impl.evaluator.eval(ctx,arg6);
var G__69503 = sci.impl.evaluator.eval(ctx,arg7);
var G__69504 = sci.impl.evaluator.eval(ctx,arg8);
var G__69505 = sci.impl.evaluator.eval(ctx,arg9);
var G__69506 = sci.impl.evaluator.eval(ctx,arg10);
var G__69507 = sci.impl.evaluator.eval(ctx,arg11);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(G__69495,G__69496,G__69497,G__69498,G__69499,G__69500,G__69501,G__69502,G__69503,G__69504,G__69505,G__69506,G__69507) : f.call(null,G__69495,G__69496,G__69497,G__69498,G__69499,G__69500,G__69501,G__69502,G__69503,G__69504,G__69505,G__69506,G__69507));
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
var G__69511 = ctx;
var G__69512 = sci.impl.evaluator.eval(ctx,arg0);
var G__69513 = sci.impl.evaluator.eval(ctx,arg1);
var G__69514 = sci.impl.evaluator.eval(ctx,arg2);
var G__69515 = sci.impl.evaluator.eval(ctx,arg3);
var G__69516 = sci.impl.evaluator.eval(ctx,arg4);
var G__69517 = sci.impl.evaluator.eval(ctx,arg5);
var G__69518 = sci.impl.evaluator.eval(ctx,arg6);
var G__69519 = sci.impl.evaluator.eval(ctx,arg7);
var G__69520 = sci.impl.evaluator.eval(ctx,arg8);
var G__69521 = sci.impl.evaluator.eval(ctx,arg9);
var G__69522 = sci.impl.evaluator.eval(ctx,arg10);
var G__69523 = sci.impl.evaluator.eval(ctx,arg11);
var G__69524 = sci.impl.evaluator.eval(ctx,arg12);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(G__69511,G__69512,G__69513,G__69514,G__69515,G__69516,G__69517,G__69518,G__69519,G__69520,G__69521,G__69522,G__69523,G__69524) : f.call(null,G__69511,G__69512,G__69513,G__69514,G__69515,G__69516,G__69517,G__69518,G__69519,G__69520,G__69521,G__69522,G__69523,G__69524));
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
var G__69531 = ctx;
var G__69532 = sci.impl.evaluator.eval(ctx,arg0);
var G__69533 = sci.impl.evaluator.eval(ctx,arg1);
var G__69534 = sci.impl.evaluator.eval(ctx,arg2);
var G__69535 = sci.impl.evaluator.eval(ctx,arg3);
var G__69536 = sci.impl.evaluator.eval(ctx,arg4);
var G__69537 = sci.impl.evaluator.eval(ctx,arg5);
var G__69538 = sci.impl.evaluator.eval(ctx,arg6);
var G__69539 = sci.impl.evaluator.eval(ctx,arg7);
var G__69540 = sci.impl.evaluator.eval(ctx,arg8);
var G__69541 = sci.impl.evaluator.eval(ctx,arg9);
var G__69542 = sci.impl.evaluator.eval(ctx,arg10);
var G__69543 = sci.impl.evaluator.eval(ctx,arg11);
var G__69544 = sci.impl.evaluator.eval(ctx,arg12);
var G__69545 = sci.impl.evaluator.eval(ctx,arg13);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(G__69531,G__69532,G__69533,G__69534,G__69535,G__69536,G__69537,G__69538,G__69539,G__69540,G__69541,G__69542,G__69543,G__69544,G__69545) : f.call(null,G__69531,G__69532,G__69533,G__69534,G__69535,G__69536,G__69537,G__69538,G__69539,G__69540,G__69541,G__69542,G__69543,G__69544,G__69545));
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
var G__69552 = ctx;
var G__69553 = sci.impl.evaluator.eval(ctx,arg0);
var G__69554 = sci.impl.evaluator.eval(ctx,arg1);
var G__69555 = sci.impl.evaluator.eval(ctx,arg2);
var G__69556 = sci.impl.evaluator.eval(ctx,arg3);
var G__69557 = sci.impl.evaluator.eval(ctx,arg4);
var G__69558 = sci.impl.evaluator.eval(ctx,arg5);
var G__69559 = sci.impl.evaluator.eval(ctx,arg6);
var G__69560 = sci.impl.evaluator.eval(ctx,arg7);
var G__69561 = sci.impl.evaluator.eval(ctx,arg8);
var G__69562 = sci.impl.evaluator.eval(ctx,arg9);
var G__69563 = sci.impl.evaluator.eval(ctx,arg10);
var G__69564 = sci.impl.evaluator.eval(ctx,arg11);
var G__69565 = sci.impl.evaluator.eval(ctx,arg12);
var G__69566 = sci.impl.evaluator.eval(ctx,arg13);
var G__69567 = sci.impl.evaluator.eval(ctx,arg14);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(G__69552,G__69553,G__69554,G__69555,G__69556,G__69557,G__69558,G__69559,G__69560,G__69561,G__69562,G__69563,G__69564,G__69565,G__69566,G__69567) : f.call(null,G__69552,G__69553,G__69554,G__69555,G__69556,G__69557,G__69558,G__69559,G__69560,G__69561,G__69562,G__69563,G__69564,G__69565,G__69566,G__69567));
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
var G__69581 = ctx;
var G__69582 = sci.impl.evaluator.eval(ctx,arg0);
var G__69583 = sci.impl.evaluator.eval(ctx,arg1);
var G__69584 = sci.impl.evaluator.eval(ctx,arg2);
var G__69585 = sci.impl.evaluator.eval(ctx,arg3);
var G__69586 = sci.impl.evaluator.eval(ctx,arg4);
var G__69587 = sci.impl.evaluator.eval(ctx,arg5);
var G__69588 = sci.impl.evaluator.eval(ctx,arg6);
var G__69589 = sci.impl.evaluator.eval(ctx,arg7);
var G__69590 = sci.impl.evaluator.eval(ctx,arg8);
var G__69591 = sci.impl.evaluator.eval(ctx,arg9);
var G__69592 = sci.impl.evaluator.eval(ctx,arg10);
var G__69593 = sci.impl.evaluator.eval(ctx,arg11);
var G__69594 = sci.impl.evaluator.eval(ctx,arg12);
var G__69595 = sci.impl.evaluator.eval(ctx,arg13);
var G__69596 = sci.impl.evaluator.eval(ctx,arg14);
var G__69597 = sci.impl.evaluator.eval(ctx,arg15);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(G__69581,G__69582,G__69583,G__69584,G__69585,G__69586,G__69587,G__69588,G__69589,G__69590,G__69591,G__69592,G__69593,G__69594,G__69595,G__69596,G__69597) : f.call(null,G__69581,G__69582,G__69583,G__69584,G__69585,G__69586,G__69587,G__69588,G__69589,G__69590,G__69591,G__69592,G__69593,G__69594,G__69595,G__69596,G__69597));
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
var G__69604 = ctx;
var G__69605 = sci.impl.evaluator.eval(ctx,arg0);
var G__69606 = sci.impl.evaluator.eval(ctx,arg1);
var G__69607 = sci.impl.evaluator.eval(ctx,arg2);
var G__69608 = sci.impl.evaluator.eval(ctx,arg3);
var G__69609 = sci.impl.evaluator.eval(ctx,arg4);
var G__69610 = sci.impl.evaluator.eval(ctx,arg5);
var G__69611 = sci.impl.evaluator.eval(ctx,arg6);
var G__69612 = sci.impl.evaluator.eval(ctx,arg7);
var G__69613 = sci.impl.evaluator.eval(ctx,arg8);
var G__69614 = sci.impl.evaluator.eval(ctx,arg9);
var G__69615 = sci.impl.evaluator.eval(ctx,arg10);
var G__69616 = sci.impl.evaluator.eval(ctx,arg11);
var G__69617 = sci.impl.evaluator.eval(ctx,arg12);
var G__69618 = sci.impl.evaluator.eval(ctx,arg13);
var G__69619 = sci.impl.evaluator.eval(ctx,arg14);
var G__69620 = sci.impl.evaluator.eval(ctx,arg15);
var G__69621 = sci.impl.evaluator.eval(ctx,arg16);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(G__69604,G__69605,G__69606,G__69607,G__69608,G__69609,G__69610,G__69611,G__69612,G__69613,G__69614,G__69615,G__69616,G__69617,G__69618,G__69619,G__69620,G__69621) : f.call(null,G__69604,G__69605,G__69606,G__69607,G__69608,G__69609,G__69610,G__69611,G__69612,G__69613,G__69614,G__69615,G__69616,G__69617,G__69618,G__69619,G__69620,G__69621));
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
var G__69637 = ctx;
var G__69638 = sci.impl.evaluator.eval(ctx,arg0);
var G__69639 = sci.impl.evaluator.eval(ctx,arg1);
var G__69640 = sci.impl.evaluator.eval(ctx,arg2);
var G__69641 = sci.impl.evaluator.eval(ctx,arg3);
var G__69642 = sci.impl.evaluator.eval(ctx,arg4);
var G__69643 = sci.impl.evaluator.eval(ctx,arg5);
var G__69644 = sci.impl.evaluator.eval(ctx,arg6);
var G__69645 = sci.impl.evaluator.eval(ctx,arg7);
var G__69646 = sci.impl.evaluator.eval(ctx,arg8);
var G__69647 = sci.impl.evaluator.eval(ctx,arg9);
var G__69648 = sci.impl.evaluator.eval(ctx,arg10);
var G__69649 = sci.impl.evaluator.eval(ctx,arg11);
var G__69650 = sci.impl.evaluator.eval(ctx,arg12);
var G__69651 = sci.impl.evaluator.eval(ctx,arg13);
var G__69652 = sci.impl.evaluator.eval(ctx,arg14);
var G__69653 = sci.impl.evaluator.eval(ctx,arg15);
var G__69654 = sci.impl.evaluator.eval(ctx,arg16);
var G__69655 = sci.impl.evaluator.eval(ctx,arg17);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(G__69637,G__69638,G__69639,G__69640,G__69641,G__69642,G__69643,G__69644,G__69645,G__69646,G__69647,G__69648,G__69649,G__69650,G__69651,G__69652,G__69653,G__69654,G__69655) : f.call(null,G__69637,G__69638,G__69639,G__69640,G__69641,G__69642,G__69643,G__69644,G__69645,G__69646,G__69647,G__69648,G__69649,G__69650,G__69651,G__69652,G__69653,G__69654,G__69655));
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
var G__69666 = ctx;
var G__69667 = sci.impl.evaluator.eval(ctx,arg0);
var G__69668 = sci.impl.evaluator.eval(ctx,arg1);
var G__69669 = sci.impl.evaluator.eval(ctx,arg2);
var G__69670 = sci.impl.evaluator.eval(ctx,arg3);
var G__69671 = sci.impl.evaluator.eval(ctx,arg4);
var G__69672 = sci.impl.evaluator.eval(ctx,arg5);
var G__69673 = sci.impl.evaluator.eval(ctx,arg6);
var G__69674 = sci.impl.evaluator.eval(ctx,arg7);
var G__69675 = sci.impl.evaluator.eval(ctx,arg8);
var G__69676 = sci.impl.evaluator.eval(ctx,arg9);
var G__69677 = sci.impl.evaluator.eval(ctx,arg10);
var G__69678 = sci.impl.evaluator.eval(ctx,arg11);
var G__69679 = sci.impl.evaluator.eval(ctx,arg12);
var G__69680 = sci.impl.evaluator.eval(ctx,arg13);
var G__69681 = sci.impl.evaluator.eval(ctx,arg14);
var G__69682 = sci.impl.evaluator.eval(ctx,arg15);
var G__69683 = sci.impl.evaluator.eval(ctx,arg16);
var G__69684 = sci.impl.evaluator.eval(ctx,arg17);
var G__69685 = sci.impl.evaluator.eval(ctx,arg18);
return (f.cljs$core$IFn$_invoke$arity$20 ? f.cljs$core$IFn$_invoke$arity$20(G__69666,G__69667,G__69668,G__69669,G__69670,G__69671,G__69672,G__69673,G__69674,G__69675,G__69676,G__69677,G__69678,G__69679,G__69680,G__69681,G__69682,G__69683,G__69684,G__69685) : f.call(null,G__69666,G__69667,G__69668,G__69669,G__69670,G__69671,G__69672,G__69673,G__69674,G__69675,G__69676,G__69677,G__69678,G__69679,G__69680,G__69681,G__69682,G__69683,G__69684,G__69685));
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
return sci.impl.utils.ctx_fn((function (){var G__69712 = cljs.core.count(analyzed_children);
switch (G__69712) {
case (0):
return (function (ctx){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
return (function (ctx){
var G__69713 = sci.impl.evaluator.eval(ctx,arg0);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__69713) : f.call(null,G__69713));
});

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return (function (ctx){
var G__69723 = sci.impl.evaluator.eval(ctx,arg0);
var G__69724 = sci.impl.evaluator.eval(ctx,arg1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__69723,G__69724) : f.call(null,G__69723,G__69724));
});

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return (function (ctx){
var G__69728 = sci.impl.evaluator.eval(ctx,arg0);
var G__69729 = sci.impl.evaluator.eval(ctx,arg1);
var G__69730 = sci.impl.evaluator.eval(ctx,arg2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__69728,G__69729,G__69730) : f.call(null,G__69728,G__69729,G__69730));
});

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return (function (ctx){
var G__69737 = sci.impl.evaluator.eval(ctx,arg0);
var G__69738 = sci.impl.evaluator.eval(ctx,arg1);
var G__69739 = sci.impl.evaluator.eval(ctx,arg2);
var G__69740 = sci.impl.evaluator.eval(ctx,arg3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__69737,G__69738,G__69739,G__69740) : f.call(null,G__69737,G__69738,G__69739,G__69740));
});

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return (function (ctx){
var G__69744 = sci.impl.evaluator.eval(ctx,arg0);
var G__69745 = sci.impl.evaluator.eval(ctx,arg1);
var G__69746 = sci.impl.evaluator.eval(ctx,arg2);
var G__69747 = sci.impl.evaluator.eval(ctx,arg3);
var G__69748 = sci.impl.evaluator.eval(ctx,arg4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__69744,G__69745,G__69746,G__69747,G__69748) : f.call(null,G__69744,G__69745,G__69746,G__69747,G__69748));
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
var G__69761 = sci.impl.evaluator.eval(ctx,arg0);
var G__69762 = sci.impl.evaluator.eval(ctx,arg1);
var G__69763 = sci.impl.evaluator.eval(ctx,arg2);
var G__69764 = sci.impl.evaluator.eval(ctx,arg3);
var G__69765 = sci.impl.evaluator.eval(ctx,arg4);
var G__69766 = sci.impl.evaluator.eval(ctx,arg5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__69761,G__69762,G__69763,G__69764,G__69765,G__69766) : f.call(null,G__69761,G__69762,G__69763,G__69764,G__69765,G__69766));
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
var G__69777 = sci.impl.evaluator.eval(ctx,arg0);
var G__69778 = sci.impl.evaluator.eval(ctx,arg1);
var G__69779 = sci.impl.evaluator.eval(ctx,arg2);
var G__69780 = sci.impl.evaluator.eval(ctx,arg3);
var G__69781 = sci.impl.evaluator.eval(ctx,arg4);
var G__69782 = sci.impl.evaluator.eval(ctx,arg5);
var G__69783 = sci.impl.evaluator.eval(ctx,arg6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(G__69777,G__69778,G__69779,G__69780,G__69781,G__69782,G__69783) : f.call(null,G__69777,G__69778,G__69779,G__69780,G__69781,G__69782,G__69783));
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
var G__69798 = sci.impl.evaluator.eval(ctx,arg0);
var G__69799 = sci.impl.evaluator.eval(ctx,arg1);
var G__69800 = sci.impl.evaluator.eval(ctx,arg2);
var G__69801 = sci.impl.evaluator.eval(ctx,arg3);
var G__69802 = sci.impl.evaluator.eval(ctx,arg4);
var G__69803 = sci.impl.evaluator.eval(ctx,arg5);
var G__69804 = sci.impl.evaluator.eval(ctx,arg6);
var G__69805 = sci.impl.evaluator.eval(ctx,arg7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(G__69798,G__69799,G__69800,G__69801,G__69802,G__69803,G__69804,G__69805) : f.call(null,G__69798,G__69799,G__69800,G__69801,G__69802,G__69803,G__69804,G__69805));
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
var G__69813 = sci.impl.evaluator.eval(ctx,arg0);
var G__69814 = sci.impl.evaluator.eval(ctx,arg1);
var G__69815 = sci.impl.evaluator.eval(ctx,arg2);
var G__69816 = sci.impl.evaluator.eval(ctx,arg3);
var G__69817 = sci.impl.evaluator.eval(ctx,arg4);
var G__69818 = sci.impl.evaluator.eval(ctx,arg5);
var G__69819 = sci.impl.evaluator.eval(ctx,arg6);
var G__69820 = sci.impl.evaluator.eval(ctx,arg7);
var G__69821 = sci.impl.evaluator.eval(ctx,arg8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(G__69813,G__69814,G__69815,G__69816,G__69817,G__69818,G__69819,G__69820,G__69821) : f.call(null,G__69813,G__69814,G__69815,G__69816,G__69817,G__69818,G__69819,G__69820,G__69821));
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
var G__69831 = sci.impl.evaluator.eval(ctx,arg0);
var G__69832 = sci.impl.evaluator.eval(ctx,arg1);
var G__69833 = sci.impl.evaluator.eval(ctx,arg2);
var G__69834 = sci.impl.evaluator.eval(ctx,arg3);
var G__69835 = sci.impl.evaluator.eval(ctx,arg4);
var G__69836 = sci.impl.evaluator.eval(ctx,arg5);
var G__69837 = sci.impl.evaluator.eval(ctx,arg6);
var G__69838 = sci.impl.evaluator.eval(ctx,arg7);
var G__69839 = sci.impl.evaluator.eval(ctx,arg8);
var G__69840 = sci.impl.evaluator.eval(ctx,arg9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(G__69831,G__69832,G__69833,G__69834,G__69835,G__69836,G__69837,G__69838,G__69839,G__69840) : f.call(null,G__69831,G__69832,G__69833,G__69834,G__69835,G__69836,G__69837,G__69838,G__69839,G__69840));
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
var G__69849 = sci.impl.evaluator.eval(ctx,arg0);
var G__69850 = sci.impl.evaluator.eval(ctx,arg1);
var G__69851 = sci.impl.evaluator.eval(ctx,arg2);
var G__69852 = sci.impl.evaluator.eval(ctx,arg3);
var G__69853 = sci.impl.evaluator.eval(ctx,arg4);
var G__69854 = sci.impl.evaluator.eval(ctx,arg5);
var G__69855 = sci.impl.evaluator.eval(ctx,arg6);
var G__69856 = sci.impl.evaluator.eval(ctx,arg7);
var G__69857 = sci.impl.evaluator.eval(ctx,arg8);
var G__69858 = sci.impl.evaluator.eval(ctx,arg9);
var G__69859 = sci.impl.evaluator.eval(ctx,arg10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(G__69849,G__69850,G__69851,G__69852,G__69853,G__69854,G__69855,G__69856,G__69857,G__69858,G__69859) : f.call(null,G__69849,G__69850,G__69851,G__69852,G__69853,G__69854,G__69855,G__69856,G__69857,G__69858,G__69859));
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
var G__69900 = sci.impl.evaluator.eval(ctx,arg0);
var G__69901 = sci.impl.evaluator.eval(ctx,arg1);
var G__69902 = sci.impl.evaluator.eval(ctx,arg2);
var G__69903 = sci.impl.evaluator.eval(ctx,arg3);
var G__69904 = sci.impl.evaluator.eval(ctx,arg4);
var G__69905 = sci.impl.evaluator.eval(ctx,arg5);
var G__69906 = sci.impl.evaluator.eval(ctx,arg6);
var G__69907 = sci.impl.evaluator.eval(ctx,arg7);
var G__69908 = sci.impl.evaluator.eval(ctx,arg8);
var G__69909 = sci.impl.evaluator.eval(ctx,arg9);
var G__69910 = sci.impl.evaluator.eval(ctx,arg10);
var G__69911 = sci.impl.evaluator.eval(ctx,arg11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(G__69900,G__69901,G__69902,G__69903,G__69904,G__69905,G__69906,G__69907,G__69908,G__69909,G__69910,G__69911) : f.call(null,G__69900,G__69901,G__69902,G__69903,G__69904,G__69905,G__69906,G__69907,G__69908,G__69909,G__69910,G__69911));
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
var G__69926 = sci.impl.evaluator.eval(ctx,arg0);
var G__69927 = sci.impl.evaluator.eval(ctx,arg1);
var G__69928 = sci.impl.evaluator.eval(ctx,arg2);
var G__69929 = sci.impl.evaluator.eval(ctx,arg3);
var G__69930 = sci.impl.evaluator.eval(ctx,arg4);
var G__69931 = sci.impl.evaluator.eval(ctx,arg5);
var G__69932 = sci.impl.evaluator.eval(ctx,arg6);
var G__69933 = sci.impl.evaluator.eval(ctx,arg7);
var G__69934 = sci.impl.evaluator.eval(ctx,arg8);
var G__69935 = sci.impl.evaluator.eval(ctx,arg9);
var G__69936 = sci.impl.evaluator.eval(ctx,arg10);
var G__69937 = sci.impl.evaluator.eval(ctx,arg11);
var G__69938 = sci.impl.evaluator.eval(ctx,arg12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(G__69926,G__69927,G__69928,G__69929,G__69930,G__69931,G__69932,G__69933,G__69934,G__69935,G__69936,G__69937,G__69938) : f.call(null,G__69926,G__69927,G__69928,G__69929,G__69930,G__69931,G__69932,G__69933,G__69934,G__69935,G__69936,G__69937,G__69938));
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
var G__69954 = sci.impl.evaluator.eval(ctx,arg0);
var G__69955 = sci.impl.evaluator.eval(ctx,arg1);
var G__69956 = sci.impl.evaluator.eval(ctx,arg2);
var G__69957 = sci.impl.evaluator.eval(ctx,arg3);
var G__69958 = sci.impl.evaluator.eval(ctx,arg4);
var G__69959 = sci.impl.evaluator.eval(ctx,arg5);
var G__69960 = sci.impl.evaluator.eval(ctx,arg6);
var G__69961 = sci.impl.evaluator.eval(ctx,arg7);
var G__69962 = sci.impl.evaluator.eval(ctx,arg8);
var G__69963 = sci.impl.evaluator.eval(ctx,arg9);
var G__69964 = sci.impl.evaluator.eval(ctx,arg10);
var G__69965 = sci.impl.evaluator.eval(ctx,arg11);
var G__69966 = sci.impl.evaluator.eval(ctx,arg12);
var G__69967 = sci.impl.evaluator.eval(ctx,arg13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(G__69954,G__69955,G__69956,G__69957,G__69958,G__69959,G__69960,G__69961,G__69962,G__69963,G__69964,G__69965,G__69966,G__69967) : f.call(null,G__69954,G__69955,G__69956,G__69957,G__69958,G__69959,G__69960,G__69961,G__69962,G__69963,G__69964,G__69965,G__69966,G__69967));
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
var G__69988 = sci.impl.evaluator.eval(ctx,arg0);
var G__69989 = sci.impl.evaluator.eval(ctx,arg1);
var G__69990 = sci.impl.evaluator.eval(ctx,arg2);
var G__69991 = sci.impl.evaluator.eval(ctx,arg3);
var G__69992 = sci.impl.evaluator.eval(ctx,arg4);
var G__69993 = sci.impl.evaluator.eval(ctx,arg5);
var G__69994 = sci.impl.evaluator.eval(ctx,arg6);
var G__69995 = sci.impl.evaluator.eval(ctx,arg7);
var G__69996 = sci.impl.evaluator.eval(ctx,arg8);
var G__69997 = sci.impl.evaluator.eval(ctx,arg9);
var G__69998 = sci.impl.evaluator.eval(ctx,arg10);
var G__69999 = sci.impl.evaluator.eval(ctx,arg11);
var G__70000 = sci.impl.evaluator.eval(ctx,arg12);
var G__70001 = sci.impl.evaluator.eval(ctx,arg13);
var G__70002 = sci.impl.evaluator.eval(ctx,arg14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(G__69988,G__69989,G__69990,G__69991,G__69992,G__69993,G__69994,G__69995,G__69996,G__69997,G__69998,G__69999,G__70000,G__70001,G__70002) : f.call(null,G__69988,G__69989,G__69990,G__69991,G__69992,G__69993,G__69994,G__69995,G__69996,G__69997,G__69998,G__69999,G__70000,G__70001,G__70002));
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
var G__70030 = sci.impl.evaluator.eval(ctx,arg0);
var G__70031 = sci.impl.evaluator.eval(ctx,arg1);
var G__70032 = sci.impl.evaluator.eval(ctx,arg2);
var G__70033 = sci.impl.evaluator.eval(ctx,arg3);
var G__70034 = sci.impl.evaluator.eval(ctx,arg4);
var G__70035 = sci.impl.evaluator.eval(ctx,arg5);
var G__70036 = sci.impl.evaluator.eval(ctx,arg6);
var G__70037 = sci.impl.evaluator.eval(ctx,arg7);
var G__70038 = sci.impl.evaluator.eval(ctx,arg8);
var G__70039 = sci.impl.evaluator.eval(ctx,arg9);
var G__70040 = sci.impl.evaluator.eval(ctx,arg10);
var G__70041 = sci.impl.evaluator.eval(ctx,arg11);
var G__70042 = sci.impl.evaluator.eval(ctx,arg12);
var G__70043 = sci.impl.evaluator.eval(ctx,arg13);
var G__70044 = sci.impl.evaluator.eval(ctx,arg14);
var G__70045 = sci.impl.evaluator.eval(ctx,arg15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(G__70030,G__70031,G__70032,G__70033,G__70034,G__70035,G__70036,G__70037,G__70038,G__70039,G__70040,G__70041,G__70042,G__70043,G__70044,G__70045) : f.call(null,G__70030,G__70031,G__70032,G__70033,G__70034,G__70035,G__70036,G__70037,G__70038,G__70039,G__70040,G__70041,G__70042,G__70043,G__70044,G__70045));
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
var G__70063 = sci.impl.evaluator.eval(ctx,arg0);
var G__70064 = sci.impl.evaluator.eval(ctx,arg1);
var G__70065 = sci.impl.evaluator.eval(ctx,arg2);
var G__70066 = sci.impl.evaluator.eval(ctx,arg3);
var G__70067 = sci.impl.evaluator.eval(ctx,arg4);
var G__70068 = sci.impl.evaluator.eval(ctx,arg5);
var G__70069 = sci.impl.evaluator.eval(ctx,arg6);
var G__70070 = sci.impl.evaluator.eval(ctx,arg7);
var G__70071 = sci.impl.evaluator.eval(ctx,arg8);
var G__70072 = sci.impl.evaluator.eval(ctx,arg9);
var G__70073 = sci.impl.evaluator.eval(ctx,arg10);
var G__70074 = sci.impl.evaluator.eval(ctx,arg11);
var G__70075 = sci.impl.evaluator.eval(ctx,arg12);
var G__70076 = sci.impl.evaluator.eval(ctx,arg13);
var G__70077 = sci.impl.evaluator.eval(ctx,arg14);
var G__70078 = sci.impl.evaluator.eval(ctx,arg15);
var G__70079 = sci.impl.evaluator.eval(ctx,arg16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(G__70063,G__70064,G__70065,G__70066,G__70067,G__70068,G__70069,G__70070,G__70071,G__70072,G__70073,G__70074,G__70075,G__70076,G__70077,G__70078,G__70079) : f.call(null,G__70063,G__70064,G__70065,G__70066,G__70067,G__70068,G__70069,G__70070,G__70071,G__70072,G__70073,G__70074,G__70075,G__70076,G__70077,G__70078,G__70079));
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
var G__70095 = sci.impl.evaluator.eval(ctx,arg0);
var G__70096 = sci.impl.evaluator.eval(ctx,arg1);
var G__70097 = sci.impl.evaluator.eval(ctx,arg2);
var G__70098 = sci.impl.evaluator.eval(ctx,arg3);
var G__70099 = sci.impl.evaluator.eval(ctx,arg4);
var G__70100 = sci.impl.evaluator.eval(ctx,arg5);
var G__70101 = sci.impl.evaluator.eval(ctx,arg6);
var G__70102 = sci.impl.evaluator.eval(ctx,arg7);
var G__70103 = sci.impl.evaluator.eval(ctx,arg8);
var G__70104 = sci.impl.evaluator.eval(ctx,arg9);
var G__70105 = sci.impl.evaluator.eval(ctx,arg10);
var G__70106 = sci.impl.evaluator.eval(ctx,arg11);
var G__70107 = sci.impl.evaluator.eval(ctx,arg12);
var G__70108 = sci.impl.evaluator.eval(ctx,arg13);
var G__70109 = sci.impl.evaluator.eval(ctx,arg14);
var G__70110 = sci.impl.evaluator.eval(ctx,arg15);
var G__70111 = sci.impl.evaluator.eval(ctx,arg16);
var G__70112 = sci.impl.evaluator.eval(ctx,arg17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(G__70095,G__70096,G__70097,G__70098,G__70099,G__70100,G__70101,G__70102,G__70103,G__70104,G__70105,G__70106,G__70107,G__70108,G__70109,G__70110,G__70111,G__70112) : f.call(null,G__70095,G__70096,G__70097,G__70098,G__70099,G__70100,G__70101,G__70102,G__70103,G__70104,G__70105,G__70106,G__70107,G__70108,G__70109,G__70110,G__70111,G__70112));
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
var G__70129 = sci.impl.evaluator.eval(ctx,arg0);
var G__70130 = sci.impl.evaluator.eval(ctx,arg1);
var G__70131 = sci.impl.evaluator.eval(ctx,arg2);
var G__70132 = sci.impl.evaluator.eval(ctx,arg3);
var G__70133 = sci.impl.evaluator.eval(ctx,arg4);
var G__70134 = sci.impl.evaluator.eval(ctx,arg5);
var G__70135 = sci.impl.evaluator.eval(ctx,arg6);
var G__70136 = sci.impl.evaluator.eval(ctx,arg7);
var G__70137 = sci.impl.evaluator.eval(ctx,arg8);
var G__70138 = sci.impl.evaluator.eval(ctx,arg9);
var G__70139 = sci.impl.evaluator.eval(ctx,arg10);
var G__70140 = sci.impl.evaluator.eval(ctx,arg11);
var G__70141 = sci.impl.evaluator.eval(ctx,arg12);
var G__70142 = sci.impl.evaluator.eval(ctx,arg13);
var G__70143 = sci.impl.evaluator.eval(ctx,arg14);
var G__70144 = sci.impl.evaluator.eval(ctx,arg15);
var G__70145 = sci.impl.evaluator.eval(ctx,arg16);
var G__70146 = sci.impl.evaluator.eval(ctx,arg17);
var G__70147 = sci.impl.evaluator.eval(ctx,arg18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(G__70129,G__70130,G__70131,G__70132,G__70133,G__70134,G__70135,G__70136,G__70137,G__70138,G__70139,G__70140,G__70141,G__70142,G__70143,G__70144,G__70145,G__70146,G__70147) : f.call(null,G__70129,G__70130,G__70131,G__70132,G__70133,G__70134,G__70135,G__70136,G__70137,G__70138,G__70139,G__70140,G__70141,G__70142,G__70143,G__70144,G__70145,G__70146,G__70147));
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
var G__70169 = f__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__70169)){
return sci.impl.analyzer.expand_dot_STAR__STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__70169)){
return sci.impl.analyzer.return_and(expr,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"import","import",241030818,null),G__70169)){
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__70169)){
return sci.impl.analyzer.expand_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),G__70169)){
return sci.impl.analyzer.expand_fn(ctx,expr,false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__70169)){
return sci.impl.analyzer.return_if(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),G__70169)){
var ret = sci.impl.analyzer.expand_defn(ctx,expr);
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"defn","defn",-126010802,null),G__70169)){
var ret = sci.impl.analyzer.expand_defn(ctx,expr);
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__70169)){
return sci.impl.analyzer.return_do(expr,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"loop","loop",1244978678,null),G__70169)){
return sci.impl.analyzer.expand_loop(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"doseq","doseq",221164135,null),G__70169)){
var G__70191 = ctx;
var G__70192 = sci.impl.doseq_macro.expand_doseq(ctx,expr);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__70191,G__70192) : sci.impl.analyzer.analyze.call(null,G__70191,G__70192));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"expand-constructor","expand-constructor",-343741576,null),G__70169)){
return sci.impl.analyzer.expand_constructor(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__70169)){
return sci.impl.analyzer.expand_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"declare","declare",654042991,null),G__70169)){
return sci.impl.analyzer.expand_declare(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),G__70169)){
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"expand-dot*","expand-dot*",-1946890561,null),G__70169)){
return sci.impl.analyzer.expand_dot_STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"ns","ns",2082130287,null),G__70169)){
return sci.impl.analyzer.analyze_ns_form(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"for","for",316745208,null),G__70169)){
var res = sci.impl.for_macro.expand_for(ctx,expr);
if(cljs.core.truth_(new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825).cljs$core$IFn$_invoke$arity$1(ctx))){
return res;
} else {
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,res) : sci.impl.analyzer.analyze.call(null,ctx,res));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__70169)){
return sci.impl.analyzer.expand_let(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn","fn",465265323,null),G__70169)){
return sci.impl.analyzer.expand_fn(ctx,expr,false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__70169)){
return sci.impl.analyzer.analyze_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__70169)){
return sci.impl.analyzer.return_recur(expr,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__70169)){
return sci.impl.analyzer.expand_new(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"var","var",870848730,null),G__70169)){
return sci.impl.analyzer.analyze_var(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__70169)){
return sci.impl.analyzer.expand_lazy_seq(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__70169)){
return sci.impl.analyzer.expand_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__70169)){
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
}catch (e70204){if((e70204 instanceof Error)){
var e = e70204;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(cljs.core.cons(f__$1,cljs.core.rest(expr)),cljs.core.meta(expr))));
} else {
throw e70204;

}
}
}
}
} else {
if((f instanceof cljs.core.Keyword)){
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
var G__70210 = cljs.core.count(children);
switch (G__70210) {
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
var analyzed_meta = (cljs.core.truth_(m)?(function (){var G__70223 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"meta","meta",1499536964),true);
var G__70224 = m;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__70223,G__70224) : sci.impl.analyzer.analyze.call(null,G__70223,G__70224));
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
var G__70234 = arguments.length;
switch (G__70234) {
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
