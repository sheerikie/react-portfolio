(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[7],{406:function(e,t,r){e.exports={content:"Projects_content__1oMVQ",title:"Projects_title__1Jlky",subtitle:"Projects_subtitle__1O3EY",projects:"Projects_projects__3yBmn",purple:"Projects_purple__2QT8H"}},407:function(e,t,r){e.exports={purple:"ProjectCard_purple__2HSeK",card:"ProjectCard_card__2fq4a",cardWrapper:"ProjectCard_cardWrapper__2kcw1",cardBody:"ProjectCard_cardBody__1Je6v",title:"ProjectCard_title__14g5a",description:"ProjectCard_description__1fq-t"}},433:function(e,t,r){"use strict";r.r(t);var n=r(85);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var c=r(406),i=r.n(c),s=r(87),o=r(28),l=r(407),j=r.n(l),d=r(3),b=r(13),u=r(25),O=r(2),h=function(e){var t=e.id,r=e.image,n=e.title,a=e.description,c=Object(d.g)();return Object(O.jsx)("li",{className:j.a.card,children:Object(O.jsxs)("div",{className:j.a.cardWrapper,children:[Object(O.jsx)(b.b,{to:{pathname:"/project/".concat(t),state:{background:c}},children:Object(O.jsx)(u.LazyLoadImage,{alt:"card-img",effect:"blur",src:r.src,width:"100%",style:{minHeight:"10rem"},placeholderSrc:r.placeholderSrc})}),Object(O.jsxs)("div",{className:j.a.cardBody,children:[Object(O.jsx)("h3",{className:j.a.title,children:n}),Object(O.jsx)("p",{className:j.a.description,children:a})]})]})})};t.default=function(){return Object(O.jsx)(s.a,{children:Object(O.jsxs)("div",{className:i.a.content,children:[Object(O.jsxs)("h1",{className:i.a.title,children:["My Recent ",Object(O.jsx)("strong",{className:i.a.purple,children:"Works"})]}),Object(O.jsx)("p",{className:i.a.subtitle,children:"Here are a few projects I've worked on recently."}),Object(O.jsx)("ul",{className:i.a.projects,children:o.a.map((function(e){return Object(O.jsx)(h,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e),e.id)}))})]})})}},59:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(1),a=r(24),c=function(){return Object(n.useContext)(a.a)}},70:function(e,t,r){"use strict";var n=r(85),a=r(15),c=r(17),i=r.n(c),s=r(71),o=r.n(s),l=r(1),j=r(2);t.a=function(e){var t=e.children,r=Object(l.useState)(!1),c=Object(a.a)(r,2),s=c[0],d=c[1];return window.addEventListener("scroll",(function(){d(window.scrollY>=20)})),Object(j.jsx)("div",{className:i()(o.a.header,Object(n.a)({},o.a.highlighted,s)),children:Object(j.jsx)("div",{className:o.a.container,children:t})})}},71:function(e,t,r){e.exports={header:"Header_header__1v0yI",container:"Header_container__21wXn",highlighted:"Header_highlighted__2ho2S"}},73:function(e,t,r){"use strict";var n=r(74),a=r.n(n),c=r(64),i=r(84),s=r(2);t.a=function(){var e=(new Date).getFullYear();return Object(s.jsx)("div",{className:a.a.footer,children:Object(s.jsxs)("div",{className:a.a.container,children:[Object(s.jsx)("div",{className:a.a.copyright,children:Object(s.jsx)("h3",{children:"Designed and Developed by Adrian Juma"})}),Object(s.jsx)("div",{className:a.a.copyright,children:Object(s.jsxs)("h3",{children:["Copyright \xa9 ",e," Adriatic.dev"]})}),Object(s.jsx)("div",{className:a.a.body,children:Object(s.jsxs)("ul",{className:a.a.socialIcons,children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://github.com/sheerikie",target:"_blank",rel:"noreferrer",children:Object(s.jsx)(c.a,{})})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://www.facebook.com/Snaychuk",target:"_blank",rel:"noreferrer",children:Object(s.jsx)(i.a,{})})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://t.me/snaichuk_v",target:"_blank",rel:"noreferrer",children:Object(s.jsx)(i.c,{})})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://www.linkedin.com/in/adrian-juma-bb259666/",target:"_blank",rel:"noreferrer",children:Object(s.jsx)(i.b,{})})})]})})]})})}},74:function(e,t,r){e.exports={footer:"Footer_footer__7dIj9",container:"Footer_container__188QZ",copyright:"Footer_copyright__2wqDr",body:"Footer_body__3Jawa",socialIcons:"Footer_socialIcons__2gElP"}},75:function(e,t,r){e.exports={navigationDrawerNav:"MainNavigation_navigationDrawerNav__3ezV1",desktop:"MainNavigation_desktop__3V__O",mobile:"MainNavigation_mobile__273-I"}},76:function(e,t,r){e.exports={navBar:"NavLinks_navBar__DGpCS",active:"NavLinks_active__2QU5z"}},77:function(e,t,r){e.exports={sideDrawer:"SideDrawer_sideDrawer__1fkRJ"}},78:function(e,t,r){e.exports={burger:"Burger_burger__2SKf0"}},79:function(e,t,r){e.exports={toggleTheme:"BtnToggleTheme_toggleTheme__1g1wC"}},80:function(e,t,r){e.exports={logoPrimary:"var(--logo-primary)"}},81:function(e,t,r){"use strict";var n,a=r(15),c=r(75),i=r.n(c),s=r(1),o=r(101),l=r(76),j=r.n(l),d=r(64),b=r(102),u=r(22),O=r(13),h=r(2),p=function(){return Object(h.jsxs)("ul",{className:j.a.navBar,children:[Object(h.jsx)("li",{children:Object(h.jsxs)(O.c,{to:u.b.HOME,activeClassName:j.a.active,exact:!0,children:[Object(h.jsx)(d.c,{}),"Home"]})}),Object(h.jsx)("li",{children:Object(h.jsxs)(O.c,{to:u.b.ABOUT,activeClassName:j.a.active,children:[Object(h.jsx)(d.d,{}),"About"]})}),Object(h.jsx)("li",{children:Object(h.jsxs)(O.c,{to:u.b.PROJECTS,activeClassName:j.a.active,children:[Object(h.jsx)(d.b,{}),"Projects"]})}),Object(h.jsx)("li",{children:Object(h.jsxs)(O.c,{to:u.b.RESUME,activeClassName:j.a.active,children:[Object(h.jsx)(b.a,{}),"Resume"]})})]})},x=r(77),m=r.n(x),f=r(48),_=r(23),v=function(e){var t=e.children,r=e.show,n=e.onClose;return Object(h.jsxs)(h.Fragment,{children:[r&&Object(h.jsx)(_.a,{onClick:n}),Object(h.jsx)(f.a,{in:r,timeout:200,classNames:"slide-in-left",mountOnEnter:!0,unmountOnExit:!0,children:Object(h.jsx)("aside",{className:m.a.sideDrawer,onClick:n,children:t})})]})},y=r(78),g=r.n(y),w=function(e){var t=e.onClick;return Object(h.jsxs)("button",{onClick:t,className:g.a.burger,children:[Object(h.jsx)("span",{}),Object(h.jsx)("span",{}),Object(h.jsx)("span",{})]})},N=r(79),k=r.n(N),P=r(16),E=["title","titleId"];function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function S(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function D(e,t){var r=e.title,a=e.titleId,c=S(e,E);return s.createElement("svg",C({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",ref:t,"aria-labelledby":a},c),r?s.createElement("title",{id:a},r):null,n||(n=s.createElement("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})))}var B,I,L,H,T,F,M,J,z,R=s.forwardRef(D),W=(r.p,["title","titleId"]);function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Y(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function q(e,t){var r=e.title,n=e.titleId,a=Y(e,W);return s.createElement("svg",A({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",ref:t,"aria-labelledby":n},a),r?s.createElement("title",{id:n},r):null,B||(B=s.createElement("circle",{cx:12,cy:12,r:5})),I||(I=s.createElement("line",{x1:12,y1:1,x2:12,y2:3})),L||(L=s.createElement("line",{x1:12,y1:21,x2:12,y2:23})),H||(H=s.createElement("line",{x1:4.22,y1:4.22,x2:5.64,y2:5.64})),T||(T=s.createElement("line",{x1:18.36,y1:18.36,x2:19.78,y2:19.78})),F||(F=s.createElement("line",{x1:1,y1:12,x2:3,y2:12})),M||(M=s.createElement("line",{x1:21,y1:12,x2:23,y2:12})),J||(J=s.createElement("line",{x1:4.22,y1:19.78,x2:5.64,y2:18.36})),z||(z=s.createElement("line",{x1:18.36,y1:5.64,x2:19.78,y2:4.22})))}var Q=s.forwardRef(q),V=(r.p,r(59)),X=function(e){var t=e.className,r=Object(V.a)(),n=r.dark,a=r.toggleTheme;return Object(h.jsxs)(P.a,{addClass:t,onClick:a,children:[n&&Object(h.jsx)(R,{className:k.a.toggleTheme}),!n&&Object(h.jsx)(Q,{className:k.a.toggleTheme})]})},U=(r(80),function(e){var t=e.className;return Object(h.jsx)("div",{className:t,children:Object(h.jsx)(O.b,{to:u.b.HOME})})});t.a=function(){var e=Object(s.useState)(!1),t=Object(a.a)(e,2),r=t[0],n=t[1],c=function(){n((function(e){return!e}))};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(U,{className:i.a.desktop}),Object(h.jsxs)("nav",{className:i.a.desktop,children:[Object(h.jsx)(p,{}),Object(h.jsx)(X,{})]}),Object(h.jsx)(o.a,{query:{maxWidth:768},children:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(w,{onClick:c}),Object(h.jsx)(U,{className:i.a.mobile}),Object(h.jsx)(X,{className:i.a.mobile})]})}}),Object(h.jsx)(v,{show:r,onClose:c,children:Object(h.jsx)("nav",{className:i.a.navigationDrawerNav,children:Object(h.jsx)(p,{})})})]})}},82:function(e,t,r){"use strict";var n=r(91),a=r.n(n),c={number:{value:20,density:{enable:!0,value_area:800}},color:{value:"#623686"},opacity:{value:1,random:!0,anim:{enable:!0,speed:1,opacity_min:.1,sync:!1}},size:{value:5,random:!0,anim:{enable:!0,speed:2,size_min:3,sync:!1}},line_linked:{enable_auto:!0,distance:50,color:"#623686",opacity:1,width:1,condensed_mode:{enable:!1,rotateX:600,rotateY:600}},move:{enable:!0,speed:1,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},i={number:{value:160,density:{enable:!0,value_area:1500}},line_linked:{enable:!1,opacity:.03},move:{direction:"right",speed:.05},size:{value:1},opacity:{anim:{enable:!0,speed:1,opacity_min:.05}}},s=r(59),o=r(2);t.a=function(){var e=Object(s.a)().dark?i:c;return Object(o.jsx)(a.a,{params:{particles:e,interactivity:{events:{onclick:{enable:!0,mode:"push"}},modes:{push:{particles_nb:1}}},retina_detect:!0}})}},87:function(e,t,r){"use strict";var n=r(88),a=r.n(n),c=r(70),i=r(82),s=r(73),o=r(81),l=r(2);t.a=function(e){var t=e.children;return Object(l.jsxs)("div",{className:a.a.layout,children:[Object(l.jsx)(i.a,{}),Object(l.jsx)(c.a,{children:Object(l.jsx)(o.a,{})}),Object(l.jsx)("div",{className:a.a.container,children:t}),Object(l.jsx)(s.a,{})]})}},88:function(e,t,r){e.exports={layout:"BaseLayout_layout__28d-V",container:"BaseLayout_container__15XpG"}}}]);
//# sourceMappingURL=7.924f801c.chunk.js.map