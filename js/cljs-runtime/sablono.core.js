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
var G__77878__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__77322 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__77323 = cljs.core.seq(vec__77322);
var first__77324 = cljs.core.first(seq__77323);
var seq__77323__$1 = cljs.core.next(seq__77323);
var tag = first__77324;
var body = seq__77323__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__77878 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__77888__i = 0, G__77888__a = new Array(arguments.length -  0);
while (G__77888__i < G__77888__a.length) {G__77888__a[G__77888__i] = arguments[G__77888__i + 0]; ++G__77888__i;}
  args = new cljs.core.IndexedSeq(G__77888__a,0,null);
} 
return G__77878__delegate.call(this,args);};
G__77878.cljs$lang$maxFixedArity = 0;
G__77878.cljs$lang$applyTo = (function (arglist__77890){
var args = cljs.core.seq(arglist__77890);
return G__77878__delegate(args);
});
G__77878.cljs$core$IFn$_invoke$arity$variadic = G__77878__delegate;
return G__77878;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4529__auto__ = (function sablono$core$update_arglists_$_iter__77326(s__77327){
return (new cljs.core.LazySeq(null,(function (){
var s__77327__$1 = s__77327;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__77327__$1);
if(temp__5753__auto__){
var s__77327__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__77327__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__77327__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__77329 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__77328 = (0);
while(true){
if((i__77328 < size__4528__auto__)){
var args = cljs.core._nth(c__4527__auto__,i__77328);
cljs.core.chunk_append(b__77329,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__77895 = (i__77328 + (1));
i__77328 = G__77895;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__77329),sablono$core$update_arglists_$_iter__77326(cljs.core.chunk_rest(s__77327__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__77329),null);
}
} else {
var args = cljs.core.first(s__77327__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__77326(cljs.core.rest(s__77327__$2)));
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
var len__4736__auto___77900 = arguments.length;
var i__4737__auto___77901 = (0);
while(true){
if((i__4737__auto___77901 < len__4736__auto___77900)){
args__4742__auto__.push((arguments[i__4737__auto___77901]));

var G__77908 = (i__4737__auto___77901 + (1));
i__4737__auto___77901 = G__77908;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4529__auto__ = (function sablono$core$iter__77338(s__77339){
return (new cljs.core.LazySeq(null,(function (){
var s__77339__$1 = s__77339;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__77339__$1);
if(temp__5753__auto__){
var s__77339__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__77339__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__77339__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__77341 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__77340 = (0);
while(true){
if((i__77340 < size__4528__auto__)){
var style = cljs.core._nth(c__4527__auto__,i__77340);
cljs.core.chunk_append(b__77341,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__77926 = (i__77340 + (1));
i__77340 = G__77926;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__77341),sablono$core$iter__77338(cljs.core.chunk_rest(s__77339__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__77341),null);
}
} else {
var style = cljs.core.first(s__77339__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__77338(cljs.core.rest(s__77339__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq77336){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq77336));
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
sablono.core.link_to77362 = (function sablono$core$link_to77362(var_args){
var args__4742__auto__ = [];
var len__4736__auto___77937 = arguments.length;
var i__4737__auto___77938 = (0);
while(true){
if((i__4737__auto___77938 < len__4736__auto___77937)){
args__4742__auto__.push((arguments[i__4737__auto___77938]));

var G__77939 = (i__4737__auto___77938 + (1));
i__4737__auto___77938 = G__77939;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to77362.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.link_to77362.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to77362.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to77362.cljs$lang$applyTo = (function (seq77366){
var G__77367 = cljs.core.first(seq77366);
var seq77366__$1 = cljs.core.next(seq77366);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77367,seq77366__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to77362);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to77373 = (function sablono$core$mail_to77373(var_args){
var args__4742__auto__ = [];
var len__4736__auto___77950 = arguments.length;
var i__4737__auto___77951 = (0);
while(true){
if((i__4737__auto___77951 < len__4736__auto___77950)){
args__4742__auto__.push((arguments[i__4737__auto___77951]));

var G__77953 = (i__4737__auto___77951 + (1));
i__4737__auto___77951 = G__77953;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to77373.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.mail_to77373.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__77384){
var vec__77387 = p__77384;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77387,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4126__auto__ = content;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to77373.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to77373.cljs$lang$applyTo = (function (seq77375){
var G__77376 = cljs.core.first(seq77375);
var seq77375__$1 = cljs.core.next(seq77375);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77376,seq77375__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to77373);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list77401 = (function sablono$core$unordered_list77401(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function sablono$core$unordered_list77401_$_iter__77403(s__77404){
return (new cljs.core.LazySeq(null,(function (){
var s__77404__$1 = s__77404;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__77404__$1);
if(temp__5753__auto__){
var s__77404__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__77404__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__77404__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__77406 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__77405 = (0);
while(true){
if((i__77405 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__77405);
cljs.core.chunk_append(b__77406,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__77966 = (i__77405 + (1));
i__77405 = G__77966;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__77406),sablono$core$unordered_list77401_$_iter__77403(cljs.core.chunk_rest(s__77404__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__77406),null);
}
} else {
var x = cljs.core.first(s__77404__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list77401_$_iter__77403(cljs.core.rest(s__77404__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list77401);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list77424 = (function sablono$core$ordered_list77424(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4529__auto__ = (function sablono$core$ordered_list77424_$_iter__77429(s__77430){
return (new cljs.core.LazySeq(null,(function (){
var s__77430__$1 = s__77430;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__77430__$1);
if(temp__5753__auto__){
var s__77430__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__77430__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__77430__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__77432 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__77431 = (0);
while(true){
if((i__77431 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__77431);
cljs.core.chunk_append(b__77432,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__77975 = (i__77431 + (1));
i__77431 = G__77975;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__77432),sablono$core$ordered_list77424_$_iter__77429(cljs.core.chunk_rest(s__77430__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__77432),null);
}
} else {
var x = cljs.core.first(s__77430__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list77424_$_iter__77429(cljs.core.rest(s__77430__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list77424);
/**
 * Create an image element.
 */
sablono.core.image77439 = (function sablono$core$image77439(var_args){
var G__77443 = arguments.length;
switch (G__77443) {
case 1:
return sablono.core.image77439.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image77439.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image77439.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image77439.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image77439.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image77439);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__77450_SHARP_,p2__77451_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__77450_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__77451_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__77455_SHARP_,p2__77456_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__77455_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__77456_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__77466 = arguments.length;
switch (G__77466) {
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
sablono.core.color_field77482 = (function sablono$core$color_field77482(var_args){
var G__77487 = arguments.length;
switch (G__77487) {
case 1:
return sablono.core.color_field77482.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field77482.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field77482.cljs$core$IFn$_invoke$arity$1 = (function (name__77303__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__77303__auto__);
}));

(sablono.core.color_field77482.cljs$core$IFn$_invoke$arity$2 = (function (name__77303__auto__,value__77304__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__77303__auto__,value__77304__auto__);
}));

(sablono.core.color_field77482.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field77482);

/**
 * Creates a date input field.
 */
sablono.core.date_field77494 = (function sablono$core$date_field77494(var_args){
var G__77497 = arguments.length;
switch (G__77497) {
case 1:
return sablono.core.date_field77494.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field77494.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field77494.cljs$core$IFn$_invoke$arity$1 = (function (name__77303__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__77303__auto__);
}));

(sablono.core.date_field77494.cljs$core$IFn$_invoke$arity$2 = (function (name__77303__auto__,value__77304__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__77303__auto__,value__77304__auto__);
}));

(sablono.core.date_field77494.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field77494);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field77504 = (function sablono$core$datetime_field77504(var_args){
var G__77510 = arguments.length;
switch (G__77510) {
case 1:
return sablono.core.datetime_field77504.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field77504.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field77504.cljs$core$IFn$_invoke$arity$1 = (function (name__77303__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__77303__auto__);
}));

(sablono.core.datetime_field77504.cljs$core$IFn$_invoke$arity$2 = (function (name__77303__auto__,value__77304__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__77303__auto__,value__77304__auto__);
}));

(sablono.core.datetime_field77504.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field77504);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field77516 = (function sablono$core$datetime_local_field77516(var_args){
var G__77520 = arguments.length;
switch (G__77520) {
case 1:
return sablono.core.datetime_local_field77516.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field77516.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field77516.cljs$core$IFn$_invoke$arity$1 = (function (name__77303__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__77303__auto__);
}));

(sablono.core.datetime_local_field77516.cljs$core$IFn$_invoke$arity$2 = (function (name__77303__auto__,value__77304__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__77303__auto__,value__77304__auto__);
}));

(sablono.core.datetime_local_field77516.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field77516);

/**
 * Creates a email input field.
 */
sablono.core.email_field77535 = (function sablono$core$email_field77535(var_args){
var G__77539 = arguments.length;
switch (G__77539) {
case 1:
return sablono.core.email_field77535.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field77535.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field77535.cljs$core$IFn$_invoke$arity$1 = (function (name__77303__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__77303__auto__);
}));

(sablono.core.email_field77535.cljs$core$IFn$_invoke$arity$2 = (function (name__77303__auto__,value__77304__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__77303__auto__,value__77304__auto__);
}));

(sablono.core.email_field77535.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field77535);

/**
 * Creates a file input field.
 */
sablono.core.file_field77546 = (function sablono$core$file_field77546(var_args){
var G__77552 = arguments.length;
switch (G__77552) {
case 1:
return sablono.core.file_field77546.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field77546.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field77546.cljs$core$IFn$_invoke$arity$1 = (function (name__77303__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__77303__auto__);
}));

(sablono.core.file_field77546.cljs$core$IFn$_invoke$arity$2 = (function (name__77303__auto__,value__77304__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__77303__auto__,value__77304__auto__);
}));

(sablono.core.file_field77546.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field77546);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field77560 = (function sablono$core$hidden_field77560(var_args){
var G__77564 = arguments.length;
switch (G__77564) {
case 1:
return sablono.core.hidden_field77560.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field77560.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field77560.cljs$core$IFn$_invoke$arity$1 = (function (name__77303__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__77303__auto__);
}));

(sablono.core.hidden_field77560.cljs$core$IFn$_invoke$arity$2 = (function (name__77303__auto__,value__77304__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__77303__auto__,value__77304__auto__);
}));

(sablono.core.hidden_field77560.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field77560);

/**
 * Creates a month input field.
 */
sablono.core.month_field77575 = (function sablono$core$month_field77575(var_args){
var G__77578 = arguments.length;
switch (G__77578) {
case 1:
return sablono.core.month_field77575.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field77575.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field77575.cljs$core$IFn$_invoke$arity$1 = (function (name__77303__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__77303__auto__);
}));

(sablono.core.month_field77575.cljs$core$IFn$_invoke$arity$2 = (function (name__77303__auto__,value__77304__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__77303__auto__,value__77304__auto__);
}));

(sablono.core.month_field77575.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field77575);

/**
 * Creates a number input field.
 */
sablono.core.number_field77591 = (function sablono$core$number_field77591(var_args){
var G__77594 = arguments.length;
switch (G__77594) {
case 1:
return sablono.core.number_field77591.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field77591.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field77591.cljs$core$IFn$_invoke$arity$1 = (function (name__77303__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__77303__auto__);
}));

(sablono.core.number_field77591.cljs$core$IFn$_invoke$arity$2 = (function (name__77303__auto__,value__77304__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__77303__auto__,value__77304__auto__);
}));

(sablono.core.number_field77591.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field77591);

/**
 * Creates a password input field.
 */
sablono.core.password_field77600 = (function sablono$core$password_field77600(var_args){
var G__77605 = arguments.length;
switch (G__77605) {
case 1:
return sablono.core.password_field77600.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field77600.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field77600.cljs$core$IFn$_invoke$arity$1 = (function (name__77303__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__77303__auto__);
}));

(sablono.core.password_field77600.cljs$core$IFn$_invoke$arity$2 = (function (name__77303__auto__,value__77304__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__77303__auto__,value__77304__auto__);
}));

(sablono.core.password_field77600.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field77600);

/**
 * Creates a range input field.
 */
sablono.core.range_field77610 = (function sablono$core$range_field77610(var_args){
var G__77616 = arguments.length;
switch (G__77616) {
case 1:
return sablono.core.range_field77610.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field77610.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field77610.cljs$core$IFn$_invoke$arity$1 = (function (name__77303__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__77303__auto__);
}));

(sablono.core.range_field77610.cljs$core$IFn$_invoke$arity$2 = (function (name__77303__auto__,value__77304__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__77303__auto__,value__77304__auto__);
}));

(sablono.core.range_field77610.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field77610);

/**
 * Creates a search input field.
 */
sablono.core.search_field77627 = (function sablono$core$search_field77627(var_args){
var G__77632 = arguments.length;
switch (G__77632) {
case 1:
return sablono.core.search_field77627.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field77627.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field77627.cljs$core$IFn$_invoke$arity$1 = (function (name__77303__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__77303__auto__);
}));

(sablono.core.search_field77627.cljs$core$IFn$_invoke$arity$2 = (function (name__77303__auto__,value__77304__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__77303__auto__,value__77304__auto__);
}));

(sablono.core.search_field77627.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field77627);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field77643 = (function sablono$core$tel_field77643(var_args){
var G__77653 = arguments.length;
switch (G__77653) {
case 1:
return sablono.core.tel_field77643.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field77643.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field77643.cljs$core$IFn$_invoke$arity$1 = (function (name__77303__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__77303__auto__);
}));

(sablono.core.tel_field77643.cljs$core$IFn$_invoke$arity$2 = (function (name__77303__auto__,value__77304__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__77303__auto__,value__77304__auto__);
}));

(sablono.core.tel_field77643.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field77643);

/**
 * Creates a text input field.
 */
sablono.core.text_field77664 = (function sablono$core$text_field77664(var_args){
var G__77668 = arguments.length;
switch (G__77668) {
case 1:
return sablono.core.text_field77664.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field77664.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field77664.cljs$core$IFn$_invoke$arity$1 = (function (name__77303__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__77303__auto__);
}));

(sablono.core.text_field77664.cljs$core$IFn$_invoke$arity$2 = (function (name__77303__auto__,value__77304__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__77303__auto__,value__77304__auto__);
}));

(sablono.core.text_field77664.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field77664);

/**
 * Creates a time input field.
 */
sablono.core.time_field77674 = (function sablono$core$time_field77674(var_args){
var G__77680 = arguments.length;
switch (G__77680) {
case 1:
return sablono.core.time_field77674.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field77674.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field77674.cljs$core$IFn$_invoke$arity$1 = (function (name__77303__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__77303__auto__);
}));

(sablono.core.time_field77674.cljs$core$IFn$_invoke$arity$2 = (function (name__77303__auto__,value__77304__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__77303__auto__,value__77304__auto__);
}));

(sablono.core.time_field77674.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field77674);

/**
 * Creates a url input field.
 */
sablono.core.url_field77685 = (function sablono$core$url_field77685(var_args){
var G__77693 = arguments.length;
switch (G__77693) {
case 1:
return sablono.core.url_field77685.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field77685.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field77685.cljs$core$IFn$_invoke$arity$1 = (function (name__77303__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__77303__auto__);
}));

(sablono.core.url_field77685.cljs$core$IFn$_invoke$arity$2 = (function (name__77303__auto__,value__77304__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__77303__auto__,value__77304__auto__);
}));

(sablono.core.url_field77685.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field77685);

/**
 * Creates a week input field.
 */
sablono.core.week_field77705 = (function sablono$core$week_field77705(var_args){
var G__77712 = arguments.length;
switch (G__77712) {
case 1:
return sablono.core.week_field77705.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field77705.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field77705.cljs$core$IFn$_invoke$arity$1 = (function (name__77303__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__77303__auto__);
}));

(sablono.core.week_field77705.cljs$core$IFn$_invoke$arity$2 = (function (name__77303__auto__,value__77304__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__77303__auto__,value__77304__auto__);
}));

(sablono.core.week_field77705.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field77705);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box77726 = (function sablono$core$check_box77726(var_args){
var G__77732 = arguments.length;
switch (G__77732) {
case 1:
return sablono.core.check_box77726.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box77726.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box77726.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box77726.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box77726.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box77726.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box77726.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box77726);
/**
 * Creates a radio button.
 */
sablono.core.radio_button77740 = (function sablono$core$radio_button77740(var_args){
var G__77743 = arguments.length;
switch (G__77743) {
case 1:
return sablono.core.radio_button77740.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button77740.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button77740.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button77740.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button77740.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button77740.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button77740.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button77740);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options77761 = (function sablono$core$select_options77761(coll){
var iter__4529__auto__ = (function sablono$core$select_options77761_$_iter__77762(s__77763){
return (new cljs.core.LazySeq(null,(function (){
var s__77763__$1 = s__77763;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__77763__$1);
if(temp__5753__auto__){
var s__77763__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__77763__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__77763__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__77765 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__77764 = (0);
while(true){
if((i__77764 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__77764);
cljs.core.chunk_append(b__77765,((cljs.core.sequential_QMARK_(x))?(function (){var vec__77772 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77772,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77772,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77772,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options77761.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options77761.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options77761.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__78101 = (i__77764 + (1));
i__77764 = G__78101;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__77765),sablono$core$select_options77761_$_iter__77762(cljs.core.chunk_rest(s__77763__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__77765),null);
}
} else {
var x = cljs.core.first(s__77763__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__77780 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77780,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77780,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77780,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options77761.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options77761.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options77761.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options77761_$_iter__77762(cljs.core.rest(s__77763__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options77761);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down77793 = (function sablono$core$drop_down77793(var_args){
var G__77797 = arguments.length;
switch (G__77797) {
case 2:
return sablono.core.drop_down77793.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down77793.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down77793.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down77793.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down77793.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),sablono.core.select_options(options,selected)], null);
}));

(sablono.core.drop_down77793.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down77793);
/**
 * Creates a text area element.
 */
sablono.core.text_area77810 = (function sablono$core$text_area77810(var_args){
var G__77815 = arguments.length;
switch (G__77815) {
case 1:
return sablono.core.text_area77810.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area77810.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area77810.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area77810.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area77810.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area77810);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label77820 = (function sablono$core$label77820(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label77820);
/**
 * Creates a submit button.
 */
sablono.core.submit_button77826 = (function sablono$core$submit_button77826(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button77826);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button77830 = (function sablono$core$reset_button77830(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button77830);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to77838 = (function sablono$core$form_to77838(var_args){
var args__4742__auto__ = [];
var len__4736__auto___78137 = arguments.length;
var i__4737__auto___78138 = (0);
while(true){
if((i__4737__auto___78138 < len__4736__auto___78137)){
args__4742__auto__.push((arguments[i__4737__auto___78138]));

var G__78139 = (i__4737__auto___78138 + (1));
i__4737__auto___78138 = G__78139;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to77838.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.form_to77838.cljs$core$IFn$_invoke$arity$variadic = (function (p__77850,body){
var vec__77852 = p__77850;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77852,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77852,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to77838.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to77838.cljs$lang$applyTo = (function (seq77842){
var G__77843 = cljs.core.first(seq77842);
var seq77842__$1 = cljs.core.next(seq77842);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77843,seq77842__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to77838);

//# sourceMappingURL=sablono.core.js.map
