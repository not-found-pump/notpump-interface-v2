"use strict";(self.webpackChunk_minimal_material_kit_react=self.webpackChunk_minimal_material_kit_react||[]).push([[920],{87383:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(1413),a=n(45987),o=n(50228),i=n(94162),s=n(4565),l=n(33888),c=n(46283),d=n(11087),x=n(80184);function h(e){var t=e.link,n=e.activeLast,a=e.disabled,i=t.name,s=t.href,l=t.icon,h=(0,r.Z)({display:"inline-flex",alignItems:"center",color:"text.primary"},a&&!n&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),u=(0,x.jsxs)(x.Fragment,{children:[l&&(0,x.jsx)(o.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:l}),i]});return s?(0,x.jsx)(c.Z,{component:d.rU,to:s,sx:h,children:u}):(0,x.jsxs)(o.Z,{sx:h,children:[" ",u," "]})}var u=["links","action","heading","moreLink","activeLast","sx"];function m(e){var t=e.links,n=e.action,d=e.heading,m=e.moreLink,p=e.activeLast,j=e.sx,f=(0,a.Z)(e,u),b=t[t.length-1].name;return(0,x.jsxs)(o.Z,{sx:(0,r.Z)({mb:5},j),children:[(0,x.jsxs)(i.Z,{direction:"row",alignItems:"center",children:[(0,x.jsxs)(o.Z,{sx:{flexGrow:1},children:[d&&(0,x.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:d}),!!t.length&&(0,x.jsx)(l.Z,(0,r.Z)((0,r.Z)({separator:(0,x.jsx)(Z,{})},f),{},{children:t.map((function(e){return(0,x.jsx)(h,{link:e,activeLast:p,disabled:e.name===b},e.name||"")}))}))]}),n&&(0,x.jsxs)(o.Z,{sx:{flexShrink:0},children:[" ",n," "]})]}),!!m&&(0,x.jsx)(o.Z,{sx:{mt:2},children:m.map((function(e){return(0,x.jsx)(c.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function Z(){return(0,x.jsx)(o.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},920:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(29439),a=n(72791),o=n(6907),i=n(50228),s=n(476),l=n(45473),c=n(72900),d=n(81898),x=n(54871),h=n(16002),u=n(7055),m=n(63402),Z=n(87383),p=n(26052),j=n(80184),f=["default","primary","secondary","info","success","warning","error"],b=["top","start","bottom","end"],v={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{m:"8px !important"}};function g(){var e=(0,a.useState)([!0,!1]),t=(0,r.Z)(e,2),n=t[0],g=t[1];return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(o.ql,{children:(0,j.jsx)("title",{children:" MUI Components: Checkbox | NotPump"})}),(0,j.jsx)(i.Z,{sx:{pt:6,pb:1,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,j.jsx)(s.Z,{children:(0,j.jsx)(Z.Z,{heading:"Checkboxes",links:[{name:"Components",href:u.ko.components},{name:"Checkboxes"}],moreLink:["https://mui.com/components/checkboxes"]})})}),(0,j.jsx)(s.Z,{sx:{my:10},children:(0,j.jsxs)(h.ZP,{columns:{xs:1,md:2},spacing:3,children:[(0,j.jsxs)(p.g,{title:"Basic",sx:v,children:[(0,j.jsx)(l.Z,{}),(0,j.jsx)(l.Z,{defaultChecked:!0}),(0,j.jsx)(l.Z,{defaultChecked:!0,indeterminate:!0}),(0,j.jsx)(l.Z,{disabled:!0}),(0,j.jsx)(l.Z,{disabled:!0,defaultChecked:!0}),(0,j.jsx)(l.Z,{disabled:!0,indeterminate:!0})]}),(0,j.jsxs)(p.g,{title:"Size & Custom Icon",sx:v,children:[(0,j.jsx)(c.Z,{label:"Normal",control:(0,j.jsx)(l.Z,{defaultChecked:!0})}),(0,j.jsx)(c.Z,{label:"Small",control:(0,j.jsx)(l.Z,{defaultChecked:!0,size:"small"})}),(0,j.jsx)(c.Z,{control:(0,j.jsx)(l.Z,{color:"info",size:"small",icon:(0,j.jsx)(m.Z,{icon:"eva:heart-fill"}),checkedIcon:(0,j.jsx)(m.Z,{icon:"eva:heart-fill"})}),label:"Custom icon"}),(0,j.jsx)(c.Z,{control:(0,j.jsx)(l.Z,{color:"error",icon:(0,j.jsx)(m.Z,{icon:"eva:award-fill"}),checkedIcon:(0,j.jsx)(m.Z,{icon:"eva:award-fill"})}),label:"Custom icon"})]}),(0,j.jsx)(p.g,{title:"Placement",sx:v,children:(0,j.jsx)(d.Z,{component:"fieldset",children:(0,j.jsx)(x.Z,{"aria-label":"position",row:!0,children:b.map((function(e){return(0,j.jsx)(c.Z,{value:e,label:e,labelPlacement:e,control:(0,j.jsx)(l.Z,{}),sx:{textTransform:"capitalize"}},e)}))})})}),(0,j.jsxs)(p.g,{title:"Colors",children:[(0,j.jsxs)(x.Z,{children:[f.map((function(e){return(0,j.jsx)(c.Z,{control:(0,j.jsx)(l.Z,{defaultChecked:!0,color:e}),label:e,sx:{textTransform:"capitalize"}},e)})),(0,j.jsx)(c.Z,{disabled:!0,control:(0,j.jsx)(l.Z,{defaultChecked:!0,color:"error"}),label:"Disabled"})]}),(0,j.jsx)(d.Z,{component:"fieldset",children:(0,j.jsxs)(x.Z,{children:[f.map((function(e){return(0,j.jsx)(c.Z,{control:(0,j.jsx)(l.Z,{defaultChecked:!0,indeterminate:!0,color:e}),label:e,sx:{textTransform:"capitalize"}},e)})),(0,j.jsx)(c.Z,{disabled:!0,control:(0,j.jsx)(l.Z,{defaultChecked:!0,indeterminate:!0,color:"error"}),label:"Disabled"})]})})]}),(0,j.jsx)(p.g,{title:"Indeterminate",sx:v,children:(0,j.jsxs)("div",{children:[(0,j.jsx)(c.Z,{label:"Parent",control:(0,j.jsx)(l.Z,{checked:n[0]&&n[1],indeterminate:n[0]!==n[1],onChange:function(e){g([e.target.checked,e.target.checked])}})}),(0,j.jsxs)("div",{children:[(0,j.jsx)(c.Z,{label:"Child 1",control:(0,j.jsx)(l.Z,{checked:n[0],onChange:function(e){g([e.target.checked,n[1]])}})}),(0,j.jsx)(c.Z,{label:"Child 2",control:(0,j.jsx)(l.Z,{checked:n[1],onChange:function(e){g([n[0],e.target.checked])}})})]})]})})]})})]})}},26052:function(e,t,n){n.d(t,{_:function(){return x},g:function(){return d}});var r=n(1413),a=n(12065),o=n(30286),i=n(16398),s=n(50228),l=n(4565),c=n(80184);function d(e){var t=e.title,n=e.sx,l=e.children;return(0,c.jsxs)(o.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return(0,a.Fq)(e.palette.grey[500],.04)}},children:[t&&(0,c.jsx)(i.Z,{title:t}),(0,c.jsx)(s.Z,{sx:(0,r.Z)({p:5,minHeight:180},n),children:l})]})}function x(e){var t=e.title;return(0,c.jsx)(l.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}},16398:function(e,t,n){n.d(t,{Z:function(){return k}});var r=n(4942),a=n(63366),o=n(87462),i=n(72791),s=n(28182),l=n(94419),c=n(4565),d=n(85513),x=n(60277),h=n(75878),u=n(21217);function m(e){return(0,u.Z)("MuiCardHeader",e)}var Z=(0,h.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),p=n(80184),j=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],f=(0,x.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var n;return(0,o.Z)((n={},(0,r.Z)(n,"& .".concat(Z.title),t.title),(0,r.Z)(n,"& .".concat(Z.subheader),t.subheader),n),t.root)}})({display:"flex",alignItems:"center",padding:16}),b=(0,x.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),v=(0,x.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),g=(0,x.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),k=i.forwardRef((function(e,t){var n=(0,d.Z)({props:e,name:"MuiCardHeader"}),r=n.action,i=n.avatar,x=n.className,h=n.component,u=void 0===h?"div":h,Z=n.disableTypography,k=void 0!==Z&&Z,y=n.subheader,C=n.subheaderTypographyProps,w=n.title,P=n.titleTypographyProps,T=(0,a.Z)(n,j),N=(0,o.Z)({},n,{component:u,disableTypography:k}),R=function(e){var t=e.classes;return(0,l.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},m,t)}(N),_=w;null==_||_.type===c.Z||k||(_=(0,p.jsx)(c.Z,(0,o.Z)({variant:i?"body2":"h5",className:R.title,component:"span",display:"block"},P,{children:_})));var I=y;return null==I||I.type===c.Z||k||(I=(0,p.jsx)(c.Z,(0,o.Z)({variant:i?"body2":"body1",className:R.subheader,color:"text.secondary",component:"span",display:"block"},C,{children:I}))),(0,p.jsxs)(f,(0,o.Z)({className:(0,s.default)(R.root,x),as:u,ref:t,ownerState:N},T,{children:[i&&(0,p.jsx)(b,{className:R.avatar,ownerState:N,children:i}),(0,p.jsxs)(g,{className:R.content,ownerState:N,children:[_,I]}),r&&(0,p.jsx)(v,{className:R.action,ownerState:N,children:r})]}))}))}}]);
//# sourceMappingURL=920.22f6c84c.chunk.js.map