goog.provide('taoensso.sente');
if(cljs.core.vector_QMARK_(taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(105),(0)], null));
} else {
taoensso.encore.assert_min_encore_version(2.105);
}
/**
 * Useful for identifying client/server mismatch
 */
taoensso.sente.sente_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(11),(0)], null);
taoensso.sente.node_target_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs");
if((typeof taoensso !== 'undefined') && (typeof taoensso.sente !== 'undefined') && (typeof taoensso.sente.debug_mode_QMARK__ !== 'undefined')){
} else {
taoensso.sente.debug_mode_QMARK__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
taoensso.sente.expected = (function taoensso$sente$expected(expected,x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expected","expected",1583670997),expected,new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x),new cljs.core.Keyword(null,"value","value",305978217),x], null)], null);
});
/**
 * Returns nil if given argument is a valid [ev-id ?ev-data] form. Otherwise
 *   returns a map of validation errors like `{:wrong-type {:expected _ :actual _}}`.
 */
taoensso.sente.validate_event = (function taoensso$sente$validate_event(x){
if((!(cljs.core.vector_QMARK_(x)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-type","wrong-type",929556915),taoensso.sente.expected(new cljs.core.Keyword(null,"vector","vector",1902966158),x)], null);
} else {
if(cljs.core.not((function (){var G__83968 = cljs.core.count(x);
var fexpr__83967 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null);
return (fexpr__83967.cljs$core$IFn$_invoke$arity$1 ? fexpr__83967.cljs$core$IFn$_invoke$arity$1(G__83968) : fexpr__83967.call(null,G__83968));
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-length","wrong-length",1367572281),taoensso.sente.expected(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),x)], null);
} else {
var vec__83970 = x;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83970,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83970,(1),null);
if((!((ev_id instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-id-type","wrong-id-type",-1213601689),taoensso.sente.expected(new cljs.core.Keyword(null,"keyword","keyword",811389747),ev_id)], null);
} else {
if(cljs.core.not(cljs.core.namespace(ev_id))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unnamespaced-id","unnamespaced-id",1976189772),taoensso.sente.expected(new cljs.core.Keyword(null,"namespaced-keyword","namespaced-keyword",131372895),ev_id)], null);
} else {
return null;

}
}

}
}
});
/**
 * Returns given argument if it is a valid [ev-id ?ev-data] form. Otherwise
 *   throws a validation exception.
 */
taoensso.sente.assert_event = (function taoensso$sente$assert_event(x){
var temp__5753__auto__ = taoensso.sente.validate_event(x);
if(cljs.core.truth_(temp__5753__auto__)){
var errs = temp__5753__auto__;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"errors","errors",-908790718),errs], null));
} else {
return null;
}
});
/**
 * Valid [ev-id ?ev-data] form?
 */
taoensso.sente.event_QMARK_ = (function taoensso$sente$event_QMARK_(x){
return (taoensso.sente.validate_event(x) == null);
});
taoensso.sente.as_event = (function taoensso$sente$as_event(x){
var temp__5751__auto__ = taoensso.sente.validate_event(x);
if(cljs.core.truth_(temp__5751__auto__)){
var errs = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-event","chsk/bad-event",-565206930),x], null);
} else {
return x;
}
});
taoensso.sente.client_event_msg_QMARK_ = (function taoensso$sente$client_event_msg_QMARK_(x){
if(cljs.core.map_QMARK_(x)){
if(taoensso.encore.ks_GT__EQ_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x)){
var map__83997 = x;
var map__83997__$1 = (((((!((map__83997 == null))))?(((((map__83997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83997):map__83997);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83997__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83997__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83997__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83997__$1,new cljs.core.Keyword(null,"event","event",301435442));
return ((taoensso.encore.chan_QMARK_(ch_recv)) && (cljs.core.ifn_QMARK_(send_fn)) && (taoensso.encore.atom_QMARK_(state)) && (taoensso.sente.event_QMARK_(event)));
} else {
return false;
}
} else {
return false;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
if(cljs.core.map_QMARK_(x)){
if(taoensso.encore.ks_GT__EQ_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),null,new cljs.core.Keyword(null,"uid","uid",-1447769400),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"send-buffers","send-buffers",-1788003787),null,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x)){
var map__84026 = x;
var map__84026__$1 = (((((!((map__84026 == null))))?(((((map__84026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__84026):map__84026);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84026__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84026__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84026__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var send_buffers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84026__$1,new cljs.core.Keyword(null,"send-buffers","send-buffers",-1788003787));
var ring_req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84026__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84026__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84026__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84026__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
return ((taoensso.encore.chan_QMARK_(ch_recv)) && (cljs.core.ifn_QMARK_(send_fn)) && (taoensso.encore.atom_QMARK_(connected_uids)) && (taoensso.encore.atom_QMARK_(send_buffers)) && (cljs.core.map_QMARK_(ring_req)) && (taoensso.encore.nblank_str_QMARK_(client_id)) && (taoensso.sente.event_QMARK_(event)) && ((((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_(_QMARK_reply_fn)))));
} else {
return false;
}
} else {
return false;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__84043){
var map__84045 = p__84043;
var map__84045__$1 = (((((!((map__84045 == null))))?(((((map__84045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__84045):map__84045);
var ev_msg = map__84045__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84045__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84045__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__84047 = taoensso.sente.as_event(event);
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84047,(0),null);
var ev__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84047,(1),null);
var valid_event = vec__84047;
var ev_msg_STAR_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null)], 0));
if((!(taoensso.sente.server_event_msg_QMARK_(ev_msg_STAR_)))){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",194,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
}),null)),null,-394484615,null);
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch_recv,ev_msg_STAR_);
}
});
taoensso.sente.cb_error_QMARK_ = (function taoensso$sente$cb_error_QMARK_(cb_reply_clj){
var fexpr__84053 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264),null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439),null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489),null], null), null);
return (fexpr__84053.cljs$core$IFn$_invoke$arity$1 ? fexpr__84053.cljs$core$IFn$_invoke$arity$1(cb_reply_clj) : fexpr__84053.call(null,cb_reply_clj));
});
taoensso.sente.cb_success_QMARK_ = (function taoensso$sente$cb_success_QMARK_(cb_reply_clj){
return cljs.core.not(taoensso.sente.cb_error_QMARK_(cb_reply_clj));
});
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
if(typeof prefixed_pstr === 'string'){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",208,"(string? prefixed-pstr)",prefixed_pstr,null,null);
}

var wrapped_QMARK_ = taoensso.encore.str_starts_with_QMARK_(prefixed_pstr,"+");
var pstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(prefixed_pstr,(1));
var clj = (function (){try{return taoensso.sente.interfaces.unpack(packer,pstr);
}catch (e84060){var t = e84060;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",215,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
}),null)),null,319049979,null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-package","chsk/bad-package",501893679),pstr], null);
}})();
var vec__84057 = ((wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84057,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84057,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",221,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
}),null)),null,-1034826020,null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var G__84062 = arguments.length;
switch (G__84062) {
case 2:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2 = (function (packer,clj){
var pstr = ["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.interfaces.pack(packer,clj))].join('');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",228,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (unwrapped): %s -> %s",clj,pstr], null);
}),null)),null,-2133573678,null);

return pstr;
}));

(taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3 = (function (packer,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
var pstr = ["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.interfaces.pack(packer,wrapped_clj))].join('');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",237,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (wrapped): %s -> %s",wrapped_clj,pstr], null);
}),null)),null,-738683589,null);

return pstr;
}));

(taoensso.sente.pack.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {taoensso.sente.interfaces.IPacker}
*/
taoensso.sente.EdnPacker = (function (){
});
(taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$pack$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1(x);
}));

(taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$unpack$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1(s);
}));

(taoensso.sente.EdnPacker.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(taoensso.sente.EdnPacker.cljs$lang$type = true);

(taoensso.sente.EdnPacker.cljs$lang$ctorStr = "taoensso.sente/EdnPacker");

(taoensso.sente.EdnPacker.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"taoensso.sente/EdnPacker");
}));

/**
 * Positional factory function for taoensso.sente/EdnPacker.
 */
taoensso.sente.__GT_EdnPacker = (function taoensso$sente$__GT_EdnPacker(){
return (new taoensso.sente.EdnPacker());
});

taoensso.sente.default_edn_packer = (new taoensso.sente.EdnPacker());
taoensso.sente.coerce_packer = (function taoensso$sente$coerce_packer(x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"edn","edn",1317840885))){
return taoensso.sente.default_edn_packer;
} else {
var e = (function (){try{if((function (p1__84071_SHARP_){
if((!((p1__84071_SHARP_ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__84071_SHARP_.taoensso$sente$interfaces$IPacker$)))){
return true;
} else {
if((!p1__84071_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IPacker,p1__84071_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IPacker,p1__84071_SHARP_);
}
})(x)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e84076){if((e84076 instanceof Error)){
var e = e84076;
return e;
} else {
throw e84076;

}
}})();
if((e == null)){
return x;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",250,"((fn* [p1__84071#] (satisfies? interfaces/IPacker p1__84071#)) x)",x,e,null);
}
}
});
taoensso.sente.next_idx_BANG_ = (taoensso.encore.idx_fn.cljs$core$IFn$_invoke$arity$0 ? taoensso.encore.idx_fn.cljs$core$IFn$_invoke$arity$0() : taoensso.encore.idx_fn.call(null));


/**
 * Alpha, subject to change.
 *   Returns true iff given Ring request is allowed by `allowed-origins`.
 *   `allowed-origins` may be `:all` or #{<origin>}.
 */
taoensso.sente.allow_origin_QMARK_ = (function taoensso$sente$allow_origin_QMARK_(allowed_origins,ring_req){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(allowed_origins,new cljs.core.Keyword(null,"all","all",892129742))){
return true;
} else {
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.Keyword(null,"headers","headers",-835030129));
var origin = cljs.core.get.cljs$core$IFn$_invoke$arity$3(headers,"origin",new cljs.core.Keyword(null,"nx","nx",-1996436366));
var have_origin_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(origin,new cljs.core.Keyword(null,"nx","nx",-1996436366));
if(((have_origin_QMARK_) && (cljs.core.contains_QMARK_(cljs.core.set(allowed_origins),origin)))){
return true;
} else {
var referer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(headers,"referer","");
if(cljs.core.truth_((((!(have_origin_QMARK_)))?taoensso.encore.rsome((function (p1__84081_SHARP_){
return clojure.string.starts_with_QMARK_(referer,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__84081_SHARP_),"/"].join(''));
}),allowed_origins):false))){
return true;
} else {
return false;
}
}
}
});
/**
 * Takes a web server adapter[1] and returns a map with keys:
 * 
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 *  :send-fn                     ; (fn [user-id ev] for server>user push.
 *  :ajax-post-fn                ; (fn [ring-req])  for Ring CSRF-POST + chsk URL.
 *  :ajax-get-or-ws-handshake-fn ; (fn [ring-req])  for Ring GET + chsk URL.
 * 
 *  :connected-uids ;             Watchable, read-only (atom {:ws #{_} :ajax #{_} :any #{_}}).
 *  :send-buffers   ; Implementation detail, read-only (atom {:ws #{_} :ajax #{_} :any #{_}}).
 * 
 *   Security options:
 * 
 *  :allowed-origins   ; e.g. #{"http://site.com" ...}, defaults to :all. ; Alpha
 * 
 *  :csrf-token-fn     ; ?(fn [ring-req]) -> CSRF-token for Ajax POSTs and WS handshake.
 *                     ; CSRF check will be skipped iff nil (NOT RECOMMENDED!).
 * 
 *  :authorized?-fn    ; ?(fn [ring-req]) -> When non-nil, (authorized?-fn <ring-req>)
 *                     ; must return truthy, otherwise connection requests will be
 *                     ; rejected with (unauthorized-fn <ring-req>) response.
 *                     ;
 *                     ; May check Authroization HTTP header, etc.
 * 
 *  :?unauthorized-fn  ; An alternative API to `authorized?-fn`+`unauthorized-fn` pair.
 *                     ; ?(fn [ring-req)) -> <?rejection-resp>. I.e. when return value
 *                     ; is non-nil, connection requests will be rejected with that
 *                     ; non-nil value.
 * 
 *   Other common options:
 * 
 *  :user-id-fn        ; (fn [ring-req]) -> unique user-id for server>user push.
 *  :handshake-data-fn ; (fn [ring-req]) -> arb user data to append to handshake evs.
 *  :ws-kalive-ms      ; Ping to keep a WebSocket conn alive if no activity
 *                     ; w/in given msecs. Should be different to client's :ws-kalive-ms.
 *  :lp-timeout-ms     ; Timeout (repoll) long-polling Ajax conns after given msecs.
 *  :send-buf-ms-ajax  ; [2]
 *  :send-buf-ms-ws    ; [2]
 *  :packer            ; :edn (default), or an IPacker implementation.
 * 
 *   [1] e.g. `(taoensso.sente.server-adapters.http-kit/get-sch-adapter)` or
 *         `(taoensso.sente.server-adapters.immutant/get-sch-adapter)`.
 *    You must have the necessary web-server dependency in your project.clj and
 *    the necessary entry in your namespace's `ns` form.
 * 
 *   [2] Optimization to allow transparent batching of rapidly-triggered
 *    server>user pushes. This is esp. important for Ajax clients which use a
 *    (slow) reconnecting poller. Actual event dispatch may occur <= given ms
 *    after send call (larger values => larger batch windows).
 */
taoensso.sente.make_channel_socket_server_BANG_ = (function taoensso$sente$make_channel_socket_server_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___85179 = arguments.length;
var i__4737__auto___85180 = (0);
while(true){
if((i__4737__auto___85180 < len__4736__auto___85179)){
args__4742__auto__.push((arguments[i__4737__auto___85180]));

var G__85181 = (i__4737__auto___85180 + (1));
i__4737__auto___85180 = G__85181;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_ch_adapter,p__84104){
var vec__84105 = p__84104;
var map__84108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84105,(0),null);
var map__84108__$1 = (((((!((map__84108 == null))))?(((((map__84108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__84108):map__84108);
var ws_kalive_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__84108__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"secs","secs",1532330091),(25)], 0)));
var _QMARK_unauthorized_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84108__$1,new cljs.core.Keyword(null,"?unauthorized-fn","?unauthorized-fn",-1883475616));
var send_buf_ms_ws = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__84108__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var allowed_origins = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__84108__$1,new cljs.core.Keyword(null,"allowed-origins","allowed-origins",1477851683),new cljs.core.Keyword(null,"all","all",892129742));
var lp_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__84108__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"secs","secs",1532330091),(20)], 0)));
var csrf_token_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__84108__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),(function (ring_req){
var or__4126__auto__ = new cljs.core.Keyword(null,"anti-forgery-token","anti-forgery-token",806990841).cljs$core$IFn$_invoke$arity$1(ring_req);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("ring.middleware.anti-forgery","anti-forgery-token","ring.middleware.anti-forgery/anti-forgery-token",571563484)], null));
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),"__anti-forgery-token"], null));
}
}
}
}));
var packer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__84108__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var unauthorized_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__84108__$1,new cljs.core.Keyword(null,"unauthorized-fn","unauthorized-fn",-2032603957),(function (_ring_req){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),(401),new cljs.core.Keyword(null,"body","body",-2049205669),"Unauthorized request"], null);
}));
var send_buf_ms_ajax = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__84108__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var bad_origin_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__84108__$1,new cljs.core.Keyword(null,"bad-origin-fn","bad-origin-fn",1385595727),(function (_ring_req){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),(403),new cljs.core.Keyword(null,"body","body",-2049205669),"Unauthorized origin"], null);
}));
var handshake_data_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__84108__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),(function (ring_req){
return null;
}));
var user_id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__84108__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),(function (ring_req){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
}));
var recv_buf_or_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__84108__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer((1000)));
var authorized_QMARK__fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84108__$1,new cljs.core.Keyword(null,"authorized?-fn","authorized?-fn",-1334669261));
var bad_csrf_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__84108__$1,new cljs.core.Keyword(null,"bad-csrf-fn","bad-csrf-fn",16619032),(function (_ring_req){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),(403),new cljs.core.Keyword(null,"body","body",-2049205669),"Bad CSRF token"], null);
}));
var e_85185 = (function (){try{if(taoensso.encore.pos_int_QMARK_(send_buf_ms_ajax)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e84112){if((e84112 instanceof Error)){
var e_85185 = e84112;
return e_85185;
} else {
throw e84112;

}
}})();
if((e_85185 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",394,"(enc/pos-int? send-buf-ms-ajax)",send_buf_ms_ajax,e_85185,null);
}

var e_85186 = (function (){try{if(taoensso.encore.pos_int_QMARK_(send_buf_ms_ws)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e84114){if((e84114 instanceof Error)){
var e_85186 = e84114;
return e_85186;
} else {
throw e84114;

}
}})();
if((e_85186 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",394,"(enc/pos-int? send-buf-ms-ws)",send_buf_ms_ws,e_85186,null);
}


var e_85187 = (function (){try{if((function (p1__84092_SHARP_){
if((!((p1__84092_SHARP_ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__84092_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)))){
return true;
} else {
if((!p1__84092_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IServerChanAdapter,p1__84092_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IServerChanAdapter,p1__84092_SHARP_);
}
})(web_server_ch_adapter)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e84117){if((e84117 instanceof Error)){
var e_85187 = e84117;
return e_85187;
} else {
throw e84117;

}
}})();
if((e_85187 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",395,"((fn* [p1__84092#] (satisfies? interfaces/IServerChanAdapter p1__84092#)) web-server-ch-adapter)",web_server_ch_adapter,e_85187,null);
}

var max_ms_85188 = taoensso.sente.default_client_side_ajax_timeout_ms;
if((lp_timeout_ms >= max_ms_85188)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([":lp-timeout-ms must be < ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_ms_85188)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),lp_timeout_ms,new cljs.core.Keyword(null,"default-client-side-ajax-timeout-ms","default-client-side-ajax-timeout-ms",1149929762),max_ms_85188], null));
} else {
}

var allowed_origins__$1 = (cljs.core.truth_((function (x){
var or__4126__auto__ = cljs.core.set_QMARK_(x);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__84122 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all","all",892129742),null], null), null);
return (fexpr__84122.cljs$core$IFn$_invoke$arity$1 ? fexpr__84122.cljs$core$IFn$_invoke$arity$1(x) : fexpr__84122.call(null,x));
}
})(allowed_origins))?allowed_origins:taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",404,"([:or set? #{:all}] allowed-origins)",allowed_origins,null,null));
var packer__$1 = taoensso.sente.coerce_packer(packer);
var ch_recv = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(recv_buf_or_n);
var user_id_fn__$1 = (function (ring_req,client_id){
var or__4126__auto__ = (function (){var G__84125 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);
return (user_id_fn.cljs$core$IFn$_invoke$arity$1 ? user_id_fn.cljs$core$IFn$_invoke$arity$1(G__84125) : user_id_fn.call(null,G__84125));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486);
}
});
var conns_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var send_buffers_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.PersistentHashSet.EMPTY], null));
var upd_conn_BANG_ = (function() {
var G__85195 = null;
var G__85195__3 = (function (conn_type,uid,client_id){
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),(function (_QMARK_v){
var vec__84128 = _QMARK_v;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84128,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84128,(1),null);
var new_udt = taoensso.encore.now_udt();
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),_QMARK_sch], null));
}));
});
var G__85195__4 = (function (conn_type,uid,client_id,new__QMARK_sch){
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),(function (_QMARK_v){
var new_udt = taoensso.encore.now_udt();
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new__QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),new__QMARK_sch], null));
}));
});
G__85195 = function(conn_type,uid,client_id,new__QMARK_sch){
switch(arguments.length){
case 3:
return G__85195__3.call(this,conn_type,uid,client_id);
case 4:
return G__85195__4.call(this,conn_type,uid,client_id,new__QMARK_sch);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__85195.cljs$core$IFn$_invoke$arity$3 = G__85195__3;
G__85195.cljs$core$IFn$_invoke$arity$4 = G__85195__4;
return G__85195;
})()
;
var connect_uid_BANG_ = (function (conn_type,uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e84132){if((e84132 instanceof Error)){
var e = e84132;
return e;
} else {
throw e84132;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",440,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(connected_uids_,cljs.core.PersistentVector.EMPTY,(function (p__84149){
var map__84150 = p__84149;
var map__84150__$1 = (((((!((map__84150 == null))))?(((((map__84150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__84150):map__84150);
var old_m = map__84150__$1;
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84150__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84150__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84150__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__84152 = conn_type;
var G__84152__$1 = (((G__84152 instanceof cljs.core.Keyword))?G__84152.fqn:null);
switch (G__84152__$1) {
case "ws":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ws,uid),new cljs.core.Keyword(null,"ajax","ajax",814345549),ajax,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid)], null);

break;
case "ajax":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ajax,uid),new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__84152__$1)].join('')));

}
})();
return taoensso.encore.swapped(new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((((!(cljs.core.contains_QMARK_(old_any,uid)))) && (cljs.core.contains_QMARK_(new_any,uid)))){
return new cljs.core.Keyword(null,"newly-connected","newly-connected",-2029862681);
} else {
return null;
}
})());
}));
return newly_connected_QMARK_;
});
var upd_connected_uid_BANG_ = (function (uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e84154){if((e84154 instanceof Error)){
var e = e84154;
return e;
} else {
throw e84154;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",457,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(connected_uids_,cljs.core.PersistentVector.EMPTY,(function (p__84161){
var map__84162 = p__84161;
var map__84162__$1 = (((((!((map__84162 == null))))?(((((map__84162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__84162):map__84162);
var old_m = map__84162__$1;
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84162__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84162__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84162__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var conns_SINGLEQUOTE_ = cljs.core.deref(conns_);
var any_ws_clients_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_ajax_clients_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"ajax","ajax",814345549).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_clients_QMARK_ = ((any_ws_clients_QMARK_) || (any_ajax_clients_QMARK_));
var new_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),((any_ws_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ws,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(ws,uid)),new cljs.core.Keyword(null,"ajax","ajax",814345549),((any_ajax_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ajax,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(ajax,uid)),new cljs.core.Keyword(null,"any","any",1705907423),((any_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(any,uid))], null);
return taoensso.encore.swapped(new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if(((cljs.core.contains_QMARK_(old_any,uid)) && ((!(cljs.core.contains_QMARK_(new_any,uid)))))){
return new cljs.core.Keyword(null,"newly-disconnected","newly-disconnected",-1586164962);
} else {
return null;
}
})());
}));
return newly_disconnected_QMARK_;
});
var send_fn = (function() { 
var G__85210__delegate = function (user_id,ev,p__84165){
var vec__84167 = p__84165;
var map__84170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84167,(0),null);
var map__84170__$1 = (((((!((map__84170 == null))))?(((((map__84170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__84170):map__84170);
var opts = map__84170__$1;
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84170__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_85214 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486):user_id);
var __85215 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",483,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_85214,ev], null);
}),null)),null,-1135556725,null);
var __85216__$1 = (cljs.core.truth_(uid_85214)?null:(function(){throw (new Error(["Assert failed: ",["Support for sending to `nil` user-ids has been REMOVED. ","Please send to `:sente/all-users-without-uid` instead."].join(''),"\n","uid"].join('')))})());
var __85217__$2 = taoensso.sente.assert_event(ev);
var ev_uuid_85218 = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
var flush_buffer_BANG__85219 = (function (conn_type){
var temp__5753__auto__ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type], null),(function (m){
var vec__84174 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,uid_85214);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84174,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84174,(1),null);
if(cljs.core.contains_QMARK_(ev_uuids,ev_uuid_85218)){
return taoensso.encore.swapped(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,uid_85214),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,uid_85214));
} else {
return taoensso.encore.swapped(m,null);
}
}));
if(cljs.core.truth_(temp__5753__auto__)){
var pulled = temp__5753__auto__;
var vec__84179 = pulled;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84179,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84179,(1),null);
if(cljs.core.vector_QMARK_(buffered_evs)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",511,"(vector? buffered-evs)",buffered_evs,null,null);
}

