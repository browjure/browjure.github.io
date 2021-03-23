goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__73588 = arguments.length;
switch (G__73588) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async73591 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async73591 = (function (f,blockable,meta73592){
this.f = f;
this.blockable = blockable;
this.meta73592 = meta73592;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async73591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_73593,meta73592__$1){
var self__ = this;
var _73593__$1 = this;
return (new cljs.core.async.t_cljs$core$async73591(self__.f,self__.blockable,meta73592__$1));
}));

(cljs.core.async.t_cljs$core$async73591.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_73593){
var self__ = this;
var _73593__$1 = this;
return self__.meta73592;
}));

(cljs.core.async.t_cljs$core$async73591.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73591.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async73591.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async73591.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async73591.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta73592","meta73592",435695037,null)], null);
}));

(cljs.core.async.t_cljs$core$async73591.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async73591.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async73591");

(cljs.core.async.t_cljs$core$async73591.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async73591");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async73591.
 */
cljs.core.async.__GT_t_cljs$core$async73591 = (function cljs$core$async$__GT_t_cljs$core$async73591(f__$1,blockable__$1,meta73592){
return (new cljs.core.async.t_cljs$core$async73591(f__$1,blockable__$1,meta73592));
});

}

return (new cljs.core.async.t_cljs$core$async73591(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__73604 = arguments.length;
switch (G__73604) {
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
var G__73611 = arguments.length;
switch (G__73611) {
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
var G__73615 = arguments.length;
switch (G__73615) {
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
var val_76477 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_76477) : fn1.call(null,val_76477));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_76477) : fn1.call(null,val_76477));
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
var G__73617 = arguments.length;
switch (G__73617) {
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
var n__4613__auto___76502 = n;
var x_76510 = (0);
while(true){
if((x_76510 < n__4613__auto___76502)){
(a[x_76510] = x_76510);

var G__76511 = (x_76510 + (1));
x_76510 = G__76511;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async73621 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async73621 = (function (flag,meta73622){
this.flag = flag;
this.meta73622 = meta73622;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async73621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_73623,meta73622__$1){
var self__ = this;
var _73623__$1 = this;
return (new cljs.core.async.t_cljs$core$async73621(self__.flag,meta73622__$1));
}));

(cljs.core.async.t_cljs$core$async73621.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_73623){
var self__ = this;
var _73623__$1 = this;
return self__.meta73622;
}));

(cljs.core.async.t_cljs$core$async73621.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73621.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async73621.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async73621.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async73621.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta73622","meta73622",1088700452,null)], null);
}));

(cljs.core.async.t_cljs$core$async73621.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async73621.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async73621");

(cljs.core.async.t_cljs$core$async73621.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async73621");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async73621.
 */
cljs.core.async.__GT_t_cljs$core$async73621 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async73621(flag__$1,meta73622){
return (new cljs.core.async.t_cljs$core$async73621(flag__$1,meta73622));
});

}

return (new cljs.core.async.t_cljs$core$async73621(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async73627 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async73627 = (function (flag,cb,meta73628){
this.flag = flag;
this.cb = cb;
this.meta73628 = meta73628;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async73627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_73629,meta73628__$1){
var self__ = this;
var _73629__$1 = this;
return (new cljs.core.async.t_cljs$core$async73627(self__.flag,self__.cb,meta73628__$1));
}));

(cljs.core.async.t_cljs$core$async73627.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_73629){
var self__ = this;
var _73629__$1 = this;
return self__.meta73628;
}));

(cljs.core.async.t_cljs$core$async73627.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73627.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async73627.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async73627.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async73627.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta73628","meta73628",-168168643,null)], null);
}));

(cljs.core.async.t_cljs$core$async73627.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async73627.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async73627");

(cljs.core.async.t_cljs$core$async73627.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async73627");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async73627.
 */
cljs.core.async.__GT_t_cljs$core$async73627 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async73627(flag__$1,cb__$1,meta73628){
return (new cljs.core.async.t_cljs$core$async73627(flag__$1,cb__$1,meta73628));
});

}

