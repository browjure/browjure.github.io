goog.provide('taoensso.sente.packers.transit');
/**
 * Returns thread-safe (fn [x-to-write])
 */
taoensso.sente.packers.transit.get_transit_writer_fn = taoensso.encore.memoize_((function (fmt,opts){
var writer = cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(fmt,opts);
return (function (x){
return cognitect.transit.write(writer,x);
});
}));
/**
 * Returns thread-safe (fn [str-to-read])
 */
taoensso.sente.packers.transit.get_transit_reader_fn = taoensso.encore.memoize_((function (fmt,opts){
var reader = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(fmt,opts);
return (function (s){
return cognitect.transit.read(reader,s);
});
}));

/**
* @constructor
 * @implements {taoensso.sente.interfaces.IPacker}
*/
taoensso.sente.packers.transit.TransitPacker = (function (transit_fmt,writer_opts,reader_opts){
this.transit_fmt = transit_fmt;
this.writer_opts = writer_opts;
this.reader_opts = reader_opts;
});
(taoensso.sente.packers.transit.TransitPacker.prototype.taoensso$sente$interfaces$IPacker$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.sente.packers.transit.TransitPacker.prototype.taoensso$sente$interfaces$IPacker$pack$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var fexpr__78310 = taoensso.sente.packers.transit.get_transit_writer_fn(self__.transit_fmt,self__.writer_opts);
return (fexpr__78310.cljs$core$IFn$_invoke$arity$1 ? fexpr__78310.cljs$core$IFn$_invoke$arity$1(x) : fexpr__78310.call(null,x));
}));

(taoensso.sente.packers.transit.TransitPacker.prototype.taoensso$sente$interfaces$IPacker$unpack$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
var fexpr__78311 = taoensso.sente.packers.transit.get_transit_reader_fn(self__.transit_fmt,self__.reader_opts);
return (fexpr__78311.cljs$core$IFn$_invoke$arity$1 ? fexpr__78311.cljs$core$IFn$_invoke$arity$1(s) : fexpr__78311.call(null,s));
}));

(taoensso.sente.packers.transit.TransitPacker.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transit-fmt","transit-fmt",913727703,null),new cljs.core.Symbol(null,"writer-opts","writer-opts",1122222818,null),new cljs.core.Symbol(null,"reader-opts","reader-opts",-1524615329,null)], null);
}));

(taoensso.sente.packers.transit.TransitPacker.cljs$lang$type = true);

(taoensso.sente.packers.transit.TransitPacker.cljs$lang$ctorStr = "taoensso.sente.packers.transit/TransitPacker");

(taoensso.sente.packers.transit.TransitPacker.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"taoensso.sente.packers.transit/TransitPacker");
}));

/**
 * Positional factory function for taoensso.sente.packers.transit/TransitPacker.
 */
taoensso.sente.packers.transit.__GT_TransitPacker = (function taoensso$sente$packers$transit$__GT_TransitPacker(transit_fmt,writer_opts,reader_opts){
return (new taoensso.sente.packers.transit.TransitPacker(transit_fmt,writer_opts,reader_opts));
});

/**
 * Returns a new TransitPacker
 */
taoensso.sente.packers.transit.get_transit_packer = (function taoensso$sente$packers$transit$get_transit_packer(var_args){
var G__78321 = arguments.length;
switch (G__78321) {
case 0:
return taoensso.sente.packers.transit.get_transit_packer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.sente.packers.transit.get_transit_packer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return taoensso.sente.packers.transit.get_transit_packer.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.sente.packers.transit.get_transit_packer.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.sente.packers.transit.get_transit_packer.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"json","json",1279968570),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY);
}));

(taoensso.sente.packers.transit.get_transit_packer.cljs$core$IFn$_invoke$arity$1 = (function (transit_fmt){
return taoensso.sente.packers.transit.get_transit_packer.cljs$core$IFn$_invoke$arity$3(transit_fmt,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY);
}));

(taoensso.sente.packers.transit.get_transit_packer.cljs$core$IFn$_invoke$arity$3 = (function (transit_fmt,writer_opts,reader_opts){
var e_78351 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_((function (){var G__78329 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"json-verbose","json-verbose",-542533531),null,new cljs.core.Keyword(null,"json","json",1279968570),null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__78329) : taoensso.truss.impl.set_STAR_.call(null,G__78329));
})(),x);
})(transit_fmt)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e78325){if((e78325 instanceof Error)){
var e_78351 = e78325;
return e_78351;
} else {
throw e78325;

}
}})();
if((e_78351 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente.packers.transit",102,"([:el #{:json-verbose :json}] transit-fmt)",transit_fmt,e_78351,null);
}

var e_78355 = (function (){try{if(cljs.core.map_QMARK_(writer_opts)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e78333){if((e78333 instanceof Error)){
var e_78355 = e78333;
return e_78355;
} else {
throw e78333;

}
}})();
if((e_78355 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente.packers.transit",103,"(map? writer-opts)",writer_opts,e_78355,null);
}

var e_78357 = (function (){try{if(cljs.core.map_QMARK_(reader_opts)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e78338){if((e78338 instanceof Error)){
var e_78357 = e78338;
return e_78357;
} else {
throw e78338;

}
}})();
if((e_78357 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente.packers.transit",103,"(map? reader-opts)",reader_opts,e_78357,null);
}


return (new taoensso.sente.packers.transit.TransitPacker(transit_fmt,writer_opts,reader_opts));
}));

(taoensso.sente.packers.transit.get_transit_packer.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=taoensso.sente.packers.transit.js.map
