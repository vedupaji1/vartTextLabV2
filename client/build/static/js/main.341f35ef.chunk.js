(this["webpackJsonpvart-prac"]=this["webpackJsonpvart-prac"]||[]).push([[0],{103:function(e){e.exports=JSON.parse('[{"key":1,"fileName":"temp.html","current":true,"data":{"blocks":[{"key":"2n4k1","text":"Write Your Text.....","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}}]')},110:function(e,t,a){},218:function(e,t,a){},219:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a(57),l=a.n(n),r=(a(110),a(20)),i=a(10),o=a(99),c=(a(97),a(29)),m=a(100),d=a.n(m),u=a(101),h=a.n(u),g=a(102),j=a.n(g),y=a(5),b=a(103),p=[{key:1,fileName:"temp.html",current:!0,data:'<!DOCTYPE html>\n   <html>\n   <body>\n   \n   <h1>The Storage clear() Method</h1>\n   \n   <p>This example demonstrates how to use the clear() method to delete all the local storage items for this domain.</p>\n   \n   <h2>Missing localStorage items?</h2>\n   \n   <p>Since you might not have any items stored in your local storage, we have added a script that creates some for you.</p>\n   \n   <button onclick="createItems()">Create local storage items</button>\n   \n   <h2>Remove Items</h2>\n   \n   <p>Click the button to delete the items:</p>\n   \n   <button onclick="deleteItems()">Delete items</button>\n   \n   <h2>Display Items</h2>\n   \n   <p>Click the button to display all items:</p>\n   \n   <button onclick="displayItems()">Display items</button>\n   \n   <p id="demo"></p>\n   \n   <script>\n   function createItems() {\n     localStorage.setItem("mytime", Date.now());\n     localStorage.setItem("myname", "John");\n     localStorage.setItem("myage", 36);\n   }\n   \n   function deleteItems() {\n     localStorage.clear();\n   }\n   \n   function displayItems() {\n     var l, i;\n     document.getElementById("demo").innerHTML = "";\n     for (i = 0; i < localStorage.length; i++) {\n     x = localStorage.key(i);\n     document.getElementById("demo").innerHTML += x + "<br>";\n     }\n   }\n   <\/script>\n   \n   </body>\n   </html>\n   '}],f=a(0),N=function(e){var t=Object(y.g)(),a="/simpleEditor"===t.pathname?"VARtTextLabSimple":"VARtTextLabMain",n=Object(s.useState)(JSON.parse(localStorage.getItem(a))),l=Object(r.a)(n,2),o=l[0],m=l[1],u=Object(s.useState)(null),g=Object(r.a)(u,2),N=g[0],O=g[1],x=Object(y.f)(),v=function(a){if("/simpleEditor"===t.pathname)try{var s=d()(o[a].data),n=h()(s),l=n.contentBlocks,r=n.entityMap,c=i.ContentState.createFromBlockArray(l,r),m=i.EditorState.createWithContent(c);e.setEditorState(m)}catch(u){localStorage.clear(),console.log(u),alert("We Have Found Some Immoral Activity From Your Side, We Have Deleted Your All Data")}else if("/"===t.pathname)try{e.setMainEditorData(o[a].data)}catch(u){}};Object(s.useEffect)((function(){window.innerWidth<=900&&"/simpleEditor"===t.pathname?(document.getElementsByClassName("textEditorMainDiv")[0].style.flexDirection="column",document.getElementsByClassName("wrapper-class")[0].style.padding="0rem",document.getElementsByClassName("wrapper-class")[0].style.width="97%",document.getElementsByClassName("toolbar-class")[0].style.overflowY="auto"):window.innerWidth<=900&&"/"===t.pathname&&(document.getElementsByClassName("textEditorMainDiv")[0].style.flexDirection="column",void 0!==document.getElementsByClassName("CodeMirror")[0]&&(document.getElementsByClassName("CodeMirror")[0].style.width="97%"))})),Object(s.useEffect)((function(){try{var e=o,a=-1;if(null!==e&&0!==e.length){for(var s=0;s<e.length;s++)if(!0===e[s].current){a=s;break}O(a),-1!==a&&v(a)}else"/simpleEditor"===t.pathname?localStorage.setItem("VARtTextLabSimple",JSON.stringify(b)):"/"===t.pathname&&localStorage.setItem("VARtTextLabMain",JSON.stringify(p)),window.location.reload()}catch(n){localStorage.clear(),alert("We Have Found Some Immoral Activity From Your Side, We Have Deleted Your All Data")}}),[]);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"supportiveDiv"}),Object(f.jsx)("div",{className:"headerHider",children:Object(f.jsx)("i",{onClick:function(){return function(){if(window.innerWidth<=900)if(20!==document.getElementsByClassName("supportiveDiv")[0].offsetHeight)document.getElementsByClassName("fa-chevron-right")[0].setAttribute("id","active"),document.getElementsByClassName("supportiveDiv")[0].style.height="2rem",document.getElementsByClassName("headerTextDiv")[0].style.width="100%",setTimeout((function(){document.getElementsByClassName("headerTextDiv")[0].style.height="0rem",document.getElementsByClassName("headerPart")[0].style.height="0rem"}),200);else{document.getElementsByClassName("fa-chevron-right")[0].setAttribute("id","unActive");var e=window.innerWidth;e<=700?(document.getElementsByClassName("headerTextDiv")[0].style.height="5.5rem",document.getElementsByClassName("supportiveDiv")[0].style.height="7rem"):(document.getElementsByClassName("headerTextDiv")[0].style.height="6rem",document.getElementsByClassName("supportiveDiv")[0].style.height="8rem"),document.getElementsByClassName("headerPart")[0].style.height="7rem",setTimeout((function(){document.getElementsByClassName("headerTextDiv")[0].style.width=e<=390?"65%":e<=450?"60%":e<=600?"50%":e<=800?"40%":"35%"}),200)}}()},className:"fa fa-chevron-right",id:"unActive","aria-hidden":"true"})}),Object(f.jsx)("div",{className:"mainMenuDiv",children:Object(f.jsxs)("div",{className:"mainMenu",children:[Object(f.jsx)("div",{className:"openFile",children:Object(f.jsx)("i",{onClick:function(){"hidden"===document.getElementsByClassName("fileShowerMenu")[0].style.visibility?(document.getElementsByClassName("fileShowerMenu")[0].style.visibility="visible",document.getElementsByClassName("fileShowerMenu")[0].style.maxHeight="15rem"):(document.getElementsByClassName("fileShowerMenu")[0].style.maxHeight="0rem",setTimeout((function(){document.getElementsByClassName("fileShowerMenu")[0].style.visibility="hidden"}),500))},className:"fa fa-folder-open"})}),Object(f.jsx)("div",{className:"createNewFile",children:Object(f.jsx)("i",{onClick:function(){return document.getElementsByClassName("createFileHead")[0].style.display="flex"},className:"fa fa-plus"})}),Object(f.jsx)("div",{className:"saveFile",children:Object(f.jsx)("i",{onClick:function(){return null===N?document.getElementsByClassName("createFileHead")[0].style.display="flex":function(){var s=o;"/simpleEditor"===t.pathname?s[N].data=Object(i.convertToRaw)(e.editorState.getCurrentContent()):"/"===t.pathname&&(s[N].data=e.getMainEditorData()),localStorage.setItem(a,JSON.stringify(s));var n=Object(c.a)(s);m(n),alert("Your File Is Saved")}()},className:"fa fa-save"})}),Object(f.jsx)("div",{className:"changeOrientation",children:Object(f.jsx)("i",{onClick:function(){window.innerWidth<=900?!0===e.showFullOutput?(e.setShowFullOutput(!1),e.setIsOutput(!1),document.getElementsByClassName("fa fa-arrow-right")[0].style.transform="rotate(90deg)",document.getElementsByClassName("outputPlace")[0].style.width="97%",document.getElementsByClassName("outputPlace")[0].style.marginRight="0rem",document.getElementsByClassName("outputPlace")[0].style.marginTop="2rem"):(document.getElementsByClassName("fa fa-arrow-right")[0].style.transform="rotate(0deg)",e.setShowFullOutput(!0),e.setIsOutput(!0)):"row"===document.getElementsByClassName("textEditorMainDiv")[0].style.flexDirection?(document.getElementsByClassName("textEditorMainDiv")[0].style.flexDirection="column","/simpleEditor"===t.pathname?(document.getElementsByClassName("wrapper-class")[0].style.padding="0rem",document.getElementsByClassName("wrapper-class")[0].style.width="97%",document.getElementsByClassName("editor-class")[0].style.height=700-document.getElementsByClassName("toolbar-class")[0].offsetHeight+"px"):"/"===t.pathname&&(document.getElementsByClassName("CodeMirror")[0].style.width="97%",document.getElementsByClassName("CodeMirror")[0].style.marginRight="0%"),document.getElementsByClassName("outputPlace")[0].style.width="97%",document.getElementsByClassName("outputPlace")[0].style.marginRight="0rem",document.getElementsByClassName("outputPlace")[0].style.marginTop="2rem",document.getElementsByClassName("fa fa-arrow-right")[0].style.transform="rotate(90deg)"):(document.getElementsByClassName("textEditorMainDiv")[0].style.flexDirection="row","/simpleEditor"===t.pathname?(document.getElementsByClassName("wrapper-class")[0].style.padding="0rem 1rem 0rem 2rem",document.getElementsByClassName("wrapper-class")[0].style.width="50%",document.getElementsByClassName("editor-class")[0].style.height=700-document.getElementsByClassName("toolbar-class")[0].offsetHeight+"px"):"/"===t.pathname&&(document.getElementsByClassName("CodeMirror")[0].style.width="49%",document.getElementsByClassName("CodeMirror")[0].style.marginRight="0.5%"),document.getElementsByClassName("outputPlace")[0].style.width="50%",document.getElementsByClassName("outputPlace")[0].style.marginRight="1rem",document.getElementsByClassName("fa fa-arrow-right")[0].style.transform="rotate(0deg)",document.getElementsByClassName("outputPlace")[0].style.marginTop="0rem")},style:{transition:"transform 0.5s"},className:"fa fa-arrow-right"})}),Object(f.jsx)("div",{onClick:function(){return function(){var a;alert("Your HTML Code Is Downloading In HTML Formate"),"/simpleEditor"===t.pathname?a=Object(i.convertToRaw)(e.editorState.getCurrentContent()).blocks.map((function(e){return e.text.trim()?e.text:"\n"})).join("\n"):"/"===t.pathname&&(a=e.getMainEditorData());var s=new Blob([a],{type:"text/plain;charset=utf-8"});j.a.saveAs(s,"textLab.html")}()},className:"downloadCode",children:Object(f.jsx)("i",{style:{marginLeft:"0rem"},className:"fa fa-download"})}),Object(f.jsxs)("div",{onClick:function(){return function(){if(window.innerWidth<=900&&!0===e.showFullOutput||"none"===document.getElementsByClassName("outputPlace")[0].style.display){var s=o;s[N].data="/simpleEditor"===t.pathname?Object(i.convertToRaw)(e.editorState.getCurrentContent()):e.getMainEditorData(),localStorage.setItem(a,JSON.stringify(s));var n=Object(c.a)(s);m(n),e.setShowFullOutput(!0),e.setIsOutput(!0),e.curLocationPath.current=t.pathname,x.push("/output")}else{var l;"/simpleEditor"===t.pathname?l=Object(i.convertToRaw)(e.editorState.getCurrentContent()).blocks.map((function(e){return e.text.trim()?e.text:"\n"})).join("\n"):"/"===t.pathname&&(l=e.getMainEditorData());var r=new Blob([l],{type:"text/html"});document.getElementById("outputDisplay").setAttribute("src",URL.createObjectURL(r))}}()},className:"runCode",children:["Run",Object(f.jsx)("i",{style:{marginLeft:"1rem"},className:"fa fa-play"})]}),Object(f.jsx)("div",{className:"fileNameShower",children:null===N||N<0?Object(f.jsx)(f.Fragment,{}):Object(f.jsx)("span",{children:o[N].fileName})})]})}),Object(f.jsxs)("div",{className:"createFileHead",children:[Object(f.jsx)("div",{style:{width:"100%"},className:"supporterForInp",children:Object(f.jsx)("i",{onClick:function(){return document.getElementsByClassName("createFileHead")[0].style.display="none"},className:"fa fa-close"})}),Object(f.jsx)("input",{type:"text",className:"fileNameInp",placeholder:"Enter File Name"}),Object(f.jsx)("div",{onClick:function(){return function(){if(null!==document.getElementsByClassName("fileNameInp")[0].value&&0!==document.getElementsByClassName("fileNameInp")[0].value.length){var s=o,n={key:null,fileName:document.getElementsByClassName("fileNameInp")[0].value+".html",current:!0,data:"/simpleEditor"===t.pathname?Object(i.convertToRaw)(e.editorState.getCurrentContent()):e.getMainEditorData()};if(null==s||0===s.length)localStorage.clear(),n.key=1,localStorage.setItem(a,JSON.stringify([n])),m([n]),O(0);else{for(var l=!0,r=0;r<s.length;r++)s[r].current=!1,s[r].fileName===n.fileName&&(l=!1);if(!0===l){n.key=s.length+1,s.push(n),localStorage.setItem(a,JSON.stringify(s));var d=Object(c.a)(s);m(d),O(o.length-1)}else alert("File Name Already Exists, Use Another Name")}alert("Your File Is Created And Saved In Local Storage"),document.getElementsByClassName("createFileHead")[0].style.display="none"}else alert("Enter File Name")}()},className:"createFile",children:"Create"})]}),Object(f.jsx)("div",{className:"fileShowerMenu",children:null!==o&&0!==o.length?o.map((function(e,t){return Object(f.jsxs)("div",{className:"MainFilNameShower",style:{display:"flex",alignItems:" center",borderBottom:" 0.2rem solid #f0f2f5"},children:[Object(f.jsx)("div",{onClick:function(){return function(e){var t=o;null!==N&&(t[N].current=!1),t[e].current=!0,localStorage.setItem(a,JSON.stringify(t));var s=Object(c.a)(t);m(s),O(e),v(e)}(t)},className:"fileShowerSub",children:e.fileName}),Object(f.jsx)("div",{className:"removeFileIcon",children:Object(f.jsx)("i",{onClick:function(){return function(e){e===N&&O(null);var t=Object(c.a)(o);if(t.splice(e,1),t.length>1)for(var s=e;s<t.length;s++)t[s].key=s+1;else 1===t.length&&(t[0].key=1);N>e&&O(N-1),localStorage.setItem(a,JSON.stringify(t)),m(t)}(t)},className:"fa fa-close"})})]},t)})):Object(f.jsx)("div",{className:"MainFilNameShower",style:{width:"21.5rem",display:"flex",alignItems:" center",borderBottom:" 0.2rem solid #f0f2f5"},children:Object(f.jsx)("div",{className:"fileShowerSub",children:"No Files"})})})]})},O=function(e){var t=Object(y.f)();Object(s.useEffect)((function(){e.htmlDataOp("fullOutputDisplay",e.curLocationPath)})),Object(s.useEffect)((function(){return function(){"/"===e.curLocationPath&&!1===e.shouldCreateEditor.current&&(alert("Please Use Our Previous Button"),t.go(1))}}),[]);return window.addEventListener("beforeunload",(function(e){e.returnValue="You have unfinished changes!"})),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"outputShowerHeader",children:[Object(f.jsx)("i",{onClick:function(){return e.shouldCreateEditor.current=!0,e.setShouldLoad(!0),void t.goBack()},className:"fa fa-arrow-left backArrowOp"})," Output"]}),Object(f.jsx)("div",{className:"outputShower",children:Object(f.jsx)("iframe",{style:{transition:"height 0.5s",height:(window.innerHeight-60-10)/10+"rem"},className:"outputDisplay",src:"",id:"fullOutputDisplay",title:"VARt TextLab"})})]})},x=function(e){var t=Object(y.g)(),a=Object(y.f)();return Object(f.jsx)(f.Fragment,{children:"/output"===t.pathname&&null!==document.getElementById("fullOutputDisplay")?Object(f.jsx)(f.Fragment,{}):Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"headerPart",children:[Object(f.jsx)("div",{className:"headerTextDiv",children:Object(f.jsx)("div",{className:"tempDivForDesign",children:Object(f.jsxs)("h1",{className:"headerName",children:[Object(f.jsx)("span",{className:"subHeaderName",style:{color:"red",fontSize:"125%"},children:"VARt"}),e.headerName]})})}),Object(f.jsx)("i",{onClick:function(){"/simpleEditor"===t.pathname?(e.shouldCreateEditor.current=!0,a.push("/")):"/"===t.pathname&&a.push("/simpleEditor")},className:"fa fa-rocket"})]})})})},v=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"div1",children:[Object(f.jsxs)("div",{className:"div2",children:[Object(f.jsx)("div",{className:"op40 err1",children:Object(f.jsx)("h1",{children:"4"})}),Object(f.jsx)("div",{className:"op41 err1",children:Object(f.jsx)("h1",{children:"0"})}),Object(f.jsx)("div",{className:"op42 err1",children:Object(f.jsx)("h1",{children:"4"})})]}),Object(f.jsx)("div",{className:"message1",children:Object(f.jsx)("h1",{children:"Something Went Wrong"})})]})})},E=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"mainLoader",children:[Object(f.jsx)("div",{className:"subLoader",children:Object(f.jsx)("div",{className:"loaderText",children:"V"})}),Object(f.jsx)("div",{className:"animatorDiv"})]})})},C=a(27),w=a.n(C),B=(a(212),a(213),a(214),function(){var e=Object(s.useRef)(!0===/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)),t=Object(s.useState)(!1),a=Object(r.a)(t,2),n=a[0],l=a[1],c=Object(s.useState)(!1),m=Object(r.a)(c,2),d=m[0],u=m[1],h=Object(s.useState)((function(){return i.EditorState.createEmpty()})),g=Object(r.a)(h,2),j=g[0],b=g[1],p=Object(s.useRef)(null),C=Object(y.g)(),B=Object(s.useRef)(null),S=Object(s.useRef)(!0),D=Object(s.useState)(!0),T=Object(r.a)(D,2),I=T[0],F=T[1];Object(s.useEffect)((function(){window.innerWidth<=900&&l(!0)}),[]),Object(s.useEffect)((function(){!function(){if("/"===C.pathname&&!0===S.current){var e=JSON.parse(localStorage.getItem("VARtTextLabMain")),t=-1;if(null!==e&&0!==e.length){for(var a=0;a<e.length;a++)if(!0===e[a].current){t=a;break}p.current=w.a.fromTextArea(document.getElementsByClassName("baseTextArea")[0],{lineNumbers:!0,autoCloseTags:!0,autoCloseBrackets:!0,theme:"dracula",mode:{name:"htmlmixed"}}),p.current.getDoc().setValue(e[t].data),S.current=!1,F(!1)}}else F(!1)}()}));var k=function(){return p.current.getValue()};return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(y.c,{children:[Object(f.jsx)(y.a,{exact:!0,path:"/output",children:!0===d&&!0===n?Object(f.jsx)(O,{setShouldLoad:F,shouldCreateEditor:S,htmlDataOp:function(e,t){if("/simpleEditor"===t){var a=Object(i.convertToRaw)(j.getCurrentContent()).blocks.map((function(e){return e.text.trim()?e.text:"\n"})).join("\n"),s=new Blob([a],{type:"text/html"});document.getElementById(e).setAttribute("src",URL.createObjectURL(s))}else if("/"===t){var n=new Blob([k()],{type:"text/html"});document.getElementById(e).setAttribute("src",URL.createObjectURL(n))}},curLocationPath:B.current}):Object(f.jsxs)(f.Fragment,{children:[" ",Object(f.jsx)(x,{headerName:"TextLab"}),Object(f.jsx)("div",{className:"supportiveDiv"}),Object(f.jsx)(v,{})]})}),Object(f.jsxs)(y.a,{exact:!0,path:"/simpleEditor",children:[Object(f.jsx)(x,{shouldCreateEditor:S,headerName:"TextLab"}),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(N,{curLocationPath:B,editorState:j,setEditorState:b,setIsOutput:u,showFullOutput:n,setShowFullOutput:l,isPhone:e.current}),Object(f.jsx)("div",{className:"toolbarHider",children:Object(f.jsx)("i",{onClick:function(){"unHiddenToolBar"===document.getElementsByClassName("toolBarShower")[0].getAttribute("id")?(document.getElementsByClassName("toolbar-class")[0].style.overflowY="auto",document.getElementsByClassName("toolbar-class")[0].style.height=(document.getElementsByClassName("toolbar-class")[0].scrollHeight-6)/10+"rem",setTimeout((function(){document.getElementsByClassName("toolBarShower")[0].setAttribute("id","hiddenToolBar"),document.getElementsByClassName("toolbar-class")[0].style.height="0rem",document.getElementsByClassName("editor-class")[0].style.height="69.2rem"}),10)):(document.getElementsByClassName("toolBarShower")[0].setAttribute("id","unHiddenToolBar"),document.getElementsByClassName("toolbar-class")[0].style.height=(document.getElementsByClassName("toolbar-class")[0].scrollHeight-6)/10+"rem",setTimeout((function(){document.getElementsByClassName("toolbar-class")[0].style.overflowY="visible",document.getElementsByClassName("toolbar-class")[0].style.height="auto",document.getElementsByClassName("editor-class")[0].style.height=(700-document.getElementsByClassName("toolbar-class")[0].offsetHeight)/10+"rem"}),500))},style:{marginTop:"-0.2rem"},id:"hiddenToolBar",className:"fa fa-chevron-right toolBarShower","aria-hidden":"true"})}),Object(f.jsxs)("div",{className:"textEditorMainDiv",children:[Object(f.jsx)(o.Editor,{editorState:j,onEditorStateChange:b,wrapperClassName:"wrapper-class",editorClassName:"editor-class",toolbarClassName:"toolbar-class"}),Object(f.jsx)("div",{style:{display:!0===n&&window.innerWidth<=900?"none":"block"},className:"outputPlace",children:Object(f.jsx)("iframe",{className:"outputDisplay",src:"",id:"outputDisplay",title:"VARt TextLab"})})]})]})]}),Object(f.jsxs)(y.a,{exact:!0,path:"/",children:[Object(f.jsx)(x,{headerName:"TextLab"}),Object(f.jsx)(N,{curLocationPath:B,getMainEditorData:k,setMainEditorData:function(e){p.current.getDoc().setValue(e)},setIsOutput:u,showFullOutput:n,setShowFullOutput:l,isPhone:e.current}),Object(f.jsxs)("div",{className:"textEditorMainDiv",children:[Object(f.jsx)("textarea",{className:"baseTextArea"}),Object(f.jsx)("div",{style:{display:!0===n&&window.innerWidth<=900?"none":"block"},className:"outputPlace",children:Object(f.jsx)("iframe",{className:"outputDisplay",src:"",id:"outputDisplay",title:"VARt TextLab"})})]}),!0===I?Object(f.jsx)(E,{}):Object(f.jsx)(f.Fragment,{})]}),Object(f.jsxs)(y.a,{children:[Object(f.jsx)(x,{headerName:"TextLab"}),Object(f.jsx)("div",{className:"supportiveDiv"}),Object(f.jsx)(v,{})]})]})})});a(218);var S=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(B,{})})},D=function(){var e="".concat("","/sw.js");navigator.serviceWorker.register(e).then((function(e){console.log("Done")}))},T=a(28);l.a.render(Object(f.jsx)(T.a,{children:Object(f.jsx)(S,{})}),document.getElementById("root")),D()}},[[219,1,2]]]);
//# sourceMappingURL=main.341f35ef.chunk.js.map