(this["webpackJsonpevent-diary"]=this["webpackJsonpevent-diary"]||[]).push([[0],{39:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){"use strict";t.r(a);var n=t(1),o=t.n(n),r=t(11),c=t.n(r),l=t(25),s=t(26),i=t(30),d=t(29),m=t(13),u=t(4),j=t(5),h=(t(39),t(0)),g=function(){return Object(h.jsxs)("header",{className:"header",children:[Object(h.jsxs)(m.b,{className:"logo-link",to:"/event-diary",children:[Object(h.jsx)("div",{className:"logo-img-wrapper ",children:Object(h.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAeCAYAAAA2Lt7lAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGWSURBVHgB3VaLUYQwEA1UQAeHHVACJdCBZwWHHdCBdgBWcF4FlIAdgBWgFawbSXRZ8uMz44xvZue48LJvs9ksiYQFAJDgjzQRRdEgjgI6PqO1MMeIVqOlYitkxAbHYBC6F1uAEzvmrFdRtwahfI1vnRYaZc7ep2hXxknWCPQh0bHVlCIESMzIpNbDzQn3FaZ9k6uvpKD0ZZpUkEmV8AdE0zTCEjKVqebHQtX6BvycE4YCrdUisdiPBu0B7RFtUGMpWv39BPMKqnzeWDpK9i5laUv2rOADW8gzHVAt5YUM5bsEAsaTI/bAib8TUOdjDDh8mve0SkBM9SzrXJ7ek4N3UbzSxJMCb+T/yRNtJlZCCgzid+cLcH9ULuTZ1gFokEOMtSud38ikq0kEpg/NmQrAsqPeoeVUQE/mJ7CHeQvvwI7R8lzzCDMwd0eORpkLPZhSDdNKGkekJeFWFl4LvssBLD+RcvMTC4+mr+Ac4zlQTeuTDHWqGEw8Ot4FCRyJ/y2gW8iAuX538G6BvCVgupZ4LwWqmoy8L2oHvSBONVyOAAAAAElFTkSuQmCC",className:"logo",alt:"logo"})}),Object(h.jsx)("h1",{children:"Diary"})]}),Object(h.jsxs)("div",{className:"header-btn-wrapper",children:[Object(h.jsx)(m.b,{to:"/event-diary",className:"btn-common-styles change-display-btn",children:"Main"}),Object(h.jsx)(m.b,{className:"btn-common-styles add-note-btn",to:"/new-note",children:"Add Note"})]})]})},p=["\ud83d\ude35\ufe0f","\ud83d\ude43","\ud83d\ude11","\ud83e\udd14","\ud83e\udd24","\ud83d\ude07","\ud83e\udd24","\ud83d\ude30","\ud83d\ude0c","\ud83d\ude06","\ud83d\ude00"],b="NEW_NAME",O="NEW_MOOD",f="NEW_DATE",N="NEW_DESCRIPTION",v="NEW_IMG_DATA",A="CLEAR_FORM",x="NEW_SEARCH_VALUE",D="FETCH_IMAGES_STARTED",y="FETCH_IMAGES_SUCCESS",w="FETCH_IMAGES_FAILURE",C="LOAD_LOCAL_DATA",S="SAVE_LOCAL_DATA",E="DELETE_FROM_LOCAL_NOTES",I="ADD_FILTER_NAME",M="ADD_FILTER_MOOD",L="OPEN_MODAL",_="CLOSE_MODAL",T="ADD_MODAL_DATA",F=t(15),U=t.n(F),V=t(22),k=function(e){return{type:y,payload:e}},R=function(){return function(){var e=Object(V.a)(U.a.mark((function e(a){var t,n;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,null!==(t=localStorage.getItem("localNotes"))){e.next=4;break}return e.abrupt("return",void 0);case 4:n=JSON.parse(t),a({type:C,payload:n}),e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),console.warn(e.t0),e.abrupt("return",void 0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(a){return e.apply(this,arguments)}}()},B=Object(j.b)(null,(function(e){return{addFilterMood:function(a){e({type:M,payload:a})}}}))((function(e){var a=e.addFilterMood;return Object(h.jsxs)("select",{className:"select",name:O,onChange:function(e){a(e.target.value)},children:[Object(h.jsx)("option",{value:"",children:"\ud83c\udf1a"}),p.map((function(e,a){return Object(h.jsx)("option",{name:O,value:e,className:"mood",children:e},a)}))]})})),Q=Object(j.b)((function(e){return{filterName:e.filterNotes.filterName}}),(function(e){return{addFilterName:function(a){e({type:I,payload:a})}}}))((function(e){var a=e.addFilterName,t=e.filterName;return Object(h.jsxs)("div",{className:"nav",children:[Object(h.jsx)("input",{className:"search input-common-styles",name:"searchByName",value:t,placeholder:"Search",onChange:function(e){a(e.target.value)},autoComplete:"off"}),Object(h.jsx)(B,{})]})})),W=(t(43),Object(j.b)((function(e){return{isOpen:e.modalData.isOpen,modalMood:e.modalData.defaultValue.modalMood,modalName:e.modalData.defaultValue.modalName,modalDate:e.modalData.defaultValue.modalDate,modalImgUrl:e.modalData.defaultValue.modalImgUrl,modalImgAuthor:e.modalData.defaultValue.modalImgAuthor,modalDescription:e.modalData.defaultValue.modalDescription}}),(function(e){return{closeModal:function(){e({type:_})}}}))((function(e){var a=e.isOpen,t=e.modalMood,n=e.modalName,o=e.modalDate,r=e.modalImgUrl,l=e.modalImgAuthor,s=e.modalDescription,i=e.closeModal;return a?c.a.createPortal(Object(h.jsxs)("div",{className:"modal-wrapper",children:[Object(h.jsx)("div",{onClick:i,className:"modal-backdrop"}),Object(h.jsxs)("div",{className:"modal-box",children:[Object(h.jsx)("button",{onClick:function(){return i()},className:"modal-close"}),Object(h.jsxs)("div",{className:"modal-box-heading",children:[Object(h.jsx)("span",{className:"modal-mood",children:t}),Object(h.jsx)("span",{className:"modal-titel",children:n}),Object(h.jsx)("span",{className:"modal-date",children:o})]}),Object(h.jsxs)("div",{className:"modal-box-main",children:[Object(h.jsx)("div",{className:"modal-img-wrapper",children:Object(h.jsx)("img",{src:r,className:"modal-img",alt:l})}),Object(h.jsx)("p",{className:"modal-description",children:s})]})]})]}),document.getElementById("modal-root")):null}))),H=Object(j.b)((function(e){return{localNotes:e.localData.localNotes,filterName:e.filterNotes.filterName,filterMood:e.filterNotes.filterMood}}),(function(e){return{loadFromLocalStorage:function(){e(R())},deleteFromLocalNotes:function(a){e(function(e){return{type:E,payload:e}}(a))},openModal:function(){e({type:L})},addModalData:function(a){e(function(e){return{type:T,payload:e}}(a))}}}))((function(e){var a=e.localNotes,t=e.filterName,o=e.filterMood,r=e.loadFromLocalStorage,c=e.deleteFromLocalNotes,l=e.openModal,s=e.addModalData;Object(n.useEffect)((function(){0===a.length&&r()}),[a.length,r]);var i=a.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).filter((function(e){return e.mood.includes(o)})),d=function(e){e.stopPropagation();var t=parseInt(e.target.offsetParent.id),n=a.filter((function(e){return e.id!==t}));c(n)},m=[];m=0===t.length&&0===o.length?a:i;var u=function(e){var a=e.currentTarget.childNodes[1].innerText,t=e.currentTarget.lastChild.childNodes[0].innerText,n=e.currentTarget.lastChild.childNodes[1].innerText,o=e.currentTarget.childNodes[0].dataset.srclarge,r=e.currentTarget.childNodes[0].alt,c=e.currentTarget.lastChild.childNodes[2].innerText;s({modalMood:a,modalName:t,modalDate:n,modalImgUrl:o,modalImgAuthor:r,modalDescription:c}),l()};return Object(h.jsxs)("div",{className:"notes",children:[m.length?m.map((function(e,a){return Object(h.jsxs)("div",{id:e.id,className:"note",onClick:u,children:[Object(h.jsx)("img",{className:"note-img",width:"100%",height:"100%",alt:e.imgData.imgAuthor,src:e.imgData.imgUrl,"data-srclarge":e.imgData.imgSrcLarge}),e.mood?Object(h.jsx)("span",{className:"note-mood",children:e.mood}):"",Object(h.jsx)("span",{className:"note-delete",onClick:d}),Object(h.jsxs)("div",{className:"info-box",children:[Object(h.jsx)("span",{className:"info-titel",children:e.name}),Object(h.jsx)("span",{className:"info-date",children:e.date}),Object(h.jsx)("p",{className:"info-description",children:e.description})]})]},a)})):Object(h.jsx)("div",{className:"empty",children:"Nothing is found."}),Object(h.jsx)(W,{})]})})),z=(t(44),function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(g,{}),Object(h.jsx)(Q,{}),Object(h.jsx)(H,{})]})}),P=function(e){var a=e.handleChange;return Object(h.jsxs)("select",{className:"select data-form-select",name:O,onChange:a,children:[Object(h.jsx)("option",{value:"",children:"\ud83c\udf1a"}),p.map((function(e,a){return Object(h.jsx)("option",{name:O,value:e,className:"mood",children:e},a)}))]})},J=function(e){var a=e.name,t=e.date,n=e.description,o=e.imgUrl,r=e.imgAuthor,c=e.handleChange,l=e.handleFormSubmit;return Object(h.jsxs)("form",{className:"new-note-form",onSubmit:l,children:[Object(h.jsx)("input",{className:"new-note-name input-common-styles",type:"text",name:b,value:a,placeholder:"Name",onChange:c,autoComplete:"off"}),Object(h.jsx)(P,{handleChange:c}),Object(h.jsx)("input",{className:"new-note-date input-common-styles",type:"date",name:f,value:t,onChange:c}),Object(h.jsx)("textarea",{className:"new-note-description input-common-styles",type:"text",name:N,value:n,placeholder:"Description",onChange:c}),Object(h.jsxs)("div",{className:"form-btn-wrapper",children:[Object(h.jsx)("button",{className:"btn-common-styles clear-form-btn",type:"button",name:A,onClick:c,children:"clear form"}),Object(h.jsx)("button",{className:"btn-common-styles save-note-btn",onClick:l,children:"save"})]}),o&&Object(h.jsx)("div",{className:"selected-photo-wrapper",children:Object(h.jsx)("div",{className:"selected-photo",children:Object(h.jsx)("img",{className:"new-note-photo",src:o,alt:r})})})]})},X=(t(45),function(){return Object(h.jsx)("div",{className:"loader",children:Object(h.jsx)("div",{className:"lds-dual-ring"})})}),Z=function(e){var a=e.images,t=e.handleOnImgClick;return Object(h.jsx)(h.Fragment,{children:a&&a.map((function(e){return Object(h.jsx)("div",{className:"new-note-photo-wrapper",children:Object(h.jsx)("img",{"data-id":e.id,src:e.src.medium,"data-srclarge":e.src.large,className:"new-note-photo",width:"100%",height:"100%",alt:"Provided by Pexels, photographer - ".concat(e.photographer),onClick:t})},e.id)}))})},q=Object(j.b)((function(e){return{imgUrl:e.newData.imgUrl,imgAuthor:e.newData.imgAuthor,imgId:e.newData.imgId,loading:e.fetchImages.loading,images:e.fetchImages.fetchedImages,searchQuery:e.fetchImages.searchQuery,searchValue:e.fetchImages.searchValue,localNotes:e.localData.localNotes}}),(function(e){return{fetchImages:function(a){e(function(e){var a="https://api.pexels.com/v1/search?query=".concat(e,"&orientation=landscape&page_1&per_page=20");return function(){var e=Object(V.a)(U.a.mark((function e(t){var n,o;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:D,payload:"start"}),e.next=4,fetch(a,{headers:{Authorization:"563492ad6f91700001000001c8655c6860ff444ca8f5073c762aa187"}});case 4:return n=e.sent,e.next=7,n.json();case 7:o=e.sent,t(k(o)),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.warn(e.t0),t((r=e.t0,{type:w,payload:r}));case 15:case"end":return e.stop()}var r}),e,null,[[0,11]])})));return function(a){return e.apply(this,arguments)}}()}(a))},loadFromLocalStorage:function(){e(R())}}}))((function(e){var a=e.loading,t=e.images,o=e.fetchImages,r=e.loadFromLocalStorage,c=e.handleChange,l=e.handleOnImgClick,s=e.searchQuery,i=e.searchValue,d=e.localNotes;Object(n.useEffect)((function(){0===d.length&&r(),0===i.length&&o(s)}),[d.length,i.length,r,o,s]);return Object(h.jsxs)("form",{className:"search-form",children:[Object(h.jsx)("input",{className:"new-note-search input-common-styles",type:"text",name:x,value:i,placeholder:"Search",onChange:c,autoComplete:"off",required:!0}),Object(h.jsx)("button",{className:"search-btn",onClick:function(e){e.preventDefault(),i.length&&o(i)}}),Object(h.jsxs)("div",{className:"new-note-photos",children:[a?Object(h.jsx)(X,{}):Object(h.jsx)("div",{className:"loader"}),Object(h.jsx)(Z,{images:t,handleOnImgClick:l})]})]})})),G=(t(46),Object(j.b)((function(e){return{name:e.newData.name,mood:e.newData.mood,date:e.newData.date,description:e.newData.description,imgUrl:e.newData.imgData.imgUrl,imgAuthor:e.newData.imgData.imgAuthor,imgId:e.newData.imgData.imgId,imgSrcLarge:e.newData.imgData.imgSrcLarge,localNotes:e.localData.notes}}),(function(e){return{addNewName:function(a){e({type:b,newValue:a})},addNewMood:function(a){e({type:O,newValue:a})},addNewDate:function(a){e({type:f,newValue:a})},addNewDescription:function(a){e({type:N,newValue:a})},addNewImgData:function(a){e({type:v,payload:a})},clearFormData:function(){e({type:A})},addSearchValue:function(a){e({type:x,payload:a})},loadFromLocalStorage:function(){e(R())},saveToLocalStorage:function(a){e({type:S,payload:a})}}}))((function(e){var a=function(a){a.preventDefault();var t=a.target.name,n=a.target.value;switch(t){case b:return e.addNewName(n);case O:return e.addNewMood(n);case f:return e.addNewDate(n);case N:return e.addNewDescription(n);case A:return e.clearFormData();case x:return e.addSearchValue(n.trimStart())}},t=function(){var e=Math.random().toString().split(".");return parseInt(e[1])};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(g,{}),Object(h.jsxs)("div",{className:"forms-wrapper",children:[Object(h.jsx)(J,{handleFormSubmit:function(a){a.preventDefault();var n={id:t(),name:e.name,mood:e.mood,date:e.date,description:e.description,imgData:{imgUrl:e.imgUrl,imgAuthor:e.imgAuthor,imgSrcLarge:e.imgSrcLarge}};e.saveToLocalStorage(n),e.clearFormData()},handleChange:a,name:e.name,mood:e.mood,date:e.date,description:e.description,imgUrl:e.imgUrl,imgAuthor:e.imgAuthor,imgId:e.imgId}),Object(h.jsx)(q,{handleChange:a,handleOnImgClick:function(a){a.preventDefault(),e.addNewImgData({imgUrl:a.target.src,imgAuthor:a.target.alt,imgSrcLarge:a.target.dataset.srclarge})}})]})]})}))),Y=(t(47),function(e){Object(i.a)(t,e);var a=Object(d.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props.history;return Object(h.jsx)(m.a,{children:Object(h.jsxs)(u.c,{children:[Object(h.jsx)(u.a,{history:e,path:"/new-note",component:G}),Object(h.jsx)(u.a,{history:e,path:"/event-diary",component:z})]})})}}]),t}(n.Component)),K=Object(j.b)((function(e){return{history:e.history}}),(function(){return{}}))(Y),$=t(10),ee=t(2),ae=(new Date).toISOString().substr(0,10).toString(),te={id:"",name:"",mood:"",date:ae,description:"",imgData:{imgUrl:"",imgAuthor:"",imgSrcLarge:""}},ne={fetchedImages:[],loading:!1,error:!1,searchQuery:"landscape",searchValue:""},oe=t(23),re={localNotes:[]},ce={filterName:"",filterMood:""},le={isOpen:!1,defaultValue:{modalMood:"",modalName:"",modalDate:"",modalImgUrl:"",modalImgAuthor:"",modalDescription:""}},se=Object($.c)({newData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case b:return Object(ee.a)(Object(ee.a)({},e),{},{name:a.newValue});case O:return Object(ee.a)(Object(ee.a)({},e),{},{mood:a.newValue});case f:return Object(ee.a)(Object(ee.a)({},e),{},{date:a.newValue});case N:return Object(ee.a)(Object(ee.a)({},e),{},{description:a.newValue});case v:return Object(ee.a)(Object(ee.a)({},e),{},{imgData:a.payload});case A:return Object(ee.a)(Object(ee.a)({},e),{},{id:"",name:"",mood:"",date:ae,description:"",imgData:{imgUrl:"",imgAuthor:"",imgSrcLarge:""}});default:return e}},fetchImages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case D:return Object(ee.a)(Object(ee.a)({},e),{},{loading:!0,error:!1});case y:var t=a.payload.photos;return Object(ee.a)(Object(ee.a)({},e),{},{fetchedImages:t,loading:!1,error:!1});case w:return{loading:!1,error:!0};case x:return Object(ee.a)(Object(ee.a)({},e),{},{searchValue:a.payload});default:return e}},localData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case C:return Object(ee.a)(Object(ee.a)({},e),{},{localNotes:a.payload.localNotes});case S:var t=JSON.stringify({localNotes:[].concat(Object(oe.a)(e.localNotes),[a.payload])});return localStorage.setItem("localNotes",t),Object(ee.a)(Object(ee.a)({},e),{},{localNotes:[].concat(Object(oe.a)(e.localNotes),[a.payload])});case E:var n=JSON.stringify({localNotes:a.payload});return a.payload.length?localStorage.setItem("localNotes",n):localStorage.clear(),Object(ee.a)(Object(ee.a)({},e),{},{localNotes:a.payload});default:return e}},filterNotes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case I:return Object(ee.a)(Object(ee.a)({},e),{},{filterName:a.payload});case M:return Object(ee.a)(Object(ee.a)({},e),{},{filterMood:a.payload});default:return e}},modalData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case L:return Object(ee.a)(Object(ee.a)({},e),{},{isOpen:!0});case _:return Object(ee.a)(Object(ee.a)({},e),{},{isOpen:!1});case T:return Object(ee.a)(Object(ee.a)({},e),{},{defaultValue:a.payload});default:return e}}}),ie=t(28),de=Object($.e)(se,Object($.d)(Object($.a)(ie.a),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__():$.d));c.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(j.a,{store:de,children:Object(h.jsx)(K,{})})}),document.getElementById("app-root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.09f6381b.chunk.js.map