if(cljs.core.set_QMARK_(ev_uuids)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",512,"(set? ev-uuids)",ev_uuids,null,null);
}

var buffered_evs_ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,buffered_evs);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",515,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s",buffered_evs_ppstr], null);
}),null)),null,200295893,null);

var G__84185 = conn_type;
var G__84185__$1 = (((G__84185 instanceof cljs.core.Keyword))?G__84185.fqn:null);
switch (G__84185__$1) {
case "ws":
return (taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.cljs$core$IFn$_invoke$arity$4 ? taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.cljs$core$IFn$_invoke$arity$4(conns_,uid_85214,buffered_evs_ppstr,upd_conn_BANG_) : taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_85214,buffered_evs_ppstr,upd_conn_BANG_));

break;
case "ajax":
return (taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,uid_85214,buffered_evs_ppstr) : taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_85214,buffered_evs_ppstr));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__84185__$1)].join('')));

}
} else {
return null;
}
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",524,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_85214], null);
}),null)),null,668306284,null);

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__85219(new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__85219(new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
}

var seq__84186_85222 = cljs.core.seq(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_85214], null))));
var chunk__84187_85223 = null;
var count__84188_85224 = (0);
var i__84189_85225 = (0);
while(true){
if((i__84189_85225 < count__84188_85224)){
var vec__84199_85226 = chunk__84187_85223.cljs$core$IIndexed$_nth$arity$2(null,i__84189_85225);
var _QMARK_sch_85227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84199_85226,(0),null);
var _udt_85228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84199_85226,(1),null);
var temp__5753__auto___85229 = _QMARK_sch_85227;
if(cljs.core.truth_(temp__5753__auto___85229)){
var sch_85230 = temp__5753__auto___85229;
taoensso.sente.interfaces.sch_close_BANG_(sch_85230);
} else {
}


var G__85231 = seq__84186_85222;
var G__85232 = chunk__84187_85223;
var G__85233 = count__84188_85224;
var G__85234 = (i__84189_85225 + (1));
seq__84186_85222 = G__85231;
chunk__84187_85223 = G__85232;
count__84188_85224 = G__85233;
i__84189_85225 = G__85234;
continue;
} else {
var temp__5753__auto___85235 = cljs.core.seq(seq__84186_85222);
if(temp__5753__auto___85235){
var seq__84186_85236__$1 = temp__5753__auto___85235;
if(cljs.core.chunked_seq_QMARK_(seq__84186_85236__$1)){
var c__4556__auto___85237 = cljs.core.chunk_first(seq__84186_85236__$1);
var G__85238 = cljs.core.chunk_rest(seq__84186_85236__$1);
var G__85239 = c__4556__auto___85237;
var G__85240 = cljs.core.count(c__4556__auto___85237);
var G__85241 = (0);
seq__84186_85222 = G__85238;
chunk__84187_85223 = G__85239;
count__84188_85224 = G__85240;
i__84189_85225 = G__85241;
continue;
} else {
var vec__84203_85242 = cljs.core.first(seq__84186_85236__$1);
var _QMARK_sch_85243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84203_85242,(0),null);
var _udt_85244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84203_85242,(1),null);
var temp__5753__auto___85245__$1 = _QMARK_sch_85243;
if(cljs.core.truth_(temp__5753__auto___85245__$1)){
var sch_85246 = temp__5753__auto___85245__$1;
taoensso.sente.interfaces.sch_close_BANG_(sch_85246);
} else {
}


var G__85247 = cljs.core.next(seq__84186_85236__$1);
var G__85248 = null;
var G__85249 = (0);
var G__85250 = (0);
seq__84186_85222 = G__85247;
chunk__84187_85223 = G__85248;
count__84188_85224 = G__85249;
i__84189_85225 = G__85250;
continue;
}
} else {
}
}
break;
}

var seq__84207_85251 = cljs.core.seq(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_85214], null))));
var chunk__84208_85252 = null;
var count__84209_85253 = (0);
var i__84210_85254 = (0);
while(true){
if((i__84210_85254 < count__84209_85253)){
var vec__84219_85255 = chunk__84208_85252.cljs$core$IIndexed$_nth$arity$2(null,i__84210_85254);
var _QMARK_sch_85256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84219_85255,(0),null);
var _udt_85257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84219_85255,(1),null);
var temp__5753__auto___85258 = _QMARK_sch_85256;
if(cljs.core.truth_(temp__5753__auto___85258)){
var sch_85259 = temp__5753__auto___85258;
taoensso.sente.interfaces.sch_close_BANG_(sch_85259);
} else {
}


var G__85260 = seq__84207_85251;
var G__85261 = chunk__84208_85252;
var G__85262 = count__84209_85253;
var G__85263 = (i__84210_85254 + (1));
seq__84207_85251 = G__85260;
chunk__84208_85252 = G__85261;
count__84209_85253 = G__85262;
i__84210_85254 = G__85263;
continue;
} else {
var temp__5753__auto___85265 = cljs.core.seq(seq__84207_85251);
if(temp__5753__auto___85265){
var seq__84207_85267__$1 = temp__5753__auto___85265;
if(cljs.core.chunked_seq_QMARK_(seq__84207_85267__$1)){
var c__4556__auto___85268 = cljs.core.chunk_first(seq__84207_85267__$1);
var G__85269 = cljs.core.chunk_rest(seq__84207_85267__$1);
var G__85270 = c__4556__auto___85268;
var G__85271 = cljs.core.count(c__4556__auto___85268);
var G__85272 = (0);
seq__84207_85251 = G__85269;
chunk__84208_85252 = G__85270;
count__84209_85253 = G__85271;
i__84210_85254 = G__85272;
continue;
} else {
var vec__84222_85274 = cljs.core.first(seq__84207_85267__$1);
var _QMARK_sch_85275 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84222_85274,(0),null);
var _udt_85276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84222_85274,(1),null);
var temp__5753__auto___85277__$1 = _QMARK_sch_85275;
if(cljs.core.truth_(temp__5753__auto___85277__$1)){
var sch_85278 = temp__5753__auto___85277__$1;
taoensso.sente.interfaces.sch_close_BANG_(sch_85278);
} else {
}


var G__85279 = cljs.core.next(seq__84207_85267__$1);
var G__85280 = null;
var G__85281 = (0);
var G__85282 = (0);
seq__84207_85251 = G__85279;
chunk__84208_85252 = G__85280;
count__84209_85253 = G__85281;
i__84210_85254 = G__85282;
continue;
}
} else {
}
}
break;
}
} else {
var seq__84225_85283 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__84226_85284 = null;
var count__84227_85285 = (0);
var i__84228_85286 = (0);
while(true){
if((i__84228_85286 < count__84227_85285)){
var conn_type_85287 = chunk__84226_85284.cljs$core$IIndexed$_nth$arity$2(null,i__84228_85286);
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_85287,uid_85214], null),((function (seq__84225_85283,chunk__84226_85284,count__84227_85285,i__84228_85286,conn_type_85287,uid_85214,__85215,__85216__$1,__85217__$2,ev_uuid_85218,flush_buffer_BANG__85219,vec__84167,map__84170,map__84170__$1,opts,flush_QMARK_,allowed_origins__$1,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__84105,map__84108,map__84108__$1,ws_kalive_ms,_QMARK_unauthorized_fn,send_buf_ms_ws,allowed_origins,lp_timeout_ms,csrf_token_fn,packer,unauthorized_fn,send_buf_ms_ajax,bad_origin_fn,handshake_data_fn,user_id_fn,recv_buf_or_n,authorized_QMARK__fn,bad_csrf_fn){
return (function (_QMARK_v){
if(cljs.core.not(_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_85218])], null);
} else {
var vec__84243 = _QMARK_v;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84243,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84243,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffered_evs,ev),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ev_uuids,ev_uuid_85218)], null);
}
});})(seq__84225_85283,chunk__84226_85284,count__84227_85285,i__84228_85286,conn_type_85287,uid_85214,__85215,__85216__$1,__85217__$2,ev_uuid_85218,flush_buffer_BANG__85219,vec__84167,map__84170,map__84170__$1,opts,flush_QMARK_,allowed_origins__$1,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__84105,map__84108,map__84108__$1,ws_kalive_ms,_QMARK_unauthorized_fn,send_buf_ms_ws,allowed_origins,lp_timeout_ms,csrf_token_fn,packer,unauthorized_fn,send_buf_ms_ajax,bad_origin_fn,handshake_data_fn,user_id_fn,recv_buf_or_n,authorized_QMARK__fn,bad_csrf_fn))
);


var G__85288 = seq__84225_85283;
var G__85289 = chunk__84226_85284;
var G__85290 = count__84227_85285;
var G__85291 = (i__84228_85286 + (1));
seq__84225_85283 = G__85288;
chunk__84226_85284 = G__85289;
count__84227_85285 = G__85290;
i__84228_85286 = G__85291;
continue;
} else {
var temp__5753__auto___85292 = cljs.core.seq(seq__84225_85283);
if(temp__5753__auto___85292){
var seq__84225_85293__$1 = temp__5753__auto___85292;
if(cljs.core.chunked_seq_QMARK_(seq__84225_85293__$1)){
var c__4556__auto___85294 = cljs.core.chunk_first(seq__84225_85293__$1);
var G__85295 = cljs.core.chunk_rest(seq__84225_85293__$1);
var G__85296 = c__4556__auto___85294;
var G__85297 = cljs.core.count(c__4556__auto___85294);
var G__85298 = (0);
seq__84225_85283 = G__85295;
chunk__84226_85284 = G__85296;
count__84227_85285 = G__85297;
i__84228_85286 = G__85298;
continue;
} else {
var conn_type_85299 = cljs.core.first(seq__84225_85293__$1);
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_85299,uid_85214], null),((function (seq__84225_85283,chunk__84226_85284,count__84227_85285,i__84228_85286,conn_type_85299,seq__84225_85293__$1,temp__5753__auto___85292,uid_85214,__85215,__85216__$1,__85217__$2,ev_uuid_85218,flush_buffer_BANG__85219,vec__84167,map__84170,map__84170__$1,opts,flush_QMARK_,allowed_origins__$1,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__84105,map__84108,map__84108__$1,ws_kalive_ms,_QMARK_unauthorized_fn,send_buf_ms_ws,allowed_origins,lp_timeout_ms,csrf_token_fn,packer,unauthorized_fn,send_buf_ms_ajax,bad_origin_fn,handshake_data_fn,user_id_fn,recv_buf_or_n,authorized_QMARK__fn,bad_csrf_fn){
return (function (_QMARK_v){
if(cljs.core.not(_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_85218])], null);
} else {
var vec__84247 = _QMARK_v;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84247,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84247,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffered_evs,ev),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ev_uuids,ev_uuid_85218)], null);
}
});})(seq__84225_85283,chunk__84226_85284,count__84227_85285,i__84228_85286,conn_type_85299,seq__84225_85293__$1,temp__5753__auto___85292,uid_85214,__85215,__85216__$1,__85217__$2,ev_uuid_85218,flush_buffer_BANG__85219,vec__84167,map__84170,map__84170__$1,opts,flush_QMARK_,allowed_origins__$1,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__84105,map__84108,map__84108__$1,ws_kalive_ms,_QMARK_unauthorized_fn,send_buf_ms_ws,allowed_origins,lp_timeout_ms,csrf_token_fn,packer,unauthorized_fn,send_buf_ms_ajax,bad_origin_fn,handshake_data_fn,user_id_fn,recv_buf_or_n,authorized_QMARK__fn,bad_csrf_fn))
);


