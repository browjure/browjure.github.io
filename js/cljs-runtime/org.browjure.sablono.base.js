goog.provide('org.browjure.sablono.base');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
org.browjure.sablono.base.make_component = (function org$browjure$sablono$base$make_component(material_component_fn){
console.log("make-comp",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([material_component_fn], 0)));

console.log(sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([material_component_fn], 0)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),console.log,new cljs.core.Symbol("js","document","js/document",311343521,null),document,new cljs.core.Symbol(null,"set-path-value","set-path-value",424354368,null),org.browjure.state.set_path_value,new cljs.core.Symbol(null,"use-combined-sub","use-combined-sub",764757410,null),org.browjure.state.use_combined_sub,new cljs.core.Symbol(null,"use-path-sub","use-path-sub",-792752499,null),org.browjure.state.use_path_sub,new cljs.core.Symbol(null,"$","$",-1580747756,null),helix.core.$], null),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"all","all",892129742)], null)], null)));

return hx.react.f(sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([material_component_fn], 0)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),console.log,new cljs.core.Symbol("js","document","js/document",311343521,null),document,new cljs.core.Symbol(null,"set-path-value","set-path-value",424354368,null),org.browjure.state.set_path_value,new cljs.core.Symbol(null,"use-combined-sub","use-combined-sub",764757410,null),org.browjure.state.use_combined_sub,new cljs.core.Symbol(null,"use-path-sub","use-path-sub",-792752499,null),org.browjure.state.use_path_sub,new cljs.core.Symbol(null,"$","$",-1580747756,null),helix.core.$], null),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"all","all",892129742)], null)], null)));
});
org.browjure.sablono.base.handler = (function org$browjure$sablono$base$handler(p__83782){
var map__83783 = p__83782;
var map__83783__$1 = (((((!((map__83783 == null))))?(((((map__83783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83783):map__83783);
var command = map__83783__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83783__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83783__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83783__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
console.log("sablono base handler",command);

return module$node_modules$react_dom$index.render(sablono.interpreter.interpret(payload),document.getElementById("app"));
});

//# sourceMappingURL=org.browjure.sablono.base.js.map
