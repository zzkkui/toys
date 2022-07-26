(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1849:function(c,a,b){"use strict";b.d(a,{I:function(){return d}});var d=[{label:"API demo",key:"/apis",title:"API demo",children:[{label:"\u56FE\u7247\u61D2\u52A0\u8F7D",key:"/apis/intersection-observer",title:"\u56FE\u7247\u61D2\u52A0\u8F7D"}]},{label:"\u624B\u5199",key:"/handwriting",title:"\u624B\u5199"},{label:"\u7B97\u6CD5",key:"/algorithm",title:"\u7B97\u6CD5"},{label:"Vue",key:"/vue",title:"Vue",children:[{label:"\u53CC\u5411\u7ED1\u5B9A",key:"/vue/interactive-data-binding",title:"\u53CC\u5411\u7ED1\u5B9A"}]}]},4019:function(b,a){"use strict";function c(a,b,c,d){return!1}Object.defineProperty(a,"__esModule",{value:!0}),a.getDomainLocale=c,("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&& void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),b.exports=a.default)},7942:function(e,a,b){"use strict";var c,g=b(5696);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var d=(c=b(7294),c&&c.__esModule?c:{default:c}),h=b(4957),i=b(7995),j=b(647),k=b(1992),l=b(639),m=b(4019),n=b(227),o=void 0!==d.default.useTransition,p={};function q(a,c,d,b){if(a&&h.isLocalURL(c)){a.prefetch(c,d,b).catch(function(a){});var e=b&& void 0!==b.locale?b.locale:a&&a.locale;p[c+"%"+d+(e?"%"+e:"")]=!0}}var f=d.default.forwardRef(function(a,A){var c,e,B=a.href,C=a.as,D=a.children,E=a.prefetch,F=a.passHref,R=a.replace,S=a.shallow,T=a.scroll,s=a.locale,U=a.onClick,V=a.onMouseEnter,w=a.legacyBehavior,f=void 0===w?!0!==Boolean(!1):w,G=function(b,f){if(null==b)return{};var c,a,d={},e=Object.keys(b);for(a=0;a<e.length;a++)f.indexOf(c=e[a])>=0||(d[c]=b[c]);return d}(a,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","legacyBehavior"]);c=D,f&&("string"==typeof c||"number"==typeof c)&&(c=d.default.createElement("a",null,c));var H=!1!==E,I=o?d.default.useTransition():[],J=g(I,2),W=J[1],b=d.default.useContext(j.RouterContext),x=d.default.useContext(k.AppRouterContext);x&&(b=x);var y=d.default.useMemo(function(){var d=h.resolveHref(b,B,!0),a=g(d,2),c=a[0],e=a[1];return{href:c,as:C?h.resolveHref(b,C):e||c}},[b,B,C]),t=y.href,r=y.as,X=d.default.useRef(t),Y=d.default.useRef(r);f&&(e=d.default.Children.only(c));var K=f?e&&"object"==typeof e&&e.ref:A,L=l.useIntersection({rootMargin:"200px"}),u=g(L,3),M=u[0],N=u[1],O=u[2],P=d.default.useCallback(function(a){(Y.current!==r||X.current!==t)&&(O(),Y.current=r,X.current=t),M(a),K&&("function"==typeof K?K(a):"object"==typeof K&&(K.current=a))},[r,K,t,O,M]);d.default.useEffect(function(){var c=N&&H&&h.isLocalURL(t),a=void 0!==s?s:b&&b.locale,d=p[t+"%"+r+(a?"%"+a:"")];c&&!d&&q(b,t,r,{locale:a})},[r,t,N,s,H,b]);var v={ref:P,onClick:function(a){f||"function"!=typeof U||U(a),f&&e.props&&"function"==typeof e.props.onClick&&e.props.onClick(a),a.defaultPrevented||function(a,e,d,f,g,i,j,k,b){if("A"!==a.currentTarget.nodeName.toUpperCase()||(!(m=(l=a).currentTarget.target)||"_self"===m)&&!l.metaKey&&!l.ctrlKey&&!l.shiftKey&&!l.altKey&&(!l.nativeEvent||2!==l.nativeEvent.which)&&h.isLocalURL(d)){a.preventDefault();var l,m,c=function(){e[g?"replace":"push"](d,f,{shallow:i,locale:k,scroll:j})};b?b(c):c()}}(a,b,t,r,R,S,T,s,x?W:void 0)},onMouseEnter:function(a){f||"function"!=typeof V||V(a),f&&e.props&&"function"==typeof e.props.onMouseEnter&&e.props.onMouseEnter(a),h.isLocalURL(t)&&q(b,t,r,{priority:!0})}};if(!f||F||"a"===e.type&&!("href"in e.props)){var z=void 0!==s?s:b&&b.locale,Q=b&&b.isLocaleDomain&&m.getDomainLocale(r,z,b.locales,b.domainLocales);v.href=Q||n.addBasePath(i.addLocale(r,z,b&&b.defaultLocale))}return f?d.default.cloneElement(e,v):d.default.createElement("a",Object.assign({},G,v),c)});a.default=f,("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&& void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),e.exports=a.default)},639:function(c,a,b){"use strict";var d=b(5696);Object.defineProperty(a,"__esModule",{value:!0}),a.useIntersection=function(a){var j=a.rootRef,k=a.rootMargin,l=a.disabled||!g,p=e.useRef(),b=d(e.useState(!1),2),c=b[0],q=b[1],i=d(e.useState(null),2),m=i[0],n=i[1];e.useEffect(function(){if(g){if(p.current&&(p.current(),p.current=void 0),!l&&!c)return m&&m.tagName&&(p.current=h(m,function(a){return a&&q(a)},{root:null==j?void 0:j.current,rootMargin:k})),function(){null==p.current||p.current(),p.current=void 0}}else if(!c){var a=f.requestIdleCallback(function(){return q(!0)});return function(){return f.cancelIdleCallback(a)}}},[m,l,k,j,c]);var o=e.useCallback(function(){q(!1)},[]);return[n,c,o]};var e=b(7294),f=b(6286),g="function"==typeof IntersectionObserver;function h(b,c,d){var a=k(d),g=a.id,e=a.observer,f=a.elements;return f.set(b,c),e.observe(b),function(){if(f.delete(b),e.unobserve(b),0===f.size){e.disconnect(),i.delete(g);var a=j.findIndex(function(a){return a.root===g.root&&a.margin===g.margin});a> -1&&j.splice(a,1)}}}var i=new Map,j=[];function k(b){var a,c={root:b.root||null,margin:b.rootMargin||""},d=j.find(function(a){return a.root===c.root&&a.margin===c.margin});if(d&&(a=i.get(d)))return a;var e=new Map,f=new IntersectionObserver(function(a){a.forEach(function(a){var b=e.get(a.target),c=a.isIntersecting||a.intersectionRatio>0;b&&c&&b(c)})},b);return a={id:c,observer:f,elements:e},j.push(c),i.set(c,a),a}("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&& void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),c.exports=a.default)},1992:function(h,a,d){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.FullAppTreeContext=a.AppTreeContext=a.AppRouterContext=void 0;var b,c=(b=d(7294),b&&b.__esModule?b:{default:b}),e=c.default.createContext(null);a.AppRouterContext=e;var f=c.default.createContext(null);a.AppTreeContext=f;var g=c.default.createContext(null);a.FullAppTreeContext=g},2119:function(g,b,a){"use strict";a.r(b),a.d(b,{default:function(){return l}});var c=a(1664),h=a.n(c),d=a(1849),e=a(9366),i=a.n(e),j=a(5893);function f(a){var b,c,d;return null!==(b=a[0])&& void 0!==b&&b.children?f(null===(c=a[0])|| void 0===c?void 0:c.children):null===(d=a[0])|| void 0===d?void 0:d.key}var k=f(d.I);function l(){return(0,j.jsxs)("div",{className:i().content,children:[(0,j.jsx)("div",{className:i().title,children:"Toys"}),(0,j.jsx)("div",{className:i().desc,children:"HTML5 api demo\u3001\u624B\u5199\u4EE3\u7801\u3001react\u8F6E\u5B50demo\u3001\u5404\u79CD toys"}),(0,j.jsx)(h(),{href:k,children:(0,j.jsx)("a",{className:i().getStart,children:"Get start"})})]})}},8312:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(2119)}])},9366:function(a){a.exports={content:"Home_content__56i6S",title:"Home_title__muWwX",desc:"Home_desc__kAkEO",getStart:"Home_getStart__8iszo"}},1664:function(a,c,b){a.exports=b(7942)}},function(a){a.O(0,[774,888,179],function(){var b;return a(a.s=8312)}),_N_E=a.O()}])