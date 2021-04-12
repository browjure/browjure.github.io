goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__77181 = arguments.length;
switch (G__77181) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async77187 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async77187 = (function (f,blockable,meta77188){
this.f = f;
this.blockable = blockable;
this.meta77188 = meta77188;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async77187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77189,meta77188__$1){
var self__ = this;
var _77189__$1 = this;
return (new cljs.core.async.t_cljs$core$async77187(self__.f,self__.blockable,meta77188__$1));
}));

(cljs.core.async.t_cljs$core$async77187.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77189){
var self__ = this;
var _77189__$1 = this;
return self__.meta77188;
}));

(cljs.core.async.t_cljs$core$async77187.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async77187.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async77187.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async77187.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async77187.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta77188","meta77188",445045029,null)], null);
}));

(cljs.core.async.t_cljs$core$async77187.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async77187.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async77187");

(cljs.core.async.t_cljs$core$async77187.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async77187");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async77187.
 */
cljs.core.async.__GT_t_cljs$core$async77187 = (function cljs$core$async$__GT_t_cljs$core$async77187(f__$1,blockable__$1,meta77188){
return (new cljs.core.async.t_cljs$core$async77187(f__$1,blockable__$1,meta77188));
});

}

return (new cljs.core.async.t_cljs$core$async77187(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__77209 = arguments.length;
switch (G__77209) {
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
var G__77214 = arguments.length;
switch (G__77214) {
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
var G__77226 = arguments.length;
switch (G__77226) {
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
var val_79810 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_79810) : fn1.call(null,val_79810));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_79810) : fn1.call(null,val_79810));
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
var G__77229 = arguments.length;
switch (G__77229) {
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
var n__4613__auto___79819 = n;
var x_79820 = (0);
while(true){
if((x_79820 < n__4613__auto___79819)){
(a[x_79820] = x_79820);

var G__79821 = (x_79820 + (1));
x_79820 = G__79821;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async77232 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async77232 = (function (flag,meta77233){
this.flag = flag;
this.meta77233 = meta77233;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async77232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77234,meta77233__$1){
var self__ = this;
var _77234__$1 = this;
return (new cljs.core.async.t_cljs$core$async77232(self__.flag,meta77233__$1));
}));

(cljs.core.async.t_cljs$core$async77232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77234){
var self__ = this;
var _77234__$1 = this;
return self__.meta77233;
}));

(cljs.core.async.t_cljs$core$async77232.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async77232.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async77232.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async77232.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async77232.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta77233","meta77233",-921188050,null)], null);
}));

(cljs.core.async.t_cljs$core$async77232.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async77232.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async77232");

(cljs.core.async.t_cljs$core$async77232.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async77232");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async77232.
 */
cljs.core.async.__GT_t_cljs$core$async77232 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async77232(flag__$1,meta77233){
return (new cljs.core.async.t_cljs$core$async77232(flag__$1,meta77233));
});

}

return (new cljs.core.async.t_cljs$core$async77232(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async77249 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async77249 = (function (flag,cb,meta77250){
this.flag = flag;
this.cb = cb;
this.meta77250 = meta77250;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async77249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77251,meta77250__$1){
var self__ = this;
var _77251__$1 = this;
return (new cljs.core.async.t_cljs$core$async77249(self__.flag,self__.cb,meta77250__$1));
}));

(cljs.core.async.t_cljs$core$async77249.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77251){
var self__ = this;
var _77251__$1 = this;
return self__.meta77250;
}));

(cljs.core.async.t_cljs$core$async77249.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async77249.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async77249.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async77249.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async77249.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta77250","meta77250",1395504791,null)], null);
}));

(cljs.core.async.t_cljs$core$async77249.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async77249.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async77249");

(cljs.core.async.t_cljs$core$async77249.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async77249");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async77249.
 */
cljs.core.async.__GT_t_cljs$core$async77249 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async77249(flag__$1,cb__$1,meta77250){
return (new cljs.core.async.t_cljs$core$async77249(flag__$1,cb__$1,meta77250));
});

}

