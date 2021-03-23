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
if(cljs.core.not((function (){var G__85463 = cljs.core.count(x);
var fexpr__85462 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null);
return (fexpr__85462.cljs$core$IFn$_invoke$arity$1 ? fexpr__85462.cljs$core$IFn$_invoke$arity$1(G__85463) : fexpr__85462.call(null,G__85463));
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-length","wrong-length",1367572281),taoensso.sente.expected(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),x)], null);
} else {
var vec__85464 = x;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85464,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85464,(1),null);
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
var map__85489 = x;
var map__85489__$1 = (((((!((map__85489 == null))))?(((((map__85489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85489):map__85489);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85489__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85489__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85489__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85489__$1,new cljs.core.Keyword(null,"event","event",301435442));
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
var map__85503 = x;
var map__85503__$1 = (((((!((map__85503 == null))))?(((((map__85503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85503):map__85503);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85503__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85503__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85503__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var send_buffers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85503__$1,new cljs.core.Keyword(null,"send-buffers","send-buffers",-1788003787));
var ring_req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85503__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85503__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85503__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85503__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
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
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__85512){
var map__85514 = p__85512;
var map__85514__$1 = (((((!((map__85514 == null))))?(((((map__85514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85514):map__85514);
var ev_msg = map__85514__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85514__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85514__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__85518 = taoensso.sente.as_event(event);
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85518,(0),null);
var ev__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85518,(1),null);
var valid_event = vec__85518;
var ev_msg_STAR_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null)], 0));
if((!(taoensso.sente.server_event_msg_QMARK_(ev_msg_STAR_)))){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",194,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
}),null)),null,-1859513257,null);
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch_recv,ev_msg_STAR_);
}
});
taoensso.sente.cb_error_QMARK_ = (function taoensso$sente$cb_error_QMARK_(cb_reply_clj){
var fexpr__85526 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264),null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439),null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489),null], null), null);
return (fexpr__85526.cljs$core$IFn$_invoke$arity$1 ? fexpr__85526.cljs$core$IFn$_invoke$arity$1(cb_reply_clj) : fexpr__85526.call(null,cb_reply_clj));
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
}catch (e85530){var t = e85530;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",215,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
}),null)),null,227716366,null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-package","chsk/bad-package",501893679),pstr], null);
}})();
var vec__85527 = ((wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85527,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85527,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",221,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
}),null)),null,-307922754,null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var G__85538 = arguments.length;
switch (G__85538) {
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
}),null)),null,-280533980,null);

return pstr;
}));

(taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3 = (function (packer,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
var pstr = ["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.interfaces.pack(packer,wrapped_clj))].join('');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",237,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (wrapped): %s -> %s",wrapped_clj,pstr], null);
}),null)),null,362569112,null);

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
var e = (function (){try{if((function (p1__85560_SHARP_){
if((!((p1__85560_SHARP_ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__85560_SHARP_.taoensso$sente$interfaces$IPacker$)))){
return true;
} else {
if((!p1__85560_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IPacker,p1__85560_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IPacker,p1__85560_SHARP_);
}
})(x)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e85566){if((e85566 instanceof Error)){
var e = e85566;
return e;
} else {
throw e85566;

}
}})();
if((e == null)){
return x;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",250,"((fn* [p1__85560#] (satisfies? interfaces/IPacker p1__85560#)) x)",x,e,null);
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
if(cljs.core.truth_((((!(have_origin_QMARK_)))?taoensso.encore.rsome((function (p1__85570_SHARP_){
return clojure.string.starts_with_QMARK_(referer,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__85570_SHARP_),"/"].join(''));
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
var len__4736__auto___86717 = arguments.length;
var i__4737__auto___86718 = (0);
while(true){
if((i__4737__auto___86718 < len__4736__auto___86717)){
args__4742__auto__.push((arguments[i__4737__auto___86718]));

var G__86719 = (i__4737__auto___86718 + (1));
i__4737__auto___86718 = G__86719;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_ch_adapter,p__85582){
var vec__85583 = p__85582;
var map__85586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85583,(0),null);
var map__85586__$1 = (((((!((map__85586 == null))))?(((((map__85586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85586):map__85586);
var ws_kalive_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__85586__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"secs","secs",1532330091),(25)], 0)));
var _QMARK_unauthorized_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85586__$1,new cljs.core.Keyword(null,"?unauthorized-fn","?unauthorized-fn",-1883475616));
var send_buf_ms_ws = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__85586__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var allowed_origins = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__85586__$1,new cljs.core.Keyword(null,"allowed-origins","allowed-origins",1477851683),new cljs.core.Keyword(null,"all","all",892129742));
var lp_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__85586__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"secs","secs",1532330091),(20)], 0)));
var csrf_token_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__85586__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),(function (ring_req){
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
var packer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__85586__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var unauthorized_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__85586__$1,new cljs.core.Keyword(null,"unauthorized-fn","unauthorized-fn",-2032603957),(function (_ring_req){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),(401),new cljs.core.Keyword(null,"body","body",-2049205669),"Unauthorized request"], null);
}));
var send_buf_ms_ajax = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__85586__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var bad_origin_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__85586__$1,new cljs.core.Keyword(null,"bad-origin-fn","bad-origin-fn",1385595727),(function (_ring_req){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),(403),new cljs.core.Keyword(null,"body","body",-2049205669),"Unauthorized origin"], null);
}));
var handshake_data_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__85586__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),(function (ring_req){
return null;
}));
var user_id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__85586__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),(function (ring_req){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
}));
var recv_buf_or_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__85586__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer((1000)));
var authorized_QMARK__fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85586__$1,new cljs.core.Keyword(null,"authorized?-fn","authorized?-fn",-1334669261));
var bad_csrf_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__85586__$1,new cljs.core.Keyword(null,"bad-csrf-fn","bad-csrf-fn",16619032),(function (_ring_req){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),(403),new cljs.core.Keyword(null,"body","body",-2049205669),"Bad CSRF token"], null);
}));
var e_86720 = (function (){try{if(taoensso.encore.pos_int_QMARK_(send_buf_ms_ajax)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e85592){if((e85592 instanceof Error)){
var e_86720 = e85592;
return e_86720;
} else {
throw e85592;

}
}})();
if((e_86720 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",394,"(enc/pos-int? send-buf-ms-ajax)",send_buf_ms_ajax,e_86720,null);
}

var e_86721 = (function (){try{if(taoensso.encore.pos_int_QMARK_(send_buf_ms_ws)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e85593){if((e85593 instanceof Error)){
var e_86721 = e85593;
return e_86721;
} else {
throw e85593;

}
}})();
if((e_86721 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",394,"(enc/pos-int? send-buf-ms-ws)",send_buf_ms_ws,e_86721,null);
}


var e_86722 = (function (){try{if((function (p1__85574_SHARP_){
if((!((p1__85574_SHARP_ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__85574_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)))){
return true;
} else {
if((!p1__85574_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IServerChanAdapter,p1__85574_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IServerChanAdapter,p1__85574_SHARP_);
}
})(web_server_ch_adapter)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e85595){if((e85595 instanceof Error)){
var e_86722 = e85595;
return e_86722;
} else {
throw e85595;

}
}})();
if((e_86722 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",395,"((fn* [p1__85574#] (satisfies? interfaces/IServerChanAdapter p1__85574#)) web-server-ch-adapter)",web_server_ch_adapter,e_86722,null);
}

var max_ms_86723 = taoensso.sente.default_client_side_ajax_timeout_ms;
if((lp_timeout_ms >= max_ms_86723)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([":lp-timeout-ms must be < ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_ms_86723)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),lp_timeout_ms,new cljs.core.Keyword(null,"default-client-side-ajax-timeout-ms","default-client-side-ajax-timeout-ms",1149929762),max_ms_86723], null));
} else {
}

var allowed_origins__$1 = (cljs.core.truth_((function (x){
var or__4126__auto__ = cljs.core.set_QMARK_(x);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__85600 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all","all",892129742),null], null), null);
return (fexpr__85600.cljs$core$IFn$_invoke$arity$1 ? fexpr__85600.cljs$core$IFn$_invoke$arity$1(x) : fexpr__85600.call(null,x));
}
})(allowed_origins))?allowed_origins:taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",404,"([:or set? #{:all}] allowed-origins)",allowed_origins,null,null));
var packer__$1 = taoensso.sente.coerce_packer(packer);
var ch_recv = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(recv_buf_or_n);
var user_id_fn__$1 = (function (ring_req,client_id){
var or__4126__auto__ = (function (){var G__85602 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);
return (user_id_fn.cljs$core$IFn$_invoke$arity$1 ? user_id_fn.cljs$core$IFn$_invoke$arity$1(G__85602) : user_id_fn.call(null,G__85602));
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
var G__86724 = null;
var G__86724__3 = (function (conn_type,uid,client_id){
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),(function (_QMARK_v){
var vec__85605 = _QMARK_v;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85605,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85605,(1),null);
var new_udt = taoensso.encore.now_udt();
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),_QMARK_sch], null));
}));
});
var G__86724__4 = (function (conn_type,uid,client_id,new__QMARK_sch){
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),(function (_QMARK_v){
var new_udt = taoensso.encore.now_udt();
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new__QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),new__QMARK_sch], null));
}));
});
G__86724 = function(conn_type,uid,client_id,new__QMARK_sch){
switch(arguments.length){
case 3:
return G__86724__3.call(this,conn_type,uid,client_id);
case 4:
return G__86724__4.call(this,conn_type,uid,client_id,new__QMARK_sch);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__86724.cljs$core$IFn$_invoke$arity$3 = G__86724__3;
G__86724.cljs$core$IFn$_invoke$arity$4 = G__86724__4;
return G__86724;
})()
;
var connect_uid_BANG_ = (function (conn_type,uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e85611){if((e85611 instanceof Error)){
var e = e85611;
return e;
} else {
throw e85611;

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

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(connected_uids_,cljs.core.PersistentVector.EMPTY,(function (p__85621){
var map__85622 = p__85621;
var map__85622__$1 = (((((!((map__85622 == null))))?(((((map__85622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85622):map__85622);
var old_m = map__85622__$1;
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85622__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85622__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85622__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__85624 = conn_type;
var G__85624__$1 = (((G__85624 instanceof cljs.core.Keyword))?G__85624.fqn:null);
switch (G__85624__$1) {
case "ws":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ws,uid),new cljs.core.Keyword(null,"ajax","ajax",814345549),ajax,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid)], null);

break;
case "ajax":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ajax,uid),new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__85624__$1)].join('')));

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
}catch (e85633){if((e85633 instanceof Error)){
var e = e85633;
return e;
} else {
throw e85633;

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

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(connected_uids_,cljs.core.PersistentVector.EMPTY,(function (p__85635){
var map__85636 = p__85635;
var map__85636__$1 = (((((!((map__85636 == null))))?(((((map__85636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85636):map__85636);
var old_m = map__85636__$1;
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85636__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85636__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85636__$1,new cljs.core.Keyword(null,"any","any",1705907423));
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
var G__86726__delegate = function (user_id,ev,p__85643){
var vec__85644 = p__85643;
var map__85647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85644,(0),null);
var map__85647__$1 = (((((!((map__85647 == null))))?(((((map__85647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85647):map__85647);
var opts = map__85647__$1;
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85647__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_86727 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486):user_id);
var __86728 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",483,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_86727,ev], null);
}),null)),null,-1794862084,null);
var __86729__$1 = (cljs.core.truth_(uid_86727)?null:(function(){throw (new Error(["Assert failed: ",["Support for sending to `nil` user-ids has been REMOVED. ","Please send to `:sente/all-users-without-uid` instead."].join(''),"\n","uid"].join('')))})());
var __86730__$2 = taoensso.sente.assert_event(ev);
var ev_uuid_86731 = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
var flush_buffer_BANG__86732 = (function (conn_type){
var temp__5753__auto__ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type], null),(function (m){
var vec__85651 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,uid_86727);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85651,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85651,(1),null);
if(cljs.core.contains_QMARK_(ev_uuids,ev_uuid_86731)){
return taoensso.encore.swapped(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,uid_86727),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,uid_86727));
} else {
return taoensso.encore.swapped(m,null);
}
}));
if(cljs.core.truth_(temp__5753__auto__)){
var pulled = temp__5753__auto__;
var vec__85654 = pulled;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85654,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85654,(1),null);
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
}),null)),null,-200924192,null);

var G__85662 = conn_type;
var G__85662__$1 = (((G__85662 instanceof cljs.core.Keyword))?G__85662.fqn:null);
switch (G__85662__$1) {
case "ws":
return (taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.cljs$core$IFn$_invoke$arity$4 ? taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.cljs$core$IFn$_invoke$arity$4(conns_,uid_86727,buffered_evs_ppstr,upd_conn_BANG_) : taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_86727,buffered_evs_ppstr,upd_conn_BANG_));

break;
case "ajax":
return (taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,uid_86727,buffered_evs_ppstr) : taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_86727,buffered_evs_ppstr));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__85662__$1)].join('')));

}
} else {
return null;
}
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",524,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_86727], null);
}),null)),null,-1298540418,null);

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__86732(new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__86732(new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
}

var seq__85667_86737 = cljs.core.seq(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_86727], null))));
var chunk__85668_86738 = null;
var count__85669_86739 = (0);
var i__85670_86740 = (0);
while(true){
if((i__85670_86740 < count__85669_86739)){
var vec__85689_86743 = chunk__85668_86738.cljs$core$IIndexed$_nth$arity$2(null,i__85670_86740);
var _QMARK_sch_86744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85689_86743,(0),null);
var _udt_86745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85689_86743,(1),null);
var temp__5753__auto___86750 = _QMARK_sch_86744;
if(cljs.core.truth_(temp__5753__auto___86750)){
var sch_86752 = temp__5753__auto___86750;
taoensso.sente.interfaces.sch_close_BANG_(sch_86752);
} else {
}


var G__86753 = seq__85667_86737;
var G__86754 = chunk__85668_86738;
var G__86755 = count__85669_86739;
var G__86756 = (i__85670_86740 + (1));
seq__85667_86737 = G__86753;
chunk__85668_86738 = G__86754;
count__85669_86739 = G__86755;
i__85670_86740 = G__86756;
continue;
} else {
var temp__5753__auto___86757 = cljs.core.seq(seq__85667_86737);
if(temp__5753__auto___86757){
var seq__85667_86758__$1 = temp__5753__auto___86757;
if(cljs.core.chunked_seq_QMARK_(seq__85667_86758__$1)){
var c__4556__auto___86759 = cljs.core.chunk_first(seq__85667_86758__$1);
var G__86760 = cljs.core.chunk_rest(seq__85667_86758__$1);
var G__86761 = c__4556__auto___86759;
var G__86762 = cljs.core.count(c__4556__auto___86759);
var G__86763 = (0);
seq__85667_86737 = G__86760;
chunk__85668_86738 = G__86761;
count__85669_86739 = G__86762;
i__85670_86740 = G__86763;
continue;
} else {
var vec__85694_86764 = cljs.core.first(seq__85667_86758__$1);
var _QMARK_sch_86765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85694_86764,(0),null);
var _udt_86766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85694_86764,(1),null);
var temp__5753__auto___86767__$1 = _QMARK_sch_86765;
if(cljs.core.truth_(temp__5753__auto___86767__$1)){
var sch_86769 = temp__5753__auto___86767__$1;
taoensso.sente.interfaces.sch_close_BANG_(sch_86769);
} else {
}


var G__86770 = cljs.core.next(seq__85667_86758__$1);
var G__86771 = null;
var G__86772 = (0);
var G__86773 = (0);
seq__85667_86737 = G__86770;
chunk__85668_86738 = G__86771;
count__85669_86739 = G__86772;
i__85670_86740 = G__86773;
continue;
}
} else {
}
}
break;
}

