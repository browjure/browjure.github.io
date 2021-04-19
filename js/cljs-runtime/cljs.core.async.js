goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__72271 = arguments.length;
switch (G__72271) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async72277 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async72277 = (function (f,blockable,meta72278){
this.f = f;
this.blockable = blockable;
this.meta72278 = meta72278;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async72277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72279,meta72278__$1){
var self__ = this;
var _72279__$1 = this;
return (new cljs.core.async.t_cljs$core$async72277(self__.f,self__.blockable,meta72278__$1));
}));

(cljs.core.async.t_cljs$core$async72277.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72279){
var self__ = this;
var _72279__$1 = this;
return self__.meta72278;
}));

(cljs.core.async.t_cljs$core$async72277.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72277.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async72277.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async72277.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async72277.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta72278","meta72278",-889568719,null)], null);
}));

(cljs.core.async.t_cljs$core$async72277.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async72277.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async72277");

(cljs.core.async.t_cljs$core$async72277.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async72277");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async72277.
 */
cljs.core.async.__GT_t_cljs$core$async72277 = (function cljs$core$async$__GT_t_cljs$core$async72277(f__$1,blockable__$1,meta72278){
return (new cljs.core.async.t_cljs$core$async72277(f__$1,blockable__$1,meta72278));
});

}

return (new cljs.core.async.t_cljs$core$async72277(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__72324 = arguments.length;
switch (G__72324) {
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
var G__72352 = arguments.length;
switch (G__72352) {
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
var G__72376 = arguments.length;
switch (G__72376) {
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
var val_75541 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_75541) : fn1.call(null,val_75541));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_75541) : fn1.call(null,val_75541));
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
var G__72384 = arguments.length;
switch (G__72384) {
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
var n__4613__auto___75571 = n;
var x_75572 = (0);
while(true){
if((x_75572 < n__4613__auto___75571)){
(a[x_75572] = x_75572);

var G__75573 = (x_75572 + (1));
x_75572 = G__75573;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async72405 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async72405 = (function (flag,meta72406){
this.flag = flag;
this.meta72406 = meta72406;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async72405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72407,meta72406__$1){
var self__ = this;
var _72407__$1 = this;
return (new cljs.core.async.t_cljs$core$async72405(self__.flag,meta72406__$1));
}));

(cljs.core.async.t_cljs$core$async72405.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72407){
var self__ = this;
var _72407__$1 = this;
return self__.meta72406;
}));

(cljs.core.async.t_cljs$core$async72405.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72405.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async72405.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async72405.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async72405.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta72406","meta72406",13880318,null)], null);
}));

(cljs.core.async.t_cljs$core$async72405.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async72405.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async72405");

(cljs.core.async.t_cljs$core$async72405.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async72405");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async72405.
 */
cljs.core.async.__GT_t_cljs$core$async72405 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async72405(flag__$1,meta72406){
return (new cljs.core.async.t_cljs$core$async72405(flag__$1,meta72406));
});

}

return (new cljs.core.async.t_cljs$core$async72405(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async72432 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async72432 = (function (flag,cb,meta72433){
this.flag = flag;
this.cb = cb;
this.meta72433 = meta72433;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async72432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72434,meta72433__$1){
var self__ = this;
var _72434__$1 = this;
return (new cljs.core.async.t_cljs$core$async72432(self__.flag,self__.cb,meta72433__$1));
}));

(cljs.core.async.t_cljs$core$async72432.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72434){
var self__ = this;
var _72434__$1 = this;
return self__.meta72433;
}));

(cljs.core.async.t_cljs$core$async72432.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72432.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async72432.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async72432.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async72432.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta72433","meta72433",-1690930071,null)], null);
}));

(cljs.core.async.t_cljs$core$async72432.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async72432.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async72432");

(cljs.core.async.t_cljs$core$async72432.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async72432");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async72432.
 */
cljs.core.async.__GT_t_cljs$core$async72432 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async72432(flag__$1,cb__$1,meta72433){
return (new cljs.core.async.t_cljs$core$async72432(flag__$1,cb__$1,meta72433));
});

}

