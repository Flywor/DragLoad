!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"),require("prop-types"));else if("function"==typeof define&&define.amd)define(["react","prop-types"],t);else{var r="object"==typeof exports?t(require("react"),require("prop-types")):t(e.React,e.PropTypes);for(var o in r)("object"==typeof exports?exports:e)[o]=r[o]}}(window,function(e,t){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}([function(t,r){t.exports=e},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t){var r=Object.keys(t);return e?e.split(" ").filter(function(e){return e}).map(function(e){if(function(e){return-1!==e.indexOf(".")}(e))return function(e,t){var r=e.split("."),o=r[0],n=r[1];if(!n)throw new Error("Invalid style name.");if(!t[o])throw new Error("CSS module import does not exist.");if(!t[o][n])throw new Error("CSS module does not exist.");return t[o][n]}(e,t);if(0===r.length)throw new Error("Cannot use styleName attribute without importing at least one stylesheet.");if(r.length>1)throw new Error("Cannot use anonymous style name with more than one stylesheet import.");var o=t[r[0]];return o[e]?o[e]:(console.warn("Could not resolve the styleName '"+e+"' in '"+r+"' file."),"")}).join(" "):""}},function(e,r){e.exports=t},function(e,t){e.exports={drag:"index__drag___3PHTT",items:"index__items___3R1zt",refresh:"index__refresh___2CKLL",loadNext:"index__loadNext___2C7KC",loading:"index__loading___TheRf",loadingCircle:"index__loadingCircle___3Mda1",success:"index__success___f4lp0",error:"index__error___38eWT",hide:"index__hide___1kUw1",toTop:"index__toTop___y0GiH"}},function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return p});var o,n,i=r(1),s=r.n(i),a=r(0),l=r.n(a),c=r(2),h=r.n(c),f=(r(3),function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}()),d={"./index.scss":{drag:"index__drag___3PHTT",loadingCircle:"index__loadingCircle___3Mda1",items:"index__items___3R1zt",refresh:"index__refresh___2CKLL",loadNext:"index__loadNext___2C7KC",loading:"index__loading___TheRf",success:"index__success___f4lp0",error:"index__error___38eWT",hide:"index__hide___1kUw1",toTop:"index__toTop___y0GiH"}};function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=(n=o=function(e){function t(){var e,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,i=Array(n),s=0;s<n;s++)i[s]=arguments[s];return r=o=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.state={dragY:0,dragTransition:"",refreshIcon:"",refreshTxt:"",refreshDeg:"",loadNextIcon:"",loadNextTxt:"",showToTop:!1},o.maxOver=50,o.tStart=0,o.loadFlag=!1,o.refreshFlag=!1,o.nextFlag=!0,o.scrollFlag=!1,o.haveData=!0,o.toTopTimer=0,u(o,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),f(t,[{key:"componentDidMount",value:function(){var e=this.props.refresh;"function"==typeof e&&e();var t=this.drag,r=this.start,o=this.move,n=this.end;t.addEventListener("touchstart",r.bind(this),{passive:!1}),t.addEventListener("touchmove",o.bind(this),{passive:!1}),t.addEventListener("touchend",n.bind(this),{passive:!1})}},{key:"scroll",value:function(){var e=this;this.scrollFlag=!1;var t=this.child,r=this.loadFlag,o=this.props,n=this.nextFlag;"function"==typeof o.loadNext&&!r&&n&&.9*(t.scrollHeight-t.offsetHeight)<t.scrollTop&&(this.loadFlag=!0,this.setState({loadNextIcon:"loading",loadNextTxt:"加载中..."}),o.loadNext().then(function(t){e.setState({loadNextIcon:"",loadNextTxt:"加载成功"})}).catch(function(t){e.setState({loadNextIcon:"error",loadNextTxt:"加载失败"}),e.nextFlag=!1,console.error(t)}).finally(function(t){e.loadFlag=!1})),this.setState({showToTop:t.scrollTop>t.offsetHeight})}},{key:"start",value:function(e){var t=this.loadFlag,r=(this.drag,this.tStart,this.child),o=this.toTopTimer;clearInterval(o),t||(0===r.scrollTop&&(this.scrollFlag=!0),this.setState({refreshIcon:"",dragTransition:"none"}),this.tStart=e.touches[0].clientY)}},{key:"move",value:function(e){var t=this.loadFlag,r=this.maxOver,o=this.tStart,n=this.scrollFlag,i=this.child,s=this.haveData,a=this.props.pullRate;if(!t&&s)if(0===i.scrollTop)if(n){var l=(o-e.touches[0].clientY)*a;l<0?(e.preventDefault(),this.refreshFlag=r<Math.abs(l),this.setState({refreshDeg:"rotate("+(this.refreshFlag?180:0)+"deg)",refreshTxt:this.refreshFlag?"释放更新":"下拉刷新",dragY:Math.abs(l)})):this.refreshFlag=!1}else this.start(e);else this.refreshFlag=!1}},{key:"end",value:function(e){var t=this,r=this.maxOver,o=this.loadFlag,n=(this.drag,this.refreshFlag),i=this.props.refresh;if(!o)return this.setState({dragTransition:"330ms"}),n&&"function"==typeof i?(this.refreshFlag=!1,this.setState({dragY:r,refreshIcon:"loading",refreshTxt:"加载中",refreshDeg:"rotate(0deg)"}),i().then(function(e){t.setState({refreshIcon:"success",refreshTxt:"加载成功"})}).catch(function(e){t.setState({refreshIcon:"error",refreshTxt:"加载失败"}),console.error(e)}).finally(function(e){setTimeout(function(){t.setState({dragY:0}),setTimeout(function(){t.setState({dragTransition:"none"}),t.loadFlag=!1},330)},1e3)})):this.setState({dragY:0}),!0;e.preventDefault()}},{key:"toTop",value:function(){var e=this,t=this.child;this.toTopTimer=setInterval(function(){t.scrollTop=.99*t.scrollTop,t.scrollTop<=1&&(t.scrollTop=0,clearInterval(e.toTopTimer))},1)}},{key:"render",value:function(){var e=this.state,t=e.dragY,r=e.dragTransition,o=e.refreshIcon,n=e.refreshTxt,i=e.refreshDeg,a=e.loadNextIcon,c=e.loadNextTxt,h=e.showToTop,f=this.props,u=f.height,p=f.refresh,_=f.loadNext,x=f.children,g=x.props?x.props.children.length:x.length;return this.haveData=g>0,l.a.createElement("div",{className:"index__drag___3PHTT",style:{height:u,transition:r,WebkitTransition:r,transform:"translate3d(0px, "+t+"px, 0px)",WebkitTransform:"translate3d(0px, "+t+"px, 0px)"}},l.a.createElement("div",{className:s()(("function"==typeof p?"":"hide")+" refresh",d)},l.a.createElement("span",{style:{transform:i,WebkitTransform:i},className:s()(o,d)}),l.a.createElement("label",null,n)),l.a.createElement("div",{className:"index__items___3R1zt",style:{height:u},onScroll:this.scroll.bind(this)},x,l.a.createElement("div",{className:s()(("function"==typeof _?"":"hide")+" loadNext",d)},l.a.createElement("span",{className:s()(a,d)}),l.a.createElement("label",null,c))),l.a.createElement("div",{onClick:this.toTop.bind(this),className:s()((h?"":"hide")+" toTop",d)},"TOP"))}}]),t}(),o.propTypes={height:h.a.string.isRequired,refresh:h.a.func,loadNext:h.a.func,pullRate:h.a.number},o.defaultProps={height:"",refresh:null,loadNext:null,pullRate:.3},n)},function(e,t,r){e.exports=r(4)}])});