var G__85300 = cljs.core.next(seq__84225_85293__$1);
var G__85301 = null;
var G__85302 = (0);
var G__85303 = (0);
seq__84225_85283 = G__85300;
chunk__84226_85284 = G__85301;
count__84227_85285 = G__85302;
i__84228_85286 = G__85303;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__85219(new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__85219(new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
var ws_timeout_85304 = cljs.core.async.timeout(send_buf_ms_ws);
var ajax_timeout_85305 = cljs.core.async.timeout(send_buf_ms_ajax);
var c__60388__auto___85306 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60389__auto__ = (function (){var switch__60365__auto__ = (function (state_84255){
var state_val_84256 = (state_84255[(1)]);
if((state_val_84256 === (1))){
var state_84255__$1 = state_84255;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_84255__$1,(2),ws_timeout_85304);
} else {
if((state_val_84256 === (2))){
var inst_84252 = (state_84255[(2)]);
var inst_84253 = flush_buffer_BANG__85219(new cljs.core.Keyword(null,"ws","ws",86841443));
var state_84255__$1 = (function (){var statearr_84258 = state_84255;
(statearr_84258[(7)] = inst_84252);

return statearr_84258;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_84255__$1,inst_84253);
} else {
return null;
}
}
});
return (function() {
var taoensso$sente$state_machine__60366__auto__ = null;
var taoensso$sente$state_machine__60366__auto____0 = (function (){
var statearr_84262 = [null,null,null,null,null,null,null,null];
(statearr_84262[(0)] = taoensso$sente$state_machine__60366__auto__);

(statearr_84262[(1)] = (1));

return statearr_84262;
});
var taoensso$sente$state_machine__60366__auto____1 = (function (state_84255){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_84255);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e84263){var ex__60369__auto__ = e84263;
var statearr_84264_85307 = state_84255;
(statearr_84264_85307[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_84255[(4)]))){
var statearr_84265_85308 = state_84255;
(statearr_84265_85308[(1)] = cljs.core.first((state_84255[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__85309 = state_84255;
state_84255 = G__85309;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
taoensso$sente$state_machine__60366__auto__ = function(state_84255){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__60366__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__60366__auto____1.call(this,state_84255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__60366__auto____0;
taoensso$sente$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__60366__auto____1;
return taoensso$sente$state_machine__60366__auto__;
})()
})();
var state__60390__auto__ = (function (){var statearr_84266 = f__60389__auto__();
(statearr_84266[(6)] = c__60388__auto___85306);

return statearr_84266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60390__auto__);
}));


var c__60388__auto___85310 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60389__auto__ = (function (){var switch__60365__auto__ = (function (state_84271){
var state_val_84272 = (state_84271[(1)]);
if((state_val_84272 === (1))){
var state_84271__$1 = state_84271;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_84271__$1,(2),ajax_timeout_85305);
} else {
if((state_val_84272 === (2))){
var inst_84268 = (state_84271[(2)]);
var inst_84269 = flush_buffer_BANG__85219(new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_84271__$1 = (function (){var statearr_84273 = state_84271;
(statearr_84273[(7)] = inst_84268);

return statearr_84273;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_84271__$1,inst_84269);
} else {
return null;
}
}
});
return (function() {
var taoensso$sente$state_machine__60366__auto__ = null;
var taoensso$sente$state_machine__60366__auto____0 = (function (){
var statearr_84275 = [null,null,null,null,null,null,null,null];
(statearr_84275[(0)] = taoensso$sente$state_machine__60366__auto__);

(statearr_84275[(1)] = (1));

return statearr_84275;
});
var taoensso$sente$state_machine__60366__auto____1 = (function (state_84271){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_84271);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e84278){var ex__60369__auto__ = e84278;
var statearr_84280_85311 = state_84271;
(statearr_84280_85311[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_84271[(4)]))){
var statearr_84283_85312 = state_84271;
(statearr_84283_85312[(1)] = cljs.core.first((state_84271[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__85313 = state_84271;
state_84271 = G__85313;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
taoensso$sente$state_machine__60366__auto__ = function(state_84271){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__60366__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__60366__auto____1.call(this,state_84271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__60366__auto____0;
taoensso$sente$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__60366__auto____1;
return taoensso$sente$state_machine__60366__auto__;
})()
})();
var state__60390__auto__ = (function (){var statearr_84287 = f__60389__auto__();
(statearr_84287[(6)] = c__60388__auto___85310);

return statearr_84287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60390__auto__);
}));

}
}

return null;
};
var G__85210 = function (user_id,ev,var_args){
var p__84165 = null;
if (arguments.length > 2) {
var G__85314__i = 0, G__85314__a = new Array(arguments.length -  2);
while (G__85314__i < G__85314__a.length) {G__85314__a[G__85314__i] = arguments[G__85314__i + 2]; ++G__85314__i;}
  p__84165 = new cljs.core.IndexedSeq(G__85314__a,0,null);
} 
return G__85210__delegate.call(this,user_id,ev,p__84165);};
G__85210.cljs$lang$maxFixedArity = 2;
G__85210.cljs$lang$applyTo = (function (arglist__85315){
var user_id = cljs.core.first(arglist__85315);
arglist__85315 = cljs.core.next(arglist__85315);
var ev = cljs.core.first(arglist__85315);
var p__84165 = cljs.core.rest(arglist__85315);
return G__85210__delegate(user_id,ev,p__84165);
});
G__85210.cljs$core$IFn$_invoke$arity$variadic = G__85210__delegate;
return G__85210;
})()
;
var bad_csrf_QMARK_ = (function (ring_req){
if((csrf_token_fn == null)){
return false;
} else {
var temp__5751__auto__ = (csrf_token_fn.cljs$core$IFn$_invoke$arity$1 ? csrf_token_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : csrf_token_fn.call(null,ring_req));
if(cljs.core.truth_(temp__5751__auto__)){
var reference_csrf_token = temp__5751__auto__;
var csrf_token_from_client = (function (){var or__4126__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"x-csrf-token"], null));
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"x-xsrf-token"], null));
}
}
})();
return cljs.core.not(taoensso.encore.const_str_EQ_(reference_csrf_token,csrf_token_from_client));
} else {
return true;
}
}
});
var unauthorized_QMARK_ = (function (ring_req){
if((authorized_QMARK__fn == null)){
return false;
} else {
return cljs.core.not((authorized_QMARK__fn.cljs$core$IFn$_invoke$arity$1 ? authorized_QMARK__fn.cljs$core$IFn$_invoke$arity$1(ring_req) : authorized_QMARK__fn.call(null,ring_req)));
}
});
var possible_rejection_resp = (function (ring_req){
if(bad_csrf_QMARK_(ring_req)){
return (bad_csrf_fn.cljs$core$IFn$_invoke$arity$1 ? bad_csrf_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : bad_csrf_fn.call(null,ring_req));
} else {
if(taoensso.sente.allow_origin_QMARK_(allowed_origins__$1,ring_req)){
if(unauthorized_QMARK_(ring_req)){
return (unauthorized_fn.cljs$core$IFn$_invoke$arity$1 ? unauthorized_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : unauthorized_fn.call(null,ring_req));
} else {
var b2__28332__auto__ = (function (){var temp__5753__auto__ = _QMARK_unauthorized_fn;
if(cljs.core.truth_(temp__5753__auto__)){
var uf = temp__5753__auto__;
return (uf.cljs$core$IFn$_invoke$arity$1 ? uf.cljs$core$IFn$_invoke$arity$1(ring_req) : uf.call(null,ring_req));
} else {
return null;
}
})();
if((b2__28332__auto__ == null)){
return null;
} else {
var unauthorized_resp = b2__28332__auto__;
return unauthorized_resp;
}
}
} else {
return (bad_origin_fn.cljs$core$IFn$_invoke$arity$1 ? bad_origin_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : bad_origin_fn.call(null,ring_req));
}
}
});
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"send-buffers","send-buffers",-1788003787),send_buffers_], null);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"send-buffers","send-buffers",-1788003787),send_buffers_,new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264),(function (ring_req){
var b2__28312__auto__ = possible_rejection_resp(ring_req);
if(cljs.core.truth_(b2__28312__auto__)){
var resp = b2__28312__auto__;
return resp;
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp(web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),(function (server_ch,websocket_QMARK_){
if(cljs.core.not(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: (not websocket?)"));
}

var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var ppstr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var vec__84297 = taoensso.sente.unpack(packer__$1,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84297,(0),null);
var has_cb_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84297,(1),null);
var reply_fn = (function (){var replied_QMARK__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (resp_clj){
if(cljs.core.compare_and_set_BANG_(replied_QMARK__,false,true)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",642,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax post reply): %s",resp_clj], null);
}),null)),null,-1825704471,null);

return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,resp_clj));
} else {
return null;
}
});
})();
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_(ch_recv,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),clj,new cljs.core.Keyword(null,"uid","uid",-1447769400),user_id_fn__$1(ring_req,client_id),new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),(cljs.core.truth_(has_cb_QMARK_)?reply_fn:null)], null)], 0)));

if(cljs.core.truth_(has_cb_QMARK_)){
var temp__5753__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__5753__auto__)){
var ms = temp__5753__auto__;
var c__60388__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60389__auto__ = (function (){var switch__60365__auto__ = (function (state_84305){
var state_val_84306 = (state_84305[(1)]);
if((state_val_84306 === (1))){
var inst_84300 = cljs.core.async.timeout(ms);
var state_84305__$1 = state_84305;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_84305__$1,(2),inst_84300);
} else {
if((state_val_84306 === (2))){
var inst_84302 = (state_84305[(2)]);
var inst_84303 = reply_fn(new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_84305__$1 = (function (){var statearr_84308 = state_84305;
(statearr_84308[(7)] = inst_84302);

return statearr_84308;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_84305__$1,inst_84303);
} else {
return null;
}
}
});
return (function() {
var taoensso$sente$state_machine__60366__auto__ = null;
var taoensso$sente$state_machine__60366__auto____0 = (function (){
var statearr_84313 = [null,null,null,null,null,null,null,null];
(statearr_84313[(0)] = taoensso$sente$state_machine__60366__auto__);

(statearr_84313[(1)] = (1));

return statearr_84313;
});
var taoensso$sente$state_machine__60366__auto____1 = (function (state_84305){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_84305);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e84321){var ex__60369__auto__ = e84321;
var statearr_84322_85316 = state_84305;
(statearr_84322_85316[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_84305[(4)]))){
var statearr_84326_85317 = state_84305;
(statearr_84326_85317[(1)] = cljs.core.first((state_84305[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__85318 = state_84305;
state_84305 = G__85318;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
taoensso$sente$state_machine__60366__auto__ = function(state_84305){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__60366__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__60366__auto____1.call(this,state_84305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__60366__auto____0;
taoensso$sente$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__60366__auto____1;
return taoensso$sente$state_machine__60366__auto__;
})()
})();
var state__60390__auto__ = (function (){var statearr_84338 = f__60389__auto__();
(statearr_84338[(6)] = c__60388__auto__);

return statearr_84338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60390__auto__);
}));

return c__60388__auto__;
} else {
return null;
}
} else {
return reply_fn(new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337));
}
})], null));
}
}),new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233),(function (ring_req){
var sch_uuid = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((6));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var uid = user_id_fn__$1(ring_req,client_id);
var receive_event_msg_BANG_ = (function() {
var taoensso$sente$self = null;
var taoensso$sente$self__1 = (function (event){
return taoensso$sente$self.cljs$core$IFn$_invoke$arity$2(event,null);
});
var taoensso$sente$self__2 = (function (event,_QMARK_reply_fn){
return taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_(ch_recv,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"uid","uid",-1447769400),uid], null)], 0)));
});
taoensso$sente$self = function(event,_QMARK_reply_fn){
switch(arguments.length){
case 1:
return taoensso$sente$self__1.call(this,event);
case 2:
return taoensso$sente$self__2.call(this,event,_QMARK_reply_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$self.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$self__1;
taoensso$sente$self.cljs$core$IFn$_invoke$arity$2 = taoensso$sente$self__2;
return taoensso$sente$self;
})()
;
var send_handshake_BANG_ = (function (server_ch,websocket_QMARK_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",686,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-handshake!"], null);
}),null)),null,367064006,null);

var _QMARK_handshake_data = (handshake_data_fn.cljs$core$IFn$_invoke$arity$1 ? handshake_data_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : handshake_data_fn.call(null,ring_req));
var handshake_ev = (((_QMARK_handshake_data == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,null], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,null,_QMARK_handshake_data], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,handshake_ev));
});
if(clojure.string.blank_QMARK_(client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",699,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[err_msg,": %s"].join(''),ring_req], null);
}),null)),null,1938082826,null);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req], null));
} else {
var b2__28312__auto__ = possible_rejection_resp(ring_req);
if(cljs.core.truth_(b2__28312__auto__)){
var resp = b2__28312__auto__;
return resp;
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp(web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),(function (server_ch,websocket_QMARK_){
if(cljs.core.truth_(websocket_QMARK_)){
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",710,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,sch_uuid], null);
}),null)),null,-1003509841,null);
var updated_conn = upd_conn_BANG_(new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(connect_uid_BANG_(new cljs.core.Keyword(null,"ws","ws",86841443),uid))){
receive_event_msg_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
}

send_handshake_BANG_(server_ch,websocket_QMARK_);

var temp__5753__auto__ = ws_kalive_ms;
if(cljs.core.truth_(temp__5753__auto__)){
var ms = temp__5753__auto__;
var c__60388__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60389__auto__ = (function (){var switch__60365__auto__ = (function (state_84378){
var state_val_84379 = (state_84378[(1)]);
if((state_val_84379 === (7))){
var inst_84374 = (state_84378[(2)]);
var state_84378__$1 = state_84378;
var statearr_84381_85319 = state_84378__$1;
(statearr_84381_85319[(2)] = inst_84374);

(statearr_84381_85319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84379 === (1))){
var inst_84341 = udt_open;
var inst_84342 = inst_84341;
var state_84378__$1 = (function (){var statearr_84382 = state_84378;
(statearr_84382[(7)] = inst_84342);

return statearr_84382;
})();
var statearr_84383_85320 = state_84378__$1;
(statearr_84383_85320[(2)] = null);

(statearr_84383_85320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84379 === (4))){
var inst_84352 = (state_84378[(8)]);
var inst_84346 = (state_84378[(2)]);
var inst_84347 = cljs.core.deref(conns_);
var inst_84348 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_84349 = [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id];
var inst_84351 = (new cljs.core.PersistentVector(null,3,(5),inst_84348,inst_84349,null));
var inst_84352__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_84347,inst_84351);
var state_84378__$1 = (function (){var statearr_84384 = state_84378;
(statearr_84384[(8)] = inst_84352__$1);

(statearr_84384[(9)] = inst_84346);

return statearr_84384;
})();
if(cljs.core.truth_(inst_84352__$1)){
var statearr_84385_85321 = state_84378__$1;
(statearr_84385_85321[(1)] = (5));

} else {
var statearr_84386_85322 = state_84378__$1;
(statearr_84386_85322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84379 === (13))){
var inst_84358 = (state_84378[(10)]);
var inst_84367 = (state_84378[(2)]);
var inst_84342 = inst_84358;
var state_84378__$1 = (function (){var statearr_84387 = state_84378;
(statearr_84387[(7)] = inst_84342);

(statearr_84387[(11)] = inst_84367);

return statearr_84387;
})();
var statearr_84388_85323 = state_84378__$1;
(statearr_84388_85323[(2)] = null);

(statearr_84388_85323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84379 === (6))){
var state_84378__$1 = state_84378;
var statearr_84391_85324 = state_84378__$1;
(statearr_84391_85324[(2)] = null);

(statearr_84391_85324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84379 === (3))){
var inst_84376 = (state_84378[(2)]);
var state_84378__$1 = state_84378;
return cljs.core.async.impl.ioc_helpers.return_chan(state_84378__$1,inst_84376);
} else {
if((state_val_84379 === (12))){
var state_84378__$1 = state_84378;
var statearr_84392_85325 = state_84378__$1;
(statearr_84392_85325[(2)] = null);

(statearr_84392_85325[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84379 === (2))){
var inst_84344 = cljs.core.async.timeout(ms);
var state_84378__$1 = state_84378;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_84378__$1,(4),inst_84344);
} else {
if((state_val_84379 === (11))){
var inst_84363 = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304));
var inst_84364 = taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,inst_84363);
var state_84378__$1 = state_84378;
var statearr_84396_85326 = state_84378__$1;
(statearr_84396_85326[(2)] = inst_84364);

(statearr_84396_85326[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84379 === (9))){
var state_84378__$1 = state_84378;
var statearr_84397_85327 = state_84378__$1;
(statearr_84397_85327[(2)] = null);

(statearr_84397_85327[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84379 === (5))){
var inst_84352 = (state_84378[(8)]);
var inst_84357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_84352,(0),null);
var inst_84358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_84352,(1),null);
var inst_84359 = taoensso.sente.interfaces.sch_open_QMARK_(server_ch);
var state_84378__$1 = (function (){var statearr_84398 = state_84378;
(statearr_84398[(12)] = inst_84357);

(statearr_84398[(10)] = inst_84358);

return statearr_84398;
})();
if(cljs.core.truth_(inst_84359)){
var statearr_84399_85328 = state_84378__$1;
(statearr_84399_85328[(1)] = (8));

} else {
var statearr_84400_85329 = state_84378__$1;
(statearr_84400_85329[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84379 === (10))){
var inst_84371 = (state_84378[(2)]);
var state_84378__$1 = state_84378;
var statearr_84401_85330 = state_84378__$1;
(statearr_84401_85330[(2)] = inst_84371);

(statearr_84401_85330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84379 === (8))){
var inst_84358 = (state_84378[(10)]);
var inst_84342 = (state_84378[(7)]);
var inst_84361 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_84358,inst_84342);
var state_84378__$1 = state_84378;
if(inst_84361){
var statearr_84402_85331 = state_84378__$1;
(statearr_84402_85331[(1)] = (11));

} else {
var statearr_84403_85332 = state_84378__$1;
(statearr_84403_85332[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var taoensso$sente$state_machine__60366__auto__ = null;
var taoensso$sente$state_machine__60366__auto____0 = (function (){
var statearr_84404 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_84404[(0)] = taoensso$sente$state_machine__60366__auto__);

(statearr_84404[(1)] = (1));

return statearr_84404;
});
var taoensso$sente$state_machine__60366__auto____1 = (function (state_84378){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_84378);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e84405){var ex__60369__auto__ = e84405;
var statearr_84406_85333 = state_84378;
(statearr_84406_85333[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_84378[(4)]))){
var statearr_84409_85334 = state_84378;
(statearr_84409_85334[(1)] = cljs.core.first((state_84378[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__85335 = state_84378;
state_84378 = G__85335;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
taoensso$sente$state_machine__60366__auto__ = function(state_84378){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__60366__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__60366__auto____1.call(this,state_84378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__60366__auto____0;
taoensso$sente$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__60366__auto____1;
return taoensso$sente$state_machine__60366__auto__;
})()
})();
var state__60390__auto__ = (function (){var statearr_84411 = f__60389__auto__();
(statearr_84411[(6)] = c__60388__auto__);

return statearr_84411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60390__auto__);
}));

return c__60388__auto__;
} else {
return null;
}
} else {
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",739,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Ajax handshake/poll: %s (%s)",uid,sch_uuid], null);
}),null)),null,-1716764538,null);
var updated_conn = upd_conn_BANG_(new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var handshake_QMARK_ = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"init?","init?",438181499).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"handshake?","handshake?",-423743093).cljs$core$IFn$_invoke$arity$1(params);
}
})();
if(cljs.core.truth_(connect_uid_BANG_(new cljs.core.Keyword(null,"ajax","ajax",814345549),uid))){
receive_event_msg_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
}

