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
var G__81273__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__80715 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__80716 = cljs.core.seq(vec__80715);
var first__80717 = cljs.core.first(seq__80716);
var seq__80716__$1 = cljs.core.next(seq__80716);
var tag = first__80717;
var body = seq__80716__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__81273 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__81274__i = 0, G__81274__a = new Array(arguments.length -  0);
while (G__81274__i < G__81274__a.length) {G__81274__a[G__81274__i] = arguments[G__81274__i + 0]; ++G__81274__i;}
  args = new cljs.core.IndexedSeq(G__81274__a,0,null);
} 
return G__81273__delegate.call(this,args);};
G__81273.cljs$lang$maxFixedArity = 0;
G__81273.cljs$lang$applyTo = (function (arglist__81275){
var args = cljs.core.seq(arglist__81275);
return G__81273__delegate(args);
});
G__81273.cljs$core$IFn$_invoke$arity$variadic = G__81273__delegate;
return G__81273;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4529__auto__ = (function sablono$core$update_arglists_$_iter__80718(s__80719){
return (new cljs.core.LazySeq(null,(function (){
var s__80719__$1 = s__80719;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__80719__$1);
if(temp__5753__auto__){
var s__80719__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__80719__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__80719__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__80721 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__80720 = (0);
while(true){
if((i__80720 < size__4528__auto__)){
var args = cljs.core._nth(c__4527__auto__,i__80720);
cljs.core.chunk_append(b__80721,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__81279 = (i__80720 + (1));
i__80720 = G__81279;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80721),sablono$core$update_arglists_$_iter__80718(cljs.core.chunk_rest(s__80719__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80721),null);
}
} else {
var args = cljs.core.first(s__80719__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__80718(cljs.core.rest(s__80719__$2)));
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
var len__4736__auto___81282 = arguments.length;
var i__4737__auto___81283 = (0);
while(true){
if((i__4737__auto___81283 < len__4736__auto___81282)){
args__4742__auto__.push((arguments[i__4737__auto___81283]));

var G__81285 = (i__4737__auto___81283 + (1));
i__4737__auto___81283 = G__81285;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4529__auto__ = (function sablono$core$iter__80789(s__80790){
return (new cljs.core.LazySeq(null,(function (){
var s__80790__$1 = s__80790;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__80790__$1);
if(temp__5753__auto__){
var s__80790__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__80790__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__80790__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__80792 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__80791 = (0);
while(true){
if((i__80791 < size__4528__auto__)){
var style = cljs.core._nth(c__4527__auto__,i__80791);
cljs.core.chunk_append(b__80792,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__81289 = (i__80791 + (1));
i__80791 = G__81289;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80792),sablono$core$iter__80789(cljs.core.chunk_rest(s__80790__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80792),null);
}
} else {
var style = cljs.core.first(s__80790__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__80789(cljs.core.rest(s__80790__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq80760){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80760));
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
sablono.core.link_to80841 = (function sablono$core$link_to80841(var_args){
var args__4742__auto__ = [];
var len__4736__auto___81294 = arguments.length;
var i__4737__auto___81295 = (0);
while(true){
if((i__4737__auto___81295 < len__4736__auto___81294)){
args__4742__auto__.push((arguments[i__4737__auto___81295]));

var G__81296 = (i__4737__auto___81295 + (1));
i__4737__auto___81295 = G__81296;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to80841.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.link_to80841.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to80841.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to80841.cljs$lang$applyTo = (function (seq80844){
var G__80847 = cljs.core.first(seq80844);
var seq80844__$1 = cljs.core.next(seq80844);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80847,seq80844__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to80841);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to80859 = (function sablono$core$mail_to80859(var_args){
var args__4742__auto__ = [];
var len__4736__auto___81305 = arguments.length;
var i__4737__auto___81306 = (0);
while(true){
if((i__4737__auto___81306 < len__4736__auto___81305)){
args__4742__auto__.push((arguments[i__4737__auto___81306]));

var G__81308 = (i__4737__auto___81306 + (1));
i__4737__auto___81306 = G__81308;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to80859.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.mail_to80859.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__80869){
var vec__80871 = p__80869;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80871,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4126__auto__ = content;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to80859.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to80859.cljs$lang$applyTo = (function (seq80861){
var G__80862 = cljs.core.first(seq80861);
var seq80861__$1 = cljs.core.next(seq80861);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80862,seq80861__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to80859);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list80878 = (function sablono$core$unordered_list80878(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function sablono$core$unordered_list80878_$_iter__80880(s__80881){
return (new cljs.core.LazySeq(null,(function (){
var s__80881__$1 = s__80881;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__80881__$1);
if(temp__5753__auto__){
var s__80881__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__80881__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__80881__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__80883 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__80882 = (0);
while(true){
if((i__80882 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__80882);
cljs.core.chunk_append(b__80883,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__81316 = (i__80882 + (1));
i__80882 = G__81316;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80883),sablono$core$unordered_list80878_$_iter__80880(cljs.core.chunk_rest(s__80881__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80883),null);
}
} else {
var x = cljs.core.first(s__80881__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list80878_$_iter__80880(cljs.core.rest(s__80881__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list80878);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list80891 = (function sablono$core$ordered_list80891(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4529__auto__ = (function sablono$core$ordered_list80891_$_iter__80894(s__80895){
return (new cljs.core.LazySeq(null,(function (){
var s__80895__$1 = s__80895;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__80895__$1);
if(temp__5753__auto__){
var s__80895__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__80895__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__80895__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__80897 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__80896 = (0);
while(true){
if((i__80896 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__80896);
cljs.core.chunk_append(b__80897,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__81321 = (i__80896 + (1));
i__80896 = G__81321;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80897),sablono$core$ordered_list80891_$_iter__80894(cljs.core.chunk_rest(s__80895__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80897),null);
}
} else {
var x = cljs.core.first(s__80895__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list80891_$_iter__80894(cljs.core.rest(s__80895__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list80891);
/**
 * Create an image element.
 */
sablono.core.image80909 = (function sablono$core$image80909(var_args){
var G__80913 = arguments.length;
switch (G__80913) {
case 1:
return sablono.core.image80909.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image80909.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image80909.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image80909.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image80909.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image80909);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__80919_SHARP_,p2__80920_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__80919_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__80920_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__80924_SHARP_,p2__80925_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__80924_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__80925_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__80937 = arguments.length;
switch (G__80937) {
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
sablono.core.color_field80943 = (function sablono$core$color_field80943(var_args){
var G__80946 = arguments.length;
switch (G__80946) {
case 1:
return sablono.core.color_field80943.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field80943.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field80943.cljs$core$IFn$_invoke$arity$1 = (function (name__66816__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__66816__auto__);
}));

(sablono.core.color_field80943.cljs$core$IFn$_invoke$arity$2 = (function (name__66816__auto__,value__66817__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__66816__auto__,value__66817__auto__);
}));

(sablono.core.color_field80943.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field80943);

/**
 * Creates a date input field.
 */
sablono.core.date_field80957 = (function sablono$core$date_field80957(var_args){
var G__80959 = arguments.length;
switch (G__80959) {
case 1:
return sablono.core.date_field80957.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field80957.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field80957.cljs$core$IFn$_invoke$arity$1 = (function (name__66816__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__66816__auto__);
}));

(sablono.core.date_field80957.cljs$core$IFn$_invoke$arity$2 = (function (name__66816__auto__,value__66817__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__66816__auto__,value__66817__auto__);
}));

(sablono.core.date_field80957.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field80957);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field80960 = (function sablono$core$datetime_field80960(var_args){
var G__80962 = arguments.length;
switch (G__80962) {
case 1:
return sablono.core.datetime_field80960.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field80960.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field80960.cljs$core$IFn$_invoke$arity$1 = (function (name__66816__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__66816__auto__);
}));

(sablono.core.datetime_field80960.cljs$core$IFn$_invoke$arity$2 = (function (name__66816__auto__,value__66817__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__66816__auto__,value__66817__auto__);
}));

(sablono.core.datetime_field80960.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field80960);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field80963 = (function sablono$core$datetime_local_field80963(var_args){
var G__80971 = arguments.length;
switch (G__80971) {
case 1:
return sablono.core.datetime_local_field80963.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field80963.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field80963.cljs$core$IFn$_invoke$arity$1 = (function (name__66816__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__66816__auto__);
}));

(sablono.core.datetime_local_field80963.cljs$core$IFn$_invoke$arity$2 = (function (name__66816__auto__,value__66817__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__66816__auto__,value__66817__auto__);
}));

(sablono.core.datetime_local_field80963.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field80963);

/**
 * Creates a email input field.
 */
sablono.core.email_field80972 = (function sablono$core$email_field80972(var_args){
var G__80974 = arguments.length;
switch (G__80974) {
case 1:
return sablono.core.email_field80972.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field80972.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field80972.cljs$core$IFn$_invoke$arity$1 = (function (name__66816__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__66816__auto__);
}));

(sablono.core.email_field80972.cljs$core$IFn$_invoke$arity$2 = (function (name__66816__auto__,value__66817__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__66816__auto__,value__66817__auto__);
}));

(sablono.core.email_field80972.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field80972);

/**
 * Creates a file input field.
 */
sablono.core.file_field80975 = (function sablono$core$file_field80975(var_args){
var G__80977 = arguments.length;
switch (G__80977) {
case 1:
return sablono.core.file_field80975.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field80975.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field80975.cljs$core$IFn$_invoke$arity$1 = (function (name__66816__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__66816__auto__);
}));

(sablono.core.file_field80975.cljs$core$IFn$_invoke$arity$2 = (function (name__66816__auto__,value__66817__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__66816__auto__,value__66817__auto__);
}));

(sablono.core.file_field80975.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field80975);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field80982 = (function sablono$core$hidden_field80982(var_args){
var G__80984 = arguments.length;
switch (G__80984) {
case 1:
return sablono.core.hidden_field80982.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field80982.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field80982.cljs$core$IFn$_invoke$arity$1 = (function (name__66816__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__66816__auto__);
}));

(sablono.core.hidden_field80982.cljs$core$IFn$_invoke$arity$2 = (function (name__66816__auto__,value__66817__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__66816__auto__,value__66817__auto__);
}));

(sablono.core.hidden_field80982.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field80982);

/**
 * Creates a month input field.
 */
sablono.core.month_field80986 = (function sablono$core$month_field80986(var_args){
var G__80992 = arguments.length;
switch (G__80992) {
case 1:
return sablono.core.month_field80986.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field80986.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field80986.cljs$core$IFn$_invoke$arity$1 = (function (name__66816__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__66816__auto__);
}));

(sablono.core.month_field80986.cljs$core$IFn$_invoke$arity$2 = (function (name__66816__auto__,value__66817__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__66816__auto__,value__66817__auto__);
}));

(sablono.core.month_field80986.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field80986);

/**
 * Creates a number input field.
 */
sablono.core.number_field80993 = (function sablono$core$number_field80993(var_args){
var G__80998 = arguments.length;
switch (G__80998) {
case 1:
return sablono.core.number_field80993.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field80993.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field80993.cljs$core$IFn$_invoke$arity$1 = (function (name__66816__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__66816__auto__);
}));

(sablono.core.number_field80993.cljs$core$IFn$_invoke$arity$2 = (function (name__66816__auto__,value__66817__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__66816__auto__,value__66817__auto__);
}));

(sablono.core.number_field80993.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field80993);

/**
 * Creates a password input field.
 */
sablono.core.password_field80999 = (function sablono$core$password_field80999(var_args){
var G__81001 = arguments.length;
switch (G__81001) {
case 1:
return sablono.core.password_field80999.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field80999.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field80999.cljs$core$IFn$_invoke$arity$1 = (function (name__66816__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__66816__auto__);
}));

(sablono.core.password_field80999.cljs$core$IFn$_invoke$arity$2 = (function (name__66816__auto__,value__66817__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__66816__auto__,value__66817__auto__);
}));

(sablono.core.password_field80999.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field80999);

/**
 * Creates a range input field.
 */
sablono.core.range_field81002 = (function sablono$core$range_field81002(var_args){
var G__81007 = arguments.length;
switch (G__81007) {
case 1:
return sablono.core.range_field81002.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field81002.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field81002.cljs$core$IFn$_invoke$arity$1 = (function (name__66816__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__66816__auto__);
}));

(sablono.core.range_field81002.cljs$core$IFn$_invoke$arity$2 = (function (name__66816__auto__,value__66817__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__66816__auto__,value__66817__auto__);
}));

(sablono.core.range_field81002.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field81002);

/**
 * Creates a search input field.
 */
sablono.core.search_field81011 = (function sablono$core$search_field81011(var_args){
var G__81016 = arguments.length;
switch (G__81016) {
case 1:
return sablono.core.search_field81011.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field81011.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field81011.cljs$core$IFn$_invoke$arity$1 = (function (name__66816__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__66816__auto__);
}));

(sablono.core.search_field81011.cljs$core$IFn$_invoke$arity$2 = (function (name__66816__auto__,value__66817__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__66816__auto__,value__66817__auto__);
}));

(sablono.core.search_field81011.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field81011);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field81038 = (function sablono$core$tel_field81038(var_args){
var G__81047 = arguments.length;
switch (G__81047) {
case 1:
return sablono.core.tel_field81038.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field81038.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field81038.cljs$core$IFn$_invoke$arity$1 = (function (name__66816__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__66816__auto__);
}));

(sablono.core.tel_field81038.cljs$core$IFn$_invoke$arity$2 = (function (name__66816__auto__,value__66817__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__66816__auto__,value__66817__auto__);
}));

(sablono.core.tel_field81038.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field81038);

/**
 * Creates a text input field.
 */
sablono.core.text_field81072 = (function sablono$core$text_field81072(var_args){
var G__81095 = arguments.length;
switch (G__81095) {
case 1:
return sablono.core.text_field81072.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field81072.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field81072.cljs$core$IFn$_invoke$arity$1 = (function (name__66816__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__66816__auto__);
}));

(sablono.core.text_field81072.cljs$core$IFn$_invoke$arity$2 = (function (name__66816__auto__,value__66817__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__66816__auto__,value__66817__auto__);
}));

(sablono.core.text_field81072.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field81072);

/**
 * Creates a time input field.
 */
sablono.core.time_field81104 = (function sablono$core$time_field81104(var_args){
var G__81108 = arguments.length;
switch (G__81108) {
case 1:
return sablono.core.time_field81104.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field81104.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field81104.cljs$core$IFn$_invoke$arity$1 = (function (name__66816__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__66816__auto__);
}));

(sablono.core.time_field81104.cljs$core$IFn$_invoke$arity$2 = (function (name__66816__auto__,value__66817__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__66816__auto__,value__66817__auto__);
}));

(sablono.core.time_field81104.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field81104);

/**
 * Creates a url input field.
 */
sablono.core.url_field81113 = (function sablono$core$url_field81113(var_args){
var G__81116 = arguments.length;
switch (G__81116) {
case 1:
return sablono.core.url_field81113.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field81113.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field81113.cljs$core$IFn$_invoke$arity$1 = (function (name__66816__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__66816__auto__);
}));

(sablono.core.url_field81113.cljs$core$IFn$_invoke$arity$2 = (function (name__66816__auto__,value__66817__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__66816__auto__,value__66817__auto__);
}));

(sablono.core.url_field81113.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field81113);

/**
 * Creates a week input field.
 */
sablono.core.week_field81122 = (function sablono$core$week_field81122(var_args){
var G__81125 = arguments.length;
switch (G__81125) {
case 1:
return sablono.core.week_field81122.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field81122.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field81122.cljs$core$IFn$_invoke$arity$1 = (function (name__66816__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__66816__auto__);
}));

(sablono.core.week_field81122.cljs$core$IFn$_invoke$arity$2 = (function (name__66816__auto__,value__66817__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__66816__auto__,value__66817__auto__);
}));

(sablono.core.week_field81122.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field81122);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box81132 = (function sablono$core$check_box81132(var_args){
var G__81136 = arguments.length;
switch (G__81136) {
case 1:
return sablono.core.check_box81132.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box81132.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box81132.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box81132.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box81132.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box81132.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box81132.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box81132);
/**
 * Creates a radio button.
 */
sablono.core.radio_button81144 = (function sablono$core$radio_button81144(var_args){
var G__81148 = arguments.length;
switch (G__81148) {
case 1:
return sablono.core.radio_button81144.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button81144.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button81144.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button81144.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button81144.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button81144.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button81144.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button81144);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options81163 = (function sablono$core$select_options81163(coll){
var iter__4529__auto__ = (function sablono$core$select_options81163_$_iter__81166(s__81167){
return (new cljs.core.LazySeq(null,(function (){
var s__81167__$1 = s__81167;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__81167__$1);
if(temp__5753__auto__){
var s__81167__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__81167__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__81167__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__81169 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__81168 = (0);
while(true){
if((i__81168 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__81168);
cljs.core.chunk_append(b__81169,((cljs.core.sequential_QMARK_(x))?(function (){var vec__81174 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81174,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81174,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81174,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options81163.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options81163.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options81163.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__81455 = (i__81168 + (1));
i__81168 = G__81455;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81169),sablono$core$select_options81163_$_iter__81166(cljs.core.chunk_rest(s__81167__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81169),null);
}
} else {
var x = cljs.core.first(s__81167__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__81182 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81182,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81182,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81182,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options81163.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options81163.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options81163.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options81163_$_iter__81166(cljs.core.rest(s__81167__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options81163);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down81188 = (function sablono$core$drop_down81188(var_args){
var G__81191 = arguments.length;
switch (G__81191) {
case 2:
return sablono.core.drop_down81188.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down81188.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down81188.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down81188.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down81188.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),sablono.core.select_options(options,selected)], null);
}));

(sablono.core.drop_down81188.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down81188);
/**
 * Creates a text area element.
 */
sablono.core.text_area81194 = (function sablono$core$text_area81194(var_args){
var G__81196 = arguments.length;
switch (G__81196) {
case 1:
return sablono.core.text_area81194.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area81194.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area81194.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area81194.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area81194.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area81194);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label81200 = (function sablono$core$label81200(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label81200);
/**
 * Creates a submit button.
 */
sablono.core.submit_button81201 = (function sablono$core$submit_button81201(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button81201);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button81202 = (function sablono$core$reset_button81202(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button81202);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to81204 = (function sablono$core$form_to81204(var_args){
var args__4742__auto__ = [];
var len__4736__auto___81462 = arguments.length;
var i__4737__auto___81463 = (0);
while(true){
if((i__4737__auto___81463 < len__4736__auto___81462)){
args__4742__auto__.push((arguments[i__4737__auto___81463]));

var G__81464 = (i__4737__auto___81463 + (1));
i__4737__auto___81463 = G__81464;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to81204.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.form_to81204.cljs$core$IFn$_invoke$arity$variadic = (function (p__81215,body){
var vec__81217 = p__81215;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81217,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81217,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to81204.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to81204.cljs$lang$applyTo = (function (seq81213){
var G__81214 = cljs.core.first(seq81213);
var seq81213__$1 = cljs.core.next(seq81213);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81214,seq81213__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to81204);

//# sourceMappingURL=sablono.core.js.map
