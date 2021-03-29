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
var G__77664__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__77100 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__77101 = cljs.core.seq(vec__77100);
var first__77102 = cljs.core.first(seq__77101);
var seq__77101__$1 = cljs.core.next(seq__77101);
var tag = first__77102;
var body = seq__77101__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__77664 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__77674__i = 0, G__77674__a = new Array(arguments.length -  0);
while (G__77674__i < G__77674__a.length) {G__77674__a[G__77674__i] = arguments[G__77674__i + 0]; ++G__77674__i;}
  args = new cljs.core.IndexedSeq(G__77674__a,0,null);
} 
return G__77664__delegate.call(this,args);};
G__77664.cljs$lang$maxFixedArity = 0;
G__77664.cljs$lang$applyTo = (function (arglist__77675){
var args = cljs.core.seq(arglist__77675);
return G__77664__delegate(args);
});
G__77664.cljs$core$IFn$_invoke$arity$variadic = G__77664__delegate;
return G__77664;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4529__auto__ = (function sablono$core$update_arglists_$_iter__77107(s__77108){
return (new cljs.core.LazySeq(null,(function (){
var s__77108__$1 = s__77108;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__77108__$1);
if(temp__5753__auto__){
var s__77108__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__77108__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__77108__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__77110 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__77109 = (0);
while(true){
if((i__77109 < size__4528__auto__)){
var args = cljs.core._nth(c__4527__auto__,i__77109);
cljs.core.chunk_append(b__77110,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__77680 = (i__77109 + (1));
i__77109 = G__77680;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__77110),sablono$core$update_arglists_$_iter__77107(cljs.core.chunk_rest(s__77108__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__77110),null);
}
} else {
var args = cljs.core.first(s__77108__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__77107(cljs.core.rest(s__77108__$2)));
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
var len__4736__auto___77682 = arguments.length;
var i__4737__auto___77683 = (0);
while(true){
if((i__4737__auto___77683 < len__4736__auto___77682)){
args__4742__auto__.push((arguments[i__4737__auto___77683]));

var G__77685 = (i__4737__auto___77683 + (1));
i__4737__auto___77683 = G__77685;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4529__auto__ = (function sablono$core$iter__77120(s__77121){
return (new cljs.core.LazySeq(null,(function (){
var s__77121__$1 = s__77121;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__77121__$1);
if(temp__5753__auto__){
var s__77121__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__77121__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__77121__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__77123 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__77122 = (0);
while(true){
if((i__77122 < size__4528__auto__)){
var style = cljs.core._nth(c__4527__auto__,i__77122);
cljs.core.chunk_append(b__77123,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__77707 = (i__77122 + (1));
i__77122 = G__77707;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__77123),sablono$core$iter__77120(cljs.core.chunk_rest(s__77121__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__77123),null);
}
} else {
var style = cljs.core.first(s__77121__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__77120(cljs.core.rest(s__77121__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq77117){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq77117));
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
sablono.core.link_to77144 = (function sablono$core$link_to77144(var_args){
var args__4742__auto__ = [];
var len__4736__auto___77713 = arguments.length;
var i__4737__auto___77714 = (0);
while(true){
if((i__4737__auto___77714 < len__4736__auto___77713)){
args__4742__auto__.push((arguments[i__4737__auto___77714]));

var G__77715 = (i__4737__auto___77714 + (1));
i__4737__auto___77714 = G__77715;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to77144.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.link_to77144.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to77144.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to77144.cljs$lang$applyTo = (function (seq77146){
var G__77147 = cljs.core.first(seq77146);
var seq77146__$1 = cljs.core.next(seq77146);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77147,seq77146__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to77144);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to77154 = (function sablono$core$mail_to77154(var_args){
var args__4742__auto__ = [];
var len__4736__auto___77722 = arguments.length;
var i__4737__auto___77723 = (0);
while(true){
if((i__4737__auto___77723 < len__4736__auto___77722)){
args__4742__auto__.push((arguments[i__4737__auto___77723]));

var G__77725 = (i__4737__auto___77723 + (1));
i__4737__auto___77723 = G__77725;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to77154.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.mail_to77154.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__77168){
var vec__77169 = p__77168;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77169,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4126__auto__ = content;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to77154.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to77154.cljs$lang$applyTo = (function (seq77157){
var G__77158 = cljs.core.first(seq77157);
var seq77157__$1 = cljs.core.next(seq77157);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77158,seq77157__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to77154);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list77179 = (function sablono$core$unordered_list77179(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function sablono$core$unordered_list77179_$_iter__77180(s__77181){
return (new cljs.core.LazySeq(null,(function (){
var s__77181__$1 = s__77181;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__77181__$1);
if(temp__5753__auto__){
var s__77181__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__77181__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__77181__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__77183 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__77182 = (0);
while(true){
if((i__77182 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__77182);
cljs.core.chunk_append(b__77183,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__77738 = (i__77182 + (1));
i__77182 = G__77738;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__77183),sablono$core$unordered_list77179_$_iter__77180(cljs.core.chunk_rest(s__77181__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__77183),null);
}
} else {
var x = cljs.core.first(s__77181__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list77179_$_iter__77180(cljs.core.rest(s__77181__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list77179);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list77191 = (function sablono$core$ordered_list77191(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4529__auto__ = (function sablono$core$ordered_list77191_$_iter__77193(s__77194){
return (new cljs.core.LazySeq(null,(function (){
var s__77194__$1 = s__77194;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__77194__$1);
if(temp__5753__auto__){
var s__77194__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__77194__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__77194__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__77196 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__77195 = (0);
while(true){
if((i__77195 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__77195);
cljs.core.chunk_append(b__77196,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__77747 = (i__77195 + (1));
i__77195 = G__77747;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__77196),sablono$core$ordered_list77191_$_iter__77193(cljs.core.chunk_rest(s__77194__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__77196),null);
}
} else {
var x = cljs.core.first(s__77194__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list77191_$_iter__77193(cljs.core.rest(s__77194__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list77191);
/**
 * Create an image element.
 */
sablono.core.image77208 = (function sablono$core$image77208(var_args){
var G__77213 = arguments.length;
switch (G__77213) {
case 1:
return sablono.core.image77208.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image77208.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image77208.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image77208.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image77208.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image77208);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__77221_SHARP_,p2__77222_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__77221_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__77222_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__77223_SHARP_,p2__77224_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__77223_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__77224_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__77238 = arguments.length;
switch (G__77238) {
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
sablono.core.color_field77245 = (function sablono$core$color_field77245(var_args){
var G__77247 = arguments.length;
switch (G__77247) {
case 1:
return sablono.core.color_field77245.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field77245.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field77245.cljs$core$IFn$_invoke$arity$1 = (function (name__77073__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__77073__auto__);
}));

(sablono.core.color_field77245.cljs$core$IFn$_invoke$arity$2 = (function (name__77073__auto__,value__77074__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__77073__auto__,value__77074__auto__);
}));

(sablono.core.color_field77245.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field77245);

/**
 * Creates a date input field.
 */
sablono.core.date_field77249 = (function sablono$core$date_field77249(var_args){
var G__77255 = arguments.length;
switch (G__77255) {
case 1:
return sablono.core.date_field77249.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field77249.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field77249.cljs$core$IFn$_invoke$arity$1 = (function (name__77073__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__77073__auto__);
}));

(sablono.core.date_field77249.cljs$core$IFn$_invoke$arity$2 = (function (name__77073__auto__,value__77074__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__77073__auto__,value__77074__auto__);
}));

(sablono.core.date_field77249.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field77249);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field77263 = (function sablono$core$datetime_field77263(var_args){
var G__77269 = arguments.length;
switch (G__77269) {
case 1:
return sablono.core.datetime_field77263.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field77263.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field77263.cljs$core$IFn$_invoke$arity$1 = (function (name__77073__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__77073__auto__);
}));

(sablono.core.datetime_field77263.cljs$core$IFn$_invoke$arity$2 = (function (name__77073__auto__,value__77074__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__77073__auto__,value__77074__auto__);
}));

(sablono.core.datetime_field77263.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field77263);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field77287 = (function sablono$core$datetime_local_field77287(var_args){
var G__77291 = arguments.length;
switch (G__77291) {
case 1:
return sablono.core.datetime_local_field77287.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field77287.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field77287.cljs$core$IFn$_invoke$arity$1 = (function (name__77073__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__77073__auto__);
}));

(sablono.core.datetime_local_field77287.cljs$core$IFn$_invoke$arity$2 = (function (name__77073__auto__,value__77074__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__77073__auto__,value__77074__auto__);
}));

(sablono.core.datetime_local_field77287.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field77287);

/**
 * Creates a email input field.
 */
sablono.core.email_field77300 = (function sablono$core$email_field77300(var_args){
var G__77305 = arguments.length;
switch (G__77305) {
case 1:
return sablono.core.email_field77300.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field77300.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field77300.cljs$core$IFn$_invoke$arity$1 = (function (name__77073__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__77073__auto__);
}));

(sablono.core.email_field77300.cljs$core$IFn$_invoke$arity$2 = (function (name__77073__auto__,value__77074__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__77073__auto__,value__77074__auto__);
}));

(sablono.core.email_field77300.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field77300);

/**
 * Creates a file input field.
 */
sablono.core.file_field77317 = (function sablono$core$file_field77317(var_args){
var G__77321 = arguments.length;
switch (G__77321) {
case 1:
return sablono.core.file_field77317.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field77317.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field77317.cljs$core$IFn$_invoke$arity$1 = (function (name__77073__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__77073__auto__);
}));

(sablono.core.file_field77317.cljs$core$IFn$_invoke$arity$2 = (function (name__77073__auto__,value__77074__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__77073__auto__,value__77074__auto__);
}));

(sablono.core.file_field77317.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field77317);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field77334 = (function sablono$core$hidden_field77334(var_args){
var G__77341 = arguments.length;
switch (G__77341) {
case 1:
return sablono.core.hidden_field77334.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field77334.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field77334.cljs$core$IFn$_invoke$arity$1 = (function (name__77073__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__77073__auto__);
}));

(sablono.core.hidden_field77334.cljs$core$IFn$_invoke$arity$2 = (function (name__77073__auto__,value__77074__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__77073__auto__,value__77074__auto__);
}));

(sablono.core.hidden_field77334.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field77334);

/**
 * Creates a month input field.
 */
sablono.core.month_field77344 = (function sablono$core$month_field77344(var_args){
var G__77346 = arguments.length;
switch (G__77346) {
case 1:
return sablono.core.month_field77344.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field77344.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field77344.cljs$core$IFn$_invoke$arity$1 = (function (name__77073__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__77073__auto__);
}));

(sablono.core.month_field77344.cljs$core$IFn$_invoke$arity$2 = (function (name__77073__auto__,value__77074__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__77073__auto__,value__77074__auto__);
}));

(sablono.core.month_field77344.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field77344);

/**
 * Creates a number input field.
 */
sablono.core.number_field77358 = (function sablono$core$number_field77358(var_args){
var G__77363 = arguments.length;
switch (G__77363) {
case 1:
return sablono.core.number_field77358.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field77358.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field77358.cljs$core$IFn$_invoke$arity$1 = (function (name__77073__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__77073__auto__);
}));

(sablono.core.number_field77358.cljs$core$IFn$_invoke$arity$2 = (function (name__77073__auto__,value__77074__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__77073__auto__,value__77074__auto__);
}));

(sablono.core.number_field77358.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field77358);

/**
 * Creates a password input field.
 */
sablono.core.password_field77374 = (function sablono$core$password_field77374(var_args){
var G__77376 = arguments.length;
switch (G__77376) {
case 1:
return sablono.core.password_field77374.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field77374.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field77374.cljs$core$IFn$_invoke$arity$1 = (function (name__77073__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__77073__auto__);
}));

(sablono.core.password_field77374.cljs$core$IFn$_invoke$arity$2 = (function (name__77073__auto__,value__77074__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__77073__auto__,value__77074__auto__);
}));

(sablono.core.password_field77374.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field77374);

/**
 * Creates a range input field.
 */
sablono.core.range_field77384 = (function sablono$core$range_field77384(var_args){
var G__77389 = arguments.length;
switch (G__77389) {
case 1:
return sablono.core.range_field77384.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field77384.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field77384.cljs$core$IFn$_invoke$arity$1 = (function (name__77073__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__77073__auto__);
}));

(sablono.core.range_field77384.cljs$core$IFn$_invoke$arity$2 = (function (name__77073__auto__,value__77074__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__77073__auto__,value__77074__auto__);
}));

(sablono.core.range_field77384.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field77384);

/**
 * Creates a search input field.
 */
sablono.core.search_field77405 = (function sablono$core$search_field77405(var_args){
var G__77415 = arguments.length;
switch (G__77415) {
case 1:
return sablono.core.search_field77405.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field77405.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field77405.cljs$core$IFn$_invoke$arity$1 = (function (name__77073__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__77073__auto__);
}));

(sablono.core.search_field77405.cljs$core$IFn$_invoke$arity$2 = (function (name__77073__auto__,value__77074__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__77073__auto__,value__77074__auto__);
}));

(sablono.core.search_field77405.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field77405);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field77427 = (function sablono$core$tel_field77427(var_args){
var G__77432 = arguments.length;
switch (G__77432) {
case 1:
return sablono.core.tel_field77427.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field77427.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field77427.cljs$core$IFn$_invoke$arity$1 = (function (name__77073__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__77073__auto__);
}));

(sablono.core.tel_field77427.cljs$core$IFn$_invoke$arity$2 = (function (name__77073__auto__,value__77074__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__77073__auto__,value__77074__auto__);
}));

(sablono.core.tel_field77427.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field77427);

/**
 * Creates a text input field.
 */
sablono.core.text_field77444 = (function sablono$core$text_field77444(var_args){
var G__77450 = arguments.length;
switch (G__77450) {
case 1:
return sablono.core.text_field77444.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field77444.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field77444.cljs$core$IFn$_invoke$arity$1 = (function (name__77073__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__77073__auto__);
}));

(sablono.core.text_field77444.cljs$core$IFn$_invoke$arity$2 = (function (name__77073__auto__,value__77074__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__77073__auto__,value__77074__auto__);
}));

(sablono.core.text_field77444.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field77444);

/**
 * Creates a time input field.
 */
sablono.core.time_field77464 = (function sablono$core$time_field77464(var_args){
var G__77470 = arguments.length;
switch (G__77470) {
case 1:
return sablono.core.time_field77464.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field77464.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field77464.cljs$core$IFn$_invoke$arity$1 = (function (name__77073__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__77073__auto__);
}));

(sablono.core.time_field77464.cljs$core$IFn$_invoke$arity$2 = (function (name__77073__auto__,value__77074__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__77073__auto__,value__77074__auto__);
}));

(sablono.core.time_field77464.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field77464);

/**
 * Creates a url input field.
 */
sablono.core.url_field77482 = (function sablono$core$url_field77482(var_args){
var G__77489 = arguments.length;
switch (G__77489) {
case 1:
return sablono.core.url_field77482.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field77482.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field77482.cljs$core$IFn$_invoke$arity$1 = (function (name__77073__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__77073__auto__);
}));

(sablono.core.url_field77482.cljs$core$IFn$_invoke$arity$2 = (function (name__77073__auto__,value__77074__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__77073__auto__,value__77074__auto__);
}));

(sablono.core.url_field77482.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field77482);

/**
 * Creates a week input field.
 */
sablono.core.week_field77504 = (function sablono$core$week_field77504(var_args){
var G__77516 = arguments.length;
switch (G__77516) {
case 1:
return sablono.core.week_field77504.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field77504.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field77504.cljs$core$IFn$_invoke$arity$1 = (function (name__77073__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__77073__auto__);
}));

(sablono.core.week_field77504.cljs$core$IFn$_invoke$arity$2 = (function (name__77073__auto__,value__77074__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__77073__auto__,value__77074__auto__);
}));

(sablono.core.week_field77504.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field77504);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box77531 = (function sablono$core$check_box77531(var_args){
var G__77537 = arguments.length;
switch (G__77537) {
case 1:
return sablono.core.check_box77531.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box77531.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box77531.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box77531.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box77531.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box77531.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box77531.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box77531);
/**
 * Creates a radio button.
 */
sablono.core.radio_button77549 = (function sablono$core$radio_button77549(var_args){
var G__77556 = arguments.length;
switch (G__77556) {
case 1:
return sablono.core.radio_button77549.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button77549.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button77549.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button77549.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button77549.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button77549.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button77549.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button77549);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options77570 = (function sablono$core$select_options77570(coll){
var iter__4529__auto__ = (function sablono$core$select_options77570_$_iter__77573(s__77574){
return (new cljs.core.LazySeq(null,(function (){
var s__77574__$1 = s__77574;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__77574__$1);
if(temp__5753__auto__){
var s__77574__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__77574__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__77574__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__77576 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__77575 = (0);
while(true){
if((i__77575 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__77575);
cljs.core.chunk_append(b__77576,((cljs.core.sequential_QMARK_(x))?(function (){var vec__77587 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77587,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77587,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77587,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options77570.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options77570.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options77570.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__77889 = (i__77575 + (1));
i__77575 = G__77889;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__77576),sablono$core$select_options77570_$_iter__77573(cljs.core.chunk_rest(s__77574__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__77576),null);
}
} else {
var x = cljs.core.first(s__77574__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__77594 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77594,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77594,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77594,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options77570.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options77570.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options77570.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options77570_$_iter__77573(cljs.core.rest(s__77574__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options77570);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down77601 = (function sablono$core$drop_down77601(var_args){
var G__77609 = arguments.length;
switch (G__77609) {
case 2:
return sablono.core.drop_down77601.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down77601.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down77601.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down77601.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down77601.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),sablono.core.select_options(options,selected)], null);
}));

(sablono.core.drop_down77601.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down77601);
/**
 * Creates a text area element.
 */
sablono.core.text_area77614 = (function sablono$core$text_area77614(var_args){
var G__77619 = arguments.length;
switch (G__77619) {
case 1:
return sablono.core.text_area77614.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area77614.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area77614.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area77614.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area77614.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area77614);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label77626 = (function sablono$core$label77626(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label77626);
/**
 * Creates a submit button.
 */
sablono.core.submit_button77629 = (function sablono$core$submit_button77629(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button77629);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button77633 = (function sablono$core$reset_button77633(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button77633);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to77636 = (function sablono$core$form_to77636(var_args){
var args__4742__auto__ = [];
var len__4736__auto___77923 = arguments.length;
var i__4737__auto___77924 = (0);
while(true){
if((i__4737__auto___77924 < len__4736__auto___77923)){
args__4742__auto__.push((arguments[i__4737__auto___77924]));

var G__77926 = (i__4737__auto___77924 + (1));
i__4737__auto___77924 = G__77926;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to77636.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.form_to77636.cljs$core$IFn$_invoke$arity$variadic = (function (p__77644,body){
var vec__77645 = p__77644;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77645,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77645,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to77636.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to77636.cljs$lang$applyTo = (function (seq77639){
var G__77640 = cljs.core.first(seq77639);
var seq77639__$1 = cljs.core.next(seq77639);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77640,seq77639__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to77636);

//# sourceMappingURL=sablono.core.js.map
