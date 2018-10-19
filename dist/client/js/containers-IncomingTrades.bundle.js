(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{243:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"Loading",function(){return Loading}),__webpack_require__.d(__webpack_exports__,"Failure",function(){return Failure}),__webpack_require__.d(__webpack_exports__,"Success",function(){return Success});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),_hocs_withAuth__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(88),_hocs_withFetch__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(456),react_redux__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(89),redux__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(43),_redux_actions__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(69),_redux_actions_incomingTrades__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(56),react_helmet__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(455),react_helmet__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_8__),_components_AccountHeader__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(453),_hocs_PaginatedList__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(459),_components_IncomingTrade__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(488),_components_RedirectToLanding__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(147),_components_Warning__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(458),_styles_components_Loading__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(68);function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,_){if(!(e instanceof _))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,_){for(var t=0;t<_.length;t++){var r=_[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,_,t){return _&&_defineProperties(e.prototype,_),t&&_defineProperties(e,t),e}function _possibleConstructorReturn(e,_){return!_||"object"!==_typeof(_)&&"function"!=typeof _?_assertThisInitialized(e):_}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,_){if("function"!=typeof _&&null!==_)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(_&&_.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),_&&_setPrototypeOf(e,_)}function _setPrototypeOf(e,_){return(_setPrototypeOf=Object.setPrototypeOf||function(e,_){return e.__proto__=_,e})(e,_)}!function(){var e=__webpack_require__(1).enterModule;e&&e(module)}();var Loading=function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_components_Loading__WEBPACK_IMPORTED_MODULE_14__.b,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_components_Loading__WEBPACK_IMPORTED_MODULE_14__.j,null))},Failure=function(e){var _=e.error,t=e.reset;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Warning__WEBPACK_IMPORTED_MODULE_13__.a,{error:_,reset:t})};Failure.propTypes={error:prop_types__WEBPACK_IMPORTED_MODULE_1__.object,reset:prop_types__WEBPACK_IMPORTED_MODULE_1__.func};var Success=function(e){var _=e.response,t=e.acceptTrade,r=e.declineTrade,n=e.fetch,a=e.count,o=e.limit,c=e.skip;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hocs_PaginatedList__WEBPACK_IMPORTED_MODULE_10__.a,{response:_,fetch:n,count:a,limit:o,skip:c},function(e){var _=e._id,n=e.createdAt,a=e.from,o=e.bookToGive,c=e.bookToGet;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_IncomingTrade__WEBPACK_IMPORTED_MODULE_11__.a,{key:_,_id:_,createdAt:n,from:a,bookToGive:o,bookToGet:c,acceptTrade:t,declineTrade:r})})};Success.propTypes={response:prop_types__WEBPACK_IMPORTED_MODULE_1__.array,acceptTrade:prop_types__WEBPACK_IMPORTED_MODULE_1__.func,declineTrade:prop_types__WEBPACK_IMPORTED_MODULE_1__.func,fetch:prop_types__WEBPACK_IMPORTED_MODULE_1__.func,count:prop_types__WEBPACK_IMPORTED_MODULE_1__.number,limit:prop_types__WEBPACK_IMPORTED_MODULE_1__.number,skip:prop_types__WEBPACK_IMPORTED_MODULE_1__.number};var mapStateToProps=function(e){return{response:e.incomingTrades.response,error:e.incomingTrades.error,isLoading:e.incomingTrades.isLoading,count:e.incomingTrades.count,limit:e.incomingTrades.limit,skip:e.incomingTrades.skip}},mapDispatchToProps=function(e){return{fetch:function(_){return e(_redux_actions_incomingTrades__WEBPACK_IMPORTED_MODULE_7__.a.async.getAll(_))},reset:function(){return e(_redux_actions__WEBPACK_IMPORTED_MODULE_6__.a.creators.resetStore())},acceptTrade:function(_){return e(_redux_actions_incomingTrades__WEBPACK_IMPORTED_MODULE_7__.a.async.acceptTrade(_))},declineTrade:function(_){return e(_redux_actions_incomingTrades__WEBPACK_IMPORTED_MODULE_7__.a.async.declineTrade(_))}}},withConnect=Object(react_redux__WEBPACK_IMPORTED_MODULE_4__.b)(mapStateToProps,mapDispatchToProps),ConnectedIncomingTrades=Object(redux__WEBPACK_IMPORTED_MODULE_5__.d)(withConnect,_hocs_withFetch__WEBPACK_IMPORTED_MODULE_3__.a)({Success:Success,Loading:Loading,Failure:Failure}),IncomingTradesContainer=function(_React$Component){function IncomingTradesContainer(){return _classCallCheck(this,IncomingTradesContainer),_possibleConstructorReturn(this,_getPrototypeOf(IncomingTradesContainer).apply(this,arguments))}return _inherits(IncomingTradesContainer,_React$Component),_createClass(IncomingTradesContainer,[{key:"renderHead",value:function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_8__.Helmet,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title",null,"Incoming trades"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{property:"og:title",content:"Incoming trades"}))}},{key:"renderBody",value:function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AccountHeader__WEBPACK_IMPORTED_MODULE_9__.a,{title:"Manage your incoming trades"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ConnectedIncomingTrades,this.props))}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,this.renderHead(),this.renderBody())}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),IncomingTradesContainer}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component),_default=Object(_hocs_withAuth__WEBPACK_IMPORTED_MODULE_2__.a)({Auth:IncomingTradesContainer,Unauth:_components_RedirectToLanding__WEBPACK_IMPORTED_MODULE_12__.a});__webpack_exports__.default=_default,function(){var e=__webpack_require__(1).default,_=__webpack_require__(1).leaveModule;e&&(e.register(Loading,"Loading","C:\\Users\\Steve\\Desktop\\JavaScript\\FCC-Backend\\Book-Trading-App\\src\\client\\containers\\IncomingTrades.js"),e.register(Failure,"Failure","C:\\Users\\Steve\\Desktop\\JavaScript\\FCC-Backend\\Book-Trading-App\\src\\client\\containers\\IncomingTrades.js"),e.register(Success,"Success","C:\\Users\\Steve\\Desktop\\JavaScript\\FCC-Backend\\Book-Trading-App\\src\\client\\containers\\IncomingTrades.js"),e.register(mapStateToProps,"mapStateToProps","C:\\Users\\Steve\\Desktop\\JavaScript\\FCC-Backend\\Book-Trading-App\\src\\client\\containers\\IncomingTrades.js"),e.register(mapDispatchToProps,"mapDispatchToProps","C:\\Users\\Steve\\Desktop\\JavaScript\\FCC-Backend\\Book-Trading-App\\src\\client\\containers\\IncomingTrades.js"),e.register(withConnect,"withConnect","C:\\Users\\Steve\\Desktop\\JavaScript\\FCC-Backend\\Book-Trading-App\\src\\client\\containers\\IncomingTrades.js"),e.register(ConnectedIncomingTrades,"ConnectedIncomingTrades","C:\\Users\\Steve\\Desktop\\JavaScript\\FCC-Backend\\Book-Trading-App\\src\\client\\containers\\IncomingTrades.js"),e.register(IncomingTradesContainer,"IncomingTradesContainer","C:\\Users\\Steve\\Desktop\\JavaScript\\FCC-Backend\\Book-Trading-App\\src\\client\\containers\\IncomingTrades.js"),e.register(_default,"default","C:\\Users\\Steve\\Desktop\\JavaScript\\FCC-Backend\\Book-Trading-App\\src\\client\\containers\\IncomingTrades.js"),_(module))}()}.call(this,__webpack_require__(7)(module))},488:function(e,_,t){"use strict";(function(e){var r=t(0),n=t.n(r),a=t(4),o=t(469),c=t(470);!function(){var _=t(1).enterModule;_&&_(e)}();var i=function(e){var _=e.createdAt,t=e.from,r=e.bookToGet,a=e.bookToGive;return n.a.createElement(c.e,null,n.a.createElement(c.i,null,n.a.createElement(c.j,null,"Date: ",_)),n.a.createElement(c.i,null,n.a.createElement(c.j,null,"From: ",n.a.createElement(c.k,null,t.username))),n.a.createElement(c.i,null,n.a.createElement(c.j,null,"Requesting: ",n.a.createElement(c.g,null,r.title))),n.a.createElement(c.i,null,n.a.createElement(c.j,null,"Trading: ",n.a.createElement(c.g,null,a.title))))};i.propTypes={status:a.string,createdAt:a.string,from:a.object,bookToGive:a.object,bookToGet:a.object};var s=function(e){var _=e.acceptTrade,t=e.declineTrade,r=e._id;return n.a.createElement(c.b,null,n.a.createElement(c.a,{onClick:function(){_(r)}},n.a.createElement(c.d,null)),n.a.createElement(c.a,{onClick:function(){t(r)}},n.a.createElement(c.c,null)))};s.propTypes={_id:a.string,acceptTrade:a.func,declineTrade:a.func};var p=function(e){var _=e.createdAt,t=e.from,r=e.bookToGive,a=e.bookToGet,p=e.acceptTrade,u=e.declineTrade,l=e._id;return n.a.createElement(c.f,null,n.a.createElement(i,{createdAt:Object(o.a)(_),from:t,bookToGet:a,bookToGive:r}),n.a.createElement(s,{_id:l,acceptTrade:p,declineTrade:u}))};p.propTypes={_id:a.string,acceptTrade:a.func,declineTrade:a.func,createdAt:a.string,from:a.object,bookToGive:a.object,bookToGet:a.object};var u=p;_.a=u,function(){var _=t(1).default,r=t(1).leaveModule;_&&(_.register(i,"DetailsBox","C:\\Users\\Steve\\Desktop\\JavaScript\\FCC-Backend\\Book-Trading-App\\src\\client\\components\\IncomingTrade.js"),_.register(s,"ButtonsBox","C:\\Users\\Steve\\Desktop\\JavaScript\\FCC-Backend\\Book-Trading-App\\src\\client\\components\\IncomingTrade.js"),_.register(p,"IncomingTrade","C:\\Users\\Steve\\Desktop\\JavaScript\\FCC-Backend\\Book-Trading-App\\src\\client\\components\\IncomingTrade.js"),_.register(u,"default","C:\\Users\\Steve\\Desktop\\JavaScript\\FCC-Backend\\Book-Trading-App\\src\\client\\components\\IncomingTrade.js"),r(e))}()}).call(this,t(7)(e))}}]);