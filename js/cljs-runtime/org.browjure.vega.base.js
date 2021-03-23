goog.provide('org.browjure.vega.base');
var module$node_modules$vega_lite$build$vega_lite=shadow.js.require("module$node_modules$vega_lite$build$vega_lite", {});
var module$node_modules$vega_embed$build$vega_embed=shadow.js.require("module$node_modules$vega_embed$build$vega_embed", {});
org.browjure.vega.base.window_resolve = (function org$browjure$vega$base$window_resolve(symbol){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__71897_SHARP_,p2__71898_SHARP_){
return (p1__71897_SHARP_[p2__71898_SHARP_]);
}),window,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(cljs.core.namespace(symbol),"-","_"),"."),clojure.string.replace(cljs.core.name(symbol),"-","_")));
});
org.browjure.vega.base.dataset_component = (function org$browjure$vega$base$dataset_component(p__71899){
var map__71900 = p__71899;
var map__71900__$1 = (((((!((map__71900 == null))))?(((((map__71900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71900):map__71900);
var data__GT_vega_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71900__$1,new cljs.core.Keyword("vega","data->vega-spec","vega/data->vega-spec",-155039939));
var dependencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71900__$1,new cljs.core.Keyword("dataset","dependencies","dataset/dependencies",2019679717));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71900__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var data__GT_vega_spec__$1 = org.browjure.state.compile((data__GT_vega_spec["rep"]));
var data = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (c){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__71902){
var vec__71903 = p__71902;
var dep_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71903,(0),null);
var dep_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71903,(1),null);
return (function (){var fexpr__71906 = org.browjure.vega.base.window_resolve(new cljs.core.Symbol("org.browjure.state","get-or-create-subject","org.browjure.state/get-or-create-subject",-573862634,null));
return (fexpr__71906.cljs$core$IFn$_invoke$arity$2 ? fexpr__71906.cljs$core$IFn$_invoke$arity$2(dep_path,null) : fexpr__71906.call(null,dep_path,null));
})().subscribe((function (r){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.assoc,dep_name,r);

return module$node_modules$vega_embed$build$vega_embed.default(c,cljs.core.clj__GT_js((function (){var G__71907 = cljs.core.deref(data);
return (data__GT_vega_spec__$1.cljs$core$IFn$_invoke$arity$1 ? data__GT_vega_spec__$1.cljs$core$IFn$_invoke$arity$1(G__71907) : data__GT_vega_spec__$1.call(null,G__71907));
})()));
}));
}),dependencies));
})], null)], null);
});
org.browjure.vega.base.embed_component = (function org$browjure$vega$base$embed_component(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71917 = arguments.length;
var i__4737__auto___71918 = (0);
while(true){
if((i__4737__auto___71918 < len__4736__auto___71917)){
args__4742__auto__.push((arguments[i__4737__auto___71918]));

var G__71919 = (i__4737__auto___71918 + (1));
i__4737__auto___71918 = G__71919;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return org.browjure.vega.base.embed_component.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(org.browjure.vega.base.embed_component.cljs$core$IFn$_invoke$arity$variadic = (function (specs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4529__auto__ = (function org$browjure$vega$base$iter__71910(s__71911){
return (new cljs.core.LazySeq(null,(function (){
var s__71911__$1 = s__71911;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__71911__$1);
if(temp__5753__auto__){
var s__71911__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__71911__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__71911__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__71913 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__71912 = (0);
while(true){
if((i__71912 < size__4528__auto__)){
var spec = cljs.core._nth(c__4527__auto__,i__71912);
cljs.core.chunk_append(b__71913,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),((function (i__71912,spec,c__4527__auto__,size__4528__auto__,b__71913,s__71911__$2,temp__5753__auto__){
return (function (p1__71908_SHARP_){
return module$node_modules$vega_embed$build$vega_embed.default(p1__71908_SHARP_,cljs.core.clj__GT_js(spec));
});})(i__71912,spec,c__4527__auto__,size__4528__auto__,b__71913,s__71911__$2,temp__5753__auto__))
], null)], null));

var G__71920 = (i__71912 + (1));
i__71912 = G__71920;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__71913),org$browjure$vega$base$iter__71910(cljs.core.chunk_rest(s__71911__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__71913),null);
}
} else {
var spec = cljs.core.first(s__71911__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),((function (spec,s__71911__$2,temp__5753__auto__){
return (function (p1__71908_SHARP_){
return module$node_modules$vega_embed$build$vega_embed.default(p1__71908_SHARP_,cljs.core.clj__GT_js(spec));
});})(spec,s__71911__$2,temp__5753__auto__))
], null)], null),org$browjure$vega$base$iter__71910(cljs.core.rest(s__71911__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(specs);
})()], null);
}));

(org.browjure.vega.base.embed_component.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(org.browjure.vega.base.embed_component.cljs$lang$applyTo = (function (seq71909){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71909));
}));

org.browjure.vega.base.create_viz_node = (function org$browjure$vega$base$create_viz_node(){
var node = document.createElement("div");
node.setAttribute("id","vega-viz");

return document.querySelector("body").appendChild(node);
});
org.browjure.vega.base.handler = (function org$browjure$vega$base$handler(p__71914){
var map__71915 = p__71914;
var map__71915__$1 = (((((!((map__71915 == null))))?(((((map__71915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71915):map__71915);
var command = map__71915__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71915__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71915__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71915__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"visualize","visualize",-44099815))){
console.log("vega base handler",command);

if(cljs.core.truth_(document.getElementById("#vega-viz"))){
return module$node_modules$vega_embed$build$vega_embed.default("#vega-viz",cljs.core.clj__GT_js(payload));
} else {
org.browjure.vega.base.create_viz_node();

return module$node_modules$vega_embed$build$vega_embed.default("#vega-viz",cljs.core.clj__GT_js(payload));
}
} else {
return null;
}
});

//# sourceMappingURL=org.browjure.vega.base.js.map
