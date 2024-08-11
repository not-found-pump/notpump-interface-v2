"use strict";(self.webpackChunk_minimal_material_kit_react=self.webpackChunk_minimal_material_kit_react||[]).push([[3283],{37782:function(e,t,n){n.d(t,{z:function(){return u},_:function(){return j}});var i=n(1413),r=n(45987),o=n(72791),a=n(74142),s=n(83423),c=n(17428),l=n(80184),d=["color","name","BadgeProps","children","sx"],x=function(e){return e&&e.charAt(0).toUpperCase()},u=(0,o.forwardRef)((function(e,t){var n,o,u=e.color,h=e.name,p=void 0===h?"":h,Z=e.BadgeProps,m=e.children,f=e.sx,g=(0,r.Z)(e,d),j=(0,a.Z)(),v=x(p),b=function(e){return["A","N","H","L","Q"].includes(x(e))?"primary":["F","G","T","I","J"].includes(x(e))?"info":["K","D","Y","B","O"].includes(x(e))?"success":["P","E","R","S","U"].includes(x(e))?"warning":["V","W","X","M","Z"].includes(x(e))?"error":"default"}(p),y=u||b,w="default"===y?(0,l.jsxs)(s.Z,(0,i.Z)((0,i.Z)({ref:t,sx:f},g),{},{children:[p&&v,m]})):(0,l.jsxs)(s.Z,(0,i.Z)((0,i.Z)({ref:t,sx:(0,i.Z)({color:null===(n=j.palette[y])||void 0===n?void 0:n.contrastText,backgroundColor:null===(o=j.palette[y])||void 0===o?void 0:o.main,fontWeight:j.typography.fontWeightMedium},f)},g),{},{children:[p&&v,m]}));return Z?(0,l.jsx)(c.Z,(0,i.Z)((0,i.Z)({overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"}},Z),{},{children:w})):w})),h=n(91835),p=["size","compact","max","children","sx"],Z=24,m=32,f=40,g=56,j=(0,o.forwardRef)((function(e,t){var n=e.size,o=void 0===n?"small":n,a=e.compact,s=e.max,c=e.children,d=e.sx,x=(0,r.Z)(e,p),u="tiny"===o,j="small"===o,v="medium"===o,b="large"===o;return(0,l.jsx)(h.Z,(0,i.Z)((0,i.Z)({ref:t,max:a?3:s,spacing:u||j?"medium":"small",sx:(0,i.Z)((0,i.Z)({"& .MuiAvatar-root":(0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)({},b&&{width:g,height:g,"&:first-of-type":{fontSize:16}}),v&&{width:f,height:f}),j&&{width:m,height:m}),u&&{width:Z,height:Z})},a&&(0,i.Z)({},{width:40,height:40,position:"relative","& .MuiAvatarGroup-avatar":{m:0,width:28,height:28,position:"absolute","&:first-of-type":{left:0,bottom:0,zIndex:9},"&:last-of-type":{top:0,right:0}}})),d)},x),{},{children:c}))}))},87383:function(e,t,n){n.d(t,{Z:function(){return p}});var i=n(1413),r=n(45987),o=n(50228),a=n(94162),s=n(4565),c=n(33888),l=n(46283),d=n(11087),x=n(80184);function u(e){var t=e.link,n=e.activeLast,r=e.disabled,a=t.name,s=t.href,c=t.icon,u=(0,i.Z)({display:"inline-flex",alignItems:"center",color:"text.primary"},r&&!n&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),h=(0,x.jsxs)(x.Fragment,{children:[c&&(0,x.jsx)(o.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:c}),a]});return s?(0,x.jsx)(l.Z,{component:d.rU,to:s,sx:u,children:h}):(0,x.jsxs)(o.Z,{sx:u,children:[" ",h," "]})}var h=["links","action","heading","moreLink","activeLast","sx"];function p(e){var t=e.links,n=e.action,d=e.heading,p=e.moreLink,m=e.activeLast,f=e.sx,g=(0,r.Z)(e,h),j=t[t.length-1].name;return(0,x.jsxs)(o.Z,{sx:(0,i.Z)({mb:5},f),children:[(0,x.jsxs)(a.Z,{direction:"row",alignItems:"center",children:[(0,x.jsxs)(o.Z,{sx:{flexGrow:1},children:[d&&(0,x.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:d}),!!t.length&&(0,x.jsx)(c.Z,(0,i.Z)((0,i.Z)({separator:(0,x.jsx)(Z,{})},g),{},{children:t.map((function(e){return(0,x.jsx)(u,{link:e,activeLast:m,disabled:e.name===j},e.name||"")}))}))]}),n&&(0,x.jsxs)(o.Z,{sx:{flexShrink:0},children:[" ",n," "]})]}),!!p&&(0,x.jsx)(o.Z,{sx:{mt:2},children:p.map((function(e){return(0,x.jsx)(l.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function Z(){return(0,x.jsx)(o.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},14133:function(e,t,n){n.d(t,{Z:function(){return d}});var i=n(1413),r=n(45987),o=n(94162),a=n(4565),s=n(43932),c=n(80184),l=["title","description","img","sx"];function d(e){var t=e.title,n=e.description,d=e.img,x=e.sx,u=(0,r.Z)(e,l);return(0,c.jsxs)(o.Z,(0,i.Z)((0,i.Z)({alignItems:"center",justifyContent:"center",sx:(0,i.Z)({height:1,textAlign:"center",p:function(e){return e.spacing(8,2)}},x)},u),{},{children:[(0,c.jsx)(s.Z,{disabledEffect:!0,alt:"empty content",src:d||"/assets/illustrations/illustration_empty_content.svg",sx:{height:240,mb:3}}),(0,c.jsx)(a.Z,{variant:"h5",gutterBottom:!0,children:t}),n&&(0,c.jsx)(a.Z,{variant:"body2",sx:{color:"text.secondary"},children:n})]}))}},25087:function(e,t,n){n.d(t,{Z:function(){return b}});var i=n(36459),r=n(1413),o=n(45987),a=(n(85163),n(11087)),s=n(81350),c=n(49868),l=n(1926),d=n(84779),x=n(4565),u=n(81872),h=n(46283),p=n(43932),Z=n(4942),m=n(60277),f=n(12065),g=(0,m.ZP)("div")((function(e){var t,n=e.theme,i="light"===n.palette.mode;return{"& ul, & ol":(0,r.Z)((0,r.Z)({},n.typography.body1),{},{paddingLeft:n.spacing(5),"& li":{lineHeight:2}}),"& blockquote":(t={lineHeight:1.5,fontSize:"1.5em",margin:"40px auto",position:"relative",fontFamily:"Georgia, serif",padding:n.spacing(3,3,3,8),borderRadius:2*Number(n.shape.borderRadius),backgroundColor:n.palette.background.neutral,color:"".concat(n.palette.text.secondary," !important")},(0,Z.Z)(t,n.breakpoints.up("md"),{width:"80%"}),(0,Z.Z)(t,"& p, & span",{marginBottom:"0 !important",fontSize:"inherit !important",fontFamily:"Georgia, serif !important",color:"".concat(n.palette.text.secondary," !important")}),(0,Z.Z)(t,"&:before",{left:16,top:-8,display:"block",fontSize:"3em",content:'"\\201C"',position:"absolute",color:n.palette.text.disabled}),t),"& pre, & pre > code":{fontSize:16,overflowX:"auto",whiteSpace:"pre",padding:n.spacing(2),color:n.palette.common.white,borderRadius:n.shape.borderRadius,backgroundColor:i?n.palette.grey[900]:(0,f.Fq)(n.palette.grey[500],.16)},"& code":{fontSize:14,borderRadius:4,whiteSpace:"pre",padding:n.spacing(.2,.5),color:n.palette.warning[i?"darker":"lighter"],backgroundColor:n.palette.warning[i?"lighter":"darker"],"&.hljs":{padding:0,backgroundColor:"transparent"}},table:{width:"100%",borderCollapse:"collapse",border:"1px solid ".concat(n.palette.divider),"th, td":{padding:n.spacing(1),border:"1px solid ".concat(n.palette.divider)},"tbody tr:nth-of-type(odd)":{backgroundColor:n.palette.background.neutral}},input:{"&[type=checkbox]":{position:"relative",cursor:"pointer","&:before":{content:'""',top:-2,left:-2,width:17,height:17,borderRadius:3,position:"absolute",backgroundColor:n.palette.grey[i?300:700]},"&:checked":{"&:before":{backgroundColor:n.palette.primary.main},"&:after":{content:'""',top:1,left:5,width:4,height:9,position:"absolute",transform:"rotate(45deg)",msTransform:"rotate(45deg)",WebkitTransform:"rotate(45deg)",border:"solid ".concat(n.palette.common.white),borderWidth:"0 2px 2px 0"}}}}}})),j=n(80184),v=["sx"];function b(e){var t=e.sx,n=(0,o.Z)(e,v);return(0,j.jsx)(g,{sx:t,children:(0,j.jsx)(s.D,(0,r.Z)({rehypePlugins:[c.Z,d.Z,[l.Z,{singleTilde:!1}]],components:y},n))})}var y={h1:function(e){var t=Object.assign({},((0,i.Z)(e),e));return(0,j.jsx)(x.Z,(0,r.Z)({variant:"h1",gutterBottom:!0},t))},h2:function(e){var t=Object.assign({},((0,i.Z)(e),e));return(0,j.jsx)(x.Z,(0,r.Z)({variant:"h2",gutterBottom:!0},t))},h3:function(e){var t=Object.assign({},((0,i.Z)(e),e));return(0,j.jsx)(x.Z,(0,r.Z)({variant:"h3",gutterBottom:!0},t))},h4:function(e){var t=Object.assign({},((0,i.Z)(e),e));return(0,j.jsx)(x.Z,(0,r.Z)({variant:"h4",gutterBottom:!0},t))},h5:function(e){var t=Object.assign({},((0,i.Z)(e),e));return(0,j.jsx)(x.Z,(0,r.Z)({variant:"h5",gutterBottom:!0},t))},h6:function(e){var t=Object.assign({},((0,i.Z)(e),e));return(0,j.jsx)(x.Z,(0,r.Z)({variant:"h6",gutterBottom:!0},t))},p:function(e){var t=Object.assign({},((0,i.Z)(e),e));return(0,j.jsx)(x.Z,(0,r.Z)({paragraph:!0},t))},hr:function(e){var t=Object.assign({},((0,i.Z)(e),e));return(0,j.jsx)(u.Z,(0,r.Z)({sx:{my:3}},t))},img:function(e){var t=Object.assign({},((0,i.Z)(e),e));return(0,j.jsx)(p.Z,(0,r.Z)({alt:t.alt,ratio:"16/9",sx:{borderRadius:2,my:5}},t))},a:function(e){var t=Object.assign({},((0,i.Z)(e),e));return t.href.includes("http")?(0,j.jsx)(h.Z,(0,r.Z)({target:"_blank",rel:"noopener"},t)):(0,j.jsx)(h.Z,(0,r.Z)((0,r.Z)({component:a.rU,to:t.href},t),{},{children:t.children}))}}},72745:function(e,t,n){n.d(t,{i4:function(){return y},Ml:function(){return j},n6:function(){return m},ZE:function(){return d},M2:function(){return l},Py:function(){return v},JJ:function(){return h}});var i=n(80184);var r=n(1413),o=n(36459),a=n(45953),s=n(91441),c=n(50228);function l(e){var t=Object.assign({},((0,o.Z)(e),e));return(0,i.jsxs)(a.ZP,(0,r.Z)((0,r.Z)({item:!0,xs:12,sm:6,md:3},t),{},{children:[(0,i.jsx)(s.Z,{variant:"rectangular",width:"100%",sx:{height:200,borderRadius:2}}),(0,i.jsxs)(c.Z,{sx:{display:"flex",mt:1.5},children:[(0,i.jsx)(s.Z,{variant:"circular",sx:{width:40,height:40}}),(0,i.jsx)(s.Z,{variant:"text",sx:{mx:1,flexGrow:1}})]})]}))}function d(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.Z,{width:"100%",height:560,variant:"rectangular",sx:{borderRadius:2}}),(0,i.jsxs)(c.Z,{sx:{mt:3,display:"flex",alignItems:"center"},children:[(0,i.jsx)(s.Z,{variant:"circular",width:64,height:64}),(0,i.jsxs)(c.Z,{sx:{flexGrow:1,ml:2},children:[(0,i.jsx)(s.Z,{variant:"text",height:20}),(0,i.jsx)(s.Z,{variant:"text",height:20}),(0,i.jsx)(s.Z,{variant:"text",height:20})]})]})]})}var x=n(48928),u=n(94162);function h(e){var t=Object.assign({},((0,o.Z)(e),e));return(0,i.jsxs)(x.Z,(0,r.Z)((0,r.Z)({},t),{},{children:[(0,i.jsx)(s.Z,{variant:"rectangular",sx:{paddingTop:"100%"}}),(0,i.jsxs)(u.Z,{spacing:2,sx:{p:3},children:[(0,i.jsx)(s.Z,{variant:"text",sx:{width:.5}}),(0,i.jsxs)(u.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,i.jsxs)(u.Z,{direction:"row",children:[(0,i.jsx)(s.Z,{variant:"circular",sx:{width:16,height:16}}),(0,i.jsx)(s.Z,{variant:"circular",sx:{width:16,height:16}}),(0,i.jsx)(s.Z,{variant:"circular",sx:{width:16,height:16}})]}),(0,i.jsx)(s.Z,{variant:"text",sx:{width:40}})]})]})]}))}var p=n(45987),Z=["sx"];function m(e){var t=e.sx,n=(0,p.Z)(e,Z);return(0,i.jsxs)(u.Z,(0,r.Z)((0,r.Z)({spacing:1,direction:"row",alignItems:"center",sx:(0,r.Z)({px:3,py:1},t)},n),{},{children:[(0,i.jsx)(s.Z,{variant:"circular",width:32,height:32}),(0,i.jsx)(s.Z,{variant:"text",sx:{width:.5,height:16}})]}))}var f=n(93433),g=n(30286);function j(e){var t=Object.assign({},((0,o.Z)(e),e));return(0,i.jsx)(c.Z,(0,r.Z)((0,r.Z)({gap:3,display:"grid",gridTemplateColumns:"repeat(4, 1fr)"},t),{},{children:(0,f.Z)(Array(3)).map((function(e,t){return(0,i.jsx)(g.Z,{variant:"outlined",sx:{p:2.5,width:310},children:(0,i.jsxs)(u.Z,{spacing:2,children:[(0,i.jsx)(s.Z,{variant:"rectangular",sx:{paddingTop:"75%",borderRadius:1.5}}),0===t&&(0,i.jsx)(s.Z,{variant:"rectangular",sx:{paddingTop:"25%",borderRadius:1.5}}),2!==t&&(0,i.jsx)(s.Z,{variant:"rectangular",sx:{paddingTop:"25%",borderRadius:1.5}})]})},t)}))}))}function v(e){var t=Object.assign({},((0,o.Z)(e),e));return(0,i.jsxs)(a.ZP,(0,r.Z)((0,r.Z)({container:!0,spacing:3},t),{},{children:[(0,i.jsx)(a.ZP,{item:!0,xs:12,md:6,lg:7,children:(0,i.jsx)(s.Z,{variant:"rectangular",width:"100%",sx:{paddingTop:"100%",borderRadius:2}})}),(0,i.jsxs)(a.ZP,{item:!0,xs:12,md:6,lg:5,children:[(0,i.jsx)(s.Z,{variant:"circular",width:80,height:80}),(0,i.jsx)(s.Z,{variant:"text",height:240}),(0,i.jsx)(s.Z,{variant:"text",height:40}),(0,i.jsx)(s.Z,{variant:"text",height:40}),(0,i.jsx)(s.Z,{variant:"text",height:40})]})]}))}var b=["sx"];function y(e){var t=e.sx,n=(0,p.Z)(e,b);return(0,i.jsxs)(u.Z,(0,r.Z)((0,r.Z)({spacing:1,direction:"row",alignItems:"center",sx:(0,r.Z)({px:3,py:1.5},t)},n),{},{children:[(0,i.jsx)(s.Z,{variant:"circular",width:48,height:48}),(0,i.jsxs)(u.Z,{spacing:.5,sx:{flexGrow:1},children:[(0,i.jsx)(s.Z,{variant:"text",sx:{width:.5,height:16}}),(0,i.jsx)(s.Z,{variant:"text",sx:{width:.25,height:12}})]})]}))}},17530:function(e,t,n){n.r(t),n.d(t,{default:function(){return Ae}});var i=n(6907),r=n(93433),o=n(29439),a=n(72791),s=n(57689),c=n(476),l=n(48928),d=n(94162),x=n(9440),u=n(83336),h=n(7055),p=n(15398),Z=n(87383),m=n(61091),f=n(81872),g=n(45629),j=n(4544),v=n(37306),b=n(14783),y=n(63402),w=n(53512),k=n(72745),C=n(1413),I=n(45987),S=n(19978),M=n(4346),A=n(4565),D=n(9506),R=n(80184),P=["label"],T={all:"eva:email-fill",inbox:"eva:inbox-fill",trash:"eva:trash-2-outline",drafts:"eva:file-fill",spam:"ic:round-report",sent:"ic:round-send",starred:"eva:star-fill",important:"ic:round-label-important",id_social:"ic:round-label",id_promotions:"ic:round-label",id_forums:"ic:round-label"};function W(e){var t=e.label,n=(0,I.Z)(e,P),i=(0,s.s0)(),r=(0,D.Z)(z(t)).active,o=0!==t.unreadCount,a=T[t.id];return(0,R.jsxs)(S.Z,(0,C.Z)((0,C.Z)({onClick:function(){i(z(t))},sx:(0,C.Z)({px:3,height:48,typography:"body2",color:"text.secondary",textTransform:"capitalize"},r&&{color:"text.primary",bgcolor:"action.selected",fontWeight:"fontWeightMedium"})},n),{},{children:[(0,R.jsx)(y.Z,{icon:a,sx:{mr:2,width:b.Wm.NAV_ITEM,height:b.Wm.NAV_ITEM,color:t.color}}),(0,R.jsx)(M.Z,{disableTypography:!0,primary:t.name}),o&&(0,R.jsx)(A.Z,{variant:"caption",children:t.unreadCount})]}))}var z=function(e){var t=h.vB.mail.root;return"system"===e.type?"".concat(t,"/").concat(e.id):"custom"===e.type?"".concat(t,"/label/").concat(e.name):t};function L(e){var t=e.items,n=e.openNav,i=e.onOpenCompose,o=e.onCloseNav,c=(0,s.TH)().pathname,l=(0,v.Z)("up","md"),x=!t.length;(0,a.useEffect)((function(){n&&o()}),[c]);var u=(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(d.Z,{justifyContent:"center",flexShrink:0,sx:{px:2.5,height:80},children:(0,R.jsx)(m.Z,{fullWidth:!0,color:"inherit",variant:"contained",startIcon:(0,R.jsx)(y.Z,{icon:"eva:edit-fill"}),onClick:function(){o(),i()},sx:{bgcolor:"text.primary",color:function(e){return"light"===e.palette.mode?"common.white":"grey.800"},"&:hover":{bgcolor:"text.primary",color:function(e){return"light"===e.palette.mode?"common.white":"grey.800"}}},children:"Compose"})}),(0,R.jsx)(f.Z,{}),(0,R.jsx)(w.Z,{children:(0,R.jsx)(g.Z,{disablePadding:!0,children:(x?(0,r.Z)(Array(8)):t).map((function(e,t){return e?(0,R.jsx)(W,{label:e},e.id):(0,R.jsx)(k.n6,{},t)}))})})]});return l?(0,R.jsx)(j.ZP,{variant:"permanent",PaperProps:{sx:{width:b.w$.W_BASE,position:"relative"}},children:u}):(0,R.jsx)(j.ZP,{open:n,onClose:o,ModalProps:{keepMounted:!0},PaperProps:{sx:{width:b.w$.W_BASE}},children:u})}var B=n(74142),O=n(91888),E=n(65266),_=n(14133),F=n(4942),G=n(60277),N=n(45473),H=n(75814),U=n(50228),V=n(62509),q=n(35922),J=n(37782),K=n(30286),Y=n(13811),$=["onArchive","onDelete","onMarkRead","onHidden","sx"];function X(e){var t=e.onArchive,n=e.onDelete,i=e.onMarkRead,r=e.onHidden,o=e.sx,a=(0,I.Z)(e,$),s=[{name:"Archive",icon:"eva:archive-fill",action:t},{name:"Delete",icon:"eva:trash-2-outline",action:n},{name:"Mark Email Read",icon:"ic:round-mark-email-read",action:i},{name:"Hidden Email",icon:"eva:eye-off-fill",action:r}];return(0,R.jsx)(K.Z,(0,C.Z)((0,C.Z)({variant:"outlined",sx:(0,C.Z)({top:12,right:12,bottom:12,zIndex:99,opacity:0,display:"flex",position:"absolute",alignItems:"center",boxShadow:function(e){return e.customShadows.z8},transition:function(e){return e.transitions.create("opacity")}},o)},a),{},{children:s.map((function(e){return(0,R.jsx)(H.Z,{title:e.name,children:(0,R.jsx)(Y.Z,{size:"small",onClick:e.action,sx:{mx:.75,"&:hover":{color:"text.primary"}},children:(0,R.jsx)(y.Z,{icon:e.icon,width:24})})},e.name)}))}))}var Q=["mail","dense","selected","onSelect","onDeselect","getLabel"],ee=(0,G.ZP)("div")((function(e){var t,n=e.theme;return t={position:"relative",padding:n.spacing(0,2),color:n.palette.text.secondary,backgroundColor:n.palette.background.neutral,borderBottom:"1px solid ".concat(n.palette.divider)},(0,F.Z)(t,n.breakpoints.up("md"),{display:"flex",alignItems:"center"}),(0,F.Z)(t,"&:hover",{zIndex:9,position:"relative",boxShadow:n.customShadows.z24,"& #mailActions":{opacity:1}}),t})),te=(0,G.ZP)("div")((function(e){var t=e.theme;return(0,F.Z)({display:"flex",cursor:"pointer",padding:t.spacing(2,0),transition:t.transitions.create("padding")},t.breakpoints.up("md"),{flexGrow:1,minWidth:0,alignItems:"center"})})),ne=(0,G.ZP)((function(e){return(0,R.jsx)(A.Z,(0,C.Z)({component:"span",noWrap:!0},e))}))((function(e){var t=e.theme;return(0,C.Z)((0,C.Z)({},t.typography.body2),{},(0,F.Z)({marginRight:t.spacing(2)},t.breakpoints.up("md"),{width:160,flexShrink:0}))})),ie=(0,G.ZP)((function(e){return(0,R.jsx)(A.Z,(0,C.Z)({component:"span",noWrap:!0},e))}))((function(e){var t=e.theme;return(0,C.Z)((0,C.Z)({},t.typography.body2),{},{marginRight:t.spacing(2),flexGrow:1})})),re=(0,G.ZP)("div")((function(e){var t=e.theme;return(0,C.Z)((0,C.Z)({},t.typography.caption),{},(0,F.Z)({},t.breakpoints.up("md"),{width:96,flexShrink:0,textAlign:"right"}))})),oe=(0,G.ZP)(y.Z)((function(e){var t=e.theme;return(0,F.Z)({top:16,right:16,zIndex:9,position:"absolute"},t.breakpoints.up("md"),{flexShrink:0,position:"unset",marginLeft:t.spacing(2)})}));function ae(e){var t=e.mail,n=e.dense,i=e.selected,r=e.onSelect,o=e.onDeselect,a=e.getLabel,c=(0,I.Z)(e,Q),l=(0,s.UO)(),x=(0,s.s0)(),u=(0,v.Z)("up","md"),h=!!t.attachments.length,p=!t.isUnread;return(0,R.jsxs)(ee,(0,C.Z)((0,C.Z)({sx:(0,C.Z)((0,C.Z)({},i&&{bgcolor:"action.selected"}),p&&{color:"text.primary",bgcolor:"background.paper"})},c),{},{children:[u&&(0,R.jsxs)(d.Z,{direction:"row",alignItems:"center",sx:{mr:2},children:[(0,R.jsx)(N.Z,{checked:i,onChange:function(e){return e.target.checked?r():o()}}),(0,R.jsx)(H.Z,{title:"Starred",children:(0,R.jsx)(N.Z,{color:"warning",defaultChecked:t.isStarred,icon:(0,R.jsx)(y.Z,{icon:"eva:star-outline"}),checkedIcon:(0,R.jsx)(y.Z,{icon:"eva:star-fill"})})}),(0,R.jsx)(H.Z,{title:"Important",children:(0,R.jsx)(N.Z,{color:"warning",defaultChecked:t.isImportant,checkedIcon:(0,R.jsx)(y.Z,{icon:"ic:round-label-important"}),icon:(0,R.jsx)(y.Z,{icon:"ic:round-label-important"})})})]}),(0,R.jsxs)(te,{onClick:function(){x(se(l,t.id))},sx:(0,C.Z)({},n&&{py:1}),children:[(0,R.jsx)(J.z,{alt:t.from.name,src:t.from.avatar||"",name:t.from.name,sx:{width:32,height:32,mr:2}}),(0,R.jsxs)(d.Z,{flexGrow:1,alignItems:{md:"center"},flexDirection:{xs:"column",md:"row"},sx:{minWidth:0},children:[(0,R.jsx)(ne,{sx:(0,C.Z)({},p&&{fontWeight:"fontWeightBold"}),children:t.from.name}),(0,R.jsxs)(ie,{children:[(0,R.jsx)(U.Z,{component:"span",sx:(0,C.Z)({},p&&{fontWeight:"fontWeightBold"}),children:t.subject})," - ",(0,R.jsx)(U.Z,{component:"span",sx:(0,C.Z)({},p&&{color:"text.secondary"}),children:t.message})]}),u&&(0,R.jsx)(d.Z,{direction:"row",spacing:1,children:t.labelIds.map((function(e){var t=a(e);return t?(0,R.jsx)(q.Z,{sx:{bgcolor:t.color,color:function(e){return e.palette.getContrastText(t.color||"")}},children:t.name},t.id):null}))}),h&&(0,R.jsx)(oe,{icon:"eva:attach-2-fill"}),(0,R.jsx)(re,{sx:(0,C.Z)({},p&&{fontWeight:"fontWeightBold"}),children:(0,V.Mu)(t.createdAt)})]})]}),(0,R.jsx)(X,{id:"mailActions",onArchive:function(){return console.log("ARCHIVE",t.id)},onDelete:function(){return console.log("DELETE",t.id)},onMarkRead:function(){return console.log("MARKREAD",t.id)},onHidden:function(){return console.log("HIDDEN",t.id)}})]}))}var se=function(e,t){var n=e.systemLabel,i=e.customLabel,r=h.vB.mail.root;return n?"".concat(r,"/").concat(n,"/").concat(t):i?"".concat(r,"/label/").concat(i,"/").concat(t):r};function ce(e){var t=e.mails,n=e.dense,i=e.labels,r=e.isEmpty,o=e.isLoading,a=e.onSelectMail,s=e.selectedMails,c=e.onDeselectMail,l=(0,B.Z)(),x=t.allIds,u=t.byId;return(0,R.jsxs)(d.Z,{sx:{position:"relative",height:"calc(100% - 80px)"},children:[o&&(0,R.jsx)(d.Z,{alignItems:"center",justifyContent:"center",sx:(0,C.Z)({top:0,left:0,width:1,height:1,zIndex:9,position:"absolute"},(0,E.Ls)({color:l.palette.background.paper})),children:(0,R.jsx)(O.Z,{color:"inherit",sx:{width:1,maxWidth:320}})}),r&&!o?(0,R.jsx)(_.Z,{title:"There is no conversation",img:"/assets/illustrations/illustration_empty_mail.svg"}):(0,R.jsx)(w.Z,{sx:{height:1},children:(0,R.jsx)(d.Z,{sx:{minWidth:{md:960}},children:x.map((function(e){return(0,R.jsx)(ae,{dense:n,mail:u[e],selected:s(e),onSelect:function(){return a(e)},onDeselect:function(){return c(e)},getLabel:function(e){return i.filter((function(t){return t.id===e}))[0]}},e)}))})})]})}var le=n(59911),de=n(38254),xe=["onOpenNav","mailsLength","selectedMailsLength","onSelectAllMails","onDeselectAllMails","onToggleDense"];function ue(e){var t=e.onOpenNav,n=e.mailsLength,i=e.selectedMailsLength,r=e.onSelectAllMails,o=e.onDeselectAllMails,a=e.onToggleDense,s=(0,I.Z)(e,xe),c=(0,v.Z)("up","sm"),l=(0,v.Z)("up","md"),x=n>0&&i===n,u=i>0&&i<n;return(0,R.jsxs)(d.Z,(0,C.Z)((0,C.Z)({spacing:2,direction:"row",alignItems:"center",flexShrink:0,sx:{px:2,height:80,borderBottom:function(e){return"solid 1px ".concat(e.palette.divider)}}},s),{},{children:[(0,R.jsxs)(d.Z,{direction:"row",alignItems:"center",flexGrow:1,children:[!l&&(0,R.jsx)(Y.Z,{onClick:t,children:(0,R.jsx)(y.Z,{icon:"eva:menu-fill"})}),c&&(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(N.Z,{checked:x,indeterminate:u,onChange:function(e){return e.target.checked?r():o()}}),(0,R.jsx)(H.Z,{title:"Refresh",children:(0,R.jsx)(Y.Z,{children:(0,R.jsx)(y.Z,{icon:"eva:refresh-fill"})})}),(0,R.jsx)(H.Z,{title:"Dense",children:(0,R.jsx)(Y.Z,{onClick:a,children:(0,R.jsx)(y.Z,{icon:"eva:collapse-fill"})})}),(0,R.jsx)(H.Z,{title:"More",children:(0,R.jsx)(Y.Z,{children:(0,R.jsx)(y.Z,{icon:"eva:more-vertical-fill"})})})]})]}),(0,R.jsx)(le.Z,{size:"small",placeholder:"Search",InputProps:{startAdornment:(0,R.jsx)(de.Z,{position:"start",children:(0,R.jsx)(y.Z,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})},sx:{maxWidth:180}}),c&&(0,R.jsxs)(U.Z,{sx:{display:"flex",alignItems:"center",flexShrink:0},children:[(0,R.jsxs)(A.Z,{variant:"body2",sx:{color:"text.secondary"},children:["1 - ",n," of ",n]}),(0,R.jsx)(H.Z,{title:"Next page",children:(0,R.jsx)(Y.Z,{children:(0,R.jsx)(y.Z,{icon:"eva:arrow-ios-back-fill"})})}),(0,R.jsx)(H.Z,{title:"Previous page",children:(0,R.jsx)(Y.Z,{children:(0,R.jsx)(y.Z,{icon:"eva:arrow-ios-forward-fill"})})})]})]}))}var he=n(25087),pe=n(1169);function Ze(){var e=(0,a.useRef)(null),t=(0,a.useState)(""),n=(0,o.Z)(t,2),i=n[0],r=n[1],s=function(){var t;null===(t=e.current)||void 0===t||t.click()};return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(pe.ZP,{fullWidth:!0,multiline:!0,minRows:2,maxRows:8,value:i,placeholder:"Type a message",onChange:function(e){r(e.target.value)},sx:{p:2,borderTop:function(e){return"solid 1px ".concat(e.palette.divider)}}}),(0,R.jsxs)(d.Z,{direction:"row",alignItems:"center",justifyContent:"flex-end",sx:{p:function(e){return e.spacing(0,3,3,0)}},children:[(0,R.jsx)(Y.Z,{size:"small",onClick:s,children:(0,R.jsx)(y.Z,{icon:"ic:round-add-photo-alternate"})}),(0,R.jsx)(Y.Z,{size:"small",onClick:s,children:(0,R.jsx)(y.Z,{icon:"eva:attach-2-fill"})}),(0,R.jsx)(m.Z,{variant:"contained",sx:{ml:2},children:"Send"})]}),(0,R.jsx)("input",{type:"file",ref:e,style:{display:"none"}})]})}var me=n(83611);function fe(e){var t=e.attachments;return(0,R.jsx)(U.Z,{sx:{p:2,bgcolor:"background.neutral",borderTop:function(e){return"solid 1px ".concat(e.palette.divider)}},children:(0,R.jsx)(w.Z,{children:(0,R.jsx)(d.Z,{direction:"row",spacing:1,children:t.map((function(e){return(0,R.jsx)(ge,{file:e},e.name)}))})})})}function ge(e){var t=e.file;return(0,R.jsx)(d.Z,{alignItems:"center",justifyContent:"center",sx:{width:56,height:56,borderRadius:1,overflow:"hidden",position:"relative",bgcolor:"background.paper"},children:(0,R.jsx)(me.ZP,{tooltip:!0,file:t.preview,onDownload:function(){return console.log("DOWNLOAD")}})})}var je=(0,G.ZP)("div")((function(e){var t=e.theme;return{"& > p":(0,C.Z)((0,C.Z)({},t.typography.body1),{},{marginBottom:t.spacing(2)})}}));function ve(e){var t=e.subject,n=e.message,i=e.attachments;return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(w.Z,{children:(0,R.jsxs)(U.Z,{sx:{p:{xs:3,md:5}},children:[(0,R.jsx)(A.Z,{variant:"h3",gutterBottom:!0,children:t}),(0,R.jsx)(je,{children:(0,R.jsx)(he.Z,{children:n})})]})}),!!i.length&&(0,R.jsx)(fe,{attachments:i}),(0,R.jsx)(Ze,{})]})}var be=n(96174),ye=n(55112),we=n(66093);function ke(e){var t=e.onCloseCompose,n=(0,v.Z)("up","sm"),i=(0,a.useState)(""),r=(0,o.Z)(i,2),s=r[0],c=r[1],l=(0,a.useState)(!1),x=(0,o.Z)(l,2),u=x[0],h=x[1];return(0,R.jsxs)(be.Z,{children:[(u||!n)&&(0,R.jsx)(ye.Z,{open:!0,sx:{zIndex:1998}}),(0,R.jsxs)(K.Z,{sx:(0,C.Z)({right:0,bottom:0,borderRadius:2,zIndex:1999,m:"".concat(24,"px"),position:"fixed",display:"flex",flexDirection:"column",boxShadow:function(e){return e.customShadows.dropdown}},u&&{m:0,right:12,bottom:12,width:"calc(100% - ".concat(24,"px)"),height:"calc(100% - ".concat(24,"px)")}),children:[(0,R.jsxs)(d.Z,{direction:"row",alignItems:"center",sx:{py:2,pl:2.5,pr:1},children:[(0,R.jsx)(A.Z,{variant:"h6",sx:{flexGrow:1},children:"New Message"}),(0,R.jsx)(Y.Z,{onClick:function(){return h(!u)},children:(0,R.jsx)(y.Z,{icon:u?"eva:collapse-fill":"eva:expand-fill"})}),(0,R.jsx)(Y.Z,{onClick:t,children:(0,R.jsx)(y.Z,{icon:"eva:close-fill"})})]}),(0,R.jsx)(f.Z,{}),(0,R.jsx)(pe.ZP,{placeholder:"To",sx:{px:2,height:40}}),(0,R.jsx)(f.Z,{}),(0,R.jsx)(pe.ZP,{placeholder:"Subject",sx:{px:2,height:40}}),(0,R.jsx)(f.Z,{}),(0,R.jsx)(we.Z,{simple:!0,id:"compose-mail",value:s,onChange:function(e){c(e)},placeholder:"Type a message",sx:{flexGrow:1,borderColor:"transparent"}}),(0,R.jsx)(f.Z,{}),(0,R.jsxs)(d.Z,{direction:"row",alignItems:"center",sx:{py:2,px:3},children:[(0,R.jsx)(m.Z,{variant:"contained",sx:{mr:2},children:"Send"}),(0,R.jsx)(Y.Z,{children:(0,R.jsx)(y.Z,{icon:"ic:round-add-photo-alternate"})}),(0,R.jsx)(Y.Z,{children:(0,R.jsx)(y.Z,{icon:"eva:attach-2-fill"})})]})]})]})}var Ce=n(46283),Ie=["mailFrom","mailTo","createdAt","sx"];function Se(e){var t=e.mailFrom,n=e.mailTo,i=e.createdAt,r=e.sx,o=(0,I.Z)(e,Ie),a=(0,s.s0)(),c=(0,s.UO)(),l=c.systemLabel,x=c.customLabel,u=(0,v.Z)("up","sm"),p=h.vB.mail.root;return(0,R.jsxs)(d.Z,(0,C.Z)((0,C.Z)({direction:"row",alignItems:"center",flexShrink:0,sx:(0,C.Z)({px:2,height:80,borderBottom:function(e){return"solid 1px ".concat(e.palette.divider)}},r)},o),{},{children:[(0,R.jsxs)(d.Z,{direction:"row",alignItems:"center",flexGrow:1,children:[(0,R.jsx)(H.Z,{title:"Back",children:(0,R.jsx)(Y.Z,{onClick:function(){return a(l?"".concat(p,"/").concat(l):x?"".concat(p,"/label/").concat(x):"".concat(p,"/inbox"))},children:(0,R.jsx)(y.Z,{icon:"eva:arrow-ios-back-fill"})})}),(0,R.jsx)(J.z,{alt:t.name,src:t.avatar||"",name:t.name}),(0,R.jsxs)(U.Z,{sx:{ml:2},children:[(0,R.jsx)(A.Z,{display:"inline",variant:"subtitle2",children:t.name}),(0,R.jsx)(Ce.Z,{variant:"caption",sx:{color:"text.secondary",ml:.5},children:"<".concat(t.email,">")}),(0,R.jsxs)(A.Z,{variant:"caption",component:"div",noWrap:!0,sx:{mt:.5},children:["To: ",n.map((function(e){return(0,R.jsx)(Ce.Z,{color:"inherit",children:e.email},e.email)}))]})]})]}),(0,R.jsxs)(d.Z,{direction:"row",alignItems:"center",children:[u&&(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(A.Z,{variant:"caption",component:"div",sx:{color:"text.secondary"},children:(0,V.zM)(i)}),(0,R.jsx)(H.Z,{title:"Reply",children:(0,R.jsx)(Y.Z,{children:(0,R.jsx)(y.Z,{icon:"ic:round-reply"})})})]}),(0,R.jsx)(H.Z,{title:"More options",children:(0,R.jsx)(Y.Z,{children:(0,R.jsx)(y.Z,{icon:"eva:more-vertical-fill"})})})]})]}))}function Me(){var e=(0,p.K$)().themeStretch,t=(0,x.I0)(),n=(0,s.UO)(),i=n.mailId,m=void 0===i?"":i,f=(0,x.v9)((function(e){return e.mail})),g=f.mails,j=f.labels,v=f.isLoading,b=(0,x.v9)((function(e){return e.mail.mails.byId[m]})),y=(0,a.useState)(!1),w=(0,o.Z)(y,2),k=w[0],C=w[1],I=(0,a.useState)(!1),S=(0,o.Z)(I,2),M=S[0],A=S[1],D=(0,a.useState)(!1),P=(0,o.Z)(D,2),T=P[0],W=P[1],z=(0,a.useState)([]),B=(0,o.Z)(z,2),O=B[0],E=B[1];(0,a.useEffect)((function(){t((0,u.Y9)(n))}),[t,n]),(0,a.useEffect)((function(){m&&t((0,u.ci)(m))}),[t,m]),(0,a.useEffect)((function(){t((0,u.g7)())}),[t]),(0,a.useEffect)((function(){document.body.style.overflow=T?"hidden":""}),[T]);return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)(c.Z,{maxWidth:!e&&"xl",children:[(0,R.jsx)(Z.Z,{heading:"Mail",links:[{name:"Dashboard",href:h.vB.root},{name:"Mail"}]}),(0,R.jsxs)(l.Z,{sx:{height:{md:"72vh"},display:{md:"flex"}},children:[(0,R.jsx)(L,{items:j,openNav:M,onCloseNav:function(){A(!1)},onOpenCompose:function(){W(!0)}}),(0,R.jsx)(d.Z,{flexGrow:1,children:b?(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(Se,{mailFrom:b.from,mailTo:b.to,createdAt:b.createdAt}),(0,R.jsx)(ve,{subject:b.subject,message:b.message,attachments:b.attachments})]}):(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(ue,{onOpenNav:function(){A(!0)},mailsLength:g.allIds.length,selectedMailsLength:O.length,onSelectAllMails:function(){E(g.allIds.map((function(e){return e})))},onDeselectAllMails:function(){E([])},onToggleDense:function(){C(!k)}}),(0,R.jsx)(ce,{dense:k,mails:g,labels:j,onSelectMail:function(e){return t=e,void E((function(e){return e.includes(t)?e:[].concat((0,r.Z)(e),[t])}));var t},onDeselectMail:function(e){return t=e,void E((function(e){return e.filter((function(e){return e!==t}))}));var t},selectedMails:function(e){return O.includes(e)},isLoading:v,isEmpty:!g.allIds.length&&!v})]})})]})]}),T&&(0,R.jsx)(ke,{onCloseCompose:function(){W(!1)}})]})}function Ae(){return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(i.ql,{children:(0,R.jsx)("title",{children:" Mail | NotPump"})}),(0,R.jsx)(Me,{})]})}},62509:function(e,t,n){n.d(t,{DY:function(){return l},IO:function(){return c},Mu:function(){return a},zM:function(){return s}});var i=n(16386),r=n(64460),o=n(24054);function a(e,t){var n=t||"dd MMM yyyy";return e?(0,i.Z)(new Date(e),n):""}function s(e,t){var n=t||"dd MMM yyyy p";return e?(0,i.Z)(new Date(e),n):""}function c(e){return e?(0,r.Z)(new Date(e)):""}function l(e){return e?(0,o.Z)(new Date(e),{addSuffix:!0}):""}}}]);
//# sourceMappingURL=3283.e235ceb3.chunk.js.map