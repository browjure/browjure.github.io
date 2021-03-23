goog.provide('sablono.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
/**
 * The React.js create element function.
 */
sablono.core.create_element = module$node_modules$react$index.createElement;
/**
 * The React.js Fragment.
 */
sablono.core.fragment = module$node_modules$react$index.Fragment;
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__84969__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__84453 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__84454 = cljs.core.seq(vec__84453);
var first__84455 = cljs.core.first(seq__84454);
var seq__84454__$1 = cljs.core.next(seq__84454);
var tag = first__84455;
var body = seq__84454__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__84969 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__84973__i = 0, G__84973__a = new Array(arguments.length -  0);
while (G__84973__i < G__84973__a.length) {G__84973__a[G__84973__i] = arguments[G__84973__i + 0]; ++G__84973__i;}
  args = new cljs.core.IndexedSeq(G__84973__a,0,null);
} 
return G__84969__delegate.call(this,args);};
G__84969.cljs$lang$maxFixedArity = 0;
G__84969.cljs$lang$applyTo = (function (arglist__84976){
var args = cljs.core.seq(arglist__84976);
return G__84969__delegate(args);
});
G__84969.cljs$core$IFn$_invoke$arity$variadic = G__84969__delegate;
return G__84969;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4529__auto__ = (function sablono$core$update_arglists_$_iter__84459(s__84460){
return (new cljs.core.LazySeq(null,(function (){
var s__84460__$1 = s__84460;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__84460__$1);
if(temp__5753__auto__){
var s__84460__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__84460__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__84460__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__84462 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__84461 = (0);
while(true){
if((i__84461 < size__4528__auto__)){
var args = cljs.core._nth(c__4527__auto__,i__84461);
cljs.core.chunk_append(b__84462,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__84980 = (i__84461 + (1));
i__84461 = G__84980;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__84462),sablono$core$update_arglists_$_iter__84459(cljs.core.chunk_rest(s__84460__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__84462),null);
}
} else {
var args = cljs.core.first(s__84460__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__84459(cljs.core.rest(s__84460__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4742__auto__ = [];
var len__4736__auto___84983 = arguments.length;
var i__4737__auto___84984 = (0);
while(true){
if((i__4737__auto___84984 < len__4736__auto___84983)){
args__4742__auto__.push((arguments[i__4737__auto___84984]));

var G__84986 = (i__4737__auto___84984 + (1));
i__4737__auto___84984 = G__84986;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4529__auto__ = (function sablono$core$iter__84472(s__84473){
return (new cljs.core.LazySeq(null,(function (){
var s__84473__$1 = s__84473;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__84473__$1);
if(temp__5753__auto__){
var s__84473__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__84473__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__84473__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__84475 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__84474 = (0);
while(true){
if((i__84474 < size__4528__auto__)){
var style = cljs.core._nth(c__4527__auto__,i__84474);
cljs.core.chunk_append(b__84475,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__84992 = (i__84474 + (1));
i__84474 = G__84992;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__84475),sablono$core$iter__84472(cljs.core.chunk_rest(s__84473__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__84475),null);
}
} else {
var style = cljs.core.first(s__84473__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__84472(cljs.core.rest(s__84473__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(styles);
}));

(sablono.core.include_css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sablono.core.include_css.cljs$lang$applyTo = (function (seq84470){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq84470));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to84497 = (function sablono$core$link_to84497(var_args){
var args__4742__auto__ = [];
var len__4736__auto___85000 = arguments.length;
var i__4737__auto___85001 = (0);
while(true){
if((i__4737__auto___85001 < len__4736__auto___85000)){
args__4742__auto__.push((arguments[i__4737__auto___85001]));

var G__85004 = (i__4737__auto___85001 + (1));
i__4737__auto___85001 = G__85004;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to84497.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.link_to84497.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to84497.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to84497.cljs$lang$applyTo = (function (seq84500){
var G__84501 = cljs.core.first(seq84500);
var seq84500__$1 = cljs.core.next(seq84500);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__84501,seq84500__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to84497);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to84506 = (function sablono$core$mail_to84506(var_args){
var args__4742__auto__ = [];
var len__4736__auto___85010 = arguments.length;
var i__4737__auto___85011 = (0);
while(true){
if((i__4737__auto___85011 < len__4736__auto___85010)){
args__4742__auto__.push((arguments[i__4737__auto___85011]));

var G__85012 = (i__4737__auto___85011 + (1));
i__4737__auto___85011 = G__85012;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to84506.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.mail_to84506.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__84514){
var vec__84516 = p__84514;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84516,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4126__auto__ = content;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to84506.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to84506.cljs$lang$applyTo = (function (seq84508){
var G__84509 = cljs.core.first(seq84508);
var seq84508__$1 = cljs.core.next(seq84508);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__84509,seq84508__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to84506);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list84524 = (function sablono$core$unordered_list84524(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function sablono$core$unordered_list84524_$_iter__84526(s__84527){
return (new cljs.core.LazySeq(null,(function (){
var s__84527__$1 = s__84527;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__84527__$1);
if(temp__5753__auto__){
var s__84527__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__84527__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__84527__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__84529 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__84528 = (0);
while(true){
if((i__84528 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__84528);
cljs.core.chunk_append(b__84529,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__85021 = (i__84528 + (1));
i__84528 = G__85021;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__84529),sablono$core$unordered_list84524_$_iter__84526(cljs.core.chunk_rest(s__84527__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__84529),null);
}
} else {
var x = cljs.core.first(s__84527__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list84524_$_iter__84526(cljs.core.rest(s__84527__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list84524);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list84540 = (function sablono$core$ordered_list84540(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4529__auto__ = (function sablono$core$ordered_list84540_$_iter__84543(s__84544){
return (new cljs.core.LazySeq(null,(function (){
var s__84544__$1 = s__84544;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__84544__$1);
if(temp__5753__auto__){
var s__84544__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__84544__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__84544__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__84546 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__84545 = (0);
while(true){
if((i__84545 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__84545);
cljs.core.chunk_append(b__84546,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__85029 = (i__84545 + (1));
i__84545 = G__85029;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__84546),sablono$core$ordered_list84540_$_iter__84543(cljs.core.chunk_rest(s__84544__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__84546),null);
}
} else {
var x = cljs.core.first(s__84544__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list84540_$_iter__84543(cljs.core.rest(s__84544__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list84540);
/**
 * Create an image element.
 */
sablono.core.image84557 = (function sablono$core$image84557(var_args){
var G__84564 = arguments.length;
switch (G__84564) {
case 1:
return sablono.core.image84557.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image84557.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image84557.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image84557.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image84557.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image84557);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__84575_SHARP_,p2__84576_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__84575_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__84576_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__84581_SHARP_,p2__84582_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__84581_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__84582_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__84594 = arguments.length;
switch (G__84594) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Creates a color input field.
 */
sablono.core.color_field84602 = (function sablono$core$color_field84602(var_args){
var G__84608 = arguments.length;
switch (G__84608) {
case 1:
return sablono.core.color_field84602.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field84602.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field84602.cljs$core$IFn$_invoke$arity$1 = (function (name__84440__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__84440__auto__);
}));

(sablono.core.color_field84602.cljs$core$IFn$_invoke$arity$2 = (function (name__84440__auto__,value__84441__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__84440__auto__,value__84441__auto__);
}));

(sablono.core.color_field84602.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field84602);

/**
 * Creates a date input field.
 */
sablono.core.date_field84614 = (function sablono$core$date_field84614(var_args){
var G__84617 = arguments.length;
switch (G__84617) {
case 1:
return sablono.core.date_field84614.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field84614.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field84614.cljs$core$IFn$_invoke$arity$1 = (function (name__84440__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__84440__auto__);
}));

(sablono.core.date_field84614.cljs$core$IFn$_invoke$arity$2 = (function (name__84440__auto__,value__84441__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__84440__auto__,value__84441__auto__);
}));

(sablono.core.date_field84614.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field84614);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field84626 = (function sablono$core$datetime_field84626(var_args){
var G__84630 = arguments.length;
switch (G__84630) {
case 1:
return sablono.core.datetime_field84626.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field84626.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field84626.cljs$core$IFn$_invoke$arity$1 = (function (name__84440__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__84440__auto__);
}));

(sablono.core.datetime_field84626.cljs$core$IFn$_invoke$arity$2 = (function (name__84440__auto__,value__84441__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__84440__auto__,value__84441__auto__);
}));

(sablono.core.datetime_field84626.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field84626);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field84637 = (function sablono$core$datetime_local_field84637(var_args){
var G__84639 = arguments.length;
switch (G__84639) {
case 1:
return sablono.core.datetime_local_field84637.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field84637.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field84637.cljs$core$IFn$_invoke$arity$1 = (function (name__84440__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__84440__auto__);
}));

(sablono.core.datetime_local_field84637.cljs$core$IFn$_invoke$arity$2 = (function (name__84440__auto__,value__84441__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__84440__auto__,value__84441__auto__);
}));

(sablono.core.datetime_local_field84637.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field84637);

/**
 * Creates a email input field.
 */
sablono.core.email_field84647 = (function sablono$core$email_field84647(var_args){
var G__84653 = arguments.length;
switch (G__84653) {
case 1:
return sablono.core.email_field84647.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field84647.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field84647.cljs$core$IFn$_invoke$arity$1 = (function (name__84440__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__84440__auto__);
}));

(sablono.core.email_field84647.cljs$core$IFn$_invoke$arity$2 = (function (name__84440__auto__,value__84441__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__84440__auto__,value__84441__auto__);
}));

(sablono.core.email_field84647.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field84647);

/**
 * Creates a file input field.
 */
sablono.core.file_field84659 = (function sablono$core$file_field84659(var_args){
var G__84663 = arguments.length;
switch (G__84663) {
case 1:
return sablono.core.file_field84659.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field84659.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field84659.cljs$core$IFn$_invoke$arity$1 = (function (name__84440__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__84440__auto__);
}));

(sablono.core.file_field84659.cljs$core$IFn$_invoke$arity$2 = (function (name__84440__auto__,value__84441__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__84440__auto__,value__84441__auto__);
}));

(sablono.core.file_field84659.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field84659);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field84670 = (function sablono$core$hidden_field84670(var_args){
var G__84674 = arguments.length;
switch (G__84674) {
case 1:
return sablono.core.hidden_field84670.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field84670.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field84670.cljs$core$IFn$_invoke$arity$1 = (function (name__84440__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__84440__auto__);
}));

(sablono.core.hidden_field84670.cljs$core$IFn$_invoke$arity$2 = (function (name__84440__auto__,value__84441__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__84440__auto__,value__84441__auto__);
}));

(sablono.core.hidden_field84670.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field84670);

/**
 * Creates a month input field.
 */
sablono.core.month_field84683 = (function sablono$core$month_field84683(var_args){
var G__84687 = arguments.length;
switch (G__84687) {
case 1:
return sablono.core.month_field84683.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field84683.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field84683.cljs$core$IFn$_invoke$arity$1 = (function (name__84440__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__84440__auto__);
}));

(sablono.core.month_field84683.cljs$core$IFn$_invoke$arity$2 = (function (name__84440__auto__,value__84441__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__84440__auto__,value__84441__auto__);
}));

(sablono.core.month_field84683.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field84683);

/**
 * Creates a number input field.
 */
sablono.core.number_field84694 = (function sablono$core$number_field84694(var_args){
var G__84699 = arguments.length;
switch (G__84699) {
case 1:
return sablono.core.number_field84694.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field84694.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field84694.cljs$core$IFn$_invoke$arity$1 = (function (name__84440__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__84440__auto__);
}));

(sablono.core.number_field84694.cljs$core$IFn$_invoke$arity$2 = (function (name__84440__auto__,value__84441__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__84440__auto__,value__84441__auto__);
}));

(sablono.core.number_field84694.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field84694);

/**
 * Creates a password input field.
 */
sablono.core.password_field84709 = (function sablono$core$password_field84709(var_args){
var G__84712 = arguments.length;
switch (G__84712) {
case 1:
return sablono.core.password_field84709.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field84709.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field84709.cljs$core$IFn$_invoke$arity$1 = (function (name__84440__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__84440__auto__);
}));

(sablono.core.password_field84709.cljs$core$IFn$_invoke$arity$2 = (function (name__84440__auto__,value__84441__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__84440__auto__,value__84441__auto__);
}));

(sablono.core.password_field84709.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field84709);

/**
 * Creates a range input field.
 */
sablono.core.range_field84719 = (function sablono$core$range_field84719(var_args){
var G__84725 = arguments.length;
switch (G__84725) {
case 1:
return sablono.core.range_field84719.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field84719.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field84719.cljs$core$IFn$_invoke$arity$1 = (function (name__84440__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__84440__auto__);
}));

(sablono.core.range_field84719.cljs$core$IFn$_invoke$arity$2 = (function (name__84440__auto__,value__84441__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__84440__auto__,value__84441__auto__);
}));

(sablono.core.range_field84719.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field84719);

/**
 * Creates a search input field.
 */
sablono.core.search_field84732 = (function sablono$core$search_field84732(var_args){
var G__84736 = arguments.length;
switch (G__84736) {
case 1:
return sablono.core.search_field84732.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field84732.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field84732.cljs$core$IFn$_invoke$arity$1 = (function (name__84440__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__84440__auto__);
}));

(sablono.core.search_field84732.cljs$core$IFn$_invoke$arity$2 = (function (name__84440__auto__,value__84441__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__84440__auto__,value__84441__auto__);
}));

(sablono.core.search_field84732.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field84732);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field84745 = (function sablono$core$tel_field84745(var_args){
var G__84749 = arguments.length;
switch (G__84749) {
case 1:
return sablono.core.tel_field84745.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field84745.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field84745.cljs$core$IFn$_invoke$arity$1 = (function (name__84440__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__84440__auto__);
}));

(sablono.core.tel_field84745.cljs$core$IFn$_invoke$arity$2 = (function (name__84440__auto__,value__84441__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__84440__auto__,value__84441__auto__);
}));

(sablono.core.tel_field84745.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field84745);

/**
 * Creates a text input field.
 */
sablono.core.text_field84756 = (function sablono$core$text_field84756(var_args){
var G__84759 = arguments.length;
switch (G__84759) {
case 1:
return sablono.core.text_field84756.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field84756.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field84756.cljs$core$IFn$_invoke$arity$1 = (function (name__84440__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__84440__auto__);
}));

(sablono.core.text_field84756.cljs$core$IFn$_invoke$arity$2 = (function (name__84440__auto__,value__84441__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__84440__auto__,value__84441__auto__);
}));

(sablono.core.text_field84756.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field84756);

/**
 * Creates a time input field.
 */
sablono.core.time_field84768 = (function sablono$core$time_field84768(var_args){
var G__84773 = arguments.length;
switch (G__84773) {
case 1:
return sablono.core.time_field84768.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field84768.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field84768.cljs$core$IFn$_invoke$arity$1 = (function (name__84440__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__84440__auto__);
}));

(sablono.core.time_field84768.cljs$core$IFn$_invoke$arity$2 = (function (name__84440__auto__,value__84441__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__84440__auto__,value__84441__auto__);
}));

(sablono.core.time_field84768.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field84768);

/**
 * Creates a url input field.
 */
sablono.core.url_field84781 = (function sablono$core$url_field84781(var_args){
var G__84787 = arguments.length;
switch (G__84787) {
case 1:
return sablono.core.url_field84781.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field84781.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field84781.cljs$core$IFn$_invoke$arity$1 = (function (name__84440__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__84440__auto__);
}));

(sablono.core.url_field84781.cljs$core$IFn$_invoke$arity$2 = (function (name__84440__auto__,value__84441__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__84440__auto__,value__84441__auto__);
}));

(sablono.core.url_field84781.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field84781);

/**
 * Creates a week input field.
 */
sablono.core.week_field84794 = (function sablono$core$week_field84794(var_args){
var G__84798 = arguments.length;
switch (G__84798) {
case 1:
return sablono.core.week_field84794.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field84794.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field84794.cljs$core$IFn$_invoke$arity$1 = (function (name__84440__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__84440__auto__);
}));

(sablono.core.week_field84794.cljs$core$IFn$_invoke$arity$2 = (function (name__84440__auto__,value__84441__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__84440__auto__,value__84441__auto__);
}));

(sablono.core.week_field84794.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field84794);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box84809 = (function sablono$core$check_box84809(var_args){
var G__84815 = arguments.length;
switch (G__84815) {
case 1:
return sablono.core.check_box84809.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box84809.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box84809.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box84809.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box84809.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box84809.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box84809.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box84809);
/**
 * Creates a radio button.
 */
sablono.core.radio_button84827 = (function sablono$core$radio_button84827(var_args){
var G__84833 = arguments.length;
switch (G__84833) {
case 1:
return sablono.core.radio_button84827.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button84827.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button84827.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button84827.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button84827.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button84827.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button84827.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button84827);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options84850 = (function sablono$core$select_options84850(coll){
var iter__4529__auto__ = (function sablono$core$select_options84850_$_iter__84855(s__84856){
return (new cljs.core.LazySeq(null,(function (){
var s__84856__$1 = s__84856;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__84856__$1);
if(temp__5753__auto__){
var s__84856__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__84856__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__84856__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__84858 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__84857 = (0);
while(true){
if((i__84857 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__84857);
cljs.core.chunk_append(b__84858,((cljs.core.sequential_QMARK_(x))?(function (){var vec__84867 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84867,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84867,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84867,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options84850.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options84850.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options84850.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__85191 = (i__84857 + (1));
i__84857 = G__85191;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__84858),sablono$core$select_options84850_$_iter__84855(cljs.core.chunk_rest(s__84856__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__84858),null);
}
} else {
var x = cljs.core.first(s__84856__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__84875 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84875,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84875,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84875,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options84850.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options84850.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options84850.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options84850_$_iter__84855(cljs.core.rest(s__84856__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options84850);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down84884 = (function sablono$core$drop_down84884(var_args){
var G__84889 = arguments.length;
switch (G__84889) {
case 2:
return sablono.core.drop_down84884.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down84884.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down84884.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down84884.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down84884.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),sablono.core.select_options(options,selected)], null);
}));

(sablono.core.drop_down84884.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down84884);
/**
 * Creates a text area element.
 */
sablono.core.text_area84899 = (function sablono$core$text_area84899(var_args){
var G__84904 = arguments.length;
switch (G__84904) {
case 1:
return sablono.core.text_area84899.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area84899.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area84899.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area84899.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area84899.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area84899);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label84912 = (function sablono$core$label84912(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label84912);
/**
 * Creates a submit button.
 */
sablono.core.submit_button84917 = (function sablono$core$submit_button84917(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button84917);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button84921 = (function sablono$core$reset_button84921(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button84921);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to84927 = (function sablono$core$form_to84927(var_args){
var args__4742__auto__ = [];
var len__4736__auto___85224 = arguments.length;
var i__4737__auto___85225 = (0);
while(true){
if((i__4737__auto___85225 < len__4736__auto___85224)){
args__4742__auto__.push((arguments[i__4737__auto___85225]));

var G__85227 = (i__4737__auto___85225 + (1));
i__4737__auto___85225 = G__85227;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to84927.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.form_to84927.cljs$core$IFn$_invoke$arity$variadic = (function (p__84941,body){
var vec__84942 = p__84941;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84942,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84942,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to84927.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to84927.cljs$lang$applyTo = (function (seq84933){
var G__84934 = cljs.core.first(seq84933);
var seq84933__$1 = cljs.core.next(seq84933);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__84934,seq84933__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to84927);

//# sourceMappingURL=sablono.core.js.map
