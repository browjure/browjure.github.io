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
if(cljs.core.not((function (){var G__82351 = cljs.core.count(x);
var fexpr__82350 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null);
return (fexpr__82350.cljs$core$IFn$_invoke$arity$1 ? fexpr__82350.cljs$core$IFn$_invoke$arity$1(G__82351) : fexpr__82350.call(null,G__82351));
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-length","wrong-length",1367572281),taoensso.sente.expected(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),x)], null);
} else {
var vec__82356 = x;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82356,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82356,(1),null);
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
var map__82389 = x;
var map__82389__$1 = (((((!((map__82389 == null))))?(((((map__82389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82389):map__82389);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82389__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82389__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82389__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82389__$1,new cljs.core.Keyword(null,"event","event",301435442));
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
var map__82412 = x;
var map__82412__$1 = (((((!((map__82412 == null))))?(((((map__82412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82412):map__82412);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82412__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82412__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82412__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var send_buffers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82412__$1,new cljs.core.Keyword(null,"send-buffers","send-buffers",-1788003787));
var ring_req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82412__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82412__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82412__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82412__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
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
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__82419){
var map__82420 = p__82419;
var map__82420__$1 = (((((!((map__82420 == null))))?(((((map__82420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82420):map__82420);
var ev_msg = map__82420__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82420__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82420__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__82423 = taoensso.sente.as_event(event);
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82423,(0),null);
var ev__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82423,(1),null);
var valid_event = vec__82423;
var ev_msg_STAR_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null)], 0));
if((!(taoensso.sente.server_event_msg_QMARK_(ev_msg_STAR_)))){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",194,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
}),null)),null,499753086,null);
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch_recv,ev_msg_STAR_);
}
});
taoensso.sente.cb_error_QMARK_ = (function taoensso$sente$cb_error_QMARK_(cb_reply_clj){
var fexpr__82429 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264),null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439),null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489),null], null), null);
return (fexpr__82429.cljs$core$IFn$_invoke$arity$1 ? fexpr__82429.cljs$core$IFn$_invoke$arity$1(cb_reply_clj) : fexpr__82429.call(null,cb_reply_clj));
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
}catch (e82435){var t = e82435;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",215,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
}),null)),null,-898094221,null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-package","chsk/bad-package",501893679),pstr], null);
}})();
var vec__82432 = ((wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82432,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82432,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",221,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
}),null)),null,-1769113657,null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var G__82442 = arguments.length;
switch (G__82442) {
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
}),null)),null,-1258995835,null);

return pstr;
}));

(taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3 = (function (packer,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
var pstr = ["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.interfaces.pack(packer,wrapped_clj))].join('');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",237,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (wrapped): %s -> %s",wrapped_clj,pstr], null);
}),null)),null,1631480426,null);

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
var e = (function (){try{if((function (p1__82453_SHARP_){
if((!((p1__82453_SHARP_ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__82453_SHARP_.taoensso$sente$interfaces$IPacker$)))){
return true;
} else {
if((!p1__82453_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IPacker,p1__82453_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IPacker,p1__82453_SHARP_);
}
})(x)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e82456){if((e82456 instanceof Error)){
var e = e82456;
return e;
} else {
throw e82456;

}
}})();
if((e == null)){
return x;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",250,"((fn* [p1__82453#] (satisfies? interfaces/IPacker p1__82453#)) x)",x,e,null);
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
if(cljs.core.truth_((((!(have_origin_QMARK_)))?taoensso.encore.rsome((function (p1__82462_SHARP_){
return clojure.string.starts_with_QMARK_(referer,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__82462_SHARP_),"/"].join(''));
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
var len__4736__auto___83845 = arguments.length;
var i__4737__auto___83846 = (0);
while(true){
if((i__4737__auto___83846 < len__4736__auto___83845)){
args__4742__auto__.push((arguments[i__4737__auto___83846]));

var G__83847 = (i__4737__auto___83846 + (1));
i__4737__auto___83846 = G__83847;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_ch_adapter,p__82483){
var vec__82485 = p__82483;
var map__82488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82485,(0),null);
var map__82488__$1 = (((((!((map__82488 == null))))?(((((map__82488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82488):map__82488);
var ws_kalive_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__82488__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"secs","secs",1532330091),(25)], 0)));
var _QMARK_unauthorized_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82488__$1,new cljs.core.Keyword(null,"?unauthorized-fn","?unauthorized-fn",-1883475616));
var send_buf_ms_ws = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__82488__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var allowed_origins = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__82488__$1,new cljs.core.Keyword(null,"allowed-origins","allowed-origins",1477851683),new cljs.core.Keyword(null,"all","all",892129742));
var lp_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__82488__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"secs","secs",1532330091),(20)], 0)));
var csrf_token_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__82488__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),(function (ring_req){
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
var packer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__82488__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var unauthorized_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__82488__$1,new cljs.core.Keyword(null,"unauthorized-fn","unauthorized-fn",-2032603957),(function (_ring_req){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),(401),new cljs.core.Keyword(null,"body","body",-2049205669),"Unauthorized request"], null);
}));
var send_buf_ms_ajax = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__82488__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var bad_origin_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__82488__$1,new cljs.core.Keyword(null,"bad-origin-fn","bad-origin-fn",1385595727),(function (_ring_req){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),(403),new cljs.core.Keyword(null,"body","body",-2049205669),"Unauthorized origin"], null);
}));
var handshake_data_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__82488__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),(function (ring_req){
return null;
}));
var user_id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__82488__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),(function (ring_req){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
}));
var recv_buf_or_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__82488__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer((1000)));
var authorized_QMARK__fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82488__$1,new cljs.core.Keyword(null,"authorized?-fn","authorized?-fn",-1334669261));
var bad_csrf_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__82488__$1,new cljs.core.Keyword(null,"bad-csrf-fn","bad-csrf-fn",16619032),(function (_ring_req){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),(403),new cljs.core.Keyword(null,"body","body",-2049205669),"Bad CSRF token"], null);
}));
var e_83848 = (function (){try{if(taoensso.encore.pos_int_QMARK_(send_buf_ms_ajax)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e82498){if((e82498 instanceof Error)){
var e_83848 = e82498;
return e_83848;
} else {
throw e82498;

}
}})();
if((e_83848 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",394,"(enc/pos-int? send-buf-ms-ajax)",send_buf_ms_ajax,e_83848,null);
}

var e_83849 = (function (){try{if(taoensso.encore.pos_int_QMARK_(send_buf_ms_ws)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e82500){if((e82500 instanceof Error)){
var e_83849 = e82500;
return e_83849;
} else {
throw e82500;

}
}})();
if((e_83849 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",394,"(enc/pos-int? send-buf-ms-ws)",send_buf_ms_ws,e_83849,null);
}


var e_83850 = (function (){try{if((function (p1__82469_SHARP_){
if((!((p1__82469_SHARP_ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__82469_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)))){
return true;
} else {
if((!p1__82469_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IServerChanAdapter,p1__82469_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IServerChanAdapter,p1__82469_SHARP_);
}
})(web_server_ch_adapter)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e82505){if((e82505 instanceof Error)){
var e_83850 = e82505;
return e_83850;
} else {
throw e82505;

}
}})();
if((e_83850 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",395,"((fn* [p1__82469#] (satisfies? interfaces/IServerChanAdapter p1__82469#)) web-server-ch-adapter)",web_server_ch_adapter,e_83850,null);
}

var max_ms_83851 = taoensso.sente.default_client_side_ajax_timeout_ms;
if((lp_timeout_ms >= max_ms_83851)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([":lp-timeout-ms must be < ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_ms_83851)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),lp_timeout_ms,new cljs.core.Keyword(null,"default-client-side-ajax-timeout-ms","default-client-side-ajax-timeout-ms",1149929762),max_ms_83851], null));
} else {
}

var allowed_origins__$1 = (cljs.core.truth_((function (x){
var or__4126__auto__ = cljs.core.set_QMARK_(x);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__82513 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all","all",892129742),null], null), null);
return (fexpr__82513.cljs$core$IFn$_invoke$arity$1 ? fexpr__82513.cljs$core$IFn$_invoke$arity$1(x) : fexpr__82513.call(null,x));
}
})(allowed_origins))?allowed_origins:taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",404,"([:or set? #{:all}] allowed-origins)",allowed_origins,null,null));
var packer__$1 = taoensso.sente.coerce_packer(packer);
var ch_recv = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(recv_buf_or_n);
var user_id_fn__$1 = (function (ring_req,client_id){
var or__4126__auto__ = (function (){var G__82515 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);
return (user_id_fn.cljs$core$IFn$_invoke$arity$1 ? user_id_fn.cljs$core$IFn$_invoke$arity$1(G__82515) : user_id_fn.call(null,G__82515));
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
var G__83852 = null;
var G__83852__3 = (function (conn_type,uid,client_id){
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),(function (_QMARK_v){
var vec__82520 = _QMARK_v;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82520,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82520,(1),null);
var new_udt = taoensso.encore.now_udt();
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),_QMARK_sch], null));
}));
});
var G__83852__4 = (function (conn_type,uid,client_id,new__QMARK_sch){
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),(function (_QMARK_v){
var new_udt = taoensso.encore.now_udt();
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new__QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),new__QMARK_sch], null));
}));
});
G__83852 = function(conn_type,uid,client_id,new__QMARK_sch){
switch(arguments.length){
case 3:
return G__83852__3.call(this,conn_type,uid,client_id);
case 4:
return G__83852__4.call(this,conn_type,uid,client_id,new__QMARK_sch);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__83852.cljs$core$IFn$_invoke$arity$3 = G__83852__3;
G__83852.cljs$core$IFn$_invoke$arity$4 = G__83852__4;
return G__83852;
})()
;
var connect_uid_BANG_ = (function (conn_type,uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e82526){if((e82526 instanceof Error)){
var e = e82526;
return e;
} else {
throw e82526;

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

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(connected_uids_,cljs.core.PersistentVector.EMPTY,(function (p__82529){
var map__82531 = p__82529;
var map__82531__$1 = (((((!((map__82531 == null))))?(((((map__82531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82531):map__82531);
var old_m = map__82531__$1;
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82531__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82531__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82531__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__82536 = conn_type;
var G__82536__$1 = (((G__82536 instanceof cljs.core.Keyword))?G__82536.fqn:null);
switch (G__82536__$1) {
case "ws":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ws,uid),new cljs.core.Keyword(null,"ajax","ajax",814345549),ajax,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid)], null);

break;
case "ajax":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ajax,uid),new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__82536__$1)].join('')));

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
}catch (e82540){if((e82540 instanceof Error)){
var e = e82540;
return e;
} else {
throw e82540;

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

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(connected_uids_,cljs.core.PersistentVector.EMPTY,(function (p__82543){
var map__82544 = p__82543;
var map__82544__$1 = (((((!((map__82544 == null))))?(((((map__82544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82544):map__82544);
var old_m = map__82544__$1;
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82544__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82544__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82544__$1,new cljs.core.Keyword(null,"any","any",1705907423));
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
var G__83865__delegate = function (user_id,ev,p__82551){
var vec__82552 = p__82551;
var map__82555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82552,(0),null);
var map__82555__$1 = (((((!((map__82555 == null))))?(((((map__82555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82555):map__82555);
var opts = map__82555__$1;
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82555__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_83866 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486):user_id);
var __83867 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",483,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_83866,ev], null);
}),null)),null,-454686056,null);
var __83868__$1 = (cljs.core.truth_(uid_83866)?null:(function(){throw (new Error(["Assert failed: ",["Support for sending to `nil` user-ids has been REMOVED. ","Please send to `:sente/all-users-without-uid` instead."].join(''),"\n","uid"].join('')))})());
var __83869__$2 = taoensso.sente.assert_event(ev);
var ev_uuid_83870 = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
var flush_buffer_BANG__83871 = (function (conn_type){
var temp__5753__auto__ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type], null),(function (m){
var vec__82561 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,uid_83866);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82561,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82561,(1),null);
if(cljs.core.contains_QMARK_(ev_uuids,ev_uuid_83870)){
return taoensso.encore.swapped(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,uid_83866),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,uid_83866));
} else {
return taoensso.encore.swapped(m,null);
}
}));
if(cljs.core.truth_(temp__5753__auto__)){
var pulled = temp__5753__auto__;
var vec__82564 = pulled;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82564,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82564,(1),null);
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
}),null)),null,1811157236,null);

var G__82568 = conn_type;
var G__82568__$1 = (((G__82568 instanceof cljs.core.Keyword))?G__82568.fqn:null);
switch (G__82568__$1) {
case "ws":
return (taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.cljs$core$IFn$_invoke$arity$4 ? taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.cljs$core$IFn$_invoke$arity$4(conns_,uid_83866,buffered_evs_ppstr,upd_conn_BANG_) : taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_83866,buffered_evs_ppstr,upd_conn_BANG_));

break;
case "ajax":
return (taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,uid_83866,buffered_evs_ppstr) : taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_83866,buffered_evs_ppstr));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__82568__$1)].join('')));

}
} else {
return null;
}
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",524,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_83866], null);
}),null)),null,416461136,null);

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__83871(new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__83871(new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
}

var seq__82571_83873 = cljs.core.seq(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_83866], null))));
var chunk__82572_83874 = null;
var count__82573_83875 = (0);
var i__82574_83876 = (0);
while(true){
if((i__82574_83876 < count__82573_83875)){
var vec__82581_83877 = chunk__82572_83874.cljs$core$IIndexed$_nth$arity$2(null,i__82574_83876);
var _QMARK_sch_83878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82581_83877,(0),null);
var _udt_83879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82581_83877,(1),null);
var temp__5753__auto___83880 = _QMARK_sch_83878;
if(cljs.core.truth_(temp__5753__auto___83880)){
var sch_83881 = temp__5753__auto___83880;
taoensso.sente.interfaces.sch_close_BANG_(sch_83881);
} else {
}


var G__83882 = seq__82571_83873;
var G__83883 = chunk__82572_83874;
var G__83884 = count__82573_83875;
var G__83885 = (i__82574_83876 + (1));
seq__82571_83873 = G__83882;
chunk__82572_83874 = G__83883;
count__82573_83875 = G__83884;
i__82574_83876 = G__83885;
continue;
} else {
var temp__5753__auto___83886 = cljs.core.seq(seq__82571_83873);
if(temp__5753__auto___83886){
var seq__82571_83887__$1 = temp__5753__auto___83886;
if(cljs.core.chunked_seq_QMARK_(seq__82571_83887__$1)){
var c__4556__auto___83888 = cljs.core.chunk_first(seq__82571_83887__$1);
var G__83889 = cljs.core.chunk_rest(seq__82571_83887__$1);
var G__83890 = c__4556__auto___83888;
var G__83891 = cljs.core.count(c__4556__auto___83888);
var G__83892 = (0);
seq__82571_83873 = G__83889;
chunk__82572_83874 = G__83890;
count__82573_83875 = G__83891;
i__82574_83876 = G__83892;
continue;
} else {
var vec__82589_83893 = cljs.core.first(seq__82571_83887__$1);
var _QMARK_sch_83894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82589_83893,(0),null);
var _udt_83895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82589_83893,(1),null);
var temp__5753__auto___83896__$1 = _QMARK_sch_83894;
if(cljs.core.truth_(temp__5753__auto___83896__$1)){
var sch_83897 = temp__5753__auto___83896__$1;
taoensso.sente.interfaces.sch_close_BANG_(sch_83897);
} else {
}


var G__83898 = cljs.core.next(seq__82571_83887__$1);
var G__83899 = null;
var G__83900 = (0);
var G__83901 = (0);
seq__82571_83873 = G__83898;
chunk__82572_83874 = G__83899;
count__82573_83875 = G__83900;
i__82574_83876 = G__83901;
continue;
}
} else {
}
}
break;
}