var seq__85697_86774 = cljs.core.seq(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_86727], null))));
var chunk__85698_86775 = null;
var count__85699_86776 = (0);
var i__85700_86777 = (0);
while(true){
if((i__85700_86777 < count__85699_86776)){
var vec__85712_86778 = chunk__85698_86775.cljs$core$IIndexed$_nth$arity$2(null,i__85700_86777);
var _QMARK_sch_86779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85712_86778,(0),null);
var _udt_86780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85712_86778,(1),null);
var temp__5753__auto___86781 = _QMARK_sch_86779;
if(cljs.core.truth_(temp__5753__auto___86781)){
var sch_86782 = temp__5753__auto___86781;
taoensso.sente.interfaces.sch_close_BANG_(sch_86782);
} else {
}


var G__86783 = seq__85697_86774;
var G__86784 = chunk__85698_86775;
var G__86785 = count__85699_86776;
var G__86786 = (i__85700_86777 + (1));
seq__85697_86774 = G__86783;
chunk__85698_86775 = G__86784;
count__85699_86776 = G__86785;
i__85700_86777 = G__86786;
continue;
} else {
var temp__5753__auto___86787 = cljs.core.seq(seq__85697_86774);
if(temp__5753__auto___86787){
var seq__85697_86788__$1 = temp__5753__auto___86787;
if(cljs.core.chunked_seq_QMARK_(seq__85697_86788__$1)){
var c__4556__auto___86789 = cljs.core.chunk_first(seq__85697_86788__$1);
var G__86790 = cljs.core.chunk_rest(seq__85697_86788__$1);
var G__86791 = c__4556__auto___86789;
var G__86792 = cljs.core.count(c__4556__auto___86789);
var G__86793 = (0);
seq__85697_86774 = G__86790;
chunk__85698_86775 = G__86791;
count__85699_86776 = G__86792;
i__85700_86777 = G__86793;
continue;
} else {
var vec__85717_86794 = cljs.core.first(seq__85697_86788__$1);
var _QMARK_sch_86795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85717_86794,(0),null);
var _udt_86796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85717_86794,(1),null);
var temp__5753__auto___86797__$1 = _QMARK_sch_86795;
if(cljs.core.truth_(temp__5753__auto___86797__$1)){
var sch_86798 = temp__5753__auto___86797__$1;
taoensso.sente.interfaces.sch_close_BANG_(sch_86798);
} else {
}


var G__86799 = cljs.core.next(seq__85697_86788__$1);
var G__86800 = null;
var G__86801 = (0);
var G__86802 = (0);
seq__85697_86774 = G__86799;
chunk__85698_86775 = G__86800;
count__85699_86776 = G__86801;
i__85700_86777 = G__86802;
continue;
}
} else {
}
}
break;
}
} else {
var seq__85723_86803 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__85724_86804 = null;
var count__85725_86805 = (0);
var i__85726_86806 = (0);
while(true){
if((i__85726_86806 < count__85725_86805)){
var conn_type_86807 = chunk__85724_86804.cljs$core$IIndexed$_nth$arity$2(null,i__85726_86806);
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_86807,uid_86727], null),((function (seq__85723_86803,chunk__85724_86804,count__85725_86805,i__85726_86806,conn_type_86807,uid_86727,__86728,__86729__$1,__86730__$2,ev_uuid_86731,flush_buffer_BANG__86732,vec__85644,map__85647,map__85647__$1,opts,flush_QMARK_,allowed_origins__$1,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__85583,map__85586,map__85586__$1,ws_kalive_ms,_QMARK_unauthorized_fn,send_buf_ms_ws,allowed_origins,lp_timeout_ms,csrf_token_fn,packer,unauthorized_fn,send_buf_ms_ajax,bad_origin_fn,handshake_data_fn,user_id_fn,recv_buf_or_n,authorized_QMARK__fn,bad_csrf_fn){
return (function (_QMARK_v){
if(cljs.core.not(_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_86731])], null);
} else {
var vec__85741 = _QMARK_v;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85741,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85741,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffered_evs,ev),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ev_uuids,ev_uuid_86731)], null);
}
});})(seq__85723_86803,chunk__85724_86804,count__85725_86805,i__85726_86806,conn_type_86807,uid_86727,__86728,__86729__$1,__86730__$2,ev_uuid_86731,flush_buffer_BANG__86732,vec__85644,map__85647,map__85647__$1,opts,flush_QMARK_,allowed_origins__$1,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__85583,map__85586,map__85586__$1,ws_kalive_ms,_QMARK_unauthorized_fn,send_buf_ms_ws,allowed_origins,lp_timeout_ms,csrf_token_fn,packer,unauthorized_fn,send_buf_ms_ajax,bad_origin_fn,handshake_data_fn,user_id_fn,recv_buf_or_n,authorized_QMARK__fn,bad_csrf_fn))
);


var G__86808 = seq__85723_86803;
var G__86809 = chunk__85724_86804;
var G__86810 = count__85725_86805;
var G__86811 = (i__85726_86806 + (1));
seq__85723_86803 = G__86808;
chunk__85724_86804 = G__86809;
count__85725_86805 = G__86810;
i__85726_86806 = G__86811;
continue;
} else {
var temp__5753__auto___86812 = cljs.core.seq(seq__85723_86803);
if(temp__5753__auto___86812){
var seq__85723_86813__$1 = temp__5753__auto___86812;
if(cljs.core.chunked_seq_QMARK_(seq__85723_86813__$1)){
var c__4556__auto___86814 = cljs.core.chunk_first(seq__85723_86813__$1);
var G__86815 = cljs.core.chunk_rest(seq__85723_86813__$1);
var G__86816 = c__4556__auto___86814;
var G__86817 = cljs.core.count(c__4556__auto___86814);
var G__86818 = (0);
seq__85723_86803 = G__86815;
chunk__85724_86804 = G__86816;
count__85725_86805 = G__86817;
i__85726_86806 = G__86818;
continue;
} else {
var conn_type_86819 = cljs.core.first(seq__85723_86813__$1);
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_86819,uid_86727], null),((function (seq__85723_86803,chunk__85724_86804,count__85725_86805,i__85726_86806,conn_type_86819,seq__85723_86813__$1,temp__5753__auto___86812,uid_86727,__86728,__86729__$1,__86730__$2,ev_uuid_86731,flush_buffer_BANG__86732,vec__85644,map__85647,map__85647__$1,opts,flush_QMARK_,allowed_origins__$1,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__85583,map__85586,map__85586__$1,ws_kalive_ms,_QMARK_unauthorized_fn,send_buf_ms_ws,allowed_origins,lp_timeout_ms,csrf_token_fn,packer,unauthorized_fn,send_buf_ms_ajax,bad_origin_fn,handshake_data_fn,user_id_fn,recv_buf_or_n,authorized_QMARK__fn,bad_csrf_fn){
return (function (_QMARK_v){
if(cljs.core.not(_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_86731])], null);
} else {
var vec__85744 = _QMARK_v;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85744,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85744,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffered_evs,ev),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ev_uuids,ev_uuid_86731)], null);
}
});})(seq__85723_86803,chunk__85724_86804,count__85725_86805,i__85726_86806,conn_type_86819,seq__85723_86813__$1,temp__5753__auto___86812,uid_86727,__86728,__86729__$1,__86730__$2,ev_uuid_86731,flush_buffer_BANG__86732,vec__85644,map__85647,map__85647__$1,opts,flush_QMARK_,allowed_origins__$1,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__85583,map__85586,map__85586__$1,ws_kalive_ms,_QMARK_unauthorized_fn,send_buf_ms_ws,allowed_origins,lp_timeout_ms,csrf_token_fn,packer,unauthorized_fn,send_buf_ms_ajax,bad_origin_fn,handshake_data_fn,user_id_fn,recv_buf_or_n,authorized_QMARK__fn,bad_csrf_fn))
);