if(cljs.core.truth_(handshake_QMARK_)){
return send_handshake_BANG_(server_ch,websocket_QMARK_);
} else {
var temp__5753__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__5753__auto__)){
var ms = temp__5753__auto__;
var c__60388__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60389__auto__ = (function (){var switch__60365__auto__ = (function (state_84440){
var state_val_84441 = (state_84440[(1)]);
if((state_val_84441 === (1))){
var inst_84415 = cljs.core.async.timeout(ms);
var state_84440__$1 = state_84440;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_84440__$1,(2),inst_84415);
} else {
if((state_val_84441 === (2))){
var inst_84422 = (state_84440[(7)]);
var inst_84417 = (state_84440[(2)]);
var inst_84418 = cljs.core.deref(conns_);
var inst_84419 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_84420 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id];
var inst_84421 = (new cljs.core.PersistentVector(null,3,(5),inst_84419,inst_84420,null));
var inst_84422__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_84418,inst_84421);
var state_84440__$1 = (function (){var statearr_84449 = state_84440;
(statearr_84449[(8)] = inst_84417);

(statearr_84449[(7)] = inst_84422__$1);

return statearr_84449;
})();
if(cljs.core.truth_(inst_84422__$1)){
var statearr_84450_85336 = state_84440__$1;
(statearr_84450_85336[(1)] = (3));

} else {
var statearr_84451_85337 = state_84440__$1;
(statearr_84451_85337[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84441 === (3))){
var inst_84422 = (state_84440[(7)]);
var inst_84427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_84422,(0),null);
var inst_84428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_84422,(1),null);
var inst_84429 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_84428,udt_open);
var state_84440__$1 = (function (){var statearr_84452 = state_84440;
(statearr_84452[(9)] = inst_84427);

return statearr_84452;
})();
if(inst_84429){
var statearr_84453_85338 = state_84440__$1;
(statearr_84453_85338[(1)] = (6));

} else {
var statearr_84454_85339 = state_84440__$1;
(statearr_84454_85339[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84441 === (4))){
var state_84440__$1 = state_84440;
var statearr_84457_85340 = state_84440__$1;
(statearr_84457_85340[(2)] = null);

(statearr_84457_85340[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84441 === (5))){
var inst_84438 = (state_84440[(2)]);
var state_84440__$1 = state_84440;
return cljs.core.async.impl.ioc_helpers.return_chan(state_84440__$1,inst_84438);
} else {
if((state_val_84441 === (6))){
var inst_84431 = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var inst_84432 = taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,inst_84431);
var state_84440__$1 = state_84440;
var statearr_84460_85341 = state_84440__$1;
(statearr_84460_85341[(2)] = inst_84432);

(statearr_84460_85341[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84441 === (7))){
var state_84440__$1 = state_84440;
var statearr_84461_85342 = state_84440__$1;
(statearr_84461_85342[(2)] = null);

(statearr_84461_85342[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84441 === (8))){
var inst_84435 = (state_84440[(2)]);
var state_84440__$1 = state_84440;
var statearr_84462_85343 = state_84440__$1;
(statearr_84462_85343[(2)] = inst_84435);

(statearr_84462_85343[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var taoensso$sente$state_machine__60366__auto__ = null;
var taoensso$sente$state_machine__60366__auto____0 = (function (){
var statearr_84463 = [null,null,null,null,null,null,null,null,null,null];
(statearr_84463[(0)] = taoensso$sente$state_machine__60366__auto__);

(statearr_84463[(1)] = (1));

return statearr_84463;
});
var taoensso$sente$state_machine__60366__auto____1 = (function (state_84440){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_84440);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e84464){var ex__60369__auto__ = e84464;
var statearr_84465_85344 = state_84440;
(statearr_84465_85344[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_84440[(4)]))){
var statearr_84466_85345 = state_84440;
(statearr_84466_85345[(1)] = cljs.core.first((state_84440[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__85346 = state_84440;
state_84440 = G__85346;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
taoensso$sente$state_machine__60366__auto__ = function(state_84440){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__60366__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__60366__auto____1.call(this,state_84440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__60366__auto____0;
taoensso$sente$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__60366__auto____1;
return taoensso$sente$state_machine__60366__auto__;
})()
})();
var state__60390__auto__ = (function (){var statearr_84467 = f__60389__auto__();
(statearr_84467[(6)] = c__60388__auto__);

return statearr_84467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60390__auto__);
}));

return c__60388__auto__;
} else {
return null;
}
}
}
}),new cljs.core.Keyword(null,"on-msg","on-msg",-2021925279),(function (server_ch,websocket_QMARK_,req_ppstr){
if(cljs.core.truth_(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: websocket?"));
}

upd_conn_BANG_(new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

var vec__84468 = taoensso.sente.unpack(packer__$1,req_ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84468,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84468,(1),null);
return receive_event_msg_BANG_(clj,(cljs.core.truth_(_QMARK_cb_uuid)?(function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",769,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
}),null)),null,502535516,null);

return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(packer__$1,resp_clj,_QMARK_cb_uuid));
}):null));
}),new cljs.core.Keyword(null,"on-close","on-close",-761178394),(function (server_ch,websocket_QMARK_,_status){
var conn_type = (cljs.core.truth_(websocket_QMARK_)?new cljs.core.Keyword(null,"ws","ws",86841443):new cljs.core.Keyword(null,"ajax","ajax",814345549));
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",778,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s channel closed: %s (%s)",(cljs.core.truth_(websocket_QMARK_)?"WebSocket":"Ajax"),uid,sch_uuid], null);
}),null)),null,-646140189,null);
var updated_conn = upd_conn_BANG_(conn_type,uid,client_id,null);
var udt_close = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var c__60388__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60389__auto__ = (function (){var switch__60365__auto__ = (function (state_84524){
var state_val_84525 = (state_84524[(1)]);
if((state_val_84525 === (7))){
var state_84524__$1 = state_84524;
var statearr_84527_85347 = state_84524__$1;
(statearr_84527_85347[(2)] = null);

(statearr_84527_85347[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84525 === (1))){
var inst_84471 = cljs.core.async.timeout((5000));
var state_84524__$1 = state_84524;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_84524__$1,(2),inst_84471);
} else {
if((state_val_84525 === (4))){
var state_84524__$1 = state_84524;
var statearr_84528_85348 = state_84524__$1;
(statearr_84528_85348[(2)] = null);

(statearr_84528_85348[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84525 === (13))){
var state_84524__$1 = state_84524;
var statearr_84530_85349 = state_84524__$1;
(statearr_84530_85349[(2)] = null);

(statearr_84530_85349[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84525 === (6))){
var inst_84483 = (state_84524[(7)]);
var inst_84501 = (state_84524[(8)]);
var inst_84481 = (state_84524[(9)]);
var inst_84482 = (state_84524[(10)]);
var inst_84496 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_84497 = [conn_type,uid,client_id];
var inst_84498 = (new cljs.core.PersistentVector(null,3,(5),inst_84496,inst_84497,null));
var inst_84500 = (function (){var vec__84474 = inst_84481;
var __QMARK_sch = inst_84482;
var udt_t1 = inst_84483;
return (function (p__84499){
var vec__84532 = p__84499;
var _sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84532,(0),null);
var udt_t1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84532,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(udt_t1__$1,udt_close)){
return taoensso.encore.swapped(new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),true);
} else {
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_sch,udt_t1__$1], null),false);
}
});
})();
var inst_84501__$1 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_84498,inst_84500);
var state_84524__$1 = (function (){var statearr_84536 = state_84524;
(statearr_84536[(8)] = inst_84501__$1);

return statearr_84536;
})();
if(cljs.core.truth_(inst_84501__$1)){
var statearr_84537_85350 = state_84524__$1;
(statearr_84537_85350[(1)] = (9));

} else {
var statearr_84538_85351 = state_84524__$1;
(statearr_84538_85351[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84525 === (3))){
var inst_84483 = (state_84524[(7)]);
var inst_84481 = (state_84524[(9)]);
var inst_84482 = (state_84524[(10)]);
var inst_84487 = (function (){var vec__84474 = inst_84481;
var __QMARK_sch = inst_84482;
var udt_t1 = inst_84483;
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["close-timeout: %s %s %s %s",conn_type,uid,sch_uuid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(udt_t1,udt_close),udt_t1,udt_close], null)], null);
});
})();
var inst_84488 = (new cljs.core.Delay(inst_84487,null));
var inst_84489 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",792,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_84488,null,1406451976,null);
var state_84524__$1 = state_84524;
var statearr_84540_85352 = state_84524__$1;
(statearr_84540_85352[(2)] = inst_84489);

(statearr_84540_85352[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84525 === (12))){
var inst_84510 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_84511 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678),uid];
var inst_84512 = (new cljs.core.PersistentVector(null,2,(5),inst_84510,inst_84511,null));
var inst_84513 = receive_event_msg_BANG_(inst_84512);
var state_84524__$1 = state_84524;
var statearr_84542_85353 = state_84524__$1;
(statearr_84542_85353[(2)] = inst_84513);

(statearr_84542_85353[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84525 === (2))){
var inst_84481 = (state_84524[(9)]);
var inst_84473 = (state_84524[(2)]);
var inst_84477 = cljs.core.deref(conns_);
var inst_84478 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_84479 = [conn_type,uid,client_id];
var inst_84480 = (new cljs.core.PersistentVector(null,3,(5),inst_84478,inst_84479,null));
var inst_84481__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_84477,inst_84480);
var inst_84482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_84481__$1,(0),null);
var inst_84483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_84481__$1,(1),null);
var inst_84484 = cljs.core.deref(taoensso.sente.debug_mode_QMARK__);
var state_84524__$1 = (function (){var statearr_84543 = state_84524;
(statearr_84543[(7)] = inst_84483);

(statearr_84543[(9)] = inst_84481__$1);

(statearr_84543[(11)] = inst_84473);

(statearr_84543[(10)] = inst_84482);

return statearr_84543;
})();
if(cljs.core.truth_(inst_84484)){
var statearr_84544_85354 = state_84524__$1;
(statearr_84544_85354[(1)] = (3));

} else {
var statearr_84545_85355 = state_84524__$1;
(statearr_84545_85355[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84525 === (11))){
var inst_84519 = (state_84524[(2)]);
var state_84524__$1 = state_84524;
var statearr_84546_85356 = state_84524__$1;
(statearr_84546_85356[(2)] = inst_84519);

(statearr_84546_85356[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84525 === (9))){
var inst_84483 = (state_84524[(7)]);
var inst_84501 = (state_84524[(8)]);
var inst_84481 = (state_84524[(9)]);
var inst_84482 = (state_84524[(10)]);
var inst_84503 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_84504 = [conn_type,uid];
var inst_84505 = (new cljs.core.PersistentVector(null,2,(5),inst_84503,inst_84504,null));
var inst_84506 = (function (){var vec__84474 = inst_84481;
var __QMARK_sch = inst_84482;
var udt_t1 = inst_84483;
var disconnect_QMARK_ = inst_84501;
return (function (_QMARK_m){
if(cljs.core.empty_QMARK_(_QMARK_m)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return _QMARK_m;
}
});
})();
var inst_84507 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_84505,inst_84506);
var inst_84508 = upd_connected_uid_BANG_(uid);
var state_84524__$1 = (function (){var statearr_84547 = state_84524;
(statearr_84547[(12)] = inst_84507);

return statearr_84547;
})();
if(cljs.core.truth_(inst_84508)){
var statearr_84548_85357 = state_84524__$1;
(statearr_84548_85357[(1)] = (12));

} else {
var statearr_84549_85358 = state_84524__$1;
(statearr_84549_85358[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84525 === (5))){
var inst_84483 = (state_84524[(7)]);
var inst_84493 = (state_84524[(2)]);
var inst_84494 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_84483,udt_close);
var state_84524__$1 = (function (){var statearr_84551 = state_84524;
(statearr_84551[(13)] = inst_84493);

return statearr_84551;
})();
if(inst_84494){
var statearr_84552_85359 = state_84524__$1;
(statearr_84552_85359[(1)] = (6));

} else {
var statearr_84553_85360 = state_84524__$1;
(statearr_84553_85360[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84525 === (14))){
var inst_84516 = (state_84524[(2)]);
var state_84524__$1 = state_84524;
var statearr_84554_85361 = state_84524__$1;
(statearr_84554_85361[(2)] = inst_84516);

(statearr_84554_85361[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84525 === (10))){
var state_84524__$1 = state_84524;
var statearr_84555_85362 = state_84524__$1;
(statearr_84555_85362[(2)] = null);

(statearr_84555_85362[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84525 === (8))){
var inst_84522 = (state_84524[(2)]);
var state_84524__$1 = state_84524;
return cljs.core.async.impl.ioc_helpers.return_chan(state_84524__$1,inst_84522);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var taoensso$sente$state_machine__60366__auto__ = null;
var taoensso$sente$state_machine__60366__auto____0 = (function (){
var statearr_84558 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_84558[(0)] = taoensso$sente$state_machine__60366__auto__);

(statearr_84558[(1)] = (1));

return statearr_84558;
});
var taoensso$sente$state_machine__60366__auto____1 = (function (state_84524){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_84524);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e84559){var ex__60369__auto__ = e84559;
var statearr_84560_85363 = state_84524;
(statearr_84560_85363[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_84524[(4)]))){
var statearr_84562_85364 = state_84524;
(statearr_84562_85364[(1)] = cljs.core.first((state_84524[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__85365 = state_84524;
state_84524 = G__85365;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
taoensso$sente$state_machine__60366__auto__ = function(state_84524){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__60366__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__60366__auto____1.call(this,state_84524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__60366__auto____0;
taoensso$sente$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__60366__auto____1;
return taoensso$sente$state_machine__60366__auto__;
})()
})();
var state__60390__auto__ = (function (){var statearr_84563 = f__60389__auto__();
(statearr_84563[(6)] = c__60388__auto__);

return statearr_84563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60390__auto__);
}));

return c__60388__auto__;
}),new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (server_ch,websocket_QMARK_,error){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",814,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ring-req->server-ch-resp error: %s (%s)",error,uid,sch_uuid], null);
}),null)),null,1177103755,null);
})], null));
}
}
})], null);
}));

(taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq84101){
var G__84102 = cljs.core.first(seq84101);
var seq84101__$1 = cljs.core.next(seq84101);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__84102,seq84101__$1);
}));

/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr,upd_conn_BANG_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",820,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null,-1990014163,null);

var seq__84566 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null)));
var chunk__84567 = null;
var count__84568 = (0);
var i__84569 = (0);
while(true){
if((i__84569 < count__84568)){
var vec__84590 = chunk__84567.cljs$core$IIndexed$_nth$arity$2(null,i__84569);
var client_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84590,(0),null);
var vec__84593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84590,(1),null);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84593,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84593,(1),null);
var temp__5753__auto___85366 = _QMARK_sch;
if(cljs.core.truth_(temp__5753__auto___85366)){
var sch_85367 = temp__5753__auto___85366;
(upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3 ? upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id) : upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id));

taoensso.sente.interfaces.sch_send_BANG_(sch_85367,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}


var G__85368 = seq__84566;
var G__85369 = chunk__84567;
var G__85370 = count__84568;
var G__85371 = (i__84569 + (1));
seq__84566 = G__85368;
chunk__84567 = G__85369;
count__84568 = G__85370;
i__84569 = G__85371;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__84566);
if(temp__5753__auto__){
var seq__84566__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__84566__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__84566__$1);
var G__85372 = cljs.core.chunk_rest(seq__84566__$1);
var G__85373 = c__4556__auto__;
var G__85374 = cljs.core.count(c__4556__auto__);
var G__85375 = (0);
seq__84566 = G__85372;
chunk__84567 = G__85373;
count__84568 = G__85374;
i__84569 = G__85375;
continue;
} else {
var vec__84599 = cljs.core.first(seq__84566__$1);
var client_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84599,(0),null);
var vec__84602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84599,(1),null);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84602,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84602,(1),null);
var temp__5753__auto___85376__$1 = _QMARK_sch;
if(cljs.core.truth_(temp__5753__auto___85376__$1)){
var sch_85377 = temp__5753__auto___85376__$1;
(upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3 ? upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id) : upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id));

taoensso.sente.interfaces.sch_send_BANG_(sch_85377,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}


var G__85378 = cljs.core.next(seq__84566__$1);
var G__85379 = null;
var G__85380 = (0);
var G__85381 = (0);
seq__84566 = G__85378;
chunk__84567 = G__85379;
count__84568 = G__85380;
i__84569 = G__85381;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's Ajax conns.
 *   Allows some time for possible Ajax poller reconnects.
 */
taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG_(conns_,uid,buffered_evs_pstr){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",830,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
}),null)),null,-384129702,null);

var ms_backoffs = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(90),(180),(360),(720),(1440)], null);
var client_ids_unsatisfied = cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid], null)));
if(cljs.core.empty_QMARK_(client_ids_unsatisfied)){
return null;
} else {
var c__60388__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60389__auto__ = (function (){var switch__60365__auto__ = (function (state_84664){
var state_val_84665 = (state_84664[(1)]);
if((state_val_84665 === (7))){
var inst_84622 = (state_84664[(7)]);
var inst_84613 = (state_84664[(8)]);
var inst_84612 = (state_84664[(9)]);
var inst_84632 = (function (){var n = inst_84612;
var client_ids_satisfied = inst_84613;
var _QMARK_pulled = inst_84622;
return (function (s,client_id,p__84631){
var vec__84666 = p__84631;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84666,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84666,(1),null);
var sent_QMARK_ = (function (){var temp__5753__auto__ = _QMARK_sch;
if(cljs.core.truth_(temp__5753__auto__)){
var sch = temp__5753__auto__;
return taoensso.sente.interfaces.sch_send_BANG_(_QMARK_sch,cljs.core.not(new cljs.core.Keyword(null,"websocket","websocket",-1714963101)),buffered_evs_pstr);
} else {
return null;
}
})();
if(cljs.core.truth_(sent_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s,client_id);
} else {
return s;
}
});
})();
var inst_84633 = cljs.core.PersistentHashSet.EMPTY;
var inst_84634 = cljs.core.reduce_kv(inst_84632,inst_84633,inst_84622);
var state_84664__$1 = state_84664;
var statearr_84673_85382 = state_84664__$1;
(statearr_84673_85382[(2)] = inst_84634);

(statearr_84673_85382[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84665 === (1))){
var inst_84611 = cljs.core.PersistentHashSet.EMPTY;
var inst_84612 = (0);
var inst_84613 = inst_84611;
var state_84664__$1 = (function (){var statearr_84674 = state_84664;
(statearr_84674[(8)] = inst_84613);

(statearr_84674[(9)] = inst_84612);

return statearr_84674;
})();
var statearr_84675_85383 = state_84664__$1;
(statearr_84675_85383[(2)] = null);

(statearr_84675_85383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84665 === (4))){
var state_84664__$1 = state_84664;
var statearr_84676_85384 = state_84664__$1;
(statearr_84676_85384[(2)] = true);

(statearr_84676_85384[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84665 === (15))){
var inst_84656 = (state_84664[(2)]);
var state_84664__$1 = state_84664;
var statearr_84677_85385 = state_84664__$1;
(statearr_84677_85385[(2)] = inst_84656);

(statearr_84677_85385[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84665 === (13))){
var inst_84639 = (state_84664[(10)]);
var inst_84645 = cljs.core.rand_int(inst_84639);
var inst_84646 = (inst_84639 + inst_84645);
var inst_84647 = cljs.core.async.timeout(inst_84646);
var state_84664__$1 = state_84664;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_84664__$1,(16),inst_84647);
} else {
if((state_val_84665 === (6))){
var inst_84622 = (state_84664[(7)]);
var inst_84629 = (state_84664[(2)]);
var state_84664__$1 = (function (){var statearr_84682 = state_84664;
(statearr_84682[(11)] = inst_84629);

return statearr_84682;
})();
if(cljs.core.truth_(inst_84622)){
var statearr_84683_85386 = state_84664__$1;
(statearr_84683_85386[(1)] = (7));

} else {
var statearr_84684_85387 = state_84664__$1;
(statearr_84684_85387[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84665 === (3))){
var inst_84661 = (state_84664[(2)]);
var state_84664__$1 = state_84664;
return cljs.core.async.impl.ioc_helpers.return_chan(state_84664__$1,inst_84661);
} else {
if((state_val_84665 === (12))){
var inst_84659 = (state_84664[(2)]);
var state_84664__$1 = state_84664;
var statearr_84685_85388 = state_84664__$1;
(statearr_84685_85388[(2)] = inst_84659);

(statearr_84685_85388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84665 === (2))){
var inst_84622 = (state_84664[(7)]);
var inst_84613 = (state_84664[(8)]);
var inst_84612 = (state_84664[(9)]);
var inst_84617 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_84618 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_84619 = (new cljs.core.PersistentVector(null,2,(5),inst_84617,inst_84618,null));
var inst_84621 = (function (){var n = inst_84612;
var client_ids_satisfied = inst_84613;
return (function (m){
var ks_to_pull = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(client_ids_satisfied,cljs.core.keys(m));
if(cljs.core.empty_QMARK_(ks_to_pull)){
return taoensso.encore.swapped(m,null);
} else {
return taoensso.encore.swapped(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,k){
var vec__84690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84690,(0),null);
var udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84690,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt], null));
}),m,ks_to_pull),cljs.core.select_keys(m,ks_to_pull));
}
});
})();
var inst_84622__$1 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_84619,inst_84621);
var inst_84623 = (function (){var n = inst_84612;
var client_ids_satisfied = inst_84613;
var _QMARK_pulled = inst_84622__$1;
return (function (x){
var or__4126__auto__ = (x == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return taoensso.truss.impl.non_throwing(cljs.core.map_QMARK_)(x);
}
});
})();
var inst_84624 = inst_84623(inst_84622__$1);
var state_84664__$1 = (function (){var statearr_84696 = state_84664;
(statearr_84696[(7)] = inst_84622__$1);

return statearr_84696;
})();
if(cljs.core.truth_(inst_84624)){
var statearr_84698_85389 = state_84664__$1;
(statearr_84698_85389[(1)] = (4));

} else {
var statearr_84699_85390 = state_84664__$1;
(statearr_84699_85390[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84665 === (11))){
var state_84664__$1 = state_84664;
var statearr_84700_85391 = state_84664__$1;
(statearr_84700_85391[(2)] = null);

(statearr_84700_85391[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84665 === (9))){
var inst_84639 = (state_84664[(10)]);
var inst_84613 = (state_84664[(8)]);
var inst_84612 = (state_84664[(9)]);
var inst_84637 = (state_84664[(2)]);
var inst_84638 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_84613,inst_84637);
var inst_84639__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ms_backoffs,inst_84612);
var state_84664__$1 = (function (){var statearr_84701 = state_84664;
(statearr_84701[(10)] = inst_84639__$1);

(statearr_84701[(12)] = inst_84638);

return statearr_84701;
})();
if(cljs.core.truth_(inst_84639__$1)){
var statearr_84702_85392 = state_84664__$1;
(statearr_84702_85392[(1)] = (10));

} else {
var statearr_84704_85393 = state_84664__$1;
(statearr_84704_85393[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84665 === (5))){
var inst_84622 = (state_84664[(7)]);
var inst_84627 = taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",857,"([:or nil? map?] ?pulled)",inst_84622,null,null);
var state_84664__$1 = state_84664;
var statearr_84708_85394 = state_84664__$1;
(statearr_84708_85394[(2)] = inst_84627);

(statearr_84708_85394[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84665 === (14))){
var state_84664__$1 = state_84664;
var statearr_84709_85395 = state_84664__$1;
(statearr_84709_85395[(2)] = null);

(statearr_84709_85395[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84665 === (16))){
var inst_84612 = (state_84664[(9)]);
var inst_84638 = (state_84664[(12)]);
var inst_84649 = (state_84664[(2)]);
var inst_84651 = (inst_84612 + (1));
var inst_84612__$1 = inst_84651;
var inst_84613 = inst_84638;
var state_84664__$1 = (function (){var statearr_84710 = state_84664;
(statearr_84710[(8)] = inst_84613);

(statearr_84710[(13)] = inst_84649);

(statearr_84710[(9)] = inst_84612__$1);

return statearr_84710;
})();
var statearr_84711_85396 = state_84664__$1;
(statearr_84711_85396[(2)] = null);

(statearr_84711_85396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84665 === (10))){
var inst_84638 = (state_84664[(12)]);
var inst_84641 = cljs.core.complement(inst_84638);
var inst_84642 = taoensso.encore.rsome(inst_84641,client_ids_unsatisfied);
var state_84664__$1 = state_84664;
if(cljs.core.truth_(inst_84642)){
var statearr_84713_85397 = state_84664__$1;
(statearr_84713_85397[(1)] = (13));

} else {
var statearr_84716_85398 = state_84664__$1;
(statearr_84716_85398[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84665 === (8))){
var state_84664__$1 = state_84664;
var statearr_84718_85399 = state_84664__$1;
(statearr_84718_85399[(2)] = null);

(statearr_84718_85399[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__60366__auto__ = null;
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__60366__auto____0 = (function (){
var statearr_84719 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_84719[(0)] = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__60366__auto__);

(statearr_84719[(1)] = (1));

return statearr_84719;
});
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__60366__auto____1 = (function (state_84664){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_84664);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e84720){var ex__60369__auto__ = e84720;
var statearr_84721_85400 = state_84664;
(statearr_84721_85400[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_84664[(4)]))){
var statearr_84722_85401 = state_84664;
(statearr_84722_85401[(1)] = cljs.core.first((state_84664[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__85402 = state_84664;
state_84664 = G__85402;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__60366__auto__ = function(state_84664){
switch(arguments.length){
case 0:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__60366__auto____0.call(this);
case 1:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__60366__auto____1.call(this,state_84664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__60366__auto____0;
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__60366__auto____1;
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__60366__auto__;
})()
})();
var state__60390__auto__ = (function (){var statearr_84727 = f__60389__auto__();
(statearr_84727[(6)] = c__60388__auto__);

return statearr_84727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60390__auto__);
}));

return c__60388__auto__;
}
});
/**
 * Alias of `taoensso.encore/ajax-lite`
 */
taoensso.sente.ajax_lite = taoensso.encore.ajax_lite;

/**
 * @interface
 */
taoensso.sente.IChSocket = function(){};

var taoensso$sente$IChSocket$_chsk_connect_BANG_$dyn_85403 = (function (chsk){
var x__4428__auto__ = (((chsk == null))?null:chsk);
var m__4429__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__4429__auto__.call(null,chsk));
} else {
var m__4426__auto__ = (taoensso.sente._chsk_connect_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__4426__auto__.call(null,chsk));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-connect!",chsk);
}
}
});
taoensso.sente._chsk_connect_BANG_ = (function taoensso$sente$_chsk_connect_BANG_(chsk){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(chsk);
} else {
return taoensso$sente$IChSocket$_chsk_connect_BANG_$dyn_85403(chsk);
}
});

var taoensso$sente$IChSocket$_chsk_disconnect_BANG_$dyn_85404 = (function (chsk,reason){
var x__4428__auto__ = (((chsk == null))?null:chsk);
var m__4429__auto__ = (taoensso.sente._chsk_disconnect_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(chsk,reason) : m__4429__auto__.call(null,chsk,reason));
} else {
var m__4426__auto__ = (taoensso.sente._chsk_disconnect_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(chsk,reason) : m__4426__auto__.call(null,chsk,reason));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-disconnect!",chsk);
}
}
});
taoensso.sente._chsk_disconnect_BANG_ = (function taoensso$sente$_chsk_disconnect_BANG_(chsk,reason){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(chsk,reason);
} else {
return taoensso$sente$IChSocket$_chsk_disconnect_BANG_$dyn_85404(chsk,reason);
}
});

var taoensso$sente$IChSocket$_chsk_reconnect_BANG_$dyn_85405 = (function (chsk){
var x__4428__auto__ = (((chsk == null))?null:chsk);
var m__4429__auto__ = (taoensso.sente._chsk_reconnect_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__4429__auto__.call(null,chsk));
} else {
var m__4426__auto__ = (taoensso.sente._chsk_reconnect_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__4426__auto__.call(null,chsk));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-reconnect!",chsk);
}
}
});
taoensso.sente._chsk_reconnect_BANG_ = (function taoensso$sente$_chsk_reconnect_BANG_(chsk){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1(chsk);
} else {
return taoensso$sente$IChSocket$_chsk_reconnect_BANG_$dyn_85405(chsk);
}
});

