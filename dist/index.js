!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},o=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function u(t){try{c(r.next(t))}catch(t){i(t)}}function a(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,a)}c((r=r.apply(t,e||[])).next())}))},i=this&&this.__generator||function(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(e,"__esModule",{value:!0});var u=n(1),a=function(){function t(t){var e=this;this.matchedRoute=void 0,this.hooks={},this._checkRoutesType(t),this.routes=t,this.params={},this.routes.map((function(t){return r(r({},t),{path:e._formatPath(t.path)})})),this._bind()}return t.prototype._bind=function(){var t=this;window.addEventListener("load",(function(e){return t.onWindowLoad(e)})),window.addEventListener("popstate",(function(e){return t.handlePopState(e)})),document.body.addEventListener("click",(function(e){return t._triggerRouterLink(e)}))},t.prototype._formatPath=function(t){try{if(t.match(/^(\/\#|\#\/)/))throw"bad url `"+t+"`";return""===t?"/":null===t.match(/^\//)&&null===t.match(/^\*$/)?"/"+t:t.match(/^\*$/)?"*":t}catch(t){throw t}},t.prototype._checkRoutesType=function(t){try{if(!Array.isArray(t))throw"The second argument must be an array of object";if(!t.every((function(t){return u.isRoute(t)})))throw"Routes must have a key path (string) and  a key action (function)"}catch(t){throw t}},t.prototype._dispatch=function(t){var e,n,r=t.EventType,u=t.url,a=t.redirect,c=void 0!==a&&a;return o(this,void 0,void 0,(function(){var t,o;return i(this,(function(i){switch(i.label){case 0:if(i.trys.push([0,10,,11]),!u||""===u.trim())throw"No url renseigned";return c&&u.match(/^(http:\/\/|https:\/\/)/)?(window.location.replace(u),[2]):(t=this._makeRequestObject({url:u,EventType:r}),"load"!==r?[4,this._hookPromisify(this.hooks.leave,t)]:[3,2]);case 1:i.sent(),i.label=2;case 2:return"load"!==r?[4,this._hookPromisify(null===(e=this.matchedRoute)||void 0===e?void 0:e.leave,t)]:[3,4];case 3:i.sent(),i.label=4;case 4:return this.matchedRoute=this._match(u),(null===(n=this.matchedRoute)||void 0===n?void 0:n.redirect)?(this._dispatch({EventType:r,url:this.matchedRoute.redirect,redirect:!0}),[3,9]):[3,5];case 5:return this.matchedRoute?(o=this._makeRequestObject({url:u,EventType:r}),[4,this._hookPromisify(this.hooks.before,o)]):[3,8];case 6:return i.sent(),[4,this._hookPromisify(this.matchedRoute.before,o)];case 7:return i.sent(),"click"===r&&history.pushState({key:u},document.title,u),"load"===r&&null===u.match(/^\*$/)&&history.replaceState({key:u},document.title,u),this.matchedRoute.action(o),[3,9];case 8:if(null!==u.match(/^\*$/))throw"404 not found "+u;this._dispatch({EventType:r,url:"*"}),i.label=9;case 9:return[3,11];case 10:throw i.sent();case 11:return[2]}}))}))},t.prototype._match=function(t){var e=this;return this.routes.find((function(n){var r,o,i=n.path,u=e._generateURLRegExp(i),a=t.match(u);return("/"===t||!u.test("/"))&&(!!(u.test(t)&&(null===(o=null===(r=a)||void 0===r?void 0:r[0])||void 0===o?void 0:o.includes(t)))&&(e.params=a.groups||{},!0))}))},t.prototype._generateURLRegExp=function(t){var e=(t.replace(/\{([^\s/\:]+)\:?(?:\((.*?)\))?\}/g,(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return t[2]?"(?<"+t[1]+">"+t[2]+")":"(?<"+t[1]+">\\w+)"}))+"/?").replace(/[*]/g,"\\$&");return new RegExp(e)},t.prototype._hookPromisify=function(t,e){return o(this,void 0,void 0,(function(){return i(this,(function(n){switch(n.label){case 0:return t?[4,new Promise((function(n){t(e,(function(){n()}))}))]:[2];case 1:return n.sent(),[2]}}))}))},t.prototype._makeRequestObject=function(t){var e=this,n=t.url,r=t.EventType;return{redirect:function(t){return e._dispatch.call(e,{EventType:r,url:t,redirect:!0})},params:this.params,path:n}},t.prototype._triggerRouterLink=function(t){var e,n,r,u,a,c,s,l,d,h,f,p,v,y,b,m;return o(this,void 0,void 0,(function(){var o,_;return i(this,(function(i){return o=t.target,((null===(u=null===(n=null===(e=o)||void 0===e?void 0:e.closest("[data-router-link]"))||void 0===n?void 0:(r=n).getAttribute)||void 0===u?void 0:u.call(r,"href"))||(null===(l=null===(c=null===(a=o)||void 0===a?void 0:a.closest("[data-router-link]"))||void 0===c?void 0:(s=c).getAttribute)||void 0===l?void 0:l.call(s,"to")))&&(t.preventDefault(),_=(null===(p=null===(h=null===(d=o)||void 0===d?void 0:d.closest("[data-router-link]"))||void 0===h?void 0:(f=h).getAttribute)||void 0===p?void 0:p.call(f,"href"))||(null===(m=null===(y=null===(v=o)||void 0===v?void 0:v.closest("[data-router-link]"))||void 0===y?void 0:(b=y).getAttribute)||void 0===m?void 0:m.call(b,"to"))||"*",this._dispatch({EventType:t.type,url:_})),[2]}))}))},t.prototype.onWindowLoad=function(t){this._dispatch({EventType:t.type,url:window.location.pathname})},t.prototype.handlePopState=function(t){var e;this._dispatch({EventType:t.type,url:null===(e=t.state)||void 0===e?void 0:e.key})},t}();e.KMRouter=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isRoute=function(t){return void 0!==t.path&&void 0!==t.action&&"function"==typeof t.action}}])}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVyZmFjZXMvcm91dGUudHMiXSwibmFtZXMiOlsicm9vdCIsImZhY3RvcnkiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmaW5lIiwiYW1kIiwiYSIsImkiLCJ3aW5kb3ciLCJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwibCIsIm1vZHVsZXMiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJyb3V0ZXMiLCJtYXRjaGVkUm91dGUiLCJ1bmRlZmluZWQiLCJob29rcyIsInRoaXMiLCJfY2hlY2tSb3V0ZXNUeXBlIiwicGFyYW1zIiwibWFwIiwicm91dGUiLCJwYXRoIiwiX2Zvcm1hdFBhdGgiLCJfYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwib25XaW5kb3dMb2FkIiwiaGFuZGxlUG9wU3RhdGUiLCJkb2N1bWVudCIsImJvZHkiLCJfdHJpZ2dlclJvdXRlckxpbmsiLCJtYXRjaCIsImVycm9yIiwiQXJyYXkiLCJpc0FycmF5IiwiZXZlcnkiLCJpc1JvdXRlIiwiX2Rpc3BhdGNoIiwiRXZlbnRUeXBlIiwidXJsIiwicmVkaXJlY3QiLCJ0cmltIiwibG9jYXRpb24iLCJyZXBsYWNlIiwicmVxdWVzdCIsIl9tYWtlUmVxdWVzdE9iamVjdCIsIl9ob29rUHJvbWlzaWZ5IiwibGVhdmUiLCJfbWF0Y2giLCJiZWZvcmUiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwidGl0bGUiLCJyZXBsYWNlU3RhdGUiLCJhY3Rpb24iLCJmaW5kIiwiZ2VuZXJhdGVkVVJMUmVnRXhwIiwiX2dlbmVyYXRlVVJMUmVnRXhwIiwibWF0Y2hlcyIsInRlc3QiLCJpbmNsdWRlcyIsImdyb3VwcyIsInJvdXRlUmVnRXhwIiwiYXJncyIsIlJlZ0V4cCIsImZuIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ1cmkiLCJlbCIsInRhcmdldCIsImNsb3Nlc3QiLCJnZXRBdHRyaWJ1dGUiLCJwcmV2ZW50RGVmYXVsdCIsInR5cGUiLCJwYXRobmFtZSIsInN0YXRlIiwiS01Sb3V0ZXIiXSwibWFwcGluZ3MiOiJDQUFBLFNBQTJDQSxFQUFNQyxHQUNoRCxHQUFzQixpQkFBWkMsU0FBMEMsaUJBQVhDLE9BQ3hDQSxPQUFPRCxRQUFVRCxTQUNiLEdBQXFCLG1CQUFYRyxRQUF5QkEsT0FBT0MsSUFDOUNELE9BQU8sR0FBSUgsT0FDUCxDQUNKLElBQUlLLEVBQUlMLElBQ1IsSUFBSSxJQUFJTSxLQUFLRCxHQUF1QixpQkFBWkosUUFBdUJBLFFBQVVGLEdBQU1PLEdBQUtELEVBQUVDLElBUHhFLENBU0dDLFFBQVEsV0FDWCxPLFlDVEUsSUFBSUMsRUFBbUIsR0FHdkIsU0FBU0MsRUFBb0JDLEdBRzVCLEdBQUdGLEVBQWlCRSxHQUNuQixPQUFPRixFQUFpQkUsR0FBVVQsUUFHbkMsSUFBSUMsRUFBU00sRUFBaUJFLEdBQVksQ0FDekNKLEVBQUdJLEVBQ0hDLEdBQUcsRUFDSFYsUUFBUyxJQVVWLE9BTkFXLEVBQVFGLEdBQVVHLEtBQUtYLEVBQU9ELFFBQVNDLEVBQVFBLEVBQU9ELFFBQVNRLEdBRy9EUCxFQUFPUyxHQUFJLEVBR0pULEVBQU9ELFFBMERmLE9BckRBUSxFQUFvQkssRUFBSUYsRUFHeEJILEVBQW9CTSxFQUFJUCxFQUd4QkMsRUFBb0JPLEVBQUksU0FBU2YsRUFB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LEVBQ3RELFFBRHNELEVBQ3hESCxTQUFFLGVBQUVFLFFBQVEsNkJBQW9CLG1CQUFHQyxvQkFBWSxzQkFBRyxVQUVsRC9DLEVBQUVnRCxpQkFDSWxDLEdBQzJDLFFBQS9DLEVBQWdDLFFBQWhDLEVBQUUsUUFBRixFQUFBOEIsU0FBRSxlQUFFRSxRQUFRLDZCQUFvQixtQkFBR0Msb0JBQVksc0JBQUcsV0FDSCxRQURTLEVBQ3hCLFFBRHdCLEVBQ3RELFFBRHNELEVBQ3hESCxTQUFFLGVBQUVFLFFBQVEsNkJBQW9CLG1CQUFHQyxvQkFBWSxzQkFBRyxRQUNsRCxJQUNGeEQsS0FBS3FCLFVBQVUsQ0FBRUMsVUFBV2IsRUFBRWlELEtBQU1uQyxJQUFHLEssV0FVbkMsWUFBQWIsYUFBUixTQUFxQkQsR0FDbkJULEtBQUtxQixVQUFVLENBQ2JDLFVBQVdiLEVBQUVpRCxLQUNibkMsSUFBSzlELE9BQU9pRSxTQUFTaUMsWUFVakIsWUFBQWhELGVBQVIsU0FBdUJGLEcsTUFDckJULEtBQUtxQixVQUFVLENBQ2JDLFVBQVdiLEVBQUVpRCxLQUNibkMsSUFBWSxRQUFULEVBQUVkLEVBQUVtRCxhQUFLLGVBQUV6RSxPQUdwQixFQXJTQSxHQUFhLEVBQUEwRSxZLDhFQ0RiLG1CQUF3QnpELEdBQ3RCLFlBQWlDTixJQUF6Qk0sRUFBZ0JDLFdBQWtEUCxJQUEzQk0sRUFBZ0JrQyxRQUEyRCxtQkFBM0JsQyxFQUFnQmtDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFJvdXRlLCB7IGlzUm91dGUgfSBmcm9tICcuL2ludGVyZmFjZXMvcm91dGUnO1xuaW1wb3J0IEhvb2tzIGZyb20gJy4vaW50ZXJmYWNlcy9ob29rcyc7XG5pbXBvcnQgUm91dGVSZXF1ZXN0IGZyb20gJy4vaW50ZXJmYWNlcy9yZXF1ZXN0JztcblxuLyoqXG4gKiBLTVJvdXRlclxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBLTVJvdXRlclxuICovXG5leHBvcnQgY2xhc3MgS01Sb3V0ZXIge1xuICBwcml2YXRlIHJvdXRlczogQXJyYXk8Um91dGU+O1xuICBwcml2YXRlIG1hdGNoZWRSb3V0ZTogUm91dGUgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gIHByaXZhdGUgcGFyYW1zOiB7fTtcblxuICBob29rczogSG9va3MgPSB7fTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgUm91dGVyLlxuICAgKiBAcGFyYW0ge0FycmF5PFJvdXRlPn0gcm91dGVzXG4gICAqIEBtZW1iZXJvZiBLTVJvdXRlclxuICAgKi9cbiAgY29uc3RydWN0b3Iocm91dGVzOiBBcnJheTxSb3V0ZT4pIHtcbiAgICB0aGlzLl9jaGVja1JvdXRlc1R5cGUocm91dGVzKTtcbiAgICB0aGlzLnJvdXRlcyA9IHJvdXRlcztcbiAgICB0aGlzLnBhcmFtcyA9IHt9O1xuICAgIHRoaXMucm91dGVzLm1hcCgocm91dGU6IFJvdXRlKSA9PiAoe1xuICAgICAgLi4ucm91dGUsXG4gICAgICBwYXRoOiB0aGlzLl9mb3JtYXRQYXRoKHJvdXRlLnBhdGgpLFxuICAgIH0pKTtcbiAgICB0aGlzLl9iaW5kKCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEluaXRpYWxpemUgZXZlbnQgbGlzdGVuZXJzXG4gICAqIEBtZW1iZXJvZiBLTVJvdXRlclxuICAgKi9cbiAgcHJpdmF0ZSBfYmluZCgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIChlKSA9PiB0aGlzLm9uV2luZG93TG9hZChlKSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgKGUpID0+IHRoaXMuaGFuZGxlUG9wU3RhdGUoZSkpO1xuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gdGhpcy5fdHJpZ2dlclJvdXRlckxpbmsoZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiB0aGUgcGF0aCBoYXMgdGhlIHJpZ2h0IGZvcm1hdFxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgS01Sb3V0ZXJcbiAgICovXG4gIHByaXZhdGUgX2Zvcm1hdFBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICB0cnkge1xuICAgICAgaWYgKHBhdGgubWF0Y2goL14oXFwvXFwjfFxcI1xcLykvKSkge1xuICAgICAgICB0aHJvdyBgYmFkIHVybCBcXGAke3BhdGh9XFxgYDtcbiAgICAgIH1cbiAgICAgIGlmIChwYXRoID09PSAnJykge1xuICAgICAgICByZXR1cm4gJy8nO1xuICAgICAgfVxuICAgICAgaWYgKHBhdGgubWF0Y2goL15cXC8vKSA9PT0gbnVsbCAmJiBwYXRoLm1hdGNoKC9eXFwqJC8pID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBgLyR7cGF0aH1gO1xuICAgICAgfVxuICAgICAgaWYgKHBhdGgubWF0Y2goL15cXCokLykpIHtcbiAgICAgICAgcmV0dXJuIGAqYDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwYXRoO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIHJvdXRlcyBpcyBhbiBBcnJheSBvZiBSb3V0ZVxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge0FycmF5PFJvdXRlPn0gcm91dGVzXG4gICAqIEBtZW1iZXJvZiBLTVJvdXRlclxuICAgKi9cbiAgcHJpdmF0ZSBfY2hlY2tSb3V0ZXNUeXBlKHJvdXRlczogQXJyYXk8Um91dGU+KSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShyb3V0ZXMpKSB7XG4gICAgICAgIHRocm93ICdUaGUgc2Vjb25kIGFyZ3VtZW50IG11c3QgYmUgYW4gYXJyYXkgb2Ygb2JqZWN0JztcbiAgICAgIH1cblxuICAgICAgY29uc3QgQXJlQWxsT2JqZWN0Um91dGVzID0gcm91dGVzLmV2ZXJ5KChyb3V0ZSkgPT4gaXNSb3V0ZShyb3V0ZSkpO1xuICAgICAgaWYgKCFBcmVBbGxPYmplY3RSb3V0ZXMpIHtcbiAgICAgICAgdGhyb3cgJ1JvdXRlcyBtdXN0IGhhdmUgYSBrZXkgcGF0aCAoc3RyaW5nKSBhbmQgIGEga2V5IGFjdGlvbiAoZnVuY3Rpb24pJztcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBHZXQgdGhlIGN1cnJlbnQgcm91dGUgYW5kIGV4ZWN1dGUgdGhlIGFzc29jaWF0ZWQgbWV0aG9kc1xuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge3tcbiAgICogICAgIEV2ZW50VHlwZTogc3RyaW5nO1xuICAgKiAgICAgdXJsOiBzdHJpbmc7XG4gICAqICAgICByZWRpcmVjdD86IGJvb2xlYW47XG4gICAqICAgfX0ge1xuICAgKiAgICAgRXZlbnRUeXBlLFxuICAgKiAgICAgdXJsLFxuICAgKiAgICAgcmVkaXJlY3QgPSBmYWxzZSxcbiAgICogICB9XG4gICAqIEByZXR1cm5zXG4gICAqIEBtZW1iZXJvZiBLTVJvdXRlclxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBfZGlzcGF0Y2goe1xuICAgIEV2ZW50VHlwZSxcbiAgICB1cmwsXG4gICAgcmVkaXJlY3QgPSBmYWxzZSxcbiAgfToge1xuICAgIEV2ZW50VHlwZTogc3RyaW5nO1xuICAgIHVybDogc3RyaW5nO1xuICAgIHJlZGlyZWN0PzogYm9vbGVhbjtcbiAgfSkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIXVybCB8fCB1cmwudHJpbSgpID09PSAnJykge1xuICAgICAgICB0aHJvdyAnTm8gdXJsIHJlbnNlaWduZWQnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVkaXJlY3QgJiYgdXJsLm1hdGNoKC9eKGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcLykvKSkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSh1cmwpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlcXVlc3QgPSB0aGlzLl9tYWtlUmVxdWVzdE9iamVjdCh7IHVybCwgRXZlbnRUeXBlIH0pO1xuXG4gICAgICAvLyBMZWF2ZSBIb29rc1xuICAgICAgRXZlbnRUeXBlICE9PSAnbG9hZCcgJiZcbiAgICAgICAgKGF3YWl0IHRoaXMuX2hvb2tQcm9taXNpZnkodGhpcy5ob29rcy5sZWF2ZSwgcmVxdWVzdCkpO1xuICAgICAgRXZlbnRUeXBlICE9PSAnbG9hZCcgJiZcbiAgICAgICAgKGF3YWl0IHRoaXMuX2hvb2tQcm9taXNpZnkodGhpcy5tYXRjaGVkUm91dGU/LmxlYXZlLCByZXF1ZXN0KSk7XG5cbiAgICAgIHRoaXMubWF0Y2hlZFJvdXRlID0gdGhpcy5fbWF0Y2godXJsKTtcblxuICAgICAgaWYgKHRoaXMubWF0Y2hlZFJvdXRlPy5yZWRpcmVjdCkge1xuICAgICAgICB0aGlzLl9kaXNwYXRjaCh7XG4gICAgICAgICAgRXZlbnRUeXBlLFxuICAgICAgICAgIHVybDogdGhpcy5tYXRjaGVkUm91dGUucmVkaXJlY3QsXG4gICAgICAgICAgcmVkaXJlY3Q6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm1hdGNoZWRSb3V0ZSkge1xuICAgICAgICBjb25zdCByZXF1ZXN0ID0gdGhpcy5fbWFrZVJlcXVlc3RPYmplY3QoeyB1cmwsIEV2ZW50VHlwZSB9KTtcblxuICAgICAgICAvLyBCZWZvcmUgSG9va3NcbiAgICAgICAgYXdhaXQgdGhpcy5faG9va1Byb21pc2lmeSh0aGlzLmhvb2tzLmJlZm9yZSwgcmVxdWVzdCk7XG4gICAgICAgIGF3YWl0IHRoaXMuX2hvb2tQcm9taXNpZnkodGhpcy5tYXRjaGVkUm91dGUuYmVmb3JlLCByZXF1ZXN0KTtcblxuICAgICAgICAvLyBIYW5kbGUgcHVzaFN0YXRlICYgcmVwbGFjZVN0YXRlXG4gICAgICAgIEV2ZW50VHlwZSA9PT0gJ2NsaWNrJyAmJlxuICAgICAgICAgIGhpc3RvcnkucHVzaFN0YXRlKHsga2V5OiB1cmwgfSwgZG9jdW1lbnQudGl0bGUsIHVybCk7XG4gICAgICAgIEV2ZW50VHlwZSA9PT0gJ2xvYWQnICYmXG4gICAgICAgICAgdXJsLm1hdGNoKC9eXFwqJC8pID09PSBudWxsICYmXG4gICAgICAgICAgaGlzdG9yeS5yZXBsYWNlU3RhdGUoeyBrZXk6IHVybCB9LCBkb2N1bWVudC50aXRsZSwgdXJsKTtcblxuICAgICAgICAvLyB0cmlnZ2VyIGFjdGlvblxuICAgICAgICB0aGlzLm1hdGNoZWRSb3V0ZS5hY3Rpb24ocmVxdWVzdCk7XG4gICAgICB9IGVsc2UgaWYgKHVybC5tYXRjaCgvXlxcKiQvKSA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9kaXNwYXRjaCh7IEV2ZW50VHlwZSwgdXJsOiAnKicgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBgNDA0IG5vdCBmb3VuZCAke3VybH1gO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIHRoZSByZXF1ZXN0ZWQgVVJMIGV4aXN0IGluIHRoZSByb3V0ZSBhcnJheVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEByZXR1cm5zIHsoUm91dGV8dW5kZWZpbmVkKX1cbiAgICogQG1lbWJlcm9mIEtNUm91dGVyXG4gICAqL1xuICBwcml2YXRlIF9tYXRjaCh1cmw6IHN0cmluZyk6IFJvdXRlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5yb3V0ZXMuZmluZCgoeyBwYXRoIH0pID0+IHtcbiAgICAgIGNvbnN0IGdlbmVyYXRlZFVSTFJlZ0V4cCA9IHRoaXMuX2dlbmVyYXRlVVJMUmVnRXhwKHBhdGgpO1xuICAgICAgY29uc3QgbWF0Y2hlcyA9IHVybC5tYXRjaChnZW5lcmF0ZWRVUkxSZWdFeHApO1xuXG4gICAgICBpZiAodXJsICE9PSAnLycgJiYgZ2VuZXJhdGVkVVJMUmVnRXhwLnRlc3QoJy8nKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChnZW5lcmF0ZWRVUkxSZWdFeHAudGVzdCh1cmwpICYmIG1hdGNoZXM/LlswXT8uaW5jbHVkZXModXJsKSkge1xuICAgICAgICB0aGlzLnBhcmFtcyA9IG1hdGNoZXMuZ3JvdXBzIHx8IHt9O1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBHZW5lcmF0ZSB0aGUgVVJMIFJlZ2V4XG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoXG4gICAqIEByZXR1cm5zIHtSZWdFeHB9XG4gICAqIEBtZW1iZXJvZiBLTVJvdXRlclxuICAgKi9cbiAgcHJpdmF0ZSBfZ2VuZXJhdGVVUkxSZWdFeHAocGF0aDogc3RyaW5nKTogUmVnRXhwIHtcbiAgICBjb25zdCByZWcgPSAvXFx7KFteXFxzL1xcOl0rKVxcOj8oPzpcXCgoLio/KVxcKSk/XFx9L2c7XG5cbiAgICBjb25zdCByb3V0ZVJlZ0V4cCA9IGAke3BhdGgucmVwbGFjZShyZWcsICguLi5hcmdzKSA9PlxuICAgICAgYXJnc1syXSA/IGAoPzwke2FyZ3NbMV19PiR7YXJnc1syXX0pYCA6IGAoPzwke2FyZ3NbMV19PlxcXFx3KylgXG4gICAgKX0vP2AucmVwbGFjZSgvWypdL2csICdcXFxcJCYnKTtcblxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlUmVnRXhwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gUHJvbWlzaWZ5IGhvb2sgdG8gd2FpdCBmb3IgbmV4dCgpIHRvIGdvIHRvIHRoZSBuZXh0IHBhZ2VcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHsqfSBmblxuICAgKiBAcGFyYW0ge1JvdXRlUmVxdWVzdH0gcmVxdWVzdFxuICAgKiBAcmV0dXJuc1xuICAgKiBAbWVtYmVyb2YgS01Sb3V0ZXJcbiAgICovXG4gIHByaXZhdGUgYXN5bmMgX2hvb2tQcm9taXNpZnkoZm46IGFueSwgcmVxdWVzdDogUm91dGVSZXF1ZXN0KSB7XG4gICAgaWYgKCFmbikgcmV0dXJuO1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBmbihyZXF1ZXN0LCAoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge3tcbiAgICogICAgIHVybDogc3RyaW5nO1xuICAgKiAgICAgRXZlbnRUeXBlOiBzdHJpbmc7XG4gICAqICAgfX0ge1xuICAgKiAgICAgdXJsLFxuICAgKiAgICAgRXZlbnRUeXBlLFxuICAgKiAgIH1cbiAgICogQHJldHVybnMge1JvdXRlUmVxdWVzdH1cbiAgICogQG1lbWJlcm9mIEtNUm91dGVyXG4gICAqL1xuICBwcml2YXRlIF9tYWtlUmVxdWVzdE9iamVjdCh7XG4gICAgdXJsLFxuICAgIEV2ZW50VHlwZSxcbiAgfToge1xuICAgIHVybDogc3RyaW5nO1xuICAgIEV2ZW50VHlwZTogc3RyaW5nO1xuICB9KTogUm91dGVSZXF1ZXN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkaXJlY3Q6ICh1cmk6IHN0cmluZykgPT5cbiAgICAgICAgdGhpcy5fZGlzcGF0Y2guY2FsbCh0aGlzLCB7XG4gICAgICAgICAgRXZlbnRUeXBlLFxuICAgICAgICAgIHVybDogdXJpLFxuICAgICAgICAgIHJlZGlyZWN0OiB0cnVlLFxuICAgICAgICB9KSxcbiAgICAgIHBhcmFtczogdGhpcy5wYXJhbXMsXG4gICAgICBwYXRoOiB1cmwsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVHJpZ2dlciBuYXZpZ2F0aW9uIG9uIGNsaWNrIG9uIGxpbmsgd2l0aCB0aGUgJ2RhdGEtcm91dGVyLWxpbmsnIGF0dHJpYnV0ZVxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge01vdXNlRXZlbnR9IGVcbiAgICogQG1lbWJlcm9mIEtNUm91dGVyXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIF90cmlnZ2VyUm91dGVyTGluayhlOiBNb3VzZUV2ZW50KSB7XG4gICAgY29uc3QgZWwgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAoXG4gICAgICBlbD8uY2xvc2VzdCgnW2RhdGEtcm91dGVyLWxpbmtdJyk/LmdldEF0dHJpYnV0ZT8uKCdocmVmJykgfHxcbiAgICAgIGVsPy5jbG9zZXN0KCdbZGF0YS1yb3V0ZXItbGlua10nKT8uZ2V0QXR0cmlidXRlPy4oJ3RvJylcbiAgICApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHVybCA9XG4gICAgICAgIGVsPy5jbG9zZXN0KCdbZGF0YS1yb3V0ZXItbGlua10nKT8uZ2V0QXR0cmlidXRlPy4oJ2hyZWYnKSB8fFxuICAgICAgICBlbD8uY2xvc2VzdCgnW2RhdGEtcm91dGVyLWxpbmtdJyk/LmdldEF0dHJpYnV0ZT8uKCd0bycpIHx8XG4gICAgICAgICcqJztcbiAgICAgIHRoaXMuX2Rpc3BhdGNoKHsgRXZlbnRUeXBlOiBlLnR5cGUsIHVybCB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIGdldCB0aGUgcmlnaHQgcm91dGUgb24gd2luZG93IGxvYWQgZXZlbnRcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgKiBAbWVtYmVyb2YgS01Sb3V0ZXJcbiAgICovXG4gIHByaXZhdGUgb25XaW5kb3dMb2FkKGU6IEV2ZW50KSB7XG4gICAgdGhpcy5fZGlzcGF0Y2goe1xuICAgICAgRXZlbnRUeXBlOiBlLnR5cGUsXG4gICAgICB1cmw6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gZ2V0IHRoZSByaWdodCByb3V0ZSBvbiBwb3BzdGF0ZSBldmVudFxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge1BvcFN0YXRlRXZlbnR9IGVcbiAgICogQG1lbWJlcm9mIEtNUm91dGVyXG4gICAqL1xuICBwcml2YXRlIGhhbmRsZVBvcFN0YXRlKGU6IFBvcFN0YXRlRXZlbnQpIHtcbiAgICB0aGlzLl9kaXNwYXRjaCh7XG4gICAgICBFdmVudFR5cGU6IGUudHlwZSxcbiAgICAgIHVybDogZS5zdGF0ZT8ua2V5LFxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgUm91dGVSZXF1ZXN0IGZyb20gJy4vcmVxdWVzdCc7XG5pbXBvcnQgSG9va3MgZnJvbSAnLi9ob29rcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGludGVyZmFjZSBSb3V0ZSBleHRlbmRzIEhvb2tzIHtcbiAgcGF0aDogc3RyaW5nO1xuICBhY3Rpb24ocmVxdWVzdDogUm91dGVSZXF1ZXN0KTogYW55O1xuICByZWRpcmVjdD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUm91dGUocm91dGU6IFJvdXRlKTogcm91dGUgaXMgUm91dGV7XG4gIHJldHVybiAocm91dGUgYXMgUm91dGUpLnBhdGggIT09IHVuZGVmaW5lZCAmJiAocm91dGUgYXMgUm91dGUpLmFjdGlvbiAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiAocm91dGUgYXMgUm91dGUpLmFjdGlvbiA9PT0gJ2Z1bmN0aW9uJztcbn0iXSwic291cmNlUm9vdCI6IiJ9