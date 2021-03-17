goog.provide('org.browjure.material_ui.base');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
var module$node_modules$$material_ui$core$esm$styles$index=shadow.js.require("module$node_modules$$material_ui$core$esm$styles$index", {});
var module$node_modules$$material_ui$core$styles$createMuiTheme=shadow.js.require("module$node_modules$$material_ui$core$styles$createMuiTheme", {});
org.browjure.material_ui.base.handler = (function org$browjure$material_ui$base$handler(lib_event){
return console.log("material base app handler event: ",lib_event);
});
org.browjure.material_ui.base.make_component = (function org$browjure$material_ui$base$make_component(material_component_fn){
return (function (){
return module$node_modules$react$index.createElement(sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.walk.postwalk((function (form){
if(((cljs.core.vector_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(form),new cljs.core.Keyword(null,"style","style",-496642736))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(form),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"clj->js","clj->js",-1880244676,null),null,(1),null)),(new cljs.core.List(null,cljs.core.second(form),null,(1),null)))))], null);
} else {
return form;
}
}),material_component_fn)], 0)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),console.log,new cljs.core.Symbol("js","document","js/document",311343521,null),document,new cljs.core.Symbol(null,"key->class","key->class",-2043546459,null),org.browjure.material_ui.core.key__GT_class,new cljs.core.Symbol(null,"set-path-value","set-path-value",424354368,null),org.browjure.state.set_path_value,new cljs.core.Symbol(null,"use-combined-sub","use-combined-sub",764757410,null),org.browjure.state.use_combined_sub,new cljs.core.Symbol(null,"use-path-sub","use-path-sub",-792752499,null),org.browjure.state.use_path_sub,new cljs.core.Symbol(null,"$","$",-1580747756,null),helix.core.$], null),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"all","all",892129742)], null)], null)));
});
});

org.browjure.material_ui.base.material_root = (function (){var G__83700 = (function org$browjure$material_ui$base$material_root(props__69390__auto__,maybe_ref__69391__auto__){
var vec__83701 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__69390__auto__),maybe_ref__69391__auto__], null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83701,(0),null);

var use_path_sub = org.browjure.state.window_resolve(new cljs.core.Symbol("org.browjure.state","use-path-sub","org.browjure.state/use-path-sub",2030957290,null));
var dep_values = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__83705){
var vec__83706 = p__83705;
var dep_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83706,(0),null);
var dep_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83706,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_name,(use_path_sub.cljs$core$IFn$_invoke$arity$1 ? use_path_sub.cljs$core$IFn$_invoke$arity$1(dep_path) : use_path_sub.call(null,dep_path))], null);
}),new cljs.core.Keyword("dataset","dependencies","dataset/dependencies",2019679717).cljs$core$IFn$_invoke$arity$1(props)));
var map__83704 = props;
var map__83704__$1 = (((((!((map__83704 == null))))?(((((map__83704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83704):map__83704);
var class_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83704__$1,new cljs.core.Keyword(null,"class-key","class-key",71822850));
var theme = module$node_modules$$material_ui$core$styles$createMuiTheme.default(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"typography","typography",-399568138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"useNextVariants","useNextVariants",-1997726210),true], null)], null)));
return helix.core.get_react().createElement(module$node_modules$$material_ui$core$esm$styles$index.ThemeProvider,(function (){var obj84179 = ({"theme":theme,"key":"deck","children":new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props)});
return obj84179;
})());
});
if(goog.DEBUG === true){
var G__84180 = G__83700;
goog.object.set(G__84180,"displayName","org.browjure.material-ui.base/material-root");

return G__84180;
} else {
return G__83700;
}
})();




org.browjure.material_ui.base.material_ui_component = (function (){var G__84183 = (function org$browjure$material_ui$base$material_ui_component(props__69390__auto__,maybe_ref__69391__auto__){
var vec__84184 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__69390__auto__),maybe_ref__69391__auto__], null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84184,(0),null);

var use_path_sub = org.browjure.state.window_resolve(new cljs.core.Symbol("org.browjure.state","use-path-sub","org.browjure.state/use-path-sub",2030957290,null));
var dep_values = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__84188){
var vec__84189 = p__84188;
var dep_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84189,(0),null);
var dep_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84189,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_name,(use_path_sub.cljs$core$IFn$_invoke$arity$1 ? use_path_sub.cljs$core$IFn$_invoke$arity$1(dep_path) : use_path_sub.call(null,dep_path))], null);
}),new cljs.core.Keyword("dataset","dependencies","dataset/dependencies",2019679717).cljs$core$IFn$_invoke$arity$1(props)));
var compiled_props = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__84192){
var vec__84193 = p__84192;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84193,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84193,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(cognitect.transit.tagged_value_QMARK_(v))?org.browjure.state.compile((v["rep"])):cljs.core.clj__GT_js(v))], null);
}),props));
var map__84187 = props;
var map__84187__$1 = (((((!((map__84187 == null))))?(((((map__84187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__84187):map__84187);
var class_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84187__$1,new cljs.core.Keyword(null,"class-key","class-key",71822850));
return helix.core.get_react().createElement(cljs.core.get.cljs$core$IFn$_invoke$arity$2(org.browjure.material_ui.core.key__GT_class,class_key),helix.impl.props.merge_obj(({}),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(compiled_props)));
});
if(goog.DEBUG === true){
var G__84199 = G__84183;
goog.object.set(G__84199,"displayName","org.browjure.material-ui.base/material-ui-component");

return G__84199;
} else {
return G__84183;
}
})();




//# sourceMappingURL=org.browjure.material_ui.base.js.map