var seq__82592_83902 = cljs.core.seq(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_83866], null))));
var chunk__82593_83903 = null;
var count__82594_83904 = (0);
var i__82595_83905 = (0);
while(true){
if((i__82595_83905 < count__82594_83904)){
var vec__82608_83906 = chunk__82593_83903.cljs$core$IIndexed$_nth$arity$2(null,i__82595_83905);
var _QMARK_sch_83907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82608_83906,(0),null);
var _udt_83908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82608_83906,(1),null);
var temp__5753__auto___83909 = _QMARK_sch_83907;
if(cljs.core.truth_(temp__5753__auto___83909)){
var sch_83910 = temp__5753__auto___83909;
taoensso.sente.interfaces.sch_close_BANG_(sch_83910);
} else {
}


var G__83911 = seq__82592_83902;
var G__83912 = chunk__82593_83903;
var G__83913 = count__82594_83904;
var G__83914 = (i__82595_83905 + (1));
seq__82592_83902 = G__83911;
chunk__82593_83903 = G__83912;
count__82594_83904 = G__83913;
i__82595_83905 = G__83914;
continue;
} else {
var temp__5753__auto___83915 = cljs.core.seq(seq__82592_83902);
if(temp__5753__auto___83915){
var seq__82592_83916__$1 = temp__5753__auto___83915;
if(cljs.core.chunked_seq_QMARK_(seq__82592_83916__$1)){
var c__4556__auto___83917 = cljs.core.chunk_first(seq__82592_83916__$1);
var G__83918 = cljs.core.chunk_rest(seq__82592_83916__$1);
var G__83919 = c__4556__auto___83917;
var G__83920 = cljs.core.count(c__4556__auto___83917);
var G__83921 = (0);
seq__82592_83902 = G__83918;
chunk__82593_83903 = G__83919;
count__82594_83904 = G__83920;
i__82595_83905 = G__83921;
continue;
} else {
var vec__82614_83922 = cljs.core.first(seq__82592_83916__$1);
var _QMARK_sch_83923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82614_83922,(0),null);
var _udt_83924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82614_83922,(1),null);
var temp__5753__auto___83925__$1 = _QMARK_sch_83923;
if(cljs.core.truth_(temp__5753__auto___83925__$1)){
var sch_83926 = temp__5753__auto___83925__$1;
taoensso.sente.interfaces.sch_close_BANG_(sch_83926);
} else {
}


var G__83927 = cljs.core.next(seq__82592_83916__$1);
var G__83928 = null;
var G__83929 = (0);
var G__83930 = (0);
seq__82592_83902 = G__83927;
chunk__82593_83903 = G__83928;
count__82594_83904 = G__83929;
i__82595_83905 = G__83930;
continue;
}
} else {
}
}
break;
}
} else {
var seq__82617_83931 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__82618_83932 = null;
var count__82619_83933 = (0);
var i__82620_83934 = (0);
while(true){
if((i__82620_83934 < count__82619_83933)){
var conn_type_83935 = chunk__82618_83932.cljs$core$IIndexed$_nth$arity$2(null,i__82620_83934);
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_83935,uid_83866], null),((function (seq__82617_83931,chunk__82618_83932,count__82619_83933,i__82620_83934,conn_type_83935,uid_83866,__83867,__83868__$1,__83869__$2,ev_uuid_83870,flush_buffer_BANG__83871,vec__82552,map__82555,map__82555__$1,opts,flush_QMARK_,allowed_origins__$1,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__82485,map__82488,map__82488__$1,ws_kalive_ms,_QMARK_unauthorized_fn,send_buf_ms_ws,allowed_origins,lp_timeout_ms,csrf_token_fn,packer,unauthorized_fn,send_buf_ms_ajax,bad_origin_fn,handshake_data_fn,user_id_fn,recv_buf_or_n,authorized_QMARK__fn,bad_csrf_fn){
return (function (_QMARK_v){
if(cljs.core.not(_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_83870])], null);
} else {
var vec__82631 = _QMARK_v;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82631,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82631,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffered_evs,ev),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ev_uuids,ev_uuid_83870)], null);
}
});})(seq__82617_83931,chunk__82618_83932,count__82619_83933,i__82620_83934,conn_type_83935,uid_83866,__83867,__83868__$1,__83869__$2,ev_uuid_83870,flush_buffer_BANG__83871,vec__82552,map__82555,map__82555__$1,opts,flush_QMARK_,allowed_origins__$1,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__82485,map__82488,map__82488__$1,ws_kalive_ms,_QMARK_unauthorized_fn,send_buf_ms_ws,allowed_origins,lp_timeout_ms,csrf_token_fn,packer,unauthorized_fn,send_buf_ms_ajax,bad_origin_fn,handshake_data_fn,user_id_fn,recv_buf_or_n,authorized_QMARK__fn,bad_csrf_fn))
);


var G__83936 = seq__82617_83931;
var G__83937 = chunk__82618_83932;
var G__83938 = count__82619_83933;
var G__83939 = (i__82620_83934 + (1));
seq__82617_83931 = G__83936;
chunk__82618_83932 = G__83937;
count__82619_83933 = G__83938;
i__82620_83934 = G__83939;
continue;
} else {
var temp__5753__auto___83940 = cljs.core.seq(seq__82617_83931);
if(temp__5753__auto___83940){
var seq__82617_83941__$1 = temp__5753__auto___83940;
if(cljs.core.chunked_seq_QMARK_(seq__82617_83941__$1)){
var c__4556__auto___83942 = cljs.core.chunk_first(seq__82617_83941__$1);
var G__83943 = cljs.core.chunk_rest(seq__82617_83941__$1);
var G__83944 = c__4556__auto___83942;
var G__83945 = cljs.core.count(c__4556__auto___83942);
var G__83946 = (0);
seq__82617_83931 = G__83943;
chunk__82618_83932 = G__83944;
count__82619_83933 = G__83945;
i__82620_83934 = G__83946;
continue;
} else {
var conn_type_83947 = cljs.core.first(seq__82617_83941__$1);
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_83947,uid_83866], null),((function (seq__82617_83931,chunk__82618_83932,count__82619_83933,i__82620_83934,conn_type_83947,seq__82617_83941__$1,temp__5753__auto___83940,uid_83866,__83867,__83868__$1,__83869__$2,ev_uuid_83870,flush_buffer_BANG__83871,vec__82552,map__82555,map__82555__$1,opts,flush_QMARK_,allowed_origins__$1,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__82485,map__82488,map__82488__$1,ws_kalive_ms,_QMARK_unauthorized_fn,send_buf_ms_ws,allowed_origins,lp_timeout_ms,csrf_token_fn,packer,unauthorized_fn,send_buf_ms_ajax,bad_origin_fn,handshake_data_fn,user_id_fn,recv_buf_or_n,authorized_QMARK__fn,bad_csrf_fn){
return (function (_QMARK_v){
if(cljs.core.not(_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_83870])], null);
} else {
var vec__82636 = _QMARK_v;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82636,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82636,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffered_evs,ev),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ev_uuids,ev_uuid_83870)], null);
}
});})(seq__82617_83931,chunk__82618_83932,count__82619_83933,i__82620_83934,conn_type_83947,seq__82617_83941__$1,temp__5753__auto___83940,uid_83866,__83867,__83868__$1,__83869__$2,ev_uuid_83870,flush_buffer_BANG__83871,vec__82552,map__82555,map__82555__$1,opts,flush_QMARK_,allowed_origins__$1,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__82485,map__82488,map__82488__$1,ws_kalive_ms,_QMARK_unauthorized_fn,send_buf_ms_ws,allowed_origins,lp_timeout_ms,csrf_token_fn,packer,unauthorized_fn,send_buf_ms_ajax,bad_origin_fn,handshake_data_fn,user_id_fn,recv_buf_or_n,authorized_QMARK__fn,bad_csrf_fn))
);


