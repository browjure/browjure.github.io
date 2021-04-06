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
var G__77726__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__77241 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__77242 = cljs.core.seq(vec__77241);
var first__77243 = cljs.core.first(seq__77242);
var seq__77242__$1 = cljs.core.next(seq__77242);
var tag = first__77243;
var body = seq__77242__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__77726 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__77732__i = 0, G__77732__a = new Array(arguments.length -  0);
while (G__77732__i < G__77732__a.length) {G__77732__a[G__77732__i] = arguments[G__77732__i + 0]; ++G__77732__i;}
  args = new cljs.core.IndexedSeq(G__77732__a,0,null);
} 
return G__77726__delegate.call(this,args);};
G__77726.cljs$lang$maxFixedArity = 0;
G__77726.cljs$lang$applyTo = (function (arglist__77733){
var args = cljs.core.seq(arglist__77733);
return G__77726__delegate(args);
});
G__77726.cljs$core$IFn$_invoke$arity$variadic = G__77726__delegate;
return G__77726;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4529__auto__ = (function sablono$core$update_arglists_$_iter__77248(s__77249){
return (new cljs.core.LazySeq(null,(function (){
var s__77249__$1 = s__77249;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__77249__$1);
if(temp__5753__auto__){
var s__77249__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__77249__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__77249__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__77251 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__77250 = (0);
while(true){
if((i__77250 < size__4528__auto__)){
var args = cljs.core._nth(c__4527__auto__,i__77250);
cljs.core.chunk_append(b__77251,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__77736 = (i__77250 + (1));
i__77250 = G__77736;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__77251),sablono$core$update_arglists_$_iter__77248(cljs.core.chunk_rest(s__77249__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__77251),null);
}
} else {
var args = cljs.core.first(s__77249__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__77248(cljs.core.rest(s__77249__$2)));
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
var len__4736__auto___77738 = arguments.length;
var i__4737__auto___77739 = (0);
while(true){
if((i__4737__auto___77739 < len__4736__auto___77738)){
args__4742__auto__.push((arguments[i__4737__auto___77739]));

var G__77741 = (i__4737__auto___77739 + (1));
i__4737__auto___77739 = G__77741;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4529__auto__ = (function sablono$core$iter__77279(s__77280){
return (new cljs.core.LazySeq(null,(function (){
var s__77280__$1 = s__77280;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__77280__$1);
if(temp__5753__auto__){
var s__77280__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__77280__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__77280__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__77282 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__77281 = (0);
while(true){
if((i__77281 < size__4528__auto__)){
var style = cljs.core._nth(c__4527__auto__,i__77281);
cljs.core.chunk_append(b__77282,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__77747 = (i__77281 + (1));
i__77281 = G__77747;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__77282),sablono$core$iter__77279(cljs.core.chunk_rest(s__77280__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__77282),null);
}
} else {
var style = cljs.core.first(s__77280__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__77279(cljs.core.rest(s__77280__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq77270){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq77270));
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
sablono.core.link_to77294 = (function sablono$core$link_to77294(var_args){
var args__4742__auto__ = [];
var len__4736__auto___77777 = arguments.length;
var i__4737__auto___77778 = (0);
while(true){
if((i__4737__auto___77778 < len__4736__auto___77777)){
args__4742__auto__.push((arguments[i__4737__auto___77778]));

var G__77779 = (i__4737__auto___77778 + (1));
i__4737__auto___77778 = G__77779;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to77294.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.link_to77294.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to77294.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to77294.cljs$lang$applyTo = (function (seq77295){
var G__77296 = cljs.core.first(seq77295);
var seq77295__$1 = cljs.core.next(seq77295);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77296,seq77295__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to77294);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to77307 = (function sablono$core$mail_to77307(var_args){
var args__4742__auto__ = [];
var len__4736__auto___77786 = arguments.length;
var i__4737__auto___77788 = (0);
while(true){
if((i__4737__auto___77788 < len__4736__auto___77786)){
args__4742__auto__.push((arguments[i__4737__auto___77788]));

var G__77790 = (i__4737__auto___77788 + (1));
i__4737__auto___77788 = G__77790;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to77307.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.mail_to77307.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__77310){
var vec__77311 = p__77310;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77311,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4126__auto__ = content;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to77307.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to77307.cljs$lang$applyTo = (function (seq77308){
var G__77309 = cljs.core.first(seq77308);
var seq77308__$1 = cljs.core.next(seq77308);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77309,seq77308__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to77307);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list77315 = (function sablono$core$unordered_list77315(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function sablono$core$unordered_list77315_$_iter__77317(s__77318){
return (new cljs.core.LazySeq(null,(function (){
var s__77318__$1 = s__77318;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__77318__$1);
if(temp__5753__auto__){
var s__77318__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__77318__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__77318__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__77320 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__77319 = (0);
while(true){
if((i__77319 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__77319);
cljs.core.chunk_append(b__77320,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__77805 = (i__77319 + (1));
i__77319 = G__77805;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__77320),sablono$core$unordered_list77315_$_iter__77317(cljs.core.chunk_rest(s__77318__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__77320),null);
}
} else {
var x = cljs.core.first(s__77318__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list77315_$_iter__77317(cljs.core.rest(s__77318__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list77315);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list77323 = (function sablono$core$ordered_list77323(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4529__auto__ = (function sablono$core$ordered_list77323_$_iter__77324(s__77325){
return (new cljs.core.LazySeq(null,(function (){
var s__77325__$1 = s__77325;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__77325__$1);
if(temp__5753__auto__){
var s__77325__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__77325__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__77325__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__77327 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__77326 = (0);
while(true){
if((i__77326 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__77326);
cljs.core.chunk_append(b__77327,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__77813 = (i__77326 + (1));
i__77326 = G__77813;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__77327),sablono$core$ordered_list77323_$_iter__77324(cljs.core.chunk_rest(s__77325__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__77327),null);
}
} else {
var x = cljs.core.first(s__77325__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list77323_$_iter__77324(cljs.core.rest(s__77325__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list77323);
/**
 * Create an image element.
 */
sablono.core.image77328 = (function sablono$core$image77328(var_args){
var G__77330 = arguments.length;
switch (G__77330) {
case 1:
return sablono.core.image77328.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image77328.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image77328.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image77328.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image77328.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image77328);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__77337_SHARP_,p2__77338_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__77337_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__77338_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__77340_SHARP_,p2__77341_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__77340_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__77341_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__77345 = arguments.length;
switch (G__77345) {
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
sablono.core.color_field77354 = (function sablono$core$color_field77354(var_args){
var G__77356 = arguments.length;
switch (G__77356) {
case 1:
return sablono.core.color_field77354.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field77354.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field77354.cljs$core$IFn$_invoke$arity$1 = (function (name__62298__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__62298__auto__);
}));

(sablono.core.color_field77354.cljs$core$IFn$_invoke$arity$2 = (function (name__62298__auto__,value__62299__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__62298__auto__,value__62299__auto__);
}));

(sablono.core.color_field77354.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field77354);

/**
 * Creates a date input field.
 */
sablono.core.date_field77357 = (function sablono$core$date_field77357(var_args){
var G__77359 = arguments.length;
switch (G__77359) {
case 1:
return sablono.core.date_field77357.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field77357.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field77357.cljs$core$IFn$_invoke$arity$1 = (function (name__62298__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__62298__auto__);
}));

(sablono.core.date_field77357.cljs$core$IFn$_invoke$arity$2 = (function (name__62298__auto__,value__62299__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__62298__auto__,value__62299__auto__);
}));

(sablono.core.date_field77357.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field77357);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field77360 = (function sablono$core$datetime_field77360(var_args){
var G__77364 = arguments.length;
switch (G__77364) {
case 1:
return sablono.core.datetime_field77360.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field77360.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field77360.cljs$core$IFn$_invoke$arity$1 = (function (name__62298__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__62298__auto__);
}));

(sablono.core.datetime_field77360.cljs$core$IFn$_invoke$arity$2 = (function (name__62298__auto__,value__62299__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__62298__auto__,value__62299__auto__);
}));

(sablono.core.datetime_field77360.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field77360);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field77384 = (function sablono$core$datetime_local_field77384(var_args){
var G__77393 = arguments.length;
switch (G__77393) {
case 1:
return sablono.core.datetime_local_field77384.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field77384.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field77384.cljs$core$IFn$_invoke$arity$1 = (function (name__62298__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__62298__auto__);
}));

(sablono.core.datetime_local_field77384.cljs$core$IFn$_invoke$arity$2 = (function (name__62298__auto__,value__62299__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__62298__auto__,value__62299__auto__);
}));

(sablono.core.datetime_local_field77384.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field77384);

/**
 * Creates a email input field.
 */
sablono.core.email_field77417 = (function sablono$core$email_field77417(var_args){
var G__77435 = arguments.length;
switch (G__77435) {
case 1:
return sablono.core.email_field77417.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field77417.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field77417.cljs$core$IFn$_invoke$arity$1 = (function (name__62298__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__62298__auto__);
}));

(sablono.core.email_field77417.cljs$core$IFn$_invoke$arity$2 = (function (name__62298__auto__,value__62299__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__62298__auto__,value__62299__auto__);
}));

(sablono.core.email_field77417.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field77417);

/**
 * Creates a file input field.
 */
sablono.core.file_field77445 = (function sablono$core$file_field77445(var_args){
var G__77448 = arguments.length;
switch (G__77448) {
case 1:
return sablono.core.file_field77445.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field77445.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field77445.cljs$core$IFn$_invoke$arity$1 = (function (name__62298__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__62298__auto__);
}));

(sablono.core.file_field77445.cljs$core$IFn$_invoke$arity$2 = (function (name__62298__auto__,value__62299__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__62298__auto__,value__62299__auto__);
}));

(sablono.core.file_field77445.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field77445);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field77457 = (function sablono$core$hidden_field77457(var_args){
var G__77461 = arguments.length;
switch (G__77461) {
case 1:
return sablono.core.hidden_field77457.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field77457.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field77457.cljs$core$IFn$_invoke$arity$1 = (function (name__62298__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__62298__auto__);
}));

(sablono.core.hidden_field77457.cljs$core$IFn$_invoke$arity$2 = (function (name__62298__auto__,value__62299__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__62298__auto__,value__62299__auto__);
}));

(sablono.core.hidden_field77457.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field77457);

/**
 * Creates a month input field.
 */
sablono.core.month_field77473 = (function sablono$core$month_field77473(var_args){
var G__77476 = arguments.length;
switch (G__77476) {
case 1:
return sablono.core.month_field77473.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field77473.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field77473.cljs$core$IFn$_invoke$arity$1 = (function (name__62298__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__62298__auto__);
}));

(sablono.core.month_field77473.cljs$core$IFn$_invoke$arity$2 = (function (name__62298__auto__,value__62299__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__62298__auto__,value__62299__auto__);
}));

(sablono.core.month_field77473.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field77473);

/**
 * Creates a number input field.
 */
sablono.core.number_field77482 = (function sablono$core$number_field77482(var_args){
var G__77485 = arguments.length;
switch (G__77485) {
case 1:
return sablono.core.number_field77482.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field77482.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field77482.cljs$core$IFn$_invoke$arity$1 = (function (name__62298__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__62298__auto__);
}));

(sablono.core.number_field77482.cljs$core$IFn$_invoke$arity$2 = (function (name__62298__auto__,value__62299__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__62298__auto__,value__62299__auto__);
}));

(sablono.core.number_field77482.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field77482);

/**
 * Creates a password input field.
 */
sablono.core.password_field77490 = (function sablono$core$password_field77490(var_args){
var G__77495 = arguments.length;
switch (G__77495) {
case 1:
return sablono.core.password_field77490.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field77490.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field77490.cljs$core$IFn$_invoke$arity$1 = (function (name__62298__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__62298__auto__);
}));

(sablono.core.password_field77490.cljs$core$IFn$_invoke$arity$2 = (function (name__62298__auto__,value__62299__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__62298__auto__,value__62299__auto__);
}));

(sablono.core.password_field77490.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field77490);

/**
 * Creates a range input field.
 */
sablono.core.range_field77502 = (function sablono$core$range_field77502(var_args){
var G__77505 = arguments.length;
switch (G__77505) {
case 1:
return sablono.core.range_field77502.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field77502.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field77502.cljs$core$IFn$_invoke$arity$1 = (function (name__62298__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__62298__auto__);
}));

(sablono.core.range_field77502.cljs$core$IFn$_invoke$arity$2 = (function (name__62298__auto__,value__62299__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__62298__auto__,value__62299__auto__);
}));

(sablono.core.range_field77502.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field77502);

/**
 * Creates a search input field.
 */
sablono.core.search_field77513 = (function sablono$core$search_field77513(var_args){
var G__77518 = arguments.length;
switch (G__77518) {
case 1:
return sablono.core.search_field77513.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field77513.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field77513.cljs$core$IFn$_invoke$arity$1 = (function (name__62298__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__62298__auto__);
}));

(sablono.core.search_field77513.cljs$core$IFn$_invoke$arity$2 = (function (name__62298__auto__,value__62299__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__62298__auto__,value__62299__auto__);
}));

(sablono.core.search_field77513.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field77513);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field77521 = (function sablono$core$tel_field77521(var_args){
var G__77524 = arguments.length;
switch (G__77524) {
case 1:
return sablono.core.tel_field77521.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field77521.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field77521.cljs$core$IFn$_invoke$arity$1 = (function (name__62298__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__62298__auto__);
}));

(sablono.core.tel_field77521.cljs$core$IFn$_invoke$arity$2 = (function (name__62298__auto__,value__62299__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__62298__auto__,value__62299__auto__);
}));

(sablono.core.tel_field77521.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field77521);

/**
 * Creates a text input field.
 */
sablono.core.text_field77529 = (function sablono$core$text_field77529(var_args){
var G__77532 = arguments.length;
switch (G__77532) {
case 1:
return sablono.core.text_field77529.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field77529.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field77529.cljs$core$IFn$_invoke$arity$1 = (function (name__62298__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__62298__auto__);
}));

(sablono.core.text_field77529.cljs$core$IFn$_invoke$arity$2 = (function (name__62298__auto__,value__62299__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__62298__auto__,value__62299__auto__);
}));

(sablono.core.text_field77529.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field77529);

/**
 * Creates a time input field.
 */
sablono.core.time_field77534 = (function sablono$core$time_field77534(var_args){
var G__77536 = arguments.length;
switch (G__77536) {
case 1:
return sablono.core.time_field77534.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field77534.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field77534.cljs$core$IFn$_invoke$arity$1 = (function (name__62298__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__62298__auto__);
}));

(sablono.core.time_field77534.cljs$core$IFn$_invoke$arity$2 = (function (name__62298__auto__,value__62299__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__62298__auto__,value__62299__auto__);
}));

(sablono.core.time_field77534.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field77534);

/**
 * Creates a url input field.
 */
sablono.core.url_field77541 = (function sablono$core$url_field77541(var_args){
var G__77543 = arguments.length;
switch (G__77543) {
case 1:
return sablono.core.url_field77541.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field77541.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field77541.cljs$core$IFn$_invoke$arity$1 = (function (name__62298__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__62298__auto__);
}));

(sablono.core.url_field77541.cljs$core$IFn$_invoke$arity$2 = (function (name__62298__auto__,value__62299__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__62298__auto__,value__62299__auto__);
}));

(sablono.core.url_field77541.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field77541);

/**
 * Creates a week input field.
 */
sablono.core.week_field77546 = (function sablono$core$week_field77546(var_args){
var G__77548 = arguments.length;
switch (G__77548) {
case 1:
return sablono.core.week_field77546.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field77546.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field77546.cljs$core$IFn$_invoke$arity$1 = (function (name__62298__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__62298__auto__);
}));

(sablono.core.week_field77546.cljs$core$IFn$_invoke$arity$2 = (function (name__62298__auto__,value__62299__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__62298__auto__,value__62299__auto__);
}));

(sablono.core.week_field77546.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field77546);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box77550 = (function sablono$core$check_box77550(var_args){
var G__77557 = arguments.length;
switch (G__77557) {
case 1:
return sablono.core.check_box77550.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box77550.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box77550.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box77550.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box77550.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box77550.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box77550.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box77550);
/**
 * Creates a radio button.
 */
sablono.core.radio_button77570 = (function sablono$core$radio_button77570(var_args){
var G__77597 = arguments.length;
switch (G__77597) {
case 1:
return sablono.core.radio_button77570.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button77570.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button77570.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button77570.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button77570.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button77570.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button77570.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button77570);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options77612 = (function sablono$core$select_options77612(coll){
var iter__4529__auto__ = (function sablono$core$select_options77612_$_iter__77614(s__77615){
return (new cljs.core.LazySeq(null,(function (){
var s__77615__$1 = s__77615;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__77615__$1);
if(temp__5753__auto__){
var s__77615__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__77615__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__77615__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__77617 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__77616 = (0);
while(true){
if((i__77616 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__77616);
cljs.core.chunk_append(b__77617,((cljs.core.sequential_QMARK_(x))?(function (){var vec__77620 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77620,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77620,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77620,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options77612.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options77612.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options77612.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__77961 = (i__77616 + (1));
i__77616 = G__77961;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__77617),sablono$core$select_options77612_$_iter__77614(cljs.core.chunk_rest(s__77615__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__77617),null);
}
} else {
var x = cljs.core.first(s__77615__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__77627 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77627,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77627,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77627,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options77612.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options77612.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options77612.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options77612_$_iter__77614(cljs.core.rest(s__77615__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options77612);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down77635 = (function sablono$core$drop_down77635(var_args){
var G__77642 = arguments.length;
switch (G__77642) {
case 2:
return sablono.core.drop_down77635.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down77635.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down77635.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down77635.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down77635.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),sablono.core.select_options(options,selected)], null);
}));

(sablono.core.drop_down77635.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down77635);
/**
 * Creates a text area element.
 */
sablono.core.text_area77650 = (function sablono$core$text_area77650(var_args){
var G__77654 = arguments.length;
switch (G__77654) {
case 1:
return sablono.core.text_area77650.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area77650.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area77650.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area77650.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area77650.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area77650);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label77660 = (function sablono$core$label77660(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label77660);
/**
 * Creates a submit button.
 */
sablono.core.submit_button77676 = (function sablono$core$submit_button77676(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button77676);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button77689 = (function sablono$core$reset_button77689(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button77689);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to77698 = (function sablono$core$form_to77698(var_args){
var args__4742__auto__ = [];
var len__4736__auto___77986 = arguments.length;
var i__4737__auto___77987 = (0);
while(true){
if((i__4737__auto___77987 < len__4736__auto___77986)){
args__4742__auto__.push((arguments[i__4737__auto___77987]));

var G__77989 = (i__4737__auto___77987 + (1));
i__4737__auto___77987 = G__77989;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to77698.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.form_to77698.cljs$core$IFn$_invoke$arity$variadic = (function (p__77708,body){
var vec__77709 = p__77708;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77709,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77709,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to77698.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to77698.cljs$lang$applyTo = (function (seq77699){
var G__77700 = cljs.core.first(seq77699);
var seq77699__$1 = cljs.core.next(seq77699);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77700,seq77699__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to77698);

//# sourceMappingURL=sablono.core.js.map
