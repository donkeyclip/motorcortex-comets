!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("@donkeyclip/motorcortex")):"function"==typeof define&&define.amd?define(["@donkeyclip/motorcortex"],e):(t="undefined"!=typeof globalThis?globalThis:t||self)["@donkeyclip/motorcortex-comets"]=e(t.MotorCortex)}(this,(function(t){"use strict";function e(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&c(t,e)}function s(t){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},s(t)}function c(t,e){return c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},c(t,e)}function u(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=s(t);if(e){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},p=function(t){return t&&t.Math==Math&&t},h=p("object"==typeof globalThis&&globalThis)||p("object"==typeof window&&window)||p("object"==typeof self&&self)||p("object"==typeof l&&l)||function(){return this}()||Function("return this")(),d={},m=function(t){try{return!!t()}catch(t){return!0}},y=!m((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),v=Function.prototype.call,g=v.bind?v.bind(v):function(){return v.apply(v,arguments)},b={},w={}.propertyIsEnumerable,O=Object.getOwnPropertyDescriptor,x=O&&!w.call({1:2},1);b.f=x?function(t){var e=O(this,t);return!!e&&e.enumerable}:w;var S,j,M=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},E=Function.prototype,P=E.bind,k=E.call,T=P&&P.bind(k),D=P?function(t){return t&&T(k,t)}:function(t){return t&&function(){return k.apply(t,arguments)}},C=D,z=C({}.toString),A=C("".slice),I=function(t){return A(z(t),8,-1)},L=D,U=m,_=I,G=h.Object,F=L("".split),R=U((function(){return!G("z").propertyIsEnumerable(0)}))?function(t){return"String"==_(t)?F(t,""):G(t)}:G,B=h.TypeError,N=function(t){if(null==t)throw B("Can't call method on "+t);return t},q=R,Q=N,H=function(t){return q(Q(t))},V=function(t){return"function"==typeof t},W=V,K=function(t){return"object"==typeof t?null!==t:W(t)},X=h,Y=V,Z=function(t){return Y(t)?t:void 0},$=function(t,e){return arguments.length<2?Z(X[t]):X[t]&&X[t][e]},J=D({}.isPrototypeOf),tt=h,et=$("navigator","userAgent")||"",nt=tt.process,rt=tt.Deno,ot=nt&&nt.versions||rt&&rt.version,it=ot&&ot.v8;it&&(j=(S=it.split("."))[0]>0&&S[0]<4?1:+(S[0]+S[1])),!j&&et&&(!(S=et.match(/Edge\/(\d+)/))||S[1]>=74)&&(S=et.match(/Chrome\/(\d+)/))&&(j=+S[1]);var at=j,st=at,ct=m,ut=!!Object.getOwnPropertySymbols&&!ct((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&st&&st<41})),ft=ut&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,lt=$,pt=V,ht=J,dt=ft,mt=h.Object,yt=dt?function(t){return"symbol"==typeof t}:function(t){var e=lt("Symbol");return pt(e)&&ht(e.prototype,mt(t))},vt=h.String,gt=V,bt=function(t){try{return vt(t)}catch(t){return"Object"}},wt=h.TypeError,Ot=function(t){if(gt(t))return t;throw wt(bt(t)+" is not a function")},xt=g,St=V,jt=K,Mt=h.TypeError,Et={exports:{}},Pt=h,kt=Object.defineProperty,Tt=function(t,e){try{kt(Pt,t,{value:e,configurable:!0,writable:!0})}catch(n){Pt[t]=e}return e},Dt=Tt,Ct="__core-js_shared__",zt=h[Ct]||Dt(Ct,{}),At=zt;(Et.exports=function(t,e){return At[t]||(At[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.20.1",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"});var It=N,Lt=h.Object,Ut=function(t){return Lt(It(t))},_t=Ut,Gt=D({}.hasOwnProperty),Ft=Object.hasOwn||function(t,e){return Gt(_t(t),e)},Rt=D,Bt=0,Nt=Math.random(),qt=Rt(1..toString),Qt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+qt(++Bt+Nt,36)},Ht=h,Vt=Et.exports,Wt=Ft,Kt=Qt,Xt=ut,Yt=ft,Zt=Vt("wks"),$t=Ht.Symbol,Jt=$t&&$t.for,te=Yt?$t:$t&&$t.withoutSetter||Kt,ee=function(t){if(!Wt(Zt,t)||!Xt&&"string"!=typeof Zt[t]){var e="Symbol."+t;Xt&&Wt($t,t)?Zt[t]=$t[t]:Zt[t]=Yt&&Jt?Jt(e):te(e)}return Zt[t]},ne=g,re=K,oe=yt,ie=function(t,e){var n=t[e];return null==n?void 0:Ot(n)},ae=function(t,e){var n,r;if("string"===e&&St(n=t.toString)&&!jt(r=xt(n,t)))return r;if(St(n=t.valueOf)&&!jt(r=xt(n,t)))return r;if("string"!==e&&St(n=t.toString)&&!jt(r=xt(n,t)))return r;throw Mt("Can't convert object to primitive value")},se=ee,ce=h.TypeError,ue=se("toPrimitive"),fe=function(t,e){if(!re(t)||oe(t))return t;var n,r=ie(t,ue);if(r){if(void 0===e&&(e="default"),n=ne(r,t,e),!re(n)||oe(n))return n;throw ce("Can't convert object to primitive value")}return void 0===e&&(e="number"),ae(t,e)},le=yt,pe=function(t){var e=fe(t,"string");return le(e)?e:e+""},he=K,de=h.document,me=he(de)&&he(de.createElement),ye=function(t){return me?de.createElement(t):{}},ve=!y&&!m((function(){return 7!=Object.defineProperty(ye("div"),"a",{get:function(){return 7}}).a})),ge=y,be=g,we=b,Oe=M,xe=H,Se=pe,je=Ft,Me=ve,Ee=Object.getOwnPropertyDescriptor;d.f=ge?Ee:function(t,e){if(t=xe(t),e=Se(e),Me)try{return Ee(t,e)}catch(t){}if(je(t,e))return Oe(!be(we.f,t,e),t[e])};var Pe={},ke=h,Te=K,De=ke.String,Ce=ke.TypeError,ze=function(t){if(Te(t))return t;throw Ce(De(t)+" is not an object")},Ae=y,Ie=ve,Le=ze,Ue=pe,_e=h.TypeError,Ge=Object.defineProperty;Pe.f=Ae?Ge:function(t,e,n){if(Le(t),e=Ue(e),Le(n),Ie)try{return Ge(t,e,n)}catch(t){}if("get"in n||"set"in n)throw _e("Accessors not supported");return"value"in n&&(t[e]=n.value),t};var Fe=Pe,Re=M,Be=y?function(t,e,n){return Fe.f(t,e,Re(1,n))}:function(t,e,n){return t[e]=n,t},Ne={exports:{}},qe=V,Qe=zt,He=D(Function.toString);qe(Qe.inspectSource)||(Qe.inspectSource=function(t){return He(t)});var Ve,We,Ke,Xe=Qe.inspectSource,Ye=V,Ze=Xe,$e=h.WeakMap,Je=Ye($e)&&/native code/.test(Ze($e)),tn=Et.exports,en=Qt,nn=tn("keys"),rn={},on=Je,an=h,sn=D,cn=K,un=Be,fn=Ft,ln=zt,pn=function(t){return nn[t]||(nn[t]=en(t))},hn=rn,dn="Object already initialized",mn=an.TypeError,yn=an.WeakMap;if(on||ln.state){var vn=ln.state||(ln.state=new yn),gn=sn(vn.get),bn=sn(vn.has),wn=sn(vn.set);Ve=function(t,e){if(bn(vn,t))throw new mn(dn);return e.facade=t,wn(vn,t,e),e},We=function(t){return gn(vn,t)||{}},Ke=function(t){return bn(vn,t)}}else{var On=pn("state");hn[On]=!0,Ve=function(t,e){if(fn(t,On))throw new mn(dn);return e.facade=t,un(t,On,e),e},We=function(t){return fn(t,On)?t[On]:{}},Ke=function(t){return fn(t,On)}}var xn={set:Ve,get:We,has:Ke,enforce:function(t){return Ke(t)?We(t):Ve(t,{})},getterFor:function(t){return function(e){var n;if(!cn(e)||(n=We(e)).type!==t)throw mn("Incompatible receiver, "+t+" required");return n}}},Sn=y,jn=Ft,Mn=Function.prototype,En=Sn&&Object.getOwnPropertyDescriptor,Pn=jn(Mn,"name"),kn=Pn&&"something"===function(){}.name,Tn=Pn&&(!Sn||Sn&&En(Mn,"name").configurable),Dn=h,Cn=V,zn=Ft,An=Be,In=Tt,Ln=Xe,Un={EXISTS:Pn,PROPER:kn,CONFIGURABLE:Tn}.CONFIGURABLE,_n=xn.get,Gn=xn.enforce,Fn=String(String).split("String");(Ne.exports=function(t,e,n,r){var o,i=!!r&&!!r.unsafe,a=!!r&&!!r.enumerable,s=!!r&&!!r.noTargetGet,c=r&&void 0!==r.name?r.name:e;Cn(n)&&("Symbol("===String(c).slice(0,7)&&(c="["+String(c).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!zn(n,"name")||Un&&n.name!==c)&&An(n,"name",c),(o=Gn(n)).source||(o.source=Fn.join("string"==typeof c?c:""))),t!==Dn?(i?!s&&t[e]&&(a=!0):delete t[e],a?t[e]=n:An(t,e,n)):a?t[e]=n:In(e,n)})(Function.prototype,"toString",(function(){return Cn(this)&&_n(this).source||Ln(this)}));var Rn={},Bn=Math.ceil,Nn=Math.floor,qn=function(t){var e=+t;return e!=e||0===e?0:(e>0?Nn:Bn)(e)},Qn=qn,Hn=Math.max,Vn=Math.min,Wn=qn,Kn=Math.min,Xn=function(t){return t>0?Kn(Wn(t),9007199254740991):0},Yn=function(t){return Xn(t.length)},Zn=H,$n=function(t,e){var n=Qn(t);return n<0?Hn(n+e,0):Vn(n,e)},Jn=Yn,tr=function(t){return function(e,n,r){var o,i=Zn(e),a=Jn(i),s=$n(r,a);if(t&&n!=n){for(;a>s;)if((o=i[s++])!=o)return!0}else for(;a>s;s++)if((t||s in i)&&i[s]===n)return t||s||0;return!t&&-1}},er={includes:tr(!0),indexOf:tr(!1)},nr=Ft,rr=H,or=er.indexOf,ir=rn,ar=D([].push),sr=function(t,e){var n,r=rr(t),o=0,i=[];for(n in r)!nr(ir,n)&&nr(r,n)&&ar(i,n);for(;e.length>o;)nr(r,n=e[o++])&&(~or(i,n)||ar(i,n));return i},cr=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");Rn.f=Object.getOwnPropertyNames||function(t){return sr(t,cr)};var ur={};ur.f=Object.getOwnPropertySymbols;var fr=$,lr=Rn,pr=ur,hr=ze,dr=D([].concat),mr=fr("Reflect","ownKeys")||function(t){var e=lr.f(hr(t)),n=pr.f;return n?dr(e,n(t)):e},yr=Ft,vr=mr,gr=d,br=Pe,wr=m,Or=V,xr=/#|\.prototype\./,Sr=function(t,e){var n=Mr[jr(t)];return n==Pr||n!=Er&&(Or(e)?wr(e):!!e)},jr=Sr.normalize=function(t){return String(t).replace(xr,".").toLowerCase()},Mr=Sr.data={},Er=Sr.NATIVE="N",Pr=Sr.POLYFILL="P",kr=Sr,Tr=h,Dr=d.f,Cr=Be,zr=Ne.exports,Ar=Tt,Ir=function(t,e,n){for(var r=vr(e),o=br.f,i=gr.f,a=0;a<r.length;a++){var s=r[a];yr(t,s)||n&&yr(n,s)||o(t,s,i(e,s))}},Lr=kr,Ur=I,_r=Array.isArray||function(t){return"Array"==Ur(t)},Gr=pe,Fr=Pe,Rr=M,Br={};Br[ee("toStringTag")]="z";var Nr=h,qr="[object z]"===String(Br),Qr=V,Hr=I,Vr=ee("toStringTag"),Wr=Nr.Object,Kr="Arguments"==Hr(function(){return arguments}()),Xr=D,Yr=m,Zr=V,$r=qr?Hr:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Wr(t),Vr))?n:Kr?Hr(e):"Object"==(r=Hr(e))&&Qr(e.callee)?"Arguments":r},Jr=Xe,to=function(){},eo=[],no=$("Reflect","construct"),ro=/^\s*(?:class|function)\b/,oo=Xr(ro.exec),io=!ro.exec(to),ao=function(t){if(!Zr(t))return!1;try{return no(to,eo,t),!0}catch(t){return!1}},so=function(t){if(!Zr(t))return!1;switch($r(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return io||!!oo(ro,Jr(t))}catch(t){return!0}};so.sham=!0;var co=!no||Yr((function(){var t;return ao(ao.call)||!ao(Object)||!ao((function(){t=!0}))||t}))?so:ao,uo=h,fo=_r,lo=co,po=K,ho=ee("species"),mo=uo.Array,yo=function(t){var e;return fo(t)&&(e=t.constructor,(lo(e)&&(e===mo||fo(e.prototype))||po(e)&&null===(e=e[ho]))&&(e=void 0)),void 0===e?mo:e},vo=m,go=at,bo=ee("species"),wo=function(t,e){var n,r,o,i,a,s=t.target,c=t.global,u=t.stat;if(n=c?Tr:u?Tr[s]||Ar(s,{}):(Tr[s]||{}).prototype)for(r in e){if(i=e[r],o=t.noTargetGet?(a=Dr(n,r))&&a.value:n[r],!Lr(c?r:s+(u?".":"#")+r,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;Ir(i,o)}(t.sham||o&&o.sham)&&Cr(i,"sham",!0),zr(n,r,i,t)}},Oo=h,xo=m,So=_r,jo=K,Mo=Ut,Eo=Yn,Po=function(t,e,n){var r=Gr(e);r in t?Fr.f(t,r,Rr(0,n)):t[r]=n},ko=function(t,e){return new(yo(t))(0===e?0:e)},To=function(t){return go>=51||!vo((function(){var e=[];return(e.constructor={})[bo]=function(){return{foo:1}},1!==e[t](Boolean).foo}))},Do=at,Co=ee("isConcatSpreadable"),zo=9007199254740991,Ao="Maximum allowed index exceeded",Io=Oo.TypeError,Lo=Do>=51||!xo((function(){var t=[];return t[Co]=!1,t.concat()[0]!==t})),Uo=To("concat"),_o=function(t){if(!jo(t))return!1;var e=t[Co];return void 0!==e?!!e:So(t)};wo({target:"Array",proto:!0,forced:!Lo||!Uo},{concat:function(t){var e,n,r,o,i,a=Mo(this),s=ko(a,0),c=0;for(e=-1,r=arguments.length;e<r;e++)if(_o(i=-1===e?a:arguments[e])){if(c+(o=Eo(i))>zo)throw Io(Ao);for(n=0;n<o;n++,c++)n in i&&Po(s,c,i[n])}else{if(c>=zo)throw Io(Ao);Po(s,c++,i)}return s.length=c,s}});function Go(t,e){if(null===e){e=[];for(var n=0;n<t.numberOfElements;n++)e.push([])}for(var r=t.divisions||4,o=t.numberOfElements%r,i=(t.numberOfElements-o)/r,a=(t.to-t.from)/r,s=[],c=0;c<i;c++)for(var u=0;u<r;u++){var f={from:t.from+a*u,to:t.from+a*(u+1)};s.push(f)}if(0!==o)for(var l=(t.to-t.from)/o,p=0;p<o;p++){var h={from:t.from+l*p,to:t.from+l*(p+1)};s.push(h)}for(var d=0;d<s.length;d++)e[d].push(Math.random()*(s[d].to-s[d].from)+s[d].from);return function(t){for(var e,n,r=t.length;0!==r;)n=Math.floor(Math.random()*r),e=t[r-=1],t[r]=t[n],t[n]=e;return t}(e)}function Fo(t){var e=Go({numberOfElements:t.numberOfElements,from:(t.minDuration||.2)*t.duration,to:(t.maxDuration||.6)*t.duration,divisions:t.divisions||4},null);e=Go({numberOfElements:t.numberOfElements,from:.3,to:1,divisions:t.divisions||4},e);for(var n={ms:0,reference:null},r=0;r<e.length;r++){var o=e[r];o[0]=Math.round(o[0]),n.ms<o[0]&&(n={ms:o[0],reference:o}),o[1]=Math.floor(t.duration-o[0]<t.duration*(t.maxDuration||.6)?(t.duration-o[0])*o[1]:(t.maxDuration||.6)*t.duration*o[1])}return n.reference[1]=t.duration-n.reference[0],e}var Ro=function(e){a(i,e);var r=f(i);function i(){return n(this,i),r.apply(this,arguments)}return o(i,[{key:"html",get:function(){this.comets=Fo({duration:this.attrs.duration/this.attrs.repeats,numberOfElements:this.attrs.items,minDuration:.1,maxDuration:.9});for(var t=0;t<this.comets.length;t++){var e=this.comets[t],n=e[0]/(this.attrs.duration/this.attrs.repeats),r=(this.attrs.cometMaxSize-this.attrs.cometMinSize)*(1-n)+this.attrs.cometMinSize;e.push(r)}var o=61*Math.PI/180,i=this.attrs.height*Math.tan(o);this.comets=Go({from:0,to:this.attrs.width+i,numberOfElements:this.attrs.items},this.comets);var a=[];this.itemData=[];for(var s=61*Math.PI/180,c=29*Math.PI/180,u=0;u<this.attrs.items;u++){var f=this.comets[u][2],l=f*Math.sin(c),p=f*Math.sin(s),h=this.comets[u][3];this.itemData.push({left:h,top:-p,width:l,size:f}),a+=' \n                <svg class="comet-svg comet-svg-'.concat(u,'" style="left: ').concat(h,"px; top: -").concat(p,"px; width: ").concat(l,"px; height: ").concat(p,'px;" xmlns="http://www.w3.org/2000/svg" class="comet-green-svg" data-name="Layer 1" viewBox="0 0 450 270.44">\n                <defs>\n                    <linearGradient id="b" x1="-56.99" x2="-56.74" y1="394.68" y2="394.93" gradientTransform="matrix(1363.47 0 0 -819.42 77776.05 323638.12)" gradientUnits="userSpaceOnUse">\n                    <stop offset="0" stop-color="').concat(this.attrs.auraOuter[0],'" stop-opacity=".59"/>\n                    <stop offset="1" stop-color="').concat(this.attrs.auraOuter[1],'" stop-opacity="0"/>\n                    </linearGradient>\n                    <linearGradient id="d" x1="-56.97" x2="-56.79" y1="394.95" y2="395.11" gradientTransform="matrix(900.62 0 0 -542.55 51377.26 214502.16)" gradientUnits="userSpaceOnUse">\n                    <stop offset="0" stop-color="').concat(this.attrs.auraIner[0],'"/>\n                    <stop offset=".31" stop-color="').concat(this.attrs.auraIner[1],'" stop-opacity=".97"/>\n                    <stop offset="1" stop-color="').concat(this.attrs.auraIner[2],'" stop-opacity="0"/>\n                    </linearGradient>\n                    <linearGradient id="f" x1="-56.81" x2="-56.49" y1="399.49" y2="399.76" gradientTransform="matrix(116.79 0 0 -75.59 6649.18 30453.64)" gradientUnits="userSpaceOnUse">\n                    <stop offset="0" stop-color="').concat(this.attrs.meteoriteColors[0],'"/>\n                    <stop offset="1" stop-color="').concat(this.attrs.meteoriteColors[1],'"/>\n                    </linearGradient>\n                    <mask id="a" width="450" height="270.44" x="0" y="0" maskUnits="userSpaceOnUse">\n                    <path fill="#fff" fill-rule="evenodd" d="M11.33 230a21.52 21.52 0 0020.31 38L450 38 429.7 0 11.33 230z"/>\n                    </mask>\n                    <mask id="c" width="297.24" height="179.06" x="7.51" y="84.83" maskUnits="userSpaceOnUse">\n                    <path fill="#fff" fill-rule="evenodd" d="M14.65 238.41a13.55 13.55 0 0012.78 23.89l277.32-153.58L292 84.83 14.65 238.41z"/>\n                    </mask>\n                    <mask id="e" width="38.55" height="24.95" x="12.81" y="234.29" maskUnits="userSpaceOnUse">\n                    <path fill="#fff" fill-rule="evenodd" d="M17.69 241.85a9.24 9.24 0 008.73 16.29c4.5-2.41 24.94-23.85 24.94-23.85s-29.17 5.15-33.67 7.56"/>\n                    </mask>\n                </defs>\n                <g mask="url(#a)">\n                    <path fill="url(#b)" fill-rule="evenodd" d="M11.33 230a21.52 21.52 0 0020.31 38L450 38 429.7 0 11.33 230z"/>\n                </g>\n                <g mask="url(#c)">\n                    <path fill="url(#d)" fill-rule="evenodd" d="M14.65 238.41a13.55 13.55 0 0012.78 23.89l277.32-153.58L292 84.83 14.65 238.41z"/>\n                </g>\n                <g mask="url(#e)">\n                    <path fill="url(#f)" fill-rule="evenodd" d="M17.69 241.85a9.24 9.24 0 008.73 16.29c4.5-2.41 24.94-23.85 24.94-23.85s-29.17 5.15-33.67 7.56"/>\n                </g>\n                </svg>\n            ')}return'\n            <div class="wrapper">\n            '.concat(a,"\n            </div>\n        ")}},{key:"css",get:function(){return"\n            .wrapper{\n                width: ".concat(this.attrs.width,"px;\n                height:").concat(this.attrs.height,"px;\n            }\n            .comet-svg{\n                position: absolute;\n                z-index: 3;\n            }\n        ")}},{key:"buildTree",value:function(){for(var e=0;e<this.comets.length;e++){var n=-29*Math.PI/180,r=new t.CSSEffect({animatedAttrs:{left:"-".concat(this.itemData[e].width,"px"),top:"".concat(Math.tan(n)*(-this.itemData[e].width-this.itemData[e].left)+this.itemData[e].top,"px")}},{selector:".comet-svg-".concat(e),duration:this.comets[e][0],delay:this.comets[e][1],repeats:this.attrs.repeats});this.addIncident(r,0)}}}]),i}(t.HTMLClip),Bo=function(e){a(i,e);var r=f(i);function i(){return n(this,i),r.apply(this,arguments)}return o(i,[{key:"html",get:function(){for(var t=function(t){t.divisions||(t.divisions=[]);for(var e=null,n=0;n<t.dimensions.length;n++){var r=t.dimensions[n],o=t.divisions[n]||4;e=Go({from:r[0],to:r[1],numberOfElements:t.numberOfElements,divisions:o},e)}return e}({dimensions:[[0,this.attrs.width],[0,this.attrs.height],[this.attrs.starMinSize,this.attrs.starMaxSize]],divisions:[Math.floor(this.attrs.items/2),Math.floor(this.attrs.items/2),this.attrs.items],numberOfElements:this.attrs.items}),e=[],n=0;n<this.attrs.items;n++){var r=t[n][2],o=t[n][1],i=t[n][0];e+=' \n              <svg class="stars-svg stars-svg-'.concat(n,'" width="').concat(r,'px" height="').concat(r,'px" style="left: ').concat(i,"px; top:").concat(o,'px;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50.15">\n                <defs>\n                  <radialGradient id="radial-gradient" cx="25.98" cy="26.84" r="22.27" gradientUnits="userSpaceOnUse">\n                    <stop offset="0" stop-color="#fff9a6" stop-opacity="0.9"/>\n                    <stop offset="0.07" stop-color="#fffab3" stop-opacity="0.77"/>\n                    <stop offset="0.2" stop-color="#fffbc7" stop-opacity="0.57"/>\n                    <stop offset="0.34" stop-color="#fffcd8" stop-opacity="0.4"/>\n                    <stop offset="0.47" stop-color="#fffde6" stop-opacity="0.25"/>\n                    <stop offset="0.6" stop-color="#fffef1" stop-opacity="0.14"/>\n                    <stop offset="0.74" stop-color="#fffff9" stop-opacity="0.06"/>\n                    <stop offset="0.87" stop-color="#fffffd" stop-opacity="0.02"/>\n                    <stop offset="1" stop-color="#fff" stop-opacity="0"/>\n                  </radialGradient>\n                </defs>\n                <title>Asset 10</title>\n                <g id="Layer_2" data-name="Layer 2">\n                  <g id="Layer_2-2" data-name="Layer 2">\n                    <g>\n                      <circle cx="25.98" cy="26.84" r="22.27" fill="url(#radial-gradient)"/>\n                      <path id="stars-svg-path-1" d="M.15,26.27q13.13-2,18.73-4.52Q24.31,19.32,26,.16h0A.18.18,0,0,1,26.14,0a.19.19,0,0,1,.17.17q.6,17.88,6.81,21.58t16.72,4.62h0a.18.18,0,0,1,.16.2.19.19,0,0,1-.16.16Q38.1,27.86,33.12,32.05T26.49,50h0a.18.18,0,0,1-.36,0Q25.31,36.65,18.88,32T.17,26.62h0A.17.17,0,0,1,0,26.43.18.18,0,0,1,.15,26.27Z" fill="').concat(this.attrs.starColor,'" fill-rule="evenodd"/>\n                    </g>\n                  </g>\n                </g>\n              </svg>')}return'\n    <div class="wrapper">\n      '.concat(e,"\n    </div>\n    \n    ")}},{key:"css",get:function(){return"\n    .wrapper{\n      width: ".concat(this.attrs.width,"px;\n      height:").concat(this.attrs.height,"px;\n      \n    }\n    .stars-svg{\n      position: absolute;\n      z-index: 3;\n\n    }\n\n  ")}},{key:"buildTree",value:function(){function e(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!0===e?{opacity:t}:{transform:{scale:t}}}for(var n=Fo({duration:this.attrs.duration/this.attrs.repeats,divisions:3,numberOfElements:this.attrs.items,minDuration:.2,maxDuration:1}),r=0;r<this.attrs.items;r++){var o=new t.Combo({incidents:[{incidentClass:t.CSSEffect,attrs:{animatedAttrs:e(0,"opacity"===this.attrs.blinkType)},props:{duration:Math.round(n[r][1]/2)},position:0},{incidentClass:t.CSSEffect,attrs:{animatedAttrs:e(1,"opacity"===this.attrs.blinkType)},props:{duration:Math.round(n[r][1]/2)},position:Math.round(n[r][1]/2)}]},{selector:".stars-svg-".concat(r),delay:n[r][0],repeats:this.attrs.repeats});this.addIncident(o,0)}}}]),i}(t.HTMLClip),No={npm_name:"@donkeyclip/motorcortex-comets",version:"1.1.0",incidents:[{exportable:Ro,name:"Comets",attributesValidationRules:function(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?e(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},{width:{optional:!1,type:"number"},height:{optional:!1,type:"number"},cometMaxSize:{optional:!1,type:"number"},cometMinSize:{optional:!1,type:"number"},meteoriteColors:{optional:!0,type:"array",min:2,items:{optional:!0,type:"color"}},auraIner:{optional:!0,type:"array",min:3,items:{optional:!0,type:"color"}},auraOuter:{optional:!0,type:"array",min:2,items:{optional:!0,type:"color"}},items:{optional:!1,type:"number"},repeats:{optional:!1,type:"number"},duration:{optional:!1,type:"number"}})},{exportable:Bo,name:"Stars"}]};return No}));