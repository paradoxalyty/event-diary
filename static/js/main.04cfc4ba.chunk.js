(this["webpackJsonpevent-diary"]=this["webpackJsonpevent-diary"]||[]).push([[0],{36:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(12),o=a.n(r),c=a(14),s=a(4),l=a(5),i=a(11),d=a.n(i),m=a(16),u=["\ud83d\ude35\ufe0f","\ud83d\ude43","\ud83d\ude11","\ud83e\udd14","\ud83e\udd24","\ud83d\ude07","\ud83e\udd24","\ud83d\ude30","\ud83d\ude0c","\ud83d\ude06","\ud83d\ude00"],h="NEW_NAME",g="NEW_MOOD",j="NEW_DATE",p="NEW_DESCRIPTION",b="NEW_IMG_DATA",f="VALIDATE_NAME",O="VALIDATE_PHOTO",N="CLEAR_FORM",v="CHANGE_SEARCH_VALUE",x="FETCH_IMAGES_STARTED",A="FETCH_IMAGES_SUCCESS",y="FETCH_IMAGES_FAILURE",w="LOAD_LOCAL_DATA",D="SAVE_LOCAL_DATA",I="DELETE_FROM_LOCAL_NOTES",C="ADD_FILTER_NAME",P="ADD_FILTER_MOOD",E="CLEAR_FILTERS",S="OPEN_MODAL",M="CLOSE_MODAL",V="ADD_MODAL_DATA",F=function(e,t){return function(){var a=Object(m.a)(d.a.mark((function a(n){var r,o;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n({type:x,payload:"start"}),r=L(e,t),a.next=5,T(r);case 5:o=a.sent,n({type:A,payload:o}),a.next=13;break;case 9:a.prev=9,a.t0=a.catch(0),console.warn(a.t0),n((c=a.t0,{type:y,payload:c}));case 13:case"end":return a.stop()}var c}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()},L=function(e,t){return"https://api.pexels.com/v1/search?query=".concat(e,"&orientation=landscape&page=").concat(t,"&per_page=10")},_=function(){var e=Object(m.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{headers:{Authorization:"563492ad6f91700001000001c8655c6860ff444ca8f5073c762aa187"}});case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(m.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(t);case 2:return a=e.sent,e.abrupt("return",k(a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(e){var t=e.photos,a=e.page,n=e.total_results,r=parseInt(n/10),o=a-1,c=a+1;1===a&&(o=r),a===r&&(c=1);var s=!1;return t.length&&(s=!0),{isFetched:s,fetchedImages:t,currentPage:a,prevPage:o,nextPage:c,totalPages:r}},U=function(){return function(){var e=Object(m.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,null!==(a=localStorage.getItem("localNotes"))){e.next=4;break}return e.abrupt("return",void 0);case 4:n=JSON.parse(a),t({type:w,payload:n}),e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),console.warn(e.t0),e.abrupt("return",void 0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},R=(a(36),a(0)),B=function(){return Object(R.jsxs)("header",{className:"header",children:[Object(R.jsxs)(c.b,{className:"logo-link",to:"/",children:[Object(R.jsx)("div",{className:"logo-img-wrapper ",children:Object(R.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAeCAYAAAA2Lt7lAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGWSURBVHgB3VaLUYQwEA1UQAeHHVACJdCBZwWHHdCBdgBWcF4FlIAdgBWgFawbSXRZ8uMz44xvZue48LJvs9ksiYQFAJDgjzQRRdEgjgI6PqO1MMeIVqOlYitkxAbHYBC6F1uAEzvmrFdRtwahfI1vnRYaZc7ep2hXxknWCPQh0bHVlCIESMzIpNbDzQn3FaZ9k6uvpKD0ZZpUkEmV8AdE0zTCEjKVqebHQtX6BvycE4YCrdUisdiPBu0B7RFtUGMpWv39BPMKqnzeWDpK9i5laUv2rOADW8gzHVAt5YUM5bsEAsaTI/bAib8TUOdjDDh8mve0SkBM9SzrXJ7ek4N3UbzSxJMCb+T/yRNtJlZCCgzid+cLcH9ULuTZ1gFokEOMtSud38ikq0kEpg/NmQrAsqPeoeVUQE/mJ7CHeQvvwI7R8lzzCDMwd0eORpkLPZhSDdNKGkekJeFWFl4LvssBLD+RcvMTC4+mr+Ac4zlQTeuTDHWqGEw8Ot4FCRyJ/y2gW8iAuX538G6BvCVgupZ4LwWqmoy8L2oHvSBONVyOAAAAAElFTkSuQmCC",className:"logo",alt:"logo"})}),Object(R.jsx)("h1",{children:"Diary"})]}),Object(R.jsxs)("div",{className:"header-btn-wrapper",children:[Object(R.jsx)(c.b,{to:"/",className:"btn-common-styles notes-btn",children:"Notes"}),Object(R.jsx)(c.b,{className:"btn-common-styles add-note-btn",to:"/new-note",children:"Add Note"})]})]})},Q={addFilterMood:function(e){return{type:P,payload:e}}},H=Object(l.b)((function(e){return{mood:e.filterNotes.filterMood}}),Q)((function(e){var t=e.mood,a=e.addFilterMood;return Object(R.jsxs)("select",{className:"filters-select select-common-styles",name:g,value:t,onChange:function(e){a(e.target.value)},children:[Object(R.jsx)("option",{value:"",children:"\ud83c\udf1a"}),u.map((function(e,t){return Object(R.jsx)("option",{name:g,value:e,className:"mood",children:e},t)}))]})})),W={addFilterName:function(e){return{type:C,payload:e}},clearFilters:function(){return{type:E}}},z=Object(l.b)((function(e){return{filterName:e.filterNotes.filterName}}),W)((function(e){var t=e.addFilterName,a=e.filterName,n=e.clearFilters;return Object(R.jsxs)("div",{className:"filters",children:[Object(R.jsx)("input",{className:"input-common-styles filters-search",name:"searchByName",value:a,placeholder:"Search",onChange:function(e){t(e.target.value)},autoComplete:"off"}),Object(R.jsx)(H,{}),Object(R.jsx)("button",{className:"btn-common-styles clear-filters-btn",onClick:n,children:"Clear Filters"})]})})),q=(a(39),{closeModal:function(){return{type:M}}}),J=Object(l.b)((function(e){return{isOpen:e.modalData.isOpen,modalMood:e.modalData.defaultValue.modalMood,modalName:e.modalData.defaultValue.modalName,modalDate:e.modalData.defaultValue.modalDate,modalImgUrl:e.modalData.defaultValue.modalImgUrl,modalImgAuthor:e.modalData.defaultValue.modalImgAuthor,modalDescription:e.modalData.defaultValue.modalDescription}}),q)((function(e){var t=e.isOpen,a=e.modalMood,n=e.modalName,r=e.modalDate,c=e.modalImgUrl,s=e.modalImgAuthor,l=e.modalDescription,i=e.closeModal;return t?o.a.createPortal(Object(R.jsxs)("div",{className:"modal-wrapper",children:[Object(R.jsx)("div",{onClick:i,className:"modal-backdrop"}),Object(R.jsxs)("div",{className:"modal-box",children:[Object(R.jsx)("button",{onClick:function(){return i()},className:"modal-close"}),Object(R.jsxs)("div",{className:"modal-box-heading",children:[Object(R.jsx)("span",{className:"modal-mood",children:a}),Object(R.jsx)("span",{className:"modal-titel",children:n}),Object(R.jsx)("span",{className:"modal-date",children:r})]}),Object(R.jsxs)("div",{className:"modal-box-main",children:[Object(R.jsx)("div",{className:"modal-img-wrapper",children:Object(R.jsx)("img",{src:c,className:"modal-img",alt:s})}),Object(R.jsx)("p",{className:"modal-description",children:l})]})]})]}),document.getElementById("modal-root")):null})),X={deleteFromLocalNotes:function(e){return{type:I,payload:e}},openModal:function(){return{type:S}},addModalData:function(e){return{type:V,payload:e}}},G=Object(l.b)((function(e){return{localNotes:e.localData.localNotes,filterName:e.filterNotes.filterName,filterMood:e.filterNotes.filterMood}}),X)((function(e){var t=e.localNotes,a=e.filterName,n=e.filterMood,r=e.deleteFromLocalNotes,o=e.openModal,c=e.addModalData,s=t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())})).filter((function(e){return e.mood.includes(n)})),l=function(e){e.stopPropagation();var a=parseInt(e.target.offsetParent.id),n=t.filter((function(e){return e.id!==a}));r(n)},i=[];i=0===a.length&&0===n.length?t:s;var d=function(e){var t=e.currentTarget.childNodes[1].innerText,a=e.currentTarget.lastChild.childNodes[0].innerText,n=e.currentTarget.lastChild.childNodes[1].innerText,r=e.currentTarget.childNodes[0].dataset.srclarge,s=e.currentTarget.childNodes[0].alt,l=e.currentTarget.lastChild.childNodes[2].innerText;c({modalMood:t,modalName:a,modalDate:n,modalImgUrl:r,modalImgAuthor:s,modalDescription:l}),o()};return Object(R.jsxs)(R.Fragment,{children:[!s.length&&t.length?Object(R.jsx)("div",{className:"not-found",children:"Nothing is found."}):Object(R.jsx)(R.Fragment,{}),Object(R.jsxs)("div",{className:"notes",children:[i.map((function(e,t){return Object(R.jsxs)("div",{id:e.id,className:"note",onClick:d,children:[Object(R.jsx)("img",{className:"note-img",width:"100%",height:"100%",alt:e.imgData.imgAuthor,src:e.imgData.imgUrl,"data-srclarge":e.imgData.imgSrcLarge}),e.mood?Object(R.jsx)("span",{className:"note-mood",children:e.mood}):"",Object(R.jsx)("span",{className:"note-delete",onClick:l}),Object(R.jsxs)("div",{className:"info-box",children:[Object(R.jsx)("span",{className:"info-titel",children:e.name}),Object(R.jsx)("span",{className:"info-date",children:e.date}),Object(R.jsx)("p",{className:"info-description",children:e.description})]})]},t)})),Object(R.jsx)(J,{})]})]})})),Y=function(){return Object(R.jsxs)("div",{className:"explanation",children:[Object(R.jsx)("p",{children:"You have not created any notes."}),Object(R.jsxs)("p",{children:["In order to create notes, you have to click on the button ",Object(R.jsx)("q",{children:"Add Note"})," in the upper left corner."]})]})},Z=(a(40),{loadFromLocalStorage:U}),K=Object(l.b)((function(e){return{localNotes:e.localData.localNotes}}),Z)((function(e){var t=e.localNotes,a=e.loadFromLocalStorage;return Object(n.useEffect)((function(){0===t.length&&a()}),[t.length,a]),Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(B,{}),Object(R.jsx)(z,{}),t.length?Object(R.jsx)(G,{}):Object(R.jsx)(Y,{})]})})),$=function(e){var t=e.mood,a=e.handleChange;return Object(R.jsxs)("select",{className:"data-form-select select-common-styles",name:g,value:t,onChange:a,children:[Object(R.jsx)("option",{value:"",children:"\ud83c\udf1a"}),u.map((function(e,t){return Object(R.jsx)("option",{name:g,value:e,className:"mood",children:e},t)}))]})},ee=function(e){var t=e.name,a=e.mood,n=e.date,r=e.description,o=e.imgUrl,c=e.imgAuthor,s=e.isPhotoAdded,l=e.isNameValid,i=e.isPhotoValid,d=e.handleChange,m=e.handleFormSubmit;return Object(R.jsxs)("form",{className:"new-note-form",onSubmit:m,children:[Object(R.jsx)("input",{className:l?"new-note-name input-common-styles":"new-note-name input-common-styles required",type:"text",name:h,value:t,placeholder:"Name is required",onChange:d,autoComplete:"off"}),Object(R.jsx)($,{mood:a,handleChange:d}),Object(R.jsx)("input",{className:"new-note-date input-common-styles",type:"date",name:j,value:n,onChange:d}),Object(R.jsx)("textarea",{className:"new-note-description input-common-styles",type:"text",name:p,value:r,placeholder:"Description",onChange:d}),Object(R.jsxs)("div",{className:"form-btn-wrapper",children:[Object(R.jsx)("button",{className:"btn-common-styles clear-form-btn",type:"button",name:N,onClick:d,children:"clear form"}),Object(R.jsx)("button",{className:"btn-common-styles save-note-btn",type:"submit",children:"save"})]}),Object(R.jsx)("div",{className:"selected-photo-wrapper",children:s?Object(R.jsx)("div",{className:"selected-photo",children:Object(R.jsx)("img",{className:"new-note-photo",src:o,alt:c})}):Object(R.jsx)("p",{className:i?"warn-text":"warn-text required",children:"Photo\xa0is\xa0required"})})]})},te=(a(41),function(){return Object(R.jsx)("div",{className:"loader",children:Object(R.jsx)("div",{className:"lds-dual-ring"})})}),ae={fetchImages:F},ne=Object(l.b)((function(e){return{searchQuery:e.fetchImages.searchQuery,searchValue:e.fetchImages.searchValue,currentPage:e.fetchImages.currentPage,prevPage:e.fetchImages.prevPage,nextPage:e.fetchImages.nextPage,totalPages:e.fetchImages.totalPages}}),ae)((function(e){var t=e.fetchImages,a=e.searchValue,n=e.searchQuery,r=e.currentPage,o=e.prevPage,c=e.nextPage,s=e.totalPages,l=function(e){var c=parseInt(e.target.dataset.num),l=r+c;1===r&&-1===c&&(l=o),r===s&&1===c&&(l=1),t(a||n,l)};return Object(R.jsxs)("nav",{className:"pagination",children:[Object(R.jsxs)("button",{className:"btn-common-styles pagination-btn prev-page-btn",type:"button",onClick:l,"data-num":"-1",children:["Prev Page (",o,")"]}),Object(R.jsxs)("button",{className:"btn-common-styles pagination-btn next-page-btn",type:"button",onClick:l,"data-num":"+1",children:["Next Page (",c,")"]})]})})),re=function(e){var t=e.fetchedImages,a=e.handleImgClick;return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(ne,{}),t.map((function(e){return Object(R.jsx)("div",{className:"new-note-photo-wrapper",children:Object(R.jsx)("img",{"data-id":e.id,src:e.src.medium,"data-srclarge":e.src.large,className:"new-note-photo",width:"100%",height:"100%",alt:"Provided by Pexels, photographer - ".concat(e.photographer),onClick:a})},e.id)})),Object(R.jsx)(ne,{})]})},oe={fetchImages:F,loadFromLocalStorage:U},ce=Object(l.b)((function(e){return{imgUrl:e.newNote.imgUrl,imgAuthor:e.newNote.imgAuthor,imgId:e.newNote.imgId,isFetched:e.fetchImages.isFetched,fetchedImages:e.fetchImages.fetchedImages,loading:e.fetchImages.loading,error:e.fetchImages.error,errorMessage:e.fetchImages.errorMessage,searchQuery:e.fetchImages.searchQuery,searchValue:e.fetchImages.searchValue,currentPage:e.fetchImages.currentPage,localNotes:e.localData.localNotes}}),oe)((function(e){var t=e.isFetched,a=e.fetchedImages,r=e.loading,o=e.error,c=e.errorMessage,s=e.searchQuery,l=e.searchValue,i=e.currentPage,d=e.fetchImages,m=e.loadFromLocalStorage,u=e.handleChange,h=e.handleImgClick,g=e.localNotes;Object(n.useEffect)((function(){0===g.length&&m(),0===l.length&&0===a.length&&d(s,i)}),[g.length,l.length,m,d,a.length,s,i]);return Object(R.jsxs)("form",{className:"search-form",children:[Object(R.jsx)("input",{className:"new-note-search input-common-styles",type:"text",name:v,value:l,placeholder:"Search",onChange:u,autoComplete:"off"}),Object(R.jsx)("button",{className:"search-btn",onClick:function(e){e.preventDefault(),l.length&&d(l,1)}}),Object(R.jsxs)("div",{className:"new-note-photos",children:[r?Object(R.jsx)(te,{}):Object(R.jsx)("div",{className:"loader"}),l.length&&!a.length?Object(R.jsx)("div",{className:"not-found",children:"Nothing is found."}):Object(R.jsx)(R.Fragment,{}),o&&Object(R.jsx)("div",{className:"error-message",children:c}),t&&Object(R.jsx)(re,{fetchedImages:a,handleImgClick:h})]})]})})),se=(a(42),{addNewName:function(e){return{type:h,payload:e}},addNewMood:function(e){return{type:g,payload:e}},addNewDate:function(e){return{type:j,payload:e}},addNewDescription:function(e){return{type:p,payload:e}},addNewImgData:function(e){return{type:b,payload:e}},validateName:function(){return{type:f}},validatePhoto:function(){return{type:O}},clearFormData:function(){return{type:N}},changeSearchValue:function(e){return{type:v,payload:e}},saveToLocalStorage:function(e){return{type:D,payload:e}}}),le=Object(l.b)((function(e){return{name:e.newNote.name,mood:e.newNote.mood,defaultMood:e.newNote.defaultMood,date:e.newNote.date,description:e.newNote.description,imgUrl:e.newNote.imgData.imgUrl,imgAuthor:e.newNote.imgData.imgAuthor,imgSrcLarge:e.newNote.imgData.imgSrcLarge,isPhotoAdded:e.newNote.imgData.isPhotoAdded,isNameValid:e.newNote.isNameValid,isPhotoValid:e.newNote.isPhotoValid}}),se)((function(e){var t=e.name,a=e.mood,n=e.defaultMood,r=e.date,o=e.description,c=e.imgUrl,s=e.imgAuthor,l=e.imgSrcLarge,i=e.isPhotoAdded,d=e.isNameValid,m=e.isPhotoValid,u=e.addNewName,b=e.addNewMood,f=e.addNewDate,O=e.addNewDescription,x=e.addNewImgData,A=e.validateName,y=e.validatePhoto,w=e.clearFormData,D=e.changeSearchValue,I=e.saveToLocalStorage,C=function(e){e.preventDefault();var t=e.target.name,a=e.target.value;switch(t){case h:u(a),A();break;case g:return b(a);case j:return f(a);case p:return O(a);case N:return w();case v:return D(a.trimStart())}},P=function(){var e=Math.random().toString().split(".");return parseInt(e[1])};return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(B,{}),Object(R.jsxs)("div",{className:"forms-wrapper",children:[Object(R.jsx)(ee,{handleFormSubmit:function(e){if(e.preventDefault(),A(),y(),t.length&&i){var n={id:P(),name:t,mood:a,date:r,description:o,imgData:{imgUrl:c,imgAuthor:s,imgSrcLarge:l,isPhotoAdded:!1}};I(n),w()}},handleChange:C,name:t,mood:a,defaultMood:n,date:r,description:o,imgUrl:c,imgAuthor:s,isPhotoAdded:i,isNameValid:d,isPhotoValid:m}),Object(R.jsx)(ce,{handleChange:C,handleImgClick:function(e){e.preventDefault(),x({imgUrl:e.target.src,imgAuthor:e.target.alt,imgSrcLarge:e.target.dataset.srclarge,isPhotoAdded:!0}),y()}})]})]})})),ie=(a(43),function(){return Object(R.jsxs)(c.a,{children:[Object(R.jsx)(s.a,{path:"/",exact:!0,component:K}),Object(R.jsx)(s.a,{path:"/new-note",component:le})]})}),de=a(10),me=a(2),ue=(new Date).toISOString().substr(0,10).toString(),he={id:"",name:"",mood:"",date:ue,description:"",imgData:{imgUrl:"",imgAuthor:"",imgSrcLarge:"",isPhotoAdded:!1},isNameValid:!0,isPhotoValid:!0},ge={isFetched:!1,fetchedImages:[],loading:!1,error:!1,errorMessage:"Something went wrong",searchQuery:"landscape",searchValue:"",currentPage:1,prevPage:null,nextPage:null,totalPages:null},je=a(23),pe={localNotes:[]},be={filterName:"",filterMood:""},fe={isOpen:!1,defaultValue:{modalMood:"",modalName:"",modalDate:"",modalImgUrl:"",modalImgAuthor:"",modalDescription:""}},Oe=Object(de.c)({newNote:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(me.a)(Object(me.a)({},e),{},{name:t.payload});case g:return Object(me.a)(Object(me.a)({},e),{},{mood:t.payload});case j:return Object(me.a)(Object(me.a)({},e),{},{date:t.payload});case p:return Object(me.a)(Object(me.a)({},e),{},{description:t.payload});case b:return Object(me.a)(Object(me.a)({},e),{},{imgData:t.payload});case N:return Object(me.a)(Object(me.a)({},e),{},{id:"",name:"",mood:"",date:ue,description:"",imgData:{imgUrl:"",imgAuthor:"",imgSrcLarge:"",isPhotoAdded:!1},isNameValid:!0,isPhotoValid:!0});case f:return e.name.length?Object(me.a)(Object(me.a)({},e),{},{isNameValid:!0}):Object(me.a)(Object(me.a)({},e),{},{isNameValid:!1});case O:return e.imgData.isPhotoAdded?Object(me.a)(Object(me.a)({},e),{},{isPhotoValid:!0}):Object(me.a)(Object(me.a)({},e),{},{isPhotoValid:!1});default:return e}},fetchImages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(me.a)(Object(me.a)({},e),{},{searchValue:t.payload});case x:return Object(me.a)(Object(me.a)({},e),{},{loading:!0,error:!1});case A:return Object(me.a)(Object(me.a)({},e),{},{isFetched:t.payload.isFetched,fetchedImages:t.payload.fetchedImages,loading:!1,error:!1,currentPage:t.payload.currentPage,prevPage:t.payload.prevPage,nextPage:t.payload.nextPage,totalPages:t.payload.totalPages});case y:return Object(me.a)(Object(me.a)({},e),{},{loading:!1,error:!0});default:return e}},localData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(me.a)(Object(me.a)({},e),{},{localNotes:t.payload.localNotes});case D:var a=JSON.stringify({localNotes:[].concat(Object(je.a)(e.localNotes),[t.payload])});return localStorage.setItem("localNotes",a),Object(me.a)(Object(me.a)({},e),{},{localNotes:[].concat(Object(je.a)(e.localNotes),[t.payload])});case I:var n=JSON.stringify({localNotes:t.payload});return t.payload.length?localStorage.setItem("localNotes",n):localStorage.clear(),Object(me.a)(Object(me.a)({},e),{},{localNotes:t.payload});default:return e}},filterNotes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(me.a)(Object(me.a)({},e),{},{filterName:t.payload});case P:return Object(me.a)(Object(me.a)({},e),{},{filterMood:t.payload});case E:return Object(me.a)(Object(me.a)({},e),{},{filterName:"",filterMood:""});default:return e}},modalData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(me.a)(Object(me.a)({},e),{},{isOpen:!0});case M:return Object(me.a)(Object(me.a)({},e),{},{isOpen:!1});case V:return Object(me.a)(Object(me.a)({},e),{},{defaultValue:t.payload});default:return e}}}),Ne=a(26),ve=Object(de.e)(Oe,Object(de.d)(Object(de.a)(Ne.a),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__():de.d));o.a.render(Object(R.jsx)(n.StrictMode,{children:Object(R.jsx)(l.a,{store:ve,children:Object(R.jsx)(ie,{})})}),document.getElementById("app-root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.04cfc4ba.chunk.js.map