var G__83948 = cljs.core.next(seq__82617_83941__$1);
var G__83949 = null;
var G__83950 = (0);
var G__83951 = (0);
seq__82617_83931 = G__83948;
chunk__82618_83932 = G__83949;
count__82619_83933 = G__83950;
i__82620_83934 = G__83951;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__83871(new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__83871(new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
var ws_timeout_83952 = cljs.core.async.timeout(send_buf_ms_ws);
var ajax_timeout_83953 = cljs.core.async.timeout(send_buf_ms_ajax);
var c__71447__auto___83954 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__71448__auto__ = (function (){var switch__71378__auto__ = (function (state_82644){
var state_val_82645 = (state_82644[(1)]);
if((state_val_82645 === (1))){
var state_82644__$1 = state_82644;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_82644__$1,(2),ws_timeout_83952);
} else {
if((state_val_82645 === (2))){
var inst_82641 = (state_82644[(2)]);
var inst_82642 = flush_buffer_BANG__83871(new cljs.core.Keyword(null,"ws","ws",86841443));
var state_82644__$1 = (function (){var statearr_82651 = state_82644;
(statearr_82651[(7)] = inst_82641);

return statearr_82651;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_82644__$1,inst_82642);
} else {
return null;
}
}
});
return (function() {
var taoensso$sente$state_machine__71379__auto__ = null;
var taoensso$sente$state_machine__71379__auto____0 = (function (){
var statearr_82653 = [null,null,null,null,null,null,null,null];
(statearr_82653[(0)] = taoensso$sente$state_machine__71379__auto__);

(statearr_82653[(1)] = (1));

return statearr_82653;
});
var taoensso$sente$state_machine__71379__auto____1 = (function (state_82644){
while(true){
var ret_value__71380__auto__ = (function (){try{while(true){
var result__71381__auto__ = switch__71378__auto__(state_82644);
if(cljs.core.keyword_identical_QMARK_(result__71381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71381__auto__;
}
break;
}
}catch (e82659){var ex__71382__auto__ = e82659;
var statearr_82660_83955 = state_82644;
(statearr_82660_83955[(2)] = ex__71382__auto__);


if(cljs.core.seq((state_82644[(4)]))){
var statearr_82663_83956 = state_82644;
(statearr_82663_83956[(1)] = cljs.core.first((state_82644[(4)])));

} else {
throw ex__71382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__83957 = state_82644;
state_82644 = G__83957;
continue;
} else {
return ret_value__71380__auto__;
}
break;
}
});
taoensso$sente$state_machine__71379__auto__ = function(state_82644){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__71379__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__71379__auto____1.call(this,state_82644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__71379__auto____0;
taoensso$sente$state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__71379__auto____1;
return taoensso$sente$state_machine__71379__auto__;
})()
})();
var state__71449__auto__ = (function (){var statearr_82664 = f__71448__auto__();
(statearr_82664[(6)] = c__71447__auto___83954);

return statearr_82664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71449__auto__);
}));


var c__71447__auto___83958 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__71448__auto__ = (function (){var switch__71378__auto__ = (function (state_82672){
var state_val_82673 = (state_82672[(1)]);
if((state_val_82673 === (1))){
var state_82672__$1 = state_82672;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_82672__$1,(2),ajax_timeout_83953);
} else {
if((state_val_82673 === (2))){
var inst_82669 = (state_82672[(2)]);
var inst_82670 = flush_buffer_BANG__83871(new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_82672__$1 = (function (){var statearr_82678 = state_82672;
(statearr_82678[(7)] = inst_82669);

return statearr_82678;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_82672__$1,inst_82670);
} else {
return null;
}
}
});
return (function() {
var taoensso$sente$state_machine__71379__auto__ = null;
var taoensso$sente$state_machine__71379__auto____0 = (function (){
var statearr_82681 = [null,null,null,null,null,null,null,null];
(statearr_82681[(0)] = taoensso$sente$state_machine__71379__auto__);

(statearr_82681[(1)] = (1));

return statearr_82681;
});
var taoensso$sente$state_machine__71379__auto____1 = (function (state_82672){
while(true){
var ret_value__71380__auto__ = (function (){try{while(true){
var result__71381__auto__ = switch__71378__auto__(state_82672);
if(cljs.core.keyword_identical_QMARK_(result__71381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71381__auto__;
}
break;
}
}catch (e82683){var ex__71382__auto__ = e82683;
var statearr_82684_83959 = state_82672;
(statearr_82684_83959[(2)] = ex__71382__auto__);


if(cljs.core.seq((state_82672[(4)]))){
var statearr_82685_83960 = state_82672;
(statearr_82685_83960[(1)] = cljs.core.first((state_82672[(4)])));

} else {
throw ex__71382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__83961 = state_82672;
state_82672 = G__83961;
continue;
} else {
return ret_value__71380__auto__;
}
break;
}
});
taoensso$sente$state_machine__71379__auto__ = function(state_82672){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__71379__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__71379__auto____1.call(this,state_82672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__71379__auto____0;
taoensso$sente$state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__71379__auto____1;
return taoensso$sente$state_machine__71379__auto__;
})()
})();
var state__71449__auto__ = (function (){var statearr_82687 = f__71448__auto__();
(statearr_82687[(6)] = c__71447__auto___83958);

return statearr_82687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71449__auto__);
}));

}
}

return null;
};
var G__83865 = function (user_id,ev,var_args){
var p__82551 = null;
if (arguments.length > 2) {
var G__83962__i = 0, G__83962__a = new Array(arguments.length -  2);
while (G__83962__i < G__83962__a.length) {G__83962__a[G__83962__i] = arguments[G__83962__i + 2]; ++G__83962__i;}
  p__82551 = new cljs.core.IndexedSeq(G__83962__a,0,null);
} 
return G__83865__delegate.call(this,user_id,ev,p__82551);};
G__83865.cljs$lang$maxFixedArity = 2;
G__83865.cljs$lang$applyTo = (function (arglist__83963){
var user_id = cljs.core.first(arglist__83963);
arglist__83963 = cljs.core.next(arglist__83963);
var ev = cljs.core.first(arglist__83963);
var p__82551 = cljs.core.rest(arglist__83963);
return G__83865__delegate(user_id,ev,p__82551);
});
G__83865.cljs$core$IFn$_invoke$arity$variadic = G__83865__delegate;
return G__83865;
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
var b2__29764__auto__ = (function (){var temp__5753__auto__ = _QMARK_unauthorized_fn;
if(cljs.core.truth_(temp__5753__auto__)){
var uf = temp__5753__auto__;
return (uf.cljs$core$IFn$_invoke$arity$1 ? uf.cljs$core$IFn$_invoke$arity$1(ring_req) : uf.call(null,ring_req));
} else {
return null;
}
})();
if((b2__29764__auto__ == null)){
return null;
} else {
var unauthorized_resp = b2__29764__auto__;
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
var b2__29749__auto__ = possible_rejection_resp(ring_req);
if(cljs.core.truth_(b2__29749__auto__)){
var resp = b2__29749__auto__;
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
var vec__82707 = taoensso.sente.unpack(packer__$1,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82707,(0),null);
var has_cb_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82707,(1),null);
var reply_fn = (function (){var replied_QMARK__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (resp_clj){
if(cljs.core.compare_and_set_BANG_(replied_QMARK__,false,true)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",642,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax post reply): %s",resp_clj], null);
}),null)),null,120444645,null);

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
var c__71447__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__71448__auto__ = (function (){var switch__71378__auto__ = (function (state_82726){
var state_val_82727 = (state_82726[(1)]);
if((state_val_82727 === (1))){
var inst_82719 = cljs.core.async.timeout(ms);
var state_82726__$1 = state_82726;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_82726__$1,(2),inst_82719);
} else {
if((state_val_82727 === (2))){
var inst_82721 = (state_82726[(2)]);
var inst_82723 = reply_fn(new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_82726__$1 = (function (){var statearr_82729 = state_82726;
(statearr_82729[(7)] = inst_82721);

return statearr_82729;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_82726__$1,inst_82723);
} else {
return null;
}
}
});
return (function() {
var taoensso$sente$state_machine__71379__auto__ = null;
var taoensso$sente$state_machine__71379__auto____0 = (function (){
var statearr_82734 = [null,null,null,null,null,null,null,null];
(statearr_82734[(0)] = taoensso$sente$state_machine__71379__auto__);

(statearr_82734[(1)] = (1));

return statearr_82734;
});
var taoensso$sente$state_machine__71379__auto____1 = (function (state_82726){
while(true){
var ret_value__71380__auto__ = (function (){try{while(true){
var result__71381__auto__ = switch__71378__auto__(state_82726);
if(cljs.core.keyword_identical_QMARK_(result__71381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71381__auto__;
}
break;
}
}catch (e82735){var ex__71382__auto__ = e82735;
var statearr_82736_83964 = state_82726;
(statearr_82736_83964[(2)] = ex__71382__auto__);


if(cljs.core.seq((state_82726[(4)]))){
var statearr_82737_83965 = state_82726;
(statearr_82737_83965[(1)] = cljs.core.first((state_82726[(4)])));

} else {
throw ex__71382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__83966 = state_82726;
state_82726 = G__83966;
continue;
} else {
return ret_value__71380__auto__;
}
break;
}
});
taoensso$sente$state_machine__71379__auto__ = function(state_82726){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__71379__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__71379__auto____1.call(this,state_82726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__71379__auto____0;
taoensso$sente$state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__71379__auto____1;
return taoensso$sente$state_machine__71379__auto__;
})()
})();
var state__71449__auto__ = (function (){var statearr_82744 = f__71448__auto__();
(statearr_82744[(6)] = c__71447__auto__);

return statearr_82744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71449__auto__);
}));

return c__71447__auto__;
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
}),null)),null,2147074363,null);

var _QMARK_handshake_data = (handshake_data_fn.cljs$core$IFn$_invoke$arity$1 ? handshake_data_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : handshake_data_fn.call(null,ring_req));
var handshake_ev = (((_QMARK_handshake_data == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,null], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,null,_QMARK_handshake_data], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,handshake_ev));
});
if(clojure.string.blank_QMARK_(client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",699,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[err_msg,": %s"].join(''),ring_req], null);
}),null)),null,2113580543,null);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req], null));
} else {
var b2__29749__auto__ = possible_rejection_resp(ring_req);
if(cljs.core.truth_(b2__29749__auto__)){
var resp = b2__29749__auto__;
return resp;
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp(web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),(function (server_ch,websocket_QMARK_){
if(cljs.core.truth_(websocket_QMARK_)){
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",710,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,sch_uuid], null);
}),null)),null,-1905696169,null);
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
var c__71447__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__71448__auto__ = (function (){var switch__71378__auto__ = (function (state_82798){
var state_val_82799 = (state_82798[(1)]);
if((state_val_82799 === (7))){
var inst_82793 = (state_82798[(2)]);
var state_82798__$1 = state_82798;
var statearr_82804_83967 = state_82798__$1;
(statearr_82804_83967[(2)] = inst_82793);

(statearr_82804_83967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82799 === (1))){
var inst_82760 = udt_open;
var inst_82761 = inst_82760;
var state_82798__$1 = (function (){var statearr_82805 = state_82798;
(statearr_82805[(7)] = inst_82761);

return statearr_82805;
})();
var statearr_82807_83968 = state_82798__$1;
(statearr_82807_83968[(2)] = null);

(statearr_82807_83968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82799 === (4))){
var inst_82770 = (state_82798[(8)]);
var inst_82765 = (state_82798[(2)]);
var inst_82766 = cljs.core.deref(conns_);
var inst_82767 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_82768 = [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id];
var inst_82769 = (new cljs.core.PersistentVector(null,3,(5),inst_82767,inst_82768,null));
var inst_82770__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_82766,inst_82769);
var state_82798__$1 = (function (){var statearr_82808 = state_82798;
(statearr_82808[(8)] = inst_82770__$1);

(statearr_82808[(9)] = inst_82765);

return statearr_82808;
})();
if(cljs.core.truth_(inst_82770__$1)){
var statearr_82810_83969 = state_82798__$1;
(statearr_82810_83969[(1)] = (5));

} else {
var statearr_82811_83970 = state_82798__$1;
(statearr_82811_83970[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82799 === (13))){
var inst_82777 = (state_82798[(10)]);
var inst_82786 = (state_82798[(2)]);
var inst_82761 = inst_82777;
var state_82798__$1 = (function (){var statearr_82812 = state_82798;
(statearr_82812[(11)] = inst_82786);

(statearr_82812[(7)] = inst_82761);

return statearr_82812;
})();
var statearr_82813_83971 = state_82798__$1;
(statearr_82813_83971[(2)] = null);

(statearr_82813_83971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82799 === (6))){
var state_82798__$1 = state_82798;
var statearr_82815_83972 = state_82798__$1;
(statearr_82815_83972[(2)] = null);

(statearr_82815_83972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82799 === (3))){
var inst_82795 = (state_82798[(2)]);
var state_82798__$1 = state_82798;
return cljs.core.async.impl.ioc_helpers.return_chan(state_82798__$1,inst_82795);
} else {
if((state_val_82799 === (12))){
var state_82798__$1 = state_82798;
var statearr_82819_83973 = state_82798__$1;
(statearr_82819_83973[(2)] = null);

(statearr_82819_83973[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82799 === (2))){
var inst_82763 = cljs.core.async.timeout(ms);
var state_82798__$1 = state_82798;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_82798__$1,(4),inst_82763);
} else {
if((state_val_82799 === (11))){
var inst_82782 = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304));
var inst_82783 = taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,inst_82782);
var state_82798__$1 = state_82798;
var statearr_82822_83974 = state_82798__$1;
(statearr_82822_83974[(2)] = inst_82783);

(statearr_82822_83974[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82799 === (9))){
var state_82798__$1 = state_82798;
var statearr_82824_83975 = state_82798__$1;
(statearr_82824_83975[(2)] = null);

(statearr_82824_83975[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82799 === (5))){
var inst_82770 = (state_82798[(8)]);
var inst_82776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_82770,(0),null);
var inst_82777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_82770,(1),null);
var inst_82778 = taoensso.sente.interfaces.sch_open_QMARK_(server_ch);
var state_82798__$1 = (function (){var statearr_82825 = state_82798;
(statearr_82825[(12)] = inst_82776);

(statearr_82825[(10)] = inst_82777);

return statearr_82825;
})();
if(cljs.core.truth_(inst_82778)){
var statearr_82828_83976 = state_82798__$1;
(statearr_82828_83976[(1)] = (8));

} else {
var statearr_82829_83977 = state_82798__$1;
(statearr_82829_83977[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82799 === (10))){
var inst_82790 = (state_82798[(2)]);
var state_82798__$1 = state_82798;
var statearr_82830_83978 = state_82798__$1;
(statearr_82830_83978[(2)] = inst_82790);

(statearr_82830_83978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82799 === (8))){
var inst_82777 = (state_82798[(10)]);
var inst_82761 = (state_82798[(7)]);
var inst_82780 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_82777,inst_82761);
var state_82798__$1 = state_82798;
if(inst_82780){
var statearr_82832_83979 = state_82798__$1;
(statearr_82832_83979[(1)] = (11));

} else {
var statearr_82833_83980 = state_82798__$1;
(statearr_82833_83980[(1)] = (12));

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
var taoensso$sente$state_machine__71379__auto__ = null;
var taoensso$sente$state_machine__71379__auto____0 = (function (){
var statearr_82835 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_82835[(0)] = taoensso$sente$state_machine__71379__auto__);

(statearr_82835[(1)] = (1));

return statearr_82835;
});
var taoensso$sente$state_machine__71379__auto____1 = (function (state_82798){
while(true){
var ret_value__71380__auto__ = (function (){try{while(true){
var result__71381__auto__ = switch__71378__auto__(state_82798);
if(cljs.core.keyword_identical_QMARK_(result__71381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71381__auto__;
}
break;
}
}catch (e82840){var ex__71382__auto__ = e82840;
var statearr_82841_83981 = state_82798;
(statearr_82841_83981[(2)] = ex__71382__auto__);


if(cljs.core.seq((state_82798[(4)]))){
var statearr_82844_83982 = state_82798;
(statearr_82844_83982[(1)] = cljs.core.first((state_82798[(4)])));

} else {
throw ex__71382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__83983 = state_82798;
state_82798 = G__83983;
continue;
} else {
return ret_value__71380__auto__;
}
break;
}
});
taoensso$sente$state_machine__71379__auto__ = function(state_82798){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__71379__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__71379__auto____1.call(this,state_82798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__71379__auto____0;
taoensso$sente$state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__71379__auto____1;
return taoensso$sente$state_machine__71379__auto__;
})()
})();
var state__71449__auto__ = (function (){var statearr_82848 = f__71448__auto__();
(statearr_82848[(6)] = c__71447__auto__);

return statearr_82848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71449__auto__);
}));

return c__71447__auto__;
} else {
return null;
}
} else {
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",739,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Ajax handshake/poll: %s (%s)",uid,sch_uuid], null);
}),null)),null,322978557,null);
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
var c__71447__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__71448__auto__ = (function (){var switch__71378__auto__ = (function (state_82884){
var state_val_82885 = (state_82884[(1)]);
if((state_val_82885 === (1))){
var inst_82853 = cljs.core.async.timeout(ms);
var state_82884__$1 = state_82884;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_82884__$1,(2),inst_82853);
} else {
if((state_val_82885 === (2))){
var inst_82860 = (state_82884[(7)]);
var inst_82855 = (state_82884[(2)]);
var inst_82856 = cljs.core.deref(conns_);
var inst_82857 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_82858 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id];
var inst_82859 = (new cljs.core.PersistentVector(null,3,(5),inst_82857,inst_82858,null));
var inst_82860__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_82856,inst_82859);
var state_82884__$1 = (function (){var statearr_82891 = state_82884;
(statearr_82891[(8)] = inst_82855);

(statearr_82891[(7)] = inst_82860__$1);

return statearr_82891;
})();
if(cljs.core.truth_(inst_82860__$1)){
var statearr_82892_83984 = state_82884__$1;
(statearr_82892_83984[(1)] = (3));

} else {
var statearr_82893_83985 = state_82884__$1;
(statearr_82893_83985[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82885 === (3))){
var inst_82860 = (state_82884[(7)]);
var inst_82868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_82860,(0),null);
var inst_82869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_82860,(1),null);
var inst_82871 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_82869,udt_open);
var state_82884__$1 = (function (){var statearr_82897 = state_82884;
(statearr_82897[(9)] = inst_82868);

return statearr_82897;
})();
if(inst_82871){
var statearr_82898_83986 = state_82884__$1;
(statearr_82898_83986[(1)] = (6));

} else {
var statearr_82899_83987 = state_82884__$1;
(statearr_82899_83987[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82885 === (4))){
var state_82884__$1 = state_82884;
var statearr_82900_83988 = state_82884__$1;
(statearr_82900_83988[(2)] = null);

(statearr_82900_83988[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82885 === (5))){
var inst_82882 = (state_82884[(2)]);
var state_82884__$1 = state_82884;
return cljs.core.async.impl.ioc_helpers.return_chan(state_82884__$1,inst_82882);
} else {
if((state_val_82885 === (6))){
var inst_82873 = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var inst_82874 = taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,inst_82873);
var state_82884__$1 = state_82884;
var statearr_82901_83989 = state_82884__$1;
(statearr_82901_83989[(2)] = inst_82874);

(statearr_82901_83989[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82885 === (7))){
var state_82884__$1 = state_82884;
var statearr_82902_83990 = state_82884__$1;
(statearr_82902_83990[(2)] = null);

(statearr_82902_83990[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82885 === (8))){
var inst_82877 = (state_82884[(2)]);
var state_82884__$1 = state_82884;
var statearr_82903_83991 = state_82884__$1;
(statearr_82903_83991[(2)] = inst_82877);

(statearr_82903_83991[(1)] = (5));


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
var taoensso$sente$state_machine__71379__auto__ = null;
var taoensso$sente$state_machine__71379__auto____0 = (function (){
var statearr_82904 = [null,null,null,null,null,null,null,null,null,null];
(statearr_82904[(0)] = taoensso$sente$state_machine__71379__auto__);

(statearr_82904[(1)] = (1));

return statearr_82904;
});
var taoensso$sente$state_machine__71379__auto____1 = (function (state_82884){
while(true){
var ret_value__71380__auto__ = (function (){try{while(true){
var result__71381__auto__ = switch__71378__auto__(state_82884);
if(cljs.core.keyword_identical_QMARK_(result__71381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71381__auto__;
}
break;
}
}catch (e82905){var ex__71382__auto__ = e82905;
var statearr_82906_83992 = state_82884;
(statearr_82906_83992[(2)] = ex__71382__auto__);


if(cljs.core.seq((state_82884[(4)]))){
var statearr_82909_83993 = state_82884;
(statearr_82909_83993[(1)] = cljs.core.first((state_82884[(4)])));

} else {
throw ex__71382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__83994 = state_82884;
state_82884 = G__83994;
continue;
} else {
return ret_value__71380__auto__;
}
break;
}
});
taoensso$sente$state_machine__71379__auto__ = function(state_82884){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__71379__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__71379__auto____1.call(this,state_82884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__71379__auto____0;
taoensso$sente$state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__71379__auto____1;
return taoensso$sente$state_machine__71379__auto__;
})()
})();
var state__71449__auto__ = (function (){var statearr_82912 = f__71448__auto__();
(statearr_82912[(6)] = c__71447__auto__);

return statearr_82912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71449__auto__);
}));

return c__71447__auto__;
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

var vec__82913 = taoensso.sente.unpack(packer__$1,req_ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82913,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82913,(1),null);
return receive_event_msg_BANG_(clj,(cljs.core.truth_(_QMARK_cb_uuid)?(function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",769,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
}),null)),null,-634146114,null);

return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(packer__$1,resp_clj,_QMARK_cb_uuid));
}):null));
}),new cljs.core.Keyword(null,"on-close","on-close",-761178394),(function (server_ch,websocket_QMARK_,_status){
var conn_type = (cljs.core.truth_(websocket_QMARK_)?new cljs.core.Keyword(null,"ws","ws",86841443):new cljs.core.Keyword(null,"ajax","ajax",814345549));
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",778,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s channel closed: %s (%s)",(cljs.core.truth_(websocket_QMARK_)?"WebSocket":"Ajax"),uid,sch_uuid], null);
}),null)),null,1111586617,null);
var updated_conn = upd_conn_BANG_(conn_type,uid,client_id,null);
var udt_close = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var c__71447__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__71448__auto__ = (function (){var switch__71378__auto__ = (function (state_82979){
var state_val_82980 = (state_82979[(1)]);
if((state_val_82980 === (7))){
var state_82979__$1 = state_82979;
var statearr_82984_83995 = state_82979__$1;
(statearr_82984_83995[(2)] = null);

(statearr_82984_83995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82980 === (1))){
var inst_82923 = cljs.core.async.timeout((5000));
var state_82979__$1 = state_82979;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_82979__$1,(2),inst_82923);
} else {
if((state_val_82980 === (4))){
var state_82979__$1 = state_82979;
var statearr_82987_83996 = state_82979__$1;
(statearr_82987_83996[(2)] = null);

(statearr_82987_83996[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82980 === (13))){
var state_82979__$1 = state_82979;
var statearr_82988_83997 = state_82979__$1;
(statearr_82988_83997[(2)] = null);

(statearr_82988_83997[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82980 === (6))){
var inst_82933 = (state_82979[(7)]);
var inst_82934 = (state_82979[(8)]);
var inst_82935 = (state_82979[(9)]);
var inst_82951 = (state_82979[(10)]);
var inst_82946 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_82947 = [conn_type,uid,client_id];
var inst_82948 = (new cljs.core.PersistentVector(null,3,(5),inst_82946,inst_82947,null));
var inst_82950 = (function (){var vec__82926 = inst_82933;
var __QMARK_sch = inst_82934;
var udt_t1 = inst_82935;
return (function (p__82949){
var vec__82989 = p__82949;
var _sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82989,(0),null);
var udt_t1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82989,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(udt_t1__$1,udt_close)){
return taoensso.encore.swapped(new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),true);
} else {
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_sch,udt_t1__$1], null),false);
}
});
})();
var inst_82951__$1 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_82948,inst_82950);
var state_82979__$1 = (function (){var statearr_82993 = state_82979;
(statearr_82993[(10)] = inst_82951__$1);

return statearr_82993;
})();
if(cljs.core.truth_(inst_82951__$1)){
var statearr_82994_83998 = state_82979__$1;
(statearr_82994_83998[(1)] = (9));

} else {
var statearr_82995_83999 = state_82979__$1;
(statearr_82995_83999[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82980 === (3))){
var inst_82933 = (state_82979[(7)]);
var inst_82934 = (state_82979[(8)]);
var inst_82935 = (state_82979[(9)]);
var inst_82938 = (function (){var vec__82926 = inst_82933;
var __QMARK_sch = inst_82934;
var udt_t1 = inst_82935;
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["close-timeout: %s %s %s %s",conn_type,uid,sch_uuid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(udt_t1,udt_close),udt_t1,udt_close], null)], null);
});
})();
var inst_82939 = (new cljs.core.Delay(inst_82938,null));
var inst_82940 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",792,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_82939,null,457089447,null);
var state_82979__$1 = state_82979;
var statearr_82999_84000 = state_82979__$1;
(statearr_82999_84000[(2)] = inst_82940);

