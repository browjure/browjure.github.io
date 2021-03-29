goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__72687 = arguments.length;
switch (G__72687) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async72688 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async72688 = (function (f,blockable,meta72689){
this.f = f;
this.blockable = blockable;
this.meta72689 = meta72689;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async72688.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72690,meta72689__$1){
var self__ = this;
var _72690__$1 = this;
return (new cljs.core.async.t_cljs$core$async72688(self__.f,self__.blockable,meta72689__$1));
}));

(cljs.core.async.t_cljs$core$async72688.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72690){
var self__ = this;
var _72690__$1 = this;
return self__.meta72689;
}));

(cljs.core.async.t_cljs$core$async72688.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72688.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async72688.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async72688.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async72688.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta72689","meta72689",1615085439,null)], null);
}));

(cljs.core.async.t_cljs$core$async72688.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async72688.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async72688");

(cljs.core.async.t_cljs$core$async72688.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async72688");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async72688.
 */
cljs.core.async.__GT_t_cljs$core$async72688 = (function cljs$core$async$__GT_t_cljs$core$async72688(f__$1,blockable__$1,meta72689){
return (new cljs.core.async.t_cljs$core$async72688(f__$1,blockable__$1,meta72689));
});

}

return (new cljs.core.async.t_cljs$core$async72688(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__72709 = arguments.length;
switch (G__72709) {
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
var G__72719 = arguments.length;
switch (G__72719) {
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
var G__72725 = arguments.length;
switch (G__72725) {
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
var val_75848 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_75848) : fn1.call(null,val_75848));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_75848) : fn1.call(null,val_75848));
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
var G__72739 = arguments.length;
switch (G__72739) {
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
var n__4613__auto___75861 = n;
var x_75863 = (0);
while(true){
if((x_75863 < n__4613__auto___75861)){
(a[x_75863] = x_75863);

var G__75865 = (x_75863 + (1));
x_75863 = G__75865;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async72751 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async72751 = (function (flag,meta72752){
this.flag = flag;
this.meta72752 = meta72752;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async72751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72753,meta72752__$1){
var self__ = this;
var _72753__$1 = this;
return (new cljs.core.async.t_cljs$core$async72751(self__.flag,meta72752__$1));
}));

(cljs.core.async.t_cljs$core$async72751.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72753){
var self__ = this;
var _72753__$1 = this;
return self__.meta72752;
}));

(cljs.core.async.t_cljs$core$async72751.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72751.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async72751.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async72751.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async72751.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta72752","meta72752",-790261433,null)], null);
}));

(cljs.core.async.t_cljs$core$async72751.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async72751.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async72751");

(cljs.core.async.t_cljs$core$async72751.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async72751");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async72751.
 */
cljs.core.async.__GT_t_cljs$core$async72751 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async72751(flag__$1,meta72752){
return (new cljs.core.async.t_cljs$core$async72751(flag__$1,meta72752));
});

}

return (new cljs.core.async.t_cljs$core$async72751(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async72766 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async72766 = (function (flag,cb,meta72767){
this.flag = flag;
this.cb = cb;
this.meta72767 = meta72767;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async72766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72768,meta72767__$1){
var self__ = this;
var _72768__$1 = this;
return (new cljs.core.async.t_cljs$core$async72766(self__.flag,self__.cb,meta72767__$1));
}));

(cljs.core.async.t_cljs$core$async72766.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72768){
var self__ = this;
var _72768__$1 = this;
return self__.meta72767;
}));

(cljs.core.async.t_cljs$core$async72766.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72766.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async72766.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async72766.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async72766.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta72767","meta72767",-1485574116,null)], null);
}));

(cljs.core.async.t_cljs$core$async72766.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async72766.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async72766");

(cljs.core.async.t_cljs$core$async72766.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async72766");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async72766.
 */
cljs.core.async.__GT_t_cljs$core$async72766 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async72766(flag__$1,cb__$1,meta72767){
return (new cljs.core.async.t_cljs$core$async72766(flag__$1,cb__$1,meta72767));
});

}