return (new cljs.core.async.t_cljs$core$async73627(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__73635_SHARP_){
var G__73640 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__73635_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__73640) : fret.call(null,G__73640));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__73636_SHARP_){
var G__73641 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__73636_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__73641) : fret.call(null,G__73641));
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
var G__76578 = (i + (1));
i = G__76578;
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
var len__4736__auto___76590 = arguments.length;
var i__4737__auto___76592 = (0);
while(true){
if((i__4737__auto___76592 < len__4736__auto___76590)){
args__4742__auto__.push((arguments[i__4737__auto___76592]));

var G__76600 = (i__4737__auto___76592 + (1));
i__4737__auto___76592 = G__76600;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__73650){
var map__73654 = p__73650;
var map__73654__$1 = (((((!((map__73654 == null))))?(((((map__73654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73654):map__73654);
var opts = map__73654__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq73648){
var G__73649 = cljs.core.first(seq73648);
var seq73648__$1 = cljs.core.next(seq73648);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73649,seq73648__$1);
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
var G__73660 = arguments.length;
switch (G__73660) {
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
var c__73524__auto___76624 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__73525__auto__ = (function (){var switch__73174__auto__ = (function (state_73718){
var state_val_73720 = (state_73718[(1)]);
if((state_val_73720 === (7))){
var inst_73711 = (state_73718[(2)]);
var state_73718__$1 = state_73718;
var statearr_73730_76633 = state_73718__$1;
(statearr_73730_76633[(2)] = inst_73711);

(statearr_73730_76633[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73720 === (1))){
var state_73718__$1 = state_73718;
var statearr_73733_76635 = state_73718__$1;
(statearr_73733_76635[(2)] = null);

(statearr_73733_76635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73720 === (4))){
var inst_73679 = (state_73718[(7)]);
var inst_73679__$1 = (state_73718[(2)]);
var inst_73690 = (inst_73679__$1 == null);
var state_73718__$1 = (function (){var statearr_73735 = state_73718;
(statearr_73735[(7)] = inst_73679__$1);

return statearr_73735;
})();
if(cljs.core.truth_(inst_73690)){
var statearr_73736_76645 = state_73718__$1;
(statearr_73736_76645[(1)] = (5));

} else {
var statearr_73737_76646 = state_73718__$1;
(statearr_73737_76646[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73720 === (13))){
var state_73718__$1 = state_73718;
var statearr_73740_76647 = state_73718__$1;
(statearr_73740_76647[(2)] = null);

(statearr_73740_76647[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73720 === (6))){
var inst_73679 = (state_73718[(7)]);
var state_73718__$1 = state_73718;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73718__$1,(11),to,inst_73679);
} else {
if((state_val_73720 === (3))){
var inst_73713 = (state_73718[(2)]);
var state_73718__$1 = state_73718;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73718__$1,inst_73713);
} else {
if((state_val_73720 === (12))){
var state_73718__$1 = state_73718;
var statearr_73745_76658 = state_73718__$1;
(statearr_73745_76658[(2)] = null);

(statearr_73745_76658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73720 === (2))){
var state_73718__$1 = state_73718;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73718__$1,(4),from);
} else {
if((state_val_73720 === (11))){
var inst_73704 = (state_73718[(2)]);
var state_73718__$1 = state_73718;
if(cljs.core.truth_(inst_73704)){
var statearr_73747_76661 = state_73718__$1;
(statearr_73747_76661[(1)] = (12));

} else {
var statearr_73749_76662 = state_73718__$1;
(statearr_73749_76662[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73720 === (9))){
var state_73718__$1 = state_73718;
var statearr_73753_76671 = state_73718__$1;
(statearr_73753_76671[(2)] = null);

(statearr_73753_76671[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73720 === (5))){
var state_73718__$1 = state_73718;
if(cljs.core.truth_(close_QMARK_)){
var statearr_73754_76672 = state_73718__$1;
(statearr_73754_76672[(1)] = (8));

} else {
var statearr_73755_76673 = state_73718__$1;
(statearr_73755_76673[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73720 === (14))){
var inst_73709 = (state_73718[(2)]);
var state_73718__$1 = state_73718;
var statearr_73757_76676 = state_73718__$1;
(statearr_73757_76676[(2)] = inst_73709);

(statearr_73757_76676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73720 === (10))){
var inst_73701 = (state_73718[(2)]);
var state_73718__$1 = state_73718;
var statearr_73761_76685 = state_73718__$1;
(statearr_73761_76685[(2)] = inst_73701);

(statearr_73761_76685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73720 === (8))){
var inst_73696 = cljs.core.async.close_BANG_(to);
var state_73718__$1 = state_73718;
var statearr_73762_76686 = state_73718__$1;
(statearr_73762_76686[(2)] = inst_73696);

(statearr_73762_76686[(1)] = (10));


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
var cljs$core$async$state_machine__73175__auto__ = null;
var cljs$core$async$state_machine__73175__auto____0 = (function (){
var statearr_73767 = [null,null,null,null,null,null,null,null];
(statearr_73767[(0)] = cljs$core$async$state_machine__73175__auto__);

(statearr_73767[(1)] = (1));

return statearr_73767;
});
var cljs$core$async$state_machine__73175__auto____1 = (function (state_73718){
while(true){
var ret_value__73176__auto__ = (function (){try{while(true){
var result__73177__auto__ = switch__73174__auto__(state_73718);
if(cljs.core.keyword_identical_QMARK_(result__73177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73177__auto__;
}
break;
}
}catch (e73768){var ex__73178__auto__ = e73768;
var statearr_73770_76702 = state_73718;
(statearr_73770_76702[(2)] = ex__73178__auto__);


if(cljs.core.seq((state_73718[(4)]))){
var statearr_73772_76703 = state_73718;
(statearr_73772_76703[(1)] = cljs.core.first((state_73718[(4)])));

} else {
throw ex__73178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76712 = state_73718;
state_73718 = G__76712;
continue;
} else {
return ret_value__73176__auto__;
}
break;
}
});
cljs$core$async$state_machine__73175__auto__ = function(state_73718){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__73175__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__73175__auto____1.call(this,state_73718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__73175__auto____0;
cljs$core$async$state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__73175__auto____1;
return cljs$core$async$state_machine__73175__auto__;
})()
})();
var state__73526__auto__ = (function (){var statearr_73776 = f__73525__auto__();
(statearr_73776[(6)] = c__73524__auto___76624);

return statearr_73776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__73526__auto__);
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
var process = (function (p__73780){
var vec__73781 = p__73780;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73781,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73781,(1),null);
var job = vec__73781;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__73524__auto___76736 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__73525__auto__ = (function (){var switch__73174__auto__ = (function (state_73789){
var state_val_73790 = (state_73789[(1)]);
if((state_val_73790 === (1))){
var state_73789__$1 = state_73789;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73789__$1,(2),res,v);
} else {
if((state_val_73790 === (2))){
var inst_73786 = (state_73789[(2)]);
var inst_73787 = cljs.core.async.close_BANG_(res);
var state_73789__$1 = (function (){var statearr_73794 = state_73789;
(statearr_73794[(7)] = inst_73786);

return statearr_73794;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_73789__$1,inst_73787);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__73175__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__73175__auto____0 = (function (){
var statearr_73796 = [null,null,null,null,null,null,null,null];
(statearr_73796[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__73175__auto__);

(statearr_73796[(1)] = (1));

return statearr_73796;
});
var cljs$core$async$pipeline_STAR__$_state_machine__73175__auto____1 = (function (state_73789){
while(true){
var ret_value__73176__auto__ = (function (){try{while(true){
var result__73177__auto__ = switch__73174__auto__(state_73789);
if(cljs.core.keyword_identical_QMARK_(result__73177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73177__auto__;
}
break;
}
}catch (e73797){var ex__73178__auto__ = e73797;
var statearr_73799_76758 = state_73789;
(statearr_73799_76758[(2)] = ex__73178__auto__);


if(cljs.core.seq((state_73789[(4)]))){
var statearr_73801_76759 = state_73789;
(statearr_73801_76759[(1)] = cljs.core.first((state_73789[(4)])));

} else {
throw ex__73178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76762 = state_73789;
state_73789 = G__76762;
continue;
} else {
return ret_value__73176__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__73175__auto__ = function(state_73789){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__73175__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__73175__auto____1.call(this,state_73789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__73175__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__73175__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__73175__auto__;
})()
})();
var state__73526__auto__ = (function (){var statearr_73804 = f__73525__auto__();
(statearr_73804[(6)] = c__73524__auto___76736);

return statearr_73804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__73526__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__73805){
var vec__73806 = p__73805;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73806,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73806,(1),null);
var job = vec__73806;
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
var n__4613__auto___76774 = n;
var __76775 = (0);
while(true){
if((__76775 < n__4613__auto___76774)){
var G__73811_76783 = type;
var G__73811_76784__$1 = (((G__73811_76783 instanceof cljs.core.Keyword))?G__73811_76783.fqn:null);
switch (G__73811_76784__$1) {
case "compute":
var c__73524__auto___76787 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__76775,c__73524__auto___76787,G__73811_76783,G__73811_76784__$1,n__4613__auto___76774,jobs,results,process,async){
return (function (){
var f__73525__auto__ = (function (){var switch__73174__auto__ = ((function (__76775,c__73524__auto___76787,G__73811_76783,G__73811_76784__$1,n__4613__auto___76774,jobs,results,process,async){
return (function (state_73826){
var state_val_73827 = (state_73826[(1)]);
if((state_val_73827 === (1))){
var state_73826__$1 = state_73826;
var statearr_73831_76791 = state_73826__$1;
(statearr_73831_76791[(2)] = null);

(statearr_73831_76791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73827 === (2))){
var state_73826__$1 = state_73826;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73826__$1,(4),jobs);
} else {
if((state_val_73827 === (3))){
var inst_73823 = (state_73826[(2)]);
var state_73826__$1 = state_73826;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73826__$1,inst_73823);
} else {
if((state_val_73827 === (4))){
var inst_73815 = (state_73826[(2)]);
var inst_73816 = process(inst_73815);
var state_73826__$1 = state_73826;
if(cljs.core.truth_(inst_73816)){
var statearr_73832_76800 = state_73826__$1;
(statearr_73832_76800[(1)] = (5));

} else {
var statearr_73833_76802 = state_73826__$1;
(statearr_73833_76802[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73827 === (5))){
var state_73826__$1 = state_73826;
var statearr_73836_76804 = state_73826__$1;
(statearr_73836_76804[(2)] = null);

(statearr_73836_76804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73827 === (6))){
var state_73826__$1 = state_73826;
var statearr_73837_76814 = state_73826__$1;
(statearr_73837_76814[(2)] = null);

(statearr_73837_76814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73827 === (7))){
var inst_73821 = (state_73826[(2)]);
var state_73826__$1 = state_73826;
var statearr_73840_76815 = state_73826__$1;
(statearr_73840_76815[(2)] = inst_73821);

(statearr_73840_76815[(1)] = (3));


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
});})(__76775,c__73524__auto___76787,G__73811_76783,G__73811_76784__$1,n__4613__auto___76774,jobs,results,process,async))
;
return ((function (__76775,switch__73174__auto__,c__73524__auto___76787,G__73811_76783,G__73811_76784__$1,n__4613__auto___76774,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__73175__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__73175__auto____0 = (function (){
var statearr_73843 = [null,null,null,null,null,null,null];
(statearr_73843[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__73175__auto__);

(statearr_73843[(1)] = (1));

return statearr_73843;
});
var cljs$core$async$pipeline_STAR__$_state_machine__73175__auto____1 = (function (state_73826){
while(true){
var ret_value__73176__auto__ = (function (){try{while(true){
var result__73177__auto__ = switch__73174__auto__(state_73826);
if(cljs.core.keyword_identical_QMARK_(result__73177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73177__auto__;
}
break;
}
}catch (e73844){var ex__73178__auto__ = e73844;
var statearr_73845_76828 = state_73826;
(statearr_73845_76828[(2)] = ex__73178__auto__);


if(cljs.core.seq((state_73826[(4)]))){
var statearr_73846_76830 = state_73826;
(statearr_73846_76830[(1)] = cljs.core.first((state_73826[(4)])));

} else {
throw ex__73178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76833 = state_73826;
state_73826 = G__76833;
continue;
} else {
return ret_value__73176__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__73175__auto__ = function(state_73826){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__73175__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__73175__auto____1.call(this,state_73826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__73175__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__73175__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__73175__auto__;
})()
;})(__76775,switch__73174__auto__,c__73524__auto___76787,G__73811_76783,G__73811_76784__$1,n__4613__auto___76774,jobs,results,process,async))
})();
var state__73526__auto__ = (function (){var statearr_73849 = f__73525__auto__();
(statearr_73849[(6)] = c__73524__auto___76787);

return statearr_73849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__73526__auto__);
});})(__76775,c__73524__auto___76787,G__73811_76783,G__73811_76784__$1,n__4613__auto___76774,jobs,results,process,async))
);


break;
case "async":
var c__73524__auto___76841 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__76775,c__73524__auto___76841,G__73811_76783,G__73811_76784__$1,n__4613__auto___76774,jobs,results,process,async){
return (function (){
var f__73525__auto__ = (function (){var switch__73174__auto__ = ((function (__76775,c__73524__auto___76841,G__73811_76783,G__73811_76784__$1,n__4613__auto___76774,jobs,results,process,async){
return (function (state_73864){
var state_val_73865 = (state_73864[(1)]);
if((state_val_73865 === (1))){
var state_73864__$1 = state_73864;
var statearr_73867_76854 = state_73864__$1;
(statearr_73867_76854[(2)] = null);

(statearr_73867_76854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73865 === (2))){
var state_73864__$1 = state_73864;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73864__$1,(4),jobs);
} else {
if((state_val_73865 === (3))){
var inst_73862 = (state_73864[(2)]);
var state_73864__$1 = state_73864;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73864__$1,inst_73862);
} else {
if((state_val_73865 === (4))){
var inst_73854 = (state_73864[(2)]);
var inst_73855 = async(inst_73854);
var state_73864__$1 = state_73864;
if(cljs.core.truth_(inst_73855)){
var statearr_73869_76858 = state_73864__$1;
(statearr_73869_76858[(1)] = (5));

} else {
var statearr_73870_76859 = state_73864__$1;
(statearr_73870_76859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73865 === (5))){
var state_73864__$1 = state_73864;
var statearr_73871_76869 = state_73864__$1;
(statearr_73871_76869[(2)] = null);

(statearr_73871_76869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73865 === (6))){
var state_73864__$1 = state_73864;
var statearr_73873_76871 = state_73864__$1;
(statearr_73873_76871[(2)] = null);

(statearr_73873_76871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73865 === (7))){
var inst_73860 = (state_73864[(2)]);
var state_73864__$1 = state_73864;
var statearr_73874_76873 = state_73864__$1;
(statearr_73874_76873[(2)] = inst_73860);

(statearr_73874_76873[(1)] = (3));


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
});})(__76775,c__73524__auto___76841,G__73811_76783,G__73811_76784__$1,n__4613__auto___76774,jobs,results,process,async))
;
return ((function (__76775,switch__73174__auto__,c__73524__auto___76841,G__73811_76783,G__73811_76784__$1,n__4613__auto___76774,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__73175__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__73175__auto____0 = (function (){
var statearr_73876 = [null,null,null,null,null,null,null];
(statearr_73876[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__73175__auto__);

(statearr_73876[(1)] = (1));

return statearr_73876;
});
var cljs$core$async$pipeline_STAR__$_state_machine__73175__auto____1 = (function (state_73864){
while(true){
var ret_value__73176__auto__ = (function (){try{while(true){
var result__73177__auto__ = switch__73174__auto__(state_73864);
if(cljs.core.keyword_identical_QMARK_(result__73177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73177__auto__;
}
break;
}
}catch (e73877){var ex__73178__auto__ = e73877;
var statearr_73878_76885 = state_73864;
(statearr_73878_76885[(2)] = ex__73178__auto__);


if(cljs.core.seq((state_73864[(4)]))){
var statearr_73880_76886 = state_73864;
(statearr_73880_76886[(1)] = cljs.core.first((state_73864[(4)])));

} else {
throw ex__73178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76895 = state_73864;
state_73864 = G__76895;
continue;
} else {
return ret_value__73176__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__73175__auto__ = function(state_73864){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__73175__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__73175__auto____1.call(this,state_73864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__73175__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__73175__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__73175__auto__;
})()
;})(__76775,switch__73174__auto__,c__73524__auto___76841,G__73811_76783,G__73811_76784__$1,n__4613__auto___76774,jobs,results,process,async))
})();
var state__73526__auto__ = (function (){var statearr_73881 = f__73525__auto__();
(statearr_73881[(6)] = c__73524__auto___76841);

return statearr_73881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__73526__auto__);
});})(__76775,c__73524__auto___76841,G__73811_76783,G__73811_76784__$1,n__4613__auto___76774,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__73811_76784__$1)].join('')));

}

var G__76898 = (__76775 + (1));
__76775 = G__76898;
continue;
} else {
}
break;
}

var c__73524__auto___76899 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__73525__auto__ = (function (){var switch__73174__auto__ = (function (state_73907){
var state_val_73908 = (state_73907[(1)]);
if((state_val_73908 === (7))){
var inst_73903 = (state_73907[(2)]);
var state_73907__$1 = state_73907;
var statearr_73913_76908 = state_73907__$1;
(statearr_73913_76908[(2)] = inst_73903);

(statearr_73913_76908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73908 === (1))){
var state_73907__$1 = state_73907;
var statearr_73914_76910 = state_73907__$1;
(statearr_73914_76910[(2)] = null);

(statearr_73914_76910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73908 === (4))){
var inst_73884 = (state_73907[(7)]);
var inst_73884__$1 = (state_73907[(2)]);
var inst_73885 = (inst_73884__$1 == null);
var state_73907__$1 = (function (){var statearr_73918 = state_73907;
(statearr_73918[(7)] = inst_73884__$1);

return statearr_73918;
})();
if(cljs.core.truth_(inst_73885)){
var statearr_73920_76921 = state_73907__$1;
(statearr_73920_76921[(1)] = (5));

} else {
var statearr_73921_76922 = state_73907__$1;
(statearr_73921_76922[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73908 === (6))){
var inst_73891 = (state_73907[(8)]);
var inst_73884 = (state_73907[(7)]);
var inst_73891__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_73892 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73895 = [inst_73884,inst_73891__$1];
var inst_73896 = (new cljs.core.PersistentVector(null,2,(5),inst_73892,inst_73895,null));
var state_73907__$1 = (function (){var statearr_73922 = state_73907;
(statearr_73922[(8)] = inst_73891__$1);

return statearr_73922;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73907__$1,(8),jobs,inst_73896);
} else {
if((state_val_73908 === (3))){
var inst_73905 = (state_73907[(2)]);
var state_73907__$1 = state_73907;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73907__$1,inst_73905);
} else {
if((state_val_73908 === (2))){
var state_73907__$1 = state_73907;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73907__$1,(4),from);
} else {
if((state_val_73908 === (9))){
var inst_73900 = (state_73907[(2)]);
var state_73907__$1 = (function (){var statearr_73924 = state_73907;
(statearr_73924[(9)] = inst_73900);

return statearr_73924;
})();
var statearr_73925_76936 = state_73907__$1;
(statearr_73925_76936[(2)] = null);

(statearr_73925_76936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73908 === (5))){
var inst_73887 = cljs.core.async.close_BANG_(jobs);
var state_73907__$1 = state_73907;
var statearr_73928_76939 = state_73907__$1;
(statearr_73928_76939[(2)] = inst_73887);

(statearr_73928_76939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73908 === (8))){
var inst_73891 = (state_73907[(8)]);
var inst_73898 = (state_73907[(2)]);
var state_73907__$1 = (function (){var statearr_73930 = state_73907;
(statearr_73930[(10)] = inst_73898);

return statearr_73930;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73907__$1,(9),results,inst_73891);
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
var cljs$core$async$pipeline_STAR__$_state_machine__73175__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__73175__auto____0 = (function (){
var statearr_73931 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_73931[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__73175__auto__);

(statearr_73931[(1)] = (1));

return statearr_73931;
});
var cljs$core$async$pipeline_STAR__$_state_machine__73175__auto____1 = (function (state_73907){
while(true){
var ret_value__73176__auto__ = (function (){try{while(true){
var result__73177__auto__ = switch__73174__auto__(state_73907);
if(cljs.core.keyword_identical_QMARK_(result__73177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73177__auto__;
}
break;
}
}catch (e73935){var ex__73178__auto__ = e73935;
var statearr_73936_76956 = state_73907;
(statearr_73936_76956[(2)] = ex__73178__auto__);


if(cljs.core.seq((state_73907[(4)]))){
var statearr_73937_76958 = state_73907;
(statearr_73937_76958[(1)] = cljs.core.first((state_73907[(4)])));

} else {
throw ex__73178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76961 = state_73907;
state_73907 = G__76961;
continue;
} else {
return ret_value__73176__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__73175__auto__ = function(state_73907){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__73175__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__73175__auto____1.call(this,state_73907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__73175__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__73175__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__73175__auto__;
})()
})();
var state__73526__auto__ = (function (){var statearr_73939 = f__73525__auto__();
(statearr_73939[(6)] = c__73524__auto___76899);

return statearr_73939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__73526__auto__);
}));


var c__73524__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__73525__auto__ = (function (){var switch__73174__auto__ = (function (state_73983){
var state_val_73984 = (state_73983[(1)]);
if((state_val_73984 === (7))){
var inst_73977 = (state_73983[(2)]);
var state_73983__$1 = state_73983;
var statearr_73986_76971 = state_73983__$1;
(statearr_73986_76971[(2)] = inst_73977);

(statearr_73986_76971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73984 === (20))){
var state_73983__$1 = state_73983;
var statearr_73987_76974 = state_73983__$1;
(statearr_73987_76974[(2)] = null);

(statearr_73987_76974[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73984 === (1))){
var state_73983__$1 = state_73983;
var statearr_73988_76983 = state_73983__$1;
(statearr_73988_76983[(2)] = null);

(statearr_73988_76983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73984 === (4))){
var inst_73943 = (state_73983[(7)]);
var inst_73943__$1 = (state_73983[(2)]);
var inst_73945 = (inst_73943__$1 == null);
var state_73983__$1 = (function (){var statearr_73991 = state_73983;
(statearr_73991[(7)] = inst_73943__$1);

return statearr_73991;
})();
if(cljs.core.truth_(inst_73945)){
var statearr_73992_76985 = state_73983__$1;
(statearr_73992_76985[(1)] = (5));

} else {
var statearr_73994_76987 = state_73983__$1;
(statearr_73994_76987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73984 === (15))){
var inst_73958 = (state_73983[(8)]);
var state_73983__$1 = state_73983;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73983__$1,(18),to,inst_73958);
} else {
if((state_val_73984 === (21))){
var inst_73972 = (state_73983[(2)]);
var state_73983__$1 = state_73983;
var statearr_73999_76996 = state_73983__$1;
(statearr_73999_76996[(2)] = inst_73972);

(statearr_73999_76996[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73984 === (13))){
var inst_73974 = (state_73983[(2)]);
var state_73983__$1 = (function (){var statearr_74001 = state_73983;
(statearr_74001[(9)] = inst_73974);

return statearr_74001;
})();
var statearr_74002_76999 = state_73983__$1;
(statearr_74002_76999[(2)] = null);

(statearr_74002_76999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73984 === (6))){
var inst_73943 = (state_73983[(7)]);
var state_73983__$1 = state_73983;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73983__$1,(11),inst_73943);
} else {
if((state_val_73984 === (17))){
var inst_73967 = (state_73983[(2)]);
var state_73983__$1 = state_73983;
if(cljs.core.truth_(inst_73967)){
var statearr_74004_77008 = state_73983__$1;
(statearr_74004_77008[(1)] = (19));

} else {
var statearr_74005_77009 = state_73983__$1;
(statearr_74005_77009[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73984 === (3))){
var inst_73979 = (state_73983[(2)]);
var state_73983__$1 = state_73983;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73983__$1,inst_73979);
} else {
if((state_val_73984 === (12))){
var inst_73955 = (state_73983[(10)]);
var state_73983__$1 = state_73983;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73983__$1,(14),inst_73955);
} else {
if((state_val_73984 === (2))){
var state_73983__$1 = state_73983;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73983__$1,(4),results);
} else {
if((state_val_73984 === (19))){
var state_73983__$1 = state_73983;
var statearr_74011_77022 = state_73983__$1;
(statearr_74011_77022[(2)] = null);

(statearr_74011_77022[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73984 === (11))){
var inst_73955 = (state_73983[(2)]);
var state_73983__$1 = (function (){var statearr_74013 = state_73983;
(statearr_74013[(10)] = inst_73955);

return statearr_74013;
})();
var statearr_74014_77025 = state_73983__$1;
(statearr_74014_77025[(2)] = null);

(statearr_74014_77025[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73984 === (9))){
var state_73983__$1 = state_73983;
var statearr_74017_77028 = state_73983__$1;
(statearr_74017_77028[(2)] = null);

(statearr_74017_77028[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73984 === (5))){
var state_73983__$1 = state_73983;
if(cljs.core.truth_(close_QMARK_)){
var statearr_74020_77037 = state_73983__$1;
(statearr_74020_77037[(1)] = (8));

} else {
var statearr_74022_77038 = state_73983__$1;
(statearr_74022_77038[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73984 === (14))){
var inst_73958 = (state_73983[(8)]);
var inst_73958__$1 = (state_73983[(2)]);
var inst_73960 = (inst_73958__$1 == null);
var inst_73961 = cljs.core.not(inst_73960);
var state_73983__$1 = (function (){var statearr_74023 = state_73983;
(statearr_74023[(8)] = inst_73958__$1);

return statearr_74023;
})();
if(inst_73961){
var statearr_74026_77039 = state_73983__$1;
(statearr_74026_77039[(1)] = (15));

} else {
var statearr_74028_77040 = state_73983__$1;
(statearr_74028_77040[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73984 === (16))){
var state_73983__$1 = state_73983;
var statearr_74029_77041 = state_73983__$1;
(statearr_74029_77041[(2)] = false);

(statearr_74029_77041[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73984 === (10))){
var inst_73952 = (state_73983[(2)]);
var state_73983__$1 = state_73983;
var statearr_74033_77045 = state_73983__$1;
(statearr_74033_77045[(2)] = inst_73952);

(statearr_74033_77045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73984 === (18))){
var inst_73964 = (state_73983[(2)]);
var state_73983__$1 = state_73983;
var statearr_74034_77055 = state_73983__$1;
(statearr_74034_77055[(2)] = inst_73964);

(statearr_74034_77055[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73984 === (8))){
var inst_73949 = cljs.core.async.close_BANG_(to);
var state_73983__$1 = state_73983;
var statearr_74035_77056 = state_73983__$1;
(statearr_74035_77056[(2)] = inst_73949);

(statearr_74035_77056[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__73175__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__73175__auto____0 = (function (){
var statearr_74037 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_74037[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__73175__auto__);

(statearr_74037[(1)] = (1));

return statearr_74037;
});
var cljs$core$async$pipeline_STAR__$_state_machine__73175__auto____1 = (function (state_73983){
while(true){
var ret_value__73176__auto__ = (function (){try{while(true){
var result__73177__auto__ = switch__73174__auto__(state_73983);
if(cljs.core.keyword_identical_QMARK_(result__73177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73177__auto__;
}
break;
}
}catch (e74038){var ex__73178__auto__ = e74038;
var statearr_74039_77071 = state_73983;
(statearr_74039_77071[(2)] = ex__73178__auto__);


if(cljs.core.seq((state_73983[(4)]))){
var statearr_74042_77073 = state_73983;
(statearr_74042_77073[(1)] = cljs.core.first((state_73983[(4)])));

} else {
throw ex__73178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77078 = state_73983;
state_73983 = G__77078;
continue;
} else {
return ret_value__73176__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__73175__auto__ = function(state_73983){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__73175__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__73175__auto____1.call(this,state_73983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__73175__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__73175__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__73175__auto__;
})()
})();
var state__73526__auto__ = (function (){var statearr_74043 = f__73525__auto__();
(statearr_74043[(6)] = c__73524__auto__);

return statearr_74043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__73526__auto__);
}));

return c__73524__auto__;
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
var G__74047 = arguments.length;
switch (G__74047) {
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
var G__74058 = arguments.length;
switch (G__74058) {
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
var G__74067 = arguments.length;
switch (G__74067) {
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
var c__73524__auto___77123 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__73525__auto__ = (function (){var switch__73174__auto__ = (function (state_74098){
var state_val_74099 = (state_74098[(1)]);
if((state_val_74099 === (7))){
var inst_74094 = (state_74098[(2)]);
var state_74098__$1 = state_74098;
var statearr_74101_77124 = state_74098__$1;
(statearr_74101_77124[(2)] = inst_74094);

(statearr_74101_77124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74099 === (1))){
var state_74098__$1 = state_74098;
var statearr_74102_77126 = state_74098__$1;
(statearr_74102_77126[(2)] = null);

(statearr_74102_77126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74099 === (4))){
var inst_74074 = (state_74098[(7)]);
var inst_74074__$1 = (state_74098[(2)]);
var inst_74075 = (inst_74074__$1 == null);
var state_74098__$1 = (function (){var statearr_74103 = state_74098;
(statearr_74103[(7)] = inst_74074__$1);

return statearr_74103;
})();
if(cljs.core.truth_(inst_74075)){
var statearr_74106_77127 = state_74098__$1;
(statearr_74106_77127[(1)] = (5));

} else {
var statearr_74107_77128 = state_74098__$1;
(statearr_74107_77128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74099 === (13))){
var state_74098__$1 = state_74098;
var statearr_74110_77130 = state_74098__$1;
(statearr_74110_77130[(2)] = null);

(statearr_74110_77130[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74099 === (6))){
var inst_74074 = (state_74098[(7)]);
var inst_74081 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_74074) : p.call(null,inst_74074));
var state_74098__$1 = state_74098;
if(cljs.core.truth_(inst_74081)){
var statearr_74113_77133 = state_74098__$1;
(statearr_74113_77133[(1)] = (9));

} else {
var statearr_74114_77141 = state_74098__$1;
(statearr_74114_77141[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74099 === (3))){
var inst_74096 = (state_74098[(2)]);
var state_74098__$1 = state_74098;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74098__$1,inst_74096);
} else {
if((state_val_74099 === (12))){
var state_74098__$1 = state_74098;
var statearr_74117_77143 = state_74098__$1;
(statearr_74117_77143[(2)] = null);

(statearr_74117_77143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74099 === (2))){
var state_74098__$1 = state_74098;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74098__$1,(4),ch);
} else {
if((state_val_74099 === (11))){
var inst_74074 = (state_74098[(7)]);
var inst_74085 = (state_74098[(2)]);
var state_74098__$1 = state_74098;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74098__$1,(8),inst_74085,inst_74074);
} else {
if((state_val_74099 === (9))){
var state_74098__$1 = state_74098;
var statearr_74121_77155 = state_74098__$1;
(statearr_74121_77155[(2)] = tc);

(statearr_74121_77155[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74099 === (5))){
var inst_74078 = cljs.core.async.close_BANG_(tc);
var inst_74079 = cljs.core.async.close_BANG_(fc);
var state_74098__$1 = (function (){var statearr_74125 = state_74098;
(statearr_74125[(8)] = inst_74078);

return statearr_74125;
})();
var statearr_74128_77158 = state_74098__$1;
(statearr_74128_77158[(2)] = inst_74079);

(statearr_74128_77158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74099 === (14))){
var inst_74092 = (state_74098[(2)]);
var state_74098__$1 = state_74098;
var statearr_74130_77162 = state_74098__$1;
(statearr_74130_77162[(2)] = inst_74092);

(statearr_74130_77162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74099 === (10))){
var state_74098__$1 = state_74098;
var statearr_74133_77170 = state_74098__$1;
(statearr_74133_77170[(2)] = fc);

(statearr_74133_77170[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74099 === (8))){
var inst_74087 = (state_74098[(2)]);
var state_74098__$1 = state_74098;
if(cljs.core.truth_(inst_74087)){
var statearr_74135_77171 = state_74098__$1;
(statearr_74135_77171[(1)] = (12));

} else {
var statearr_74136_77173 = state_74098__$1;
(statearr_74136_77173[(1)] = (13));

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
var cljs$core$async$state_machine__73175__auto__ = null;
var cljs$core$async$state_machine__73175__auto____0 = (function (){
var statearr_74140 = [null,null,null,null,null,null,null,null,null];
(statearr_74140[(0)] = cljs$core$async$state_machine__73175__auto__);

(statearr_74140[(1)] = (1));

return statearr_74140;
});
var cljs$core$async$state_machine__73175__auto____1 = (function (state_74098){
while(true){
var ret_value__73176__auto__ = (function (){try{while(true){
var result__73177__auto__ = switch__73174__auto__(state_74098);
if(cljs.core.keyword_identical_QMARK_(result__73177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73177__auto__;
}
break;
}
}catch (e74142){var ex__73178__auto__ = e74142;
var statearr_74143_77183 = state_74098;
(statearr_74143_77183[(2)] = ex__73178__auto__);


if(cljs.core.seq((state_74098[(4)]))){
var statearr_74148_77186 = state_74098;
(statearr_74148_77186[(1)] = cljs.core.first((state_74098[(4)])));

} else {
throw ex__73178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77195 = state_74098;
state_74098 = G__77195;
continue;
} else {
return ret_value__73176__auto__;
}
break;
}
});
cljs$core$async$state_machine__73175__auto__ = function(state_74098){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__73175__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__73175__auto____1.call(this,state_74098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__73175__auto____0;
cljs$core$async$state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__73175__auto____1;
return cljs$core$async$state_machine__73175__auto__;
})()
})();
var state__73526__auto__ = (function (){var statearr_74149 = f__73525__auto__();
(statearr_74149[(6)] = c__73524__auto___77123);

return statearr_74149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__73526__auto__);
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
var c__73524__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__73525__auto__ = (function (){var switch__73174__auto__ = (function (state_74178){
var state_val_74179 = (state_74178[(1)]);
if((state_val_74179 === (7))){
var inst_74173 = (state_74178[(2)]);
var state_74178__$1 = state_74178;
var statearr_74183_77206 = state_74178__$1;
(statearr_74183_77206[(2)] = inst_74173);

(statearr_74183_77206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74179 === (1))){
var inst_74151 = init;
var inst_74152 = inst_74151;
var state_74178__$1 = (function (){var statearr_74185 = state_74178;
(statearr_74185[(7)] = inst_74152);

return statearr_74185;
})();
var statearr_74186_77211 = state_74178__$1;
(statearr_74186_77211[(2)] = null);

(statearr_74186_77211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74179 === (4))){
var inst_74155 = (state_74178[(8)]);
var inst_74155__$1 = (state_74178[(2)]);
var inst_74156 = (inst_74155__$1 == null);
var state_74178__$1 = (function (){var statearr_74187 = state_74178;
(statearr_74187[(8)] = inst_74155__$1);

return statearr_74187;
})();
if(cljs.core.truth_(inst_74156)){
var statearr_74188_77223 = state_74178__$1;
(statearr_74188_77223[(1)] = (5));

} else {
var statearr_74189_77224 = state_74178__$1;
(statearr_74189_77224[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74179 === (6))){
var inst_74155 = (state_74178[(8)]);
var inst_74160 = (state_74178[(9)]);
var inst_74152 = (state_74178[(7)]);
var inst_74160__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_74152,inst_74155) : f.call(null,inst_74152,inst_74155));
var inst_74162 = cljs.core.reduced_QMARK_(inst_74160__$1);
var state_74178__$1 = (function (){var statearr_74190 = state_74178;
(statearr_74190[(9)] = inst_74160__$1);

return statearr_74190;
})();
if(inst_74162){
var statearr_74191_77235 = state_74178__$1;
(statearr_74191_77235[(1)] = (8));

} else {
var statearr_74192_77236 = state_74178__$1;
(statearr_74192_77236[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74179 === (3))){
var inst_74175 = (state_74178[(2)]);
var state_74178__$1 = state_74178;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74178__$1,inst_74175);
} else {
if((state_val_74179 === (2))){
var state_74178__$1 = state_74178;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74178__$1,(4),ch);
} else {
if((state_val_74179 === (9))){
var inst_74160 = (state_74178[(9)]);
var inst_74152 = inst_74160;
var state_74178__$1 = (function (){var statearr_74200 = state_74178;
(statearr_74200[(7)] = inst_74152);

return statearr_74200;
})();
var statearr_74201_77240 = state_74178__$1;
(statearr_74201_77240[(2)] = null);

(statearr_74201_77240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74179 === (5))){
var inst_74152 = (state_74178[(7)]);
var state_74178__$1 = state_74178;
var statearr_74207_77248 = state_74178__$1;
(statearr_74207_77248[(2)] = inst_74152);

(statearr_74207_77248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74179 === (10))){
var inst_74171 = (state_74178[(2)]);
var state_74178__$1 = state_74178;
var statearr_74209_77251 = state_74178__$1;
(statearr_74209_77251[(2)] = inst_74171);

(statearr_74209_77251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74179 === (8))){
var inst_74160 = (state_74178[(9)]);
var inst_74167 = cljs.core.deref(inst_74160);
var state_74178__$1 = state_74178;
var statearr_74220_77254 = state_74178__$1;
(statearr_74220_77254[(2)] = inst_74167);

(statearr_74220_77254[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__73175__auto__ = null;
var cljs$core$async$reduce_$_state_machine__73175__auto____0 = (function (){
var statearr_74223 = [null,null,null,null,null,null,null,null,null,null];
(statearr_74223[(0)] = cljs$core$async$reduce_$_state_machine__73175__auto__);

(statearr_74223[(1)] = (1));

return statearr_74223;
});
var cljs$core$async$reduce_$_state_machine__73175__auto____1 = (function (state_74178){
while(true){
var ret_value__73176__auto__ = (function (){try{while(true){
var result__73177__auto__ = switch__73174__auto__(state_74178);
if(cljs.core.keyword_identical_QMARK_(result__73177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73177__auto__;
}
break;
}
}catch (e74224){var ex__73178__auto__ = e74224;
var statearr_74225_77265 = state_74178;
(statearr_74225_77265[(2)] = ex__73178__auto__);


if(cljs.core.seq((state_74178[(4)]))){
var statearr_74226_77273 = state_74178;
(statearr_74226_77273[(1)] = cljs.core.first((state_74178[(4)])));

} else {
throw ex__73178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77274 = state_74178;
state_74178 = G__77274;
continue;
} else {
return ret_value__73176__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__73175__auto__ = function(state_74178){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__73175__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__73175__auto____1.call(this,state_74178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__73175__auto____0;
cljs$core$async$reduce_$_state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__73175__auto____1;
return cljs$core$async$reduce_$_state_machine__73175__auto__;
})()
})();
var state__73526__auto__ = (function (){var statearr_74227 = f__73525__auto__();
(statearr_74227[(6)] = c__73524__auto__);

return statearr_74227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__73526__auto__);
}));

return c__73524__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__73524__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__73525__auto__ = (function (){var switch__73174__auto__ = (function (state_74235){
var state_val_74236 = (state_74235[(1)]);
if((state_val_74236 === (1))){
var inst_74228 = cljs.core.async.reduce(f__$1,init,ch);
var state_74235__$1 = state_74235;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74235__$1,(2),inst_74228);
} else {
if((state_val_74236 === (2))){
var inst_74231 = (state_74235[(2)]);
var inst_74233 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_74231) : f__$1.call(null,inst_74231));
var state_74235__$1 = state_74235;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74235__$1,inst_74233);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__73175__auto__ = null;
var cljs$core$async$transduce_$_state_machine__73175__auto____0 = (function (){
var statearr_74242 = [null,null,null,null,null,null,null];
(statearr_74242[(0)] = cljs$core$async$transduce_$_state_machine__73175__auto__);

(statearr_74242[(1)] = (1));

return statearr_74242;
});
var cljs$core$async$transduce_$_state_machine__73175__auto____1 = (function (state_74235){
while(true){
var ret_value__73176__auto__ = (function (){try{while(true){
var result__73177__auto__ = switch__73174__auto__(state_74235);
if(cljs.core.keyword_identical_QMARK_(result__73177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73177__auto__;
}
break;
}
}catch (e74244){var ex__73178__auto__ = e74244;
var statearr_74245_77297 = state_74235;
(statearr_74245_77297[(2)] = ex__73178__auto__);


if(cljs.core.seq((state_74235[(4)]))){
var statearr_74246_77301 = state_74235;
(statearr_74246_77301[(1)] = cljs.core.first((state_74235[(4)])));

} else {
throw ex__73178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77310 = state_74235;
state_74235 = G__77310;
continue;
} else {
return ret_value__73176__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__73175__auto__ = function(state_74235){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__73175__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__73175__auto____1.call(this,state_74235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__73175__auto____0;
cljs$core$async$transduce_$_state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__73175__auto____1;
return cljs$core$async$transduce_$_state_machine__73175__auto__;
})()
})();
var state__73526__auto__ = (function (){var statearr_74247 = f__73525__auto__();
(statearr_74247[(6)] = c__73524__auto__);

return statearr_74247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__73526__auto__);
}));

return c__73524__auto__;
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
var G__74249 = arguments.length;
switch (G__74249) {
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
var c__73524__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__73525__auto__ = (function (){var switch__73174__auto__ = (function (state_74285){
var state_val_74286 = (state_74285[(1)]);
if((state_val_74286 === (7))){
var inst_74264 = (state_74285[(2)]);
var state_74285__$1 = state_74285;
var statearr_74290_77324 = state_74285__$1;
(statearr_74290_77324[(2)] = inst_74264);

(statearr_74290_77324[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74286 === (1))){
var inst_74255 = cljs.core.seq(coll);
var inst_74256 = inst_74255;
var state_74285__$1 = (function (){var statearr_74292 = state_74285;
(statearr_74292[(7)] = inst_74256);

return statearr_74292;
})();
var statearr_74293_77335 = state_74285__$1;
(statearr_74293_77335[(2)] = null);

(statearr_74293_77335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74286 === (4))){
var inst_74256 = (state_74285[(7)]);
var inst_74262 = cljs.core.first(inst_74256);
var state_74285__$1 = state_74285;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74285__$1,(7),ch,inst_74262);
} else {
if((state_val_74286 === (13))){
var inst_74279 = (state_74285[(2)]);
var state_74285__$1 = state_74285;
var statearr_74300_77339 = state_74285__$1;
(statearr_74300_77339[(2)] = inst_74279);

(statearr_74300_77339[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74286 === (6))){
var inst_74267 = (state_74285[(2)]);
var state_74285__$1 = state_74285;
if(cljs.core.truth_(inst_74267)){
var statearr_74306_77347 = state_74285__$1;
(statearr_74306_77347[(1)] = (8));

} else {
var statearr_74307_77348 = state_74285__$1;
(statearr_74307_77348[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74286 === (3))){
var inst_74283 = (state_74285[(2)]);
var state_74285__$1 = state_74285;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74285__$1,inst_74283);
} else {
if((state_val_74286 === (12))){
var state_74285__$1 = state_74285;
var statearr_74311_77351 = state_74285__$1;
(statearr_74311_77351[(2)] = null);

(statearr_74311_77351[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74286 === (2))){
var inst_74256 = (state_74285[(7)]);
var state_74285__$1 = state_74285;
if(cljs.core.truth_(inst_74256)){
var statearr_74312_77360 = state_74285__$1;
(statearr_74312_77360[(1)] = (4));

} else {
var statearr_74313_77361 = state_74285__$1;
(statearr_74313_77361[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74286 === (11))){
var inst_74276 = cljs.core.async.close_BANG_(ch);
var state_74285__$1 = state_74285;
var statearr_74315_77363 = state_74285__$1;
(statearr_74315_77363[(2)] = inst_74276);

(statearr_74315_77363[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74286 === (9))){
var state_74285__$1 = state_74285;
if(cljs.core.truth_(close_QMARK_)){
var statearr_74317_77365 = state_74285__$1;
(statearr_74317_77365[(1)] = (11));

} else {
var statearr_74318_77367 = state_74285__$1;
(statearr_74318_77367[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74286 === (5))){
var inst_74256 = (state_74285[(7)]);
var state_74285__$1 = state_74285;
var statearr_74321_77375 = state_74285__$1;
(statearr_74321_77375[(2)] = inst_74256);

(statearr_74321_77375[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74286 === (10))){
var inst_74281 = (state_74285[(2)]);
var state_74285__$1 = state_74285;
var statearr_74325_77376 = state_74285__$1;
(statearr_74325_77376[(2)] = inst_74281);

(statearr_74325_77376[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74286 === (8))){
var inst_74256 = (state_74285[(7)]);
var inst_74271 = cljs.core.next(inst_74256);
var inst_74256__$1 = inst_74271;
var state_74285__$1 = (function (){var statearr_74328 = state_74285;
(statearr_74328[(7)] = inst_74256__$1);

return statearr_74328;
})();
var statearr_74329_77387 = state_74285__$1;
(statearr_74329_77387[(2)] = null);

(statearr_74329_77387[(1)] = (2));


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
var cljs$core$async$state_machine__73175__auto__ = null;
var cljs$core$async$state_machine__73175__auto____0 = (function (){
var statearr_74333 = [null,null,null,null,null,null,null,null];
(statearr_74333[(0)] = cljs$core$async$state_machine__73175__auto__);

(statearr_74333[(1)] = (1));

return statearr_74333;
});
var cljs$core$async$state_machine__73175__auto____1 = (function (state_74285){
while(true){
var ret_value__73176__auto__ = (function (){try{while(true){
var result__73177__auto__ = switch__73174__auto__(state_74285);
if(cljs.core.keyword_identical_QMARK_(result__73177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73177__auto__;
}
break;
}
}catch (e74334){var ex__73178__auto__ = e74334;
var statearr_74335_77390 = state_74285;
(statearr_74335_77390[(2)] = ex__73178__auto__);


if(cljs.core.seq((state_74285[(4)]))){
var statearr_74336_77392 = state_74285;
(statearr_74336_77392[(1)] = cljs.core.first((state_74285[(4)])));

} else {
throw ex__73178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77400 = state_74285;
state_74285 = G__77400;
continue;
} else {
return ret_value__73176__auto__;
}
break;
}
});
cljs$core$async$state_machine__73175__auto__ = function(state_74285){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__73175__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__73175__auto____1.call(this,state_74285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__73175__auto____0;
cljs$core$async$state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__73175__auto____1;
return cljs$core$async$state_machine__73175__auto__;
})()
})();
var state__73526__auto__ = (function (){var statearr_74337 = f__73525__auto__();
(statearr_74337[(6)] = c__73524__auto__);

return statearr_74337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__73526__auto__);
}));

return c__73524__auto__;
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
var G__74343 = arguments.length;
switch (G__74343) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_77422 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_77422(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_77433 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_77433(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_77445 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_77445(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_77460 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_77460(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async74361 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async74361 = (function (ch,cs,meta74362){
this.ch = ch;
this.cs = cs;
this.meta74362 = meta74362;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async74361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74363,meta74362__$1){
var self__ = this;
var _74363__$1 = this;
return (new cljs.core.async.t_cljs$core$async74361(self__.ch,self__.cs,meta74362__$1));
}));

(cljs.core.async.t_cljs$core$async74361.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74363){
var self__ = this;
var _74363__$1 = this;
return self__.meta74362;
}));

(cljs.core.async.t_cljs$core$async74361.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74361.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async74361.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74361.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async74361.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async74361.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async74361.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta74362","meta74362",30773202,null)], null);
}));

(cljs.core.async.t_cljs$core$async74361.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async74361.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async74361");

(cljs.core.async.t_cljs$core$async74361.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async74361");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async74361.
 */
cljs.core.async.__GT_t_cljs$core$async74361 = (function cljs$core$async$mult_$___GT_t_cljs$core$async74361(ch__$1,cs__$1,meta74362){
return (new cljs.core.async.t_cljs$core$async74361(ch__$1,cs__$1,meta74362));
});

}

return (new cljs.core.async.t_cljs$core$async74361(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__73524__auto___77513 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__73525__auto__ = (function (){var switch__73174__auto__ = (function (state_74535){
var state_val_74537 = (state_74535[(1)]);
if((state_val_74537 === (7))){
var inst_74525 = (state_74535[(2)]);
var state_74535__$1 = state_74535;
var statearr_74538_77516 = state_74535__$1;
(statearr_74538_77516[(2)] = inst_74525);

(statearr_74538_77516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (20))){
var inst_74418 = (state_74535[(7)]);
var inst_74431 = cljs.core.first(inst_74418);
var inst_74432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74431,(0),null);
var inst_74433 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74431,(1),null);
var state_74535__$1 = (function (){var statearr_74541 = state_74535;
(statearr_74541[(8)] = inst_74432);

return statearr_74541;
})();
if(cljs.core.truth_(inst_74433)){
var statearr_74542_77527 = state_74535__$1;
(statearr_74542_77527[(1)] = (22));

} else {
var statearr_74543_77529 = state_74535__$1;
(statearr_74543_77529[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (27))){
var inst_74382 = (state_74535[(9)]);
var inst_74472 = (state_74535[(10)]);
var inst_74463 = (state_74535[(11)]);
var inst_74465 = (state_74535[(12)]);
var inst_74472__$1 = cljs.core._nth(inst_74463,inst_74465);
var inst_74473 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_74472__$1,inst_74382,done);
var state_74535__$1 = (function (){var statearr_74544 = state_74535;
(statearr_74544[(10)] = inst_74472__$1);

return statearr_74544;
})();
if(cljs.core.truth_(inst_74473)){
var statearr_74545_77533 = state_74535__$1;
(statearr_74545_77533[(1)] = (30));

} else {
var statearr_74547_77536 = state_74535__$1;
(statearr_74547_77536[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (1))){
var state_74535__$1 = state_74535;
var statearr_74549_77544 = state_74535__$1;
(statearr_74549_77544[(2)] = null);

(statearr_74549_77544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (24))){
var inst_74418 = (state_74535[(7)]);
var inst_74438 = (state_74535[(2)]);
var inst_74439 = cljs.core.next(inst_74418);
var inst_74391 = inst_74439;
var inst_74392 = null;
var inst_74393 = (0);
var inst_74394 = (0);
var state_74535__$1 = (function (){var statearr_74553 = state_74535;
(statearr_74553[(13)] = inst_74438);

(statearr_74553[(14)] = inst_74394);

(statearr_74553[(15)] = inst_74392);

(statearr_74553[(16)] = inst_74391);

(statearr_74553[(17)] = inst_74393);

return statearr_74553;
})();
var statearr_74555_77555 = state_74535__$1;
(statearr_74555_77555[(2)] = null);

(statearr_74555_77555[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (39))){
var state_74535__$1 = state_74535;
var statearr_74574_77556 = state_74535__$1;
(statearr_74574_77556[(2)] = null);

(statearr_74574_77556[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (4))){
var inst_74382 = (state_74535[(9)]);
var inst_74382__$1 = (state_74535[(2)]);
var inst_74383 = (inst_74382__$1 == null);
var state_74535__$1 = (function (){var statearr_74575 = state_74535;
(statearr_74575[(9)] = inst_74382__$1);

return statearr_74575;
})();
if(cljs.core.truth_(inst_74383)){
var statearr_74576_77562 = state_74535__$1;
(statearr_74576_77562[(1)] = (5));

} else {
var statearr_74577_77564 = state_74535__$1;
(statearr_74577_77564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (15))){
var inst_74394 = (state_74535[(14)]);
var inst_74392 = (state_74535[(15)]);
var inst_74391 = (state_74535[(16)]);
var inst_74393 = (state_74535[(17)]);
var inst_74412 = (state_74535[(2)]);
var inst_74415 = (inst_74394 + (1));
var tmp74561 = inst_74392;
var tmp74562 = inst_74391;
var tmp74564 = inst_74393;
var inst_74391__$1 = tmp74562;
var inst_74392__$1 = tmp74561;
var inst_74393__$1 = tmp74564;
var inst_74394__$1 = inst_74415;
var state_74535__$1 = (function (){var statearr_74579 = state_74535;
(statearr_74579[(18)] = inst_74412);

(statearr_74579[(14)] = inst_74394__$1);

(statearr_74579[(15)] = inst_74392__$1);

(statearr_74579[(16)] = inst_74391__$1);

(statearr_74579[(17)] = inst_74393__$1);

return statearr_74579;
})();
var statearr_74581_77582 = state_74535__$1;
(statearr_74581_77582[(2)] = null);

(statearr_74581_77582[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (21))){
var inst_74442 = (state_74535[(2)]);
var state_74535__$1 = state_74535;
var statearr_74586_77583 = state_74535__$1;
(statearr_74586_77583[(2)] = inst_74442);

(statearr_74586_77583[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (31))){
var inst_74472 = (state_74535[(10)]);
var inst_74476 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_74472);
var state_74535__$1 = state_74535;
var statearr_74589_77586 = state_74535__$1;
(statearr_74589_77586[(2)] = inst_74476);

(statearr_74589_77586[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (32))){
var inst_74464 = (state_74535[(19)]);
var inst_74463 = (state_74535[(11)]);
var inst_74465 = (state_74535[(12)]);
var inst_74462 = (state_74535[(20)]);
var inst_74478 = (state_74535[(2)]);
var inst_74479 = (inst_74465 + (1));
var tmp74582 = inst_74464;
var tmp74583 = inst_74463;
var tmp74584 = inst_74462;
var inst_74462__$1 = tmp74584;
var inst_74463__$1 = tmp74583;
var inst_74464__$1 = tmp74582;
var inst_74465__$1 = inst_74479;
var state_74535__$1 = (function (){var statearr_74590 = state_74535;
(statearr_74590[(21)] = inst_74478);

(statearr_74590[(19)] = inst_74464__$1);

(statearr_74590[(11)] = inst_74463__$1);

(statearr_74590[(12)] = inst_74465__$1);

(statearr_74590[(20)] = inst_74462__$1);

return statearr_74590;
})();
var statearr_74592_77604 = state_74535__$1;
(statearr_74592_77604[(2)] = null);

(statearr_74592_77604[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (40))){
var inst_74496 = (state_74535[(22)]);
var inst_74500 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_74496);
var state_74535__$1 = state_74535;
var statearr_74596_77612 = state_74535__$1;
(statearr_74596_77612[(2)] = inst_74500);

(statearr_74596_77612[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (33))){
var inst_74484 = (state_74535[(23)]);
var inst_74486 = cljs.core.chunked_seq_QMARK_(inst_74484);
var state_74535__$1 = state_74535;
if(inst_74486){
var statearr_74598_77615 = state_74535__$1;
(statearr_74598_77615[(1)] = (36));

} else {
var statearr_74599_77617 = state_74535__$1;
(statearr_74599_77617[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (13))){
var inst_74406 = (state_74535[(24)]);
var inst_74409 = cljs.core.async.close_BANG_(inst_74406);
var state_74535__$1 = state_74535;
var statearr_74601_77625 = state_74535__$1;
(statearr_74601_77625[(2)] = inst_74409);

(statearr_74601_77625[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (22))){
var inst_74432 = (state_74535[(8)]);
var inst_74435 = cljs.core.async.close_BANG_(inst_74432);
var state_74535__$1 = state_74535;
var statearr_74603_77628 = state_74535__$1;
(statearr_74603_77628[(2)] = inst_74435);

(statearr_74603_77628[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (36))){
var inst_74484 = (state_74535[(23)]);
var inst_74490 = cljs.core.chunk_first(inst_74484);
var inst_74491 = cljs.core.chunk_rest(inst_74484);
var inst_74492 = cljs.core.count(inst_74490);
var inst_74462 = inst_74491;
var inst_74463 = inst_74490;
var inst_74464 = inst_74492;
var inst_74465 = (0);
var state_74535__$1 = (function (){var statearr_74614 = state_74535;
(statearr_74614[(19)] = inst_74464);

(statearr_74614[(11)] = inst_74463);

(statearr_74614[(12)] = inst_74465);

(statearr_74614[(20)] = inst_74462);

return statearr_74614;
})();
var statearr_74616_77640 = state_74535__$1;
(statearr_74616_77640[(2)] = null);

(statearr_74616_77640[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (41))){
var inst_74484 = (state_74535[(23)]);
var inst_74502 = (state_74535[(2)]);
var inst_74503 = cljs.core.next(inst_74484);
var inst_74462 = inst_74503;
var inst_74463 = null;
var inst_74464 = (0);
var inst_74465 = (0);
var state_74535__$1 = (function (){var statearr_74620 = state_74535;
(statearr_74620[(25)] = inst_74502);

(statearr_74620[(19)] = inst_74464);

(statearr_74620[(11)] = inst_74463);

(statearr_74620[(12)] = inst_74465);

(statearr_74620[(20)] = inst_74462);

return statearr_74620;
})();
var statearr_74621_77653 = state_74535__$1;
(statearr_74621_77653[(2)] = null);

(statearr_74621_77653[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (43))){
var state_74535__$1 = state_74535;
var statearr_74622_77656 = state_74535__$1;
(statearr_74622_77656[(2)] = null);

(statearr_74622_77656[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (29))){
var inst_74511 = (state_74535[(2)]);
var state_74535__$1 = state_74535;
var statearr_74627_77665 = state_74535__$1;
(statearr_74627_77665[(2)] = inst_74511);

(statearr_74627_77665[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (44))){
var inst_74522 = (state_74535[(2)]);
var state_74535__$1 = (function (){var statearr_74628 = state_74535;
(statearr_74628[(26)] = inst_74522);

return statearr_74628;
})();
var statearr_74629_77668 = state_74535__$1;
(statearr_74629_77668[(2)] = null);

(statearr_74629_77668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (6))){
var inst_74452 = (state_74535[(27)]);
var inst_74451 = cljs.core.deref(cs);
var inst_74452__$1 = cljs.core.keys(inst_74451);
var inst_74453 = cljs.core.count(inst_74452__$1);
var inst_74454 = cljs.core.reset_BANG_(dctr,inst_74453);
var inst_74460 = cljs.core.seq(inst_74452__$1);
var inst_74462 = inst_74460;
var inst_74463 = null;
var inst_74464 = (0);
var inst_74465 = (0);
var state_74535__$1 = (function (){var statearr_74630 = state_74535;
(statearr_74630[(28)] = inst_74454);

(statearr_74630[(19)] = inst_74464);

(statearr_74630[(11)] = inst_74463);

(statearr_74630[(12)] = inst_74465);

(statearr_74630[(27)] = inst_74452__$1);

(statearr_74630[(20)] = inst_74462);

return statearr_74630;
})();
var statearr_74632_77682 = state_74535__$1;
(statearr_74632_77682[(2)] = null);

(statearr_74632_77682[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (28))){
var inst_74462 = (state_74535[(20)]);
var inst_74484 = (state_74535[(23)]);
var inst_74484__$1 = cljs.core.seq(inst_74462);
var state_74535__$1 = (function (){var statearr_74633 = state_74535;
(statearr_74633[(23)] = inst_74484__$1);

return statearr_74633;
})();
if(inst_74484__$1){
var statearr_74634_77693 = state_74535__$1;
(statearr_74634_77693[(1)] = (33));

} else {
var statearr_74635_77694 = state_74535__$1;
(statearr_74635_77694[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (25))){
var inst_74464 = (state_74535[(19)]);
var inst_74465 = (state_74535[(12)]);
var inst_74469 = (inst_74465 < inst_74464);
var inst_74470 = inst_74469;
var state_74535__$1 = state_74535;
if(cljs.core.truth_(inst_74470)){
var statearr_74637_77696 = state_74535__$1;
(statearr_74637_77696[(1)] = (27));

} else {
var statearr_74638_77699 = state_74535__$1;
(statearr_74638_77699[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (34))){
var state_74535__$1 = state_74535;
var statearr_74639_77701 = state_74535__$1;
(statearr_74639_77701[(2)] = null);

(statearr_74639_77701[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (17))){
var state_74535__$1 = state_74535;
var statearr_74641_77709 = state_74535__$1;
(statearr_74641_77709[(2)] = null);

(statearr_74641_77709[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (3))){
var inst_74527 = (state_74535[(2)]);
var state_74535__$1 = state_74535;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74535__$1,inst_74527);
} else {
if((state_val_74537 === (12))){
var inst_74447 = (state_74535[(2)]);
var state_74535__$1 = state_74535;
var statearr_74644_77712 = state_74535__$1;
(statearr_74644_77712[(2)] = inst_74447);

(statearr_74644_77712[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (2))){
var state_74535__$1 = state_74535;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74535__$1,(4),ch);
} else {
if((state_val_74537 === (23))){
var state_74535__$1 = state_74535;
var statearr_74650_77721 = state_74535__$1;
(statearr_74650_77721[(2)] = null);

(statearr_74650_77721[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (35))){
var inst_74509 = (state_74535[(2)]);
var state_74535__$1 = state_74535;
var statearr_74651_77723 = state_74535__$1;
(statearr_74651_77723[(2)] = inst_74509);

(statearr_74651_77723[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (19))){
var inst_74418 = (state_74535[(7)]);
var inst_74422 = cljs.core.chunk_first(inst_74418);
var inst_74423 = cljs.core.chunk_rest(inst_74418);
var inst_74424 = cljs.core.count(inst_74422);
var inst_74391 = inst_74423;
var inst_74392 = inst_74422;
var inst_74393 = inst_74424;
var inst_74394 = (0);
var state_74535__$1 = (function (){var statearr_74652 = state_74535;
(statearr_74652[(14)] = inst_74394);

(statearr_74652[(15)] = inst_74392);

(statearr_74652[(16)] = inst_74391);

(statearr_74652[(17)] = inst_74393);

return statearr_74652;
})();
var statearr_74654_77734 = state_74535__$1;
(statearr_74654_77734[(2)] = null);

(statearr_74654_77734[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (11))){
var inst_74418 = (state_74535[(7)]);
var inst_74391 = (state_74535[(16)]);
var inst_74418__$1 = cljs.core.seq(inst_74391);
var state_74535__$1 = (function (){var statearr_74658 = state_74535;
(statearr_74658[(7)] = inst_74418__$1);

return statearr_74658;
})();
if(inst_74418__$1){
var statearr_74659_77746 = state_74535__$1;
(statearr_74659_77746[(1)] = (16));

} else {
var statearr_74660_77747 = state_74535__$1;
(statearr_74660_77747[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (9))){
var inst_74449 = (state_74535[(2)]);
var state_74535__$1 = state_74535;
var statearr_74661_77749 = state_74535__$1;
(statearr_74661_77749[(2)] = inst_74449);

(statearr_74661_77749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (5))){
var inst_74389 = cljs.core.deref(cs);
var inst_74390 = cljs.core.seq(inst_74389);
var inst_74391 = inst_74390;
var inst_74392 = null;
var inst_74393 = (0);
var inst_74394 = (0);
var state_74535__$1 = (function (){var statearr_74662 = state_74535;
(statearr_74662[(14)] = inst_74394);

(statearr_74662[(15)] = inst_74392);

(statearr_74662[(16)] = inst_74391);

(statearr_74662[(17)] = inst_74393);

return statearr_74662;
})();
var statearr_74664_77759 = state_74535__$1;
(statearr_74664_77759[(2)] = null);

(statearr_74664_77759[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (14))){
var state_74535__$1 = state_74535;
var statearr_74665_77762 = state_74535__$1;
(statearr_74665_77762[(2)] = null);

(statearr_74665_77762[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (45))){
var inst_74519 = (state_74535[(2)]);
var state_74535__$1 = state_74535;
var statearr_74666_77774 = state_74535__$1;
(statearr_74666_77774[(2)] = inst_74519);

(statearr_74666_77774[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (26))){
var inst_74452 = (state_74535[(27)]);
var inst_74513 = (state_74535[(2)]);
var inst_74514 = cljs.core.seq(inst_74452);
var state_74535__$1 = (function (){var statearr_74668 = state_74535;
(statearr_74668[(29)] = inst_74513);

return statearr_74668;
})();
if(inst_74514){
var statearr_74669_77777 = state_74535__$1;
(statearr_74669_77777[(1)] = (42));

} else {
var statearr_74670_77778 = state_74535__$1;
(statearr_74670_77778[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (16))){
var inst_74418 = (state_74535[(7)]);
var inst_74420 = cljs.core.chunked_seq_QMARK_(inst_74418);
var state_74535__$1 = state_74535;
if(inst_74420){
var statearr_74673_77782 = state_74535__$1;
(statearr_74673_77782[(1)] = (19));

} else {
var statearr_74674_77789 = state_74535__$1;
(statearr_74674_77789[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (38))){
var inst_74506 = (state_74535[(2)]);
var state_74535__$1 = state_74535;
var statearr_74681_77790 = state_74535__$1;
(statearr_74681_77790[(2)] = inst_74506);

(statearr_74681_77790[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (30))){
var state_74535__$1 = state_74535;
var statearr_74685_77793 = state_74535__$1;
(statearr_74685_77793[(2)] = null);

(statearr_74685_77793[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (10))){
var inst_74394 = (state_74535[(14)]);
var inst_74392 = (state_74535[(15)]);
var inst_74405 = cljs.core._nth(inst_74392,inst_74394);
var inst_74406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74405,(0),null);
var inst_74407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74405,(1),null);
var state_74535__$1 = (function (){var statearr_74690 = state_74535;
(statearr_74690[(24)] = inst_74406);

return statearr_74690;
})();
if(cljs.core.truth_(inst_74407)){
var statearr_74692_77802 = state_74535__$1;
(statearr_74692_77802[(1)] = (13));

} else {
var statearr_74693_77804 = state_74535__$1;
(statearr_74693_77804[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (18))){
var inst_74445 = (state_74535[(2)]);
var state_74535__$1 = state_74535;
var statearr_74698_77808 = state_74535__$1;
(statearr_74698_77808[(2)] = inst_74445);

(statearr_74698_77808[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (42))){
var state_74535__$1 = state_74535;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74535__$1,(45),dchan);
} else {
if((state_val_74537 === (37))){
var inst_74382 = (state_74535[(9)]);
var inst_74496 = (state_74535[(22)]);
var inst_74484 = (state_74535[(23)]);
var inst_74496__$1 = cljs.core.first(inst_74484);
var inst_74497 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_74496__$1,inst_74382,done);
var state_74535__$1 = (function (){var statearr_74708 = state_74535;
(statearr_74708[(22)] = inst_74496__$1);

return statearr_74708;
})();
if(cljs.core.truth_(inst_74497)){
var statearr_74710_77821 = state_74535__$1;
(statearr_74710_77821[(1)] = (39));

} else {
var statearr_74711_77823 = state_74535__$1;
(statearr_74711_77823[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (8))){
var inst_74394 = (state_74535[(14)]);
var inst_74393 = (state_74535[(17)]);
var inst_74396 = (inst_74394 < inst_74393);
var inst_74397 = inst_74396;
var state_74535__$1 = state_74535;
if(cljs.core.truth_(inst_74397)){
var statearr_74713_77834 = state_74535__$1;
(statearr_74713_77834[(1)] = (10));

} else {
var statearr_74715_77835 = state_74535__$1;
(statearr_74715_77835[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__73175__auto__ = null;
var cljs$core$async$mult_$_state_machine__73175__auto____0 = (function (){
var statearr_74717 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_74717[(0)] = cljs$core$async$mult_$_state_machine__73175__auto__);

(statearr_74717[(1)] = (1));

return statearr_74717;
});
var cljs$core$async$mult_$_state_machine__73175__auto____1 = (function (state_74535){
while(true){
var ret_value__73176__auto__ = (function (){try{while(true){
var result__73177__auto__ = switch__73174__auto__(state_74535);
if(cljs.core.keyword_identical_QMARK_(result__73177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73177__auto__;
}
break;
}
}catch (e74718){var ex__73178__auto__ = e74718;
var statearr_74719_77850 = state_74535;
(statearr_74719_77850[(2)] = ex__73178__auto__);


if(cljs.core.seq((state_74535[(4)]))){
var statearr_74720_77852 = state_74535;
(statearr_74720_77852[(1)] = cljs.core.first((state_74535[(4)])));

} else {
throw ex__73178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77861 = state_74535;
state_74535 = G__77861;
continue;
} else {
return ret_value__73176__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__73175__auto__ = function(state_74535){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__73175__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__73175__auto____1.call(this,state_74535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__73175__auto____0;
cljs$core$async$mult_$_state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__73175__auto____1;
return cljs$core$async$mult_$_state_machine__73175__auto__;
})()
})();
var state__73526__auto__ = (function (){var statearr_74721 = f__73525__auto__();
(statearr_74721[(6)] = c__73524__auto___77513);

return statearr_74721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__73526__auto__);
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
var G__74732 = arguments.length;
switch (G__74732) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_77873 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_77873(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_77879 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_77879(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_77888 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_77888(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_77903 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_77903(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_77918 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_77918(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___77930 = arguments.length;
var i__4737__auto___77931 = (0);
while(true){
if((i__4737__auto___77931 < len__4736__auto___77930)){
args__4742__auto__.push((arguments[i__4737__auto___77931]));

var G__77939 = (i__4737__auto___77931 + (1));
i__4737__auto___77931 = G__77939;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__74774){
var map__74776 = p__74774;
var map__74776__$1 = (((((!((map__74776 == null))))?(((((map__74776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74776):map__74776);
var opts = map__74776__$1;
var statearr_74778_77953 = state;
(statearr_74778_77953[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_74779_77954 = state;
(statearr_74779_77954[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_74780_77957 = state;
(statearr_74780_77957[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq74763){
var G__74764 = cljs.core.first(seq74763);
var seq74763__$1 = cljs.core.next(seq74763);
var G__74765 = cljs.core.first(seq74763__$1);
var seq74763__$2 = cljs.core.next(seq74763__$1);
var G__74766 = cljs.core.first(seq74763__$2);
var seq74763__$3 = cljs.core.next(seq74763__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74764,G__74765,G__74766,seq74763__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async74796 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async74796 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta74797){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta74797 = meta74797;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async74796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74798,meta74797__$1){
var self__ = this;
var _74798__$1 = this;
return (new cljs.core.async.t_cljs$core$async74796(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta74797__$1));
}));

(cljs.core.async.t_cljs$core$async74796.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74798){
var self__ = this;
var _74798__$1 = this;
return self__.meta74797;
}));

(cljs.core.async.t_cljs$core$async74796.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74796.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async74796.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74796.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async74796.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async74796.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async74796.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async74796.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async74796.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta74797","meta74797",-1762482726,null)], null);
}));

(cljs.core.async.t_cljs$core$async74796.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async74796.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async74796");

(cljs.core.async.t_cljs$core$async74796.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async74796");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async74796.
 */
cljs.core.async.__GT_t_cljs$core$async74796 = (function cljs$core$async$mix_$___GT_t_cljs$core$async74796(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta74797){
return (new cljs.core.async.t_cljs$core$async74796(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta74797));
});

}

return (new cljs.core.async.t_cljs$core$async74796(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__73524__auto___78061 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__73525__auto__ = (function (){var switch__73174__auto__ = (function (state_74949){
var state_val_74950 = (state_74949[(1)]);
if((state_val_74950 === (7))){
var inst_74840 = (state_74949[(2)]);
var state_74949__$1 = state_74949;
var statearr_74954_78065 = state_74949__$1;
(statearr_74954_78065[(2)] = inst_74840);

(statearr_74954_78065[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74950 === (20))){
var inst_74852 = (state_74949[(7)]);
var state_74949__$1 = state_74949;
var statearr_74955_78073 = state_74949__$1;
(statearr_74955_78073[(2)] = inst_74852);

(statearr_74955_78073[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74950 === (27))){
var state_74949__$1 = state_74949;
var statearr_74956_78076 = state_74949__$1;
(statearr_74956_78076[(2)] = null);

(statearr_74956_78076[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74950 === (1))){
var inst_74825 = (state_74949[(8)]);
var inst_74825__$1 = calc_state();
var inst_74828 = (inst_74825__$1 == null);
var inst_74829 = cljs.core.not(inst_74828);
var state_74949__$1 = (function (){var statearr_74957 = state_74949;
(statearr_74957[(8)] = inst_74825__$1);

return statearr_74957;
})();
if(inst_74829){
var statearr_74958_78085 = state_74949__$1;
(statearr_74958_78085[(1)] = (2));

} else {
var statearr_74959_78086 = state_74949__$1;
(statearr_74959_78086[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74950 === (24))){
var inst_74891 = (state_74949[(9)]);
var inst_74908 = (state_74949[(10)]);
var inst_74880 = (state_74949[(11)]);
var inst_74908__$1 = (inst_74880.cljs$core$IFn$_invoke$arity$1 ? inst_74880.cljs$core$IFn$_invoke$arity$1(inst_74891) : inst_74880.call(null,inst_74891));
var state_74949__$1 = (function (){var statearr_74962 = state_74949;
(statearr_74962[(10)] = inst_74908__$1);

return statearr_74962;
})();
if(cljs.core.truth_(inst_74908__$1)){
var statearr_74963_78097 = state_74949__$1;
(statearr_74963_78097[(1)] = (29));

} else {
var statearr_74964_78098 = state_74949__$1;
(statearr_74964_78098[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74950 === (4))){
var inst_74843 = (state_74949[(2)]);
var state_74949__$1 = state_74949;
if(cljs.core.truth_(inst_74843)){
var statearr_74965_78100 = state_74949__$1;
(statearr_74965_78100[(1)] = (8));

} else {
var statearr_74966_78102 = state_74949__$1;
(statearr_74966_78102[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74950 === (15))){
var inst_74874 = (state_74949[(2)]);
var state_74949__$1 = state_74949;
if(cljs.core.truth_(inst_74874)){
var statearr_74967_78111 = state_74949__$1;
(statearr_74967_78111[(1)] = (19));

} else {
var statearr_74968_78112 = state_74949__$1;
(statearr_74968_78112[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74950 === (21))){
var inst_74879 = (state_74949[(12)]);
var inst_74879__$1 = (state_74949[(2)]);
var inst_74880 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_74879__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_74881 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_74879__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_74883 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_74879__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_74949__$1 = (function (){var statearr_74969 = state_74949;
(statearr_74969[(13)] = inst_74881);

(statearr_74969[(11)] = inst_74880);

(statearr_74969[(12)] = inst_74879__$1);

return statearr_74969;
})();
return cljs.core.async.ioc_alts_BANG_(state_74949__$1,(22),inst_74883);
} else {
if((state_val_74950 === (31))){
var inst_74918 = (state_74949[(2)]);
var state_74949__$1 = state_74949;
if(cljs.core.truth_(inst_74918)){
var statearr_74973_78123 = state_74949__$1;
(statearr_74973_78123[(1)] = (32));

} else {
var statearr_74974_78124 = state_74949__$1;
(statearr_74974_78124[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74950 === (32))){
var inst_74890 = (state_74949[(14)]);
var state_74949__$1 = state_74949;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74949__$1,(35),out,inst_74890);
} else {
if((state_val_74950 === (33))){
var inst_74879 = (state_74949[(12)]);
var inst_74852 = inst_74879;
var state_74949__$1 = (function (){var statearr_74978 = state_74949;
(statearr_74978[(7)] = inst_74852);

return statearr_74978;
})();
var statearr_74979_78135 = state_74949__$1;
(statearr_74979_78135[(2)] = null);

(statearr_74979_78135[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74950 === (13))){
var inst_74852 = (state_74949[(7)]);
var inst_74861 = inst_74852.cljs$lang$protocol_mask$partition0$;
var inst_74862 = (inst_74861 & (64));
var inst_74863 = inst_74852.cljs$core$ISeq$;
var inst_74864 = (cljs.core.PROTOCOL_SENTINEL === inst_74863);
var inst_74865 = ((inst_74862) || (inst_74864));
var state_74949__$1 = state_74949;
if(cljs.core.truth_(inst_74865)){
var statearr_74983_78139 = state_74949__$1;
(statearr_74983_78139[(1)] = (16));

} else {
var statearr_74984_78142 = state_74949__$1;
(statearr_74984_78142[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74950 === (22))){
var inst_74891 = (state_74949[(9)]);
var inst_74890 = (state_74949[(14)]);
var inst_74888 = (state_74949[(2)]);
var inst_74890__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74888,(0),null);
var inst_74891__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74888,(1),null);
var inst_74892 = (inst_74890__$1 == null);
var inst_74893 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_74891__$1,change);
var inst_74894 = ((inst_74892) || (inst_74893));
var state_74949__$1 = (function (){var statearr_74985 = state_74949;
(statearr_74985[(9)] = inst_74891__$1);

(statearr_74985[(14)] = inst_74890__$1);

return statearr_74985;
})();
if(cljs.core.truth_(inst_74894)){
var statearr_74986_78153 = state_74949__$1;
(statearr_74986_78153[(1)] = (23));

} else {
var statearr_74987_78161 = state_74949__$1;
(statearr_74987_78161[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74950 === (36))){
var inst_74879 = (state_74949[(12)]);
var inst_74852 = inst_74879;
var state_74949__$1 = (function (){var statearr_74988 = state_74949;
(statearr_74988[(7)] = inst_74852);

return statearr_74988;
})();
var statearr_74989_78162 = state_74949__$1;
(statearr_74989_78162[(2)] = null);

(statearr_74989_78162[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74950 === (29))){
var inst_74908 = (state_74949[(10)]);
var state_74949__$1 = state_74949;
var statearr_74990_78166 = state_74949__$1;
(statearr_74990_78166[(2)] = inst_74908);

(statearr_74990_78166[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74950 === (6))){
var state_74949__$1 = state_74949;
var statearr_74994_78174 = state_74949__$1;
(statearr_74994_78174[(2)] = false);

(statearr_74994_78174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74950 === (28))){
var inst_74903 = (state_74949[(2)]);
var inst_74905 = calc_state();
var inst_74852 = inst_74905;
var state_74949__$1 = (function (){var statearr_74995 = state_74949;
(statearr_74995[(7)] = inst_74852);

(statearr_74995[(15)] = inst_74903);

return statearr_74995;
})();
var statearr_74996_78177 = state_74949__$1;
(statearr_74996_78177[(2)] = null);

(statearr_74996_78177[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74950 === (25))){
var inst_74934 = (state_74949[(2)]);
var state_74949__$1 = state_74949;
var statearr_74997_78186 = state_74949__$1;
(statearr_74997_78186[(2)] = inst_74934);

(statearr_74997_78186[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74950 === (34))){
var inst_74932 = (state_74949[(2)]);
var state_74949__$1 = state_74949;
var statearr_74999_78188 = state_74949__$1;
(statearr_74999_78188[(2)] = inst_74932);

(statearr_74999_78188[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74950 === (17))){
var state_74949__$1 = state_74949;
var statearr_75001_78191 = state_74949__$1;
(statearr_75001_78191[(2)] = false);

(statearr_75001_78191[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74950 === (3))){
var state_74949__$1 = state_74949;
var statearr_75002_78199 = state_74949__$1;
(statearr_75002_78199[(2)] = false);

(statearr_75002_78199[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74950 === (12))){
var inst_74937 = (state_74949[(2)]);
var state_74949__$1 = state_74949;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74949__$1,inst_74937);
} else {
if((state_val_74950 === (2))){
var inst_74825 = (state_74949[(8)]);
var inst_74832 = inst_74825.cljs$lang$protocol_mask$partition0$;
var inst_74833 = (inst_74832 & (64));
var inst_74834 = inst_74825.cljs$core$ISeq$;
var inst_74835 = (cljs.core.PROTOCOL_SENTINEL === inst_74834);
var inst_74836 = ((inst_74833) || (inst_74835));
var state_74949__$1 = state_74949;
if(cljs.core.truth_(inst_74836)){
var statearr_75012_78210 = state_74949__$1;
(statearr_75012_78210[(1)] = (5));

} else {
var statearr_75014_78211 = state_74949__$1;
(statearr_75014_78211[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74950 === (23))){
var inst_74890 = (state_74949[(14)]);
var inst_74896 = (inst_74890 == null);
var state_74949__$1 = state_74949;
if(cljs.core.truth_(inst_74896)){
var statearr_75018_78213 = state_74949__$1;
(statearr_75018_78213[(1)] = (26));

} else {
var statearr_75019_78215 = state_74949__$1;
(statearr_75019_78215[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74950 === (35))){
var inst_74921 = (state_74949[(2)]);
var state_74949__$1 = state_74949;
if(cljs.core.truth_(inst_74921)){
var statearr_75023_78217 = state_74949__$1;
(statearr_75023_78217[(1)] = (36));

} else {
var statearr_75024_78225 = state_74949__$1;
(statearr_75024_78225[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74950 === (19))){
var inst_74852 = (state_74949[(7)]);
var inst_74876 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_74852);
var state_74949__$1 = state_74949;
var statearr_75028_78226 = state_74949__$1;
(statearr_75028_78226[(2)] = inst_74876);

(statearr_75028_78226[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74950 === (11))){
var inst_74852 = (state_74949[(7)]);
var inst_74858 = (inst_74852 == null);
var inst_74859 = cljs.core.not(inst_74858);
var state_74949__$1 = state_74949;
if(inst_74859){
var statearr_75032_78241 = state_74949__$1;
(statearr_75032_78241[(1)] = (13));

} else {
var statearr_75033_78242 = state_74949__$1;
(statearr_75033_78242[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74950 === (9))){
var inst_74825 = (state_74949[(8)]);
var state_74949__$1 = state_74949;
var statearr_75036_78243 = state_74949__$1;
(statearr_75036_78243[(2)] = inst_74825);

(statearr_75036_78243[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74950 === (5))){
var state_74949__$1 = state_74949;
var statearr_75039_78246 = state_74949__$1;
(statearr_75039_78246[(2)] = true);

(statearr_75039_78246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74950 === (14))){
var state_74949__$1 = state_74949;
var statearr_75042_78255 = state_74949__$1;
(statearr_75042_78255[(2)] = false);

(statearr_75042_78255[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74950 === (26))){
var inst_74891 = (state_74949[(9)]);
var inst_74900 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_74891);
var state_74949__$1 = state_74949;
var statearr_75046_78257 = state_74949__$1;
(statearr_75046_78257[(2)] = inst_74900);

(statearr_75046_78257[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74950 === (16))){
var state_74949__$1 = state_74949;
var statearr_75049_78259 = state_74949__$1;
(statearr_75049_78259[(2)] = true);

(statearr_75049_78259[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74950 === (38))){
var inst_74928 = (state_74949[(2)]);
var state_74949__$1 = state_74949;
var statearr_75053_78268 = state_74949__$1;
(statearr_75053_78268[(2)] = inst_74928);

(statearr_75053_78268[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74950 === (30))){
var inst_74881 = (state_74949[(13)]);
var inst_74891 = (state_74949[(9)]);
var inst_74880 = (state_74949[(11)]);
var inst_74913 = cljs.core.empty_QMARK_(inst_74880);
var inst_74914 = (inst_74881.cljs$core$IFn$_invoke$arity$1 ? inst_74881.cljs$core$IFn$_invoke$arity$1(inst_74891) : inst_74881.call(null,inst_74891));
var inst_74915 = cljs.core.not(inst_74914);
var inst_74916 = ((inst_74913) && (inst_74915));
var state_74949__$1 = state_74949;
var statearr_75059_78280 = state_74949__$1;
(statearr_75059_78280[(2)] = inst_74916);

(statearr_75059_78280[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74950 === (10))){
var inst_74825 = (state_74949[(8)]);
var inst_74848 = (state_74949[(2)]);
var inst_74849 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_74848,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_74850 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_74848,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_74851 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_74848,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_74852 = inst_74825;
var state_74949__$1 = (function (){var statearr_75064 = state_74949;
(statearr_75064[(16)] = inst_74851);

(statearr_75064[(7)] = inst_74852);

(statearr_75064[(17)] = inst_74849);

(statearr_75064[(18)] = inst_74850);

return statearr_75064;
})();
var statearr_75066_78292 = state_74949__$1;
(statearr_75066_78292[(2)] = null);

(statearr_75066_78292[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74950 === (18))){
var inst_74870 = (state_74949[(2)]);
var state_74949__$1 = state_74949;
var statearr_75067_78301 = state_74949__$1;
(statearr_75067_78301[(2)] = inst_74870);

(statearr_75067_78301[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74950 === (37))){
var state_74949__$1 = state_74949;
var statearr_75068_78302 = state_74949__$1;
(statearr_75068_78302[(2)] = null);

(statearr_75068_78302[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74950 === (8))){
var inst_74825 = (state_74949[(8)]);
var inst_74845 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_74825);
var state_74949__$1 = state_74949;
var statearr_75071_78306 = state_74949__$1;
(statearr_75071_78306[(2)] = inst_74845);

(statearr_75071_78306[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__73175__auto__ = null;
var cljs$core$async$mix_$_state_machine__73175__auto____0 = (function (){
var statearr_75073 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75073[(0)] = cljs$core$async$mix_$_state_machine__73175__auto__);

(statearr_75073[(1)] = (1));

return statearr_75073;
});
var cljs$core$async$mix_$_state_machine__73175__auto____1 = (function (state_74949){
while(true){
var ret_value__73176__auto__ = (function (){try{while(true){
var result__73177__auto__ = switch__73174__auto__(state_74949);
if(cljs.core.keyword_identical_QMARK_(result__73177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73177__auto__;
}
break;
}
}catch (e75078){var ex__73178__auto__ = e75078;
var statearr_75079_78324 = state_74949;
(statearr_75079_78324[(2)] = ex__73178__auto__);


if(cljs.core.seq((state_74949[(4)]))){
var statearr_75080_78326 = state_74949;
(statearr_75080_78326[(1)] = cljs.core.first((state_74949[(4)])));

} else {
throw ex__73178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78329 = state_74949;
state_74949 = G__78329;
continue;
} else {
return ret_value__73176__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__73175__auto__ = function(state_74949){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__73175__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__73175__auto____1.call(this,state_74949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__73175__auto____0;
cljs$core$async$mix_$_state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__73175__auto____1;
return cljs$core$async$mix_$_state_machine__73175__auto__;
})()
})();
var state__73526__auto__ = (function (){var statearr_75103 = f__73525__auto__();
(statearr_75103[(6)] = c__73524__auto___78061);

return statearr_75103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__73526__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_78351 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_78351(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_78378 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_78378(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_78392 = (function() {
var G__78400 = null;
var G__78400__1 = (function (p){
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
var G__78400__2 = (function (p,v){
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
G__78400 = function(p,v){
switch(arguments.length){
case 1:
return G__78400__1.call(this,p);
case 2:
return G__78400__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__78400.cljs$core$IFn$_invoke$arity$1 = G__78400__1;
G__78400.cljs$core$IFn$_invoke$arity$2 = G__78400__2;
return G__78400;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__75120 = arguments.length;
switch (G__75120) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_78392(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_78392(p,v);
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
var G__75136 = arguments.length;
switch (G__75136) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__75134_SHARP_){
if(cljs.core.truth_((p1__75134_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__75134_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__75134_SHARP_.call(null,topic)))){
return p1__75134_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__75134_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async75141 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async75141 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta75142){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta75142 = meta75142;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async75141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75143,meta75142__$1){
var self__ = this;
var _75143__$1 = this;
return (new cljs.core.async.t_cljs$core$async75141(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta75142__$1));
}));

(cljs.core.async.t_cljs$core$async75141.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75143){
var self__ = this;
var _75143__$1 = this;
return self__.meta75142;
}));

(cljs.core.async.t_cljs$core$async75141.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75141.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async75141.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75141.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async75141.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async75141.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async75141.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async75141.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta75142","meta75142",-312000793,null)], null);
}));

(cljs.core.async.t_cljs$core$async75141.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async75141.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async75141");

(cljs.core.async.t_cljs$core$async75141.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async75141");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async75141.
 */
cljs.core.async.__GT_t_cljs$core$async75141 = (function cljs$core$async$__GT_t_cljs$core$async75141(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta75142){
return (new cljs.core.async.t_cljs$core$async75141(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta75142));
});

}

return (new cljs.core.async.t_cljs$core$async75141(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__73524__auto___78511 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__73525__auto__ = (function (){var switch__73174__auto__ = (function (state_75244){
var state_val_75245 = (state_75244[(1)]);
if((state_val_75245 === (7))){
var inst_75239 = (state_75244[(2)]);
var state_75244__$1 = state_75244;
var statearr_75258_78512 = state_75244__$1;
(statearr_75258_78512[(2)] = inst_75239);

(statearr_75258_78512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75245 === (20))){
var state_75244__$1 = state_75244;
var statearr_75260_78513 = state_75244__$1;
(statearr_75260_78513[(2)] = null);

(statearr_75260_78513[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75245 === (1))){
var state_75244__$1 = state_75244;
var statearr_75265_78514 = state_75244__$1;
(statearr_75265_78514[(2)] = null);

(statearr_75265_78514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75245 === (24))){
var inst_75220 = (state_75244[(7)]);
var inst_75231 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_75220);
var state_75244__$1 = state_75244;
var statearr_75267_78515 = state_75244__$1;
(statearr_75267_78515[(2)] = inst_75231);

(statearr_75267_78515[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75245 === (4))){
var inst_75168 = (state_75244[(8)]);
var inst_75168__$1 = (state_75244[(2)]);
var inst_75169 = (inst_75168__$1 == null);
var state_75244__$1 = (function (){var statearr_75271 = state_75244;
(statearr_75271[(8)] = inst_75168__$1);

return statearr_75271;
})();
if(cljs.core.truth_(inst_75169)){
var statearr_75272_78516 = state_75244__$1;
(statearr_75272_78516[(1)] = (5));

} else {
var statearr_75274_78517 = state_75244__$1;
(statearr_75274_78517[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75245 === (15))){
var inst_75214 = (state_75244[(2)]);
var state_75244__$1 = state_75244;
var statearr_75276_78518 = state_75244__$1;
(statearr_75276_78518[(2)] = inst_75214);

(statearr_75276_78518[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75245 === (21))){
var inst_75236 = (state_75244[(2)]);
var state_75244__$1 = (function (){var statearr_75278 = state_75244;
(statearr_75278[(9)] = inst_75236);

return statearr_75278;
})();
var statearr_75279_78521 = state_75244__$1;
(statearr_75279_78521[(2)] = null);

(statearr_75279_78521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75245 === (13))){
var inst_75196 = (state_75244[(10)]);
var inst_75198 = cljs.core.chunked_seq_QMARK_(inst_75196);
var state_75244__$1 = state_75244;
if(inst_75198){
var statearr_75280_78530 = state_75244__$1;
(statearr_75280_78530[(1)] = (16));

} else {
var statearr_75282_78532 = state_75244__$1;
(statearr_75282_78532[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75245 === (22))){
var inst_75227 = (state_75244[(2)]);
var state_75244__$1 = state_75244;
if(cljs.core.truth_(inst_75227)){
var statearr_75283_78536 = state_75244__$1;
(statearr_75283_78536[(1)] = (23));

} else {
var statearr_75284_78537 = state_75244__$1;
(statearr_75284_78537[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75245 === (6))){
var inst_75220 = (state_75244[(7)]);
var inst_75223 = (state_75244[(11)]);
var inst_75168 = (state_75244[(8)]);
var inst_75220__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_75168) : topic_fn.call(null,inst_75168));
var inst_75222 = cljs.core.deref(mults);
var inst_75223__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_75222,inst_75220__$1);
var state_75244__$1 = (function (){var statearr_75287 = state_75244;
(statearr_75287[(7)] = inst_75220__$1);

(statearr_75287[(11)] = inst_75223__$1);

return statearr_75287;
})();
if(cljs.core.truth_(inst_75223__$1)){
var statearr_75288_78548 = state_75244__$1;
(statearr_75288_78548[(1)] = (19));

} else {
var statearr_75289_78549 = state_75244__$1;
(statearr_75289_78549[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75245 === (25))){
var inst_75233 = (state_75244[(2)]);
var state_75244__$1 = state_75244;
var statearr_75291_78559 = state_75244__$1;
(statearr_75291_78559[(2)] = inst_75233);

(statearr_75291_78559[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75245 === (17))){
var inst_75196 = (state_75244[(10)]);
var inst_75205 = cljs.core.first(inst_75196);
var inst_75206 = cljs.core.async.muxch_STAR_(inst_75205);
var inst_75207 = cljs.core.async.close_BANG_(inst_75206);
var inst_75208 = cljs.core.next(inst_75196);
var inst_75182 = inst_75208;
var inst_75183 = null;
var inst_75184 = (0);
var inst_75185 = (0);
var state_75244__$1 = (function (){var statearr_75292 = state_75244;
(statearr_75292[(12)] = inst_75184);

(statearr_75292[(13)] = inst_75182);

(statearr_75292[(14)] = inst_75185);

(statearr_75292[(15)] = inst_75207);

(statearr_75292[(16)] = inst_75183);

return statearr_75292;
})();
var statearr_75293_78570 = state_75244__$1;
(statearr_75293_78570[(2)] = null);

(statearr_75293_78570[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75245 === (3))){
var inst_75241 = (state_75244[(2)]);
var state_75244__$1 = state_75244;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75244__$1,inst_75241);
} else {
if((state_val_75245 === (12))){
var inst_75216 = (state_75244[(2)]);
var state_75244__$1 = state_75244;
var statearr_75294_78574 = state_75244__$1;
(statearr_75294_78574[(2)] = inst_75216);

(statearr_75294_78574[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75245 === (2))){
var state_75244__$1 = state_75244;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75244__$1,(4),ch);
} else {
if((state_val_75245 === (23))){
var state_75244__$1 = state_75244;
var statearr_75297_78582 = state_75244__$1;
(statearr_75297_78582[(2)] = null);

(statearr_75297_78582[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75245 === (19))){
var inst_75223 = (state_75244[(11)]);
var inst_75168 = (state_75244[(8)]);
var inst_75225 = cljs.core.async.muxch_STAR_(inst_75223);
var state_75244__$1 = state_75244;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75244__$1,(22),inst_75225,inst_75168);
} else {
if((state_val_75245 === (11))){
var inst_75182 = (state_75244[(13)]);
var inst_75196 = (state_75244[(10)]);
var inst_75196__$1 = cljs.core.seq(inst_75182);
var state_75244__$1 = (function (){var statearr_75300 = state_75244;
(statearr_75300[(10)] = inst_75196__$1);

return statearr_75300;
})();
if(inst_75196__$1){
var statearr_75301_78594 = state_75244__$1;
(statearr_75301_78594[(1)] = (13));

} else {
var statearr_75302_78596 = state_75244__$1;
(statearr_75302_78596[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75245 === (9))){
var inst_75218 = (state_75244[(2)]);
var state_75244__$1 = state_75244;
var statearr_75305_78599 = state_75244__$1;
(statearr_75305_78599[(2)] = inst_75218);

(statearr_75305_78599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75245 === (5))){
var inst_75177 = cljs.core.deref(mults);
var inst_75180 = cljs.core.vals(inst_75177);
var inst_75181 = cljs.core.seq(inst_75180);
var inst_75182 = inst_75181;
var inst_75183 = null;
var inst_75184 = (0);
var inst_75185 = (0);
var state_75244__$1 = (function (){var statearr_75308 = state_75244;
(statearr_75308[(12)] = inst_75184);

(statearr_75308[(13)] = inst_75182);

(statearr_75308[(14)] = inst_75185);

(statearr_75308[(16)] = inst_75183);

return statearr_75308;
})();
var statearr_75310_78618 = state_75244__$1;
(statearr_75310_78618[(2)] = null);

(statearr_75310_78618[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75245 === (14))){
var state_75244__$1 = state_75244;
var statearr_75315_78621 = state_75244__$1;
(statearr_75315_78621[(2)] = null);

(statearr_75315_78621[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75245 === (16))){
var inst_75196 = (state_75244[(10)]);
var inst_75200 = cljs.core.chunk_first(inst_75196);
var inst_75201 = cljs.core.chunk_rest(inst_75196);
var inst_75202 = cljs.core.count(inst_75200);
var inst_75182 = inst_75201;
var inst_75183 = inst_75200;
var inst_75184 = inst_75202;
var inst_75185 = (0);
var state_75244__$1 = (function (){var statearr_75317 = state_75244;
(statearr_75317[(12)] = inst_75184);

(statearr_75317[(13)] = inst_75182);

(statearr_75317[(14)] = inst_75185);

(statearr_75317[(16)] = inst_75183);

return statearr_75317;
})();
var statearr_75318_78634 = state_75244__$1;
(statearr_75318_78634[(2)] = null);

(statearr_75318_78634[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75245 === (10))){
var inst_75184 = (state_75244[(12)]);
var inst_75182 = (state_75244[(13)]);
var inst_75185 = (state_75244[(14)]);
var inst_75183 = (state_75244[(16)]);
var inst_75190 = cljs.core._nth(inst_75183,inst_75185);
var inst_75191 = cljs.core.async.muxch_STAR_(inst_75190);
var inst_75192 = cljs.core.async.close_BANG_(inst_75191);
var inst_75193 = (inst_75185 + (1));
var tmp75312 = inst_75184;
var tmp75313 = inst_75182;
var tmp75314 = inst_75183;
var inst_75182__$1 = tmp75313;
var inst_75183__$1 = tmp75314;
var inst_75184__$1 = tmp75312;
var inst_75185__$1 = inst_75193;
var state_75244__$1 = (function (){var statearr_75320 = state_75244;
(statearr_75320[(12)] = inst_75184__$1);

(statearr_75320[(17)] = inst_75192);

(statearr_75320[(13)] = inst_75182__$1);

(statearr_75320[(14)] = inst_75185__$1);

(statearr_75320[(16)] = inst_75183__$1);

return statearr_75320;
})();
var statearr_75324_78655 = state_75244__$1;
(statearr_75324_78655[(2)] = null);

(statearr_75324_78655[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75245 === (18))){
var inst_75211 = (state_75244[(2)]);
var state_75244__$1 = state_75244;
var statearr_75325_78657 = state_75244__$1;
(statearr_75325_78657[(2)] = inst_75211);

(statearr_75325_78657[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75245 === (8))){
var inst_75184 = (state_75244[(12)]);
var inst_75185 = (state_75244[(14)]);
var inst_75187 = (inst_75185 < inst_75184);
var inst_75188 = inst_75187;
var state_75244__$1 = state_75244;
if(cljs.core.truth_(inst_75188)){
var statearr_75328_78667 = state_75244__$1;
(statearr_75328_78667[(1)] = (10));

} else {
var statearr_75331_78668 = state_75244__$1;
(statearr_75331_78668[(1)] = (11));

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
var cljs$core$async$state_machine__73175__auto__ = null;
var cljs$core$async$state_machine__73175__auto____0 = (function (){
var statearr_75337 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75337[(0)] = cljs$core$async$state_machine__73175__auto__);

(statearr_75337[(1)] = (1));

return statearr_75337;
});
var cljs$core$async$state_machine__73175__auto____1 = (function (state_75244){
while(true){
var ret_value__73176__auto__ = (function (){try{while(true){
var result__73177__auto__ = switch__73174__auto__(state_75244);
if(cljs.core.keyword_identical_QMARK_(result__73177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73177__auto__;
}
break;
}
}catch (e75344){var ex__73178__auto__ = e75344;
var statearr_75345_78680 = state_75244;
(statearr_75345_78680[(2)] = ex__73178__auto__);


if(cljs.core.seq((state_75244[(4)]))){
var statearr_75346_78682 = state_75244;
(statearr_75346_78682[(1)] = cljs.core.first((state_75244[(4)])));

} else {
throw ex__73178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78691 = state_75244;
state_75244 = G__78691;
continue;
} else {
return ret_value__73176__auto__;
}
break;
}
});
cljs$core$async$state_machine__73175__auto__ = function(state_75244){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__73175__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__73175__auto____1.call(this,state_75244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__73175__auto____0;
cljs$core$async$state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__73175__auto____1;
return cljs$core$async$state_machine__73175__auto__;
})()
})();
var state__73526__auto__ = (function (){var statearr_75353 = f__73525__auto__();
(statearr_75353[(6)] = c__73524__auto___78511);

return statearr_75353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__73526__auto__);
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
var G__75356 = arguments.length;
switch (G__75356) {
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
var G__75365 = arguments.length;
switch (G__75365) {
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
var G__75378 = arguments.length;
switch (G__75378) {
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
var c__73524__auto___78748 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__73525__auto__ = (function (){var switch__73174__auto__ = (function (state_75457){
var state_val_75459 = (state_75457[(1)]);
if((state_val_75459 === (7))){
var state_75457__$1 = state_75457;
var statearr_75461_78752 = state_75457__$1;
(statearr_75461_78752[(2)] = null);

(statearr_75461_78752[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75459 === (1))){
var state_75457__$1 = state_75457;
var statearr_75464_78762 = state_75457__$1;
(statearr_75464_78762[(2)] = null);

(statearr_75464_78762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75459 === (4))){
var inst_75395 = (state_75457[(7)]);
var inst_75396 = (state_75457[(8)]);
var inst_75398 = (inst_75396 < inst_75395);
var state_75457__$1 = state_75457;
if(cljs.core.truth_(inst_75398)){
var statearr_75465_78765 = state_75457__$1;
(statearr_75465_78765[(1)] = (6));

} else {
var statearr_75467_78767 = state_75457__$1;
(statearr_75467_78767[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75459 === (15))){
var inst_75438 = (state_75457[(9)]);
var inst_75444 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_75438);
var state_75457__$1 = state_75457;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75457__$1,(17),out,inst_75444);
} else {
if((state_val_75459 === (13))){
var inst_75438 = (state_75457[(9)]);
var inst_75438__$1 = (state_75457[(2)]);
var inst_75439 = cljs.core.some(cljs.core.nil_QMARK_,inst_75438__$1);
var state_75457__$1 = (function (){var statearr_75476 = state_75457;
(statearr_75476[(9)] = inst_75438__$1);

return statearr_75476;
})();
if(cljs.core.truth_(inst_75439)){
var statearr_75477_78778 = state_75457__$1;
(statearr_75477_78778[(1)] = (14));

} else {
var statearr_75479_78786 = state_75457__$1;
(statearr_75479_78786[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75459 === (6))){
var state_75457__$1 = state_75457;
var statearr_75484_78787 = state_75457__$1;
(statearr_75484_78787[(2)] = null);

(statearr_75484_78787[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75459 === (17))){
var inst_75446 = (state_75457[(2)]);
var state_75457__$1 = (function (){var statearr_75494 = state_75457;
(statearr_75494[(10)] = inst_75446);

return statearr_75494;
})();
var statearr_75495_78790 = state_75457__$1;
(statearr_75495_78790[(2)] = null);

(statearr_75495_78790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75459 === (3))){
var inst_75451 = (state_75457[(2)]);
var state_75457__$1 = state_75457;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75457__$1,inst_75451);
} else {
if((state_val_75459 === (12))){
var _ = (function (){var statearr_75496 = state_75457;
(statearr_75496[(4)] = cljs.core.rest((state_75457[(4)])));

return statearr_75496;
})();
var state_75457__$1 = state_75457;
var ex75488 = (state_75457__$1[(2)]);
var statearr_75499_78803 = state_75457__$1;
(statearr_75499_78803[(5)] = ex75488);


if((ex75488 instanceof Object)){
var statearr_75500_78805 = state_75457__$1;
(statearr_75500_78805[(1)] = (11));

(statearr_75500_78805[(5)] = null);

} else {
throw ex75488;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75459 === (2))){
var inst_75394 = cljs.core.reset_BANG_(dctr,cnt);
var inst_75395 = cnt;
var inst_75396 = (0);
var state_75457__$1 = (function (){var statearr_75509 = state_75457;
(statearr_75509[(11)] = inst_75394);

(statearr_75509[(7)] = inst_75395);

(statearr_75509[(8)] = inst_75396);

return statearr_75509;
})();
var statearr_75510_78815 = state_75457__$1;
(statearr_75510_78815[(2)] = null);

(statearr_75510_78815[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75459 === (11))){
var inst_75414 = (state_75457[(2)]);
var inst_75415 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_75457__$1 = (function (){var statearr_75514 = state_75457;
(statearr_75514[(12)] = inst_75414);

return statearr_75514;
})();
var statearr_75515_78825 = state_75457__$1;
(statearr_75515_78825[(2)] = inst_75415);

(statearr_75515_78825[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75459 === (9))){
var inst_75396 = (state_75457[(8)]);
var _ = (function (){var statearr_75516 = state_75457;
(statearr_75516[(4)] = cljs.core.cons((12),(state_75457[(4)])));

return statearr_75516;
})();
var inst_75421 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_75396) : chs__$1.call(null,inst_75396));
var inst_75422 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_75396) : done.call(null,inst_75396));
var inst_75423 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_75421,inst_75422);
var ___$1 = (function (){var statearr_75519 = state_75457;
(statearr_75519[(4)] = cljs.core.rest((state_75457[(4)])));

return statearr_75519;
})();
var state_75457__$1 = state_75457;
var statearr_75520_78839 = state_75457__$1;
(statearr_75520_78839[(2)] = inst_75423);

(statearr_75520_78839[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75459 === (5))){
var inst_75433 = (state_75457[(2)]);
var state_75457__$1 = (function (){var statearr_75521 = state_75457;
(statearr_75521[(13)] = inst_75433);

return statearr_75521;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75457__$1,(13),dchan);
} else {
if((state_val_75459 === (14))){
var inst_75442 = cljs.core.async.close_BANG_(out);
var state_75457__$1 = state_75457;
var statearr_75522_78850 = state_75457__$1;
(statearr_75522_78850[(2)] = inst_75442);

(statearr_75522_78850[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75459 === (16))){
var inst_75449 = (state_75457[(2)]);
var state_75457__$1 = state_75457;
var statearr_75526_78851 = state_75457__$1;
(statearr_75526_78851[(2)] = inst_75449);

(statearr_75526_78851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75459 === (10))){
var inst_75396 = (state_75457[(8)]);
var inst_75426 = (state_75457[(2)]);
var inst_75427 = (inst_75396 + (1));
var inst_75396__$1 = inst_75427;
var state_75457__$1 = (function (){var statearr_75529 = state_75457;
(statearr_75529[(14)] = inst_75426);

(statearr_75529[(8)] = inst_75396__$1);

return statearr_75529;
})();
var statearr_75531_78862 = state_75457__$1;
(statearr_75531_78862[(2)] = null);

(statearr_75531_78862[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75459 === (8))){
var inst_75431 = (state_75457[(2)]);
var state_75457__$1 = state_75457;
var statearr_75533_78863 = state_75457__$1;
(statearr_75533_78863[(2)] = inst_75431);

(statearr_75533_78863[(1)] = (5));


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
var cljs$core$async$state_machine__73175__auto__ = null;
var cljs$core$async$state_machine__73175__auto____0 = (function (){
var statearr_75537 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75537[(0)] = cljs$core$async$state_machine__73175__auto__);

(statearr_75537[(1)] = (1));

return statearr_75537;
});
var cljs$core$async$state_machine__73175__auto____1 = (function (state_75457){
while(true){
var ret_value__73176__auto__ = (function (){try{while(true){
var result__73177__auto__ = switch__73174__auto__(state_75457);
if(cljs.core.keyword_identical_QMARK_(result__73177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73177__auto__;
}
break;
}
}catch (e75538){var ex__73178__auto__ = e75538;
var statearr_75539_78878 = state_75457;
(statearr_75539_78878[(2)] = ex__73178__auto__);


if(cljs.core.seq((state_75457[(4)]))){
var statearr_75540_78880 = state_75457;
(statearr_75540_78880[(1)] = cljs.core.first((state_75457[(4)])));

} else {
throw ex__73178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78889 = state_75457;
state_75457 = G__78889;
continue;
} else {
return ret_value__73176__auto__;
}
break;
}
});
cljs$core$async$state_machine__73175__auto__ = function(state_75457){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__73175__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__73175__auto____1.call(this,state_75457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__73175__auto____0;
cljs$core$async$state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__73175__auto____1;
return cljs$core$async$state_machine__73175__auto__;
})()
})();
var state__73526__auto__ = (function (){var statearr_75543 = f__73525__auto__();
(statearr_75543[(6)] = c__73524__auto___78748);

return statearr_75543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__73526__auto__);
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
var G__75550 = arguments.length;
switch (G__75550) {
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
var c__73524__auto___78903 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__73525__auto__ = (function (){var switch__73174__auto__ = (function (state_75589){
var state_val_75590 = (state_75589[(1)]);
if((state_val_75590 === (7))){
var inst_75564 = (state_75589[(7)]);
var inst_75565 = (state_75589[(8)]);
var inst_75564__$1 = (state_75589[(2)]);
var inst_75565__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_75564__$1,(0),null);
var inst_75566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_75564__$1,(1),null);
var inst_75567 = (inst_75565__$1 == null);
var state_75589__$1 = (function (){var statearr_75597 = state_75589;
(statearr_75597[(7)] = inst_75564__$1);

(statearr_75597[(9)] = inst_75566);

(statearr_75597[(8)] = inst_75565__$1);

return statearr_75597;
})();
if(cljs.core.truth_(inst_75567)){
var statearr_75598_78920 = state_75589__$1;
(statearr_75598_78920[(1)] = (8));

} else {
var statearr_75600_78926 = state_75589__$1;
(statearr_75600_78926[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75590 === (1))){
var inst_75554 = cljs.core.vec(chs);
var inst_75555 = inst_75554;
var state_75589__$1 = (function (){var statearr_75601 = state_75589;
(statearr_75601[(10)] = inst_75555);

return statearr_75601;
})();
var statearr_75602_78929 = state_75589__$1;
(statearr_75602_78929[(2)] = null);

(statearr_75602_78929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75590 === (4))){
var inst_75555 = (state_75589[(10)]);
var state_75589__$1 = state_75589;
return cljs.core.async.ioc_alts_BANG_(state_75589__$1,(7),inst_75555);
} else {
if((state_val_75590 === (6))){
var inst_75584 = (state_75589[(2)]);
var state_75589__$1 = state_75589;
var statearr_75604_78938 = state_75589__$1;
(statearr_75604_78938[(2)] = inst_75584);

(statearr_75604_78938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75590 === (3))){
var inst_75586 = (state_75589[(2)]);
var state_75589__$1 = state_75589;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75589__$1,inst_75586);
} else {
if((state_val_75590 === (2))){
var inst_75555 = (state_75589[(10)]);
var inst_75557 = cljs.core.count(inst_75555);
var inst_75558 = (inst_75557 > (0));
var state_75589__$1 = state_75589;
if(cljs.core.truth_(inst_75558)){
var statearr_75607_78949 = state_75589__$1;
(statearr_75607_78949[(1)] = (4));

} else {
var statearr_75609_78950 = state_75589__$1;
(statearr_75609_78950[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75590 === (11))){
var inst_75555 = (state_75589[(10)]);
var inst_75577 = (state_75589[(2)]);
var tmp75606 = inst_75555;
var inst_75555__$1 = tmp75606;
var state_75589__$1 = (function (){var statearr_75611 = state_75589;
(statearr_75611[(11)] = inst_75577);

(statearr_75611[(10)] = inst_75555__$1);

return statearr_75611;
})();
var statearr_75613_78958 = state_75589__$1;
(statearr_75613_78958[(2)] = null);

(statearr_75613_78958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75590 === (9))){
var inst_75565 = (state_75589[(8)]);
var state_75589__$1 = state_75589;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75589__$1,(11),out,inst_75565);
} else {
if((state_val_75590 === (5))){
var inst_75582 = cljs.core.async.close_BANG_(out);
var state_75589__$1 = state_75589;
var statearr_75621_78967 = state_75589__$1;
(statearr_75621_78967[(2)] = inst_75582);

(statearr_75621_78967[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75590 === (10))){
var inst_75580 = (state_75589[(2)]);
var state_75589__$1 = state_75589;
var statearr_75622_78977 = state_75589__$1;
(statearr_75622_78977[(2)] = inst_75580);

(statearr_75622_78977[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75590 === (8))){
var inst_75564 = (state_75589[(7)]);
var inst_75566 = (state_75589[(9)]);
var inst_75555 = (state_75589[(10)]);
var inst_75565 = (state_75589[(8)]);
var inst_75572 = (function (){var cs = inst_75555;
var vec__75560 = inst_75564;
var v = inst_75565;
var c = inst_75566;
return (function (p1__75547_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__75547_SHARP_);
});
})();
var inst_75573 = cljs.core.filterv(inst_75572,inst_75555);
var inst_75555__$1 = inst_75573;
var state_75589__$1 = (function (){var statearr_75624 = state_75589;
(statearr_75624[(10)] = inst_75555__$1);

return statearr_75624;
})();
var statearr_75626_78988 = state_75589__$1;
(statearr_75626_78988[(2)] = null);

(statearr_75626_78988[(1)] = (2));


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
var cljs$core$async$state_machine__73175__auto__ = null;
var cljs$core$async$state_machine__73175__auto____0 = (function (){
var statearr_75629 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75629[(0)] = cljs$core$async$state_machine__73175__auto__);

(statearr_75629[(1)] = (1));

return statearr_75629;
});
var cljs$core$async$state_machine__73175__auto____1 = (function (state_75589){
while(true){
var ret_value__73176__auto__ = (function (){try{while(true){
var result__73177__auto__ = switch__73174__auto__(state_75589);
if(cljs.core.keyword_identical_QMARK_(result__73177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73177__auto__;
}
break;
}
}catch (e75631){var ex__73178__auto__ = e75631;
var statearr_75632_79003 = state_75589;
(statearr_75632_79003[(2)] = ex__73178__auto__);


if(cljs.core.seq((state_75589[(4)]))){
var statearr_75634_79004 = state_75589;
(statearr_75634_79004[(1)] = cljs.core.first((state_75589[(4)])));

} else {
throw ex__73178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79007 = state_75589;
state_75589 = G__79007;
continue;
} else {
return ret_value__73176__auto__;
}
break;
}
});
cljs$core$async$state_machine__73175__auto__ = function(state_75589){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__73175__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__73175__auto____1.call(this,state_75589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__73175__auto____0;
cljs$core$async$state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__73175__auto____1;
return cljs$core$async$state_machine__73175__auto__;
})()
})();
var state__73526__auto__ = (function (){var statearr_75640 = f__73525__auto__();
(statearr_75640[(6)] = c__73524__auto___78903);

return statearr_75640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__73526__auto__);
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
var G__75649 = arguments.length;
switch (G__75649) {
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
var c__73524__auto___79029 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__73525__auto__ = (function (){var switch__73174__auto__ = (function (state_75682){
var state_val_75683 = (state_75682[(1)]);
if((state_val_75683 === (7))){
var inst_75663 = (state_75682[(7)]);
var inst_75663__$1 = (state_75682[(2)]);
var inst_75664 = (inst_75663__$1 == null);
var inst_75665 = cljs.core.not(inst_75664);
var state_75682__$1 = (function (){var statearr_75693 = state_75682;
(statearr_75693[(7)] = inst_75663__$1);

return statearr_75693;
})();
if(inst_75665){
var statearr_75694_79043 = state_75682__$1;
(statearr_75694_79043[(1)] = (8));

} else {
var statearr_75695_79044 = state_75682__$1;
(statearr_75695_79044[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75683 === (1))){
var inst_75655 = (0);
var state_75682__$1 = (function (){var statearr_75696 = state_75682;
(statearr_75696[(8)] = inst_75655);

return statearr_75696;
})();
var statearr_75697_79053 = state_75682__$1;
(statearr_75697_79053[(2)] = null);

(statearr_75697_79053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75683 === (4))){
var state_75682__$1 = state_75682;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75682__$1,(7),ch);
} else {
if((state_val_75683 === (6))){
var inst_75677 = (state_75682[(2)]);
var state_75682__$1 = state_75682;
var statearr_75699_79056 = state_75682__$1;
(statearr_75699_79056[(2)] = inst_75677);

(statearr_75699_79056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75683 === (3))){
var inst_75679 = (state_75682[(2)]);
var inst_75680 = cljs.core.async.close_BANG_(out);
var state_75682__$1 = (function (){var statearr_75700 = state_75682;
(statearr_75700[(9)] = inst_75679);

return statearr_75700;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_75682__$1,inst_75680);
} else {
if((state_val_75683 === (2))){
var inst_75655 = (state_75682[(8)]);
var inst_75658 = (inst_75655 < n);
var state_75682__$1 = state_75682;
if(cljs.core.truth_(inst_75658)){
var statearr_75705_79067 = state_75682__$1;
(statearr_75705_79067[(1)] = (4));

} else {
var statearr_75706_79068 = state_75682__$1;
(statearr_75706_79068[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75683 === (11))){
var inst_75655 = (state_75682[(8)]);
var inst_75669 = (state_75682[(2)]);
var inst_75670 = (inst_75655 + (1));
var inst_75655__$1 = inst_75670;
var state_75682__$1 = (function (){var statearr_75708 = state_75682;
(statearr_75708[(10)] = inst_75669);

(statearr_75708[(8)] = inst_75655__$1);

return statearr_75708;
})();
var statearr_75709_79078 = state_75682__$1;
(statearr_75709_79078[(2)] = null);

(statearr_75709_79078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75683 === (9))){
var state_75682__$1 = state_75682;
var statearr_75712_79080 = state_75682__$1;
(statearr_75712_79080[(2)] = null);

(statearr_75712_79080[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75683 === (5))){
var state_75682__$1 = state_75682;
var statearr_75715_79092 = state_75682__$1;
(statearr_75715_79092[(2)] = null);

(statearr_75715_79092[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75683 === (10))){
var inst_75674 = (state_75682[(2)]);
var state_75682__$1 = state_75682;
var statearr_75717_79094 = state_75682__$1;
(statearr_75717_79094[(2)] = inst_75674);

(statearr_75717_79094[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75683 === (8))){
var inst_75663 = (state_75682[(7)]);
var state_75682__$1 = state_75682;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75682__$1,(11),out,inst_75663);
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
var cljs$core$async$state_machine__73175__auto__ = null;
var cljs$core$async$state_machine__73175__auto____0 = (function (){
var statearr_75723 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_75723[(0)] = cljs$core$async$state_machine__73175__auto__);

(statearr_75723[(1)] = (1));

return statearr_75723;
});
var cljs$core$async$state_machine__73175__auto____1 = (function (state_75682){
while(true){
var ret_value__73176__auto__ = (function (){try{while(true){
var result__73177__auto__ = switch__73174__auto__(state_75682);
if(cljs.core.keyword_identical_QMARK_(result__73177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73177__auto__;
}
break;
}
}catch (e75725){var ex__73178__auto__ = e75725;
var statearr_75726_79106 = state_75682;
(statearr_75726_79106[(2)] = ex__73178__auto__);


if(cljs.core.seq((state_75682[(4)]))){
var statearr_75727_79109 = state_75682;
(statearr_75727_79109[(1)] = cljs.core.first((state_75682[(4)])));

} else {
throw ex__73178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79116 = state_75682;
state_75682 = G__79116;
continue;
} else {
return ret_value__73176__auto__;
}
break;
}
});
cljs$core$async$state_machine__73175__auto__ = function(state_75682){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__73175__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__73175__auto____1.call(this,state_75682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__73175__auto____0;
cljs$core$async$state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__73175__auto____1;
return cljs$core$async$state_machine__73175__auto__;
})()
})();
var state__73526__auto__ = (function (){var statearr_75729 = f__73525__auto__();
(statearr_75729[(6)] = c__73524__auto___79029);

return statearr_75729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__73526__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async75732 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async75732 = (function (f,ch,meta75733){
this.f = f;
this.ch = ch;
this.meta75733 = meta75733;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async75732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75734,meta75733__$1){
var self__ = this;
var _75734__$1 = this;
return (new cljs.core.async.t_cljs$core$async75732(self__.f,self__.ch,meta75733__$1));
}));

(cljs.core.async.t_cljs$core$async75732.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75734){
var self__ = this;
var _75734__$1 = this;
return self__.meta75733;
}));

(cljs.core.async.t_cljs$core$async75732.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75732.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async75732.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async75732.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75732.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async75738 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async75738 = (function (f,ch,meta75733,_,fn1,meta75739){
this.f = f;
this.ch = ch;
this.meta75733 = meta75733;
this._ = _;
this.fn1 = fn1;
this.meta75739 = meta75739;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async75738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75740,meta75739__$1){
var self__ = this;
var _75740__$1 = this;
return (new cljs.core.async.t_cljs$core$async75738(self__.f,self__.ch,self__.meta75733,self__._,self__.fn1,meta75739__$1));
}));

(cljs.core.async.t_cljs$core$async75738.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75740){
var self__ = this;
var _75740__$1 = this;
return self__.meta75739;
}));

(cljs.core.async.t_cljs$core$async75738.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75738.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async75738.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async75738.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__75730_SHARP_){
var G__75743 = (((p1__75730_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__75730_SHARP_) : self__.f.call(null,p1__75730_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__75743) : f1.call(null,G__75743));
});
}));

(cljs.core.async.t_cljs$core$async75738.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta75733","meta75733",1110055621,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async75732","cljs.core.async/t_cljs$core$async75732",879349785,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta75739","meta75739",1505719154,null)], null);
}));

(cljs.core.async.t_cljs$core$async75738.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async75738.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async75738");

(cljs.core.async.t_cljs$core$async75738.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async75738");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async75738.
 */
cljs.core.async.__GT_t_cljs$core$async75738 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async75738(f__$1,ch__$1,meta75733__$1,___$2,fn1__$1,meta75739){
return (new cljs.core.async.t_cljs$core$async75738(f__$1,ch__$1,meta75733__$1,___$2,fn1__$1,meta75739));
});

}

return (new cljs.core.async.t_cljs$core$async75738(self__.f,self__.ch,self__.meta75733,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__75750 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__75750) : self__.f.call(null,G__75750));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async75732.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75732.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async75732.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta75733","meta75733",1110055621,null)], null);
}));

(cljs.core.async.t_cljs$core$async75732.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async75732.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async75732");

(cljs.core.async.t_cljs$core$async75732.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async75732");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async75732.
 */
cljs.core.async.__GT_t_cljs$core$async75732 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async75732(f__$1,ch__$1,meta75733){
return (new cljs.core.async.t_cljs$core$async75732(f__$1,ch__$1,meta75733));
});

}

return (new cljs.core.async.t_cljs$core$async75732(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async75758 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async75758 = (function (f,ch,meta75759){
this.f = f;
this.ch = ch;
this.meta75759 = meta75759;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async75758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75760,meta75759__$1){
var self__ = this;
var _75760__$1 = this;
return (new cljs.core.async.t_cljs$core$async75758(self__.f,self__.ch,meta75759__$1));
}));

(cljs.core.async.t_cljs$core$async75758.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75760){
var self__ = this;
var _75760__$1 = this;
return self__.meta75759;
}));

(cljs.core.async.t_cljs$core$async75758.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75758.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async75758.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75758.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async75758.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75758.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async75758.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta75759","meta75759",-332968170,null)], null);
}));

(cljs.core.async.t_cljs$core$async75758.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async75758.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async75758");

(cljs.core.async.t_cljs$core$async75758.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async75758");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async75758.
 */
cljs.core.async.__GT_t_cljs$core$async75758 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async75758(f__$1,ch__$1,meta75759){
return (new cljs.core.async.t_cljs$core$async75758(f__$1,ch__$1,meta75759));
});

}

return (new cljs.core.async.t_cljs$core$async75758(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async75771 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async75771 = (function (p,ch,meta75772){
this.p = p;
this.ch = ch;
this.meta75772 = meta75772;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async75771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75773,meta75772__$1){
var self__ = this;
var _75773__$1 = this;
return (new cljs.core.async.t_cljs$core$async75771(self__.p,self__.ch,meta75772__$1));
}));

(cljs.core.async.t_cljs$core$async75771.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75773){
var self__ = this;
var _75773__$1 = this;
return self__.meta75772;
}));

(cljs.core.async.t_cljs$core$async75771.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75771.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async75771.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async75771.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75771.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async75771.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75771.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async75771.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta75772","meta75772",1115711229,null)], null);
}));

(cljs.core.async.t_cljs$core$async75771.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async75771.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async75771");

(cljs.core.async.t_cljs$core$async75771.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async75771");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async75771.
 */
cljs.core.async.__GT_t_cljs$core$async75771 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async75771(p__$1,ch__$1,meta75772){
return (new cljs.core.async.t_cljs$core$async75771(p__$1,ch__$1,meta75772));
});

}

return (new cljs.core.async.t_cljs$core$async75771(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__75789 = arguments.length;
switch (G__75789) {
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
var c__73524__auto___79272 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__73525__auto__ = (function (){var switch__73174__auto__ = (function (state_75815){
var state_val_75816 = (state_75815[(1)]);
if((state_val_75816 === (7))){
var inst_75810 = (state_75815[(2)]);
var state_75815__$1 = state_75815;
var statearr_75817_79281 = state_75815__$1;
(statearr_75817_79281[(2)] = inst_75810);

(statearr_75817_79281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75816 === (1))){
var state_75815__$1 = state_75815;
var statearr_75820_79284 = state_75815__$1;
(statearr_75820_79284[(2)] = null);

(statearr_75820_79284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75816 === (4))){
var inst_75794 = (state_75815[(7)]);
var inst_75794__$1 = (state_75815[(2)]);
var inst_75795 = (inst_75794__$1 == null);
var state_75815__$1 = (function (){var statearr_75821 = state_75815;
(statearr_75821[(7)] = inst_75794__$1);

return statearr_75821;
})();
if(cljs.core.truth_(inst_75795)){
var statearr_75823_79293 = state_75815__$1;
(statearr_75823_79293[(1)] = (5));

} else {
var statearr_75824_79294 = state_75815__$1;
(statearr_75824_79294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75816 === (6))){
var inst_75794 = (state_75815[(7)]);
var inst_75799 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_75794) : p.call(null,inst_75794));
var state_75815__$1 = state_75815;
if(cljs.core.truth_(inst_75799)){
var statearr_75825_79298 = state_75815__$1;
(statearr_75825_79298[(1)] = (8));

} else {
var statearr_75826_79306 = state_75815__$1;
(statearr_75826_79306[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75816 === (3))){
var inst_75812 = (state_75815[(2)]);
var state_75815__$1 = state_75815;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75815__$1,inst_75812);
} else {
if((state_val_75816 === (2))){
var state_75815__$1 = state_75815;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75815__$1,(4),ch);
} else {
if((state_val_75816 === (11))){
var inst_75804 = (state_75815[(2)]);
var state_75815__$1 = state_75815;
var statearr_75829_79314 = state_75815__$1;
(statearr_75829_79314[(2)] = inst_75804);

(statearr_75829_79314[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75816 === (9))){
var state_75815__$1 = state_75815;
var statearr_75833_79323 = state_75815__$1;
(statearr_75833_79323[(2)] = null);

(statearr_75833_79323[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75816 === (5))){
var inst_75797 = cljs.core.async.close_BANG_(out);
var state_75815__$1 = state_75815;
var statearr_75834_79325 = state_75815__$1;
(statearr_75834_79325[(2)] = inst_75797);

(statearr_75834_79325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75816 === (10))){
var inst_75807 = (state_75815[(2)]);
var state_75815__$1 = (function (){var statearr_75835 = state_75815;
(statearr_75835[(8)] = inst_75807);

return statearr_75835;
})();
var statearr_75836_79335 = state_75815__$1;
(statearr_75836_79335[(2)] = null);

(statearr_75836_79335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75816 === (8))){
var inst_75794 = (state_75815[(7)]);
var state_75815__$1 = state_75815;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75815__$1,(11),out,inst_75794);
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
var cljs$core$async$state_machine__73175__auto__ = null;
var cljs$core$async$state_machine__73175__auto____0 = (function (){
var statearr_75841 = [null,null,null,null,null,null,null,null,null];
(statearr_75841[(0)] = cljs$core$async$state_machine__73175__auto__);

(statearr_75841[(1)] = (1));

return statearr_75841;
});
var cljs$core$async$state_machine__73175__auto____1 = (function (state_75815){
while(true){
var ret_value__73176__auto__ = (function (){try{while(true){
var result__73177__auto__ = switch__73174__auto__(state_75815);
if(cljs.core.keyword_identical_QMARK_(result__73177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73177__auto__;
}
break;
}
}catch (e75844){var ex__73178__auto__ = e75844;
var statearr_75845_79347 = state_75815;
(statearr_75845_79347[(2)] = ex__73178__auto__);


if(cljs.core.seq((state_75815[(4)]))){
var statearr_75846_79349 = state_75815;
(statearr_75846_79349[(1)] = cljs.core.first((state_75815[(4)])));

} else {
throw ex__73178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79358 = state_75815;
state_75815 = G__79358;
continue;
} else {
return ret_value__73176__auto__;
}
break;
}
});
cljs$core$async$state_machine__73175__auto__ = function(state_75815){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__73175__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__73175__auto____1.call(this,state_75815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__73175__auto____0;
cljs$core$async$state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__73175__auto____1;
return cljs$core$async$state_machine__73175__auto__;
})()
})();
var state__73526__auto__ = (function (){var statearr_75848 = f__73525__auto__();
(statearr_75848[(6)] = c__73524__auto___79272);

return statearr_75848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__73526__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__75852 = arguments.length;
switch (G__75852) {
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
var c__73524__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__73525__auto__ = (function (){var switch__73174__auto__ = (function (state_75928){
var state_val_75929 = (state_75928[(1)]);
if((state_val_75929 === (7))){
var inst_75924 = (state_75928[(2)]);
var state_75928__$1 = state_75928;
var statearr_75932_79373 = state_75928__$1;
(statearr_75932_79373[(2)] = inst_75924);

(statearr_75932_79373[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75929 === (20))){
var inst_75893 = (state_75928[(7)]);
var inst_75905 = (state_75928[(2)]);
var inst_75906 = cljs.core.next(inst_75893);
var inst_75879 = inst_75906;
var inst_75880 = null;
var inst_75881 = (0);
var inst_75882 = (0);
var state_75928__$1 = (function (){var statearr_75933 = state_75928;
(statearr_75933[(8)] = inst_75879);

(statearr_75933[(9)] = inst_75880);

(statearr_75933[(10)] = inst_75905);

(statearr_75933[(11)] = inst_75881);

(statearr_75933[(12)] = inst_75882);

return statearr_75933;
})();
var statearr_75935_79384 = state_75928__$1;
(statearr_75935_79384[(2)] = null);

(statearr_75935_79384[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75929 === (1))){
var state_75928__$1 = state_75928;
var statearr_75936_79389 = state_75928__$1;
(statearr_75936_79389[(2)] = null);

(statearr_75936_79389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75929 === (4))){
var inst_75868 = (state_75928[(13)]);
var inst_75868__$1 = (state_75928[(2)]);
var inst_75869 = (inst_75868__$1 == null);
var state_75928__$1 = (function (){var statearr_75938 = state_75928;
(statearr_75938[(13)] = inst_75868__$1);

return statearr_75938;
})();
if(cljs.core.truth_(inst_75869)){
var statearr_75939_79399 = state_75928__$1;
(statearr_75939_79399[(1)] = (5));

} else {
var statearr_75940_79400 = state_75928__$1;
(statearr_75940_79400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75929 === (15))){
var state_75928__$1 = state_75928;
var statearr_75951_79403 = state_75928__$1;
(statearr_75951_79403[(2)] = null);

(statearr_75951_79403[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75929 === (21))){
var state_75928__$1 = state_75928;
var statearr_75952_79405 = state_75928__$1;
(statearr_75952_79405[(2)] = null);

(statearr_75952_79405[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75929 === (13))){
var inst_75879 = (state_75928[(8)]);
var inst_75880 = (state_75928[(9)]);
var inst_75881 = (state_75928[(11)]);
var inst_75882 = (state_75928[(12)]);
var inst_75889 = (state_75928[(2)]);
var inst_75890 = (inst_75882 + (1));
var tmp75942 = inst_75879;
var tmp75943 = inst_75880;
var tmp75944 = inst_75881;
var inst_75879__$1 = tmp75942;
var inst_75880__$1 = tmp75943;
var inst_75881__$1 = tmp75944;
var inst_75882__$1 = inst_75890;
var state_75928__$1 = (function (){var statearr_75955 = state_75928;
(statearr_75955[(14)] = inst_75889);

(statearr_75955[(8)] = inst_75879__$1);

(statearr_75955[(9)] = inst_75880__$1);

(statearr_75955[(11)] = inst_75881__$1);

(statearr_75955[(12)] = inst_75882__$1);

return statearr_75955;
})();
var statearr_75956_79425 = state_75928__$1;
(statearr_75956_79425[(2)] = null);

(statearr_75956_79425[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75929 === (22))){
var state_75928__$1 = state_75928;
var statearr_75958_79428 = state_75928__$1;
(statearr_75958_79428[(2)] = null);

(statearr_75958_79428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75929 === (6))){
var inst_75868 = (state_75928[(13)]);
var inst_75877 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_75868) : f.call(null,inst_75868));
var inst_75878 = cljs.core.seq(inst_75877);
var inst_75879 = inst_75878;
var inst_75880 = null;
var inst_75881 = (0);
var inst_75882 = (0);
var state_75928__$1 = (function (){var statearr_75960 = state_75928;
(statearr_75960[(8)] = inst_75879);

(statearr_75960[(9)] = inst_75880);

(statearr_75960[(11)] = inst_75881);

(statearr_75960[(12)] = inst_75882);

return statearr_75960;
})();
var statearr_75961_79440 = state_75928__$1;
(statearr_75961_79440[(2)] = null);

(statearr_75961_79440[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75929 === (17))){
var inst_75893 = (state_75928[(7)]);
var inst_75897 = cljs.core.chunk_first(inst_75893);
var inst_75899 = cljs.core.chunk_rest(inst_75893);
var inst_75900 = cljs.core.count(inst_75897);
var inst_75879 = inst_75899;
var inst_75880 = inst_75897;
var inst_75881 = inst_75900;
var inst_75882 = (0);
var state_75928__$1 = (function (){var statearr_75963 = state_75928;
(statearr_75963[(8)] = inst_75879);

(statearr_75963[(9)] = inst_75880);

(statearr_75963[(11)] = inst_75881);

(statearr_75963[(12)] = inst_75882);

return statearr_75963;
})();
var statearr_75964_79450 = state_75928__$1;
(statearr_75964_79450[(2)] = null);

(statearr_75964_79450[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75929 === (3))){
var inst_75926 = (state_75928[(2)]);
var state_75928__$1 = state_75928;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75928__$1,inst_75926);
} else {
if((state_val_75929 === (12))){
var inst_75914 = (state_75928[(2)]);
var state_75928__$1 = state_75928;
var statearr_75968_79454 = state_75928__$1;
(statearr_75968_79454[(2)] = inst_75914);

(statearr_75968_79454[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75929 === (2))){
var state_75928__$1 = state_75928;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75928__$1,(4),in$);
} else {
if((state_val_75929 === (23))){
var inst_75922 = (state_75928[(2)]);
var state_75928__$1 = state_75928;
var statearr_75970_79462 = state_75928__$1;
(statearr_75970_79462[(2)] = inst_75922);

(statearr_75970_79462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75929 === (19))){
var inst_75909 = (state_75928[(2)]);
var state_75928__$1 = state_75928;
var statearr_75972_79464 = state_75928__$1;
(statearr_75972_79464[(2)] = inst_75909);

(statearr_75972_79464[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75929 === (11))){
var inst_75879 = (state_75928[(8)]);
var inst_75893 = (state_75928[(7)]);
var inst_75893__$1 = cljs.core.seq(inst_75879);
var state_75928__$1 = (function (){var statearr_75977 = state_75928;
(statearr_75977[(7)] = inst_75893__$1);

return statearr_75977;
})();
if(inst_75893__$1){
var statearr_75978_79478 = state_75928__$1;
(statearr_75978_79478[(1)] = (14));

} else {
var statearr_75979_79479 = state_75928__$1;
(statearr_75979_79479[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75929 === (9))){
var inst_75916 = (state_75928[(2)]);
var inst_75917 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_75928__$1 = (function (){var statearr_75982 = state_75928;
(statearr_75982[(15)] = inst_75916);

return statearr_75982;
})();
if(cljs.core.truth_(inst_75917)){
var statearr_75983_79480 = state_75928__$1;
(statearr_75983_79480[(1)] = (21));

} else {
var statearr_75984_79482 = state_75928__$1;
(statearr_75984_79482[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75929 === (5))){
var inst_75871 = cljs.core.async.close_BANG_(out);
var state_75928__$1 = state_75928;
var statearr_75986_79484 = state_75928__$1;
(statearr_75986_79484[(2)] = inst_75871);

(statearr_75986_79484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75929 === (14))){
var inst_75893 = (state_75928[(7)]);
var inst_75895 = cljs.core.chunked_seq_QMARK_(inst_75893);
var state_75928__$1 = state_75928;
if(inst_75895){
var statearr_75987_79493 = state_75928__$1;
(statearr_75987_79493[(1)] = (17));

} else {
var statearr_75988_79494 = state_75928__$1;
(statearr_75988_79494[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75929 === (16))){
var inst_75912 = (state_75928[(2)]);
var state_75928__$1 = state_75928;
var statearr_75991_79495 = state_75928__$1;
(statearr_75991_79495[(2)] = inst_75912);

(statearr_75991_79495[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75929 === (10))){
var inst_75880 = (state_75928[(9)]);
var inst_75882 = (state_75928[(12)]);
var inst_75887 = cljs.core._nth(inst_75880,inst_75882);
var state_75928__$1 = state_75928;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75928__$1,(13),out,inst_75887);
} else {
if((state_val_75929 === (18))){
var inst_75893 = (state_75928[(7)]);
var inst_75903 = cljs.core.first(inst_75893);
var state_75928__$1 = state_75928;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75928__$1,(20),out,inst_75903);
} else {
if((state_val_75929 === (8))){
var inst_75881 = (state_75928[(11)]);
var inst_75882 = (state_75928[(12)]);
var inst_75884 = (inst_75882 < inst_75881);
var inst_75885 = inst_75884;
var state_75928__$1 = state_75928;
if(cljs.core.truth_(inst_75885)){
var statearr_75994_79511 = state_75928__$1;
(statearr_75994_79511[(1)] = (10));

} else {
var statearr_75995_79512 = state_75928__$1;
(statearr_75995_79512[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__73175__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__73175__auto____0 = (function (){
var statearr_75997 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75997[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__73175__auto__);

(statearr_75997[(1)] = (1));

return statearr_75997;
});
var cljs$core$async$mapcat_STAR__$_state_machine__73175__auto____1 = (function (state_75928){
while(true){
var ret_value__73176__auto__ = (function (){try{while(true){
var result__73177__auto__ = switch__73174__auto__(state_75928);
if(cljs.core.keyword_identical_QMARK_(result__73177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73177__auto__;
}
break;
}
}catch (e76000){var ex__73178__auto__ = e76000;
var statearr_76001_79523 = state_75928;
(statearr_76001_79523[(2)] = ex__73178__auto__);


if(cljs.core.seq((state_75928[(4)]))){
var statearr_76002_79524 = state_75928;
(statearr_76002_79524[(1)] = cljs.core.first((state_75928[(4)])));

} else {
throw ex__73178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79525 = state_75928;
state_75928 = G__79525;
continue;
} else {
return ret_value__73176__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__73175__auto__ = function(state_75928){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__73175__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__73175__auto____1.call(this,state_75928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__73175__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__73175__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__73175__auto__;
})()
})();
var state__73526__auto__ = (function (){var statearr_76006 = f__73525__auto__();
(statearr_76006[(6)] = c__73524__auto__);

return statearr_76006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__73526__auto__);
}));

return c__73524__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__76009 = arguments.length;
switch (G__76009) {
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
var G__76021 = arguments.length;
switch (G__76021) {
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
var G__76028 = arguments.length;
switch (G__76028) {
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
var c__73524__auto___79552 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__73525__auto__ = (function (){var switch__73174__auto__ = (function (state_76058){
var state_val_76059 = (state_76058[(1)]);
if((state_val_76059 === (7))){
var inst_76052 = (state_76058[(2)]);
var state_76058__$1 = state_76058;
var statearr_76063_79555 = state_76058__$1;
(statearr_76063_79555[(2)] = inst_76052);

(statearr_76063_79555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76059 === (1))){
var inst_76031 = null;
var state_76058__$1 = (function (){var statearr_76065 = state_76058;
(statearr_76065[(7)] = inst_76031);

return statearr_76065;
})();
var statearr_76068_79564 = state_76058__$1;
(statearr_76068_79564[(2)] = null);

(statearr_76068_79564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76059 === (4))){
var inst_76034 = (state_76058[(8)]);
var inst_76034__$1 = (state_76058[(2)]);
var inst_76036 = (inst_76034__$1 == null);
var inst_76037 = cljs.core.not(inst_76036);
var state_76058__$1 = (function (){var statearr_76070 = state_76058;
(statearr_76070[(8)] = inst_76034__$1);

return statearr_76070;
})();
if(inst_76037){
var statearr_76071_79568 = state_76058__$1;
(statearr_76071_79568[(1)] = (5));

} else {
var statearr_76072_79569 = state_76058__$1;
(statearr_76072_79569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76059 === (6))){
var state_76058__$1 = state_76058;
var statearr_76074_79573 = state_76058__$1;
(statearr_76074_79573[(2)] = null);

(statearr_76074_79573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76059 === (3))){
var inst_76054 = (state_76058[(2)]);
var inst_76055 = cljs.core.async.close_BANG_(out);
var state_76058__$1 = (function (){var statearr_76075 = state_76058;
(statearr_76075[(9)] = inst_76054);

return statearr_76075;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_76058__$1,inst_76055);
} else {
if((state_val_76059 === (2))){
var state_76058__$1 = state_76058;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76058__$1,(4),ch);
} else {
if((state_val_76059 === (11))){
var inst_76034 = (state_76058[(8)]);
var inst_76045 = (state_76058[(2)]);
var inst_76031 = inst_76034;
var state_76058__$1 = (function (){var statearr_76076 = state_76058;
(statearr_76076[(10)] = inst_76045);

(statearr_76076[(7)] = inst_76031);

return statearr_76076;
})();
var statearr_76077_79574 = state_76058__$1;
(statearr_76077_79574[(2)] = null);

(statearr_76077_79574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76059 === (9))){
var inst_76034 = (state_76058[(8)]);
var state_76058__$1 = state_76058;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_76058__$1,(11),out,inst_76034);
} else {
if((state_val_76059 === (5))){
var inst_76031 = (state_76058[(7)]);
var inst_76034 = (state_76058[(8)]);
var inst_76040 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_76034,inst_76031);
var state_76058__$1 = state_76058;
if(inst_76040){
var statearr_76083_79575 = state_76058__$1;
(statearr_76083_79575[(1)] = (8));

} else {
var statearr_76085_79576 = state_76058__$1;
(statearr_76085_79576[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76059 === (10))){
var inst_76049 = (state_76058[(2)]);
var state_76058__$1 = state_76058;
var statearr_76086_79577 = state_76058__$1;
(statearr_76086_79577[(2)] = inst_76049);

(statearr_76086_79577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76059 === (8))){
var inst_76031 = (state_76058[(7)]);
var tmp76078 = inst_76031;
var inst_76031__$1 = tmp76078;
var state_76058__$1 = (function (){var statearr_76087 = state_76058;
(statearr_76087[(7)] = inst_76031__$1);

return statearr_76087;
})();
var statearr_76088_79578 = state_76058__$1;
(statearr_76088_79578[(2)] = null);

(statearr_76088_79578[(1)] = (2));


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
var cljs$core$async$state_machine__73175__auto__ = null;
var cljs$core$async$state_machine__73175__auto____0 = (function (){
var statearr_76092 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_76092[(0)] = cljs$core$async$state_machine__73175__auto__);

(statearr_76092[(1)] = (1));

return statearr_76092;
});
var cljs$core$async$state_machine__73175__auto____1 = (function (state_76058){
while(true){
var ret_value__73176__auto__ = (function (){try{while(true){
var result__73177__auto__ = switch__73174__auto__(state_76058);
if(cljs.core.keyword_identical_QMARK_(result__73177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73177__auto__;
}
break;
}
}catch (e76094){var ex__73178__auto__ = e76094;
var statearr_76095_79584 = state_76058;
(statearr_76095_79584[(2)] = ex__73178__auto__);


if(cljs.core.seq((state_76058[(4)]))){
var statearr_76096_79585 = state_76058;
(statearr_76096_79585[(1)] = cljs.core.first((state_76058[(4)])));

} else {
throw ex__73178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79593 = state_76058;
state_76058 = G__79593;
continue;
} else {
return ret_value__73176__auto__;
}
break;
}
});
cljs$core$async$state_machine__73175__auto__ = function(state_76058){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__73175__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__73175__auto____1.call(this,state_76058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__73175__auto____0;
cljs$core$async$state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__73175__auto____1;
return cljs$core$async$state_machine__73175__auto__;
})()
})();
var state__73526__auto__ = (function (){var statearr_76098 = f__73525__auto__();
(statearr_76098[(6)] = c__73524__auto___79552);

return statearr_76098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__73526__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__76102 = arguments.length;
switch (G__76102) {
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
var c__73524__auto___79609 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__73525__auto__ = (function (){var switch__73174__auto__ = (function (state_76148){
var state_val_76150 = (state_76148[(1)]);
if((state_val_76150 === (7))){
var inst_76143 = (state_76148[(2)]);
var state_76148__$1 = state_76148;
var statearr_76151_79611 = state_76148__$1;
(statearr_76151_79611[(2)] = inst_76143);

(statearr_76151_79611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76150 === (1))){
var inst_76109 = (new Array(n));
var inst_76110 = inst_76109;
var inst_76111 = (0);
var state_76148__$1 = (function (){var statearr_76154 = state_76148;
(statearr_76154[(7)] = inst_76110);

(statearr_76154[(8)] = inst_76111);

return statearr_76154;
})();
var statearr_76155_79621 = state_76148__$1;
(statearr_76155_79621[(2)] = null);

(statearr_76155_79621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76150 === (4))){
var inst_76114 = (state_76148[(9)]);
var inst_76114__$1 = (state_76148[(2)]);
var inst_76116 = (inst_76114__$1 == null);
var inst_76117 = cljs.core.not(inst_76116);
var state_76148__$1 = (function (){var statearr_76156 = state_76148;
(statearr_76156[(9)] = inst_76114__$1);

return statearr_76156;
})();
if(inst_76117){
var statearr_76158_79626 = state_76148__$1;
(statearr_76158_79626[(1)] = (5));

} else {
var statearr_76159_79627 = state_76148__$1;
(statearr_76159_79627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76150 === (15))){
var inst_76137 = (state_76148[(2)]);
var state_76148__$1 = state_76148;
var statearr_76160_79636 = state_76148__$1;
(statearr_76160_79636[(2)] = inst_76137);

(statearr_76160_79636[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76150 === (13))){
var state_76148__$1 = state_76148;
var statearr_76162_79637 = state_76148__$1;
(statearr_76162_79637[(2)] = null);

(statearr_76162_79637[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76150 === (6))){
var inst_76111 = (state_76148[(8)]);
var inst_76133 = (inst_76111 > (0));
var state_76148__$1 = state_76148;
if(cljs.core.truth_(inst_76133)){
var statearr_76165_79641 = state_76148__$1;
(statearr_76165_79641[(1)] = (12));

} else {
var statearr_76166_79649 = state_76148__$1;
(statearr_76166_79649[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76150 === (3))){
var inst_76145 = (state_76148[(2)]);
var state_76148__$1 = state_76148;
return cljs.core.async.impl.ioc_helpers.return_chan(state_76148__$1,inst_76145);
} else {
if((state_val_76150 === (12))){
var inst_76110 = (state_76148[(7)]);
var inst_76135 = cljs.core.vec(inst_76110);
var state_76148__$1 = state_76148;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_76148__$1,(15),out,inst_76135);
} else {
if((state_val_76150 === (2))){
var state_76148__$1 = state_76148;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76148__$1,(4),ch);
} else {
if((state_val_76150 === (11))){
var inst_76127 = (state_76148[(2)]);
var inst_76128 = (new Array(n));
var inst_76110 = inst_76128;
var inst_76111 = (0);
var state_76148__$1 = (function (){var statearr_76170 = state_76148;
(statearr_76170[(7)] = inst_76110);

(statearr_76170[(8)] = inst_76111);

(statearr_76170[(10)] = inst_76127);

return statearr_76170;
})();
var statearr_76171_79662 = state_76148__$1;
(statearr_76171_79662[(2)] = null);

(statearr_76171_79662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76150 === (9))){
var inst_76110 = (state_76148[(7)]);
var inst_76125 = cljs.core.vec(inst_76110);
var state_76148__$1 = state_76148;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_76148__$1,(11),out,inst_76125);
} else {
if((state_val_76150 === (5))){
var inst_76114 = (state_76148[(9)]);
var inst_76120 = (state_76148[(11)]);
var inst_76110 = (state_76148[(7)]);
var inst_76111 = (state_76148[(8)]);
var inst_76119 = (inst_76110[inst_76111] = inst_76114);
var inst_76120__$1 = (inst_76111 + (1));
var inst_76121 = (inst_76120__$1 < n);
var state_76148__$1 = (function (){var statearr_76180 = state_76148;
(statearr_76180[(11)] = inst_76120__$1);

(statearr_76180[(12)] = inst_76119);

return statearr_76180;
})();
if(cljs.core.truth_(inst_76121)){
var statearr_76184_79675 = state_76148__$1;
(statearr_76184_79675[(1)] = (8));

} else {
var statearr_76186_79676 = state_76148__$1;
(statearr_76186_79676[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76150 === (14))){
var inst_76140 = (state_76148[(2)]);
var inst_76141 = cljs.core.async.close_BANG_(out);
var state_76148__$1 = (function (){var statearr_76190 = state_76148;
(statearr_76190[(13)] = inst_76140);

return statearr_76190;
})();
var statearr_76193_79687 = state_76148__$1;
(statearr_76193_79687[(2)] = inst_76141);

(statearr_76193_79687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76150 === (10))){
var inst_76131 = (state_76148[(2)]);
var state_76148__$1 = state_76148;
var statearr_76195_79690 = state_76148__$1;
(statearr_76195_79690[(2)] = inst_76131);

(statearr_76195_79690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76150 === (8))){
var inst_76120 = (state_76148[(11)]);
var inst_76110 = (state_76148[(7)]);
var tmp76188 = inst_76110;
var inst_76110__$1 = tmp76188;
var inst_76111 = inst_76120;
var state_76148__$1 = (function (){var statearr_76197 = state_76148;
(statearr_76197[(7)] = inst_76110__$1);

(statearr_76197[(8)] = inst_76111);

return statearr_76197;
})();
var statearr_76199_79699 = state_76148__$1;
(statearr_76199_79699[(2)] = null);

(statearr_76199_79699[(1)] = (2));


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
var cljs$core$async$state_machine__73175__auto__ = null;
var cljs$core$async$state_machine__73175__auto____0 = (function (){
var statearr_76202 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_76202[(0)] = cljs$core$async$state_machine__73175__auto__);

(statearr_76202[(1)] = (1));

return statearr_76202;
});
var cljs$core$async$state_machine__73175__auto____1 = (function (state_76148){
while(true){
var ret_value__73176__auto__ = (function (){try{while(true){
var result__73177__auto__ = switch__73174__auto__(state_76148);
if(cljs.core.keyword_identical_QMARK_(result__73177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73177__auto__;
}
break;
}
}catch (e76203){var ex__73178__auto__ = e76203;
var statearr_76204_79703 = state_76148;
(statearr_76204_79703[(2)] = ex__73178__auto__);


if(cljs.core.seq((state_76148[(4)]))){
var statearr_76205_79711 = state_76148;
(statearr_76205_79711[(1)] = cljs.core.first((state_76148[(4)])));

} else {
throw ex__73178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79712 = state_76148;
state_76148 = G__79712;
continue;
} else {
return ret_value__73176__auto__;
}
break;
}
});
cljs$core$async$state_machine__73175__auto__ = function(state_76148){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__73175__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__73175__auto____1.call(this,state_76148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__73175__auto____0;
cljs$core$async$state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__73175__auto____1;
return cljs$core$async$state_machine__73175__auto__;
})()
})();
var state__73526__auto__ = (function (){var statearr_76209 = f__73525__auto__();
(statearr_76209[(6)] = c__73524__auto___79609);

return statearr_76209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__73526__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__76213 = arguments.length;
switch (G__76213) {
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
var c__73524__auto___79729 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__73525__auto__ = (function (){var switch__73174__auto__ = (function (state_76259){
var state_val_76260 = (state_76259[(1)]);
if((state_val_76260 === (7))){
var inst_76255 = (state_76259[(2)]);
var state_76259__$1 = state_76259;
var statearr_76263_79737 = state_76259__$1;
(statearr_76263_79737[(2)] = inst_76255);

(statearr_76263_79737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76260 === (1))){
var inst_76216 = [];
var inst_76217 = inst_76216;
var inst_76218 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_76259__$1 = (function (){var statearr_76264 = state_76259;
(statearr_76264[(7)] = inst_76218);

(statearr_76264[(8)] = inst_76217);

return statearr_76264;
})();
var statearr_76265_79748 = state_76259__$1;
(statearr_76265_79748[(2)] = null);

(statearr_76265_79748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76260 === (4))){
var inst_76222 = (state_76259[(9)]);
var inst_76222__$1 = (state_76259[(2)]);
var inst_76224 = (inst_76222__$1 == null);
var inst_76225 = cljs.core.not(inst_76224);
var state_76259__$1 = (function (){var statearr_76266 = state_76259;
(statearr_76266[(9)] = inst_76222__$1);

return statearr_76266;
})();
if(inst_76225){
var statearr_76267_79753 = state_76259__$1;
(statearr_76267_79753[(1)] = (5));

} else {
var statearr_76269_79755 = state_76259__$1;
(statearr_76269_79755[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76260 === (15))){
var inst_76249 = (state_76259[(2)]);
var state_76259__$1 = state_76259;
var statearr_76271_79763 = state_76259__$1;
(statearr_76271_79763[(2)] = inst_76249);

(statearr_76271_79763[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76260 === (13))){
var state_76259__$1 = state_76259;
var statearr_76273_79765 = state_76259__$1;
(statearr_76273_79765[(2)] = null);

(statearr_76273_79765[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76260 === (6))){
var inst_76217 = (state_76259[(8)]);
var inst_76244 = inst_76217.length;
var inst_76245 = (inst_76244 > (0));
var state_76259__$1 = state_76259;
if(cljs.core.truth_(inst_76245)){
var statearr_76281_79775 = state_76259__$1;
(statearr_76281_79775[(1)] = (12));

} else {
var statearr_76282_79776 = state_76259__$1;
(statearr_76282_79776[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76260 === (3))){
var inst_76257 = (state_76259[(2)]);
var state_76259__$1 = state_76259;
return cljs.core.async.impl.ioc_helpers.return_chan(state_76259__$1,inst_76257);
} else {
if((state_val_76260 === (12))){
var inst_76217 = (state_76259[(8)]);
var inst_76247 = cljs.core.vec(inst_76217);
var state_76259__$1 = state_76259;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_76259__$1,(15),out,inst_76247);
} else {
if((state_val_76260 === (2))){
var state_76259__$1 = state_76259;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76259__$1,(4),ch);
} else {
if((state_val_76260 === (11))){
var inst_76227 = (state_76259[(10)]);
var inst_76222 = (state_76259[(9)]);
var inst_76237 = (state_76259[(2)]);
var inst_76238 = [];
var inst_76239 = inst_76238.push(inst_76222);
var inst_76217 = inst_76238;
var inst_76218 = inst_76227;
var state_76259__$1 = (function (){var statearr_76293 = state_76259;
(statearr_76293[(11)] = inst_76237);

(statearr_76293[(7)] = inst_76218);

(statearr_76293[(8)] = inst_76217);

(statearr_76293[(12)] = inst_76239);

return statearr_76293;
})();
var statearr_76294_79792 = state_76259__$1;
(statearr_76294_79792[(2)] = null);

(statearr_76294_79792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76260 === (9))){
var inst_76217 = (state_76259[(8)]);
var inst_76235 = cljs.core.vec(inst_76217);
var state_76259__$1 = state_76259;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_76259__$1,(11),out,inst_76235);
} else {
if((state_val_76260 === (5))){
var inst_76227 = (state_76259[(10)]);
var inst_76218 = (state_76259[(7)]);
var inst_76222 = (state_76259[(9)]);
var inst_76227__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_76222) : f.call(null,inst_76222));
var inst_76228 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_76227__$1,inst_76218);
var inst_76229 = cljs.core.keyword_identical_QMARK_(inst_76218,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_76230 = ((inst_76228) || (inst_76229));
var state_76259__$1 = (function (){var statearr_76304 = state_76259;
(statearr_76304[(10)] = inst_76227__$1);

return statearr_76304;
})();
if(cljs.core.truth_(inst_76230)){
var statearr_76306_79810 = state_76259__$1;
(statearr_76306_79810[(1)] = (8));

} else {
var statearr_76307_79811 = state_76259__$1;
(statearr_76307_79811[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76260 === (14))){
var inst_76252 = (state_76259[(2)]);
var inst_76253 = cljs.core.async.close_BANG_(out);
var state_76259__$1 = (function (){var statearr_76310 = state_76259;
(statearr_76310[(13)] = inst_76252);

return statearr_76310;
})();
var statearr_76312_79817 = state_76259__$1;
(statearr_76312_79817[(2)] = inst_76253);

(statearr_76312_79817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76260 === (10))){
var inst_76242 = (state_76259[(2)]);
var state_76259__$1 = state_76259;
var statearr_76314_79825 = state_76259__$1;
(statearr_76314_79825[(2)] = inst_76242);

(statearr_76314_79825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76260 === (8))){
var inst_76227 = (state_76259[(10)]);
var inst_76222 = (state_76259[(9)]);
var inst_76217 = (state_76259[(8)]);
var inst_76232 = inst_76217.push(inst_76222);
var tmp76308 = inst_76217;
var inst_76217__$1 = tmp76308;
var inst_76218 = inst_76227;
var state_76259__$1 = (function (){var statearr_76322 = state_76259;
(statearr_76322[(14)] = inst_76232);

(statearr_76322[(7)] = inst_76218);

(statearr_76322[(8)] = inst_76217__$1);

return statearr_76322;
})();
var statearr_76323_79836 = state_76259__$1;
(statearr_76323_79836[(2)] = null);

(statearr_76323_79836[(1)] = (2));


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
var cljs$core$async$state_machine__73175__auto__ = null;
var cljs$core$async$state_machine__73175__auto____0 = (function (){
var statearr_76327 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_76327[(0)] = cljs$core$async$state_machine__73175__auto__);

(statearr_76327[(1)] = (1));

return statearr_76327;
});
var cljs$core$async$state_machine__73175__auto____1 = (function (state_76259){
while(true){
var ret_value__73176__auto__ = (function (){try{while(true){
var result__73177__auto__ = switch__73174__auto__(state_76259);
if(cljs.core.keyword_identical_QMARK_(result__73177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73177__auto__;
}
break;
}
}catch (e76335){var ex__73178__auto__ = e76335;
var statearr_76336_79847 = state_76259;
(statearr_76336_79847[(2)] = ex__73178__auto__);


if(cljs.core.seq((state_76259[(4)]))){
var statearr_76337_79852 = state_76259;
(statearr_76337_79852[(1)] = cljs.core.first((state_76259[(4)])));

} else {
throw ex__73178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79861 = state_76259;
state_76259 = G__79861;
continue;
} else {
return ret_value__73176__auto__;
}
break;
}
});
cljs$core$async$state_machine__73175__auto__ = function(state_76259){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__73175__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__73175__auto____1.call(this,state_76259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__73175__auto____0;
cljs$core$async$state_machine__73175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__73175__auto____1;
return cljs$core$async$state_machine__73175__auto__;
})()
})();
var state__73526__auto__ = (function (){var statearr_76346 = f__73525__auto__();
(statearr_76346[(6)] = c__73524__auto___79729);

return statearr_76346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__73526__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
