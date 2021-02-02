(this["webpackJsonpnotes-web"]=this["webpackJsonpnotes-web"]||[]).push([[0],{92:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n(0),i=n.n(r),o=n(12),c=n.n(o),s=(n(92),n(64)),l=n(32),u=n(15),h=n(16),d=n(25),b=n(21),p=n(20),j=n(36),f=n(76),g=n(147),v=n(4),O=n(151),m=n(163),x=n(157),y=n(144),C=n(149),k=n(160),w=n(162),T=n(152),S=n(45),N=n(150),_=n(100),E=n(148),L=n(74),P=n.n(L),A=n(158),B=n(159),W=n(73),F=n.n(W),H=n(72),V=n.n(H),I=n(165),U=n(156),J=n(155),M=n(154),R=n(161),D=n(26),G=n.n(D),q=n(44),z="https://typed-thoughts.herokuapp.com/",$=function(){function e(t,n){Object(u.a)(this,e),this.title=t,this.canHaveValue=n,this.value=null}return Object(h.a)(e,[{key:"setValue",value:function(e){this.canHaveValue?this.value=e:console.error("Attempting to set value for tag that can't have value")}}]),e}(),K=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return new $(e,t)},Q=[K("Article"),K("Book"),K("Movie"),K("Music"),K("Series"),K("Podcast"),K("Recipe"),K("Restaurant"),K("Adventure"),K("VideoGame"),K("BoardGame"),K("Career"),K("Entertainment"),K("Productivity"),K("ArtificialIntelligence"),K("EffectiveAltruism"),K("SocialJustice"),K("Environmental"),K("RecommendedBy",!0),K("RemindsMeOf",!0),K("Origin",!0)],X=function(){var e=Object(q.a)(G.a.mark((function e(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Q);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(q.a)(G.a.mark((function e(t){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(z+"notes/archive/"+String(t),{method:"PUT"}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(q.a)(G.a.mark((function e(t){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.tags=t.tags.map(ne),e.abrupt("return",fetch(z+"notes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ee=function(){var e=Object(q.a)(G.a.mark((function e(t){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.tags=t.tags.map(ne),e.abrupt("return",fetch(z+"note/"+t.note_id,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),te=function(e,t){return e.canHaveValue&&t.canHaveValue&&e.value&&t.value?e.value.toLowerCase()===t.value.toLowerCase()&&e.title===t.title:e.title===t.title},ne=function(e){return e.canHaveValue?Object(l.a)({},e.title,e.value.toLowerCase()):e.title},ae=function(e){if("string"===typeof e)return K(e);if("object"===typeof e){var t=Object.keys(e)[0],n=e[t],a=K(t,!0);return a.setValue(n),a}return console.error("Unknown tag variant:",e),e},re={get_tags:X,create_note:Z,update_note:ee,get_notes:function(e){return fetch(z+"notes/brendon").then((function(e){return e.json().then((function(e){for(var t=[],n=0,a=Object.values(e.notes);n<a.length;n++){var r=a[n];r.tags=r.tags.map(ae),r.tags.sort((function(e,t){return e.title.localeCompare(t.title)})),t.push(r)}return t.sort((function(e,t){return e.last_update_time<t.last_update_time?1:-1})),t}))}))},archive_note:Y},ie=[],oe=function(e){return{fullHeight:Object(j.a)({},e.mixins.toolbar),text:{padding:e.spacing(2,2,0)},addButton:{position:"fixed",zIndex:1,bottom:"10%",right:"5%",margin:"0 auto"},paper:{paddingBottom:50},list:{marginBottom:e.spacing(2)},subheader:{backgroundColor:e.palette.background.paper},appBar:{top:"auto",bottom:0},grow:{flexGrow:1}}},ce=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).changeTab=function(e,t){a.setState({currentTab:t})},a.state={currentTab:"notes"},a.changeTab=a.changeTab.bind(Object(d.a)(a)),a}return Object(h.a)(n,[{key:"render",value:function(){var e=Object(f.a)({palette:{primary:{light:"#757ce8",main:"#000000",dark:"#002884",contrastText:"#fff"},secondary:{light:"#ff7961",main:"#f44336",dark:"#ba000d",contrastText:"#000"},background:{paper:"#efefef",default:"#fff"}}});return Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)(y.a,{}),Object(a.jsxs)(g.a,{theme:e,children:["notes"===this.state.currentTab&&Object(a.jsx)(Oe,{}),"lists"===this.state.currentTab&&Object(a.jsx)(me,{}),Object(a.jsx)(ve,{changeTab:this.changeTab,currentTab:this.state.currentTab})]})]})}}]),n}(i.a.Component),se=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleOpen=function(e){a.setState({open:!0,active_uuid:e.uuid,title:e.title,description:e.description,tags:e.tags})},a.handleCreate=function(){a.setState({open:!0,active_uuid:null,title:"",description:"",origin:"",tags:[]})},a.handleClose=function(){a.setState({open:!1,active_note:null})},a.handleTagListChange=function(e){return function(t){return function(n,r){console.log("tl"),console.log(n,r);var i=n.target.name.split("-")[0];t[i].value=n.target.value,a.setState(Object(l.a)({},e,t))}}},a.handleTagPickerChange=function(e){return function(t,n){a.setState(Object(l.a)({},e,n))}},a.state={open:!1,search:[],active_uuid:"",title:"",description:"",owner:"brendon",origin:"",tags:[],notes:[]},a.handleNoteTagEdit=a.handleNoteTagEdit.bind(Object(d.a)(a)),a.handleNoteEdit=a.handleNoteEdit.bind(Object(d.a)(a)),a.handleOpen=a.handleOpen.bind(Object(d.a)(a)),a.handleSave=a.handleSave.bind(Object(d.a)(a)),a.handleArchive=a.handleArchive.bind(Object(d.a)(a)),a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.loadNotes()}},{key:"loadNotes",value:function(){var e=this;re.get_notes(this.state.owner).then((function(t){e.setState({notes:t})})).catch(console.log)}},{key:"handleArchive",value:function(){var e=this,t=this.state.active_uuid;re.archive_note(t).then((function(t){e.loadNotes()})).catch(console.error)}},{key:"handleNoteEdit",value:function(e){this.setState(Object(l.a)({},e.target.name,e.target.value))}},{key:"handleNoteTagEdit",value:function(e,t){this.setState({tags:t})}},{key:"handleSave",value:function(){var e=this;if(this.state.active_uuid){var t={note_id:this.state.active_uuid,title:this.state.title,description:this.state.description,origin:this.state.origin,tags:this.state.tags};re.update_note(t).then((function(t){e.loadNotes()})).catch(console.error)}else{var n={title:this.state.title,description:this.state.description,owner:this.state.owner,origin:this.state.origin,tags:this.state.tags};re.create_note(n).then((function(t){e.loadNotes(),e.handleClose()})).catch(console.error)}}},{key:"render",value:function(){var e=this,t=this.props.classes;return Object(a.jsxs)(_.a,{square:!0,className:t.paper,children:[this.state.open&&Object(a.jsx)(he,{handleClose:this.handleClose,handleChange:this.handleNoteEdit,handleNoteTagEdit:this.handleNoteTagEdit,handleTagListChange:this.handleTagListChange,handleSave:this.handleSave,handleArchive:this.handleArchive,open:this.state.open,title:this.state.title,description:this.state.description,origin:this.state.origin,tags:this.state.tags}),Object(a.jsx)(be,{handlePickerChange:this.handleTagPickerChange("search"),handleListEntryChange:this.handleTagListChange("search"),value:this.state.search,inputPlaceholder:"Search for tags...",variant:"filled"}),Object(a.jsx)(E.a,{className:t.list,children:this.state.notes.filter((function(t){if(null!=t.delete_time)return!1;if(e.state.search.length>0){var n,a=Object(s.a)(e.state.search);try{for(a.s();!(n=a.n()).done;){var r,i=n.value,o=!1,c=Object(s.a)(t.tags);try{for(c.s();!(r=c.n()).done;){var l=r.value;te(i,l)&&(o=!0)}}catch(u){c.e(u)}finally{c.f()}if(!o)return!1}}catch(u){a.e(u)}finally{a.f()}}return!0})).map((function(t,n){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(fe,{note_data:t,onClick:function(){e.handleOpen(t)}},"note-entry-".concat(n))})}))}),Object(a.jsx)(C.a,{color:"secondary","aria-label":"add",className:t.addButton,children:Object(a.jsx)(N.a,{color:"inherit",onClick:this.handleCreate,children:Object(a.jsx)(V.a,{})})})]})}}]),n}(i.a.Component),le=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props.classes;return Object(a.jsxs)(_.a,{square:!0,className:e.paper,children:[Object(a.jsx)(S.a,{className:e.text,variant:"h5",gutterBottom:!0,children:"Lists"}),Object(a.jsx)(E.a,{className:e.list,children:ie.map(ge)})]})}}]),n}(i.a.Component),ue=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.currentTab,r=e.changeTab;return Object(a.jsx)(O.a,{position:"fixed",color:"primary",className:t.appBar,children:Object(a.jsxs)(w.a,{value:n,onChange:r,variant:"fullWidth","aria-label":"tabs",children:[Object(a.jsx)(T.a,{classes:{root:t.fullHeight},icon:Object(a.jsx)(F.a,{}),value:"notes"}),Object(a.jsx)(T.a,{classes:{root:t.fullHeight},icon:Object(a.jsx)(P.a,{}),value:"lists"})]})})}}]),n}(i.a.Component),he=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.open,n=e.handleChange,r=e.handleNoteTagEdit,i=e.handleTagListChange,o=e.handleClose,c=e.handleSave,s=e.handleArchive,l=e.title,u=e.tags,h=e.description;return Object(a.jsxs)(I.a,{open:t,onClose:o,scroll:"paper","aria-labelledby":"Note Dialog","aria-describedby":"Existing Note",children:[Object(a.jsx)(M.a,{children:Object(a.jsx)(R.a,{margin:"dense",name:"title",label:"Title",type:"text",fullWidth:!0,value:l,onChange:n})}),Object(a.jsxs)(J.a,{dividers:!0,children:[Object(a.jsx)(R.a,{margin:"dense",name:"description",type:"text",multiline:!0,rows:8,value:h,onChange:n,fullWidth:!0}),Object(a.jsx)(be,{handlePickerChange:r,handleListEntryChange:i("tags"),value:u,variant:"standard",inputPlaceholder:"Enter tags..."})]}),Object(a.jsxs)(U.a,{children:[Object(a.jsx)(x.a,{onClick:s,color:"primary",children:"Archive"}),Object(a.jsx)(x.a,{onClick:c,color:"primary",children:"Save"}),Object(a.jsx)(x.a,{onClick:o,color:"primary",children:"Close"})]})]})}}]),n}(i.a.Component),de=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{ref:this.props.InputProps.ref,children:Object(a.jsx)(R.a,Object(j.a)(Object(j.a)({},this.props),{},{fullWidth:!0}))})}}]),n}(i.a.Component),be=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.value,n=e.handlePickerChange,r=e.handleListEntryChange,i=e.inputPlaceholder,o=e.variant;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(m.a,{multiple:!0,options:Q,getOptionLabel:function(e){return e.title},value:t,onChange:n,renderTags:function(){},getOptionSelected:function(e,t){return te(e,t)},renderInput:function(e){return Object(a.jsx)(de,Object(j.a)(Object(j.a)({},e),{},{variant:o,placeholder:i}))}}),Object(a.jsx)(pe,{value:t,onChange:r})]})}}]),n}(i.a.Component),pe=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props.value,t=this.props.onChange(e);return Object(a.jsx)("ul",{children:e.map((function(e,n){return Object(a.jsx)(je,Object(j.a)({editable:!0,tag_index:n,onChange:t},e))}))})}}]),n}(i.a.Component),je=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.editable,n=e.onChange,r=e.tag_index,i=e.canHaveValue,o=e.value,c=e.title,s="";return i&&o&&(s=o[0].toUpperCase()+o.substring(1,c.length)),Object(a.jsxs)(a.Fragment,{children:[!(i||t)&&Object(a.jsx)(S.a,{children:c}),t&&i&&Object(a.jsx)(R.a,{value:o||"",onChange:n,type:"text",name:r+"-"+c+"-value",label:c}),!t&&i&&Object(a.jsxs)(S.a,{children:[c,": ",s]})]})}}]),n}(i.a.Component),fe=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.note_data,n=e.onClick,r=new Date(1e3*Number(t.last_update_time)).toLocaleString();return Object(a.jsxs)(A.a,{divider:!0,button:!0,onClick:n,children:[Object(a.jsx)(B.a,{primary:t.title,secondary:r}),Object(a.jsx)(k.a,{container:!0,direction:"column",justify:"flex-end",alignItems:"flex-end",children:t.tags.map((function(e){return Object(a.jsx)(k.a,{item:!0,children:Object(a.jsx)(je,Object(j.a)({editable:!1},e))})}))})]})}}]),n}(i.a.Component),ge=function(e){return Object(a.jsx)(i.a.Fragment,{children:Object(a.jsx)(A.a,{button:!0,children:Object(a.jsx)(B.a,{primary:e.title,secondary:e.description})})},e.id)},ve=Object(v.a)(oe)(ue),Oe=Object(v.a)(oe)(se),me=Object(v.a)(oe)(le),xe=Object(v.a)(oe)(ce),ye=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ce(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ke=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,167)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),i(e),o(e)}))};c.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(xe,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/notes-web",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/notes-web","/service-worker.js");ye?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ce(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Ce(t,e)}))}}(),ke()}},[[99,1,2]]]);
//# sourceMappingURL=main.b9ba4c96.chunk.js.map