(self.webpackChunkoptical_breacher=self.webpackChunkoptical_breacher||[]).push([[798],{9798:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>F});var r=n(5893),i=n(7294);const o=n.p+"lib/example.450cf14c6c6d4f14fede9bd9f9abf560.jpg";var a={1:"1C",7:"7A",5:"55",B:"BD",E:"E9",F:"FF"};function s(e){var t=e.split(" ").map((function(e){return a[e]}));return t.some((function(e){return!e}))?[]:t}function c(e,t){void 0===t&&(t=!1);var n=e.canvas,r=n.width,i=n.height,o=r*i,a=e.getImageData(0,0,r,i),s=a.data,c=128;if(!t){for(var l=Array(256).fill(0),u=0;u<s.length;u+=4)s[u]=Math.round(.7*s[u]+.2*s[u+1]+.1*s[u+2]),l[s[u]]++;var d=0,f=0;for(u=0;u<256;u++)if((f+=l[u]||0)>.01*o){d=u;break}var h=0,v=0;for(u=255;u>=0;u--)if((v+=l[u]||0)>.01*o){h=u;break}var p=1/0,g=h-d,m=d+.9*g;for(u=d+Math.floor(.65*g);u<=m;u++)l[u]<p&&(p=l[u],c=u)}for(u=0;u<s.length;u+=4){var x=s[u]>c?0:255;s[u]=x,s[u+1]=x,s[u+2]=x}e.putImageData(a,0,0)}var l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},u=16/9;function d(e){var t=this,n=e.onCapture,a=(0,i.useState)({width:240,height:320}),s=a[0],d=a[1],f=(0,i.useState)(!1),h=f[0],v=f[1],p=(0,i.useRef)(null),g=(0,i.useRef)(null),m=(0,i.useState)(!1),x=m[0],y=m[1],b=(0,i.useState)(!1),w=b[0],j=b[1],S=(0,i.useState)(!1),k=S[0],C=S[1],E=(0,i.useState)(),I=E[0],O=E[1],T=(0,i.useState)(),P=T[0],z=T[1],D=function(e,t){var n=window.localStorage.getItem(e)||"1",r=(0,i.useState)(n),o=r[0],a=r[1];return(0,i.useEffect)((function(){"string"==typeof o&&window.localStorage.setItem(e,o)}),[o]),[o,a]}("nativeResolutionOn"),F=D[0],M=D[1],R=(0,i.useCallback)((function(){if(p.current&&g.current){var e=g.current.clientWidth,t=e/u;p.current.width=e,p.current.height=t,d({width:e,height:t})}}),[d]);return(0,i.useEffect)((function(){return window.addEventListener("resize",R),function(){window.removeEventListener("resize",R)}}),[R]),(0,i.useEffect)((function(){if(p.current)try{navigator.mediaDevices.getUserMedia({audio:!1,video:l(l({},"1"===F?{width:{ideal:7680},height:{ideal:4320}}:void 0),P?{deviceId:{exact:P}}:{facingMode:"environment"})}).then((function(e){p.current.srcObject=e}))}catch(e){throw new Error("WebRTC not supported")}}),[P,F]),(0,i.useEffect)((function(){var e,n,r,i;w&&(e=t,n=void 0,i=function(){var e;return function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,navigator.mediaDevices.enumerateDevices()];case 1:return e=t.sent(),O(e.filter((function(e){return"videoinput"===e.kind}))),[3,3];case 2:throw t.sent(),new Error("WebRTC not supported");case 3:return[2]}}))},new((r=void 0)||(r=Promise))((function(t,o){function a(e){try{c(i.next(e))}catch(e){o(e)}}function s(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var n;e.done?t(e.value):(n=e.value,n instanceof r?n:new r((function(e){e(n)}))).then(a,s)}c((i=i.apply(e,n||[])).next())})))}),[w]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",l({style:{margin:16,border:"1px solid #ff606060",flexShrink:0}},{children:[(0,r.jsxs)("div",l({style:{display:"flex",justifyContent:"space-between",padding:"0 4px",color:"#cfed57"}},{children:[(0,r.jsx)("div",{children:"CODE MATRIX"},void 0),(0,r.jsx)("div",{children:"SEQUENCE"},void 0)]}),void 0),(0,r.jsxs)("div",l({ref:g,style:{position:"relative",overflow:"hidden"}},{children:[(0,r.jsx)("video",{ref:p,playsInline:!0,onCanPlay:function(){p.current&&g.current&&(p.current.play(),v(!0),R())},style:{objectFit:"cover",display:"block"},muted:!0},void 0),h&&(0,r.jsxs)("div",l({style:{boxSizing:"border-box",position:"absolute",display:"grid",top:0,gridTemplateColumns:"5fr 2fr",padding:4,width:s.width,height:s.height}},{children:[(0,r.jsx)("div",{style:{gridColumn:1,border:"1px dashed #cfed57"}},void 0),(0,r.jsx)("div",{style:{gridColumn:2,border:"1px dashed #cfed57",borderLeft:0}},void 0)]}),void 0)]}),void 0)]}),void 0),(0,r.jsxs)("div",l({style:{margin:16,marginTop:0,overflow:"auto"}},{children:["Move the camera as close to the screen as possile. Avoid rotation or tilt.",(0,r.jsxs)("a",l({style:{marginLeft:4},href:"#",onClick:function(){y(!x)}},{children:[x?"Hide":"Show"," the example"]}),void 0),x&&(0,r.jsx)("div",{children:(0,r.jsx)("img",{style:{width:"70%"},src:o},void 0)},void 0),(0,r.jsx)("div",l({style:{marginTop:8}},{children:w?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{children:"- Specify the camera to use:"},void 0),(0,r.jsx)("select",l({onChange:function(e){z(e.target.value)},value:P},{children:I&&I.map((function(e,t){var n=e.label,i=e.deviceId;return(0,r.jsxs)("option",l({value:i},{children:[t+1,": ",n]}),i)}))}),void 0),(0,r.jsxs)("label",l({style:{display:"block",marginTop:8}},{children:["-",(0,r.jsx)("input",{type:"checkbox",checked:"1"===F,onChange:function(){M("0"===F?"1":"0")}},void 0),"Use native resolution"," ",(0,r.jsx)("small",l({style:{fontSize:"0.6em"}},{children:"(turning it off may fix the black camera issue)"}),void 0)]}),void 0),k?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{children:["iOS user: Please use Safari browser (see"," ",(0,r.jsx)("a",l({href:"https://stackoverflow.com/a/29164511",rel:"noopener",target:"_blank"},{children:"why"}),void 0),'). Make sure you have granted access to the camera (Settings - Safari - Camera - choose "Ask")']},void 0),(0,r.jsxs)("p",{children:["Android user: If none of the options above work, please check"," ",(0,r.jsx)("a",l({href:"https://github.com/govizlora/optical-breacher/issues/7",target:"_blank",rel:"noopener"},{children:"this issue"}),void 0),"."]},void 0)]},void 0):(0,r.jsx)("a",l({onClick:function(){C(!0)},href:"#"},{children:"Still not working?"}),void 0)]},void 0):(0,r.jsx)("a",l({onClick:function(){j(!0)},href:"#"},{children:"Camera not working?"}),void 0)}),void 0)]}),void 0),(0,r.jsx)("button",l({className:"main",style:{margin:"auto",marginBottom:24},onClick:function(){var e=document.createElement("canvas"),t=p.current.srcObject.getTracks()[0].getSettings(),r=t.width,i=void 0===r?1:r,o=t.height,a=void 0===o?1:o,s=0,l=0,d=i,f=a,h=e.getContext("2d");if(i/a>u){var v=a*u;s=(i-v)/2,d=v,e.height=Math.min(a,720),e.width=e.height*u}else{var g=i/u;l=(a-g)/2,f=g,e.width=Math.min(i,1280),e.height=e.width/u}h.drawImage(p.current,s,l,d,f,0,0,e.width,e.height),c(h),n(e)}},{children:"SCAN"}),void 0)]},void 0)}var f=n(7320);const h=n.p+"lib/worker.min.6ae4421cc24575c3996815e8a7e47a34.js",v=n.p+"lib/tesseract-core.wasm.e4db7f953ac7bcf9f67bd39031e42241.js";var p=function(){return(p=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},g=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((r=r.apply(e,t||[])).next())}))},m=function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},x=function(){function e(e){var t=this;this.logger=e,this.terminate=function(){return g(t,void 0,void 0,(function(){var e,t,n;return m(this,(function(r){switch(r.label){case 0:return t=(e=Promise).all,[4,this.targetsWorker];case 1:return n=[r.sent().terminate()],[4,this.matrixWorker];case 2:return[2,t.apply(e,[n.concat([r.sent().terminate])])]}}))}))},this.matrixWorker=this.createWorker("matrix",{tessedit_pageseg_mode:"6",tessedit_ocr_engine_mode:1}),this.targetsWorker=this.createWorker("targets",{tessedit_pageseg_mode:"6",tessedit_ocr_engine_mode:1})}return e.prototype.recognize=function(e,t,n){return g(this,void 0,void 0,(function(){var r,i,o;return m(this,(function(a){switch(a.label){case 0:return[4,this.matrixWorker];case 1:return r=a.sent(),[4,this.targetsWorker];case 2:return i=a.sent(),[4,Promise.all([r.recognize(e,{rectangle:{left:0,top:0,width:.65*t,height:n}}),i.recognize(e,{rectangle:{left:.65*t,top:0,width:.35*t,height:n}})])];case 3:return[2,{matrixData:(o=a.sent())[0].data,targetsData:o[1].data}]}}))}))},e.prototype.createWorker=function(e,t){return g(this,void 0,void 0,(function(){var n,r=this;return m(this,(function(i){switch(i.label){case 0:return[4,(n=(0,f.createWorker)({langPath:"./lib",workerPath:h,corePath:v,logger:function(t){return r.logger(p({name:e},t))}})).load()];case 1:return i.sent(),[4,n.loadLanguage("cyber")];case 2:return i.sent(),[4,n.initialize("cyber")];case 3:return i.sent(),[4,n.setParameters(t)];case 4:return i.sent(),[2,n]}}))}))},e}(),y=function(e){var t=e.bufferSize,n=e.orientation,r=e.index,i=e.used,o=e.matrixSize;return 0===t?[[]]:Array(o).fill(null).map((function(e,t){return"row"===n?[r,t]:[t,r]})).filter((function(e){return!i.has(e.join(","))})).map((function(e){var r=e[0],a=e[1];return y({bufferSize:t-1,orientation:"row"===n?"col":"row",index:"row"===n?a:r,used:new Set(i).add(r+","+a),matrixSize:o}).map((function(e){return function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)r[i]=o[a];return r}([[r,a]],e)}))})).flat()};var b=function(){return(b=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function w(e){var t=e.matrix,n=e.targets,o=e.onStartOver,a=window.localStorage.getItem("buffer_size")||"8",s=(0,i.useState)(parseInt(a,10)),c=s[0],l=s[1],u=(0,i.useState)(new Set),d=u[0],f=u[1],h=t.length>2&&n.length&&t[0].length>2,v=(0,i.useMemo)((function(){var e=n.filter((function(e){return!d.has(e.join("-"))}));if(h&&e.length&&c){var r=function(e,t,n){return function(e,t,n){var r=e.map((function(e){return String.fromCharCode.apply(String,e.map((function(e){var n=e[0],r=e[1];return parseInt(t[n][r],16)})))})),i=n.map((function(e){return String.fromCharCode.apply(String,e.map((function(e){return parseInt(e,16)})))})),o=0,a=r.map((function(e,t){var n=0,r=0,a=[];return i.forEach((function(t,i){var o=e.indexOf(t);if(o>-1){n+=1+.1*i;var s=o+t.length;r=Math.max(r,s),a.push(i)}})),o=Math.max(n,o),{score:n,stringIndex:t,seqLength:r,matchedIndices:a}})).filter((function(e){return e.score===o})),s=Math.min.apply(Math,a.map((function(e){return e.seqLength})));return a.filter((function(e){return e.seqLength===s})).map((function(t){var n=t.stringIndex,r=t.matchedIndices;return{seq:e[n].slice(0,s),matchedIndices:r}}))}(y({bufferSize:n,orientation:"row",index:0,used:new Set,matrixSize:e.length}),e,t)}(t,e,c)[0]||{seq:[],matchedIndices:[]},i={};return r.seq.forEach((function(e,t){var n=e[0],r=e[1];i[n+","+r]=t})),{chosenBytes:i,matched:new Set(r.matchedIndices)}}return{chosenBytes:{},matched:new Set}}),[t,n,c,d,h]);if(!h)throw Error("OCR result unacceptable");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",b({style:{margin:"8px 16px"}},{children:[(0,r.jsx)("label",{children:"BUFFER SIZE:"},void 0),(0,r.jsx)("input",{type:"number",min:2,max:10,name:"buffer-size",style:{marginLeft:8},value:c,onChange:function(e){var t=Math.min(Math.max(parseInt(e.target.value,10),4),8);l(t),window.localStorage.setItem("buffer_size",""+t)}},void 0)]}),void 0),(0,r.jsxs)("div",b({style:{margin:16,marginTop:0,border:"1px solid #cfed5780",backgroundColor:"#120f18",paddingBottom:8}},{children:[(0,r.jsx)("div",b({style:{backgroundColor:"#cfed57",color:"black",padding:"4px 16px",marginBottom:8}},{children:"BEST ROUTE"}),void 0),t.map((function(e,t){return(0,r.jsx)("div",b({style:{display:"flex",justifyContent:"center"}},{children:e.map((function(e,n){var i=v.chosenBytes[t+","+n];return(0,r.jsxs)("span",b({style:{position:"relative",display:"inline-flex",color:void 0!==i?"#ccee70":"#ccee7060",fontSize:"1.2em",textTransform:"uppercase",width:40,height:32,justifyContent:"center",alignItems:"center"}},{children:[e,void 0!==i&&(0,r.jsx)("span",b({style:{position:"absolute",fontSize:"0.6em",top:0,right:0}},{children:i+1}),void 0)]}),e+"-"+n)}))}),e.join("-")+"-"+t)}))]}),void 0),(0,r.jsxs)("div",b({style:{margin:16,marginTop:0,border:"1px solid #cfed5780",backgroundColor:"#120f18",paddingBottom:8}},{children:[(0,r.jsx)("div",b({style:{color:"#cfed57",padding:"4px 16px",marginBottom:8,borderBottom:"1px solid #cfed5780"}},{children:"TARGET SEQUENCES"}),void 0),n.filter((function(e){return!d.has(e.join("-"))})).map((function(e,t){return(0,r.jsxs)("div",b({style:{paddingLeft:16}},{children:[e.map((function(e,n){return(0,r.jsx)("div",b({style:{display:"inline-flex",color:v.matched.has(t)?"#cfed57":"#FFFFFF40",fontSize:"1.1em",textTransform:"uppercase",width:32,height:28,justifyContent:"center",alignItems:"center"}},{children:e}),e+"-"+n)})),(0,r.jsx)("a",b({style:{display:"float",float:"right",marginRight:16,color:"#cfed57"},onClick:function(){f(new Set(d).add(e.join("-")))},href:"#"},{children:"Remove"}),void 0)]}),e.join("-"))}))]}),void 0),(0,r.jsx)("button",b({style:{margin:"auto",marginBottom:24},onClick:o,className:"main"},{children:"START OVER"}),void 0)]},void 0)}var j=n(2238);const S=n.p+"lib/crop-example.e9de0e49471f69deefc6b011e4a57fa1.jpg";var k,C=function(){return(C=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},E=function(e){var t=e.handleFile,n=e.toCameraMode,o=(0,i.useState)(!1),a=o[0],s=o[1],c=(0,i.useState)(""),l=c[0],u=c[1],d=(0,i.useState)(!1),f=d[0],h=d[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("label",C({style:C({margin:16,flexBasis:300,cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"start",justifyContent:"center",padding:"0 48px"},a&&{backgroundColor:"#ff606020"}),className:"dropzone",onDragOver:function(e){e.preventDefault()},onDragEnter:function(e){e.target===e.currentTarget&&s(!0)},onDragLeave:function(e){e.target===e.currentTarget&&s(!1)},onDrop:function(e){return n=void 0,r=void 0,o=function(){var n,r,i,o;return function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}(this,(function(a){return s(!1),e.preventDefault(),n=null===(o=null===(i=e.dataTransfer)||void 0===i?void 0:i.items)||void 0===o?void 0:o[0],(r="file"===n.kind?n.getAsFile():null)&&t(r).catch((function(){u("Invalid image")})),[2]}))},new((i=void 0)||(i=Promise))((function(e,t){function a(e){try{c(o.next(e))}catch(e){t(e)}}function s(e){try{c(o.throw(e))}catch(e){t(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(a,s)}c((o=o.apply(n,r||[])).next())}));var n,r,i,o}},{children:[(0,r.jsxs)("div",C({style:{pointerEvents:"none"}},{children:[(0,r.jsx)("div",{children:"To start, you can:"},void 0),(0,r.jsx)("div",{children:"- Drag an image into the box"},void 0),(0,r.jsx)("div",{children:"- or click the box to upload an image"},void 0),(0,r.jsx)("div",{children:"- or make an in-game screenshot using WIN + SHIFT + S, then CTRL + V here"},void 0)]}),void 0),(0,r.jsx)("input",{type:"file",accept:"image/*",style:{display:"none"},onChange:function(e){var n,r=null===(n=e.target.files)||void 0===n?void 0:n[0];r&&t(r).catch((function(){u("Invalid image")}))}},void 0)]}),void 0),l&&(0,r.jsxs)("div",C({style:{marginLeft:16}},{children:["Error: ",l]}),void 0),(0,r.jsxs)("div",C({style:{margin:"0 16px"}},{children:["Please crop the screenshot before uploading.",(0,r.jsxs)("a",C({style:{marginLeft:4},href:"#",onClick:function(){h(!f)}},{children:[f?"Hide":"Show"," the example"]}),void 0),f&&(0,r.jsx)("div",{children:(0,r.jsx)("img",{style:{maxHeight:240,maxWidth:"100%"},src:S},void 0)},void 0)]}),void 0),(0,r.jsxs)("div",C({style:{margin:"8px 16px"}},{children:["Alternatively, you can"," ",(0,r.jsx)("a",C({href:"#",onClick:n},{children:"use the camera"}),void 0)]}),void 0)]},void 0)},I=function(){return(I=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},O=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((r=r.apply(e,t||[])).next())}))},T=function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},P={matrixProgress:0,targetsProgress:0,status:""},z={matrix:[],targets:[],finished:!1},D=null===(k=(new j.UAParser).getDevice())||void 0===k?void 0:k.type;function F(){var e=this,t=(0,i.useRef)(),n=(0,i.useState)(z),o=n[0],a=n[1],l=(0,i.useState)(P),u=l[0],f=l[1],h=(0,i.useState)(!0),v=h[0],p=h[1],g=(0,i.useState)("mobile"===D||"tablet"===D),m=g[0],y=g[1],b=(0,i.useCallback)((function(e){var t=e.name,n=e.status,r=e.progress,i=void 0===r?0:r;"recognizing text"===n&&f((function(e){return{status:n,matrixProgress:"matrix"===t?i:e.matrixProgress,targetsProgress:"targets"===t?i:e.targetsProgress}}))}),[]);(0,i.useEffect)((function(){return t.current=new x(b),function(){var e;null===(e=t.current)||void 0===e||e.terminate()}}),[]);var j=(0,i.useCallback)((function(n){return O(e,void 0,void 0,(function(){var e,r,i,o,c;return T(this,(function(l){switch(l.label){case 0:return p(!1),f(P),a(z),[4,t.current.recognize(n,n.width,n.height)];case 1:return e=l.sent(),r=function(e){var t=e.split("\n").map(s).filter((function(e){return e.length})),n=function(e){var t,n={};return e.forEach((function(e){n[e.length]=n[e.length]||0,n[e.length]++})),parseInt((null===(t=Object.entries(n).sort((function(e,t){return t[1]-e[1]}))[0])||void 0===t?void 0:t[0])||"0",10)}(t),r=t.filter((function(e){return e.length===n})),i=new Set;return r.forEach((function(e){e.forEach((function(e){i.add(e)}))})),{lines:r,chars:i}}(e.matrixData.text),i=r.lines,o=r.chars,u=e.targetsData.text,d=o,c=u.split("\n").map(s).filter((function(e){return e.length>=2&&e.length<=4&&e.every((function(e){return d.has(e)}))})),a({matrix:i,targets:c,finished:!0}),[2]}var u,d}))}))}),[]),S=(0,i.useCallback)((function(t){return O(e,void 0,void 0,(function(){var e,n,r;return T(this,(function(i){switch(i.label){case 0:return[4,createImageBitmap(t)];case 1:return e=i.sent(),n=document.createElement("canvas"),r=n.getContext("2d"),n.width=Math.min(e.width,1280),n.height=n.width/e.width*e.height,r.drawImage(e,0,0,e.width,e.height,0,0,n.width,n.height),c(r,!0),j(n),[2]}}))}))}),[j]);return(0,i.useEffect)((function(){var e=function(e){var t,n;if(!m){e.preventDefault();var r=null===(n=null===(t=e.clipboardData)||void 0===t?void 0:t.items)||void 0===n?void 0:n[0],i="file"===(null==r?void 0:r.kind)?r.getAsFile():null;i&&S(i)}};return document.addEventListener("paste",e),function(){document.removeEventListener("paste",e)}}),[S,m]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",I({style:{display:"flex",flexDirection:"column",height:"calc(100% - 16px)",border:"1px solid #ff606080"}},{children:v?m?(0,r.jsx)(d,{onCapture:j},void 0):(0,r.jsx)(E,{handleFile:S,toCameraMode:function(){y(!0)}},void 0):o.finished?(0,r.jsx)(w,{matrix:o.matrix,targets:o.targets,onStartOver:function(){p(!0)}},void 0):(0,r.jsx)("progress",{style:{margin:"auto"},value:"recognizing text"===u.status?(u.matrixProgress+u.targetsProgress)/2:0},void 0)}),void 0),(0,r.jsxs)("div",I({style:{height:16,fontSize:"0.6em",display:"flex",color:"#ff6060a0"}},{children:[(0,r.jsx)("span",I({style:{marginRight:4}},{children:"OPTICAL BREACHER MK.1 Rev 1.5"}),void 0),(0,r.jsx)("a",I({style:{marginLeft:"auto",color:"inherit"},href:"https://github.com/govizlora/optical-breacher",rel:"noopener",target:"_blank"},{children:"GITHUB"}),void 0),(0,r.jsx)("a",I({style:{marginLeft:4,color:"inherit"},href:"#",onClick:function(){y(!m),p(!0)}},{children:m?"SCREENSHOT MODE":"CAMERA MODE"}),void 0)]}),void 0)]},void 0)}}}]);