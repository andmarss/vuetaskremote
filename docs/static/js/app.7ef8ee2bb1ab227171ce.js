webpackJsonp([1],{"2t7l":function(t,e){},"4eZF":function(t,e){},"60Oj":function(t,e){},"8uJ6":function(t,e){},AcTw:function(t,e,s){t.exports=s.p+"static/img/loader.90eb470.gif"},CKhv:function(t,e){},"MeY+":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",[s("ul",{staticClass:"nav"},[s("li",{on:{click:function(e){e.preventDefault(),t.hideError()}}},[s("router-link",{attrs:{to:"/",exact:""}},[t._v("Home")])],1),t._v(" "),s("li",{on:{click:function(e){e.preventDefault(),t.hideError()}}},[s("router-link",{attrs:{to:"/about",exact:""}},[t._v("About Us")])],1),t._v(" "),s("li",{on:{click:function(e){e.preventDefault(),t.hideError()}}},[s("router-link",{attrs:{to:"/contact",exact:""}},[t._v("Contact")])],1)]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],ref:"overlay",staticClass:"overlay"},[s("ul",[s("li",{on:{click:function(e){e.preventDefault(),t.hideOverlay()}}},[s("router-link",{attrs:{to:"/",exact:""}},[t._v("Home")])],1),t._v(" "),s("li",{on:{click:function(e){e.preventDefault(),t.hideOverlay()}}},[s("router-link",{attrs:{to:"/about",exact:""}},[t._v("About Us")])],1),t._v(" "),s("li",{on:{click:function(e){e.preventDefault(),t.hideOverlay()}}},[s("router-link",{attrs:{to:"/contact",exact:""}},[t._v("Contact")])],1)])]),t._v(" "),s("div",{class:t.open?"hamburger open":"hamburger",on:{click:function(e){e.preventDefault(),t.toggleOverlay()}}},[s("span"),t._v(" "),s("span"),t._v(" "),s("span"),t._v(" "),s("span")])])},staticRenderFns:[]};var a={methods:{},mounted:function(){},components:{Header:s("VU/8")({data:function(){return{open:!1}},methods:{toggleOverlay:function(){this.open=!this.open},hideOverlay:function(){this.open=!1,this.hideError()},hideError:function(){this.$store.dispatch("changeDanger",!1)}},mounted:function(){},computed:{}},n,!1,function(t){s("60Oj")},"data-v-0452e8ea",null).exports}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Header"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var r=s("VU/8")(a,o,!1,function(t){s("MeY+")},null,null).exports,c=s("/ocq"),l={data:function(){return{loopNum:0,data:["Web-development","Seo","Mobile-development","Pay Per Click","Social Media Marketing","Digital Complex"],period:2e3,txt:"",isDeleting:!1,timeout:null}},methods:{tick:function(){var t=this;this.timeOut&&clearTimeout(this.timeOut);var e=this.loopNum%this.data.length,s=this.data[e];this.isDeleting?this.txt=s.substring(0,this.txt.length-1):this.txt=s.substring(0,this.txt.length+1);var i=300-100*Math.random();this.isDeleting&&(i/=3),this.isDeleting||this.txt!==s?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,i=500):(i=this.period,this.isDeleting=!0),this.timeOut=setTimeout(function(){return t.tick()},i)},move:function(){var t=this.$refs.image;t.addEventListener("mousemove",function(e){var s=10/window.innerHeight,i=10/window.innerWidth*(e.pageX-window.innerWidth/2)*-1-50,n=s*(e.pageY-window.innerHeight/2)*-1-50;t.style.backgroundPosition=i+"px "+n+"px"})}},mounted:function(){this.tick(),this.move()},computed:{}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{ref:"image",staticClass:"big-image"},[e("div",{staticClass:"container"},[e("div",{staticClass:"big-image__content"},[e("h1",{staticClass:"big-image__title"},[this._v("Бренд №1")]),this._v(" "),e("h3",[e("span",{staticClass:"rotate"},[this._v(this._s(this.txt))])]),this._v(" "),e("p",[this._v("Мы лучшие в своем деле")])])])])},staticRenderFns:[]};var m=s("VU/8")(l,u,!1,function(t){s("mQZj")},"data-v-9d18a3bc",null).exports,d=s("/kJX"),p={data:function(){return{}},methods:{slide:function(t){var e=this.$refs.carousel,s=e.currentPage,i=e.pageCount;"prev"===t?0!==s&&e.goToPage(s-1):s<i-1&&e.goToPage(s+1)}},mounted:function(){},computed:{},components:{carousel:d.Carousel,slide:d.Slide}},h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"carousel-component"},[s("span",{ref:"prev",staticClass:"carousel-prev",on:{click:function(e){t.slide("prev")}}},[s("i",{staticClass:"fas fa-arrow-left"})]),t._v(" "),s("carousel",{ref:"carousel",attrs:{perPage:3,paginationEnabled:!1,perPageCustom:[[1024,3],[640,2],[0,1]],loop:!0}},[s("slide",[s("div",{staticClass:"carousel-slide carousel-slide-web"},[s("router-link",{attrs:{to:"/web",exact:""}},[s("h3",{staticClass:"carousel-slide__title"},[t._v("Web")]),t._v(" "),s("p",[t._v("Мы создаём работающие сайты, интернет-магазины и web-сервисы. Вам понравится и захочется еще!")])])],1)]),t._v(" "),s("slide",[s("div",{staticClass:"carousel-slide carousel-slide-seo"},[s("router-link",{attrs:{to:"/seo",exact:""}},[s("h3",{staticClass:"carousel-slide__title"},[t._v("SEO")]),t._v(" "),s("p",[t._v("Мы занимаемся результативным продвижением сайтов в Яндекс и Google.")])])],1)]),t._v(" "),s("slide",[s("div",{staticClass:"carousel-slide carousel-slide-mobile"},[s("router-link",{attrs:{to:"/mobile",exact:""}},[s("h3",{staticClass:"carousel-slide__title"},[t._v("Mobile")]),t._v(" "),s("p",[t._v("Мы разрабатываем нативные мобильные приложения для стартапов и бизнеса, а также любое программное обеспечение.")])])],1)]),t._v(" "),s("slide",[s("div",{staticClass:"carousel-slide carousel-slide-ppc"},[s("router-link",{attrs:{to:"/ppc",exact:""}},[s("h3",{staticClass:"carousel-slide__title"},[t._v("PPC")]),t._v(" "),s("p",[t._v("Размещение объявлений сайта вашей компании в результатах поиска Google и Yandex.")])])],1)]),t._v(" "),s("slide",[s("div",{staticClass:"carousel-slide carousel-slide-smm"},[s("router-link",{attrs:{to:"/smm",exact:""}},[s("h3",{staticClass:"carousel-slide__title"},[t._v("SMM")]),t._v(" "),s("p",[t._v("Мы умеем привлекать трафик или внимание к бренду/продукту через социальные платформы.")])])],1)]),t._v(" "),s("slide",[s("div",{staticClass:"carousel-slide carousel-slide-dc"},[s("router-link",{attrs:{to:"/dc",exact:""}},[s("h3",{staticClass:"carousel-slide__title"},[t._v("DC")]),t._v(" "),s("p",[t._v("Не просто сайт, а готовое решение для бизнеса за 24 дня с гарантией получения заказов!")])])],1)])],1),t._v(" "),s("span",{ref:"next",staticClass:"carousel-next",on:{click:function(e){t.slide("next")}}},[s("i",{staticClass:"fas fa-arrow-right"})])],1)},staticRenderFns:[]};var v=s("VU/8")(p,h,!1,function(t){s("4eZF")},"data-v-85fabf38",null).exports,f=s("fZjL"),g=s.n(f),_=s("nSI5"),x={props:{showTitle:{types:Boolean,default:!0}},data:function(){return{message:{fromName:"",fromEmail:"",fromTelephone:"",fromMessage:"",fromMessageLeft:250},submitted:!1,showLoader:!1,errorText:"",emptyFields:[],validPhone:!1}},methods:{postMessage:function(){var t=this;return this.errorText="",this.emptyFields=g()(this.message).filter(function(e){return 0===t.message[e].length}),this.emptyFields.length>0?(this.emptyFields=this.emptyFields.map(function(t){return"fromEmail"===t?'"Email"':"fromTelephone"===t?'"Номер телефона"':"fromName"===t?'"Имя"':"fromMessage"===t?'"Текст сообщения"':void 0}),void this.showError()):this.checkEmail()?this.validPhone?(this.showLoader=!0,void setTimeout(function(){t.showLoader=!1,t.submitted=!0,t.message.fromName="",t.message.fromEmail="",t.message.fromTelephone="",t.message.fromMessage=""},5e3)):(this.errorText="Введен невалидный номер телефона.",void this.showError()):(this.errorText="Введен невалидный email-адрес.",void this.showError())},checkEmail:function(){return/[a-z0-9]+\@\w+\.\w{1,5}/gi.test(this.message.fromEmail)},checkPhone:function(t){t.number;var e=t.isValid;t.country;this.validPhone=e},showError:function(){this.$refs.input.$el.classList.remove("error"),this.$refs.input.$el.classList.add("error"),this.$store.dispatch("changeDanger",!0)},hideError:function(){this.$refs.input.$el.classList.remove("error"),this.errorText="",this.emptyFields=[],this.$store.dispatch("changeDanger",!1)}},mounted:function(){console.log()},computed:{showDanger:function(){return this.$store.getters.showDanger}},components:{"vue-tel-input":s.n(_).a}},b={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"contacts"},[t.submitted?t._e():i("div",{staticClass:"container"},[t.showTitle?i("h2",{staticClass:"title title-with-lines"},[t._v("Контакты")]):t._e(),t._v(" "),i("p",{staticClass:"contacts__paragraph"},[t._v("Оставьте свои контактные данные, и наш менеджер свяжется с Вами.")]),t._v(" "),i("div",{staticClass:"wrapper"},[t.showDanger?i("div",{staticClass:"notification is-danger"},[i("button",{staticClass:"delete",on:{click:function(e){t.hideError()}}}),t._v(" "),0===t.errorText.length?i("p",[t._v("\n                    Не заполнены обязательные поля: "),t._l(t.emptyFields,function(e,s){return i("span",[t._v(t._s(s===t.emptyFields.length-1?e:e+", "))])})],2):i("p",[t._v("\n                    "+t._s(t.errorText)+"\n                ")])]):t._e()]),t._v(" "),i("div",{staticClass:"wrapper"},[i("div",{staticClass:"contacts-left"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.message.fromName,expression:"message.fromName"}],class:t.showDanger?"input form__input error":"input form__input",attrs:{type:"text",placeholder:"Имя"},domProps:{value:t.message.fromName},on:{blur:function(e){t.hideError()},input:function(e){e.target.composing||t.$set(t.message,"fromName",e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.message.fromEmail,expression:"message.fromEmail"}],class:t.showDanger?"input form__input error":"input form__input",attrs:{type:"email",placeholder:"Email"},domProps:{value:t.message.fromEmail},on:{blur:function(e){t.hideError()},input:function(e){e.target.composing||t.$set(t.message,"fromEmail",e.target.value)}}}),t._v(" "),i("vue-tel-input",{ref:"input",attrs:{preferredCountries:["ru","ua"],placeholder:"Номер телефона"},on:{onInput:function(e){t.checkPhone()},onBlur:function(e){t.hideError()}},model:{value:t.message.fromTelephone,callback:function(e){t.$set(t.message,"fromTelephone",e)},expression:"message.fromTelephone"}})],1),t._v(" "),i("div",{staticClass:"contacts-right"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message.fromMessage,expression:"message.fromMessage"}],class:t.showDanger?"input form__input error":"input form__input",attrs:{rows:"4",placeholder:"Текст сообщения"},domProps:{value:t.message.fromMessage},on:{blur:function(e){t.hideError()},input:function(e){e.target.composing||t.$set(t.message,"fromMessage",e.target.value)}}}),t._v(" "),i("p",{directives:[{name:"show",rawName:"v-show",value:t.message.fromMessageLeft-t.message.fromMessage.length<250,expression:"(message.fromMessageLeft - message.fromMessage.length) < 250"}]},[t._v("Осталось: "+t._s(t.message.fromMessageLeft-t.message.fromMessage.length))]),t._v(" "),i("button",{staticClass:"btn contacts__btn",on:{click:function(e){return e.preventDefault(),t.postMessage(e)}}},[t._v("Отправить")])])])]),t._v(" "),t.showLoader?i("div",{staticClass:"transparent"}):t._e(),t._v(" "),t.showLoader?i("div",{staticClass:"loader"},[i("img",{attrs:{src:s("AcTw"),alt:""}})]):t._e(),t._v(" "),t.submitted?i("div",{staticClass:"container"},[i("h2",{staticClass:"title title--success"},[t._v("Ваше сообщение отправлено!")]),t._v(" "),i("h4",{staticClass:"little-title title--success"},[t._v("Очень скоро наш менеджер Вам позвонит")]),t._v(" "),i("button",{staticClass:"btn contacts__btn",staticStyle:{"max-width":"250px"},on:{click:function(e){e.preventDefault(),t.submitted=!1}}},[t._v("Отправить еще")])]):t._e()])},staticRenderFns:[]};var C=s("VU/8")(x,b,!1,function(t){s("ovhF")},"data-v-adf4de00",null).exports,k={data:function(){return{}},methods:{},mounted:function(){},computed:{},components:{Hero:m,Slider:v,Form:C}},w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Hero"),this._v(" "),e("Slider"),this._v(" "),e("Form")],1)},staticRenderFns:[]};var y=s("VU/8")(k,w,!1,function(t){s("2t7l")},"data-v-43dbdbce",null).exports,E={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("h1",{staticStyle:{"text-align":"center","margin-bottom":"20px","font-size":"32px",color:"#cccccc"}},[this._v("About us")]),this._v(" "),e("p",{staticStyle:{"font-size":"14px","text-align":"center","font-weight":"500",padding:"0 15px"}},[this._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi impedit maiores nemo, officiis provident quo quos ut veritatis! Ad, animi atque aut beatae consectetur cum cumque delectus dignissimos dolores facere fugiat id illo iste itaque libero magni mollitia nam nesciunt officiis praesentium provident quae quisquam quos, repudiandae rerum, sint tempora?")])])}]};var $=s("VU/8")(null,E,!1,function(t){s("pPZT")},"data-v-f8b42b36",null).exports,D={components:{Contact:C}},S={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("h1",{staticStyle:{"text-align":"center","margin-bottom":"20px","font-size":"32px",color:"#cccccc"}},[this._v("Свяжитесь с нами")]),this._v(" "),e("Contact",{attrs:{showTitle:!1}})],1)},staticRenderFns:[]};var M=s("VU/8")(D,S,!1,function(t){s("8uJ6")},"data-v-c42b1572",null).exports,F={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("span",{staticClass:"back",on:{click:function(e){t.back()}}},[s("i",{staticClass:"fas fa-chevron-left",staticStyle:{display:"inline-block","margin-right":"10px"}}),t._v("Назад")]),t._v(" "),s("h1",{staticStyle:{"text-align":"center","margin-bottom":"20px","font-size":"32px",color:"#cccccc"}},[t._v("Web development")]),t._v(" "),s("p",{staticStyle:{color:"#000","text-align":"center"}},[t._v("Мы создаём работающие сайты, интернет-магазины и web-сервисы. Вам понравится и захочется еще!")])])},staticRenderFns:[]};var T=s("VU/8")({data:function(){return{}},methods:{back:function(){try{this.$router.go(-1)}catch(t){this.$router.push({path:"/"})}}},mounted:function(){},computed:{}},F,!1,function(t){s("Vr2z")},"data-v-7d2dde36",null).exports,P={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("span",{staticClass:"back",on:{click:function(e){t.back()}}},[s("i",{staticClass:"fas fa-chevron-left",staticStyle:{display:"inline-block","margin-right":"10px"}}),t._v("Назад")]),t._v(" "),s("h1",{staticStyle:{"text-align":"center","margin-bottom":"20px","font-size":"32px",color:"#cccccc"}},[t._v("Search Engine Optimization")]),t._v(" "),s("p",{staticStyle:{color:"#000","text-align":"center"}},[t._v("Мы занимаемся результативным продвижением сайтов в Яндекс и Google.")])])},staticRenderFns:[]};var N=s("VU/8")({data:function(){return{}},methods:{back:function(){try{this.$router.go(-1)}catch(t){this.$router.push({path:"/"})}}},mounted:function(){},computed:{}},P,!1,function(t){s("hLaP")},"data-v-67747493",null).exports,O={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("span",{staticClass:"back",on:{click:function(e){t.back()}}},[s("i",{staticClass:"fas fa-chevron-left",staticStyle:{display:"inline-block","margin-right":"10px"}}),t._v("Назад")]),t._v(" "),s("h1",{staticStyle:{"text-align":"center","margin-bottom":"20px","font-size":"32px",color:"#cccccc"}},[t._v("Mobile Development")]),t._v(" "),s("p",{staticStyle:{color:"#000","text-align":"center"}},[t._v("Мы разрабатываем нативные мобильные приложения для стартапов и бизнеса, а также любое программное обеспечение.")])])},staticRenderFns:[]};var L=s("VU/8")({data:function(){return{}},methods:{back:function(){try{this.$router.go(-1)}catch(t){this.$router.push({path:"/"})}}},mounted:function(){},computed:{}},O,!1,function(t){s("CKhv")},"data-v-0f8573fc",null).exports,V={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("span",{staticClass:"back",on:{click:function(e){t.back()}}},[s("i",{staticClass:"fas fa-chevron-left",staticStyle:{display:"inline-block","margin-right":"10px"}}),t._v("Назад")]),t._v(" "),s("h1",{staticStyle:{"text-align":"center","margin-bottom":"20px","font-size":"32px",color:"#cccccc"}},[t._v("Seo")]),t._v(" "),s("p",{staticStyle:{color:"#000","text-align":"center"}},[t._v("Размещение объявлений сайта вашей компании в результатах поиска Google и Yandex.")])])},staticRenderFns:[]};var U=s("VU/8")({data:function(){return{}},methods:{back:function(){try{this.$router.go(-1)}catch(t){this.$router.push({path:"/"})}}},mounted:function(){},computed:{}},V,!1,function(t){s("lMOb")},"data-v-4bddc8b3",null).exports,R={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("span",{staticClass:"back",on:{click:function(e){t.back()}}},[s("i",{staticClass:"fas fa-chevron-left",staticStyle:{display:"inline-block","margin-right":"10px"}}),t._v("Назад")]),t._v(" "),s("h1",{staticStyle:{"text-align":"center","margin-bottom":"20px","font-size":"32px",color:"#cccccc"}},[t._v("Social Media Marketing")]),t._v(" "),s("p",{staticStyle:{color:"#000","text-align":"center"}},[t._v("Мы умеем привлекать трафик или внимание к бренду/продукту через социальные платформы.")])])},staticRenderFns:[]};var z=s("VU/8")({data:function(){return{}},methods:{back:function(){try{this.$router.go(-1)}catch(t){this.$router.push({path:"/"})}}},mounted:function(){},computed:{}},R,!1,function(t){s("vN+S")},"data-v-3394ca03",null).exports,q={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("span",{staticClass:"back",on:{click:function(e){t.back()}}},[s("i",{staticClass:"fas fa-chevron-left",staticStyle:{display:"inline-block","margin-right":"10px"}}),t._v("Назад")]),t._v(" "),s("h1",{staticStyle:{"text-align":"center","margin-bottom":"20px","font-size":"32px",color:"#cccccc"}},[t._v("Digital complex")]),t._v(" "),s("p",{staticStyle:{color:"#000","text-align":"center"}},[t._v("Не просто сайт, а готовое решение для бизнеса за 24 дня с гарантией получения заказов!")])])},staticRenderFns:[]};var H=s("VU/8")({data:function(){return{}},methods:{back:function(){try{this.$router.go(-1)}catch(t){this.$router.push({path:"/"})}}},mounted:function(){},computed:{}},q,!1,function(t){s("ukce")},"data-v-cb37538e",null).exports;i.a.use(c.a);var A=new c.a({mode:"history",base:Object({NODE_ENV:"production"}).BASE_URL,routes:[{path:"/",name:"main",component:y},{path:"/web",component:T},{path:"/seo",component:N},{path:"/mobile",component:L},{path:"/ppc",component:U},{path:"/smm",component:z},{path:"/dc",component:H},{path:"/about",component:$},{path:"/contact",component:M},{path:"*",component:y},{path:"",component:y}]}),j=s("NYxO");i.a.use(j.a);var Z=new j.a.Store({state:{showDanger:!1},mutations:{setDanger:function(t,e){var s=e.type,i=e.showDanger;t[s]=i}},actions:{changeDanger:function(t,e){(0,t.commit)("setDanger",{type:"showDanger",showDanger:e})}},getters:{showDanger:function(t){return t.showDanger}}});i.a.config.productionTip=!1,new i.a({el:"#app",router:A,store:Z,components:{App:r},template:"<App/>"})},Vr2z:function(t,e){},hLaP:function(t,e){},lMOb:function(t,e){},mQZj:function(t,e){},ovhF:function(t,e){},pPZT:function(t,e){},ukce:function(t,e){},"vN+S":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.7ef8ee2bb1ab227171ce.js.map