return (new cljs.core.async.t_cljs$core$async72432(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__72441_SHARP_){
var G__72444 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__72441_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__72444) : fret.call(null,G__72444));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__72442_SHARP_){
var G__72445 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__72442_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__72445) : fret.call(null,G__72445));
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
var G__75597 = (i + (1));
i = G__75597;
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
var len__4736__auto___75605 = arguments.length;
var i__4737__auto___75606 = (0);
while(true){
if((i__4737__auto___75606 < len__4736__auto___75605)){
args__4742__auto__.push((arguments[i__4737__auto___75606]));

var G__75609 = (i__4737__auto___75606 + (1));
i__4737__auto___75606 = G__75609;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__72453){
var map__72454 = p__72453;
var map__72454__$1 = (((((!((map__72454 == null))))?(((((map__72454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72454):map__72454);
var opts = map__72454__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq72448){
var G__72449 = cljs.core.first(seq72448);
var seq72448__$1 = cljs.core.next(seq72448);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72449,seq72448__$1);
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
var G__72471 = arguments.length;
switch (G__72471) {
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
var c__72167__auto___75632 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72168__auto__ = (function (){var switch__67872__auto__ = (function (state_72539){
var state_val_72540 = (state_72539[(1)]);
if((state_val_72540 === (7))){
var inst_72529 = (state_72539[(2)]);
var state_72539__$1 = state_72539;
var statearr_72549_75635 = state_72539__$1;
(statearr_72549_75635[(2)] = inst_72529);

(statearr_72549_75635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72540 === (1))){
var state_72539__$1 = state_72539;
var statearr_72550_75642 = state_72539__$1;
(statearr_72550_75642[(2)] = null);

(statearr_72550_75642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72540 === (4))){
var inst_72504 = (state_72539[(7)]);
var inst_72504__$1 = (state_72539[(2)]);
var inst_72505 = (inst_72504__$1 == null);
var state_72539__$1 = (function (){var statearr_72551 = state_72539;
(statearr_72551[(7)] = inst_72504__$1);

return statearr_72551;
})();
if(cljs.core.truth_(inst_72505)){
var statearr_72552_75644 = state_72539__$1;
(statearr_72552_75644[(1)] = (5));

} else {
var statearr_72553_75646 = state_72539__$1;
(statearr_72553_75646[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72540 === (13))){
var state_72539__$1 = state_72539;
var statearr_72555_75649 = state_72539__$1;
(statearr_72555_75649[(2)] = null);

(statearr_72555_75649[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72540 === (6))){
var inst_72504 = (state_72539[(7)]);
var state_72539__$1 = state_72539;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72539__$1,(11),to,inst_72504);
} else {
if((state_val_72540 === (3))){
var inst_72531 = (state_72539[(2)]);
var state_72539__$1 = state_72539;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72539__$1,inst_72531);
} else {
if((state_val_72540 === (12))){
var state_72539__$1 = state_72539;
var statearr_72558_75653 = state_72539__$1;
(statearr_72558_75653[(2)] = null);

(statearr_72558_75653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72540 === (2))){
var state_72539__$1 = state_72539;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72539__$1,(4),from);
} else {
if((state_val_72540 === (11))){
var inst_72515 = (state_72539[(2)]);
var state_72539__$1 = state_72539;
if(cljs.core.truth_(inst_72515)){
var statearr_72559_75656 = state_72539__$1;
(statearr_72559_75656[(1)] = (12));

} else {
var statearr_72561_75657 = state_72539__$1;
(statearr_72561_75657[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72540 === (9))){
var state_72539__$1 = state_72539;
var statearr_72562_75660 = state_72539__$1;
(statearr_72562_75660[(2)] = null);

(statearr_72562_75660[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72540 === (5))){
var state_72539__$1 = state_72539;
if(cljs.core.truth_(close_QMARK_)){
var statearr_72563_75662 = state_72539__$1;
(statearr_72563_75662[(1)] = (8));

} else {
var statearr_72564_75663 = state_72539__$1;
(statearr_72564_75663[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72540 === (14))){
var inst_72527 = (state_72539[(2)]);
var state_72539__$1 = state_72539;
var statearr_72566_75666 = state_72539__$1;
(statearr_72566_75666[(2)] = inst_72527);

(statearr_72566_75666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72540 === (10))){
var inst_72512 = (state_72539[(2)]);
var state_72539__$1 = state_72539;
var statearr_72567_75670 = state_72539__$1;
(statearr_72567_75670[(2)] = inst_72512);

(statearr_72567_75670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72540 === (8))){
var inst_72508 = cljs.core.async.close_BANG_(to);
var state_72539__$1 = state_72539;
var statearr_72568_75674 = state_72539__$1;
(statearr_72568_75674[(2)] = inst_72508);

(statearr_72568_75674[(1)] = (10));


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
var cljs$core$async$state_machine__67873__auto__ = null;
var cljs$core$async$state_machine__67873__auto____0 = (function (){
var statearr_72569 = [null,null,null,null,null,null,null,null];
(statearr_72569[(0)] = cljs$core$async$state_machine__67873__auto__);

(statearr_72569[(1)] = (1));

return statearr_72569;
});
var cljs$core$async$state_machine__67873__auto____1 = (function (state_72539){
while(true){
var ret_value__67874__auto__ = (function (){try{while(true){
var result__67875__auto__ = switch__67872__auto__(state_72539);
if(cljs.core.keyword_identical_QMARK_(result__67875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67875__auto__;
}
break;
}
}catch (e72570){var ex__67876__auto__ = e72570;
var statearr_72572_75680 = state_72539;
(statearr_72572_75680[(2)] = ex__67876__auto__);


if(cljs.core.seq((state_72539[(4)]))){
var statearr_72573_75682 = state_72539;
(statearr_72573_75682[(1)] = cljs.core.first((state_72539[(4)])));

} else {
throw ex__67876__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__67874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75683 = state_72539;
state_72539 = G__75683;
continue;
} else {
return ret_value__67874__auto__;
}
break;
}
});
cljs$core$async$state_machine__67873__auto__ = function(state_72539){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__67873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__67873__auto____1.call(this,state_72539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__67873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__67873__auto____0;
cljs$core$async$state_machine__67873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__67873__auto____1;
return cljs$core$async$state_machine__67873__auto__;
})()
})();
var state__72169__auto__ = (function (){var statearr_72576 = f__72168__auto__();
(statearr_72576[(6)] = c__72167__auto___75632);

return statearr_72576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72169__auto__);
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
var process = (function (p__72586){
var vec__72587 = p__72586;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72587,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72587,(1),null);
var job = vec__72587;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__72167__auto___75686 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72168__auto__ = (function (){var switch__67872__auto__ = (function (state_72594){
var state_val_72595 = (state_72594[(1)]);
if((state_val_72595 === (1))){
var state_72594__$1 = state_72594;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72594__$1,(2),res,v);
} else {
if((state_val_72595 === (2))){
var inst_72591 = (state_72594[(2)]);
var inst_72592 = cljs.core.async.close_BANG_(res);
var state_72594__$1 = (function (){var statearr_72597 = state_72594;
(statearr_72597[(7)] = inst_72591);

return statearr_72597;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_72594__$1,inst_72592);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__67873__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__67873__auto____0 = (function (){
var statearr_72598 = [null,null,null,null,null,null,null,null];
(statearr_72598[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__67873__auto__);

(statearr_72598[(1)] = (1));

return statearr_72598;
});
var cljs$core$async$pipeline_STAR__$_state_machine__67873__auto____1 = (function (state_72594){
while(true){
var ret_value__67874__auto__ = (function (){try{while(true){
var result__67875__auto__ = switch__67872__auto__(state_72594);
if(cljs.core.keyword_identical_QMARK_(result__67875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67875__auto__;
}
break;
}
}catch (e72599){var ex__67876__auto__ = e72599;
var statearr_72600_75694 = state_72594;
(statearr_72600_75694[(2)] = ex__67876__auto__);


if(cljs.core.seq((state_72594[(4)]))){
var statearr_72601_75695 = state_72594;
(statearr_72601_75695[(1)] = cljs.core.first((state_72594[(4)])));

} else {
throw ex__67876__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__67874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75696 = state_72594;
state_72594 = G__75696;
continue;
} else {
return ret_value__67874__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__67873__auto__ = function(state_72594){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__67873__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__67873__auto____1.call(this,state_72594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__67873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__67873__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__67873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__67873__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__67873__auto__;
})()
})();
var state__72169__auto__ = (function (){var statearr_72604 = f__72168__auto__();
(statearr_72604[(6)] = c__72167__auto___75686);

return statearr_72604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72169__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__72609){
var vec__72611 = p__72609;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72611,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72611,(1),null);
var job = vec__72611;
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
var n__4613__auto___75697 = n;
var __75698 = (0);
while(true){
if((__75698 < n__4613__auto___75697)){
var G__72617_75699 = type;
var G__72617_75700__$1 = (((G__72617_75699 instanceof cljs.core.Keyword))?G__72617_75699.fqn:null);
switch (G__72617_75700__$1) {
case "compute":
var c__72167__auto___75703 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__75698,c__72167__auto___75703,G__72617_75699,G__72617_75700__$1,n__4613__auto___75697,jobs,results,process,async){
return (function (){
var f__72168__auto__ = (function (){var switch__67872__auto__ = ((function (__75698,c__72167__auto___75703,G__72617_75699,G__72617_75700__$1,n__4613__auto___75697,jobs,results,process,async){
return (function (state_72631){
var state_val_72632 = (state_72631[(1)]);
if((state_val_72632 === (1))){
var state_72631__$1 = state_72631;
var statearr_72633_75707 = state_72631__$1;
(statearr_72633_75707[(2)] = null);

(statearr_72633_75707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72632 === (2))){
var state_72631__$1 = state_72631;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72631__$1,(4),jobs);
} else {
if((state_val_72632 === (3))){
var inst_72629 = (state_72631[(2)]);
var state_72631__$1 = state_72631;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72631__$1,inst_72629);
} else {
if((state_val_72632 === (4))){
var inst_72621 = (state_72631[(2)]);
var inst_72622 = process(inst_72621);
var state_72631__$1 = state_72631;
if(cljs.core.truth_(inst_72622)){
var statearr_72634_75716 = state_72631__$1;
(statearr_72634_75716[(1)] = (5));

} else {
var statearr_72635_75718 = state_72631__$1;
(statearr_72635_75718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72632 === (5))){
var state_72631__$1 = state_72631;
var statearr_72636_75722 = state_72631__$1;
(statearr_72636_75722[(2)] = null);

(statearr_72636_75722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72632 === (6))){
var state_72631__$1 = state_72631;
var statearr_72637_75723 = state_72631__$1;
(statearr_72637_75723[(2)] = null);

(statearr_72637_75723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72632 === (7))){
var inst_72627 = (state_72631[(2)]);
var state_72631__$1 = state_72631;
var statearr_72638_75724 = state_72631__$1;
(statearr_72638_75724[(2)] = inst_72627);

(statearr_72638_75724[(1)] = (3));


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
});})(__75698,c__72167__auto___75703,G__72617_75699,G__72617_75700__$1,n__4613__auto___75697,jobs,results,process,async))
;
return ((function (__75698,switch__67872__auto__,c__72167__auto___75703,G__72617_75699,G__72617_75700__$1,n__4613__auto___75697,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__67873__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__67873__auto____0 = (function (){
var statearr_72644 = [null,null,null,null,null,null,null];
(statearr_72644[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__67873__auto__);

(statearr_72644[(1)] = (1));

return statearr_72644;
});
var cljs$core$async$pipeline_STAR__$_state_machine__67873__auto____1 = (function (state_72631){
while(true){
var ret_value__67874__auto__ = (function (){try{while(true){
var result__67875__auto__ = switch__67872__auto__(state_72631);
if(cljs.core.keyword_identical_QMARK_(result__67875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67875__auto__;
}
break;
}
}catch (e72646){var ex__67876__auto__ = e72646;
var statearr_72647_75729 = state_72631;
(statearr_72647_75729[(2)] = ex__67876__auto__);


if(cljs.core.seq((state_72631[(4)]))){
var statearr_72648_75731 = state_72631;
(statearr_72648_75731[(1)] = cljs.core.first((state_72631[(4)])));

} else {
throw ex__67876__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__67874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75734 = state_72631;
state_72631 = G__75734;
continue;
} else {
return ret_value__67874__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__67873__auto__ = function(state_72631){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__67873__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__67873__auto____1.call(this,state_72631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__67873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__67873__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__67873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__67873__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__67873__auto__;
})()
;})(__75698,switch__67872__auto__,c__72167__auto___75703,G__72617_75699,G__72617_75700__$1,n__4613__auto___75697,jobs,results,process,async))
})();
var state__72169__auto__ = (function (){var statearr_72649 = f__72168__auto__();
(statearr_72649[(6)] = c__72167__auto___75703);

return statearr_72649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72169__auto__);
});})(__75698,c__72167__auto___75703,G__72617_75699,G__72617_75700__$1,n__4613__auto___75697,jobs,results,process,async))
);


break;
case "async":
var c__72167__auto___75739 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__75698,c__72167__auto___75739,G__72617_75699,G__72617_75700__$1,n__4613__auto___75697,jobs,results,process,async){
return (function (){
var f__72168__auto__ = (function (){var switch__67872__auto__ = ((function (__75698,c__72167__auto___75739,G__72617_75699,G__72617_75700__$1,n__4613__auto___75697,jobs,results,process,async){
return (function (state_72662){
var state_val_72663 = (state_72662[(1)]);
if((state_val_72663 === (1))){
var state_72662__$1 = state_72662;
var statearr_72664_75749 = state_72662__$1;
(statearr_72664_75749[(2)] = null);

(statearr_72664_75749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72663 === (2))){
var state_72662__$1 = state_72662;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72662__$1,(4),jobs);
} else {
if((state_val_72663 === (3))){
var inst_72660 = (state_72662[(2)]);
var state_72662__$1 = state_72662;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72662__$1,inst_72660);
} else {
if((state_val_72663 === (4))){
var inst_72652 = (state_72662[(2)]);
var inst_72653 = async(inst_72652);
var state_72662__$1 = state_72662;
if(cljs.core.truth_(inst_72653)){
var statearr_72665_75750 = state_72662__$1;
(statearr_72665_75750[(1)] = (5));

} else {
var statearr_72666_75751 = state_72662__$1;
(statearr_72666_75751[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72663 === (5))){
var state_72662__$1 = state_72662;
var statearr_72667_75754 = state_72662__$1;
(statearr_72667_75754[(2)] = null);

(statearr_72667_75754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72663 === (6))){
var state_72662__$1 = state_72662;
var statearr_72671_75756 = state_72662__$1;
(statearr_72671_75756[(2)] = null);

(statearr_72671_75756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72663 === (7))){
var inst_72658 = (state_72662[(2)]);
var state_72662__$1 = state_72662;
var statearr_72672_75758 = state_72662__$1;
(statearr_72672_75758[(2)] = inst_72658);

(statearr_72672_75758[(1)] = (3));


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
});})(__75698,c__72167__auto___75739,G__72617_75699,G__72617_75700__$1,n__4613__auto___75697,jobs,results,process,async))
;
return ((function (__75698,switch__67872__auto__,c__72167__auto___75739,G__72617_75699,G__72617_75700__$1,n__4613__auto___75697,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__67873__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__67873__auto____0 = (function (){
var statearr_72673 = [null,null,null,null,null,null,null];
(statearr_72673[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__67873__auto__);

(statearr_72673[(1)] = (1));

return statearr_72673;
});
var cljs$core$async$pipeline_STAR__$_state_machine__67873__auto____1 = (function (state_72662){
while(true){
var ret_value__67874__auto__ = (function (){try{while(true){
var result__67875__auto__ = switch__67872__auto__(state_72662);
if(cljs.core.keyword_identical_QMARK_(result__67875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67875__auto__;
}
break;
}
}catch (e72675){var ex__67876__auto__ = e72675;
var statearr_72676_75765 = state_72662;
(statearr_72676_75765[(2)] = ex__67876__auto__);


if(cljs.core.seq((state_72662[(4)]))){
var statearr_72677_75767 = state_72662;
(statearr_72677_75767[(1)] = cljs.core.first((state_72662[(4)])));

} else {
throw ex__67876__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__67874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75770 = state_72662;
state_72662 = G__75770;
continue;
} else {
return ret_value__67874__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__67873__auto__ = function(state_72662){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__67873__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__67873__auto____1.call(this,state_72662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__67873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__67873__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__67873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__67873__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__67873__auto__;
})()
;})(__75698,switch__67872__auto__,c__72167__auto___75739,G__72617_75699,G__72617_75700__$1,n__4613__auto___75697,jobs,results,process,async))
})();
var state__72169__auto__ = (function (){var statearr_72688 = f__72168__auto__();
(statearr_72688[(6)] = c__72167__auto___75739);

return statearr_72688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72169__auto__);
});})(__75698,c__72167__auto___75739,G__72617_75699,G__72617_75700__$1,n__4613__auto___75697,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__72617_75700__$1)].join('')));

}

var G__75775 = (__75698 + (1));
__75698 = G__75775;
continue;
} else {
}
break;
}

var c__72167__auto___75776 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72168__auto__ = (function (){var switch__67872__auto__ = (function (state_72713){
var state_val_72714 = (state_72713[(1)]);
if((state_val_72714 === (7))){
var inst_72709 = (state_72713[(2)]);
var state_72713__$1 = state_72713;
var statearr_72724_75779 = state_72713__$1;
(statearr_72724_75779[(2)] = inst_72709);

(statearr_72724_75779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72714 === (1))){
var state_72713__$1 = state_72713;
var statearr_72726_75782 = state_72713__$1;
(statearr_72726_75782[(2)] = null);

(statearr_72726_75782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72714 === (4))){
var inst_72691 = (state_72713[(7)]);
var inst_72691__$1 = (state_72713[(2)]);
var inst_72692 = (inst_72691__$1 == null);
var state_72713__$1 = (function (){var statearr_72727 = state_72713;
(statearr_72727[(7)] = inst_72691__$1);

return statearr_72727;
})();
if(cljs.core.truth_(inst_72692)){
var statearr_72728_75786 = state_72713__$1;
(statearr_72728_75786[(1)] = (5));

} else {
var statearr_72729_75789 = state_72713__$1;
(statearr_72729_75789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72714 === (6))){
var inst_72696 = (state_72713[(8)]);
var inst_72691 = (state_72713[(7)]);
var inst_72696__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_72698 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_72699 = [inst_72691,inst_72696__$1];
var inst_72700 = (new cljs.core.PersistentVector(null,2,(5),inst_72698,inst_72699,null));
var state_72713__$1 = (function (){var statearr_72732 = state_72713;
(statearr_72732[(8)] = inst_72696__$1);

return statearr_72732;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72713__$1,(8),jobs,inst_72700);
} else {
if((state_val_72714 === (3))){
var inst_72711 = (state_72713[(2)]);
var state_72713__$1 = state_72713;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72713__$1,inst_72711);
} else {
if((state_val_72714 === (2))){
var state_72713__$1 = state_72713;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72713__$1,(4),from);
} else {
if((state_val_72714 === (9))){
var inst_72705 = (state_72713[(2)]);
var state_72713__$1 = (function (){var statearr_72735 = state_72713;
(statearr_72735[(9)] = inst_72705);

return statearr_72735;
})();
var statearr_72737_75794 = state_72713__$1;
(statearr_72737_75794[(2)] = null);

(statearr_72737_75794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72714 === (5))){
var inst_72694 = cljs.core.async.close_BANG_(jobs);
var state_72713__$1 = state_72713;
var statearr_72740_75799 = state_72713__$1;
(statearr_72740_75799[(2)] = inst_72694);

(statearr_72740_75799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72714 === (8))){
var inst_72696 = (state_72713[(8)]);
var inst_72702 = (state_72713[(2)]);
var state_72713__$1 = (function (){var statearr_72743 = state_72713;
(statearr_72743[(10)] = inst_72702);

return statearr_72743;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72713__$1,(9),results,inst_72696);
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
var cljs$core$async$pipeline_STAR__$_state_machine__67873__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__67873__auto____0 = (function (){
var statearr_72744 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_72744[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__67873__auto__);

(statearr_72744[(1)] = (1));

return statearr_72744;
});
var cljs$core$async$pipeline_STAR__$_state_machine__67873__auto____1 = (function (state_72713){
while(true){
var ret_value__67874__auto__ = (function (){try{while(true){
var result__67875__auto__ = switch__67872__auto__(state_72713);
if(cljs.core.keyword_identical_QMARK_(result__67875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67875__auto__;
}
break;
}
}catch (e72745){var ex__67876__auto__ = e72745;
var statearr_72746_75803 = state_72713;
(statearr_72746_75803[(2)] = ex__67876__auto__);


if(cljs.core.seq((state_72713[(4)]))){
var statearr_72747_75804 = state_72713;
(statearr_72747_75804[(1)] = cljs.core.first((state_72713[(4)])));

} else {
throw ex__67876__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__67874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75806 = state_72713;
state_72713 = G__75806;
continue;
} else {
return ret_value__67874__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__67873__auto__ = function(state_72713){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__67873__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__67873__auto____1.call(this,state_72713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__67873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__67873__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__67873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__67873__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__67873__auto__;
})()
})();
var state__72169__auto__ = (function (){var statearr_72748 = f__72168__auto__();
(statearr_72748[(6)] = c__72167__auto___75776);

return statearr_72748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72169__auto__);
}));


var c__72167__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72168__auto__ = (function (){var switch__67872__auto__ = (function (state_72796){
var state_val_72797 = (state_72796[(1)]);
if((state_val_72797 === (7))){
var inst_72792 = (state_72796[(2)]);
var state_72796__$1 = state_72796;
var statearr_72800_75814 = state_72796__$1;
(statearr_72800_75814[(2)] = inst_72792);

(statearr_72800_75814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72797 === (20))){
var state_72796__$1 = state_72796;
var statearr_72804_75817 = state_72796__$1;
(statearr_72804_75817[(2)] = null);

(statearr_72804_75817[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72797 === (1))){
var state_72796__$1 = state_72796;
var statearr_72808_75819 = state_72796__$1;
(statearr_72808_75819[(2)] = null);

(statearr_72808_75819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72797 === (4))){
var inst_72751 = (state_72796[(7)]);
var inst_72751__$1 = (state_72796[(2)]);
var inst_72752 = (inst_72751__$1 == null);
var state_72796__$1 = (function (){var statearr_72811 = state_72796;
(statearr_72811[(7)] = inst_72751__$1);

return statearr_72811;
})();
if(cljs.core.truth_(inst_72752)){
var statearr_72812_75822 = state_72796__$1;
(statearr_72812_75822[(1)] = (5));

} else {
var statearr_72813_75823 = state_72796__$1;
(statearr_72813_75823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72797 === (15))){
var inst_72770 = (state_72796[(8)]);
var state_72796__$1 = state_72796;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72796__$1,(18),to,inst_72770);
} else {
if((state_val_72797 === (21))){
var inst_72787 = (state_72796[(2)]);
var state_72796__$1 = state_72796;
var statearr_72817_75825 = state_72796__$1;
(statearr_72817_75825[(2)] = inst_72787);

(statearr_72817_75825[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72797 === (13))){
var inst_72789 = (state_72796[(2)]);
var state_72796__$1 = (function (){var statearr_72823 = state_72796;
(statearr_72823[(9)] = inst_72789);

return statearr_72823;
})();
var statearr_72825_75831 = state_72796__$1;
(statearr_72825_75831[(2)] = null);

(statearr_72825_75831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72797 === (6))){
var inst_72751 = (state_72796[(7)]);
var state_72796__$1 = state_72796;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72796__$1,(11),inst_72751);
} else {
if((state_val_72797 === (17))){
var inst_72782 = (state_72796[(2)]);
var state_72796__$1 = state_72796;
if(cljs.core.truth_(inst_72782)){
var statearr_72839_75833 = state_72796__$1;
(statearr_72839_75833[(1)] = (19));

} else {
var statearr_72840_75834 = state_72796__$1;
(statearr_72840_75834[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72797 === (3))){
var inst_72794 = (state_72796[(2)]);
var state_72796__$1 = state_72796;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72796__$1,inst_72794);
} else {
if((state_val_72797 === (12))){
var inst_72763 = (state_72796[(10)]);
var state_72796__$1 = state_72796;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72796__$1,(14),inst_72763);
} else {
if((state_val_72797 === (2))){
var state_72796__$1 = state_72796;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72796__$1,(4),results);
} else {
if((state_val_72797 === (19))){
var state_72796__$1 = state_72796;
var statearr_72843_75837 = state_72796__$1;
(statearr_72843_75837[(2)] = null);

(statearr_72843_75837[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72797 === (11))){
var inst_72763 = (state_72796[(2)]);
var state_72796__$1 = (function (){var statearr_72844 = state_72796;
(statearr_72844[(10)] = inst_72763);

return statearr_72844;
})();
var statearr_72847_75838 = state_72796__$1;
(statearr_72847_75838[(2)] = null);

(statearr_72847_75838[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72797 === (9))){
var state_72796__$1 = state_72796;
var statearr_72850_75840 = state_72796__$1;
(statearr_72850_75840[(2)] = null);

(statearr_72850_75840[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72797 === (5))){
var state_72796__$1 = state_72796;
if(cljs.core.truth_(close_QMARK_)){
var statearr_72856_75842 = state_72796__$1;
(statearr_72856_75842[(1)] = (8));

} else {
var statearr_72857_75843 = state_72796__$1;
(statearr_72857_75843[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72797 === (14))){
var inst_72770 = (state_72796[(8)]);
var inst_72770__$1 = (state_72796[(2)]);
var inst_72775 = (inst_72770__$1 == null);
var inst_72776 = cljs.core.not(inst_72775);
var state_72796__$1 = (function (){var statearr_72870 = state_72796;
(statearr_72870[(8)] = inst_72770__$1);

return statearr_72870;
})();
if(inst_72776){
var statearr_72872_75845 = state_72796__$1;
(statearr_72872_75845[(1)] = (15));

} else {
var statearr_72874_75846 = state_72796__$1;
(statearr_72874_75846[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72797 === (16))){
var state_72796__$1 = state_72796;
var statearr_72878_75849 = state_72796__$1;
(statearr_72878_75849[(2)] = false);

(statearr_72878_75849[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72797 === (10))){
var inst_72760 = (state_72796[(2)]);
var state_72796__$1 = state_72796;
var statearr_72884_75850 = state_72796__$1;
(statearr_72884_75850[(2)] = inst_72760);

(statearr_72884_75850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72797 === (18))){
var inst_72779 = (state_72796[(2)]);
var state_72796__$1 = state_72796;
var statearr_72890_75852 = state_72796__$1;
(statearr_72890_75852[(2)] = inst_72779);

(statearr_72890_75852[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72797 === (8))){
var inst_72757 = cljs.core.async.close_BANG_(to);
var state_72796__$1 = state_72796;
var statearr_72894_75853 = state_72796__$1;
(statearr_72894_75853[(2)] = inst_72757);

(statearr_72894_75853[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__67873__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__67873__auto____0 = (function (){
var statearr_72903 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_72903[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__67873__auto__);

(statearr_72903[(1)] = (1));

return statearr_72903;
});
var cljs$core$async$pipeline_STAR__$_state_machine__67873__auto____1 = (function (state_72796){
while(true){
var ret_value__67874__auto__ = (function (){try{while(true){
var result__67875__auto__ = switch__67872__auto__(state_72796);
if(cljs.core.keyword_identical_QMARK_(result__67875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67875__auto__;
}
break;
}
}catch (e72907){var ex__67876__auto__ = e72907;
var statearr_72910_75859 = state_72796;
(statearr_72910_75859[(2)] = ex__67876__auto__);


if(cljs.core.seq((state_72796[(4)]))){
var statearr_72914_75861 = state_72796;
(statearr_72914_75861[(1)] = cljs.core.first((state_72796[(4)])));

} else {
throw ex__67876__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__67874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75867 = state_72796;
state_72796 = G__75867;
continue;
} else {
return ret_value__67874__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__67873__auto__ = function(state_72796){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__67873__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__67873__auto____1.call(this,state_72796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__67873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__67873__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__67873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__67873__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__67873__auto__;
})()
})();
var state__72169__auto__ = (function (){var statearr_72926 = f__72168__auto__();
(statearr_72926[(6)] = c__72167__auto__);

return statearr_72926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72169__auto__);
}));

return c__72167__auto__;
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
var G__72944 = arguments.length;
switch (G__72944) {
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
var G__72957 = arguments.length;
switch (G__72957) {
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
var G__72992 = arguments.length;
switch (G__72992) {
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
var c__72167__auto___75893 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72168__auto__ = (function (){var switch__67872__auto__ = (function (state_73032){
var state_val_73033 = (state_73032[(1)]);
if((state_val_73033 === (7))){
var inst_73026 = (state_73032[(2)]);
var state_73032__$1 = state_73032;
var statearr_73056_75894 = state_73032__$1;
(statearr_73056_75894[(2)] = inst_73026);

(statearr_73056_75894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73033 === (1))){
var state_73032__$1 = state_73032;
var statearr_73059_75895 = state_73032__$1;
(statearr_73059_75895[(2)] = null);

(statearr_73059_75895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73033 === (4))){
var inst_73000 = (state_73032[(7)]);
var inst_73000__$1 = (state_73032[(2)]);
var inst_73002 = (inst_73000__$1 == null);
var state_73032__$1 = (function (){var statearr_73064 = state_73032;
(statearr_73064[(7)] = inst_73000__$1);

return statearr_73064;
})();
if(cljs.core.truth_(inst_73002)){
var statearr_73067_75899 = state_73032__$1;
(statearr_73067_75899[(1)] = (5));

} else {
var statearr_73069_75900 = state_73032__$1;
(statearr_73069_75900[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73033 === (13))){
var state_73032__$1 = state_73032;
var statearr_73072_75901 = state_73032__$1;
(statearr_73072_75901[(2)] = null);

(statearr_73072_75901[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73033 === (6))){
var inst_73000 = (state_73032[(7)]);
var inst_73011 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_73000) : p.call(null,inst_73000));
var state_73032__$1 = state_73032;
if(cljs.core.truth_(inst_73011)){
var statearr_73080_75904 = state_73032__$1;
(statearr_73080_75904[(1)] = (9));

} else {
var statearr_73083_75905 = state_73032__$1;
(statearr_73083_75905[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73033 === (3))){
var inst_73029 = (state_73032[(2)]);
var state_73032__$1 = state_73032;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73032__$1,inst_73029);
} else {
if((state_val_73033 === (12))){
var state_73032__$1 = state_73032;
var statearr_73089_75910 = state_73032__$1;
(statearr_73089_75910[(2)] = null);

(statearr_73089_75910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73033 === (2))){
var state_73032__$1 = state_73032;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73032__$1,(4),ch);
} else {
if((state_val_73033 === (11))){
var inst_73000 = (state_73032[(7)]);
var inst_73015 = (state_73032[(2)]);
var state_73032__$1 = state_73032;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73032__$1,(8),inst_73015,inst_73000);
} else {
if((state_val_73033 === (9))){
var state_73032__$1 = state_73032;
var statearr_73099_75913 = state_73032__$1;
(statearr_73099_75913[(2)] = tc);

(statearr_73099_75913[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73033 === (5))){
var inst_73006 = cljs.core.async.close_BANG_(tc);
var inst_73007 = cljs.core.async.close_BANG_(fc);
var state_73032__$1 = (function (){var statearr_73110 = state_73032;
(statearr_73110[(8)] = inst_73006);

return statearr_73110;
})();
var statearr_73112_75915 = state_73032__$1;
(statearr_73112_75915[(2)] = inst_73007);

(statearr_73112_75915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73033 === (14))){
var inst_73024 = (state_73032[(2)]);
var state_73032__$1 = state_73032;
var statearr_73118_75923 = state_73032__$1;
(statearr_73118_75923[(2)] = inst_73024);

(statearr_73118_75923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73033 === (10))){
var state_73032__$1 = state_73032;
var statearr_73123_75925 = state_73032__$1;
(statearr_73123_75925[(2)] = fc);

(statearr_73123_75925[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73033 === (8))){
var inst_73019 = (state_73032[(2)]);
var state_73032__$1 = state_73032;
if(cljs.core.truth_(inst_73019)){
var statearr_73126_75936 = state_73032__$1;
(statearr_73126_75936[(1)] = (12));

} else {
var statearr_73130_75937 = state_73032__$1;
(statearr_73130_75937[(1)] = (13));

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
var cljs$core$async$state_machine__67873__auto__ = null;
var cljs$core$async$state_machine__67873__auto____0 = (function (){
var statearr_73137 = [null,null,null,null,null,null,null,null,null];
(statearr_73137[(0)] = cljs$core$async$state_machine__67873__auto__);

(statearr_73137[(1)] = (1));

return statearr_73137;
});
var cljs$core$async$state_machine__67873__auto____1 = (function (state_73032){
while(true){
var ret_value__67874__auto__ = (function (){try{while(true){
var result__67875__auto__ = switch__67872__auto__(state_73032);
if(cljs.core.keyword_identical_QMARK_(result__67875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67875__auto__;
}
break;
}
}catch (e73140){var ex__67876__auto__ = e73140;
var statearr_73144_75944 = state_73032;
(statearr_73144_75944[(2)] = ex__67876__auto__);


if(cljs.core.seq((state_73032[(4)]))){
var statearr_73147_75945 = state_73032;
(statearr_73147_75945[(1)] = cljs.core.first((state_73032[(4)])));

} else {
throw ex__67876__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__67874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75948 = state_73032;
state_73032 = G__75948;
continue;
} else {
return ret_value__67874__auto__;
}
break;
}
});
cljs$core$async$state_machine__67873__auto__ = function(state_73032){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__67873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__67873__auto____1.call(this,state_73032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__67873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__67873__auto____0;
cljs$core$async$state_machine__67873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__67873__auto____1;
return cljs$core$async$state_machine__67873__auto__;
})()
})();
var state__72169__auto__ = (function (){var statearr_73154 = f__72168__auto__();
(statearr_73154[(6)] = c__72167__auto___75893);

return statearr_73154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72169__auto__);
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
var c__72167__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72168__auto__ = (function (){var switch__67872__auto__ = (function (state_73211){
var state_val_73212 = (state_73211[(1)]);
if((state_val_73212 === (7))){
var inst_73203 = (state_73211[(2)]);
var state_73211__$1 = state_73211;
var statearr_73220_75962 = state_73211__$1;
(statearr_73220_75962[(2)] = inst_73203);

(statearr_73220_75962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73212 === (1))){
var inst_73171 = init;
var inst_73173 = inst_73171;
var state_73211__$1 = (function (){var statearr_73221 = state_73211;
(statearr_73221[(7)] = inst_73173);

return statearr_73221;
})();
var statearr_73222_75965 = state_73211__$1;
(statearr_73222_75965[(2)] = null);

(statearr_73222_75965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73212 === (4))){
var inst_73181 = (state_73211[(8)]);
var inst_73181__$1 = (state_73211[(2)]);
var inst_73184 = (inst_73181__$1 == null);
var state_73211__$1 = (function (){var statearr_73225 = state_73211;
(statearr_73225[(8)] = inst_73181__$1);

return statearr_73225;
})();
if(cljs.core.truth_(inst_73184)){
var statearr_73226_75971 = state_73211__$1;
(statearr_73226_75971[(1)] = (5));

} else {
var statearr_73227_75972 = state_73211__$1;
(statearr_73227_75972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73212 === (6))){
var inst_73187 = (state_73211[(9)]);
var inst_73173 = (state_73211[(7)]);
var inst_73181 = (state_73211[(8)]);
var inst_73187__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_73173,inst_73181) : f.call(null,inst_73173,inst_73181));
var inst_73189 = cljs.core.reduced_QMARK_(inst_73187__$1);
var state_73211__$1 = (function (){var statearr_73228 = state_73211;
(statearr_73228[(9)] = inst_73187__$1);

return statearr_73228;
})();
if(inst_73189){
var statearr_73231_75984 = state_73211__$1;
(statearr_73231_75984[(1)] = (8));

} else {
var statearr_73232_75985 = state_73211__$1;
(statearr_73232_75985[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73212 === (3))){
var inst_73205 = (state_73211[(2)]);
var state_73211__$1 = state_73211;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73211__$1,inst_73205);
} else {
if((state_val_73212 === (2))){
var state_73211__$1 = state_73211;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73211__$1,(4),ch);
} else {
if((state_val_73212 === (9))){
var inst_73187 = (state_73211[(9)]);
var inst_73173 = inst_73187;
var state_73211__$1 = (function (){var statearr_73233 = state_73211;
(statearr_73233[(7)] = inst_73173);

return statearr_73233;
})();
var statearr_73236_75989 = state_73211__$1;
(statearr_73236_75989[(2)] = null);

(statearr_73236_75989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73212 === (5))){
var inst_73173 = (state_73211[(7)]);
var state_73211__$1 = state_73211;
var statearr_73240_75994 = state_73211__$1;
(statearr_73240_75994[(2)] = inst_73173);

(statearr_73240_75994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73212 === (10))){
var inst_73200 = (state_73211[(2)]);
var state_73211__$1 = state_73211;
var statearr_73243_75996 = state_73211__$1;
(statearr_73243_75996[(2)] = inst_73200);

(statearr_73243_75996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73212 === (8))){
var inst_73187 = (state_73211[(9)]);
var inst_73195 = cljs.core.deref(inst_73187);
var state_73211__$1 = state_73211;
var statearr_73244_75998 = state_73211__$1;
(statearr_73244_75998[(2)] = inst_73195);

(statearr_73244_75998[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__67873__auto__ = null;
var cljs$core$async$reduce_$_state_machine__67873__auto____0 = (function (){
var statearr_73249 = [null,null,null,null,null,null,null,null,null,null];
(statearr_73249[(0)] = cljs$core$async$reduce_$_state_machine__67873__auto__);

(statearr_73249[(1)] = (1));

return statearr_73249;
});
var cljs$core$async$reduce_$_state_machine__67873__auto____1 = (function (state_73211){
while(true){
var ret_value__67874__auto__ = (function (){try{while(true){
var result__67875__auto__ = switch__67872__auto__(state_73211);
if(cljs.core.keyword_identical_QMARK_(result__67875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67875__auto__;
}
break;
}
}catch (e73251){var ex__67876__auto__ = e73251;
var statearr_73252_76007 = state_73211;
(statearr_73252_76007[(2)] = ex__67876__auto__);


if(cljs.core.seq((state_73211[(4)]))){
var statearr_73257_76009 = state_73211;
(statearr_73257_76009[(1)] = cljs.core.first((state_73211[(4)])));

} else {
throw ex__67876__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__67874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76011 = state_73211;
state_73211 = G__76011;
continue;
} else {
return ret_value__67874__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__67873__auto__ = function(state_73211){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__67873__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__67873__auto____1.call(this,state_73211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__67873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__67873__auto____0;
cljs$core$async$reduce_$_state_machine__67873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__67873__auto____1;
return cljs$core$async$reduce_$_state_machine__67873__auto__;
})()
})();
var state__72169__auto__ = (function (){var statearr_73267 = f__72168__auto__();
(statearr_73267[(6)] = c__72167__auto__);

return statearr_73267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72169__auto__);
}));

return c__72167__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__72167__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72168__auto__ = (function (){var switch__67872__auto__ = (function (state_73283){
var state_val_73284 = (state_73283[(1)]);
if((state_val_73284 === (1))){
var inst_73278 = cljs.core.async.reduce(f__$1,init,ch);
var state_73283__$1 = state_73283;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73283__$1,(2),inst_73278);
} else {
if((state_val_73284 === (2))){
var inst_73280 = (state_73283[(2)]);
var inst_73281 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_73280) : f__$1.call(null,inst_73280));
var state_73283__$1 = state_73283;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73283__$1,inst_73281);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__67873__auto__ = null;
var cljs$core$async$transduce_$_state_machine__67873__auto____0 = (function (){
var statearr_73300 = [null,null,null,null,null,null,null];
(statearr_73300[(0)] = cljs$core$async$transduce_$_state_machine__67873__auto__);

(statearr_73300[(1)] = (1));

return statearr_73300;
});
var cljs$core$async$transduce_$_state_machine__67873__auto____1 = (function (state_73283){
while(true){
var ret_value__67874__auto__ = (function (){try{while(true){
var result__67875__auto__ = switch__67872__auto__(state_73283);
if(cljs.core.keyword_identical_QMARK_(result__67875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67875__auto__;
}
break;
}
}catch (e73302){var ex__67876__auto__ = e73302;
var statearr_73305_76029 = state_73283;
(statearr_73305_76029[(2)] = ex__67876__auto__);


if(cljs.core.seq((state_73283[(4)]))){
var statearr_73308_76031 = state_73283;
(statearr_73308_76031[(1)] = cljs.core.first((state_73283[(4)])));

} else {
throw ex__67876__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__67874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76033 = state_73283;
state_73283 = G__76033;
continue;
} else {
return ret_value__67874__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__67873__auto__ = function(state_73283){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__67873__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__67873__auto____1.call(this,state_73283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__67873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__67873__auto____0;
cljs$core$async$transduce_$_state_machine__67873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__67873__auto____1;
return cljs$core$async$transduce_$_state_machine__67873__auto__;
})()
})();
var state__72169__auto__ = (function (){var statearr_73317 = f__72168__auto__();
(statearr_73317[(6)] = c__72167__auto__);

return statearr_73317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72169__auto__);
}));

return c__72167__auto__;
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
var G__73321 = arguments.length;
switch (G__73321) {
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
var c__72167__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72168__auto__ = (function (){var switch__67872__auto__ = (function (state_73375){
var state_val_73376 = (state_73375[(1)]);
if((state_val_73376 === (7))){
var inst_73355 = (state_73375[(2)]);
var state_73375__$1 = state_73375;
var statearr_73382_76049 = state_73375__$1;
(statearr_73382_76049[(2)] = inst_73355);

(statearr_73382_76049[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73376 === (1))){
var inst_73347 = cljs.core.seq(coll);
var inst_73348 = inst_73347;
var state_73375__$1 = (function (){var statearr_73385 = state_73375;
(statearr_73385[(7)] = inst_73348);

return statearr_73385;
})();
var statearr_73389_76055 = state_73375__$1;
(statearr_73389_76055[(2)] = null);

(statearr_73389_76055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73376 === (4))){
var inst_73348 = (state_73375[(7)]);
var inst_73353 = cljs.core.first(inst_73348);
var state_73375__$1 = state_73375;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73375__$1,(7),ch,inst_73353);
} else {
if((state_val_73376 === (13))){
var inst_73369 = (state_73375[(2)]);
var state_73375__$1 = state_73375;
var statearr_73406_76062 = state_73375__$1;
(statearr_73406_76062[(2)] = inst_73369);

(statearr_73406_76062[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73376 === (6))){
var inst_73359 = (state_73375[(2)]);
var state_73375__$1 = state_73375;
if(cljs.core.truth_(inst_73359)){
var statearr_73411_76064 = state_73375__$1;
(statearr_73411_76064[(1)] = (8));

} else {
var statearr_73414_76065 = state_73375__$1;
(statearr_73414_76065[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73376 === (3))){
var inst_73373 = (state_73375[(2)]);
var state_73375__$1 = state_73375;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73375__$1,inst_73373);
} else {
if((state_val_73376 === (12))){
var state_73375__$1 = state_73375;
var statearr_73424_76068 = state_73375__$1;
(statearr_73424_76068[(2)] = null);

(statearr_73424_76068[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73376 === (2))){
var inst_73348 = (state_73375[(7)]);
var state_73375__$1 = state_73375;
if(cljs.core.truth_(inst_73348)){
var statearr_73430_76079 = state_73375__$1;
(statearr_73430_76079[(1)] = (4));

} else {
var statearr_73432_76081 = state_73375__$1;
(statearr_73432_76081[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73376 === (11))){
var inst_73366 = cljs.core.async.close_BANG_(ch);
var state_73375__$1 = state_73375;
var statearr_73437_76085 = state_73375__$1;
(statearr_73437_76085[(2)] = inst_73366);

(statearr_73437_76085[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73376 === (9))){
var state_73375__$1 = state_73375;
if(cljs.core.truth_(close_QMARK_)){
var statearr_73444_76087 = state_73375__$1;
(statearr_73444_76087[(1)] = (11));

} else {
var statearr_73446_76088 = state_73375__$1;
(statearr_73446_76088[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73376 === (5))){
var inst_73348 = (state_73375[(7)]);
var state_73375__$1 = state_73375;
var statearr_73452_76089 = state_73375__$1;
(statearr_73452_76089[(2)] = inst_73348);

(statearr_73452_76089[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73376 === (10))){
var inst_73371 = (state_73375[(2)]);
var state_73375__$1 = state_73375;
var statearr_73458_76092 = state_73375__$1;
(statearr_73458_76092[(2)] = inst_73371);

(statearr_73458_76092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73376 === (8))){
var inst_73348 = (state_73375[(7)]);
var inst_73362 = cljs.core.next(inst_73348);
var inst_73348__$1 = inst_73362;
var state_73375__$1 = (function (){var statearr_73463 = state_73375;
(statearr_73463[(7)] = inst_73348__$1);

return statearr_73463;
})();
var statearr_73467_76102 = state_73375__$1;
(statearr_73467_76102[(2)] = null);

(statearr_73467_76102[(1)] = (2));


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
var cljs$core$async$state_machine__67873__auto__ = null;
var cljs$core$async$state_machine__67873__auto____0 = (function (){
var statearr_73474 = [null,null,null,null,null,null,null,null];
(statearr_73474[(0)] = cljs$core$async$state_machine__67873__auto__);

(statearr_73474[(1)] = (1));

return statearr_73474;
});
var cljs$core$async$state_machine__67873__auto____1 = (function (state_73375){
while(true){
var ret_value__67874__auto__ = (function (){try{while(true){
var result__67875__auto__ = switch__67872__auto__(state_73375);
if(cljs.core.keyword_identical_QMARK_(result__67875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67875__auto__;
}
break;
}
}catch (e73478){var ex__67876__auto__ = e73478;
var statearr_73480_76108 = state_73375;
(statearr_73480_76108[(2)] = ex__67876__auto__);


if(cljs.core.seq((state_73375[(4)]))){
var statearr_73482_76113 = state_73375;
(statearr_73482_76113[(1)] = cljs.core.first((state_73375[(4)])));

} else {
throw ex__67876__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__67874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76117 = state_73375;
state_73375 = G__76117;
continue;
} else {
return ret_value__67874__auto__;
}
break;
}
});
cljs$core$async$state_machine__67873__auto__ = function(state_73375){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__67873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__67873__auto____1.call(this,state_73375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__67873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__67873__auto____0;
cljs$core$async$state_machine__67873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__67873__auto____1;
return cljs$core$async$state_machine__67873__auto__;
})()
})();
var state__72169__auto__ = (function (){var statearr_73493 = f__72168__auto__();
(statearr_73493[(6)] = c__72167__auto__);

return statearr_73493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72169__auto__);
}));

return c__72167__auto__;
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
var G__73522 = arguments.length;
switch (G__73522) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_76136 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_76136(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_76138 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_76138(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_76152 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_76152(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_76164 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_76164(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async73553 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async73553 = (function (ch,cs,meta73554){
this.ch = ch;
this.cs = cs;
this.meta73554 = meta73554;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async73553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_73555,meta73554__$1){
var self__ = this;
var _73555__$1 = this;
return (new cljs.core.async.t_cljs$core$async73553(self__.ch,self__.cs,meta73554__$1));
}));

(cljs.core.async.t_cljs$core$async73553.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_73555){
var self__ = this;
var _73555__$1 = this;
return self__.meta73554;
}));

(cljs.core.async.t_cljs$core$async73553.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73553.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async73553.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73553.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async73553.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async73553.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async73553.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta73554","meta73554",-471288959,null)], null);
}));

(cljs.core.async.t_cljs$core$async73553.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async73553.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async73553");

(cljs.core.async.t_cljs$core$async73553.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async73553");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async73553.
 */
cljs.core.async.__GT_t_cljs$core$async73553 = (function cljs$core$async$mult_$___GT_t_cljs$core$async73553(ch__$1,cs__$1,meta73554){
return (new cljs.core.async.t_cljs$core$async73553(ch__$1,cs__$1,meta73554));
});

}

return (new cljs.core.async.t_cljs$core$async73553(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__72167__auto___76190 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72168__auto__ = (function (){var switch__67872__auto__ = (function (state_73738){
var state_val_73741 = (state_73738[(1)]);
if((state_val_73741 === (7))){
var inst_73731 = (state_73738[(2)]);
var state_73738__$1 = state_73738;
var statearr_73749_76197 = state_73738__$1;
(statearr_73749_76197[(2)] = inst_73731);

(statearr_73749_76197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73741 === (20))){
var inst_73614 = (state_73738[(7)]);
var inst_73637 = cljs.core.first(inst_73614);
var inst_73638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_73637,(0),null);
var inst_73639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_73637,(1),null);
var state_73738__$1 = (function (){var statearr_73751 = state_73738;
(statearr_73751[(8)] = inst_73638);

return statearr_73751;
})();
if(cljs.core.truth_(inst_73639)){
var statearr_73752_76200 = state_73738__$1;
(statearr_73752_76200[(1)] = (22));

} else {
var statearr_73753_76201 = state_73738__$1;
(statearr_73753_76201[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73741 === (27))){
var inst_73672 = (state_73738[(9)]);
var inst_73680 = (state_73738[(10)]);
var inst_73670 = (state_73738[(11)]);
var inst_73573 = (state_73738[(12)]);
var inst_73680__$1 = cljs.core._nth(inst_73670,inst_73672);
var inst_73681 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_73680__$1,inst_73573,done);
var state_73738__$1 = (function (){var statearr_73755 = state_73738;
(statearr_73755[(10)] = inst_73680__$1);

return statearr_73755;
})();
if(cljs.core.truth_(inst_73681)){
var statearr_73756_76210 = state_73738__$1;
(statearr_73756_76210[(1)] = (30));

} else {
var statearr_73757_76211 = state_73738__$1;
(statearr_73757_76211[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73741 === (1))){
var state_73738__$1 = state_73738;
var statearr_73759_76213 = state_73738__$1;
(statearr_73759_76213[(2)] = null);

(statearr_73759_76213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73741 === (24))){
var inst_73614 = (state_73738[(7)]);
var inst_73646 = (state_73738[(2)]);
var inst_73648 = cljs.core.next(inst_73614);
var inst_73585 = inst_73648;
var inst_73586 = null;
var inst_73587 = (0);
var inst_73588 = (0);
var state_73738__$1 = (function (){var statearr_73766 = state_73738;
(statearr_73766[(13)] = inst_73646);

(statearr_73766[(14)] = inst_73588);

(statearr_73766[(15)] = inst_73587);

(statearr_73766[(16)] = inst_73586);

(statearr_73766[(17)] = inst_73585);

return statearr_73766;
})();
var statearr_73768_76222 = state_73738__$1;
(statearr_73768_76222[(2)] = null);

(statearr_73768_76222[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73741 === (39))){
var state_73738__$1 = state_73738;
var statearr_73775_76224 = state_73738__$1;
(statearr_73775_76224[(2)] = null);

(statearr_73775_76224[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73741 === (4))){
var inst_73573 = (state_73738[(12)]);
var inst_73573__$1 = (state_73738[(2)]);
var inst_73575 = (inst_73573__$1 == null);
var state_73738__$1 = (function (){var statearr_73777 = state_73738;
(statearr_73777[(12)] = inst_73573__$1);

return statearr_73777;
})();
if(cljs.core.truth_(inst_73575)){
var statearr_73781_76230 = state_73738__$1;
(statearr_73781_76230[(1)] = (5));

} else {
var statearr_73782_76232 = state_73738__$1;
(statearr_73782_76232[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73741 === (15))){
var inst_73588 = (state_73738[(14)]);
var inst_73587 = (state_73738[(15)]);
var inst_73586 = (state_73738[(16)]);
var inst_73585 = (state_73738[(17)]);
var inst_73604 = (state_73738[(2)]);
var inst_73605 = (inst_73588 + (1));
var tmp73772 = inst_73587;
var tmp73773 = inst_73586;
var tmp73774 = inst_73585;
var inst_73585__$1 = tmp73774;
var inst_73586__$1 = tmp73773;
var inst_73587__$1 = tmp73772;
var inst_73588__$1 = inst_73605;
var state_73738__$1 = (function (){var statearr_73786 = state_73738;
(statearr_73786[(14)] = inst_73588__$1);

(statearr_73786[(18)] = inst_73604);

(statearr_73786[(15)] = inst_73587__$1);

(statearr_73786[(16)] = inst_73586__$1);

(statearr_73786[(17)] = inst_73585__$1);

return statearr_73786;
})();
var statearr_73789_76236 = state_73738__$1;
(statearr_73789_76236[(2)] = null);

(statearr_73789_76236[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73741 === (21))){
var inst_73651 = (state_73738[(2)]);
var state_73738__$1 = state_73738;
var statearr_73794_76243 = state_73738__$1;
(statearr_73794_76243[(2)] = inst_73651);

(statearr_73794_76243[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73741 === (31))){
var inst_73680 = (state_73738[(10)]);
var inst_73686 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_73680);
var state_73738__$1 = state_73738;
var statearr_73801_76246 = state_73738__$1;
(statearr_73801_76246[(2)] = inst_73686);

(statearr_73801_76246[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73741 === (32))){
var inst_73672 = (state_73738[(9)]);
var inst_73669 = (state_73738[(19)]);
var inst_73670 = (state_73738[(11)]);
var inst_73671 = (state_73738[(20)]);
var inst_73688 = (state_73738[(2)]);
var inst_73689 = (inst_73672 + (1));
var tmp73790 = inst_73669;
var tmp73791 = inst_73670;
var tmp73792 = inst_73671;
var inst_73669__$1 = tmp73790;
var inst_73670__$1 = tmp73791;
var inst_73671__$1 = tmp73792;
var inst_73672__$1 = inst_73689;
var state_73738__$1 = (function (){var statearr_73805 = state_73738;
(statearr_73805[(9)] = inst_73672__$1);

(statearr_73805[(19)] = inst_73669__$1);

(statearr_73805[(21)] = inst_73688);

(statearr_73805[(11)] = inst_73670__$1);

(statearr_73805[(20)] = inst_73671__$1);

return statearr_73805;
})();
var statearr_73808_76252 = state_73738__$1;
(statearr_73808_76252[(2)] = null);

(statearr_73808_76252[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73741 === (40))){
var inst_73704 = (state_73738[(22)]);
var inst_73708 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_73704);
var state_73738__$1 = state_73738;
var statearr_73809_76253 = state_73738__$1;
(statearr_73809_76253[(2)] = inst_73708);

(statearr_73809_76253[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73741 === (33))){
var inst_73692 = (state_73738[(23)]);
var inst_73695 = cljs.core.chunked_seq_QMARK_(inst_73692);
var state_73738__$1 = state_73738;
if(inst_73695){
var statearr_73811_76258 = state_73738__$1;
(statearr_73811_76258[(1)] = (36));

} else {
var statearr_73813_76259 = state_73738__$1;
(statearr_73813_76259[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73741 === (13))){
var inst_73597 = (state_73738[(24)]);
var inst_73601 = cljs.core.async.close_BANG_(inst_73597);
var state_73738__$1 = state_73738;
var statearr_73815_76260 = state_73738__$1;
(statearr_73815_76260[(2)] = inst_73601);

(statearr_73815_76260[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73741 === (22))){
var inst_73638 = (state_73738[(8)]);
var inst_73643 = cljs.core.async.close_BANG_(inst_73638);
var state_73738__$1 = state_73738;
var statearr_73818_76261 = state_73738__$1;
(statearr_73818_76261[(2)] = inst_73643);

(statearr_73818_76261[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73741 === (36))){
var inst_73692 = (state_73738[(23)]);
var inst_73698 = cljs.core.chunk_first(inst_73692);
var inst_73699 = cljs.core.chunk_rest(inst_73692);
var inst_73700 = cljs.core.count(inst_73698);
var inst_73669 = inst_73699;
var inst_73670 = inst_73698;
var inst_73671 = inst_73700;
var inst_73672 = (0);
var state_73738__$1 = (function (){var statearr_73823 = state_73738;
(statearr_73823[(9)] = inst_73672);

(statearr_73823[(19)] = inst_73669);

(statearr_73823[(11)] = inst_73670);

(statearr_73823[(20)] = inst_73671);

return statearr_73823;
})();
var statearr_73824_76266 = state_73738__$1;
(statearr_73824_76266[(2)] = null);

(statearr_73824_76266[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73741 === (41))){
var inst_73692 = (state_73738[(23)]);
var inst_73710 = (state_73738[(2)]);
var inst_73711 = cljs.core.next(inst_73692);
var inst_73669 = inst_73711;
var inst_73670 = null;
var inst_73671 = (0);
var inst_73672 = (0);
var state_73738__$1 = (function (){var statearr_73828 = state_73738;
(statearr_73828[(9)] = inst_73672);

(statearr_73828[(19)] = inst_73669);

(statearr_73828[(25)] = inst_73710);

(statearr_73828[(11)] = inst_73670);

(statearr_73828[(20)] = inst_73671);

return statearr_73828;
})();
var statearr_73831_76273 = state_73738__$1;
(statearr_73831_76273[(2)] = null);

(statearr_73831_76273[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73741 === (43))){
var state_73738__$1 = state_73738;
var statearr_73834_76277 = state_73738__$1;
(statearr_73834_76277[(2)] = null);

(statearr_73834_76277[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73741 === (29))){
var inst_73719 = (state_73738[(2)]);
var state_73738__$1 = state_73738;
var statearr_73837_76279 = state_73738__$1;
(statearr_73837_76279[(2)] = inst_73719);

(statearr_73837_76279[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73741 === (44))){
var inst_73728 = (state_73738[(2)]);
var state_73738__$1 = (function (){var statearr_73840 = state_73738;
(statearr_73840[(26)] = inst_73728);

return statearr_73840;
})();
var statearr_73841_76280 = state_73738__$1;
(statearr_73841_76280[(2)] = null);

(statearr_73841_76280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73741 === (6))){
var inst_73661 = (state_73738[(27)]);
var inst_73660 = cljs.core.deref(cs);
var inst_73661__$1 = cljs.core.keys(inst_73660);
var inst_73662 = cljs.core.count(inst_73661__$1);
var inst_73663 = cljs.core.reset_BANG_(dctr,inst_73662);
var inst_73668 = cljs.core.seq(inst_73661__$1);
var inst_73669 = inst_73668;
var inst_73670 = null;
var inst_73671 = (0);
var inst_73672 = (0);
var state_73738__$1 = (function (){var statearr_73843 = state_73738;
(statearr_73843[(9)] = inst_73672);

(statearr_73843[(19)] = inst_73669);

(statearr_73843[(27)] = inst_73661__$1);

(statearr_73843[(28)] = inst_73663);

(statearr_73843[(11)] = inst_73670);

(statearr_73843[(20)] = inst_73671);

return statearr_73843;
})();
var statearr_73846_76282 = state_73738__$1;
(statearr_73846_76282[(2)] = null);

(statearr_73846_76282[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73741 === (28))){
var inst_73669 = (state_73738[(19)]);
var inst_73692 = (state_73738[(23)]);
var inst_73692__$1 = cljs.core.seq(inst_73669);
var state_73738__$1 = (function (){var statearr_73850 = state_73738;
(statearr_73850[(23)] = inst_73692__$1);

return statearr_73850;
})();
if(inst_73692__$1){
var statearr_73853_76284 = state_73738__$1;
(statearr_73853_76284[(1)] = (33));

} else {
var statearr_73855_76292 = state_73738__$1;
(statearr_73855_76292[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73741 === (25))){
var inst_73672 = (state_73738[(9)]);
var inst_73671 = (state_73738[(20)]);
var inst_73676 = (inst_73672 < inst_73671);
var inst_73677 = inst_73676;
var state_73738__$1 = state_73738;
if(cljs.core.truth_(inst_73677)){
var statearr_73856_76300 = state_73738__$1;
(statearr_73856_76300[(1)] = (27));

} else {
var statearr_73857_76306 = state_73738__$1;
(statearr_73857_76306[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73741 === (34))){
var state_73738__$1 = state_73738;
var statearr_73860_76307 = state_73738__$1;
(statearr_73860_76307[(2)] = null);

(statearr_73860_76307[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73741 === (17))){
var state_73738__$1 = state_73738;
var statearr_73863_76312 = state_73738__$1;
(statearr_73863_76312[(2)] = null);

(statearr_73863_76312[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73741 === (3))){
var inst_73734 = (state_73738[(2)]);
var state_73738__$1 = state_73738;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73738__$1,inst_73734);
} else {
if((state_val_73741 === (12))){
var inst_73656 = (state_73738[(2)]);
var state_73738__$1 = state_73738;
var statearr_73867_76318 = state_73738__$1;
(statearr_73867_76318[(2)] = inst_73656);

(statearr_73867_76318[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73741 === (2))){
var state_73738__$1 = state_73738;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73738__$1,(4),ch);
} else {
if((state_val_73741 === (23))){
var state_73738__$1 = state_73738;
var statearr_73871_76321 = state_73738__$1;
(statearr_73871_76321[(2)] = null);

(statearr_73871_76321[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73741 === (35))){
var inst_73717 = (state_73738[(2)]);
var state_73738__$1 = state_73738;
var statearr_73874_76323 = state_73738__$1;
(statearr_73874_76323[(2)] = inst_73717);

(statearr_73874_76323[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73741 === (19))){
var inst_73614 = (state_73738[(7)]);
var inst_73625 = cljs.core.chunk_first(inst_73614);
var inst_73626 = cljs.core.chunk_rest(inst_73614);
var inst_73628 = cljs.core.count(inst_73625);
var inst_73585 = inst_73626;
var inst_73586 = inst_73625;
var inst_73587 = inst_73628;
var inst_73588 = (0);
var state_73738__$1 = (function (){var statearr_73877 = state_73738;
(statearr_73877[(14)] = inst_73588);

(statearr_73877[(15)] = inst_73587);

(statearr_73877[(16)] = inst_73586);

(statearr_73877[(17)] = inst_73585);

return statearr_73877;
})();
var statearr_73880_76327 = state_73738__$1;
(statearr_73880_76327[(2)] = null);

(statearr_73880_76327[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73741 === (11))){
var inst_73614 = (state_73738[(7)]);
var inst_73585 = (state_73738[(17)]);
var inst_73614__$1 = cljs.core.seq(inst_73585);
var state_73738__$1 = (function (){var statearr_73882 = state_73738;
(statearr_73882[(7)] = inst_73614__$1);

return statearr_73882;
})();
if(inst_73614__$1){
var statearr_73883_76329 = state_73738__$1;
(statearr_73883_76329[(1)] = (16));

} else {
var statearr_73886_76332 = state_73738__$1;
(statearr_73886_76332[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73741 === (9))){
var inst_73658 = (state_73738[(2)]);
var state_73738__$1 = state_73738;
var statearr_73888_76336 = state_73738__$1;
(statearr_73888_76336[(2)] = inst_73658);

(statearr_73888_76336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73741 === (5))){
var inst_73581 = cljs.core.deref(cs);
var inst_73582 = cljs.core.seq(inst_73581);
var inst_73585 = inst_73582;
var inst_73586 = null;
var inst_73587 = (0);
var inst_73588 = (0);
var state_73738__$1 = (function (){var statearr_73890 = state_73738;
(statearr_73890[(14)] = inst_73588);

(statearr_73890[(15)] = inst_73587);

(statearr_73890[(16)] = inst_73586);

(statearr_73890[(17)] = inst_73585);

return statearr_73890;
})();
var statearr_73892_76342 = state_73738__$1;
(statearr_73892_76342[(2)] = null);

(statearr_73892_76342[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73741 === (14))){
var state_73738__$1 = state_73738;
var statearr_73897_76344 = state_73738__$1;
(statearr_73897_76344[(2)] = null);

(statearr_73897_76344[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73741 === (45))){
var inst_73725 = (state_73738[(2)]);
var state_73738__$1 = state_73738;
var statearr_73898_76345 = state_73738__$1;
(statearr_73898_76345[(2)] = inst_73725);

(statearr_73898_76345[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73741 === (26))){
var inst_73661 = (state_73738[(27)]);
var inst_73721 = (state_73738[(2)]);
var inst_73722 = cljs.core.seq(inst_73661);
var state_73738__$1 = (function (){var statearr_73900 = state_73738;
(statearr_73900[(29)] = inst_73721);

return statearr_73900;
})();
if(inst_73722){
var statearr_73903_76357 = state_73738__$1;
(statearr_73903_76357[(1)] = (42));

} else {
var statearr_73905_76358 = state_73738__$1;
(statearr_73905_76358[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73741 === (16))){
var inst_73614 = (state_73738[(7)]);
var inst_73619 = cljs.core.chunked_seq_QMARK_(inst_73614);
var state_73738__$1 = state_73738;
if(inst_73619){
var statearr_73908_76360 = state_73738__$1;
(statearr_73908_76360[(1)] = (19));

} else {
var statearr_73909_76362 = state_73738__$1;
(statearr_73909_76362[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73741 === (38))){
var inst_73714 = (state_73738[(2)]);
var state_73738__$1 = state_73738;
var statearr_73910_76363 = state_73738__$1;
(statearr_73910_76363[(2)] = inst_73714);

(statearr_73910_76363[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73741 === (30))){
var state_73738__$1 = state_73738;
var statearr_73913_76369 = state_73738__$1;
(statearr_73913_76369[(2)] = null);

(statearr_73913_76369[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73741 === (10))){
var inst_73588 = (state_73738[(14)]);
var inst_73586 = (state_73738[(16)]);
var inst_73596 = cljs.core._nth(inst_73586,inst_73588);
var inst_73597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_73596,(0),null);
var inst_73598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_73596,(1),null);
var state_73738__$1 = (function (){var statearr_73915 = state_73738;
(statearr_73915[(24)] = inst_73597);

return statearr_73915;
})();
if(cljs.core.truth_(inst_73598)){
var statearr_73916_76372 = state_73738__$1;
(statearr_73916_76372[(1)] = (13));

} else {
var statearr_73917_76374 = state_73738__$1;
(statearr_73917_76374[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73741 === (18))){
var inst_73654 = (state_73738[(2)]);
var state_73738__$1 = state_73738;
var statearr_73918_76375 = state_73738__$1;
(statearr_73918_76375[(2)] = inst_73654);

(statearr_73918_76375[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73741 === (42))){
var state_73738__$1 = state_73738;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73738__$1,(45),dchan);
} else {
if((state_val_73741 === (37))){
var inst_73704 = (state_73738[(22)]);
var inst_73692 = (state_73738[(23)]);
var inst_73573 = (state_73738[(12)]);
var inst_73704__$1 = cljs.core.first(inst_73692);
var inst_73705 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_73704__$1,inst_73573,done);
var state_73738__$1 = (function (){var statearr_73921 = state_73738;
(statearr_73921[(22)] = inst_73704__$1);

return statearr_73921;
})();
if(cljs.core.truth_(inst_73705)){
var statearr_73923_76384 = state_73738__$1;
(statearr_73923_76384[(1)] = (39));

} else {
var statearr_73924_76386 = state_73738__$1;
(statearr_73924_76386[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73741 === (8))){
var inst_73588 = (state_73738[(14)]);
var inst_73587 = (state_73738[(15)]);
var inst_73590 = (inst_73588 < inst_73587);
var inst_73591 = inst_73590;
var state_73738__$1 = state_73738;
if(cljs.core.truth_(inst_73591)){
var statearr_73925_76388 = state_73738__$1;
(statearr_73925_76388[(1)] = (10));

} else {
var statearr_73926_76389 = state_73738__$1;
(statearr_73926_76389[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__67873__auto__ = null;
var cljs$core$async$mult_$_state_machine__67873__auto____0 = (function (){
var statearr_73929 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73929[(0)] = cljs$core$async$mult_$_state_machine__67873__auto__);

(statearr_73929[(1)] = (1));

return statearr_73929;
});
var cljs$core$async$mult_$_state_machine__67873__auto____1 = (function (state_73738){
while(true){
var ret_value__67874__auto__ = (function (){try{while(true){
var result__67875__auto__ = switch__67872__auto__(state_73738);
if(cljs.core.keyword_identical_QMARK_(result__67875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67875__auto__;
}
break;
}
}catch (e73931){var ex__67876__auto__ = e73931;
var statearr_73932_76398 = state_73738;
(statearr_73932_76398[(2)] = ex__67876__auto__);


if(cljs.core.seq((state_73738[(4)]))){
var statearr_73933_76402 = state_73738;
(statearr_73933_76402[(1)] = cljs.core.first((state_73738[(4)])));

} else {
throw ex__67876__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__67874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76403 = state_73738;
state_73738 = G__76403;
continue;
} else {
return ret_value__67874__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__67873__auto__ = function(state_73738){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__67873__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__67873__auto____1.call(this,state_73738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__67873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__67873__auto____0;
cljs$core$async$mult_$_state_machine__67873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__67873__auto____1;
return cljs$core$async$mult_$_state_machine__67873__auto__;
})()
})();
var state__72169__auto__ = (function (){var statearr_73938 = f__72168__auto__();
(statearr_73938[(6)] = c__72167__auto___76190);

return statearr_73938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72169__auto__);
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
var G__73940 = arguments.length;
switch (G__73940) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_76418 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_76418(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_76424 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_76424(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_76435 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_76435(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_76437 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_76437(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_76446 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_76446(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___76452 = arguments.length;
var i__4737__auto___76454 = (0);
while(true){
if((i__4737__auto___76454 < len__4736__auto___76452)){
args__4742__auto__.push((arguments[i__4737__auto___76454]));

var G__76457 = (i__4737__auto___76454 + (1));
i__4737__auto___76454 = G__76457;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__73996){
var map__73997 = p__73996;
var map__73997__$1 = (((((!((map__73997 == null))))?(((((map__73997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73997):map__73997);
var opts = map__73997__$1;
var statearr_74004_76462 = state;
(statearr_74004_76462[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_74005_76463 = state;
(statearr_74005_76463[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_74007_76464 = state;
(statearr_74007_76464[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq73987){
var G__73988 = cljs.core.first(seq73987);
var seq73987__$1 = cljs.core.next(seq73987);
var G__73989 = cljs.core.first(seq73987__$1);
var seq73987__$2 = cljs.core.next(seq73987__$1);
var G__73990 = cljs.core.first(seq73987__$2);
var seq73987__$3 = cljs.core.next(seq73987__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73988,G__73989,G__73990,seq73987__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async74030 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async74030 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta74031){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta74031 = meta74031;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async74030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74032,meta74031__$1){
var self__ = this;
var _74032__$1 = this;
return (new cljs.core.async.t_cljs$core$async74030(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta74031__$1));
}));

(cljs.core.async.t_cljs$core$async74030.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74032){
var self__ = this;
var _74032__$1 = this;
return self__.meta74031;
}));

(cljs.core.async.t_cljs$core$async74030.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74030.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async74030.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74030.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async74030.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async74030.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async74030.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async74030.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async74030.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta74031","meta74031",599528881,null)], null);
}));

(cljs.core.async.t_cljs$core$async74030.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async74030.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async74030");

(cljs.core.async.t_cljs$core$async74030.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async74030");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async74030.
 */
cljs.core.async.__GT_t_cljs$core$async74030 = (function cljs$core$async$mix_$___GT_t_cljs$core$async74030(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta74031){
return (new cljs.core.async.t_cljs$core$async74030(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta74031));
});

}

return (new cljs.core.async.t_cljs$core$async74030(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__72167__auto___76516 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72168__auto__ = (function (){var switch__67872__auto__ = (function (state_74154){
var state_val_74155 = (state_74154[(1)]);
if((state_val_74155 === (7))){
var inst_74062 = (state_74154[(2)]);
var state_74154__$1 = state_74154;
var statearr_74157_76519 = state_74154__$1;
(statearr_74157_76519[(2)] = inst_74062);

(statearr_74157_76519[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74155 === (20))){
var inst_74076 = (state_74154[(7)]);
var state_74154__$1 = state_74154;
var statearr_74158_76521 = state_74154__$1;
(statearr_74158_76521[(2)] = inst_74076);

(statearr_74158_76521[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74155 === (27))){
var state_74154__$1 = state_74154;
var statearr_74159_76524 = state_74154__$1;
(statearr_74159_76524[(2)] = null);

(statearr_74159_76524[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74155 === (1))){
var inst_74047 = (state_74154[(8)]);
var inst_74047__$1 = calc_state();
var inst_74050 = (inst_74047__$1 == null);
var inst_74051 = cljs.core.not(inst_74050);
var state_74154__$1 = (function (){var statearr_74161 = state_74154;
(statearr_74161[(8)] = inst_74047__$1);

return statearr_74161;
})();
if(inst_74051){
var statearr_74163_76527 = state_74154__$1;
(statearr_74163_76527[(1)] = (2));

} else {
var statearr_74164_76529 = state_74154__$1;
(statearr_74164_76529[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74155 === (24))){
var inst_74101 = (state_74154[(9)]);
var inst_74126 = (state_74154[(10)]);
var inst_74111 = (state_74154[(11)]);
var inst_74126__$1 = (inst_74101.cljs$core$IFn$_invoke$arity$1 ? inst_74101.cljs$core$IFn$_invoke$arity$1(inst_74111) : inst_74101.call(null,inst_74111));
var state_74154__$1 = (function (){var statearr_74168 = state_74154;
(statearr_74168[(10)] = inst_74126__$1);

return statearr_74168;
})();
if(cljs.core.truth_(inst_74126__$1)){
var statearr_74170_76534 = state_74154__$1;
(statearr_74170_76534[(1)] = (29));

} else {
var statearr_74172_76535 = state_74154__$1;
(statearr_74172_76535[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74155 === (4))){
var inst_74065 = (state_74154[(2)]);
var state_74154__$1 = state_74154;
if(cljs.core.truth_(inst_74065)){
var statearr_74177_76538 = state_74154__$1;
(statearr_74177_76538[(1)] = (8));

} else {
var statearr_74178_76539 = state_74154__$1;
(statearr_74178_76539[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74155 === (15))){
var inst_74095 = (state_74154[(2)]);
var state_74154__$1 = state_74154;
if(cljs.core.truth_(inst_74095)){
var statearr_74179_76541 = state_74154__$1;
(statearr_74179_76541[(1)] = (19));

} else {
var statearr_74181_76542 = state_74154__$1;
(statearr_74181_76542[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74155 === (21))){
var inst_74100 = (state_74154[(12)]);
var inst_74100__$1 = (state_74154[(2)]);
var inst_74101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_74100__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_74102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_74100__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_74103 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_74100__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_74154__$1 = (function (){var statearr_74192 = state_74154;
(statearr_74192[(9)] = inst_74101);

(statearr_74192[(13)] = inst_74102);

(statearr_74192[(12)] = inst_74100__$1);

return statearr_74192;
})();
return cljs.core.async.ioc_alts_BANG_(state_74154__$1,(22),inst_74103);
} else {
if((state_val_74155 === (31))){
var inst_74136 = (state_74154[(2)]);
var state_74154__$1 = state_74154;
if(cljs.core.truth_(inst_74136)){
var statearr_74193_76555 = state_74154__$1;
(statearr_74193_76555[(1)] = (32));

} else {
var statearr_74194_76557 = state_74154__$1;
(statearr_74194_76557[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74155 === (32))){
var inst_74110 = (state_74154[(14)]);
var state_74154__$1 = state_74154;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74154__$1,(35),out,inst_74110);
} else {
if((state_val_74155 === (33))){
var inst_74100 = (state_74154[(12)]);
var inst_74076 = inst_74100;
var state_74154__$1 = (function (){var statearr_74199 = state_74154;
(statearr_74199[(7)] = inst_74076);

return statearr_74199;
})();
var statearr_74200_76566 = state_74154__$1;
(statearr_74200_76566[(2)] = null);

(statearr_74200_76566[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74155 === (13))){
var inst_74076 = (state_74154[(7)]);
var inst_74084 = inst_74076.cljs$lang$protocol_mask$partition0$;
var inst_74085 = (inst_74084 & (64));
var inst_74086 = inst_74076.cljs$core$ISeq$;
var inst_74087 = (cljs.core.PROTOCOL_SENTINEL === inst_74086);
var inst_74088 = ((inst_74085) || (inst_74087));
var state_74154__$1 = state_74154;
if(cljs.core.truth_(inst_74088)){
var statearr_74202_76570 = state_74154__$1;
(statearr_74202_76570[(1)] = (16));

} else {
var statearr_74203_76573 = state_74154__$1;
(statearr_74203_76573[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74155 === (22))){
var inst_74111 = (state_74154[(11)]);
var inst_74110 = (state_74154[(14)]);
var inst_74109 = (state_74154[(2)]);
var inst_74110__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74109,(0),null);
var inst_74111__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74109,(1),null);
var inst_74113 = (inst_74110__$1 == null);
var inst_74114 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_74111__$1,change);
var inst_74115 = ((inst_74113) || (inst_74114));
var state_74154__$1 = (function (){var statearr_74206 = state_74154;
(statearr_74206[(11)] = inst_74111__$1);

(statearr_74206[(14)] = inst_74110__$1);

return statearr_74206;
})();
if(cljs.core.truth_(inst_74115)){
var statearr_74207_76577 = state_74154__$1;
(statearr_74207_76577[(1)] = (23));

} else {
var statearr_74208_76578 = state_74154__$1;
(statearr_74208_76578[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74155 === (36))){
var inst_74100 = (state_74154[(12)]);
var inst_74076 = inst_74100;
var state_74154__$1 = (function (){var statearr_74209 = state_74154;
(statearr_74209[(7)] = inst_74076);

return statearr_74209;
})();
var statearr_74210_76583 = state_74154__$1;
(statearr_74210_76583[(2)] = null);

(statearr_74210_76583[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74155 === (29))){
var inst_74126 = (state_74154[(10)]);
var state_74154__$1 = state_74154;
var statearr_74213_76586 = state_74154__$1;
(statearr_74213_76586[(2)] = inst_74126);

(statearr_74213_76586[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74155 === (6))){
var state_74154__$1 = state_74154;
var statearr_74214_76587 = state_74154__$1;
(statearr_74214_76587[(2)] = false);

(statearr_74214_76587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74155 === (28))){
var inst_74122 = (state_74154[(2)]);
var inst_74123 = calc_state();
var inst_74076 = inst_74123;
var state_74154__$1 = (function (){var statearr_74215 = state_74154;
(statearr_74215[(7)] = inst_74076);

(statearr_74215[(15)] = inst_74122);

return statearr_74215;
})();
var statearr_74217_76591 = state_74154__$1;
(statearr_74217_76591[(2)] = null);

(statearr_74217_76591[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74155 === (25))){
var inst_74150 = (state_74154[(2)]);
var state_74154__$1 = state_74154;
var statearr_74220_76594 = state_74154__$1;
(statearr_74220_76594[(2)] = inst_74150);

(statearr_74220_76594[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74155 === (34))){
var inst_74148 = (state_74154[(2)]);
var state_74154__$1 = state_74154;
var statearr_74222_76595 = state_74154__$1;
(statearr_74222_76595[(2)] = inst_74148);

(statearr_74222_76595[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74155 === (17))){
var state_74154__$1 = state_74154;
var statearr_74223_76597 = state_74154__$1;
(statearr_74223_76597[(2)] = false);

(statearr_74223_76597[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74155 === (3))){
var state_74154__$1 = state_74154;
var statearr_74225_76600 = state_74154__$1;
(statearr_74225_76600[(2)] = false);

(statearr_74225_76600[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74155 === (12))){
var inst_74152 = (state_74154[(2)]);
var state_74154__$1 = state_74154;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74154__$1,inst_74152);
} else {
if((state_val_74155 === (2))){
var inst_74047 = (state_74154[(8)]);
var inst_74053 = inst_74047.cljs$lang$protocol_mask$partition0$;
var inst_74054 = (inst_74053 & (64));
var inst_74056 = inst_74047.cljs$core$ISeq$;
var inst_74057 = (cljs.core.PROTOCOL_SENTINEL === inst_74056);
var inst_74058 = ((inst_74054) || (inst_74057));
var state_74154__$1 = state_74154;
if(cljs.core.truth_(inst_74058)){
var statearr_74233_76607 = state_74154__$1;
(statearr_74233_76607[(1)] = (5));

} else {
var statearr_74234_76608 = state_74154__$1;
(statearr_74234_76608[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74155 === (23))){
var inst_74110 = (state_74154[(14)]);
var inst_74117 = (inst_74110 == null);
var state_74154__$1 = state_74154;
if(cljs.core.truth_(inst_74117)){
var statearr_74235_76610 = state_74154__$1;
(statearr_74235_76610[(1)] = (26));

} else {
var statearr_74236_76611 = state_74154__$1;
(statearr_74236_76611[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74155 === (35))){
var inst_74139 = (state_74154[(2)]);
var state_74154__$1 = state_74154;
if(cljs.core.truth_(inst_74139)){
var statearr_74239_76614 = state_74154__$1;
(statearr_74239_76614[(1)] = (36));

} else {
var statearr_74242_76615 = state_74154__$1;
(statearr_74242_76615[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74155 === (19))){
var inst_74076 = (state_74154[(7)]);
var inst_74097 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_74076);
var state_74154__$1 = state_74154;
var statearr_74244_76617 = state_74154__$1;
(statearr_74244_76617[(2)] = inst_74097);

(statearr_74244_76617[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74155 === (11))){
var inst_74076 = (state_74154[(7)]);
var inst_74081 = (inst_74076 == null);
var inst_74082 = cljs.core.not(inst_74081);
var state_74154__$1 = state_74154;
if(inst_74082){
var statearr_74247_76622 = state_74154__$1;
(statearr_74247_76622[(1)] = (13));

} else {
var statearr_74248_76623 = state_74154__$1;
(statearr_74248_76623[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74155 === (9))){
var inst_74047 = (state_74154[(8)]);
var state_74154__$1 = state_74154;
var statearr_74249_76624 = state_74154__$1;
(statearr_74249_76624[(2)] = inst_74047);

(statearr_74249_76624[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74155 === (5))){
var state_74154__$1 = state_74154;
var statearr_74251_76625 = state_74154__$1;
(statearr_74251_76625[(2)] = true);

(statearr_74251_76625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74155 === (14))){
var state_74154__$1 = state_74154;
var statearr_74253_76626 = state_74154__$1;
(statearr_74253_76626[(2)] = false);

(statearr_74253_76626[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74155 === (26))){
var inst_74111 = (state_74154[(11)]);
var inst_74119 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_74111);
var state_74154__$1 = state_74154;
var statearr_74255_76629 = state_74154__$1;
(statearr_74255_76629[(2)] = inst_74119);

(statearr_74255_76629[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74155 === (16))){
var state_74154__$1 = state_74154;
var statearr_74256_76630 = state_74154__$1;
(statearr_74256_76630[(2)] = true);

(statearr_74256_76630[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74155 === (38))){
var inst_74144 = (state_74154[(2)]);
var state_74154__$1 = state_74154;
var statearr_74257_76631 = state_74154__$1;
(statearr_74257_76631[(2)] = inst_74144);

(statearr_74257_76631[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74155 === (30))){
var inst_74101 = (state_74154[(9)]);
var inst_74102 = (state_74154[(13)]);
var inst_74111 = (state_74154[(11)]);
var inst_74129 = cljs.core.empty_QMARK_(inst_74101);
var inst_74130 = (inst_74102.cljs$core$IFn$_invoke$arity$1 ? inst_74102.cljs$core$IFn$_invoke$arity$1(inst_74111) : inst_74102.call(null,inst_74111));
var inst_74132 = cljs.core.not(inst_74130);
var inst_74134 = ((inst_74129) && (inst_74132));
var state_74154__$1 = state_74154;
var statearr_74260_76635 = state_74154__$1;
(statearr_74260_76635[(2)] = inst_74134);

(statearr_74260_76635[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74155 === (10))){
var inst_74047 = (state_74154[(8)]);
var inst_74071 = (state_74154[(2)]);
var inst_74072 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_74071,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_74074 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_74071,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_74075 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_74071,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_74076 = inst_74047;
var state_74154__$1 = (function (){var statearr_74261 = state_74154;
(statearr_74261[(7)] = inst_74076);

(statearr_74261[(16)] = inst_74075);

(statearr_74261[(17)] = inst_74072);

(statearr_74261[(18)] = inst_74074);

return statearr_74261;
})();
var statearr_74263_76640 = state_74154__$1;
(statearr_74263_76640[(2)] = null);

(statearr_74263_76640[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74155 === (18))){
var inst_74092 = (state_74154[(2)]);
var state_74154__$1 = state_74154;
var statearr_74266_76643 = state_74154__$1;
(statearr_74266_76643[(2)] = inst_74092);

(statearr_74266_76643[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74155 === (37))){
var state_74154__$1 = state_74154;
var statearr_74268_76645 = state_74154__$1;
(statearr_74268_76645[(2)] = null);

(statearr_74268_76645[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74155 === (8))){
var inst_74047 = (state_74154[(8)]);
var inst_74068 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_74047);
var state_74154__$1 = state_74154;
var statearr_74269_76646 = state_74154__$1;
(statearr_74269_76646[(2)] = inst_74068);

(statearr_74269_76646[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__67873__auto__ = null;
var cljs$core$async$mix_$_state_machine__67873__auto____0 = (function (){
var statearr_74278 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_74278[(0)] = cljs$core$async$mix_$_state_machine__67873__auto__);

(statearr_74278[(1)] = (1));

return statearr_74278;
});
var cljs$core$async$mix_$_state_machine__67873__auto____1 = (function (state_74154){
while(true){
var ret_value__67874__auto__ = (function (){try{while(true){
var result__67875__auto__ = switch__67872__auto__(state_74154);
if(cljs.core.keyword_identical_QMARK_(result__67875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67875__auto__;
}
break;
}
}catch (e74279){var ex__67876__auto__ = e74279;
var statearr_74280_76647 = state_74154;
(statearr_74280_76647[(2)] = ex__67876__auto__);


if(cljs.core.seq((state_74154[(4)]))){
var statearr_74281_76648 = state_74154;
(statearr_74281_76648[(1)] = cljs.core.first((state_74154[(4)])));

} else {
throw ex__67876__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__67874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76651 = state_74154;
state_74154 = G__76651;
continue;
} else {
return ret_value__67874__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__67873__auto__ = function(state_74154){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__67873__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__67873__auto____1.call(this,state_74154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__67873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__67873__auto____0;
cljs$core$async$mix_$_state_machine__67873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__67873__auto____1;
return cljs$core$async$mix_$_state_machine__67873__auto__;
})()
})();
var state__72169__auto__ = (function (){var statearr_74284 = f__72168__auto__();
(statearr_74284[(6)] = c__72167__auto___76516);

return statearr_74284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72169__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_76659 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_76659(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_76663 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_76663(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_76668 = (function() {
var G__76669 = null;
var G__76669__1 = (function (p){
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
var G__76669__2 = (function (p,v){
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
G__76669 = function(p,v){
switch(arguments.length){
case 1:
return G__76669__1.call(this,p);
case 2:
return G__76669__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__76669.cljs$core$IFn$_invoke$arity$1 = G__76669__1;
G__76669.cljs$core$IFn$_invoke$arity$2 = G__76669__2;
return G__76669;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__74314 = arguments.length;
switch (G__74314) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_76668(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_76668(p,v);
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
var G__74323 = arguments.length;
switch (G__74323) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__74320_SHARP_){
if(cljs.core.truth_((p1__74320_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__74320_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__74320_SHARP_.call(null,topic)))){
return p1__74320_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__74320_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async74334 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async74334 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta74335){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta74335 = meta74335;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async74334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74336,meta74335__$1){
var self__ = this;
var _74336__$1 = this;
return (new cljs.core.async.t_cljs$core$async74334(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta74335__$1));
}));

(cljs.core.async.t_cljs$core$async74334.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74336){
var self__ = this;
var _74336__$1 = this;
return self__.meta74335;
}));

(cljs.core.async.t_cljs$core$async74334.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74334.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async74334.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74334.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async74334.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async74334.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async74334.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async74334.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta74335","meta74335",1494874014,null)], null);
}));

(cljs.core.async.t_cljs$core$async74334.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async74334.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async74334");

(cljs.core.async.t_cljs$core$async74334.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async74334");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async74334.
 */
cljs.core.async.__GT_t_cljs$core$async74334 = (function cljs$core$async$__GT_t_cljs$core$async74334(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta74335){
return (new cljs.core.async.t_cljs$core$async74334(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta74335));
});

}

return (new cljs.core.async.t_cljs$core$async74334(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__72167__auto___76706 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72168__auto__ = (function (){var switch__67872__auto__ = (function (state_74453){
var state_val_74454 = (state_74453[(1)]);
if((state_val_74454 === (7))){
var inst_74444 = (state_74453[(2)]);
var state_74453__$1 = state_74453;
var statearr_74459_76707 = state_74453__$1;
(statearr_74459_76707[(2)] = inst_74444);

(statearr_74459_76707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74454 === (20))){
var state_74453__$1 = state_74453;
var statearr_74460_76710 = state_74453__$1;
(statearr_74460_76710[(2)] = null);

(statearr_74460_76710[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74454 === (1))){
var state_74453__$1 = state_74453;
var statearr_74461_76712 = state_74453__$1;
(statearr_74461_76712[(2)] = null);

(statearr_74461_76712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74454 === (24))){
var inst_74422 = (state_74453[(7)]);
var inst_74435 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_74422);
var state_74453__$1 = state_74453;
var statearr_74464_76714 = state_74453__$1;
(statearr_74464_76714[(2)] = inst_74435);

(statearr_74464_76714[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74454 === (4))){
var inst_74359 = (state_74453[(8)]);
var inst_74359__$1 = (state_74453[(2)]);
var inst_74361 = (inst_74359__$1 == null);
var state_74453__$1 = (function (){var statearr_74465 = state_74453;
(statearr_74465[(8)] = inst_74359__$1);

return statearr_74465;
})();
if(cljs.core.truth_(inst_74361)){
var statearr_74466_76716 = state_74453__$1;
(statearr_74466_76716[(1)] = (5));

} else {
var statearr_74469_76717 = state_74453__$1;
(statearr_74469_76717[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74454 === (15))){
var inst_74416 = (state_74453[(2)]);
var state_74453__$1 = state_74453;
var statearr_74471_76722 = state_74453__$1;
(statearr_74471_76722[(2)] = inst_74416);

(statearr_74471_76722[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74454 === (21))){
var inst_74441 = (state_74453[(2)]);
var state_74453__$1 = (function (){var statearr_74472 = state_74453;
(statearr_74472[(9)] = inst_74441);

return statearr_74472;
})();
var statearr_74474_76727 = state_74453__$1;
(statearr_74474_76727[(2)] = null);

(statearr_74474_76727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74454 === (13))){
var inst_74388 = (state_74453[(10)]);
var inst_74390 = cljs.core.chunked_seq_QMARK_(inst_74388);
var state_74453__$1 = state_74453;
if(inst_74390){
var statearr_74476_76728 = state_74453__$1;
(statearr_74476_76728[(1)] = (16));

} else {
var statearr_74477_76729 = state_74453__$1;
(statearr_74477_76729[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74454 === (22))){
var inst_74432 = (state_74453[(2)]);
var state_74453__$1 = state_74453;
if(cljs.core.truth_(inst_74432)){
var statearr_74479_76730 = state_74453__$1;
(statearr_74479_76730[(1)] = (23));

} else {
var statearr_74480_76731 = state_74453__$1;
(statearr_74480_76731[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74454 === (6))){
var inst_74359 = (state_74453[(8)]);
var inst_74424 = (state_74453[(11)]);
var inst_74422 = (state_74453[(7)]);
var inst_74422__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_74359) : topic_fn.call(null,inst_74359));
var inst_74423 = cljs.core.deref(mults);
var inst_74424__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_74423,inst_74422__$1);
var state_74453__$1 = (function (){var statearr_74482 = state_74453;
(statearr_74482[(11)] = inst_74424__$1);

(statearr_74482[(7)] = inst_74422__$1);

return statearr_74482;
})();
if(cljs.core.truth_(inst_74424__$1)){
var statearr_74483_76732 = state_74453__$1;
(statearr_74483_76732[(1)] = (19));

} else {
var statearr_74485_76734 = state_74453__$1;
(statearr_74485_76734[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74454 === (25))){
var inst_74437 = (state_74453[(2)]);
var state_74453__$1 = state_74453;
var statearr_74487_76736 = state_74453__$1;
(statearr_74487_76736[(2)] = inst_74437);

(statearr_74487_76736[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74454 === (17))){
var inst_74388 = (state_74453[(10)]);
var inst_74407 = cljs.core.first(inst_74388);
var inst_74408 = cljs.core.async.muxch_STAR_(inst_74407);
var inst_74409 = cljs.core.async.close_BANG_(inst_74408);
var inst_74410 = cljs.core.next(inst_74388);
var inst_74370 = inst_74410;
var inst_74371 = null;
var inst_74372 = (0);
var inst_74373 = (0);
var state_74453__$1 = (function (){var statearr_74488 = state_74453;
(statearr_74488[(12)] = inst_74372);

(statearr_74488[(13)] = inst_74373);

(statearr_74488[(14)] = inst_74371);

(statearr_74488[(15)] = inst_74409);

(statearr_74488[(16)] = inst_74370);

return statearr_74488;
})();
var statearr_74490_76742 = state_74453__$1;
(statearr_74490_76742[(2)] = null);

(statearr_74490_76742[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74454 === (3))){
var inst_74446 = (state_74453[(2)]);
var state_74453__$1 = state_74453;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74453__$1,inst_74446);
} else {
if((state_val_74454 === (12))){
var inst_74418 = (state_74453[(2)]);
var state_74453__$1 = state_74453;
var statearr_74491_76747 = state_74453__$1;
(statearr_74491_76747[(2)] = inst_74418);

(statearr_74491_76747[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74454 === (2))){
var state_74453__$1 = state_74453;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74453__$1,(4),ch);
} else {
if((state_val_74454 === (23))){
var state_74453__$1 = state_74453;
var statearr_74493_76749 = state_74453__$1;
(statearr_74493_76749[(2)] = null);

(statearr_74493_76749[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74454 === (19))){
var inst_74359 = (state_74453[(8)]);
var inst_74424 = (state_74453[(11)]);
var inst_74430 = cljs.core.async.muxch_STAR_(inst_74424);
var state_74453__$1 = state_74453;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74453__$1,(22),inst_74430,inst_74359);
} else {
if((state_val_74454 === (11))){
var inst_74388 = (state_74453[(10)]);
var inst_74370 = (state_74453[(16)]);
var inst_74388__$1 = cljs.core.seq(inst_74370);
var state_74453__$1 = (function (){var statearr_74498 = state_74453;
(statearr_74498[(10)] = inst_74388__$1);

return statearr_74498;
})();
if(inst_74388__$1){
var statearr_74499_76751 = state_74453__$1;
(statearr_74499_76751[(1)] = (13));

} else {
var statearr_74500_76753 = state_74453__$1;
(statearr_74500_76753[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74454 === (9))){
var inst_74420 = (state_74453[(2)]);
var state_74453__$1 = state_74453;
var statearr_74501_76759 = state_74453__$1;
(statearr_74501_76759[(2)] = inst_74420);

(statearr_74501_76759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74454 === (5))){
var inst_74367 = cljs.core.deref(mults);
var inst_74368 = cljs.core.vals(inst_74367);
var inst_74369 = cljs.core.seq(inst_74368);
var inst_74370 = inst_74369;
var inst_74371 = null;
var inst_74372 = (0);
var inst_74373 = (0);
var state_74453__$1 = (function (){var statearr_74503 = state_74453;
(statearr_74503[(12)] = inst_74372);

(statearr_74503[(13)] = inst_74373);

(statearr_74503[(14)] = inst_74371);

(statearr_74503[(16)] = inst_74370);

return statearr_74503;
})();
var statearr_74504_76760 = state_74453__$1;
(statearr_74504_76760[(2)] = null);

(statearr_74504_76760[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74454 === (14))){
var state_74453__$1 = state_74453;
var statearr_74509_76761 = state_74453__$1;
(statearr_74509_76761[(2)] = null);

(statearr_74509_76761[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74454 === (16))){
var inst_74388 = (state_74453[(10)]);
var inst_74393 = cljs.core.chunk_first(inst_74388);
var inst_74396 = cljs.core.chunk_rest(inst_74388);
var inst_74401 = cljs.core.count(inst_74393);
var inst_74370 = inst_74396;
var inst_74371 = inst_74393;
var inst_74372 = inst_74401;
var inst_74373 = (0);
var state_74453__$1 = (function (){var statearr_74511 = state_74453;
(statearr_74511[(12)] = inst_74372);

(statearr_74511[(13)] = inst_74373);

(statearr_74511[(14)] = inst_74371);

(statearr_74511[(16)] = inst_74370);

return statearr_74511;
})();
var statearr_74512_76764 = state_74453__$1;
(statearr_74512_76764[(2)] = null);

(statearr_74512_76764[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74454 === (10))){
var inst_74372 = (state_74453[(12)]);
var inst_74373 = (state_74453[(13)]);
var inst_74371 = (state_74453[(14)]);
var inst_74370 = (state_74453[(16)]);
var inst_74379 = cljs.core._nth(inst_74371,inst_74373);
var inst_74383 = cljs.core.async.muxch_STAR_(inst_74379);
var inst_74384 = cljs.core.async.close_BANG_(inst_74383);
var inst_74385 = (inst_74373 + (1));
var tmp74506 = inst_74372;
var tmp74507 = inst_74371;
var tmp74508 = inst_74370;
var inst_74370__$1 = tmp74508;
var inst_74371__$1 = tmp74507;
var inst_74372__$1 = tmp74506;
var inst_74373__$1 = inst_74385;
var state_74453__$1 = (function (){var statearr_74517 = state_74453;
(statearr_74517[(17)] = inst_74384);

(statearr_74517[(12)] = inst_74372__$1);

(statearr_74517[(13)] = inst_74373__$1);

(statearr_74517[(14)] = inst_74371__$1);

(statearr_74517[(16)] = inst_74370__$1);

return statearr_74517;
})();
var statearr_74519_76771 = state_74453__$1;
(statearr_74519_76771[(2)] = null);

(statearr_74519_76771[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74454 === (18))){
var inst_74413 = (state_74453[(2)]);
var state_74453__$1 = state_74453;
var statearr_74520_76775 = state_74453__$1;
(statearr_74520_76775[(2)] = inst_74413);

(statearr_74520_76775[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74454 === (8))){
var inst_74372 = (state_74453[(12)]);
var inst_74373 = (state_74453[(13)]);
var inst_74375 = (inst_74373 < inst_74372);
var inst_74376 = inst_74375;
var state_74453__$1 = state_74453;
if(cljs.core.truth_(inst_74376)){
var statearr_74523_76777 = state_74453__$1;
(statearr_74523_76777[(1)] = (10));

} else {
var statearr_74524_76778 = state_74453__$1;
(statearr_74524_76778[(1)] = (11));

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
var cljs$core$async$state_machine__67873__auto__ = null;
var cljs$core$async$state_machine__67873__auto____0 = (function (){
var statearr_74527 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_74527[(0)] = cljs$core$async$state_machine__67873__auto__);

(statearr_74527[(1)] = (1));

return statearr_74527;
});
var cljs$core$async$state_machine__67873__auto____1 = (function (state_74453){
while(true){
var ret_value__67874__auto__ = (function (){try{while(true){
var result__67875__auto__ = switch__67872__auto__(state_74453);
if(cljs.core.keyword_identical_QMARK_(result__67875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67875__auto__;
}
break;
}
}catch (e74528){var ex__67876__auto__ = e74528;
var statearr_74529_76785 = state_74453;
(statearr_74529_76785[(2)] = ex__67876__auto__);


if(cljs.core.seq((state_74453[(4)]))){
var statearr_74530_76787 = state_74453;
(statearr_74530_76787[(1)] = cljs.core.first((state_74453[(4)])));

} else {
throw ex__67876__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__67874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76788 = state_74453;
state_74453 = G__76788;
continue;
} else {
return ret_value__67874__auto__;
}
break;
}
});
cljs$core$async$state_machine__67873__auto__ = function(state_74453){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__67873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__67873__auto____1.call(this,state_74453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__67873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__67873__auto____0;
cljs$core$async$state_machine__67873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__67873__auto____1;
return cljs$core$async$state_machine__67873__auto__;
})()
})();
var state__72169__auto__ = (function (){var statearr_74532 = f__72168__auto__();
(statearr_74532[(6)] = c__72167__auto___76706);

return statearr_74532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72169__auto__);
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
var G__74536 = arguments.length;
switch (G__74536) {
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
var G__74542 = arguments.length;
switch (G__74542) {
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
var G__74546 = arguments.length;
switch (G__74546) {
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
var c__72167__auto___76806 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72168__auto__ = (function (){var switch__67872__auto__ = (function (state_74600){
var state_val_74601 = (state_74600[(1)]);
if((state_val_74601 === (7))){
var state_74600__$1 = state_74600;
var statearr_74603_76808 = state_74600__$1;
(statearr_74603_76808[(2)] = null);

(statearr_74603_76808[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74601 === (1))){
var state_74600__$1 = state_74600;
var statearr_74605_76811 = state_74600__$1;
(statearr_74605_76811[(2)] = null);

(statearr_74605_76811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74601 === (4))){
var inst_74557 = (state_74600[(7)]);
var inst_74555 = (state_74600[(8)]);
var inst_74559 = (inst_74557 < inst_74555);
var state_74600__$1 = state_74600;
if(cljs.core.truth_(inst_74559)){
var statearr_74607_76813 = state_74600__$1;
(statearr_74607_76813[(1)] = (6));

} else {
var statearr_74608_76814 = state_74600__$1;
(statearr_74608_76814[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74601 === (15))){
var inst_74586 = (state_74600[(9)]);
var inst_74591 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_74586);
var state_74600__$1 = state_74600;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74600__$1,(17),out,inst_74591);
} else {
if((state_val_74601 === (13))){
var inst_74586 = (state_74600[(9)]);
var inst_74586__$1 = (state_74600[(2)]);
var inst_74587 = cljs.core.some(cljs.core.nil_QMARK_,inst_74586__$1);
var state_74600__$1 = (function (){var statearr_74610 = state_74600;
(statearr_74610[(9)] = inst_74586__$1);

return statearr_74610;
})();
if(cljs.core.truth_(inst_74587)){
var statearr_74611_76821 = state_74600__$1;
(statearr_74611_76821[(1)] = (14));

} else {
var statearr_74612_76823 = state_74600__$1;
(statearr_74612_76823[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74601 === (6))){
var state_74600__$1 = state_74600;
var statearr_74614_76824 = state_74600__$1;
(statearr_74614_76824[(2)] = null);

(statearr_74614_76824[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74601 === (17))){
var inst_74593 = (state_74600[(2)]);
var state_74600__$1 = (function (){var statearr_74619 = state_74600;
(statearr_74619[(10)] = inst_74593);

return statearr_74619;
})();
var statearr_74621_76826 = state_74600__$1;
(statearr_74621_76826[(2)] = null);

(statearr_74621_76826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74601 === (3))){
var inst_74598 = (state_74600[(2)]);
var state_74600__$1 = state_74600;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74600__$1,inst_74598);
} else {
if((state_val_74601 === (12))){
var _ = (function (){var statearr_74623 = state_74600;
(statearr_74623[(4)] = cljs.core.rest((state_74600[(4)])));

return statearr_74623;
})();
var state_74600__$1 = state_74600;
var ex74618 = (state_74600__$1[(2)]);
var statearr_74624_76838 = state_74600__$1;
(statearr_74624_76838[(5)] = ex74618);


if((ex74618 instanceof Object)){
var statearr_74625_76841 = state_74600__$1;
(statearr_74625_76841[(1)] = (11));

(statearr_74625_76841[(5)] = null);

} else {
throw ex74618;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74601 === (2))){
var inst_74554 = cljs.core.reset_BANG_(dctr,cnt);
var inst_74555 = cnt;
var inst_74557 = (0);
var state_74600__$1 = (function (){var statearr_74632 = state_74600;
(statearr_74632[(11)] = inst_74554);

(statearr_74632[(7)] = inst_74557);

(statearr_74632[(8)] = inst_74555);

return statearr_74632;
})();
var statearr_74634_76843 = state_74600__$1;
(statearr_74634_76843[(2)] = null);

(statearr_74634_76843[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74601 === (11))){
var inst_74562 = (state_74600[(2)]);
var inst_74563 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_74600__$1 = (function (){var statearr_74636 = state_74600;
(statearr_74636[(12)] = inst_74562);

return statearr_74636;
})();
var statearr_74637_76851 = state_74600__$1;
(statearr_74637_76851[(2)] = inst_74563);

(statearr_74637_76851[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74601 === (9))){
var inst_74557 = (state_74600[(7)]);
var _ = (function (){var statearr_74639 = state_74600;
(statearr_74639[(4)] = cljs.core.cons((12),(state_74600[(4)])));

return statearr_74639;
})();
var inst_74570 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_74557) : chs__$1.call(null,inst_74557));
var inst_74571 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_74557) : done.call(null,inst_74557));
var inst_74572 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_74570,inst_74571);
var ___$1 = (function (){var statearr_74641 = state_74600;
(statearr_74641[(4)] = cljs.core.rest((state_74600[(4)])));

return statearr_74641;
})();
var state_74600__$1 = state_74600;
var statearr_74642_76865 = state_74600__$1;
(statearr_74642_76865[(2)] = inst_74572);

(statearr_74642_76865[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74601 === (5))){
var inst_74582 = (state_74600[(2)]);
var state_74600__$1 = (function (){var statearr_74644 = state_74600;
(statearr_74644[(13)] = inst_74582);

return statearr_74644;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74600__$1,(13),dchan);
} else {
if((state_val_74601 === (14))){
var inst_74589 = cljs.core.async.close_BANG_(out);
var state_74600__$1 = state_74600;
var statearr_74645_76873 = state_74600__$1;
(statearr_74645_76873[(2)] = inst_74589);

(statearr_74645_76873[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74601 === (16))){
var inst_74596 = (state_74600[(2)]);
var state_74600__$1 = state_74600;
var statearr_74647_76875 = state_74600__$1;
(statearr_74647_76875[(2)] = inst_74596);

(statearr_74647_76875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74601 === (10))){
var inst_74557 = (state_74600[(7)]);
var inst_74575 = (state_74600[(2)]);
var inst_74576 = (inst_74557 + (1));
var inst_74557__$1 = inst_74576;
var state_74600__$1 = (function (){var statearr_74648 = state_74600;
(statearr_74648[(7)] = inst_74557__$1);

(statearr_74648[(14)] = inst_74575);

return statearr_74648;
})();
var statearr_74649_76890 = state_74600__$1;
(statearr_74649_76890[(2)] = null);

(statearr_74649_76890[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74601 === (8))){
var inst_74580 = (state_74600[(2)]);
var state_74600__$1 = state_74600;
var statearr_74651_76892 = state_74600__$1;
(statearr_74651_76892[(2)] = inst_74580);

(statearr_74651_76892[(1)] = (5));


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
var cljs$core$async$state_machine__67873__auto__ = null;
var cljs$core$async$state_machine__67873__auto____0 = (function (){
var statearr_74653 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_74653[(0)] = cljs$core$async$state_machine__67873__auto__);

(statearr_74653[(1)] = (1));

return statearr_74653;
});
var cljs$core$async$state_machine__67873__auto____1 = (function (state_74600){
while(true){
var ret_value__67874__auto__ = (function (){try{while(true){
var result__67875__auto__ = switch__67872__auto__(state_74600);
if(cljs.core.keyword_identical_QMARK_(result__67875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67875__auto__;
}
break;
}
}catch (e74657){var ex__67876__auto__ = e74657;
var statearr_74658_76897 = state_74600;
(statearr_74658_76897[(2)] = ex__67876__auto__);


if(cljs.core.seq((state_74600[(4)]))){
var statearr_74659_76899 = state_74600;
(statearr_74659_76899[(1)] = cljs.core.first((state_74600[(4)])));

} else {
throw ex__67876__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__67874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76900 = state_74600;
state_74600 = G__76900;
continue;
} else {
return ret_value__67874__auto__;
}
break;
}
});
cljs$core$async$state_machine__67873__auto__ = function(state_74600){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__67873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__67873__auto____1.call(this,state_74600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__67873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__67873__auto____0;
cljs$core$async$state_machine__67873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__67873__auto____1;
return cljs$core$async$state_machine__67873__auto__;
})()
})();
var state__72169__auto__ = (function (){var statearr_74661 = f__72168__auto__();
(statearr_74661[(6)] = c__72167__auto___76806);

return statearr_74661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72169__auto__);
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
var G__74665 = arguments.length;
switch (G__74665) {
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
var c__72167__auto___76910 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72168__auto__ = (function (){var switch__67872__auto__ = (function (state_74701){
var state_val_74702 = (state_74701[(1)]);
if((state_val_74702 === (7))){
var inst_74679 = (state_74701[(7)]);
var inst_74680 = (state_74701[(8)]);
var inst_74679__$1 = (state_74701[(2)]);
var inst_74680__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74679__$1,(0),null);
var inst_74681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74679__$1,(1),null);
var inst_74682 = (inst_74680__$1 == null);
var state_74701__$1 = (function (){var statearr_74707 = state_74701;
(statearr_74707[(9)] = inst_74681);

(statearr_74707[(7)] = inst_74679__$1);

(statearr_74707[(8)] = inst_74680__$1);

return statearr_74707;
})();
if(cljs.core.truth_(inst_74682)){
var statearr_74708_76916 = state_74701__$1;
(statearr_74708_76916[(1)] = (8));

} else {
var statearr_74709_76918 = state_74701__$1;
(statearr_74709_76918[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74702 === (1))){
var inst_74668 = cljs.core.vec(chs);
var inst_74669 = inst_74668;
var state_74701__$1 = (function (){var statearr_74711 = state_74701;
(statearr_74711[(10)] = inst_74669);

return statearr_74711;
})();
var statearr_74712_76919 = state_74701__$1;
(statearr_74712_76919[(2)] = null);

(statearr_74712_76919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74702 === (4))){
var inst_74669 = (state_74701[(10)]);
var state_74701__$1 = state_74701;
return cljs.core.async.ioc_alts_BANG_(state_74701__$1,(7),inst_74669);
} else {
if((state_val_74702 === (6))){
var inst_74697 = (state_74701[(2)]);
var state_74701__$1 = state_74701;
var statearr_74714_76921 = state_74701__$1;
(statearr_74714_76921[(2)] = inst_74697);

(statearr_74714_76921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74702 === (3))){
var inst_74699 = (state_74701[(2)]);
var state_74701__$1 = state_74701;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74701__$1,inst_74699);
} else {
if((state_val_74702 === (2))){
var inst_74669 = (state_74701[(10)]);
var inst_74671 = cljs.core.count(inst_74669);
var inst_74672 = (inst_74671 > (0));
var state_74701__$1 = state_74701;
if(cljs.core.truth_(inst_74672)){
var statearr_74719_76927 = state_74701__$1;
(statearr_74719_76927[(1)] = (4));

} else {
var statearr_74720_76928 = state_74701__$1;
(statearr_74720_76928[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74702 === (11))){
var inst_74669 = (state_74701[(10)]);
var inst_74690 = (state_74701[(2)]);
var tmp74716 = inst_74669;
var inst_74669__$1 = tmp74716;
var state_74701__$1 = (function (){var statearr_74721 = state_74701;
(statearr_74721[(11)] = inst_74690);

(statearr_74721[(10)] = inst_74669__$1);

return statearr_74721;
})();
var statearr_74723_76932 = state_74701__$1;
(statearr_74723_76932[(2)] = null);

(statearr_74723_76932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74702 === (9))){
var inst_74680 = (state_74701[(8)]);
var state_74701__$1 = state_74701;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74701__$1,(11),out,inst_74680);
} else {
if((state_val_74702 === (5))){
var inst_74695 = cljs.core.async.close_BANG_(out);
var state_74701__$1 = state_74701;
var statearr_74727_76941 = state_74701__$1;
(statearr_74727_76941[(2)] = inst_74695);

(statearr_74727_76941[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74702 === (10))){
var inst_74693 = (state_74701[(2)]);
var state_74701__$1 = state_74701;
var statearr_74729_76942 = state_74701__$1;
(statearr_74729_76942[(2)] = inst_74693);

(statearr_74729_76942[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74702 === (8))){
var inst_74681 = (state_74701[(9)]);
var inst_74679 = (state_74701[(7)]);
var inst_74680 = (state_74701[(8)]);
var inst_74669 = (state_74701[(10)]);
var inst_74684 = (function (){var cs = inst_74669;
var vec__74675 = inst_74679;
var v = inst_74680;
var c = inst_74681;
return (function (p1__74663_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__74663_SHARP_);
});
})();
var inst_74685 = cljs.core.filterv(inst_74684,inst_74669);
var inst_74669__$1 = inst_74685;
var state_74701__$1 = (function (){var statearr_74731 = state_74701;
(statearr_74731[(10)] = inst_74669__$1);

return statearr_74731;
})();
var statearr_74732_76948 = state_74701__$1;
(statearr_74732_76948[(2)] = null);

(statearr_74732_76948[(1)] = (2));


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
var cljs$core$async$state_machine__67873__auto__ = null;
var cljs$core$async$state_machine__67873__auto____0 = (function (){
var statearr_74734 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_74734[(0)] = cljs$core$async$state_machine__67873__auto__);

(statearr_74734[(1)] = (1));

return statearr_74734;
});
var cljs$core$async$state_machine__67873__auto____1 = (function (state_74701){
while(true){
var ret_value__67874__auto__ = (function (){try{while(true){
var result__67875__auto__ = switch__67872__auto__(state_74701);
if(cljs.core.keyword_identical_QMARK_(result__67875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67875__auto__;
}
break;
}
}catch (e74735){var ex__67876__auto__ = e74735;
var statearr_74736_76954 = state_74701;
(statearr_74736_76954[(2)] = ex__67876__auto__);


if(cljs.core.seq((state_74701[(4)]))){
var statearr_74737_76960 = state_74701;
(statearr_74737_76960[(1)] = cljs.core.first((state_74701[(4)])));

} else {
throw ex__67876__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__67874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76963 = state_74701;
state_74701 = G__76963;
continue;
} else {
return ret_value__67874__auto__;
}
break;
}
});
cljs$core$async$state_machine__67873__auto__ = function(state_74701){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__67873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__67873__auto____1.call(this,state_74701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__67873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__67873__auto____0;
cljs$core$async$state_machine__67873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__67873__auto____1;
return cljs$core$async$state_machine__67873__auto__;
})()
})();
var state__72169__auto__ = (function (){var statearr_74739 = f__72168__auto__();
(statearr_74739[(6)] = c__72167__auto___76910);

return statearr_74739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72169__auto__);
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
var G__74741 = arguments.length;
switch (G__74741) {
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
var c__72167__auto___76977 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72168__auto__ = (function (){var switch__67872__auto__ = (function (state_74768){
var state_val_74769 = (state_74768[(1)]);
if((state_val_74769 === (7))){
var inst_74749 = (state_74768[(7)]);
var inst_74749__$1 = (state_74768[(2)]);
var inst_74750 = (inst_74749__$1 == null);
var inst_74751 = cljs.core.not(inst_74750);
var state_74768__$1 = (function (){var statearr_74771 = state_74768;
(statearr_74771[(7)] = inst_74749__$1);

return statearr_74771;
})();
if(inst_74751){
var statearr_74772_76981 = state_74768__$1;
(statearr_74772_76981[(1)] = (8));

} else {
var statearr_74773_76984 = state_74768__$1;
(statearr_74773_76984[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74769 === (1))){
var inst_74744 = (0);
var state_74768__$1 = (function (){var statearr_74775 = state_74768;
(statearr_74775[(8)] = inst_74744);

return statearr_74775;
})();
var statearr_74776_76985 = state_74768__$1;
(statearr_74776_76985[(2)] = null);

(statearr_74776_76985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74769 === (4))){
var state_74768__$1 = state_74768;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74768__$1,(7),ch);
} else {
if((state_val_74769 === (6))){
var inst_74762 = (state_74768[(2)]);
var state_74768__$1 = state_74768;
var statearr_74778_76988 = state_74768__$1;
(statearr_74778_76988[(2)] = inst_74762);

(statearr_74778_76988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74769 === (3))){
var inst_74764 = (state_74768[(2)]);
var inst_74765 = cljs.core.async.close_BANG_(out);
var state_74768__$1 = (function (){var statearr_74780 = state_74768;
(statearr_74780[(9)] = inst_74764);

return statearr_74780;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_74768__$1,inst_74765);
} else {
if((state_val_74769 === (2))){
var inst_74744 = (state_74768[(8)]);
var inst_74746 = (inst_74744 < n);
var state_74768__$1 = state_74768;
if(cljs.core.truth_(inst_74746)){
var statearr_74781_76994 = state_74768__$1;
(statearr_74781_76994[(1)] = (4));

} else {
var statearr_74782_76995 = state_74768__$1;
(statearr_74782_76995[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74769 === (11))){
var inst_74744 = (state_74768[(8)]);
var inst_74754 = (state_74768[(2)]);
var inst_74755 = (inst_74744 + (1));
var inst_74744__$1 = inst_74755;
var state_74768__$1 = (function (){var statearr_74784 = state_74768;
(statearr_74784[(10)] = inst_74754);

(statearr_74784[(8)] = inst_74744__$1);

return statearr_74784;
})();
var statearr_74785_76998 = state_74768__$1;
(statearr_74785_76998[(2)] = null);

(statearr_74785_76998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74769 === (9))){
var state_74768__$1 = state_74768;
var statearr_74786_77000 = state_74768__$1;
(statearr_74786_77000[(2)] = null);

(statearr_74786_77000[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74769 === (5))){
var state_74768__$1 = state_74768;
var statearr_74790_77001 = state_74768__$1;
(statearr_74790_77001[(2)] = null);

(statearr_74790_77001[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74769 === (10))){
var inst_74759 = (state_74768[(2)]);
var state_74768__$1 = state_74768;
var statearr_74791_77003 = state_74768__$1;
(statearr_74791_77003[(2)] = inst_74759);

(statearr_74791_77003[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74769 === (8))){
var inst_74749 = (state_74768[(7)]);
var state_74768__$1 = state_74768;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74768__$1,(11),out,inst_74749);
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
var cljs$core$async$state_machine__67873__auto__ = null;
var cljs$core$async$state_machine__67873__auto____0 = (function (){
var statearr_74793 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_74793[(0)] = cljs$core$async$state_machine__67873__auto__);

(statearr_74793[(1)] = (1));

return statearr_74793;
});
var cljs$core$async$state_machine__67873__auto____1 = (function (state_74768){
while(true){
var ret_value__67874__auto__ = (function (){try{while(true){
var result__67875__auto__ = switch__67872__auto__(state_74768);
if(cljs.core.keyword_identical_QMARK_(result__67875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67875__auto__;
}
break;
}
}catch (e74795){var ex__67876__auto__ = e74795;
var statearr_74796_77010 = state_74768;
(statearr_74796_77010[(2)] = ex__67876__auto__);


if(cljs.core.seq((state_74768[(4)]))){
var statearr_74797_77013 = state_74768;
(statearr_74797_77013[(1)] = cljs.core.first((state_74768[(4)])));

} else {
throw ex__67876__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__67874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77015 = state_74768;
state_74768 = G__77015;
continue;
} else {
return ret_value__67874__auto__;
}
break;
}
});
cljs$core$async$state_machine__67873__auto__ = function(state_74768){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__67873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__67873__auto____1.call(this,state_74768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__67873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__67873__auto____0;
cljs$core$async$state_machine__67873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__67873__auto____1;
return cljs$core$async$state_machine__67873__auto__;
})()
})();
var state__72169__auto__ = (function (){var statearr_74799 = f__72168__auto__();
(statearr_74799[(6)] = c__72167__auto___76977);

return statearr_74799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72169__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async74802 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async74802 = (function (f,ch,meta74803){
this.f = f;
this.ch = ch;
this.meta74803 = meta74803;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async74802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74804,meta74803__$1){
var self__ = this;
var _74804__$1 = this;
return (new cljs.core.async.t_cljs$core$async74802(self__.f,self__.ch,meta74803__$1));
}));

(cljs.core.async.t_cljs$core$async74802.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74804){
var self__ = this;
var _74804__$1 = this;
return self__.meta74803;
}));

(cljs.core.async.t_cljs$core$async74802.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74802.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async74802.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async74802.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74802.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async74810 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async74810 = (function (f,ch,meta74803,_,fn1,meta74811){
this.f = f;
this.ch = ch;
this.meta74803 = meta74803;
this._ = _;
this.fn1 = fn1;
this.meta74811 = meta74811;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async74810.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74812,meta74811__$1){
var self__ = this;
var _74812__$1 = this;
return (new cljs.core.async.t_cljs$core$async74810(self__.f,self__.ch,self__.meta74803,self__._,self__.fn1,meta74811__$1));
}));

(cljs.core.async.t_cljs$core$async74810.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74812){
var self__ = this;
var _74812__$1 = this;
return self__.meta74811;
}));

(cljs.core.async.t_cljs$core$async74810.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74810.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async74810.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async74810.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__74800_SHARP_){
var G__74816 = (((p1__74800_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__74800_SHARP_) : self__.f.call(null,p1__74800_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__74816) : f1.call(null,G__74816));
});
}));

(cljs.core.async.t_cljs$core$async74810.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta74803","meta74803",-2025789728,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async74802","cljs.core.async/t_cljs$core$async74802",-452507154,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta74811","meta74811",1874048783,null)], null);
}));

(cljs.core.async.t_cljs$core$async74810.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async74810.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async74810");

(cljs.core.async.t_cljs$core$async74810.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async74810");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async74810.
 */
cljs.core.async.__GT_t_cljs$core$async74810 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async74810(f__$1,ch__$1,meta74803__$1,___$2,fn1__$1,meta74811){
return (new cljs.core.async.t_cljs$core$async74810(f__$1,ch__$1,meta74803__$1,___$2,fn1__$1,meta74811));
});

}

return (new cljs.core.async.t_cljs$core$async74810(self__.f,self__.ch,self__.meta74803,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__74823 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__74823) : self__.f.call(null,G__74823));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async74802.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74802.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async74802.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta74803","meta74803",-2025789728,null)], null);
}));

(cljs.core.async.t_cljs$core$async74802.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async74802.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async74802");

(cljs.core.async.t_cljs$core$async74802.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async74802");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async74802.
 */
cljs.core.async.__GT_t_cljs$core$async74802 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async74802(f__$1,ch__$1,meta74803){
return (new cljs.core.async.t_cljs$core$async74802(f__$1,ch__$1,meta74803));
});

}

return (new cljs.core.async.t_cljs$core$async74802(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async74828 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async74828 = (function (f,ch,meta74829){
this.f = f;
this.ch = ch;
this.meta74829 = meta74829;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async74828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74830,meta74829__$1){
var self__ = this;
var _74830__$1 = this;
return (new cljs.core.async.t_cljs$core$async74828(self__.f,self__.ch,meta74829__$1));
}));

(cljs.core.async.t_cljs$core$async74828.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74830){
var self__ = this;
var _74830__$1 = this;
return self__.meta74829;
}));

(cljs.core.async.t_cljs$core$async74828.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74828.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async74828.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74828.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async74828.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74828.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async74828.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta74829","meta74829",-468920225,null)], null);
}));

(cljs.core.async.t_cljs$core$async74828.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async74828.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async74828");

(cljs.core.async.t_cljs$core$async74828.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async74828");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async74828.
 */
cljs.core.async.__GT_t_cljs$core$async74828 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async74828(f__$1,ch__$1,meta74829){
return (new cljs.core.async.t_cljs$core$async74828(f__$1,ch__$1,meta74829));
});

}

return (new cljs.core.async.t_cljs$core$async74828(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async74839 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async74839 = (function (p,ch,meta74840){
this.p = p;
this.ch = ch;
this.meta74840 = meta74840;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async74839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74841,meta74840__$1){
var self__ = this;
var _74841__$1 = this;
return (new cljs.core.async.t_cljs$core$async74839(self__.p,self__.ch,meta74840__$1));
}));

(cljs.core.async.t_cljs$core$async74839.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74841){
var self__ = this;
var _74841__$1 = this;
return self__.meta74840;
}));

(cljs.core.async.t_cljs$core$async74839.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74839.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async74839.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async74839.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74839.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async74839.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74839.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async74839.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta74840","meta74840",491122750,null)], null);
}));

(cljs.core.async.t_cljs$core$async74839.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async74839.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async74839");

(cljs.core.async.t_cljs$core$async74839.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async74839");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async74839.
 */
cljs.core.async.__GT_t_cljs$core$async74839 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async74839(p__$1,ch__$1,meta74840){
return (new cljs.core.async.t_cljs$core$async74839(p__$1,ch__$1,meta74840));
});

}

return (new cljs.core.async.t_cljs$core$async74839(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__74861 = arguments.length;
switch (G__74861) {
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
var c__72167__auto___77076 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72168__auto__ = (function (){var switch__67872__auto__ = (function (state_74887){
var state_val_74888 = (state_74887[(1)]);
if((state_val_74888 === (7))){
var inst_74883 = (state_74887[(2)]);
var state_74887__$1 = state_74887;
var statearr_74892_77080 = state_74887__$1;
(statearr_74892_77080[(2)] = inst_74883);

(statearr_74892_77080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74888 === (1))){
var state_74887__$1 = state_74887;
var statearr_74893_77083 = state_74887__$1;
(statearr_74893_77083[(2)] = null);

(statearr_74893_77083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74888 === (4))){
var inst_74869 = (state_74887[(7)]);
var inst_74869__$1 = (state_74887[(2)]);
var inst_74870 = (inst_74869__$1 == null);
var state_74887__$1 = (function (){var statearr_74895 = state_74887;
(statearr_74895[(7)] = inst_74869__$1);

return statearr_74895;
})();
if(cljs.core.truth_(inst_74870)){
var statearr_74897_77084 = state_74887__$1;
(statearr_74897_77084[(1)] = (5));

} else {
var statearr_74898_77085 = state_74887__$1;
(statearr_74898_77085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74888 === (6))){
var inst_74869 = (state_74887[(7)]);
var inst_74874 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_74869) : p.call(null,inst_74869));
var state_74887__$1 = state_74887;
if(cljs.core.truth_(inst_74874)){
var statearr_74901_77088 = state_74887__$1;
(statearr_74901_77088[(1)] = (8));

} else {
var statearr_74902_77089 = state_74887__$1;
(statearr_74902_77089[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74888 === (3))){
var inst_74885 = (state_74887[(2)]);
var state_74887__$1 = state_74887;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74887__$1,inst_74885);
} else {
if((state_val_74888 === (2))){
var state_74887__$1 = state_74887;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74887__$1,(4),ch);
} else {
if((state_val_74888 === (11))){
var inst_74877 = (state_74887[(2)]);
var state_74887__$1 = state_74887;
var statearr_74906_77097 = state_74887__$1;
(statearr_74906_77097[(2)] = inst_74877);

(statearr_74906_77097[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74888 === (9))){
var state_74887__$1 = state_74887;
var statearr_74907_77102 = state_74887__$1;
(statearr_74907_77102[(2)] = null);

(statearr_74907_77102[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74888 === (5))){
var inst_74872 = cljs.core.async.close_BANG_(out);
var state_74887__$1 = state_74887;
var statearr_74908_77105 = state_74887__$1;
(statearr_74908_77105[(2)] = inst_74872);

(statearr_74908_77105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74888 === (10))){
var inst_74880 = (state_74887[(2)]);
var state_74887__$1 = (function (){var statearr_74910 = state_74887;
(statearr_74910[(8)] = inst_74880);

return statearr_74910;
})();
var statearr_74911_77110 = state_74887__$1;
(statearr_74911_77110[(2)] = null);

(statearr_74911_77110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74888 === (8))){
var inst_74869 = (state_74887[(7)]);
var state_74887__$1 = state_74887;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74887__$1,(11),out,inst_74869);
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
var cljs$core$async$state_machine__67873__auto__ = null;
var cljs$core$async$state_machine__67873__auto____0 = (function (){
var statearr_74913 = [null,null,null,null,null,null,null,null,null];
(statearr_74913[(0)] = cljs$core$async$state_machine__67873__auto__);

(statearr_74913[(1)] = (1));

return statearr_74913;
});
var cljs$core$async$state_machine__67873__auto____1 = (function (state_74887){
while(true){
var ret_value__67874__auto__ = (function (){try{while(true){
var result__67875__auto__ = switch__67872__auto__(state_74887);
if(cljs.core.keyword_identical_QMARK_(result__67875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67875__auto__;
}
break;
}
}catch (e74916){var ex__67876__auto__ = e74916;
var statearr_74917_77121 = state_74887;
(statearr_74917_77121[(2)] = ex__67876__auto__);


if(cljs.core.seq((state_74887[(4)]))){
var statearr_74921_77122 = state_74887;
(statearr_74921_77122[(1)] = cljs.core.first((state_74887[(4)])));

} else {
throw ex__67876__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__67874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77124 = state_74887;
state_74887 = G__77124;
continue;
} else {
return ret_value__67874__auto__;
}
break;
}
});
cljs$core$async$state_machine__67873__auto__ = function(state_74887){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__67873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__67873__auto____1.call(this,state_74887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__67873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__67873__auto____0;
cljs$core$async$state_machine__67873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__67873__auto____1;
return cljs$core$async$state_machine__67873__auto__;
})()
})();
var state__72169__auto__ = (function (){var statearr_74922 = f__72168__auto__();
(statearr_74922[(6)] = c__72167__auto___77076);

return statearr_74922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72169__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__74929 = arguments.length;
switch (G__74929) {
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
var c__72167__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72168__auto__ = (function (){var switch__67872__auto__ = (function (state_75003){
var state_val_75004 = (state_75003[(1)]);
if((state_val_75004 === (7))){
var inst_74998 = (state_75003[(2)]);
var state_75003__$1 = state_75003;
var statearr_75013_77140 = state_75003__$1;
(statearr_75013_77140[(2)] = inst_74998);

(statearr_75013_77140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75004 === (20))){
var inst_74966 = (state_75003[(7)]);
var inst_74979 = (state_75003[(2)]);
var inst_74980 = cljs.core.next(inst_74966);
var inst_74950 = inst_74980;
var inst_74951 = null;
var inst_74952 = (0);
var inst_74953 = (0);
var state_75003__$1 = (function (){var statearr_75015 = state_75003;
(statearr_75015[(8)] = inst_74952);

(statearr_75015[(9)] = inst_74950);

(statearr_75015[(10)] = inst_74953);

(statearr_75015[(11)] = inst_74979);

(statearr_75015[(12)] = inst_74951);

return statearr_75015;
})();
var statearr_75016_77146 = state_75003__$1;
(statearr_75016_77146[(2)] = null);

(statearr_75016_77146[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75004 === (1))){
var state_75003__$1 = state_75003;
var statearr_75018_77147 = state_75003__$1;
(statearr_75018_77147[(2)] = null);

(statearr_75018_77147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75004 === (4))){
var inst_74939 = (state_75003[(13)]);
var inst_74939__$1 = (state_75003[(2)]);
var inst_74940 = (inst_74939__$1 == null);
var state_75003__$1 = (function (){var statearr_75019 = state_75003;
(statearr_75019[(13)] = inst_74939__$1);

return statearr_75019;
})();
if(cljs.core.truth_(inst_74940)){
var statearr_75020_77149 = state_75003__$1;
(statearr_75020_77149[(1)] = (5));

} else {
var statearr_75021_77150 = state_75003__$1;
(statearr_75021_77150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75004 === (15))){
var state_75003__$1 = state_75003;
var statearr_75026_77152 = state_75003__$1;
(statearr_75026_77152[(2)] = null);

(statearr_75026_77152[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75004 === (21))){
var state_75003__$1 = state_75003;
var statearr_75027_77155 = state_75003__$1;
(statearr_75027_77155[(2)] = null);

(statearr_75027_77155[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75004 === (13))){
var inst_74952 = (state_75003[(8)]);
var inst_74950 = (state_75003[(9)]);
var inst_74953 = (state_75003[(10)]);
var inst_74951 = (state_75003[(12)]);
var inst_74961 = (state_75003[(2)]);
var inst_74962 = (inst_74953 + (1));
var tmp75023 = inst_74952;
var tmp75024 = inst_74950;
var tmp75025 = inst_74951;
var inst_74950__$1 = tmp75024;
var inst_74951__$1 = tmp75025;
var inst_74952__$1 = tmp75023;
var inst_74953__$1 = inst_74962;
var state_75003__$1 = (function (){var statearr_75029 = state_75003;
(statearr_75029[(8)] = inst_74952__$1);

(statearr_75029[(9)] = inst_74950__$1);

(statearr_75029[(10)] = inst_74953__$1);

(statearr_75029[(14)] = inst_74961);

(statearr_75029[(12)] = inst_74951__$1);

return statearr_75029;
})();
var statearr_75031_77159 = state_75003__$1;
(statearr_75031_77159[(2)] = null);

(statearr_75031_77159[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75004 === (22))){
var state_75003__$1 = state_75003;
var statearr_75034_77160 = state_75003__$1;
(statearr_75034_77160[(2)] = null);

(statearr_75034_77160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75004 === (6))){
var inst_74939 = (state_75003[(13)]);
var inst_74948 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_74939) : f.call(null,inst_74939));
var inst_74949 = cljs.core.seq(inst_74948);
var inst_74950 = inst_74949;
var inst_74951 = null;
var inst_74952 = (0);
var inst_74953 = (0);
var state_75003__$1 = (function (){var statearr_75038 = state_75003;
(statearr_75038[(8)] = inst_74952);

(statearr_75038[(9)] = inst_74950);

(statearr_75038[(10)] = inst_74953);

(statearr_75038[(12)] = inst_74951);

return statearr_75038;
})();
var statearr_75041_77168 = state_75003__$1;
(statearr_75041_77168[(2)] = null);

(statearr_75041_77168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75004 === (17))){
var inst_74966 = (state_75003[(7)]);
var inst_74971 = cljs.core.chunk_first(inst_74966);
var inst_74972 = cljs.core.chunk_rest(inst_74966);
var inst_74974 = cljs.core.count(inst_74971);
var inst_74950 = inst_74972;
var inst_74951 = inst_74971;
var inst_74952 = inst_74974;
var inst_74953 = (0);
var state_75003__$1 = (function (){var statearr_75046 = state_75003;
(statearr_75046[(8)] = inst_74952);

(statearr_75046[(9)] = inst_74950);

(statearr_75046[(10)] = inst_74953);

(statearr_75046[(12)] = inst_74951);

return statearr_75046;
})();
var statearr_75050_77171 = state_75003__$1;
(statearr_75050_77171[(2)] = null);

(statearr_75050_77171[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75004 === (3))){
var inst_75000 = (state_75003[(2)]);
var state_75003__$1 = state_75003;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75003__$1,inst_75000);
} else {
if((state_val_75004 === (12))){
var inst_74988 = (state_75003[(2)]);
var state_75003__$1 = state_75003;
var statearr_75051_77177 = state_75003__$1;
(statearr_75051_77177[(2)] = inst_74988);

(statearr_75051_77177[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75004 === (2))){
var state_75003__$1 = state_75003;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75003__$1,(4),in$);
} else {
if((state_val_75004 === (23))){
var inst_74996 = (state_75003[(2)]);
var state_75003__$1 = state_75003;
var statearr_75054_77182 = state_75003__$1;
(statearr_75054_77182[(2)] = inst_74996);

(statearr_75054_77182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75004 === (19))){
var inst_74983 = (state_75003[(2)]);
var state_75003__$1 = state_75003;
var statearr_75056_77184 = state_75003__$1;
(statearr_75056_77184[(2)] = inst_74983);

(statearr_75056_77184[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75004 === (11))){
var inst_74950 = (state_75003[(9)]);
var inst_74966 = (state_75003[(7)]);
var inst_74966__$1 = cljs.core.seq(inst_74950);
var state_75003__$1 = (function (){var statearr_75059 = state_75003;
(statearr_75059[(7)] = inst_74966__$1);

return statearr_75059;
})();
if(inst_74966__$1){
var statearr_75062_77190 = state_75003__$1;
(statearr_75062_77190[(1)] = (14));

} else {
var statearr_75063_77191 = state_75003__$1;
(statearr_75063_77191[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75004 === (9))){
var inst_74990 = (state_75003[(2)]);
var inst_74991 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_75003__$1 = (function (){var statearr_75064 = state_75003;
(statearr_75064[(15)] = inst_74990);

return statearr_75064;
})();
if(cljs.core.truth_(inst_74991)){
var statearr_75065_77193 = state_75003__$1;
(statearr_75065_77193[(1)] = (21));

} else {
var statearr_75067_77194 = state_75003__$1;
(statearr_75067_77194[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75004 === (5))){
var inst_74942 = cljs.core.async.close_BANG_(out);
var state_75003__$1 = state_75003;
var statearr_75068_77195 = state_75003__$1;
(statearr_75068_77195[(2)] = inst_74942);

(statearr_75068_77195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75004 === (14))){
var inst_74966 = (state_75003[(7)]);
var inst_74969 = cljs.core.chunked_seq_QMARK_(inst_74966);
var state_75003__$1 = state_75003;
if(inst_74969){
var statearr_75070_77203 = state_75003__$1;
(statearr_75070_77203[(1)] = (17));

} else {
var statearr_75071_77204 = state_75003__$1;
(statearr_75071_77204[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75004 === (16))){
var inst_74986 = (state_75003[(2)]);
var state_75003__$1 = state_75003;
var statearr_75072_77208 = state_75003__$1;
(statearr_75072_77208[(2)] = inst_74986);

(statearr_75072_77208[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75004 === (10))){
var inst_74953 = (state_75003[(10)]);
var inst_74951 = (state_75003[(12)]);
var inst_74959 = cljs.core._nth(inst_74951,inst_74953);
var state_75003__$1 = state_75003;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75003__$1,(13),out,inst_74959);
} else {
if((state_val_75004 === (18))){
var inst_74966 = (state_75003[(7)]);
var inst_74977 = cljs.core.first(inst_74966);
var state_75003__$1 = state_75003;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75003__$1,(20),out,inst_74977);
} else {
if((state_val_75004 === (8))){
var inst_74952 = (state_75003[(8)]);
var inst_74953 = (state_75003[(10)]);
var inst_74955 = (inst_74953 < inst_74952);
var inst_74956 = inst_74955;
var state_75003__$1 = state_75003;
if(cljs.core.truth_(inst_74956)){
var statearr_75076_77214 = state_75003__$1;
(statearr_75076_77214[(1)] = (10));

} else {
var statearr_75077_77216 = state_75003__$1;
(statearr_75077_77216[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__67873__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__67873__auto____0 = (function (){
var statearr_75079 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75079[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__67873__auto__);

(statearr_75079[(1)] = (1));

return statearr_75079;
});
var cljs$core$async$mapcat_STAR__$_state_machine__67873__auto____1 = (function (state_75003){
while(true){
var ret_value__67874__auto__ = (function (){try{while(true){
var result__67875__auto__ = switch__67872__auto__(state_75003);
if(cljs.core.keyword_identical_QMARK_(result__67875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67875__auto__;
}
break;
}
}catch (e75082){var ex__67876__auto__ = e75082;
var statearr_75083_77217 = state_75003;
(statearr_75083_77217[(2)] = ex__67876__auto__);


if(cljs.core.seq((state_75003[(4)]))){
var statearr_75085_77218 = state_75003;
(statearr_75085_77218[(1)] = cljs.core.first((state_75003[(4)])));

} else {
throw ex__67876__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__67874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77224 = state_75003;
state_75003 = G__77224;
continue;
} else {
return ret_value__67874__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__67873__auto__ = function(state_75003){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__67873__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__67873__auto____1.call(this,state_75003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__67873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__67873__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__67873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__67873__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__67873__auto__;
})()
})();
var state__72169__auto__ = (function (){var statearr_75088 = f__72168__auto__();
(statearr_75088[(6)] = c__72167__auto__);

return statearr_75088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72169__auto__);
}));

return c__72167__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__75091 = arguments.length;
switch (G__75091) {
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
var G__75105 = arguments.length;
switch (G__75105) {
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
var G__75109 = arguments.length;
switch (G__75109) {
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
var c__72167__auto___77251 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72168__auto__ = (function (){var switch__67872__auto__ = (function (state_75139){
var state_val_75140 = (state_75139[(1)]);
if((state_val_75140 === (7))){
var inst_75133 = (state_75139[(2)]);
var state_75139__$1 = state_75139;
var statearr_75141_77254 = state_75139__$1;
(statearr_75141_77254[(2)] = inst_75133);

(statearr_75141_77254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75140 === (1))){
var inst_75114 = null;
var state_75139__$1 = (function (){var statearr_75142 = state_75139;
(statearr_75142[(7)] = inst_75114);

return statearr_75142;
})();
var statearr_75143_77257 = state_75139__$1;
(statearr_75143_77257[(2)] = null);

(statearr_75143_77257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75140 === (4))){
var inst_75117 = (state_75139[(8)]);
var inst_75117__$1 = (state_75139[(2)]);
var inst_75118 = (inst_75117__$1 == null);
var inst_75119 = cljs.core.not(inst_75118);
var state_75139__$1 = (function (){var statearr_75146 = state_75139;
(statearr_75146[(8)] = inst_75117__$1);

return statearr_75146;
})();
if(inst_75119){
var statearr_75147_77260 = state_75139__$1;
(statearr_75147_77260[(1)] = (5));

} else {
var statearr_75148_77261 = state_75139__$1;
(statearr_75148_77261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75140 === (6))){
var state_75139__$1 = state_75139;
var statearr_75149_77264 = state_75139__$1;
(statearr_75149_77264[(2)] = null);

(statearr_75149_77264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75140 === (3))){
var inst_75136 = (state_75139[(2)]);
var inst_75137 = cljs.core.async.close_BANG_(out);
var state_75139__$1 = (function (){var statearr_75150 = state_75139;
(statearr_75150[(9)] = inst_75136);

return statearr_75150;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_75139__$1,inst_75137);
} else {
if((state_val_75140 === (2))){
var state_75139__$1 = state_75139;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75139__$1,(4),ch);
} else {
if((state_val_75140 === (11))){
var inst_75117 = (state_75139[(8)]);
var inst_75127 = (state_75139[(2)]);
var inst_75114 = inst_75117;
var state_75139__$1 = (function (){var statearr_75153 = state_75139;
(statearr_75153[(7)] = inst_75114);

(statearr_75153[(10)] = inst_75127);

return statearr_75153;
})();
var statearr_75155_77271 = state_75139__$1;
(statearr_75155_77271[(2)] = null);

(statearr_75155_77271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75140 === (9))){
var inst_75117 = (state_75139[(8)]);
var state_75139__$1 = state_75139;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75139__$1,(11),out,inst_75117);
} else {
if((state_val_75140 === (5))){
var inst_75114 = (state_75139[(7)]);
var inst_75117 = (state_75139[(8)]);
var inst_75121 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_75117,inst_75114);
var state_75139__$1 = state_75139;
if(inst_75121){
var statearr_75162_77275 = state_75139__$1;
(statearr_75162_77275[(1)] = (8));

} else {
var statearr_75163_77276 = state_75139__$1;
(statearr_75163_77276[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75140 === (10))){
var inst_75130 = (state_75139[(2)]);
var state_75139__$1 = state_75139;
var statearr_75164_77278 = state_75139__$1;
(statearr_75164_77278[(2)] = inst_75130);

(statearr_75164_77278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75140 === (8))){
var inst_75114 = (state_75139[(7)]);
var tmp75160 = inst_75114;
var inst_75114__$1 = tmp75160;
var state_75139__$1 = (function (){var statearr_75165 = state_75139;
(statearr_75165[(7)] = inst_75114__$1);

return statearr_75165;
})();
var statearr_75166_77288 = state_75139__$1;
(statearr_75166_77288[(2)] = null);

(statearr_75166_77288[(1)] = (2));


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
var cljs$core$async$state_machine__67873__auto__ = null;
var cljs$core$async$state_machine__67873__auto____0 = (function (){
var statearr_75167 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_75167[(0)] = cljs$core$async$state_machine__67873__auto__);

(statearr_75167[(1)] = (1));

return statearr_75167;
});
var cljs$core$async$state_machine__67873__auto____1 = (function (state_75139){
while(true){
var ret_value__67874__auto__ = (function (){try{while(true){
var result__67875__auto__ = switch__67872__auto__(state_75139);
if(cljs.core.keyword_identical_QMARK_(result__67875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67875__auto__;
}
break;
}
}catch (e75168){var ex__67876__auto__ = e75168;
var statearr_75169_77292 = state_75139;
(statearr_75169_77292[(2)] = ex__67876__auto__);


if(cljs.core.seq((state_75139[(4)]))){
var statearr_75170_77294 = state_75139;
(statearr_75170_77294[(1)] = cljs.core.first((state_75139[(4)])));

} else {
throw ex__67876__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__67874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77298 = state_75139;
state_75139 = G__77298;
continue;
} else {
return ret_value__67874__auto__;
}
break;
}
});
cljs$core$async$state_machine__67873__auto__ = function(state_75139){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__67873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__67873__auto____1.call(this,state_75139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__67873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__67873__auto____0;
cljs$core$async$state_machine__67873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__67873__auto____1;
return cljs$core$async$state_machine__67873__auto__;
})()
})();
var state__72169__auto__ = (function (){var statearr_75173 = f__72168__auto__();
(statearr_75173[(6)] = c__72167__auto___77251);

return statearr_75173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72169__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__75179 = arguments.length;
switch (G__75179) {
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
var c__72167__auto___77304 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72168__auto__ = (function (){var switch__67872__auto__ = (function (state_75226){
var state_val_75227 = (state_75226[(1)]);
if((state_val_75227 === (7))){
var inst_75222 = (state_75226[(2)]);
var state_75226__$1 = state_75226;
var statearr_75232_77307 = state_75226__$1;
(statearr_75232_77307[(2)] = inst_75222);

(statearr_75232_77307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75227 === (1))){
var inst_75184 = (new Array(n));
var inst_75185 = inst_75184;
var inst_75186 = (0);
var state_75226__$1 = (function (){var statearr_75234 = state_75226;
(statearr_75234[(7)] = inst_75186);

(statearr_75234[(8)] = inst_75185);

return statearr_75234;
})();
var statearr_75235_77314 = state_75226__$1;
(statearr_75235_77314[(2)] = null);

(statearr_75235_77314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75227 === (4))){
var inst_75189 = (state_75226[(9)]);
var inst_75189__$1 = (state_75226[(2)]);
var inst_75190 = (inst_75189__$1 == null);
var inst_75191 = cljs.core.not(inst_75190);
var state_75226__$1 = (function (){var statearr_75238 = state_75226;
(statearr_75238[(9)] = inst_75189__$1);

return statearr_75238;
})();
if(inst_75191){
var statearr_75240_77319 = state_75226__$1;
(statearr_75240_77319[(1)] = (5));

} else {
var statearr_75243_77322 = state_75226__$1;
(statearr_75243_77322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75227 === (15))){
var inst_75216 = (state_75226[(2)]);
var state_75226__$1 = state_75226;
var statearr_75250_77324 = state_75226__$1;
(statearr_75250_77324[(2)] = inst_75216);

(statearr_75250_77324[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75227 === (13))){
var state_75226__$1 = state_75226;
var statearr_75259_77325 = state_75226__$1;
(statearr_75259_77325[(2)] = null);

(statearr_75259_77325[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75227 === (6))){
var inst_75186 = (state_75226[(7)]);
var inst_75212 = (inst_75186 > (0));
var state_75226__$1 = state_75226;
if(cljs.core.truth_(inst_75212)){
var statearr_75261_77328 = state_75226__$1;
(statearr_75261_77328[(1)] = (12));

} else {
var statearr_75262_77329 = state_75226__$1;
(statearr_75262_77329[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75227 === (3))){
var inst_75224 = (state_75226[(2)]);
var state_75226__$1 = state_75226;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75226__$1,inst_75224);
} else {
if((state_val_75227 === (12))){
var inst_75185 = (state_75226[(8)]);
var inst_75214 = cljs.core.vec(inst_75185);
var state_75226__$1 = state_75226;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75226__$1,(15),out,inst_75214);
} else {
if((state_val_75227 === (2))){
var state_75226__$1 = state_75226;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75226__$1,(4),ch);
} else {
if((state_val_75227 === (11))){
var inst_75205 = (state_75226[(2)]);
var inst_75207 = (new Array(n));
var inst_75185 = inst_75207;
var inst_75186 = (0);
var state_75226__$1 = (function (){var statearr_75278 = state_75226;
(statearr_75278[(7)] = inst_75186);

(statearr_75278[(8)] = inst_75185);

(statearr_75278[(10)] = inst_75205);

return statearr_75278;
})();
var statearr_75279_77338 = state_75226__$1;
(statearr_75279_77338[(2)] = null);

(statearr_75279_77338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75227 === (9))){
var inst_75185 = (state_75226[(8)]);
var inst_75203 = cljs.core.vec(inst_75185);
var state_75226__$1 = state_75226;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75226__$1,(11),out,inst_75203);
} else {
if((state_val_75227 === (5))){
var inst_75186 = (state_75226[(7)]);
var inst_75185 = (state_75226[(8)]);
var inst_75196 = (state_75226[(11)]);
var inst_75189 = (state_75226[(9)]);
var inst_75193 = (inst_75185[inst_75186] = inst_75189);
var inst_75196__$1 = (inst_75186 + (1));
var inst_75197 = (inst_75196__$1 < n);
var state_75226__$1 = (function (){var statearr_75287 = state_75226;
(statearr_75287[(11)] = inst_75196__$1);

(statearr_75287[(12)] = inst_75193);

return statearr_75287;
})();
if(cljs.core.truth_(inst_75197)){
var statearr_75289_77346 = state_75226__$1;
(statearr_75289_77346[(1)] = (8));

} else {
var statearr_75290_77347 = state_75226__$1;
(statearr_75290_77347[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75227 === (14))){
var inst_75219 = (state_75226[(2)]);
var inst_75220 = cljs.core.async.close_BANG_(out);
var state_75226__$1 = (function (){var statearr_75297 = state_75226;
(statearr_75297[(13)] = inst_75219);

return statearr_75297;
})();
var statearr_75299_77351 = state_75226__$1;
(statearr_75299_77351[(2)] = inst_75220);

(statearr_75299_77351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75227 === (10))){
var inst_75210 = (state_75226[(2)]);
var state_75226__$1 = state_75226;
var statearr_75303_77354 = state_75226__$1;
(statearr_75303_77354[(2)] = inst_75210);

(statearr_75303_77354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75227 === (8))){
var inst_75185 = (state_75226[(8)]);
var inst_75196 = (state_75226[(11)]);
var tmp75293 = inst_75185;
var inst_75185__$1 = tmp75293;
var inst_75186 = inst_75196;
var state_75226__$1 = (function (){var statearr_75308 = state_75226;
(statearr_75308[(7)] = inst_75186);

(statearr_75308[(8)] = inst_75185__$1);

return statearr_75308;
})();
var statearr_75309_77360 = state_75226__$1;
(statearr_75309_77360[(2)] = null);

(statearr_75309_77360[(1)] = (2));


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
var cljs$core$async$state_machine__67873__auto__ = null;
var cljs$core$async$state_machine__67873__auto____0 = (function (){
var statearr_75312 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75312[(0)] = cljs$core$async$state_machine__67873__auto__);

(statearr_75312[(1)] = (1));

return statearr_75312;
});
var cljs$core$async$state_machine__67873__auto____1 = (function (state_75226){
while(true){
var ret_value__67874__auto__ = (function (){try{while(true){
var result__67875__auto__ = switch__67872__auto__(state_75226);
if(cljs.core.keyword_identical_QMARK_(result__67875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67875__auto__;
}
break;
}
}catch (e75316){var ex__67876__auto__ = e75316;
var statearr_75317_77368 = state_75226;
(statearr_75317_77368[(2)] = ex__67876__auto__);


if(cljs.core.seq((state_75226[(4)]))){
var statearr_75318_77371 = state_75226;
(statearr_75318_77371[(1)] = cljs.core.first((state_75226[(4)])));

} else {
throw ex__67876__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__67874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77373 = state_75226;
state_75226 = G__77373;
continue;
} else {
return ret_value__67874__auto__;
}
break;
}
});
cljs$core$async$state_machine__67873__auto__ = function(state_75226){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__67873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__67873__auto____1.call(this,state_75226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__67873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__67873__auto____0;
cljs$core$async$state_machine__67873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__67873__auto____1;
return cljs$core$async$state_machine__67873__auto__;
})()
})();
var state__72169__auto__ = (function (){var statearr_75320 = f__72168__auto__();
(statearr_75320[(6)] = c__72167__auto___77304);

return statearr_75320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72169__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__75333 = arguments.length;
switch (G__75333) {
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
var c__72167__auto___77383 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72168__auto__ = (function (){var switch__67872__auto__ = (function (state_75392){
var state_val_75393 = (state_75392[(1)]);
if((state_val_75393 === (7))){
var inst_75388 = (state_75392[(2)]);
var state_75392__$1 = state_75392;
var statearr_75400_77385 = state_75392__$1;
(statearr_75400_77385[(2)] = inst_75388);

(statearr_75400_77385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75393 === (1))){
var inst_75344 = [];
var inst_75345 = inst_75344;
var inst_75346 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_75392__$1 = (function (){var statearr_75403 = state_75392;
(statearr_75403[(7)] = inst_75346);

(statearr_75403[(8)] = inst_75345);

return statearr_75403;
})();
var statearr_75405_77392 = state_75392__$1;
(statearr_75405_77392[(2)] = null);

(statearr_75405_77392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75393 === (4))){
var inst_75352 = (state_75392[(9)]);
var inst_75352__$1 = (state_75392[(2)]);
var inst_75354 = (inst_75352__$1 == null);
var inst_75355 = cljs.core.not(inst_75354);
var state_75392__$1 = (function (){var statearr_75409 = state_75392;
(statearr_75409[(9)] = inst_75352__$1);

return statearr_75409;
})();
if(inst_75355){
var statearr_75410_77394 = state_75392__$1;
(statearr_75410_77394[(1)] = (5));

} else {
var statearr_75411_77395 = state_75392__$1;
(statearr_75411_77395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75393 === (15))){
var inst_75382 = (state_75392[(2)]);
var state_75392__$1 = state_75392;
var statearr_75417_77400 = state_75392__$1;
(statearr_75417_77400[(2)] = inst_75382);

(statearr_75417_77400[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75393 === (13))){
var state_75392__$1 = state_75392;
var statearr_75421_77403 = state_75392__$1;
(statearr_75421_77403[(2)] = null);

(statearr_75421_77403[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75393 === (6))){
var inst_75345 = (state_75392[(8)]);
var inst_75377 = inst_75345.length;
var inst_75378 = (inst_75377 > (0));
var state_75392__$1 = state_75392;
if(cljs.core.truth_(inst_75378)){
var statearr_75424_77404 = state_75392__$1;
(statearr_75424_77404[(1)] = (12));

} else {
var statearr_75425_77405 = state_75392__$1;
(statearr_75425_77405[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75393 === (3))){
var inst_75390 = (state_75392[(2)]);
var state_75392__$1 = state_75392;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75392__$1,inst_75390);
} else {
if((state_val_75393 === (12))){
var inst_75345 = (state_75392[(8)]);
var inst_75380 = cljs.core.vec(inst_75345);
var state_75392__$1 = state_75392;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75392__$1,(15),out,inst_75380);
} else {
if((state_val_75393 === (2))){
var state_75392__$1 = state_75392;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75392__$1,(4),ch);
} else {
if((state_val_75393 === (11))){
var inst_75357 = (state_75392[(10)]);
var inst_75352 = (state_75392[(9)]);
var inst_75369 = (state_75392[(2)]);
var inst_75370 = [];
var inst_75372 = inst_75370.push(inst_75352);
var inst_75345 = inst_75370;
var inst_75346 = inst_75357;
var state_75392__$1 = (function (){var statearr_75430 = state_75392;
(statearr_75430[(11)] = inst_75372);

(statearr_75430[(7)] = inst_75346);

(statearr_75430[(8)] = inst_75345);

(statearr_75430[(12)] = inst_75369);

return statearr_75430;
})();
var statearr_75432_77416 = state_75392__$1;
(statearr_75432_77416[(2)] = null);

(statearr_75432_77416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75393 === (9))){
var inst_75345 = (state_75392[(8)]);
var inst_75367 = cljs.core.vec(inst_75345);
var state_75392__$1 = state_75392;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75392__$1,(11),out,inst_75367);
} else {
if((state_val_75393 === (5))){
var inst_75357 = (state_75392[(10)]);
var inst_75346 = (state_75392[(7)]);
var inst_75352 = (state_75392[(9)]);
var inst_75357__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_75352) : f.call(null,inst_75352));
var inst_75360 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_75357__$1,inst_75346);
var inst_75361 = cljs.core.keyword_identical_QMARK_(inst_75346,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_75362 = ((inst_75360) || (inst_75361));
var state_75392__$1 = (function (){var statearr_75440 = state_75392;
(statearr_75440[(10)] = inst_75357__$1);

return statearr_75440;
})();
if(cljs.core.truth_(inst_75362)){
var statearr_75441_77421 = state_75392__$1;
(statearr_75441_77421[(1)] = (8));

} else {
var statearr_75442_77423 = state_75392__$1;
(statearr_75442_77423[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75393 === (14))){
var inst_75385 = (state_75392[(2)]);
var inst_75386 = cljs.core.async.close_BANG_(out);
var state_75392__$1 = (function (){var statearr_75445 = state_75392;
(statearr_75445[(13)] = inst_75385);

return statearr_75445;
})();
var statearr_75446_77427 = state_75392__$1;
(statearr_75446_77427[(2)] = inst_75386);

(statearr_75446_77427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75393 === (10))){
var inst_75375 = (state_75392[(2)]);
var state_75392__$1 = state_75392;
var statearr_75448_77428 = state_75392__$1;
(statearr_75448_77428[(2)] = inst_75375);

(statearr_75448_77428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75393 === (8))){
var inst_75357 = (state_75392[(10)]);
var inst_75352 = (state_75392[(9)]);
var inst_75345 = (state_75392[(8)]);
var inst_75364 = inst_75345.push(inst_75352);
var tmp75443 = inst_75345;
var inst_75345__$1 = tmp75443;
var inst_75346 = inst_75357;
var state_75392__$1 = (function (){var statearr_75449 = state_75392;
(statearr_75449[(7)] = inst_75346);

(statearr_75449[(8)] = inst_75345__$1);

(statearr_75449[(14)] = inst_75364);

return statearr_75449;
})();
var statearr_75450_77431 = state_75392__$1;
(statearr_75450_77431[(2)] = null);

(statearr_75450_77431[(1)] = (2));


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
var cljs$core$async$state_machine__67873__auto__ = null;
var cljs$core$async$state_machine__67873__auto____0 = (function (){
var statearr_75455 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75455[(0)] = cljs$core$async$state_machine__67873__auto__);

(statearr_75455[(1)] = (1));

return statearr_75455;
});
var cljs$core$async$state_machine__67873__auto____1 = (function (state_75392){
while(true){
var ret_value__67874__auto__ = (function (){try{while(true){
var result__67875__auto__ = switch__67872__auto__(state_75392);
if(cljs.core.keyword_identical_QMARK_(result__67875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67875__auto__;
}
break;
}
}catch (e75456){var ex__67876__auto__ = e75456;
var statearr_75457_77436 = state_75392;
(statearr_75457_77436[(2)] = ex__67876__auto__);


if(cljs.core.seq((state_75392[(4)]))){
var statearr_75458_77437 = state_75392;
(statearr_75458_77437[(1)] = cljs.core.first((state_75392[(4)])));

} else {
throw ex__67876__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__67874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77438 = state_75392;
state_75392 = G__77438;
continue;
} else {
return ret_value__67874__auto__;
}
break;
}
});
cljs$core$async$state_machine__67873__auto__ = function(state_75392){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__67873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__67873__auto____1.call(this,state_75392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__67873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__67873__auto____0;
cljs$core$async$state_machine__67873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__67873__auto____1;
return cljs$core$async$state_machine__67873__auto__;
})()
})();
var state__72169__auto__ = (function (){var statearr_75464 = f__72168__auto__();
(statearr_75464[(6)] = c__72167__auto___77383);

return statearr_75464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72169__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
