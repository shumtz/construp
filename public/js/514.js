(self.webpackChunk=self.webpackChunk||[]).push([[514],{7757:(t,r,e)=>{t.exports=e(5666)},5666:t=>{var r=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(t){s=function(t,r,e){return t[r]=e}}function u(t,r,e,n){var o=r&&r.prototype instanceof m?r:m,a=Object.create(o.prototype),i=new k(n||[]);return a._invoke=function(t,r,e){var n=p;return function(o,a){if(n===f)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw a;return O()}for(e.method=o,e.arg=a;;){var i=e.delegate;if(i){var c=C(i,e);if(c){if(c===v)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===p)throw n=h,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=f;var s=l(t,r,e);if("normal"===s.type){if(n=e.done?h:d,s.arg===v)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(n=h,e.method="throw",e.arg=s.arg)}}}(t,e,i),a}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var p="suspendedStart",d="suspendedYield",f="executing",h="completed",v={};function m(){}function y(){}function g(){}var w={};s(w,a,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(j([])));x&&x!==e&&n.call(x,a)&&(w=x);var _=g.prototype=m.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function E(t,r){function e(o,a,i,c){var s=l(t[o],t,a);if("throw"!==s.type){var u=s.arg,p=u.value;return p&&"object"==typeof p&&n.call(p,"__await")?r.resolve(p.__await).then((function(t){e("next",t,i,c)}),(function(t){e("throw",t,i,c)})):r.resolve(p).then((function(t){u.value=t,i(u)}),(function(t){return e("throw",t,i,c)}))}c(s.arg)}var o;this._invoke=function(t,n){function a(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(a,a):a()}}function C(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,C(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function q(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function N(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(q,this),this.reset(!0)}function j(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:O}}function O(){return{value:r,done:!0}}return y.prototype=g,s(_,"constructor",g),s(g,"constructor",y),y.displayName=s(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===y||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},L(E.prototype),s(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(r,e,n,o,a){void 0===a&&(a=Promise);var i=new E(u(r,e,n,o),a);return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(_),s(_,c,"Generator"),s(_,a,(function(){return this})),s(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=j,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),N(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;N(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},t}(t.exports);try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},6514:(t,r,e)=>{"use strict";e.r(r),e.d(r,{default:()=>u});var n=e(7757),o=e.n(n),a=e(9669),i=e.n(a);function c(t,r,e,n,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void e(t)}c.done?r(s):Promise.resolve(s).then(n,o)}const s={name:"product-add",data:function(){return{product:{name:"",description:"",brand:"",quantity:0}}},methods:{create:function(){var t,r=this;return(t=o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().post("/api/products/new",r.product).then((function(t){r.$router.push({name:"home"})}));case 2:case"end":return t.stop()}}),t)})),function(){var r=this,e=arguments;return new Promise((function(n,o){var a=t.apply(r,e);function i(t){c(a,n,o,i,s,"next",t)}function s(t){c(a,n,o,i,s,"throw",t)}i(void 0)}))})()}}};const u=(0,e(1900).Z)(s,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"card"},[t._m(0),t._v(" "),e("div",{staticClass:"card-body"},[e("form",{on:{submit:function(r){return r.preventDefault(),t.create.apply(null,arguments)}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 mb-2"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"name"}},[t._v("Nome")]),t._v(" "),e("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.product.name,expression:"product.name"}],staticClass:"form-control",attrs:{required:"",id:"name",type:"text"},domProps:{value:t.product.name},on:{input:function(r){r.target.composing||t.$set(t.product,"name",r.target.value)}}})])]),t._v(" "),e("div",{staticClass:"col-12 mb-2"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"description"}},[t._v("Descrição")]),t._v(" "),e("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.product.description,expression:"product.description"}],staticClass:"form-control",attrs:{id:"description",type:"text",required:""},domProps:{value:t.product.description},on:{input:function(r){r.target.composing||t.$set(t.product,"description",r.target.value)}}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("phone"),expression:"errors.has('phone')"}],staticClass:"help is-danger"},[t._v(t._s(t.errors.first("description")))])])]),t._v(" "),e("div",{staticClass:"col-12 mb-2"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"brand"}},[t._v("Marca")]),t._v(" "),e("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.product.brand,expression:"product.brand"}],staticClass:"form-control",attrs:{required:"",id:"brand",type:"text"},domProps:{value:t.product.brand},on:{input:function(r){r.target.composing||t.$set(t.product,"brand",r.target.value)}}})])]),t._v(" "),e("div",{staticClass:"col-12 mb-2"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"quantity"}},[t._v("Quantidade")]),t._v(" "),e("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|numeric",expression:"'required|numeric'"},{name:"model",rawName:"v-model",value:t.product.quantity,expression:"product.quantity"}],staticClass:"form-control",attrs:{required:"",id:"quantity",type:"text"},domProps:{value:t.product.quantity},on:{input:function(r){r.target.composing||t.$set(t.product,"quantity",r.target.value)}}})])]),t._v(" "),t._m(1)])])])])])])}),[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"card-header"},[e("h4",[t._v("Adicionar produto")])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"col-12"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Criar")])])}],!1,null,null,null).exports}}]);