var G__86820 = cljs.core.next(seq__85723_86813__$1);
var G__86821 = null;
var G__86822 = (0);
var G__86823 = (0);
seq__85723_86803 = G__86820;
chunk__85724_86804 = G__86821;
count__85725_86805 = G__86822;
i__85726_86806 = G__86823;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__86732(new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__86732(new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
var ws_timeout_86824 = cljs.core.async.timeout(send_buf_ms_ws);
var ajax_timeout_86825 = cljs.core.async.timeout(send_buf_ms_ajax);
var c__73524__auto___86826 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__73525__auto__ = (function (){var switch__73174__auto__ = (function (state_85753){
var state_val_85754 = (state_85753[(1)]);
if((state_val_85754 === (1))){
var state_85753__$1 = state_85753;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_85753__$1,(2),ws_timeout_86824);
} else {
if((state_val_85754 === (2))){
var inst_85750 = (state_85753[(2)]);
var inst_85751 = flush_buffer_BANG__86732(new cljs.core.Keyword(null,"ws","ws",86841443));
var state_85753__$1 = (function (){var statearr_85755 = state_85753;
(statearr_85755[(7)] = inst_85750);

return statearr_85755;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_85753__$1,inst_85751);
} else {
return null;
}
}
});
return (function() {
var taoensso$sente$state_machine__73175__auto__ = null;
var taoensso$sente$state_machine__73175__auto____0 = (function (){
var statearr_85756 = [null,null,null,null,null,null,null,null];
(statearr_85756[(0)] = taoensso$sente$state_machine__73175__auto__);

(statearr_85756[(1)] = (1));

return statearr_85756;
});
var taoensso$sente$state_machine__73175__auto____1 = (function (state_85753){
while(true){
var ret_value__73176__auto__ = (function (){try{while(true){
var result__73177__auto__ = switch__73174__auto__(state_85753);
if(cljs.core.keyword_identical_QMARK_(result__73177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73177__auto__;
}
break;
}
}catch (e85758){var ex__73178__auto__ = e85758;
var statearr_85759_86827 = state_85753;
(statearr_85759_86827[(2)] = ex__73178__auto__);


if(cljs.core.seq((state_85753[(4)]))){
var statearr_85761_86828 = state_85753;
(statearr_85761_86828[(1)] = cljs.core.first((state_85753[(4)])));

} else {
throw ex__73178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__86829 = state_85753;
state_85753 = G__86829;
continue;
} else {
return ret_value__73176__auto__;
}
break;
}
});
taoensso$sente$state_machine__73175__auto__ = function(state_85753){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__73175__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__73175__auto____1.call(this,state_85753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__73175__auto____0;
taoensso$sente$state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__73175__auto____1;
return taoensso$sente$state_machine__73175__auto__;
})()
})();
var state__73526__auto__ = (function (){var statearr_85764 = f__73525__auto__();
(statearr_85764[(6)] = c__73524__auto___86826);

return statearr_85764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__73526__auto__);
}));


var c__73524__auto___86830 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__73525__auto__ = (function (){var switch__73174__auto__ = (function (state_85772){
var state_val_85773 = (state_85772[(1)]);
if((state_val_85773 === (1))){
var state_85772__$1 = state_85772;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_85772__$1,(2),ajax_timeout_86825);
} else {
if((state_val_85773 === (2))){
var inst_85768 = (state_85772[(2)]);
var inst_85769 = flush_buffer_BANG__86732(new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_85772__$1 = (function (){var statearr_85777 = state_85772;
(statearr_85777[(7)] = inst_85768);

return statearr_85777;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_85772__$1,inst_85769);
} else {
return null;
}
}
});
return (function() {
var taoensso$sente$state_machine__73175__auto__ = null;
var taoensso$sente$state_machine__73175__auto____0 = (function (){
var statearr_85778 = [null,null,null,null,null,null,null,null];
(statearr_85778[(0)] = taoensso$sente$state_machine__73175__auto__);

(statearr_85778[(1)] = (1));

return statearr_85778;
});
var taoensso$sente$state_machine__73175__auto____1 = (function (state_85772){
while(true){
var ret_value__73176__auto__ = (function (){try{while(true){
var result__73177__auto__ = switch__73174__auto__(state_85772);
if(cljs.core.keyword_identical_QMARK_(result__73177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73177__auto__;
}
break;
}
}catch (e85780){var ex__73178__auto__ = e85780;
var statearr_85781_86831 = state_85772;
(statearr_85781_86831[(2)] = ex__73178__auto__);


if(cljs.core.seq((state_85772[(4)]))){
var statearr_85786_86832 = state_85772;
(statearr_85786_86832[(1)] = cljs.core.first((state_85772[(4)])));

} else {
throw ex__73178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__86833 = state_85772;
state_85772 = G__86833;
continue;
} else {
return ret_value__73176__auto__;
}
break;
}
});
taoensso$sente$state_machine__73175__auto__ = function(state_85772){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__73175__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__73175__auto____1.call(this,state_85772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__73175__auto____0;
taoensso$sente$state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__73175__auto____1;
return taoensso$sente$state_machine__73175__auto__;
})()
})();
var state__73526__auto__ = (function (){var statearr_85793 = f__73525__auto__();
(statearr_85793[(6)] = c__73524__auto___86830);

return statearr_85793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__73526__auto__);
}));

}
}

return null;
};
var G__86726 = function (user_id,ev,var_args){
var p__85643 = null;
if (arguments.length > 2) {
var G__86834__i = 0, G__86834__a = new Array(arguments.length -  2);
while (G__86834__i < G__86834__a.length) {G__86834__a[G__86834__i] = arguments[G__86834__i + 2]; ++G__86834__i;}
  p__85643 = new cljs.core.IndexedSeq(G__86834__a,0,null);
} 
return G__86726__delegate.call(this,user_id,ev,p__85643);};
G__86726.cljs$lang$maxFixedArity = 2;
G__86726.cljs$lang$applyTo = (function (arglist__86835){
var user_id = cljs.core.first(arglist__86835);
arglist__86835 = cljs.core.next(arglist__86835);
var ev = cljs.core.first(arglist__86835);
var p__85643 = cljs.core.rest(arglist__86835);
return G__86726__delegate(user_id,ev,p__85643);
});
G__86726.cljs$core$IFn$_invoke$arity$variadic = G__86726__delegate;
return G__86726;
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
var b2__28374__auto__ = (function (){var temp__5753__auto__ = _QMARK_unauthorized_fn;
if(cljs.core.truth_(temp__5753__auto__)){
var uf = temp__5753__auto__;
return (uf.cljs$core$IFn$_invoke$arity$1 ? uf.cljs$core$IFn$_invoke$arity$1(ring_req) : uf.call(null,ring_req));
} else {
return null;
}
})();
if((b2__28374__auto__ == null)){
return null;
} else {
var unauthorized_resp = b2__28374__auto__;
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
var b2__28356__auto__ = possible_rejection_resp(ring_req);
if(cljs.core.truth_(b2__28356__auto__)){
var resp = b2__28356__auto__;
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
var vec__85799 = taoensso.sente.unpack(packer__$1,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85799,(0),null);
var has_cb_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85799,(1),null);
var reply_fn = (function (){var replied_QMARK__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (resp_clj){
if(cljs.core.compare_and_set_BANG_(replied_QMARK__,false,true)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",642,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax post reply): %s",resp_clj], null);
}),null)),null,-426848232,null);

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
var c__73524__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__73525__auto__ = (function (){var switch__73174__auto__ = (function (state_85811){
var state_val_85812 = (state_85811[(1)]);
if((state_val_85812 === (1))){
var inst_85805 = cljs.core.async.timeout(ms);
var state_85811__$1 = state_85811;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_85811__$1,(2),inst_85805);
} else {
if((state_val_85812 === (2))){
var inst_85807 = (state_85811[(2)]);
var inst_85808 = reply_fn(new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_85811__$1 = (function (){var statearr_85814 = state_85811;
(statearr_85814[(7)] = inst_85807);

return statearr_85814;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_85811__$1,inst_85808);
} else {
return null;
}
}
});
return (function() {
var taoensso$sente$state_machine__73175__auto__ = null;
var taoensso$sente$state_machine__73175__auto____0 = (function (){
var statearr_85816 = [null,null,null,null,null,null,null,null];
(statearr_85816[(0)] = taoensso$sente$state_machine__73175__auto__);

(statearr_85816[(1)] = (1));

return statearr_85816;
});
var taoensso$sente$state_machine__73175__auto____1 = (function (state_85811){
while(true){
var ret_value__73176__auto__ = (function (){try{while(true){
var result__73177__auto__ = switch__73174__auto__(state_85811);
if(cljs.core.keyword_identical_QMARK_(result__73177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73177__auto__;
}
break;
}
}catch (e85817){var ex__73178__auto__ = e85817;
var statearr_85818_86836 = state_85811;
(statearr_85818_86836[(2)] = ex__73178__auto__);


if(cljs.core.seq((state_85811[(4)]))){
var statearr_85820_86837 = state_85811;
(statearr_85820_86837[(1)] = cljs.core.first((state_85811[(4)])));

} else {
throw ex__73178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__86838 = state_85811;
state_85811 = G__86838;
continue;
} else {
return ret_value__73176__auto__;
}
break;
}
});
taoensso$sente$state_machine__73175__auto__ = function(state_85811){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__73175__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__73175__auto____1.call(this,state_85811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__73175__auto____0;
taoensso$sente$state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__73175__auto____1;
return taoensso$sente$state_machine__73175__auto__;
})()
})();
var state__73526__auto__ = (function (){var statearr_85821 = f__73525__auto__();
(statearr_85821[(6)] = c__73524__auto__);

return statearr_85821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__73526__auto__);
}));

return c__73524__auto__;
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
}),null)),null,-1926838933,null);

var _QMARK_handshake_data = (handshake_data_fn.cljs$core$IFn$_invoke$arity$1 ? handshake_data_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : handshake_data_fn.call(null,ring_req));
var handshake_ev = (((_QMARK_handshake_data == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,null], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,null,_QMARK_handshake_data], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,handshake_ev));
});
if(clojure.string.blank_QMARK_(client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",699,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[err_msg,": %s"].join(''),ring_req], null);
}),null)),null,1775863626,null);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req], null));
} else {
var b2__28356__auto__ = possible_rejection_resp(ring_req);
if(cljs.core.truth_(b2__28356__auto__)){
var resp = b2__28356__auto__;
return resp;
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp(web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),(function (server_ch,websocket_QMARK_){
if(cljs.core.truth_(websocket_QMARK_)){
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",710,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,sch_uuid], null);
}),null)),null,1054834096,null);
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
var c__73524__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__73525__auto__ = (function (){var switch__73174__auto__ = (function (state_85874){
var state_val_85875 = (state_85874[(1)]);
if((state_val_85875 === (7))){
var inst_85867 = (state_85874[(2)]);
var state_85874__$1 = state_85874;
var statearr_85876_86839 = state_85874__$1;
(statearr_85876_86839[(2)] = inst_85867);

(statearr_85876_86839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85875 === (1))){
var inst_85835 = udt_open;
var inst_85836 = inst_85835;
var state_85874__$1 = (function (){var statearr_85877 = state_85874;
(statearr_85877[(7)] = inst_85836);

return statearr_85877;
})();
var statearr_85878_86840 = state_85874__$1;
(statearr_85878_86840[(2)] = null);

(statearr_85878_86840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85875 === (4))){
var inst_85845 = (state_85874[(8)]);
var inst_85840 = (state_85874[(2)]);
var inst_85841 = cljs.core.deref(conns_);
var inst_85842 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_85843 = [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id];
var inst_85844 = (new cljs.core.PersistentVector(null,3,(5),inst_85842,inst_85843,null));
var inst_85845__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_85841,inst_85844);
var state_85874__$1 = (function (){var statearr_85882 = state_85874;
(statearr_85882[(8)] = inst_85845__$1);

(statearr_85882[(9)] = inst_85840);

return statearr_85882;
})();
if(cljs.core.truth_(inst_85845__$1)){
var statearr_85883_86841 = state_85874__$1;
(statearr_85883_86841[(1)] = (5));

} else {
var statearr_85884_86842 = state_85874__$1;
(statearr_85884_86842[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85875 === (13))){
var inst_85851 = (state_85874[(10)]);
var inst_85860 = (state_85874[(2)]);
var inst_85836 = inst_85851;
var state_85874__$1 = (function (){var statearr_85885 = state_85874;
(statearr_85885[(11)] = inst_85860);

(statearr_85885[(7)] = inst_85836);

return statearr_85885;
})();
var statearr_85888_86843 = state_85874__$1;
(statearr_85888_86843[(2)] = null);

(statearr_85888_86843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85875 === (6))){
var state_85874__$1 = state_85874;
var statearr_85889_86844 = state_85874__$1;
(statearr_85889_86844[(2)] = null);

(statearr_85889_86844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85875 === (3))){
var inst_85870 = (state_85874[(2)]);
var state_85874__$1 = state_85874;
return cljs.core.async.impl.ioc_helpers.return_chan(state_85874__$1,inst_85870);
} else {
if((state_val_85875 === (12))){
var state_85874__$1 = state_85874;
var statearr_85890_86845 = state_85874__$1;
(statearr_85890_86845[(2)] = null);

(statearr_85890_86845[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85875 === (2))){
var inst_85838 = cljs.core.async.timeout(ms);
var state_85874__$1 = state_85874;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_85874__$1,(4),inst_85838);
} else {
if((state_val_85875 === (11))){
var inst_85856 = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304));
var inst_85857 = taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,inst_85856);
var state_85874__$1 = state_85874;
var statearr_85893_86846 = state_85874__$1;
(statearr_85893_86846[(2)] = inst_85857);

(statearr_85893_86846[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85875 === (9))){
var state_85874__$1 = state_85874;
var statearr_85894_86847 = state_85874__$1;
(statearr_85894_86847[(2)] = null);

(statearr_85894_86847[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85875 === (5))){
var inst_85845 = (state_85874[(8)]);
var inst_85850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_85845,(0),null);
var inst_85851 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_85845,(1),null);
var inst_85852 = taoensso.sente.interfaces.sch_open_QMARK_(server_ch);
var state_85874__$1 = (function (){var statearr_85895 = state_85874;
(statearr_85895[(12)] = inst_85850);

(statearr_85895[(10)] = inst_85851);

return statearr_85895;
})();
if(cljs.core.truth_(inst_85852)){
var statearr_85896_86848 = state_85874__$1;
(statearr_85896_86848[(1)] = (8));

} else {
var statearr_85898_86849 = state_85874__$1;
(statearr_85898_86849[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85875 === (10))){
var inst_85864 = (state_85874[(2)]);
var state_85874__$1 = state_85874;
var statearr_85900_86850 = state_85874__$1;
(statearr_85900_86850[(2)] = inst_85864);

(statearr_85900_86850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85875 === (8))){
var inst_85851 = (state_85874[(10)]);
var inst_85836 = (state_85874[(7)]);
var inst_85854 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_85851,inst_85836);
var state_85874__$1 = state_85874;
if(inst_85854){
var statearr_85901_86851 = state_85874__$1;
(statearr_85901_86851[(1)] = (11));

} else {
var statearr_85902_86852 = state_85874__$1;
(statearr_85902_86852[(1)] = (12));

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
var taoensso$sente$state_machine__73175__auto__ = null;
var taoensso$sente$state_machine__73175__auto____0 = (function (){
var statearr_85903 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_85903[(0)] = taoensso$sente$state_machine__73175__auto__);

(statearr_85903[(1)] = (1));

return statearr_85903;
});
var taoensso$sente$state_machine__73175__auto____1 = (function (state_85874){
while(true){
var ret_value__73176__auto__ = (function (){try{while(true){
var result__73177__auto__ = switch__73174__auto__(state_85874);
if(cljs.core.keyword_identical_QMARK_(result__73177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73177__auto__;
}
break;
}
}catch (e85906){var ex__73178__auto__ = e85906;
var statearr_85907_86853 = state_85874;
(statearr_85907_86853[(2)] = ex__73178__auto__);


if(cljs.core.seq((state_85874[(4)]))){
var statearr_85908_86854 = state_85874;
(statearr_85908_86854[(1)] = cljs.core.first((state_85874[(4)])));

} else {
throw ex__73178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__86855 = state_85874;
state_85874 = G__86855;
continue;
} else {
return ret_value__73176__auto__;
}
break;
}
});
taoensso$sente$state_machine__73175__auto__ = function(state_85874){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__73175__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__73175__auto____1.call(this,state_85874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__73175__auto____0;
taoensso$sente$state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__73175__auto____1;
return taoensso$sente$state_machine__73175__auto__;
})()
})();
var state__73526__auto__ = (function (){var statearr_85913 = f__73525__auto__();
(statearr_85913[(6)] = c__73524__auto__);

return statearr_85913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__73526__auto__);
}));

return c__73524__auto__;
} else {
return null;
}
} else {
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",739,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Ajax handshake/poll: %s (%s)",uid,sch_uuid], null);
}),null)),null,2045145274,null);
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
var c__73524__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__73525__auto__ = (function (){var switch__73174__auto__ = (function (state_85946){
var state_val_85947 = (state_85946[(1)]);
if((state_val_85947 === (1))){
var inst_85916 = cljs.core.async.timeout(ms);
var state_85946__$1 = state_85946;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_85946__$1,(2),inst_85916);
} else {
if((state_val_85947 === (2))){
var inst_85926 = (state_85946[(7)]);
var inst_85919 = (state_85946[(2)]);
var inst_85922 = cljs.core.deref(conns_);
var inst_85923 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_85924 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id];
var inst_85925 = (new cljs.core.PersistentVector(null,3,(5),inst_85923,inst_85924,null));
var inst_85926__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_85922,inst_85925);
var state_85946__$1 = (function (){var statearr_85950 = state_85946;
(statearr_85950[(7)] = inst_85926__$1);

(statearr_85950[(8)] = inst_85919);

return statearr_85950;
})();
if(cljs.core.truth_(inst_85926__$1)){
var statearr_85951_86856 = state_85946__$1;
(statearr_85951_86856[(1)] = (3));

} else {
var statearr_85952_86857 = state_85946__$1;
(statearr_85952_86857[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85947 === (3))){
var inst_85926 = (state_85946[(7)]);
var inst_85931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_85926,(0),null);
var inst_85932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_85926,(1),null);
var inst_85934 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_85932,udt_open);
var state_85946__$1 = (function (){var statearr_85955 = state_85946;
(statearr_85955[(9)] = inst_85931);

return statearr_85955;
})();
if(inst_85934){
var statearr_85956_86858 = state_85946__$1;
(statearr_85956_86858[(1)] = (6));

} else {
var statearr_85957_86859 = state_85946__$1;
(statearr_85957_86859[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85947 === (4))){
var state_85946__$1 = state_85946;
var statearr_85958_86860 = state_85946__$1;
(statearr_85958_86860[(2)] = null);

(statearr_85958_86860[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85947 === (5))){
var inst_85944 = (state_85946[(2)]);
var state_85946__$1 = state_85946;
return cljs.core.async.impl.ioc_helpers.return_chan(state_85946__$1,inst_85944);
} else {
if((state_val_85947 === (6))){
var inst_85937 = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var inst_85938 = taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,inst_85937);
var state_85946__$1 = state_85946;
var statearr_85960_86861 = state_85946__$1;
(statearr_85960_86861[(2)] = inst_85938);

(statearr_85960_86861[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85947 === (7))){
var state_85946__$1 = state_85946;
var statearr_85961_86862 = state_85946__$1;
(statearr_85961_86862[(2)] = null);

(statearr_85961_86862[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85947 === (8))){
var inst_85941 = (state_85946[(2)]);
var state_85946__$1 = state_85946;
var statearr_85963_86863 = state_85946__$1;
(statearr_85963_86863[(2)] = inst_85941);

(statearr_85963_86863[(1)] = (5));


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
var taoensso$sente$state_machine__73175__auto__ = null;
var taoensso$sente$state_machine__73175__auto____0 = (function (){
var statearr_85964 = [null,null,null,null,null,null,null,null,null,null];
(statearr_85964[(0)] = taoensso$sente$state_machine__73175__auto__);

(statearr_85964[(1)] = (1));

return statearr_85964;
});
var taoensso$sente$state_machine__73175__auto____1 = (function (state_85946){
while(true){
var ret_value__73176__auto__ = (function (){try{while(true){
var result__73177__auto__ = switch__73174__auto__(state_85946);
if(cljs.core.keyword_identical_QMARK_(result__73177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73177__auto__;
}
break;
}
}catch (e85973){var ex__73178__auto__ = e85973;
var statearr_85974_86864 = state_85946;
(statearr_85974_86864[(2)] = ex__73178__auto__);


if(cljs.core.seq((state_85946[(4)]))){
var statearr_85975_86865 = state_85946;
(statearr_85975_86865[(1)] = cljs.core.first((state_85946[(4)])));

} else {
throw ex__73178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__86866 = state_85946;
state_85946 = G__86866;
continue;
} else {
return ret_value__73176__auto__;
}
break;
}
});
taoensso$sente$state_machine__73175__auto__ = function(state_85946){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__73175__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__73175__auto____1.call(this,state_85946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__73175__auto____0;
taoensso$sente$state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__73175__auto____1;
return taoensso$sente$state_machine__73175__auto__;
})()
})();
var state__73526__auto__ = (function (){var statearr_85977 = f__73525__auto__();
(statearr_85977[(6)] = c__73524__auto__);

return statearr_85977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__73526__auto__);
}));

return c__73524__auto__;
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

var vec__85978 = taoensso.sente.unpack(packer__$1,req_ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85978,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85978,(1),null);
return receive_event_msg_BANG_(clj,(cljs.core.truth_(_QMARK_cb_uuid)?(function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",769,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
}),null)),null,-753203,null);

return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(packer__$1,resp_clj,_QMARK_cb_uuid));
}):null));
}),new cljs.core.Keyword(null,"on-close","on-close",-761178394),(function (server_ch,websocket_QMARK_,_status){
var conn_type = (cljs.core.truth_(websocket_QMARK_)?new cljs.core.Keyword(null,"ws","ws",86841443):new cljs.core.Keyword(null,"ajax","ajax",814345549));
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",778,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s channel closed: %s (%s)",(cljs.core.truth_(websocket_QMARK_)?"WebSocket":"Ajax"),uid,sch_uuid], null);
}),null)),null,-1225950262,null);
var updated_conn = upd_conn_BANG_(conn_type,uid,client_id,null);
var udt_close = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var c__73524__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__73525__auto__ = (function (){var switch__73174__auto__ = (function (state_86042){
var state_val_86043 = (state_86042[(1)]);
if((state_val_86043 === (7))){
var state_86042__$1 = state_86042;
var statearr_86045_86867 = state_86042__$1;
(statearr_86045_86867[(2)] = null);

(statearr_86045_86867[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86043 === (1))){
var inst_85987 = cljs.core.async.timeout((5000));
var state_86042__$1 = state_86042;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_86042__$1,(2),inst_85987);
} else {
if((state_val_86043 === (4))){
var state_86042__$1 = state_86042;
var statearr_86050_86868 = state_86042__$1;
(statearr_86050_86868[(2)] = null);

(statearr_86050_86868[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86043 === (13))){
var state_86042__$1 = state_86042;
var statearr_86051_86869 = state_86042__$1;
(statearr_86051_86869[(2)] = null);

(statearr_86051_86869[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86043 === (6))){
var inst_86017 = (state_86042[(7)]);
var inst_85997 = (state_86042[(8)]);
var inst_85998 = (state_86042[(9)]);
var inst_85999 = (state_86042[(10)]);
var inst_86010 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_86011 = [conn_type,uid,client_id];
var inst_86012 = (new cljs.core.PersistentVector(null,3,(5),inst_86010,inst_86011,null));
var inst_86016 = (function (){var vec__85990 = inst_85997;
var __QMARK_sch = inst_85998;
var udt_t1 = inst_85999;
return (function (p__86015){
var vec__86054 = p__86015;
var _sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86054,(0),null);
var udt_t1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86054,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(udt_t1__$1,udt_close)){
return taoensso.encore.swapped(new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),true);
} else {
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_sch,udt_t1__$1], null),false);
}
});
})();
var inst_86017__$1 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_86012,inst_86016);
var state_86042__$1 = (function (){var statearr_86057 = state_86042;
(statearr_86057[(7)] = inst_86017__$1);

return statearr_86057;
})();
if(cljs.core.truth_(inst_86017__$1)){
var statearr_86060_86870 = state_86042__$1;
(statearr_86060_86870[(1)] = (9));

} else {
var statearr_86061_86871 = state_86042__$1;
(statearr_86061_86871[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86043 === (3))){
var inst_85997 = (state_86042[(8)]);
var inst_85998 = (state_86042[(9)]);
var inst_85999 = (state_86042[(10)]);
var inst_86002 = (function (){var vec__85990 = inst_85997;
var __QMARK_sch = inst_85998;
var udt_t1 = inst_85999;
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["close-timeout: %s %s %s %s",conn_type,uid,sch_uuid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(udt_t1,udt_close),udt_t1,udt_close], null)], null);
});
})();
var inst_86003 = (new cljs.core.Delay(inst_86002,null));
var inst_86004 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",792,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_86003,null,-1124829572,null);
var state_86042__$1 = state_86042;
var statearr_86064_86872 = state_86042__$1;
(statearr_86064_86872[(2)] = inst_86004);

