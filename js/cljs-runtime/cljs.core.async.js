goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__71517 = arguments.length;
switch (G__71517) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async71519 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71519 = (function (f,blockable,meta71520){
this.f = f;
this.blockable = blockable;
this.meta71520 = meta71520;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async71519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71521,meta71520__$1){
var self__ = this;
var _71521__$1 = this;
return (new cljs.core.async.t_cljs$core$async71519(self__.f,self__.blockable,meta71520__$1));
}));

(cljs.core.async.t_cljs$core$async71519.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71521){
var self__ = this;
var _71521__$1 = this;
return self__.meta71520;
}));

(cljs.core.async.t_cljs$core$async71519.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71519.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async71519.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async71519.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async71519.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta71520","meta71520",1365939622,null)], null);
}));

(cljs.core.async.t_cljs$core$async71519.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async71519.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71519");

(cljs.core.async.t_cljs$core$async71519.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async71519");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async71519.
 */
cljs.core.async.__GT_t_cljs$core$async71519 = (function cljs$core$async$__GT_t_cljs$core$async71519(f__$1,blockable__$1,meta71520){
return (new cljs.core.async.t_cljs$core$async71519(f__$1,blockable__$1,meta71520));
});

}

return (new cljs.core.async.t_cljs$core$async71519(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__71544 = arguments.length;
switch (G__71544) {
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
var G__71558 = arguments.length;
switch (G__71558) {
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
var G__71569 = arguments.length;
switch (G__71569) {
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
var val_74777 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_74777) : fn1.call(null,val_74777));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_74777) : fn1.call(null,val_74777));
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
var G__71587 = arguments.length;
switch (G__71587) {
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
var n__4613__auto___74812 = n;
var x_74813 = (0);
while(true){
if((x_74813 < n__4613__auto___74812)){
(a[x_74813] = x_74813);

var G__74815 = (x_74813 + (1));
x_74813 = G__74815;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async71600 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71600 = (function (flag,meta71601){
this.flag = flag;
this.meta71601 = meta71601;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async71600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71602,meta71601__$1){
var self__ = this;
var _71602__$1 = this;
return (new cljs.core.async.t_cljs$core$async71600(self__.flag,meta71601__$1));
}));

(cljs.core.async.t_cljs$core$async71600.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71602){
var self__ = this;
var _71602__$1 = this;
return self__.meta71601;
}));

(cljs.core.async.t_cljs$core$async71600.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71600.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async71600.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async71600.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async71600.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta71601","meta71601",844803957,null)], null);
}));

(cljs.core.async.t_cljs$core$async71600.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async71600.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71600");

(cljs.core.async.t_cljs$core$async71600.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async71600");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async71600.
 */
cljs.core.async.__GT_t_cljs$core$async71600 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async71600(flag__$1,meta71601){
return (new cljs.core.async.t_cljs$core$async71600(flag__$1,meta71601));
});

}

return (new cljs.core.async.t_cljs$core$async71600(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async71614 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71614 = (function (flag,cb,meta71615){
this.flag = flag;
this.cb = cb;
this.meta71615 = meta71615;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async71614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71616,meta71615__$1){
var self__ = this;
var _71616__$1 = this;
return (new cljs.core.async.t_cljs$core$async71614(self__.flag,self__.cb,meta71615__$1));
}));

(cljs.core.async.t_cljs$core$async71614.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71616){
var self__ = this;
var _71616__$1 = this;
return self__.meta71615;
}));

(cljs.core.async.t_cljs$core$async71614.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71614.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async71614.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async71614.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async71614.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta71615","meta71615",1238596542,null)], null);
}));

(cljs.core.async.t_cljs$core$async71614.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async71614.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71614");

(cljs.core.async.t_cljs$core$async71614.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async71614");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async71614.
 */
cljs.core.async.__GT_t_cljs$core$async71614 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async71614(flag__$1,cb__$1,meta71615){
return (new cljs.core.async.t_cljs$core$async71614(flag__$1,cb__$1,meta71615));
});

}

