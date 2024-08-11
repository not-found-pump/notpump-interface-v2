"use strict";(self.webpackChunk_minimal_material_kit_react=self.webpackChunk_minimal_material_kit_react||[]).push([[7418],{7456:function(e,n,t){t.d(n,{Z:function(){return x}});var r=t(1413),i=t(45987),o=t(58195),a=t(40464),s=t(8440),l=t(77248),c=t(61091),d=t(80184),u=["title","content","action","open","onClose"];function x(e){var n=e.title,t=e.content,x=e.action,h=e.open,p=e.onClose,Z=(0,i.Z)(e,u);return(0,d.jsxs)(o.Z,(0,r.Z)((0,r.Z)({fullWidth:!0,maxWidth:"xs",open:h,onClose:p},Z),{},{children:[(0,d.jsx)(a.Z,{sx:{pb:2},children:n}),t&&(0,d.jsxs)(s.Z,{sx:{typography:"body2"},children:[" ",t," "]}),(0,d.jsxs)(l.Z,{children:[x,(0,d.jsx)(c.Z,{variant:"outlined",color:"inherit",onClick:p,children:"Cancel"})]})]}))}},46990:function(e,n,t){t.d(n,{Z:function(){return w},w:function(){return d}});var r=t(29439),i=t(72791),o=t(39579),a=t(82599),s=t(54690),l=t(85375),c=t(62509);function d(e,n){var t=(0,i.useState)(!1),d=(0,r.Z)(t,2),u=d[0],x=d[1],h=(0,i.useState)(n),p=(0,r.Z)(h,2),Z=p[0],f=p[1],j=(0,i.useState)(e),m=(0,r.Z)(j,2),g=m[0],v=m[1],y=g&&Z&&(0,o.Z)(new Date(Z),new Date(g))||!1,b=(new Date).getFullYear(),C=g?(0,a.Z)(g):null,k=Z?(0,a.Z)(Z):null,w=b===C&&b===k,D=!(!g||!Z)&&(0,s.Z)(new Date(g),new Date(Z)),S=!(!g||!Z)&&(0,l.Z)(new Date(g),new Date(Z)),I="".concat((0,c.Mu)(g)," - ").concat((0,c.Mu)(Z));return{startDate:g,endDate:Z,onChangeStartDate:function(e){v(e)},onChangeEndDate:function(e){y&&f(null),f(e)},open:u,onOpen:function(){return x(!0)},onClose:function(){return x(!1)},onReset:function(){v(null),f(null)},isSelected:!!g&&!!Z,isError:y,label:I||"",shortLabel:(w?S?D?(0,c.Mu)(Z,"dd MMM yy"):"".concat((0,c.Mu)(g,"dd")," - ").concat((0,c.Mu)(Z,"dd MMM yy")):"".concat((0,c.Mu)(g,"dd MMM")," - ").concat((0,c.Mu)(Z,"dd MMM yy")):"".concat((0,c.Mu)(g,"dd MMM yy")," - ").concat((0,c.Mu)(Z,"dd MMM yy")))||"",setStartDate:v,setEndDate:f}}var u=t(1413),x=t(58195),h=t(40464),p=t(8440),Z=t(94162),f=t(30286),j=t(59911),m=t(37924),g=t(77248),v=t(61091),y=t(15608),b=t(53106),C=t(37306),k=t(80184);function w(e){var n=e.title,t=void 0===n?"Select date range":n,r=e.variant,i=void 0===r?"input":r,o=e.startDate,a=e.endDate,s=e.onChangeStartDate,l=e.onChangeEndDate,c=e.open,d=e.onClose,w=e.isError,D=(0,C.Z)("up","md"),S="calendar"===i;return(0,k.jsxs)(x.Z,{fullWidth:!0,maxWidth:!S&&"xs",open:c,onClose:d,PaperProps:{sx:(0,u.Z)({},S&&{maxWidth:720})},children:[(0,k.jsx)(h.Z,{sx:{pb:2},children:t}),(0,k.jsxs)(p.Z,{sx:(0,u.Z)({},S&&D&&{overflow:"unset"}),children:[(0,k.jsx)(Z.Z,{spacing:S?3:2,direction:S&&D?"row":"column",justifyContent:"center",sx:{pt:1,"& .MuiCalendarPicker-root":(0,u.Z)({},!D&&{width:"auto"})},children:S?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(f.Z,{variant:"outlined",sx:{borderRadius:2,borderColor:"divider",borderStyle:"dashed"},children:(0,k.jsx)(y.h,{date:o,onChange:s})}),(0,k.jsx)(f.Z,{variant:"outlined",sx:{borderRadius:2,borderColor:"divider",borderStyle:"dashed"},children:(0,k.jsx)(y.h,{date:a,onChange:l})})]}):(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(b.M,{label:"Start date",value:o,onChange:s,renderInput:function(e){return(0,k.jsx)(j.Z,(0,u.Z)({},e))}}),(0,k.jsx)(b.M,{label:"End date",value:a,onChange:l,renderInput:function(e){return(0,k.jsx)(j.Z,(0,u.Z)({},e))}})]})}),w&&(0,k.jsx)(m.Z,{error:!0,sx:{px:2},children:"End date must be later than start date"})]}),(0,k.jsxs)(g.Z,{children:[(0,k.jsx)(v.Z,{variant:"outlined",color:"inherit",onClick:d,children:"Cancel"}),(0,k.jsx)(v.Z,{disabled:w,variant:"contained",onClick:d,children:"Apply"})]})]})}},37418:function(e,n,t){t.r(n),t.d(n,{default:function(){return Se}});var r=t(4942),i=t(1413),o=t(93433),a=t(6907),s=t(72791),l=t(476),c=t(94162),d=t(86631),u=t(9440),x=t(56736),h=t(7055),p=t(65266),Z=t(87383),f=t(72745),j=t(29439),m=t(30286),g=t(50228),v=t(4565),y=t(45473),b=t(43932),C=t(63402),k=t(60277),w=t(12065),D=t(4544),S=t(81872),I=t(83423),M=t(75814),z=t(13811),A=t(59911),P=t(53512),R=t(46990),E=t(45987),W=t(1169),T=t(80184),F=["sx"];function L(e){var n=e.sx,t=(0,E.Z)(e,F);return(0,T.jsx)(W.ZP,(0,i.Z)({sx:(0,i.Z)({flexGrow:1,"& .MuiInputBase-input":{py:1,borderRadius:1,typography:"h6",border:"solid 1px transparent",transition:function(e){return e.transitions.create(["padding-left","border-color"])},"&:hover, &:focus":{pl:1,border:function(e){return"solid 1px ".concat(e.palette.text.primary)}}}},n)},t))}var O=t(61091),_=t(37306),q=t(7456);function N(e){var n=e.fileInputRef,t=e.taskName,r=e.liked,i=e.completed,o=e.onLike,a=e.onAttach,l=e.onDelete,d=e.onCompleted,u=e.onCloseDetails,x=(0,_.Z)("up","sm"),h=(0,s.useState)(!1),p=(0,j.Z)(h,2),Z=p[0],f=p[1];return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(c.Z,{p:2.5,direction:"row",alignItems:"center",children:[!x&&(0,T.jsx)(M.Z,{title:"Back",children:(0,T.jsx)(z.Z,{onClick:u,sx:{mr:1},children:(0,T.jsx)(C.Z,{icon:"eva:arrow-ios-back-fill"})})}),(0,T.jsx)(O.Z,{size:"small",variant:"outlined",color:i?"primary":"inherit",startIcon:i&&(0,T.jsx)(C.Z,{icon:"eva:checkmark-fill",width:16}),onClick:d,children:i?"Completed":"Mark Complete"}),(0,T.jsxs)(c.Z,{direction:"row",spacing:1,justifyContent:"flex-end",flexGrow:1,children:[(0,T.jsx)(M.Z,{title:"Like this",children:(0,T.jsx)(z.Z,{color:r?"default":"primary",size:"small",onClick:o,children:(0,T.jsx)(C.Z,{icon:"ic:round-thumb-up"})})}),(0,T.jsx)(M.Z,{title:"Attachment",children:(0,T.jsx)(z.Z,{size:"small",onClick:a,children:(0,T.jsx)(C.Z,{icon:"eva:attach-2-fill"})})}),(0,T.jsx)(M.Z,{title:"Delete task",children:(0,T.jsx)(z.Z,{onClick:function(){f(!0)},size:"small",children:(0,T.jsx)(C.Z,{icon:"eva:trash-2-outline"})})}),(0,T.jsx)(z.Z,{size:"small",children:(0,T.jsx)(C.Z,{icon:"eva:more-vertical-fill"})})]})]}),(0,T.jsx)("input",{ref:n,type:"file",style:{display:"none"}}),(0,T.jsx)(q.Z,{open:Z,onClose:function(){f(!1)},title:"Delete",content:(0,T.jsxs)(T.Fragment,{children:["Are you sure want to delete ",(0,T.jsxs)("strong",{children:[" ",t," "]}),"?"]}),action:(0,T.jsx)(O.Z,{variant:"contained",color:"error",onClick:l,children:"Delete"})})]})}var U=t(58195),K=t(40464),G=t(38254),B=t(8440),H=t(35110),Y=t(5682),V=t(4346),J=t(93358),Q=t(6543);function X(e){var n=e.assignee,t=void 0===n?[]:n,r=e.open,i=e.onClose,o=(0,s.useState)(""),a=(0,j.Z)(o,2),l=a[0],c=a[1],d=function(e){var n=e.inputData,t=e.query;t&&(n=n.filter((function(e){return-1!==e.name.toLowerCase().indexOf(t.toLowerCase())||-1!==e.email.toLowerCase().indexOf(t.toLowerCase())})));return n}({inputData:J.Ck,query:l}),u=!d.length&&!!l;return(0,T.jsxs)(U.Z,{fullWidth:!0,maxWidth:"xs",open:r,onClose:i,children:[(0,T.jsxs)(K.Z,{sx:{pb:0},children:["Contacts ",(0,T.jsxs)(v.Z,{component:"span",children:["(",J.Ck.length,")"]})]}),(0,T.jsx)(g.Z,{sx:{px:3,py:2.5},children:(0,T.jsx)(A.Z,{fullWidth:!0,value:l,onChange:function(e){c(e.target.value)},placeholder:"Search...",InputProps:{startAdornment:(0,T.jsx)(G.Z,{position:"start",children:(0,T.jsx)(C.Z,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})}),(0,T.jsx)(B.Z,{sx:{p:0},children:u?(0,T.jsx)(Q.Z,{query:l,sx:{mt:3,mb:10}}):(0,T.jsx)(P.Z,{sx:{px:2.5,height:384},children:d.map((function(e){var n=t.map((function(e){return e.name})).includes(e.name);return(0,T.jsxs)(H.ZP,{disableGutters:!0,secondaryAction:(0,T.jsx)(O.Z,{size:"small",color:n?"primary":"inherit",startIcon:(0,T.jsx)(C.Z,{icon:n?"eva:checkmark-fill":"eva:plus-fill"}),children:n?"assigned":"assign"}),sx:{height:64},children:[(0,T.jsx)(Y.Z,{children:(0,T.jsx)(I.Z,{src:e.avatar})}),(0,T.jsx)(V.Z,{primaryTypographyProps:{typography:"subtitle2",sx:{mb:.25}},secondaryTypographyProps:{typography:"caption"},primary:e.name,secondary:e.email})]},e.id)}))})})]})}var $=t(62509),ee=t(26133);function ne(e){var n=e.comments,t=(0,s.useState)(-1),r=(0,j.Z)(t,2),i=r[0],o=r[1],a=n.filter((function(e){return"image"===e.messageType})).map((function(e){return{src:e.message}}));return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(c.Z,{spacing:3,sx:{py:3,px:2.5,bgcolor:"background.neutral"},children:n.map((function(e){return(0,T.jsxs)(c.Z,{direction:"row",spacing:2,children:[(0,T.jsx)(I.Z,{src:e.avatar}),(0,T.jsxs)(c.Z,{children:[(0,T.jsxs)(c.Z,{direction:"row",alignItems:"center",spacing:1,children:[(0,T.jsxs)(v.Z,{variant:"subtitle2",children:[" ",e.name]}),(0,T.jsx)(v.Z,{variant:"caption",sx:{color:"text.secondary"},children:(0,$.DY)(e.createdAt)})]}),"image"===e.messageType?(0,T.jsx)(b.Z,{alt:e.message,src:e.message,onClick:function(){return function(e){var n=a.findIndex((function(n){return n.src===e}));o(n)}(e.message)},sx:{mt:1,borderRadius:1}}):(0,T.jsx)(v.Z,{variant:"body2",sx:{mt:.5},children:e.message})]})]},e.id)}))}),(0,T.jsx)(ee.Z,{index:i,slides:a,open:i>=0,close:function(){o(-1)}})]})}var te=t(41785);function re(e){var n=e.attachments,t=(0,s.useState)(n),r=(0,j.Z)(t,2),i=r[0],a=r[1],l=(0,s.useCallback)((function(e){var n=e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})}));a([].concat((0,o.Z)(i),(0,o.Z)(n)))}),[i]);return(0,T.jsxs)(c.Z,{direction:"row",flexWrap:"wrap",children:[(0,T.jsx)(te.GV,{thumbnail:!0,files:i,onRemove:function(e){return function(e){var n=i.filter((function(n){return n!==e}));a(n)}(e)},sx:{width:64,height:64}}),(0,T.jsx)(te.un,{onDrop:l})]})}var ie=t(97265),oe=t(72900),ae=t(7226),se=[{value:"low",label:"Low",color:"info"},{value:"medium",label:"Medium",color:"warning"},{value:"hight",label:"Hight",color:"error"}];function le(e){var n=e.prioritize,t=e.onChangePrioritize;return(0,T.jsx)(ie.Z,{row:!0,value:n,onChange:t,children:se.map((function(e){var t=e.value===n;return(0,T.jsxs)(g.Z,{sx:{position:"relative",mr:1},children:[(0,T.jsxs)(c.Z,{spacing:.5,direction:"row",alignItems:"center",sx:(0,i.Z)({pl:"4px",pr:"10px",fontWeight:"fontWeightBold",height:28,fontSize:12,borderRadius:.75,border:function(e){return"solid 1px ".concat((0,w.Fq)(e.palette.grey[500],.24))}},t&&{color:function(n){return n.palette[e.color].main},border:function(n){return"solid 1px ".concat(n.palette[e.color].main)},bgcolor:function(n){return(0,w.Fq)(n.palette[e.color].main,.08)}}),children:[(0,T.jsx)(c.Z,{alignItems:"center",justifyContent:"center",sx:{width:16,height:16,mr:.5},children:t?(0,T.jsx)(C.Z,{icon:"eva:checkmark-fill",width:16}):(0,T.jsx)(g.Z,{sx:{width:8,height:8,borderRadius:"50%",bgcolor:function(n){return n.palette[e.color].main}}})}),e.label]}),(0,T.jsx)(oe.Z,{value:e.value,control:(0,T.jsx)(ae.Z,{sx:{display:"none"}}),label:"",sx:{m:0,top:0,left:0,right:0,bottom:0,position:"absolute"}})]},e.value)}))})}var ce=t(50002),de=t(37782);function ue(){var e=(0,ce.E)().user;return(0,T.jsxs)(c.Z,{direction:"row",spacing:2,sx:{py:3,px:2.5},children:[(0,T.jsx)(de.z,{src:null===e||void 0===e?void 0:e.photoURL,alt:null===e||void 0===e?void 0:e.displayName,name:null===e||void 0===e?void 0:e.displayName}),(0,T.jsxs)(m.Z,{variant:"outlined",sx:{p:1,flexGrow:1},children:[(0,T.jsx)(W.ZP,{fullWidth:!0,multiline:!0,rows:2,placeholder:"Type a message",sx:{px:1}}),(0,T.jsxs)(c.Z,{direction:"row",alignItems:"center",children:[(0,T.jsxs)(c.Z,{direction:"row",flexGrow:1,children:[(0,T.jsx)(M.Z,{title:"Add photo",children:(0,T.jsx)(z.Z,{size:"small",children:(0,T.jsx)(C.Z,{icon:"ic:round-add-photo-alternate"})})}),(0,T.jsx)(z.Z,{size:"small",children:(0,T.jsx)(C.Z,{icon:"eva:attach-2-fill"})})]}),(0,T.jsx)(O.Z,{variant:"contained",children:"Comment"})]})]})]})}var xe=(0,k.ZP)("span")((function(e){var n=e.theme;return(0,i.Z)((0,i.Z)({},n.typography.caption),{},{width:120,flexShrink:0,color:n.palette.text.secondary})}));function he(e){var n=e.task,t=e.openDetails,r=e.onCloseDetails,i=e.onDeleteTask,o=(0,s.useRef)(null),a=(0,s.useState)(!1),l=(0,j.Z)(a,2),d=l[0],u=l[1],x=(0,s.useState)("low"),h=(0,j.Z)(x,2),p=h[0],Z=h[1],f=(0,s.useState)(n.name),m=(0,j.Z)(f,2),v=m[0],y=m[1],b=(0,s.useState)(!1),k=(0,j.Z)(b,2),E=k[0],W=k[1],F=(0,s.useState)(n.completed),O=(0,j.Z)(F,2),_=O[0],q=O[1],U=(0,s.useState)(n.description),K=(0,j.Z)(U,2),G=K[0],B=K[1],H=(0,R.w)(n.due[0],n.due[1]),Y=H.startDate,V=H.endDate,J=H.onChangeStartDate,Q=H.onChangeEndDate,$=H.open,ee=H.onOpen,te=H.onClose,ie=H.isSelected,oe=H.isError,ae=H.shortLabel;return(0,T.jsxs)(D.ZP,{open:t,onClose:r,anchor:"right",PaperProps:{sx:{width:{xs:1,sm:480}}},children:[(0,T.jsx)(N,{taskName:n.name,fileInputRef:o,liked:d,completed:_,onLike:function(){u(!d)},onAttach:function(){var e;null===(e=o.current)||void 0===e||e.click()},onDelete:i,onCompleted:function(){q(!_)},onCloseDetails:r}),(0,T.jsx)(S.Z,{}),(0,T.jsxs)(P.Z,{children:[(0,T.jsxs)(c.Z,{spacing:3,sx:{px:2.5,pt:3,pb:5},children:[(0,T.jsx)(L,{placeholder:"Task name",value:v,onChange:function(e){y(e.target.value)}}),(0,T.jsxs)(c.Z,{direction:"row",children:[(0,T.jsx)(xe,{sx:{height:40,lineHeight:"40px",my:.5},children:"Assignee"}),(0,T.jsxs)(c.Z,{direction:"row",flexWrap:"wrap",alignItems:"center",children:[n.assignee.map((function(e){return(0,T.jsx)(I.Z,{alt:e.name,src:e.avatar,sx:{m:.5}},e.id)})),(0,T.jsx)(M.Z,{title:"Add assignee",children:(0,T.jsx)(z.Z,{onClick:function(){W(!0)},sx:{p:1,ml:.5,bgcolor:function(e){return(0,w.Fq)(e.palette.grey[500],.08)},border:function(e){return"dashed 1px ".concat(e.palette.divider)}},children:(0,T.jsx)(C.Z,{icon:"eva:plus-fill"})})}),(0,T.jsx)(X,{assignee:n.assignee,open:E,onClose:function(){W(!1)}})]})]}),(0,T.jsxs)(c.Z,{direction:"row",alignItems:"center",children:[(0,T.jsx)(xe,{children:" Due date "}),(0,T.jsxs)(T.Fragment,{children:[ie?(0,T.jsx)(g.Z,{onClick:ee,sx:{typography:"body2",cursor:"pointer","&:hover":{opacity:.72}},children:ae}):(0,T.jsx)(M.Z,{title:"Add due date",children:(0,T.jsx)(z.Z,{onClick:ee,sx:{p:1,ml:.5,bgcolor:function(e){return(0,w.Fq)(e.palette.grey[500],.08)},border:function(e){return"dashed 1px ".concat(e.palette.divider)}},children:(0,T.jsx)(C.Z,{icon:"eva:plus-fill"})})}),(0,T.jsx)(R.Z,{variant:"calendar",title:"Choose due date",startDate:Y,endDate:V,onChangeStartDate:J,onChangeEndDate:Q,open:$,onClose:te,isSelected:ie,isError:oe})]})]}),(0,T.jsxs)(c.Z,{direction:"row",alignItems:"center",children:[(0,T.jsx)(xe,{children:"Prioritize"}),(0,T.jsx)(le,{prioritize:p,onChangePrioritize:function(e){Z(e.target.value)}})]}),(0,T.jsxs)(c.Z,{direction:"row",children:[(0,T.jsx)(xe,{children:" Description "}),(0,T.jsx)(A.Z,{fullWidth:!0,multiline:!0,size:"small",value:G,onChange:function(e){B(e.target.value)},InputProps:{sx:{typography:"body2"}}})]}),(0,T.jsxs)(c.Z,{direction:"row",children:[(0,T.jsx)(xe,{sx:{py:.5},children:"Attachments"}),(0,T.jsx)(re,{attachments:n.attachments})]})]}),!!n.comments.length&&(0,T.jsx)(ne,{comments:n.comments})]}),(0,T.jsx)(S.Z,{}),(0,T.jsx)(ue,{})]})}function pe(e){var n=e.card,t=e.onDeleteTask,r=e.index,o=n.name,a=n.attachments,l=(0,s.useState)(n.completed),c=(0,j.Z)(l,2),u=c[0],x=c[1],h=(0,s.useState)(!1),p=(0,j.Z)(h,2),Z=p[0],f=p[1],k=function(){f(!0)},w=function(e){x(e.target.checked)};return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(d._l,{draggableId:n.id,index:r,children:function(e){return(0,T.jsxs)(m.Z,(0,i.Z)((0,i.Z)((0,i.Z)({},e.draggableProps),e.dragHandleProps),{},{ref:e.innerRef,sx:{width:1,borderRadius:1,overflow:"hidden",position:"relative",boxShadow:function(e){return e.customShadows.z1},"&:hover":{boxShadow:function(e){return e.customShadows.z20}}},children:[(0,T.jsxs)(g.Z,{onClick:k,sx:{cursor:"pointer"},children:[!!a.length&&(0,T.jsx)(b.Z,{disabledEffect:!0,alt:a[0],src:a[0],ratio:"4/3",sx:(0,i.Z)({transition:function(e){return e.transitions.create("opacity",{duration:e.transitions.duration.shortest})}},u&&{opacity:.48})}),(0,T.jsx)(v.Z,{noWrap:!0,variant:"subtitle2",sx:(0,i.Z)({pr:1,pl:6,height:72,lineHeight:"72px",transition:function(e){return e.transitions.create("opacity",{duration:e.transitions.duration.shortest})}},u&&{opacity:.48}),children:o})]}),(0,T.jsx)(y.Z,{disableRipple:!0,checked:u,icon:(0,T.jsx)(C.Z,{icon:"eva:radio-button-off-outline"}),checkedIcon:(0,T.jsx)(C.Z,{icon:"eva:checkmark-circle-2-outline"}),onChange:w,sx:{position:"absolute",bottom:16,left:8}})]}))}}),(0,T.jsx)(he,{task:n,openDetails:Z,onCloseDetails:function(){f(!1)},onDeleteTask:function(){return t(n.id)}})]})}var Ze=t(74165),fe=t(15861),je=t(27209),me=t(53767),ge=t(24649),ve={attachments:[],comments:[],description:"",due:[null,null],assignee:[]};function ye(e){var n=e.onAddTask,t=e.onCloseAddTask,r=(0,s.useState)(""),o=(0,j.Z)(r,2),a=o[0],l=o[1],d=(0,s.useState)(!1),u=(0,j.Z)(d,2),x=u[0],h=u[1],p=(0,s.useState)(!1),Z=(0,j.Z)(p,2),f=Z[0],v=Z[1],b=(0,R.w)(new Date,new Date),k=b.startDate,w=b.endDate,D=b.onChangeStartDate,S=b.onChangeEndDate,I=b.open,A=b.onOpen,P=b.onClose,E=b.isSelected,F=b.isError,L=b.shortLabel;return(0,T.jsx)(me.Z,{onClickAway:function(){a?n((0,i.Z)((0,i.Z)({},ve),{},{id:(0,ge.Z)(),name:a,due:[k,w],completed:x})):t()},children:(0,T.jsxs)("div",{children:[(0,T.jsxs)(m.Z,{variant:"outlined",children:[(0,T.jsx)(W.ZP,{multiline:!0,fullWidth:!0,placeholder:"Task name",value:a,onChange:function(e){return l(e.target.value)},onKeyUp:function(e){"Enter"===e.key&&""!==a.trim()&&n((0,i.Z)((0,i.Z)({},ve),{},{id:(0,ge.Z)(),name:a,due:[k,w],completed:x}))},sx:{px:2,pt:2}}),(0,T.jsxs)(c.Z,{direction:"row",justifyContent:"space-between",sx:{pl:1,pr:1.5,pb:2},children:[(0,T.jsx)(M.Z,{title:"Mark complete",children:(0,T.jsx)(y.Z,{disableRipple:!0,checked:x,onChange:function(e){h(e.target.checked)},icon:(0,T.jsx)(C.Z,{icon:"eva:radio-button-off-outline"}),checkedIcon:(0,T.jsx)(C.Z,{icon:"eva:checkmark-circle-2-outline"})})}),(0,T.jsxs)(c.Z,{direction:"row",spacing:1.5,alignItems:"center",children:[(0,T.jsx)(M.Z,{title:"Assign",onClick:function(){v(!0)},children:(0,T.jsx)(z.Z,{size:"small",children:(0,T.jsx)(C.Z,{icon:"eva:people-fill"})})}),E?(0,T.jsx)(g.Z,{onClick:A,sx:{cursor:"pointer",typography:"caption","&:hover":{opacity:.72}},children:L}):(0,T.jsx)(M.Z,{title:"Due date",children:(0,T.jsx)(z.Z,{size:"small",onClick:A,children:(0,T.jsx)(C.Z,{icon:"eva:calendar-fill"})})})]})]})]}),(0,T.jsx)(X,{open:f,onClose:function(){v(!1)}}),(0,T.jsx)(R.Z,{variant:"calendar",title:"Choose due date",startDate:k,endDate:w,onChangeStartDate:D,onChangeEndDate:S,open:I,onClose:P,isSelected:E,isError:F})]})})}var be=t(35702),Ce=t(22734);function ke(e){var n=e.columnName,t=e.onDelete,r=e.onUpdate,i=(0,s.useRef)(null),o=(0,s.useState)(n),a=(0,j.Z)(o,2),l=a[0],d=a[1],u=(0,s.useState)(!1),x=(0,j.Z)(u,2),h=x[0],p=x[1],Z=(0,s.useState)(null),f=(0,j.Z)(Z,2),m=f[0],v=f[1];(0,s.useEffect)((function(){var e=i.current;m&&e&&e.focus()}),[m]);var y=function(){p(!1)},b=function(){v(null)};return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(c.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",spacing:1,sx:{pt:3},children:[(0,T.jsx)(L,{inputRef:i,placeholder:"Section name",value:l,onChange:function(e){d(e.target.value)},onKeyUp:function(e){"Enter"===e.key&&i.current&&(i.current.blur(),r(l))}}),(0,T.jsx)(z.Z,{size:"small",color:m?"inherit":"default",onClick:function(e){v(e.currentTarget)},children:(0,T.jsx)(C.Z,{icon:"eva:more-horizontal-fill"})})]}),(0,T.jsxs)(Ce.Z,{open:m,onClose:b,sx:{mt:0,ml:1.25},children:[(0,T.jsxs)(be.Z,{onClick:function(){p(!0),b()},sx:{color:"error.main"},children:[(0,T.jsx)(C.Z,{icon:"eva:trash-2-outline"}),"Delete section"]}),(0,T.jsxs)(be.Z,{onClick:function(){b()},children:[(0,T.jsx)(C.Z,{icon:"eva:edit-fill"}),"Rename section"]})]}),(0,T.jsx)(q.Z,{open:h,onClose:y,title:"Delete",content:(0,T.jsxs)(T.Fragment,{children:["Are you sure want to delete column?",(0,T.jsxs)(g.Z,{sx:{typography:"caption",color:"error.main",mt:2},children:[(0,T.jsx)("strong",{children:" NOTE: "})," All tasks related to this category will also be deleted."]})]}),action:(0,T.jsx)(O.Z,{variant:"contained",color:"error",onClick:function(){t(),y()},children:"Delete"})})]})}function we(e){var n=e.column,t=e.index,r=e.cards,o=(0,u.I0)(),a=(0,je.Ds)().enqueueSnackbar,l=(0,s.useState)(!1),h=(0,j.Z)(l,2),p=h[0],Z=h[1],f=function(){Z(!p)},g=function(){Z(!1)},v=function(e){o((0,x._5)({cardId:e,columnId:n.id})),a("Delete success!")},y=function(){var e=(0,fe.Z)((0,Ze.Z)().mark((function e(t){return(0,Ze.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t!==n.name&&(o((0,x.Gw)(n.id,(0,i.Z)((0,i.Z)({},n),{},{name:t}))),a("Update success!"))}catch(r){console.error(r)}case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),b=function(){var e=(0,fe.Z)((0,Ze.Z)().mark((function e(){return(0,Ze.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{o((0,x.eA)(n.id)),a("Delete success!")}catch(t){console.error(t)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(e){g(),o((0,x.gI)({card:e,columnId:n.id}))};return(0,T.jsx)(d._l,{draggableId:n.id,index:t,children:function(e){return(0,T.jsx)(m.Z,(0,i.Z)((0,i.Z)({},e.draggableProps),{},{ref:e.innerRef,variant:"outlined",sx:{px:2,borderRadius:1,borderStyle:"dashed",bgcolor:function(e){return"light"===e.palette.mode?"grey.100":"background.default"}},children:(0,T.jsxs)(c.Z,(0,i.Z)((0,i.Z)({spacing:3},e.dragHandleProps),{},{children:[(0,T.jsx)(ke,{columnName:n.name,onDelete:b,onUpdate:y}),(0,T.jsx)(d.bK,{droppableId:n.id,type:"task",children:function(e){return(0,T.jsxs)(c.Z,(0,i.Z)((0,i.Z)({ref:e.innerRef},e.droppableProps),{},{spacing:2,sx:{width:280},children:[n.cardIds.map((function(e,n){return(0,T.jsx)(pe,{index:n,onDeleteTask:v,card:r[e]},e)})),e.placeholder]}))}}),(0,T.jsxs)(c.Z,{spacing:2,sx:{pb:3},children:[p&&(0,T.jsx)(ye,{onAddTask:k,onCloseAddTask:g}),(0,T.jsx)(O.Z,{fullWidth:!0,size:"large",color:"inherit",startIcon:(0,T.jsx)(C.Z,{icon:"eva:plus-fill"}),onClick:f,sx:{fontSize:14},children:"Add Task"})]})]}))}))}})}function De(){var e=(0,u.I0)(),n=(0,s.useState)(""),t=(0,j.Z)(n,2),r=t[0],i=t[1],o=(0,s.useState)(!1),a=(0,j.Z)(o,2),l=a[0],c=a[1],d=function(){var n=(0,fe.Z)((0,Ze.Z)().mark((function n(){return(0,Ze.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:try{r&&(e((0,x.wy)({name:r})),i("")),c(!1)}catch(t){console.error(t)}case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,T.jsx)(m.Z,{sx:{minWidth:280,width:280},children:l?(0,T.jsx)(me.Z,{onClickAway:d,children:(0,T.jsx)(A.Z,{autoFocus:!0,fullWidth:!0,placeholder:"New section",value:r,onChange:function(e){i(e.target.value)},onKeyUp:function(e){"Enter"===e.key&&d()},InputProps:{sx:{typography:"h6"}}})}):(0,T.jsx)(O.Z,{fullWidth:!0,size:"large",color:"inherit",variant:"outlined",startIcon:(0,T.jsx)(C.Z,{icon:"eva:plus-fill"}),onClick:function(){c(!0)},children:"Add section"})})}function Se(){var e=(0,u.I0)(),n=(0,u.v9)((function(e){return e.kanban})).board;(0,s.useEffect)((function(){e((0,x.SZ)())}),[e]);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(a.ql,{children:(0,T.jsx)("title",{children:" Kanban | NotPump"})}),(0,T.jsxs)(l.Z,{maxWidth:!1,sx:{height:1},children:[(0,T.jsx)(Z.Z,{heading:"Kanban",links:[{name:"Dashboard",href:h.vB.root},{name:"Kanban"}]}),(0,T.jsx)(d.Z5,{onDragEnd:function(t){var a,s=t.destination,l=t.source,c=t.draggableId,d=t.type;if(s&&(s.droppableId!==l.droppableId||s.index!==l.index)){if("column"===d){var u=Array.from(n.columnOrder);return u.splice(l.index,1),u.splice(s.index,0,c),void e((0,x.Rc)(u))}var h=n.columns[l.droppableId],p=n.columns[s.droppableId];if(h.id!==p.id){var Z=(0,o.Z)(h.cardIds);Z.splice(l.index,1);var f=(0,i.Z)((0,i.Z)({},h),{},{cardIds:Z}),j=(0,o.Z)(p.cardIds);j.splice(s.index,0,c);var m=(0,i.Z)((0,i.Z)({},p),{},{cardIds:j});e((0,x.B)((0,i.Z)((0,i.Z)({},n.columns),{},(a={},(0,r.Z)(a,f.id,f),(0,r.Z)(a,m.id,m),a))))}else{var g=(0,o.Z)(h.cardIds);g.splice(l.index,1),g.splice(s.index,0,c);var v=(0,i.Z)((0,i.Z)({},h),{},{cardIds:g});e((0,x.B)((0,i.Z)((0,i.Z)({},n.columns),{},(0,r.Z)({},v.id,v))))}}},children:(0,T.jsx)(d.bK,{droppableId:"all-columns",direction:"horizontal",type:"column",children:function(e){return(0,T.jsxs)(c.Z,(0,i.Z)((0,i.Z)({},e.droppableProps),{},{ref:e.innerRef,spacing:3,direction:"row",alignItems:"flex-start",sx:(0,i.Z)({height:1,overflowY:"hidden"},p.IW),children:[n.columnOrder.length?n.columnOrder.map((function(e,t){return(0,T.jsx)(we,{index:t,column:n.columns[e],cards:n.cards},e)})):(0,T.jsx)(f.Ml,{}),e.placeholder,(0,T.jsx)(De,{})]}))}})})]})]})}}}]);
//# sourceMappingURL=7418.10bc1137.chunk.js.map