(statearr_82999_84000[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82980 === (12))){
var inst_82960 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_82961 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678),uid];
var inst_82962 = (new cljs.core.PersistentVector(null,2,(5),inst_82960,inst_82961,null));
var inst_82963 = receive_event_msg_BANG_(inst_82962);
var state_82979__$1 = state_82979;
var statearr_83000_84001 = state_82979__$1;
(statearr_83000_84001[(2)] = inst_82963);

(statearr_83000_84001[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82980 === (2))){
var inst_82933 = (state_82979[(7)]);
var inst_82925 = (state_82979[(2)]);
var inst_82929 = cljs.core.deref(conns_);
var inst_82930 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_82931 = [conn_type,uid,client_id];
var inst_82932 = (new cljs.core.PersistentVector(null,3,(5),inst_82930,inst_82931,null));
var inst_82933__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_82929,inst_82932);
var inst_82934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_82933__$1,(0),null);
var inst_82935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_82933__$1,(1),null);
var inst_82936 = cljs.core.deref(taoensso.sente.debug_mode_QMARK__);
var state_82979__$1 = (function (){var statearr_83001 = state_82979;
(statearr_83001[(7)] = inst_82933__$1);

(statearr_83001[(11)] = inst_82925);

(statearr_83001[(8)] = inst_82934);

(statearr_83001[(9)] = inst_82935);

return statearr_83001;
})();
if(cljs.core.truth_(inst_82936)){
var statearr_83002_84002 = state_82979__$1;
(statearr_83002_84002[(1)] = (3));

} else {
var statearr_83003_84003 = state_82979__$1;
(statearr_83003_84003[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82980 === (11))){
var inst_82970 = (state_82979[(2)]);
var state_82979__$1 = state_82979;
var statearr_83004_84004 = state_82979__$1;
(statearr_83004_84004[(2)] = inst_82970);

(statearr_83004_84004[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82980 === (9))){
var inst_82933 = (state_82979[(7)]);
var inst_82934 = (state_82979[(8)]);
var inst_82935 = (state_82979[(9)]);
var inst_82951 = (state_82979[(10)]);
var inst_82953 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_82954 = [conn_type,uid];
var inst_82955 = (new cljs.core.PersistentVector(null,2,(5),inst_82953,inst_82954,null));
var inst_82956 = (function (){var vec__82926 = inst_82933;
var __QMARK_sch = inst_82934;
var udt_t1 = inst_82935;
var disconnect_QMARK_ = inst_82951;
return (function (_QMARK_m){
if(cljs.core.empty_QMARK_(_QMARK_m)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return _QMARK_m;
}
});
})();
var inst_82957 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_82955,inst_82956);
var inst_82958 = upd_connected_uid_BANG_(uid);
var state_82979__$1 = (function (){var statearr_83008 = state_82979;
(statearr_83008[(12)] = inst_82957);

return statearr_83008;
})();
if(cljs.core.truth_(inst_82958)){
var statearr_83009_84005 = state_82979__$1;
(statearr_83009_84005[(1)] = (12));

} else {
var statearr_83010_84006 = state_82979__$1;
(statearr_83010_84006[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82980 === (5))){
var inst_82935 = (state_82979[(9)]);
var inst_82943 = (state_82979[(2)]);
var inst_82944 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_82935,udt_close);
var state_82979__$1 = (function (){var statearr_83011 = state_82979;
(statearr_83011[(13)] = inst_82943);

return statearr_83011;
})();
if(inst_82944){
var statearr_83012_84007 = state_82979__$1;
(statearr_83012_84007[(1)] = (6));

} else {
var statearr_83013_84008 = state_82979__$1;
(statearr_83013_84008[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82980 === (14))){
var inst_82967 = (state_82979[(2)]);
var state_82979__$1 = state_82979;
var statearr_83014_84009 = state_82979__$1;
(statearr_83014_84009[(2)] = inst_82967);

(statearr_83014_84009[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82980 === (10))){
var state_82979__$1 = state_82979;
var statearr_83017_84010 = state_82979__$1;
(statearr_83017_84010[(2)] = null);

(statearr_83017_84010[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82980 === (8))){
var inst_82976 = (state_82979[(2)]);
var state_82979__$1 = state_82979;
return cljs.core.async.impl.ioc_helpers.return_chan(state_82979__$1,inst_82976);
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
var taoensso$sente$state_machine__71379__auto__ = null;
var taoensso$sente$state_machine__71379__auto____0 = (function (){
var statearr_83023 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_83023[(0)] = taoensso$sente$state_machine__71379__auto__);

(statearr_83023[(1)] = (1));

return statearr_83023;
});
var taoensso$sente$state_machine__71379__auto____1 = (function (state_82979){
while(true){
var ret_value__71380__auto__ = (function (){try{while(true){
var result__71381__auto__ = switch__71378__auto__(state_82979);
if(cljs.core.keyword_identical_QMARK_(result__71381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71381__auto__;
}
break;
}
}catch (e83025){var ex__71382__auto__ = e83025;
var statearr_83026_84011 = state_82979;
(statearr_83026_84011[(2)] = ex__71382__auto__);


if(cljs.core.seq((state_82979[(4)]))){
var statearr_83027_84012 = state_82979;
(statearr_83027_84012[(1)] = cljs.core.first((state_82979[(4)])));

} else {
throw ex__71382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__84013 = state_82979;
state_82979 = G__84013;
continue;
} else {
return ret_value__71380__auto__;
}
break;
}
});
taoensso$sente$state_machine__71379__auto__ = function(state_82979){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__71379__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__71379__auto____1.call(this,state_82979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__71379__auto____0;
taoensso$sente$state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__71379__auto____1;
return taoensso$sente$state_machine__71379__auto__;
})()
})();
var state__71449__auto__ = (function (){var statearr_83029 = f__71448__auto__();
(statearr_83029[(6)] = c__71447__auto__);

return statearr_83029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71449__auto__);
}));

return c__71447__auto__;
}),new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (server_ch,websocket_QMARK_,error){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",814,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ring-req->server-ch-resp error: %s (%s)",error,uid,sch_uuid], null);
}),null)),null,-335604623,null);
})], null));
}
}
})], null);
}));

(taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq82479){
var G__82480 = cljs.core.first(seq82479);
var seq82479__$1 = cljs.core.next(seq82479);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__82480,seq82479__$1);
}));

/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr,upd_conn_BANG_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",820,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null,1030540715,null);

var seq__83033 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null)));
var chunk__83034 = null;
var count__83035 = (0);
var i__83036 = (0);
while(true){
if((i__83036 < count__83035)){
var vec__83060 = chunk__83034.cljs$core$IIndexed$_nth$arity$2(null,i__83036);
var client_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83060,(0),null);
var vec__83063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83060,(1),null);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83063,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83063,(1),null);
var temp__5753__auto___84014 = _QMARK_sch;
if(cljs.core.truth_(temp__5753__auto___84014)){
var sch_84015 = temp__5753__auto___84014;
(upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3 ? upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id) : upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id));

taoensso.sente.interfaces.sch_send_BANG_(sch_84015,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}


var G__84016 = seq__83033;
var G__84017 = chunk__83034;
var G__84018 = count__83035;
var G__84019 = (i__83036 + (1));
seq__83033 = G__84016;
chunk__83034 = G__84017;
count__83035 = G__84018;
i__83036 = G__84019;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__83033);
if(temp__5753__auto__){
var seq__83033__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__83033__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__83033__$1);
var G__84020 = cljs.core.chunk_rest(seq__83033__$1);
var G__84021 = c__4556__auto__;
var G__84022 = cljs.core.count(c__4556__auto__);
var G__84023 = (0);
seq__83033 = G__84020;
chunk__83034 = G__84021;
count__83035 = G__84022;
i__83036 = G__84023;
continue;
} else {
var vec__83069 = cljs.core.first(seq__83033__$1);
var client_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83069,(0),null);
var vec__83072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83069,(1),null);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83072,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83072,(1),null);
var temp__5753__auto___84024__$1 = _QMARK_sch;
if(cljs.core.truth_(temp__5753__auto___84024__$1)){
var sch_84025 = temp__5753__auto___84024__$1;
(upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3 ? upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id) : upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id));

taoensso.sente.interfaces.sch_send_BANG_(sch_84025,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}


var G__84026 = cljs.core.next(seq__83033__$1);
var G__84027 = null;
var G__84028 = (0);
var G__84029 = (0);
seq__83033 = G__84026;
chunk__83034 = G__84027;
count__83035 = G__84028;
i__83036 = G__84029;
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
}),null)),null,-1005988701,null);

