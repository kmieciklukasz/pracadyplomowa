(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-98ed2fc0"],{"0a65":function(t,a,e){"use strict";var i=e("22bb"),n=e.n(i);n.a},"22bb":function(t,a,e){},"71da":function(t,a,e){"use strict";var i=e("8c6a"),n=e.n(i);n.a},"8c6a":function(t,a,e){},b3b0:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-card",{staticClass:"my-2",staticStyle:{width:"45rem","margin-left":"80%"},attrs:{title:t.fullName}},[t.isEditing?e("b-row",{staticClass:"my-1"},[e("b-col",{staticClass:"editable--padding-bottom",attrs:{sm:"12"}},[e("b-row",{staticClass:"my-2"},[e("b-col",{attrs:{sm:"2"}},[e("label",{attrs:{for:"input-small"}},[e("b",[t._v("Pojemnosc:")])])]),e("b-col",{attrs:{sm:"10"}},[t._v("\n          "+t._s(this.pojemnosc)+"\n        ")])],1),e("b-row",{staticClass:"my-2"},[e("b-col",{attrs:{sm:"2"}},[e("label",{attrs:{for:"input-small"}},[e("b",[t._v("Rok:")])])]),e("b-col",{attrs:{sm:"10"}},[t._v("\n          "+t._s(this.rok)+"\n        ")])],1),e("b-row",{staticClass:"my-2"},[e("b-col",{attrs:{sm:"2"}},[e("label",{attrs:{for:"input-small"}},[e("b",[t._v("Paliwo:")])])]),e("b-col",{attrs:{sm:"10"}},[t._v("\n          "+t._s(this.paliwo)+"\n        ")])],1),e("b-row",{staticClass:"my-2"},[e("b-col",{attrs:{sm:"2"}},[e("label",{attrs:{for:"input-small"}},[e("b",[t._v("Opis problemu:")])])]),e("b-col",{attrs:{sm:"10"}},[t._v("\n          "+t._s(this.opis)+"\n        ")])],1),e("b-row",{staticClass:"my-2"},[e("b-col",{attrs:{sm:"2"}},[e("label",{attrs:{for:"input-small"}},[e("b",[t._v("Rozwiązanie:")])])]),e("b-col",{attrs:{sm:"10"}},[t._v("\n          "+t._s(this.rozwiazanie)+"\n        ")])],1),e("b-card",{staticClass:"my-2",attrs:{tag:"article"}},[e("br"),e("img",{staticStyle:{width:"50%",height:"50%"},attrs:{src:t.photo}})])],1)],1):t._e(),t.isEditing?t._e():e("b-button",{attrs:{variant:"success",size:"sm"},on:{click:function(a){t.isEditing=!0}}},[t._v("Szczegóły")]),t.isEditing?e("b-button",{attrs:{variant:"danger",size:"sm"},on:{click:function(a){t.isEditing=!1}}},[t._v("Zwiń")]):t._e(),t.isEditing?e("b-button",{staticStyle:{"margin-left":"5%"},attrs:{variant:"success",size:"sm"},on:{click:t.save}},[t._v("Zaakceptuj")]):t._e(),t.isEditing?e("b-button",{staticStyle:{"margin-left":"5%"},attrs:{variant:"danger",size:"sm"},on:{click:t.remove}},[t._v("Usuń")]):t._e(),e("br")],1)},n=[],s={data:function(){return{names:"",isEditing:!1}},props:{nazwa:{type:String,required:!0},marka:{type:String,required:!0},pojemnosc:{type:String,required:!0},rok:{type:String,required:!0},paliwo:{type:String,required:!0},opis:{type:String,required:!0},rozwiazanie:{type:String,required:!0},zdjecie:{type:String,required:!0},accept:{type:String,required:!0},nodeId:{type:String,required:!0}},computed:{fullName:function(){return"".concat(this.nazwa," ").concat(this.marka)},photo:function(){return"".concat(this.zdjecie," ")},nazw:function(){return"".concat(this.nazwa," ")},full:function(){return"Nazwa Problemu:".concat(this.nazwa,"\n      Marka:").concat(this.marka,"\n      Pojemność:").concat(this.pojemnosc,"\n      Rok:").concat(this.rok,"\n      Paliwo:").concat(this.paliwo,"\n      Opis:").concat(this.opis,"\n      Rozwiązanie:").concat(this.rozwiazanie)}},methods:{add:function(){this.$emit("add",{accept:1})},remove:function(){confirm("Czy na pewno chcesz usunąć to rozwiązanie?")&&this.$emit("delete",this.nodeId)},save:function(){this.$emit("save",{nodeId:this.nodeId,accept:"1"})}},mounted:function(){this.names="".concat(this.nazwa," ").concat(this.marka," ").concat(this.pojemnosc," ").concat(this.rok," ").concat(this.paliwo," ").concat(this.opis," ").concat(this.rozwiazanie," ").concat(this.zdjecie," ").concat(this.accept)}},r=s,o=(e("0a65"),e("c35c")),c=Object(o["a"])(r,i,n,!1,null,null,null);a["a"]=c.exports},e4c9:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"padding"},[e("h1"),e("div",{staticClass:"box"},[e("div",{staticClass:"left"},[e("div",{staticClass:"ad"},[e("h1",[t._v("Panel Adminia")]),e("router-link",{attrs:{to:"/panel",tag:"span"}},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("\n            powrót\n          ")])])],1),e("div",{staticClass:"lista"},[t._m(0),e("router-link",{attrs:{to:"/silnik_accept",tag:"span"}},[e("div",{staticClass:"nav"},[e("div",{staticStyle:{"margin-left":"15%"}},[t._v("Silnik")])])]),e("router-link",{attrs:{to:"/detailing_accept",tag:"span"}},[e("div",{staticClass:"nav"},[e("div",{staticStyle:{"margin-left":"15%"}},[t._v("Auto-Detailing")])])]),e("router-link",{attrs:{to:"/zawieszenie_accept",tag:"span"}},[e("div",{staticClass:"nav"},[e("div",{staticStyle:{"margin-left":"15%"}},[t._v("Zawieszenie")])])]),e("router-link",{attrs:{to:"/uklad_accept",tag:"span"}},[e("div",{staticClass:"nav"},[e("div",{staticStyle:{"margin-left":"15%"}},[t._v("Układ dolotowy")])])]),e("router-link",{attrs:{to:"/elektronika_accept",tag:"span"}},[e("div",{staticClass:"nav"},[e("div",{staticStyle:{"margin-left":"15%"}},[t._v("Elektronika")])])]),e("br"),e("router-link",{attrs:{to:"/admin_uzytkownicy",tag:"span"}},[e("div",{staticClass:"nav1",staticStyle:{"background-color":"rgb(22, 45, 66)",cursor:"pointer"}},[e("h6",[t._v("Zarządzaj użytkownikami")])])]),e("router-link",{attrs:{to:"/admin_pracownicy",tag:"span"}},[e("div",{staticClass:"nav1",staticStyle:{"background-color":"rgb(22, 45, 66)",cursor:"pointer"}},[e("h6",[t._v("Zarządzaj pracownikami")])])])],1)])]),e("div",{staticClass:"formularz"},[e("b-container",[e("transition",{attrs:{name:"fade",mode:"out-in"}},[t.loading?e("div",{key:"1",staticClass:"d-flex justify-content-center my-5"},[e("b-spinner",{attrs:{variant:"primary"}})],1):e("b-row",{key:"2"},t._l(t.players,function(a,i){return e("b-col",{key:i,staticStyle:{"margin-right":"100%","margin-bottom":"5%"},attrs:{sm:"3"}},[0==a.accept?e("Card",{attrs:{nazwa:a.nazwa,marka:a.marka,pojemnosc:a.pojemnosc,rok:a.rok,paliwo:a.paliwo,opis:a.opis,rozwiazanie:a.rozwiazanie,zdjecie:a.zdjecie,accept:a.accept,nodeId:i},on:{delete:t.remove,save:t.save}}):t._e()],1)}),1)],1)],1)],1)])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"nav1",staticStyle:{"background-color":"rgb(22, 45, 66)"}},[e("h6",[t._v("Zweryfikuj rozwiązanie:")])])}],s=(e("96cf"),e("3b8d")),r=e("b3b0"),o=e("ef14"),c={name:"Praco",data:function(){return{loading:!0,players:[]}},components:{Card:r["a"],Navigation:o["a"]},methods:{add2:function(t){this.axios.post("https://helpdesk-d6624-default-rtdb.firebaseio.com/zawieszenie.json",t).then(function(t){console.log("Sukces",t)}).catch(function(t){return console.log("Err",t)})},remove:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(a){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,void 0!==this.players[a]){t.next=3;break}throw"node doesn't exist";case 3:return t.next=5,this.axios.delete("https://helpdesk-d6624-default-rtdb.firebaseio.com/zawieszenie/".concat(a,".json"));case 5:this.$delete(this.players,a),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log("async Error",t.t0);case 11:case"end":return t.stop()}},t,this,[[0,8]])}));function a(a){return t.apply(this,arguments)}return a}(),save:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(a){var e,i,n,s,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=a.accept,i=a.nodeId,console.log("pobieranie Error"),t.prev=2,n={accept:e,nodeId:i},t.next=6,this.axios.patch("https://helpdesk-d6624-default-rtdb.firebaseio.com/zawieszenie/".concat(i,".json"),n);case 6:s=t.sent,r=s.data,this.$set(this.players,i,r),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](2),console.log("async Error",t.t0);case 14:case"end":return t.stop()}},t,this,[[2,11]])}));function a(a){return t.apply(this,arguments)}return a}()},created:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var a,e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.axios.get("https://helpdesk-d6624-default-rtdb.firebaseio.com/zawieszenie.json");case 3:a=t.sent,e=a.data,this.players=e,this.loading=!1,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log("pobieranie Error",t.t0);case 12:case"end":return t.stop()}},t,this,[[0,9]])}));function a(){return t.apply(this,arguments)}return a}()},l=c,u=(e("71da"),e("2877")),d=Object(u["a"])(l,i,n,!1,null,null,null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-98ed2fc0.33624fe8.js.map