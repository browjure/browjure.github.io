goog.provide('sci.impl.core_protocols');
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._deref !== 'undefined')){
} else {
sci.impl.core_protocols._deref = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__65270 = cljs.core.get_global_hierarchy;
return (fexpr__65270.cljs$core$IFn$_invoke$arity$0 ? fexpr__65270.cljs$core$IFn$_invoke$arity$0() : fexpr__65270.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-deref"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
sci.impl.core_protocols._deref.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function (ref){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__65278 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-deref","-deref",-283116853,null));
return (fexpr__65278.cljs$core$IFn$_invoke$arity$1 ? fexpr__65278.cljs$core$IFn$_invoke$arity$1(ref) : fexpr__65278.call(null,ref));
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__65294 = cljs.core.get_global_hierarchy;
return (fexpr__65294.cljs$core$IFn$_invoke$arity$0 ? fexpr__65294.cljs$core$IFn$_invoke$arity$0() : fexpr__65294.call(null));
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__65296 = cljs.core.get_global_hierarchy;
return (fexpr__65296.cljs$core$IFn$_invoke$arity$0 ? fexpr__65296.cljs$core$IFn$_invoke$arity$0() : fexpr__65296.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-reset!"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function() {
var G__65433 = null;
var G__65433__2 = (function (ref,f){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__65301 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__65301.cljs$core$IFn$_invoke$arity$2 ? fexpr__65301.cljs$core$IFn$_invoke$arity$2(ref,f) : fexpr__65301.call(null,ref,f));
});
var G__65433__3 = (function (ref,f,a1){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__65303 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__65303.cljs$core$IFn$_invoke$arity$3 ? fexpr__65303.cljs$core$IFn$_invoke$arity$3(ref,f,a1) : fexpr__65303.call(null,ref,f,a1));
});
var G__65433__4 = (function (ref,f,a1,a2){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__65304 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__65304.cljs$core$IFn$_invoke$arity$4 ? fexpr__65304.cljs$core$IFn$_invoke$arity$4(ref,f,a1,a2) : fexpr__65304.call(null,ref,f,a1,a2));
});
var G__65433__5 = (function() { 
var G__65443__delegate = function (ref,f,a1,a2,args){
var methods$ = sci.impl.types.getMethods(ref);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null)),ref,f,a1,a2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
};
var G__65443 = function (ref,f,a1,a2,var_args){
var args = null;
if (arguments.length > 4) {
var G__65446__i = 0, G__65446__a = new Array(arguments.length -  4);
while (G__65446__i < G__65446__a.length) {G__65446__a[G__65446__i] = arguments[G__65446__i + 4]; ++G__65446__i;}
  args = new cljs.core.IndexedSeq(G__65446__a,0,null);
} 
return G__65443__delegate.call(this,ref,f,a1,a2,args);};
G__65443.cljs$lang$maxFixedArity = 4;
G__65443.cljs$lang$applyTo = (function (arglist__65448){
var ref = cljs.core.first(arglist__65448);
arglist__65448 = cljs.core.next(arglist__65448);
var f = cljs.core.first(arglist__65448);
arglist__65448 = cljs.core.next(arglist__65448);
var a1 = cljs.core.first(arglist__65448);
arglist__65448 = cljs.core.next(arglist__65448);
var a2 = cljs.core.first(arglist__65448);
var args = cljs.core.rest(arglist__65448);
return G__65443__delegate(ref,f,a1,a2,args);
});
G__65443.cljs$core$IFn$_invoke$arity$variadic = G__65443__delegate;
return G__65443;
})()
;
G__65433 = function(ref,f,a1,a2,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return G__65433__2.call(this,ref,f);
case 3:
return G__65433__3.call(this,ref,f,a1);
case 4:
return G__65433__4.call(this,ref,f,a1,a2);
default:
var G__65452 = null;
if (arguments.length > 4) {
var G__65453__i = 0, G__65453__a = new Array(arguments.length -  4);
while (G__65453__i < G__65453__a.length) {G__65453__a[G__65453__i] = arguments[G__65453__i + 4]; ++G__65453__i;}
G__65452 = new cljs.core.IndexedSeq(G__65453__a,0,null);
}
return G__65433__5.cljs$core$IFn$_invoke$arity$variadic(ref,f,a1,a2, G__65452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__65433.cljs$lang$maxFixedArity = 4;
G__65433.cljs$lang$applyTo = G__65433__5.cljs$lang$applyTo;
G__65433.cljs$core$IFn$_invoke$arity$2 = G__65433__2;
G__65433.cljs$core$IFn$_invoke$arity$3 = G__65433__3;
G__65433.cljs$core$IFn$_invoke$arity$4 = G__65433__4;
G__65433.cljs$core$IFn$_invoke$arity$variadic = G__65433__5.cljs$core$IFn$_invoke$arity$variadic;
return G__65433;
})()
);
sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function (ref,v){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__65330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-reset!","-reset!",1965723739,null));
return (fexpr__65330.cljs$core$IFn$_invoke$arity$2 ? fexpr__65330.cljs$core$IFn$_invoke$arity$2(ref,v) : fexpr__65330.call(null,ref,v));
}));
sci.impl.core_protocols.iatom_defaults = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__65462__delegate = function (ref,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,ref,f,args);
};
var G__65462 = function (ref,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__65464__i = 0, G__65464__a = new Array(arguments.length -  2);
while (G__65464__i < G__65464__a.length) {G__65464__a[G__65464__i] = arguments[G__65464__i + 2]; ++G__65464__i;}
  args = new cljs.core.IndexedSeq(G__65464__a,0,null);
} 
return G__65462__delegate.call(this,ref,f,args);};
G__65462.cljs$lang$maxFixedArity = 2;
G__65462.cljs$lang$applyTo = (function (arglist__65467){
var ref = cljs.core.first(arglist__65467);
arglist__65467 = cljs.core.next(arglist__65467);
var f = cljs.core.first(arglist__65467);
var args = cljs.core.rest(arglist__65467);
return G__65462__delegate(ref,f,args);
});
G__65462.cljs$core$IFn$_invoke$arity$variadic = G__65462__delegate;
return G__65462;
})()
),sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (ref,v){
return cljs.core.reset_BANG_(ref,v);
}))], null);
sci.impl.core_protocols.swap_BANG__STAR_ = (function sci$impl$core_protocols$swap_BANG__STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___65473 = arguments.length;
var i__4737__auto___65476 = (0);
while(true){
if((i__4737__auto___65476 < len__4736__auto___65473)){
args__4742__auto__.push((arguments[i__4737__auto___65476]));

var G__65477 = (i__4737__auto___65476 + (1));
i__4737__auto___65476 = G__65477;
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
(sci.impl.core_protocols.swap_BANG__STAR_.cljs$lang$applyTo = (function (seq65349){
var G__65350 = cljs.core.first(seq65349);
var seq65349__$1 = cljs.core.next(seq65349);
var G__65351 = cljs.core.first(seq65349__$1);
var seq65349__$2 = cljs.core.next(seq65349__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65350,G__65351,seq65349__$2);
}));

sci.impl.core_protocols.reset_BANG__STAR_ = (function sci$impl$core_protocols$reset_BANG__STAR_(ref,v){
return sci.impl.core_protocols._reset_BANG_.cljs$core$IFn$_invoke$arity$2(ref,v);
});
sci.impl.core_protocols.swap_protocol = sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.ISwap","cljs.core.ISwap",2045511362,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.ISwap,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._swap_BANG_]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
sci.impl.core_protocols.reset_protocol = sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.IReset","cljs.core.IReset",348905844,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.IReset,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._reset_BANG_]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
sci.impl.core_protocols.defaults = cljs.core.set(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sci.impl.core_protocols.iatom_defaults,sci.impl.core_protocols.ideref_default));

//# sourceMappingURL=sci.impl.core_protocols.js.map