return (new cljs.core.async.t_cljs$core$async72766(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__72771_SHARP_){
var G__72777 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__72771_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__72777) : fret.call(null,G__72777));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__72772_SHARP_){
var G__72778 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__72772_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__72778) : fret.call(null,G__72778));
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
var G__75905 = (i + (1));
i = G__75905;
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
var len__4736__auto___75912 = arguments.length;
var i__4737__auto___75913 = (0);
while(true){
if((i__4737__auto___75913 < len__4736__auto___75912)){
args__4742__auto__.push((arguments[i__4737__auto___75913]));

var G__75914 = (i__4737__auto___75913 + (1));
i__4737__auto___75913 = G__75914;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__72782){
var map__72783 = p__72782;
var map__72783__$1 = (((((!((map__72783 == null))))?(((((map__72783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72783):map__72783);
var opts = map__72783__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq72780){
var G__72781 = cljs.core.first(seq72780);
var seq72780__$1 = cljs.core.next(seq72780);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72781,seq72780__$1);
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
var G__72802 = arguments.length;
switch (G__72802) {
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
var c__72601__auto___75926 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72602__auto__ = (function (){var switch__72552__auto__ = (function (state_72869){
var state_val_72871 = (state_72869[(1)]);
if((state_val_72871 === (7))){
var inst_72860 = (state_72869[(2)]);
var state_72869__$1 = state_72869;
var statearr_72881_75930 = state_72869__$1;
(statearr_72881_75930[(2)] = inst_72860);

(statearr_72881_75930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72871 === (1))){
var state_72869__$1 = state_72869;
var statearr_72887_75933 = state_72869__$1;
(statearr_72887_75933[(2)] = null);

(statearr_72887_75933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72871 === (4))){
var inst_72841 = (state_72869[(7)]);
var inst_72841__$1 = (state_72869[(2)]);
var inst_72842 = (inst_72841__$1 == null);
var state_72869__$1 = (function (){var statearr_72896 = state_72869;
(statearr_72896[(7)] = inst_72841__$1);

return statearr_72896;
})();
if(cljs.core.truth_(inst_72842)){
var statearr_72901_75934 = state_72869__$1;
(statearr_72901_75934[(1)] = (5));

} else {
var statearr_72902_75935 = state_72869__$1;
(statearr_72902_75935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72871 === (13))){
var state_72869__$1 = state_72869;
var statearr_72903_75936 = state_72869__$1;
(statearr_72903_75936[(2)] = null);

(statearr_72903_75936[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72871 === (6))){
var inst_72841 = (state_72869[(7)]);
var state_72869__$1 = state_72869;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72869__$1,(11),to,inst_72841);
} else {
if((state_val_72871 === (3))){
var inst_72862 = (state_72869[(2)]);
var state_72869__$1 = state_72869;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72869__$1,inst_72862);
} else {
if((state_val_72871 === (12))){
var state_72869__$1 = state_72869;
var statearr_72905_75946 = state_72869__$1;
(statearr_72905_75946[(2)] = null);

(statearr_72905_75946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72871 === (2))){
var state_72869__$1 = state_72869;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72869__$1,(4),from);
} else {
if((state_val_72871 === (11))){
var inst_72853 = (state_72869[(2)]);
var state_72869__$1 = state_72869;
if(cljs.core.truth_(inst_72853)){
var statearr_72910_75948 = state_72869__$1;
(statearr_72910_75948[(1)] = (12));

} else {
var statearr_72911_75949 = state_72869__$1;
(statearr_72911_75949[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72871 === (9))){
var state_72869__$1 = state_72869;
var statearr_72917_75950 = state_72869__$1;
(statearr_72917_75950[(2)] = null);

(statearr_72917_75950[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72871 === (5))){
var state_72869__$1 = state_72869;
if(cljs.core.truth_(close_QMARK_)){
var statearr_72921_75951 = state_72869__$1;
(statearr_72921_75951[(1)] = (8));

} else {
var statearr_72923_75954 = state_72869__$1;
(statearr_72923_75954[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72871 === (14))){
var inst_72858 = (state_72869[(2)]);
var state_72869__$1 = state_72869;
var statearr_72930_75957 = state_72869__$1;
(statearr_72930_75957[(2)] = inst_72858);

(statearr_72930_75957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72871 === (10))){
var inst_72850 = (state_72869[(2)]);
var state_72869__$1 = state_72869;
var statearr_72935_75958 = state_72869__$1;
(statearr_72935_75958[(2)] = inst_72850);

(statearr_72935_75958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72871 === (8))){
var inst_72846 = cljs.core.async.close_BANG_(to);
var state_72869__$1 = state_72869;
var statearr_72936_75960 = state_72869__$1;
(statearr_72936_75960[(2)] = inst_72846);

(statearr_72936_75960[(1)] = (10));


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
var cljs$core$async$state_machine__72553__auto__ = null;
var cljs$core$async$state_machine__72553__auto____0 = (function (){
var statearr_72937 = [null,null,null,null,null,null,null,null];
(statearr_72937[(0)] = cljs$core$async$state_machine__72553__auto__);

(statearr_72937[(1)] = (1));

return statearr_72937;
});
var cljs$core$async$state_machine__72553__auto____1 = (function (state_72869){
while(true){
var ret_value__72554__auto__ = (function (){try{while(true){
var result__72555__auto__ = switch__72552__auto__(state_72869);
if(cljs.core.keyword_identical_QMARK_(result__72555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__72555__auto__;
}
break;
}
}catch (e72942){var ex__72556__auto__ = e72942;
var statearr_72943_75963 = state_72869;
(statearr_72943_75963[(2)] = ex__72556__auto__);


if(cljs.core.seq((state_72869[(4)]))){
var statearr_72950_75965 = state_72869;
(statearr_72950_75965[(1)] = cljs.core.first((state_72869[(4)])));

} else {
throw ex__72556__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__72554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75966 = state_72869;
state_72869 = G__75966;
continue;
} else {
return ret_value__72554__auto__;
}
break;
}
});
cljs$core$async$state_machine__72553__auto__ = function(state_72869){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__72553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__72553__auto____1.call(this,state_72869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__72553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__72553__auto____0;
cljs$core$async$state_machine__72553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__72553__auto____1;
return cljs$core$async$state_machine__72553__auto__;
})()
})();
var state__72603__auto__ = (function (){var statearr_72965 = f__72602__auto__();
(statearr_72965[(6)] = c__72601__auto___75926);

return statearr_72965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72603__auto__);
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
var process = (function (p__72970){
var vec__72971 = p__72970;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72971,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72971,(1),null);
var job = vec__72971;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__72601__auto___75971 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72602__auto__ = (function (){var switch__72552__auto__ = (function (state_72982){
var state_val_72983 = (state_72982[(1)]);
if((state_val_72983 === (1))){
var state_72982__$1 = state_72982;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72982__$1,(2),res,v);
} else {
if((state_val_72983 === (2))){
var inst_72977 = (state_72982[(2)]);
var inst_72979 = cljs.core.async.close_BANG_(res);
var state_72982__$1 = (function (){var statearr_72984 = state_72982;
(statearr_72984[(7)] = inst_72977);

return statearr_72984;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_72982__$1,inst_72979);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__72553__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__72553__auto____0 = (function (){
var statearr_72985 = [null,null,null,null,null,null,null,null];
(statearr_72985[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__72553__auto__);

(statearr_72985[(1)] = (1));

return statearr_72985;
});
var cljs$core$async$pipeline_STAR__$_state_machine__72553__auto____1 = (function (state_72982){
while(true){
var ret_value__72554__auto__ = (function (){try{while(true){
var result__72555__auto__ = switch__72552__auto__(state_72982);
if(cljs.core.keyword_identical_QMARK_(result__72555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__72555__auto__;
}
break;
}
}catch (e72987){var ex__72556__auto__ = e72987;
var statearr_72988_75979 = state_72982;
(statearr_72988_75979[(2)] = ex__72556__auto__);


if(cljs.core.seq((state_72982[(4)]))){
var statearr_72990_75980 = state_72982;
(statearr_72990_75980[(1)] = cljs.core.first((state_72982[(4)])));

} else {
throw ex__72556__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__72554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75981 = state_72982;
state_72982 = G__75981;
continue;
} else {
return ret_value__72554__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__72553__auto__ = function(state_72982){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__72553__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__72553__auto____1.call(this,state_72982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__72553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__72553__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__72553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__72553__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__72553__auto__;
})()
})();
var state__72603__auto__ = (function (){var statearr_72992 = f__72602__auto__();
(statearr_72992[(6)] = c__72601__auto___75971);

return statearr_72992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72603__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__72993){
var vec__72994 = p__72993;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72994,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72994,(1),null);
var job = vec__72994;
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
var n__4613__auto___75985 = n;
var __75986 = (0);
while(true){
if((__75986 < n__4613__auto___75985)){
var G__73001_75987 = type;
var G__73001_75988__$1 = (((G__73001_75987 instanceof cljs.core.Keyword))?G__73001_75987.fqn:null);
switch (G__73001_75988__$1) {
case "compute":
var c__72601__auto___75991 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__75986,c__72601__auto___75991,G__73001_75987,G__73001_75988__$1,n__4613__auto___75985,jobs,results,process,async){
return (function (){
var f__72602__auto__ = (function (){var switch__72552__auto__ = ((function (__75986,c__72601__auto___75991,G__73001_75987,G__73001_75988__$1,n__4613__auto___75985,jobs,results,process,async){
return (function (state_73021){
var state_val_73022 = (state_73021[(1)]);
if((state_val_73022 === (1))){
var state_73021__$1 = state_73021;
var statearr_73027_75992 = state_73021__$1;
(statearr_73027_75992[(2)] = null);

(statearr_73027_75992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73022 === (2))){
var state_73021__$1 = state_73021;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73021__$1,(4),jobs);
} else {
if((state_val_73022 === (3))){
var inst_73019 = (state_73021[(2)]);
var state_73021__$1 = state_73021;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73021__$1,inst_73019);
} else {
if((state_val_73022 === (4))){
var inst_73011 = (state_73021[(2)]);
var inst_73012 = process(inst_73011);
var state_73021__$1 = state_73021;
if(cljs.core.truth_(inst_73012)){
var statearr_73029_75997 = state_73021__$1;
(statearr_73029_75997[(1)] = (5));

} else {
var statearr_73030_76000 = state_73021__$1;
(statearr_73030_76000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73022 === (5))){
var state_73021__$1 = state_73021;
var statearr_73031_76002 = state_73021__$1;
(statearr_73031_76002[(2)] = null);

(statearr_73031_76002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73022 === (6))){
var state_73021__$1 = state_73021;
var statearr_73032_76003 = state_73021__$1;
(statearr_73032_76003[(2)] = null);

(statearr_73032_76003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73022 === (7))){
var inst_73017 = (state_73021[(2)]);
var state_73021__$1 = state_73021;
var statearr_73033_76005 = state_73021__$1;
(statearr_73033_76005[(2)] = inst_73017);

(statearr_73033_76005[(1)] = (3));


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
});})(__75986,c__72601__auto___75991,G__73001_75987,G__73001_75988__$1,n__4613__auto___75985,jobs,results,process,async))
;
return ((function (__75986,switch__72552__auto__,c__72601__auto___75991,G__73001_75987,G__73001_75988__$1,n__4613__auto___75985,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__72553__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__72553__auto____0 = (function (){
var statearr_73034 = [null,null,null,null,null,null,null];
(statearr_73034[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__72553__auto__);

(statearr_73034[(1)] = (1));

return statearr_73034;
});
var cljs$core$async$pipeline_STAR__$_state_machine__72553__auto____1 = (function (state_73021){
while(true){
var ret_value__72554__auto__ = (function (){try{while(true){
var result__72555__auto__ = switch__72552__auto__(state_73021);
if(cljs.core.keyword_identical_QMARK_(result__72555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__72555__auto__;
}
break;
}
}catch (e73035){var ex__72556__auto__ = e73035;
var statearr_73036_76008 = state_73021;
(statearr_73036_76008[(2)] = ex__72556__auto__);


if(cljs.core.seq((state_73021[(4)]))){
var statearr_73037_76010 = state_73021;
(statearr_73037_76010[(1)] = cljs.core.first((state_73021[(4)])));

} else {
throw ex__72556__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__72554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76012 = state_73021;
state_73021 = G__76012;
continue;
} else {
return ret_value__72554__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__72553__auto__ = function(state_73021){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__72553__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__72553__auto____1.call(this,state_73021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__72553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__72553__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__72553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__72553__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__72553__auto__;
})()
;})(__75986,switch__72552__auto__,c__72601__auto___75991,G__73001_75987,G__73001_75988__$1,n__4613__auto___75985,jobs,results,process,async))
})();
var state__72603__auto__ = (function (){var statearr_73038 = f__72602__auto__();
(statearr_73038[(6)] = c__72601__auto___75991);

return statearr_73038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72603__auto__);
});})(__75986,c__72601__auto___75991,G__73001_75987,G__73001_75988__$1,n__4613__auto___75985,jobs,results,process,async))
);


break;
case "async":
var c__72601__auto___76017 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__75986,c__72601__auto___76017,G__73001_75987,G__73001_75988__$1,n__4613__auto___75985,jobs,results,process,async){
return (function (){
var f__72602__auto__ = (function (){var switch__72552__auto__ = ((function (__75986,c__72601__auto___76017,G__73001_75987,G__73001_75988__$1,n__4613__auto___75985,jobs,results,process,async){
return (function (state_73053){
var state_val_73054 = (state_73053[(1)]);
if((state_val_73054 === (1))){
var state_73053__$1 = state_73053;
var statearr_73055_76022 = state_73053__$1;
(statearr_73055_76022[(2)] = null);

(statearr_73055_76022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73054 === (2))){
var state_73053__$1 = state_73053;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73053__$1,(4),jobs);
} else {
if((state_val_73054 === (3))){
var inst_73051 = (state_73053[(2)]);
var state_73053__$1 = state_73053;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73053__$1,inst_73051);
} else {
if((state_val_73054 === (4))){
var inst_73041 = (state_73053[(2)]);
var inst_73043 = async(inst_73041);
var state_73053__$1 = state_73053;
if(cljs.core.truth_(inst_73043)){
var statearr_73058_76031 = state_73053__$1;
(statearr_73058_76031[(1)] = (5));

} else {
var statearr_73059_76033 = state_73053__$1;
(statearr_73059_76033[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73054 === (5))){
var state_73053__$1 = state_73053;
var statearr_73060_76035 = state_73053__$1;
(statearr_73060_76035[(2)] = null);

(statearr_73060_76035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73054 === (6))){
var state_73053__$1 = state_73053;
var statearr_73061_76042 = state_73053__$1;
(statearr_73061_76042[(2)] = null);

(statearr_73061_76042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73054 === (7))){
var inst_73048 = (state_73053[(2)]);
var state_73053__$1 = state_73053;
var statearr_73062_76043 = state_73053__$1;
(statearr_73062_76043[(2)] = inst_73048);

(statearr_73062_76043[(1)] = (3));


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
});})(__75986,c__72601__auto___76017,G__73001_75987,G__73001_75988__$1,n__4613__auto___75985,jobs,results,process,async))
;
return ((function (__75986,switch__72552__auto__,c__72601__auto___76017,G__73001_75987,G__73001_75988__$1,n__4613__auto___75985,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__72553__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__72553__auto____0 = (function (){
var statearr_73063 = [null,null,null,null,null,null,null];
(statearr_73063[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__72553__auto__);

(statearr_73063[(1)] = (1));

return statearr_73063;
});
var cljs$core$async$pipeline_STAR__$_state_machine__72553__auto____1 = (function (state_73053){
while(true){
var ret_value__72554__auto__ = (function (){try{while(true){
var result__72555__auto__ = switch__72552__auto__(state_73053);
if(cljs.core.keyword_identical_QMARK_(result__72555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__72555__auto__;
}
break;
}
}catch (e73064){var ex__72556__auto__ = e73064;
var statearr_73065_76047 = state_73053;
(statearr_73065_76047[(2)] = ex__72556__auto__);


if(cljs.core.seq((state_73053[(4)]))){
var statearr_73066_76048 = state_73053;
(statearr_73066_76048[(1)] = cljs.core.first((state_73053[(4)])));

} else {
throw ex__72556__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__72554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76049 = state_73053;
state_73053 = G__76049;
continue;
} else {
return ret_value__72554__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__72553__auto__ = function(state_73053){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__72553__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__72553__auto____1.call(this,state_73053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__72553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__72553__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__72553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__72553__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__72553__auto__;
})()
;})(__75986,switch__72552__auto__,c__72601__auto___76017,G__73001_75987,G__73001_75988__$1,n__4613__auto___75985,jobs,results,process,async))
})();
var state__72603__auto__ = (function (){var statearr_73067 = f__72602__auto__();
(statearr_73067[(6)] = c__72601__auto___76017);

return statearr_73067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72603__auto__);
});})(__75986,c__72601__auto___76017,G__73001_75987,G__73001_75988__$1,n__4613__auto___75985,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__73001_75988__$1)].join('')));

}

var G__76056 = (__75986 + (1));
__75986 = G__76056;
continue;
} else {
}
break;
}

var c__72601__auto___76057 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72602__auto__ = (function (){var switch__72552__auto__ = (function (state_73090){
var state_val_73091 = (state_73090[(1)]);
if((state_val_73091 === (7))){
var inst_73086 = (state_73090[(2)]);
var state_73090__$1 = state_73090;
var statearr_73093_76059 = state_73090__$1;
(statearr_73093_76059[(2)] = inst_73086);

(statearr_73093_76059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73091 === (1))){
var state_73090__$1 = state_73090;
var statearr_73094_76060 = state_73090__$1;
(statearr_73094_76060[(2)] = null);

(statearr_73094_76060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73091 === (4))){
var inst_73070 = (state_73090[(7)]);
var inst_73070__$1 = (state_73090[(2)]);
var inst_73071 = (inst_73070__$1 == null);
var state_73090__$1 = (function (){var statearr_73097 = state_73090;
(statearr_73097[(7)] = inst_73070__$1);

return statearr_73097;
})();
if(cljs.core.truth_(inst_73071)){
var statearr_73099_76065 = state_73090__$1;
(statearr_73099_76065[(1)] = (5));

} else {
var statearr_73100_76066 = state_73090__$1;
(statearr_73100_76066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73091 === (6))){
var inst_73070 = (state_73090[(7)]);
var inst_73075 = (state_73090[(8)]);
var inst_73075__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_73076 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73077 = [inst_73070,inst_73075__$1];
var inst_73079 = (new cljs.core.PersistentVector(null,2,(5),inst_73076,inst_73077,null));
var state_73090__$1 = (function (){var statearr_73102 = state_73090;
(statearr_73102[(8)] = inst_73075__$1);

return statearr_73102;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73090__$1,(8),jobs,inst_73079);
} else {
if((state_val_73091 === (3))){
var inst_73088 = (state_73090[(2)]);
var state_73090__$1 = state_73090;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73090__$1,inst_73088);
} else {
if((state_val_73091 === (2))){
var state_73090__$1 = state_73090;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73090__$1,(4),from);
} else {
if((state_val_73091 === (9))){
var inst_73083 = (state_73090[(2)]);
var state_73090__$1 = (function (){var statearr_73108 = state_73090;
(statearr_73108[(9)] = inst_73083);

return statearr_73108;
})();
var statearr_73110_76075 = state_73090__$1;
(statearr_73110_76075[(2)] = null);

(statearr_73110_76075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73091 === (5))){
var inst_73073 = cljs.core.async.close_BANG_(jobs);
var state_73090__$1 = state_73090;
var statearr_73114_76078 = state_73090__$1;
(statearr_73114_76078[(2)] = inst_73073);

(statearr_73114_76078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73091 === (8))){
var inst_73075 = (state_73090[(8)]);
var inst_73081 = (state_73090[(2)]);
var state_73090__$1 = (function (){var statearr_73115 = state_73090;
(statearr_73115[(10)] = inst_73081);

return statearr_73115;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73090__$1,(9),results,inst_73075);
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
var cljs$core$async$pipeline_STAR__$_state_machine__72553__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__72553__auto____0 = (function (){
var statearr_73118 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_73118[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__72553__auto__);

(statearr_73118[(1)] = (1));

return statearr_73118;
});
var cljs$core$async$pipeline_STAR__$_state_machine__72553__auto____1 = (function (state_73090){
while(true){
var ret_value__72554__auto__ = (function (){try{while(true){
var result__72555__auto__ = switch__72552__auto__(state_73090);
if(cljs.core.keyword_identical_QMARK_(result__72555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__72555__auto__;
}
break;
}
}catch (e73120){var ex__72556__auto__ = e73120;
var statearr_73121_76084 = state_73090;
(statearr_73121_76084[(2)] = ex__72556__auto__);


if(cljs.core.seq((state_73090[(4)]))){
var statearr_73123_76087 = state_73090;
(statearr_73123_76087[(1)] = cljs.core.first((state_73090[(4)])));

} else {
throw ex__72556__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__72554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76089 = state_73090;
state_73090 = G__76089;
continue;
} else {
return ret_value__72554__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__72553__auto__ = function(state_73090){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__72553__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__72553__auto____1.call(this,state_73090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__72553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__72553__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__72553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__72553__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__72553__auto__;
})()
})();
var state__72603__auto__ = (function (){var statearr_73124 = f__72602__auto__();
(statearr_73124[(6)] = c__72601__auto___76057);

return statearr_73124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72603__auto__);
}));


var c__72601__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72602__auto__ = (function (){var switch__72552__auto__ = (function (state_73162){
var state_val_73164 = (state_73162[(1)]);
if((state_val_73164 === (7))){
var inst_73158 = (state_73162[(2)]);
var state_73162__$1 = state_73162;
var statearr_73173_76096 = state_73162__$1;
(statearr_73173_76096[(2)] = inst_73158);

(statearr_73173_76096[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73164 === (20))){
var state_73162__$1 = state_73162;
var statearr_73175_76098 = state_73162__$1;
(statearr_73175_76098[(2)] = null);

(statearr_73175_76098[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73164 === (1))){
var state_73162__$1 = state_73162;
var statearr_73177_76101 = state_73162__$1;
(statearr_73177_76101[(2)] = null);

(statearr_73177_76101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73164 === (4))){
var inst_73127 = (state_73162[(7)]);
var inst_73127__$1 = (state_73162[(2)]);
var inst_73128 = (inst_73127__$1 == null);
var state_73162__$1 = (function (){var statearr_73179 = state_73162;
(statearr_73179[(7)] = inst_73127__$1);

return statearr_73179;
})();
if(cljs.core.truth_(inst_73128)){
var statearr_73180_76108 = state_73162__$1;
(statearr_73180_76108[(1)] = (5));

} else {
var statearr_73181_76109 = state_73162__$1;
(statearr_73181_76109[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73164 === (15))){
var inst_73140 = (state_73162[(8)]);
var state_73162__$1 = state_73162;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73162__$1,(18),to,inst_73140);
} else {
if((state_val_73164 === (21))){
var inst_73153 = (state_73162[(2)]);
var state_73162__$1 = state_73162;
var statearr_73182_76111 = state_73162__$1;
(statearr_73182_76111[(2)] = inst_73153);

(statearr_73182_76111[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73164 === (13))){
var inst_73155 = (state_73162[(2)]);
var state_73162__$1 = (function (){var statearr_73183 = state_73162;
(statearr_73183[(9)] = inst_73155);

return statearr_73183;
})();
var statearr_73184_76117 = state_73162__$1;
(statearr_73184_76117[(2)] = null);

(statearr_73184_76117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73164 === (6))){
var inst_73127 = (state_73162[(7)]);
var state_73162__$1 = state_73162;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73162__$1,(11),inst_73127);
} else {
if((state_val_73164 === (17))){
var inst_73148 = (state_73162[(2)]);
var state_73162__$1 = state_73162;
if(cljs.core.truth_(inst_73148)){
var statearr_73185_76124 = state_73162__$1;
(statearr_73185_76124[(1)] = (19));

} else {
var statearr_73186_76126 = state_73162__$1;
(statearr_73186_76126[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73164 === (3))){
var inst_73160 = (state_73162[(2)]);
var state_73162__$1 = state_73162;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73162__$1,inst_73160);
} else {
if((state_val_73164 === (12))){
var inst_73137 = (state_73162[(10)]);
var state_73162__$1 = state_73162;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73162__$1,(14),inst_73137);
} else {
if((state_val_73164 === (2))){
var state_73162__$1 = state_73162;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73162__$1,(4),results);
} else {
if((state_val_73164 === (19))){
var state_73162__$1 = state_73162;
var statearr_73192_76131 = state_73162__$1;
(statearr_73192_76131[(2)] = null);

(statearr_73192_76131[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73164 === (11))){
var inst_73137 = (state_73162[(2)]);
var state_73162__$1 = (function (){var statearr_73193 = state_73162;
(statearr_73193[(10)] = inst_73137);

return statearr_73193;
})();
var statearr_73195_76134 = state_73162__$1;
(statearr_73195_76134[(2)] = null);

(statearr_73195_76134[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73164 === (9))){
var state_73162__$1 = state_73162;
var statearr_73197_76138 = state_73162__$1;
(statearr_73197_76138[(2)] = null);

(statearr_73197_76138[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73164 === (5))){
var state_73162__$1 = state_73162;
if(cljs.core.truth_(close_QMARK_)){
var statearr_73199_76139 = state_73162__$1;
(statearr_73199_76139[(1)] = (8));

} else {
var statearr_73204_76140 = state_73162__$1;
(statearr_73204_76140[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73164 === (14))){
var inst_73140 = (state_73162[(8)]);
var inst_73140__$1 = (state_73162[(2)]);
var inst_73141 = (inst_73140__$1 == null);
var inst_73142 = cljs.core.not(inst_73141);
var state_73162__$1 = (function (){var statearr_73206 = state_73162;
(statearr_73206[(8)] = inst_73140__$1);

return statearr_73206;
})();
if(inst_73142){
var statearr_73217_76142 = state_73162__$1;
(statearr_73217_76142[(1)] = (15));

} else {
var statearr_73218_76143 = state_73162__$1;
(statearr_73218_76143[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73164 === (16))){
var state_73162__$1 = state_73162;
var statearr_73219_76145 = state_73162__$1;
(statearr_73219_76145[(2)] = false);

(statearr_73219_76145[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73164 === (10))){
var inst_73134 = (state_73162[(2)]);
var state_73162__$1 = state_73162;
var statearr_73220_76148 = state_73162__$1;
(statearr_73220_76148[(2)] = inst_73134);

(statearr_73220_76148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73164 === (18))){
var inst_73145 = (state_73162[(2)]);
var state_73162__$1 = state_73162;
var statearr_73221_76150 = state_73162__$1;
(statearr_73221_76150[(2)] = inst_73145);

(statearr_73221_76150[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73164 === (8))){
var inst_73131 = cljs.core.async.close_BANG_(to);
var state_73162__$1 = state_73162;
var statearr_73222_76153 = state_73162__$1;
(statearr_73222_76153[(2)] = inst_73131);

(statearr_73222_76153[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__72553__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__72553__auto____0 = (function (){
var statearr_73223 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_73223[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__72553__auto__);

(statearr_73223[(1)] = (1));

return statearr_73223;
});
var cljs$core$async$pipeline_STAR__$_state_machine__72553__auto____1 = (function (state_73162){
while(true){
var ret_value__72554__auto__ = (function (){try{while(true){
var result__72555__auto__ = switch__72552__auto__(state_73162);
if(cljs.core.keyword_identical_QMARK_(result__72555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__72555__auto__;
}
break;
}
}catch (e73224){var ex__72556__auto__ = e73224;
var statearr_73225_76157 = state_73162;
(statearr_73225_76157[(2)] = ex__72556__auto__);


if(cljs.core.seq((state_73162[(4)]))){
var statearr_73226_76160 = state_73162;
(statearr_73226_76160[(1)] = cljs.core.first((state_73162[(4)])));

} else {
throw ex__72556__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__72554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76161 = state_73162;
state_73162 = G__76161;
continue;
} else {
return ret_value__72554__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__72553__auto__ = function(state_73162){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__72553__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__72553__auto____1.call(this,state_73162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__72553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__72553__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__72553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__72553__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__72553__auto__;
})()
})();
var state__72603__auto__ = (function (){var statearr_73229 = f__72602__auto__();
(statearr_73229[(6)] = c__72601__auto__);

return statearr_73229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72603__auto__);
}));

return c__72601__auto__;
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
var G__73235 = arguments.length;
switch (G__73235) {
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
var G__73264 = arguments.length;
switch (G__73264) {
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
var G__73273 = arguments.length;
switch (G__73273) {
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
var c__72601__auto___76192 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72602__auto__ = (function (){var switch__72552__auto__ = (function (state_73342){
var state_val_73344 = (state_73342[(1)]);
if((state_val_73344 === (7))){
var inst_73337 = (state_73342[(2)]);
var state_73342__$1 = state_73342;
var statearr_73357_76196 = state_73342__$1;
(statearr_73357_76196[(2)] = inst_73337);

(statearr_73357_76196[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73344 === (1))){
var state_73342__$1 = state_73342;
var statearr_73363_76198 = state_73342__$1;
(statearr_73363_76198[(2)] = null);

(statearr_73363_76198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73344 === (4))){
var inst_73308 = (state_73342[(7)]);
var inst_73308__$1 = (state_73342[(2)]);
var inst_73310 = (inst_73308__$1 == null);
var state_73342__$1 = (function (){var statearr_73370 = state_73342;
(statearr_73370[(7)] = inst_73308__$1);

return statearr_73370;
})();
if(cljs.core.truth_(inst_73310)){
var statearr_73373_76203 = state_73342__$1;
(statearr_73373_76203[(1)] = (5));

} else {
var statearr_73374_76204 = state_73342__$1;
(statearr_73374_76204[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73344 === (13))){
var state_73342__$1 = state_73342;
var statearr_73378_76205 = state_73342__$1;
(statearr_73378_76205[(2)] = null);

(statearr_73378_76205[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73344 === (6))){
var inst_73308 = (state_73342[(7)]);
var inst_73319 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_73308) : p.call(null,inst_73308));
var state_73342__$1 = state_73342;
if(cljs.core.truth_(inst_73319)){
var statearr_73386_76214 = state_73342__$1;
(statearr_73386_76214[(1)] = (9));

} else {
var statearr_73389_76215 = state_73342__$1;
(statearr_73389_76215[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73344 === (3))){
var inst_73339 = (state_73342[(2)]);
var state_73342__$1 = state_73342;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73342__$1,inst_73339);
} else {
if((state_val_73344 === (12))){
var state_73342__$1 = state_73342;
var statearr_73395_76219 = state_73342__$1;
(statearr_73395_76219[(2)] = null);

(statearr_73395_76219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73344 === (2))){
var state_73342__$1 = state_73342;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73342__$1,(4),ch);
} else {
if((state_val_73344 === (11))){
var inst_73308 = (state_73342[(7)]);
var inst_73324 = (state_73342[(2)]);
var state_73342__$1 = state_73342;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73342__$1,(8),inst_73324,inst_73308);
} else {
if((state_val_73344 === (9))){
var state_73342__$1 = state_73342;
var statearr_73408_76227 = state_73342__$1;
(statearr_73408_76227[(2)] = tc);

(statearr_73408_76227[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73344 === (5))){
var inst_73315 = cljs.core.async.close_BANG_(tc);
var inst_73316 = cljs.core.async.close_BANG_(fc);
var state_73342__$1 = (function (){var statearr_73410 = state_73342;
(statearr_73410[(8)] = inst_73315);

return statearr_73410;
})();
var statearr_73411_76229 = state_73342__$1;
(statearr_73411_76229[(2)] = inst_73316);

(statearr_73411_76229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73344 === (14))){
var inst_73334 = (state_73342[(2)]);
var state_73342__$1 = state_73342;
var statearr_73412_76233 = state_73342__$1;
(statearr_73412_76233[(2)] = inst_73334);

(statearr_73412_76233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73344 === (10))){
var state_73342__$1 = state_73342;
var statearr_73414_76235 = state_73342__$1;
(statearr_73414_76235[(2)] = fc);

(statearr_73414_76235[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73344 === (8))){
var inst_73328 = (state_73342[(2)]);
var state_73342__$1 = state_73342;
if(cljs.core.truth_(inst_73328)){
var statearr_73417_76239 = state_73342__$1;
(statearr_73417_76239[(1)] = (12));

} else {
var statearr_73419_76240 = state_73342__$1;
(statearr_73419_76240[(1)] = (13));

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
var cljs$core$async$state_machine__72553__auto__ = null;
var cljs$core$async$state_machine__72553__auto____0 = (function (){
var statearr_73421 = [null,null,null,null,null,null,null,null,null];
(statearr_73421[(0)] = cljs$core$async$state_machine__72553__auto__);

(statearr_73421[(1)] = (1));

return statearr_73421;
});
var cljs$core$async$state_machine__72553__auto____1 = (function (state_73342){
while(true){
var ret_value__72554__auto__ = (function (){try{while(true){
var result__72555__auto__ = switch__72552__auto__(state_73342);
if(cljs.core.keyword_identical_QMARK_(result__72555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__72555__auto__;
}
break;
}
}catch (e73424){var ex__72556__auto__ = e73424;
var statearr_73425_76241 = state_73342;
(statearr_73425_76241[(2)] = ex__72556__auto__);


if(cljs.core.seq((state_73342[(4)]))){
var statearr_73430_76242 = state_73342;
(statearr_73430_76242[(1)] = cljs.core.first((state_73342[(4)])));

} else {
throw ex__72556__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__72554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76243 = state_73342;
state_73342 = G__76243;
continue;
} else {
return ret_value__72554__auto__;
}
break;
}
});
cljs$core$async$state_machine__72553__auto__ = function(state_73342){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__72553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__72553__auto____1.call(this,state_73342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__72553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__72553__auto____0;
cljs$core$async$state_machine__72553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__72553__auto____1;
return cljs$core$async$state_machine__72553__auto__;
})()
})();
var state__72603__auto__ = (function (){var statearr_73453 = f__72602__auto__();
(statearr_73453[(6)] = c__72601__auto___76192);

return statearr_73453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72603__auto__);
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
var c__72601__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72602__auto__ = (function (){var switch__72552__auto__ = (function (state_73485){
var state_val_73486 = (state_73485[(1)]);
if((state_val_73486 === (7))){
var inst_73477 = (state_73485[(2)]);
var state_73485__$1 = state_73485;
var statearr_73504_76249 = state_73485__$1;
(statearr_73504_76249[(2)] = inst_73477);

(statearr_73504_76249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73486 === (1))){
var inst_73458 = init;
var inst_73459 = inst_73458;
var state_73485__$1 = (function (){var statearr_73512 = state_73485;
(statearr_73512[(7)] = inst_73459);

return statearr_73512;
})();
var statearr_73514_76251 = state_73485__$1;
(statearr_73514_76251[(2)] = null);

(statearr_73514_76251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73486 === (4))){
var inst_73462 = (state_73485[(8)]);
var inst_73462__$1 = (state_73485[(2)]);
var inst_73463 = (inst_73462__$1 == null);
var state_73485__$1 = (function (){var statearr_73520 = state_73485;
(statearr_73520[(8)] = inst_73462__$1);

return statearr_73520;
})();
if(cljs.core.truth_(inst_73463)){
var statearr_73523_76254 = state_73485__$1;
(statearr_73523_76254[(1)] = (5));

} else {
var statearr_73525_76255 = state_73485__$1;
(statearr_73525_76255[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73486 === (6))){
var inst_73467 = (state_73485[(9)]);
var inst_73459 = (state_73485[(7)]);
var inst_73462 = (state_73485[(8)]);
var inst_73467__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_73459,inst_73462) : f.call(null,inst_73459,inst_73462));
var inst_73468 = cljs.core.reduced_QMARK_(inst_73467__$1);
var state_73485__$1 = (function (){var statearr_73532 = state_73485;
(statearr_73532[(9)] = inst_73467__$1);

return statearr_73532;
})();
if(inst_73468){
var statearr_73536_76256 = state_73485__$1;
(statearr_73536_76256[(1)] = (8));

} else {
var statearr_73538_76257 = state_73485__$1;
(statearr_73538_76257[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73486 === (3))){
var inst_73481 = (state_73485[(2)]);
var state_73485__$1 = state_73485;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73485__$1,inst_73481);
} else {
if((state_val_73486 === (2))){
var state_73485__$1 = state_73485;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73485__$1,(4),ch);
} else {
if((state_val_73486 === (9))){
var inst_73467 = (state_73485[(9)]);
var inst_73459 = inst_73467;
var state_73485__$1 = (function (){var statearr_73552 = state_73485;
(statearr_73552[(7)] = inst_73459);

return statearr_73552;
})();
var statearr_73555_76266 = state_73485__$1;
(statearr_73555_76266[(2)] = null);

(statearr_73555_76266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73486 === (5))){
var inst_73459 = (state_73485[(7)]);
var state_73485__$1 = state_73485;
var statearr_73565_76267 = state_73485__$1;
(statearr_73565_76267[(2)] = inst_73459);

(statearr_73565_76267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73486 === (10))){
var inst_73475 = (state_73485[(2)]);
var state_73485__$1 = state_73485;
var statearr_73570_76276 = state_73485__$1;
(statearr_73570_76276[(2)] = inst_73475);

(statearr_73570_76276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73486 === (8))){
var inst_73467 = (state_73485[(9)]);
var inst_73470 = cljs.core.deref(inst_73467);
var state_73485__$1 = state_73485;
var statearr_73575_76277 = state_73485__$1;
(statearr_73575_76277[(2)] = inst_73470);

(statearr_73575_76277[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__72553__auto__ = null;
var cljs$core$async$reduce_$_state_machine__72553__auto____0 = (function (){
var statearr_73585 = [null,null,null,null,null,null,null,null,null,null];
(statearr_73585[(0)] = cljs$core$async$reduce_$_state_machine__72553__auto__);

(statearr_73585[(1)] = (1));

return statearr_73585;
});
var cljs$core$async$reduce_$_state_machine__72553__auto____1 = (function (state_73485){
while(true){
var ret_value__72554__auto__ = (function (){try{while(true){
var result__72555__auto__ = switch__72552__auto__(state_73485);
if(cljs.core.keyword_identical_QMARK_(result__72555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__72555__auto__;
}
break;
}
}catch (e73589){var ex__72556__auto__ = e73589;
var statearr_73593_76282 = state_73485;
(statearr_73593_76282[(2)] = ex__72556__auto__);


if(cljs.core.seq((state_73485[(4)]))){
var statearr_73595_76283 = state_73485;
(statearr_73595_76283[(1)] = cljs.core.first((state_73485[(4)])));

} else {
throw ex__72556__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__72554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76286 = state_73485;
state_73485 = G__76286;
continue;
} else {
return ret_value__72554__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__72553__auto__ = function(state_73485){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__72553__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__72553__auto____1.call(this,state_73485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__72553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__72553__auto____0;
cljs$core$async$reduce_$_state_machine__72553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__72553__auto____1;
return cljs$core$async$reduce_$_state_machine__72553__auto__;
})()
})();
var state__72603__auto__ = (function (){var statearr_73605 = f__72602__auto__();
(statearr_73605[(6)] = c__72601__auto__);

return statearr_73605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72603__auto__);
}));

return c__72601__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__72601__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72602__auto__ = (function (){var switch__72552__auto__ = (function (state_73633){
var state_val_73634 = (state_73633[(1)]);
if((state_val_73634 === (1))){
var inst_73627 = cljs.core.async.reduce(f__$1,init,ch);
var state_73633__$1 = state_73633;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73633__$1,(2),inst_73627);
} else {
if((state_val_73634 === (2))){
var inst_73629 = (state_73633[(2)]);
var inst_73630 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_73629) : f__$1.call(null,inst_73629));
var state_73633__$1 = state_73633;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73633__$1,inst_73630);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__72553__auto__ = null;
var cljs$core$async$transduce_$_state_machine__72553__auto____0 = (function (){
var statearr_73661 = [null,null,null,null,null,null,null];
(statearr_73661[(0)] = cljs$core$async$transduce_$_state_machine__72553__auto__);

(statearr_73661[(1)] = (1));

return statearr_73661;
});
var cljs$core$async$transduce_$_state_machine__72553__auto____1 = (function (state_73633){
while(true){
var ret_value__72554__auto__ = (function (){try{while(true){
var result__72555__auto__ = switch__72552__auto__(state_73633);
if(cljs.core.keyword_identical_QMARK_(result__72555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__72555__auto__;
}
break;
}
}catch (e73662){var ex__72556__auto__ = e73662;
var statearr_73663_76306 = state_73633;
(statearr_73663_76306[(2)] = ex__72556__auto__);


if(cljs.core.seq((state_73633[(4)]))){
var statearr_73664_76307 = state_73633;
(statearr_73664_76307[(1)] = cljs.core.first((state_73633[(4)])));

} else {
throw ex__72556__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__72554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76308 = state_73633;
state_73633 = G__76308;
continue;
} else {
return ret_value__72554__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__72553__auto__ = function(state_73633){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__72553__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__72553__auto____1.call(this,state_73633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__72553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__72553__auto____0;
cljs$core$async$transduce_$_state_machine__72553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__72553__auto____1;
return cljs$core$async$transduce_$_state_machine__72553__auto__;
})()
})();
var state__72603__auto__ = (function (){var statearr_73671 = f__72602__auto__();
(statearr_73671[(6)] = c__72601__auto__);

return statearr_73671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72603__auto__);
}));

return c__72601__auto__;
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
var G__73675 = arguments.length;
switch (G__73675) {
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
var c__72601__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72602__auto__ = (function (){var switch__72552__auto__ = (function (state_73717){
var state_val_73718 = (state_73717[(1)]);
if((state_val_73718 === (7))){
var inst_73696 = (state_73717[(2)]);
var state_73717__$1 = state_73717;
var statearr_73734_76317 = state_73717__$1;
(statearr_73734_76317[(2)] = inst_73696);

(statearr_73734_76317[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73718 === (1))){
var inst_73685 = cljs.core.seq(coll);
var inst_73686 = inst_73685;
var state_73717__$1 = (function (){var statearr_73741 = state_73717;
(statearr_73741[(7)] = inst_73686);

return statearr_73741;
})();
var statearr_73742_76321 = state_73717__$1;
(statearr_73742_76321[(2)] = null);

(statearr_73742_76321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73718 === (4))){
var inst_73686 = (state_73717[(7)]);
var inst_73694 = cljs.core.first(inst_73686);
var state_73717__$1 = state_73717;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73717__$1,(7),ch,inst_73694);
} else {
if((state_val_73718 === (13))){
var inst_73710 = (state_73717[(2)]);
var state_73717__$1 = state_73717;
var statearr_73749_76324 = state_73717__$1;
(statearr_73749_76324[(2)] = inst_73710);

(statearr_73749_76324[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73718 === (6))){
var inst_73699 = (state_73717[(2)]);
var state_73717__$1 = state_73717;
if(cljs.core.truth_(inst_73699)){
var statearr_73752_76327 = state_73717__$1;
(statearr_73752_76327[(1)] = (8));

} else {
var statearr_73753_76330 = state_73717__$1;
(statearr_73753_76330[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73718 === (3))){
var inst_73714 = (state_73717[(2)]);
var state_73717__$1 = state_73717;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73717__$1,inst_73714);
} else {
if((state_val_73718 === (12))){
var state_73717__$1 = state_73717;
var statearr_73759_76335 = state_73717__$1;
(statearr_73759_76335[(2)] = null);

(statearr_73759_76335[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73718 === (2))){
var inst_73686 = (state_73717[(7)]);
var state_73717__$1 = state_73717;
if(cljs.core.truth_(inst_73686)){
var statearr_73762_76339 = state_73717__$1;
(statearr_73762_76339[(1)] = (4));

} else {
var statearr_73765_76342 = state_73717__$1;
(statearr_73765_76342[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73718 === (11))){
var inst_73705 = cljs.core.async.close_BANG_(ch);
var state_73717__$1 = state_73717;
var statearr_73767_76344 = state_73717__$1;
(statearr_73767_76344[(2)] = inst_73705);

(statearr_73767_76344[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73718 === (9))){
var state_73717__$1 = state_73717;
if(cljs.core.truth_(close_QMARK_)){
var statearr_73773_76345 = state_73717__$1;
(statearr_73773_76345[(1)] = (11));

} else {
var statearr_73776_76346 = state_73717__$1;
(statearr_73776_76346[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73718 === (5))){
var inst_73686 = (state_73717[(7)]);
var state_73717__$1 = state_73717;
var statearr_73779_76349 = state_73717__$1;
(statearr_73779_76349[(2)] = inst_73686);

(statearr_73779_76349[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73718 === (10))){
var inst_73712 = (state_73717[(2)]);
var state_73717__$1 = state_73717;
var statearr_73786_76354 = state_73717__$1;
(statearr_73786_76354[(2)] = inst_73712);

(statearr_73786_76354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73718 === (8))){
var inst_73686 = (state_73717[(7)]);
var inst_73701 = cljs.core.next(inst_73686);
var inst_73686__$1 = inst_73701;
var state_73717__$1 = (function (){var statearr_73787 = state_73717;
(statearr_73787[(7)] = inst_73686__$1);

return statearr_73787;
})();
var statearr_73788_76355 = state_73717__$1;
(statearr_73788_76355[(2)] = null);

(statearr_73788_76355[(1)] = (2));


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
var cljs$core$async$state_machine__72553__auto__ = null;
var cljs$core$async$state_machine__72553__auto____0 = (function (){
var statearr_73799 = [null,null,null,null,null,null,null,null];
(statearr_73799[(0)] = cljs$core$async$state_machine__72553__auto__);

(statearr_73799[(1)] = (1));

return statearr_73799;
});
var cljs$core$async$state_machine__72553__auto____1 = (function (state_73717){
while(true){
var ret_value__72554__auto__ = (function (){try{while(true){
var result__72555__auto__ = switch__72552__auto__(state_73717);
if(cljs.core.keyword_identical_QMARK_(result__72555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__72555__auto__;
}
break;
}
}catch (e73816){var ex__72556__auto__ = e73816;
var statearr_73820_76360 = state_73717;
(statearr_73820_76360[(2)] = ex__72556__auto__);


if(cljs.core.seq((state_73717[(4)]))){
var statearr_73825_76365 = state_73717;
(statearr_73825_76365[(1)] = cljs.core.first((state_73717[(4)])));

} else {
throw ex__72556__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__72554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76366 = state_73717;
state_73717 = G__76366;
continue;
} else {
return ret_value__72554__auto__;
}
break;
}
});
cljs$core$async$state_machine__72553__auto__ = function(state_73717){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__72553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__72553__auto____1.call(this,state_73717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__72553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__72553__auto____0;
cljs$core$async$state_machine__72553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__72553__auto____1;
return cljs$core$async$state_machine__72553__auto__;
})()
})();
var state__72603__auto__ = (function (){var statearr_73829 = f__72602__auto__();
(statearr_73829[(6)] = c__72601__auto__);

return statearr_73829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72603__auto__);
}));

return c__72601__auto__;
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
var G__73849 = arguments.length;
switch (G__73849) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_76383 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_76383(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_76387 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_76387(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_76393 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_76393(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_76399 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_76399(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async73975 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async73975 = (function (ch,cs,meta73976){
this.ch = ch;
this.cs = cs;
this.meta73976 = meta73976;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async73975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_73977,meta73976__$1){
var self__ = this;
var _73977__$1 = this;
return (new cljs.core.async.t_cljs$core$async73975(self__.ch,self__.cs,meta73976__$1));
}));

(cljs.core.async.t_cljs$core$async73975.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_73977){
var self__ = this;
var _73977__$1 = this;
return self__.meta73976;
}));

(cljs.core.async.t_cljs$core$async73975.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73975.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async73975.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73975.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async73975.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async73975.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async73975.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta73976","meta73976",1530825745,null)], null);
}));

(cljs.core.async.t_cljs$core$async73975.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async73975.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async73975");

(cljs.core.async.t_cljs$core$async73975.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async73975");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async73975.
 */
cljs.core.async.__GT_t_cljs$core$async73975 = (function cljs$core$async$mult_$___GT_t_cljs$core$async73975(ch__$1,cs__$1,meta73976){
return (new cljs.core.async.t_cljs$core$async73975(ch__$1,cs__$1,meta73976));
});

}

return (new cljs.core.async.t_cljs$core$async73975(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__72601__auto___76413 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72602__auto__ = (function (){var switch__72552__auto__ = (function (state_74168){
var state_val_74169 = (state_74168[(1)]);
if((state_val_74169 === (7))){
var inst_74160 = (state_74168[(2)]);
var state_74168__$1 = state_74168;
var statearr_74178_76414 = state_74168__$1;
(statearr_74178_76414[(2)] = inst_74160);

(statearr_74178_76414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74169 === (20))){
var inst_74040 = (state_74168[(7)]);
var inst_74056 = cljs.core.first(inst_74040);
var inst_74057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74056,(0),null);
var inst_74058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74056,(1),null);
var state_74168__$1 = (function (){var statearr_74188 = state_74168;
(statearr_74188[(8)] = inst_74057);

return statearr_74188;
})();
if(cljs.core.truth_(inst_74058)){
var statearr_74190_76416 = state_74168__$1;
(statearr_74190_76416[(1)] = (22));

} else {
var statearr_74191_76417 = state_74168__$1;
(statearr_74191_76417[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74169 === (27))){
var inst_74102 = (state_74168[(9)]);
var inst_74093 = (state_74168[(10)]);
var inst_74000 = (state_74168[(11)]);
var inst_74095 = (state_74168[(12)]);
var inst_74102__$1 = cljs.core._nth(inst_74093,inst_74095);
var inst_74103 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_74102__$1,inst_74000,done);
var state_74168__$1 = (function (){var statearr_74198 = state_74168;
(statearr_74198[(9)] = inst_74102__$1);

return statearr_74198;
})();
if(cljs.core.truth_(inst_74103)){
var statearr_74199_76422 = state_74168__$1;
(statearr_74199_76422[(1)] = (30));

} else {
var statearr_74200_76423 = state_74168__$1;
(statearr_74200_76423[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74169 === (1))){
var state_74168__$1 = state_74168;
var statearr_74201_76424 = state_74168__$1;
(statearr_74201_76424[(2)] = null);

(statearr_74201_76424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74169 === (24))){
var inst_74040 = (state_74168[(7)]);
var inst_74066 = (state_74168[(2)]);
var inst_74068 = cljs.core.next(inst_74040);
var inst_74012 = inst_74068;
var inst_74013 = null;
var inst_74014 = (0);
var inst_74015 = (0);
var state_74168__$1 = (function (){var statearr_74205 = state_74168;
(statearr_74205[(13)] = inst_74066);

(statearr_74205[(14)] = inst_74014);

(statearr_74205[(15)] = inst_74012);

(statearr_74205[(16)] = inst_74015);

(statearr_74205[(17)] = inst_74013);

return statearr_74205;
})();
var statearr_74208_76428 = state_74168__$1;
(statearr_74208_76428[(2)] = null);

(statearr_74208_76428[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74169 === (39))){
var state_74168__$1 = state_74168;
var statearr_74220_76429 = state_74168__$1;
(statearr_74220_76429[(2)] = null);

(statearr_74220_76429[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74169 === (4))){
var inst_74000 = (state_74168[(11)]);
var inst_74000__$1 = (state_74168[(2)]);
var inst_74004 = (inst_74000__$1 == null);
var state_74168__$1 = (function (){var statearr_74225 = state_74168;
(statearr_74225[(11)] = inst_74000__$1);

return statearr_74225;
})();
if(cljs.core.truth_(inst_74004)){
var statearr_74226_76432 = state_74168__$1;
(statearr_74226_76432[(1)] = (5));

} else {
var statearr_74227_76433 = state_74168__$1;
(statearr_74227_76433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74169 === (15))){
var inst_74014 = (state_74168[(14)]);
var inst_74012 = (state_74168[(15)]);
var inst_74015 = (state_74168[(16)]);
var inst_74013 = (state_74168[(17)]);
var inst_74036 = (state_74168[(2)]);
var inst_74037 = (inst_74015 + (1));
var tmp74211 = inst_74014;
var tmp74212 = inst_74012;
var tmp74213 = inst_74013;
var inst_74012__$1 = tmp74212;
var inst_74013__$1 = tmp74213;
var inst_74014__$1 = tmp74211;
var inst_74015__$1 = inst_74037;
var state_74168__$1 = (function (){var statearr_74229 = state_74168;
(statearr_74229[(14)] = inst_74014__$1);

(statearr_74229[(15)] = inst_74012__$1);

(statearr_74229[(16)] = inst_74015__$1);

(statearr_74229[(17)] = inst_74013__$1);

(statearr_74229[(18)] = inst_74036);

return statearr_74229;
})();
var statearr_74230_76442 = state_74168__$1;
(statearr_74230_76442[(2)] = null);

(statearr_74230_76442[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74169 === (21))){
var inst_74071 = (state_74168[(2)]);
var state_74168__$1 = state_74168;
var statearr_74235_76444 = state_74168__$1;
(statearr_74235_76444[(2)] = inst_74071);

(statearr_74235_76444[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74169 === (31))){
var inst_74102 = (state_74168[(9)]);
var inst_74107 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_74102);
var state_74168__$1 = state_74168;
var statearr_74238_76445 = state_74168__$1;
(statearr_74238_76445[(2)] = inst_74107);

(statearr_74238_76445[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74169 === (32))){
var inst_74094 = (state_74168[(19)]);
var inst_74092 = (state_74168[(20)]);
var inst_74093 = (state_74168[(10)]);
var inst_74095 = (state_74168[(12)]);
var inst_74109 = (state_74168[(2)]);
var inst_74110 = (inst_74095 + (1));
var tmp74231 = inst_74094;
var tmp74232 = inst_74092;
var tmp74233 = inst_74093;
var inst_74092__$1 = tmp74232;
var inst_74093__$1 = tmp74233;
var inst_74094__$1 = tmp74231;
var inst_74095__$1 = inst_74110;
var state_74168__$1 = (function (){var statearr_74240 = state_74168;
(statearr_74240[(19)] = inst_74094__$1);

(statearr_74240[(21)] = inst_74109);

(statearr_74240[(20)] = inst_74092__$1);

(statearr_74240[(10)] = inst_74093__$1);

(statearr_74240[(12)] = inst_74095__$1);

return statearr_74240;
})();
var statearr_74242_76457 = state_74168__$1;
(statearr_74242_76457[(2)] = null);

(statearr_74242_76457[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74169 === (40))){
var inst_74123 = (state_74168[(22)]);
var inst_74129 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_74123);
var state_74168__$1 = state_74168;
var statearr_74247_76460 = state_74168__$1;
(statearr_74247_76460[(2)] = inst_74129);

(statearr_74247_76460[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74169 === (33))){
var inst_74113 = (state_74168[(23)]);
var inst_74115 = cljs.core.chunked_seq_QMARK_(inst_74113);
var state_74168__$1 = state_74168;
if(inst_74115){
var statearr_74252_76462 = state_74168__$1;
(statearr_74252_76462[(1)] = (36));

} else {
var statearr_74253_76463 = state_74168__$1;
(statearr_74253_76463[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74169 === (13))){
var inst_74029 = (state_74168[(24)]);
var inst_74033 = cljs.core.async.close_BANG_(inst_74029);
var state_74168__$1 = state_74168;
var statearr_74255_76464 = state_74168__$1;
(statearr_74255_76464[(2)] = inst_74033);

(statearr_74255_76464[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74169 === (22))){
var inst_74057 = (state_74168[(8)]);
var inst_74063 = cljs.core.async.close_BANG_(inst_74057);
var state_74168__$1 = state_74168;
var statearr_74257_76470 = state_74168__$1;
(statearr_74257_76470[(2)] = inst_74063);

(statearr_74257_76470[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74169 === (36))){
var inst_74113 = (state_74168[(23)]);
var inst_74118 = cljs.core.chunk_first(inst_74113);
var inst_74119 = cljs.core.chunk_rest(inst_74113);
var inst_74120 = cljs.core.count(inst_74118);
var inst_74092 = inst_74119;
var inst_74093 = inst_74118;
var inst_74094 = inst_74120;
var inst_74095 = (0);
var state_74168__$1 = (function (){var statearr_74260 = state_74168;
(statearr_74260[(19)] = inst_74094);

(statearr_74260[(20)] = inst_74092);

(statearr_74260[(10)] = inst_74093);

(statearr_74260[(12)] = inst_74095);

return statearr_74260;
})();
var statearr_74263_76479 = state_74168__$1;
(statearr_74263_76479[(2)] = null);

(statearr_74263_76479[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74169 === (41))){
var inst_74113 = (state_74168[(23)]);
var inst_74131 = (state_74168[(2)]);
var inst_74133 = cljs.core.next(inst_74113);
var inst_74092 = inst_74133;
var inst_74093 = null;
var inst_74094 = (0);
var inst_74095 = (0);
var state_74168__$1 = (function (){var statearr_74265 = state_74168;
(statearr_74265[(25)] = inst_74131);

(statearr_74265[(19)] = inst_74094);

(statearr_74265[(20)] = inst_74092);

(statearr_74265[(10)] = inst_74093);

(statearr_74265[(12)] = inst_74095);

return statearr_74265;
})();
var statearr_74270_76481 = state_74168__$1;
(statearr_74270_76481[(2)] = null);

(statearr_74270_76481[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74169 === (43))){
var state_74168__$1 = state_74168;
var statearr_74276_76484 = state_74168__$1;
(statearr_74276_76484[(2)] = null);

(statearr_74276_76484[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74169 === (29))){
var inst_74142 = (state_74168[(2)]);
var state_74168__$1 = state_74168;
var statearr_74278_76488 = state_74168__$1;
(statearr_74278_76488[(2)] = inst_74142);

(statearr_74278_76488[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74169 === (44))){
var inst_74156 = (state_74168[(2)]);
var state_74168__$1 = (function (){var statearr_74284 = state_74168;
(statearr_74284[(26)] = inst_74156);

return statearr_74284;
})();
var statearr_74285_76495 = state_74168__$1;
(statearr_74285_76495[(2)] = null);

(statearr_74285_76495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74169 === (6))){
var inst_74082 = (state_74168[(27)]);
var inst_74081 = cljs.core.deref(cs);
var inst_74082__$1 = cljs.core.keys(inst_74081);
var inst_74083 = cljs.core.count(inst_74082__$1);
var inst_74084 = cljs.core.reset_BANG_(dctr,inst_74083);
var inst_74091 = cljs.core.seq(inst_74082__$1);
var inst_74092 = inst_74091;
var inst_74093 = null;
var inst_74094 = (0);
var inst_74095 = (0);
var state_74168__$1 = (function (){var statearr_74290 = state_74168;
(statearr_74290[(28)] = inst_74084);

(statearr_74290[(27)] = inst_74082__$1);

(statearr_74290[(19)] = inst_74094);

(statearr_74290[(20)] = inst_74092);

(statearr_74290[(10)] = inst_74093);

(statearr_74290[(12)] = inst_74095);

return statearr_74290;
})();
var statearr_74291_76499 = state_74168__$1;
(statearr_74291_76499[(2)] = null);

(statearr_74291_76499[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74169 === (28))){
var inst_74092 = (state_74168[(20)]);
var inst_74113 = (state_74168[(23)]);
var inst_74113__$1 = cljs.core.seq(inst_74092);
var state_74168__$1 = (function (){var statearr_74295 = state_74168;
(statearr_74295[(23)] = inst_74113__$1);

return statearr_74295;
})();
if(inst_74113__$1){
var statearr_74296_76506 = state_74168__$1;
(statearr_74296_76506[(1)] = (33));

} else {
var statearr_74298_76508 = state_74168__$1;
(statearr_74298_76508[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74169 === (25))){
var inst_74094 = (state_74168[(19)]);
var inst_74095 = (state_74168[(12)]);
var inst_74099 = (inst_74095 < inst_74094);
var inst_74100 = inst_74099;
var state_74168__$1 = state_74168;
if(cljs.core.truth_(inst_74100)){
var statearr_74299_76510 = state_74168__$1;
(statearr_74299_76510[(1)] = (27));

} else {
var statearr_74301_76511 = state_74168__$1;
(statearr_74301_76511[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74169 === (34))){
var state_74168__$1 = state_74168;
var statearr_74305_76512 = state_74168__$1;
(statearr_74305_76512[(2)] = null);

(statearr_74305_76512[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74169 === (17))){
var state_74168__$1 = state_74168;
var statearr_74306_76515 = state_74168__$1;
(statearr_74306_76515[(2)] = null);

(statearr_74306_76515[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74169 === (3))){
var inst_74162 = (state_74168[(2)]);
var state_74168__$1 = state_74168;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74168__$1,inst_74162);
} else {
if((state_val_74169 === (12))){
var inst_74076 = (state_74168[(2)]);
var state_74168__$1 = state_74168;
var statearr_74309_76521 = state_74168__$1;
(statearr_74309_76521[(2)] = inst_74076);

(statearr_74309_76521[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74169 === (2))){
var state_74168__$1 = state_74168;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74168__$1,(4),ch);
} else {
if((state_val_74169 === (23))){
var state_74168__$1 = state_74168;
var statearr_74318_76522 = state_74168__$1;
(statearr_74318_76522[(2)] = null);

(statearr_74318_76522[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74169 === (35))){
var inst_74139 = (state_74168[(2)]);
var state_74168__$1 = state_74168;
var statearr_74323_76524 = state_74168__$1;
(statearr_74323_76524[(2)] = inst_74139);

(statearr_74323_76524[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74169 === (19))){
var inst_74040 = (state_74168[(7)]);
var inst_74047 = cljs.core.chunk_first(inst_74040);
var inst_74049 = cljs.core.chunk_rest(inst_74040);
var inst_74050 = cljs.core.count(inst_74047);
var inst_74012 = inst_74049;
var inst_74013 = inst_74047;
var inst_74014 = inst_74050;
var inst_74015 = (0);
var state_74168__$1 = (function (){var statearr_74325 = state_74168;
(statearr_74325[(14)] = inst_74014);

(statearr_74325[(15)] = inst_74012);

(statearr_74325[(16)] = inst_74015);

(statearr_74325[(17)] = inst_74013);

return statearr_74325;
})();
var statearr_74328_76531 = state_74168__$1;
(statearr_74328_76531[(2)] = null);

(statearr_74328_76531[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74169 === (11))){
var inst_74012 = (state_74168[(15)]);
var inst_74040 = (state_74168[(7)]);
var inst_74040__$1 = cljs.core.seq(inst_74012);
var state_74168__$1 = (function (){var statearr_74334 = state_74168;
(statearr_74334[(7)] = inst_74040__$1);

return statearr_74334;
})();
if(inst_74040__$1){
var statearr_74335_76536 = state_74168__$1;
(statearr_74335_76536[(1)] = (16));

} else {
var statearr_74336_76537 = state_74168__$1;
(statearr_74336_76537[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74169 === (9))){
var inst_74078 = (state_74168[(2)]);
var state_74168__$1 = state_74168;
var statearr_74337_76538 = state_74168__$1;
(statearr_74337_76538[(2)] = inst_74078);

(statearr_74337_76538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74169 === (5))){
var inst_74010 = cljs.core.deref(cs);
var inst_74011 = cljs.core.seq(inst_74010);
var inst_74012 = inst_74011;
var inst_74013 = null;
var inst_74014 = (0);
var inst_74015 = (0);
var state_74168__$1 = (function (){var statearr_74340 = state_74168;
(statearr_74340[(14)] = inst_74014);

(statearr_74340[(15)] = inst_74012);

(statearr_74340[(16)] = inst_74015);

(statearr_74340[(17)] = inst_74013);

return statearr_74340;
})();
var statearr_74344_76550 = state_74168__$1;
(statearr_74344_76550[(2)] = null);

(statearr_74344_76550[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74169 === (14))){
var state_74168__$1 = state_74168;
var statearr_74348_76551 = state_74168__$1;
(statearr_74348_76551[(2)] = null);

(statearr_74348_76551[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74169 === (45))){
var inst_74153 = (state_74168[(2)]);
var state_74168__$1 = state_74168;
var statearr_74351_76553 = state_74168__$1;
(statearr_74351_76553[(2)] = inst_74153);

(statearr_74351_76553[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74169 === (26))){
var inst_74082 = (state_74168[(27)]);
var inst_74144 = (state_74168[(2)]);
var inst_74146 = cljs.core.seq(inst_74082);
var state_74168__$1 = (function (){var statearr_74352 = state_74168;
(statearr_74352[(29)] = inst_74144);

return statearr_74352;
})();
if(inst_74146){
var statearr_74354_76556 = state_74168__$1;
(statearr_74354_76556[(1)] = (42));

} else {
var statearr_74355_76560 = state_74168__$1;
(statearr_74355_76560[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74169 === (16))){
var inst_74040 = (state_74168[(7)]);
var inst_74042 = cljs.core.chunked_seq_QMARK_(inst_74040);
var state_74168__$1 = state_74168;
if(inst_74042){
var statearr_74357_76562 = state_74168__$1;
(statearr_74357_76562[(1)] = (19));

} else {
var statearr_74360_76563 = state_74168__$1;
(statearr_74360_76563[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74169 === (38))){
var inst_74136 = (state_74168[(2)]);
var state_74168__$1 = state_74168;
var statearr_74363_76565 = state_74168__$1;
(statearr_74363_76565[(2)] = inst_74136);

(statearr_74363_76565[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74169 === (30))){
var state_74168__$1 = state_74168;
var statearr_74364_76566 = state_74168__$1;
(statearr_74364_76566[(2)] = null);

(statearr_74364_76566[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74169 === (10))){
var inst_74015 = (state_74168[(16)]);
var inst_74013 = (state_74168[(17)]);
var inst_74027 = cljs.core._nth(inst_74013,inst_74015);
var inst_74029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74027,(0),null);
var inst_74030 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74027,(1),null);
var state_74168__$1 = (function (){var statearr_74367 = state_74168;
(statearr_74367[(24)] = inst_74029);

return statearr_74367;
})();
if(cljs.core.truth_(inst_74030)){
var statearr_74371_76568 = state_74168__$1;
(statearr_74371_76568[(1)] = (13));

} else {
var statearr_74373_76569 = state_74168__$1;
(statearr_74373_76569[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74169 === (18))){
var inst_74074 = (state_74168[(2)]);
var state_74168__$1 = state_74168;
var statearr_74375_76572 = state_74168__$1;
(statearr_74375_76572[(2)] = inst_74074);

(statearr_74375_76572[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74169 === (42))){
var state_74168__$1 = state_74168;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74168__$1,(45),dchan);
} else {
if((state_val_74169 === (37))){
var inst_74123 = (state_74168[(22)]);
var inst_74000 = (state_74168[(11)]);
var inst_74113 = (state_74168[(23)]);
var inst_74123__$1 = cljs.core.first(inst_74113);
var inst_74124 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_74123__$1,inst_74000,done);
var state_74168__$1 = (function (){var statearr_74379 = state_74168;
(statearr_74379[(22)] = inst_74123__$1);

return statearr_74379;
})();
if(cljs.core.truth_(inst_74124)){
var statearr_74380_76584 = state_74168__$1;
(statearr_74380_76584[(1)] = (39));

} else {
var statearr_74381_76585 = state_74168__$1;
(statearr_74381_76585[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74169 === (8))){
var inst_74014 = (state_74168[(14)]);
var inst_74015 = (state_74168[(16)]);
var inst_74020 = (inst_74015 < inst_74014);
var inst_74021 = inst_74020;
var state_74168__$1 = state_74168;
if(cljs.core.truth_(inst_74021)){
var statearr_74382_76588 = state_74168__$1;
(statearr_74382_76588[(1)] = (10));

} else {
var statearr_74383_76589 = state_74168__$1;
(statearr_74383_76589[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__72553__auto__ = null;
var cljs$core$async$mult_$_state_machine__72553__auto____0 = (function (){
var statearr_74389 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_74389[(0)] = cljs$core$async$mult_$_state_machine__72553__auto__);

(statearr_74389[(1)] = (1));

return statearr_74389;
});
var cljs$core$async$mult_$_state_machine__72553__auto____1 = (function (state_74168){
while(true){
var ret_value__72554__auto__ = (function (){try{while(true){
var result__72555__auto__ = switch__72552__auto__(state_74168);
if(cljs.core.keyword_identical_QMARK_(result__72555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__72555__auto__;
}
break;
}
}catch (e74397){var ex__72556__auto__ = e74397;
var statearr_74399_76598 = state_74168;
(statearr_74399_76598[(2)] = ex__72556__auto__);


if(cljs.core.seq((state_74168[(4)]))){
var statearr_74404_76599 = state_74168;
(statearr_74404_76599[(1)] = cljs.core.first((state_74168[(4)])));

} else {
throw ex__72556__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__72554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76601 = state_74168;
state_74168 = G__76601;
continue;
} else {
return ret_value__72554__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__72553__auto__ = function(state_74168){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__72553__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__72553__auto____1.call(this,state_74168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__72553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__72553__auto____0;
cljs$core$async$mult_$_state_machine__72553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__72553__auto____1;
return cljs$core$async$mult_$_state_machine__72553__auto__;
})()
})();
var state__72603__auto__ = (function (){var statearr_74409 = f__72602__auto__();
(statearr_74409[(6)] = c__72601__auto___76413);

return statearr_74409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72603__auto__);
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
var G__74418 = arguments.length;
switch (G__74418) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_76617 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_76617(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_76624 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_76624(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_76630 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_76630(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_76640 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_76640(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_76645 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_76645(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___76657 = arguments.length;
var i__4737__auto___76658 = (0);
while(true){
if((i__4737__auto___76658 < len__4736__auto___76657)){
args__4742__auto__.push((arguments[i__4737__auto___76658]));

var G__76659 = (i__4737__auto___76658 + (1));
i__4737__auto___76658 = G__76659;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__74471){
var map__74472 = p__74471;
var map__74472__$1 = (((((!((map__74472 == null))))?(((((map__74472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74472):map__74472);
var opts = map__74472__$1;
var statearr_74476_76673 = state;
(statearr_74476_76673[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_74478_76675 = state;
(statearr_74478_76675[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_74480_76677 = state;
(statearr_74480_76677[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq74463){
var G__74464 = cljs.core.first(seq74463);
var seq74463__$1 = cljs.core.next(seq74463);
var G__74465 = cljs.core.first(seq74463__$1);
var seq74463__$2 = cljs.core.next(seq74463__$1);
var G__74466 = cljs.core.first(seq74463__$2);
var seq74463__$3 = cljs.core.next(seq74463__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74464,G__74465,G__74466,seq74463__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async74500 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async74500 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta74501){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta74501 = meta74501;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async74500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74502,meta74501__$1){
var self__ = this;
var _74502__$1 = this;
return (new cljs.core.async.t_cljs$core$async74500(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta74501__$1));
}));

(cljs.core.async.t_cljs$core$async74500.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74502){
var self__ = this;
var _74502__$1 = this;
return self__.meta74501;
}));

(cljs.core.async.t_cljs$core$async74500.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74500.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async74500.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74500.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async74500.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async74500.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async74500.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async74500.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async74500.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta74501","meta74501",-1574944722,null)], null);
}));

(cljs.core.async.t_cljs$core$async74500.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async74500.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async74500");

(cljs.core.async.t_cljs$core$async74500.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async74500");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async74500.
 */
cljs.core.async.__GT_t_cljs$core$async74500 = (function cljs$core$async$mix_$___GT_t_cljs$core$async74500(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta74501){
return (new cljs.core.async.t_cljs$core$async74500(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta74501));
});

}

return (new cljs.core.async.t_cljs$core$async74500(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__72601__auto___76724 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72602__auto__ = (function (){var switch__72552__auto__ = (function (state_74627){
var state_val_74628 = (state_74627[(1)]);
if((state_val_74628 === (7))){
var inst_74538 = (state_74627[(2)]);
var state_74627__$1 = state_74627;
var statearr_74634_76725 = state_74627__$1;
(statearr_74634_76725[(2)] = inst_74538);

(statearr_74634_76725[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74628 === (20))){
var inst_74550 = (state_74627[(7)]);
var state_74627__$1 = state_74627;
var statearr_74635_76726 = state_74627__$1;
(statearr_74635_76726[(2)] = inst_74550);

(statearr_74635_76726[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74628 === (27))){
var state_74627__$1 = state_74627;
var statearr_74639_76729 = state_74627__$1;
(statearr_74639_76729[(2)] = null);

(statearr_74639_76729[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74628 === (1))){
var inst_74524 = (state_74627[(8)]);
var inst_74524__$1 = calc_state();
var inst_74527 = (inst_74524__$1 == null);
var inst_74528 = cljs.core.not(inst_74527);
var state_74627__$1 = (function (){var statearr_74640 = state_74627;
(statearr_74640[(8)] = inst_74524__$1);

return statearr_74640;
})();
if(inst_74528){
var statearr_74642_76730 = state_74627__$1;
(statearr_74642_76730[(1)] = (2));

} else {
var statearr_74643_76731 = state_74627__$1;
(statearr_74643_76731[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74628 === (24))){
var inst_74599 = (state_74627[(9)]);
var inst_74583 = (state_74627[(10)]);
var inst_74574 = (state_74627[(11)]);
var inst_74599__$1 = (inst_74574.cljs$core$IFn$_invoke$arity$1 ? inst_74574.cljs$core$IFn$_invoke$arity$1(inst_74583) : inst_74574.call(null,inst_74583));
var state_74627__$1 = (function (){var statearr_74645 = state_74627;
(statearr_74645[(9)] = inst_74599__$1);

return statearr_74645;
})();
if(cljs.core.truth_(inst_74599__$1)){
var statearr_74646_76737 = state_74627__$1;
(statearr_74646_76737[(1)] = (29));

} else {
var statearr_74647_76738 = state_74627__$1;
(statearr_74647_76738[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74628 === (4))){
var inst_74541 = (state_74627[(2)]);
var state_74627__$1 = state_74627;
if(cljs.core.truth_(inst_74541)){
var statearr_74649_76739 = state_74627__$1;
(statearr_74649_76739[(1)] = (8));

} else {
var statearr_74650_76740 = state_74627__$1;
(statearr_74650_76740[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74628 === (15))){
var inst_74568 = (state_74627[(2)]);
var state_74627__$1 = state_74627;
if(cljs.core.truth_(inst_74568)){
var statearr_74653_76745 = state_74627__$1;
(statearr_74653_76745[(1)] = (19));

} else {
var statearr_74656_76746 = state_74627__$1;
(statearr_74656_76746[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74628 === (21))){
var inst_74573 = (state_74627[(12)]);
var inst_74573__$1 = (state_74627[(2)]);
var inst_74574 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_74573__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_74575 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_74573__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_74576 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_74573__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_74627__$1 = (function (){var statearr_74659 = state_74627;
(statearr_74659[(13)] = inst_74575);

(statearr_74659[(12)] = inst_74573__$1);

(statearr_74659[(11)] = inst_74574);

return statearr_74659;
})();
return cljs.core.async.ioc_alts_BANG_(state_74627__$1,(22),inst_74576);
} else {
if((state_val_74628 === (31))){
var inst_74607 = (state_74627[(2)]);
var state_74627__$1 = state_74627;
if(cljs.core.truth_(inst_74607)){
var statearr_74662_76750 = state_74627__$1;
(statearr_74662_76750[(1)] = (32));

} else {
var statearr_74664_76751 = state_74627__$1;
(statearr_74664_76751[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74628 === (32))){
var inst_74582 = (state_74627[(14)]);
var state_74627__$1 = state_74627;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74627__$1,(35),out,inst_74582);
} else {
if((state_val_74628 === (33))){
var inst_74573 = (state_74627[(12)]);
var inst_74550 = inst_74573;
var state_74627__$1 = (function (){var statearr_74666 = state_74627;
(statearr_74666[(7)] = inst_74550);

return statearr_74666;
})();
var statearr_74671_76756 = state_74627__$1;
(statearr_74671_76756[(2)] = null);

(statearr_74671_76756[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74628 === (13))){
var inst_74550 = (state_74627[(7)]);
var inst_74557 = inst_74550.cljs$lang$protocol_mask$partition0$;
var inst_74558 = (inst_74557 & (64));
var inst_74559 = inst_74550.cljs$core$ISeq$;
var inst_74560 = (cljs.core.PROTOCOL_SENTINEL === inst_74559);
var inst_74561 = ((inst_74558) || (inst_74560));
var state_74627__$1 = state_74627;
if(cljs.core.truth_(inst_74561)){
var statearr_74676_76758 = state_74627__$1;
(statearr_74676_76758[(1)] = (16));

} else {
var statearr_74679_76759 = state_74627__$1;
(statearr_74679_76759[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74628 === (22))){
var inst_74582 = (state_74627[(14)]);
var inst_74583 = (state_74627[(10)]);
var inst_74581 = (state_74627[(2)]);
var inst_74582__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74581,(0),null);
var inst_74583__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74581,(1),null);
var inst_74584 = (inst_74582__$1 == null);
var inst_74585 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_74583__$1,change);
var inst_74586 = ((inst_74584) || (inst_74585));
var state_74627__$1 = (function (){var statearr_74680 = state_74627;
(statearr_74680[(14)] = inst_74582__$1);

(statearr_74680[(10)] = inst_74583__$1);

return statearr_74680;
})();
if(cljs.core.truth_(inst_74586)){
var statearr_74681_76760 = state_74627__$1;
(statearr_74681_76760[(1)] = (23));

} else {
var statearr_74682_76761 = state_74627__$1;
(statearr_74682_76761[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74628 === (36))){
var inst_74573 = (state_74627[(12)]);
var inst_74550 = inst_74573;
var state_74627__$1 = (function (){var statearr_74683 = state_74627;
(statearr_74683[(7)] = inst_74550);

return statearr_74683;
})();
var statearr_74684_76766 = state_74627__$1;
(statearr_74684_76766[(2)] = null);

(statearr_74684_76766[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74628 === (29))){
var inst_74599 = (state_74627[(9)]);
var state_74627__$1 = state_74627;
var statearr_74685_76770 = state_74627__$1;
(statearr_74685_76770[(2)] = inst_74599);

(statearr_74685_76770[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74628 === (6))){
var state_74627__$1 = state_74627;
var statearr_74686_76776 = state_74627__$1;
(statearr_74686_76776[(2)] = false);

(statearr_74686_76776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74628 === (28))){
var inst_74594 = (state_74627[(2)]);
var inst_74596 = calc_state();
var inst_74550 = inst_74596;
var state_74627__$1 = (function (){var statearr_74687 = state_74627;
(statearr_74687[(15)] = inst_74594);

(statearr_74687[(7)] = inst_74550);

return statearr_74687;
})();
var statearr_74689_76778 = state_74627__$1;
(statearr_74689_76778[(2)] = null);

(statearr_74689_76778[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74628 === (25))){
var inst_74621 = (state_74627[(2)]);
var state_74627__$1 = state_74627;
var statearr_74691_76782 = state_74627__$1;
(statearr_74691_76782[(2)] = inst_74621);

(statearr_74691_76782[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74628 === (34))){
var inst_74619 = (state_74627[(2)]);
var state_74627__$1 = state_74627;
var statearr_74692_76783 = state_74627__$1;
(statearr_74692_76783[(2)] = inst_74619);

(statearr_74692_76783[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74628 === (17))){
var state_74627__$1 = state_74627;
var statearr_74693_76785 = state_74627__$1;
(statearr_74693_76785[(2)] = false);

(statearr_74693_76785[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74628 === (3))){
var state_74627__$1 = state_74627;
var statearr_74698_76786 = state_74627__$1;
(statearr_74698_76786[(2)] = false);

(statearr_74698_76786[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74628 === (12))){
var inst_74623 = (state_74627[(2)]);
var state_74627__$1 = state_74627;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74627__$1,inst_74623);
} else {
if((state_val_74628 === (2))){
var inst_74524 = (state_74627[(8)]);
var inst_74530 = inst_74524.cljs$lang$protocol_mask$partition0$;
var inst_74531 = (inst_74530 & (64));
var inst_74532 = inst_74524.cljs$core$ISeq$;
var inst_74533 = (cljs.core.PROTOCOL_SENTINEL === inst_74532);
var inst_74534 = ((inst_74531) || (inst_74533));
var state_74627__$1 = state_74627;
if(cljs.core.truth_(inst_74534)){
var statearr_74699_76794 = state_74627__$1;
(statearr_74699_76794[(1)] = (5));

} else {
var statearr_74701_76795 = state_74627__$1;
(statearr_74701_76795[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74628 === (23))){
var inst_74582 = (state_74627[(14)]);
var inst_74588 = (inst_74582 == null);
var state_74627__$1 = state_74627;
if(cljs.core.truth_(inst_74588)){
var statearr_74704_76798 = state_74627__$1;
(statearr_74704_76798[(1)] = (26));

} else {
var statearr_74705_76802 = state_74627__$1;
(statearr_74705_76802[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74628 === (35))){
var inst_74610 = (state_74627[(2)]);
var state_74627__$1 = state_74627;
if(cljs.core.truth_(inst_74610)){
var statearr_74706_76806 = state_74627__$1;
(statearr_74706_76806[(1)] = (36));

} else {
var statearr_74707_76808 = state_74627__$1;
(statearr_74707_76808[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74628 === (19))){
var inst_74550 = (state_74627[(7)]);
var inst_74570 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_74550);
var state_74627__$1 = state_74627;
var statearr_74712_76810 = state_74627__$1;
(statearr_74712_76810[(2)] = inst_74570);

(statearr_74712_76810[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74628 === (11))){
var inst_74550 = (state_74627[(7)]);
var inst_74554 = (inst_74550 == null);
var inst_74555 = cljs.core.not(inst_74554);
var state_74627__$1 = state_74627;
if(inst_74555){
var statearr_74715_76815 = state_74627__$1;
(statearr_74715_76815[(1)] = (13));

} else {
var statearr_74716_76816 = state_74627__$1;
(statearr_74716_76816[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74628 === (9))){
var inst_74524 = (state_74627[(8)]);
var state_74627__$1 = state_74627;
var statearr_74718_76817 = state_74627__$1;
(statearr_74718_76817[(2)] = inst_74524);

(statearr_74718_76817[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74628 === (5))){
var state_74627__$1 = state_74627;
var statearr_74721_76824 = state_74627__$1;
(statearr_74721_76824[(2)] = true);

(statearr_74721_76824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74628 === (14))){
var state_74627__$1 = state_74627;
var statearr_74723_76826 = state_74627__$1;
(statearr_74723_76826[(2)] = false);

(statearr_74723_76826[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74628 === (26))){
var inst_74583 = (state_74627[(10)]);
var inst_74591 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_74583);
var state_74627__$1 = state_74627;
var statearr_74724_76828 = state_74627__$1;
(statearr_74724_76828[(2)] = inst_74591);

(statearr_74724_76828[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74628 === (16))){
var state_74627__$1 = state_74627;
var statearr_74726_76829 = state_74627__$1;
(statearr_74726_76829[(2)] = true);

(statearr_74726_76829[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74628 === (38))){
var inst_74615 = (state_74627[(2)]);
var state_74627__$1 = state_74627;
var statearr_74728_76836 = state_74627__$1;
(statearr_74728_76836[(2)] = inst_74615);

(statearr_74728_76836[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74628 === (30))){
var inst_74575 = (state_74627[(13)]);
var inst_74583 = (state_74627[(10)]);
var inst_74574 = (state_74627[(11)]);
var inst_74602 = cljs.core.empty_QMARK_(inst_74574);
var inst_74603 = (inst_74575.cljs$core$IFn$_invoke$arity$1 ? inst_74575.cljs$core$IFn$_invoke$arity$1(inst_74583) : inst_74575.call(null,inst_74583));
var inst_74604 = cljs.core.not(inst_74603);
var inst_74605 = ((inst_74602) && (inst_74604));
var state_74627__$1 = state_74627;
var statearr_74729_76843 = state_74627__$1;
(statearr_74729_76843[(2)] = inst_74605);

(statearr_74729_76843[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74628 === (10))){
var inst_74524 = (state_74627[(8)]);
var inst_74546 = (state_74627[(2)]);
var inst_74547 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_74546,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_74548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_74546,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_74549 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_74546,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_74550 = inst_74524;
var state_74627__$1 = (function (){var statearr_74730 = state_74627;
(statearr_74730[(16)] = inst_74549);

(statearr_74730[(17)] = inst_74548);

(statearr_74730[(7)] = inst_74550);

(statearr_74730[(18)] = inst_74547);

return statearr_74730;
})();
var statearr_74733_76852 = state_74627__$1;
(statearr_74733_76852[(2)] = null);

(statearr_74733_76852[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74628 === (18))){
var inst_74565 = (state_74627[(2)]);
var state_74627__$1 = state_74627;
var statearr_74734_76854 = state_74627__$1;
(statearr_74734_76854[(2)] = inst_74565);

(statearr_74734_76854[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74628 === (37))){
var state_74627__$1 = state_74627;
var statearr_74735_76855 = state_74627__$1;
(statearr_74735_76855[(2)] = null);

(statearr_74735_76855[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74628 === (8))){
var inst_74524 = (state_74627[(8)]);
var inst_74543 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_74524);
var state_74627__$1 = state_74627;
var statearr_74736_76857 = state_74627__$1;
(statearr_74736_76857[(2)] = inst_74543);

(statearr_74736_76857[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__72553__auto__ = null;
var cljs$core$async$mix_$_state_machine__72553__auto____0 = (function (){
var statearr_74738 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_74738[(0)] = cljs$core$async$mix_$_state_machine__72553__auto__);

(statearr_74738[(1)] = (1));

return statearr_74738;
});
var cljs$core$async$mix_$_state_machine__72553__auto____1 = (function (state_74627){
while(true){
var ret_value__72554__auto__ = (function (){try{while(true){
var result__72555__auto__ = switch__72552__auto__(state_74627);
if(cljs.core.keyword_identical_QMARK_(result__72555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__72555__auto__;
}
break;
}
}catch (e74741){var ex__72556__auto__ = e74741;
var statearr_74742_76868 = state_74627;
(statearr_74742_76868[(2)] = ex__72556__auto__);


if(cljs.core.seq((state_74627[(4)]))){
var statearr_74746_76872 = state_74627;
(statearr_74746_76872[(1)] = cljs.core.first((state_74627[(4)])));

} else {
throw ex__72556__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__72554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76873 = state_74627;
state_74627 = G__76873;
continue;
} else {
return ret_value__72554__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__72553__auto__ = function(state_74627){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__72553__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__72553__auto____1.call(this,state_74627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__72553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__72553__auto____0;
cljs$core$async$mix_$_state_machine__72553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__72553__auto____1;
return cljs$core$async$mix_$_state_machine__72553__auto__;
})()
})();
var state__72603__auto__ = (function (){var statearr_74751 = f__72602__auto__();
(statearr_74751[(6)] = c__72601__auto___76724);

return statearr_74751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72603__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_76878 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_76878(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_76890 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_76890(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_76899 = (function() {
var G__76900 = null;
var G__76900__1 = (function (p){
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
var G__76900__2 = (function (p,v){
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
G__76900 = function(p,v){
switch(arguments.length){
case 1:
return G__76900__1.call(this,p);
case 2:
return G__76900__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__76900.cljs$core$IFn$_invoke$arity$1 = G__76900__1;
G__76900.cljs$core$IFn$_invoke$arity$2 = G__76900__2;
return G__76900;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__74793 = arguments.length;
switch (G__74793) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_76899(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_76899(p,v);
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
var G__74803 = arguments.length;
switch (G__74803) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__74800_SHARP_){
if(cljs.core.truth_((p1__74800_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__74800_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__74800_SHARP_.call(null,topic)))){
return p1__74800_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__74800_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async74809 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async74809 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta74810){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta74810 = meta74810;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async74809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74811,meta74810__$1){
var self__ = this;
var _74811__$1 = this;
return (new cljs.core.async.t_cljs$core$async74809(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta74810__$1));
}));

(cljs.core.async.t_cljs$core$async74809.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74811){
var self__ = this;
var _74811__$1 = this;
return self__.meta74810;
}));

(cljs.core.async.t_cljs$core$async74809.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74809.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async74809.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74809.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async74809.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async74809.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async74809.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async74809.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta74810","meta74810",1948011587,null)], null);
}));

(cljs.core.async.t_cljs$core$async74809.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async74809.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async74809");

(cljs.core.async.t_cljs$core$async74809.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async74809");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async74809.
 */
cljs.core.async.__GT_t_cljs$core$async74809 = (function cljs$core$async$__GT_t_cljs$core$async74809(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta74810){
return (new cljs.core.async.t_cljs$core$async74809(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta74810));
});

}

return (new cljs.core.async.t_cljs$core$async74809(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__72601__auto___76951 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72602__auto__ = (function (){var switch__72552__auto__ = (function (state_74922){
var state_val_74923 = (state_74922[(1)]);
if((state_val_74923 === (7))){
var inst_74917 = (state_74922[(2)]);
var state_74922__$1 = state_74922;
var statearr_74928_76954 = state_74922__$1;
(statearr_74928_76954[(2)] = inst_74917);

(statearr_74928_76954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74923 === (20))){
var state_74922__$1 = state_74922;
var statearr_74929_76957 = state_74922__$1;
(statearr_74929_76957[(2)] = null);

(statearr_74929_76957[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74923 === (1))){
var state_74922__$1 = state_74922;
var statearr_74931_76959 = state_74922__$1;
(statearr_74931_76959[(2)] = null);

(statearr_74931_76959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74923 === (24))){
var inst_74896 = (state_74922[(7)]);
var inst_74909 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_74896);
var state_74922__$1 = state_74922;
var statearr_74933_76963 = state_74922__$1;
(statearr_74933_76963[(2)] = inst_74909);

(statearr_74933_76963[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74923 === (4))){
var inst_74833 = (state_74922[(8)]);
var inst_74833__$1 = (state_74922[(2)]);
var inst_74838 = (inst_74833__$1 == null);
var state_74922__$1 = (function (){var statearr_74934 = state_74922;
(statearr_74934[(8)] = inst_74833__$1);

return statearr_74934;
})();
if(cljs.core.truth_(inst_74838)){
var statearr_74936_76971 = state_74922__$1;
(statearr_74936_76971[(1)] = (5));

} else {
var statearr_74937_76972 = state_74922__$1;
(statearr_74937_76972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74923 === (15))){
var inst_74890 = (state_74922[(2)]);
var state_74922__$1 = state_74922;
var statearr_74940_76974 = state_74922__$1;
(statearr_74940_76974[(2)] = inst_74890);

(statearr_74940_76974[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74923 === (21))){
var inst_74914 = (state_74922[(2)]);
var state_74922__$1 = (function (){var statearr_74941 = state_74922;
(statearr_74941[(9)] = inst_74914);

return statearr_74941;
})();
var statearr_74942_76978 = state_74922__$1;
(statearr_74942_76978[(2)] = null);

(statearr_74942_76978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74923 === (13))){
var inst_74863 = (state_74922[(10)]);
var inst_74865 = cljs.core.chunked_seq_QMARK_(inst_74863);
var state_74922__$1 = state_74922;
if(inst_74865){
var statearr_74946_76979 = state_74922__$1;
(statearr_74946_76979[(1)] = (16));

} else {
var statearr_74947_76980 = state_74922__$1;
(statearr_74947_76980[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74923 === (22))){
var inst_74903 = (state_74922[(2)]);
var state_74922__$1 = state_74922;
if(cljs.core.truth_(inst_74903)){
var statearr_74949_76981 = state_74922__$1;
(statearr_74949_76981[(1)] = (23));

} else {
var statearr_74951_76983 = state_74922__$1;
(statearr_74951_76983[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74923 === (6))){
var inst_74898 = (state_74922[(11)]);
var inst_74833 = (state_74922[(8)]);
var inst_74896 = (state_74922[(7)]);
var inst_74896__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_74833) : topic_fn.call(null,inst_74833));
var inst_74897 = cljs.core.deref(mults);
var inst_74898__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_74897,inst_74896__$1);
var state_74922__$1 = (function (){var statearr_74955 = state_74922;
(statearr_74955[(11)] = inst_74898__$1);

(statearr_74955[(7)] = inst_74896__$1);

return statearr_74955;
})();
if(cljs.core.truth_(inst_74898__$1)){
var statearr_74956_76985 = state_74922__$1;
(statearr_74956_76985[(1)] = (19));

} else {
var statearr_74958_76986 = state_74922__$1;
(statearr_74958_76986[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74923 === (25))){
var inst_74911 = (state_74922[(2)]);
var state_74922__$1 = state_74922;
var statearr_74962_76989 = state_74922__$1;
(statearr_74962_76989[(2)] = inst_74911);

(statearr_74962_76989[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74923 === (17))){
var inst_74863 = (state_74922[(10)]);
var inst_74874 = cljs.core.first(inst_74863);
var inst_74882 = cljs.core.async.muxch_STAR_(inst_74874);
var inst_74883 = cljs.core.async.close_BANG_(inst_74882);
var inst_74884 = cljs.core.next(inst_74863);
var inst_74847 = inst_74884;
var inst_74848 = null;
var inst_74849 = (0);
var inst_74850 = (0);
var state_74922__$1 = (function (){var statearr_74971 = state_74922;
(statearr_74971[(12)] = inst_74847);

(statearr_74971[(13)] = inst_74883);

(statearr_74971[(14)] = inst_74849);

(statearr_74971[(15)] = inst_74850);

(statearr_74971[(16)] = inst_74848);

return statearr_74971;
})();
var statearr_74972_76993 = state_74922__$1;
(statearr_74972_76993[(2)] = null);

(statearr_74972_76993[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74923 === (3))){
var inst_74919 = (state_74922[(2)]);
var state_74922__$1 = state_74922;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74922__$1,inst_74919);
} else {
if((state_val_74923 === (12))){
var inst_74892 = (state_74922[(2)]);
var state_74922__$1 = state_74922;
var statearr_74973_76998 = state_74922__$1;
(statearr_74973_76998[(2)] = inst_74892);

(statearr_74973_76998[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74923 === (2))){
var state_74922__$1 = state_74922;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74922__$1,(4),ch);
} else {
if((state_val_74923 === (23))){
var state_74922__$1 = state_74922;
var statearr_74980_77005 = state_74922__$1;
(statearr_74980_77005[(2)] = null);

(statearr_74980_77005[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74923 === (19))){
var inst_74898 = (state_74922[(11)]);
var inst_74833 = (state_74922[(8)]);
var inst_74901 = cljs.core.async.muxch_STAR_(inst_74898);
var state_74922__$1 = state_74922;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74922__$1,(22),inst_74901,inst_74833);
} else {
if((state_val_74923 === (11))){
var inst_74847 = (state_74922[(12)]);
var inst_74863 = (state_74922[(10)]);
var inst_74863__$1 = cljs.core.seq(inst_74847);
var state_74922__$1 = (function (){var statearr_74984 = state_74922;
(statearr_74984[(10)] = inst_74863__$1);

return statearr_74984;
})();
if(inst_74863__$1){
var statearr_74985_77010 = state_74922__$1;
(statearr_74985_77010[(1)] = (13));

} else {
var statearr_74986_77011 = state_74922__$1;
(statearr_74986_77011[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74923 === (9))){
var inst_74894 = (state_74922[(2)]);
var state_74922__$1 = state_74922;
var statearr_74987_77012 = state_74922__$1;
(statearr_74987_77012[(2)] = inst_74894);

(statearr_74987_77012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74923 === (5))){
var inst_74844 = cljs.core.deref(mults);
var inst_74845 = cljs.core.vals(inst_74844);
var inst_74846 = cljs.core.seq(inst_74845);
var inst_74847 = inst_74846;
var inst_74848 = null;
var inst_74849 = (0);
var inst_74850 = (0);
var state_74922__$1 = (function (){var statearr_74989 = state_74922;
(statearr_74989[(12)] = inst_74847);

(statearr_74989[(14)] = inst_74849);

(statearr_74989[(15)] = inst_74850);

(statearr_74989[(16)] = inst_74848);

return statearr_74989;
})();
var statearr_74993_77016 = state_74922__$1;
(statearr_74993_77016[(2)] = null);

(statearr_74993_77016[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74923 === (14))){
var state_74922__$1 = state_74922;
var statearr_74997_77019 = state_74922__$1;
(statearr_74997_77019[(2)] = null);

(statearr_74997_77019[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74923 === (16))){
var inst_74863 = (state_74922[(10)]);
var inst_74868 = cljs.core.chunk_first(inst_74863);
var inst_74870 = cljs.core.chunk_rest(inst_74863);
var inst_74871 = cljs.core.count(inst_74868);
var inst_74847 = inst_74870;
var inst_74848 = inst_74868;
var inst_74849 = inst_74871;
var inst_74850 = (0);
var state_74922__$1 = (function (){var statearr_75000 = state_74922;
(statearr_75000[(12)] = inst_74847);

(statearr_75000[(14)] = inst_74849);

(statearr_75000[(15)] = inst_74850);

(statearr_75000[(16)] = inst_74848);

return statearr_75000;
})();
var statearr_75001_77027 = state_74922__$1;
(statearr_75001_77027[(2)] = null);

(statearr_75001_77027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74923 === (10))){
var inst_74847 = (state_74922[(12)]);
var inst_74849 = (state_74922[(14)]);
var inst_74850 = (state_74922[(15)]);
var inst_74848 = (state_74922[(16)]);
var inst_74855 = cljs.core._nth(inst_74848,inst_74850);
var inst_74856 = cljs.core.async.muxch_STAR_(inst_74855);
var inst_74857 = cljs.core.async.close_BANG_(inst_74856);
var inst_74858 = (inst_74850 + (1));
var tmp74994 = inst_74847;
var tmp74995 = inst_74849;
var tmp74996 = inst_74848;
var inst_74847__$1 = tmp74994;
var inst_74848__$1 = tmp74996;
var inst_74849__$1 = tmp74995;
var inst_74850__$1 = inst_74858;
var state_74922__$1 = (function (){var statearr_75010 = state_74922;
(statearr_75010[(12)] = inst_74847__$1);

(statearr_75010[(14)] = inst_74849__$1);

(statearr_75010[(15)] = inst_74850__$1);

(statearr_75010[(17)] = inst_74857);

(statearr_75010[(16)] = inst_74848__$1);

return statearr_75010;
})();
var statearr_75012_77037 = state_74922__$1;
(statearr_75012_77037[(2)] = null);

(statearr_75012_77037[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74923 === (18))){
var inst_74887 = (state_74922[(2)]);
var state_74922__$1 = state_74922;
var statearr_75015_77042 = state_74922__$1;
(statearr_75015_77042[(2)] = inst_74887);

(statearr_75015_77042[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74923 === (8))){
var inst_74849 = (state_74922[(14)]);
var inst_74850 = (state_74922[(15)]);
var inst_74852 = (inst_74850 < inst_74849);
var inst_74853 = inst_74852;
var state_74922__$1 = state_74922;
if(cljs.core.truth_(inst_74853)){
var statearr_75017_77047 = state_74922__$1;
(statearr_75017_77047[(1)] = (10));

} else {
var statearr_75018_77048 = state_74922__$1;
(statearr_75018_77048[(1)] = (11));

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
var cljs$core$async$state_machine__72553__auto__ = null;
var cljs$core$async$state_machine__72553__auto____0 = (function (){
var statearr_75020 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75020[(0)] = cljs$core$async$state_machine__72553__auto__);

(statearr_75020[(1)] = (1));

return statearr_75020;
});
var cljs$core$async$state_machine__72553__auto____1 = (function (state_74922){
while(true){
var ret_value__72554__auto__ = (function (){try{while(true){
var result__72555__auto__ = switch__72552__auto__(state_74922);
if(cljs.core.keyword_identical_QMARK_(result__72555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__72555__auto__;
}
break;
}
}catch (e75025){var ex__72556__auto__ = e75025;
var statearr_75026_77055 = state_74922;
(statearr_75026_77055[(2)] = ex__72556__auto__);


if(cljs.core.seq((state_74922[(4)]))){
var statearr_75027_77056 = state_74922;
(statearr_75027_77056[(1)] = cljs.core.first((state_74922[(4)])));

} else {
throw ex__72556__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__72554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77058 = state_74922;
state_74922 = G__77058;
continue;
} else {
return ret_value__72554__auto__;
}
break;
}
});
cljs$core$async$state_machine__72553__auto__ = function(state_74922){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__72553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__72553__auto____1.call(this,state_74922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__72553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__72553__auto____0;
cljs$core$async$state_machine__72553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__72553__auto____1;
return cljs$core$async$state_machine__72553__auto__;
})()
})();
var state__72603__auto__ = (function (){var statearr_75036 = f__72602__auto__();
(statearr_75036[(6)] = c__72601__auto___76951);

return statearr_75036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72603__auto__);
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
var G__75044 = arguments.length;
switch (G__75044) {
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
var G__75052 = arguments.length;
switch (G__75052) {
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
var G__75059 = arguments.length;
switch (G__75059) {
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
var c__72601__auto___77081 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72602__auto__ = (function (){var switch__72552__auto__ = (function (state_75115){
var state_val_75116 = (state_75115[(1)]);
if((state_val_75116 === (7))){
var state_75115__$1 = state_75115;
var statearr_75118_77083 = state_75115__$1;
(statearr_75118_77083[(2)] = null);

(statearr_75118_77083[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75116 === (1))){
var state_75115__$1 = state_75115;
var statearr_75120_77086 = state_75115__$1;
(statearr_75120_77086[(2)] = null);

(statearr_75120_77086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75116 === (4))){
var inst_75068 = (state_75115[(7)]);
var inst_75067 = (state_75115[(8)]);
var inst_75070 = (inst_75068 < inst_75067);
var state_75115__$1 = state_75115;
if(cljs.core.truth_(inst_75070)){
var statearr_75122_77089 = state_75115__$1;
(statearr_75122_77089[(1)] = (6));

} else {
var statearr_75123_77090 = state_75115__$1;
(statearr_75123_77090[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75116 === (15))){
var inst_75100 = (state_75115[(9)]);
var inst_75105 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_75100);
var state_75115__$1 = state_75115;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75115__$1,(17),out,inst_75105);
} else {
if((state_val_75116 === (13))){
var inst_75100 = (state_75115[(9)]);
var inst_75100__$1 = (state_75115[(2)]);
var inst_75101 = cljs.core.some(cljs.core.nil_QMARK_,inst_75100__$1);
var state_75115__$1 = (function (){var statearr_75125 = state_75115;
(statearr_75125[(9)] = inst_75100__$1);

return statearr_75125;
})();
if(cljs.core.truth_(inst_75101)){
var statearr_75126_77096 = state_75115__$1;
(statearr_75126_77096[(1)] = (14));

} else {
var statearr_75127_77097 = state_75115__$1;
(statearr_75127_77097[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75116 === (6))){
var state_75115__$1 = state_75115;
var statearr_75128_77098 = state_75115__$1;
(statearr_75128_77098[(2)] = null);

(statearr_75128_77098[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75116 === (17))){
var inst_75107 = (state_75115[(2)]);
var state_75115__$1 = (function (){var statearr_75133 = state_75115;
(statearr_75133[(10)] = inst_75107);

return statearr_75133;
})();
var statearr_75134_77099 = state_75115__$1;
(statearr_75134_77099[(2)] = null);

(statearr_75134_77099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75116 === (3))){
var inst_75112 = (state_75115[(2)]);
var state_75115__$1 = state_75115;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75115__$1,inst_75112);
} else {
if((state_val_75116 === (12))){
var _ = (function (){var statearr_75135 = state_75115;
(statearr_75135[(4)] = cljs.core.rest((state_75115[(4)])));

return statearr_75135;
})();
var state_75115__$1 = state_75115;
var ex75131 = (state_75115__$1[(2)]);
var statearr_75136_77103 = state_75115__$1;
(statearr_75136_77103[(5)] = ex75131);


if((ex75131 instanceof Object)){
var statearr_75140_77104 = state_75115__$1;
(statearr_75140_77104[(1)] = (11));

(statearr_75140_77104[(5)] = null);

} else {
throw ex75131;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75116 === (2))){
var inst_75066 = cljs.core.reset_BANG_(dctr,cnt);
var inst_75067 = cnt;
var inst_75068 = (0);
var state_75115__$1 = (function (){var statearr_75144 = state_75115;
(statearr_75144[(7)] = inst_75068);

(statearr_75144[(8)] = inst_75067);

(statearr_75144[(11)] = inst_75066);

return statearr_75144;
})();
var statearr_75145_77105 = state_75115__$1;
(statearr_75145_77105[(2)] = null);

(statearr_75145_77105[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75116 === (11))){
var inst_75077 = (state_75115[(2)]);
var inst_75078 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_75115__$1 = (function (){var statearr_75147 = state_75115;
(statearr_75147[(12)] = inst_75077);

return statearr_75147;
})();
var statearr_75148_77111 = state_75115__$1;
(statearr_75148_77111[(2)] = inst_75078);

(statearr_75148_77111[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75116 === (9))){
var inst_75068 = (state_75115[(7)]);
var _ = (function (){var statearr_75150 = state_75115;
(statearr_75150[(4)] = cljs.core.cons((12),(state_75115[(4)])));

return statearr_75150;
})();
var inst_75086 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_75068) : chs__$1.call(null,inst_75068));
var inst_75087 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_75068) : done.call(null,inst_75068));
var inst_75088 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_75086,inst_75087);
var ___$1 = (function (){var statearr_75151 = state_75115;
(statearr_75151[(4)] = cljs.core.rest((state_75115[(4)])));

return statearr_75151;
})();
var state_75115__$1 = state_75115;
var statearr_75152_77112 = state_75115__$1;
(statearr_75152_77112[(2)] = inst_75088);

(statearr_75152_77112[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75116 === (5))){
var inst_75098 = (state_75115[(2)]);
var state_75115__$1 = (function (){var statearr_75154 = state_75115;
(statearr_75154[(13)] = inst_75098);

return statearr_75154;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75115__$1,(13),dchan);
} else {
if((state_val_75116 === (14))){
var inst_75103 = cljs.core.async.close_BANG_(out);
var state_75115__$1 = state_75115;
var statearr_75156_77113 = state_75115__$1;
(statearr_75156_77113[(2)] = inst_75103);

(statearr_75156_77113[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75116 === (16))){
var inst_75110 = (state_75115[(2)]);
var state_75115__$1 = state_75115;
var statearr_75157_77114 = state_75115__$1;
(statearr_75157_77114[(2)] = inst_75110);

(statearr_75157_77114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75116 === (10))){
var inst_75068 = (state_75115[(7)]);
var inst_75091 = (state_75115[(2)]);
var inst_75092 = (inst_75068 + (1));
var inst_75068__$1 = inst_75092;
var state_75115__$1 = (function (){var statearr_75159 = state_75115;
(statearr_75159[(7)] = inst_75068__$1);

(statearr_75159[(14)] = inst_75091);

return statearr_75159;
})();
var statearr_75160_77118 = state_75115__$1;
(statearr_75160_77118[(2)] = null);

(statearr_75160_77118[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75116 === (8))){
var inst_75096 = (state_75115[(2)]);
var state_75115__$1 = state_75115;
var statearr_75161_77119 = state_75115__$1;
(statearr_75161_77119[(2)] = inst_75096);

(statearr_75161_77119[(1)] = (5));


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
var cljs$core$async$state_machine__72553__auto__ = null;
var cljs$core$async$state_machine__72553__auto____0 = (function (){
var statearr_75162 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75162[(0)] = cljs$core$async$state_machine__72553__auto__);

(statearr_75162[(1)] = (1));

return statearr_75162;
});
var cljs$core$async$state_machine__72553__auto____1 = (function (state_75115){
while(true){
var ret_value__72554__auto__ = (function (){try{while(true){
var result__72555__auto__ = switch__72552__auto__(state_75115);
if(cljs.core.keyword_identical_QMARK_(result__72555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__72555__auto__;
}
break;
}
}catch (e75163){var ex__72556__auto__ = e75163;
var statearr_75165_77125 = state_75115;
(statearr_75165_77125[(2)] = ex__72556__auto__);


if(cljs.core.seq((state_75115[(4)]))){
var statearr_75166_77132 = state_75115;
(statearr_75166_77132[(1)] = cljs.core.first((state_75115[(4)])));

} else {
throw ex__72556__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__72554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77133 = state_75115;
state_75115 = G__77133;
continue;
} else {
return ret_value__72554__auto__;
}
break;
}
});
cljs$core$async$state_machine__72553__auto__ = function(state_75115){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__72553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__72553__auto____1.call(this,state_75115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__72553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__72553__auto____0;
cljs$core$async$state_machine__72553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__72553__auto____1;
return cljs$core$async$state_machine__72553__auto__;
})()
})();
var state__72603__auto__ = (function (){var statearr_75167 = f__72602__auto__();
(statearr_75167[(6)] = c__72601__auto___77081);

return statearr_75167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72603__auto__);
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
var G__75172 = arguments.length;
switch (G__75172) {
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
var c__72601__auto___77141 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72602__auto__ = (function (){var switch__72552__auto__ = (function (state_75209){
var state_val_75210 = (state_75209[(1)]);
if((state_val_75210 === (7))){
var inst_75187 = (state_75209[(7)]);
var inst_75188 = (state_75209[(8)]);
var inst_75187__$1 = (state_75209[(2)]);
var inst_75188__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_75187__$1,(0),null);
var inst_75189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_75187__$1,(1),null);
var inst_75190 = (inst_75188__$1 == null);
var state_75209__$1 = (function (){var statearr_75212 = state_75209;
(statearr_75212[(7)] = inst_75187__$1);

(statearr_75212[(8)] = inst_75188__$1);

(statearr_75212[(9)] = inst_75189);

return statearr_75212;
})();
if(cljs.core.truth_(inst_75190)){
var statearr_75214_77142 = state_75209__$1;
(statearr_75214_77142[(1)] = (8));

} else {
var statearr_75215_77143 = state_75209__$1;
(statearr_75215_77143[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75210 === (1))){
var inst_75175 = cljs.core.vec(chs);
var inst_75177 = inst_75175;
var state_75209__$1 = (function (){var statearr_75216 = state_75209;
(statearr_75216[(10)] = inst_75177);

return statearr_75216;
})();
var statearr_75220_77145 = state_75209__$1;
(statearr_75220_77145[(2)] = null);

(statearr_75220_77145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75210 === (4))){
var inst_75177 = (state_75209[(10)]);
var state_75209__$1 = state_75209;
return cljs.core.async.ioc_alts_BANG_(state_75209__$1,(7),inst_75177);
} else {
if((state_val_75210 === (6))){
var inst_75205 = (state_75209[(2)]);
var state_75209__$1 = state_75209;
var statearr_75222_77148 = state_75209__$1;
(statearr_75222_77148[(2)] = inst_75205);

(statearr_75222_77148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75210 === (3))){
var inst_75207 = (state_75209[(2)]);
var state_75209__$1 = state_75209;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75209__$1,inst_75207);
} else {
if((state_val_75210 === (2))){
var inst_75177 = (state_75209[(10)]);
var inst_75180 = cljs.core.count(inst_75177);
var inst_75181 = (inst_75180 > (0));
var state_75209__$1 = state_75209;
if(cljs.core.truth_(inst_75181)){
var statearr_75224_77150 = state_75209__$1;
(statearr_75224_77150[(1)] = (4));

} else {
var statearr_75226_77152 = state_75209__$1;
(statearr_75226_77152[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75210 === (11))){
var inst_75177 = (state_75209[(10)]);
var inst_75198 = (state_75209[(2)]);
var tmp75223 = inst_75177;
var inst_75177__$1 = tmp75223;
var state_75209__$1 = (function (){var statearr_75227 = state_75209;
(statearr_75227[(11)] = inst_75198);

(statearr_75227[(10)] = inst_75177__$1);

return statearr_75227;
})();
var statearr_75228_77153 = state_75209__$1;
(statearr_75228_77153[(2)] = null);

(statearr_75228_77153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75210 === (9))){
var inst_75188 = (state_75209[(8)]);
var state_75209__$1 = state_75209;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75209__$1,(11),out,inst_75188);
} else {
if((state_val_75210 === (5))){
var inst_75203 = cljs.core.async.close_BANG_(out);
var state_75209__$1 = state_75209;
var statearr_75230_77155 = state_75209__$1;
(statearr_75230_77155[(2)] = inst_75203);

(statearr_75230_77155[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75210 === (10))){
var inst_75201 = (state_75209[(2)]);
var state_75209__$1 = state_75209;
var statearr_75232_77160 = state_75209__$1;
(statearr_75232_77160[(2)] = inst_75201);

(statearr_75232_77160[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75210 === (8))){
var inst_75187 = (state_75209[(7)]);
var inst_75188 = (state_75209[(8)]);
var inst_75189 = (state_75209[(9)]);
var inst_75177 = (state_75209[(10)]);
var inst_75193 = (function (){var cs = inst_75177;
var vec__75183 = inst_75187;
var v = inst_75188;
var c = inst_75189;
return (function (p1__75169_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__75169_SHARP_);
});
})();
var inst_75194 = cljs.core.filterv(inst_75193,inst_75177);
var inst_75177__$1 = inst_75194;
var state_75209__$1 = (function (){var statearr_75233 = state_75209;
(statearr_75233[(10)] = inst_75177__$1);

return statearr_75233;
})();
var statearr_75235_77167 = state_75209__$1;
(statearr_75235_77167[(2)] = null);

(statearr_75235_77167[(1)] = (2));


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
var cljs$core$async$state_machine__72553__auto__ = null;
var cljs$core$async$state_machine__72553__auto____0 = (function (){
var statearr_75236 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75236[(0)] = cljs$core$async$state_machine__72553__auto__);

(statearr_75236[(1)] = (1));

return statearr_75236;
});
var cljs$core$async$state_machine__72553__auto____1 = (function (state_75209){
while(true){
var ret_value__72554__auto__ = (function (){try{while(true){
var result__72555__auto__ = switch__72552__auto__(state_75209);
if(cljs.core.keyword_identical_QMARK_(result__72555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__72555__auto__;
}
break;
}
}catch (e75237){var ex__72556__auto__ = e75237;
var statearr_75238_77172 = state_75209;
(statearr_75238_77172[(2)] = ex__72556__auto__);


if(cljs.core.seq((state_75209[(4)]))){
var statearr_75240_77173 = state_75209;
(statearr_75240_77173[(1)] = cljs.core.first((state_75209[(4)])));

} else {
throw ex__72556__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__72554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77176 = state_75209;
state_75209 = G__77176;
continue;
} else {
return ret_value__72554__auto__;
}
break;
}
});
cljs$core$async$state_machine__72553__auto__ = function(state_75209){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__72553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__72553__auto____1.call(this,state_75209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__72553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__72553__auto____0;
cljs$core$async$state_machine__72553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__72553__auto____1;
return cljs$core$async$state_machine__72553__auto__;
})()
})();
var state__72603__auto__ = (function (){var statearr_75241 = f__72602__auto__();
(statearr_75241[(6)] = c__72601__auto___77141);

return statearr_75241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72603__auto__);
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
var G__75245 = arguments.length;
switch (G__75245) {
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
var c__72601__auto___77185 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72602__auto__ = (function (){var switch__72552__auto__ = (function (state_75272){
var state_val_75273 = (state_75272[(1)]);
if((state_val_75273 === (7))){
var inst_75252 = (state_75272[(7)]);
var inst_75252__$1 = (state_75272[(2)]);
var inst_75253 = (inst_75252__$1 == null);
var inst_75254 = cljs.core.not(inst_75253);
var state_75272__$1 = (function (){var statearr_75276 = state_75272;
(statearr_75276[(7)] = inst_75252__$1);

return statearr_75276;
})();
if(inst_75254){
var statearr_75277_77186 = state_75272__$1;
(statearr_75277_77186[(1)] = (8));

} else {
var statearr_75278_77187 = state_75272__$1;
(statearr_75278_77187[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75273 === (1))){
var inst_75247 = (0);
var state_75272__$1 = (function (){var statearr_75279 = state_75272;
(statearr_75279[(8)] = inst_75247);

return statearr_75279;
})();
var statearr_75280_77190 = state_75272__$1;
(statearr_75280_77190[(2)] = null);

(statearr_75280_77190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75273 === (4))){
var state_75272__$1 = state_75272;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75272__$1,(7),ch);
} else {
if((state_val_75273 === (6))){
var inst_75267 = (state_75272[(2)]);
var state_75272__$1 = state_75272;
var statearr_75286_77192 = state_75272__$1;
(statearr_75286_77192[(2)] = inst_75267);

(statearr_75286_77192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75273 === (3))){
var inst_75269 = (state_75272[(2)]);
var inst_75270 = cljs.core.async.close_BANG_(out);
var state_75272__$1 = (function (){var statearr_75287 = state_75272;
(statearr_75287[(9)] = inst_75269);

return statearr_75287;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_75272__$1,inst_75270);
} else {
if((state_val_75273 === (2))){
var inst_75247 = (state_75272[(8)]);
var inst_75249 = (inst_75247 < n);
var state_75272__$1 = state_75272;
if(cljs.core.truth_(inst_75249)){
var statearr_75293_77197 = state_75272__$1;
(statearr_75293_77197[(1)] = (4));

} else {
var statearr_75294_77198 = state_75272__$1;
(statearr_75294_77198[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75273 === (11))){
var inst_75247 = (state_75272[(8)]);
var inst_75258 = (state_75272[(2)]);
var inst_75260 = (inst_75247 + (1));
var inst_75247__$1 = inst_75260;
var state_75272__$1 = (function (){var statearr_75295 = state_75272;
(statearr_75295[(8)] = inst_75247__$1);

(statearr_75295[(10)] = inst_75258);

return statearr_75295;
})();
var statearr_75296_77203 = state_75272__$1;
(statearr_75296_77203[(2)] = null);

(statearr_75296_77203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75273 === (9))){
var state_75272__$1 = state_75272;
var statearr_75298_77204 = state_75272__$1;
(statearr_75298_77204[(2)] = null);

(statearr_75298_77204[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75273 === (5))){
var state_75272__$1 = state_75272;
var statearr_75299_77207 = state_75272__$1;
(statearr_75299_77207[(2)] = null);

(statearr_75299_77207[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75273 === (10))){
var inst_75264 = (state_75272[(2)]);
var state_75272__$1 = state_75272;
var statearr_75300_77209 = state_75272__$1;
(statearr_75300_77209[(2)] = inst_75264);

(statearr_75300_77209[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75273 === (8))){
var inst_75252 = (state_75272[(7)]);
var state_75272__$1 = state_75272;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75272__$1,(11),out,inst_75252);
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
var cljs$core$async$state_machine__72553__auto__ = null;
var cljs$core$async$state_machine__72553__auto____0 = (function (){
var statearr_75302 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_75302[(0)] = cljs$core$async$state_machine__72553__auto__);

(statearr_75302[(1)] = (1));

return statearr_75302;
});
var cljs$core$async$state_machine__72553__auto____1 = (function (state_75272){
while(true){
var ret_value__72554__auto__ = (function (){try{while(true){
var result__72555__auto__ = switch__72552__auto__(state_75272);
if(cljs.core.keyword_identical_QMARK_(result__72555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__72555__auto__;
}
break;
}
}catch (e75303){var ex__72556__auto__ = e75303;
var statearr_75304_77218 = state_75272;
(statearr_75304_77218[(2)] = ex__72556__auto__);


if(cljs.core.seq((state_75272[(4)]))){
var statearr_75305_77219 = state_75272;
(statearr_75305_77219[(1)] = cljs.core.first((state_75272[(4)])));

} else {
throw ex__72556__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__72554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77220 = state_75272;
state_75272 = G__77220;
continue;
} else {
return ret_value__72554__auto__;
}
break;
}
});
cljs$core$async$state_machine__72553__auto__ = function(state_75272){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__72553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__72553__auto____1.call(this,state_75272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__72553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__72553__auto____0;
cljs$core$async$state_machine__72553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__72553__auto____1;
return cljs$core$async$state_machine__72553__auto__;
})()
})();
var state__72603__auto__ = (function (){var statearr_75307 = f__72602__auto__();
(statearr_75307[(6)] = c__72601__auto___77185);

return statearr_75307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72603__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async75310 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async75310 = (function (f,ch,meta75311){
this.f = f;
this.ch = ch;
this.meta75311 = meta75311;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async75310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75312,meta75311__$1){
var self__ = this;
var _75312__$1 = this;
return (new cljs.core.async.t_cljs$core$async75310(self__.f,self__.ch,meta75311__$1));
}));

(cljs.core.async.t_cljs$core$async75310.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75312){
var self__ = this;
var _75312__$1 = this;
return self__.meta75311;
}));

(cljs.core.async.t_cljs$core$async75310.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75310.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async75310.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async75310.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75310.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async75314 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async75314 = (function (f,ch,meta75311,_,fn1,meta75315){
this.f = f;
this.ch = ch;
this.meta75311 = meta75311;
this._ = _;
this.fn1 = fn1;
this.meta75315 = meta75315;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async75314.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75316,meta75315__$1){
var self__ = this;
var _75316__$1 = this;
return (new cljs.core.async.t_cljs$core$async75314(self__.f,self__.ch,self__.meta75311,self__._,self__.fn1,meta75315__$1));
}));

(cljs.core.async.t_cljs$core$async75314.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75316){
var self__ = this;
var _75316__$1 = this;
return self__.meta75315;
}));

(cljs.core.async.t_cljs$core$async75314.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75314.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async75314.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async75314.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__75308_SHARP_){
var G__75320 = (((p1__75308_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__75308_SHARP_) : self__.f.call(null,p1__75308_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__75320) : f1.call(null,G__75320));
});
}));

(cljs.core.async.t_cljs$core$async75314.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta75311","meta75311",-1366749012,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async75310","cljs.core.async/t_cljs$core$async75310",-608064847,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta75315","meta75315",-344852620,null)], null);
}));

(cljs.core.async.t_cljs$core$async75314.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async75314.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async75314");

(cljs.core.async.t_cljs$core$async75314.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async75314");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async75314.
 */
cljs.core.async.__GT_t_cljs$core$async75314 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async75314(f__$1,ch__$1,meta75311__$1,___$2,fn1__$1,meta75315){
return (new cljs.core.async.t_cljs$core$async75314(f__$1,ch__$1,meta75311__$1,___$2,fn1__$1,meta75315));
});

}

return (new cljs.core.async.t_cljs$core$async75314(self__.f,self__.ch,self__.meta75311,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__75323 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__75323) : self__.f.call(null,G__75323));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async75310.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75310.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async75310.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta75311","meta75311",-1366749012,null)], null);
}));

(cljs.core.async.t_cljs$core$async75310.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async75310.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async75310");

(cljs.core.async.t_cljs$core$async75310.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async75310");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async75310.
 */
cljs.core.async.__GT_t_cljs$core$async75310 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async75310(f__$1,ch__$1,meta75311){
return (new cljs.core.async.t_cljs$core$async75310(f__$1,ch__$1,meta75311));
});

}

return (new cljs.core.async.t_cljs$core$async75310(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async75329 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async75329 = (function (f,ch,meta75330){
this.f = f;
this.ch = ch;
this.meta75330 = meta75330;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async75329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75331,meta75330__$1){
var self__ = this;
var _75331__$1 = this;
return (new cljs.core.async.t_cljs$core$async75329(self__.f,self__.ch,meta75330__$1));
}));

(cljs.core.async.t_cljs$core$async75329.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75331){
var self__ = this;
var _75331__$1 = this;
return self__.meta75330;
}));

(cljs.core.async.t_cljs$core$async75329.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75329.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async75329.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75329.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async75329.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75329.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async75329.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta75330","meta75330",1227069545,null)], null);
}));

(cljs.core.async.t_cljs$core$async75329.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async75329.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async75329");

(cljs.core.async.t_cljs$core$async75329.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async75329");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async75329.
 */
cljs.core.async.__GT_t_cljs$core$async75329 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async75329(f__$1,ch__$1,meta75330){
return (new cljs.core.async.t_cljs$core$async75329(f__$1,ch__$1,meta75330));
});

}

return (new cljs.core.async.t_cljs$core$async75329(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async75339 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async75339 = (function (p,ch,meta75340){
this.p = p;
this.ch = ch;
this.meta75340 = meta75340;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async75339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75341,meta75340__$1){
var self__ = this;
var _75341__$1 = this;
return (new cljs.core.async.t_cljs$core$async75339(self__.p,self__.ch,meta75340__$1));
}));

(cljs.core.async.t_cljs$core$async75339.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75341){
var self__ = this;
var _75341__$1 = this;
return self__.meta75340;
}));

(cljs.core.async.t_cljs$core$async75339.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75339.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async75339.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async75339.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75339.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async75339.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75339.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async75339.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta75340","meta75340",1828856961,null)], null);
}));

(cljs.core.async.t_cljs$core$async75339.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async75339.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async75339");

(cljs.core.async.t_cljs$core$async75339.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async75339");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async75339.
 */
cljs.core.async.__GT_t_cljs$core$async75339 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async75339(p__$1,ch__$1,meta75340){
return (new cljs.core.async.t_cljs$core$async75339(p__$1,ch__$1,meta75340));
});

}

return (new cljs.core.async.t_cljs$core$async75339(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__75352 = arguments.length;
switch (G__75352) {
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
var c__72601__auto___77278 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72602__auto__ = (function (){var switch__72552__auto__ = (function (state_75377){
var state_val_75378 = (state_75377[(1)]);
if((state_val_75378 === (7))){
var inst_75373 = (state_75377[(2)]);
var state_75377__$1 = state_75377;
var statearr_75380_77279 = state_75377__$1;
(statearr_75380_77279[(2)] = inst_75373);

(statearr_75380_77279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75378 === (1))){
var state_75377__$1 = state_75377;
var statearr_75381_77286 = state_75377__$1;
(statearr_75381_77286[(2)] = null);

(statearr_75381_77286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75378 === (4))){
var inst_75359 = (state_75377[(7)]);
var inst_75359__$1 = (state_75377[(2)]);
var inst_75360 = (inst_75359__$1 == null);
var state_75377__$1 = (function (){var statearr_75382 = state_75377;
(statearr_75382[(7)] = inst_75359__$1);

return statearr_75382;
})();
if(cljs.core.truth_(inst_75360)){
var statearr_75383_77290 = state_75377__$1;
(statearr_75383_77290[(1)] = (5));

} else {
var statearr_75384_77292 = state_75377__$1;
(statearr_75384_77292[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75378 === (6))){
var inst_75359 = (state_75377[(7)]);
var inst_75364 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_75359) : p.call(null,inst_75359));
var state_75377__$1 = state_75377;
if(cljs.core.truth_(inst_75364)){
var statearr_75386_77294 = state_75377__$1;
(statearr_75386_77294[(1)] = (8));

} else {
var statearr_75387_77295 = state_75377__$1;
(statearr_75387_77295[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75378 === (3))){
var inst_75375 = (state_75377[(2)]);
var state_75377__$1 = state_75377;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75377__$1,inst_75375);
} else {
if((state_val_75378 === (2))){
var state_75377__$1 = state_75377;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75377__$1,(4),ch);
} else {
if((state_val_75378 === (11))){
var inst_75367 = (state_75377[(2)]);
var state_75377__$1 = state_75377;
var statearr_75389_77303 = state_75377__$1;
(statearr_75389_77303[(2)] = inst_75367);

(statearr_75389_77303[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75378 === (9))){
var state_75377__$1 = state_75377;
var statearr_75390_77306 = state_75377__$1;
(statearr_75390_77306[(2)] = null);

(statearr_75390_77306[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75378 === (5))){
var inst_75362 = cljs.core.async.close_BANG_(out);
var state_75377__$1 = state_75377;
var statearr_75392_77311 = state_75377__$1;
(statearr_75392_77311[(2)] = inst_75362);

(statearr_75392_77311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75378 === (10))){
var inst_75370 = (state_75377[(2)]);
var state_75377__$1 = (function (){var statearr_75393 = state_75377;
(statearr_75393[(8)] = inst_75370);

return statearr_75393;
})();
var statearr_75394_77316 = state_75377__$1;
(statearr_75394_77316[(2)] = null);

(statearr_75394_77316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75378 === (8))){
var inst_75359 = (state_75377[(7)]);
var state_75377__$1 = state_75377;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75377__$1,(11),out,inst_75359);
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
var cljs$core$async$state_machine__72553__auto__ = null;
var cljs$core$async$state_machine__72553__auto____0 = (function (){
var statearr_75396 = [null,null,null,null,null,null,null,null,null];
(statearr_75396[(0)] = cljs$core$async$state_machine__72553__auto__);

(statearr_75396[(1)] = (1));

return statearr_75396;
});
var cljs$core$async$state_machine__72553__auto____1 = (function (state_75377){
while(true){
var ret_value__72554__auto__ = (function (){try{while(true){
var result__72555__auto__ = switch__72552__auto__(state_75377);
if(cljs.core.keyword_identical_QMARK_(result__72555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__72555__auto__;
}
break;
}
}catch (e75397){var ex__72556__auto__ = e75397;
var statearr_75398_77328 = state_75377;
(statearr_75398_77328[(2)] = ex__72556__auto__);


if(cljs.core.seq((state_75377[(4)]))){
var statearr_75399_77331 = state_75377;
(statearr_75399_77331[(1)] = cljs.core.first((state_75377[(4)])));

} else {
throw ex__72556__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__72554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77333 = state_75377;
state_75377 = G__77333;
continue;
} else {
return ret_value__72554__auto__;
}
break;
}
});
cljs$core$async$state_machine__72553__auto__ = function(state_75377){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__72553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__72553__auto____1.call(this,state_75377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__72553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__72553__auto____0;
cljs$core$async$state_machine__72553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__72553__auto____1;
return cljs$core$async$state_machine__72553__auto__;
})()
})();
var state__72603__auto__ = (function (){var statearr_75401 = f__72602__auto__();
(statearr_75401[(6)] = c__72601__auto___77278);

return statearr_75401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72603__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__75409 = arguments.length;
switch (G__75409) {
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
var c__72601__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72602__auto__ = (function (){var switch__72552__auto__ = (function (state_75478){
var state_val_75479 = (state_75478[(1)]);
if((state_val_75479 === (7))){
var inst_75473 = (state_75478[(2)]);
var state_75478__$1 = state_75478;
var statearr_75480_77343 = state_75478__$1;
(statearr_75480_77343[(2)] = inst_75473);

(statearr_75480_77343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75479 === (20))){
var inst_75440 = (state_75478[(7)]);
var inst_75454 = (state_75478[(2)]);
var inst_75455 = cljs.core.next(inst_75440);
var inst_75426 = inst_75455;
var inst_75427 = null;
var inst_75428 = (0);
var inst_75429 = (0);
var state_75478__$1 = (function (){var statearr_75482 = state_75478;
(statearr_75482[(8)] = inst_75426);

(statearr_75482[(9)] = inst_75428);

(statearr_75482[(10)] = inst_75454);

(statearr_75482[(11)] = inst_75427);

(statearr_75482[(12)] = inst_75429);

return statearr_75482;
})();
var statearr_75483_77349 = state_75478__$1;
(statearr_75483_77349[(2)] = null);

(statearr_75483_77349[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75479 === (1))){
var state_75478__$1 = state_75478;
var statearr_75484_77352 = state_75478__$1;
(statearr_75484_77352[(2)] = null);

(statearr_75484_77352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75479 === (4))){
var inst_75414 = (state_75478[(13)]);
var inst_75414__$1 = (state_75478[(2)]);
var inst_75415 = (inst_75414__$1 == null);
var state_75478__$1 = (function (){var statearr_75485 = state_75478;
(statearr_75485[(13)] = inst_75414__$1);

return statearr_75485;
})();
if(cljs.core.truth_(inst_75415)){
var statearr_75487_77360 = state_75478__$1;
(statearr_75487_77360[(1)] = (5));

} else {
var statearr_75488_77362 = state_75478__$1;
(statearr_75488_77362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75479 === (15))){
var state_75478__$1 = state_75478;
var statearr_75492_77364 = state_75478__$1;
(statearr_75492_77364[(2)] = null);

(statearr_75492_77364[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75479 === (21))){
var state_75478__$1 = state_75478;
var statearr_75493_77365 = state_75478__$1;
(statearr_75493_77365[(2)] = null);

(statearr_75493_77365[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75479 === (13))){
var inst_75426 = (state_75478[(8)]);
var inst_75428 = (state_75478[(9)]);
var inst_75427 = (state_75478[(11)]);
var inst_75429 = (state_75478[(12)]);
var inst_75436 = (state_75478[(2)]);
var inst_75437 = (inst_75429 + (1));
var tmp75489 = inst_75426;
var tmp75490 = inst_75428;
var tmp75491 = inst_75427;
var inst_75426__$1 = tmp75489;
var inst_75427__$1 = tmp75491;
var inst_75428__$1 = tmp75490;
var inst_75429__$1 = inst_75437;
var state_75478__$1 = (function (){var statearr_75497 = state_75478;
(statearr_75497[(8)] = inst_75426__$1);

(statearr_75497[(9)] = inst_75428__$1);

(statearr_75497[(14)] = inst_75436);

(statearr_75497[(11)] = inst_75427__$1);

(statearr_75497[(12)] = inst_75429__$1);

return statearr_75497;
})();
var statearr_75498_77377 = state_75478__$1;
(statearr_75498_77377[(2)] = null);

(statearr_75498_77377[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75479 === (22))){
var state_75478__$1 = state_75478;
var statearr_75500_77381 = state_75478__$1;
(statearr_75500_77381[(2)] = null);

(statearr_75500_77381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75479 === (6))){
var inst_75414 = (state_75478[(13)]);
var inst_75424 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_75414) : f.call(null,inst_75414));
var inst_75425 = cljs.core.seq(inst_75424);
var inst_75426 = inst_75425;
var inst_75427 = null;
var inst_75428 = (0);
var inst_75429 = (0);
var state_75478__$1 = (function (){var statearr_75501 = state_75478;
(statearr_75501[(8)] = inst_75426);

(statearr_75501[(9)] = inst_75428);

(statearr_75501[(11)] = inst_75427);

(statearr_75501[(12)] = inst_75429);

return statearr_75501;
})();
var statearr_75503_77385 = state_75478__$1;
(statearr_75503_77385[(2)] = null);

(statearr_75503_77385[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75479 === (17))){
var inst_75440 = (state_75478[(7)]);
var inst_75446 = cljs.core.chunk_first(inst_75440);
var inst_75447 = cljs.core.chunk_rest(inst_75440);
var inst_75449 = cljs.core.count(inst_75446);
var inst_75426 = inst_75447;
var inst_75427 = inst_75446;
var inst_75428 = inst_75449;
var inst_75429 = (0);
var state_75478__$1 = (function (){var statearr_75505 = state_75478;
(statearr_75505[(8)] = inst_75426);

(statearr_75505[(9)] = inst_75428);

(statearr_75505[(11)] = inst_75427);

(statearr_75505[(12)] = inst_75429);

return statearr_75505;
})();
var statearr_75507_77392 = state_75478__$1;
(statearr_75507_77392[(2)] = null);

(statearr_75507_77392[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75479 === (3))){
var inst_75475 = (state_75478[(2)]);
var state_75478__$1 = state_75478;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75478__$1,inst_75475);
} else {
if((state_val_75479 === (12))){
var inst_75463 = (state_75478[(2)]);
var state_75478__$1 = state_75478;
var statearr_75510_77394 = state_75478__$1;
(statearr_75510_77394[(2)] = inst_75463);

(statearr_75510_77394[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75479 === (2))){
var state_75478__$1 = state_75478;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75478__$1,(4),in$);
} else {
if((state_val_75479 === (23))){
var inst_75471 = (state_75478[(2)]);
var state_75478__$1 = state_75478;
var statearr_75512_77404 = state_75478__$1;
(statearr_75512_77404[(2)] = inst_75471);

(statearr_75512_77404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75479 === (19))){
var inst_75458 = (state_75478[(2)]);
var state_75478__$1 = state_75478;
var statearr_75513_77412 = state_75478__$1;
(statearr_75513_77412[(2)] = inst_75458);

(statearr_75513_77412[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75479 === (11))){
var inst_75426 = (state_75478[(8)]);
var inst_75440 = (state_75478[(7)]);
var inst_75440__$1 = cljs.core.seq(inst_75426);
var state_75478__$1 = (function (){var statearr_75515 = state_75478;
(statearr_75515[(7)] = inst_75440__$1);

return statearr_75515;
})();
if(inst_75440__$1){
var statearr_75518_77419 = state_75478__$1;
(statearr_75518_77419[(1)] = (14));

} else {
var statearr_75520_77420 = state_75478__$1;
(statearr_75520_77420[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75479 === (9))){
var inst_75465 = (state_75478[(2)]);
var inst_75466 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_75478__$1 = (function (){var statearr_75521 = state_75478;
(statearr_75521[(15)] = inst_75465);

return statearr_75521;
})();
if(cljs.core.truth_(inst_75466)){
var statearr_75522_77423 = state_75478__$1;
(statearr_75522_77423[(1)] = (21));

} else {
var statearr_75524_77424 = state_75478__$1;
(statearr_75524_77424[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75479 === (5))){
var inst_75417 = cljs.core.async.close_BANG_(out);
var state_75478__$1 = state_75478;
var statearr_75525_77428 = state_75478__$1;
(statearr_75525_77428[(2)] = inst_75417);

(statearr_75525_77428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75479 === (14))){
var inst_75440 = (state_75478[(7)]);
var inst_75443 = cljs.core.chunked_seq_QMARK_(inst_75440);
var state_75478__$1 = state_75478;
if(inst_75443){
var statearr_75527_77433 = state_75478__$1;
(statearr_75527_77433[(1)] = (17));

} else {
var statearr_75528_77435 = state_75478__$1;
(statearr_75528_77435[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75479 === (16))){
var inst_75461 = (state_75478[(2)]);
var state_75478__$1 = state_75478;
var statearr_75529_77436 = state_75478__$1;
(statearr_75529_77436[(2)] = inst_75461);

(statearr_75529_77436[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75479 === (10))){
var inst_75427 = (state_75478[(11)]);
var inst_75429 = (state_75478[(12)]);
var inst_75434 = cljs.core._nth(inst_75427,inst_75429);
var state_75478__$1 = state_75478;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75478__$1,(13),out,inst_75434);
} else {
if((state_val_75479 === (18))){
var inst_75440 = (state_75478[(7)]);
var inst_75452 = cljs.core.first(inst_75440);
var state_75478__$1 = state_75478;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75478__$1,(20),out,inst_75452);
} else {
if((state_val_75479 === (8))){
var inst_75428 = (state_75478[(9)]);
var inst_75429 = (state_75478[(12)]);
var inst_75431 = (inst_75429 < inst_75428);
var inst_75432 = inst_75431;
var state_75478__$1 = state_75478;
if(cljs.core.truth_(inst_75432)){
var statearr_75532_77448 = state_75478__$1;
(statearr_75532_77448[(1)] = (10));

} else {
var statearr_75533_77451 = state_75478__$1;
(statearr_75533_77451[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__72553__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__72553__auto____0 = (function (){
var statearr_75536 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75536[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__72553__auto__);

(statearr_75536[(1)] = (1));

return statearr_75536;
});
var cljs$core$async$mapcat_STAR__$_state_machine__72553__auto____1 = (function (state_75478){
while(true){
var ret_value__72554__auto__ = (function (){try{while(true){
var result__72555__auto__ = switch__72552__auto__(state_75478);
if(cljs.core.keyword_identical_QMARK_(result__72555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__72555__auto__;
}
break;
}
}catch (e75537){var ex__72556__auto__ = e75537;
var statearr_75538_77459 = state_75478;
(statearr_75538_77459[(2)] = ex__72556__auto__);


if(cljs.core.seq((state_75478[(4)]))){
var statearr_75540_77460 = state_75478;
(statearr_75540_77460[(1)] = cljs.core.first((state_75478[(4)])));

} else {
throw ex__72556__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__72554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77462 = state_75478;
state_75478 = G__77462;
continue;
} else {
return ret_value__72554__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__72553__auto__ = function(state_75478){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__72553__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__72553__auto____1.call(this,state_75478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__72553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__72553__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__72553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__72553__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__72553__auto__;
})()
})();
var state__72603__auto__ = (function (){var statearr_75542 = f__72602__auto__();
(statearr_75542[(6)] = c__72601__auto__);

return statearr_75542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72603__auto__);
}));

return c__72601__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__75545 = arguments.length;
switch (G__75545) {
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
var G__75551 = arguments.length;
switch (G__75551) {
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
var G__75557 = arguments.length;
switch (G__75557) {
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
var c__72601__auto___77494 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72602__auto__ = (function (){var switch__72552__auto__ = (function (state_75585){
var state_val_75586 = (state_75585[(1)]);
if((state_val_75586 === (7))){
var inst_75580 = (state_75585[(2)]);
var state_75585__$1 = state_75585;
var statearr_75588_77499 = state_75585__$1;
(statearr_75588_77499[(2)] = inst_75580);

(statearr_75588_77499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75586 === (1))){
var inst_75562 = null;
var state_75585__$1 = (function (){var statearr_75590 = state_75585;
(statearr_75590[(7)] = inst_75562);

return statearr_75590;
})();
var statearr_75591_77502 = state_75585__$1;
(statearr_75591_77502[(2)] = null);

(statearr_75591_77502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75586 === (4))){
var inst_75565 = (state_75585[(8)]);
var inst_75565__$1 = (state_75585[(2)]);
var inst_75566 = (inst_75565__$1 == null);
var inst_75567 = cljs.core.not(inst_75566);
var state_75585__$1 = (function (){var statearr_75592 = state_75585;
(statearr_75592[(8)] = inst_75565__$1);

return statearr_75592;
})();
if(inst_75567){
var statearr_75594_77509 = state_75585__$1;
(statearr_75594_77509[(1)] = (5));

} else {
var statearr_75595_77510 = state_75585__$1;
(statearr_75595_77510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75586 === (6))){
var state_75585__$1 = state_75585;
var statearr_75596_77514 = state_75585__$1;
(statearr_75596_77514[(2)] = null);

(statearr_75596_77514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75586 === (3))){
var inst_75582 = (state_75585[(2)]);
var inst_75583 = cljs.core.async.close_BANG_(out);
var state_75585__$1 = (function (){var statearr_75598 = state_75585;
(statearr_75598[(9)] = inst_75582);

return statearr_75598;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_75585__$1,inst_75583);
} else {
if((state_val_75586 === (2))){
var state_75585__$1 = state_75585;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75585__$1,(4),ch);
} else {
if((state_val_75586 === (11))){
var inst_75565 = (state_75585[(8)]);
var inst_75574 = (state_75585[(2)]);
var inst_75562 = inst_75565;
var state_75585__$1 = (function (){var statearr_75599 = state_75585;
(statearr_75599[(7)] = inst_75562);

(statearr_75599[(10)] = inst_75574);

return statearr_75599;
})();
var statearr_75601_77522 = state_75585__$1;
(statearr_75601_77522[(2)] = null);

(statearr_75601_77522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75586 === (9))){
var inst_75565 = (state_75585[(8)]);
var state_75585__$1 = state_75585;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75585__$1,(11),out,inst_75565);
} else {
if((state_val_75586 === (5))){
var inst_75562 = (state_75585[(7)]);
var inst_75565 = (state_75585[(8)]);
var inst_75569 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_75565,inst_75562);
var state_75585__$1 = state_75585;
if(inst_75569){
var statearr_75605_77529 = state_75585__$1;
(statearr_75605_77529[(1)] = (8));

} else {
var statearr_75606_77530 = state_75585__$1;
(statearr_75606_77530[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75586 === (10))){
var inst_75577 = (state_75585[(2)]);
var state_75585__$1 = state_75585;
var statearr_75607_77532 = state_75585__$1;
(statearr_75607_77532[(2)] = inst_75577);

(statearr_75607_77532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75586 === (8))){
var inst_75562 = (state_75585[(7)]);
var tmp75603 = inst_75562;
var inst_75562__$1 = tmp75603;
var state_75585__$1 = (function (){var statearr_75609 = state_75585;
(statearr_75609[(7)] = inst_75562__$1);

return statearr_75609;
})();
var statearr_75610_77536 = state_75585__$1;
(statearr_75610_77536[(2)] = null);

(statearr_75610_77536[(1)] = (2));


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
var cljs$core$async$state_machine__72553__auto__ = null;
var cljs$core$async$state_machine__72553__auto____0 = (function (){
var statearr_75612 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_75612[(0)] = cljs$core$async$state_machine__72553__auto__);

(statearr_75612[(1)] = (1));

return statearr_75612;
});
var cljs$core$async$state_machine__72553__auto____1 = (function (state_75585){
while(true){
var ret_value__72554__auto__ = (function (){try{while(true){
var result__72555__auto__ = switch__72552__auto__(state_75585);
if(cljs.core.keyword_identical_QMARK_(result__72555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__72555__auto__;
}
break;
}
}catch (e75613){var ex__72556__auto__ = e75613;
var statearr_75614_77538 = state_75585;
(statearr_75614_77538[(2)] = ex__72556__auto__);


if(cljs.core.seq((state_75585[(4)]))){
var statearr_75616_77539 = state_75585;
(statearr_75616_77539[(1)] = cljs.core.first((state_75585[(4)])));

} else {
throw ex__72556__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__72554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77541 = state_75585;
state_75585 = G__77541;
continue;
} else {
return ret_value__72554__auto__;
}
break;
}
});
cljs$core$async$state_machine__72553__auto__ = function(state_75585){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__72553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__72553__auto____1.call(this,state_75585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__72553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__72553__auto____0;
cljs$core$async$state_machine__72553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__72553__auto____1;
return cljs$core$async$state_machine__72553__auto__;
})()
})();
var state__72603__auto__ = (function (){var statearr_75619 = f__72602__auto__();
(statearr_75619[(6)] = c__72601__auto___77494);

return statearr_75619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72603__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__75623 = arguments.length;
switch (G__75623) {
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
var c__72601__auto___77550 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72602__auto__ = (function (){var switch__72552__auto__ = (function (state_75665){
var state_val_75666 = (state_75665[(1)]);
if((state_val_75666 === (7))){
var inst_75661 = (state_75665[(2)]);
var state_75665__$1 = state_75665;
var statearr_75668_77554 = state_75665__$1;
(statearr_75668_77554[(2)] = inst_75661);

(statearr_75668_77554[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75666 === (1))){
var inst_75626 = (new Array(n));
var inst_75627 = inst_75626;
var inst_75628 = (0);
var state_75665__$1 = (function (){var statearr_75670 = state_75665;
(statearr_75670[(7)] = inst_75628);

(statearr_75670[(8)] = inst_75627);

return statearr_75670;
})();
var statearr_75671_77558 = state_75665__$1;
(statearr_75671_77558[(2)] = null);

(statearr_75671_77558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75666 === (4))){
var inst_75632 = (state_75665[(9)]);
var inst_75632__$1 = (state_75665[(2)]);
var inst_75633 = (inst_75632__$1 == null);
var inst_75634 = cljs.core.not(inst_75633);
var state_75665__$1 = (function (){var statearr_75672 = state_75665;
(statearr_75672[(9)] = inst_75632__$1);

return statearr_75672;
})();
if(inst_75634){
var statearr_75673_77559 = state_75665__$1;
(statearr_75673_77559[(1)] = (5));

} else {
var statearr_75675_77560 = state_75665__$1;
(statearr_75675_77560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75666 === (15))){
var inst_75655 = (state_75665[(2)]);
var state_75665__$1 = state_75665;
var statearr_75676_77561 = state_75665__$1;
(statearr_75676_77561[(2)] = inst_75655);

(statearr_75676_77561[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75666 === (13))){
var state_75665__$1 = state_75665;
var statearr_75677_77562 = state_75665__$1;
(statearr_75677_77562[(2)] = null);

(statearr_75677_77562[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75666 === (6))){
var inst_75628 = (state_75665[(7)]);
var inst_75651 = (inst_75628 > (0));
var state_75665__$1 = state_75665;
if(cljs.core.truth_(inst_75651)){
var statearr_75678_77563 = state_75665__$1;
(statearr_75678_77563[(1)] = (12));

} else {
var statearr_75679_77564 = state_75665__$1;
(statearr_75679_77564[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75666 === (3))){
var inst_75663 = (state_75665[(2)]);
var state_75665__$1 = state_75665;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75665__$1,inst_75663);
} else {
if((state_val_75666 === (12))){
var inst_75627 = (state_75665[(8)]);
var inst_75653 = cljs.core.vec(inst_75627);
var state_75665__$1 = state_75665;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75665__$1,(15),out,inst_75653);
} else {
if((state_val_75666 === (2))){
var state_75665__$1 = state_75665;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75665__$1,(4),ch);
} else {
if((state_val_75666 === (11))){
var inst_75645 = (state_75665[(2)]);
var inst_75646 = (new Array(n));
var inst_75627 = inst_75646;
var inst_75628 = (0);
var state_75665__$1 = (function (){var statearr_75681 = state_75665;
(statearr_75681[(7)] = inst_75628);

(statearr_75681[(10)] = inst_75645);

(statearr_75681[(8)] = inst_75627);

return statearr_75681;
})();
var statearr_75682_77569 = state_75665__$1;
(statearr_75682_77569[(2)] = null);

(statearr_75682_77569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75666 === (9))){
var inst_75627 = (state_75665[(8)]);
var inst_75643 = cljs.core.vec(inst_75627);
var state_75665__$1 = state_75665;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75665__$1,(11),out,inst_75643);
} else {
if((state_val_75666 === (5))){
var inst_75628 = (state_75665[(7)]);
var inst_75632 = (state_75665[(9)]);
var inst_75637 = (state_75665[(11)]);
var inst_75627 = (state_75665[(8)]);
var inst_75636 = (inst_75627[inst_75628] = inst_75632);
var inst_75637__$1 = (inst_75628 + (1));
var inst_75639 = (inst_75637__$1 < n);
var state_75665__$1 = (function (){var statearr_75684 = state_75665;
(statearr_75684[(12)] = inst_75636);

(statearr_75684[(11)] = inst_75637__$1);

return statearr_75684;
})();
if(cljs.core.truth_(inst_75639)){
var statearr_75685_77577 = state_75665__$1;
(statearr_75685_77577[(1)] = (8));

} else {
var statearr_75686_77578 = state_75665__$1;
(statearr_75686_77578[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75666 === (14))){
var inst_75658 = (state_75665[(2)]);
var inst_75659 = cljs.core.async.close_BANG_(out);
var state_75665__$1 = (function (){var statearr_75688 = state_75665;
(statearr_75688[(13)] = inst_75658);

return statearr_75688;
})();
var statearr_75689_77580 = state_75665__$1;
(statearr_75689_77580[(2)] = inst_75659);

(statearr_75689_77580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75666 === (10))){
var inst_75649 = (state_75665[(2)]);
var state_75665__$1 = state_75665;
var statearr_75691_77582 = state_75665__$1;
(statearr_75691_77582[(2)] = inst_75649);

(statearr_75691_77582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75666 === (8))){
var inst_75637 = (state_75665[(11)]);
var inst_75627 = (state_75665[(8)]);
var tmp75687 = inst_75627;
var inst_75627__$1 = tmp75687;
var inst_75628 = inst_75637;
var state_75665__$1 = (function (){var statearr_75692 = state_75665;
(statearr_75692[(7)] = inst_75628);

(statearr_75692[(8)] = inst_75627__$1);

return statearr_75692;
})();
var statearr_75693_77590 = state_75665__$1;
(statearr_75693_77590[(2)] = null);

(statearr_75693_77590[(1)] = (2));


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
var cljs$core$async$state_machine__72553__auto__ = null;
var cljs$core$async$state_machine__72553__auto____0 = (function (){
var statearr_75695 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75695[(0)] = cljs$core$async$state_machine__72553__auto__);

(statearr_75695[(1)] = (1));

return statearr_75695;
});
var cljs$core$async$state_machine__72553__auto____1 = (function (state_75665){
while(true){
var ret_value__72554__auto__ = (function (){try{while(true){
var result__72555__auto__ = switch__72552__auto__(state_75665);
if(cljs.core.keyword_identical_QMARK_(result__72555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__72555__auto__;
}
break;
}
}catch (e75696){var ex__72556__auto__ = e75696;
var statearr_75698_77592 = state_75665;
(statearr_75698_77592[(2)] = ex__72556__auto__);


if(cljs.core.seq((state_75665[(4)]))){
var statearr_75699_77593 = state_75665;
(statearr_75699_77593[(1)] = cljs.core.first((state_75665[(4)])));

} else {
throw ex__72556__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__72554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77599 = state_75665;
state_75665 = G__77599;
continue;
} else {
return ret_value__72554__auto__;
}
break;
}
});
cljs$core$async$state_machine__72553__auto__ = function(state_75665){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__72553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__72553__auto____1.call(this,state_75665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__72553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__72553__auto____0;
cljs$core$async$state_machine__72553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__72553__auto____1;
return cljs$core$async$state_machine__72553__auto__;
})()
})();
var state__72603__auto__ = (function (){var statearr_75704 = f__72602__auto__();
(statearr_75704[(6)] = c__72601__auto___77550);

return statearr_75704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72603__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__75707 = arguments.length;
switch (G__75707) {
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
var c__72601__auto___77605 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72602__auto__ = (function (){var switch__72552__auto__ = (function (state_75755){
var state_val_75756 = (state_75755[(1)]);
if((state_val_75756 === (7))){
var inst_75751 = (state_75755[(2)]);
var state_75755__$1 = state_75755;
var statearr_75758_77610 = state_75755__$1;
(statearr_75758_77610[(2)] = inst_75751);

(statearr_75758_77610[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75756 === (1))){
var inst_75711 = [];
var inst_75712 = inst_75711;
var inst_75713 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_75755__$1 = (function (){var statearr_75760 = state_75755;
(statearr_75760[(7)] = inst_75713);

(statearr_75760[(8)] = inst_75712);

return statearr_75760;
})();
var statearr_75762_77611 = state_75755__$1;
(statearr_75762_77611[(2)] = null);

(statearr_75762_77611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75756 === (4))){
var inst_75717 = (state_75755[(9)]);
var inst_75717__$1 = (state_75755[(2)]);
var inst_75718 = (inst_75717__$1 == null);
var inst_75719 = cljs.core.not(inst_75718);
var state_75755__$1 = (function (){var statearr_75764 = state_75755;
(statearr_75764[(9)] = inst_75717__$1);

return statearr_75764;
})();
if(inst_75719){
var statearr_75765_77615 = state_75755__$1;
(statearr_75765_77615[(1)] = (5));

} else {
var statearr_75766_77616 = state_75755__$1;
(statearr_75766_77616[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75756 === (15))){
var inst_75745 = (state_75755[(2)]);
var state_75755__$1 = state_75755;
var statearr_75767_77618 = state_75755__$1;
(statearr_75767_77618[(2)] = inst_75745);

(statearr_75767_77618[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75756 === (13))){
var state_75755__$1 = state_75755;
var statearr_75768_77621 = state_75755__$1;
(statearr_75768_77621[(2)] = null);

(statearr_75768_77621[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75756 === (6))){
var inst_75712 = (state_75755[(8)]);
var inst_75739 = inst_75712.length;
var inst_75740 = (inst_75739 > (0));
var state_75755__$1 = state_75755;
if(cljs.core.truth_(inst_75740)){
var statearr_75769_77624 = state_75755__$1;
(statearr_75769_77624[(1)] = (12));

} else {
var statearr_75771_77625 = state_75755__$1;
(statearr_75771_77625[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75756 === (3))){
var inst_75753 = (state_75755[(2)]);
var state_75755__$1 = state_75755;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75755__$1,inst_75753);
} else {
if((state_val_75756 === (12))){
var inst_75712 = (state_75755[(8)]);
var inst_75743 = cljs.core.vec(inst_75712);
var state_75755__$1 = state_75755;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75755__$1,(15),out,inst_75743);
} else {
if((state_val_75756 === (2))){
var state_75755__$1 = state_75755;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75755__$1,(4),ch);
} else {
if((state_val_75756 === (11))){
var inst_75721 = (state_75755[(10)]);
var inst_75717 = (state_75755[(9)]);
var inst_75732 = (state_75755[(2)]);
var inst_75733 = [];
var inst_75734 = inst_75733.push(inst_75717);
var inst_75712 = inst_75733;
var inst_75713 = inst_75721;
var state_75755__$1 = (function (){var statearr_75781 = state_75755;
(statearr_75781[(7)] = inst_75713);

(statearr_75781[(8)] = inst_75712);

(statearr_75781[(11)] = inst_75732);

(statearr_75781[(12)] = inst_75734);

return statearr_75781;
})();
var statearr_75782_77631 = state_75755__$1;
(statearr_75782_77631[(2)] = null);

(statearr_75782_77631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75756 === (9))){
var inst_75712 = (state_75755[(8)]);
var inst_75730 = cljs.core.vec(inst_75712);
var state_75755__$1 = state_75755;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75755__$1,(11),out,inst_75730);
} else {
if((state_val_75756 === (5))){
var inst_75713 = (state_75755[(7)]);
var inst_75721 = (state_75755[(10)]);
var inst_75717 = (state_75755[(9)]);
var inst_75721__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_75717) : f.call(null,inst_75717));
var inst_75722 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_75721__$1,inst_75713);
var inst_75723 = cljs.core.keyword_identical_QMARK_(inst_75713,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_75724 = ((inst_75722) || (inst_75723));
var state_75755__$1 = (function (){var statearr_75784 = state_75755;
(statearr_75784[(10)] = inst_75721__$1);

return statearr_75784;
})();
if(cljs.core.truth_(inst_75724)){
var statearr_75788_77637 = state_75755__$1;
(statearr_75788_77637[(1)] = (8));

} else {
var statearr_75789_77638 = state_75755__$1;
(statearr_75789_77638[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75756 === (14))){
var inst_75748 = (state_75755[(2)]);
var inst_75749 = cljs.core.async.close_BANG_(out);
var state_75755__$1 = (function (){var statearr_75791 = state_75755;
(statearr_75791[(13)] = inst_75748);

return statearr_75791;
})();
var statearr_75792_77641 = state_75755__$1;
(statearr_75792_77641[(2)] = inst_75749);

(statearr_75792_77641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75756 === (10))){
var inst_75737 = (state_75755[(2)]);
var state_75755__$1 = state_75755;
var statearr_75794_77643 = state_75755__$1;
(statearr_75794_77643[(2)] = inst_75737);

(statearr_75794_77643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75756 === (8))){
var inst_75721 = (state_75755[(10)]);
var inst_75712 = (state_75755[(8)]);
var inst_75717 = (state_75755[(9)]);
var inst_75727 = inst_75712.push(inst_75717);
var tmp75790 = inst_75712;
var inst_75712__$1 = tmp75790;
var inst_75713 = inst_75721;
var state_75755__$1 = (function (){var statearr_75797 = state_75755;
(statearr_75797[(7)] = inst_75713);

(statearr_75797[(8)] = inst_75712__$1);

(statearr_75797[(14)] = inst_75727);

return statearr_75797;
})();
var statearr_75800_77649 = state_75755__$1;
(statearr_75800_77649[(2)] = null);

(statearr_75800_77649[(1)] = (2));


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
var cljs$core$async$state_machine__72553__auto__ = null;
var cljs$core$async$state_machine__72553__auto____0 = (function (){
var statearr_75802 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75802[(0)] = cljs$core$async$state_machine__72553__auto__);

(statearr_75802[(1)] = (1));

return statearr_75802;
});
var cljs$core$async$state_machine__72553__auto____1 = (function (state_75755){
while(true){
var ret_value__72554__auto__ = (function (){try{while(true){
var result__72555__auto__ = switch__72552__auto__(state_75755);
if(cljs.core.keyword_identical_QMARK_(result__72555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__72555__auto__;
}
break;
}
}catch (e75803){var ex__72556__auto__ = e75803;
var statearr_75804_77650 = state_75755;
(statearr_75804_77650[(2)] = ex__72556__auto__);


if(cljs.core.seq((state_75755[(4)]))){
var statearr_75805_77651 = state_75755;
(statearr_75805_77651[(1)] = cljs.core.first((state_75755[(4)])));

} else {
throw ex__72556__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__72554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77652 = state_75755;
state_75755 = G__77652;
continue;
} else {
return ret_value__72554__auto__;
}
break;
}
});
cljs$core$async$state_machine__72553__auto__ = function(state_75755){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__72553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__72553__auto____1.call(this,state_75755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__72553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__72553__auto____0;
cljs$core$async$state_machine__72553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__72553__auto____1;
return cljs$core$async$state_machine__72553__auto__;
})()
})();
var state__72603__auto__ = (function (){var statearr_75807 = f__72602__auto__();
(statearr_75807[(6)] = c__72601__auto___77605);

return statearr_75807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72603__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
