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
var G__126558__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__126062 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__126063 = cljs.core.seq(vec__126062);
var first__126064 = cljs.core.first(seq__126063);
var seq__126063__$1 = cljs.core.next(seq__126063);
var tag = first__126064;
var body = seq__126063__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__126558 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__126566__i = 0, G__126566__a = new Array(arguments.length -  0);
while (G__126566__i < G__126566__a.length) {G__126566__a[G__126566__i] = arguments[G__126566__i + 0]; ++G__126566__i;}
  args = new cljs.core.IndexedSeq(G__126566__a,0,null);
} 
return G__126558__delegate.call(this,args);};
G__126558.cljs$lang$maxFixedArity = 0;
G__126558.cljs$lang$applyTo = (function (arglist__126567){
var args = cljs.core.seq(arglist__126567);
return G__126558__delegate(args);
});
G__126558.cljs$core$IFn$_invoke$arity$variadic = G__126558__delegate;
return G__126558;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4529__auto__ = (function sablono$core$update_arglists_$_iter__126077(s__126078){
return (new cljs.core.LazySeq(null,(function (){
var s__126078__$1 = s__126078;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__126078__$1);
if(temp__5753__auto__){
var s__126078__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__126078__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__126078__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__126080 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__126079 = (0);
while(true){
if((i__126079 < size__4528__auto__)){
var args = cljs.core._nth(c__4527__auto__,i__126079);
cljs.core.chunk_append(b__126080,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__126569 = (i__126079 + (1));
i__126079 = G__126569;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__126080),sablono$core$update_arglists_$_iter__126077(cljs.core.chunk_rest(s__126078__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__126080),null);
}
} else {
var args = cljs.core.first(s__126078__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__126077(cljs.core.rest(s__126078__$2)));
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
var len__4736__auto___126574 = arguments.length;
var i__4737__auto___126575 = (0);
while(true){
if((i__4737__auto___126575 < len__4736__auto___126574)){
args__4742__auto__.push((arguments[i__4737__auto___126575]));

var G__126578 = (i__4737__auto___126575 + (1));
i__4737__auto___126575 = G__126578;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4529__auto__ = (function sablono$core$iter__126102(s__126103){
return (new cljs.core.LazySeq(null,(function (){
var s__126103__$1 = s__126103;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__126103__$1);
if(temp__5753__auto__){
var s__126103__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__126103__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__126103__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__126105 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__126104 = (0);
while(true){
if((i__126104 < size__4528__auto__)){
var style = cljs.core._nth(c__4527__auto__,i__126104);
cljs.core.chunk_append(b__126105,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__126776 = (i__126104 + (1));
i__126104 = G__126776;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__126105),sablono$core$iter__126102(cljs.core.chunk_rest(s__126103__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__126105),null);
}
} else {
var style = cljs.core.first(s__126103__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__126102(cljs.core.rest(s__126103__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq126094){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq126094));
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
sablono.core.link_to126121 = (function sablono$core$link_to126121(var_args){
var args__4742__auto__ = [];
var len__4736__auto___126796 = arguments.length;
var i__4737__auto___126797 = (0);
while(true){
if((i__4737__auto___126797 < len__4736__auto___126796)){
args__4742__auto__.push((arguments[i__4737__auto___126797]));

var G__126798 = (i__4737__auto___126797 + (1));
i__4737__auto___126797 = G__126798;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to126121.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.link_to126121.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to126121.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to126121.cljs$lang$applyTo = (function (seq126123){
var G__126124 = cljs.core.first(seq126123);
var seq126123__$1 = cljs.core.next(seq126123);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__126124,seq126123__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to126121);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to126135 = (function sablono$core$mail_to126135(var_args){
var args__4742__auto__ = [];
var len__4736__auto___126813 = arguments.length;
var i__4737__auto___126814 = (0);
while(true){
if((i__4737__auto___126814 < len__4736__auto___126813)){
args__4742__auto__.push((arguments[i__4737__auto___126814]));

var G__126817 = (i__4737__auto___126814 + (1));
i__4737__auto___126814 = G__126817;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to126135.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.mail_to126135.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__126142){
var vec__126143 = p__126142;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126143,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4126__auto__ = content;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to126135.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to126135.cljs$lang$applyTo = (function (seq126136){
var G__126137 = cljs.core.first(seq126136);
var seq126136__$1 = cljs.core.next(seq126136);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__126137,seq126136__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to126135);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list126150 = (function sablono$core$unordered_list126150(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function sablono$core$unordered_list126150_$_iter__126152(s__126153){
return (new cljs.core.LazySeq(null,(function (){
var s__126153__$1 = s__126153;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__126153__$1);
if(temp__5753__auto__){
var s__126153__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__126153__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__126153__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__126155 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__126154 = (0);
while(true){
if((i__126154 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__126154);
cljs.core.chunk_append(b__126155,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__126838 = (i__126154 + (1));
i__126154 = G__126838;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__126155),sablono$core$unordered_list126150_$_iter__126152(cljs.core.chunk_rest(s__126153__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__126155),null);
}
} else {
var x = cljs.core.first(s__126153__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list126150_$_iter__126152(cljs.core.rest(s__126153__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list126150);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list126166 = (function sablono$core$ordered_list126166(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4529__auto__ = (function sablono$core$ordered_list126166_$_iter__126169(s__126170){
return (new cljs.core.LazySeq(null,(function (){
var s__126170__$1 = s__126170;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__126170__$1);
if(temp__5753__auto__){
var s__126170__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__126170__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__126170__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__126172 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__126171 = (0);
while(true){
if((i__126171 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__126171);
cljs.core.chunk_append(b__126172,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__126857 = (i__126171 + (1));
i__126171 = G__126857;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__126172),sablono$core$ordered_list126166_$_iter__126169(cljs.core.chunk_rest(s__126170__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__126172),null);
}
} else {
var x = cljs.core.first(s__126170__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list126166_$_iter__126169(cljs.core.rest(s__126170__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list126166);
/**
 * Create an image element.
 */
sablono.core.image126179 = (function sablono$core$image126179(var_args){
var G__126183 = arguments.length;
switch (G__126183) {
case 1:
return sablono.core.image126179.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image126179.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image126179.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image126179.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image126179.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image126179);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__126205_SHARP_,p2__126206_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__126205_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__126206_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__126210_SHARP_,p2__126211_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__126210_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__126211_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__126220 = arguments.length;
switch (G__126220) {
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
sablono.core.color_field126231 = (function sablono$core$color_field126231(var_args){
var G__126234 = arguments.length;
switch (G__126234) {
case 1:
return sablono.core.color_field126231.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field126231.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field126231.cljs$core$IFn$_invoke$arity$1 = (function (name__66816__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__66816__auto__);
}));

(sablono.core.color_field126231.cljs$core$IFn$_invoke$arity$2 = (function (name__66816__auto__,value__66817__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__66816__auto__,value__66817__auto__);
}));

(sablono.core.color_field126231.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field126231);

/**
 * Creates a date input field.
 */
sablono.core.date_field126240 = (function sablono$core$date_field126240(var_args){
var G__126244 = arguments.length;
switch (G__126244) {
case 1:
return sablono.core.date_field126240.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field126240.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field126240.cljs$core$IFn$_invoke$arity$1 = (function (name__66816__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__66816__auto__);
}));

(sablono.core.date_field126240.cljs$core$IFn$_invoke$arity$2 = (function (name__66816__auto__,value__66817__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__66816__auto__,value__66817__auto__);
}));

(sablono.core.date_field126240.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field126240);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field126252 = (function sablono$core$datetime_field126252(var_args){
var G__126255 = arguments.length;
switch (G__126255) {
case 1:
return sablono.core.datetime_field126252.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field126252.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field126252.cljs$core$IFn$_invoke$arity$1 = (function (name__66816__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__66816__auto__);
}));

(sablono.core.datetime_field126252.cljs$core$IFn$_invoke$arity$2 = (function (name__66816__auto__,value__66817__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__66816__auto__,value__66817__auto__);
}));

(sablono.core.datetime_field126252.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field126252);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field126261 = (function sablono$core$datetime_local_field126261(var_args){
var G__126267 = arguments.length;
switch (G__126267) {
case 1:
return sablono.core.datetime_local_field126261.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field126261.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field126261.cljs$core$IFn$_invoke$arity$1 = (function (name__66816__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__66816__auto__);
}));

(sablono.core.datetime_local_field126261.cljs$core$IFn$_invoke$arity$2 = (function (name__66816__auto__,value__66817__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__66816__auto__,value__66817__auto__);
}));

(sablono.core.datetime_local_field126261.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field126261);

/**
 * Creates a email input field.
 */
sablono.core.email_field126274 = (function sablono$core$email_field126274(var_args){
var G__126279 = arguments.length;
switch (G__126279) {
case 1:
return sablono.core.email_field126274.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field126274.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field126274.cljs$core$IFn$_invoke$arity$1 = (function (name__66816__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__66816__auto__);
}));

(sablono.core.email_field126274.cljs$core$IFn$_invoke$arity$2 = (function (name__66816__auto__,value__66817__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__66816__auto__,value__66817__auto__);
}));

(sablono.core.email_field126274.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field126274);

/**
 * Creates a file input field.
 */
sablono.core.file_field126293 = (function sablono$core$file_field126293(var_args){
var G__126296 = arguments.length;
switch (G__126296) {
case 1:
return sablono.core.file_field126293.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field126293.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field126293.cljs$core$IFn$_invoke$arity$1 = (function (name__66816__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__66816__auto__);
}));

(sablono.core.file_field126293.cljs$core$IFn$_invoke$arity$2 = (function (name__66816__auto__,value__66817__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__66816__auto__,value__66817__auto__);
}));

(sablono.core.file_field126293.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field126293);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field126300 = (function sablono$core$hidden_field126300(var_args){
var G__126307 = arguments.length;
switch (G__126307) {
case 1:
return sablono.core.hidden_field126300.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field126300.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field126300.cljs$core$IFn$_invoke$arity$1 = (function (name__66816__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__66816__auto__);
}));

(sablono.core.hidden_field126300.cljs$core$IFn$_invoke$arity$2 = (function (name__66816__auto__,value__66817__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__66816__auto__,value__66817__auto__);
}));

(sablono.core.hidden_field126300.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field126300);

/**
 * Creates a month input field.
 */
sablono.core.month_field126313 = (function sablono$core$month_field126313(var_args){
var G__126320 = arguments.length;
switch (G__126320) {
case 1:
return sablono.core.month_field126313.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field126313.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field126313.cljs$core$IFn$_invoke$arity$1 = (function (name__66816__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__66816__auto__);
}));

(sablono.core.month_field126313.cljs$core$IFn$_invoke$arity$2 = (function (name__66816__auto__,value__66817__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__66816__auto__,value__66817__auto__);
}));

(sablono.core.month_field126313.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field126313);

/**
 * Creates a number input field.
 */
sablono.core.number_field126327 = (function sablono$core$number_field126327(var_args){
var G__126331 = arguments.length;
switch (G__126331) {
case 1:
return sablono.core.number_field126327.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field126327.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field126327.cljs$core$IFn$_invoke$arity$1 = (function (name__66816__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__66816__auto__);
}));

(sablono.core.number_field126327.cljs$core$IFn$_invoke$arity$2 = (function (name__66816__auto__,value__66817__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__66816__auto__,value__66817__auto__);
}));

(sablono.core.number_field126327.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field126327);

/**
 * Creates a password input field.
 */
sablono.core.password_field126336 = (function sablono$core$password_field126336(var_args){
var G__126341 = arguments.length;
switch (G__126341) {
case 1:
return sablono.core.password_field126336.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field126336.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field126336.cljs$core$IFn$_invoke$arity$1 = (function (name__66816__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__66816__auto__);
}));

(sablono.core.password_field126336.cljs$core$IFn$_invoke$arity$2 = (function (name__66816__auto__,value__66817__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__66816__auto__,value__66817__auto__);
}));

(sablono.core.password_field126336.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field126336);

/**
 * Creates a range input field.
 */
sablono.core.range_field126343 = (function sablono$core$range_field126343(var_args){
var G__126346 = arguments.length;
switch (G__126346) {
case 1:
return sablono.core.range_field126343.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field126343.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field126343.cljs$core$IFn$_invoke$arity$1 = (function (name__66816__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__66816__auto__);
}));

(sablono.core.range_field126343.cljs$core$IFn$_invoke$arity$2 = (function (name__66816__auto__,value__66817__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__66816__auto__,value__66817__auto__);
}));

(sablono.core.range_field126343.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field126343);

/**
 * Creates a search input field.
 */
sablono.core.search_field126359 = (function sablono$core$search_field126359(var_args){
var G__126366 = arguments.length;
switch (G__126366) {
case 1:
return sablono.core.search_field126359.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field126359.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field126359.cljs$core$IFn$_invoke$arity$1 = (function (name__66816__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__66816__auto__);
}));

(sablono.core.search_field126359.cljs$core$IFn$_invoke$arity$2 = (function (name__66816__auto__,value__66817__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__66816__auto__,value__66817__auto__);
}));

(sablono.core.search_field126359.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field126359);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field126372 = (function sablono$core$tel_field126372(var_args){
var G__126377 = arguments.length;
switch (G__126377) {
case 1:
return sablono.core.tel_field126372.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field126372.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field126372.cljs$core$IFn$_invoke$arity$1 = (function (name__66816__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__66816__auto__);
}));

(sablono.core.tel_field126372.cljs$core$IFn$_invoke$arity$2 = (function (name__66816__auto__,value__66817__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__66816__auto__,value__66817__auto__);
}));

(sablono.core.tel_field126372.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field126372);

/**
 * Creates a text input field.
 */
sablono.core.text_field126384 = (function sablono$core$text_field126384(var_args){
var G__126388 = arguments.length;
switch (G__126388) {
case 1:
return sablono.core.text_field126384.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field126384.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field126384.cljs$core$IFn$_invoke$arity$1 = (function (name__66816__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__66816__auto__);
}));

(sablono.core.text_field126384.cljs$core$IFn$_invoke$arity$2 = (function (name__66816__auto__,value__66817__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__66816__auto__,value__66817__auto__);
}));

(sablono.core.text_field126384.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field126384);

/**
 * Creates a time input field.
 */
sablono.core.time_field126394 = (function sablono$core$time_field126394(var_args){
var G__126396 = arguments.length;
switch (G__126396) {
case 1:
return sablono.core.time_field126394.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field126394.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field126394.cljs$core$IFn$_invoke$arity$1 = (function (name__66816__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__66816__auto__);
}));

(sablono.core.time_field126394.cljs$core$IFn$_invoke$arity$2 = (function (name__66816__auto__,value__66817__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__66816__auto__,value__66817__auto__);
}));

(sablono.core.time_field126394.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field126394);

/**
 * Creates a url input field.
 */
sablono.core.url_field126402 = (function sablono$core$url_field126402(var_args){
var G__126409 = arguments.length;
switch (G__126409) {
case 1:
return sablono.core.url_field126402.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field126402.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field126402.cljs$core$IFn$_invoke$arity$1 = (function (name__66816__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__66816__auto__);
}));

(sablono.core.url_field126402.cljs$core$IFn$_invoke$arity$2 = (function (name__66816__auto__,value__66817__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__66816__auto__,value__66817__auto__);
}));

(sablono.core.url_field126402.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field126402);

/**
 * Creates a week input field.
 */
sablono.core.week_field126424 = (function sablono$core$week_field126424(var_args){
var G__126427 = arguments.length;
switch (G__126427) {
case 1:
return sablono.core.week_field126424.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field126424.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field126424.cljs$core$IFn$_invoke$arity$1 = (function (name__66816__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__66816__auto__);
}));

(sablono.core.week_field126424.cljs$core$IFn$_invoke$arity$2 = (function (name__66816__auto__,value__66817__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__66816__auto__,value__66817__auto__);
}));

(sablono.core.week_field126424.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field126424);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box126438 = (function sablono$core$check_box126438(var_args){
var G__126446 = arguments.length;
switch (G__126446) {
case 1:
return sablono.core.check_box126438.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box126438.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box126438.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box126438.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box126438.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box126438.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box126438.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box126438);
/**
 * Creates a radio button.
 */
sablono.core.radio_button126456 = (function sablono$core$radio_button126456(var_args){
var G__126465 = arguments.length;
switch (G__126465) {
case 1:
return sablono.core.radio_button126456.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button126456.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button126456.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button126456.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button126456.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button126456.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button126456.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button126456);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options126473 = (function sablono$core$select_options126473(coll){
var iter__4529__auto__ = (function sablono$core$select_options126473_$_iter__126476(s__126477){
return (new cljs.core.LazySeq(null,(function (){
var s__126477__$1 = s__126477;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__126477__$1);
if(temp__5753__auto__){
var s__126477__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__126477__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__126477__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__126479 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__126478 = (0);
while(true){
if((i__126478 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__126478);
cljs.core.chunk_append(b__126479,((cljs.core.sequential_QMARK_(x))?(function (){var vec__126486 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126486,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126486,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126486,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options126473.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options126473.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options126473.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__127118 = (i__126478 + (1));
i__126478 = G__127118;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__126479),sablono$core$select_options126473_$_iter__126476(cljs.core.chunk_rest(s__126477__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__126479),null);
}
} else {
var x = cljs.core.first(s__126477__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__126496 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126496,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126496,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126496,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options126473.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options126473.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options126473.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options126473_$_iter__126476(cljs.core.rest(s__126477__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options126473);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down126506 = (function sablono$core$drop_down126506(var_args){
var G__126511 = arguments.length;
switch (G__126511) {
case 2:
return sablono.core.drop_down126506.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down126506.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down126506.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down126506.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down126506.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),sablono.core.select_options(options,selected)], null);
}));

(sablono.core.drop_down126506.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down126506);
/**
 * Creates a text area element.
 */
sablono.core.text_area126518 = (function sablono$core$text_area126518(var_args){
var G__126525 = arguments.length;
switch (G__126525) {
case 1:
return sablono.core.text_area126518.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area126518.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area126518.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area126518.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area126518.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area126518);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label126533 = (function sablono$core$label126533(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label126533);
/**
 * Creates a submit button.
 */
sablono.core.submit_button126535 = (function sablono$core$submit_button126535(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button126535);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button126536 = (function sablono$core$reset_button126536(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button126536);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to126538 = (function sablono$core$form_to126538(var_args){
var args__4742__auto__ = [];
var len__4736__auto___127173 = arguments.length;
var i__4737__auto___127174 = (0);
while(true){
if((i__4737__auto___127174 < len__4736__auto___127173)){
args__4742__auto__.push((arguments[i__4737__auto___127174]));

var G__127177 = (i__4737__auto___127174 + (1));
i__4737__auto___127174 = G__127177;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to126538.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.form_to126538.cljs$core$IFn$_invoke$arity$variadic = (function (p__126543,body){
var vec__126544 = p__126543;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126544,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126544,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to126538.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to126538.cljs$lang$applyTo = (function (seq126539){
var G__126540 = cljs.core.first(seq126539);
var seq126539__$1 = cljs.core.next(seq126539);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__126540,seq126539__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to126538);

//# sourceMappingURL=sablono.core.js.map
