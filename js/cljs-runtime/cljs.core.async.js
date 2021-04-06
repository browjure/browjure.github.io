goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__75734 = arguments.length;
switch (G__75734) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async75740 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async75740 = (function (f,blockable,meta75741){
this.f = f;
this.blockable = blockable;
this.meta75741 = meta75741;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async75740.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75742,meta75741__$1){
var self__ = this;
var _75742__$1 = this;
return (new cljs.core.async.t_cljs$core$async75740(self__.f,self__.blockable,meta75741__$1));
}));

(cljs.core.async.t_cljs$core$async75740.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75742){
var self__ = this;
var _75742__$1 = this;
return self__.meta75741;
}));

(cljs.core.async.t_cljs$core$async75740.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75740.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async75740.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async75740.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async75740.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta75741","meta75741",1108417217,null)], null);
}));

(cljs.core.async.t_cljs$core$async75740.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async75740.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async75740");

(cljs.core.async.t_cljs$core$async75740.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async75740");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async75740.
 */
cljs.core.async.__GT_t_cljs$core$async75740 = (function cljs$core$async$__GT_t_cljs$core$async75740(f__$1,blockable__$1,meta75741){
return (new cljs.core.async.t_cljs$core$async75740(f__$1,blockable__$1,meta75741));
});

}

return (new cljs.core.async.t_cljs$core$async75740(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__75784 = arguments.length;
switch (G__75784) {
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
var G__75797 = arguments.length;
switch (G__75797) {
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
var G__75801 = arguments.length;
switch (G__75801) {
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
var val_78235 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_78235) : fn1.call(null,val_78235));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_78235) : fn1.call(null,val_78235));
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
var G__75820 = arguments.length;
switch (G__75820) {
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
var n__4613__auto___78239 = n;
var x_78240 = (0);
while(true){
if((x_78240 < n__4613__auto___78239)){
(a[x_78240] = x_78240);

var G__78241 = (x_78240 + (1));
x_78240 = G__78241;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async75848 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async75848 = (function (flag,meta75849){
this.flag = flag;
this.meta75849 = meta75849;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async75848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75850,meta75849__$1){
var self__ = this;
var _75850__$1 = this;
return (new cljs.core.async.t_cljs$core$async75848(self__.flag,meta75849__$1));
}));

(cljs.core.async.t_cljs$core$async75848.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75850){
var self__ = this;
var _75850__$1 = this;
return self__.meta75849;
}));

(cljs.core.async.t_cljs$core$async75848.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75848.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async75848.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async75848.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async75848.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta75849","meta75849",-382487101,null)], null);
}));

(cljs.core.async.t_cljs$core$async75848.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async75848.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async75848");

(cljs.core.async.t_cljs$core$async75848.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async75848");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async75848.
 */
cljs.core.async.__GT_t_cljs$core$async75848 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async75848(flag__$1,meta75849){
return (new cljs.core.async.t_cljs$core$async75848(flag__$1,meta75849));
});

}

return (new cljs.core.async.t_cljs$core$async75848(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async75862 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async75862 = (function (flag,cb,meta75863){
this.flag = flag;
this.cb = cb;
this.meta75863 = meta75863;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async75862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75864,meta75863__$1){
var self__ = this;
var _75864__$1 = this;
return (new cljs.core.async.t_cljs$core$async75862(self__.flag,self__.cb,meta75863__$1));
}));

(cljs.core.async.t_cljs$core$async75862.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75864){
var self__ = this;
var _75864__$1 = this;
return self__.meta75863;
}));

(cljs.core.async.t_cljs$core$async75862.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75862.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async75862.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async75862.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async75862.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta75863","meta75863",1100382291,null)], null);
}));

(cljs.core.async.t_cljs$core$async75862.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async75862.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async75862");

(cljs.core.async.t_cljs$core$async75862.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async75862");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async75862.
 */
cljs.core.async.__GT_t_cljs$core$async75862 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async75862(flag__$1,cb__$1,meta75863){
return (new cljs.core.async.t_cljs$core$async75862(flag__$1,cb__$1,meta75863));
});

}