var taoensso$sente$IChSocket$_chsk_send_BANG_$dyn_85406 = (function (chsk,ev,opts){
var x__4428__auto__ = (((chsk == null))?null:chsk);
var m__4429__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(chsk,ev,opts) : m__4429__auto__.call(null,chsk,ev,opts));
} else {
var m__4426__auto__ = (taoensso.sente._chsk_send_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(chsk,ev,opts) : m__4426__auto__.call(null,chsk,ev,opts));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-send!",chsk);
}
}
});
taoensso.sente._chsk_send_BANG_ = (function taoensso$sente$_chsk_send_BANG_(chsk,ev,opts){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(chsk,ev,opts);
} else {
return taoensso$sente$IChSocket$_chsk_send_BANG_$dyn_85406(chsk,ev,opts);
}
});

taoensso.sente.chsk_connect_BANG_ = (function taoensso$sente$chsk_connect_BANG_(chsk){
return taoensso.sente._chsk_connect_BANG_(chsk);
});
taoensso.sente.chsk_disconnect_BANG_ = (function taoensso$sente$chsk_disconnect_BANG_(chsk){
return taoensso.sente._chsk_disconnect_BANG_(chsk,new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641));
});
/**
 * Useful for reauthenticating after login/logout, etc.
 */
taoensso.sente.chsk_reconnect_BANG_ = (function taoensso$sente$chsk_reconnect_BANG_(chsk){
return taoensso.sente._chsk_reconnect_BANG_(chsk);
});
/**
 * Deprecated
 */
taoensso.sente.chsk_destroy_BANG_ = taoensso.sente.chsk_disconnect_BANG_;
/**
 * Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
 */
taoensso.sente.chsk_send_BANG_ = (function taoensso$sente$chsk_send_BANG_(var_args){
var G__84743 = arguments.length;
switch (G__84743) {
case 2:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
}));

(taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
}));

(taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",904,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$(new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null,-1812836768,null);

return taoensso.sente._chsk_send_BANG_(chsk,ev,opts);
}));

(taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4);

taoensso.sente.chsk_send__GT_closed_BANG_ = (function taoensso$sente$chsk_send__GT_closed_BANG_(_QMARK_cb_fn){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",908,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
}),null)),null,-453761850,null);

if(cljs.core.truth_(_QMARK_cb_fn)){
(_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264)) : _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264)));
} else {
}

return false;
});
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event(x);

if((((((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null)))) || (taoensso.encore.nat_int_QMARK_(_QMARK_timeout_ms)))){
} else {
throw (new Error(["Assert failed: ",["cb requires a timeout; timeout-ms should be a +ive integer: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_timeout_ms)].join(''),"\n","(or (and (nil? ?timeout-ms) (nil? ?cb)) (and (enc/nat-int? ?timeout-ms)))"].join('')));
}

if((((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_(_QMARK_cb)) || (taoensso.encore.chan_QMARK_(_QMARK_cb)))){
return null;
} else {
throw (new Error(["Assert failed: ",["cb should be nil, an ifn, or a channel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(_QMARK_cb))].join(''),"\n","(or (nil? ?cb) (ifn? ?cb) (enc/chan? ?cb))"].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function taoensso$sente$pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){
var temp__5753__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5753__auto__)){
var cb_uuid = temp__5753__auto__;
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid], null),(function (_QMARK_f){
return taoensso.encore.swapped(new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),_QMARK_f);
}));
} else {
return null;
}
});
/**
 * Atomically swaps the value of chk's :state_ atom.
 */
taoensso.sente.swap_chsk_state_BANG_ = (function taoensso$sente$swap_chsk_state_BANG_(chsk,f){
var vec__84754 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),(function (old_state){
var new_state = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old_state) : f.call(null,old_state));
var new_state__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(old_state))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),false):new_state);
var new_state__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state__$1))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new_state__$1,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)):new_state__$1);
return taoensso.encore.swapped(new_state__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$2], null));
}));
var old_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84754,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84754,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_state,new_state)){
var output = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(chsk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"state","state",-1988618099)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),output], null));

return output;
} else {
return null;
}
});
taoensso.sente.chsk_state__GT_closed = (function taoensso$sente$chsk_state__GT_closed(state,reason){
var e_85408 = (function (){try{if(cljs.core.map_QMARK_(state)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e84765){if((e84765 instanceof Error)){
var e_85408 = e84765;
return e_85408;
} else {
throw e84765;

}
}})();
if((e_85408 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",951,"(map? state)",state,e_85408,null);
}

var e_85409 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_((function (){var G__84768 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641),null,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720),null,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707),null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__84768) : taoensso.truss.impl.set_STAR_.call(null,G__84768));
})(),x);
})(reason)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e84767){if((e84767 instanceof Error)){
var e_85409 = e84767;
return e_85409;
} else {
throw e84767;

}
}})();
if((e_85409 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",952,"([:el #{:requested-disconnect :downgrading-ws-to-ajax :unexpected :requested-reconnect}] reason)",reason,e_85409,null);
}

if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(reason,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)),new cljs.core.Keyword(null,"open?","open?",1238443125),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"last-close","last-close",-2054255782),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null)], 0));
} else {
return state;
}
});
/**
 * Experimental, undocumented. Allows a core.async channel to be provided
 *   instead of a cb-fn. The channel will receive values of form
 *   [<event-id>.cb <reply>].
 */
taoensso.sente.cb_chan_as_fn = (function taoensso$sente$cb_chan_as_fn(_QMARK_cb,ev){
if((((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_(_QMARK_cb)))){
return _QMARK_cb;
} else {
var e_85410 = (function (){try{if(taoensso.encore.chan_QMARK_(_QMARK_cb)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e84772){if((e84772 instanceof Error)){
var e_85410 = e84772;
return e_85410;
} else {
throw e84772;

}
}})();
if((e_85410 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",972,"(enc/chan? ?cb)",_QMARK_cb,e_85410,null);
}

taoensso.sente.assert_event(ev);

var vec__84776 = ev;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84776,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84776,(1),null);
var cb_ch = _QMARK_cb;
return (function (reply){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([taoensso.encore.as_qname(ev_id),".cb"].join('')),reply], null));
});
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",982,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null,525580691,null);

var buffered_evs = ((cljs.core.vector_QMARK_(clj))?clj:taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",983,"(vector? clj)",clj,null,null));
var seq__84782 = cljs.core.seq(buffered_evs);
var chunk__84783 = null;
var count__84784 = (0);
var i__84785 = (0);
while(true){
if((i__84785 < count__84784)){
var ev = chunk__84783.cljs$core$IIndexed$_nth$arity$2(null,i__84785);
taoensso.sente.assert_event(ev);

var vec__84798_85411 = ev;
var id_85412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84798_85411,(0),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(id_85412),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);


var G__85413 = seq__84782;
var G__85414 = chunk__84783;
var G__85415 = count__84784;
var G__85416 = (i__84785 + (1));
seq__84782 = G__85413;
chunk__84783 = G__85414;
count__84784 = G__85415;
i__84785 = G__85416;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__84782);
if(temp__5753__auto__){
var seq__84782__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__84782__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__84782__$1);
var G__85417 = cljs.core.chunk_rest(seq__84782__$1);
var G__85418 = c__4556__auto__;
var G__85419 = cljs.core.count(c__4556__auto__);
var G__85420 = (0);
seq__84782 = G__85417;
chunk__84783 = G__85418;
count__84784 = G__85419;
i__84785 = G__85420;
continue;
} else {
var ev = cljs.core.first(seq__84782__$1);
taoensso.sente.assert_event(ev);

var vec__84804_85421 = ev;
var id_85422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84804_85421,(0),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(id_85422),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);


var G__85423 = cljs.core.next(seq__84782__$1);
var G__85424 = null;
var G__85425 = (0);
var G__85426 = (0);
seq__84782 = G__85423;
chunk__84783 = G__85424;
count__84784 = G__85425;
i__84785 = G__85426;
continue;
}
} else {
return null;
}
}
break;
}
});
taoensso.sente.handshake_QMARK_ = (function taoensso$sente$handshake_QMARK_(x){
if(cljs.core.vector_QMARK_(x)){
var vec__84813 = x;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84813,(0),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x1,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686));
} else {
return false;
}
});
taoensso.sente.receive_handshake_BANG_ = (function taoensso$sente$receive_handshake_BANG_(chsk_type,chsk,clj){
var e_85427 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_((function (){var G__84823 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__84823) : taoensso.truss.impl.set_STAR_.call(null,G__84823));
})(),x);
})(chsk_type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e84820){if((e84820 instanceof Error)){
var e_85427 = e84820;
return e_85427;
} else {
throw e84820;

}
}})();
if((e_85427 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",995,"([:el #{:ws :ajax}] chsk-type)",chsk_type,e_85427,null);
}

var e_85428 = (function (){try{if(taoensso.sente.handshake_QMARK_(clj)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e84825){if((e84825 instanceof Error)){
var e_85428 = e84825;
return e_85428;
} else {
throw e84825;

}
}})();
if((e_85428 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",996,"(handshake? clj)",clj,e_85428,null);
}

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",997,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-handshake! (%s): %s",chsk_type,clj], null);
}),null)),null,-1689691670,null);

var vec__84826 = clj;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84826,(0),null);
var vec__84829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84826,(1),null);
var _QMARK_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84829,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84829,(1),null);
var _QMARK_handshake_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84829,(2),null);
var map__84832 = chsk;
var map__84832__$1 = (((((!((map__84832 == null))))?(((((map__84832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__84832):map__84832);
var chs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84832__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var ever_opened_QMARK__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84832__$1,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913));
var first_handshake_QMARK_ = cljs.core.compare_and_set_BANG_(ever_opened_QMARK__,false,true);
var new_state = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),chsk_type,new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"handshake-data","handshake-data",-278378864),_QMARK_handshake_data,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),first_handshake_QMARK_], null);
var handshake_ev = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_uid,null,_QMARK_handshake_data,first_handshake_QMARK_], null)], null);
taoensso.sente.assert_event(handshake_ev);

taoensso.sente.swap_chsk_state_BANG_(chsk,(function (p1__84818_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__84818_SHARP_,new_state], 0));
}));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(chs),handshake_ev);

return new cljs.core.Keyword(null,"handled","handled",1889700151);
});
/**
 * nnil iff the websocket npm library[1] is available.
 *   Easiest way to install:
 *     1. Add the lein-npm[2] plugin to your `project.clj`,
 *     2. Add: `:npm {:dependencies [[websocket "1.0.23"]]}`
 * 
 *   [1] Ref. https://www.npmjs.com/package/websocket
 *   [2] Ref. https://github.com/RyanMcG/lein-npm
 */
