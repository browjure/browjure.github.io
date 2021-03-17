goog.provide('org.browjure.state');
var module$node_modules$rxjs$dist$cjs$index=shadow.js.require("module$node_modules$rxjs$dist$cjs$index", {});
var module$node_modules$rxjs$dist$cjs$operators$index=shadow.js.require("module$node_modules$rxjs$dist$cjs$operators$index", {});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
org.browjure.state.registry = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
org.browjure.state.combined_values = (function org$browjure$state$combined_values(ident){
var dataset = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(org.browjure.state.registry),ident);
var controls = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(org.browjure.state.registry),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ident,new cljs.core.Keyword("dataset","controls","dataset/controls",-1981558636)));
var keyz = cljs.core.keys(controls);
var valz = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"subject","subject",-1411880451),cljs.core.vals(controls));
var deps = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__83664){
var vec__83665 = p__83664;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83665,(0),null);
var vec__83668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83665,(1),null);
var dataset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83668,(0),null);
var attribute = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83668,(1),null);
var dep_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dataset","id","dataset/id",1129473468),dataset__$1], null),(cljs.core.truth_(attribute)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dataset","controls","dataset/controls",-1981558636),attribute], null):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subject","subject",-1411880451)], null)], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(org.browjure.state.registry),dep_path)], null);
}),new cljs.core.Keyword("dataset","dependencies","dataset/dependencies",2019679717).cljs$core$IFn$_invoke$arity$1(dataset)));
return module$node_modules$rxjs$dist$cjs$index.combineLatest(cljs.core.to_array(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(valz,cljs.core.vals(deps)))).pipe(module$node_modules$rxjs$dist$cjs$operators$index.map((function (vals){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(keyz,cljs.core.keys(deps)),vals));
})));
});
org.browjure.state.init_leaf = (function org$browjure$state$init_leaf(path,init_val){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(org.browjure.state.registry,cljs.core.assoc_in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"subject","subject",-1411880451)),(new module$node_modules$rxjs$dist$cjs$index.BehaviorSubject(init_val)));

return console.log("register",cljs.core.deref(org.browjure.state.registry));
});
org.browjure.state.get_or_create_subject = (function org$browjure$state$get_or_create_subject(path,init_value){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(org.browjure.state.registry),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"subject","subject",-1411880451))))){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(org.browjure.state.registry),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"subject","subject",-1411880451)));
} else {
org.browjure.state.init_leaf(path,init_value);

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(org.browjure.state.registry),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"subject","subject",-1411880451)));
}
});
org.browjure.state.use_path_sub = (function org$browjure$state$use_path_sub(path,init_value){
var subject = org.browjure.state.get_or_create_subject(path,init_value);
var vec__83676 = module$node_modules$react$index.useState(init_value);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83676,(0),null);
var set_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83676,(1),null);
module$node_modules$react$index.useEffect((function (){
subject.subscribe(set_state);

return (function (){
return null;
});
}),[init_value]);

return state;
});
org.browjure.state.set_path_value = (function org$browjure$state$set_path_value(path,value){
return org.browjure.state.get_or_create_subject(path,value).next(value);
});
org.browjure.state.use_combined_sub = (function org$browjure$state$use_combined_sub(p__83684){
var map__83685 = p__83684;
var map__83685__$1 = (((((!((map__83685 == null))))?(((((map__83685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83685):map__83685);
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83685__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
var reduce_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83685__$1,new cljs.core.Keyword(null,"reduce-fn","reduce-fn",1170414925));
var init_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83685__$1,new cljs.core.Keyword(null,"init-value","init-value",-374892331));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83685__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var value = org.browjure.state.use_path_sub(path,init_value);
var dep_subjects = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__83687){
var vec__83688 = p__83687;
var dep_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83688,(0),null);
var dep_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83688,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_name,org.browjure.state.get_or_create_subject(dep_path,null)], null);
}),deps));
var latest_combinations = module$node_modules$rxjs$dist$cjs$index.combineLatest(cljs.core.to_array(cljs.core.vals(dep_subjects))).pipe(module$node_modules$rxjs$dist$cjs$operators$index.map((function (new_vals){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.keys(deps),new_vals));
})));
module$node_modules$react$index.useEffect((function (){
var sub = latest_combinations.subscribe((function (combined_values){
console.log("combined values",combined_values);

return org.browjure.state.set_path_value(path,(reduce_fn.cljs$core$IFn$_invoke$arity$1 ? reduce_fn.cljs$core$IFn$_invoke$arity$1(combined_values) : reduce_fn.call(null,combined_values)));
}));
return (function (){
return sub.unsubscribe();
});
}),[(1)]);

return value;
});
org.browjure.state.window_resolve = (function org$browjure$state$window_resolve(symbol){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__83691_SHARP_,p2__83692_SHARP_){
return (p1__83691_SHARP_[p2__83692_SHARP_]);
}),window,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(cljs.core.namespace(symbol),"-","_"),"."),clojure.string.replace(cljs.core.name(symbol),"-","_")));
});
org.browjure.state.compile = (function org$browjure$state$compile(form){
return sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),console.log,new cljs.core.Symbol("js","document","js/document",311343521,null),document,new cljs.core.Symbol("js","window","js/window",-1929916804,null),window,new cljs.core.Symbol(null,"set-path-value","set-path-value",424354368,null),org.browjure.state.set_path_value,new cljs.core.Symbol(null,"use-combined-sub","use-combined-sub",764757410,null),org.browjure.state.use_combined_sub,new cljs.core.Symbol(null,"use-path-sub","use-path-sub",-792752499,null),org.browjure.state.use_path_sub,new cljs.core.Symbol("hx.react","f","hx.react/f",-1228046660,null),hx.react.f,new cljs.core.Symbol(null,"$","$",-1580747756,null),helix.core.$], null),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"all","all",892129742)], null)], null));
});

//# sourceMappingURL=org.browjure.state.js.map