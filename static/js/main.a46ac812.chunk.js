(this["webpackJsonpnotes-web"]=this["webpackJsonpnotes-web"]||[]).push([[0],{91:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n(0),i=n.n(r),o=n(12),c=n.n(o),s=(n(91),n(63)),l=n(32),u=n(15),h=n(16),d=n(25),p=n(21),b=n(20),j=n(37),f=n(75),v=n(145),g=n(4),O=n(149),m=n(160),x=n(155),y=n(142),C=n(147),k=n(159),w=n(150),T=n(45),S=n(148),N=n(99),_=n(146),E=n(73),L=n.n(E),P=n(156),A=n(157),B=n(72),W=n.n(B),H=n(71),V=n.n(H),F=n(162),I=n(154),U=n(153),J=n(152),M=n(158),R=n(26),D=n.n(R),G=n(44),q="https://typed-thoughts.herokuapp.com/",z=function(){function e(t,n){Object(u.a)(this,e),this.title=t,this.canHaveValue=n,this.value=null}return Object(h.a)(e,[{key:"setValue",value:function(e){this.canHaveValue?this.value=e:console.error("Attempting to set value for tag that can't have value")}}]),e}(),$=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return new z(e,t)},K=[$("Article"),$("Book"),$("Movie"),$("Music"),$("Series"),$("Podcast"),$("Recipe"),$("Restaurant"),$("Adventure"),$("VideoGame"),$("BoardGame"),$("Career"),$("Entertainment"),$("Productivity"),$("ArtificialIntelligence"),$("EffectiveAltruism"),$("SocialJustice"),$("Environmental"),$("RecommendedBy",!0),$("RemindsMeOf",!0),$("Origin",!0)],Q=function(){var e=Object(G.a)(D.a.mark((function e(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",K);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Object(G.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(q+"notes/archive/"+String(t),{method:"PUT"}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(G.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.tags=t.tags.map(te),e.abrupt("return",fetch(q+"notes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(G.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.tags=t.tags.map(te),e.abrupt("return",fetch(q+"note/"+t.note_id,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ee=function(e,t){return e.canHaveValue&&t.canHaveValue&&e.value&&t.value?e.value.toLowerCase()===t.value.toLowerCase()&&e.title===t.title:e.title===t.title},te=function(e){return e.canHaveValue?Object(l.a)({},e.title,e.value.toLowerCase()):e.title},ne=function(e){if("string"===typeof e)return $(e);if("object"===typeof e){var t=Object.keys(e)[0],n=e[t],a=$(t,!0);return a.setValue(n),a}return console.error("Unknown tag variant:",e),e},ae={get_tags:Q,create_note:Y,update_note:Z,get_notes:function(e){return fetch(q+"notes/brendon").then((function(e){return e.json().then((function(e){for(var t=[],n=0,a=Object.values(e.notes);n<a.length;n++){var r=a[n];r.tags=r.tags.map(ne),t.push(r)}return t.sort((function(e,t){return e.last_update_time<t.last_update_time?1:-1})),t}))}))},archive_note:X},re=[],ie=function(e){return{fullHeight:Object(j.a)({},e.mixins.toolbar),text:{padding:e.spacing(2,2,0)},addButton:{position:"absolute",zIndex:1,bottom:"10%",right:"5%",margin:"0 auto"},paper:{paddingBottom:50},list:{marginBottom:e.spacing(2)},subheader:{backgroundColor:e.palette.background.paper},appBar:{top:"auto",bottom:0},grow:{flexGrow:1}}},oe=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).changeTab=function(e,t){a.setState({currentTab:t})},a.state={currentTab:"notes"},a.changeTab=a.changeTab.bind(Object(d.a)(a)),a}return Object(h.a)(n,[{key:"render",value:function(){var e=Object(f.a)({palette:{primary:{light:"#757ce8",main:"#000000",dark:"#002884",contrastText:"#fff"},secondary:{light:"#ff7961",main:"#f44336",dark:"#ba000d",contrastText:"#000"},background:{paper:"#efefef",default:"#fff"}}});return Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)(y.a,{}),Object(a.jsxs)(v.a,{theme:e,children:["notes"===this.state.currentTab&&Object(a.jsx)(ge,{}),"lists"===this.state.currentTab&&Object(a.jsx)(Oe,{}),Object(a.jsx)(ve,{changeTab:this.changeTab,currentTab:this.state.currentTab})]})]})}}]),n}(i.a.Component),ce=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleOpen=function(e){a.setState({open:!0,active_uuid:e.uuid,title:e.title,description:e.description,tags:e.tags})},a.handleCreate=function(){a.setState({open:!0,active_uuid:null,title:"",description:"",origin:"",tags:[]})},a.handleClose=function(){a.setState({open:!1,active_note:null})},a.handleTagListChange=function(e){return function(t){return function(n,r){console.log("tl"),console.log(n,r);var i=n.target.name.split("-")[0];t[i].value=n.target.value,a.setState(Object(l.a)({},e,t))}}},a.handleTagPickerChange=function(e){return function(t,n){a.setState(Object(l.a)({},e,n))}},a.state={open:!1,search:[],active_uuid:"",title:"",description:"",owner:"brendon",origin:"",tags:[],notes:[]},a.handleNoteTagEdit=a.handleNoteTagEdit.bind(Object(d.a)(a)),a.handleNoteEdit=a.handleNoteEdit.bind(Object(d.a)(a)),a.handleOpen=a.handleOpen.bind(Object(d.a)(a)),a.handleSave=a.handleSave.bind(Object(d.a)(a)),a.handleArchive=a.handleArchive.bind(Object(d.a)(a)),a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.loadNotes()}},{key:"loadNotes",value:function(){var e=this;ae.get_notes(this.state.owner).then((function(t){e.setState({notes:t})})).catch(console.log)}},{key:"handleArchive",value:function(){var e=this,t=this.state.active_uuid;ae.archive_note(t).then((function(t){e.loadNotes()})).catch(console.error)}},{key:"handleNoteEdit",value:function(e){this.setState(Object(l.a)({},e.target.name,e.target.value))}},{key:"handleNoteTagEdit",value:function(e,t){this.setState({tags:t})}},{key:"handleSave",value:function(){var e=this;if(this.state.active_uuid){var t={note_id:this.state.active_uuid,title:this.state.title,description:this.state.description,origin:this.state.origin,tags:this.state.tags};ae.update_note(t).then((function(t){e.loadNotes()})).catch(console.error)}else{var n={title:this.state.title,description:this.state.description,owner:this.state.owner,origin:this.state.origin,tags:this.state.tags};ae.create_note(n).then((function(t){e.loadNotes(),e.handleClose()})).catch(console.error)}}},{key:"render",value:function(){var e=this,t=this.props.classes;return Object(a.jsxs)(N.a,{square:!0,className:t.paper,children:[this.state.open&&Object(a.jsx)(ue,{handleClose:this.handleClose,handleChange:this.handleNoteEdit,handleNoteTagEdit:this.handleNoteTagEdit,handleTagListChange:this.handleTagListChange,handleSave:this.handleSave,handleArchive:this.handleArchive,open:this.state.open,title:this.state.title,description:this.state.description,origin:this.state.origin,tags:this.state.tags}),Object(a.jsx)(de,{handlePickerChange:this.handleTagPickerChange("search"),handleListEntryChange:this.handleTagListChange("search"),value:this.state.search,inputPlaceholder:"Search for tags...",variant:"filled"}),Object(a.jsx)(_.a,{className:t.list,children:this.state.notes.filter((function(t){if(null!=t.delete_time)return!1;if(e.state.search.length>0){var n,a=Object(s.a)(e.state.search);try{for(a.s();!(n=a.n()).done;){var r,i=n.value,o=!1,c=Object(s.a)(t.tags);try{for(c.s();!(r=c.n()).done;){var l=r.value;ee(i,l)&&(o=!0)}}catch(u){c.e(u)}finally{c.f()}if(!o)return!1}}catch(u){a.e(u)}finally{a.f()}}return!0})).map((function(t,n){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(je,{note_data:t,onClick:function(){e.handleOpen(t)}},"note-entry-".concat(n))})}))}),Object(a.jsx)(C.a,{color:"secondary","aria-label":"add",className:t.addButton,children:Object(a.jsx)(S.a,{color:"inherit",onClick:this.handleCreate,children:Object(a.jsx)(V.a,{})})})]})}}]),n}(i.a.Component),se=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props.classes;return Object(a.jsxs)(N.a,{square:!0,className:e.paper,children:[Object(a.jsx)(T.a,{className:e.text,variant:"h5",gutterBottom:!0,children:"Lists"}),Object(a.jsx)(_.a,{className:e.list,children:re.map(fe)})]})}}]),n}(i.a.Component),le=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.currentTab,r=e.changeTab;return Object(a.jsx)(O.a,{position:"fixed",color:"primary",className:t.appBar,children:Object(a.jsxs)(k.a,{value:n,onChange:r,variant:"fullWidth","aria-label":"tabs",children:[Object(a.jsx)(w.a,{classes:{root:t.fullHeight},icon:Object(a.jsx)(W.a,{}),value:"notes"}),Object(a.jsx)(w.a,{classes:{root:t.fullHeight},icon:Object(a.jsx)(L.a,{}),value:"lists"})]})})}}]),n}(i.a.Component),ue=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.open,n=e.handleChange,r=e.handleNoteTagEdit,i=e.handleTagListChange,o=e.handleClose,c=e.handleSave,s=e.handleArchive,l=e.title,u=e.tags,h=e.description;return Object(a.jsxs)(F.a,{open:t,onClose:o,scroll:"paper","aria-labelledby":"Note Dialog","aria-describedby":"Existing Note",children:[Object(a.jsx)(J.a,{children:Object(a.jsx)(M.a,{margin:"dense",name:"title",label:"Title",type:"text",fullWidth:!0,value:l,onChange:n})}),Object(a.jsxs)(U.a,{dividers:!0,children:[Object(a.jsx)(M.a,{margin:"dense",name:"description",type:"text",multiline:!0,rows:8,value:h,onChange:n,fullWidth:!0}),Object(a.jsx)(de,{handlePickerChange:r,handleListEntryChange:i("tags"),value:u,variant:"standard",inputPlaceholder:"Enter tags..."})]}),Object(a.jsxs)(I.a,{children:[Object(a.jsx)(x.a,{onClick:s,color:"primary",children:"Archive"}),Object(a.jsx)(x.a,{onClick:c,color:"primary",children:"Save"}),Object(a.jsx)(x.a,{onClick:o,color:"primary",children:"Close"})]})]})}}]),n}(i.a.Component),he=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{ref:this.props.InputProps.ref,children:Object(a.jsx)(M.a,Object(j.a)(Object(j.a)({},this.props),{},{fullWidth:!0}))})}}]),n}(i.a.Component),de=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.value,n=e.handlePickerChange,r=e.handleListEntryChange,i=e.inputPlaceholder,o=e.variant;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(m.a,{multiple:!0,options:K,getOptionLabel:function(e){return e.title},value:t,onChange:n,renderTags:function(){},getOptionSelected:function(e,t){return ee(e,t)},renderInput:function(e){return Object(a.jsx)(he,Object(j.a)(Object(j.a)({},e),{},{variant:o,placeholder:i}))}}),Object(a.jsx)(pe,{value:t,onChange:r})]})}}]),n}(i.a.Component),pe=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props.value,t=this.props.onChange(e);return Object(a.jsx)("ul",{children:e.map((function(e,n){return Object(a.jsx)(be,Object(j.a)({tag_index:n,onChange:t},e))}))})}}]),n}(i.a.Component),be=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[!this.props.canHaveValue&&Object(a.jsx)(T.a,{children:this.props.title}),this.props.canHaveValue&&Object(a.jsx)(M.a,{value:this.props.value||"",onChange:this.props.onChange,type:"text",name:this.props.tag_index+"-"+this.props.title+"-value",label:this.props.title})]})}}]),n}(i.a.Component),je=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.note_data,n=e.onClick,r=new Date(1e3*Number(t.last_update_time)).toLocaleString();return Object(a.jsx)(P.a,{divider:!0,button:!0,onClick:n,children:Object(a.jsx)(A.a,{primary:t.title,secondary:r})})}}]),n}(i.a.Component),fe=function(e){return Object(a.jsx)(i.a.Fragment,{children:Object(a.jsx)(P.a,{button:!0,children:Object(a.jsx)(A.a,{primary:e.title,secondary:e.description})})},e.id)},ve=Object(g.a)(ie)(le),ge=Object(g.a)(ie)(ce),Oe=Object(g.a)(ie)(se),me=Object(g.a)(ie)(oe),xe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ye(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,164)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),i(e),o(e)}))};c.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(me,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/notes-web",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/notes-web","/service-worker.js");xe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ye(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):ye(t,e)}))}}(),Ce()}},[[98,1,2]]]);
//# sourceMappingURL=main.a46ac812.chunk.js.map