var ms_backoffs = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(90),(180),(360),(720),(1440)], null);
var client_ids_unsatisfied = cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid], null)));
if(cljs.core.empty_QMARK_(client_ids_unsatisfied)){
return null;
} else {
var c__71447__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__71448__auto__ = (function (){var switch__71378__auto__ = (function (state_83138){
var state_val_83139 = (state_83138[(1)]);
if((state_val_83139 === (7))){
var inst_83096 = (state_83138[(7)]);
var inst_83088 = (state_83138[(8)]);
var inst_83087 = (state_83138[(9)]);
var inst_83107 = (function (){var n = inst_83087;
var client_ids_satisfied = inst_83088;
var _QMARK_pulled = inst_83096;
return (function (s,client_id,p__83106){
var vec__83142 = p__83106;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83142,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83142,(1),null);
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
var inst_83108 = cljs.core.PersistentHashSet.EMPTY;
var inst_83109 = cljs.core.reduce_kv(inst_83107,inst_83108,inst_83096);
var state_83138__$1 = state_83138;
var statearr_83146_84030 = state_83138__$1;
(statearr_83146_84030[(2)] = inst_83109);

(statearr_83146_84030[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83139 === (1))){
var inst_83086 = cljs.core.PersistentHashSet.EMPTY;
var inst_83087 = (0);
var inst_83088 = inst_83086;
var state_83138__$1 = (function (){var statearr_83147 = state_83138;
(statearr_83147[(8)] = inst_83088);

(statearr_83147[(9)] = inst_83087);

return statearr_83147;
})();
var statearr_83148_84031 = state_83138__$1;
(statearr_83148_84031[(2)] = null);

(statearr_83148_84031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83139 === (4))){
var state_83138__$1 = state_83138;
var statearr_83149_84032 = state_83138__$1;
(statearr_83149_84032[(2)] = true);

(statearr_83149_84032[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83139 === (15))){
var inst_83129 = (state_83138[(2)]);
var state_83138__$1 = state_83138;
var statearr_83150_84033 = state_83138__$1;
(statearr_83150_84033[(2)] = inst_83129);

(statearr_83150_84033[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83139 === (13))){
var inst_83114 = (state_83138[(10)]);
var inst_83119 = cljs.core.rand_int(inst_83114);
var inst_83120 = (inst_83114 + inst_83119);
var inst_83121 = cljs.core.async.timeout(inst_83120);
var state_83138__$1 = state_83138;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_83138__$1,(16),inst_83121);
} else {
if((state_val_83139 === (6))){
var inst_83096 = (state_83138[(7)]);
var inst_83104 = (state_83138[(2)]);
var state_83138__$1 = (function (){var statearr_83153 = state_83138;
(statearr_83153[(11)] = inst_83104);

return statearr_83153;
})();
if(cljs.core.truth_(inst_83096)){
var statearr_83154_84034 = state_83138__$1;
(statearr_83154_84034[(1)] = (7));

} else {
var statearr_83155_84035 = state_83138__$1;
(statearr_83155_84035[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83139 === (3))){
var inst_83134 = (state_83138[(2)]);
var state_83138__$1 = state_83138;
return cljs.core.async.impl.ioc_helpers.return_chan(state_83138__$1,inst_83134);
} else {
if((state_val_83139 === (12))){
var inst_83132 = (state_83138[(2)]);
var state_83138__$1 = state_83138;
var statearr_83159_84036 = state_83138__$1;
(statearr_83159_84036[(2)] = inst_83132);

(statearr_83159_84036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83139 === (2))){
var inst_83096 = (state_83138[(7)]);
var inst_83088 = (state_83138[(8)]);
var inst_83087 = (state_83138[(9)]);
var inst_83091 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_83093 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_83094 = (new cljs.core.PersistentVector(null,2,(5),inst_83091,inst_83093,null));
var inst_83095 = (function (){var n = inst_83087;
var client_ids_satisfied = inst_83088;
return (function (m){
var ks_to_pull = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(client_ids_satisfied,cljs.core.keys(m));
if(cljs.core.empty_QMARK_(ks_to_pull)){
return taoensso.encore.swapped(m,null);
} else {
return taoensso.encore.swapped(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,k){
var vec__83163 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83163,(0),null);
var udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83163,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt], null));
}),m,ks_to_pull),cljs.core.select_keys(m,ks_to_pull));
}
});
})();
var inst_83096__$1 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_83094,inst_83095);
var inst_83098 = (function (){var n = inst_83087;
var client_ids_satisfied = inst_83088;
var _QMARK_pulled = inst_83096__$1;
return (function (x){
var or__4126__auto__ = (x == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return taoensso.truss.impl.non_throwing(cljs.core.map_QMARK_)(x);
}
});
})();
var inst_83099 = inst_83098(inst_83096__$1);
var state_83138__$1 = (function (){var statearr_83174 = state_83138;
(statearr_83174[(7)] = inst_83096__$1);

return statearr_83174;
})();
if(cljs.core.truth_(inst_83099)){
var statearr_83176_84037 = state_83138__$1;
(statearr_83176_84037[(1)] = (4));

} else {
var statearr_83177_84038 = state_83138__$1;
(statearr_83177_84038[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83139 === (11))){
var state_83138__$1 = state_83138;
var statearr_83178_84039 = state_83138__$1;
(statearr_83178_84039[(2)] = null);

(statearr_83178_84039[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83139 === (9))){
var inst_83088 = (state_83138[(8)]);
var inst_83114 = (state_83138[(10)]);
var inst_83087 = (state_83138[(9)]);
var inst_83112 = (state_83138[(2)]);
var inst_83113 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_83088,inst_83112);
var inst_83114__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ms_backoffs,inst_83087);
var state_83138__$1 = (function (){var statearr_83184 = state_83138;
(statearr_83184[(10)] = inst_83114__$1);

(statearr_83184[(12)] = inst_83113);

return statearr_83184;
})();
if(cljs.core.truth_(inst_83114__$1)){
var statearr_83190_84040 = state_83138__$1;
(statearr_83190_84040[(1)] = (10));

} else {
var statearr_83191_84041 = state_83138__$1;
(statearr_83191_84041[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83139 === (5))){
var inst_83096 = (state_83138[(7)]);
var inst_83102 = taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",857,"([:or nil? map?] ?pulled)",inst_83096,null,null);
var state_83138__$1 = state_83138;
var statearr_83192_84042 = state_83138__$1;
(statearr_83192_84042[(2)] = inst_83102);

(statearr_83192_84042[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83139 === (14))){
var state_83138__$1 = state_83138;
var statearr_83193_84043 = state_83138__$1;
(statearr_83193_84043[(2)] = null);

(statearr_83193_84043[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83139 === (16))){
var inst_83113 = (state_83138[(12)]);
var inst_83087 = (state_83138[(9)]);
var inst_83123 = (state_83138[(2)]);
var inst_83124 = (inst_83087 + (1));
var inst_83087__$1 = inst_83124;
var inst_83088 = inst_83113;
var state_83138__$1 = (function (){var statearr_83197 = state_83138;
(statearr_83197[(8)] = inst_83088);

(statearr_83197[(13)] = inst_83123);

(statearr_83197[(9)] = inst_83087__$1);

return statearr_83197;
})();
var statearr_83198_84044 = state_83138__$1;
(statearr_83198_84044[(2)] = null);

(statearr_83198_84044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83139 === (10))){
var inst_83113 = (state_83138[(12)]);
var inst_83116 = cljs.core.complement(inst_83113);
var inst_83117 = taoensso.encore.rsome(inst_83116,client_ids_unsatisfied);
var state_83138__$1 = state_83138;
if(cljs.core.truth_(inst_83117)){
var statearr_83201_84045 = state_83138__$1;
(statearr_83201_84045[(1)] = (13));

} else {
var statearr_83202_84046 = state_83138__$1;
(statearr_83202_84046[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83139 === (8))){
var state_83138__$1 = state_83138;
var statearr_83203_84047 = state_83138__$1;
(statearr_83203_84047[(2)] = null);

(statearr_83203_84047[(1)] = (9));


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
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__71379__auto__ = null;
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__71379__auto____0 = (function (){
var statearr_83206 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_83206[(0)] = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__71379__auto__);

(statearr_83206[(1)] = (1));

return statearr_83206;
});
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__71379__auto____1 = (function (state_83138){
while(true){
var ret_value__71380__auto__ = (function (){try{while(true){
var result__71381__auto__ = switch__71378__auto__(state_83138);
if(cljs.core.keyword_identical_QMARK_(result__71381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71381__auto__;
}
break;
}
}catch (e83208){var ex__71382__auto__ = e83208;
var statearr_83209_84048 = state_83138;
(statearr_83209_84048[(2)] = ex__71382__auto__);


if(cljs.core.seq((state_83138[(4)]))){
var statearr_83210_84049 = state_83138;
(statearr_83210_84049[(1)] = cljs.core.first((state_83138[(4)])));

} else {
throw ex__71382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__84050 = state_83138;
state_83138 = G__84050;
continue;
} else {
return ret_value__71380__auto__;
}
break;
}
});
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__71379__auto__ = function(state_83138){
switch(arguments.length){
case 0:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__71379__auto____0.call(this);
case 1:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__71379__auto____1.call(this,state_83138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__71379__auto____0;
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__71379__auto____1;
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__71379__auto__;
})()
})();
var state__71449__auto__ = (function (){var statearr_83211 = f__71448__auto__();
(statearr_83211[(6)] = c__71447__auto__);

return statearr_83211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71449__auto__);
}));

return c__71447__auto__;
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

var taoensso$sente$IChSocket$_chsk_connect_BANG_$dyn_84051 = (function (chsk){
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
return taoensso$sente$IChSocket$_chsk_connect_BANG_$dyn_84051(chsk);
}
});

var taoensso$sente$IChSocket$_chsk_disconnect_BANG_$dyn_84052 = (function (chsk,reason){
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
return taoensso$sente$IChSocket$_chsk_disconnect_BANG_$dyn_84052(chsk,reason);
}
});

var taoensso$sente$IChSocket$_chsk_reconnect_BANG_$dyn_84053 = (function (chsk){
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
return taoensso$sente$IChSocket$_chsk_reconnect_BANG_$dyn_84053(chsk);
}
});

var taoensso$sente$IChSocket$_chsk_send_BANG_$dyn_84054 = (function (chsk,ev,opts){
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
return taoensso$sente$IChSocket$_chsk_send_BANG_$dyn_84054(chsk,ev,opts);
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
var G__83237 = arguments.length;
switch (G__83237) {
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
}),null)),null,331542205,null);

return taoensso.sente._chsk_send_BANG_(chsk,ev,opts);
}));

(taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4);

taoensso.sente.chsk_send__GT_closed_BANG_ = (function taoensso$sente$chsk_send__GT_closed_BANG_(_QMARK_cb_fn){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",908,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
}),null)),null,115709926,null);

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
var vec__83276 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),(function (old_state){
var new_state = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old_state) : f.call(null,old_state));
var new_state__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(old_state))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),false):new_state);
var new_state__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state__$1))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new_state__$1,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)):new_state__$1);
return taoensso.encore.swapped(new_state__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$2], null));
}));
var old_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83276,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83276,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_state,new_state)){
var output = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(chsk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"state","state",-1988618099)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),output], null));

return output;
} else {
return null;
}
});
taoensso.sente.chsk_state__GT_closed = (function taoensso$sente$chsk_state__GT_closed(state,reason){
var e_84056 = (function (){try{if(cljs.core.map_QMARK_(state)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e83284){if((e83284 instanceof Error)){
var e_84056 = e83284;
return e_84056;
} else {
throw e83284;

}
}})();
if((e_84056 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",951,"(map? state)",state,e_84056,null);
}

var e_84057 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_((function (){var G__83291 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641),null,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720),null,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707),null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__83291) : taoensso.truss.impl.set_STAR_.call(null,G__83291));
})(),x);
})(reason)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e83289){if((e83289 instanceof Error)){
var e_84057 = e83289;
return e_84057;
} else {
throw e83289;

}
}})();
if((e_84057 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",952,"([:el #{:requested-disconnect :downgrading-ws-to-ajax :unexpected :requested-reconnect}] reason)",reason,e_84057,null);
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
var e_84058 = (function (){try{if(taoensso.encore.chan_QMARK_(_QMARK_cb)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e83296){if((e83296 instanceof Error)){
var e_84058 = e83296;
return e_84058;
} else {
throw e83296;

}
}})();
if((e_84058 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",972,"(enc/chan? ?cb)",_QMARK_cb,e_84058,null);
}

taoensso.sente.assert_event(ev);

var vec__83297 = ev;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83297,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83297,(1),null);
var cb_ch = _QMARK_cb;
return (function (reply){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([taoensso.encore.as_qname(ev_id),".cb"].join('')),reply], null));
});
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",982,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null,1902141296,null);

var buffered_evs = ((cljs.core.vector_QMARK_(clj))?clj:taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",983,"(vector? clj)",clj,null,null));
var seq__83318 = cljs.core.seq(buffered_evs);
var chunk__83319 = null;
var count__83320 = (0);
var i__83321 = (0);
while(true){
if((i__83321 < count__83320)){
var ev = chunk__83319.cljs$core$IIndexed$_nth$arity$2(null,i__83321);
taoensso.sente.assert_event(ev);

var vec__83338_84059 = ev;
var id_84060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83338_84059,(0),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(id_84060),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);


var G__84061 = seq__83318;
var G__84062 = chunk__83319;
var G__84063 = count__83320;
var G__84064 = (i__83321 + (1));
seq__83318 = G__84061;
chunk__83319 = G__84062;
count__83320 = G__84063;
i__83321 = G__84064;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__83318);
if(temp__5753__auto__){
var seq__83318__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__83318__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__83318__$1);
var G__84065 = cljs.core.chunk_rest(seq__83318__$1);
var G__84066 = c__4556__auto__;
var G__84067 = cljs.core.count(c__4556__auto__);
var G__84068 = (0);
seq__83318 = G__84065;
chunk__83319 = G__84066;
count__83320 = G__84067;
i__83321 = G__84068;
continue;
} else {
var ev = cljs.core.first(seq__83318__$1);
taoensso.sente.assert_event(ev);

var vec__83342_84069 = ev;
var id_84070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83342_84069,(0),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(id_84070),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);


var G__84071 = cljs.core.next(seq__83318__$1);
var G__84072 = null;
var G__84073 = (0);
var G__84074 = (0);
seq__83318 = G__84071;
chunk__83319 = G__84072;
count__83320 = G__84073;
i__83321 = G__84074;
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
var vec__83351 = x;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83351,(0),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x1,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686));
} else {
return false;
}
});
taoensso.sente.receive_handshake_BANG_ = (function taoensso$sente$receive_handshake_BANG_(chsk_type,chsk,clj){
var e_84075 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_((function (){var G__83361 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__83361) : taoensso.truss.impl.set_STAR_.call(null,G__83361));
})(),x);
})(chsk_type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e83358){if((e83358 instanceof Error)){
var e_84075 = e83358;
return e_84075;
} else {
throw e83358;

}
}})();
if((e_84075 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",995,"([:el #{:ws :ajax}] chsk-type)",chsk_type,e_84075,null);
}

var e_84076 = (function (){try{if(taoensso.sente.handshake_QMARK_(clj)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e83364){if((e83364 instanceof Error)){
var e_84076 = e83364;
return e_84076;
} else {
throw e83364;

}
}})();
if((e_84076 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",996,"(handshake? clj)",clj,e_84076,null);
}

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",997,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-handshake! (%s): %s",chsk_type,clj], null);
}),null)),null,1000205619,null);

var vec__83366 = clj;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83366,(0),null);
var vec__83369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83366,(1),null);
var _QMARK_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83369,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83369,(1),null);
var _QMARK_handshake_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83369,(2),null);
var map__83372 = chsk;
var map__83372__$1 = (((((!((map__83372 == null))))?(((((map__83372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83372):map__83372);
var chs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83372__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var ever_opened_QMARK__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83372__$1,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913));
var first_handshake_QMARK_ = cljs.core.compare_and_set_BANG_(ever_opened_QMARK__,false,true);
var new_state = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),chsk_type,new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"handshake-data","handshake-data",-278378864),_QMARK_handshake_data,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),first_handshake_QMARK_], null);
var handshake_ev = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_uid,null,_QMARK_handshake_data,first_handshake_QMARK_], null)], null);
taoensso.sente.assert_event(handshake_ev);