(statearr_86064_86872[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86043 === (12))){
var inst_86028 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_86029 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678),uid];
var inst_86030 = (new cljs.core.PersistentVector(null,2,(5),inst_86028,inst_86029,null));
var inst_86031 = receive_event_msg_BANG_(inst_86030);
var state_86042__$1 = state_86042;
var statearr_86066_86873 = state_86042__$1;
(statearr_86066_86873[(2)] = inst_86031);

(statearr_86066_86873[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86043 === (2))){
var inst_85997 = (state_86042[(8)]);
var inst_85989 = (state_86042[(2)]);
var inst_85993 = cljs.core.deref(conns_);
var inst_85994 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_85995 = [conn_type,uid,client_id];
var inst_85996 = (new cljs.core.PersistentVector(null,3,(5),inst_85994,inst_85995,null));
var inst_85997__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_85993,inst_85996);
var inst_85998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_85997__$1,(0),null);
var inst_85999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_85997__$1,(1),null);
var inst_86000 = cljs.core.deref(taoensso.sente.debug_mode_QMARK__);
var state_86042__$1 = (function (){var statearr_86068 = state_86042;
(statearr_86068[(8)] = inst_85997__$1);

(statearr_86068[(11)] = inst_85989);

(statearr_86068[(9)] = inst_85998);

(statearr_86068[(10)] = inst_85999);

return statearr_86068;
})();
if(cljs.core.truth_(inst_86000)){
var statearr_86069_86874 = state_86042__$1;
(statearr_86069_86874[(1)] = (3));

} else {
var statearr_86070_86875 = state_86042__$1;
(statearr_86070_86875[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86043 === (11))){
var inst_86037 = (state_86042[(2)]);
var state_86042__$1 = state_86042;
var statearr_86073_86876 = state_86042__$1;
(statearr_86073_86876[(2)] = inst_86037);

(statearr_86073_86876[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86043 === (9))){
var inst_86017 = (state_86042[(7)]);
var inst_85997 = (state_86042[(8)]);
var inst_85998 = (state_86042[(9)]);
var inst_85999 = (state_86042[(10)]);
var inst_86021 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_86022 = [conn_type,uid];
var inst_86023 = (new cljs.core.PersistentVector(null,2,(5),inst_86021,inst_86022,null));
var inst_86024 = (function (){var vec__85990 = inst_85997;
var __QMARK_sch = inst_85998;
var udt_t1 = inst_85999;
var disconnect_QMARK_ = inst_86017;
return (function (_QMARK_m){
if(cljs.core.empty_QMARK_(_QMARK_m)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return _QMARK_m;
}
});
})();
var inst_86025 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_86023,inst_86024);
var inst_86026 = upd_connected_uid_BANG_(uid);
var state_86042__$1 = (function (){var statearr_86078 = state_86042;
(statearr_86078[(12)] = inst_86025);

return statearr_86078;
})();
if(cljs.core.truth_(inst_86026)){
var statearr_86079_86877 = state_86042__$1;
(statearr_86079_86877[(1)] = (12));

} else {
var statearr_86080_86878 = state_86042__$1;
(statearr_86080_86878[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86043 === (5))){
var inst_85999 = (state_86042[(10)]);
var inst_86007 = (state_86042[(2)]);
var inst_86008 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_85999,udt_close);
var state_86042__$1 = (function (){var statearr_86083 = state_86042;
(statearr_86083[(13)] = inst_86007);

return statearr_86083;
})();
if(inst_86008){
var statearr_86086_86879 = state_86042__$1;
(statearr_86086_86879[(1)] = (6));

} else {
var statearr_86087_86880 = state_86042__$1;
(statearr_86087_86880[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86043 === (14))){
var inst_86034 = (state_86042[(2)]);
var state_86042__$1 = state_86042;
var statearr_86090_86881 = state_86042__$1;
(statearr_86090_86881[(2)] = inst_86034);

(statearr_86090_86881[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86043 === (10))){
var state_86042__$1 = state_86042;
var statearr_86091_86882 = state_86042__$1;
(statearr_86091_86882[(2)] = null);

(statearr_86091_86882[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86043 === (8))){
var inst_86040 = (state_86042[(2)]);
var state_86042__$1 = state_86042;
return cljs.core.async.impl.ioc_helpers.return_chan(state_86042__$1,inst_86040);
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
var taoensso$sente$state_machine__73175__auto__ = null;
var taoensso$sente$state_machine__73175__auto____0 = (function (){
var statearr_86097 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_86097[(0)] = taoensso$sente$state_machine__73175__auto__);

(statearr_86097[(1)] = (1));

return statearr_86097;
});
var taoensso$sente$state_machine__73175__auto____1 = (function (state_86042){
while(true){
var ret_value__73176__auto__ = (function (){try{while(true){
var result__73177__auto__ = switch__73174__auto__(state_86042);
if(cljs.core.keyword_identical_QMARK_(result__73177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73177__auto__;
}
break;
}
}catch (e86100){var ex__73178__auto__ = e86100;
var statearr_86104_86883 = state_86042;
(statearr_86104_86883[(2)] = ex__73178__auto__);


if(cljs.core.seq((state_86042[(4)]))){
var statearr_86106_86884 = state_86042;
(statearr_86106_86884[(1)] = cljs.core.first((state_86042[(4)])));

} else {
throw ex__73178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__86885 = state_86042;
state_86042 = G__86885;
continue;
} else {
return ret_value__73176__auto__;
}
break;
}
});
taoensso$sente$state_machine__73175__auto__ = function(state_86042){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__73175__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__73175__auto____1.call(this,state_86042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__73175__auto____0;
taoensso$sente$state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__73175__auto____1;
return taoensso$sente$state_machine__73175__auto__;
})()
})();
var state__73526__auto__ = (function (){var statearr_86110 = f__73525__auto__();
(statearr_86110[(6)] = c__73524__auto__);

return statearr_86110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__73526__auto__);
}));

return c__73524__auto__;
}),new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (server_ch,websocket_QMARK_,error){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",814,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ring-req->server-ch-resp error: %s (%s)",error,uid,sch_uuid], null);
}),null)),null,947818424,null);
})], null));
}
}
})], null);
}));

(taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq85580){
var G__85581 = cljs.core.first(seq85580);
var seq85580__$1 = cljs.core.next(seq85580);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__85581,seq85580__$1);
}));

/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr,upd_conn_BANG_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",820,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null,1143361403,null);

var seq__86119 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null)));
var chunk__86120 = null;
var count__86121 = (0);
var i__86122 = (0);
while(true){
if((i__86122 < count__86121)){
var vec__86141 = chunk__86120.cljs$core$IIndexed$_nth$arity$2(null,i__86122);
var client_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86141,(0),null);
var vec__86144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86141,(1),null);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86144,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86144,(1),null);
var temp__5753__auto___86886 = _QMARK_sch;
if(cljs.core.truth_(temp__5753__auto___86886)){
var sch_86887 = temp__5753__auto___86886;
(upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3 ? upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id) : upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id));

taoensso.sente.interfaces.sch_send_BANG_(sch_86887,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}


var G__86888 = seq__86119;
var G__86889 = chunk__86120;
var G__86890 = count__86121;
var G__86891 = (i__86122 + (1));
seq__86119 = G__86888;
chunk__86120 = G__86889;
count__86121 = G__86890;
i__86122 = G__86891;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__86119);
if(temp__5753__auto__){
var seq__86119__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__86119__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__86119__$1);
var G__86892 = cljs.core.chunk_rest(seq__86119__$1);
var G__86893 = c__4556__auto__;
var G__86894 = cljs.core.count(c__4556__auto__);
var G__86895 = (0);
seq__86119 = G__86892;
chunk__86120 = G__86893;
count__86121 = G__86894;
i__86122 = G__86895;
continue;
} else {
var vec__86148 = cljs.core.first(seq__86119__$1);
var client_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86148,(0),null);
var vec__86151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86148,(1),null);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86151,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86151,(1),null);
var temp__5753__auto___86896__$1 = _QMARK_sch;
if(cljs.core.truth_(temp__5753__auto___86896__$1)){
var sch_86897 = temp__5753__auto___86896__$1;
(upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3 ? upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id) : upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id));

taoensso.sente.interfaces.sch_send_BANG_(sch_86897,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}


var G__86898 = cljs.core.next(seq__86119__$1);
var G__86899 = null;
var G__86900 = (0);
var G__86901 = (0);
seq__86119 = G__86898;
chunk__86120 = G__86899;
count__86121 = G__86900;
i__86122 = G__86901;
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
}),null)),null,-262375534,null);

