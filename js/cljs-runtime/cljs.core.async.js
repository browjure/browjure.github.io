goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__79593 = arguments.length;
switch (G__79593) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async79602 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async79602 = (function (f,blockable,meta79603){
this.f = f;
this.blockable = blockable;
this.meta79603 = meta79603;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async79602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_79604,meta79603__$1){
var self__ = this;
var _79604__$1 = this;
return (new cljs.core.async.t_cljs$core$async79602(self__.f,self__.blockable,meta79603__$1));
}));

(cljs.core.async.t_cljs$core$async79602.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_79604){
var self__ = this;
var _79604__$1 = this;
return self__.meta79603;
}));

(cljs.core.async.t_cljs$core$async79602.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async79602.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async79602.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async79602.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async79602.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta79603","meta79603",2087989713,null)], null);
}));

(cljs.core.async.t_cljs$core$async79602.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async79602.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async79602");

(cljs.core.async.t_cljs$core$async79602.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async79602");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async79602.
 */
cljs.core.async.__GT_t_cljs$core$async79602 = (function cljs$core$async$__GT_t_cljs$core$async79602(f__$1,blockable__$1,meta79603){
return (new cljs.core.async.t_cljs$core$async79602(f__$1,blockable__$1,meta79603));
});

}

return (new cljs.core.async.t_cljs$core$async79602(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__79638 = arguments.length;
switch (G__79638) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__79640 = arguments.length;
switch (G__79640) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__79649 = arguments.length;
switch (G__79649) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_81863 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_81863) : fn1.call(null,val_81863));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_81863) : fn1.call(null,val_81863));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__79654 = arguments.length;
switch (G__79654) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___81866 = n;
var x_81867 = (0);
while(true){
if((x_81867 < n__4613__auto___81866)){
(a[x_81867] = x_81867);

var G__81868 = (x_81867 + (1));
x_81867 = G__81868;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async79664 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async79664 = (function (flag,meta79665){
this.flag = flag;
this.meta79665 = meta79665;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async79664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_79666,meta79665__$1){
var self__ = this;
var _79666__$1 = this;
return (new cljs.core.async.t_cljs$core$async79664(self__.flag,meta79665__$1));
}));

(cljs.core.async.t_cljs$core$async79664.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_79666){
var self__ = this;
var _79666__$1 = this;
return self__.meta79665;
}));

(cljs.core.async.t_cljs$core$async79664.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async79664.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async79664.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async79664.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async79664.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta79665","meta79665",-1261671143,null)], null);
}));

(cljs.core.async.t_cljs$core$async79664.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async79664.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async79664");

(cljs.core.async.t_cljs$core$async79664.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async79664");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async79664.
 */
cljs.core.async.__GT_t_cljs$core$async79664 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async79664(flag__$1,meta79665){
return (new cljs.core.async.t_cljs$core$async79664(flag__$1,meta79665));
});

}

return (new cljs.core.async.t_cljs$core$async79664(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async79680 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async79680 = (function (flag,cb,meta79681){
this.flag = flag;
this.cb = cb;
this.meta79681 = meta79681;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async79680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_79682,meta79681__$1){
var self__ = this;
var _79682__$1 = this;
return (new cljs.core.async.t_cljs$core$async79680(self__.flag,self__.cb,meta79681__$1));
}));

(cljs.core.async.t_cljs$core$async79680.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_79682){
var self__ = this;
var _79682__$1 = this;
return self__.meta79681;
}));

(cljs.core.async.t_cljs$core$async79680.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async79680.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async79680.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async79680.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async79680.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta79681","meta79681",-1724932576,null)], null);
}));

(cljs.core.async.t_cljs$core$async79680.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async79680.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async79680");

(cljs.core.async.t_cljs$core$async79680.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async79680");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async79680.
 */
cljs.core.async.__GT_t_cljs$core$async79680 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async79680(flag__$1,cb__$1,meta79681){
return (new cljs.core.async.t_cljs$core$async79680(flag__$1,cb__$1,meta79681));
});

}

