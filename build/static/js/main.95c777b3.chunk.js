(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{12:function(e,a,t){e.exports={btn:"GameDetail_btn__l3RQc",card:"GameDetail_card__VPbpa",cardLeft:"GameDetail_cardLeft__3qJ9b",cardRight:"GameDetail_cardRight__1KR_5",cardRightDetails:"GameDetail_cardRightDetails__1ZEHs",cardRightDesc:"GameDetail_cardRightDesc__2zpqG",loading:"GameDetail_loading__3TGes",inactive:"GameDetail_inactive__3LPpD",container:"GameDetail_container__142dQ",back:"GameDetail_back__2wTzA"}},14:function(e,a,t){e.exports={btn:"Game_btn__3vjsd",cardsItem:"Game_cardsItem__3YBfh",card:"Game_card__2Ul6E",cardImage:"Game_cardImage__b08dL",divContent:"Game_divContent__GHRYA",cardTitle:"Game_cardTitle__1-DKT",cardContent:"Game_cardContent__3_Jmu"}},16:function(e,a,t){e.exports={btn:"Pagination_btn__3pALk",pageNumbers:"Pagination_pageNumbers__1wZJ6",active:"Pagination_active__vpSEk",selector:"Pagination_selector__3zqob"}},17:function(e,a,t){e.exports={btn:"NavBar_btn__3T4Xh",navbar:"NavBar_navbar__2moIO",navlink:"NavBar_navlink__2M5dO",titleApp:"NavBar_titleApp__3qStS",logo:"NavBar_logo__3JwOK",navOption:"NavBar_navOption__3CdXG"}},18:function(e,a,t){e.exports={btn:"MultipleSelector_btn__28btd",container:"MultipleSelector_container__1BrFs",ddWrapper:"MultipleSelector_ddWrapper__AD6xP",ddHeader:"MultipleSelector_ddHeader__29k57",titleBold:"MultipleSelector_titleBold__BV7pN",ddList:"MultipleSelector_ddList__hi0oj"}},25:function(e,a,t){e.exports={btn:"LandingPage_btn__1ylme",landingPage:"LandingPage_landingPage__1nmOU",header:"LandingPage_header__2kfRp"}},26:function(e,a,t){e.exports={btn:"Home_btn__J9lG2",topBar:"Home_topBar__hxQA6",loading:"Home_loading__3GJwD",container:"Home_container__39tbz"}},37:function(e,a,t){e.exports={btn:"SearchBar_btn__Dv53G",formContainer:"SearchBar_formContainer__V5lgc",btnSb:"SearchBar_btnSb__22f_S"}},4:function(e,a,t){e.exports={btn:"Form_btn__33mWj",flex:"Form_flex__1Lcv8",gridContainer:"Form_gridContainer__bFUh7",formGroupRow:"Form_formGroupRow__1_e_A",formLabelCol:"Form_formLabelCol__3-Lbg",formInputCol:"Form_formInputCol__zUuhs",input:"Form_input__2d30Z",danger:"Form_danger__1TcSi",divButton:"Form_divButton__1f8mo"}},50:function(e,a,t){e.exports={btn:"Games_btn__H3ukA",cardsContainer:"Games_cardsContainer__1GXZZ"}},59:function(e,a,t){},60:function(e,a,t){},90:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t(28),i=t.n(c),r=(t(59),t(60),t(5)),s=t(25),o=t.n(s),l=t(0),d=function(){var e=Object(r.e)();return Object(l.jsxs)("div",{className:o.a.landingPage,children:[Object(l.jsx)("h1",{className:o.a.header,children:"Welcome to the Videogame Finder APP"}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{className:"".concat(o.a.btn," ").concat(o.a.btnPrimary),onClick:function(){e.push("/videogames")},children:"START NOW"})]})},m=t(13),j=t.n(m),u=t(20),b=t(8),O=t(26),p=t.n(O),h=t(16),f=t.n(h),_=t(50),g=t.n(_),x=t(14),v=t.n(x);function N(e){var a=e.name,t=e.id,n=e.background_image,c=e.genres,i=Object(r.e)(),s=c.sort((function(e,a){return e.name.toLowerCase()>a.name.toLowerCase()?1:e.name.toLowerCase()<a.name.toLowerCase()?-1:0}));return Object(l.jsx)("li",{className:v.a.cardsItem,children:Object(l.jsxs)("div",{className:v.a.card,children:[Object(l.jsxs)("div",{className:v.a.cardContent,children:[Object(l.jsx)("div",{className:v.a.divContent,children:Object(l.jsx)("span",{className:v.a.cardTitle,children:a})}),Object(l.jsx)("div",{className:v.a.divContent,children:Object(l.jsx)("ul",{children:s.map((function(e){return Object(l.jsx)("li",{children:e.name},e.id)}))})}),Object(l.jsx)("button",{className:v.a.btn,onClick:function(){var e="/videogames/details/".concat(t);i.push(e)},children:"See more"})]}),Object(l.jsx)("div",{className:v.a.cardImage,children:Object(l.jsx)("img",{src:n,alt:""})})]})},t)}var C=function(e){var a,t=e.games;return Object(l.jsx)(l.Fragment,{children:(a=t,Object(l.jsx)("ul",{className:g.a.cardsContainer,children:null===a||void 0===a?void 0:a.map((function(e){return Object(l.jsx)(N,{name:e.name,id:e.id,genres:e.genres,background_image:e.background_image},e.id)}))}))})},S=t(6),G="https://fierce-dawn-86733.herokuapp.com",y="GET_GAMES",D="GET_GENRES",A="GET_GAME_DETAILS",L="GET_GAME_SEARCHED",E="FILTER_BY_GENRE",k="FILTER_BY_CREATED",w="SORT_BY_RATING",R="SORT_BY_NAME",P=[{id:4,name:"PC"},{id:187,name:"PlayStation 5"},{id:1,name:"Xbox One"},{id:18,name:"PlayStation 4"},{id:186,name:"Xbox Series S/X"},{id:7,name:"Nintendo Switch"},{id:3,name:"iOS"},{id:21,name:"Android"},{id:8,name:"Nintendo 3DS"},{id:9,name:"Nintendo DS"},{id:13,name:"Nintendo DSi"},{id:5,name:"macOS"},{id:6,name:"Linux"},{id:14,name:"Xbox 360"},{id:80,name:"Xbox"},{id:16,name:"PlayStation 3"},{id:15,name:"PlayStation 2"},{id:27,name:"PlayStation"},{id:19,name:"PS Vita"},{id:17,name:"PSP"},{id:10,name:"Wii U"},{id:11,name:"Wii"},{id:105,name:"GameCube"},{id:83,name:"Nintendo 64"},{id:24,name:"Game Boy Advance"},{id:43,name:"Game Boy Color"},{id:26,name:"Game Boy"},{id:79,name:"SNES"},{id:49,name:"NES"},{id:55,name:"Classic Macintosh"},{id:41,name:"Apple II"},{id:166,name:"Commodore / Amiga"},{id:28,name:"Atari 7800"},{id:31,name:"Atari 5200"},{id:23,name:"Atari 2600"},{id:22,name:"Atari Flashback"},{id:25,name:"Atari 8-bit"},{id:34,name:"Atari ST"},{id:46,name:"Atari Lynx"},{id:50,name:"Atari XEGS"},{id:167,name:"Genesis"},{id:107,name:"SEGA Saturn"},{id:119,name:"SEGA CD"},{id:117,name:"SEGA 32X"},{id:74,name:"SEGA Master System"},{id:106,name:"Dreamcast"},{id:111,name:"3DO"},{id:112,name:"Jaguar"},{id:77,name:"Game Gear"},{id:12,name:"Neo Geo"},{id:171,name:"Web"}];function B(){return function(e){return fetch("".concat(G,"/videogames")).then((function(e){return e.json()})).then((function(a){e({type:y,payload:a})})).catch((function(e){return alert(e)}))}}function I(){return function(e){return fetch("".concat(G,"/genres")).then((function(e){return e.json()})).then((function(a){e({type:D,payload:a})})).catch((function(e){return alert(e)}))}}var T=function(){var e=Object(S.c)(),a=Object(S.d)((function(e){return e.filteredGames})),t=Object(S.d)((function(e){return e.genres}));Object(n.useEffect)((function(){return s(1)}),[a]);for(var c=Object(n.useState)(1),i=Object(b.a)(c,2),r=i[0],s=i[1],o=Object(n.useState)(3),d=Object(b.a)(o,2),m=d[0],j=d[1],u=Object(n.useState)(0),O=Object(b.a)(u,2),p=O[0],h=O[1],_=15*r,g=_-15,x=a&&(null===a||void 0===a?void 0:a.slice(g,_)),v=function(e){s(Number(e.target.id))},N=function(){r<y.length?(s(r+1),r+1>m&&(j(m+3),h(p+3))):alert("You are in the last page")},G=function(){r>1?(s(r-1),(r-1)%3===0&&(j(m-3),h(p-3))):alert("no previous pages available  ")},y=[],D=1;D<=Math.ceil(a.length/15);D++)y.push(D);var A=null;y.length>m&&(A=Object(l.jsx)("li",{onClick:N,children:"\u2026"}));var L=null;r>3&&(L=Object(l.jsx)("li",{onClick:G,children:"\u2026"}));var P=y.map((function(e){return e<=m&&e>p?Object(l.jsx)("li",{id:e,onClick:v,className:r===e?"".concat(f.a.active):null,children:e},e):null})),B=Object(n.useState)("");return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{children:[Object(l.jsxs)("select",{className:f.a.selector,onChange:function(a){var t;a.preventDefault(),e((t=a.target.value,{type:w,payload:t})),s(1),h(0),j(3),B[1]("Rating ".concat(a.target.value))},children:[Object(l.jsx)("option",{value:"",children:"---Sort by Rating---"}),Object(l.jsx)("option",{value:"Asc",children:"Asc"}),Object(l.jsx)("option",{value:"Desc",children:"Desc"})]}),Object(l.jsxs)("select",{className:f.a.selector,onChange:function(a){var t;a.preventDefault(),e((t=a.target.value,{type:R,payload:t})),s(1),h(0),j(3),B[1]("Name ".concat(a.target.value))},children:[Object(l.jsx)("option",{value:"",children:"---Sort by Name---"}),Object(l.jsx)("option",{value:"Asc",children:"A...Z "}),Object(l.jsx)("option",{value:"Desc",children:"Z...A "})]}),Object(l.jsxs)("select",{className:f.a.selector,onChange:function(a){var t;e((t=a.target.value,{type:E,payload:t})),s(1),h(0),j(3)},children:[Object(l.jsx)("option",{value:"",children:"---Filter by Genre---"},"title"),t.map((function(e){return Object(l.jsx)("option",{value:e.name,children:e.name},e.id)}))]}),Object(l.jsxs)("select",{className:f.a.selector,onChange:function(a){var t;e((t=a.target.value,{type:k,payload:t})),s(1),h(0),j(3)},children:[Object(l.jsx)("option",{value:"",children:"---Filter by Source---"},"title"),Object(l.jsx)("option",{value:"API",children:"external API"},"1"),Object(l.jsx)("option",{value:"APP",children:"Videogame App"},"2")]})]}),x.length>0?Object(l.jsxs)("ul",{className:f.a.pageNumbers,children:[Object(l.jsx)("li",{children:Object(l.jsx)("button",{onClick:G,children:" Prev"})}),L,P,A,Object(l.jsx)("li",{children:Object(l.jsx)("button",{onClick:N,children:" Next"})})]}):null,Object(l.jsx)(C,{games:x})]})},F=t(37),M=t.n(F),X=function(){var e=Object(n.useState)(""),a=Object(b.a)(e,2),t=a[0],c=a[1],i=Object(S.c)(),r=function(e){var a;e.preventDefault(),i((a=t,function(e){return fetch("".concat(G,"/videogames?name=").concat(a)).then((function(e){return e.json()})).then((function(a){if("Error: no matches found"===a.msg)throw a.msg;e({type:L,payload:a})})).catch((function(e){return alert(e)}))})),c("")};return Object(l.jsxs)("form",{className:M.a.formContainer,onSubmit:function(e){return r(e)},children:[Object(l.jsx)("div",{className:"divSB",children:Object(l.jsx)("input",{type:"text",id:"title",autoComplete:"off",value:t,onChange:function(e){return function(e){c(e.target.value)}(e)}})}),Object(l.jsx)("button",{className:M.a.btn,type:"submit",children:"SEARCH"})]})},H=t.p+"static/media/Ryu.4dfeb2d9.gif";var q=function(){var e=Object(S.d)((function(e){return e.games})),a=Object(S.d)((function(e){return e.genres})),t=Object(S.c)(),c=Object(n.useState)(!0),i=Object(b.a)(c,2),r=i[0],s=i[1];function o(){return(o=Object(u.a)(j.a.mark((function n(){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(0!==e.length){n.next=3;break}return n.next=3,t(B());case 3:if(0!==a.length){n.next=6;break}return n.next=6,t(I());case 6:s(!1);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(n.useEffect)((function(){s(!0),function(){o.apply(this,arguments)}()}),[]),r?Object(l.jsxs)("div",{className:p.a.container,children:[Object(l.jsx)("img",{src:H,className:p.a.loading,alt:""}),"Loading..."]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:p.a.topBar,children:[Object(l.jsx)("button",{className:p.a.btn,onClick:function(){t(B())},children:"Reset games"}),Object(l.jsx)(X,{})]}),Object(l.jsx)(T,{})]})},J=t(12),V=t.n(J);var W=Object(S.b)((function(e){return{gameDetails:e.gameDetails}}),(function(e){return{getGameDetails:function(a){return e((t=a,function(e){return fetch("".concat(G,"/videogames/").concat(t)).then((function(e){return e.json()})).then((function(a){e({type:A,payload:a})})).catch((function(e){return alert(e)}))}));var t}}}))((function(e){var a,t,c=e.match,i=e.getGameDetails,r=e.gameDetails,s={backgroundImage:"url(".concat(r.background_image_additional,")"),backgroundSize:"cover"},o=Object(n.useState)(!0),d=Object(b.a)(o,2),m=d[0],O=d[1];function p(){return(p=Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(c.params.id);case 2:O(!1);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){O(!0),function(){p.apply(this,arguments)}()}),[]),m?Object(l.jsxs)("div",{className:V.a.container,children:[Object(l.jsx)("img",{src:H,className:m?V.a.loading:V.a.inactive,alt:""}),"Loading..."]}):Object(l.jsx)("div",{className:V.a.back,style:s,children:Object(l.jsxs)("div",{className:V.a.card,children:[Object(l.jsx)("div",{className:V.a.cardLeft,children:Object(l.jsx)("img",{src:r.background_image,width:"500",height:"500",alt:""})}),Object(l.jsxs)("div",{className:V.a.cardRight,children:[Object(l.jsxs)("h1",{children:[r.name," "]}),Object(l.jsx)("div",{className:V.a.cardRightDetails,children:Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{children:"Rating:"})," ",r.rating]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{children:"Launch:"})," ",r.released]})]})}),Object(l.jsx)("div",{className:V.a.cardRightDetails,children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)("span",{children:"Genres:"})}),null===(a=r.genres)||void 0===a?void 0:a.map((function(e){return Object(l.jsx)("li",{children:e.name},e.id)}))]})}),Object(l.jsx)("div",{className:V.a.cardRightDetails,children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)("span",{children:"Platforms:"})}),null===(t=r.platforms)||void 0===t?void 0:t.map((function(e){return Object(l.jsx)("li",{children:e.name},e.id)}))]})}),Object(l.jsx)("div",{className:V.a.cardRightDesc,children:Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{children:"Description:"})," ",r.description.replace(/(<([^>]+)>)/gi,"")]})})]})]})})})),U=t(15),Y=t.p+"static/media/game_gamepad_1486.96473216.png",Z=t(17),z=t.n(Z);function K(){return Object(l.jsx)("nav",{children:Object(l.jsxs)("div",{className:z.a.navbar,children:[Object(l.jsxs)(U.b,{className:z.a.navlink,exact:!0,to:"/videogames",children:[Object(l.jsx)("img",{id:"logoGame",src:Y,width:"30",height:"30",className:z.a.logo,alt:""}),Object(l.jsx)("span",{href:"#/",className:z.a.titleApp,children:"Videogames Finder APP"})]}),Object(l.jsx)(U.b,{className:z.a.navlink,to:"/videogames/add-videogame",children:Object(l.jsx)("span",{className:z.a.navOption,children:"Create New Game"})})]})})}var Q=t(38),$=t(22),ee=t(3),ae=t(52),te=t.n(ae),ne=t(31),ce=t.n(ne),ie=t(18),re=t.n(ie);var se=function(e){var a=e.title,t=e.data,c=e.handleOnClick,i=e.isItemInSelection,r=Object(n.useState)(!1),s=Object(b.a)(r,2),o=s[0],d=s[1],m=a.slice(7).toLowerCase();return Object(l.jsx)("div",{className:re.a.container,children:Object(l.jsxs)("div",{className:re.a.ddWrapper,children:[Object(l.jsxs)("div",{tabIndex:0,className:re.a.ddHeader,role:"button",onKeyPress:function(){return d(!o)},onClick:function(){return d(!o)},children:[Object(l.jsx)("div",{className:"".concat(re.a.ddHeader," ").concat(re.a.titleBold,"}"),children:Object(l.jsx)("p",{children:a})}),Object(l.jsx)("div",{className:"dd-header-action",children:Object(l.jsx)("p",{children:o?"Open":"Close"})})]}),o&&Object(l.jsx)("ul",{className:re.a.ddList,children:t.map((function(e){return Object(l.jsx)("li",{className:"dd-list-item",children:Object(l.jsxs)("button",{className:"button",type:"button",onClick:function(){return c(m,e)},children:[Object(l.jsx)("span",{children:e.name}),Object(l.jsx)("span",{children:i(m,e)&&"Selected"})]})},e.id)}))})]})})},oe=t(4),le=t.n(oe);function de(e){te.a.post("".concat(G,"/videogame"),e).then((function(e){return ce()(e.data),e})).catch((function(e){return ce()(e),e}))}var me=function(){var e=Object(S.c)(),a=Object(S.d)((function(e){return e.genres})),t=Object(n.useState)({name:"",description:"",released:"",rating:0,genres:[],platforms:[]}),c=Object(b.a)(t,2),i=c[0],r=c[1],s=Object(n.useState)({}),o=Object(b.a)(s,2),d=o[0],m=o[1];function O(e){var a=e.target,t=a.name,n=a.value;r((function(e){return Object(ee.a)(Object(ee.a)({},e),{},Object($.a)({},t,n))}))}function p(e,a){if(i[e].some((function(e){return e.id===a.id}))){var t=i[e];t=t.filter((function(e){return e.id!==a.id})),r(Object(ee.a)(Object(ee.a)({},i),{},Object($.a)({},e,Object(Q.a)(t))))}else{var n=Object(ee.a)(Object(ee.a)({},i),{},Object($.a)({},e,[].concat(Object(Q.a)(i[e]),[a])));r((function(){return n}))}}function h(e,a){var t;return!!(null===(t=i[e])||void 0===t?void 0:t.find((function(e){return e.id===a.id})))}function f(){return(f=Object(u.a)(j.a.mark((function a(t){var n,c;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t.preventDefault(),!(d.name||d.description||d.platforms)){a.next=7;break}for(c in n="",d)n=d[c]+"\n"+n;ce()(n),a.next=11;break;case 7:return a.next=9,de(i);case 9:e(B()),r({name:"",description:"",released:"",rating:0,genres:[],platforms:[]});case 11:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return Object(n.useEffect)((function(){return m(function(e){var a={};return e.name||e.description?e.name?e.description?0===e.platforms.length&&(a.platforms="Must select at least one platform"):a.description="Description is required":a.name="Name is required":(a.name="Name is required",a.description="Description is required"),a}(i))}),[i]),Object(l.jsx)("div",{className:le.a.flex,children:Object(l.jsxs)("form",{className:le.a.gridContainer,onSubmit:function(e){return f.apply(this,arguments)},children:[Object(l.jsxs)("div",{className:le.a.formGroupRow,children:[Object(l.jsx)("label",{className:le.a.formLabelCol,children:"Name"}),Object(l.jsxs)("div",{className:le.a.formLabelCol,children:[Object(l.jsx)("input",{className:le.a.input,type:"text",name:"name",value:i.name,onChange:O,required:!0}),d.name&&Object(l.jsx)("p",{className:le.a.danger,children:d.name})]})]}),Object(l.jsxs)("div",{className:le.a.formGroupRow,children:[Object(l.jsx)("label",{className:le.a.formLabelCol,children:"Description"}),Object(l.jsxs)("div",{className:le.a.formLabelCol,children:[Object(l.jsx)("textarea",{className:le.a.input,name:"description",value:i.description,onChange:O,required:!0}),d.description&&Object(l.jsx)("p",{className:le.a.danger,children:d.description})]})]}),Object(l.jsxs)("div",{className:le.a.formGroupRow,children:[Object(l.jsx)("label",{className:le.a.formLabelCol,children:"Launch date"}),Object(l.jsx)("div",{className:le.a.formLabelCol,children:Object(l.jsx)("input",{type:"date",name:"released",value:i.released,onChange:O,className:le.a.input})})]}),Object(l.jsxs)("div",{className:le.a.formGroupRow,children:[Object(l.jsx)("label",{className:le.a.formLabelCol,children:"Rating"}),Object(l.jsx)("div",{className:le.a.formLabelCol,children:Object(l.jsx)("input",{className:le.a.input,type:"number",step:"any",name:"rating",value:i.rating,max:"5",min:"0",onChange:O})})]}),Object(l.jsx)(se,{title:"Select Platforms",data:P,handleOnClick:p,isItemInSelection:h}),d.platforms&&Object(l.jsx)("p",{className:"danger",children:d.platforms}),Object(l.jsx)(se,{title:"Select Genres",data:a,handleOnClick:p,isItemInSelection:h}),Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:le.a.divButton,children:Object(l.jsx)("button",{className:le.a.btn,type:"submit",children:" Create Game "})})})]})})};var je=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(r.a,{exact:!0,path:"/",component:d}),Object(l.jsx)(r.a,{path:"/videogames",component:K}),Object(l.jsx)(r.a,{exact:!0,path:"/videogames",component:q}),Object(l.jsx)(r.a,{exact:!0,path:"/videogames/details/:id",component:W}),Object(l.jsx)(r.a,{exaxt:!0,path:"/videogames/add-videogame",component:me})]})},ue=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,91)).then((function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,i=a.getLCP,r=a.getTTFB;t(e),n(e),c(e),i(e),r(e)}))},be=t(32),Oe=t(53),pe={games:[],filteredGames:[],genres:[],gameDetails:{}};var he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case y:return Object(ee.a)(Object(ee.a)({},e),{},{games:a.payload,filteredGames:a.payload});case D:return Object(ee.a)(Object(ee.a)({},e),{},{genres:a.payload});case A:return Object(ee.a)(Object(ee.a)({},e),{},{gameDetails:a.payload});case L:return Object(ee.a)(Object(ee.a)({},e),{},{games:a.payload,filteredGames:a.payload});case E:var t=e.games,n=""===a.payload?t:t.filter((function(e){var t,n=e.genres,c=Object(Oe.a)(n);try{for(c.s();!(t=c.n()).done;){if(t.value.name===a.payload)return!0}}catch(i){c.e(i)}finally{c.f()}return!1}));return 0===n.length&&(alert("No ".concat(a.payload," games found")),n=e.filteredGames),Object(ee.a)(Object(ee.a)({},e),{},{filteredGames:n});case k:var c=e.games,i=""===a.payload?c:c.filter((function(e){return!e.createdBy&&"API"===a.payload||e.createdBy===a.payload}));return 0===i.length&&(alert("No ".concat(a.payload," games found")),i=e.filteredGames),Object(ee.a)(Object(ee.a)({},e),{},{filteredGames:i});case w:var r=e.filteredGames,s=""===a.payload?r:r.sort((function(e,t){return"Asc"===a.payload?e.rating-t.rating:t.rating-e.rating}));return Object(ee.a)(Object(ee.a)({},e),{},{filteredGames:s});case R:var o=""===a.payload?e.filteredGames:e.filteredGames.sort((function(e,t){return"Asc"===a.payload?e.name.toLowerCase()>t.name.toLowerCase()?1:e.name.toLowerCase()<t.name.toLowerCase()?-1:0:e.name.toLowerCase()<t.name.toLowerCase()?1:e.name.toLowerCase()>t.name.toLowerCase()?-1:0}));return Object(ee.a)(Object(ee.a)({},e),{},{filteredGames:o});default:return e}},fe=t(54),_e=Object(be.c)(he,Object(be.b)(Object(be.a)(fe.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));i.a.render(Object(l.jsx)(S.a,{store:_e,children:Object(l.jsx)(U.a,{children:Object(l.jsx)(je,{})})}),document.getElementById("root")),ue()}},[[90,1,2]]]);
//# sourceMappingURL=main.95c777b3.chunk.js.map