var ms_backoffs = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(90),(180),(360),(720),(1440)], null);
var client_ids_unsatisfied = cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid], null)));
if(cljs.core.empty_QMARK_(client_ids_unsatisfied)){
return null;
} else {
var c__73524__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__73525__auto__ = (function (){var switch__73174__auto__ = (function (state_86207){
var state_val_86208 = (state_86207[(1)]);
if((state_val_86208 === (7))){
var inst_86161 = (state_86207[(7)]);
var inst_86167 = (state_86207[(8)]);
var inst_86160 = (state_86207[(9)]);
var inst_86177 = (function (){var n = inst_86160;
var client_ids_satisfied = inst_86161;
var _QMARK_pulled = inst_86167;
return (function (s,client_id,p__86176){
var vec__86211 = p__86176;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86211,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86211,(1),null);
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
var inst_86178 = cljs.core.PersistentHashSet.EMPTY;
var inst_86179 = cljs.core.reduce_kv(inst_86177,inst_86178,inst_86167);
var state_86207__$1 = state_86207;
var statearr_86214_86902 = state_86207__$1;
(statearr_86214_86902[(2)] = inst_86179);

(statearr_86214_86902[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86208 === (1))){
var inst_86159 = cljs.core.PersistentHashSet.EMPTY;
var inst_86160 = (0);
var inst_86161 = inst_86159;
var state_86207__$1 = (function (){var statearr_86215 = state_86207;
(statearr_86215[(7)] = inst_86161);

(statearr_86215[(9)] = inst_86160);

return statearr_86215;
})();
var statearr_86216_86903 = state_86207__$1;
(statearr_86216_86903[(2)] = null);

(statearr_86216_86903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86208 === (4))){
var state_86207__$1 = state_86207;
var statearr_86217_86904 = state_86207__$1;
(statearr_86217_86904[(2)] = true);

(statearr_86217_86904[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86208 === (15))){
var inst_86200 = (state_86207[(2)]);
var state_86207__$1 = state_86207;
var statearr_86219_86905 = state_86207__$1;
(statearr_86219_86905[(2)] = inst_86200);

(statearr_86219_86905[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86208 === (13))){
var inst_86184 = (state_86207[(10)]);
var inst_86190 = cljs.core.rand_int(inst_86184);
var inst_86191 = (inst_86184 + inst_86190);
var inst_86192 = cljs.core.async.timeout(inst_86191);
var state_86207__$1 = state_86207;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_86207__$1,(16),inst_86192);
} else {
if((state_val_86208 === (6))){
var inst_86167 = (state_86207[(8)]);
var inst_86174 = (state_86207[(2)]);
var state_86207__$1 = (function (){var statearr_86221 = state_86207;
(statearr_86221[(11)] = inst_86174);

return statearr_86221;
})();
if(cljs.core.truth_(inst_86167)){
var statearr_86222_86906 = state_86207__$1;
(statearr_86222_86906[(1)] = (7));

} else {
var statearr_86223_86907 = state_86207__$1;
(statearr_86223_86907[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86208 === (3))){
var inst_86205 = (state_86207[(2)]);
var state_86207__$1 = state_86207;
return cljs.core.async.impl.ioc_helpers.return_chan(state_86207__$1,inst_86205);
} else {
if((state_val_86208 === (12))){
var inst_86203 = (state_86207[(2)]);
var state_86207__$1 = state_86207;
var statearr_86225_86908 = state_86207__$1;
(statearr_86225_86908[(2)] = inst_86203);

(statearr_86225_86908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86208 === (2))){
var inst_86161 = (state_86207[(7)]);
var inst_86167 = (state_86207[(8)]);
var inst_86160 = (state_86207[(9)]);
var inst_86163 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_86164 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_86165 = (new cljs.core.PersistentVector(null,2,(5),inst_86163,inst_86164,null));
var inst_86166 = (function (){var n = inst_86160;
var client_ids_satisfied = inst_86161;
return (function (m){
var ks_to_pull = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(client_ids_satisfied,cljs.core.keys(m));
if(cljs.core.empty_QMARK_(ks_to_pull)){
return taoensso.encore.swapped(m,null);
} else {
return taoensso.encore.swapped(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,k){
var vec__86226 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86226,(0),null);
var udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86226,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt], null));
}),m,ks_to_pull),cljs.core.select_keys(m,ks_to_pull));
}
});
})();
var inst_86167__$1 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_86165,inst_86166);
var inst_86168 = (function (){var n = inst_86160;
var client_ids_satisfied = inst_86161;
var _QMARK_pulled = inst_86167__$1;
return (function (x){
var or__4126__auto__ = (x == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return taoensso.truss.impl.non_throwing(cljs.core.map_QMARK_)(x);
}
});
})();
var inst_86169 = inst_86168(inst_86167__$1);
var state_86207__$1 = (function (){var statearr_86229 = state_86207;
(statearr_86229[(8)] = inst_86167__$1);

return statearr_86229;
})();
if(cljs.core.truth_(inst_86169)){
var statearr_86230_86909 = state_86207__$1;
(statearr_86230_86909[(1)] = (4));

} else {
var statearr_86231_86910 = state_86207__$1;
(statearr_86231_86910[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86208 === (11))){
var state_86207__$1 = state_86207;
var statearr_86232_86911 = state_86207__$1;
(statearr_86232_86911[(2)] = null);

(statearr_86232_86911[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86208 === (9))){
var inst_86161 = (state_86207[(7)]);
var inst_86184 = (state_86207[(10)]);
var inst_86160 = (state_86207[(9)]);
var inst_86182 = (state_86207[(2)]);
var inst_86183 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_86161,inst_86182);
var inst_86184__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ms_backoffs,inst_86160);
var state_86207__$1 = (function (){var statearr_86234 = state_86207;
(statearr_86234[(10)] = inst_86184__$1);

(statearr_86234[(12)] = inst_86183);

return statearr_86234;
})();
if(cljs.core.truth_(inst_86184__$1)){
var statearr_86236_86912 = state_86207__$1;
(statearr_86236_86912[(1)] = (10));

} else {
var statearr_86237_86913 = state_86207__$1;
(statearr_86237_86913[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86208 === (5))){
var inst_86167 = (state_86207[(8)]);
var inst_86172 = taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",857,"([:or nil? map?] ?pulled)",inst_86167,null,null);
var state_86207__$1 = state_86207;
var statearr_86238_86914 = state_86207__$1;
(statearr_86238_86914[(2)] = inst_86172);

(statearr_86238_86914[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86208 === (14))){
var state_86207__$1 = state_86207;
var statearr_86240_86915 = state_86207__$1;
(statearr_86240_86915[(2)] = null);

(statearr_86240_86915[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86208 === (16))){
var inst_86183 = (state_86207[(12)]);
var inst_86160 = (state_86207[(9)]);
var inst_86194 = (state_86207[(2)]);
var inst_86196 = (inst_86160 + (1));
var inst_86160__$1 = inst_86196;
var inst_86161 = inst_86183;
var state_86207__$1 = (function (){var statearr_86241 = state_86207;
(statearr_86241[(7)] = inst_86161);

(statearr_86241[(13)] = inst_86194);

(statearr_86241[(9)] = inst_86160__$1);

return statearr_86241;
})();
var statearr_86242_86916 = state_86207__$1;
(statearr_86242_86916[(2)] = null);

(statearr_86242_86916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86208 === (10))){
var inst_86183 = (state_86207[(12)]);
var inst_86186 = cljs.core.complement(inst_86183);
var inst_86187 = taoensso.encore.rsome(inst_86186,client_ids_unsatisfied);
var state_86207__$1 = state_86207;
if(cljs.core.truth_(inst_86187)){
var statearr_86243_86917 = state_86207__$1;
(statearr_86243_86917[(1)] = (13));

} else {
var statearr_86244_86918 = state_86207__$1;
(statearr_86244_86918[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86208 === (8))){
var state_86207__$1 = state_86207;
var statearr_86245_86919 = state_86207__$1;
(statearr_86245_86919[(2)] = null);

(statearr_86245_86919[(1)] = (9));


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
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__73175__auto__ = null;
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__73175__auto____0 = (function (){
var statearr_86248 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_86248[(0)] = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__73175__auto__);

(statearr_86248[(1)] = (1));

return statearr_86248;
});
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__73175__auto____1 = (function (state_86207){
while(true){
var ret_value__73176__auto__ = (function (){try{while(true){
var result__73177__auto__ = switch__73174__auto__(state_86207);
if(cljs.core.keyword_identical_QMARK_(result__73177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73177__auto__;
}
break;
}
}catch (e86249){var ex__73178__auto__ = e86249;
var statearr_86250_86920 = state_86207;
(statearr_86250_86920[(2)] = ex__73178__auto__);


if(cljs.core.seq((state_86207[(4)]))){
var statearr_86251_86921 = state_86207;
(statearr_86251_86921[(1)] = cljs.core.first((state_86207[(4)])));

} else {
throw ex__73178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__86922 = state_86207;
state_86207 = G__86922;
continue;
} else {
return ret_value__73176__auto__;
}
break;
}
});
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__73175__auto__ = function(state_86207){
switch(arguments.length){
case 0:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__73175__auto____0.call(this);
case 1:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__73175__auto____1.call(this,state_86207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__73175__auto____0;
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__73175__auto____1;
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__73175__auto__;
})()
})();
var state__73526__auto__ = (function (){var statearr_86252 = f__73525__auto__();
(statearr_86252[(6)] = c__73524__auto__);

return statearr_86252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__73526__auto__);
}));

return c__73524__auto__;
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

var taoensso$sente$IChSocket$_chsk_connect_BANG_$dyn_86923 = (function (chsk){
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
return taoensso$sente$IChSocket$_chsk_connect_BANG_$dyn_86923(chsk);
}
});

var taoensso$sente$IChSocket$_chsk_disconnect_BANG_$dyn_86924 = (function (chsk,reason){
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
return taoensso$sente$IChSocket$_chsk_disconnect_BANG_$dyn_86924(chsk,reason);
}
});

var taoensso$sente$IChSocket$_chsk_reconnect_BANG_$dyn_86925 = (function (chsk){
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
return taoensso$sente$IChSocket$_chsk_reconnect_BANG_$dyn_86925(chsk);
}
});

var taoensso$sente$IChSocket$_chsk_send_BANG_$dyn_86926 = (function (chsk,ev,opts){
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
return taoensso$sente$IChSocket$_chsk_send_BANG_$dyn_86926(chsk,ev,opts);
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
var G__86275 = arguments.length;
switch (G__86275) {
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
}),null)),null,400466465,null);

return taoensso.sente._chsk_send_BANG_(chsk,ev,opts);
}));

(taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4);

taoensso.sente.chsk_send__GT_closed_BANG_ = (function taoensso$sente$chsk_send__GT_closed_BANG_(_QMARK_cb_fn){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",908,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
}),null)),null,1994045878,null);

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
var vec__86278 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),(function (old_state){
var new_state = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old_state) : f.call(null,old_state));
var new_state__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(old_state))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),false):new_state);
var new_state__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state__$1))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new_state__$1,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)):new_state__$1);
return taoensso.encore.swapped(new_state__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$2], null));
}));
var old_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86278,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86278,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_state,new_state)){
var output = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(chsk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"state","state",-1988618099)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),output], null));

return output;
} else {
return null;
}
});
taoensso.sente.chsk_state__GT_closed = (function taoensso$sente$chsk_state__GT_closed(state,reason){
var e_86928 = (function (){try{if(cljs.core.map_QMARK_(state)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e86283){if((e86283 instanceof Error)){
var e_86928 = e86283;
return e_86928;
} else {
throw e86283;

}
}})();
if((e_86928 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",951,"(map? state)",state,e_86928,null);
}

var e_86929 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_((function (){var G__86286 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641),null,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720),null,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707),null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__86286) : taoensso.truss.impl.set_STAR_.call(null,G__86286));
})(),x);
})(reason)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e86284){if((e86284 instanceof Error)){
var e_86929 = e86284;
return e_86929;
} else {
throw e86284;

}
}})();
if((e_86929 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",952,"([:el #{:requested-disconnect :downgrading-ws-to-ajax :unexpected :requested-reconnect}] reason)",reason,e_86929,null);
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
var e_86930 = (function (){try{if(taoensso.encore.chan_QMARK_(_QMARK_cb)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e86289){if((e86289 instanceof Error)){
var e_86930 = e86289;
return e_86930;
} else {
throw e86289;

}
}})();
if((e_86930 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",972,"(enc/chan? ?cb)",_QMARK_cb,e_86930,null);
}

taoensso.sente.assert_event(ev);

var vec__86291 = ev;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86291,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86291,(1),null);
var cb_ch = _QMARK_cb;
return (function (reply){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([taoensso.encore.as_qname(ev_id),".cb"].join('')),reply], null));
});
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",982,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null,-244989625,null);

var buffered_evs = ((cljs.core.vector_QMARK_(clj))?clj:taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",983,"(vector? clj)",clj,null,null));
var seq__86295 = cljs.core.seq(buffered_evs);
var chunk__86296 = null;
var count__86297 = (0);
var i__86298 = (0);
while(true){
if((i__86298 < count__86297)){
var ev = chunk__86296.cljs$core$IIndexed$_nth$arity$2(null,i__86298);
taoensso.sente.assert_event(ev);

var vec__86307_86931 = ev;
var id_86932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86307_86931,(0),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(id_86932),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);


var G__86933 = seq__86295;
var G__86934 = chunk__86296;
var G__86935 = count__86297;
var G__86936 = (i__86298 + (1));
seq__86295 = G__86933;
chunk__86296 = G__86934;
count__86297 = G__86935;
i__86298 = G__86936;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__86295);
if(temp__5753__auto__){
var seq__86295__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__86295__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__86295__$1);
var G__86937 = cljs.core.chunk_rest(seq__86295__$1);
var G__86938 = c__4556__auto__;
var G__86939 = cljs.core.count(c__4556__auto__);
var G__86940 = (0);
seq__86295 = G__86937;
chunk__86296 = G__86938;
count__86297 = G__86939;
i__86298 = G__86940;
continue;
} else {
var ev = cljs.core.first(seq__86295__$1);
taoensso.sente.assert_event(ev);

var vec__86310_86941 = ev;
var id_86942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86310_86941,(0),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(id_86942),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);


var G__86943 = cljs.core.next(seq__86295__$1);
var G__86944 = null;
var G__86945 = (0);
var G__86946 = (0);
seq__86295 = G__86943;
chunk__86296 = G__86944;
count__86297 = G__86945;
i__86298 = G__86946;
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
var vec__86316 = x;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86316,(0),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x1,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686));
} else {
return false;
}
});
taoensso.sente.receive_handshake_BANG_ = (function taoensso$sente$receive_handshake_BANG_(chsk_type,chsk,clj){
var e_86947 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_((function (){var G__86321 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__86321) : taoensso.truss.impl.set_STAR_.call(null,G__86321));
})(),x);
})(chsk_type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e86320){if((e86320 instanceof Error)){
var e_86947 = e86320;
return e_86947;
} else {
throw e86320;

}
}})();
if((e_86947 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",995,"([:el #{:ws :ajax}] chsk-type)",chsk_type,e_86947,null);
}

var e_86948 = (function (){try{if(taoensso.sente.handshake_QMARK_(clj)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e86322){if((e86322 instanceof Error)){
var e_86948 = e86322;
return e_86948;
} else {
throw e86322;

}
}})();
if((e_86948 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",996,"(handshake? clj)",clj,e_86948,null);
}

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",997,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-handshake! (%s): %s",chsk_type,clj], null);
}),null)),null,-142242004,null);

var vec__86323 = clj;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86323,(0),null);
var vec__86326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86323,(1),null);
var _QMARK_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86326,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86326,(1),null);
var _QMARK_handshake_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86326,(2),null);
var map__86329 = chsk;
var map__86329__$1 = (((((!((map__86329 == null))))?(((((map__86329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86329):map__86329);
var chs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86329__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var ever_opened_QMARK__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86329__$1,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913));
var first_handshake_QMARK_ = cljs.core.compare_and_set_BANG_(ever_opened_QMARK__,false,true);
var new_state = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),chsk_type,new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"handshake-data","handshake-data",-278378864),_QMARK_handshake_data,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),first_handshake_QMARK_], null);
var handshake_ev = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_uid,null,_QMARK_handshake_data,first_handshake_QMARK_], null)], null);
taoensso.sente.assert_event(handshake_ev);