taoensso.sente.swap_chsk_state_BANG_(chsk,(function (p1__83354_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__83354_SHARP_,new_state], 0));
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
try{var G__83382 = make_package_name("web");
return (require_fn.cljs$core$IFn$_invoke$arity$1 ? require_fn.cljs$core$IFn$_invoke$arity$1(G__83382) : require_fn.call(null,G__83382));
}catch (e83381){var e = e83381;
return null;
}} else {
return null;
}
}),null));
})();
taoensso.sente.create_js_client_websocket_BANG_ = (function taoensso$sente$create_js_client_websocket_BANG_(p__83384){
var map__83385 = p__83384;
var map__83385__$1 = (((((!((map__83385 == null))))?(((((map__83385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83385):map__83385);
var opts = map__83385__$1;
var onerror_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83385__$1,new cljs.core.Keyword(null,"onerror-fn","onerror-fn",1069372505));
var onmessage_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83385__$1,new cljs.core.Keyword(null,"onmessage-fn","onmessage-fn",1633804172));
var onclose_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83385__$1,new cljs.core.Keyword(null,"onclose-fn","onclose-fn",-1388163785));
var uri_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83385__$1,new cljs.core.Keyword(null,"uri-str","uri-str",304128675));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83385__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
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
var G__83393_84077 = socket;
(G__83393_84077["onerror"] = onerror_fn);

(G__83393_84077["onmessage"] = onmessage_fn);

(G__83393_84077["onclose"] = onclose_fn);


return socket;
} else {
return null;
}
});
taoensso.sente.create_websocket_BANG_ = (function taoensso$sente$create_websocket_BANG_(p__83394){
var map__83395 = p__83394;
var map__83395__$1 = (((((!((map__83395 == null))))?(((((map__83395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83395):map__83395);
var opts = map__83395__$1;
var onerror_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83395__$1,new cljs.core.Keyword(null,"onerror-fn","onerror-fn",1069372505));
var onmessage_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83395__$1,new cljs.core.Keyword(null,"onmessage-fn","onmessage-fn",1633804172));
var onclose_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83395__$1,new cljs.core.Keyword(null,"onclose-fn","onclose-fn",-1388163785));
var uri_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83395__$1,new cljs.core.Keyword(null,"uri-str","uri-str",304128675));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83395__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
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

(taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k83408,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__83422 = k83408;
var G__83422__$1 = (((G__83422 instanceof cljs.core.Keyword))?G__83422.fqn:null);
switch (G__83422__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k83408,else__4383__auto__);

}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__83424){
var vec__83425 = p__83424;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83425,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83425,(1),null);
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

(taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__83407){
var self__ = this;
var G__83407__$1 = this;
return (new cljs.core.RecordIter((0),G__83407__$1,15,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this83409,other83410){
var self__ = this;
var this83409__$1 = this;
return (((!((other83410 == null)))) && ((this83409__$1.constructor === other83410.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this83409__$1.client_id,other83410.client_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this83409__$1.chs,other83410.chs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this83409__$1.params,other83410.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this83409__$1.headers,other83410.headers)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this83409__$1.packer,other83410.packer)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this83409__$1.url,other83410.url)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this83409__$1.ws_kalive_ms,other83410.ws_kalive_ms)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this83409__$1.state_,other83410.state_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this83409__$1.instance_handle_,other83410.instance_handle_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this83409__$1.retry_count_,other83410.retry_count_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this83409__$1.ever_opened_QMARK__,other83410.ever_opened_QMARK__)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this83409__$1.backoff_ms_fn,other83410.backoff_ms_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this83409__$1.cbs_waiting_,other83410.cbs_waiting_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this83409__$1.socket_,other83410.socket_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this83409__$1.udt_last_comms_,other83410.udt_last_comms_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this83409__$1.__extmap,other83410.__extmap)));
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

(taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__83407){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__83456 = cljs.core.keyword_identical_QMARK_;
var expr__83457 = k__4388__auto__;
if(cljs.core.truth_((pred__83456.cljs$core$IFn$_invoke$arity$2 ? pred__83456.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__83457) : pred__83456.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__83457)))){
return (new taoensso.sente.ChWebSocket(G__83407,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__83456.cljs$core$IFn$_invoke$arity$2 ? pred__83456.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"chs","chs",376886120),expr__83457) : pred__83456.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__83457)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__83407,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__83456.cljs$core$IFn$_invoke$arity$2 ? pred__83456.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__83457) : pred__83456.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__83457)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__83407,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__83456.cljs$core$IFn$_invoke$arity$2 ? pred__83456.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"headers","headers",-835030129),expr__83457) : pred__83456.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129),expr__83457)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__83407,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__83456.cljs$core$IFn$_invoke$arity$2 ? pred__83456.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"packer","packer",66077544),expr__83457) : pred__83456.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__83457)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,G__83407,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__83456.cljs$core$IFn$_invoke$arity$2 ? pred__83456.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046),expr__83457) : pred__83456.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__83457)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,G__83407,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__83456.cljs$core$IFn$_invoke$arity$2 ? pred__83456.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),expr__83457) : pred__83456.call(null,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),expr__83457)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,G__83407,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__83456.cljs$core$IFn$_invoke$arity$2 ? pred__83456.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state_","state_",957667102),expr__83457) : pred__83456.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__83457)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,G__83407,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__83456.cljs$core$IFn$_invoke$arity$2 ? pred__83456.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__83457) : pred__83456.call(null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__83457)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,G__83407,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__83456.cljs$core$IFn$_invoke$arity$2 ? pred__83456.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__83457) : pred__83456.call(null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__83457)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,G__83407,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__83456.cljs$core$IFn$_invoke$arity$2 ? pred__83456.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__83457) : pred__83456.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__83457)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,G__83407,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__83456.cljs$core$IFn$_invoke$arity$2 ? pred__83456.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__83457) : pred__83456.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__83457)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,G__83407,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__83456.cljs$core$IFn$_invoke$arity$2 ? pred__83456.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__83457) : pred__83456.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__83457)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__83407,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__83456.cljs$core$IFn$_invoke$arity$2 ? pred__83456.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__83457) : pred__83456.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__83457)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,G__83407,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__83456.cljs$core$IFn$_invoke$arity$2 ? pred__83456.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),expr__83457) : pred__83456.call(null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),expr__83457)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,G__83407,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__83407),null));
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

(taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__83407){
var self__ = this;
var this__4379__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,G__83407,self__.__extmap,self__.__hash));
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

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__83399_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__83399_SHARP_,reason);
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
var map__83488 = opts;
var map__83488__$1 = (((((!((map__83488 == null))))?(((((map__83488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83488):map__83488);
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83488__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83488__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83488__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((6)):null);
var ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(self__.packer,ev,_QMARK_cb_uuid);
var temp__5753__auto___84079 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5753__auto___84079)){
var cb_uuid_84080 = temp__5753__auto___84079;
taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_84080], null),(function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e83493){if((e83493 instanceof Error)){
var e = e83493;
return e;
} else {
throw e83493;

}
}})();
if((e == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1141,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e,null);
}
})());

var temp__5753__auto___84081__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__5753__auto___84081__$1)){
var timeout_ms_84082 = temp__5753__auto___84081__$1;
var c__71447__auto___84083 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__71448__auto__ = (function (){var switch__71378__auto__ = (function (state_83509){
var state_val_83510 = (state_83509[(1)]);
if((state_val_83510 === (1))){
var inst_83498 = cljs.core.async.timeout(timeout_ms_84082);
var state_83509__$1 = state_83509;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_83509__$1,(2),inst_83498);
} else {
if((state_val_83510 === (2))){
var inst_83501 = (state_83509[(7)]);
var inst_83500 = (state_83509[(2)]);
var inst_83501__$1 = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,_QMARK_cb_uuid);
var state_83509__$1 = (function (){var statearr_83512 = state_83509;
(statearr_83512[(7)] = inst_83501__$1);

(statearr_83512[(8)] = inst_83500);

return statearr_83512;
})();
if(cljs.core.truth_(inst_83501__$1)){
var statearr_83513_84084 = state_83509__$1;
(statearr_83513_84084[(1)] = (3));

} else {
var statearr_83514_84085 = state_83509__$1;
(statearr_83514_84085[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83510 === (3))){
var inst_83501 = (state_83509[(7)]);
var inst_83504 = (inst_83501.cljs$core$IFn$_invoke$arity$1 ? inst_83501.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)) : inst_83501.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)));
var state_83509__$1 = state_83509;
var statearr_83516_84086 = state_83509__$1;
(statearr_83516_84086[(2)] = inst_83504);

(statearr_83516_84086[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83510 === (4))){
var state_83509__$1 = state_83509;
var statearr_83517_84087 = state_83509__$1;
(statearr_83517_84087[(2)] = null);

(statearr_83517_84087[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83510 === (5))){
var inst_83507 = (state_83509[(2)]);
var state_83509__$1 = state_83509;
return cljs.core.async.impl.ioc_helpers.return_chan(state_83509__$1,inst_83507);
} else {
return null;
}
}
}
}
}
});
return (function() {
var taoensso$sente$state_machine__71379__auto__ = null;
var taoensso$sente$state_machine__71379__auto____0 = (function (){
var statearr_83519 = [null,null,null,null,null,null,null,null,null];
(statearr_83519[(0)] = taoensso$sente$state_machine__71379__auto__);

(statearr_83519[(1)] = (1));

return statearr_83519;
});
var taoensso$sente$state_machine__71379__auto____1 = (function (state_83509){
while(true){
var ret_value__71380__auto__ = (function (){try{while(true){
var result__71381__auto__ = switch__71378__auto__(state_83509);
if(cljs.core.keyword_identical_QMARK_(result__71381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71381__auto__;
}
break;
}
}catch (e83521){var ex__71382__auto__ = e83521;
var statearr_83522_84088 = state_83509;
(statearr_83522_84088[(2)] = ex__71382__auto__);


if(cljs.core.seq((state_83509[(4)]))){
var statearr_83523_84089 = state_83509;
(statearr_83523_84089[(1)] = cljs.core.first((state_83509[(4)])));

} else {
throw ex__71382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__84090 = state_83509;
state_83509 = G__84090;
continue;
} else {
return ret_value__71380__auto__;
}
break;
}
});
taoensso$sente$state_machine__71379__auto__ = function(state_83509){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__71379__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__71379__auto____1.call(this,state_83509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__71379__auto____0;
taoensso$sente$state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__71379__auto____1;
return taoensso$sente$state_machine__71379__auto__;
})()
})();
var state__71449__auto__ = (function (){var statearr_83524 = f__71448__auto__();
(statearr_83524[(6)] = c__71447__auto___84083);

return statearr_83524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71449__auto__);
}));

} else {
}
} else {
}

try{cljs.core.deref(self__.socket_).send(ppstr);

cljs.core.reset_BANG_(self__.udt_last_comms_,taoensso.encore.now_udt());

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e83527){var t = e83527;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",1155,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,"Chsk send error"], null);
}),null)),null,1324314521,null);

var temp__5753__auto___84091 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5753__auto___84091)){
var cb_uuid_84092 = temp__5753__auto___84091;
var cb_fn_STAR__84093 = (function (){var or__4126__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,cb_uuid_84092);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e83530){if((e83530 instanceof Error)){
var e = e83530;
return e;
} else {
throw e83530;

}
}})();
if((e == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1158,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e,null);
}
}
})();
(cb_fn_STAR__84093.cljs$core$IFn$_invoke$arity$1 ? cb_fn_STAR__84093.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","error","chsk/error",-984175439)) : cb_fn_STAR__84093.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439)));
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
}),null)),null,1757088262,null);

goog.global.setTimeout(taoensso$sente$connect_fn,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__83400_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__83400_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
}));
} else {
return null;
}
});
var onerror_fn = (function (ws_ev){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",1187,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",(function (){try{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(ws_ev);
}catch (e83533){var _ = e83533;
return ws_ev;
}})()], null);
}),null)),null,-160438216,null);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__83401_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__83401_SHARP_,new cljs.core.Keyword(null,"last-ws-error","last-ws-error",-820288502),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev], null));
}));
});
var onmessage_fn = (function (ws_ev){
var ppstr = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"data");
var vec__83535 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83535,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83535,(1),null);
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
}),null)),null,-1778855127,null);
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
}),null)),null,-1032096764,null);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__83404_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__83404_SHARP_,new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
}));
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__83405_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(taoensso.sente.chsk_state__GT_closed(p1__83405_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424)),new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
}));

return retry_fn();
}
});
var _QMARK_socket = (function (){try{return taoensso.sente.create_websocket_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"onerror-fn","onerror-fn",1069372505),onerror_fn,new cljs.core.Keyword(null,"onmessage-fn","onmessage-fn",1633804172),onmessage_fn,new cljs.core.Keyword(null,"onclose-fn","onclose-fn",-1388163785),onclose_fn,new cljs.core.Keyword(null,"headers","headers",-835030129),self__.headers,new cljs.core.Keyword(null,"uri-str","uri-str",304128675),taoensso.encore.merge_url_with_query_string(self__.url,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_))], null)], 0)))], null));
}catch (e83541){var t = e83541;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",1280,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,"WebSocket error"], null);
}),null)),null,-1803344368,null);

