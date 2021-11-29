!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n(require("@donkeyclip/motorcortex")):"function"==typeof define&&define.amd?define(["@donkeyclip/motorcortex"],n):(t="undefined"!=typeof globalThis?globalThis:t||self)["@donkeyclip/motorcortex-comets"]=n(t.MotorCortex)}(this,(function(t){"use strict";function n(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,n,e){return n&&r(t.prototype,n),e&&r(t,e),t}function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function a(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&c(t,n)}function s(t){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},s(t)}function c(t,n){return c=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},c(t,n)}function u(t,n){if(n&&("object"==typeof n||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function f(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=s(t);if(n){var o=s(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return u(this,e)}}var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},p=function(t){return t&&t.Math==Math&&t},h=p("object"==typeof globalThis&&globalThis)||p("object"==typeof window&&window)||p("object"==typeof self&&self)||p("object"==typeof l&&l)||function(){return this}()||Function("return this")(),d={},m=function(t){try{return!!t()}catch(t){return!0}},y=!m((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),v=Function.prototype.call,g=v.bind?v.bind(v):function(){return v.apply(v,arguments)},b={},w={}.propertyIsEnumerable,O=Object.getOwnPropertyDescriptor,x=O&&!w.call({1:2},1);b.f=x?function(t){var n=O(this,t);return!!n&&n.enumerable}:w;var S,j,M=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}},E=Function.prototype,P=E.bind,k=E.call,T=P&&P.bind(k),D=P?function(t){return t&&T(k,t)}:function(t){return t&&function(){return k.apply(t,arguments)}},C=D,z=C({}.toString),A=C("".slice),I=function(t){return A(z(t),8,-1)},L=D,U=m,_=I,G=h.Object,F=L("".split),R=U((function(){return!G("z").propertyIsEnumerable(0)}))?function(t){return"String"==_(t)?F(t,""):G(t)}:G,B=h.TypeError,N=function(t){if(null==t)throw B("Can't call method on "+t);return t},q=R,Q=N,H=function(t){return q(Q(t))},V=function(t){return"function"==typeof t},W=V,K=function(t){return"object"==typeof t?null!==t:W(t)},X=h,Y=V,Z=function(t){return Y(t)?t:void 0},$=function(t,n){return arguments.length<2?Z(X[t]):X[t]&&X[t][n]},J=D({}.isPrototypeOf),tt=h,nt=$("navigator","userAgent")||"",et=tt.process,rt=tt.Deno,ot=et&&et.versions||rt&&rt.version,it=ot&&ot.v8;it&&(j=(S=it.split("."))[0]>0&&S[0]<4?1:+(S[0]+S[1])),!j&&nt&&(!(S=nt.match(/Edge\/(\d+)/))||S[1]>=74)&&(S=nt.match(/Chrome\/(\d+)/))&&(j=+S[1]);var at=j,st=at,ct=m,ut=!!Object.getOwnPropertySymbols&&!ct((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&st&&st<41})),ft=ut&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,lt=$,pt=V,ht=J,dt=ft,mt=h.Object,yt=dt?function(t){return"symbol"==typeof t}:function(t){var n=lt("Symbol");return pt(n)&&ht(n.prototype,mt(t))},vt=h.String,gt=V,bt=function(t){try{return vt(t)}catch(t){return"Object"}},wt=h.TypeError,Ot=function(t){if(gt(t))return t;throw wt(bt(t)+" is not a function")},xt=g,St=V,jt=K,Mt=h.TypeError,Et={exports:{}},Pt=h,kt=Object.defineProperty,Tt=function(t,n){try{kt(Pt,t,{value:n,configurable:!0,writable:!0})}catch(e){Pt[t]=n}return n},Dt=Tt,Ct="__core-js_shared__",zt=h[Ct]||Dt(Ct,{}),At=zt;(Et.exports=function(t,n){return At[t]||(At[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.19.2",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"});var It=N,Lt=h.Object,Ut=function(t){return Lt(It(t))},_t=Ut,Gt=D({}.hasOwnProperty),Ft=Object.hasOwn||function(t,n){return Gt(_t(t),n)},Rt=D,Bt=0,Nt=Math.random(),qt=Rt(1..toString),Qt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+qt(++Bt+Nt,36)},Ht=h,Vt=Et.exports,Wt=Ft,Kt=Qt,Xt=ut,Yt=ft,Zt=Vt("wks"),$t=Ht.Symbol,Jt=$t&&$t.for,tn=Yt?$t:$t&&$t.withoutSetter||Kt,nn=function(t){if(!Wt(Zt,t)||!Xt&&"string"!=typeof Zt[t]){var n="Symbol."+t;Xt&&Wt($t,t)?Zt[t]=$t[t]:Zt[t]=Yt&&Jt?Jt(n):tn(n)}return Zt[t]},en=g,rn=K,on=yt,an=function(t,n){var e=t[n];return null==e?void 0:Ot(e)},sn=function(t,n){var e,r;if("string"===n&&St(e=t.toString)&&!jt(r=xt(e,t)))return r;if(St(e=t.valueOf)&&!jt(r=xt(e,t)))return r;if("string"!==n&&St(e=t.toString)&&!jt(r=xt(e,t)))return r;throw Mt("Can't convert object to primitive value")},cn=nn,un=h.TypeError,fn=cn("toPrimitive"),ln=function(t,n){if(!rn(t)||on(t))return t;var e,r=an(t,fn);if(r){if(void 0===n&&(n="default"),e=en(r,t,n),!rn(e)||on(e))return e;throw un("Can't convert object to primitive value")}return void 0===n&&(n="number"),sn(t,n)},pn=yt,hn=function(t){var n=ln(t,"string");return pn(n)?n:n+""},dn=K,mn=h.document,yn=dn(mn)&&dn(mn.createElement),vn=function(t){return yn?mn.createElement(t):{}},gn=!y&&!m((function(){return 7!=Object.defineProperty(vn("div"),"a",{get:function(){return 7}}).a})),bn=y,wn=g,On=b,xn=M,Sn=H,jn=hn,Mn=Ft,En=gn,Pn=Object.getOwnPropertyDescriptor;d.f=bn?Pn:function(t,n){if(t=Sn(t),n=jn(n),En)try{return Pn(t,n)}catch(t){}if(Mn(t,n))return xn(!wn(On.f,t,n),t[n])};var kn={},Tn=h,Dn=K,Cn=Tn.String,zn=Tn.TypeError,An=function(t){if(Dn(t))return t;throw zn(Cn(t)+" is not an object")},In=y,Ln=gn,Un=An,_n=hn,Gn=h.TypeError,Fn=Object.defineProperty;kn.f=In?Fn:function(t,n,e){if(Un(t),n=_n(n),Un(e),Ln)try{return Fn(t,n,e)}catch(t){}if("get"in e||"set"in e)throw Gn("Accessors not supported");return"value"in e&&(t[n]=e.value),t};var Rn=kn,Bn=M,Nn=y?function(t,n,e){return Rn.f(t,n,Bn(1,e))}:function(t,n,e){return t[n]=e,t},qn={exports:{}},Qn=V,Hn=zt,Vn=D(Function.toString);Qn(Hn.inspectSource)||(Hn.inspectSource=function(t){return Vn(t)});var Wn,Kn,Xn,Yn=Hn.inspectSource,Zn=V,$n=Yn,Jn=h.WeakMap,te=Zn(Jn)&&/native code/.test($n(Jn)),ne=Et.exports,ee=Qt,re=ne("keys"),oe={},ie=te,ae=h,se=D,ce=K,ue=Nn,fe=Ft,le=zt,pe=function(t){return re[t]||(re[t]=ee(t))},he=oe,de="Object already initialized",me=ae.TypeError,ye=ae.WeakMap;if(ie||le.state){var ve=le.state||(le.state=new ye),ge=se(ve.get),be=se(ve.has),we=se(ve.set);Wn=function(t,n){if(be(ve,t))throw new me(de);return n.facade=t,we(ve,t,n),n},Kn=function(t){return ge(ve,t)||{}},Xn=function(t){return be(ve,t)}}else{var Oe=pe("state");he[Oe]=!0,Wn=function(t,n){if(fe(t,Oe))throw new me(de);return n.facade=t,ue(t,Oe,n),n},Kn=function(t){return fe(t,Oe)?t[Oe]:{}},Xn=function(t){return fe(t,Oe)}}var xe={set:Wn,get:Kn,has:Xn,enforce:function(t){return Xn(t)?Kn(t):Wn(t,{})},getterFor:function(t){return function(n){var e;if(!ce(n)||(e=Kn(n)).type!==t)throw me("Incompatible receiver, "+t+" required");return e}}},Se=y,je=Ft,Me=Function.prototype,Ee=Se&&Object.getOwnPropertyDescriptor,Pe=je(Me,"name"),ke=Pe&&"something"===function(){}.name,Te=Pe&&(!Se||Se&&Ee(Me,"name").configurable),De=h,Ce=V,ze=Ft,Ae=Nn,Ie=Tt,Le=Yn,Ue={EXISTS:Pe,PROPER:ke,CONFIGURABLE:Te}.CONFIGURABLE,_e=xe.get,Ge=xe.enforce,Fe=String(String).split("String");(qn.exports=function(t,n,e,r){var o,i=!!r&&!!r.unsafe,a=!!r&&!!r.enumerable,s=!!r&&!!r.noTargetGet,c=r&&void 0!==r.name?r.name:n;Ce(e)&&("Symbol("===String(c).slice(0,7)&&(c="["+String(c).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!ze(e,"name")||Ue&&e.name!==c)&&Ae(e,"name",c),(o=Ge(e)).source||(o.source=Fe.join("string"==typeof c?c:""))),t!==De?(i?!s&&t[n]&&(a=!0):delete t[n],a?t[n]=e:Ae(t,n,e)):a?t[n]=e:Ie(n,e)})(Function.prototype,"toString",(function(){return Ce(this)&&_e(this).source||Le(this)}));var Re={},Be=Math.ceil,Ne=Math.floor,qe=function(t){var n=+t;return n!=n||0===n?0:(n>0?Ne:Be)(n)},Qe=qe,He=Math.max,Ve=Math.min,We=qe,Ke=Math.min,Xe=function(t){return t>0?Ke(We(t),9007199254740991):0},Ye=function(t){return Xe(t.length)},Ze=H,$e=function(t,n){var e=Qe(t);return e<0?He(e+n,0):Ve(e,n)},Je=Ye,tr=function(t){return function(n,e,r){var o,i=Ze(n),a=Je(i),s=$e(r,a);if(t&&e!=e){for(;a>s;)if((o=i[s++])!=o)return!0}else for(;a>s;s++)if((t||s in i)&&i[s]===e)return t||s||0;return!t&&-1}},nr={includes:tr(!0),indexOf:tr(!1)},er=Ft,rr=H,or=nr.indexOf,ir=oe,ar=D([].push),sr=function(t,n){var e,r=rr(t),o=0,i=[];for(e in r)!er(ir,e)&&er(r,e)&&ar(i,e);for(;n.length>o;)er(r,e=n[o++])&&(~or(i,e)||ar(i,e));return i},cr=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");Re.f=Object.getOwnPropertyNames||function(t){return sr(t,cr)};var ur={};ur.f=Object.getOwnPropertySymbols;var fr=$,lr=Re,pr=ur,hr=An,dr=D([].concat),mr=fr("Reflect","ownKeys")||function(t){var n=lr.f(hr(t)),e=pr.f;return e?dr(n,e(t)):n},yr=Ft,vr=mr,gr=d,br=kn,wr=m,Or=V,xr=/#|\.prototype\./,Sr=function(t,n){var e=Mr[jr(t)];return e==Pr||e!=Er&&(Or(n)?wr(n):!!n)},jr=Sr.normalize=function(t){return String(t).replace(xr,".").toLowerCase()},Mr=Sr.data={},Er=Sr.NATIVE="N",Pr=Sr.POLYFILL="P",kr=Sr,Tr=h,Dr=d.f,Cr=Nn,zr=qn.exports,Ar=Tt,Ir=function(t,n){for(var e=vr(n),r=br.f,o=gr.f,i=0;i<e.length;i++){var a=e[i];yr(t,a)||r(t,a,o(n,a))}},Lr=kr,Ur=I,_r=Array.isArray||function(t){return"Array"==Ur(t)},Gr=hn,Fr=kn,Rr=M,Br={};Br[nn("toStringTag")]="z";var Nr=h,qr="[object z]"===String(Br),Qr=V,Hr=I,Vr=nn("toStringTag"),Wr=Nr.Object,Kr="Arguments"==Hr(function(){return arguments}()),Xr=D,Yr=m,Zr=V,$r=qr?Hr:function(t){var n,e,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Wr(t),Vr))?e:Kr?Hr(n):"Object"==(r=Hr(n))&&Qr(n.callee)?"Arguments":r},Jr=Yn,to=function(){},no=[],eo=$("Reflect","construct"),ro=/^\s*(?:class|function)\b/,oo=Xr(ro.exec),io=!ro.exec(to),ao=function(t){if(!Zr(t))return!1;try{return eo(to,no,t),!0}catch(t){return!1}},so=!eo||Yr((function(){var t;return ao(ao.call)||!ao(Object)||!ao((function(){t=!0}))||t}))?function(t){if(!Zr(t))return!1;switch($r(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return io||!!oo(ro,Jr(t))}:ao,co=h,uo=_r,fo=so,lo=K,po=nn("species"),ho=co.Array,mo=function(t){var n;return uo(t)&&(n=t.constructor,(fo(n)&&(n===ho||uo(n.prototype))||lo(n)&&null===(n=n[po]))&&(n=void 0)),void 0===n?ho:n},yo=m,vo=at,go=nn("species"),bo=function(t,n){var e,r,o,i,a,s=t.target,c=t.global,u=t.stat;if(e=c?Tr:u?Tr[s]||Ar(s,{}):(Tr[s]||{}).prototype)for(r in n){if(i=n[r],o=t.noTargetGet?(a=Dr(e,r))&&a.value:e[r],!Lr(c?r:s+(u?".":"#")+r,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;Ir(i,o)}(t.sham||o&&o.sham)&&Cr(i,"sham",!0),zr(e,r,i,t)}},wo=h,Oo=m,xo=_r,So=K,jo=Ut,Mo=Ye,Eo=function(t,n,e){var r=Gr(n);r in t?Fr.f(t,r,Rr(0,e)):t[r]=e},Po=function(t,n){return new(mo(t))(0===n?0:n)},ko=function(t){return vo>=51||!yo((function(){var n=[];return(n.constructor={})[go]=function(){return{foo:1}},1!==n[t](Boolean).foo}))},To=at,Do=nn("isConcatSpreadable"),Co=9007199254740991,zo="Maximum allowed index exceeded",Ao=wo.TypeError,Io=To>=51||!Oo((function(){var t=[];return t[Do]=!1,t.concat()[0]!==t})),Lo=ko("concat"),Uo=function(t){if(!So(t))return!1;var n=t[Do];return void 0!==n?!!n:xo(t)};bo({target:"Array",proto:!0,forced:!Io||!Lo},{concat:function(t){var n,e,r,o,i,a=jo(this),s=Po(a,0),c=0;for(n=-1,r=arguments.length;n<r;n++)if(Uo(i=-1===n?a:arguments[n])){if(c+(o=Mo(i))>Co)throw Ao(zo);for(e=0;e<o;e++,c++)e in i&&Eo(s,c,i[e])}else{if(c>=Co)throw Ao(zo);Eo(s,c++,i)}return s.length=c,s}});function _o(t,n){if(null===n){n=[];for(var e=0;e<t.numberOfElements;e++)n.push([])}for(var r=t.divisions||4,o=t.numberOfElements%r,i=(t.numberOfElements-o)/r,a=(t.to-t.from)/r,s=[],c=0;c<i;c++)for(var u=0;u<r;u++){var f={from:t.from+a*u,to:t.from+a*(u+1)};s.push(f)}if(0!==o)for(var l=(t.to-t.from)/o,p=0;p<o;p++){var h={from:t.from+l*p,to:t.from+l*(p+1)};s.push(h)}for(var d=0;d<s.length;d++)n[d].push(Math.random()*(s[d].to-s[d].from)+s[d].from);return function(t){for(var n,e,r=t.length;0!==r;)e=Math.floor(Math.random()*r),n=t[r-=1],t[r]=t[e],t[e]=n;return t}(n)}function Go(t){var n=_o({numberOfElements:t.numberOfElements,from:(t.minDuration||.2)*t.duration,to:(t.maxDuration||.6)*t.duration,divisions:t.divisions||4},null);n=_o({numberOfElements:t.numberOfElements,from:.3,to:1,divisions:t.divisions||4},n);for(var e={ms:0,reference:null},r=0;r<n.length;r++){var o=n[r];o[0]=Math.round(o[0]),e.ms<o[0]&&(e={ms:o[0],reference:o}),o[1]=Math.floor(t.duration-o[0]<t.duration*(t.maxDuration||.6)?(t.duration-o[0])*o[1]:(t.maxDuration||.6)*t.duration*o[1])}return e.reference[1]=t.duration-e.reference[0],n}var Fo=function(n){a(i,n);var r=f(i);function i(){return e(this,i),r.apply(this,arguments)}return o(i,[{key:"html",get:function(){this.comets=Go({duration:this.attrs.duration/this.attrs.repeats,numberOfElements:this.attrs.items,minDuration:.1,maxDuration:.9});for(var t=0;t<this.comets.length;t++){var n=this.comets[t],e=n[0]/(this.attrs.duration/this.attrs.repeats),r=(this.attrs.cometMaxSize-this.attrs.cometMinSize)*(1-e)+this.attrs.cometMinSize;n.push(r)}var o=61*Math.PI/180,i=this.attrs.height*Math.tan(o);this.comets=_o({from:0,to:this.attrs.width+i,numberOfElements:this.attrs.items},this.comets);var a=[];this.itemData=[];for(var s=61*Math.PI/180,c=29*Math.PI/180,u=0;u<this.attrs.items;u++){var f=this.comets[u][2],l=f*Math.sin(c),p=f*Math.sin(s),h=this.comets[u][3];this.itemData.push({left:h,top:-p,width:l,size:f}),a+=' \n                <svg class="comet-svg comet-svg-'.concat(u,'" style="left: ').concat(h,"px; top: -").concat(p,"px; width: ").concat(l,"px; height: ").concat(p,'px;" xmlns="http://www.w3.org/2000/svg" class="comet-green-svg" data-name="Layer 1" viewBox="0 0 450 270.44">\n                <defs>\n                    <linearGradient id="b" x1="-56.99" x2="-56.74" y1="394.68" y2="394.93" gradientTransform="matrix(1363.47 0 0 -819.42 77776.05 323638.12)" gradientUnits="userSpaceOnUse">\n                    <stop offset="0" stop-color="').concat(this.attrs.auraOuter[0],'" stop-opacity=".59"/>\n                    <stop offset="1" stop-color="').concat(this.attrs.auraOuter[1],'" stop-opacity="0"/>\n                    </linearGradient>\n                    <linearGradient id="d" x1="-56.97" x2="-56.79" y1="394.95" y2="395.11" gradientTransform="matrix(900.62 0 0 -542.55 51377.26 214502.16)" gradientUnits="userSpaceOnUse">\n                    <stop offset="0" stop-color="').concat(this.attrs.auraIner[0],'"/>\n                    <stop offset=".31" stop-color="').concat(this.attrs.auraIner[1],'" stop-opacity=".97"/>\n                    <stop offset="1" stop-color="').concat(this.attrs.auraIner[2],'" stop-opacity="0"/>\n                    </linearGradient>\n                    <linearGradient id="f" x1="-56.81" x2="-56.49" y1="399.49" y2="399.76" gradientTransform="matrix(116.79 0 0 -75.59 6649.18 30453.64)" gradientUnits="userSpaceOnUse">\n                    <stop offset="0" stop-color="').concat(this.attrs.meteoriteColors[0],'"/>\n                    <stop offset="1" stop-color="').concat(this.attrs.meteoriteColors[1],'"/>\n                    </linearGradient>\n                    <mask id="a" width="450" height="270.44" x="0" y="0" maskUnits="userSpaceOnUse">\n                    <path fill="#fff" fill-rule="evenodd" d="M11.33 230a21.52 21.52 0 0020.31 38L450 38 429.7 0 11.33 230z"/>\n                    </mask>\n                    <mask id="c" width="297.24" height="179.06" x="7.51" y="84.83" maskUnits="userSpaceOnUse">\n                    <path fill="#fff" fill-rule="evenodd" d="M14.65 238.41a13.55 13.55 0 0012.78 23.89l277.32-153.58L292 84.83 14.65 238.41z"/>\n                    </mask>\n                    <mask id="e" width="38.55" height="24.95" x="12.81" y="234.29" maskUnits="userSpaceOnUse">\n                    <path fill="#fff" fill-rule="evenodd" d="M17.69 241.85a9.24 9.24 0 008.73 16.29c4.5-2.41 24.94-23.85 24.94-23.85s-29.17 5.15-33.67 7.56"/>\n                    </mask>\n                </defs>\n                <g mask="url(#a)">\n                    <path fill="url(#b)" fill-rule="evenodd" d="M11.33 230a21.52 21.52 0 0020.31 38L450 38 429.7 0 11.33 230z"/>\n                </g>\n                <g mask="url(#c)">\n                    <path fill="url(#d)" fill-rule="evenodd" d="M14.65 238.41a13.55 13.55 0 0012.78 23.89l277.32-153.58L292 84.83 14.65 238.41z"/>\n                </g>\n                <g mask="url(#e)">\n                    <path fill="url(#f)" fill-rule="evenodd" d="M17.69 241.85a9.24 9.24 0 008.73 16.29c4.5-2.41 24.94-23.85 24.94-23.85s-29.17 5.15-33.67 7.56"/>\n                </g>\n                </svg>\n            ')}return'\n            <div class="wrapper">\n            '.concat(a,"\n            </div>\n        ")}},{key:"css",get:function(){return"\n            .wrapper{\n                width: ".concat(this.attrs.width,"px;\n                height:").concat(this.attrs.height,"px;\n            }\n            .comet-svg{\n                position: absolute;\n                z-index: 3;\n            }\n        ")}},{key:"buildTree",value:function(){for(var n=0;n<this.comets.length;n++){var e=-29*Math.PI/180,r=new t.CSSEffect({animatedAttrs:{left:"-".concat(this.itemData[n].width,"px"),top:"".concat(Math.tan(e)*(-this.itemData[n].width-this.itemData[n].left)+this.itemData[n].top,"px")}},{selector:".comet-svg-".concat(n),duration:this.comets[n][0],delay:this.comets[n][1],repeats:this.attrs.repeats});this.addIncident(r,0)}}}]),i}(t.HTMLClip),Ro=function(n){a(i,n);var r=f(i);function i(){return e(this,i),r.apply(this,arguments)}return o(i,[{key:"html",get:function(){for(var t=function(t){t.divisions||(t.divisions=[]);for(var n=null,e=0;e<t.dimensions.length;e++){var r=t.dimensions[e],o=t.divisions[e]||4;n=_o({from:r[0],to:r[1],numberOfElements:t.numberOfElements,divisions:o},n)}return n}({dimensions:[[0,this.attrs.width],[0,this.attrs.height],[this.attrs.starMinSize,this.attrs.starMaxSize]],divisions:[Math.floor(this.attrs.items/2),Math.floor(this.attrs.items/2),this.attrs.items],numberOfElements:this.attrs.items}),n=[],e=0;e<this.attrs.items;e++){var r=t[e][2],o=t[e][1],i=t[e][0];n+=' \n              <svg class="stars-svg stars-svg-'.concat(e,'" width="').concat(r,'px" height="').concat(r,'px" style="left: ').concat(i,"px; top:").concat(o,'px;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50.15">\n                <defs>\n                  <radialGradient id="radial-gradient" cx="25.98" cy="26.84" r="22.27" gradientUnits="userSpaceOnUse">\n                    <stop offset="0" stop-color="#fff9a6" stop-opacity="0.9"/>\n                    <stop offset="0.07" stop-color="#fffab3" stop-opacity="0.77"/>\n                    <stop offset="0.2" stop-color="#fffbc7" stop-opacity="0.57"/>\n                    <stop offset="0.34" stop-color="#fffcd8" stop-opacity="0.4"/>\n                    <stop offset="0.47" stop-color="#fffde6" stop-opacity="0.25"/>\n                    <stop offset="0.6" stop-color="#fffef1" stop-opacity="0.14"/>\n                    <stop offset="0.74" stop-color="#fffff9" stop-opacity="0.06"/>\n                    <stop offset="0.87" stop-color="#fffffd" stop-opacity="0.02"/>\n                    <stop offset="1" stop-color="#fff" stop-opacity="0"/>\n                  </radialGradient>\n                </defs>\n                <title>Asset 10</title>\n                <g id="Layer_2" data-name="Layer 2">\n                  <g id="Layer_2-2" data-name="Layer 2">\n                    <g>\n                      <circle cx="25.98" cy="26.84" r="22.27" fill="url(#radial-gradient)"/>\n                      <path id="stars-svg-path-1" d="M.15,26.27q13.13-2,18.73-4.52Q24.31,19.32,26,.16h0A.18.18,0,0,1,26.14,0a.19.19,0,0,1,.17.17q.6,17.88,6.81,21.58t16.72,4.62h0a.18.18,0,0,1,.16.2.19.19,0,0,1-.16.16Q38.1,27.86,33.12,32.05T26.49,50h0a.18.18,0,0,1-.36,0Q25.31,36.65,18.88,32T.17,26.62h0A.17.17,0,0,1,0,26.43.18.18,0,0,1,.15,26.27Z" fill="').concat(this.attrs.starColor,'" fill-rule="evenodd"/>\n                    </g>\n                  </g>\n                </g>\n              </svg>')}return'\n    <div class="wrapper">\n      '.concat(n,"\n    </div>\n    \n    ")}},{key:"css",get:function(){return"\n    .wrapper{\n      width: ".concat(this.attrs.width,"px;\n      height:").concat(this.attrs.height,"px;\n      \n    }\n    .stars-svg{\n      position: absolute;\n      z-index: 3;\n\n    }\n\n  ")}},{key:"buildTree",value:function(){function n(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!0===n?{opacity:t}:{transform:{scale:t}}}for(var e=Go({duration:this.attrs.duration/this.attrs.repeats,divisions:3,numberOfElements:this.attrs.items,minDuration:.2,maxDuration:1}),r=0;r<this.attrs.items;r++){var o=new t.Combo({incidents:[{incidentClass:t.CSSEffect,attrs:{animatedAttrs:n(0,"opacity"===this.attrs.blinkType)},props:{duration:Math.round(e[r][1]/2)},position:0},{incidentClass:t.CSSEffect,attrs:{animatedAttrs:n(1,"opacity"===this.attrs.blinkType)},props:{duration:Math.round(e[r][1]/2)},position:Math.round(e[r][1]/2)}]},{selector:".stars-svg-".concat(r),delay:e[r][0],repeats:this.attrs.repeats});this.addIncident(o,0)}}}]),i}(t.HTMLClip),Bo={npm_name:"@donkeyclip/motorcortex-comets",version:"1.1.0",incidents:[{exportable:Fo,name:"Comets",attributesValidationRules:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(n){i(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}({},{width:{optional:!1,type:"number"},height:{optional:!1,type:"number"},cometMaxSize:{optional:!1,type:"number"},cometMinSize:{optional:!1,type:"number"},meteoriteColors:{optional:!0,type:"array",min:2,items:{optional:!0,type:"color"}},auraIner:{optional:!0,type:"array",min:3,items:{optional:!0,type:"color"}},auraOuter:{optional:!0,type:"array",min:2,items:{optional:!0,type:"color"}},items:{optional:!1,type:"number"},repeats:{optional:!1,type:"number"},duration:{optional:!1,type:"number"}})},{exportable:Ro,name:"Stars"}]};return Bo}));