taoensso.sente._QMARK_node_npm_websocket_ = (function (){var make_package_name = (function (prefix){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"socket"].join('');
});
var require_fn = (((typeof require !== 'undefined'))?require:cljs.core.constantly(new cljs.core.Keyword(null,"no-op","no-op",-93046065)));
return (new cljs.core.Delay((function (){
if(((taoensso.sente.node_target_QMARK_) && ((typeof require !== 'undefined')))){
try{var G__84859 = make_package_name("web");
return (require_fn.cljs$core$IFn$_invoke$arity$1 ? require_fn.cljs$core$IFn$_invoke$arity$1(G__84859) : require_fn.call(null,G__84859));
}catch (e84858){var e = e84858;
return null;
}} else {
return null;
}
}),null));
})();
taoensso.sente.create_js_client_websocket_BANG_ = (function taoensso$sente$create_js_client_websocket_BANG_(p__84860){
var map__84861 = p__84860;
var map__84861__$1 = (((((!((map__84861 == null))))?(((((map__84861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__84861):map__84861);
var opts = map__84861__$1;
var onerror_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84861__$1,new cljs.core.Keyword(null,"onerror-fn","onerror-fn",1069372505));
var onmessage_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84861__$1,new cljs.core.Keyword(null,"onmessage-fn","onmessage-fn",1633804172));
var onclose_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84861__$1,new cljs.core.Keyword(null,"onclose-fn","onclose-fn",-1388163785));
var uri_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84861__$1,new cljs.core.Keyword(null,"uri-str","uri-str",304128675));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84861__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var temp__5753__auto__ = (function (){var or__4126__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(goog.global,"WebSocket");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(goog.global,"MozWebSocket");
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(taoensso.sente._QMARK_node_npm_websocket_),"w3cwebsocket");
}
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var WebSocket = temp__5753__auto__;
var socket = (new WebSocket(uri_str));
var G__84863_85429 = socket;
(G__84863_85429["onerror"] = onerror_fn);

(G__84863_85429["onmessage"] = onmessage_fn);

(G__84863_85429["onclose"] = onclose_fn);


return socket;
} else {
return null;
}
});
taoensso.sente.create_websocket_BANG_ = (function taoensso$sente$create_websocket_BANG_(p__84864){
var map__84865 = p__84864;
var map__84865__$1 = (((((!((map__84865 == null))))?(((((map__84865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__84865):map__84865);
var opts = map__84865__$1;
var onerror_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84865__$1,new cljs.core.Keyword(null,"onerror-fn","onerror-fn",1069372505));
var onmessage_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84865__$1,new cljs.core.Keyword(null,"onmessage-fn","onmessage-fn",1633804172));
var onclose_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84865__$1,new cljs.core.Keyword(null,"onclose-fn","onclose-fn",-1388163785));
var uri_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84865__$1,new cljs.core.Keyword(null,"uri-str","uri-str",304128675));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84865__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
return taoensso.sente.create_js_client_websocket_BANG_(opts);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChWebSocket = (function (client_id,chs,params,headers,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.headers = headers;
this.packer = packer;
this.url = url;
this.ws_kalive_ms = ws_kalive_ms;
this.state_ = state_;
this.instance_handle_ = instance_handle_;
this.retry_count_ = retry_count_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.cbs_waiting_ = cbs_waiting_;
this.socket_ = socket_;
this.udt_last_comms_ = udt_last_comms_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k84874,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__84878 = k84874;
var G__84878__$1 = (((G__84878 instanceof cljs.core.Keyword))?G__84878.fqn:null);
switch (G__84878__$1) {
case "client-id":
return self__.client_id;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "headers":
return self__.headers;

break;
case "packer":
return self__.packer;

break;
case "url":
return self__.url;

break;
case "ws-kalive-ms":
return self__.ws_kalive_ms;

break;
case "state_":
return self__.state_;

break;
case "instance-handle_":
return self__.instance_handle_;

break;
case "retry-count_":
return self__.retry_count_;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "cbs-waiting_":
return self__.cbs_waiting_;

break;
case "socket_":
return self__.socket_;

break;
case "udt-last-comms_":
return self__.udt_last_comms_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k84874,else__4383__auto__);

}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__84879){
var vec__84880 = p__84879;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84880,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84880,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"headers","headers",-835030129),self__.headers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_],null))], null),self__.__extmap));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__84873){
var self__ = this;
var G__84873__$1 = this;
return (new cljs.core.RecordIter((0),G__84873__$1,15,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (15 + cljs.core.count(self__.__extmap));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1998688700 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this84875,other84876){
var self__ = this;
var this84875__$1 = this;
return (((!((other84876 == null)))) && ((this84875__$1.constructor === other84876.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this84875__$1.client_id,other84876.client_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this84875__$1.chs,other84876.chs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this84875__$1.params,other84876.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this84875__$1.headers,other84876.headers)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this84875__$1.packer,other84876.packer)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this84875__$1.url,other84876.url)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this84875__$1.ws_kalive_ms,other84876.ws_kalive_ms)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this84875__$1.state_,other84876.state_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this84875__$1.instance_handle_,other84876.instance_handle_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this84875__$1.retry_count_,other84876.retry_count_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this84875__$1.ever_opened_QMARK__,other84876.ever_opened_QMARK__)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this84875__$1.backoff_ms_fn,other84876.backoff_ms_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this84875__$1.cbs_waiting_,other84876.cbs_waiting_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this84875__$1.socket_,other84876.socket_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this84875__$1.udt_last_comms_,other84876.udt_last_comms_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this84875__$1.__extmap,other84876.__extmap)));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, [new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),null,new cljs.core.Keyword(null,"headers","headers",-835030129),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__84873){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__84883 = cljs.core.keyword_identical_QMARK_;
var expr__84884 = k__4388__auto__;
if(cljs.core.truth_((pred__84883.cljs$core$IFn$_invoke$arity$2 ? pred__84883.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__84884) : pred__84883.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__84884)))){
return (new taoensso.sente.ChWebSocket(G__84873,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__84883.cljs$core$IFn$_invoke$arity$2 ? pred__84883.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"chs","chs",376886120),expr__84884) : pred__84883.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__84884)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__84873,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__84883.cljs$core$IFn$_invoke$arity$2 ? pred__84883.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__84884) : pred__84883.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__84884)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__84873,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__84883.cljs$core$IFn$_invoke$arity$2 ? pred__84883.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"headers","headers",-835030129),expr__84884) : pred__84883.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129),expr__84884)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__84873,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__84883.cljs$core$IFn$_invoke$arity$2 ? pred__84883.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"packer","packer",66077544),expr__84884) : pred__84883.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__84884)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,G__84873,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__84883.cljs$core$IFn$_invoke$arity$2 ? pred__84883.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046),expr__84884) : pred__84883.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__84884)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,G__84873,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__84883.cljs$core$IFn$_invoke$arity$2 ? pred__84883.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),expr__84884) : pred__84883.call(null,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),expr__84884)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,G__84873,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__84883.cljs$core$IFn$_invoke$arity$2 ? pred__84883.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state_","state_",957667102),expr__84884) : pred__84883.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__84884)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,G__84873,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__84883.cljs$core$IFn$_invoke$arity$2 ? pred__84883.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__84884) : pred__84883.call(null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__84884)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,G__84873,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__84883.cljs$core$IFn$_invoke$arity$2 ? pred__84883.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__84884) : pred__84883.call(null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__84884)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,G__84873,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__84883.cljs$core$IFn$_invoke$arity$2 ? pred__84883.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__84884) : pred__84883.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__84884)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,G__84873,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__84883.cljs$core$IFn$_invoke$arity$2 ? pred__84883.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__84884) : pred__84883.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__84884)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,G__84873,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__84883.cljs$core$IFn$_invoke$arity$2 ? pred__84883.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__84884) : pred__84883.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__84884)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__84873,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__84883.cljs$core$IFn$_invoke$arity$2 ? pred__84883.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__84884) : pred__84883.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__84884)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,G__84873,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__84883.cljs$core$IFn$_invoke$arity$2 ? pred__84883.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),expr__84884) : pred__84883.call(null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),expr__84884)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,G__84873,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__84873),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"headers","headers",-835030129),self__.headers,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"url","url",276297046),self__.url,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_,null))], null),self__.__extmap));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__84873){
var self__ = this;
var this__4379__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,G__84873,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_(self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__84867_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__84867_SHARP_,reason);
}));

var temp__5753__auto__ = cljs.core.deref(self__.socket_);
if(cljs.core.truth_(temp__5753__auto__)){
var s = temp__5753__auto__;
return s.close((1000),"CLOSE_NORMAL");
} else {
return null;
}
}));

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
chsk__$1.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
}));

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__84886 = opts;
var map__84886__$1 = (((((!((map__84886 == null))))?(((((map__84886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__84886):map__84886);
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84886__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84886__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84886__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((6)):null);
var ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(self__.packer,ev,_QMARK_cb_uuid);
var temp__5753__auto___85431 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5753__auto___85431)){
var cb_uuid_85432 = temp__5753__auto___85431;
taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_85432], null),(function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e84888){if((e84888 instanceof Error)){
var e = e84888;
return e;
} else {
throw e84888;

}
}})();
if((e == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1141,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e,null);
}
})());

var temp__5753__auto___85433__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__5753__auto___85433__$1)){
var timeout_ms_85434 = temp__5753__auto___85433__$1;
var c__60388__auto___85435 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60389__auto__ = (function (){var switch__60365__auto__ = (function (state_84899){
var state_val_84900 = (state_84899[(1)]);
if((state_val_84900 === (1))){
var inst_84889 = cljs.core.async.timeout(timeout_ms_85434);
var state_84899__$1 = state_84899;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_84899__$1,(2),inst_84889);
} else {
if((state_val_84900 === (2))){
var inst_84892 = (state_84899[(7)]);
var inst_84891 = (state_84899[(2)]);
var inst_84892__$1 = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,_QMARK_cb_uuid);
var state_84899__$1 = (function (){var statearr_84901 = state_84899;
(statearr_84901[(8)] = inst_84891);

(statearr_84901[(7)] = inst_84892__$1);

return statearr_84901;
})();
if(cljs.core.truth_(inst_84892__$1)){
var statearr_84902_85436 = state_84899__$1;
(statearr_84902_85436[(1)] = (3));

} else {
var statearr_84903_85437 = state_84899__$1;
(statearr_84903_85437[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84900 === (3))){
var inst_84892 = (state_84899[(7)]);
var inst_84894 = (inst_84892.cljs$core$IFn$_invoke$arity$1 ? inst_84892.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)) : inst_84892.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)));
var state_84899__$1 = state_84899;
var statearr_84904_85438 = state_84899__$1;
(statearr_84904_85438[(2)] = inst_84894);

(statearr_84904_85438[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84900 === (4))){
var state_84899__$1 = state_84899;
var statearr_84905_85439 = state_84899__$1;
(statearr_84905_85439[(2)] = null);

(statearr_84905_85439[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84900 === (5))){
var inst_84897 = (state_84899[(2)]);
var state_84899__$1 = state_84899;
return cljs.core.async.impl.ioc_helpers.return_chan(state_84899__$1,inst_84897);
} else {
return null;
}
}
}
}
}
});
return (function() {
var taoensso$sente$state_machine__60366__auto__ = null;
var taoensso$sente$state_machine__60366__auto____0 = (function (){
var statearr_84906 = [null,null,null,null,null,null,null,null,null];
(statearr_84906[(0)] = taoensso$sente$state_machine__60366__auto__);

(statearr_84906[(1)] = (1));

return statearr_84906;
});
var taoensso$sente$state_machine__60366__auto____1 = (function (state_84899){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_84899);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e84907){var ex__60369__auto__ = e84907;
var statearr_84908_85440 = state_84899;
(statearr_84908_85440[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_84899[(4)]))){
var statearr_84909_85441 = state_84899;
(statearr_84909_85441[(1)] = cljs.core.first((state_84899[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__85442 = state_84899;
state_84899 = G__85442;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
taoensso$sente$state_machine__60366__auto__ = function(state_84899){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__60366__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__60366__auto____1.call(this,state_84899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__60366__auto____0;
taoensso$sente$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__60366__auto____1;
return taoensso$sente$state_machine__60366__auto__;
})()
})();
var state__60390__auto__ = (function (){var statearr_84910 = f__60389__auto__();
(statearr_84910[(6)] = c__60388__auto___85435);

return statearr_84910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60390__auto__);
}));

} else {
}
} else {
}

try{cljs.core.deref(self__.socket_).send(ppstr);

cljs.core.reset_BANG_(self__.udt_last_comms_,taoensso.encore.now_udt());

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e84911){var t = e84911;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",1155,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,"Chsk send error"], null);
}),null)),null,2089678430,null);

var temp__5753__auto___85443 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5753__auto___85443)){
var cb_uuid_85444 = temp__5753__auto___85443;
var cb_fn_STAR__85445 = (function (){var or__4126__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,cb_uuid_85444);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e84912){if((e84912 instanceof Error)){
var e = e84912;
return e;
} else {
throw e84912;

}
}})();
if((e == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1158,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e,null);
}
}
})();
(cb_fn_STAR__85445.cljs$core$IFn$_invoke$arity$1 ? cb_fn_STAR__85445.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","error","chsk/error",-984175439)) : cb_fn_STAR__85445.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439)));
} else {
}

return false;
}}
}));

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var instance_handle = cljs.core.reset_BANG_(self__.instance_handle_,taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0());
var have_handle_QMARK_ = (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.instance_handle_),instance_handle);
});
var connect_fn = (function taoensso$sente$connect_fn(){
if(have_handle_QMARK_()){
var retry_fn = (function (){
if(have_handle_QMARK_()){
var retry_count_STAR_ = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.retry_count_,cljs.core.inc);
var backoff_ms = (self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1 ? self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1(retry_count_STAR_) : self__.backoff_ms_fn.call(null,retry_count_STAR_));
var udt_next_reconnect = (taoensso.encore.now_udt() + backoff_ms);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",1174,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
}),null)),null,-1681982437,null);

goog.global.setTimeout(taoensso$sente$connect_fn,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__84868_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__84868_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
}));
} else {
return null;
}
});
var onerror_fn = (function (ws_ev){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",1187,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",(function (){try{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(ws_ev);
}catch (e84913){var _ = e84913;
return ws_ev;
}})()], null);
}),null)),null,-2043111695,null);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__84869_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__84869_SHARP_,new cljs.core.Keyword(null,"last-ws-error","last-ws-error",-820288502),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev], null));
}));
});
var onmessage_fn = (function (ws_ev){
var ppstr = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"data");
var vec__84914 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84914,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84914,(1),null);
cljs.core.reset_BANG_(self__.udt_last_comms_,taoensso.encore.now_udt());

var or__4126__auto__ = ((taoensso.sente.handshake_QMARK_(clj))?(function (){
taoensso.sente.receive_handshake_BANG_(new cljs.core.Keyword(null,"ws","ws",86841443),chsk__$1,clj);

cljs.core.reset_BANG_(self__.retry_count_,(0));

return new cljs.core.Keyword(null,"handshake","handshake",68079331);
})()
:null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clj,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)))?(function (){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(self__.chs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var temp__5751__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5751__auto__)){
var cb_uuid = temp__5751__auto__;
var temp__5751__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__5751__auto____$1)){
var cb_fn = temp__5751__auto____$1;
return (cb_fn.cljs$core$IFn$_invoke$arity$1 ? cb_fn.cljs$core$IFn$_invoke$arity$1(clj) : cb_fn.call(null,clj));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",1231,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
}),null)),null,-1197803577,null);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_(self__.chs,buffered_evs);
}
}
}
});
var onclose_fn = (function (ws_ev){
var last_ws_close = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev,new cljs.core.Keyword(null,"clean?","clean?",-1675631009),taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"wasClean"),new cljs.core.Keyword(null,"code","code",1586293142),taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"code"),new cljs.core.Keyword(null,"reason","reason",-2070751759),taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"reason")], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"clean?","clean?",-1675631009).cljs$core$IFn$_invoke$arity$1(last_ws_close))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",1257,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clean WebSocket close, will not attempt reconnect"], null);
}),null)),null,1359658545,null);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__84871_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__84871_SHARP_,new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
}));
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__84872_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(taoensso.sente.chsk_state__GT_closed(p1__84872_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424)),new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
}));

return retry_fn();
}
});
var _QMARK_socket = (function (){try{return taoensso.sente.create_websocket_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"onerror-fn","onerror-fn",1069372505),onerror_fn,new cljs.core.Keyword(null,"onmessage-fn","onmessage-fn",1633804172),onmessage_fn,new cljs.core.Keyword(null,"onclose-fn","onclose-fn",-1388163785),onclose_fn,new cljs.core.Keyword(null,"headers","headers",-835030129),self__.headers,new cljs.core.Keyword(null,"uri-str","uri-str",304128675),taoensso.encore.merge_url_with_query_string(self__.url,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_))], null)], 0)))], null));
}catch (e84917){var t = e84917;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",1280,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,"WebSocket error"], null);
}),null)),null,-117777711,null);

return null;
}})();
if(cljs.core.not(_QMARK_socket)){
return retry_fn();
} else {
var temp__5753__auto___85446 = cljs.core.deref(self__.socket_);
if(cljs.core.truth_(temp__5753__auto___85446)){
var old_socket_85447 = temp__5753__auto___85446;
old_socket_85447.close();
} else {
}

return cljs.core.reset_BANG_(self__.socket_,_QMARK_socket);
}
} else {
return null;
}
});
var temp__5753__auto___85448 = self__.ws_kalive_ms;
if(cljs.core.truth_(temp__5753__auto___85448)){
var ms_85449 = temp__5753__auto___85448;
var c__60388__auto___85450 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60389__auto__ = (function (){var switch__60365__auto__ = (function (state_84945){
var state_val_84946 = (state_84945[(1)]);
if((state_val_84946 === (7))){
var inst_84941 = (state_84945[(2)]);
var state_84945__$1 = state_84945;
var statearr_84947_85451 = state_84945__$1;
(statearr_84947_85451[(2)] = inst_84941);

(statearr_84947_85451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84946 === (1))){
var state_84945__$1 = state_84945;
var statearr_84948_85452 = state_84945__$1;
(statearr_84948_85452[(2)] = null);

(statearr_84948_85452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84946 === (4))){
var inst_84922 = (state_84945[(2)]);
var inst_84923 = have_handle_QMARK_();
var state_84945__$1 = (function (){var statearr_84949 = state_84945;
(statearr_84949[(7)] = inst_84922);

return statearr_84949;
})();
if(inst_84923){
var statearr_84950_85453 = state_84945__$1;
(statearr_84950_85453[(1)] = (5));

} else {
var statearr_84951_85454 = state_84945__$1;
(statearr_84951_85454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84946 === (6))){
var state_84945__$1 = state_84945;
var statearr_84952_85455 = state_84945__$1;
(statearr_84952_85455[(2)] = null);

(statearr_84952_85455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84946 === (3))){
var inst_84943 = (state_84945[(2)]);
var state_84945__$1 = state_84945;
return cljs.core.async.impl.ioc_helpers.return_chan(state_84945__$1,inst_84943);
} else {
if((state_val_84946 === (2))){
var inst_84919 = cljs.core.deref(self__.udt_last_comms_);
var inst_84920 = cljs.core.async.timeout(ms_85449);
var state_84945__$1 = (function (){var statearr_84953 = state_84945;
(statearr_84953[(8)] = inst_84919);

return statearr_84953;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_84945__$1,(4),inst_84920);
} else {
if((state_val_84946 === (9))){
var state_84945__$1 = state_84945;
var statearr_84954_85456 = state_84945__$1;
(statearr_84954_85456[(2)] = null);

(statearr_84954_85456[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84946 === (5))){
var inst_84919 = (state_84945[(8)]);
var inst_84925 = cljs.core.deref(self__.udt_last_comms_);
var inst_84926 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_84919,inst_84925);
var state_84945__$1 = state_84945;
if(inst_84926){
var statearr_84955_85457 = state_84945__$1;
(statearr_84955_85457[(1)] = (8));

} else {
var statearr_84956_85458 = state_84945__$1;
(statearr_84956_85458[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84946 === (10))){
var inst_84937 = (state_84945[(2)]);
var state_84945__$1 = (function (){var statearr_84957 = state_84945;
(statearr_84957[(9)] = inst_84937);

return statearr_84957;
})();
var statearr_84958_85459 = state_84945__$1;
(statearr_84958_85459[(2)] = null);

(statearr_84958_85459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84946 === (8))){
var inst_84928 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_84929 = [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)];
var inst_84930 = (new cljs.core.PersistentVector(null,1,(5),inst_84928,inst_84929,null));
var inst_84931 = [new cljs.core.Keyword(null,"flush?","flush?",-108887231)];
var inst_84932 = [true];
var inst_84933 = cljs.core.PersistentHashMap.fromArrays(inst_84931,inst_84932);
var inst_84934 = chsk__$1.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(null,inst_84930,inst_84933);
var state_84945__$1 = state_84945;
var statearr_84959_85460 = state_84945__$1;
(statearr_84959_85460[(2)] = inst_84934);

(statearr_84959_85460[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var taoensso$sente$state_machine__60366__auto__ = null;
var taoensso$sente$state_machine__60366__auto____0 = (function (){
var statearr_84960 = [null,null,null,null,null,null,null,null,null,null];
(statearr_84960[(0)] = taoensso$sente$state_machine__60366__auto__);

(statearr_84960[(1)] = (1));

return statearr_84960;
});
var taoensso$sente$state_machine__60366__auto____1 = (function (state_84945){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_84945);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e84961){var ex__60369__auto__ = e84961;
var statearr_84962_85461 = state_84945;
(statearr_84962_85461[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_84945[(4)]))){
var statearr_84963_85462 = state_84945;
(statearr_84963_85462[(1)] = cljs.core.first((state_84945[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__85463 = state_84945;
state_84945 = G__85463;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
taoensso$sente$state_machine__60366__auto__ = function(state_84945){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__60366__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__60366__auto____1.call(this,state_84945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__60366__auto____0;
taoensso$sente$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__60366__auto____1;
return taoensso$sente$state_machine__60366__auto__;
})()
})();
var state__60390__auto__ = (function (){var statearr_84964 = f__60389__auto__();
(statearr_84964[(6)] = c__60388__auto___85450);

return statearr_84964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60390__auto__);
}));

} else {
}

cljs.core.reset_BANG_(self__.retry_count_,(0));

connect_fn();

return chsk__$1;
}));

(taoensso.sente.ChWebSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"headers","headers",805501398,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"ws-kalive-ms","ws-kalive-ms",-1212255801,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"instance-handle_","instance-handle_",-282852930,null),new cljs.core.Symbol(null,"retry-count_","retry-count_",1660769620,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"cbs-waiting_","cbs-waiting_",121502466,null),new cljs.core.Symbol(null,"socket_","socket_",1279482619,null),new cljs.core.Symbol(null,"udt-last-comms_","udt-last-comms_",1494731888,null)], null);
}));

(taoensso.sente.ChWebSocket.cljs$lang$type = true);

(taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"taoensso.sente/ChWebSocket",null,(1),null));
}));

(taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"taoensso.sente/ChWebSocket");
}));

/**
 * Positional factory function for taoensso.sente/ChWebSocket.
 */
taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,headers,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,headers,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,null,null,null));
});

/**
 * Factory function for taoensso.sente/ChWebSocket, taking a map of keywords to field values.
 */
taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__84877){
var extmap__4419__auto__ = (function (){var G__84965 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__84877,new cljs.core.Keyword(null,"client-id","client-id",-464622140),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)], 0));
if(cljs.core.record_QMARK_(G__84877)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__84965);
} else {
return G__84965;
}
})();
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__84877),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__84877),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__84877),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(G__84877),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__84877),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__84877),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968).cljs$core$IFn$_invoke$arity$1(G__84877),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__84877),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__84877),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__84877),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__84877),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__84877),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__84877),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__84877),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639).cljs$core$IFn$_invoke$arity$1(G__84877),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

taoensso.sente.new_ChWebSocket = (function taoensso$sente$new_ChWebSocket(opts,csrf_token){
return taoensso.sente.map__GT_ChWebSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token], null)),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"socket_","socket_",-361048908),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),opts], 0)));
});
/**
 * We must set *some* client-side timeout otherwise an unpredictable (and
 *   probably too short) browser default will be used. Must be > server's
 *   :lp-timeout-ms.
 */
taoensso.sente.default_client_side_ajax_timeout_ms = taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"secs","secs",1532330091),(60)], 0));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAjaxSocket = (function (client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.instance_handle_ = instance_handle_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.ajax_opts = ajax_opts;
this.curr_xhr_ = curr_xhr_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k84973,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__84977 = k84973;
var G__84977__$1 = (((G__84977 instanceof cljs.core.Keyword))?G__84977.fqn:null);
switch (G__84977__$1) {
case "client-id":
return self__.client_id;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "packer":
return self__.packer;

break;
case "url":
return self__.url;

break;
case "state_":
return self__.state_;

break;
case "instance-handle_":
return self__.instance_handle_;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "ajax-opts":
return self__.ajax_opts;

break;
case "curr-xhr_":
return self__.curr_xhr_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k84973,else__4383__auto__);

}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__84978){
var vec__84979 = p__84978;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84979,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84979,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__84972){
var self__ = this;
var G__84972__$1 = this;
return (new cljs.core.RecordIter((0),G__84972__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (11 + cljs.core.count(self__.__extmap));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-266770752 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this84974,other84975){
var self__ = this;
var this84974__$1 = this;
return (((!((other84975 == null)))) && ((this84974__$1.constructor === other84975.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this84974__$1.client_id,other84975.client_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this84974__$1.chs,other84975.chs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this84974__$1.params,other84975.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this84974__$1.packer,other84975.packer)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this84974__$1.url,other84975.url)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this84974__$1.state_,other84975.state_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this84974__$1.instance_handle_,other84975.instance_handle_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this84974__$1.ever_opened_QMARK__,other84975.ever_opened_QMARK__)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this84974__$1.backoff_ms_fn,other84975.backoff_ms_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this84974__$1.ajax_opts,other84975.ajax_opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this84974__$1.curr_xhr_,other84975.curr_xhr_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this84974__$1.__extmap,other84975.__extmap)));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__84972){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__84982 = cljs.core.keyword_identical_QMARK_;
var expr__84983 = k__4388__auto__;
if(cljs.core.truth_((pred__84982.cljs$core$IFn$_invoke$arity$2 ? pred__84982.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__84983) : pred__84982.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__84983)))){
return (new taoensso.sente.ChAjaxSocket(G__84972,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__84982.cljs$core$IFn$_invoke$arity$2 ? pred__84982.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"chs","chs",376886120),expr__84983) : pred__84982.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__84983)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__84972,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__84982.cljs$core$IFn$_invoke$arity$2 ? pred__84982.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__84983) : pred__84982.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__84983)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__84972,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__84982.cljs$core$IFn$_invoke$arity$2 ? pred__84982.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"packer","packer",66077544),expr__84983) : pred__84982.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__84983)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__84972,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__84982.cljs$core$IFn$_invoke$arity$2 ? pred__84982.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046),expr__84983) : pred__84982.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__84983)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__84972,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__84982.cljs$core$IFn$_invoke$arity$2 ? pred__84982.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state_","state_",957667102),expr__84983) : pred__84982.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__84983)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__84972,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__84982.cljs$core$IFn$_invoke$arity$2 ? pred__84982.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__84983) : pred__84982.call(null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__84983)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__84972,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__84982.cljs$core$IFn$_invoke$arity$2 ? pred__84982.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__84983) : pred__84982.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__84983)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,G__84972,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__84982.cljs$core$IFn$_invoke$arity$2 ? pred__84982.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__84983) : pred__84982.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__84983)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,G__84972,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__84982.cljs$core$IFn$_invoke$arity$2 ? pred__84982.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__84983) : pred__84982.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__84983)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__84972,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__84982.cljs$core$IFn$_invoke$arity$2 ? pred__84982.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__84983) : pred__84982.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__84983)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,G__84972,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__84972),null));
}
}
}
}
}
}
}
}
}
}
}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"url","url",276297046),self__.url,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_,null))], null),self__.__extmap));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__84972){
var self__ = this;
var this__4379__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,G__84972,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_(self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__84966_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__84966_SHARP_,reason);
}));

var temp__5753__auto__ = cljs.core.deref(self__.curr_xhr_);
if(cljs.core.truth_(temp__5753__auto__)){
var x = temp__5753__auto__;
return x.abort();
} else {
return null;
}
}));

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
chsk__$1.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
}));

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__84985 = opts;
var map__84985__$1 = (((((!((map__84985 == null))))?(((((map__84985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__84985):map__84985);
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84985__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84985__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84985__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
} else {
var csrf_token = new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_));
var G__84987_85465 = self__.url;
var G__84988_85466 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__4126__auto__ = _QMARK_timeout_ms;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),csrf_token], null)], 0)),new cljs.core.Keyword(null,"params","params",710516235),(function (){var ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(self__.packer,ev,(cljs.core.truth_(_QMARK_cb_fn)?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):null));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token,new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252),ppstr], null)], 0));
})()], null)], 0));
var G__84989_85467 = (function taoensso$sente$ajax_cb(p__84990){
var map__84991 = p__84990;
var map__84991__$1 = (((((!((map__84991 == null))))?(((((map__84991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__84991):map__84991);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84991__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84991__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)) : _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)));
} else {
return null;
}
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__84967_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__84967_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
}));

if(cljs.core.truth_(_QMARK_cb_fn)){
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","error","chsk/error",-984175439)) : _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439)));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__84993 = taoensso.sente.unpack(self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84993,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84993,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
(_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(resp_clj) : _QMARK_cb_fn.call(null,resp_clj));
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",1404,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
}),null)),null,2088178643,null);
} else {
}
}

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__84968_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__84968_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
}));
}
});
(taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__84987_85465,G__84988_85466,G__84989_85467) : taoensso.sente.ajax_lite.call(null,G__84987_85465,G__84988_85466,G__84989_85467));

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}
}));

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var instance_handle = cljs.core.reset_BANG_(self__.instance_handle_,taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0());
var have_handle_QMARK_ = (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.instance_handle_),instance_handle);
});
var poll_fn = (function taoensso$sente$poll_fn(retry_count){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",1414,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
}),null)),null,1309197063,null);

if(have_handle_QMARK_()){
var retry_fn = (function (){
if(have_handle_QMARK_()){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = (self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1 ? self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1(retry_count_STAR_) : self__.backoff_ms_fn.call(null,retry_count_STAR_));
var udt_next_reconnect = (taoensso.encore.now_udt() + backoff_ms);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",1422,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
}),null)),null,-897145787,null);

goog.global.setTimeout((function (){
return taoensso$sente$poll_fn(retry_count_STAR_);
}),backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__84969_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__84969_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
}));
} else {
return null;
}
});
return cljs.core.reset_BANG_(self__.curr_xhr_,(function (){var G__84996 = self__.url;
var G__84997 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handshake?","handshake?",-423743093),true], null))], 0)),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_))], null)], 0))], null)], 0));
var G__84998 = (function taoensso$sente$poll_fn_$_ajax_cb(p__84999){
var map__85000 = p__84999;
var map__85000__$1 = (((((!((map__85000 == null))))?(((((map__85000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85000):map__85000);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85000__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85000__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return taoensso$sente$poll_fn((0));
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__84970_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__84970_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
}));

return retry_fn();

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__85002 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85002,(0),null);
var handshake_QMARK_ = taoensso.sente.handshake_QMARK_(clj);
if(handshake_QMARK_){
taoensso.sente.receive_handshake_BANG_(new cljs.core.Keyword(null,"ajax","ajax",814345549),chsk__$1,clj);
} else {
}

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__84971_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__84971_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
}));

taoensso$sente$poll_fn((0));

if(handshake_QMARK_){
return null;
} else {
var or__4126__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clj,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)))?(function (){
if(cljs.core.truth_(cljs.core.deref(taoensso.sente.debug_mode_QMARK__))){
taoensso.sente.receive_buffered_evs_BANG_(self__.chs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("debug","timeout","debug/timeout",309499949)], null)], null));
} else {
}

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_(self__.chs,buffered_evs);
}
}
}
});
return (taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__84996,G__84997,G__84998) : taoensso.sente.ajax_lite.call(null,G__84996,G__84997,G__84998));
})());
} else {
return null;
}
});
poll_fn((0));

return chsk__$1;
}));

(taoensso.sente.ChAjaxSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"instance-handle_","instance-handle_",-282852930,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"ajax-opts","ajax-opts",1122292418,null),new cljs.core.Symbol(null,"curr-xhr_","curr-xhr_",321757831,null)], null);
}));

(taoensso.sente.ChAjaxSocket.cljs$lang$type = true);

(taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"taoensso.sente/ChAjaxSocket",null,(1),null));
}));

(taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"taoensso.sente/ChAjaxSocket");
}));

/**
 * Positional factory function for taoensso.sente/ChAjaxSocket.
 */
taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,null,null,null));
});

/**
 * Factory function for taoensso.sente/ChAjaxSocket, taking a map of keywords to field values.
 */
taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__84976){
var extmap__4419__auto__ = (function (){var G__85005 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__84976,new cljs.core.Keyword(null,"client-id","client-id",-464622140),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)], 0));
if(cljs.core.record_QMARK_(G__84976)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__85005);
} else {
return G__85005;
}
})();
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__84976),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__84976),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__84976),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__84976),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__84976),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__84976),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__84976),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__84976),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__84976),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__84976),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__84976),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

taoensso.sente.new_ChAjaxSocket = (function taoensso$sente$new_ChAjaxSocket(opts,csrf_token){
return taoensso.sente.map__GT_ChAjaxSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token], null)),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),opts], 0)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAutoSocket = (function (ws_chsk_opts,ajax_chsk_opts,state_,impl_,__meta,__extmap,__hash){
this.ws_chsk_opts = ws_chsk_opts;
this.ajax_chsk_opts = ajax_chsk_opts;
this.state_ = state_;
this.impl_ = impl_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k85007,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__85011 = k85007;
var G__85011__$1 = (((G__85011 instanceof cljs.core.Keyword))?G__85011.fqn:null);
switch (G__85011__$1) {
case "ws-chsk-opts":
return self__.ws_chsk_opts;

break;
case "ajax-chsk-opts":
return self__.ajax_chsk_opts;

break;
case "state_":
return self__.state_;

break;
case "impl_":
return self__.impl_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k85007,else__4383__auto__);

}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__85012){
var vec__85013 = p__85012;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85013,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85013,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#taoensso.sente.ChAutoSocket{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__85006){
var self__ = this;
var G__85006__$1 = this;
return (new cljs.core.RecordIter((0),G__85006__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1193508708 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this85008,other85009){
var self__ = this;
var this85008__$1 = this;
return (((!((other85009 == null)))) && ((this85008__$1.constructor === other85009.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this85008__$1.ws_chsk_opts,other85009.ws_chsk_opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this85008__$1.ajax_chsk_opts,other85009.ajax_chsk_opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this85008__$1.state_,other85009.state_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this85008__$1.impl_,other85009.impl_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this85008__$1.__extmap,other85009.__extmap)));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl_","impl_",1218818179),null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),null,new cljs.core.Keyword(null,"state_","state_",957667102),null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__85006){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__85016 = cljs.core.keyword_identical_QMARK_;
var expr__85017 = k__4388__auto__;
if(cljs.core.truth_((pred__85016.cljs$core$IFn$_invoke$arity$2 ? pred__85016.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),expr__85017) : pred__85016.call(null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),expr__85017)))){
return (new taoensso.sente.ChAutoSocket(G__85006,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__85016.cljs$core$IFn$_invoke$arity$2 ? pred__85016.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),expr__85017) : pred__85016.call(null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),expr__85017)))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,G__85006,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__85016.cljs$core$IFn$_invoke$arity$2 ? pred__85016.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state_","state_",957667102),expr__85017) : pred__85016.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__85017)))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,G__85006,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__85016.cljs$core$IFn$_invoke$arity$2 ? pred__85016.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"impl_","impl_",1218818179),expr__85017) : pred__85016.call(null,new cljs.core.Keyword(null,"impl_","impl_",1218818179),expr__85017)))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,G__85006,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__85006),null));
}
}
}
}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_,null))], null),self__.__extmap));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__85006){
var self__ = this;
var this__4379__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,G__85006,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
var temp__5753__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5753__auto__)){
var impl = temp__5753__auto__;
return taoensso.sente._chsk_disconnect_BANG_(impl,reason);
} else {
return null;
}
}));

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__5753__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5753__auto__)){
var impl = temp__5753__auto__;
taoensso.sente._chsk_disconnect_BANG_(impl,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
} else {
return null;
}
}));

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var temp__5751__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5751__auto__)){
var impl = temp__5751__auto__;
return taoensso.sente._chsk_send_BANG_(impl,ev,opts);
} else {
var map__85019 = opts;
var map__85019__$1 = (((((!((map__85019 == null))))?(((((map__85019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85019):map__85019);
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85019__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
}
}));

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var ajax_chsk_opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.ajax_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_);
var ws_chsk_opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.ws_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_);
var ajax_conn_BANG_ = (function (){
cljs.core.remove_watch(self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080));

return taoensso.sente.new_ChAjaxSocket(ajax_chsk_opts__$1,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_))).taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
});
var ws_conn_BANG_ = (function (){
var downgraded_QMARK___85469 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
cljs.core.add_watch(self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080),(function (_,___$1,old_state,new_state){
var temp__5753__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5753__auto__)){
var impl = temp__5753__auto__;
var temp__5753__auto____$1 = new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(impl);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ever_opened_QMARK__ = temp__5753__auto____$1;
if(cljs.core.truth_(cljs.core.deref(ever_opened_QMARK__))){
return null;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"last-ws-error","last-ws-error",-820288502).cljs$core$IFn$_invoke$arity$1(new_state))){
if(cljs.core.compare_and_set_BANG_(downgraded_QMARK___85469,false,true)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",1555,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Permanently downgrading :auto chsk -> :ajax"], null);
}),null)),null,-1121035358,null);

taoensso.sente._chsk_disconnect_BANG_(impl,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720));

return cljs.core.reset_BANG_(self__.impl_,ajax_conn_BANG_());
} else {
return null;
}
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
}));

return taoensso.sente.new_ChWebSocket(ws_chsk_opts__$1,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_))).taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
});
cljs.core.reset_BANG_(self__.impl_,(function (){var or__4126__auto__ = ws_conn_BANG_();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ajax_conn_BANG_();
}
})());

return chsk__$1;
}));

(taoensso.sente.ChAutoSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ws-chsk-opts","ws-chsk-opts",-349638577,null),new cljs.core.Symbol(null,"ajax-chsk-opts","ajax-chsk-opts",-1051844442,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"impl_","impl_",-1435617590,null)], null);
}));

(taoensso.sente.ChAutoSocket.cljs$lang$type = true);

(taoensso.sente.ChAutoSocket.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"taoensso.sente/ChAutoSocket",null,(1),null));
}));

(taoensso.sente.ChAutoSocket.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"taoensso.sente/ChAutoSocket");
}));

/**
 * Positional factory function for taoensso.sente/ChAutoSocket.
 */
taoensso.sente.__GT_ChAutoSocket = (function taoensso$sente$__GT_ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_){
return (new taoensso.sente.ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_,null,null,null));
});

/**
 * Factory function for taoensso.sente/ChAutoSocket, taking a map of keywords to field values.
 */
taoensso.sente.map__GT_ChAutoSocket = (function taoensso$sente$map__GT_ChAutoSocket(G__85010){
var extmap__4419__auto__ = (function (){var G__85041 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__85010,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)], 0));
if(cljs.core.record_QMARK_(G__85010)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__85041);
} else {
return G__85041;
}
})();
return (new taoensso.sente.ChAutoSocket(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104).cljs$core$IFn$_invoke$arity$1(G__85010),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327).cljs$core$IFn$_invoke$arity$1(G__85010),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__85010),new cljs.core.Keyword(null,"impl_","impl_",1218818179).cljs$core$IFn$_invoke$arity$1(G__85010),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

taoensso.sente.new_ChAutoSocket = (function taoensso$sente$new_ChAutoSocket(opts,csrf_token){
return taoensso.sente.map__GT_ChAutoSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token], null)),new cljs.core.Keyword(null,"impl_","impl_",1218818179),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),opts], 0)));
});
taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,host,path,type){
var protocol__$1 = (function (){var G__85042 = protocol;
var G__85042__$1 = (((G__85042 instanceof cljs.core.Keyword))?G__85042.fqn:null);
switch (G__85042__$1) {
case "http":
return "http:";

break;
case "https":
return "https:";

break;
default:
return protocol;

}
})();
var protocol__$2 = (function (){var e = (function (){try{if((function (x){
return cljs.core.contains_QMARK_((function (){var G__85047 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["https:",null,"http:",null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__85047) : taoensso.truss.impl.set_STAR_.call(null,G__85047));
})(),x);
})(protocol__$1)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e85044){if((e85044 instanceof Error)){
var e = e85044;
return e;
} else {
throw e85044;

}
}})();
if((e == null)){
return protocol__$1;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1574,"([:el #{\"https:\" \"http:\"}] protocol)",protocol__$1,e,null);
}
})();
var protocol__$3 = (function (){var G__85048 = type;
var G__85048__$1 = (((G__85048 instanceof cljs.core.Keyword))?G__85048.fqn:null);
switch (G__85048__$1) {
case "ajax":
return protocol__$2;

break;
case "ws":
var G__85049 = protocol__$2;
switch (G__85049) {
case "https:":
return "wss:";

break;
case "http:":
return "ws:";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__85049)].join('')));

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__85048__$1)].join('')));

}
})();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol__$3),"//",taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([host,path], 0))].join('');
});
/**
 * Returns nil on failure, or a map with keys:
 *     :ch-recv ; core.async channel to receive `event-msg`s (internal or from
 *              ; clients). May `put!` (inject) arbitrary `event`s to this channel.
 *     :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
 *     :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
 *     :chsk    ; IChSocket implementer. You can usu. ignore this.
 * 
 *   Common options:
 *     :type           ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto).
 *     :protocol       ; Server protocol, e/o #{:http :https}.
 *     :host           ; Server host (defaults to current page's host).
 *     :port           ; Server port (defaults to current page's port).
 *     :params         ; Map of any params to incl. in chsk Ring requests (handy
 *                     ; for application-level auth, etc.).
 *     :headers        ; Map of additional headers to include in the initiating request
 *                     ; (currently only for Java clients).
 *     :packer         ; :edn (default), or an IPacker implementation.
 *     :ajax-opts      ; Base opts map provided to `taoensso.encore/ajax-lite`.
 *     :wrap-recv-evs? ; Should events from server be wrapped in [:chsk/recv _]?
 *     :ws-kalive-ms   ; Ping to keep a WebSocket conn alive if no activity
 *                     ; w/in given msecs. Should be different to server's :ws-kalive-ms.
 */
