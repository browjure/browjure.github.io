goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__72892 = arguments.length;
switch (G__72892) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async72893 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async72893 = (function (f,blockable,meta72894){
this.f = f;
this.blockable = blockable;
this.meta72894 = meta72894;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async72893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72895,meta72894__$1){
var self__ = this;
var _72895__$1 = this;
return (new cljs.core.async.t_cljs$core$async72893(self__.f,self__.blockable,meta72894__$1));
}));

(cljs.core.async.t_cljs$core$async72893.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72895){
var self__ = this;
var _72895__$1 = this;
return self__.meta72894;
}));

(cljs.core.async.t_cljs$core$async72893.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72893.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async72893.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async72893.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async72893.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta72894","meta72894",772782455,null)], null);
}));

(cljs.core.async.t_cljs$core$async72893.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async72893.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async72893");

(cljs.core.async.t_cljs$core$async72893.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async72893");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async72893.
 */
cljs.core.async.__GT_t_cljs$core$async72893 = (function cljs$core$async$__GT_t_cljs$core$async72893(f__$1,blockable__$1,meta72894){
return (new cljs.core.async.t_cljs$core$async72893(f__$1,blockable__$1,meta72894));
});

}

return (new cljs.core.async.t_cljs$core$async72893(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__72942 = arguments.length;
switch (G__72942) {
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
var G__72972 = arguments.length;
switch (G__72972) {
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
var G__73000 = arguments.length;
switch (G__73000) {
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
var val_76067 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_76067) : fn1.call(null,val_76067));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_76067) : fn1.call(null,val_76067));
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
var G__73024 = arguments.length;
switch (G__73024) {
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
var n__4613__auto___76080 = n;
var x_76081 = (0);
while(true){
if((x_76081 < n__4613__auto___76080)){
(a[x_76081] = x_76081);

var G__76087 = (x_76081 + (1));
x_76081 = G__76087;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async73048 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async73048 = (function (flag,meta73049){
this.flag = flag;
this.meta73049 = meta73049;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async73048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_73050,meta73049__$1){
var self__ = this;
var _73050__$1 = this;
return (new cljs.core.async.t_cljs$core$async73048(self__.flag,meta73049__$1));
}));

(cljs.core.async.t_cljs$core$async73048.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_73050){
var self__ = this;
var _73050__$1 = this;
return self__.meta73049;
}));

(cljs.core.async.t_cljs$core$async73048.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73048.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async73048.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async73048.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async73048.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta73049","meta73049",-1620212879,null)], null);
}));

(cljs.core.async.t_cljs$core$async73048.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async73048.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async73048");

(cljs.core.async.t_cljs$core$async73048.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async73048");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async73048.
 */
cljs.core.async.__GT_t_cljs$core$async73048 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async73048(flag__$1,meta73049){
return (new cljs.core.async.t_cljs$core$async73048(flag__$1,meta73049));
});

}

return (new cljs.core.async.t_cljs$core$async73048(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async73079 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async73079 = (function (flag,cb,meta73080){
this.flag = flag;
this.cb = cb;
this.meta73080 = meta73080;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async73079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_73081,meta73080__$1){
var self__ = this;
var _73081__$1 = this;
return (new cljs.core.async.t_cljs$core$async73079(self__.flag,self__.cb,meta73080__$1));
}));

(cljs.core.async.t_cljs$core$async73079.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_73081){
var self__ = this;
var _73081__$1 = this;
return self__.meta73080;
}));

(cljs.core.async.t_cljs$core$async73079.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73079.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async73079.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async73079.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async73079.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta73080","meta73080",-1335043478,null)], null);
}));

(cljs.core.async.t_cljs$core$async73079.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async73079.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async73079");

(cljs.core.async.t_cljs$core$async73079.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async73079");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async73079.
 */
cljs.core.async.__GT_t_cljs$core$async73079 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async73079(flag__$1,cb__$1,meta73080){
return (new cljs.core.async.t_cljs$core$async73079(flag__$1,cb__$1,meta73080));
});

}

