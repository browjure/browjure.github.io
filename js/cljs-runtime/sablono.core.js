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
var G__82686__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__82319 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__82320 = cljs.core.seq(vec__82319);
var first__82321 = cljs.core.first(seq__82320);
var seq__82320__$1 = cljs.core.next(seq__82320);
var tag = first__82321;
var body = seq__82320__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__82686 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__82691__i = 0, G__82691__a = new Array(arguments.length -  0);
while (G__82691__i < G__82691__a.length) {G__82691__a[G__82691__i] = arguments[G__82691__i + 0]; ++G__82691__i;}
  args = new cljs.core.IndexedSeq(G__82691__a,0,null);
} 
return G__82686__delegate.call(this,args);};
G__82686.cljs$lang$maxFixedArity = 0;
G__82686.cljs$lang$applyTo = (function (arglist__82692){
var args = cljs.core.seq(arglist__82692);
return G__82686__delegate(args);
});
G__82686.cljs$core$IFn$_invoke$arity$variadic = G__82686__delegate;
return G__82686;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4529__auto__ = (function sablono$core$update_arglists_$_iter__82324(s__82325){
return (new cljs.core.LazySeq(null,(function (){
var s__82325__$1 = s__82325;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82325__$1);
if(temp__5753__auto__){
var s__82325__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__82325__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__82325__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__82327 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__82326 = (0);
while(true){
if((i__82326 < size__4528__auto__)){
var args = cljs.core._nth(c__4527__auto__,i__82326);
cljs.core.chunk_append(b__82327,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__82696 = (i__82326 + (1));
i__82326 = G__82696;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82327),sablono$core$update_arglists_$_iter__82324(cljs.core.chunk_rest(s__82325__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82327),null);
}
} else {
var args = cljs.core.first(s__82325__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__82324(cljs.core.rest(s__82325__$2)));
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
var len__4736__auto___82700 = arguments.length;
var i__4737__auto___82701 = (0);
while(true){
if((i__4737__auto___82701 < len__4736__auto___82700)){
args__4742__auto__.push((arguments[i__4737__auto___82701]));

var G__82703 = (i__4737__auto___82701 + (1));
i__4737__auto___82701 = G__82703;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4529__auto__ = (function sablono$core$iter__82345(s__82346){
return (new cljs.core.LazySeq(null,(function (){
var s__82346__$1 = s__82346;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82346__$1);
if(temp__5753__auto__){
var s__82346__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__82346__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__82346__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__82348 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__82347 = (0);
while(true){
if((i__82347 < size__4528__auto__)){
var style = cljs.core._nth(c__4527__auto__,i__82347);
cljs.core.chunk_append(b__82348,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__82706 = (i__82347 + (1));
i__82347 = G__82706;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82348),sablono$core$iter__82345(cljs.core.chunk_rest(s__82346__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82348),null);
}
} else {
var style = cljs.core.first(s__82346__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__82345(cljs.core.rest(s__82346__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq82340){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq82340));
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
sablono.core.link_to82352 = (function sablono$core$link_to82352(var_args){
var args__4742__auto__ = [];
var len__4736__auto___82710 = arguments.length;
var i__4737__auto___82711 = (0);
while(true){
if((i__4737__auto___82711 < len__4736__auto___82710)){
args__4742__auto__.push((arguments[i__4737__auto___82711]));

var G__82712 = (i__4737__auto___82711 + (1));
i__4737__auto___82711 = G__82712;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to82352.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.link_to82352.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to82352.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to82352.cljs$lang$applyTo = (function (seq82354){
var G__82355 = cljs.core.first(seq82354);
var seq82354__$1 = cljs.core.next(seq82354);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__82355,seq82354__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to82352);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to82366 = (function sablono$core$mail_to82366(var_args){
var args__4742__auto__ = [];
var len__4736__auto___82716 = arguments.length;
var i__4737__auto___82717 = (0);
while(true){
if((i__4737__auto___82717 < len__4736__auto___82716)){
args__4742__auto__.push((arguments[i__4737__auto___82717]));

var G__82718 = (i__4737__auto___82717 + (1));
i__4737__auto___82717 = G__82718;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to82366.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.mail_to82366.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__82373){
var vec__82374 = p__82373;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82374,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4126__auto__ = content;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to82366.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to82366.cljs$lang$applyTo = (function (seq82368){
var G__82369 = cljs.core.first(seq82368);
var seq82368__$1 = cljs.core.next(seq82368);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__82369,seq82368__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to82366);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list82380 = (function sablono$core$unordered_list82380(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function sablono$core$unordered_list82380_$_iter__82384(s__82385){
return (new cljs.core.LazySeq(null,(function (){
var s__82385__$1 = s__82385;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82385__$1);
if(temp__5753__auto__){
var s__82385__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__82385__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__82385__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__82387 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__82386 = (0);
while(true){
if((i__82386 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__82386);
cljs.core.chunk_append(b__82387,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__82730 = (i__82386 + (1));
i__82386 = G__82730;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82387),sablono$core$unordered_list82380_$_iter__82384(cljs.core.chunk_rest(s__82385__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82387),null);
}
} else {
var x = cljs.core.first(s__82385__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list82380_$_iter__82384(cljs.core.rest(s__82385__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list82380);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list82391 = (function sablono$core$ordered_list82391(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4529__auto__ = (function sablono$core$ordered_list82391_$_iter__82393(s__82394){
return (new cljs.core.LazySeq(null,(function (){
var s__82394__$1 = s__82394;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82394__$1);
if(temp__5753__auto__){
var s__82394__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__82394__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__82394__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__82396 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__82395 = (0);
while(true){
if((i__82395 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__82395);
cljs.core.chunk_append(b__82396,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__82740 = (i__82395 + (1));
i__82395 = G__82740;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82396),sablono$core$ordered_list82391_$_iter__82393(cljs.core.chunk_rest(s__82394__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82396),null);
}
} else {
var x = cljs.core.first(s__82394__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list82391_$_iter__82393(cljs.core.rest(s__82394__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list82391);
/**
 * Create an image element.
 */
sablono.core.image82405 = (function sablono$core$image82405(var_args){
var G__82409 = arguments.length;
switch (G__82409) {
case 1:
return sablono.core.image82405.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image82405.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image82405.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image82405.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image82405.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image82405);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__82414_SHARP_,p2__82415_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__82414_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__82415_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__82417_SHARP_,p2__82418_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__82417_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__82418_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__82428 = arguments.length;
switch (G__82428) {
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
sablono.core.color_field82436 = (function sablono$core$color_field82436(var_args){
var G__82439 = arguments.length;
switch (G__82439) {
case 1:
return sablono.core.color_field82436.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field82436.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field82436.cljs$core$IFn$_invoke$arity$1 = (function (name__82304__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__82304__auto__);
}));

(sablono.core.color_field82436.cljs$core$IFn$_invoke$arity$2 = (function (name__82304__auto__,value__82305__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__82304__auto__,value__82305__auto__);
}));

(sablono.core.color_field82436.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field82436);

/**
 * Creates a date input field.
 */
sablono.core.date_field82443 = (function sablono$core$date_field82443(var_args){
var G__82446 = arguments.length;
switch (G__82446) {
case 1:
return sablono.core.date_field82443.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field82443.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field82443.cljs$core$IFn$_invoke$arity$1 = (function (name__82304__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__82304__auto__);
}));

(sablono.core.date_field82443.cljs$core$IFn$_invoke$arity$2 = (function (name__82304__auto__,value__82305__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__82304__auto__,value__82305__auto__);
}));

(sablono.core.date_field82443.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field82443);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field82448 = (function sablono$core$datetime_field82448(var_args){
var G__82450 = arguments.length;
switch (G__82450) {
case 1:
return sablono.core.datetime_field82448.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field82448.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field82448.cljs$core$IFn$_invoke$arity$1 = (function (name__82304__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__82304__auto__);
}));

(sablono.core.datetime_field82448.cljs$core$IFn$_invoke$arity$2 = (function (name__82304__auto__,value__82305__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__82304__auto__,value__82305__auto__);
}));

(sablono.core.datetime_field82448.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field82448);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field82454 = (function sablono$core$datetime_local_field82454(var_args){
var G__82457 = arguments.length;
switch (G__82457) {
case 1:
return sablono.core.datetime_local_field82454.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field82454.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field82454.cljs$core$IFn$_invoke$arity$1 = (function (name__82304__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__82304__auto__);
}));

(sablono.core.datetime_local_field82454.cljs$core$IFn$_invoke$arity$2 = (function (name__82304__auto__,value__82305__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__82304__auto__,value__82305__auto__);
}));

(sablono.core.datetime_local_field82454.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field82454);

/**
 * Creates a email input field.
 */
sablono.core.email_field82461 = (function sablono$core$email_field82461(var_args){
var G__82464 = arguments.length;
switch (G__82464) {
case 1:
return sablono.core.email_field82461.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field82461.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field82461.cljs$core$IFn$_invoke$arity$1 = (function (name__82304__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__82304__auto__);
}));

(sablono.core.email_field82461.cljs$core$IFn$_invoke$arity$2 = (function (name__82304__auto__,value__82305__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__82304__auto__,value__82305__auto__);
}));

(sablono.core.email_field82461.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field82461);

/**
 * Creates a file input field.
 */
sablono.core.file_field82466 = (function sablono$core$file_field82466(var_args){
var G__82470 = arguments.length;
switch (G__82470) {
case 1:
return sablono.core.file_field82466.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field82466.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field82466.cljs$core$IFn$_invoke$arity$1 = (function (name__82304__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__82304__auto__);
}));

(sablono.core.file_field82466.cljs$core$IFn$_invoke$arity$2 = (function (name__82304__auto__,value__82305__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__82304__auto__,value__82305__auto__);
}));

(sablono.core.file_field82466.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field82466);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field82472 = (function sablono$core$hidden_field82472(var_args){
var G__82475 = arguments.length;
switch (G__82475) {
case 1:
return sablono.core.hidden_field82472.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field82472.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field82472.cljs$core$IFn$_invoke$arity$1 = (function (name__82304__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__82304__auto__);
}));

(sablono.core.hidden_field82472.cljs$core$IFn$_invoke$arity$2 = (function (name__82304__auto__,value__82305__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__82304__auto__,value__82305__auto__);
}));

(sablono.core.hidden_field82472.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field82472);

/**
 * Creates a month input field.
 */
sablono.core.month_field82477 = (function sablono$core$month_field82477(var_args){
var G__82481 = arguments.length;
switch (G__82481) {
case 1:
return sablono.core.month_field82477.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field82477.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field82477.cljs$core$IFn$_invoke$arity$1 = (function (name__82304__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__82304__auto__);
}));

(sablono.core.month_field82477.cljs$core$IFn$_invoke$arity$2 = (function (name__82304__auto__,value__82305__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__82304__auto__,value__82305__auto__);
}));

(sablono.core.month_field82477.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field82477);

/**
 * Creates a number input field.
 */
sablono.core.number_field82489 = (function sablono$core$number_field82489(var_args){
var G__82492 = arguments.length;
switch (G__82492) {
case 1:
return sablono.core.number_field82489.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field82489.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field82489.cljs$core$IFn$_invoke$arity$1 = (function (name__82304__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__82304__auto__);
}));

(sablono.core.number_field82489.cljs$core$IFn$_invoke$arity$2 = (function (name__82304__auto__,value__82305__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__82304__auto__,value__82305__auto__);
}));

(sablono.core.number_field82489.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field82489);

/**
 * Creates a password input field.
 */
sablono.core.password_field82494 = (function sablono$core$password_field82494(var_args){
var G__82497 = arguments.length;
switch (G__82497) {
case 1:
return sablono.core.password_field82494.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field82494.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field82494.cljs$core$IFn$_invoke$arity$1 = (function (name__82304__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__82304__auto__);
}));

(sablono.core.password_field82494.cljs$core$IFn$_invoke$arity$2 = (function (name__82304__auto__,value__82305__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__82304__auto__,value__82305__auto__);
}));

(sablono.core.password_field82494.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field82494);

/**
 * Creates a range input field.
 */
sablono.core.range_field82501 = (function sablono$core$range_field82501(var_args){
var G__82504 = arguments.length;
switch (G__82504) {
case 1:
return sablono.core.range_field82501.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field82501.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field82501.cljs$core$IFn$_invoke$arity$1 = (function (name__82304__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__82304__auto__);
}));

(sablono.core.range_field82501.cljs$core$IFn$_invoke$arity$2 = (function (name__82304__auto__,value__82305__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__82304__auto__,value__82305__auto__);
}));

(sablono.core.range_field82501.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field82501);

/**
 * Creates a search input field.
 */
sablono.core.search_field82508 = (function sablono$core$search_field82508(var_args){
var G__82510 = arguments.length;
switch (G__82510) {
case 1:
return sablono.core.search_field82508.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field82508.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field82508.cljs$core$IFn$_invoke$arity$1 = (function (name__82304__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__82304__auto__);
}));

(sablono.core.search_field82508.cljs$core$IFn$_invoke$arity$2 = (function (name__82304__auto__,value__82305__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__82304__auto__,value__82305__auto__);
}));

(sablono.core.search_field82508.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field82508);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field82516 = (function sablono$core$tel_field82516(var_args){
var G__82518 = arguments.length;
switch (G__82518) {
case 1:
return sablono.core.tel_field82516.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field82516.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field82516.cljs$core$IFn$_invoke$arity$1 = (function (name__82304__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__82304__auto__);
}));

(sablono.core.tel_field82516.cljs$core$IFn$_invoke$arity$2 = (function (name__82304__auto__,value__82305__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__82304__auto__,value__82305__auto__);
}));

(sablono.core.tel_field82516.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field82516);

/**
 * Creates a text input field.
 */
sablono.core.text_field82523 = (function sablono$core$text_field82523(var_args){
var G__82527 = arguments.length;
switch (G__82527) {
case 1:
return sablono.core.text_field82523.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field82523.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field82523.cljs$core$IFn$_invoke$arity$1 = (function (name__82304__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__82304__auto__);
}));

(sablono.core.text_field82523.cljs$core$IFn$_invoke$arity$2 = (function (name__82304__auto__,value__82305__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__82304__auto__,value__82305__auto__);
}));

(sablono.core.text_field82523.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field82523);

/**
 * Creates a time input field.
 */
sablono.core.time_field82530 = (function sablono$core$time_field82530(var_args){
var G__82535 = arguments.length;
switch (G__82535) {
case 1:
return sablono.core.time_field82530.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field82530.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field82530.cljs$core$IFn$_invoke$arity$1 = (function (name__82304__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__82304__auto__);
}));

(sablono.core.time_field82530.cljs$core$IFn$_invoke$arity$2 = (function (name__82304__auto__,value__82305__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__82304__auto__,value__82305__auto__);
}));

(sablono.core.time_field82530.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field82530);

/**
 * Creates a url input field.
 */
sablono.core.url_field82538 = (function sablono$core$url_field82538(var_args){
var G__82541 = arguments.length;
switch (G__82541) {
case 1:
return sablono.core.url_field82538.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field82538.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field82538.cljs$core$IFn$_invoke$arity$1 = (function (name__82304__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__82304__auto__);
}));

(sablono.core.url_field82538.cljs$core$IFn$_invoke$arity$2 = (function (name__82304__auto__,value__82305__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__82304__auto__,value__82305__auto__);
}));

(sablono.core.url_field82538.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field82538);

/**
 * Creates a week input field.
 */
sablono.core.week_field82546 = (function sablono$core$week_field82546(var_args){
var G__82549 = arguments.length;
switch (G__82549) {
case 1:
return sablono.core.week_field82546.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field82546.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field82546.cljs$core$IFn$_invoke$arity$1 = (function (name__82304__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__82304__auto__);
}));

(sablono.core.week_field82546.cljs$core$IFn$_invoke$arity$2 = (function (name__82304__auto__,value__82305__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__82304__auto__,value__82305__auto__);
}));

(sablono.core.week_field82546.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field82546);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box82557 = (function sablono$core$check_box82557(var_args){
var G__82560 = arguments.length;
switch (G__82560) {
case 1:
return sablono.core.check_box82557.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box82557.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box82557.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box82557.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box82557.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box82557.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box82557.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box82557);
/**
 * Creates a radio button.
 */
sablono.core.radio_button82567 = (function sablono$core$radio_button82567(var_args){
var G__82570 = arguments.length;
switch (G__82570) {
case 1:
return sablono.core.radio_button82567.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button82567.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button82567.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button82567.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button82567.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button82567.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button82567.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button82567);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options82584 = (function sablono$core$select_options82584(coll){
var iter__4529__auto__ = (function sablono$core$select_options82584_$_iter__82585(s__82586){
return (new cljs.core.LazySeq(null,(function (){
var s__82586__$1 = s__82586;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82586__$1);
if(temp__5753__auto__){
var s__82586__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__82586__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__82586__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__82588 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__82587 = (0);
while(true){
if((i__82587 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__82587);
cljs.core.chunk_append(b__82588,((cljs.core.sequential_QMARK_(x))?(function (){var vec__82596 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82596,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82596,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82596,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options82584.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options82584.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options82584.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__82910 = (i__82587 + (1));
i__82587 = G__82910;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82588),sablono$core$select_options82584_$_iter__82585(cljs.core.chunk_rest(s__82586__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82588),null);
}
} else {
var x = cljs.core.first(s__82586__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__82602 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82602,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82602,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82602,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options82584.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options82584.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options82584.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options82584_$_iter__82585(cljs.core.rest(s__82586__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options82584);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down82611 = (function sablono$core$drop_down82611(var_args){
var G__82613 = arguments.length;
switch (G__82613) {
case 2:
return sablono.core.drop_down82611.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down82611.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down82611.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down82611.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down82611.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),sablono.core.select_options(options,selected)], null);
}));

(sablono.core.drop_down82611.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down82611);
/**
 * Creates a text area element.
 */
sablono.core.text_area82621 = (function sablono$core$text_area82621(var_args){
var G__82626 = arguments.length;
switch (G__82626) {
case 1:
return sablono.core.text_area82621.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area82621.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area82621.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area82621.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area82621.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area82621);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label82630 = (function sablono$core$label82630(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label82630);
/**
 * Creates a submit button.
 */
sablono.core.submit_button82634 = (function sablono$core$submit_button82634(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button82634);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button82635 = (function sablono$core$reset_button82635(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button82635);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to82639 = (function sablono$core$form_to82639(var_args){
var args__4742__auto__ = [];
var len__4736__auto___82966 = arguments.length;
var i__4737__auto___82971 = (0);
while(true){
if((i__4737__auto___82971 < len__4736__auto___82966)){
args__4742__auto__.push((arguments[i__4737__auto___82971]));

var G__82978 = (i__4737__auto___82971 + (1));
i__4737__auto___82971 = G__82978;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to82639.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.form_to82639.cljs$core$IFn$_invoke$arity$variadic = (function (p__82652,body){
var vec__82656 = p__82652;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82656,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82656,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to82639.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to82639.cljs$lang$applyTo = (function (seq82646){
var G__82647 = cljs.core.first(seq82646);
var seq82646__$1 = cljs.core.next(seq82646);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__82647,seq82646__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to82639);

//# sourceMappingURL=sablono.core.js.map
