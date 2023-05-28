!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("@donkeyclip/motorcortex")):"function"==typeof define&&define.amd?define(["@donkeyclip/motorcortex"],e):(t="undefined"!=typeof globalThis?globalThis:t||self)["@donkeyclip/motorcortex-comets"]=e(t.MotorCortex)}(this,(function(t){"use strict";function e(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,l(r.key),r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function i(t,e,n){return(e=l(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&c(t,e)}function s(t){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},s(t)}function c(t,e){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},c(t,e)}function u(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=s(t);if(e){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}function l(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}var p="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},h=function(t){return t&&t.Math==Math&&t},d=h("object"==typeof globalThis&&globalThis)||h("object"==typeof window&&window)||h("object"==typeof self&&self)||h("object"==typeof p&&p)||function(){return this}()||p||Function("return this")(),m={},y=function(t){try{return!!t()}catch(t){return!0}},v=!y((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),b=!y((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),g=b,w=Function.prototype.call,O=g?w.bind(w):function(){return w.apply(w,arguments)},S={},x={}.propertyIsEnumerable,j=Object.getOwnPropertyDescriptor,M=j&&!x.call({1:2},1);S.f=M?function(t){var e=j(this,t);return!!e&&e.enumerable}:x;var P,E,k=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},T=b,D=Function.prototype,C=D.call,A=T&&D.bind.bind(C,C),I=T?A:function(t){return function(){return C.apply(t,arguments)}},z=I,L=z({}.toString),_=z("".slice),U=function(t){return _(L(t),8,-1)},F=y,G=U,R=Object,N=I("".split),B=F((function(){return!R("z").propertyIsEnumerable(0)}))?function(t){return"String"==G(t)?N(t,""):R(t)}:R,H=function(t){return null==t},q=H,Q=TypeError,W=function(t){if(q(t))throw Q("Can't call method on "+t);return t},V=B,K=W,X=function(t){return V(K(t))},Y="object"==typeof document&&document.all,Z={all:Y,IS_HTMLDDA:void 0===Y&&void 0!==Y},$=Z.all,J=Z.IS_HTMLDDA?function(t){return"function"==typeof t||t===$}:function(t){return"function"==typeof t},tt=J,et=Z.all,nt=Z.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:tt(t)||t===et}:function(t){return"object"==typeof t?null!==t:tt(t)},rt=d,ot=J,it=function(t){return ot(t)?t:void 0},at=function(t,e){return arguments.length<2?it(rt[t]):rt[t]&&rt[t][e]},st=I({}.isPrototypeOf),ct=d,ut="undefined"!=typeof navigator&&String(navigator.userAgent)||"",ft=ct.process,lt=ct.Deno,pt=ft&&ft.versions||lt&&lt.version,ht=pt&&pt.v8;ht&&(E=(P=ht.split("."))[0]>0&&P[0]<4?1:+(P[0]+P[1])),!E&&ut&&(!(P=ut.match(/Edge\/(\d+)/))||P[1]>=74)&&(P=ut.match(/Chrome\/(\d+)/))&&(E=+P[1]);var dt=E,mt=dt,yt=y,vt=d.String,bt=!!Object.getOwnPropertySymbols&&!yt((function(){var t=Symbol();return!vt(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&mt&&mt<41})),gt=bt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,wt=at,Ot=J,St=st,xt=Object,jt=gt?function(t){return"symbol"==typeof t}:function(t){var e=wt("Symbol");return Ot(e)&&St(e.prototype,xt(t))},Mt=String,Pt=J,Et=function(t){try{return Mt(t)}catch(t){return"Object"}},kt=TypeError,Tt=function(t){if(Pt(t))return t;throw kt(Et(t)+" is not a function")},Dt=H,Ct=O,At=J,It=nt,zt=TypeError,Lt={exports:{}},_t=d,Ut=Object.defineProperty,Ft=function(t,e){try{Ut(_t,t,{value:e,configurable:!0,writable:!0})}catch(n){_t[t]=e}return e},Gt=Ft,Rt="__core-js_shared__",Nt=d[Rt]||Gt(Rt,{}),Bt=Nt;(Lt.exports=function(t,e){return Bt[t]||(Bt[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.30.2",mode:"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.30.2/LICENSE",source:"https://github.com/zloirock/core-js"});var Ht=W,qt=Object,Qt=function(t){return qt(Ht(t))},Wt=Qt,Vt=I({}.hasOwnProperty),Kt=Object.hasOwn||function(t,e){return Vt(Wt(t),e)},Xt=I,Yt=0,Zt=Math.random(),$t=Xt(1..toString),Jt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+$t(++Yt+Zt,36)},te=d,ee=Lt.exports,ne=Kt,re=Jt,oe=bt,ie=gt,ae=te.Symbol,se=ee("wks"),ce=ie?ae.for||ae:ae&&ae.withoutSetter||re,ue=function(t){return ne(se,t)||(se[t]=oe&&ne(ae,t)?ae[t]:ce("Symbol."+t)),se[t]},fe=O,le=nt,pe=jt,he=function(t,e){var n=t[e];return Dt(n)?void 0:Tt(n)},de=function(t,e){var n,r;if("string"===e&&At(n=t.toString)&&!It(r=Ct(n,t)))return r;if(At(n=t.valueOf)&&!It(r=Ct(n,t)))return r;if("string"!==e&&At(n=t.toString)&&!It(r=Ct(n,t)))return r;throw zt("Can't convert object to primitive value")},me=TypeError,ye=ue("toPrimitive"),ve=function(t,e){if(!le(t)||pe(t))return t;var n,r=he(t,ye);if(r){if(void 0===e&&(e="default"),n=fe(r,t,e),!le(n)||pe(n))return n;throw me("Can't convert object to primitive value")}return void 0===e&&(e="number"),de(t,e)},be=jt,ge=function(t){var e=ve(t,"string");return be(e)?e:e+""},we=nt,Oe=d.document,Se=we(Oe)&&we(Oe.createElement),xe=function(t){return Se?Oe.createElement(t):{}},je=!v&&!y((function(){return 7!=Object.defineProperty(xe("div"),"a",{get:function(){return 7}}).a})),Me=v,Pe=O,Ee=S,ke=k,Te=X,De=ge,Ce=Kt,Ae=je,Ie=Object.getOwnPropertyDescriptor;m.f=Me?Ie:function(t,e){if(t=Te(t),e=De(e),Ae)try{return Ie(t,e)}catch(t){}if(Ce(t,e))return ke(!Pe(Ee.f,t,e),t[e])};var ze={},Le=v&&y((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),_e=nt,Ue=String,Fe=TypeError,Ge=function(t){if(_e(t))return t;throw Fe(Ue(t)+" is not an object")},Re=v,Ne=je,Be=Le,He=Ge,qe=ge,Qe=TypeError,We=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,Ke="enumerable",Xe="configurable",Ye="writable";ze.f=Re?Be?function(t,e,n){if(He(t),e=qe(e),He(n),"function"==typeof t&&"prototype"===e&&"value"in n&&Ye in n&&!n.writable){var r=Ve(t,e);r&&r.writable&&(t[e]=n.value,n={configurable:Xe in n?n.configurable:r.configurable,enumerable:Ke in n?n.enumerable:r.enumerable,writable:!1})}return We(t,e,n)}:We:function(t,e,n){if(He(t),e=qe(e),He(n),Ne)try{return We(t,e,n)}catch(t){}if("get"in n||"set"in n)throw Qe("Accessors not supported");return"value"in n&&(t[e]=n.value),t};var Ze=ze,$e=k,Je=v?function(t,e,n){return Ze.f(t,e,$e(1,n))}:function(t,e,n){return t[e]=n,t},tn={exports:{}},en=v,nn=Kt,rn=Function.prototype,on=en&&Object.getOwnPropertyDescriptor,an=nn(rn,"name"),sn={EXISTS:an,PROPER:an&&"something"===function(){}.name,CONFIGURABLE:an&&(!en||en&&on(rn,"name").configurable)},cn=J,un=Nt,fn=I(Function.toString);cn(un.inspectSource)||(un.inspectSource=function(t){return fn(t)});var ln,pn,hn,dn=un.inspectSource,mn=J,yn=d.WeakMap,vn=mn(yn)&&/native code/.test(String(yn)),bn=Lt.exports,gn=Jt,wn=bn("keys"),On={},Sn=vn,xn=d,jn=nt,Mn=Je,Pn=Kt,En=Nt,kn=function(t){return wn[t]||(wn[t]=gn(t))},Tn=On,Dn="Object already initialized",Cn=xn.TypeError,An=xn.WeakMap;if(Sn||En.state){var In=En.state||(En.state=new An);In.get=In.get,In.has=In.has,In.set=In.set,ln=function(t,e){if(In.has(t))throw Cn(Dn);return e.facade=t,In.set(t,e),e},pn=function(t){return In.get(t)||{}},hn=function(t){return In.has(t)}}else{var zn=kn("state");Tn[zn]=!0,ln=function(t,e){if(Pn(t,zn))throw Cn(Dn);return e.facade=t,Mn(t,zn,e),e},pn=function(t){return Pn(t,zn)?t[zn]:{}},hn=function(t){return Pn(t,zn)}}var Ln={set:ln,get:pn,has:hn,enforce:function(t){return hn(t)?pn(t):ln(t,{})},getterFor:function(t){return function(e){var n;if(!jn(e)||(n=pn(e)).type!==t)throw Cn("Incompatible receiver, "+t+" required");return n}}},_n=I,Un=y,Fn=J,Gn=Kt,Rn=v,Nn=sn.CONFIGURABLE,Bn=dn,Hn=Ln.enforce,qn=Ln.get,Qn=String,Wn=Object.defineProperty,Vn=_n("".slice),Kn=_n("".replace),Xn=_n([].join),Yn=Rn&&!Un((function(){return 8!==Wn((function(){}),"length",{value:8}).length})),Zn=String(String).split("String"),$n=tn.exports=function(t,e,n){"Symbol("===Vn(Qn(e),0,7)&&(e="["+Kn(Qn(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!Gn(t,"name")||Nn&&t.name!==e)&&(Rn?Wn(t,"name",{value:e,configurable:!0}):t.name=e),Yn&&n&&Gn(n,"arity")&&t.length!==n.arity&&Wn(t,"length",{value:n.arity});try{n&&Gn(n,"constructor")&&n.constructor?Rn&&Wn(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var r=Hn(t);return Gn(r,"source")||(r.source=Xn(Zn,"string"==typeof e?e:"")),t};Function.prototype.toString=$n((function(){return Fn(this)&&qn(this).source||Bn(this)}),"toString");var Jn=J,tr=ze,er=tn.exports,nr=Ft,rr={},or=Math.ceil,ir=Math.floor,ar=Math.trunc||function(t){var e=+t;return(e>0?ir:or)(e)},sr=function(t){var e=+t;return e!=e||0===e?0:ar(e)},cr=sr,ur=Math.max,fr=Math.min,lr=sr,pr=Math.min,hr=function(t){return t>0?pr(lr(t),9007199254740991):0},dr=function(t){return hr(t.length)},mr=X,yr=function(t,e){var n=cr(t);return n<0?ur(n+e,0):fr(n,e)},vr=dr,br=function(t){return function(e,n,r){var o,i=mr(e),a=vr(i),s=yr(r,a);if(t&&n!=n){for(;a>s;)if((o=i[s++])!=o)return!0}else for(;a>s;s++)if((t||s in i)&&i[s]===n)return t||s||0;return!t&&-1}},gr={includes:br(!0),indexOf:br(!1)},wr=Kt,Or=X,Sr=gr.indexOf,xr=On,jr=I([].push),Mr=function(t,e){var n,r=Or(t),o=0,i=[];for(n in r)!wr(xr,n)&&wr(r,n)&&jr(i,n);for(;e.length>o;)wr(r,n=e[o++])&&(~Sr(i,n)||jr(i,n));return i},Pr=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");rr.f=Object.getOwnPropertyNames||function(t){return Mr(t,Pr)};var Er={};Er.f=Object.getOwnPropertySymbols;var kr=at,Tr=rr,Dr=Er,Cr=Ge,Ar=I([].concat),Ir=kr("Reflect","ownKeys")||function(t){var e=Tr.f(Cr(t)),n=Dr.f;return n?Ar(e,n(t)):e},zr=Kt,Lr=Ir,_r=m,Ur=ze,Fr=y,Gr=J,Rr=/#|\.prototype\./,Nr=function(t,e){var n=Hr[Br(t)];return n==Qr||n!=qr&&(Gr(e)?Fr(e):!!e)},Br=Nr.normalize=function(t){return String(t).replace(Rr,".").toLowerCase()},Hr=Nr.data={},qr=Nr.NATIVE="N",Qr=Nr.POLYFILL="P",Wr=Nr,Vr=d,Kr=m.f,Xr=Je,Yr=function(t,e,n,r){r||(r={});var o=r.enumerable,i=void 0!==r.name?r.name:e;if(Jn(n)&&er(n,i,r),r.global)o?t[e]=n:nr(e,n);else{try{r.unsafe?t[e]&&(o=!0):delete t[e]}catch(t){}o?t[e]=n:tr.f(t,e,{value:n,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return t},Zr=Ft,$r=function(t,e,n){for(var r=Lr(e),o=Ur.f,i=_r.f,a=0;a<r.length;a++){var s=r[a];zr(t,s)||n&&zr(n,s)||o(t,s,i(e,s))}},Jr=Wr,to=U,eo=Array.isArray||function(t){return"Array"==to(t)},no=TypeError,ro=ge,oo=ze,io=k,ao={};ao[ue("toStringTag")]="z";var so="[object z]"===String(ao),co=J,uo=U,fo=ue("toStringTag"),lo=Object,po="Arguments"==uo(function(){return arguments}()),ho=I,mo=y,yo=J,vo=so?uo:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=lo(t),fo))?n:po?uo(e):"Object"==(r=uo(e))&&co(e.callee)?"Arguments":r},bo=dn,go=function(){},wo=[],Oo=at("Reflect","construct"),So=/^\s*(?:class|function)\b/,xo=ho(So.exec),jo=!So.exec(go),Mo=function(t){if(!yo(t))return!1;try{return Oo(go,wo,t),!0}catch(t){return!1}},Po=function(t){if(!yo(t))return!1;switch(vo(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return jo||!!xo(So,bo(t))}catch(t){return!0}};Po.sham=!0;var Eo=!Oo||mo((function(){var t;return Mo(Mo.call)||!Mo(Object)||!Mo((function(){t=!0}))||t}))?Po:Mo,ko=eo,To=Eo,Do=nt,Co=ue("species"),Ao=Array,Io=function(t){var e;return ko(t)&&(e=t.constructor,(To(e)&&(e===Ao||ko(e.prototype))||Do(e)&&null===(e=e[Co]))&&(e=void 0)),void 0===e?Ao:e},zo=y,Lo=dt,_o=ue("species"),Uo=function(t,e){var n,r,o,i,a,s=t.target,c=t.global,u=t.stat;if(n=c?Vr:u?Vr[s]||Zr(s,{}):(Vr[s]||{}).prototype)for(r in e){if(i=e[r],o=t.dontCallGetSet?(a=Kr(n,r))&&a.value:n[r],!Jr(c?r:s+(u?".":"#")+r,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;$r(i,o)}(t.sham||o&&o.sham)&&Xr(i,"sham",!0),Yr(n,r,i,t)}},Fo=y,Go=eo,Ro=nt,No=Qt,Bo=dr,Ho=function(t){if(t>9007199254740991)throw no("Maximum allowed index exceeded");return t},qo=function(t,e,n){var r=ro(e);r in t?oo.f(t,r,io(0,n)):t[r]=n},Qo=function(t,e){return new(Io(t))(0===e?0:e)},Wo=function(t){return Lo>=51||!zo((function(){var e=[];return(e.constructor={})[_o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))},Vo=dt,Ko=ue("isConcatSpreadable"),Xo=Vo>=51||!Fo((function(){var t=[];return t[Ko]=!1,t.concat()[0]!==t})),Yo=function(t){if(!Ro(t))return!1;var e=t[Ko];return void 0!==e?!!e:Go(t)};Uo({target:"Array",proto:!0,arity:1,forced:!Xo||!Wo("concat")},{concat:function(t){var e,n,r,o,i,a=No(this),s=Qo(a,0),c=0;for(e=-1,r=arguments.length;e<r;e++)if(Yo(i=-1===e?a:arguments[e]))for(o=Bo(i),Ho(c+o),n=0;n<o;n++,c++)n in i&&qo(s,c,i[n]);else Ho(c+1),qo(s,c++,i);return s.length=c,s}});function Zo(t,e){if(null===e){e=[];for(var n=0;n<t.numberOfElements;n++)e.push([])}for(var r=t.divisions||4,o=t.numberOfElements%r,i=(t.numberOfElements-o)/r,a=(t.to-t.from)/r,s=[],c=0;c<i;c++)for(var u=0;u<r;u++){var f={from:t.from+a*u,to:t.from+a*(u+1)};s.push(f)}if(0!==o)for(var l=(t.to-t.from)/o,p=0;p<o;p++){var h={from:t.from+l*p,to:t.from+l*(p+1)};s.push(h)}for(var d=0;d<s.length;d++)e[d].push(Math.random()*(s[d].to-s[d].from)+s[d].from);return function(t){for(var e,n,r=t.length;0!==r;)n=Math.floor(Math.random()*r),e=t[r-=1],t[r]=t[n],t[n]=e;return t}(e)}function $o(t){var e=Zo({numberOfElements:t.numberOfElements,from:(t.minDuration||.2)*t.duration,to:(t.maxDuration||.6)*t.duration,divisions:t.divisions||4},null);e=Zo({numberOfElements:t.numberOfElements,from:.3,to:1,divisions:t.divisions||4},e);for(var n={ms:0,reference:null},r=0;r<e.length;r++){var o=e[r];o[0]=Math.round(o[0]),n.ms<o[0]&&(n={ms:o[0],reference:o}),o[1]=Math.floor(t.duration-o[0]<t.duration*(t.maxDuration||.6)?(t.duration-o[0])*o[1]:(t.maxDuration||.6)*t.duration*o[1])}return n.reference[1]=t.duration-n.reference[0],e}var Jo=function(e){a(i,e);var r=f(i);function i(){return n(this,i),r.apply(this,arguments)}return o(i,[{key:"html",get:function(){this.comets=$o({duration:this.attrs.duration/this.attrs.repeats,numberOfElements:this.attrs.items,minDuration:.1,maxDuration:.9});for(var t=0;t<this.comets.length;t++){var e=this.comets[t],n=e[0]/(this.attrs.duration/this.attrs.repeats),r=(this.attrs.cometMaxSize-this.attrs.cometMinSize)*(1-n)+this.attrs.cometMinSize;e.push(r)}var o=61*Math.PI/180,i=this.attrs.height*Math.tan(o);this.comets=Zo({from:0,to:this.attrs.width+i,numberOfElements:this.attrs.items},this.comets);var a=[];this.itemData=[];for(var s=61*Math.PI/180,c=29*Math.PI/180,u=0;u<this.attrs.items;u++){var f=this.comets[u][2],l=f*Math.sin(c),p=f*Math.sin(s),h=this.comets[u][3];this.itemData.push({left:h,top:-p,width:l,size:f}),a+=' \n                <svg class="comet-svg comet-svg-'.concat(u,'" style="left: ').concat(h,"px; top: -").concat(p,"px; width: ").concat(l,"px; height: ").concat(p,'px;" xmlns="http://www.w3.org/2000/svg" class="comet-green-svg" data-name="Layer 1" viewBox="0 0 450 270.44">\n                <defs>\n                    <linearGradient id="b" x1="-56.99" x2="-56.74" y1="394.68" y2="394.93" gradientTransform="matrix(1363.47 0 0 -819.42 77776.05 323638.12)" gradientUnits="userSpaceOnUse">\n                    <stop offset="0" stop-color="').concat(this.attrs.auraOuter[0],'" stop-opacity=".59"/>\n                    <stop offset="1" stop-color="').concat(this.attrs.auraOuter[1],'" stop-opacity="0"/>\n                    </linearGradient>\n                    <linearGradient id="d" x1="-56.97" x2="-56.79" y1="394.95" y2="395.11" gradientTransform="matrix(900.62 0 0 -542.55 51377.26 214502.16)" gradientUnits="userSpaceOnUse">\n                    <stop offset="0" stop-color="').concat(this.attrs.auraIner[0],'"/>\n                    <stop offset=".31" stop-color="').concat(this.attrs.auraIner[1],'" stop-opacity=".97"/>\n                    <stop offset="1" stop-color="').concat(this.attrs.auraIner[2],'" stop-opacity="0"/>\n                    </linearGradient>\n                    <linearGradient id="f" x1="-56.81" x2="-56.49" y1="399.49" y2="399.76" gradientTransform="matrix(116.79 0 0 -75.59 6649.18 30453.64)" gradientUnits="userSpaceOnUse">\n                    <stop offset="0" stop-color="').concat(this.attrs.meteoriteColors[0],'"/>\n                    <stop offset="1" stop-color="').concat(this.attrs.meteoriteColors[1],'"/>\n                    </linearGradient>\n                    <mask id="a" width="450" height="270.44" x="0" y="0" maskUnits="userSpaceOnUse">\n                    <path fill="#fff" fill-rule="evenodd" d="M11.33 230a21.52 21.52 0 0020.31 38L450 38 429.7 0 11.33 230z"/>\n                    </mask>\n                    <mask id="c" width="297.24" height="179.06" x="7.51" y="84.83" maskUnits="userSpaceOnUse">\n                    <path fill="#fff" fill-rule="evenodd" d="M14.65 238.41a13.55 13.55 0 0012.78 23.89l277.32-153.58L292 84.83 14.65 238.41z"/>\n                    </mask>\n                    <mask id="e" width="38.55" height="24.95" x="12.81" y="234.29" maskUnits="userSpaceOnUse">\n                    <path fill="#fff" fill-rule="evenodd" d="M17.69 241.85a9.24 9.24 0 008.73 16.29c4.5-2.41 24.94-23.85 24.94-23.85s-29.17 5.15-33.67 7.56"/>\n                    </mask>\n                </defs>\n                <g mask="url(#a)">\n                    <path fill="url(#b)" fill-rule="evenodd" d="M11.33 230a21.52 21.52 0 0020.31 38L450 38 429.7 0 11.33 230z"/>\n                </g>\n                <g mask="url(#c)">\n                    <path fill="url(#d)" fill-rule="evenodd" d="M14.65 238.41a13.55 13.55 0 0012.78 23.89l277.32-153.58L292 84.83 14.65 238.41z"/>\n                </g>\n                <g mask="url(#e)">\n                    <path fill="url(#f)" fill-rule="evenodd" d="M17.69 241.85a9.24 9.24 0 008.73 16.29c4.5-2.41 24.94-23.85 24.94-23.85s-29.17 5.15-33.67 7.56"/>\n                </g>\n                </svg>\n            ')}return'\n            <div class="wrapper">\n            '.concat(a,"\n            </div>\n        ")}},{key:"css",get:function(){return"\n            .wrapper{\n                width: ".concat(this.attrs.width,"px;\n                height:").concat(this.attrs.height,"px;\n            }\n            .comet-svg{\n                position: absolute;\n                z-index: 3;\n            }\n        ")}},{key:"buildTree",value:function(){for(var e=0;e<this.comets.length;e++){var n=-29*Math.PI/180,r=new t.CSSEffect({animatedAttrs:{left:"-".concat(this.itemData[e].width,"px"),top:"".concat(Math.tan(n)*(-this.itemData[e].width-this.itemData[e].left)+this.itemData[e].top,"px")}},{selector:".comet-svg-".concat(e),duration:this.comets[e][0],delay:this.comets[e][1],repeats:this.attrs.repeats});this.addIncident(r,0)}}}]),i}(t.HTMLClip),ti=function(e){a(i,e);var r=f(i);function i(){return n(this,i),r.apply(this,arguments)}return o(i,[{key:"html",get:function(){for(var t=function(t){t.divisions||(t.divisions=[]);for(var e=null,n=0;n<t.dimensions.length;n++){var r=t.dimensions[n],o=t.divisions[n]||4;e=Zo({from:r[0],to:r[1],numberOfElements:t.numberOfElements,divisions:o},e)}return e}({dimensions:[[0,this.attrs.width],[0,this.attrs.height],[this.attrs.starMinSize,this.attrs.starMaxSize]],divisions:[Math.floor(this.attrs.items/2),Math.floor(this.attrs.items/2),this.attrs.items],numberOfElements:this.attrs.items}),e=[],n=0;n<this.attrs.items;n++){var r=t[n][2],o=t[n][1],i=t[n][0];e+=' \n              <svg class="stars-svg stars-svg-'.concat(n,'" width="').concat(r,'px" height="').concat(r,'px" style="left: ').concat(i,"px; top:").concat(o,'px;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50.15">\n                <defs>\n                  <radialGradient id="radial-gradient" cx="25.98" cy="26.84" r="22.27" gradientUnits="userSpaceOnUse">\n                    <stop offset="0" stop-color="#fff9a6" stop-opacity="0.9"/>\n                    <stop offset="0.07" stop-color="#fffab3" stop-opacity="0.77"/>\n                    <stop offset="0.2" stop-color="#fffbc7" stop-opacity="0.57"/>\n                    <stop offset="0.34" stop-color="#fffcd8" stop-opacity="0.4"/>\n                    <stop offset="0.47" stop-color="#fffde6" stop-opacity="0.25"/>\n                    <stop offset="0.6" stop-color="#fffef1" stop-opacity="0.14"/>\n                    <stop offset="0.74" stop-color="#fffff9" stop-opacity="0.06"/>\n                    <stop offset="0.87" stop-color="#fffffd" stop-opacity="0.02"/>\n                    <stop offset="1" stop-color="#fff" stop-opacity="0"/>\n                  </radialGradient>\n                </defs>\n                <title>Asset 10</title>\n                <g id="Layer_2" data-name="Layer 2">\n                  <g id="Layer_2-2" data-name="Layer 2">\n                    <g>\n                      <circle cx="25.98" cy="26.84" r="22.27" fill="url(#radial-gradient)"/>\n                      <path id="stars-svg-path-1" d="M.15,26.27q13.13-2,18.73-4.52Q24.31,19.32,26,.16h0A.18.18,0,0,1,26.14,0a.19.19,0,0,1,.17.17q.6,17.88,6.81,21.58t16.72,4.62h0a.18.18,0,0,1,.16.2.19.19,0,0,1-.16.16Q38.1,27.86,33.12,32.05T26.49,50h0a.18.18,0,0,1-.36,0Q25.31,36.65,18.88,32T.17,26.62h0A.17.17,0,0,1,0,26.43.18.18,0,0,1,.15,26.27Z" fill="').concat(this.attrs.starColor,'" fill-rule="evenodd"/>\n                    </g>\n                  </g>\n                </g>\n              </svg>')}return'\n    <div class="wrapper">\n      '.concat(e,"\n    </div>\n    \n    ")}},{key:"css",get:function(){return"\n    .wrapper{\n      width: ".concat(this.attrs.width,"px;\n      height:").concat(this.attrs.height,"px;\n      \n    }\n    .stars-svg{\n      position: absolute;\n      z-index: 3;\n\n    }\n\n  ")}},{key:"buildTree",value:function(){function e(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!0===e?{opacity:t}:{transform:{scale:t}}}for(var n=$o({duration:this.attrs.duration/this.attrs.repeats,divisions:3,numberOfElements:this.attrs.items,minDuration:.2,maxDuration:1}),r=0;r<this.attrs.items;r++){var o=new t.Combo({incidents:[{incidentClass:t.CSSEffect,attrs:{animatedAttrs:e(0,"opacity"===this.attrs.blinkType)},props:{duration:Math.round(n[r][1]/2)},position:0},{incidentClass:t.CSSEffect,attrs:{animatedAttrs:e(1,"opacity"===this.attrs.blinkType)},props:{duration:Math.round(n[r][1]/2)},position:Math.round(n[r][1]/2)}]},{selector:".stars-svg-".concat(r),delay:n[r][0],repeats:this.attrs.repeats});this.addIncident(o,0)}}}]),i}(t.HTMLClip),ei={npm_name:"@donkeyclip/motorcortex-comets",version:"1.1.0",incidents:[{exportable:Jo,name:"Comets",attributesValidationRules:function(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?e(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},{width:{optional:!1,type:"number"},height:{optional:!1,type:"number"},cometMaxSize:{optional:!1,type:"number"},cometMinSize:{optional:!1,type:"number"},meteoriteColors:{optional:!0,type:"array",min:2,items:{optional:!0,type:"color"}},auraIner:{optional:!0,type:"array",min:3,items:{optional:!0,type:"color"}},auraOuter:{optional:!0,type:"array",min:2,items:{optional:!0,type:"color"}},items:{optional:!1,type:"number"},repeats:{optional:!1,type:"number"},duration:{optional:!1,type:"number"}})},{exportable:ti,name:"Stars"}]};return ei}));
