goog.provide('sci.impl.core_protocols');
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._deref !== 'undefined')){
} else {
sci.impl.core_protocols._deref = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__67537 = cljs.core.get_global_hierarchy;
return (fexpr__67537.cljs$core$IFn$_invoke$arity$0 ? fexpr__67537.cljs$core$IFn$_invoke$arity$0() : fexpr__67537.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-deref"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
sci.impl.core_protocols._deref.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function (ref){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__67545 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-deref","-deref",-283116853,null));
return (fexpr__67545.cljs$core$IFn$_invoke$arity$1 ? fexpr__67545.cljs$core$IFn$_invoke$arity$1(ref) : fexpr__67545.call(null,ref));
}));
sci.impl.core_protocols.ideref_default = sci.impl.core_protocols._deref.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (ref){
return cljs.core.deref(ref);
}));
sci.impl.core_protocols.deref_STAR_ = (function sci$impl$core_protocols$deref_STAR_(x){
return sci.impl.core_protocols._deref.cljs$core$IFn$_invoke$arity$1(x);
});
sci.impl.core_protocols.cljs_core_ns = sci.impl.vars.__GT_SciNamespace(new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),null);
sci.impl.core_protocols.deref_protocol = sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.IDeref","cljs.core.IDeref",-783543206,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.IDeref,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._deref]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._swap_BANG_ !== 'undefined')){
} else {
sci.impl.core_protocols._swap_BANG_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__67563 = cljs.core.get_global_hierarchy;
return (fexpr__67563.cljs$core$IFn$_invoke$arity$0 ? fexpr__67563.cljs$core$IFn$_invoke$arity$0() : fexpr__67563.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-swap!"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._reset_BANG_ !== 'undefined')){
} else {
sci.impl.core_protocols._reset_BANG_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__67568 = cljs.core.get_global_hierarchy;
return (fexpr__67568.cljs$core$IFn$_invoke$arity$0 ? fexpr__67568.cljs$core$IFn$_invoke$arity$0() : fexpr__67568.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-reset!"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function() {
var G__67692 = null;
var G__67692__2 = (function (ref,f){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__67574 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__67574.cljs$core$IFn$_invoke$arity$2 ? fexpr__67574.cljs$core$IFn$_invoke$arity$2(ref,f) : fexpr__67574.call(null,ref,f));
});
var G__67692__3 = (function (ref,f,a1){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__67576 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__67576.cljs$core$IFn$_invoke$arity$3 ? fexpr__67576.cljs$core$IFn$_invoke$arity$3(ref,f,a1) : fexpr__67576.call(null,ref,f,a1));
});
var G__67692__4 = (function (ref,f,a1,a2){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__67579 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__67579.cljs$core$IFn$_invoke$arity$4 ? fexpr__67579.cljs$core$IFn$_invoke$arity$4(ref,f,a1,a2) : fexpr__67579.call(null,ref,f,a1,a2));
});
var G__67692__5 = (function() { 
var G__67700__delegate = function (ref,f,a1,a2,args){
var methods$ = sci.impl.types.getMethods(ref);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null)),ref,f,a1,a2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
};
var G__67700 = function (ref,f,a1,a2,var_args){
var args = null;
if (arguments.length > 4) {
var G__67704__i = 0, G__67704__a = new Array(arguments.length -  4);
while (G__67704__i < G__67704__a.length) {G__67704__a[G__67704__i] = arguments[G__67704__i + 4]; ++G__67704__i;}
  args = new cljs.core.IndexedSeq(G__67704__a,0,null);
} 
return G__67700__delegate.call(this,ref,f,a1,a2,args);};
G__67700.cljs$lang$maxFixedArity = 4;
G__67700.cljs$lang$applyTo = (function (arglist__67709){
var ref = cljs.core.first(arglist__67709);
arglist__67709 = cljs.core.next(arglist__67709);
var f = cljs.core.first(arglist__67709);
arglist__67709 = cljs.core.next(arglist__67709);
var a1 = cljs.core.first(arglist__67709);
arglist__67709 = cljs.core.next(arglist__67709);
var a2 = cljs.core.first(arglist__67709);
var args = cljs.core.rest(arglist__67709);
return G__67700__delegate(ref,f,a1,a2,args);
});
G__67700.cljs$core$IFn$_invoke$arity$variadic = G__67700__delegate;
return G__67700;
})()
;
G__67692 = function(ref,f,a1,a2,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return G__67692__2.call(this,ref,f);
case 3:
return G__67692__3.call(this,ref,f,a1);
case 4:
return G__67692__4.call(this,ref,f,a1,a2);
default:
var G__67726 = null;
if (arguments.length > 4) {
var G__67727__i = 0, G__67727__a = new Array(arguments.length -  4);
while (G__67727__i < G__67727__a.length) {G__67727__a[G__67727__i] = arguments[G__67727__i + 4]; ++G__67727__i;}
G__67726 = new cljs.core.IndexedSeq(G__67727__a,0,null);
}
return G__67692__5.cljs$core$IFn$_invoke$arity$variadic(ref,f,a1,a2, G__67726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__67692.cljs$lang$maxFixedArity = 4;
G__67692.cljs$lang$applyTo = G__67692__5.cljs$lang$applyTo;
G__67692.cljs$core$IFn$_invoke$arity$2 = G__67692__2;
G__67692.cljs$core$IFn$_invoke$arity$3 = G__67692__3;
G__67692.cljs$core$IFn$_invoke$arity$4 = G__67692__4;
G__67692.cljs$core$IFn$_invoke$arity$variadic = G__67692__5.cljs$core$IFn$_invoke$arity$variadic;
return G__67692;
})()
);
sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function (ref,v){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__67594 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-reset!","-reset!",1965723739,null));
return (fexpr__67594.cljs$core$IFn$_invoke$arity$2 ? fexpr__67594.cljs$core$IFn$_invoke$arity$2(ref,v) : fexpr__67594.call(null,ref,v));
}));
sci.impl.core_protocols.iatom_defaults = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__67731__delegate = function (ref,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,ref,f,args);
};
var G__67731 = function (ref,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__67732__i = 0, G__67732__a = new Array(arguments.length -  2);
while (G__67732__i < G__67732__a.length) {G__67732__a[G__67732__i] = arguments[G__67732__i + 2]; ++G__67732__i;}
  args = new cljs.core.IndexedSeq(G__67732__a,0,null);
} 
return G__67731__delegate.call(this,ref,f,args);};
G__67731.cljs$lang$maxFixedArity = 2;
G__67731.cljs$lang$applyTo = (function (arglist__67733){
var ref = cljs.core.first(arglist__67733);
arglist__67733 = cljs.core.next(arglist__67733);
var f = cljs.core.first(arglist__67733);
var args = cljs.core.rest(arglist__67733);
return G__67731__delegate(ref,f,args);
});
G__67731.cljs$core$IFn$_invoke$arity$variadic = G__67731__delegate;
return G__67731;
})()
),sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (ref,v){
return cljs.core.reset_BANG_(ref,v);
}))], null);
sci.impl.core_protocols.swap_BANG__STAR_ = (function sci$impl$core_protocols$swap_BANG__STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___67747 = arguments.length;
var i__4737__auto___67748 = (0);
while(true){
if((i__4737__auto___67748 < len__4736__auto___67747)){
args__4742__auto__.push((arguments[i__4737__auto___67748]));

var G__67752 = (i__4737__auto___67748 + (1));
i__4737__auto___67748 = G__67752;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.core_protocols.swap_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.core_protocols.swap_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,f,args){
if(cljs.core.truth_(args)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.core_protocols._swap_BANG_,ref,f,args);
} else {
return sci.impl.core_protocols._swap_BANG_.cljs$core$IFn$_invoke$arity$2(ref,f);
}
}));

(sci.impl.core_protocols.swap_BANG__STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.core_protocols.swap_BANG__STAR_.cljs$lang$applyTo = (function (seq67604){
var G__67605 = cljs.core.first(seq67604);
var seq67604__$1 = cljs.core.next(seq67604);
var G__67606 = cljs.core.first(seq67604__$1);
var seq67604__$2 = cljs.core.next(seq67604__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67605,G__67606,seq67604__$2);
}));

sci.impl.core_protocols.reset_BANG__STAR_ = (function sci$impl$core_protocols$reset_BANG__STAR_(ref,v){
return sci.impl.core_protocols._reset_BANG_.cljs$core$IFn$_invoke$arity$2(ref,v);
});
sci.impl.core_protocols.swap_protocol = sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.ISwap","cljs.core.ISwap",2045511362,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.ISwap,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._swap_BANG_]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
sci.impl.core_protocols.reset_protocol = sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.IReset","cljs.core.IReset",348905844,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.IReset,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._reset_BANG_]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
sci.impl.core_protocols.defaults = cljs.core.set(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sci.impl.core_protocols.iatom_defaults,sci.impl.core_protocols.ideref_default));

//# sourceMappingURL=sci.impl.core_protocols.js.map
