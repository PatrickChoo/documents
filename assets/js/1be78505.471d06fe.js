"use strict";(self.webpackChunkonekey_document=self.webpackChunkonekey_document||[]).push([[9514,4608],{8704:function(e,t,n){n.r(t),n.d(t,{default:function(){return G}});var a=n(7294),r=n(3905),l=n(2263),i=n(6291),o=n(2901),c=n(6010),s=n(3018),d=n(3783),u=n(7898),m=n(5537),h=n(7462),p=function(e){return a.createElement("svg",(0,h.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},f=n(4973),b=n(3366),v=n(6742),E=n(3919),Z=n(8617),g="menuLinkText_1J2g",k=function e(t,n){return"link"===t.type?(0,s.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},_=(0,a.memo)((function(e){var t=e.items,n=(0,b.Z)(e,["items"]);return a.createElement(a.Fragment,null,t.map((function(e,t){return a.createElement(C,(0,h.Z)({key:t,item:e},n))})))}));function C(e){var t=e.item,n=(0,b.Z)(e,["item"]);switch(t.type){case"category":return 0===t.items.length?null:a.createElement(N,(0,h.Z)({item:t},n));case"link":default:return a.createElement(S,(0,h.Z)({item:t},n))}}function N(e){var t,n=e.item,r=e.onItemClick,l=e.activePath,i=(0,b.Z)(e,["item","onItemClick","activePath"]),o=n.items,d=n.label,u=n.collapsible,m=k(n,l),p=(0,s.uR)({initialState:function(){return!!u&&(!m&&n.collapsed)}}),f=p.collapsed,v=p.setCollapsed,E=p.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,r=e.setCollapsed,l=(0,s.D9)(t);(0,a.useEffect)((function(){t&&!l&&n&&r(!1)}),[t,l,n])}({isActive:m,collapsed:f,setCollapsed:v}),a.createElement("li",{className:(0,c.Z)("menu__list-item",{"menu__list-item--collapsed":f})},a.createElement("a",(0,h.Z)({className:(0,c.Z)("menu__link",(t={"menu__link--sublist":u,"menu__link--active":u&&m},t[g]=!u,t)),onClick:u?function(e){e.preventDefault(),E()}:void 0,href:u?"#":void 0},i),d),a.createElement(s.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:f},a.createElement(_,{items:o,tabIndex:f?-1:0,onItemClick:r,activePath:l})))}function S(e){var t=e.item,n=e.onItemClick,r=e.activePath,l=(0,b.Z)(e,["item","onItemClick","activePath"]),i=t.href,o=t.label,s=k(t,r);return a.createElement("li",{className:"menu__list-item",key:o},a.createElement(v.Z,(0,h.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":s}),to:i},(0,E.Z)(i)&&{isNavLink:!0,exact:!0,onClick:n},l),(0,E.Z)(i)?o:a.createElement("span",null,o,a.createElement(Z.Z,null))))}var T="sidebar_15mo",I="sidebarWithHideableNavbar_267A",y="sidebarHidden_2kNb",w="sidebarLogo_3h0W",M="menu_Bmed",x="menuWithAnnouncementBar_2WvA",A="collapseSidebarButton_1CGd",L="collapseSidebarButtonIcon_3E-R";function P(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,f.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,f.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",A),onClick:t},a.createElement(p,{className:L}))}function B(e){var t,n,r=e.path,l=e.sidebar,i=e.onCollapse,o=e.isHidden,d=function(){var e=(0,s.nT)().isClosed,t=(0,a.useState)(!e),n=t[0],r=t[1];return(0,u.Z)((function(t){var n=t.scrollY;e||r(0===n)})),n}(),h=(0,s.LU)(),p=h.navbar.hideOnScroll,f=h.hideableSidebar,b=(0,s.nT)().isClosed;return a.createElement("div",{className:(0,c.Z)(T,(t={},t[I]=p,t[y]=o,t))},p&&a.createElement(m.Z,{tabIndex:-1,className:w}),a.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",M,(n={},n[x]=!b&&d,n))},a.createElement("ul",{className:"menu__list"},a.createElement(_,{items:l,activePath:r}))),f&&a.createElement(P,{onClick:i}))}var F=function(e){var t=e.toggleSidebar,n=e.sidebar,r=e.path;return a.createElement("ul",{className:"menu__list"},a.createElement(_,{items:n,activePath:r,onItemClick:function(){return t()}}))};function H(e){return a.createElement(s.Cv,{component:F,props:e})}var D=a.memo(B),W=a.memo(H);function R(e){var t=(0,d.Z)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(D,e),r&&a.createElement(W,e))}var O=n(2238),z=n(4608),V="backToTopButton_35hR",Y="backToTopButtonShow_18ls";function j(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var J=function(){var e,t=j(),n=t.smoothScrollTop,r=t.cancelScrollToTop,l=(0,a.useState)(!1),i=l[0],o=l[1];return(0,u.Z)((function(e,t){var n=e.scrollY;if(t){var a=n<t.scrollY;if(a||r(),n<300)o(!1);else if(a){var l=document.documentElement.scrollHeight;n+window.innerHeight<l&&o(!0)}else o(!1)}}),[]),a.createElement("button",{className:(0,c.Z)("clean-btn",V,(e={},e[Y]=i,e)),type:"button",title:"Scroll to top",onClick:function(){return n()}},a.createElement("svg",{viewBox:"0 0 24 24",width:"28"},a.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",fill:"currentColor"})))},U=n(5977),K={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docSidebarContainer:"docSidebarContainer_3Kbt",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"};function q(e){var t,n,i,d=e.currentDocRoute,u=e.versionMetadata,m=e.children,h=(0,l.Z)().isClient,b=u.pluginId,v=u.version,E=d.sidebar,Z=E?u.docsSidebars[E]:void 0,g=(0,a.useState)(!1),k=g[0],_=g[1],C=(0,a.useState)(!1),N=C[0],S=C[1],T=(0,a.useCallback)((function(){N&&S(!1),_(!k)}),[N]);return a.createElement(o.Z,{key:h,wrapperClassName:s.kM.wrapper.docPages,pageClassName:s.kM.page.docPage,searchMetadatas:{version:v,tag:(0,s.os)(b,v)}},a.createElement("div",{className:K.docPage},a.createElement(J,null),Z&&a.createElement("aside",{className:(0,c.Z)(K.docSidebarContainer,(t={},t[K.docSidebarContainerHidden]=k,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(K.docSidebarContainer)&&k&&S(!0)}},a.createElement(R,{key:E,sidebar:Z,path:d.path,onCollapse:T,isHidden:N}),N&&a.createElement("div",{className:K.collapsedDocSidebar,title:(0,f.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,f.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:T,onClick:T},a.createElement(p,{className:K.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,c.Z)(K.docMainContainer,(n={},n[K.docMainContainerEnhanced]=k||!Z,n))},a.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",K.docItemWrapper,(i={},i[K.docItemWrapperEnhanced]=k,i))},a.createElement(r.Zo,{components:O.Z},m)))))}var G=function(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,l=t.find((function(e){return(0,U.LX)(r.pathname,e)}));return l?a.createElement(q,{currentDocRoute:l,versionMetadata:n},(0,i.Z)(t,{versionMetadata:n})):a.createElement(z.default,e)}},6159:function(e,t,n){n.d(t,{N:function(){return u},Z:function(){return m}});var a=n(3366),r=n(7462),l=n(7294),i=n(6010),o=n(4973),c=n(3018),s="enhancedAnchor_2LWZ",d="h1Heading_27L5",u=function(e){var t=Object.assign({},e);return l.createElement("header",null,l.createElement("h1",(0,r.Z)({},t,{id:void 0,className:d}),t.children))},m=function(e){return"h1"===e?u:(t=e,function(e){var n,r=e.id,d=(0,a.Z)(e,["id"]),u=(0,c.LU)().navbar.hideOnScroll;return r?l.createElement(t,d,l.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,i.Z)("anchor",(n={},n[s]=!u,n)),id:r}),d.children,l.createElement("a",{className:"hash-link",href:"#"+r,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):l.createElement(t,d)});var t}},2238:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7462),r=n(7294),l=n(6742),i=n(2206),o=n(6159),c=n(6010),s=n(3018),d="details_1VDD";function u(e){var t=Object.assign({},e);return r.createElement(s.PO,(0,a.Z)({},t,{className:(0,c.Z)("alert alert--info",d,t.className)}))}var m={code:function(e){var t=e.children;return(0,r.isValidElement)(t)?t:t.includes("\n")?r.createElement(i.Z,e):r.createElement("code",e)},a:function(e){return r.createElement(l.Z,e)},pre:function(e){var t,n=e.children;return(0,r.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:r.createElement(i.Z,(0,r.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=r.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),l=r.createElement(r.Fragment,null,t.filter((function(e){return e!==n})));return r.createElement(u,(0,a.Z)({},e,{summary:n}),l)},h1:(0,o.Z)("h1"),h2:(0,o.Z)("h2"),h3:(0,o.Z)("h3"),h4:(0,o.Z)("h4"),h5:(0,o.Z)("h5"),h6:(0,o.Z)("h6")}},4608:function(e,t,n){n.r(t);var a=n(7294),r=n(2901),l=n(4973);t.default=function(){return a.createElement(r.Z,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);