taoensso.sente.swap_chsk_state_BANG_(chsk,(function (p1__86319_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__86319_SHARP_,new_state], 0));
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
try{var G__86332 = make_package_name("web");
return (require_fn.cljs$core$IFn$_invoke$arity$1 ? require_fn.cljs$core$IFn$_invoke$arity$1(G__86332) : require_fn.call(null,G__86332));
}catch (e86331){var e = e86331;
return null;
}} else {
return null;
}
}),null));
})();
taoensso.sente.create_js_client_websocket_BANG_ = (function taoensso$sente$create_js_client_websocket_BANG_(p__86333){
var map__86334 = p__86333;
var map__86334__$1 = (((((!((map__86334 == null))))?(((((map__86334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86334):map__86334);
var opts = map__86334__$1;
var onerror_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86334__$1,new cljs.core.Keyword(null,"onerror-fn","onerror-fn",1069372505));
var onmessage_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86334__$1,new cljs.core.Keyword(null,"onmessage-fn","onmessage-fn",1633804172));
var onclose_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86334__$1,new cljs.core.Keyword(null,"onclose-fn","onclose-fn",-1388163785));
var uri_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86334__$1,new cljs.core.Keyword(null,"uri-str","uri-str",304128675));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86334__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
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
var G__86336_86949 = socket;
(G__86336_86949["onerror"] = onerror_fn);

(G__86336_86949["onmessage"] = onmessage_fn);

(G__86336_86949["onclose"] = onclose_fn);


return socket;
} else {
return null;
}
});
taoensso.sente.create_websocket_BANG_ = (function taoensso$sente$create_websocket_BANG_(p__86337){
var map__86338 = p__86337;
var map__86338__$1 = (((((!((map__86338 == null))))?(((((map__86338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86338):map__86338);
var opts = map__86338__$1;
var onerror_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86338__$1,new cljs.core.Keyword(null,"onerror-fn","onerror-fn",1069372505));
var onmessage_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86338__$1,new cljs.core.Keyword(null,"onmessage-fn","onmessage-fn",1633804172));
var onclose_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86338__$1,new cljs.core.Keyword(null,"onclose-fn","onclose-fn",-1388163785));
var uri_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86338__$1,new cljs.core.Keyword(null,"uri-str","uri-str",304128675));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86338__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
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

(taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k86347,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__86351 = k86347;
var G__86351__$1 = (((G__86351 instanceof cljs.core.Keyword))?G__86351.fqn:null);
switch (G__86351__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k86347,else__4383__auto__);

}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__86359){
var vec__86360 = p__86359;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86360,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86360,(1),null);
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

(taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__86346){
var self__ = this;
var G__86346__$1 = this;
return (new cljs.core.RecordIter((0),G__86346__$1,15,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this86348,other86349){
var self__ = this;
var this86348__$1 = this;
return (((!((other86349 == null)))) && ((this86348__$1.constructor === other86349.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this86348__$1.client_id,other86349.client_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this86348__$1.chs,other86349.chs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this86348__$1.params,other86349.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this86348__$1.headers,other86349.headers)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this86348__$1.packer,other86349.packer)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this86348__$1.url,other86349.url)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this86348__$1.ws_kalive_ms,other86349.ws_kalive_ms)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this86348__$1.state_,other86349.state_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this86348__$1.instance_handle_,other86349.instance_handle_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this86348__$1.retry_count_,other86349.retry_count_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this86348__$1.ever_opened_QMARK__,other86349.ever_opened_QMARK__)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this86348__$1.backoff_ms_fn,other86349.backoff_ms_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this86348__$1.cbs_waiting_,other86349.cbs_waiting_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this86348__$1.socket_,other86349.socket_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this86348__$1.udt_last_comms_,other86349.udt_last_comms_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this86348__$1.__extmap,other86349.__extmap)));
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

(taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__86346){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__86373 = cljs.core.keyword_identical_QMARK_;
var expr__86374 = k__4388__auto__;
if(cljs.core.truth_((pred__86373.cljs$core$IFn$_invoke$arity$2 ? pred__86373.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__86374) : pred__86373.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__86374)))){
return (new taoensso.sente.ChWebSocket(G__86346,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__86373.cljs$core$IFn$_invoke$arity$2 ? pred__86373.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"chs","chs",376886120),expr__86374) : pred__86373.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__86374)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__86346,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__86373.cljs$core$IFn$_invoke$arity$2 ? pred__86373.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__86374) : pred__86373.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__86374)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__86346,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__86373.cljs$core$IFn$_invoke$arity$2 ? pred__86373.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"headers","headers",-835030129),expr__86374) : pred__86373.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129),expr__86374)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__86346,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__86373.cljs$core$IFn$_invoke$arity$2 ? pred__86373.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"packer","packer",66077544),expr__86374) : pred__86373.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__86374)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,G__86346,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__86373.cljs$core$IFn$_invoke$arity$2 ? pred__86373.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046),expr__86374) : pred__86373.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__86374)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,G__86346,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__86373.cljs$core$IFn$_invoke$arity$2 ? pred__86373.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),expr__86374) : pred__86373.call(null,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),expr__86374)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,G__86346,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__86373.cljs$core$IFn$_invoke$arity$2 ? pred__86373.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state_","state_",957667102),expr__86374) : pred__86373.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__86374)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,G__86346,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__86373.cljs$core$IFn$_invoke$arity$2 ? pred__86373.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__86374) : pred__86373.call(null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__86374)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,G__86346,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__86373.cljs$core$IFn$_invoke$arity$2 ? pred__86373.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__86374) : pred__86373.call(null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__86374)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,G__86346,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__86373.cljs$core$IFn$_invoke$arity$2 ? pred__86373.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__86374) : pred__86373.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__86374)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,G__86346,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__86373.cljs$core$IFn$_invoke$arity$2 ? pred__86373.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__86374) : pred__86373.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__86374)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,G__86346,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__86373.cljs$core$IFn$_invoke$arity$2 ? pred__86373.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__86374) : pred__86373.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__86374)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__86346,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__86373.cljs$core$IFn$_invoke$arity$2 ? pred__86373.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__86374) : pred__86373.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__86374)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,G__86346,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__86373.cljs$core$IFn$_invoke$arity$2 ? pred__86373.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),expr__86374) : pred__86373.call(null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),expr__86374)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,G__86346,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__86346),null));
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

(taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__86346){
var self__ = this;
var this__4379__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,G__86346,self__.__extmap,self__.__hash));
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

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__86340_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__86340_SHARP_,reason);
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
var map__86378 = opts;
var map__86378__$1 = (((((!((map__86378 == null))))?(((((map__86378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86378):map__86378);
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86378__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86378__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86378__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((6)):null);
var ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(self__.packer,ev,_QMARK_cb_uuid);
var temp__5753__auto___86951 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5753__auto___86951)){
var cb_uuid_86952 = temp__5753__auto___86951;
taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_86952], null),(function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e86380){if((e86380 instanceof Error)){
var e = e86380;
return e;
} else {
throw e86380;

}
}})();
if((e == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1141,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e,null);
}
})());

var temp__5753__auto___86953__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__5753__auto___86953__$1)){
var timeout_ms_86954 = temp__5753__auto___86953__$1;
var c__73524__auto___86955 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__73525__auto__ = (function (){var switch__73174__auto__ = (function (state_86391){
var state_val_86392 = (state_86391[(1)]);
if((state_val_86392 === (1))){
var inst_86381 = cljs.core.async.timeout(timeout_ms_86954);
var state_86391__$1 = state_86391;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_86391__$1,(2),inst_86381);
} else {
if((state_val_86392 === (2))){
var inst_86384 = (state_86391[(7)]);
var inst_86383 = (state_86391[(2)]);
var inst_86384__$1 = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,_QMARK_cb_uuid);
var state_86391__$1 = (function (){var statearr_86393 = state_86391;
(statearr_86393[(8)] = inst_86383);

(statearr_86393[(7)] = inst_86384__$1);

return statearr_86393;
})();
if(cljs.core.truth_(inst_86384__$1)){
var statearr_86394_86956 = state_86391__$1;
(statearr_86394_86956[(1)] = (3));

} else {
var statearr_86395_86957 = state_86391__$1;
(statearr_86395_86957[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86392 === (3))){
var inst_86384 = (state_86391[(7)]);
var inst_86386 = (inst_86384.cljs$core$IFn$_invoke$arity$1 ? inst_86384.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)) : inst_86384.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)));
var state_86391__$1 = state_86391;
var statearr_86396_86958 = state_86391__$1;
(statearr_86396_86958[(2)] = inst_86386);

(statearr_86396_86958[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86392 === (4))){
var state_86391__$1 = state_86391;
var statearr_86397_86959 = state_86391__$1;
(statearr_86397_86959[(2)] = null);

(statearr_86397_86959[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86392 === (5))){
var inst_86389 = (state_86391[(2)]);
var state_86391__$1 = state_86391;
return cljs.core.async.impl.ioc_helpers.return_chan(state_86391__$1,inst_86389);
} else {
return null;
}
}
}
}
}
});
return (function() {
var taoensso$sente$state_machine__73175__auto__ = null;
var taoensso$sente$state_machine__73175__auto____0 = (function (){
var statearr_86398 = [null,null,null,null,null,null,null,null,null];
(statearr_86398[(0)] = taoensso$sente$state_machine__73175__auto__);

(statearr_86398[(1)] = (1));

return statearr_86398;
});
var taoensso$sente$state_machine__73175__auto____1 = (function (state_86391){
while(true){
var ret_value__73176__auto__ = (function (){try{while(true){
var result__73177__auto__ = switch__73174__auto__(state_86391);
if(cljs.core.keyword_identical_QMARK_(result__73177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73177__auto__;
}
break;
}
}catch (e86399){var ex__73178__auto__ = e86399;
var statearr_86400_86960 = state_86391;
(statearr_86400_86960[(2)] = ex__73178__auto__);


if(cljs.core.seq((state_86391[(4)]))){
var statearr_86401_86961 = state_86391;
(statearr_86401_86961[(1)] = cljs.core.first((state_86391[(4)])));

} else {
throw ex__73178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__86962 = state_86391;
state_86391 = G__86962;
continue;
} else {
return ret_value__73176__auto__;
}
break;
}
});
taoensso$sente$state_machine__73175__auto__ = function(state_86391){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__73175__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__73175__auto____1.call(this,state_86391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__73175__auto____0;
taoensso$sente$state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__73175__auto____1;
return taoensso$sente$state_machine__73175__auto__;
})()
})();
var state__73526__auto__ = (function (){var statearr_86402 = f__73525__auto__();
(statearr_86402[(6)] = c__73524__auto___86955);

return statearr_86402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__73526__auto__);
}));

} else {
}
} else {
}

try{cljs.core.deref(self__.socket_).send(ppstr);

cljs.core.reset_BANG_(self__.udt_last_comms_,taoensso.encore.now_udt());

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e86403){var t = e86403;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",1155,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,"Chsk send error"], null);
}),null)),null,-644856599,null);

var temp__5753__auto___86963 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5753__auto___86963)){
var cb_uuid_86964 = temp__5753__auto___86963;
var cb_fn_STAR__86965 = (function (){var or__4126__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,cb_uuid_86964);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e86404){if((e86404 instanceof Error)){
var e = e86404;
return e;
} else {
throw e86404;

}
}})();
if((e == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1158,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e,null);
}
}
})();
(cb_fn_STAR__86965.cljs$core$IFn$_invoke$arity$1 ? cb_fn_STAR__86965.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","error","chsk/error",-984175439)) : cb_fn_STAR__86965.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439)));
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
}),null)),null,820946966,null);

goog.global.setTimeout(taoensso$sente$connect_fn,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__86341_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__86341_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
}));
} else {
return null;
}
});
var onerror_fn = (function (ws_ev){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",1187,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",(function (){try{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(ws_ev);
}catch (e86405){var _ = e86405;
return ws_ev;
}})()], null);
}),null)),null,1317430522,null);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__86342_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__86342_SHARP_,new cljs.core.Keyword(null,"last-ws-error","last-ws-error",-820288502),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev], null));
}));
});
var onmessage_fn = (function (ws_ev){
var ppstr = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"data");
var vec__86406 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86406,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86406,(1),null);
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
}),null)),null,-788411563,null);
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
}),null)),null,-1208469015,null);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__86344_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__86344_SHARP_,new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
}));
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__86345_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(taoensso.sente.chsk_state__GT_closed(p1__86345_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424)),new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
}));

return retry_fn();
}
});
var _QMARK_socket = (function (){try{return taoensso.sente.create_websocket_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"onerror-fn","onerror-fn",1069372505),onerror_fn,new cljs.core.Keyword(null,"onmessage-fn","onmessage-fn",1633804172),onmessage_fn,new cljs.core.Keyword(null,"onclose-fn","onclose-fn",-1388163785),onclose_fn,new cljs.core.Keyword(null,"headers","headers",-835030129),self__.headers,new cljs.core.Keyword(null,"uri-str","uri-str",304128675),taoensso.encore.merge_url_with_query_string(self__.url,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_))], null)], 0)))], null));
}catch (e86409){var t = e86409;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",1280,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,"WebSocket error"], null);
}),null)),null,-1900290676,null);