return (new cljs.core.async.t_cljs$core$async79680(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__79694_SHARP_){
var G__79696 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__79694_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__79696) : fret.call(null,G__79696));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__79695_SHARP_){
var G__79697 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__79695_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__79697) : fret.call(null,G__79697));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__81873 = (i + (1));
i = G__81873;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___81874 = arguments.length;
var i__4737__auto___81875 = (0);
while(true){
if((i__4737__auto___81875 < len__4736__auto___81874)){
args__4742__auto__.push((arguments[i__4737__auto___81875]));

var G__81876 = (i__4737__auto___81875 + (1));
i__4737__auto___81875 = G__81876;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__79703){
var map__79704 = p__79703;
var map__79704__$1 = (((((!((map__79704 == null))))?(((((map__79704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__79704):map__79704);
var opts = map__79704__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq79701){
var G__79702 = cljs.core.first(seq79701);
var seq79701__$1 = cljs.core.next(seq79701);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__79702,seq79701__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__79721 = arguments.length;
switch (G__79721) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__60388__auto___81878 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60389__auto__ = (function (){var switch__60365__auto__ = (function (state_79771){
var state_val_79772 = (state_79771[(1)]);
if((state_val_79772 === (7))){
var inst_79767 = (state_79771[(2)]);
var state_79771__$1 = state_79771;
var statearr_79779_81879 = state_79771__$1;
(statearr_79779_81879[(2)] = inst_79767);

(statearr_79779_81879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79772 === (1))){
var state_79771__$1 = state_79771;
var statearr_79780_81880 = state_79771__$1;
(statearr_79780_81880[(2)] = null);

(statearr_79780_81880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79772 === (4))){
var inst_79747 = (state_79771[(7)]);
var inst_79747__$1 = (state_79771[(2)]);
var inst_79750 = (inst_79747__$1 == null);
var state_79771__$1 = (function (){var statearr_79781 = state_79771;
(statearr_79781[(7)] = inst_79747__$1);

return statearr_79781;
})();
if(cljs.core.truth_(inst_79750)){
var statearr_79782_81882 = state_79771__$1;
(statearr_79782_81882[(1)] = (5));

} else {
var statearr_79783_81883 = state_79771__$1;
(statearr_79783_81883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79772 === (13))){
var state_79771__$1 = state_79771;
var statearr_79784_81884 = state_79771__$1;
(statearr_79784_81884[(2)] = null);

(statearr_79784_81884[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79772 === (6))){
var inst_79747 = (state_79771[(7)]);
var state_79771__$1 = state_79771;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_79771__$1,(11),to,inst_79747);
} else {
if((state_val_79772 === (3))){
var inst_79769 = (state_79771[(2)]);
var state_79771__$1 = state_79771;
return cljs.core.async.impl.ioc_helpers.return_chan(state_79771__$1,inst_79769);
} else {
if((state_val_79772 === (12))){
var state_79771__$1 = state_79771;
var statearr_79792_81885 = state_79771__$1;
(statearr_79792_81885[(2)] = null);

(statearr_79792_81885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79772 === (2))){
var state_79771__$1 = state_79771;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79771__$1,(4),from);
} else {
if((state_val_79772 === (11))){
var inst_79759 = (state_79771[(2)]);
var state_79771__$1 = state_79771;
if(cljs.core.truth_(inst_79759)){
var statearr_79793_81886 = state_79771__$1;
(statearr_79793_81886[(1)] = (12));

} else {
var statearr_79794_81887 = state_79771__$1;
(statearr_79794_81887[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79772 === (9))){
var state_79771__$1 = state_79771;
var statearr_79795_81888 = state_79771__$1;
(statearr_79795_81888[(2)] = null);

(statearr_79795_81888[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79772 === (5))){
var state_79771__$1 = state_79771;
if(cljs.core.truth_(close_QMARK_)){
var statearr_79796_81889 = state_79771__$1;
(statearr_79796_81889[(1)] = (8));

} else {
var statearr_79797_81890 = state_79771__$1;
(statearr_79797_81890[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79772 === (14))){
var inst_79765 = (state_79771[(2)]);
var state_79771__$1 = state_79771;
var statearr_79798_81891 = state_79771__$1;
(statearr_79798_81891[(2)] = inst_79765);

(statearr_79798_81891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79772 === (10))){
var inst_79756 = (state_79771[(2)]);
var state_79771__$1 = state_79771;
var statearr_79799_81892 = state_79771__$1;
(statearr_79799_81892[(2)] = inst_79756);

(statearr_79799_81892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79772 === (8))){
var inst_79753 = cljs.core.async.close_BANG_(to);
var state_79771__$1 = state_79771;
var statearr_79800_81893 = state_79771__$1;
(statearr_79800_81893[(2)] = inst_79753);

(statearr_79800_81893[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__60366__auto__ = null;
var cljs$core$async$state_machine__60366__auto____0 = (function (){
var statearr_79801 = [null,null,null,null,null,null,null,null];
(statearr_79801[(0)] = cljs$core$async$state_machine__60366__auto__);

(statearr_79801[(1)] = (1));

return statearr_79801;
});
var cljs$core$async$state_machine__60366__auto____1 = (function (state_79771){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_79771);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e79802){var ex__60369__auto__ = e79802;
var statearr_79803_81896 = state_79771;
(statearr_79803_81896[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_79771[(4)]))){
var statearr_79804_81899 = state_79771;
(statearr_79804_81899[(1)] = cljs.core.first((state_79771[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81901 = state_79771;
state_79771 = G__81901;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
cljs$core$async$state_machine__60366__auto__ = function(state_79771){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60366__auto____1.call(this,state_79771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60366__auto____0;
cljs$core$async$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60366__auto____1;
return cljs$core$async$state_machine__60366__auto__;
})()
})();
var state__60390__auto__ = (function (){var statearr_79805 = f__60389__auto__();
(statearr_79805[(6)] = c__60388__auto___81878);

return statearr_79805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60390__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__79810){
var vec__79811 = p__79810;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79811,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79811,(1),null);
var job = vec__79811;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__60388__auto___81902 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60389__auto__ = (function (){var switch__60365__auto__ = (function (state_79818){
var state_val_79819 = (state_79818[(1)]);
if((state_val_79819 === (1))){
var state_79818__$1 = state_79818;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_79818__$1,(2),res,v);
} else {
if((state_val_79819 === (2))){
var inst_79815 = (state_79818[(2)]);
var inst_79816 = cljs.core.async.close_BANG_(res);
var state_79818__$1 = (function (){var statearr_79820 = state_79818;
(statearr_79820[(7)] = inst_79815);

return statearr_79820;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_79818__$1,inst_79816);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____0 = (function (){
var statearr_79821 = [null,null,null,null,null,null,null,null];
(statearr_79821[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__);

(statearr_79821[(1)] = (1));

return statearr_79821;
});
var cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____1 = (function (state_79818){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_79818);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e79822){var ex__60369__auto__ = e79822;
var statearr_79823_81903 = state_79818;
(statearr_79823_81903[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_79818[(4)]))){
var statearr_79824_81904 = state_79818;
(statearr_79824_81904[(1)] = cljs.core.first((state_79818[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81905 = state_79818;
state_79818 = G__81905;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__ = function(state_79818){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____1.call(this,state_79818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__;
})()
})();
var state__60390__auto__ = (function (){var statearr_79825 = f__60389__auto__();
(statearr_79825[(6)] = c__60388__auto___81902);

return statearr_79825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60390__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__79830){
var vec__79831 = p__79830;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79831,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79831,(1),null);
var job = vec__79831;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___81908 = n;
var __81909 = (0);
while(true){
if((__81909 < n__4613__auto___81908)){
var G__79835_81910 = type;
var G__79835_81911__$1 = (((G__79835_81910 instanceof cljs.core.Keyword))?G__79835_81910.fqn:null);
switch (G__79835_81911__$1) {
case "compute":
var c__60388__auto___81913 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__81909,c__60388__auto___81913,G__79835_81910,G__79835_81911__$1,n__4613__auto___81908,jobs,results,process,async){
return (function (){
var f__60389__auto__ = (function (){var switch__60365__auto__ = ((function (__81909,c__60388__auto___81913,G__79835_81910,G__79835_81911__$1,n__4613__auto___81908,jobs,results,process,async){
return (function (state_79852){
var state_val_79853 = (state_79852[(1)]);
if((state_val_79853 === (1))){
var state_79852__$1 = state_79852;
var statearr_79854_81914 = state_79852__$1;
(statearr_79854_81914[(2)] = null);

(statearr_79854_81914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79853 === (2))){
var state_79852__$1 = state_79852;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79852__$1,(4),jobs);
} else {
if((state_val_79853 === (3))){
var inst_79850 = (state_79852[(2)]);
var state_79852__$1 = state_79852;
return cljs.core.async.impl.ioc_helpers.return_chan(state_79852__$1,inst_79850);
} else {
if((state_val_79853 === (4))){
var inst_79842 = (state_79852[(2)]);
var inst_79843 = process(inst_79842);
var state_79852__$1 = state_79852;
if(cljs.core.truth_(inst_79843)){
var statearr_79855_81915 = state_79852__$1;
(statearr_79855_81915[(1)] = (5));

} else {
var statearr_79856_81916 = state_79852__$1;
(statearr_79856_81916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79853 === (5))){
var state_79852__$1 = state_79852;
var statearr_79857_81917 = state_79852__$1;
(statearr_79857_81917[(2)] = null);

(statearr_79857_81917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79853 === (6))){
var state_79852__$1 = state_79852;
var statearr_79858_81918 = state_79852__$1;
(statearr_79858_81918[(2)] = null);

(statearr_79858_81918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79853 === (7))){
var inst_79848 = (state_79852[(2)]);
var state_79852__$1 = state_79852;
var statearr_79859_81919 = state_79852__$1;
(statearr_79859_81919[(2)] = inst_79848);

(statearr_79859_81919[(1)] = (3));


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
});})(__81909,c__60388__auto___81913,G__79835_81910,G__79835_81911__$1,n__4613__auto___81908,jobs,results,process,async))
;
return ((function (__81909,switch__60365__auto__,c__60388__auto___81913,G__79835_81910,G__79835_81911__$1,n__4613__auto___81908,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____0 = (function (){
var statearr_79861 = [null,null,null,null,null,null,null];
(statearr_79861[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__);

(statearr_79861[(1)] = (1));

return statearr_79861;
});
var cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____1 = (function (state_79852){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_79852);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e79866){var ex__60369__auto__ = e79866;
var statearr_79867_81920 = state_79852;
(statearr_79867_81920[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_79852[(4)]))){
var statearr_79868_81921 = state_79852;
(statearr_79868_81921[(1)] = cljs.core.first((state_79852[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81922 = state_79852;
state_79852 = G__81922;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__ = function(state_79852){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____1.call(this,state_79852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__;
})()
;})(__81909,switch__60365__auto__,c__60388__auto___81913,G__79835_81910,G__79835_81911__$1,n__4613__auto___81908,jobs,results,process,async))
})();
var state__60390__auto__ = (function (){var statearr_79869 = f__60389__auto__();
(statearr_79869[(6)] = c__60388__auto___81913);

return statearr_79869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60390__auto__);
});})(__81909,c__60388__auto___81913,G__79835_81910,G__79835_81911__$1,n__4613__auto___81908,jobs,results,process,async))
);


break;
case "async":
var c__60388__auto___81923 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__81909,c__60388__auto___81923,G__79835_81910,G__79835_81911__$1,n__4613__auto___81908,jobs,results,process,async){
return (function (){
var f__60389__auto__ = (function (){var switch__60365__auto__ = ((function (__81909,c__60388__auto___81923,G__79835_81910,G__79835_81911__$1,n__4613__auto___81908,jobs,results,process,async){
return (function (state_79884){
var state_val_79885 = (state_79884[(1)]);
if((state_val_79885 === (1))){
var state_79884__$1 = state_79884;
var statearr_79886_81925 = state_79884__$1;
(statearr_79886_81925[(2)] = null);

(statearr_79886_81925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79885 === (2))){
var state_79884__$1 = state_79884;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79884__$1,(4),jobs);
} else {
if((state_val_79885 === (3))){
var inst_79882 = (state_79884[(2)]);
var state_79884__$1 = state_79884;
return cljs.core.async.impl.ioc_helpers.return_chan(state_79884__$1,inst_79882);
} else {
if((state_val_79885 === (4))){
var inst_79873 = (state_79884[(2)]);
var inst_79874 = async(inst_79873);
var state_79884__$1 = state_79884;
if(cljs.core.truth_(inst_79874)){
var statearr_79887_81927 = state_79884__$1;
(statearr_79887_81927[(1)] = (5));

} else {
var statearr_79888_81928 = state_79884__$1;
(statearr_79888_81928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79885 === (5))){
var state_79884__$1 = state_79884;
var statearr_79889_81929 = state_79884__$1;
(statearr_79889_81929[(2)] = null);

(statearr_79889_81929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79885 === (6))){
var state_79884__$1 = state_79884;
var statearr_79890_81930 = state_79884__$1;
(statearr_79890_81930[(2)] = null);

(statearr_79890_81930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79885 === (7))){
var inst_79880 = (state_79884[(2)]);
var state_79884__$1 = state_79884;
var statearr_79891_81931 = state_79884__$1;
(statearr_79891_81931[(2)] = inst_79880);

(statearr_79891_81931[(1)] = (3));


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
});})(__81909,c__60388__auto___81923,G__79835_81910,G__79835_81911__$1,n__4613__auto___81908,jobs,results,process,async))
;
return ((function (__81909,switch__60365__auto__,c__60388__auto___81923,G__79835_81910,G__79835_81911__$1,n__4613__auto___81908,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____0 = (function (){
var statearr_79892 = [null,null,null,null,null,null,null];
(statearr_79892[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__);

(statearr_79892[(1)] = (1));

return statearr_79892;
});
var cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____1 = (function (state_79884){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_79884);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e79893){var ex__60369__auto__ = e79893;
var statearr_79894_81932 = state_79884;
(statearr_79894_81932[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_79884[(4)]))){
var statearr_79895_81933 = state_79884;
(statearr_79895_81933[(1)] = cljs.core.first((state_79884[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81935 = state_79884;
state_79884 = G__81935;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__ = function(state_79884){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____1.call(this,state_79884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__;
})()
;})(__81909,switch__60365__auto__,c__60388__auto___81923,G__79835_81910,G__79835_81911__$1,n__4613__auto___81908,jobs,results,process,async))
})();
var state__60390__auto__ = (function (){var statearr_79898 = f__60389__auto__();
(statearr_79898[(6)] = c__60388__auto___81923);

return statearr_79898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60390__auto__);
});})(__81909,c__60388__auto___81923,G__79835_81910,G__79835_81911__$1,n__4613__auto___81908,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__79835_81911__$1)].join('')));

}

var G__81937 = (__81909 + (1));
__81909 = G__81937;
continue;
} else {
}
break;
}

var c__60388__auto___81938 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60389__auto__ = (function (){var switch__60365__auto__ = (function (state_79920){
var state_val_79921 = (state_79920[(1)]);
if((state_val_79921 === (7))){
var inst_79916 = (state_79920[(2)]);
var state_79920__$1 = state_79920;
var statearr_79925_81939 = state_79920__$1;
(statearr_79925_81939[(2)] = inst_79916);

(statearr_79925_81939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79921 === (1))){
var state_79920__$1 = state_79920;
var statearr_79926_81940 = state_79920__$1;
(statearr_79926_81940[(2)] = null);

(statearr_79926_81940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79921 === (4))){
var inst_79901 = (state_79920[(7)]);
var inst_79901__$1 = (state_79920[(2)]);
var inst_79902 = (inst_79901__$1 == null);
var state_79920__$1 = (function (){var statearr_79927 = state_79920;
(statearr_79927[(7)] = inst_79901__$1);

return statearr_79927;
})();
if(cljs.core.truth_(inst_79902)){
var statearr_79928_81943 = state_79920__$1;
(statearr_79928_81943[(1)] = (5));

} else {
var statearr_79929_81944 = state_79920__$1;
(statearr_79929_81944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79921 === (6))){
var inst_79901 = (state_79920[(7)]);
var inst_79906 = (state_79920[(8)]);
var inst_79906__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_79907 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_79908 = [inst_79901,inst_79906__$1];
var inst_79909 = (new cljs.core.PersistentVector(null,2,(5),inst_79907,inst_79908,null));
var state_79920__$1 = (function (){var statearr_79932 = state_79920;
(statearr_79932[(8)] = inst_79906__$1);

return statearr_79932;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_79920__$1,(8),jobs,inst_79909);
} else {
if((state_val_79921 === (3))){
var inst_79918 = (state_79920[(2)]);
var state_79920__$1 = state_79920;
return cljs.core.async.impl.ioc_helpers.return_chan(state_79920__$1,inst_79918);
} else {
if((state_val_79921 === (2))){
var state_79920__$1 = state_79920;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79920__$1,(4),from);
} else {
if((state_val_79921 === (9))){
var inst_79913 = (state_79920[(2)]);
var state_79920__$1 = (function (){var statearr_79933 = state_79920;
(statearr_79933[(9)] = inst_79913);

return statearr_79933;
})();
var statearr_79936_81945 = state_79920__$1;
(statearr_79936_81945[(2)] = null);

(statearr_79936_81945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79921 === (5))){
var inst_79904 = cljs.core.async.close_BANG_(jobs);
var state_79920__$1 = state_79920;
var statearr_79937_81946 = state_79920__$1;
(statearr_79937_81946[(2)] = inst_79904);

(statearr_79937_81946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79921 === (8))){
var inst_79906 = (state_79920[(8)]);
var inst_79911 = (state_79920[(2)]);
var state_79920__$1 = (function (){var statearr_79938 = state_79920;
(statearr_79938[(10)] = inst_79911);

return statearr_79938;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_79920__$1,(9),results,inst_79906);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____0 = (function (){
var statearr_79939 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_79939[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__);

(statearr_79939[(1)] = (1));

return statearr_79939;
});
var cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____1 = (function (state_79920){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_79920);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e79940){var ex__60369__auto__ = e79940;
var statearr_79941_81947 = state_79920;
(statearr_79941_81947[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_79920[(4)]))){
var statearr_79943_81948 = state_79920;
(statearr_79943_81948[(1)] = cljs.core.first((state_79920[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81949 = state_79920;
state_79920 = G__81949;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__ = function(state_79920){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____1.call(this,state_79920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__;
})()
})();
var state__60390__auto__ = (function (){var statearr_79946 = f__60389__auto__();
(statearr_79946[(6)] = c__60388__auto___81938);

return statearr_79946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60390__auto__);
}));


var c__60388__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60389__auto__ = (function (){var switch__60365__auto__ = (function (state_79988){
var state_val_79989 = (state_79988[(1)]);
if((state_val_79989 === (7))){
var inst_79984 = (state_79988[(2)]);
var state_79988__$1 = state_79988;
var statearr_79990_81950 = state_79988__$1;
(statearr_79990_81950[(2)] = inst_79984);

(statearr_79990_81950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79989 === (20))){
var state_79988__$1 = state_79988;
var statearr_79994_81951 = state_79988__$1;
(statearr_79994_81951[(2)] = null);

(statearr_79994_81951[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79989 === (1))){
var state_79988__$1 = state_79988;
var statearr_79995_81952 = state_79988__$1;
(statearr_79995_81952[(2)] = null);

(statearr_79995_81952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79989 === (4))){
var inst_79949 = (state_79988[(7)]);
var inst_79949__$1 = (state_79988[(2)]);
var inst_79950 = (inst_79949__$1 == null);
var state_79988__$1 = (function (){var statearr_79996 = state_79988;
(statearr_79996[(7)] = inst_79949__$1);

return statearr_79996;
})();
if(cljs.core.truth_(inst_79950)){
var statearr_80001_81953 = state_79988__$1;
(statearr_80001_81953[(1)] = (5));

} else {
var statearr_80002_81954 = state_79988__$1;
(statearr_80002_81954[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79989 === (15))){
var inst_79962 = (state_79988[(8)]);
var state_79988__$1 = state_79988;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_79988__$1,(18),to,inst_79962);
} else {
if((state_val_79989 === (21))){
var inst_79979 = (state_79988[(2)]);
var state_79988__$1 = state_79988;
var statearr_80003_81955 = state_79988__$1;
(statearr_80003_81955[(2)] = inst_79979);

(statearr_80003_81955[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79989 === (13))){
var inst_79981 = (state_79988[(2)]);
var state_79988__$1 = (function (){var statearr_80007 = state_79988;
(statearr_80007[(9)] = inst_79981);

return statearr_80007;
})();
var statearr_80009_81956 = state_79988__$1;
(statearr_80009_81956[(2)] = null);

(statearr_80009_81956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79989 === (6))){
var inst_79949 = (state_79988[(7)]);
var state_79988__$1 = state_79988;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79988__$1,(11),inst_79949);
} else {
if((state_val_79989 === (17))){
var inst_79974 = (state_79988[(2)]);
var state_79988__$1 = state_79988;
if(cljs.core.truth_(inst_79974)){
var statearr_80010_81957 = state_79988__$1;
(statearr_80010_81957[(1)] = (19));

} else {
var statearr_80011_81958 = state_79988__$1;
(statearr_80011_81958[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79989 === (3))){
var inst_79986 = (state_79988[(2)]);
var state_79988__$1 = state_79988;
return cljs.core.async.impl.ioc_helpers.return_chan(state_79988__$1,inst_79986);
} else {
if((state_val_79989 === (12))){
var inst_79959 = (state_79988[(10)]);
var state_79988__$1 = state_79988;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79988__$1,(14),inst_79959);
} else {
if((state_val_79989 === (2))){
var state_79988__$1 = state_79988;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79988__$1,(4),results);
} else {
if((state_val_79989 === (19))){
var state_79988__$1 = state_79988;
var statearr_80020_81959 = state_79988__$1;
(statearr_80020_81959[(2)] = null);

(statearr_80020_81959[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79989 === (11))){
var inst_79959 = (state_79988[(2)]);
var state_79988__$1 = (function (){var statearr_80028 = state_79988;
(statearr_80028[(10)] = inst_79959);

return statearr_80028;
})();
var statearr_80029_81960 = state_79988__$1;
(statearr_80029_81960[(2)] = null);

(statearr_80029_81960[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79989 === (9))){
var state_79988__$1 = state_79988;
var statearr_80030_81961 = state_79988__$1;
(statearr_80030_81961[(2)] = null);

(statearr_80030_81961[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79989 === (5))){
var state_79988__$1 = state_79988;
if(cljs.core.truth_(close_QMARK_)){
var statearr_80034_81962 = state_79988__$1;
(statearr_80034_81962[(1)] = (8));

} else {
var statearr_80035_81963 = state_79988__$1;
(statearr_80035_81963[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79989 === (14))){
var inst_79962 = (state_79988[(8)]);
var inst_79962__$1 = (state_79988[(2)]);
var inst_79967 = (inst_79962__$1 == null);
var inst_79968 = cljs.core.not(inst_79967);
var state_79988__$1 = (function (){var statearr_80039 = state_79988;
(statearr_80039[(8)] = inst_79962__$1);

return statearr_80039;
})();
if(inst_79968){
var statearr_80040_81964 = state_79988__$1;
(statearr_80040_81964[(1)] = (15));

} else {
var statearr_80041_81965 = state_79988__$1;
(statearr_80041_81965[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79989 === (16))){
var state_79988__$1 = state_79988;
var statearr_80045_81966 = state_79988__$1;
(statearr_80045_81966[(2)] = false);

(statearr_80045_81966[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79989 === (10))){
var inst_79956 = (state_79988[(2)]);
var state_79988__$1 = state_79988;
var statearr_80046_81967 = state_79988__$1;
(statearr_80046_81967[(2)] = inst_79956);

(statearr_80046_81967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79989 === (18))){
var inst_79971 = (state_79988[(2)]);
var state_79988__$1 = state_79988;
var statearr_80048_81968 = state_79988__$1;
(statearr_80048_81968[(2)] = inst_79971);

(statearr_80048_81968[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79989 === (8))){
var inst_79953 = cljs.core.async.close_BANG_(to);
var state_79988__$1 = state_79988;
var statearr_80053_81969 = state_79988__$1;
(statearr_80053_81969[(2)] = inst_79953);

(statearr_80053_81969[(1)] = (10));


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
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____0 = (function (){
var statearr_80054 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_80054[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__);

(statearr_80054[(1)] = (1));

return statearr_80054;
});
var cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____1 = (function (state_79988){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_79988);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e80055){var ex__60369__auto__ = e80055;
var statearr_80057_81970 = state_79988;
(statearr_80057_81970[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_79988[(4)]))){
var statearr_80058_81971 = state_79988;
(statearr_80058_81971[(1)] = cljs.core.first((state_79988[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81972 = state_79988;
state_79988 = G__81972;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__ = function(state_79988){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____1.call(this,state_79988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__;
})()
})();
var state__60390__auto__ = (function (){var statearr_80067 = f__60389__auto__();
(statearr_80067[(6)] = c__60388__auto__);

return statearr_80067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60390__auto__);
}));

return c__60388__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__80072 = arguments.length;
switch (G__80072) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__80083 = arguments.length;
switch (G__80083) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__80089 = arguments.length;
switch (G__80089) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__60388__auto___81976 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60389__auto__ = (function (){var switch__60365__auto__ = (function (state_80123){
var state_val_80124 = (state_80123[(1)]);
if((state_val_80124 === (7))){
var inst_80119 = (state_80123[(2)]);
var state_80123__$1 = state_80123;
var statearr_80125_81977 = state_80123__$1;
(statearr_80125_81977[(2)] = inst_80119);

(statearr_80125_81977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80124 === (1))){
var state_80123__$1 = state_80123;
var statearr_80126_81978 = state_80123__$1;
(statearr_80126_81978[(2)] = null);

(statearr_80126_81978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80124 === (4))){
var inst_80097 = (state_80123[(7)]);
var inst_80097__$1 = (state_80123[(2)]);
var inst_80098 = (inst_80097__$1 == null);
var state_80123__$1 = (function (){var statearr_80127 = state_80123;
(statearr_80127[(7)] = inst_80097__$1);

return statearr_80127;
})();
if(cljs.core.truth_(inst_80098)){
var statearr_80128_81979 = state_80123__$1;
(statearr_80128_81979[(1)] = (5));

} else {
var statearr_80129_81980 = state_80123__$1;
(statearr_80129_81980[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80124 === (13))){
var state_80123__$1 = state_80123;
var statearr_80130_81981 = state_80123__$1;
(statearr_80130_81981[(2)] = null);

(statearr_80130_81981[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80124 === (6))){
var inst_80097 = (state_80123[(7)]);
var inst_80105 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_80097) : p.call(null,inst_80097));
var state_80123__$1 = state_80123;
if(cljs.core.truth_(inst_80105)){
var statearr_80131_81982 = state_80123__$1;
(statearr_80131_81982[(1)] = (9));

} else {
var statearr_80132_81983 = state_80123__$1;
(statearr_80132_81983[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80124 === (3))){
var inst_80121 = (state_80123[(2)]);
var state_80123__$1 = state_80123;
return cljs.core.async.impl.ioc_helpers.return_chan(state_80123__$1,inst_80121);
} else {
if((state_val_80124 === (12))){
var state_80123__$1 = state_80123;
var statearr_80133_81984 = state_80123__$1;
(statearr_80133_81984[(2)] = null);

(statearr_80133_81984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80124 === (2))){
var state_80123__$1 = state_80123;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80123__$1,(4),ch);
} else {
if((state_val_80124 === (11))){
var inst_80097 = (state_80123[(7)]);
var inst_80110 = (state_80123[(2)]);
var state_80123__$1 = state_80123;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_80123__$1,(8),inst_80110,inst_80097);
} else {
if((state_val_80124 === (9))){
var state_80123__$1 = state_80123;
var statearr_80134_81985 = state_80123__$1;
(statearr_80134_81985[(2)] = tc);

(statearr_80134_81985[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80124 === (5))){
var inst_80102 = cljs.core.async.close_BANG_(tc);
var inst_80103 = cljs.core.async.close_BANG_(fc);
var state_80123__$1 = (function (){var statearr_80135 = state_80123;
(statearr_80135[(8)] = inst_80102);

return statearr_80135;
})();
var statearr_80136_81986 = state_80123__$1;
(statearr_80136_81986[(2)] = inst_80103);

(statearr_80136_81986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80124 === (14))){
var inst_80117 = (state_80123[(2)]);
var state_80123__$1 = state_80123;
var statearr_80137_81987 = state_80123__$1;
(statearr_80137_81987[(2)] = inst_80117);

(statearr_80137_81987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80124 === (10))){
var state_80123__$1 = state_80123;
var statearr_80138_81988 = state_80123__$1;
(statearr_80138_81988[(2)] = fc);

(statearr_80138_81988[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80124 === (8))){
var inst_80112 = (state_80123[(2)]);
var state_80123__$1 = state_80123;
if(cljs.core.truth_(inst_80112)){
var statearr_80139_81989 = state_80123__$1;
(statearr_80139_81989[(1)] = (12));

} else {
var statearr_80140_81990 = state_80123__$1;
(statearr_80140_81990[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__60366__auto__ = null;
var cljs$core$async$state_machine__60366__auto____0 = (function (){
var statearr_80141 = [null,null,null,null,null,null,null,null,null];
(statearr_80141[(0)] = cljs$core$async$state_machine__60366__auto__);

(statearr_80141[(1)] = (1));

return statearr_80141;
});
var cljs$core$async$state_machine__60366__auto____1 = (function (state_80123){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_80123);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e80142){var ex__60369__auto__ = e80142;
var statearr_80143_81991 = state_80123;
(statearr_80143_81991[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_80123[(4)]))){
var statearr_80144_81992 = state_80123;
(statearr_80144_81992[(1)] = cljs.core.first((state_80123[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81993 = state_80123;
state_80123 = G__81993;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
cljs$core$async$state_machine__60366__auto__ = function(state_80123){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60366__auto____1.call(this,state_80123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60366__auto____0;
cljs$core$async$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60366__auto____1;
return cljs$core$async$state_machine__60366__auto__;
})()
})();
var state__60390__auto__ = (function (){var statearr_80145 = f__60389__auto__();
(statearr_80145[(6)] = c__60388__auto___81976);

return statearr_80145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60390__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__60388__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60389__auto__ = (function (){var switch__60365__auto__ = (function (state_80167){
var state_val_80168 = (state_80167[(1)]);
if((state_val_80168 === (7))){
var inst_80163 = (state_80167[(2)]);
var state_80167__$1 = state_80167;
var statearr_80169_81994 = state_80167__$1;
(statearr_80169_81994[(2)] = inst_80163);

(statearr_80169_81994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80168 === (1))){
var inst_80146 = init;
var inst_80147 = inst_80146;
var state_80167__$1 = (function (){var statearr_80170 = state_80167;
(statearr_80170[(7)] = inst_80147);

return statearr_80170;
})();
var statearr_80171_81995 = state_80167__$1;
(statearr_80171_81995[(2)] = null);

(statearr_80171_81995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80168 === (4))){
var inst_80150 = (state_80167[(8)]);
var inst_80150__$1 = (state_80167[(2)]);
var inst_80151 = (inst_80150__$1 == null);
var state_80167__$1 = (function (){var statearr_80172 = state_80167;
(statearr_80172[(8)] = inst_80150__$1);

return statearr_80172;
})();
if(cljs.core.truth_(inst_80151)){
var statearr_80173_81996 = state_80167__$1;
(statearr_80173_81996[(1)] = (5));

} else {
var statearr_80174_81997 = state_80167__$1;
(statearr_80174_81997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80168 === (6))){
var inst_80154 = (state_80167[(9)]);
var inst_80150 = (state_80167[(8)]);
var inst_80147 = (state_80167[(7)]);
var inst_80154__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_80147,inst_80150) : f.call(null,inst_80147,inst_80150));
var inst_80155 = cljs.core.reduced_QMARK_(inst_80154__$1);
var state_80167__$1 = (function (){var statearr_80177 = state_80167;
(statearr_80177[(9)] = inst_80154__$1);

return statearr_80177;
})();
if(inst_80155){
var statearr_80179_81998 = state_80167__$1;
(statearr_80179_81998[(1)] = (8));

} else {
var statearr_80180_81999 = state_80167__$1;
(statearr_80180_81999[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80168 === (3))){
var inst_80165 = (state_80167[(2)]);
var state_80167__$1 = state_80167;
return cljs.core.async.impl.ioc_helpers.return_chan(state_80167__$1,inst_80165);
} else {
if((state_val_80168 === (2))){
var state_80167__$1 = state_80167;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80167__$1,(4),ch);
} else {
if((state_val_80168 === (9))){
var inst_80154 = (state_80167[(9)]);
var inst_80147 = inst_80154;
var state_80167__$1 = (function (){var statearr_80181 = state_80167;
(statearr_80181[(7)] = inst_80147);

return statearr_80181;
})();
var statearr_80182_82000 = state_80167__$1;
(statearr_80182_82000[(2)] = null);

(statearr_80182_82000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80168 === (5))){
var inst_80147 = (state_80167[(7)]);
var state_80167__$1 = state_80167;
var statearr_80186_82001 = state_80167__$1;
(statearr_80186_82001[(2)] = inst_80147);

(statearr_80186_82001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80168 === (10))){
var inst_80161 = (state_80167[(2)]);
var state_80167__$1 = state_80167;
var statearr_80187_82002 = state_80167__$1;
(statearr_80187_82002[(2)] = inst_80161);

(statearr_80187_82002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80168 === (8))){
var inst_80154 = (state_80167[(9)]);
var inst_80157 = cljs.core.deref(inst_80154);
var state_80167__$1 = state_80167;
var statearr_80188_82003 = state_80167__$1;
(statearr_80188_82003[(2)] = inst_80157);

(statearr_80188_82003[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__60366__auto__ = null;
var cljs$core$async$reduce_$_state_machine__60366__auto____0 = (function (){
var statearr_80189 = [null,null,null,null,null,null,null,null,null,null];
(statearr_80189[(0)] = cljs$core$async$reduce_$_state_machine__60366__auto__);

(statearr_80189[(1)] = (1));

return statearr_80189;
});
var cljs$core$async$reduce_$_state_machine__60366__auto____1 = (function (state_80167){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_80167);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e80190){var ex__60369__auto__ = e80190;
var statearr_80191_82004 = state_80167;
(statearr_80191_82004[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_80167[(4)]))){
var statearr_80192_82005 = state_80167;
(statearr_80192_82005[(1)] = cljs.core.first((state_80167[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82006 = state_80167;
state_80167 = G__82006;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__60366__auto__ = function(state_80167){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__60366__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__60366__auto____1.call(this,state_80167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__60366__auto____0;
cljs$core$async$reduce_$_state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__60366__auto____1;
return cljs$core$async$reduce_$_state_machine__60366__auto__;
})()
})();
var state__60390__auto__ = (function (){var statearr_80193 = f__60389__auto__();
(statearr_80193[(6)] = c__60388__auto__);

return statearr_80193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60390__auto__);
}));

return c__60388__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__60388__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60389__auto__ = (function (){var switch__60365__auto__ = (function (state_80199){
var state_val_80200 = (state_80199[(1)]);
if((state_val_80200 === (1))){
var inst_80194 = cljs.core.async.reduce(f__$1,init,ch);
var state_80199__$1 = state_80199;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80199__$1,(2),inst_80194);
} else {
if((state_val_80200 === (2))){
var inst_80196 = (state_80199[(2)]);
var inst_80197 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_80196) : f__$1.call(null,inst_80196));
var state_80199__$1 = state_80199;
return cljs.core.async.impl.ioc_helpers.return_chan(state_80199__$1,inst_80197);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__60366__auto__ = null;
var cljs$core$async$transduce_$_state_machine__60366__auto____0 = (function (){
var statearr_80205 = [null,null,null,null,null,null,null];
(statearr_80205[(0)] = cljs$core$async$transduce_$_state_machine__60366__auto__);

(statearr_80205[(1)] = (1));

return statearr_80205;
});
var cljs$core$async$transduce_$_state_machine__60366__auto____1 = (function (state_80199){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_80199);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e80206){var ex__60369__auto__ = e80206;
var statearr_80207_82007 = state_80199;
(statearr_80207_82007[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_80199[(4)]))){
var statearr_80208_82008 = state_80199;
(statearr_80208_82008[(1)] = cljs.core.first((state_80199[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82009 = state_80199;
state_80199 = G__82009;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__60366__auto__ = function(state_80199){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__60366__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__60366__auto____1.call(this,state_80199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__60366__auto____0;
cljs$core$async$transduce_$_state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__60366__auto____1;
return cljs$core$async$transduce_$_state_machine__60366__auto__;
})()
})();
var state__60390__auto__ = (function (){var statearr_80210 = f__60389__auto__();
(statearr_80210[(6)] = c__60388__auto__);

return statearr_80210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60390__auto__);
}));

return c__60388__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__80213 = arguments.length;
switch (G__80213) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__60388__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60389__auto__ = (function (){var switch__60365__auto__ = (function (state_80238){
var state_val_80239 = (state_80238[(1)]);
if((state_val_80239 === (7))){
var inst_80220 = (state_80238[(2)]);
var state_80238__$1 = state_80238;
var statearr_80243_82011 = state_80238__$1;
(statearr_80243_82011[(2)] = inst_80220);

(statearr_80243_82011[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80239 === (1))){
var inst_80214 = cljs.core.seq(coll);
var inst_80215 = inst_80214;
var state_80238__$1 = (function (){var statearr_80244 = state_80238;
(statearr_80244[(7)] = inst_80215);

return statearr_80244;
})();
var statearr_80245_82012 = state_80238__$1;
(statearr_80245_82012[(2)] = null);

(statearr_80245_82012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80239 === (4))){
var inst_80215 = (state_80238[(7)]);
var inst_80218 = cljs.core.first(inst_80215);
var state_80238__$1 = state_80238;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_80238__$1,(7),ch,inst_80218);
} else {
if((state_val_80239 === (13))){
var inst_80232 = (state_80238[(2)]);
var state_80238__$1 = state_80238;
var statearr_80253_82013 = state_80238__$1;
(statearr_80253_82013[(2)] = inst_80232);

(statearr_80253_82013[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80239 === (6))){
var inst_80223 = (state_80238[(2)]);
var state_80238__$1 = state_80238;
if(cljs.core.truth_(inst_80223)){
var statearr_80254_82014 = state_80238__$1;
(statearr_80254_82014[(1)] = (8));

} else {
var statearr_80259_82015 = state_80238__$1;
(statearr_80259_82015[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80239 === (3))){
var inst_80236 = (state_80238[(2)]);
var state_80238__$1 = state_80238;
return cljs.core.async.impl.ioc_helpers.return_chan(state_80238__$1,inst_80236);
} else {
if((state_val_80239 === (12))){
var state_80238__$1 = state_80238;
var statearr_80277_82016 = state_80238__$1;
(statearr_80277_82016[(2)] = null);

(statearr_80277_82016[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80239 === (2))){
var inst_80215 = (state_80238[(7)]);
var state_80238__$1 = state_80238;
if(cljs.core.truth_(inst_80215)){
var statearr_80286_82017 = state_80238__$1;
(statearr_80286_82017[(1)] = (4));

} else {
var statearr_80288_82018 = state_80238__$1;
(statearr_80288_82018[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80239 === (11))){
var inst_80229 = cljs.core.async.close_BANG_(ch);
var state_80238__$1 = state_80238;
var statearr_80294_82019 = state_80238__$1;
(statearr_80294_82019[(2)] = inst_80229);

(statearr_80294_82019[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80239 === (9))){
var state_80238__$1 = state_80238;
if(cljs.core.truth_(close_QMARK_)){
var statearr_80295_82020 = state_80238__$1;
(statearr_80295_82020[(1)] = (11));

} else {
var statearr_80296_82021 = state_80238__$1;
(statearr_80296_82021[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80239 === (5))){
var inst_80215 = (state_80238[(7)]);
var state_80238__$1 = state_80238;
var statearr_80297_82022 = state_80238__$1;
(statearr_80297_82022[(2)] = inst_80215);

(statearr_80297_82022[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80239 === (10))){
var inst_80234 = (state_80238[(2)]);
var state_80238__$1 = state_80238;
var statearr_80298_82023 = state_80238__$1;
(statearr_80298_82023[(2)] = inst_80234);

(statearr_80298_82023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80239 === (8))){
var inst_80215 = (state_80238[(7)]);
var inst_80225 = cljs.core.next(inst_80215);
var inst_80215__$1 = inst_80225;
var state_80238__$1 = (function (){var statearr_80299 = state_80238;
(statearr_80299[(7)] = inst_80215__$1);

return statearr_80299;
})();
var statearr_80300_82024 = state_80238__$1;
(statearr_80300_82024[(2)] = null);

(statearr_80300_82024[(1)] = (2));


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
var cljs$core$async$state_machine__60366__auto__ = null;
var cljs$core$async$state_machine__60366__auto____0 = (function (){
var statearr_80301 = [null,null,null,null,null,null,null,null];
(statearr_80301[(0)] = cljs$core$async$state_machine__60366__auto__);

(statearr_80301[(1)] = (1));

return statearr_80301;
});
var cljs$core$async$state_machine__60366__auto____1 = (function (state_80238){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_80238);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e80303){var ex__60369__auto__ = e80303;
var statearr_80305_82025 = state_80238;
(statearr_80305_82025[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_80238[(4)]))){
var statearr_80306_82026 = state_80238;
(statearr_80306_82026[(1)] = cljs.core.first((state_80238[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82027 = state_80238;
state_80238 = G__82027;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
cljs$core$async$state_machine__60366__auto__ = function(state_80238){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60366__auto____1.call(this,state_80238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60366__auto____0;
cljs$core$async$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60366__auto____1;
return cljs$core$async$state_machine__60366__auto__;
})()
})();
var state__60390__auto__ = (function (){var statearr_80308 = f__60389__auto__();
(statearr_80308[(6)] = c__60388__auto__);

return statearr_80308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60390__auto__);
}));

return c__60388__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__80312 = arguments.length;
switch (G__80312) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_82029 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_82029(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_82031 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_82031(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_82032 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_82032(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_82035 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_82035(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async80406 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async80406 = (function (ch,cs,meta80407){
this.ch = ch;
this.cs = cs;
this.meta80407 = meta80407;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async80406.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_80408,meta80407__$1){
var self__ = this;
var _80408__$1 = this;
return (new cljs.core.async.t_cljs$core$async80406(self__.ch,self__.cs,meta80407__$1));
}));

(cljs.core.async.t_cljs$core$async80406.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_80408){
var self__ = this;
var _80408__$1 = this;
return self__.meta80407;
}));

(cljs.core.async.t_cljs$core$async80406.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async80406.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async80406.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async80406.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async80406.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async80406.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async80406.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta80407","meta80407",-1585035673,null)], null);
}));

(cljs.core.async.t_cljs$core$async80406.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async80406.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async80406");

(cljs.core.async.t_cljs$core$async80406.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async80406");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async80406.
 */
cljs.core.async.__GT_t_cljs$core$async80406 = (function cljs$core$async$mult_$___GT_t_cljs$core$async80406(ch__$1,cs__$1,meta80407){
return (new cljs.core.async.t_cljs$core$async80406(ch__$1,cs__$1,meta80407));
});

}

return (new cljs.core.async.t_cljs$core$async80406(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__60388__auto___82036 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60389__auto__ = (function (){var switch__60365__auto__ = (function (state_80558){
var state_val_80559 = (state_80558[(1)]);
if((state_val_80559 === (7))){
var inst_80554 = (state_80558[(2)]);
var state_80558__$1 = state_80558;
var statearr_80560_82037 = state_80558__$1;
(statearr_80560_82037[(2)] = inst_80554);

(statearr_80560_82037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80559 === (20))){
var inst_80459 = (state_80558[(7)]);
var inst_80471 = cljs.core.first(inst_80459);
var inst_80472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_80471,(0),null);
var inst_80473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_80471,(1),null);
var state_80558__$1 = (function (){var statearr_80561 = state_80558;
(statearr_80561[(8)] = inst_80472);

return statearr_80561;
})();
if(cljs.core.truth_(inst_80473)){
var statearr_80562_82038 = state_80558__$1;
(statearr_80562_82038[(1)] = (22));

} else {
var statearr_80563_82039 = state_80558__$1;
(statearr_80563_82039[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80559 === (27))){
var inst_80508 = (state_80558[(9)]);
var inst_80501 = (state_80558[(10)]);
var inst_80503 = (state_80558[(11)]);
var inst_80427 = (state_80558[(12)]);
var inst_80508__$1 = cljs.core._nth(inst_80501,inst_80503);
var inst_80509 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_80508__$1,inst_80427,done);
var state_80558__$1 = (function (){var statearr_80564 = state_80558;
(statearr_80564[(9)] = inst_80508__$1);

return statearr_80564;
})();
if(cljs.core.truth_(inst_80509)){
var statearr_80565_82040 = state_80558__$1;
(statearr_80565_82040[(1)] = (30));

} else {
var statearr_80566_82041 = state_80558__$1;
(statearr_80566_82041[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80559 === (1))){
var state_80558__$1 = state_80558;
var statearr_80567_82042 = state_80558__$1;
(statearr_80567_82042[(2)] = null);

(statearr_80567_82042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80559 === (24))){
var inst_80459 = (state_80558[(7)]);
var inst_80478 = (state_80558[(2)]);
var inst_80479 = cljs.core.next(inst_80459);
var inst_80436 = inst_80479;
var inst_80437 = null;
var inst_80438 = (0);
var inst_80439 = (0);
var state_80558__$1 = (function (){var statearr_80568 = state_80558;
(statearr_80568[(13)] = inst_80478);

(statearr_80568[(14)] = inst_80438);

(statearr_80568[(15)] = inst_80437);

(statearr_80568[(16)] = inst_80436);

(statearr_80568[(17)] = inst_80439);

return statearr_80568;
})();
var statearr_80569_82043 = state_80558__$1;
(statearr_80569_82043[(2)] = null);

(statearr_80569_82043[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80559 === (39))){
var state_80558__$1 = state_80558;
var statearr_80573_82044 = state_80558__$1;
(statearr_80573_82044[(2)] = null);

(statearr_80573_82044[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80559 === (4))){
var inst_80427 = (state_80558[(12)]);
var inst_80427__$1 = (state_80558[(2)]);
var inst_80428 = (inst_80427__$1 == null);
var state_80558__$1 = (function (){var statearr_80574 = state_80558;
(statearr_80574[(12)] = inst_80427__$1);

return statearr_80574;
})();
if(cljs.core.truth_(inst_80428)){
var statearr_80575_82045 = state_80558__$1;
(statearr_80575_82045[(1)] = (5));

} else {
var statearr_80576_82046 = state_80558__$1;
(statearr_80576_82046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80559 === (15))){
var inst_80438 = (state_80558[(14)]);
var inst_80437 = (state_80558[(15)]);
var inst_80436 = (state_80558[(16)]);
var inst_80439 = (state_80558[(17)]);
var inst_80455 = (state_80558[(2)]);
var inst_80456 = (inst_80439 + (1));
var tmp80570 = inst_80438;
var tmp80571 = inst_80437;
var tmp80572 = inst_80436;
var inst_80436__$1 = tmp80572;
var inst_80437__$1 = tmp80571;
var inst_80438__$1 = tmp80570;
var inst_80439__$1 = inst_80456;
var state_80558__$1 = (function (){var statearr_80577 = state_80558;
(statearr_80577[(14)] = inst_80438__$1);

(statearr_80577[(15)] = inst_80437__$1);

(statearr_80577[(16)] = inst_80436__$1);

(statearr_80577[(18)] = inst_80455);

(statearr_80577[(17)] = inst_80439__$1);

return statearr_80577;
})();
var statearr_80578_82047 = state_80558__$1;
(statearr_80578_82047[(2)] = null);

(statearr_80578_82047[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80559 === (21))){
var inst_80482 = (state_80558[(2)]);
var state_80558__$1 = state_80558;
var statearr_80582_82048 = state_80558__$1;
(statearr_80582_82048[(2)] = inst_80482);

(statearr_80582_82048[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80559 === (31))){
var inst_80508 = (state_80558[(9)]);
var inst_80512 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_80508);
var state_80558__$1 = state_80558;
var statearr_80583_82049 = state_80558__$1;
(statearr_80583_82049[(2)] = inst_80512);

(statearr_80583_82049[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80559 === (32))){
var inst_80502 = (state_80558[(19)]);
var inst_80500 = (state_80558[(20)]);
var inst_80501 = (state_80558[(10)]);
var inst_80503 = (state_80558[(11)]);
var inst_80514 = (state_80558[(2)]);
var inst_80515 = (inst_80503 + (1));
var tmp80579 = inst_80502;
var tmp80580 = inst_80500;
var tmp80581 = inst_80501;
var inst_80500__$1 = tmp80580;
var inst_80501__$1 = tmp80581;
var inst_80502__$1 = tmp80579;
var inst_80503__$1 = inst_80515;
var state_80558__$1 = (function (){var statearr_80584 = state_80558;
(statearr_80584[(19)] = inst_80502__$1);

(statearr_80584[(20)] = inst_80500__$1);

(statearr_80584[(10)] = inst_80501__$1);

(statearr_80584[(11)] = inst_80503__$1);

(statearr_80584[(21)] = inst_80514);

return statearr_80584;
})();
var statearr_80585_82050 = state_80558__$1;
(statearr_80585_82050[(2)] = null);

(statearr_80585_82050[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80559 === (40))){
var inst_80527 = (state_80558[(22)]);
var inst_80531 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_80527);
var state_80558__$1 = state_80558;
var statearr_80586_82051 = state_80558__$1;
(statearr_80586_82051[(2)] = inst_80531);

(statearr_80586_82051[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80559 === (33))){
var inst_80518 = (state_80558[(23)]);
var inst_80520 = cljs.core.chunked_seq_QMARK_(inst_80518);
var state_80558__$1 = state_80558;
if(inst_80520){
var statearr_80587_82052 = state_80558__$1;
(statearr_80587_82052[(1)] = (36));

} else {
var statearr_80588_82053 = state_80558__$1;
(statearr_80588_82053[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80559 === (13))){
var inst_80449 = (state_80558[(24)]);
var inst_80452 = cljs.core.async.close_BANG_(inst_80449);
var state_80558__$1 = state_80558;
var statearr_80589_82054 = state_80558__$1;
(statearr_80589_82054[(2)] = inst_80452);

(statearr_80589_82054[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80559 === (22))){
var inst_80472 = (state_80558[(8)]);
var inst_80475 = cljs.core.async.close_BANG_(inst_80472);
var state_80558__$1 = state_80558;
var statearr_80590_82055 = state_80558__$1;
(statearr_80590_82055[(2)] = inst_80475);

(statearr_80590_82055[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80559 === (36))){
var inst_80518 = (state_80558[(23)]);
var inst_80522 = cljs.core.chunk_first(inst_80518);
var inst_80523 = cljs.core.chunk_rest(inst_80518);
var inst_80524 = cljs.core.count(inst_80522);
var inst_80500 = inst_80523;
var inst_80501 = inst_80522;
var inst_80502 = inst_80524;
var inst_80503 = (0);
var state_80558__$1 = (function (){var statearr_80591 = state_80558;
(statearr_80591[(19)] = inst_80502);

(statearr_80591[(20)] = inst_80500);

(statearr_80591[(10)] = inst_80501);

(statearr_80591[(11)] = inst_80503);

return statearr_80591;
})();
var statearr_80592_82056 = state_80558__$1;
(statearr_80592_82056[(2)] = null);

(statearr_80592_82056[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80559 === (41))){
var inst_80518 = (state_80558[(23)]);
var inst_80533 = (state_80558[(2)]);
var inst_80534 = cljs.core.next(inst_80518);
var inst_80500 = inst_80534;
var inst_80501 = null;
var inst_80502 = (0);
var inst_80503 = (0);
var state_80558__$1 = (function (){var statearr_80593 = state_80558;
(statearr_80593[(19)] = inst_80502);

(statearr_80593[(25)] = inst_80533);

(statearr_80593[(20)] = inst_80500);

(statearr_80593[(10)] = inst_80501);

(statearr_80593[(11)] = inst_80503);

return statearr_80593;
})();
var statearr_80594_82057 = state_80558__$1;
(statearr_80594_82057[(2)] = null);

(statearr_80594_82057[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80559 === (43))){
var state_80558__$1 = state_80558;
var statearr_80597_82058 = state_80558__$1;
(statearr_80597_82058[(2)] = null);

(statearr_80597_82058[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80559 === (29))){
var inst_80542 = (state_80558[(2)]);
var state_80558__$1 = state_80558;
var statearr_80598_82059 = state_80558__$1;
(statearr_80598_82059[(2)] = inst_80542);

(statearr_80598_82059[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80559 === (44))){
var inst_80551 = (state_80558[(2)]);
var state_80558__$1 = (function (){var statearr_80599 = state_80558;
(statearr_80599[(26)] = inst_80551);

return statearr_80599;
})();
var statearr_80600_82060 = state_80558__$1;
(statearr_80600_82060[(2)] = null);

(statearr_80600_82060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80559 === (6))){
var inst_80492 = (state_80558[(27)]);
var inst_80491 = cljs.core.deref(cs);
var inst_80492__$1 = cljs.core.keys(inst_80491);
var inst_80493 = cljs.core.count(inst_80492__$1);
var inst_80494 = cljs.core.reset_BANG_(dctr,inst_80493);
var inst_80499 = cljs.core.seq(inst_80492__$1);
var inst_80500 = inst_80499;
var inst_80501 = null;
var inst_80502 = (0);
var inst_80503 = (0);
var state_80558__$1 = (function (){var statearr_80601 = state_80558;
(statearr_80601[(19)] = inst_80502);

(statearr_80601[(20)] = inst_80500);

(statearr_80601[(27)] = inst_80492__$1);

(statearr_80601[(28)] = inst_80494);

(statearr_80601[(10)] = inst_80501);

(statearr_80601[(11)] = inst_80503);

return statearr_80601;
})();
var statearr_80603_82061 = state_80558__$1;
(statearr_80603_82061[(2)] = null);

(statearr_80603_82061[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80559 === (28))){
var inst_80500 = (state_80558[(20)]);
var inst_80518 = (state_80558[(23)]);
var inst_80518__$1 = cljs.core.seq(inst_80500);
var state_80558__$1 = (function (){var statearr_80604 = state_80558;
(statearr_80604[(23)] = inst_80518__$1);

return statearr_80604;
})();
if(inst_80518__$1){
var statearr_80605_82062 = state_80558__$1;
(statearr_80605_82062[(1)] = (33));

} else {
var statearr_80606_82063 = state_80558__$1;
(statearr_80606_82063[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80559 === (25))){
var inst_80502 = (state_80558[(19)]);
var inst_80503 = (state_80558[(11)]);
var inst_80505 = (inst_80503 < inst_80502);
var inst_80506 = inst_80505;
var state_80558__$1 = state_80558;
if(cljs.core.truth_(inst_80506)){
var statearr_80607_82064 = state_80558__$1;
(statearr_80607_82064[(1)] = (27));

} else {
var statearr_80608_82065 = state_80558__$1;
(statearr_80608_82065[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80559 === (34))){
var state_80558__$1 = state_80558;
var statearr_80609_82066 = state_80558__$1;
(statearr_80609_82066[(2)] = null);

(statearr_80609_82066[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80559 === (17))){
var state_80558__$1 = state_80558;
var statearr_80610_82067 = state_80558__$1;
(statearr_80610_82067[(2)] = null);

(statearr_80610_82067[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80559 === (3))){
var inst_80556 = (state_80558[(2)]);
var state_80558__$1 = state_80558;
return cljs.core.async.impl.ioc_helpers.return_chan(state_80558__$1,inst_80556);
} else {
if((state_val_80559 === (12))){
var inst_80487 = (state_80558[(2)]);
var state_80558__$1 = state_80558;
var statearr_80611_82068 = state_80558__$1;
(statearr_80611_82068[(2)] = inst_80487);

(statearr_80611_82068[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80559 === (2))){
var state_80558__$1 = state_80558;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80558__$1,(4),ch);
} else {
if((state_val_80559 === (23))){
var state_80558__$1 = state_80558;
var statearr_80612_82069 = state_80558__$1;
(statearr_80612_82069[(2)] = null);

(statearr_80612_82069[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80559 === (35))){
var inst_80540 = (state_80558[(2)]);
var state_80558__$1 = state_80558;
var statearr_80614_82070 = state_80558__$1;
(statearr_80614_82070[(2)] = inst_80540);

(statearr_80614_82070[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80559 === (19))){
var inst_80459 = (state_80558[(7)]);
var inst_80463 = cljs.core.chunk_first(inst_80459);
var inst_80464 = cljs.core.chunk_rest(inst_80459);
var inst_80465 = cljs.core.count(inst_80463);
var inst_80436 = inst_80464;
var inst_80437 = inst_80463;
var inst_80438 = inst_80465;
var inst_80439 = (0);
var state_80558__$1 = (function (){var statearr_80616 = state_80558;
(statearr_80616[(14)] = inst_80438);

(statearr_80616[(15)] = inst_80437);

(statearr_80616[(16)] = inst_80436);

(statearr_80616[(17)] = inst_80439);

return statearr_80616;
})();
var statearr_80617_82072 = state_80558__$1;
(statearr_80617_82072[(2)] = null);

(statearr_80617_82072[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80559 === (11))){
var inst_80436 = (state_80558[(16)]);
var inst_80459 = (state_80558[(7)]);
var inst_80459__$1 = cljs.core.seq(inst_80436);
var state_80558__$1 = (function (){var statearr_80620 = state_80558;
(statearr_80620[(7)] = inst_80459__$1);

return statearr_80620;
})();
if(inst_80459__$1){
var statearr_80622_82073 = state_80558__$1;
(statearr_80622_82073[(1)] = (16));

} else {
var statearr_80623_82074 = state_80558__$1;
(statearr_80623_82074[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80559 === (9))){
var inst_80489 = (state_80558[(2)]);
var state_80558__$1 = state_80558;
var statearr_80624_82075 = state_80558__$1;
(statearr_80624_82075[(2)] = inst_80489);

(statearr_80624_82075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80559 === (5))){
var inst_80434 = cljs.core.deref(cs);
var inst_80435 = cljs.core.seq(inst_80434);
var inst_80436 = inst_80435;
var inst_80437 = null;
var inst_80438 = (0);
var inst_80439 = (0);
var state_80558__$1 = (function (){var statearr_80625 = state_80558;
(statearr_80625[(14)] = inst_80438);

(statearr_80625[(15)] = inst_80437);

(statearr_80625[(16)] = inst_80436);

(statearr_80625[(17)] = inst_80439);

return statearr_80625;
})();
var statearr_80626_82076 = state_80558__$1;
(statearr_80626_82076[(2)] = null);

(statearr_80626_82076[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80559 === (14))){
var state_80558__$1 = state_80558;
var statearr_80627_82077 = state_80558__$1;
(statearr_80627_82077[(2)] = null);

(statearr_80627_82077[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80559 === (45))){
var inst_80548 = (state_80558[(2)]);
var state_80558__$1 = state_80558;
var statearr_80628_82078 = state_80558__$1;
(statearr_80628_82078[(2)] = inst_80548);

(statearr_80628_82078[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80559 === (26))){
var inst_80492 = (state_80558[(27)]);
var inst_80544 = (state_80558[(2)]);
var inst_80545 = cljs.core.seq(inst_80492);
var state_80558__$1 = (function (){var statearr_80630 = state_80558;
(statearr_80630[(29)] = inst_80544);

return statearr_80630;
})();
if(inst_80545){
var statearr_80631_82079 = state_80558__$1;
(statearr_80631_82079[(1)] = (42));

} else {
var statearr_80632_82080 = state_80558__$1;
(statearr_80632_82080[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80559 === (16))){
var inst_80459 = (state_80558[(7)]);
var inst_80461 = cljs.core.chunked_seq_QMARK_(inst_80459);
var state_80558__$1 = state_80558;
if(inst_80461){
var statearr_80633_82081 = state_80558__$1;
(statearr_80633_82081[(1)] = (19));

} else {
var statearr_80634_82082 = state_80558__$1;
(statearr_80634_82082[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80559 === (38))){
var inst_80537 = (state_80558[(2)]);
var state_80558__$1 = state_80558;
var statearr_80635_82083 = state_80558__$1;
(statearr_80635_82083[(2)] = inst_80537);

(statearr_80635_82083[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80559 === (30))){
var state_80558__$1 = state_80558;
var statearr_80636_82086 = state_80558__$1;
(statearr_80636_82086[(2)] = null);

(statearr_80636_82086[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80559 === (10))){
var inst_80437 = (state_80558[(15)]);
var inst_80439 = (state_80558[(17)]);
var inst_80448 = cljs.core._nth(inst_80437,inst_80439);
var inst_80449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_80448,(0),null);
var inst_80450 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_80448,(1),null);
var state_80558__$1 = (function (){var statearr_80637 = state_80558;
(statearr_80637[(24)] = inst_80449);

return statearr_80637;
})();
if(cljs.core.truth_(inst_80450)){
var statearr_80638_82087 = state_80558__$1;
(statearr_80638_82087[(1)] = (13));

} else {
var statearr_80639_82088 = state_80558__$1;
(statearr_80639_82088[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80559 === (18))){
var inst_80485 = (state_80558[(2)]);
var state_80558__$1 = state_80558;
var statearr_80640_82089 = state_80558__$1;
(statearr_80640_82089[(2)] = inst_80485);

(statearr_80640_82089[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80559 === (42))){
var state_80558__$1 = state_80558;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80558__$1,(45),dchan);
} else {
if((state_val_80559 === (37))){
var inst_80527 = (state_80558[(22)]);
var inst_80518 = (state_80558[(23)]);
var inst_80427 = (state_80558[(12)]);
var inst_80527__$1 = cljs.core.first(inst_80518);
var inst_80528 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_80527__$1,inst_80427,done);
var state_80558__$1 = (function (){var statearr_80641 = state_80558;
(statearr_80641[(22)] = inst_80527__$1);

return statearr_80641;
})();
if(cljs.core.truth_(inst_80528)){
var statearr_80642_82090 = state_80558__$1;
(statearr_80642_82090[(1)] = (39));

} else {
var statearr_80643_82091 = state_80558__$1;
(statearr_80643_82091[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80559 === (8))){
var inst_80438 = (state_80558[(14)]);
var inst_80439 = (state_80558[(17)]);
var inst_80441 = (inst_80439 < inst_80438);
var inst_80442 = inst_80441;
var state_80558__$1 = state_80558;
if(cljs.core.truth_(inst_80442)){
var statearr_80645_82092 = state_80558__$1;
(statearr_80645_82092[(1)] = (10));

} else {
var statearr_80646_82093 = state_80558__$1;
(statearr_80646_82093[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__60366__auto__ = null;
var cljs$core$async$mult_$_state_machine__60366__auto____0 = (function (){
var statearr_80648 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_80648[(0)] = cljs$core$async$mult_$_state_machine__60366__auto__);

(statearr_80648[(1)] = (1));

return statearr_80648;
});
var cljs$core$async$mult_$_state_machine__60366__auto____1 = (function (state_80558){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_80558);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e80651){var ex__60369__auto__ = e80651;
var statearr_80652_82095 = state_80558;
(statearr_80652_82095[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_80558[(4)]))){
var statearr_80653_82096 = state_80558;
(statearr_80653_82096[(1)] = cljs.core.first((state_80558[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82097 = state_80558;
state_80558 = G__82097;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__60366__auto__ = function(state_80558){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__60366__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__60366__auto____1.call(this,state_80558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__60366__auto____0;
cljs$core$async$mult_$_state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__60366__auto____1;
return cljs$core$async$mult_$_state_machine__60366__auto__;
})()
})();
var state__60390__auto__ = (function (){var statearr_80657 = f__60389__auto__();
(statearr_80657[(6)] = c__60388__auto___82036);

return statearr_80657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60390__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__80659 = arguments.length;
switch (G__80659) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_82099 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_82099(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_82100 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_82100(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_82101 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_82101(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_82102 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_82102(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_82103 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_82103(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___82104 = arguments.length;
var i__4737__auto___82105 = (0);
while(true){
if((i__4737__auto___82105 < len__4736__auto___82104)){
args__4742__auto__.push((arguments[i__4737__auto___82105]));

var G__82106 = (i__4737__auto___82105 + (1));
i__4737__auto___82105 = G__82106;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__80685){
var map__80686 = p__80685;
var map__80686__$1 = (((((!((map__80686 == null))))?(((((map__80686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80686):map__80686);
var opts = map__80686__$1;
var statearr_80689_82107 = state;
(statearr_80689_82107[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_80690_82108 = state;
(statearr_80690_82108[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_80700_82109 = state;
(statearr_80700_82109[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq80678){
var G__80679 = cljs.core.first(seq80678);
var seq80678__$1 = cljs.core.next(seq80678);
var G__80680 = cljs.core.first(seq80678__$1);
var seq80678__$2 = cljs.core.next(seq80678__$1);
var G__80681 = cljs.core.first(seq80678__$2);
var seq80678__$3 = cljs.core.next(seq80678__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80679,G__80680,G__80681,seq80678__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async80703 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async80703 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta80704){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta80704 = meta80704;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async80703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_80705,meta80704__$1){
var self__ = this;
var _80705__$1 = this;
return (new cljs.core.async.t_cljs$core$async80703(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta80704__$1));
}));

(cljs.core.async.t_cljs$core$async80703.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_80705){
var self__ = this;
var _80705__$1 = this;
return self__.meta80704;
}));

(cljs.core.async.t_cljs$core$async80703.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async80703.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async80703.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async80703.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async80703.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async80703.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async80703.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async80703.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async80703.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta80704","meta80704",-89717306,null)], null);
}));

(cljs.core.async.t_cljs$core$async80703.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async80703.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async80703");

(cljs.core.async.t_cljs$core$async80703.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async80703");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async80703.
 */
cljs.core.async.__GT_t_cljs$core$async80703 = (function cljs$core$async$mix_$___GT_t_cljs$core$async80703(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta80704){
return (new cljs.core.async.t_cljs$core$async80703(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta80704));
});

}

return (new cljs.core.async.t_cljs$core$async80703(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__60388__auto___82110 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60389__auto__ = (function (){var switch__60365__auto__ = (function (state_80836){
var state_val_80837 = (state_80836[(1)]);
if((state_val_80837 === (7))){
var inst_80742 = (state_80836[(2)]);
var state_80836__$1 = state_80836;
var statearr_80838_82114 = state_80836__$1;
(statearr_80838_82114[(2)] = inst_80742);

(statearr_80838_82114[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80837 === (20))){
var inst_80754 = (state_80836[(7)]);
var state_80836__$1 = state_80836;
var statearr_80839_82115 = state_80836__$1;
(statearr_80839_82115[(2)] = inst_80754);

(statearr_80839_82115[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80837 === (27))){
var state_80836__$1 = state_80836;
var statearr_80840_82116 = state_80836__$1;
(statearr_80840_82116[(2)] = null);

(statearr_80840_82116[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80837 === (1))){
var inst_80727 = (state_80836[(8)]);
var inst_80727__$1 = calc_state();
var inst_80729 = (inst_80727__$1 == null);
var inst_80730 = cljs.core.not(inst_80729);
var state_80836__$1 = (function (){var statearr_80848 = state_80836;
(statearr_80848[(8)] = inst_80727__$1);

return statearr_80848;
})();
if(inst_80730){
var statearr_80849_82117 = state_80836__$1;
(statearr_80849_82117[(1)] = (2));

} else {
var statearr_80851_82118 = state_80836__$1;
(statearr_80851_82118[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80837 === (24))){
var inst_80788 = (state_80836[(9)]);
var inst_80779 = (state_80836[(10)]);
var inst_80809 = (state_80836[(11)]);
var inst_80809__$1 = (inst_80779.cljs$core$IFn$_invoke$arity$1 ? inst_80779.cljs$core$IFn$_invoke$arity$1(inst_80788) : inst_80779.call(null,inst_80788));
var state_80836__$1 = (function (){var statearr_80852 = state_80836;
(statearr_80852[(11)] = inst_80809__$1);

return statearr_80852;
})();
if(cljs.core.truth_(inst_80809__$1)){
var statearr_80853_82119 = state_80836__$1;
(statearr_80853_82119[(1)] = (29));

} else {
var statearr_80854_82121 = state_80836__$1;
(statearr_80854_82121[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80837 === (4))){
var inst_80745 = (state_80836[(2)]);
var state_80836__$1 = state_80836;
if(cljs.core.truth_(inst_80745)){
var statearr_80855_82123 = state_80836__$1;
(statearr_80855_82123[(1)] = (8));

} else {
var statearr_80856_82124 = state_80836__$1;
(statearr_80856_82124[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80837 === (15))){
var inst_80773 = (state_80836[(2)]);
var state_80836__$1 = state_80836;
if(cljs.core.truth_(inst_80773)){
var statearr_80857_82125 = state_80836__$1;
(statearr_80857_82125[(1)] = (19));

} else {
var statearr_80858_82126 = state_80836__$1;
(statearr_80858_82126[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80837 === (21))){
var inst_80778 = (state_80836[(12)]);
var inst_80778__$1 = (state_80836[(2)]);
var inst_80779 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_80778__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_80780 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_80778__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_80781 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_80778__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_80836__$1 = (function (){var statearr_80860 = state_80836;
(statearr_80860[(13)] = inst_80780);

(statearr_80860[(10)] = inst_80779);

(statearr_80860[(12)] = inst_80778__$1);

return statearr_80860;
})();
return cljs.core.async.ioc_alts_BANG_(state_80836__$1,(22),inst_80781);
} else {
if((state_val_80837 === (31))){
var inst_80818 = (state_80836[(2)]);
var state_80836__$1 = state_80836;
if(cljs.core.truth_(inst_80818)){
var statearr_80863_82128 = state_80836__$1;
(statearr_80863_82128[(1)] = (32));

} else {
var statearr_80864_82129 = state_80836__$1;
(statearr_80864_82129[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80837 === (32))){
var inst_80787 = (state_80836[(14)]);
var state_80836__$1 = state_80836;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_80836__$1,(35),out,inst_80787);
} else {
if((state_val_80837 === (33))){
var inst_80778 = (state_80836[(12)]);
var inst_80754 = inst_80778;
var state_80836__$1 = (function (){var statearr_80870 = state_80836;
(statearr_80870[(7)] = inst_80754);

return statearr_80870;
})();
var statearr_80875_82131 = state_80836__$1;
(statearr_80875_82131[(2)] = null);

(statearr_80875_82131[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80837 === (13))){
var inst_80754 = (state_80836[(7)]);
var inst_80762 = inst_80754.cljs$lang$protocol_mask$partition0$;
var inst_80763 = (inst_80762 & (64));
var inst_80764 = inst_80754.cljs$core$ISeq$;
var inst_80765 = (cljs.core.PROTOCOL_SENTINEL === inst_80764);
var inst_80766 = ((inst_80763) || (inst_80765));
var state_80836__$1 = state_80836;
if(cljs.core.truth_(inst_80766)){
var statearr_80876_82132 = state_80836__$1;
(statearr_80876_82132[(1)] = (16));

} else {
var statearr_80877_82133 = state_80836__$1;
(statearr_80877_82133[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80837 === (22))){
var inst_80787 = (state_80836[(14)]);
var inst_80788 = (state_80836[(9)]);
var inst_80786 = (state_80836[(2)]);
var inst_80787__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_80786,(0),null);
var inst_80788__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_80786,(1),null);
var inst_80793 = (inst_80787__$1 == null);
var inst_80794 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_80788__$1,change);
var inst_80797 = ((inst_80793) || (inst_80794));
var state_80836__$1 = (function (){var statearr_80879 = state_80836;
(statearr_80879[(14)] = inst_80787__$1);

(statearr_80879[(9)] = inst_80788__$1);

return statearr_80879;
})();
if(cljs.core.truth_(inst_80797)){
var statearr_80884_82134 = state_80836__$1;
(statearr_80884_82134[(1)] = (23));

} else {
var statearr_80885_82136 = state_80836__$1;
(statearr_80885_82136[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80837 === (36))){
var inst_80778 = (state_80836[(12)]);
var inst_80754 = inst_80778;
var state_80836__$1 = (function (){var statearr_80886 = state_80836;
(statearr_80886[(7)] = inst_80754);

return statearr_80886;
})();
var statearr_80887_82138 = state_80836__$1;
(statearr_80887_82138[(2)] = null);

(statearr_80887_82138[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80837 === (29))){
var inst_80809 = (state_80836[(11)]);
var state_80836__$1 = state_80836;
var statearr_80888_82139 = state_80836__$1;
(statearr_80888_82139[(2)] = inst_80809);

(statearr_80888_82139[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80837 === (6))){
var state_80836__$1 = state_80836;
var statearr_80889_82140 = state_80836__$1;
(statearr_80889_82140[(2)] = false);

(statearr_80889_82140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80837 === (28))){
var inst_80804 = (state_80836[(2)]);
var inst_80805 = calc_state();
var inst_80754 = inst_80805;
var state_80836__$1 = (function (){var statearr_80890 = state_80836;
(statearr_80890[(7)] = inst_80754);

(statearr_80890[(15)] = inst_80804);

return statearr_80890;
})();
var statearr_80892_82141 = state_80836__$1;
(statearr_80892_82141[(2)] = null);

(statearr_80892_82141[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80837 === (25))){
var inst_80832 = (state_80836[(2)]);
var state_80836__$1 = state_80836;
var statearr_80893_82142 = state_80836__$1;
(statearr_80893_82142[(2)] = inst_80832);

(statearr_80893_82142[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80837 === (34))){
var inst_80830 = (state_80836[(2)]);
var state_80836__$1 = state_80836;
var statearr_80899_82144 = state_80836__$1;
(statearr_80899_82144[(2)] = inst_80830);

(statearr_80899_82144[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80837 === (17))){
var state_80836__$1 = state_80836;
var statearr_80905_82145 = state_80836__$1;
(statearr_80905_82145[(2)] = false);

(statearr_80905_82145[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80837 === (3))){
var state_80836__$1 = state_80836;
var statearr_80906_82146 = state_80836__$1;
(statearr_80906_82146[(2)] = false);

(statearr_80906_82146[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80837 === (12))){
var inst_80834 = (state_80836[(2)]);
var state_80836__$1 = state_80836;
return cljs.core.async.impl.ioc_helpers.return_chan(state_80836__$1,inst_80834);
} else {
if((state_val_80837 === (2))){
var inst_80727 = (state_80836[(8)]);
var inst_80733 = inst_80727.cljs$lang$protocol_mask$partition0$;
var inst_80734 = (inst_80733 & (64));
var inst_80735 = inst_80727.cljs$core$ISeq$;
var inst_80737 = (cljs.core.PROTOCOL_SENTINEL === inst_80735);
var inst_80738 = ((inst_80734) || (inst_80737));
var state_80836__$1 = state_80836;
if(cljs.core.truth_(inst_80738)){
var statearr_80907_82149 = state_80836__$1;
(statearr_80907_82149[(1)] = (5));

} else {
var statearr_80908_82150 = state_80836__$1;
(statearr_80908_82150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80837 === (23))){
var inst_80787 = (state_80836[(14)]);
var inst_80799 = (inst_80787 == null);
var state_80836__$1 = state_80836;
if(cljs.core.truth_(inst_80799)){
var statearr_80911_82151 = state_80836__$1;
(statearr_80911_82151[(1)] = (26));

} else {
var statearr_80912_82153 = state_80836__$1;
(statearr_80912_82153[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80837 === (35))){
var inst_80821 = (state_80836[(2)]);
var state_80836__$1 = state_80836;
if(cljs.core.truth_(inst_80821)){
var statearr_80914_82156 = state_80836__$1;
(statearr_80914_82156[(1)] = (36));

} else {
var statearr_80915_82157 = state_80836__$1;
(statearr_80915_82157[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80837 === (19))){
var inst_80754 = (state_80836[(7)]);
var inst_80775 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_80754);
var state_80836__$1 = state_80836;
var statearr_80916_82158 = state_80836__$1;
(statearr_80916_82158[(2)] = inst_80775);

(statearr_80916_82158[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80837 === (11))){
var inst_80754 = (state_80836[(7)]);
var inst_80758 = (inst_80754 == null);
var inst_80759 = cljs.core.not(inst_80758);
var state_80836__$1 = state_80836;
if(inst_80759){
var statearr_80917_82159 = state_80836__$1;
(statearr_80917_82159[(1)] = (13));

} else {
var statearr_80918_82160 = state_80836__$1;
(statearr_80918_82160[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80837 === (9))){
var inst_80727 = (state_80836[(8)]);
var state_80836__$1 = state_80836;
var statearr_80921_82162 = state_80836__$1;
(statearr_80921_82162[(2)] = inst_80727);

(statearr_80921_82162[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80837 === (5))){
var state_80836__$1 = state_80836;
var statearr_80922_82164 = state_80836__$1;
(statearr_80922_82164[(2)] = true);

(statearr_80922_82164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80837 === (14))){
var state_80836__$1 = state_80836;
var statearr_80923_82165 = state_80836__$1;
(statearr_80923_82165[(2)] = false);

(statearr_80923_82165[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80837 === (26))){
var inst_80788 = (state_80836[(9)]);
var inst_80801 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_80788);
var state_80836__$1 = state_80836;
var statearr_80931_82166 = state_80836__$1;
(statearr_80931_82166[(2)] = inst_80801);

(statearr_80931_82166[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80837 === (16))){
var state_80836__$1 = state_80836;
var statearr_80933_82167 = state_80836__$1;
(statearr_80933_82167[(2)] = true);

(statearr_80933_82167[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80837 === (38))){
var inst_80826 = (state_80836[(2)]);
var state_80836__$1 = state_80836;
var statearr_80934_82168 = state_80836__$1;
(statearr_80934_82168[(2)] = inst_80826);

(statearr_80934_82168[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80837 === (30))){
var inst_80780 = (state_80836[(13)]);
var inst_80788 = (state_80836[(9)]);
var inst_80779 = (state_80836[(10)]);
var inst_80813 = cljs.core.empty_QMARK_(inst_80779);
var inst_80814 = (inst_80780.cljs$core$IFn$_invoke$arity$1 ? inst_80780.cljs$core$IFn$_invoke$arity$1(inst_80788) : inst_80780.call(null,inst_80788));
var inst_80815 = cljs.core.not(inst_80814);
var inst_80816 = ((inst_80813) && (inst_80815));
var state_80836__$1 = state_80836;
var statearr_80936_82169 = state_80836__$1;
(statearr_80936_82169[(2)] = inst_80816);

(statearr_80936_82169[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80837 === (10))){
var inst_80727 = (state_80836[(8)]);
var inst_80750 = (state_80836[(2)]);
var inst_80751 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_80750,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_80752 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_80750,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_80753 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_80750,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_80754 = inst_80727;
var state_80836__$1 = (function (){var statearr_80938 = state_80836;
(statearr_80938[(7)] = inst_80754);

(statearr_80938[(16)] = inst_80751);

(statearr_80938[(17)] = inst_80752);

(statearr_80938[(18)] = inst_80753);

return statearr_80938;
})();
var statearr_80939_82170 = state_80836__$1;
(statearr_80939_82170[(2)] = null);

(statearr_80939_82170[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80837 === (18))){
var inst_80770 = (state_80836[(2)]);
var state_80836__$1 = state_80836;
var statearr_80940_82172 = state_80836__$1;
(statearr_80940_82172[(2)] = inst_80770);

(statearr_80940_82172[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80837 === (37))){
var state_80836__$1 = state_80836;
var statearr_80941_82174 = state_80836__$1;
(statearr_80941_82174[(2)] = null);

(statearr_80941_82174[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80837 === (8))){
var inst_80727 = (state_80836[(8)]);
var inst_80747 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_80727);
var state_80836__$1 = state_80836;
var statearr_80942_82175 = state_80836__$1;
(statearr_80942_82175[(2)] = inst_80747);

(statearr_80942_82175[(1)] = (10));


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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__60366__auto__ = null;
var cljs$core$async$mix_$_state_machine__60366__auto____0 = (function (){
var statearr_80945 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_80945[(0)] = cljs$core$async$mix_$_state_machine__60366__auto__);

(statearr_80945[(1)] = (1));

return statearr_80945;
});
var cljs$core$async$mix_$_state_machine__60366__auto____1 = (function (state_80836){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_80836);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e80947){var ex__60369__auto__ = e80947;
var statearr_80948_82176 = state_80836;
(statearr_80948_82176[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_80836[(4)]))){
var statearr_80949_82177 = state_80836;
(statearr_80949_82177[(1)] = cljs.core.first((state_80836[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82178 = state_80836;
state_80836 = G__82178;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__60366__auto__ = function(state_80836){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__60366__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__60366__auto____1.call(this,state_80836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__60366__auto____0;
cljs$core$async$mix_$_state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__60366__auto____1;
return cljs$core$async$mix_$_state_machine__60366__auto__;
})()
})();
var state__60390__auto__ = (function (){var statearr_80956 = f__60389__auto__();
(statearr_80956[(6)] = c__60388__auto___82110);

return statearr_80956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60390__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_82181 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_82181(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_82182 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_82182(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_82183 = (function() {
var G__82184 = null;
var G__82184__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__82184__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__82184 = function(p,v){
switch(arguments.length){
case 1:
return G__82184__1.call(this,p);
case 2:
return G__82184__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__82184.cljs$core$IFn$_invoke$arity$1 = G__82184__1;
G__82184.cljs$core$IFn$_invoke$arity$2 = G__82184__2;
return G__82184;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__80981 = arguments.length;
switch (G__80981) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_82183(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_82183(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__80990 = arguments.length;
switch (G__80990) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__80985_SHARP_){
if(cljs.core.truth_((p1__80985_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__80985_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__80985_SHARP_.call(null,topic)))){
return p1__80985_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__80985_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async80994 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async80994 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta80995){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta80995 = meta80995;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async80994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_80996,meta80995__$1){
var self__ = this;
var _80996__$1 = this;
return (new cljs.core.async.t_cljs$core$async80994(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta80995__$1));
}));

(cljs.core.async.t_cljs$core$async80994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_80996){
var self__ = this;
var _80996__$1 = this;
return self__.meta80995;
}));

(cljs.core.async.t_cljs$core$async80994.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async80994.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async80994.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async80994.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async80994.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async80994.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async80994.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async80994.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta80995","meta80995",1798849708,null)], null);
}));

(cljs.core.async.t_cljs$core$async80994.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async80994.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async80994");

(cljs.core.async.t_cljs$core$async80994.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async80994");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async80994.
 */
cljs.core.async.__GT_t_cljs$core$async80994 = (function cljs$core$async$__GT_t_cljs$core$async80994(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta80995){
return (new cljs.core.async.t_cljs$core$async80994(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta80995));
});

}

return (new cljs.core.async.t_cljs$core$async80994(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__60388__auto___82203 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60389__auto__ = (function (){var switch__60365__auto__ = (function (state_81096){
var state_val_81097 = (state_81096[(1)]);
if((state_val_81097 === (7))){
var inst_81091 = (state_81096[(2)]);
var state_81096__$1 = state_81096;
var statearr_81103_82204 = state_81096__$1;
(statearr_81103_82204[(2)] = inst_81091);

(statearr_81103_82204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81097 === (20))){
var state_81096__$1 = state_81096;
var statearr_81105_82205 = state_81096__$1;
(statearr_81105_82205[(2)] = null);

(statearr_81105_82205[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81097 === (1))){
var state_81096__$1 = state_81096;
var statearr_81107_82206 = state_81096__$1;
(statearr_81107_82206[(2)] = null);

(statearr_81107_82206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81097 === (24))){
var inst_81073 = (state_81096[(7)]);
var inst_81083 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_81073);
var state_81096__$1 = state_81096;
var statearr_81109_82207 = state_81096__$1;
(statearr_81109_82207[(2)] = inst_81083);

(statearr_81109_82207[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81097 === (4))){
var inst_81019 = (state_81096[(8)]);
var inst_81019__$1 = (state_81096[(2)]);
var inst_81020 = (inst_81019__$1 == null);
var state_81096__$1 = (function (){var statearr_81110 = state_81096;
(statearr_81110[(8)] = inst_81019__$1);

return statearr_81110;
})();
if(cljs.core.truth_(inst_81020)){
var statearr_81111_82208 = state_81096__$1;
(statearr_81111_82208[(1)] = (5));

} else {
var statearr_81112_82209 = state_81096__$1;
(statearr_81112_82209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81097 === (15))){
var inst_81066 = (state_81096[(2)]);
var state_81096__$1 = state_81096;
var statearr_81114_82210 = state_81096__$1;
(statearr_81114_82210[(2)] = inst_81066);

(statearr_81114_82210[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81097 === (21))){
var inst_81088 = (state_81096[(2)]);
var state_81096__$1 = (function (){var statearr_81117 = state_81096;
(statearr_81117[(9)] = inst_81088);

return statearr_81117;
})();
var statearr_81118_82212 = state_81096__$1;
(statearr_81118_82212[(2)] = null);

(statearr_81118_82212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81097 === (13))){
var inst_81045 = (state_81096[(10)]);
var inst_81048 = cljs.core.chunked_seq_QMARK_(inst_81045);
var state_81096__$1 = state_81096;
if(inst_81048){
var statearr_81119_82213 = state_81096__$1;
(statearr_81119_82213[(1)] = (16));

} else {
var statearr_81120_82214 = state_81096__$1;
(statearr_81120_82214[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81097 === (22))){
var inst_81079 = (state_81096[(2)]);
var state_81096__$1 = state_81096;
if(cljs.core.truth_(inst_81079)){
var statearr_81121_82215 = state_81096__$1;
(statearr_81121_82215[(1)] = (23));

} else {
var statearr_81123_82216 = state_81096__$1;
(statearr_81123_82216[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81097 === (6))){
var inst_81075 = (state_81096[(11)]);
var inst_81019 = (state_81096[(8)]);
var inst_81073 = (state_81096[(7)]);
var inst_81073__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_81019) : topic_fn.call(null,inst_81019));
var inst_81074 = cljs.core.deref(mults);
var inst_81075__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_81074,inst_81073__$1);
var state_81096__$1 = (function (){var statearr_81126 = state_81096;
(statearr_81126[(11)] = inst_81075__$1);

(statearr_81126[(7)] = inst_81073__$1);

return statearr_81126;
})();
if(cljs.core.truth_(inst_81075__$1)){
var statearr_81128_82217 = state_81096__$1;
(statearr_81128_82217[(1)] = (19));

} else {
var statearr_81129_82218 = state_81096__$1;
(statearr_81129_82218[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81097 === (25))){
var inst_81085 = (state_81096[(2)]);
var state_81096__$1 = state_81096;
var statearr_81131_82219 = state_81096__$1;
(statearr_81131_82219[(2)] = inst_81085);

(statearr_81131_82219[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81097 === (17))){
var inst_81045 = (state_81096[(10)]);
var inst_81057 = cljs.core.first(inst_81045);
var inst_81058 = cljs.core.async.muxch_STAR_(inst_81057);
var inst_81059 = cljs.core.async.close_BANG_(inst_81058);
var inst_81060 = cljs.core.next(inst_81045);
var inst_81029 = inst_81060;
var inst_81030 = null;
var inst_81031 = (0);
var inst_81032 = (0);
var state_81096__$1 = (function (){var statearr_81133 = state_81096;
(statearr_81133[(12)] = inst_81032);

(statearr_81133[(13)] = inst_81029);

(statearr_81133[(14)] = inst_81030);

(statearr_81133[(15)] = inst_81059);

(statearr_81133[(16)] = inst_81031);

return statearr_81133;
})();
var statearr_81134_82222 = state_81096__$1;
(statearr_81134_82222[(2)] = null);

(statearr_81134_82222[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81097 === (3))){
var inst_81093 = (state_81096[(2)]);
var state_81096__$1 = state_81096;
return cljs.core.async.impl.ioc_helpers.return_chan(state_81096__$1,inst_81093);
} else {
if((state_val_81097 === (12))){
var inst_81068 = (state_81096[(2)]);
var state_81096__$1 = state_81096;
var statearr_81137_82223 = state_81096__$1;
(statearr_81137_82223[(2)] = inst_81068);

(statearr_81137_82223[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81097 === (2))){
var state_81096__$1 = state_81096;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_81096__$1,(4),ch);
} else {
if((state_val_81097 === (23))){
var state_81096__$1 = state_81096;
var statearr_81140_82224 = state_81096__$1;
(statearr_81140_82224[(2)] = null);

(statearr_81140_82224[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81097 === (19))){
var inst_81075 = (state_81096[(11)]);
var inst_81019 = (state_81096[(8)]);
var inst_81077 = cljs.core.async.muxch_STAR_(inst_81075);
var state_81096__$1 = state_81096;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_81096__$1,(22),inst_81077,inst_81019);
} else {
if((state_val_81097 === (11))){
var inst_81045 = (state_81096[(10)]);
var inst_81029 = (state_81096[(13)]);
var inst_81045__$1 = cljs.core.seq(inst_81029);
var state_81096__$1 = (function (){var statearr_81141 = state_81096;
(statearr_81141[(10)] = inst_81045__$1);

return statearr_81141;
})();
if(inst_81045__$1){
var statearr_81142_82227 = state_81096__$1;
(statearr_81142_82227[(1)] = (13));

} else {
var statearr_81143_82228 = state_81096__$1;
(statearr_81143_82228[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81097 === (9))){
var inst_81070 = (state_81096[(2)]);
var state_81096__$1 = state_81096;
var statearr_81145_82229 = state_81096__$1;
(statearr_81145_82229[(2)] = inst_81070);

(statearr_81145_82229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81097 === (5))){
var inst_81026 = cljs.core.deref(mults);
var inst_81027 = cljs.core.vals(inst_81026);
var inst_81028 = cljs.core.seq(inst_81027);
var inst_81029 = inst_81028;
var inst_81030 = null;
var inst_81031 = (0);
var inst_81032 = (0);
var state_81096__$1 = (function (){var statearr_81149 = state_81096;
(statearr_81149[(12)] = inst_81032);

(statearr_81149[(13)] = inst_81029);

(statearr_81149[(14)] = inst_81030);

(statearr_81149[(16)] = inst_81031);

return statearr_81149;
})();
var statearr_81150_82230 = state_81096__$1;
(statearr_81150_82230[(2)] = null);

(statearr_81150_82230[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81097 === (14))){
var state_81096__$1 = state_81096;
var statearr_81154_82231 = state_81096__$1;
(statearr_81154_82231[(2)] = null);

(statearr_81154_82231[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81097 === (16))){
var inst_81045 = (state_81096[(10)]);
var inst_81052 = cljs.core.chunk_first(inst_81045);
var inst_81053 = cljs.core.chunk_rest(inst_81045);
var inst_81054 = cljs.core.count(inst_81052);
var inst_81029 = inst_81053;
var inst_81030 = inst_81052;
var inst_81031 = inst_81054;
var inst_81032 = (0);
var state_81096__$1 = (function (){var statearr_81157 = state_81096;
(statearr_81157[(12)] = inst_81032);

(statearr_81157[(13)] = inst_81029);

(statearr_81157[(14)] = inst_81030);

(statearr_81157[(16)] = inst_81031);

return statearr_81157;
})();
var statearr_81158_82232 = state_81096__$1;
(statearr_81158_82232[(2)] = null);

(statearr_81158_82232[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81097 === (10))){
var inst_81032 = (state_81096[(12)]);
var inst_81029 = (state_81096[(13)]);
var inst_81030 = (state_81096[(14)]);
var inst_81031 = (state_81096[(16)]);
var inst_81037 = cljs.core._nth(inst_81030,inst_81032);
var inst_81039 = cljs.core.async.muxch_STAR_(inst_81037);
var inst_81040 = cljs.core.async.close_BANG_(inst_81039);
var inst_81041 = (inst_81032 + (1));
var tmp81151 = inst_81029;
var tmp81152 = inst_81030;
var tmp81153 = inst_81031;
var inst_81029__$1 = tmp81151;
var inst_81030__$1 = tmp81152;
var inst_81031__$1 = tmp81153;
var inst_81032__$1 = inst_81041;
var state_81096__$1 = (function (){var statearr_81161 = state_81096;
(statearr_81161[(12)] = inst_81032__$1);

(statearr_81161[(13)] = inst_81029__$1);

(statearr_81161[(17)] = inst_81040);

(statearr_81161[(14)] = inst_81030__$1);

(statearr_81161[(16)] = inst_81031__$1);

return statearr_81161;
})();
var statearr_81162_82233 = state_81096__$1;
(statearr_81162_82233[(2)] = null);

(statearr_81162_82233[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81097 === (18))){
var inst_81063 = (state_81096[(2)]);
var state_81096__$1 = state_81096;
var statearr_81164_82234 = state_81096__$1;
(statearr_81164_82234[(2)] = inst_81063);

(statearr_81164_82234[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81097 === (8))){
var inst_81032 = (state_81096[(12)]);
var inst_81031 = (state_81096[(16)]);
var inst_81034 = (inst_81032 < inst_81031);
var inst_81035 = inst_81034;
var state_81096__$1 = state_81096;
if(cljs.core.truth_(inst_81035)){
var statearr_81170_82237 = state_81096__$1;
(statearr_81170_82237[(1)] = (10));

} else {
var statearr_81171_82238 = state_81096__$1;
(statearr_81171_82238[(1)] = (11));

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
var cljs$core$async$state_machine__60366__auto__ = null;
var cljs$core$async$state_machine__60366__auto____0 = (function (){
var statearr_81173 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_81173[(0)] = cljs$core$async$state_machine__60366__auto__);

(statearr_81173[(1)] = (1));

return statearr_81173;
});
var cljs$core$async$state_machine__60366__auto____1 = (function (state_81096){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_81096);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e81177){var ex__60369__auto__ = e81177;
var statearr_81178_82242 = state_81096;
(statearr_81178_82242[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_81096[(4)]))){
var statearr_81179_82243 = state_81096;
(statearr_81179_82243[(1)] = cljs.core.first((state_81096[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82244 = state_81096;
state_81096 = G__82244;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
cljs$core$async$state_machine__60366__auto__ = function(state_81096){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60366__auto____1.call(this,state_81096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60366__auto____0;
cljs$core$async$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60366__auto____1;
return cljs$core$async$state_machine__60366__auto__;
})()
})();
var state__60390__auto__ = (function (){var statearr_81181 = f__60389__auto__();
(statearr_81181[(6)] = c__60388__auto___82203);

return statearr_81181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60390__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__81187 = arguments.length;
switch (G__81187) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__81193 = arguments.length;
switch (G__81193) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__81198 = arguments.length;
switch (G__81198) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__60388__auto___82248 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60389__auto__ = (function (){var switch__60365__auto__ = (function (state_81255){
var state_val_81256 = (state_81255[(1)]);
if((state_val_81256 === (7))){
var state_81255__$1 = state_81255;
var statearr_81258_82249 = state_81255__$1;
(statearr_81258_82249[(2)] = null);

(statearr_81258_82249[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81256 === (1))){
var state_81255__$1 = state_81255;
var statearr_81260_82250 = state_81255__$1;
(statearr_81260_82250[(2)] = null);

(statearr_81260_82250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81256 === (4))){
var inst_81207 = (state_81255[(7)]);
var inst_81208 = (state_81255[(8)]);
var inst_81210 = (inst_81208 < inst_81207);
var state_81255__$1 = state_81255;
if(cljs.core.truth_(inst_81210)){
var statearr_81261_82251 = state_81255__$1;
(statearr_81261_82251[(1)] = (6));

} else {
var statearr_81262_82252 = state_81255__$1;
(statearr_81262_82252[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81256 === (15))){
var inst_81240 = (state_81255[(9)]);
var inst_81245 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_81240);
var state_81255__$1 = state_81255;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_81255__$1,(17),out,inst_81245);
} else {
if((state_val_81256 === (13))){
var inst_81240 = (state_81255[(9)]);
var inst_81240__$1 = (state_81255[(2)]);
var inst_81241 = cljs.core.some(cljs.core.nil_QMARK_,inst_81240__$1);
var state_81255__$1 = (function (){var statearr_81263 = state_81255;
(statearr_81263[(9)] = inst_81240__$1);

return statearr_81263;
})();
if(cljs.core.truth_(inst_81241)){
var statearr_81264_82253 = state_81255__$1;
(statearr_81264_82253[(1)] = (14));

} else {
var statearr_81266_82254 = state_81255__$1;
(statearr_81266_82254[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81256 === (6))){
var state_81255__$1 = state_81255;
var statearr_81272_82255 = state_81255__$1;
(statearr_81272_82255[(2)] = null);

(statearr_81272_82255[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81256 === (17))){
var inst_81247 = (state_81255[(2)]);
var state_81255__$1 = (function (){var statearr_81277 = state_81255;
(statearr_81277[(10)] = inst_81247);

return statearr_81277;
})();
var statearr_81278_82256 = state_81255__$1;
(statearr_81278_82256[(2)] = null);

(statearr_81278_82256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81256 === (3))){
var inst_81252 = (state_81255[(2)]);
var state_81255__$1 = state_81255;
return cljs.core.async.impl.ioc_helpers.return_chan(state_81255__$1,inst_81252);
} else {
if((state_val_81256 === (12))){
var _ = (function (){var statearr_81280 = state_81255;
(statearr_81280[(4)] = cljs.core.rest((state_81255[(4)])));

return statearr_81280;
})();
var state_81255__$1 = state_81255;
var ex81276 = (state_81255__$1[(2)]);
var statearr_81281_82257 = state_81255__$1;
(statearr_81281_82257[(5)] = ex81276);


if((ex81276 instanceof Object)){
var statearr_81286_82258 = state_81255__$1;
(statearr_81286_82258[(1)] = (11));

(statearr_81286_82258[(5)] = null);

} else {
throw ex81276;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81256 === (2))){
var inst_81205 = cljs.core.reset_BANG_(dctr,cnt);
var inst_81207 = cnt;
var inst_81208 = (0);
var state_81255__$1 = (function (){var statearr_81288 = state_81255;
(statearr_81288[(11)] = inst_81205);

(statearr_81288[(7)] = inst_81207);

(statearr_81288[(8)] = inst_81208);

return statearr_81288;
})();
var statearr_81290_82259 = state_81255__$1;
(statearr_81290_82259[(2)] = null);

(statearr_81290_82259[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81256 === (11))){
var inst_81216 = (state_81255[(2)]);
var inst_81220 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_81255__$1 = (function (){var statearr_81291 = state_81255;
(statearr_81291[(12)] = inst_81216);

return statearr_81291;
})();
var statearr_81292_82260 = state_81255__$1;
(statearr_81292_82260[(2)] = inst_81220);

(statearr_81292_82260[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81256 === (9))){
var inst_81208 = (state_81255[(8)]);
var _ = (function (){var statearr_81293 = state_81255;
(statearr_81293[(4)] = cljs.core.cons((12),(state_81255[(4)])));

return statearr_81293;
})();
var inst_81226 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_81208) : chs__$1.call(null,inst_81208));
var inst_81227 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_81208) : done.call(null,inst_81208));
var inst_81228 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_81226,inst_81227);
var ___$1 = (function (){var statearr_81297 = state_81255;
(statearr_81297[(4)] = cljs.core.rest((state_81255[(4)])));

return statearr_81297;
})();
var state_81255__$1 = state_81255;
var statearr_81298_82262 = state_81255__$1;
(statearr_81298_82262[(2)] = inst_81228);

(statearr_81298_82262[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81256 === (5))){
var inst_81238 = (state_81255[(2)]);
var state_81255__$1 = (function (){var statearr_81303 = state_81255;
(statearr_81303[(13)] = inst_81238);

return statearr_81303;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_81255__$1,(13),dchan);
} else {
if((state_val_81256 === (14))){
var inst_81243 = cljs.core.async.close_BANG_(out);
var state_81255__$1 = state_81255;
var statearr_81307_82263 = state_81255__$1;
(statearr_81307_82263[(2)] = inst_81243);

(statearr_81307_82263[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81256 === (16))){
var inst_81250 = (state_81255[(2)]);
var state_81255__$1 = state_81255;
var statearr_81309_82264 = state_81255__$1;
(statearr_81309_82264[(2)] = inst_81250);

(statearr_81309_82264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81256 === (10))){
var inst_81208 = (state_81255[(8)]);
var inst_81231 = (state_81255[(2)]);
var inst_81232 = (inst_81208 + (1));
var inst_81208__$1 = inst_81232;
var state_81255__$1 = (function (){var statearr_81310 = state_81255;
(statearr_81310[(8)] = inst_81208__$1);

(statearr_81310[(14)] = inst_81231);

return statearr_81310;
})();
var statearr_81311_82265 = state_81255__$1;
(statearr_81311_82265[(2)] = null);

(statearr_81311_82265[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81256 === (8))){
var inst_81236 = (state_81255[(2)]);
var state_81255__$1 = state_81255;
var statearr_81312_82266 = state_81255__$1;
(statearr_81312_82266[(2)] = inst_81236);

(statearr_81312_82266[(1)] = (5));


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
}
});
return (function() {
var cljs$core$async$state_machine__60366__auto__ = null;
var cljs$core$async$state_machine__60366__auto____0 = (function (){
var statearr_81313 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_81313[(0)] = cljs$core$async$state_machine__60366__auto__);

(statearr_81313[(1)] = (1));

return statearr_81313;
});
var cljs$core$async$state_machine__60366__auto____1 = (function (state_81255){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_81255);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e81314){var ex__60369__auto__ = e81314;
var statearr_81315_82268 = state_81255;
(statearr_81315_82268[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_81255[(4)]))){
var statearr_81317_82269 = state_81255;
(statearr_81317_82269[(1)] = cljs.core.first((state_81255[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82270 = state_81255;
state_81255 = G__82270;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
cljs$core$async$state_machine__60366__auto__ = function(state_81255){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60366__auto____1.call(this,state_81255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60366__auto____0;
cljs$core$async$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60366__auto____1;
return cljs$core$async$state_machine__60366__auto__;
})()
})();
var state__60390__auto__ = (function (){var statearr_81318 = f__60389__auto__();
(statearr_81318[(6)] = c__60388__auto___82248);

return statearr_81318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60390__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__81322 = arguments.length;
switch (G__81322) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__60388__auto___82274 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60389__auto__ = (function (){var switch__60365__auto__ = (function (state_81356){
var state_val_81357 = (state_81356[(1)]);
if((state_val_81357 === (7))){
var inst_81334 = (state_81356[(7)]);
var inst_81335 = (state_81356[(8)]);
var inst_81334__$1 = (state_81356[(2)]);
var inst_81335__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_81334__$1,(0),null);
var inst_81336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_81334__$1,(1),null);
var inst_81337 = (inst_81335__$1 == null);
var state_81356__$1 = (function (){var statearr_81358 = state_81356;
(statearr_81358[(7)] = inst_81334__$1);

(statearr_81358[(9)] = inst_81336);

(statearr_81358[(8)] = inst_81335__$1);

return statearr_81358;
})();
if(cljs.core.truth_(inst_81337)){
var statearr_81359_82275 = state_81356__$1;
(statearr_81359_82275[(1)] = (8));

} else {
var statearr_81361_82276 = state_81356__$1;
(statearr_81361_82276[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81357 === (1))){
var inst_81324 = cljs.core.vec(chs);
var inst_81325 = inst_81324;
var state_81356__$1 = (function (){var statearr_81362 = state_81356;
(statearr_81362[(10)] = inst_81325);

return statearr_81362;
})();
var statearr_81363_82277 = state_81356__$1;
(statearr_81363_82277[(2)] = null);

(statearr_81363_82277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81357 === (4))){
var inst_81325 = (state_81356[(10)]);
var state_81356__$1 = state_81356;
return cljs.core.async.ioc_alts_BANG_(state_81356__$1,(7),inst_81325);
} else {
if((state_val_81357 === (6))){
var inst_81351 = (state_81356[(2)]);
var state_81356__$1 = state_81356;
var statearr_81365_82280 = state_81356__$1;
(statearr_81365_82280[(2)] = inst_81351);

(statearr_81365_82280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81357 === (3))){
var inst_81353 = (state_81356[(2)]);
var state_81356__$1 = state_81356;
return cljs.core.async.impl.ioc_helpers.return_chan(state_81356__$1,inst_81353);
} else {
if((state_val_81357 === (2))){
var inst_81325 = (state_81356[(10)]);
var inst_81327 = cljs.core.count(inst_81325);
var inst_81328 = (inst_81327 > (0));
var state_81356__$1 = state_81356;
if(cljs.core.truth_(inst_81328)){
var statearr_81368_82281 = state_81356__$1;
(statearr_81368_82281[(1)] = (4));

} else {
var statearr_81369_82282 = state_81356__$1;
(statearr_81369_82282[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81357 === (11))){
var inst_81325 = (state_81356[(10)]);
var inst_81344 = (state_81356[(2)]);
var tmp81366 = inst_81325;
var inst_81325__$1 = tmp81366;
var state_81356__$1 = (function (){var statearr_81370 = state_81356;
(statearr_81370[(10)] = inst_81325__$1);

(statearr_81370[(11)] = inst_81344);

return statearr_81370;
})();
var statearr_81371_82283 = state_81356__$1;
(statearr_81371_82283[(2)] = null);

(statearr_81371_82283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81357 === (9))){
var inst_81335 = (state_81356[(8)]);
var state_81356__$1 = state_81356;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_81356__$1,(11),out,inst_81335);
} else {
if((state_val_81357 === (5))){
var inst_81349 = cljs.core.async.close_BANG_(out);
var state_81356__$1 = state_81356;
var statearr_81374_82284 = state_81356__$1;
(statearr_81374_82284[(2)] = inst_81349);

(statearr_81374_82284[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81357 === (10))){
var inst_81347 = (state_81356[(2)]);
var state_81356__$1 = state_81356;
var statearr_81375_82285 = state_81356__$1;
(statearr_81375_82285[(2)] = inst_81347);

(statearr_81375_82285[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81357 === (8))){
var inst_81334 = (state_81356[(7)]);
var inst_81336 = (state_81356[(9)]);
var inst_81325 = (state_81356[(10)]);
var inst_81335 = (state_81356[(8)]);
var inst_81339 = (function (){var cs = inst_81325;
var vec__81330 = inst_81334;
var v = inst_81335;
var c = inst_81336;
return (function (p1__81319_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__81319_SHARP_);
});
})();
var inst_81340 = cljs.core.filterv(inst_81339,inst_81325);
var inst_81325__$1 = inst_81340;
var state_81356__$1 = (function (){var statearr_81377 = state_81356;
(statearr_81377[(10)] = inst_81325__$1);

return statearr_81377;
})();
var statearr_81378_82286 = state_81356__$1;
(statearr_81378_82286[(2)] = null);

(statearr_81378_82286[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__60366__auto__ = null;
var cljs$core$async$state_machine__60366__auto____0 = (function (){
var statearr_81380 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_81380[(0)] = cljs$core$async$state_machine__60366__auto__);

(statearr_81380[(1)] = (1));

return statearr_81380;
});
var cljs$core$async$state_machine__60366__auto____1 = (function (state_81356){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_81356);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e81381){var ex__60369__auto__ = e81381;
var statearr_81383_82287 = state_81356;
(statearr_81383_82287[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_81356[(4)]))){
var statearr_81384_82288 = state_81356;
(statearr_81384_82288[(1)] = cljs.core.first((state_81356[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82289 = state_81356;
state_81356 = G__82289;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
cljs$core$async$state_machine__60366__auto__ = function(state_81356){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60366__auto____1.call(this,state_81356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60366__auto____0;
cljs$core$async$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60366__auto____1;
return cljs$core$async$state_machine__60366__auto__;
})()
})();
var state__60390__auto__ = (function (){var statearr_81386 = f__60389__auto__();
(statearr_81386[(6)] = c__60388__auto___82274);

return statearr_81386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60390__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__81390 = arguments.length;
switch (G__81390) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__60388__auto___82291 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60389__auto__ = (function (){var switch__60365__auto__ = (function (state_81416){
var state_val_81417 = (state_81416[(1)]);
if((state_val_81417 === (7))){
var inst_81398 = (state_81416[(7)]);
var inst_81398__$1 = (state_81416[(2)]);
var inst_81399 = (inst_81398__$1 == null);
var inst_81400 = cljs.core.not(inst_81399);
var state_81416__$1 = (function (){var statearr_81422 = state_81416;
(statearr_81422[(7)] = inst_81398__$1);

return statearr_81422;
})();
if(inst_81400){
var statearr_81423_82292 = state_81416__$1;
(statearr_81423_82292[(1)] = (8));

} else {
var statearr_81424_82293 = state_81416__$1;
(statearr_81424_82293[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81417 === (1))){
var inst_81392 = (0);
var state_81416__$1 = (function (){var statearr_81425 = state_81416;
(statearr_81425[(8)] = inst_81392);

return statearr_81425;
})();
var statearr_81426_82294 = state_81416__$1;
(statearr_81426_82294[(2)] = null);

(statearr_81426_82294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81417 === (4))){
var state_81416__$1 = state_81416;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_81416__$1,(7),ch);
} else {
if((state_val_81417 === (6))){
var inst_81411 = (state_81416[(2)]);
var state_81416__$1 = state_81416;
var statearr_81428_82295 = state_81416__$1;
(statearr_81428_82295[(2)] = inst_81411);

(statearr_81428_82295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81417 === (3))){
var inst_81413 = (state_81416[(2)]);
var inst_81414 = cljs.core.async.close_BANG_(out);
var state_81416__$1 = (function (){var statearr_81431 = state_81416;
(statearr_81431[(9)] = inst_81413);

return statearr_81431;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_81416__$1,inst_81414);
} else {
if((state_val_81417 === (2))){
var inst_81392 = (state_81416[(8)]);
var inst_81395 = (inst_81392 < n);
var state_81416__$1 = state_81416;
if(cljs.core.truth_(inst_81395)){
var statearr_81432_82296 = state_81416__$1;
(statearr_81432_82296[(1)] = (4));

} else {
var statearr_81433_82297 = state_81416__$1;
(statearr_81433_82297[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81417 === (11))){
var inst_81392 = (state_81416[(8)]);
var inst_81403 = (state_81416[(2)]);
var inst_81404 = (inst_81392 + (1));
var inst_81392__$1 = inst_81404;
var state_81416__$1 = (function (){var statearr_81435 = state_81416;
(statearr_81435[(10)] = inst_81403);

(statearr_81435[(8)] = inst_81392__$1);

return statearr_81435;
})();
var statearr_81436_82298 = state_81416__$1;
(statearr_81436_82298[(2)] = null);

(statearr_81436_82298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81417 === (9))){
var state_81416__$1 = state_81416;
var statearr_81437_82299 = state_81416__$1;
(statearr_81437_82299[(2)] = null);

(statearr_81437_82299[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81417 === (5))){
var state_81416__$1 = state_81416;
var statearr_81438_82300 = state_81416__$1;
(statearr_81438_82300[(2)] = null);

(statearr_81438_82300[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81417 === (10))){
var inst_81408 = (state_81416[(2)]);
var state_81416__$1 = state_81416;
var statearr_81441_82301 = state_81416__$1;
(statearr_81441_82301[(2)] = inst_81408);

(statearr_81441_82301[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81417 === (8))){
var inst_81398 = (state_81416[(7)]);
var state_81416__$1 = state_81416;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_81416__$1,(11),out,inst_81398);
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
});
return (function() {
var cljs$core$async$state_machine__60366__auto__ = null;
var cljs$core$async$state_machine__60366__auto____0 = (function (){
var statearr_81443 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_81443[(0)] = cljs$core$async$state_machine__60366__auto__);

(statearr_81443[(1)] = (1));

return statearr_81443;
});
var cljs$core$async$state_machine__60366__auto____1 = (function (state_81416){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_81416);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e81444){var ex__60369__auto__ = e81444;
var statearr_81445_82302 = state_81416;
(statearr_81445_82302[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_81416[(4)]))){
var statearr_81446_82303 = state_81416;
(statearr_81446_82303[(1)] = cljs.core.first((state_81416[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82304 = state_81416;
state_81416 = G__82304;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
cljs$core$async$state_machine__60366__auto__ = function(state_81416){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60366__auto____1.call(this,state_81416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60366__auto____0;
cljs$core$async$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60366__auto____1;
return cljs$core$async$state_machine__60366__auto__;
})()
})();
var state__60390__auto__ = (function (){var statearr_81448 = f__60389__auto__();
(statearr_81448[(6)] = c__60388__auto___82291);

return statearr_81448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60390__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async81450 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async81450 = (function (f,ch,meta81451){
this.f = f;
this.ch = ch;
this.meta81451 = meta81451;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async81450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_81452,meta81451__$1){
var self__ = this;
var _81452__$1 = this;
return (new cljs.core.async.t_cljs$core$async81450(self__.f,self__.ch,meta81451__$1));
}));

(cljs.core.async.t_cljs$core$async81450.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_81452){
var self__ = this;
var _81452__$1 = this;
return self__.meta81451;
}));

(cljs.core.async.t_cljs$core$async81450.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async81450.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async81450.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async81450.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async81450.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async81457 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async81457 = (function (f,ch,meta81451,_,fn1,meta81458){
this.f = f;
this.ch = ch;
this.meta81451 = meta81451;
this._ = _;
this.fn1 = fn1;
this.meta81458 = meta81458;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async81457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_81459,meta81458__$1){
var self__ = this;
var _81459__$1 = this;
return (new cljs.core.async.t_cljs$core$async81457(self__.f,self__.ch,self__.meta81451,self__._,self__.fn1,meta81458__$1));
}));

(cljs.core.async.t_cljs$core$async81457.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_81459){
var self__ = this;
var _81459__$1 = this;
return self__.meta81458;
}));

(cljs.core.async.t_cljs$core$async81457.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async81457.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async81457.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async81457.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__81449_SHARP_){
var G__81461 = (((p1__81449_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__81449_SHARP_) : self__.f.call(null,p1__81449_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__81461) : f1.call(null,G__81461));
});
}));

(cljs.core.async.t_cljs$core$async81457.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta81451","meta81451",-754856528,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async81450","cljs.core.async/t_cljs$core$async81450",-1929189736,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta81458","meta81458",-1371054861,null)], null);
}));

(cljs.core.async.t_cljs$core$async81457.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async81457.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async81457");

(cljs.core.async.t_cljs$core$async81457.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async81457");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async81457.
 */
cljs.core.async.__GT_t_cljs$core$async81457 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async81457(f__$1,ch__$1,meta81451__$1,___$2,fn1__$1,meta81458){
return (new cljs.core.async.t_cljs$core$async81457(f__$1,ch__$1,meta81451__$1,___$2,fn1__$1,meta81458));
});

}

return (new cljs.core.async.t_cljs$core$async81457(self__.f,self__.ch,self__.meta81451,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__81466 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__81466) : self__.f.call(null,G__81466));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async81450.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async81450.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async81450.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta81451","meta81451",-754856528,null)], null);
}));

(cljs.core.async.t_cljs$core$async81450.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async81450.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async81450");

(cljs.core.async.t_cljs$core$async81450.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async81450");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async81450.
 */
cljs.core.async.__GT_t_cljs$core$async81450 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async81450(f__$1,ch__$1,meta81451){
return (new cljs.core.async.t_cljs$core$async81450(f__$1,ch__$1,meta81451));
});

}

return (new cljs.core.async.t_cljs$core$async81450(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async81469 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async81469 = (function (f,ch,meta81470){
this.f = f;
this.ch = ch;
this.meta81470 = meta81470;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async81469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_81471,meta81470__$1){
var self__ = this;
var _81471__$1 = this;
return (new cljs.core.async.t_cljs$core$async81469(self__.f,self__.ch,meta81470__$1));
}));

(cljs.core.async.t_cljs$core$async81469.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_81471){
var self__ = this;
var _81471__$1 = this;
return self__.meta81470;
}));

(cljs.core.async.t_cljs$core$async81469.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async81469.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async81469.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async81469.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async81469.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async81469.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async81469.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta81470","meta81470",152337089,null)], null);
}));

(cljs.core.async.t_cljs$core$async81469.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async81469.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async81469");

(cljs.core.async.t_cljs$core$async81469.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async81469");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async81469.
 */
cljs.core.async.__GT_t_cljs$core$async81469 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async81469(f__$1,ch__$1,meta81470){
return (new cljs.core.async.t_cljs$core$async81469(f__$1,ch__$1,meta81470));
});

}

return (new cljs.core.async.t_cljs$core$async81469(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async81478 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async81478 = (function (p,ch,meta81479){
this.p = p;
this.ch = ch;
this.meta81479 = meta81479;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async81478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_81480,meta81479__$1){
var self__ = this;
var _81480__$1 = this;
return (new cljs.core.async.t_cljs$core$async81478(self__.p,self__.ch,meta81479__$1));
}));

(cljs.core.async.t_cljs$core$async81478.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_81480){
var self__ = this;
var _81480__$1 = this;
return self__.meta81479;
}));

(cljs.core.async.t_cljs$core$async81478.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async81478.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async81478.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async81478.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async81478.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async81478.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async81478.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async81478.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta81479","meta81479",401445567,null)], null);
}));

(cljs.core.async.t_cljs$core$async81478.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async81478.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async81478");

(cljs.core.async.t_cljs$core$async81478.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async81478");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async81478.
 */
cljs.core.async.__GT_t_cljs$core$async81478 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async81478(p__$1,ch__$1,meta81479){
return (new cljs.core.async.t_cljs$core$async81478(p__$1,ch__$1,meta81479));
});

}

return (new cljs.core.async.t_cljs$core$async81478(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__81488 = arguments.length;
switch (G__81488) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__60388__auto___82309 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60389__auto__ = (function (){var switch__60365__auto__ = (function (state_81511){
var state_val_81512 = (state_81511[(1)]);
if((state_val_81512 === (7))){
var inst_81507 = (state_81511[(2)]);
var state_81511__$1 = state_81511;
var statearr_81513_82310 = state_81511__$1;
(statearr_81513_82310[(2)] = inst_81507);

(statearr_81513_82310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81512 === (1))){
var state_81511__$1 = state_81511;
var statearr_81517_82311 = state_81511__$1;
(statearr_81517_82311[(2)] = null);

(statearr_81517_82311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81512 === (4))){
var inst_81491 = (state_81511[(7)]);
var inst_81491__$1 = (state_81511[(2)]);
var inst_81493 = (inst_81491__$1 == null);
var state_81511__$1 = (function (){var statearr_81518 = state_81511;
(statearr_81518[(7)] = inst_81491__$1);

return statearr_81518;
})();
if(cljs.core.truth_(inst_81493)){
var statearr_81521_82312 = state_81511__$1;
(statearr_81521_82312[(1)] = (5));

} else {
var statearr_81522_82313 = state_81511__$1;
(statearr_81522_82313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81512 === (6))){
var inst_81491 = (state_81511[(7)]);
var inst_81497 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_81491) : p.call(null,inst_81491));
var state_81511__$1 = state_81511;
if(cljs.core.truth_(inst_81497)){
var statearr_81523_82315 = state_81511__$1;
(statearr_81523_82315[(1)] = (8));

} else {
var statearr_81524_82316 = state_81511__$1;
(statearr_81524_82316[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81512 === (3))){
var inst_81509 = (state_81511[(2)]);
var state_81511__$1 = state_81511;
return cljs.core.async.impl.ioc_helpers.return_chan(state_81511__$1,inst_81509);
} else {
if((state_val_81512 === (2))){
var state_81511__$1 = state_81511;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_81511__$1,(4),ch);
} else {
if((state_val_81512 === (11))){
var inst_81501 = (state_81511[(2)]);
var state_81511__$1 = state_81511;
var statearr_81525_82317 = state_81511__$1;
(statearr_81525_82317[(2)] = inst_81501);

(statearr_81525_82317[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81512 === (9))){
var state_81511__$1 = state_81511;
var statearr_81527_82318 = state_81511__$1;
(statearr_81527_82318[(2)] = null);

(statearr_81527_82318[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81512 === (5))){
var inst_81495 = cljs.core.async.close_BANG_(out);
var state_81511__$1 = state_81511;
var statearr_81529_82319 = state_81511__$1;
(statearr_81529_82319[(2)] = inst_81495);

(statearr_81529_82319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81512 === (10))){
var inst_81504 = (state_81511[(2)]);
var state_81511__$1 = (function (){var statearr_81530 = state_81511;
(statearr_81530[(8)] = inst_81504);

return statearr_81530;
})();
var statearr_81531_82320 = state_81511__$1;
(statearr_81531_82320[(2)] = null);

(statearr_81531_82320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81512 === (8))){
var inst_81491 = (state_81511[(7)]);
var state_81511__$1 = state_81511;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_81511__$1,(11),out,inst_81491);
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
});
return (function() {
var cljs$core$async$state_machine__60366__auto__ = null;
var cljs$core$async$state_machine__60366__auto____0 = (function (){
var statearr_81532 = [null,null,null,null,null,null,null,null,null];
(statearr_81532[(0)] = cljs$core$async$state_machine__60366__auto__);

(statearr_81532[(1)] = (1));

return statearr_81532;
});
var cljs$core$async$state_machine__60366__auto____1 = (function (state_81511){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_81511);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e81533){var ex__60369__auto__ = e81533;
var statearr_81534_82323 = state_81511;
(statearr_81534_82323[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_81511[(4)]))){
var statearr_81535_82324 = state_81511;
(statearr_81535_82324[(1)] = cljs.core.first((state_81511[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82325 = state_81511;
state_81511 = G__82325;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
cljs$core$async$state_machine__60366__auto__ = function(state_81511){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60366__auto____1.call(this,state_81511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60366__auto____0;
cljs$core$async$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60366__auto____1;
return cljs$core$async$state_machine__60366__auto__;
})()
})();
var state__60390__auto__ = (function (){var statearr_81538 = f__60389__auto__();
(statearr_81538[(6)] = c__60388__auto___82309);

return statearr_81538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60390__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__81540 = arguments.length;
switch (G__81540) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__60388__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60389__auto__ = (function (){var switch__60365__auto__ = (function (state_81604){
var state_val_81605 = (state_81604[(1)]);
if((state_val_81605 === (7))){
var inst_81600 = (state_81604[(2)]);
var state_81604__$1 = state_81604;
var statearr_81606_82333 = state_81604__$1;
(statearr_81606_82333[(2)] = inst_81600);

(statearr_81606_82333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81605 === (20))){
var inst_81570 = (state_81604[(7)]);
var inst_81581 = (state_81604[(2)]);
var inst_81582 = cljs.core.next(inst_81570);
var inst_81556 = inst_81582;
var inst_81557 = null;
var inst_81558 = (0);
var inst_81559 = (0);
var state_81604__$1 = (function (){var statearr_81607 = state_81604;
(statearr_81607[(8)] = inst_81556);

(statearr_81607[(9)] = inst_81557);

(statearr_81607[(10)] = inst_81559);

(statearr_81607[(11)] = inst_81581);

(statearr_81607[(12)] = inst_81558);

return statearr_81607;
})();
var statearr_81608_82334 = state_81604__$1;
(statearr_81608_82334[(2)] = null);

(statearr_81608_82334[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81605 === (1))){
var state_81604__$1 = state_81604;
var statearr_81609_82335 = state_81604__$1;
(statearr_81609_82335[(2)] = null);

(statearr_81609_82335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81605 === (4))){
var inst_81545 = (state_81604[(13)]);
var inst_81545__$1 = (state_81604[(2)]);
var inst_81546 = (inst_81545__$1 == null);
var state_81604__$1 = (function (){var statearr_81610 = state_81604;
(statearr_81610[(13)] = inst_81545__$1);

return statearr_81610;
})();
if(cljs.core.truth_(inst_81546)){
var statearr_81611_82336 = state_81604__$1;
(statearr_81611_82336[(1)] = (5));

} else {
var statearr_81612_82337 = state_81604__$1;
(statearr_81612_82337[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81605 === (15))){
var state_81604__$1 = state_81604;
var statearr_81616_82338 = state_81604__$1;
(statearr_81616_82338[(2)] = null);

(statearr_81616_82338[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81605 === (21))){
var state_81604__$1 = state_81604;
var statearr_81617_82339 = state_81604__$1;
(statearr_81617_82339[(2)] = null);

(statearr_81617_82339[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81605 === (13))){
var inst_81556 = (state_81604[(8)]);
var inst_81557 = (state_81604[(9)]);
var inst_81559 = (state_81604[(10)]);
var inst_81558 = (state_81604[(12)]);
var inst_81566 = (state_81604[(2)]);
var inst_81567 = (inst_81559 + (1));
var tmp81613 = inst_81556;
var tmp81614 = inst_81557;
var tmp81615 = inst_81558;
var inst_81556__$1 = tmp81613;
var inst_81557__$1 = tmp81614;
var inst_81558__$1 = tmp81615;
var inst_81559__$1 = inst_81567;
var state_81604__$1 = (function (){var statearr_81618 = state_81604;
(statearr_81618[(8)] = inst_81556__$1);

(statearr_81618[(9)] = inst_81557__$1);

(statearr_81618[(10)] = inst_81559__$1);

(statearr_81618[(14)] = inst_81566);

(statearr_81618[(12)] = inst_81558__$1);

return statearr_81618;
})();
var statearr_81619_82347 = state_81604__$1;
(statearr_81619_82347[(2)] = null);

(statearr_81619_82347[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81605 === (22))){
var state_81604__$1 = state_81604;
var statearr_81620_82348 = state_81604__$1;
(statearr_81620_82348[(2)] = null);

(statearr_81620_82348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81605 === (6))){
var inst_81545 = (state_81604[(13)]);
var inst_81554 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_81545) : f.call(null,inst_81545));
var inst_81555 = cljs.core.seq(inst_81554);
var inst_81556 = inst_81555;
var inst_81557 = null;
var inst_81558 = (0);
var inst_81559 = (0);
var state_81604__$1 = (function (){var statearr_81621 = state_81604;
(statearr_81621[(8)] = inst_81556);

(statearr_81621[(9)] = inst_81557);

(statearr_81621[(10)] = inst_81559);

(statearr_81621[(12)] = inst_81558);

return statearr_81621;
})();
var statearr_81622_82355 = state_81604__$1;
(statearr_81622_82355[(2)] = null);

(statearr_81622_82355[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81605 === (17))){
var inst_81570 = (state_81604[(7)]);
var inst_81574 = cljs.core.chunk_first(inst_81570);
var inst_81575 = cljs.core.chunk_rest(inst_81570);
var inst_81576 = cljs.core.count(inst_81574);
var inst_81556 = inst_81575;
var inst_81557 = inst_81574;
var inst_81558 = inst_81576;
var inst_81559 = (0);
var state_81604__$1 = (function (){var statearr_81623 = state_81604;
(statearr_81623[(8)] = inst_81556);

(statearr_81623[(9)] = inst_81557);

(statearr_81623[(10)] = inst_81559);

(statearr_81623[(12)] = inst_81558);

return statearr_81623;
})();
var statearr_81624_82359 = state_81604__$1;
(statearr_81624_82359[(2)] = null);

(statearr_81624_82359[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81605 === (3))){
var inst_81602 = (state_81604[(2)]);
var state_81604__$1 = state_81604;
return cljs.core.async.impl.ioc_helpers.return_chan(state_81604__$1,inst_81602);
} else {
if((state_val_81605 === (12))){
var inst_81590 = (state_81604[(2)]);
var state_81604__$1 = state_81604;
var statearr_81625_82364 = state_81604__$1;
(statearr_81625_82364[(2)] = inst_81590);

(statearr_81625_82364[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81605 === (2))){
var state_81604__$1 = state_81604;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_81604__$1,(4),in$);
} else {
if((state_val_81605 === (23))){
var inst_81598 = (state_81604[(2)]);
var state_81604__$1 = state_81604;
var statearr_81626_82366 = state_81604__$1;
(statearr_81626_82366[(2)] = inst_81598);

(statearr_81626_82366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81605 === (19))){
var inst_81585 = (state_81604[(2)]);
var state_81604__$1 = state_81604;
var statearr_81627_82367 = state_81604__$1;
(statearr_81627_82367[(2)] = inst_81585);

(statearr_81627_82367[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81605 === (11))){
var inst_81556 = (state_81604[(8)]);
var inst_81570 = (state_81604[(7)]);
var inst_81570__$1 = cljs.core.seq(inst_81556);
var state_81604__$1 = (function (){var statearr_81628 = state_81604;
(statearr_81628[(7)] = inst_81570__$1);

return statearr_81628;
})();
if(inst_81570__$1){
var statearr_81629_82370 = state_81604__$1;
(statearr_81629_82370[(1)] = (14));

} else {
var statearr_81630_82371 = state_81604__$1;
(statearr_81630_82371[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81605 === (9))){
var inst_81592 = (state_81604[(2)]);
var inst_81593 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_81604__$1 = (function (){var statearr_81633 = state_81604;
(statearr_81633[(15)] = inst_81592);

return statearr_81633;
})();
if(cljs.core.truth_(inst_81593)){
var statearr_81634_82373 = state_81604__$1;
(statearr_81634_82373[(1)] = (21));

} else {
var statearr_81635_82374 = state_81604__$1;
(statearr_81635_82374[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81605 === (5))){
var inst_81548 = cljs.core.async.close_BANG_(out);
var state_81604__$1 = state_81604;
var statearr_81636_82375 = state_81604__$1;
(statearr_81636_82375[(2)] = inst_81548);

(statearr_81636_82375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81605 === (14))){
var inst_81570 = (state_81604[(7)]);
var inst_81572 = cljs.core.chunked_seq_QMARK_(inst_81570);
var state_81604__$1 = state_81604;
if(inst_81572){
var statearr_81637_82378 = state_81604__$1;
(statearr_81637_82378[(1)] = (17));

} else {
var statearr_81638_82380 = state_81604__$1;
(statearr_81638_82380[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81605 === (16))){
var inst_81588 = (state_81604[(2)]);
var state_81604__$1 = state_81604;
var statearr_81639_82381 = state_81604__$1;
(statearr_81639_82381[(2)] = inst_81588);

(statearr_81639_82381[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81605 === (10))){
var inst_81557 = (state_81604[(9)]);
var inst_81559 = (state_81604[(10)]);
var inst_81564 = cljs.core._nth(inst_81557,inst_81559);
var state_81604__$1 = state_81604;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_81604__$1,(13),out,inst_81564);
} else {
if((state_val_81605 === (18))){
var inst_81570 = (state_81604[(7)]);
var inst_81579 = cljs.core.first(inst_81570);
var state_81604__$1 = state_81604;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_81604__$1,(20),out,inst_81579);
} else {
if((state_val_81605 === (8))){
var inst_81559 = (state_81604[(10)]);
var inst_81558 = (state_81604[(12)]);
var inst_81561 = (inst_81559 < inst_81558);
var inst_81562 = inst_81561;
var state_81604__$1 = state_81604;
if(cljs.core.truth_(inst_81562)){
var statearr_81640_82383 = state_81604__$1;
(statearr_81640_82383[(1)] = (10));

} else {
var statearr_81641_82384 = state_81604__$1;
(statearr_81641_82384[(1)] = (11));

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
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__60366__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__60366__auto____0 = (function (){
var statearr_81642 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_81642[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__60366__auto__);

(statearr_81642[(1)] = (1));

return statearr_81642;
});
var cljs$core$async$mapcat_STAR__$_state_machine__60366__auto____1 = (function (state_81604){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_81604);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e81643){var ex__60369__auto__ = e81643;
var statearr_81644_82387 = state_81604;
(statearr_81644_82387[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_81604[(4)]))){
var statearr_81645_82391 = state_81604;
(statearr_81645_82391[(1)] = cljs.core.first((state_81604[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82393 = state_81604;
state_81604 = G__82393;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__60366__auto__ = function(state_81604){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__60366__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__60366__auto____1.call(this,state_81604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__60366__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__60366__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__60366__auto__;
})()
})();
var state__60390__auto__ = (function (){var statearr_81646 = f__60389__auto__();
(statearr_81646[(6)] = c__60388__auto__);

return statearr_81646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60390__auto__);
}));

return c__60388__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__81648 = arguments.length;
switch (G__81648) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__81650 = arguments.length;
switch (G__81650) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__81652 = arguments.length;
switch (G__81652) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__60388__auto___82404 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60389__auto__ = (function (){var switch__60365__auto__ = (function (state_81678){
var state_val_81679 = (state_81678[(1)]);
if((state_val_81679 === (7))){
var inst_81673 = (state_81678[(2)]);
var state_81678__$1 = state_81678;
var statearr_81680_82405 = state_81678__$1;
(statearr_81680_82405[(2)] = inst_81673);

(statearr_81680_82405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81679 === (1))){
var inst_81654 = null;
var state_81678__$1 = (function (){var statearr_81682 = state_81678;
(statearr_81682[(7)] = inst_81654);

return statearr_81682;
})();
var statearr_81683_82409 = state_81678__$1;
(statearr_81683_82409[(2)] = null);

(statearr_81683_82409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81679 === (4))){
var inst_81658 = (state_81678[(8)]);
var inst_81658__$1 = (state_81678[(2)]);
var inst_81659 = (inst_81658__$1 == null);
var inst_81660 = cljs.core.not(inst_81659);
var state_81678__$1 = (function (){var statearr_81684 = state_81678;
(statearr_81684[(8)] = inst_81658__$1);

return statearr_81684;
})();
if(inst_81660){
var statearr_81685_82410 = state_81678__$1;
(statearr_81685_82410[(1)] = (5));

} else {
var statearr_81686_82411 = state_81678__$1;
(statearr_81686_82411[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81679 === (6))){
var state_81678__$1 = state_81678;
var statearr_81687_82412 = state_81678__$1;
(statearr_81687_82412[(2)] = null);

(statearr_81687_82412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81679 === (3))){
var inst_81675 = (state_81678[(2)]);
var inst_81676 = cljs.core.async.close_BANG_(out);
var state_81678__$1 = (function (){var statearr_81688 = state_81678;
(statearr_81688[(9)] = inst_81675);

return statearr_81688;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_81678__$1,inst_81676);
} else {
if((state_val_81679 === (2))){
var state_81678__$1 = state_81678;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_81678__$1,(4),ch);
} else {
if((state_val_81679 === (11))){
var inst_81658 = (state_81678[(8)]);
var inst_81667 = (state_81678[(2)]);
var inst_81654 = inst_81658;
var state_81678__$1 = (function (){var statearr_81689 = state_81678;
(statearr_81689[(7)] = inst_81654);

(statearr_81689[(10)] = inst_81667);

return statearr_81689;
})();
var statearr_81690_82415 = state_81678__$1;
(statearr_81690_82415[(2)] = null);

(statearr_81690_82415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81679 === (9))){
var inst_81658 = (state_81678[(8)]);
var state_81678__$1 = state_81678;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_81678__$1,(11),out,inst_81658);
} else {
if((state_val_81679 === (5))){
var inst_81654 = (state_81678[(7)]);
var inst_81658 = (state_81678[(8)]);
var inst_81662 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_81658,inst_81654);
var state_81678__$1 = state_81678;
if(inst_81662){
var statearr_81692_82417 = state_81678__$1;
(statearr_81692_82417[(1)] = (8));

} else {
var statearr_81693_82418 = state_81678__$1;
(statearr_81693_82418[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81679 === (10))){
var inst_81670 = (state_81678[(2)]);
var state_81678__$1 = state_81678;
var statearr_81694_82419 = state_81678__$1;
(statearr_81694_82419[(2)] = inst_81670);

(statearr_81694_82419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81679 === (8))){
var inst_81654 = (state_81678[(7)]);
var tmp81691 = inst_81654;
var inst_81654__$1 = tmp81691;
var state_81678__$1 = (function (){var statearr_81695 = state_81678;
(statearr_81695[(7)] = inst_81654__$1);

return statearr_81695;
})();
var statearr_81696_82421 = state_81678__$1;
(statearr_81696_82421[(2)] = null);

(statearr_81696_82421[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__60366__auto__ = null;
var cljs$core$async$state_machine__60366__auto____0 = (function (){
var statearr_81697 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_81697[(0)] = cljs$core$async$state_machine__60366__auto__);

(statearr_81697[(1)] = (1));

return statearr_81697;
});
var cljs$core$async$state_machine__60366__auto____1 = (function (state_81678){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_81678);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e81698){var ex__60369__auto__ = e81698;
var statearr_81700_82422 = state_81678;
(statearr_81700_82422[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_81678[(4)]))){
var statearr_81701_82423 = state_81678;
(statearr_81701_82423[(1)] = cljs.core.first((state_81678[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82424 = state_81678;
state_81678 = G__82424;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
cljs$core$async$state_machine__60366__auto__ = function(state_81678){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60366__auto____1.call(this,state_81678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60366__auto____0;
cljs$core$async$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60366__auto____1;
return cljs$core$async$state_machine__60366__auto__;
})()
})();
var state__60390__auto__ = (function (){var statearr_81702 = f__60389__auto__();
(statearr_81702[(6)] = c__60388__auto___82404);

return statearr_81702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60390__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__81704 = arguments.length;
switch (G__81704) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__60388__auto___82428 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60389__auto__ = (function (){var switch__60365__auto__ = (function (state_81745){
var state_val_81746 = (state_81745[(1)]);
if((state_val_81746 === (7))){
var inst_81741 = (state_81745[(2)]);
var state_81745__$1 = state_81745;
var statearr_81747_82429 = state_81745__$1;
(statearr_81747_82429[(2)] = inst_81741);

(statearr_81747_82429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81746 === (1))){
var inst_81708 = (new Array(n));
var inst_81709 = inst_81708;
var inst_81710 = (0);
var state_81745__$1 = (function (){var statearr_81748 = state_81745;
(statearr_81748[(7)] = inst_81710);

(statearr_81748[(8)] = inst_81709);

return statearr_81748;
})();
var statearr_81749_82431 = state_81745__$1;
(statearr_81749_82431[(2)] = null);

(statearr_81749_82431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81746 === (4))){
var inst_81713 = (state_81745[(9)]);
var inst_81713__$1 = (state_81745[(2)]);
var inst_81714 = (inst_81713__$1 == null);
var inst_81715 = cljs.core.not(inst_81714);
var state_81745__$1 = (function (){var statearr_81750 = state_81745;
(statearr_81750[(9)] = inst_81713__$1);

return statearr_81750;
})();
if(inst_81715){
var statearr_81751_82435 = state_81745__$1;
(statearr_81751_82435[(1)] = (5));

} else {
var statearr_81752_82436 = state_81745__$1;
(statearr_81752_82436[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81746 === (15))){
var inst_81735 = (state_81745[(2)]);
var state_81745__$1 = state_81745;
var statearr_81753_82437 = state_81745__$1;
(statearr_81753_82437[(2)] = inst_81735);

(statearr_81753_82437[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81746 === (13))){
var state_81745__$1 = state_81745;
var statearr_81754_82438 = state_81745__$1;
(statearr_81754_82438[(2)] = null);

(statearr_81754_82438[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81746 === (6))){
var inst_81710 = (state_81745[(7)]);
var inst_81731 = (inst_81710 > (0));
var state_81745__$1 = state_81745;
if(cljs.core.truth_(inst_81731)){
var statearr_81755_82439 = state_81745__$1;
(statearr_81755_82439[(1)] = (12));

} else {
var statearr_81756_82440 = state_81745__$1;
(statearr_81756_82440[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81746 === (3))){
var inst_81743 = (state_81745[(2)]);
var state_81745__$1 = state_81745;
return cljs.core.async.impl.ioc_helpers.return_chan(state_81745__$1,inst_81743);
} else {
if((state_val_81746 === (12))){
var inst_81709 = (state_81745[(8)]);
var inst_81733 = cljs.core.vec(inst_81709);
var state_81745__$1 = state_81745;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_81745__$1,(15),out,inst_81733);
} else {
if((state_val_81746 === (2))){
var state_81745__$1 = state_81745;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_81745__$1,(4),ch);
} else {
if((state_val_81746 === (11))){
var inst_81725 = (state_81745[(2)]);
var inst_81726 = (new Array(n));
var inst_81709 = inst_81726;
var inst_81710 = (0);
var state_81745__$1 = (function (){var statearr_81757 = state_81745;
(statearr_81757[(7)] = inst_81710);

(statearr_81757[(10)] = inst_81725);

(statearr_81757[(8)] = inst_81709);

return statearr_81757;
})();
var statearr_81758_82441 = state_81745__$1;
(statearr_81758_82441[(2)] = null);

(statearr_81758_82441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81746 === (9))){
var inst_81709 = (state_81745[(8)]);
var inst_81723 = cljs.core.vec(inst_81709);
var state_81745__$1 = state_81745;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_81745__$1,(11),out,inst_81723);
} else {
if((state_val_81746 === (5))){
var inst_81710 = (state_81745[(7)]);
var inst_81718 = (state_81745[(11)]);
var inst_81709 = (state_81745[(8)]);
var inst_81713 = (state_81745[(9)]);
var inst_81717 = (inst_81709[inst_81710] = inst_81713);
var inst_81718__$1 = (inst_81710 + (1));
var inst_81719 = (inst_81718__$1 < n);
var state_81745__$1 = (function (){var statearr_81759 = state_81745;
(statearr_81759[(11)] = inst_81718__$1);

(statearr_81759[(12)] = inst_81717);

return statearr_81759;
})();
if(cljs.core.truth_(inst_81719)){
var statearr_81760_82446 = state_81745__$1;
(statearr_81760_82446[(1)] = (8));

} else {
var statearr_81761_82447 = state_81745__$1;
(statearr_81761_82447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81746 === (14))){
var inst_81738 = (state_81745[(2)]);
var inst_81739 = cljs.core.async.close_BANG_(out);
var state_81745__$1 = (function (){var statearr_81763 = state_81745;
(statearr_81763[(13)] = inst_81738);

return statearr_81763;
})();
var statearr_81764_82448 = state_81745__$1;
(statearr_81764_82448[(2)] = inst_81739);

(statearr_81764_82448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81746 === (10))){
var inst_81729 = (state_81745[(2)]);
var state_81745__$1 = state_81745;
var statearr_81765_82449 = state_81745__$1;
(statearr_81765_82449[(2)] = inst_81729);

(statearr_81765_82449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81746 === (8))){
var inst_81718 = (state_81745[(11)]);
var inst_81709 = (state_81745[(8)]);
var tmp81762 = inst_81709;
var inst_81709__$1 = tmp81762;
var inst_81710 = inst_81718;
var state_81745__$1 = (function (){var statearr_81766 = state_81745;
(statearr_81766[(7)] = inst_81710);

(statearr_81766[(8)] = inst_81709__$1);

return statearr_81766;
})();
var statearr_81767_82453 = state_81745__$1;
(statearr_81767_82453[(2)] = null);

(statearr_81767_82453[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__60366__auto__ = null;
var cljs$core$async$state_machine__60366__auto____0 = (function (){
var statearr_81768 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_81768[(0)] = cljs$core$async$state_machine__60366__auto__);

(statearr_81768[(1)] = (1));

return statearr_81768;
});
var cljs$core$async$state_machine__60366__auto____1 = (function (state_81745){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_81745);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e81769){var ex__60369__auto__ = e81769;
var statearr_81770_82454 = state_81745;
(statearr_81770_82454[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_81745[(4)]))){
var statearr_81771_82455 = state_81745;
(statearr_81771_82455[(1)] = cljs.core.first((state_81745[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82459 = state_81745;
state_81745 = G__82459;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
cljs$core$async$state_machine__60366__auto__ = function(state_81745){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60366__auto____1.call(this,state_81745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60366__auto____0;
cljs$core$async$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60366__auto____1;
return cljs$core$async$state_machine__60366__auto__;
})()
})();
var state__60390__auto__ = (function (){var statearr_81773 = f__60389__auto__();
(statearr_81773[(6)] = c__60388__auto___82428);

return statearr_81773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60390__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__81776 = arguments.length;
switch (G__81776) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__60388__auto___82461 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60389__auto__ = (function (){var switch__60365__auto__ = (function (state_81826){
var state_val_81827 = (state_81826[(1)]);
if((state_val_81827 === (7))){
var inst_81822 = (state_81826[(2)]);
var state_81826__$1 = state_81826;
var statearr_81828_82462 = state_81826__$1;
(statearr_81828_82462[(2)] = inst_81822);

(statearr_81828_82462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81827 === (1))){
var inst_81785 = [];
var inst_81786 = inst_81785;
var inst_81787 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_81826__$1 = (function (){var statearr_81829 = state_81826;
(statearr_81829[(7)] = inst_81786);

(statearr_81829[(8)] = inst_81787);

return statearr_81829;
})();
var statearr_81830_82463 = state_81826__$1;
(statearr_81830_82463[(2)] = null);

(statearr_81830_82463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81827 === (4))){
var inst_81790 = (state_81826[(9)]);
var inst_81790__$1 = (state_81826[(2)]);
var inst_81791 = (inst_81790__$1 == null);
var inst_81792 = cljs.core.not(inst_81791);
var state_81826__$1 = (function (){var statearr_81831 = state_81826;
(statearr_81831[(9)] = inst_81790__$1);

return statearr_81831;
})();
if(inst_81792){
var statearr_81832_82464 = state_81826__$1;
(statearr_81832_82464[(1)] = (5));

} else {
var statearr_81833_82465 = state_81826__$1;
(statearr_81833_82465[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81827 === (15))){
var inst_81816 = (state_81826[(2)]);
var state_81826__$1 = state_81826;
var statearr_81834_82467 = state_81826__$1;
(statearr_81834_82467[(2)] = inst_81816);

(statearr_81834_82467[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81827 === (13))){
var state_81826__$1 = state_81826;
var statearr_81835_82469 = state_81826__$1;
(statearr_81835_82469[(2)] = null);

(statearr_81835_82469[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81827 === (6))){
var inst_81786 = (state_81826[(7)]);
var inst_81811 = inst_81786.length;
var inst_81812 = (inst_81811 > (0));
var state_81826__$1 = state_81826;
if(cljs.core.truth_(inst_81812)){
var statearr_81836_82470 = state_81826__$1;
(statearr_81836_82470[(1)] = (12));

} else {
var statearr_81837_82471 = state_81826__$1;
(statearr_81837_82471[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81827 === (3))){
var inst_81824 = (state_81826[(2)]);
var state_81826__$1 = state_81826;
return cljs.core.async.impl.ioc_helpers.return_chan(state_81826__$1,inst_81824);
} else {
if((state_val_81827 === (12))){
var inst_81786 = (state_81826[(7)]);
var inst_81814 = cljs.core.vec(inst_81786);
var state_81826__$1 = state_81826;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_81826__$1,(15),out,inst_81814);
} else {
if((state_val_81827 === (2))){
var state_81826__$1 = state_81826;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_81826__$1,(4),ch);
} else {
if((state_val_81827 === (11))){
var inst_81794 = (state_81826[(10)]);
var inst_81790 = (state_81826[(9)]);
var inst_81804 = (state_81826[(2)]);
var inst_81805 = [];
var inst_81806 = inst_81805.push(inst_81790);
var inst_81786 = inst_81805;
var inst_81787 = inst_81794;
var state_81826__$1 = (function (){var statearr_81838 = state_81826;
(statearr_81838[(11)] = inst_81804);

(statearr_81838[(12)] = inst_81806);

(statearr_81838[(7)] = inst_81786);

(statearr_81838[(8)] = inst_81787);

return statearr_81838;
})();
var statearr_81839_82476 = state_81826__$1;
(statearr_81839_82476[(2)] = null);

(statearr_81839_82476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81827 === (9))){
var inst_81786 = (state_81826[(7)]);
var inst_81802 = cljs.core.vec(inst_81786);
var state_81826__$1 = state_81826;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_81826__$1,(11),out,inst_81802);
} else {
if((state_val_81827 === (5))){
var inst_81787 = (state_81826[(8)]);
var inst_81794 = (state_81826[(10)]);
var inst_81790 = (state_81826[(9)]);
var inst_81794__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_81790) : f.call(null,inst_81790));
var inst_81795 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_81794__$1,inst_81787);
var inst_81796 = cljs.core.keyword_identical_QMARK_(inst_81787,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_81797 = ((inst_81795) || (inst_81796));
var state_81826__$1 = (function (){var statearr_81840 = state_81826;
(statearr_81840[(10)] = inst_81794__$1);

return statearr_81840;
})();
if(cljs.core.truth_(inst_81797)){
var statearr_81841_82480 = state_81826__$1;
(statearr_81841_82480[(1)] = (8));

} else {
var statearr_81842_82481 = state_81826__$1;
(statearr_81842_82481[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81827 === (14))){
var inst_81819 = (state_81826[(2)]);
var inst_81820 = cljs.core.async.close_BANG_(out);
var state_81826__$1 = (function (){var statearr_81844 = state_81826;
(statearr_81844[(13)] = inst_81819);

return statearr_81844;
})();
var statearr_81845_82482 = state_81826__$1;
(statearr_81845_82482[(2)] = inst_81820);

(statearr_81845_82482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81827 === (10))){
var inst_81809 = (state_81826[(2)]);
var state_81826__$1 = state_81826;
var statearr_81846_82483 = state_81826__$1;
(statearr_81846_82483[(2)] = inst_81809);

(statearr_81846_82483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81827 === (8))){
var inst_81786 = (state_81826[(7)]);
var inst_81794 = (state_81826[(10)]);
var inst_81790 = (state_81826[(9)]);
var inst_81799 = inst_81786.push(inst_81790);
var tmp81843 = inst_81786;
var inst_81786__$1 = tmp81843;
var inst_81787 = inst_81794;
var state_81826__$1 = (function (){var statearr_81847 = state_81826;
(statearr_81847[(7)] = inst_81786__$1);

(statearr_81847[(14)] = inst_81799);

(statearr_81847[(8)] = inst_81787);

return statearr_81847;
})();
var statearr_81848_82487 = state_81826__$1;
(statearr_81848_82487[(2)] = null);

(statearr_81848_82487[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__60366__auto__ = null;
var cljs$core$async$state_machine__60366__auto____0 = (function (){
var statearr_81849 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_81849[(0)] = cljs$core$async$state_machine__60366__auto__);

(statearr_81849[(1)] = (1));

return statearr_81849;
});
var cljs$core$async$state_machine__60366__auto____1 = (function (state_81826){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_81826);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e81850){var ex__60369__auto__ = e81850;
var statearr_81851_82488 = state_81826;
(statearr_81851_82488[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_81826[(4)]))){
var statearr_81852_82489 = state_81826;
(statearr_81852_82489[(1)] = cljs.core.first((state_81826[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82490 = state_81826;
state_81826 = G__82490;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
cljs$core$async$state_machine__60366__auto__ = function(state_81826){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60366__auto____1.call(this,state_81826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60366__auto____0;
cljs$core$async$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60366__auto____1;
return cljs$core$async$state_machine__60366__auto__;
})()
})();
var state__60390__auto__ = (function (){var statearr_81853 = f__60389__auto__();
(statearr_81853[(6)] = c__60388__auto___82461);

return statearr_81853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60390__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