return (new cljs.core.async.t_cljs$core$async71614(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__71626_SHARP_){
var G__71630 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__71626_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__71630) : fret.call(null,G__71630));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__71627_SHARP_){
var G__71631 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__71627_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__71631) : fret.call(null,G__71631));
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
var G__74891 = (i + (1));
i = G__74891;
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
var len__4736__auto___74903 = arguments.length;
var i__4737__auto___74911 = (0);
while(true){
if((i__4737__auto___74911 < len__4736__auto___74903)){
args__4742__auto__.push((arguments[i__4737__auto___74911]));

var G__74912 = (i__4737__auto___74911 + (1));
i__4737__auto___74911 = G__74912;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__71642){
var map__71643 = p__71642;
var map__71643__$1 = (((((!((map__71643 == null))))?(((((map__71643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71643):map__71643);
var opts = map__71643__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq71638){
var G__71639 = cljs.core.first(seq71638);
var seq71638__$1 = cljs.core.next(seq71638);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71639,seq71638__$1);
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
var G__71654 = arguments.length;
switch (G__71654) {
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
var c__71447__auto___74946 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__71448__auto__ = (function (){var switch__71378__auto__ = (function (state_71704){
var state_val_71705 = (state_71704[(1)]);
if((state_val_71705 === (7))){
var inst_71696 = (state_71704[(2)]);
var state_71704__$1 = state_71704;
var statearr_71717_74948 = state_71704__$1;
(statearr_71717_74948[(2)] = inst_71696);

(statearr_71717_74948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71705 === (1))){
var state_71704__$1 = state_71704;
var statearr_71719_74951 = state_71704__$1;
(statearr_71719_74951[(2)] = null);

(statearr_71719_74951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71705 === (4))){
var inst_71671 = (state_71704[(7)]);
var inst_71671__$1 = (state_71704[(2)]);
var inst_71677 = (inst_71671__$1 == null);
var state_71704__$1 = (function (){var statearr_71722 = state_71704;
(statearr_71722[(7)] = inst_71671__$1);

return statearr_71722;
})();
if(cljs.core.truth_(inst_71677)){
var statearr_71723_74960 = state_71704__$1;
(statearr_71723_74960[(1)] = (5));

} else {
var statearr_71724_74961 = state_71704__$1;
(statearr_71724_74961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71705 === (13))){
var state_71704__$1 = state_71704;
var statearr_71726_74963 = state_71704__$1;
(statearr_71726_74963[(2)] = null);

(statearr_71726_74963[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71705 === (6))){
var inst_71671 = (state_71704[(7)]);
var state_71704__$1 = state_71704;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71704__$1,(11),to,inst_71671);
} else {
if((state_val_71705 === (3))){
var inst_71698 = (state_71704[(2)]);
var state_71704__$1 = state_71704;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71704__$1,inst_71698);
} else {
if((state_val_71705 === (12))){
var state_71704__$1 = state_71704;
var statearr_71731_74977 = state_71704__$1;
(statearr_71731_74977[(2)] = null);

(statearr_71731_74977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71705 === (2))){
var state_71704__$1 = state_71704;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71704__$1,(4),from);
} else {
if((state_val_71705 === (11))){
var inst_71689 = (state_71704[(2)]);
var state_71704__$1 = state_71704;
if(cljs.core.truth_(inst_71689)){
var statearr_71732_74980 = state_71704__$1;
(statearr_71732_74980[(1)] = (12));

} else {
var statearr_71734_74982 = state_71704__$1;
(statearr_71734_74982[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71705 === (9))){
var state_71704__$1 = state_71704;
var statearr_71735_74990 = state_71704__$1;
(statearr_71735_74990[(2)] = null);

(statearr_71735_74990[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71705 === (5))){
var state_71704__$1 = state_71704;
if(cljs.core.truth_(close_QMARK_)){
var statearr_71736_74991 = state_71704__$1;
(statearr_71736_74991[(1)] = (8));

} else {
var statearr_71737_74992 = state_71704__$1;
(statearr_71737_74992[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71705 === (14))){
var inst_71694 = (state_71704[(2)]);
var state_71704__$1 = state_71704;
var statearr_71741_74993 = state_71704__$1;
(statearr_71741_74993[(2)] = inst_71694);

(statearr_71741_74993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71705 === (10))){
var inst_71686 = (state_71704[(2)]);
var state_71704__$1 = state_71704;
var statearr_71742_74996 = state_71704__$1;
(statearr_71742_74996[(2)] = inst_71686);

(statearr_71742_74996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71705 === (8))){
var inst_71682 = cljs.core.async.close_BANG_(to);
var state_71704__$1 = state_71704;
var statearr_71743_75005 = state_71704__$1;
(statearr_71743_75005[(2)] = inst_71682);

(statearr_71743_75005[(1)] = (10));


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
var cljs$core$async$state_machine__71379__auto__ = null;
var cljs$core$async$state_machine__71379__auto____0 = (function (){
var statearr_71745 = [null,null,null,null,null,null,null,null];
(statearr_71745[(0)] = cljs$core$async$state_machine__71379__auto__);

(statearr_71745[(1)] = (1));

return statearr_71745;
});
var cljs$core$async$state_machine__71379__auto____1 = (function (state_71704){
while(true){
var ret_value__71380__auto__ = (function (){try{while(true){
var result__71381__auto__ = switch__71378__auto__(state_71704);
if(cljs.core.keyword_identical_QMARK_(result__71381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71381__auto__;
}
break;
}
}catch (e71746){var ex__71382__auto__ = e71746;
var statearr_71747_75012 = state_71704;
(statearr_71747_75012[(2)] = ex__71382__auto__);


if(cljs.core.seq((state_71704[(4)]))){
var statearr_71750_75014 = state_71704;
(statearr_71750_75014[(1)] = cljs.core.first((state_71704[(4)])));

} else {
throw ex__71382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75022 = state_71704;
state_71704 = G__75022;
continue;
} else {
return ret_value__71380__auto__;
}
break;
}
});
cljs$core$async$state_machine__71379__auto__ = function(state_71704){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__71379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__71379__auto____1.call(this,state_71704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__71379__auto____0;
cljs$core$async$state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__71379__auto____1;
return cljs$core$async$state_machine__71379__auto__;
})()
})();
var state__71449__auto__ = (function (){var statearr_71752 = f__71448__auto__();
(statearr_71752[(6)] = c__71447__auto___74946);

return statearr_71752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71449__auto__);
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
var process = (function (p__71761){
var vec__71762 = p__71761;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71762,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71762,(1),null);
var job = vec__71762;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__71447__auto___75038 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__71448__auto__ = (function (){var switch__71378__auto__ = (function (state_71770){
var state_val_71771 = (state_71770[(1)]);
if((state_val_71771 === (1))){
var state_71770__$1 = state_71770;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71770__$1,(2),res,v);
} else {
if((state_val_71771 === (2))){
var inst_71767 = (state_71770[(2)]);
var inst_71768 = cljs.core.async.close_BANG_(res);
var state_71770__$1 = (function (){var statearr_71776 = state_71770;
(statearr_71776[(7)] = inst_71767);

return statearr_71776;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_71770__$1,inst_71768);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__71379__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__71379__auto____0 = (function (){
var statearr_71778 = [null,null,null,null,null,null,null,null];
(statearr_71778[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__71379__auto__);

(statearr_71778[(1)] = (1));

return statearr_71778;
});
var cljs$core$async$pipeline_STAR__$_state_machine__71379__auto____1 = (function (state_71770){
while(true){
var ret_value__71380__auto__ = (function (){try{while(true){
var result__71381__auto__ = switch__71378__auto__(state_71770);
if(cljs.core.keyword_identical_QMARK_(result__71381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71381__auto__;
}
break;
}
}catch (e71779){var ex__71382__auto__ = e71779;
var statearr_71780_75060 = state_71770;
(statearr_71780_75060[(2)] = ex__71382__auto__);


if(cljs.core.seq((state_71770[(4)]))){
var statearr_71782_75061 = state_71770;
(statearr_71782_75061[(1)] = cljs.core.first((state_71770[(4)])));

} else {
throw ex__71382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75064 = state_71770;
state_71770 = G__75064;
continue;
} else {
return ret_value__71380__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__71379__auto__ = function(state_71770){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__71379__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__71379__auto____1.call(this,state_71770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__71379__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__71379__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__71379__auto__;
})()
})();
var state__71449__auto__ = (function (){var statearr_71783 = f__71448__auto__();
(statearr_71783[(6)] = c__71447__auto___75038);

return statearr_71783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71449__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__71785){
var vec__71786 = p__71785;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71786,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71786,(1),null);
var job = vec__71786;
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
var n__4613__auto___75073 = n;
var __75074 = (0);
while(true){
if((__75074 < n__4613__auto___75073)){
var G__71789_75075 = type;
var G__71789_75076__$1 = (((G__71789_75075 instanceof cljs.core.Keyword))?G__71789_75075.fqn:null);
switch (G__71789_75076__$1) {
case "compute":
var c__71447__auto___75078 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__75074,c__71447__auto___75078,G__71789_75075,G__71789_75076__$1,n__4613__auto___75073,jobs,results,process,async){
return (function (){
var f__71448__auto__ = (function (){var switch__71378__auto__ = ((function (__75074,c__71447__auto___75078,G__71789_75075,G__71789_75076__$1,n__4613__auto___75073,jobs,results,process,async){
return (function (state_71804){
var state_val_71805 = (state_71804[(1)]);
if((state_val_71805 === (1))){
var state_71804__$1 = state_71804;
var statearr_71813_75079 = state_71804__$1;
(statearr_71813_75079[(2)] = null);

(statearr_71813_75079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71805 === (2))){
var state_71804__$1 = state_71804;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71804__$1,(4),jobs);
} else {
if((state_val_71805 === (3))){
var inst_71802 = (state_71804[(2)]);
var state_71804__$1 = state_71804;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71804__$1,inst_71802);
} else {
if((state_val_71805 === (4))){
var inst_71792 = (state_71804[(2)]);
var inst_71793 = process(inst_71792);
var state_71804__$1 = state_71804;
if(cljs.core.truth_(inst_71793)){
var statearr_71819_75090 = state_71804__$1;
(statearr_71819_75090[(1)] = (5));

} else {
var statearr_71820_75091 = state_71804__$1;
(statearr_71820_75091[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71805 === (5))){
var state_71804__$1 = state_71804;
var statearr_71821_75092 = state_71804__$1;
(statearr_71821_75092[(2)] = null);

(statearr_71821_75092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71805 === (6))){
var state_71804__$1 = state_71804;
var statearr_71822_75097 = state_71804__$1;
(statearr_71822_75097[(2)] = null);

(statearr_71822_75097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71805 === (7))){
var inst_71800 = (state_71804[(2)]);
var state_71804__$1 = state_71804;
var statearr_71823_75106 = state_71804__$1;
(statearr_71823_75106[(2)] = inst_71800);

(statearr_71823_75106[(1)] = (3));


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
});})(__75074,c__71447__auto___75078,G__71789_75075,G__71789_75076__$1,n__4613__auto___75073,jobs,results,process,async))
;
return ((function (__75074,switch__71378__auto__,c__71447__auto___75078,G__71789_75075,G__71789_75076__$1,n__4613__auto___75073,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__71379__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__71379__auto____0 = (function (){
var statearr_71825 = [null,null,null,null,null,null,null];
(statearr_71825[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__71379__auto__);

(statearr_71825[(1)] = (1));

return statearr_71825;
});
var cljs$core$async$pipeline_STAR__$_state_machine__71379__auto____1 = (function (state_71804){
while(true){
var ret_value__71380__auto__ = (function (){try{while(true){
var result__71381__auto__ = switch__71378__auto__(state_71804);
if(cljs.core.keyword_identical_QMARK_(result__71381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71381__auto__;
}
break;
}
}catch (e71828){var ex__71382__auto__ = e71828;
var statearr_71829_75117 = state_71804;
(statearr_71829_75117[(2)] = ex__71382__auto__);


if(cljs.core.seq((state_71804[(4)]))){
var statearr_71831_75122 = state_71804;
(statearr_71831_75122[(1)] = cljs.core.first((state_71804[(4)])));

} else {
throw ex__71382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75124 = state_71804;
state_71804 = G__75124;
continue;
} else {
return ret_value__71380__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__71379__auto__ = function(state_71804){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__71379__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__71379__auto____1.call(this,state_71804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__71379__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__71379__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__71379__auto__;
})()
;})(__75074,switch__71378__auto__,c__71447__auto___75078,G__71789_75075,G__71789_75076__$1,n__4613__auto___75073,jobs,results,process,async))
})();
var state__71449__auto__ = (function (){var statearr_71834 = f__71448__auto__();
(statearr_71834[(6)] = c__71447__auto___75078);

return statearr_71834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71449__auto__);
});})(__75074,c__71447__auto___75078,G__71789_75075,G__71789_75076__$1,n__4613__auto___75073,jobs,results,process,async))
);


break;
case "async":
var c__71447__auto___75134 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__75074,c__71447__auto___75134,G__71789_75075,G__71789_75076__$1,n__4613__auto___75073,jobs,results,process,async){
return (function (){
var f__71448__auto__ = (function (){var switch__71378__auto__ = ((function (__75074,c__71447__auto___75134,G__71789_75075,G__71789_75076__$1,n__4613__auto___75073,jobs,results,process,async){
return (function (state_71853){
var state_val_71854 = (state_71853[(1)]);
if((state_val_71854 === (1))){
var state_71853__$1 = state_71853;
var statearr_71867_75140 = state_71853__$1;
(statearr_71867_75140[(2)] = null);

(statearr_71867_75140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71854 === (2))){
var state_71853__$1 = state_71853;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71853__$1,(4),jobs);
} else {
if((state_val_71854 === (3))){
var inst_71849 = (state_71853[(2)]);
var state_71853__$1 = state_71853;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71853__$1,inst_71849);
} else {
if((state_val_71854 === (4))){
var inst_71841 = (state_71853[(2)]);
var inst_71842 = async(inst_71841);
var state_71853__$1 = state_71853;
if(cljs.core.truth_(inst_71842)){
var statearr_71876_75149 = state_71853__$1;
(statearr_71876_75149[(1)] = (5));

} else {
var statearr_71877_75151 = state_71853__$1;
(statearr_71877_75151[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71854 === (5))){
var state_71853__$1 = state_71853;
var statearr_71878_75153 = state_71853__$1;
(statearr_71878_75153[(2)] = null);

(statearr_71878_75153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71854 === (6))){
var state_71853__$1 = state_71853;
var statearr_71879_75162 = state_71853__$1;
(statearr_71879_75162[(2)] = null);

(statearr_71879_75162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71854 === (7))){
var inst_71847 = (state_71853[(2)]);
var state_71853__$1 = state_71853;
var statearr_71881_75163 = state_71853__$1;
(statearr_71881_75163[(2)] = inst_71847);

(statearr_71881_75163[(1)] = (3));


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
});})(__75074,c__71447__auto___75134,G__71789_75075,G__71789_75076__$1,n__4613__auto___75073,jobs,results,process,async))
;
return ((function (__75074,switch__71378__auto__,c__71447__auto___75134,G__71789_75075,G__71789_75076__$1,n__4613__auto___75073,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__71379__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__71379__auto____0 = (function (){
var statearr_71882 = [null,null,null,null,null,null,null];
(statearr_71882[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__71379__auto__);

(statearr_71882[(1)] = (1));

return statearr_71882;
});
var cljs$core$async$pipeline_STAR__$_state_machine__71379__auto____1 = (function (state_71853){
while(true){
var ret_value__71380__auto__ = (function (){try{while(true){
var result__71381__auto__ = switch__71378__auto__(state_71853);
if(cljs.core.keyword_identical_QMARK_(result__71381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71381__auto__;
}
break;
}
}catch (e71883){var ex__71382__auto__ = e71883;
var statearr_71884_75177 = state_71853;
(statearr_71884_75177[(2)] = ex__71382__auto__);


if(cljs.core.seq((state_71853[(4)]))){
var statearr_71885_75179 = state_71853;
(statearr_71885_75179[(1)] = cljs.core.first((state_71853[(4)])));

} else {
throw ex__71382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75182 = state_71853;
state_71853 = G__75182;
continue;
} else {
return ret_value__71380__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__71379__auto__ = function(state_71853){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__71379__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__71379__auto____1.call(this,state_71853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__71379__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__71379__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__71379__auto__;
})()
;})(__75074,switch__71378__auto__,c__71447__auto___75134,G__71789_75075,G__71789_75076__$1,n__4613__auto___75073,jobs,results,process,async))
})();
var state__71449__auto__ = (function (){var statearr_71887 = f__71448__auto__();
(statearr_71887[(6)] = c__71447__auto___75134);

return statearr_71887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71449__auto__);
});})(__75074,c__71447__auto___75134,G__71789_75075,G__71789_75076__$1,n__4613__auto___75073,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__71789_75076__$1)].join('')));

}

var G__75194 = (__75074 + (1));
__75074 = G__75194;
continue;
} else {
}
break;
}

var c__71447__auto___75195 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__71448__auto__ = (function (){var switch__71378__auto__ = (function (state_71912){
var state_val_71913 = (state_71912[(1)]);
if((state_val_71913 === (7))){
var inst_71908 = (state_71912[(2)]);
var state_71912__$1 = state_71912;
var statearr_71914_75205 = state_71912__$1;
(statearr_71914_75205[(2)] = inst_71908);

(statearr_71914_75205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71913 === (1))){
var state_71912__$1 = state_71912;
var statearr_71917_75206 = state_71912__$1;
(statearr_71917_75206[(2)] = null);

(statearr_71917_75206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71913 === (4))){
var inst_71891 = (state_71912[(7)]);
var inst_71891__$1 = (state_71912[(2)]);
var inst_71892 = (inst_71891__$1 == null);
var state_71912__$1 = (function (){var statearr_71919 = state_71912;
(statearr_71919[(7)] = inst_71891__$1);

return statearr_71919;
})();
if(cljs.core.truth_(inst_71892)){
var statearr_71921_75210 = state_71912__$1;
(statearr_71921_75210[(1)] = (5));

} else {
var statearr_71922_75211 = state_71912__$1;
(statearr_71922_75211[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71913 === (6))){
var inst_71897 = (state_71912[(8)]);
var inst_71891 = (state_71912[(7)]);
var inst_71897__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_71898 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_71900 = [inst_71891,inst_71897__$1];
var inst_71901 = (new cljs.core.PersistentVector(null,2,(5),inst_71898,inst_71900,null));
var state_71912__$1 = (function (){var statearr_71926 = state_71912;
(statearr_71926[(8)] = inst_71897__$1);

return statearr_71926;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71912__$1,(8),jobs,inst_71901);
} else {
if((state_val_71913 === (3))){
var inst_71910 = (state_71912[(2)]);
var state_71912__$1 = state_71912;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71912__$1,inst_71910);
} else {
if((state_val_71913 === (2))){
var state_71912__$1 = state_71912;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71912__$1,(4),from);
} else {
if((state_val_71913 === (9))){
var inst_71905 = (state_71912[(2)]);
var state_71912__$1 = (function (){var statearr_71931 = state_71912;
(statearr_71931[(9)] = inst_71905);

return statearr_71931;
})();
var statearr_71932_75231 = state_71912__$1;
(statearr_71932_75231[(2)] = null);

(statearr_71932_75231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71913 === (5))){
var inst_71894 = cljs.core.async.close_BANG_(jobs);
var state_71912__$1 = state_71912;
var statearr_71933_75234 = state_71912__$1;
(statearr_71933_75234[(2)] = inst_71894);

(statearr_71933_75234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71913 === (8))){
var inst_71897 = (state_71912[(8)]);
var inst_71903 = (state_71912[(2)]);
var state_71912__$1 = (function (){var statearr_71934 = state_71912;
(statearr_71934[(10)] = inst_71903);

return statearr_71934;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71912__$1,(9),results,inst_71897);
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
var cljs$core$async$pipeline_STAR__$_state_machine__71379__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__71379__auto____0 = (function (){
var statearr_71935 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_71935[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__71379__auto__);

(statearr_71935[(1)] = (1));

return statearr_71935;
});
var cljs$core$async$pipeline_STAR__$_state_machine__71379__auto____1 = (function (state_71912){
while(true){
var ret_value__71380__auto__ = (function (){try{while(true){
var result__71381__auto__ = switch__71378__auto__(state_71912);
if(cljs.core.keyword_identical_QMARK_(result__71381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71381__auto__;
}
break;
}
}catch (e71936){var ex__71382__auto__ = e71936;
var statearr_71937_75253 = state_71912;
(statearr_71937_75253[(2)] = ex__71382__auto__);


if(cljs.core.seq((state_71912[(4)]))){
var statearr_71939_75254 = state_71912;
(statearr_71939_75254[(1)] = cljs.core.first((state_71912[(4)])));

} else {
throw ex__71382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75256 = state_71912;
state_71912 = G__75256;
continue;
} else {
return ret_value__71380__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__71379__auto__ = function(state_71912){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__71379__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__71379__auto____1.call(this,state_71912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__71379__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__71379__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__71379__auto__;
})()
})();
var state__71449__auto__ = (function (){var statearr_71947 = f__71448__auto__();
(statearr_71947[(6)] = c__71447__auto___75195);

return statearr_71947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71449__auto__);
}));


var c__71447__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__71448__auto__ = (function (){var switch__71378__auto__ = (function (state_71994){
var state_val_71995 = (state_71994[(1)]);
if((state_val_71995 === (7))){
var inst_71989 = (state_71994[(2)]);
var state_71994__$1 = state_71994;
var statearr_71997_75268 = state_71994__$1;
(statearr_71997_75268[(2)] = inst_71989);

(statearr_71997_75268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71995 === (20))){
var state_71994__$1 = state_71994;
var statearr_71999_75270 = state_71994__$1;
(statearr_71999_75270[(2)] = null);

(statearr_71999_75270[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71995 === (1))){
var state_71994__$1 = state_71994;
var statearr_72000_75272 = state_71994__$1;
(statearr_72000_75272[(2)] = null);

(statearr_72000_75272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71995 === (4))){
var inst_71953 = (state_71994[(7)]);
var inst_71953__$1 = (state_71994[(2)]);
var inst_71954 = (inst_71953__$1 == null);
var state_71994__$1 = (function (){var statearr_72001 = state_71994;
(statearr_72001[(7)] = inst_71953__$1);

return statearr_72001;
})();
if(cljs.core.truth_(inst_71954)){
var statearr_72002_75281 = state_71994__$1;
(statearr_72002_75281[(1)] = (5));

} else {
var statearr_72003_75284 = state_71994__$1;
(statearr_72003_75284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71995 === (15))){
var inst_71968 = (state_71994[(8)]);
var state_71994__$1 = state_71994;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71994__$1,(18),to,inst_71968);
} else {
if((state_val_71995 === (21))){
var inst_71983 = (state_71994[(2)]);
var state_71994__$1 = state_71994;
var statearr_72004_75297 = state_71994__$1;
(statearr_72004_75297[(2)] = inst_71983);

(statearr_72004_75297[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71995 === (13))){
var inst_71985 = (state_71994[(2)]);
var state_71994__$1 = (function (){var statearr_72005 = state_71994;
(statearr_72005[(9)] = inst_71985);

return statearr_72005;
})();
var statearr_72006_75302 = state_71994__$1;
(statearr_72006_75302[(2)] = null);

(statearr_72006_75302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71995 === (6))){
var inst_71953 = (state_71994[(7)]);
var state_71994__$1 = state_71994;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71994__$1,(11),inst_71953);
} else {
if((state_val_71995 === (17))){
var inst_71978 = (state_71994[(2)]);
var state_71994__$1 = state_71994;
if(cljs.core.truth_(inst_71978)){
var statearr_72007_75313 = state_71994__$1;
(statearr_72007_75313[(1)] = (19));

} else {
var statearr_72008_75314 = state_71994__$1;
(statearr_72008_75314[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71995 === (3))){
var inst_71991 = (state_71994[(2)]);
var state_71994__$1 = state_71994;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71994__$1,inst_71991);
} else {
if((state_val_71995 === (12))){
var inst_71963 = (state_71994[(10)]);
var state_71994__$1 = state_71994;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71994__$1,(14),inst_71963);
} else {
if((state_val_71995 === (2))){
var state_71994__$1 = state_71994;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71994__$1,(4),results);
} else {
if((state_val_71995 === (19))){
var state_71994__$1 = state_71994;
var statearr_72013_75318 = state_71994__$1;
(statearr_72013_75318[(2)] = null);

(statearr_72013_75318[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71995 === (11))){
var inst_71963 = (state_71994[(2)]);
var state_71994__$1 = (function (){var statearr_72015 = state_71994;
(statearr_72015[(10)] = inst_71963);

return statearr_72015;
})();
var statearr_72017_75326 = state_71994__$1;
(statearr_72017_75326[(2)] = null);

(statearr_72017_75326[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71995 === (9))){
var state_71994__$1 = state_71994;
var statearr_72018_75329 = state_71994__$1;
(statearr_72018_75329[(2)] = null);

(statearr_72018_75329[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71995 === (5))){
var state_71994__$1 = state_71994;
if(cljs.core.truth_(close_QMARK_)){
var statearr_72021_75338 = state_71994__$1;
(statearr_72021_75338[(1)] = (8));

} else {
var statearr_72022_75339 = state_71994__$1;
(statearr_72022_75339[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71995 === (14))){
var inst_71968 = (state_71994[(8)]);
var inst_71968__$1 = (state_71994[(2)]);
var inst_71971 = (inst_71968__$1 == null);
var inst_71972 = cljs.core.not(inst_71971);
var state_71994__$1 = (function (){var statearr_72023 = state_71994;
(statearr_72023[(8)] = inst_71968__$1);

return statearr_72023;
})();
if(inst_71972){
var statearr_72024_75342 = state_71994__$1;
(statearr_72024_75342[(1)] = (15));

} else {
var statearr_72025_75343 = state_71994__$1;
(statearr_72025_75343[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71995 === (16))){
var state_71994__$1 = state_71994;
var statearr_72029_75346 = state_71994__$1;
(statearr_72029_75346[(2)] = false);

(statearr_72029_75346[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71995 === (10))){
var inst_71960 = (state_71994[(2)]);
var state_71994__$1 = state_71994;
var statearr_72031_75353 = state_71994__$1;
(statearr_72031_75353[(2)] = inst_71960);

(statearr_72031_75353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71995 === (18))){
var inst_71975 = (state_71994[(2)]);
var state_71994__$1 = state_71994;
var statearr_72032_75354 = state_71994__$1;
(statearr_72032_75354[(2)] = inst_71975);

(statearr_72032_75354[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71995 === (8))){
var inst_71957 = cljs.core.async.close_BANG_(to);
var state_71994__$1 = state_71994;
var statearr_72033_75356 = state_71994__$1;
(statearr_72033_75356[(2)] = inst_71957);

(statearr_72033_75356[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__71379__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__71379__auto____0 = (function (){
var statearr_72034 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_72034[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__71379__auto__);

(statearr_72034[(1)] = (1));

return statearr_72034;
});
var cljs$core$async$pipeline_STAR__$_state_machine__71379__auto____1 = (function (state_71994){
while(true){
var ret_value__71380__auto__ = (function (){try{while(true){
var result__71381__auto__ = switch__71378__auto__(state_71994);
if(cljs.core.keyword_identical_QMARK_(result__71381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71381__auto__;
}
break;
}
}catch (e72037){var ex__71382__auto__ = e72037;
var statearr_72038_75366 = state_71994;
(statearr_72038_75366[(2)] = ex__71382__auto__);


if(cljs.core.seq((state_71994[(4)]))){
var statearr_72040_75369 = state_71994;
(statearr_72040_75369[(1)] = cljs.core.first((state_71994[(4)])));

} else {
throw ex__71382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75371 = state_71994;
state_71994 = G__75371;
continue;
} else {
return ret_value__71380__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__71379__auto__ = function(state_71994){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__71379__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__71379__auto____1.call(this,state_71994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__71379__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__71379__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__71379__auto__;
})()
})();
var state__71449__auto__ = (function (){var statearr_72041 = f__71448__auto__();
(statearr_72041[(6)] = c__71447__auto__);

return statearr_72041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71449__auto__);
}));

return c__71447__auto__;
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
var G__72046 = arguments.length;
switch (G__72046) {
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
var G__72059 = arguments.length;
switch (G__72059) {
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
var G__72066 = arguments.length;
switch (G__72066) {
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
var c__71447__auto___75427 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__71448__auto__ = (function (){var switch__71378__auto__ = (function (state_72104){
var state_val_72105 = (state_72104[(1)]);
if((state_val_72105 === (7))){
var inst_72097 = (state_72104[(2)]);
var state_72104__$1 = state_72104;
var statearr_72109_75430 = state_72104__$1;
(statearr_72109_75430[(2)] = inst_72097);

(statearr_72109_75430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72105 === (1))){
var state_72104__$1 = state_72104;
var statearr_72110_75439 = state_72104__$1;
(statearr_72110_75439[(2)] = null);

(statearr_72110_75439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72105 === (4))){
var inst_72075 = (state_72104[(7)]);
var inst_72075__$1 = (state_72104[(2)]);
var inst_72076 = (inst_72075__$1 == null);
var state_72104__$1 = (function (){var statearr_72111 = state_72104;
(statearr_72111[(7)] = inst_72075__$1);

return statearr_72111;
})();
if(cljs.core.truth_(inst_72076)){
var statearr_72112_75442 = state_72104__$1;
(statearr_72112_75442[(1)] = (5));

} else {
var statearr_72114_75444 = state_72104__$1;
(statearr_72114_75444[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72105 === (13))){
var state_72104__$1 = state_72104;
var statearr_72116_75456 = state_72104__$1;
(statearr_72116_75456[(2)] = null);

(statearr_72116_75456[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72105 === (6))){
var inst_72075 = (state_72104[(7)]);
var inst_72082 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_72075) : p.call(null,inst_72075));
var state_72104__$1 = state_72104;
if(cljs.core.truth_(inst_72082)){
var statearr_72117_75459 = state_72104__$1;
(statearr_72117_75459[(1)] = (9));

} else {
var statearr_72118_75460 = state_72104__$1;
(statearr_72118_75460[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72105 === (3))){
var inst_72100 = (state_72104[(2)]);
var state_72104__$1 = state_72104;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72104__$1,inst_72100);
} else {
if((state_val_72105 === (12))){
var state_72104__$1 = state_72104;
var statearr_72120_75469 = state_72104__$1;
(statearr_72120_75469[(2)] = null);

(statearr_72120_75469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72105 === (2))){
var state_72104__$1 = state_72104;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72104__$1,(4),ch);
} else {
if((state_val_72105 === (11))){
var inst_72075 = (state_72104[(7)]);
var inst_72087 = (state_72104[(2)]);
var state_72104__$1 = state_72104;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72104__$1,(8),inst_72087,inst_72075);
} else {
if((state_val_72105 === (9))){
var state_72104__$1 = state_72104;
var statearr_72123_75480 = state_72104__$1;
(statearr_72123_75480[(2)] = tc);

(statearr_72123_75480[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72105 === (5))){
var inst_72078 = cljs.core.async.close_BANG_(tc);
var inst_72079 = cljs.core.async.close_BANG_(fc);
var state_72104__$1 = (function (){var statearr_72124 = state_72104;
(statearr_72124[(8)] = inst_72078);

return statearr_72124;
})();
var statearr_72125_75483 = state_72104__$1;
(statearr_72125_75483[(2)] = inst_72079);

(statearr_72125_75483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72105 === (14))){
var inst_72095 = (state_72104[(2)]);
var state_72104__$1 = state_72104;
var statearr_72128_75492 = state_72104__$1;
(statearr_72128_75492[(2)] = inst_72095);

(statearr_72128_75492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72105 === (10))){
var state_72104__$1 = state_72104;
var statearr_72133_75493 = state_72104__$1;
(statearr_72133_75493[(2)] = fc);

(statearr_72133_75493[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72105 === (8))){
var inst_72090 = (state_72104[(2)]);
var state_72104__$1 = state_72104;
if(cljs.core.truth_(inst_72090)){
var statearr_72135_75496 = state_72104__$1;
(statearr_72135_75496[(1)] = (12));

} else {
var statearr_72136_75498 = state_72104__$1;
(statearr_72136_75498[(1)] = (13));

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
var cljs$core$async$state_machine__71379__auto__ = null;
var cljs$core$async$state_machine__71379__auto____0 = (function (){
var statearr_72138 = [null,null,null,null,null,null,null,null,null];
(statearr_72138[(0)] = cljs$core$async$state_machine__71379__auto__);

(statearr_72138[(1)] = (1));

return statearr_72138;
});
var cljs$core$async$state_machine__71379__auto____1 = (function (state_72104){
while(true){
var ret_value__71380__auto__ = (function (){try{while(true){
var result__71381__auto__ = switch__71378__auto__(state_72104);
if(cljs.core.keyword_identical_QMARK_(result__71381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71381__auto__;
}
break;
}
}catch (e72139){var ex__71382__auto__ = e72139;
var statearr_72140_75508 = state_72104;
(statearr_72140_75508[(2)] = ex__71382__auto__);


if(cljs.core.seq((state_72104[(4)]))){
var statearr_72141_75517 = state_72104;
(statearr_72141_75517[(1)] = cljs.core.first((state_72104[(4)])));

} else {
throw ex__71382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75518 = state_72104;
state_72104 = G__75518;
continue;
} else {
return ret_value__71380__auto__;
}
break;
}
});
cljs$core$async$state_machine__71379__auto__ = function(state_72104){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__71379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__71379__auto____1.call(this,state_72104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__71379__auto____0;
cljs$core$async$state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__71379__auto____1;
return cljs$core$async$state_machine__71379__auto__;
})()
})();
var state__71449__auto__ = (function (){var statearr_72142 = f__71448__auto__();
(statearr_72142[(6)] = c__71447__auto___75427);

return statearr_72142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71449__auto__);
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
var c__71447__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__71448__auto__ = (function (){var switch__71378__auto__ = (function (state_72173){
var state_val_72174 = (state_72173[(1)]);
if((state_val_72174 === (7))){
var inst_72168 = (state_72173[(2)]);
var state_72173__$1 = state_72173;
var statearr_72175_75530 = state_72173__$1;
(statearr_72175_75530[(2)] = inst_72168);

(statearr_72175_75530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72174 === (1))){
var inst_72144 = init;
var inst_72145 = inst_72144;
var state_72173__$1 = (function (){var statearr_72176 = state_72173;
(statearr_72176[(7)] = inst_72145);

return statearr_72176;
})();
var statearr_72177_75540 = state_72173__$1;
(statearr_72177_75540[(2)] = null);

(statearr_72177_75540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72174 === (4))){
var inst_72150 = (state_72173[(8)]);
var inst_72150__$1 = (state_72173[(2)]);
var inst_72151 = (inst_72150__$1 == null);
var state_72173__$1 = (function (){var statearr_72178 = state_72173;
(statearr_72178[(8)] = inst_72150__$1);

return statearr_72178;
})();
if(cljs.core.truth_(inst_72151)){
var statearr_72179_75543 = state_72173__$1;
(statearr_72179_75543[(1)] = (5));

} else {
var statearr_72180_75544 = state_72173__$1;
(statearr_72180_75544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72174 === (6))){
var inst_72145 = (state_72173[(7)]);
var inst_72150 = (state_72173[(8)]);
var inst_72154 = (state_72173[(9)]);
var inst_72154__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_72145,inst_72150) : f.call(null,inst_72145,inst_72150));
var inst_72155 = cljs.core.reduced_QMARK_(inst_72154__$1);
var state_72173__$1 = (function (){var statearr_72181 = state_72173;
(statearr_72181[(9)] = inst_72154__$1);

return statearr_72181;
})();
if(inst_72155){
var statearr_72182_75555 = state_72173__$1;
(statearr_72182_75555[(1)] = (8));

} else {
var statearr_72183_75556 = state_72173__$1;
(statearr_72183_75556[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72174 === (3))){
var inst_72170 = (state_72173[(2)]);
var state_72173__$1 = state_72173;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72173__$1,inst_72170);
} else {
if((state_val_72174 === (2))){
var state_72173__$1 = state_72173;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72173__$1,(4),ch);
} else {
if((state_val_72174 === (9))){
var inst_72154 = (state_72173[(9)]);
var inst_72145 = inst_72154;
var state_72173__$1 = (function (){var statearr_72194 = state_72173;
(statearr_72194[(7)] = inst_72145);

return statearr_72194;
})();
var statearr_72195_75567 = state_72173__$1;
(statearr_72195_75567[(2)] = null);

(statearr_72195_75567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72174 === (5))){
var inst_72145 = (state_72173[(7)]);
var state_72173__$1 = state_72173;
var statearr_72199_75568 = state_72173__$1;
(statearr_72199_75568[(2)] = inst_72145);

(statearr_72199_75568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72174 === (10))){
var inst_72166 = (state_72173[(2)]);
var state_72173__$1 = state_72173;
var statearr_72200_75571 = state_72173__$1;
(statearr_72200_75571[(2)] = inst_72166);

(statearr_72200_75571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72174 === (8))){
var inst_72154 = (state_72173[(9)]);
var inst_72159 = cljs.core.deref(inst_72154);
var state_72173__$1 = state_72173;
var statearr_72201_75580 = state_72173__$1;
(statearr_72201_75580[(2)] = inst_72159);

(statearr_72201_75580[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__71379__auto__ = null;
var cljs$core$async$reduce_$_state_machine__71379__auto____0 = (function (){
var statearr_72203 = [null,null,null,null,null,null,null,null,null,null];
(statearr_72203[(0)] = cljs$core$async$reduce_$_state_machine__71379__auto__);

(statearr_72203[(1)] = (1));

return statearr_72203;
});
var cljs$core$async$reduce_$_state_machine__71379__auto____1 = (function (state_72173){
while(true){
var ret_value__71380__auto__ = (function (){try{while(true){
var result__71381__auto__ = switch__71378__auto__(state_72173);
if(cljs.core.keyword_identical_QMARK_(result__71381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71381__auto__;
}
break;
}
}catch (e72204){var ex__71382__auto__ = e72204;
var statearr_72206_75581 = state_72173;
(statearr_72206_75581[(2)] = ex__71382__auto__);


if(cljs.core.seq((state_72173[(4)]))){
var statearr_72211_75582 = state_72173;
(statearr_72211_75582[(1)] = cljs.core.first((state_72173[(4)])));

} else {
throw ex__71382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75583 = state_72173;
state_72173 = G__75583;
continue;
} else {
return ret_value__71380__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__71379__auto__ = function(state_72173){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__71379__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__71379__auto____1.call(this,state_72173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__71379__auto____0;
cljs$core$async$reduce_$_state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__71379__auto____1;
return cljs$core$async$reduce_$_state_machine__71379__auto__;
})()
})();
var state__71449__auto__ = (function (){var statearr_72218 = f__71448__auto__();
(statearr_72218[(6)] = c__71447__auto__);

return statearr_72218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71449__auto__);
}));

return c__71447__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__71447__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__71448__auto__ = (function (){var switch__71378__auto__ = (function (state_72225){
var state_val_72226 = (state_72225[(1)]);
if((state_val_72226 === (1))){
var inst_72220 = cljs.core.async.reduce(f__$1,init,ch);
var state_72225__$1 = state_72225;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72225__$1,(2),inst_72220);
} else {
if((state_val_72226 === (2))){
var inst_72222 = (state_72225[(2)]);
var inst_72223 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_72222) : f__$1.call(null,inst_72222));
var state_72225__$1 = state_72225;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72225__$1,inst_72223);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__71379__auto__ = null;
var cljs$core$async$transduce_$_state_machine__71379__auto____0 = (function (){
var statearr_72233 = [null,null,null,null,null,null,null];
(statearr_72233[(0)] = cljs$core$async$transduce_$_state_machine__71379__auto__);

(statearr_72233[(1)] = (1));

return statearr_72233;
});
var cljs$core$async$transduce_$_state_machine__71379__auto____1 = (function (state_72225){
while(true){
var ret_value__71380__auto__ = (function (){try{while(true){
var result__71381__auto__ = switch__71378__auto__(state_72225);
if(cljs.core.keyword_identical_QMARK_(result__71381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71381__auto__;
}
break;
}
}catch (e72234){var ex__71382__auto__ = e72234;
var statearr_72235_75608 = state_72225;
(statearr_72235_75608[(2)] = ex__71382__auto__);


if(cljs.core.seq((state_72225[(4)]))){
var statearr_72237_75610 = state_72225;
(statearr_72237_75610[(1)] = cljs.core.first((state_72225[(4)])));

} else {
throw ex__71382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75620 = state_72225;
state_72225 = G__75620;
continue;
} else {
return ret_value__71380__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__71379__auto__ = function(state_72225){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__71379__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__71379__auto____1.call(this,state_72225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__71379__auto____0;
cljs$core$async$transduce_$_state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__71379__auto____1;
return cljs$core$async$transduce_$_state_machine__71379__auto__;
})()
})();
var state__71449__auto__ = (function (){var statearr_72239 = f__71448__auto__();
(statearr_72239[(6)] = c__71447__auto__);

return statearr_72239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71449__auto__);
}));

return c__71447__auto__;
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
var G__72245 = arguments.length;
switch (G__72245) {
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
var c__71447__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__71448__auto__ = (function (){var switch__71378__auto__ = (function (state_72277){
var state_val_72278 = (state_72277[(1)]);
if((state_val_72278 === (7))){
var inst_72256 = (state_72277[(2)]);
var state_72277__$1 = state_72277;
var statearr_72283_75644 = state_72277__$1;
(statearr_72283_75644[(2)] = inst_72256);

(statearr_72283_75644[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72278 === (1))){
var inst_72249 = cljs.core.seq(coll);
var inst_72250 = inst_72249;
var state_72277__$1 = (function (){var statearr_72287 = state_72277;
(statearr_72287[(7)] = inst_72250);

return statearr_72287;
})();
var statearr_72290_75647 = state_72277__$1;
(statearr_72290_75647[(2)] = null);

(statearr_72290_75647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72278 === (4))){
var inst_72250 = (state_72277[(7)]);
var inst_72254 = cljs.core.first(inst_72250);
var state_72277__$1 = state_72277;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72277__$1,(7),ch,inst_72254);
} else {
if((state_val_72278 === (13))){
var inst_72270 = (state_72277[(2)]);
var state_72277__$1 = state_72277;
var statearr_72297_75656 = state_72277__$1;
(statearr_72297_75656[(2)] = inst_72270);

(statearr_72297_75656[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72278 === (6))){
var inst_72259 = (state_72277[(2)]);
var state_72277__$1 = state_72277;
if(cljs.core.truth_(inst_72259)){
var statearr_72298_75659 = state_72277__$1;
(statearr_72298_75659[(1)] = (8));

} else {
var statearr_72299_75661 = state_72277__$1;
(statearr_72299_75661[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72278 === (3))){
var inst_72274 = (state_72277[(2)]);
var state_72277__$1 = state_72277;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72277__$1,inst_72274);
} else {
if((state_val_72278 === (12))){
var state_72277__$1 = state_72277;
var statearr_72300_75669 = state_72277__$1;
(statearr_72300_75669[(2)] = null);

(statearr_72300_75669[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72278 === (2))){
var inst_72250 = (state_72277[(7)]);
var state_72277__$1 = state_72277;
if(cljs.core.truth_(inst_72250)){
var statearr_72303_75672 = state_72277__$1;
(statearr_72303_75672[(1)] = (4));

} else {
var statearr_72306_75674 = state_72277__$1;
(statearr_72306_75674[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72278 === (11))){
var inst_72267 = cljs.core.async.close_BANG_(ch);
var state_72277__$1 = state_72277;
var statearr_72308_75683 = state_72277__$1;
(statearr_72308_75683[(2)] = inst_72267);

(statearr_72308_75683[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72278 === (9))){
var state_72277__$1 = state_72277;
if(cljs.core.truth_(close_QMARK_)){
var statearr_72312_75686 = state_72277__$1;
(statearr_72312_75686[(1)] = (11));

} else {
var statearr_72313_75688 = state_72277__$1;
(statearr_72313_75688[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72278 === (5))){
var inst_72250 = (state_72277[(7)]);
var state_72277__$1 = state_72277;
var statearr_72315_75697 = state_72277__$1;
(statearr_72315_75697[(2)] = inst_72250);

(statearr_72315_75697[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72278 === (10))){
var inst_72272 = (state_72277[(2)]);
var state_72277__$1 = state_72277;
var statearr_72316_75698 = state_72277__$1;
(statearr_72316_75698[(2)] = inst_72272);

(statearr_72316_75698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72278 === (8))){
var inst_72250 = (state_72277[(7)]);
var inst_72262 = cljs.core.next(inst_72250);
var inst_72250__$1 = inst_72262;
var state_72277__$1 = (function (){var statearr_72317 = state_72277;
(statearr_72317[(7)] = inst_72250__$1);

return statearr_72317;
})();
var statearr_72318_75702 = state_72277__$1;
(statearr_72318_75702[(2)] = null);

(statearr_72318_75702[(1)] = (2));


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
var cljs$core$async$state_machine__71379__auto__ = null;
var cljs$core$async$state_machine__71379__auto____0 = (function (){
var statearr_72320 = [null,null,null,null,null,null,null,null];
(statearr_72320[(0)] = cljs$core$async$state_machine__71379__auto__);

(statearr_72320[(1)] = (1));

return statearr_72320;
});
var cljs$core$async$state_machine__71379__auto____1 = (function (state_72277){
while(true){
var ret_value__71380__auto__ = (function (){try{while(true){
var result__71381__auto__ = switch__71378__auto__(state_72277);
if(cljs.core.keyword_identical_QMARK_(result__71381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71381__auto__;
}
break;
}
}catch (e72321){var ex__71382__auto__ = e72321;
var statearr_72322_75713 = state_72277;
(statearr_72322_75713[(2)] = ex__71382__auto__);


if(cljs.core.seq((state_72277[(4)]))){
var statearr_72324_75721 = state_72277;
(statearr_72324_75721[(1)] = cljs.core.first((state_72277[(4)])));

} else {
throw ex__71382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75722 = state_72277;
state_72277 = G__75722;
continue;
} else {
return ret_value__71380__auto__;
}
break;
}
});
cljs$core$async$state_machine__71379__auto__ = function(state_72277){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__71379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__71379__auto____1.call(this,state_72277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__71379__auto____0;
cljs$core$async$state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__71379__auto____1;
return cljs$core$async$state_machine__71379__auto__;
})()
})();
var state__71449__auto__ = (function (){var statearr_72327 = f__71448__auto__();
(statearr_72327[(6)] = c__71447__auto__);

return statearr_72327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71449__auto__);
}));

return c__71447__auto__;
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
var G__72336 = arguments.length;
switch (G__72336) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_75747 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_75747(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_75760 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_75760(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_75779 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_75779(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_75790 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_75790(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async72366 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async72366 = (function (ch,cs,meta72367){
this.ch = ch;
this.cs = cs;
this.meta72367 = meta72367;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async72366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72368,meta72367__$1){
var self__ = this;
var _72368__$1 = this;
return (new cljs.core.async.t_cljs$core$async72366(self__.ch,self__.cs,meta72367__$1));
}));

(cljs.core.async.t_cljs$core$async72366.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72368){
var self__ = this;
var _72368__$1 = this;
return self__.meta72367;
}));

(cljs.core.async.t_cljs$core$async72366.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72366.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async72366.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72366.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async72366.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async72366.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async72366.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta72367","meta72367",1123473381,null)], null);
}));

(cljs.core.async.t_cljs$core$async72366.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async72366.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async72366");

(cljs.core.async.t_cljs$core$async72366.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async72366");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async72366.
 */
cljs.core.async.__GT_t_cljs$core$async72366 = (function cljs$core$async$mult_$___GT_t_cljs$core$async72366(ch__$1,cs__$1,meta72367){
return (new cljs.core.async.t_cljs$core$async72366(ch__$1,cs__$1,meta72367));
});

}

return (new cljs.core.async.t_cljs$core$async72366(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__71447__auto___75839 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__71448__auto__ = (function (){var switch__71378__auto__ = (function (state_72555){
var state_val_72556 = (state_72555[(1)]);
if((state_val_72556 === (7))){
var inst_72549 = (state_72555[(2)]);
var state_72555__$1 = state_72555;
var statearr_72560_75848 = state_72555__$1;
(statearr_72560_75848[(2)] = inst_72549);

(statearr_72560_75848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (20))){
var inst_72439 = (state_72555[(7)]);
var inst_72452 = cljs.core.first(inst_72439);
var inst_72453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_72452,(0),null);
var inst_72454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_72452,(1),null);
var state_72555__$1 = (function (){var statearr_72561 = state_72555;
(statearr_72561[(8)] = inst_72453);

return statearr_72561;
})();
if(cljs.core.truth_(inst_72454)){
var statearr_72562_75852 = state_72555__$1;
(statearr_72562_75852[(1)] = (22));

} else {
var statearr_72564_75860 = state_72555__$1;
(statearr_72564_75860[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (27))){
var inst_72489 = (state_72555[(9)]);
var inst_72406 = (state_72555[(10)]);
var inst_72499 = (state_72555[(11)]);
var inst_72491 = (state_72555[(12)]);
var inst_72499__$1 = cljs.core._nth(inst_72489,inst_72491);
var inst_72500 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_72499__$1,inst_72406,done);
var state_72555__$1 = (function (){var statearr_72569 = state_72555;
(statearr_72569[(11)] = inst_72499__$1);

return statearr_72569;
})();
if(cljs.core.truth_(inst_72500)){
var statearr_72570_75864 = state_72555__$1;
(statearr_72570_75864[(1)] = (30));

} else {
var statearr_72571_75872 = state_72555__$1;
(statearr_72571_75872[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (1))){
var state_72555__$1 = state_72555;
var statearr_72572_75873 = state_72555__$1;
(statearr_72572_75873[(2)] = null);

(statearr_72572_75873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (24))){
var inst_72439 = (state_72555[(7)]);
var inst_72459 = (state_72555[(2)]);
var inst_72460 = cljs.core.next(inst_72439);
var inst_72416 = inst_72460;
var inst_72417 = null;
var inst_72418 = (0);
var inst_72419 = (0);
var state_72555__$1 = (function (){var statearr_72574 = state_72555;
(statearr_72574[(13)] = inst_72459);

(statearr_72574[(14)] = inst_72416);

(statearr_72574[(15)] = inst_72419);

(statearr_72574[(16)] = inst_72417);

(statearr_72574[(17)] = inst_72418);

return statearr_72574;
})();
var statearr_72575_75876 = state_72555__$1;
(statearr_72575_75876[(2)] = null);

(statearr_72575_75876[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (39))){
var state_72555__$1 = state_72555;
var statearr_72579_75878 = state_72555__$1;
(statearr_72579_75878[(2)] = null);

(statearr_72579_75878[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (4))){
var inst_72406 = (state_72555[(10)]);
var inst_72406__$1 = (state_72555[(2)]);
var inst_72407 = (inst_72406__$1 == null);
var state_72555__$1 = (function (){var statearr_72581 = state_72555;
(statearr_72581[(10)] = inst_72406__$1);

return statearr_72581;
})();
if(cljs.core.truth_(inst_72407)){
var statearr_72582_75886 = state_72555__$1;
(statearr_72582_75886[(1)] = (5));

} else {
var statearr_72583_75887 = state_72555__$1;
(statearr_72583_75887[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (15))){
var inst_72416 = (state_72555[(14)]);
var inst_72419 = (state_72555[(15)]);
var inst_72417 = (state_72555[(16)]);
var inst_72418 = (state_72555[(17)]);
var inst_72435 = (state_72555[(2)]);
var inst_72436 = (inst_72419 + (1));
var tmp72576 = inst_72416;
var tmp72577 = inst_72417;
var tmp72578 = inst_72418;
var inst_72416__$1 = tmp72576;
var inst_72417__$1 = tmp72577;
var inst_72418__$1 = tmp72578;
var inst_72419__$1 = inst_72436;
var state_72555__$1 = (function (){var statearr_72584 = state_72555;
(statearr_72584[(14)] = inst_72416__$1);

(statearr_72584[(15)] = inst_72419__$1);

(statearr_72584[(16)] = inst_72417__$1);

(statearr_72584[(17)] = inst_72418__$1);

(statearr_72584[(18)] = inst_72435);

return statearr_72584;
})();
var statearr_72588_75899 = state_72555__$1;
(statearr_72588_75899[(2)] = null);

(statearr_72588_75899[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (21))){
var inst_72463 = (state_72555[(2)]);
var state_72555__$1 = state_72555;
var statearr_72592_75903 = state_72555__$1;
(statearr_72592_75903[(2)] = inst_72463);

(statearr_72592_75903[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (31))){
var inst_72499 = (state_72555[(11)]);
var inst_72503 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_72499);
var state_72555__$1 = state_72555;
var statearr_72593_75912 = state_72555__$1;
(statearr_72593_75912[(2)] = inst_72503);

(statearr_72593_75912[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (32))){
var inst_72489 = (state_72555[(9)]);
var inst_72490 = (state_72555[(19)]);
var inst_72488 = (state_72555[(20)]);
var inst_72491 = (state_72555[(12)]);
var inst_72505 = (state_72555[(2)]);
var inst_72506 = (inst_72491 + (1));
var tmp72589 = inst_72489;
var tmp72590 = inst_72490;
var tmp72591 = inst_72488;
var inst_72488__$1 = tmp72591;
var inst_72489__$1 = tmp72589;
var inst_72490__$1 = tmp72590;
var inst_72491__$1 = inst_72506;
var state_72555__$1 = (function (){var statearr_72604 = state_72555;
(statearr_72604[(9)] = inst_72489__$1);

(statearr_72604[(21)] = inst_72505);

(statearr_72604[(19)] = inst_72490__$1);

(statearr_72604[(20)] = inst_72488__$1);

(statearr_72604[(12)] = inst_72491__$1);

return statearr_72604;
})();
var statearr_72608_75923 = state_72555__$1;
(statearr_72608_75923[(2)] = null);

(statearr_72608_75923[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (40))){
var inst_72519 = (state_72555[(22)]);
var inst_72523 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_72519);
var state_72555__$1 = state_72555;
var statearr_72609_75926 = state_72555__$1;
(statearr_72609_75926[(2)] = inst_72523);

(statearr_72609_75926[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (33))){
var inst_72509 = (state_72555[(23)]);
var inst_72512 = cljs.core.chunked_seq_QMARK_(inst_72509);
var state_72555__$1 = state_72555;
if(inst_72512){
var statearr_72610_75938 = state_72555__$1;
(statearr_72610_75938[(1)] = (36));

} else {
var statearr_72611_75939 = state_72555__$1;
(statearr_72611_75939[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (13))){
var inst_72429 = (state_72555[(24)]);
var inst_72432 = cljs.core.async.close_BANG_(inst_72429);
var state_72555__$1 = state_72555;
var statearr_72613_75941 = state_72555__$1;
(statearr_72613_75941[(2)] = inst_72432);

(statearr_72613_75941[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (22))){
var inst_72453 = (state_72555[(8)]);
var inst_72456 = cljs.core.async.close_BANG_(inst_72453);
var state_72555__$1 = state_72555;
var statearr_72614_75945 = state_72555__$1;
(statearr_72614_75945[(2)] = inst_72456);

(statearr_72614_75945[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (36))){
var inst_72509 = (state_72555[(23)]);
var inst_72514 = cljs.core.chunk_first(inst_72509);
var inst_72515 = cljs.core.chunk_rest(inst_72509);
var inst_72516 = cljs.core.count(inst_72514);
var inst_72488 = inst_72515;
var inst_72489 = inst_72514;
var inst_72490 = inst_72516;
var inst_72491 = (0);
var state_72555__$1 = (function (){var statearr_72617 = state_72555;
(statearr_72617[(9)] = inst_72489);

(statearr_72617[(19)] = inst_72490);

(statearr_72617[(20)] = inst_72488);

(statearr_72617[(12)] = inst_72491);

return statearr_72617;
})();
var statearr_72619_75955 = state_72555__$1;
(statearr_72619_75955[(2)] = null);

(statearr_72619_75955[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (41))){
var inst_72509 = (state_72555[(23)]);
var inst_72525 = (state_72555[(2)]);
var inst_72526 = cljs.core.next(inst_72509);
var inst_72488 = inst_72526;
var inst_72489 = null;
var inst_72490 = (0);
var inst_72491 = (0);
var state_72555__$1 = (function (){var statearr_72620 = state_72555;
(statearr_72620[(9)] = inst_72489);

(statearr_72620[(19)] = inst_72490);

(statearr_72620[(20)] = inst_72488);

(statearr_72620[(25)] = inst_72525);

(statearr_72620[(12)] = inst_72491);

return statearr_72620;
})();
var statearr_72621_75967 = state_72555__$1;
(statearr_72621_75967[(2)] = null);

(statearr_72621_75967[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (43))){
var state_72555__$1 = state_72555;
var statearr_72622_75970 = state_72555__$1;
(statearr_72622_75970[(2)] = null);

(statearr_72622_75970[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (29))){
var inst_72536 = (state_72555[(2)]);
var state_72555__$1 = state_72555;
var statearr_72623_75978 = state_72555__$1;
(statearr_72623_75978[(2)] = inst_72536);

(statearr_72623_75978[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (44))){
var inst_72546 = (state_72555[(2)]);
var state_72555__$1 = (function (){var statearr_72624 = state_72555;
(statearr_72624[(26)] = inst_72546);

return statearr_72624;
})();
var statearr_72628_75980 = state_72555__$1;
(statearr_72628_75980[(2)] = null);

(statearr_72628_75980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (6))){
var inst_72475 = (state_72555[(27)]);
var inst_72474 = cljs.core.deref(cs);
var inst_72475__$1 = cljs.core.keys(inst_72474);
var inst_72480 = cljs.core.count(inst_72475__$1);
var inst_72481 = cljs.core.reset_BANG_(dctr,inst_72480);
var inst_72487 = cljs.core.seq(inst_72475__$1);
var inst_72488 = inst_72487;
var inst_72489 = null;
var inst_72490 = (0);
var inst_72491 = (0);
var state_72555__$1 = (function (){var statearr_72637 = state_72555;
(statearr_72637[(9)] = inst_72489);

(statearr_72637[(27)] = inst_72475__$1);

(statearr_72637[(19)] = inst_72490);

(statearr_72637[(28)] = inst_72481);

(statearr_72637[(20)] = inst_72488);

(statearr_72637[(12)] = inst_72491);

return statearr_72637;
})();
var statearr_72638_75992 = state_72555__$1;
(statearr_72638_75992[(2)] = null);

(statearr_72638_75992[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (28))){
var inst_72509 = (state_72555[(23)]);
var inst_72488 = (state_72555[(20)]);
var inst_72509__$1 = cljs.core.seq(inst_72488);
var state_72555__$1 = (function (){var statearr_72639 = state_72555;
(statearr_72639[(23)] = inst_72509__$1);

return statearr_72639;
})();
if(inst_72509__$1){
var statearr_72640_76004 = state_72555__$1;
(statearr_72640_76004[(1)] = (33));

} else {
var statearr_72641_76006 = state_72555__$1;
(statearr_72641_76006[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (25))){
var inst_72490 = (state_72555[(19)]);
var inst_72491 = (state_72555[(12)]);
var inst_72496 = (inst_72491 < inst_72490);
var inst_72497 = inst_72496;
var state_72555__$1 = state_72555;
if(cljs.core.truth_(inst_72497)){
var statearr_72643_76016 = state_72555__$1;
(statearr_72643_76016[(1)] = (27));

} else {
var statearr_72644_76017 = state_72555__$1;
(statearr_72644_76017[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (34))){
var state_72555__$1 = state_72555;
var statearr_72645_76018 = state_72555__$1;
(statearr_72645_76018[(2)] = null);

(statearr_72645_76018[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (17))){
var state_72555__$1 = state_72555;
var statearr_72646_76021 = state_72555__$1;
(statearr_72646_76021[(2)] = null);

(statearr_72646_76021[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (3))){
var inst_72551 = (state_72555[(2)]);
var state_72555__$1 = state_72555;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72555__$1,inst_72551);
} else {
if((state_val_72556 === (12))){
var inst_72468 = (state_72555[(2)]);
var state_72555__$1 = state_72555;
var statearr_72648_76030 = state_72555__$1;
(statearr_72648_76030[(2)] = inst_72468);

(statearr_72648_76030[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (2))){
var state_72555__$1 = state_72555;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72555__$1,(4),ch);
} else {
if((state_val_72556 === (23))){
var state_72555__$1 = state_72555;
var statearr_72649_76036 = state_72555__$1;
(statearr_72649_76036[(2)] = null);

(statearr_72649_76036[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (35))){
var inst_72534 = (state_72555[(2)]);
var state_72555__$1 = state_72555;
var statearr_72650_76045 = state_72555__$1;
(statearr_72650_76045[(2)] = inst_72534);

(statearr_72650_76045[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (19))){
var inst_72439 = (state_72555[(7)]);
var inst_72444 = cljs.core.chunk_first(inst_72439);
var inst_72445 = cljs.core.chunk_rest(inst_72439);
var inst_72446 = cljs.core.count(inst_72444);
var inst_72416 = inst_72445;
var inst_72417 = inst_72444;
var inst_72418 = inst_72446;
var inst_72419 = (0);
var state_72555__$1 = (function (){var statearr_72652 = state_72555;
(statearr_72652[(14)] = inst_72416);

(statearr_72652[(15)] = inst_72419);

(statearr_72652[(16)] = inst_72417);

(statearr_72652[(17)] = inst_72418);

return statearr_72652;
})();
var statearr_72654_76056 = state_72555__$1;
(statearr_72654_76056[(2)] = null);

(statearr_72654_76056[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (11))){
var inst_72439 = (state_72555[(7)]);
var inst_72416 = (state_72555[(14)]);
var inst_72439__$1 = cljs.core.seq(inst_72416);
var state_72555__$1 = (function (){var statearr_72657 = state_72555;
(statearr_72657[(7)] = inst_72439__$1);

return statearr_72657;
})();
if(inst_72439__$1){
var statearr_72658_76059 = state_72555__$1;
(statearr_72658_76059[(1)] = (16));

} else {
var statearr_72659_76060 = state_72555__$1;
(statearr_72659_76060[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (9))){
var inst_72470 = (state_72555[(2)]);
var state_72555__$1 = state_72555;
var statearr_72660_76069 = state_72555__$1;
(statearr_72660_76069[(2)] = inst_72470);

(statearr_72660_76069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (5))){
var inst_72414 = cljs.core.deref(cs);
var inst_72415 = cljs.core.seq(inst_72414);
var inst_72416 = inst_72415;
var inst_72417 = null;
var inst_72418 = (0);
var inst_72419 = (0);
var state_72555__$1 = (function (){var statearr_72661 = state_72555;
(statearr_72661[(14)] = inst_72416);

(statearr_72661[(15)] = inst_72419);

(statearr_72661[(16)] = inst_72417);

(statearr_72661[(17)] = inst_72418);

return statearr_72661;
})();
var statearr_72662_76083 = state_72555__$1;
(statearr_72662_76083[(2)] = null);

(statearr_72662_76083[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (14))){
var state_72555__$1 = state_72555;
var statearr_72666_76084 = state_72555__$1;
(statearr_72666_76084[(2)] = null);

(statearr_72666_76084[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (45))){
var inst_72543 = (state_72555[(2)]);
var state_72555__$1 = state_72555;
var statearr_72667_76087 = state_72555__$1;
(statearr_72667_76087[(2)] = inst_72543);

(statearr_72667_76087[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (26))){
var inst_72475 = (state_72555[(27)]);
var inst_72538 = (state_72555[(2)]);
var inst_72539 = cljs.core.seq(inst_72475);
var state_72555__$1 = (function (){var statearr_72668 = state_72555;
(statearr_72668[(29)] = inst_72538);

return statearr_72668;
})();
if(inst_72539){
var statearr_72669_76096 = state_72555__$1;
(statearr_72669_76096[(1)] = (42));

} else {
var statearr_72670_76097 = state_72555__$1;
(statearr_72670_76097[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (16))){
var inst_72439 = (state_72555[(7)]);
var inst_72442 = cljs.core.chunked_seq_QMARK_(inst_72439);
var state_72555__$1 = state_72555;
if(inst_72442){
var statearr_72671_76100 = state_72555__$1;
(statearr_72671_76100[(1)] = (19));

} else {
var statearr_72672_76102 = state_72555__$1;
(statearr_72672_76102[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (38))){
var inst_72530 = (state_72555[(2)]);
var state_72555__$1 = state_72555;
var statearr_72674_76114 = state_72555__$1;
(statearr_72674_76114[(2)] = inst_72530);

(statearr_72674_76114[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (30))){
var state_72555__$1 = state_72555;
var statearr_72676_76116 = state_72555__$1;
(statearr_72676_76116[(2)] = null);

(statearr_72676_76116[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (10))){
var inst_72419 = (state_72555[(15)]);
var inst_72417 = (state_72555[(16)]);
var inst_72427 = cljs.core._nth(inst_72417,inst_72419);
var inst_72429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_72427,(0),null);
var inst_72430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_72427,(1),null);
var state_72555__$1 = (function (){var statearr_72688 = state_72555;
(statearr_72688[(24)] = inst_72429);

return statearr_72688;
})();
if(cljs.core.truth_(inst_72430)){
var statearr_72690_76126 = state_72555__$1;
(statearr_72690_76126[(1)] = (13));

} else {
var statearr_72691_76128 = state_72555__$1;
(statearr_72691_76128[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (18))){
var inst_72466 = (state_72555[(2)]);
var state_72555__$1 = state_72555;
var statearr_72693_76131 = state_72555__$1;
(statearr_72693_76131[(2)] = inst_72466);

(statearr_72693_76131[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (42))){
var state_72555__$1 = state_72555;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72555__$1,(45),dchan);
} else {
if((state_val_72556 === (37))){
var inst_72519 = (state_72555[(22)]);
var inst_72406 = (state_72555[(10)]);
var inst_72509 = (state_72555[(23)]);
var inst_72519__$1 = cljs.core.first(inst_72509);
var inst_72520 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_72519__$1,inst_72406,done);
var state_72555__$1 = (function (){var statearr_72695 = state_72555;
(statearr_72695[(22)] = inst_72519__$1);

return statearr_72695;
})();
if(cljs.core.truth_(inst_72520)){
var statearr_72697_76142 = state_72555__$1;
(statearr_72697_76142[(1)] = (39));

} else {
var statearr_72698_76150 = state_72555__$1;
(statearr_72698_76150[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (8))){
var inst_72419 = (state_72555[(15)]);
var inst_72418 = (state_72555[(17)]);
var inst_72421 = (inst_72419 < inst_72418);
var inst_72422 = inst_72421;
var state_72555__$1 = state_72555;
if(cljs.core.truth_(inst_72422)){
var statearr_72699_76156 = state_72555__$1;
(statearr_72699_76156[(1)] = (10));

} else {
var statearr_72701_76158 = state_72555__$1;
(statearr_72701_76158[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__71379__auto__ = null;
var cljs$core$async$mult_$_state_machine__71379__auto____0 = (function (){
var statearr_72705 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72705[(0)] = cljs$core$async$mult_$_state_machine__71379__auto__);

(statearr_72705[(1)] = (1));

return statearr_72705;
});
var cljs$core$async$mult_$_state_machine__71379__auto____1 = (function (state_72555){
while(true){
var ret_value__71380__auto__ = (function (){try{while(true){
var result__71381__auto__ = switch__71378__auto__(state_72555);
if(cljs.core.keyword_identical_QMARK_(result__71381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71381__auto__;
}
break;
}
}catch (e72708){var ex__71382__auto__ = e72708;
var statearr_72709_76170 = state_72555;
(statearr_72709_76170[(2)] = ex__71382__auto__);


if(cljs.core.seq((state_72555[(4)]))){
var statearr_72710_76178 = state_72555;
(statearr_72710_76178[(1)] = cljs.core.first((state_72555[(4)])));

} else {
throw ex__71382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76180 = state_72555;
state_72555 = G__76180;
continue;
} else {
return ret_value__71380__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__71379__auto__ = function(state_72555){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__71379__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__71379__auto____1.call(this,state_72555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__71379__auto____0;
cljs$core$async$mult_$_state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__71379__auto____1;
return cljs$core$async$mult_$_state_machine__71379__auto__;
})()
})();
var state__71449__auto__ = (function (){var statearr_72713 = f__71448__auto__();
(statearr_72713[(6)] = c__71447__auto___75839);

return statearr_72713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71449__auto__);
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
var G__72719 = arguments.length;
switch (G__72719) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_76206 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_76206(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_76218 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_76218(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_76239 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_76239(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_76250 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_76250(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_76264 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_76264(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___76275 = arguments.length;
var i__4737__auto___76277 = (0);
while(true){
if((i__4737__auto___76277 < len__4736__auto___76275)){
args__4742__auto__.push((arguments[i__4737__auto___76277]));

var G__76279 = (i__4737__auto___76277 + (1));
i__4737__auto___76277 = G__76279;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__72761){
var map__72762 = p__72761;
var map__72762__$1 = (((((!((map__72762 == null))))?(((((map__72762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72762):map__72762);
var opts = map__72762__$1;
var statearr_72767_76291 = state;
(statearr_72767_76291[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_72771_76292 = state;
(statearr_72771_76292[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_72776_76295 = state;
(statearr_72776_76295[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq72748){
var G__72749 = cljs.core.first(seq72748);
var seq72748__$1 = cljs.core.next(seq72748);
var G__72750 = cljs.core.first(seq72748__$1);
var seq72748__$2 = cljs.core.next(seq72748__$1);
var G__72751 = cljs.core.first(seq72748__$2);
var seq72748__$3 = cljs.core.next(seq72748__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72749,G__72750,G__72751,seq72748__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async72808 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async72808 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta72809){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta72809 = meta72809;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async72808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72810,meta72809__$1){
var self__ = this;
var _72810__$1 = this;
return (new cljs.core.async.t_cljs$core$async72808(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta72809__$1));
}));

(cljs.core.async.t_cljs$core$async72808.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72810){
var self__ = this;
var _72810__$1 = this;
return self__.meta72809;
}));

(cljs.core.async.t_cljs$core$async72808.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72808.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async72808.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72808.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async72808.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async72808.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async72808.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async72808.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async72808.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta72809","meta72809",-1604417080,null)], null);
}));

(cljs.core.async.t_cljs$core$async72808.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async72808.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async72808");

(cljs.core.async.t_cljs$core$async72808.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async72808");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async72808.
 */
cljs.core.async.__GT_t_cljs$core$async72808 = (function cljs$core$async$mix_$___GT_t_cljs$core$async72808(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta72809){
return (new cljs.core.async.t_cljs$core$async72808(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta72809));
});

}

return (new cljs.core.async.t_cljs$core$async72808(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__71447__auto___76370 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__71448__auto__ = (function (){var switch__71378__auto__ = (function (state_72966){
var state_val_72969 = (state_72966[(1)]);
if((state_val_72969 === (7))){
var inst_72866 = (state_72966[(2)]);
var state_72966__$1 = state_72966;
var statearr_72972_76372 = state_72966__$1;
(statearr_72972_76372[(2)] = inst_72866);

(statearr_72972_76372[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72969 === (20))){
var inst_72878 = (state_72966[(7)]);
var state_72966__$1 = state_72966;
var statearr_72973_76375 = state_72966__$1;
(statearr_72973_76375[(2)] = inst_72878);

(statearr_72973_76375[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72969 === (27))){
var state_72966__$1 = state_72966;
var statearr_72975_76388 = state_72966__$1;
(statearr_72975_76388[(2)] = null);

(statearr_72975_76388[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72969 === (1))){
var inst_72851 = (state_72966[(8)]);
var inst_72851__$1 = calc_state();
var inst_72853 = (inst_72851__$1 == null);
var inst_72854 = cljs.core.not(inst_72853);
var state_72966__$1 = (function (){var statearr_72978 = state_72966;
(statearr_72978[(8)] = inst_72851__$1);

return statearr_72978;
})();
if(inst_72854){
var statearr_72979_76392 = state_72966__$1;
(statearr_72979_76392[(1)] = (2));

} else {
var statearr_72981_76400 = state_72966__$1;
(statearr_72981_76400[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72969 === (24))){
var inst_72903 = (state_72966[(9)]);
var inst_72924 = (state_72966[(10)]);
var inst_72939 = (state_72966[(11)]);
var inst_72939__$1 = (inst_72903.cljs$core$IFn$_invoke$arity$1 ? inst_72903.cljs$core$IFn$_invoke$arity$1(inst_72924) : inst_72903.call(null,inst_72924));
var state_72966__$1 = (function (){var statearr_72982 = state_72966;
(statearr_72982[(11)] = inst_72939__$1);

return statearr_72982;
})();
if(cljs.core.truth_(inst_72939__$1)){
var statearr_72984_76403 = state_72966__$1;
(statearr_72984_76403[(1)] = (29));

} else {
var statearr_72987_76405 = state_72966__$1;
(statearr_72987_76405[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72969 === (4))){
var inst_72869 = (state_72966[(2)]);
var state_72966__$1 = state_72966;
if(cljs.core.truth_(inst_72869)){
var statearr_72989_76413 = state_72966__$1;
(statearr_72989_76413[(1)] = (8));

} else {
var statearr_72991_76414 = state_72966__$1;
(statearr_72991_76414[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72969 === (15))){
var inst_72897 = (state_72966[(2)]);
var state_72966__$1 = state_72966;
if(cljs.core.truth_(inst_72897)){
var statearr_72995_76417 = state_72966__$1;
(statearr_72995_76417[(1)] = (19));

} else {
var statearr_72996_76418 = state_72966__$1;
(statearr_72996_76418[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72969 === (21))){
var inst_72902 = (state_72966[(12)]);
var inst_72902__$1 = (state_72966[(2)]);
var inst_72903 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_72902__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_72904 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_72902__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_72906 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_72902__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_72966__$1 = (function (){var statearr_73000 = state_72966;
(statearr_73000[(9)] = inst_72903);

(statearr_73000[(12)] = inst_72902__$1);

(statearr_73000[(13)] = inst_72904);

return statearr_73000;
})();
return cljs.core.async.ioc_alts_BANG_(state_72966__$1,(22),inst_72906);
} else {
if((state_val_72969 === (31))){
var inst_72947 = (state_72966[(2)]);
var state_72966__$1 = state_72966;
if(cljs.core.truth_(inst_72947)){
var statearr_73001_76430 = state_72966__$1;
(statearr_73001_76430[(1)] = (32));

} else {
var statearr_73003_76438 = state_72966__$1;
(statearr_73003_76438[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72969 === (32))){
var inst_72923 = (state_72966[(14)]);
var state_72966__$1 = state_72966;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72966__$1,(35),out,inst_72923);
} else {
if((state_val_72969 === (33))){
var inst_72902 = (state_72966[(12)]);
var inst_72878 = inst_72902;
var state_72966__$1 = (function (){var statearr_73007 = state_72966;
(statearr_73007[(7)] = inst_72878);

return statearr_73007;
})();
var statearr_73008_76441 = state_72966__$1;
(statearr_73008_76441[(2)] = null);

(statearr_73008_76441[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72969 === (13))){
var inst_72878 = (state_72966[(7)]);
var inst_72885 = inst_72878.cljs$lang$protocol_mask$partition0$;
var inst_72886 = (inst_72885 & (64));
var inst_72887 = inst_72878.cljs$core$ISeq$;
var inst_72889 = (cljs.core.PROTOCOL_SENTINEL === inst_72887);
var inst_72890 = ((inst_72886) || (inst_72889));
var state_72966__$1 = state_72966;
if(cljs.core.truth_(inst_72890)){
var statearr_73009_76452 = state_72966__$1;
(statearr_73009_76452[(1)] = (16));

} else {
var statearr_73010_76454 = state_72966__$1;
(statearr_73010_76454[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72969 === (22))){
var inst_72924 = (state_72966[(10)]);
var inst_72923 = (state_72966[(14)]);
var inst_72922 = (state_72966[(2)]);
var inst_72923__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_72922,(0),null);
var inst_72924__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_72922,(1),null);
var inst_72925 = (inst_72923__$1 == null);
var inst_72926 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_72924__$1,change);
var inst_72927 = ((inst_72925) || (inst_72926));
var state_72966__$1 = (function (){var statearr_73012 = state_72966;
(statearr_73012[(10)] = inst_72924__$1);

(statearr_73012[(14)] = inst_72923__$1);

return statearr_73012;
})();
if(cljs.core.truth_(inst_72927)){
var statearr_73013_76469 = state_72966__$1;
(statearr_73013_76469[(1)] = (23));

} else {
var statearr_73015_76471 = state_72966__$1;
(statearr_73015_76471[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72969 === (36))){
var inst_72902 = (state_72966[(12)]);
var inst_72878 = inst_72902;
var state_72966__$1 = (function (){var statearr_73027 = state_72966;
(statearr_73027[(7)] = inst_72878);

return statearr_73027;
})();
var statearr_73028_76480 = state_72966__$1;
(statearr_73028_76480[(2)] = null);

(statearr_73028_76480[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72969 === (29))){
var inst_72939 = (state_72966[(11)]);
var state_72966__$1 = state_72966;
var statearr_73029_76482 = state_72966__$1;
(statearr_73029_76482[(2)] = inst_72939);

(statearr_73029_76482[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72969 === (6))){
var state_72966__$1 = state_72966;
var statearr_73031_76486 = state_72966__$1;
(statearr_73031_76486[(2)] = false);

(statearr_73031_76486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72969 === (28))){
var inst_72934 = (state_72966[(2)]);
var inst_72935 = calc_state();
var inst_72878 = inst_72935;
var state_72966__$1 = (function (){var statearr_73032 = state_72966;
(statearr_73032[(7)] = inst_72878);

(statearr_73032[(15)] = inst_72934);

return statearr_73032;
})();
var statearr_73033_76496 = state_72966__$1;
(statearr_73033_76496[(2)] = null);

(statearr_73033_76496[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72969 === (25))){
var inst_72962 = (state_72966[(2)]);
var state_72966__$1 = state_72966;
var statearr_73037_76499 = state_72966__$1;
(statearr_73037_76499[(2)] = inst_72962);

(statearr_73037_76499[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72969 === (34))){
var inst_72960 = (state_72966[(2)]);
var state_72966__$1 = state_72966;
var statearr_73040_76507 = state_72966__$1;
(statearr_73040_76507[(2)] = inst_72960);

(statearr_73040_76507[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72969 === (17))){
var state_72966__$1 = state_72966;
var statearr_73043_76509 = state_72966__$1;
(statearr_73043_76509[(2)] = false);

(statearr_73043_76509[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72969 === (3))){
var state_72966__$1 = state_72966;
var statearr_73044_76514 = state_72966__$1;
(statearr_73044_76514[(2)] = false);

(statearr_73044_76514[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72969 === (12))){
var inst_72964 = (state_72966[(2)]);
var state_72966__$1 = state_72966;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72966__$1,inst_72964);
} else {
if((state_val_72969 === (2))){
var inst_72851 = (state_72966[(8)]);
var inst_72858 = inst_72851.cljs$lang$protocol_mask$partition0$;
var inst_72859 = (inst_72858 & (64));
var inst_72860 = inst_72851.cljs$core$ISeq$;
var inst_72861 = (cljs.core.PROTOCOL_SENTINEL === inst_72860);
var inst_72862 = ((inst_72859) || (inst_72861));
var state_72966__$1 = state_72966;
if(cljs.core.truth_(inst_72862)){
var statearr_73046_76524 = state_72966__$1;
(statearr_73046_76524[(1)] = (5));

} else {
var statearr_73047_76526 = state_72966__$1;
(statearr_73047_76526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72969 === (23))){
var inst_72923 = (state_72966[(14)]);
var inst_72929 = (inst_72923 == null);
var state_72966__$1 = state_72966;
if(cljs.core.truth_(inst_72929)){
var statearr_73049_76534 = state_72966__$1;
(statearr_73049_76534[(1)] = (26));

} else {
var statearr_73050_76535 = state_72966__$1;
(statearr_73050_76535[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72969 === (35))){
var inst_72950 = (state_72966[(2)]);
var state_72966__$1 = state_72966;
if(cljs.core.truth_(inst_72950)){
var statearr_73051_76538 = state_72966__$1;
(statearr_73051_76538[(1)] = (36));

} else {
var statearr_73053_76540 = state_72966__$1;
(statearr_73053_76540[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72969 === (19))){
var inst_72878 = (state_72966[(7)]);
var inst_72899 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_72878);
var state_72966__$1 = state_72966;
var statearr_73054_76552 = state_72966__$1;
(statearr_73054_76552[(2)] = inst_72899);

(statearr_73054_76552[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72969 === (11))){
var inst_72878 = (state_72966[(7)]);
var inst_72882 = (inst_72878 == null);
var inst_72883 = cljs.core.not(inst_72882);
var state_72966__$1 = state_72966;
if(inst_72883){
var statearr_73056_76556 = state_72966__$1;
(statearr_73056_76556[(1)] = (13));

} else {
var statearr_73057_76560 = state_72966__$1;
(statearr_73057_76560[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72969 === (9))){
var inst_72851 = (state_72966[(8)]);
var state_72966__$1 = state_72966;
var statearr_73060_76565 = state_72966__$1;
(statearr_73060_76565[(2)] = inst_72851);

(statearr_73060_76565[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72969 === (5))){
var state_72966__$1 = state_72966;
var statearr_73061_76567 = state_72966__$1;
(statearr_73061_76567[(2)] = true);

(statearr_73061_76567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72969 === (14))){
var state_72966__$1 = state_72966;
var statearr_73062_76570 = state_72966__$1;
(statearr_73062_76570[(2)] = false);

(statearr_73062_76570[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72969 === (26))){
var inst_72924 = (state_72966[(10)]);
var inst_72931 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_72924);
var state_72966__$1 = state_72966;
var statearr_73063_76578 = state_72966__$1;
(statearr_73063_76578[(2)] = inst_72931);

(statearr_73063_76578[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72969 === (16))){
var state_72966__$1 = state_72966;
var statearr_73064_76581 = state_72966__$1;
(statearr_73064_76581[(2)] = true);

(statearr_73064_76581[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72969 === (38))){
var inst_72956 = (state_72966[(2)]);
var state_72966__$1 = state_72966;
var statearr_73069_76590 = state_72966__$1;
(statearr_73069_76590[(2)] = inst_72956);

(statearr_73069_76590[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72969 === (30))){
var inst_72903 = (state_72966[(9)]);
var inst_72924 = (state_72966[(10)]);
var inst_72904 = (state_72966[(13)]);
var inst_72942 = cljs.core.empty_QMARK_(inst_72903);
var inst_72943 = (inst_72904.cljs$core$IFn$_invoke$arity$1 ? inst_72904.cljs$core$IFn$_invoke$arity$1(inst_72924) : inst_72904.call(null,inst_72924));
var inst_72944 = cljs.core.not(inst_72943);
var inst_72945 = ((inst_72942) && (inst_72944));
var state_72966__$1 = state_72966;
var statearr_73072_76594 = state_72966__$1;
(statearr_73072_76594[(2)] = inst_72945);

(statearr_73072_76594[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72969 === (10))){
var inst_72851 = (state_72966[(8)]);
var inst_72874 = (state_72966[(2)]);
var inst_72875 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_72874,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_72876 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_72874,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_72877 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_72874,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_72878 = inst_72851;
var state_72966__$1 = (function (){var statearr_73075 = state_72966;
(statearr_73075[(7)] = inst_72878);

(statearr_73075[(16)] = inst_72876);

(statearr_73075[(17)] = inst_72875);

(statearr_73075[(18)] = inst_72877);

return statearr_73075;
})();
var statearr_73079_76611 = state_72966__$1;
(statearr_73079_76611[(2)] = null);

(statearr_73079_76611[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72969 === (18))){
var inst_72894 = (state_72966[(2)]);
var state_72966__$1 = state_72966;
var statearr_73081_76618 = state_72966__$1;
(statearr_73081_76618[(2)] = inst_72894);

(statearr_73081_76618[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72969 === (37))){
var state_72966__$1 = state_72966;
var statearr_73082_76621 = state_72966__$1;
(statearr_73082_76621[(2)] = null);

(statearr_73082_76621[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72969 === (8))){
var inst_72851 = (state_72966[(8)]);
var inst_72871 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_72851);
var state_72966__$1 = state_72966;
var statearr_73083_76630 = state_72966__$1;
(statearr_73083_76630[(2)] = inst_72871);

(statearr_73083_76630[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__71379__auto__ = null;
var cljs$core$async$mix_$_state_machine__71379__auto____0 = (function (){
var statearr_73085 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73085[(0)] = cljs$core$async$mix_$_state_machine__71379__auto__);

(statearr_73085[(1)] = (1));

return statearr_73085;
});
var cljs$core$async$mix_$_state_machine__71379__auto____1 = (function (state_72966){
while(true){
var ret_value__71380__auto__ = (function (){try{while(true){
var result__71381__auto__ = switch__71378__auto__(state_72966);
if(cljs.core.keyword_identical_QMARK_(result__71381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71381__auto__;
}
break;
}
}catch (e73089){var ex__71382__auto__ = e73089;
var statearr_73090_76642 = state_72966;
(statearr_73090_76642[(2)] = ex__71382__auto__);


if(cljs.core.seq((state_72966[(4)]))){
var statearr_73093_76644 = state_72966;
(statearr_73093_76644[(1)] = cljs.core.first((state_72966[(4)])));

} else {
throw ex__71382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76653 = state_72966;
state_72966 = G__76653;
continue;
} else {
return ret_value__71380__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__71379__auto__ = function(state_72966){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__71379__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__71379__auto____1.call(this,state_72966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__71379__auto____0;
cljs$core$async$mix_$_state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__71379__auto____1;
return cljs$core$async$mix_$_state_machine__71379__auto__;
})()
})();
var state__71449__auto__ = (function (){var statearr_73101 = f__71448__auto__();
(statearr_73101[(6)] = c__71447__auto___76370);

return statearr_73101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71449__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_76667 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_76667(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_76685 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_76685(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_76702 = (function() {
var G__76703 = null;
var G__76703__1 = (function (p){
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
var G__76703__2 = (function (p,v){
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
G__76703 = function(p,v){
switch(arguments.length){
case 1:
return G__76703__1.call(this,p);
case 2:
return G__76703__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__76703.cljs$core$IFn$_invoke$arity$1 = G__76703__1;
G__76703.cljs$core$IFn$_invoke$arity$2 = G__76703__2;
return G__76703;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__73151 = arguments.length;
switch (G__73151) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_76702(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_76702(p,v);
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
var G__73179 = arguments.length;
switch (G__73179) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__73171_SHARP_){
if(cljs.core.truth_((p1__73171_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__73171_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__73171_SHARP_.call(null,topic)))){
return p1__73171_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__73171_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async73191 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async73191 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta73192){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta73192 = meta73192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async73191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_73193,meta73192__$1){
var self__ = this;
var _73193__$1 = this;
return (new cljs.core.async.t_cljs$core$async73191(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta73192__$1));
}));

(cljs.core.async.t_cljs$core$async73191.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_73193){
var self__ = this;
var _73193__$1 = this;
return self__.meta73192;
}));

(cljs.core.async.t_cljs$core$async73191.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73191.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async73191.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73191.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async73191.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async73191.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async73191.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async73191.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta73192","meta73192",1969061298,null)], null);
}));

(cljs.core.async.t_cljs$core$async73191.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async73191.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async73191");

(cljs.core.async.t_cljs$core$async73191.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async73191");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async73191.
 */
cljs.core.async.__GT_t_cljs$core$async73191 = (function cljs$core$async$__GT_t_cljs$core$async73191(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta73192){
return (new cljs.core.async.t_cljs$core$async73191(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta73192));
});

}

return (new cljs.core.async.t_cljs$core$async73191(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__71447__auto___76803 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__71448__auto__ = (function (){var switch__71378__auto__ = (function (state_73292){
var state_val_73293 = (state_73292[(1)]);
if((state_val_73293 === (7))){
var inst_73288 = (state_73292[(2)]);
var state_73292__$1 = state_73292;
var statearr_73295_76809 = state_73292__$1;
(statearr_73295_76809[(2)] = inst_73288);

(statearr_73295_76809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73293 === (20))){
var state_73292__$1 = state_73292;
var statearr_73298_76817 = state_73292__$1;
(statearr_73298_76817[(2)] = null);

(statearr_73298_76817[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73293 === (1))){
var state_73292__$1 = state_73292;
var statearr_73300_76819 = state_73292__$1;
(statearr_73300_76819[(2)] = null);

(statearr_73300_76819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73293 === (24))){
var inst_73271 = (state_73292[(7)]);
var inst_73280 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_73271);
var state_73292__$1 = state_73292;
var statearr_73303_76829 = state_73292__$1;
(statearr_73303_76829[(2)] = inst_73280);

(statearr_73303_76829[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73293 === (4))){
var inst_73218 = (state_73292[(8)]);
var inst_73218__$1 = (state_73292[(2)]);
var inst_73220 = (inst_73218__$1 == null);
var state_73292__$1 = (function (){var statearr_73304 = state_73292;
(statearr_73304[(8)] = inst_73218__$1);

return statearr_73304;
})();
if(cljs.core.truth_(inst_73220)){
var statearr_73305_76832 = state_73292__$1;
(statearr_73305_76832[(1)] = (5));

} else {
var statearr_73306_76834 = state_73292__$1;
(statearr_73306_76834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73293 === (15))){
var inst_73265 = (state_73292[(2)]);
var state_73292__$1 = state_73292;
var statearr_73307_76842 = state_73292__$1;
(statearr_73307_76842[(2)] = inst_73265);

(statearr_73307_76842[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73293 === (21))){
var inst_73285 = (state_73292[(2)]);
var state_73292__$1 = (function (){var statearr_73308 = state_73292;
(statearr_73308[(9)] = inst_73285);

return statearr_73308;
})();
var statearr_73309_76847 = state_73292__$1;
(statearr_73309_76847[(2)] = null);

(statearr_73309_76847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73293 === (13))){
var inst_73247 = (state_73292[(10)]);
var inst_73249 = cljs.core.chunked_seq_QMARK_(inst_73247);
var state_73292__$1 = state_73292;
if(inst_73249){
var statearr_73310_76856 = state_73292__$1;
(statearr_73310_76856[(1)] = (16));

} else {
var statearr_73311_76857 = state_73292__$1;
(statearr_73311_76857[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73293 === (22))){
var inst_73277 = (state_73292[(2)]);
var state_73292__$1 = state_73292;
if(cljs.core.truth_(inst_73277)){
var statearr_73312_76860 = state_73292__$1;
(statearr_73312_76860[(1)] = (23));

} else {
var statearr_73313_76862 = state_73292__$1;
(statearr_73313_76862[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73293 === (6))){
var inst_73273 = (state_73292[(11)]);
var inst_73218 = (state_73292[(8)]);
var inst_73271 = (state_73292[(7)]);
var inst_73271__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_73218) : topic_fn.call(null,inst_73218));
var inst_73272 = cljs.core.deref(mults);
var inst_73273__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_73272,inst_73271__$1);
var state_73292__$1 = (function (){var statearr_73316 = state_73292;
(statearr_73316[(11)] = inst_73273__$1);

(statearr_73316[(7)] = inst_73271__$1);

return statearr_73316;
})();
if(cljs.core.truth_(inst_73273__$1)){
var statearr_73317_76872 = state_73292__$1;
(statearr_73317_76872[(1)] = (19));

} else {
var statearr_73318_76874 = state_73292__$1;
(statearr_73318_76874[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73293 === (25))){
var inst_73282 = (state_73292[(2)]);
var state_73292__$1 = state_73292;
var statearr_73319_76882 = state_73292__$1;
(statearr_73319_76882[(2)] = inst_73282);

(statearr_73319_76882[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73293 === (17))){
var inst_73247 = (state_73292[(10)]);
var inst_73256 = cljs.core.first(inst_73247);
var inst_73257 = cljs.core.async.muxch_STAR_(inst_73256);
var inst_73258 = cljs.core.async.close_BANG_(inst_73257);
var inst_73259 = cljs.core.next(inst_73247);
var inst_73229 = inst_73259;
var inst_73230 = null;
var inst_73231 = (0);
var inst_73232 = (0);
var state_73292__$1 = (function (){var statearr_73323 = state_73292;
(statearr_73323[(12)] = inst_73229);

(statearr_73323[(13)] = inst_73230);

(statearr_73323[(14)] = inst_73231);

(statearr_73323[(15)] = inst_73258);

(statearr_73323[(16)] = inst_73232);

return statearr_73323;
})();
var statearr_73325_76895 = state_73292__$1;
(statearr_73325_76895[(2)] = null);

(statearr_73325_76895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73293 === (3))){
var inst_73290 = (state_73292[(2)]);
var state_73292__$1 = state_73292;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73292__$1,inst_73290);
} else {
if((state_val_73293 === (12))){
var inst_73267 = (state_73292[(2)]);
var state_73292__$1 = state_73292;
var statearr_73327_76906 = state_73292__$1;
(statearr_73327_76906[(2)] = inst_73267);

(statearr_73327_76906[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73293 === (2))){
var state_73292__$1 = state_73292;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73292__$1,(4),ch);
} else {
if((state_val_73293 === (23))){
var state_73292__$1 = state_73292;
var statearr_73329_76908 = state_73292__$1;
(statearr_73329_76908[(2)] = null);

(statearr_73329_76908[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73293 === (19))){
var inst_73273 = (state_73292[(11)]);
var inst_73218 = (state_73292[(8)]);
var inst_73275 = cljs.core.async.muxch_STAR_(inst_73273);
var state_73292__$1 = state_73292;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73292__$1,(22),inst_73275,inst_73218);
} else {
if((state_val_73293 === (11))){
var inst_73229 = (state_73292[(12)]);
var inst_73247 = (state_73292[(10)]);
var inst_73247__$1 = cljs.core.seq(inst_73229);
var state_73292__$1 = (function (){var statearr_73330 = state_73292;
(statearr_73330[(10)] = inst_73247__$1);

return statearr_73330;
})();
if(inst_73247__$1){
var statearr_73331_76921 = state_73292__$1;
(statearr_73331_76921[(1)] = (13));

} else {
var statearr_73332_76923 = state_73292__$1;
(statearr_73332_76923[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73293 === (9))){
var inst_73269 = (state_73292[(2)]);
var state_73292__$1 = state_73292;
var statearr_73334_76932 = state_73292__$1;
(statearr_73334_76932[(2)] = inst_73269);

(statearr_73334_76932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73293 === (5))){
var inst_73226 = cljs.core.deref(mults);
var inst_73227 = cljs.core.vals(inst_73226);
var inst_73228 = cljs.core.seq(inst_73227);
var inst_73229 = inst_73228;
var inst_73230 = null;
var inst_73231 = (0);
var inst_73232 = (0);
var state_73292__$1 = (function (){var statearr_73337 = state_73292;
(statearr_73337[(12)] = inst_73229);

(statearr_73337[(13)] = inst_73230);

(statearr_73337[(14)] = inst_73231);

(statearr_73337[(16)] = inst_73232);

return statearr_73337;
})();
var statearr_73339_76943 = state_73292__$1;
(statearr_73339_76943[(2)] = null);

(statearr_73339_76943[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73293 === (14))){
var state_73292__$1 = state_73292;
var statearr_73343_76944 = state_73292__$1;
(statearr_73343_76944[(2)] = null);

(statearr_73343_76944[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73293 === (16))){
var inst_73247 = (state_73292[(10)]);
var inst_73251 = cljs.core.chunk_first(inst_73247);
var inst_73252 = cljs.core.chunk_rest(inst_73247);
var inst_73253 = cljs.core.count(inst_73251);
var inst_73229 = inst_73252;
var inst_73230 = inst_73251;
var inst_73231 = inst_73253;
var inst_73232 = (0);
var state_73292__$1 = (function (){var statearr_73346 = state_73292;
(statearr_73346[(12)] = inst_73229);

(statearr_73346[(13)] = inst_73230);

(statearr_73346[(14)] = inst_73231);

(statearr_73346[(16)] = inst_73232);

return statearr_73346;
})();
var statearr_73347_76957 = state_73292__$1;
(statearr_73347_76957[(2)] = null);

(statearr_73347_76957[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73293 === (10))){
var inst_73229 = (state_73292[(12)]);
var inst_73230 = (state_73292[(13)]);
var inst_73231 = (state_73292[(14)]);
var inst_73232 = (state_73292[(16)]);
var inst_73241 = cljs.core._nth(inst_73230,inst_73232);
var inst_73242 = cljs.core.async.muxch_STAR_(inst_73241);
var inst_73243 = cljs.core.async.close_BANG_(inst_73242);
var inst_73244 = (inst_73232 + (1));
var tmp73340 = inst_73229;
var tmp73341 = inst_73230;
var tmp73342 = inst_73231;
var inst_73229__$1 = tmp73340;
var inst_73230__$1 = tmp73341;
var inst_73231__$1 = tmp73342;
var inst_73232__$1 = inst_73244;
var state_73292__$1 = (function (){var statearr_73348 = state_73292;
(statearr_73348[(17)] = inst_73243);

(statearr_73348[(12)] = inst_73229__$1);

(statearr_73348[(13)] = inst_73230__$1);

(statearr_73348[(14)] = inst_73231__$1);

(statearr_73348[(16)] = inst_73232__$1);

return statearr_73348;
})();
var statearr_73351_76968 = state_73292__$1;
(statearr_73351_76968[(2)] = null);

(statearr_73351_76968[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73293 === (18))){
var inst_73262 = (state_73292[(2)]);
var state_73292__$1 = state_73292;
var statearr_73352_76971 = state_73292__$1;
(statearr_73352_76971[(2)] = inst_73262);

(statearr_73352_76971[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73293 === (8))){
var inst_73231 = (state_73292[(14)]);
var inst_73232 = (state_73292[(16)]);
var inst_73238 = (inst_73232 < inst_73231);
var inst_73239 = inst_73238;
var state_73292__$1 = state_73292;
if(cljs.core.truth_(inst_73239)){
var statearr_73353_76982 = state_73292__$1;
(statearr_73353_76982[(1)] = (10));

} else {
var statearr_73354_76983 = state_73292__$1;
(statearr_73354_76983[(1)] = (11));

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
var cljs$core$async$state_machine__71379__auto__ = null;
var cljs$core$async$state_machine__71379__auto____0 = (function (){
var statearr_73356 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73356[(0)] = cljs$core$async$state_machine__71379__auto__);

(statearr_73356[(1)] = (1));

return statearr_73356;
});
var cljs$core$async$state_machine__71379__auto____1 = (function (state_73292){
while(true){
var ret_value__71380__auto__ = (function (){try{while(true){
var result__71381__auto__ = switch__71378__auto__(state_73292);
if(cljs.core.keyword_identical_QMARK_(result__71381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71381__auto__;
}
break;
}
}catch (e73358){var ex__71382__auto__ = e73358;
var statearr_73359_76995 = state_73292;
(statearr_73359_76995[(2)] = ex__71382__auto__);


if(cljs.core.seq((state_73292[(4)]))){
var statearr_73361_76997 = state_73292;
(statearr_73361_76997[(1)] = cljs.core.first((state_73292[(4)])));

} else {
throw ex__71382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77008 = state_73292;
state_73292 = G__77008;
continue;
} else {
return ret_value__71380__auto__;
}
break;
}
});
cljs$core$async$state_machine__71379__auto__ = function(state_73292){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__71379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__71379__auto____1.call(this,state_73292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__71379__auto____0;
cljs$core$async$state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__71379__auto____1;
return cljs$core$async$state_machine__71379__auto__;
})()
})();
var state__71449__auto__ = (function (){var statearr_73362 = f__71448__auto__();
(statearr_73362[(6)] = c__71447__auto___76803);

return statearr_73362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71449__auto__);
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
var G__73365 = arguments.length;
switch (G__73365) {
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
var G__73369 = arguments.length;
switch (G__73369) {
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
var G__73377 = arguments.length;
switch (G__73377) {
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
var c__71447__auto___77069 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__71448__auto__ = (function (){var switch__71378__auto__ = (function (state_73459){
var state_val_73460 = (state_73459[(1)]);
if((state_val_73460 === (7))){
var state_73459__$1 = state_73459;
var statearr_73463_77074 = state_73459__$1;
(statearr_73463_77074[(2)] = null);

(statearr_73463_77074[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73460 === (1))){
var state_73459__$1 = state_73459;
var statearr_73464_77082 = state_73459__$1;
(statearr_73464_77082[(2)] = null);

(statearr_73464_77082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73460 === (4))){
var inst_73404 = (state_73459[(7)]);
var inst_73403 = (state_73459[(8)]);
var inst_73407 = (inst_73404 < inst_73403);
var state_73459__$1 = state_73459;
if(cljs.core.truth_(inst_73407)){
var statearr_73469_77085 = state_73459__$1;
(statearr_73469_77085[(1)] = (6));

} else {
var statearr_73470_77087 = state_73459__$1;
(statearr_73470_77087[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73460 === (15))){
var inst_73437 = (state_73459[(9)]);
var inst_73449 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_73437);
var state_73459__$1 = state_73459;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73459__$1,(17),out,inst_73449);
} else {
if((state_val_73460 === (13))){
var inst_73437 = (state_73459[(9)]);
var inst_73437__$1 = (state_73459[(2)]);
var inst_73438 = cljs.core.some(cljs.core.nil_QMARK_,inst_73437__$1);
var state_73459__$1 = (function (){var statearr_73477 = state_73459;
(statearr_73477[(9)] = inst_73437__$1);

return statearr_73477;
})();
if(cljs.core.truth_(inst_73438)){
var statearr_73480_77109 = state_73459__$1;
(statearr_73480_77109[(1)] = (14));

} else {
var statearr_73482_77110 = state_73459__$1;
(statearr_73482_77110[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73460 === (6))){
var state_73459__$1 = state_73459;
var statearr_73483_77111 = state_73459__$1;
(statearr_73483_77111[(2)] = null);

(statearr_73483_77111[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73460 === (17))){
var inst_73451 = (state_73459[(2)]);
var state_73459__$1 = (function (){var statearr_73495 = state_73459;
(statearr_73495[(10)] = inst_73451);

return statearr_73495;
})();
var statearr_73496_77116 = state_73459__$1;
(statearr_73496_77116[(2)] = null);

(statearr_73496_77116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73460 === (3))){
var inst_73456 = (state_73459[(2)]);
var state_73459__$1 = state_73459;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73459__$1,inst_73456);
} else {
if((state_val_73460 === (12))){
var _ = (function (){var statearr_73497 = state_73459;
(statearr_73497[(4)] = cljs.core.rest((state_73459[(4)])));

return statearr_73497;
})();
var state_73459__$1 = state_73459;
var ex73493 = (state_73459__$1[(2)]);
var statearr_73499_77126 = state_73459__$1;
(statearr_73499_77126[(5)] = ex73493);


if((ex73493 instanceof Object)){
var statearr_73500_77134 = state_73459__$1;
(statearr_73500_77134[(1)] = (11));

(statearr_73500_77134[(5)] = null);

} else {
throw ex73493;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73460 === (2))){
var inst_73399 = cljs.core.reset_BANG_(dctr,cnt);
var inst_73403 = cnt;
var inst_73404 = (0);
var state_73459__$1 = (function (){var statearr_73503 = state_73459;
(statearr_73503[(7)] = inst_73404);

(statearr_73503[(11)] = inst_73399);

(statearr_73503[(8)] = inst_73403);

return statearr_73503;
})();
var statearr_73505_77142 = state_73459__$1;
(statearr_73505_77142[(2)] = null);

(statearr_73505_77142[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73460 === (11))){
var inst_73414 = (state_73459[(2)]);
var inst_73415 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_73459__$1 = (function (){var statearr_73506 = state_73459;
(statearr_73506[(12)] = inst_73414);

return statearr_73506;
})();
var statearr_73507_77150 = state_73459__$1;
(statearr_73507_77150[(2)] = inst_73415);

(statearr_73507_77150[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73460 === (9))){
var inst_73404 = (state_73459[(7)]);
var _ = (function (){var statearr_73508 = state_73459;
(statearr_73508[(4)] = cljs.core.cons((12),(state_73459[(4)])));

return statearr_73508;
})();
var inst_73422 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_73404) : chs__$1.call(null,inst_73404));
var inst_73424 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_73404) : done.call(null,inst_73404));
var inst_73425 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_73422,inst_73424);
var ___$1 = (function (){var statearr_73509 = state_73459;
(statearr_73509[(4)] = cljs.core.rest((state_73459[(4)])));

return statearr_73509;
})();
var state_73459__$1 = state_73459;
var statearr_73510_77164 = state_73459__$1;
(statearr_73510_77164[(2)] = inst_73425);

(statearr_73510_77164[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73460 === (5))){
var inst_73435 = (state_73459[(2)]);
var state_73459__$1 = (function (){var statearr_73512 = state_73459;
(statearr_73512[(13)] = inst_73435);

return statearr_73512;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73459__$1,(13),dchan);
} else {
if((state_val_73460 === (14))){
var inst_73447 = cljs.core.async.close_BANG_(out);
var state_73459__$1 = state_73459;
var statearr_73513_77174 = state_73459__$1;
(statearr_73513_77174[(2)] = inst_73447);

(statearr_73513_77174[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73460 === (16))){
var inst_73454 = (state_73459[(2)]);
var state_73459__$1 = state_73459;
var statearr_73514_77177 = state_73459__$1;
(statearr_73514_77177[(2)] = inst_73454);

(statearr_73514_77177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73460 === (10))){
var inst_73404 = (state_73459[(7)]);
var inst_73428 = (state_73459[(2)]);
var inst_73429 = (inst_73404 + (1));
var inst_73404__$1 = inst_73429;
var state_73459__$1 = (function (){var statearr_73516 = state_73459;
(statearr_73516[(14)] = inst_73428);

(statearr_73516[(7)] = inst_73404__$1);

return statearr_73516;
})();
var statearr_73517_77188 = state_73459__$1;
(statearr_73517_77188[(2)] = null);

(statearr_73517_77188[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73460 === (8))){
var inst_73433 = (state_73459[(2)]);
var state_73459__$1 = state_73459;
var statearr_73518_77194 = state_73459__$1;
(statearr_73518_77194[(2)] = inst_73433);

(statearr_73518_77194[(1)] = (5));


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
var cljs$core$async$state_machine__71379__auto__ = null;
var cljs$core$async$state_machine__71379__auto____0 = (function (){
var statearr_73520 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73520[(0)] = cljs$core$async$state_machine__71379__auto__);

(statearr_73520[(1)] = (1));

return statearr_73520;
});
var cljs$core$async$state_machine__71379__auto____1 = (function (state_73459){
while(true){
var ret_value__71380__auto__ = (function (){try{while(true){
var result__71381__auto__ = switch__71378__auto__(state_73459);
if(cljs.core.keyword_identical_QMARK_(result__71381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71381__auto__;
}
break;
}
}catch (e73521){var ex__71382__auto__ = e73521;
var statearr_73522_77212 = state_73459;
(statearr_73522_77212[(2)] = ex__71382__auto__);


if(cljs.core.seq((state_73459[(4)]))){
var statearr_73524_77213 = state_73459;
(statearr_73524_77213[(1)] = cljs.core.first((state_73459[(4)])));

} else {
throw ex__71382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77216 = state_73459;
state_73459 = G__77216;
continue;
} else {
return ret_value__71380__auto__;
}
break;
}
});
cljs$core$async$state_machine__71379__auto__ = function(state_73459){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__71379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__71379__auto____1.call(this,state_73459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__71379__auto____0;
cljs$core$async$state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__71379__auto____1;
return cljs$core$async$state_machine__71379__auto__;
})()
})();
var state__71449__auto__ = (function (){var statearr_73527 = f__71448__auto__();
(statearr_73527[(6)] = c__71447__auto___77069);

return statearr_73527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71449__auto__);
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
var G__73531 = arguments.length;
switch (G__73531) {
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
var c__71447__auto___77236 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__71448__auto__ = (function (){var switch__71378__auto__ = (function (state_73575){
var state_val_73576 = (state_73575[(1)]);
if((state_val_73576 === (7))){
var inst_73553 = (state_73575[(7)]);
var inst_73555 = (state_73575[(8)]);
var inst_73553__$1 = (state_73575[(2)]);
var inst_73555__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_73553__$1,(0),null);
var inst_73556 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_73553__$1,(1),null);
var inst_73557 = (inst_73555__$1 == null);
var state_73575__$1 = (function (){var statearr_73584 = state_73575;
(statearr_73584[(7)] = inst_73553__$1);

(statearr_73584[(8)] = inst_73555__$1);

(statearr_73584[(9)] = inst_73556);

return statearr_73584;
})();
if(cljs.core.truth_(inst_73557)){
var statearr_73585_77251 = state_73575__$1;
(statearr_73585_77251[(1)] = (8));

} else {
var statearr_73586_77252 = state_73575__$1;
(statearr_73586_77252[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73576 === (1))){
var inst_73541 = cljs.core.vec(chs);
var inst_73542 = inst_73541;
var state_73575__$1 = (function (){var statearr_73589 = state_73575;
(statearr_73589[(10)] = inst_73542);

return statearr_73589;
})();
var statearr_73590_77262 = state_73575__$1;
(statearr_73590_77262[(2)] = null);

(statearr_73590_77262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73576 === (4))){
var inst_73542 = (state_73575[(10)]);
var state_73575__$1 = state_73575;
return cljs.core.async.ioc_alts_BANG_(state_73575__$1,(7),inst_73542);
} else {
if((state_val_73576 === (6))){
var inst_73571 = (state_73575[(2)]);
var state_73575__$1 = state_73575;
var statearr_73592_77267 = state_73575__$1;
(statearr_73592_77267[(2)] = inst_73571);

(statearr_73592_77267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73576 === (3))){
var inst_73573 = (state_73575[(2)]);
var state_73575__$1 = state_73575;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73575__$1,inst_73573);
} else {
if((state_val_73576 === (2))){
var inst_73542 = (state_73575[(10)]);
var inst_73545 = cljs.core.count(inst_73542);
var inst_73546 = (inst_73545 > (0));
var state_73575__$1 = state_73575;
if(cljs.core.truth_(inst_73546)){
var statearr_73595_77277 = state_73575__$1;
(statearr_73595_77277[(1)] = (4));

} else {
var statearr_73596_77278 = state_73575__$1;
(statearr_73596_77278[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73576 === (11))){
var inst_73542 = (state_73575[(10)]);
var inst_73564 = (state_73575[(2)]);
var tmp73593 = inst_73542;
var inst_73542__$1 = tmp73593;
var state_73575__$1 = (function (){var statearr_73597 = state_73575;
(statearr_73597[(10)] = inst_73542__$1);

(statearr_73597[(11)] = inst_73564);

return statearr_73597;
})();
var statearr_73598_77282 = state_73575__$1;
(statearr_73598_77282[(2)] = null);

(statearr_73598_77282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73576 === (9))){
var inst_73555 = (state_73575[(8)]);
var state_73575__$1 = state_73575;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73575__$1,(11),out,inst_73555);
} else {
if((state_val_73576 === (5))){
var inst_73569 = cljs.core.async.close_BANG_(out);
var state_73575__$1 = state_73575;
var statearr_73604_77292 = state_73575__$1;
(statearr_73604_77292[(2)] = inst_73569);

(statearr_73604_77292[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73576 === (10))){
var inst_73567 = (state_73575[(2)]);
var state_73575__$1 = state_73575;
var statearr_73606_77301 = state_73575__$1;
(statearr_73606_77301[(2)] = inst_73567);

(statearr_73606_77301[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73576 === (8))){
var inst_73553 = (state_73575[(7)]);
var inst_73542 = (state_73575[(10)]);
var inst_73555 = (state_73575[(8)]);
var inst_73556 = (state_73575[(9)]);
var inst_73559 = (function (){var cs = inst_73542;
var vec__73549 = inst_73553;
var v = inst_73555;
var c = inst_73556;
return (function (p1__73528_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__73528_SHARP_);
});
})();
var inst_73560 = cljs.core.filterv(inst_73559,inst_73542);
var inst_73542__$1 = inst_73560;
var state_73575__$1 = (function (){var statearr_73611 = state_73575;
(statearr_73611[(10)] = inst_73542__$1);

return statearr_73611;
})();
var statearr_73612_77312 = state_73575__$1;
(statearr_73612_77312[(2)] = null);

(statearr_73612_77312[(1)] = (2));


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
var cljs$core$async$state_machine__71379__auto__ = null;
var cljs$core$async$state_machine__71379__auto____0 = (function (){
var statearr_73614 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73614[(0)] = cljs$core$async$state_machine__71379__auto__);

(statearr_73614[(1)] = (1));

return statearr_73614;
});
var cljs$core$async$state_machine__71379__auto____1 = (function (state_73575){
while(true){
var ret_value__71380__auto__ = (function (){try{while(true){
var result__71381__auto__ = switch__71378__auto__(state_73575);
if(cljs.core.keyword_identical_QMARK_(result__71381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71381__auto__;
}
break;
}
}catch (e73615){var ex__71382__auto__ = e73615;
var statearr_73616_77326 = state_73575;
(statearr_73616_77326[(2)] = ex__71382__auto__);


if(cljs.core.seq((state_73575[(4)]))){
var statearr_73618_77329 = state_73575;
(statearr_73618_77329[(1)] = cljs.core.first((state_73575[(4)])));

} else {
throw ex__71382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77338 = state_73575;
state_73575 = G__77338;
continue;
} else {
return ret_value__71380__auto__;
}
break;
}
});
cljs$core$async$state_machine__71379__auto__ = function(state_73575){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__71379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__71379__auto____1.call(this,state_73575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__71379__auto____0;
cljs$core$async$state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__71379__auto____1;
return cljs$core$async$state_machine__71379__auto__;
})()
})();
var state__71449__auto__ = (function (){var statearr_73619 = f__71448__auto__();
(statearr_73619[(6)] = c__71447__auto___77236);

return statearr_73619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71449__auto__);
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
var G__73626 = arguments.length;
switch (G__73626) {
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
var c__71447__auto___77360 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__71448__auto__ = (function (){var switch__71378__auto__ = (function (state_73658){
var state_val_73659 = (state_73658[(1)]);
if((state_val_73659 === (7))){
var inst_73640 = (state_73658[(7)]);
var inst_73640__$1 = (state_73658[(2)]);
var inst_73641 = (inst_73640__$1 == null);
var inst_73642 = cljs.core.not(inst_73641);
var state_73658__$1 = (function (){var statearr_73665 = state_73658;
(statearr_73665[(7)] = inst_73640__$1);

return statearr_73665;
})();
if(inst_73642){
var statearr_73666_77367 = state_73658__$1;
(statearr_73666_77367[(1)] = (8));

} else {
var statearr_73667_77375 = state_73658__$1;
(statearr_73667_77375[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73659 === (1))){
var inst_73631 = (0);
var state_73658__$1 = (function (){var statearr_73668 = state_73658;
(statearr_73668[(8)] = inst_73631);

return statearr_73668;
})();
var statearr_73669_77376 = state_73658__$1;
(statearr_73669_77376[(2)] = null);

(statearr_73669_77376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73659 === (4))){
var state_73658__$1 = state_73658;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73658__$1,(7),ch);
} else {
if((state_val_73659 === (6))){
var inst_73653 = (state_73658[(2)]);
var state_73658__$1 = state_73658;
var statearr_73671_77387 = state_73658__$1;
(statearr_73671_77387[(2)] = inst_73653);

(statearr_73671_77387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73659 === (3))){
var inst_73655 = (state_73658[(2)]);
var inst_73656 = cljs.core.async.close_BANG_(out);
var state_73658__$1 = (function (){var statearr_73673 = state_73658;
(statearr_73673[(9)] = inst_73655);

return statearr_73673;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_73658__$1,inst_73656);
} else {
if((state_val_73659 === (2))){
var inst_73631 = (state_73658[(8)]);
var inst_73634 = (inst_73631 < n);
var state_73658__$1 = state_73658;
if(cljs.core.truth_(inst_73634)){
var statearr_73674_77394 = state_73658__$1;
(statearr_73674_77394[(1)] = (4));

} else {
var statearr_73675_77402 = state_73658__$1;
(statearr_73675_77402[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73659 === (11))){
var inst_73631 = (state_73658[(8)]);
var inst_73645 = (state_73658[(2)]);
var inst_73646 = (inst_73631 + (1));
var inst_73631__$1 = inst_73646;
var state_73658__$1 = (function (){var statearr_73677 = state_73658;
(statearr_73677[(8)] = inst_73631__$1);

(statearr_73677[(10)] = inst_73645);

return statearr_73677;
})();
var statearr_73678_77404 = state_73658__$1;
(statearr_73678_77404[(2)] = null);

(statearr_73678_77404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73659 === (9))){
var state_73658__$1 = state_73658;
var statearr_73679_77406 = state_73658__$1;
(statearr_73679_77406[(2)] = null);

(statearr_73679_77406[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73659 === (5))){
var state_73658__$1 = state_73658;
var statearr_73680_77415 = state_73658__$1;
(statearr_73680_77415[(2)] = null);

(statearr_73680_77415[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73659 === (10))){
var inst_73650 = (state_73658[(2)]);
var state_73658__$1 = state_73658;
var statearr_73683_77416 = state_73658__$1;
(statearr_73683_77416[(2)] = inst_73650);

(statearr_73683_77416[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73659 === (8))){
var inst_73640 = (state_73658[(7)]);
var state_73658__$1 = state_73658;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73658__$1,(11),out,inst_73640);
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
var cljs$core$async$state_machine__71379__auto__ = null;
var cljs$core$async$state_machine__71379__auto____0 = (function (){
var statearr_73687 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_73687[(0)] = cljs$core$async$state_machine__71379__auto__);

(statearr_73687[(1)] = (1));

return statearr_73687;
});
var cljs$core$async$state_machine__71379__auto____1 = (function (state_73658){
while(true){
var ret_value__71380__auto__ = (function (){try{while(true){
var result__71381__auto__ = switch__71378__auto__(state_73658);
if(cljs.core.keyword_identical_QMARK_(result__71381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71381__auto__;
}
break;
}
}catch (e73689){var ex__71382__auto__ = e73689;
var statearr_73692_77433 = state_73658;
(statearr_73692_77433[(2)] = ex__71382__auto__);


if(cljs.core.seq((state_73658[(4)]))){
var statearr_73694_77441 = state_73658;
(statearr_73694_77441[(1)] = cljs.core.first((state_73658[(4)])));

} else {
throw ex__71382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77449 = state_73658;
state_73658 = G__77449;
continue;
} else {
return ret_value__71380__auto__;
}
break;
}
});
cljs$core$async$state_machine__71379__auto__ = function(state_73658){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__71379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__71379__auto____1.call(this,state_73658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__71379__auto____0;
cljs$core$async$state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__71379__auto____1;
return cljs$core$async$state_machine__71379__auto__;
})()
})();
var state__71449__auto__ = (function (){var statearr_73696 = f__71448__auto__();
(statearr_73696[(6)] = c__71447__auto___77360);

return statearr_73696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71449__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async73700 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async73700 = (function (f,ch,meta73701){
this.f = f;
this.ch = ch;
this.meta73701 = meta73701;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async73700.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_73702,meta73701__$1){
var self__ = this;
var _73702__$1 = this;
return (new cljs.core.async.t_cljs$core$async73700(self__.f,self__.ch,meta73701__$1));
}));

(cljs.core.async.t_cljs$core$async73700.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_73702){
var self__ = this;
var _73702__$1 = this;
return self__.meta73701;
}));

(cljs.core.async.t_cljs$core$async73700.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73700.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async73700.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async73700.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73700.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async73707 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async73707 = (function (f,ch,meta73701,_,fn1,meta73708){
this.f = f;
this.ch = ch;
this.meta73701 = meta73701;
this._ = _;
this.fn1 = fn1;
this.meta73708 = meta73708;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async73707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_73709,meta73708__$1){
var self__ = this;
var _73709__$1 = this;
return (new cljs.core.async.t_cljs$core$async73707(self__.f,self__.ch,self__.meta73701,self__._,self__.fn1,meta73708__$1));
}));

(cljs.core.async.t_cljs$core$async73707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_73709){
var self__ = this;
var _73709__$1 = this;
return self__.meta73708;
}));

(cljs.core.async.t_cljs$core$async73707.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73707.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async73707.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async73707.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__73698_SHARP_){
var G__73720 = (((p1__73698_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__73698_SHARP_) : self__.f.call(null,p1__73698_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__73720) : f1.call(null,G__73720));
});
}));

(cljs.core.async.t_cljs$core$async73707.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta73701","meta73701",-608539830,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async73700","cljs.core.async/t_cljs$core$async73700",-878526456,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta73708","meta73708",-1319102336,null)], null);
}));

(cljs.core.async.t_cljs$core$async73707.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async73707.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async73707");

(cljs.core.async.t_cljs$core$async73707.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async73707");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async73707.
 */
cljs.core.async.__GT_t_cljs$core$async73707 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async73707(f__$1,ch__$1,meta73701__$1,___$2,fn1__$1,meta73708){
return (new cljs.core.async.t_cljs$core$async73707(f__$1,ch__$1,meta73701__$1,___$2,fn1__$1,meta73708));
});

}

return (new cljs.core.async.t_cljs$core$async73707(self__.f,self__.ch,self__.meta73701,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__73723 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__73723) : self__.f.call(null,G__73723));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async73700.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73700.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async73700.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta73701","meta73701",-608539830,null)], null);
}));

(cljs.core.async.t_cljs$core$async73700.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async73700.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async73700");

(cljs.core.async.t_cljs$core$async73700.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async73700");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async73700.
 */
cljs.core.async.__GT_t_cljs$core$async73700 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async73700(f__$1,ch__$1,meta73701){
return (new cljs.core.async.t_cljs$core$async73700(f__$1,ch__$1,meta73701));
});

}

return (new cljs.core.async.t_cljs$core$async73700(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async73731 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async73731 = (function (f,ch,meta73732){
this.f = f;
this.ch = ch;
this.meta73732 = meta73732;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async73731.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_73733,meta73732__$1){
var self__ = this;
var _73733__$1 = this;
return (new cljs.core.async.t_cljs$core$async73731(self__.f,self__.ch,meta73732__$1));
}));

(cljs.core.async.t_cljs$core$async73731.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_73733){
var self__ = this;
var _73733__$1 = this;
return self__.meta73732;
}));

(cljs.core.async.t_cljs$core$async73731.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73731.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async73731.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73731.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async73731.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73731.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async73731.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta73732","meta73732",11849661,null)], null);
}));

(cljs.core.async.t_cljs$core$async73731.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async73731.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async73731");

(cljs.core.async.t_cljs$core$async73731.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async73731");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async73731.
 */
cljs.core.async.__GT_t_cljs$core$async73731 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async73731(f__$1,ch__$1,meta73732){
return (new cljs.core.async.t_cljs$core$async73731(f__$1,ch__$1,meta73732));
});

}

return (new cljs.core.async.t_cljs$core$async73731(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async73743 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async73743 = (function (p,ch,meta73744){
this.p = p;
this.ch = ch;
this.meta73744 = meta73744;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async73743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_73745,meta73744__$1){
var self__ = this;
var _73745__$1 = this;
return (new cljs.core.async.t_cljs$core$async73743(self__.p,self__.ch,meta73744__$1));
}));

(cljs.core.async.t_cljs$core$async73743.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_73745){
var self__ = this;
var _73745__$1 = this;
return self__.meta73744;
}));

(cljs.core.async.t_cljs$core$async73743.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73743.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async73743.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async73743.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73743.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async73743.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73743.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async73743.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta73744","meta73744",-1026925148,null)], null);
}));

(cljs.core.async.t_cljs$core$async73743.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async73743.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async73743");

(cljs.core.async.t_cljs$core$async73743.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async73743");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async73743.
 */
cljs.core.async.__GT_t_cljs$core$async73743 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async73743(p__$1,ch__$1,meta73744){
return (new cljs.core.async.t_cljs$core$async73743(p__$1,ch__$1,meta73744));
});

}

return (new cljs.core.async.t_cljs$core$async73743(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__73765 = arguments.length;
switch (G__73765) {
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
var c__71447__auto___77564 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__71448__auto__ = (function (){var switch__71378__auto__ = (function (state_73791){
var state_val_73792 = (state_73791[(1)]);
if((state_val_73792 === (7))){
var inst_73787 = (state_73791[(2)]);
var state_73791__$1 = state_73791;
var statearr_73795_77574 = state_73791__$1;
(statearr_73795_77574[(2)] = inst_73787);

(statearr_73795_77574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73792 === (1))){
var state_73791__$1 = state_73791;
var statearr_73798_77575 = state_73791__$1;
(statearr_73798_77575[(2)] = null);

(statearr_73798_77575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73792 === (4))){
var inst_73772 = (state_73791[(7)]);
var inst_73772__$1 = (state_73791[(2)]);
var inst_73773 = (inst_73772__$1 == null);
var state_73791__$1 = (function (){var statearr_73801 = state_73791;
(statearr_73801[(7)] = inst_73772__$1);

return statearr_73801;
})();
if(cljs.core.truth_(inst_73773)){
var statearr_73802_77579 = state_73791__$1;
(statearr_73802_77579[(1)] = (5));

} else {
var statearr_73803_77587 = state_73791__$1;
(statearr_73803_77587[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73792 === (6))){
var inst_73772 = (state_73791[(7)]);
var inst_73777 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_73772) : p.call(null,inst_73772));
var state_73791__$1 = state_73791;
if(cljs.core.truth_(inst_73777)){
var statearr_73806_77589 = state_73791__$1;
(statearr_73806_77589[(1)] = (8));

} else {
var statearr_73807_77591 = state_73791__$1;
(statearr_73807_77591[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73792 === (3))){
var inst_73789 = (state_73791[(2)]);
var state_73791__$1 = state_73791;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73791__$1,inst_73789);
} else {
if((state_val_73792 === (2))){
var state_73791__$1 = state_73791;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73791__$1,(4),ch);
} else {
if((state_val_73792 === (11))){
var inst_73781 = (state_73791[(2)]);
var state_73791__$1 = state_73791;
var statearr_73809_77600 = state_73791__$1;
(statearr_73809_77600[(2)] = inst_73781);

(statearr_73809_77600[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73792 === (9))){
var state_73791__$1 = state_73791;
var statearr_73813_77603 = state_73791__$1;
(statearr_73813_77603[(2)] = null);

(statearr_73813_77603[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73792 === (5))){
var inst_73775 = cljs.core.async.close_BANG_(out);
var state_73791__$1 = state_73791;
var statearr_73814_77612 = state_73791__$1;
(statearr_73814_77612[(2)] = inst_73775);

(statearr_73814_77612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73792 === (10))){
var inst_73784 = (state_73791[(2)]);
var state_73791__$1 = (function (){var statearr_73815 = state_73791;
(statearr_73815[(8)] = inst_73784);

return statearr_73815;
})();
var statearr_73816_77614 = state_73791__$1;
(statearr_73816_77614[(2)] = null);

(statearr_73816_77614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73792 === (8))){
var inst_73772 = (state_73791[(7)]);
var state_73791__$1 = state_73791;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73791__$1,(11),out,inst_73772);
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
var cljs$core$async$state_machine__71379__auto__ = null;
var cljs$core$async$state_machine__71379__auto____0 = (function (){
var statearr_73818 = [null,null,null,null,null,null,null,null,null];
(statearr_73818[(0)] = cljs$core$async$state_machine__71379__auto__);

(statearr_73818[(1)] = (1));

return statearr_73818;
});
var cljs$core$async$state_machine__71379__auto____1 = (function (state_73791){
while(true){
var ret_value__71380__auto__ = (function (){try{while(true){
var result__71381__auto__ = switch__71378__auto__(state_73791);
if(cljs.core.keyword_identical_QMARK_(result__71381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71381__auto__;
}
break;
}
}catch (e73819){var ex__71382__auto__ = e73819;
var statearr_73820_77627 = state_73791;
(statearr_73820_77627[(2)] = ex__71382__auto__);


if(cljs.core.seq((state_73791[(4)]))){
var statearr_73821_77635 = state_73791;
(statearr_73821_77635[(1)] = cljs.core.first((state_73791[(4)])));

} else {
throw ex__71382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77636 = state_73791;
state_73791 = G__77636;
continue;
} else {
return ret_value__71380__auto__;
}
break;
}
});
cljs$core$async$state_machine__71379__auto__ = function(state_73791){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__71379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__71379__auto____1.call(this,state_73791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__71379__auto____0;
cljs$core$async$state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__71379__auto____1;
return cljs$core$async$state_machine__71379__auto__;
})()
})();
var state__71449__auto__ = (function (){var statearr_73822 = f__71448__auto__();
(statearr_73822[(6)] = c__71447__auto___77564);

return statearr_73822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71449__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__73825 = arguments.length;
switch (G__73825) {
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
var c__71447__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__71448__auto__ = (function (){var switch__71378__auto__ = (function (state_73898){
var state_val_73899 = (state_73898[(1)]);
if((state_val_73899 === (7))){
var inst_73894 = (state_73898[(2)]);
var state_73898__$1 = state_73898;
var statearr_73904_77661 = state_73898__$1;
(statearr_73904_77661[(2)] = inst_73894);

(statearr_73904_77661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73899 === (20))){
var inst_73863 = (state_73898[(7)]);
var inst_73875 = (state_73898[(2)]);
var inst_73876 = cljs.core.next(inst_73863);
var inst_73848 = inst_73876;
var inst_73849 = null;
var inst_73850 = (0);
var inst_73851 = (0);
var state_73898__$1 = (function (){var statearr_73905 = state_73898;
(statearr_73905[(8)] = inst_73851);

(statearr_73905[(9)] = inst_73848);

(statearr_73905[(10)] = inst_73875);

(statearr_73905[(11)] = inst_73850);

(statearr_73905[(12)] = inst_73849);

return statearr_73905;
})();
var statearr_73907_77671 = state_73898__$1;
(statearr_73907_77671[(2)] = null);

(statearr_73907_77671[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73899 === (1))){
var state_73898__$1 = state_73898;
var statearr_73908_77680 = state_73898__$1;
(statearr_73908_77680[(2)] = null);

(statearr_73908_77680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73899 === (4))){
var inst_73835 = (state_73898[(13)]);
var inst_73835__$1 = (state_73898[(2)]);
var inst_73837 = (inst_73835__$1 == null);
var state_73898__$1 = (function (){var statearr_73909 = state_73898;
(statearr_73909[(13)] = inst_73835__$1);

return statearr_73909;
})();
if(cljs.core.truth_(inst_73837)){
var statearr_73910_77683 = state_73898__$1;
(statearr_73910_77683[(1)] = (5));

} else {
var statearr_73911_77685 = state_73898__$1;
(statearr_73911_77685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73899 === (15))){
var state_73898__$1 = state_73898;
var statearr_73917_77693 = state_73898__$1;
(statearr_73917_77693[(2)] = null);

(statearr_73917_77693[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73899 === (21))){
var state_73898__$1 = state_73898;
var statearr_73918_77694 = state_73898__$1;
(statearr_73918_77694[(2)] = null);

(statearr_73918_77694[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73899 === (13))){
var inst_73851 = (state_73898[(8)]);
var inst_73848 = (state_73898[(9)]);
var inst_73850 = (state_73898[(11)]);
var inst_73849 = (state_73898[(12)]);
var inst_73858 = (state_73898[(2)]);
var inst_73860 = (inst_73851 + (1));
var tmp73914 = inst_73848;
var tmp73915 = inst_73850;
var tmp73916 = inst_73849;
var inst_73848__$1 = tmp73914;
var inst_73849__$1 = tmp73916;
var inst_73850__$1 = tmp73915;
var inst_73851__$1 = inst_73860;
var state_73898__$1 = (function (){var statearr_73921 = state_73898;
(statearr_73921[(8)] = inst_73851__$1);

(statearr_73921[(9)] = inst_73848__$1);

(statearr_73921[(14)] = inst_73858);

(statearr_73921[(11)] = inst_73850__$1);

(statearr_73921[(12)] = inst_73849__$1);

return statearr_73921;
})();
var statearr_73922_77707 = state_73898__$1;
(statearr_73922_77707[(2)] = null);

(statearr_73922_77707[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73899 === (22))){
var state_73898__$1 = state_73898;
var statearr_73923_77716 = state_73898__$1;
(statearr_73923_77716[(2)] = null);

(statearr_73923_77716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73899 === (6))){
var inst_73835 = (state_73898[(13)]);
var inst_73846 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_73835) : f.call(null,inst_73835));
var inst_73847 = cljs.core.seq(inst_73846);
var inst_73848 = inst_73847;
var inst_73849 = null;
var inst_73850 = (0);
var inst_73851 = (0);
var state_73898__$1 = (function (){var statearr_73925 = state_73898;
(statearr_73925[(8)] = inst_73851);

(statearr_73925[(9)] = inst_73848);

(statearr_73925[(11)] = inst_73850);

(statearr_73925[(12)] = inst_73849);

return statearr_73925;
})();
var statearr_73926_77720 = state_73898__$1;
(statearr_73926_77720[(2)] = null);

(statearr_73926_77720[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73899 === (17))){
var inst_73863 = (state_73898[(7)]);
var inst_73867 = cljs.core.chunk_first(inst_73863);
var inst_73868 = cljs.core.chunk_rest(inst_73863);
var inst_73869 = cljs.core.count(inst_73867);
var inst_73848 = inst_73868;
var inst_73849 = inst_73867;
var inst_73850 = inst_73869;
var inst_73851 = (0);
var state_73898__$1 = (function (){var statearr_73927 = state_73898;
(statearr_73927[(8)] = inst_73851);

(statearr_73927[(9)] = inst_73848);

(statearr_73927[(11)] = inst_73850);

(statearr_73927[(12)] = inst_73849);

return statearr_73927;
})();
var statearr_73928_77731 = state_73898__$1;
(statearr_73928_77731[(2)] = null);

(statearr_73928_77731[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73899 === (3))){
var inst_73896 = (state_73898[(2)]);
var state_73898__$1 = state_73898;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73898__$1,inst_73896);
} else {
if((state_val_73899 === (12))){
var inst_73884 = (state_73898[(2)]);
var state_73898__$1 = state_73898;
var statearr_73931_77739 = state_73898__$1;
(statearr_73931_77739[(2)] = inst_73884);

(statearr_73931_77739[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73899 === (2))){
var state_73898__$1 = state_73898;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73898__$1,(4),in$);
} else {
if((state_val_73899 === (23))){
var inst_73892 = (state_73898[(2)]);
var state_73898__$1 = state_73898;
var statearr_73932_77744 = state_73898__$1;
(statearr_73932_77744[(2)] = inst_73892);

(statearr_73932_77744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73899 === (19))){
var inst_73879 = (state_73898[(2)]);
var state_73898__$1 = state_73898;
var statearr_73934_77751 = state_73898__$1;
(statearr_73934_77751[(2)] = inst_73879);

(statearr_73934_77751[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73899 === (11))){
var inst_73863 = (state_73898[(7)]);
var inst_73848 = (state_73898[(9)]);
var inst_73863__$1 = cljs.core.seq(inst_73848);
var state_73898__$1 = (function (){var statearr_73938 = state_73898;
(statearr_73938[(7)] = inst_73863__$1);

return statearr_73938;
})();
if(inst_73863__$1){
var statearr_73939_77755 = state_73898__$1;
(statearr_73939_77755[(1)] = (14));

} else {
var statearr_73940_77763 = state_73898__$1;
(statearr_73940_77763[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73899 === (9))){
var inst_73886 = (state_73898[(2)]);
var inst_73887 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_73898__$1 = (function (){var statearr_73942 = state_73898;
(statearr_73942[(15)] = inst_73886);

return statearr_73942;
})();
if(cljs.core.truth_(inst_73887)){
var statearr_73947_77765 = state_73898__$1;
(statearr_73947_77765[(1)] = (21));

} else {
var statearr_73949_77767 = state_73898__$1;
(statearr_73949_77767[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73899 === (5))){
var inst_73839 = cljs.core.async.close_BANG_(out);
var state_73898__$1 = state_73898;
var statearr_73953_77776 = state_73898__$1;
(statearr_73953_77776[(2)] = inst_73839);

(statearr_73953_77776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73899 === (14))){
var inst_73863 = (state_73898[(7)]);
var inst_73865 = cljs.core.chunked_seq_QMARK_(inst_73863);
var state_73898__$1 = state_73898;
if(inst_73865){
var statearr_73955_77777 = state_73898__$1;
(statearr_73955_77777[(1)] = (17));

} else {
var statearr_73959_77780 = state_73898__$1;
(statearr_73959_77780[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73899 === (16))){
var inst_73882 = (state_73898[(2)]);
var state_73898__$1 = state_73898;
var statearr_73964_77785 = state_73898__$1;
(statearr_73964_77785[(2)] = inst_73882);

(statearr_73964_77785[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73899 === (10))){
var inst_73851 = (state_73898[(8)]);
var inst_73849 = (state_73898[(12)]);
var inst_73856 = cljs.core._nth(inst_73849,inst_73851);
var state_73898__$1 = state_73898;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73898__$1,(13),out,inst_73856);
} else {
if((state_val_73899 === (18))){
var inst_73863 = (state_73898[(7)]);
var inst_73872 = cljs.core.first(inst_73863);
var state_73898__$1 = state_73898;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73898__$1,(20),out,inst_73872);
} else {
if((state_val_73899 === (8))){
var inst_73851 = (state_73898[(8)]);
var inst_73850 = (state_73898[(11)]);
var inst_73853 = (inst_73851 < inst_73850);
var inst_73854 = inst_73853;
var state_73898__$1 = state_73898;
if(cljs.core.truth_(inst_73854)){
var statearr_73969_77804 = state_73898__$1;
(statearr_73969_77804[(1)] = (10));

} else {
var statearr_73971_77806 = state_73898__$1;
(statearr_73971_77806[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__71379__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__71379__auto____0 = (function (){
var statearr_73976 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73976[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__71379__auto__);

(statearr_73976[(1)] = (1));

return statearr_73976;
});
var cljs$core$async$mapcat_STAR__$_state_machine__71379__auto____1 = (function (state_73898){
while(true){
var ret_value__71380__auto__ = (function (){try{while(true){
var result__71381__auto__ = switch__71378__auto__(state_73898);
if(cljs.core.keyword_identical_QMARK_(result__71381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71381__auto__;
}
break;
}
}catch (e73977){var ex__71382__auto__ = e73977;
var statearr_73978_77820 = state_73898;
(statearr_73978_77820[(2)] = ex__71382__auto__);


if(cljs.core.seq((state_73898[(4)]))){
var statearr_73979_77822 = state_73898;
(statearr_73979_77822[(1)] = cljs.core.first((state_73898[(4)])));

} else {
throw ex__71382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77824 = state_73898;
state_73898 = G__77824;
continue;
} else {
return ret_value__71380__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__71379__auto__ = function(state_73898){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__71379__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__71379__auto____1.call(this,state_73898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__71379__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__71379__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__71379__auto__;
})()
})();
var state__71449__auto__ = (function (){var statearr_73982 = f__71448__auto__();
(statearr_73982[(6)] = c__71447__auto__);

return statearr_73982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71449__auto__);
}));

return c__71447__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__73987 = arguments.length;
switch (G__73987) {
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
var G__73994 = arguments.length;
switch (G__73994) {
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
var G__73999 = arguments.length;
switch (G__73999) {
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
var c__71447__auto___77872 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__71448__auto__ = (function (){var switch__71378__auto__ = (function (state_74038){
var state_val_74039 = (state_74038[(1)]);
if((state_val_74039 === (7))){
var inst_74032 = (state_74038[(2)]);
var state_74038__$1 = state_74038;
var statearr_74057_77883 = state_74038__$1;
(statearr_74057_77883[(2)] = inst_74032);

(statearr_74057_77883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74039 === (1))){
var inst_74012 = null;
var state_74038__$1 = (function (){var statearr_74059 = state_74038;
(statearr_74059[(7)] = inst_74012);

return statearr_74059;
})();
var statearr_74061_77888 = state_74038__$1;
(statearr_74061_77888[(2)] = null);

(statearr_74061_77888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74039 === (4))){
var inst_74015 = (state_74038[(8)]);
var inst_74015__$1 = (state_74038[(2)]);
var inst_74016 = (inst_74015__$1 == null);
var inst_74017 = cljs.core.not(inst_74016);
var state_74038__$1 = (function (){var statearr_74070 = state_74038;
(statearr_74070[(8)] = inst_74015__$1);

return statearr_74070;
})();
if(inst_74017){
var statearr_74072_77898 = state_74038__$1;
(statearr_74072_77898[(1)] = (5));

} else {
var statearr_74075_77899 = state_74038__$1;
(statearr_74075_77899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74039 === (6))){
var state_74038__$1 = state_74038;
var statearr_74078_77901 = state_74038__$1;
(statearr_74078_77901[(2)] = null);

(statearr_74078_77901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74039 === (3))){
var inst_74034 = (state_74038[(2)]);
var inst_74035 = cljs.core.async.close_BANG_(out);
var state_74038__$1 = (function (){var statearr_74086 = state_74038;
(statearr_74086[(9)] = inst_74034);

return statearr_74086;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_74038__$1,inst_74035);
} else {
if((state_val_74039 === (2))){
var state_74038__$1 = state_74038;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74038__$1,(4),ch);
} else {
if((state_val_74039 === (11))){
var inst_74015 = (state_74038[(8)]);
var inst_74025 = (state_74038[(2)]);
var inst_74012 = inst_74015;
var state_74038__$1 = (function (){var statearr_74089 = state_74038;
(statearr_74089[(10)] = inst_74025);

(statearr_74089[(7)] = inst_74012);

return statearr_74089;
})();
var statearr_74091_77917 = state_74038__$1;
(statearr_74091_77917[(2)] = null);

(statearr_74091_77917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74039 === (9))){
var inst_74015 = (state_74038[(8)]);
var state_74038__$1 = state_74038;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74038__$1,(11),out,inst_74015);
} else {
if((state_val_74039 === (5))){
var inst_74012 = (state_74038[(7)]);
var inst_74015 = (state_74038[(8)]);
var inst_74019 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_74015,inst_74012);
var state_74038__$1 = state_74038;
if(inst_74019){
var statearr_74102_77928 = state_74038__$1;
(statearr_74102_77928[(1)] = (8));

} else {
var statearr_74104_77930 = state_74038__$1;
(statearr_74104_77930[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74039 === (10))){
var inst_74029 = (state_74038[(2)]);
var state_74038__$1 = state_74038;
var statearr_74112_77939 = state_74038__$1;
(statearr_74112_77939[(2)] = inst_74029);

(statearr_74112_77939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74039 === (8))){
var inst_74012 = (state_74038[(7)]);
var tmp74099 = inst_74012;
var inst_74012__$1 = tmp74099;
var state_74038__$1 = (function (){var statearr_74115 = state_74038;
(statearr_74115[(7)] = inst_74012__$1);

return statearr_74115;
})();
var statearr_74117_77942 = state_74038__$1;
(statearr_74117_77942[(2)] = null);

(statearr_74117_77942[(1)] = (2));


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
var cljs$core$async$state_machine__71379__auto__ = null;
var cljs$core$async$state_machine__71379__auto____0 = (function (){
var statearr_74129 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_74129[(0)] = cljs$core$async$state_machine__71379__auto__);

(statearr_74129[(1)] = (1));

return statearr_74129;
});
var cljs$core$async$state_machine__71379__auto____1 = (function (state_74038){
while(true){
var ret_value__71380__auto__ = (function (){try{while(true){
var result__71381__auto__ = switch__71378__auto__(state_74038);
if(cljs.core.keyword_identical_QMARK_(result__71381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71381__auto__;
}
break;
}
}catch (e74138){var ex__71382__auto__ = e74138;
var statearr_74139_77954 = state_74038;
(statearr_74139_77954[(2)] = ex__71382__auto__);


if(cljs.core.seq((state_74038[(4)]))){
var statearr_74141_77962 = state_74038;
(statearr_74141_77962[(1)] = cljs.core.first((state_74038[(4)])));

} else {
throw ex__71382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77964 = state_74038;
state_74038 = G__77964;
continue;
} else {
return ret_value__71380__auto__;
}
break;
}
});
cljs$core$async$state_machine__71379__auto__ = function(state_74038){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__71379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__71379__auto____1.call(this,state_74038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__71379__auto____0;
cljs$core$async$state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__71379__auto____1;
return cljs$core$async$state_machine__71379__auto__;
})()
})();
var state__71449__auto__ = (function (){var statearr_74151 = f__71448__auto__();
(statearr_74151[(6)] = c__71447__auto___77872);

return statearr_74151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71449__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__74166 = arguments.length;
switch (G__74166) {
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
var c__71447__auto___77986 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__71448__auto__ = (function (){var switch__71378__auto__ = (function (state_74254){
var state_val_74256 = (state_74254[(1)]);
if((state_val_74256 === (7))){
var inst_74249 = (state_74254[(2)]);
var state_74254__$1 = state_74254;
var statearr_74268_77997 = state_74254__$1;
(statearr_74268_77997[(2)] = inst_74249);

(statearr_74268_77997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74256 === (1))){
var inst_74192 = (new Array(n));
var inst_74193 = inst_74192;
var inst_74194 = (0);
var state_74254__$1 = (function (){var statearr_74278 = state_74254;
(statearr_74278[(7)] = inst_74194);

(statearr_74278[(8)] = inst_74193);

return statearr_74278;
})();
var statearr_74281_78001 = state_74254__$1;
(statearr_74281_78001[(2)] = null);

(statearr_74281_78001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74256 === (4))){
var inst_74201 = (state_74254[(9)]);
var inst_74201__$1 = (state_74254[(2)]);
var inst_74208 = (inst_74201__$1 == null);
var inst_74209 = cljs.core.not(inst_74208);
var state_74254__$1 = (function (){var statearr_74292 = state_74254;
(statearr_74292[(9)] = inst_74201__$1);

return statearr_74292;
})();
if(inst_74209){
var statearr_74293_78011 = state_74254__$1;
(statearr_74293_78011[(1)] = (5));

} else {
var statearr_74294_78012 = state_74254__$1;
(statearr_74294_78012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74256 === (15))){
var inst_74243 = (state_74254[(2)]);
var state_74254__$1 = state_74254;
var statearr_74298_78021 = state_74254__$1;
(statearr_74298_78021[(2)] = inst_74243);

(statearr_74298_78021[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74256 === (13))){
var state_74254__$1 = state_74254;
var statearr_74306_78023 = state_74254__$1;
(statearr_74306_78023[(2)] = null);

(statearr_74306_78023[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74256 === (6))){
var inst_74194 = (state_74254[(7)]);
var inst_74233 = (inst_74194 > (0));
var state_74254__$1 = state_74254;
if(cljs.core.truth_(inst_74233)){
var statearr_74309_78033 = state_74254__$1;
(statearr_74309_78033[(1)] = (12));

} else {
var statearr_74310_78034 = state_74254__$1;
(statearr_74310_78034[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74256 === (3))){
var inst_74251 = (state_74254[(2)]);
var state_74254__$1 = state_74254;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74254__$1,inst_74251);
} else {
if((state_val_74256 === (12))){
var inst_74193 = (state_74254[(8)]);
var inst_74241 = cljs.core.vec(inst_74193);
var state_74254__$1 = state_74254;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74254__$1,(15),out,inst_74241);
} else {
if((state_val_74256 === (2))){
var state_74254__$1 = state_74254;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74254__$1,(4),ch);
} else {
if((state_val_74256 === (11))){
var inst_74223 = (state_74254[(2)]);
var inst_74226 = (new Array(n));
var inst_74193 = inst_74226;
var inst_74194 = (0);
var state_74254__$1 = (function (){var statearr_74322 = state_74254;
(statearr_74322[(7)] = inst_74194);

(statearr_74322[(10)] = inst_74223);

(statearr_74322[(8)] = inst_74193);

return statearr_74322;
})();
var statearr_74331_78055 = state_74254__$1;
(statearr_74331_78055[(2)] = null);

(statearr_74331_78055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74256 === (9))){
var inst_74193 = (state_74254[(8)]);
var inst_74221 = cljs.core.vec(inst_74193);
var state_74254__$1 = state_74254;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74254__$1,(11),out,inst_74221);
} else {
if((state_val_74256 === (5))){
var inst_74214 = (state_74254[(11)]);
var inst_74194 = (state_74254[(7)]);
var inst_74201 = (state_74254[(9)]);
var inst_74193 = (state_74254[(8)]);
var inst_74212 = (inst_74193[inst_74194] = inst_74201);
var inst_74214__$1 = (inst_74194 + (1));
var inst_74215 = (inst_74214__$1 < n);
var state_74254__$1 = (function (){var statearr_74342 = state_74254;
(statearr_74342[(11)] = inst_74214__$1);

(statearr_74342[(12)] = inst_74212);

return statearr_74342;
})();
if(cljs.core.truth_(inst_74215)){
var statearr_74343_78068 = state_74254__$1;
(statearr_74343_78068[(1)] = (8));

} else {
var statearr_74344_78069 = state_74254__$1;
(statearr_74344_78069[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74256 === (14))){
var inst_74246 = (state_74254[(2)]);
var inst_74247 = cljs.core.async.close_BANG_(out);
var state_74254__$1 = (function (){var statearr_74351 = state_74254;
(statearr_74351[(13)] = inst_74246);

return statearr_74351;
})();
var statearr_74359_78073 = state_74254__$1;
(statearr_74359_78073[(2)] = inst_74247);

(statearr_74359_78073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74256 === (10))){
var inst_74229 = (state_74254[(2)]);
var state_74254__$1 = state_74254;
var statearr_74360_78081 = state_74254__$1;
(statearr_74360_78081[(2)] = inst_74229);

(statearr_74360_78081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74256 === (8))){
var inst_74214 = (state_74254[(11)]);
var inst_74193 = (state_74254[(8)]);
var tmp74349 = inst_74193;
var inst_74193__$1 = tmp74349;
var inst_74194 = inst_74214;
var state_74254__$1 = (function (){var statearr_74365 = state_74254;
(statearr_74365[(7)] = inst_74194);

(statearr_74365[(8)] = inst_74193__$1);

return statearr_74365;
})();
var statearr_74367_78092 = state_74254__$1;
(statearr_74367_78092[(2)] = null);

(statearr_74367_78092[(1)] = (2));


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
var cljs$core$async$state_machine__71379__auto__ = null;
var cljs$core$async$state_machine__71379__auto____0 = (function (){
var statearr_74375 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_74375[(0)] = cljs$core$async$state_machine__71379__auto__);

(statearr_74375[(1)] = (1));

return statearr_74375;
});
var cljs$core$async$state_machine__71379__auto____1 = (function (state_74254){
while(true){
var ret_value__71380__auto__ = (function (){try{while(true){
var result__71381__auto__ = switch__71378__auto__(state_74254);
if(cljs.core.keyword_identical_QMARK_(result__71381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71381__auto__;
}
break;
}
}catch (e74378){var ex__71382__auto__ = e74378;
var statearr_74380_78105 = state_74254;
(statearr_74380_78105[(2)] = ex__71382__auto__);


if(cljs.core.seq((state_74254[(4)]))){
var statearr_74388_78114 = state_74254;
(statearr_74388_78114[(1)] = cljs.core.first((state_74254[(4)])));

} else {
throw ex__71382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78115 = state_74254;
state_74254 = G__78115;
continue;
} else {
return ret_value__71380__auto__;
}
break;
}
});
cljs$core$async$state_machine__71379__auto__ = function(state_74254){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__71379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__71379__auto____1.call(this,state_74254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__71379__auto____0;
cljs$core$async$state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__71379__auto____1;
return cljs$core$async$state_machine__71379__auto__;
})()
})();
var state__71449__auto__ = (function (){var statearr_74392 = f__71448__auto__();
(statearr_74392[(6)] = c__71447__auto___77986);

return statearr_74392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71449__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__74418 = arguments.length;
switch (G__74418) {
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
var c__71447__auto___78138 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__71448__auto__ = (function (){var switch__71378__auto__ = (function (state_74501){
var state_val_74503 = (state_74501[(1)]);
if((state_val_74503 === (7))){
var inst_74497 = (state_74501[(2)]);
var state_74501__$1 = state_74501;
var statearr_74515_78143 = state_74501__$1;
(statearr_74515_78143[(2)] = inst_74497);

(statearr_74515_78143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74503 === (1))){
var inst_74439 = [];
var inst_74440 = inst_74439;
var inst_74441 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_74501__$1 = (function (){var statearr_74525 = state_74501;
(statearr_74525[(7)] = inst_74440);

(statearr_74525[(8)] = inst_74441);

return statearr_74525;
})();
var statearr_74526_78152 = state_74501__$1;
(statearr_74526_78152[(2)] = null);

(statearr_74526_78152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74503 === (4))){
var inst_74445 = (state_74501[(9)]);
var inst_74445__$1 = (state_74501[(2)]);
var inst_74447 = (inst_74445__$1 == null);
var inst_74448 = cljs.core.not(inst_74447);
var state_74501__$1 = (function (){var statearr_74530 = state_74501;
(statearr_74530[(9)] = inst_74445__$1);

return statearr_74530;
})();
if(inst_74448){
var statearr_74538_78162 = state_74501__$1;
(statearr_74538_78162[(1)] = (5));

} else {
var statearr_74539_78164 = state_74501__$1;
(statearr_74539_78164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74503 === (15))){
var inst_74491 = (state_74501[(2)]);
var state_74501__$1 = state_74501;
var statearr_74542_78173 = state_74501__$1;
(statearr_74542_78173[(2)] = inst_74491);

(statearr_74542_78173[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74503 === (13))){
var state_74501__$1 = state_74501;
var statearr_74551_78175 = state_74501__$1;
(statearr_74551_78175[(2)] = null);

(statearr_74551_78175[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74503 === (6))){
var inst_74440 = (state_74501[(7)]);
var inst_74479 = inst_74440.length;
var inst_74480 = (inst_74479 > (0));
var state_74501__$1 = state_74501;
if(cljs.core.truth_(inst_74480)){
var statearr_74555_78185 = state_74501__$1;
(statearr_74555_78185[(1)] = (12));

} else {
var statearr_74557_78186 = state_74501__$1;
(statearr_74557_78186[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74503 === (3))){
var inst_74499 = (state_74501[(2)]);
var state_74501__$1 = state_74501;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74501__$1,inst_74499);
} else {
if((state_val_74503 === (12))){
var inst_74440 = (state_74501[(7)]);
var inst_74489 = cljs.core.vec(inst_74440);
var state_74501__$1 = state_74501;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74501__$1,(15),out,inst_74489);
} else {
if((state_val_74503 === (2))){
var state_74501__$1 = state_74501;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74501__$1,(4),ch);
} else {
if((state_val_74503 === (11))){
var inst_74451 = (state_74501[(10)]);
var inst_74445 = (state_74501[(9)]);
var inst_74470 = (state_74501[(2)]);
var inst_74472 = [];
var inst_74473 = inst_74472.push(inst_74445);
var inst_74440 = inst_74472;
var inst_74441 = inst_74451;
var state_74501__$1 = (function (){var statearr_74576 = state_74501;
(statearr_74576[(7)] = inst_74440);

(statearr_74576[(8)] = inst_74441);

(statearr_74576[(11)] = inst_74473);

(statearr_74576[(12)] = inst_74470);

return statearr_74576;
})();
var statearr_74579_78207 = state_74501__$1;
(statearr_74579_78207[(2)] = null);

(statearr_74579_78207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74503 === (9))){
var inst_74440 = (state_74501[(7)]);
var inst_74468 = cljs.core.vec(inst_74440);
var state_74501__$1 = state_74501;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74501__$1,(11),out,inst_74468);
} else {
if((state_val_74503 === (5))){
var inst_74451 = (state_74501[(10)]);
var inst_74441 = (state_74501[(8)]);
var inst_74445 = (state_74501[(9)]);
var inst_74451__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_74445) : f.call(null,inst_74445));
var inst_74459 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_74451__$1,inst_74441);
var inst_74460 = cljs.core.keyword_identical_QMARK_(inst_74441,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_74461 = ((inst_74459) || (inst_74460));
var state_74501__$1 = (function (){var statearr_74591 = state_74501;
(statearr_74591[(10)] = inst_74451__$1);

return statearr_74591;
})();
if(cljs.core.truth_(inst_74461)){
var statearr_74593_78223 = state_74501__$1;
(statearr_74593_78223[(1)] = (8));

} else {
var statearr_74594_78231 = state_74501__$1;
(statearr_74594_78231[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74503 === (14))){
var inst_74494 = (state_74501[(2)]);
var inst_74495 = cljs.core.async.close_BANG_(out);
var state_74501__$1 = (function (){var statearr_74598 = state_74501;
(statearr_74598[(13)] = inst_74494);

return statearr_74598;
})();
var statearr_74605_78235 = state_74501__$1;
(statearr_74605_78235[(2)] = inst_74495);

(statearr_74605_78235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74503 === (10))){
var inst_74476 = (state_74501[(2)]);
var state_74501__$1 = state_74501;
var statearr_74606_78244 = state_74501__$1;
(statearr_74606_78244[(2)] = inst_74476);

(statearr_74606_78244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74503 === (8))){
var inst_74440 = (state_74501[(7)]);
var inst_74451 = (state_74501[(10)]);
var inst_74445 = (state_74501[(9)]);
var inst_74464 = inst_74440.push(inst_74445);
var tmp74596 = inst_74440;
var inst_74440__$1 = tmp74596;
var inst_74441 = inst_74451;
var state_74501__$1 = (function (){var statearr_74610 = state_74501;
(statearr_74610[(7)] = inst_74440__$1);

(statearr_74610[(8)] = inst_74441);

(statearr_74610[(14)] = inst_74464);

return statearr_74610;
})();
var statearr_74618_78255 = state_74501__$1;
(statearr_74618_78255[(2)] = null);

(statearr_74618_78255[(1)] = (2));


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
var cljs$core$async$state_machine__71379__auto__ = null;
var cljs$core$async$state_machine__71379__auto____0 = (function (){
var statearr_74621 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_74621[(0)] = cljs$core$async$state_machine__71379__auto__);

(statearr_74621[(1)] = (1));

return statearr_74621;
});
var cljs$core$async$state_machine__71379__auto____1 = (function (state_74501){
while(true){
var ret_value__71380__auto__ = (function (){try{while(true){
var result__71381__auto__ = switch__71378__auto__(state_74501);
if(cljs.core.keyword_identical_QMARK_(result__71381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71381__auto__;
}
break;
}
}catch (e74630){var ex__71382__auto__ = e74630;
var statearr_74631_78268 = state_74501;
(statearr_74631_78268[(2)] = ex__71382__auto__);


if(cljs.core.seq((state_74501[(4)]))){
var statearr_74632_78270 = state_74501;
(statearr_74632_78270[(1)] = cljs.core.first((state_74501[(4)])));

} else {
throw ex__71382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78279 = state_74501;
state_74501 = G__78279;
continue;
} else {
return ret_value__71380__auto__;
}
break;
}
});
cljs$core$async$state_machine__71379__auto__ = function(state_74501){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__71379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__71379__auto____1.call(this,state_74501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__71379__auto____0;
cljs$core$async$state_machine__71379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__71379__auto____1;
return cljs$core$async$state_machine__71379__auto__;
})()
})();
var state__71449__auto__ = (function (){var statearr_74643 = f__71448__auto__();
(statearr_74643[(6)] = c__71447__auto___78138);

return statearr_74643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71449__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
