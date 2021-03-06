goog.provide('org.browjure.vega.base');
var module$node_modules$vega_lite$build$vega_lite=shadow.js.require("module$node_modules$vega_lite$build$vega_lite", {});
var module$node_modules$vega_embed$build$vega_embed=shadow.js.require("module$node_modules$vega_embed$build$vega_embed", {});
org.browjure.vega.base.window_resolve = (function org$browjure$vega$base$window_resolve(symbol){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__80811_SHARP_,p2__80812_SHARP_){
return (p1__80811_SHARP_[p2__80812_SHARP_]);
}),window,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(cljs.core.namespace(symbol),"-","_"),"."),clojure.string.replace(cljs.core.name(symbol),"-","_")));
});
org.browjure.vega.base.dataset_component = (function org$browjure$vega$base$dataset_component(p__80817){
var map__80818 = p__80817;
var map__80818__$1 = (((((!((map__80818 == null))))?(((((map__80818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80818):map__80818);
var data__GT_vega_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80818__$1,new cljs.core.Keyword("vega","data->vega-spec","vega/data->vega-spec",-155039939));
var dependencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80818__$1,new cljs.core.Keyword("dataset","dependencies","dataset/dependencies",2019679717));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80818__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var data__GT_vega_spec__$1 = org.browjure.state.compile((data__GT_vega_spec["rep"]),new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(org.browjure.base.registry)));
var data = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (c){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__80821){
var vec__80822 = p__80821;
var dep_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80822,(0),null);
var dep_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80822,(1),null);
return (function (){var fexpr__80825 = org.browjure.vega.base.window_resolve(new cljs.core.Symbol("org.browjure.state","get-or-create-subject","org.browjure.state/get-or-create-subject",-573862634,null));
return (fexpr__80825.cljs$core$IFn$_invoke$arity$2 ? fexpr__80825.cljs$core$IFn$_invoke$arity$2(dep_path,null) : fexpr__80825.call(null,dep_path,null));
})().subscribe((function (r){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.assoc,dep_name,r);

return module$node_modules$vega_embed$build$vega_embed.default(c,cljs.core.clj__GT_js((function (){var G__80826 = cljs.core.deref(data);
return (data__GT_vega_spec__$1.cljs$core$IFn$_invoke$arity$1 ? data__GT_vega_spec__$1.cljs$core$IFn$_invoke$arity$1(G__80826) : data__GT_vega_spec__$1.call(null,G__80826));
})()));
}));
}),dependencies));
})], null)], null);
});
org.browjure.vega.base.embed_component = (function org$browjure$vega$base$embed_component(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80953 = arguments.length;
var i__4737__auto___80955 = (0);
while(true){
if((i__4737__auto___80955 < len__4736__auto___80953)){
args__4742__auto__.push((arguments[i__4737__auto___80955]));

var G__80956 = (i__4737__auto___80955 + (1));
i__4737__auto___80955 = G__80956;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return org.browjure.vega.base.embed_component.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(org.browjure.vega.base.embed_component.cljs$core$IFn$_invoke$arity$variadic = (function (specs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4529__auto__ = (function org$browjure$vega$base$iter__80852(s__80853){
return (new cljs.core.LazySeq(null,(function (){
var s__80853__$1 = s__80853;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__80853__$1);
if(temp__5753__auto__){
var s__80853__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__80853__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__80853__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__80855 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__80854 = (0);
while(true){
if((i__80854 < size__4528__auto__)){
var spec = cljs.core._nth(c__4527__auto__,i__80854);
cljs.core.chunk_append(b__80855,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),((function (i__80854,spec,c__4527__auto__,size__4528__auto__,b__80855,s__80853__$2,temp__5753__auto__){
return (function (p1__80827_SHARP_){
return module$node_modules$vega_embed$build$vega_embed.default(p1__80827_SHARP_,cljs.core.clj__GT_js(spec));
});})(i__80854,spec,c__4527__auto__,size__4528__auto__,b__80855,s__80853__$2,temp__5753__auto__))
], null)], null));

var G__80965 = (i__80854 + (1));
i__80854 = G__80965;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80855),org$browjure$vega$base$iter__80852(cljs.core.chunk_rest(s__80853__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80855),null);
}
} else {
var spec = cljs.core.first(s__80853__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),((function (spec,s__80853__$2,temp__5753__auto__){
return (function (p1__80827_SHARP_){
return module$node_modules$vega_embed$build$vega_embed.default(p1__80827_SHARP_,cljs.core.clj__GT_js(spec));
});})(spec,s__80853__$2,temp__5753__auto__))
], null)], null),org$browjure$vega$base$iter__80852(cljs.core.rest(s__80853__$2)));
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
(org.browjure.vega.base.embed_component.cljs$lang$applyTo = (function (seq80831){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80831));
}));

org.browjure.vega.base.create_viz_node = (function org$browjure$vega$base$create_viz_node(){
var node = document.createElement("div");
node.setAttribute("id","vega-viz");

return document.querySelector("body").appendChild(node);
});
org.browjure.vega.base.handler = (function org$browjure$vega$base$handler(p__80899){
var map__80901 = p__80899;
var map__80901__$1 = (((((!((map__80901 == null))))?(((((map__80901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80901):map__80901);
var command = map__80901__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80901__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80901__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80901__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"register-plugin","register-plugin",1705269136))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(org.browjure.base.registry,cljs.core.update,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"vega-embed","vega-embed",-424822024,null),module$node_modules$vega_embed$build$vega_embed.default], null)], 0));
} else {
}

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