return (new cljs.core.async.t_cljs$core$async77249(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__77258_SHARP_){
var G__77262 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__77258_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__77262) : fret.call(null,G__77262));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__77259_SHARP_){
var G__77263 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__77259_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__77263) : fret.call(null,G__77263));
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
var G__79834 = (i + (1));
i = G__79834;
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
var len__4736__auto___79836 = arguments.length;
var i__4737__auto___79837 = (0);
while(true){
if((i__4737__auto___79837 < len__4736__auto___79836)){
args__4742__auto__.push((arguments[i__4737__auto___79837]));

var G__79838 = (i__4737__auto___79837 + (1));
i__4737__auto___79837 = G__79838;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__77267){
var map__77268 = p__77267;
var map__77268__$1 = (((((!((map__77268 == null))))?(((((map__77268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77268):map__77268);
var opts = map__77268__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq77265){
var G__77266 = cljs.core.first(seq77265);
var seq77265__$1 = cljs.core.next(seq77265);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77266,seq77265__$1);
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
var G__77277 = arguments.length;
switch (G__77277) {
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
var c__60362__auto___79845 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60363__auto__ = (function (){var switch__60121__auto__ = (function (state_77321){
var state_val_77325 = (state_77321[(1)]);
if((state_val_77325 === (7))){
var inst_77310 = (state_77321[(2)]);
var state_77321__$1 = state_77321;
var statearr_77330_79847 = state_77321__$1;
(statearr_77330_79847[(2)] = inst_77310);

(statearr_77330_79847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77325 === (1))){
var state_77321__$1 = state_77321;
var statearr_77331_79848 = state_77321__$1;
(statearr_77331_79848[(2)] = null);

(statearr_77331_79848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77325 === (4))){
var inst_77289 = (state_77321[(7)]);
var inst_77289__$1 = (state_77321[(2)]);
var inst_77294 = (inst_77289__$1 == null);
var state_77321__$1 = (function (){var statearr_77332 = state_77321;
(statearr_77332[(7)] = inst_77289__$1);

return statearr_77332;
})();
if(cljs.core.truth_(inst_77294)){
var statearr_77333_79849 = state_77321__$1;
(statearr_77333_79849[(1)] = (5));

} else {
var statearr_77334_79850 = state_77321__$1;
(statearr_77334_79850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77325 === (13))){
var state_77321__$1 = state_77321;
var statearr_77336_79851 = state_77321__$1;
(statearr_77336_79851[(2)] = null);

(statearr_77336_79851[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77325 === (6))){
var inst_77289 = (state_77321[(7)]);
var state_77321__$1 = state_77321;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_77321__$1,(11),to,inst_77289);
} else {
if((state_val_77325 === (3))){
var inst_77313 = (state_77321[(2)]);
var state_77321__$1 = state_77321;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77321__$1,inst_77313);
} else {
if((state_val_77325 === (12))){
var state_77321__$1 = state_77321;
var statearr_77343_79853 = state_77321__$1;
(statearr_77343_79853[(2)] = null);

(statearr_77343_79853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77325 === (2))){
var state_77321__$1 = state_77321;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77321__$1,(4),from);
} else {
if((state_val_77325 === (11))){
var inst_77303 = (state_77321[(2)]);
var state_77321__$1 = state_77321;
if(cljs.core.truth_(inst_77303)){
var statearr_77344_79858 = state_77321__$1;
(statearr_77344_79858[(1)] = (12));

} else {
var statearr_77345_79859 = state_77321__$1;
(statearr_77345_79859[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77325 === (9))){
var state_77321__$1 = state_77321;
var statearr_77346_79861 = state_77321__$1;
(statearr_77346_79861[(2)] = null);

(statearr_77346_79861[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77325 === (5))){
var state_77321__$1 = state_77321;
if(cljs.core.truth_(close_QMARK_)){
var statearr_77353_79862 = state_77321__$1;
(statearr_77353_79862[(1)] = (8));

} else {
var statearr_77354_79863 = state_77321__$1;
(statearr_77354_79863[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77325 === (14))){
var inst_77308 = (state_77321[(2)]);
var state_77321__$1 = state_77321;
var statearr_77355_79864 = state_77321__$1;
(statearr_77355_79864[(2)] = inst_77308);

(statearr_77355_79864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77325 === (10))){
var inst_77300 = (state_77321[(2)]);
var state_77321__$1 = state_77321;
var statearr_77360_79865 = state_77321__$1;
(statearr_77360_79865[(2)] = inst_77300);

(statearr_77360_79865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77325 === (8))){
var inst_77297 = cljs.core.async.close_BANG_(to);
var state_77321__$1 = state_77321;
var statearr_77365_79866 = state_77321__$1;
(statearr_77365_79866[(2)] = inst_77297);

(statearr_77365_79866[(1)] = (10));


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
var cljs$core$async$state_machine__60122__auto__ = null;
var cljs$core$async$state_machine__60122__auto____0 = (function (){
var statearr_77366 = [null,null,null,null,null,null,null,null];
(statearr_77366[(0)] = cljs$core$async$state_machine__60122__auto__);

(statearr_77366[(1)] = (1));

return statearr_77366;
});
var cljs$core$async$state_machine__60122__auto____1 = (function (state_77321){
while(true){
var ret_value__60123__auto__ = (function (){try{while(true){
var result__60124__auto__ = switch__60121__auto__(state_77321);
if(cljs.core.keyword_identical_QMARK_(result__60124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60124__auto__;
}
break;
}
}catch (e77371){var ex__60125__auto__ = e77371;
var statearr_77372_79867 = state_77321;
(statearr_77372_79867[(2)] = ex__60125__auto__);


if(cljs.core.seq((state_77321[(4)]))){
var statearr_77373_79868 = state_77321;
(statearr_77373_79868[(1)] = cljs.core.first((state_77321[(4)])));

} else {
throw ex__60125__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79869 = state_77321;
state_77321 = G__79869;
continue;
} else {
return ret_value__60123__auto__;
}
break;
}
});
cljs$core$async$state_machine__60122__auto__ = function(state_77321){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60122__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60122__auto____1.call(this,state_77321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60122__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60122__auto____0;
cljs$core$async$state_machine__60122__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60122__auto____1;
return cljs$core$async$state_machine__60122__auto__;
})()
})();
var state__60364__auto__ = (function (){var statearr_77374 = f__60363__auto__();
(statearr_77374[(6)] = c__60362__auto___79845);

return statearr_77374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60364__auto__);
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
var process = (function (p__77378){
var vec__77379 = p__77378;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77379,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77379,(1),null);
var job = vec__77379;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__60362__auto___79873 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60363__auto__ = (function (){var switch__60121__auto__ = (function (state_77386){
var state_val_77387 = (state_77386[(1)]);
if((state_val_77387 === (1))){
var state_77386__$1 = state_77386;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_77386__$1,(2),res,v);
} else {
if((state_val_77387 === (2))){
var inst_77383 = (state_77386[(2)]);
var inst_77384 = cljs.core.async.close_BANG_(res);
var state_77386__$1 = (function (){var statearr_77391 = state_77386;
(statearr_77391[(7)] = inst_77383);

return statearr_77391;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_77386__$1,inst_77384);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__60122__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__60122__auto____0 = (function (){
var statearr_77392 = [null,null,null,null,null,null,null,null];
(statearr_77392[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__60122__auto__);

(statearr_77392[(1)] = (1));

return statearr_77392;
});
var cljs$core$async$pipeline_STAR__$_state_machine__60122__auto____1 = (function (state_77386){
while(true){
var ret_value__60123__auto__ = (function (){try{while(true){
var result__60124__auto__ = switch__60121__auto__(state_77386);
if(cljs.core.keyword_identical_QMARK_(result__60124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60124__auto__;
}
break;
}
}catch (e77393){var ex__60125__auto__ = e77393;
var statearr_77394_79875 = state_77386;
(statearr_77394_79875[(2)] = ex__60125__auto__);


if(cljs.core.seq((state_77386[(4)]))){
var statearr_77395_79876 = state_77386;
(statearr_77395_79876[(1)] = cljs.core.first((state_77386[(4)])));

} else {
throw ex__60125__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79877 = state_77386;
state_77386 = G__79877;
continue;
} else {
return ret_value__60123__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__60122__auto__ = function(state_77386){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__60122__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__60122__auto____1.call(this,state_77386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__60122__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__60122__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__60122__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__60122__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__60122__auto__;
})()
})();
var state__60364__auto__ = (function (){var statearr_77396 = f__60363__auto__();
(statearr_77396[(6)] = c__60362__auto___79873);

return statearr_77396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60364__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__77397){
var vec__77399 = p__77397;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77399,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77399,(1),null);
var job = vec__77399;
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
var n__4613__auto___79880 = n;
var __79881 = (0);
while(true){
if((__79881 < n__4613__auto___79880)){
var G__77403_79882 = type;
var G__77403_79883__$1 = (((G__77403_79882 instanceof cljs.core.Keyword))?G__77403_79882.fqn:null);
switch (G__77403_79883__$1) {
case "compute":
var c__60362__auto___79887 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__79881,c__60362__auto___79887,G__77403_79882,G__77403_79883__$1,n__4613__auto___79880,jobs,results,process,async){
return (function (){
var f__60363__auto__ = (function (){var switch__60121__auto__ = ((function (__79881,c__60362__auto___79887,G__77403_79882,G__77403_79883__$1,n__4613__auto___79880,jobs,results,process,async){
return (function (state_77418){
var state_val_77419 = (state_77418[(1)]);
if((state_val_77419 === (1))){
var state_77418__$1 = state_77418;
var statearr_77420_79888 = state_77418__$1;
(statearr_77420_79888[(2)] = null);

(statearr_77420_79888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77419 === (2))){
var state_77418__$1 = state_77418;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77418__$1,(4),jobs);
} else {
if((state_val_77419 === (3))){
var inst_77416 = (state_77418[(2)]);
var state_77418__$1 = state_77418;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77418__$1,inst_77416);
} else {
if((state_val_77419 === (4))){
var inst_77406 = (state_77418[(2)]);
var inst_77408 = process(inst_77406);
var state_77418__$1 = state_77418;
if(cljs.core.truth_(inst_77408)){
var statearr_77423_79893 = state_77418__$1;
(statearr_77423_79893[(1)] = (5));

} else {
var statearr_77425_79895 = state_77418__$1;
(statearr_77425_79895[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77419 === (5))){
var state_77418__$1 = state_77418;
var statearr_77428_79896 = state_77418__$1;
(statearr_77428_79896[(2)] = null);

(statearr_77428_79896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77419 === (6))){
var state_77418__$1 = state_77418;
var statearr_77429_79897 = state_77418__$1;
(statearr_77429_79897[(2)] = null);

(statearr_77429_79897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77419 === (7))){
var inst_77414 = (state_77418[(2)]);
var state_77418__$1 = state_77418;
var statearr_77430_79898 = state_77418__$1;
(statearr_77430_79898[(2)] = inst_77414);

(statearr_77430_79898[(1)] = (3));


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
});})(__79881,c__60362__auto___79887,G__77403_79882,G__77403_79883__$1,n__4613__auto___79880,jobs,results,process,async))
;
return ((function (__79881,switch__60121__auto__,c__60362__auto___79887,G__77403_79882,G__77403_79883__$1,n__4613__auto___79880,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__60122__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__60122__auto____0 = (function (){
var statearr_77438 = [null,null,null,null,null,null,null];
(statearr_77438[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__60122__auto__);

(statearr_77438[(1)] = (1));

return statearr_77438;
});
var cljs$core$async$pipeline_STAR__$_state_machine__60122__auto____1 = (function (state_77418){
while(true){
var ret_value__60123__auto__ = (function (){try{while(true){
var result__60124__auto__ = switch__60121__auto__(state_77418);
if(cljs.core.keyword_identical_QMARK_(result__60124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60124__auto__;
}
break;
}
}catch (e77439){var ex__60125__auto__ = e77439;
var statearr_77440_79901 = state_77418;
(statearr_77440_79901[(2)] = ex__60125__auto__);


if(cljs.core.seq((state_77418[(4)]))){
var statearr_77441_79902 = state_77418;
(statearr_77441_79902[(1)] = cljs.core.first((state_77418[(4)])));

} else {
throw ex__60125__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79903 = state_77418;
state_77418 = G__79903;
continue;
} else {
return ret_value__60123__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__60122__auto__ = function(state_77418){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__60122__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__60122__auto____1.call(this,state_77418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__60122__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__60122__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__60122__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__60122__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__60122__auto__;
})()
;})(__79881,switch__60121__auto__,c__60362__auto___79887,G__77403_79882,G__77403_79883__$1,n__4613__auto___79880,jobs,results,process,async))
})();
var state__60364__auto__ = (function (){var statearr_77442 = f__60363__auto__();
(statearr_77442[(6)] = c__60362__auto___79887);

return statearr_77442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60364__auto__);
});})(__79881,c__60362__auto___79887,G__77403_79882,G__77403_79883__$1,n__4613__auto___79880,jobs,results,process,async))
);


break;
case "async":
var c__60362__auto___79905 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__79881,c__60362__auto___79905,G__77403_79882,G__77403_79883__$1,n__4613__auto___79880,jobs,results,process,async){
return (function (){
var f__60363__auto__ = (function (){var switch__60121__auto__ = ((function (__79881,c__60362__auto___79905,G__77403_79882,G__77403_79883__$1,n__4613__auto___79880,jobs,results,process,async){
return (function (state_77455){
var state_val_77456 = (state_77455[(1)]);
if((state_val_77456 === (1))){
var state_77455__$1 = state_77455;
var statearr_77460_79906 = state_77455__$1;
(statearr_77460_79906[(2)] = null);

(statearr_77460_79906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77456 === (2))){
var state_77455__$1 = state_77455;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77455__$1,(4),jobs);
} else {
if((state_val_77456 === (3))){
var inst_77453 = (state_77455[(2)]);
var state_77455__$1 = state_77455;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77455__$1,inst_77453);
} else {
if((state_val_77456 === (4))){
var inst_77445 = (state_77455[(2)]);
var inst_77446 = async(inst_77445);
var state_77455__$1 = state_77455;
if(cljs.core.truth_(inst_77446)){
var statearr_77465_79907 = state_77455__$1;
(statearr_77465_79907[(1)] = (5));

} else {
var statearr_77466_79908 = state_77455__$1;
(statearr_77466_79908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77456 === (5))){
var state_77455__$1 = state_77455;
var statearr_77467_79909 = state_77455__$1;
(statearr_77467_79909[(2)] = null);

(statearr_77467_79909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77456 === (6))){
var state_77455__$1 = state_77455;
var statearr_77468_79910 = state_77455__$1;
(statearr_77468_79910[(2)] = null);

(statearr_77468_79910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77456 === (7))){
var inst_77451 = (state_77455[(2)]);
var state_77455__$1 = state_77455;
var statearr_77472_79911 = state_77455__$1;
(statearr_77472_79911[(2)] = inst_77451);

(statearr_77472_79911[(1)] = (3));


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
});})(__79881,c__60362__auto___79905,G__77403_79882,G__77403_79883__$1,n__4613__auto___79880,jobs,results,process,async))
;
return ((function (__79881,switch__60121__auto__,c__60362__auto___79905,G__77403_79882,G__77403_79883__$1,n__4613__auto___79880,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__60122__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__60122__auto____0 = (function (){
var statearr_77473 = [null,null,null,null,null,null,null];
(statearr_77473[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__60122__auto__);

(statearr_77473[(1)] = (1));

return statearr_77473;
});
var cljs$core$async$pipeline_STAR__$_state_machine__60122__auto____1 = (function (state_77455){
while(true){
var ret_value__60123__auto__ = (function (){try{while(true){
var result__60124__auto__ = switch__60121__auto__(state_77455);
if(cljs.core.keyword_identical_QMARK_(result__60124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60124__auto__;
}
break;
}
}catch (e77474){var ex__60125__auto__ = e77474;
var statearr_77475_79914 = state_77455;
(statearr_77475_79914[(2)] = ex__60125__auto__);


if(cljs.core.seq((state_77455[(4)]))){
var statearr_77476_79918 = state_77455;
(statearr_77476_79918[(1)] = cljs.core.first((state_77455[(4)])));

} else {
throw ex__60125__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79920 = state_77455;
state_77455 = G__79920;
continue;
} else {
return ret_value__60123__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__60122__auto__ = function(state_77455){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__60122__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__60122__auto____1.call(this,state_77455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__60122__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__60122__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__60122__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__60122__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__60122__auto__;
})()
;})(__79881,switch__60121__auto__,c__60362__auto___79905,G__77403_79882,G__77403_79883__$1,n__4613__auto___79880,jobs,results,process,async))
})();
var state__60364__auto__ = (function (){var statearr_77477 = f__60363__auto__();
(statearr_77477[(6)] = c__60362__auto___79905);

return statearr_77477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60364__auto__);
});})(__79881,c__60362__auto___79905,G__77403_79882,G__77403_79883__$1,n__4613__auto___79880,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77403_79883__$1)].join('')));

}

var G__79921 = (__79881 + (1));
__79881 = G__79921;
continue;
} else {
}
break;
}

var c__60362__auto___79922 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60363__auto__ = (function (){var switch__60121__auto__ = (function (state_77511){
var state_val_77512 = (state_77511[(1)]);
if((state_val_77512 === (7))){
var inst_77505 = (state_77511[(2)]);
var state_77511__$1 = state_77511;
var statearr_77515_79923 = state_77511__$1;
(statearr_77515_79923[(2)] = inst_77505);

(statearr_77515_79923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77512 === (1))){
var state_77511__$1 = state_77511;
var statearr_77516_79926 = state_77511__$1;
(statearr_77516_79926[(2)] = null);

(statearr_77516_79926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77512 === (4))){
var inst_77490 = (state_77511[(7)]);
var inst_77490__$1 = (state_77511[(2)]);
var inst_77491 = (inst_77490__$1 == null);
var state_77511__$1 = (function (){var statearr_77519 = state_77511;
(statearr_77519[(7)] = inst_77490__$1);

return statearr_77519;
})();
if(cljs.core.truth_(inst_77491)){
var statearr_77520_79928 = state_77511__$1;
(statearr_77520_79928[(1)] = (5));

} else {
var statearr_77521_79929 = state_77511__$1;
(statearr_77521_79929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77512 === (6))){
var inst_77490 = (state_77511[(7)]);
var inst_77495 = (state_77511[(8)]);
var inst_77495__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_77496 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_77497 = [inst_77490,inst_77495__$1];
var inst_77498 = (new cljs.core.PersistentVector(null,2,(5),inst_77496,inst_77497,null));
var state_77511__$1 = (function (){var statearr_77522 = state_77511;
(statearr_77522[(8)] = inst_77495__$1);

return statearr_77522;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_77511__$1,(8),jobs,inst_77498);
} else {
if((state_val_77512 === (3))){
var inst_77507 = (state_77511[(2)]);
var state_77511__$1 = state_77511;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77511__$1,inst_77507);
} else {
if((state_val_77512 === (2))){
var state_77511__$1 = state_77511;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77511__$1,(4),from);
} else {
if((state_val_77512 === (9))){
var inst_77502 = (state_77511[(2)]);
var state_77511__$1 = (function (){var statearr_77531 = state_77511;
(statearr_77531[(9)] = inst_77502);

return statearr_77531;
})();
var statearr_77534_79933 = state_77511__$1;
(statearr_77534_79933[(2)] = null);

(statearr_77534_79933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77512 === (5))){
var inst_77493 = cljs.core.async.close_BANG_(jobs);
var state_77511__$1 = state_77511;
var statearr_77535_79938 = state_77511__$1;
(statearr_77535_79938[(2)] = inst_77493);

(statearr_77535_79938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77512 === (8))){
var inst_77495 = (state_77511[(8)]);
var inst_77500 = (state_77511[(2)]);
var state_77511__$1 = (function (){var statearr_77536 = state_77511;
(statearr_77536[(10)] = inst_77500);

return statearr_77536;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_77511__$1,(9),results,inst_77495);
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
var cljs$core$async$pipeline_STAR__$_state_machine__60122__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__60122__auto____0 = (function (){
var statearr_77538 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_77538[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__60122__auto__);

(statearr_77538[(1)] = (1));

return statearr_77538;
});
var cljs$core$async$pipeline_STAR__$_state_machine__60122__auto____1 = (function (state_77511){
while(true){
var ret_value__60123__auto__ = (function (){try{while(true){
var result__60124__auto__ = switch__60121__auto__(state_77511);
if(cljs.core.keyword_identical_QMARK_(result__60124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60124__auto__;
}
break;
}
}catch (e77540){var ex__60125__auto__ = e77540;
var statearr_77541_79948 = state_77511;
(statearr_77541_79948[(2)] = ex__60125__auto__);


if(cljs.core.seq((state_77511[(4)]))){
var statearr_77542_79949 = state_77511;
(statearr_77542_79949[(1)] = cljs.core.first((state_77511[(4)])));

} else {
throw ex__60125__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79950 = state_77511;
state_77511 = G__79950;
continue;
} else {
return ret_value__60123__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__60122__auto__ = function(state_77511){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__60122__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__60122__auto____1.call(this,state_77511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__60122__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__60122__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__60122__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__60122__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__60122__auto__;
})()
})();
var state__60364__auto__ = (function (){var statearr_77547 = f__60363__auto__();
(statearr_77547[(6)] = c__60362__auto___79922);

return statearr_77547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60364__auto__);
}));


var c__60362__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60363__auto__ = (function (){var switch__60121__auto__ = (function (state_77588){
var state_val_77589 = (state_77588[(1)]);
if((state_val_77589 === (7))){
var inst_77584 = (state_77588[(2)]);
var state_77588__$1 = state_77588;
var statearr_77595_79951 = state_77588__$1;
(statearr_77595_79951[(2)] = inst_77584);

(statearr_77595_79951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77589 === (20))){
var state_77588__$1 = state_77588;
var statearr_77601_79952 = state_77588__$1;
(statearr_77601_79952[(2)] = null);

(statearr_77601_79952[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77589 === (1))){
var state_77588__$1 = state_77588;
var statearr_77603_79953 = state_77588__$1;
(statearr_77603_79953[(2)] = null);

(statearr_77603_79953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77589 === (4))){
var inst_77550 = (state_77588[(7)]);
var inst_77550__$1 = (state_77588[(2)]);
var inst_77551 = (inst_77550__$1 == null);
var state_77588__$1 = (function (){var statearr_77604 = state_77588;
(statearr_77604[(7)] = inst_77550__$1);

return statearr_77604;
})();
if(cljs.core.truth_(inst_77551)){
var statearr_77605_79954 = state_77588__$1;
(statearr_77605_79954[(1)] = (5));

} else {
var statearr_77606_79955 = state_77588__$1;
(statearr_77606_79955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77589 === (15))){
var inst_77563 = (state_77588[(8)]);
var state_77588__$1 = state_77588;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_77588__$1,(18),to,inst_77563);
} else {
if((state_val_77589 === (21))){
var inst_77579 = (state_77588[(2)]);
var state_77588__$1 = state_77588;
var statearr_77610_79958 = state_77588__$1;
(statearr_77610_79958[(2)] = inst_77579);

(statearr_77610_79958[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77589 === (13))){
var inst_77581 = (state_77588[(2)]);
var state_77588__$1 = (function (){var statearr_77612 = state_77588;
(statearr_77612[(9)] = inst_77581);

return statearr_77612;
})();
var statearr_77613_79961 = state_77588__$1;
(statearr_77613_79961[(2)] = null);

(statearr_77613_79961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77589 === (6))){
var inst_77550 = (state_77588[(7)]);
var state_77588__$1 = state_77588;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77588__$1,(11),inst_77550);
} else {
if((state_val_77589 === (17))){
var inst_77574 = (state_77588[(2)]);
var state_77588__$1 = state_77588;
if(cljs.core.truth_(inst_77574)){
var statearr_77615_79962 = state_77588__$1;
(statearr_77615_79962[(1)] = (19));

} else {
var statearr_77619_79963 = state_77588__$1;
(statearr_77619_79963[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77589 === (3))){
var inst_77586 = (state_77588[(2)]);
var state_77588__$1 = state_77588;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77588__$1,inst_77586);
} else {
if((state_val_77589 === (12))){
var inst_77560 = (state_77588[(10)]);
var state_77588__$1 = state_77588;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77588__$1,(14),inst_77560);
} else {
if((state_val_77589 === (2))){
var state_77588__$1 = state_77588;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77588__$1,(4),results);
} else {
if((state_val_77589 === (19))){
var state_77588__$1 = state_77588;
var statearr_77624_79964 = state_77588__$1;
(statearr_77624_79964[(2)] = null);

(statearr_77624_79964[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77589 === (11))){
var inst_77560 = (state_77588[(2)]);
var state_77588__$1 = (function (){var statearr_77626 = state_77588;
(statearr_77626[(10)] = inst_77560);

return statearr_77626;
})();
var statearr_77628_79965 = state_77588__$1;
(statearr_77628_79965[(2)] = null);

(statearr_77628_79965[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77589 === (9))){
var state_77588__$1 = state_77588;
var statearr_77629_79966 = state_77588__$1;
(statearr_77629_79966[(2)] = null);

(statearr_77629_79966[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77589 === (5))){
var state_77588__$1 = state_77588;
if(cljs.core.truth_(close_QMARK_)){
var statearr_77632_79970 = state_77588__$1;
(statearr_77632_79970[(1)] = (8));

} else {
var statearr_77633_79971 = state_77588__$1;
(statearr_77633_79971[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77589 === (14))){
var inst_77563 = (state_77588[(8)]);
var inst_77563__$1 = (state_77588[(2)]);
var inst_77566 = (inst_77563__$1 == null);
var inst_77567 = cljs.core.not(inst_77566);
var state_77588__$1 = (function (){var statearr_77635 = state_77588;
(statearr_77635[(8)] = inst_77563__$1);

return statearr_77635;
})();
if(inst_77567){
var statearr_77636_79972 = state_77588__$1;
(statearr_77636_79972[(1)] = (15));

} else {
var statearr_77637_79973 = state_77588__$1;
(statearr_77637_79973[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77589 === (16))){
var state_77588__$1 = state_77588;
var statearr_77639_79974 = state_77588__$1;
(statearr_77639_79974[(2)] = false);

(statearr_77639_79974[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77589 === (10))){
var inst_77557 = (state_77588[(2)]);
var state_77588__$1 = state_77588;
var statearr_77643_79975 = state_77588__$1;
(statearr_77643_79975[(2)] = inst_77557);

(statearr_77643_79975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77589 === (18))){
var inst_77571 = (state_77588[(2)]);
var state_77588__$1 = state_77588;
var statearr_77644_79976 = state_77588__$1;
(statearr_77644_79976[(2)] = inst_77571);

(statearr_77644_79976[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77589 === (8))){
var inst_77554 = cljs.core.async.close_BANG_(to);
var state_77588__$1 = state_77588;
var statearr_77645_79978 = state_77588__$1;
(statearr_77645_79978[(2)] = inst_77554);

(statearr_77645_79978[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__60122__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__60122__auto____0 = (function (){
var statearr_77646 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_77646[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__60122__auto__);

(statearr_77646[(1)] = (1));

return statearr_77646;
});
var cljs$core$async$pipeline_STAR__$_state_machine__60122__auto____1 = (function (state_77588){
while(true){
var ret_value__60123__auto__ = (function (){try{while(true){
var result__60124__auto__ = switch__60121__auto__(state_77588);
if(cljs.core.keyword_identical_QMARK_(result__60124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60124__auto__;
}
break;
}
}catch (e77647){var ex__60125__auto__ = e77647;
var statearr_77648_79979 = state_77588;
(statearr_77648_79979[(2)] = ex__60125__auto__);


if(cljs.core.seq((state_77588[(4)]))){
var statearr_77649_79980 = state_77588;
(statearr_77649_79980[(1)] = cljs.core.first((state_77588[(4)])));

} else {
throw ex__60125__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79981 = state_77588;
state_77588 = G__79981;
continue;
} else {
return ret_value__60123__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__60122__auto__ = function(state_77588){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__60122__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__60122__auto____1.call(this,state_77588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__60122__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__60122__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__60122__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__60122__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__60122__auto__;
})()
})();
var state__60364__auto__ = (function (){var statearr_77651 = f__60363__auto__();
(statearr_77651[(6)] = c__60362__auto__);

return statearr_77651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60364__auto__);
}));

return c__60362__auto__;
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
var G__77654 = arguments.length;
switch (G__77654) {
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
var G__77658 = arguments.length;
switch (G__77658) {
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
var G__77661 = arguments.length;
switch (G__77661) {
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
var c__60362__auto___79985 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60363__auto__ = (function (){var switch__60121__auto__ = (function (state_77690){
var state_val_77691 = (state_77690[(1)]);
if((state_val_77691 === (7))){
var inst_77686 = (state_77690[(2)]);
var state_77690__$1 = state_77690;
var statearr_77693_79986 = state_77690__$1;
(statearr_77693_79986[(2)] = inst_77686);

(statearr_77693_79986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77691 === (1))){
var state_77690__$1 = state_77690;
var statearr_77694_79987 = state_77690__$1;
(statearr_77694_79987[(2)] = null);

(statearr_77694_79987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77691 === (4))){
var inst_77664 = (state_77690[(7)]);
var inst_77664__$1 = (state_77690[(2)]);
var inst_77667 = (inst_77664__$1 == null);
var state_77690__$1 = (function (){var statearr_77697 = state_77690;
(statearr_77697[(7)] = inst_77664__$1);

return statearr_77697;
})();
if(cljs.core.truth_(inst_77667)){
var statearr_77698_79988 = state_77690__$1;
(statearr_77698_79988[(1)] = (5));

} else {
var statearr_77699_79989 = state_77690__$1;
(statearr_77699_79989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77691 === (13))){
var state_77690__$1 = state_77690;
var statearr_77700_79993 = state_77690__$1;
(statearr_77700_79993[(2)] = null);

(statearr_77700_79993[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77691 === (6))){
var inst_77664 = (state_77690[(7)]);
var inst_77672 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_77664) : p.call(null,inst_77664));
var state_77690__$1 = state_77690;
if(cljs.core.truth_(inst_77672)){
var statearr_77701_79994 = state_77690__$1;
(statearr_77701_79994[(1)] = (9));

} else {
var statearr_77702_79995 = state_77690__$1;
(statearr_77702_79995[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77691 === (3))){
var inst_77688 = (state_77690[(2)]);
var state_77690__$1 = state_77690;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77690__$1,inst_77688);
} else {
if((state_val_77691 === (12))){
var state_77690__$1 = state_77690;
var statearr_77703_79996 = state_77690__$1;
(statearr_77703_79996[(2)] = null);

(statearr_77703_79996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77691 === (2))){
var state_77690__$1 = state_77690;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77690__$1,(4),ch);
} else {
if((state_val_77691 === (11))){
var inst_77664 = (state_77690[(7)]);
var inst_77676 = (state_77690[(2)]);
var state_77690__$1 = state_77690;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_77690__$1,(8),inst_77676,inst_77664);
} else {
if((state_val_77691 === (9))){
var state_77690__$1 = state_77690;
var statearr_77705_79998 = state_77690__$1;
(statearr_77705_79998[(2)] = tc);

(statearr_77705_79998[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77691 === (5))){
var inst_77669 = cljs.core.async.close_BANG_(tc);
var inst_77670 = cljs.core.async.close_BANG_(fc);
var state_77690__$1 = (function (){var statearr_77707 = state_77690;
(statearr_77707[(8)] = inst_77669);

return statearr_77707;
})();
var statearr_77709_80000 = state_77690__$1;
(statearr_77709_80000[(2)] = inst_77670);

(statearr_77709_80000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77691 === (14))){
var inst_77683 = (state_77690[(2)]);
var state_77690__$1 = state_77690;
var statearr_77710_80001 = state_77690__$1;
(statearr_77710_80001[(2)] = inst_77683);

(statearr_77710_80001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77691 === (10))){
var state_77690__$1 = state_77690;
var statearr_77711_80002 = state_77690__$1;
(statearr_77711_80002[(2)] = fc);

(statearr_77711_80002[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77691 === (8))){
var inst_77678 = (state_77690[(2)]);
var state_77690__$1 = state_77690;
if(cljs.core.truth_(inst_77678)){
var statearr_77712_80004 = state_77690__$1;
(statearr_77712_80004[(1)] = (12));

} else {
var statearr_77713_80005 = state_77690__$1;
(statearr_77713_80005[(1)] = (13));

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
var cljs$core$async$state_machine__60122__auto__ = null;
var cljs$core$async$state_machine__60122__auto____0 = (function (){
var statearr_77714 = [null,null,null,null,null,null,null,null,null];
(statearr_77714[(0)] = cljs$core$async$state_machine__60122__auto__);

(statearr_77714[(1)] = (1));

return statearr_77714;
});
var cljs$core$async$state_machine__60122__auto____1 = (function (state_77690){
while(true){
var ret_value__60123__auto__ = (function (){try{while(true){
var result__60124__auto__ = switch__60121__auto__(state_77690);
if(cljs.core.keyword_identical_QMARK_(result__60124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60124__auto__;
}
break;
}
}catch (e77715){var ex__60125__auto__ = e77715;
var statearr_77716_80007 = state_77690;
(statearr_77716_80007[(2)] = ex__60125__auto__);


if(cljs.core.seq((state_77690[(4)]))){
var statearr_77717_80008 = state_77690;
(statearr_77717_80008[(1)] = cljs.core.first((state_77690[(4)])));

} else {
throw ex__60125__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80009 = state_77690;
state_77690 = G__80009;
continue;
} else {
return ret_value__60123__auto__;
}
break;
}
});
cljs$core$async$state_machine__60122__auto__ = function(state_77690){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60122__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60122__auto____1.call(this,state_77690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60122__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60122__auto____0;
cljs$core$async$state_machine__60122__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60122__auto____1;
return cljs$core$async$state_machine__60122__auto__;
})()
})();
var state__60364__auto__ = (function (){var statearr_77720 = f__60363__auto__();
(statearr_77720[(6)] = c__60362__auto___79985);

return statearr_77720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60364__auto__);
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
var c__60362__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60363__auto__ = (function (){var switch__60121__auto__ = (function (state_77748){
var state_val_77749 = (state_77748[(1)]);
if((state_val_77749 === (7))){
var inst_77744 = (state_77748[(2)]);
var state_77748__$1 = state_77748;
var statearr_77754_80012 = state_77748__$1;
(statearr_77754_80012[(2)] = inst_77744);

(statearr_77754_80012[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77749 === (1))){
var inst_77724 = init;
var inst_77725 = inst_77724;
var state_77748__$1 = (function (){var statearr_77755 = state_77748;
(statearr_77755[(7)] = inst_77725);

return statearr_77755;
})();
var statearr_77756_80013 = state_77748__$1;
(statearr_77756_80013[(2)] = null);

(statearr_77756_80013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77749 === (4))){
var inst_77729 = (state_77748[(8)]);
var inst_77729__$1 = (state_77748[(2)]);
var inst_77731 = (inst_77729__$1 == null);
var state_77748__$1 = (function (){var statearr_77757 = state_77748;
(statearr_77757[(8)] = inst_77729__$1);

return statearr_77757;
})();
if(cljs.core.truth_(inst_77731)){
var statearr_77758_80015 = state_77748__$1;
(statearr_77758_80015[(1)] = (5));

} else {
var statearr_77759_80016 = state_77748__$1;
(statearr_77759_80016[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77749 === (6))){
var inst_77725 = (state_77748[(7)]);
var inst_77729 = (state_77748[(8)]);
var inst_77735 = (state_77748[(9)]);
var inst_77735__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_77725,inst_77729) : f.call(null,inst_77725,inst_77729));
var inst_77736 = cljs.core.reduced_QMARK_(inst_77735__$1);
var state_77748__$1 = (function (){var statearr_77762 = state_77748;
(statearr_77762[(9)] = inst_77735__$1);

return statearr_77762;
})();
if(inst_77736){
var statearr_77763_80019 = state_77748__$1;
(statearr_77763_80019[(1)] = (8));

} else {
var statearr_77764_80020 = state_77748__$1;
(statearr_77764_80020[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77749 === (3))){
var inst_77746 = (state_77748[(2)]);
var state_77748__$1 = state_77748;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77748__$1,inst_77746);
} else {
if((state_val_77749 === (2))){
var state_77748__$1 = state_77748;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77748__$1,(4),ch);
} else {
if((state_val_77749 === (9))){
var inst_77735 = (state_77748[(9)]);
var inst_77725 = inst_77735;
var state_77748__$1 = (function (){var statearr_77766 = state_77748;
(statearr_77766[(7)] = inst_77725);

return statearr_77766;
})();
var statearr_77767_80022 = state_77748__$1;
(statearr_77767_80022[(2)] = null);

(statearr_77767_80022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77749 === (5))){
var inst_77725 = (state_77748[(7)]);
var state_77748__$1 = state_77748;
var statearr_77772_80025 = state_77748__$1;
(statearr_77772_80025[(2)] = inst_77725);

(statearr_77772_80025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77749 === (10))){
var inst_77742 = (state_77748[(2)]);
var state_77748__$1 = state_77748;
var statearr_77776_80026 = state_77748__$1;
(statearr_77776_80026[(2)] = inst_77742);

(statearr_77776_80026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77749 === (8))){
var inst_77735 = (state_77748[(9)]);
var inst_77738 = cljs.core.deref(inst_77735);
var state_77748__$1 = state_77748;
var statearr_77777_80028 = state_77748__$1;
(statearr_77777_80028[(2)] = inst_77738);

(statearr_77777_80028[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__60122__auto__ = null;
var cljs$core$async$reduce_$_state_machine__60122__auto____0 = (function (){
var statearr_77781 = [null,null,null,null,null,null,null,null,null,null];
(statearr_77781[(0)] = cljs$core$async$reduce_$_state_machine__60122__auto__);

(statearr_77781[(1)] = (1));

return statearr_77781;
});
var cljs$core$async$reduce_$_state_machine__60122__auto____1 = (function (state_77748){
while(true){
var ret_value__60123__auto__ = (function (){try{while(true){
var result__60124__auto__ = switch__60121__auto__(state_77748);
if(cljs.core.keyword_identical_QMARK_(result__60124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60124__auto__;
}
break;
}
}catch (e77782){var ex__60125__auto__ = e77782;
var statearr_77783_80030 = state_77748;
(statearr_77783_80030[(2)] = ex__60125__auto__);


if(cljs.core.seq((state_77748[(4)]))){
var statearr_77787_80031 = state_77748;
(statearr_77787_80031[(1)] = cljs.core.first((state_77748[(4)])));

} else {
throw ex__60125__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80032 = state_77748;
state_77748 = G__80032;
continue;
} else {
return ret_value__60123__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__60122__auto__ = function(state_77748){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__60122__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__60122__auto____1.call(this,state_77748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__60122__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__60122__auto____0;
cljs$core$async$reduce_$_state_machine__60122__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__60122__auto____1;
return cljs$core$async$reduce_$_state_machine__60122__auto__;
})()
})();
var state__60364__auto__ = (function (){var statearr_77792 = f__60363__auto__();
(statearr_77792[(6)] = c__60362__auto__);

return statearr_77792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60364__auto__);
}));

return c__60362__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__60362__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60363__auto__ = (function (){var switch__60121__auto__ = (function (state_77814){
var state_val_77815 = (state_77814[(1)]);
if((state_val_77815 === (1))){
var inst_77801 = cljs.core.async.reduce(f__$1,init,ch);
var state_77814__$1 = state_77814;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77814__$1,(2),inst_77801);
} else {
if((state_val_77815 === (2))){
var inst_77803 = (state_77814[(2)]);
var inst_77808 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_77803) : f__$1.call(null,inst_77803));
var state_77814__$1 = state_77814;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77814__$1,inst_77808);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__60122__auto__ = null;
var cljs$core$async$transduce_$_state_machine__60122__auto____0 = (function (){
var statearr_77816 = [null,null,null,null,null,null,null];
(statearr_77816[(0)] = cljs$core$async$transduce_$_state_machine__60122__auto__);

(statearr_77816[(1)] = (1));

return statearr_77816;
});
var cljs$core$async$transduce_$_state_machine__60122__auto____1 = (function (state_77814){
while(true){
var ret_value__60123__auto__ = (function (){try{while(true){
var result__60124__auto__ = switch__60121__auto__(state_77814);
if(cljs.core.keyword_identical_QMARK_(result__60124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60124__auto__;
}
break;
}
}catch (e77817){var ex__60125__auto__ = e77817;
var statearr_77818_80035 = state_77814;
(statearr_77818_80035[(2)] = ex__60125__auto__);


if(cljs.core.seq((state_77814[(4)]))){
var statearr_77819_80036 = state_77814;
(statearr_77819_80036[(1)] = cljs.core.first((state_77814[(4)])));

} else {
throw ex__60125__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80037 = state_77814;
state_77814 = G__80037;
continue;
} else {
return ret_value__60123__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__60122__auto__ = function(state_77814){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__60122__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__60122__auto____1.call(this,state_77814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__60122__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__60122__auto____0;
cljs$core$async$transduce_$_state_machine__60122__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__60122__auto____1;
return cljs$core$async$transduce_$_state_machine__60122__auto__;
})()
})();
var state__60364__auto__ = (function (){var statearr_77820 = f__60363__auto__();
(statearr_77820[(6)] = c__60362__auto__);

return statearr_77820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60364__auto__);
}));

return c__60362__auto__;
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
var G__77825 = arguments.length;
switch (G__77825) {
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
var c__60362__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60363__auto__ = (function (){var switch__60121__auto__ = (function (state_77853){
var state_val_77854 = (state_77853[(1)]);
if((state_val_77854 === (7))){
var inst_77834 = (state_77853[(2)]);
var state_77853__$1 = state_77853;
var statearr_77855_80041 = state_77853__$1;
(statearr_77855_80041[(2)] = inst_77834);

(statearr_77855_80041[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77854 === (1))){
var inst_77827 = cljs.core.seq(coll);
var inst_77828 = inst_77827;
var state_77853__$1 = (function (){var statearr_77856 = state_77853;
(statearr_77856[(7)] = inst_77828);

return statearr_77856;
})();
var statearr_77857_80042 = state_77853__$1;
(statearr_77857_80042[(2)] = null);

(statearr_77857_80042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77854 === (4))){
var inst_77828 = (state_77853[(7)]);
var inst_77832 = cljs.core.first(inst_77828);
var state_77853__$1 = state_77853;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_77853__$1,(7),ch,inst_77832);
} else {
if((state_val_77854 === (13))){
var inst_77847 = (state_77853[(2)]);
var state_77853__$1 = state_77853;
var statearr_77859_80043 = state_77853__$1;
(statearr_77859_80043[(2)] = inst_77847);

(statearr_77859_80043[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77854 === (6))){
var inst_77837 = (state_77853[(2)]);
var state_77853__$1 = state_77853;
if(cljs.core.truth_(inst_77837)){
var statearr_77862_80044 = state_77853__$1;
(statearr_77862_80044[(1)] = (8));

} else {
var statearr_77863_80045 = state_77853__$1;
(statearr_77863_80045[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77854 === (3))){
var inst_77851 = (state_77853[(2)]);
var state_77853__$1 = state_77853;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77853__$1,inst_77851);
} else {
if((state_val_77854 === (12))){
var state_77853__$1 = state_77853;
var statearr_77865_80046 = state_77853__$1;
(statearr_77865_80046[(2)] = null);

(statearr_77865_80046[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77854 === (2))){
var inst_77828 = (state_77853[(7)]);
var state_77853__$1 = state_77853;
if(cljs.core.truth_(inst_77828)){
var statearr_77869_80047 = state_77853__$1;
(statearr_77869_80047[(1)] = (4));

} else {
var statearr_77870_80049 = state_77853__$1;
(statearr_77870_80049[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77854 === (11))){
var inst_77844 = cljs.core.async.close_BANG_(ch);
var state_77853__$1 = state_77853;
var statearr_77873_80051 = state_77853__$1;
(statearr_77873_80051[(2)] = inst_77844);

(statearr_77873_80051[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77854 === (9))){
var state_77853__$1 = state_77853;
if(cljs.core.truth_(close_QMARK_)){
var statearr_77874_80053 = state_77853__$1;
(statearr_77874_80053[(1)] = (11));

} else {
var statearr_77878_80055 = state_77853__$1;
(statearr_77878_80055[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77854 === (5))){
var inst_77828 = (state_77853[(7)]);
var state_77853__$1 = state_77853;
var statearr_77881_80057 = state_77853__$1;
(statearr_77881_80057[(2)] = inst_77828);

(statearr_77881_80057[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77854 === (10))){
var inst_77849 = (state_77853[(2)]);
var state_77853__$1 = state_77853;
var statearr_77883_80060 = state_77853__$1;
(statearr_77883_80060[(2)] = inst_77849);

(statearr_77883_80060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77854 === (8))){
var inst_77828 = (state_77853[(7)]);
var inst_77840 = cljs.core.next(inst_77828);
var inst_77828__$1 = inst_77840;
var state_77853__$1 = (function (){var statearr_77886 = state_77853;
(statearr_77886[(7)] = inst_77828__$1);

return statearr_77886;
})();
var statearr_77887_80065 = state_77853__$1;
(statearr_77887_80065[(2)] = null);

(statearr_77887_80065[(1)] = (2));


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
var cljs$core$async$state_machine__60122__auto__ = null;
var cljs$core$async$state_machine__60122__auto____0 = (function (){
var statearr_77888 = [null,null,null,null,null,null,null,null];
(statearr_77888[(0)] = cljs$core$async$state_machine__60122__auto__);

(statearr_77888[(1)] = (1));

return statearr_77888;
});
var cljs$core$async$state_machine__60122__auto____1 = (function (state_77853){
while(true){
var ret_value__60123__auto__ = (function (){try{while(true){
var result__60124__auto__ = switch__60121__auto__(state_77853);
if(cljs.core.keyword_identical_QMARK_(result__60124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60124__auto__;
}
break;
}
}catch (e77889){var ex__60125__auto__ = e77889;
var statearr_77890_80068 = state_77853;
(statearr_77890_80068[(2)] = ex__60125__auto__);


if(cljs.core.seq((state_77853[(4)]))){
var statearr_77891_80069 = state_77853;
(statearr_77891_80069[(1)] = cljs.core.first((state_77853[(4)])));

} else {
throw ex__60125__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80070 = state_77853;
state_77853 = G__80070;
continue;
} else {
return ret_value__60123__auto__;
}
break;
}
});
cljs$core$async$state_machine__60122__auto__ = function(state_77853){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60122__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60122__auto____1.call(this,state_77853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60122__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60122__auto____0;
cljs$core$async$state_machine__60122__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60122__auto____1;
return cljs$core$async$state_machine__60122__auto__;
})()
})();
var state__60364__auto__ = (function (){var statearr_77892 = f__60363__auto__();
(statearr_77892[(6)] = c__60362__auto__);

return statearr_77892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60364__auto__);
}));

return c__60362__auto__;
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
var G__77895 = arguments.length;
switch (G__77895) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_80075 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_80075(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_80077 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_80077(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_80080 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_80080(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_80083 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_80083(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async77910 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async77910 = (function (ch,cs,meta77911){
this.ch = ch;
this.cs = cs;
this.meta77911 = meta77911;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async77910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77912,meta77911__$1){
var self__ = this;
var _77912__$1 = this;
return (new cljs.core.async.t_cljs$core$async77910(self__.ch,self__.cs,meta77911__$1));
}));

(cljs.core.async.t_cljs$core$async77910.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77912){
var self__ = this;
var _77912__$1 = this;
return self__.meta77911;
}));

(cljs.core.async.t_cljs$core$async77910.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async77910.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async77910.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async77910.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async77910.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async77910.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async77910.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta77911","meta77911",1400690324,null)], null);
}));

(cljs.core.async.t_cljs$core$async77910.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async77910.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async77910");

(cljs.core.async.t_cljs$core$async77910.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async77910");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async77910.
 */
cljs.core.async.__GT_t_cljs$core$async77910 = (function cljs$core$async$mult_$___GT_t_cljs$core$async77910(ch__$1,cs__$1,meta77911){
return (new cljs.core.async.t_cljs$core$async77910(ch__$1,cs__$1,meta77911));
});

}

return (new cljs.core.async.t_cljs$core$async77910(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__60362__auto___80090 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60363__auto__ = (function (){var switch__60121__auto__ = (function (state_78072){
var state_val_78073 = (state_78072[(1)]);
if((state_val_78073 === (7))){
var inst_78068 = (state_78072[(2)]);
var state_78072__$1 = state_78072;
var statearr_78075_80091 = state_78072__$1;
(statearr_78075_80091[(2)] = inst_78068);

(statearr_78075_80091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78073 === (20))){
var inst_77959 = (state_78072[(7)]);
var inst_77974 = cljs.core.first(inst_77959);
var inst_77975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_77974,(0),null);
var inst_77976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_77974,(1),null);
var state_78072__$1 = (function (){var statearr_78080 = state_78072;
(statearr_78080[(8)] = inst_77975);

return statearr_78080;
})();
if(cljs.core.truth_(inst_77976)){
var statearr_78081_80092 = state_78072__$1;
(statearr_78081_80092[(1)] = (22));

} else {
var statearr_78082_80094 = state_78072__$1;
(statearr_78082_80094[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78073 === (27))){
var inst_78019 = (state_78072[(9)]);
var inst_78007 = (state_78072[(10)]);
var inst_77926 = (state_78072[(11)]);
var inst_78009 = (state_78072[(12)]);
var inst_78019__$1 = cljs.core._nth(inst_78007,inst_78009);
var inst_78020 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_78019__$1,inst_77926,done);
var state_78072__$1 = (function (){var statearr_78083 = state_78072;
(statearr_78083[(9)] = inst_78019__$1);

return statearr_78083;
})();
if(cljs.core.truth_(inst_78020)){
var statearr_78084_80095 = state_78072__$1;
(statearr_78084_80095[(1)] = (30));

} else {
var statearr_78088_80096 = state_78072__$1;
(statearr_78088_80096[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78073 === (1))){
var state_78072__$1 = state_78072;
var statearr_78090_80097 = state_78072__$1;
(statearr_78090_80097[(2)] = null);

(statearr_78090_80097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78073 === (24))){
var inst_77959 = (state_78072[(7)]);
var inst_77982 = (state_78072[(2)]);
var inst_77983 = cljs.core.next(inst_77959);
var inst_77935 = inst_77983;
var inst_77936 = null;
var inst_77937 = (0);
var inst_77938 = (0);
var state_78072__$1 = (function (){var statearr_78092 = state_78072;
(statearr_78092[(13)] = inst_77936);

(statearr_78092[(14)] = inst_77937);

(statearr_78092[(15)] = inst_77982);

(statearr_78092[(16)] = inst_77935);

(statearr_78092[(17)] = inst_77938);

return statearr_78092;
})();
var statearr_78093_80100 = state_78072__$1;
(statearr_78093_80100[(2)] = null);

(statearr_78093_80100[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78073 === (39))){
var state_78072__$1 = state_78072;
var statearr_78098_80101 = state_78072__$1;
(statearr_78098_80101[(2)] = null);

(statearr_78098_80101[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78073 === (4))){
var inst_77926 = (state_78072[(11)]);
var inst_77926__$1 = (state_78072[(2)]);
var inst_77927 = (inst_77926__$1 == null);
var state_78072__$1 = (function (){var statearr_78102 = state_78072;
(statearr_78102[(11)] = inst_77926__$1);

return statearr_78102;
})();
if(cljs.core.truth_(inst_77927)){
var statearr_78103_80102 = state_78072__$1;
(statearr_78103_80102[(1)] = (5));

} else {
var statearr_78104_80103 = state_78072__$1;
(statearr_78104_80103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78073 === (15))){
var inst_77936 = (state_78072[(13)]);
var inst_77937 = (state_78072[(14)]);
var inst_77935 = (state_78072[(16)]);
var inst_77938 = (state_78072[(17)]);
var inst_77953 = (state_78072[(2)]);
var inst_77954 = (inst_77938 + (1));
var tmp78095 = inst_77936;
var tmp78096 = inst_77937;
var tmp78097 = inst_77935;
var inst_77935__$1 = tmp78097;
var inst_77936__$1 = tmp78095;
var inst_77937__$1 = tmp78096;
var inst_77938__$1 = inst_77954;
var state_78072__$1 = (function (){var statearr_78107 = state_78072;
(statearr_78107[(13)] = inst_77936__$1);

(statearr_78107[(18)] = inst_77953);

(statearr_78107[(14)] = inst_77937__$1);

(statearr_78107[(16)] = inst_77935__$1);

(statearr_78107[(17)] = inst_77938__$1);

return statearr_78107;
})();
var statearr_78108_80106 = state_78072__$1;
(statearr_78108_80106[(2)] = null);

(statearr_78108_80106[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78073 === (21))){
var inst_77986 = (state_78072[(2)]);
var state_78072__$1 = state_78072;
var statearr_78112_80107 = state_78072__$1;
(statearr_78112_80107[(2)] = inst_77986);

(statearr_78112_80107[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78073 === (31))){
var inst_78019 = (state_78072[(9)]);
var inst_78023 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_78019);
var state_78072__$1 = state_78072;
var statearr_78113_80108 = state_78072__$1;
(statearr_78113_80108[(2)] = inst_78023);

(statearr_78113_80108[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78073 === (32))){
var inst_78008 = (state_78072[(19)]);
var inst_78006 = (state_78072[(20)]);
var inst_78007 = (state_78072[(10)]);
var inst_78009 = (state_78072[(12)]);
var inst_78025 = (state_78072[(2)]);
var inst_78026 = (inst_78009 + (1));
var tmp78109 = inst_78008;
var tmp78110 = inst_78006;
var tmp78111 = inst_78007;
var inst_78006__$1 = tmp78110;
var inst_78007__$1 = tmp78111;
var inst_78008__$1 = tmp78109;
var inst_78009__$1 = inst_78026;
var state_78072__$1 = (function (){var statearr_78117 = state_78072;
(statearr_78117[(19)] = inst_78008__$1);

(statearr_78117[(20)] = inst_78006__$1);

(statearr_78117[(10)] = inst_78007__$1);

(statearr_78117[(12)] = inst_78009__$1);

(statearr_78117[(21)] = inst_78025);

return statearr_78117;
})();
var statearr_78119_80109 = state_78072__$1;
(statearr_78119_80109[(2)] = null);

(statearr_78119_80109[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78073 === (40))){
var inst_78040 = (state_78072[(22)]);
var inst_78045 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_78040);
var state_78072__$1 = state_78072;
var statearr_78122_80110 = state_78072__$1;
(statearr_78122_80110[(2)] = inst_78045);

(statearr_78122_80110[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78073 === (33))){
var inst_78029 = (state_78072[(23)]);
var inst_78031 = cljs.core.chunked_seq_QMARK_(inst_78029);
var state_78072__$1 = state_78072;
if(inst_78031){
var statearr_78124_80111 = state_78072__$1;
(statearr_78124_80111[(1)] = (36));

} else {
var statearr_78125_80112 = state_78072__$1;
(statearr_78125_80112[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78073 === (13))){
var inst_77947 = (state_78072[(24)]);
var inst_77950 = cljs.core.async.close_BANG_(inst_77947);
var state_78072__$1 = state_78072;
var statearr_78130_80113 = state_78072__$1;
(statearr_78130_80113[(2)] = inst_77950);

(statearr_78130_80113[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78073 === (22))){
var inst_77975 = (state_78072[(8)]);
var inst_77979 = cljs.core.async.close_BANG_(inst_77975);
var state_78072__$1 = state_78072;
var statearr_78132_80114 = state_78072__$1;
(statearr_78132_80114[(2)] = inst_77979);

(statearr_78132_80114[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78073 === (36))){
var inst_78029 = (state_78072[(23)]);
var inst_78034 = cljs.core.chunk_first(inst_78029);
var inst_78035 = cljs.core.chunk_rest(inst_78029);
var inst_78037 = cljs.core.count(inst_78034);
var inst_78006 = inst_78035;
var inst_78007 = inst_78034;
var inst_78008 = inst_78037;
var inst_78009 = (0);
var state_78072__$1 = (function (){var statearr_78136 = state_78072;
(statearr_78136[(19)] = inst_78008);

(statearr_78136[(20)] = inst_78006);

(statearr_78136[(10)] = inst_78007);

(statearr_78136[(12)] = inst_78009);

return statearr_78136;
})();
var statearr_78138_80115 = state_78072__$1;
(statearr_78138_80115[(2)] = null);

(statearr_78138_80115[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78073 === (41))){
var inst_78029 = (state_78072[(23)]);
var inst_78047 = (state_78072[(2)]);
var inst_78048 = cljs.core.next(inst_78029);
var inst_78006 = inst_78048;
var inst_78007 = null;
var inst_78008 = (0);
var inst_78009 = (0);
var state_78072__$1 = (function (){var statearr_78142 = state_78072;
(statearr_78142[(25)] = inst_78047);

(statearr_78142[(19)] = inst_78008);

(statearr_78142[(20)] = inst_78006);

(statearr_78142[(10)] = inst_78007);

(statearr_78142[(12)] = inst_78009);

return statearr_78142;
})();
var statearr_78143_80116 = state_78072__$1;
(statearr_78143_80116[(2)] = null);

(statearr_78143_80116[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78073 === (43))){
var state_78072__$1 = state_78072;
var statearr_78144_80117 = state_78072__$1;
(statearr_78144_80117[(2)] = null);

(statearr_78144_80117[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78073 === (29))){
var inst_78056 = (state_78072[(2)]);
var state_78072__$1 = state_78072;
var statearr_78145_80118 = state_78072__$1;
(statearr_78145_80118[(2)] = inst_78056);

(statearr_78145_80118[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78073 === (44))){
var inst_78065 = (state_78072[(2)]);
var state_78072__$1 = (function (){var statearr_78147 = state_78072;
(statearr_78147[(26)] = inst_78065);

return statearr_78147;
})();
var statearr_78152_80119 = state_78072__$1;
(statearr_78152_80119[(2)] = null);

(statearr_78152_80119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78073 === (6))){
var inst_77996 = (state_78072[(27)]);
var inst_77995 = cljs.core.deref(cs);
var inst_77996__$1 = cljs.core.keys(inst_77995);
var inst_77998 = cljs.core.count(inst_77996__$1);
var inst_77999 = cljs.core.reset_BANG_(dctr,inst_77998);
var inst_78005 = cljs.core.seq(inst_77996__$1);
var inst_78006 = inst_78005;
var inst_78007 = null;
var inst_78008 = (0);
var inst_78009 = (0);
var state_78072__$1 = (function (){var statearr_78160 = state_78072;
(statearr_78160[(28)] = inst_77999);

(statearr_78160[(19)] = inst_78008);

(statearr_78160[(20)] = inst_78006);

(statearr_78160[(27)] = inst_77996__$1);

(statearr_78160[(10)] = inst_78007);

(statearr_78160[(12)] = inst_78009);

return statearr_78160;
})();
var statearr_78164_80121 = state_78072__$1;
(statearr_78164_80121[(2)] = null);

(statearr_78164_80121[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78073 === (28))){
var inst_78006 = (state_78072[(20)]);
var inst_78029 = (state_78072[(23)]);
var inst_78029__$1 = cljs.core.seq(inst_78006);
var state_78072__$1 = (function (){var statearr_78179 = state_78072;
(statearr_78179[(23)] = inst_78029__$1);

return statearr_78179;
})();
if(inst_78029__$1){
var statearr_78180_80126 = state_78072__$1;
(statearr_78180_80126[(1)] = (33));

} else {
var statearr_78181_80127 = state_78072__$1;
(statearr_78181_80127[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78073 === (25))){
var inst_78008 = (state_78072[(19)]);
var inst_78009 = (state_78072[(12)]);
var inst_78012 = (inst_78009 < inst_78008);
var inst_78013 = inst_78012;
var state_78072__$1 = state_78072;
if(cljs.core.truth_(inst_78013)){
var statearr_78185_80131 = state_78072__$1;
(statearr_78185_80131[(1)] = (27));

} else {
var statearr_78186_80132 = state_78072__$1;
(statearr_78186_80132[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78073 === (34))){
var state_78072__$1 = state_78072;
var statearr_78187_80133 = state_78072__$1;
(statearr_78187_80133[(2)] = null);

(statearr_78187_80133[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78073 === (17))){
var state_78072__$1 = state_78072;
var statearr_78189_80137 = state_78072__$1;
(statearr_78189_80137[(2)] = null);

(statearr_78189_80137[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78073 === (3))){
var inst_78070 = (state_78072[(2)]);
var state_78072__$1 = state_78072;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78072__$1,inst_78070);
} else {
if((state_val_78073 === (12))){
var inst_77991 = (state_78072[(2)]);
var state_78072__$1 = state_78072;
var statearr_78193_80141 = state_78072__$1;
(statearr_78193_80141[(2)] = inst_77991);

(statearr_78193_80141[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78073 === (2))){
var state_78072__$1 = state_78072;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78072__$1,(4),ch);
} else {
if((state_val_78073 === (23))){
var state_78072__$1 = state_78072;
var statearr_78195_80142 = state_78072__$1;
(statearr_78195_80142[(2)] = null);

(statearr_78195_80142[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78073 === (35))){
var inst_78054 = (state_78072[(2)]);
var state_78072__$1 = state_78072;
var statearr_78196_80146 = state_78072__$1;
(statearr_78196_80146[(2)] = inst_78054);

(statearr_78196_80146[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78073 === (19))){
var inst_77959 = (state_78072[(7)]);
var inst_77963 = cljs.core.chunk_first(inst_77959);
var inst_77965 = cljs.core.chunk_rest(inst_77959);
var inst_77966 = cljs.core.count(inst_77963);
var inst_77935 = inst_77965;
var inst_77936 = inst_77963;
var inst_77937 = inst_77966;
var inst_77938 = (0);
var state_78072__$1 = (function (){var statearr_78197 = state_78072;
(statearr_78197[(13)] = inst_77936);

(statearr_78197[(14)] = inst_77937);

(statearr_78197[(16)] = inst_77935);

(statearr_78197[(17)] = inst_77938);

return statearr_78197;
})();
var statearr_78199_80147 = state_78072__$1;
(statearr_78199_80147[(2)] = null);

(statearr_78199_80147[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78073 === (11))){
var inst_77959 = (state_78072[(7)]);
var inst_77935 = (state_78072[(16)]);
var inst_77959__$1 = cljs.core.seq(inst_77935);
var state_78072__$1 = (function (){var statearr_78201 = state_78072;
(statearr_78201[(7)] = inst_77959__$1);

return statearr_78201;
})();
if(inst_77959__$1){
var statearr_78202_80149 = state_78072__$1;
(statearr_78202_80149[(1)] = (16));

} else {
var statearr_78204_80150 = state_78072__$1;
(statearr_78204_80150[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78073 === (9))){
var inst_77993 = (state_78072[(2)]);
var state_78072__$1 = state_78072;
var statearr_78205_80151 = state_78072__$1;
(statearr_78205_80151[(2)] = inst_77993);

(statearr_78205_80151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78073 === (5))){
var inst_77933 = cljs.core.deref(cs);
var inst_77934 = cljs.core.seq(inst_77933);
var inst_77935 = inst_77934;
var inst_77936 = null;
var inst_77937 = (0);
var inst_77938 = (0);
var state_78072__$1 = (function (){var statearr_78210 = state_78072;
(statearr_78210[(13)] = inst_77936);

(statearr_78210[(14)] = inst_77937);

(statearr_78210[(16)] = inst_77935);

(statearr_78210[(17)] = inst_77938);

return statearr_78210;
})();
var statearr_78211_80153 = state_78072__$1;
(statearr_78211_80153[(2)] = null);

(statearr_78211_80153[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78073 === (14))){
var state_78072__$1 = state_78072;
var statearr_78212_80154 = state_78072__$1;
(statearr_78212_80154[(2)] = null);

(statearr_78212_80154[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78073 === (45))){
var inst_78062 = (state_78072[(2)]);
var state_78072__$1 = state_78072;
var statearr_78213_80155 = state_78072__$1;
(statearr_78213_80155[(2)] = inst_78062);

(statearr_78213_80155[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78073 === (26))){
var inst_77996 = (state_78072[(27)]);
var inst_78058 = (state_78072[(2)]);
var inst_78059 = cljs.core.seq(inst_77996);
var state_78072__$1 = (function (){var statearr_78214 = state_78072;
(statearr_78214[(29)] = inst_78058);

return statearr_78214;
})();
if(inst_78059){
var statearr_78215_80159 = state_78072__$1;
(statearr_78215_80159[(1)] = (42));

} else {
var statearr_78216_80160 = state_78072__$1;
(statearr_78216_80160[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78073 === (16))){
var inst_77959 = (state_78072[(7)]);
var inst_77961 = cljs.core.chunked_seq_QMARK_(inst_77959);
var state_78072__$1 = state_78072;
if(inst_77961){
var statearr_78217_80161 = state_78072__$1;
(statearr_78217_80161[(1)] = (19));

} else {
var statearr_78218_80162 = state_78072__$1;
(statearr_78218_80162[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78073 === (38))){
var inst_78051 = (state_78072[(2)]);
var state_78072__$1 = state_78072;
var statearr_78219_80163 = state_78072__$1;
(statearr_78219_80163[(2)] = inst_78051);

(statearr_78219_80163[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78073 === (30))){
var state_78072__$1 = state_78072;
var statearr_78222_80164 = state_78072__$1;
(statearr_78222_80164[(2)] = null);

(statearr_78222_80164[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78073 === (10))){
var inst_77936 = (state_78072[(13)]);
var inst_77938 = (state_78072[(17)]);
var inst_77946 = cljs.core._nth(inst_77936,inst_77938);
var inst_77947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_77946,(0),null);
var inst_77948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_77946,(1),null);
var state_78072__$1 = (function (){var statearr_78224 = state_78072;
(statearr_78224[(24)] = inst_77947);

return statearr_78224;
})();
if(cljs.core.truth_(inst_77948)){
var statearr_78226_80165 = state_78072__$1;
(statearr_78226_80165[(1)] = (13));

} else {
var statearr_78227_80167 = state_78072__$1;
(statearr_78227_80167[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78073 === (18))){
var inst_77989 = (state_78072[(2)]);
var state_78072__$1 = state_78072;
var statearr_78228_80169 = state_78072__$1;
(statearr_78228_80169[(2)] = inst_77989);

(statearr_78228_80169[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78073 === (42))){
var state_78072__$1 = state_78072;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78072__$1,(45),dchan);
} else {
if((state_val_78073 === (37))){
var inst_78040 = (state_78072[(22)]);
var inst_77926 = (state_78072[(11)]);
var inst_78029 = (state_78072[(23)]);
var inst_78040__$1 = cljs.core.first(inst_78029);
var inst_78042 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_78040__$1,inst_77926,done);
var state_78072__$1 = (function (){var statearr_78229 = state_78072;
(statearr_78229[(22)] = inst_78040__$1);

return statearr_78229;
})();
if(cljs.core.truth_(inst_78042)){
var statearr_78230_80174 = state_78072__$1;
(statearr_78230_80174[(1)] = (39));

} else {
var statearr_78231_80175 = state_78072__$1;
(statearr_78231_80175[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78073 === (8))){
var inst_77937 = (state_78072[(14)]);
var inst_77938 = (state_78072[(17)]);
var inst_77940 = (inst_77938 < inst_77937);
var inst_77941 = inst_77940;
var state_78072__$1 = state_78072;
if(cljs.core.truth_(inst_77941)){
var statearr_78232_80176 = state_78072__$1;
(statearr_78232_80176[(1)] = (10));

} else {
var statearr_78233_80177 = state_78072__$1;
(statearr_78233_80177[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__60122__auto__ = null;
var cljs$core$async$mult_$_state_machine__60122__auto____0 = (function (){
var statearr_78246 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_78246[(0)] = cljs$core$async$mult_$_state_machine__60122__auto__);

(statearr_78246[(1)] = (1));

return statearr_78246;
});
var cljs$core$async$mult_$_state_machine__60122__auto____1 = (function (state_78072){
while(true){
var ret_value__60123__auto__ = (function (){try{while(true){
var result__60124__auto__ = switch__60121__auto__(state_78072);
if(cljs.core.keyword_identical_QMARK_(result__60124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60124__auto__;
}
break;
}
}catch (e78247){var ex__60125__auto__ = e78247;
var statearr_78248_80180 = state_78072;
(statearr_78248_80180[(2)] = ex__60125__auto__);


if(cljs.core.seq((state_78072[(4)]))){
var statearr_78249_80181 = state_78072;
(statearr_78249_80181[(1)] = cljs.core.first((state_78072[(4)])));

} else {
throw ex__60125__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80182 = state_78072;
state_78072 = G__80182;
continue;
} else {
return ret_value__60123__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__60122__auto__ = function(state_78072){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__60122__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__60122__auto____1.call(this,state_78072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__60122__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__60122__auto____0;
cljs$core$async$mult_$_state_machine__60122__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__60122__auto____1;
return cljs$core$async$mult_$_state_machine__60122__auto__;
})()
})();
var state__60364__auto__ = (function (){var statearr_78250 = f__60363__auto__();
(statearr_78250[(6)] = c__60362__auto___80090);

return statearr_78250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60364__auto__);
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
var G__78252 = arguments.length;
switch (G__78252) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_80188 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_80188(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_80191 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_80191(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_80192 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_80192(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_80193 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_80193(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_80195 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_80195(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80198 = arguments.length;
var i__4737__auto___80199 = (0);
while(true){
if((i__4737__auto___80199 < len__4736__auto___80198)){
args__4742__auto__.push((arguments[i__4737__auto___80199]));

var G__80200 = (i__4737__auto___80199 + (1));
i__4737__auto___80199 = G__80200;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__78269){
var map__78270 = p__78269;
var map__78270__$1 = (((((!((map__78270 == null))))?(((((map__78270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78270):map__78270);
var opts = map__78270__$1;
var statearr_78274_80205 = state;
(statearr_78274_80205[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_78275_80206 = state;
(statearr_78275_80206[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_78276_80207 = state;
(statearr_78276_80207[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq78265){
var G__78266 = cljs.core.first(seq78265);
var seq78265__$1 = cljs.core.next(seq78265);
var G__78267 = cljs.core.first(seq78265__$1);
var seq78265__$2 = cljs.core.next(seq78265__$1);
var G__78268 = cljs.core.first(seq78265__$2);
var seq78265__$3 = cljs.core.next(seq78265__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78266,G__78267,G__78268,seq78265__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async78301 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async78301 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta78302){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta78302 = meta78302;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async78301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_78303,meta78302__$1){
var self__ = this;
var _78303__$1 = this;
return (new cljs.core.async.t_cljs$core$async78301(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta78302__$1));
}));

(cljs.core.async.t_cljs$core$async78301.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_78303){
var self__ = this;
var _78303__$1 = this;
return self__.meta78302;
}));

(cljs.core.async.t_cljs$core$async78301.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async78301.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async78301.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async78301.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async78301.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async78301.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async78301.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async78301.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async78301.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta78302","meta78302",-1512595918,null)], null);
}));

(cljs.core.async.t_cljs$core$async78301.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async78301.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async78301");

(cljs.core.async.t_cljs$core$async78301.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async78301");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async78301.
 */
cljs.core.async.__GT_t_cljs$core$async78301 = (function cljs$core$async$mix_$___GT_t_cljs$core$async78301(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta78302){
return (new cljs.core.async.t_cljs$core$async78301(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta78302));
});

}

return (new cljs.core.async.t_cljs$core$async78301(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__60362__auto___80227 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60363__auto__ = (function (){var switch__60121__auto__ = (function (state_78446){
var state_val_78448 = (state_78446[(1)]);
if((state_val_78448 === (7))){
var inst_78335 = (state_78446[(2)]);
var state_78446__$1 = state_78446;
var statearr_78449_80228 = state_78446__$1;
(statearr_78449_80228[(2)] = inst_78335);

(statearr_78449_80228[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78448 === (20))){
var inst_78347 = (state_78446[(7)]);
var state_78446__$1 = state_78446;
var statearr_78454_80229 = state_78446__$1;
(statearr_78454_80229[(2)] = inst_78347);

(statearr_78454_80229[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78448 === (27))){
var state_78446__$1 = state_78446;
var statearr_78456_80233 = state_78446__$1;
(statearr_78456_80233[(2)] = null);

(statearr_78456_80233[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78448 === (1))){
var inst_78322 = (state_78446[(8)]);
var inst_78322__$1 = calc_state();
var inst_78324 = (inst_78322__$1 == null);
var inst_78325 = cljs.core.not(inst_78324);
var state_78446__$1 = (function (){var statearr_78464 = state_78446;
(statearr_78464[(8)] = inst_78322__$1);

return statearr_78464;
})();
if(inst_78325){
var statearr_78469_80235 = state_78446__$1;
(statearr_78469_80235[(1)] = (2));

} else {
var statearr_78471_80236 = state_78446__$1;
(statearr_78471_80236[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78448 === (24))){
var inst_78392 = (state_78446[(9)]);
var inst_78381 = (state_78446[(10)]);
var inst_78415 = (state_78446[(11)]);
var inst_78415__$1 = (inst_78381.cljs$core$IFn$_invoke$arity$1 ? inst_78381.cljs$core$IFn$_invoke$arity$1(inst_78392) : inst_78381.call(null,inst_78392));
var state_78446__$1 = (function (){var statearr_78476 = state_78446;
(statearr_78476[(11)] = inst_78415__$1);

return statearr_78476;
})();
if(cljs.core.truth_(inst_78415__$1)){
var statearr_78478_80240 = state_78446__$1;
(statearr_78478_80240[(1)] = (29));

} else {
var statearr_78479_80241 = state_78446__$1;
(statearr_78479_80241[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78448 === (4))){
var inst_78338 = (state_78446[(2)]);
var state_78446__$1 = state_78446;
if(cljs.core.truth_(inst_78338)){
var statearr_78480_80242 = state_78446__$1;
(statearr_78480_80242[(1)] = (8));

} else {
var statearr_78484_80243 = state_78446__$1;
(statearr_78484_80243[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78448 === (15))){
var inst_78374 = (state_78446[(2)]);
var state_78446__$1 = state_78446;
if(cljs.core.truth_(inst_78374)){
var statearr_78491_80244 = state_78446__$1;
(statearr_78491_80244[(1)] = (19));

} else {
var statearr_78493_80245 = state_78446__$1;
(statearr_78493_80245[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78448 === (21))){
var inst_78379 = (state_78446[(12)]);
var inst_78379__$1 = (state_78446[(2)]);
var inst_78381 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_78379__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_78382 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_78379__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_78383 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_78379__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_78446__$1 = (function (){var statearr_78507 = state_78446;
(statearr_78507[(10)] = inst_78381);

(statearr_78507[(12)] = inst_78379__$1);

(statearr_78507[(13)] = inst_78382);

return statearr_78507;
})();
return cljs.core.async.ioc_alts_BANG_(state_78446__$1,(22),inst_78383);
} else {
if((state_val_78448 === (31))){
var inst_78425 = (state_78446[(2)]);
var state_78446__$1 = state_78446;
if(cljs.core.truth_(inst_78425)){
var statearr_78514_80247 = state_78446__$1;
(statearr_78514_80247[(1)] = (32));

} else {
var statearr_78516_80248 = state_78446__$1;
(statearr_78516_80248[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78448 === (32))){
var inst_78391 = (state_78446[(14)]);
var state_78446__$1 = state_78446;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_78446__$1,(35),out,inst_78391);
} else {
if((state_val_78448 === (33))){
var inst_78379 = (state_78446[(12)]);
var inst_78347 = inst_78379;
var state_78446__$1 = (function (){var statearr_78520 = state_78446;
(statearr_78520[(7)] = inst_78347);

return statearr_78520;
})();
var statearr_78522_80249 = state_78446__$1;
(statearr_78522_80249[(2)] = null);

(statearr_78522_80249[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78448 === (13))){
var inst_78347 = (state_78446[(7)]);
var inst_78359 = inst_78347.cljs$lang$protocol_mask$partition0$;
var inst_78364 = (inst_78359 & (64));
var inst_78365 = inst_78347.cljs$core$ISeq$;
var inst_78366 = (cljs.core.PROTOCOL_SENTINEL === inst_78365);
var inst_78367 = ((inst_78364) || (inst_78366));
var state_78446__$1 = state_78446;
if(cljs.core.truth_(inst_78367)){
var statearr_78523_80251 = state_78446__$1;
(statearr_78523_80251[(1)] = (16));

} else {
var statearr_78525_80252 = state_78446__$1;
(statearr_78525_80252[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78448 === (22))){
var inst_78392 = (state_78446[(9)]);
var inst_78391 = (state_78446[(14)]);
var inst_78389 = (state_78446[(2)]);
var inst_78391__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_78389,(0),null);
var inst_78392__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_78389,(1),null);
var inst_78397 = (inst_78391__$1 == null);
var inst_78398 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_78392__$1,change);
var inst_78399 = ((inst_78397) || (inst_78398));
var state_78446__$1 = (function (){var statearr_78527 = state_78446;
(statearr_78527[(9)] = inst_78392__$1);

(statearr_78527[(14)] = inst_78391__$1);

return statearr_78527;
})();
if(cljs.core.truth_(inst_78399)){
var statearr_78528_80256 = state_78446__$1;
(statearr_78528_80256[(1)] = (23));

} else {
var statearr_78531_80257 = state_78446__$1;
(statearr_78531_80257[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78448 === (36))){
var inst_78379 = (state_78446[(12)]);
var inst_78347 = inst_78379;
var state_78446__$1 = (function (){var statearr_78533 = state_78446;
(statearr_78533[(7)] = inst_78347);

return statearr_78533;
})();
var statearr_78534_80259 = state_78446__$1;
(statearr_78534_80259[(2)] = null);

(statearr_78534_80259[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78448 === (29))){
var inst_78415 = (state_78446[(11)]);
var state_78446__$1 = state_78446;
var statearr_78535_80260 = state_78446__$1;
(statearr_78535_80260[(2)] = inst_78415);

(statearr_78535_80260[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78448 === (6))){
var state_78446__$1 = state_78446;
var statearr_78536_80261 = state_78446__$1;
(statearr_78536_80261[(2)] = false);

(statearr_78536_80261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78448 === (28))){
var inst_78411 = (state_78446[(2)]);
var inst_78412 = calc_state();
var inst_78347 = inst_78412;
var state_78446__$1 = (function (){var statearr_78540 = state_78446;
(statearr_78540[(15)] = inst_78411);

(statearr_78540[(7)] = inst_78347);

return statearr_78540;
})();
var statearr_78541_80263 = state_78446__$1;
(statearr_78541_80263[(2)] = null);

(statearr_78541_80263[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78448 === (25))){
var inst_78439 = (state_78446[(2)]);
var state_78446__$1 = state_78446;
var statearr_78545_80267 = state_78446__$1;
(statearr_78545_80267[(2)] = inst_78439);

(statearr_78545_80267[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78448 === (34))){
var inst_78437 = (state_78446[(2)]);
var state_78446__$1 = state_78446;
var statearr_78547_80272 = state_78446__$1;
(statearr_78547_80272[(2)] = inst_78437);

(statearr_78547_80272[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78448 === (17))){
var state_78446__$1 = state_78446;
var statearr_78549_80273 = state_78446__$1;
(statearr_78549_80273[(2)] = false);

(statearr_78549_80273[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78448 === (3))){
var state_78446__$1 = state_78446;
var statearr_78550_80274 = state_78446__$1;
(statearr_78550_80274[(2)] = false);

(statearr_78550_80274[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78448 === (12))){
var inst_78441 = (state_78446[(2)]);
var state_78446__$1 = state_78446;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78446__$1,inst_78441);
} else {
if((state_val_78448 === (2))){
var inst_78322 = (state_78446[(8)]);
var inst_78327 = inst_78322.cljs$lang$protocol_mask$partition0$;
var inst_78328 = (inst_78327 & (64));
var inst_78329 = inst_78322.cljs$core$ISeq$;
var inst_78330 = (cljs.core.PROTOCOL_SENTINEL === inst_78329);
var inst_78331 = ((inst_78328) || (inst_78330));
var state_78446__$1 = state_78446;
if(cljs.core.truth_(inst_78331)){
var statearr_78553_80275 = state_78446__$1;
(statearr_78553_80275[(1)] = (5));

} else {
var statearr_78554_80276 = state_78446__$1;
(statearr_78554_80276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78448 === (23))){
var inst_78391 = (state_78446[(14)]);
var inst_78402 = (inst_78391 == null);
var state_78446__$1 = state_78446;
if(cljs.core.truth_(inst_78402)){
var statearr_78557_80277 = state_78446__$1;
(statearr_78557_80277[(1)] = (26));

} else {
var statearr_78558_80278 = state_78446__$1;
(statearr_78558_80278[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78448 === (35))){
var inst_78428 = (state_78446[(2)]);
var state_78446__$1 = state_78446;
if(cljs.core.truth_(inst_78428)){
var statearr_78560_80279 = state_78446__$1;
(statearr_78560_80279[(1)] = (36));

} else {
var statearr_78561_80280 = state_78446__$1;
(statearr_78561_80280[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78448 === (19))){
var inst_78347 = (state_78446[(7)]);
var inst_78376 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_78347);
var state_78446__$1 = state_78446;
var statearr_78562_80281 = state_78446__$1;
(statearr_78562_80281[(2)] = inst_78376);

(statearr_78562_80281[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78448 === (11))){
var inst_78347 = (state_78446[(7)]);
var inst_78355 = (inst_78347 == null);
var inst_78356 = cljs.core.not(inst_78355);
var state_78446__$1 = state_78446;
if(inst_78356){
var statearr_78563_80282 = state_78446__$1;
(statearr_78563_80282[(1)] = (13));

} else {
var statearr_78564_80283 = state_78446__$1;
(statearr_78564_80283[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78448 === (9))){
var inst_78322 = (state_78446[(8)]);
var state_78446__$1 = state_78446;
var statearr_78569_80284 = state_78446__$1;
(statearr_78569_80284[(2)] = inst_78322);

(statearr_78569_80284[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78448 === (5))){
var state_78446__$1 = state_78446;
var statearr_78573_80285 = state_78446__$1;
(statearr_78573_80285[(2)] = true);

(statearr_78573_80285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78448 === (14))){
var state_78446__$1 = state_78446;
var statearr_78578_80286 = state_78446__$1;
(statearr_78578_80286[(2)] = false);

(statearr_78578_80286[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78448 === (26))){
var inst_78392 = (state_78446[(9)]);
var inst_78408 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_78392);
var state_78446__$1 = state_78446;
var statearr_78579_80287 = state_78446__$1;
(statearr_78579_80287[(2)] = inst_78408);

(statearr_78579_80287[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78448 === (16))){
var state_78446__$1 = state_78446;
var statearr_78581_80288 = state_78446__$1;
(statearr_78581_80288[(2)] = true);

(statearr_78581_80288[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78448 === (38))){
var inst_78433 = (state_78446[(2)]);
var state_78446__$1 = state_78446;
var statearr_78587_80291 = state_78446__$1;
(statearr_78587_80291[(2)] = inst_78433);

(statearr_78587_80291[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78448 === (30))){
var inst_78392 = (state_78446[(9)]);
var inst_78381 = (state_78446[(10)]);
var inst_78382 = (state_78446[(13)]);
var inst_78420 = cljs.core.empty_QMARK_(inst_78381);
var inst_78421 = (inst_78382.cljs$core$IFn$_invoke$arity$1 ? inst_78382.cljs$core$IFn$_invoke$arity$1(inst_78392) : inst_78382.call(null,inst_78392));
var inst_78422 = cljs.core.not(inst_78421);
var inst_78423 = ((inst_78420) && (inst_78422));
var state_78446__$1 = state_78446;
var statearr_78599_80293 = state_78446__$1;
(statearr_78599_80293[(2)] = inst_78423);

(statearr_78599_80293[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78448 === (10))){
var inst_78322 = (state_78446[(8)]);
var inst_78343 = (state_78446[(2)]);
var inst_78344 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_78343,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_78345 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_78343,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_78346 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_78343,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_78347 = inst_78322;
var state_78446__$1 = (function (){var statearr_78603 = state_78446;
(statearr_78603[(16)] = inst_78346);

(statearr_78603[(7)] = inst_78347);

(statearr_78603[(17)] = inst_78344);

(statearr_78603[(18)] = inst_78345);

return statearr_78603;
})();
var statearr_78604_80301 = state_78446__$1;
(statearr_78604_80301[(2)] = null);

(statearr_78604_80301[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78448 === (18))){
var inst_78371 = (state_78446[(2)]);
var state_78446__$1 = state_78446;
var statearr_78606_80302 = state_78446__$1;
(statearr_78606_80302[(2)] = inst_78371);

(statearr_78606_80302[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78448 === (37))){
var state_78446__$1 = state_78446;
var statearr_78607_80303 = state_78446__$1;
(statearr_78607_80303[(2)] = null);

(statearr_78607_80303[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78448 === (8))){
var inst_78322 = (state_78446[(8)]);
var inst_78340 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_78322);
var state_78446__$1 = state_78446;
var statearr_78608_80304 = state_78446__$1;
(statearr_78608_80304[(2)] = inst_78340);

(statearr_78608_80304[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__60122__auto__ = null;
var cljs$core$async$mix_$_state_machine__60122__auto____0 = (function (){
var statearr_78610 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_78610[(0)] = cljs$core$async$mix_$_state_machine__60122__auto__);

(statearr_78610[(1)] = (1));

return statearr_78610;
});
var cljs$core$async$mix_$_state_machine__60122__auto____1 = (function (state_78446){
while(true){
var ret_value__60123__auto__ = (function (){try{while(true){
var result__60124__auto__ = switch__60121__auto__(state_78446);
if(cljs.core.keyword_identical_QMARK_(result__60124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60124__auto__;
}
break;
}
}catch (e78613){var ex__60125__auto__ = e78613;
var statearr_78614_80305 = state_78446;
(statearr_78614_80305[(2)] = ex__60125__auto__);


if(cljs.core.seq((state_78446[(4)]))){
var statearr_78615_80306 = state_78446;
(statearr_78615_80306[(1)] = cljs.core.first((state_78446[(4)])));

} else {
throw ex__60125__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80307 = state_78446;
state_78446 = G__80307;
continue;
} else {
return ret_value__60123__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__60122__auto__ = function(state_78446){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__60122__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__60122__auto____1.call(this,state_78446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__60122__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__60122__auto____0;
cljs$core$async$mix_$_state_machine__60122__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__60122__auto____1;
return cljs$core$async$mix_$_state_machine__60122__auto__;
})()
})();
var state__60364__auto__ = (function (){var statearr_78619 = f__60363__auto__();
(statearr_78619[(6)] = c__60362__auto___80227);

return statearr_78619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60364__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_80308 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_80308(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_80316 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_80316(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_80317 = (function() {
var G__80318 = null;
var G__80318__1 = (function (p){
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
var G__80318__2 = (function (p,v){
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
G__80318 = function(p,v){
switch(arguments.length){
case 1:
return G__80318__1.call(this,p);
case 2:
return G__80318__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__80318.cljs$core$IFn$_invoke$arity$1 = G__80318__1;
G__80318.cljs$core$IFn$_invoke$arity$2 = G__80318__2;
return G__80318;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__78640 = arguments.length;
switch (G__78640) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_80317(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_80317(p,v);
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
var G__78664 = arguments.length;
switch (G__78664) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__78657_SHARP_){
if(cljs.core.truth_((p1__78657_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__78657_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__78657_SHARP_.call(null,topic)))){
return p1__78657_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__78657_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async78678 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async78678 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta78679){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta78679 = meta78679;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async78678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_78680,meta78679__$1){
var self__ = this;
var _78680__$1 = this;
return (new cljs.core.async.t_cljs$core$async78678(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta78679__$1));
}));

(cljs.core.async.t_cljs$core$async78678.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_78680){
var self__ = this;
var _78680__$1 = this;
return self__.meta78679;
}));

(cljs.core.async.t_cljs$core$async78678.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async78678.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async78678.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async78678.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async78678.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async78678.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async78678.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async78678.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta78679","meta78679",-699439369,null)], null);
}));

(cljs.core.async.t_cljs$core$async78678.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async78678.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async78678");

(cljs.core.async.t_cljs$core$async78678.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async78678");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async78678.
 */
cljs.core.async.__GT_t_cljs$core$async78678 = (function cljs$core$async$__GT_t_cljs$core$async78678(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta78679){
return (new cljs.core.async.t_cljs$core$async78678(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta78679));
});

}

return (new cljs.core.async.t_cljs$core$async78678(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__60362__auto___80325 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60363__auto__ = (function (){var switch__60121__auto__ = (function (state_78785){
var state_val_78786 = (state_78785[(1)]);
if((state_val_78786 === (7))){
var inst_78780 = (state_78785[(2)]);
var state_78785__$1 = state_78785;
var statearr_78787_80326 = state_78785__$1;
(statearr_78787_80326[(2)] = inst_78780);

(statearr_78787_80326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78786 === (20))){
var state_78785__$1 = state_78785;
var statearr_78788_80327 = state_78785__$1;
(statearr_78788_80327[(2)] = null);

(statearr_78788_80327[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78786 === (1))){
var state_78785__$1 = state_78785;
var statearr_78789_80328 = state_78785__$1;
(statearr_78789_80328[(2)] = null);

(statearr_78789_80328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78786 === (24))){
var inst_78763 = (state_78785[(7)]);
var inst_78772 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_78763);
var state_78785__$1 = state_78785;
var statearr_78790_80329 = state_78785__$1;
(statearr_78790_80329[(2)] = inst_78772);

(statearr_78790_80329[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78786 === (4))){
var inst_78706 = (state_78785[(8)]);
var inst_78706__$1 = (state_78785[(2)]);
var inst_78707 = (inst_78706__$1 == null);
var state_78785__$1 = (function (){var statearr_78797 = state_78785;
(statearr_78797[(8)] = inst_78706__$1);

return statearr_78797;
})();
if(cljs.core.truth_(inst_78707)){
var statearr_78798_80330 = state_78785__$1;
(statearr_78798_80330[(1)] = (5));

} else {
var statearr_78799_80331 = state_78785__$1;
(statearr_78799_80331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78786 === (15))){
var inst_78757 = (state_78785[(2)]);
var state_78785__$1 = state_78785;
var statearr_78800_80332 = state_78785__$1;
(statearr_78800_80332[(2)] = inst_78757);

(statearr_78800_80332[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78786 === (21))){
var inst_78777 = (state_78785[(2)]);
var state_78785__$1 = (function (){var statearr_78801 = state_78785;
(statearr_78801[(9)] = inst_78777);

return statearr_78801;
})();
var statearr_78802_80333 = state_78785__$1;
(statearr_78802_80333[(2)] = null);

(statearr_78802_80333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78786 === (13))){
var inst_78735 = (state_78785[(10)]);
var inst_78738 = cljs.core.chunked_seq_QMARK_(inst_78735);
var state_78785__$1 = state_78785;
if(inst_78738){
var statearr_78803_80334 = state_78785__$1;
(statearr_78803_80334[(1)] = (16));

} else {
var statearr_78804_80335 = state_78785__$1;
(statearr_78804_80335[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78786 === (22))){
var inst_78769 = (state_78785[(2)]);
var state_78785__$1 = state_78785;
if(cljs.core.truth_(inst_78769)){
var statearr_78805_80336 = state_78785__$1;
(statearr_78805_80336[(1)] = (23));

} else {
var statearr_78806_80337 = state_78785__$1;
(statearr_78806_80337[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78786 === (6))){
var inst_78763 = (state_78785[(7)]);
var inst_78706 = (state_78785[(8)]);
var inst_78765 = (state_78785[(11)]);
var inst_78763__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_78706) : topic_fn.call(null,inst_78706));
var inst_78764 = cljs.core.deref(mults);
var inst_78765__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_78764,inst_78763__$1);
var state_78785__$1 = (function (){var statearr_78811 = state_78785;
(statearr_78811[(7)] = inst_78763__$1);

(statearr_78811[(11)] = inst_78765__$1);

return statearr_78811;
})();
if(cljs.core.truth_(inst_78765__$1)){
var statearr_78816_80343 = state_78785__$1;
(statearr_78816_80343[(1)] = (19));

} else {
var statearr_78817_80344 = state_78785__$1;
(statearr_78817_80344[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78786 === (25))){
var inst_78774 = (state_78785[(2)]);
var state_78785__$1 = state_78785;
var statearr_78818_80345 = state_78785__$1;
(statearr_78818_80345[(2)] = inst_78774);

(statearr_78818_80345[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78786 === (17))){
var inst_78735 = (state_78785[(10)]);
var inst_78747 = cljs.core.first(inst_78735);
var inst_78748 = cljs.core.async.muxch_STAR_(inst_78747);
var inst_78749 = cljs.core.async.close_BANG_(inst_78748);
var inst_78750 = cljs.core.next(inst_78735);
var inst_78716 = inst_78750;
var inst_78717 = null;
var inst_78718 = (0);
var inst_78719 = (0);
var state_78785__$1 = (function (){var statearr_78828 = state_78785;
(statearr_78828[(12)] = inst_78749);

(statearr_78828[(13)] = inst_78717);

(statearr_78828[(14)] = inst_78716);

(statearr_78828[(15)] = inst_78719);

(statearr_78828[(16)] = inst_78718);

return statearr_78828;
})();
var statearr_78830_80348 = state_78785__$1;
(statearr_78830_80348[(2)] = null);

(statearr_78830_80348[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78786 === (3))){
var inst_78782 = (state_78785[(2)]);
var state_78785__$1 = state_78785;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78785__$1,inst_78782);
} else {
if((state_val_78786 === (12))){
var inst_78759 = (state_78785[(2)]);
var state_78785__$1 = state_78785;
var statearr_78831_80351 = state_78785__$1;
(statearr_78831_80351[(2)] = inst_78759);

(statearr_78831_80351[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78786 === (2))){
var state_78785__$1 = state_78785;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78785__$1,(4),ch);
} else {
if((state_val_78786 === (23))){
var state_78785__$1 = state_78785;
var statearr_78832_80354 = state_78785__$1;
(statearr_78832_80354[(2)] = null);

(statearr_78832_80354[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78786 === (19))){
var inst_78706 = (state_78785[(8)]);
var inst_78765 = (state_78785[(11)]);
var inst_78767 = cljs.core.async.muxch_STAR_(inst_78765);
var state_78785__$1 = state_78785;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_78785__$1,(22),inst_78767,inst_78706);
} else {
if((state_val_78786 === (11))){
var inst_78716 = (state_78785[(14)]);
var inst_78735 = (state_78785[(10)]);
var inst_78735__$1 = cljs.core.seq(inst_78716);
var state_78785__$1 = (function (){var statearr_78834 = state_78785;
(statearr_78834[(10)] = inst_78735__$1);

return statearr_78834;
})();
if(inst_78735__$1){
var statearr_78835_80355 = state_78785__$1;
(statearr_78835_80355[(1)] = (13));

} else {
var statearr_78836_80356 = state_78785__$1;
(statearr_78836_80356[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78786 === (9))){
var inst_78761 = (state_78785[(2)]);
var state_78785__$1 = state_78785;
var statearr_78839_80357 = state_78785__$1;
(statearr_78839_80357[(2)] = inst_78761);

(statearr_78839_80357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78786 === (5))){
var inst_78713 = cljs.core.deref(mults);
var inst_78714 = cljs.core.vals(inst_78713);
var inst_78715 = cljs.core.seq(inst_78714);
var inst_78716 = inst_78715;
var inst_78717 = null;
var inst_78718 = (0);
var inst_78719 = (0);
var state_78785__$1 = (function (){var statearr_78841 = state_78785;
(statearr_78841[(13)] = inst_78717);

(statearr_78841[(14)] = inst_78716);

(statearr_78841[(15)] = inst_78719);

(statearr_78841[(16)] = inst_78718);

return statearr_78841;
})();
var statearr_78842_80358 = state_78785__$1;
(statearr_78842_80358[(2)] = null);

(statearr_78842_80358[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78786 === (14))){
var state_78785__$1 = state_78785;
var statearr_78846_80359 = state_78785__$1;
(statearr_78846_80359[(2)] = null);

(statearr_78846_80359[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78786 === (16))){
var inst_78735 = (state_78785[(10)]);
var inst_78740 = cljs.core.chunk_first(inst_78735);
var inst_78742 = cljs.core.chunk_rest(inst_78735);
var inst_78743 = cljs.core.count(inst_78740);
var inst_78716 = inst_78742;
var inst_78717 = inst_78740;
var inst_78718 = inst_78743;
var inst_78719 = (0);
var state_78785__$1 = (function (){var statearr_78856 = state_78785;
(statearr_78856[(13)] = inst_78717);

(statearr_78856[(14)] = inst_78716);

(statearr_78856[(15)] = inst_78719);

(statearr_78856[(16)] = inst_78718);

return statearr_78856;
})();
var statearr_78857_80360 = state_78785__$1;
(statearr_78857_80360[(2)] = null);

(statearr_78857_80360[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78786 === (10))){
var inst_78717 = (state_78785[(13)]);
var inst_78716 = (state_78785[(14)]);
var inst_78719 = (state_78785[(15)]);
var inst_78718 = (state_78785[(16)]);
var inst_78724 = cljs.core._nth(inst_78717,inst_78719);
var inst_78725 = cljs.core.async.muxch_STAR_(inst_78724);
var inst_78726 = cljs.core.async.close_BANG_(inst_78725);
var inst_78727 = (inst_78719 + (1));
var tmp78843 = inst_78717;
var tmp78844 = inst_78716;
var tmp78845 = inst_78718;
var inst_78716__$1 = tmp78844;
var inst_78717__$1 = tmp78843;
var inst_78718__$1 = tmp78845;
var inst_78719__$1 = inst_78727;
var state_78785__$1 = (function (){var statearr_78858 = state_78785;
(statearr_78858[(13)] = inst_78717__$1);

(statearr_78858[(14)] = inst_78716__$1);

(statearr_78858[(17)] = inst_78726);

(statearr_78858[(15)] = inst_78719__$1);

(statearr_78858[(16)] = inst_78718__$1);

return statearr_78858;
})();
var statearr_78859_80361 = state_78785__$1;
(statearr_78859_80361[(2)] = null);

(statearr_78859_80361[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78786 === (18))){
var inst_78753 = (state_78785[(2)]);
var state_78785__$1 = state_78785;
var statearr_78863_80364 = state_78785__$1;
(statearr_78863_80364[(2)] = inst_78753);

(statearr_78863_80364[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78786 === (8))){
var inst_78719 = (state_78785[(15)]);
var inst_78718 = (state_78785[(16)]);
var inst_78721 = (inst_78719 < inst_78718);
var inst_78722 = inst_78721;
var state_78785__$1 = state_78785;
if(cljs.core.truth_(inst_78722)){
var statearr_78864_80365 = state_78785__$1;
(statearr_78864_80365[(1)] = (10));

} else {
var statearr_78865_80366 = state_78785__$1;
(statearr_78865_80366[(1)] = (11));

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
var cljs$core$async$state_machine__60122__auto__ = null;
var cljs$core$async$state_machine__60122__auto____0 = (function (){
var statearr_78866 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_78866[(0)] = cljs$core$async$state_machine__60122__auto__);

(statearr_78866[(1)] = (1));

return statearr_78866;
});
var cljs$core$async$state_machine__60122__auto____1 = (function (state_78785){
while(true){
var ret_value__60123__auto__ = (function (){try{while(true){
var result__60124__auto__ = switch__60121__auto__(state_78785);
if(cljs.core.keyword_identical_QMARK_(result__60124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60124__auto__;
}
break;
}
}catch (e78867){var ex__60125__auto__ = e78867;
var statearr_78868_80367 = state_78785;
(statearr_78868_80367[(2)] = ex__60125__auto__);


if(cljs.core.seq((state_78785[(4)]))){
var statearr_78870_80368 = state_78785;
(statearr_78870_80368[(1)] = cljs.core.first((state_78785[(4)])));

} else {
throw ex__60125__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80369 = state_78785;
state_78785 = G__80369;
continue;
} else {
return ret_value__60123__auto__;
}
break;
}
});
cljs$core$async$state_machine__60122__auto__ = function(state_78785){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60122__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60122__auto____1.call(this,state_78785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60122__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60122__auto____0;
cljs$core$async$state_machine__60122__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60122__auto____1;
return cljs$core$async$state_machine__60122__auto__;
})()
})();
var state__60364__auto__ = (function (){var statearr_78875 = f__60363__auto__();
(statearr_78875[(6)] = c__60362__auto___80325);

return statearr_78875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60364__auto__);
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
var G__78879 = arguments.length;
switch (G__78879) {
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
var G__78884 = arguments.length;
switch (G__78884) {
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
var G__78890 = arguments.length;
switch (G__78890) {
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
var c__60362__auto___80376 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60363__auto__ = (function (){var switch__60121__auto__ = (function (state_78946){
var state_val_78947 = (state_78946[(1)]);
if((state_val_78947 === (7))){
var state_78946__$1 = state_78946;
var statearr_78954_80377 = state_78946__$1;
(statearr_78954_80377[(2)] = null);

(statearr_78954_80377[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78947 === (1))){
var state_78946__$1 = state_78946;
var statearr_78958_80378 = state_78946__$1;
(statearr_78958_80378[(2)] = null);

(statearr_78958_80378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78947 === (4))){
var inst_78898 = (state_78946[(7)]);
var inst_78897 = (state_78946[(8)]);
var inst_78900 = (inst_78898 < inst_78897);
var state_78946__$1 = state_78946;
if(cljs.core.truth_(inst_78900)){
var statearr_78959_80379 = state_78946__$1;
(statearr_78959_80379[(1)] = (6));

} else {
var statearr_78960_80380 = state_78946__$1;
(statearr_78960_80380[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78947 === (15))){
var inst_78926 = (state_78946[(9)]);
var inst_78931 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_78926);
var state_78946__$1 = state_78946;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_78946__$1,(17),out,inst_78931);
} else {
if((state_val_78947 === (13))){
var inst_78926 = (state_78946[(9)]);
var inst_78926__$1 = (state_78946[(2)]);
var inst_78927 = cljs.core.some(cljs.core.nil_QMARK_,inst_78926__$1);
var state_78946__$1 = (function (){var statearr_78961 = state_78946;
(statearr_78961[(9)] = inst_78926__$1);

return statearr_78961;
})();
if(cljs.core.truth_(inst_78927)){
var statearr_78964_80382 = state_78946__$1;
(statearr_78964_80382[(1)] = (14));

} else {
var statearr_78965_80383 = state_78946__$1;
(statearr_78965_80383[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78947 === (6))){
var state_78946__$1 = state_78946;
var statearr_78966_80385 = state_78946__$1;
(statearr_78966_80385[(2)] = null);

(statearr_78966_80385[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78947 === (17))){
var inst_78933 = (state_78946[(2)]);
var state_78946__$1 = (function (){var statearr_78968 = state_78946;
(statearr_78968[(10)] = inst_78933);

return statearr_78968;
})();
var statearr_78969_80386 = state_78946__$1;
(statearr_78969_80386[(2)] = null);

(statearr_78969_80386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78947 === (3))){
var inst_78938 = (state_78946[(2)]);
var state_78946__$1 = state_78946;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78946__$1,inst_78938);
} else {
if((state_val_78947 === (12))){
var _ = (function (){var statearr_78972 = state_78946;
(statearr_78972[(4)] = cljs.core.rest((state_78946[(4)])));

return statearr_78972;
})();
var state_78946__$1 = state_78946;
var ex78967 = (state_78946__$1[(2)]);
var statearr_78977_80391 = state_78946__$1;
(statearr_78977_80391[(5)] = ex78967);


if((ex78967 instanceof Object)){
var statearr_78978_80392 = state_78946__$1;
(statearr_78978_80392[(1)] = (11));

(statearr_78978_80392[(5)] = null);

} else {
throw ex78967;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78947 === (2))){
var inst_78896 = cljs.core.reset_BANG_(dctr,cnt);
var inst_78897 = cnt;
var inst_78898 = (0);
var state_78946__$1 = (function (){var statearr_78979 = state_78946;
(statearr_78979[(11)] = inst_78896);

(statearr_78979[(7)] = inst_78898);

(statearr_78979[(8)] = inst_78897);

return statearr_78979;
})();
var statearr_78980_80393 = state_78946__$1;
(statearr_78980_80393[(2)] = null);

(statearr_78980_80393[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78947 === (11))){
var inst_78902 = (state_78946[(2)]);
var inst_78903 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_78946__$1 = (function (){var statearr_78981 = state_78946;
(statearr_78981[(12)] = inst_78902);

return statearr_78981;
})();
var statearr_78982_80394 = state_78946__$1;
(statearr_78982_80394[(2)] = inst_78903);

(statearr_78982_80394[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78947 === (9))){
var inst_78898 = (state_78946[(7)]);
var _ = (function (){var statearr_78983 = state_78946;
(statearr_78983[(4)] = cljs.core.cons((12),(state_78946[(4)])));

return statearr_78983;
})();
var inst_78909 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_78898) : chs__$1.call(null,inst_78898));
var inst_78910 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_78898) : done.call(null,inst_78898));
var inst_78911 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_78909,inst_78910);
var ___$1 = (function (){var statearr_78985 = state_78946;
(statearr_78985[(4)] = cljs.core.rest((state_78946[(4)])));

return statearr_78985;
})();
var state_78946__$1 = state_78946;
var statearr_78986_80395 = state_78946__$1;
(statearr_78986_80395[(2)] = inst_78911);

(statearr_78986_80395[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78947 === (5))){
var inst_78924 = (state_78946[(2)]);
var state_78946__$1 = (function (){var statearr_78987 = state_78946;
(statearr_78987[(13)] = inst_78924);

return statearr_78987;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78946__$1,(13),dchan);
} else {
if((state_val_78947 === (14))){
var inst_78929 = cljs.core.async.close_BANG_(out);
var state_78946__$1 = state_78946;
var statearr_78989_80396 = state_78946__$1;
(statearr_78989_80396[(2)] = inst_78929);

(statearr_78989_80396[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78947 === (16))){
var inst_78936 = (state_78946[(2)]);
var state_78946__$1 = state_78946;
var statearr_78990_80397 = state_78946__$1;
(statearr_78990_80397[(2)] = inst_78936);

(statearr_78990_80397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78947 === (10))){
var inst_78898 = (state_78946[(7)]);
var inst_78914 = (state_78946[(2)]);
var inst_78915 = (inst_78898 + (1));
var inst_78898__$1 = inst_78915;
var state_78946__$1 = (function (){var statearr_78993 = state_78946;
(statearr_78993[(7)] = inst_78898__$1);

(statearr_78993[(14)] = inst_78914);

return statearr_78993;
})();
var statearr_78994_80398 = state_78946__$1;
(statearr_78994_80398[(2)] = null);

(statearr_78994_80398[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78947 === (8))){
var inst_78922 = (state_78946[(2)]);
var state_78946__$1 = state_78946;
var statearr_78995_80399 = state_78946__$1;
(statearr_78995_80399[(2)] = inst_78922);

(statearr_78995_80399[(1)] = (5));


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
var cljs$core$async$state_machine__60122__auto__ = null;
var cljs$core$async$state_machine__60122__auto____0 = (function (){
var statearr_78999 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_78999[(0)] = cljs$core$async$state_machine__60122__auto__);

(statearr_78999[(1)] = (1));

return statearr_78999;
});
var cljs$core$async$state_machine__60122__auto____1 = (function (state_78946){
while(true){
var ret_value__60123__auto__ = (function (){try{while(true){
var result__60124__auto__ = switch__60121__auto__(state_78946);
if(cljs.core.keyword_identical_QMARK_(result__60124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60124__auto__;
}
break;
}
}catch (e79000){var ex__60125__auto__ = e79000;
var statearr_79001_80400 = state_78946;
(statearr_79001_80400[(2)] = ex__60125__auto__);


if(cljs.core.seq((state_78946[(4)]))){
var statearr_79006_80401 = state_78946;
(statearr_79006_80401[(1)] = cljs.core.first((state_78946[(4)])));

} else {
throw ex__60125__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80402 = state_78946;
state_78946 = G__80402;
continue;
} else {
return ret_value__60123__auto__;
}
break;
}
});
cljs$core$async$state_machine__60122__auto__ = function(state_78946){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60122__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60122__auto____1.call(this,state_78946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60122__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60122__auto____0;
cljs$core$async$state_machine__60122__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60122__auto____1;
return cljs$core$async$state_machine__60122__auto__;
})()
})();
var state__60364__auto__ = (function (){var statearr_79008 = f__60363__auto__();
(statearr_79008[(6)] = c__60362__auto___80376);

return statearr_79008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60364__auto__);
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
var G__79011 = arguments.length;
switch (G__79011) {
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
var c__60362__auto___80406 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60363__auto__ = (function (){var switch__60121__auto__ = (function (state_79047){
var state_val_79048 = (state_79047[(1)]);
if((state_val_79048 === (7))){
var inst_79026 = (state_79047[(7)]);
var inst_79024 = (state_79047[(8)]);
var inst_79024__$1 = (state_79047[(2)]);
var inst_79026__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_79024__$1,(0),null);
var inst_79027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_79024__$1,(1),null);
var inst_79028 = (inst_79026__$1 == null);
var state_79047__$1 = (function (){var statearr_79054 = state_79047;
(statearr_79054[(9)] = inst_79027);

(statearr_79054[(7)] = inst_79026__$1);

(statearr_79054[(8)] = inst_79024__$1);

return statearr_79054;
})();
if(cljs.core.truth_(inst_79028)){
var statearr_79055_80407 = state_79047__$1;
(statearr_79055_80407[(1)] = (8));

} else {
var statearr_79056_80411 = state_79047__$1;
(statearr_79056_80411[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79048 === (1))){
var inst_79013 = cljs.core.vec(chs);
var inst_79014 = inst_79013;
var state_79047__$1 = (function (){var statearr_79058 = state_79047;
(statearr_79058[(10)] = inst_79014);

return statearr_79058;
})();
var statearr_79059_80412 = state_79047__$1;
(statearr_79059_80412[(2)] = null);

(statearr_79059_80412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79048 === (4))){
var inst_79014 = (state_79047[(10)]);
var state_79047__$1 = state_79047;
return cljs.core.async.ioc_alts_BANG_(state_79047__$1,(7),inst_79014);
} else {
if((state_val_79048 === (6))){
var inst_79043 = (state_79047[(2)]);
var state_79047__$1 = state_79047;
var statearr_79060_80413 = state_79047__$1;
(statearr_79060_80413[(2)] = inst_79043);

(statearr_79060_80413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79048 === (3))){
var inst_79045 = (state_79047[(2)]);
var state_79047__$1 = state_79047;
return cljs.core.async.impl.ioc_helpers.return_chan(state_79047__$1,inst_79045);
} else {
if((state_val_79048 === (2))){
var inst_79014 = (state_79047[(10)]);
var inst_79017 = cljs.core.count(inst_79014);
var inst_79018 = (inst_79017 > (0));
var state_79047__$1 = state_79047;
if(cljs.core.truth_(inst_79018)){
var statearr_79063_80414 = state_79047__$1;
(statearr_79063_80414[(1)] = (4));

} else {
var statearr_79064_80415 = state_79047__$1;
(statearr_79064_80415[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79048 === (11))){
var inst_79014 = (state_79047[(10)]);
var inst_79035 = (state_79047[(2)]);
var tmp79062 = inst_79014;
var inst_79014__$1 = tmp79062;
var state_79047__$1 = (function (){var statearr_79066 = state_79047;
(statearr_79066[(10)] = inst_79014__$1);

(statearr_79066[(11)] = inst_79035);

return statearr_79066;
})();
var statearr_79067_80416 = state_79047__$1;
(statearr_79067_80416[(2)] = null);

(statearr_79067_80416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79048 === (9))){
var inst_79026 = (state_79047[(7)]);
var state_79047__$1 = state_79047;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_79047__$1,(11),out,inst_79026);
} else {
if((state_val_79048 === (5))){
var inst_79041 = cljs.core.async.close_BANG_(out);
var state_79047__$1 = state_79047;
var statearr_79069_80417 = state_79047__$1;
(statearr_79069_80417[(2)] = inst_79041);

(statearr_79069_80417[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79048 === (10))){
var inst_79038 = (state_79047[(2)]);
var state_79047__$1 = state_79047;
var statearr_79070_80418 = state_79047__$1;
(statearr_79070_80418[(2)] = inst_79038);

(statearr_79070_80418[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79048 === (8))){
var inst_79014 = (state_79047[(10)]);
var inst_79027 = (state_79047[(9)]);
var inst_79026 = (state_79047[(7)]);
var inst_79024 = (state_79047[(8)]);
var inst_79030 = (function (){var cs = inst_79014;
var vec__79020 = inst_79024;
var v = inst_79026;
var c = inst_79027;
return (function (p1__79009_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__79009_SHARP_);
});
})();
var inst_79031 = cljs.core.filterv(inst_79030,inst_79014);
var inst_79014__$1 = inst_79031;
var state_79047__$1 = (function (){var statearr_79071 = state_79047;
(statearr_79071[(10)] = inst_79014__$1);

return statearr_79071;
})();
var statearr_79072_80422 = state_79047__$1;
(statearr_79072_80422[(2)] = null);

(statearr_79072_80422[(1)] = (2));


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
var cljs$core$async$state_machine__60122__auto__ = null;
var cljs$core$async$state_machine__60122__auto____0 = (function (){
var statearr_79073 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_79073[(0)] = cljs$core$async$state_machine__60122__auto__);

(statearr_79073[(1)] = (1));

return statearr_79073;
});
var cljs$core$async$state_machine__60122__auto____1 = (function (state_79047){
while(true){
var ret_value__60123__auto__ = (function (){try{while(true){
var result__60124__auto__ = switch__60121__auto__(state_79047);
if(cljs.core.keyword_identical_QMARK_(result__60124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60124__auto__;
}
break;
}
}catch (e79074){var ex__60125__auto__ = e79074;
var statearr_79075_80423 = state_79047;
(statearr_79075_80423[(2)] = ex__60125__auto__);


if(cljs.core.seq((state_79047[(4)]))){
var statearr_79077_80424 = state_79047;
(statearr_79077_80424[(1)] = cljs.core.first((state_79047[(4)])));

} else {
throw ex__60125__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80425 = state_79047;
state_79047 = G__80425;
continue;
} else {
return ret_value__60123__auto__;
}
break;
}
});
cljs$core$async$state_machine__60122__auto__ = function(state_79047){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60122__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60122__auto____1.call(this,state_79047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60122__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60122__auto____0;
cljs$core$async$state_machine__60122__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60122__auto____1;
return cljs$core$async$state_machine__60122__auto__;
})()
})();
var state__60364__auto__ = (function (){var statearr_79078 = f__60363__auto__();
(statearr_79078[(6)] = c__60362__auto___80406);

return statearr_79078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60364__auto__);
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
var G__79080 = arguments.length;
switch (G__79080) {
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
var c__60362__auto___80427 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60363__auto__ = (function (){var switch__60121__auto__ = (function (state_79109){
var state_val_79110 = (state_79109[(1)]);
if((state_val_79110 === (7))){
var inst_79091 = (state_79109[(7)]);
var inst_79091__$1 = (state_79109[(2)]);
var inst_79092 = (inst_79091__$1 == null);
var inst_79093 = cljs.core.not(inst_79092);
var state_79109__$1 = (function (){var statearr_79112 = state_79109;
(statearr_79112[(7)] = inst_79091__$1);

return statearr_79112;
})();
if(inst_79093){
var statearr_79114_80428 = state_79109__$1;
(statearr_79114_80428[(1)] = (8));

} else {
var statearr_79115_80429 = state_79109__$1;
(statearr_79115_80429[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79110 === (1))){
var inst_79086 = (0);
var state_79109__$1 = (function (){var statearr_79116 = state_79109;
(statearr_79116[(8)] = inst_79086);

return statearr_79116;
})();
var statearr_79117_80430 = state_79109__$1;
(statearr_79117_80430[(2)] = null);

(statearr_79117_80430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79110 === (4))){
var state_79109__$1 = state_79109;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79109__$1,(7),ch);
} else {
if((state_val_79110 === (6))){
var inst_79104 = (state_79109[(2)]);
var state_79109__$1 = state_79109;
var statearr_79121_80431 = state_79109__$1;
(statearr_79121_80431[(2)] = inst_79104);

(statearr_79121_80431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79110 === (3))){
var inst_79106 = (state_79109[(2)]);
var inst_79107 = cljs.core.async.close_BANG_(out);
var state_79109__$1 = (function (){var statearr_79122 = state_79109;
(statearr_79122[(9)] = inst_79106);

return statearr_79122;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_79109__$1,inst_79107);
} else {
if((state_val_79110 === (2))){
var inst_79086 = (state_79109[(8)]);
var inst_79088 = (inst_79086 < n);
var state_79109__$1 = state_79109;
if(cljs.core.truth_(inst_79088)){
var statearr_79123_80432 = state_79109__$1;
(statearr_79123_80432[(1)] = (4));

} else {
var statearr_79124_80433 = state_79109__$1;
(statearr_79124_80433[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79110 === (11))){
var inst_79086 = (state_79109[(8)]);
var inst_79096 = (state_79109[(2)]);
var inst_79097 = (inst_79086 + (1));
var inst_79086__$1 = inst_79097;
var state_79109__$1 = (function (){var statearr_79125 = state_79109;
(statearr_79125[(8)] = inst_79086__$1);

(statearr_79125[(10)] = inst_79096);

return statearr_79125;
})();
var statearr_79126_80434 = state_79109__$1;
(statearr_79126_80434[(2)] = null);

(statearr_79126_80434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79110 === (9))){
var state_79109__$1 = state_79109;
var statearr_79129_80435 = state_79109__$1;
(statearr_79129_80435[(2)] = null);

(statearr_79129_80435[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79110 === (5))){
var state_79109__$1 = state_79109;
var statearr_79135_80436 = state_79109__$1;
(statearr_79135_80436[(2)] = null);

(statearr_79135_80436[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79110 === (10))){
var inst_79101 = (state_79109[(2)]);
var state_79109__$1 = state_79109;
var statearr_79139_80437 = state_79109__$1;
(statearr_79139_80437[(2)] = inst_79101);

(statearr_79139_80437[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79110 === (8))){
var inst_79091 = (state_79109[(7)]);
var state_79109__$1 = state_79109;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_79109__$1,(11),out,inst_79091);
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
var cljs$core$async$state_machine__60122__auto__ = null;
var cljs$core$async$state_machine__60122__auto____0 = (function (){
var statearr_79140 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_79140[(0)] = cljs$core$async$state_machine__60122__auto__);

(statearr_79140[(1)] = (1));

return statearr_79140;
});
var cljs$core$async$state_machine__60122__auto____1 = (function (state_79109){
while(true){
var ret_value__60123__auto__ = (function (){try{while(true){
var result__60124__auto__ = switch__60121__auto__(state_79109);
if(cljs.core.keyword_identical_QMARK_(result__60124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60124__auto__;
}
break;
}
}catch (e79141){var ex__60125__auto__ = e79141;
var statearr_79142_80438 = state_79109;
(statearr_79142_80438[(2)] = ex__60125__auto__);


if(cljs.core.seq((state_79109[(4)]))){
var statearr_79147_80439 = state_79109;
(statearr_79147_80439[(1)] = cljs.core.first((state_79109[(4)])));

} else {
throw ex__60125__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80440 = state_79109;
state_79109 = G__80440;
continue;
} else {
return ret_value__60123__auto__;
}
break;
}
});
cljs$core$async$state_machine__60122__auto__ = function(state_79109){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60122__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60122__auto____1.call(this,state_79109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60122__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60122__auto____0;
cljs$core$async$state_machine__60122__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60122__auto____1;
return cljs$core$async$state_machine__60122__auto__;
})()
})();
var state__60364__auto__ = (function (){var statearr_79150 = f__60363__auto__();
(statearr_79150[(6)] = c__60362__auto___80427);

return statearr_79150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60364__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async79157 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async79157 = (function (f,ch,meta79158){
this.f = f;
this.ch = ch;
this.meta79158 = meta79158;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async79157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_79159,meta79158__$1){
var self__ = this;
var _79159__$1 = this;
return (new cljs.core.async.t_cljs$core$async79157(self__.f,self__.ch,meta79158__$1));
}));

(cljs.core.async.t_cljs$core$async79157.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_79159){
var self__ = this;
var _79159__$1 = this;
return self__.meta79158;
}));

(cljs.core.async.t_cljs$core$async79157.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async79157.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async79157.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async79157.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async79157.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async79169 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async79169 = (function (f,ch,meta79158,_,fn1,meta79170){
this.f = f;
this.ch = ch;
this.meta79158 = meta79158;
this._ = _;
this.fn1 = fn1;
this.meta79170 = meta79170;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async79169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_79171,meta79170__$1){
var self__ = this;
var _79171__$1 = this;
return (new cljs.core.async.t_cljs$core$async79169(self__.f,self__.ch,self__.meta79158,self__._,self__.fn1,meta79170__$1));
}));

(cljs.core.async.t_cljs$core$async79169.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_79171){
var self__ = this;
var _79171__$1 = this;
return self__.meta79170;
}));

(cljs.core.async.t_cljs$core$async79169.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async79169.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async79169.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async79169.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__79153_SHARP_){
var G__79179 = (((p1__79153_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__79153_SHARP_) : self__.f.call(null,p1__79153_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__79179) : f1.call(null,G__79179));
});
}));

(cljs.core.async.t_cljs$core$async79169.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta79158","meta79158",1927278027,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async79157","cljs.core.async/t_cljs$core$async79157",908225965,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta79170","meta79170",604811241,null)], null);
}));

(cljs.core.async.t_cljs$core$async79169.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async79169.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async79169");

(cljs.core.async.t_cljs$core$async79169.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async79169");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async79169.
 */
cljs.core.async.__GT_t_cljs$core$async79169 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async79169(f__$1,ch__$1,meta79158__$1,___$2,fn1__$1,meta79170){
return (new cljs.core.async.t_cljs$core$async79169(f__$1,ch__$1,meta79158__$1,___$2,fn1__$1,meta79170));
});

}

return (new cljs.core.async.t_cljs$core$async79169(self__.f,self__.ch,self__.meta79158,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__79186 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__79186) : self__.f.call(null,G__79186));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async79157.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async79157.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async79157.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta79158","meta79158",1927278027,null)], null);
}));

(cljs.core.async.t_cljs$core$async79157.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async79157.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async79157");

(cljs.core.async.t_cljs$core$async79157.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async79157");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async79157.
 */
cljs.core.async.__GT_t_cljs$core$async79157 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async79157(f__$1,ch__$1,meta79158){
return (new cljs.core.async.t_cljs$core$async79157(f__$1,ch__$1,meta79158));
});

}

return (new cljs.core.async.t_cljs$core$async79157(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async79199 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async79199 = (function (f,ch,meta79200){
this.f = f;
this.ch = ch;
this.meta79200 = meta79200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async79199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_79201,meta79200__$1){
var self__ = this;
var _79201__$1 = this;
return (new cljs.core.async.t_cljs$core$async79199(self__.f,self__.ch,meta79200__$1));
}));

(cljs.core.async.t_cljs$core$async79199.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_79201){
var self__ = this;
var _79201__$1 = this;
return self__.meta79200;
}));

(cljs.core.async.t_cljs$core$async79199.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async79199.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async79199.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async79199.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async79199.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async79199.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async79199.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta79200","meta79200",806155984,null)], null);
}));

(cljs.core.async.t_cljs$core$async79199.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async79199.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async79199");

(cljs.core.async.t_cljs$core$async79199.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async79199");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async79199.
 */
cljs.core.async.__GT_t_cljs$core$async79199 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async79199(f__$1,ch__$1,meta79200){
return (new cljs.core.async.t_cljs$core$async79199(f__$1,ch__$1,meta79200));
});

}

return (new cljs.core.async.t_cljs$core$async79199(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async79216 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async79216 = (function (p,ch,meta79217){
this.p = p;
this.ch = ch;
this.meta79217 = meta79217;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async79216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_79218,meta79217__$1){
var self__ = this;
var _79218__$1 = this;
return (new cljs.core.async.t_cljs$core$async79216(self__.p,self__.ch,meta79217__$1));
}));

(cljs.core.async.t_cljs$core$async79216.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_79218){
var self__ = this;
var _79218__$1 = this;
return self__.meta79217;
}));

(cljs.core.async.t_cljs$core$async79216.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async79216.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async79216.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async79216.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async79216.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async79216.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async79216.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async79216.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta79217","meta79217",912552655,null)], null);
}));

(cljs.core.async.t_cljs$core$async79216.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async79216.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async79216");

(cljs.core.async.t_cljs$core$async79216.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async79216");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async79216.
 */
cljs.core.async.__GT_t_cljs$core$async79216 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async79216(p__$1,ch__$1,meta79217){
return (new cljs.core.async.t_cljs$core$async79216(p__$1,ch__$1,meta79217));
});

}

return (new cljs.core.async.t_cljs$core$async79216(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__79270 = arguments.length;
switch (G__79270) {
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
var c__60362__auto___80445 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60363__auto__ = (function (){var switch__60121__auto__ = (function (state_79305){
var state_val_79306 = (state_79305[(1)]);
if((state_val_79306 === (7))){
var inst_79301 = (state_79305[(2)]);
var state_79305__$1 = state_79305;
var statearr_79309_80446 = state_79305__$1;
(statearr_79309_80446[(2)] = inst_79301);

(statearr_79309_80446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79306 === (1))){
var state_79305__$1 = state_79305;
var statearr_79311_80447 = state_79305__$1;
(statearr_79311_80447[(2)] = null);

(statearr_79311_80447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79306 === (4))){
var inst_79286 = (state_79305[(7)]);
var inst_79286__$1 = (state_79305[(2)]);
var inst_79287 = (inst_79286__$1 == null);
var state_79305__$1 = (function (){var statearr_79315 = state_79305;
(statearr_79315[(7)] = inst_79286__$1);

return statearr_79315;
})();
if(cljs.core.truth_(inst_79287)){
var statearr_79317_80448 = state_79305__$1;
(statearr_79317_80448[(1)] = (5));

} else {
var statearr_79318_80449 = state_79305__$1;
(statearr_79318_80449[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79306 === (6))){
var inst_79286 = (state_79305[(7)]);
var inst_79291 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_79286) : p.call(null,inst_79286));
var state_79305__$1 = state_79305;
if(cljs.core.truth_(inst_79291)){
var statearr_79319_80450 = state_79305__$1;
(statearr_79319_80450[(1)] = (8));

} else {
var statearr_79320_80451 = state_79305__$1;
(statearr_79320_80451[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79306 === (3))){
var inst_79303 = (state_79305[(2)]);
var state_79305__$1 = state_79305;
return cljs.core.async.impl.ioc_helpers.return_chan(state_79305__$1,inst_79303);
} else {
if((state_val_79306 === (2))){
var state_79305__$1 = state_79305;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79305__$1,(4),ch);
} else {
if((state_val_79306 === (11))){
var inst_79295 = (state_79305[(2)]);
var state_79305__$1 = state_79305;
var statearr_79323_80452 = state_79305__$1;
(statearr_79323_80452[(2)] = inst_79295);

(statearr_79323_80452[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79306 === (9))){
var state_79305__$1 = state_79305;
var statearr_79325_80453 = state_79305__$1;
(statearr_79325_80453[(2)] = null);

(statearr_79325_80453[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79306 === (5))){
var inst_79289 = cljs.core.async.close_BANG_(out);
var state_79305__$1 = state_79305;
var statearr_79327_80454 = state_79305__$1;
(statearr_79327_80454[(2)] = inst_79289);

(statearr_79327_80454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79306 === (10))){
var inst_79298 = (state_79305[(2)]);
var state_79305__$1 = (function (){var statearr_79328 = state_79305;
(statearr_79328[(8)] = inst_79298);

return statearr_79328;
})();
var statearr_79329_80455 = state_79305__$1;
(statearr_79329_80455[(2)] = null);

(statearr_79329_80455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79306 === (8))){
var inst_79286 = (state_79305[(7)]);
var state_79305__$1 = state_79305;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_79305__$1,(11),out,inst_79286);
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
var cljs$core$async$state_machine__60122__auto__ = null;
var cljs$core$async$state_machine__60122__auto____0 = (function (){
var statearr_79332 = [null,null,null,null,null,null,null,null,null];
(statearr_79332[(0)] = cljs$core$async$state_machine__60122__auto__);

(statearr_79332[(1)] = (1));

return statearr_79332;
});
var cljs$core$async$state_machine__60122__auto____1 = (function (state_79305){
while(true){
var ret_value__60123__auto__ = (function (){try{while(true){
var result__60124__auto__ = switch__60121__auto__(state_79305);
if(cljs.core.keyword_identical_QMARK_(result__60124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60124__auto__;
}
break;
}
}catch (e79334){var ex__60125__auto__ = e79334;
var statearr_79335_80456 = state_79305;
(statearr_79335_80456[(2)] = ex__60125__auto__);


if(cljs.core.seq((state_79305[(4)]))){
var statearr_79336_80457 = state_79305;
(statearr_79336_80457[(1)] = cljs.core.first((state_79305[(4)])));

} else {
throw ex__60125__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80458 = state_79305;
state_79305 = G__80458;
continue;
} else {
return ret_value__60123__auto__;
}
break;
}
});
cljs$core$async$state_machine__60122__auto__ = function(state_79305){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60122__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60122__auto____1.call(this,state_79305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60122__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60122__auto____0;
cljs$core$async$state_machine__60122__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60122__auto____1;
return cljs$core$async$state_machine__60122__auto__;
})()
})();
var state__60364__auto__ = (function (){var statearr_79338 = f__60363__auto__();
(statearr_79338[(6)] = c__60362__auto___80445);

return statearr_79338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60364__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__79346 = arguments.length;
switch (G__79346) {
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
var c__60362__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60363__auto__ = (function (){var switch__60121__auto__ = (function (state_79423){
var state_val_79424 = (state_79423[(1)]);
if((state_val_79424 === (7))){
var inst_79419 = (state_79423[(2)]);
var state_79423__$1 = state_79423;
var statearr_79433_80463 = state_79423__$1;
(statearr_79433_80463[(2)] = inst_79419);

(statearr_79433_80463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79424 === (20))){
var inst_79387 = (state_79423[(7)]);
var inst_79400 = (state_79423[(2)]);
var inst_79401 = cljs.core.next(inst_79387);
var inst_79372 = inst_79401;
var inst_79373 = null;
var inst_79374 = (0);
var inst_79375 = (0);
var state_79423__$1 = (function (){var statearr_79434 = state_79423;
(statearr_79434[(8)] = inst_79372);

(statearr_79434[(9)] = inst_79373);

(statearr_79434[(10)] = inst_79374);

(statearr_79434[(11)] = inst_79400);

(statearr_79434[(12)] = inst_79375);

return statearr_79434;
})();
var statearr_79435_80467 = state_79423__$1;
(statearr_79435_80467[(2)] = null);

(statearr_79435_80467[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79424 === (1))){
var state_79423__$1 = state_79423;
var statearr_79437_80468 = state_79423__$1;
(statearr_79437_80468[(2)] = null);

(statearr_79437_80468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79424 === (4))){
var inst_79359 = (state_79423[(13)]);
var inst_79359__$1 = (state_79423[(2)]);
var inst_79360 = (inst_79359__$1 == null);
var state_79423__$1 = (function (){var statearr_79440 = state_79423;
(statearr_79440[(13)] = inst_79359__$1);

return statearr_79440;
})();
if(cljs.core.truth_(inst_79360)){
var statearr_79442_80469 = state_79423__$1;
(statearr_79442_80469[(1)] = (5));

} else {
var statearr_79443_80470 = state_79423__$1;
(statearr_79443_80470[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79424 === (15))){
var state_79423__$1 = state_79423;
var statearr_79449_80471 = state_79423__$1;
(statearr_79449_80471[(2)] = null);

(statearr_79449_80471[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79424 === (21))){
var state_79423__$1 = state_79423;
var statearr_79450_80472 = state_79423__$1;
(statearr_79450_80472[(2)] = null);

(statearr_79450_80472[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79424 === (13))){
var inst_79372 = (state_79423[(8)]);
var inst_79373 = (state_79423[(9)]);
var inst_79374 = (state_79423[(10)]);
var inst_79375 = (state_79423[(12)]);
var inst_79383 = (state_79423[(2)]);
var inst_79384 = (inst_79375 + (1));
var tmp79446 = inst_79372;
var tmp79447 = inst_79373;
var tmp79448 = inst_79374;
var inst_79372__$1 = tmp79446;
var inst_79373__$1 = tmp79447;
var inst_79374__$1 = tmp79448;
var inst_79375__$1 = inst_79384;
var state_79423__$1 = (function (){var statearr_79457 = state_79423;
(statearr_79457[(14)] = inst_79383);

(statearr_79457[(8)] = inst_79372__$1);

(statearr_79457[(9)] = inst_79373__$1);

(statearr_79457[(10)] = inst_79374__$1);

(statearr_79457[(12)] = inst_79375__$1);

return statearr_79457;
})();
var statearr_79460_80473 = state_79423__$1;
(statearr_79460_80473[(2)] = null);

(statearr_79460_80473[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79424 === (22))){
var state_79423__$1 = state_79423;
var statearr_79461_80474 = state_79423__$1;
(statearr_79461_80474[(2)] = null);

(statearr_79461_80474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79424 === (6))){
var inst_79359 = (state_79423[(13)]);
var inst_79368 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_79359) : f.call(null,inst_79359));
var inst_79369 = cljs.core.seq(inst_79368);
var inst_79372 = inst_79369;
var inst_79373 = null;
var inst_79374 = (0);
var inst_79375 = (0);
var state_79423__$1 = (function (){var statearr_79462 = state_79423;
(statearr_79462[(8)] = inst_79372);

(statearr_79462[(9)] = inst_79373);

(statearr_79462[(10)] = inst_79374);

(statearr_79462[(12)] = inst_79375);

return statearr_79462;
})();
var statearr_79465_80479 = state_79423__$1;
(statearr_79465_80479[(2)] = null);

(statearr_79465_80479[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79424 === (17))){
var inst_79387 = (state_79423[(7)]);
var inst_79393 = cljs.core.chunk_first(inst_79387);
var inst_79394 = cljs.core.chunk_rest(inst_79387);
var inst_79395 = cljs.core.count(inst_79393);
var inst_79372 = inst_79394;
var inst_79373 = inst_79393;
var inst_79374 = inst_79395;
var inst_79375 = (0);
var state_79423__$1 = (function (){var statearr_79468 = state_79423;
(statearr_79468[(8)] = inst_79372);

(statearr_79468[(9)] = inst_79373);

(statearr_79468[(10)] = inst_79374);

(statearr_79468[(12)] = inst_79375);

return statearr_79468;
})();
var statearr_79469_80480 = state_79423__$1;
(statearr_79469_80480[(2)] = null);

(statearr_79469_80480[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79424 === (3))){
var inst_79421 = (state_79423[(2)]);
var state_79423__$1 = state_79423;
return cljs.core.async.impl.ioc_helpers.return_chan(state_79423__$1,inst_79421);
} else {
if((state_val_79424 === (12))){
var inst_79409 = (state_79423[(2)]);
var state_79423__$1 = state_79423;
var statearr_79473_80481 = state_79423__$1;
(statearr_79473_80481[(2)] = inst_79409);

(statearr_79473_80481[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79424 === (2))){
var state_79423__$1 = state_79423;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79423__$1,(4),in$);
} else {
if((state_val_79424 === (23))){
var inst_79417 = (state_79423[(2)]);
var state_79423__$1 = state_79423;
var statearr_79476_80482 = state_79423__$1;
(statearr_79476_80482[(2)] = inst_79417);

(statearr_79476_80482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79424 === (19))){
var inst_79404 = (state_79423[(2)]);
var state_79423__$1 = state_79423;
var statearr_79479_80483 = state_79423__$1;
(statearr_79479_80483[(2)] = inst_79404);

(statearr_79479_80483[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79424 === (11))){
var inst_79372 = (state_79423[(8)]);
var inst_79387 = (state_79423[(7)]);
var inst_79387__$1 = cljs.core.seq(inst_79372);
var state_79423__$1 = (function (){var statearr_79480 = state_79423;
(statearr_79480[(7)] = inst_79387__$1);

return statearr_79480;
})();
if(inst_79387__$1){
var statearr_79481_80488 = state_79423__$1;
(statearr_79481_80488[(1)] = (14));

} else {
var statearr_79483_80489 = state_79423__$1;
(statearr_79483_80489[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79424 === (9))){
var inst_79411 = (state_79423[(2)]);
var inst_79412 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_79423__$1 = (function (){var statearr_79486 = state_79423;
(statearr_79486[(15)] = inst_79411);

return statearr_79486;
})();
if(cljs.core.truth_(inst_79412)){
var statearr_79488_80490 = state_79423__$1;
(statearr_79488_80490[(1)] = (21));

} else {
var statearr_79489_80491 = state_79423__$1;
(statearr_79489_80491[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79424 === (5))){
var inst_79362 = cljs.core.async.close_BANG_(out);
var state_79423__$1 = state_79423;
var statearr_79491_80492 = state_79423__$1;
(statearr_79491_80492[(2)] = inst_79362);

(statearr_79491_80492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79424 === (14))){
var inst_79387 = (state_79423[(7)]);
var inst_79390 = cljs.core.chunked_seq_QMARK_(inst_79387);
var state_79423__$1 = state_79423;
if(inst_79390){
var statearr_79492_80493 = state_79423__$1;
(statearr_79492_80493[(1)] = (17));

} else {
var statearr_79494_80494 = state_79423__$1;
(statearr_79494_80494[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79424 === (16))){
var inst_79407 = (state_79423[(2)]);
var state_79423__$1 = state_79423;
var statearr_79497_80495 = state_79423__$1;
(statearr_79497_80495[(2)] = inst_79407);

(statearr_79497_80495[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79424 === (10))){
var inst_79373 = (state_79423[(9)]);
var inst_79375 = (state_79423[(12)]);
var inst_79380 = cljs.core._nth(inst_79373,inst_79375);
var state_79423__$1 = state_79423;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_79423__$1,(13),out,inst_79380);
} else {
if((state_val_79424 === (18))){
var inst_79387 = (state_79423[(7)]);
var inst_79398 = cljs.core.first(inst_79387);
var state_79423__$1 = state_79423;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_79423__$1,(20),out,inst_79398);
} else {
if((state_val_79424 === (8))){
var inst_79374 = (state_79423[(10)]);
var inst_79375 = (state_79423[(12)]);
var inst_79377 = (inst_79375 < inst_79374);
var inst_79378 = inst_79377;
var state_79423__$1 = state_79423;
if(cljs.core.truth_(inst_79378)){
var statearr_79503_80496 = state_79423__$1;
(statearr_79503_80496[(1)] = (10));

} else {
var statearr_79505_80497 = state_79423__$1;
(statearr_79505_80497[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__60122__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__60122__auto____0 = (function (){
var statearr_79510 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_79510[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__60122__auto__);

(statearr_79510[(1)] = (1));

return statearr_79510;
});
var cljs$core$async$mapcat_STAR__$_state_machine__60122__auto____1 = (function (state_79423){
while(true){
var ret_value__60123__auto__ = (function (){try{while(true){
var result__60124__auto__ = switch__60121__auto__(state_79423);
if(cljs.core.keyword_identical_QMARK_(result__60124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60124__auto__;
}
break;
}
}catch (e79512){var ex__60125__auto__ = e79512;
var statearr_79513_80498 = state_79423;
(statearr_79513_80498[(2)] = ex__60125__auto__);


if(cljs.core.seq((state_79423[(4)]))){
var statearr_79514_80499 = state_79423;
(statearr_79514_80499[(1)] = cljs.core.first((state_79423[(4)])));

} else {
throw ex__60125__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80500 = state_79423;
state_79423 = G__80500;
continue;
} else {
return ret_value__60123__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__60122__auto__ = function(state_79423){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__60122__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__60122__auto____1.call(this,state_79423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__60122__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__60122__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__60122__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__60122__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__60122__auto__;
})()
})();
var state__60364__auto__ = (function (){var statearr_79517 = f__60363__auto__();
(statearr_79517[(6)] = c__60362__auto__);

return statearr_79517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60364__auto__);
}));

return c__60362__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__79522 = arguments.length;
switch (G__79522) {
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
var G__79531 = arguments.length;
switch (G__79531) {
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
var G__79536 = arguments.length;
switch (G__79536) {
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
var c__60362__auto___80507 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60363__auto__ = (function (){var switch__60121__auto__ = (function (state_79566){
var state_val_79567 = (state_79566[(1)]);
if((state_val_79567 === (7))){
var inst_79560 = (state_79566[(2)]);
var state_79566__$1 = state_79566;
var statearr_79569_80508 = state_79566__$1;
(statearr_79569_80508[(2)] = inst_79560);

(statearr_79569_80508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79567 === (1))){
var inst_79540 = null;
var state_79566__$1 = (function (){var statearr_79570 = state_79566;
(statearr_79570[(7)] = inst_79540);

return statearr_79570;
})();
var statearr_79571_80509 = state_79566__$1;
(statearr_79571_80509[(2)] = null);

(statearr_79571_80509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79567 === (4))){
var inst_79544 = (state_79566[(8)]);
var inst_79544__$1 = (state_79566[(2)]);
var inst_79545 = (inst_79544__$1 == null);
var inst_79546 = cljs.core.not(inst_79545);
var state_79566__$1 = (function (){var statearr_79572 = state_79566;
(statearr_79572[(8)] = inst_79544__$1);

return statearr_79572;
})();
if(inst_79546){
var statearr_79575_80510 = state_79566__$1;
(statearr_79575_80510[(1)] = (5));

} else {
var statearr_79576_80511 = state_79566__$1;
(statearr_79576_80511[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79567 === (6))){
var state_79566__$1 = state_79566;
var statearr_79578_80512 = state_79566__$1;
(statearr_79578_80512[(2)] = null);

(statearr_79578_80512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79567 === (3))){
var inst_79562 = (state_79566[(2)]);
var inst_79563 = cljs.core.async.close_BANG_(out);
var state_79566__$1 = (function (){var statearr_79580 = state_79566;
(statearr_79580[(9)] = inst_79562);

return statearr_79580;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_79566__$1,inst_79563);
} else {
if((state_val_79567 === (2))){
var state_79566__$1 = state_79566;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79566__$1,(4),ch);
} else {
if((state_val_79567 === (11))){
var inst_79544 = (state_79566[(8)]);
var inst_79554 = (state_79566[(2)]);
var inst_79540 = inst_79544;
var state_79566__$1 = (function (){var statearr_79582 = state_79566;
(statearr_79582[(7)] = inst_79540);

(statearr_79582[(10)] = inst_79554);

return statearr_79582;
})();
var statearr_79583_80513 = state_79566__$1;
(statearr_79583_80513[(2)] = null);

(statearr_79583_80513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79567 === (9))){
var inst_79544 = (state_79566[(8)]);
var state_79566__$1 = state_79566;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_79566__$1,(11),out,inst_79544);
} else {
if((state_val_79567 === (5))){
var inst_79544 = (state_79566[(8)]);
var inst_79540 = (state_79566[(7)]);
var inst_79548 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_79544,inst_79540);
var state_79566__$1 = state_79566;
if(inst_79548){
var statearr_79585_80514 = state_79566__$1;
(statearr_79585_80514[(1)] = (8));

} else {
var statearr_79587_80515 = state_79566__$1;
(statearr_79587_80515[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79567 === (10))){
var inst_79557 = (state_79566[(2)]);
var state_79566__$1 = state_79566;
var statearr_79588_80516 = state_79566__$1;
(statearr_79588_80516[(2)] = inst_79557);

(statearr_79588_80516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79567 === (8))){
var inst_79540 = (state_79566[(7)]);
var tmp79584 = inst_79540;
var inst_79540__$1 = tmp79584;
var state_79566__$1 = (function (){var statearr_79589 = state_79566;
(statearr_79589[(7)] = inst_79540__$1);

return statearr_79589;
})();
var statearr_79591_80520 = state_79566__$1;
(statearr_79591_80520[(2)] = null);

(statearr_79591_80520[(1)] = (2));


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
var cljs$core$async$state_machine__60122__auto__ = null;
var cljs$core$async$state_machine__60122__auto____0 = (function (){
var statearr_79597 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_79597[(0)] = cljs$core$async$state_machine__60122__auto__);

(statearr_79597[(1)] = (1));

return statearr_79597;
});
var cljs$core$async$state_machine__60122__auto____1 = (function (state_79566){
while(true){
var ret_value__60123__auto__ = (function (){try{while(true){
var result__60124__auto__ = switch__60121__auto__(state_79566);
if(cljs.core.keyword_identical_QMARK_(result__60124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60124__auto__;
}
break;
}
}catch (e79598){var ex__60125__auto__ = e79598;
var statearr_79599_80521 = state_79566;
(statearr_79599_80521[(2)] = ex__60125__auto__);


if(cljs.core.seq((state_79566[(4)]))){
var statearr_79600_80522 = state_79566;
(statearr_79600_80522[(1)] = cljs.core.first((state_79566[(4)])));

} else {
throw ex__60125__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80523 = state_79566;
state_79566 = G__80523;
continue;
} else {
return ret_value__60123__auto__;
}
break;
}
});
cljs$core$async$state_machine__60122__auto__ = function(state_79566){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60122__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60122__auto____1.call(this,state_79566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60122__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60122__auto____0;
cljs$core$async$state_machine__60122__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60122__auto____1;
return cljs$core$async$state_machine__60122__auto__;
})()
})();
var state__60364__auto__ = (function (){var statearr_79605 = f__60363__auto__();
(statearr_79605[(6)] = c__60362__auto___80507);

return statearr_79605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60364__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__79608 = arguments.length;
switch (G__79608) {
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
var c__60362__auto___80525 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60363__auto__ = (function (){var switch__60121__auto__ = (function (state_79653){
var state_val_79654 = (state_79653[(1)]);
if((state_val_79654 === (7))){
var inst_79649 = (state_79653[(2)]);
var state_79653__$1 = state_79653;
var statearr_79659_80526 = state_79653__$1;
(statearr_79659_80526[(2)] = inst_79649);

(statearr_79659_80526[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79654 === (1))){
var inst_79613 = (new Array(n));
var inst_79614 = inst_79613;
var inst_79615 = (0);
var state_79653__$1 = (function (){var statearr_79661 = state_79653;
(statearr_79661[(7)] = inst_79615);

(statearr_79661[(8)] = inst_79614);

return statearr_79661;
})();
var statearr_79663_80530 = state_79653__$1;
(statearr_79663_80530[(2)] = null);

(statearr_79663_80530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79654 === (4))){
var inst_79619 = (state_79653[(9)]);
var inst_79619__$1 = (state_79653[(2)]);
var inst_79620 = (inst_79619__$1 == null);
var inst_79621 = cljs.core.not(inst_79620);
var state_79653__$1 = (function (){var statearr_79664 = state_79653;
(statearr_79664[(9)] = inst_79619__$1);

return statearr_79664;
})();
if(inst_79621){
var statearr_79665_80531 = state_79653__$1;
(statearr_79665_80531[(1)] = (5));

} else {
var statearr_79666_80532 = state_79653__$1;
(statearr_79666_80532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79654 === (15))){
var inst_79643 = (state_79653[(2)]);
var state_79653__$1 = state_79653;
var statearr_79667_80533 = state_79653__$1;
(statearr_79667_80533[(2)] = inst_79643);

(statearr_79667_80533[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79654 === (13))){
var state_79653__$1 = state_79653;
var statearr_79668_80534 = state_79653__$1;
(statearr_79668_80534[(2)] = null);

(statearr_79668_80534[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79654 === (6))){
var inst_79615 = (state_79653[(7)]);
var inst_79639 = (inst_79615 > (0));
var state_79653__$1 = state_79653;
if(cljs.core.truth_(inst_79639)){
var statearr_79670_80535 = state_79653__$1;
(statearr_79670_80535[(1)] = (12));

} else {
var statearr_79671_80536 = state_79653__$1;
(statearr_79671_80536[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79654 === (3))){
var inst_79651 = (state_79653[(2)]);
var state_79653__$1 = state_79653;
return cljs.core.async.impl.ioc_helpers.return_chan(state_79653__$1,inst_79651);
} else {
if((state_val_79654 === (12))){
var inst_79614 = (state_79653[(8)]);
var inst_79641 = cljs.core.vec(inst_79614);
var state_79653__$1 = state_79653;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_79653__$1,(15),out,inst_79641);
} else {
if((state_val_79654 === (2))){
var state_79653__$1 = state_79653;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79653__$1,(4),ch);
} else {
if((state_val_79654 === (11))){
var inst_79633 = (state_79653[(2)]);
var inst_79634 = (new Array(n));
var inst_79614 = inst_79634;
var inst_79615 = (0);
var state_79653__$1 = (function (){var statearr_79674 = state_79653;
(statearr_79674[(7)] = inst_79615);

(statearr_79674[(8)] = inst_79614);

(statearr_79674[(10)] = inst_79633);

return statearr_79674;
})();
var statearr_79675_80537 = state_79653__$1;
(statearr_79675_80537[(2)] = null);

(statearr_79675_80537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79654 === (9))){
var inst_79614 = (state_79653[(8)]);
var inst_79631 = cljs.core.vec(inst_79614);
var state_79653__$1 = state_79653;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_79653__$1,(11),out,inst_79631);
} else {
if((state_val_79654 === (5))){
var inst_79615 = (state_79653[(7)]);
var inst_79614 = (state_79653[(8)]);
var inst_79625 = (state_79653[(11)]);
var inst_79619 = (state_79653[(9)]);
var inst_79624 = (inst_79614[inst_79615] = inst_79619);
var inst_79625__$1 = (inst_79615 + (1));
var inst_79626 = (inst_79625__$1 < n);
var state_79653__$1 = (function (){var statearr_79678 = state_79653;
(statearr_79678[(11)] = inst_79625__$1);

(statearr_79678[(12)] = inst_79624);

return statearr_79678;
})();
if(cljs.core.truth_(inst_79626)){
var statearr_79680_80538 = state_79653__$1;
(statearr_79680_80538[(1)] = (8));

} else {
var statearr_79681_80539 = state_79653__$1;
(statearr_79681_80539[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79654 === (14))){
var inst_79646 = (state_79653[(2)]);
var inst_79647 = cljs.core.async.close_BANG_(out);
var state_79653__$1 = (function (){var statearr_79683 = state_79653;
(statearr_79683[(13)] = inst_79646);

return statearr_79683;
})();
var statearr_79684_80540 = state_79653__$1;
(statearr_79684_80540[(2)] = inst_79647);

(statearr_79684_80540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79654 === (10))){
var inst_79637 = (state_79653[(2)]);
var state_79653__$1 = state_79653;
var statearr_79685_80541 = state_79653__$1;
(statearr_79685_80541[(2)] = inst_79637);

(statearr_79685_80541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79654 === (8))){
var inst_79614 = (state_79653[(8)]);
var inst_79625 = (state_79653[(11)]);
var tmp79682 = inst_79614;
var inst_79614__$1 = tmp79682;
var inst_79615 = inst_79625;
var state_79653__$1 = (function (){var statearr_79690 = state_79653;
(statearr_79690[(7)] = inst_79615);

(statearr_79690[(8)] = inst_79614__$1);

return statearr_79690;
})();
var statearr_79691_80542 = state_79653__$1;
(statearr_79691_80542[(2)] = null);

(statearr_79691_80542[(1)] = (2));


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
var cljs$core$async$state_machine__60122__auto__ = null;
var cljs$core$async$state_machine__60122__auto____0 = (function (){
var statearr_79692 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_79692[(0)] = cljs$core$async$state_machine__60122__auto__);

(statearr_79692[(1)] = (1));

return statearr_79692;
});
var cljs$core$async$state_machine__60122__auto____1 = (function (state_79653){
while(true){
var ret_value__60123__auto__ = (function (){try{while(true){
var result__60124__auto__ = switch__60121__auto__(state_79653);
if(cljs.core.keyword_identical_QMARK_(result__60124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60124__auto__;
}
break;
}
}catch (e79693){var ex__60125__auto__ = e79693;
var statearr_79694_80543 = state_79653;
(statearr_79694_80543[(2)] = ex__60125__auto__);


if(cljs.core.seq((state_79653[(4)]))){
var statearr_79695_80544 = state_79653;
(statearr_79695_80544[(1)] = cljs.core.first((state_79653[(4)])));

} else {
throw ex__60125__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80545 = state_79653;
state_79653 = G__80545;
continue;
} else {
return ret_value__60123__auto__;
}
break;
}
});
cljs$core$async$state_machine__60122__auto__ = function(state_79653){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60122__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60122__auto____1.call(this,state_79653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60122__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60122__auto____0;
cljs$core$async$state_machine__60122__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60122__auto____1;
return cljs$core$async$state_machine__60122__auto__;
})()
})();
var state__60364__auto__ = (function (){var statearr_79696 = f__60363__auto__();
(statearr_79696[(6)] = c__60362__auto___80525);

return statearr_79696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60364__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__79700 = arguments.length;
switch (G__79700) {
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
var c__60362__auto___80550 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60363__auto__ = (function (){var switch__60121__auto__ = (function (state_79744){
var state_val_79745 = (state_79744[(1)]);
if((state_val_79745 === (7))){
var inst_79740 = (state_79744[(2)]);
var state_79744__$1 = state_79744;
var statearr_79748_80551 = state_79744__$1;
(statearr_79748_80551[(2)] = inst_79740);

(statearr_79748_80551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79745 === (1))){
var inst_79702 = [];
var inst_79703 = inst_79702;
var inst_79704 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_79744__$1 = (function (){var statearr_79749 = state_79744;
(statearr_79749[(7)] = inst_79704);

(statearr_79749[(8)] = inst_79703);

return statearr_79749;
})();
var statearr_79750_80552 = state_79744__$1;
(statearr_79750_80552[(2)] = null);

(statearr_79750_80552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79745 === (4))){
var inst_79707 = (state_79744[(9)]);
var inst_79707__$1 = (state_79744[(2)]);
var inst_79708 = (inst_79707__$1 == null);
var inst_79709 = cljs.core.not(inst_79708);
var state_79744__$1 = (function (){var statearr_79751 = state_79744;
(statearr_79751[(9)] = inst_79707__$1);

return statearr_79751;
})();
if(inst_79709){
var statearr_79753_80553 = state_79744__$1;
(statearr_79753_80553[(1)] = (5));

} else {
var statearr_79754_80554 = state_79744__$1;
(statearr_79754_80554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79745 === (15))){
var inst_79734 = (state_79744[(2)]);
var state_79744__$1 = state_79744;
var statearr_79755_80555 = state_79744__$1;
(statearr_79755_80555[(2)] = inst_79734);

(statearr_79755_80555[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79745 === (13))){
var state_79744__$1 = state_79744;
var statearr_79756_80556 = state_79744__$1;
(statearr_79756_80556[(2)] = null);

(statearr_79756_80556[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79745 === (6))){
var inst_79703 = (state_79744[(8)]);
var inst_79729 = inst_79703.length;
var inst_79730 = (inst_79729 > (0));
var state_79744__$1 = state_79744;
if(cljs.core.truth_(inst_79730)){
var statearr_79759_80557 = state_79744__$1;
(statearr_79759_80557[(1)] = (12));

} else {
var statearr_79760_80558 = state_79744__$1;
(statearr_79760_80558[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79745 === (3))){
var inst_79742 = (state_79744[(2)]);
var state_79744__$1 = state_79744;
return cljs.core.async.impl.ioc_helpers.return_chan(state_79744__$1,inst_79742);
} else {
if((state_val_79745 === (12))){
var inst_79703 = (state_79744[(8)]);
var inst_79732 = cljs.core.vec(inst_79703);
var state_79744__$1 = state_79744;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_79744__$1,(15),out,inst_79732);
} else {
if((state_val_79745 === (2))){
var state_79744__$1 = state_79744;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79744__$1,(4),ch);
} else {
if((state_val_79745 === (11))){
var inst_79711 = (state_79744[(10)]);
var inst_79707 = (state_79744[(9)]);
var inst_79722 = (state_79744[(2)]);
var inst_79723 = [];
var inst_79724 = inst_79723.push(inst_79707);
var inst_79703 = inst_79723;
var inst_79704 = inst_79711;
var state_79744__$1 = (function (){var statearr_79763 = state_79744;
(statearr_79763[(7)] = inst_79704);

(statearr_79763[(11)] = inst_79722);

(statearr_79763[(12)] = inst_79724);

(statearr_79763[(8)] = inst_79703);

return statearr_79763;
})();
var statearr_79764_80562 = state_79744__$1;
(statearr_79764_80562[(2)] = null);

(statearr_79764_80562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79745 === (9))){
var inst_79703 = (state_79744[(8)]);
var inst_79720 = cljs.core.vec(inst_79703);
var state_79744__$1 = state_79744;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_79744__$1,(11),out,inst_79720);
} else {
if((state_val_79745 === (5))){
var inst_79711 = (state_79744[(10)]);
var inst_79704 = (state_79744[(7)]);
var inst_79707 = (state_79744[(9)]);
var inst_79711__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_79707) : f.call(null,inst_79707));
var inst_79713 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_79711__$1,inst_79704);
var inst_79714 = cljs.core.keyword_identical_QMARK_(inst_79704,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_79715 = ((inst_79713) || (inst_79714));
var state_79744__$1 = (function (){var statearr_79766 = state_79744;
(statearr_79766[(10)] = inst_79711__$1);

return statearr_79766;
})();
if(cljs.core.truth_(inst_79715)){
var statearr_79767_80563 = state_79744__$1;
(statearr_79767_80563[(1)] = (8));

} else {
var statearr_79768_80564 = state_79744__$1;
(statearr_79768_80564[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79745 === (14))){
var inst_79737 = (state_79744[(2)]);
var inst_79738 = cljs.core.async.close_BANG_(out);
var state_79744__$1 = (function (){var statearr_79770 = state_79744;
(statearr_79770[(13)] = inst_79737);

return statearr_79770;
})();
var statearr_79771_80565 = state_79744__$1;
(statearr_79771_80565[(2)] = inst_79738);

(statearr_79771_80565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79745 === (10))){
var inst_79727 = (state_79744[(2)]);
var state_79744__$1 = state_79744;
var statearr_79772_80566 = state_79744__$1;
(statearr_79772_80566[(2)] = inst_79727);

(statearr_79772_80566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79745 === (8))){
var inst_79711 = (state_79744[(10)]);
var inst_79707 = (state_79744[(9)]);
var inst_79703 = (state_79744[(8)]);
var inst_79717 = inst_79703.push(inst_79707);
var tmp79769 = inst_79703;
var inst_79703__$1 = tmp79769;
var inst_79704 = inst_79711;
var state_79744__$1 = (function (){var statearr_79776 = state_79744;
(statearr_79776[(7)] = inst_79704);

(statearr_79776[(14)] = inst_79717);

(statearr_79776[(8)] = inst_79703__$1);

return statearr_79776;
})();
var statearr_79777_80567 = state_79744__$1;
(statearr_79777_80567[(2)] = null);

(statearr_79777_80567[(1)] = (2));


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
var cljs$core$async$state_machine__60122__auto__ = null;
var cljs$core$async$state_machine__60122__auto____0 = (function (){
var statearr_79781 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_79781[(0)] = cljs$core$async$state_machine__60122__auto__);

(statearr_79781[(1)] = (1));

return statearr_79781;
});
var cljs$core$async$state_machine__60122__auto____1 = (function (state_79744){
while(true){
var ret_value__60123__auto__ = (function (){try{while(true){
var result__60124__auto__ = switch__60121__auto__(state_79744);
if(cljs.core.keyword_identical_QMARK_(result__60124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60124__auto__;
}
break;
}
}catch (e79782){var ex__60125__auto__ = e79782;
var statearr_79783_80568 = state_79744;
(statearr_79783_80568[(2)] = ex__60125__auto__);


if(cljs.core.seq((state_79744[(4)]))){
var statearr_79784_80569 = state_79744;
(statearr_79784_80569[(1)] = cljs.core.first((state_79744[(4)])));

} else {
throw ex__60125__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80570 = state_79744;
state_79744 = G__80570;
continue;
} else {
return ret_value__60123__auto__;
}
break;
}
});
cljs$core$async$state_machine__60122__auto__ = function(state_79744){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60122__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60122__auto____1.call(this,state_79744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60122__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60122__auto____0;
cljs$core$async$state_machine__60122__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60122__auto____1;
return cljs$core$async$state_machine__60122__auto__;
})()
})();
var state__60364__auto__ = (function (){var statearr_79785 = f__60363__auto__();
(statearr_79785[(6)] = c__60362__auto___80550);

return statearr_79785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60364__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