return (new cljs.core.async.t_cljs$core$async75862(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__75869_SHARP_){
var G__75887 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__75869_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__75887) : fret.call(null,G__75887));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__75870_SHARP_){
var G__75889 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__75870_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__75889) : fret.call(null,G__75889));
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
var G__78253 = (i + (1));
i = G__78253;
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
var len__4736__auto___78254 = arguments.length;
var i__4737__auto___78255 = (0);
while(true){
if((i__4737__auto___78255 < len__4736__auto___78254)){
args__4742__auto__.push((arguments[i__4737__auto___78255]));

var G__78256 = (i__4737__auto___78255 + (1));
i__4737__auto___78255 = G__78256;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__75906){
var map__75908 = p__75906;
var map__75908__$1 = (((((!((map__75908 == null))))?(((((map__75908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75908):map__75908);
var opts = map__75908__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq75897){
var G__75898 = cljs.core.first(seq75897);
var seq75897__$1 = cljs.core.next(seq75897);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__75898,seq75897__$1);
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
var G__75927 = arguments.length;
switch (G__75927) {
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
var c__60460__auto___78261 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60461__auto__ = (function (){var switch__60140__auto__ = (function (state_75991){
var state_val_75992 = (state_75991[(1)]);
if((state_val_75992 === (7))){
var inst_75983 = (state_75991[(2)]);
var state_75991__$1 = state_75991;
var statearr_75997_78262 = state_75991__$1;
(statearr_75997_78262[(2)] = inst_75983);

(statearr_75997_78262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75992 === (1))){
var state_75991__$1 = state_75991;
var statearr_75998_78263 = state_75991__$1;
(statearr_75998_78263[(2)] = null);

(statearr_75998_78263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75992 === (4))){
var inst_75959 = (state_75991[(7)]);
var inst_75959__$1 = (state_75991[(2)]);
var inst_75966 = (inst_75959__$1 == null);
var state_75991__$1 = (function (){var statearr_76006 = state_75991;
(statearr_76006[(7)] = inst_75959__$1);

return statearr_76006;
})();
if(cljs.core.truth_(inst_75966)){
var statearr_76007_78264 = state_75991__$1;
(statearr_76007_78264[(1)] = (5));

} else {
var statearr_76008_78265 = state_75991__$1;
(statearr_76008_78265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75992 === (13))){
var state_75991__$1 = state_75991;
var statearr_76009_78267 = state_75991__$1;
(statearr_76009_78267[(2)] = null);

(statearr_76009_78267[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75992 === (6))){
var inst_75959 = (state_75991[(7)]);
var state_75991__$1 = state_75991;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75991__$1,(11),to,inst_75959);
} else {
if((state_val_75992 === (3))){
var inst_75985 = (state_75991[(2)]);
var state_75991__$1 = state_75991;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75991__$1,inst_75985);
} else {
if((state_val_75992 === (12))){
var state_75991__$1 = state_75991;
var statearr_76010_78268 = state_75991__$1;
(statearr_76010_78268[(2)] = null);

(statearr_76010_78268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75992 === (2))){
var state_75991__$1 = state_75991;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75991__$1,(4),from);
} else {
if((state_val_75992 === (11))){
var inst_75976 = (state_75991[(2)]);
var state_75991__$1 = state_75991;
if(cljs.core.truth_(inst_75976)){
var statearr_76011_78271 = state_75991__$1;
(statearr_76011_78271[(1)] = (12));

} else {
var statearr_76012_78272 = state_75991__$1;
(statearr_76012_78272[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75992 === (9))){
var state_75991__$1 = state_75991;
var statearr_76013_78273 = state_75991__$1;
(statearr_76013_78273[(2)] = null);

(statearr_76013_78273[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75992 === (5))){
var state_75991__$1 = state_75991;
if(cljs.core.truth_(close_QMARK_)){
var statearr_76014_78274 = state_75991__$1;
(statearr_76014_78274[(1)] = (8));

} else {
var statearr_76015_78275 = state_75991__$1;
(statearr_76015_78275[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75992 === (14))){
var inst_75981 = (state_75991[(2)]);
var state_75991__$1 = state_75991;
var statearr_76016_78276 = state_75991__$1;
(statearr_76016_78276[(2)] = inst_75981);

(statearr_76016_78276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75992 === (10))){
var inst_75973 = (state_75991[(2)]);
var state_75991__$1 = state_75991;
var statearr_76017_78278 = state_75991__$1;
(statearr_76017_78278[(2)] = inst_75973);

(statearr_76017_78278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75992 === (8))){
var inst_75969 = cljs.core.async.close_BANG_(to);
var state_75991__$1 = state_75991;
var statearr_76018_78279 = state_75991__$1;
(statearr_76018_78279[(2)] = inst_75969);

(statearr_76018_78279[(1)] = (10));


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
var cljs$core$async$state_machine__60141__auto__ = null;
var cljs$core$async$state_machine__60141__auto____0 = (function (){
var statearr_76019 = [null,null,null,null,null,null,null,null];
(statearr_76019[(0)] = cljs$core$async$state_machine__60141__auto__);

(statearr_76019[(1)] = (1));

return statearr_76019;
});
var cljs$core$async$state_machine__60141__auto____1 = (function (state_75991){
while(true){
var ret_value__60142__auto__ = (function (){try{while(true){
var result__60143__auto__ = switch__60140__auto__(state_75991);
if(cljs.core.keyword_identical_QMARK_(result__60143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60143__auto__;
}
break;
}
}catch (e76020){var ex__60144__auto__ = e76020;
var statearr_76021_78281 = state_75991;
(statearr_76021_78281[(2)] = ex__60144__auto__);


if(cljs.core.seq((state_75991[(4)]))){
var statearr_76022_78283 = state_75991;
(statearr_76022_78283[(1)] = cljs.core.first((state_75991[(4)])));

} else {
throw ex__60144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78284 = state_75991;
state_75991 = G__78284;
continue;
} else {
return ret_value__60142__auto__;
}
break;
}
});
cljs$core$async$state_machine__60141__auto__ = function(state_75991){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60141__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60141__auto____1.call(this,state_75991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60141__auto____0;
cljs$core$async$state_machine__60141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60141__auto____1;
return cljs$core$async$state_machine__60141__auto__;
})()
})();
var state__60462__auto__ = (function (){var statearr_76023 = f__60461__auto__();
(statearr_76023[(6)] = c__60460__auto___78261);

return statearr_76023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60462__auto__);
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
var process = (function (p__76024){
var vec__76025 = p__76024;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76025,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76025,(1),null);
var job = vec__76025;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__60460__auto___78286 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60461__auto__ = (function (){var switch__60140__auto__ = (function (state_76034){
var state_val_76035 = (state_76034[(1)]);
if((state_val_76035 === (1))){
var state_76034__$1 = state_76034;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_76034__$1,(2),res,v);
} else {
if((state_val_76035 === (2))){
var inst_76030 = (state_76034[(2)]);
var inst_76032 = cljs.core.async.close_BANG_(res);
var state_76034__$1 = (function (){var statearr_76036 = state_76034;
(statearr_76036[(7)] = inst_76030);

return statearr_76036;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_76034__$1,inst_76032);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__60141__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__60141__auto____0 = (function (){
var statearr_76037 = [null,null,null,null,null,null,null,null];
(statearr_76037[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__60141__auto__);

(statearr_76037[(1)] = (1));

return statearr_76037;
});
var cljs$core$async$pipeline_STAR__$_state_machine__60141__auto____1 = (function (state_76034){
while(true){
var ret_value__60142__auto__ = (function (){try{while(true){
var result__60143__auto__ = switch__60140__auto__(state_76034);
if(cljs.core.keyword_identical_QMARK_(result__60143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60143__auto__;
}
break;
}
}catch (e76038){var ex__60144__auto__ = e76038;
var statearr_76039_78288 = state_76034;
(statearr_76039_78288[(2)] = ex__60144__auto__);


if(cljs.core.seq((state_76034[(4)]))){
var statearr_76040_78289 = state_76034;
(statearr_76040_78289[(1)] = cljs.core.first((state_76034[(4)])));

} else {
throw ex__60144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78290 = state_76034;
state_76034 = G__78290;
continue;
} else {
return ret_value__60142__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__60141__auto__ = function(state_76034){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__60141__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__60141__auto____1.call(this,state_76034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__60141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__60141__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__60141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__60141__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__60141__auto__;
})()
})();
var state__60462__auto__ = (function (){var statearr_76041 = f__60461__auto__();
(statearr_76041[(6)] = c__60460__auto___78286);

return statearr_76041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60462__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__76042){
var vec__76043 = p__76042;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76043,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76043,(1),null);
var job = vec__76043;
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
var n__4613__auto___78296 = n;
var __78297 = (0);
while(true){
if((__78297 < n__4613__auto___78296)){
var G__76046_78298 = type;
var G__76046_78299__$1 = (((G__76046_78298 instanceof cljs.core.Keyword))?G__76046_78298.fqn:null);
switch (G__76046_78299__$1) {
case "compute":
var c__60460__auto___78301 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__78297,c__60460__auto___78301,G__76046_78298,G__76046_78299__$1,n__4613__auto___78296,jobs,results,process,async){
return (function (){
var f__60461__auto__ = (function (){var switch__60140__auto__ = ((function (__78297,c__60460__auto___78301,G__76046_78298,G__76046_78299__$1,n__4613__auto___78296,jobs,results,process,async){
return (function (state_76064){
var state_val_76065 = (state_76064[(1)]);
if((state_val_76065 === (1))){
var state_76064__$1 = state_76064;
var statearr_76066_78302 = state_76064__$1;
(statearr_76066_78302[(2)] = null);

(statearr_76066_78302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76065 === (2))){
var state_76064__$1 = state_76064;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76064__$1,(4),jobs);
} else {
if((state_val_76065 === (3))){
var inst_76062 = (state_76064[(2)]);
var state_76064__$1 = state_76064;
return cljs.core.async.impl.ioc_helpers.return_chan(state_76064__$1,inst_76062);
} else {
if((state_val_76065 === (4))){
var inst_76053 = (state_76064[(2)]);
var inst_76054 = process(inst_76053);
var state_76064__$1 = state_76064;
if(cljs.core.truth_(inst_76054)){
var statearr_76067_78303 = state_76064__$1;
(statearr_76067_78303[(1)] = (5));

} else {
var statearr_76068_78304 = state_76064__$1;
(statearr_76068_78304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76065 === (5))){
var state_76064__$1 = state_76064;
var statearr_76069_78305 = state_76064__$1;
(statearr_76069_78305[(2)] = null);

(statearr_76069_78305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76065 === (6))){
var state_76064__$1 = state_76064;
var statearr_76070_78306 = state_76064__$1;
(statearr_76070_78306[(2)] = null);

(statearr_76070_78306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76065 === (7))){
var inst_76059 = (state_76064[(2)]);
var state_76064__$1 = state_76064;
var statearr_76071_78307 = state_76064__$1;
(statearr_76071_78307[(2)] = inst_76059);

(statearr_76071_78307[(1)] = (3));


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
});})(__78297,c__60460__auto___78301,G__76046_78298,G__76046_78299__$1,n__4613__auto___78296,jobs,results,process,async))
;
return ((function (__78297,switch__60140__auto__,c__60460__auto___78301,G__76046_78298,G__76046_78299__$1,n__4613__auto___78296,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__60141__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__60141__auto____0 = (function (){
var statearr_76072 = [null,null,null,null,null,null,null];
(statearr_76072[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__60141__auto__);

(statearr_76072[(1)] = (1));

return statearr_76072;
});
var cljs$core$async$pipeline_STAR__$_state_machine__60141__auto____1 = (function (state_76064){
while(true){
var ret_value__60142__auto__ = (function (){try{while(true){
var result__60143__auto__ = switch__60140__auto__(state_76064);
if(cljs.core.keyword_identical_QMARK_(result__60143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60143__auto__;
}
break;
}
}catch (e76073){var ex__60144__auto__ = e76073;
var statearr_76074_78308 = state_76064;
(statearr_76074_78308[(2)] = ex__60144__auto__);


if(cljs.core.seq((state_76064[(4)]))){
var statearr_76079_78309 = state_76064;
(statearr_76079_78309[(1)] = cljs.core.first((state_76064[(4)])));

} else {
throw ex__60144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78310 = state_76064;
state_76064 = G__78310;
continue;
} else {
return ret_value__60142__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__60141__auto__ = function(state_76064){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__60141__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__60141__auto____1.call(this,state_76064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__60141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__60141__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__60141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__60141__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__60141__auto__;
})()
;})(__78297,switch__60140__auto__,c__60460__auto___78301,G__76046_78298,G__76046_78299__$1,n__4613__auto___78296,jobs,results,process,async))
})();
var state__60462__auto__ = (function (){var statearr_76080 = f__60461__auto__();
(statearr_76080[(6)] = c__60460__auto___78301);

return statearr_76080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60462__auto__);
});})(__78297,c__60460__auto___78301,G__76046_78298,G__76046_78299__$1,n__4613__auto___78296,jobs,results,process,async))
);


break;
case "async":
var c__60460__auto___78311 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__78297,c__60460__auto___78311,G__76046_78298,G__76046_78299__$1,n__4613__auto___78296,jobs,results,process,async){
return (function (){
var f__60461__auto__ = (function (){var switch__60140__auto__ = ((function (__78297,c__60460__auto___78311,G__76046_78298,G__76046_78299__$1,n__4613__auto___78296,jobs,results,process,async){
return (function (state_76093){
var state_val_76094 = (state_76093[(1)]);
if((state_val_76094 === (1))){
var state_76093__$1 = state_76093;
var statearr_76095_78312 = state_76093__$1;
(statearr_76095_78312[(2)] = null);

(statearr_76095_78312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76094 === (2))){
var state_76093__$1 = state_76093;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76093__$1,(4),jobs);
} else {
if((state_val_76094 === (3))){
var inst_76091 = (state_76093[(2)]);
var state_76093__$1 = state_76093;
return cljs.core.async.impl.ioc_helpers.return_chan(state_76093__$1,inst_76091);
} else {
if((state_val_76094 === (4))){
var inst_76083 = (state_76093[(2)]);
var inst_76084 = async(inst_76083);
var state_76093__$1 = state_76093;
if(cljs.core.truth_(inst_76084)){
var statearr_76097_78316 = state_76093__$1;
(statearr_76097_78316[(1)] = (5));

} else {
var statearr_76098_78317 = state_76093__$1;
(statearr_76098_78317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76094 === (5))){
var state_76093__$1 = state_76093;
var statearr_76099_78318 = state_76093__$1;
(statearr_76099_78318[(2)] = null);

(statearr_76099_78318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76094 === (6))){
var state_76093__$1 = state_76093;
var statearr_76103_78319 = state_76093__$1;
(statearr_76103_78319[(2)] = null);

(statearr_76103_78319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76094 === (7))){
var inst_76089 = (state_76093[(2)]);
var state_76093__$1 = state_76093;
var statearr_76104_78320 = state_76093__$1;
(statearr_76104_78320[(2)] = inst_76089);

(statearr_76104_78320[(1)] = (3));


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
});})(__78297,c__60460__auto___78311,G__76046_78298,G__76046_78299__$1,n__4613__auto___78296,jobs,results,process,async))
;
return ((function (__78297,switch__60140__auto__,c__60460__auto___78311,G__76046_78298,G__76046_78299__$1,n__4613__auto___78296,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__60141__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__60141__auto____0 = (function (){
var statearr_76105 = [null,null,null,null,null,null,null];
(statearr_76105[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__60141__auto__);

(statearr_76105[(1)] = (1));

return statearr_76105;
});
var cljs$core$async$pipeline_STAR__$_state_machine__60141__auto____1 = (function (state_76093){
while(true){
var ret_value__60142__auto__ = (function (){try{while(true){
var result__60143__auto__ = switch__60140__auto__(state_76093);
if(cljs.core.keyword_identical_QMARK_(result__60143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60143__auto__;
}
break;
}
}catch (e76106){var ex__60144__auto__ = e76106;
var statearr_76107_78322 = state_76093;
(statearr_76107_78322[(2)] = ex__60144__auto__);


if(cljs.core.seq((state_76093[(4)]))){
var statearr_76108_78323 = state_76093;
(statearr_76108_78323[(1)] = cljs.core.first((state_76093[(4)])));

} else {
throw ex__60144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78325 = state_76093;
state_76093 = G__78325;
continue;
} else {
return ret_value__60142__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__60141__auto__ = function(state_76093){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__60141__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__60141__auto____1.call(this,state_76093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__60141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__60141__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__60141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__60141__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__60141__auto__;
})()
;})(__78297,switch__60140__auto__,c__60460__auto___78311,G__76046_78298,G__76046_78299__$1,n__4613__auto___78296,jobs,results,process,async))
})();
var state__60462__auto__ = (function (){var statearr_76109 = f__60461__auto__();
(statearr_76109[(6)] = c__60460__auto___78311);

return statearr_76109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60462__auto__);
});})(__78297,c__60460__auto___78311,G__76046_78298,G__76046_78299__$1,n__4613__auto___78296,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__76046_78299__$1)].join('')));

}

var G__78326 = (__78297 + (1));
__78297 = G__78326;
continue;
} else {
}
break;
}

var c__60460__auto___78327 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60461__auto__ = (function (){var switch__60140__auto__ = (function (state_76133){
var state_val_76134 = (state_76133[(1)]);
if((state_val_76134 === (7))){
var inst_76129 = (state_76133[(2)]);
var state_76133__$1 = state_76133;
var statearr_76140_78329 = state_76133__$1;
(statearr_76140_78329[(2)] = inst_76129);

(statearr_76140_78329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76134 === (1))){
var state_76133__$1 = state_76133;
var statearr_76141_78331 = state_76133__$1;
(statearr_76141_78331[(2)] = null);

(statearr_76141_78331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76134 === (4))){
var inst_76113 = (state_76133[(7)]);
var inst_76113__$1 = (state_76133[(2)]);
var inst_76115 = (inst_76113__$1 == null);
var state_76133__$1 = (function (){var statearr_76142 = state_76133;
(statearr_76142[(7)] = inst_76113__$1);

return statearr_76142;
})();
if(cljs.core.truth_(inst_76115)){
var statearr_76143_78332 = state_76133__$1;
(statearr_76143_78332[(1)] = (5));

} else {
var statearr_76144_78333 = state_76133__$1;
(statearr_76144_78333[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76134 === (6))){
var inst_76119 = (state_76133[(8)]);
var inst_76113 = (state_76133[(7)]);
var inst_76119__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_76120 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_76121 = [inst_76113,inst_76119__$1];
var inst_76122 = (new cljs.core.PersistentVector(null,2,(5),inst_76120,inst_76121,null));
var state_76133__$1 = (function (){var statearr_76145 = state_76133;
(statearr_76145[(8)] = inst_76119__$1);

return statearr_76145;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_76133__$1,(8),jobs,inst_76122);
} else {
if((state_val_76134 === (3))){
var inst_76131 = (state_76133[(2)]);
var state_76133__$1 = state_76133;
return cljs.core.async.impl.ioc_helpers.return_chan(state_76133__$1,inst_76131);
} else {
if((state_val_76134 === (2))){
var state_76133__$1 = state_76133;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76133__$1,(4),from);
} else {
if((state_val_76134 === (9))){
var inst_76126 = (state_76133[(2)]);
var state_76133__$1 = (function (){var statearr_76147 = state_76133;
(statearr_76147[(9)] = inst_76126);

return statearr_76147;
})();
var statearr_76148_78336 = state_76133__$1;
(statearr_76148_78336[(2)] = null);

(statearr_76148_78336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76134 === (5))){
var inst_76117 = cljs.core.async.close_BANG_(jobs);
var state_76133__$1 = state_76133;
var statearr_76149_78337 = state_76133__$1;
(statearr_76149_78337[(2)] = inst_76117);

(statearr_76149_78337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76134 === (8))){
var inst_76119 = (state_76133[(8)]);
var inst_76124 = (state_76133[(2)]);
var state_76133__$1 = (function (){var statearr_76155 = state_76133;
(statearr_76155[(10)] = inst_76124);

return statearr_76155;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_76133__$1,(9),results,inst_76119);
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
var cljs$core$async$pipeline_STAR__$_state_machine__60141__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__60141__auto____0 = (function (){
var statearr_76159 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_76159[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__60141__auto__);

(statearr_76159[(1)] = (1));

return statearr_76159;
});
var cljs$core$async$pipeline_STAR__$_state_machine__60141__auto____1 = (function (state_76133){
while(true){
var ret_value__60142__auto__ = (function (){try{while(true){
var result__60143__auto__ = switch__60140__auto__(state_76133);
if(cljs.core.keyword_identical_QMARK_(result__60143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60143__auto__;
}
break;
}
}catch (e76161){var ex__60144__auto__ = e76161;
var statearr_76162_78338 = state_76133;
(statearr_76162_78338[(2)] = ex__60144__auto__);


if(cljs.core.seq((state_76133[(4)]))){
var statearr_76163_78340 = state_76133;
(statearr_76163_78340[(1)] = cljs.core.first((state_76133[(4)])));

} else {
throw ex__60144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78341 = state_76133;
state_76133 = G__78341;
continue;
} else {
return ret_value__60142__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__60141__auto__ = function(state_76133){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__60141__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__60141__auto____1.call(this,state_76133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__60141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__60141__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__60141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__60141__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__60141__auto__;
})()
})();
var state__60462__auto__ = (function (){var statearr_76164 = f__60461__auto__();
(statearr_76164[(6)] = c__60460__auto___78327);

return statearr_76164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60462__auto__);
}));


var c__60460__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60461__auto__ = (function (){var switch__60140__auto__ = (function (state_76209){
var state_val_76210 = (state_76209[(1)]);
if((state_val_76210 === (7))){
var inst_76205 = (state_76209[(2)]);
var state_76209__$1 = state_76209;
var statearr_76215_78344 = state_76209__$1;
(statearr_76215_78344[(2)] = inst_76205);

(statearr_76215_78344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76210 === (20))){
var state_76209__$1 = state_76209;
var statearr_76218_78345 = state_76209__$1;
(statearr_76218_78345[(2)] = null);

(statearr_76218_78345[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76210 === (1))){
var state_76209__$1 = state_76209;
var statearr_76221_78346 = state_76209__$1;
(statearr_76221_78346[(2)] = null);

(statearr_76221_78346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76210 === (4))){
var inst_76171 = (state_76209[(7)]);
var inst_76171__$1 = (state_76209[(2)]);
var inst_76172 = (inst_76171__$1 == null);
var state_76209__$1 = (function (){var statearr_76222 = state_76209;
(statearr_76222[(7)] = inst_76171__$1);

return statearr_76222;
})();
if(cljs.core.truth_(inst_76172)){
var statearr_76224_78348 = state_76209__$1;
(statearr_76224_78348[(1)] = (5));

} else {
var statearr_76225_78349 = state_76209__$1;
(statearr_76225_78349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76210 === (15))){
var inst_76187 = (state_76209[(8)]);
var state_76209__$1 = state_76209;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_76209__$1,(18),to,inst_76187);
} else {
if((state_val_76210 === (21))){
var inst_76200 = (state_76209[(2)]);
var state_76209__$1 = state_76209;
var statearr_76227_78352 = state_76209__$1;
(statearr_76227_78352[(2)] = inst_76200);

(statearr_76227_78352[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76210 === (13))){
var inst_76202 = (state_76209[(2)]);
var state_76209__$1 = (function (){var statearr_76229 = state_76209;
(statearr_76229[(9)] = inst_76202);

return statearr_76229;
})();
var statearr_76232_78353 = state_76209__$1;
(statearr_76232_78353[(2)] = null);

(statearr_76232_78353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76210 === (6))){
var inst_76171 = (state_76209[(7)]);
var state_76209__$1 = state_76209;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76209__$1,(11),inst_76171);
} else {
if((state_val_76210 === (17))){
var inst_76195 = (state_76209[(2)]);
var state_76209__$1 = state_76209;
if(cljs.core.truth_(inst_76195)){
var statearr_76234_78356 = state_76209__$1;
(statearr_76234_78356[(1)] = (19));

} else {
var statearr_76235_78357 = state_76209__$1;
(statearr_76235_78357[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76210 === (3))){
var inst_76207 = (state_76209[(2)]);
var state_76209__$1 = state_76209;
return cljs.core.async.impl.ioc_helpers.return_chan(state_76209__$1,inst_76207);
} else {
if((state_val_76210 === (12))){
var inst_76182 = (state_76209[(10)]);
var state_76209__$1 = state_76209;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76209__$1,(14),inst_76182);
} else {
if((state_val_76210 === (2))){
var state_76209__$1 = state_76209;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76209__$1,(4),results);
} else {
if((state_val_76210 === (19))){
var state_76209__$1 = state_76209;
var statearr_76236_78358 = state_76209__$1;
(statearr_76236_78358[(2)] = null);

(statearr_76236_78358[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76210 === (11))){
var inst_76182 = (state_76209[(2)]);
var state_76209__$1 = (function (){var statearr_76237 = state_76209;
(statearr_76237[(10)] = inst_76182);

return statearr_76237;
})();
var statearr_76238_78359 = state_76209__$1;
(statearr_76238_78359[(2)] = null);

(statearr_76238_78359[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76210 === (9))){
var state_76209__$1 = state_76209;
var statearr_76239_78360 = state_76209__$1;
(statearr_76239_78360[(2)] = null);

(statearr_76239_78360[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76210 === (5))){
var state_76209__$1 = state_76209;
if(cljs.core.truth_(close_QMARK_)){
var statearr_76240_78361 = state_76209__$1;
(statearr_76240_78361[(1)] = (8));

} else {
var statearr_76241_78362 = state_76209__$1;
(statearr_76241_78362[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76210 === (14))){
var inst_76187 = (state_76209[(8)]);
var inst_76187__$1 = (state_76209[(2)]);
var inst_76188 = (inst_76187__$1 == null);
var inst_76189 = cljs.core.not(inst_76188);
var state_76209__$1 = (function (){var statearr_76242 = state_76209;
(statearr_76242[(8)] = inst_76187__$1);

return statearr_76242;
})();
if(inst_76189){
var statearr_76244_78363 = state_76209__$1;
(statearr_76244_78363[(1)] = (15));

} else {
var statearr_76247_78364 = state_76209__$1;
(statearr_76247_78364[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76210 === (16))){
var state_76209__$1 = state_76209;
var statearr_76248_78365 = state_76209__$1;
(statearr_76248_78365[(2)] = false);

(statearr_76248_78365[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76210 === (10))){
var inst_76179 = (state_76209[(2)]);
var state_76209__$1 = state_76209;
var statearr_76249_78366 = state_76209__$1;
(statearr_76249_78366[(2)] = inst_76179);

(statearr_76249_78366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76210 === (18))){
var inst_76192 = (state_76209[(2)]);
var state_76209__$1 = state_76209;
var statearr_76252_78367 = state_76209__$1;
(statearr_76252_78367[(2)] = inst_76192);

(statearr_76252_78367[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76210 === (8))){
var inst_76176 = cljs.core.async.close_BANG_(to);
var state_76209__$1 = state_76209;
var statearr_76253_78368 = state_76209__$1;
(statearr_76253_78368[(2)] = inst_76176);

(statearr_76253_78368[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__60141__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__60141__auto____0 = (function (){
var statearr_76254 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_76254[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__60141__auto__);

(statearr_76254[(1)] = (1));

return statearr_76254;
});
var cljs$core$async$pipeline_STAR__$_state_machine__60141__auto____1 = (function (state_76209){
while(true){
var ret_value__60142__auto__ = (function (){try{while(true){
var result__60143__auto__ = switch__60140__auto__(state_76209);
if(cljs.core.keyword_identical_QMARK_(result__60143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60143__auto__;
}
break;
}
}catch (e76255){var ex__60144__auto__ = e76255;
var statearr_76256_78371 = state_76209;
(statearr_76256_78371[(2)] = ex__60144__auto__);


if(cljs.core.seq((state_76209[(4)]))){
var statearr_76257_78372 = state_76209;
(statearr_76257_78372[(1)] = cljs.core.first((state_76209[(4)])));

} else {
throw ex__60144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78373 = state_76209;
state_76209 = G__78373;
continue;
} else {
return ret_value__60142__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__60141__auto__ = function(state_76209){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__60141__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__60141__auto____1.call(this,state_76209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__60141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__60141__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__60141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__60141__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__60141__auto__;
})()
})();
var state__60462__auto__ = (function (){var statearr_76258 = f__60461__auto__();
(statearr_76258[(6)] = c__60460__auto__);

return statearr_76258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60462__auto__);
}));

return c__60460__auto__;
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
var G__76267 = arguments.length;
switch (G__76267) {
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
var G__76279 = arguments.length;
switch (G__76279) {
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
var G__76293 = arguments.length;
switch (G__76293) {
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
var c__60460__auto___78379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60461__auto__ = (function (){var switch__60140__auto__ = (function (state_76324){
var state_val_76326 = (state_76324[(1)]);
if((state_val_76326 === (7))){
var inst_76319 = (state_76324[(2)]);
var state_76324__$1 = state_76324;
var statearr_76330_78380 = state_76324__$1;
(statearr_76330_78380[(2)] = inst_76319);

(statearr_76330_78380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76326 === (1))){
var state_76324__$1 = state_76324;
var statearr_76332_78381 = state_76324__$1;
(statearr_76332_78381[(2)] = null);

(statearr_76332_78381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76326 === (4))){
var inst_76299 = (state_76324[(7)]);
var inst_76299__$1 = (state_76324[(2)]);
var inst_76301 = (inst_76299__$1 == null);
var state_76324__$1 = (function (){var statearr_76334 = state_76324;
(statearr_76334[(7)] = inst_76299__$1);

return statearr_76334;
})();
if(cljs.core.truth_(inst_76301)){
var statearr_76335_78382 = state_76324__$1;
(statearr_76335_78382[(1)] = (5));

} else {
var statearr_76336_78383 = state_76324__$1;
(statearr_76336_78383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76326 === (13))){
var state_76324__$1 = state_76324;
var statearr_76337_78384 = state_76324__$1;
(statearr_76337_78384[(2)] = null);

(statearr_76337_78384[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76326 === (6))){
var inst_76299 = (state_76324[(7)]);
var inst_76306 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_76299) : p.call(null,inst_76299));
var state_76324__$1 = state_76324;
if(cljs.core.truth_(inst_76306)){
var statearr_76338_78387 = state_76324__$1;
(statearr_76338_78387[(1)] = (9));

} else {
var statearr_76339_78388 = state_76324__$1;
(statearr_76339_78388[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76326 === (3))){
var inst_76321 = (state_76324[(2)]);
var state_76324__$1 = state_76324;
return cljs.core.async.impl.ioc_helpers.return_chan(state_76324__$1,inst_76321);
} else {
if((state_val_76326 === (12))){
var state_76324__$1 = state_76324;
var statearr_76341_78389 = state_76324__$1;
(statearr_76341_78389[(2)] = null);

(statearr_76341_78389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76326 === (2))){
var state_76324__$1 = state_76324;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76324__$1,(4),ch);
} else {
if((state_val_76326 === (11))){
var inst_76299 = (state_76324[(7)]);
var inst_76310 = (state_76324[(2)]);
var state_76324__$1 = state_76324;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_76324__$1,(8),inst_76310,inst_76299);
} else {
if((state_val_76326 === (9))){
var state_76324__$1 = state_76324;
var statearr_76345_78392 = state_76324__$1;
(statearr_76345_78392[(2)] = tc);

(statearr_76345_78392[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76326 === (5))){
var inst_76303 = cljs.core.async.close_BANG_(tc);
var inst_76304 = cljs.core.async.close_BANG_(fc);
var state_76324__$1 = (function (){var statearr_76346 = state_76324;
(statearr_76346[(8)] = inst_76303);

return statearr_76346;
})();
var statearr_76347_78393 = state_76324__$1;
(statearr_76347_78393[(2)] = inst_76304);

(statearr_76347_78393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76326 === (14))){
var inst_76317 = (state_76324[(2)]);
var state_76324__$1 = state_76324;
var statearr_76348_78394 = state_76324__$1;
(statearr_76348_78394[(2)] = inst_76317);

(statearr_76348_78394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76326 === (10))){
var state_76324__$1 = state_76324;
var statearr_76349_78395 = state_76324__$1;
(statearr_76349_78395[(2)] = fc);

(statearr_76349_78395[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76326 === (8))){
var inst_76312 = (state_76324[(2)]);
var state_76324__$1 = state_76324;
if(cljs.core.truth_(inst_76312)){
var statearr_76350_78396 = state_76324__$1;
(statearr_76350_78396[(1)] = (12));

} else {
var statearr_76353_78398 = state_76324__$1;
(statearr_76353_78398[(1)] = (13));

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
var cljs$core$async$state_machine__60141__auto__ = null;
var cljs$core$async$state_machine__60141__auto____0 = (function (){
var statearr_76356 = [null,null,null,null,null,null,null,null,null];
(statearr_76356[(0)] = cljs$core$async$state_machine__60141__auto__);

(statearr_76356[(1)] = (1));

return statearr_76356;
});
var cljs$core$async$state_machine__60141__auto____1 = (function (state_76324){
while(true){
var ret_value__60142__auto__ = (function (){try{while(true){
var result__60143__auto__ = switch__60140__auto__(state_76324);
if(cljs.core.keyword_identical_QMARK_(result__60143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60143__auto__;
}
break;
}
}catch (e76359){var ex__60144__auto__ = e76359;
var statearr_76360_78403 = state_76324;
(statearr_76360_78403[(2)] = ex__60144__auto__);


if(cljs.core.seq((state_76324[(4)]))){
var statearr_76361_78405 = state_76324;
(statearr_76361_78405[(1)] = cljs.core.first((state_76324[(4)])));

} else {
throw ex__60144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78407 = state_76324;
state_76324 = G__78407;
continue;
} else {
return ret_value__60142__auto__;
}
break;
}
});
cljs$core$async$state_machine__60141__auto__ = function(state_76324){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60141__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60141__auto____1.call(this,state_76324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60141__auto____0;
cljs$core$async$state_machine__60141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60141__auto____1;
return cljs$core$async$state_machine__60141__auto__;
})()
})();
var state__60462__auto__ = (function (){var statearr_76366 = f__60461__auto__();
(statearr_76366[(6)] = c__60460__auto___78379);

return statearr_76366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60462__auto__);
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
var c__60460__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60461__auto__ = (function (){var switch__60140__auto__ = (function (state_76391){
var state_val_76396 = (state_76391[(1)]);
if((state_val_76396 === (7))){
var inst_76387 = (state_76391[(2)]);
var state_76391__$1 = state_76391;
var statearr_76404_78410 = state_76391__$1;
(statearr_76404_78410[(2)] = inst_76387);

(statearr_76404_78410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76396 === (1))){
var inst_76368 = init;
var inst_76370 = inst_76368;
var state_76391__$1 = (function (){var statearr_76411 = state_76391;
(statearr_76411[(7)] = inst_76370);

return statearr_76411;
})();
var statearr_76412_78411 = state_76391__$1;
(statearr_76412_78411[(2)] = null);

(statearr_76412_78411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76396 === (4))){
var inst_76373 = (state_76391[(8)]);
var inst_76373__$1 = (state_76391[(2)]);
var inst_76374 = (inst_76373__$1 == null);
var state_76391__$1 = (function (){var statearr_76421 = state_76391;
(statearr_76421[(8)] = inst_76373__$1);

return statearr_76421;
})();
if(cljs.core.truth_(inst_76374)){
var statearr_76423_78414 = state_76391__$1;
(statearr_76423_78414[(1)] = (5));

} else {
var statearr_76429_78416 = state_76391__$1;
(statearr_76429_78416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76396 === (6))){
var inst_76370 = (state_76391[(7)]);
var inst_76377 = (state_76391[(9)]);
var inst_76373 = (state_76391[(8)]);
var inst_76377__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_76370,inst_76373) : f.call(null,inst_76370,inst_76373));
var inst_76379 = cljs.core.reduced_QMARK_(inst_76377__$1);
var state_76391__$1 = (function (){var statearr_76433 = state_76391;
(statearr_76433[(9)] = inst_76377__$1);

return statearr_76433;
})();
if(inst_76379){
var statearr_76437_78417 = state_76391__$1;
(statearr_76437_78417[(1)] = (8));

} else {
var statearr_76442_78418 = state_76391__$1;
(statearr_76442_78418[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76396 === (3))){
var inst_76389 = (state_76391[(2)]);
var state_76391__$1 = state_76391;
return cljs.core.async.impl.ioc_helpers.return_chan(state_76391__$1,inst_76389);
} else {
if((state_val_76396 === (2))){
var state_76391__$1 = state_76391;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76391__$1,(4),ch);
} else {
if((state_val_76396 === (9))){
var inst_76377 = (state_76391[(9)]);
var inst_76370 = inst_76377;
var state_76391__$1 = (function (){var statearr_76455 = state_76391;
(statearr_76455[(7)] = inst_76370);

return statearr_76455;
})();
var statearr_76461_78420 = state_76391__$1;
(statearr_76461_78420[(2)] = null);

(statearr_76461_78420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76396 === (5))){
var inst_76370 = (state_76391[(7)]);
var state_76391__$1 = state_76391;
var statearr_76469_78421 = state_76391__$1;
(statearr_76469_78421[(2)] = inst_76370);

(statearr_76469_78421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76396 === (10))){
var inst_76385 = (state_76391[(2)]);
var state_76391__$1 = state_76391;
var statearr_76473_78422 = state_76391__$1;
(statearr_76473_78422[(2)] = inst_76385);

(statearr_76473_78422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76396 === (8))){
var inst_76377 = (state_76391[(9)]);
var inst_76381 = cljs.core.deref(inst_76377);
var state_76391__$1 = state_76391;
var statearr_76474_78423 = state_76391__$1;
(statearr_76474_78423[(2)] = inst_76381);

(statearr_76474_78423[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__60141__auto__ = null;
var cljs$core$async$reduce_$_state_machine__60141__auto____0 = (function (){
var statearr_76479 = [null,null,null,null,null,null,null,null,null,null];
(statearr_76479[(0)] = cljs$core$async$reduce_$_state_machine__60141__auto__);

(statearr_76479[(1)] = (1));

return statearr_76479;
});
var cljs$core$async$reduce_$_state_machine__60141__auto____1 = (function (state_76391){
while(true){
var ret_value__60142__auto__ = (function (){try{while(true){
var result__60143__auto__ = switch__60140__auto__(state_76391);
if(cljs.core.keyword_identical_QMARK_(result__60143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60143__auto__;
}
break;
}
}catch (e76480){var ex__60144__auto__ = e76480;
var statearr_76481_78426 = state_76391;
(statearr_76481_78426[(2)] = ex__60144__auto__);


if(cljs.core.seq((state_76391[(4)]))){
var statearr_76482_78427 = state_76391;
(statearr_76482_78427[(1)] = cljs.core.first((state_76391[(4)])));

} else {
throw ex__60144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78430 = state_76391;
state_76391 = G__78430;
continue;
} else {
return ret_value__60142__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__60141__auto__ = function(state_76391){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__60141__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__60141__auto____1.call(this,state_76391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__60141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__60141__auto____0;
cljs$core$async$reduce_$_state_machine__60141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__60141__auto____1;
return cljs$core$async$reduce_$_state_machine__60141__auto__;
})()
})();
var state__60462__auto__ = (function (){var statearr_76486 = f__60461__auto__();
(statearr_76486[(6)] = c__60460__auto__);

return statearr_76486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60462__auto__);
}));

return c__60460__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__60460__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60461__auto__ = (function (){var switch__60140__auto__ = (function (state_76492){
var state_val_76494 = (state_76492[(1)]);
if((state_val_76494 === (1))){
var inst_76487 = cljs.core.async.reduce(f__$1,init,ch);
var state_76492__$1 = state_76492;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76492__$1,(2),inst_76487);
} else {
if((state_val_76494 === (2))){
var inst_76489 = (state_76492[(2)]);
var inst_76490 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_76489) : f__$1.call(null,inst_76489));
var state_76492__$1 = state_76492;
return cljs.core.async.impl.ioc_helpers.return_chan(state_76492__$1,inst_76490);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__60141__auto__ = null;
var cljs$core$async$transduce_$_state_machine__60141__auto____0 = (function (){
var statearr_76499 = [null,null,null,null,null,null,null];
(statearr_76499[(0)] = cljs$core$async$transduce_$_state_machine__60141__auto__);

(statearr_76499[(1)] = (1));

return statearr_76499;
});
var cljs$core$async$transduce_$_state_machine__60141__auto____1 = (function (state_76492){
while(true){
var ret_value__60142__auto__ = (function (){try{while(true){
var result__60143__auto__ = switch__60140__auto__(state_76492);
if(cljs.core.keyword_identical_QMARK_(result__60143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60143__auto__;
}
break;
}
}catch (e76500){var ex__60144__auto__ = e76500;
var statearr_76504_78431 = state_76492;
(statearr_76504_78431[(2)] = ex__60144__auto__);


if(cljs.core.seq((state_76492[(4)]))){
var statearr_76505_78432 = state_76492;
(statearr_76505_78432[(1)] = cljs.core.first((state_76492[(4)])));

} else {
throw ex__60144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78433 = state_76492;
state_76492 = G__78433;
continue;
} else {
return ret_value__60142__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__60141__auto__ = function(state_76492){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__60141__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__60141__auto____1.call(this,state_76492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__60141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__60141__auto____0;
cljs$core$async$transduce_$_state_machine__60141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__60141__auto____1;
return cljs$core$async$transduce_$_state_machine__60141__auto__;
})()
})();
var state__60462__auto__ = (function (){var statearr_76506 = f__60461__auto__();
(statearr_76506[(6)] = c__60460__auto__);

return statearr_76506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60462__auto__);
}));

return c__60460__auto__;
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
var G__76551 = arguments.length;
switch (G__76551) {
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
var c__60460__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60461__auto__ = (function (){var switch__60140__auto__ = (function (state_76579){
var state_val_76580 = (state_76579[(1)]);
if((state_val_76580 === (7))){
var inst_76561 = (state_76579[(2)]);
var state_76579__$1 = state_76579;
var statearr_76584_78440 = state_76579__$1;
(statearr_76584_78440[(2)] = inst_76561);

(statearr_76584_78440[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76580 === (1))){
var inst_76554 = cljs.core.seq(coll);
var inst_76555 = inst_76554;
var state_76579__$1 = (function (){var statearr_76585 = state_76579;
(statearr_76585[(7)] = inst_76555);

return statearr_76585;
})();
var statearr_76586_78441 = state_76579__$1;
(statearr_76586_78441[(2)] = null);

(statearr_76586_78441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76580 === (4))){
var inst_76555 = (state_76579[(7)]);
var inst_76559 = cljs.core.first(inst_76555);
var state_76579__$1 = state_76579;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_76579__$1,(7),ch,inst_76559);
} else {
if((state_val_76580 === (13))){
var inst_76573 = (state_76579[(2)]);
var state_76579__$1 = state_76579;
var statearr_76587_78443 = state_76579__$1;
(statearr_76587_78443[(2)] = inst_76573);

(statearr_76587_78443[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76580 === (6))){
var inst_76564 = (state_76579[(2)]);
var state_76579__$1 = state_76579;
if(cljs.core.truth_(inst_76564)){
var statearr_76588_78444 = state_76579__$1;
(statearr_76588_78444[(1)] = (8));

} else {
var statearr_76589_78445 = state_76579__$1;
(statearr_76589_78445[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76580 === (3))){
var inst_76577 = (state_76579[(2)]);
var state_76579__$1 = state_76579;
return cljs.core.async.impl.ioc_helpers.return_chan(state_76579__$1,inst_76577);
} else {
if((state_val_76580 === (12))){
var state_76579__$1 = state_76579;
var statearr_76590_78446 = state_76579__$1;
(statearr_76590_78446[(2)] = null);

(statearr_76590_78446[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76580 === (2))){
var inst_76555 = (state_76579[(7)]);
var state_76579__$1 = state_76579;
if(cljs.core.truth_(inst_76555)){
var statearr_76593_78447 = state_76579__$1;
(statearr_76593_78447[(1)] = (4));

} else {
var statearr_76598_78448 = state_76579__$1;
(statearr_76598_78448[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76580 === (11))){
var inst_76570 = cljs.core.async.close_BANG_(ch);
var state_76579__$1 = state_76579;
var statearr_76601_78449 = state_76579__$1;
(statearr_76601_78449[(2)] = inst_76570);

(statearr_76601_78449[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76580 === (9))){
var state_76579__$1 = state_76579;
if(cljs.core.truth_(close_QMARK_)){
var statearr_76608_78450 = state_76579__$1;
(statearr_76608_78450[(1)] = (11));

} else {
var statearr_76611_78451 = state_76579__$1;
(statearr_76611_78451[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76580 === (5))){
var inst_76555 = (state_76579[(7)]);
var state_76579__$1 = state_76579;
var statearr_76617_78452 = state_76579__$1;
(statearr_76617_78452[(2)] = inst_76555);

(statearr_76617_78452[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76580 === (10))){
var inst_76575 = (state_76579[(2)]);
var state_76579__$1 = state_76579;
var statearr_76624_78453 = state_76579__$1;
(statearr_76624_78453[(2)] = inst_76575);

(statearr_76624_78453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76580 === (8))){
var inst_76555 = (state_76579[(7)]);
var inst_76566 = cljs.core.next(inst_76555);
var inst_76555__$1 = inst_76566;
var state_76579__$1 = (function (){var statearr_76626 = state_76579;
(statearr_76626[(7)] = inst_76555__$1);

return statearr_76626;
})();
var statearr_76628_78454 = state_76579__$1;
(statearr_76628_78454[(2)] = null);

(statearr_76628_78454[(1)] = (2));


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
var cljs$core$async$state_machine__60141__auto__ = null;
var cljs$core$async$state_machine__60141__auto____0 = (function (){
var statearr_76632 = [null,null,null,null,null,null,null,null];
(statearr_76632[(0)] = cljs$core$async$state_machine__60141__auto__);

(statearr_76632[(1)] = (1));

return statearr_76632;
});
var cljs$core$async$state_machine__60141__auto____1 = (function (state_76579){
while(true){
var ret_value__60142__auto__ = (function (){try{while(true){
var result__60143__auto__ = switch__60140__auto__(state_76579);
if(cljs.core.keyword_identical_QMARK_(result__60143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60143__auto__;
}
break;
}
}catch (e76633){var ex__60144__auto__ = e76633;
var statearr_76634_78456 = state_76579;
(statearr_76634_78456[(2)] = ex__60144__auto__);


if(cljs.core.seq((state_76579[(4)]))){
var statearr_76635_78457 = state_76579;
(statearr_76635_78457[(1)] = cljs.core.first((state_76579[(4)])));

} else {
throw ex__60144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78458 = state_76579;
state_76579 = G__78458;
continue;
} else {
return ret_value__60142__auto__;
}
break;
}
});
cljs$core$async$state_machine__60141__auto__ = function(state_76579){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60141__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60141__auto____1.call(this,state_76579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60141__auto____0;
cljs$core$async$state_machine__60141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60141__auto____1;
return cljs$core$async$state_machine__60141__auto__;
})()
})();
var state__60462__auto__ = (function (){var statearr_76638 = f__60461__auto__();
(statearr_76638[(6)] = c__60460__auto__);

return statearr_76638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60462__auto__);
}));

return c__60460__auto__;
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
var G__76675 = arguments.length;
switch (G__76675) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_78463 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_78463(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_78466 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_78466(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_78467 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_78467(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_78476 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_78476(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async76711 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async76711 = (function (ch,cs,meta76712){
this.ch = ch;
this.cs = cs;
this.meta76712 = meta76712;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async76711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76713,meta76712__$1){
var self__ = this;
var _76713__$1 = this;
return (new cljs.core.async.t_cljs$core$async76711(self__.ch,self__.cs,meta76712__$1));
}));

(cljs.core.async.t_cljs$core$async76711.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76713){
var self__ = this;
var _76713__$1 = this;
return self__.meta76712;
}));

(cljs.core.async.t_cljs$core$async76711.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async76711.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async76711.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async76711.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async76711.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async76711.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async76711.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta76712","meta76712",1223252910,null)], null);
}));

(cljs.core.async.t_cljs$core$async76711.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async76711.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async76711");

(cljs.core.async.t_cljs$core$async76711.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async76711");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async76711.
 */
cljs.core.async.__GT_t_cljs$core$async76711 = (function cljs$core$async$mult_$___GT_t_cljs$core$async76711(ch__$1,cs__$1,meta76712){
return (new cljs.core.async.t_cljs$core$async76711(ch__$1,cs__$1,meta76712));
});

}

return (new cljs.core.async.t_cljs$core$async76711(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__60460__auto___78485 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60461__auto__ = (function (){var switch__60140__auto__ = (function (state_76879){
var state_val_76881 = (state_76879[(1)]);
if((state_val_76881 === (7))){
var inst_76875 = (state_76879[(2)]);
var state_76879__$1 = state_76879;
var statearr_76883_78486 = state_76879__$1;
(statearr_76883_78486[(2)] = inst_76875);

(statearr_76883_78486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76881 === (20))){
var inst_76772 = (state_76879[(7)]);
var inst_76786 = cljs.core.first(inst_76772);
var inst_76787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_76786,(0),null);
var inst_76788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_76786,(1),null);
var state_76879__$1 = (function (){var statearr_76886 = state_76879;
(statearr_76886[(8)] = inst_76787);

return statearr_76886;
})();
if(cljs.core.truth_(inst_76788)){
var statearr_76887_78488 = state_76879__$1;
(statearr_76887_78488[(1)] = (22));

} else {
var statearr_76888_78489 = state_76879__$1;
(statearr_76888_78489[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76881 === (27))){
var inst_76816 = (state_76879[(9)]);
var inst_76826 = (state_76879[(10)]);
var inst_76818 = (state_76879[(11)]);
var inst_76739 = (state_76879[(12)]);
var inst_76826__$1 = cljs.core._nth(inst_76816,inst_76818);
var inst_76827 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_76826__$1,inst_76739,done);
var state_76879__$1 = (function (){var statearr_76893 = state_76879;
(statearr_76893[(10)] = inst_76826__$1);

return statearr_76893;
})();
if(cljs.core.truth_(inst_76827)){
var statearr_76894_78490 = state_76879__$1;
(statearr_76894_78490[(1)] = (30));

} else {
var statearr_76895_78491 = state_76879__$1;
(statearr_76895_78491[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76881 === (1))){
var state_76879__$1 = state_76879;
var statearr_76896_78495 = state_76879__$1;
(statearr_76896_78495[(2)] = null);

(statearr_76896_78495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76881 === (24))){
var inst_76772 = (state_76879[(7)]);
var inst_76793 = (state_76879[(2)]);
var inst_76794 = cljs.core.next(inst_76772);
var inst_76748 = inst_76794;
var inst_76749 = null;
var inst_76750 = (0);
var inst_76751 = (0);
var state_76879__$1 = (function (){var statearr_76897 = state_76879;
(statearr_76897[(13)] = inst_76749);

(statearr_76897[(14)] = inst_76750);

(statearr_76897[(15)] = inst_76748);

(statearr_76897[(16)] = inst_76793);

(statearr_76897[(17)] = inst_76751);

return statearr_76897;
})();
var statearr_76898_78499 = state_76879__$1;
(statearr_76898_78499[(2)] = null);

(statearr_76898_78499[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76881 === (39))){
var state_76879__$1 = state_76879;
var statearr_76903_78501 = state_76879__$1;
(statearr_76903_78501[(2)] = null);

(statearr_76903_78501[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76881 === (4))){
var inst_76739 = (state_76879[(12)]);
var inst_76739__$1 = (state_76879[(2)]);
var inst_76740 = (inst_76739__$1 == null);
var state_76879__$1 = (function (){var statearr_76905 = state_76879;
(statearr_76905[(12)] = inst_76739__$1);

return statearr_76905;
})();
if(cljs.core.truth_(inst_76740)){
var statearr_76906_78502 = state_76879__$1;
(statearr_76906_78502[(1)] = (5));

} else {
var statearr_76907_78503 = state_76879__$1;
(statearr_76907_78503[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76881 === (15))){
var inst_76749 = (state_76879[(13)]);
var inst_76750 = (state_76879[(14)]);
var inst_76748 = (state_76879[(15)]);
var inst_76751 = (state_76879[(17)]);
var inst_76767 = (state_76879[(2)]);
var inst_76768 = (inst_76751 + (1));
var tmp76900 = inst_76749;
var tmp76901 = inst_76750;
var tmp76902 = inst_76748;
var inst_76748__$1 = tmp76902;
var inst_76749__$1 = tmp76900;
var inst_76750__$1 = tmp76901;
var inst_76751__$1 = inst_76768;
var state_76879__$1 = (function (){var statearr_76910 = state_76879;
(statearr_76910[(13)] = inst_76749__$1);

(statearr_76910[(14)] = inst_76750__$1);

(statearr_76910[(15)] = inst_76748__$1);

(statearr_76910[(18)] = inst_76767);

(statearr_76910[(17)] = inst_76751__$1);

return statearr_76910;
})();
var statearr_76911_78509 = state_76879__$1;
(statearr_76911_78509[(2)] = null);

(statearr_76911_78509[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76881 === (21))){
var inst_76797 = (state_76879[(2)]);
var state_76879__$1 = state_76879;
var statearr_76916_78510 = state_76879__$1;
(statearr_76916_78510[(2)] = inst_76797);

(statearr_76916_78510[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76881 === (31))){
var inst_76826 = (state_76879[(10)]);
var inst_76832 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_76826);
var state_76879__$1 = state_76879;
var statearr_76918_78511 = state_76879__$1;
(statearr_76918_78511[(2)] = inst_76832);

(statearr_76918_78511[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76881 === (32))){
var inst_76816 = (state_76879[(9)]);
var inst_76815 = (state_76879[(19)]);
var inst_76817 = (state_76879[(20)]);
var inst_76818 = (state_76879[(11)]);
var inst_76834 = (state_76879[(2)]);
var inst_76835 = (inst_76818 + (1));
var tmp76912 = inst_76816;
var tmp76914 = inst_76815;
var tmp76915 = inst_76817;
var inst_76815__$1 = tmp76914;
var inst_76816__$1 = tmp76912;
var inst_76817__$1 = tmp76915;
var inst_76818__$1 = inst_76835;
var state_76879__$1 = (function (){var statearr_76923 = state_76879;
(statearr_76923[(9)] = inst_76816__$1);

(statearr_76923[(19)] = inst_76815__$1);

(statearr_76923[(20)] = inst_76817__$1);

(statearr_76923[(11)] = inst_76818__$1);

(statearr_76923[(21)] = inst_76834);

return statearr_76923;
})();
var statearr_76924_78516 = state_76879__$1;
(statearr_76924_78516[(2)] = null);

(statearr_76924_78516[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76881 === (40))){
var inst_76848 = (state_76879[(22)]);
var inst_76852 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_76848);
var state_76879__$1 = state_76879;
var statearr_76926_78521 = state_76879__$1;
(statearr_76926_78521[(2)] = inst_76852);

(statearr_76926_78521[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76881 === (33))){
var inst_76838 = (state_76879[(23)]);
var inst_76840 = cljs.core.chunked_seq_QMARK_(inst_76838);
var state_76879__$1 = state_76879;
if(inst_76840){
var statearr_76927_78525 = state_76879__$1;
(statearr_76927_78525[(1)] = (36));

} else {
var statearr_76928_78526 = state_76879__$1;
(statearr_76928_78526[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76881 === (13))){
var inst_76761 = (state_76879[(24)]);
var inst_76764 = cljs.core.async.close_BANG_(inst_76761);
var state_76879__$1 = state_76879;
var statearr_76929_78527 = state_76879__$1;
(statearr_76929_78527[(2)] = inst_76764);

(statearr_76929_78527[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76881 === (22))){
var inst_76787 = (state_76879[(8)]);
var inst_76790 = cljs.core.async.close_BANG_(inst_76787);
var state_76879__$1 = state_76879;
var statearr_76930_78531 = state_76879__$1;
(statearr_76930_78531[(2)] = inst_76790);

(statearr_76930_78531[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76881 === (36))){
var inst_76838 = (state_76879[(23)]);
var inst_76842 = cljs.core.chunk_first(inst_76838);
var inst_76843 = cljs.core.chunk_rest(inst_76838);
var inst_76844 = cljs.core.count(inst_76842);
var inst_76815 = inst_76843;
var inst_76816 = inst_76842;
var inst_76817 = inst_76844;
var inst_76818 = (0);
var state_76879__$1 = (function (){var statearr_76931 = state_76879;
(statearr_76931[(9)] = inst_76816);

(statearr_76931[(19)] = inst_76815);

(statearr_76931[(20)] = inst_76817);

(statearr_76931[(11)] = inst_76818);

return statearr_76931;
})();
var statearr_76933_78541 = state_76879__$1;
(statearr_76933_78541[(2)] = null);

(statearr_76933_78541[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76881 === (41))){
var inst_76838 = (state_76879[(23)]);
var inst_76854 = (state_76879[(2)]);
var inst_76855 = cljs.core.next(inst_76838);
var inst_76815 = inst_76855;
var inst_76816 = null;
var inst_76817 = (0);
var inst_76818 = (0);
var state_76879__$1 = (function (){var statearr_76938 = state_76879;
(statearr_76938[(9)] = inst_76816);

(statearr_76938[(25)] = inst_76854);

(statearr_76938[(19)] = inst_76815);

(statearr_76938[(20)] = inst_76817);

(statearr_76938[(11)] = inst_76818);

return statearr_76938;
})();
var statearr_76940_78542 = state_76879__$1;
(statearr_76940_78542[(2)] = null);

(statearr_76940_78542[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76881 === (43))){
var state_76879__$1 = state_76879;
var statearr_76941_78546 = state_76879__$1;
(statearr_76941_78546[(2)] = null);

(statearr_76941_78546[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76881 === (29))){
var inst_76863 = (state_76879[(2)]);
var state_76879__$1 = state_76879;
var statearr_76942_78549 = state_76879__$1;
(statearr_76942_78549[(2)] = inst_76863);

(statearr_76942_78549[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76881 === (44))){
var inst_76872 = (state_76879[(2)]);
var state_76879__$1 = (function (){var statearr_76943 = state_76879;
(statearr_76943[(26)] = inst_76872);

return statearr_76943;
})();
var statearr_76944_78551 = state_76879__$1;
(statearr_76944_78551[(2)] = null);

(statearr_76944_78551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76881 === (6))){
var inst_76807 = (state_76879[(27)]);
var inst_76806 = cljs.core.deref(cs);
var inst_76807__$1 = cljs.core.keys(inst_76806);
var inst_76808 = cljs.core.count(inst_76807__$1);
var inst_76809 = cljs.core.reset_BANG_(dctr,inst_76808);
var inst_76814 = cljs.core.seq(inst_76807__$1);
var inst_76815 = inst_76814;
var inst_76816 = null;
var inst_76817 = (0);
var inst_76818 = (0);
var state_76879__$1 = (function (){var statearr_76945 = state_76879;
(statearr_76945[(9)] = inst_76816);

(statearr_76945[(19)] = inst_76815);

(statearr_76945[(20)] = inst_76817);

(statearr_76945[(27)] = inst_76807__$1);

(statearr_76945[(28)] = inst_76809);

(statearr_76945[(11)] = inst_76818);

return statearr_76945;
})();
var statearr_76946_78553 = state_76879__$1;
(statearr_76946_78553[(2)] = null);

(statearr_76946_78553[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76881 === (28))){
var inst_76838 = (state_76879[(23)]);
var inst_76815 = (state_76879[(19)]);
var inst_76838__$1 = cljs.core.seq(inst_76815);
var state_76879__$1 = (function (){var statearr_76947 = state_76879;
(statearr_76947[(23)] = inst_76838__$1);

return statearr_76947;
})();
if(inst_76838__$1){
var statearr_76948_78554 = state_76879__$1;
(statearr_76948_78554[(1)] = (33));

} else {
var statearr_76949_78555 = state_76879__$1;
(statearr_76949_78555[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76881 === (25))){
var inst_76817 = (state_76879[(20)]);
var inst_76818 = (state_76879[(11)]);
var inst_76822 = (inst_76818 < inst_76817);
var inst_76823 = inst_76822;
var state_76879__$1 = state_76879;
if(cljs.core.truth_(inst_76823)){
var statearr_76950_78557 = state_76879__$1;
(statearr_76950_78557[(1)] = (27));

} else {
var statearr_76951_78558 = state_76879__$1;
(statearr_76951_78558[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76881 === (34))){
var state_76879__$1 = state_76879;
var statearr_76952_78559 = state_76879__$1;
(statearr_76952_78559[(2)] = null);

(statearr_76952_78559[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76881 === (17))){
var state_76879__$1 = state_76879;
var statearr_76953_78560 = state_76879__$1;
(statearr_76953_78560[(2)] = null);

(statearr_76953_78560[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76881 === (3))){
var inst_76877 = (state_76879[(2)]);
var state_76879__$1 = state_76879;
return cljs.core.async.impl.ioc_helpers.return_chan(state_76879__$1,inst_76877);
} else {
if((state_val_76881 === (12))){
var inst_76802 = (state_76879[(2)]);
var state_76879__$1 = state_76879;
var statearr_76954_78561 = state_76879__$1;
(statearr_76954_78561[(2)] = inst_76802);

(statearr_76954_78561[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76881 === (2))){
var state_76879__$1 = state_76879;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76879__$1,(4),ch);
} else {
if((state_val_76881 === (23))){
var state_76879__$1 = state_76879;
var statearr_76958_78566 = state_76879__$1;
(statearr_76958_78566[(2)] = null);

(statearr_76958_78566[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76881 === (35))){
var inst_76861 = (state_76879[(2)]);
var state_76879__$1 = state_76879;
var statearr_76959_78567 = state_76879__$1;
(statearr_76959_78567[(2)] = inst_76861);

(statearr_76959_78567[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76881 === (19))){
var inst_76772 = (state_76879[(7)]);
var inst_76778 = cljs.core.chunk_first(inst_76772);
var inst_76779 = cljs.core.chunk_rest(inst_76772);
var inst_76780 = cljs.core.count(inst_76778);
var inst_76748 = inst_76779;
var inst_76749 = inst_76778;
var inst_76750 = inst_76780;
var inst_76751 = (0);
var state_76879__$1 = (function (){var statearr_76970 = state_76879;
(statearr_76970[(13)] = inst_76749);

(statearr_76970[(14)] = inst_76750);

(statearr_76970[(15)] = inst_76748);

(statearr_76970[(17)] = inst_76751);

return statearr_76970;
})();
var statearr_76971_78575 = state_76879__$1;
(statearr_76971_78575[(2)] = null);

(statearr_76971_78575[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76881 === (11))){
var inst_76748 = (state_76879[(15)]);
var inst_76772 = (state_76879[(7)]);
var inst_76772__$1 = cljs.core.seq(inst_76748);
var state_76879__$1 = (function (){var statearr_76972 = state_76879;
(statearr_76972[(7)] = inst_76772__$1);

return statearr_76972;
})();
if(inst_76772__$1){
var statearr_76973_78576 = state_76879__$1;
(statearr_76973_78576[(1)] = (16));

} else {
var statearr_76974_78577 = state_76879__$1;
(statearr_76974_78577[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76881 === (9))){
var inst_76804 = (state_76879[(2)]);
var state_76879__$1 = state_76879;
var statearr_76975_78578 = state_76879__$1;
(statearr_76975_78578[(2)] = inst_76804);

(statearr_76975_78578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76881 === (5))){
var inst_76746 = cljs.core.deref(cs);
var inst_76747 = cljs.core.seq(inst_76746);
var inst_76748 = inst_76747;
var inst_76749 = null;
var inst_76750 = (0);
var inst_76751 = (0);
var state_76879__$1 = (function (){var statearr_76976 = state_76879;
(statearr_76976[(13)] = inst_76749);

(statearr_76976[(14)] = inst_76750);

(statearr_76976[(15)] = inst_76748);

(statearr_76976[(17)] = inst_76751);

return statearr_76976;
})();
var statearr_76977_78579 = state_76879__$1;
(statearr_76977_78579[(2)] = null);

(statearr_76977_78579[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76881 === (14))){
var state_76879__$1 = state_76879;
var statearr_76978_78581 = state_76879__$1;
(statearr_76978_78581[(2)] = null);

(statearr_76978_78581[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76881 === (45))){
var inst_76869 = (state_76879[(2)]);
var state_76879__$1 = state_76879;
var statearr_76979_78583 = state_76879__$1;
(statearr_76979_78583[(2)] = inst_76869);

(statearr_76979_78583[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76881 === (26))){
var inst_76807 = (state_76879[(27)]);
var inst_76865 = (state_76879[(2)]);
var inst_76866 = cljs.core.seq(inst_76807);
var state_76879__$1 = (function (){var statearr_76980 = state_76879;
(statearr_76980[(29)] = inst_76865);

return statearr_76980;
})();
if(inst_76866){
var statearr_76981_78588 = state_76879__$1;
(statearr_76981_78588[(1)] = (42));

} else {
var statearr_76982_78592 = state_76879__$1;
(statearr_76982_78592[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76881 === (16))){
var inst_76772 = (state_76879[(7)]);
var inst_76775 = cljs.core.chunked_seq_QMARK_(inst_76772);
var state_76879__$1 = state_76879;
if(inst_76775){
var statearr_76983_78600 = state_76879__$1;
(statearr_76983_78600[(1)] = (19));

} else {
var statearr_76984_78602 = state_76879__$1;
(statearr_76984_78602[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76881 === (38))){
var inst_76858 = (state_76879[(2)]);
var state_76879__$1 = state_76879;
var statearr_76985_78605 = state_76879__$1;
(statearr_76985_78605[(2)] = inst_76858);

(statearr_76985_78605[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76881 === (30))){
var state_76879__$1 = state_76879;
var statearr_76986_78610 = state_76879__$1;
(statearr_76986_78610[(2)] = null);

(statearr_76986_78610[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76881 === (10))){
var inst_76749 = (state_76879[(13)]);
var inst_76751 = (state_76879[(17)]);
var inst_76760 = cljs.core._nth(inst_76749,inst_76751);
var inst_76761 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_76760,(0),null);
var inst_76762 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_76760,(1),null);
var state_76879__$1 = (function (){var statearr_76988 = state_76879;
(statearr_76988[(24)] = inst_76761);

return statearr_76988;
})();
if(cljs.core.truth_(inst_76762)){
var statearr_76990_78612 = state_76879__$1;
(statearr_76990_78612[(1)] = (13));

} else {
var statearr_76991_78613 = state_76879__$1;
(statearr_76991_78613[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76881 === (18))){
var inst_76800 = (state_76879[(2)]);
var state_76879__$1 = state_76879;
var statearr_76992_78615 = state_76879__$1;
(statearr_76992_78615[(2)] = inst_76800);

(statearr_76992_78615[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76881 === (42))){
var state_76879__$1 = state_76879;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76879__$1,(45),dchan);
} else {
if((state_val_76881 === (37))){
var inst_76838 = (state_76879[(23)]);
var inst_76848 = (state_76879[(22)]);
var inst_76739 = (state_76879[(12)]);
var inst_76848__$1 = cljs.core.first(inst_76838);
var inst_76849 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_76848__$1,inst_76739,done);
var state_76879__$1 = (function (){var statearr_76993 = state_76879;
(statearr_76993[(22)] = inst_76848__$1);

return statearr_76993;
})();
if(cljs.core.truth_(inst_76849)){
var statearr_76994_78624 = state_76879__$1;
(statearr_76994_78624[(1)] = (39));

} else {
var statearr_76995_78625 = state_76879__$1;
(statearr_76995_78625[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76881 === (8))){
var inst_76750 = (state_76879[(14)]);
var inst_76751 = (state_76879[(17)]);
var inst_76753 = (inst_76751 < inst_76750);
var inst_76754 = inst_76753;
var state_76879__$1 = state_76879;
if(cljs.core.truth_(inst_76754)){
var statearr_76996_78626 = state_76879__$1;
(statearr_76996_78626[(1)] = (10));

} else {
var statearr_76998_78627 = state_76879__$1;
(statearr_76998_78627[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__60141__auto__ = null;
var cljs$core$async$mult_$_state_machine__60141__auto____0 = (function (){
var statearr_76999 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_76999[(0)] = cljs$core$async$mult_$_state_machine__60141__auto__);

(statearr_76999[(1)] = (1));

return statearr_76999;
});
var cljs$core$async$mult_$_state_machine__60141__auto____1 = (function (state_76879){
while(true){
var ret_value__60142__auto__ = (function (){try{while(true){
var result__60143__auto__ = switch__60140__auto__(state_76879);
if(cljs.core.keyword_identical_QMARK_(result__60143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60143__auto__;
}
break;
}
}catch (e77000){var ex__60144__auto__ = e77000;
var statearr_77001_78638 = state_76879;
(statearr_77001_78638[(2)] = ex__60144__auto__);


if(cljs.core.seq((state_76879[(4)]))){
var statearr_77002_78639 = state_76879;
(statearr_77002_78639[(1)] = cljs.core.first((state_76879[(4)])));

} else {
throw ex__60144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78641 = state_76879;
state_76879 = G__78641;
continue;
} else {
return ret_value__60142__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__60141__auto__ = function(state_76879){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__60141__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__60141__auto____1.call(this,state_76879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__60141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__60141__auto____0;
cljs$core$async$mult_$_state_machine__60141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__60141__auto____1;
return cljs$core$async$mult_$_state_machine__60141__auto__;
})()
})();
var state__60462__auto__ = (function (){var statearr_77003 = f__60461__auto__();
(statearr_77003[(6)] = c__60460__auto___78485);

return statearr_77003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60462__auto__);
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
var G__77005 = arguments.length;
switch (G__77005) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_78647 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_78647(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_78653 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_78653(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_78658 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_78658(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_78662 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_78662(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_78668 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_78668(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___78674 = arguments.length;
var i__4737__auto___78675 = (0);
while(true){
if((i__4737__auto___78675 < len__4736__auto___78674)){
args__4742__auto__.push((arguments[i__4737__auto___78675]));

var G__78677 = (i__4737__auto___78675 + (1));
i__4737__auto___78675 = G__78677;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__77029){
var map__77030 = p__77029;
var map__77030__$1 = (((((!((map__77030 == null))))?(((((map__77030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77030):map__77030);
var opts = map__77030__$1;
var statearr_77033_78682 = state;
(statearr_77033_78682[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_77034_78684 = state;
(statearr_77034_78684[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_77036_78687 = state;
(statearr_77036_78687[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq77025){
var G__77026 = cljs.core.first(seq77025);
var seq77025__$1 = cljs.core.next(seq77025);
var G__77027 = cljs.core.first(seq77025__$1);
var seq77025__$2 = cljs.core.next(seq77025__$1);
var G__77028 = cljs.core.first(seq77025__$2);
var seq77025__$3 = cljs.core.next(seq77025__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77026,G__77027,G__77028,seq77025__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async77048 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async77048 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta77049){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta77049 = meta77049;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async77048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77050,meta77049__$1){
var self__ = this;
var _77050__$1 = this;
return (new cljs.core.async.t_cljs$core$async77048(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta77049__$1));
}));

(cljs.core.async.t_cljs$core$async77048.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77050){
var self__ = this;
var _77050__$1 = this;
return self__.meta77049;
}));

(cljs.core.async.t_cljs$core$async77048.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async77048.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async77048.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async77048.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async77048.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async77048.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async77048.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async77048.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async77048.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta77049","meta77049",325248546,null)], null);
}));

(cljs.core.async.t_cljs$core$async77048.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async77048.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async77048");

(cljs.core.async.t_cljs$core$async77048.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async77048");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async77048.
 */
cljs.core.async.__GT_t_cljs$core$async77048 = (function cljs$core$async$mix_$___GT_t_cljs$core$async77048(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta77049){
return (new cljs.core.async.t_cljs$core$async77048(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta77049));
});

}

return (new cljs.core.async.t_cljs$core$async77048(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__60460__auto___78721 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60461__auto__ = (function (){var switch__60140__auto__ = (function (state_77185){
var state_val_77186 = (state_77185[(1)]);
if((state_val_77186 === (7))){
var inst_77085 = (state_77185[(2)]);
var state_77185__$1 = state_77185;
var statearr_77187_78725 = state_77185__$1;
(statearr_77187_78725[(2)] = inst_77085);

(statearr_77187_78725[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77186 === (20))){
var inst_77097 = (state_77185[(7)]);
var state_77185__$1 = state_77185;
var statearr_77188_78726 = state_77185__$1;
(statearr_77188_78726[(2)] = inst_77097);

(statearr_77188_78726[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77186 === (27))){
var state_77185__$1 = state_77185;
var statearr_77189_78727 = state_77185__$1;
(statearr_77189_78727[(2)] = null);

(statearr_77189_78727[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77186 === (1))){
var inst_77072 = (state_77185[(8)]);
var inst_77072__$1 = calc_state();
var inst_77074 = (inst_77072__$1 == null);
var inst_77075 = cljs.core.not(inst_77074);
var state_77185__$1 = (function (){var statearr_77195 = state_77185;
(statearr_77195[(8)] = inst_77072__$1);

return statearr_77195;
})();
if(inst_77075){
var statearr_77196_78729 = state_77185__$1;
(statearr_77196_78729[(1)] = (2));

} else {
var statearr_77201_78731 = state_77185__$1;
(statearr_77201_78731[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77186 === (24))){
var inst_77121 = (state_77185[(9)]);
var inst_77150 = (state_77185[(10)]);
var inst_77132 = (state_77185[(11)]);
var inst_77150__$1 = (inst_77121.cljs$core$IFn$_invoke$arity$1 ? inst_77121.cljs$core$IFn$_invoke$arity$1(inst_77132) : inst_77121.call(null,inst_77132));
var state_77185__$1 = (function (){var statearr_77207 = state_77185;
(statearr_77207[(10)] = inst_77150__$1);

return statearr_77207;
})();
if(cljs.core.truth_(inst_77150__$1)){
var statearr_77208_78739 = state_77185__$1;
(statearr_77208_78739[(1)] = (29));

} else {
var statearr_77209_78740 = state_77185__$1;
(statearr_77209_78740[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77186 === (4))){
var inst_77088 = (state_77185[(2)]);
var state_77185__$1 = state_77185;
if(cljs.core.truth_(inst_77088)){
var statearr_77210_78744 = state_77185__$1;
(statearr_77210_78744[(1)] = (8));

} else {
var statearr_77211_78745 = state_77185__$1;
(statearr_77211_78745[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77186 === (15))){
var inst_77115 = (state_77185[(2)]);
var state_77185__$1 = state_77185;
if(cljs.core.truth_(inst_77115)){
var statearr_77212_78748 = state_77185__$1;
(statearr_77212_78748[(1)] = (19));

} else {
var statearr_77214_78749 = state_77185__$1;
(statearr_77214_78749[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77186 === (21))){
var inst_77120 = (state_77185[(12)]);
var inst_77120__$1 = (state_77185[(2)]);
var inst_77121 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_77120__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_77122 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_77120__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_77125 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_77120__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_77185__$1 = (function (){var statearr_77216 = state_77185;
(statearr_77216[(12)] = inst_77120__$1);

(statearr_77216[(9)] = inst_77121);

(statearr_77216[(13)] = inst_77122);

return statearr_77216;
})();
return cljs.core.async.ioc_alts_BANG_(state_77185__$1,(22),inst_77125);
} else {
if((state_val_77186 === (31))){
var inst_77163 = (state_77185[(2)]);
var state_77185__$1 = state_77185;
if(cljs.core.truth_(inst_77163)){
var statearr_77217_78755 = state_77185__$1;
(statearr_77217_78755[(1)] = (32));

} else {
var statearr_77218_78756 = state_77185__$1;
(statearr_77218_78756[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77186 === (32))){
var inst_77131 = (state_77185[(14)]);
var state_77185__$1 = state_77185;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_77185__$1,(35),out,inst_77131);
} else {
if((state_val_77186 === (33))){
var inst_77120 = (state_77185[(12)]);
var inst_77097 = inst_77120;
var state_77185__$1 = (function (){var statearr_77219 = state_77185;
(statearr_77219[(7)] = inst_77097);

return statearr_77219;
})();
var statearr_77220_78757 = state_77185__$1;
(statearr_77220_78757[(2)] = null);

(statearr_77220_78757[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77186 === (13))){
var inst_77097 = (state_77185[(7)]);
var inst_77104 = inst_77097.cljs$lang$protocol_mask$partition0$;
var inst_77105 = (inst_77104 & (64));
var inst_77106 = inst_77097.cljs$core$ISeq$;
var inst_77107 = (cljs.core.PROTOCOL_SENTINEL === inst_77106);
var inst_77108 = ((inst_77105) || (inst_77107));
var state_77185__$1 = state_77185;
if(cljs.core.truth_(inst_77108)){
var statearr_77223_78760 = state_77185__$1;
(statearr_77223_78760[(1)] = (16));

} else {
var statearr_77224_78761 = state_77185__$1;
(statearr_77224_78761[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77186 === (22))){
var inst_77131 = (state_77185[(14)]);
var inst_77132 = (state_77185[(11)]);
var inst_77130 = (state_77185[(2)]);
var inst_77131__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_77130,(0),null);
var inst_77132__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_77130,(1),null);
var inst_77134 = (inst_77131__$1 == null);
var inst_77137 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_77132__$1,change);
var inst_77138 = ((inst_77134) || (inst_77137));
var state_77185__$1 = (function (){var statearr_77229 = state_77185;
(statearr_77229[(14)] = inst_77131__$1);

(statearr_77229[(11)] = inst_77132__$1);

return statearr_77229;
})();
if(cljs.core.truth_(inst_77138)){
var statearr_77230_78767 = state_77185__$1;
(statearr_77230_78767[(1)] = (23));

} else {
var statearr_77231_78768 = state_77185__$1;
(statearr_77231_78768[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77186 === (36))){
var inst_77120 = (state_77185[(12)]);
var inst_77097 = inst_77120;
var state_77185__$1 = (function (){var statearr_77232 = state_77185;
(statearr_77232[(7)] = inst_77097);

return statearr_77232;
})();
var statearr_77233_78772 = state_77185__$1;
(statearr_77233_78772[(2)] = null);

(statearr_77233_78772[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77186 === (29))){
var inst_77150 = (state_77185[(10)]);
var state_77185__$1 = state_77185;
var statearr_77234_78773 = state_77185__$1;
(statearr_77234_78773[(2)] = inst_77150);

(statearr_77234_78773[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77186 === (6))){
var state_77185__$1 = state_77185;
var statearr_77236_78774 = state_77185__$1;
(statearr_77236_78774[(2)] = false);

(statearr_77236_78774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77186 === (28))){
var inst_77146 = (state_77185[(2)]);
var inst_77147 = calc_state();
var inst_77097 = inst_77147;
var state_77185__$1 = (function (){var statearr_77237 = state_77185;
(statearr_77237[(15)] = inst_77146);

(statearr_77237[(7)] = inst_77097);

return statearr_77237;
})();
var statearr_77238_78779 = state_77185__$1;
(statearr_77238_78779[(2)] = null);

(statearr_77238_78779[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77186 === (25))){
var inst_77179 = (state_77185[(2)]);
var state_77185__$1 = state_77185;
var statearr_77240_78782 = state_77185__$1;
(statearr_77240_78782[(2)] = inst_77179);

(statearr_77240_78782[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77186 === (34))){
var inst_77177 = (state_77185[(2)]);
var state_77185__$1 = state_77185;
var statearr_77244_78783 = state_77185__$1;
(statearr_77244_78783[(2)] = inst_77177);

(statearr_77244_78783[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77186 === (17))){
var state_77185__$1 = state_77185;
var statearr_77245_78787 = state_77185__$1;
(statearr_77245_78787[(2)] = false);

(statearr_77245_78787[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77186 === (3))){
var state_77185__$1 = state_77185;
var statearr_77247_78789 = state_77185__$1;
(statearr_77247_78789[(2)] = false);

(statearr_77247_78789[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77186 === (12))){
var inst_77181 = (state_77185[(2)]);
var state_77185__$1 = state_77185;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77185__$1,inst_77181);
} else {
if((state_val_77186 === (2))){
var inst_77072 = (state_77185[(8)]);
var inst_77077 = inst_77072.cljs$lang$protocol_mask$partition0$;
var inst_77078 = (inst_77077 & (64));
var inst_77079 = inst_77072.cljs$core$ISeq$;
var inst_77080 = (cljs.core.PROTOCOL_SENTINEL === inst_77079);
var inst_77081 = ((inst_77078) || (inst_77080));
var state_77185__$1 = state_77185;
if(cljs.core.truth_(inst_77081)){
var statearr_77256_78794 = state_77185__$1;
(statearr_77256_78794[(1)] = (5));

} else {
var statearr_77258_78796 = state_77185__$1;
(statearr_77258_78796[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77186 === (23))){
var inst_77131 = (state_77185[(14)]);
var inst_77140 = (inst_77131 == null);
var state_77185__$1 = state_77185;
if(cljs.core.truth_(inst_77140)){
var statearr_77262_78800 = state_77185__$1;
(statearr_77262_78800[(1)] = (26));

} else {
var statearr_77263_78801 = state_77185__$1;
(statearr_77263_78801[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77186 === (35))){
var inst_77167 = (state_77185[(2)]);
var state_77185__$1 = state_77185;
if(cljs.core.truth_(inst_77167)){
var statearr_77264_78802 = state_77185__$1;
(statearr_77264_78802[(1)] = (36));

} else {
var statearr_77265_78805 = state_77185__$1;
(statearr_77265_78805[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77186 === (19))){
var inst_77097 = (state_77185[(7)]);
var inst_77117 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_77097);
var state_77185__$1 = state_77185;
var statearr_77266_78811 = state_77185__$1;
(statearr_77266_78811[(2)] = inst_77117);

(statearr_77266_78811[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77186 === (11))){
var inst_77097 = (state_77185[(7)]);
var inst_77101 = (inst_77097 == null);
var inst_77102 = cljs.core.not(inst_77101);
var state_77185__$1 = state_77185;
if(inst_77102){
var statearr_77271_78813 = state_77185__$1;
(statearr_77271_78813[(1)] = (13));

} else {
var statearr_77272_78814 = state_77185__$1;
(statearr_77272_78814[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77186 === (9))){
var inst_77072 = (state_77185[(8)]);
var state_77185__$1 = state_77185;
var statearr_77276_78818 = state_77185__$1;
(statearr_77276_78818[(2)] = inst_77072);

(statearr_77276_78818[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77186 === (5))){
var state_77185__$1 = state_77185;
var statearr_77277_78825 = state_77185__$1;
(statearr_77277_78825[(2)] = true);

(statearr_77277_78825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77186 === (14))){
var state_77185__$1 = state_77185;
var statearr_77278_78827 = state_77185__$1;
(statearr_77278_78827[(2)] = false);

(statearr_77278_78827[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77186 === (26))){
var inst_77132 = (state_77185[(11)]);
var inst_77142 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_77132);
var state_77185__$1 = state_77185;
var statearr_77283_78828 = state_77185__$1;
(statearr_77283_78828[(2)] = inst_77142);

(statearr_77283_78828[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77186 === (16))){
var state_77185__$1 = state_77185;
var statearr_77284_78829 = state_77185__$1;
(statearr_77284_78829[(2)] = true);

(statearr_77284_78829[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77186 === (38))){
var inst_77173 = (state_77185[(2)]);
var state_77185__$1 = state_77185;
var statearr_77285_78830 = state_77185__$1;
(statearr_77285_78830[(2)] = inst_77173);

(statearr_77285_78830[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77186 === (30))){
var inst_77121 = (state_77185[(9)]);
var inst_77132 = (state_77185[(11)]);
var inst_77122 = (state_77185[(13)]);
var inst_77158 = cljs.core.empty_QMARK_(inst_77121);
var inst_77159 = (inst_77122.cljs$core$IFn$_invoke$arity$1 ? inst_77122.cljs$core$IFn$_invoke$arity$1(inst_77132) : inst_77122.call(null,inst_77132));
var inst_77160 = cljs.core.not(inst_77159);
var inst_77161 = ((inst_77158) && (inst_77160));
var state_77185__$1 = state_77185;
var statearr_77286_78835 = state_77185__$1;
(statearr_77286_78835[(2)] = inst_77161);

(statearr_77286_78835[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77186 === (10))){
var inst_77072 = (state_77185[(8)]);
var inst_77093 = (state_77185[(2)]);
var inst_77094 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_77093,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_77095 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_77093,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_77096 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_77093,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_77097 = inst_77072;
var state_77185__$1 = (function (){var statearr_77289 = state_77185;
(statearr_77289[(16)] = inst_77096);

(statearr_77289[(17)] = inst_77094);

(statearr_77289[(18)] = inst_77095);

(statearr_77289[(7)] = inst_77097);

return statearr_77289;
})();
var statearr_77290_78839 = state_77185__$1;
(statearr_77290_78839[(2)] = null);

(statearr_77290_78839[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77186 === (18))){
var inst_77112 = (state_77185[(2)]);
var state_77185__$1 = state_77185;
var statearr_77291_78840 = state_77185__$1;
(statearr_77291_78840[(2)] = inst_77112);

(statearr_77291_78840[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77186 === (37))){
var state_77185__$1 = state_77185;
var statearr_77292_78841 = state_77185__$1;
(statearr_77292_78841[(2)] = null);

(statearr_77292_78841[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77186 === (8))){
var inst_77072 = (state_77185[(8)]);
var inst_77090 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_77072);
var state_77185__$1 = state_77185;
var statearr_77293_78842 = state_77185__$1;
(statearr_77293_78842[(2)] = inst_77090);

(statearr_77293_78842[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__60141__auto__ = null;
var cljs$core$async$mix_$_state_machine__60141__auto____0 = (function (){
var statearr_77297 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_77297[(0)] = cljs$core$async$mix_$_state_machine__60141__auto__);

(statearr_77297[(1)] = (1));

return statearr_77297;
});
var cljs$core$async$mix_$_state_machine__60141__auto____1 = (function (state_77185){
while(true){
var ret_value__60142__auto__ = (function (){try{while(true){
var result__60143__auto__ = switch__60140__auto__(state_77185);
if(cljs.core.keyword_identical_QMARK_(result__60143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60143__auto__;
}
break;
}
}catch (e77303){var ex__60144__auto__ = e77303;
var statearr_77304_78847 = state_77185;
(statearr_77304_78847[(2)] = ex__60144__auto__);


if(cljs.core.seq((state_77185[(4)]))){
var statearr_77305_78850 = state_77185;
(statearr_77305_78850[(1)] = cljs.core.first((state_77185[(4)])));

} else {
throw ex__60144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78853 = state_77185;
state_77185 = G__78853;
continue;
} else {
return ret_value__60142__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__60141__auto__ = function(state_77185){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__60141__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__60141__auto____1.call(this,state_77185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__60141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__60141__auto____0;
cljs$core$async$mix_$_state_machine__60141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__60141__auto____1;
return cljs$core$async$mix_$_state_machine__60141__auto__;
})()
})();
var state__60462__auto__ = (function (){var statearr_77306 = f__60461__auto__();
(statearr_77306[(6)] = c__60460__auto___78721);

return statearr_77306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60462__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_78858 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_78858(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_78859 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_78859(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_78863 = (function() {
var G__78864 = null;
var G__78864__1 = (function (p){
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
var G__78864__2 = (function (p,v){
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
G__78864 = function(p,v){
switch(arguments.length){
case 1:
return G__78864__1.call(this,p);
case 2:
return G__78864__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__78864.cljs$core$IFn$_invoke$arity$1 = G__78864__1;
G__78864.cljs$core$IFn$_invoke$arity$2 = G__78864__2;
return G__78864;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__77335 = arguments.length;
switch (G__77335) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_78863(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_78863(p,v);
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
var G__77348 = arguments.length;
switch (G__77348) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__77343_SHARP_){
if(cljs.core.truth_((p1__77343_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__77343_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__77343_SHARP_.call(null,topic)))){
return p1__77343_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__77343_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async77350 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async77350 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta77351){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta77351 = meta77351;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async77350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77352,meta77351__$1){
var self__ = this;
var _77352__$1 = this;
return (new cljs.core.async.t_cljs$core$async77350(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta77351__$1));
}));

(cljs.core.async.t_cljs$core$async77350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77352){
var self__ = this;
var _77352__$1 = this;
return self__.meta77351;
}));

(cljs.core.async.t_cljs$core$async77350.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async77350.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async77350.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async77350.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async77350.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async77350.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async77350.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async77350.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta77351","meta77351",23615022,null)], null);
}));

(cljs.core.async.t_cljs$core$async77350.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async77350.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async77350");

(cljs.core.async.t_cljs$core$async77350.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async77350");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async77350.
 */
cljs.core.async.__GT_t_cljs$core$async77350 = (function cljs$core$async$__GT_t_cljs$core$async77350(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta77351){
return (new cljs.core.async.t_cljs$core$async77350(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta77351));
});

}

return (new cljs.core.async.t_cljs$core$async77350(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__60460__auto___78887 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60461__auto__ = (function (){var switch__60140__auto__ = (function (state_77443){
var state_val_77444 = (state_77443[(1)]);
if((state_val_77444 === (7))){
var inst_77439 = (state_77443[(2)]);
var state_77443__$1 = state_77443;
var statearr_77447_78888 = state_77443__$1;
(statearr_77447_78888[(2)] = inst_77439);

(statearr_77447_78888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77444 === (20))){
var state_77443__$1 = state_77443;
var statearr_77449_78889 = state_77443__$1;
(statearr_77449_78889[(2)] = null);

(statearr_77449_78889[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77444 === (1))){
var state_77443__$1 = state_77443;
var statearr_77451_78890 = state_77443__$1;
(statearr_77451_78890[(2)] = null);

(statearr_77451_78890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77444 === (24))){
var inst_77418 = (state_77443[(7)]);
var inst_77430 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_77418);
var state_77443__$1 = state_77443;
var statearr_77452_78891 = state_77443__$1;
(statearr_77452_78891[(2)] = inst_77430);

(statearr_77452_78891[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77444 === (4))){
var inst_77366 = (state_77443[(8)]);
var inst_77366__$1 = (state_77443[(2)]);
var inst_77367 = (inst_77366__$1 == null);
var state_77443__$1 = (function (){var statearr_77454 = state_77443;
(statearr_77454[(8)] = inst_77366__$1);

return statearr_77454;
})();
if(cljs.core.truth_(inst_77367)){
var statearr_77456_78895 = state_77443__$1;
(statearr_77456_78895[(1)] = (5));

} else {
var statearr_77458_78896 = state_77443__$1;
(statearr_77458_78896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77444 === (15))){
var inst_77411 = (state_77443[(2)]);
var state_77443__$1 = state_77443;
var statearr_77460_78897 = state_77443__$1;
(statearr_77460_78897[(2)] = inst_77411);

(statearr_77460_78897[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77444 === (21))){
var inst_77436 = (state_77443[(2)]);
var state_77443__$1 = (function (){var statearr_77462 = state_77443;
(statearr_77462[(9)] = inst_77436);

return statearr_77462;
})();
var statearr_77463_78898 = state_77443__$1;
(statearr_77463_78898[(2)] = null);

(statearr_77463_78898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77444 === (13))){
var inst_77392 = (state_77443[(10)]);
var inst_77395 = cljs.core.chunked_seq_QMARK_(inst_77392);
var state_77443__$1 = state_77443;
if(inst_77395){
var statearr_77464_78900 = state_77443__$1;
(statearr_77464_78900[(1)] = (16));

} else {
var statearr_77465_78901 = state_77443__$1;
(statearr_77465_78901[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77444 === (22))){
var inst_77426 = (state_77443[(2)]);
var state_77443__$1 = state_77443;
if(cljs.core.truth_(inst_77426)){
var statearr_77468_78909 = state_77443__$1;
(statearr_77468_78909[(1)] = (23));

} else {
var statearr_77472_78910 = state_77443__$1;
(statearr_77472_78910[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77444 === (6))){
var inst_77421 = (state_77443[(11)]);
var inst_77418 = (state_77443[(7)]);
var inst_77366 = (state_77443[(8)]);
var inst_77418__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_77366) : topic_fn.call(null,inst_77366));
var inst_77420 = cljs.core.deref(mults);
var inst_77421__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_77420,inst_77418__$1);
var state_77443__$1 = (function (){var statearr_77477 = state_77443;
(statearr_77477[(11)] = inst_77421__$1);

(statearr_77477[(7)] = inst_77418__$1);

return statearr_77477;
})();
if(cljs.core.truth_(inst_77421__$1)){
var statearr_77478_78915 = state_77443__$1;
(statearr_77478_78915[(1)] = (19));

} else {
var statearr_77479_78919 = state_77443__$1;
(statearr_77479_78919[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77444 === (25))){
var inst_77432 = (state_77443[(2)]);
var state_77443__$1 = state_77443;
var statearr_77480_78924 = state_77443__$1;
(statearr_77480_78924[(2)] = inst_77432);

(statearr_77480_78924[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77444 === (17))){
var inst_77392 = (state_77443[(10)]);
var inst_77402 = cljs.core.first(inst_77392);
var inst_77403 = cljs.core.async.muxch_STAR_(inst_77402);
var inst_77404 = cljs.core.async.close_BANG_(inst_77403);
var inst_77405 = cljs.core.next(inst_77392);
var inst_77376 = inst_77405;
var inst_77377 = null;
var inst_77378 = (0);
var inst_77379 = (0);
var state_77443__$1 = (function (){var statearr_77481 = state_77443;
(statearr_77481[(12)] = inst_77379);

(statearr_77481[(13)] = inst_77378);

(statearr_77481[(14)] = inst_77404);

(statearr_77481[(15)] = inst_77377);

(statearr_77481[(16)] = inst_77376);

return statearr_77481;
})();
var statearr_77483_78925 = state_77443__$1;
(statearr_77483_78925[(2)] = null);

(statearr_77483_78925[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77444 === (3))){
var inst_77441 = (state_77443[(2)]);
var state_77443__$1 = state_77443;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77443__$1,inst_77441);
} else {
if((state_val_77444 === (12))){
var inst_77413 = (state_77443[(2)]);
var state_77443__$1 = state_77443;
var statearr_77486_78927 = state_77443__$1;
(statearr_77486_78927[(2)] = inst_77413);

(statearr_77486_78927[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77444 === (2))){
var state_77443__$1 = state_77443;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77443__$1,(4),ch);
} else {
if((state_val_77444 === (23))){
var state_77443__$1 = state_77443;
var statearr_77487_79007 = state_77443__$1;
(statearr_77487_79007[(2)] = null);

(statearr_77487_79007[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77444 === (19))){
var inst_77421 = (state_77443[(11)]);
var inst_77366 = (state_77443[(8)]);
var inst_77424 = cljs.core.async.muxch_STAR_(inst_77421);
var state_77443__$1 = state_77443;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_77443__$1,(22),inst_77424,inst_77366);
} else {
if((state_val_77444 === (11))){
var inst_77392 = (state_77443[(10)]);
var inst_77376 = (state_77443[(16)]);
var inst_77392__$1 = cljs.core.seq(inst_77376);
var state_77443__$1 = (function (){var statearr_77491 = state_77443;
(statearr_77491[(10)] = inst_77392__$1);

return statearr_77491;
})();
if(inst_77392__$1){
var statearr_77492_79121 = state_77443__$1;
(statearr_77492_79121[(1)] = (13));

} else {
var statearr_77494_79124 = state_77443__$1;
(statearr_77494_79124[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77444 === (9))){
var inst_77415 = (state_77443[(2)]);
var state_77443__$1 = state_77443;
var statearr_77496_79125 = state_77443__$1;
(statearr_77496_79125[(2)] = inst_77415);

(statearr_77496_79125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77444 === (5))){
var inst_77373 = cljs.core.deref(mults);
var inst_77374 = cljs.core.vals(inst_77373);
var inst_77375 = cljs.core.seq(inst_77374);
var inst_77376 = inst_77375;
var inst_77377 = null;
var inst_77378 = (0);
var inst_77379 = (0);
var state_77443__$1 = (function (){var statearr_77497 = state_77443;
(statearr_77497[(12)] = inst_77379);

(statearr_77497[(13)] = inst_77378);

(statearr_77497[(15)] = inst_77377);

(statearr_77497[(16)] = inst_77376);

return statearr_77497;
})();
var statearr_77498_79132 = state_77443__$1;
(statearr_77498_79132[(2)] = null);

(statearr_77498_79132[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77444 === (14))){
var state_77443__$1 = state_77443;
var statearr_77503_79137 = state_77443__$1;
(statearr_77503_79137[(2)] = null);

(statearr_77503_79137[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77444 === (16))){
var inst_77392 = (state_77443[(10)]);
var inst_77397 = cljs.core.chunk_first(inst_77392);
var inst_77398 = cljs.core.chunk_rest(inst_77392);
var inst_77399 = cljs.core.count(inst_77397);
var inst_77376 = inst_77398;
var inst_77377 = inst_77397;
var inst_77378 = inst_77399;
var inst_77379 = (0);
var state_77443__$1 = (function (){var statearr_77506 = state_77443;
(statearr_77506[(12)] = inst_77379);

(statearr_77506[(13)] = inst_77378);

(statearr_77506[(15)] = inst_77377);

(statearr_77506[(16)] = inst_77376);

return statearr_77506;
})();
var statearr_77507_79144 = state_77443__$1;
(statearr_77507_79144[(2)] = null);

(statearr_77507_79144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77444 === (10))){
var inst_77379 = (state_77443[(12)]);
var inst_77378 = (state_77443[(13)]);
var inst_77377 = (state_77443[(15)]);
var inst_77376 = (state_77443[(16)]);
var inst_77385 = cljs.core._nth(inst_77377,inst_77379);
var inst_77386 = cljs.core.async.muxch_STAR_(inst_77385);
var inst_77387 = cljs.core.async.close_BANG_(inst_77386);
var inst_77389 = (inst_77379 + (1));
var tmp77499 = inst_77378;
var tmp77500 = inst_77377;
var tmp77501 = inst_77376;
var inst_77376__$1 = tmp77501;
var inst_77377__$1 = tmp77500;
var inst_77378__$1 = tmp77499;
var inst_77379__$1 = inst_77389;
var state_77443__$1 = (function (){var statearr_77508 = state_77443;
(statearr_77508[(12)] = inst_77379__$1);

(statearr_77508[(17)] = inst_77387);

(statearr_77508[(13)] = inst_77378__$1);

(statearr_77508[(15)] = inst_77377__$1);

(statearr_77508[(16)] = inst_77376__$1);

return statearr_77508;
})();
var statearr_77514_79157 = state_77443__$1;
(statearr_77514_79157[(2)] = null);

(statearr_77514_79157[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77444 === (18))){
var inst_77408 = (state_77443[(2)]);
var state_77443__$1 = state_77443;
var statearr_77517_79164 = state_77443__$1;
(statearr_77517_79164[(2)] = inst_77408);

(statearr_77517_79164[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77444 === (8))){
var inst_77379 = (state_77443[(12)]);
var inst_77378 = (state_77443[(13)]);
var inst_77381 = (inst_77379 < inst_77378);
var inst_77382 = inst_77381;
var state_77443__$1 = state_77443;
if(cljs.core.truth_(inst_77382)){
var statearr_77519_79167 = state_77443__$1;
(statearr_77519_79167[(1)] = (10));

} else {
var statearr_77520_79170 = state_77443__$1;
(statearr_77520_79170[(1)] = (11));

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
var cljs$core$async$state_machine__60141__auto__ = null;
var cljs$core$async$state_machine__60141__auto____0 = (function (){
var statearr_77523 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_77523[(0)] = cljs$core$async$state_machine__60141__auto__);

(statearr_77523[(1)] = (1));

return statearr_77523;
});
var cljs$core$async$state_machine__60141__auto____1 = (function (state_77443){
while(true){
var ret_value__60142__auto__ = (function (){try{while(true){
var result__60143__auto__ = switch__60140__auto__(state_77443);
if(cljs.core.keyword_identical_QMARK_(result__60143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60143__auto__;
}
break;
}
}catch (e77525){var ex__60144__auto__ = e77525;
var statearr_77526_79179 = state_77443;
(statearr_77526_79179[(2)] = ex__60144__auto__);


if(cljs.core.seq((state_77443[(4)]))){
var statearr_77527_79180 = state_77443;
(statearr_77527_79180[(1)] = cljs.core.first((state_77443[(4)])));

} else {
throw ex__60144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79185 = state_77443;
state_77443 = G__79185;
continue;
} else {
return ret_value__60142__auto__;
}
break;
}
});
cljs$core$async$state_machine__60141__auto__ = function(state_77443){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60141__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60141__auto____1.call(this,state_77443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60141__auto____0;
cljs$core$async$state_machine__60141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60141__auto____1;
return cljs$core$async$state_machine__60141__auto__;
})()
})();
var state__60462__auto__ = (function (){var statearr_77528 = f__60461__auto__();
(statearr_77528[(6)] = c__60460__auto___78887);

return statearr_77528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60462__auto__);
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
var G__77533 = arguments.length;
switch (G__77533) {
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
var G__77540 = arguments.length;
switch (G__77540) {
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
var G__77545 = arguments.length;
switch (G__77545) {
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
var c__60460__auto___79239 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60461__auto__ = (function (){var switch__60140__auto__ = (function (state_77601){
var state_val_77602 = (state_77601[(1)]);
if((state_val_77602 === (7))){
var state_77601__$1 = state_77601;
var statearr_77603_79246 = state_77601__$1;
(statearr_77603_79246[(2)] = null);

(statearr_77603_79246[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77602 === (1))){
var state_77601__$1 = state_77601;
var statearr_77604_79251 = state_77601__$1;
(statearr_77604_79251[(2)] = null);

(statearr_77604_79251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77602 === (4))){
var inst_77554 = (state_77601[(7)]);
var inst_77555 = (state_77601[(8)]);
var inst_77558 = (inst_77555 < inst_77554);
var state_77601__$1 = state_77601;
if(cljs.core.truth_(inst_77558)){
var statearr_77607_79260 = state_77601__$1;
(statearr_77607_79260[(1)] = (6));

} else {
var statearr_77608_79261 = state_77601__$1;
(statearr_77608_79261[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77602 === (15))){
var inst_77584 = (state_77601[(9)]);
var inst_77591 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_77584);
var state_77601__$1 = state_77601;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_77601__$1,(17),out,inst_77591);
} else {
if((state_val_77602 === (13))){
var inst_77584 = (state_77601[(9)]);
var inst_77584__$1 = (state_77601[(2)]);
var inst_77586 = cljs.core.some(cljs.core.nil_QMARK_,inst_77584__$1);
var state_77601__$1 = (function (){var statearr_77609 = state_77601;
(statearr_77609[(9)] = inst_77584__$1);

return statearr_77609;
})();
if(cljs.core.truth_(inst_77586)){
var statearr_77610_79270 = state_77601__$1;
(statearr_77610_79270[(1)] = (14));

} else {
var statearr_77611_79273 = state_77601__$1;
(statearr_77611_79273[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77602 === (6))){
var state_77601__$1 = state_77601;
var statearr_77613_79281 = state_77601__$1;
(statearr_77613_79281[(2)] = null);

(statearr_77613_79281[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77602 === (17))){
var inst_77593 = (state_77601[(2)]);
var state_77601__$1 = (function (){var statearr_77619 = state_77601;
(statearr_77619[(10)] = inst_77593);

return statearr_77619;
})();
var statearr_77623_79287 = state_77601__$1;
(statearr_77623_79287[(2)] = null);

(statearr_77623_79287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77602 === (3))){
var inst_77599 = (state_77601[(2)]);
var state_77601__$1 = state_77601;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77601__$1,inst_77599);
} else {
if((state_val_77602 === (12))){
var _ = (function (){var statearr_77624 = state_77601;
(statearr_77624[(4)] = cljs.core.rest((state_77601[(4)])));

return statearr_77624;
})();
var state_77601__$1 = state_77601;
var ex77618 = (state_77601__$1[(2)]);
var statearr_77625_79298 = state_77601__$1;
(statearr_77625_79298[(5)] = ex77618);


if((ex77618 instanceof Object)){
var statearr_77626_79300 = state_77601__$1;
(statearr_77626_79300[(1)] = (11));

(statearr_77626_79300[(5)] = null);

} else {
throw ex77618;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77602 === (2))){
var inst_77553 = cljs.core.reset_BANG_(dctr,cnt);
var inst_77554 = cnt;
var inst_77555 = (0);
var state_77601__$1 = (function (){var statearr_77630 = state_77601;
(statearr_77630[(7)] = inst_77554);

(statearr_77630[(8)] = inst_77555);

(statearr_77630[(11)] = inst_77553);

return statearr_77630;
})();
var statearr_77631_79309 = state_77601__$1;
(statearr_77631_79309[(2)] = null);

(statearr_77631_79309[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77602 === (11))){
var inst_77562 = (state_77601[(2)]);
var inst_77563 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_77601__$1 = (function (){var statearr_77632 = state_77601;
(statearr_77632[(12)] = inst_77562);

return statearr_77632;
})();
var statearr_77633_79314 = state_77601__$1;
(statearr_77633_79314[(2)] = inst_77563);

(statearr_77633_79314[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77602 === (9))){
var inst_77555 = (state_77601[(8)]);
var _ = (function (){var statearr_77634 = state_77601;
(statearr_77634[(4)] = cljs.core.cons((12),(state_77601[(4)])));

return statearr_77634;
})();
var inst_77569 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_77555) : chs__$1.call(null,inst_77555));
var inst_77571 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_77555) : done.call(null,inst_77555));
var inst_77572 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_77569,inst_77571);
var ___$1 = (function (){var statearr_77636 = state_77601;
(statearr_77636[(4)] = cljs.core.rest((state_77601[(4)])));

return statearr_77636;
})();
var state_77601__$1 = state_77601;
var statearr_77638_79327 = state_77601__$1;
(statearr_77638_79327[(2)] = inst_77572);

(statearr_77638_79327[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77602 === (5))){
var inst_77582 = (state_77601[(2)]);
var state_77601__$1 = (function (){var statearr_77639 = state_77601;
(statearr_77639[(13)] = inst_77582);

return statearr_77639;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77601__$1,(13),dchan);
} else {
if((state_val_77602 === (14))){
var inst_77589 = cljs.core.async.close_BANG_(out);
var state_77601__$1 = state_77601;
var statearr_77641_79332 = state_77601__$1;
(statearr_77641_79332[(2)] = inst_77589);

(statearr_77641_79332[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77602 === (16))){
var inst_77596 = (state_77601[(2)]);
var state_77601__$1 = state_77601;
var statearr_77643_79339 = state_77601__$1;
(statearr_77643_79339[(2)] = inst_77596);

(statearr_77643_79339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77602 === (10))){
var inst_77555 = (state_77601[(8)]);
var inst_77575 = (state_77601[(2)]);
var inst_77576 = (inst_77555 + (1));
var inst_77555__$1 = inst_77576;
var state_77601__$1 = (function (){var statearr_77644 = state_77601;
(statearr_77644[(8)] = inst_77555__$1);

(statearr_77644[(14)] = inst_77575);

return statearr_77644;
})();
var statearr_77645_79347 = state_77601__$1;
(statearr_77645_79347[(2)] = null);

(statearr_77645_79347[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77602 === (8))){
var inst_77580 = (state_77601[(2)]);
var state_77601__$1 = state_77601;
var statearr_77646_79353 = state_77601__$1;
(statearr_77646_79353[(2)] = inst_77580);

(statearr_77646_79353[(1)] = (5));


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
var cljs$core$async$state_machine__60141__auto__ = null;
var cljs$core$async$state_machine__60141__auto____0 = (function (){
var statearr_77647 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_77647[(0)] = cljs$core$async$state_machine__60141__auto__);

(statearr_77647[(1)] = (1));

return statearr_77647;
});
var cljs$core$async$state_machine__60141__auto____1 = (function (state_77601){
while(true){
var ret_value__60142__auto__ = (function (){try{while(true){
var result__60143__auto__ = switch__60140__auto__(state_77601);
if(cljs.core.keyword_identical_QMARK_(result__60143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60143__auto__;
}
break;
}
}catch (e77648){var ex__60144__auto__ = e77648;
var statearr_77649_79370 = state_77601;
(statearr_77649_79370[(2)] = ex__60144__auto__);


if(cljs.core.seq((state_77601[(4)]))){
var statearr_77651_79371 = state_77601;
(statearr_77651_79371[(1)] = cljs.core.first((state_77601[(4)])));

} else {
throw ex__60144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79372 = state_77601;
state_77601 = G__79372;
continue;
} else {
return ret_value__60142__auto__;
}
break;
}
});
cljs$core$async$state_machine__60141__auto__ = function(state_77601){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60141__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60141__auto____1.call(this,state_77601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60141__auto____0;
cljs$core$async$state_machine__60141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60141__auto____1;
return cljs$core$async$state_machine__60141__auto__;
})()
})();
var state__60462__auto__ = (function (){var statearr_77653 = f__60461__auto__();
(statearr_77653[(6)] = c__60460__auto___79239);

return statearr_77653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60462__auto__);
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
var G__77657 = arguments.length;
switch (G__77657) {
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
var c__60460__auto___79384 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60461__auto__ = (function (){var switch__60140__auto__ = (function (state_77696){
var state_val_77697 = (state_77696[(1)]);
if((state_val_77697 === (7))){
var inst_77671 = (state_77696[(7)]);
var inst_77672 = (state_77696[(8)]);
var inst_77671__$1 = (state_77696[(2)]);
var inst_77672__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_77671__$1,(0),null);
var inst_77673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_77671__$1,(1),null);
var inst_77674 = (inst_77672__$1 == null);
var state_77696__$1 = (function (){var statearr_77703 = state_77696;
(statearr_77703[(9)] = inst_77673);

(statearr_77703[(7)] = inst_77671__$1);

(statearr_77703[(8)] = inst_77672__$1);

return statearr_77703;
})();
if(cljs.core.truth_(inst_77674)){
var statearr_77704_79397 = state_77696__$1;
(statearr_77704_79397[(1)] = (8));

} else {
var statearr_77705_79398 = state_77696__$1;
(statearr_77705_79398[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77697 === (1))){
var inst_77661 = cljs.core.vec(chs);
var inst_77662 = inst_77661;
var state_77696__$1 = (function (){var statearr_77706 = state_77696;
(statearr_77706[(10)] = inst_77662);

return statearr_77706;
})();
var statearr_77707_79407 = state_77696__$1;
(statearr_77707_79407[(2)] = null);

(statearr_77707_79407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77697 === (4))){
var inst_77662 = (state_77696[(10)]);
var state_77696__$1 = state_77696;
return cljs.core.async.ioc_alts_BANG_(state_77696__$1,(7),inst_77662);
} else {
if((state_val_77697 === (6))){
var inst_77692 = (state_77696[(2)]);
var state_77696__$1 = state_77696;
var statearr_77712_79416 = state_77696__$1;
(statearr_77712_79416[(2)] = inst_77692);

(statearr_77712_79416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77697 === (3))){
var inst_77694 = (state_77696[(2)]);
var state_77696__$1 = state_77696;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77696__$1,inst_77694);
} else {
if((state_val_77697 === (2))){
var inst_77662 = (state_77696[(10)]);
var inst_77664 = cljs.core.count(inst_77662);
var inst_77665 = (inst_77664 > (0));
var state_77696__$1 = state_77696;
if(cljs.core.truth_(inst_77665)){
var statearr_77714_79426 = state_77696__$1;
(statearr_77714_79426[(1)] = (4));

} else {
var statearr_77715_79429 = state_77696__$1;
(statearr_77715_79429[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77697 === (11))){
var inst_77662 = (state_77696[(10)]);
var inst_77682 = (state_77696[(2)]);
var tmp77713 = inst_77662;
var inst_77662__$1 = tmp77713;
var state_77696__$1 = (function (){var statearr_77716 = state_77696;
(statearr_77716[(10)] = inst_77662__$1);

(statearr_77716[(11)] = inst_77682);

return statearr_77716;
})();
var statearr_77717_79434 = state_77696__$1;
(statearr_77717_79434[(2)] = null);

(statearr_77717_79434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77697 === (9))){
var inst_77672 = (state_77696[(8)]);
var state_77696__$1 = state_77696;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_77696__$1,(11),out,inst_77672);
} else {
if((state_val_77697 === (5))){
var inst_77690 = cljs.core.async.close_BANG_(out);
var state_77696__$1 = state_77696;
var statearr_77720_79441 = state_77696__$1;
(statearr_77720_79441[(2)] = inst_77690);

(statearr_77720_79441[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77697 === (10))){
var inst_77687 = (state_77696[(2)]);
var state_77696__$1 = state_77696;
var statearr_77722_79444 = state_77696__$1;
(statearr_77722_79444[(2)] = inst_77687);

(statearr_77722_79444[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77697 === (8))){
var inst_77662 = (state_77696[(10)]);
var inst_77673 = (state_77696[(9)]);
var inst_77671 = (state_77696[(7)]);
var inst_77672 = (state_77696[(8)]);
var inst_77677 = (function (){var cs = inst_77662;
var vec__77667 = inst_77671;
var v = inst_77672;
var c = inst_77673;
return (function (p1__77655_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__77655_SHARP_);
});
})();
var inst_77678 = cljs.core.filterv(inst_77677,inst_77662);
var inst_77662__$1 = inst_77678;
var state_77696__$1 = (function (){var statearr_77724 = state_77696;
(statearr_77724[(10)] = inst_77662__$1);

return statearr_77724;
})();
var statearr_77725_79451 = state_77696__$1;
(statearr_77725_79451[(2)] = null);

(statearr_77725_79451[(1)] = (2));


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
var cljs$core$async$state_machine__60141__auto__ = null;
var cljs$core$async$state_machine__60141__auto____0 = (function (){
var statearr_77727 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_77727[(0)] = cljs$core$async$state_machine__60141__auto__);

(statearr_77727[(1)] = (1));

return statearr_77727;
});
var cljs$core$async$state_machine__60141__auto____1 = (function (state_77696){
while(true){
var ret_value__60142__auto__ = (function (){try{while(true){
var result__60143__auto__ = switch__60140__auto__(state_77696);
if(cljs.core.keyword_identical_QMARK_(result__60143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60143__auto__;
}
break;
}
}catch (e77729){var ex__60144__auto__ = e77729;
var statearr_77730_79458 = state_77696;
(statearr_77730_79458[(2)] = ex__60144__auto__);


if(cljs.core.seq((state_77696[(4)]))){
var statearr_77734_79459 = state_77696;
(statearr_77734_79459[(1)] = cljs.core.first((state_77696[(4)])));

} else {
throw ex__60144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79462 = state_77696;
state_77696 = G__79462;
continue;
} else {
return ret_value__60142__auto__;
}
break;
}
});
cljs$core$async$state_machine__60141__auto__ = function(state_77696){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60141__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60141__auto____1.call(this,state_77696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60141__auto____0;
cljs$core$async$state_machine__60141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60141__auto____1;
return cljs$core$async$state_machine__60141__auto__;
})()
})();
var state__60462__auto__ = (function (){var statearr_77735 = f__60461__auto__();
(statearr_77735[(6)] = c__60460__auto___79384);

return statearr_77735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60462__auto__);
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
var G__77743 = arguments.length;
switch (G__77743) {
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
var c__60460__auto___79484 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60461__auto__ = (function (){var switch__60140__auto__ = (function (state_77773){
var state_val_77774 = (state_77773[(1)]);
if((state_val_77774 === (7))){
var inst_77752 = (state_77773[(7)]);
var inst_77752__$1 = (state_77773[(2)]);
var inst_77753 = (inst_77752__$1 == null);
var inst_77754 = cljs.core.not(inst_77753);
var state_77773__$1 = (function (){var statearr_77780 = state_77773;
(statearr_77780[(7)] = inst_77752__$1);

return statearr_77780;
})();
if(inst_77754){
var statearr_77781_79493 = state_77773__$1;
(statearr_77781_79493[(1)] = (8));

} else {
var statearr_77782_79496 = state_77773__$1;
(statearr_77782_79496[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77774 === (1))){
var inst_77746 = (0);
var state_77773__$1 = (function (){var statearr_77783 = state_77773;
(statearr_77783[(8)] = inst_77746);

return statearr_77783;
})();
var statearr_77784_79499 = state_77773__$1;
(statearr_77784_79499[(2)] = null);

(statearr_77784_79499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77774 === (4))){
var state_77773__$1 = state_77773;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77773__$1,(7),ch);
} else {
if((state_val_77774 === (6))){
var inst_77765 = (state_77773[(2)]);
var state_77773__$1 = state_77773;
var statearr_77787_79503 = state_77773__$1;
(statearr_77787_79503[(2)] = inst_77765);

(statearr_77787_79503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77774 === (3))){
var inst_77767 = (state_77773[(2)]);
var inst_77768 = cljs.core.async.close_BANG_(out);
var state_77773__$1 = (function (){var statearr_77791 = state_77773;
(statearr_77791[(9)] = inst_77767);

return statearr_77791;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_77773__$1,inst_77768);
} else {
if((state_val_77774 === (2))){
var inst_77746 = (state_77773[(8)]);
var inst_77749 = (inst_77746 < n);
var state_77773__$1 = state_77773;
if(cljs.core.truth_(inst_77749)){
var statearr_77792_79512 = state_77773__$1;
(statearr_77792_79512[(1)] = (4));

} else {
var statearr_77793_79513 = state_77773__$1;
(statearr_77793_79513[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77774 === (11))){
var inst_77746 = (state_77773[(8)]);
var inst_77757 = (state_77773[(2)]);
var inst_77758 = (inst_77746 + (1));
var inst_77746__$1 = inst_77758;
var state_77773__$1 = (function (){var statearr_77794 = state_77773;
(statearr_77794[(8)] = inst_77746__$1);

(statearr_77794[(10)] = inst_77757);

return statearr_77794;
})();
var statearr_77795_79520 = state_77773__$1;
(statearr_77795_79520[(2)] = null);

(statearr_77795_79520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77774 === (9))){
var state_77773__$1 = state_77773;
var statearr_77796_79523 = state_77773__$1;
(statearr_77796_79523[(2)] = null);

(statearr_77796_79523[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77774 === (5))){
var state_77773__$1 = state_77773;
var statearr_77797_79526 = state_77773__$1;
(statearr_77797_79526[(2)] = null);

(statearr_77797_79526[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77774 === (10))){
var inst_77762 = (state_77773[(2)]);
var state_77773__$1 = state_77773;
var statearr_77798_79531 = state_77773__$1;
(statearr_77798_79531[(2)] = inst_77762);

(statearr_77798_79531[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77774 === (8))){
var inst_77752 = (state_77773[(7)]);
var state_77773__$1 = state_77773;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_77773__$1,(11),out,inst_77752);
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
var cljs$core$async$state_machine__60141__auto__ = null;
var cljs$core$async$state_machine__60141__auto____0 = (function (){
var statearr_77800 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_77800[(0)] = cljs$core$async$state_machine__60141__auto__);

(statearr_77800[(1)] = (1));

return statearr_77800;
});
var cljs$core$async$state_machine__60141__auto____1 = (function (state_77773){
while(true){
var ret_value__60142__auto__ = (function (){try{while(true){
var result__60143__auto__ = switch__60140__auto__(state_77773);
if(cljs.core.keyword_identical_QMARK_(result__60143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60143__auto__;
}
break;
}
}catch (e77802){var ex__60144__auto__ = e77802;
var statearr_77803_79545 = state_77773;
(statearr_77803_79545[(2)] = ex__60144__auto__);


if(cljs.core.seq((state_77773[(4)]))){
var statearr_77804_79548 = state_77773;
(statearr_77804_79548[(1)] = cljs.core.first((state_77773[(4)])));

} else {
throw ex__60144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79549 = state_77773;
state_77773 = G__79549;
continue;
} else {
return ret_value__60142__auto__;
}
break;
}
});
cljs$core$async$state_machine__60141__auto__ = function(state_77773){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60141__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60141__auto____1.call(this,state_77773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60141__auto____0;
cljs$core$async$state_machine__60141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60141__auto____1;
return cljs$core$async$state_machine__60141__auto__;
})()
})();
var state__60462__auto__ = (function (){var statearr_77806 = f__60461__auto__();
(statearr_77806[(6)] = c__60460__auto___79484);

return statearr_77806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60462__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async77810 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async77810 = (function (f,ch,meta77811){
this.f = f;
this.ch = ch;
this.meta77811 = meta77811;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async77810.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77812,meta77811__$1){
var self__ = this;
var _77812__$1 = this;
return (new cljs.core.async.t_cljs$core$async77810(self__.f,self__.ch,meta77811__$1));
}));

(cljs.core.async.t_cljs$core$async77810.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77812){
var self__ = this;
var _77812__$1 = this;
return self__.meta77811;
}));

(cljs.core.async.t_cljs$core$async77810.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async77810.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async77810.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async77810.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async77810.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async77815 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async77815 = (function (f,ch,meta77811,_,fn1,meta77816){
this.f = f;
this.ch = ch;
this.meta77811 = meta77811;
this._ = _;
this.fn1 = fn1;
this.meta77816 = meta77816;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async77815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77817,meta77816__$1){
var self__ = this;
var _77817__$1 = this;
return (new cljs.core.async.t_cljs$core$async77815(self__.f,self__.ch,self__.meta77811,self__._,self__.fn1,meta77816__$1));
}));

(cljs.core.async.t_cljs$core$async77815.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77817){
var self__ = this;
var _77817__$1 = this;
return self__.meta77816;
}));

(cljs.core.async.t_cljs$core$async77815.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async77815.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async77815.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async77815.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__77807_SHARP_){
var G__77819 = (((p1__77807_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__77807_SHARP_) : self__.f.call(null,p1__77807_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__77819) : f1.call(null,G__77819));
});
}));

(cljs.core.async.t_cljs$core$async77815.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta77811","meta77811",359761106,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async77810","cljs.core.async/t_cljs$core$async77810",-1856065847,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta77816","meta77816",1685518511,null)], null);
}));

(cljs.core.async.t_cljs$core$async77815.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async77815.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async77815");

(cljs.core.async.t_cljs$core$async77815.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async77815");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async77815.
 */
cljs.core.async.__GT_t_cljs$core$async77815 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async77815(f__$1,ch__$1,meta77811__$1,___$2,fn1__$1,meta77816){
return (new cljs.core.async.t_cljs$core$async77815(f__$1,ch__$1,meta77811__$1,___$2,fn1__$1,meta77816));
});

}

return (new cljs.core.async.t_cljs$core$async77815(self__.f,self__.ch,self__.meta77811,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__77821 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__77821) : self__.f.call(null,G__77821));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async77810.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async77810.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async77810.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta77811","meta77811",359761106,null)], null);
}));

(cljs.core.async.t_cljs$core$async77810.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async77810.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async77810");

(cljs.core.async.t_cljs$core$async77810.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async77810");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async77810.
 */
cljs.core.async.__GT_t_cljs$core$async77810 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async77810(f__$1,ch__$1,meta77811){
return (new cljs.core.async.t_cljs$core$async77810(f__$1,ch__$1,meta77811));
});

}

return (new cljs.core.async.t_cljs$core$async77810(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async77824 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async77824 = (function (f,ch,meta77825){
this.f = f;
this.ch = ch;
this.meta77825 = meta77825;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async77824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77826,meta77825__$1){
var self__ = this;
var _77826__$1 = this;
return (new cljs.core.async.t_cljs$core$async77824(self__.f,self__.ch,meta77825__$1));
}));

(cljs.core.async.t_cljs$core$async77824.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77826){
var self__ = this;
var _77826__$1 = this;
return self__.meta77825;
}));

(cljs.core.async.t_cljs$core$async77824.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async77824.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async77824.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async77824.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async77824.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async77824.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async77824.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta77825","meta77825",1424480880,null)], null);
}));

(cljs.core.async.t_cljs$core$async77824.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async77824.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async77824");

(cljs.core.async.t_cljs$core$async77824.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async77824");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async77824.
 */
cljs.core.async.__GT_t_cljs$core$async77824 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async77824(f__$1,ch__$1,meta77825){
return (new cljs.core.async.t_cljs$core$async77824(f__$1,ch__$1,meta77825));
});

}

return (new cljs.core.async.t_cljs$core$async77824(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async77832 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async77832 = (function (p,ch,meta77833){
this.p = p;
this.ch = ch;
this.meta77833 = meta77833;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async77832.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77834,meta77833__$1){
var self__ = this;
var _77834__$1 = this;
return (new cljs.core.async.t_cljs$core$async77832(self__.p,self__.ch,meta77833__$1));
}));

(cljs.core.async.t_cljs$core$async77832.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77834){
var self__ = this;
var _77834__$1 = this;
return self__.meta77833;
}));

(cljs.core.async.t_cljs$core$async77832.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async77832.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async77832.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async77832.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async77832.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async77832.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async77832.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async77832.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta77833","meta77833",295316953,null)], null);
}));

(cljs.core.async.t_cljs$core$async77832.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async77832.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async77832");

(cljs.core.async.t_cljs$core$async77832.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async77832");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async77832.
 */
cljs.core.async.__GT_t_cljs$core$async77832 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async77832(p__$1,ch__$1,meta77833){
return (new cljs.core.async.t_cljs$core$async77832(p__$1,ch__$1,meta77833));
});

}

return (new cljs.core.async.t_cljs$core$async77832(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__77841 = arguments.length;
switch (G__77841) {
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
var c__60460__auto___79639 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60461__auto__ = (function (){var switch__60140__auto__ = (function (state_77864){
var state_val_77865 = (state_77864[(1)]);
if((state_val_77865 === (7))){
var inst_77860 = (state_77864[(2)]);
var state_77864__$1 = state_77864;
var statearr_77869_79640 = state_77864__$1;
(statearr_77869_79640[(2)] = inst_77860);

(statearr_77869_79640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77865 === (1))){
var state_77864__$1 = state_77864;
var statearr_77870_79641 = state_77864__$1;
(statearr_77870_79641[(2)] = null);

(statearr_77870_79641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77865 === (4))){
var inst_77845 = (state_77864[(7)]);
var inst_77845__$1 = (state_77864[(2)]);
var inst_77846 = (inst_77845__$1 == null);
var state_77864__$1 = (function (){var statearr_77871 = state_77864;
(statearr_77871[(7)] = inst_77845__$1);

return statearr_77871;
})();
if(cljs.core.truth_(inst_77846)){
var statearr_77873_79642 = state_77864__$1;
(statearr_77873_79642[(1)] = (5));

} else {
var statearr_77874_79643 = state_77864__$1;
(statearr_77874_79643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77865 === (6))){
var inst_77845 = (state_77864[(7)]);
var inst_77850 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_77845) : p.call(null,inst_77845));
var state_77864__$1 = state_77864;
if(cljs.core.truth_(inst_77850)){
var statearr_77876_79650 = state_77864__$1;
(statearr_77876_79650[(1)] = (8));

} else {
var statearr_77877_79651 = state_77864__$1;
(statearr_77877_79651[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77865 === (3))){
var inst_77862 = (state_77864[(2)]);
var state_77864__$1 = state_77864;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77864__$1,inst_77862);
} else {
if((state_val_77865 === (2))){
var state_77864__$1 = state_77864;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77864__$1,(4),ch);
} else {
if((state_val_77865 === (11))){
var inst_77854 = (state_77864[(2)]);
var state_77864__$1 = state_77864;
var statearr_77879_79652 = state_77864__$1;
(statearr_77879_79652[(2)] = inst_77854);

(statearr_77879_79652[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77865 === (9))){
var state_77864__$1 = state_77864;
var statearr_77880_79653 = state_77864__$1;
(statearr_77880_79653[(2)] = null);

(statearr_77880_79653[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77865 === (5))){
var inst_77848 = cljs.core.async.close_BANG_(out);
var state_77864__$1 = state_77864;
var statearr_77881_79656 = state_77864__$1;
(statearr_77881_79656[(2)] = inst_77848);

(statearr_77881_79656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77865 === (10))){
var inst_77857 = (state_77864[(2)]);
var state_77864__$1 = (function (){var statearr_77882 = state_77864;
(statearr_77882[(8)] = inst_77857);

return statearr_77882;
})();
var statearr_77884_79659 = state_77864__$1;
(statearr_77884_79659[(2)] = null);

(statearr_77884_79659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77865 === (8))){
var inst_77845 = (state_77864[(7)]);
var state_77864__$1 = state_77864;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_77864__$1,(11),out,inst_77845);
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
var cljs$core$async$state_machine__60141__auto__ = null;
var cljs$core$async$state_machine__60141__auto____0 = (function (){
var statearr_77885 = [null,null,null,null,null,null,null,null,null];
(statearr_77885[(0)] = cljs$core$async$state_machine__60141__auto__);

(statearr_77885[(1)] = (1));

return statearr_77885;
});
var cljs$core$async$state_machine__60141__auto____1 = (function (state_77864){
while(true){
var ret_value__60142__auto__ = (function (){try{while(true){
var result__60143__auto__ = switch__60140__auto__(state_77864);
if(cljs.core.keyword_identical_QMARK_(result__60143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60143__auto__;
}
break;
}
}catch (e77886){var ex__60144__auto__ = e77886;
var statearr_77887_79663 = state_77864;
(statearr_77887_79663[(2)] = ex__60144__auto__);


if(cljs.core.seq((state_77864[(4)]))){
var statearr_77889_79664 = state_77864;
(statearr_77889_79664[(1)] = cljs.core.first((state_77864[(4)])));

} else {
throw ex__60144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79665 = state_77864;
state_77864 = G__79665;
continue;
} else {
return ret_value__60142__auto__;
}
break;
}
});
cljs$core$async$state_machine__60141__auto__ = function(state_77864){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60141__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60141__auto____1.call(this,state_77864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60141__auto____0;
cljs$core$async$state_machine__60141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60141__auto____1;
return cljs$core$async$state_machine__60141__auto__;
})()
})();
var state__60462__auto__ = (function (){var statearr_77890 = f__60461__auto__();
(statearr_77890[(6)] = c__60460__auto___79639);

return statearr_77890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60462__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__77893 = arguments.length;
switch (G__77893) {
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
var c__60460__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60461__auto__ = (function (){var switch__60140__auto__ = (function (state_77959){
var state_val_77960 = (state_77959[(1)]);
if((state_val_77960 === (7))){
var inst_77955 = (state_77959[(2)]);
var state_77959__$1 = state_77959;
var statearr_77962_79671 = state_77959__$1;
(statearr_77962_79671[(2)] = inst_77955);

(statearr_77962_79671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77960 === (20))){
var inst_77925 = (state_77959[(7)]);
var inst_77936 = (state_77959[(2)]);
var inst_77937 = cljs.core.next(inst_77925);
var inst_77911 = inst_77937;
var inst_77912 = null;
var inst_77913 = (0);
var inst_77914 = (0);
var state_77959__$1 = (function (){var statearr_77963 = state_77959;
(statearr_77963[(8)] = inst_77936);

(statearr_77963[(9)] = inst_77913);

(statearr_77963[(10)] = inst_77911);

(statearr_77963[(11)] = inst_77914);

(statearr_77963[(12)] = inst_77912);

return statearr_77963;
})();
var statearr_77964_79675 = state_77959__$1;
(statearr_77964_79675[(2)] = null);

(statearr_77964_79675[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77960 === (1))){
var state_77959__$1 = state_77959;
var statearr_77965_79679 = state_77959__$1;
(statearr_77965_79679[(2)] = null);

(statearr_77965_79679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77960 === (4))){
var inst_77897 = (state_77959[(13)]);
var inst_77897__$1 = (state_77959[(2)]);
var inst_77898 = (inst_77897__$1 == null);
var state_77959__$1 = (function (){var statearr_77966 = state_77959;
(statearr_77966[(13)] = inst_77897__$1);

return statearr_77966;
})();
if(cljs.core.truth_(inst_77898)){
var statearr_77967_79680 = state_77959__$1;
(statearr_77967_79680[(1)] = (5));

} else {
var statearr_77968_79681 = state_77959__$1;
(statearr_77968_79681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77960 === (15))){
var state_77959__$1 = state_77959;
var statearr_77972_79682 = state_77959__$1;
(statearr_77972_79682[(2)] = null);

(statearr_77972_79682[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77960 === (21))){
var state_77959__$1 = state_77959;
var statearr_77974_79685 = state_77959__$1;
(statearr_77974_79685[(2)] = null);

(statearr_77974_79685[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77960 === (13))){
var inst_77913 = (state_77959[(9)]);
var inst_77911 = (state_77959[(10)]);
var inst_77914 = (state_77959[(11)]);
var inst_77912 = (state_77959[(12)]);
var inst_77921 = (state_77959[(2)]);
var inst_77922 = (inst_77914 + (1));
var tmp77969 = inst_77913;
var tmp77970 = inst_77911;
var tmp77971 = inst_77912;
var inst_77911__$1 = tmp77970;
var inst_77912__$1 = tmp77971;
var inst_77913__$1 = tmp77969;
var inst_77914__$1 = inst_77922;
var state_77959__$1 = (function (){var statearr_77975 = state_77959;
(statearr_77975[(14)] = inst_77921);

(statearr_77975[(9)] = inst_77913__$1);

(statearr_77975[(10)] = inst_77911__$1);

(statearr_77975[(11)] = inst_77914__$1);

(statearr_77975[(12)] = inst_77912__$1);

return statearr_77975;
})();
var statearr_77976_79687 = state_77959__$1;
(statearr_77976_79687[(2)] = null);

(statearr_77976_79687[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77960 === (22))){
var state_77959__$1 = state_77959;
var statearr_77978_79691 = state_77959__$1;
(statearr_77978_79691[(2)] = null);

(statearr_77978_79691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77960 === (6))){
var inst_77897 = (state_77959[(13)]);
var inst_77909 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_77897) : f.call(null,inst_77897));
var inst_77910 = cljs.core.seq(inst_77909);
var inst_77911 = inst_77910;
var inst_77912 = null;
var inst_77913 = (0);
var inst_77914 = (0);
var state_77959__$1 = (function (){var statearr_77979 = state_77959;
(statearr_77979[(9)] = inst_77913);

(statearr_77979[(10)] = inst_77911);

(statearr_77979[(11)] = inst_77914);

(statearr_77979[(12)] = inst_77912);

return statearr_77979;
})();
var statearr_77980_79692 = state_77959__$1;
(statearr_77980_79692[(2)] = null);

(statearr_77980_79692[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77960 === (17))){
var inst_77925 = (state_77959[(7)]);
var inst_77929 = cljs.core.chunk_first(inst_77925);
var inst_77930 = cljs.core.chunk_rest(inst_77925);
var inst_77931 = cljs.core.count(inst_77929);
var inst_77911 = inst_77930;
var inst_77912 = inst_77929;
var inst_77913 = inst_77931;
var inst_77914 = (0);
var state_77959__$1 = (function (){var statearr_77981 = state_77959;
(statearr_77981[(9)] = inst_77913);

(statearr_77981[(10)] = inst_77911);

(statearr_77981[(11)] = inst_77914);

(statearr_77981[(12)] = inst_77912);

return statearr_77981;
})();
var statearr_77982_79694 = state_77959__$1;
(statearr_77982_79694[(2)] = null);

(statearr_77982_79694[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77960 === (3))){
var inst_77957 = (state_77959[(2)]);
var state_77959__$1 = state_77959;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77959__$1,inst_77957);
} else {
if((state_val_77960 === (12))){
var inst_77945 = (state_77959[(2)]);
var state_77959__$1 = state_77959;
var statearr_77984_79698 = state_77959__$1;
(statearr_77984_79698[(2)] = inst_77945);

(statearr_77984_79698[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77960 === (2))){
var state_77959__$1 = state_77959;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77959__$1,(4),in$);
} else {
if((state_val_77960 === (23))){
var inst_77953 = (state_77959[(2)]);
var state_77959__$1 = state_77959;
var statearr_77988_79699 = state_77959__$1;
(statearr_77988_79699[(2)] = inst_77953);

(statearr_77988_79699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77960 === (19))){
var inst_77940 = (state_77959[(2)]);
var state_77959__$1 = state_77959;
var statearr_77990_79700 = state_77959__$1;
(statearr_77990_79700[(2)] = inst_77940);

(statearr_77990_79700[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77960 === (11))){
var inst_77911 = (state_77959[(10)]);
var inst_77925 = (state_77959[(7)]);
var inst_77925__$1 = cljs.core.seq(inst_77911);
var state_77959__$1 = (function (){var statearr_77995 = state_77959;
(statearr_77995[(7)] = inst_77925__$1);

return statearr_77995;
})();
if(inst_77925__$1){
var statearr_77996_79701 = state_77959__$1;
(statearr_77996_79701[(1)] = (14));

} else {
var statearr_77997_79702 = state_77959__$1;
(statearr_77997_79702[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77960 === (9))){
var inst_77947 = (state_77959[(2)]);
var inst_77948 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_77959__$1 = (function (){var statearr_77999 = state_77959;
(statearr_77999[(15)] = inst_77947);

return statearr_77999;
})();
if(cljs.core.truth_(inst_77948)){
var statearr_78003_79706 = state_77959__$1;
(statearr_78003_79706[(1)] = (21));

} else {
var statearr_78004_79707 = state_77959__$1;
(statearr_78004_79707[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77960 === (5))){
var inst_77900 = cljs.core.async.close_BANG_(out);
var state_77959__$1 = state_77959;
var statearr_78005_79708 = state_77959__$1;
(statearr_78005_79708[(2)] = inst_77900);

(statearr_78005_79708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77960 === (14))){
var inst_77925 = (state_77959[(7)]);
var inst_77927 = cljs.core.chunked_seq_QMARK_(inst_77925);
var state_77959__$1 = state_77959;
if(inst_77927){
var statearr_78006_79709 = state_77959__$1;
(statearr_78006_79709[(1)] = (17));

} else {
var statearr_78007_79710 = state_77959__$1;
(statearr_78007_79710[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77960 === (16))){
var inst_77943 = (state_77959[(2)]);
var state_77959__$1 = state_77959;
var statearr_78008_79713 = state_77959__$1;
(statearr_78008_79713[(2)] = inst_77943);

(statearr_78008_79713[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77960 === (10))){
var inst_77914 = (state_77959[(11)]);
var inst_77912 = (state_77959[(12)]);
var inst_77919 = cljs.core._nth(inst_77912,inst_77914);
var state_77959__$1 = state_77959;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_77959__$1,(13),out,inst_77919);
} else {
if((state_val_77960 === (18))){
var inst_77925 = (state_77959[(7)]);
var inst_77934 = cljs.core.first(inst_77925);
var state_77959__$1 = state_77959;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_77959__$1,(20),out,inst_77934);
} else {
if((state_val_77960 === (8))){
var inst_77913 = (state_77959[(9)]);
var inst_77914 = (state_77959[(11)]);
var inst_77916 = (inst_77914 < inst_77913);
var inst_77917 = inst_77916;
var state_77959__$1 = state_77959;
if(cljs.core.truth_(inst_77917)){
var statearr_78009_79716 = state_77959__$1;
(statearr_78009_79716[(1)] = (10));

} else {
var statearr_78010_79717 = state_77959__$1;
(statearr_78010_79717[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__60141__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__60141__auto____0 = (function (){
var statearr_78011 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_78011[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__60141__auto__);

(statearr_78011[(1)] = (1));

return statearr_78011;
});
var cljs$core$async$mapcat_STAR__$_state_machine__60141__auto____1 = (function (state_77959){
while(true){
var ret_value__60142__auto__ = (function (){try{while(true){
var result__60143__auto__ = switch__60140__auto__(state_77959);
if(cljs.core.keyword_identical_QMARK_(result__60143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60143__auto__;
}
break;
}
}catch (e78012){var ex__60144__auto__ = e78012;
var statearr_78013_79724 = state_77959;
(statearr_78013_79724[(2)] = ex__60144__auto__);


if(cljs.core.seq((state_77959[(4)]))){
var statearr_78014_79725 = state_77959;
(statearr_78014_79725[(1)] = cljs.core.first((state_77959[(4)])));

} else {
throw ex__60144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79727 = state_77959;
state_77959 = G__79727;
continue;
} else {
return ret_value__60142__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__60141__auto__ = function(state_77959){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__60141__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__60141__auto____1.call(this,state_77959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__60141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__60141__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__60141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__60141__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__60141__auto__;
})()
})();
var state__60462__auto__ = (function (){var statearr_78015 = f__60461__auto__();
(statearr_78015[(6)] = c__60460__auto__);

return statearr_78015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60462__auto__);
}));

return c__60460__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__78017 = arguments.length;
switch (G__78017) {
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
var G__78019 = arguments.length;
switch (G__78019) {
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
var G__78021 = arguments.length;
switch (G__78021) {
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
var c__60460__auto___79731 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60461__auto__ = (function (){var switch__60140__auto__ = (function (state_78048){
var state_val_78049 = (state_78048[(1)]);
if((state_val_78049 === (7))){
var inst_78043 = (state_78048[(2)]);
var state_78048__$1 = state_78048;
var statearr_78051_79734 = state_78048__$1;
(statearr_78051_79734[(2)] = inst_78043);

(statearr_78051_79734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78049 === (1))){
var inst_78022 = null;
var state_78048__$1 = (function (){var statearr_78052 = state_78048;
(statearr_78052[(7)] = inst_78022);

return statearr_78052;
})();
var statearr_78053_79735 = state_78048__$1;
(statearr_78053_79735[(2)] = null);

(statearr_78053_79735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78049 === (4))){
var inst_78028 = (state_78048[(8)]);
var inst_78028__$1 = (state_78048[(2)]);
var inst_78029 = (inst_78028__$1 == null);
var inst_78030 = cljs.core.not(inst_78029);
var state_78048__$1 = (function (){var statearr_78055 = state_78048;
(statearr_78055[(8)] = inst_78028__$1);

return statearr_78055;
})();
if(inst_78030){
var statearr_78056_79736 = state_78048__$1;
(statearr_78056_79736[(1)] = (5));

} else {
var statearr_78057_79737 = state_78048__$1;
(statearr_78057_79737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78049 === (6))){
var state_78048__$1 = state_78048;
var statearr_78058_79738 = state_78048__$1;
(statearr_78058_79738[(2)] = null);

(statearr_78058_79738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78049 === (3))){
var inst_78045 = (state_78048[(2)]);
var inst_78046 = cljs.core.async.close_BANG_(out);
var state_78048__$1 = (function (){var statearr_78059 = state_78048;
(statearr_78059[(9)] = inst_78045);

return statearr_78059;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_78048__$1,inst_78046);
} else {
if((state_val_78049 === (2))){
var state_78048__$1 = state_78048;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78048__$1,(4),ch);
} else {
if((state_val_78049 === (11))){
var inst_78028 = (state_78048[(8)]);
var inst_78037 = (state_78048[(2)]);
var inst_78022 = inst_78028;
var state_78048__$1 = (function (){var statearr_78060 = state_78048;
(statearr_78060[(7)] = inst_78022);

(statearr_78060[(10)] = inst_78037);

return statearr_78060;
})();
var statearr_78061_79746 = state_78048__$1;
(statearr_78061_79746[(2)] = null);

(statearr_78061_79746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78049 === (9))){
var inst_78028 = (state_78048[(8)]);
var state_78048__$1 = state_78048;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_78048__$1,(11),out,inst_78028);
} else {
if((state_val_78049 === (5))){
var inst_78022 = (state_78048[(7)]);
var inst_78028 = (state_78048[(8)]);
var inst_78032 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_78028,inst_78022);
var state_78048__$1 = state_78048;
if(inst_78032){
var statearr_78064_79751 = state_78048__$1;
(statearr_78064_79751[(1)] = (8));

} else {
var statearr_78065_79753 = state_78048__$1;
(statearr_78065_79753[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78049 === (10))){
var inst_78040 = (state_78048[(2)]);
var state_78048__$1 = state_78048;
var statearr_78066_79756 = state_78048__$1;
(statearr_78066_79756[(2)] = inst_78040);

(statearr_78066_79756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78049 === (8))){
var inst_78022 = (state_78048[(7)]);
var tmp78062 = inst_78022;
var inst_78022__$1 = tmp78062;
var state_78048__$1 = (function (){var statearr_78067 = state_78048;
(statearr_78067[(7)] = inst_78022__$1);

return statearr_78067;
})();
var statearr_78068_79757 = state_78048__$1;
(statearr_78068_79757[(2)] = null);

(statearr_78068_79757[(1)] = (2));


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
var cljs$core$async$state_machine__60141__auto__ = null;
var cljs$core$async$state_machine__60141__auto____0 = (function (){
var statearr_78069 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_78069[(0)] = cljs$core$async$state_machine__60141__auto__);

(statearr_78069[(1)] = (1));

return statearr_78069;
});
var cljs$core$async$state_machine__60141__auto____1 = (function (state_78048){
while(true){
var ret_value__60142__auto__ = (function (){try{while(true){
var result__60143__auto__ = switch__60140__auto__(state_78048);
if(cljs.core.keyword_identical_QMARK_(result__60143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60143__auto__;
}
break;
}
}catch (e78070){var ex__60144__auto__ = e78070;
var statearr_78071_79760 = state_78048;
(statearr_78071_79760[(2)] = ex__60144__auto__);


if(cljs.core.seq((state_78048[(4)]))){
var statearr_78072_79762 = state_78048;
(statearr_78072_79762[(1)] = cljs.core.first((state_78048[(4)])));

} else {
throw ex__60144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79766 = state_78048;
state_78048 = G__79766;
continue;
} else {
return ret_value__60142__auto__;
}
break;
}
});
cljs$core$async$state_machine__60141__auto__ = function(state_78048){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60141__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60141__auto____1.call(this,state_78048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60141__auto____0;
cljs$core$async$state_machine__60141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60141__auto____1;
return cljs$core$async$state_machine__60141__auto__;
})()
})();
var state__60462__auto__ = (function (){var statearr_78073 = f__60461__auto__();
(statearr_78073[(6)] = c__60460__auto___79731);

return statearr_78073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60462__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__78077 = arguments.length;
switch (G__78077) {
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
var c__60460__auto___79770 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60461__auto__ = (function (){var switch__60140__auto__ = (function (state_78115){
var state_val_78116 = (state_78115[(1)]);
if((state_val_78116 === (7))){
var inst_78111 = (state_78115[(2)]);
var state_78115__$1 = state_78115;
var statearr_78117_79775 = state_78115__$1;
(statearr_78117_79775[(2)] = inst_78111);

(statearr_78117_79775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78116 === (1))){
var inst_78078 = (new Array(n));
var inst_78079 = inst_78078;
var inst_78080 = (0);
var state_78115__$1 = (function (){var statearr_78119 = state_78115;
(statearr_78119[(7)] = inst_78080);

(statearr_78119[(8)] = inst_78079);

return statearr_78119;
})();
var statearr_78121_79776 = state_78115__$1;
(statearr_78121_79776[(2)] = null);

(statearr_78121_79776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78116 === (4))){
var inst_78083 = (state_78115[(9)]);
var inst_78083__$1 = (state_78115[(2)]);
var inst_78084 = (inst_78083__$1 == null);
var inst_78085 = cljs.core.not(inst_78084);
var state_78115__$1 = (function (){var statearr_78122 = state_78115;
(statearr_78122[(9)] = inst_78083__$1);

return statearr_78122;
})();
if(inst_78085){
var statearr_78123_79778 = state_78115__$1;
(statearr_78123_79778[(1)] = (5));

} else {
var statearr_78124_79779 = state_78115__$1;
(statearr_78124_79779[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78116 === (15))){
var inst_78105 = (state_78115[(2)]);
var state_78115__$1 = state_78115;
var statearr_78125_79781 = state_78115__$1;
(statearr_78125_79781[(2)] = inst_78105);

(statearr_78125_79781[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78116 === (13))){
var state_78115__$1 = state_78115;
var statearr_78126_79782 = state_78115__$1;
(statearr_78126_79782[(2)] = null);

(statearr_78126_79782[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78116 === (6))){
var inst_78080 = (state_78115[(7)]);
var inst_78101 = (inst_78080 > (0));
var state_78115__$1 = state_78115;
if(cljs.core.truth_(inst_78101)){
var statearr_78127_79784 = state_78115__$1;
(statearr_78127_79784[(1)] = (12));

} else {
var statearr_78128_79789 = state_78115__$1;
(statearr_78128_79789[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78116 === (3))){
var inst_78113 = (state_78115[(2)]);
var state_78115__$1 = state_78115;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78115__$1,inst_78113);
} else {
if((state_val_78116 === (12))){
var inst_78079 = (state_78115[(8)]);
var inst_78103 = cljs.core.vec(inst_78079);
var state_78115__$1 = state_78115;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_78115__$1,(15),out,inst_78103);
} else {
if((state_val_78116 === (2))){
var state_78115__$1 = state_78115;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78115__$1,(4),ch);
} else {
if((state_val_78116 === (11))){
var inst_78095 = (state_78115[(2)]);
var inst_78096 = (new Array(n));
var inst_78079 = inst_78096;
var inst_78080 = (0);
var state_78115__$1 = (function (){var statearr_78129 = state_78115;
(statearr_78129[(7)] = inst_78080);

(statearr_78129[(10)] = inst_78095);

(statearr_78129[(8)] = inst_78079);

return statearr_78129;
})();
var statearr_78130_79806 = state_78115__$1;
(statearr_78130_79806[(2)] = null);

(statearr_78130_79806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78116 === (9))){
var inst_78079 = (state_78115[(8)]);
var inst_78093 = cljs.core.vec(inst_78079);
var state_78115__$1 = state_78115;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_78115__$1,(11),out,inst_78093);
} else {
if((state_val_78116 === (5))){
var inst_78080 = (state_78115[(7)]);
var inst_78088 = (state_78115[(11)]);
var inst_78079 = (state_78115[(8)]);
var inst_78083 = (state_78115[(9)]);
var inst_78087 = (inst_78079[inst_78080] = inst_78083);
var inst_78088__$1 = (inst_78080 + (1));
var inst_78089 = (inst_78088__$1 < n);
var state_78115__$1 = (function (){var statearr_78132 = state_78115;
(statearr_78132[(12)] = inst_78087);

(statearr_78132[(11)] = inst_78088__$1);

return statearr_78132;
})();
if(cljs.core.truth_(inst_78089)){
var statearr_78133_79812 = state_78115__$1;
(statearr_78133_79812[(1)] = (8));

} else {
var statearr_78134_79813 = state_78115__$1;
(statearr_78134_79813[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78116 === (14))){
var inst_78108 = (state_78115[(2)]);
var inst_78109 = cljs.core.async.close_BANG_(out);
var state_78115__$1 = (function (){var statearr_78136 = state_78115;
(statearr_78136[(13)] = inst_78108);

return statearr_78136;
})();
var statearr_78137_79817 = state_78115__$1;
(statearr_78137_79817[(2)] = inst_78109);

(statearr_78137_79817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78116 === (10))){
var inst_78099 = (state_78115[(2)]);
var state_78115__$1 = state_78115;
var statearr_78138_79818 = state_78115__$1;
(statearr_78138_79818[(2)] = inst_78099);

(statearr_78138_79818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78116 === (8))){
var inst_78088 = (state_78115[(11)]);
var inst_78079 = (state_78115[(8)]);
var tmp78135 = inst_78079;
var inst_78079__$1 = tmp78135;
var inst_78080 = inst_78088;
var state_78115__$1 = (function (){var statearr_78139 = state_78115;
(statearr_78139[(7)] = inst_78080);

(statearr_78139[(8)] = inst_78079__$1);

return statearr_78139;
})();
var statearr_78140_79819 = state_78115__$1;
(statearr_78140_79819[(2)] = null);

(statearr_78140_79819[(1)] = (2));


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
var cljs$core$async$state_machine__60141__auto__ = null;
var cljs$core$async$state_machine__60141__auto____0 = (function (){
var statearr_78141 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_78141[(0)] = cljs$core$async$state_machine__60141__auto__);

(statearr_78141[(1)] = (1));

return statearr_78141;
});
var cljs$core$async$state_machine__60141__auto____1 = (function (state_78115){
while(true){
var ret_value__60142__auto__ = (function (){try{while(true){
var result__60143__auto__ = switch__60140__auto__(state_78115);
if(cljs.core.keyword_identical_QMARK_(result__60143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60143__auto__;
}
break;
}
}catch (e78142){var ex__60144__auto__ = e78142;
var statearr_78143_79821 = state_78115;
(statearr_78143_79821[(2)] = ex__60144__auto__);


if(cljs.core.seq((state_78115[(4)]))){
var statearr_78144_79822 = state_78115;
(statearr_78144_79822[(1)] = cljs.core.first((state_78115[(4)])));

} else {
throw ex__60144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79825 = state_78115;
state_78115 = G__79825;
continue;
} else {
return ret_value__60142__auto__;
}
break;
}
});
cljs$core$async$state_machine__60141__auto__ = function(state_78115){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60141__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60141__auto____1.call(this,state_78115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60141__auto____0;
cljs$core$async$state_machine__60141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60141__auto____1;
return cljs$core$async$state_machine__60141__auto__;
})()
})();
var state__60462__auto__ = (function (){var statearr_78145 = f__60461__auto__();
(statearr_78145[(6)] = c__60460__auto___79770);

return statearr_78145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60462__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__78147 = arguments.length;
switch (G__78147) {
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
var c__60460__auto___79833 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__60461__auto__ = (function (){var switch__60140__auto__ = (function (state_78194){
var state_val_78195 = (state_78194[(1)]);
if((state_val_78195 === (7))){
var inst_78190 = (state_78194[(2)]);
var state_78194__$1 = state_78194;
var statearr_78196_79834 = state_78194__$1;
(statearr_78196_79834[(2)] = inst_78190);

(statearr_78196_79834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78195 === (1))){
var inst_78153 = [];
var inst_78154 = inst_78153;
var inst_78155 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_78194__$1 = (function (){var statearr_78197 = state_78194;
(statearr_78197[(7)] = inst_78155);

(statearr_78197[(8)] = inst_78154);

return statearr_78197;
})();
var statearr_78198_79835 = state_78194__$1;
(statearr_78198_79835[(2)] = null);

(statearr_78198_79835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78195 === (4))){
var inst_78158 = (state_78194[(9)]);
var inst_78158__$1 = (state_78194[(2)]);
var inst_78159 = (inst_78158__$1 == null);
var inst_78160 = cljs.core.not(inst_78159);
var state_78194__$1 = (function (){var statearr_78199 = state_78194;
(statearr_78199[(9)] = inst_78158__$1);

return statearr_78199;
})();
if(inst_78160){
var statearr_78200_79836 = state_78194__$1;
(statearr_78200_79836[(1)] = (5));

} else {
var statearr_78201_79839 = state_78194__$1;
(statearr_78201_79839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78195 === (15))){
var inst_78184 = (state_78194[(2)]);
var state_78194__$1 = state_78194;
var statearr_78202_79842 = state_78194__$1;
(statearr_78202_79842[(2)] = inst_78184);

(statearr_78202_79842[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78195 === (13))){
var state_78194__$1 = state_78194;
var statearr_78204_79844 = state_78194__$1;
(statearr_78204_79844[(2)] = null);

(statearr_78204_79844[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78195 === (6))){
var inst_78154 = (state_78194[(8)]);
var inst_78179 = inst_78154.length;
var inst_78180 = (inst_78179 > (0));
var state_78194__$1 = state_78194;
if(cljs.core.truth_(inst_78180)){
var statearr_78206_79845 = state_78194__$1;
(statearr_78206_79845[(1)] = (12));

} else {
var statearr_78207_79846 = state_78194__$1;
(statearr_78207_79846[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78195 === (3))){
var inst_78192 = (state_78194[(2)]);
var state_78194__$1 = state_78194;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78194__$1,inst_78192);
} else {
if((state_val_78195 === (12))){
var inst_78154 = (state_78194[(8)]);
var inst_78182 = cljs.core.vec(inst_78154);
var state_78194__$1 = state_78194;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_78194__$1,(15),out,inst_78182);
} else {
if((state_val_78195 === (2))){
var state_78194__$1 = state_78194;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78194__$1,(4),ch);
} else {
if((state_val_78195 === (11))){
var inst_78158 = (state_78194[(9)]);
var inst_78162 = (state_78194[(10)]);
var inst_78172 = (state_78194[(2)]);
var inst_78173 = [];
var inst_78174 = inst_78173.push(inst_78158);
var inst_78154 = inst_78173;
var inst_78155 = inst_78162;
var state_78194__$1 = (function (){var statearr_78208 = state_78194;
(statearr_78208[(7)] = inst_78155);

(statearr_78208[(8)] = inst_78154);

(statearr_78208[(11)] = inst_78174);

(statearr_78208[(12)] = inst_78172);

return statearr_78208;
})();
var statearr_78209_79853 = state_78194__$1;
(statearr_78209_79853[(2)] = null);

(statearr_78209_79853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78195 === (9))){
var inst_78154 = (state_78194[(8)]);
var inst_78170 = cljs.core.vec(inst_78154);
var state_78194__$1 = state_78194;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_78194__$1,(11),out,inst_78170);
} else {
if((state_val_78195 === (5))){
var inst_78155 = (state_78194[(7)]);
var inst_78158 = (state_78194[(9)]);
var inst_78162 = (state_78194[(10)]);
var inst_78162__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_78158) : f.call(null,inst_78158));
var inst_78163 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_78162__$1,inst_78155);
var inst_78164 = cljs.core.keyword_identical_QMARK_(inst_78155,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_78165 = ((inst_78163) || (inst_78164));
var state_78194__$1 = (function (){var statearr_78210 = state_78194;
(statearr_78210[(10)] = inst_78162__$1);

return statearr_78210;
})();
if(cljs.core.truth_(inst_78165)){
var statearr_78211_79868 = state_78194__$1;
(statearr_78211_79868[(1)] = (8));

} else {
var statearr_78212_79869 = state_78194__$1;
(statearr_78212_79869[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78195 === (14))){
var inst_78187 = (state_78194[(2)]);
var inst_78188 = cljs.core.async.close_BANG_(out);
var state_78194__$1 = (function (){var statearr_78214 = state_78194;
(statearr_78214[(13)] = inst_78187);

return statearr_78214;
})();
var statearr_78215_79870 = state_78194__$1;
(statearr_78215_79870[(2)] = inst_78188);

(statearr_78215_79870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78195 === (10))){
var inst_78177 = (state_78194[(2)]);
var state_78194__$1 = state_78194;
var statearr_78216_79871 = state_78194__$1;
(statearr_78216_79871[(2)] = inst_78177);

(statearr_78216_79871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78195 === (8))){
var inst_78158 = (state_78194[(9)]);
var inst_78154 = (state_78194[(8)]);
var inst_78162 = (state_78194[(10)]);
var inst_78167 = inst_78154.push(inst_78158);
var tmp78213 = inst_78154;
var inst_78154__$1 = tmp78213;
var inst_78155 = inst_78162;
var state_78194__$1 = (function (){var statearr_78217 = state_78194;
(statearr_78217[(7)] = inst_78155);

(statearr_78217[(14)] = inst_78167);

(statearr_78217[(8)] = inst_78154__$1);

return statearr_78217;
})();
var statearr_78218_79878 = state_78194__$1;
(statearr_78218_79878[(2)] = null);

(statearr_78218_79878[(1)] = (2));


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
var cljs$core$async$state_machine__60141__auto__ = null;
var cljs$core$async$state_machine__60141__auto____0 = (function (){
var statearr_78219 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_78219[(0)] = cljs$core$async$state_machine__60141__auto__);

(statearr_78219[(1)] = (1));

return statearr_78219;
});
var cljs$core$async$state_machine__60141__auto____1 = (function (state_78194){
while(true){
var ret_value__60142__auto__ = (function (){try{while(true){
var result__60143__auto__ = switch__60140__auto__(state_78194);
if(cljs.core.keyword_identical_QMARK_(result__60143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60143__auto__;
}
break;
}
}catch (e78220){var ex__60144__auto__ = e78220;
var statearr_78221_79882 = state_78194;
(statearr_78221_79882[(2)] = ex__60144__auto__);


if(cljs.core.seq((state_78194[(4)]))){
var statearr_78223_79883 = state_78194;
(statearr_78223_79883[(1)] = cljs.core.first((state_78194[(4)])));

} else {
throw ex__60144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79885 = state_78194;
state_78194 = G__79885;
continue;
} else {
return ret_value__60142__auto__;
}
break;
}
});
cljs$core$async$state_machine__60141__auto__ = function(state_78194){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60141__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60141__auto____1.call(this,state_78194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60141__auto____0;
cljs$core$async$state_machine__60141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60141__auto____1;
return cljs$core$async$state_machine__60141__auto__;
})()
})();
var state__60462__auto__ = (function (){var statearr_78225 = f__60461__auto__();
(statearr_78225[(6)] = c__60460__auto___79833);

return statearr_78225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60462__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
