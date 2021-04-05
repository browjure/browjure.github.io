goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__123631 = arguments.length;
switch (G__123631) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async123639 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async123639 = (function (f,blockable,meta123640){
this.f = f;
this.blockable = blockable;
this.meta123640 = meta123640;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async123639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_123641,meta123640__$1){
var self__ = this;
var _123641__$1 = this;
return (new cljs.core.async.t_cljs$core$async123639(self__.f,self__.blockable,meta123640__$1));
}));

(cljs.core.async.t_cljs$core$async123639.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_123641){
var self__ = this;
var _123641__$1 = this;
return self__.meta123640;
}));

(cljs.core.async.t_cljs$core$async123639.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async123639.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async123639.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async123639.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async123639.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta123640","meta123640",190459343,null)], null);
}));

(cljs.core.async.t_cljs$core$async123639.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async123639.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async123639");

(cljs.core.async.t_cljs$core$async123639.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async123639");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async123639.
 */
cljs.core.async.__GT_t_cljs$core$async123639 = (function cljs$core$async$__GT_t_cljs$core$async123639(f__$1,blockable__$1,meta123640){
return (new cljs.core.async.t_cljs$core$async123639(f__$1,blockable__$1,meta123640));
});

}

return (new cljs.core.async.t_cljs$core$async123639(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__123676 = arguments.length;
switch (G__123676) {
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
var G__123678 = arguments.length;
switch (G__123678) {
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
var G__123682 = arguments.length;
switch (G__123682) {
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
var val_125858 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_125858) : fn1.call(null,val_125858));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_125858) : fn1.call(null,val_125858));
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
var G__123691 = arguments.length;
switch (G__123691) {
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
var n__4613__auto___125864 = n;
var x_125865 = (0);
while(true){
if((x_125865 < n__4613__auto___125864)){
(a[x_125865] = x_125865);

var G__125869 = (x_125865 + (1));
x_125865 = G__125869;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async123704 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async123704 = (function (flag,meta123705){
this.flag = flag;
this.meta123705 = meta123705;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async123704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_123706,meta123705__$1){
var self__ = this;
var _123706__$1 = this;
return (new cljs.core.async.t_cljs$core$async123704(self__.flag,meta123705__$1));
}));

(cljs.core.async.t_cljs$core$async123704.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_123706){
var self__ = this;
var _123706__$1 = this;
return self__.meta123705;
}));

(cljs.core.async.t_cljs$core$async123704.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async123704.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async123704.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async123704.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async123704.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta123705","meta123705",56635261,null)], null);
}));

(cljs.core.async.t_cljs$core$async123704.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async123704.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async123704");

(cljs.core.async.t_cljs$core$async123704.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async123704");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async123704.
 */
cljs.core.async.__GT_t_cljs$core$async123704 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async123704(flag__$1,meta123705){
return (new cljs.core.async.t_cljs$core$async123704(flag__$1,meta123705));
});

}

return (new cljs.core.async.t_cljs$core$async123704(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async123718 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async123718 = (function (flag,cb,meta123719){
this.flag = flag;
this.cb = cb;
this.meta123719 = meta123719;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async123718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_123720,meta123719__$1){
var self__ = this;
var _123720__$1 = this;
return (new cljs.core.async.t_cljs$core$async123718(self__.flag,self__.cb,meta123719__$1));
}));

(cljs.core.async.t_cljs$core$async123718.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_123720){
var self__ = this;
var _123720__$1 = this;
return self__.meta123719;
}));

(cljs.core.async.t_cljs$core$async123718.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async123718.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async123718.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async123718.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async123718.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta123719","meta123719",-1673555183,null)], null);
}));

(cljs.core.async.t_cljs$core$async123718.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async123718.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async123718");

(cljs.core.async.t_cljs$core$async123718.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async123718");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async123718.
 */
cljs.core.async.__GT_t_cljs$core$async123718 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async123718(flag__$1,cb__$1,meta123719){
return (new cljs.core.async.t_cljs$core$async123718(flag__$1,cb__$1,meta123719));
});

}

