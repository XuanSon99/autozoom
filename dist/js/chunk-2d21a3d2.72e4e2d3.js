(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21a3d2"],{bb51:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("main",{staticClass:"home"},[a("div",{staticClass:"setting"},[t._m(0),a("div",{staticClass:"content"},[t.connect?a("p",{staticClass:"btn-disconnect",on:{click:t.connectHandle}},[a("i",{staticClass:"fas fa-plug"}),a("span",[t._v("Ngắt kết nối")])]):a("p",{staticClass:"btn-connect",on:{click:t.connectHandle}},[a("i",{staticClass:"fas fa-link"}),a("span",[t._v("Kết nối đến máy chủ")])]),t._m(1),t._m(2),t._m(3)])]),a("div",{staticClass:"chat"},[t._m(4),a("div",{staticClass:"chat-body"},[a("div",{staticClass:"box-chat"},t._l(t.messageList,(function(s){return a("div",{key:s.time,staticClass:"message"},[a("p",{staticClass:"time"},[a("span",[a("b",[t._v(t._s(s.user))]),t._v(" - ")]),a("span",[t._v(t._s(s.time))])]),a("p",{staticClass:"detail"},[t._v(t._s(s.message))])])})),0),a("form",[a("div",{staticClass:"textbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{type:"text"},domProps:{value:t.message},on:{input:function(s){s.target.composing||(t.message=s.target.value)}}}),a("input",{staticClass:"send",attrs:{type:"submit",value:"Gửi"},on:{click:function(s){return s.preventDefault(),t.sendMessage.apply(null,arguments)}}})])]),t._m(5)])])])},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"head mowtain"},[a("div",{staticClass:"logo mowtain"},[a("img",{attrs:{src:"/img/logo.svg"}}),a("div",[a("h1",[t._v("KINGROUP")]),a("p",[t._v("For you, for future!")])])]),a("div",{staticClass:"about"},[a("h2",[t._v("KING AutoZoom "),a("span",[t._v("v0.69")])]),a("p",[t._v("App zoom cho hệ thống KING")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("form",[a("div",{staticClass:"textbox"},[a("p",[a("i",{staticClass:"fas fa-user-tie"}),a("span",[t._v("Tên chuyên gia")])]),a("input",{attrs:{type:"text"}})]),a("div",{staticClass:"textbox"},[a("p",[a("i",{staticClass:"fas fa-coins"}),a("span",[t._v("Số tiền mỗi lệnh")])]),a("input",{attrs:{type:"text"}})]),a("div",{staticClass:"textbox"},[a("p",[a("i",{staticClass:"fas fa-wallet"}),a("span",[t._v("Loại tài khoản")])]),a("select",[a("option",{attrs:{value:""}},[t._v("Thực")]),a("option",{attrs:{value:""}},[t._v("Ảo")])])]),a("div",{staticClass:"textbox"},[a("p",[a("i",{staticClass:"fab fa-dropbox"}),a("span",[t._v("Sàn giao dịch")])]),a("select",[a("option",{attrs:{value:""}},[t._v("Wefinex")]),a("option",{attrs:{value:""}},[t._v("Forex")])])]),a("div",{staticClass:"mow-space"},[a("p",{staticClass:"expert"},[a("input",{attrs:{type:"checkbox",name:"",id:"expert"}}),a("label",{attrs:{for:"expert"}},[t._v("Chế độ chuyên gia")])]),a("input",{staticClass:"btn-save",attrs:{type:"submit",value:"Lưu cấu hình"}})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"result"},[a("table",[a("tr",[a("th",[t._v("Thắng")]),a("th",[t._v("Thua")]),a("th",[t._v("Lợi nhuận")])]),a("tr",[a("td",[t._v("0")]),a("td",[t._v("0")]),a("td",[t._v("0.00$")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"status"},[a("div",{staticClass:"mowtain"},[a("p",[a("span",[t._v("Kingdom")]),a("span",[t._v(" đang")]),a("span",{staticClass:"offline"},[t._v("offline")])]),a("p",[a("span",[t._v("Đang theo:")]),a("span",[t._v(" 2 "),a("i",{staticClass:"fas fa-user"})])])]),a("div",{staticClass:"mowtain"},[a("p",[t._v("Hệ thống KINGROUP")]),a("p",[a("span",[t._v("Máy chủ:")]),a("span",[t._v(" 888 "),a("i",{staticClass:"fas fa-users"})])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"head mow-space"},[a("div",{staticClass:"hello"},[a("p",[t._v("Xin chào")]),a("p",[a("b",[t._v("Mountain")])])]),a("p",{staticClass:"btn-connect"},[t._v("Lịch sử")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",{staticClass:"copy-right"},[t._v("Được phát triển bởi "),a("b",[t._v("KINGROUP")])])}],n={data:function(){return{messageList:[],message:"",connect:!1}},methods:{sendMessage:function(){this.message&&(this.messageList.push({time:(new Date).toLocaleTimeString(),user:"Mountain",message:this.message}),this.message="")},connectHandle:function(){this.connect=!this.connect}}},c=n,l=a("2877"),o=Object(l["a"])(c,e,i,!1,null,null,null);s["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d21a3d2.72e4e2d3.js.map