return null;
}})();
if(cljs.core.not(_QMARK_socket)){
return retry_fn();
} else {
var temp__5753__auto___86966 = cljs.core.deref(self__.socket_);
if(cljs.core.truth_(temp__5753__auto___86966)){
var old_socket_86967 = temp__5753__auto___86966;
old_socket_86967.close();
} else {
}

return cljs.core.reset_BANG_(self__.socket_,_QMARK_socket);
}
} else {
return null;
}
});
var temp__5753__auto___86968 = self__.ws_kalive_ms;
if(cljs.core.truth_(temp__5753__auto___86968)){
var ms_86969 = temp__5753__auto___86968;
var c__73524__auto___86970 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__73525__auto__ = (function (){var switch__73174__auto__ = (function (state_86437){
var state_val_86438 = (state_86437[(1)]);
if((state_val_86438 === (7))){
var inst_86433 = (state_86437[(2)]);
var state_86437__$1 = state_86437;
var statearr_86439_86971 = state_86437__$1;
(statearr_86439_86971[(2)] = inst_86433);

(statearr_86439_86971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86438 === (1))){
var state_86437__$1 = state_86437;
var statearr_86440_86972 = state_86437__$1;
(statearr_86440_86972[(2)] = null);

(statearr_86440_86972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86438 === (4))){
var inst_86414 = (state_86437[(2)]);
var inst_86415 = have_handle_QMARK_();
var state_86437__$1 = (function (){var statearr_86441 = state_86437;
(statearr_86441[(7)] = inst_86414);

return statearr_86441;
})();
if(inst_86415){
var statearr_86442_86973 = state_86437__$1;
(statearr_86442_86973[(1)] = (5));

} else {
var statearr_86443_86974 = state_86437__$1;
(statearr_86443_86974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86438 === (6))){
var state_86437__$1 = state_86437;
var statearr_86444_86975 = state_86437__$1;
(statearr_86444_86975[(2)] = null);

(statearr_86444_86975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86438 === (3))){
var inst_86435 = (state_86437[(2)]);
var state_86437__$1 = state_86437;
return cljs.core.async.impl.ioc_helpers.return_chan(state_86437__$1,inst_86435);
} else {
if((state_val_86438 === (2))){
var inst_86411 = cljs.core.deref(self__.udt_last_comms_);
var inst_86412 = cljs.core.async.timeout(ms_86969);
var state_86437__$1 = (function (){var statearr_86445 = state_86437;
(statearr_86445[(8)] = inst_86411);

return statearr_86445;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_86437__$1,(4),inst_86412);
} else {
if((state_val_86438 === (9))){
var state_86437__$1 = state_86437;
var statearr_86449_86976 = state_86437__$1;
(statearr_86449_86976[(2)] = null);

(statearr_86449_86976[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86438 === (5))){
var inst_86411 = (state_86437[(8)]);
var inst_86417 = cljs.core.deref(self__.udt_last_comms_);
var inst_86418 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_86411,inst_86417);
var state_86437__$1 = state_86437;
if(inst_86418){
var statearr_86453_86977 = state_86437__$1;
(statearr_86453_86977[(1)] = (8));

} else {
var statearr_86454_86978 = state_86437__$1;
(statearr_86454_86978[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86438 === (10))){
var inst_86429 = (state_86437[(2)]);
var state_86437__$1 = (function (){var statearr_86455 = state_86437;
(statearr_86455[(9)] = inst_86429);

return statearr_86455;
})();
var statearr_86456_86979 = state_86437__$1;
(statearr_86456_86979[(2)] = null);

(statearr_86456_86979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86438 === (8))){
var inst_86420 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_86421 = [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)];
var inst_86422 = (new cljs.core.PersistentVector(null,1,(5),inst_86420,inst_86421,null));
var inst_86423 = [new cljs.core.Keyword(null,"flush?","flush?",-108887231)];
var inst_86424 = [true];
var inst_86425 = cljs.core.PersistentHashMap.fromArrays(inst_86423,inst_86424);
var inst_86426 = chsk__$1.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(null,inst_86422,inst_86425);
var state_86437__$1 = state_86437;
var statearr_86457_86980 = state_86437__$1;
(statearr_86457_86980[(2)] = inst_86426);

(statearr_86457_86980[(1)] = (10));


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
var taoensso$sente$state_machine__73175__auto__ = null;
var taoensso$sente$state_machine__73175__auto____0 = (function (){
var statearr_86458 = [null,null,null,null,null,null,null,null,null,null];
(statearr_86458[(0)] = taoensso$sente$state_machine__73175__auto__);

(statearr_86458[(1)] = (1));

return statearr_86458;
});
var taoensso$sente$state_machine__73175__auto____1 = (function (state_86437){
while(true){
var ret_value__73176__auto__ = (function (){try{while(true){
var result__73177__auto__ = switch__73174__auto__(state_86437);
if(cljs.core.keyword_identical_QMARK_(result__73177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73177__auto__;
}
break;
}
}catch (e86459){var ex__73178__auto__ = e86459;
var statearr_86460_86981 = state_86437;
(statearr_86460_86981[(2)] = ex__73178__auto__);


if(cljs.core.seq((state_86437[(4)]))){
var statearr_86461_86982 = state_86437;
(statearr_86461_86982[(1)] = cljs.core.first((state_86437[(4)])));

} else {
throw ex__73178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__86983 = state_86437;
state_86437 = G__86983;
continue;
} else {
return ret_value__73176__auto__;
}
break;
}
});
taoensso$sente$state_machine__73175__auto__ = function(state_86437){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__73175__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__73175__auto____1.call(this,state_86437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__73175__auto____0;
taoensso$sente$state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__73175__auto____1;
return taoensso$sente$state_machine__73175__auto__;
})()
})();
var state__73526__auto__ = (function (){var statearr_86462 = f__73525__auto__();
(statearr_86462[(6)] = c__73524__auto___86970);

return statearr_86462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__73526__auto__);
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
taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__86350){
var extmap__4419__auto__ = (function (){var G__86463 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__86350,new cljs.core.Keyword(null,"client-id","client-id",-464622140),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)], 0));
if(cljs.core.record_QMARK_(G__86350)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__86463);
} else {
return G__86463;
}
})();
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__86350),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__86350),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__86350),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(G__86350),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__86350),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__86350),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968).cljs$core$IFn$_invoke$arity$1(G__86350),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__86350),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__86350),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__86350),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__86350),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__86350),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__86350),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__86350),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639).cljs$core$IFn$_invoke$arity$1(G__86350),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k86471,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__86475 = k86471;
var G__86475__$1 = (((G__86475 instanceof cljs.core.Keyword))?G__86475.fqn:null);
switch (G__86475__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k86471,else__4383__auto__);

}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__86476){
var vec__86477 = p__86476;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86477,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86477,(1),null);
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

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__86470){
var self__ = this;
var G__86470__$1 = this;
return (new cljs.core.RecordIter((0),G__86470__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this86472,other86473){
var self__ = this;
var this86472__$1 = this;
return (((!((other86473 == null)))) && ((this86472__$1.constructor === other86473.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this86472__$1.client_id,other86473.client_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this86472__$1.chs,other86473.chs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this86472__$1.params,other86473.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this86472__$1.packer,other86473.packer)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this86472__$1.url,other86473.url)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this86472__$1.state_,other86473.state_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this86472__$1.instance_handle_,other86473.instance_handle_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this86472__$1.ever_opened_QMARK__,other86473.ever_opened_QMARK__)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this86472__$1.backoff_ms_fn,other86473.backoff_ms_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this86472__$1.ajax_opts,other86473.ajax_opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this86472__$1.curr_xhr_,other86473.curr_xhr_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this86472__$1.__extmap,other86473.__extmap)));
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

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__86470){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__86480 = cljs.core.keyword_identical_QMARK_;
var expr__86481 = k__4388__auto__;
if(cljs.core.truth_((pred__86480.cljs$core$IFn$_invoke$arity$2 ? pred__86480.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__86481) : pred__86480.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__86481)))){
return (new taoensso.sente.ChAjaxSocket(G__86470,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__86480.cljs$core$IFn$_invoke$arity$2 ? pred__86480.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"chs","chs",376886120),expr__86481) : pred__86480.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__86481)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__86470,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__86480.cljs$core$IFn$_invoke$arity$2 ? pred__86480.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__86481) : pred__86480.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__86481)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__86470,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__86480.cljs$core$IFn$_invoke$arity$2 ? pred__86480.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"packer","packer",66077544),expr__86481) : pred__86480.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__86481)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__86470,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__86480.cljs$core$IFn$_invoke$arity$2 ? pred__86480.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046),expr__86481) : pred__86480.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__86481)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__86470,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__86480.cljs$core$IFn$_invoke$arity$2 ? pred__86480.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state_","state_",957667102),expr__86481) : pred__86480.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__86481)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__86470,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__86480.cljs$core$IFn$_invoke$arity$2 ? pred__86480.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__86481) : pred__86480.call(null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__86481)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__86470,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__86480.cljs$core$IFn$_invoke$arity$2 ? pred__86480.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__86481) : pred__86480.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__86481)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,G__86470,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__86480.cljs$core$IFn$_invoke$arity$2 ? pred__86480.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__86481) : pred__86480.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__86481)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,G__86470,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__86480.cljs$core$IFn$_invoke$arity$2 ? pred__86480.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__86481) : pred__86480.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__86481)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__86470,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__86480.cljs$core$IFn$_invoke$arity$2 ? pred__86480.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__86481) : pred__86480.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__86481)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,G__86470,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__86470),null));
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

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__86470){
var self__ = this;
var this__4379__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,G__86470,self__.__extmap,self__.__hash));
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

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__86464_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__86464_SHARP_,reason);
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
var map__86483 = opts;
var map__86483__$1 = (((((!((map__86483 == null))))?(((((map__86483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86483):map__86483);
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86483__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86483__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86483__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
} else {
var csrf_token = new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_));
var G__86485_86985 = self__.url;
var G__86486_86986 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__4126__auto__ = _QMARK_timeout_ms;
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
var G__86487_86987 = (function taoensso$sente$ajax_cb(p__86488){
var map__86489 = p__86488;
var map__86489__$1 = (((((!((map__86489 == null))))?(((((map__86489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86489):map__86489);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86489__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86489__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)) : _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)));
} else {
return null;
}
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__86465_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__86465_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
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
var vec__86491 = taoensso.sente.unpack(self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86491,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86491,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
(_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(resp_clj) : _QMARK_cb_fn.call(null,resp_clj));
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",1404,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
}),null)),null,-1523552033,null);
} else {
}
}

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__86466_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__86466_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
}));
}
});
(taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__86485_86985,G__86486_86986,G__86487_86987) : taoensso.sente.ajax_lite.call(null,G__86485_86985,G__86486_86986,G__86487_86987));

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
}),null)),null,-1907593680,null);

if(have_handle_QMARK_()){
var retry_fn = (function (){
if(have_handle_QMARK_()){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = (self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1 ? self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1(retry_count_STAR_) : self__.backoff_ms_fn.call(null,retry_count_STAR_));
var udt_next_reconnect = (taoensso.encore.now_udt() + backoff_ms);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",1422,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
}),null)),null,-387751913,null);

goog.global.setTimeout((function (){
return taoensso$sente$poll_fn(retry_count_STAR_);
}),backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__86467_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__86467_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
}));
} else {
return null;
}
});
return cljs.core.reset_BANG_(self__.curr_xhr_,(function (){var G__86494 = self__.url;
var G__86495 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handshake?","handshake?",-423743093),true], null))], 0)),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_))], null)], 0))], null)], 0));
var G__86496 = (function taoensso$sente$poll_fn_$_ajax_cb(p__86497){
var map__86498 = p__86497;
var map__86498__$1 = (((((!((map__86498 == null))))?(((((map__86498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86498):map__86498);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86498__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86498__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return taoensso$sente$poll_fn((0));
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__86468_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__86468_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
}));

return retry_fn();

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__86500 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86500,(0),null);
var handshake_QMARK_ = taoensso.sente.handshake_QMARK_(clj);
if(handshake_QMARK_){
taoensso.sente.receive_handshake_BANG_(new cljs.core.Keyword(null,"ajax","ajax",814345549),chsk__$1,clj);
} else {
}

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__86469_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__86469_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
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
return (taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__86494,G__86495,G__86496) : taoensso.sente.ajax_lite.call(null,G__86494,G__86495,G__86496));
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
taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__86474){
var extmap__4419__auto__ = (function (){var G__86503 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__86474,new cljs.core.Keyword(null,"client-id","client-id",-464622140),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)], 0));
if(cljs.core.record_QMARK_(G__86474)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__86503);
} else {
return G__86503;
}
})();
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__86474),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__86474),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__86474),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__86474),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__86474),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__86474),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__86474),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__86474),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__86474),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__86474),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__86474),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k86505,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__86509 = k86505;
var G__86509__$1 = (((G__86509 instanceof cljs.core.Keyword))?G__86509.fqn:null);
switch (G__86509__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k86505,else__4383__auto__);

}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__86510){
var vec__86511 = p__86510;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86511,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86511,(1),null);
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

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__86504){
var self__ = this;
var G__86504__$1 = this;
return (new cljs.core.RecordIter((0),G__86504__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this86506,other86507){
var self__ = this;
var this86506__$1 = this;
return (((!((other86507 == null)))) && ((this86506__$1.constructor === other86507.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this86506__$1.ws_chsk_opts,other86507.ws_chsk_opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this86506__$1.ajax_chsk_opts,other86507.ajax_chsk_opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this86506__$1.state_,other86507.state_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this86506__$1.impl_,other86507.impl_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this86506__$1.__extmap,other86507.__extmap)));
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

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__86504){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__86514 = cljs.core.keyword_identical_QMARK_;
var expr__86515 = k__4388__auto__;
if(cljs.core.truth_((pred__86514.cljs$core$IFn$_invoke$arity$2 ? pred__86514.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),expr__86515) : pred__86514.call(null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),expr__86515)))){
return (new taoensso.sente.ChAutoSocket(G__86504,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__86514.cljs$core$IFn$_invoke$arity$2 ? pred__86514.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),expr__86515) : pred__86514.call(null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),expr__86515)))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,G__86504,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__86514.cljs$core$IFn$_invoke$arity$2 ? pred__86514.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state_","state_",957667102),expr__86515) : pred__86514.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__86515)))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,G__86504,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__86514.cljs$core$IFn$_invoke$arity$2 ? pred__86514.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"impl_","impl_",1218818179),expr__86515) : pred__86514.call(null,new cljs.core.Keyword(null,"impl_","impl_",1218818179),expr__86515)))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,G__86504,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__86504),null));
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

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__86504){
var self__ = this;
var this__4379__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,G__86504,self__.__extmap,self__.__hash));
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
var map__86517 = opts;
var map__86517__$1 = (((((!((map__86517 == null))))?(((((map__86517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86517):map__86517);
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86517__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
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
var downgraded_QMARK___86989 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
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
if(cljs.core.compare_and_set_BANG_(downgraded_QMARK___86989,false,true)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",1555,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Permanently downgrading :auto chsk -> :ajax"], null);
}),null)),null,-965507656,null);

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
taoensso.sente.map__GT_ChAutoSocket = (function taoensso$sente$map__GT_ChAutoSocket(G__86508){
var extmap__4419__auto__ = (function (){var G__86519 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__86508,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)], 0));
if(cljs.core.record_QMARK_(G__86508)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__86519);
} else {
return G__86519;
}
})();
return (new taoensso.sente.ChAutoSocket(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104).cljs$core$IFn$_invoke$arity$1(G__86508),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327).cljs$core$IFn$_invoke$arity$1(G__86508),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__86508),new cljs.core.Keyword(null,"impl_","impl_",1218818179).cljs$core$IFn$_invoke$arity$1(G__86508),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

taoensso.sente.new_ChAutoSocket = (function taoensso$sente$new_ChAutoSocket(opts,csrf_token){
return taoensso.sente.map__GT_ChAutoSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token], null)),new cljs.core.Keyword(null,"impl_","impl_",1218818179),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),opts], 0)));
});
taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,host,path,type){
var protocol__$1 = (function (){var G__86520 = protocol;
var G__86520__$1 = (((G__86520 instanceof cljs.core.Keyword))?G__86520.fqn:null);
switch (G__86520__$1) {
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
return cljs.core.contains_QMARK_((function (){var G__86522 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["https:",null,"http:",null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__86522) : taoensso.truss.impl.set_STAR_.call(null,G__86522));
})(),x);
})(protocol__$1)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e86521){if((e86521 instanceof Error)){
var e = e86521;
return e;
} else {
throw e86521;

}
}})();
if((e == null)){
return protocol__$1;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1574,"([:el #{\"https:\" \"http:\"}] protocol)",protocol__$1,e,null);
}
})();
var protocol__$3 = (function (){var G__86523 = type;
var G__86523__$1 = (((G__86523 instanceof cljs.core.Keyword))?G__86523.fqn:null);
switch (G__86523__$1) {
case "ajax":
return protocol__$2;

break;
case "ws":
var G__86524 = protocol__$2;
switch (G__86524) {
case "https:":
return "wss:";

break;
case "http:":
return "ws:";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__86524)].join('')));

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__86523__$1)].join('')));

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
var len__4736__auto___86993 = arguments.length;
var i__4737__auto___86994 = (0);
while(true){
if((i__4737__auto___86994 < len__4736__auto___86993)){
args__4742__auto__.push((arguments[i__4737__auto___86994]));

var G__86995 = (i__4737__auto___86994 + (1));
i__4737__auto___86994 = G__86995;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,_QMARK_csrf_token,p__86528){
var vec__86529 = p__86528;
var map__86532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86529,(0),null);
var map__86532__$1 = (((((!((map__86532 == null))))?(((((map__86532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86532):map__86532);
var opts = map__86532__$1;
var ajax_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86532__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_kalive_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__86532__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"secs","secs",1532330091),(20)], 0)));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__86532__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
}
})());
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86532__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var packer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__86532__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86532__$1,new cljs.core.Keyword(null,"params","params",710516235));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__86532__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86532__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86532__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86532__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__86532__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer((2048)));
var backoff_ms_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__86532__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__86532__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var _deprecated_more_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86529,(1),null);
var e_86996 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_((function (){var G__86537 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__86537) : taoensso.truss.impl.set_STAR_.call(null,G__86537));
})(),x);
})(type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e86536){if((e86536 instanceof Error)){
var e_86996 = e86536;
return e_86996;
} else {
throw e86536;

}
}})();
if((e_86996 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1618,"([:in #{:ws :ajax :auto}] type)",type,e_86996,null);
}

