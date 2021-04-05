goog.provide('org.browjure.codemirror.base');
var module$node_modules$codemirror$lib$codemirror=shadow.js.require("module$node_modules$codemirror$lib$codemirror", {});
var module$node_modules$codemirror$mode$clojure$clojure=shadow.js.require("module$node_modules$codemirror$mode$clojure$clojure", {});
org.browjure.codemirror.base.handler = (function org$browjure$codemirror$base$handler(p__130203){
var map__130204 = p__130203;
var map__130204__$1 = (((((!((map__130204 == null))))?(((((map__130204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__130204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__130204):map__130204);
var command = map__130204__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__130204__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__130204__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__130204__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"register-plugin","register-plugin",1705269136))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(org.browjure.base.registry,cljs.core.update,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"fromTextArea","fromTextArea",-844830009,null),module$node_modules$codemirror$lib$codemirror.fromTextArea], null)], 0));
} else {
}

return console.log("codemirror handler command: ",command);
});

//# sourceMappingURL=org.browjure.codemirror.base.js.map