return (new cljs.core.async.t_cljs$core$async123718(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__123732_SHARP_){
var G__123737 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__123732_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__123737) : fret.call(null,G__123737));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__123733_SHARP_){
var G__123738 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__123733_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__123738) : fret.call(null,G__123738));
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
var G__125879 = (i + (1));
i = G__125879;
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
var len__4736__auto___125880 = arguments.length;
var i__4737__auto___125881 = (0);
while(true){
if((i__4737__auto___125881 < len__4736__auto___125880)){
args__4742__auto__.push((arguments[i__4737__auto___125881]));

var G__125882 = (i__4737__auto___125881 + (1));
i__4737__auto___125881 = G__125882;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__123743){
var map__123744 = p__123743;
var map__123744__$1 = (((((!((map__123744 == null))))?(((((map__123744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__123744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__123744):map__123744);
var opts = map__123744__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq123739){
var G__123740 = cljs.core.first(seq123739);
var seq123739__$1 = cljs.core.next(seq123739);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__123740,seq123739__$1);
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
var G__123753 = arguments.length;
switch (G__123753) {
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
var c__60388__auto___125886 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60389__auto__ = (function (){var switch__60365__auto__ = (function (state_123783){
var state_val_123784 = (state_123783[(1)]);
if((state_val_123784 === (7))){
var inst_123775 = (state_123783[(2)]);
var state_123783__$1 = state_123783;
var statearr_123789_125887 = state_123783__$1;
(statearr_123789_125887[(2)] = inst_123775);

(statearr_123789_125887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123784 === (1))){
var state_123783__$1 = state_123783;
var statearr_123790_125888 = state_123783__$1;
(statearr_123790_125888[(2)] = null);

(statearr_123790_125888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123784 === (4))){
var inst_123758 = (state_123783[(7)]);
var inst_123758__$1 = (state_123783[(2)]);
var inst_123759 = (inst_123758__$1 == null);
var state_123783__$1 = (function (){var statearr_123792 = state_123783;
(statearr_123792[(7)] = inst_123758__$1);

return statearr_123792;
})();
if(cljs.core.truth_(inst_123759)){
var statearr_123793_125890 = state_123783__$1;
(statearr_123793_125890[(1)] = (5));

} else {
var statearr_123795_125894 = state_123783__$1;
(statearr_123795_125894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123784 === (13))){
var state_123783__$1 = state_123783;
var statearr_123796_125895 = state_123783__$1;
(statearr_123796_125895[(2)] = null);

(statearr_123796_125895[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123784 === (6))){
var inst_123758 = (state_123783[(7)]);
var state_123783__$1 = state_123783;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_123783__$1,(11),to,inst_123758);
} else {
if((state_val_123784 === (3))){
var inst_123777 = (state_123783[(2)]);
var state_123783__$1 = state_123783;
return cljs.core.async.impl.ioc_helpers.return_chan(state_123783__$1,inst_123777);
} else {
if((state_val_123784 === (12))){
var state_123783__$1 = state_123783;
var statearr_123798_125897 = state_123783__$1;
(statearr_123798_125897[(2)] = null);

(statearr_123798_125897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123784 === (2))){
var state_123783__$1 = state_123783;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_123783__$1,(4),from);
} else {
if((state_val_123784 === (11))){
var inst_123768 = (state_123783[(2)]);
var state_123783__$1 = state_123783;
if(cljs.core.truth_(inst_123768)){
var statearr_123799_125901 = state_123783__$1;
(statearr_123799_125901[(1)] = (12));

} else {
var statearr_123800_125902 = state_123783__$1;
(statearr_123800_125902[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123784 === (9))){
var state_123783__$1 = state_123783;
var statearr_123801_125903 = state_123783__$1;
(statearr_123801_125903[(2)] = null);

(statearr_123801_125903[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123784 === (5))){
var state_123783__$1 = state_123783;
if(cljs.core.truth_(close_QMARK_)){
var statearr_123802_125904 = state_123783__$1;
(statearr_123802_125904[(1)] = (8));

} else {
var statearr_123803_125905 = state_123783__$1;
(statearr_123803_125905[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123784 === (14))){
var inst_123773 = (state_123783[(2)]);
var state_123783__$1 = state_123783;
var statearr_123804_125906 = state_123783__$1;
(statearr_123804_125906[(2)] = inst_123773);

(statearr_123804_125906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123784 === (10))){
var inst_123765 = (state_123783[(2)]);
var state_123783__$1 = state_123783;
var statearr_123805_125907 = state_123783__$1;
(statearr_123805_125907[(2)] = inst_123765);

(statearr_123805_125907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123784 === (8))){
var inst_123762 = cljs.core.async.close_BANG_(to);
var state_123783__$1 = state_123783;
var statearr_123806_125908 = state_123783__$1;
(statearr_123806_125908[(2)] = inst_123762);

(statearr_123806_125908[(1)] = (10));


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
var statearr_123809 = [null,null,null,null,null,null,null,null];
(statearr_123809[(0)] = cljs$core$async$state_machine__60366__auto__);

(statearr_123809[(1)] = (1));

return statearr_123809;
});
var cljs$core$async$state_machine__60366__auto____1 = (function (state_123783){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_123783);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e123810){var ex__60369__auto__ = e123810;
var statearr_123811_125909 = state_123783;
(statearr_123811_125909[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_123783[(4)]))){
var statearr_123813_125911 = state_123783;
(statearr_123813_125911[(1)] = cljs.core.first((state_123783[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__125912 = state_123783;
state_123783 = G__125912;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
cljs$core$async$state_machine__60366__auto__ = function(state_123783){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60366__auto____1.call(this,state_123783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60366__auto____0;
cljs$core$async$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60366__auto____1;
return cljs$core$async$state_machine__60366__auto__;
})()
})();
var state__60390__auto__ = (function (){var statearr_123814 = f__60389__auto__();
(statearr_123814[(6)] = c__60388__auto___125886);

return statearr_123814;
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
var process = (function (p__123819){
var vec__123820 = p__123819;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123820,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123820,(1),null);
var job = vec__123820;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__60388__auto___125913 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60389__auto__ = (function (){var switch__60365__auto__ = (function (state_123830){
var state_val_123831 = (state_123830[(1)]);
if((state_val_123831 === (1))){
var state_123830__$1 = state_123830;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_123830__$1,(2),res,v);
} else {
if((state_val_123831 === (2))){
var inst_123826 = (state_123830[(2)]);
var inst_123828 = cljs.core.async.close_BANG_(res);
var state_123830__$1 = (function (){var statearr_123833 = state_123830;
(statearr_123833[(7)] = inst_123826);

return statearr_123833;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_123830__$1,inst_123828);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____0 = (function (){
var statearr_123834 = [null,null,null,null,null,null,null,null];
(statearr_123834[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__);

(statearr_123834[(1)] = (1));

return statearr_123834;
});
var cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____1 = (function (state_123830){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_123830);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e123835){var ex__60369__auto__ = e123835;
var statearr_123836_125915 = state_123830;
(statearr_123836_125915[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_123830[(4)]))){
var statearr_123837_125916 = state_123830;
(statearr_123837_125916[(1)] = cljs.core.first((state_123830[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__125917 = state_123830;
state_123830 = G__125917;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__ = function(state_123830){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____1.call(this,state_123830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__;
})()
})();
var state__60390__auto__ = (function (){var statearr_123839 = f__60389__auto__();
(statearr_123839[(6)] = c__60388__auto___125913);

return statearr_123839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60390__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__123842){
var vec__123843 = p__123842;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123843,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123843,(1),null);
var job = vec__123843;
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
var n__4613__auto___125923 = n;
var __125924 = (0);
while(true){
if((__125924 < n__4613__auto___125923)){
var G__123846_125926 = type;
var G__123846_125927__$1 = (((G__123846_125926 instanceof cljs.core.Keyword))?G__123846_125926.fqn:null);
switch (G__123846_125927__$1) {
case "compute":
var c__60388__auto___125929 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__125924,c__60388__auto___125929,G__123846_125926,G__123846_125927__$1,n__4613__auto___125923,jobs,results,process,async){
return (function (){
var f__60389__auto__ = (function (){var switch__60365__auto__ = ((function (__125924,c__60388__auto___125929,G__123846_125926,G__123846_125927__$1,n__4613__auto___125923,jobs,results,process,async){
return (function (state_123859){
var state_val_123860 = (state_123859[(1)]);
if((state_val_123860 === (1))){
var state_123859__$1 = state_123859;
var statearr_123863_125930 = state_123859__$1;
(statearr_123863_125930[(2)] = null);

(statearr_123863_125930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123860 === (2))){
var state_123859__$1 = state_123859;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_123859__$1,(4),jobs);
} else {
if((state_val_123860 === (3))){
var inst_123857 = (state_123859[(2)]);
var state_123859__$1 = state_123859;
return cljs.core.async.impl.ioc_helpers.return_chan(state_123859__$1,inst_123857);
} else {
if((state_val_123860 === (4))){
var inst_123849 = (state_123859[(2)]);
var inst_123850 = process(inst_123849);
var state_123859__$1 = state_123859;
if(cljs.core.truth_(inst_123850)){
var statearr_123864_125931 = state_123859__$1;
(statearr_123864_125931[(1)] = (5));

} else {
var statearr_123865_125932 = state_123859__$1;
(statearr_123865_125932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123860 === (5))){
var state_123859__$1 = state_123859;
var statearr_123866_125933 = state_123859__$1;
(statearr_123866_125933[(2)] = null);

(statearr_123866_125933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123860 === (6))){
var state_123859__$1 = state_123859;
var statearr_123867_125934 = state_123859__$1;
(statearr_123867_125934[(2)] = null);

(statearr_123867_125934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123860 === (7))){
var inst_123855 = (state_123859[(2)]);
var state_123859__$1 = state_123859;
var statearr_123868_125935 = state_123859__$1;
(statearr_123868_125935[(2)] = inst_123855);

(statearr_123868_125935[(1)] = (3));


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
});})(__125924,c__60388__auto___125929,G__123846_125926,G__123846_125927__$1,n__4613__auto___125923,jobs,results,process,async))
;
return ((function (__125924,switch__60365__auto__,c__60388__auto___125929,G__123846_125926,G__123846_125927__$1,n__4613__auto___125923,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____0 = (function (){
var statearr_123869 = [null,null,null,null,null,null,null];
(statearr_123869[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__);

(statearr_123869[(1)] = (1));

return statearr_123869;
});
var cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____1 = (function (state_123859){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_123859);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e123870){var ex__60369__auto__ = e123870;
var statearr_123871_125936 = state_123859;
(statearr_123871_125936[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_123859[(4)]))){
var statearr_123872_125937 = state_123859;
(statearr_123872_125937[(1)] = cljs.core.first((state_123859[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__125938 = state_123859;
state_123859 = G__125938;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__ = function(state_123859){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____1.call(this,state_123859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__;
})()
;})(__125924,switch__60365__auto__,c__60388__auto___125929,G__123846_125926,G__123846_125927__$1,n__4613__auto___125923,jobs,results,process,async))
})();
var state__60390__auto__ = (function (){var statearr_123877 = f__60389__auto__();
(statearr_123877[(6)] = c__60388__auto___125929);

return statearr_123877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60390__auto__);
});})(__125924,c__60388__auto___125929,G__123846_125926,G__123846_125927__$1,n__4613__auto___125923,jobs,results,process,async))
);


break;
case "async":
var c__60388__auto___125939 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__125924,c__60388__auto___125939,G__123846_125926,G__123846_125927__$1,n__4613__auto___125923,jobs,results,process,async){
return (function (){
var f__60389__auto__ = (function (){var switch__60365__auto__ = ((function (__125924,c__60388__auto___125939,G__123846_125926,G__123846_125927__$1,n__4613__auto___125923,jobs,results,process,async){
return (function (state_123894){
var state_val_123895 = (state_123894[(1)]);
if((state_val_123895 === (1))){
var state_123894__$1 = state_123894;
var statearr_123896_125942 = state_123894__$1;
(statearr_123896_125942[(2)] = null);

(statearr_123896_125942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123895 === (2))){
var state_123894__$1 = state_123894;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_123894__$1,(4),jobs);
} else {
if((state_val_123895 === (3))){
var inst_123892 = (state_123894[(2)]);
var state_123894__$1 = state_123894;
return cljs.core.async.impl.ioc_helpers.return_chan(state_123894__$1,inst_123892);
} else {
if((state_val_123895 === (4))){
var inst_123884 = (state_123894[(2)]);
var inst_123885 = async(inst_123884);
var state_123894__$1 = state_123894;
if(cljs.core.truth_(inst_123885)){
var statearr_123898_125943 = state_123894__$1;
(statearr_123898_125943[(1)] = (5));

} else {
var statearr_123899_125944 = state_123894__$1;
(statearr_123899_125944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123895 === (5))){
var state_123894__$1 = state_123894;
var statearr_123900_125948 = state_123894__$1;
(statearr_123900_125948[(2)] = null);

(statearr_123900_125948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123895 === (6))){
var state_123894__$1 = state_123894;
var statearr_123905_125949 = state_123894__$1;
(statearr_123905_125949[(2)] = null);

(statearr_123905_125949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123895 === (7))){
var inst_123890 = (state_123894[(2)]);
var state_123894__$1 = state_123894;
var statearr_123909_125950 = state_123894__$1;
(statearr_123909_125950[(2)] = inst_123890);

(statearr_123909_125950[(1)] = (3));


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
});})(__125924,c__60388__auto___125939,G__123846_125926,G__123846_125927__$1,n__4613__auto___125923,jobs,results,process,async))
;
return ((function (__125924,switch__60365__auto__,c__60388__auto___125939,G__123846_125926,G__123846_125927__$1,n__4613__auto___125923,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____0 = (function (){
var statearr_123910 = [null,null,null,null,null,null,null];
(statearr_123910[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__);

(statearr_123910[(1)] = (1));

return statearr_123910;
});
var cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____1 = (function (state_123894){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_123894);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e123914){var ex__60369__auto__ = e123914;
var statearr_123915_125951 = state_123894;
(statearr_123915_125951[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_123894[(4)]))){
var statearr_123919_125952 = state_123894;
(statearr_123919_125952[(1)] = cljs.core.first((state_123894[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__125953 = state_123894;
state_123894 = G__125953;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__ = function(state_123894){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____1.call(this,state_123894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__;
})()
;})(__125924,switch__60365__auto__,c__60388__auto___125939,G__123846_125926,G__123846_125927__$1,n__4613__auto___125923,jobs,results,process,async))
})();
var state__60390__auto__ = (function (){var statearr_123920 = f__60389__auto__();
(statearr_123920[(6)] = c__60388__auto___125939);

return statearr_123920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60390__auto__);
});})(__125924,c__60388__auto___125939,G__123846_125926,G__123846_125927__$1,n__4613__auto___125923,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__123846_125927__$1)].join('')));

}

var G__125954 = (__125924 + (1));
__125924 = G__125954;
continue;
} else {
}
break;
}

var c__60388__auto___125955 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60389__auto__ = (function (){var switch__60365__auto__ = (function (state_123954){
var state_val_123955 = (state_123954[(1)]);
if((state_val_123955 === (7))){
var inst_123946 = (state_123954[(2)]);
var state_123954__$1 = state_123954;
var statearr_123956_125956 = state_123954__$1;
(statearr_123956_125956[(2)] = inst_123946);

(statearr_123956_125956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123955 === (1))){
var state_123954__$1 = state_123954;
var statearr_123957_125957 = state_123954__$1;
(statearr_123957_125957[(2)] = null);

(statearr_123957_125957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123955 === (4))){
var inst_123926 = (state_123954[(7)]);
var inst_123926__$1 = (state_123954[(2)]);
var inst_123927 = (inst_123926__$1 == null);
var state_123954__$1 = (function (){var statearr_123958 = state_123954;
(statearr_123958[(7)] = inst_123926__$1);

return statearr_123958;
})();
if(cljs.core.truth_(inst_123927)){
var statearr_123959_125958 = state_123954__$1;
(statearr_123959_125958[(1)] = (5));

} else {
var statearr_123960_125959 = state_123954__$1;
(statearr_123960_125959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123955 === (6))){
var inst_123935 = (state_123954[(8)]);
var inst_123926 = (state_123954[(7)]);
var inst_123935__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_123937 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_123938 = [inst_123926,inst_123935__$1];
var inst_123939 = (new cljs.core.PersistentVector(null,2,(5),inst_123937,inst_123938,null));
var state_123954__$1 = (function (){var statearr_123961 = state_123954;
(statearr_123961[(8)] = inst_123935__$1);

return statearr_123961;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_123954__$1,(8),jobs,inst_123939);
} else {
if((state_val_123955 === (3))){
var inst_123948 = (state_123954[(2)]);
var state_123954__$1 = state_123954;
return cljs.core.async.impl.ioc_helpers.return_chan(state_123954__$1,inst_123948);
} else {
if((state_val_123955 === (2))){
var state_123954__$1 = state_123954;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_123954__$1,(4),from);
} else {
if((state_val_123955 === (9))){
var inst_123943 = (state_123954[(2)]);
var state_123954__$1 = (function (){var statearr_123963 = state_123954;
(statearr_123963[(9)] = inst_123943);

return statearr_123963;
})();
var statearr_123964_125960 = state_123954__$1;
(statearr_123964_125960[(2)] = null);

(statearr_123964_125960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123955 === (5))){
var inst_123929 = cljs.core.async.close_BANG_(jobs);
var state_123954__$1 = state_123954;
var statearr_123965_125961 = state_123954__$1;
(statearr_123965_125961[(2)] = inst_123929);

(statearr_123965_125961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123955 === (8))){
var inst_123935 = (state_123954[(8)]);
var inst_123941 = (state_123954[(2)]);
var state_123954__$1 = (function (){var statearr_123966 = state_123954;
(statearr_123966[(10)] = inst_123941);

return statearr_123966;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_123954__$1,(9),results,inst_123935);
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
var statearr_123971 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_123971[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__);

(statearr_123971[(1)] = (1));

return statearr_123971;
});
var cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____1 = (function (state_123954){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_123954);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e123972){var ex__60369__auto__ = e123972;
var statearr_123973_125962 = state_123954;
(statearr_123973_125962[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_123954[(4)]))){
var statearr_123974_125963 = state_123954;
(statearr_123974_125963[(1)] = cljs.core.first((state_123954[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__125964 = state_123954;
state_123954 = G__125964;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__ = function(state_123954){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____1.call(this,state_123954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__;
})()
})();
var state__60390__auto__ = (function (){var statearr_123975 = f__60389__auto__();
(statearr_123975[(6)] = c__60388__auto___125955);

return statearr_123975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60390__auto__);
}));


var c__60388__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60389__auto__ = (function (){var switch__60365__auto__ = (function (state_124013){
var state_val_124014 = (state_124013[(1)]);
if((state_val_124014 === (7))){
var inst_124009 = (state_124013[(2)]);
var state_124013__$1 = state_124013;
var statearr_124015_125965 = state_124013__$1;
(statearr_124015_125965[(2)] = inst_124009);

(statearr_124015_125965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124014 === (20))){
var state_124013__$1 = state_124013;
var statearr_124016_125966 = state_124013__$1;
(statearr_124016_125966[(2)] = null);

(statearr_124016_125966[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124014 === (1))){
var state_124013__$1 = state_124013;
var statearr_124017_125967 = state_124013__$1;
(statearr_124017_125967[(2)] = null);

(statearr_124017_125967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124014 === (4))){
var inst_123978 = (state_124013[(7)]);
var inst_123978__$1 = (state_124013[(2)]);
var inst_123979 = (inst_123978__$1 == null);
var state_124013__$1 = (function (){var statearr_124018 = state_124013;
(statearr_124018[(7)] = inst_123978__$1);

return statearr_124018;
})();
if(cljs.core.truth_(inst_123979)){
var statearr_124019_125968 = state_124013__$1;
(statearr_124019_125968[(1)] = (5));

} else {
var statearr_124020_125969 = state_124013__$1;
(statearr_124020_125969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124014 === (15))){
var inst_123991 = (state_124013[(8)]);
var state_124013__$1 = state_124013;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_124013__$1,(18),to,inst_123991);
} else {
if((state_val_124014 === (21))){
var inst_124004 = (state_124013[(2)]);
var state_124013__$1 = state_124013;
var statearr_124021_125970 = state_124013__$1;
(statearr_124021_125970[(2)] = inst_124004);

(statearr_124021_125970[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124014 === (13))){
var inst_124006 = (state_124013[(2)]);
var state_124013__$1 = (function (){var statearr_124022 = state_124013;
(statearr_124022[(9)] = inst_124006);

return statearr_124022;
})();
var statearr_124023_125971 = state_124013__$1;
(statearr_124023_125971[(2)] = null);

(statearr_124023_125971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124014 === (6))){
var inst_123978 = (state_124013[(7)]);
var state_124013__$1 = state_124013;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_124013__$1,(11),inst_123978);
} else {
if((state_val_124014 === (17))){
var inst_123999 = (state_124013[(2)]);
var state_124013__$1 = state_124013;
if(cljs.core.truth_(inst_123999)){
var statearr_124024_125972 = state_124013__$1;
(statearr_124024_125972[(1)] = (19));

} else {
var statearr_124025_125973 = state_124013__$1;
(statearr_124025_125973[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124014 === (3))){
var inst_124011 = (state_124013[(2)]);
var state_124013__$1 = state_124013;
return cljs.core.async.impl.ioc_helpers.return_chan(state_124013__$1,inst_124011);
} else {
if((state_val_124014 === (12))){
var inst_123988 = (state_124013[(10)]);
var state_124013__$1 = state_124013;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_124013__$1,(14),inst_123988);
} else {
if((state_val_124014 === (2))){
var state_124013__$1 = state_124013;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_124013__$1,(4),results);
} else {
if((state_val_124014 === (19))){
var state_124013__$1 = state_124013;
var statearr_124026_125974 = state_124013__$1;
(statearr_124026_125974[(2)] = null);

(statearr_124026_125974[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124014 === (11))){
var inst_123988 = (state_124013[(2)]);
var state_124013__$1 = (function (){var statearr_124027 = state_124013;
(statearr_124027[(10)] = inst_123988);

return statearr_124027;
})();
var statearr_124028_125975 = state_124013__$1;
(statearr_124028_125975[(2)] = null);

(statearr_124028_125975[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124014 === (9))){
var state_124013__$1 = state_124013;
var statearr_124029_125976 = state_124013__$1;
(statearr_124029_125976[(2)] = null);

(statearr_124029_125976[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124014 === (5))){
var state_124013__$1 = state_124013;
if(cljs.core.truth_(close_QMARK_)){
var statearr_124030_125977 = state_124013__$1;
(statearr_124030_125977[(1)] = (8));

} else {
var statearr_124031_125978 = state_124013__$1;
(statearr_124031_125978[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124014 === (14))){
var inst_123991 = (state_124013[(8)]);
var inst_123991__$1 = (state_124013[(2)]);
var inst_123992 = (inst_123991__$1 == null);
var inst_123993 = cljs.core.not(inst_123992);
var state_124013__$1 = (function (){var statearr_124032 = state_124013;
(statearr_124032[(8)] = inst_123991__$1);

return statearr_124032;
})();
if(inst_123993){
var statearr_124033_125979 = state_124013__$1;
(statearr_124033_125979[(1)] = (15));

} else {
var statearr_124034_125983 = state_124013__$1;
(statearr_124034_125983[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124014 === (16))){
var state_124013__$1 = state_124013;
var statearr_124035_125985 = state_124013__$1;
(statearr_124035_125985[(2)] = false);

(statearr_124035_125985[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124014 === (10))){
var inst_123985 = (state_124013[(2)]);
var state_124013__$1 = state_124013;
var statearr_124036_125990 = state_124013__$1;
(statearr_124036_125990[(2)] = inst_123985);

(statearr_124036_125990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124014 === (18))){
var inst_123996 = (state_124013[(2)]);
var state_124013__$1 = state_124013;
var statearr_124037_125991 = state_124013__$1;
(statearr_124037_125991[(2)] = inst_123996);

(statearr_124037_125991[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124014 === (8))){
var inst_123982 = cljs.core.async.close_BANG_(to);
var state_124013__$1 = state_124013;
var statearr_124038_125994 = state_124013__$1;
(statearr_124038_125994[(2)] = inst_123982);

(statearr_124038_125994[(1)] = (10));


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
var statearr_124039 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_124039[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__);

(statearr_124039[(1)] = (1));

return statearr_124039;
});
var cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____1 = (function (state_124013){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_124013);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e124040){var ex__60369__auto__ = e124040;
var statearr_124041_125996 = state_124013;
(statearr_124041_125996[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_124013[(4)]))){
var statearr_124042_125998 = state_124013;
(statearr_124042_125998[(1)] = cljs.core.first((state_124013[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__125999 = state_124013;
state_124013 = G__125999;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__ = function(state_124013){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____1.call(this,state_124013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__60366__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__60366__auto__;
})()
})();
var state__60390__auto__ = (function (){var statearr_124045 = f__60389__auto__();
(statearr_124045[(6)] = c__60388__auto__);

return statearr_124045;
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
var G__124047 = arguments.length;
switch (G__124047) {
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
var G__124049 = arguments.length;
switch (G__124049) {
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
var G__124053 = arguments.length;
switch (G__124053) {
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
var c__60388__auto___126004 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60389__auto__ = (function (){var switch__60365__auto__ = (function (state_124081){
var state_val_124082 = (state_124081[(1)]);
if((state_val_124082 === (7))){
var inst_124077 = (state_124081[(2)]);
var state_124081__$1 = state_124081;
var statearr_124083_126005 = state_124081__$1;
(statearr_124083_126005[(2)] = inst_124077);

(statearr_124083_126005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124082 === (1))){
var state_124081__$1 = state_124081;
var statearr_124084_126006 = state_124081__$1;
(statearr_124084_126006[(2)] = null);

(statearr_124084_126006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124082 === (4))){
var inst_124058 = (state_124081[(7)]);
var inst_124058__$1 = (state_124081[(2)]);
var inst_124059 = (inst_124058__$1 == null);
var state_124081__$1 = (function (){var statearr_124086 = state_124081;
(statearr_124086[(7)] = inst_124058__$1);

return statearr_124086;
})();
if(cljs.core.truth_(inst_124059)){
var statearr_124087_126008 = state_124081__$1;
(statearr_124087_126008[(1)] = (5));

} else {
var statearr_124088_126009 = state_124081__$1;
(statearr_124088_126009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124082 === (13))){
var state_124081__$1 = state_124081;
var statearr_124089_126011 = state_124081__$1;
(statearr_124089_126011[(2)] = null);

(statearr_124089_126011[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124082 === (6))){
var inst_124058 = (state_124081[(7)]);
var inst_124064 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_124058) : p.call(null,inst_124058));
var state_124081__$1 = state_124081;
if(cljs.core.truth_(inst_124064)){
var statearr_124090_126012 = state_124081__$1;
(statearr_124090_126012[(1)] = (9));

} else {
var statearr_124092_126013 = state_124081__$1;
(statearr_124092_126013[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124082 === (3))){
var inst_124079 = (state_124081[(2)]);
var state_124081__$1 = state_124081;
return cljs.core.async.impl.ioc_helpers.return_chan(state_124081__$1,inst_124079);
} else {
if((state_val_124082 === (12))){
var state_124081__$1 = state_124081;
var statearr_124094_126014 = state_124081__$1;
(statearr_124094_126014[(2)] = null);

(statearr_124094_126014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124082 === (2))){
var state_124081__$1 = state_124081;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_124081__$1,(4),ch);
} else {
if((state_val_124082 === (11))){
var inst_124058 = (state_124081[(7)]);
var inst_124068 = (state_124081[(2)]);
var state_124081__$1 = state_124081;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_124081__$1,(8),inst_124068,inst_124058);
} else {
if((state_val_124082 === (9))){
var state_124081__$1 = state_124081;
var statearr_124095_126015 = state_124081__$1;
(statearr_124095_126015[(2)] = tc);

(statearr_124095_126015[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124082 === (5))){
var inst_124061 = cljs.core.async.close_BANG_(tc);
var inst_124062 = cljs.core.async.close_BANG_(fc);
var state_124081__$1 = (function (){var statearr_124096 = state_124081;
(statearr_124096[(8)] = inst_124061);

return statearr_124096;
})();
var statearr_124097_126016 = state_124081__$1;
(statearr_124097_126016[(2)] = inst_124062);

(statearr_124097_126016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124082 === (14))){
var inst_124075 = (state_124081[(2)]);
var state_124081__$1 = state_124081;
var statearr_124098_126017 = state_124081__$1;
(statearr_124098_126017[(2)] = inst_124075);

(statearr_124098_126017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124082 === (10))){
var state_124081__$1 = state_124081;
var statearr_124099_126019 = state_124081__$1;
(statearr_124099_126019[(2)] = fc);

(statearr_124099_126019[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124082 === (8))){
var inst_124070 = (state_124081[(2)]);
var state_124081__$1 = state_124081;
if(cljs.core.truth_(inst_124070)){
var statearr_124100_126020 = state_124081__$1;
(statearr_124100_126020[(1)] = (12));

} else {
var statearr_124101_126021 = state_124081__$1;
(statearr_124101_126021[(1)] = (13));

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
var statearr_124102 = [null,null,null,null,null,null,null,null,null];
(statearr_124102[(0)] = cljs$core$async$state_machine__60366__auto__);

(statearr_124102[(1)] = (1));

return statearr_124102;
});
var cljs$core$async$state_machine__60366__auto____1 = (function (state_124081){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_124081);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e124103){var ex__60369__auto__ = e124103;
var statearr_124104_126024 = state_124081;
(statearr_124104_126024[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_124081[(4)]))){
var statearr_124105_126025 = state_124081;
(statearr_124105_126025[(1)] = cljs.core.first((state_124081[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__126026 = state_124081;
state_124081 = G__126026;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
cljs$core$async$state_machine__60366__auto__ = function(state_124081){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60366__auto____1.call(this,state_124081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60366__auto____0;
cljs$core$async$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60366__auto____1;
return cljs$core$async$state_machine__60366__auto__;
})()
})();
var state__60390__auto__ = (function (){var statearr_124106 = f__60389__auto__();
(statearr_124106[(6)] = c__60388__auto___126004);

return statearr_124106;
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
var f__60389__auto__ = (function (){var switch__60365__auto__ = (function (state_124128){
var state_val_124129 = (state_124128[(1)]);
if((state_val_124129 === (7))){
var inst_124124 = (state_124128[(2)]);
var state_124128__$1 = state_124128;
var statearr_124130_126032 = state_124128__$1;
(statearr_124130_126032[(2)] = inst_124124);

(statearr_124130_126032[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124129 === (1))){
var inst_124107 = init;
var inst_124108 = inst_124107;
var state_124128__$1 = (function (){var statearr_124131 = state_124128;
(statearr_124131[(7)] = inst_124108);

return statearr_124131;
})();
var statearr_124132_126033 = state_124128__$1;
(statearr_124132_126033[(2)] = null);

(statearr_124132_126033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124129 === (4))){
var inst_124111 = (state_124128[(8)]);
var inst_124111__$1 = (state_124128[(2)]);
var inst_124112 = (inst_124111__$1 == null);
var state_124128__$1 = (function (){var statearr_124133 = state_124128;
(statearr_124133[(8)] = inst_124111__$1);

return statearr_124133;
})();
if(cljs.core.truth_(inst_124112)){
var statearr_124134_126035 = state_124128__$1;
(statearr_124134_126035[(1)] = (5));

} else {
var statearr_124135_126038 = state_124128__$1;
(statearr_124135_126038[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124129 === (6))){
var inst_124115 = (state_124128[(9)]);
var inst_124111 = (state_124128[(8)]);
var inst_124108 = (state_124128[(7)]);
var inst_124115__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_124108,inst_124111) : f.call(null,inst_124108,inst_124111));
var inst_124116 = cljs.core.reduced_QMARK_(inst_124115__$1);
var state_124128__$1 = (function (){var statearr_124138 = state_124128;
(statearr_124138[(9)] = inst_124115__$1);

return statearr_124138;
})();
if(inst_124116){
var statearr_124139_126042 = state_124128__$1;
(statearr_124139_126042[(1)] = (8));

} else {
var statearr_124140_126043 = state_124128__$1;
(statearr_124140_126043[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124129 === (3))){
var inst_124126 = (state_124128[(2)]);
var state_124128__$1 = state_124128;
return cljs.core.async.impl.ioc_helpers.return_chan(state_124128__$1,inst_124126);
} else {
if((state_val_124129 === (2))){
var state_124128__$1 = state_124128;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_124128__$1,(4),ch);
} else {
if((state_val_124129 === (9))){
var inst_124115 = (state_124128[(9)]);
var inst_124108 = inst_124115;
var state_124128__$1 = (function (){var statearr_124141 = state_124128;
(statearr_124141[(7)] = inst_124108);

return statearr_124141;
})();
var statearr_124142_126049 = state_124128__$1;
(statearr_124142_126049[(2)] = null);

(statearr_124142_126049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124129 === (5))){
var inst_124108 = (state_124128[(7)]);
var state_124128__$1 = state_124128;
var statearr_124143_126052 = state_124128__$1;
(statearr_124143_126052[(2)] = inst_124108);

(statearr_124143_126052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124129 === (10))){
var inst_124122 = (state_124128[(2)]);
var state_124128__$1 = state_124128;
var statearr_124145_126053 = state_124128__$1;
(statearr_124145_126053[(2)] = inst_124122);

(statearr_124145_126053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124129 === (8))){
var inst_124115 = (state_124128[(9)]);
var inst_124118 = cljs.core.deref(inst_124115);
var state_124128__$1 = state_124128;
var statearr_124147_126054 = state_124128__$1;
(statearr_124147_126054[(2)] = inst_124118);

(statearr_124147_126054[(1)] = (10));


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
var statearr_124148 = [null,null,null,null,null,null,null,null,null,null];
(statearr_124148[(0)] = cljs$core$async$reduce_$_state_machine__60366__auto__);

(statearr_124148[(1)] = (1));

return statearr_124148;
});
var cljs$core$async$reduce_$_state_machine__60366__auto____1 = (function (state_124128){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_124128);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e124149){var ex__60369__auto__ = e124149;
var statearr_124150_126059 = state_124128;
(statearr_124150_126059[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_124128[(4)]))){
var statearr_124151_126060 = state_124128;
(statearr_124151_126060[(1)] = cljs.core.first((state_124128[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__126061 = state_124128;
state_124128 = G__126061;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__60366__auto__ = function(state_124128){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__60366__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__60366__auto____1.call(this,state_124128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__60366__auto____0;
cljs$core$async$reduce_$_state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__60366__auto____1;
return cljs$core$async$reduce_$_state_machine__60366__auto__;
})()
})();
var state__60390__auto__ = (function (){var statearr_124152 = f__60389__auto__();
(statearr_124152[(6)] = c__60388__auto__);

return statearr_124152;
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
var f__60389__auto__ = (function (){var switch__60365__auto__ = (function (state_124158){
var state_val_124159 = (state_124158[(1)]);
if((state_val_124159 === (1))){
var inst_124153 = cljs.core.async.reduce(f__$1,init,ch);
var state_124158__$1 = state_124158;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_124158__$1,(2),inst_124153);
} else {
if((state_val_124159 === (2))){
var inst_124155 = (state_124158[(2)]);
var inst_124156 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_124155) : f__$1.call(null,inst_124155));
var state_124158__$1 = state_124158;
return cljs.core.async.impl.ioc_helpers.return_chan(state_124158__$1,inst_124156);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__60366__auto__ = null;
var cljs$core$async$transduce_$_state_machine__60366__auto____0 = (function (){
var statearr_124160 = [null,null,null,null,null,null,null];
(statearr_124160[(0)] = cljs$core$async$transduce_$_state_machine__60366__auto__);

(statearr_124160[(1)] = (1));

return statearr_124160;
});
var cljs$core$async$transduce_$_state_machine__60366__auto____1 = (function (state_124158){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_124158);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e124161){var ex__60369__auto__ = e124161;
var statearr_124162_126071 = state_124158;
(statearr_124162_126071[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_124158[(4)]))){
var statearr_124163_126072 = state_124158;
(statearr_124163_126072[(1)] = cljs.core.first((state_124158[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__126075 = state_124158;
state_124158 = G__126075;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__60366__auto__ = function(state_124158){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__60366__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__60366__auto____1.call(this,state_124158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__60366__auto____0;
cljs$core$async$transduce_$_state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__60366__auto____1;
return cljs$core$async$transduce_$_state_machine__60366__auto__;
})()
})();
var state__60390__auto__ = (function (){var statearr_124164 = f__60389__auto__();
(statearr_124164[(6)] = c__60388__auto__);

return statearr_124164;
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
var G__124166 = arguments.length;
switch (G__124166) {
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
var f__60389__auto__ = (function (){var switch__60365__auto__ = (function (state_124196){
var state_val_124197 = (state_124196[(1)]);
if((state_val_124197 === (7))){
var inst_124176 = (state_124196[(2)]);
var state_124196__$1 = state_124196;
var statearr_124198_126086 = state_124196__$1;
(statearr_124198_126086[(2)] = inst_124176);

(statearr_124198_126086[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124197 === (1))){
var inst_124170 = cljs.core.seq(coll);
var inst_124171 = inst_124170;
var state_124196__$1 = (function (){var statearr_124199 = state_124196;
(statearr_124199[(7)] = inst_124171);

return statearr_124199;
})();
var statearr_124200_126087 = state_124196__$1;
(statearr_124200_126087[(2)] = null);

(statearr_124200_126087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124197 === (4))){
var inst_124171 = (state_124196[(7)]);
var inst_124174 = cljs.core.first(inst_124171);
var state_124196__$1 = state_124196;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_124196__$1,(7),ch,inst_124174);
} else {
if((state_val_124197 === (13))){
var inst_124189 = (state_124196[(2)]);
var state_124196__$1 = state_124196;
var statearr_124201_126090 = state_124196__$1;
(statearr_124201_126090[(2)] = inst_124189);

(statearr_124201_126090[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124197 === (6))){
var inst_124180 = (state_124196[(2)]);
var state_124196__$1 = state_124196;
if(cljs.core.truth_(inst_124180)){
var statearr_124202_126091 = state_124196__$1;
(statearr_124202_126091[(1)] = (8));

} else {
var statearr_124203_126093 = state_124196__$1;
(statearr_124203_126093[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124197 === (3))){
var inst_124194 = (state_124196[(2)]);
var state_124196__$1 = state_124196;
return cljs.core.async.impl.ioc_helpers.return_chan(state_124196__$1,inst_124194);
} else {
if((state_val_124197 === (12))){
var state_124196__$1 = state_124196;
var statearr_124204_126098 = state_124196__$1;
(statearr_124204_126098[(2)] = null);

(statearr_124204_126098[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124197 === (2))){
var inst_124171 = (state_124196[(7)]);
var state_124196__$1 = state_124196;
if(cljs.core.truth_(inst_124171)){
var statearr_124205_126100 = state_124196__$1;
(statearr_124205_126100[(1)] = (4));

} else {
var statearr_124206_126101 = state_124196__$1;
(statearr_124206_126101[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124197 === (11))){
var inst_124186 = cljs.core.async.close_BANG_(ch);
var state_124196__$1 = state_124196;
var statearr_124207_126106 = state_124196__$1;
(statearr_124207_126106[(2)] = inst_124186);

(statearr_124207_126106[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124197 === (9))){
var state_124196__$1 = state_124196;
if(cljs.core.truth_(close_QMARK_)){
var statearr_124208_126108 = state_124196__$1;
(statearr_124208_126108[(1)] = (11));

} else {
var statearr_124209_126110 = state_124196__$1;
(statearr_124209_126110[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124197 === (5))){
var inst_124171 = (state_124196[(7)]);
var state_124196__$1 = state_124196;
var statearr_124210_126112 = state_124196__$1;
(statearr_124210_126112[(2)] = inst_124171);

(statearr_124210_126112[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124197 === (10))){
var inst_124191 = (state_124196[(2)]);
var state_124196__$1 = state_124196;
var statearr_124215_126113 = state_124196__$1;
(statearr_124215_126113[(2)] = inst_124191);

(statearr_124215_126113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124197 === (8))){
var inst_124171 = (state_124196[(7)]);
var inst_124182 = cljs.core.next(inst_124171);
var inst_124171__$1 = inst_124182;
var state_124196__$1 = (function (){var statearr_124216 = state_124196;
(statearr_124216[(7)] = inst_124171__$1);

return statearr_124216;
})();
var statearr_124217_126114 = state_124196__$1;
(statearr_124217_126114[(2)] = null);

(statearr_124217_126114[(1)] = (2));


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
var statearr_124220 = [null,null,null,null,null,null,null,null];
(statearr_124220[(0)] = cljs$core$async$state_machine__60366__auto__);

(statearr_124220[(1)] = (1));

return statearr_124220;
});
var cljs$core$async$state_machine__60366__auto____1 = (function (state_124196){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_124196);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e124221){var ex__60369__auto__ = e124221;
var statearr_124222_126115 = state_124196;
(statearr_124222_126115[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_124196[(4)]))){
var statearr_124223_126116 = state_124196;
(statearr_124223_126116[(1)] = cljs.core.first((state_124196[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__126117 = state_124196;
state_124196 = G__126117;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
cljs$core$async$state_machine__60366__auto__ = function(state_124196){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60366__auto____1.call(this,state_124196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60366__auto____0;
cljs$core$async$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60366__auto____1;
return cljs$core$async$state_machine__60366__auto__;
})()
})();
var state__60390__auto__ = (function (){var statearr_124224 = f__60389__auto__();
(statearr_124224[(6)] = c__60388__auto__);

return statearr_124224;
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
var G__124226 = arguments.length;
switch (G__124226) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_126127 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_126127(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_126131 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_126131(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_126138 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_126138(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_126141 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_126141(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async124246 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async124246 = (function (ch,cs,meta124248){
this.ch = ch;
this.cs = cs;
this.meta124248 = meta124248;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async124246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_124249,meta124248__$1){
var self__ = this;
var _124249__$1 = this;
return (new cljs.core.async.t_cljs$core$async124246(self__.ch,self__.cs,meta124248__$1));
}));

(cljs.core.async.t_cljs$core$async124246.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_124249){
var self__ = this;
var _124249__$1 = this;
return self__.meta124248;
}));

(cljs.core.async.t_cljs$core$async124246.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async124246.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async124246.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async124246.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async124246.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async124246.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async124246.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta124248","meta124248",-525605654,null)], null);
}));

(cljs.core.async.t_cljs$core$async124246.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async124246.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async124246");

(cljs.core.async.t_cljs$core$async124246.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async124246");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async124246.
 */
cljs.core.async.__GT_t_cljs$core$async124246 = (function cljs$core$async$mult_$___GT_t_cljs$core$async124246(ch__$1,cs__$1,meta124248){
return (new cljs.core.async.t_cljs$core$async124246(ch__$1,cs__$1,meta124248));
});

}

return (new cljs.core.async.t_cljs$core$async124246(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__60388__auto___126156 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60389__auto__ = (function (){var switch__60365__auto__ = (function (state_124416){
var state_val_124417 = (state_124416[(1)]);
if((state_val_124417 === (7))){
var inst_124412 = (state_124416[(2)]);
var state_124416__$1 = state_124416;
var statearr_124418_126158 = state_124416__$1;
(statearr_124418_126158[(2)] = inst_124412);

(statearr_124418_126158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124417 === (20))){
var inst_124305 = (state_124416[(7)]);
var inst_124323 = cljs.core.first(inst_124305);
var inst_124324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_124323,(0),null);
var inst_124325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_124323,(1),null);
var state_124416__$1 = (function (){var statearr_124419 = state_124416;
(statearr_124419[(8)] = inst_124324);

return statearr_124419;
})();
if(cljs.core.truth_(inst_124325)){
var statearr_124420_126167 = state_124416__$1;
(statearr_124420_126167[(1)] = (22));

} else {
var statearr_124421_126168 = state_124416__$1;
(statearr_124421_126168[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124417 === (27))){
var inst_124358 = (state_124416[(9)]);
var inst_124270 = (state_124416[(10)]);
var inst_124356 = (state_124416[(11)]);
var inst_124363 = (state_124416[(12)]);
var inst_124363__$1 = cljs.core._nth(inst_124356,inst_124358);
var inst_124364 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_124363__$1,inst_124270,done);
var state_124416__$1 = (function (){var statearr_124422 = state_124416;
(statearr_124422[(12)] = inst_124363__$1);

return statearr_124422;
})();
if(cljs.core.truth_(inst_124364)){
var statearr_124423_126173 = state_124416__$1;
(statearr_124423_126173[(1)] = (30));

} else {
var statearr_124424_126175 = state_124416__$1;
(statearr_124424_126175[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124417 === (1))){
var state_124416__$1 = state_124416;
var statearr_124425_126176 = state_124416__$1;
(statearr_124425_126176[(2)] = null);

(statearr_124425_126176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124417 === (24))){
var inst_124305 = (state_124416[(7)]);
var inst_124333 = (state_124416[(2)]);
var inst_124334 = cljs.core.next(inst_124305);
var inst_124279 = inst_124334;
var inst_124280 = null;
var inst_124281 = (0);
var inst_124282 = (0);
var state_124416__$1 = (function (){var statearr_124426 = state_124416;
(statearr_124426[(13)] = inst_124279);

(statearr_124426[(14)] = inst_124282);

(statearr_124426[(15)] = inst_124280);

(statearr_124426[(16)] = inst_124333);

(statearr_124426[(17)] = inst_124281);

return statearr_124426;
})();
var statearr_124427_126177 = state_124416__$1;
(statearr_124427_126177[(2)] = null);

(statearr_124427_126177[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124417 === (39))){
var state_124416__$1 = state_124416;
var statearr_124431_126178 = state_124416__$1;
(statearr_124431_126178[(2)] = null);

(statearr_124431_126178[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124417 === (4))){
var inst_124270 = (state_124416[(10)]);
var inst_124270__$1 = (state_124416[(2)]);
var inst_124271 = (inst_124270__$1 == null);
var state_124416__$1 = (function (){var statearr_124432 = state_124416;
(statearr_124432[(10)] = inst_124270__$1);

return statearr_124432;
})();
if(cljs.core.truth_(inst_124271)){
var statearr_124433_126180 = state_124416__$1;
(statearr_124433_126180[(1)] = (5));

} else {
var statearr_124434_126182 = state_124416__$1;
(statearr_124434_126182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124417 === (15))){
var inst_124279 = (state_124416[(13)]);
var inst_124282 = (state_124416[(14)]);
var inst_124280 = (state_124416[(15)]);
var inst_124281 = (state_124416[(17)]);
var inst_124299 = (state_124416[(2)]);
var inst_124301 = (inst_124282 + (1));
var tmp124428 = inst_124279;
var tmp124429 = inst_124280;
var tmp124430 = inst_124281;
var inst_124279__$1 = tmp124428;
var inst_124280__$1 = tmp124429;
var inst_124281__$1 = tmp124430;
var inst_124282__$1 = inst_124301;
var state_124416__$1 = (function (){var statearr_124435 = state_124416;
(statearr_124435[(13)] = inst_124279__$1);

(statearr_124435[(14)] = inst_124282__$1);

(statearr_124435[(18)] = inst_124299);

(statearr_124435[(15)] = inst_124280__$1);

(statearr_124435[(17)] = inst_124281__$1);

return statearr_124435;
})();
var statearr_124436_126194 = state_124416__$1;
(statearr_124436_126194[(2)] = null);

(statearr_124436_126194[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124417 === (21))){
var inst_124337 = (state_124416[(2)]);
var state_124416__$1 = state_124416;
var statearr_124440_126196 = state_124416__$1;
(statearr_124440_126196[(2)] = inst_124337);

(statearr_124440_126196[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124417 === (31))){
var inst_124363 = (state_124416[(12)]);
var inst_124367 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_124363);
var state_124416__$1 = state_124416;
var statearr_124441_126203 = state_124416__$1;
(statearr_124441_126203[(2)] = inst_124367);

(statearr_124441_126203[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124417 === (32))){
var inst_124358 = (state_124416[(9)]);
var inst_124357 = (state_124416[(19)]);
var inst_124355 = (state_124416[(20)]);
var inst_124356 = (state_124416[(11)]);
var inst_124369 = (state_124416[(2)]);
var inst_124370 = (inst_124358 + (1));
var tmp124437 = inst_124357;
var tmp124438 = inst_124355;
var tmp124439 = inst_124356;
var inst_124355__$1 = tmp124438;
var inst_124356__$1 = tmp124439;
var inst_124357__$1 = tmp124437;
var inst_124358__$1 = inst_124370;
var state_124416__$1 = (function (){var statearr_124442 = state_124416;
(statearr_124442[(9)] = inst_124358__$1);

(statearr_124442[(19)] = inst_124357__$1);

(statearr_124442[(20)] = inst_124355__$1);

(statearr_124442[(21)] = inst_124369);

(statearr_124442[(11)] = inst_124356__$1);

return statearr_124442;
})();
var statearr_124443_126212 = state_124416__$1;
(statearr_124443_126212[(2)] = null);

(statearr_124443_126212[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124417 === (40))){
var inst_124385 = (state_124416[(22)]);
var inst_124389 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_124385);
var state_124416__$1 = state_124416;
var statearr_124444_126214 = state_124416__$1;
(statearr_124444_126214[(2)] = inst_124389);

(statearr_124444_126214[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124417 === (33))){
var inst_124373 = (state_124416[(23)]);
var inst_124378 = cljs.core.chunked_seq_QMARK_(inst_124373);
var state_124416__$1 = state_124416;
if(inst_124378){
var statearr_124445_126215 = state_124416__$1;
(statearr_124445_126215[(1)] = (36));

} else {
var statearr_124446_126216 = state_124416__$1;
(statearr_124446_126216[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124417 === (13))){
var inst_124292 = (state_124416[(24)]);
var inst_124295 = cljs.core.async.close_BANG_(inst_124292);
var state_124416__$1 = state_124416;
var statearr_124447_126217 = state_124416__$1;
(statearr_124447_126217[(2)] = inst_124295);

(statearr_124447_126217[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124417 === (22))){
var inst_124324 = (state_124416[(8)]);
var inst_124330 = cljs.core.async.close_BANG_(inst_124324);
var state_124416__$1 = state_124416;
var statearr_124448_126218 = state_124416__$1;
(statearr_124448_126218[(2)] = inst_124330);

(statearr_124448_126218[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124417 === (36))){
var inst_124373 = (state_124416[(23)]);
var inst_124380 = cljs.core.chunk_first(inst_124373);
var inst_124381 = cljs.core.chunk_rest(inst_124373);
var inst_124382 = cljs.core.count(inst_124380);
var inst_124355 = inst_124381;
var inst_124356 = inst_124380;
var inst_124357 = inst_124382;
var inst_124358 = (0);
var state_124416__$1 = (function (){var statearr_124449 = state_124416;
(statearr_124449[(9)] = inst_124358);

(statearr_124449[(19)] = inst_124357);

(statearr_124449[(20)] = inst_124355);

(statearr_124449[(11)] = inst_124356);

return statearr_124449;
})();
var statearr_124450_126225 = state_124416__$1;
(statearr_124450_126225[(2)] = null);

(statearr_124450_126225[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124417 === (41))){
var inst_124373 = (state_124416[(23)]);
var inst_124391 = (state_124416[(2)]);
var inst_124392 = cljs.core.next(inst_124373);
var inst_124355 = inst_124392;
var inst_124356 = null;
var inst_124357 = (0);
var inst_124358 = (0);
var state_124416__$1 = (function (){var statearr_124451 = state_124416;
(statearr_124451[(9)] = inst_124358);

(statearr_124451[(19)] = inst_124357);

(statearr_124451[(20)] = inst_124355);

(statearr_124451[(11)] = inst_124356);

(statearr_124451[(25)] = inst_124391);

return statearr_124451;
})();
var statearr_124452_126226 = state_124416__$1;
(statearr_124452_126226[(2)] = null);

(statearr_124452_126226[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124417 === (43))){
var state_124416__$1 = state_124416;
var statearr_124453_126230 = state_124416__$1;
(statearr_124453_126230[(2)] = null);

(statearr_124453_126230[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124417 === (29))){
var inst_124400 = (state_124416[(2)]);
var state_124416__$1 = state_124416;
var statearr_124454_126232 = state_124416__$1;
(statearr_124454_126232[(2)] = inst_124400);

(statearr_124454_126232[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124417 === (44))){
var inst_124409 = (state_124416[(2)]);
var state_124416__$1 = (function (){var statearr_124455 = state_124416;
(statearr_124455[(26)] = inst_124409);

return statearr_124455;
})();
var statearr_124456_126235 = state_124416__$1;
(statearr_124456_126235[(2)] = null);

(statearr_124456_126235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124417 === (6))){
var inst_124347 = (state_124416[(27)]);
var inst_124346 = cljs.core.deref(cs);
var inst_124347__$1 = cljs.core.keys(inst_124346);
var inst_124348 = cljs.core.count(inst_124347__$1);
var inst_124349 = cljs.core.reset_BANG_(dctr,inst_124348);
var inst_124354 = cljs.core.seq(inst_124347__$1);
var inst_124355 = inst_124354;
var inst_124356 = null;
var inst_124357 = (0);
var inst_124358 = (0);
var state_124416__$1 = (function (){var statearr_124457 = state_124416;
(statearr_124457[(9)] = inst_124358);

(statearr_124457[(19)] = inst_124357);

(statearr_124457[(20)] = inst_124355);

(statearr_124457[(28)] = inst_124349);

(statearr_124457[(27)] = inst_124347__$1);

(statearr_124457[(11)] = inst_124356);

return statearr_124457;
})();
var statearr_124458_126239 = state_124416__$1;
(statearr_124458_126239[(2)] = null);

(statearr_124458_126239[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124417 === (28))){
var inst_124355 = (state_124416[(20)]);
var inst_124373 = (state_124416[(23)]);
var inst_124373__$1 = cljs.core.seq(inst_124355);
var state_124416__$1 = (function (){var statearr_124459 = state_124416;
(statearr_124459[(23)] = inst_124373__$1);

return statearr_124459;
})();
if(inst_124373__$1){
var statearr_124460_126242 = state_124416__$1;
(statearr_124460_126242[(1)] = (33));

} else {
var statearr_124461_126243 = state_124416__$1;
(statearr_124461_126243[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124417 === (25))){
var inst_124358 = (state_124416[(9)]);
var inst_124357 = (state_124416[(19)]);
var inst_124360 = (inst_124358 < inst_124357);
var inst_124361 = inst_124360;
var state_124416__$1 = state_124416;
if(cljs.core.truth_(inst_124361)){
var statearr_124463_126247 = state_124416__$1;
(statearr_124463_126247[(1)] = (27));

} else {
var statearr_124464_126249 = state_124416__$1;
(statearr_124464_126249[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124417 === (34))){
var state_124416__$1 = state_124416;
var statearr_124467_126250 = state_124416__$1;
(statearr_124467_126250[(2)] = null);

(statearr_124467_126250[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124417 === (17))){
var state_124416__$1 = state_124416;
var statearr_124468_126251 = state_124416__$1;
(statearr_124468_126251[(2)] = null);

(statearr_124468_126251[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124417 === (3))){
var inst_124414 = (state_124416[(2)]);
var state_124416__$1 = state_124416;
return cljs.core.async.impl.ioc_helpers.return_chan(state_124416__$1,inst_124414);
} else {
if((state_val_124417 === (12))){
var inst_124342 = (state_124416[(2)]);
var state_124416__$1 = state_124416;
var statearr_124469_126253 = state_124416__$1;
(statearr_124469_126253[(2)] = inst_124342);

(statearr_124469_126253[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124417 === (2))){
var state_124416__$1 = state_124416;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_124416__$1,(4),ch);
} else {
if((state_val_124417 === (23))){
var state_124416__$1 = state_124416;
var statearr_124470_126256 = state_124416__$1;
(statearr_124470_126256[(2)] = null);

(statearr_124470_126256[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124417 === (35))){
var inst_124398 = (state_124416[(2)]);
var state_124416__$1 = state_124416;
var statearr_124471_126260 = state_124416__$1;
(statearr_124471_126260[(2)] = inst_124398);

(statearr_124471_126260[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124417 === (19))){
var inst_124305 = (state_124416[(7)]);
var inst_124311 = cljs.core.chunk_first(inst_124305);
var inst_124312 = cljs.core.chunk_rest(inst_124305);
var inst_124313 = cljs.core.count(inst_124311);
var inst_124279 = inst_124312;
var inst_124280 = inst_124311;
var inst_124281 = inst_124313;
var inst_124282 = (0);
var state_124416__$1 = (function (){var statearr_124473 = state_124416;
(statearr_124473[(13)] = inst_124279);

(statearr_124473[(14)] = inst_124282);

(statearr_124473[(15)] = inst_124280);

(statearr_124473[(17)] = inst_124281);

return statearr_124473;
})();
var statearr_124474_126262 = state_124416__$1;
(statearr_124474_126262[(2)] = null);

(statearr_124474_126262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124417 === (11))){
var inst_124279 = (state_124416[(13)]);
var inst_124305 = (state_124416[(7)]);
var inst_124305__$1 = cljs.core.seq(inst_124279);
var state_124416__$1 = (function (){var statearr_124475 = state_124416;
(statearr_124475[(7)] = inst_124305__$1);

return statearr_124475;
})();
if(inst_124305__$1){
var statearr_124476_126268 = state_124416__$1;
(statearr_124476_126268[(1)] = (16));

} else {
var statearr_124477_126270 = state_124416__$1;
(statearr_124477_126270[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124417 === (9))){
var inst_124344 = (state_124416[(2)]);
var state_124416__$1 = state_124416;
var statearr_124478_126272 = state_124416__$1;
(statearr_124478_126272[(2)] = inst_124344);

(statearr_124478_126272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124417 === (5))){
var inst_124277 = cljs.core.deref(cs);
var inst_124278 = cljs.core.seq(inst_124277);
var inst_124279 = inst_124278;
var inst_124280 = null;
var inst_124281 = (0);
var inst_124282 = (0);
var state_124416__$1 = (function (){var statearr_124479 = state_124416;
(statearr_124479[(13)] = inst_124279);

(statearr_124479[(14)] = inst_124282);

(statearr_124479[(15)] = inst_124280);

(statearr_124479[(17)] = inst_124281);

return statearr_124479;
})();
var statearr_124480_126273 = state_124416__$1;
(statearr_124480_126273[(2)] = null);

(statearr_124480_126273[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124417 === (14))){
var state_124416__$1 = state_124416;
var statearr_124481_126275 = state_124416__$1;
(statearr_124481_126275[(2)] = null);

(statearr_124481_126275[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124417 === (45))){
var inst_124406 = (state_124416[(2)]);
var state_124416__$1 = state_124416;
var statearr_124482_126278 = state_124416__$1;
(statearr_124482_126278[(2)] = inst_124406);

(statearr_124482_126278[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124417 === (26))){
var inst_124347 = (state_124416[(27)]);
var inst_124402 = (state_124416[(2)]);
var inst_124403 = cljs.core.seq(inst_124347);
var state_124416__$1 = (function (){var statearr_124485 = state_124416;
(statearr_124485[(29)] = inst_124402);

return statearr_124485;
})();
if(inst_124403){
var statearr_124486_126282 = state_124416__$1;
(statearr_124486_126282[(1)] = (42));

} else {
var statearr_124487_126283 = state_124416__$1;
(statearr_124487_126283[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124417 === (16))){
var inst_124305 = (state_124416[(7)]);
var inst_124308 = cljs.core.chunked_seq_QMARK_(inst_124305);
var state_124416__$1 = state_124416;
if(inst_124308){
var statearr_124488_126285 = state_124416__$1;
(statearr_124488_126285[(1)] = (19));

} else {
var statearr_124490_126286 = state_124416__$1;
(statearr_124490_126286[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124417 === (38))){
var inst_124395 = (state_124416[(2)]);
var state_124416__$1 = state_124416;
var statearr_124493_126290 = state_124416__$1;
(statearr_124493_126290[(2)] = inst_124395);

(statearr_124493_126290[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124417 === (30))){
var state_124416__$1 = state_124416;
var statearr_124494_126294 = state_124416__$1;
(statearr_124494_126294[(2)] = null);

(statearr_124494_126294[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124417 === (10))){
var inst_124282 = (state_124416[(14)]);
var inst_124280 = (state_124416[(15)]);
var inst_124291 = cljs.core._nth(inst_124280,inst_124282);
var inst_124292 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_124291,(0),null);
var inst_124293 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_124291,(1),null);
var state_124416__$1 = (function (){var statearr_124496 = state_124416;
(statearr_124496[(24)] = inst_124292);

return statearr_124496;
})();
if(cljs.core.truth_(inst_124293)){
var statearr_124497_126297 = state_124416__$1;
(statearr_124497_126297[(1)] = (13));

} else {
var statearr_124498_126298 = state_124416__$1;
(statearr_124498_126298[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124417 === (18))){
var inst_124340 = (state_124416[(2)]);
var state_124416__$1 = state_124416;
var statearr_124499_126299 = state_124416__$1;
(statearr_124499_126299[(2)] = inst_124340);

(statearr_124499_126299[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124417 === (42))){
var state_124416__$1 = state_124416;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_124416__$1,(45),dchan);
} else {
if((state_val_124417 === (37))){
var inst_124385 = (state_124416[(22)]);
var inst_124270 = (state_124416[(10)]);
var inst_124373 = (state_124416[(23)]);
var inst_124385__$1 = cljs.core.first(inst_124373);
var inst_124386 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_124385__$1,inst_124270,done);
var state_124416__$1 = (function (){var statearr_124500 = state_124416;
(statearr_124500[(22)] = inst_124385__$1);

return statearr_124500;
})();
if(cljs.core.truth_(inst_124386)){
var statearr_124501_126303 = state_124416__$1;
(statearr_124501_126303[(1)] = (39));

} else {
var statearr_124502_126304 = state_124416__$1;
(statearr_124502_126304[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124417 === (8))){
var inst_124282 = (state_124416[(14)]);
var inst_124281 = (state_124416[(17)]);
var inst_124284 = (inst_124282 < inst_124281);
var inst_124285 = inst_124284;
var state_124416__$1 = state_124416;
if(cljs.core.truth_(inst_124285)){
var statearr_124503_126311 = state_124416__$1;
(statearr_124503_126311[(1)] = (10));

} else {
var statearr_124504_126312 = state_124416__$1;
(statearr_124504_126312[(1)] = (11));

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
var statearr_124505 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_124505[(0)] = cljs$core$async$mult_$_state_machine__60366__auto__);

(statearr_124505[(1)] = (1));

return statearr_124505;
});
var cljs$core$async$mult_$_state_machine__60366__auto____1 = (function (state_124416){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_124416);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e124506){var ex__60369__auto__ = e124506;
var statearr_124507_126316 = state_124416;
(statearr_124507_126316[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_124416[(4)]))){
var statearr_124508_126319 = state_124416;
(statearr_124508_126319[(1)] = cljs.core.first((state_124416[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__126321 = state_124416;
state_124416 = G__126321;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__60366__auto__ = function(state_124416){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__60366__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__60366__auto____1.call(this,state_124416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__60366__auto____0;
cljs$core$async$mult_$_state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__60366__auto____1;
return cljs$core$async$mult_$_state_machine__60366__auto__;
})()
})();
var state__60390__auto__ = (function (){var statearr_124509 = f__60389__auto__();
(statearr_124509[(6)] = c__60388__auto___126156);

return statearr_124509;
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
var G__124511 = arguments.length;
switch (G__124511) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_126330 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_126330(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_126334 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_126334(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_126340 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_126340(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_126342 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_126342(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_126345 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_126345(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___126356 = arguments.length;
var i__4737__auto___126357 = (0);
while(true){
if((i__4737__auto___126357 < len__4736__auto___126356)){
args__4742__auto__.push((arguments[i__4737__auto___126357]));

var G__126358 = (i__4737__auto___126357 + (1));
i__4737__auto___126357 = G__126358;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__124541){
var map__124542 = p__124541;
var map__124542__$1 = (((((!((map__124542 == null))))?(((((map__124542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__124542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__124542):map__124542);
var opts = map__124542__$1;
var statearr_124544_126367 = state;
(statearr_124544_126367[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_124546_126368 = state;
(statearr_124546_126368[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_124551_126369 = state;
(statearr_124551_126369[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq124522){
var G__124523 = cljs.core.first(seq124522);
var seq124522__$1 = cljs.core.next(seq124522);
var G__124524 = cljs.core.first(seq124522__$1);
var seq124522__$2 = cljs.core.next(seq124522__$1);
var G__124525 = cljs.core.first(seq124522__$2);
var seq124522__$3 = cljs.core.next(seq124522__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__124523,G__124524,G__124525,seq124522__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async124561 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async124561 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta124562){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta124562 = meta124562;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async124561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_124563,meta124562__$1){
var self__ = this;
var _124563__$1 = this;
return (new cljs.core.async.t_cljs$core$async124561(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta124562__$1));
}));

(cljs.core.async.t_cljs$core$async124561.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_124563){
var self__ = this;
var _124563__$1 = this;
return self__.meta124562;
}));

(cljs.core.async.t_cljs$core$async124561.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async124561.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async124561.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async124561.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async124561.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async124561.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async124561.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async124561.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async124561.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta124562","meta124562",-1598241258,null)], null);
}));

(cljs.core.async.t_cljs$core$async124561.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async124561.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async124561");

(cljs.core.async.t_cljs$core$async124561.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async124561");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async124561.
 */
cljs.core.async.__GT_t_cljs$core$async124561 = (function cljs$core$async$mix_$___GT_t_cljs$core$async124561(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta124562){
return (new cljs.core.async.t_cljs$core$async124561(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta124562));
});

}

return (new cljs.core.async.t_cljs$core$async124561(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__60388__auto___126410 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60389__auto__ = (function (){var switch__60365__auto__ = (function (state_124742){
var state_val_124743 = (state_124742[(1)]);
if((state_val_124743 === (7))){
var inst_124645 = (state_124742[(2)]);
var state_124742__$1 = state_124742;
var statearr_124745_126413 = state_124742__$1;
(statearr_124745_126413[(2)] = inst_124645);

(statearr_124745_126413[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124743 === (20))){
var inst_124664 = (state_124742[(7)]);
var state_124742__$1 = state_124742;
var statearr_124746_126419 = state_124742__$1;
(statearr_124746_126419[(2)] = inst_124664);

(statearr_124746_126419[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124743 === (27))){
var state_124742__$1 = state_124742;
var statearr_124747_126422 = state_124742__$1;
(statearr_124747_126422[(2)] = null);

(statearr_124747_126422[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124743 === (1))){
var inst_124614 = (state_124742[(8)]);
var inst_124614__$1 = calc_state();
var inst_124620 = (inst_124614__$1 == null);
var inst_124621 = cljs.core.not(inst_124620);
var state_124742__$1 = (function (){var statearr_124754 = state_124742;
(statearr_124754[(8)] = inst_124614__$1);

return statearr_124754;
})();
if(inst_124621){
var statearr_124755_126426 = state_124742__$1;
(statearr_124755_126426[(1)] = (2));

} else {
var statearr_124756_126428 = state_124742__$1;
(statearr_124756_126428[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124743 === (24))){
var inst_124693 = (state_124742[(9)]);
var inst_124716 = (state_124742[(10)]);
var inst_124702 = (state_124742[(11)]);
var inst_124716__$1 = (inst_124693.cljs$core$IFn$_invoke$arity$1 ? inst_124693.cljs$core$IFn$_invoke$arity$1(inst_124702) : inst_124693.call(null,inst_124702));
var state_124742__$1 = (function (){var statearr_124757 = state_124742;
(statearr_124757[(10)] = inst_124716__$1);

return statearr_124757;
})();
if(cljs.core.truth_(inst_124716__$1)){
var statearr_124758_126429 = state_124742__$1;
(statearr_124758_126429[(1)] = (29));

} else {
var statearr_124762_126430 = state_124742__$1;
(statearr_124762_126430[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124743 === (4))){
var inst_124649 = (state_124742[(2)]);
var state_124742__$1 = state_124742;
if(cljs.core.truth_(inst_124649)){
var statearr_124764_126431 = state_124742__$1;
(statearr_124764_126431[(1)] = (8));

} else {
var statearr_124765_126432 = state_124742__$1;
(statearr_124765_126432[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124743 === (15))){
var inst_124687 = (state_124742[(2)]);
var state_124742__$1 = state_124742;
if(cljs.core.truth_(inst_124687)){
var statearr_124766_126435 = state_124742__$1;
(statearr_124766_126435[(1)] = (19));

} else {
var statearr_124767_126436 = state_124742__$1;
(statearr_124767_126436[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124743 === (21))){
var inst_124692 = (state_124742[(12)]);
var inst_124692__$1 = (state_124742[(2)]);
var inst_124693 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_124692__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_124694 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_124692__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_124695 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_124692__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_124742__$1 = (function (){var statearr_124768 = state_124742;
(statearr_124768[(9)] = inst_124693);

(statearr_124768[(13)] = inst_124694);

(statearr_124768[(12)] = inst_124692__$1);

return statearr_124768;
})();
return cljs.core.async.ioc_alts_BANG_(state_124742__$1,(22),inst_124695);
} else {
if((state_val_124743 === (31))){
var inst_124724 = (state_124742[(2)]);
var state_124742__$1 = state_124742;
if(cljs.core.truth_(inst_124724)){
var statearr_124769_126444 = state_124742__$1;
(statearr_124769_126444[(1)] = (32));

} else {
var statearr_124770_126445 = state_124742__$1;
(statearr_124770_126445[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124743 === (32))){
var inst_124701 = (state_124742[(14)]);
var state_124742__$1 = state_124742;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_124742__$1,(35),out,inst_124701);
} else {
if((state_val_124743 === (33))){
var inst_124692 = (state_124742[(12)]);
var inst_124664 = inst_124692;
var state_124742__$1 = (function (){var statearr_124771 = state_124742;
(statearr_124771[(7)] = inst_124664);

return statearr_124771;
})();
var statearr_124776_126449 = state_124742__$1;
(statearr_124776_126449[(2)] = null);

(statearr_124776_126449[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124743 === (13))){
var inst_124664 = (state_124742[(7)]);
var inst_124676 = inst_124664.cljs$lang$protocol_mask$partition0$;
var inst_124677 = (inst_124676 & (64));
var inst_124678 = inst_124664.cljs$core$ISeq$;
var inst_124679 = (cljs.core.PROTOCOL_SENTINEL === inst_124678);
var inst_124680 = ((inst_124677) || (inst_124679));
var state_124742__$1 = state_124742;
if(cljs.core.truth_(inst_124680)){
var statearr_124781_126454 = state_124742__$1;
(statearr_124781_126454[(1)] = (16));

} else {
var statearr_124784_126455 = state_124742__$1;
(statearr_124784_126455[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124743 === (22))){
var inst_124701 = (state_124742[(14)]);
var inst_124702 = (state_124742[(11)]);
var inst_124700 = (state_124742[(2)]);
var inst_124701__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_124700,(0),null);
var inst_124702__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_124700,(1),null);
var inst_124703 = (inst_124701__$1 == null);
var inst_124704 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_124702__$1,change);
var inst_124705 = ((inst_124703) || (inst_124704));
var state_124742__$1 = (function (){var statearr_124791 = state_124742;
(statearr_124791[(14)] = inst_124701__$1);

(statearr_124791[(11)] = inst_124702__$1);

return statearr_124791;
})();
if(cljs.core.truth_(inst_124705)){
var statearr_124793_126457 = state_124742__$1;
(statearr_124793_126457[(1)] = (23));

} else {
var statearr_124794_126458 = state_124742__$1;
(statearr_124794_126458[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124743 === (36))){
var inst_124692 = (state_124742[(12)]);
var inst_124664 = inst_124692;
var state_124742__$1 = (function (){var statearr_124795 = state_124742;
(statearr_124795[(7)] = inst_124664);

return statearr_124795;
})();
var statearr_124796_126464 = state_124742__$1;
(statearr_124796_126464[(2)] = null);

(statearr_124796_126464[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124743 === (29))){
var inst_124716 = (state_124742[(10)]);
var state_124742__$1 = state_124742;
var statearr_124798_126466 = state_124742__$1;
(statearr_124798_126466[(2)] = inst_124716);

(statearr_124798_126466[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124743 === (6))){
var state_124742__$1 = state_124742;
var statearr_124799_126467 = state_124742__$1;
(statearr_124799_126467[(2)] = false);

(statearr_124799_126467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124743 === (28))){
var inst_124712 = (state_124742[(2)]);
var inst_124713 = calc_state();
var inst_124664 = inst_124713;
var state_124742__$1 = (function (){var statearr_124800 = state_124742;
(statearr_124800[(15)] = inst_124712);

(statearr_124800[(7)] = inst_124664);

return statearr_124800;
})();
var statearr_124803_126468 = state_124742__$1;
(statearr_124803_126468[(2)] = null);

(statearr_124803_126468[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124743 === (25))){
var inst_124738 = (state_124742[(2)]);
var state_124742__$1 = state_124742;
var statearr_124805_126469 = state_124742__$1;
(statearr_124805_126469[(2)] = inst_124738);

(statearr_124805_126469[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124743 === (34))){
var inst_124736 = (state_124742[(2)]);
var state_124742__$1 = state_124742;
var statearr_124807_126470 = state_124742__$1;
(statearr_124807_126470[(2)] = inst_124736);

(statearr_124807_126470[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124743 === (17))){
var state_124742__$1 = state_124742;
var statearr_124808_126471 = state_124742__$1;
(statearr_124808_126471[(2)] = false);

(statearr_124808_126471[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124743 === (3))){
var state_124742__$1 = state_124742;
var statearr_124812_126472 = state_124742__$1;
(statearr_124812_126472[(2)] = false);

(statearr_124812_126472[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124743 === (12))){
var inst_124740 = (state_124742[(2)]);
var state_124742__$1 = state_124742;
return cljs.core.async.impl.ioc_helpers.return_chan(state_124742__$1,inst_124740);
} else {
if((state_val_124743 === (2))){
var inst_124614 = (state_124742[(8)]);
var inst_124637 = inst_124614.cljs$lang$protocol_mask$partition0$;
var inst_124638 = (inst_124637 & (64));
var inst_124639 = inst_124614.cljs$core$ISeq$;
var inst_124640 = (cljs.core.PROTOCOL_SENTINEL === inst_124639);
var inst_124641 = ((inst_124638) || (inst_124640));
var state_124742__$1 = state_124742;
if(cljs.core.truth_(inst_124641)){
var statearr_124813_126474 = state_124742__$1;
(statearr_124813_126474[(1)] = (5));

} else {
var statearr_124814_126475 = state_124742__$1;
(statearr_124814_126475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124743 === (23))){
var inst_124701 = (state_124742[(14)]);
var inst_124707 = (inst_124701 == null);
var state_124742__$1 = state_124742;
if(cljs.core.truth_(inst_124707)){
var statearr_124815_126480 = state_124742__$1;
(statearr_124815_126480[(1)] = (26));

} else {
var statearr_124816_126481 = state_124742__$1;
(statearr_124816_126481[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124743 === (35))){
var inst_124727 = (state_124742[(2)]);
var state_124742__$1 = state_124742;
if(cljs.core.truth_(inst_124727)){
var statearr_124817_126482 = state_124742__$1;
(statearr_124817_126482[(1)] = (36));

} else {
var statearr_124822_126483 = state_124742__$1;
(statearr_124822_126483[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124743 === (19))){
var inst_124664 = (state_124742[(7)]);
var inst_124689 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_124664);
var state_124742__$1 = state_124742;
var statearr_124824_126484 = state_124742__$1;
(statearr_124824_126484[(2)] = inst_124689);

(statearr_124824_126484[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124743 === (11))){
var inst_124664 = (state_124742[(7)]);
var inst_124669 = (inst_124664 == null);
var inst_124670 = cljs.core.not(inst_124669);
var state_124742__$1 = state_124742;
if(inst_124670){
var statearr_124825_126485 = state_124742__$1;
(statearr_124825_126485[(1)] = (13));

} else {
var statearr_124826_126489 = state_124742__$1;
(statearr_124826_126489[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124743 === (9))){
var inst_124614 = (state_124742[(8)]);
var state_124742__$1 = state_124742;
var statearr_124827_126493 = state_124742__$1;
(statearr_124827_126493[(2)] = inst_124614);

(statearr_124827_126493[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124743 === (5))){
var state_124742__$1 = state_124742;
var statearr_124828_126494 = state_124742__$1;
(statearr_124828_126494[(2)] = true);

(statearr_124828_126494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124743 === (14))){
var state_124742__$1 = state_124742;
var statearr_124829_126495 = state_124742__$1;
(statearr_124829_126495[(2)] = false);

(statearr_124829_126495[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124743 === (26))){
var inst_124702 = (state_124742[(11)]);
var inst_124709 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_124702);
var state_124742__$1 = state_124742;
var statearr_124830_126499 = state_124742__$1;
(statearr_124830_126499[(2)] = inst_124709);

(statearr_124830_126499[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124743 === (16))){
var state_124742__$1 = state_124742;
var statearr_124831_126500 = state_124742__$1;
(statearr_124831_126500[(2)] = true);

(statearr_124831_126500[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124743 === (38))){
var inst_124732 = (state_124742[(2)]);
var state_124742__$1 = state_124742;
var statearr_124832_126504 = state_124742__$1;
(statearr_124832_126504[(2)] = inst_124732);

(statearr_124832_126504[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124743 === (30))){
var inst_124693 = (state_124742[(9)]);
var inst_124694 = (state_124742[(13)]);
var inst_124702 = (state_124742[(11)]);
var inst_124719 = cljs.core.empty_QMARK_(inst_124693);
var inst_124720 = (inst_124694.cljs$core$IFn$_invoke$arity$1 ? inst_124694.cljs$core$IFn$_invoke$arity$1(inst_124702) : inst_124694.call(null,inst_124702));
var inst_124721 = cljs.core.not(inst_124720);
var inst_124722 = ((inst_124719) && (inst_124721));
var state_124742__$1 = state_124742;
var statearr_124838_126509 = state_124742__$1;
(statearr_124838_126509[(2)] = inst_124722);

(statearr_124838_126509[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124743 === (10))){
var inst_124614 = (state_124742[(8)]);
var inst_124654 = (state_124742[(2)]);
var inst_124656 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_124654,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_124657 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_124654,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_124659 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_124654,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_124664 = inst_124614;
var state_124742__$1 = (function (){var statearr_124839 = state_124742;
(statearr_124839[(16)] = inst_124656);

(statearr_124839[(7)] = inst_124664);

(statearr_124839[(17)] = inst_124657);

(statearr_124839[(18)] = inst_124659);

return statearr_124839;
})();
var statearr_124840_126512 = state_124742__$1;
(statearr_124840_126512[(2)] = null);

(statearr_124840_126512[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124743 === (18))){
var inst_124684 = (state_124742[(2)]);
var state_124742__$1 = state_124742;
var statearr_124841_126513 = state_124742__$1;
(statearr_124841_126513[(2)] = inst_124684);

(statearr_124841_126513[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124743 === (37))){
var state_124742__$1 = state_124742;
var statearr_124842_126514 = state_124742__$1;
(statearr_124842_126514[(2)] = null);

(statearr_124842_126514[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124743 === (8))){
var inst_124614 = (state_124742[(8)]);
var inst_124651 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_124614);
var state_124742__$1 = state_124742;
var statearr_124843_126522 = state_124742__$1;
(statearr_124843_126522[(2)] = inst_124651);

(statearr_124843_126522[(1)] = (10));


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
var statearr_124844 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_124844[(0)] = cljs$core$async$mix_$_state_machine__60366__auto__);

(statearr_124844[(1)] = (1));

return statearr_124844;
});
var cljs$core$async$mix_$_state_machine__60366__auto____1 = (function (state_124742){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_124742);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e124845){var ex__60369__auto__ = e124845;
var statearr_124846_126526 = state_124742;
(statearr_124846_126526[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_124742[(4)]))){
var statearr_124847_126531 = state_124742;
(statearr_124847_126531[(1)] = cljs.core.first((state_124742[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__126532 = state_124742;
state_124742 = G__126532;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__60366__auto__ = function(state_124742){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__60366__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__60366__auto____1.call(this,state_124742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__60366__auto____0;
cljs$core$async$mix_$_state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__60366__auto____1;
return cljs$core$async$mix_$_state_machine__60366__auto__;
})()
})();
var state__60390__auto__ = (function (){var statearr_124853 = f__60389__auto__();
(statearr_124853[(6)] = c__60388__auto___126410);

return statearr_124853;
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

var cljs$core$async$Pub$sub_STAR_$dyn_126534 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_126534(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_126537 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_126537(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_126541 = (function() {
var G__126542 = null;
var G__126542__1 = (function (p){
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
var G__126542__2 = (function (p,v){
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
G__126542 = function(p,v){
switch(arguments.length){
case 1:
return G__126542__1.call(this,p);
case 2:
return G__126542__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__126542.cljs$core$IFn$_invoke$arity$1 = G__126542__1;
G__126542.cljs$core$IFn$_invoke$arity$2 = G__126542__2;
return G__126542;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__124871 = arguments.length;
switch (G__124871) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_126541(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_126541(p,v);
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
var G__124874 = arguments.length;
switch (G__124874) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__124872_SHARP_){
if(cljs.core.truth_((p1__124872_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__124872_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__124872_SHARP_.call(null,topic)))){
return p1__124872_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__124872_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async124889 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async124889 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta124890){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta124890 = meta124890;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async124889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_124891,meta124890__$1){
var self__ = this;
var _124891__$1 = this;
return (new cljs.core.async.t_cljs$core$async124889(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta124890__$1));
}));

(cljs.core.async.t_cljs$core$async124889.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_124891){
var self__ = this;
var _124891__$1 = this;
return self__.meta124890;
}));

(cljs.core.async.t_cljs$core$async124889.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async124889.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async124889.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async124889.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async124889.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async124889.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async124889.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async124889.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta124890","meta124890",1915819900,null)], null);
}));

(cljs.core.async.t_cljs$core$async124889.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async124889.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async124889");

(cljs.core.async.t_cljs$core$async124889.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async124889");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async124889.
 */
cljs.core.async.__GT_t_cljs$core$async124889 = (function cljs$core$async$__GT_t_cljs$core$async124889(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta124890){
return (new cljs.core.async.t_cljs$core$async124889(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta124890));
});

}

return (new cljs.core.async.t_cljs$core$async124889(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__60388__auto___126568 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60389__auto__ = (function (){var switch__60365__auto__ = (function (state_124967){
var state_val_124968 = (state_124967[(1)]);
if((state_val_124968 === (7))){
var inst_124962 = (state_124967[(2)]);
var state_124967__$1 = state_124967;
var statearr_124969_126571 = state_124967__$1;
(statearr_124969_126571[(2)] = inst_124962);

(statearr_124969_126571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124968 === (20))){
var state_124967__$1 = state_124967;
var statearr_124970_126573 = state_124967__$1;
(statearr_124970_126573[(2)] = null);

(statearr_124970_126573[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124968 === (1))){
var state_124967__$1 = state_124967;
var statearr_124971_126577 = state_124967__$1;
(statearr_124971_126577[(2)] = null);

(statearr_124971_126577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124968 === (24))){
var inst_124944 = (state_124967[(7)]);
var inst_124954 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_124944);
var state_124967__$1 = state_124967;
var statearr_124972_126769 = state_124967__$1;
(statearr_124972_126769[(2)] = inst_124954);

(statearr_124972_126769[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124968 === (4))){
var inst_124896 = (state_124967[(8)]);
var inst_124896__$1 = (state_124967[(2)]);
var inst_124897 = (inst_124896__$1 == null);
var state_124967__$1 = (function (){var statearr_124974 = state_124967;
(statearr_124974[(8)] = inst_124896__$1);

return statearr_124974;
})();
if(cljs.core.truth_(inst_124897)){
var statearr_124975_126771 = state_124967__$1;
(statearr_124975_126771[(1)] = (5));

} else {
var statearr_124976_126772 = state_124967__$1;
(statearr_124976_126772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124968 === (15))){
var inst_124938 = (state_124967[(2)]);
var state_124967__$1 = state_124967;
var statearr_124977_126775 = state_124967__$1;
(statearr_124977_126775[(2)] = inst_124938);

(statearr_124977_126775[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124968 === (21))){
var inst_124959 = (state_124967[(2)]);
var state_124967__$1 = (function (){var statearr_124978 = state_124967;
(statearr_124978[(9)] = inst_124959);

return statearr_124978;
})();
var statearr_124979_126779 = state_124967__$1;
(statearr_124979_126779[(2)] = null);

(statearr_124979_126779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124968 === (13))){
var inst_124920 = (state_124967[(10)]);
var inst_124922 = cljs.core.chunked_seq_QMARK_(inst_124920);
var state_124967__$1 = state_124967;
if(inst_124922){
var statearr_124981_126782 = state_124967__$1;
(statearr_124981_126782[(1)] = (16));

} else {
var statearr_124982_126785 = state_124967__$1;
(statearr_124982_126785[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124968 === (22))){
var inst_124950 = (state_124967[(2)]);
var state_124967__$1 = state_124967;
if(cljs.core.truth_(inst_124950)){
var statearr_124983_126790 = state_124967__$1;
(statearr_124983_126790[(1)] = (23));

} else {
var statearr_124984_126792 = state_124967__$1;
(statearr_124984_126792[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124968 === (6))){
var inst_124946 = (state_124967[(11)]);
var inst_124944 = (state_124967[(7)]);
var inst_124896 = (state_124967[(8)]);
var inst_124944__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_124896) : topic_fn.call(null,inst_124896));
var inst_124945 = cljs.core.deref(mults);
var inst_124946__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_124945,inst_124944__$1);
var state_124967__$1 = (function (){var statearr_124986 = state_124967;
(statearr_124986[(11)] = inst_124946__$1);

(statearr_124986[(7)] = inst_124944__$1);

return statearr_124986;
})();
if(cljs.core.truth_(inst_124946__$1)){
var statearr_124987_126803 = state_124967__$1;
(statearr_124987_126803[(1)] = (19));

} else {
var statearr_124988_126804 = state_124967__$1;
(statearr_124988_126804[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124968 === (25))){
var inst_124956 = (state_124967[(2)]);
var state_124967__$1 = state_124967;
var statearr_124989_126808 = state_124967__$1;
(statearr_124989_126808[(2)] = inst_124956);

(statearr_124989_126808[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124968 === (17))){
var inst_124920 = (state_124967[(10)]);
var inst_124929 = cljs.core.first(inst_124920);
var inst_124930 = cljs.core.async.muxch_STAR_(inst_124929);
var inst_124931 = cljs.core.async.close_BANG_(inst_124930);
var inst_124932 = cljs.core.next(inst_124920);
var inst_124906 = inst_124932;
var inst_124907 = null;
var inst_124908 = (0);
var inst_124909 = (0);
var state_124967__$1 = (function (){var statearr_124994 = state_124967;
(statearr_124994[(12)] = inst_124909);

(statearr_124994[(13)] = inst_124931);

(statearr_124994[(14)] = inst_124907);

(statearr_124994[(15)] = inst_124906);

(statearr_124994[(16)] = inst_124908);

return statearr_124994;
})();
var statearr_124995_126820 = state_124967__$1;
(statearr_124995_126820[(2)] = null);

(statearr_124995_126820[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124968 === (3))){
var inst_124964 = (state_124967[(2)]);
var state_124967__$1 = state_124967;
return cljs.core.async.impl.ioc_helpers.return_chan(state_124967__$1,inst_124964);
} else {
if((state_val_124968 === (12))){
var inst_124940 = (state_124967[(2)]);
var state_124967__$1 = state_124967;
var statearr_124996_126825 = state_124967__$1;
(statearr_124996_126825[(2)] = inst_124940);

(statearr_124996_126825[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124968 === (2))){
var state_124967__$1 = state_124967;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_124967__$1,(4),ch);
} else {
if((state_val_124968 === (23))){
var state_124967__$1 = state_124967;
var statearr_125000_126831 = state_124967__$1;
(statearr_125000_126831[(2)] = null);

(statearr_125000_126831[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124968 === (19))){
var inst_124946 = (state_124967[(11)]);
var inst_124896 = (state_124967[(8)]);
var inst_124948 = cljs.core.async.muxch_STAR_(inst_124946);
var state_124967__$1 = state_124967;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_124967__$1,(22),inst_124948,inst_124896);
} else {
if((state_val_124968 === (11))){
var inst_124920 = (state_124967[(10)]);
var inst_124906 = (state_124967[(15)]);
var inst_124920__$1 = cljs.core.seq(inst_124906);
var state_124967__$1 = (function (){var statearr_125005 = state_124967;
(statearr_125005[(10)] = inst_124920__$1);

return statearr_125005;
})();
if(inst_124920__$1){
var statearr_125006_126840 = state_124967__$1;
(statearr_125006_126840[(1)] = (13));

} else {
var statearr_125007_126843 = state_124967__$1;
(statearr_125007_126843[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124968 === (9))){
var inst_124942 = (state_124967[(2)]);
var state_124967__$1 = state_124967;
var statearr_125009_126846 = state_124967__$1;
(statearr_125009_126846[(2)] = inst_124942);

(statearr_125009_126846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124968 === (5))){
var inst_124903 = cljs.core.deref(mults);
var inst_124904 = cljs.core.vals(inst_124903);
var inst_124905 = cljs.core.seq(inst_124904);
var inst_124906 = inst_124905;
var inst_124907 = null;
var inst_124908 = (0);
var inst_124909 = (0);
var state_124967__$1 = (function (){var statearr_125010 = state_124967;
(statearr_125010[(12)] = inst_124909);

(statearr_125010[(14)] = inst_124907);

(statearr_125010[(15)] = inst_124906);

(statearr_125010[(16)] = inst_124908);

return statearr_125010;
})();
var statearr_125011_126851 = state_124967__$1;
(statearr_125011_126851[(2)] = null);

(statearr_125011_126851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124968 === (14))){
var state_124967__$1 = state_124967;
var statearr_125015_126854 = state_124967__$1;
(statearr_125015_126854[(2)] = null);

(statearr_125015_126854[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124968 === (16))){
var inst_124920 = (state_124967[(10)]);
var inst_124924 = cljs.core.chunk_first(inst_124920);
var inst_124925 = cljs.core.chunk_rest(inst_124920);
var inst_124926 = cljs.core.count(inst_124924);
var inst_124906 = inst_124925;
var inst_124907 = inst_124924;
var inst_124908 = inst_124926;
var inst_124909 = (0);
var state_124967__$1 = (function (){var statearr_125019 = state_124967;
(statearr_125019[(12)] = inst_124909);

(statearr_125019[(14)] = inst_124907);

(statearr_125019[(15)] = inst_124906);

(statearr_125019[(16)] = inst_124908);

return statearr_125019;
})();
var statearr_125020_126868 = state_124967__$1;
(statearr_125020_126868[(2)] = null);

(statearr_125020_126868[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124968 === (10))){
var inst_124909 = (state_124967[(12)]);
var inst_124907 = (state_124967[(14)]);
var inst_124906 = (state_124967[(15)]);
var inst_124908 = (state_124967[(16)]);
var inst_124914 = cljs.core._nth(inst_124907,inst_124909);
var inst_124915 = cljs.core.async.muxch_STAR_(inst_124914);
var inst_124916 = cljs.core.async.close_BANG_(inst_124915);
var inst_124917 = (inst_124909 + (1));
var tmp125012 = inst_124907;
var tmp125013 = inst_124906;
var tmp125014 = inst_124908;
var inst_124906__$1 = tmp125013;
var inst_124907__$1 = tmp125012;
var inst_124908__$1 = tmp125014;
var inst_124909__$1 = inst_124917;
var state_124967__$1 = (function (){var statearr_125021 = state_124967;
(statearr_125021[(12)] = inst_124909__$1);

(statearr_125021[(17)] = inst_124916);

(statearr_125021[(14)] = inst_124907__$1);

(statearr_125021[(15)] = inst_124906__$1);

(statearr_125021[(16)] = inst_124908__$1);

return statearr_125021;
})();
var statearr_125022_126875 = state_124967__$1;
(statearr_125022_126875[(2)] = null);

(statearr_125022_126875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124968 === (18))){
var inst_124935 = (state_124967[(2)]);
var state_124967__$1 = state_124967;
var statearr_125023_126880 = state_124967__$1;
(statearr_125023_126880[(2)] = inst_124935);

(statearr_125023_126880[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124968 === (8))){
var inst_124909 = (state_124967[(12)]);
var inst_124908 = (state_124967[(16)]);
var inst_124911 = (inst_124909 < inst_124908);
var inst_124912 = inst_124911;
var state_124967__$1 = state_124967;
if(cljs.core.truth_(inst_124912)){
var statearr_125024_126886 = state_124967__$1;
(statearr_125024_126886[(1)] = (10));

} else {
var statearr_125025_126887 = state_124967__$1;
(statearr_125025_126887[(1)] = (11));

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
var statearr_125030 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_125030[(0)] = cljs$core$async$state_machine__60366__auto__);

(statearr_125030[(1)] = (1));

return statearr_125030;
});
var cljs$core$async$state_machine__60366__auto____1 = (function (state_124967){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_124967);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e125032){var ex__60369__auto__ = e125032;
var statearr_125033_126896 = state_124967;
(statearr_125033_126896[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_124967[(4)]))){
var statearr_125034_126900 = state_124967;
(statearr_125034_126900[(1)] = cljs.core.first((state_124967[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__126907 = state_124967;
state_124967 = G__126907;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
cljs$core$async$state_machine__60366__auto__ = function(state_124967){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60366__auto____1.call(this,state_124967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60366__auto____0;
cljs$core$async$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60366__auto____1;
return cljs$core$async$state_machine__60366__auto__;
})()
})();
var state__60390__auto__ = (function (){var statearr_125035 = f__60389__auto__();
(statearr_125035[(6)] = c__60388__auto___126568);

return statearr_125035;
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
var G__125039 = arguments.length;
switch (G__125039) {
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
var G__125042 = arguments.length;
switch (G__125042) {
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
var G__125046 = arguments.length;
switch (G__125046) {
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
var c__60388__auto___126952 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60389__auto__ = (function (){var switch__60365__auto__ = (function (state_125093){
var state_val_125094 = (state_125093[(1)]);
if((state_val_125094 === (7))){
var state_125093__$1 = state_125093;
var statearr_125095_126956 = state_125093__$1;
(statearr_125095_126956[(2)] = null);

(statearr_125095_126956[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125094 === (1))){
var state_125093__$1 = state_125093;
var statearr_125097_126959 = state_125093__$1;
(statearr_125097_126959[(2)] = null);

(statearr_125097_126959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125094 === (4))){
var inst_125054 = (state_125093[(7)]);
var inst_125053 = (state_125093[(8)]);
var inst_125056 = (inst_125054 < inst_125053);
var state_125093__$1 = state_125093;
if(cljs.core.truth_(inst_125056)){
var statearr_125099_126961 = state_125093__$1;
(statearr_125099_126961[(1)] = (6));

} else {
var statearr_125100_126962 = state_125093__$1;
(statearr_125100_126962[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125094 === (15))){
var inst_125079 = (state_125093[(9)]);
var inst_125084 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_125079);
var state_125093__$1 = state_125093;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_125093__$1,(17),out,inst_125084);
} else {
if((state_val_125094 === (13))){
var inst_125079 = (state_125093[(9)]);
var inst_125079__$1 = (state_125093[(2)]);
var inst_125080 = cljs.core.some(cljs.core.nil_QMARK_,inst_125079__$1);
var state_125093__$1 = (function (){var statearr_125102 = state_125093;
(statearr_125102[(9)] = inst_125079__$1);

return statearr_125102;
})();
if(cljs.core.truth_(inst_125080)){
var statearr_125103_126972 = state_125093__$1;
(statearr_125103_126972[(1)] = (14));

} else {
var statearr_125105_126973 = state_125093__$1;
(statearr_125105_126973[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125094 === (6))){
var state_125093__$1 = state_125093;
var statearr_125106_126976 = state_125093__$1;
(statearr_125106_126976[(2)] = null);

(statearr_125106_126976[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125094 === (17))){
var inst_125086 = (state_125093[(2)]);
var state_125093__$1 = (function (){var statearr_125108 = state_125093;
(statearr_125108[(10)] = inst_125086);

return statearr_125108;
})();
var statearr_125110_126982 = state_125093__$1;
(statearr_125110_126982[(2)] = null);

(statearr_125110_126982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125094 === (3))){
var inst_125091 = (state_125093[(2)]);
var state_125093__$1 = state_125093;
return cljs.core.async.impl.ioc_helpers.return_chan(state_125093__$1,inst_125091);
} else {
if((state_val_125094 === (12))){
var _ = (function (){var statearr_125111 = state_125093;
(statearr_125111[(4)] = cljs.core.rest((state_125093[(4)])));

return statearr_125111;
})();
var state_125093__$1 = state_125093;
var ex125107 = (state_125093__$1[(2)]);
var statearr_125112_126989 = state_125093__$1;
(statearr_125112_126989[(5)] = ex125107);


if((ex125107 instanceof Object)){
var statearr_125117_126991 = state_125093__$1;
(statearr_125117_126991[(1)] = (11));

(statearr_125117_126991[(5)] = null);

} else {
throw ex125107;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125094 === (2))){
var inst_125052 = cljs.core.reset_BANG_(dctr,cnt);
var inst_125053 = cnt;
var inst_125054 = (0);
var state_125093__$1 = (function (){var statearr_125132 = state_125093;
(statearr_125132[(7)] = inst_125054);

(statearr_125132[(8)] = inst_125053);

(statearr_125132[(11)] = inst_125052);

return statearr_125132;
})();
var statearr_125133_126994 = state_125093__$1;
(statearr_125133_126994[(2)] = null);

(statearr_125133_126994[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125094 === (11))){
var inst_125058 = (state_125093[(2)]);
var inst_125059 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_125093__$1 = (function (){var statearr_125135 = state_125093;
(statearr_125135[(12)] = inst_125058);

return statearr_125135;
})();
var statearr_125136_127000 = state_125093__$1;
(statearr_125136_127000[(2)] = inst_125059);

(statearr_125136_127000[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125094 === (9))){
var inst_125054 = (state_125093[(7)]);
var _ = (function (){var statearr_125137 = state_125093;
(statearr_125137[(4)] = cljs.core.cons((12),(state_125093[(4)])));

return statearr_125137;
})();
var inst_125065 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_125054) : chs__$1.call(null,inst_125054));
var inst_125066 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_125054) : done.call(null,inst_125054));
var inst_125067 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_125065,inst_125066);
var ___$1 = (function (){var statearr_125138 = state_125093;
(statearr_125138[(4)] = cljs.core.rest((state_125093[(4)])));

return statearr_125138;
})();
var state_125093__$1 = state_125093;
var statearr_125144_127010 = state_125093__$1;
(statearr_125144_127010[(2)] = inst_125067);

(statearr_125144_127010[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125094 === (5))){
var inst_125077 = (state_125093[(2)]);
var state_125093__$1 = (function (){var statearr_125148 = state_125093;
(statearr_125148[(13)] = inst_125077);

return statearr_125148;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_125093__$1,(13),dchan);
} else {
if((state_val_125094 === (14))){
var inst_125082 = cljs.core.async.close_BANG_(out);
var state_125093__$1 = state_125093;
var statearr_125149_127018 = state_125093__$1;
(statearr_125149_127018[(2)] = inst_125082);

(statearr_125149_127018[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125094 === (16))){
var inst_125089 = (state_125093[(2)]);
var state_125093__$1 = state_125093;
var statearr_125151_127021 = state_125093__$1;
(statearr_125151_127021[(2)] = inst_125089);

(statearr_125151_127021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125094 === (10))){
var inst_125054 = (state_125093[(7)]);
var inst_125070 = (state_125093[(2)]);
var inst_125071 = (inst_125054 + (1));
var inst_125054__$1 = inst_125071;
var state_125093__$1 = (function (){var statearr_125152 = state_125093;
(statearr_125152[(7)] = inst_125054__$1);

(statearr_125152[(14)] = inst_125070);

return statearr_125152;
})();
var statearr_125153_127027 = state_125093__$1;
(statearr_125153_127027[(2)] = null);

(statearr_125153_127027[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125094 === (8))){
var inst_125075 = (state_125093[(2)]);
var state_125093__$1 = state_125093;
var statearr_125159_127028 = state_125093__$1;
(statearr_125159_127028[(2)] = inst_125075);

(statearr_125159_127028[(1)] = (5));


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
var statearr_125169 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_125169[(0)] = cljs$core$async$state_machine__60366__auto__);

(statearr_125169[(1)] = (1));

return statearr_125169;
});
var cljs$core$async$state_machine__60366__auto____1 = (function (state_125093){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_125093);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e125170){var ex__60369__auto__ = e125170;
var statearr_125171_127038 = state_125093;
(statearr_125171_127038[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_125093[(4)]))){
var statearr_125172_127039 = state_125093;
(statearr_125172_127039[(1)] = cljs.core.first((state_125093[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__127043 = state_125093;
state_125093 = G__127043;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
cljs$core$async$state_machine__60366__auto__ = function(state_125093){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60366__auto____1.call(this,state_125093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60366__auto____0;
cljs$core$async$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60366__auto____1;
return cljs$core$async$state_machine__60366__auto__;
})()
})();
var state__60390__auto__ = (function (){var statearr_125182 = f__60389__auto__();
(statearr_125182[(6)] = c__60388__auto___126952);

return statearr_125182;
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
var G__125201 = arguments.length;
switch (G__125201) {
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
var c__60388__auto___127056 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60389__auto__ = (function (){var switch__60365__auto__ = (function (state_125242){
var state_val_125243 = (state_125242[(1)]);
if((state_val_125243 === (7))){
var inst_125217 = (state_125242[(7)]);
var inst_125221 = (state_125242[(8)]);
var inst_125217__$1 = (state_125242[(2)]);
var inst_125221__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_125217__$1,(0),null);
var inst_125222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_125217__$1,(1),null);
var inst_125223 = (inst_125221__$1 == null);
var state_125242__$1 = (function (){var statearr_125258 = state_125242;
(statearr_125258[(7)] = inst_125217__$1);

(statearr_125258[(8)] = inst_125221__$1);

(statearr_125258[(9)] = inst_125222);

return statearr_125258;
})();
if(cljs.core.truth_(inst_125223)){
var statearr_125259_127064 = state_125242__$1;
(statearr_125259_127064[(1)] = (8));

} else {
var statearr_125260_127065 = state_125242__$1;
(statearr_125260_127065[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125243 === (1))){
var inst_125202 = cljs.core.vec(chs);
var inst_125203 = inst_125202;
var state_125242__$1 = (function (){var statearr_125262 = state_125242;
(statearr_125262[(10)] = inst_125203);

return statearr_125262;
})();
var statearr_125267_127068 = state_125242__$1;
(statearr_125267_127068[(2)] = null);

(statearr_125267_127068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125243 === (4))){
var inst_125203 = (state_125242[(10)]);
var state_125242__$1 = state_125242;
return cljs.core.async.ioc_alts_BANG_(state_125242__$1,(7),inst_125203);
} else {
if((state_val_125243 === (6))){
var inst_125238 = (state_125242[(2)]);
var state_125242__$1 = state_125242;
var statearr_125273_127075 = state_125242__$1;
(statearr_125273_127075[(2)] = inst_125238);

(statearr_125273_127075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125243 === (3))){
var inst_125240 = (state_125242[(2)]);
var state_125242__$1 = state_125242;
return cljs.core.async.impl.ioc_helpers.return_chan(state_125242__$1,inst_125240);
} else {
if((state_val_125243 === (2))){
var inst_125203 = (state_125242[(10)]);
var inst_125205 = cljs.core.count(inst_125203);
var inst_125206 = (inst_125205 > (0));
var state_125242__$1 = state_125242;
if(cljs.core.truth_(inst_125206)){
var statearr_125281_127081 = state_125242__$1;
(statearr_125281_127081[(1)] = (4));

} else {
var statearr_125282_127084 = state_125242__$1;
(statearr_125282_127084[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125243 === (11))){
var inst_125203 = (state_125242[(10)]);
var inst_125231 = (state_125242[(2)]);
var tmp125274 = inst_125203;
var inst_125203__$1 = tmp125274;
var state_125242__$1 = (function (){var statearr_125283 = state_125242;
(statearr_125283[(11)] = inst_125231);

(statearr_125283[(10)] = inst_125203__$1);

return statearr_125283;
})();
var statearr_125284_127089 = state_125242__$1;
(statearr_125284_127089[(2)] = null);

(statearr_125284_127089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125243 === (9))){
var inst_125221 = (state_125242[(8)]);
var state_125242__$1 = state_125242;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_125242__$1,(11),out,inst_125221);
} else {
if((state_val_125243 === (5))){
var inst_125236 = cljs.core.async.close_BANG_(out);
var state_125242__$1 = state_125242;
var statearr_125285_127094 = state_125242__$1;
(statearr_125285_127094[(2)] = inst_125236);

(statearr_125285_127094[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125243 === (10))){
var inst_125234 = (state_125242[(2)]);
var state_125242__$1 = state_125242;
var statearr_125286_127097 = state_125242__$1;
(statearr_125286_127097[(2)] = inst_125234);

(statearr_125286_127097[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125243 === (8))){
var inst_125217 = (state_125242[(7)]);
var inst_125221 = (state_125242[(8)]);
var inst_125203 = (state_125242[(10)]);
var inst_125222 = (state_125242[(9)]);
var inst_125226 = (function (){var cs = inst_125203;
var vec__125212 = inst_125217;
var v = inst_125221;
var c = inst_125222;
return (function (p1__125190_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__125190_SHARP_);
});
})();
var inst_125227 = cljs.core.filterv(inst_125226,inst_125203);
var inst_125203__$1 = inst_125227;
var state_125242__$1 = (function (){var statearr_125296 = state_125242;
(statearr_125296[(10)] = inst_125203__$1);

return statearr_125296;
})();
var statearr_125297_127102 = state_125242__$1;
(statearr_125297_127102[(2)] = null);

(statearr_125297_127102[(1)] = (2));


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
var statearr_125300 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_125300[(0)] = cljs$core$async$state_machine__60366__auto__);

(statearr_125300[(1)] = (1));

return statearr_125300;
});
var cljs$core$async$state_machine__60366__auto____1 = (function (state_125242){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_125242);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e125305){var ex__60369__auto__ = e125305;
var statearr_125306_127109 = state_125242;
(statearr_125306_127109[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_125242[(4)]))){
var statearr_125308_127112 = state_125242;
(statearr_125308_127112[(1)] = cljs.core.first((state_125242[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__127115 = state_125242;
state_125242 = G__127115;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
cljs$core$async$state_machine__60366__auto__ = function(state_125242){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60366__auto____1.call(this,state_125242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60366__auto____0;
cljs$core$async$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60366__auto____1;
return cljs$core$async$state_machine__60366__auto__;
})()
})();
var state__60390__auto__ = (function (){var statearr_125309 = f__60389__auto__();
(statearr_125309[(6)] = c__60388__auto___127056);

return statearr_125309;
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
var G__125313 = arguments.length;
switch (G__125313) {
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
var c__60388__auto___127130 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60389__auto__ = (function (){var switch__60365__auto__ = (function (state_125340){
var state_val_125341 = (state_125340[(1)]);
if((state_val_125341 === (7))){
var inst_125322 = (state_125340[(7)]);
var inst_125322__$1 = (state_125340[(2)]);
var inst_125323 = (inst_125322__$1 == null);
var inst_125324 = cljs.core.not(inst_125323);
var state_125340__$1 = (function (){var statearr_125347 = state_125340;
(statearr_125347[(7)] = inst_125322__$1);

return statearr_125347;
})();
if(inst_125324){
var statearr_125348_127138 = state_125340__$1;
(statearr_125348_127138[(1)] = (8));

} else {
var statearr_125350_127141 = state_125340__$1;
(statearr_125350_127141[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125341 === (1))){
var inst_125316 = (0);
var state_125340__$1 = (function (){var statearr_125351 = state_125340;
(statearr_125351[(8)] = inst_125316);

return statearr_125351;
})();
var statearr_125352_127142 = state_125340__$1;
(statearr_125352_127142[(2)] = null);

(statearr_125352_127142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125341 === (4))){
var state_125340__$1 = state_125340;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_125340__$1,(7),ch);
} else {
if((state_val_125341 === (6))){
var inst_125335 = (state_125340[(2)]);
var state_125340__$1 = state_125340;
var statearr_125353_127145 = state_125340__$1;
(statearr_125353_127145[(2)] = inst_125335);

(statearr_125353_127145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125341 === (3))){
var inst_125337 = (state_125340[(2)]);
var inst_125338 = cljs.core.async.close_BANG_(out);
var state_125340__$1 = (function (){var statearr_125354 = state_125340;
(statearr_125354[(9)] = inst_125337);

return statearr_125354;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_125340__$1,inst_125338);
} else {
if((state_val_125341 === (2))){
var inst_125316 = (state_125340[(8)]);
var inst_125318 = (inst_125316 < n);
var state_125340__$1 = state_125340;
if(cljs.core.truth_(inst_125318)){
var statearr_125355_127153 = state_125340__$1;
(statearr_125355_127153[(1)] = (4));

} else {
var statearr_125356_127154 = state_125340__$1;
(statearr_125356_127154[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125341 === (11))){
var inst_125316 = (state_125340[(8)]);
var inst_125327 = (state_125340[(2)]);
var inst_125328 = (inst_125316 + (1));
var inst_125316__$1 = inst_125328;
var state_125340__$1 = (function (){var statearr_125357 = state_125340;
(statearr_125357[(8)] = inst_125316__$1);

(statearr_125357[(10)] = inst_125327);

return statearr_125357;
})();
var statearr_125358_127161 = state_125340__$1;
(statearr_125358_127161[(2)] = null);

(statearr_125358_127161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125341 === (9))){
var state_125340__$1 = state_125340;
var statearr_125359_127164 = state_125340__$1;
(statearr_125359_127164[(2)] = null);

(statearr_125359_127164[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125341 === (5))){
var state_125340__$1 = state_125340;
var statearr_125360_127167 = state_125340__$1;
(statearr_125360_127167[(2)] = null);

(statearr_125360_127167[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125341 === (10))){
var inst_125332 = (state_125340[(2)]);
var state_125340__$1 = state_125340;
var statearr_125361_127170 = state_125340__$1;
(statearr_125361_127170[(2)] = inst_125332);

(statearr_125361_127170[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125341 === (8))){
var inst_125322 = (state_125340[(7)]);
var state_125340__$1 = state_125340;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_125340__$1,(11),out,inst_125322);
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
var statearr_125362 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_125362[(0)] = cljs$core$async$state_machine__60366__auto__);

(statearr_125362[(1)] = (1));

return statearr_125362;
});
var cljs$core$async$state_machine__60366__auto____1 = (function (state_125340){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_125340);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e125363){var ex__60369__auto__ = e125363;
var statearr_125364_127182 = state_125340;
(statearr_125364_127182[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_125340[(4)]))){
var statearr_125365_127185 = state_125340;
(statearr_125365_127185[(1)] = cljs.core.first((state_125340[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__127188 = state_125340;
state_125340 = G__127188;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
cljs$core$async$state_machine__60366__auto__ = function(state_125340){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60366__auto____1.call(this,state_125340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60366__auto____0;
cljs$core$async$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60366__auto____1;
return cljs$core$async$state_machine__60366__auto__;
})()
})();
var state__60390__auto__ = (function (){var statearr_125371 = f__60389__auto__();
(statearr_125371[(6)] = c__60388__auto___127130);

return statearr_125371;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async125373 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async125373 = (function (f,ch,meta125374){
this.f = f;
this.ch = ch;
this.meta125374 = meta125374;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async125373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_125375,meta125374__$1){
var self__ = this;
var _125375__$1 = this;
return (new cljs.core.async.t_cljs$core$async125373(self__.f,self__.ch,meta125374__$1));
}));

(cljs.core.async.t_cljs$core$async125373.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_125375){
var self__ = this;
var _125375__$1 = this;
return self__.meta125374;
}));

(cljs.core.async.t_cljs$core$async125373.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async125373.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async125373.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async125373.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async125373.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async125384 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async125384 = (function (f,ch,meta125374,_,fn1,meta125385){
this.f = f;
this.ch = ch;
this.meta125374 = meta125374;
this._ = _;
this.fn1 = fn1;
this.meta125385 = meta125385;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async125384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_125386,meta125385__$1){
var self__ = this;
var _125386__$1 = this;
return (new cljs.core.async.t_cljs$core$async125384(self__.f,self__.ch,self__.meta125374,self__._,self__.fn1,meta125385__$1));
}));

(cljs.core.async.t_cljs$core$async125384.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_125386){
var self__ = this;
var _125386__$1 = this;
return self__.meta125385;
}));

(cljs.core.async.t_cljs$core$async125384.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async125384.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async125384.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async125384.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__125372_SHARP_){
var G__125387 = (((p1__125372_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__125372_SHARP_) : self__.f.call(null,p1__125372_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__125387) : f1.call(null,G__125387));
});
}));

(cljs.core.async.t_cljs$core$async125384.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta125374","meta125374",1026239536,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async125373","cljs.core.async/t_cljs$core$async125373",-1999250185,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta125385","meta125385",1765470863,null)], null);
}));

(cljs.core.async.t_cljs$core$async125384.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async125384.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async125384");

(cljs.core.async.t_cljs$core$async125384.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async125384");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async125384.
 */
cljs.core.async.__GT_t_cljs$core$async125384 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async125384(f__$1,ch__$1,meta125374__$1,___$2,fn1__$1,meta125385){
return (new cljs.core.async.t_cljs$core$async125384(f__$1,ch__$1,meta125374__$1,___$2,fn1__$1,meta125385));
});

}

return (new cljs.core.async.t_cljs$core$async125384(self__.f,self__.ch,self__.meta125374,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__125388 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__125388) : self__.f.call(null,G__125388));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async125373.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async125373.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async125373.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta125374","meta125374",1026239536,null)], null);
}));

(cljs.core.async.t_cljs$core$async125373.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async125373.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async125373");

(cljs.core.async.t_cljs$core$async125373.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async125373");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async125373.
 */
cljs.core.async.__GT_t_cljs$core$async125373 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async125373(f__$1,ch__$1,meta125374){
return (new cljs.core.async.t_cljs$core$async125373(f__$1,ch__$1,meta125374));
});

}

return (new cljs.core.async.t_cljs$core$async125373(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async125390 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async125390 = (function (f,ch,meta125391){
this.f = f;
this.ch = ch;
this.meta125391 = meta125391;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async125390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_125392,meta125391__$1){
var self__ = this;
var _125392__$1 = this;
return (new cljs.core.async.t_cljs$core$async125390(self__.f,self__.ch,meta125391__$1));
}));

(cljs.core.async.t_cljs$core$async125390.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_125392){
var self__ = this;
var _125392__$1 = this;
return self__.meta125391;
}));

(cljs.core.async.t_cljs$core$async125390.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async125390.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async125390.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async125390.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async125390.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async125390.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async125390.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta125391","meta125391",-589449127,null)], null);
}));

(cljs.core.async.t_cljs$core$async125390.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async125390.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async125390");

(cljs.core.async.t_cljs$core$async125390.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async125390");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async125390.
 */
cljs.core.async.__GT_t_cljs$core$async125390 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async125390(f__$1,ch__$1,meta125391){
return (new cljs.core.async.t_cljs$core$async125390(f__$1,ch__$1,meta125391));
});

}

return (new cljs.core.async.t_cljs$core$async125390(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async125393 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async125393 = (function (p,ch,meta125394){
this.p = p;
this.ch = ch;
this.meta125394 = meta125394;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async125393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_125395,meta125394__$1){
var self__ = this;
var _125395__$1 = this;
return (new cljs.core.async.t_cljs$core$async125393(self__.p,self__.ch,meta125394__$1));
}));

(cljs.core.async.t_cljs$core$async125393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_125395){
var self__ = this;
var _125395__$1 = this;
return self__.meta125394;
}));

(cljs.core.async.t_cljs$core$async125393.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async125393.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async125393.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async125393.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async125393.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async125393.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async125393.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async125393.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta125394","meta125394",-1870033552,null)], null);
}));

(cljs.core.async.t_cljs$core$async125393.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async125393.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async125393");

(cljs.core.async.t_cljs$core$async125393.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async125393");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async125393.
 */
cljs.core.async.__GT_t_cljs$core$async125393 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async125393(p__$1,ch__$1,meta125394){
return (new cljs.core.async.t_cljs$core$async125393(p__$1,ch__$1,meta125394));
});

}

return (new cljs.core.async.t_cljs$core$async125393(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__125398 = arguments.length;
switch (G__125398) {
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
var c__60388__auto___127268 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60389__auto__ = (function (){var switch__60365__auto__ = (function (state_125419){
var state_val_125420 = (state_125419[(1)]);
if((state_val_125420 === (7))){
var inst_125415 = (state_125419[(2)]);
var state_125419__$1 = state_125419;
var statearr_125421_127273 = state_125419__$1;
(statearr_125421_127273[(2)] = inst_125415);

(statearr_125421_127273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125420 === (1))){
var state_125419__$1 = state_125419;
var statearr_125422_127276 = state_125419__$1;
(statearr_125422_127276[(2)] = null);

(statearr_125422_127276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125420 === (4))){
var inst_125401 = (state_125419[(7)]);
var inst_125401__$1 = (state_125419[(2)]);
var inst_125402 = (inst_125401__$1 == null);
var state_125419__$1 = (function (){var statearr_125423 = state_125419;
(statearr_125423[(7)] = inst_125401__$1);

return statearr_125423;
})();
if(cljs.core.truth_(inst_125402)){
var statearr_125425_127281 = state_125419__$1;
(statearr_125425_127281[(1)] = (5));

} else {
var statearr_125426_127284 = state_125419__$1;
(statearr_125426_127284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125420 === (6))){
var inst_125401 = (state_125419[(7)]);
var inst_125406 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_125401) : p.call(null,inst_125401));
var state_125419__$1 = state_125419;
if(cljs.core.truth_(inst_125406)){
var statearr_125427_127289 = state_125419__$1;
(statearr_125427_127289[(1)] = (8));

} else {
var statearr_125428_127290 = state_125419__$1;
(statearr_125428_127290[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125420 === (3))){
var inst_125417 = (state_125419[(2)]);
var state_125419__$1 = state_125419;
return cljs.core.async.impl.ioc_helpers.return_chan(state_125419__$1,inst_125417);
} else {
if((state_val_125420 === (2))){
var state_125419__$1 = state_125419;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_125419__$1,(4),ch);
} else {
if((state_val_125420 === (11))){
var inst_125409 = (state_125419[(2)]);
var state_125419__$1 = state_125419;
var statearr_125429_127297 = state_125419__$1;
(statearr_125429_127297[(2)] = inst_125409);

(statearr_125429_127297[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125420 === (9))){
var state_125419__$1 = state_125419;
var statearr_125430_127300 = state_125419__$1;
(statearr_125430_127300[(2)] = null);

(statearr_125430_127300[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125420 === (5))){
var inst_125404 = cljs.core.async.close_BANG_(out);
var state_125419__$1 = state_125419;
var statearr_125431_127303 = state_125419__$1;
(statearr_125431_127303[(2)] = inst_125404);

(statearr_125431_127303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125420 === (10))){
var inst_125412 = (state_125419[(2)]);
var state_125419__$1 = (function (){var statearr_125432 = state_125419;
(statearr_125432[(8)] = inst_125412);

return statearr_125432;
})();
var statearr_125433_127308 = state_125419__$1;
(statearr_125433_127308[(2)] = null);

(statearr_125433_127308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125420 === (8))){
var inst_125401 = (state_125419[(7)]);
var state_125419__$1 = state_125419;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_125419__$1,(11),out,inst_125401);
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
var statearr_125436 = [null,null,null,null,null,null,null,null,null];
(statearr_125436[(0)] = cljs$core$async$state_machine__60366__auto__);

(statearr_125436[(1)] = (1));

return statearr_125436;
});
var cljs$core$async$state_machine__60366__auto____1 = (function (state_125419){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_125419);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e125437){var ex__60369__auto__ = e125437;
var statearr_125440_127309 = state_125419;
(statearr_125440_127309[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_125419[(4)]))){
var statearr_125441_127310 = state_125419;
(statearr_125441_127310[(1)] = cljs.core.first((state_125419[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__127311 = state_125419;
state_125419 = G__127311;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
cljs$core$async$state_machine__60366__auto__ = function(state_125419){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60366__auto____1.call(this,state_125419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60366__auto____0;
cljs$core$async$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60366__auto____1;
return cljs$core$async$state_machine__60366__auto__;
})()
})();
var state__60390__auto__ = (function (){var statearr_125442 = f__60389__auto__();
(statearr_125442[(6)] = c__60388__auto___127268);

return statearr_125442;
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
var G__125444 = arguments.length;
switch (G__125444) {
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
var f__60389__auto__ = (function (){var switch__60365__auto__ = (function (state_125509){
var state_val_125510 = (state_125509[(1)]);
if((state_val_125510 === (7))){
var inst_125505 = (state_125509[(2)]);
var state_125509__$1 = state_125509;
var statearr_125512_127314 = state_125509__$1;
(statearr_125512_127314[(2)] = inst_125505);

(statearr_125512_127314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125510 === (20))){
var inst_125474 = (state_125509[(7)]);
var inst_125486 = (state_125509[(2)]);
var inst_125487 = cljs.core.next(inst_125474);
var inst_125460 = inst_125487;
var inst_125461 = null;
var inst_125462 = (0);
var inst_125463 = (0);
var state_125509__$1 = (function (){var statearr_125514 = state_125509;
(statearr_125514[(8)] = inst_125462);

(statearr_125514[(9)] = inst_125486);

(statearr_125514[(10)] = inst_125461);

(statearr_125514[(11)] = inst_125463);

(statearr_125514[(12)] = inst_125460);

return statearr_125514;
})();
var statearr_125515_127317 = state_125509__$1;
(statearr_125515_127317[(2)] = null);

(statearr_125515_127317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125510 === (1))){
var state_125509__$1 = state_125509;
var statearr_125516_127318 = state_125509__$1;
(statearr_125516_127318[(2)] = null);

(statearr_125516_127318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125510 === (4))){
var inst_125447 = (state_125509[(13)]);
var inst_125447__$1 = (state_125509[(2)]);
var inst_125448 = (inst_125447__$1 == null);
var state_125509__$1 = (function (){var statearr_125517 = state_125509;
(statearr_125517[(13)] = inst_125447__$1);

return statearr_125517;
})();
if(cljs.core.truth_(inst_125448)){
var statearr_125518_127319 = state_125509__$1;
(statearr_125518_127319[(1)] = (5));

} else {
var statearr_125519_127320 = state_125509__$1;
(statearr_125519_127320[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125510 === (15))){
var state_125509__$1 = state_125509;
var statearr_125525_127323 = state_125509__$1;
(statearr_125525_127323[(2)] = null);

(statearr_125525_127323[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125510 === (21))){
var state_125509__$1 = state_125509;
var statearr_125526_127324 = state_125509__$1;
(statearr_125526_127324[(2)] = null);

(statearr_125526_127324[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125510 === (13))){
var inst_125462 = (state_125509[(8)]);
var inst_125461 = (state_125509[(10)]);
var inst_125463 = (state_125509[(11)]);
var inst_125460 = (state_125509[(12)]);
var inst_125470 = (state_125509[(2)]);
var inst_125471 = (inst_125463 + (1));
var tmp125522 = inst_125462;
var tmp125523 = inst_125461;
var tmp125524 = inst_125460;
var inst_125460__$1 = tmp125524;
var inst_125461__$1 = tmp125523;
var inst_125462__$1 = tmp125522;
var inst_125463__$1 = inst_125471;
var state_125509__$1 = (function (){var statearr_125527 = state_125509;
(statearr_125527[(8)] = inst_125462__$1);

(statearr_125527[(10)] = inst_125461__$1);

(statearr_125527[(11)] = inst_125463__$1);

(statearr_125527[(14)] = inst_125470);

(statearr_125527[(12)] = inst_125460__$1);

return statearr_125527;
})();
var statearr_125528_127327 = state_125509__$1;
(statearr_125528_127327[(2)] = null);

(statearr_125528_127327[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125510 === (22))){
var state_125509__$1 = state_125509;
var statearr_125534_127328 = state_125509__$1;
(statearr_125534_127328[(2)] = null);

(statearr_125534_127328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125510 === (6))){
var inst_125447 = (state_125509[(13)]);
var inst_125457 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_125447) : f.call(null,inst_125447));
var inst_125459 = cljs.core.seq(inst_125457);
var inst_125460 = inst_125459;
var inst_125461 = null;
var inst_125462 = (0);
var inst_125463 = (0);
var state_125509__$1 = (function (){var statearr_125535 = state_125509;
(statearr_125535[(8)] = inst_125462);

(statearr_125535[(10)] = inst_125461);

(statearr_125535[(11)] = inst_125463);

(statearr_125535[(12)] = inst_125460);

return statearr_125535;
})();
var statearr_125536_127330 = state_125509__$1;
(statearr_125536_127330[(2)] = null);

(statearr_125536_127330[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125510 === (17))){
var inst_125474 = (state_125509[(7)]);
var inst_125479 = cljs.core.chunk_first(inst_125474);
var inst_125480 = cljs.core.chunk_rest(inst_125474);
var inst_125481 = cljs.core.count(inst_125479);
var inst_125460 = inst_125480;
var inst_125461 = inst_125479;
var inst_125462 = inst_125481;
var inst_125463 = (0);
var state_125509__$1 = (function (){var statearr_125537 = state_125509;
(statearr_125537[(8)] = inst_125462);

(statearr_125537[(10)] = inst_125461);

(statearr_125537[(11)] = inst_125463);

(statearr_125537[(12)] = inst_125460);

return statearr_125537;
})();
var statearr_125538_127331 = state_125509__$1;
(statearr_125538_127331[(2)] = null);

(statearr_125538_127331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125510 === (3))){
var inst_125507 = (state_125509[(2)]);
var state_125509__$1 = state_125509;
return cljs.core.async.impl.ioc_helpers.return_chan(state_125509__$1,inst_125507);
} else {
if((state_val_125510 === (12))){
var inst_125495 = (state_125509[(2)]);
var state_125509__$1 = state_125509;
var statearr_125542_127332 = state_125509__$1;
(statearr_125542_127332[(2)] = inst_125495);

(statearr_125542_127332[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125510 === (2))){
var state_125509__$1 = state_125509;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_125509__$1,(4),in$);
} else {
if((state_val_125510 === (23))){
var inst_125503 = (state_125509[(2)]);
var state_125509__$1 = state_125509;
var statearr_125546_127333 = state_125509__$1;
(statearr_125546_127333[(2)] = inst_125503);

(statearr_125546_127333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125510 === (19))){
var inst_125490 = (state_125509[(2)]);
var state_125509__$1 = state_125509;
var statearr_125547_127335 = state_125509__$1;
(statearr_125547_127335[(2)] = inst_125490);

(statearr_125547_127335[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125510 === (11))){
var inst_125474 = (state_125509[(7)]);
var inst_125460 = (state_125509[(12)]);
var inst_125474__$1 = cljs.core.seq(inst_125460);
var state_125509__$1 = (function (){var statearr_125548 = state_125509;
(statearr_125548[(7)] = inst_125474__$1);

return statearr_125548;
})();
if(inst_125474__$1){
var statearr_125549_127337 = state_125509__$1;
(statearr_125549_127337[(1)] = (14));

} else {
var statearr_125550_127339 = state_125509__$1;
(statearr_125550_127339[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125510 === (9))){
var inst_125497 = (state_125509[(2)]);
var inst_125498 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_125509__$1 = (function (){var statearr_125554 = state_125509;
(statearr_125554[(15)] = inst_125497);

return statearr_125554;
})();
if(cljs.core.truth_(inst_125498)){
var statearr_125555_127340 = state_125509__$1;
(statearr_125555_127340[(1)] = (21));

} else {
var statearr_125556_127341 = state_125509__$1;
(statearr_125556_127341[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125510 === (5))){
var inst_125450 = cljs.core.async.close_BANG_(out);
var state_125509__$1 = state_125509;
var statearr_125559_127342 = state_125509__$1;
(statearr_125559_127342[(2)] = inst_125450);

(statearr_125559_127342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125510 === (14))){
var inst_125474 = (state_125509[(7)]);
var inst_125477 = cljs.core.chunked_seq_QMARK_(inst_125474);
var state_125509__$1 = state_125509;
if(inst_125477){
var statearr_125560_127343 = state_125509__$1;
(statearr_125560_127343[(1)] = (17));

} else {
var statearr_125562_127344 = state_125509__$1;
(statearr_125562_127344[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125510 === (16))){
var inst_125493 = (state_125509[(2)]);
var state_125509__$1 = state_125509;
var statearr_125563_127345 = state_125509__$1;
(statearr_125563_127345[(2)] = inst_125493);

(statearr_125563_127345[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125510 === (10))){
var inst_125461 = (state_125509[(10)]);
var inst_125463 = (state_125509[(11)]);
var inst_125468 = cljs.core._nth(inst_125461,inst_125463);
var state_125509__$1 = state_125509;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_125509__$1,(13),out,inst_125468);
} else {
if((state_val_125510 === (18))){
var inst_125474 = (state_125509[(7)]);
var inst_125484 = cljs.core.first(inst_125474);
var state_125509__$1 = state_125509;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_125509__$1,(20),out,inst_125484);
} else {
if((state_val_125510 === (8))){
var inst_125462 = (state_125509[(8)]);
var inst_125463 = (state_125509[(11)]);
var inst_125465 = (inst_125463 < inst_125462);
var inst_125466 = inst_125465;
var state_125509__$1 = state_125509;
if(cljs.core.truth_(inst_125466)){
var statearr_125567_127346 = state_125509__$1;
(statearr_125567_127346[(1)] = (10));

} else {
var statearr_125568_127347 = state_125509__$1;
(statearr_125568_127347[(1)] = (11));

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
var statearr_125569 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_125569[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__60366__auto__);

(statearr_125569[(1)] = (1));

return statearr_125569;
});
var cljs$core$async$mapcat_STAR__$_state_machine__60366__auto____1 = (function (state_125509){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_125509);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e125570){var ex__60369__auto__ = e125570;
var statearr_125571_127348 = state_125509;
(statearr_125571_127348[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_125509[(4)]))){
var statearr_125572_127349 = state_125509;
(statearr_125572_127349[(1)] = cljs.core.first((state_125509[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__127350 = state_125509;
state_125509 = G__127350;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__60366__auto__ = function(state_125509){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__60366__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__60366__auto____1.call(this,state_125509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__60366__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__60366__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__60366__auto__;
})()
})();
var state__60390__auto__ = (function (){var statearr_125576 = f__60389__auto__();
(statearr_125576[(6)] = c__60388__auto__);

return statearr_125576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60390__auto__);
}));

return c__60388__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__125583 = arguments.length;
switch (G__125583) {
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
var G__125585 = arguments.length;
switch (G__125585) {
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
var G__125590 = arguments.length;
switch (G__125590) {
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
var c__60388__auto___127354 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60389__auto__ = (function (){var switch__60365__auto__ = (function (state_125623){
var state_val_125624 = (state_125623[(1)]);
if((state_val_125624 === (7))){
var inst_125618 = (state_125623[(2)]);
var state_125623__$1 = state_125623;
var statearr_125627_127355 = state_125623__$1;
(statearr_125627_127355[(2)] = inst_125618);

(statearr_125627_127355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125624 === (1))){
var inst_125595 = null;
var state_125623__$1 = (function (){var statearr_125628 = state_125623;
(statearr_125628[(7)] = inst_125595);

return statearr_125628;
})();
var statearr_125629_127356 = state_125623__$1;
(statearr_125629_127356[(2)] = null);

(statearr_125629_127356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125624 === (4))){
var inst_125603 = (state_125623[(8)]);
var inst_125603__$1 = (state_125623[(2)]);
var inst_125604 = (inst_125603__$1 == null);
var inst_125605 = cljs.core.not(inst_125604);
var state_125623__$1 = (function (){var statearr_125630 = state_125623;
(statearr_125630[(8)] = inst_125603__$1);

return statearr_125630;
})();
if(inst_125605){
var statearr_125632_127357 = state_125623__$1;
(statearr_125632_127357[(1)] = (5));

} else {
var statearr_125633_127358 = state_125623__$1;
(statearr_125633_127358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125624 === (6))){
var state_125623__$1 = state_125623;
var statearr_125634_127359 = state_125623__$1;
(statearr_125634_127359[(2)] = null);

(statearr_125634_127359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125624 === (3))){
var inst_125620 = (state_125623[(2)]);
var inst_125621 = cljs.core.async.close_BANG_(out);
var state_125623__$1 = (function (){var statearr_125637 = state_125623;
(statearr_125637[(9)] = inst_125620);

return statearr_125637;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_125623__$1,inst_125621);
} else {
if((state_val_125624 === (2))){
var state_125623__$1 = state_125623;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_125623__$1,(4),ch);
} else {
if((state_val_125624 === (11))){
var inst_125603 = (state_125623[(8)]);
var inst_125612 = (state_125623[(2)]);
var inst_125595 = inst_125603;
var state_125623__$1 = (function (){var statearr_125639 = state_125623;
(statearr_125639[(7)] = inst_125595);

(statearr_125639[(10)] = inst_125612);

return statearr_125639;
})();
var statearr_125640_127360 = state_125623__$1;
(statearr_125640_127360[(2)] = null);

(statearr_125640_127360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125624 === (9))){
var inst_125603 = (state_125623[(8)]);
var state_125623__$1 = state_125623;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_125623__$1,(11),out,inst_125603);
} else {
if((state_val_125624 === (5))){
var inst_125595 = (state_125623[(7)]);
var inst_125603 = (state_125623[(8)]);
var inst_125607 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_125603,inst_125595);
var state_125623__$1 = state_125623;
if(inst_125607){
var statearr_125644_127361 = state_125623__$1;
(statearr_125644_127361[(1)] = (8));

} else {
var statearr_125645_127362 = state_125623__$1;
(statearr_125645_127362[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125624 === (10))){
var inst_125615 = (state_125623[(2)]);
var state_125623__$1 = state_125623;
var statearr_125646_127363 = state_125623__$1;
(statearr_125646_127363[(2)] = inst_125615);

(statearr_125646_127363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125624 === (8))){
var inst_125595 = (state_125623[(7)]);
var tmp125643 = inst_125595;
var inst_125595__$1 = tmp125643;
var state_125623__$1 = (function (){var statearr_125648 = state_125623;
(statearr_125648[(7)] = inst_125595__$1);

return statearr_125648;
})();
var statearr_125650_127364 = state_125623__$1;
(statearr_125650_127364[(2)] = null);

(statearr_125650_127364[(1)] = (2));


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
var statearr_125651 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_125651[(0)] = cljs$core$async$state_machine__60366__auto__);

(statearr_125651[(1)] = (1));

return statearr_125651;
});
var cljs$core$async$state_machine__60366__auto____1 = (function (state_125623){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_125623);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e125652){var ex__60369__auto__ = e125652;
var statearr_125653_127365 = state_125623;
(statearr_125653_127365[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_125623[(4)]))){
var statearr_125654_127366 = state_125623;
(statearr_125654_127366[(1)] = cljs.core.first((state_125623[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__127367 = state_125623;
state_125623 = G__127367;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
cljs$core$async$state_machine__60366__auto__ = function(state_125623){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60366__auto____1.call(this,state_125623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60366__auto____0;
cljs$core$async$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60366__auto____1;
return cljs$core$async$state_machine__60366__auto__;
})()
})();
var state__60390__auto__ = (function (){var statearr_125655 = f__60389__auto__();
(statearr_125655[(6)] = c__60388__auto___127354);

return statearr_125655;
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
var G__125659 = arguments.length;
switch (G__125659) {
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
var c__60388__auto___127369 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60389__auto__ = (function (){var switch__60365__auto__ = (function (state_125702){
var state_val_125703 = (state_125702[(1)]);
if((state_val_125703 === (7))){
var inst_125698 = (state_125702[(2)]);
var state_125702__$1 = state_125702;
var statearr_125705_127370 = state_125702__$1;
(statearr_125705_127370[(2)] = inst_125698);

(statearr_125705_127370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125703 === (1))){
var inst_125660 = (new Array(n));
var inst_125661 = inst_125660;
var inst_125662 = (0);
var state_125702__$1 = (function (){var statearr_125706 = state_125702;
(statearr_125706[(7)] = inst_125661);

(statearr_125706[(8)] = inst_125662);

return statearr_125706;
})();
var statearr_125708_127371 = state_125702__$1;
(statearr_125708_127371[(2)] = null);

(statearr_125708_127371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125703 === (4))){
var inst_125665 = (state_125702[(9)]);
var inst_125665__$1 = (state_125702[(2)]);
var inst_125666 = (inst_125665__$1 == null);
var inst_125667 = cljs.core.not(inst_125666);
var state_125702__$1 = (function (){var statearr_125712 = state_125702;
(statearr_125712[(9)] = inst_125665__$1);

return statearr_125712;
})();
if(inst_125667){
var statearr_125713_127372 = state_125702__$1;
(statearr_125713_127372[(1)] = (5));

} else {
var statearr_125714_127373 = state_125702__$1;
(statearr_125714_127373[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125703 === (15))){
var inst_125692 = (state_125702[(2)]);
var state_125702__$1 = state_125702;
var statearr_125715_127377 = state_125702__$1;
(statearr_125715_127377[(2)] = inst_125692);

(statearr_125715_127377[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125703 === (13))){
var state_125702__$1 = state_125702;
var statearr_125719_127378 = state_125702__$1;
(statearr_125719_127378[(2)] = null);

(statearr_125719_127378[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125703 === (6))){
var inst_125662 = (state_125702[(8)]);
var inst_125688 = (inst_125662 > (0));
var state_125702__$1 = state_125702;
if(cljs.core.truth_(inst_125688)){
var statearr_125725_127379 = state_125702__$1;
(statearr_125725_127379[(1)] = (12));

} else {
var statearr_125726_127380 = state_125702__$1;
(statearr_125726_127380[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125703 === (3))){
var inst_125700 = (state_125702[(2)]);
var state_125702__$1 = state_125702;
return cljs.core.async.impl.ioc_helpers.return_chan(state_125702__$1,inst_125700);
} else {
if((state_val_125703 === (12))){
var inst_125661 = (state_125702[(7)]);
var inst_125690 = cljs.core.vec(inst_125661);
var state_125702__$1 = state_125702;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_125702__$1,(15),out,inst_125690);
} else {
if((state_val_125703 === (2))){
var state_125702__$1 = state_125702;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_125702__$1,(4),ch);
} else {
if((state_val_125703 === (11))){
var inst_125678 = (state_125702[(2)]);
var inst_125679 = (new Array(n));
var inst_125661 = inst_125679;
var inst_125662 = (0);
var state_125702__$1 = (function (){var statearr_125729 = state_125702;
(statearr_125729[(7)] = inst_125661);

(statearr_125729[(8)] = inst_125662);

(statearr_125729[(10)] = inst_125678);

return statearr_125729;
})();
var statearr_125730_127382 = state_125702__$1;
(statearr_125730_127382[(2)] = null);

(statearr_125730_127382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125703 === (9))){
var inst_125661 = (state_125702[(7)]);
var inst_125676 = cljs.core.vec(inst_125661);
var state_125702__$1 = state_125702;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_125702__$1,(11),out,inst_125676);
} else {
if((state_val_125703 === (5))){
var inst_125661 = (state_125702[(7)]);
var inst_125670 = (state_125702[(11)]);
var inst_125662 = (state_125702[(8)]);
var inst_125665 = (state_125702[(9)]);
var inst_125669 = (inst_125661[inst_125662] = inst_125665);
var inst_125670__$1 = (inst_125662 + (1));
var inst_125672 = (inst_125670__$1 < n);
var state_125702__$1 = (function (){var statearr_125731 = state_125702;
(statearr_125731[(11)] = inst_125670__$1);

(statearr_125731[(12)] = inst_125669);

return statearr_125731;
})();
if(cljs.core.truth_(inst_125672)){
var statearr_125732_127383 = state_125702__$1;
(statearr_125732_127383[(1)] = (8));

} else {
var statearr_125733_127384 = state_125702__$1;
(statearr_125733_127384[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125703 === (14))){
var inst_125695 = (state_125702[(2)]);
var inst_125696 = cljs.core.async.close_BANG_(out);
var state_125702__$1 = (function (){var statearr_125736 = state_125702;
(statearr_125736[(13)] = inst_125695);

return statearr_125736;
})();
var statearr_125737_127385 = state_125702__$1;
(statearr_125737_127385[(2)] = inst_125696);

(statearr_125737_127385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125703 === (10))){
var inst_125683 = (state_125702[(2)]);
var state_125702__$1 = state_125702;
var statearr_125739_127386 = state_125702__$1;
(statearr_125739_127386[(2)] = inst_125683);

(statearr_125739_127386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125703 === (8))){
var inst_125661 = (state_125702[(7)]);
var inst_125670 = (state_125702[(11)]);
var tmp125734 = inst_125661;
var inst_125661__$1 = tmp125734;
var inst_125662 = inst_125670;
var state_125702__$1 = (function (){var statearr_125740 = state_125702;
(statearr_125740[(7)] = inst_125661__$1);

(statearr_125740[(8)] = inst_125662);

return statearr_125740;
})();
var statearr_125741_127387 = state_125702__$1;
(statearr_125741_127387[(2)] = null);

(statearr_125741_127387[(1)] = (2));


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
var statearr_125742 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_125742[(0)] = cljs$core$async$state_machine__60366__auto__);

(statearr_125742[(1)] = (1));

return statearr_125742;
});
var cljs$core$async$state_machine__60366__auto____1 = (function (state_125702){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_125702);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e125743){var ex__60369__auto__ = e125743;
var statearr_125744_127388 = state_125702;
(statearr_125744_127388[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_125702[(4)]))){
var statearr_125746_127389 = state_125702;
(statearr_125746_127389[(1)] = cljs.core.first((state_125702[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__127392 = state_125702;
state_125702 = G__127392;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
cljs$core$async$state_machine__60366__auto__ = function(state_125702){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60366__auto____1.call(this,state_125702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60366__auto____0;
cljs$core$async$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60366__auto____1;
return cljs$core$async$state_machine__60366__auto__;
})()
})();
var state__60390__auto__ = (function (){var statearr_125748 = f__60389__auto__();
(statearr_125748[(6)] = c__60388__auto___127369);

return statearr_125748;
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
var G__125750 = arguments.length;
switch (G__125750) {
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
var c__60388__auto___127396 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60389__auto__ = (function (){var switch__60365__auto__ = (function (state_125795){
var state_val_125796 = (state_125795[(1)]);
if((state_val_125796 === (7))){
var inst_125791 = (state_125795[(2)]);
var state_125795__$1 = state_125795;
var statearr_125798_127397 = state_125795__$1;
(statearr_125798_127397[(2)] = inst_125791);

(statearr_125798_127397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125796 === (1))){
var inst_125751 = [];
var inst_125752 = inst_125751;
var inst_125753 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_125795__$1 = (function (){var statearr_125799 = state_125795;
(statearr_125799[(7)] = inst_125752);

(statearr_125799[(8)] = inst_125753);

return statearr_125799;
})();
var statearr_125800_127398 = state_125795__$1;
(statearr_125800_127398[(2)] = null);

(statearr_125800_127398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125796 === (4))){
var inst_125756 = (state_125795[(9)]);
var inst_125756__$1 = (state_125795[(2)]);
var inst_125757 = (inst_125756__$1 == null);
var inst_125758 = cljs.core.not(inst_125757);
var state_125795__$1 = (function (){var statearr_125801 = state_125795;
(statearr_125801[(9)] = inst_125756__$1);

return statearr_125801;
})();
if(inst_125758){
var statearr_125802_127399 = state_125795__$1;
(statearr_125802_127399[(1)] = (5));

} else {
var statearr_125803_127400 = state_125795__$1;
(statearr_125803_127400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125796 === (15))){
var inst_125785 = (state_125795[(2)]);
var state_125795__$1 = state_125795;
var statearr_125804_127401 = state_125795__$1;
(statearr_125804_127401[(2)] = inst_125785);

(statearr_125804_127401[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125796 === (13))){
var state_125795__$1 = state_125795;
var statearr_125805_127402 = state_125795__$1;
(statearr_125805_127402[(2)] = null);

(statearr_125805_127402[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125796 === (6))){
var inst_125752 = (state_125795[(7)]);
var inst_125780 = inst_125752.length;
var inst_125781 = (inst_125780 > (0));
var state_125795__$1 = state_125795;
if(cljs.core.truth_(inst_125781)){
var statearr_125806_127405 = state_125795__$1;
(statearr_125806_127405[(1)] = (12));

} else {
var statearr_125807_127406 = state_125795__$1;
(statearr_125807_127406[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125796 === (3))){
var inst_125793 = (state_125795[(2)]);
var state_125795__$1 = state_125795;
return cljs.core.async.impl.ioc_helpers.return_chan(state_125795__$1,inst_125793);
} else {
if((state_val_125796 === (12))){
var inst_125752 = (state_125795[(7)]);
var inst_125783 = cljs.core.vec(inst_125752);
var state_125795__$1 = state_125795;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_125795__$1,(15),out,inst_125783);
} else {
if((state_val_125796 === (2))){
var state_125795__$1 = state_125795;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_125795__$1,(4),ch);
} else {
if((state_val_125796 === (11))){
var inst_125756 = (state_125795[(9)]);
var inst_125760 = (state_125795[(10)]);
var inst_125770 = (state_125795[(2)]);
var inst_125773 = [];
var inst_125774 = inst_125773.push(inst_125756);
var inst_125752 = inst_125773;
var inst_125753 = inst_125760;
var state_125795__$1 = (function (){var statearr_125810 = state_125795;
(statearr_125810[(11)] = inst_125770);

(statearr_125810[(7)] = inst_125752);

(statearr_125810[(12)] = inst_125774);

(statearr_125810[(8)] = inst_125753);

return statearr_125810;
})();
var statearr_125811_127407 = state_125795__$1;
(statearr_125811_127407[(2)] = null);

(statearr_125811_127407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125796 === (9))){
var inst_125752 = (state_125795[(7)]);
var inst_125768 = cljs.core.vec(inst_125752);
var state_125795__$1 = state_125795;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_125795__$1,(11),out,inst_125768);
} else {
if((state_val_125796 === (5))){
var inst_125756 = (state_125795[(9)]);
var inst_125760 = (state_125795[(10)]);
var inst_125753 = (state_125795[(8)]);
var inst_125760__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_125756) : f.call(null,inst_125756));
var inst_125761 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_125760__$1,inst_125753);
var inst_125762 = cljs.core.keyword_identical_QMARK_(inst_125753,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_125763 = ((inst_125761) || (inst_125762));
var state_125795__$1 = (function (){var statearr_125814 = state_125795;
(statearr_125814[(10)] = inst_125760__$1);

return statearr_125814;
})();
if(cljs.core.truth_(inst_125763)){
var statearr_125817_127408 = state_125795__$1;
(statearr_125817_127408[(1)] = (8));

} else {
var statearr_125819_127409 = state_125795__$1;
(statearr_125819_127409[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125796 === (14))){
var inst_125788 = (state_125795[(2)]);
var inst_125789 = cljs.core.async.close_BANG_(out);
var state_125795__$1 = (function (){var statearr_125821 = state_125795;
(statearr_125821[(13)] = inst_125788);

return statearr_125821;
})();
var statearr_125822_127410 = state_125795__$1;
(statearr_125822_127410[(2)] = inst_125789);

(statearr_125822_127410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125796 === (10))){
var inst_125777 = (state_125795[(2)]);
var state_125795__$1 = state_125795;
var statearr_125823_127411 = state_125795__$1;
(statearr_125823_127411[(2)] = inst_125777);

(statearr_125823_127411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125796 === (8))){
var inst_125756 = (state_125795[(9)]);
var inst_125752 = (state_125795[(7)]);
var inst_125760 = (state_125795[(10)]);
var inst_125765 = inst_125752.push(inst_125756);
var tmp125820 = inst_125752;
var inst_125752__$1 = tmp125820;
var inst_125753 = inst_125760;
var state_125795__$1 = (function (){var statearr_125824 = state_125795;
(statearr_125824[(7)] = inst_125752__$1);

(statearr_125824[(14)] = inst_125765);

(statearr_125824[(8)] = inst_125753);

return statearr_125824;
})();
var statearr_125825_127412 = state_125795__$1;
(statearr_125825_127412[(2)] = null);

(statearr_125825_127412[(1)] = (2));


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
var statearr_125828 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_125828[(0)] = cljs$core$async$state_machine__60366__auto__);

(statearr_125828[(1)] = (1));

return statearr_125828;
});
var cljs$core$async$state_machine__60366__auto____1 = (function (state_125795){
while(true){
var ret_value__60367__auto__ = (function (){try{while(true){
var result__60368__auto__ = switch__60365__auto__(state_125795);
if(cljs.core.keyword_identical_QMARK_(result__60368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60368__auto__;
}
break;
}
}catch (e125829){var ex__60369__auto__ = e125829;
var statearr_125830_127413 = state_125795;
(statearr_125830_127413[(2)] = ex__60369__auto__);


if(cljs.core.seq((state_125795[(4)]))){
var statearr_125831_127414 = state_125795;
(statearr_125831_127414[(1)] = cljs.core.first((state_125795[(4)])));

} else {
throw ex__60369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__127415 = state_125795;
state_125795 = G__127415;
continue;
} else {
return ret_value__60367__auto__;
}
break;
}
});
cljs$core$async$state_machine__60366__auto__ = function(state_125795){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60366__auto____1.call(this,state_125795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60366__auto____0;
cljs$core$async$state_machine__60366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60366__auto____1;
return cljs$core$async$state_machine__60366__auto__;
})()
})();
var state__60390__auto__ = (function (){var statearr_125838 = f__60389__auto__();
(statearr_125838[(6)] = c__60388__auto___127396);

return statearr_125838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60390__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