return null;
}})();
if(cljs.core.not(_QMARK_socket)){
return retry_fn();
} else {
var temp__5753__auto___84094 = cljs.core.deref(self__.socket_);
if(cljs.core.truth_(temp__5753__auto___84094)){
var old_socket_84095 = temp__5753__auto___84094;
old_socket_84095.close();
} else {
}

return cljs.core.reset_BANG_(self__.socket_,_QMARK_socket);
}
} else {
return null;
}
});
var temp__5753__auto___84096 = self__.ws_kalive_ms;
if(cljs.core.truth_(temp__5753__auto___84096)){
var ms_84097 = temp__5753__auto___84096;
var c__71447__auto___84098 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__71448__auto__ = (function (){var switch__71378__auto__ = (function (state_83579){
var state_val_83580 = (state_83579[(1)]);
if((state_val_83580 === (7))){
var inst_83575 = (state_83579[(2)]);
var state_83579__$1 = state_83579;
var statearr_83582_84099 = state_83579__$1;
(statearr_83582_84099[(2)] = inst_83575);

(statearr_83582_84099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83580 === (1))){
var state_83579__$1 = state_83579;
var statearr_83583_84100 = state_83579__$1;
(statearr_83583_84100[(2)] = null);

(statearr_83583_84100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83580 === (4))){
var inst_83548 = (state_83579[(2)]);
var inst_83549 = have_handle_QMARK_();
var state_83579__$1 = (function (){var statearr_83585 = state_83579;
(statearr_83585[(7)] = inst_83548);

return statearr_83585;
})();
if(inst_83549){
var statearr_83587_84101 = state_83579__$1;
(statearr_83587_84101[(1)] = (5));

} else {
var statearr_83589_84102 = state_83579__$1;
(statearr_83589_84102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83580 === (6))){
var state_83579__$1 = state_83579;
var statearr_83591_84103 = state_83579__$1;
(statearr_83591_84103[(2)] = null);

(statearr_83591_84103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83580 === (3))){
var inst_83577 = (state_83579[(2)]);
var state_83579__$1 = state_83579;
return cljs.core.async.impl.ioc_helpers.return_chan(state_83579__$1,inst_83577);
} else {
if((state_val_83580 === (2))){
var inst_83545 = cljs.core.deref(self__.udt_last_comms_);
var inst_83546 = cljs.core.async.timeout(ms_84097);
var state_83579__$1 = (function (){var statearr_83596 = state_83579;
(statearr_83596[(8)] = inst_83545);

return statearr_83596;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_83579__$1,(4),inst_83546);
} else {
if((state_val_83580 === (9))){
var state_83579__$1 = state_83579;
var statearr_83597_84104 = state_83579__$1;
(statearr_83597_84104[(2)] = null);

(statearr_83597_84104[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83580 === (5))){
var inst_83545 = (state_83579[(8)]);
var inst_83551 = cljs.core.deref(self__.udt_last_comms_);
var inst_83552 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_83545,inst_83551);
var state_83579__$1 = state_83579;
if(inst_83552){
var statearr_83598_84105 = state_83579__$1;
(statearr_83598_84105[(1)] = (8));

} else {
var statearr_83599_84106 = state_83579__$1;
(statearr_83599_84106[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83580 === (10))){
var inst_83570 = (state_83579[(2)]);
var state_83579__$1 = (function (){var statearr_83600 = state_83579;
(statearr_83600[(9)] = inst_83570);

return statearr_83600;
})();
var statearr_83602_84107 = state_83579__$1;
(statearr_83602_84107[(2)] = null);

(statearr_83602_84107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83580 === (8))){
var inst_83554 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_83555 = [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)];
var inst_83556 = (new cljs.core.PersistentVector(null,1,(5),inst_83554,inst_83555,null));
var inst_83561 = [new cljs.core.Keyword(null,"flush?","flush?",-108887231)];
var inst_83563 = [true];
var inst_83564 = cljs.core.PersistentHashMap.fromArrays(inst_83561,inst_83563);
var inst_83565 = chsk__$1.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(null,inst_83556,inst_83564);
var state_83579__$1 = state_83579;
var statearr_83604_84108 = state_83579__$1;
(statearr_83604_84108[(2)] = inst_83565);

(statearr_83604_84108[(1)] = (10));


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
var taoensso$sente$state_machine__71379__auto__ = null;
var taoensso$sente$state_machine__71379__auto____0 = (function (){
var statearr_83605 = [null,null,null,null,null,null,null,null,null,null];
(statearr_83605[(0)] = taoensso$sente$state_machine__71379__auto__);

(statearr_83605[(1)] = (1));

return statearr_83605;
});
var taoensso$sente$state_machine__71379__auto____1 = (function (state_83579){
while(true){
var ret_value__71380__auto__ = (function (){try{while(true){
var result__71381__auto__ = switch__71378__auto__(state_83579);
if(cljs.core.keyword_identical_QMARK_(result__71381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71381__auto__;
}
break;
}
}catch (e83606){var ex__71382__auto__ = e83606;
var statearr_83607_84109 = state_83579;
(statearr_83607_84109[(2)] = ex__71382__auto__);


if(cljs.core.seq((state_83579[(4)]))){
var statearr_83608_84110 = state_83579;
(statearr_83608_84110[(1)] = cljs.core.first((state_83579[(4)])));

} else {
throw ex__71382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__84111 = state_83579;
state_83579 = G__84111;
continue;
} else {
return ret_value__71380__auto__;
}
break;
}
});
taoensso$sente$state_machine__71379__auto__ = function(state_83579){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__71379__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__71379__auto____1.call(this,state_83579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__71379__auto____0;
taoensso$sente$state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__71379__auto____1;
return taoensso$sente$state_machine__71379__auto__;
})()
})();
var state__71449__auto__ = (function (){var statearr_83609 = f__71448__auto__();
(statearr_83609[(6)] = c__71447__auto___84098);

return statearr_83609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71449__auto__);
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
taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__83412){
var extmap__4419__auto__ = (function (){var G__83612 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__83412,new cljs.core.Keyword(null,"client-id","client-id",-464622140),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)], 0));
if(cljs.core.record_QMARK_(G__83412)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__83612);
} else {
return G__83612;
}
})();
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__83412),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__83412),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__83412),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(G__83412),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__83412),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__83412),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968).cljs$core$IFn$_invoke$arity$1(G__83412),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__83412),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__83412),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__83412),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__83412),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__83412),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__83412),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__83412),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639).cljs$core$IFn$_invoke$arity$1(G__83412),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k83622,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__83629 = k83622;
var G__83629__$1 = (((G__83629 instanceof cljs.core.Keyword))?G__83629.fqn:null);
switch (G__83629__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k83622,else__4383__auto__);

}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__83630){
var vec__83631 = p__83630;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83631,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83631,(1),null);
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

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__83621){
var self__ = this;
var G__83621__$1 = this;
return (new cljs.core.RecordIter((0),G__83621__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this83623,other83624){
var self__ = this;
var this83623__$1 = this;
return (((!((other83624 == null)))) && ((this83623__$1.constructor === other83624.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this83623__$1.client_id,other83624.client_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this83623__$1.chs,other83624.chs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this83623__$1.params,other83624.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this83623__$1.packer,other83624.packer)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this83623__$1.url,other83624.url)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this83623__$1.state_,other83624.state_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this83623__$1.instance_handle_,other83624.instance_handle_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this83623__$1.ever_opened_QMARK__,other83624.ever_opened_QMARK__)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this83623__$1.backoff_ms_fn,other83624.backoff_ms_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this83623__$1.ajax_opts,other83624.ajax_opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this83623__$1.curr_xhr_,other83624.curr_xhr_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this83623__$1.__extmap,other83624.__extmap)));
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

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__83621){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__83640 = cljs.core.keyword_identical_QMARK_;
var expr__83641 = k__4388__auto__;
if(cljs.core.truth_((pred__83640.cljs$core$IFn$_invoke$arity$2 ? pred__83640.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__83641) : pred__83640.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__83641)))){
return (new taoensso.sente.ChAjaxSocket(G__83621,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__83640.cljs$core$IFn$_invoke$arity$2 ? pred__83640.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"chs","chs",376886120),expr__83641) : pred__83640.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__83641)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__83621,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__83640.cljs$core$IFn$_invoke$arity$2 ? pred__83640.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__83641) : pred__83640.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__83641)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__83621,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__83640.cljs$core$IFn$_invoke$arity$2 ? pred__83640.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"packer","packer",66077544),expr__83641) : pred__83640.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__83641)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__83621,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__83640.cljs$core$IFn$_invoke$arity$2 ? pred__83640.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046),expr__83641) : pred__83640.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__83641)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__83621,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__83640.cljs$core$IFn$_invoke$arity$2 ? pred__83640.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state_","state_",957667102),expr__83641) : pred__83640.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__83641)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__83621,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__83640.cljs$core$IFn$_invoke$arity$2 ? pred__83640.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__83641) : pred__83640.call(null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__83641)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__83621,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__83640.cljs$core$IFn$_invoke$arity$2 ? pred__83640.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__83641) : pred__83640.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__83641)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,G__83621,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__83640.cljs$core$IFn$_invoke$arity$2 ? pred__83640.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__83641) : pred__83640.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__83641)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,G__83621,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__83640.cljs$core$IFn$_invoke$arity$2 ? pred__83640.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__83641) : pred__83640.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__83641)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__83621,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__83640.cljs$core$IFn$_invoke$arity$2 ? pred__83640.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__83641) : pred__83640.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__83641)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,G__83621,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__83621),null));
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

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__83621){
var self__ = this;
var this__4379__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,G__83621,self__.__extmap,self__.__hash));
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

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__83615_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__83615_SHARP_,reason);
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
var map__83643 = opts;
var map__83643__$1 = (((((!((map__83643 == null))))?(((((map__83643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83643):map__83643);
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83643__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83643__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83643__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
} else {
var csrf_token = new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_));
var G__83645_84113 = self__.url;
var G__83646_84114 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__4126__auto__ = _QMARK_timeout_ms;
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
var G__83647_84115 = (function taoensso$sente$ajax_cb(p__83648){
var map__83649 = p__83648;
var map__83649__$1 = (((((!((map__83649 == null))))?(((((map__83649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83649):map__83649);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83649__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83649__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)) : _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)));
} else {
return null;
}
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__83616_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__83616_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
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
var vec__83651 = taoensso.sente.unpack(self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83651,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83651,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
(_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(resp_clj) : _QMARK_cb_fn.call(null,resp_clj));
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",1404,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
}),null)),null,-1736593173,null);
} else {
}
}

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__83617_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__83617_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
}));
}
});
(taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__83645_84113,G__83646_84114,G__83647_84115) : taoensso.sente.ajax_lite.call(null,G__83645_84113,G__83646_84114,G__83647_84115));

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
}),null)),null,-615903581,null);

if(have_handle_QMARK_()){
var retry_fn = (function (){
if(have_handle_QMARK_()){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = (self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1 ? self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1(retry_count_STAR_) : self__.backoff_ms_fn.call(null,retry_count_STAR_));
var udt_next_reconnect = (taoensso.encore.now_udt() + backoff_ms);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",1422,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
}),null)),null,350132781,null);

goog.global.setTimeout((function (){
return taoensso$sente$poll_fn(retry_count_STAR_);
}),backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__83618_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__83618_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
}));
} else {
return null;
}
});
return cljs.core.reset_BANG_(self__.curr_xhr_,(function (){var G__83654 = self__.url;
var G__83655 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handshake?","handshake?",-423743093),true], null))], 0)),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_))], null)], 0))], null)], 0));
var G__83656 = (function taoensso$sente$poll_fn_$_ajax_cb(p__83657){
var map__83658 = p__83657;
var map__83658__$1 = (((((!((map__83658 == null))))?(((((map__83658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83658):map__83658);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83658__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83658__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return taoensso$sente$poll_fn((0));
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__83619_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__83619_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
}));

return retry_fn();

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__83660 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83660,(0),null);
var handshake_QMARK_ = taoensso.sente.handshake_QMARK_(clj);
if(handshake_QMARK_){
taoensso.sente.receive_handshake_BANG_(new cljs.core.Keyword(null,"ajax","ajax",814345549),chsk__$1,clj);
} else {
}

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__83620_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__83620_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
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
return (taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__83654,G__83655,G__83656) : taoensso.sente.ajax_lite.call(null,G__83654,G__83655,G__83656));
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
taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__83626){
var extmap__4419__auto__ = (function (){var G__83663 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__83626,new cljs.core.Keyword(null,"client-id","client-id",-464622140),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)], 0));
if(cljs.core.record_QMARK_(G__83626)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__83663);
} else {
return G__83663;
}
})();
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__83626),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__83626),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__83626),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__83626),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__83626),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__83626),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__83626),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__83626),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__83626),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__83626),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__83626),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k83672,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__83679 = k83672;
var G__83679__$1 = (((G__83679 instanceof cljs.core.Keyword))?G__83679.fqn:null);
switch (G__83679__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k83672,else__4383__auto__);

}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__83680){
var vec__83681 = p__83680;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83681,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83681,(1),null);
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

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__83671){
var self__ = this;
var G__83671__$1 = this;
return (new cljs.core.RecordIter((0),G__83671__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this83673,other83674){
var self__ = this;
var this83673__$1 = this;
return (((!((other83674 == null)))) && ((this83673__$1.constructor === other83674.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this83673__$1.ws_chsk_opts,other83674.ws_chsk_opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this83673__$1.ajax_chsk_opts,other83674.ajax_chsk_opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this83673__$1.state_,other83674.state_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this83673__$1.impl_,other83674.impl_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this83673__$1.__extmap,other83674.__extmap)));
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

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__83671){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__83693 = cljs.core.keyword_identical_QMARK_;
var expr__83694 = k__4388__auto__;
if(cljs.core.truth_((pred__83693.cljs$core$IFn$_invoke$arity$2 ? pred__83693.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),expr__83694) : pred__83693.call(null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),expr__83694)))){
return (new taoensso.sente.ChAutoSocket(G__83671,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__83693.cljs$core$IFn$_invoke$arity$2 ? pred__83693.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),expr__83694) : pred__83693.call(null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),expr__83694)))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,G__83671,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__83693.cljs$core$IFn$_invoke$arity$2 ? pred__83693.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state_","state_",957667102),expr__83694) : pred__83693.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__83694)))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,G__83671,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__83693.cljs$core$IFn$_invoke$arity$2 ? pred__83693.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"impl_","impl_",1218818179),expr__83694) : pred__83693.call(null,new cljs.core.Keyword(null,"impl_","impl_",1218818179),expr__83694)))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,G__83671,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__83671),null));
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

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__83671){
var self__ = this;
var this__4379__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,G__83671,self__.__extmap,self__.__hash));
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
var map__83696 = opts;
var map__83696__$1 = (((((!((map__83696 == null))))?(((((map__83696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83696):map__83696);
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83696__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
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
var downgraded_QMARK___84117 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
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
if(cljs.core.compare_and_set_BANG_(downgraded_QMARK___84117,false,true)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",1555,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Permanently downgrading :auto chsk -> :ajax"], null);
}),null)),null,-1487612184,null);

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
taoensso.sente.map__GT_ChAutoSocket = (function taoensso$sente$map__GT_ChAutoSocket(G__83675){
var extmap__4419__auto__ = (function (){var G__83710 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__83675,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)], 0));
if(cljs.core.record_QMARK_(G__83675)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__83710);
} else {
return G__83710;
}
})();
return (new taoensso.sente.ChAutoSocket(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104).cljs$core$IFn$_invoke$arity$1(G__83675),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327).cljs$core$IFn$_invoke$arity$1(G__83675),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__83675),new cljs.core.Keyword(null,"impl_","impl_",1218818179).cljs$core$IFn$_invoke$arity$1(G__83675),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

taoensso.sente.new_ChAutoSocket = (function taoensso$sente$new_ChAutoSocket(opts,csrf_token){
return taoensso.sente.map__GT_ChAutoSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token], null)),new cljs.core.Keyword(null,"impl_","impl_",1218818179),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),opts], 0)));
});
taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,host,path,type){
var protocol__$1 = (function (){var G__83711 = protocol;
var G__83711__$1 = (((G__83711 instanceof cljs.core.Keyword))?G__83711.fqn:null);
switch (G__83711__$1) {
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
return cljs.core.contains_QMARK_((function (){var G__83713 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["https:",null,"http:",null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__83713) : taoensso.truss.impl.set_STAR_.call(null,G__83713));
})(),x);
})(protocol__$1)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e83712){if((e83712 instanceof Error)){
var e = e83712;
return e;
} else {
throw e83712;

}
}})();
if((e == null)){
return protocol__$1;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1574,"([:el #{\"https:\" \"http:\"}] protocol)",protocol__$1,e,null);
}
})();
var protocol__$3 = (function (){var G__83714 = type;
var G__83714__$1 = (((G__83714 instanceof cljs.core.Keyword))?G__83714.fqn:null);
switch (G__83714__$1) {
case "ajax":
return protocol__$2;

break;
case "ws":
var G__83715 = protocol__$2;
switch (G__83715) {
case "https:":
return "wss:";

break;
case "http:":
return "ws:";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__83715)].join('')));

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__83714__$1)].join('')));

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
var len__4736__auto___84121 = arguments.length;
var i__4737__auto___84122 = (0);
while(true){
if((i__4737__auto___84122 < len__4736__auto___84121)){
args__4742__auto__.push((arguments[i__4737__auto___84122]));

var G__84123 = (i__4737__auto___84122 + (1));
i__4737__auto___84122 = G__84123;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,_QMARK_csrf_token,p__83719){
var vec__83720 = p__83719;
var map__83723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83720,(0),null);
var map__83723__$1 = (((((!((map__83723 == null))))?(((((map__83723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83723):map__83723);
var opts = map__83723__$1;
var ajax_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83723__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_kalive_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__83723__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"secs","secs",1532330091),(20)], 0)));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__83723__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
}
})());
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83723__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var packer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__83723__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83723__$1,new cljs.core.Keyword(null,"params","params",710516235));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__83723__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83723__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83723__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83723__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__83723__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer((2048)));
var backoff_ms_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__83723__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__83723__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var _deprecated_more_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83720,(1),null);
var e_84124 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_((function (){var G__83726 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__83726) : taoensso.truss.impl.set_STAR_.call(null,G__83726));
})(),x);
})(type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e83725){if((e83725 instanceof Error)){
var e_84124 = e83725;
return e_84124;
} else {
throw e83725;

}
}})();
if((e_84124 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1618,"([:in #{:ws :ajax :auto}] type)",type,e_84124,null);
}

