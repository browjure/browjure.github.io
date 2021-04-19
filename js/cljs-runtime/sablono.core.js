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
var G__77225__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__76632 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__76633 = cljs.core.seq(vec__76632);
var first__76634 = cljs.core.first(seq__76633);
var seq__76633__$1 = cljs.core.next(seq__76633);
var tag = first__76634;
var body = seq__76633__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__77225 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__77232__i = 0, G__77232__a = new Array(arguments.length -  0);
while (G__77232__i < G__77232__a.length) {G__77232__a[G__77232__i] = arguments[G__77232__i + 0]; ++G__77232__i;}
  args = new cljs.core.IndexedSeq(G__77232__a,0,null);
} 
return G__77225__delegate.call(this,args);};
G__77225.cljs$lang$maxFixedArity = 0;
G__77225.cljs$lang$applyTo = (function (arglist__77233){
var args = cljs.core.seq(arglist__77233);
return G__77225__delegate(args);
});
G__77225.cljs$core$IFn$_invoke$arity$variadic = G__77225__delegate;
return G__77225;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4529__auto__ = (function sablono$core$update_arglists_$_iter__76636(s__76637){
return (new cljs.core.LazySeq(null,(function (){
var s__76637__$1 = s__76637;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__76637__$1);
if(temp__5753__auto__){
var s__76637__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__76637__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__76637__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__76639 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__76638 = (0);
while(true){
if((i__76638 < size__4528__auto__)){
var args = cljs.core._nth(c__4527__auto__,i__76638);
cljs.core.chunk_append(b__76639,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__77237 = (i__76638 + (1));
i__76638 = G__77237;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__76639),sablono$core$update_arglists_$_iter__76636(cljs.core.chunk_rest(s__76637__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__76639),null);
}
} else {
var args = cljs.core.first(s__76637__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__76636(cljs.core.rest(s__76637__$2)));
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
var len__4736__auto___77244 = arguments.length;
var i__4737__auto___77245 = (0);
while(true){
if((i__4737__auto___77245 < len__4736__auto___77244)){
args__4742__auto__.push((arguments[i__4737__auto___77245]));

var G__77247 = (i__4737__auto___77245 + (1));
i__4737__auto___77245 = G__77247;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4529__auto__ = (function sablono$core$iter__76655(s__76656){
return (new cljs.core.LazySeq(null,(function (){
var s__76656__$1 = s__76656;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__76656__$1);
if(temp__5753__auto__){
var s__76656__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__76656__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__76656__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__76658 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__76657 = (0);
while(true){
if((i__76657 < size__4528__auto__)){
var style = cljs.core._nth(c__4527__auto__,i__76657);
cljs.core.chunk_append(b__76658,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__77258 = (i__76657 + (1));
i__76657 = G__77258;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__76658),sablono$core$iter__76655(cljs.core.chunk_rest(s__76656__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__76658),null);
}
} else {
var style = cljs.core.first(s__76656__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__76655(cljs.core.rest(s__76656__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq76649){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq76649));
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
sablono.core.link_to76675 = (function sablono$core$link_to76675(var_args){
var args__4742__auto__ = [];
var len__4736__auto___77268 = arguments.length;
var i__4737__auto___77270 = (0);
while(true){
if((i__4737__auto___77270 < len__4736__auto___77268)){
args__4742__auto__.push((arguments[i__4737__auto___77270]));

var G__77272 = (i__4737__auto___77270 + (1));
i__4737__auto___77270 = G__77272;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to76675.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.link_to76675.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to76675.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to76675.cljs$lang$applyTo = (function (seq76676){
var G__76677 = cljs.core.first(seq76676);
var seq76676__$1 = cljs.core.next(seq76676);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__76677,seq76676__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to76675);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to76682 = (function sablono$core$mail_to76682(var_args){
var args__4742__auto__ = [];
var len__4736__auto___77284 = arguments.length;
var i__4737__auto___77285 = (0);
while(true){
if((i__4737__auto___77285 < len__4736__auto___77284)){
args__4742__auto__.push((arguments[i__4737__auto___77285]));

var G__77287 = (i__4737__auto___77285 + (1));
i__4737__auto___77285 = G__77287;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to76682.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.mail_to76682.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__76689){
var vec__76690 = p__76689;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76690,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4126__auto__ = content;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to76682.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to76682.cljs$lang$applyTo = (function (seq76683){
var G__76684 = cljs.core.first(seq76683);
var seq76683__$1 = cljs.core.next(seq76683);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__76684,seq76683__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to76682);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list76696 = (function sablono$core$unordered_list76696(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function sablono$core$unordered_list76696_$_iter__76697(s__76698){
return (new cljs.core.LazySeq(null,(function (){
var s__76698__$1 = s__76698;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__76698__$1);
if(temp__5753__auto__){
var s__76698__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__76698__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__76698__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__76700 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__76699 = (0);
while(true){
if((i__76699 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__76699);
cljs.core.chunk_append(b__76700,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__77302 = (i__76699 + (1));
i__76699 = G__77302;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__76700),sablono$core$unordered_list76696_$_iter__76697(cljs.core.chunk_rest(s__76698__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__76700),null);
}
} else {
var x = cljs.core.first(s__76698__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list76696_$_iter__76697(cljs.core.rest(s__76698__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list76696);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list76715 = (function sablono$core$ordered_list76715(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4529__auto__ = (function sablono$core$ordered_list76715_$_iter__76718(s__76719){
return (new cljs.core.LazySeq(null,(function (){
var s__76719__$1 = s__76719;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__76719__$1);
if(temp__5753__auto__){
var s__76719__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__76719__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__76719__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__76721 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__76720 = (0);
while(true){
if((i__76720 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__76720);
cljs.core.chunk_append(b__76721,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__77313 = (i__76720 + (1));
i__76720 = G__77313;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__76721),sablono$core$ordered_list76715_$_iter__76718(cljs.core.chunk_rest(s__76719__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__76721),null);
}
} else {
var x = cljs.core.first(s__76719__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list76715_$_iter__76718(cljs.core.rest(s__76719__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list76715);
/**
 * Create an image element.
 */
sablono.core.image76737 = (function sablono$core$image76737(var_args){
var G__76741 = arguments.length;
switch (G__76741) {
case 1:
return sablono.core.image76737.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image76737.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image76737.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image76737.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image76737.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image76737);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__76757_SHARP_,p2__76758_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__76757_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__76758_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__76762_SHARP_,p2__76763_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__76762_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__76763_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__76773 = arguments.length;
switch (G__76773) {
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
sablono.core.color_field76789 = (function sablono$core$color_field76789(var_args){
var G__76792 = arguments.length;
switch (G__76792) {
case 1:
return sablono.core.color_field76789.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field76789.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field76789.cljs$core$IFn$_invoke$arity$1 = (function (name__76605__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__76605__auto__);
}));

(sablono.core.color_field76789.cljs$core$IFn$_invoke$arity$2 = (function (name__76605__auto__,value__76606__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__76605__auto__,value__76606__auto__);
}));

(sablono.core.color_field76789.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field76789);

/**
 * Creates a date input field.
 */
sablono.core.date_field76795 = (function sablono$core$date_field76795(var_args){
var G__76803 = arguments.length;
switch (G__76803) {
case 1:
return sablono.core.date_field76795.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field76795.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field76795.cljs$core$IFn$_invoke$arity$1 = (function (name__76605__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__76605__auto__);
}));

(sablono.core.date_field76795.cljs$core$IFn$_invoke$arity$2 = (function (name__76605__auto__,value__76606__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__76605__auto__,value__76606__auto__);
}));

(sablono.core.date_field76795.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field76795);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field76815 = (function sablono$core$datetime_field76815(var_args){
var G__76819 = arguments.length;
switch (G__76819) {
case 1:
return sablono.core.datetime_field76815.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field76815.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field76815.cljs$core$IFn$_invoke$arity$1 = (function (name__76605__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__76605__auto__);
}));

(sablono.core.datetime_field76815.cljs$core$IFn$_invoke$arity$2 = (function (name__76605__auto__,value__76606__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__76605__auto__,value__76606__auto__);
}));

(sablono.core.datetime_field76815.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field76815);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field76835 = (function sablono$core$datetime_local_field76835(var_args){
var G__76842 = arguments.length;
switch (G__76842) {
case 1:
return sablono.core.datetime_local_field76835.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field76835.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field76835.cljs$core$IFn$_invoke$arity$1 = (function (name__76605__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__76605__auto__);
}));

(sablono.core.datetime_local_field76835.cljs$core$IFn$_invoke$arity$2 = (function (name__76605__auto__,value__76606__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__76605__auto__,value__76606__auto__);
}));

(sablono.core.datetime_local_field76835.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field76835);

/**
 * Creates a email input field.
 */
sablono.core.email_field76858 = (function sablono$core$email_field76858(var_args){
var G__76864 = arguments.length;
switch (G__76864) {
case 1:
return sablono.core.email_field76858.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field76858.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field76858.cljs$core$IFn$_invoke$arity$1 = (function (name__76605__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__76605__auto__);
}));

(sablono.core.email_field76858.cljs$core$IFn$_invoke$arity$2 = (function (name__76605__auto__,value__76606__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__76605__auto__,value__76606__auto__);
}));

(sablono.core.email_field76858.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field76858);

/**
 * Creates a file input field.
 */
sablono.core.file_field76877 = (function sablono$core$file_field76877(var_args){
var G__76891 = arguments.length;
switch (G__76891) {
case 1:
return sablono.core.file_field76877.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field76877.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field76877.cljs$core$IFn$_invoke$arity$1 = (function (name__76605__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__76605__auto__);
}));

(sablono.core.file_field76877.cljs$core$IFn$_invoke$arity$2 = (function (name__76605__auto__,value__76606__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__76605__auto__,value__76606__auto__);
}));

(sablono.core.file_field76877.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field76877);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field76895 = (function sablono$core$hidden_field76895(var_args){
var G__76898 = arguments.length;
switch (G__76898) {
case 1:
return sablono.core.hidden_field76895.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field76895.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field76895.cljs$core$IFn$_invoke$arity$1 = (function (name__76605__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__76605__auto__);
}));

(sablono.core.hidden_field76895.cljs$core$IFn$_invoke$arity$2 = (function (name__76605__auto__,value__76606__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__76605__auto__,value__76606__auto__);
}));

(sablono.core.hidden_field76895.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field76895);

/**
 * Creates a month input field.
 */
sablono.core.month_field76907 = (function sablono$core$month_field76907(var_args){
var G__76912 = arguments.length;
switch (G__76912) {
case 1:
return sablono.core.month_field76907.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field76907.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field76907.cljs$core$IFn$_invoke$arity$1 = (function (name__76605__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__76605__auto__);
}));

(sablono.core.month_field76907.cljs$core$IFn$_invoke$arity$2 = (function (name__76605__auto__,value__76606__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__76605__auto__,value__76606__auto__);
}));

(sablono.core.month_field76907.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field76907);

/**
 * Creates a number input field.
 */
sablono.core.number_field76920 = (function sablono$core$number_field76920(var_args){
var G__76923 = arguments.length;
switch (G__76923) {
case 1:
return sablono.core.number_field76920.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field76920.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field76920.cljs$core$IFn$_invoke$arity$1 = (function (name__76605__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__76605__auto__);
}));

(sablono.core.number_field76920.cljs$core$IFn$_invoke$arity$2 = (function (name__76605__auto__,value__76606__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__76605__auto__,value__76606__auto__);
}));

(sablono.core.number_field76920.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field76920);

/**
 * Creates a password input field.
 */
sablono.core.password_field76933 = (function sablono$core$password_field76933(var_args){
var G__76940 = arguments.length;
switch (G__76940) {
case 1:
return sablono.core.password_field76933.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field76933.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field76933.cljs$core$IFn$_invoke$arity$1 = (function (name__76605__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__76605__auto__);
}));

(sablono.core.password_field76933.cljs$core$IFn$_invoke$arity$2 = (function (name__76605__auto__,value__76606__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__76605__auto__,value__76606__auto__);
}));

(sablono.core.password_field76933.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field76933);

/**
 * Creates a range input field.
 */
sablono.core.range_field76951 = (function sablono$core$range_field76951(var_args){
var G__76956 = arguments.length;
switch (G__76956) {
case 1:
return sablono.core.range_field76951.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field76951.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field76951.cljs$core$IFn$_invoke$arity$1 = (function (name__76605__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__76605__auto__);
}));

(sablono.core.range_field76951.cljs$core$IFn$_invoke$arity$2 = (function (name__76605__auto__,value__76606__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__76605__auto__,value__76606__auto__);
}));

(sablono.core.range_field76951.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field76951);

/**
 * Creates a search input field.
 */
sablono.core.search_field76975 = (function sablono$core$search_field76975(var_args){
var G__76978 = arguments.length;
switch (G__76978) {
case 1:
return sablono.core.search_field76975.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field76975.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field76975.cljs$core$IFn$_invoke$arity$1 = (function (name__76605__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__76605__auto__);
}));

(sablono.core.search_field76975.cljs$core$IFn$_invoke$arity$2 = (function (name__76605__auto__,value__76606__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__76605__auto__,value__76606__auto__);
}));

(sablono.core.search_field76975.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field76975);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field76989 = (function sablono$core$tel_field76989(var_args){
var G__76992 = arguments.length;
switch (G__76992) {
case 1:
return sablono.core.tel_field76989.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field76989.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field76989.cljs$core$IFn$_invoke$arity$1 = (function (name__76605__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__76605__auto__);
}));

(sablono.core.tel_field76989.cljs$core$IFn$_invoke$arity$2 = (function (name__76605__auto__,value__76606__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__76605__auto__,value__76606__auto__);
}));

(sablono.core.tel_field76989.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field76989);

/**
 * Creates a text input field.
 */
sablono.core.text_field77002 = (function sablono$core$text_field77002(var_args){
var G__77008 = arguments.length;
switch (G__77008) {
case 1:
return sablono.core.text_field77002.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field77002.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field77002.cljs$core$IFn$_invoke$arity$1 = (function (name__76605__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__76605__auto__);
}));

(sablono.core.text_field77002.cljs$core$IFn$_invoke$arity$2 = (function (name__76605__auto__,value__76606__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__76605__auto__,value__76606__auto__);
}));

(sablono.core.text_field77002.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field77002);

/**
 * Creates a time input field.
 */
sablono.core.time_field77017 = (function sablono$core$time_field77017(var_args){
var G__77022 = arguments.length;
switch (G__77022) {
case 1:
return sablono.core.time_field77017.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field77017.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field77017.cljs$core$IFn$_invoke$arity$1 = (function (name__76605__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__76605__auto__);
}));

(sablono.core.time_field77017.cljs$core$IFn$_invoke$arity$2 = (function (name__76605__auto__,value__76606__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__76605__auto__,value__76606__auto__);
}));

(sablono.core.time_field77017.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field77017);

/**
 * Creates a url input field.
 */
sablono.core.url_field77031 = (function sablono$core$url_field77031(var_args){
var G__77036 = arguments.length;
switch (G__77036) {
case 1:
return sablono.core.url_field77031.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field77031.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field77031.cljs$core$IFn$_invoke$arity$1 = (function (name__76605__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__76605__auto__);
}));

(sablono.core.url_field77031.cljs$core$IFn$_invoke$arity$2 = (function (name__76605__auto__,value__76606__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__76605__auto__,value__76606__auto__);
}));

(sablono.core.url_field77031.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field77031);

/**
 * Creates a week input field.
 */
sablono.core.week_field77042 = (function sablono$core$week_field77042(var_args){
var G__77045 = arguments.length;
switch (G__77045) {
case 1:
return sablono.core.week_field77042.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field77042.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field77042.cljs$core$IFn$_invoke$arity$1 = (function (name__76605__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__76605__auto__);
}));

(sablono.core.week_field77042.cljs$core$IFn$_invoke$arity$2 = (function (name__76605__auto__,value__76606__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__76605__auto__,value__76606__auto__);
}));

(sablono.core.week_field77042.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field77042);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box77053 = (function sablono$core$check_box77053(var_args){
var G__77055 = arguments.length;
switch (G__77055) {
case 1:
return sablono.core.check_box77053.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box77053.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box77053.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box77053.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box77053.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box77053.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box77053.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box77053);
/**
 * Creates a radio button.
 */
sablono.core.radio_button77060 = (function sablono$core$radio_button77060(var_args){
var G__77069 = arguments.length;
switch (G__77069) {
case 1:
return sablono.core.radio_button77060.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button77060.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button77060.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button77060.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button77060.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button77060.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button77060.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button77060);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options77092 = (function sablono$core$select_options77092(coll){
var iter__4529__auto__ = (function sablono$core$select_options77092_$_iter__77098(s__77099){
return (new cljs.core.LazySeq(null,(function (){
var s__77099__$1 = s__77099;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__77099__$1);
if(temp__5753__auto__){
var s__77099__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__77099__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__77099__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__77101 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__77100 = (0);
while(true){
if((i__77100 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__77100);
cljs.core.chunk_append(b__77101,((cljs.core.sequential_QMARK_(x))?(function (){var vec__77116 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77116,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77116,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77116,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options77092.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options77092.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options77092.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__77493 = (i__77100 + (1));
i__77100 = G__77493;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__77101),sablono$core$select_options77092_$_iter__77098(cljs.core.chunk_rest(s__77099__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__77101),null);
}
} else {
var x = cljs.core.first(s__77099__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__77128 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77128,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77128,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77128,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options77092.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options77092.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options77092.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options77092_$_iter__77098(cljs.core.rest(s__77099__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options77092);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down77137 = (function sablono$core$drop_down77137(var_args){
var G__77143 = arguments.length;
switch (G__77143) {
case 2:
return sablono.core.drop_down77137.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down77137.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down77137.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down77137.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down77137.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),sablono.core.select_options(options,selected)], null);
}));

(sablono.core.drop_down77137.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down77137);
/**
 * Creates a text area element.
 */
sablono.core.text_area77151 = (function sablono$core$text_area77151(var_args){
var G__77156 = arguments.length;
switch (G__77156) {
case 1:
return sablono.core.text_area77151.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area77151.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area77151.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area77151.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area77151.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area77151);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label77163 = (function sablono$core$label77163(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label77163);
/**
 * Creates a submit button.
 */
sablono.core.submit_button77167 = (function sablono$core$submit_button77167(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button77167);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button77170 = (function sablono$core$reset_button77170(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button77170);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to77173 = (function sablono$core$form_to77173(var_args){
var args__4742__auto__ = [];
var len__4736__auto___77697 = arguments.length;
var i__4737__auto___77698 = (0);
while(true){
if((i__4737__auto___77698 < len__4736__auto___77697)){
args__4742__auto__.push((arguments[i__4737__auto___77698]));

var G__77700 = (i__4737__auto___77698 + (1));
i__4737__auto___77698 = G__77700;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to77173.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.form_to77173.cljs$core$IFn$_invoke$arity$variadic = (function (p__77186,body){
var vec__77187 = p__77186;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77187,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77187,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to77173.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to77173.cljs$lang$applyTo = (function (seq77178){
var G__77179 = cljs.core.first(seq77178);
var seq77178__$1 = cljs.core.next(seq77178);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77179,seq77178__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to77173);

//# sourceMappingURL=sablono.core.js.map
