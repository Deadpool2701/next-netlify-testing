_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{OG9N:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){a=!0,o=c}finally{try{!r&&l.return&&l.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=n("q1tI"),o=s(a),i=s(n("17x9")),l=s(n("nKnk")),c=s(n("X3+i"));function s(e){return e&&e.__esModule?e:{default:e}}var u={overflow:"hidden",position:"relative"};function f(e,t){return"\n    .react-stars-"+t+":before {\n      position: absolute;\n      overflow: hidden;\n      display: block;\n      z-index: 1;\n      top: 0; left: 0;\n      width: 50%;\n      content: attr(data-forhalf);\n      color: "+e+";\n  }"}function d(e){var t=(0,a.useState)(""),n=r(t,2),i=n[0],s=n[1],d=(0,a.useState)(0),p=r(d,2),h=p[0],y=p[1],v=(0,a.useState)([]),m=r(v,2),b=m[0],g=m[1],x=(0,a.useState)(!1),j=r(x,2),w=j[0],_=j[1],O=(0,l.default)(e),I=r(O,2),S=I[0],C=I[1],N=(0,a.useState)(0),A=r(N,2),E=A[0],M=A[1],k=(0,a.useState)(!1),H=r(k,2),D=H[0],F=H[1],z=(0,a.useState)(""),T=r(z,2),P=T[0],B=T[1];function W(e){"undefined"===typeof e&&(e=S.isHalf?Math.floor(h):Math.round(h));for(var t=[],n=0;n<S.count;n++)t.push({active:n<=e-1});return t}function L(e){if(S.edit){var t=Number(e.currentTarget.getAttribute("data-index"));if(S.isHalf){var n=q(e);F(n),n&&(t+=1),M(t)}else t+=1;!function(e){var t=b.filter((function(e){return e.active}));e!==t.length&&g(W(e))}(t)}}function q(e){var t=e.target.getBoundingClientRect(),n=e.clientX-t.left;return(n=Math.round(Math.abs(n)))>t.width/2}function X(){S.edit&&(K(h),g(W()))}function K(e){S.isHalf&&(F(function(e){return e%1===0}(e)),M(Math.floor(e)))}function U(e){if(S.edit){var t=Number(e.currentTarget.getAttribute("data-index")),n=void 0;if(S.isHalf){var r=q(e);F(r),r&&(t+=1),n=r?t:t+.5,M(t)}else n=t+=1;G(n)}}function G(t){t!==h&&(g(W(t)),y(t),e.onChange(t))}return(0,a.useEffect)((function(){var t,n;!function(){var t="react-stars";B(e.classNames+" "+t)}(),t=e.value,n=e.count,y(t<0||t>n?0:t),g(W(e.value)),C(e),s((Math.random()+"").replace(".","")),_(function(e){return!e.isHalf&&e.emptyIcon&&e.filledIcon||e.isHalf&&e.emptyIcon&&e.halfIcon&&e.filledIcon}(e)),M(Math.floor(e.value)),F(e.isHalf&&e.value%1<.5)}),[]),o.default.createElement("div",{className:"react-stars-wrapper-"+i,style:{display:"flex"}},o.default.createElement("div",{tabIndex:S.a11y&&S.edit?0:null,"aria-label":"add rating by typing an integer from 0 to 5 or pressing arrow keys",onKeyDown:function(e){if(S.a11y||S.edit){var t=e.key,n=h,r=Number(t);r?Number.isInteger(r)&&r>0&&r<=S.count&&(n=r):("ArrowUp"===t||"ArrowRight"===t)&&n<S.count?(e.preventDefault(),n+=S.isHalf?.5:1):("ArrowDown"===t||"ArrowLeft"===t)&&n>.5&&(e.preventDefault(),n-=S.isHalf?.5:1),K(n),G(n)}},className:P,style:u},S.isHalf&&function(){return o.default.createElement("style",{dangerouslySetInnerHTML:{__html:w?(e=S.activeColor,"\n          span.react-stars-half > * {\n          color: "+e+";\n      }"):f(S.activeColor,i)}});var e}(),b.map((function(e,t){return o.default.createElement(c.default,{key:t,index:t,active:e.active,config:S,onMouseOver:L,onMouseLeave:X,onClick:U,halfStarHidden:D,halfStarAt:E,isUsingIcons:w,uniqueness:i})})),o.default.createElement("p",{style:{position:"absolute",left:"-200rem"},role:"status"},h)))}d.propTypes={classNames:i.default.string,edit:i.default.bool,half:i.default.bool,value:i.default.number,count:i.default.number,char:i.default.string,size:i.default.number,color:i.default.string,activeColor:i.default.string,emptyIcon:i.default.element,halfIcon:i.default.element,filledIcon:i.default.element,a11y:i.default.bool},d.defaultProps={edit:!0,half:!1,value:0,count:5,char:"\u2605",size:15,color:"gray",activeColor:"#ffd700",a11y:!0,onChange:function(){}},t.default=d},QzAA:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/favorites",function(){return n("Zun5")}])},"X3+i":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=function(e){var t=e.index,n=e.active,a=e.config,o=e.onMouseOver,c=e.onMouseLeave,s=e.onClick,u=e.halfStarHidden,f=e.halfStarAt,d=e.isUsingIcons,p=e.uniqueness,h=a.color,y=a.activeColor,v=a.size,m=a.char,b=a.isHalf,g=a.edit,x=a.halfIcon,j=a.emptyIcon,w=a.filledIcon,_="",O=!1;b&&!u&&f===t&&(_=d?"react-stars-half":"react-stars-"+p,O=!0);var I=r({},l,{color:n?y:h,cursor:g?"pointer":"default",fontSize:v+"px"});return i.default.createElement("span",{className:_,style:I,key:t,"data-index":t,"data-forhalf":w?t:m,onMouseOver:o,onMouseMove:o,onMouseLeave:c,onClick:s},d?n?w:!n&&O?x:j:m)};var a,o=n("q1tI"),i=(a=o)&&a.__esModule?a:{default:a};var l={position:"relative",overflow:"hidden",cursor:"pointer",display:"block",float:"left"}},Zun5:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return A}));var r=n("nKUr"),a=n("nTs4"),o=n("cZC5"),i=n("rp2g"),l=n("o0o1"),c=n.n(l),s=n("HaE+"),u=n("vOnD"),f=u.d.div.withConfig({displayName:"styled__Wrapper",componentId:"sc-1o5gfyi-0"})(["display:flex;flex-direction:column;gap:20px;margin-top:70px;"]),d=u.d.div.withConfig({displayName:"styled__Card",componentId:"sc-1o5gfyi-1"})(["display:flex;flex:0 1 150px;"]),p=u.d.div.withConfig({displayName:"styled__Description",componentId:"sc-1o5gfyi-2"})(["display:flex;width:100%;height:44px;align-items:center;justify-content:space-between;"]),h=u.d.div.withConfig({displayName:"styled__Inner",componentId:"sc-1o5gfyi-3"})(["margin-left:10px;display:flex;width:100%;flex-direction:column;"]),y=u.d.div.withConfig({displayName:"styled__ButtonWrapper",componentId:"sc-1o5gfyi-4"})(["margin-left:auto;margin-bottom:5px;"]),v=u.d.div.withConfig({displayName:"styled__People",componentId:"sc-1o5gfyi-5"})(["margin-bottom:10px;"]),m=u.d.span.withConfig({displayName:"styled__Title",componentId:"sc-1o5gfyi-6"})(["text-transform:uppercase;font-weight:",";line-height:18px;font-size:18px;"],(function(e){return e.theme.typography.fontWeight.normal})),b=u.d.span.withConfig({displayName:"styled__PeopleWrapper",componentId:"sc-1o5gfyi-7"})(["margin-left:10px;"]),g=u.d.span.withConfig({displayName:"styled__Person",componentId:"sc-1o5gfyi-8"})(["font-weight:",";"],(function(e){return e.theme.typography.fontWeight.bold})),x=n("Aiso"),j=n.n(x),w=n("OG9N"),_=n.n(w),O=n("aNv/"),I=n("n57c"),S=n("efbE"),C=n("nOHt"),N=function(e){var t=e.favoritesList,n=Object(C.useRouter)(),o=function(){var e=Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.b.delete("/favorite");case 2:t=e.sent,"Success"===t.data.status&&n.reload();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsx)(a.a,{children:Object(r.jsxs)(f,{children:[t.length>0&&Object(r.jsx)(y,{children:Object(r.jsx)(I.a,{onClick:o,children:"Clear all"})}),t.length>0?t.map((function(e,t){var n,a;return Object(r.jsxs)(d,{children:[e.detail.url_path?Object(r.jsx)(j.a,{src:"https://image.tmdb.org/t/p/w500/".concat(e.detail.url_path),width:180,height:100}):Object(r.jsx)(j.a,{width:180,height:100,src:"/no-image.jpeg"}),Object(r.jsxs)(h,{children:[Object(r.jsxs)(p,{children:[Object(r.jsx)(m,{children:e.detail.title}),Object(r.jsx)(_.a,{edit:!1,count:5,value:(null===(n=e.ratings[0])||void 0===n?void 0:n.rating)/2||0,size:24,activeColor:O.a.brand.yellow})]}),Object(r.jsxs)(v,{children:[Object(r.jsx)("span",{children:"Director"}),Object(r.jsx)(b,{children:Object(r.jsx)(g,{children:null===(a=e.people.director[0])||void 0===a?void 0:a.name})})]}),Object(r.jsxs)(v,{children:[Object(r.jsx)("span",{children:"Stars "}),Object(r.jsx)(b,{children:e.people.stars.map((function(e,t){return Object(r.jsxs)(g,{children:[e.name,", "]},t)}))})]})]})]},t)})):Object(r.jsx)("h1",{children:"You haven't add any favourite movie yet"})]})})},A=!0;t.default=function(e){return Object(r.jsxs)(a.b,{customMetaType:"movies",children:[Object(r.jsx)(o.a,{}),Object(r.jsx)(N,{favoritesList:e.data}),Object(r.jsx)(i.a,{})]})}},"aNv/":function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return i}));var r=n("BsWD");function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){a=!0,o=c}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o={brand:{yellow:"#F2C94C",black:"#2B2D33",silver:"#F4F4F4",white:"#FFFFFF",yellowDark:"#fed500"},accent:{dark:"#004454",default:"#037080"},gray:{"02":"#FBFBFB","04":"#F8F8F8",10:"#E9EAEA",20:"#D5D5D6",40:"#AAABAD",60:"#808185",70:"#404247"},interactive:{disabled:"#DDDEE2"}},i={fontSize:{h1:"30px",h2:"20px",h3:"16px",h4:"14px",button:"14px",body:"14px",desktop:{h1:"60px",h2:"30px",h3:"20px",h4:"16px"}},fontFamily:{default:'"Work Sans", sans-serif'},fontWeight:{normal:"normal",semiBold:"600",bold:"700"}},l=Object.entries({sm:"640px",md:"768px",lg:"1024px",xl:"1280px"}).map((function(e){var t=a(e,2),n=t[0],r=t[1];return[n,{up:"@media (min-width: ".concat(r,")"),down:"@media (max-width: calc(".concat(r," - 0.02px))")}]})),c=Object.fromEntries(l),s={colors:o,media:c,typography:i};t.b=s},nKnk:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){a=!0,o=c}finally{try{!r&&l.return&&l.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t.default=function(e){var t=(0,a.useState)(e.count),n=r(t,2),o=n[0],i=n[1],l=(0,a.useState)(e.size),c=r(l,2),s=c[0],u=c[1],f=(0,a.useState)(e.char),d=r(f,2),p=d[0],h=d[1],y=(0,a.useState)(e.color),v=r(y,2),m=v[0],b=v[1],g=(0,a.useState)(e.activeColor),x=r(g,2),j=x[0],w=x[1],_=(0,a.useState)(e.isHalf),O=r(_,2),I=O[0],S=O[1],C=(0,a.useState)(e.edit),N=r(C,2),A=N[0],E=N[1],M=(0,a.useState)(e.emptyIcon),k=r(M,2),H=k[0],D=k[1],F=(0,a.useState)(e.halfIcon),z=r(F,2),T=z[0],P=z[1],B=(0,a.useState)(e.filledIcon),W=r(B,2),L=W[0],q=W[1],X=(0,a.useState)(e.a11y),K=r(X,2),U=K[0],G=K[1];return[{count:o,size:s,char:p,color:m,activeColor:j,isHalf:I,edit:A,emptyIcon:H,halfIcon:T,filledIcon:L,a11y:U},function(e){i(e.count),u(e.size),h(e.char),b(e.color),w(e.activeColor),S(e.isHalf),E(e.edit),D(e.emptyIcon),P(e.halfIcon),q(e.filledIcon),G(e.a11y)}]};var a=n("q1tI")}},[["QzAA",0,2,1,3,5]]]);