var e_84125 = (function (){try{if(taoensso.encore.nblank_str_QMARK_(client_id)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e83727){if((e83727 instanceof Error)){
var e_84125 = e83727;
return e_84125;
} else {
throw e83727;

}
}})();
if((e_84125 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1619,"(enc/nblank-str? client-id)",client_id,e_84125,null);
}

if((!((_deprecated_more_opts == null)))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",1621,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
}),null)),null,1045535584,null);
} else {
}

if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",1622,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
}),null)),null,638307447,null);
} else {
}

if((((!(typeof _QMARK_csrf_token === 'string'))) || (clojure.string.blank_QMARK_(_QMARK_csrf_token)))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",1625,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WARNING: no CSRF token provided. Connections will FAIL if server-side CSRF check is enabled (as it is by default)."], null);
}),null)),null,1090861104,null);
} else {
}

var packer__$1 = taoensso.sente.coerce_packer(packer);
var vec__83728 = (function (){var win_loc = taoensso.encore.get_win_loc();
var path__$1 = (function (){var z = (function (){try{var or__4126__auto__ = path;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_loc);
}
}catch (e83731){if((e83731 instanceof Error)){
var e = e83731;
return (new taoensso.truss.impl.WrappedError(e));
} else {
throw e83731;

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
}catch (e83732){if((e83732 instanceof Error)){
var e = e83732;
return e;
} else {
throw e83732;

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
var ws_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83728,(0),null);
var ajax_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83728,(1),null);
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
var _QMARK_chsk = taoensso.sente._chsk_connect_BANG_((function (){var G__83733 = type;
var G__83733__$1 = (((G__83733 instanceof cljs.core.Keyword))?G__83733.fqn:null);
switch (G__83733__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__83733__$1)].join('')));

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
var vec__83734 = taoensso.sente.as_event(ev);
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83734,(0),null);
var ev__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83734,(1),null);
var ev__$1 = vec__83734;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),internal_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),chsk_state_,new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
})));
cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2(ev_ch,ev_msg_ch);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ev_msg_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",1727,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to create channel socket"], null);
}),null)),null,793084479,null);
}
}));

(taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq83716){
var G__83717 = cljs.core.first(seq83716);
var seq83716__$1 = cljs.core.next(seq83716);
var G__83718 = cljs.core.first(seq83716__$1);
var seq83716__$2 = cljs.core.next(seq83716__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__83717,G__83718,seq83716__$2);
}));

taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__83740 = opts;
var map__83740__$1 = (((((!((map__83740 == null))))?(((((map__83740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83740):map__83740);
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83740__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83740__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83740__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
var ch_ctrl = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var execute1 = (function (f){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var c__71447__auto___84127 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__71448__auto__ = (function (){var switch__71378__auto__ = (function (state_83789){
var state_val_83790 = (state_83789[(1)]);
if((state_val_83790 === (7))){
var inst_83785 = (state_83789[(2)]);
var state_83789__$1 = state_83789;
var statearr_83791_84128 = state_83789__$1;
(statearr_83791_84128[(2)] = inst_83785);

(statearr_83791_84128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83790 === (1))){
var state_83789__$1 = state_83789;
var statearr_83792_84129 = state_83789__$1;
(statearr_83792_84129[(2)] = null);

(statearr_83792_84129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83790 === (4))){
var inst_83755 = (state_83789[(7)]);
var inst_83750 = (state_83789[(8)]);
var inst_83751 = (state_83789[(9)]);
var inst_83752 = (state_83789[(10)]);
var inst_83750__$1 = (state_83789[(2)]);
var inst_83751__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_83750__$1,(0),null);
var inst_83752__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_83750__$1,(1),null);
var inst_83753 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_83752__$1,ch_ctrl);
var inst_83754 = (inst_83751__$1 == null);
var inst_83755__$1 = ((inst_83753) || (inst_83754));
var state_83789__$1 = (function (){var statearr_83793 = state_83789;
(statearr_83793[(7)] = inst_83755__$1);

(statearr_83793[(8)] = inst_83750__$1);

(statearr_83793[(9)] = inst_83751__$1);

(statearr_83793[(10)] = inst_83752__$1);

return statearr_83793;
})();
if(cljs.core.truth_(inst_83755__$1)){
var statearr_83794_84130 = state_83789__$1;
(statearr_83794_84130[(1)] = (5));

} else {
var statearr_83795_84131 = state_83789__$1;
(statearr_83795_84131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83790 === (15))){
var inst_83751 = (state_83789[(9)]);
var state_83789__$1 = state_83789;
var statearr_83796_84132 = state_83789__$1;
(statearr_83796_84132[(2)] = inst_83751);

(statearr_83796_84132[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83790 === (13))){
var inst_83771 = (state_83789[(2)]);
var state_83789__$1 = state_83789;
var statearr_83797_84133 = state_83789__$1;
(statearr_83797_84133[(2)] = inst_83771);

(statearr_83797_84133[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83790 === (6))){
var inst_83751 = (state_83789[(9)]);
var inst_83760 = (inst_83751 == null);
var inst_83761 = cljs.core.not(inst_83760);
var state_83789__$1 = state_83789;
if(inst_83761){
var statearr_83798_84134 = state_83789__$1;
(statearr_83798_84134[(1)] = (8));

} else {
var statearr_83799_84135 = state_83789__$1;
(statearr_83799_84135[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83790 === (3))){
var inst_83787 = (state_83789[(2)]);
var state_83789__$1 = state_83789;
return cljs.core.async.impl.ioc_helpers.return_chan(state_83789__$1,inst_83787);
} else {
if((state_val_83790 === (12))){
var state_83789__$1 = state_83789;
var statearr_83800_84136 = state_83789__$1;
(statearr_83800_84136[(2)] = false);

(statearr_83800_84136[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83790 === (2))){
var inst_83746 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_83747 = [ch_recv,ch_ctrl];
var inst_83748 = (new cljs.core.PersistentVector(null,2,(5),inst_83746,inst_83747,null));
var state_83789__$1 = state_83789;
return cljs.core.async.ioc_alts_BANG_(state_83789__$1,(4),inst_83748);
} else {
if((state_val_83790 === (11))){
var state_83789__$1 = state_83789;
var statearr_83801_84137 = state_83789__$1;
(statearr_83801_84137[(2)] = true);

(statearr_83801_84137[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83790 === (9))){
var state_83789__$1 = state_83789;
var statearr_83802_84138 = state_83789__$1;
(statearr_83802_84138[(2)] = false);

(statearr_83802_84138[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83790 === (5))){
var state_83789__$1 = state_83789;
var statearr_83803_84139 = state_83789__$1;
(statearr_83803_84139[(2)] = null);

(statearr_83803_84139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83790 === (14))){
var inst_83751 = (state_83789[(9)]);
var inst_83776 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_83751);
var state_83789__$1 = state_83789;
var statearr_83804_84140 = state_83789__$1;
(statearr_83804_84140[(2)] = inst_83776);

(statearr_83804_84140[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83790 === (16))){
var inst_83755 = (state_83789[(7)]);
var inst_83750 = (state_83789[(8)]);
var inst_83751 = (state_83789[(9)]);
var inst_83752 = (state_83789[(10)]);
var inst_83779 = (state_83789[(2)]);
var inst_83780 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_83779,new cljs.core.Keyword(null,"event","event",301435442));
var inst_83781 = (function (){var vec__83743 = inst_83750;
var v = inst_83751;
var p = inst_83752;
var stop_QMARK_ = inst_83755;
var map__83758 = inst_83779;
var event_msg = inst_83779;
var event = inst_83780;
return (function (){
try{if(cljs.core.truth_(trace_evs_QMARK_)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",1754,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
}),null)),null,-472192401,null);
} else {
}

var G__83807 = (cljs.core.truth_(server_QMARK_)?(function (){var e = (function (){try{if(taoensso.sente.server_event_msg_QMARK_(event_msg)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e83808){if((e83808 instanceof Error)){
var e = e83808;
return e;
} else {
throw e83808;

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
}catch (e83809){if((e83809 instanceof Error)){
var e = e83809;
return e;
} else {
throw e83809;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_(null,"taoensso.sente",1758,"(client-event-msg? event-msg)",event_msg,e,null);
}
})());
return (event_msg_handler.cljs$core$IFn$_invoke$arity$1 ? event_msg_handler.cljs$core$IFn$_invoke$arity$1(G__83807) : event_msg_handler.call(null,G__83807));
}catch (e83805){var e1 = e83805;
try{var temp__5751__auto__ = error_handler;
if(cljs.core.truth_(temp__5751__auto__)){
var eh = temp__5751__auto__;
return (error_handler.cljs$core$IFn$_invoke$arity$2 ? error_handler.cljs$core$IFn$_invoke$arity$2(e1,event_msg) : error_handler.call(null,e1,event_msg));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",1763,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,"Chsk router `event-msg-handler` error: %s",event], null);
}),null)),null,-2069743147,null);
}
}catch (e83806){var e2 = e83806;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",1764,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
}),null)),null,1513766746,null);
}}});
})();
var inst_83782 = execute1(inst_83781);
var state_83789__$1 = (function (){var statearr_83810 = state_83789;
(statearr_83810[(11)] = inst_83782);

return statearr_83810;
})();
var statearr_83811_84141 = state_83789__$1;
(statearr_83811_84141[(2)] = null);

(statearr_83811_84141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83790 === (10))){
var inst_83774 = (state_83789[(2)]);
var state_83789__$1 = state_83789;
if(cljs.core.truth_(inst_83774)){
var statearr_83812_84142 = state_83789__$1;
(statearr_83812_84142[(1)] = (14));

} else {
var statearr_83813_84143 = state_83789__$1;
(statearr_83813_84143[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83790 === (8))){
var inst_83751 = (state_83789[(9)]);
var inst_83763 = inst_83751.cljs$lang$protocol_mask$partition0$;
var inst_83764 = (inst_83763 & (64));
var inst_83765 = inst_83751.cljs$core$ISeq$;
var inst_83766 = (cljs.core.PROTOCOL_SENTINEL === inst_83765);
var inst_83767 = ((inst_83764) || (inst_83766));
var state_83789__$1 = state_83789;
if(cljs.core.truth_(inst_83767)){
var statearr_83814_84144 = state_83789__$1;
(statearr_83814_84144[(1)] = (11));

} else {
var statearr_83815_84145 = state_83789__$1;
(statearr_83815_84145[(1)] = (12));

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
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__71379__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__71379__auto____0 = (function (){
var statearr_83816 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_83816[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__71379__auto__);

(statearr_83816[(1)] = (1));

return statearr_83816;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__71379__auto____1 = (function (state_83789){
while(true){
var ret_value__71380__auto__ = (function (){try{while(true){
var result__71381__auto__ = switch__71378__auto__(state_83789);
if(cljs.core.keyword_identical_QMARK_(result__71381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71381__auto__;
}
break;
}
}catch (e83817){var ex__71382__auto__ = e83817;
var statearr_83818_84146 = state_83789;
(statearr_83818_84146[(2)] = ex__71382__auto__);


if(cljs.core.seq((state_83789[(4)]))){
var statearr_83819_84147 = state_83789;
(statearr_83819_84147[(1)] = cljs.core.first((state_83789[(4)])));

} else {
throw ex__71382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__84148 = state_83789;
state_83789 = G__84148;
continue;
} else {
return ret_value__71380__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__71379__auto__ = function(state_83789){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__71379__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__71379__auto____1.call(this,state_83789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__71379__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__71379__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__71379__auto__;
})()
})();
var state__71449__auto__ = (function (){var statearr_83820 = f__71448__auto__();
(statearr_83820[(6)] = c__71447__auto___84127);

return statearr_83820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71449__auto__);
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
var len__4736__auto___84149 = arguments.length;
var i__4737__auto___84150 = (0);
while(true){
if((i__4737__auto___84150 < len__4736__auto___84149)){
args__4742__auto__.push((arguments[i__4737__auto___84150]));

var G__84151 = (i__4737__auto___84150 + (1));
i__4737__auto___84150 = G__84151;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__83824){
var vec__83825 = p__83824;
var map__83828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83825,(0),null);
var map__83828__$1 = (((((!((map__83828 == null))))?(((((map__83828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83828):map__83828);
var opts = map__83828__$1;
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83828__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83828__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83828__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
return taoensso.sente._start_chsk_router_BANG_(new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
}));

(taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq83821){
var G__83822 = cljs.core.first(seq83821);
var seq83821__$1 = cljs.core.next(seq83821);
var G__83823 = cljs.core.first(seq83821__$1);
var seq83821__$2 = cljs.core.next(seq83821__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__83822,G__83823,seq83821__$2);
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
var len__4736__auto___84152 = arguments.length;
var i__4737__auto___84153 = (0);
while(true){
if((i__4737__auto___84153 < len__4736__auto___84152)){
args__4742__auto__.push((arguments[i__4737__auto___84153]));

var G__84154 = (i__4737__auto___84153 + (1));
i__4737__auto___84153 = G__84154;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__83833){
var vec__83834 = p__83833;
var map__83837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83834,(0),null);
var map__83837__$1 = (((((!((map__83837 == null))))?(((((map__83837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83837):map__83837);
var opts = map__83837__$1;
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83837__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83837__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_(cljs.core.not(new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
}));

(taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq83830){
var G__83831 = cljs.core.first(seq83830);
var seq83830__$1 = cljs.core.next(seq83830);
var G__83832 = cljs.core.first(seq83830__$1);
var seq83830__$2 = cljs.core.next(seq83830__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__83831,G__83832,seq83830__$2);
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
var G__83839 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(ev_msg);
var G__83840 = new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(ev_msg);
return (event_handler.cljs$core$IFn$_invoke$arity$2 ? event_handler.cljs$core$IFn$_invoke$arity$2(G__83839,G__83840) : event_handler.call(null,G__83839,G__83840));
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
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__83841,websocket_QMARK_){
var map__83842 = p__83841;
var map__83842__$1 = (((((!((map__83842 == null))))?(((((map__83842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83842):map__83842);
var location = map__83842__$1;
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83842__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83842__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83842__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
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