return (new cljs.core.async.t_cljs$core$async73079(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__73091_SHARP_){
var G__73097 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__73091_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__73097) : fret.call(null,G__73097));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__73092_SHARP_){
var G__73099 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__73092_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__73099) : fret.call(null,G__73099));
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
var G__76119 = (i + (1));
i = G__76119;
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
var len__4736__auto___76130 = arguments.length;
var i__4737__auto___76132 = (0);
while(true){
if((i__4737__auto___76132 < len__4736__auto___76130)){
args__4742__auto__.push((arguments[i__4737__auto___76132]));

var G__76134 = (i__4737__auto___76132 + (1));
i__4737__auto___76132 = G__76134;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__73105){
var map__73107 = p__73105;
var map__73107__$1 = (((((!((map__73107 == null))))?(((((map__73107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73107):map__73107);
var opts = map__73107__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq73103){
var G__73104 = cljs.core.first(seq73103);
var seq73103__$1 = cljs.core.next(seq73103);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73104,seq73103__$1);
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
var G__73129 = arguments.length;
switch (G__73129) {
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
var c__72804__auto___76146 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72805__auto__ = (function (){var switch__68517__auto__ = (function (state_73162){
var state_val_73163 = (state_73162[(1)]);
if((state_val_73163 === (7))){
var inst_73157 = (state_73162[(2)]);
var state_73162__$1 = state_73162;
var statearr_73168_76150 = state_73162__$1;
(statearr_73168_76150[(2)] = inst_73157);

(statearr_73168_76150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73163 === (1))){
var state_73162__$1 = state_73162;
var statearr_73170_76152 = state_73162__$1;
(statearr_73170_76152[(2)] = null);

(statearr_73170_76152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73163 === (4))){
var inst_73138 = (state_73162[(7)]);
var inst_73138__$1 = (state_73162[(2)]);
var inst_73141 = (inst_73138__$1 == null);
var state_73162__$1 = (function (){var statearr_73171 = state_73162;
(statearr_73171[(7)] = inst_73138__$1);

return statearr_73171;
})();
if(cljs.core.truth_(inst_73141)){
var statearr_73172_76157 = state_73162__$1;
(statearr_73172_76157[(1)] = (5));

} else {
var statearr_73173_76158 = state_73162__$1;
(statearr_73173_76158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73163 === (13))){
var state_73162__$1 = state_73162;
var statearr_73174_76160 = state_73162__$1;
(statearr_73174_76160[(2)] = null);

(statearr_73174_76160[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73163 === (6))){
var inst_73138 = (state_73162[(7)]);
var state_73162__$1 = state_73162;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73162__$1,(11),to,inst_73138);
} else {
if((state_val_73163 === (3))){
var inst_73159 = (state_73162[(2)]);
var state_73162__$1 = state_73162;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73162__$1,inst_73159);
} else {
if((state_val_73163 === (12))){
var state_73162__$1 = state_73162;
var statearr_73180_76162 = state_73162__$1;
(statearr_73180_76162[(2)] = null);

(statearr_73180_76162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73163 === (2))){
var state_73162__$1 = state_73162;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73162__$1,(4),from);
} else {
if((state_val_73163 === (11))){
var inst_73150 = (state_73162[(2)]);
var state_73162__$1 = state_73162;
if(cljs.core.truth_(inst_73150)){
var statearr_73183_76167 = state_73162__$1;
(statearr_73183_76167[(1)] = (12));

} else {
var statearr_73184_76169 = state_73162__$1;
(statearr_73184_76169[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73163 === (9))){
var state_73162__$1 = state_73162;
var statearr_73185_76170 = state_73162__$1;
(statearr_73185_76170[(2)] = null);

(statearr_73185_76170[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73163 === (5))){
var state_73162__$1 = state_73162;
if(cljs.core.truth_(close_QMARK_)){
var statearr_73187_76171 = state_73162__$1;
(statearr_73187_76171[(1)] = (8));

} else {
var statearr_73188_76173 = state_73162__$1;
(statearr_73188_76173[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73163 === (14))){
var inst_73155 = (state_73162[(2)]);
var state_73162__$1 = state_73162;
var statearr_73189_76174 = state_73162__$1;
(statearr_73189_76174[(2)] = inst_73155);

(statearr_73189_76174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73163 === (10))){
var inst_73147 = (state_73162[(2)]);
var state_73162__$1 = state_73162;
var statearr_73190_76178 = state_73162__$1;
(statearr_73190_76178[(2)] = inst_73147);

(statearr_73190_76178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73163 === (8))){
var inst_73144 = cljs.core.async.close_BANG_(to);
var state_73162__$1 = state_73162;
var statearr_73191_76185 = state_73162__$1;
(statearr_73191_76185[(2)] = inst_73144);

(statearr_73191_76185[(1)] = (10));


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
var cljs$core$async$state_machine__68518__auto__ = null;
var cljs$core$async$state_machine__68518__auto____0 = (function (){
var statearr_73195 = [null,null,null,null,null,null,null,null];
(statearr_73195[(0)] = cljs$core$async$state_machine__68518__auto__);

(statearr_73195[(1)] = (1));

return statearr_73195;
});
var cljs$core$async$state_machine__68518__auto____1 = (function (state_73162){
while(true){
var ret_value__68519__auto__ = (function (){try{while(true){
var result__68520__auto__ = switch__68517__auto__(state_73162);
if(cljs.core.keyword_identical_QMARK_(result__68520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68520__auto__;
}
break;
}
}catch (e73196){var ex__68521__auto__ = e73196;
var statearr_73197_76198 = state_73162;
(statearr_73197_76198[(2)] = ex__68521__auto__);


if(cljs.core.seq((state_73162[(4)]))){
var statearr_73199_76199 = state_73162;
(statearr_73199_76199[(1)] = cljs.core.first((state_73162[(4)])));

} else {
throw ex__68521__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__68519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76200 = state_73162;
state_73162 = G__76200;
continue;
} else {
return ret_value__68519__auto__;
}
break;
}
});
cljs$core$async$state_machine__68518__auto__ = function(state_73162){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68518__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68518__auto____1.call(this,state_73162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__68518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68518__auto____0;
cljs$core$async$state_machine__68518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68518__auto____1;
return cljs$core$async$state_machine__68518__auto__;
})()
})();
var state__72806__auto__ = (function (){var statearr_73203 = f__72805__auto__();
(statearr_73203[(6)] = c__72804__auto___76146);

return statearr_73203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72806__auto__);
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
var process = (function (p__73218){
var vec__73220 = p__73218;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73220,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73220,(1),null);
var job = vec__73220;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__72804__auto___76210 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72805__auto__ = (function (){var switch__68517__auto__ = (function (state_73231){
var state_val_73233 = (state_73231[(1)]);
if((state_val_73233 === (1))){
var state_73231__$1 = state_73231;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73231__$1,(2),res,v);
} else {
if((state_val_73233 === (2))){
var inst_73228 = (state_73231[(2)]);
var inst_73229 = cljs.core.async.close_BANG_(res);
var state_73231__$1 = (function (){var statearr_73241 = state_73231;
(statearr_73241[(7)] = inst_73228);

return statearr_73241;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_73231__$1,inst_73229);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__68518__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__68518__auto____0 = (function (){
var statearr_73242 = [null,null,null,null,null,null,null,null];
(statearr_73242[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__68518__auto__);

(statearr_73242[(1)] = (1));

return statearr_73242;
});
var cljs$core$async$pipeline_STAR__$_state_machine__68518__auto____1 = (function (state_73231){
while(true){
var ret_value__68519__auto__ = (function (){try{while(true){
var result__68520__auto__ = switch__68517__auto__(state_73231);
if(cljs.core.keyword_identical_QMARK_(result__68520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68520__auto__;
}
break;
}
}catch (e73243){var ex__68521__auto__ = e73243;
var statearr_73244_76218 = state_73231;
(statearr_73244_76218[(2)] = ex__68521__auto__);


if(cljs.core.seq((state_73231[(4)]))){
var statearr_73248_76219 = state_73231;
(statearr_73248_76219[(1)] = cljs.core.first((state_73231[(4)])));

} else {
throw ex__68521__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__68519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76221 = state_73231;
state_73231 = G__76221;
continue;
} else {
return ret_value__68519__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__68518__auto__ = function(state_73231){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__68518__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__68518__auto____1.call(this,state_73231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__68518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__68518__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__68518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__68518__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__68518__auto__;
})()
})();
var state__72806__auto__ = (function (){var statearr_73249 = f__72805__auto__();
(statearr_73249[(6)] = c__72804__auto___76210);

return statearr_73249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72806__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__73250){
var vec__73251 = p__73250;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73251,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73251,(1),null);
var job = vec__73251;
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
var n__4613__auto___76232 = n;
var __76233 = (0);
while(true){
if((__76233 < n__4613__auto___76232)){
var G__73256_76235 = type;
var G__73256_76236__$1 = (((G__73256_76235 instanceof cljs.core.Keyword))?G__73256_76235.fqn:null);
switch (G__73256_76236__$1) {
case "compute":
var c__72804__auto___76241 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__76233,c__72804__auto___76241,G__73256_76235,G__73256_76236__$1,n__4613__auto___76232,jobs,results,process,async){
return (function (){
var f__72805__auto__ = (function (){var switch__68517__auto__ = ((function (__76233,c__72804__auto___76241,G__73256_76235,G__73256_76236__$1,n__4613__auto___76232,jobs,results,process,async){
return (function (state_73272){
var state_val_73273 = (state_73272[(1)]);
if((state_val_73273 === (1))){
var state_73272__$1 = state_73272;
var statearr_73278_76246 = state_73272__$1;
(statearr_73278_76246[(2)] = null);

(statearr_73278_76246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73273 === (2))){
var state_73272__$1 = state_73272;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73272__$1,(4),jobs);
} else {
if((state_val_73273 === (3))){
var inst_73270 = (state_73272[(2)]);
var state_73272__$1 = state_73272;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73272__$1,inst_73270);
} else {
if((state_val_73273 === (4))){
var inst_73262 = (state_73272[(2)]);
var inst_73263 = process(inst_73262);
var state_73272__$1 = state_73272;
if(cljs.core.truth_(inst_73263)){
var statearr_73279_76252 = state_73272__$1;
(statearr_73279_76252[(1)] = (5));

} else {
var statearr_73280_76253 = state_73272__$1;
(statearr_73280_76253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73273 === (5))){
var state_73272__$1 = state_73272;
var statearr_73281_76255 = state_73272__$1;
(statearr_73281_76255[(2)] = null);

(statearr_73281_76255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73273 === (6))){
var state_73272__$1 = state_73272;
var statearr_73282_76260 = state_73272__$1;
(statearr_73282_76260[(2)] = null);

(statearr_73282_76260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73273 === (7))){
var inst_73268 = (state_73272[(2)]);
var state_73272__$1 = state_73272;
var statearr_73283_76263 = state_73272__$1;
(statearr_73283_76263[(2)] = inst_73268);

(statearr_73283_76263[(1)] = (3));


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
});})(__76233,c__72804__auto___76241,G__73256_76235,G__73256_76236__$1,n__4613__auto___76232,jobs,results,process,async))
;
return ((function (__76233,switch__68517__auto__,c__72804__auto___76241,G__73256_76235,G__73256_76236__$1,n__4613__auto___76232,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__68518__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__68518__auto____0 = (function (){
var statearr_73284 = [null,null,null,null,null,null,null];
(statearr_73284[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__68518__auto__);

(statearr_73284[(1)] = (1));

return statearr_73284;
});
var cljs$core$async$pipeline_STAR__$_state_machine__68518__auto____1 = (function (state_73272){
while(true){
var ret_value__68519__auto__ = (function (){try{while(true){
var result__68520__auto__ = switch__68517__auto__(state_73272);
if(cljs.core.keyword_identical_QMARK_(result__68520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68520__auto__;
}
break;
}
}catch (e73285){var ex__68521__auto__ = e73285;
var statearr_73286_76270 = state_73272;
(statearr_73286_76270[(2)] = ex__68521__auto__);


if(cljs.core.seq((state_73272[(4)]))){
var statearr_73287_76272 = state_73272;
(statearr_73287_76272[(1)] = cljs.core.first((state_73272[(4)])));

} else {
throw ex__68521__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__68519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76277 = state_73272;
state_73272 = G__76277;
continue;
} else {
return ret_value__68519__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__68518__auto__ = function(state_73272){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__68518__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__68518__auto____1.call(this,state_73272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__68518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__68518__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__68518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__68518__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__68518__auto__;
})()
;})(__76233,switch__68517__auto__,c__72804__auto___76241,G__73256_76235,G__73256_76236__$1,n__4613__auto___76232,jobs,results,process,async))
})();
var state__72806__auto__ = (function (){var statearr_73288 = f__72805__auto__();
(statearr_73288[(6)] = c__72804__auto___76241);

return statearr_73288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72806__auto__);
});})(__76233,c__72804__auto___76241,G__73256_76235,G__73256_76236__$1,n__4613__auto___76232,jobs,results,process,async))
);


break;
case "async":
var c__72804__auto___76280 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__76233,c__72804__auto___76280,G__73256_76235,G__73256_76236__$1,n__4613__auto___76232,jobs,results,process,async){
return (function (){
var f__72805__auto__ = (function (){var switch__68517__auto__ = ((function (__76233,c__72804__auto___76280,G__73256_76235,G__73256_76236__$1,n__4613__auto___76232,jobs,results,process,async){
return (function (state_73307){
var state_val_73308 = (state_73307[(1)]);
if((state_val_73308 === (1))){
var state_73307__$1 = state_73307;
var statearr_73309_76283 = state_73307__$1;
(statearr_73309_76283[(2)] = null);

(statearr_73309_76283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73308 === (2))){
var state_73307__$1 = state_73307;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73307__$1,(4),jobs);
} else {
if((state_val_73308 === (3))){
var inst_73305 = (state_73307[(2)]);
var state_73307__$1 = state_73307;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73307__$1,inst_73305);
} else {
if((state_val_73308 === (4))){
var inst_73296 = (state_73307[(2)]);
var inst_73298 = async(inst_73296);
var state_73307__$1 = state_73307;
if(cljs.core.truth_(inst_73298)){
var statearr_73310_76291 = state_73307__$1;
(statearr_73310_76291[(1)] = (5));

} else {
var statearr_73311_76294 = state_73307__$1;
(statearr_73311_76294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73308 === (5))){
var state_73307__$1 = state_73307;
var statearr_73312_76296 = state_73307__$1;
(statearr_73312_76296[(2)] = null);

(statearr_73312_76296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73308 === (6))){
var state_73307__$1 = state_73307;
var statearr_73313_76297 = state_73307__$1;
(statearr_73313_76297[(2)] = null);

(statearr_73313_76297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73308 === (7))){
var inst_73303 = (state_73307[(2)]);
var state_73307__$1 = state_73307;
var statearr_73314_76299 = state_73307__$1;
(statearr_73314_76299[(2)] = inst_73303);

(statearr_73314_76299[(1)] = (3));


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
});})(__76233,c__72804__auto___76280,G__73256_76235,G__73256_76236__$1,n__4613__auto___76232,jobs,results,process,async))
;
return ((function (__76233,switch__68517__auto__,c__72804__auto___76280,G__73256_76235,G__73256_76236__$1,n__4613__auto___76232,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__68518__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__68518__auto____0 = (function (){
var statearr_73318 = [null,null,null,null,null,null,null];
(statearr_73318[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__68518__auto__);

(statearr_73318[(1)] = (1));

return statearr_73318;
});
var cljs$core$async$pipeline_STAR__$_state_machine__68518__auto____1 = (function (state_73307){
while(true){
var ret_value__68519__auto__ = (function (){try{while(true){
var result__68520__auto__ = switch__68517__auto__(state_73307);
if(cljs.core.keyword_identical_QMARK_(result__68520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68520__auto__;
}
break;
}
}catch (e73319){var ex__68521__auto__ = e73319;
var statearr_73320_76305 = state_73307;
(statearr_73320_76305[(2)] = ex__68521__auto__);


if(cljs.core.seq((state_73307[(4)]))){
var statearr_73321_76306 = state_73307;
(statearr_73321_76306[(1)] = cljs.core.first((state_73307[(4)])));

} else {
throw ex__68521__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__68519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76307 = state_73307;
state_73307 = G__76307;
continue;
} else {
return ret_value__68519__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__68518__auto__ = function(state_73307){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__68518__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__68518__auto____1.call(this,state_73307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__68518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__68518__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__68518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__68518__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__68518__auto__;
})()
;})(__76233,switch__68517__auto__,c__72804__auto___76280,G__73256_76235,G__73256_76236__$1,n__4613__auto___76232,jobs,results,process,async))
})();
var state__72806__auto__ = (function (){var statearr_73323 = f__72805__auto__();
(statearr_73323[(6)] = c__72804__auto___76280);

return statearr_73323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72806__auto__);
});})(__76233,c__72804__auto___76280,G__73256_76235,G__73256_76236__$1,n__4613__auto___76232,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__73256_76236__$1)].join('')));

}

var G__76310 = (__76233 + (1));
__76233 = G__76310;
continue;
} else {
}
break;
}

var c__72804__auto___76312 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72805__auto__ = (function (){var switch__68517__auto__ = (function (state_73355){
var state_val_73356 = (state_73355[(1)]);
if((state_val_73356 === (7))){
var inst_73351 = (state_73355[(2)]);
var state_73355__$1 = state_73355;
var statearr_73358_76318 = state_73355__$1;
(statearr_73358_76318[(2)] = inst_73351);

(statearr_73358_76318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73356 === (1))){
var state_73355__$1 = state_73355;
var statearr_73360_76320 = state_73355__$1;
(statearr_73360_76320[(2)] = null);

(statearr_73360_76320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73356 === (4))){
var inst_73335 = (state_73355[(7)]);
var inst_73335__$1 = (state_73355[(2)]);
var inst_73337 = (inst_73335__$1 == null);
var state_73355__$1 = (function (){var statearr_73364 = state_73355;
(statearr_73364[(7)] = inst_73335__$1);

return statearr_73364;
})();
if(cljs.core.truth_(inst_73337)){
var statearr_73366_76322 = state_73355__$1;
(statearr_73366_76322[(1)] = (5));

} else {
var statearr_73369_76323 = state_73355__$1;
(statearr_73369_76323[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73356 === (6))){
var inst_73335 = (state_73355[(7)]);
var inst_73341 = (state_73355[(8)]);
var inst_73341__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_73342 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73343 = [inst_73335,inst_73341__$1];
var inst_73344 = (new cljs.core.PersistentVector(null,2,(5),inst_73342,inst_73343,null));
var state_73355__$1 = (function (){var statearr_73371 = state_73355;
(statearr_73371[(8)] = inst_73341__$1);

return statearr_73371;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73355__$1,(8),jobs,inst_73344);
} else {
if((state_val_73356 === (3))){
var inst_73353 = (state_73355[(2)]);
var state_73355__$1 = state_73355;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73355__$1,inst_73353);
} else {
if((state_val_73356 === (2))){
var state_73355__$1 = state_73355;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73355__$1,(4),from);
} else {
if((state_val_73356 === (9))){
var inst_73348 = (state_73355[(2)]);
var state_73355__$1 = (function (){var statearr_73377 = state_73355;
(statearr_73377[(9)] = inst_73348);

return statearr_73377;
})();
var statearr_73379_76332 = state_73355__$1;
(statearr_73379_76332[(2)] = null);

(statearr_73379_76332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73356 === (5))){
var inst_73339 = cljs.core.async.close_BANG_(jobs);
var state_73355__$1 = state_73355;
var statearr_73381_76334 = state_73355__$1;
(statearr_73381_76334[(2)] = inst_73339);

(statearr_73381_76334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73356 === (8))){
var inst_73341 = (state_73355[(8)]);
var inst_73346 = (state_73355[(2)]);
var state_73355__$1 = (function (){var statearr_73382 = state_73355;
(statearr_73382[(10)] = inst_73346);

return statearr_73382;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73355__$1,(9),results,inst_73341);
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
var cljs$core$async$pipeline_STAR__$_state_machine__68518__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__68518__auto____0 = (function (){
var statearr_73383 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_73383[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__68518__auto__);

(statearr_73383[(1)] = (1));

return statearr_73383;
});
var cljs$core$async$pipeline_STAR__$_state_machine__68518__auto____1 = (function (state_73355){
while(true){
var ret_value__68519__auto__ = (function (){try{while(true){
var result__68520__auto__ = switch__68517__auto__(state_73355);
if(cljs.core.keyword_identical_QMARK_(result__68520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68520__auto__;
}
break;
}
}catch (e73384){var ex__68521__auto__ = e73384;
var statearr_73385_76347 = state_73355;
(statearr_73385_76347[(2)] = ex__68521__auto__);


if(cljs.core.seq((state_73355[(4)]))){
var statearr_73386_76350 = state_73355;
(statearr_73386_76350[(1)] = cljs.core.first((state_73355[(4)])));

} else {
throw ex__68521__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__68519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76352 = state_73355;
state_73355 = G__76352;
continue;
} else {
return ret_value__68519__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__68518__auto__ = function(state_73355){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__68518__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__68518__auto____1.call(this,state_73355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__68518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__68518__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__68518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__68518__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__68518__auto__;
})()
})();
var state__72806__auto__ = (function (){var statearr_73389 = f__72805__auto__();
(statearr_73389[(6)] = c__72804__auto___76312);

return statearr_73389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72806__auto__);
}));


var c__72804__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72805__auto__ = (function (){var switch__68517__auto__ = (function (state_73439){
var state_val_73440 = (state_73439[(1)]);
if((state_val_73440 === (7))){
var inst_73434 = (state_73439[(2)]);
var state_73439__$1 = state_73439;
var statearr_73441_76358 = state_73439__$1;
(statearr_73441_76358[(2)] = inst_73434);

(statearr_73441_76358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73440 === (20))){
var state_73439__$1 = state_73439;
var statearr_73442_76362 = state_73439__$1;
(statearr_73442_76362[(2)] = null);

(statearr_73442_76362[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73440 === (1))){
var state_73439__$1 = state_73439;
var statearr_73443_76363 = state_73439__$1;
(statearr_73443_76363[(2)] = null);

(statearr_73443_76363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73440 === (4))){
var inst_73395 = (state_73439[(7)]);
var inst_73395__$1 = (state_73439[(2)]);
var inst_73396 = (inst_73395__$1 == null);
var state_73439__$1 = (function (){var statearr_73444 = state_73439;
(statearr_73444[(7)] = inst_73395__$1);

return statearr_73444;
})();
if(cljs.core.truth_(inst_73396)){
var statearr_73448_76368 = state_73439__$1;
(statearr_73448_76368[(1)] = (5));

} else {
var statearr_73452_76369 = state_73439__$1;
(statearr_73452_76369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73440 === (15))){
var inst_73412 = (state_73439[(8)]);
var state_73439__$1 = state_73439;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73439__$1,(18),to,inst_73412);
} else {
if((state_val_73440 === (21))){
var inst_73428 = (state_73439[(2)]);
var state_73439__$1 = state_73439;
var statearr_73456_76377 = state_73439__$1;
(statearr_73456_76377[(2)] = inst_73428);

(statearr_73456_76377[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73440 === (13))){
var inst_73431 = (state_73439[(2)]);
var state_73439__$1 = (function (){var statearr_73458 = state_73439;
(statearr_73458[(9)] = inst_73431);

return statearr_73458;
})();
var statearr_73460_76381 = state_73439__$1;
(statearr_73460_76381[(2)] = null);

(statearr_73460_76381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73440 === (6))){
var inst_73395 = (state_73439[(7)]);
var state_73439__$1 = state_73439;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73439__$1,(11),inst_73395);
} else {
if((state_val_73440 === (17))){
var inst_73423 = (state_73439[(2)]);
var state_73439__$1 = state_73439;
if(cljs.core.truth_(inst_73423)){
var statearr_73461_76383 = state_73439__$1;
(statearr_73461_76383[(1)] = (19));

} else {
var statearr_73462_76384 = state_73439__$1;
(statearr_73462_76384[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73440 === (3))){
var inst_73436 = (state_73439[(2)]);
var state_73439__$1 = state_73439;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73439__$1,inst_73436);
} else {
if((state_val_73440 === (12))){
var inst_73408 = (state_73439[(10)]);
var state_73439__$1 = state_73439;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73439__$1,(14),inst_73408);
} else {
if((state_val_73440 === (2))){
var state_73439__$1 = state_73439;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73439__$1,(4),results);
} else {
if((state_val_73440 === (19))){
var state_73439__$1 = state_73439;
var statearr_73464_76387 = state_73439__$1;
(statearr_73464_76387[(2)] = null);

(statearr_73464_76387[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73440 === (11))){
var inst_73408 = (state_73439[(2)]);
var state_73439__$1 = (function (){var statearr_73469 = state_73439;
(statearr_73469[(10)] = inst_73408);

return statearr_73469;
})();
var statearr_73470_76393 = state_73439__$1;
(statearr_73470_76393[(2)] = null);

(statearr_73470_76393[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73440 === (9))){
var state_73439__$1 = state_73439;
var statearr_73473_76396 = state_73439__$1;
(statearr_73473_76396[(2)] = null);

(statearr_73473_76396[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73440 === (5))){
var state_73439__$1 = state_73439;
if(cljs.core.truth_(close_QMARK_)){
var statearr_73476_76401 = state_73439__$1;
(statearr_73476_76401[(1)] = (8));

} else {
var statearr_73477_76402 = state_73439__$1;
(statearr_73477_76402[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73440 === (14))){
var inst_73412 = (state_73439[(8)]);
var inst_73412__$1 = (state_73439[(2)]);
var inst_73414 = (inst_73412__$1 == null);
var inst_73417 = cljs.core.not(inst_73414);
var state_73439__$1 = (function (){var statearr_73480 = state_73439;
(statearr_73480[(8)] = inst_73412__$1);

return statearr_73480;
})();
if(inst_73417){
var statearr_73481_76405 = state_73439__$1;
(statearr_73481_76405[(1)] = (15));

} else {
var statearr_73482_76406 = state_73439__$1;
(statearr_73482_76406[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73440 === (16))){
var state_73439__$1 = state_73439;
var statearr_73483_76407 = state_73439__$1;
(statearr_73483_76407[(2)] = false);

(statearr_73483_76407[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73440 === (10))){
var inst_73404 = (state_73439[(2)]);
var state_73439__$1 = state_73439;
var statearr_73485_76408 = state_73439__$1;
(statearr_73485_76408[(2)] = inst_73404);

(statearr_73485_76408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73440 === (18))){
var inst_73420 = (state_73439[(2)]);
var state_73439__$1 = state_73439;
var statearr_73488_76409 = state_73439__$1;
(statearr_73488_76409[(2)] = inst_73420);

(statearr_73488_76409[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73440 === (8))){
var inst_73400 = cljs.core.async.close_BANG_(to);
var state_73439__$1 = state_73439;
var statearr_73490_76411 = state_73439__$1;
(statearr_73490_76411[(2)] = inst_73400);

(statearr_73490_76411[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__68518__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__68518__auto____0 = (function (){
var statearr_73508 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_73508[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__68518__auto__);

(statearr_73508[(1)] = (1));

return statearr_73508;
});
var cljs$core$async$pipeline_STAR__$_state_machine__68518__auto____1 = (function (state_73439){
while(true){
var ret_value__68519__auto__ = (function (){try{while(true){
var result__68520__auto__ = switch__68517__auto__(state_73439);
if(cljs.core.keyword_identical_QMARK_(result__68520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68520__auto__;
}
break;
}
}catch (e73513){var ex__68521__auto__ = e73513;
var statearr_73514_76421 = state_73439;
(statearr_73514_76421[(2)] = ex__68521__auto__);


if(cljs.core.seq((state_73439[(4)]))){
var statearr_73515_76424 = state_73439;
(statearr_73515_76424[(1)] = cljs.core.first((state_73439[(4)])));

} else {
throw ex__68521__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__68519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76426 = state_73439;
state_73439 = G__76426;
continue;
} else {
return ret_value__68519__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__68518__auto__ = function(state_73439){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__68518__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__68518__auto____1.call(this,state_73439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__68518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__68518__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__68518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__68518__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__68518__auto__;
})()
})();
var state__72806__auto__ = (function (){var statearr_73518 = f__72805__auto__();
(statearr_73518[(6)] = c__72804__auto__);

return statearr_73518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72806__auto__);
}));

return c__72804__auto__;
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
var G__73523 = arguments.length;
switch (G__73523) {
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
var G__73555 = arguments.length;
switch (G__73555) {
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
var G__73586 = arguments.length;
switch (G__73586) {
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
var c__72804__auto___76466 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72805__auto__ = (function (){var switch__68517__auto__ = (function (state_73642){
var state_val_73643 = (state_73642[(1)]);
if((state_val_73643 === (7))){
var inst_73638 = (state_73642[(2)]);
var state_73642__$1 = state_73642;
var statearr_73644_76468 = state_73642__$1;
(statearr_73644_76468[(2)] = inst_73638);

(statearr_73644_76468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73643 === (1))){
var state_73642__$1 = state_73642;
var statearr_73647_76475 = state_73642__$1;
(statearr_73647_76475[(2)] = null);

(statearr_73647_76475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73643 === (4))){
var inst_73613 = (state_73642[(7)]);
var inst_73613__$1 = (state_73642[(2)]);
var inst_73617 = (inst_73613__$1 == null);
var state_73642__$1 = (function (){var statearr_73650 = state_73642;
(statearr_73650[(7)] = inst_73613__$1);

return statearr_73650;
})();
if(cljs.core.truth_(inst_73617)){
var statearr_73651_76483 = state_73642__$1;
(statearr_73651_76483[(1)] = (5));

} else {
var statearr_73662_76485 = state_73642__$1;
(statearr_73662_76485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73643 === (13))){
var state_73642__$1 = state_73642;
var statearr_73676_76488 = state_73642__$1;
(statearr_73676_76488[(2)] = null);

(statearr_73676_76488[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73643 === (6))){
var inst_73613 = (state_73642[(7)]);
var inst_73625 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_73613) : p.call(null,inst_73613));
var state_73642__$1 = state_73642;
if(cljs.core.truth_(inst_73625)){
var statearr_73678_76489 = state_73642__$1;
(statearr_73678_76489[(1)] = (9));

} else {
var statearr_73684_76490 = state_73642__$1;
(statearr_73684_76490[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73643 === (3))){
var inst_73640 = (state_73642[(2)]);
var state_73642__$1 = state_73642;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73642__$1,inst_73640);
} else {
if((state_val_73643 === (12))){
var state_73642__$1 = state_73642;
var statearr_73689_76493 = state_73642__$1;
(statearr_73689_76493[(2)] = null);

(statearr_73689_76493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73643 === (2))){
var state_73642__$1 = state_73642;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73642__$1,(4),ch);
} else {
if((state_val_73643 === (11))){
var inst_73613 = (state_73642[(7)]);
var inst_73629 = (state_73642[(2)]);
var state_73642__$1 = state_73642;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73642__$1,(8),inst_73629,inst_73613);
} else {
if((state_val_73643 === (9))){
var state_73642__$1 = state_73642;
var statearr_73692_76496 = state_73642__$1;
(statearr_73692_76496[(2)] = tc);

(statearr_73692_76496[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73643 === (5))){
var inst_73620 = cljs.core.async.close_BANG_(tc);
var inst_73622 = cljs.core.async.close_BANG_(fc);
var state_73642__$1 = (function (){var statearr_73699 = state_73642;
(statearr_73699[(8)] = inst_73620);

return statearr_73699;
})();
var statearr_73701_76500 = state_73642__$1;
(statearr_73701_76500[(2)] = inst_73622);

(statearr_73701_76500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73643 === (14))){
var inst_73636 = (state_73642[(2)]);
var state_73642__$1 = state_73642;
var statearr_73707_76504 = state_73642__$1;
(statearr_73707_76504[(2)] = inst_73636);

(statearr_73707_76504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73643 === (10))){
var state_73642__$1 = state_73642;
var statearr_73714_76508 = state_73642__$1;
(statearr_73714_76508[(2)] = fc);

(statearr_73714_76508[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73643 === (8))){
var inst_73631 = (state_73642[(2)]);
var state_73642__$1 = state_73642;
if(cljs.core.truth_(inst_73631)){
var statearr_73717_76509 = state_73642__$1;
(statearr_73717_76509[(1)] = (12));

} else {
var statearr_73723_76511 = state_73642__$1;
(statearr_73723_76511[(1)] = (13));

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
var cljs$core$async$state_machine__68518__auto__ = null;
var cljs$core$async$state_machine__68518__auto____0 = (function (){
var statearr_73730 = [null,null,null,null,null,null,null,null,null];
(statearr_73730[(0)] = cljs$core$async$state_machine__68518__auto__);

(statearr_73730[(1)] = (1));

return statearr_73730;
});
var cljs$core$async$state_machine__68518__auto____1 = (function (state_73642){
while(true){
var ret_value__68519__auto__ = (function (){try{while(true){
var result__68520__auto__ = switch__68517__auto__(state_73642);
if(cljs.core.keyword_identical_QMARK_(result__68520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68520__auto__;
}
break;
}
}catch (e73733){var ex__68521__auto__ = e73733;
var statearr_73735_76518 = state_73642;
(statearr_73735_76518[(2)] = ex__68521__auto__);


if(cljs.core.seq((state_73642[(4)]))){
var statearr_73739_76519 = state_73642;
(statearr_73739_76519[(1)] = cljs.core.first((state_73642[(4)])));

} else {
throw ex__68521__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__68519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76525 = state_73642;
state_73642 = G__76525;
continue;
} else {
return ret_value__68519__auto__;
}
break;
}
});
cljs$core$async$state_machine__68518__auto__ = function(state_73642){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68518__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68518__auto____1.call(this,state_73642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__68518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68518__auto____0;
cljs$core$async$state_machine__68518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68518__auto____1;
return cljs$core$async$state_machine__68518__auto__;
})()
})();
var state__72806__auto__ = (function (){var statearr_73747 = f__72805__auto__();
(statearr_73747[(6)] = c__72804__auto___76466);

return statearr_73747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72806__auto__);
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
var c__72804__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72805__auto__ = (function (){var switch__68517__auto__ = (function (state_73804){
var state_val_73805 = (state_73804[(1)]);
if((state_val_73805 === (7))){
var inst_73796 = (state_73804[(2)]);
var state_73804__$1 = state_73804;
var statearr_73821_76529 = state_73804__$1;
(statearr_73821_76529[(2)] = inst_73796);

(statearr_73821_76529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73805 === (1))){
var inst_73768 = init;
var inst_73769 = inst_73768;
var state_73804__$1 = (function (){var statearr_73824 = state_73804;
(statearr_73824[(7)] = inst_73769);

return statearr_73824;
})();
var statearr_73827_76532 = state_73804__$1;
(statearr_73827_76532[(2)] = null);

(statearr_73827_76532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73805 === (4))){
var inst_73776 = (state_73804[(8)]);
var inst_73776__$1 = (state_73804[(2)]);
var inst_73778 = (inst_73776__$1 == null);
var state_73804__$1 = (function (){var statearr_73833 = state_73804;
(statearr_73833[(8)] = inst_73776__$1);

return statearr_73833;
})();
if(cljs.core.truth_(inst_73778)){
var statearr_73836_76534 = state_73804__$1;
(statearr_73836_76534[(1)] = (5));

} else {
var statearr_73841_76537 = state_73804__$1;
(statearr_73841_76537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73805 === (6))){
var inst_73776 = (state_73804[(8)]);
var inst_73782 = (state_73804[(9)]);
var inst_73769 = (state_73804[(7)]);
var inst_73782__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_73769,inst_73776) : f.call(null,inst_73769,inst_73776));
var inst_73784 = cljs.core.reduced_QMARK_(inst_73782__$1);
var state_73804__$1 = (function (){var statearr_73847 = state_73804;
(statearr_73847[(9)] = inst_73782__$1);

return statearr_73847;
})();
if(inst_73784){
var statearr_73849_76539 = state_73804__$1;
(statearr_73849_76539[(1)] = (8));

} else {
var statearr_73851_76540 = state_73804__$1;
(statearr_73851_76540[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73805 === (3))){
var inst_73799 = (state_73804[(2)]);
var state_73804__$1 = state_73804;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73804__$1,inst_73799);
} else {
if((state_val_73805 === (2))){
var state_73804__$1 = state_73804;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73804__$1,(4),ch);
} else {
if((state_val_73805 === (9))){
var inst_73782 = (state_73804[(9)]);
var inst_73769 = inst_73782;
var state_73804__$1 = (function (){var statearr_73869 = state_73804;
(statearr_73869[(7)] = inst_73769);

return statearr_73869;
})();
var statearr_73871_76551 = state_73804__$1;
(statearr_73871_76551[(2)] = null);

(statearr_73871_76551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73805 === (5))){
var inst_73769 = (state_73804[(7)]);
var state_73804__$1 = state_73804;
var statearr_73878_76552 = state_73804__$1;
(statearr_73878_76552[(2)] = inst_73769);

(statearr_73878_76552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73805 === (10))){
var inst_73794 = (state_73804[(2)]);
var state_73804__$1 = state_73804;
var statearr_73879_76554 = state_73804__$1;
(statearr_73879_76554[(2)] = inst_73794);

(statearr_73879_76554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73805 === (8))){
var inst_73782 = (state_73804[(9)]);
var inst_73790 = cljs.core.deref(inst_73782);
var state_73804__$1 = state_73804;
var statearr_73880_76556 = state_73804__$1;
(statearr_73880_76556[(2)] = inst_73790);

(statearr_73880_76556[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__68518__auto__ = null;
var cljs$core$async$reduce_$_state_machine__68518__auto____0 = (function (){
var statearr_73881 = [null,null,null,null,null,null,null,null,null,null];
(statearr_73881[(0)] = cljs$core$async$reduce_$_state_machine__68518__auto__);

(statearr_73881[(1)] = (1));

return statearr_73881;
});
var cljs$core$async$reduce_$_state_machine__68518__auto____1 = (function (state_73804){
while(true){
var ret_value__68519__auto__ = (function (){try{while(true){
var result__68520__auto__ = switch__68517__auto__(state_73804);
if(cljs.core.keyword_identical_QMARK_(result__68520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68520__auto__;
}
break;
}
}catch (e73882){var ex__68521__auto__ = e73882;
var statearr_73883_76563 = state_73804;
(statearr_73883_76563[(2)] = ex__68521__auto__);


if(cljs.core.seq((state_73804[(4)]))){
var statearr_73884_76567 = state_73804;
(statearr_73884_76567[(1)] = cljs.core.first((state_73804[(4)])));

} else {
throw ex__68521__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__68519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76570 = state_73804;
state_73804 = G__76570;
continue;
} else {
return ret_value__68519__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__68518__auto__ = function(state_73804){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__68518__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__68518__auto____1.call(this,state_73804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__68518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__68518__auto____0;
cljs$core$async$reduce_$_state_machine__68518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__68518__auto____1;
return cljs$core$async$reduce_$_state_machine__68518__auto__;
})()
})();
var state__72806__auto__ = (function (){var statearr_73890 = f__72805__auto__();
(statearr_73890[(6)] = c__72804__auto__);

return statearr_73890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72806__auto__);
}));

return c__72804__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__72804__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72805__auto__ = (function (){var switch__68517__auto__ = (function (state_73909){
var state_val_73910 = (state_73909[(1)]);
if((state_val_73910 === (1))){
var inst_73901 = cljs.core.async.reduce(f__$1,init,ch);
var state_73909__$1 = state_73909;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73909__$1,(2),inst_73901);
} else {
if((state_val_73910 === (2))){
var inst_73903 = (state_73909[(2)]);
var inst_73904 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_73903) : f__$1.call(null,inst_73903));
var state_73909__$1 = state_73909;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73909__$1,inst_73904);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__68518__auto__ = null;
var cljs$core$async$transduce_$_state_machine__68518__auto____0 = (function (){
var statearr_73920 = [null,null,null,null,null,null,null];
(statearr_73920[(0)] = cljs$core$async$transduce_$_state_machine__68518__auto__);

(statearr_73920[(1)] = (1));

return statearr_73920;
});
var cljs$core$async$transduce_$_state_machine__68518__auto____1 = (function (state_73909){
while(true){
var ret_value__68519__auto__ = (function (){try{while(true){
var result__68520__auto__ = switch__68517__auto__(state_73909);
if(cljs.core.keyword_identical_QMARK_(result__68520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68520__auto__;
}
break;
}
}catch (e73926){var ex__68521__auto__ = e73926;
var statearr_73927_76580 = state_73909;
(statearr_73927_76580[(2)] = ex__68521__auto__);


if(cljs.core.seq((state_73909[(4)]))){
var statearr_73929_76584 = state_73909;
(statearr_73929_76584[(1)] = cljs.core.first((state_73909[(4)])));

} else {
throw ex__68521__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__68519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76585 = state_73909;
state_73909 = G__76585;
continue;
} else {
return ret_value__68519__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__68518__auto__ = function(state_73909){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__68518__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__68518__auto____1.call(this,state_73909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__68518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__68518__auto____0;
cljs$core$async$transduce_$_state_machine__68518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__68518__auto____1;
return cljs$core$async$transduce_$_state_machine__68518__auto__;
})()
})();
var state__72806__auto__ = (function (){var statearr_73938 = f__72805__auto__();
(statearr_73938[(6)] = c__72804__auto__);

return statearr_73938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72806__auto__);
}));

return c__72804__auto__;
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
var G__73944 = arguments.length;
switch (G__73944) {
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
var c__72804__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72805__auto__ = (function (){var switch__68517__auto__ = (function (state_73988){
var state_val_73989 = (state_73988[(1)]);
if((state_val_73989 === (7))){
var inst_73966 = (state_73988[(2)]);
var state_73988__$1 = state_73988;
var statearr_73995_76597 = state_73988__$1;
(statearr_73995_76597[(2)] = inst_73966);

(statearr_73995_76597[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73989 === (1))){
var inst_73953 = cljs.core.seq(coll);
var inst_73955 = inst_73953;
var state_73988__$1 = (function (){var statearr_73999 = state_73988;
(statearr_73999[(7)] = inst_73955);

return statearr_73999;
})();
var statearr_74000_76598 = state_73988__$1;
(statearr_74000_76598[(2)] = null);

(statearr_74000_76598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73989 === (4))){
var inst_73955 = (state_73988[(7)]);
var inst_73964 = cljs.core.first(inst_73955);
var state_73988__$1 = state_73988;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73988__$1,(7),ch,inst_73964);
} else {
if((state_val_73989 === (13))){
var inst_73980 = (state_73988[(2)]);
var state_73988__$1 = state_73988;
var statearr_74003_76607 = state_73988__$1;
(statearr_74003_76607[(2)] = inst_73980);

(statearr_74003_76607[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73989 === (6))){
var inst_73969 = (state_73988[(2)]);
var state_73988__$1 = state_73988;
if(cljs.core.truth_(inst_73969)){
var statearr_74004_76615 = state_73988__$1;
(statearr_74004_76615[(1)] = (8));

} else {
var statearr_74007_76618 = state_73988__$1;
(statearr_74007_76618[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73989 === (3))){
var inst_73985 = (state_73988[(2)]);
var state_73988__$1 = state_73988;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73988__$1,inst_73985);
} else {
if((state_val_73989 === (12))){
var state_73988__$1 = state_73988;
var statearr_74018_76621 = state_73988__$1;
(statearr_74018_76621[(2)] = null);

(statearr_74018_76621[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73989 === (2))){
var inst_73955 = (state_73988[(7)]);
var state_73988__$1 = state_73988;
if(cljs.core.truth_(inst_73955)){
var statearr_74030_76626 = state_73988__$1;
(statearr_74030_76626[(1)] = (4));

} else {
var statearr_74031_76627 = state_73988__$1;
(statearr_74031_76627[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73989 === (11))){
var inst_73977 = cljs.core.async.close_BANG_(ch);
var state_73988__$1 = state_73988;
var statearr_74032_76628 = state_73988__$1;
(statearr_74032_76628[(2)] = inst_73977);

(statearr_74032_76628[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73989 === (9))){
var state_73988__$1 = state_73988;
if(cljs.core.truth_(close_QMARK_)){
var statearr_74037_76629 = state_73988__$1;
(statearr_74037_76629[(1)] = (11));

} else {
var statearr_74038_76632 = state_73988__$1;
(statearr_74038_76632[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73989 === (5))){
var inst_73955 = (state_73988[(7)]);
var state_73988__$1 = state_73988;
var statearr_74041_76636 = state_73988__$1;
(statearr_74041_76636[(2)] = inst_73955);

(statearr_74041_76636[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73989 === (10))){
var inst_73983 = (state_73988[(2)]);
var state_73988__$1 = state_73988;
var statearr_74042_76646 = state_73988__$1;
(statearr_74042_76646[(2)] = inst_73983);

(statearr_74042_76646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73989 === (8))){
var inst_73955 = (state_73988[(7)]);
var inst_73971 = cljs.core.next(inst_73955);
var inst_73955__$1 = inst_73971;
var state_73988__$1 = (function (){var statearr_74044 = state_73988;
(statearr_74044[(7)] = inst_73955__$1);

return statearr_74044;
})();
var statearr_74047_76652 = state_73988__$1;
(statearr_74047_76652[(2)] = null);

(statearr_74047_76652[(1)] = (2));


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
var cljs$core$async$state_machine__68518__auto__ = null;
var cljs$core$async$state_machine__68518__auto____0 = (function (){
var statearr_74055 = [null,null,null,null,null,null,null,null];
(statearr_74055[(0)] = cljs$core$async$state_machine__68518__auto__);

(statearr_74055[(1)] = (1));

return statearr_74055;
});
var cljs$core$async$state_machine__68518__auto____1 = (function (state_73988){
while(true){
var ret_value__68519__auto__ = (function (){try{while(true){
var result__68520__auto__ = switch__68517__auto__(state_73988);
if(cljs.core.keyword_identical_QMARK_(result__68520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68520__auto__;
}
break;
}
}catch (e74060){var ex__68521__auto__ = e74060;
var statearr_74061_76656 = state_73988;
(statearr_74061_76656[(2)] = ex__68521__auto__);


if(cljs.core.seq((state_73988[(4)]))){
var statearr_74066_76661 = state_73988;
(statearr_74066_76661[(1)] = cljs.core.first((state_73988[(4)])));

} else {
throw ex__68521__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__68519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76666 = state_73988;
state_73988 = G__76666;
continue;
} else {
return ret_value__68519__auto__;
}
break;
}
});
cljs$core$async$state_machine__68518__auto__ = function(state_73988){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68518__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68518__auto____1.call(this,state_73988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__68518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68518__auto____0;
cljs$core$async$state_machine__68518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68518__auto____1;
return cljs$core$async$state_machine__68518__auto__;
})()
})();
var state__72806__auto__ = (function (){var statearr_74076 = f__72805__auto__();
(statearr_74076[(6)] = c__72804__auto__);

return statearr_74076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72806__auto__);
}));

return c__72804__auto__;
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
var G__74101 = arguments.length;
switch (G__74101) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_76685 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_76685(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_76696 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_76696(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_76702 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_76702(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_76713 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_76713(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async74183 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async74183 = (function (ch,cs,meta74184){
this.ch = ch;
this.cs = cs;
this.meta74184 = meta74184;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async74183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74185,meta74184__$1){
var self__ = this;
var _74185__$1 = this;
return (new cljs.core.async.t_cljs$core$async74183(self__.ch,self__.cs,meta74184__$1));
}));

(cljs.core.async.t_cljs$core$async74183.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74185){
var self__ = this;
var _74185__$1 = this;
return self__.meta74184;
}));

(cljs.core.async.t_cljs$core$async74183.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74183.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async74183.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74183.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async74183.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async74183.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async74183.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta74184","meta74184",1940053080,null)], null);
}));

(cljs.core.async.t_cljs$core$async74183.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async74183.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async74183");

(cljs.core.async.t_cljs$core$async74183.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async74183");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async74183.
 */
cljs.core.async.__GT_t_cljs$core$async74183 = (function cljs$core$async$mult_$___GT_t_cljs$core$async74183(ch__$1,cs__$1,meta74184){
return (new cljs.core.async.t_cljs$core$async74183(ch__$1,cs__$1,meta74184));
});

}

return (new cljs.core.async.t_cljs$core$async74183(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__72804__auto___76750 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72805__auto__ = (function (){var switch__68517__auto__ = (function (state_74383){
var state_val_74384 = (state_74383[(1)]);
if((state_val_74384 === (7))){
var inst_74373 = (state_74383[(2)]);
var state_74383__$1 = state_74383;
var statearr_74392_76757 = state_74383__$1;
(statearr_74392_76757[(2)] = inst_74373);

(statearr_74392_76757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74384 === (20))){
var inst_74245 = (state_74383[(7)]);
var inst_74264 = cljs.core.first(inst_74245);
var inst_74265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74264,(0),null);
var inst_74266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74264,(1),null);
var state_74383__$1 = (function (){var statearr_74395 = state_74383;
(statearr_74395[(8)] = inst_74265);

return statearr_74395;
})();
if(cljs.core.truth_(inst_74266)){
var statearr_74396_76765 = state_74383__$1;
(statearr_74396_76765[(1)] = (22));

} else {
var statearr_74397_76766 = state_74383__$1;
(statearr_74397_76766[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74384 === (27))){
var inst_74308 = (state_74383[(9)]);
var inst_74298 = (state_74383[(10)]);
var inst_74296 = (state_74383[(11)]);
var inst_74210 = (state_74383[(12)]);
var inst_74308__$1 = cljs.core._nth(inst_74296,inst_74298);
var inst_74309 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_74308__$1,inst_74210,done);
var state_74383__$1 = (function (){var statearr_74398 = state_74383;
(statearr_74398[(9)] = inst_74308__$1);

return statearr_74398;
})();
if(cljs.core.truth_(inst_74309)){
var statearr_74400_76769 = state_74383__$1;
(statearr_74400_76769[(1)] = (30));

} else {
var statearr_74401_76770 = state_74383__$1;
(statearr_74401_76770[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74384 === (1))){
var state_74383__$1 = state_74383;
var statearr_74402_76773 = state_74383__$1;
(statearr_74402_76773[(2)] = null);

(statearr_74402_76773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74384 === (24))){
var inst_74245 = (state_74383[(7)]);
var inst_74272 = (state_74383[(2)]);
var inst_74273 = cljs.core.next(inst_74245);
var inst_74221 = inst_74273;
var inst_74222 = null;
var inst_74223 = (0);
var inst_74224 = (0);
var state_74383__$1 = (function (){var statearr_74405 = state_74383;
(statearr_74405[(13)] = inst_74272);

(statearr_74405[(14)] = inst_74224);

(statearr_74405[(15)] = inst_74221);

(statearr_74405[(16)] = inst_74223);

(statearr_74405[(17)] = inst_74222);

return statearr_74405;
})();
var statearr_74407_76787 = state_74383__$1;
(statearr_74407_76787[(2)] = null);

(statearr_74407_76787[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74384 === (39))){
var state_74383__$1 = state_74383;
var statearr_74413_76789 = state_74383__$1;
(statearr_74413_76789[(2)] = null);

(statearr_74413_76789[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74384 === (4))){
var inst_74210 = (state_74383[(12)]);
var inst_74210__$1 = (state_74383[(2)]);
var inst_74211 = (inst_74210__$1 == null);
var state_74383__$1 = (function (){var statearr_74415 = state_74383;
(statearr_74415[(12)] = inst_74210__$1);

return statearr_74415;
})();
if(cljs.core.truth_(inst_74211)){
var statearr_74416_76797 = state_74383__$1;
(statearr_74416_76797[(1)] = (5));

} else {
var statearr_74418_76798 = state_74383__$1;
(statearr_74418_76798[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74384 === (15))){
var inst_74224 = (state_74383[(14)]);
var inst_74221 = (state_74383[(15)]);
var inst_74223 = (state_74383[(16)]);
var inst_74222 = (state_74383[(17)]);
var inst_74240 = (state_74383[(2)]);
var inst_74242 = (inst_74224 + (1));
var tmp74409 = inst_74221;
var tmp74410 = inst_74223;
var tmp74411 = inst_74222;
var inst_74221__$1 = tmp74409;
var inst_74222__$1 = tmp74411;
var inst_74223__$1 = tmp74410;
var inst_74224__$1 = inst_74242;
var state_74383__$1 = (function (){var statearr_74419 = state_74383;
(statearr_74419[(18)] = inst_74240);

(statearr_74419[(14)] = inst_74224__$1);

(statearr_74419[(15)] = inst_74221__$1);

(statearr_74419[(16)] = inst_74223__$1);

(statearr_74419[(17)] = inst_74222__$1);

return statearr_74419;
})();
var statearr_74421_76806 = state_74383__$1;
(statearr_74421_76806[(2)] = null);

(statearr_74421_76806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74384 === (21))){
var inst_74276 = (state_74383[(2)]);
var state_74383__$1 = state_74383;
var statearr_74425_76815 = state_74383__$1;
(statearr_74425_76815[(2)] = inst_74276);

(statearr_74425_76815[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74384 === (31))){
var inst_74308 = (state_74383[(9)]);
var inst_74312 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_74308);
var state_74383__$1 = state_74383;
var statearr_74426_76818 = state_74383__$1;
(statearr_74426_76818[(2)] = inst_74312);

(statearr_74426_76818[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74384 === (32))){
var inst_74297 = (state_74383[(19)]);
var inst_74298 = (state_74383[(10)]);
var inst_74296 = (state_74383[(11)]);
var inst_74295 = (state_74383[(20)]);
var inst_74314 = (state_74383[(2)]);
var inst_74316 = (inst_74298 + (1));
var tmp74422 = inst_74297;
var tmp74423 = inst_74296;
var tmp74424 = inst_74295;
var inst_74295__$1 = tmp74424;
var inst_74296__$1 = tmp74423;
var inst_74297__$1 = tmp74422;
var inst_74298__$1 = inst_74316;
var state_74383__$1 = (function (){var statearr_74432 = state_74383;
(statearr_74432[(19)] = inst_74297__$1);

(statearr_74432[(21)] = inst_74314);

(statearr_74432[(10)] = inst_74298__$1);

(statearr_74432[(11)] = inst_74296__$1);

(statearr_74432[(20)] = inst_74295__$1);

return statearr_74432;
})();
var statearr_74435_76831 = state_74383__$1;
(statearr_74435_76831[(2)] = null);

(statearr_74435_76831[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74384 === (40))){
var inst_74333 = (state_74383[(22)]);
var inst_74338 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_74333);
var state_74383__$1 = state_74383;
var statearr_74437_76833 = state_74383__$1;
(statearr_74437_76833[(2)] = inst_74338);

(statearr_74437_76833[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74384 === (33))){
var inst_74322 = (state_74383[(23)]);
var inst_74326 = cljs.core.chunked_seq_QMARK_(inst_74322);
var state_74383__$1 = state_74383;
if(inst_74326){
var statearr_74441_76834 = state_74383__$1;
(statearr_74441_76834[(1)] = (36));

} else {
var statearr_74442_76837 = state_74383__$1;
(statearr_74442_76837[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74384 === (13))){
var inst_74234 = (state_74383[(24)]);
var inst_74237 = cljs.core.async.close_BANG_(inst_74234);
var state_74383__$1 = state_74383;
var statearr_74443_76845 = state_74383__$1;
(statearr_74443_76845[(2)] = inst_74237);

(statearr_74443_76845[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74384 === (22))){
var inst_74265 = (state_74383[(8)]);
var inst_74269 = cljs.core.async.close_BANG_(inst_74265);
var state_74383__$1 = state_74383;
var statearr_74448_76852 = state_74383__$1;
(statearr_74448_76852[(2)] = inst_74269);

(statearr_74448_76852[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74384 === (36))){
var inst_74322 = (state_74383[(23)]);
var inst_74328 = cljs.core.chunk_first(inst_74322);
var inst_74329 = cljs.core.chunk_rest(inst_74322);
var inst_74330 = cljs.core.count(inst_74328);
var inst_74295 = inst_74329;
var inst_74296 = inst_74328;
var inst_74297 = inst_74330;
var inst_74298 = (0);
var state_74383__$1 = (function (){var statearr_74452 = state_74383;
(statearr_74452[(19)] = inst_74297);

(statearr_74452[(10)] = inst_74298);

(statearr_74452[(11)] = inst_74296);

(statearr_74452[(20)] = inst_74295);

return statearr_74452;
})();
var statearr_74456_76862 = state_74383__$1;
(statearr_74456_76862[(2)] = null);

(statearr_74456_76862[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74384 === (41))){
var inst_74322 = (state_74383[(23)]);
var inst_74340 = (state_74383[(2)]);
var inst_74342 = cljs.core.next(inst_74322);
var inst_74295 = inst_74342;
var inst_74296 = null;
var inst_74297 = (0);
var inst_74298 = (0);
var state_74383__$1 = (function (){var statearr_74457 = state_74383;
(statearr_74457[(19)] = inst_74297);

(statearr_74457[(25)] = inst_74340);

(statearr_74457[(10)] = inst_74298);

(statearr_74457[(11)] = inst_74296);

(statearr_74457[(20)] = inst_74295);

return statearr_74457;
})();
var statearr_74460_76865 = state_74383__$1;
(statearr_74460_76865[(2)] = null);

(statearr_74460_76865[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74384 === (43))){
var state_74383__$1 = state_74383;
var statearr_74462_76868 = state_74383__$1;
(statearr_74462_76868[(2)] = null);

(statearr_74462_76868[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74384 === (29))){
var inst_74354 = (state_74383[(2)]);
var state_74383__$1 = state_74383;
var statearr_74464_76877 = state_74383__$1;
(statearr_74464_76877[(2)] = inst_74354);

(statearr_74464_76877[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74384 === (44))){
var inst_74369 = (state_74383[(2)]);
var state_74383__$1 = (function (){var statearr_74468 = state_74383;
(statearr_74468[(26)] = inst_74369);

return statearr_74468;
})();
var statearr_74471_76881 = state_74383__$1;
(statearr_74471_76881[(2)] = null);

(statearr_74471_76881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74384 === (6))){
var inst_74287 = (state_74383[(27)]);
var inst_74286 = cljs.core.deref(cs);
var inst_74287__$1 = cljs.core.keys(inst_74286);
var inst_74288 = cljs.core.count(inst_74287__$1);
var inst_74289 = cljs.core.reset_BANG_(dctr,inst_74288);
var inst_74294 = cljs.core.seq(inst_74287__$1);
var inst_74295 = inst_74294;
var inst_74296 = null;
var inst_74297 = (0);
var inst_74298 = (0);
var state_74383__$1 = (function (){var statearr_74472 = state_74383;
(statearr_74472[(19)] = inst_74297);

(statearr_74472[(10)] = inst_74298);

(statearr_74472[(11)] = inst_74296);

(statearr_74472[(28)] = inst_74289);

(statearr_74472[(27)] = inst_74287__$1);

(statearr_74472[(20)] = inst_74295);

return statearr_74472;
})();
var statearr_74475_76891 = state_74383__$1;
(statearr_74475_76891[(2)] = null);

(statearr_74475_76891[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74384 === (28))){
var inst_74295 = (state_74383[(20)]);
var inst_74322 = (state_74383[(23)]);
var inst_74322__$1 = cljs.core.seq(inst_74295);
var state_74383__$1 = (function (){var statearr_74478 = state_74383;
(statearr_74478[(23)] = inst_74322__$1);

return statearr_74478;
})();
if(inst_74322__$1){
var statearr_74480_76898 = state_74383__$1;
(statearr_74480_76898[(1)] = (33));

} else {
var statearr_74481_76899 = state_74383__$1;
(statearr_74481_76899[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74384 === (25))){
var inst_74297 = (state_74383[(19)]);
var inst_74298 = (state_74383[(10)]);
var inst_74302 = (inst_74298 < inst_74297);
var inst_74303 = inst_74302;
var state_74383__$1 = state_74383;
if(cljs.core.truth_(inst_74303)){
var statearr_74485_76906 = state_74383__$1;
(statearr_74485_76906[(1)] = (27));

} else {
var statearr_74487_76908 = state_74383__$1;
(statearr_74487_76908[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74384 === (34))){
var state_74383__$1 = state_74383;
var statearr_74489_76909 = state_74383__$1;
(statearr_74489_76909[(2)] = null);

(statearr_74489_76909[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74384 === (17))){
var state_74383__$1 = state_74383;
var statearr_74490_76912 = state_74383__$1;
(statearr_74490_76912[(2)] = null);

(statearr_74490_76912[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74384 === (3))){
var inst_74375 = (state_74383[(2)]);
var state_74383__$1 = state_74383;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74383__$1,inst_74375);
} else {
if((state_val_74384 === (12))){
var inst_74281 = (state_74383[(2)]);
var state_74383__$1 = state_74383;
var statearr_74494_76919 = state_74383__$1;
(statearr_74494_76919[(2)] = inst_74281);

(statearr_74494_76919[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74384 === (2))){
var state_74383__$1 = state_74383;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74383__$1,(4),ch);
} else {
if((state_val_74384 === (23))){
var state_74383__$1 = state_74383;
var statearr_74501_76920 = state_74383__$1;
(statearr_74501_76920[(2)] = null);

(statearr_74501_76920[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74384 === (35))){
var inst_74352 = (state_74383[(2)]);
var state_74383__$1 = state_74383;
var statearr_74502_76923 = state_74383__$1;
(statearr_74502_76923[(2)] = inst_74352);

(statearr_74502_76923[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74384 === (19))){
var inst_74245 = (state_74383[(7)]);
var inst_74256 = cljs.core.chunk_first(inst_74245);
var inst_74257 = cljs.core.chunk_rest(inst_74245);
var inst_74258 = cljs.core.count(inst_74256);
var inst_74221 = inst_74257;
var inst_74222 = inst_74256;
var inst_74223 = inst_74258;
var inst_74224 = (0);
var state_74383__$1 = (function (){var statearr_74506 = state_74383;
(statearr_74506[(14)] = inst_74224);

(statearr_74506[(15)] = inst_74221);

(statearr_74506[(16)] = inst_74223);

(statearr_74506[(17)] = inst_74222);

return statearr_74506;
})();
var statearr_74507_76927 = state_74383__$1;
(statearr_74507_76927[(2)] = null);

(statearr_74507_76927[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74384 === (11))){
var inst_74245 = (state_74383[(7)]);
var inst_74221 = (state_74383[(15)]);
var inst_74245__$1 = cljs.core.seq(inst_74221);
var state_74383__$1 = (function (){var statearr_74508 = state_74383;
(statearr_74508[(7)] = inst_74245__$1);

return statearr_74508;
})();
if(inst_74245__$1){
var statearr_74509_76934 = state_74383__$1;
(statearr_74509_76934[(1)] = (16));

} else {
var statearr_74510_76936 = state_74383__$1;
(statearr_74510_76936[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74384 === (9))){
var inst_74283 = (state_74383[(2)]);
var state_74383__$1 = state_74383;
var statearr_74513_76937 = state_74383__$1;
(statearr_74513_76937[(2)] = inst_74283);

(statearr_74513_76937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74384 === (5))){
var inst_74218 = cljs.core.deref(cs);
var inst_74219 = cljs.core.seq(inst_74218);
var inst_74221 = inst_74219;
var inst_74222 = null;
var inst_74223 = (0);
var inst_74224 = (0);
var state_74383__$1 = (function (){var statearr_74517 = state_74383;
(statearr_74517[(14)] = inst_74224);

(statearr_74517[(15)] = inst_74221);

(statearr_74517[(16)] = inst_74223);

(statearr_74517[(17)] = inst_74222);

return statearr_74517;
})();
var statearr_74520_76947 = state_74383__$1;
(statearr_74520_76947[(2)] = null);

(statearr_74520_76947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74384 === (14))){
var state_74383__$1 = state_74383;
var statearr_74521_76948 = state_74383__$1;
(statearr_74521_76948[(2)] = null);

(statearr_74521_76948[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74384 === (45))){
var inst_74366 = (state_74383[(2)]);
var state_74383__$1 = state_74383;
var statearr_74524_76953 = state_74383__$1;
(statearr_74524_76953[(2)] = inst_74366);

(statearr_74524_76953[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74384 === (26))){
var inst_74287 = (state_74383[(27)]);
var inst_74356 = (state_74383[(2)]);
var inst_74358 = cljs.core.seq(inst_74287);
var state_74383__$1 = (function (){var statearr_74526 = state_74383;
(statearr_74526[(29)] = inst_74356);

return statearr_74526;
})();
if(inst_74358){
var statearr_74528_76956 = state_74383__$1;
(statearr_74528_76956[(1)] = (42));

} else {
var statearr_74530_76957 = state_74383__$1;
(statearr_74530_76957[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74384 === (16))){
var inst_74245 = (state_74383[(7)]);
var inst_74252 = cljs.core.chunked_seq_QMARK_(inst_74245);
var state_74383__$1 = state_74383;
if(inst_74252){
var statearr_74533_76960 = state_74383__$1;
(statearr_74533_76960[(1)] = (19));

} else {
var statearr_74534_76961 = state_74383__$1;
(statearr_74534_76961[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74384 === (38))){
var inst_74349 = (state_74383[(2)]);
var state_74383__$1 = state_74383;
var statearr_74535_76964 = state_74383__$1;
(statearr_74535_76964[(2)] = inst_74349);

(statearr_74535_76964[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74384 === (30))){
var state_74383__$1 = state_74383;
var statearr_74538_76967 = state_74383__$1;
(statearr_74538_76967[(2)] = null);

(statearr_74538_76967[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74384 === (10))){
var inst_74224 = (state_74383[(14)]);
var inst_74222 = (state_74383[(17)]);
var inst_74233 = cljs.core._nth(inst_74222,inst_74224);
var inst_74234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74233,(0),null);
var inst_74235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74233,(1),null);
var state_74383__$1 = (function (){var statearr_74541 = state_74383;
(statearr_74541[(24)] = inst_74234);

return statearr_74541;
})();
if(cljs.core.truth_(inst_74235)){
var statearr_74542_76969 = state_74383__$1;
(statearr_74542_76969[(1)] = (13));

} else {
var statearr_74544_76973 = state_74383__$1;
(statearr_74544_76973[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74384 === (18))){
var inst_74279 = (state_74383[(2)]);
var state_74383__$1 = state_74383;
var statearr_74547_76975 = state_74383__$1;
(statearr_74547_76975[(2)] = inst_74279);

(statearr_74547_76975[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74384 === (42))){
var state_74383__$1 = state_74383;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74383__$1,(45),dchan);
} else {
if((state_val_74384 === (37))){
var inst_74210 = (state_74383[(12)]);
var inst_74333 = (state_74383[(22)]);
var inst_74322 = (state_74383[(23)]);
var inst_74333__$1 = cljs.core.first(inst_74322);
var inst_74335 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_74333__$1,inst_74210,done);
var state_74383__$1 = (function (){var statearr_74549 = state_74383;
(statearr_74549[(22)] = inst_74333__$1);

return statearr_74549;
})();
if(cljs.core.truth_(inst_74335)){
var statearr_74552_76986 = state_74383__$1;
(statearr_74552_76986[(1)] = (39));

} else {
var statearr_74553_76989 = state_74383__$1;
(statearr_74553_76989[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74384 === (8))){
var inst_74224 = (state_74383[(14)]);
var inst_74223 = (state_74383[(16)]);
var inst_74227 = (inst_74224 < inst_74223);
var inst_74228 = inst_74227;
var state_74383__$1 = state_74383;
if(cljs.core.truth_(inst_74228)){
var statearr_74555_76998 = state_74383__$1;
(statearr_74555_76998[(1)] = (10));

} else {
var statearr_74557_76999 = state_74383__$1;
(statearr_74557_76999[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__68518__auto__ = null;
var cljs$core$async$mult_$_state_machine__68518__auto____0 = (function (){
var statearr_74561 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_74561[(0)] = cljs$core$async$mult_$_state_machine__68518__auto__);

(statearr_74561[(1)] = (1));

return statearr_74561;
});
var cljs$core$async$mult_$_state_machine__68518__auto____1 = (function (state_74383){
while(true){
var ret_value__68519__auto__ = (function (){try{while(true){
var result__68520__auto__ = switch__68517__auto__(state_74383);
if(cljs.core.keyword_identical_QMARK_(result__68520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68520__auto__;
}
break;
}
}catch (e74563){var ex__68521__auto__ = e74563;
var statearr_74564_77011 = state_74383;
(statearr_74564_77011[(2)] = ex__68521__auto__);


if(cljs.core.seq((state_74383[(4)]))){
var statearr_74565_77013 = state_74383;
(statearr_74565_77013[(1)] = cljs.core.first((state_74383[(4)])));

} else {
throw ex__68521__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__68519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77019 = state_74383;
state_74383 = G__77019;
continue;
} else {
return ret_value__68519__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__68518__auto__ = function(state_74383){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__68518__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__68518__auto____1.call(this,state_74383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__68518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__68518__auto____0;
cljs$core$async$mult_$_state_machine__68518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__68518__auto____1;
return cljs$core$async$mult_$_state_machine__68518__auto__;
})()
})();
var state__72806__auto__ = (function (){var statearr_74570 = f__72805__auto__();
(statearr_74570[(6)] = c__72804__auto___76750);

return statearr_74570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72806__auto__);
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
var G__74578 = arguments.length;
switch (G__74578) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_77038 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_77038(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_77041 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_77041(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_77049 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_77049(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_77051 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_77051(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_77064 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_77064(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___77071 = arguments.length;
var i__4737__auto___77072 = (0);
while(true){
if((i__4737__auto___77072 < len__4736__auto___77071)){
args__4742__auto__.push((arguments[i__4737__auto___77072]));

var G__77073 = (i__4737__auto___77072 + (1));
i__4737__auto___77072 = G__77073;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__74633){
var map__74634 = p__74633;
var map__74634__$1 = (((((!((map__74634 == null))))?(((((map__74634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74634):map__74634);
var opts = map__74634__$1;
var statearr_74640_77082 = state;
(statearr_74640_77082[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_74643_77083 = state;
(statearr_74643_77083[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_74644_77085 = state;
(statearr_74644_77085[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq74628){
var G__74629 = cljs.core.first(seq74628);
var seq74628__$1 = cljs.core.next(seq74628);
var G__74630 = cljs.core.first(seq74628__$1);
var seq74628__$2 = cljs.core.next(seq74628__$1);
var G__74631 = cljs.core.first(seq74628__$2);
var seq74628__$3 = cljs.core.next(seq74628__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74629,G__74630,G__74631,seq74628__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async74653 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async74653 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta74654){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta74654 = meta74654;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async74653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74655,meta74654__$1){
var self__ = this;
var _74655__$1 = this;
return (new cljs.core.async.t_cljs$core$async74653(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta74654__$1));
}));

(cljs.core.async.t_cljs$core$async74653.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74655){
var self__ = this;
var _74655__$1 = this;
return self__.meta74654;
}));

(cljs.core.async.t_cljs$core$async74653.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74653.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async74653.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74653.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async74653.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async74653.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async74653.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async74653.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async74653.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta74654","meta74654",1241100890,null)], null);
}));

(cljs.core.async.t_cljs$core$async74653.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async74653.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async74653");

(cljs.core.async.t_cljs$core$async74653.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async74653");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async74653.
 */
cljs.core.async.__GT_t_cljs$core$async74653 = (function cljs$core$async$mix_$___GT_t_cljs$core$async74653(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta74654){
return (new cljs.core.async.t_cljs$core$async74653(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta74654));
});

}

return (new cljs.core.async.t_cljs$core$async74653(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__72804__auto___77134 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72805__auto__ = (function (){var switch__68517__auto__ = (function (state_74787){
var state_val_74788 = (state_74787[(1)]);
if((state_val_74788 === (7))){
var inst_74696 = (state_74787[(2)]);
var state_74787__$1 = state_74787;
var statearr_74792_77137 = state_74787__$1;
(statearr_74792_77137[(2)] = inst_74696);

(statearr_74792_77137[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74788 === (20))){
var inst_74710 = (state_74787[(7)]);
var state_74787__$1 = state_74787;
var statearr_74793_77142 = state_74787__$1;
(statearr_74793_77142[(2)] = inst_74710);

(statearr_74793_77142[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74788 === (27))){
var state_74787__$1 = state_74787;
var statearr_74794_77144 = state_74787__$1;
(statearr_74794_77144[(2)] = null);

(statearr_74794_77144[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74788 === (1))){
var inst_74680 = (state_74787[(8)]);
var inst_74680__$1 = calc_state();
var inst_74682 = (inst_74680__$1 == null);
var inst_74683 = cljs.core.not(inst_74682);
var state_74787__$1 = (function (){var statearr_74795 = state_74787;
(statearr_74795[(8)] = inst_74680__$1);

return statearr_74795;
})();
if(inst_74683){
var statearr_74797_77148 = state_74787__$1;
(statearr_74797_77148[(1)] = (2));

} else {
var statearr_74798_77150 = state_74787__$1;
(statearr_74798_77150[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74788 === (24))){
var inst_74757 = (state_74787[(9)]);
var inst_74734 = (state_74787[(10)]);
var inst_74743 = (state_74787[(11)]);
var inst_74757__$1 = (inst_74734.cljs$core$IFn$_invoke$arity$1 ? inst_74734.cljs$core$IFn$_invoke$arity$1(inst_74743) : inst_74734.call(null,inst_74743));
var state_74787__$1 = (function (){var statearr_74801 = state_74787;
(statearr_74801[(9)] = inst_74757__$1);

return statearr_74801;
})();
if(cljs.core.truth_(inst_74757__$1)){
var statearr_74803_77157 = state_74787__$1;
(statearr_74803_77157[(1)] = (29));

} else {
var statearr_74805_77158 = state_74787__$1;
(statearr_74805_77158[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74788 === (4))){
var inst_74699 = (state_74787[(2)]);
var state_74787__$1 = state_74787;
if(cljs.core.truth_(inst_74699)){
var statearr_74806_77160 = state_74787__$1;
(statearr_74806_77160[(1)] = (8));

} else {
var statearr_74807_77162 = state_74787__$1;
(statearr_74807_77162[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74788 === (15))){
var inst_74728 = (state_74787[(2)]);
var state_74787__$1 = state_74787;
if(cljs.core.truth_(inst_74728)){
var statearr_74808_77165 = state_74787__$1;
(statearr_74808_77165[(1)] = (19));

} else {
var statearr_74809_77166 = state_74787__$1;
(statearr_74809_77166[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74788 === (21))){
var inst_74733 = (state_74787[(12)]);
var inst_74733__$1 = (state_74787[(2)]);
var inst_74734 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_74733__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_74735 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_74733__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_74736 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_74733__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_74787__$1 = (function (){var statearr_74814 = state_74787;
(statearr_74814[(13)] = inst_74735);

(statearr_74814[(12)] = inst_74733__$1);

(statearr_74814[(10)] = inst_74734);

return statearr_74814;
})();
return cljs.core.async.ioc_alts_BANG_(state_74787__$1,(22),inst_74736);
} else {
if((state_val_74788 === (31))){
var inst_74765 = (state_74787[(2)]);
var state_74787__$1 = state_74787;
if(cljs.core.truth_(inst_74765)){
var statearr_74815_77176 = state_74787__$1;
(statearr_74815_77176[(1)] = (32));

} else {
var statearr_74816_77178 = state_74787__$1;
(statearr_74816_77178[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74788 === (32))){
var inst_74742 = (state_74787[(14)]);
var state_74787__$1 = state_74787;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74787__$1,(35),out,inst_74742);
} else {
if((state_val_74788 === (33))){
var inst_74733 = (state_74787[(12)]);
var inst_74710 = inst_74733;
var state_74787__$1 = (function (){var statearr_74817 = state_74787;
(statearr_74817[(7)] = inst_74710);

return statearr_74817;
})();
var statearr_74818_77183 = state_74787__$1;
(statearr_74818_77183[(2)] = null);

(statearr_74818_77183[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74788 === (13))){
var inst_74710 = (state_74787[(7)]);
var inst_74717 = inst_74710.cljs$lang$protocol_mask$partition0$;
var inst_74718 = (inst_74717 & (64));
var inst_74719 = inst_74710.cljs$core$ISeq$;
var inst_74720 = (cljs.core.PROTOCOL_SENTINEL === inst_74719);
var inst_74721 = ((inst_74718) || (inst_74720));
var state_74787__$1 = state_74787;
if(cljs.core.truth_(inst_74721)){
var statearr_74821_77187 = state_74787__$1;
(statearr_74821_77187[(1)] = (16));

} else {
var statearr_74822_77189 = state_74787__$1;
(statearr_74822_77189[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74788 === (22))){
var inst_74742 = (state_74787[(14)]);
var inst_74743 = (state_74787[(11)]);
var inst_74741 = (state_74787[(2)]);
var inst_74742__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74741,(0),null);
var inst_74743__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74741,(1),null);
var inst_74744 = (inst_74742__$1 == null);
var inst_74745 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_74743__$1,change);
var inst_74746 = ((inst_74744) || (inst_74745));
var state_74787__$1 = (function (){var statearr_74823 = state_74787;
(statearr_74823[(14)] = inst_74742__$1);

(statearr_74823[(11)] = inst_74743__$1);

return statearr_74823;
})();
if(cljs.core.truth_(inst_74746)){
var statearr_74824_77192 = state_74787__$1;
(statearr_74824_77192[(1)] = (23));

} else {
var statearr_74825_77194 = state_74787__$1;
(statearr_74825_77194[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74788 === (36))){
var inst_74733 = (state_74787[(12)]);
var inst_74710 = inst_74733;
var state_74787__$1 = (function (){var statearr_74826 = state_74787;
(statearr_74826[(7)] = inst_74710);

return statearr_74826;
})();
var statearr_74827_77195 = state_74787__$1;
(statearr_74827_77195[(2)] = null);

(statearr_74827_77195[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74788 === (29))){
var inst_74757 = (state_74787[(9)]);
var state_74787__$1 = state_74787;
var statearr_74828_77197 = state_74787__$1;
(statearr_74828_77197[(2)] = inst_74757);

(statearr_74828_77197[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74788 === (6))){
var state_74787__$1 = state_74787;
var statearr_74830_77200 = state_74787__$1;
(statearr_74830_77200[(2)] = false);

(statearr_74830_77200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74788 === (28))){
var inst_74753 = (state_74787[(2)]);
var inst_74754 = calc_state();
var inst_74710 = inst_74754;
var state_74787__$1 = (function (){var statearr_74833 = state_74787;
(statearr_74833[(7)] = inst_74710);

(statearr_74833[(15)] = inst_74753);

return statearr_74833;
})();
var statearr_74834_77205 = state_74787__$1;
(statearr_74834_77205[(2)] = null);

(statearr_74834_77205[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74788 === (25))){
var inst_74779 = (state_74787[(2)]);
var state_74787__$1 = state_74787;
var statearr_74836_77207 = state_74787__$1;
(statearr_74836_77207[(2)] = inst_74779);

(statearr_74836_77207[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74788 === (34))){
var inst_74777 = (state_74787[(2)]);
var state_74787__$1 = state_74787;
var statearr_74839_77210 = state_74787__$1;
(statearr_74839_77210[(2)] = inst_74777);

(statearr_74839_77210[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74788 === (17))){
var state_74787__$1 = state_74787;
var statearr_74841_77213 = state_74787__$1;
(statearr_74841_77213[(2)] = false);

(statearr_74841_77213[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74788 === (3))){
var state_74787__$1 = state_74787;
var statearr_74845_77214 = state_74787__$1;
(statearr_74845_77214[(2)] = false);

(statearr_74845_77214[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74788 === (12))){
var inst_74781 = (state_74787[(2)]);
var state_74787__$1 = state_74787;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74787__$1,inst_74781);
} else {
if((state_val_74788 === (2))){
var inst_74680 = (state_74787[(8)]);
var inst_74686 = inst_74680.cljs$lang$protocol_mask$partition0$;
var inst_74687 = (inst_74686 & (64));
var inst_74690 = inst_74680.cljs$core$ISeq$;
var inst_74691 = (cljs.core.PROTOCOL_SENTINEL === inst_74690);
var inst_74692 = ((inst_74687) || (inst_74691));
var state_74787__$1 = state_74787;
if(cljs.core.truth_(inst_74692)){
var statearr_74846_77220 = state_74787__$1;
(statearr_74846_77220[(1)] = (5));

} else {
var statearr_74848_77223 = state_74787__$1;
(statearr_74848_77223[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74788 === (23))){
var inst_74742 = (state_74787[(14)]);
var inst_74748 = (inst_74742 == null);
var state_74787__$1 = state_74787;
if(cljs.core.truth_(inst_74748)){
var statearr_74853_77224 = state_74787__$1;
(statearr_74853_77224[(1)] = (26));

} else {
var statearr_74859_77225 = state_74787__$1;
(statearr_74859_77225[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74788 === (35))){
var inst_74768 = (state_74787[(2)]);
var state_74787__$1 = state_74787;
if(cljs.core.truth_(inst_74768)){
var statearr_74861_77231 = state_74787__$1;
(statearr_74861_77231[(1)] = (36));

} else {
var statearr_74862_77232 = state_74787__$1;
(statearr_74862_77232[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74788 === (19))){
var inst_74710 = (state_74787[(7)]);
var inst_74730 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_74710);
var state_74787__$1 = state_74787;
var statearr_74863_77235 = state_74787__$1;
(statearr_74863_77235[(2)] = inst_74730);

(statearr_74863_77235[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74788 === (11))){
var inst_74710 = (state_74787[(7)]);
var inst_74714 = (inst_74710 == null);
var inst_74715 = cljs.core.not(inst_74714);
var state_74787__$1 = state_74787;
if(inst_74715){
var statearr_74864_77239 = state_74787__$1;
(statearr_74864_77239[(1)] = (13));

} else {
var statearr_74865_77240 = state_74787__$1;
(statearr_74865_77240[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74788 === (9))){
var inst_74680 = (state_74787[(8)]);
var state_74787__$1 = state_74787;
var statearr_74867_77243 = state_74787__$1;
(statearr_74867_77243[(2)] = inst_74680);

(statearr_74867_77243[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74788 === (5))){
var state_74787__$1 = state_74787;
var statearr_74869_77250 = state_74787__$1;
(statearr_74869_77250[(2)] = true);

(statearr_74869_77250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74788 === (14))){
var state_74787__$1 = state_74787;
var statearr_74870_77251 = state_74787__$1;
(statearr_74870_77251[(2)] = false);

(statearr_74870_77251[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74788 === (26))){
var inst_74743 = (state_74787[(11)]);
var inst_74750 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_74743);
var state_74787__$1 = state_74787;
var statearr_74873_77259 = state_74787__$1;
(statearr_74873_77259[(2)] = inst_74750);

(statearr_74873_77259[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74788 === (16))){
var state_74787__$1 = state_74787;
var statearr_74875_77264 = state_74787__$1;
(statearr_74875_77264[(2)] = true);

(statearr_74875_77264[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74788 === (38))){
var inst_74773 = (state_74787[(2)]);
var state_74787__$1 = state_74787;
var statearr_74877_77265 = state_74787__$1;
(statearr_74877_77265[(2)] = inst_74773);

(statearr_74877_77265[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74788 === (30))){
var inst_74735 = (state_74787[(13)]);
var inst_74734 = (state_74787[(10)]);
var inst_74743 = (state_74787[(11)]);
var inst_74760 = cljs.core.empty_QMARK_(inst_74734);
var inst_74761 = (inst_74735.cljs$core$IFn$_invoke$arity$1 ? inst_74735.cljs$core$IFn$_invoke$arity$1(inst_74743) : inst_74735.call(null,inst_74743));
var inst_74762 = cljs.core.not(inst_74761);
var inst_74763 = ((inst_74760) && (inst_74762));
var state_74787__$1 = state_74787;
var statearr_74879_77270 = state_74787__$1;
(statearr_74879_77270[(2)] = inst_74763);

(statearr_74879_77270[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74788 === (10))){
var inst_74680 = (state_74787[(8)]);
var inst_74704 = (state_74787[(2)]);
var inst_74707 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_74704,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_74708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_74704,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_74709 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_74704,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_74710 = inst_74680;
var state_74787__$1 = (function (){var statearr_74881 = state_74787;
(statearr_74881[(16)] = inst_74708);

(statearr_74881[(17)] = inst_74707);

(statearr_74881[(7)] = inst_74710);

(statearr_74881[(18)] = inst_74709);

return statearr_74881;
})();
var statearr_74883_77276 = state_74787__$1;
(statearr_74883_77276[(2)] = null);

(statearr_74883_77276[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74788 === (18))){
var inst_74725 = (state_74787[(2)]);
var state_74787__$1 = state_74787;
var statearr_74884_77281 = state_74787__$1;
(statearr_74884_77281[(2)] = inst_74725);

(statearr_74884_77281[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74788 === (37))){
var state_74787__$1 = state_74787;
var statearr_74885_77282 = state_74787__$1;
(statearr_74885_77282[(2)] = null);

(statearr_74885_77282[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74788 === (8))){
var inst_74680 = (state_74787[(8)]);
var inst_74701 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_74680);
var state_74787__$1 = state_74787;
var statearr_74886_77284 = state_74787__$1;
(statearr_74886_77284[(2)] = inst_74701);

(statearr_74886_77284[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__68518__auto__ = null;
var cljs$core$async$mix_$_state_machine__68518__auto____0 = (function (){
var statearr_74890 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_74890[(0)] = cljs$core$async$mix_$_state_machine__68518__auto__);

(statearr_74890[(1)] = (1));

return statearr_74890;
});
var cljs$core$async$mix_$_state_machine__68518__auto____1 = (function (state_74787){
while(true){
var ret_value__68519__auto__ = (function (){try{while(true){
var result__68520__auto__ = switch__68517__auto__(state_74787);
if(cljs.core.keyword_identical_QMARK_(result__68520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68520__auto__;
}
break;
}
}catch (e74891){var ex__68521__auto__ = e74891;
var statearr_74892_77291 = state_74787;
(statearr_74892_77291[(2)] = ex__68521__auto__);


if(cljs.core.seq((state_74787[(4)]))){
var statearr_74893_77292 = state_74787;
(statearr_74893_77292[(1)] = cljs.core.first((state_74787[(4)])));

} else {
throw ex__68521__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__68519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77293 = state_74787;
state_74787 = G__77293;
continue;
} else {
return ret_value__68519__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__68518__auto__ = function(state_74787){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__68518__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__68518__auto____1.call(this,state_74787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__68518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__68518__auto____0;
cljs$core$async$mix_$_state_machine__68518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__68518__auto____1;
return cljs$core$async$mix_$_state_machine__68518__auto__;
})()
})();
var state__72806__auto__ = (function (){var statearr_74894 = f__72805__auto__();
(statearr_74894[(6)] = c__72804__auto___77134);

return statearr_74894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72806__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_77305 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_77305(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_77307 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_77307(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_77313 = (function() {
var G__77314 = null;
var G__77314__1 = (function (p){
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
var G__77314__2 = (function (p,v){
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
G__77314 = function(p,v){
switch(arguments.length){
case 1:
return G__77314__1.call(this,p);
case 2:
return G__77314__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__77314.cljs$core$IFn$_invoke$arity$1 = G__77314__1;
G__77314.cljs$core$IFn$_invoke$arity$2 = G__77314__2;
return G__77314;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__74916 = arguments.length;
switch (G__74916) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_77313(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_77313(p,v);
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
var G__74924 = arguments.length;
switch (G__74924) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__74919_SHARP_){
if(cljs.core.truth_((p1__74919_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__74919_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__74919_SHARP_.call(null,topic)))){
return p1__74919_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__74919_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async74934 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async74934 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta74935){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta74935 = meta74935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async74934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74936,meta74935__$1){
var self__ = this;
var _74936__$1 = this;
return (new cljs.core.async.t_cljs$core$async74934(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta74935__$1));
}));

(cljs.core.async.t_cljs$core$async74934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74936){
var self__ = this;
var _74936__$1 = this;
return self__.meta74935;
}));

(cljs.core.async.t_cljs$core$async74934.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74934.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async74934.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74934.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async74934.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async74934.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async74934.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async74934.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta74935","meta74935",-2096936318,null)], null);
}));

(cljs.core.async.t_cljs$core$async74934.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async74934.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async74934");

(cljs.core.async.t_cljs$core$async74934.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async74934");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async74934.
 */
cljs.core.async.__GT_t_cljs$core$async74934 = (function cljs$core$async$__GT_t_cljs$core$async74934(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta74935){
return (new cljs.core.async.t_cljs$core$async74934(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta74935));
});

}

return (new cljs.core.async.t_cljs$core$async74934(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__72804__auto___77337 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72805__auto__ = (function (){var switch__68517__auto__ = (function (state_75030){
var state_val_75032 = (state_75030[(1)]);
if((state_val_75032 === (7))){
var inst_75025 = (state_75030[(2)]);
var state_75030__$1 = state_75030;
var statearr_75034_77342 = state_75030__$1;
(statearr_75034_77342[(2)] = inst_75025);

(statearr_75034_77342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75032 === (20))){
var state_75030__$1 = state_75030;
var statearr_75036_77343 = state_75030__$1;
(statearr_75036_77343[(2)] = null);

(statearr_75036_77343[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75032 === (1))){
var state_75030__$1 = state_75030;
var statearr_75041_77344 = state_75030__$1;
(statearr_75041_77344[(2)] = null);

(statearr_75041_77344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75032 === (24))){
var inst_75001 = (state_75030[(7)]);
var inst_75016 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_75001);
var state_75030__$1 = state_75030;
var statearr_75044_77348 = state_75030__$1;
(statearr_75044_77348[(2)] = inst_75016);

(statearr_75044_77348[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75032 === (4))){
var inst_74949 = (state_75030[(8)]);
var inst_74949__$1 = (state_75030[(2)]);
var inst_74950 = (inst_74949__$1 == null);
var state_75030__$1 = (function (){var statearr_75050 = state_75030;
(statearr_75050[(8)] = inst_74949__$1);

return statearr_75050;
})();
if(cljs.core.truth_(inst_74950)){
var statearr_75051_77349 = state_75030__$1;
(statearr_75051_77349[(1)] = (5));

} else {
var statearr_75052_77350 = state_75030__$1;
(statearr_75052_77350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75032 === (15))){
var inst_74993 = (state_75030[(2)]);
var state_75030__$1 = state_75030;
var statearr_75054_77354 = state_75030__$1;
(statearr_75054_77354[(2)] = inst_74993);

(statearr_75054_77354[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75032 === (21))){
var inst_75021 = (state_75030[(2)]);
var state_75030__$1 = (function (){var statearr_75055 = state_75030;
(statearr_75055[(9)] = inst_75021);

return statearr_75055;
})();
var statearr_75056_77358 = state_75030__$1;
(statearr_75056_77358[(2)] = null);

(statearr_75056_77358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75032 === (13))){
var inst_74975 = (state_75030[(10)]);
var inst_74977 = cljs.core.chunked_seq_QMARK_(inst_74975);
var state_75030__$1 = state_75030;
if(inst_74977){
var statearr_75058_77359 = state_75030__$1;
(statearr_75058_77359[(1)] = (16));

} else {
var statearr_75059_77360 = state_75030__$1;
(statearr_75059_77360[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75032 === (22))){
var inst_75012 = (state_75030[(2)]);
var state_75030__$1 = state_75030;
if(cljs.core.truth_(inst_75012)){
var statearr_75061_77361 = state_75030__$1;
(statearr_75061_77361[(1)] = (23));

} else {
var statearr_75062_77363 = state_75030__$1;
(statearr_75062_77363[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75032 === (6))){
var inst_75004 = (state_75030[(11)]);
var inst_74949 = (state_75030[(8)]);
var inst_75001 = (state_75030[(7)]);
var inst_75001__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_74949) : topic_fn.call(null,inst_74949));
var inst_75003 = cljs.core.deref(mults);
var inst_75004__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_75003,inst_75001__$1);
var state_75030__$1 = (function (){var statearr_75066 = state_75030;
(statearr_75066[(11)] = inst_75004__$1);

(statearr_75066[(7)] = inst_75001__$1);

return statearr_75066;
})();
if(cljs.core.truth_(inst_75004__$1)){
var statearr_75067_77369 = state_75030__$1;
(statearr_75067_77369[(1)] = (19));

} else {
var statearr_75068_77370 = state_75030__$1;
(statearr_75068_77370[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75032 === (25))){
var inst_75018 = (state_75030[(2)]);
var state_75030__$1 = state_75030;
var statearr_75069_77371 = state_75030__$1;
(statearr_75069_77371[(2)] = inst_75018);

(statearr_75069_77371[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75032 === (17))){
var inst_74975 = (state_75030[(10)]);
var inst_74984 = cljs.core.first(inst_74975);
var inst_74985 = cljs.core.async.muxch_STAR_(inst_74984);
var inst_74986 = cljs.core.async.close_BANG_(inst_74985);
var inst_74987 = cljs.core.next(inst_74975);
var inst_74959 = inst_74987;
var inst_74960 = null;
var inst_74961 = (0);
var inst_74962 = (0);
var state_75030__$1 = (function (){var statearr_75072 = state_75030;
(statearr_75072[(12)] = inst_74986);

(statearr_75072[(13)] = inst_74959);

(statearr_75072[(14)] = inst_74960);

(statearr_75072[(15)] = inst_74961);

(statearr_75072[(16)] = inst_74962);

return statearr_75072;
})();
var statearr_75073_77372 = state_75030__$1;
(statearr_75073_77372[(2)] = null);

(statearr_75073_77372[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75032 === (3))){
var inst_75028 = (state_75030[(2)]);
var state_75030__$1 = state_75030;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75030__$1,inst_75028);
} else {
if((state_val_75032 === (12))){
var inst_74995 = (state_75030[(2)]);
var state_75030__$1 = state_75030;
var statearr_75075_77374 = state_75030__$1;
(statearr_75075_77374[(2)] = inst_74995);

(statearr_75075_77374[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75032 === (2))){
var state_75030__$1 = state_75030;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75030__$1,(4),ch);
} else {
if((state_val_75032 === (23))){
var state_75030__$1 = state_75030;
var statearr_75078_77377 = state_75030__$1;
(statearr_75078_77377[(2)] = null);

(statearr_75078_77377[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75032 === (19))){
var inst_75004 = (state_75030[(11)]);
var inst_74949 = (state_75030[(8)]);
var inst_75010 = cljs.core.async.muxch_STAR_(inst_75004);
var state_75030__$1 = state_75030;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75030__$1,(22),inst_75010,inst_74949);
} else {
if((state_val_75032 === (11))){
var inst_74975 = (state_75030[(10)]);
var inst_74959 = (state_75030[(13)]);
var inst_74975__$1 = cljs.core.seq(inst_74959);
var state_75030__$1 = (function (){var statearr_75085 = state_75030;
(statearr_75085[(10)] = inst_74975__$1);

return statearr_75085;
})();
if(inst_74975__$1){
var statearr_75088_77382 = state_75030__$1;
(statearr_75088_77382[(1)] = (13));

} else {
var statearr_75089_77385 = state_75030__$1;
(statearr_75089_77385[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75032 === (9))){
var inst_74997 = (state_75030[(2)]);
var state_75030__$1 = state_75030;
var statearr_75090_77390 = state_75030__$1;
(statearr_75090_77390[(2)] = inst_74997);

(statearr_75090_77390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75032 === (5))){
var inst_74956 = cljs.core.deref(mults);
var inst_74957 = cljs.core.vals(inst_74956);
var inst_74958 = cljs.core.seq(inst_74957);
var inst_74959 = inst_74958;
var inst_74960 = null;
var inst_74961 = (0);
var inst_74962 = (0);
var state_75030__$1 = (function (){var statearr_75091 = state_75030;
(statearr_75091[(13)] = inst_74959);

(statearr_75091[(14)] = inst_74960);

(statearr_75091[(15)] = inst_74961);

(statearr_75091[(16)] = inst_74962);

return statearr_75091;
})();
var statearr_75092_77392 = state_75030__$1;
(statearr_75092_77392[(2)] = null);

(statearr_75092_77392[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75032 === (14))){
var state_75030__$1 = state_75030;
var statearr_75098_77397 = state_75030__$1;
(statearr_75098_77397[(2)] = null);

(statearr_75098_77397[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75032 === (16))){
var inst_74975 = (state_75030[(10)]);
var inst_74979 = cljs.core.chunk_first(inst_74975);
var inst_74980 = cljs.core.chunk_rest(inst_74975);
var inst_74981 = cljs.core.count(inst_74979);
var inst_74959 = inst_74980;
var inst_74960 = inst_74979;
var inst_74961 = inst_74981;
var inst_74962 = (0);
var state_75030__$1 = (function (){var statearr_75100 = state_75030;
(statearr_75100[(13)] = inst_74959);

(statearr_75100[(14)] = inst_74960);

(statearr_75100[(15)] = inst_74961);

(statearr_75100[(16)] = inst_74962);

return statearr_75100;
})();
var statearr_75101_77402 = state_75030__$1;
(statearr_75101_77402[(2)] = null);

(statearr_75101_77402[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75032 === (10))){
var inst_74959 = (state_75030[(13)]);
var inst_74960 = (state_75030[(14)]);
var inst_74961 = (state_75030[(15)]);
var inst_74962 = (state_75030[(16)]);
var inst_74969 = cljs.core._nth(inst_74960,inst_74962);
var inst_74970 = cljs.core.async.muxch_STAR_(inst_74969);
var inst_74971 = cljs.core.async.close_BANG_(inst_74970);
var inst_74972 = (inst_74962 + (1));
var tmp75095 = inst_74959;
var tmp75096 = inst_74960;
var tmp75097 = inst_74961;
var inst_74959__$1 = tmp75095;
var inst_74960__$1 = tmp75096;
var inst_74961__$1 = tmp75097;
var inst_74962__$1 = inst_74972;
var state_75030__$1 = (function (){var statearr_75103 = state_75030;
(statearr_75103[(13)] = inst_74959__$1);

(statearr_75103[(14)] = inst_74960__$1);

(statearr_75103[(17)] = inst_74971);

(statearr_75103[(15)] = inst_74961__$1);

(statearr_75103[(16)] = inst_74962__$1);

return statearr_75103;
})();
var statearr_75104_77412 = state_75030__$1;
(statearr_75104_77412[(2)] = null);

(statearr_75104_77412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75032 === (18))){
var inst_74990 = (state_75030[(2)]);
var state_75030__$1 = state_75030;
var statearr_75105_77413 = state_75030__$1;
(statearr_75105_77413[(2)] = inst_74990);

(statearr_75105_77413[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75032 === (8))){
var inst_74961 = (state_75030[(15)]);
var inst_74962 = (state_75030[(16)]);
var inst_74964 = (inst_74962 < inst_74961);
var inst_74965 = inst_74964;
var state_75030__$1 = state_75030;
if(cljs.core.truth_(inst_74965)){
var statearr_75106_77414 = state_75030__$1;
(statearr_75106_77414[(1)] = (10));

} else {
var statearr_75108_77416 = state_75030__$1;
(statearr_75108_77416[(1)] = (11));

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
var cljs$core$async$state_machine__68518__auto__ = null;
var cljs$core$async$state_machine__68518__auto____0 = (function (){
var statearr_75113 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75113[(0)] = cljs$core$async$state_machine__68518__auto__);

(statearr_75113[(1)] = (1));

return statearr_75113;
});
var cljs$core$async$state_machine__68518__auto____1 = (function (state_75030){
while(true){
var ret_value__68519__auto__ = (function (){try{while(true){
var result__68520__auto__ = switch__68517__auto__(state_75030);
if(cljs.core.keyword_identical_QMARK_(result__68520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68520__auto__;
}
break;
}
}catch (e75114){var ex__68521__auto__ = e75114;
var statearr_75115_77423 = state_75030;
(statearr_75115_77423[(2)] = ex__68521__auto__);


if(cljs.core.seq((state_75030[(4)]))){
var statearr_75118_77425 = state_75030;
(statearr_75118_77425[(1)] = cljs.core.first((state_75030[(4)])));

} else {
throw ex__68521__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__68519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77426 = state_75030;
state_75030 = G__77426;
continue;
} else {
return ret_value__68519__auto__;
}
break;
}
});
cljs$core$async$state_machine__68518__auto__ = function(state_75030){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68518__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68518__auto____1.call(this,state_75030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__68518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68518__auto____0;
cljs$core$async$state_machine__68518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68518__auto____1;
return cljs$core$async$state_machine__68518__auto__;
})()
})();
var state__72806__auto__ = (function (){var statearr_75121 = f__72805__auto__();
(statearr_75121[(6)] = c__72804__auto___77337);

return statearr_75121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72806__auto__);
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
var G__75133 = arguments.length;
switch (G__75133) {
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
var G__75146 = arguments.length;
switch (G__75146) {
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
var G__75158 = arguments.length;
switch (G__75158) {
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
var c__72804__auto___77452 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72805__auto__ = (function (){var switch__68517__auto__ = (function (state_75219){
var state_val_75220 = (state_75219[(1)]);
if((state_val_75220 === (7))){
var state_75219__$1 = state_75219;
var statearr_75225_77453 = state_75219__$1;
(statearr_75225_77453[(2)] = null);

(statearr_75225_77453[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75220 === (1))){
var state_75219__$1 = state_75219;
var statearr_75226_77454 = state_75219__$1;
(statearr_75226_77454[(2)] = null);

(statearr_75226_77454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75220 === (4))){
var inst_75172 = (state_75219[(7)]);
var inst_75171 = (state_75219[(8)]);
var inst_75174 = (inst_75172 < inst_75171);
var state_75219__$1 = state_75219;
if(cljs.core.truth_(inst_75174)){
var statearr_75227_77457 = state_75219__$1;
(statearr_75227_77457[(1)] = (6));

} else {
var statearr_75228_77458 = state_75219__$1;
(statearr_75228_77458[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75220 === (15))){
var inst_75203 = (state_75219[(9)]);
var inst_75209 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_75203);
var state_75219__$1 = state_75219;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75219__$1,(17),out,inst_75209);
} else {
if((state_val_75220 === (13))){
var inst_75203 = (state_75219[(9)]);
var inst_75203__$1 = (state_75219[(2)]);
var inst_75204 = cljs.core.some(cljs.core.nil_QMARK_,inst_75203__$1);
var state_75219__$1 = (function (){var statearr_75231 = state_75219;
(statearr_75231[(9)] = inst_75203__$1);

return statearr_75231;
})();
if(cljs.core.truth_(inst_75204)){
var statearr_75232_77459 = state_75219__$1;
(statearr_75232_77459[(1)] = (14));

} else {
var statearr_75234_77460 = state_75219__$1;
(statearr_75234_77460[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75220 === (6))){
var state_75219__$1 = state_75219;
var statearr_75235_77461 = state_75219__$1;
(statearr_75235_77461[(2)] = null);

(statearr_75235_77461[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75220 === (17))){
var inst_75211 = (state_75219[(2)]);
var state_75219__$1 = (function (){var statearr_75239 = state_75219;
(statearr_75239[(10)] = inst_75211);

return statearr_75239;
})();
var statearr_75240_77465 = state_75219__$1;
(statearr_75240_77465[(2)] = null);

(statearr_75240_77465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75220 === (3))){
var inst_75216 = (state_75219[(2)]);
var state_75219__$1 = state_75219;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75219__$1,inst_75216);
} else {
if((state_val_75220 === (12))){
var _ = (function (){var statearr_75242 = state_75219;
(statearr_75242[(4)] = cljs.core.rest((state_75219[(4)])));

return statearr_75242;
})();
var state_75219__$1 = state_75219;
var ex75237 = (state_75219__$1[(2)]);
var statearr_75243_77471 = state_75219__$1;
(statearr_75243_77471[(5)] = ex75237);


if((ex75237 instanceof Object)){
var statearr_75245_77472 = state_75219__$1;
(statearr_75245_77472[(1)] = (11));

(statearr_75245_77472[(5)] = null);

} else {
throw ex75237;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75220 === (2))){
var inst_75169 = cljs.core.reset_BANG_(dctr,cnt);
var inst_75171 = cnt;
var inst_75172 = (0);
var state_75219__$1 = (function (){var statearr_75252 = state_75219;
(statearr_75252[(11)] = inst_75169);

(statearr_75252[(7)] = inst_75172);

(statearr_75252[(8)] = inst_75171);

return statearr_75252;
})();
var statearr_75253_77476 = state_75219__$1;
(statearr_75253_77476[(2)] = null);

(statearr_75253_77476[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75220 === (11))){
var inst_75180 = (state_75219[(2)]);
var inst_75181 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_75219__$1 = (function (){var statearr_75255 = state_75219;
(statearr_75255[(12)] = inst_75180);

return statearr_75255;
})();
var statearr_75256_77478 = state_75219__$1;
(statearr_75256_77478[(2)] = inst_75181);

(statearr_75256_77478[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75220 === (9))){
var inst_75172 = (state_75219[(7)]);
var _ = (function (){var statearr_75257 = state_75219;
(statearr_75257[(4)] = cljs.core.cons((12),(state_75219[(4)])));

return statearr_75257;
})();
var inst_75187 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_75172) : chs__$1.call(null,inst_75172));
var inst_75188 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_75172) : done.call(null,inst_75172));
var inst_75189 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_75187,inst_75188);
var ___$1 = (function (){var statearr_75258 = state_75219;
(statearr_75258[(4)] = cljs.core.rest((state_75219[(4)])));

return statearr_75258;
})();
var state_75219__$1 = state_75219;
var statearr_75260_77483 = state_75219__$1;
(statearr_75260_77483[(2)] = inst_75189);

(statearr_75260_77483[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75220 === (5))){
var inst_75200 = (state_75219[(2)]);
var state_75219__$1 = (function (){var statearr_75261 = state_75219;
(statearr_75261[(13)] = inst_75200);

return statearr_75261;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75219__$1,(13),dchan);
} else {
if((state_val_75220 === (14))){
var inst_75206 = cljs.core.async.close_BANG_(out);
var state_75219__$1 = state_75219;
var statearr_75263_77490 = state_75219__$1;
(statearr_75263_77490[(2)] = inst_75206);

(statearr_75263_77490[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75220 === (16))){
var inst_75214 = (state_75219[(2)]);
var state_75219__$1 = state_75219;
var statearr_75264_77491 = state_75219__$1;
(statearr_75264_77491[(2)] = inst_75214);

(statearr_75264_77491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75220 === (10))){
var inst_75172 = (state_75219[(7)]);
var inst_75192 = (state_75219[(2)]);
var inst_75194 = (inst_75172 + (1));
var inst_75172__$1 = inst_75194;
var state_75219__$1 = (function (){var statearr_75265 = state_75219;
(statearr_75265[(14)] = inst_75192);

(statearr_75265[(7)] = inst_75172__$1);

return statearr_75265;
})();
var statearr_75267_77492 = state_75219__$1;
(statearr_75267_77492[(2)] = null);

(statearr_75267_77492[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75220 === (8))){
var inst_75198 = (state_75219[(2)]);
var state_75219__$1 = state_75219;
var statearr_75269_77493 = state_75219__$1;
(statearr_75269_77493[(2)] = inst_75198);

(statearr_75269_77493[(1)] = (5));


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
var cljs$core$async$state_machine__68518__auto__ = null;
var cljs$core$async$state_machine__68518__auto____0 = (function (){
var statearr_75271 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75271[(0)] = cljs$core$async$state_machine__68518__auto__);

(statearr_75271[(1)] = (1));

return statearr_75271;
});
var cljs$core$async$state_machine__68518__auto____1 = (function (state_75219){
while(true){
var ret_value__68519__auto__ = (function (){try{while(true){
var result__68520__auto__ = switch__68517__auto__(state_75219);
if(cljs.core.keyword_identical_QMARK_(result__68520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68520__auto__;
}
break;
}
}catch (e75272){var ex__68521__auto__ = e75272;
var statearr_75274_77498 = state_75219;
(statearr_75274_77498[(2)] = ex__68521__auto__);


if(cljs.core.seq((state_75219[(4)]))){
var statearr_75275_77500 = state_75219;
(statearr_75275_77500[(1)] = cljs.core.first((state_75219[(4)])));

} else {
throw ex__68521__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__68519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77501 = state_75219;
state_75219 = G__77501;
continue;
} else {
return ret_value__68519__auto__;
}
break;
}
});
cljs$core$async$state_machine__68518__auto__ = function(state_75219){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68518__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68518__auto____1.call(this,state_75219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__68518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68518__auto____0;
cljs$core$async$state_machine__68518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68518__auto____1;
return cljs$core$async$state_machine__68518__auto__;
})()
})();
var state__72806__auto__ = (function (){var statearr_75276 = f__72805__auto__();
(statearr_75276[(6)] = c__72804__auto___77452);

return statearr_75276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72806__auto__);
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
var G__75281 = arguments.length;
switch (G__75281) {
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
var c__72804__auto___77509 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72805__auto__ = (function (){var switch__68517__auto__ = (function (state_75318){
var state_val_75319 = (state_75318[(1)]);
if((state_val_75319 === (7))){
var inst_75296 = (state_75318[(7)]);
var inst_75294 = (state_75318[(8)]);
var inst_75294__$1 = (state_75318[(2)]);
var inst_75296__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_75294__$1,(0),null);
var inst_75297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_75294__$1,(1),null);
var inst_75298 = (inst_75296__$1 == null);
var state_75318__$1 = (function (){var statearr_75323 = state_75318;
(statearr_75323[(7)] = inst_75296__$1);

(statearr_75323[(8)] = inst_75294__$1);

(statearr_75323[(9)] = inst_75297);

return statearr_75323;
})();
if(cljs.core.truth_(inst_75298)){
var statearr_75325_77511 = state_75318__$1;
(statearr_75325_77511[(1)] = (8));

} else {
var statearr_75326_77512 = state_75318__$1;
(statearr_75326_77512[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75319 === (1))){
var inst_75284 = cljs.core.vec(chs);
var inst_75285 = inst_75284;
var state_75318__$1 = (function (){var statearr_75328 = state_75318;
(statearr_75328[(10)] = inst_75285);

return statearr_75328;
})();
var statearr_75329_77515 = state_75318__$1;
(statearr_75329_77515[(2)] = null);

(statearr_75329_77515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75319 === (4))){
var inst_75285 = (state_75318[(10)]);
var state_75318__$1 = state_75318;
return cljs.core.async.ioc_alts_BANG_(state_75318__$1,(7),inst_75285);
} else {
if((state_val_75319 === (6))){
var inst_75313 = (state_75318[(2)]);
var state_75318__$1 = state_75318;
var statearr_75333_77517 = state_75318__$1;
(statearr_75333_77517[(2)] = inst_75313);

(statearr_75333_77517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75319 === (3))){
var inst_75315 = (state_75318[(2)]);
var state_75318__$1 = state_75318;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75318__$1,inst_75315);
} else {
if((state_val_75319 === (2))){
var inst_75285 = (state_75318[(10)]);
var inst_75287 = cljs.core.count(inst_75285);
var inst_75288 = (inst_75287 > (0));
var state_75318__$1 = state_75318;
if(cljs.core.truth_(inst_75288)){
var statearr_75336_77522 = state_75318__$1;
(statearr_75336_77522[(1)] = (4));

} else {
var statearr_75337_77523 = state_75318__$1;
(statearr_75337_77523[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75319 === (11))){
var inst_75285 = (state_75318[(10)]);
var inst_75305 = (state_75318[(2)]);
var tmp75334 = inst_75285;
var inst_75285__$1 = tmp75334;
var state_75318__$1 = (function (){var statearr_75338 = state_75318;
(statearr_75338[(10)] = inst_75285__$1);

(statearr_75338[(11)] = inst_75305);

return statearr_75338;
})();
var statearr_75339_77525 = state_75318__$1;
(statearr_75339_77525[(2)] = null);

(statearr_75339_77525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75319 === (9))){
var inst_75296 = (state_75318[(7)]);
var state_75318__$1 = state_75318;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75318__$1,(11),out,inst_75296);
} else {
if((state_val_75319 === (5))){
var inst_75311 = cljs.core.async.close_BANG_(out);
var state_75318__$1 = state_75318;
var statearr_75343_77526 = state_75318__$1;
(statearr_75343_77526[(2)] = inst_75311);

(statearr_75343_77526[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75319 === (10))){
var inst_75309 = (state_75318[(2)]);
var state_75318__$1 = state_75318;
var statearr_75344_77527 = state_75318__$1;
(statearr_75344_77527[(2)] = inst_75309);

(statearr_75344_77527[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75319 === (8))){
var inst_75296 = (state_75318[(7)]);
var inst_75285 = (state_75318[(10)]);
var inst_75294 = (state_75318[(8)]);
var inst_75297 = (state_75318[(9)]);
var inst_75300 = (function (){var cs = inst_75285;
var vec__75290 = inst_75294;
var v = inst_75296;
var c = inst_75297;
return (function (p1__75278_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__75278_SHARP_);
});
})();
var inst_75301 = cljs.core.filterv(inst_75300,inst_75285);
var inst_75285__$1 = inst_75301;
var state_75318__$1 = (function (){var statearr_75346 = state_75318;
(statearr_75346[(10)] = inst_75285__$1);

return statearr_75346;
})();
var statearr_75347_77536 = state_75318__$1;
(statearr_75347_77536[(2)] = null);

(statearr_75347_77536[(1)] = (2));


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
var cljs$core$async$state_machine__68518__auto__ = null;
var cljs$core$async$state_machine__68518__auto____0 = (function (){
var statearr_75349 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75349[(0)] = cljs$core$async$state_machine__68518__auto__);

(statearr_75349[(1)] = (1));

return statearr_75349;
});
var cljs$core$async$state_machine__68518__auto____1 = (function (state_75318){
while(true){
var ret_value__68519__auto__ = (function (){try{while(true){
var result__68520__auto__ = switch__68517__auto__(state_75318);
if(cljs.core.keyword_identical_QMARK_(result__68520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68520__auto__;
}
break;
}
}catch (e75350){var ex__68521__auto__ = e75350;
var statearr_75351_77540 = state_75318;
(statearr_75351_77540[(2)] = ex__68521__auto__);


if(cljs.core.seq((state_75318[(4)]))){
var statearr_75352_77541 = state_75318;
(statearr_75352_77541[(1)] = cljs.core.first((state_75318[(4)])));

} else {
throw ex__68521__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__68519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77542 = state_75318;
state_75318 = G__77542;
continue;
} else {
return ret_value__68519__auto__;
}
break;
}
});
cljs$core$async$state_machine__68518__auto__ = function(state_75318){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68518__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68518__auto____1.call(this,state_75318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__68518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68518__auto____0;
cljs$core$async$state_machine__68518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68518__auto____1;
return cljs$core$async$state_machine__68518__auto__;
})()
})();
var state__72806__auto__ = (function (){var statearr_75354 = f__72805__auto__();
(statearr_75354[(6)] = c__72804__auto___77509);

return statearr_75354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72806__auto__);
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
var G__75358 = arguments.length;
switch (G__75358) {
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
var c__72804__auto___77551 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72805__auto__ = (function (){var switch__68517__auto__ = (function (state_75384){
var state_val_75385 = (state_75384[(1)]);
if((state_val_75385 === (7))){
var inst_75366 = (state_75384[(7)]);
var inst_75366__$1 = (state_75384[(2)]);
var inst_75367 = (inst_75366__$1 == null);
var inst_75368 = cljs.core.not(inst_75367);
var state_75384__$1 = (function (){var statearr_75388 = state_75384;
(statearr_75388[(7)] = inst_75366__$1);

return statearr_75388;
})();
if(inst_75368){
var statearr_75389_77553 = state_75384__$1;
(statearr_75389_77553[(1)] = (8));

} else {
var statearr_75390_77554 = state_75384__$1;
(statearr_75390_77554[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75385 === (1))){
var inst_75360 = (0);
var state_75384__$1 = (function (){var statearr_75391 = state_75384;
(statearr_75391[(8)] = inst_75360);

return statearr_75391;
})();
var statearr_75392_77556 = state_75384__$1;
(statearr_75392_77556[(2)] = null);

(statearr_75392_77556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75385 === (4))){
var state_75384__$1 = state_75384;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75384__$1,(7),ch);
} else {
if((state_val_75385 === (6))){
var inst_75379 = (state_75384[(2)]);
var state_75384__$1 = state_75384;
var statearr_75394_77559 = state_75384__$1;
(statearr_75394_77559[(2)] = inst_75379);

(statearr_75394_77559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75385 === (3))){
var inst_75381 = (state_75384[(2)]);
var inst_75382 = cljs.core.async.close_BANG_(out);
var state_75384__$1 = (function (){var statearr_75396 = state_75384;
(statearr_75396[(9)] = inst_75381);

return statearr_75396;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_75384__$1,inst_75382);
} else {
if((state_val_75385 === (2))){
var inst_75360 = (state_75384[(8)]);
var inst_75362 = (inst_75360 < n);
var state_75384__$1 = state_75384;
if(cljs.core.truth_(inst_75362)){
var statearr_75397_77565 = state_75384__$1;
(statearr_75397_77565[(1)] = (4));

} else {
var statearr_75398_77566 = state_75384__$1;
(statearr_75398_77566[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75385 === (11))){
var inst_75360 = (state_75384[(8)]);
var inst_75371 = (state_75384[(2)]);
var inst_75372 = (inst_75360 + (1));
var inst_75360__$1 = inst_75372;
var state_75384__$1 = (function (){var statearr_75400 = state_75384;
(statearr_75400[(8)] = inst_75360__$1);

(statearr_75400[(10)] = inst_75371);

return statearr_75400;
})();
var statearr_75401_77568 = state_75384__$1;
(statearr_75401_77568[(2)] = null);

(statearr_75401_77568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75385 === (9))){
var state_75384__$1 = state_75384;
var statearr_75402_77570 = state_75384__$1;
(statearr_75402_77570[(2)] = null);

(statearr_75402_77570[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75385 === (5))){
var state_75384__$1 = state_75384;
var statearr_75404_77571 = state_75384__$1;
(statearr_75404_77571[(2)] = null);

(statearr_75404_77571[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75385 === (10))){
var inst_75376 = (state_75384[(2)]);
var state_75384__$1 = state_75384;
var statearr_75405_77574 = state_75384__$1;
(statearr_75405_77574[(2)] = inst_75376);

(statearr_75405_77574[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75385 === (8))){
var inst_75366 = (state_75384[(7)]);
var state_75384__$1 = state_75384;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75384__$1,(11),out,inst_75366);
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
var cljs$core$async$state_machine__68518__auto__ = null;
var cljs$core$async$state_machine__68518__auto____0 = (function (){
var statearr_75408 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_75408[(0)] = cljs$core$async$state_machine__68518__auto__);

(statearr_75408[(1)] = (1));

return statearr_75408;
});
var cljs$core$async$state_machine__68518__auto____1 = (function (state_75384){
while(true){
var ret_value__68519__auto__ = (function (){try{while(true){
var result__68520__auto__ = switch__68517__auto__(state_75384);
if(cljs.core.keyword_identical_QMARK_(result__68520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68520__auto__;
}
break;
}
}catch (e75409){var ex__68521__auto__ = e75409;
var statearr_75411_77581 = state_75384;
(statearr_75411_77581[(2)] = ex__68521__auto__);


if(cljs.core.seq((state_75384[(4)]))){
var statearr_75412_77583 = state_75384;
(statearr_75412_77583[(1)] = cljs.core.first((state_75384[(4)])));

} else {
throw ex__68521__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__68519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77589 = state_75384;
state_75384 = G__77589;
continue;
} else {
return ret_value__68519__auto__;
}
break;
}
});
cljs$core$async$state_machine__68518__auto__ = function(state_75384){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68518__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68518__auto____1.call(this,state_75384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__68518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68518__auto____0;
cljs$core$async$state_machine__68518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68518__auto____1;
return cljs$core$async$state_machine__68518__auto__;
})()
})();
var state__72806__auto__ = (function (){var statearr_75414 = f__72805__auto__();
(statearr_75414[(6)] = c__72804__auto___77551);

return statearr_75414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72806__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async75417 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async75417 = (function (f,ch,meta75418){
this.f = f;
this.ch = ch;
this.meta75418 = meta75418;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async75417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75419,meta75418__$1){
var self__ = this;
var _75419__$1 = this;
return (new cljs.core.async.t_cljs$core$async75417(self__.f,self__.ch,meta75418__$1));
}));

(cljs.core.async.t_cljs$core$async75417.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75419){
var self__ = this;
var _75419__$1 = this;
return self__.meta75418;
}));

(cljs.core.async.t_cljs$core$async75417.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75417.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async75417.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async75417.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75417.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async75425 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async75425 = (function (f,ch,meta75418,_,fn1,meta75426){
this.f = f;
this.ch = ch;
this.meta75418 = meta75418;
this._ = _;
this.fn1 = fn1;
this.meta75426 = meta75426;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async75425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75427,meta75426__$1){
var self__ = this;
var _75427__$1 = this;
return (new cljs.core.async.t_cljs$core$async75425(self__.f,self__.ch,self__.meta75418,self__._,self__.fn1,meta75426__$1));
}));

(cljs.core.async.t_cljs$core$async75425.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75427){
var self__ = this;
var _75427__$1 = this;
return self__.meta75426;
}));

(cljs.core.async.t_cljs$core$async75425.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75425.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async75425.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async75425.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__75415_SHARP_){
var G__75431 = (((p1__75415_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__75415_SHARP_) : self__.f.call(null,p1__75415_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__75431) : f1.call(null,G__75431));
});
}));

(cljs.core.async.t_cljs$core$async75425.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta75418","meta75418",46908228,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async75417","cljs.core.async/t_cljs$core$async75417",626076691,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta75426","meta75426",1402490100,null)], null);
}));

(cljs.core.async.t_cljs$core$async75425.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async75425.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async75425");

(cljs.core.async.t_cljs$core$async75425.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async75425");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async75425.
 */
cljs.core.async.__GT_t_cljs$core$async75425 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async75425(f__$1,ch__$1,meta75418__$1,___$2,fn1__$1,meta75426){
return (new cljs.core.async.t_cljs$core$async75425(f__$1,ch__$1,meta75418__$1,___$2,fn1__$1,meta75426));
});

}

return (new cljs.core.async.t_cljs$core$async75425(self__.f,self__.ch,self__.meta75418,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__75435 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__75435) : self__.f.call(null,G__75435));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async75417.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75417.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async75417.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta75418","meta75418",46908228,null)], null);
}));

(cljs.core.async.t_cljs$core$async75417.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async75417.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async75417");

(cljs.core.async.t_cljs$core$async75417.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async75417");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async75417.
 */
cljs.core.async.__GT_t_cljs$core$async75417 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async75417(f__$1,ch__$1,meta75418){
return (new cljs.core.async.t_cljs$core$async75417(f__$1,ch__$1,meta75418));
});

}

return (new cljs.core.async.t_cljs$core$async75417(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async75440 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async75440 = (function (f,ch,meta75441){
this.f = f;
this.ch = ch;
this.meta75441 = meta75441;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async75440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75442,meta75441__$1){
var self__ = this;
var _75442__$1 = this;
return (new cljs.core.async.t_cljs$core$async75440(self__.f,self__.ch,meta75441__$1));
}));

(cljs.core.async.t_cljs$core$async75440.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75442){
var self__ = this;
var _75442__$1 = this;
return self__.meta75441;
}));

(cljs.core.async.t_cljs$core$async75440.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75440.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async75440.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75440.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async75440.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75440.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async75440.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta75441","meta75441",-1751258826,null)], null);
}));

(cljs.core.async.t_cljs$core$async75440.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async75440.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async75440");

(cljs.core.async.t_cljs$core$async75440.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async75440");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async75440.
 */
cljs.core.async.__GT_t_cljs$core$async75440 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async75440(f__$1,ch__$1,meta75441){
return (new cljs.core.async.t_cljs$core$async75440(f__$1,ch__$1,meta75441));
});

}

return (new cljs.core.async.t_cljs$core$async75440(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async75451 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async75451 = (function (p,ch,meta75452){
this.p = p;
this.ch = ch;
this.meta75452 = meta75452;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async75451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75453,meta75452__$1){
var self__ = this;
var _75453__$1 = this;
return (new cljs.core.async.t_cljs$core$async75451(self__.p,self__.ch,meta75452__$1));
}));

(cljs.core.async.t_cljs$core$async75451.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75453){
var self__ = this;
var _75453__$1 = this;
return self__.meta75452;
}));

(cljs.core.async.t_cljs$core$async75451.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75451.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async75451.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async75451.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75451.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async75451.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75451.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async75451.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta75452","meta75452",-1083739721,null)], null);
}));

(cljs.core.async.t_cljs$core$async75451.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async75451.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async75451");

(cljs.core.async.t_cljs$core$async75451.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async75451");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async75451.
 */
cljs.core.async.__GT_t_cljs$core$async75451 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async75451(p__$1,ch__$1,meta75452){
return (new cljs.core.async.t_cljs$core$async75451(p__$1,ch__$1,meta75452));
});

}

return (new cljs.core.async.t_cljs$core$async75451(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__75462 = arguments.length;
switch (G__75462) {
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
var c__72804__auto___77684 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72805__auto__ = (function (){var switch__68517__auto__ = (function (state_75486){
var state_val_75487 = (state_75486[(1)]);
if((state_val_75487 === (7))){
var inst_75482 = (state_75486[(2)]);
var state_75486__$1 = state_75486;
var statearr_75489_77687 = state_75486__$1;
(statearr_75489_77687[(2)] = inst_75482);

(statearr_75489_77687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75487 === (1))){
var state_75486__$1 = state_75486;
var statearr_75490_77692 = state_75486__$1;
(statearr_75490_77692[(2)] = null);

(statearr_75490_77692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75487 === (4))){
var inst_75467 = (state_75486[(7)]);
var inst_75467__$1 = (state_75486[(2)]);
var inst_75468 = (inst_75467__$1 == null);
var state_75486__$1 = (function (){var statearr_75492 = state_75486;
(statearr_75492[(7)] = inst_75467__$1);

return statearr_75492;
})();
if(cljs.core.truth_(inst_75468)){
var statearr_75493_77698 = state_75486__$1;
(statearr_75493_77698[(1)] = (5));

} else {
var statearr_75494_77700 = state_75486__$1;
(statearr_75494_77700[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75487 === (6))){
var inst_75467 = (state_75486[(7)]);
var inst_75472 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_75467) : p.call(null,inst_75467));
var state_75486__$1 = state_75486;
if(cljs.core.truth_(inst_75472)){
var statearr_75496_77704 = state_75486__$1;
(statearr_75496_77704[(1)] = (8));

} else {
var statearr_75497_77707 = state_75486__$1;
(statearr_75497_77707[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75487 === (3))){
var inst_75484 = (state_75486[(2)]);
var state_75486__$1 = state_75486;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75486__$1,inst_75484);
} else {
if((state_val_75487 === (2))){
var state_75486__$1 = state_75486;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75486__$1,(4),ch);
} else {
if((state_val_75487 === (11))){
var inst_75476 = (state_75486[(2)]);
var state_75486__$1 = state_75486;
var statearr_75499_77716 = state_75486__$1;
(statearr_75499_77716[(2)] = inst_75476);

(statearr_75499_77716[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75487 === (9))){
var state_75486__$1 = state_75486;
var statearr_75501_77718 = state_75486__$1;
(statearr_75501_77718[(2)] = null);

(statearr_75501_77718[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75487 === (5))){
var inst_75470 = cljs.core.async.close_BANG_(out);
var state_75486__$1 = state_75486;
var statearr_75502_77723 = state_75486__$1;
(statearr_75502_77723[(2)] = inst_75470);

(statearr_75502_77723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75487 === (10))){
var inst_75479 = (state_75486[(2)]);
var state_75486__$1 = (function (){var statearr_75503 = state_75486;
(statearr_75503[(8)] = inst_75479);

return statearr_75503;
})();
var statearr_75504_77725 = state_75486__$1;
(statearr_75504_77725[(2)] = null);

(statearr_75504_77725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75487 === (8))){
var inst_75467 = (state_75486[(7)]);
var state_75486__$1 = state_75486;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75486__$1,(11),out,inst_75467);
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
var cljs$core$async$state_machine__68518__auto__ = null;
var cljs$core$async$state_machine__68518__auto____0 = (function (){
var statearr_75510 = [null,null,null,null,null,null,null,null,null];
(statearr_75510[(0)] = cljs$core$async$state_machine__68518__auto__);

(statearr_75510[(1)] = (1));

return statearr_75510;
});
var cljs$core$async$state_machine__68518__auto____1 = (function (state_75486){
while(true){
var ret_value__68519__auto__ = (function (){try{while(true){
var result__68520__auto__ = switch__68517__auto__(state_75486);
if(cljs.core.keyword_identical_QMARK_(result__68520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68520__auto__;
}
break;
}
}catch (e75511){var ex__68521__auto__ = e75511;
var statearr_75513_77735 = state_75486;
(statearr_75513_77735[(2)] = ex__68521__auto__);


if(cljs.core.seq((state_75486[(4)]))){
var statearr_75514_77737 = state_75486;
(statearr_75514_77737[(1)] = cljs.core.first((state_75486[(4)])));

} else {
throw ex__68521__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__68519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77738 = state_75486;
state_75486 = G__77738;
continue;
} else {
return ret_value__68519__auto__;
}
break;
}
});
cljs$core$async$state_machine__68518__auto__ = function(state_75486){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68518__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68518__auto____1.call(this,state_75486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__68518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68518__auto____0;
cljs$core$async$state_machine__68518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68518__auto____1;
return cljs$core$async$state_machine__68518__auto__;
})()
})();
var state__72806__auto__ = (function (){var statearr_75516 = f__72805__auto__();
(statearr_75516[(6)] = c__72804__auto___77684);

return statearr_75516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72806__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__75521 = arguments.length;
switch (G__75521) {
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
var c__72804__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72805__auto__ = (function (){var switch__68517__auto__ = (function (state_75598){
var state_val_75599 = (state_75598[(1)]);
if((state_val_75599 === (7))){
var inst_75592 = (state_75598[(2)]);
var state_75598__$1 = state_75598;
var statearr_75615_77741 = state_75598__$1;
(statearr_75615_77741[(2)] = inst_75592);

(statearr_75615_77741[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75599 === (20))){
var inst_75560 = (state_75598[(7)]);
var inst_75572 = (state_75598[(2)]);
var inst_75573 = cljs.core.next(inst_75560);
var inst_75545 = inst_75573;
var inst_75546 = null;
var inst_75547 = (0);
var inst_75548 = (0);
var state_75598__$1 = (function (){var statearr_75616 = state_75598;
(statearr_75616[(8)] = inst_75572);

(statearr_75616[(9)] = inst_75546);

(statearr_75616[(10)] = inst_75545);

(statearr_75616[(11)] = inst_75548);

(statearr_75616[(12)] = inst_75547);

return statearr_75616;
})();
var statearr_75617_77744 = state_75598__$1;
(statearr_75617_77744[(2)] = null);

(statearr_75617_77744[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75599 === (1))){
var state_75598__$1 = state_75598;
var statearr_75619_77747 = state_75598__$1;
(statearr_75619_77747[(2)] = null);

(statearr_75619_77747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75599 === (4))){
var inst_75533 = (state_75598[(13)]);
var inst_75533__$1 = (state_75598[(2)]);
var inst_75534 = (inst_75533__$1 == null);
var state_75598__$1 = (function (){var statearr_75620 = state_75598;
(statearr_75620[(13)] = inst_75533__$1);

return statearr_75620;
})();
if(cljs.core.truth_(inst_75534)){
var statearr_75622_77748 = state_75598__$1;
(statearr_75622_77748[(1)] = (5));

} else {
var statearr_75623_77749 = state_75598__$1;
(statearr_75623_77749[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75599 === (15))){
var state_75598__$1 = state_75598;
var statearr_75627_77751 = state_75598__$1;
(statearr_75627_77751[(2)] = null);

(statearr_75627_77751[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75599 === (21))){
var state_75598__$1 = state_75598;
var statearr_75629_77754 = state_75598__$1;
(statearr_75629_77754[(2)] = null);

(statearr_75629_77754[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75599 === (13))){
var inst_75546 = (state_75598[(9)]);
var inst_75545 = (state_75598[(10)]);
var inst_75548 = (state_75598[(11)]);
var inst_75547 = (state_75598[(12)]);
var inst_75555 = (state_75598[(2)]);
var inst_75556 = (inst_75548 + (1));
var tmp75624 = inst_75546;
var tmp75625 = inst_75545;
var tmp75626 = inst_75547;
var inst_75545__$1 = tmp75625;
var inst_75546__$1 = tmp75624;
var inst_75547__$1 = tmp75626;
var inst_75548__$1 = inst_75556;
var state_75598__$1 = (function (){var statearr_75631 = state_75598;
(statearr_75631[(9)] = inst_75546__$1);

(statearr_75631[(14)] = inst_75555);

(statearr_75631[(10)] = inst_75545__$1);

(statearr_75631[(11)] = inst_75548__$1);

(statearr_75631[(12)] = inst_75547__$1);

return statearr_75631;
})();
var statearr_75634_77758 = state_75598__$1;
(statearr_75634_77758[(2)] = null);

(statearr_75634_77758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75599 === (22))){
var state_75598__$1 = state_75598;
var statearr_75635_77760 = state_75598__$1;
(statearr_75635_77760[(2)] = null);

(statearr_75635_77760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75599 === (6))){
var inst_75533 = (state_75598[(13)]);
var inst_75543 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_75533) : f.call(null,inst_75533));
var inst_75544 = cljs.core.seq(inst_75543);
var inst_75545 = inst_75544;
var inst_75546 = null;
var inst_75547 = (0);
var inst_75548 = (0);
var state_75598__$1 = (function (){var statearr_75637 = state_75598;
(statearr_75637[(9)] = inst_75546);

(statearr_75637[(10)] = inst_75545);

(statearr_75637[(11)] = inst_75548);

(statearr_75637[(12)] = inst_75547);

return statearr_75637;
})();
var statearr_75638_77766 = state_75598__$1;
(statearr_75638_77766[(2)] = null);

(statearr_75638_77766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75599 === (17))){
var inst_75560 = (state_75598[(7)]);
var inst_75565 = cljs.core.chunk_first(inst_75560);
var inst_75566 = cljs.core.chunk_rest(inst_75560);
var inst_75567 = cljs.core.count(inst_75565);
var inst_75545 = inst_75566;
var inst_75546 = inst_75565;
var inst_75547 = inst_75567;
var inst_75548 = (0);
var state_75598__$1 = (function (){var statearr_75640 = state_75598;
(statearr_75640[(9)] = inst_75546);

(statearr_75640[(10)] = inst_75545);

(statearr_75640[(11)] = inst_75548);

(statearr_75640[(12)] = inst_75547);

return statearr_75640;
})();
var statearr_75642_77767 = state_75598__$1;
(statearr_75642_77767[(2)] = null);

(statearr_75642_77767[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75599 === (3))){
var inst_75594 = (state_75598[(2)]);
var state_75598__$1 = state_75598;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75598__$1,inst_75594);
} else {
if((state_val_75599 === (12))){
var inst_75581 = (state_75598[(2)]);
var state_75598__$1 = state_75598;
var statearr_75646_77771 = state_75598__$1;
(statearr_75646_77771[(2)] = inst_75581);

(statearr_75646_77771[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75599 === (2))){
var state_75598__$1 = state_75598;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75598__$1,(4),in$);
} else {
if((state_val_75599 === (23))){
var inst_75590 = (state_75598[(2)]);
var state_75598__$1 = state_75598;
var statearr_75649_77776 = state_75598__$1;
(statearr_75649_77776[(2)] = inst_75590);

(statearr_75649_77776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75599 === (19))){
var inst_75576 = (state_75598[(2)]);
var state_75598__$1 = state_75598;
var statearr_75650_77777 = state_75598__$1;
(statearr_75650_77777[(2)] = inst_75576);

(statearr_75650_77777[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75599 === (11))){
var inst_75545 = (state_75598[(10)]);
var inst_75560 = (state_75598[(7)]);
var inst_75560__$1 = cljs.core.seq(inst_75545);
var state_75598__$1 = (function (){var statearr_75652 = state_75598;
(statearr_75652[(7)] = inst_75560__$1);

return statearr_75652;
})();
if(inst_75560__$1){
var statearr_75653_77778 = state_75598__$1;
(statearr_75653_77778[(1)] = (14));

} else {
var statearr_75654_77779 = state_75598__$1;
(statearr_75654_77779[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75599 === (9))){
var inst_75584 = (state_75598[(2)]);
var inst_75585 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_75598__$1 = (function (){var statearr_75656 = state_75598;
(statearr_75656[(15)] = inst_75584);

return statearr_75656;
})();
if(cljs.core.truth_(inst_75585)){
var statearr_75657_77783 = state_75598__$1;
(statearr_75657_77783[(1)] = (21));

} else {
var statearr_75658_77785 = state_75598__$1;
(statearr_75658_77785[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75599 === (5))){
var inst_75536 = cljs.core.async.close_BANG_(out);
var state_75598__$1 = state_75598;
var statearr_75659_77786 = state_75598__$1;
(statearr_75659_77786[(2)] = inst_75536);

(statearr_75659_77786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75599 === (14))){
var inst_75560 = (state_75598[(7)]);
var inst_75563 = cljs.core.chunked_seq_QMARK_(inst_75560);
var state_75598__$1 = state_75598;
if(inst_75563){
var statearr_75663_77789 = state_75598__$1;
(statearr_75663_77789[(1)] = (17));

} else {
var statearr_75664_77791 = state_75598__$1;
(statearr_75664_77791[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75599 === (16))){
var inst_75579 = (state_75598[(2)]);
var state_75598__$1 = state_75598;
var statearr_75665_77794 = state_75598__$1;
(statearr_75665_77794[(2)] = inst_75579);

(statearr_75665_77794[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75599 === (10))){
var inst_75546 = (state_75598[(9)]);
var inst_75548 = (state_75598[(11)]);
var inst_75553 = cljs.core._nth(inst_75546,inst_75548);
var state_75598__$1 = state_75598;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75598__$1,(13),out,inst_75553);
} else {
if((state_val_75599 === (18))){
var inst_75560 = (state_75598[(7)]);
var inst_75570 = cljs.core.first(inst_75560);
var state_75598__$1 = state_75598;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75598__$1,(20),out,inst_75570);
} else {
if((state_val_75599 === (8))){
var inst_75548 = (state_75598[(11)]);
var inst_75547 = (state_75598[(12)]);
var inst_75550 = (inst_75548 < inst_75547);
var inst_75551 = inst_75550;
var state_75598__$1 = state_75598;
if(cljs.core.truth_(inst_75551)){
var statearr_75672_77799 = state_75598__$1;
(statearr_75672_77799[(1)] = (10));

} else {
var statearr_75674_77802 = state_75598__$1;
(statearr_75674_77802[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__68518__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__68518__auto____0 = (function (){
var statearr_75679 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75679[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__68518__auto__);

(statearr_75679[(1)] = (1));

return statearr_75679;
});
var cljs$core$async$mapcat_STAR__$_state_machine__68518__auto____1 = (function (state_75598){
while(true){
var ret_value__68519__auto__ = (function (){try{while(true){
var result__68520__auto__ = switch__68517__auto__(state_75598);
if(cljs.core.keyword_identical_QMARK_(result__68520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68520__auto__;
}
break;
}
}catch (e75683){var ex__68521__auto__ = e75683;
var statearr_75684_77803 = state_75598;
(statearr_75684_77803[(2)] = ex__68521__auto__);


if(cljs.core.seq((state_75598[(4)]))){
var statearr_75686_77804 = state_75598;
(statearr_75686_77804[(1)] = cljs.core.first((state_75598[(4)])));

} else {
throw ex__68521__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__68519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77808 = state_75598;
state_75598 = G__77808;
continue;
} else {
return ret_value__68519__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__68518__auto__ = function(state_75598){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__68518__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__68518__auto____1.call(this,state_75598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__68518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__68518__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__68518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__68518__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__68518__auto__;
})()
})();
var state__72806__auto__ = (function (){var statearr_75690 = f__72805__auto__();
(statearr_75690[(6)] = c__72804__auto__);

return statearr_75690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72806__auto__);
}));

return c__72804__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__75693 = arguments.length;
switch (G__75693) {
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
var G__75702 = arguments.length;
switch (G__75702) {
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
var G__75713 = arguments.length;
switch (G__75713) {
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
var c__72804__auto___77821 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72805__auto__ = (function (){var switch__68517__auto__ = (function (state_75743){
var state_val_75745 = (state_75743[(1)]);
if((state_val_75745 === (7))){
var inst_75736 = (state_75743[(2)]);
var state_75743__$1 = state_75743;
var statearr_75747_77825 = state_75743__$1;
(statearr_75747_77825[(2)] = inst_75736);

(statearr_75747_77825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75745 === (1))){
var inst_75718 = null;
var state_75743__$1 = (function (){var statearr_75748 = state_75743;
(statearr_75748[(7)] = inst_75718);

return statearr_75748;
})();
var statearr_75749_77827 = state_75743__$1;
(statearr_75749_77827[(2)] = null);

(statearr_75749_77827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75745 === (4))){
var inst_75721 = (state_75743[(8)]);
var inst_75721__$1 = (state_75743[(2)]);
var inst_75722 = (inst_75721__$1 == null);
var inst_75723 = cljs.core.not(inst_75722);
var state_75743__$1 = (function (){var statearr_75751 = state_75743;
(statearr_75751[(8)] = inst_75721__$1);

return statearr_75751;
})();
if(inst_75723){
var statearr_75752_77829 = state_75743__$1;
(statearr_75752_77829[(1)] = (5));

} else {
var statearr_75753_77831 = state_75743__$1;
(statearr_75753_77831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75745 === (6))){
var state_75743__$1 = state_75743;
var statearr_75754_77832 = state_75743__$1;
(statearr_75754_77832[(2)] = null);

(statearr_75754_77832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75745 === (3))){
var inst_75738 = (state_75743[(2)]);
var inst_75740 = cljs.core.async.close_BANG_(out);
var state_75743__$1 = (function (){var statearr_75758 = state_75743;
(statearr_75758[(9)] = inst_75738);

return statearr_75758;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_75743__$1,inst_75740);
} else {
if((state_val_75745 === (2))){
var state_75743__$1 = state_75743;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75743__$1,(4),ch);
} else {
if((state_val_75745 === (11))){
var inst_75721 = (state_75743[(8)]);
var inst_75730 = (state_75743[(2)]);
var inst_75718 = inst_75721;
var state_75743__$1 = (function (){var statearr_75763 = state_75743;
(statearr_75763[(7)] = inst_75718);

(statearr_75763[(10)] = inst_75730);

return statearr_75763;
})();
var statearr_75764_77839 = state_75743__$1;
(statearr_75764_77839[(2)] = null);

(statearr_75764_77839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75745 === (9))){
var inst_75721 = (state_75743[(8)]);
var state_75743__$1 = state_75743;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75743__$1,(11),out,inst_75721);
} else {
if((state_val_75745 === (5))){
var inst_75718 = (state_75743[(7)]);
var inst_75721 = (state_75743[(8)]);
var inst_75725 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_75721,inst_75718);
var state_75743__$1 = state_75743;
if(inst_75725){
var statearr_75767_77844 = state_75743__$1;
(statearr_75767_77844[(1)] = (8));

} else {
var statearr_75768_77845 = state_75743__$1;
(statearr_75768_77845[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75745 === (10))){
var inst_75733 = (state_75743[(2)]);
var state_75743__$1 = state_75743;
var statearr_75769_77846 = state_75743__$1;
(statearr_75769_77846[(2)] = inst_75733);

(statearr_75769_77846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75745 === (8))){
var inst_75718 = (state_75743[(7)]);
var tmp75765 = inst_75718;
var inst_75718__$1 = tmp75765;
var state_75743__$1 = (function (){var statearr_75771 = state_75743;
(statearr_75771[(7)] = inst_75718__$1);

return statearr_75771;
})();
var statearr_75772_77848 = state_75743__$1;
(statearr_75772_77848[(2)] = null);

(statearr_75772_77848[(1)] = (2));


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
var cljs$core$async$state_machine__68518__auto__ = null;
var cljs$core$async$state_machine__68518__auto____0 = (function (){
var statearr_75775 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_75775[(0)] = cljs$core$async$state_machine__68518__auto__);

(statearr_75775[(1)] = (1));

return statearr_75775;
});
var cljs$core$async$state_machine__68518__auto____1 = (function (state_75743){
while(true){
var ret_value__68519__auto__ = (function (){try{while(true){
var result__68520__auto__ = switch__68517__auto__(state_75743);
if(cljs.core.keyword_identical_QMARK_(result__68520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68520__auto__;
}
break;
}
}catch (e75776){var ex__68521__auto__ = e75776;
var statearr_75777_77849 = state_75743;
(statearr_75777_77849[(2)] = ex__68521__auto__);


if(cljs.core.seq((state_75743[(4)]))){
var statearr_75778_77851 = state_75743;
(statearr_75778_77851[(1)] = cljs.core.first((state_75743[(4)])));

} else {
throw ex__68521__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__68519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77855 = state_75743;
state_75743 = G__77855;
continue;
} else {
return ret_value__68519__auto__;
}
break;
}
});
cljs$core$async$state_machine__68518__auto__ = function(state_75743){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68518__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68518__auto____1.call(this,state_75743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__68518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68518__auto____0;
cljs$core$async$state_machine__68518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68518__auto____1;
return cljs$core$async$state_machine__68518__auto__;
})()
})();
var state__72806__auto__ = (function (){var statearr_75780 = f__72805__auto__();
(statearr_75780[(6)] = c__72804__auto___77821);

return statearr_75780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72806__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__75785 = arguments.length;
switch (G__75785) {
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
var c__72804__auto___77859 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72805__auto__ = (function (){var switch__68517__auto__ = (function (state_75828){
var state_val_75829 = (state_75828[(1)]);
if((state_val_75829 === (7))){
var inst_75824 = (state_75828[(2)]);
var state_75828__$1 = state_75828;
var statearr_75833_77861 = state_75828__$1;
(statearr_75833_77861[(2)] = inst_75824);

(statearr_75833_77861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75829 === (1))){
var inst_75789 = (new Array(n));
var inst_75791 = inst_75789;
var inst_75792 = (0);
var state_75828__$1 = (function (){var statearr_75835 = state_75828;
(statearr_75835[(7)] = inst_75792);

(statearr_75835[(8)] = inst_75791);

return statearr_75835;
})();
var statearr_75836_77864 = state_75828__$1;
(statearr_75836_77864[(2)] = null);

(statearr_75836_77864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75829 === (4))){
var inst_75795 = (state_75828[(9)]);
var inst_75795__$1 = (state_75828[(2)]);
var inst_75796 = (inst_75795__$1 == null);
var inst_75797 = cljs.core.not(inst_75796);
var state_75828__$1 = (function (){var statearr_75838 = state_75828;
(statearr_75838[(9)] = inst_75795__$1);

return statearr_75838;
})();
if(inst_75797){
var statearr_75839_77867 = state_75828__$1;
(statearr_75839_77867[(1)] = (5));

} else {
var statearr_75840_77869 = state_75828__$1;
(statearr_75840_77869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75829 === (15))){
var inst_75818 = (state_75828[(2)]);
var state_75828__$1 = state_75828;
var statearr_75841_77871 = state_75828__$1;
(statearr_75841_77871[(2)] = inst_75818);

(statearr_75841_77871[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75829 === (13))){
var state_75828__$1 = state_75828;
var statearr_75843_77872 = state_75828__$1;
(statearr_75843_77872[(2)] = null);

(statearr_75843_77872[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75829 === (6))){
var inst_75792 = (state_75828[(7)]);
var inst_75814 = (inst_75792 > (0));
var state_75828__$1 = state_75828;
if(cljs.core.truth_(inst_75814)){
var statearr_75844_77873 = state_75828__$1;
(statearr_75844_77873[(1)] = (12));

} else {
var statearr_75845_77874 = state_75828__$1;
(statearr_75845_77874[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75829 === (3))){
var inst_75826 = (state_75828[(2)]);
var state_75828__$1 = state_75828;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75828__$1,inst_75826);
} else {
if((state_val_75829 === (12))){
var inst_75791 = (state_75828[(8)]);
var inst_75816 = cljs.core.vec(inst_75791);
var state_75828__$1 = state_75828;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75828__$1,(15),out,inst_75816);
} else {
if((state_val_75829 === (2))){
var state_75828__$1 = state_75828;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75828__$1,(4),ch);
} else {
if((state_val_75829 === (11))){
var inst_75807 = (state_75828[(2)]);
var inst_75808 = (new Array(n));
var inst_75791 = inst_75808;
var inst_75792 = (0);
var state_75828__$1 = (function (){var statearr_75848 = state_75828;
(statearr_75848[(7)] = inst_75792);

(statearr_75848[(8)] = inst_75791);

(statearr_75848[(10)] = inst_75807);

return statearr_75848;
})();
var statearr_75849_77876 = state_75828__$1;
(statearr_75849_77876[(2)] = null);

(statearr_75849_77876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75829 === (9))){
var inst_75791 = (state_75828[(8)]);
var inst_75805 = cljs.core.vec(inst_75791);
var state_75828__$1 = state_75828;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75828__$1,(11),out,inst_75805);
} else {
if((state_val_75829 === (5))){
var inst_75792 = (state_75828[(7)]);
var inst_75791 = (state_75828[(8)]);
var inst_75800 = (state_75828[(11)]);
var inst_75795 = (state_75828[(9)]);
var inst_75799 = (inst_75791[inst_75792] = inst_75795);
var inst_75800__$1 = (inst_75792 + (1));
var inst_75801 = (inst_75800__$1 < n);
var state_75828__$1 = (function (){var statearr_75851 = state_75828;
(statearr_75851[(12)] = inst_75799);

(statearr_75851[(11)] = inst_75800__$1);

return statearr_75851;
})();
if(cljs.core.truth_(inst_75801)){
var statearr_75852_77882 = state_75828__$1;
(statearr_75852_77882[(1)] = (8));

} else {
var statearr_75853_77884 = state_75828__$1;
(statearr_75853_77884[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75829 === (14))){
var inst_75821 = (state_75828[(2)]);
var inst_75822 = cljs.core.async.close_BANG_(out);
var state_75828__$1 = (function (){var statearr_75855 = state_75828;
(statearr_75855[(13)] = inst_75821);

return statearr_75855;
})();
var statearr_75856_77886 = state_75828__$1;
(statearr_75856_77886[(2)] = inst_75822);

(statearr_75856_77886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75829 === (10))){
var inst_75811 = (state_75828[(2)]);
var state_75828__$1 = state_75828;
var statearr_75857_77889 = state_75828__$1;
(statearr_75857_77889[(2)] = inst_75811);

(statearr_75857_77889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75829 === (8))){
var inst_75791 = (state_75828[(8)]);
var inst_75800 = (state_75828[(11)]);
var tmp75854 = inst_75791;
var inst_75791__$1 = tmp75854;
var inst_75792 = inst_75800;
var state_75828__$1 = (function (){var statearr_75863 = state_75828;
(statearr_75863[(7)] = inst_75792);

(statearr_75863[(8)] = inst_75791__$1);

return statearr_75863;
})();
var statearr_75866_77892 = state_75828__$1;
(statearr_75866_77892[(2)] = null);

(statearr_75866_77892[(1)] = (2));


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
var cljs$core$async$state_machine__68518__auto__ = null;
var cljs$core$async$state_machine__68518__auto____0 = (function (){
var statearr_75867 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75867[(0)] = cljs$core$async$state_machine__68518__auto__);

(statearr_75867[(1)] = (1));

return statearr_75867;
});
var cljs$core$async$state_machine__68518__auto____1 = (function (state_75828){
while(true){
var ret_value__68519__auto__ = (function (){try{while(true){
var result__68520__auto__ = switch__68517__auto__(state_75828);
if(cljs.core.keyword_identical_QMARK_(result__68520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68520__auto__;
}
break;
}
}catch (e75868){var ex__68521__auto__ = e75868;
var statearr_75869_77893 = state_75828;
(statearr_75869_77893[(2)] = ex__68521__auto__);


if(cljs.core.seq((state_75828[(4)]))){
var statearr_75871_77894 = state_75828;
(statearr_75871_77894[(1)] = cljs.core.first((state_75828[(4)])));

} else {
throw ex__68521__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__68519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77897 = state_75828;
state_75828 = G__77897;
continue;
} else {
return ret_value__68519__auto__;
}
break;
}
});
cljs$core$async$state_machine__68518__auto__ = function(state_75828){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68518__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68518__auto____1.call(this,state_75828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__68518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68518__auto____0;
cljs$core$async$state_machine__68518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68518__auto____1;
return cljs$core$async$state_machine__68518__auto__;
})()
})();
var state__72806__auto__ = (function (){var statearr_75873 = f__72805__auto__();
(statearr_75873[(6)] = c__72804__auto___77859);

return statearr_75873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72806__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__75883 = arguments.length;
switch (G__75883) {
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
var c__72804__auto___77910 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__72805__auto__ = (function (){var switch__68517__auto__ = (function (state_75938){
var state_val_75939 = (state_75938[(1)]);
if((state_val_75939 === (7))){
var inst_75934 = (state_75938[(2)]);
var state_75938__$1 = state_75938;
var statearr_75940_77914 = state_75938__$1;
(statearr_75940_77914[(2)] = inst_75934);

(statearr_75940_77914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75939 === (1))){
var inst_75890 = [];
var inst_75891 = inst_75890;
var inst_75892 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_75938__$1 = (function (){var statearr_75941 = state_75938;
(statearr_75941[(7)] = inst_75891);

(statearr_75941[(8)] = inst_75892);

return statearr_75941;
})();
var statearr_75943_77920 = state_75938__$1;
(statearr_75943_77920[(2)] = null);

(statearr_75943_77920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75939 === (4))){
var inst_75895 = (state_75938[(9)]);
var inst_75895__$1 = (state_75938[(2)]);
var inst_75896 = (inst_75895__$1 == null);
var inst_75897 = cljs.core.not(inst_75896);
var state_75938__$1 = (function (){var statearr_75944 = state_75938;
(statearr_75944[(9)] = inst_75895__$1);

return statearr_75944;
})();
if(inst_75897){
var statearr_75945_77921 = state_75938__$1;
(statearr_75945_77921[(1)] = (5));

} else {
var statearr_75946_77922 = state_75938__$1;
(statearr_75946_77922[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75939 === (15))){
var inst_75928 = (state_75938[(2)]);
var state_75938__$1 = state_75938;
var statearr_75948_77923 = state_75938__$1;
(statearr_75948_77923[(2)] = inst_75928);

(statearr_75948_77923[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75939 === (13))){
var state_75938__$1 = state_75938;
var statearr_75949_77925 = state_75938__$1;
(statearr_75949_77925[(2)] = null);

(statearr_75949_77925[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75939 === (6))){
var inst_75891 = (state_75938[(7)]);
var inst_75920 = inst_75891.length;
var inst_75921 = (inst_75920 > (0));
var state_75938__$1 = state_75938;
if(cljs.core.truth_(inst_75921)){
var statearr_75952_77928 = state_75938__$1;
(statearr_75952_77928[(1)] = (12));

} else {
var statearr_75953_77929 = state_75938__$1;
(statearr_75953_77929[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75939 === (3))){
var inst_75936 = (state_75938[(2)]);
var state_75938__$1 = state_75938;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75938__$1,inst_75936);
} else {
if((state_val_75939 === (12))){
var inst_75891 = (state_75938[(7)]);
var inst_75926 = cljs.core.vec(inst_75891);
var state_75938__$1 = state_75938;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75938__$1,(15),out,inst_75926);
} else {
if((state_val_75939 === (2))){
var state_75938__$1 = state_75938;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75938__$1,(4),ch);
} else {
if((state_val_75939 === (11))){
var inst_75902 = (state_75938[(10)]);
var inst_75895 = (state_75938[(9)]);
var inst_75913 = (state_75938[(2)]);
var inst_75914 = [];
var inst_75915 = inst_75914.push(inst_75895);
var inst_75891 = inst_75914;
var inst_75892 = inst_75902;
var state_75938__$1 = (function (){var statearr_75958 = state_75938;
(statearr_75958[(11)] = inst_75915);

(statearr_75958[(7)] = inst_75891);

(statearr_75958[(12)] = inst_75913);

(statearr_75958[(8)] = inst_75892);

return statearr_75958;
})();
var statearr_75960_77930 = state_75938__$1;
(statearr_75960_77930[(2)] = null);

(statearr_75960_77930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75939 === (9))){
var inst_75891 = (state_75938[(7)]);
var inst_75911 = cljs.core.vec(inst_75891);
var state_75938__$1 = state_75938;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75938__$1,(11),out,inst_75911);
} else {
if((state_val_75939 === (5))){
var inst_75902 = (state_75938[(10)]);
var inst_75895 = (state_75938[(9)]);
var inst_75892 = (state_75938[(8)]);
var inst_75902__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_75895) : f.call(null,inst_75895));
var inst_75903 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_75902__$1,inst_75892);
var inst_75904 = cljs.core.keyword_identical_QMARK_(inst_75892,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_75905 = ((inst_75903) || (inst_75904));
var state_75938__$1 = (function (){var statearr_75963 = state_75938;
(statearr_75963[(10)] = inst_75902__$1);

return statearr_75963;
})();
if(cljs.core.truth_(inst_75905)){
var statearr_75964_77945 = state_75938__$1;
(statearr_75964_77945[(1)] = (8));

} else {
var statearr_75965_77946 = state_75938__$1;
(statearr_75965_77946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75939 === (14))){
var inst_75931 = (state_75938[(2)]);
var inst_75932 = cljs.core.async.close_BANG_(out);
var state_75938__$1 = (function (){var statearr_75969 = state_75938;
(statearr_75969[(13)] = inst_75931);

return statearr_75969;
})();
var statearr_75970_77947 = state_75938__$1;
(statearr_75970_77947[(2)] = inst_75932);

(statearr_75970_77947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75939 === (10))){
var inst_75918 = (state_75938[(2)]);
var state_75938__$1 = state_75938;
var statearr_75975_77949 = state_75938__$1;
(statearr_75975_77949[(2)] = inst_75918);

(statearr_75975_77949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75939 === (8))){
var inst_75891 = (state_75938[(7)]);
var inst_75902 = (state_75938[(10)]);
var inst_75895 = (state_75938[(9)]);
var inst_75908 = inst_75891.push(inst_75895);
var tmp75967 = inst_75891;
var inst_75891__$1 = tmp75967;
var inst_75892 = inst_75902;
var state_75938__$1 = (function (){var statearr_75976 = state_75938;
(statearr_75976[(14)] = inst_75908);

(statearr_75976[(7)] = inst_75891__$1);

(statearr_75976[(8)] = inst_75892);

return statearr_75976;
})();
var statearr_75977_77955 = state_75938__$1;
(statearr_75977_77955[(2)] = null);

(statearr_75977_77955[(1)] = (2));


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
var cljs$core$async$state_machine__68518__auto__ = null;
var cljs$core$async$state_machine__68518__auto____0 = (function (){
var statearr_75978 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75978[(0)] = cljs$core$async$state_machine__68518__auto__);

(statearr_75978[(1)] = (1));

return statearr_75978;
});
var cljs$core$async$state_machine__68518__auto____1 = (function (state_75938){
while(true){
var ret_value__68519__auto__ = (function (){try{while(true){
var result__68520__auto__ = switch__68517__auto__(state_75938);
if(cljs.core.keyword_identical_QMARK_(result__68520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68520__auto__;
}
break;
}
}catch (e75979){var ex__68521__auto__ = e75979;
var statearr_75980_77960 = state_75938;
(statearr_75980_77960[(2)] = ex__68521__auto__);


if(cljs.core.seq((state_75938[(4)]))){
var statearr_75984_77961 = state_75938;
(statearr_75984_77961[(1)] = cljs.core.first((state_75938[(4)])));

} else {
throw ex__68521__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__68519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77964 = state_75938;
state_75938 = G__77964;
continue;
} else {
return ret_value__68519__auto__;
}
break;
}
});
cljs$core$async$state_machine__68518__auto__ = function(state_75938){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68518__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68518__auto____1.call(this,state_75938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__68518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68518__auto____0;
cljs$core$async$state_machine__68518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68518__auto____1;
return cljs$core$async$state_machine__68518__auto__;
})()
})();
var state__72806__auto__ = (function (){var statearr_75988 = f__72805__auto__();
(statearr_75988[(6)] = c__72804__auto___77910);

return statearr_75988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__72806__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