taoensso.sente.make_channel_socket_client_BANG_ = (function taoensso$sente$make_channel_socket_client_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___85473 = arguments.length;
var i__4737__auto___85474 = (0);
while(true){
if((i__4737__auto___85474 < len__4736__auto___85473)){
args__4742__auto__.push((arguments[i__4737__auto___85474]));

var G__85475 = (i__4737__auto___85474 + (1));
i__4737__auto___85474 = G__85475;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,_QMARK_csrf_token,p__85053){
var vec__85054 = p__85053;
var map__85057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85054,(0),null);
var map__85057__$1 = (((((!((map__85057 == null))))?(((((map__85057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85057):map__85057);
var opts = map__85057__$1;
var ajax_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85057__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_kalive_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__85057__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"secs","secs",1532330091),(20)], 0)));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__85057__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
}
})());
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85057__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var packer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__85057__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85057__$1,new cljs.core.Keyword(null,"params","params",710516235));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__85057__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85057__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85057__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85057__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__85057__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer((2048)));
var backoff_ms_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__85057__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__85057__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var _deprecated_more_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85054,(1),null);
var e_85476 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_((function (){var G__85060 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__85060) : taoensso.truss.impl.set_STAR_.call(null,G__85060));
})(),x);
})(type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e85059){if((e85059 instanceof Error)){
var e_85476 = e85059;
return e_85476;
} else {
throw e85059;

}
}})();
if((e_85476 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1618,"([:in #{:ws :ajax :auto}] type)",type,e_85476,null);
}

var e_85477 = (function (){try{if(taoensso.encore.nblank_str_QMARK_(client_id)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e85061){if((e85061 instanceof Error)){
var e_85477 = e85061;
return e_85477;
} else {
throw e85061;

}
}})();
if((e_85477 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1619,"(enc/nblank-str? client-id)",client_id,e_85477,null);
}

if((!((_deprecated_more_opts == null)))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",1621,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
}),null)),null,559633135,null);
} else {
}

if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",1622,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
}),null)),null,-1468280548,null);
} else {
}

if((((!(typeof _QMARK_csrf_token === 'string'))) || (clojure.string.blank_QMARK_(_QMARK_csrf_token)))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",1625,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WARNING: no CSRF token provided. Connections will FAIL if server-side CSRF check is enabled (as it is by default)."], null);
}),null)),null,-1131283795,null);
} else {
}

var packer__$1 = taoensso.sente.coerce_packer(packer);
var vec__85062 = (function (){var win_loc = taoensso.encore.get_win_loc();
var path__$1 = (function (){var z = (function (){try{var or__4126__auto__ = path;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_loc);
}
}catch (e85065){if((e85065 instanceof Error)){
var e = e85065;
return (new taoensso.truss.impl.WrappedError(e));
} else {
throw e85065;

}
}})();
var e = (function (){try{if((z instanceof taoensso.truss.impl.WrappedError)){
return z;
} else {
if(taoensso.truss.impl.some_QMARK_(z)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}
}catch (e85066){if((e85066 instanceof Error)){
var e = e85066;
return e;
} else {
throw e85066;

}
}})();
if((e == null)){
return z;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1633,"(taoensso.truss.impl/some? (or path (:pathname win-loc)))",z,e,null);
}
})();
var temp__5751__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5751__auto__)){
var f = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(path__$1,win_loc,new cljs.core.Keyword(null,"ws","ws",86841443)) : f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ws","ws",86841443))),(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(path__$1,win_loc,new cljs.core.Keyword(null,"ajax","ajax",814345549)) : f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ajax","ajax",814345549)))], null);
} else {
var protocol__$1 = (function (){var or__4126__auto__ = protocol;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_loc);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return new cljs.core.Keyword(null,"http","http",382524695);
}
}
})();
var host__$1 = (cljs.core.truth_(host)?(cljs.core.truth_(port)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(port)].join(''):host):(cljs.core.truth_(port)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hostname","hostname",2105669933).cljs$core$IFn$_invoke$arity$1(win_loc)),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(port)].join(''):new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_loc)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.sente.get_chsk_url(protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443)),taoensso.sente.get_chsk_url(protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
}
})();
var ws_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85062,(0),null);
var ajax_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85062,(1),null);
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((128))),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),(function (){var buf = cljs.core.async.sliding_buffer((512));
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
})));
} else {
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf);
}
})()], null);
var common_chsk_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"chs","chs",376886120),private_chs,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"headers","headers",-835030129),headers,new cljs.core.Keyword(null,"packer","packer",66077544),packer__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),ws_kalive_ms], null);
var ws_chsk_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([common_chsk_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),ws_url,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null)], 0));
var ajax_chsk_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([common_chsk_opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),ajax_url,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),ajax_opts,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null)], 0));
var auto_chsk_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),ws_chsk_opts,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),ajax_chsk_opts], null);
var _QMARK_chsk = taoensso.sente._chsk_connect_BANG_((function (){var G__85067 = type;
var G__85067__$1 = (((G__85067 instanceof cljs.core.Keyword))?G__85067.fqn:null);
switch (G__85067__$1) {
case "ws":
return taoensso.sente.new_ChWebSocket(ws_chsk_opts,_QMARK_csrf_token);

break;
case "ajax":
return taoensso.sente.new_ChAjaxSocket(ajax_chsk_opts,_QMARK_csrf_token);

break;
case "auto":
return taoensso.sente.new_ChAutoSocket(auto_chsk_opts,_QMARK_csrf_token);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__85067__$1)].join('')));

}
})());
var temp__5751__auto__ = _QMARK_chsk;
if(cljs.core.truth_(temp__5751__auto__)){
var chsk = temp__5751__auto__;
var chsk_state_ = new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk);
var internal_ch = new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs);
var send_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(taoensso.sente.chsk_send_BANG_,chsk);
var ev_ch = cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs)], null),recv_buf_or_n);
var ev_msg_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (ev){
var vec__85068 = taoensso.sente.as_event(ev);
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85068,(0),null);
var ev__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85068,(1),null);
var ev__$1 = vec__85068;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),internal_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),chsk_state_,new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
})));
cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2(ev_ch,ev_msg_ch);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ev_msg_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",1727,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to create channel socket"], null);
}),null)),null,-495806071,null);
}
}));

(taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq85050){
var G__85051 = cljs.core.first(seq85050);
var seq85050__$1 = cljs.core.next(seq85050);
var G__85052 = cljs.core.first(seq85050__$1);
var seq85050__$2 = cljs.core.next(seq85050__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__85051,G__85052,seq85050__$2);
}));

taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__85071 = opts;
var map__85071__$1 = (((((!((map__85071 == null))))?(((((map__85071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85071):map__85071);
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85071__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85071__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85071__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
var ch_ctrl = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var execute1 = (function (f){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var c__60388__auto___85479 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60389__auto__ = (function (){var switch__60365__auto__ = (function (state_85120){
var state_val_85121 = (state_85120[(1)]);
if((state_val_85121 === (7))){
var inst_85116 = (state_85120[(2)]);
var state_85120__$1 = state_85120;
var statearr_85122_85480 = state_85120__$1;
(statearr_85122_85480[(2)] = inst_85116);

(statearr_85122_85480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85121 === (1))){
var state_85120__$1 = state_85120;
var statearr_85123_85481 = state_85120__$1;
(statearr_85123_85481[(2)] = null);

(statearr_85123_85481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85121 === (4))){
var inst_85081 = (state_85120[(7)]);
var inst_85083 = (state_85120[(8)]);
var inst_85082 = (state_85120[(9)]);
var inst_85086 = (state_85120[(10)]);
var inst_85081__$1 = (state_85120[(2)]);
var inst_85082__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_85081__$1,(0),null);
var inst_85083__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_85081__$1,(1),null);
var inst_85084 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_85083__$1,ch_ctrl);
var inst_85085 = (inst_85082__$1 == null);
var inst_85086__$1 = ((inst_85084) || (inst_85085));
var state_85120__$1 = (function (){var statearr_85124 = state_85120;
(statearr_85124[(7)] = inst_85081__$1);

(statearr_85124[(8)] = inst_85083__$1);

(statearr_85124[(9)] = inst_85082__$1);

(statearr_85124[(10)] = inst_85086__$1);

return statearr_85124;
})();
if(cljs.core.truth_(inst_85086__$1)){
var statearr_85125_85482 = state_85120__$1;
(statearr_85125_85482[(1)] = (5));

} else {
var statearr_85126_85483 = state_85120__$1;
(statearr_85126_85483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85121 === (15))){
var inst_85082 = (state_85120[(9)]);
var state_85120__$1 = state_85120;
var statearr_85127_85484 = state_85120__$1;
(statearr_85127_85484[(2)] = inst_85082);

(statearr_85127_85484[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85121 === (13))){
var inst_85102 = (state_85120[(2)]);
var state_85120__$1 = state_85120;
var statearr_85128_85485 = state_85120__$1;
(statearr_85128_85485[(2)] = inst_85102);

(statearr_85128_85485[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85121 === (6))){
var inst_85082 = (state_85120[(9)]);
var inst_85091 = (inst_85082 == null);
var inst_85092 = cljs.core.not(inst_85091);
var state_85120__$1 = state_85120;
if(inst_85092){
var statearr_85129_85486 = state_85120__$1;
(statearr_85129_85486[(1)] = (8));

} else {
var statearr_85130_85487 = state_85120__$1;
(statearr_85130_85487[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85121 === (3))){
var inst_85118 = (state_85120[(2)]);
var state_85120__$1 = state_85120;
return cljs.core.async.impl.ioc_helpers.return_chan(state_85120__$1,inst_85118);
} else {
if((state_val_85121 === (12))){
var state_85120__$1 = state_85120;
var statearr_85131_85488 = state_85120__$1;
(statearr_85131_85488[(2)] = false);

(statearr_85131_85488[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85121 === (2))){
var inst_85077 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_85078 = [ch_recv,ch_ctrl];
var inst_85079 = (new cljs.core.PersistentVector(null,2,(5),inst_85077,inst_85078,null));
var state_85120__$1 = state_85120;
return cljs.core.async.ioc_alts_BANG_(state_85120__$1,(4),inst_85079);
} else {
if((state_val_85121 === (11))){
var state_85120__$1 = state_85120;
var statearr_85132_85489 = state_85120__$1;
(statearr_85132_85489[(2)] = true);

(statearr_85132_85489[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85121 === (9))){
var state_85120__$1 = state_85120;
var statearr_85133_85490 = state_85120__$1;
(statearr_85133_85490[(2)] = false);

(statearr_85133_85490[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85121 === (5))){
var state_85120__$1 = state_85120;
var statearr_85134_85491 = state_85120__$1;
(statearr_85134_85491[(2)] = null);

(statearr_85134_85491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85121 === (14))){
var inst_85082 = (state_85120[(9)]);
var inst_85107 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_85082);
var state_85120__$1 = state_85120;
var statearr_85135_85492 = state_85120__$1;
(statearr_85135_85492[(2)] = inst_85107);

(statearr_85135_85492[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85121 === (16))){
var inst_85081 = (state_85120[(7)]);
var inst_85083 = (state_85120[(8)]);
var inst_85082 = (state_85120[(9)]);
var inst_85086 = (state_85120[(10)]);
var inst_85110 = (state_85120[(2)]);
var inst_85111 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_85110,new cljs.core.Keyword(null,"event","event",301435442));
var inst_85112 = (function (){var vec__85074 = inst_85081;
var v = inst_85082;
var p = inst_85083;
var stop_QMARK_ = inst_85086;
var map__85089 = inst_85110;
var event_msg = inst_85110;
var event = inst_85111;
return (function (){
try{if(cljs.core.truth_(trace_evs_QMARK_)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",1754,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
}),null)),null,-160491097,null);
} else {
}

var G__85138 = (cljs.core.truth_(server_QMARK_)?(function (){var e = (function (){try{if(taoensso.sente.server_event_msg_QMARK_(event_msg)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e85139){if((e85139 instanceof Error)){
var e = e85139;
return e;
} else {
throw e85139;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_(null,"taoensso.sente",1757,"(server-event-msg? event-msg)",event_msg,e,null);
}
})():(function (){var e = (function (){try{if(taoensso.sente.client_event_msg_QMARK_(event_msg)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e85140){if((e85140 instanceof Error)){
var e = e85140;
return e;
} else {
throw e85140;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_(null,"taoensso.sente",1758,"(client-event-msg? event-msg)",event_msg,e,null);
}
})());
return (event_msg_handler.cljs$core$IFn$_invoke$arity$1 ? event_msg_handler.cljs$core$IFn$_invoke$arity$1(G__85138) : event_msg_handler.call(null,G__85138));
}catch (e85136){var e1 = e85136;
try{var temp__5751__auto__ = error_handler;
if(cljs.core.truth_(temp__5751__auto__)){
var eh = temp__5751__auto__;
return (error_handler.cljs$core$IFn$_invoke$arity$2 ? error_handler.cljs$core$IFn$_invoke$arity$2(e1,event_msg) : error_handler.call(null,e1,event_msg));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",1763,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,"Chsk router `event-msg-handler` error: %s",event], null);
}),null)),null,-1794452402,null);
}
}catch (e85137){var e2 = e85137;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",1764,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
}),null)),null,-1959410918,null);
}}});
})();
var inst_85113 = execute1(inst_85112);
var state_85120__$1 = (function (){var statearr_85141 = state_85120;
(statearr_85141[(11)] = inst_85113);

return statearr_85141;
})();
var statearr_85142_85493 = state_85120__$1;
(statearr_85142_85493[(2)] = null);

(statearr_85142_85493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85121 === (10))){
var inst_85105 = (state_85120[(2)]);
var state_85120__$1 = state_85120;
if(cljs.core.truth_(inst_85105)){
var statearr_85143_85494 = state_85120__$1;
(statearr_85143_85494[(1)] = (14));

} else {
var statearr_85144_85495 = state_85120__$1;
(statearr_85144_85495[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85121 === (8))){
var inst_85082 = (state_85120[(9)]);
var inst_85094 = inst_85082.cljs$lang$protocol_mask$partition0$;
var inst_85095 = (inst_85094 & (64));
var inst_85096 = inst_85082.cljs$core$ISeq$;
var inst_85097 = (cljs.core.PROTOCOL_SENTINEL === inst_85096);
var inst_85098 = ((inst_85095) || (inst_85097));
var state_85120__$1 = state_85120;
if(cljs.core.truth_(inst_85098)){
var statearr_85145_85496 = state_85120__$1;
(statearr_85145_85496[(1)] = (11));

} else {
var statearr_85146_85497 = state_85120__$1;
(statearr_85146_85497[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__60366__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__60366__auto____0 = (function (){
var statearr_85147 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_85147[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__60366__auto__);

(statearr_85147[(1)] = (1));

return statearr_85147;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__60366__auto____1 = (function (state_85120){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_85120);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e85148){var ex__60369__auto__ = e85148;
var statearr_85149_85498 = state_85120;
(statearr_85149_85498[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_85120[(4)]))){
var statearr_85150_85499 = state_85120;
(statearr_85150_85499[(1)] = cljs.core.first((state_85120[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__85500 = state_85120;
state_85120 = G__85500;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__60366__auto__ = function(state_85120){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__60366__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__60366__auto____1.call(this,state_85120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__60366__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__60366__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__60366__auto__;
})()
})();
var state__60390__auto__ = (function (){var statearr_85151 = f__60389__auto__();
(statearr_85151[(6)] = c__60388__auto___85479);

return statearr_85151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60390__auto__);
}));


return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_(ch_ctrl);
});
});
/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 * 
 *   Or for simple automatic future-based threading of every request, enable
 *   the `:simple-auto-threading?` opt (disabled by default).
 */
taoensso.sente.start_server_chsk_router_BANG_ = (function taoensso$sente$start_server_chsk_router_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___85501 = arguments.length;
var i__4737__auto___85502 = (0);
while(true){
if((i__4737__auto___85502 < len__4736__auto___85501)){
args__4742__auto__.push((arguments[i__4737__auto___85502]));

var G__85503 = (i__4737__auto___85502 + (1));
i__4737__auto___85502 = G__85503;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__85155){
var vec__85156 = p__85155;
var map__85159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85156,(0),null);
var map__85159__$1 = (((((!((map__85159 == null))))?(((((map__85159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85159):map__85159);
var opts = map__85159__$1;
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85159__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85159__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85159__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
return taoensso.sente._start_chsk_router_BANG_(new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
}));

(taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq85152){
var G__85153 = cljs.core.first(seq85152);
var seq85152__$1 = cljs.core.next(seq85152);
var G__85154 = cljs.core.first(seq85152__$1);
var seq85152__$2 = cljs.core.next(seq85152__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__85153,G__85154,seq85152__$2);
}));

/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 */
taoensso.sente.start_client_chsk_router_BANG_ = (function taoensso$sente$start_client_chsk_router_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___85504 = arguments.length;
var i__4737__auto___85505 = (0);
while(true){
if((i__4737__auto___85505 < len__4736__auto___85504)){
args__4742__auto__.push((arguments[i__4737__auto___85505]));

var G__85506 = (i__4737__auto___85505 + (1));
i__4737__auto___85505 = G__85506;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__85164){
var vec__85165 = p__85164;
var map__85168 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85165,(0),null);
var map__85168__$1 = (((((!((map__85168 == null))))?(((((map__85168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85168):map__85168);
var opts = map__85168__$1;
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85168__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85168__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_(cljs.core.not(new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
}));

(taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq85161){
var G__85162 = cljs.core.first(seq85161);
var seq85161__$1 = cljs.core.next(seq85161);
var G__85163 = cljs.core.first(seq85161__$1);
var seq85161__$2 = cljs.core.next(seq85161__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__85162,G__85163,seq85161__$2);
}));

taoensso.sente.event_msg_QMARK_ = taoensso.sente.client_event_msg_QMARK_;
/**
 * Platform-specific alias for `make-channel-socket-server!` or
 *   `make-channel-socket-client!`. Please see the appropriate aliased fn
 * docstring for details.
 */
taoensso.sente.make_channel_socket_BANG_ = taoensso.sente.make_channel_socket_client_BANG_;
/**
 * Platform-specific alias for `start-server-chsk-router!` or
 *   `start-client-chsk-router!`. Please see the appropriate aliased fn
 *   docstring for details.
 */
taoensso.sente.start_chsk_router_BANG_ = taoensso.sente.start_client_chsk_router_BANG_;
/**
 * DEPRECATED: Please use `start-chsk-router!` instead
 */
taoensso.sente.start_chsk_router_loop_BANG_ = (function taoensso$sente$start_chsk_router_loop_BANG_(event_handler,ch_recv){
return taoensso.sente.start_client_chsk_router_BANG_(ch_recv,(function (ev_msg){
var G__85170 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(ev_msg);
var G__85171 = new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(ev_msg);
return (event_handler.cljs$core$IFn$_invoke$arity$2 ? event_handler.cljs$core$IFn$_invoke$arity$2(G__85170,G__85171) : event_handler.call(null,G__85170,G__85171));
}));
});

/**
 * DEPRECATED. Please use `timbre/set-level!` instead
 */
taoensso.sente.set_logging_level_BANG_ = taoensso.timbre.set_level_BANG_;

/**
 * DEPRECATED: Please use `ajax-lite` instead
 */
taoensso.sente.ajax_call = taoensso.encore.ajax_lite;

/**
 * DEPRECATED
 */
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__85172,websocket_QMARK_){
var map__85173 = p__85172;
var map__85173__$1 = (((((!((map__85173 == null))))?(((((map__85173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85173):map__85173);
var location = map__85173__$1;
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85173__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85173__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85173__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
var protocol__$1 = (cljs.core.truth_(websocket_QMARK_)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"https:"))?"wss:":"ws:"):protocol);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol__$1),"//",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = path;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return pathname;
}
})())].join('');
});

//# sourceMappingURL=taoensso.sente.js.map
