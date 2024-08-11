"use strict";(self.webpackChunk_minimal_material_kit_react=self.webpackChunk_minimal_material_kit_react||[]).push([[4451],{87383:function(t,e,r){r.d(e,{Z:function(){return g}});var n=r(1413),i=r(45987),a=r(50228),o=r(94162),l=r(4565),c=r(33888),s=r(46283),d=r(11087),h=r(80184);function m(t){var e=t.link,r=t.activeLast,i=t.disabled,o=e.name,l=e.href,c=e.icon,m=(0,n.Z)({display:"inline-flex",alignItems:"center",color:"text.primary"},i&&!r&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),p=(0,h.jsxs)(h.Fragment,{children:[c&&(0,h.jsx)(a.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:c}),o]});return l?(0,h.jsx)(s.Z,{component:d.rU,to:l,sx:m,children:p}):(0,h.jsxs)(a.Z,{sx:m,children:[" ",p," "]})}var p=["links","action","heading","moreLink","activeLast","sx"];function g(t){var e=t.links,r=t.action,d=t.heading,g=t.moreLink,u=t.activeLast,x=t.sx,v=(0,i.Z)(t,p),f=e[e.length-1].name;return(0,h.jsxs)(a.Z,{sx:(0,n.Z)({mb:5},x),children:[(0,h.jsxs)(o.Z,{direction:"row",alignItems:"center",children:[(0,h.jsxs)(a.Z,{sx:{flexGrow:1},children:[d&&(0,h.jsx)(l.Z,{variant:"h4",gutterBottom:!0,children:d}),!!e.length&&(0,h.jsx)(c.Z,(0,n.Z)((0,n.Z)({separator:(0,h.jsx)(Z,{})},v),{},{children:e.map((function(t){return(0,h.jsx)(m,{link:t,activeLast:u,disabled:t.name===f},t.name||"")}))}))]}),r&&(0,h.jsxs)(a.Z,{sx:{flexShrink:0},children:[" ",r," "]})]}),!!g&&(0,h.jsx)(a.Z,{sx:{mt:2},children:g.map((function(t){return(0,h.jsx)(s.Z,{noWrap:!0,href:t,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:t},t)}))})]})}function Z(){return(0,h.jsx)(a.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},22734:function(t,e,r){r.d(e,{Z:function(){return m}});var n=r(1413),i=r(45987),a=r(4407);var o=r(4942),l=r(60277),c=r(12065),s=(0,l.ZP)("span")((function(t){var e=t.arrow,r=t.theme,i="solid 1px ".concat((0,c.Fq)(r.palette.grey[500],.12)),a={borderRadius:"0 0 3px 0",top:-6,borderBottom:i,borderRight:i},l={borderRadius:"3px 0 0 0",bottom:-6,borderTop:i,borderLeft:i},s={borderRadius:"0 3px 0 0",left:-6,borderTop:i,borderRight:i},d={borderRadius:"0 0 0 3px",right:-6,borderBottom:i,borderLeft:i};return(0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,o.Z)({display:"none"},r.breakpoints.up("sm"),{zIndex:1,width:12,height:12,content:"''",display:"block",position:"absolute",transform:"rotate(-135deg)",background:r.palette.background.paper}),"top-left"===e&&(0,n.Z)((0,n.Z)({},a),{},{left:20})),"top-center"===e&&(0,n.Z)((0,n.Z)({},a),{},{left:0,right:0,margin:"auto"})),"top-right"===e&&(0,n.Z)((0,n.Z)({},a),{},{right:20})),"bottom-left"===e&&(0,n.Z)((0,n.Z)({},l),{},{left:20})),"bottom-center"===e&&(0,n.Z)((0,n.Z)({},l),{},{left:0,right:0,margin:"auto"})),"bottom-right"===e&&(0,n.Z)((0,n.Z)({},l),{},{right:20})),"left-top"===e&&(0,n.Z)((0,n.Z)({},s),{},{top:20})),"left-center"===e&&(0,n.Z)((0,n.Z)({},s),{},{top:0,bottom:0,margin:"auto"})),"left-bottom"===e&&(0,n.Z)((0,n.Z)({},s),{},{bottom:20})),"right-top"===e&&(0,n.Z)((0,n.Z)({},d),{},{top:20})),"right-center"===e&&(0,n.Z)((0,n.Z)({},d),{},{top:0,bottom:0,margin:"auto"})),"right-bottom"===e&&(0,n.Z)((0,n.Z)({},d),{},{bottom:20}))})),d=r(80184),h=["open","children","arrow","disabledArrow","sx"];function m(t){var e=t.open,r=t.children,o=t.arrow,l=void 0===o?"top-right":o,c=t.disabledArrow,m=t.sx,p=(0,i.Z)(t,h),g=function(t){var e;switch(t){case"top-left":e={style:{ml:-.75},anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}};break;case"top-center":e={style:{},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}};break;case"top-right":default:e={style:{ml:.75},anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"}};break;case"bottom-left":e={style:{ml:-.75},anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"bottom",horizontal:"left"}};break;case"bottom-center":e={style:{},anchorOrigin:{vertical:"top",horizontal:"center"},transformOrigin:{vertical:"bottom",horizontal:"center"}};break;case"bottom-right":e={style:{ml:.75},anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"bottom",horizontal:"right"}};break;case"left-top":e={style:{mt:-.75},anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"left"}};break;case"left-center":e={anchorOrigin:{vertical:"center",horizontal:"right"},transformOrigin:{vertical:"center",horizontal:"left"}};break;case"left-bottom":e={style:{mt:.75},anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"bottom",horizontal:"left"}};break;case"right-top":e={style:{mt:-.75},anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"}};break;case"right-center":e={anchorOrigin:{vertical:"center",horizontal:"left"},transformOrigin:{vertical:"center",horizontal:"right"}};break;case"right-bottom":e={style:{mt:.75},anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"bottom",horizontal:"right"}}}return e}(l),Z=g.style,u=g.anchorOrigin,x=g.transformOrigin;return(0,d.jsxs)(a.ZP,(0,n.Z)((0,n.Z)({open:Boolean(e),anchorEl:e,anchorOrigin:u,transformOrigin:x,PaperProps:{sx:(0,n.Z)((0,n.Z)({p:1,width:"auto",overflow:"inherit"},Z),{},{"& .MuiMenuItem-root":{px:1,typography:"body2",borderRadius:.75,"& svg":{mr:2,width:20,height:20,flexShrink:0}}},m)}},p),{},{children:[!c&&(0,d.jsx)(s,{arrow:l}),r]}))}},24451:function(t,e,r){r.r(e),r.d(e,{default:function(){return I}});var n=r(1413),i=r(6907),a=r(74142),o=r(50228),l=r(476),c=r(94162),s=r(7055),d=r(71353),h=r(87383),m=r(45987),p=r(58393),g=r(93433);function Z(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"children",r=[],n=null===t||void 0===t?void 0:t.map((function(t){return t[e]&&t[e].length&&(r=[].concat((0,g.Z)(r),(0,g.Z)(t[e]))),t}));return null===n||void 0===n?void 0:n.concat(r.length?Z(r,e):r)}var u=r(12065),x=r(83423),v=r(48928),f=r(4565),b=r(37749),j=r(80184);function k(t){var e=t.node,r=t.depth,i=t.length,l=t.sx,s=(0,a.Z)(),d="light"===s.palette.mode,h=function(t){return{bgcolor:(0,u.Fq)(s.palette[t].main,.08),border:"solid 1px ".concat((0,u.Fq)(s.palette[t].main,.24)),color:d?s.palette[t].darker:s.palette[t].lighter}},m=1===r,p="root"===e.group,g="product design"===e.group,Z="development"===e.group,k="marketing"===e.group;return(0,j.jsxs)(c.Z,{sx:{position:"relative",display:"inline-flex"},alignItems:"center",children:[!m&&(0,j.jsx)(x.Z,{alt:e.name,src:e.avatar||"",sx:{mt:-3.5,zIndex:9,width:56,height:56,position:"absolute",border:"solid 4px ".concat(s.palette.background.paper)}}),(0,j.jsxs)(v.Z,{sx:(0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)({pt:5,pb:3,minWidth:200,borderRadius:1.5,textTransform:"capitalize"},m&&{py:2}),m&&g&&h("primary")),m&&Z&&h("info")),m&&k&&h("warning")),l),children:[1!==r&&!p&&(0,j.jsx)(o.Z,{sx:(0,n.Z)((0,n.Z)((0,n.Z)({top:0,left:0,width:1,height:4,position:"absolute",borderRadius:1.5},g&&{bgcolor:"primary.light"}),Z&&{bgcolor:"info.light"}),k&&{bgcolor:"warning.light"})}),(0,j.jsxs)(f.Z,{variant:m?"subtitle1":"subtitle2",noWrap:!0,children:[e.name,m&&(0,j.jsx)(b.Z,{color:(Z?"info":k&&"warning")||"primary",sx:{ml:1},children:i})]}),!m&&(0,j.jsx)(f.Z,{variant:"caption",component:"div",noWrap:!0,sx:{color:"text.secondary"},children:e.role})]})]})}function y(t){var e=t.node,r=t.sx;return(0,j.jsx)(v.Z,{sx:(0,n.Z)({p:2,boxShadow:0,borderRadius:1.5,display:"inline-flex",textTransform:"capitalize",color:function(t){return"light"===t.palette.mode?"primary.darker":"primary.lighter"},bgcolor:function(t){return(0,u.Fq)(t.palette.primary.main,.08)},border:function(t){return"1px solid ".concat((0,u.Fq)(t.palette.primary.main,.24))}},r),children:(0,j.jsx)(f.Z,{variant:"subtitle2",children:e.name})})}var z=r(29439),w=r(72791),O=r(13811),P=r(35702),E=r(63402),R=r(22734);function C(t){var e=t.node,r=t.onEdit,i=t.onDelete,a=t.sx,o=(0,w.useState)(null),l=(0,z.Z)(o,2),c=l[0],s=l[1],d=function(){s(null)};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(v.Z,{sx:(0,n.Z)({p:2,minWidth:200,borderRadius:1.5,textAlign:"left",position:"relative",display:"inline-flex",flexDirection:"column",textTransform:"capitalize"},a),children:[(0,j.jsx)(O.Z,{color:c?"inherit":"default",onClick:function(t){s(t.currentTarget)},sx:{position:"absolute",top:8,right:8},children:(0,j.jsx)(E.Z,{icon:"eva:more-horizontal-fill"})}),(0,j.jsx)(x.Z,{alt:e.name,src:e.avatar||"",sx:{mr:2,mb:1,width:48,height:48}}),(0,j.jsx)(f.Z,{variant:"subtitle2",noWrap:!0,children:e.name}),(0,j.jsx)(f.Z,{variant:"caption",component:"div",noWrap:!0,sx:{color:"text.secondary"},children:e.role})]}),(0,j.jsxs)(R.Z,{open:c,onClose:d,anchorOrigin:{vertical:"center",horizontal:"right"},transformOrigin:{vertical:"center",horizontal:"left"},arrow:"left-center",sx:{width:160},children:[i&&(0,j.jsxs)(P.Z,{onClick:function(){d(),i()},sx:{color:"error.main"},children:[(0,j.jsx)(E.Z,{icon:"eva:trash-2-outline"}),"Delete"]}),r&&(0,j.jsxs)(P.Z,{onClick:function(){d(),r()},children:[(0,j.jsx)(E.Z,{icon:"eva:edit-fill"}),"Edit"]})]})]})}var L=["data","variant","sx"];function F(t){var e=t.data,r=t.variant,i=void 0===r?"simple":r,o=t.sx,l=(0,m.Z)(t,L),c=(0,a.Z)();return(0,j.jsx)(p.m,(0,n.Z)((0,n.Z)({lineWidth:"1.5px",nodePadding:"4px",lineBorderRadius:"24px",lineColor:c.palette.divider,label:"simple"===i&&(0,j.jsx)(y,{sx:o,node:e})||"standard"===i&&(0,j.jsx)(C,{sx:o,node:e,onEdit:function(){return console.log("EDIT",e.name)},onDelete:function(){return console.log("DELETE",e.name)}})||"group"===i&&(0,j.jsx)(k,{sx:o,node:e})},l),{},{children:e.children.map((function(t){return(0,j.jsx)(T,{depth:1,data:t,variant:i,sx:o},t.name)}))}))}function T(t){var e,r=t.data,n=t.depth,i=t.variant,a=t.sx,o=r.children&&!!r.children;return(0,j.jsx)(p.O,{label:"simple"===i&&(0,j.jsx)(y,{sx:a,node:r})||"standard"===i&&(0,j.jsx)(C,{sx:a,node:r,onEdit:function(){return console.log("EDIT",r.name)},onDelete:function(){return console.log("DELETE",r.name)}})||"group"===i&&(0,j.jsx)(k,{sx:a,node:r,depth:n,length:null===(e=Z(r.children,"children"))||void 0===e?void 0:e.length}),children:o&&(0,j.jsx)(_,{data:r.children,depth:n,variant:i,sx:a})})}function _(t){var e=t.data,r=t.depth,n=t.variant,i=t.sx;return(0,j.jsx)(j.Fragment,{children:e.map((function(t){return(0,j.jsx)(T,{data:t,depth:r+1,variant:n,sx:i},t.name)}))})}var D=r(26052);function I(){var t=(0,a.Z)();return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(i.ql,{children:(0,j.jsx)("title",{children:" Extra Components: Organizational Chart | NotPump"})}),(0,j.jsx)(o.Z,{sx:{pt:6,pb:1,bgcolor:"light"===t.palette.mode?"grey.200":"grey.800"},children:(0,j.jsx)(l.Z,{children:(0,j.jsx)(h.Z,{heading:"Organizational Chart",links:[{name:"Components",href:s.ko.components},{name:"Organizational Chart"}],moreLink:["https://www.npmjs.com/package/react-organizational-chart","https://daniel-hauser.github.io/react-organizational-chart/?path=/story/example-tree--basic"]})})}),(0,j.jsx)(l.Z,{sx:{my:10},children:(0,j.jsxs)(c.Z,{spacing:5,children:[(0,j.jsx)(D.g,{title:"Simple",children:(0,j.jsx)(F,{data:q,lineColor:t.palette.primary.light})}),(0,j.jsx)(D.g,{title:"Standard",sx:{overflow:"auto"},children:(0,j.jsx)(F,{data:q,variant:"standard",lineHeight:"40px"})}),(0,j.jsx)(D.g,{title:"By Group",sx:{overflow:"auto"},children:(0,j.jsx)(F,{data:B,variant:"group",lineHeight:"64px"})})]})})]})}var W=function(t,e,r,n){return{name:t,group:e,role:r,avatar:n}},q=(0,n.Z)((0,n.Z)({},W("tasha mcneill","root","ceo, co-founder",d.ZP.image.avatar(1))),{},{children:[(0,n.Z)((0,n.Z)({},W("john stone","product design","lead",d.ZP.image.avatar(2))),{},{children:[(0,n.Z)((0,n.Z)({},W("rimsha wynn","product design","senior",d.ZP.image.avatar(3))),{},{children:null})]}),(0,n.Z)((0,n.Z)({},W("ponnappa priya","development","lead",d.ZP.image.avatar(4))),{},{children:[(0,n.Z)((0,n.Z)({},W("tyra elliott","development","senior",d.ZP.image.avatar(5))),{},{children:[(0,n.Z)((0,n.Z)({},W("sheridan mckee","development","back end developer",d.ZP.image.avatar(6))),{},{children:[(0,n.Z)((0,n.Z)({},W("ang li","development","back end developer",d.ZP.image.avatar(7))),{},{children:null})]}),(0,n.Z)((0,n.Z)({},W("hope ahmad","development","front end",d.ZP.image.avatar(8))),{},{children:null})]})]}),(0,n.Z)((0,n.Z)({},W("peter stanbridge","marketing","lead",d.ZP.image.avatar(9))),{},{children:[(0,n.Z)((0,n.Z)({},W("madeline harding","marketing","support",d.ZP.image.avatar(10))),{},{children:null}),(0,n.Z)((0,n.Z)({},W("eoin medrano","marketing","content writer",d.ZP.image.avatar(11))),{},{children:null})]})]}),B=(0,n.Z)((0,n.Z)({},W("tasha mcneill","root","ceo, co-founder",d.ZP.image.avatar(1))),{},{children:[(0,n.Z)((0,n.Z)({},W("product design","product design",null,null)),{},{children:[(0,n.Z)((0,n.Z)({},W("john stone","product design","lead",d.ZP.image.avatar(2))),{},{children:[(0,n.Z)((0,n.Z)({},W("rimsha wynn","product design","senior",d.ZP.image.avatar(3))),{},{children:null})]})]}),(0,n.Z)((0,n.Z)({},W("development","development",null,null)),{},{children:[(0,n.Z)((0,n.Z)({},W("ponnappa priya","development","lead",d.ZP.image.avatar(4))),{},{children:[(0,n.Z)((0,n.Z)({},W("tyra elliott","development","senior",d.ZP.image.avatar(5))),{},{children:[(0,n.Z)((0,n.Z)({},W("sheridan mckee","development","back end developer",d.ZP.image.avatar(6))),{},{children:[(0,n.Z)((0,n.Z)({},W("ang li","development","back end developer",d.ZP.image.avatar(7))),{},{children:null})]}),(0,n.Z)((0,n.Z)({},W("hope ahmad","development","front end",d.ZP.image.avatar(8))),{},{children:null})]})]})]}),(0,n.Z)((0,n.Z)({},W("marketing","marketing",null,null)),{},{children:[(0,n.Z)((0,n.Z)({},W("peter stanbridge","marketing","lead",d.ZP.image.avatar(9))),{},{children:[(0,n.Z)((0,n.Z)({},W("madeline harding","marketing","support",d.ZP.image.avatar(10))),{},{children:null}),(0,n.Z)((0,n.Z)({},W("eoin medrano","marketing","content writer",d.ZP.image.avatar(11))),{},{children:null})]})]})]})},26052:function(t,e,r){r.d(e,{_:function(){return h},g:function(){return d}});var n=r(1413),i=r(12065),a=r(30286),o=r(16398),l=r(50228),c=r(4565),s=r(80184);function d(t){var e=t.title,r=t.sx,c=t.children;return(0,s.jsxs)(a.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(t){return(0,i.Fq)(t.palette.grey[500],.04)}},children:[e&&(0,s.jsx)(o.Z,{title:e}),(0,s.jsx)(l.Z,{sx:(0,n.Z)({p:5,minHeight:180},r),children:c})]})}function h(t){var e=t.title;return(0,s.jsx)(c.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:e})}}}]);
//# sourceMappingURL=4451.1d137269.chunk.js.map