var e_86997 = (function (){try{if(taoensso.encore.nblank_str_QMARK_(client_id)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e86542){if((e86542 instanceof Error)){
var e_86997 = e86542;
return e_86997;
} else {
throw e86542;

}
}})();
if((e_86997 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1619,"(enc/nblank-str? client-id)",client_id,e_86997,null);
}

if((!((_deprecated_more_opts == null)))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",1621,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
}),null)),null,399984634,null);
} else {
}

if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",1622,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
}),null)),null,-1607748514,null);
} else {
}

if((((!(typeof _QMARK_csrf_token === 'string'))) || (clojure.string.blank_QMARK_(_QMARK_csrf_token)))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",1625,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WARNING: no CSRF token provided. Connections will FAIL if server-side CSRF check is enabled (as it is by default)."], null);
}),null)),null,-590718080,null);
} else {
}

var packer__$1 = taoensso.sente.coerce_packer(packer);
var vec__86550 = (function (){var win_loc = taoensso.encore.get_win_loc();
var path__$1 = (function (){var z = (function (){try{var or__4126__auto__ = path;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_loc);
}
}catch (e86555){if((e86555 instanceof Error)){
var e = e86555;
return (new taoensso.truss.impl.WrappedError(e));
} else {
throw e86555;

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
}catch (e86560){if((e86560 instanceof Error)){
var e = e86560;
return e;
} else {
throw e86560;

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
var ws_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86550,(0),null);
var ajax_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86550,(1),null);
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
var _QMARK_chsk = taoensso.sente._chsk_connect_BANG_((function (){var G__86565 = type;
var G__86565__$1 = (((G__86565 instanceof cljs.core.Keyword))?G__86565.fqn:null);
switch (G__86565__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__86565__$1)].join('')));

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
var vec__86573 = taoensso.sente.as_event(ev);
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86573,(0),null);
var ev__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86573,(1),null);
var ev__$1 = vec__86573;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),internal_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),chsk_state_,new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
})));
cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2(ev_ch,ev_msg_ch);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ev_msg_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",1727,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to create channel socket"], null);
}),null)),null,1030886959,null);
}
}));

(taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq86525){
var G__86526 = cljs.core.first(seq86525);
var seq86525__$1 = cljs.core.next(seq86525);
var G__86527 = cljs.core.first(seq86525__$1);
var seq86525__$2 = cljs.core.next(seq86525__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__86526,G__86527,seq86525__$2);
}));

taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__86581 = opts;
var map__86581__$1 = (((((!((map__86581 == null))))?(((((map__86581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86581):map__86581);
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86581__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86581__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86581__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
var ch_ctrl = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var execute1 = (function (f){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var c__73524__auto___86999 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__73525__auto__ = (function (){var switch__73174__auto__ = (function (state_86638){
var state_val_86639 = (state_86638[(1)]);
if((state_val_86639 === (7))){
var inst_86631 = (state_86638[(2)]);
var state_86638__$1 = state_86638;
var statearr_86643_87000 = state_86638__$1;
(statearr_86643_87000[(2)] = inst_86631);

(statearr_86643_87000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86639 === (1))){
var state_86638__$1 = state_86638;
var statearr_86644_87001 = state_86638__$1;
(statearr_86644_87001[(2)] = null);

(statearr_86644_87001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86639 === (4))){
var inst_86600 = (state_86638[(7)]);
var inst_86595 = (state_86638[(8)]);
var inst_86593 = (state_86638[(9)]);
var inst_86597 = (state_86638[(10)]);
var inst_86593__$1 = (state_86638[(2)]);
var inst_86595__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_86593__$1,(0),null);
var inst_86597__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_86593__$1,(1),null);
var inst_86598 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_86597__$1,ch_ctrl);
var inst_86599 = (inst_86595__$1 == null);
var inst_86600__$1 = ((inst_86598) || (inst_86599));
var state_86638__$1 = (function (){var statearr_86649 = state_86638;
(statearr_86649[(7)] = inst_86600__$1);

(statearr_86649[(8)] = inst_86595__$1);

(statearr_86649[(9)] = inst_86593__$1);

(statearr_86649[(10)] = inst_86597__$1);

return statearr_86649;
})();
if(cljs.core.truth_(inst_86600__$1)){
var statearr_86651_87002 = state_86638__$1;
(statearr_86651_87002[(1)] = (5));

} else {
var statearr_86652_87003 = state_86638__$1;
(statearr_86652_87003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86639 === (15))){
var inst_86595 = (state_86638[(8)]);
var state_86638__$1 = state_86638;
var statearr_86654_87004 = state_86638__$1;
(statearr_86654_87004[(2)] = inst_86595);

(statearr_86654_87004[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86639 === (13))){
var inst_86616 = (state_86638[(2)]);
var state_86638__$1 = state_86638;
var statearr_86656_87005 = state_86638__$1;
(statearr_86656_87005[(2)] = inst_86616);

(statearr_86656_87005[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86639 === (6))){
var inst_86595 = (state_86638[(8)]);
var inst_86605 = (inst_86595 == null);
var inst_86606 = cljs.core.not(inst_86605);
var state_86638__$1 = state_86638;
if(inst_86606){
var statearr_86657_87006 = state_86638__$1;
(statearr_86657_87006[(1)] = (8));

} else {
var statearr_86658_87007 = state_86638__$1;
(statearr_86658_87007[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86639 === (3))){
var inst_86633 = (state_86638[(2)]);
var state_86638__$1 = state_86638;
return cljs.core.async.impl.ioc_helpers.return_chan(state_86638__$1,inst_86633);
} else {
if((state_val_86639 === (12))){
var state_86638__$1 = state_86638;
var statearr_86659_87008 = state_86638__$1;
(statearr_86659_87008[(2)] = false);

(statearr_86659_87008[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86639 === (2))){
var inst_86588 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_86589 = [ch_recv,ch_ctrl];
var inst_86590 = (new cljs.core.PersistentVector(null,2,(5),inst_86588,inst_86589,null));
var state_86638__$1 = state_86638;
return cljs.core.async.ioc_alts_BANG_(state_86638__$1,(4),inst_86590);
} else {
if((state_val_86639 === (11))){
var state_86638__$1 = state_86638;
var statearr_86660_87009 = state_86638__$1;
(statearr_86660_87009[(2)] = true);

(statearr_86660_87009[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86639 === (9))){
var state_86638__$1 = state_86638;
var statearr_86661_87010 = state_86638__$1;
(statearr_86661_87010[(2)] = false);

(statearr_86661_87010[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86639 === (5))){
var state_86638__$1 = state_86638;
var statearr_86662_87011 = state_86638__$1;
(statearr_86662_87011[(2)] = null);

(statearr_86662_87011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86639 === (14))){
var inst_86595 = (state_86638[(8)]);
var inst_86621 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_86595);
var state_86638__$1 = state_86638;
var statearr_86663_87012 = state_86638__$1;
(statearr_86663_87012[(2)] = inst_86621);

(statearr_86663_87012[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86639 === (16))){
var inst_86600 = (state_86638[(7)]);
var inst_86595 = (state_86638[(8)]);
var inst_86593 = (state_86638[(9)]);
var inst_86597 = (state_86638[(10)]);
var inst_86624 = (state_86638[(2)]);
var inst_86625 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_86624,new cljs.core.Keyword(null,"event","event",301435442));
var inst_86626 = (function (){var vec__86585 = inst_86593;
var v = inst_86595;
var p = inst_86597;
var stop_QMARK_ = inst_86600;
var map__86603 = inst_86624;
var event_msg = inst_86624;
var event = inst_86625;
return (function (){
try{if(cljs.core.truth_(trace_evs_QMARK_)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",1754,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
}),null)),null,-832121090,null);
} else {
}

var G__86673 = (cljs.core.truth_(server_QMARK_)?(function (){var e = (function (){try{if(taoensso.sente.server_event_msg_QMARK_(event_msg)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e86675){if((e86675 instanceof Error)){
var e = e86675;
return e;
} else {
throw e86675;

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
}catch (e86681){if((e86681 instanceof Error)){
var e = e86681;
return e;
} else {
throw e86681;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_(null,"taoensso.sente",1758,"(client-event-msg? event-msg)",event_msg,e,null);
}
})());
return (event_msg_handler.cljs$core$IFn$_invoke$arity$1 ? event_msg_handler.cljs$core$IFn$_invoke$arity$1(G__86673) : event_msg_handler.call(null,G__86673));
}catch (e86665){var e1 = e86665;
try{var temp__5751__auto__ = error_handler;
if(cljs.core.truth_(temp__5751__auto__)){
var eh = temp__5751__auto__;
return (error_handler.cljs$core$IFn$_invoke$arity$2 ? error_handler.cljs$core$IFn$_invoke$arity$2(e1,event_msg) : error_handler.call(null,e1,event_msg));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",1763,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,"Chsk router `event-msg-handler` error: %s",event], null);
}),null)),null,-2133178014,null);
}
}catch (e86666){var e2 = e86666;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/baruchberger/browjure/docs/docgen.clj",1764,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
}),null)),null,33499739,null);
}}});
})();
var inst_86627 = execute1(inst_86626);
var state_86638__$1 = (function (){var statearr_86682 = state_86638;
(statearr_86682[(11)] = inst_86627);

return statearr_86682;
})();
var statearr_86683_87013 = state_86638__$1;
(statearr_86683_87013[(2)] = null);

(statearr_86683_87013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86639 === (10))){
var inst_86619 = (state_86638[(2)]);
var state_86638__$1 = state_86638;
if(cljs.core.truth_(inst_86619)){
var statearr_86684_87014 = state_86638__$1;
(statearr_86684_87014[(1)] = (14));

} else {
var statearr_86685_87015 = state_86638__$1;
(statearr_86685_87015[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86639 === (8))){
var inst_86595 = (state_86638[(8)]);
var inst_86608 = inst_86595.cljs$lang$protocol_mask$partition0$;
var inst_86609 = (inst_86608 & (64));
var inst_86610 = inst_86595.cljs$core$ISeq$;
var inst_86611 = (cljs.core.PROTOCOL_SENTINEL === inst_86610);
var inst_86612 = ((inst_86609) || (inst_86611));
var state_86638__$1 = state_86638;
if(cljs.core.truth_(inst_86612)){
var statearr_86686_87016 = state_86638__$1;
(statearr_86686_87016[(1)] = (11));

} else {
var statearr_86687_87017 = state_86638__$1;
(statearr_86687_87017[(1)] = (12));

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
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__73175__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__73175__auto____0 = (function (){
var statearr_86688 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_86688[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__73175__auto__);

(statearr_86688[(1)] = (1));

return statearr_86688;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__73175__auto____1 = (function (state_86638){
while(true){
var ret_value__73176__auto__ = (function (){try{while(true){
var result__73177__auto__ = switch__73174__auto__(state_86638);
if(cljs.core.keyword_identical_QMARK_(result__73177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73177__auto__;
}
break;
}
}catch (e86689){var ex__73178__auto__ = e86689;
var statearr_86690_87018 = state_86638;
(statearr_86690_87018[(2)] = ex__73178__auto__);


if(cljs.core.seq((state_86638[(4)]))){
var statearr_86691_87019 = state_86638;
(statearr_86691_87019[(1)] = cljs.core.first((state_86638[(4)])));

} else {
throw ex__73178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87020 = state_86638;
state_86638 = G__87020;
continue;
} else {
return ret_value__73176__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__73175__auto__ = function(state_86638){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__73175__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__73175__auto____1.call(this,state_86638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__73175__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__73175__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__73175__auto__;
})()
})();
var state__73526__auto__ = (function (){var statearr_86692 = f__73525__auto__();
(statearr_86692[(6)] = c__73524__auto___86999);

return statearr_86692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__73526__auto__);
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
var len__4736__auto___87021 = arguments.length;
var i__4737__auto___87022 = (0);
while(true){
if((i__4737__auto___87022 < len__4736__auto___87021)){
args__4742__auto__.push((arguments[i__4737__auto___87022]));

var G__87023 = (i__4737__auto___87022 + (1));
i__4737__auto___87022 = G__87023;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__86696){
var vec__86697 = p__86696;
var map__86700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86697,(0),null);
var map__86700__$1 = (((((!((map__86700 == null))))?(((((map__86700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86700):map__86700);
var opts = map__86700__$1;
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86700__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86700__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86700__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
return taoensso.sente._start_chsk_router_BANG_(new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
}));

(taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq86693){
var G__86694 = cljs.core.first(seq86693);
var seq86693__$1 = cljs.core.next(seq86693);
var G__86695 = cljs.core.first(seq86693__$1);
var seq86693__$2 = cljs.core.next(seq86693__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__86694,G__86695,seq86693__$2);
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
var len__4736__auto___87024 = arguments.length;
var i__4737__auto___87025 = (0);
while(true){
if((i__4737__auto___87025 < len__4736__auto___87024)){
args__4742__auto__.push((arguments[i__4737__auto___87025]));

var G__87026 = (i__4737__auto___87025 + (1));
i__4737__auto___87025 = G__87026;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__86705){
var vec__86706 = p__86705;
var map__86709 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86706,(0),null);
var map__86709__$1 = (((((!((map__86709 == null))))?(((((map__86709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86709):map__86709);
var opts = map__86709__$1;
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86709__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86709__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_(cljs.core.not(new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
}));

(taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq86702){
var G__86703 = cljs.core.first(seq86702);
var seq86702__$1 = cljs.core.next(seq86702);
var G__86704 = cljs.core.first(seq86702__$1);
var seq86702__$2 = cljs.core.next(seq86702__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__86703,G__86704,seq86702__$2);
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
var G__86711 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(ev_msg);
var G__86712 = new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(ev_msg);
return (event_handler.cljs$core$IFn$_invoke$arity$2 ? event_handler.cljs$core$IFn$_invoke$arity$2(G__86711,G__86712) : event_handler.call(null,G__86711,G__86712));
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
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__86713,websocket_QMARK_){
var map__86714 = p__86713;
var map__86714__$1 = (((((!((map__86714 == null))))?(((((map__86714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86714):map__86714);
var location = map__86714__$1;
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86714__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86714__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86714__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
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
