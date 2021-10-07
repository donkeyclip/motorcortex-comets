/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 657:
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,(function(){"use strict";function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function t(t){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?e(Object(i),!0).forEach((function(e){r(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):e(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){return o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(e,t)}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return c(e)}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function f(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),e}function m(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}function v(e,t,n){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=m(e,t);if(i){var r=Object.getOwnPropertyDescriptor(i,t);return r.get?r.get.call(n):r.value}},v(e,t,n||e)}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function g(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function b(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}function k(e){return function(e){if(Array.isArray(e))return y(e)}(e)||g(e)||b(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e){if(Array.isArray(e))return e}function x(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function C(e){return w(e)||g(e)||b(e)||x()}function E(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var P=function e(t,n,i={}){for(let s in n)if("object"==typeof(r=n[s])&&!Array.isArray(r)&&null!=r&&Object.keys(r).length>0)t[s]=t[s]||{},e(t[s],n[s],i);else{if(!0===i.skipIfExist&&void 0!==t[s])continue;t[s]=n[s]}var r;return t};var O={required:"The '{field}' field is required.",string:"The '{field}' field must be a string.",stringEmpty:"The '{field}' field must not be empty.",stringMin:"The '{field}' field length must be greater than or equal to {expected} characters long.",stringMax:"The '{field}' field length must be less than or equal to {expected} characters long.",stringLength:"The '{field}' field length must be {expected} characters long.",stringPattern:"The '{field}' field fails to match the required pattern.",stringContains:"The '{field}' field must contain the '{expected}' text.",stringEnum:"The '{field}' field does not match any of the allowed values.",stringNumeric:"The '{field}' field must be a numeric string.",stringAlpha:"The '{field}' field must be an alphabetic string.",stringAlphanum:"The '{field}' field must be an alphanumeric string.",stringAlphadash:"The '{field}' field must be an alphadash string.",stringHex:"The '{field}' field must be a hex string.",stringSingleLine:"The '{field}' field must be a single line string.",stringBase64:"The '{field}' field must be a base64 string.",number:"The '{field}' field must be a number.",numberMin:"The '{field}' field must be greater than or equal to {expected}.",numberMax:"The '{field}' field must be less than or equal to {expected}.",numberEqual:"The '{field}' field must be equal to {expected}.",numberNotEqual:"The '{field}' field can't be equal to {expected}.",numberInteger:"The '{field}' field must be an integer.",numberPositive:"The '{field}' field must be a positive number.",numberNegative:"The '{field}' field must be a negative number.",array:"The '{field}' field must be an array.",arrayEmpty:"The '{field}' field must not be an empty array.",arrayMin:"The '{field}' field must contain at least {expected} items.",arrayMax:"The '{field}' field must contain less than or equal to {expected} items.",arrayLength:"The '{field}' field must contain {expected} items.",arrayContains:"The '{field}' field must contain the '{expected}' item.",arrayUnique:"The '{actual}' value in '{field}' field does not unique the '{expected}' values.",arrayEnum:"The '{actual}' value in '{field}' field does not match any of the '{expected}' values.",tuple:"The '{field}' field must be an array.",tupleEmpty:"The '{field}' field must not be an empty array.",tupleLength:"The '{field}' field must contain {expected} items.",boolean:"The '{field}' field must be a boolean.",currency:"The '{field}' must be a valid currency format",date:"The '{field}' field must be a Date.",dateMin:"The '{field}' field must be greater than or equal to {expected}.",dateMax:"The '{field}' field must be less than or equal to {expected}.",enumValue:"The '{field}' field value '{expected}' does not match any of the allowed values.",equalValue:"The '{field}' field value must be equal to '{expected}'.",equalField:"The '{field}' field value must be equal to '{expected}' field value.",forbidden:"The '{field}' field is forbidden.",function:"The '{field}' field must be a function.",email:"The '{field}' field must be a valid e-mail.",emailEmpty:"The '{field}' field must not be empty.",emailMin:"The '{field}' field length must be greater than or equal to {expected} characters long.",emailMax:"The '{field}' field length must be less than or equal to {expected} characters long.",luhn:"The '{field}' field must be a valid checksum luhn.",mac:"The '{field}' field must be a valid MAC address.",object:"The '{field}' must be an Object.",objectStrict:"The object '{field}' contains forbidden keys: '{actual}'.",objectMinProps:"The object '{field}' must contain at least {expected} properties.",objectMaxProps:"The object '{field}' must contain {expected} properties at most.",url:"The '{field}' field must be a valid URL.",urlEmpty:"The '{field}' field must not be empty.",uuid:"The '{field}' field must be a valid UUID.",uuidVersion:"The '{field}' field must be a valid UUID version provided.",classInstanceOf:"The '{field}' field must be an instance of the '{expected}' class.",objectID:"The '{field}' field must be an valid ObjectID"},I=function(){const e=[];return e.push("\n\t\treturn value;\n\t"),{source:e.join("\n")}},S=function({schema:e,messages:t},n,i){const r=[];if(r.push(`\n\t\tif (!Array.isArray(value)) {\n\t\t\t${this.makeError({type:"array",actual:"value",messages:t})}\n\t\t\treturn value;\n\t\t}\n\n\t\tvar len = value.length;\n\t`),!1===e.empty&&r.push(`\n\t\t\tif (len === 0) {\n\t\t\t\t${this.makeError({type:"arrayEmpty",actual:"value",messages:t})}\n\t\t\t}\n\t\t`),null!=e.min&&r.push(`\n\t\t\tif (len < ${e.min}) {\n\t\t\t\t${this.makeError({type:"arrayMin",expected:e.min,actual:"len",messages:t})}\n\t\t\t}\n\t\t`),null!=e.max&&r.push(`\n\t\t\tif (len > ${e.max}) {\n\t\t\t\t${this.makeError({type:"arrayMax",expected:e.max,actual:"len",messages:t})}\n\t\t\t}\n\t\t`),null!=e.length&&r.push(`\n\t\t\tif (len !== ${e.length}) {\n\t\t\t\t${this.makeError({type:"arrayLength",expected:e.length,actual:"len",messages:t})}\n\t\t\t}\n\t\t`),null!=e.contains&&r.push(`\n\t\t\tif (value.indexOf(${JSON.stringify(e.contains)}) === -1) {\n\t\t\t\t${this.makeError({type:"arrayContains",expected:JSON.stringify(e.contains),actual:"value",messages:t})}\n\t\t\t}\n\t\t`),!0===e.unique&&r.push(`\n\t\t\tif(len > (new Set(value)).size) {\n\t\t\t\t${this.makeError({type:"arrayUnique",expected:"Array.from(new Set(value.filter((item, index) => value.indexOf(item) !== index)))",actual:"value",messages:t})}\n\t\t\t}\n\t\t`),null!=e.enum){const n=JSON.stringify(e.enum);r.push(`\n\t\t\tfor (var i = 0; i < value.length; i++) {\n\t\t\t\tif (${n}.indexOf(value[i]) === -1) {\n\t\t\t\t\t${this.makeError({type:"arrayEnum",expected:'"'+e.enum.join(", ")+'"',actual:"value[i]",messages:t})}\n\t\t\t\t}\n\t\t\t}\n\t\t`)}if(null!=e.items){r.push("\n\t\t\tvar arr = value;\n\t\t\tvar parentField = field;\n\t\t\tfor (var i = 0; i < arr.length; i++) {\n\t\t\t\tvalue = arr[i];\n\t\t");const t=n+"[]",s=this.getRuleFromSchema(e.items),o=`arr[i] = ${i.async?"await ":""}context.fn[%%INDEX%%](arr[i], (parentField ? parentField : "") + "[" + i + "]", parent, errors, context)`;r.push(this.compileRule(s,i,t,o,"arr[i]")),r.push("\n\t\t\t}\n\t\t"),r.push("\n\t\treturn arr;\n\t")}else r.push("\n\t\treturn value;\n\t");return{source:r.join("\n")}},D=function({schema:e,messages:t},n,i){const r=[];let s=!1;return r.push("\n\t\tvar origValue = value;\n\t"),!0===e.convert&&(s=!0,r.push('\n\t\t\tif (typeof value !== "boolean") {\n\t\t\t\tif (\n\t\t\t\tvalue === 1\n\t\t\t\t|| value === "true"\n\t\t\t\t|| value === "1"\n\t\t\t\t|| value === "on"\n\t\t\t\t) {\n\t\t\t\t\tvalue = true;\n\t\t\t\t} else if (\n\t\t\t\tvalue === 0\n\t\t\t\t|| value === "false"\n\t\t\t\t|| value === "0"\n\t\t\t\t|| value === "off"\n\t\t\t\t) {\n\t\t\t\t\tvalue = false;\n\t\t\t\t}\n\t\t\t}\n\t\t')),r.push(`\n\t\tif (typeof value !== "boolean") {\n\t\t\t${this.makeError({type:"boolean",actual:"origValue",messages:t})}\n\t\t}\n\t\t\n\t\treturn value;\n\t`),{sanitized:s,source:r.join("\n")}},A=function({schema:e,messages:t,index:n},i,r){const s=[],o=e.instanceOf.name?e.instanceOf.name:"<UnknowClass>";return r.customs[n]?r.customs[n].schema=e:r.customs[n]={schema:e},s.push(`\n\t\tif (!(value instanceof context.customs[${n}].schema.instanceOf))\n\t\t\t${this.makeError({type:"classInstanceOf",actual:"value",expected:"'"+o+"'",messages:t})}\n\t`),s.push("\n\t\treturn value;\n\t"),{source:s.join("\n")}},M=function({schema:e,messages:t,index:n},i,r){const s=[];return s.push(`\n\t\t${this.makeCustomValidator({fnName:"check",path:i,schema:e,messages:t,context:r,ruleIndex:n})}\n\t\treturn value;\n\t`),{source:s.join("\n")}};var T=function({schema:e,messages:t},n,i){const r=e.currencySymbol||null,s=e.thousandSeparator||",",o=e.decimalSeparator||".",a=e.customRegex;let l=!e.symbolOptional,c="(?=.*\\d)^(-?~1|~1-?)(([0-9]\\d{0,2}(~2\\d{3})*)|0)?(\\~3\\d{1,2})?$".replace(/~1/g,r?`\\${r}${l?"":"?"}`:"").replace("~2",s).replace("~3",o);const u=[];return u.push(`\n\t\tif (!value.match(${a||new RegExp(c)})) {\n\t\t\t${this.makeError({type:"currency",actual:"value",messages:t})}\n\t\t\treturn value;\n\t\t}\n\n\t\treturn value;\n\t`),{source:u.join("\n")}},j=function({schema:e,messages:t},n,i){const r=[];let s=!1;return r.push("\n\t\tvar origValue = value;\n\t"),!0===e.convert&&(s=!0,r.push("\n\t\t\tif (!(value instanceof Date)) {\n\t\t\t\tvalue = new Date(value);\n\t\t\t}\n\t\t")),r.push(`\n\t\tif (!(value instanceof Date) || isNaN(value.getTime()))\n\t\t\t${this.makeError({type:"date",actual:"origValue",messages:t})}\n\n\t\treturn value;\n\t`),{sanitized:s,source:r.join("\n")}};const B=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,_=/^\S+@\S+\.\S+$/;var V=function({schema:e,messages:t},n,i){const r=[],s="precise"==e.mode?B:_;let o=!1;return r.push(`\n\t\tif (typeof value !== "string") {\n\t\t\t${this.makeError({type:"string",actual:"value",messages:t})}\n\t\t\treturn value;\n\t\t}\n\t`),e.empty?r.push("\n\t\t\tif (value.length === 0) return value;\n\t\t"):r.push(`\n\t\t\tif (value.length === 0) {\n\t\t\t\t${this.makeError({type:"emailEmpty",actual:"value",messages:t})}\n\t\t\t\treturn value;\n\t\t\t}\n\t\t`),e.normalize&&(o=!0,r.push("\n\t\t\tvalue = value.trim().toLowerCase();\n\t\t")),null!=e.min&&r.push(`\n\t\t\tif (value.length < ${e.min}) {\n\t\t\t\t${this.makeError({type:"emailMin",expected:e.min,actual:"value.length",messages:t})}\n\t\t\t}\n\t\t`),null!=e.max&&r.push(`\n\t\t\tif (value.length > ${e.max}) {\n\t\t\t\t${this.makeError({type:"emailMax",expected:e.max,actual:"value.length",messages:t})}\n\t\t\t}\n\t\t`),r.push(`\n\t\tif (!${s.toString()}.test(value)) {\n\t\t\t${this.makeError({type:"email",actual:"value",messages:t})}\n\t\t}\n\n\t\treturn value;\n\t`),{sanitized:o,source:r.join("\n")}},R=function({schema:e,messages:t},n,i){return{source:`\n\t\t\tif (${JSON.stringify(e.values||[])}.indexOf(value) === -1)\n\t\t\t\t${this.makeError({type:"enumValue",expected:'"'+e.values.join(", ")+'"',actual:"value",messages:t})}\n\t\t\t\n\t\t\treturn value;\n\t\t`}},L=function({schema:e,messages:t},n,i){const r=[];return e.field?(e.strict?r.push(`\n\t\t\t\tif (value !== parent["${e.field}"])\n\t\t\t`):r.push(`\n\t\t\t\tif (value != parent["${e.field}"])\n\t\t\t`),r.push(`\n\t\t\t\t${this.makeError({type:"equalField",actual:"value",expected:JSON.stringify(e.field),messages:t})}\n\t\t`)):(e.strict?r.push(`\n\t\t\t\tif (value !== ${JSON.stringify(e.value)})\n\t\t\t`):r.push(`\n\t\t\t\tif (value != ${JSON.stringify(e.value)})\n\t\t\t`),r.push(`\n\t\t\t\t${this.makeError({type:"equalValue",actual:"value",expected:JSON.stringify(e.value),messages:t})}\n\t\t`)),r.push("\n\t\treturn value;\n\t"),{source:r.join("\n")}},z=function({schema:e,messages:t},n,i){const r=[];return r.push("\n\t\tif (value !== null && value !== undefined) {\n\t"),e.remove?r.push("\n\t\t\treturn undefined;\n\t\t"):r.push(`\n\t\t\t${this.makeError({type:"forbidden",actual:"value",messages:t})}\n\t\t`),r.push("\n\t\t}\n\n\t\treturn value;\n\t"),{source:r.join("\n")}},F=function({schema:e,messages:t},n,i){return{source:`\n\t\t\tif (typeof value !== "function")\n\t\t\t\t${this.makeError({type:"function",actual:"value",messages:t})}\n\n\t\t\treturn value;\n\t\t`}},N=function({schema:e,messages:t},n,i){const r=[];r.push("\n\t\tvar prevErrLen = errors.length;\n\t\tvar errBefore;\n\t\tvar hasValid = false;\n\t\tvar newVal = value;\n\t");for(let t=0;t<e.rules.length;t++){r.push("\n\t\t\tif (!hasValid) {\n\t\t\t\terrBefore = errors.length;\n\t\t");const s=this.getRuleFromSchema(e.rules[t]);r.push(this.compileRule(s,i,n,`var tmpVal = ${i.async?"await ":""}context.fn[%%INDEX%%](value, field, parent, errors, context);`,"tmpVal")),r.push("\n\t\t\t\tif (errors.length == errBefore) {\n\t\t\t\t\thasValid = true;\n\t\t\t\t\tnewVal = tmpVal;\n\t\t\t\t}\n\t\t\t}\n\t\t")}return r.push("\n\t\tif (hasValid) {\n\t\t\terrors.length = prevErrLen;\n\t\t}\n\n\t\treturn newVal;\n\t"),{source:r.join("\n")}},$=function({schema:e,messages:t},n,i){const r=[];r.push("\n\t\tvar origValue = value;\n\t");let s=!1;return!0===e.convert&&(s=!0,r.push('\n\t\t\tif (typeof value !== "number") {\n\t\t\t\tvalue = Number(value);\n\t\t\t}\n\t\t')),r.push(`\n\t\tif (typeof value !== "number" || isNaN(value) || !isFinite(value)) {\n\t\t\t${this.makeError({type:"number",actual:"origValue",messages:t})}\n\t\t\treturn value;\n\t\t}\n\t`),null!=e.min&&r.push(`\n\t\t\tif (value < ${e.min}) {\n\t\t\t\t${this.makeError({type:"numberMin",expected:e.min,actual:"origValue",messages:t})}\n\t\t\t}\n\t\t`),null!=e.max&&r.push(`\n\t\t\tif (value > ${e.max}) {\n\t\t\t\t${this.makeError({type:"numberMax",expected:e.max,actual:"origValue",messages:t})}\n\t\t\t}\n\t\t`),null!=e.equal&&r.push(`\n\t\t\tif (value !== ${e.equal}) {\n\t\t\t\t${this.makeError({type:"numberEqual",expected:e.equal,actual:"origValue",messages:t})}\n\t\t\t}\n\t\t`),null!=e.notEqual&&r.push(`\n\t\t\tif (value === ${e.notEqual}) {\n\t\t\t\t${this.makeError({type:"numberNotEqual",expected:e.notEqual,actual:"origValue",messages:t})}\n\t\t\t}\n\t\t`),!0===e.integer&&r.push(`\n\t\t\tif (value % 1 !== 0) {\n\t\t\t\t${this.makeError({type:"numberInteger",actual:"origValue",messages:t})}\n\t\t\t}\n\t\t`),!0===e.positive&&r.push(`\n\t\t\tif (value <= 0) {\n\t\t\t\t${this.makeError({type:"numberPositive",actual:"origValue",messages:t})}\n\t\t\t}\n\t\t`),!0===e.negative&&r.push(`\n\t\t\tif (value >= 0) {\n\t\t\t\t${this.makeError({type:"numberNegative",actual:"origValue",messages:t})}\n\t\t\t}\n\t\t`),r.push("\n\t\treturn value;\n\t"),{sanitized:s,source:r.join("\n")}};const H=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/,W=/["'\\\n\r\u2028\u2029]/g;function G(e){return e.replace(W,(function(e){switch(e){case'"':case"'":case"\\":return"\\"+e;case"\n":return"\\n";case"\r":return"\\r";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029"}}))}var q=function({schema:e,messages:t},n,i){const r=[];r.push(`\n\t\tif (typeof value !== "object" || value === null || Array.isArray(value)) {\n\t\t\t${this.makeError({type:"object",actual:"value",messages:t})}\n\t\t\treturn value;\n\t\t}\n\t`);const s=e.properties||e.props;if(s){r.push("var parentObj = value;"),r.push("var parentField = field;");const o=Object.keys(s);for(let e=0;e<o.length;e++){const t=o[e],a=G(t),l=H.test(a)?`.${a}`:`['${a}']`,c=`parentObj${l}`,u=(n?n+".":"")+t;r.push(`\n// Field: ${G(u)}`),r.push(`field = parentField ? parentField + "${l}" : "${a}";`),r.push(`value = ${c};`);const p=this.getRuleFromSchema(s[t]),h=`\n\t\t\t\t${c} = ${i.async?"await ":""}context.fn[%%INDEX%%](value, field, parentObj, errors, context);\n\t\t\t`;r.push(this.compileRule(p,i,u,h,c))}if(e.strict){const n=Object.keys(s);r.push(`\n\t\t\t\tfield = parentField;\n\t\t\t\tvar invalidProps = [];\n\t\t\t\tvar props = Object.keys(parentObj);\n\n\t\t\t\tfor (let i = 0; i < props.length; i++) {\n\t\t\t\t\tif (${JSON.stringify(n)}.indexOf(props[i]) === -1) {\n\t\t\t\t\t\tinvalidProps.push(props[i]);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tif (invalidProps.length) {\n\t\t\t`),"remove"==e.strict?r.push("\n\t\t\t\t\tinvalidProps.forEach(function(field) {\n\t\t\t\t\t\tdelete parentObj[field];\n\t\t\t\t\t});\n\t\t\t\t"):r.push(`\n\t\t\t\t\t${this.makeError({type:"objectStrict",expected:'"'+n.join(", ")+'"',actual:"invalidProps.join(', ')",messages:t})}\n\t\t\t\t`),r.push("\n\t\t\t\t}\n\t\t\t")}}return null==e.minProps&&null==e.maxProps||(e.strict?r.push(`\n\t\t\t\tprops = Object.keys(${s?"parentObj":"value"});\n\t\t\t`):r.push(`\n\t\t\t\tvar props = Object.keys(${s?"parentObj":"value"});\n\t\t\t\t${s?"field = parentField;":""}\n\t\t\t`)),null!=e.minProps&&r.push(`\n\t\t\tif (props.length < ${e.minProps}) {\n\t\t\t\t${this.makeError({type:"objectMinProps",expected:e.minProps,actual:"props.length",messages:t})}\n\t\t\t}\n\t\t`),null!=e.maxProps&&r.push(`\n\t\t\tif (props.length > ${e.maxProps}) {\n\t\t\t\t${this.makeError({type:"objectMaxProps",expected:e.maxProps,actual:"props.length",messages:t})}\n\t\t\t}\n\t\t`),s?r.push("\n\t\t\treturn parentObj;\n\t\t"):r.push("\n\t\t\treturn value;\n\t\t"),{source:r.join("\n")}},J=function({schema:e,messages:t,index:n},i,r){const s=[];return r.customs[n]?r.customs[n].schema=e:r.customs[n]={schema:e},s.push(`\n\t\tconst ObjectID = context.customs[${n}].schema.ObjectID;\n\t\tif (!ObjectID.isValid(value)) {\n\t\t\t${this.makeError({type:"objectID",actual:"value",messages:t})}\n\t\t\treturn;\n\t\t}\n\t`),!0===e.convert?s.push("return new ObjectID(value)"):"hexString"===e.convert?s.push("return value.toString()"):s.push("return value"),{source:s.join("\n")}};const U=/^-?[0-9]\d*(\.\d+)?$/,K=/^[a-zA-Z]+$/,X=/^[a-zA-Z0-9]+$/,Q=/^[a-zA-Z0-9_-]+$/,Z=/^[0-9a-fA-F]+$/,Y=/^(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}==|[A-Za-z0-9+/]{3}=)?$/;var ee=function({schema:e,messages:t},n,i){const r=[];let s=!1;if(!0===e.convert&&(s=!0,r.push('\n\t\t\tif (typeof value !== "string") {\n\t\t\t\tvalue = String(value);\n\t\t\t}\n\t\t')),r.push(`\n\t\tif (typeof value !== "string") {\n\t\t\t${this.makeError({type:"string",actual:"value",messages:t})}\n\t\t\treturn value;\n\t\t}\n\n\t\tvar origValue = value;\n\t`),e.trim&&(s=!0,r.push("\n\t\t\tvalue = value.trim();\n\t\t")),e.trimLeft&&(s=!0,r.push("\n\t\t\tvalue = value.trimLeft();\n\t\t")),e.trimRight&&(s=!0,r.push("\n\t\t\tvalue = value.trimRight();\n\t\t")),e.padStart){s=!0;const t=null!=e.padChar?e.padChar:" ";r.push(`\n\t\t\tvalue = value.padStart(${e.padStart}, ${JSON.stringify(t)});\n\t\t`)}if(e.padEnd){s=!0;const t=null!=e.padChar?e.padChar:" ";r.push(`\n\t\t\tvalue = value.padEnd(${e.padEnd}, ${JSON.stringify(t)});\n\t\t`)}if(e.lowercase&&(s=!0,r.push("\n\t\t\tvalue = value.toLowerCase();\n\t\t")),e.uppercase&&(s=!0,r.push("\n\t\t\tvalue = value.toUpperCase();\n\t\t")),e.localeLowercase&&(s=!0,r.push("\n\t\t\tvalue = value.toLocaleLowerCase();\n\t\t")),e.localeUppercase&&(s=!0,r.push("\n\t\t\tvalue = value.toLocaleUpperCase();\n\t\t")),r.push("\n\t\t\tvar len = value.length;\n\t"),!1===e.empty&&r.push(`\n\t\t\tif (len === 0) {\n\t\t\t\t${this.makeError({type:"stringEmpty",actual:"value",messages:t})}\n\t\t\t}\n\t\t`),null!=e.min&&r.push(`\n\t\t\tif (len < ${e.min}) {\n\t\t\t\t${this.makeError({type:"stringMin",expected:e.min,actual:"len",messages:t})}\n\t\t\t}\n\t\t`),null!=e.max&&r.push(`\n\t\t\tif (len > ${e.max}) {\n\t\t\t\t${this.makeError({type:"stringMax",expected:e.max,actual:"len",messages:t})}\n\t\t\t}\n\t\t`),null!=e.length&&r.push(`\n\t\t\tif (len !== ${e.length}) {\n\t\t\t\t${this.makeError({type:"stringLength",expected:e.length,actual:"len",messages:t})}\n\t\t\t}\n\t\t`),null!=e.pattern){let n=e.pattern;"string"==typeof e.pattern&&(n=new RegExp(e.pattern,e.patternFlags));const i=`\n\t\t\tif (!${n.toString()}.test(value))\n\t\t\t\t${this.makeError({type:"stringPattern",expected:`"${n.toString().replace(/"/g,"\\$&")}"`,actual:"origValue",messages:t})}\n\t\t`;r.push(`\n\t\t\tif (${e.empty} === true && len === 0) {\n\t\t\t\t// Do nothing\n\t\t\t} else {\n\t\t\t\t${i}\n\t\t\t}\n\t\t`)}if(null!=e.contains&&r.push(`\n\t\t\tif (value.indexOf("${e.contains}") === -1) {\n\t\t\t\t${this.makeError({type:"stringContains",expected:'"'+e.contains+'"',actual:"origValue",messages:t})}\n\t\t\t}\n\t\t`),null!=e.enum){const n=JSON.stringify(e.enum);r.push(`\n\t\t\tif (${n}.indexOf(value) === -1) {\n\t\t\t\t${this.makeError({type:"stringEnum",expected:'"'+e.enum.join(", ")+'"',actual:"origValue",messages:t})}\n\t\t\t}\n\t\t`)}return!0===e.numeric&&r.push(`\n\t\t\tif (!${U.toString()}.test(value) ) {\n\t\t\t\t${this.makeError({type:"stringNumeric",actual:"origValue",messages:t})}\n\t\t\t}\n\t\t`),!0===e.alpha&&r.push(`\n\t\t\tif(!${K.toString()}.test(value)) {\n\t\t\t\t${this.makeError({type:"stringAlpha",actual:"origValue",messages:t})}\n\t\t\t}\n\t\t`),!0===e.alphanum&&r.push(`\n\t\t\tif(!${X.toString()}.test(value)) {\n\t\t\t\t${this.makeError({type:"stringAlphanum",actual:"origValue",messages:t})}\n\t\t\t}\n\t\t`),!0===e.alphadash&&r.push(`\n\t\t\tif(!${Q.toString()}.test(value)) {\n\t\t\t\t${this.makeError({type:"stringAlphadash",actual:"origValue",messages:t})}\n\t\t\t}\n\t\t`),!0===e.hex&&r.push(`\n\t\t\tif(value.length % 2 !== 0 || !${Z.toString()}.test(value)) {\n\t\t\t\t${this.makeError({type:"stringHex",actual:"origValue",messages:t})}\n\t\t\t}\n\t\t`),!0===e.singleLine&&r.push(`\n\t\t\tif(value.includes("\\n")) {\n\t\t\t\t${this.makeError({type:"stringSingleLine",messages:t})}\n\t\t\t}\n\t\t`),!0===e.base64&&r.push(`\n\t\t\tif(!${Y.toString()}.test(value)) {\n\t\t\t\t${this.makeError({type:"stringBase64",actual:"origValue",messages:t})}\n\t\t\t}\n\t\t`),r.push("\n\t\treturn value;\n\t"),{sanitized:s,source:r.join("\n")}},te=function({schema:e,messages:t},n,i){const r=[];if(null!=e.items){if(!Array.isArray(e.items))throw new Error(`Invalid '${e.type}' schema. The 'items' field must be an array.`);if(0===e.items.length)throw new Error(`Invalid '${e.type}' schema. The 'items' field must not be an empty array.`)}if(r.push(`\n\t\tif (!Array.isArray(value)) {\n\t\t\t${this.makeError({type:"tuple",actual:"value",messages:t})}\n\t\t\treturn value;\n\t\t}\n\n\t\tvar len = value.length;\n\t`),!1===e.empty&&r.push(`\n\t\t\tif (len === 0) {\n\t\t\t\t${this.makeError({type:"tupleEmpty",actual:"value",messages:t})}\n\t\t\t\treturn value;\n\t\t\t}\n\t\t`),null!=e.items){r.push(`\n\t\t\tif (${e.empty} !== false && len === 0) {\n\t\t\t\treturn value;\n\t\t\t}\n\n\t\t\tif (len !== ${e.items.length}) {\n\t\t\t\t${this.makeError({type:"tupleLength",expected:e.items.length,actual:"len",messages:t})}\n\t\t\t\treturn value;\n\t\t\t}\n\t\t`),r.push("\n\t\t\tvar arr = value;\n\t\t\tvar parentField = field;\n\t\t");for(let t=0;t<e.items.length;t++){r.push(`\n\t\t\tvalue = arr[${t}];\n\t\t`);const s=`${n}[${t}]`,o=this.getRuleFromSchema(e.items[t]),a=`\n\t\t\tarr[${t}] = ${i.async?"await ":""}context.fn[%%INDEX%%](arr[${t}], (parentField ? parentField : "") + "[" + ${t} + "]", parent, errors, context);\n\t\t`;r.push(this.compileRule(o,i,s,a,`arr[${t}]`))}r.push("\n\t\treturn arr;\n\t")}else r.push("\n\t\treturn value;\n\t");return{source:r.join("\n")}};const ne=/^https?:\/\/\S+/;var ie=function({schema:e,messages:t},n,i){const r=[];return r.push(`\n\t\tif (typeof value !== "string") {\n\t\t\t${this.makeError({type:"string",actual:"value",messages:t})}\n\t\t\treturn value;\n\t\t}\n\t`),e.empty?r.push("\n\t\t\tif (value.length === 0) return value;\n\t\t"):r.push(`\n\t\t\tif (value.length === 0) {\n\t\t\t\t${this.makeError({type:"urlEmpty",actual:"value",messages:t})}\n\t\t\t\treturn value;\n\t\t\t}\n\t\t`),r.push(`\n\t\tif (!${ne.toString()}.test(value)) {\n\t\t\t${this.makeError({type:"url",actual:"value",messages:t})}\n\t\t}\n\n\t\treturn value;\n\t`),{source:r.join("\n")}};const re=/^([0-9a-f]{8}-[0-9a-f]{4}-[1-6][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}|[0]{8}-[0]{4}-[0]{4}-[0]{4}-[0]{12})$/i;var se=function({schema:e,messages:t},n){const i=[];return i.push(`\n\t\tif (typeof value !== "string") {\n\t\t\t${this.makeError({type:"string",actual:"value",messages:t})}\n\t\t\treturn value;\n\t\t}\n\n\t\tvar val = value.toLowerCase();\n\t\tif (!${re.toString()}.test(val)) {\n\t\t\t${this.makeError({type:"uuid",actual:"value",messages:t})}\n\t\t\treturn value;\n\t\t}\n\n\t\tconst version = val.charAt(14) | 0;\n\t`),parseInt(e.version)<7&&i.push(`\n\t\t\tif (${e.version} !== version) {\n\t\t\t\t${this.makeError({type:"uuidVersion",expected:e.version,actual:"version",messages:t})}\n\t\t\t\treturn value;\n\t\t\t}\n\t\t`),i.push(`\n\t\tswitch (version) {\n\t\tcase 0:\n\t\tcase 1:\n\t\tcase 2:\n\t\tcase 6:\n\t\t\tbreak;\n\t\tcase 3:\n\t\tcase 4:\n\t\tcase 5:\n\t\t\tif (["8", "9", "a", "b"].indexOf(val.charAt(19)) === -1) {\n\t\t\t\t${this.makeError({type:"uuid",actual:"value",messages:t})}\n\t\t\t}\n\t\t}\n\n\t\treturn value;\n\t`),{source:i.join("\n")}};const oe=/^((([a-f0-9][a-f0-9]+[-]){5}|([a-f0-9][a-f0-9]+[:]){5})([a-f0-9][a-f0-9])$)|(^([a-f0-9][a-f0-9][a-f0-9][a-f0-9]+[.]){2}([a-f0-9][a-f0-9][a-f0-9][a-f0-9]))$/i;var ae=function({schema:e,messages:t},n,i){return{source:`\n\t\t\tif (typeof value !== "string") {\n\t\t\t\t${this.makeError({type:"string",actual:"value",messages:t})}\n\t\t\t\treturn value;\n\t\t\t}\n\n\t\t\tvar v = value.toLowerCase();\n\t\t\tif (!${oe.toString()}.test(v)) {\n\t\t\t\t${this.makeError({type:"mac",actual:"value",messages:t})}\n\t\t\t}\n\t\t\t\n\t\t\treturn value;\n\t\t`}},le=function({schema:e,messages:t},n,i){return{source:`\n\t\t\tif (typeof value !== "string") {\n\t\t\t\t${this.makeError({type:"string",actual:"value",messages:t})}\n\t\t\t\treturn value;\n\t\t\t}\n\n\t\t\tif (typeof value !== "string")\n\t\t\t\tvalue = String(value);\n\n\t\t\tval = value.replace(/\\D+/g, "");\n\n\t\t\tvar array = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];\n\t\t\tvar len = val ? val.length : 0,\n\t\t\t\tbit = 1,\n\t\t\t\tsum = 0;\n\t\t\twhile (len--) {\n\t\t\t\tsum += !(bit ^= 1) ? parseInt(val[len], 10) : array[val[len]];\n\t\t\t}\n\n\t\t\tif (!(sum % 10 === 0 && sum > 0)) {\n\t\t\t\t${this.makeError({type:"luhn",actual:"value",messages:t})}\n\t\t\t}\n\n\t\t\treturn value;\n\t\t`}};let ce,ue,pe,he;var de=function(e){ce||(ce=E("prettier"),ue={parser:"babel",useTabs:!1,printWidth:120,trailingComma:"none",tabWidth:4,singleQuote:!1,semi:!0,bracketSpacing:!0},pe=E("cli-highlight"),he={language:"js",theme:pe.fromJson({keyword:["white","bold"],built_in:"magenta",literal:"cyan",number:"magenta",regexp:"red",string:["yellow","bold"],symbol:"plain",class:"blue",attr:"plain",function:["white","bold"],title:"plain",params:"green",comment:"grey"})});const t=ce.format(e,ue);return pe.highlight(t,he)};let fe;try{fe=new Function("return Object.getPrototypeOf(async function(){}).constructor")()}catch(e){}const me=P,ve=(e,t,n)=>{return e.replace(t,null==(i=n)?"":"function"==typeof i.toString?i:typeof i);var i};var ye=class{constructor(e){if(this.opts={},this.defaults={},this.messages=Object.assign({},O),this.rules={any:I,array:S,boolean:D,class:A,custom:M,currency:T,date:j,email:V,enum:R,equal:L,forbidden:z,function:F,multi:N,number:$,object:q,objectID:J,string:ee,tuple:te,url:ie,uuid:se,mac:ae,luhn:le},this.aliases={},this.cache=new Map,e){if(me(this.opts,e),e.defaults&&me(this.defaults,e.defaults),e.messages)for(const t in e.messages)this.addMessage(t,e.messages[t]);if(e.aliases)for(const t in e.aliases)this.alias(t,e.aliases[t]);if(e.customRules)for(const t in e.customRules)this.add(t,e.customRules[t]);if(e.plugins){const t=e.plugins;if(!Array.isArray(t))throw new Error("Plugins type must be array");t.forEach(this.plugin.bind(this))}if(this.opts.debug){let e=function(e){return e};"undefined"==typeof window&&(e=de),this._formatter=e}}}validate(e,t){return this.compile(t)(e)}wrapRequiredCheckSourceCode(e,t,n,i){const r=[];let s,o=!0===e.schema.optional||"forbidden"===e.schema.type,a=!0===e.schema.optional||!0===e.schema.nullable||"forbidden"===e.schema.type;if(null!=e.schema.default){let t;o=!1,!0!==e.schema.nullable&&(a=!1),"function"==typeof e.schema.default?(n.customs[e.index]||(n.customs[e.index]={}),n.customs[e.index].defaultFn=e.schema.default,t=`context.customs[${e.index}].defaultFn()`):t=JSON.stringify(e.schema.default),s=`\n\t\t\t\tvalue = ${t};\n\t\t\t\t${i} = value;\n\t\t\t`}else s=this.makeError({type:"required",actual:"value",messages:e.messages});return r.push(`\n\t\t\tif (value === undefined) { ${o?"\n// allow undefined\n":s} }\n\t\t\telse if (value === null) { ${a?"\n// allow null\n":s} }\n\t\t\t${t?`else { ${t} }`:""}\n\t\t`),r.join("\n")}compile(e){if(null===e||"object"!=typeof e)throw new Error("Invalid schema.");const t=this,n={index:0,async:!0===e.$$async,rules:[],fn:[],customs:{},utils:{replace:ve}};if(this.cache.clear(),delete e.$$async,n.async&&!fe)throw new Error("Asynchronous mode is not supported.");if(!0!==e.$$root)if(Array.isArray(e)){e=this.getRuleFromSchema(e).schema}else{const t=Object.assign({},e);e={type:"object",strict:t.$$strict,properties:t},delete t.$$strict}const i=["var errors = [];","var field;","var parent = null;"],r=this.getRuleFromSchema(e);i.push(this.compileRule(r,n,null,(n.async?"await ":"")+"context.fn[%%INDEX%%](value, field, null, errors, context);","value")),i.push("if (errors.length) {"),i.push("\n\t\t\treturn errors.map(err => {\n\t\t\t\tif (err.message) {\n\t\t\t\t\terr.message = context.utils.replace(err.message, /\\{field\\}/g, err.field);\n\t\t\t\t\terr.message = context.utils.replace(err.message, /\\{expected\\}/g, err.expected);\n\t\t\t\t\terr.message = context.utils.replace(err.message, /\\{actual\\}/g, err.actual);\n\t\t\t\t}\n\n\t\t\t\treturn err;\n\t\t\t});\n\t\t"),i.push("}"),i.push("return true;");const s=i.join("\n"),o=new(n.async?fe:Function)("value","context",s);this.opts.debug&&console.log(this._formatter("// Main check function\n"+o.toString())),this.cache.clear();const a=function(e,i){return n.data=e,i&&i.meta&&(n.meta=i.meta),o.call(t,e,n)};return a.async=n.async,a}compileRule(e,t,n,i,r){const s=[],o=this.cache.get(e.schema);if(o)(e=o).cycle=!0,e.cycleStack=[],s.push(this.wrapRequiredCheckSourceCode(e,`\n\t\t\t\tvar rule = context.rules[${e.index}];\n\t\t\t\tif (rule.cycleStack.indexOf(value) === -1) {\n\t\t\t\t\trule.cycleStack.push(value);\n\t\t\t\t\t${i.replace(/%%INDEX%%/g,e.index)}\n\t\t\t\t\trule.cycleStack.pop(value);\n\t\t\t\t}\n\t\t\t`,t,r));else{this.cache.set(e.schema,e),e.index=t.index,t.rules[t.index]=e;const o=null!=n?n:"$$root";t.index++;const a=e.ruleFunction.call(this,e,n,t);a.source=a.source.replace(/%%INDEX%%/g,e.index);const l=new(t.async?fe:Function)("value","field","parent","errors","context",a.source);t.fn[e.index]=l.bind(this),s.push(this.wrapRequiredCheckSourceCode(e,i.replace(/%%INDEX%%/g,e.index),t,r)),s.push(this.makeCustomValidator({vName:r,path:o,schema:e.schema,context:t,messages:e.messages,ruleIndex:e.index})),this.opts.debug&&console.log(this._formatter(`// Context.fn[${e.index}]\n`+l.toString()))}return s.join("\n")}getRuleFromSchema(e){if("string"==typeof e)e=this.parseShortHand(e);else if(Array.isArray(e)){if(0==e.length)throw new Error("Invalid schema.");const t=(e={type:"multi",rules:e}).rules.map((e=>this.getRuleFromSchema(e))).every((e=>1==e.schema.optional));t&&(e.optional=!0)}if(e.$$type){const t=e.$$type,n=this.getRuleFromSchema(t).schema;delete e.$$type;const i=Object.assign({},e);for(const t in e)delete e[t];me(e,n,{skipIfExist:!0}),e.props=i}const t=this.aliases[e.type];t&&(delete e.type,e=me(e,t,{skipIfExist:!0}));const n=this.rules[e.type];if(!n)throw new Error("Invalid '"+e.type+"' type in validator schema.");return{messages:Object.assign({},this.messages,e.messages),schema:me(e,this.defaults[e.type],{skipIfExist:!0}),ruleFunction:n}}parseShortHand(e){const t=e.split("|").map((e=>e.trim()));let n,i=t[0];return n=i.endsWith("[]")?this.getRuleFromSchema({type:"array",items:i.slice(0,-2)}).schema:{type:t[0]},t.slice(1).map((e=>{const t=e.indexOf(":");if(-1!==t){const i=e.substr(0,t).trim();let r=e.substr(t+1).trim();"true"===r||"false"===r?r="true"===r:Number.isNaN(Number(r))||(r=Number(r)),n[i]=r}else e.startsWith("no-")?n[e.slice(3)]=!1:n[e]=!0})),n}makeError({type:e,field:t,expected:n,actual:i,messages:r}){const s={type:`"${e}"`,message:`"${r[e]}"`};s.field=t?`"${t}"`:"field",null!=n&&(s.expected=n),null!=i&&(s.actual=i);return`errors.push({ ${Object.keys(s).map((e=>`${e}: ${s[e]}`)).join(", ")} });`}makeCustomValidator({vName:e="value",fnName:t="custom",ruleIndex:n,path:i,schema:r,context:s,messages:o}){const a="rule"+n,l="fnCustomErrors"+n;if("function"==typeof r[t]){if(s.customs[n]?(s.customs[n].messages=o,s.customs[n].schema=r):s.customs[n]={messages:o,schema:r},this.opts.useNewCustomCheckerFunction)return`\n               \t\tconst ${a} = context.customs[${n}];\n\t\t\t\t\tconst ${l} = [];\n\t\t\t\t\t${e} = ${s.async?"await ":""}${a}.schema.${t}.call(this, ${e}, ${l} , ${a}.schema, "${i}", parent, context);\n\t\t\t\t\tif (Array.isArray(${l} )) {\n                  \t\t${l} .forEach(err => errors.push(Object.assign({ message: ${a}.messages[err.type], field }, err)));\n\t\t\t\t\t}\n\t\t\t\t`;const c="res_"+a;return`\n\t\t\t\tconst ${a} = context.customs[${n}];\n\t\t\t\tconst ${c} = ${s.async?"await ":""}${a}.schema.${t}.call(this, ${e}, ${a}.schema, "${i}", parent, context);\n\t\t\t\tif (Array.isArray(${c})) {\n\t\t\t\t\t${c}.forEach(err => errors.push(Object.assign({ message: ${a}.messages[err.type], field }, err)));\n\t\t\t\t}\n\t\t`}return""}add(e,t){this.rules[e]=t}addMessage(e,t){this.messages[e]=t}alias(e,t){if(this.rules[e])throw new Error("Alias name must not be a rule name");this.aliases[e]=t}plugin(e){if("function"!=typeof e)throw new Error("Plugin fn type must be function");return e(this)}},ge=ye,be="INUMBER",ke="IOP1",we="IOP2",xe="IOP3",Ce="IVAR",Ee="IVARNAME",Pe="IFUNCALL",Oe="IFUNDEF",Ie="IEXPR",Se="IEXPREVAL",De="IMEMBER",Ae="IENDSTATEMENT",Me="IARRAY";function Te(e,t){this.type=e,this.value=null!=t?t:0}function je(e){return new Te(ke,e)}function Be(e){return new Te(we,e)}function _e(e){return new Te(xe,e)}function Ve(e,t,n,i,r){for(var s,o,a,l,c=[],u=[],p=0;p<e.length;p++){var h=e[p],d=h.type;if(d===be||d===Ee)Array.isArray(h.value)?c.push.apply(c,Ve(h.value.map((function(e){return new Te(be,e)})).concat(new Te(Me,h.value.length)),t,n,i,r)):c.push(h);else if(d===Ce&&r.hasOwnProperty(h.value))h=new Te(be,r[h.value]),c.push(h);else if(d===we&&c.length>1)o=c.pop(),s=c.pop(),l=n[h.value],h=new Te(be,l(s.value,o.value)),c.push(h);else if(d===xe&&c.length>2)a=c.pop(),o=c.pop(),s=c.pop(),"?"===h.value?c.push(s.value?o.value:a.value):(l=i[h.value],h=new Te(be,l(s.value,o.value,a.value)),c.push(h));else if(d===ke&&c.length>0)s=c.pop(),l=t[h.value],h=new Te(be,l(s.value)),c.push(h);else if(d===Ie){for(;c.length>0;)u.push(c.shift());u.push(new Te(Ie,Ve(h.value,t,n,i,r)))}else if(d===De&&c.length>0)s=c.pop(),c.push(new Te(be,s.value[h.value]));else{for(;c.length>0;)u.push(c.shift());u.push(h)}}for(;c.length>0;)u.push(c.shift());return u}function Re(e,t,n){for(var i=[],r=0;r<e.length;r++){var s=e[r],o=s.type;if(o===Ce&&s.value===t)for(var a=0;a<n.tokens.length;a++){var l,c=n.tokens[a];l=c.type===ke?je(c.value):c.type===we?Be(c.value):c.type===xe?_e(c.value):new Te(c.type,c.value),i.push(l)}else o===Ie?i.push(new Te(Ie,Re(s.value,t,n))):i.push(s)}return i}function Le(e,t,n){var i,r,s,o,a,l,c=[];if(Fe(e))return Ne(e,n);for(var u=e.length,p=0;p<u;p++){var h=e[p],d=h.type;if(d===be||d===Ee)c.push(h.value);else if(d===we)r=c.pop(),i=c.pop(),"and"===h.value?c.push(!!i&&!!Le(r,t,n)):"or"===h.value?c.push(!!i||!!Le(r,t,n)):"="===h.value?(o=t.binaryOps[h.value],c.push(o(i,Le(r,t,n),n))):(o=t.binaryOps[h.value],c.push(o(Ne(i,n),Ne(r,n))));else if(d===xe)s=c.pop(),r=c.pop(),i=c.pop(),"?"===h.value?c.push(Le(i?r:s,t,n)):(o=t.ternaryOps[h.value],c.push(o(Ne(i,n),Ne(r,n),Ne(s,n))));else if(d===Ce)if(h.value in t.functions)c.push(t.functions[h.value]);else if(h.value in t.unaryOps&&t.parser.isOperatorEnabled(h.value))c.push(t.unaryOps[h.value]);else{var f=n[h.value];if(void 0===f)throw new Error("undefined variable: "+h.value);c.push(f)}else if(d===ke)i=c.pop(),o=t.unaryOps[h.value],c.push(o(Ne(i,n)));else if(d===Pe){for(l=h.value,a=[];l-- >0;)a.unshift(Ne(c.pop(),n));if(!(o=c.pop()).apply||!o.call)throw new Error(o+" is not a function");c.push(o.apply(void 0,a))}else if(d===Oe)c.push(function(){for(var e=c.pop(),i=[],r=h.value;r-- >0;)i.unshift(c.pop());var s=c.pop(),o=function(){for(var r=Object.assign({},n),s=0,o=i.length;s<o;s++)r[i[s]]=arguments[s];return Le(e,t,r)};return Object.defineProperty(o,"name",{value:s,writable:!1}),n[s]=o,o}());else if(d===Ie)c.push(ze(h,t));else if(d===Se)c.push(h);else if(d===De)i=c.pop(),c.push(i[h.value]);else if(d===Ae)c.pop();else{if(d!==Me)throw new Error("invalid Expression");for(l=h.value,a=[];l-- >0;)a.unshift(c.pop());c.push(a)}}if(c.length>1)throw new Error("invalid Expression (parity)");return 0===c[0]?0:Ne(c[0],n)}function ze(e,t,n){return Fe(e)?e:{type:Se,value:function(n){return Le(e.value,t,n)}}}function Fe(e){return e&&e.type===Se}function Ne(e,t){return Fe(e)?e.value(t):e}function $e(e,t){for(var n,i,r,s,o,a,l=[],c=0;c<e.length;c++){var u=e[c],p=u.type;if(p===be)"number"==typeof u.value&&u.value<0?l.push("("+u.value+")"):Array.isArray(u.value)?l.push("["+u.value.map(He).join(", ")+"]"):l.push(He(u.value));else if(p===we)i=l.pop(),n=l.pop(),s=u.value,t?"^"===s?l.push("Math.pow("+n+", "+i+")"):"and"===s?l.push("(!!"+n+" && !!"+i+")"):"or"===s?l.push("(!!"+n+" || !!"+i+")"):"||"===s?l.push("(function(a,b){ return Array.isArray(a) && Array.isArray(b) ? a.concat(b) : String(a) + String(b); }(("+n+"),("+i+")))"):"=="===s?l.push("("+n+" === "+i+")"):"!="===s?l.push("("+n+" !== "+i+")"):"["===s?l.push(n+"[("+i+") | 0]"):l.push("("+n+" "+s+" "+i+")"):"["===s?l.push(n+"["+i+"]"):l.push("("+n+" "+s+" "+i+")");else if(p===xe){if(r=l.pop(),i=l.pop(),n=l.pop(),"?"!==(s=u.value))throw new Error("invalid Expression");l.push("("+n+" ? "+i+" : "+r+")")}else if(p===Ce||p===Ee)l.push(u.value);else if(p===ke)n=l.pop(),"-"===(s=u.value)||"+"===s?l.push("("+s+n+")"):t?"not"===s?l.push("(!"+n+")"):"!"===s?l.push("fac("+n+")"):l.push(s+"("+n+")"):"!"===s?l.push("("+n+"!)"):l.push("("+s+" "+n+")");else if(p===Pe){for(a=u.value,o=[];a-- >0;)o.unshift(l.pop());s=l.pop(),l.push(s+"("+o.join(", ")+")")}else if(p===Oe){for(i=l.pop(),a=u.value,o=[];a-- >0;)o.unshift(l.pop());n=l.pop(),t?l.push("("+n+" = function("+o.join(", ")+") { return "+i+" })"):l.push("("+n+"("+o.join(", ")+") = "+i+")")}else if(p===De)n=l.pop(),l.push(n+"."+u.value);else if(p===Me){for(a=u.value,o=[];a-- >0;)o.unshift(l.pop());l.push("["+o.join(", ")+"]")}else if(p===Ie)l.push("("+$e(u.value,t)+")");else if(p!==Ae)throw new Error("invalid Expression")}return l.length>1&&(l=t?[l.join(",")]:[l.join(";")]),String(l[0])}function He(e){return"string"==typeof e?JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029"):e}function We(e,t){for(var n=0;n<e.length;n++)if(e[n]===t)return!0;return!1}function Ge(e,t,n){for(var i=!!(n=n||{}).withMembers,r=null,s=0;s<e.length;s++){var o=e[s];o.type===Ce||o.type===Ee?i||We(t,o.value)?null!==r?(We(t,r)||t.push(r),r=o.value):r=o.value:t.push(o.value):o.type===De&&i&&null!==r?r+="."+o.value:o.type===Ie?Ge(o.value,t,n):null!==r&&(We(t,r)||t.push(r),r=null)}null===r||We(t,r)||t.push(r)}function qe(e,t){this.tokens=e,this.parser=t,this.unaryOps=t.unaryOps,this.binaryOps=t.binaryOps,this.ternaryOps=t.ternaryOps,this.functions=t.functions}Te.prototype.toString=function(){switch(this.type){case be:case ke:case we:case xe:case Ce:case Ee:case Ae:return this.value;case Pe:return"CALL "+this.value;case Oe:return"DEF "+this.value;case Me:return"ARRAY "+this.value;case De:return"."+this.value;default:return"Invalid Instruction"}},qe.prototype.simplify=function(e){return e=e||{},new qe(Ve(this.tokens,this.unaryOps,this.binaryOps,this.ternaryOps,e),this.parser)},qe.prototype.substitute=function(e,t){return t instanceof qe||(t=this.parser.parse(String(t))),new qe(Re(this.tokens,e,t),this.parser)},qe.prototype.evaluate=function(e){return e=e||{},Le(this.tokens,this,e)},qe.prototype.toString=function(){return $e(this.tokens,!1)},qe.prototype.symbols=function(e){e=e||{};var t=[];return Ge(this.tokens,t,e),t},qe.prototype.variables=function(e){e=e||{};var t=[];Ge(this.tokens,t,e);var n=this.functions;return t.filter((function(e){return!(e in n)}))},qe.prototype.toJSFunction=function(e,t){var n=this,i=new Function(e,"with(this.functions) with (this.ternaryOps) with (this.binaryOps) with (this.unaryOps) { return "+$e(this.simplify(t).tokens,!0)+"; }");return function(){return i.apply(n,arguments)}};var Je="TEOF",Ue="TOP",Ke="TNUMBER",Xe="TSTRING",Qe="TPAREN",Ze="TBRACKET",Ye="TCOMMA",et="TNAME",tt="TSEMICOLON";function nt(e,t,n){this.type=e,this.value=t,this.index=n}function it(e,t){this.pos=0,this.current=null,this.unaryOps=e.unaryOps,this.binaryOps=e.binaryOps,this.ternaryOps=e.ternaryOps,this.consts=e.consts,this.expression=t,this.savedPosition=0,this.savedCurrent=null,this.options=e.options,this.parser=e}nt.prototype.toString=function(){return this.type+": "+this.value},it.prototype.newToken=function(e,t,n){return new nt(e,t,null!=n?n:this.pos)},it.prototype.save=function(){this.savedPosition=this.pos,this.savedCurrent=this.current},it.prototype.restore=function(){this.pos=this.savedPosition,this.current=this.savedCurrent},it.prototype.next=function(){return this.pos>=this.expression.length?this.newToken(Je,"EOF"):this.isWhitespace()||this.isComment()?this.next():this.isRadixInteger()||this.isNumber()||this.isOperator()||this.isString()||this.isParen()||this.isBracket()||this.isComma()||this.isSemicolon()||this.isNamedOp()||this.isConst()||this.isName()?this.current:void this.parseError('Unknown character "'+this.expression.charAt(this.pos)+'"')},it.prototype.isString=function(){var e=!1,t=this.pos,n=this.expression.charAt(t);if("'"===n||'"'===n)for(var i=this.expression.indexOf(n,t+1);i>=0&&this.pos<this.expression.length;){if(this.pos=i+1,"\\"!==this.expression.charAt(i-1)){var r=this.expression.substring(t+1,i);this.current=this.newToken(Xe,this.unescape(r),t),e=!0;break}i=this.expression.indexOf(n,i+1)}return e},it.prototype.isParen=function(){var e=this.expression.charAt(this.pos);return("("===e||")"===e)&&(this.current=this.newToken(Qe,e),this.pos++,!0)},it.prototype.isBracket=function(){var e=this.expression.charAt(this.pos);return!("["!==e&&"]"!==e||!this.isOperatorEnabled("["))&&(this.current=this.newToken(Ze,e),this.pos++,!0)},it.prototype.isComma=function(){return","===this.expression.charAt(this.pos)&&(this.current=this.newToken(Ye,","),this.pos++,!0)},it.prototype.isSemicolon=function(){return";"===this.expression.charAt(this.pos)&&(this.current=this.newToken(tt,";"),this.pos++,!0)},it.prototype.isConst=function(){for(var e=this.pos,t=e;t<this.expression.length;t++){var n=this.expression.charAt(t);if(n.toUpperCase()===n.toLowerCase()&&(t===this.pos||"_"!==n&&"."!==n&&(n<"0"||n>"9")))break}if(t>e){var i=this.expression.substring(e,t);if(i in this.consts)return this.current=this.newToken(Ke,this.consts[i]),this.pos+=i.length,!0}return!1},it.prototype.isNamedOp=function(){for(var e=this.pos,t=e;t<this.expression.length;t++){var n=this.expression.charAt(t);if(n.toUpperCase()===n.toLowerCase()&&(t===this.pos||"_"!==n&&(n<"0"||n>"9")))break}if(t>e){var i=this.expression.substring(e,t);if(this.isOperatorEnabled(i)&&(i in this.binaryOps||i in this.unaryOps||i in this.ternaryOps))return this.current=this.newToken(Ue,i),this.pos+=i.length,!0}return!1},it.prototype.isName=function(){for(var e=this.pos,t=e,n=!1;t<this.expression.length;t++){var i=this.expression.charAt(t);if(i.toUpperCase()===i.toLowerCase()){if(t===this.pos&&("$"===i||"_"===i)){"_"===i&&(n=!0);continue}if(t===this.pos||!n||"_"!==i&&(i<"0"||i>"9"))break}else n=!0}if(n){var r=this.expression.substring(e,t);return this.current=this.newToken(et,r),this.pos+=r.length,!0}return!1},it.prototype.isWhitespace=function(){for(var e=!1,t=this.expression.charAt(this.pos);!(" "!==t&&"\t"!==t&&"\n"!==t&&"\r"!==t||(e=!0,this.pos++,this.pos>=this.expression.length));)t=this.expression.charAt(this.pos);return e};var rt=/^[0-9a-f]{4}$/i;function st(e,t,n){this.parser=e,this.tokens=t,this.current=null,this.nextToken=null,this.next(),this.savedCurrent=null,this.savedNextToken=null,this.allowMemberAccess=!1!==n.allowMemberAccess}it.prototype.unescape=function(e){var t=e.indexOf("\\");if(t<0)return e;for(var n=e.substring(0,t);t>=0;){var i=e.charAt(++t);switch(i){case"'":n+="'";break;case'"':n+='"';break;case"\\":n+="\\";break;case"/":n+="/";break;case"b":n+="\b";break;case"f":n+="\f";break;case"n":n+="\n";break;case"r":n+="\r";break;case"t":n+="\t";break;case"u":var r=e.substring(t+1,t+5);rt.test(r)||this.parseError("Illegal escape sequence: \\u"+r),n+=String.fromCharCode(parseInt(r,16)),t+=4;break;default:throw this.parseError('Illegal escape sequence: "\\'+i+'"')}++t;var s=e.indexOf("\\",t);n+=e.substring(t,s<0?e.length:s),t=s}return n},it.prototype.isComment=function(){return"/"===this.expression.charAt(this.pos)&&"*"===this.expression.charAt(this.pos+1)&&(this.pos=this.expression.indexOf("*/",this.pos)+2,1===this.pos&&(this.pos=this.expression.length),!0)},it.prototype.isRadixInteger=function(){var e,t,n=this.pos;if(n>=this.expression.length-2||"0"!==this.expression.charAt(n))return!1;if(++n,"x"===this.expression.charAt(n))e=16,t=/^[0-9a-f]$/i,++n;else{if("b"!==this.expression.charAt(n))return!1;e=2,t=/^[01]$/i,++n}for(var i=!1,r=n;n<this.expression.length;){var s=this.expression.charAt(n);if(!t.test(s))break;n++,i=!0}return i&&(this.current=this.newToken(Ke,parseInt(this.expression.substring(r,n),e)),this.pos=n),i},it.prototype.isNumber=function(){for(var e,t=!1,n=this.pos,i=n,r=n,s=!1,o=!1;n<this.expression.length&&((e=this.expression.charAt(n))>="0"&&e<="9"||!s&&"."===e);)"."===e?s=!0:o=!0,n++,t=o;if(t&&(r=n),"e"===e||"E"===e){n++;for(var a=!0,l=!1;n<this.expression.length;){if(e=this.expression.charAt(n),!a||"+"!==e&&"-"!==e){if(!(e>="0"&&e<="9"))break;l=!0,a=!1}else a=!1;n++}l||(n=r)}return t?(this.current=this.newToken(Ke,parseFloat(this.expression.substring(i,n))),this.pos=n):this.pos=r,t},it.prototype.isOperator=function(){var e=this.pos,t=this.expression.charAt(this.pos);if("+"===t||"-"===t||"*"===t||"/"===t||"%"===t||"^"===t||"?"===t||":"===t||"."===t)this.current=this.newToken(Ue,t);else if("∙"===t||"•"===t)this.current=this.newToken(Ue,"*");else if(">"===t)"="===this.expression.charAt(this.pos+1)?(this.current=this.newToken(Ue,">="),this.pos++):this.current=this.newToken(Ue,">");else if("<"===t)"="===this.expression.charAt(this.pos+1)?(this.current=this.newToken(Ue,"<="),this.pos++):this.current=this.newToken(Ue,"<");else if("|"===t){if("|"!==this.expression.charAt(this.pos+1))return!1;this.current=this.newToken(Ue,"||"),this.pos++}else if("="===t)"="===this.expression.charAt(this.pos+1)?(this.current=this.newToken(Ue,"=="),this.pos++):this.current=this.newToken(Ue,t);else{if("!"!==t)return!1;"="===this.expression.charAt(this.pos+1)?(this.current=this.newToken(Ue,"!="),this.pos++):this.current=this.newToken(Ue,t)}return this.pos++,!!this.isOperatorEnabled(this.current.value)||(this.pos=e,!1)},it.prototype.isOperatorEnabled=function(e){return this.parser.isOperatorEnabled(e)},it.prototype.getCoordinates=function(){var e,t=0,n=-1;do{t++,e=this.pos-n,n=this.expression.indexOf("\n",n+1)}while(n>=0&&n<this.pos);return{line:t,column:e}},it.prototype.parseError=function(e){var t=this.getCoordinates();throw new Error("parse error ["+t.line+":"+t.column+"]: "+e)},st.prototype.next=function(){return this.current=this.nextToken,this.nextToken=this.tokens.next()},st.prototype.tokenMatches=function(e,t){return void 0===t||(Array.isArray(t)?We(t,e.value):"function"==typeof t?t(e):e.value===t)},st.prototype.save=function(){this.savedCurrent=this.current,this.savedNextToken=this.nextToken,this.tokens.save()},st.prototype.restore=function(){this.tokens.restore(),this.current=this.savedCurrent,this.nextToken=this.savedNextToken},st.prototype.accept=function(e,t){return!(this.nextToken.type!==e||!this.tokenMatches(this.nextToken,t))&&(this.next(),!0)},st.prototype.expect=function(e,t){if(!this.accept(e,t)){var n=this.tokens.getCoordinates();throw new Error("parse error ["+n.line+":"+n.column+"]: Expected "+(t||e))}},st.prototype.parseAtom=function(e){var t=this.tokens.unaryOps;if(this.accept(et)||this.accept(Ue,(function(e){return e.value in t})))e.push(new Te(Ce,this.current.value));else if(this.accept(Ke))e.push(new Te(be,this.current.value));else if(this.accept(Xe))e.push(new Te(be,this.current.value));else if(this.accept(Qe,"("))this.parseExpression(e),this.expect(Qe,")");else{if(!this.accept(Ze,"["))throw new Error("unexpected "+this.nextToken);if(this.accept(Ze,"]"))e.push(new Te(Me,0));else{var n=this.parseArrayList(e);e.push(new Te(Me,n))}}},st.prototype.parseExpression=function(e){var t=[];this.parseUntilEndStatement(e,t)||(this.parseVariableAssignmentExpression(t),this.parseUntilEndStatement(e,t)||this.pushExpression(e,t))},st.prototype.pushExpression=function(e,t){for(var n=0,i=t.length;n<i;n++)e.push(t[n])},st.prototype.parseUntilEndStatement=function(e,t){return!!this.accept(tt)&&(!this.nextToken||this.nextToken.type===Je||this.nextToken.type===Qe&&")"===this.nextToken.value||t.push(new Te(Ae)),this.nextToken.type!==Je&&this.parseExpression(t),e.push(new Te(Ie,t)),!0)},st.prototype.parseArrayList=function(e){for(var t=0;!this.accept(Ze,"]");)for(this.parseExpression(e),++t;this.accept(Ye);)this.parseExpression(e),++t;return t},st.prototype.parseVariableAssignmentExpression=function(e){for(this.parseConditionalExpression(e);this.accept(Ue,"=");){var t=e.pop(),n=[],i=e.length-1;if(t.type!==Pe){if(t.type!==Ce&&t.type!==De)throw new Error("expected variable for assignment");this.parseVariableAssignmentExpression(n),e.push(new Te(Ee,t.value)),e.push(new Te(Ie,n)),e.push(Be("="))}else{if(!this.tokens.isOperatorEnabled("()="))throw new Error("function definition is not permitted");for(var r=0,s=t.value+1;r<s;r++){var o=i-r;e[o].type===Ce&&(e[o]=new Te(Ee,e[o].value))}this.parseVariableAssignmentExpression(n),e.push(new Te(Ie,n)),e.push(new Te(Oe,t.value))}}},st.prototype.parseConditionalExpression=function(e){for(this.parseOrExpression(e);this.accept(Ue,"?");){var t=[],n=[];this.parseConditionalExpression(t),this.expect(Ue,":"),this.parseConditionalExpression(n),e.push(new Te(Ie,t)),e.push(new Te(Ie,n)),e.push(_e("?"))}},st.prototype.parseOrExpression=function(e){for(this.parseAndExpression(e);this.accept(Ue,"or");){var t=[];this.parseAndExpression(t),e.push(new Te(Ie,t)),e.push(Be("or"))}},st.prototype.parseAndExpression=function(e){for(this.parseComparison(e);this.accept(Ue,"and");){var t=[];this.parseComparison(t),e.push(new Te(Ie,t)),e.push(Be("and"))}};var ot=["==","!=","<","<=",">=",">","in"];st.prototype.parseComparison=function(e){for(this.parseAddSub(e);this.accept(Ue,ot);){var t=this.current;this.parseAddSub(e),e.push(Be(t.value))}};var at=["+","-","||"];st.prototype.parseAddSub=function(e){for(this.parseTerm(e);this.accept(Ue,at);){var t=this.current;this.parseTerm(e),e.push(Be(t.value))}};var lt=["*","/","%"];function ct(e,t){return Number(e)+Number(t)}function ut(e,t){return e-t}function pt(e,t){return e*t}function ht(e,t){return e/t}function dt(e,t){return e%t}function ft(e,t){return Array.isArray(e)&&Array.isArray(t)?e.concat(t):""+e+t}function mt(e,t){return e===t}function vt(e,t){return e!==t}function yt(e,t){return e>t}function gt(e,t){return e<t}function bt(e,t){return e>=t}function kt(e,t){return e<=t}function wt(e,t){return Boolean(e&&t)}function xt(e,t){return Boolean(e||t)}function Ct(e,t){return We(t,e)}function Et(e){return(Math.exp(e)-Math.exp(-e))/2}function Pt(e){return(Math.exp(e)+Math.exp(-e))/2}function Ot(e){return e===1/0?1:e===-1/0?-1:(Math.exp(e)-Math.exp(-e))/(Math.exp(e)+Math.exp(-e))}function It(e){return e===-1/0?e:Math.log(e+Math.sqrt(e*e+1))}function St(e){return Math.log(e+Math.sqrt(e*e-1))}function Dt(e){return Math.log((1+e)/(1-e))/2}function At(e){return Math.log(e)*Math.LOG10E}function Mt(e){return-e}function Tt(e){return!e}function jt(e){return e<0?Math.ceil(e):Math.floor(e)}function Bt(e){return Math.random()*(e||1)}function _t(e){return Rt(e+1)}st.prototype.parseTerm=function(e){for(this.parseFactor(e);this.accept(Ue,lt);){var t=this.current;this.parseFactor(e),e.push(Be(t.value))}},st.prototype.parseFactor=function(e){var t=this.tokens.unaryOps;if(this.save(),this.accept(Ue,(function(e){return e.value in t}))){if("-"!==this.current.value&&"+"!==this.current.value){if(this.nextToken.type===Qe&&"("===this.nextToken.value)return this.restore(),void this.parseExponential(e);if(this.nextToken.type===tt||this.nextToken.type===Ye||this.nextToken.type===Je||this.nextToken.type===Qe&&")"===this.nextToken.value)return this.restore(),void this.parseAtom(e)}var n=this.current;this.parseFactor(e),e.push(je(n.value))}else this.parseExponential(e)},st.prototype.parseExponential=function(e){for(this.parsePostfixExpression(e);this.accept(Ue,"^");)this.parseFactor(e),e.push(Be("^"))},st.prototype.parsePostfixExpression=function(e){for(this.parseFunctionCall(e);this.accept(Ue,"!");)e.push(je("!"))},st.prototype.parseFunctionCall=function(e){var t=this.tokens.unaryOps;if(this.accept(Ue,(function(e){return e.value in t}))){var n=this.current;this.parseAtom(e),e.push(je(n.value))}else for(this.parseMemberExpression(e);this.accept(Qe,"(");)if(this.accept(Qe,")"))e.push(new Te(Pe,0));else{var i=this.parseArgumentList(e);e.push(new Te(Pe,i))}},st.prototype.parseArgumentList=function(e){for(var t=0;!this.accept(Qe,")");)for(this.parseExpression(e),++t;this.accept(Ye);)this.parseExpression(e),++t;return t},st.prototype.parseMemberExpression=function(e){for(this.parseAtom(e);this.accept(Ue,".")||this.accept(Ze,"[");){var t=this.current;if("."===t.value){if(!this.allowMemberAccess)throw new Error('unexpected ".", member access is not permitted');this.expect(et),e.push(new Te(De,this.current.value))}else{if("["!==t.value)throw new Error("unexpected symbol: "+t.value);if(!this.tokens.isOperatorEnabled("["))throw new Error('unexpected "[]", arrays are disabled');this.parseExpression(e),this.expect(Ze,"]"),e.push(Be("["))}}};var Vt=[.9999999999999971,57.15623566586292,-59.59796035547549,14.136097974741746,-.4919138160976202,3399464998481189e-20,4652362892704858e-20,-9837447530487956e-20,.0001580887032249125,-.00021026444172410488,.00021743961811521265,-.0001643181065367639,8441822398385275e-20,-26190838401581408e-21,36899182659531625e-22];function Rt(e){var t,n;if(function(e){return isFinite(e)&&e===Math.round(e)}(e)){if(e<=0)return isFinite(e)?1/0:NaN;if(e>171)return 1/0;for(var i=e-2,r=e-1;i>1;)r*=i,i--;return 0===r&&(r=1),r}if(e<.5)return Math.PI/(Math.sin(Math.PI*e)*Rt(1-e));if(e>=171.35)return 1/0;if(e>85){var s=e*e,o=s*e,a=o*e,l=a*e;return Math.sqrt(2*Math.PI/e)*Math.pow(e/Math.E,e)*(1+1/(12*e)+1/(288*s)-139/(51840*o)-571/(2488320*a)+163879/(209018880*l)+5246819/(75246796800*l*e))}--e,n=Vt[0];for(var c=1;c<Vt.length;++c)n+=Vt[c]/(e+c);return t=e+4.7421875+.5,Math.sqrt(2*Math.PI)*Math.pow(t,e+.5)*Math.exp(-t)*n}function Lt(e){return Array.isArray(e)?e.length:String(e).length}function zt(){for(var e=0,t=0,n=0;n<arguments.length;n++){var i,r=Math.abs(arguments[n]);t<r?(e=e*(i=t/r)*i+1,t=r):e+=r>0?(i=r/t)*i:r}return t===1/0?1/0:t*Math.sqrt(e)}function Ft(e,t,n){return e?t:n}function Nt(e,t){return void 0===t||0==+t?Math.round(e):(e=+e,t=-+t,isNaN(e)||"number"!=typeof t||t%1!=0?NaN:(e=e.toString().split("e"),+((e=(e=Math.round(+(e[0]+"e"+(e[1]?+e[1]-t:-t)))).toString().split("e"))[0]+"e"+(e[1]?+e[1]+t:t))))}function $t(e,t,n){return n&&(n[e]=t),t}function Ht(e,t){return e[0|t]}function Wt(e){return 1===arguments.length&&Array.isArray(e)?Math.max.apply(Math,e):Math.max.apply(Math,arguments)}function Gt(e){return 1===arguments.length&&Array.isArray(e)?Math.min.apply(Math,e):Math.min.apply(Math,arguments)}function qt(e,t){if("function"!=typeof e)throw new Error("First argument to map is not a function");if(!Array.isArray(t))throw new Error("Second argument to map is not an array");return t.map((function(t,n){return e(t,n)}))}function Jt(e,t,n){if("function"!=typeof e)throw new Error("First argument to fold is not a function");if(!Array.isArray(n))throw new Error("Second argument to fold is not an array");return n.reduce((function(t,n,i){return e(t,n,i)}),t)}function Ut(e,t){if("function"!=typeof e)throw new Error("First argument to filter is not a function");if(!Array.isArray(t))throw new Error("Second argument to filter is not an array");return t.filter((function(t,n){return e(t,n)}))}function Kt(e,t){if(!Array.isArray(t)&&"string"!=typeof t)throw new Error("Second argument to indexOf is not a string or array");return t.indexOf(e)}function Xt(e,t){if(!Array.isArray(t))throw new Error("Second argument to join is not an array");return t.join(e)}function Qt(e){return(e>0)-(e<0)||+e}var Zt=1/3;function Yt(e){return e<0?-Math.pow(-e,Zt):Math.pow(e,Zt)}function en(e){return Math.exp(e)-1}function tn(e){return Math.log(1+e)}function nn(e){return Math.log(e)/Math.LN2}function rn(e){this.options=e||{},this.unaryOps={sin:Math.sin,cos:Math.cos,tan:Math.tan,asin:Math.asin,acos:Math.acos,atan:Math.atan,sinh:Math.sinh||Et,cosh:Math.cosh||Pt,tanh:Math.tanh||Ot,asinh:Math.asinh||It,acosh:Math.acosh||St,atanh:Math.atanh||Dt,sqrt:Math.sqrt,cbrt:Math.cbrt||Yt,log:Math.log,log2:Math.log2||nn,ln:Math.log,lg:Math.log10||At,log10:Math.log10||At,expm1:Math.expm1||en,log1p:Math.log1p||tn,abs:Math.abs,ceil:Math.ceil,floor:Math.floor,round:Math.round,trunc:Math.trunc||jt,"-":Mt,"+":Number,exp:Math.exp,not:Tt,length:Lt,"!":_t,sign:Math.sign||Qt},this.binaryOps={"+":ct,"-":ut,"*":pt,"/":ht,"%":dt,"^":Math.pow,"||":ft,"==":mt,"!=":vt,">":yt,"<":gt,">=":bt,"<=":kt,and:wt,or:xt,in:Ct,"=":$t,"[":Ht},this.ternaryOps={"?":Ft},this.functions={random:Bt,fac:_t,min:Gt,max:Wt,hypot:Math.hypot||zt,pyt:Math.hypot||zt,pow:Math.pow,atan2:Math.atan2,if:Ft,gamma:Rt,roundTo:Nt,map:qt,fold:Jt,filter:Ut,indexOf:Kt,join:Xt},this.consts={E:Math.E,PI:Math.PI,true:!0,false:!1}}rn.prototype.parse=function(e){var t=[],n=new st(this,new it(this,e),{allowMemberAccess:this.options.allowMemberAccess});return n.parseExpression(t),n.expect(Je,"EOF"),new qe(t,this)},rn.prototype.evaluate=function(e,t){return this.parse(e).evaluate(t)};var sn=new rn;rn.parse=function(e){return sn.parse(e)},rn.evaluate=function(e,t){return sn.parse(e).evaluate(t)};var on={"+":"add","-":"subtract","*":"multiply","/":"divide","%":"remainder","^":"power","!":"factorial","<":"comparison",">":"comparison","<=":"comparison",">=":"comparison","==":"comparison","!=":"comparison","||":"concatenate",and:"logical",or:"logical",not:"logical","?":"conditional",":":"conditional","=":"assignment","[":"array","()=":"fndef"};function an(e,t){return w(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,r,s=[],o=!0,a=!1;try{for(n=n.call(e);!(o=(i=n.next()).done)&&(s.push(i.value),!t||s.length!==t);o=!0);}catch(e){a=!0,r=e}finally{try{o||null==n.return||n.return()}finally{if(a)throw r}}return s}}(e,t)||b(e,t)||x()}rn.prototype.isOperatorEnabled=function(e){var t=function(e){return on.hasOwnProperty(e)?on[e]:e}(e),n=this.options.operators||{};return!(t in n)||!!n[t]};var ln=.1,cn="function"==typeof Float32Array;function un(e,t){return 1-3*t+3*e}function pn(e,t){return 3*t-6*e}function hn(e){return 3*e}function dn(e,t,n){return((un(t,n)*e+pn(t,n))*e+hn(t))*e}function fn(e,t,n){return 3*un(t,n)*e*e+2*pn(t,n)*e+hn(t)}function mn(e){return e}var vn=function(e,t,n,i){if(!(0<=e&&e<=1&&0<=n&&n<=1))throw new Error("bezier x values must be in [0, 1] range");if(e===t&&n===i)return mn;for(var r=cn?new Float32Array(11):new Array(11),s=0;s<11;++s)r[s]=dn(s*ln,e,n);function o(t){for(var i=0,s=1;10!==s&&r[s]<=t;++s)i+=ln;--s;var o=i+(t-r[s])/(r[s+1]-r[s])*ln,a=fn(o,e,n);return a>=.001?function(e,t,n,i){for(var r=0;r<4;++r){var s=fn(t,n,i);if(0===s)return t;t-=(dn(t,n,i)-e)/s}return t}(t,o,e,n):0===a?o:function(e,t,n,i,r){var s,o,a=0;do{(s=dn(o=t+(n-t)/2,i,r)-e)>0?n=o:t=o}while(Math.abs(s)>1e-7&&++a<10);return o}(t,i,i+ln,e,n)}return function(e){return 0===e?0:1===e?1:dn(o(e),t,i)}};function yn(e,t,n,i){return yn="undefined"!=typeof Reflect&&Reflect.set?Reflect.set:function(e,t,n,i){var r,s=m(e,t);if(s){if((r=Object.getOwnPropertyDescriptor(s,t)).set)return r.set.call(i,n),!0;if(!r.writable)return!1}if(r=Object.getOwnPropertyDescriptor(i,t)){if(!r.writable)return!1;r.value=n,Object.defineProperty(i,t,r)}else h(i,t,n);return!0},yn(e,t,n,i)}function gn(e,t,n,i,r){if(!yn(e,t,n,i||e)&&r)throw new Error("failed to set property");return n}var bn=[{key:"info",style:"color: #666;",level:5,consoleMethod:"log"},{key:"notice",style:"background: rgba(0, 0, 0, 0.8); color:white; padding:8px;",level:4,consoleMethod:"log"},{key:"warning",style:"color: black; background: orange;",level:2,consoleMethod:"warn"},{key:"error",style:"color: black; background: red;",level:1,consoleMethod:"error"}],kn="data-motorcortex2-id",wn="closed",xn="MotorCortex",Cn={staggerPreface:"@stagger",mathExpPreface:"@expression",attributeValue:"@attribute",patternValue:"@pattern",initParamsPreface:"@initParams",dynamicDuration:"dynamic",totalElements:"total",elementIndex:"index",initParams:"initParams"},En=/({{ *| *}})/g;function Pn(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object.keys(e).join("|");if(""===n)return!1;var i="(\\b(".concat(n,")\\b)(((\\.[a-zA-Z_][a-zA-Z0-9_]*)|(\\[[0-9]*\\]))*)(?![a-z,A-Z_0-9])");return t?i:new RegExp(i,"g")}var On=/{{((?!}}).)*}}/g,In=/( *mc-if *= *" *)[^"]*(?=")/g,Sn=/'.*'/g,Dn=/^ *([0-9.]+|('([^']|\\')*([^\\]')))( *\+ *([0-9.]+|('([^']|\\')*([^\\]'))))* *$/g,An=/^( *([0-9.]+|('([^']|\\')*([^\\]')))( *\+ *([0-9.]+|('([^']|\\')*([^\\]'))))* *)(==|===)( *([0-9.]+|('([^']|\\')*([^\\]')))( *\+ *([0-9.]+|('([^']|\\')*([^\\]'))))* *)$/g,Mn=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:xn,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:window;Ci(r,i)||(r[i]={});for(var s=r[i],o=e.split("."),a=0;a<o.length-1;a++)Ci(s,o[a])||(s[o[a]]={}),s=s[o[a]];return!(Ci(s,o[o.length-1])&&!n)&&(s[o[o.length-1]]=t,!0)},Tn=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:xn,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window;""!==t&&(e=t+"."+e);for(var i,r=n,s=e.replaceAll(/\]/g,"").replaceAll(/\[/g,".").split("."),o=0;o<s.length;o++){if(!Ci(r,s[o]))return;i=r[s[o]],r=r[s[o]]}return i},jn=new Set(["getValue","setValue","_getFromProxy","__createPathProxies","hasOwnProperty","pushValue","removePathKey","removeKey","restoreKey","getKeys","exportFlattened","isArray","push","sortBy","findIndex"]);function Bn(e){var t={},n=new Set,i=Array.isArray(e),r=i?e.length:0,s=null;return new Proxy(e,{get:function(o,a){return"length"===a&&i?r:jn.has(a)?this[a]:n.has(a)?void 0:(i&&null!==s&&(a=s[a]),Ci(t,a)?t[a]:e[a])},isArray:function(){return i},_getFromProxy:function(e){return Ci(t,e)?t[e]:void 0},set:Vi,sortBy:function(e){if(s=null,!i)return!1;s=function(e,t){for(var n=[],i=0;i<e.length;i++)n.push([e[i],i]);n.sort((function(e,n){return e[0][t]<n[0][t]?-1:1}));var r=[];for(var s in n)r.push(n[s][1]);return r}(this,e)},__createPathProxies:function(n){for(var r=t,o=e,a=0;a<n.length-1;a++){var l=i&&null!==s?s[n[a]]:n[a];if(0===a?void 0===r[l]:void 0===r._getFromProxy(l)){var c=Bn(void 0!==o&&o[l]||{});0===a?r[l]=c:r.setValue(l,c)}r=r[l],o=void 0!==o?o[l]:{}}return{currentObject:r,currentRealObect:o}},findIndex:function(e){if(!i)return null;for(var t=0;t<r;t++)if(e(this[t]))return t;return null},setValue:function(e,t){var i=e.split("."),r=this.__createPathProxies(i).currentObject,s=t;return wi(t)&&(s=Bn(t)),1===i.length?(r[i[i.length-1]]=s,n.delete(s)):(r.setValue(i[i.length-1],s),r.restoreKey(i[i.length-1])),!0},pushValue:function(t,n){var i=t.split("."),r=this.__createPathProxies(i),s=r.currentObject;if(void 0===r.currentRealObect)return!1;var o=i[i.length-1],a=s[o],l=e[o];if(""===t&&(a=this,l=e),1!==i.length)return s.pushValue(o,n);var c=!1;if(void 0!==a){if(c=!0,!a.isArray())return!1}else if(!Array.isArray(l))return!1;if(!c){var u=Bn(l);s[o]=u,a=s[o]}return a.push(n),!0},push:function(e){return!!this.isArray()&&(t[r]=wi(e)?Bn(e):e,r+=1,!0)},removePathKey:function(e){var t=e.split(".");return this.__createPathProxies(t).currentObject.removeKey(t[t.length-1]),!0},removeKey:function(e){n.add(e)},restoreKey:function(e){n.delete(e)},hasOwnProperty:function(e){return!(n.has(e)||void 0===this[e])},getKeys:function(){var r;if(i)return[];var s=Object.keys(e);return(r=s).push.apply(r,k(Object.keys(t))),s=s.filter((function(e){return!n.has(e)}))},exportFlattened:function(){var n;if(i)if(n=[],null!==s)for(var r=0;r<s.length;r++){var o=s[r];if(Ci(t,o)){var a=t[o];if(wi(a))try{n[r]=t[o].exportFlattened()}catch(e){n[r]=a}else n[r]=a}else n[r]=e[o]}else{n=k(e);for(var l=0,c=Object.entries(t);l<c.length;l++){var u=an(c[l],2),p=u[0],h=u[1];if(wi(h))try{n[p]=t[p].exportFlattened()}catch(e){n[p]=h}else n[p]=h}}else{n={};for(var d=this.getKeys(),f=0;f<d.length;f++){var m=d[f];void 0!==t[m]?n[m]=wi(t[m])?t[m].exportFlattened():t[m]:n[m]=e[m]}}return n}})}function _n(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return Vn(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Vn(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,a=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){a=!0,s=e},f:function(){try{o||null==n.return||n.return()}finally{if(a)throw s}}}}function Vn(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}var Rn=new rn,Ln=/ *mc-if *= *" */g;function zn(e){for(var t=e.split(/ *\+ */),n=0;n<t.length;n++)t[n]=t[n].trim(),t[n].match(Sn)&&(t[n]=t[n].substring(1,t[n].length-1));return t.join("")}function Fn(e,t,n){function i(e){var i=e.match(Ln),r=Array.isArray(i);function s(e){return r&&(e=' mc-if="'.concat(e)),e}var o=(e=(e=e.replaceAll(/ *mc-if *= *" */g,"")).replaceAll(/ *mc-if *= *" */g,"")).match(En),a=e.replaceAll(En,""),l=Pn(t.items),c=function(e){if(!wi(e))return!1;var t=Object.keys(e).join("|");if(""===t)return!1;var n="(\\b(".concat(t,"\\b))(?![a-z,A-Z_0-9.\\[])");return new RegExp(n,"g")}(t.keys);if(!1!==l&&(a=a.replaceAll(l,(function(e){if("initParams"===e||"attrs"===e)return s("undefined");var i=Tn(e,"",t.items);return ki(i)&&(i="'".concat(n?Ni(i):i,"'")),i}))),!1!==c&&(a=a.replaceAll(c,(function(e){var i=t.keys[e];return ki(i)&&(i="'".concat(n?Ni(i):i,"'")),i}))),a.match(An)){var u=a.split(/===|==/);return u[0]=zn(u[0]),u[1]=zn(u[1]),s((u[0]===u[1]).toString())}try{var p=Rn.parse(a),h=Object.assign({},t.keys,t.items),d=p.evaluate(h);if(void 0!==d&&!isNaN(d))return s(d)}catch(e){}if(a.match(Dn))return s(zn(a));var f=/===|==|>=|>|<=|<|!==|!=/g,m=a.split(f);if(2===m.length){var v=a.match(f)[0];try{var y=Rn.parse(m[0]),g=Rn.parse(m[1]),b=Object.assign({},t.keys,t.items);return s(function(e,t,n){switch(n){case"==":case"===":return e===t;case"!=":case"!==":return e!==t;case">":return e>t;case">=":return e>=t;case"<":return e<t;case"<=":return e<=t;default:return Li.error("Not supported operator "+n),!1}}(y.evaluate(b),g.evaluate(b),v).toString())}catch(e){}}return s(null!==o?"{{".concat(a,"}}"):a)}return e.replaceAll(On,i).replaceAll(In,i)}function Nn(e){var t,n=_n(e.querySelectorAll("[mc-if]"));try{for(n.s();!(t=n.n()).done;){var i=t.value,r=i.getAttribute("mc-if");"true"===r?i.removeAttribute("mc-if"):"false"===r&&i.remove()}}catch(e){n.e(e)}finally{n.f()}}function $n(e,t){if(!e.hasAttribute("mc-for")||!e.hasAttribute("mc-of"))return Li.warning("Either mc-for and mc-of is missing from element"),!1;if(!e.getAttribute("mc-for").match(/^ *[a-zA-Z_][0-9a-zA-Z_]* *, *[a-zA-Z_][0-9a-zA-Z_]* *$/))return Li.warning("mc-for attribute is not a valid expression"),!1;var n=function(e){var t="^ *".concat(Pn(e,!0)," *$");return new RegExp(t,"g")}(t),i=e.getAttribute("mc-of").match(n);if(1!==(null==i?void 0:i.length))return Li.warning("mc-of attribute is not a valid expression"),!1;var r=Tn(i[0].trim(),"",t);return void 0===r?(Li.warning("mc-of value is undefined"),!1):wi(r)?r:(Li.warning("mc-of value should be either an object or an array"),!1)}function Hn(e){var t=[],n=Bn(e.params);for(var i in e.items)n.setValue("keys.".concat(e.keys.key),i),n.setValue("items.".concat(e.keys.item),e.items[i]),t.push(Gn(e.template,n.exportFlattened(),!0));return t}function Wn(e,t){var n,i=_n(e.querySelectorAll("[mc-for]"));try{for(i.s();!(n=i.n()).done;){var r=n.value,s=$n(r,t.items);if(!1!==s&&wi(s)){var o=r.getAttribute("mc-for").split(","),a={key:o[0].trim(),item:o[1].trim()};r.removeAttribute("mc-for"),r.removeAttribute("mc-of");var l=Hn({template:r.outerHTML,keys:a,params:t,items:s});if(0!==l.length){for(var c=r,u=0;u<l.length;u++){var p=c.parentNode.insertBefore(l[u],c.nextSibling);c=p}r.remove()}else r.remove()}else r.remove()}}catch(e){i.e(e)}finally{i.f()}}function Gn(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(e=Fn(e=e.replace(/^\s+|\s+$/g,""),t,n),!n)return e;var i=document.createElement("div");return i.innerHTML=e,Nn(i),Wn(i,t),1!==i.childElementCount?(console.error("parser only accepts close DOM trees (always contained on a single element). The root element can not have mc-for applied to it. Returning empty div"),document.createElement("div")):i.firstChild}var qn=function(e){e=e.replace(/ /g,"");var t=/\(([^\(\)]|\(([^\(\)]|\(([^\(\)]|\(([^\(\)])*\))*\))*\))*\)/.exec(e);if(void 0===t)return{result:!1};var n=e.split(")");return{result:!0,unit:n[n.length-1],expression:t[0]}},Jn=function(){function e(t){s(this,e),this.expressionProps=t}return f(e,[{key:"resize",value:function(e){var t=qn(this.expressionProps.expression),n="(".concat(t.expression,"*").concat(e,")");return"".concat(Cn.mathExpPreface,"(").concat(n,")").concat(this.expressionProps.unit)}},{key:"calculateValues",value:function(e,t){for(var n,i=e.length,r=[],s=(h(n={},Cn.totalElements,i),h(n,Cn.initParams,t),n),o=0;o<i;o++){s[Cn.elementIndex]=o;var a=this.expressionProps.expression.substring(1,this.expressionProps.expression.length-1),l=Gn("{{".concat(a,"}}"),{items:s});if(null===l.match(On)){var c="".concat(l).concat(this.expressionProps.unit);r.push(bi(c)?1*c:c)}else Li.error("".concat(this.expressionProps.expression," can not fully parsed. At least one of the provided parameters seem not to be valid. Returning 0")),r.push(0)}return r}}]),e}(),Un={linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e},easeInSine:function(e){return-1*Math.cos(e*(Math.PI/2))+1},easeOutSine:function(e){return Math.sin(e*(Math.PI/2))},easeInOutSine:function(e){return-.5*(Math.cos(Math.PI*e)-1)},easeInExpo:function(e){return 0==e?1:1*Math.pow(2,10*(e-1))},easeOutExpo:function(e){return 1==e?1:1*(1-Math.pow(2,-10*e))},easeInOutExpo:function(e){return 0==e||1==e?e:(e/=.5)<1?.5*Math.pow(2,10*(e-1)):.5*(2-Math.pow(2,-10*--e))},easeInCirc:function(e){return e>=1?e:-(Math.sqrt(1-(e/=1)*e)-1)},easeOutCirc:function(e){return Math.sqrt(1-(e=e/1-1)*e)},easeInOutCirc:function(e){return(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)},easeInElastic:function(e){if(0==e||1==e)return e;var t=.3/(2*Math.PI)*Math.asin(1);return-Math.pow(2,10*(e-=1))*Math.sin((1*e-t)*(2*Math.PI)/.3)},easeOutElastic:function(e){if(0==e||1==e)return e;var t=.3/(2*Math.PI)*Math.asin(1);return Math.pow(2,-10*e)*Math.sin((e-t)*(2*Math.PI)/.3)+1},easeInOutElastic:function(e){if(0==e||1==e)return e;var t=.3*1.5,n=t/(2*Math.PI)*Math.asin(1);return e<1?Math.pow(2,10*(e-=1))*Math.sin((e-n)*(2*Math.PI)/t)*-.5:Math.pow(2,-10*(e-=1))*Math.sin((e-n)*(2*Math.PI)/t)*.5+1},easeInBack:function(e){var t=1.70158;return e*e*((t+1)*e-t)},easeOutBack:function(e){var t=1.70158;return(e-=-1)*e*((t+1)*e+t)+1},easeInOutBack:function(e){var t=1.70158;return(e/=.5)<1?e*e*((1+(t*=1.525))*e-t)*.5:.5*((e-=2)*e*((1+(t*=1.525))*e+t)+2)},easeInBounce:function(e){return 1-Un.easeOutBounce(1-e)},easeOutBounce:function(e){return e<1/2.75?7.5625*e*e*1:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},easeInOutBounce:function(e){return e<.5?.5*Un.easeInBounce(2*e):.5*(Un.easeOutBounce(2*e-1)+1)}};function Kn(e){e=e.replace(/ /g,"");return/^@stagger\(([_A-z0-9.%-]+?(,[_A-z0-9.%-]+)?(,[_A-z0-9.%-]+)?(,[_A-z0-9.%-]+)?(,[_A-z0-9.%-]+)?(,[_A-z0-9.%-]+))\)$/.test(e)}var Xn=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(e=e.replace(/ /g,""),t&&!Kn(e))return!1;var n=/.*\((.*)\).*/,i=n.exec(e)[1],r=i.split(",");return{start:r[0],end:r[1],startFraction:1*r[2]||0,easing:r[3]||"linear",mode:r[4]||"linear",reverse:"true"===r[5]}};var Qn=function(){function e(t){s(this,e),this.staggerProps=t}return f(e,[{key:"resize",value:function(e){return this.staggerProps.from*=e,this.staggerProps.to*=e,!0===this.staggerProps.integer&&(this.staggerProps.from=Math.round(this.staggerProps.from),this.staggerProps.to=Math.round(this.staggerProps.to)),"@stagger(".concat(this.staggerProps.from).concat(this.staggerProps.unit,", ").concat(this.staggerProps.to).concat(this.staggerProps.unit,", ").concat(this.staggerProps.fraction||0,", ").concat(this.staggerProps.easing||"linear",", ").concat(this.staggerProps.mode||"linear",", ").concat(this.staggerProps.reverse||!1,")")}},{key:"calculateValues",value:function(e){for(var t,n,i,r,s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"linear",i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=[];if("linear"===n)for(var s=0;s<e;s++){var o=s/(e-1),a=o<t?o+1-t+1/(e-1):o-t;i&&(a=1-a),r.push(a)}else if("omni"===n)for(var l=1-t,c=0;c<e;c++){var u=Math.abs(c/(e-1)-t)/l;i&&(u=1-u),r.push(u)}return r}(e.length,this.staggerProps.fraction,this.staggerProps.mode,this.staggerProps.reverse),o=[],a=0;a<s.length;a++){var l=(t=this.staggerProps.from,n=this.staggerProps.to,i=s[a],(r=this.staggerProps.easing)||(r="linear"),Un[r](i)*(n-t)+t);!0===this.staggerProps.integer&&(l=Math.round(l)),"measurement"===this.staggerProps.type&&(l+=this.staggerProps.unit),o.push(l)}return o}}]),e}(),Zn=Qn,Yn=Kn,ei=Object.keys(Un),ti=new RegExp(/^[-+]?\d+$/),ni=new RegExp("^".concat(Cn.attributeValue,"\\([_A-z0-9-]*\\)$")),ii=new RegExp("^".concat(Cn.patternValue,"\\(([_A-z0-9.%-]+?(,[_A-z0-9.%-]+)*?)\\)$")),ri=new RegExp("^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)","gi");function si(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"provided";return bi(e)?Ci(t,"min")&&e<t.min?(n.push({type:"amount",actual:e,message:"The ".concat(i," value (").concat(e,") is lower than the minimum accepted (").concat(t.min,")")}),!1):Ci(t,"max")&&e>t.max?(n.push({type:"amount",actual:e,message:"The ".concat(i," value (").concat(e,") is greater than the maximum accepted (").concat(t.max,")")}),!1):!(Ci(t,"integer")&&!e.toString().match(ti))||(n.push({type:"amount",actual:e,message:"The ".concat(i," number is not an integer (").concat(e,")")}),!1):(n.push({type:"amount",actual:e,message:"The ".concat(i," value is not a number")}),!1)}var oi=function(e){return function(t,n,i){return function(e,t,n,i){if(ki(e)){if((e=e.trim()).startsWith(Cn.staggerPreface)){if(!1===Yn(e))return void t.push({type:"amount",message:"".concat(e," is not a valid stagger expression"),actual:e});var r=Xn(e,!1),s=si(r.start,i,t,"stagger start"),o=si(r.end,i,t,"stagger end");if(!s||!o)return;if(r.startFraction<0||r.startFraction>1)return void t.push({type:"amount",actual:r.startFraction,message:"The ".concat(Cn.staggerPreface," fraction must be a number >=0 and <=1")});if(!ei.includes(r.easing))return void t.push({type:"amount",actual:r.startFraction,message:"The ".concat(Cn.staggerPreface," easing (").concat(r.easing,") is not supported by the system")});if("linear"!==r.mode&&"omni"!==r.mode)return void t.push({type:"amount",actual:r.mode,message:"The ".concat(Cn.staggerPreface,' mode to be either "linear" or "omni"')});if(!0!==r.reverse&&!1!==r.reverse)return void t.push({type:"amount",actual:r.reverse,message:"The ".concat(Cn.staggerPreface," reverse to be either true or false")})}else if(e.startsWith(Cn.patternValue)){if(!ii.test(e.replace(/ /g,"")))return void t.push({type:"amount",actual:e,message:"The ".concat(Cn.patternValue," expression is not valid")});for(var a=Ai(e),l=0;l<a.length;l++)if(!si(a[l],i,t,"pattern value at index ".concat(l)))return}else if(e.startsWith(Cn.attributeValue)){if(!ni.test(e))return void t.push({type:"amount",actual:e,message:"The ".concat(Cn.attributeValue," expression is not valid")})}else{if(!e.startsWith(Cn.mathExpPreface))return void t.push({type:"amount",actual:e,message:"The provided value is not a number"});var c=qn(e);if(!1===c.result)return void t.push({type:"amount",actual:e,message:"The ".concat(Cn.mathExpPreface," expression is not valid")});if(""!==c.unit)return void t.push({type:"amount",actual:e,message:"The ".concat(Cn.mathExpPreface," should not include units")})}return e}if(si(e,i,t))return e}(t,n,0,e)}},ai=function(e){return function(t,n,i){return function(e,t,n,i){var r=new RegExp("^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)(".concat(i.units.join("|"),")$"),"gi");if(ki(e)){if((e=e.trim()).startsWith(Cn.attributeValue))return ni.test(e)?e:void t.push({type:"measurement",actual:e,message:"The provided ".concat(Cn.attributeValue," value is not valid")});if(e.startsWith(Cn.staggerPreface)){if(!1===Yn(e))return void t.push({type:"measurement",actual:e,message:"The provided ".concat(Cn.staggerPreface," value is not valid")});var s,o,a=Xn(e,!1);if(!a.start.match(r))return void t.push({type:"measurement",actual:e,message:"The provided ".concat(Cn.staggerPreface," start value is not valid")});var l=a.start.match(ri)[0];if(s=a.start.toString().substring(l.length),!si(l,i,t,"stagger start"))return;if(!a.end.match(r))return void t.push({type:"measurement",actual:e,message:"The provided ".concat(Cn.staggerPreface," end value is not valid")});var c=a.end.match(ri)[0];if(o=a.end.toString().substring(c.length),!si(c,i,t,"stagger end"))return;return s!==o?void t.push({type:"measurement",actual:e,message:"The ".concat(Cn.staggerPreface," start and end must always have the same units")}):a.startFraction<0||a.startFraction>1?void t.push({type:"measurement",actual:e,message:"The ".concat(Cn.staggerPreface," fraction must be a number >=0 and <=1")}):ei.includes(a.easing)?"linear"!==a.mode&&"omni"!==a.mode?void t.push({type:"measurement",actual:e,message:"The ".concat(Cn.staggerPreface," mode can only be either linear or omni")}):!0!==a.reverse&&!1!==a.reverse?void t.push({type:"measurement",actual:e,message:"The ".concat(Cn.staggerPreface," reverse needs to be either true or false")}):e:void t.push({type:"measurement",actual:e,message:"The provided ".concat(Cn.staggerPreface," easing is not recognised by the system")})}if(e.startsWith(Cn.patternValue)){if(!ii.test(e.replace(/ /g,"")))return void t.push({type:"measurement",actual:e,message:"The ".concat(Cn.patternValue," expression is invalid")});for(var u=Ai(e),p=0;p<u.length;p++){var h=u[p];if(!h.match(r))return void t.push({type:"measurement",actual:e,message:"The ".concat(Cn.patternValue," value on index ").concat(p," is invalid")});if(!si(h.match(ri)[0],i,t,"".concat(Cn.patternValue," value on index ").concat(p)))return}return e}if(e.startsWith(Cn.mathExpPreface)){var d=qn(e);return!1===d.result?void t.push({type:"measurement",actual:e,message:"The ".concat(Cn.mathExpPreface," is invalid")}):i.units.indexOf(d.unit)<0?void t.push({type:"measurement",actual:e,message:"The ".concat(Cn.mathExpPreface," expression has non-supported units")}):e}if(e.match(r)){if(si(e.match(ri)[0],i,t,"measurement"))return e}else t.push({type:"measurement",actual:e,message:"The provided measurement in invalid"})}else t.push({type:"measurement",actual:e,message:"The provided value is not a valid measurement"})}(t,n,0,e)}};function li(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function ci(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?li(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):li(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ui=new RegExp("^ *".concat(Cn.initParamsPreface,".[_A-z0-9]* *$"));function pi(e,t){if(ki(e)&&e.match(ui))return e;t.push({actual:e,message:"The provided value is not an @expression"})}var hi=function(){function e(t){s(this,e),this.schema=t,this.adapted=Bn(t)}return f(e,[{key:"entryChange",value:function(e,t){var n=e.join(".");if(Array.isArray(t))for(var i=0;i<t.length;i++)this.entryChange(e.concat(["".concat(i)]),t[i]);else switch(t.type){case"amount":this.adapted.setValue("".concat(n,".type"),"custom"),this.adapted.setValue("".concat(n,".check"),oi(t));break;case"measurement":this.adapted.setValue("".concat(n,".type"),"custom"),this.adapted.setValue("".concat(n,".check"),ai(t));break;case"object":this.adapted.setValue(n,this.createObject(t));break;case"array":this.adapted.setValue(n,this.createArray(t));break;case"number":this.adapted.setValue(n,[t,{type:"custom",optional:!1!==t.optional,check:oi(t)}]);break;case"string":case"html":case"css":break;default:this.adapted.setValue(n,[t,{type:"custom",optional:!1!==t.optional,check:pi}])}}},{key:"createArray",value:function(t){var n=new e({items:t.items}).adaptSchema();return[ci(ci({},t),{},{items:n.items}),{type:"custom",optional:!1!==t.optional,check:pi}]}},{key:"createObject",value:function(t){var n,i=new e(null!==(n=t.props)&&void 0!==n?n:{}).adaptSchema();return[ci(ci({},t),{},{props:i}),{type:"custom",optional:!1!==t.optional,check:pi}]}},{key:"adaptSchema",value:function(){return this.objectPropsChange([],this.schema),this.adapted}},{key:"objectPropsChange",value:function(e,t){for(var n in t)this.entryChange(e.concat([n]),t[n])}}]),e}(),di=new RegExp(/^#([\da-f]{3}){1,2}$|^#([\da-f]{4}){1,2}$|(rgb|hsl)a?\((\s*-?\d+%?\s*,){2}(\s*-?\d+%?\s*,?\s*\)?)(,\s*(0?\.\d+)?|1)?\)/,"gi"),fi=new ge({messages:{color:"The '{field}' field must be an a valid color! Actual: {actual}",measurement:"The '{field}' must be a measurement with specs that are not met. You've either provided wrong value/units or an invalid @ expression. Actual: {actual}"},useNewCustomCheckerFunction:!0});fi.add("html",(function(e,t,n){e.schema;var i=e.messages;return{source:"\n      if(value === null){\n        ".concat(this.makeError({type:"html",actual:"value",messages:i}),"\n      } else {\n        return value;\n      }\n    ")}})),fi.add("css",(function(e,t,n){e.schema;var i=e.messages;return{source:"\n      if(value === null){\n        ".concat(this.makeError({type:"css",actual:"value",messages:i}),"\n      } else {\n        return value;\n      }\n    ")}}));var mi=["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgrey","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgrey","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"];fi.add("color",(function(e,t,n){var i=this;e.schema;var r=e.messages,s=function(e,t){return i.makeError({type:"color",actual:e,messages:{color:t}})};return{source:"\n      const validateExpression = ".concat(qn,";\n      const attributeRegexp = /^").concat(Cn.attributeValue,"\\([_A-z0-9-]*\\)$/;\n      const patternRegexp = /^").concat(Cn.patternValue,"\\(([_A-z0-9.%-]+?(,[_A-z0-9.%-]+)*?)\\)$/;\n      const extractParenthesisAttrsAsArray = ").concat(Ai,';\n      var colors = "').concat(mi.join(","),"\".split(',')\n      if(typeof value !== 'string' && !(value instanceof String)){\n        ").concat(this.makeError({type:"measurement",actual:"value",messages:r}),"\n        return ;\n      }\n    \n      if(value.trim().startsWith('").concat(Cn.patternValue,"')){\n          if(!patternRegexp.test(value.replace(/ /g, ''))){\n            ").concat(s("value","The "+Cn.patternValue+" expression is invalid"),";\n            return;\n          }\n          const patternValues = extractParenthesisAttrsAsArray(value);\n          for(let i=0; i<patternValues.length; i++){\n            const valToCheck = patternValues[i];\n            if(!valToCheck.match(").concat(di,") && !colors.includes(valToCheck.toLowerCase())){\n              ").concat(this.makeError({type:"color",actual:"value",messages:r}),"\n              return;\n            }\n        }\n        return value;\n      } else if(value.trim().startsWith('").concat(Cn.attributeValue,"')){\n          if(!attributeRegexp.test(value)){\n            ").concat(s("value","The "+Cn.attributeValue+" expression is invalid"),";\n            return;\n          }\n\n          return value;\n        } else if(value.trim().startsWith('").concat(Cn.mathExpPreface,"')){\n          const validity = validateExpression(value);\n          if(validity.result === false){\n            ").concat(s("value","The "+Cn.expressionPreface+" expression is invalid"),';\n            return;\n          }\n          if(validity.unit !== ""){\n            ').concat(s("value","The "+Cn.expressionPreface+" expression includes units"),";\n            return;\n          }\n\n          return value;\n        }\n    \n      \n      if(!value.match(").concat(di,") && !colors.includes(value.toLowerCase())){\n        ").concat(this.makeError({type:"color",actual:"value",messages:r}),"\n      }\n      return value;\n    ")}}));var vi,yi=function(e){var t=new hi(e,fi).adaptSchema();return fi.compile(t)};(vi=window).AudioContext||(vi.AudioContext=window.webkitAudioContext);var gi=new window.AudioContext;function bi(e){return!isNaN(parseFloat(e))&&isFinite(e)}function ki(e){return"string"==typeof e||e instanceof String}function wi(e){return"object"===l(e)}function xi(e){return e&&"[object Function]"==={}.toString.call(e)}function Ci(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return!(null===t||!wi(e))&&Object.prototype.hasOwnProperty.call(e,t)}function Ei(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Pi=new RegExp("^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)","gi");function Oi(e,t){var n=null==e?void 0:e[t];if(!ki(n))return null;var i=n.match(Pi)[0],r=n.substring(i.length);return!function(e){return"number"==typeof e&&isFinite(e)}(i=Number(i))||"%"!==r&&"px"!==r?null:{number:i,unit:r}}var Ii=['originalDims should be an object containing both the "width" and "height" keys'];function Si(e){return null==e?{result:!0,analysis:{width:null,height:null}}:wi(e)&&Ci(e,"width")&&Ci(e,"height")?null==Oi(e,"width")?{result:!1,errors:["originalDims.width should be defined either on px or %."]}:null==Oi(e,"height")?{result:!1,errors:["originalDims.height should be defined either on px or %."]}:{result:!0,analysis:Di(e)}:{result:!1,errors:Ii}}function Di(e){return wi(e)&&null!=e?{width:Oi(e,"width"),height:Oi(e,"height")}:{width:null,height:null}}function Ai(e){var t=e.replace(/ /g,"");return/.*\((.*)\).*/.exec(t)[1].split(",")}function Mi(e,t){return Math.round(e/t)*t}function Ti(e){var t=e.split("___");return{mcid:t[0],attribute:t[1]}}function ji(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}function Bi(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=e?"_":"-";return"".concat(ji()).concat(ji()).concat(t).concat(ji()).concat(t).concat(ji())}function _i(e,t){return"".concat(e).concat("___").concat(t)}function Vi(){return!1}function Ri(e,t,n){for(var i=t.split("."),r=e,s=0;s<i.length-1;s++){if(!Ci(r,i[s]))return!1;r=r[i[s]]}return!!Ci(r,i[i.length-1])&&(r[i[i.length-1]]=n,!0)}var Li=new function e(t){s(this,e);var n=2;Ci(t,"logLevel")&&(n=t.logLevel);for(var i=0;i<bn.length;i++){var r=bn[i];n>=r.level?this[r.key]=window.console[r.consoleMethod].bind(window.console,"MotorCortex - ".concat(r.key,": ")):this[r.key]=function(){}}this.log=n>=3?window.console.log.bind(window.console,"MotorCortex - "):function(){}};function zi(e,t,n){var i=t(e);if(i.length>0){for(var r="Error on plugin's \"".concat(n.plugin_npm_name,'" "').concat(n.ClassName,'" instantiation. Errors (op props):'),s=0;s<i.length;s++)r+="\n - ".concat(i[s].message,". ").concat(i[s].actual," provided");return Li.error(r),{result:!1,errors:i}}return{result:!0}}function Fi(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Error on validation";try{var i=yi(e),r=i(t);if(!0===r)return{result:!0};for(var s="".concat(n,":"),o=0;o<r.length;o++)s+="\n - ".concat(r[o].message,". ").concat(r[o].actual," provided");return Li.error(s),{result:!1,errors:r}}catch(e){var a="".concat(n,". Invalid schema provided");return Li.error(a),{result:!1,errors:[a]}}}function Ni(e){var t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"};return(""+e).replace(/[&<>"'/]/g,(function(e){return t[e]}))}function $i(e,t,n){for(var i=[],r=0;r<e.length;r++){var s=e[r],o=s.parentMillisecond-n;o=o*t+n,1!==t&&i.push({id:s.incident.id,start:o,end:o+s.incident.duration*t,startDelta:o-s.millisecond})}return i}var Hi=function(e){return e.trimStart().startsWith("https://fonts.googleapis.com/css")};function Wi(e){return e.result?{result:!0,execute:e.execute}:{result:!1,errors:e.errors}}var Gi=function(){function e(t){s(this,e),this.runTimeInfo=t.runTimeInfo,this.context=t.context,this.onInitialise(),this.getIncidentById=t.getIncidentById}return f(e,[{key:"onInitialise",value:function(){}},{key:"_resize",value:function(){Li.log("Please overwite the _resize method of the Channel")}},{key:"addIncidents",value:function(e){return Wi(this.checkAddition(e))}},{key:"editIncidents",value:function(e,t){return Wi(this.checkEdit(e,t))}},{key:"removeIncidents",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Wi(this.checkDelete(e,t))}},{key:"recalcScratchValues",value:function(e){}},{key:"checkAddition",value:function(e){return{result:!0,execute:function(){}}}},{key:"checkEdit",value:function(e,t){return{result:!0,execute:function(){}}}},{key:"checkDelete",value:function(e){return{result:!0,execute:function(){}}}},{key:"checkResizedIncidents",value:function(e){return{result:!0,execute:function(){}}}},{key:"moveTo",value:function(e,t,n){}}],[{key:"type",get:function(){return"plain"}}]),e}(),qi="up",Ji="down",Ui="native.tree.bypass";function Ki(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function Xi(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ki(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ki(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Qi=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};s(this,e),this.parentNode=null,this.isNode=!1,Ci(t,"id")?this.id=t.id:this.id=Bi(),this.props=t}return f(e,[{key:"name",get:function(){return Ci(this.props,"name")?this.props.name:null},set:function(e){this.props.name=e}},{key:"delay",get:function(){return Ci(this.props,"delay")?this.props.delay:0},set:function(e){0!==e&&(this.props.delay=e)}},{key:"hiatus",get:function(){return Ci(this.props,"hiatus")?this.props.hiatus:0},set:function(e){0!==e&&(this.props.hiatus=e)}},{key:"repeats",get:function(){return Ci(this.props,"repeats")?this.props.repeats:1},set:function(e){this.props.repeats=e}},{key:"duration",get:function(){return this.repeats*(this.delay+this.props.duration+this.hiatus)},set:function(e){var t=e/this.duration;this.props.duration*=t,this.hiatus*=t,this.delay*=t}},{key:"setNewDuration",value:function(e){this.duration=e,this.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!1,direction:qi})}},{key:"systoleDiastole",value:function(e){this.duration*=e}},{key:"hasParent",get:function(){return null!==this.parentNode}},{key:"attachToNode",value:function(e){this.parentNode=e}},{key:"detachFromParent",value:function(){this.parentNode=null}},{key:"putMessageOnPipe",value:function(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(Ci(i,"direction")||(i.direction=Ji),i.direction!==Ji||Ci(i,"positionDelta")||(i.positionDelta=0),i.selfExecute){var r="handle".concat(Ei(e)),s="function"==typeof this[r];if(s){var o=this[r](n,t);if(o!==Ui){var a={response:o,responder:this};return i.direction===qi?a:[Xi(Xi({},a),{},{positionDelta:i.positionDelta})]}}}return i.direction===qi?this.hasParent?this.parentNode.putMessageOnPipe(e,t,n,{selfExecute:!0,direction:qi}):{response:!1,responder:null}:[]}},{key:"bypass",value:function(){return Ui}},{key:"positionOnPyramidion",get:function(){return this.getPositionOnPyramidion()}},{key:"getPositionOnPyramidion",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(this.hasParent){var t=this.putMessageOnPipe("getPositionOnPyramidion",{delta:e,id:this.id},"Parent",{selfExecute:!1,direction:qi});return t.response}return e}}]),e}(),Zi="Leaf has already been attached to another Node",Yi="Negative positioning of childs on nodes is not allowed",er="The Leaf with the requested id couldn't be found on the Tree";function tr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function nr(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?tr(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):tr(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ir(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=p(e);if(t){var r=p(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return u(this,n)}}var rr=function(e){a(n,e);var t=ir(n);function n(){var e,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return s(this,n),(e=t.call(this,i)).isNode=!0,e.children={},e.calculatedDuration=0,e}return f(n,[{key:"duration",get:function(){return this.repeats*(this.delay+this.calculatedDuration+this.hiatus)},set:function(e){if(0!==this.duration){var t=e/this.duration;for(var n in this.calculatedDuration*=t,this.hiatus*=t,this.delay*=t,this.children){var i=this.children[n];this.editPosition(i.id,i.position*t,!0),i.leaf.systoleDiastole(t)}}}},{key:"_calculateDuration",value:function(){var e=0;for(var t in this.children){var n=this.children[t];n.position+n.leaf.duration>e&&(e=n.position+n.leaf.duration)}return e!==this.calculatedDuration&&(this.calculatedDuration=e,!0)}},{key:"handleRecalcDuration",value:function(e,t){return!this._calculateDuration()||this.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!1,direction:qi})}},{key:"getLeafById",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(Ci(this.children,e))return this.children[e].leaf;if(t)return null;for(var n in this.children){var i=this.children[n].leaf;if(i.isNode){var r=i.getLeafById(e);if(null!=r)return r}}return null}},{key:"getLeafPosition",value:function(e){if(Ci(this.children,e))return this.children[e].position;var t=this.putMessageOnPipe("getLeafPosition",{id:e},"Groups",{selfExecute:!1,direction:Ji});return t.length>0?t[0].positionDelta+t[0].response:void 0}},{key:"handleGetLeafPosition",value:function(e,t){return this.getLeafPosition(t.id)}},{key:"checkAddition",value:function(e,t){return e.hasParent?{result:!1,reason:Zi}:t<0?{result:!1,reason:Yi}:{result:!0}}},{key:"addChild",value:function(e,t){return e.hasParent?{result:!1,reason:Zi}:(this.children[e.id]={id:e.id,leaf:e,position:t},e.attachToNode(this),this.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!0,direction:qi}),{result:!0})}},{key:"checkRemoveChild",value:function(e){return Ci(this.children,e)?{result:!0}:{result:!1,reason:er}}},{key:"removeChild",value:function(e){return this.children[e].leaf.detachFromParent(),delete this.children[e],this.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!0,direction:qi}),{result:!0}}},{key:"checkEditPosition",value:function(e,t){return t<0?{result:!1,reason:Yi}:Ci(this.children,e)?{result:!0}:{result:!1,reason:er}}},{key:"editPosition",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(Ci(this.children,e))return this.children[e].position=t,n||this.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!0,direction:qi}),{result:!0}}},{key:"putMessageOnPipe",value:function(e,t,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(Ci(r,"direction")||(r.direction=Ji),r.direction!==Ji||Ci(r,"positionDelta")||(r.positionDelta=0),r.direction===qi)return v(p(n.prototype),"putMessageOnPipe",this).call(this,e,t,i,r);var s=v(p(n.prototype),"putMessageOnPipe",this).call(this,e,t,i,r);if(s.length>0)return s;for(var o in this.children){var a=this.children[o].leaf,l=nr(nr({},r),{},{selfExecute:!0,positionDelta:r.positionDelta+this.children[o].position});s.push.apply(s,k(a.putMessageOnPipe(e,t,i,l)))}return s}},{key:"handleGetPositionOnPyramidion",value:function(e,t){var n=t.delta+this.getLeafPosition(t.id);return this.getPositionOnPyramidion(n)}}]),n}(Qi);function sr(e){e.descriptor.value=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};void 0!==this.blockID||t.blockId||(this.blockID=Bi()),this.DescriptiveIncident.putMessageOnPipe("setBlock",{id:this.blockID||t.blockId,description:e,incidentId:this.DescriptiveIncident.id,realIncidentId:this.id,options:t},"rootClip",{selfExecute:!0,direction:qi})}}function or(e){e.descriptor.value=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.DescriptiveIncident.putMessageOnPipe("unBlock",{id:null!==e?e:this.blockID},"rootClip",{selfExecute:!0,direction:qi})}}function ar(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=p(e);if(t){var r=p(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return u(this,n)}}function lr(){lr=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(n){t.forEach((function(t){t.kind===n&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var n=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var r=t.placement;if(t.kind===i&&("static"===r||"prototype"===r)){var s="static"===r?e:n;this.defineClassElement(s,t)}}),this)}),this)},defineClassElement:function(e,t){var n=t.descriptor;if("field"===t.kind){var i=t.initializer;n={enumerable:n.enumerable,writable:n.writable,configurable:n.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,n)},decorateClass:function(e,t){var n=[],i=[],r={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,r)}),this),e.forEach((function(e){if(!pr(e))return n.push(e);var t=this.decorateElement(e,r);n.push(t.element),n.push.apply(n,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:n,finishers:i};var s=this.decorateConstructor(n,t);return i.push.apply(i,s.finishers),s.finishers=i,s},addElementPlacement:function(e,t,n){var i=t[e.placement];if(!n&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var n=[],i=[],r=e.decorators,s=r.length-1;s>=0;s--){var o=t[e.placement];o.splice(o.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,r[s])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var u=0;u<c.length;u++)this.addElementPlacement(c[u],t);n.push.apply(n,c)}}return{element:e,finishers:i,extras:n}},decorateConstructor:function(e,t){for(var n=[],i=t.length-1;i>=0;i--){var r=this.fromClassDescriptor(e),s=this.toClassDescriptor((0,t[i])(r)||r);if(void 0!==s.finisher&&n.push(s.finisher),void 0!==s.elements){e=s.elements;for(var o=0;o<e.length-1;o++)for(var a=o+1;a<e.length;a++)if(e[o].key===e[a].key&&e[o].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[o].key+")")}}return{elements:e,finishers:n}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){if(void 0!==e)return C(e).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var n=fr(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var r=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var s={kind:t,key:n,placement:i,descriptor:Object.assign({},r)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(r,"get","The property descriptor of a field descriptor"),this.disallowProperty(r,"set","The property descriptor of a field descriptor"),this.disallowProperty(r,"value","The property descriptor of a field descriptor"),s.initializer=e.initializer),s},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:dr(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var n=dr(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:n}},runClassFinishers:function(e,t){for(var n=0;n<t.length;n++){var i=(0,t[n])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,n){if(void 0!==e[t])throw new TypeError(n+" can't have a ."+t+" property.")}};return e}function cr(e){var t,n=fr(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:n,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function ur(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function pr(e){return e.decorators&&e.decorators.length}function hr(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function dr(e,t){var n=e[t];if(void 0!==n&&"function"!=typeof n)throw new TypeError("Expected '"+t+"' to be a function");return n}function fr(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==l(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}var mr=function(e,t,n,i){var r=lr();if(i)for(var s=0;s<i.length;s++)r=i[s](r);var o=t((function(e){r.initializeInstanceElements(e,a.elements)}),n),a=r.decorateClass(function(e){for(var t=[],n=function(e){return"method"===e.kind&&e.key===s.key&&e.placement===s.placement},i=0;i<e.length;i++){var r,s=e[i];if("method"===s.kind&&(r=t.find(n)))if(hr(s.descriptor)||hr(r.descriptor)){if(pr(s)||pr(r))throw new ReferenceError("Duplicated methods ("+s.key+") can't be decorated.");r.descriptor=s.descriptor}else{if(pr(s)){if(pr(r))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+s.key+").");r.decorators=s.decorators}ur(s,r)}else t.push(s)}return t}(o.d.map(cr)),e);return r.initializeClassElements(o.F,a.elements),r.runClassFinishers(o.F,a.finishers)}(null,(function(e,t){var n=function(t){a(i,t);var n=ar(i);function i(t,r){var o;return s(this,i),o=n.call(this,r),e(c(o)),o.mc_plugin_npm_name="motor-cortex-js",o.plugin_channel_class=Gi,o.hasIncidents=!0,o.onGroupInitialise(),o.calculatedDuration=0,o}return i}(t);return{F:n,d:[{kind:"method",key:"onGroupInitialise",value:function(){}},{kind:"method",key:"handleAddIncident",value:function(e,t){if(this.id===e){var n=(0,t.incidentFromDescription)(t.incident,t.contextData,t.audio);return null===n?this.bypass():n}return this.bypass()}},{kind:"method",key:"handleMoveIncident",value:function(e,t){if(this.id===e){var n=this.getLeafById(t.incidentId,!0);return null===n?this.bypass():n}return this.bypass()}},{kind:"field",key:"handleRemoveIncident",value:function(){return this.handleMoveIncident}},{kind:"method",key:"handleResize",value:function(e){return this.id===e?this:this.bypass()}},{kind:"method",key:"removeChild",value:function(e){this.children[e].leaf.lastWish(),v(p(n.prototype),"removeChild",this).call(this,e)}},{kind:"method",key:"getIncidentsByChannel",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n={};for(var i in n["motor-cortex-js"]=[{millisecond:e,parentMillisecond:t,incident:this,id:this.id}],this.children){var r=this.children[i],s=r.leaf.getIncidentsByChannel(e+r.position,e);for(var o in s)Ci(n,o)?n[o]=n[o].concat(s[o]):n[o]=s[o]}return n}},{kind:"method",key:"lastWish",value:function(){for(var e in this.children)this.children[e].leaf.lastWish()}},{kind:"method",decorators:[sr],key:"setBlock",value:function(){}},{kind:"method",decorators:[or],key:"unblock",value:function(){}}]}}),rr);function vr(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=p(e);if(t){var r=p(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return u(this,n)}}var yr=function(e){a(n,e);var t=vr(n);function n(){return s(this,n),t.apply(this,arguments)}return f(n,[{key:"onInitialise",value:function(){this.incidents=[],this.incidentsById={}}},{key:"_incidentById",value:function(e){return this.incidentsById[e]}},{key:"_resize",value:function(e){for(var t=0;t<this.incidents.length;t++)this.incidents[t].millisecond*=e}},{key:"checkAddition",value:function(e){for(var t=[],n={},i=[],r=0;r<e.length;r++)n[e[r].id]=e[r].incident,i.push({id:e[r].id,millisecond:e[r].millisecond}),Ci(this.incidentsById,e[r].id)&&(Li.error("Incident with the id ".concat(e[r].id," already exists. Addition is rejected.")),t.push({type:"Already existing id",meta:{id:e[r].id}}));if(t.length>0)return{result:!1,errors:t};var s=this;return{result:!0,execute:function(){var t;s.incidentsById=Object.assign(s.incidentsById,n),(t=s.incidents).push.apply(t,i),s.incidents.sort((function(e,t){return e.millisecond-t.millisecond}));for(var r=0;r<e.length;r++)s._incidentById(e[r].id)._onGetContextOnce(s.context)}}}},{key:"checkEdit",value:function(e,t){var n=this.incidents;return{result:!0,execute:function(){for(var i,r=0;r<e.length;r++){i=e[r].id;for(var s=0;s<n.length;s++)if(n[s].id===i){n[s].millisecond+=t;break}}n.sort((function(e,t){return e.millisecond-t.millisecond}))}}}},{key:"checkDelete",value:function(e){for(var t=this,n=[],i=0;i<e.length;i++)n.push(e[i].id);return{result:!0,execute:function(){var e=t.incidents.filter((function(e){return!n.includes(e.id)}));t.incidents=e;for(var i=0;i<n.length;i++)delete t.incidentsById[n[i]]}}}},{key:"checkResizedIncidents",value:function(e){var t=this.incidents;return{result:!0,execute:function(){for(var n,i=0;i<e.length;i++){n=e[i].id;for(var r=0;r<t.length;r++)if(t[r].id===n){t[r].millisecond+=e[i].startDelta;break}}t.sort((function(e,t){return e.millisecond-t.millisecond}))}}}},{key:"moveTo",value:function(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(i)for(var r=0;r<this.incidents.length;r++){var s=this.incidents[r],o=this._incidentById(s.id);t<s.millisecond?o.onProgress(0,0,n,!0):t>s.millisecond+o.duration?o.onProgress(1,o.duration,n,!0):o.onProgress((t-s.millisecond)/o.duration,t-s.millisecond,n,!0)}else{var a,l=this;a=t>e?this.incidents.filter((function(n){return n.millisecond+l._incidentById(n.id).duration>=e&&n.millisecond+l._incidentById(n.id).duration<=t||l._incidentById(n.id).duration+n.millisecond>=t&&n.millisecond<=t})):this.incidents.filter((function(n){return n.millisecond+l._incidentById(n.id).duration>=t&&n.millisecond+l._incidentById(n.id).duration<=e||l._incidentById(n.id).duration+n.millisecond>=e&&n.millisecond<=e}));for(var c=0;c<a.length;c++){var u=a[c],p=this._incidentById(u.id),h=(t-u.millisecond)/p.duration>=1,d=h?1:(t-u.millisecond)/p.duration,f=h?p.duration:t-u.millisecond;p.onProgress(d,f,n,!1)}}}}]),n}(Gi);function gr(e){e.descriptor.value=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n={};return n[this.mc_plugin_npm_name]=[{millisecond:e,parentMillisecond:t,incident:this,id:this.id}],n}}function br(){br=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(n){t.forEach((function(t){t.kind===n&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var n=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var r=t.placement;if(t.kind===i&&("static"===r||"prototype"===r)){var s="static"===r?e:n;this.defineClassElement(s,t)}}),this)}),this)},defineClassElement:function(e,t){var n=t.descriptor;if("field"===t.kind){var i=t.initializer;n={enumerable:n.enumerable,writable:n.writable,configurable:n.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,n)},decorateClass:function(e,t){var n=[],i=[],r={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,r)}),this),e.forEach((function(e){if(!xr(e))return n.push(e);var t=this.decorateElement(e,r);n.push(t.element),n.push.apply(n,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:n,finishers:i};var s=this.decorateConstructor(n,t);return i.push.apply(i,s.finishers),s.finishers=i,s},addElementPlacement:function(e,t,n){var i=t[e.placement];if(!n&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var n=[],i=[],r=e.decorators,s=r.length-1;s>=0;s--){var o=t[e.placement];o.splice(o.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,r[s])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var u=0;u<c.length;u++)this.addElementPlacement(c[u],t);n.push.apply(n,c)}}return{element:e,finishers:i,extras:n}},decorateConstructor:function(e,t){for(var n=[],i=t.length-1;i>=0;i--){var r=this.fromClassDescriptor(e),s=this.toClassDescriptor((0,t[i])(r)||r);if(void 0!==s.finisher&&n.push(s.finisher),void 0!==s.elements){e=s.elements;for(var o=0;o<e.length-1;o++)for(var a=o+1;a<e.length;a++)if(e[o].key===e[a].key&&e[o].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[o].key+")")}}return{elements:e,finishers:n}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){if(void 0!==e)return C(e).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var n=Pr(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var r=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var s={kind:t,key:n,placement:i,descriptor:Object.assign({},r)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(r,"get","The property descriptor of a field descriptor"),this.disallowProperty(r,"set","The property descriptor of a field descriptor"),this.disallowProperty(r,"value","The property descriptor of a field descriptor"),s.initializer=e.initializer),s},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:Er(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var n=Er(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:n}},runClassFinishers:function(e,t){for(var n=0;n<t.length;n++){var i=(0,t[n])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,n){if(void 0!==e[t])throw new TypeError(n+" can't have a ."+t+" property.")}};return e}function kr(e){var t,n=Pr(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:n,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function wr(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function xr(e){return e.decorators&&e.decorators.length}function Cr(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function Er(e,t){var n=e[t];if(void 0!==n&&"function"!=typeof n)throw new TypeError("Expected '"+t+"' to be a function");return n}function Pr(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==l(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}var Or=function(e,t,n,i){var r=br();if(i)for(var s=0;s<i.length;s++)r=i[s](r);var o=t((function(e){r.initializeInstanceElements(e,a.elements)}),n),a=r.decorateClass(function(e){for(var t=[],n=function(e){return"method"===e.kind&&e.key===s.key&&e.placement===s.placement},i=0;i<e.length;i++){var r,s=e[i];if("method"===s.kind&&(r=t.find(n)))if(Cr(s.descriptor)||Cr(r.descriptor)){if(xr(s)||xr(r))throw new ReferenceError("Duplicated methods ("+s.key+") can't be decorated.");r.descriptor=s.descriptor}else{if(xr(s)){if(xr(r))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+s.key+").");r.decorators=s.decorators}wr(s,r)}else t.push(s)}return t}(o.d.map(kr)),e);return r.initializeClassElements(o.F,a.elements),r.runClassFinishers(o.F,a.finishers)}(null,(function(e){return{F:function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;s(this,t),e(this),this.attrs=n,this.props=i,this.dna=r,this.context=r.context,this.mcid=r.mcid,this.id=i.id||Bi(),this.modelId=i.modelId,this.gotContext=!1,this.plugin_channel_class=Gi,this.mc_plugin_npm_name="motor-cortex-js",Ci(i,"plugin_channel_class")&&(this.plugin_channel_class=i.plugin_channel_class),Ci(i,"mc_plugin_npm_name")&&(this.mc_plugin_npm_name=i.mc_plugin_npm_name),this.hasIncidents=!1,this.initialValues={},this.userDefinedInitialValues=n.initialValues||{},this.pureInitialValues=null,this.autoGenerated=!1,this.onInitialise()},d:[{kind:"get",key:"selector",value:function(){return this.props.selector}},{kind:"get",key:"animAttributes",value:function(){return this.attrs.animatedAttrs}},{kind:"set",key:"animAttributes",value:function(e){this.attrs.animatedAttrs[this.attributeKey]=e}},{kind:"method",key:"getScratchValue",value:function(){return 0}},{kind:"get",key:"element",value:function(){return null===this.context?[]:this.context.getElementByMCID?this.context.getElementByMCID(this.mcid):this.context.getElements(this.selector)[0]}},{kind:"get",key:"attributeKey",value:function(){return Object.keys(this.attrs.animatedAttrs)[0]}},{kind:"get",key:"targetValue",value:function(){return this.animAttributes[this.attributeKey]}},{kind:"method",key:"getElementAttribute",value:function(e){return this.element.getAttribute(e)}},{kind:"method",decorators:[gr],key:"getIncidentsByChannel",value:function(){}},{kind:"method",key:"hasUserDefinedInitialValue",value:function(){return Ci(this.userDefinedInitialValues,this.attributeKey)}},{kind:"method",key:"setInitialValue",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(t&&(this.pureInitialValues=JSON.parse(JSON.stringify(e))),this.hasUserDefinedInitialValue())if(wi(this.targetValue)){for(var n in this.userDefinedInitialValues[this.attributeKey])e[n]=this.userDefinedInitialValues[this.attributeKey][n];this.initialValues[this.attributeKey]=e}else this.initialValues[this.attributeKey]=this.userDefinedInitialValues[this.attributeKey];else this.initialValues[this.attributeKey]=e}},{kind:"get",key:"initialValue",value:function(){return this.initialValues[this.attributeKey]}},{kind:"method",key:"_onGetContextOnce",value:function(){try{if(!0===this.context.fragment)return;this.gotContext||(this.onGetContext(),this.gotContext=!0)}catch(e){Li.error(e),Li.error(this.mcid)}}},{kind:"method",key:"onGetContext",value:function(){Li.info('Overwritte the "onGetContext" method with the code you want to get executed',"info")}},{kind:"method",key:"lastWish",value:function(){}},{kind:"method",key:"onInitialise",value:function(){Li.info('Overwritte the "onInialise" method with the code you want to get executed',"info")}},{kind:"method",key:"onProgress",value:function(e,t){}},{kind:"method",decorators:[sr],key:"setBlock",value:function(){}},{kind:"method",decorators:[or],key:"unblock",value:function(){}}]}}));function Ir(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function Sr(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ir(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ir(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Dr(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=p(e);if(t){var r=p(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return u(this,n)}}var Ar=function(e){a(n,e);var t=Dr(n);function n(e,i,r){var o;return s(this,n),(o=t.call(this,e,i,r)).runTimeInfo={currentMillisecond:0},o}return f(n,[{key:"duration",get:function(){return this.DescriptiveIncident.realClip.duration}},{key:"lastWish",value:function(){this.ownClip&&this.ownClip.context.unmount()}},{key:"onGetContext",value:function(){var e,t,n=this.DescriptiveIncident.realClip.exportConstructionArguments(),i=(e=this.context,t=this.mcid,e.rootElement.querySelectorAll("[".concat(kn,'="').concat(t,'"]'))[0]),r=Sr(Sr({},n.props),{},{selector:void 0,host:i,containerParams:this.DescriptiveIncident.props.containerParams||{},originalDims:this.DescriptiveIncident.constructor.originalDims||{}});this.ownClip=new this.DescriptiveIncident.constructor.Incident(n.attrs,r,this.DescriptiveIncident),this.ownClip.clipCopyId=this.id,this.DescriptiveIncident.realClip.addContext({clipId:this.id,context:this.ownClip.context},!0)}},{key:"onProgress",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!1!==this.ownClip.ownContext.contextLoaded||0===e){for(var i in this.DescriptiveIncident.realClip.instantiatedChannels){var r=this.DescriptiveIncident.realClip.instantiatedChannels[i];r.moveTo(this.runTimeInfo.currentMillisecond,t,this.id,n)}this.runTimeInfo.currentMillisecond=t,this.ownClip.onAfterProgress(e,t)}else this.setBlock("context loading",{blockId:this.id})}}]),n}(Or);function Mr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function Tr(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Mr(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Mr(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function jr(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t?e.DescriptiveIncident:{context:e.context,mcid:e.mcid},i=new e.Incident(e.attrs,Tr(Tr({},e.props),{},{id:e.id||Bi()}),n);return i.mc_plugin_npm_name=e.plugin_npm_name,i.plugin_channel_class=e.Channel,i.DescriptiveIncident=e.DescriptiveIncident,i}function Br(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function _r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Br(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Br(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Vr(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=p(e);if(t){var r=p(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return u(this,n)}}function Rr(){Rr=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(n){t.forEach((function(t){t.kind===n&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var n=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var r=t.placement;if(t.kind===i&&("static"===r||"prototype"===r)){var s="static"===r?e:n;this.defineClassElement(s,t)}}),this)}),this)},defineClassElement:function(e,t){var n=t.descriptor;if("field"===t.kind){var i=t.initializer;n={enumerable:n.enumerable,writable:n.writable,configurable:n.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,n)},decorateClass:function(e,t){var n=[],i=[],r={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,r)}),this),e.forEach((function(e){if(!Fr(e))return n.push(e);var t=this.decorateElement(e,r);n.push(t.element),n.push.apply(n,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:n,finishers:i};var s=this.decorateConstructor(n,t);return i.push.apply(i,s.finishers),s.finishers=i,s},addElementPlacement:function(e,t,n){var i=t[e.placement];if(!n&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var n=[],i=[],r=e.decorators,s=r.length-1;s>=0;s--){var o=t[e.placement];o.splice(o.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,r[s])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var u=0;u<c.length;u++)this.addElementPlacement(c[u],t);n.push.apply(n,c)}}return{element:e,finishers:i,extras:n}},decorateConstructor:function(e,t){for(var n=[],i=t.length-1;i>=0;i--){var r=this.fromClassDescriptor(e),s=this.toClassDescriptor((0,t[i])(r)||r);if(void 0!==s.finisher&&n.push(s.finisher),void 0!==s.elements){e=s.elements;for(var o=0;o<e.length-1;o++)for(var a=o+1;a<e.length;a++)if(e[o].key===e[a].key&&e[o].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[o].key+")")}}return{elements:e,finishers:n}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){if(void 0!==e)return C(e).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var n=Hr(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var r=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var s={kind:t,key:n,placement:i,descriptor:Object.assign({},r)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(r,"get","The property descriptor of a field descriptor"),this.disallowProperty(r,"set","The property descriptor of a field descriptor"),this.disallowProperty(r,"value","The property descriptor of a field descriptor"),s.initializer=e.initializer),s},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:$r(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var n=$r(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:n}},runClassFinishers:function(e,t){for(var n=0;n<t.length;n++){var i=(0,t[n])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,n){if(void 0!==e[t])throw new TypeError(n+" can't have a ."+t+" property.")}};return e}function Lr(e){var t,n=Hr(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:n,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function zr(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function Fr(e){return e.decorators&&e.decorators.length}function Nr(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function $r(e,t){var n=e[t];if(void 0!==n&&"function"!=typeof n)throw new TypeError("Expected '"+t+"' to be a function");return n}function Hr(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==l(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}var Wr=function(e,t,n,i){var r=Rr();if(i)for(var s=0;s<i.length;s++)r=i[s](r);var o=t((function(e){r.initializeInstanceElements(e,a.elements)}),n),a=r.decorateClass(function(e){for(var t=[],n=function(e){return"method"===e.kind&&e.key===s.key&&e.placement===s.placement},i=0;i<e.length;i++){var r,s=e[i];if("method"===s.kind&&(r=t.find(n)))if(Nr(s.descriptor)||Nr(r.descriptor)){if(Fr(s)||Fr(r))throw new ReferenceError("Duplicated methods ("+s.key+") can't be decorated.");r.descriptor=s.descriptor}else{if(Fr(s)){if(Fr(r))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+s.key+").");r.decorators=s.decorators}zr(s,r)}else t.push(s)}return t}(o.d.map(Lr)),e);return r.initializeClassElements(o.F,a.elements),r.runClassFinishers(o.F,a.finishers)}(null,(function(e,t){return{F:function(t){a(i,t);var n=Vr(i);function i(t,r,o,a){var l;return s(this,i),l=n.call(this,_r(_r({},t.props),{},{id:"".concat(t.incidentId,"_").concat(o)})),e(c(l)),l.contexts={},l.constructionIngredients=t,l.mcid=o,l.DescriptiveIncident=a,l.mc_plugin_npm_name=t.plugin_npm_name,l.plugin_channel_class=t.Channel,l.addContext(r),l.timeScale=1,a.realClip.duration>0&&(l.timeScale=l.props.duration/a.realClip.duration),a.realClip.subscribeToDurationChange((function(e){l.props.duration=l.timeScale*e,l.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!1,direction:qi})})),l.easing=Un.linear,Ci(l.props,"easing")&&(Array.isArray(l.props.easing)?l.easing=vn(l.props.easing[0],l.props.easing[1],l.props.easing[2],l.props.easing[3]):l.easing=Un[l.props.easing]),l}return i}(t),d:[{kind:"get",key:"originalContext",value:function(){return this.contexts[this.originalContextKey]}},{kind:"method",key:"onProgress",value:function(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=this.delay+this.props.duration+this.hiatus,s=t%r;0!==t&&0===s&&(s=this.delay+this.props.duration);var o=s-this.delay;o<0?o=0:o>this.props.duration&&(o=this.props.duration);var a=0===this.props.duration?0:o/this.props.duration,l=this.easing(a),c=l*this.props.duration*(1/this.timeScale);!1!==this.originalContext.context.contextLoaded&&this.contexts[n].onProgress(l,c,i)}},{kind:"method",key:"addContext",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];0===Object.keys(this.contexts).length&&(this.originalContextKey=e.clipId);var n=_r(_r({},this.constructionIngredients),{},{context:e.context,mcid:this.mcid,Incident:Ar,DescriptiveIncident:this.DescriptiveIncident});this.contexts[e.clipId]=jr(n),t&&this.contexts[e.clipId]._onGetContextOnce()}},{kind:"method",key:"handleAddContext",value:function(e,t){return this.addContext(t,!0),!0}},{kind:"method",key:"handleContextLoaded",value:function(e,t){this._onGetContextOnce()}},{kind:"method",decorators:[gr],key:"getIncidentsByChannel",value:function(){}},{kind:"method",key:"gotContext",value:function(){for(var e in this.contexts)this.contexts[e].gotContext()}},{kind:"method",key:"_onGetContextOnce",value:function(){if(!1!==this.originalContext.contextLoaded)for(var e in this.contexts)this.contexts[e]._onGetContextOnce()}},{kind:"method",key:"lastWish",value:function(){for(var e in this.contexts)this.contexts[e].lastWish()}},{kind:"method",key:"onGetContext",value:function(){if(!1!==this.originalContext.contextLoaded)for(var e in this.contexts)this.contexts[e].onGetContext()}}]}}),Qi);function Gr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function qr(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Gr(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Gr(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Jr(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=p(e);if(t){var r=p(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return u(this,n)}}function Ur(){Ur=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(n){t.forEach((function(t){t.kind===n&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var n=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var r=t.placement;if(t.kind===i&&("static"===r||"prototype"===r)){var s="static"===r?e:n;this.defineClassElement(s,t)}}),this)}),this)},defineClassElement:function(e,t){var n=t.descriptor;if("field"===t.kind){var i=t.initializer;n={enumerable:n.enumerable,writable:n.writable,configurable:n.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,n)},decorateClass:function(e,t){var n=[],i=[],r={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,r)}),this),e.forEach((function(e){if(!Qr(e))return n.push(e);var t=this.decorateElement(e,r);n.push(t.element),n.push.apply(n,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:n,finishers:i};var s=this.decorateConstructor(n,t);return i.push.apply(i,s.finishers),s.finishers=i,s},addElementPlacement:function(e,t,n){var i=t[e.placement];if(!n&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var n=[],i=[],r=e.decorators,s=r.length-1;s>=0;s--){var o=t[e.placement];o.splice(o.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,r[s])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var u=0;u<c.length;u++)this.addElementPlacement(c[u],t);n.push.apply(n,c)}}return{element:e,finishers:i,extras:n}},decorateConstructor:function(e,t){for(var n=[],i=t.length-1;i>=0;i--){var r=this.fromClassDescriptor(e),s=this.toClassDescriptor((0,t[i])(r)||r);if(void 0!==s.finisher&&n.push(s.finisher),void 0!==s.elements){e=s.elements;for(var o=0;o<e.length-1;o++)for(var a=o+1;a<e.length;a++)if(e[o].key===e[a].key&&e[o].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[o].key+")")}}return{elements:e,finishers:n}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){if(void 0!==e)return C(e).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var n=es(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var r=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var s={kind:t,key:n,placement:i,descriptor:Object.assign({},r)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(r,"get","The property descriptor of a field descriptor"),this.disallowProperty(r,"set","The property descriptor of a field descriptor"),this.disallowProperty(r,"value","The property descriptor of a field descriptor"),s.initializer=e.initializer),s},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:Yr(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var n=Yr(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:n}},runClassFinishers:function(e,t){for(var n=0;n<t.length;n++){var i=(0,t[n])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,n){if(void 0!==e[t])throw new TypeError(n+" can't have a ."+t+" property.")}};return e}function Kr(e){var t,n=es(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:n,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function Xr(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function Qr(e){return e.decorators&&e.decorators.length}function Zr(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function Yr(e,t){var n=e[t];if(void 0!==n&&"function"!=typeof n)throw new TypeError("Expected '"+t+"' to be a function");return n}function es(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==l(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}var ts=function(e,t,n,i){var r=Ur();if(i)for(var s=0;s<i.length;s++)r=i[s](r);var o=t((function(e){r.initializeInstanceElements(e,a.elements)}),n),a=r.decorateClass(function(e){for(var t=[],n=function(e){return"method"===e.kind&&e.key===s.key&&e.placement===s.placement},i=0;i<e.length;i++){var r,s=e[i];if("method"===s.kind&&(r=t.find(n)))if(Zr(s.descriptor)||Zr(r.descriptor)){if(Qr(s)||Qr(r))throw new ReferenceError("Duplicated methods ("+s.key+") can't be decorated.");r.descriptor=s.descriptor}else{if(Qr(s)){if(Qr(r))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+s.key+").");r.decorators=s.decorators}Xr(s,r)}else t.push(s)}return t}(o.d.map(Kr)),e);return r.initializeClassElements(o.F,a.elements),r.runClassFinishers(o.F,a.finishers)}(null,(function(e,t){var n=function(t){a(i,t);var n=Jr(i);function i(t,r,o,a){var l;if(s(this,i),l=n.call(this,qr(qr({},t.props),{},{id:null!==a?"".concat(t.incidentId,"_").concat(o,"_").concat(a):"".concat(t.incidentId,"_").concat(o)})),e(c(l)),l.contexts={},l.constructionIngredients=t,l.mcid=o,l.attribute=a,l.mc_plugin_npm_name=t.plugin_npm_name,l.plugin_channel_class=t.Channel,l.DescriptiveIncident=t.DescriptiveIncident,l.addContext(r),null!==a){var u=l.constructionIngredients.attrs.animatedAttrs[l.attribute];Array.isArray(u)?l.originalAnimatedAttributeValue=k(u):wi(u)?l.originalAnimatedAttributeValue=qr({},u):l.originalAnimatedAttributeValue=u}return l.easing=Un.linear,Ci(l.props,"easing")&&(Array.isArray(l.props.easing)?l.easing=vn(l.props.easing[0],l.props.easing[1],l.props.easing[2],l.props.easing[3]):l.easing=Un[l.props.easing]),l}return i}(t);return{F:n,d:[{kind:"get",key:"originalContext",value:function(){return this.contexts[this.originalContextKey]}},{kind:"get",key:"duration",value:function(){return v(p(n.prototype),"duration",this)}},{kind:"set",key:"duration",value:function(e){for(var t in gn(p(n.prototype),"duration",e,this,!0),this.contexts)this.contexts[t].duration=e}},{kind:"method",key:"addContext",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!1;0===Object.keys(this.contexts).length&&(this.originalContextKey=e.clipId,this.originalClipContext=e.context,n=!0);var i=qr(qr({},this.constructionIngredients),{},{context:e.context,mcid:this.mcid}),r=jr(i);this.contexts[e.clipId]=r,n||null==this.attribute||this.contexts[e.clipId].setInitialValue(this.initialValue),t&&this.contexts[e.clipId].context.contextLoaded&&this.contexts[e.clipId]._onGetContextOnce()}},{kind:"method",key:"handleAddContext",value:function(e,t){return this.addContext(t,!0),!0}},{kind:"method",key:"handleContextLoaded",value:function(e,t){return this._onGetContextOnce(),!0}},{kind:"method",decorators:[gr],key:"getIncidentsByChannel",value:function(){}},{kind:"method",key:"onProgress",value:function(e,t,n){var i=t%(this.delay+this.props.duration+this.hiatus);0!==t&&0===i&&(i=this.delay+this.props.duration);var r=i-this.delay;r<0?r=0:r>this.props.duration&&(r=this.props.duration);var s=r/this.props.duration,o=this.easing(s),a=o*this.props.duration;if(null!=n)!1!==this.contexts[n].context.contextLoaded&&this.contexts[n].onProgress(o,a);else for(var l in this.contexts)this.originalContextKey===l&&!0===this.originalContext.fragment||this.contexts[l].onProgress(o,a)}},{kind:"get",key:"animatedAttributeValue",value:function(){return this.constructionIngredients.attrs.animatedAttrs[this.attribute]}},{kind:"set",key:"animatedAttributeValue",value:function(e){this.constructionIngredients.attrs.animatedAttrs[this.attribute]=e}},{kind:"method",key:"gotContext",value:function(){for(var e in this.contexts)this.contexts[e].gotContext()}},{kind:"method",key:"_onGetContextOnce",value:function(){if(!1!==this.originalContext.context.contextLoaded)for(var e in this.contexts)this.contexts[e]._onGetContextOnce()}},{kind:"method",key:"lastWish",value:function(){for(var e in this.contexts)this.contexts[e].lastWish()}},{kind:"method",key:"onGetContext",value:function(){if(!1!==this.originalContext.contextLoaded)for(var e in this.contexts)this.contexts[e].context.contextLoaded&&this.contexts[e].onGetContext()}},{kind:"get",key:"initialValue",value:function(){return this.originalContext.initialValue}},{kind:"get",key:"scratchValue",value:function(){return this.originalContext.scratchValue}},{kind:"get",key:"pureInitialValues",value:function(){return this.originalContext.pureInitialValues}},{kind:"method",key:"setInitialValue",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];for(var n in null===e&&(e=this.getScratchValue()),this.contexts)this.contexts[n].setInitialValue(JSON.parse(JSON.stringify(e)),t)}},{kind:"method",key:"getScratchValue",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(!this.originalContext.context.contextLoaded)return 0;if(null!=e)return this.contexts[e].getScratchValue();var t=Object.keys(this.contexts);if(Ci(this.originalClipContext,"nonFragmentedContext")){var n=qr(qr({},this.constructionIngredients),{},{context:this.originalClipContext.nonFragmentedContext,mcid:this.mcid}),i=jr(n);return i.getScratchValue()}return 1===t.length?this.originalContext.getScratchValue():this.contexts[t[1]].getScratchValue()}},{kind:"method",key:"setCompoAttrKeyValue",value:function(e,t){for(var n in this.contexts)this.contexts[n].attrs.animatedAttrs[this.attribute][e]=t,this.contexts[n].lastWish(),this.contexts[n].onGetContext()}},{kind:"method",key:"play",value:function(e,t,n){return this.contexts[n].play(t)}},{kind:"method",key:"stop",value:function(e){this.contexts[e].stop()}}]}}),Qi);function ns(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function is(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ns(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ns(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function rs(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=p(e);if(t){var r=p(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return u(this,n)}}var ss=function(e){a(n,e);var t=rs(n);function n(e,i,r,o,a){var l;return s(this,n),(l=t.call(this,{},{id:"".concat(e.id,"_").concat(r)})).mcid=r,l.selector=o,l.data=a,l.setUp(e,i),l}return f(n,[{key:"setUp",value:function(e,t){for(var n in this.data.attrs.animatedAttrs){var i={};i[n]=this.data.attrs.animatedAttrs[n];var r=is(is({},this.data.attrs),{},{animatedAttrs:i}),s=is(is({},this.data.props),{},{selector:this.selector}),o={incidentId:e.id,attrs:r,props:s,Incident:e.constructor.Incident,plugin_npm_name:e.constructor.plugin_npm_name,Channel:e.constructor.Channel,DescriptiveIncident:e},a=new ts(o,t,this.mcid,n);this.addChild(a,0)}}}]),n}(mr);function os(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=p(e);if(t){var r=p(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return u(this,n)}}var as=function(e){a(n,e);var t=os(n);function n(e,i){var r;return s(this,n),(r=t.call(this,{},{id:e.id})).contexts={},r.contexts[i.clipId]=i.context,r.originalContextKey=i.clipId,r.initParams=i.context.initParams,r.instantiatedCopiesContexts=i.instantiatedCopiesContexts,r.descriptiveIncident=e,r.staggerAttrs=[],r.staggerProps=[],r.setUp(e,i),r}return f(n,[{key:"originalContext",get:function(){return this.contexts[this.originalContextKey]}},{key:"parsePropsDynamicValues",value:function(e,t){for(var n,i=0;i<e.propsStaggers.length;i++)n=e.propsStaggers[i],this.staggerProps.push({path:n.path,values:n.stagger.calculateValues(t,this.initParams)})}},{key:"parseAttrsDynamicValues",value:function(e,t){for(var n,i=0;i<e.attributesStaggers.length;i++)n=e.attributesStaggers[i],this.staggerAttrs.push({path:n.path,values:n.stagger.calculateValues(t,this.initParams)})}},{key:"setUp",value:function(e,t){var n,i,r=this.originalContext.getElements(e.selector());this.parsePropsDynamicValues(e,r),this.parseAttrsDynamicValues(e,r);for(var s=0;s<r.length;s++){for(var o in n=r[s],i=this._getElementMCID(n),this.instantiatedCopiesContexts)this._setElementMCID(this.instantiatedCopiesContexts[o],this.instantiatedCopiesContexts[o].getElements(e.selector())[s],i);this._createElementIncident(n,e,t,s,r.length,i)}}},{key:"handleRecalcDuration",value:function(e,t){var i=v(p(n.prototype),"handleRecalcDuration",this).call(this,e,t);return this.descriptiveIncident.propsStaggers.length>0&&(this.descriptiveIncident.dynamicDurationValue=1*this.duration),i}},{key:"lastWish",value:function(){this.descriptiveIncident.propsStaggers.length>0&&(this.descriptiveIncident.dynamicDurationValue=null,this.descriptiveIncident.putMessageOnPipe("setDurationDynamic",{},"Groups",{selfExecute:!1,direction:qi})),v(p(n.prototype),"lastWish",this).call(this)}},{key:"_getElementMCID",value:function(e){var t=this.originalContext.getMCID(e);return t||(t=Bi(!0),this.originalContext.setMCID(e,t)),t}},{key:"_setElementMCID",value:function(e,t,n){e.getMCID(t)||e.setMCID(t,n)}},{key:"_prepareAttrsPropsForElement",value:function(e,t){var n=function(e,t){for(var n=[],i=0;i<e.length;i++)n.push({path:e[i].path,value:e[i].values[t]});return n}(this.staggerAttrs,t),i=function(e,t){for(var n=[],i=0;i<e.length;i++)n.push({path:e[i].path,value:e[i].values[t]});return n}(this.staggerProps,t),r=e.attrs,s=e.props;if(n.length>0){r=JSON.parse(JSON.stringify(e.attrs));for(var o=0;o<n.length;o++)Ri(r,n[o].path,n[o].value)}if(i.length>0){s=JSON.parse(JSON.stringify(e.props));for(var a=0;a<i.length;a++)Ri(s,i[a].path,i[a].value)}return{attrs:r,props:s}}},{key:"_createElementIncident",value:function(e,t,n,i,r,s){var o=this._prepareAttrsPropsForElement(t,i);if(Ci(t.attrs,"animatedAttrs")){var a=new ss(t,n,s,n.context.getElementSelectorByMCID(s),o);this.addChild(a,0)}else{var l=o.attrs,c=o.props,u={incidentId:t.id,attrs:l,props:c,Incident:t.constructor.Incident,plugin_npm_name:t.constructor.plugin_npm_name,Channel:t.constructor.Channel,DescriptiveIncident:t},p=new ts(u,n,s,null);this.addChild(p,0)}}}]),n}(mr);function ls(e){var t=new e.Class(e.attrs,e.props);if(!1===t.result)return t;if(Ci(e,"incidents"))for(var n in e.incidents){var i=e.incidents[n],r=ls(i.leaf);if(!1===r.result)return r;var s=t.addIncident(r,i.position);if(!1===s.result)return s}return t}function cs(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function us(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?cs(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):cs(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ps(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=p(e);if(t){var r=p(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return u(this,n)}}var hs=function(e){a(n,e);var t=ps(n);function n(e,i){var r;return s(this,n),(r=t.call(this,e,i)).realClip=e.realClip,r}return f(n,[{key:"_createElementIncident",value:function(e,t,n,i,r,s){var o=this._prepareAttrsPropsForElement(t,0);if(t.realClip.isNullClip){var a=ls(us(us({},t.exportLiveDefinition()),o));t.realClip=a.realClip}var l=t.realClip.exportConstructionArguments(),c=us(us(us(us({},t.props),{},{duration:t.realClip.duration},l.props),o.props),{},{selector:n.context.getElementSelectorByMCID(s)}),u={incidentId:t.id,attrs:l.attrs,props:c,Incident:t.constructor.Incident,plugin_npm_name:t.constructor.plugin_npm_name,Channel:yr,DescriptiveIncident:t},p=new Wr(u,n,s,t);this.addChild(p,0)}}]),n}(as),ds="7.5.2";function fs(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function ms(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?fs(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fs(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var vs=["cm","mm","in","px","pt","pc","em","ex","ch","rem","vw","vh","vmin","vmax","%"],ys=[{type:"string",optional:!0,default:"linear",enum:["linear","easeInQuad","easeOutQuad","easeInOutQuad","easeInCubic","easeOutCubic","easeInOutCubic","easeInQuart","easeOutQuart","easeInOutQuart","easeInQuint","easeOutQuint","easeInOutQuint","easeInSine","easeOutSine","easeInOutSine","easeInExpo","easeOutExpo","easeInOutExpo","easeInCirc","easeOutCirc","easeInOutCirc","easeInElastic","easeOutElastic","easeInOutElastic","easeInBack","easeOutBack","easeInOutBack","easeInBounce","easeOutBounce","easeInOutBounce"]},{type:"array",optional:!0,length:4,items:{type:"number"}}],gs={type:"string",empty:!1,trim:!0,optional:!0},bs={type:"string",empty:!1,trim:!0,optional:!0},ks={type:"string",empty:!1,optional:!1},ws={type:"amount",optional:!1,integer:!0,min:0},xs={type:"amount",optional:!0,integer:!0,min:0},Cs={type:"amount",integer:!0,min:1,optional:!0},Es={type:"amount",integer:!0,min:0,optional:!0},Ps={type:"amount",integer:!0,min:0,optional:!0},Os={type:"html",optional:!0},Is={type:"css",optional:!0},Ss={type:"array",optional:!0,items:{type:"object",props:{type:{enum:["google-font"],type:"string"},src:{type:"string"}}}},Ds={type:"array",items:{type:"object",strict:!0,props:{src:"string",id:"string",mcid:{type:"string",optional:!0},classes:{type:"array",optional:!0,items:"string"},base64:{type:"boolean",optional:!0},startValues:{optional:!0,type:"object",props:{gain:{optional:!0,type:"number"},pan:{optional:!0,type:"number"}}}}},optional:!0},As=yi({id:gs,name:bs,selector:ms(ms({},ks),{},{optional:!0}),easing:ys,duration:ws,startFrom:{type:"amount",integer:!0,min:0,optional:!0},repeats:Cs,hiatus:Es,delay:Ps}),Ms={type:"object",optional:!0,props:{width:{type:"measurement",units:vs,optional:!0},height:{type:"measurement",units:vs,optional:!0}}},Ts={type:"string",enum:["on","off","only"],optional:!0},js=yi({props:[{type:"object",strict:!0,props:{id:gs,name:bs,selector:ms(ms({},ks),{},{optional:!0}),repeats:Cs,hiatus:Es,delay:Ps,easing:ys,duration:xs,html:Os,css:Is,audioSources:Ds,audio:Ts,containerParams:Ms,fonts:Ss,initParams:{type:"object",optional:!0}}},{type:"object",strict:!0,props:{id:gs,name:bs,host:{type:"any",optional:!1},duration:xs,html:Os,css:Is,audioSources:Ds,audio:Ts,containerParams:Ms,fonts:Ss,initParams:{type:"object",optional:!0},initParamsValidationRules:{type:"object",optional:!0}}},{type:"object",strict:!0,props:{root:{type:"boolean",optional:!0},name:bs,id:gs,audioSources:Ds,audio:ms(ms({},Ts),{},{enum:["on"]})}}]}),Bs=yi({selector:ms(ms({},ks),{},{optional:!0,strict:!0}),name:bs}),_s=yi({selector:ms(ms({},ks),{},{strict:!0,optional:!0}),name:bs,repeats:{type:"amount",integer:!0,min:1,optional:!0},hiatus:{type:"amount",integer:!0,min:0,optional:!0},delay:{type:"amount",integer:!0,min:0,optional:!0}});function Vs(e){e.descriptor.value=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.exportLiveDefinition();for(var i in e)Mn(i,e[i],!0,"attrs",n);for(var r in t)Mn(r,t[r],!0,"props",n);return ls(n)}}yi({selector:ks,duration:ws});var Rs="mc.descriptive.decisionAuthority";function Ls(e){e.descriptor.value=function(e){if(null!==this.constructor.attrsValidationRules){var t=this.constructor.attrsValidationMethod(e);if(t.length>0)return{result:!1,errors:t}}return!0===this.putMessageOnPipe("checkForClip",{},Rs,{selfExecute:!0,direction:qi}).response?this.manageEditAttrProps(e,"attrs"):(this.attrs=e,{result:!0})}}function zs(e){e.descriptor.value=function(e){var t=zi(e,this.constructor.propsValidationRules,this.constructor);return t.result?!0===this.putMessageOnPipe("checkForClip",{},Rs,{selfExecute:!0,direction:qi}).response?this.manageEditAttrProps(e,"props"):(this.props=e,{result:!0}):t}}function Fs(e){e.descriptor.value=function(){return null!==this.props.host&&void 0!==this.props.host?[this.props.host]:this.hasParent&&this.putMessageOnPipe("checkForClip",{},Rs,{selfExecute:!0,direction:qi}).response?this.putMessageOnPipe("getElements",{selector:this.selector()},Rs,{selfExecute:!1,direction:qi}).response:[]}}function Ns(e){e.descriptor.value=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{check:!0};if("dynamic"===this.duration)return{result:!1,reason:"Incidents with dynamic duration can't be resized. Once the Incident enters a Clip it'll become resizable"};if(e===this.duration)return{result:!0,meta:{unprocessed:!0}};if(e<=0)return{result:!1,reason:"Size must always be > 0"};if(t.check&&this.hasParent){var n=this.putMessageOnPipe("checkResize",{id:this.id,newSize:e,fraction:e/this.duration},Rs,{selfExecute:!1,direction:qi});if(!n.response.result)return n.response}return this.setNewDuration(e),{result:!0}}}function $s(e){e.descriptor.value=function(){return null===this.inheritedSelector?Ci(this.props,"selector")?this.props.selector:null:Ci(this.props,"selector")?"&"===this.props.selector.charAt(0)?this.inheritedSelector+this.props.selector.substring(1):"".concat(this.inheritedSelector," ").concat(this.props.selector):this.inheritedSelector}}var Hs=function(){function e(t){s(this,e),this.expressionProps=t}return f(e,[{key:"calculateValues",value:function(e){for(var t=[],n=0;n<e.length;n++){var i=e[n].getAttribute(this.expressionProps.attribute);bi(i)&&(i=parseFloat(i)),t.push(i)}return t}}]),e}(),Ws=function(){function e(t){s(this,e),this.patternProps=t}return f(e,[{key:"calculateValues",value:function(e){for(var t=this.patternProps.pattern.length,n=[],i=0;i<e.length;i++)n.push(this.patternProps.pattern[i%t]);return n}},{key:"resize",value:function(e){if("amount"!==this.patternProps.type)return"".concat(Cn.patternValue,"(").concat(this.patternProps.pattern.join(),")");for(var t=[],n=0;n<this.patternProps.pattern.length;n++)t.push(e*this.patternProps.pattern[n]);return"".concat(Cn.patternValue,"(").concat(t.join(),")")}}]),e}(),Gs=function(){function e(t){s(this,e),this.expressionProps=t}return f(e,[{key:"calculateValues",value:function(e,t){var n=this.expressionProps.expression.substring(this.expressionProps.expression.indexOf(".")+1),i=Tn(n,"",t);return Array(e.length).fill(i)}}]),e}(),qs=function e(t){return s(this,e),"expression"===t.dynamicType?new Jn(t):"stagger"===t.dynamicType?new Zn(t):"attribute"===t.dynamicType?new Hs(t):"pattern"===t.dynamicType?new Ws(t):"initParams"===t.dynamicType?new Gs(t):(Li.error('dynamicType must be either "stagger", "expression", "pattern", "attribute" or "initParams". '.concat(t.dynamicType," provided")),!1)};function Js(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!e)return[];for(var n=[],i=0,r=Object.entries(e);i<r.length;i++){var s=an(r[i],2),o=s[0],a=s[1];if(!(a instanceof Element))if(wi(a)){var l=Js(a,"".concat(t).concat(""===t?"":".").concat(o));n.push.apply(n,k(l))}else if(ki(a)){var c=a.trim();if(c.startsWith(Cn.staggerPreface)){var u=Xn(c,!1),p=u.start.match(Pi)[0],h=u.end.match(Pi)[0],d=u.start.toString().substring(p.length),f={dynamicType:"stagger",path:"".concat(t).concat(""===t?"":".").concat(o),from:1*p,to:1*h,mode:u.mode,unit:d,fraction:u.startFraction,easing:u.easing,reverse:u.reverse,type:""===d?"amount":"measurement"};n.push(f)}else if(c.startsWith(Cn.attributeValue)){var m={dynamicType:"attribute",path:"".concat(t).concat(""===t?"":".").concat(o),unit:"",type:"measurement",attribute:/\(([^)]+)\)/.exec(c)[1]};n.push(m)}else if(c.startsWith(Cn.mathExpPreface)){var v=qn(c),y={dynamicType:"expression",path:"".concat(t).concat(""===t?"":".").concat(o),unit:v.unit,type:""===v.unit?"amount":"measurement",expression:v.expression};n.push(y)}else if(c.startsWith(Cn.patternValue)){for(var g=Ai(c),b=!0,w=[],x=0;x<g.length;x++){if(!bi(g[x])){b=!1;break}w.push(parseFloat(g[x]))}b&&(g=w);var C={dynamicType:"pattern",path:"".concat(t).concat(""===t?"":".").concat(o),unit:"",type:b?"amount":"measurement",pattern:g};n.push(C)}else if(c.startsWith(Cn.initParamsPreface)){var E={dynamicType:"initParams",path:"".concat(t).concat(""===t?"":".").concat(o),unit:"",type:"",expression:c};n.push(E)}}}return n}function Us(e){e.descriptor.value=function(){for(var e={attrs:{},props:{}},t=Js(this.props),n=0;n<t.length;n++)this.propsStaggers.push({path:t[n].path,stagger:new qs(t[n])}),Ci(e.props,t[n].dynamicType)||(e.props[t[n].dynamicType]=0),e.props[t[n].dynamicType]+=1;for(var i=Js(this.attrs),r=0;r<i.length;r++)this.attributesStaggers.push({path:i[r].path,stagger:new qs(i[r])}),Ci(e.attrs,i[r].dynamicType)||(e.attrs[i[r].dynamicType]=0),e.attrs[i[r].dynamicType]+=1;return e}}function Ks(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=p(e);if(t){var r=p(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return u(this,n)}}function Xs(){Xs=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(n){t.forEach((function(t){t.kind===n&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var n=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var r=t.placement;if(t.kind===i&&("static"===r||"prototype"===r)){var s="static"===r?e:n;this.defineClassElement(s,t)}}),this)}),this)},defineClassElement:function(e,t){var n=t.descriptor;if("field"===t.kind){var i=t.initializer;n={enumerable:n.enumerable,writable:n.writable,configurable:n.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,n)},decorateClass:function(e,t){var n=[],i=[],r={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,r)}),this),e.forEach((function(e){if(!Ys(e))return n.push(e);var t=this.decorateElement(e,r);n.push(t.element),n.push.apply(n,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:n,finishers:i};var s=this.decorateConstructor(n,t);return i.push.apply(i,s.finishers),s.finishers=i,s},addElementPlacement:function(e,t,n){var i=t[e.placement];if(!n&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var n=[],i=[],r=e.decorators,s=r.length-1;s>=0;s--){var o=t[e.placement];o.splice(o.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,r[s])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var u=0;u<c.length;u++)this.addElementPlacement(c[u],t);n.push.apply(n,c)}}return{element:e,finishers:i,extras:n}},decorateConstructor:function(e,t){for(var n=[],i=t.length-1;i>=0;i--){var r=this.fromClassDescriptor(e),s=this.toClassDescriptor((0,t[i])(r)||r);if(void 0!==s.finisher&&n.push(s.finisher),void 0!==s.elements){e=s.elements;for(var o=0;o<e.length-1;o++)for(var a=o+1;a<e.length;a++)if(e[o].key===e[a].key&&e[o].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[o].key+")")}}return{elements:e,finishers:n}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){if(void 0!==e)return C(e).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var n=no(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var r=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var s={kind:t,key:n,placement:i,descriptor:Object.assign({},r)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(r,"get","The property descriptor of a field descriptor"),this.disallowProperty(r,"set","The property descriptor of a field descriptor"),this.disallowProperty(r,"value","The property descriptor of a field descriptor"),s.initializer=e.initializer),s},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:to(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var n=to(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:n}},runClassFinishers:function(e,t){for(var n=0;n<t.length;n++){var i=(0,t[n])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,n){if(void 0!==e[t])throw new TypeError(n+" can't have a ."+t+" property.")}};return e}function Qs(e){var t,n=no(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:n,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function Zs(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function Ys(e){return e.decorators&&e.decorators.length}function eo(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function to(e,t){var n=e[t];if(void 0!==n&&"function"!=typeof n)throw new TypeError("Expected '"+t+"' to be a function");return n}function no(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==l(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}var io=function(e,t,n,i){var r=Xs();if(i)for(var s=0;s<i.length;s++)r=i[s](r);var o=t((function(e){r.initializeInstanceElements(e,a.elements)}),n),a=r.decorateClass(function(e){for(var t=[],n=function(e){return"method"===e.kind&&e.key===s.key&&e.placement===s.placement},i=0;i<e.length;i++){var r,s=e[i];if("method"===s.kind&&(r=t.find(n)))if(eo(s.descriptor)||eo(r.descriptor)){if(Ys(s)||Ys(r))throw new ReferenceError("Duplicated methods ("+s.key+") can't be decorated.");r.descriptor=s.descriptor}else{if(Ys(s)){if(Ys(r))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+s.key+").");r.decorators=s.decorators}Zs(s,r)}else t.push(s)}return t}(o.d.map(Qs)),e);return r.initializeClassElements(o.F,a.elements),r.runClassFinishers(o.F,a.finishers)}(null,(function(e,t){var n=function(t){a(i,t);var n=Ks(i);function i(){var t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;s(this,i),null===o?(t=n.call(this,r),e(c(t)),t.attrs={},t.props=r):(t=n.call(this,o),e(c(t)),t.attrs=r,t.props=o);var a=zi(t.props,Bs,t.constructor);return a.result?(t._inheritedSelector=null,t.attributesStaggers=[],t.propsStaggers=[],t.setupDynamicValues(),t.passiveAddition=!0,t._buildTree(),t.passiveAddition=!1,u(t)):u(t,a)}return i}(t);return{F:n,d:[{kind:"field",static:!0,key:"Incident",value:function(){return mr}},{kind:"field",static:!0,key:"plugin_npm_name",value:function(){return"motor-cortex-js"}},{kind:"field",static:!0,key:"version",value:function(){return ds}},{kind:"field",static:!0,key:"Channel",value:function(){return Gi}},{kind:"field",static:!0,key:"ClassName",value:function(){return"Group"}},{kind:"field",static:!0,key:"isGroup",value:function(){return!0}},{kind:"field",static:!0,key:"attrsValidationRules",value:function(){return null}},{kind:"field",static:!0,key:"propsValidationRules",value:function(){return Bs}},{kind:"method",decorators:[Ls],key:"editAttributes",value:function(){}},{kind:"method",decorators:[zs],key:"editProperties",value:function(){}},{kind:"method",decorators:[Ns],key:"resize",value:function(){}},{kind:"method",decorators:[Vs],key:"clone",value:function(){}},{kind:"method",decorators:[$s],key:"selector",value:function(){}},{kind:"method",decorators:[Fs],key:"getElements",value:function(){}},{kind:"method",decorators:[Us],key:"setupDynamicValues",value:function(){}},{kind:"method",key:"_buildTree",value:function(){this.buildTree()}},{kind:"method",key:"_calculateDuration",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=0;for(var n in this.children){var i=this.children[n];if(!0===e&&!0===i.leaf.constructor.isGroup&&i.leaf._calculateDuration(!0),"dynamic"===i.leaf.duration){t="dynamic";break}i.position+i.leaf.duration>t&&(t=i.position+i.leaf.duration)}return t!==this.calculatedDuration&&(this.calculatedDuration=t,!0)}},{kind:"method",key:"_rebuildTree",value:function(){for(var e in this.children){var t=this.children[e];!0===t.leaf.passive&&this.removeIncident(t.id)}this.passiveAddition=!0,this.buildTree(),this.passiveAddition=!1}},{kind:"method",key:"buildTree",value:function(){}},{kind:"get",key:"duration",value:function(){return"dynamic"===this.calculatedDuration?this.calculatedDuration:v(p(n.prototype),"duration",this)}},{kind:"set",key:"duration",value:function(e){gn(p(n.prototype),"duration",e,this,!0)}},{kind:"method",key:"manageEditAttrProps",value:function(e,t){var n=this.parentNode,i=n.getLeafPosition(this.id),r=JSON.parse(JSON.stringify(this[t]));this[t]=e,n.removeIncident(this.id),this._rebuildTree();var s=n.addIncident(this,i);return s.result||(this[t]=r,this._rebuildTree(),n.addIncident(this,i)),s}},{kind:"method",key:"detachFromParent",value:function(){v(p(n.prototype),"detachFromParent",this).call(this),this.inheritedSelector=null}},{kind:"get",key:"inheritedSelector",value:function(){return this._inheritedSelector}},{kind:"set",key:"inheritedSelector",value:function(e){for(var t in this._inheritedSelector=e,this.children){this.children[t].leaf.inheritedSelector=this.selector()}}},{kind:"get",key:"selectorToPassToChildren",value:function(){return this.selector()}},{kind:"method",key:"exportDefinition",value:function(){var e={ClassName:this.constructor.ClassName,version:this.constructor.version,plugin:this.constructor.plugin||this.constructor.plugin_npm_name,plugin_npm_name:this.constructor.plugin_npm_name,attrs:this.attrs,props:this.props,incidents:{},duration:this.duration};for(var t in this.children){var n=this.children[t];!0!==n.leaf.passive&&(e.incidents[t]={id:n.id,position:n.position,leaf:n.leaf.exportDefinition()})}return e}},{kind:"method",key:"exportLiveDefinition",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=JSON.parse(JSON.stringify(this.props));!1===e&&delete t.id;var n={Class:this.constructor,attrs:JSON.parse(JSON.stringify(this.attrs)),props:t,incidents:{}};for(var i in this.children){var r=this.children[i];!0!==r.leaf.passive&&(n.incidents[i]={position:r.position,leaf:r.leaf.exportLiveDefinition(e)})}return n}},{kind:"method",key:"addIncident",value:function(e,t){var i,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{check:!0};if(e.inheritedSelector=this.selectorToPassToChildren,!0===r.check){var s=v(p(n.prototype),"checkAddition",this).call(this,e,t);if(!s.result)return e.inheritedSelector=null,s;if(!0===(i=this.putMessageOnPipe("checkForClip",{},Rs,{selfExecute:!0,direction:qi})).response){var o=e.putMessageOnPipe("checkForInvalidSelectors",{},null,{selfExecute:!0,direction:Ji});if(o.length>0){for(var a=[],l=0;l<o.length;l++)a.push(o[l].response);return{result:!1,errors:a}}}var c=this.putMessageOnPipe("checkAddition",{incident:e,millisecond:t,parentGroupId:this.id},Rs,{selfExecute:!0,direction:qi});if(!c.response.result)return e.inheritedSelector=null,c.response}!0===this.passiveAddition&&(e.passive=!0);var u=this.addChild(e,t);return u.result||(e.inheritedSelector=null),"dynamic"===e.duration&&i&&this._calculateDuration(!0),u}},{kind:"method",key:"moveIncident",value:function(e,t){var i=e;wi(e)&&(i=e.id);var r=v(p(n.prototype),"checkEditPosition",this).call(this,i,t);if(!r.result)return r;var s=t-this.getLeafPosition(i);if(0===s)return{result:!0};var o=this.putMessageOnPipe("checkMove",{id:i,millisecond:t,positionDelta:s,parentGroupId:this.id},Rs,{selfExecute:!0,direction:qi});return o.response.result?this.editPosition(i,t):o.response}},{kind:"method",key:"removeIncident",value:function(e){var t=e;wi(e)&&(t=e.id);var i=v(p(n.prototype),"checkRemoveChild",this).call(this,t);if(!i.result)return i;var r=this.putMessageOnPipe("checkDeletion",{id:t,parentGroupId:this.id},Rs,{selfExecute:!0,direction:qi});return r.response.result?this.removeChild(t):r.response}},{kind:"method",key:"handleCheckForClip",value:function(e,t){return!!this.hasParent&&this.bypass()}},{kind:"method",key:"handleCheckAddition",value:function(e,t){return this.hasParent?this.bypass():{result:!0}}},{kind:"method",key:"handleCheckMove",value:function(e,t){return this.hasParent?this.bypass():{result:!0}}},{kind:"method",key:"handleCheckDeletion",value:function(e,t){return this.hasParent?this.bypass():{result:!0}}},{kind:"method",key:"handleCheckResize",value:function(e,t){return this.hasParent?this.bypass():{result:!0}}},{kind:"method",key:"handleSetDurationDynamic",value:function(e,t){this.calculatedDuration="dynamic",this.putMessageOnPipe("setDurationDynamic",{},"Groups",{selfExecute:!1,direction:qi})}}]}}),rr);function ro(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=p(e);if(t){var r=p(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return u(this,n)}}var so="-",oo={isCombo:function(e){return e.incidentClass.isCombo},getItem:function(e,t){return Tn(t.join("."),"attrs",e)},getRepeatPosition:function(e,t,n,i){return i*(t||0)+(i+1)*(e||0)+i*n},refersToOwnSelector:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=t;!1===Array.isArray(t)&&(i=t.split("."));var r=this.getItem(e,i.slice(0,2+n));return(""===r.props.selector||void 0===r.props.selector||null===r.props.selector)&&("props"===i[2]||(!this.isCombo(r)||this.refersToOwnSelector(e,i,n+3)))},cascadeSelectors:function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=[],r=0;r<t.length;r++){var s=t[r],o=void 0;if(o=Ci(s.props,"selector")?"".concat(e," ").concat(s.props.selector):e,i.push({path:"".concat(n).concat(""===n?"":".").concat(r,".props.selector"),value:o}),this.isCombo(s)){var a=this.cascadeSelectors(o,s.attrs.incidents,"".concat(n).concat(""===n?"":".").concat(r,".attrs.incidents"));i=i.concat(a)}}return i},createDescriptiveIncidentLikeObject:function(e,t,n,i,r){return{constructor:{Incident:e.incidentClass.targetClass.Incident,plugin_npm_name:e.incidentClass.targetClass.plugin_npm_name,Channel:e.incidentClass.targetClass.Channel,isClip:!1},attrs:i||e.attrs,props:r||e.props,selector:function(){return e.props.selector},id:e.props.id,audioClip:null,audio:"no",dynamicDurationValue:null,putMessageOnPipe:function(){},attributesStaggers:t,propsStaggers:n}},parseElementsDynamics:function(e,t,n,i,r){for(var s="incidents.".concat(r,".attrs"),o="incidents.".concat(r,".props"),a=Bn(t),l=Bn(n),c=0;c<e.length;c++)if(0===e[c].path.indexOf(s)){var u=e[c].path.substring(s.length+1);a.setValue(u,e[c].values[i])}else if(0===e[c].path.indexOf(o)){var p=e[c].path.substring(o.length+1);l.setValue(p,e[c].values[i])}return{incidentAttrs:a.exportFlattened(),incidentProps:l.exportFlattened()}},getStaggersForChild:function(e,t,n){for(var i=[],r=[],s=0;s<e.length;s++)"position"===n&&0===e[s].path.indexOf("incidents.".concat(t,".").concat(n))?r.push({path:"position",stagger:e[s].stagger}):0===e[s].path.indexOf("incidents.".concat(t,".").concat(n))?r.push({path:e[s].path.substring("incidents.".concat(t,".").concat(n).length+1),stagger:e[s].stagger}):i.push(e[s]);return{identifiedDynamics:r,remainingDynamics:i}},createElementProxy:function(e,t,n,i,r){for(var s=Bn(e),o=this.cascadeSelectors(t,e.attrs.incidents,"attrs.incidents"),a=0;a<i.length;a++)s.setValue("attrs.".concat(i[a].path),i[a].values[n]);for(var l=0;l<r.length;l++)s.setValue("props.".concat(r[l].path),r[l].values[n]);for(var c=0;c<o.length;c++)s.setValue(o[c].path,o[c].value);return s}},ao=function(e){a(n,e);var t=ro(n);function n(){return s(this,n),t.apply(this,arguments)}return f(n,[{key:"parseAttrsDynamicValues",value:function(e,t){this.childrenStaggers=[];for(var n=0;n<e.attributesStaggers.length;n++)oo.refersToOwnSelector(e,e.attributesStaggers[n].path)?this.staggerAttrs.push({path:e.attributesStaggers[n].path,values:e.attributesStaggers[n].stagger.calculateValues(t,this.initParams)}):this.childrenStaggers.push(e.attributesStaggers[n])}},{key:"handleRecalcDuration",value:function(e,t){var i=v(p(n.prototype),"handleRecalcDuration",this).call(this,e,t);return this.descriptiveIncident.dynamicDurationValue=1*this.duration,i}},{key:"lastWish",value:function(){this.descriptiveIncident.dynamicDurationValue=null,this.descriptiveIncident.putMessageOnPipe("setDurationDynamic",{},"Groups",{selfExecute:!1,direction:qi}),v(p(n.prototype),"lastWish",this).call(this)}},{key:"_createElementIncident",value:function(e,t,n,i,r,s){for(var o=this,a=oo.createElementProxy(t,n.context.getElementSelectorByMCID(s),i,this.staggerAttrs,this.staggerProps),l=0;l<this.staggerAttrs.length;l++)a.setValue("attrs.".concat(this.staggerAttrs[l].path),this.staggerAttrs[l].values[i]);for(var c=jr({id:"".concat(this.id,"_element").concat(so).concat(i),attrs:{},props:{},Incident:io.Incident,plugin_npm_name:io.plugin_npm_name,Channel:io.Channel,DescriptiveIncident:new io}),u=function(e){var t=jr({id:"".concat(o.id,"_element").concat(so).concat(i,"_repeat").concat(so).concat(e),attrs:{},props:{},Incident:io.Incident,plugin_npm_name:io.plugin_npm_name,Channel:io.Channel,DescriptiveIncident:new io}),s=o.childrenStaggers;a.attrs.incidents.forEach((function(l,c){var u=oo.parseElementsDynamics(o.staggerAttrs,l.attrs,l.props,i,c),p=u.incidentAttrs,h=u.incidentProps,d=oo.getStaggersForChild(s,c,"attrs"),f=oo.getStaggersForChild(d.remainingDynamics,c,"props"),m=oo.getStaggersForChild(d.remainingDynamics,c,"position");s=f.remainingDynamics,a.setValue("attrs.incidents.".concat(c,".props.id"),"".concat(o.id,"_element").concat(so).concat(i,"_repeat").concat(so).concat(e,"_incident").concat(so).concat(c));var v=lo(oo.createDescriptiveIncidentLikeObject(l,d.identifiedDynamics,f.identifiedDynamics,p,h),n),y=l.position;1===m.identifiedDynamics.length&&(y=m.identifiedDynamics[0].stagger.calculateValues(new Array(r),o.initParams)[i]),t.addChild(v,y)})),c.addChild(t,oo.getRepeatPosition(a.props.delay,a.props.hiatus,t.duration,e))},p=0;p<(a.props.repeats||1);p++)u(p);this.addChild(c,0)}}]),n}(as);function lo(e,t){var n,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(i&&"off"===e.audio||!i&&"only"===e.audio)return null;if(Ci(e.props,"selector")&&(!i&&"~"===e.props.selector.charAt(0)||i&&"~"!==e.props.selector.charAt(0)&&!e.constructor.isClip))return null;if(e.constructor.isClip){if(!Ci(e.props,"selector")||i)return i?e.audioClip:e.realClip;(n=new hs(e,t)).plugin_channel_class=Gi}else if(e.constructor.isCombo)n=new ao(e,t);else if(e.constructor.isGroup)for(var r in n=jr({id:e.id,attrs:e.attrs,props:e.props,Incident:e.constructor.Incident,plugin_npm_name:e.constructor.plugin_npm_name,Channel:e.constructor.Channel,DescriptiveIncident:e}),e.children){var s=lo(e.children[r].leaf,t);null!==s&&n.addChild(s,e.children[r].position)}else n=new as(e,t);return n}function co(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=p(e);if(t){var r=p(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return u(this,n)}}var uo="@kissmybutton/self-contained-incidents";function po(e){return function(){for(var t=0;t<e.length;t++)e[t]()}}var ho=function(e){a(n,e);var t=co(n);function n(e,i,r){var o;return s(this,n),(o=t.call(this,e,i)).attrs=e,o.props=i,o.DescriptiveIncident=r,o.isTheClip=!0,o.blockingWaitings={},o.instantiatedChannels={},o.isHostedClip=!0,o.instantiatedCopiesContexts={},o.onClipInitialise(),o.runTimeInfo=o.props.runTimeInfo,o.durationSubs=[],o.audioClip=!1,o}return f(n,[{key:"contextReady",get:function(){return this.context.contextLoaded}},{key:"onClipInitialise",value:function(){}},{key:"contextLoading",value:function(){this.context.contextLoaded=!1}},{key:"contextLoaded",value:function(){for(var e in this.context.contextLoaded=!0,this.putMessageOnPipe("contextLoaded",{},{},{selfExecute:!1,direction:Ji}),this.instantiatedChannels)this.instantiatedChannels[e].recalcScratchValues();this.unblock(this.clipCopyId||null)}},{key:"getElements",value:function(e){if(null!==this.props.host&&void 0!==this.props.host)return this.context.getElements(e);var t=[];for(var n in this.instantiatedCopiesContexts)for(var i=this.instantiatedCopiesContexts[n].getElements(e),r=0;r<i.length;r++)t.push(i[r]);return t}},{key:"addContext",value:function(e){this.instantiatedCopiesContexts[e.clipId]=e.context,e.instantiatedCopiesContexts=this.instantiatedCopiesContexts;var t=this.putMessageOnPipe("addContext",e,{},{selfExecute:!1,direction:Ji});if(1===Object.keys(this.instantiatedCopiesContexts).length){for(var n in this.instantiatedChannels)this.instantiatedChannels[n].recalcScratchValues(e.clipId);this.context.nonFragmentedContext=e.context}return t}},{key:"exportConstructionArguments",value:function(){return{attrs:this.attrs,props:this.props}}},{key:"_resize",value:function(e){for(var t in this.instantiatedChannels)this.instantiatedChannels[t]._resize(e);this.setNewDuration(this.duration*e);for(var n=0;n<this.durationSubs.length;n++)this.durationSubs[n](this.duration)}},{key:"addIncident",value:function(e){for(var t=this,n=this.putMessageOnPipe("addIncident",{incident:e.incident,millisecond:e.millisecond,parentGroupId:e.parentGroupId,incidentFromDescription:lo,contextData:{clipId:this.id,context:this.context,instantiatedCopiesContexts:this.instantiatedCopiesContexts},audio:this.audioClip},e.parentGroupId,{selfExecute:!0,direction:Ji}),i={},r=0;r<n.length;r++){var s=n[r].response.getIncidentsByChannel(n[r].positionDelta+e.millisecond);for(var o in s){var a;Ci(i,o)||(i[o]=[]),(a=i[o]).push.apply(a,k(s[o]))}}var l=this.checkAddition(i);if(l.result){return{result:!0,execute:function(){l.execute();for(var i=0;i<n.length;i++)for(var r in n[i].responder.addChild(n[i].response,e.millisecond),n[i].responder.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!0,direction:qi}),t.instantiatedCopiesContexts)n[i].response.putMessageOnPipe("addContext",{clipId:r,context:t.instantiatedCopiesContexts[r]},"ContextAwareIncidents",{selfExecute:!1,direction:Ji});t._calculateDuration()}}}return l}},{key:"checkAddition",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all-or-nothing",n=!0,i=[],r=[];for(var s in e){Ci(this.instantiatedChannels,s)||(this.instantiatedChannels[s]=new e[s][0].incident.plugin_channel_class({runTimeInfo:this.runTimeInfo,context:this.context,subscribe:this.props.subscribe}));var o=this.instantiatedChannels[s].addIncidents(e[s],t);n=n&&o.result,o.result?r.push(o.execute):i=i.concat(o.errors)}return{result:n,errors:i,execute:po(r)}}},{key:"moveIncident",value:function(e){for(var t=this.putMessageOnPipe("moveIncident",{incidentId:e.id,millisecond:e.millisecond,parentGroupId:e.parentGroupId,contextData:{clipId:this.id,context:this.context},audio:this.audioClip},e.parentGroupId,{selfExecute:!0,direction:Ji}),n={},i=0;i<t.length;i++){var r=t[i].response.getIncidentsByChannel(t[i].positionDelta+e.millisecond);for(var s in r){var o;Ci(n,s)||(n[s]=[]),(o=n[s]).push.apply(o,k(r[s]))}}var a=this.checkMove(n,e.positionDelta);if(a.result){return{result:!0,execute:function(){a.execute();for(var n=0;n<t.length;n++)t[n].responder.editPosition(t[n].response.id,e.millisecond),t[n].responder.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!0,direction:qi})}}}return a}},{key:"checkMove",value:function(e,t){var n=!0,i=[],r=[];for(var s in e){var o=this.instantiatedChannels[s].editIncidents(e[s],t);n=n&&o.result,o.result?r.push(o.execute):i=i.concat(o.errors)}return{result:n,errors:i,execute:po(r)}}},{key:"removeIncident",value:function(e){for(var t=this.putMessageOnPipe("removeIncident",{incidentId:e.id,parentGroupId:e.parentGroupId,contextData:{clipId:this.id,context:this.context},audio:this.audioClip},e.parentGroupId,{selfExecute:!0,direction:Ji}),n={},i=0;i<t.length;i++){var r=t[i].response.getIncidentsByChannel();for(var s in r){var o;Ci(n,s)||(n[s]=[]),(o=n[s]).push.apply(o,k(r[s]))}}var a=this.checkDelete(n);if(a.result){return{result:!0,execute:function(){a.execute();for(var e=0;e<t.length;e++)t[e].responder.removeChild(t[e].response.id),t[e].responder.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!0,direction:qi})}}}return a}},{key:"checkDelete",value:function(e){var t=!0,n=[],i=[];for(var r in e){var s=this.instantiatedChannels[r].removeIncidents(e[r]);t=t&&s.result,s.result?i.push(s.execute):n=n.concat(s.errors)}return{result:t,errors:n,execute:po(i)}}},{key:"resizeIncident",value:function(e){for(var t=this.putMessageOnPipe("resize",{incidentId:e.id,newSize:e.newSize,fraction:e.fraction,contextData:{clipId:this.id,context:this.context},audio:this.audioClip},e.id,{selfExecute:!1,direction:Ji}),n={},i=0;i<t.length;i++){var r=t[i].response.getIncidentsByChannel(t[i].positionDelta);for(var s in r){var o;Ci(n,s)||(n[s]=[]),(o=n[s]).push.apply(o,k(r[s]))}}var a=0;t.length>0&&(a=t[0].positionDelta);var l=this.checkResize(e.fraction,n,a);if(l.result){return{result:!0,execute:function(){l.execute();for(var n=0;n<t.length;n++)t[n].responder.setNewDuration(e.newSize)}}}return l}},{key:"checkResize",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=!0,r=[],s=[];for(var o in t){var a=$i(t[o],e,n),l=this.instantiatedChannels[o].checkResizedIncidents(a);i&&(i=l.result),l.result?s.push(l.execute):r=r.concat(l.errors)}return{result:i,errors:r,execute:po(s)}}},{key:"context",get:function(){var e,t;return null!==(t=(e=this.ownContext).contextLoaded)&&void 0!==t||(e.contextLoaded=!0),this.ownContext}},{key:"getIncidentsByChannel",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t={};return t[uo]=[{millisecond:e,incident:this,id:this.id}],t}},{key:"setVolume",value:function(e){this.volume=parseFloat(e)}},{key:"_onGetContextOnce",value:function(e){}},{key:"handleRecalcDuration",value:function(e,t){if(this._calculateDuration())for(var n=0;n<this.durationSubs.length;n++)this.durationSubs[n](this.duration);return!0}},{key:"onProgress",value:function(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(!1!==this.contextReady){for(var r in n||(n=this.id),this.instantiatedChannels){var s=this.instantiatedChannels[r];s.moveTo(this.runTimeInfo.currentMillisecond,t,n,i)}this.onAfterProgress(e,t)}else this.setBlock()}},{key:"onAfterProgress",value:function(e,t){}},{key:"flash",value:function(){for(var e in this.instantiatedChannels){this.instantiatedChannels[e].moveTo(0,this.runTimeInfo.currentMillisecond,this.id,!0)}}},{key:"subscribeToDurationChange",value:function(e){this.durationSubs.push(e)}},{key:"handleSetBlockingWaiting",value:function(e,t){}},{key:"handleRemoveBlockingWaiting",value:function(e,t){}}]),n}(mr),fo=function(){function e(){s(this,e),this.output=gi.createGain(),this.gainNode=gi.createGain(),gi.createStereoPanner&&(this.pannerNode=gi.createStereoPanner()),gi.createStereoPanner?(this.pannerNode.connect(this.gainNode),this.gainNode.connect(this.output),this.input=this.pannerNode):(this.gainNode.connect(this.output),this.input=this.gainNode)}return f(e,[{key:"connect",value:function(e){this.output.connect(e)}},{key:"disconnect",value:function(){this.output.disconnect()}}]),e}();function mo(e){for(var t=window.atob(e),n=t.length,i=new Uint8Array(n),r=0;r<n;r++)i[r]=t.charCodeAt(r);return i.buffer}var vo=/\[data(-mcid="+\w+")+\]/g,yo=function(){function e(){s(this,e),this.subscribers=[]}return f(e,[{key:"sub",value:function(e,t){this.subscribers.push(t)}},{key:"pub",value:function(e){for(var t=0;t<this.subscribers.length;t++)this.subscribers[t](e)}}]),e}(),go=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;s(this,e),this.totalSources=n.length,this.audioSources={},this.elementsByMCID={};for(var r=function(e){var r=n[e],s={mcid:r.mcid||Bi(),id:r.id,src:r.src,classes:r.classes||[],base64:r.base64||!1,pubSub:new yo,soundLoaded:!1,startValues:r.startValues||{}};if(t.audioSources[s.id]=s,t.elementsByMCID[s.mcid]=s,r.base64)gi.decodeAudioData(mo(r.src),(function(e){t._setBuffer(s,e,i)}));else{var o=new XMLHttpRequest;o.open("GET",s.src,!0),o.responseType="arraybuffer",t.soundLoaded=!1,o.onload=function(){gi.decodeAudioData(o.response,(function(e){t._setBuffer(s,e,i)}),t.onError)},o.send()}},o=0;o<n.length;o++)r(o);this.context={document:document,window:window,rootElement:document.body,unmount:function(){},masterNode:i,audioContext:gi,getElements:this.getElements.bind(this),getMCID:this.getMCID.bind(this),setMCID:this.setMCID.bind(this),getElementSelectorByMCID:this.getElementSelectorByMCID.bind(this),getElementByMCID:this.getElementByMCID.bind(this)}}return f(e,[{key:"_setBuffer",value:function(e,t,n){e.soundLoaded=!0,e.buffer=t,e.audioNodeSet=new fo,e.audioNodeSet.connect(n.input),e.pubSub.pub()}},{key:"getElementByMCID",value:function(e){return Ci(this.elementsByMCID,e)?this.elementsByMCID[e]:null}},{key:"getElements",value:function(e){if("~"!==e.charAt(0)){if(vo.exec(e)){var t=e.split('"')[1];return this.elementsByMCID[t]}return[]}if("#"===(e=e.substr(1)).charAt(0))return Ci(this.audioSources,e.substr(1))?[this.audioSources[e.substr(1)]]:[];if("."===e.charAt(0)){var n=e.substr(1),i=[];for(var r in this.audioSources)r.classes.indexOf(n)>=0&&i.push(r);return i}}},{key:"getMCID",value:function(e){return e.mcid}},{key:"setMCID",value:function(e,t){e.mcid=t}},{key:"getElementSelectorByMCID",value:function(e){return'[data-mcid="'.concat(e,'"]')}}]),e}();function bo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function ko(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?bo(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bo(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function wo(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=p(e);if(t){var r=p(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return u(this,n)}}var xo=function(e){a(n,e);var t=wo(n);function n(e,i){var r;s(this,n),(r=t.call(this,e,i)).audioNodeSet=new fo,r.audioNodeSet.connect(gi.destination);var o=new go(r.props.audioSources,r.audioNodeSet);return r.ownContext=ko(ko({},o.context),{},{isHostedClip:!0,initParams:i.initParams}),r.audioClip=!0,r}return f(n,[{key:"handleRecalcDuration",value:function(e,t){v(p(n.prototype),"handleRecalcDuration",this).call(this,e,t)&&this.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!1,direction:qi})}},{key:"onProgress",value:function(e,t,i){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=this.delay+this.calculatedDuration+this.hiatus,o=0===s?0:t%s;0!==t&&0===o&&(o=this.delay+this.calculatedDuration);var a=o-this.delay;if(!(a<0)){a>this.calculatedDuration&&(a=this.calculatedDuration);var l=0===this.calculatedDuration?0:a/this.calculatedDuration;v(p(n.prototype),"onProgress",this).call(this,l,a,this.id,r)}}},{key:"_onGetContextOnce",value:function(e){this.audioNodeSet.disconnect(),this.parentClipContext=e,this.audioNodeSet.connect(e.masterNode.input)}},{key:"lastWish",value:function(){this.audioNodeSet.output.disconnect(),this.audioNodeSet.output.connect(gi.destination)}},{key:"volume",get:function(){return this.audioNodeSet.output.gain.value}},{key:"setVolume",value:function(e){this.audioNodeSet.output.gain.value=e}}]),n}(ho);function Co(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=p(e);if(t){var r=p(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return u(this,n)}}var Eo=function(e){a(n,e);var t=Co(n);function n(){return s(this,n),t.apply(this,arguments)}return f(n,[{key:"onProgress",value:function(e){var t=this;if(!this.element.soundLoaded)return this.setBlock("loading sound"),this.element.pubSub.sub(this.id,(function(){t.unblock()})),!1;if("gain"===this.attributeKey){var n=(this.targetValue-this.initialValue)*e+this.initialValue;this.element.audioNodeSet.gainNode.gain.value=n}else if("pan"===this.attributeKey){var i=(this.targetValue-this.initialValue)*e+this.initialValue;this.element.audioNodeSet.pannerNode.pan.value=i}}},{key:"getScratchValue",value:function(){return"pan"===this.attributeKey?Ci(this.element.startValues,"pan")?this.element.startValues.pan:0:"gain"===this.attributeKey?Ci(this.element.startValues,"gain")?this.element.startValues.gain:1:void 0}}]),n}(Or);function Po(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=p(e);if(t){var r=p(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return u(this,n)}}var Oo="|||",Io=function(e){a(n,e);var t=Po(n);function n(e){var i;return s(this,n),(i=t.call(this,e)).playingIncidentsIds=[],i.transitioned=!1,e.subscribe(Bi(),i._stateChange.bind(c(i)),0,1,!0),i}return f(n,[{key:"_stateChange",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};"paused"!==t&&"idle"!==t&&"blocked"!==t||(this._stopPlayingIncidents(n),this.transitioned=!0)}},{key:"_stopPlayingIncidents",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=0;t<this.playingIncidentsIds.length;t++){var n=this.playingIncidentsIds[t].split(Oo);n[0].startsWith(e.exception)||this._incidentById(n[0]).stop(n[1])}this.playingIncidentsIds=[]}},{key:"moveTo",value:function(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if("transitional"===this.runTimeInfo.state||i){this.transitioned=!0,this._stopPlayingIncidents();for(var r=0;r<this.incidents.length;r++){var s=this.incidents[r],o=s.id,a=s.millisecond,l=this._incidentById(o),c=void 0,u=void 0;t<a?(c=0,u=0):t>a+l.duration?(c=1,u=l.duration):c=(u=t-a)/l.duration,l.onProgress(c,u,n,!0)}}else{this.transitioned&&(e=0,this.transitioned=!1);for(var p=e>t,h=this.incidents,d=0;d<h.length;d++){var f=h[d],m=f.millisecond,v=this._incidentById(f.id),y=v.duration,g=m+y,b="".concat(f.id).concat(Oo).concat(n);if(g>e&&g<=t||p){v.stop(n);var k=this.playingIncidentsIds.indexOf(b);k>-1&&this.playingIncidentsIds.splice(k,1)}var w=p?0:e;if(m>=w&&m<t&&g>t){var x=(t-m)/y>=1,C=x?1:(t-m)/y,E=x?y:t-m,P=v.play(C,E,n);P&&this.playingIncidentsIds.push(b)}}this.runTimeInfo.currentMillisecond=t}}}]),n}(yr);function So(){So=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(n){t.forEach((function(t){t.kind===n&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var n=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var r=t.placement;if(t.kind===i&&("static"===r||"prototype"===r)){var s="static"===r?e:n;this.defineClassElement(s,t)}}),this)}),this)},defineClassElement:function(e,t){var n=t.descriptor;if("field"===t.kind){var i=t.initializer;n={enumerable:n.enumerable,writable:n.writable,configurable:n.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,n)},decorateClass:function(e,t){var n=[],i=[],r={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,r)}),this),e.forEach((function(e){if(!Mo(e))return n.push(e);var t=this.decorateElement(e,r);n.push(t.element),n.push.apply(n,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:n,finishers:i};var s=this.decorateConstructor(n,t);return i.push.apply(i,s.finishers),s.finishers=i,s},addElementPlacement:function(e,t,n){var i=t[e.placement];if(!n&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var n=[],i=[],r=e.decorators,s=r.length-1;s>=0;s--){var o=t[e.placement];o.splice(o.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,r[s])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var u=0;u<c.length;u++)this.addElementPlacement(c[u],t);n.push.apply(n,c)}}return{element:e,finishers:i,extras:n}},decorateConstructor:function(e,t){for(var n=[],i=t.length-1;i>=0;i--){var r=this.fromClassDescriptor(e),s=this.toClassDescriptor((0,t[i])(r)||r);if(void 0!==s.finisher&&n.push(s.finisher),void 0!==s.elements){e=s.elements;for(var o=0;o<e.length-1;o++)for(var a=o+1;a<e.length;a++)if(e[o].key===e[a].key&&e[o].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[o].key+")")}}return{elements:e,finishers:n}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){if(void 0!==e)return C(e).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var n=Bo(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var r=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var s={kind:t,key:n,placement:i,descriptor:Object.assign({},r)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(r,"get","The property descriptor of a field descriptor"),this.disallowProperty(r,"set","The property descriptor of a field descriptor"),this.disallowProperty(r,"value","The property descriptor of a field descriptor"),s.initializer=e.initializer),s},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:jo(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var n=jo(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:n}},runClassFinishers:function(e,t){for(var n=0;n<t.length;n++){var i=(0,t[n])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,n){if(void 0!==e[t])throw new TypeError(n+" can't have a ."+t+" property.")}};return e}function Do(e){var t,n=Bo(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:n,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function Ao(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function Mo(e){return e.decorators&&e.decorators.length}function To(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function jo(e,t){var n=e[t];if(void 0!==n&&"function"!=typeof n)throw new TypeError("Expected '"+t+"' to be a function");return n}function Bo(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==l(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}var _o=function(e,t,n,i){var r=So();if(i)for(var s=0;s<i.length;s++)r=i[s](r);var o=t((function(e){r.initializeInstanceElements(e,a.elements)}),n),a=r.decorateClass(function(e){for(var t=[],n=function(e){return"method"===e.kind&&e.key===s.key&&e.placement===s.placement},i=0;i<e.length;i++){var r,s=e[i];if("method"===s.kind&&(r=t.find(n)))if(To(s.descriptor)||To(r.descriptor)){if(Mo(s)||Mo(r))throw new ReferenceError("Duplicated methods ("+s.key+") can't be decorated.");r.descriptor=s.descriptor}else{if(Mo(s)){if(Mo(r))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+s.key+").");r.decorators=s.decorators}Ao(s,r)}else t.push(s)}return t}(o.d.map(Do)),e);return r.initializeClassElements(o.F,a.elements),r.runClassFinishers(o.F,a.finishers)}(null,(function(e){return{F:function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;s(this,t),e(this),this.attrs=n,this.props=i,this.dna=r,this.context=r.context,this.mcid=r.mcid,this.id=i.id||Bi(),this.modelId=i.modelId,this.gotContext=!1,this.plugin_channel_class=Io,this.mc_plugin_npm_name="motor-cortex-js-media-playback",Ci(i,"plugin_channel_class")&&(this.plugin_channel_class=i.plugin_channel_class),Ci(i,"mc_plugin_npm_name")&&(this.mc_plugin_npm_name=i.mc_plugin_npm_name),this.hasIncidents=!1,this.autoGenerated=!1,this.onInitialise(n,i)},d:[{kind:"get",key:"selector",value:function(){return this.props.selector}},{kind:"get",key:"element",value:function(){return this.context.getElementByMCID(this.mcid)}},{kind:"method",decorators:[gr],key:"getIncidentsByChannel",value:function(){}},{kind:"method",key:"_onGetContextOnce",value:function(){try{if(!0===this.context.fragment)return;this.gotContext||(this.onGetContext(),this.gotContext=!0)}catch(e){Li.error(e),Li.error(this.mcid)}}},{kind:"method",key:"onGetContext",value:function(){Li.info('Overwritte the "onGetContext" method with the code you want to get executed',"info")}},{kind:"method",key:"lastWish",value:function(){}},{kind:"method",key:"onInitialise",value:function(){Li.info('Overwritte the "onInialise" method with the code you want to get executed',"info")}},{kind:"method",key:"onProgress",value:function(e,t){}},{kind:"method",key:"play",value:function(e){return!0}},{kind:"method",key:"stop",value:function(){}},{kind:"method",decorators:[sr],key:"setBlock",value:function(){}},{kind:"method",decorators:[or],key:"unblock",value:function(){}}]}}));function Vo(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=p(e);if(t){var r=p(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return u(this,n)}}var Ro=function(e){a(n,e);var t=Vo(n);function n(){return s(this,n),t.apply(this,arguments)}return f(n,[{key:"play",value:function(e){var t=this;if(!this.element.soundLoaded)return this.setBlock("loading sound"),this.element.pubSub.sub(this.id,(function(){t.unblock()})),!1;var n=0;return Ci(this.props,"startFrom")&&(n=this.props.startFrom),this.audioNode=gi.createBufferSource(),this.audioNode.buffer=this.element.buffer,this.audioNode.connect(this.element.audioNodeSet.input),this.audioNode.start(0,(e+n)/1e3),!0}},{key:"stop",value:function(){this.audioNode&&this.audioNode.stop()}}]),n}(_o),Lo={npm_name:"@kissmybutton/motorcortex-soundsystem",name:"Internal MotorCortex Soundsystem",incidents:[{exportable:Ro,name:"AudioPlayback"},{exportable:Eo,name:"AudioEffect"}],Clip:{exportable:xo},audio:"only"},zo=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;s(this,e),this.realArray=[],null!=t&&(this.realArray=t)}return f(e,[{key:"_hasOwnProperty",value:function(e){return Ci(this.realArray,e)}},{key:"_get",value:function(e){return this.realArray[e]}},{key:"_set",value:function(e,t){this.realArray[e]=t}},{key:"_keys",value:function(){return Object.keys(this.realArray)}},{key:"_delete",value:function(e){return delete this.realArray[e]}},{key:"_export",value:function(){return this.realArray}}]),e}();function Fo(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return No(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return No(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,a=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){a=!0,s=e},f:function(){try{o||null==n.return||n.return()}finally{if(a)throw s}}}}function No(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}var $o=function(){function e(t){s(this,e),this.originalArray=t,this.extraArray={},this.addedKeys=[],this.removedKeys=new Set}return f(e,[{key:"_hasOwnProperty",value:function(e){return Ci(this.originalArray,e)||Ci(this.extraArray,e)}},{key:"_get",value:function(e){return Ci(this.extraArray,e)?this.extraArray[e]:Ci(this.originalArray,e)?this.originalArray[e]:void 0}},{key:"_set",value:function(e,t){this.extraArray[e]=t,Ci(this.originalArray,e)||this.addedKeys.push(e),this.removedKeys.delete(e)}},{key:"_keys",value:function(){var e=this,t=Object.keys(this.originalArray);return t.push.apply(t,k(this.addedKeys)),t.filter((function(t){return!e.removedKeys.has(t)}))}},{key:"_delete",value:function(e){var t=this.addedKeys.indexOf(e);return t>-1?(this.addedKeys.splice(t),delete this.extraArray[e]):(this.removedKeys.add(e),!0)}},{key:"_export",value:function(){for(var e in this.extraArray)this.originalArray[e]=this.extraArray[e];var t,n=Fo(this.removedKeys);try{for(n.s();!(t=n.n()).done;){var i=t.value;delete this.originalArray[i]}}catch(e){n.e(e)}finally{n.f()}return this.originalArray}}]),e}();function Ho(e,t,n,i){var r=!1;for(var s in t)Ci(n,s)||(r=!0,i[s]=t[s]);return e.animatedAttributeValue=i,r}function Wo(e,t,n,i){var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],s=e[i],o=t._get(s.id);o.setInitialValue(n,r);var a=Ho(o,o.initialValue,o.originalAnimatedAttributeValue,JSON.parse(JSON.stringify(o.animatedAttributeValue)));a&&(o.lastWish(),o.onGetContext()),a&&i<e.length-1&&Wo(e,t,o.animatedAttributeValue,i+1,!1)}function Go(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function qo(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Go(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Go(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Jo=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};s(this,e),this.lanes={},t.lanes&&(this.lanes=t.lanes),this.comboAttributes={},null!=t.comboAttributes&&(this.comboAttributes=t.comboAttributes),this.belongingLaneKeysByAnimationId={},t.belongingLaneKeysByAnimationId&&(this.belongingLaneKeysByAnimationId=t.belongingLaneKeysByAnimationId),this.incidentsById=new zo({}),t.incidentsById&&(this.incidentsById=t.incidentsById)}return f(e,[{key:"_resize",value:function(e){for(var t=Object.keys(this.lanes),n=0;n<t.length;n++)for(var i=t[n],r=this.lanes[i],s=0;s<r.length;s++)r[s].millisecond=r[s].millisecond*e}},{key:"createTestLanesSanbox",value:function(){var t={lanes:Bn(this.lanes),belongingLaneKeysByAnimationId:Bn(this.belongingLaneKeysByAnimationId),incidentsById:new $o(this.incidentsById._export())};return this.comboAttributes&&(t.comboAttributes=this.comboAttributes),new e(t)}},{key:"getLane",value:function(e,t){return this.lanes[_i(e,t)]}},{key:"applySandboxChanges",value:function(e){this.lanes=e.lanes.exportFlattened(),this.belongingLaneKeysByAnimationId=e.belongingLaneKeysByAnimationId.exportFlattened(),this.incidentsById=new zo(e.incidentsById._export())}},{key:"laneExists",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=_i(e,t);return!!this.lanes.hasOwnProperty(i)||(n&&this.lanes.setValue(i,[]),!1)}},{key:"getOverlappingAnims",value:function(e,t,n){var i=this,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return Array.from(this.lanes[_i(t,n)]||[]).filter((function(t){var n=e.incident.duration;null!=s&&(n=s);var o=i.incidentsById._get(t.id).duration;return t.id!==e.incident.id&&!r.includes(t.id)&&(t.millisecond>=e.millisecond&&t.millisecond<n+e.millisecond||t.millisecond+o>e.millisecond&&t.millisecond+o<=n+e.millisecond||t.millisecond<e.millisecond&&t.millisecond+o>n+e.millisecond)}))}},{key:"addElementToLane",value:function(e,t,n,i){var r=this,s=[],o=_i(e,t);this.incidentsById._set(i.id,i);var a={millisecond:n,id:i.id};this.laneExists(e,t,!0),this.lanes.pushValue(o,a),this.lanes[o].sortBy("millisecond");var l=this.lanes[o],c=this.lanes[o].findIndex((function(e){return e.id===i.id}));return Ci(i.id)||this.belongingLaneKeysByAnimationId.setValue(i.id,[]),this.belongingLaneKeysByAnimationId.pushValue(i.id,o),0===c?this.lanes[o].length>1?s.push((function(){i.setInitialValue(r.incidentsById._get(l[1].id).pureInitialValues)})):s.push((function(){i.setInitialValue()})):s.push((function(){i.setInitialValue(r.incidentsById._get(l[c-1].id).animatedAttributeValue)})),Ci(this.comboAttributes,t)&&s.push((function(){return Wo(l,r.incidentsById,i.initialValue,c)})),c+1<l.length&&s.push((function(){r.incidentsById._get(l[c+1].id).setInitialValue(i.animatedAttributeValue),r.incidentsById._get(l[c+1].id).gotContext&&(r.incidentsById._get(l[c+1].id).lastWish(),r.incidentsById._get(l[c+1].id).onGetContext())})),s}},{key:"updateLane",value:function(e,t){for(var n=this,i={},r=0;r<e.length;r++)for(var s=this.belongingLaneKeysByAnimationId[e[r]],o=0;o<s.length;o++){var a=s[o];Ci(i,a)||(i[a]={animations:[],lane:this.lanes[a],laneData:Ti(s[o])}),i[a].animations.push(e[r])}for(var l in i){var c=i[l],u=c.laneData,p=c.lane,h=c.animations,d=k(p);d.sort((function(e,t){return e.millisecond-t.millisecond}));for(var f=Ci(this.comboAttributes,u.attribute),m=0;m<p.length;m++)h.includes(p[m].id)&&(p[m].millisecond+=t);p.sort((function(e,t){return e.millisecond-t.millisecond})),this.lanes[l]=p;for(var v=function(e){var t=h[e],i=d.findIndex((function(e){return e.id===t})),r=p.findIndex((function(e){return e.id===t}));if(i===r&&r<=1)return"continue";var s=n.incidentsById._get(p[r].id);if(i+1<p.length)if(0===i)if(f)Wo(p,n.incidentsById,s.pureInitialValues,0,!0);else{var o=n.incidentsById._get(d[1].id);o.setInitialValue(s.pureInitialValues),o.onGetContext()}else if(f){var a=r>i?i:r;Wo(p,n.incidentsById,n.incidentsById._get(d[i-1].id).animatedAttributeValue,a,!0)}else n.incidentsById._get(d[i+1].id).setInitialValue(n.incidentsById._get(d[i-1].id).animatedAttributeValue),n.incidentsById._get(d[i+1].id).onGetContext();if(0===r?f?Wo(p,n.incidentsById,n.incidentsById._get(d[0].id).pureInitialValues,r,!0):(s.setInitialValue(n.incidentsById._get(d[0].id).pureInitialValues),s.onGetContext()):f?Wo(p,n.incidentsById,n.incidentsById._get(p[r-1].id).animatedAttributeValue,r,!0):(s.setInitialValue(n.incidentsById._get(p[r-1].id).animatedAttributeValue),s.onGetContext()),r+1>=p.length)return"continue";if(f)return Wo(p,n.incidentsById,s.animatedAttributeValue,r+1,!0),"continue";var l=n.incidentsById._get(p[r+1].id);l.setInitialValue(s.animatedAttributeValue),l.onGetContext()},y=0;y<h.length;y++)v(y)}}},{key:"deleteAnimations",value:function(e){for(var t={},n=0;n<e.length;n++){for(var i=e[n],r=this.belongingLaneKeysByAnimationId[i],s=0;s<r.length;s++){for(var o=this.lanes[r[s]],a=-1,l=0;l<o.length;l++)if(o[l].id===i){a=l;break}for(var c=qo({},o[a]),u=this.incidentsById._get(c.id),p=Ti(r[s]),h=[],d=0;d<o.length;d++)o[d].id!==i&&h.push(o[d]);if(this.lanes[r[s]]=h,0!==(o=this.lanes[r[s]]).length){t[r[s]]=Ti(r[s]);var f=this.incidentsById._get(c.id).pureInitialValues;if(!(a>=o.length||!1===f))if(Ci(this.comboAttributes,p.attribute))Wo(o,this.incidentsById,f,a,!0);else{var m=this.incidentsById._get(o[a].id);m.setInitialValue(f),m.onGetContext()}}else u.onProgress(0,0),delete this.lanes[r[s]],Ci(t,r[s])&&delete t[r[s]]}delete this.belongingLaneKeysByAnimationId[e[n]]}return t}},{key:"recalcScratchValues",value:function(e){for(var t=Object.keys(this.lanes),n=0;n<t.length;n++){var i=t[n],r=this.lanes[i];if(r.length>0){var s=this.incidentsById._get(r[0].id),o=s.getScratchValue(e),a=Ti(i);Ci(this.comboAttributes,a.attribute)?Wo(r,this.incidentsById,o,0,!0):s.setInitialValue(o),s.lastWish(),s.onGetContext()}}}}]),e}();function Uo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function Ko(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Uo(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Uo(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Xo(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=p(e);if(t){var r=p(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return u(this,n)}}var Qo=function(e){a(n,e);var t=Xo(n);function n(e){var i;return s(this,n),(i=t.call(this,e)).comboAttributes={},i.fixedAttributeName="_",null!=e.comboAttributes&&(i.comboAttributes=e.comboAttributes),i.LanesHandler=new Jo({comboAttributes:i.comboAttributes}),i}return f(n,[{key:"setComboAttributes",value:function(e){this.comboAttributes=e,this.LanesHandler=new Jo({comboAttributes:this.comboAttributes})}},{key:"lanes",get:function(){return this.LanesHandler.lanes}},{key:"incidentsById",get:function(){return this.LanesHandler.incidentsById}},{key:"_resize",value:function(e){this.LanesHandler._resize(e)}},{key:"checkAddition",value:function(e){for(var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all-or-nothing",i=this.LanesHandler.createTestLanesSanbox(),r=[],s=[],o=[],a=function(n){var a=!1,l=e[n],c=l.incident,u=c.mcid,p=c.attribute||t.fixedAttributeName;i.laneExists(u,p),r.push({mcid:u,attribute:p});var h=i.getOverlappingAnims(l,u,p);if(h.length>0&&(a=!0,o.push({type:"unauthorised, overlapping incidents on the same element",meta:{element_mcid:u,attribute:p,incident:l,overlappingAnims:h}})),!a){var d=i.addElementToLane(u,p,l.millisecond,c);s.push((function(){for(var e=0;e<d.length;e++)d[e]();c._onGetContextOnce()}))}},l=0;l<e.length;l++)a(l);if(o.length>0&&"all-or-nothing"===n)return{result:!1,errors:o};var c=this.LanesHandler,u=function(){for(var e=0;e<r.length;e++){var t=_i(r[e].mcid,r[e].attribute),n=i.lanes[t].exportFlattened();n.sort((function(e,t){return e.millisecond-t.millisecond})),i.lanes.setValue(t,n)}for(var o=0;o<s.length;o++)s[o]();c.applySandboxChanges(i)};return{result:!0,errors:o,execute:u}}},{key:"checkEdit",value:function(e,t){for(var n=[],i=0;i<e.length;i++)n.push(e[i].id);for(var r=this.LanesHandler.createTestLanesSanbox(),s=[],o=0;o<e.length;o++)for(var a=e[o].incident.id,l=e[o].incident.mcid,c=e[o].incident.attribute||this.fixedAttributeName,u=r.getLane(l,c),p=0;p<u.length;p++)if(u[p].id===a){var h=Ko({},u[p]);h.millisecond+=t,h.incident=r.incidentsById._get(h.id);var d=r.getOverlappingAnims(h,l,c,n);d.length>0&&s.push({type:"anauthorised, overlapping animations on the same element",meta:{element_mcid:l,attribute:c,newAnimation:h,overlappingAnims:d}});break}if(s.length>0)return{result:!1,errors:s};var f=this;return{result:!0,execute:function(){f.LanesHandler.updateLane(n,t)}}}},{key:"checkResizedIncidents",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=[],i=0;i<e.length;i++)n.push(e[i].id);for(var r=this.LanesHandler.createTestLanesSanbox(),s=[],o=0;o<e.length;o++)for(var a=this.LanesHandler.incidentsById._get(e[o].id),l=a.mcid,c=a.attribute||this.fixedAttributeName,u=r.getLane(l,c),p={mcid:l,attribute:c},h=e[o].end-e[o].start,d=0;d<u.length;d++)if(u[d].id===e[o].id){if(!t){var f=u[d],m=Ko({},f);m.millisecond+=e[o].startDelta,m.incident=r.incidentsById._get(m.id);var v=r.getOverlappingAnims(m,p.mcid,p.attribute,n,h);v.length>0&&s.push({type:"unauthorized overlapping animations on the same element",meta:{element_mcid:p.mcid,attribute:p.attribute,newAnimation:m,overlappingAnims:v}})}break}if(s.length>0)return{result:!1,errors:s};var y=this,g=function(){for(var t=0;t<e.length;t++)y.LanesHandler.updateLane([e[t].id],e[t].startDelta)};return{execute:g,result:!0}}},{key:"checkDelete",value:function(e){for(var t=[],n=0;n<e.length;n++)t.push(e[n].id);var i=this;return{result:!0,execute:function(){i.LanesHandler.deleteAnimations(t)}}}},{key:"recalcScratchValues",value:function(e){this.LanesHandler.recalcScratchValues(e)}},{key:"slipIntoLaneForwards",value:function(e,t,n,i){var r=this,s=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=e.filter((function(e){var i=r.incidentsById._get(e.id).duration+e.millisecond;return i>=t&&i<=n||i>=n&&e.millisecond<=n}));if(0===o.length){if(s&&0===t){var a=this.incidentsById._get(e[0].id);a.onProgress(0,0,i)}return!0}var l=o.length-1,c=this.incidentsById._get(o[l].id),u=o[l].millisecond,p=1,h=c.duration;c.duration+u>n&&(p=(h=n-u)/c.duration),c.onProgress(p,h,i)}},{key:"slipToLaneBackwards",value:function(e,t,n,i){var r=this,s=e.filter((function(e){var i=r.incidentsById._get(e.id).duration+e.millisecond;return i<=n&&i>=t||e.millisecond>=t&&e.millisecond<=n||e.millisecond<t&&i>n}));if(0===s.length)return!0;var o=this.incidentsById._get(s[0].id),a=s[0].millisecond,l=0,c=0;a<n&&(l=(n-a)/o.duration,c=n-a),o.onProgress(l,c,i)}},{key:"moveTo",value:function(e,t,n){for(var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=Object.keys(this.lanes),s=0;s<r.length;s++){var o=this.lanes[r[s]];e<=t?this.slipIntoLaneForwards(o,e,t,n,i):this.slipToLaneBackwards(o,e,t,n,i)}}}]),n}(Gi);h(Qo,"type","attributes");var Zo=function(){function e(){s(this,e),this.customEntities={}}return f(e,[{key:"calcClipDims",value:function(e){var t={use:!1,width:null,height:null};return Ci(e,"originalDims")&&null!=e.originalDims.width&&null!=e.originalDims.height?{use:!0,width:e.originalDims.width.number+e.originalDims.width.unit,height:e.originalDims.height.number+e.originalDims.height.unit}:(Ci(e,"containerParams")&&(Ci(e.containerParams,"width")&&(t.use=!0,t.width=e.containerParams.width),Ci(e.containerParams,"height")&&(t.use=!0,t.height=e.containerParams.height)),t)}},{key:"scalingCalculator",value:function(e){if(!Ci(e,"containerParams")||!Ci(e,"originalDims")||null==e.originalDims.width&&null==e.originalDims.height)return{width:1,height:1};var t=Di(e.containerParams),n=null,i=null;return null!==t.width&&null!==e.originalDims.width&&(t.width.unit===e.originalDims.width.unit?n=t.width.number/e.originalDims.width.number:Li.warning("containerParams and originalDims width of Incident have different dimensions.\n          containerParams.width will be ignored")),null!==t.height&&null!==e.originalDims.height&&(t.height.unit===e.originalDims.height.unit?i=t.height.number/e.originalDims.height.number:Li.warning("containerParams and originalDims height of Incident have different dimensions.\n          containerParams.width will be ignored")),null===n&&null===i?{width:1,height:1}:(null!==n&&null===i?i=n:null!==i&&null===n&&(n=i),{width:n,height:i})}},{key:"getElementByMCID",value:function(e){if(Ci(this.customEntities,e))return this.customEntities[e];if(Ci(this.elementsByMCID,e))return this.elementsByMCID[e];var t=this.context.rootElement.querySelector(this.getElementSelectorByMCID(e));return this.elementsByMCID[e]=t,t}},{key:"getElements",value:function(e){if(null==e||""===e)return[];if("!"===e.charAt(0)){if("#"===(e=e.substr(1)).charAt(0))return[this.customEntities[e.substr(1)]];if("."===e.charAt(0)){var t=[];for(var n in this.customEntities){var i=this.customEntities[n];i.classes.includes(e.substr(1))&&t.push(i)}return t}}return Array.from(this.context.rootElement.querySelectorAll(e))}},{key:"getMCID",value:function(e){return e.customEntity?e.id:e.getAttribute(kn)}},{key:"setMCID",value:function(e,t){e.setAttribute(kn,t)}},{key:"getElementSelectorByMCID",value:function(e){return Ci(this.customEntities,e)?"!#".concat(e):"[".concat(kn,'="').concat(e,'"]')}},{key:"setCustomEntity",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return Ci(this.customEntities,e)?(Li.error("Clip ".concat(this.id," already has custom Entity with id: ").concat(e)),!1):(this.customEntities[e]={id:e,entity:t,classes:n,customEntity:!0},!0)}}]),e}();function Yo(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(xi(e))return e(t);var i=Gn(e,{items:{initParams:t},keys:{}},n);return ki(i)?i:i.outerHTML}function ea(e,t){if("google-font"===t.type)return function(e,t){var n=e.createElement("link");return n.setAttribute("rel","stylesheet"),Hi(t.src)?(n.setAttribute("href",t.src),n):(Li.error("Only valid google font url are accepted on src of a google-font. ".concat(t.src," provided. No font will loaded")),n)}(e,t);Li.error("The provided font type is not one of the supported. ".concat(t.type," provided. Aborting loading font."));var n=e.createElement("link");return n.setAttribute("rel","stylesheet"),n}function ta(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=p(e);if(t){var r=p(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return u(this,n)}}var na=function(e){a(n,e);var t=ta(n);function n(){var e,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(s(this,n),e=t.call(this),!wi(i))return Li.error("ContextHandler expects an object on its constructor. ".concat(l(i)," passed")),u(e,!1);if(!Ci(i,"html"))return Li.error("ContextHandler expects the html key on its constructor properties which is missing"),u(e,!1);if(!Ci(i,"css"))return Li.error("ContextHandler expects the css key on its constructor properties which is missing"),u(e,!1);if(Ci(i,"initParams")||Li.info("ContextHandler got null initParams"),!Ci(i,"host"))return Li.error("ContextHandler expects the host key on its constructor properties which is missing"),u(e,!1);e.isDOM=!0;var r=i.host.ownerDocument;if(!r.getElementById("@kissmybutton/motorcortex/iframeContextHandler/css")){var o="\n            iframe[seamless]{\n                background-color: transparent;\n                border: 0px none transparent;\n                padding: 0px;\n                overflow: hidden;\n            }\n            ",a=r.createElement("style");a.id="@kissmybutton/motorcortex/iframeContextHandler/css",a.type="text/css";var p=r.head||r.getElementsByTagName("head")[0];a.styleSheet?a.styleSheet.cssText=o:a.appendChild(r.createTextNode(o)),p.appendChild(a)}var h=r.createElement("iframe");i.host.appendChild(h);var d=e.scalingCalculator(i),f=e.calcClipDims(i);h.setAttribute("seamless","seamless"),!0===f.use&&(null!==f.width&&h.setAttribute("width",f.width),null!==f.height&&h.setAttribute("height",f.height)),h.style.transform="scale(".concat(d.width,", ").concat(d.height,")"),h.style.transformOrigin="top left",h.style.position="absolute",h.src="";var m=h.contentWindow||h.contentDocument;m.document&&(m=m.document),m.write(Yo(i.html,i.initParams,!0));var v="\n        body{\n            padding:0;\n            margin:0;\n        }\n        ",y=m.createElement("style");y.type="text/css",y.styleSheet?y.styleSheet.cssText=Yo(i.css,i.initParams)+v:y.appendChild(r.createTextNode(Yo(i.css,i.initParams)+v));var g=m.head||m.getElementsByTagName("head")[0];if(g.appendChild(y),Ci(i,"fonts"))for(var b=0;b<i.fonts.length;b++){var k=i.fonts[b],w=ea(m,k);g.appendChild(w)}return e.rootElement=h,m.close(),e.context={document:m,window:h.contentWindow||h,clipContainer:h,rootElement:m.body,unmount:function(){i.host.removeChild(h)},getElements:e.getElements.bind(c(e)),getMCID:e.getMCID.bind(c(e)),setMCID:e.setMCID.bind(c(e)),getElementSelectorByMCID:e.getElementSelectorByMCID.bind(c(e)),getElementByMCID:e.getElementByMCID.bind(c(e)),setCustomEntity:e.setCustomEntity.bind(c(e))},e.elementsByMCID={},e}return n}(Zo);function ia(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=p(e);if(t){var r=p(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return u(this,n)}}var ra=function(e){a(n,e);var t=ia(n);function n(){var e,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(s(this,n),e=t.call(this),!wi(i))return Li.error("ContextHandler expects an object on its constructor. ".concat(l(i)," passed")),u(e);if(!Ci(i,"html"))return Li.error("ContextHandler expects the html key on its constructor properties which is missing"),u(e);if(!Ci(i,"css"))return Li.error("ContextHandler expects the css key on its constructor properties which is missing"),u(e);if(!Ci(i,"host"))return Li.error("ContextHandler expects the host key on its constructor properties which is missing"),u(e);e.isDOM=!0;var r=i.host.shadowRoot;r||(r=i.host.attachShadow({mode:"open"}));var o=document.createElement("div"),a=e.scalingCalculator(i),p=e.calcClipDims(i);o.setAttribute("data-motorocortex-container","true"),!0===p.use&&(null!==p.width&&(o.style.width=p.width),null!==p.height&&(o.style.height=p.height)),o.style.transform="scale(".concat(a.width,", ").concat(a.height,")"),o.style.transformOrigin="top left",o.style.position="absolute",o.style.overflow="hidden",o.innerHTML=Yo(i.html,i.initParams,!0),r.appendChild(o);var h=document.createElement("slot");r.appendChild(h);var d=document.createElement("style");if(d.type="text/css",d.styleSheet?d.styleSheet.cssText=Yo(i.css,i.initParams):d.appendChild(document.createTextNode("[data-motorocortex-container] { all: initial; }"+Yo(i.css,i.initParams))),r.appendChild(d),e.fontTags=[],Ci(i,"fonts"))for(var f=0;f<i.fonts.length;f++){var m=i.fonts[f],v=ea(document,m);document.getElementsByTagName("head")[0].appendChild(v),e.fontTags.push(v)}return o.style.overflow="hidden",e.rootElement=o,e.context={document:document,window:window,clipContainer:e.rootElement,rootElement:o,unmount:function(){try{r.innerHTML="";for(var e=0;e<this.fontTags.length;e++)document.getElementsByTagName("head")[0].removeChild(this.fontTags[e])}catch(e){Li.warning("The element of the Clip to be removed seems not to exist any more")}},getElements:e.getElements.bind(c(e)),getMCID:e.getMCID.bind(c(e)),setMCID:e.setMCID.bind(c(e)),getElementSelectorByMCID:e.getElementSelectorByMCID.bind(c(e)),getElementByMCID:e.getElementByMCID.bind(c(e)),setCustomEntity:e.setCustomEntity.bind(c(e))},e.elementsByMCID={},e}return n}(Zo);function sa(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function oa(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?sa(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):sa(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function aa(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=p(e);if(t){var r=p(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return u(this,n)}}var la=function(e){a(n,e);var t=aa(n);function n(){var e,i,r,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,l=arguments.length>2?arguments[2]:void 0;s(this,n),null===a?(i={},r=o):(i=o,r=a),e=t.call(this,i,r,l),r=oa(oa({},r),{},{html:""!==e.html?e.html:r.html,css:""!==e.css?e.css:r.css,fonts:e.fonts.length>0?e.fonts:r.fonts});var c=wn;e.clipType=c;var u=new(document.head.createShadowRoot||document.head.attachShadow?ra:na)(r);return e.ownContext=oa(oa({},u.context),{},{isHostedClip:e.isHostedClip,initParams:r.initParams}),e.iframe=u.iframeElement,e.forceExportIncidents=!0,e.onAfterRender(),e}return f(n,[{key:"onAfterRender",value:function(){}},{key:"html",get:function(){return""}},{key:"css",get:function(){return""}},{key:"fonts",get:function(){return[]}},{key:"rootElement",get:function(){return this.context.clipContainer}},{key:"exportConstructionArguments",value:function(){return{attrs:this.attrs,props:oa(oa({},this.props),{},{host:void 0,html:!0===this.DescriptiveIncident.constructor.customClip?"":this.context.rootElement.innerHTML})}}},{key:"setCustomEntity",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return this.context.setCustomEntity(e,t,n)}}]),n}(ho);function ca(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function ua(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ca(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ca(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function pa(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=p(e);if(t){var r=p(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return u(this,n)}}var ha=function(e){a(n,e);var t=pa(n);function n(){var e,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};s(this,n),e=t.call(this);var r=ua({},i);if(!wi(r))return Li.error("HTMLFragmentContextHandler expects an object on its constructor. ".concat(l(r)," passed")),u(e,!1);Ci(r,"html")||(r.html=""),e.isDOM=!0;var o=document.createDocumentFragment(),a=document.createElement("div");return Ci(r,"containerParams")&&(Ci(r,"width")&&(a.style.width=r.containerParams.width),Ci(r,"height")&&(a.style.height=r.containerParams.height)),a.innerHTML=Yo(r.html,r.initParams,!0),o.appendChild(a),a.style.overflow="hidden",e.rootElement=a,e.context={document:document,window:window,clipContainer:e.rootElement,rootElement:a,unmount:function(){r.host.removeChild(o)},getElements:e.getElements.bind(c(e)),getMCID:e.getMCID.bind(c(e)),setMCID:e.setMCID.bind(c(e)),getElementSelectorByMCID:e.getElementSelectorByMCID.bind(c(e)),getElementByMCID:e.getElementByMCID.bind(c(e)),setCustomEntity:e.setCustomEntity.bind(c(e)),fragment:!0},e.elementsByMCID={},e}return n}(Zo);function da(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function fa(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?da(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):da(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ma(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=p(e);if(t){var r=p(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return u(this,n)}}var va=function(e){a(n,e);var t=ma(n);function n(){var e,i,r,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,l=arguments.length>2?arguments[2]:void 0;s(this,n),null===a?(i={},r=o):(i=o,r=a),e=t.call(this,i,r,l);var c=new ha(fa(fa({},r),{},{html:Ci(r,"html")?r.html:e.html,css:Ci(r,"css")?r.css:e.css,fonts:Ci(r,"fonts")?r.fonts:e.fonts}));return e.ownContext=fa(fa({},c.context),{},{isHostedClip:!1}),e.iframe=c.iframeElement,e.forceExportIncidents=!0,e.onDOMCLipInitialise(),e}return f(n,[{key:"exportConstructionArguments",value:function(){return{attrs:this.attrs,props:fa(fa({},this.props),{},{html:this.context.rootElement.innerHTML})}}},{key:"onDOMCLipInitialise",value:function(){}},{key:"rootElement",get:function(){return this.context.clipContainer}}]),n}(ho),ya=function(){function e(){s(this,e),this.isNullClip=!0}return f(e,[{key:"duration",get:function(){return 0}},{key:"addIncident",value:function(){return{result:!0,execute:function(){}}}},{key:"moveIncident",value:function(){return{result:!0,execute:function(){}}}},{key:"removeIncident",value:function(){return{result:!0,execute:function(){}}}},{key:"resizeIncident",value:function(){return{result:!0,execute:function(){}}}},{key:"getIncidentsByChannel",value:function(){return{}}},{key:"flash",value:function(){}},{key:"_resize",value:function(){}},{key:"onProgress",value:function(){}}]),e}();function ga(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function ba(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ga(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ga(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ka=function(){function e(t){s(this,e),this.runTimeInfo={currentMillisecond:0,state:"transitional"},this.id=Bi(),this.realClip=t.descriptiveIncident.realClip;var n=t.descriptiveIncident.realClip.exportConstructionArguments(),i=ba(ba({},n.props),{},{selector:void 0,host:t.host,id:this.id});this.ownClip=new t.descriptiveIncident.constructor.Incident(n.attrs,i),t.descriptiveIncident.realClip.addContext({clipId:this.id,context:this.ownClip.context,synchronize:t.synchronize,runTimeInfo:this.runTimeInfo},!0)}return f(e,[{key:"onProgress",value:function(e,t){for(var n in this.realClip.instantiatedChannels){this.realClip.instantiatedChannels[n].moveTo(this.runTimeInfo.currentMillisecond,t,this.id,!0)}this.runTimeInfo.currentMillisecond=t}}]),e}();function wa(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=p(e);if(t){var r=p(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return u(this,n)}}var xa=function(e){a(n,e);var t=wa(n);function n(e,i){var r;return s(this,n),(r=t.call(this,e,i)).runTimeInfo={currentMillisecond:0,state:"idle"},r.listeners={},r.previousTimeStamp=-1,r.speed=1,r}return f(n,[{key:"_setState",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e!==this.runTimeInfo.state)for(var n in this.runTimeInfo.state=e,this.putMessageOnPipe("setState",{newState:e,options:t},"Clips",{selfExecute:!1,direction:Ji}),this.listeners){var i=this.listeners[n];i.funct(this.runTimeInfo.currentMillisecond,e,t)}}},{key:"handleSetState",value:function(e,t){this._setState(t.newState,t.options||{})}},{key:"play",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if("idle"===this.runTimeInfo.state||"paused"===this.runTimeInfo.state||"armed"===this.runTimeInfo.state||"transitional"===this.runTimeInfo.state||"blocked"===this.runTimeInfo.state){if("paused"===this.runTimeInfo.state){var n=(new Date).getTime()-this.pauseMoment;this.previousTimeStamp+=n}this._setState("playing"),this.onPlay(),t||window.requestAnimationFrame((function(t){e.step(t)}))}}},{key:"pause",value:function(){"playing"===this.runTimeInfo.state&&(this._setState("paused"),this.pauseMoment=(new Date).getTime(),this.onWait())}},{key:"arm",value:function(){"transitional"!==this.runTimeInfo.state&&"blocked"!==this.runTimeInfo.state||this._setState("armed")}},{key:"complete",value:function(){this._setState("idle"),this.previousTimeStamp=-1}},{key:"stop",value:function(){this._setState("transitional"),this.previousTimeStamp=-1}},{key:"block",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Ci(e,"exception")&&"playing"!==this.runTimeInfo.state||(this._setState("blocked",e),this.previousTimeStamp=-1)}},{key:"onPlay",value:function(){}},{key:"onWait",value:function(){}},{key:"playableProgress",value:function(e,t){if(this.isTheRootClip){for(var n in this.listeners){var i=this.listeners[n];!0!==i.onlyOnStateChange&&(Math.abs(t+i.cavaDelta-this.runTimeInfo.currentMillisecond)>i.threshold?(i.funct(Mi(t,i.roundTo),this.runTimeInfo.state),i.cavaDelta=0):i.cavaDelta+=Math.abs(t-this.runTimeInfo.currentMillisecond))}return this.onProgress(e,t),this.runTimeInfo.currentMillisecond=t,!0}return!1}},{key:"executionSpeed",set:function(e){this.isTheRootClip&&(this.speed=parseFloat(e))}},{key:"step",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("playing"===this.runTimeInfo.state){var n=this;-1===this.previousTimeStamp&&(this.previousTimeStamp=e);var i={milliseconds:Math.round(this.runTimeInfo.currentMillisecond+(e-this.previousTimeStamp)*this.speed),fraction:(this.runTimeInfo.currentMillisecond+(e-this.previousTimeStamp)*this.speed)/this.duration};if(i.fraction>=1)return this.playableProgress(1,this.duration),void this.complete();if(i.fraction<0)return this.playableProgress(0,0),void this.complete();this.playableProgress(i.fraction,i.milliseconds),this.previousTimeStamp=e,t||window.requestAnimationFrame(n.step.bind(n))}}},{key:"subscribe",value:function(e,t,n,i){var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];n||(n=0),i||(i=1),this.listeners[e]={funct:t,threshold:n,roundTo:i,cavaDelta:0,onlyOnStateChange:r}}},{key:"unsubscribe",value:function(e){Ci(this.listeners,e)&&delete this.listeners[e]}},{key:"subscribeToDurationChange",value:function(e){return!!this.isTheRootClip&&(this.realClip.subscribeToDurationChange(e),!0)}}]),n}(io);function Ca(){return{result:!0}}function Ea(e,t){return new Proxy(e,{get:function(e,n){return xi(e[n])?Ca:"nonBlockingErrorClip"===n||("errors"===n?t:e[n])}})}function Pa(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function Oa(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Pa(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pa(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Ia(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=p(e);if(t){var r=p(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return u(this,n)}}function Sa(){Sa=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(n){t.forEach((function(t){t.kind===n&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var n=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var r=t.placement;if(t.kind===i&&("static"===r||"prototype"===r)){var s="static"===r?e:n;this.defineClassElement(s,t)}}),this)}),this)},defineClassElement:function(e,t){var n=t.descriptor;if("field"===t.kind){var i=t.initializer;n={enumerable:n.enumerable,writable:n.writable,configurable:n.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,n)},decorateClass:function(e,t){var n=[],i=[],r={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,r)}),this),e.forEach((function(e){if(!Ma(e))return n.push(e);var t=this.decorateElement(e,r);n.push(t.element),n.push.apply(n,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:n,finishers:i};var s=this.decorateConstructor(n,t);return i.push.apply(i,s.finishers),s.finishers=i,s},addElementPlacement:function(e,t,n){var i=t[e.placement];if(!n&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var n=[],i=[],r=e.decorators,s=r.length-1;s>=0;s--){var o=t[e.placement];o.splice(o.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,r[s])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var u=0;u<c.length;u++)this.addElementPlacement(c[u],t);n.push.apply(n,c)}}return{element:e,finishers:i,extras:n}},decorateConstructor:function(e,t){for(var n=[],i=t.length-1;i>=0;i--){var r=this.fromClassDescriptor(e),s=this.toClassDescriptor((0,t[i])(r)||r);if(void 0!==s.finisher&&n.push(s.finisher),void 0!==s.elements){e=s.elements;for(var o=0;o<e.length-1;o++)for(var a=o+1;a<e.length;a++)if(e[o].key===e[a].key&&e[o].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[o].key+")")}}return{elements:e,finishers:n}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){if(void 0!==e)return C(e).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var n=Ba(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var r=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var s={kind:t,key:n,placement:i,descriptor:Object.assign({},r)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(r,"get","The property descriptor of a field descriptor"),this.disallowProperty(r,"set","The property descriptor of a field descriptor"),this.disallowProperty(r,"value","The property descriptor of a field descriptor"),s.initializer=e.initializer),s},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:ja(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var n=ja(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:n}},runClassFinishers:function(e,t){for(var n=0;n<t.length;n++){var i=(0,t[n])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,n){if(void 0!==e[t])throw new TypeError(n+" can't have a ."+t+" property.")}};return e}function Da(e){var t,n=Ba(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:n,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function Aa(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function Ma(e){return e.decorators&&e.decorators.length}function Ta(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function ja(e,t){var n=e[t];if(void 0!==n&&"function"!=typeof n)throw new TypeError("Expected '"+t+"' to be a function");return n}function Ba(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==l(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}var _a=function(e,t,n,i){var r=Sa();if(i)for(var s=0;s<i.length;s++)r=i[s](r);var o=t((function(e){r.initializeInstanceElements(e,a.elements)}),n),a=r.decorateClass(function(e){for(var t=[],n=function(e){return"method"===e.kind&&e.key===s.key&&e.placement===s.placement},i=0;i<e.length;i++){var r,s=e[i];if("method"===s.kind&&(r=t.find(n)))if(Ta(s.descriptor)||Ta(r.descriptor)){if(Ma(s)||Ma(r))throw new ReferenceError("Duplicated methods ("+s.key+") can't be decorated.");r.descriptor=s.descriptor}else{if(Ma(s)){if(Ma(r))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+s.key+").");r.decorators=s.decorators}Aa(s,r)}else t.push(s)}return t}(o.d.map(Da)),e);return r.initializeClassElements(o.F,a.elements),r.runClassFinishers(o.F,a.finishers)}(null,(function(e,t){var n=function(t){a(i,t);var n=Ia(i);function i(t){var r,o,a,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(s(this,i),null===l?(o={},a=t):(o=t,a=l),r=n.call(this,o,a),e(c(r)),r.mustHaveNullClip=!1,r.initParams=a.initParams||{},Ci(a,"initParamsValidationRules")){var p=Fi(a.initParamsValidationRules,r.initParams,"Error on initParams validation");if(!p.result)return Li.error("Clip initParams validation failed. Switching to non-blocking blank Clip"),u(r,Ea(c(r),p.errors))}var h=zi({props:r.props},js,r.constructor,r.id);if(!h.result)return u(r,h);r.attributesStaggers=[],r.propsStaggers=[];var d=r.setupDynamicValues();r.isTheRootClip=!1,r.isExportableToJSONFormat=!0,r.volumeChangeSubsribers={},Object.prototype.hasOwnProperty.call(a,"html")&&xi(a.html)&&(r.isExportableToJSONFormat=!1);var f={id:r.id,attrs:o,props:Oa(Oa({},a),{},{html:Object.prototype.hasOwnProperty.call(a,"html")?a.html:r.html,css:Object.prototype.hasOwnProperty.call(a,"css")?a.css:r.css,fonts:Object.prototype.hasOwnProperty.call(a,"fonts")?a.fonts:r.fonts,runTimeInfo:r.runTimeInfo,subscribe:r.subscribe.bind(c(r)),repeats:1,delay:0,hiatus:0}),plugin_npm_name:r.constructor.plugin_npm_name,Channel:r.constructor.Channel,DescriptiveIncident:c(r)};if(r.audio="on",Object.prototype.hasOwnProperty.call(r.constructor,"audio")&&(r.audio=r.constructor.audio),Object.prototype.hasOwnProperty.call(a,"audio")&&(r.audio=a.audio),Object.prototype.hasOwnProperty.call(a,"selector")&&void 0!==a.selector&&!0!==r.constructor.customClip)f.Incident=va;else if(Object.prototype.hasOwnProperty.call(a,"selector")&&void 0!==a.selector&&!0===r.constructor.customClip){delete f.props.selector;var m=new va({html:'<div id="clip-container"></div>'});f.props.host=m.rootElement,f.Incident=r.constructor.Incident}else"only"===r.audio&&!0!==r.props.root?r.isTheRootClip=!1:(r.isTheRootClip=!0,r.blockingWaitings={},f.Incident=r.constructor.Incident);if("on"===r.audio||"only"===r.audio){var v={id:r.id,attrs:{},props:{audioSources:Object.prototype.hasOwnProperty.call(a,"audioSources")?a.audioSources:r.audioSources,runTimeInfo:r.runTimeInfo,subscribe:r.subscribe.bind(c(r)),hiatus:r.hiatus,delay:r.delay,repeats:r.repeats,initParams:r.initParams},plugin_npm_name:r.constructor.plugin_npm_name,Channel:r.constructor.Channel,Incident:xo,DescriptiveIncident:c(r)};r.audioClip=jr(v)}else r.audio="off",r.audioClip=new ya;return"on"===r.audio||"off"===r.audio?Ci(d.attrs,"expression")||Ci(d.props,"expression")?(r.mustHaveNullClip=!0,r.realClip=new ya):r.realClip=jr(f,!0):r.realClip=new ya,r.dynamicDurationValue=null,r.passiveAddition=!0,r._buildTree(),r.passiveAddition=!1,r.constructor.isAnimation&&Object.prototype.hasOwnProperty.call(r.props,"duration")&&r.resize(r.duration),r}return i}(t);return{F:n,d:[{kind:"field",static:!0,key:"isClip",value:function(){return!0}},{kind:"field",static:!0,key:"Incident",value:function(){return la}},{kind:"field",static:!0,key:"plugin_npm_name",value:function(){return"@kissmybutton/self-contained-incidents"}},{kind:"field",static:!0,key:"version",value:function(){return ds}},{kind:"field",static:!0,key:"Channel",value:function(){return yr}},{kind:"field",static:!0,key:"ClassName",value:function(){return"HTMLClip"}},{kind:"field",static:!0,key:"propsValidationRules",value:function(){return js}},{kind:"get",key:"selectorToPassToChildren",value:function(){return null}},{kind:"get",key:"inheritedSelector",value:function(){return this._inheritedSelector}},{kind:"set",key:"inheritedSelector",value:function(e){this._inheritedSelector=e}},{kind:"get",key:"html",value:function(){return""}},{kind:"get",key:"css",value:function(){return""}},{kind:"get",key:"fonts",value:function(){return[]}},{kind:"get",key:"audioSources",value:function(){return[]}},{kind:"method",decorators:[Us],key:"setupDynamicValues",value:function(){}},{kind:"method",key:"detachFromParent",value:function(){v(p(n.prototype),"detachFromParent",this).call(this),this.mustHaveNullClip&&(this.realClip=new ya)}},{kind:"get",key:"duration",value:function(){return null!==this.dynamicDurationValue?this.dynamicDurationValue:this.propsStaggers.length>0?"dynamic":Object.prototype.hasOwnProperty.call(this.props,"duration")?this.repeats*(this.delay+this.props.duration+this.hiatus):v(p(n.prototype),"duration",this)}},{kind:"set",key:"duration",value:function(e){if(0!=this.propsStaggers.length){for(var t=0;t<this.propsStaggers.length;t++)if("repeats"!==this.propsStaggers[t].path){var i=this.propsStaggers[t].stagger.resize(e/this.duration);Ri(this.props,this.propsStaggers[t].path,i)}this.dynamicDurationValue=e}else gn(p(n.prototype),"duration",e,this,!0)}},{kind:"method",key:"systoleDiastole",value:function(e){this.constructor.isAnimation&&(this.props.duration?this.props.duration*=e:this.props.duration=e*this.calculatedDuration),this.realClip._resize(e),v(p(n.prototype),"systoleDiastole",this).call(this,e)}},{kind:"method",key:"exportLiveDefinition",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=v(p(n.prototype),"exportLiveDefinition",this).call(this,e);return this.constructor.isAnimation&&(t.props.duration=this.props.duration?this.props.duration:this.calculatedDuration),xi(this.props.html)&&(t.props.html=this.props.html),xi(this.props.css)&&(t.props.css=this.props.css),t}},{kind:"method",key:"_buildTree",value:function(){void 0!==this.realClip&&this.buildTree()}},{kind:"method",key:"resize",value:function(e){if("dynamic"===this.duration)return{result:!1,reason:"Incidents with dynamic duration can't be resized. Once the Incident enters a Clip it'll become resizable"};var t=e/this.duration;return this.realClip._resize(t),this.audioClip._resize(t),this.duration=e,this.constructor.isAnimation&&(this.props.duration?this.props.duration*=t:this.props.duration=this.calculatedDuration),this.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!1,direction:qi}),this.putMessageOnPipe("flash",{},"RootClip",{selfExecute:!0,direction:qi}),{result:!0}}},{kind:"method",key:"manageEditAttrProps",value:function(e,t){return{result:!1,errors:["Clips attributes and properties can not be edited"]}}},{kind:"method",key:"handleCheckForClip",value:function(e,t){return!0}},{kind:"method",key:"handleGetElements",value:function(e,t){return this.realClip.getElements(t.selector)}},{kind:"method",key:"handleCheckAddition",value:function(e,t){var n=this.realClip.addIncident(t),i=this.audioClip.addIncident(t);return!0===n.result&&!0===i.result?(n.execute(),i.execute(),this.putMessageOnPipe("flash",{},"RootClip",{selfExecute:!0,direction:qi}),{result:!0}):n}},{kind:"method",key:"handleCheckMove",value:function(e,t){var n=this.realClip.moveIncident(t),i=this.audioClip.moveIncident(t);return!0===n.result&&!0===i.result?(n.execute(),i.execute(),this.putMessageOnPipe("flash",{},"RootClip",{selfExecute:!0,direction:qi}),{result:!0}):n}},{kind:"method",key:"handleCheckDeletion",value:function(e,t){var n=this.realClip.removeIncident(t),i=this.audioClip.removeIncident(t);return!0===n.result&&!0===i.result?(n.execute(),i.execute(),this.putMessageOnPipe("flash",{},"RootClip",{selfExecute:!0,direction:qi}),{result:!0}):n}},{kind:"method",key:"handleCheckResize",value:function(e,t){var n=this.realClip.resizeIncident(t),i=this.audioClip.resizeIncident(t);return!0===n.result&&!0===i.result?(n.execute(),i.execute(),this.putMessageOnPipe("flash",{},"RootClip",{selfExecute:!0,direction:qi}),{result:!0}):n}},{kind:"method",key:"handleFlash",value:function(e,t){if(!this.isTheRootClip)return this.bypass();this.flash()}},{kind:"method",key:"exportDefinition",value:function(){var e=v(p(n.prototype),"exportDefinition",this).call(this);return this.constructor.isAnimation&&(e.props.duration=this.props.duration?this.props.duration:this.calculatedDuration),e}},{kind:"method",key:"handleSetBlock",value:function(e,t){if(!this.isTheRootClip)return this.bypass();if("transitional"!==this.runTimeInfo.state){"blocked"!==this.runTimeInfo.state&&(this.statusBeforeBlock=this.runTimeInfo.state),this.blockingWaitings[t.id]=t;var n={};t.options.exceptional&&(n.exception=t.incidentId),this.block(n)}}},{kind:"method",key:"handleUnBlock",value:function(e,t){if(!this.isTheRootClip)return this.bypass();Object.prototype.hasOwnProperty.call(this.blockingWaitings,t.id)&&(delete this.blockingWaitings[t.id],0===Object.keys(this.blockingWaitings).length&&("playing"===this.statusBeforeBlock?(this.previousTimeStamp=-1,this.play()):this.arm()))}},{kind:"method",key:"stop",value:function(){v(p(n.prototype),"stop",this).call(this),this.blockingWaitings={}}},{kind:"method",key:"onProgress",value:function(e,t){this.realClip.onProgress(e,t),this.audioClip.onProgress(e,t)}},{kind:"method",key:"paste",value:function(e){return this.isTheRootClip?new ka({host:e,descriptiveIncident:this}):null}},{kind:"method",key:"flash",value:function(){this.realClip.flash()}},{kind:"get",key:"volume",value:function(){return"off"===this.audio?0:this.audioClip.volume}},{kind:"method",key:"setVolume",value:function(e){if(e<0||e>1)return{result:!1,errors:[{type:"invalid volume number"}]};if("off"===this.audio)return{result:!1,errors:[{type:"can not set volume of Clip with audio off"}]};for(var t in this.audioClip.setVolume(e),this.volumeChangeSubsribers)this.volumeChangeSubsribers[t](e);return{result:!0}}},{kind:"method",key:"attachMediaElementSource",value:function(e){"off"!==this.audio&&this.audioClip.context.audioContext.createMediaElementSource(e).connect(this.audioClip.context.masterNode.input)}},{kind:"method",key:"volumeChangeSubscribe",value:function(e,t){return this.putMessageOnPipe("volumeChangeSubscribe",{type:"subscribe",id:e,funct:t},"RootClip",{selfExecute:!0,direction:qi}).response}},{kind:"method",key:"volumeChangeUnsubscribe",value:function(e){return this.putMessageOnPipe("volumeChangeSubscribe",{type:"unsubscribe",id:e},"RootClip",{selfExecute:!0,direction:qi}),0}},{kind:"method",key:"handleVolumeChangeSubscribe",value:function(e,t){if(!this.isTheRootClip)return this.bypass();switch(t.type){case"subscribe":return this.volumeChangeSubsribers[t.id]=t.funct,this.volume;case"unsubscribe":return delete this.volumeChangeSubsribers[t.id],0;default:return!1}}}]}}),xa);function Va(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function Ra(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Va(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Va(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function La(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=p(e);if(t){var r=p(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return u(this,n)}}var za=yi({incidents:{type:"array",items:{type:"object",props:{position:{type:"amount",integer:!0,min:0,optional:!1},attrs:{type:"object",optional:!1},props:{type:"object",optional:!1},incidentClass:{type:"any",optional:!1}}}}}),Fa="Combos don't allow external addition or manipulation to their Incidents";function Na(){return Li.error(Fa),{result:!1,errors:[Fa]}}var $a=function(e){a(n,e);var t=La(n);function n(e,i){var r;s(this,n),h(c(r=t.call(this,e,i)),"addIncident",Na),h(c(r),"moveIncident",Na),h(c(r),"removeIncident",Na),h(c(r),"handleCheckAddition",Vi),h(c(r),"handleCheckMove",Vi),h(c(r),"handleCheckDeletion",Vi),h(c(r),"handleCheckResize",Vi),null!==r.incidents&&(r.attrs.incidents=r.incidents,r.attributesStaggers=[],r.propsStaggers=[],r.setupDynamicValues());var o=zi(r.props,_s,r.constructor);if(!o.result)return u(r,o);var a=za(r.attrs);if(a.length>0)return Li.error("The provided attributes for Combo Incident are invalid"),u(r,{result:!1,errors:a});for(var l=[],p=0;p<r.attrs.length;p++){var d=r.attrs[p];if(null!==d.incidentClass.attrsValidationRules){var f=d.incidentClass.attrsValidationMethod(d.attrs);f.length>0&&l.concat(f.errors)}var m=zi(d.props,d.incidentClass.propsValidationRules,d.incidentClass);m.result||l.concat(m.errors)}return l.length>0?u(r,{result:!1,errors:l}):(r.dynamicDurationValue=null,r)}return f(n,[{key:"incidents",get:function(){return null}},{key:"duration",get:function(){return null!==this.dynamicDurationValue?this.dynamicDurationValue:"dynamic"},set:function(e){gn(p(n.prototype),"duration",e,this,!0)}},{key:"exportDefinition",value:function(){var e=Ra(Ra({},this.attrs),{},{incidents:function e(t){for(var n=[],i=0;i<t.length;i++){var r=t[i],s=r.attrs;"Combo"===r.incidentClass.ClassName&&(s=Ra(Ra({},s),{},{incidents:e(s.incidents)})),n.push({ClassName:r.incidentClass.ClassName||r.incidentClass.targetClass.ClassName,plugin_npm_name:r.incidentClass.plugin_npm_name||r.incidentClass.targetClass.plugin_npm_name,version:r.incidentClass.version||r.incidentClass.targetClass.version,attrs:s,props:JSON.parse(JSON.stringify(r.props)),position:r.position})}return n}(this.attrs.incidents)});return{ClassName:this.constructor.ClassName,version:this.constructor.version,plugin:this.constructor.plugin||this.constructor.plugin_npm_name,plugin_npm_name:this.constructor.plugin_npm_name,attrs:e,props:JSON.parse(JSON.stringify(this.props)),incidents:{},duration:this.duration}}},{key:"exportLiveDefinition",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=this.attrs;null!==this.incidents&&(t=Ra(Ra({},this.attrs),{},{incidents:void 0}));var n=JSON.parse(JSON.stringify(this.props));return e||delete n.id,{Class:this.constructor,attrs:t,props:n,incidents:{}}}}]),n}(io);function Ha(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=p(e);if(t){var r=p(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return u(this,n)}}function Wa(){Wa=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(n){t.forEach((function(t){t.kind===n&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var n=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var r=t.placement;if(t.kind===i&&("static"===r||"prototype"===r)){var s="static"===r?e:n;this.defineClassElement(s,t)}}),this)}),this)},defineClassElement:function(e,t){var n=t.descriptor;if("field"===t.kind){var i=t.initializer;n={enumerable:n.enumerable,writable:n.writable,configurable:n.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,n)},decorateClass:function(e,t){var n=[],i=[],r={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,r)}),this),e.forEach((function(e){if(!Ja(e))return n.push(e);var t=this.decorateElement(e,r);n.push(t.element),n.push.apply(n,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:n,finishers:i};var s=this.decorateConstructor(n,t);return i.push.apply(i,s.finishers),s.finishers=i,s},addElementPlacement:function(e,t,n){var i=t[e.placement];if(!n&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var n=[],i=[],r=e.decorators,s=r.length-1;s>=0;s--){var o=t[e.placement];o.splice(o.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,r[s])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var u=0;u<c.length;u++)this.addElementPlacement(c[u],t);n.push.apply(n,c)}}return{element:e,finishers:i,extras:n}},decorateConstructor:function(e,t){for(var n=[],i=t.length-1;i>=0;i--){var r=this.fromClassDescriptor(e),s=this.toClassDescriptor((0,t[i])(r)||r);if(void 0!==s.finisher&&n.push(s.finisher),void 0!==s.elements){e=s.elements;for(var o=0;o<e.length-1;o++)for(var a=o+1;a<e.length;a++)if(e[o].key===e[a].key&&e[o].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[o].key+")")}}return{elements:e,finishers:n}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){if(void 0!==e)return C(e).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var n=Xa(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var r=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var s={kind:t,key:n,placement:i,descriptor:Object.assign({},r)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(r,"get","The property descriptor of a field descriptor"),this.disallowProperty(r,"set","The property descriptor of a field descriptor"),this.disallowProperty(r,"value","The property descriptor of a field descriptor"),s.initializer=e.initializer),s},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:Ka(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var n=Ka(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:n}},runClassFinishers:function(e,t){for(var n=0;n<t.length;n++){var i=(0,t[n])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,n){if(void 0!==e[t])throw new TypeError(n+" can't have a ."+t+" property.")}};return e}function Ga(e){var t,n=Xa(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:n,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function qa(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function Ja(e){return e.decorators&&e.decorators.length}function Ua(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function Ka(e,t){var n=e[t];if(void 0!==n&&"function"!=typeof n)throw new TypeError("Expected '"+t+"' to be a function");return n}function Xa(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==l(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}h($a,"isCombo",!0),h($a,"ClassName","Combo"),h($a,"attrsValidationRules",null),h($a,"propsValidationRules",_s);var Qa=function(e,t,n,i){var r=Wa();if(i)for(var s=0;s<i.length;s++)r=i[s](r);var o=t((function(e){r.initializeInstanceElements(e,a.elements)}),n),a=r.decorateClass(function(e){for(var t=[],n=function(e){return"method"===e.kind&&e.key===s.key&&e.placement===s.placement},i=0;i<e.length;i++){var r,s=e[i];if("method"===s.kind&&(r=t.find(n)))if(Ua(s.descriptor)||Ua(r.descriptor)){if(Ja(s)||Ja(r))throw new ReferenceError("Duplicated methods ("+s.key+") can't be decorated.");r.descriptor=s.descriptor}else{if(Ja(s)){if(Ja(r))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+s.key+").");r.decorators=s.decorators}qa(s,r)}else t.push(s)}return t}(o.d.map(Ga)),e);return r.initializeClassElements(o.F,a.elements),r.runClassFinishers(o.F,a.finishers)}(null,(function(e,t){var n=function(t){a(i,t);var n=Ha(i);function i(t,r){var o;s(this,i),void 0===r&&(r=t,t={}),o=n.call(this,r),e(c(o));var a=zi(r,As,o.constructor,o.id);return a.result?(o.inheritedSelector=null,o.attrs=t,Ci(r,"duration")||(r.duration=0),o.props=r,o.attributesStaggers=[],o.propsStaggers=[],o.setupDynamicValues(),o.dynamicDurationValue=null,o.passive=!1,o):u(o,a)}return i}(t);return{F:n,d:[{kind:"field",static:!0,key:"Incident",value:function(){return Or}},{kind:"field",static:!0,key:"plugin_npm_name",value:function(){return"motor-cortex-js-attribute"}},{kind:"field",static:!0,key:"version",value:function(){return ds}},{kind:"field",static:!0,key:"Channel",value:function(){return Qo}},{kind:"field",static:!0,key:"ClassName",value:function(){return"Incident"}},{kind:"field",static:!0,key:"attrsValidationRules",value:function(){return null}},{kind:"field",static:!0,key:"propsValidationRules",value:function(){return As}},{kind:"method",decorators:[Ls],key:"editAttributes",value:function(){}},{kind:"method",decorators:[zs],key:"editProperties",value:function(){}},{kind:"method",decorators:[Ns],key:"resize",value:function(){}},{kind:"method",decorators:[Vs],key:"clone",value:function(){}},{kind:"method",decorators:[$s],key:"selector",value:function(){}},{kind:"method",decorators:[Fs],key:"getElements",value:function(){}},{kind:"method",decorators:[Us],key:"setupDynamicValues",value:function(){}},{kind:"get",key:"duration",value:function(){return null!==this.dynamicDurationValue?this.dynamicDurationValue:this.propsStaggers.length>0?"dynamic":v(p(n.prototype),"duration",this)}},{kind:"set",key:"duration",value:function(e){if(this.propsStaggers.length>0){for(var t=0;t<this.propsStaggers.length;t++)if("repeats"!==this.propsStaggers[t].path){var i=this.propsStaggers[t].stagger.resize(e/this.duration);Ri(this.props,this.propsStaggers[t].path,i)}this.dynamicDurationValue=e}else gn(p(n.prototype),"duration",e,this,!0)}},{kind:"method",key:"manageEditAttrProps",value:function(e,t){var n=this.parentNode,i=n.getLeafPosition(this.id);n.removeIncident(this.id);var r=JSON.parse(JSON.stringify(this[t]));this[t]=e;var s=n.addIncident(this,i);return s.result||(n.removeIncident(this.id),this[t]=r,n.addIncident(this,i)),s}},{kind:"method",key:"detachFromParent",value:function(){v(p(n.prototype),"detachFromParent",this).call(this),this.inheritedSelector=null}},{kind:"method",key:"handleCheckForInvalidSelectors",value:function(){var e=this.selector();return null===e?{id:this.id,ClassName:this.constructor.ClassName,plugin_npm_name:this.constructor.plugin_npm_name,error:"null selector"}:"&"===e.charAt(0)?{id:this.id,ClassName:this.constructor.ClassName,plugin_npm_name:this.constructor.plugin_npm_name,error:"relative selector with no inherited selector",selector:e}:this.bypass()}},{kind:"method",key:"exportDefinition",value:function(){return{ClassName:this.constructor.ClassName,version:this.constructor.version,plugin:this.constructor.plugin||this.constructor.plugin_npm_name,plugin_npm_name:this.constructor.plugin_npm_name,attrs:this.attrs,props:this.props}}},{kind:"method",key:"exportLiveDefinition",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=JSON.parse(JSON.stringify(this.props));return!1===e&&delete t.id,{Class:this.constructor,attrs:JSON.parse(JSON.stringify(this.attrs)),props:t}}}]}}),Qi);function Za(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function Ya(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Za(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Za(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var el=function(e,t){return e.startsWith("on")&&"function"==typeof t},tl=function(e){return e.substr(2).toLowerCase()},nl=function(e){return"function"==typeof e};function il(e){var t=document.createElement("div");return t.innerHTML=e.trim(),t.firstChild}function rl(e,t){if(!t)return e;for(var n=0,i=Object.entries(t);n<i.length;n++){var r=an(i[n],2),s=r[0],o=r[1];if(el(s))e.addEventListener(tl(s),o);else if("class"===s){var a,l=Array.isArray(o)?o:o.split(" ");(a=e.classList).add.apply(a,k(l))}else e.setAttribute(s,o)}return e}var sl=function(){function e(t){if(s(this,e),!Ci(t,"incident"))return Li.error('Journey constructor expects an Incident on its properties on the key "incident"'),!1;this.memory=t.capsuleMemory,this.stations=[],this.incident=t.incident,this.startMillisecond=1*this.incident.runTimeInfo.currentMillisecond,this.startState="".concat(this.incident.runTimeInfo.state),this.incident.stop()}return f(e,[{key:"station",value:function(e){this.stations.length>0&&this.stations[this.stations.length-1],this.stations.push(e),this.incident.playableProgress(e/this.incident.duration,e)}},{key:"destination",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;null!=e?this.station(e):e=this.stations[this.stations.length-1],this.incident.playableProgress(e/this.incident.duration,e),"playing"===this.startState||"blocked"===this.startState&&"playing"===this.incident.statusBeforeBlock?this.incident.play():e>=this.incident.duration?this.incident.complete():this.incident.arm(),this.memory.push(this.exportJourneyLog)}},{key:"exportJourneyLog",value:function(){return{startMillisecond:this.startMillisecond,startState:this.startState,stations:this.stations}}}]),e}(),ol=function(){function e(){s(this,e),this.memory=[]}return f(e,[{key:"startJourney",value:function(e){return e?new sl({incident:e,capsuleMemory:this.memory}):(Li.error("startJourney expects an Incident as an argument"),!1)}}]),e}();function al(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=p(e);if(t){var r=p(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return u(this,n)}}var ll={createDOMElement:function(e,t){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];if(nl(e))return e(Ya(Ya({},t),{},{children:i}));for(var s=rl(document.createElement(e),t),o=i.flat(),a=0;a<o.length;a++){var l=o[a];if(!1!==l){var c=wi(l)?l:il(l.toString());null!==c&&s.appendChild(c)}}return s.outerHTML},easings:Un,clipFromDefinition:ls},cl=function(e){if(Ci(e,"default")&&(e=e.default),Ci(e,"npm_name")||(e.npm_name="plugin_".concat((new Date).getTime())),!function(e){Ci(e,"default")&&(e=e.default);var t=e.npm_name,n=!0;if(Ci(e,"name")||Li.notice("Notice on plugin ".concat(t,'. A plugin is always good to have its name on\n        its main.js file, under the key "name". It\'s missing from this plugin')),Ci(e,"version")||Li.notice("Notice on ".concat(t,". Plugin should always expose its version number on main.js file.\n      Plugin version is missing")),Ci(e,"incidents")||Ci(e,"Clip")||(Li.error("Error on plugin ".concat(t,'. A plugin must expose at least one Incident or a Clip.\n        Exposed plugin Incidents should be defined on the "incidents" key of the main.js file while Clips on the "Clip".')),n=!1),Ci(e,"incidents")&&!Array.isArray(e.incidents))Li.error("Error on plugin ".concat(t,'. thePlugin exposed Incidents are defined on the "incidents" key of the main.js file in array format.\n        Please refer to the documentation')),n=!1;else if(Ci(e,"incidents"))for(var i=0;i<e.incidents.length;i++){var r=e.incidents[i];wi(r.exportable)&&Ci(r.exportable,"default")&&(r.exportable=r.exportable.default);var s=r.exportable.prototype;s instanceof io||s instanceof _a||s instanceof Or||s instanceof _o||(Li.error("Error on plugin ".concat(t,". Exportable Incidents by any plugin must extend one of the base classes provided by MotorCortex.\n                ").concat(r.exportable.constructor.name," doesn't.\nPlease refer to documentation")),n=!1),s instanceof _a&&(Ci(r,"originalDims")?!1===Si(r.originalDims).result&&(Li.error("Error on plugin ".concat(t,". Invalid originalDims value passed on ").concat(r.name)),n=!1):Li.log("Warning on plugin ".concat(t,'. It\'s always good to provide originalDims\nwhen exposing Incidents extending DOMClip. By defining their original dims the users\nof your plugin will be able to define the desired dimensions of your Incident by\nthe "containerParams object"'))),Ci(r,"name")||(Li.error("Error on plugin ".concat(t,'. Exportable Incidents by any plugin must have the "name" key which defines the name of the exported Incident.\nPlease refer to documentation')),n=!1)}return n}(e))return!1;var t={};if(Ci(e,"Clip"))if(Ci(e.Clip,"exportable")){var n,i,r,o=(i=n=function(e){a(n,e);var t=al(n);function n(){return s(this,n),t.apply(this,arguments)}return n}(_a),h(n,"Incident",e.Clip.exportable),h(n,"plugin",e.npm_name),h(n,"version",e.version||"*"),h(n,"audio",e.audio||"off"),h(n,"customClip",!0),i);Ci(e.Clip,"attributesValidationRules")&&(r=yi(e.Clip.attributesValidationRules));t.Clip=function t(n,i){s(this,t);var a,l=n,c=i;if(void 0===i&&(l={},c=n),Ci(e.Clip,"attributesValidationRules")){var u=r(l);if(u.length>0){for(var p="Error on plugin's \"".concat(e.npm_name,'" Clip instantiation. Errors:'),h=0;h<u.length;h++)p+="\n - ".concat(u[h].message,". ").concat(u[h].actual," provided");return Li.error(p),Li.log("breaking"),{result:!1,errors:u}}Li.log("instantiating"),(a=new o(l,c)).attrsValidationRules=e.Clip.attributesValidationRules,a.attrsValidationMethod=r}else Li.log("instantiating"),(a=new o(l,c)).attrsValidationRules=null,Li.warning("It's always good to provide attributesValidationRules to the exported incidents. ".concat(e.npm_name,".").concat(a.constructor.name," doesn't provide it"));return a}}else{var l,c,u=(c=l=function(e){a(n,e);var t=al(n);function n(){return s(this,n),t.apply(this,arguments)}return n}(_a),h(l,"Incident",e.Clip),h(l,"plugin",e.npm_name),h(l,"version",e.version||"*"),h(l,"audio",e.audio||"off"),h(l,"customClip",!0),c);Li.warning("It's always good to provide attributesValidationRules to the exported incidents. ".concat(e.npm_name,".Clip doesn't provide it")),t.Clip=u}var p=Qo;if(Ci(e,"compositeAttributes")&&(p=function(t){a(i,t);var n=al(i);function i(t){return s(this,i),t.comboAttributes=e.compositeAttributes,n.call(this,t)}return i}(Qo)),Ci(e,"incidents"))for(var d=function(n){var i,r,o=e.incidents[n].exportable,l=null,c=null,u=!1;if(Ci(e.incidents[n],"attributesValidationRules")){u=!0;var d=JSON.parse(JSON.stringify(e.incidents[n].attributesValidationRules));Ci(e.incidents[n].attributesValidationRules,"animatedAttrs")&&(d.initialValues=(i=d.animatedAttrs,function e(t){if(ki(t)&&(t={type:t}),t.optional=!0,"object"===t.type)for(var n in t.props)e(t.props[n])}(r=JSON.parse(JSON.stringify(i))),r)),c=d,l=yi(d)}var f,m,v=void 0;if(o.prototype instanceof Or)m=f=function(e){a(n,e);var t=al(n);function n(){return s(this,n),t.apply(this,arguments)}return n}(Qa),h(f,"Incident",o),h(f,"plugin_npm_name",e.npm_name),h(f,"plugin",e.npm_name),h(f,"version",e.version||"*"),h(f,"ClassName",e.incidents[n].name),h(f,"Channel",p),h(f,"audio",e.audio||"off"),h(f,"attrsValidationRules",c),h(f,"attrsValidationMethod",l),v=m;else if(o.prototype instanceof _o){var y,g;g=y=function(e){a(n,e);var t=al(n);function n(){return s(this,n),t.apply(this,arguments)}return n}(Qa),h(y,"Incident",o),h(y,"plugin_npm_name","@kissmybutton/media-playback"),h(y,"plugin",e.npm_name),h(y,"version",e.version||"*"),h(y,"ClassName",e.incidents[n].name),h(y,"Channel",Io),h(y,"audio",e.audio?e.audio:"off"),h(y,"attrsValidationRules",c),h(y,"attrsValidationMethod",l),v=g}else if(o.prototype instanceof _a){var b,k;k=b=function(e){a(n,e);var t=al(n);function n(){return s(this,n),t.apply(this,arguments)}return n}(o),h(b,"plugin",e.npm_name),h(b,"version",e.version||"*"),h(b,"ClassName",e.incidents[n].name),h(b,"audio",e.audio?e.audio:"on"),h(b,"originalDims",Si(e.incidents[n].originalDims).analysis),h(b,"attrsValidationRules",c),h(b,"attrsValidationMethod",l),h(b,"isAnimation",!0),v=k}else if(o.prototype instanceof io){var w,x;x=w=function(e){a(n,e);var t=al(n);function n(){return s(this,n),t.apply(this,arguments)}return n}(o),h(w,"plugin",e.npm_name),h(w,"version",e.version||"*"),h(w,"ClassName",e.incidents[n].name),h(w,"attrsValidationRules",c),h(w,"attrsValidationMethod",l),v=x}Object.defineProperty(t,e.incidents[n].name,{enumerable:!0,get:function(){var t=function t(i,r){var o;if(s(this,t),u){var a=l(i);if(a.length>0){for(var c="Error on plugin's \"".concat(e.npm_name,'" "').concat(e.incidents[n].name,'" instantiation. Errors:'),p=0;p<a.length;p++)c+="\n - ".concat(a[p].message,". ").concat(a[p].actual," provided");return Li.error(c),{result:!1,errors:a}}}return(o=new v(i,r)).result&&!u&&Li.warning("It's always good to provide attributesValidationRules to the exported incidents. ".concat(e.npm_name," doesn't provide it")),o};return h(t,"targetClass",v),t}})},f=0;f<e.incidents.length;f++)d(f);return t}(Lo);cl.Clip,cl.AudioEffect,cl.AudioPlayback;var ul="--mc-player",pl="volume-change",hl="mute-change",dl="speed-change",fl="loop-change",ml="scale-change",vl="show-volume-change",yl="show-preview-change",gl="state-change",bl="duration-change",kl="mouseup",wl="mousedown",xl="touchstart",Cl="mousemove",El="touchend",Pl="touchmove",Ol={play:'\x3c!-- Generated by IcoMoon.io --\x3e\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">\n<title>play</title>\n<path fill="#999" d="M27.558 13.624l-21.827-13.232c-0.402-0.248-0.89-0.395-1.411-0.395-1.502 0-2.72 1.218-2.72 2.72 0 0.002 0 0.004 0 0.006v-0 26.461c0 0.001 0 0.002 0 0.003 0 1.502 1.218 2.72 2.72 2.72 0.522 0 1.009-0.147 1.423-0.401l-0.012 0.007 21.827-13.232c0.792-0.485 1.313-1.346 1.313-2.328s-0.521-1.843-1.301-2.321l-0.012-0.007z"></path>\n</svg>',pause:'\x3c!-- Generated by IcoMoon.io --\x3e\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">\n<title>pause</title>\n<path d="M6.059 4.639h8.521v22.722h-8.521zM18.84 4.639h8.521v22.722h-8.521z"></path>\n</svg>',"expand-full":'\x3c!-- Generated by IcoMoon.io --\x3e\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">\n<title>expand-full</title>\n<path fill="#999" d="M31.667 3.271c-0.004-1.619-1.315-2.93-2.934-2.934h-7.642c-0.921 0-1.667 0.747-1.667 1.667s0.747 1.667 1.667 1.667h6.909c0.185 0 0.333 0.148 0.333 0.332v4.359c0 0.921 0.747 1.667 1.667 1.667s1.667-0.746 1.667-1.667v0-5.091zM0.333 8.362c0 0.921 0.746 1.667 1.667 1.667s1.667-0.746 1.667-1.667v0-4.362c0-0.001 0-0.001 0-0.002 0-0.184 0.148-0.333 0.332-0.333h6.909c0.898-0.029 1.614-0.764 1.614-1.667s-0.717-1.637-1.612-1.666l-0.003-0h-7.635c-1.619 0.005-2.931 1.315-2.934 2.936l-0.007 5.095zM31.667 28.726v-5.091c0-0.921-0.747-1.667-1.667-1.667s-1.667 0.747-1.667 1.667v0 4.365c0 0.185-0.148 0.333-0.332 0.333h-6.909c-0.921 0-1.667 0.747-1.667 1.667s0.747 1.667 1.667 1.667v0h7.635c1.624-0.002 2.941-1.319 2.941-2.942zM0.333 28.726c0.004 1.621 1.319 2.934 2.941 2.934 0 0 0 0 0 0h7.635c0.016 0.001 0.034 0.001 0.053 0.001 0.921 0 1.667-0.747 1.667-1.667s-0.746-1.667-1.667-1.667c-0.019 0-0.037 0-0.056 0.001l0.003-0h-6.909c-0 0-0 0-0 0-0.182 0-0.33-0.145-0.333-0.326v-4.366c0-0.921-0.747-1.667-1.667-1.667s-1.667 0.747-1.667 1.667v0 5.091z"></path>\n<path fill="#999" d="M10.321 10.848h11.357c1.818 0 3.291 1.473 3.291 3.291v3.72c0 1.818-1.473 3.291-3.291 3.291h-11.357c-1.818 0-3.291-1.473-3.291-3.291v-3.72c0-1.818 1.473-3.291 3.291-3.291z"></path>\n</svg>',"angle-left":'\x3c!-- Generated by IcoMoon.io --\x3e\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="32" viewBox="0 0 16 32">\n<title>angle-left</title>\n<path d="M1.981 14.938l8.5-8.5c0.588-0.588 1.537-0.588 2.119 0l1.412 1.412c0.588 0.588 0.588 1.537 0 2.119l-6.019 6.031 6.025 6.025c0.588 0.587 0.588 1.538 0 2.119l-1.412 1.419c-0.588 0.587-1.537 0.587-2.119 0l-8.5-8.5c-0.594-0.587-0.594-1.537-0.006-2.125z"></path>\n</svg>',"angle-right":'\x3c!-- Generated by IcoMoon.io --\x3e\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="32" viewBox="0 0 16 32">\n<title>angle-right</title>\n<path d="M14.019 17.063l-8.5 8.5c-0.588 0.587-1.538 0.587-2.119 0l-1.413-1.413c-0.587-0.587-0.587-1.538 0-2.119l6.019-6.031-6.025-6.025c-0.587-0.588-0.587-1.537 0-2.119l1.413-1.419c0.587-0.588 1.538-0.588 2.119 0l8.5 8.5c0.594 0.588 0.594 1.538 0.006 2.125z"></path>\n</svg>',settings:'\x3c!-- Generated by IcoMoon.io --\x3e\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">\n<title>settings</title>\n<path fill="#999" d="M29.999 12.665h-2.483c-0.275-0.938-0.621-1.751-1.048-2.512l0.031 0.060 1.757-1.755c0.362-0.362 0.587-0.862 0.587-1.415s-0.224-1.053-0.587-1.415l-1.886-1.883c-0.362-0.362-0.862-0.586-1.415-0.586s-1.053 0.224-1.415 0.586l-1.757 1.755c-0.701-0.397-1.514-0.743-2.366-0.996l-0.084-0.021v-2.483c0.002-1.107-0.894-2.001-1.999-2.001h-2.668c-1.105 0-1.999 0.896-1.999 2.001v2.483c-0.938 0.275-1.751 0.621-2.513 1.048l0.060-0.031-1.757-1.755c-0.362-0.362-0.862-0.587-1.415-0.587s-1.053 0.224-1.415 0.587l-1.886 1.886c-0.362 0.362-0.586 0.862-0.586 1.415s0.224 1.053 0.586 1.415v0l1.758 1.755c-0.431 0.775-0.771 1.598-1.017 2.451h-2.483c-1.107-0.002-2.001 0.894-2.001 1.999v2.668c0 1.105 0.896 1.999 2.001 1.999h2.483c0.246 0.854 0.586 1.676 1.017 2.452l-1.762 1.758c-0.362 0.362-0.586 0.862-0.586 1.415s0.224 1.053 0.586 1.415v0l1.886 1.885c0.368 0.348 0.866 0.563 1.415 0.563s1.047-0.214 1.416-0.564l-0.001 0.001 1.757-1.757c0.778 0.429 1.6 0.771 2.454 1.019v2.479c0 1.105 0.894 2.001 1.999 2.001h2.668c1.105 0 1.999-0.896 1.999-2.001v-2.479c0.852-0.248 1.676-0.589 2.452-1.017l1.757 1.757c0.362 0.362 0.862 0.586 1.415 0.586s1.053-0.224 1.415-0.586v0l1.885-1.886c0.362-0.362 0.586-0.862 0.586-1.414s-0.224-1.052-0.586-1.414l-1.757-1.757c0.431-0.776 0.771-1.6 1.017-2.452h2.483c0 0 0.001 0 0.002 0 1.105 0 2.001-0.896 2.001-2.001 0-0.002 0-0.004 0-0.005v0-2.663c0-1.105-0.896-1.999-2.001-1.999zM16 22.668c-3.682 0-6.666-2.985-6.666-6.666s2.985-6.666 6.666-6.666v0c3.682 0 6.666 2.985 6.666 6.666s-2.985 6.666-6.666 6.666v0z"></path>\n</svg>',loop:'\x3c!-- Generated by IcoMoon.io --\x3e\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">\n<title>loop</title>\n<path fill="#999" d="M22.364 21.968h-0.631c-0.92 0-1.667 0.746-1.667 1.667s0.746 1.667 1.667 1.667h0.637c0.013 0 0.028 0 0.044 0 5.113 0 9.259-4.145 9.259-9.259 0-4.668-3.454-8.529-7.946-9.166l-0.049-0.006c-0.158-0.028-0.276-0.164-0.277-0.328v-2.636c-0-0.92-0.746-1.666-1.667-1.666-0.357 0-0.689 0.112-0.96 0.304l0.005-0.003-6.371 4.455c-0.432 0.305-0.711 0.803-0.711 1.365 0 0.92 0.746 1.667 1.667 1.667 0 0 0 0 0 0h6.352c3.772 0 6.617 2.567 6.617 5.971-0.004 3.295-2.674 5.966-5.969 5.969h-0zM8.329 25.127c0.16 0.027 0.277 0.165 0.277 0.328v2.635c0 0.001 0 0.001 0 0.002 0 0.92 0.746 1.665 1.665 1.665 0.358 0 0.69-0.113 0.961-0.305l-0.005 0.003 6.364-4.453c0.432-0.306 0.71-0.803 0.71-1.365 0-0.92-0.746-1.667-1.666-1.668h-6.352c-3.772 0-6.617-2.567-6.617-5.968 0.002-3.296 2.673-5.968 5.969-5.972h0.638c0.92 0 1.667-0.746 1.667-1.667s-0.746-1.667-1.667-1.667v0h-0.637c-0.010-0-0.022-0-0.034-0-5.114 0-9.26 4.146-9.26 9.26 0 4.665 3.45 8.524 7.937 9.166l0.049 0.006z"></path>\n</svg>',"volume-on":'\x3c!-- Generated by IcoMoon.io --\x3e\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">\n<title>volume-on</title>\n<path d="M26.107 2.991l-3.729 3.185c2.867 2.354 4.694 5.879 4.694 9.824s-1.827 7.47-4.694 9.824l3.729 3.185c3.612-3.226 5.893-7.852 5.893-13.009s-2.281-9.783-5.893-13.009zM19.861 8.326l-3.876 3.312c1.692 0.762 3.038 2.423 3.038 4.362s-1.346 3.6-3.038 4.362l3.876 3.312c2.379-1.756 4.028-4.535 4.028-7.674s-1.649-5.918-4.028-7.674zM12.143 5.399l-7.143 5.601h-3c-1.478 0-2 0.539-2 2v6c0 1.461 0.553 2 2 2h3l7.143 5.595c0.857 0.553 1.85 0.727 1.85-0.823v-19.55c0-1.55-0.993-1.376-1.85-0.823z"></path>\n</svg>',"volume-off":'\x3c!-- Generated by IcoMoon.io --\x3e\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">\n<title>volume-off</title>\n<path d="M27.397 16.001l4.134-4.144c0.625-0.627 0.625-1.641 0-2.267l-1.132-1.134c-0.625-0.626-1.638-0.626-2.263 0l-4.134 4.144-4.133-4.141c-0.625-0.626-1.638-0.626-2.263 0l-1.132 1.134c-0.625 0.626-0.625 1.641 0 2.267l4.134 4.142-4.131 4.142c-0.625 0.626-0.625 1.641 0 2.267l1.132 1.134c0.625 0.626 1.638 0.626 2.263 0l4.131-4.141 4.133 4.14c0.625 0.627 1.638 0.627 2.263 0l1.132-1.134c0.625-0.626 0.625-1.641 0-2.267l-4.134-4.141zM12.148 5.399l-7.146 5.603h-3.001c-1.479 0-2.001 0.539-2.001 2.001l-0 2.951 0 3.051c0 1.461 0.553 2.001 2.001 2.001h3.001l7.146 5.597c0.857 0.553 1.851 0.727 1.851-0.823v-19.556c-0-1.55-0.994-1.376-1.851-0.823z"></path>\n</svg>',"donkeyclip-logo":'\x3c!-- Generated by IcoMoon.io --\x3e\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">\n<title>donkeyclip-logo</title>\n<path fill="#777" d="M25.811 3.454v11.010h-3.479c-0.696-2.447-2.974-4.246-5.638-4.246-3.238 0-5.877 2.638-5.877 5.877s2.638 5.877 5.877 5.877c2.686 0 4.942-1.799 5.638-4.246h3.334c-0.767 4.246-4.485 7.509-8.972 7.509-5.014 0-9.115-4.078-9.115-9.115 0-5.014 4.078-9.115 9.115-9.115 2.231 0 4.294 0.815 5.877 2.159v-7.652c-1.992-0.912-4.222-1.415-6.572-1.415-8.779 0-15.904 7.125-15.904 15.904s7.125 15.904 15.904 15.904c8.779 0 15.904-7.125 15.904-15.904 0.024-5.109-2.375-9.644-6.093-12.546z"></path>\n</svg>',spinner:'\x3c!-- Generated by IcoMoon.io --\x3e\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">\n<title>spinner</title>\n<path fill="#999" d="M16 0.43c0.992 0 1.796 1.287 1.796 2.875v1.437c0 1.588-0.804 2.875-1.796 2.875s-1.796-1.287-1.796-2.875v-1.437c0-1.588 0.804-2.875 1.796-2.875z"></path>\n<path fill="#999" d="M23.785 2.516c0.859 0.496 0.913 2.013 0.119 3.388l-0.718 1.245c-0.794 1.374-2.133 2.087-2.993 1.592s-0.913-2.013-0.119-3.388l0.718-1.245c0.794-1.374 2.133-2.087 2.993-1.592z"></path>\n<path fill="#999" d="M29.484 8.215c0.496 0.859-0.216 2.199-1.592 2.993l-1.245 0.718c-1.374 0.794-2.892 0.741-3.388-0.119s0.216-2.199 1.592-2.993l1.245-0.718c1.374-0.794 2.892-0.741 3.388 0.119z"></path>\n<path fill="#999" d="M31.57 16c0 0.992-1.287 1.796-2.875 1.796h-1.437c-1.588 0-2.875-0.804-2.875-1.796s1.287-1.796 2.875-1.796h1.437c1.588 0 2.875 0.804 2.875 1.796z"></path>\n<path fill="#999" d="M29.484 23.785c-0.496 0.859-2.013 0.913-3.388 0.119l-1.245-0.718c-1.374-0.794-2.087-2.133-1.592-2.993s2.013-0.913 3.388-0.119l1.245 0.718c1.374 0.794 2.087 2.133 1.592 2.993z"></path>\n<path fill="#999" d="M23.785 29.484c-0.859 0.496-2.199-0.216-2.993-1.592l-0.718-1.245c-0.794-1.374-0.741-2.892 0.119-3.388s2.199 0.216 2.993 1.592l0.718 1.245c0.794 1.374 0.741 2.892-0.119 3.388z"></path>\n<path fill="#999" d="M16 31.57c-0.992 0-1.796-1.287-1.796-2.875v-1.437c0-1.588 0.804-2.875 1.796-2.875s1.796 1.287 1.796 2.875v1.437c0 1.588-0.804 2.875-1.796 2.875z"></path>\n<path fill="#999" d="M8.215 29.484c-0.859-0.496-0.913-2.013-0.119-3.388l0.718-1.245c0.794-1.374 2.133-2.087 2.993-1.592s0.913 2.013 0.119 3.388l-0.718 1.245c-0.794 1.374-2.133 2.087-2.993 1.592z"></path>\n<path fill="#999" d="M2.516 23.785c-0.496-0.859 0.216-2.199 1.592-2.993l1.245-0.718c1.374-0.794 2.892-0.741 3.388 0.119s-0.216 2.199-1.592 2.993l-1.245 0.718c-1.374 0.794-2.892 0.741-3.388-0.119z"></path>\n<path fill="#999" d="M0.43 16c0-0.992 1.287-1.796 2.875-1.796h1.437c1.588 0 2.875 0.804 2.875 1.796s-1.287 1.796-2.875 1.796h-1.437c-1.588 0-2.875-0.804-2.875-1.796z"></path>\n<path fill="#999" d="M2.516 8.215c0.496-0.859 2.013-0.913 3.388-0.119l1.245 0.718c1.374 0.794 2.087 2.133 1.592 2.993s-2.013 0.913-3.388 0.119l-1.245-0.718c-1.374-0.794-2.087-2.133-1.592-2.993z"></path>\n<path fill="#999" d="M8.215 2.516c0.859-0.496 2.199 0.216 2.993 1.592l0.718 1.245c0.794 1.374 0.741 2.892-0.119 3.388s-2.199-0.216-2.993-1.592l-0.718-1.245c-0.794-1.374-0.741-2.892 0.119-3.388z"></path>\n</svg>',"check-solid":'\x3c!-- Generated by IcoMoon.io --\x3e\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">\n<title>check-solid</title>\n<path d="M10.869 27.463l-10.4-10.4c-0.625-0.625-0.625-1.638 0-2.263l2.263-2.263c0.625-0.625 1.638-0.625 2.263 0l7.006 7.006 15.006-15.006c0.625-0.625 1.638-0.625 2.263 0l2.263 2.263c0.625 0.625 0.625 1.638 0 2.263l-18.4 18.4c-0.625 0.625-1.638 0.625-2.263-0z"></path>\n</svg>'};function Il(e,t){return e.getElementsByClassName(t)[0]}function Sl(e){return document.createElement(e)}function Dl(){var e;return(e=document).addEventListener.apply(e,arguments)}function Al(){var e;return(e=document).removeEventListener.apply(e,arguments)}var Ml=new RegExp("^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)","gi");function Tl(e){var t,n=e.match(Ml)[0],i=e.substring(n.length);if("number"==typeof(t=Number(n))&&isFinite(t)&&("%"!==i||"px"!==i))return{number:Number(n),unit:i}}function jl(e,t){var n,i,r,s,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];Object.prototype.hasOwnProperty.call(e,"width")&&(r=Tl(e.width)),Object.prototype.hasOwnProperty.call(e,"height")&&(s=Tl(e.height));var a=1,l=1;"px"===(null===(n=r)||void 0===n?void 0:n.unit)&&r.number!==t.width&&(a=t.width/r.number),"px"===(null===(i=s)||void 0===i?void 0:i.unit)&&s.number!==t.height&&(l=t.height/s.number);var c=o?l>a:l<=a,u=c?l:a,p={};if(null!==r){var h=r.number*u;"px"!==r.unit&&(h*=t.width/100);var d=t.width-h;p.left=d/2}if(null!==r){var f=s.number*u;"px"!==s.unit&&(f*=t.height/100);var m=t.height-f;p.top=m/2}return{scale:u,position:p}}function Bl(e,t){document.addEventListener(kl,e,!1),document.addEventListener(El,e,!1),document.addEventListener(Cl,t,!1),document.addEventListener(Pl,t,!1)}function _l(e,t){document.removeEventListener(kl,e,!1),document.removeEventListener(El,e,!1),document.removeEventListener(Cl,t,!1),document.removeEventListener(Pl,t,!1)}function Vl(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];t.addEventListener(wl,e,{passive:n},!1),t.addEventListener(xl,e,{passive:n},!1)}function Rl(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;t.removeEventListener(wl,e,!1),t.removeEventListener(xl,e,!1)}function Ll(e,t,n){t&&(e.classList.remove("icon-".concat(t)),e.innerHTML=""),n&&(e.classList.add("icon-".concat(n)),e.innerHTML=Ol[n])}var zl=function(e){e.elements={},Fl(e);var t,n=e.elements.mcPlayer;e.elements.pointerEventPanel=Il(n,"--mcp-pointer-events-panel"),e.elements.listenerHelper=Il(n,"--mcp-listener-helper"),e.elements.loopBar=Il(n,"--mcp-loopbar"),e.elements.totalBar=Il(n,"--mcp-totalbar"),e.elements.indicator=Il(n,"--mcp-indicator"),e.elements.loopButton=Il(n,"--mcp-loop-btn"),e.elements.volumeBar=Il(n,"--mcp-volumebar"),e.elements.totalTime=Il(n,"--mcp-time-total"),e.elements.volumeControl=Il(n,"--mcp-volume"),e.elements.volumeBtn=Il(n,"--mcp-volume-btn"),e.elements.runningBar=Il(n,"--mcp-runningbar"),e.elements.loopBarEnd=Il(n,"--mcp-loopbar-end"),e.elements.statusButton=Il(n,"--mcp-status-btn"),e.elements.speedBar=Il(n,"--mcp-speed-values"),e.elements.currentTime=Il(n,"--mcp-time-current"),e.elements.timeDisplay=Il(n,"--mcp-time-display"),e.elements.speedButtonShow=Il(n,"--mcp-speed-btn-show"),e.elements.speedButtonHide=Il(n,"--mcp-speed-btn-hide"),e.elements.speedCurrent=Il(n,"--mcp-speed-current"),e.elements.loopBarStart=Il(n,"--mcp-loopbar-start"),e.elements.volumeCursor=Il(n,"--mcp-volume-cursor"),e.elements.settingsButton=Il(n,"--mcp-settings-btn"),e.elements.donkeyclipButton=Il(n,"--mcp-dc-btn"),e.elements.timeSeparator=Il(n,"--mcp-time-separator"),e.elements.settingsPanel=Il(n,"--mcp-settings-panel"),e.elements.settingsMainPanel=Il(n,"--mcp-main-settings"),e.elements.fullScreenButton=Il(n,"--mcp-full-screen-btn"),e.elements.volumeBarHelper=Il(n,"--mcp-volumebar"),e.elements.volumeBarActive=Il(n,"--mcp-volumebar-color-active"),e.elements.settingsSpeedPanel=Il(n,"--mcp-speed-settings"),e.elements.settingsShowVolume=Il(n,"--mcp-settings-volume"),e.elements.settingsShowPreview=Il(n,"--mcp-settings-preview"),e.elements.settingsPointerEvents=Il(n,"--mcp-settings-pointer-events"),e.elements.settingsShowIndicator=Il(n,"--mcp-settings-indicator"),e.elements.settingsSpeedButtonShow=Il(n,"--mcp-settings-speed-show"),e.elements.settingsSpeedButtonHide=Il(n,"--mcp-settings-speed-hide"),e.elements.controls=Il(n,"--mcp-controls"),e.elements.previewHost=Il(n,"--mcp-preview-host"),e.elements.preview=Il(n,"--mcp-preview"),e.elements.volumeCheckbox=Il(n,"--mcp-show-volume-checkbox"),e.elements.showIndicatorCheckbox=Il(n,"--mcp-show-indicator-checkbox"),e.elements.showPreviewCheckbox=Il(n,"--mcp-show-preview-checkbox"),e.elements.showVolumeCheckbox=Il(n,"--mcp-show-volume-checkbox"),e.elements.showPointerEventsCheckbox=Il(n,"--mcp-show-pointer-events-checkbox"),e.elements.previewMillisecond=Il(n,"--mcp-preview-millisecond"),e.elements.leftButtons=Il(n,"--mcp-left-buttons"),(t=e.elements).loopButton.innerHTML=Ol.loop,t.volumeBtn.innerHTML=Ol["volume-on"],t.statusButton.innerHTML=Ol.play,t.settingsButton.innerHTML=Ol.settings,t.donkeyclipButton.innerHTML=Ol["donkeyclip-logo"],t.fullScreenButton.innerHTML=Ol["expand-full"],t.fullScreenButton.innerHTML=Ol["expand-full"],t.speedButtonShow.innerHTML=Ol["angle-right"],t.speedButtonHide.innerHTML=Ol["angle-left"],Nl(e),$l(e),Hl(e)},Fl=function(e){var t=e.clip.props.host;if(t.offsetWidth||(t.style.width=e.clip.props.containerParams.width),t.offsetHeight||(t.style.height=e.clip.props.containerParams.height),t.style.display="flex",t.style.justifyContent="center",t.style.alignItems="center",t.style.overflow="hidden",e.clip.props.host.style.position="relative",e.clip.props.host.style.zIndex=0,e.elements.mcPlayer=Sl("div"),e.elements.mcPlayer.id="".concat(e.name),e.elements.mcPlayer.className="".concat(e.className),e.elements.mcPlayer.innerHTML='<div class="--mcp-background"></div>\n<div class="--mcp-context">\n    <div class="--mcp-pointer-events-panel"></div>\n    <div class="--mcp-listener-helper"></div>\n    <div class="--mcp-controls">\n        <div class="--mcp-grad"></div>\n        <div class="--mcp-progressbar">\n            <div class="--mcp-preview">\n                <div class="--mcp-prevent-point-events"></div>\n                <div class="--mcp-preview-host"> </div>\n                <div class="--mcp-preview-millisecond">00:00</div>\n            </div>\n            <div class="--mcp-totalbar">\n                <div class="--mcp-loopbar">\n                    <div class="--mcp-loopbar-color"></div>\n                    <div class="--mcp-loop-boundaries --mcp-loopbar-start">\n                    </div>\n                    <div class="--mcp-loop-boundaries --mcp-loopbar-end">\n                    </div>\n                    <div class="--mcp-runningbar">\n                        <div class="--mcp-cursor"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="--mcp-buttons">\n            <div class="--mcp-left-buttons">\n                <div class="--mcp-status">\n                    <span class="--mcp-btn --mcp-status-btn icon-play"></span>\n                    <span class="--mcp-indicator">i</span>\n                </div>\n                <div class="--mcp-volume">\n                    <div class="--mcp-btn --mcp-volume-btn icon-volume-on"></div>\n                    <div class="--mcp-volumebar">\n                        <div class="--mcp-volumebar-color">\n                            <div class="--mcp-volumebar-color-active">\n                                <div class="--mcp-volume-cursor"></div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class="--mcp-time-display">\n                    <span class="--mcp-time-current">00:00</span>\n                    <span class="--mcp-time-separator">/</span>\n                    <span class="--mcp-time-total">00:00</span>\n                </div>\n            </div>\n            <div class="--mcp-right-buttons">\n                <div class="--mcp-loop-btn-container">\n                    <div class="--mcp-btn --mcp-loop-btn icon-loop"></div>\n                </div>\n                <div class="--mcp-btn --mcp-settings-btn icon-settings"></div>\n                <div class="--mcp-btn --mcp-dc-btn icon-donkeyclip-logo"></div>\n                <div class="--mcp-btn --mcp-full-screen-btn icon-expand-full">\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="--mcp-settings-panel">\n        <ul class="--mcp-main-settings">\n            <li class="--mcp-settings-pointer-events">\n                <p>Pointer events</p>\n                <div>\n                    <div class="switch settings-switch">\n                        <input class="--mcp-show-pointer-events-checkbox" type="checkbox">\n                        <span class="slider round"></span>\n                    </div>\n                </div>\n            </li>\n            <li class="--mcp-settings-preview">\n                <p>Show preview</p>\n                <div>\n                    <div class="switch settings-switch">\n                        <input class="--mcp-show-preview-checkbox" type="checkbox">\n                        <span class="slider round"></span>\n                    </div>\n                </div>\n            </li>\n            <li class="--mcp-settings-indicator">\n                <p>Show indicator</p>\n                <div>\n                    <div class="switch settings-switch">\n                        <input class="--mcp-show-indicator-checkbox" type="checkbox">\n                        <span class="slider round"></span>\n                    </div>\n                </div>\n            </li>\n            <li class="--mcp-settings-volume">\n                <p>Show volume</p>\n                <div>\n                    <div class="switch settings-switch">\n                        <input class="--mcp-show-volume-checkbox" type="checkbox">\n                        <span class="slider round"></span>\n                    </div>\n                </div>\n            </li>\n            <li class="--mcp-settings-speed-show">\n                <p>Playback speed</p>\n                <div>\n                    <span class="--mcp-speed-current"></span>\n                    <div class="--mcp-btn --mcp-speed-btn --mcp-speed-btn-show icon-angle-right"></div>\n                </div>\n            </li>\n        </ul>\n        <ul class="--mcp-speed-settings">\n            <li class="--mcp-settings-speed-hide">\n                <div class="--mcp-btn --mcp-speed-btn --mcp-speed-btn-hide icon-angle-left"></div>\n                <p class="--mcp-speed-runtime">Playback speed</p>\n            </li>\n            <li class="--mcp-no-hover">\n                <ul class="--mcp-speed-values"></ul>\n            </li>\n        </ul>\n    </div>\n</div>',"string"==typeof e.options.host){var n=document.querySelectorAll(e.options.host);for(var i in n)isNaN(i)||n[i].appendChild(e.elements.mcPlayer)}else e.options.host.appendChild(e.elements.mcPlayer)},Nl=function(e){e.elements.volumeBarActive.style.width="".concat(100*e.settings.volume,"%"),e.elements.currentTime.innerHTML=e.timeFormat(0),e.elements.totalTime.innerHTML=e.timeFormat(e.clip.duration),e.elements.timeSeparator.innerHTML="/",e.elements.settingsPanel.classList.add("m-fadeOut","".concat(e.name,"-hide")),e.options.showIndicator?(e.elements.indicator.style.display=void 0,e.elements.statusButton.style.width="35px",e.elements.statusButton.style.height="20px",e.elements.statusButton.style.bottom="5px"):e.elements.indicator.style.display="none",e.elements.indicator.innerHTML=e.clip.runTimeInfo.state,e.elements.settingsSpeedPanel.style.display="none",e.elements.loopBarStart.style.left="0%",e.elements.loopBarStart.classList.add("m-fadeOut","".concat(e.name,"-hide")),e.elements.loopBarEnd.style.left="100%",e.elements.loopBarEnd.classList.add("m-fadeOut","".concat(e.name,"-hide")),e.elements.preview.classList.add("m-fadeOut"),e.elements.volumeCheckbox.checked=e.options.showVolume,e.elements.showIndicatorCheckbox.checked=e.options.showIndicator,e.elements.showPreviewCheckbox.checked=e.options.preview,e.elements.showPointerEventsCheckbox.checked=e.options.pointerEvents,e.options.pointerEvents?e.elements.pointerEventPanel.style.pointerEvents="none":e.elements.pointerEventPanel.style.pointerEvents="auto",e.options.showVolume||e.elements.volumeControl.classList.toggle("m-fadeOut")},$l=function(e){var t=function(t){if(0==e.options.speedValues[t])return"continue";var n="check-solid",i="--mcp-selected",r=Sl("li");r.className="--mcp-speed-value",r.dataset.speedValue=e.options.speedValues[t];var s=document.createElement("span");r.append(s);var o=Sl("p"),a=1==e.options.speedValues[t];o.innerHTML=a?"Normal":e.options.speedValues[t],o.dataset.zone=t,o.classList.add("--mcp-speed-value-item"),e.options.speedValues[t]==e.clip.speed&&(Ll(s,null,n),o.classList.add(i)),r.append(o),e.elements.speedBar.append(r),r.onclick=function(){e.options.speed=e.options.speedValues[t],e.clip.speed=e.options.speedValues[t];var r=1==e.clip.speed;e.elements.speedCurrent.innerHTML=r?"Normal":e.clip.speed,Ll(Il(e.elements.mcPlayer,"icon-check-solid"),n),Ll(s,null,n),Il(e.elements.mcPlayer,i).classList.remove(i),o.classList.add(i)}};for(var n in e.options.speedValues)t(n)},Hl=function(e){!1===e.options.buttons.fullScreen&&e.elements.fullScreenButton.remove(),!1===e.options.buttons.settings&&e.elements.settingsButton.remove(),e.options.buttons.donkeyclip||e.elements.donkeyclipButton.remove(),!1===e.options.buttons.loop&&e.elements.loopButton.remove()},Wl=function(e){e.elements.donkeyclipButton.addEventListener("click",(function(){var t,n=(t=(new Date).getTime(),"xxxxxxxx-xxxx".replace(/[xy]/g,(function(e){var n=(t+16*Math.random())%16|0;t=Math.floor(t/16);var i=Math.random()>.5,r=("x"==e?n:3&n|8).toString(16);return i?r.toUpperCase():r}))),i=window.open("https://donkeyclip.com?u=".concat(n)),r=e.clip.exportDefinition(),s=e.clipClass;window.addEventListener("message",(function(e){e.data===n&&i.postMessage(JSON.stringify({definition:r,clipClass:s,u:n}),"*")}),!1)}))},Gl="--mcp-force-show-controls",ql="playing",Jl="volume-off",Ul="volume-on",Kl='.--mc-player.theme-default {\n  --activeColor: 136, 136, 136;\n  --defaultColor: 136, 136, 136;\n  --backgroundColor: 245, 245, 245, 1;\n  --loopBarColor: rgba(var(--activeColor), 0.2);\n  --grad-display: none;\n}\n\n.--mc-player.theme-yellow {\n  --activeColor: 255, 235, 59;\n  --defaultColor: 153, 153, 153;\n  --backgroundColor: 20, 20, 22, 1;\n  --loopBarColor: rgba(var(--activeColor), 0.2);\n  --grad-display: none;\n}\n\n.--mc-player.theme-dark {\n  --activeColor: 136, 136, 136;\n  --defaultColor: 136, 136, 136;\n  --backgroundColor: 0, 0, 0, 1;\n  --loopBarColor: rgba(var(--activeColor), 0.2);\n  --grad-display: none;\n}\n\n.--mc-player.theme-whiteGold {\n  --activeColor: 161, 127, 26;\n  --defaultColor: 136, 136, 136;\n  --backgroundColor: 245, 245, 245, 1;\n  --loopBarColor: rgba(var(--activeColor), 0.2);\n  --grad-display: none;\n}\n\n.--mc-player.theme-darkGold {\n  --activeColor: 161, 127, 26;\n  --defaultColor: 136, 136, 136;\n  --backgroundColor: 0, 0, 0, 1;\n  --loopBarColor: rgba(var(--activeColor), 0.2);\n  --grad-display: none;\n}\n.--mc-player.theme-transparent {\n  --activeColor: 255, 0, 0;\n  --defaultColor: 239, 238, 236;\n  --backgroundColor: 0, 0, 0, 0;\n  --loopBarColor: rgba(var(--defaultColor), 0.2);\n  --grad-display: block;\n}\n\n.--mc-player.theme-green {\n  --activeColor: 0, 184, 139;\n  --defaultColor: 153, 153, 153;\n  --backgroundColor: 20, 20, 22, 1;\n  --loopBarColor: rgba(var(--activeColor), 0.2);\n  --grad-display: none;\n}\n.--mc-player.theme-blue {\n  --activeColor: 0, 153, 225;\n  --defaultColor: 153, 153, 153;\n  --backgroundColor: 20, 20, 22, 1;\n  --loopBarColor: rgba(var(--activeColor), 0.2);\n  --grad-display: none;\n}\n.--mc-player * {\n  color: rgb(var(--defaultColor));\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,\n    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  font-size: 13px;\n  cursor: default;\n  user-select: none;\n}\n.--mc-player svg {\n  width: 22px;\n}\n.--mcp-settings-panel svg {\n  width: 10px;\n}\n.--mc-player svg,\n.--mc-player svg * {\n  fill: rgb(var(--defaultColor)) !important;\n}\n\n.--mc-player {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  pointer-events: none;\n}\n\n.--mc-player * {\n  box-sizing: border-box;\n}\n\n.--mcp-background,\n.--mcp-context {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  pointer-events: none;\n}\n.--mcp-background {\n  background: black;\n  z-index: -1000;\n}\n\n.--mcp-pointer-events-panel {\n  width: 100%;\n  min-height: calc(100% - 44px);\n}\n\n.--mcp-pointer-events-panel.loading {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.8);\n}\n.--mcp-pointer-events-panel.loading svg {\n  animation: spin 4s linear infinite;\n}\n\n@keyframes spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.--mcp-grad {\n  display: var(--grad-display);\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  height: 200px;\n  z-index: 0;\n  pointer-events: none !important;\n  background-image: linear-gradient(\n    rgba(0, 0, 0, 00.001),\n    rgba(0, 0, 0, 00.004),\n    rgba(0, 0, 0, 00.007),\n    rgba(0, 0, 0, 00.01),\n    rgba(0, 0, 0, 0.04),\n    rgba(0, 0, 0, 0.07),\n    rgba(0, 0, 0, 0.1),\n    rgba(0, 0, 0, 0.15),\n    rgba(0, 0, 0, 0.2),\n    rgba(0, 0, 0, 0.25),\n    rgba(0, 0, 0, 0.3),\n    rgba(0, 0, 0, 0.35),\n    rgba(0, 0, 0, 0.4),\n    rgba(0, 0, 0, 0.45),\n    rgba(0, 0, 0, 0.5),\n    rgba(0, 0, 0, 0.55),\n    rgba(0, 0, 0, 0.6),\n    rgba(0, 0, 0, 0.65),\n    rgba(0, 0, 0, 0.7),\n    rgba(0, 0, 0, 0.75),\n    rgba(0, 0, 0, 0.8),\n    rgba(0, 0, 0, 0.88)\n  );\n}\n\n.--mc-player:hover .--mcp-controls {\n  opacity: 1 !important;\n}\n.--mcp-controls:active {\n  opacity: 1 !important;\n}\n.--mcp-controls {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  z-index: 1;\n  background: rgba(var(--backgroundColor));\n  height: 44px;\n  padding: 0 15px;\n  opacity: 0;\n  transition: all ease 0.2s;\n  pointer-events: auto;\n}\n.--mcp-force-show-controls {\n  opacity: 1 !important;\n}\n\n.--mcp-always-show-controls {\n  opacity: 1 !important;\n}\n\n.--mcp-progressbar {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.--mcp-totalbar,\n.--mcp-loopbar,\n.--mcp-runningbar {\n  position: relative;\n  height: 5px;\n}\n\n.--mcp-cursor {\n  width: 14px;\n  height: 14px;\n  background-color: rgb(var(--activeColor));\n  border-radius: 100%;\n  position: absolute;\n  top: -5px;\n  right: -8px;\n  z-index: 10;\n}\n\n.--mcp-totalbar {\n  min-width: 100%;\n  background-color: rgba(var(--defaultColor), 0.3);\n}\n\n.--mcp-loopbar {\n  width: 100%;\n  padding: 10px 0px;\n  top: -10px;\n  position: relative;\n}\n.--mcp-loopbar-color {\n  position: absolute;\n  left: 0px;\n  bottom: 5px;\n  background-color: var(--loopBarColor);\n  width: 100%;\n  height: 5px;\n}\n.--mcp-runningbar {\n  background-color: rgb(var(--activeColor));\n  width: 0px;\n}\n\n.--mcp-buttons,\n.--mcp-left-buttons,\n.--mcp-right-buttons,\n.--mcp-left-buttons > div,\n.--mcp-right-buttons > div {\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n\n.--mcp-buttons,\n.--mcp-left-buttons,\n.--mcp-right-buttons {\n  flex: 1;\n  height: 100%;\n  gap: 20px;\n}\n\n.--mcp-left-buttons {\n  justify-content: flex-start;\n}\n\n.--mcp-right-buttons {\n  justify-content: flex-end;\n}\n\n.--mcp-preview {\n  min-width: 100px;\n  min-height: 100px;\n  background-color: black;\n  position: absolute;\n  bottom: 50px;\n  border: 3px solid;\n  display: flex;\n  box-sizing: content-box;\n}\n.--mcp-prevent-point-events {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 100;\n}\n.--mcp-preview-host {\n  flex: 1;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n}\n\n.--mcp-preview-millisecond {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  bottom: -24px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.--mcp-loop-boundaries {\n  position: relative;\n}\n.--mcp-loop-boundaries:after {\n  content: "";\n  top: -4px;\n  left: -6px;\n  width: 13px;\n  height: 13px;\n  background-color: #aeaeae;\n  position: absolute;\n  border-radius: 100%;\n  z-index: 100;\n}\n.--mcp-loopbar-start {\n  left: -5px;\n}\n.--mcp-loopbar-end {\n  right: 5px;\n}\n.--mcp-loopbar,\n.--mcp-loopbar-color,\n.--mcp-runningbar,\n.--mcp-status-btn,\n.--mcp-loop-boundaries,\n.--mcp-cursor,\n.--mcp-btn,\n.--mcp-volume *,\n.--mc-player svg,\n.--mc-player svg * {\n  cursor: pointer;\n}\n.--mcp-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.--mcp-status-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 3px;\n}\n.--mcp-indicator {\n  font-size: 12px;\n}\n.--mcp-listener-helper {\n  pointer-events: none;\n}\n\n.--mcp-btn {\n  font-size: 20px;\n}\n\n.--mcp-volume-btn {\n  font-size: 15px;\n}\n.--mcp-volumebar {\n  width: 0;\n  padding-left: 0px;\n  padding-right: 0px;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all ease 0.2s;\n}\n.--mcp-volume {\n  height: 100%;\n}\n.--mcp-volume:hover {\n  padding-right: 10px;\n}\n.--mcp-volume:hover .--mcp-volumebar,\n.--mcp-volume:active .--mcp-volumebar {\n  width: 52px;\n  padding-left: 5px;\n}\n.--mcp-volume:hover .--mcp-volume-cursor,\n.--mcp-volume:active .--mcp-volume-cursor {\n  display: block;\n}\n\n.--mcp-btn::before {\n  color: var(--defaultColor) !important;\n}\n.--mcp-btn::before:hover {\n  filter: brightness(40);\n}\n.--mcp-settings-speed-hide {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n}\nul.--mcp-speed-values {\n  padding: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nul.--mcp-speed-values li {\n  width: 100%;\n}\nul.--mcp-speed-values li p {\n  width: 100%;\n}\n.--mcp-settings-panel ul {\n  list-style-type: none;\n  display: flex;\n  flex-direction: column;\n  padding: 5px 0px;\n  margin: 0px;\n  flex: 1;\n}\n\n.--mcp-settings-panel ul li {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  min-height: 40px;\n  padding: 0px 21px;\n}\n.--mcp-settings-panel ul li * {\n  cursor: pointer;\n}\n.--mcp-settings-panel ul li:not(.--mcp-no-hover):hover {\n  background-color: rgba(var(--activeColor), 0.2);\n}\n\n.--mcp-settings-panel ul li > div {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  width: 48px;\n  flex: 1;\n  gap: 10px;\n}\n\n.--mcp-settings-panel {\n  width: 251px;\n  position: absolute;\n  background-color: rgba(28, 28, 28, 0.9);\n  right: 15px;\n  bottom: 50px;\n  transition: all ease 0.2s;\n  z-index: 1000;\n  pointer-events: auto;\n}\n\n.--mcp-speed-values {\n  padding: 0px;\n}\n.--mcp-no-hover {\n  padding: 0px !important;\n}\n.--mcp-speed-value-item:not(.--mcp-selected) {\n  padding-left: 15px;\n}\n.--mcp-speed-value-item.--mcp-selected {\n  padding-left: 10px;\n}\n.--mcp-speed-value .icon-check-solid {\n  margin-left: -5px;\n}\n.--mcp-settings-panel ul.--mcp-speed-settings li > div {\n  justify-content: flex-start;\n  flex: unset;\n  width: 20px;\n}\n\n.--mcp-main-settings ul li > p {\n  display: flex;\n  align-items: center;\n  padding-left: 10px;\n  flex: 1;\n}\n\n/* \n\nSliders \n\n*/\n.--mc-player .switch {\n  position: relative;\n  display: inline-block;\n  width: 36px;\n  height: 14px;\n}\n\n.--mc-player .switch input {\n  display: none;\n}\n\n.--mc-player .settings-switch::after {\n  clear: both;\n}\n\n.--mc-player .slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #999;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.--mc-player .slider:before {\n  position: absolute;\n  content: "";\n  height: 20px;\n  width: 20px;\n  left: 0px;\n  bottom: -3px;\n  background-color: #cfcfcf;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.--mc-player input:checked + .slider {\n  background-color: rgb(var(--activeColor));\n}\n.--mc-player input:checked + .slider:before {\n  background-color: white;\n}\n\n.--mc-player input:focus + .slider {\n  box-shadow: 0 0 1px rgb(var(--activeColor));\n}\n\n.--mc-player input:checked + .slider:before {\n  -webkit-transform: translateX(16px);\n  -ms-transform: translateX(16px);\n  transform: translateX(16px);\n}\n\n.--mc-player .slider.round {\n  border-radius: 34px;\n}\n\n.--mc-player .slider.round:before {\n  border-radius: 50%;\n}\n\n.--mc-player .m-fadeOut {\n  visibility: hidden !important;\n  opacity: 0 !important;\n  display: none !important;\n}\n\n.--mc-player .m-fadeIn {\n  display: unset;\n  visibility: visible !important;\n  opacity: 1 !important;\n}\n\n.--mcp-volume-cursor {\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  background-color: rgb(var(--defaultColor));\n  right: -8px;\n  border-radius: 100%;\n  display: none;\n}\n.--mcp-volumebar-color {\n  width: 100%;\n  height: 3px;\n  background-color: rgba(var(--defaultColor), 0.3);\n}\n.--mcp-volumebar-color-active {\n  width: 100%;\n  height: 100%;\n  background-color: rgb(var(--defaultColor));\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n';function Xl(e){var t=e.clip.props.host.className.includes("full-screen");e.clip.props.host!==e.options.host&&(t?e.options.host.appendChild(e.elements.mcPlayer):e.clip.props.host.appendChild(e.elements.mcPlayer)),t?e.exitFullscreen():e.launchIntoFullscreen(e.clip.props.host)}function Ql(e){e.settings.loopActivated=!e.settings.loopActivated,e.eventBroadcast(fl,e.settings.loopActivated),e.elements.loopButton.classList.toggle("svg-selected"),e.elements.loopBarStart.classList.toggle("m-fadeOut"),e.elements.loopBarEnd.classList.toggle("m-fadeOut"),e.elements.loopBarStart.classList.toggle("m-fadeIn"),e.elements.loopBarStart.classList.toggle("".concat(e.name,"-hide")),e.elements.loopBarEnd.classList.toggle("m-fadeIn"),e.elements.loopBarEnd.classList.toggle("".concat(e.name,"-hide")),e.settings.needsUpdate=!0,e.settings.loopActivated||(e.elements.loopBar.style.left="0%",e.elements.loopBar.style.width="100%",e.settings.loopStartMillisecond=0,e.settings.loopEndMillisecond=e.clip.duration,e.settings.loopLastPositionXPxls=0,e.settings.loopLastPositionXPercentage=0,e.elements.runningBar.style.width=e.clip.runTimeInfo.currentMillisecond/e.clip.duration*100+"%")}var Zl=function(e){if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){var t=Yl(e),n=t.loopBarMouseIn,i=t.loopBarMouseOut,r=t.loopBarAddListeners,s=t.loopBarMouseMove;e.elements.loopBar.onmouseover=n,e.elements.loopBar.onmouseout=i,e.elements.loopBar.onmousedown=function(){e.options.preview&&(e.elements.loopBar.onmouseover=e.elements.loopBar.onmouseout=null,e.elements.loopBar.onmousemove=null,Bl(r,s))},e.elements.loopBar.onmouseup=function(){e.options.preview&&(_l(r,s),e.elements.loopBar.onmouseover=n,e.elements.loopBar.onmouseout=i,e.elements.loopBar.onmousemove=s)}}},Yl=function(e){var t=function(){e.options.preview&&(e.elements.preview.classList.add("m-fadeIn"),e.elements.preview.classList.remove("m-fadeOut"),e.elements.loopBar.onmousemove=i)},n=function(){e.options.preview&&(e.elements.preview.classList.remove("m-fadeIn"),e.elements.preview.classList.add("m-fadeOut"),e.elements.loopBar.onmousemove=i)},i=function(t){var n=t.clientX,i=e.elements.loopBar.getBoundingClientRect();if(n-i.left+e.settings.loopLastPositionXPxls>e.settings.loopLastPositionXPxls+e.elements.loopBar.offsetWidth&&!e.settings.resizeLoop)e.elements.previewMillisecond.innerHTML=e.timeFormat(e.settings.loopEndMillisecond);else if(n-i.left<0&&!e.settings.resizeLoop)e.elements.previewMillisecond.innerHTML=e.timeFormat(e.settings.loopStartMillisecond);else{var r=n-i.left+e.settings.loopLastPositionXPxls;r<0&&(r=0);var s=e.elements.preview.offsetWidth/2,o=e.elements.preview.offsetWidth/2,a=r-o;r-s<0?a=0:r+s>e.elements.totalBar.offsetWidth&&(a=e.elements.totalBar.offsetWidth-o-s);var l=Math.round(r/e.elements.totalBar.offsetWidth*e.clip.duration);if(e.options.preview){var c=l/e.clip.duration;e.previewClip.onProgress(c,l)}e.elements.previewMillisecond.innerHTML=e.timeFormat(l),e.elements.preview.style.left="".concat(a,"px")}};return{loopBarMouseIn:t,loopBarMouseOut:n,loopBarAddListeners:function r(){e.options.preview&&(n(),e.elements.loopBar.onmouseover=t,e.elements.loopBar.onmouseout=n,e.elements.loopBar.onmousemove=i,_l(r,i))},loopBarMouseMove:i}},ec=function(e){e.elements.showIndicatorCheckbox.checked?(e.elements.showIndicatorCheckbox.checked=!1,e.elements.indicator.style.display="none"):(e.elements.showIndicatorCheckbox.checked=!0,e.elements.indicator.style.display=void 0),e.eventBroadcast("show-indicator-change",e.elements.showIndicatorCheckbox.checked)},tc=function(e){e.elements.showPointerEventsCheckbox.checked?(e.elements.showPointerEventsCheckbox.checked=!1,e.elements.mcPlayer.style.pointerEvents="none",e.elements.pointerEventPanel.style.pointerEvents="auto",e.elements.controls.style.pointerEvents="auto",e.elements.settingsPanel.style.pointerEvents="auto"):(e.elements.showPointerEventsCheckbox.checked=!0,e.options.pointerEvents=!1,e.elements.mcPlayer.style.pointerEvents="none",e.elements.pointerEventPanel.style.pointerEvents="none",e.elements.controls.style.pointerEvents="auto",e.elements.settingsPanel.style.pointerEvents="auto"),e.eventBroadcast("show-pointer-events-change",e.elements.showPointerEventsCheckbox.checked)},nc=function(e){e.elements.volumeControl.classList.toggle("m-fadeOut"),e.elements.showVolumeCheckbox.checked?e.elements.showVolumeCheckbox.checked=!1:e.elements.showVolumeCheckbox.checked=!0,e.eventBroadcast(vl,e.elements.showVolumeCheckbox.checked)},ic=function(e){e.elements.showPreviewCheckbox.checked?(e.elements.showPreviewCheckbox.checked=!1,e.elements.preview.style.display="none",e.elements.preview.style.display="unset",e.options.preview=!1):(e.previewClip||e.createPreviewDisplay(),e.elements.showPreviewCheckbox.checked=!0,e.elements.preview.style.display="flex",e.options.preview=!0),e.eventBroadcast(yl,e.elements.showPreviewCheckbox.checked)};function rc(e,t){"showIndicator"===t?ec(e):"showPointerEvents"===t?tc(e):"showVolume"===t?nc(e):"showPreview"===t&&ic(e)}function sc(e,t,i){var r=e.elements;void 0!==n(i)&&(!1===i?(r.volumeBarActive.style.width="".concat(100*e.settings.volume,"%"),e.clip.setVolume(e.settings.previousVolume),e.settings.volumeMute=!1,Ll(r.volumeBtn,Jl,Ul)):!0===i&&(e.settings.volumeMute=!0,r.volumeBarActive.style.width="0%",e.clip.setVolume(0),Ll(r.volumeBtn,Ul,Jl)),e.options.muted=e.settings.volumeMute,e.eventBroadcast(hl,e.settings.volumeMute)),void 0!==n(t)&&(e.settings.volume=t,e.settings.volume>0&&(e.settings.previousVolume=t),r.volumeBarActive.style.width="".concat(100*e.settings.volume,"%"),e.clip.setVolume(e.settings.volume),e.settings.volume>0?(e.settings.volumeMute=!1,Ll(r.volumeBtn,Jl,Ul)):0===e.settings.volume&&(e.settings.volumeMute=!0,Ll(r.volumeBtn,Jl,Ul)),e.options.volume=e.settings.volume,e.eventBroadcast(pl,e.settings.volume),e.eventBroadcast(hl,e.settings.volumeMute))}var oc=new ol,ac=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=this.initializeOptions(t),this.className=ul,this.id=this.options.id,this.name=ul,this.previewClip=null,this.clip=t.clip,this.clipClass=t.clipClass,this.state=this.clip.runTimeInfo.state,this.listeners={},this.previewScale=.25,this.settings={volume:1,journey:null,previousVolume:1,volumeMute:!1,needsUpdate:!0,resizeLoop:!1,loopJourney:!1,previewJourney:null,loopActivated:!1,requestingLoop:!1,playAfterResize:!1,loopStartMillisecond:0,loopLastPositionXPxls:0,loopLastPositionXPercentage:0,loopEndMillisecond:this.clip.duration,controls:!0},zl(this),this.setTheme(),this.setSpeed(),this.subscribeToTimer(),this.subscribeToDurationChange(),this.addEventListeners(),this.scaleClipHost(),this.eventBroadcast(gl,this.state),this.options.preview&&this.createPreviewDisplay();var i=new ResizeObserver((function(){n.options.preview&&n.setPreviewDimentions(),n.options.scaleToFit&&n.scaleClipHost()}));this.changeSettings(t,!0),i.observe(this.options.host),this.options.autoPlay&&this.play()}var n,r,s;return n=e,r=[{key:"initializeOptions",value:function(e){var t,n,i,r,s,o,a,l,c,u,p,h,d,f,m,v,y,g,b,k,w,x;for(var C in null!==(t=e.id)&&void 0!==t||(e.id=Date.now()),null!==(n=e.preview)&&void 0!==n||(e.preview=!1),null!==(i=e.showVolume)&&void 0!==i||(e.showVolume=Object.keys((null===(r=e.clip)||void 0===r||null===(s=r.audioClip)||void 0===s?void 0:s.children)||[]).length||!1),null!==(o=e.showIndicator)&&void 0!==o||(e.showIndicator=!1),null!==(a=e.theme)&&void 0!==a||(e.theme="transparent position-ontop"),null!==(l=e.host)&&void 0!==l||(e.host=e.clip.props.host),null!==(c=e.buttons)&&void 0!==c||(e.buttons={}),null!==(u=e.timeFormat)&&void 0!==u||(e.timeFormat="ss"),null!==(p=e.backgroundColor)&&void 0!==p||(e.backgroundColor="black"),null!==(h=e.fullscreen)&&void 0!==h||(e.fullscreen=!1),null!==(d=e.scaleToFit)&&void 0!==d||(e.scaleToFit=!0),null!==(f=e.pointerEvents)&&void 0!==f||(e.pointerEvents=!1),null!==(m=e.onMillisecondChange)&&void 0!==m||(e.onMillisecondChange=null),null!==(v=e.speedValues)&&void 0!==v||(e.speedValues=[-2,-1,-.5,0,.5,1,2]),null!==(y=e.speed)&&void 0!==y||(e.speed=1),null!==(g=e.muted)&&void 0!==g||(e.muted=!1),null!==(b=e.controls)&&void 0!==b||(e.controls=!0),null!==(k=e.loop)&&void 0!==k||(e.loop=!1),null!==(w=e.volume)&&void 0!==w||(e.volume=1),null!==(x=e.currentScript)&&void 0!==x||(e.currentScript=null),e.millisecond&&this.createJourney(e.millisecond,{},this.clip||e.clip),e.speedValues)isFinite(e.speedValues[C])||e.speedValues.splice(C,1);return e.speedValues.sort((function(e,t){return e-t})),e}},{key:"play",value:function(){this.clip.play()}},{key:"pause",value:function(){this.clip.pause()}},{key:"changeSettings",value:function(e,n){var i=this;(e=this.initializeOptions(t(t({},this.options),e))).clip!==this.options.clip&&(n=!0,this.clip=e.clip,this.options.clip=e.clip),!1===e.controls?this.elements.mcPlayer.style.display="none":!0===e.controls&&(this.elements.mcPlayer.style.display="block");var r={loop:function(){return Ql(i)},fullscreen:function(){return Xl(i)},muted:function(){return sc(i,void 0,e.mute)},volume:function(){return sc(i,e.volume)},speed:function(){return function(e,t){t=parseFloat(t)||1,e.eventBroadcast(dl,t);var n=1==t?"Normal":t;e.clip.executionSpeed=t,e.elements.speedCurrent.innerHTML=n}(i,e.speed)},scaleToFit:function(){i.options.scaleToFit=e.scaleToFit,i.scaleClipHost()},showVolume:function(){return rc(i,"showVolume")},preview:function(){return rc(i,"showPreview")},theme:function(){i.options.theme=e.theme,i.setTheme()},overflow:function(){i.clip.props.host.shadowRoot.children[0].style.overflow=e.overflow},outline:function(){i.clip.props.host.shadowRoot.children[0].style.outline=e.outline},visible:function(){"always"==e.visible?i.elements.controls.classList.add("--mcp-always-show-controls"):"normal"==e.visible&&i.elements.controls.classList.remove("--mcp-always-show-controls")}},s=["fullscreen","muted","volume","speed","scaleToFit","loop","overflow","outline","visible"];for(var o in r)void 0!==e[o]&&(this.options[o]!==e[o]||n&&this.options[o]&&s.includes(o))&&r[o]();this.options=t(t({},this.options),e)}},{key:"scaleClipHost",value:function(){if(this.options.scaleToFit){var e=this.clip.props.containerParams,t=jl({width:e.width,height:e.height},{width:this.clip.props.host.offsetWidth,height:this.clip.props.host.offsetHeight-("always"==this.options.visible?44:0)},"cover"===this.options.scaleToFit);this.clip.realClip.rootElement.style.transform="scale(".concat(t.scale),this.clip.realClip.rootElement.style.left="".concat(t.position.left,"px"),this.clip.realClip.rootElement.style.top="".concat(t.position.top,"px")}else this.clip.realClip.rootElement.style.transform="scale(1)",this.clip.realClip.rootElement.style.left="0px",this.clip.realClip.rootElement.style.top="0px";this.eventBroadcast(ml,this.options.scaleToFit)}},{key:"createLoop",value:function(e,t){this.settings.loopStartMillisecond=e,this.settings.loopEndMillisecond=t,this.elements.loopBar.style.left="".concat(e/this.clip.duration*100,"%"),this.elements.loopBar.style.width="".concat((t-e)/this.clip.duration*100,"%"),this.createJourney(e),this.elements.runningBar.style.width="0%",!this.settings.loopActivated&&Ql(this)}},{key:"createJourney",value:function(e){var t,n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;null!==(t=r)&&void 0!==t||(r=this.clip),setTimeout((function(){if(r.id){var t=i.before,s=void 0===t?null:t,o=i.after,a=void 0===o?null:o;s&&r[s](),n.settings.journey=oc.startJourney(r),n.settings.journey.station(e),n.settings.journey.destination(),a&&r[a]()}}),0)}},{key:"millisecondChange",value:function(e,t,n,i){var r=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];if(this.state!==t&&(this.state=t,this.eventBroadcast(gl,t)),!this.settings.needsUpdate)return this.clip.pause(),1;var s=this.settings.loopActivated;s&&this.clip.speed&&this.calculateJourney(e);var o=this.clip.duration,a=this.elements,l=a.totalBar,c=a.loopBar,u=c.offsetWidth,p=c.offsetLeft/l.offsetWidth,h=e-o*p,d=o/l.offsetWidth*u;i&&this.createJourney(e,{after:this.settings.playAfterResize?"play":null}),this.elements.runningBar.style.width=h/d*100+"%",this.elements.currentTime.innerHTML=this.timeFormat(e),this.options.onMillisecondChange&&r&&this.options.onMillisecondChange(e)}},{key:"calculateJourney",value:function(e){var t=this.settings,n=t.loopEndMillisecond,i=t.loopStartMillisecond,r=e>n||e===this.clip.duration,s=e<i||0===e,o=this.clip.speed>0;if(this.clip.runTimeInfo.state===ql)if(o){if(r)return this.createJourney(i+1,{after:"play"}),!0}else if(s)return this.createJourney(n-1,{after:"play"}),!0;return!1}},{key:"broadcastNotPlaying",value:function(e){this.elements.controls.classList.value.includes(Gl)||this.elements.controls.classList.toggle(Gl),Ll(this.elements.statusButton,"pause","play"),this.elements.indicator.innerHTML="".concat(e.charAt(0).toUpperCase()+e.slice(1)),"blocked"==e?this.addSpinner():this.removeSpinner()}},{key:"changeInitParams",value:function(e){this.clip.pause();var t=this.clip.exportLiveDefinition();for(var n in t.props.host=this.clip.props.host,t.props.initParams=e,this.clip.realClip.context.unmount(),this.clip)delete this.clip[n];this.clip=ll.clipFromDefinition(t),this.options.clip=this.clip,this.initializeOptions(this.options),this.subscribeToTimer(),this.subscribeToDurationChange()}},{key:"addSpinner",value:function(){Ll(this.elements.pointerEventPanel,null,"spinner"),this.elements.pointerEventPanel.classList.add("loading")}},{key:"removeSpinner",value:function(){Ll(this.elements.pointerEventPanel,"spinner",null),this.elements.pointerEventPanel.classList.remove("loading")}},{key:"broadcastPlaying",value:function(e){this.removeSpinner(),this.elements.controls.classList.value.includes(Gl)&&this.elements.controls.classList.toggle(Gl),this.elements.indicator.innerHTML="Playing",Ll(this.elements.statusButton,"play","pause"),e===ql&&(this.clip.runTimeInfo.currentMillisecond===this.clip.duration&&this.clip.speed>=0?this.createJourney(1,{after:"play"}):(this.clip.runTimeInfo.currentMillisecond===this.clip.duration||0===this.clip.runTimeInfo.currentMillisecond)&&this.clip.speed<0&&this.createJourney(this.clip.duration-1,{after:"play"}))}},{key:"broadcastDurationChange",value:function(){this.elements.totalTime.innerHTML=this.timeFormat(this.clip.duration),this.settings.loopEndMillisecond=this.clip.duration,this.elements.pointerEventPanel.innerHTML="",this.millisecondChange(this.clip.runTimeInfo.currentMillisecond)}},{key:"broadcastVolumeChange",value:function(e){this.options.volume=e,this.options.currentScript.dataset.volume=e}},{key:"broadcastSpeedChange",value:function(e){this.options.speed=e,this.options.currentScript.dataset.speed=e}},{key:"broadcastMuteChange",value:function(e){e?(this.options.muted=!0,this.options.currentScript.dataset.muted=""):(this.options.muted=!1,delete this.options.currentScript.dataset.muted)}},{key:"broadcastLoopChange",value:function(e){e?(this.options.loop=!0,this.options.currentScript.dataset.loop=""):(this.options.loop=!1,delete this.options.currentScript.dataset.loop)}},{key:"broadcastScaleChange",value:function(e){e?(this.options.scaleToFit=!0,this.options.currentScript.dataset.scaleToFit=""):(this.options.scaleToFit=!1,delete this.options.currentScript.dataset.scaleToFit)}},{key:"broadcastShowVolumeChange",value:function(e){e?(this.options.showVolume=!0,this.options.currentScript.dataset.showVolume=""):(this.options.showVolume=!1,delete this.options.currentScript.dataset.showVolume)}},{key:"broadcastShowPreviewChange",value:function(e){e?(this.options.preview=!0,this.options.currentScript.dataset.preview=""):(this.options.preview=!1,delete this.options.currentScript.dataset.preview)}},{key:"broadcastToScript",value:function(e,t){e===pl?this.broadcastVolumeChange(t):e===dl?this.broadcastSpeedChange(t):e===hl?this.broadcastMuteChange(t):e===fl?this.broadcastLoopChange(t):e===ml?this.broadcastScaleChange(t):e===vl?this.broadcastShowVolumeChange(t):e===yl&&this.broadcastShowPreviewChange(t)}},{key:"eventBroadcast",value:function(e,t){e===gl?(this.options.currentScript&&(this.options.currentScript.dataset.status=t),["paused","idle","transitional","armed","blocked"].includes(t)?this.broadcastNotPlaying(t):this.broadcastPlaying(t)):e===bl?this.broadcastDurationChange():this.options.currentScript&&this.broadcastToScript(e,t)}},{key:"subscribeToDurationChange",value:function(){this.clip.subscribeToDurationChange(this.subscribeToDurationChangeCallback.bind(this))}},{key:"subscribeToDurationChangeCallback",value:function(){this.eventBroadcast(bl)}},{key:"subscribeToTimer",value:function(){this.clip.subscribe(this.id,this.millisecondChange.bind(this))}},{key:"handleDragStart",value:function(){this.settings.needsUpdate=!0,this.settings.journey=oc.startJourney(this.clip)}},{key:"timeFormat",value:function(e){if("ss"===this.options.timeFormat){var t=e/1e3/60/60,n=t%1*60,i=n%1*60,r=("0"+parseInt(t)).slice(-2),s=("0"+parseInt(n)).slice(-2),o=("0"+parseInt(i)).slice(-2);return"".concat("00"===r?"":r+":").concat(s,":").concat(o)}return e}},{key:"handleDrag",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];isFinite(e)||(e=0);var n=this.clip.duration,i=this.settings.journey,r=this.elements,s=r.loopBar,o=r.totalBar,a=r.runningBar,l=r.currentTime,c=e+s.offsetLeft,u=Math.round(n*c/o.offsetWidth);l.innerHTML=this.timeFormat(u),a.style.width=e/s.offsetWidth*100+"%",i.station(u),this.options.onMillisecondChange&&t&&this.options.onMillisecondChange(u)}},{key:"handleDragEnd",value:function(){this.settings.journey.destination()}},{key:"createProgressDrag",value:function(e){this.handleDragStart(),this.handleDrag(e),this.handleDragEnd()}},{key:"addEventListeners",value:function(){var e;(e=this).listeners.onCursorMoveLoopEnd=function(t){var n=(t.clientX||((t.touches||[])[0]||{}).clientX)-e.elements.totalBar.getBoundingClientRect().left;n<0?n=0:n>e.elements.totalBar.offsetWidth&&(n=e.elements.totalBar.offsetWidth),e.elements.runningBar.offsetWidth>=e.elements.loopBar.offsetWidth&&(e.elements.runningBar.style.width=e.elements.loopBar.offsetWidth+"px"),e.settings.loopLastPositionXPxls-n<0?e.elements.loopBar.style.width=Math.abs(e.settings.loopLastPositionXPxls-n)+"px":(e.elements.loopBar.style.left=n+"px",e.settings.loopLastPositionXPxls=n),e.settings.loopEndMillisecond=Math.round(e.clip.duration*((parseFloat(e.elements.loopBar.style.left)||0)+parseFloat(e.elements.loopBar.style.width))/e.elements.totalBar.offsetWidth),e.settings.loopEndMillisecond<e.clip.runTimeInfo.currentMillisecond&&(e.settings.loopJourney=!0),e.settings.loopStartMillisecond>e.settings.loopEndMillisecond&&(e.settings.loopStartMillisecond=e.settings.loopEndMillisecond,e.settings.loopJourney=!0)},e.listeners.onMouseUpLoopEnd=function(){e.elements.listenerHelper.style.pointerEvents="none",e.settings.resizeLoop=!1;var t,n=e.elements,i=n.loopBar,r=n.totalBar,s=n.runningBar;s.style.width=s.offsetWidth/i.offsetWidth*100+"%",i.style.left="".concat(i.offsetLeft/r.offsetWidth*100,"%"),i.style.width="".concat(i.offsetWidth/r.offsetWidth*100,"%"),e.settings.loopJourney&&(e.createProgressDrag(s.offsetWidth),e.settings.loopJourney=!1),_l(e.listeners.onMouseUpLoopEnd,e.listeners.onCursorMoveLoopEnd),Vl(e.listeners.onMouseDown,i,!0),e.settings.playAfterResize&&("idle"===e.clip.runTimeInfo.state||"completed"===e.clip.runTimeInfo.state?(t=e.clip.speed>=0?e.settings.loopStartMillisecond+1:e.settings.loopEndMillisecond-1,e.settings.needsUpdate=!0,e.createJourney(t,{before:"pause",after:"play"})):e.clip.play(),e.settings.playAfterResize=!1)},e.listeners.onMouseDownLoopEnd=function(t){e.elements.listenerHelper.style.pointerEvents="auto",e.settings.resizeLoop=!0,e.settings.needsUpdate=!0,"playing"===e.clip.runTimeInfo.state&&(e.clip.pause(),e.settings.playAfterResize=!0),e.elements.runningBar.style.width="".concat(e.elements.runningBar.offsetWidth,"px");var n=e.elements.loopBar;n.style.left="".concat(n.offsetLeft,"px"),n.style.width="".concat(n.offsetWidth,"px"),Rl(e.listeners.onMouseDown,n),e.listeners.onCursorMoveLoopEnd(t),Bl(e.listeners.onMouseUpLoopEnd,e.listeners.onCursorMoveLoopEnd)},Vl(e.listeners.onMouseDownLoopEnd,e.elements.loopBarEnd,!1),function(e){e.listeners.onCursorMove=function(t){var n=(t.clientX||((t.touches||[])[0]||{}).clientX)-e.elements.loopBar.getBoundingClientRect().left;n<0?n=0:n>e.elements.loopBar.offsetWidth&&(n=e.elements.loopBar.offsetWidth),e.handleDrag(n)},e.listeners.onMouseUp=function(){e.elements.listenerHelper.style.pointerEvents="none",_l(e.listeners.onMouseUp,e.listeners.onCursorMove),e.handleDragEnd(e.settings)},e.listeners.onMouseDown=function(t){e.elements.listenerHelper.style.pointerEvents="auto","playing"===e.clip.runTimeInfo.state&&(e.settings.playAfterResize=!0),e.handleDragStart(e.clip),e.listeners.onCursorMove(t),Bl(e.listeners.onMouseUp,e.listeners.onCursorMove)},Vl(e.listeners.onMouseDown,e.elements.loopBar)}(this),function(e){e.listeners.onCursorMoveLoopStart=function(t){var n=t.clientX||((t.touches||[])[0]||{}).clientX,i=e.elements.totalBar.getBoundingClientRect(),r=Math.round(n-i.left),s=Math.round(e.settings.loopEndMillisecond/e.clip.duration*e.elements.totalBar.offsetWidth);r<0?r=0:r>e.elements.totalBar.offsetWidth&&(r=e.elements.totalBar.offsetWidth);var o=e.clip.runTimeInfo.currentMillisecond/e.clip.duration*e.elements.totalBar.offsetWidth-r;e.elements.loopBar.style.left=r+"px",e.elements.loopBar.style.width=s-r+"px",e.elements.runningBar.style.width=o+"px",e.settings.loopLastPositionXPxls=r,e.settings.loopStartMillisecond=Math.round(e.clip.duration*e.elements.loopBar.offsetLeft/e.elements.totalBar.offsetWidth),e.settings.loopEndMillisecond<e.settings.loopStartMillisecond&&(e.settings.loopEndMillisecond=e.settings.loopStartMillisecond,e.elements.loopBar.style.width="0px",e.elements.runningBar.style.width="0px"),e.settings.loopStartMillisecond>e.clip.runTimeInfo.currentMillisecond&&(e.settings.loopJourney=!0)},e.listeners.onMouseUpLoopStart=function(){var t;e.elements.listenerHelper.style.pointerEvents="none",e.settings.resizeLoop=!1,e.settings.loopJourney&&(e.createProgressDrag(e.elements.runningBar.offsetWidth),e.settings.loopJourney=!1),e.elements.loopBar.style.left=e.elements.loopBar.offsetLeft/e.elements.totalBar.offsetWidth*100+"%",e.elements.loopBar.style.width=e.elements.loopBar.offsetWidth/e.elements.totalBar.offsetWidth*100+"%",e.settings.loopStartMillisecond=Math.round(e.clip.duration*e.elements.loopBar.offsetLeft/e.elements.totalBar.offsetWidth),e.elements.runningBar.style.width=e.elements.runningBar.offsetWidth/e.elements.loopBar.offsetWidth*100+"%",_l(e.listeners.onMouseUpLoopStart,e.listeners.onCursorMoveLoopStart),Vl(e.listeners.onMouseDown,e.elements.loopBar,!0),e.settings.playAfterResize&&("idle"===e.clip.runTimeInfo.state?(t=e.clip.speed>=0?e.settings.loopStartMillisecond+1:e.settings.loopEndMillisecond-1,e.settings.needsUpdate=!0,e.createJourney(t,{before:"pause",after:"play"})):e.clip.play(),e.settings.playAfterResize=!1)},e.listeners.onMouseDownLoopStart=function(t){e.elements.listenerHelper.style.pointerEvents="auto",e.settings.resizeLoop=!0,e.settings.needsUpdate=!0,"playing"===e.clip.runTimeInfo.state&&(e.clip.pause(),e.settings.playAfterResize=!0),Rl(e.listeners.onMouseDown,e.elements.loopBar),e.listeners.onCursorMoveLoopStart(t),Bl(e.listeners.onMouseUpLoopStart,e.listeners.onCursorMoveLoopStart)},Vl(e.listeners.onMouseDownLoopStart,e.elements.loopBarStart)}(this),function(e){var t=e.elements,n=!1;t.volumeBtn.onclick=function(){e.settings.volumeMute?(t.volumeBarActive.style.width="".concat(100*e.settings.volume,"%"),e.clip.setVolume(e.settings.previousVolume),t.volumeBarActive.style.width="".concat(100*e.settings.previousVolume,"%"),e.settings.volumeMute=!1,Ll(t.volumeBtn,Jl,Ul)):(e.settings.volumeMute=!0,Ll(t.volumeBtn,Ul,Jl),t.volumeBarActive.style.width="0%",e.clip.setVolume(0)),e.eventBroadcast(pl,e.settings.previousVolume),e.eventBroadcast(hl,e.settings.volumeMute)};var i=!1;t.volumeBtn.onmouseover=function(){i=!0},e.elements.leftButtons.onmouseout=function(){if(i&&!n){var t=event.toElement||event.relatedTarget||event.target;t===e.elements.leftButtons||function(e,t){for(var n=t.parentNode;null!=n;){if(n==e)return!0;n=n.parentNode}return!1}(e.elements.leftButtons,t)||(i=!1)}};var r=e.listeners;r.onCursorMoveVolumeBar=function(n){var i=(n.clientX||((n.touches||[])[0]||{}).clientX)-t.volumeBarHelper.getBoundingClientRect().left;if(i<0?i=0:i>t.volumeBarHelper.offsetWidth&&(i=t.volumeBarHelper.offsetWidth),e.settings.volume=Number((i/t.volumeBarHelper.offsetWidth).toFixed(2)),t.volumeBarActive.style.width="".concat(100*e.settings.volume,"%"),e.clip.setVolume(e.settings.volume),e.settings.volume>=0){var r=0===e.settings.volume;e.settings.volumeMute=r,r?Ll(t.volumeBtn,Ul,Jl):Ll(t.volumeBtn,Jl,Ul)}e.eventBroadcast(pl,e.settings.volume),e.eventBroadcast(hl,e.settings.volumeMute)},r.onMouseUpVolumeBar=function(){n=!1,t.listenerHelper.style.pointerEvents="none",e.settings.volume>0&&(e.settings.previousVolume=e.settings.volume),_l(r.onMouseUpVolumeBar,r.onCursorMoveVolumeBar)},r.onMouseDownVolumeBar=function(e){n=!0,t.listenerHelper.style.pointerEvents="auto",r.onCursorMoveVolumeBar(e),Bl(r.onMouseUpVolumeBar,r.onCursorMoveVolumeBar)},Vl(r.onMouseDownVolumeBar,t.volumeBarHelper),Vl(r.onMouseDownVolumeBar,t.volumeCursor)}(this),function(e){e.elements.statusButton.onclick=function(){switch(e.clip.runTimeInfo.state){case"playing":e.clip.pause();break;case"paused":case"idle":case"transitional":case"armed":e.clip.play()}return!1}}(this),function(e){e.elements.settingsShowIndicator.onclick=function(){return ec(e)},e.elements.settingsPointerEvents.onclick=function(){return tc(e)},e.elements.settingsShowVolume.onclick=function(){return nc(e)},e.elements.settingsShowPreview.onclick=function(){return ic(e)},e.elements.settingsButton.onclick=function(){var t=function t(n){if(e.elements.settingsPanel.contains(n.target))return!0;e.elements.settingsPanel.classList.toggle("".concat(e.name,"-hide")),e.elements.settingsPanel.classList.toggle("m-fadeOut"),e.elements.settingsPanel.classList.toggle("m-fadeIn"),e.elements.settingsPanel.className.includes("m-fadeOut")&&(Al("click",t,!1),e.eventBroadcast(gl,e.state))};e.elements.settingsPanel.className.includes("m-fadeOut")?(e.elements.controls.classList.value.includes("--mcp-force-show-controls")||e.elements.controls.classList.toggle("--mcp-force-show-controls"),Dl("click",t,!1)):Al("click",t,!1)}}(this),function(e){e.elements.settingsSpeedButtonShow.onclick=e.elements.settingsSpeedButtonHide.onclick=function(){e.elements.settingsPanel.classList.toggle("".concat(e.name,"-settings-speed-panel")),e.elements.settingsPanel.className.includes("".concat(e.name,"-settings-speed-panel"))?(e.elements.settingsMainPanel.style.display="none",e.elements.settingsSpeedPanel.style.display="block"):(e.elements.settingsSpeedPanel.style.display="none",e.elements.settingsMainPanel.style.display="block")}}(this),function(e){e.elements.loopButton.onclick=function(){return Ql(e)}}(this),function(e){e.elements.fullScreenButton.onclick=function(){return Xl(e)}}(this),Wl(this),Zl(this),function(e){function t(){e.elements.mcPlayer.classList.toggle("full-screen"),e.clip.props.host.classList.toggle("full-screen"),e.options.preview&&e.setPreviewDimentions()}Dl("fullscreenchange",t),Dl("webkitfullscreenchange",t),Dl("mozfullscreenchange",t),Dl("MSFullscreenChange",t)}(this)}},{key:"launchIntoFullscreen",value:function(e){this.options.preview&&this.setPreviewDimentions(),e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}},{key:"exitFullscreen",value:function(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()}},{key:"setTheme",value:function(){this.options.theme.replace(/\s\s+/g," "),this.options.theme.trim();var e,t,n="position-ontop",i="position-bottom";if(this.options.theme.includes(n)||this.options.theme.includes(i)||(this.options.theme+=" ".concat(n)),this.options.theme.includes(n)?this.elements.mcPlayer.classList.add(n):this.elements.mcPlayer.classList.add(i),this.options.theme.includes("default")?this.elements.mcPlayer.classList.add("theme-default"):this.options.theme.includes("transparent")?this.elements.mcPlayer.classList.add("theme-transparent"):this.options.theme.includes("whiteGold")?this.elements.mcPlayer.classList.add("theme-whiteGold"):this.options.theme.includes("darkGold")?this.elements.mcPlayer.classList.add("theme-darkGold"):this.options.theme.includes("green")?this.elements.mcPlayer.classList.add("theme-green"):this.options.theme.includes("blue")?this.elements.mcPlayer.classList.add("theme-blue"):this.options.theme.includes("dark")?this.elements.mcPlayer.classList.add("theme-dark"):this.options.theme.includes("yellow")&&this.elements.mcPlayer.classList.add("theme-yellow"),t="--mc-player-style",!document.getElementById(t)){var r=Sl("style");r.id="--mc-player-style",r.styleSheet?r.styleSheet.cssText=Kl:r.appendChild(document.createTextNode(Kl)),(e="head",document.getElementsByTagName(e))[0].appendChild(r)}this.eventBroadcast("theme-change",this.options.theme)}},{key:"setSpeed",value:function(){var e=1==this.clip.speed?"Normal":this.clip.speed;this.elements.speedCurrent.innerHTML=e}},{key:"calculateSpeed",value:function(e,t,n){var i=Math.floor(n/e);if(i===t.length-1)return t[i].toFixed(1);var r=(n/e%1*Math.abs(t[i]-t[i+1])+t[i]).toFixed(1);return 0==r?"0.0":r}},{key:"createPreviewDisplay",value:function(){this.previewClip=this.clip.paste(this.elements.previewHost,{isPreviewClip:!0}),this.elements.previewHost.style.position="absolute",this.elements.previewHost.style.background=this.options.backgroundColor,this.elements.previewHost.style.zIndex=1,this.setPreviewDimentions()}},{key:"setPreviewDimentions",value:function(){var e=this.clip.props.host,t=this.previewClip.ownClip.props.host,n=e.offsetWidth,i=e.offsetHeight,r=n*this.previewScale;r>300&&(r=300,this.previewScale=r/n);var s=n*this.previewScale,o=i*this.previewScale,a=jl({width:this.clip.props.containerParams.width,height:this.clip.props.containerParams.height-("always"==this.options.visible?44:0)},{width:s,height:o},"cover"===this.options.scaleToFit);this.previewClip.ownClip.rootElement.style.transform="scale(".concat(a.scale),this.previewClip.ownClip.rootElement.style.left="".concat(a.position.left,"px"),this.previewClip.ownClip.rootElement.style.top="".concat(a.position.top,"px"),this.elements.preview.style.width="".concat(s,"px"),this.elements.preview.style.height="".concat(o,"px"),t.style.boxSizing="border-box"}}],r&&i(n.prototype,r),s&&i(n,s),e}();return ac}));


/***/ }),

/***/ 473:
/***/ (function(__unused_webpack_module, exports) {

!function(t,e){ true?e(exports):0}(this,(function(t){"use strict";function e(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function n(t){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?e(Object(i),!0).forEach((function(e){o(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):e(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function a(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}function l(t){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},l(t)}function c(t,e){return c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},c(t,e)}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return h(t)}function p(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=l(t);if(e){var r=l(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return d(this,n)}}function f(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=l(t)););return t}function m(t,e,n){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=f(t,e);if(i){var r=Object.getOwnPropertyDescriptor(i,e);return r.get?r.get.call(n):r.value}},m(t,e,n||t)}function v(t,e,n,i){return v="undefined"!=typeof Reflect&&Reflect.set?Reflect.set:function(t,e,n,i){var r,s=f(t,e);if(s){if((r=Object.getOwnPropertyDescriptor(s,e)).set)return r.set.call(i,n),!0;if(!r.writable)return!1}if(r=Object.getOwnPropertyDescriptor(i,e)){if(!r.writable)return!1;r.value=n,Object.defineProperty(i,e,r)}else o(i,e,n);return!0},v(t,e,n,i)}function g(t,e,n,i,r){if(!v(t,e,n,i||t)&&r)throw new Error("failed to set property");return n}function y(t,e){return b(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var i,r,s=[],a=!0,o=!1;try{for(n=n.call(t);!(a=(i=n.next()).done)&&(s.push(i.value),!e||s.length!==e);a=!0);}catch(t){o=!0,r=t}finally{try{a||null==n.return||n.return()}finally{if(o)throw r}}return s}(t,e)||C(t,e)||w()}function k(t){return function(t){if(Array.isArray(t))return I(t)}(t)||x(t)||C(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t){if(Array.isArray(t))return t}function x(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function C(t,e){if(t){if("string"==typeof t)return I(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(t,e):void 0}}function I(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function w(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function E(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=C(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,o=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){o=!0,s=t},f:function(){try{a||null==n.return||n.return()}finally{if(o)throw s}}}}function A(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}function P(t,e,n,i){var r=O();if(i)for(var s=0;s<i.length;s++)r=i[s](r);var a=e((function(t){r.initializeInstanceElements(t,o.elements)}),n),o=r.decorateClass(function(t){for(var e=[],n=function(t){return"method"===t.kind&&t.key===s.key&&t.placement===s.placement},i=0;i<t.length;i++){var r,s=t[i];if("method"===s.kind&&(r=e.find(n)))if(M(s.descriptor)||M(r.descriptor)){if(D(s)||D(r))throw new ReferenceError("Duplicated methods ("+s.key+") can't be decorated.");r.descriptor=s.descriptor}else{if(D(s)){if(D(r))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+s.key+").");r.decorators=s.decorators}_(s,r)}else e.push(s)}return e}(a.d.map(S)),t);return r.initializeClassElements(a.F,o.elements),r.runClassFinishers(a.F,o.finishers)}function O(){O=function(){return t};var t={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(t,e){["method","field"].forEach((function(n){e.forEach((function(e){e.kind===n&&"own"===e.placement&&this.defineClassElement(t,e)}),this)}),this)},initializeClassElements:function(t,e){var n=t.prototype;["method","field"].forEach((function(i){e.forEach((function(e){var r=e.placement;if(e.kind===i&&("static"===r||"prototype"===r)){var s="static"===r?t:n;this.defineClassElement(s,e)}}),this)}),this)},defineClassElement:function(t,e){var n=e.descriptor;if("field"===e.kind){var i=e.initializer;n={enumerable:n.enumerable,writable:n.writable,configurable:n.configurable,value:void 0===i?void 0:i.call(t)}}Object.defineProperty(t,e.key,n)},decorateClass:function(t,e){var n=[],i=[],r={static:[],prototype:[],own:[]};if(t.forEach((function(t){this.addElementPlacement(t,r)}),this),t.forEach((function(t){if(!D(t))return n.push(t);var e=this.decorateElement(t,r);n.push(e.element),n.push.apply(n,e.extras),i.push.apply(i,e.finishers)}),this),!e)return{elements:n,finishers:i};var s=this.decorateConstructor(n,e);return i.push.apply(i,s.finishers),s.finishers=i,s},addElementPlacement:function(t,e,n){var i=e[t.placement];if(!n&&-1!==i.indexOf(t.key))throw new TypeError("Duplicated element ("+t.key+")");i.push(t.key)},decorateElement:function(t,e){for(var n=[],i=[],r=t.decorators,s=r.length-1;s>=0;s--){var a=e[t.placement];a.splice(a.indexOf(t.key),1);var o=this.fromElementDescriptor(t),u=this.toElementFinisherExtras((0,r[s])(o)||o);t=u.element,this.addElementPlacement(t,e),u.finisher&&i.push(u.finisher);var l=u.extras;if(l){for(var c=0;c<l.length;c++)this.addElementPlacement(l[c],e);n.push.apply(n,l)}}return{element:t,finishers:i,extras:n}},decorateConstructor:function(t,e){for(var n=[],i=e.length-1;i>=0;i--){var r=this.fromClassDescriptor(t),s=this.toClassDescriptor((0,e[i])(r)||r);if(void 0!==s.finisher&&n.push(s.finisher),void 0!==s.elements){t=s.elements;for(var a=0;a<t.length-1;a++)for(var o=a+1;o<t.length;o++)if(t[a].key===t[o].key&&t[a].placement===t[o].placement)throw new TypeError("Duplicated element ("+t[a].key+")")}}return{elements:t,finishers:n}},fromElementDescriptor:function(t){var e={kind:t.kind,key:t.key,placement:t.placement,descriptor:t.descriptor};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===t.kind&&(e.initializer=t.initializer),e},toElementDescriptors:function(t){var e;if(void 0!==t)return(e=t,b(e)||x(e)||C(e)||w()).map((function(t){var e=this.toElementDescriptor(t);return this.disallowProperty(t,"finisher","An element descriptor"),this.disallowProperty(t,"extras","An element descriptor"),e}),this)},toElementDescriptor:function(t){var e=String(t.kind);if("method"!==e&&"field"!==e)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+e+'"');var n=A(t.key),i=String(t.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var r=t.descriptor;this.disallowProperty(t,"elements","An element descriptor");var s={kind:e,key:n,placement:i,descriptor:Object.assign({},r)};return"field"!==e?this.disallowProperty(t,"initializer","A method descriptor"):(this.disallowProperty(r,"get","The property descriptor of a field descriptor"),this.disallowProperty(r,"set","The property descriptor of a field descriptor"),this.disallowProperty(r,"value","The property descriptor of a field descriptor"),s.initializer=t.initializer),s},toElementFinisherExtras:function(t){return{element:this.toElementDescriptor(t),finisher:T(t,"finisher"),extras:this.toElementDescriptors(t.extras)}},fromClassDescriptor:function(t){var e={kind:"class",elements:t.map(this.fromElementDescriptor,this)};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),e},toClassDescriptor:function(t){var e=String(t.kind);if("class"!==e)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+e+'"');this.disallowProperty(t,"key","A class descriptor"),this.disallowProperty(t,"placement","A class descriptor"),this.disallowProperty(t,"descriptor","A class descriptor"),this.disallowProperty(t,"initializer","A class descriptor"),this.disallowProperty(t,"extras","A class descriptor");var n=T(t,"finisher");return{elements:this.toElementDescriptors(t.elements),finisher:n}},runClassFinishers:function(t,e){for(var n=0;n<e.length;n++){var i=(0,e[n])(t);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");t=i}}return t},disallowProperty:function(t,e,n){if(void 0!==t[e])throw new TypeError(n+" can't have a ."+e+" property.")}};return t}function S(t){var e,n=A(t.key);"method"===t.kind?e={value:t.value,writable:!0,configurable:!0,enumerable:!1}:"get"===t.kind?e={get:t.value,configurable:!0,enumerable:!1}:"set"===t.kind?e={set:t.value,configurable:!0,enumerable:!1}:"field"===t.kind&&(e={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===t.kind?"field":"method",key:n,placement:t.static?"static":"field"===t.kind?"own":"prototype",descriptor:e};return t.decorators&&(i.decorators=t.decorators),"field"===t.kind&&(i.initializer=t.value),i}function _(t,e){void 0!==t.descriptor.get?e.descriptor.get=t.descriptor.get:e.descriptor.set=t.descriptor.set}function D(t){return t.decorators&&t.decorators.length}function M(t){return void 0!==t&&!(void 0===t.value&&void 0===t.writable)}function T(t,e){var n=t[e];if(void 0!==n&&"function"!=typeof n)throw new TypeError("Expected '"+e+"' to be a function");return n}var V=[{key:"info",style:"color: #666;",level:5,consoleMethod:"log"},{key:"notice",style:"background: rgba(0, 0, 0, 0.8); color:white; padding:8px;",level:4,consoleMethod:"log"},{key:"warning",style:"color: black; background: orange;",level:2,consoleMethod:"warn"},{key:"error",style:"color: black; background: red;",level:1,consoleMethod:"error"}],$="data-motorcortex2-id",j="closed",N="MotorCortex",B={staggerPreface:"@stagger",mathExpPreface:"@expression",attributeValue:"@attribute",patternValue:"@pattern",initParamsPreface:"@initParams",dynamicDuration:"dynamic",totalElements:"total",elementIndex:"index",initParams:"initParams"};function R(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var L=function t(e,n,i={}){for(let s in n)if("object"==typeof(r=n[s])&&!Array.isArray(r)&&null!=r&&Object.keys(r).length>0)e[s]=e[s]||{},t(e[s],n[s],i);else{if(!0===i.skipIfExist&&void 0!==e[s])continue;e[s]=n[s]}var r;return e};var F={required:"The '{field}' field is required.",string:"The '{field}' field must be a string.",stringEmpty:"The '{field}' field must not be empty.",stringMin:"The '{field}' field length must be greater than or equal to {expected} characters long.",stringMax:"The '{field}' field length must be less than or equal to {expected} characters long.",stringLength:"The '{field}' field length must be {expected} characters long.",stringPattern:"The '{field}' field fails to match the required pattern.",stringContains:"The '{field}' field must contain the '{expected}' text.",stringEnum:"The '{field}' field does not match any of the allowed values.",stringNumeric:"The '{field}' field must be a numeric string.",stringAlpha:"The '{field}' field must be an alphabetic string.",stringAlphanum:"The '{field}' field must be an alphanumeric string.",stringAlphadash:"The '{field}' field must be an alphadash string.",stringHex:"The '{field}' field must be a hex string.",stringSingleLine:"The '{field}' field must be a single line string.",stringBase64:"The '{field}' field must be a base64 string.",number:"The '{field}' field must be a number.",numberMin:"The '{field}' field must be greater than or equal to {expected}.",numberMax:"The '{field}' field must be less than or equal to {expected}.",numberEqual:"The '{field}' field must be equal to {expected}.",numberNotEqual:"The '{field}' field can't be equal to {expected}.",numberInteger:"The '{field}' field must be an integer.",numberPositive:"The '{field}' field must be a positive number.",numberNegative:"The '{field}' field must be a negative number.",array:"The '{field}' field must be an array.",arrayEmpty:"The '{field}' field must not be an empty array.",arrayMin:"The '{field}' field must contain at least {expected} items.",arrayMax:"The '{field}' field must contain less than or equal to {expected} items.",arrayLength:"The '{field}' field must contain {expected} items.",arrayContains:"The '{field}' field must contain the '{expected}' item.",arrayUnique:"The '{actual}' value in '{field}' field does not unique the '{expected}' values.",arrayEnum:"The '{actual}' value in '{field}' field does not match any of the '{expected}' values.",tuple:"The '{field}' field must be an array.",tupleEmpty:"The '{field}' field must not be an empty array.",tupleLength:"The '{field}' field must contain {expected} items.",boolean:"The '{field}' field must be a boolean.",currency:"The '{field}' must be a valid currency format",date:"The '{field}' field must be a Date.",dateMin:"The '{field}' field must be greater than or equal to {expected}.",dateMax:"The '{field}' field must be less than or equal to {expected}.",enumValue:"The '{field}' field value '{expected}' does not match any of the allowed values.",equalValue:"The '{field}' field value must be equal to '{expected}'.",equalField:"The '{field}' field value must be equal to '{expected}' field value.",forbidden:"The '{field}' field is forbidden.",function:"The '{field}' field must be a function.",email:"The '{field}' field must be a valid e-mail.",emailEmpty:"The '{field}' field must not be empty.",emailMin:"The '{field}' field length must be greater than or equal to {expected} characters long.",emailMax:"The '{field}' field length must be less than or equal to {expected} characters long.",luhn:"The '{field}' field must be a valid checksum luhn.",mac:"The '{field}' field must be a valid MAC address.",object:"The '{field}' must be an Object.",objectStrict:"The object '{field}' contains forbidden keys: '{actual}'.",objectMinProps:"The object '{field}' must contain at least {expected} properties.",objectMaxProps:"The object '{field}' must contain {expected} properties at most.",url:"The '{field}' field must be a valid URL.",urlEmpty:"The '{field}' field must not be empty.",uuid:"The '{field}' field must be a valid UUID.",uuidVersion:"The '{field}' field must be a valid UUID version provided.",classInstanceOf:"The '{field}' field must be an instance of the '{expected}' class.",objectID:"The '{field}' field must be an valid ObjectID"},z=function(){const t=[];return t.push("\n\t\treturn value;\n\t"),{source:t.join("\n")}},G=function({schema:t,messages:e},n,i){const r=[];if(r.push(`\n\t\tif (!Array.isArray(value)) {\n\t\t\t${this.makeError({type:"array",actual:"value",messages:e})}\n\t\t\treturn value;\n\t\t}\n\n\t\tvar len = value.length;\n\t`),!1===t.empty&&r.push(`\n\t\t\tif (len === 0) {\n\t\t\t\t${this.makeError({type:"arrayEmpty",actual:"value",messages:e})}\n\t\t\t}\n\t\t`),null!=t.min&&r.push(`\n\t\t\tif (len < ${t.min}) {\n\t\t\t\t${this.makeError({type:"arrayMin",expected:t.min,actual:"len",messages:e})}\n\t\t\t}\n\t\t`),null!=t.max&&r.push(`\n\t\t\tif (len > ${t.max}) {\n\t\t\t\t${this.makeError({type:"arrayMax",expected:t.max,actual:"len",messages:e})}\n\t\t\t}\n\t\t`),null!=t.length&&r.push(`\n\t\t\tif (len !== ${t.length}) {\n\t\t\t\t${this.makeError({type:"arrayLength",expected:t.length,actual:"len",messages:e})}\n\t\t\t}\n\t\t`),null!=t.contains&&r.push(`\n\t\t\tif (value.indexOf(${JSON.stringify(t.contains)}) === -1) {\n\t\t\t\t${this.makeError({type:"arrayContains",expected:JSON.stringify(t.contains),actual:"value",messages:e})}\n\t\t\t}\n\t\t`),!0===t.unique&&r.push(`\n\t\t\tif(len > (new Set(value)).size) {\n\t\t\t\t${this.makeError({type:"arrayUnique",expected:"Array.from(new Set(value.filter((item, index) => value.indexOf(item) !== index)))",actual:"value",messages:e})}\n\t\t\t}\n\t\t`),null!=t.enum){const n=JSON.stringify(t.enum);r.push(`\n\t\t\tfor (var i = 0; i < value.length; i++) {\n\t\t\t\tif (${n}.indexOf(value[i]) === -1) {\n\t\t\t\t\t${this.makeError({type:"arrayEnum",expected:'"'+t.enum.join(", ")+'"',actual:"value[i]",messages:e})}\n\t\t\t\t}\n\t\t\t}\n\t\t`)}if(null!=t.items){r.push("\n\t\t\tvar arr = value;\n\t\t\tvar parentField = field;\n\t\t\tfor (var i = 0; i < arr.length; i++) {\n\t\t\t\tvalue = arr[i];\n\t\t");const e=n+"[]",s=this.getRuleFromSchema(t.items),a=`arr[i] = ${i.async?"await ":""}context.fn[%%INDEX%%](arr[i], (parentField ? parentField : "") + "[" + i + "]", parent, errors, context)`;r.push(this.compileRule(s,i,e,a,"arr[i]")),r.push("\n\t\t\t}\n\t\t"),r.push("\n\t\treturn arr;\n\t")}else r.push("\n\t\treturn value;\n\t");return{source:r.join("\n")}},q=function({schema:t,messages:e},n,i){const r=[];let s=!1;return r.push("\n\t\tvar origValue = value;\n\t"),!0===t.convert&&(s=!0,r.push('\n\t\t\tif (typeof value !== "boolean") {\n\t\t\t\tif (\n\t\t\t\tvalue === 1\n\t\t\t\t|| value === "true"\n\t\t\t\t|| value === "1"\n\t\t\t\t|| value === "on"\n\t\t\t\t) {\n\t\t\t\t\tvalue = true;\n\t\t\t\t} else if (\n\t\t\t\tvalue === 0\n\t\t\t\t|| value === "false"\n\t\t\t\t|| value === "0"\n\t\t\t\t|| value === "off"\n\t\t\t\t) {\n\t\t\t\t\tvalue = false;\n\t\t\t\t}\n\t\t\t}\n\t\t')),r.push(`\n\t\tif (typeof value !== "boolean") {\n\t\t\t${this.makeError({type:"boolean",actual:"origValue",messages:e})}\n\t\t}\n\t\t\n\t\treturn value;\n\t`),{sanitized:s,source:r.join("\n")}},K=function({schema:t,messages:e,index:n},i,r){const s=[],a=t.instanceOf.name?t.instanceOf.name:"<UnknowClass>";return r.customs[n]?r.customs[n].schema=t:r.customs[n]={schema:t},s.push(`\n\t\tif (!(value instanceof context.customs[${n}].schema.instanceOf))\n\t\t\t${this.makeError({type:"classInstanceOf",actual:"value",expected:"'"+a+"'",messages:e})}\n\t`),s.push("\n\t\treturn value;\n\t"),{source:s.join("\n")}},W=function({schema:t,messages:e,index:n},i,r){const s=[];return s.push(`\n\t\t${this.makeCustomValidator({fnName:"check",path:i,schema:t,messages:e,context:r,ruleIndex:n})}\n\t\treturn value;\n\t`),{source:s.join("\n")}};var J=function({schema:t,messages:e},n,i){const r=t.currencySymbol||null,s=t.thousandSeparator||",",a=t.decimalSeparator||".",o=t.customRegex;let u=!t.symbolOptional,l="(?=.*\\d)^(-?~1|~1-?)(([0-9]\\d{0,2}(~2\\d{3})*)|0)?(\\~3\\d{1,2})?$".replace(/~1/g,r?`\\${r}${u?"":"?"}`:"").replace("~2",s).replace("~3",a);const c=[];return c.push(`\n\t\tif (!value.match(${o||new RegExp(l)})) {\n\t\t\t${this.makeError({type:"currency",actual:"value",messages:e})}\n\t\t\treturn value;\n\t\t}\n\n\t\treturn value;\n\t`),{source:c.join("\n")}},H=function({schema:t,messages:e},n,i){const r=[];let s=!1;return r.push("\n\t\tvar origValue = value;\n\t"),!0===t.convert&&(s=!0,r.push("\n\t\t\tif (!(value instanceof Date)) {\n\t\t\t\tvalue = new Date(value);\n\t\t\t}\n\t\t")),r.push(`\n\t\tif (!(value instanceof Date) || isNaN(value.getTime()))\n\t\t\t${this.makeError({type:"date",actual:"origValue",messages:e})}\n\n\t\treturn value;\n\t`),{sanitized:s,source:r.join("\n")}};const U=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,Q=/^\S+@\S+\.\S+$/;var Z=function({schema:t,messages:e},n,i){const r=[],s="precise"==t.mode?U:Q;let a=!1;return r.push(`\n\t\tif (typeof value !== "string") {\n\t\t\t${this.makeError({type:"string",actual:"value",messages:e})}\n\t\t\treturn value;\n\t\t}\n\t`),t.empty?r.push("\n\t\t\tif (value.length === 0) return value;\n\t\t"):r.push(`\n\t\t\tif (value.length === 0) {\n\t\t\t\t${this.makeError({type:"emailEmpty",actual:"value",messages:e})}\n\t\t\t\treturn value;\n\t\t\t}\n\t\t`),t.normalize&&(a=!0,r.push("\n\t\t\tvalue = value.trim().toLowerCase();\n\t\t")),null!=t.min&&r.push(`\n\t\t\tif (value.length < ${t.min}) {\n\t\t\t\t${this.makeError({type:"emailMin",expected:t.min,actual:"value.length",messages:e})}\n\t\t\t}\n\t\t`),null!=t.max&&r.push(`\n\t\t\tif (value.length > ${t.max}) {\n\t\t\t\t${this.makeError({type:"emailMax",expected:t.max,actual:"value.length",messages:e})}\n\t\t\t}\n\t\t`),r.push(`\n\t\tif (!${s.toString()}.test(value)) {\n\t\t\t${this.makeError({type:"email",actual:"value",messages:e})}\n\t\t}\n\n\t\treturn value;\n\t`),{sanitized:a,source:r.join("\n")}},X=function({schema:t,messages:e},n,i){return{source:`\n\t\t\tif (${JSON.stringify(t.values||[])}.indexOf(value) === -1)\n\t\t\t\t${this.makeError({type:"enumValue",expected:'"'+t.values.join(", ")+'"',actual:"value",messages:e})}\n\t\t\t\n\t\t\treturn value;\n\t\t`}},Y=function({schema:t,messages:e},n,i){const r=[];return t.field?(t.strict?r.push(`\n\t\t\t\tif (value !== parent["${t.field}"])\n\t\t\t`):r.push(`\n\t\t\t\tif (value != parent["${t.field}"])\n\t\t\t`),r.push(`\n\t\t\t\t${this.makeError({type:"equalField",actual:"value",expected:JSON.stringify(t.field),messages:e})}\n\t\t`)):(t.strict?r.push(`\n\t\t\t\tif (value !== ${JSON.stringify(t.value)})\n\t\t\t`):r.push(`\n\t\t\t\tif (value != ${JSON.stringify(t.value)})\n\t\t\t`),r.push(`\n\t\t\t\t${this.makeError({type:"equalValue",actual:"value",expected:JSON.stringify(t.value),messages:e})}\n\t\t`)),r.push("\n\t\treturn value;\n\t"),{source:r.join("\n")}},tt=function({schema:t,messages:e},n,i){const r=[];return r.push("\n\t\tif (value !== null && value !== undefined) {\n\t"),t.remove?r.push("\n\t\t\treturn undefined;\n\t\t"):r.push(`\n\t\t\t${this.makeError({type:"forbidden",actual:"value",messages:e})}\n\t\t`),r.push("\n\t\t}\n\n\t\treturn value;\n\t"),{source:r.join("\n")}},et=function({schema:t,messages:e},n,i){return{source:`\n\t\t\tif (typeof value !== "function")\n\t\t\t\t${this.makeError({type:"function",actual:"value",messages:e})}\n\n\t\t\treturn value;\n\t\t`}},nt=function({schema:t,messages:e},n,i){const r=[];r.push("\n\t\tvar prevErrLen = errors.length;\n\t\tvar errBefore;\n\t\tvar hasValid = false;\n\t\tvar newVal = value;\n\t");for(let e=0;e<t.rules.length;e++){r.push("\n\t\t\tif (!hasValid) {\n\t\t\t\terrBefore = errors.length;\n\t\t");const s=this.getRuleFromSchema(t.rules[e]);r.push(this.compileRule(s,i,n,`var tmpVal = ${i.async?"await ":""}context.fn[%%INDEX%%](value, field, parent, errors, context);`,"tmpVal")),r.push("\n\t\t\t\tif (errors.length == errBefore) {\n\t\t\t\t\thasValid = true;\n\t\t\t\t\tnewVal = tmpVal;\n\t\t\t\t}\n\t\t\t}\n\t\t")}return r.push("\n\t\tif (hasValid) {\n\t\t\terrors.length = prevErrLen;\n\t\t}\n\n\t\treturn newVal;\n\t"),{source:r.join("\n")}},it=function({schema:t,messages:e},n,i){const r=[];r.push("\n\t\tvar origValue = value;\n\t");let s=!1;return!0===t.convert&&(s=!0,r.push('\n\t\t\tif (typeof value !== "number") {\n\t\t\t\tvalue = Number(value);\n\t\t\t}\n\t\t')),r.push(`\n\t\tif (typeof value !== "number" || isNaN(value) || !isFinite(value)) {\n\t\t\t${this.makeError({type:"number",actual:"origValue",messages:e})}\n\t\t\treturn value;\n\t\t}\n\t`),null!=t.min&&r.push(`\n\t\t\tif (value < ${t.min}) {\n\t\t\t\t${this.makeError({type:"numberMin",expected:t.min,actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),null!=t.max&&r.push(`\n\t\t\tif (value > ${t.max}) {\n\t\t\t\t${this.makeError({type:"numberMax",expected:t.max,actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),null!=t.equal&&r.push(`\n\t\t\tif (value !== ${t.equal}) {\n\t\t\t\t${this.makeError({type:"numberEqual",expected:t.equal,actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),null!=t.notEqual&&r.push(`\n\t\t\tif (value === ${t.notEqual}) {\n\t\t\t\t${this.makeError({type:"numberNotEqual",expected:t.notEqual,actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),!0===t.integer&&r.push(`\n\t\t\tif (value % 1 !== 0) {\n\t\t\t\t${this.makeError({type:"numberInteger",actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),!0===t.positive&&r.push(`\n\t\t\tif (value <= 0) {\n\t\t\t\t${this.makeError({type:"numberPositive",actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),!0===t.negative&&r.push(`\n\t\t\tif (value >= 0) {\n\t\t\t\t${this.makeError({type:"numberNegative",actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),r.push("\n\t\treturn value;\n\t"),{sanitized:s,source:r.join("\n")}};const rt=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/,st=/["'\\\n\r\u2028\u2029]/g;function at(t){return t.replace(st,(function(t){switch(t){case'"':case"'":case"\\":return"\\"+t;case"\n":return"\\n";case"\r":return"\\r";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029"}}))}var ot=function({schema:t,messages:e},n,i){const r=[];r.push(`\n\t\tif (typeof value !== "object" || value === null || Array.isArray(value)) {\n\t\t\t${this.makeError({type:"object",actual:"value",messages:e})}\n\t\t\treturn value;\n\t\t}\n\t`);const s=t.properties||t.props;if(s){r.push("var parentObj = value;"),r.push("var parentField = field;");const a=Object.keys(s);for(let t=0;t<a.length;t++){const e=a[t],o=at(e),u=rt.test(o)?`.${o}`:`['${o}']`,l=`parentObj${u}`,c=(n?n+".":"")+e;r.push(`\n// Field: ${at(c)}`),r.push(`field = parentField ? parentField + "${u}" : "${o}";`),r.push(`value = ${l};`);const h=this.getRuleFromSchema(s[e]),d=`\n\t\t\t\t${l} = ${i.async?"await ":""}context.fn[%%INDEX%%](value, field, parentObj, errors, context);\n\t\t\t`;r.push(this.compileRule(h,i,c,d,l))}if(t.strict){const n=Object.keys(s);r.push(`\n\t\t\t\tfield = parentField;\n\t\t\t\tvar invalidProps = [];\n\t\t\t\tvar props = Object.keys(parentObj);\n\n\t\t\t\tfor (let i = 0; i < props.length; i++) {\n\t\t\t\t\tif (${JSON.stringify(n)}.indexOf(props[i]) === -1) {\n\t\t\t\t\t\tinvalidProps.push(props[i]);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tif (invalidProps.length) {\n\t\t\t`),"remove"==t.strict?r.push("\n\t\t\t\t\tinvalidProps.forEach(function(field) {\n\t\t\t\t\t\tdelete parentObj[field];\n\t\t\t\t\t});\n\t\t\t\t"):r.push(`\n\t\t\t\t\t${this.makeError({type:"objectStrict",expected:'"'+n.join(", ")+'"',actual:"invalidProps.join(', ')",messages:e})}\n\t\t\t\t`),r.push("\n\t\t\t\t}\n\t\t\t")}}return null==t.minProps&&null==t.maxProps||(t.strict?r.push(`\n\t\t\t\tprops = Object.keys(${s?"parentObj":"value"});\n\t\t\t`):r.push(`\n\t\t\t\tvar props = Object.keys(${s?"parentObj":"value"});\n\t\t\t\t${s?"field = parentField;":""}\n\t\t\t`)),null!=t.minProps&&r.push(`\n\t\t\tif (props.length < ${t.minProps}) {\n\t\t\t\t${this.makeError({type:"objectMinProps",expected:t.minProps,actual:"props.length",messages:e})}\n\t\t\t}\n\t\t`),null!=t.maxProps&&r.push(`\n\t\t\tif (props.length > ${t.maxProps}) {\n\t\t\t\t${this.makeError({type:"objectMaxProps",expected:t.maxProps,actual:"props.length",messages:e})}\n\t\t\t}\n\t\t`),s?r.push("\n\t\t\treturn parentObj;\n\t\t"):r.push("\n\t\t\treturn value;\n\t\t"),{source:r.join("\n")}},ut=function({schema:t,messages:e,index:n},i,r){const s=[];return r.customs[n]?r.customs[n].schema=t:r.customs[n]={schema:t},s.push(`\n\t\tconst ObjectID = context.customs[${n}].schema.ObjectID;\n\t\tif (!ObjectID.isValid(value)) {\n\t\t\t${this.makeError({type:"objectID",actual:"value",messages:e})}\n\t\t\treturn;\n\t\t}\n\t`),!0===t.convert?s.push("return new ObjectID(value)"):"hexString"===t.convert?s.push("return value.toString()"):s.push("return value"),{source:s.join("\n")}};const lt=/^-?[0-9]\d*(\.\d+)?$/,ct=/^[a-zA-Z]+$/,ht=/^[a-zA-Z0-9]+$/,dt=/^[a-zA-Z0-9_-]+$/,pt=/^[0-9a-fA-F]+$/,ft=/^(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}==|[A-Za-z0-9+/]{3}=)?$/;var mt=function({schema:t,messages:e},n,i){const r=[];let s=!1;if(!0===t.convert&&(s=!0,r.push('\n\t\t\tif (typeof value !== "string") {\n\t\t\t\tvalue = String(value);\n\t\t\t}\n\t\t')),r.push(`\n\t\tif (typeof value !== "string") {\n\t\t\t${this.makeError({type:"string",actual:"value",messages:e})}\n\t\t\treturn value;\n\t\t}\n\n\t\tvar origValue = value;\n\t`),t.trim&&(s=!0,r.push("\n\t\t\tvalue = value.trim();\n\t\t")),t.trimLeft&&(s=!0,r.push("\n\t\t\tvalue = value.trimLeft();\n\t\t")),t.trimRight&&(s=!0,r.push("\n\t\t\tvalue = value.trimRight();\n\t\t")),t.padStart){s=!0;const e=null!=t.padChar?t.padChar:" ";r.push(`\n\t\t\tvalue = value.padStart(${t.padStart}, ${JSON.stringify(e)});\n\t\t`)}if(t.padEnd){s=!0;const e=null!=t.padChar?t.padChar:" ";r.push(`\n\t\t\tvalue = value.padEnd(${t.padEnd}, ${JSON.stringify(e)});\n\t\t`)}if(t.lowercase&&(s=!0,r.push("\n\t\t\tvalue = value.toLowerCase();\n\t\t")),t.uppercase&&(s=!0,r.push("\n\t\t\tvalue = value.toUpperCase();\n\t\t")),t.localeLowercase&&(s=!0,r.push("\n\t\t\tvalue = value.toLocaleLowerCase();\n\t\t")),t.localeUppercase&&(s=!0,r.push("\n\t\t\tvalue = value.toLocaleUpperCase();\n\t\t")),r.push("\n\t\t\tvar len = value.length;\n\t"),!1===t.empty&&r.push(`\n\t\t\tif (len === 0) {\n\t\t\t\t${this.makeError({type:"stringEmpty",actual:"value",messages:e})}\n\t\t\t}\n\t\t`),null!=t.min&&r.push(`\n\t\t\tif (len < ${t.min}) {\n\t\t\t\t${this.makeError({type:"stringMin",expected:t.min,actual:"len",messages:e})}\n\t\t\t}\n\t\t`),null!=t.max&&r.push(`\n\t\t\tif (len > ${t.max}) {\n\t\t\t\t${this.makeError({type:"stringMax",expected:t.max,actual:"len",messages:e})}\n\t\t\t}\n\t\t`),null!=t.length&&r.push(`\n\t\t\tif (len !== ${t.length}) {\n\t\t\t\t${this.makeError({type:"stringLength",expected:t.length,actual:"len",messages:e})}\n\t\t\t}\n\t\t`),null!=t.pattern){let n=t.pattern;"string"==typeof t.pattern&&(n=new RegExp(t.pattern,t.patternFlags));const i=`\n\t\t\tif (!${n.toString()}.test(value))\n\t\t\t\t${this.makeError({type:"stringPattern",expected:`"${n.toString().replace(/"/g,"\\$&")}"`,actual:"origValue",messages:e})}\n\t\t`;r.push(`\n\t\t\tif (${t.empty} === true && len === 0) {\n\t\t\t\t// Do nothing\n\t\t\t} else {\n\t\t\t\t${i}\n\t\t\t}\n\t\t`)}if(null!=t.contains&&r.push(`\n\t\t\tif (value.indexOf("${t.contains}") === -1) {\n\t\t\t\t${this.makeError({type:"stringContains",expected:'"'+t.contains+'"',actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),null!=t.enum){const n=JSON.stringify(t.enum);r.push(`\n\t\t\tif (${n}.indexOf(value) === -1) {\n\t\t\t\t${this.makeError({type:"stringEnum",expected:'"'+t.enum.join(", ")+'"',actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`)}return!0===t.numeric&&r.push(`\n\t\t\tif (!${lt.toString()}.test(value) ) {\n\t\t\t\t${this.makeError({type:"stringNumeric",actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),!0===t.alpha&&r.push(`\n\t\t\tif(!${ct.toString()}.test(value)) {\n\t\t\t\t${this.makeError({type:"stringAlpha",actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),!0===t.alphanum&&r.push(`\n\t\t\tif(!${ht.toString()}.test(value)) {\n\t\t\t\t${this.makeError({type:"stringAlphanum",actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),!0===t.alphadash&&r.push(`\n\t\t\tif(!${dt.toString()}.test(value)) {\n\t\t\t\t${this.makeError({type:"stringAlphadash",actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),!0===t.hex&&r.push(`\n\t\t\tif(value.length % 2 !== 0 || !${pt.toString()}.test(value)) {\n\t\t\t\t${this.makeError({type:"stringHex",actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),!0===t.singleLine&&r.push(`\n\t\t\tif(value.includes("\\n")) {\n\t\t\t\t${this.makeError({type:"stringSingleLine",messages:e})}\n\t\t\t}\n\t\t`),!0===t.base64&&r.push(`\n\t\t\tif(!${ft.toString()}.test(value)) {\n\t\t\t\t${this.makeError({type:"stringBase64",actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),r.push("\n\t\treturn value;\n\t"),{sanitized:s,source:r.join("\n")}},vt=function({schema:t,messages:e},n,i){const r=[];if(null!=t.items){if(!Array.isArray(t.items))throw new Error(`Invalid '${t.type}' schema. The 'items' field must be an array.`);if(0===t.items.length)throw new Error(`Invalid '${t.type}' schema. The 'items' field must not be an empty array.`)}if(r.push(`\n\t\tif (!Array.isArray(value)) {\n\t\t\t${this.makeError({type:"tuple",actual:"value",messages:e})}\n\t\t\treturn value;\n\t\t}\n\n\t\tvar len = value.length;\n\t`),!1===t.empty&&r.push(`\n\t\t\tif (len === 0) {\n\t\t\t\t${this.makeError({type:"tupleEmpty",actual:"value",messages:e})}\n\t\t\t\treturn value;\n\t\t\t}\n\t\t`),null!=t.items){r.push(`\n\t\t\tif (${t.empty} !== false && len === 0) {\n\t\t\t\treturn value;\n\t\t\t}\n\n\t\t\tif (len !== ${t.items.length}) {\n\t\t\t\t${this.makeError({type:"tupleLength",expected:t.items.length,actual:"len",messages:e})}\n\t\t\t\treturn value;\n\t\t\t}\n\t\t`),r.push("\n\t\t\tvar arr = value;\n\t\t\tvar parentField = field;\n\t\t");for(let e=0;e<t.items.length;e++){r.push(`\n\t\t\tvalue = arr[${e}];\n\t\t`);const s=`${n}[${e}]`,a=this.getRuleFromSchema(t.items[e]),o=`\n\t\t\tarr[${e}] = ${i.async?"await ":""}context.fn[%%INDEX%%](arr[${e}], (parentField ? parentField : "") + "[" + ${e} + "]", parent, errors, context);\n\t\t`;r.push(this.compileRule(a,i,s,o,`arr[${e}]`))}r.push("\n\t\treturn arr;\n\t")}else r.push("\n\t\treturn value;\n\t");return{source:r.join("\n")}};const gt=/^https?:\/\/\S+/;var yt=function({schema:t,messages:e},n,i){const r=[];return r.push(`\n\t\tif (typeof value !== "string") {\n\t\t\t${this.makeError({type:"string",actual:"value",messages:e})}\n\t\t\treturn value;\n\t\t}\n\t`),t.empty?r.push("\n\t\t\tif (value.length === 0) return value;\n\t\t"):r.push(`\n\t\t\tif (value.length === 0) {\n\t\t\t\t${this.makeError({type:"urlEmpty",actual:"value",messages:e})}\n\t\t\t\treturn value;\n\t\t\t}\n\t\t`),r.push(`\n\t\tif (!${gt.toString()}.test(value)) {\n\t\t\t${this.makeError({type:"url",actual:"value",messages:e})}\n\t\t}\n\n\t\treturn value;\n\t`),{source:r.join("\n")}};const kt=/^([0-9a-f]{8}-[0-9a-f]{4}-[1-6][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}|[0]{8}-[0]{4}-[0]{4}-[0]{4}-[0]{12})$/i;var bt=function({schema:t,messages:e},n){const i=[];return i.push(`\n\t\tif (typeof value !== "string") {\n\t\t\t${this.makeError({type:"string",actual:"value",messages:e})}\n\t\t\treturn value;\n\t\t}\n\n\t\tvar val = value.toLowerCase();\n\t\tif (!${kt.toString()}.test(val)) {\n\t\t\t${this.makeError({type:"uuid",actual:"value",messages:e})}\n\t\t\treturn value;\n\t\t}\n\n\t\tconst version = val.charAt(14) | 0;\n\t`),parseInt(t.version)<7&&i.push(`\n\t\t\tif (${t.version} !== version) {\n\t\t\t\t${this.makeError({type:"uuidVersion",expected:t.version,actual:"version",messages:e})}\n\t\t\t\treturn value;\n\t\t\t}\n\t\t`),i.push(`\n\t\tswitch (version) {\n\t\tcase 0:\n\t\tcase 1:\n\t\tcase 2:\n\t\tcase 6:\n\t\t\tbreak;\n\t\tcase 3:\n\t\tcase 4:\n\t\tcase 5:\n\t\t\tif (["8", "9", "a", "b"].indexOf(val.charAt(19)) === -1) {\n\t\t\t\t${this.makeError({type:"uuid",actual:"value",messages:e})}\n\t\t\t}\n\t\t}\n\n\t\treturn value;\n\t`),{source:i.join("\n")}};const xt=/^((([a-f0-9][a-f0-9]+[-]){5}|([a-f0-9][a-f0-9]+[:]){5})([a-f0-9][a-f0-9])$)|(^([a-f0-9][a-f0-9][a-f0-9][a-f0-9]+[.]){2}([a-f0-9][a-f0-9][a-f0-9][a-f0-9]))$/i;var Ct=function({schema:t,messages:e},n,i){return{source:`\n\t\t\tif (typeof value !== "string") {\n\t\t\t\t${this.makeError({type:"string",actual:"value",messages:e})}\n\t\t\t\treturn value;\n\t\t\t}\n\n\t\t\tvar v = value.toLowerCase();\n\t\t\tif (!${xt.toString()}.test(v)) {\n\t\t\t\t${this.makeError({type:"mac",actual:"value",messages:e})}\n\t\t\t}\n\t\t\t\n\t\t\treturn value;\n\t\t`}},It=function({schema:t,messages:e},n,i){return{source:`\n\t\t\tif (typeof value !== "string") {\n\t\t\t\t${this.makeError({type:"string",actual:"value",messages:e})}\n\t\t\t\treturn value;\n\t\t\t}\n\n\t\t\tif (typeof value !== "string")\n\t\t\t\tvalue = String(value);\n\n\t\t\tval = value.replace(/\\D+/g, "");\n\n\t\t\tvar array = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];\n\t\t\tvar len = val ? val.length : 0,\n\t\t\t\tbit = 1,\n\t\t\t\tsum = 0;\n\t\t\twhile (len--) {\n\t\t\t\tsum += !(bit ^= 1) ? parseInt(val[len], 10) : array[val[len]];\n\t\t\t}\n\n\t\t\tif (!(sum % 10 === 0 && sum > 0)) {\n\t\t\t\t${this.makeError({type:"luhn",actual:"value",messages:e})}\n\t\t\t}\n\n\t\t\treturn value;\n\t\t`}};let wt,Et,At,Pt;var Ot=function(t){wt||(wt=R("prettier"),Et={parser:"babel",useTabs:!1,printWidth:120,trailingComma:"none",tabWidth:4,singleQuote:!1,semi:!0,bracketSpacing:!0},At=R("cli-highlight"),Pt={language:"js",theme:At.fromJson({keyword:["white","bold"],built_in:"magenta",literal:"cyan",number:"magenta",regexp:"red",string:["yellow","bold"],symbol:"plain",class:"blue",attr:"plain",function:["white","bold"],title:"plain",params:"green",comment:"grey"})});const e=wt.format(t,Et);return At.highlight(e,Pt)};let St;try{St=new Function("return Object.getPrototypeOf(async function(){}).constructor")()}catch(t){}const _t=L,Dt=(t,e,n)=>{return t.replace(e,null==(i=n)?"":"function"==typeof i.toString?i:typeof i);var i};var Mt=class{constructor(t){if(this.opts={},this.defaults={},this.messages=Object.assign({},F),this.rules={any:z,array:G,boolean:q,class:K,custom:W,currency:J,date:H,email:Z,enum:X,equal:Y,forbidden:tt,function:et,multi:nt,number:it,object:ot,objectID:ut,string:mt,tuple:vt,url:yt,uuid:bt,mac:Ct,luhn:It},this.aliases={},this.cache=new Map,t){if(_t(this.opts,t),t.defaults&&_t(this.defaults,t.defaults),t.messages)for(const e in t.messages)this.addMessage(e,t.messages[e]);if(t.aliases)for(const e in t.aliases)this.alias(e,t.aliases[e]);if(t.customRules)for(const e in t.customRules)this.add(e,t.customRules[e]);if(t.plugins){const e=t.plugins;if(!Array.isArray(e))throw new Error("Plugins type must be array");e.forEach(this.plugin.bind(this))}if(this.opts.debug){let t=function(t){return t};"undefined"==typeof window&&(t=Ot),this._formatter=t}}}validate(t,e){return this.compile(e)(t)}wrapRequiredCheckSourceCode(t,e,n,i){const r=[];let s,a=!0===t.schema.optional||"forbidden"===t.schema.type,o=!0===t.schema.optional||!0===t.schema.nullable||"forbidden"===t.schema.type;if(null!=t.schema.default){let e;a=!1,!0!==t.schema.nullable&&(o=!1),"function"==typeof t.schema.default?(n.customs[t.index]||(n.customs[t.index]={}),n.customs[t.index].defaultFn=t.schema.default,e=`context.customs[${t.index}].defaultFn()`):e=JSON.stringify(t.schema.default),s=`\n\t\t\t\tvalue = ${e};\n\t\t\t\t${i} = value;\n\t\t\t`}else s=this.makeError({type:"required",actual:"value",messages:t.messages});return r.push(`\n\t\t\tif (value === undefined) { ${a?"\n// allow undefined\n":s} }\n\t\t\telse if (value === null) { ${o?"\n// allow null\n":s} }\n\t\t\t${e?`else { ${e} }`:""}\n\t\t`),r.join("\n")}compile(t){if(null===t||"object"!=typeof t)throw new Error("Invalid schema.");const e=this,n={index:0,async:!0===t.$$async,rules:[],fn:[],customs:{},utils:{replace:Dt}};if(this.cache.clear(),delete t.$$async,n.async&&!St)throw new Error("Asynchronous mode is not supported.");if(!0!==t.$$root)if(Array.isArray(t)){t=this.getRuleFromSchema(t).schema}else{const e=Object.assign({},t);t={type:"object",strict:e.$$strict,properties:e},delete e.$$strict}const i=["var errors = [];","var field;","var parent = null;"],r=this.getRuleFromSchema(t);i.push(this.compileRule(r,n,null,(n.async?"await ":"")+"context.fn[%%INDEX%%](value, field, null, errors, context);","value")),i.push("if (errors.length) {"),i.push("\n\t\t\treturn errors.map(err => {\n\t\t\t\tif (err.message) {\n\t\t\t\t\terr.message = context.utils.replace(err.message, /\\{field\\}/g, err.field);\n\t\t\t\t\terr.message = context.utils.replace(err.message, /\\{expected\\}/g, err.expected);\n\t\t\t\t\terr.message = context.utils.replace(err.message, /\\{actual\\}/g, err.actual);\n\t\t\t\t}\n\n\t\t\t\treturn err;\n\t\t\t});\n\t\t"),i.push("}"),i.push("return true;");const s=i.join("\n"),a=new(n.async?St:Function)("value","context",s);this.opts.debug&&console.log(this._formatter("// Main check function\n"+a.toString())),this.cache.clear();const o=function(t,i){return n.data=t,i&&i.meta&&(n.meta=i.meta),a.call(e,t,n)};return o.async=n.async,o}compileRule(t,e,n,i,r){const s=[],a=this.cache.get(t.schema);if(a)(t=a).cycle=!0,t.cycleStack=[],s.push(this.wrapRequiredCheckSourceCode(t,`\n\t\t\t\tvar rule = context.rules[${t.index}];\n\t\t\t\tif (rule.cycleStack.indexOf(value) === -1) {\n\t\t\t\t\trule.cycleStack.push(value);\n\t\t\t\t\t${i.replace(/%%INDEX%%/g,t.index)}\n\t\t\t\t\trule.cycleStack.pop(value);\n\t\t\t\t}\n\t\t\t`,e,r));else{this.cache.set(t.schema,t),t.index=e.index,e.rules[e.index]=t;const a=null!=n?n:"$$root";e.index++;const o=t.ruleFunction.call(this,t,n,e);o.source=o.source.replace(/%%INDEX%%/g,t.index);const u=new(e.async?St:Function)("value","field","parent","errors","context",o.source);e.fn[t.index]=u.bind(this),s.push(this.wrapRequiredCheckSourceCode(t,i.replace(/%%INDEX%%/g,t.index),e,r)),s.push(this.makeCustomValidator({vName:r,path:a,schema:t.schema,context:e,messages:t.messages,ruleIndex:t.index})),this.opts.debug&&console.log(this._formatter(`// Context.fn[${t.index}]\n`+u.toString()))}return s.join("\n")}getRuleFromSchema(t){if("string"==typeof t)t=this.parseShortHand(t);else if(Array.isArray(t)){if(0==t.length)throw new Error("Invalid schema.");const e=(t={type:"multi",rules:t}).rules.map((t=>this.getRuleFromSchema(t))).every((t=>1==t.schema.optional));e&&(t.optional=!0)}if(t.$$type){const e=t.$$type,n=this.getRuleFromSchema(e).schema;delete t.$$type;const i=Object.assign({},t);for(const e in t)delete t[e];_t(t,n,{skipIfExist:!0}),t.props=i}const e=this.aliases[t.type];e&&(delete t.type,t=_t(t,e,{skipIfExist:!0}));const n=this.rules[t.type];if(!n)throw new Error("Invalid '"+t.type+"' type in validator schema.");return{messages:Object.assign({},this.messages,t.messages),schema:_t(t,this.defaults[t.type],{skipIfExist:!0}),ruleFunction:n}}parseShortHand(t){const e=t.split("|").map((t=>t.trim()));let n,i=e[0];return n=i.endsWith("[]")?this.getRuleFromSchema({type:"array",items:i.slice(0,-2)}).schema:{type:e[0]},e.slice(1).map((t=>{const e=t.indexOf(":");if(-1!==e){const i=t.substr(0,e).trim();let r=t.substr(e+1).trim();"true"===r||"false"===r?r="true"===r:Number.isNaN(Number(r))||(r=Number(r)),n[i]=r}else t.startsWith("no-")?n[t.slice(3)]=!1:n[t]=!0})),n}makeError({type:t,field:e,expected:n,actual:i,messages:r}){const s={type:`"${t}"`,message:`"${r[t]}"`};s.field=e?`"${e}"`:"field",null!=n&&(s.expected=n),null!=i&&(s.actual=i);return`errors.push({ ${Object.keys(s).map((t=>`${t}: ${s[t]}`)).join(", ")} });`}makeCustomValidator({vName:t="value",fnName:e="custom",ruleIndex:n,path:i,schema:r,context:s,messages:a}){const o="rule"+n,u="fnCustomErrors"+n;if("function"==typeof r[e]){if(s.customs[n]?(s.customs[n].messages=a,s.customs[n].schema=r):s.customs[n]={messages:a,schema:r},this.opts.useNewCustomCheckerFunction)return`\n               \t\tconst ${o} = context.customs[${n}];\n\t\t\t\t\tconst ${u} = [];\n\t\t\t\t\t${t} = ${s.async?"await ":""}${o}.schema.${e}.call(this, ${t}, ${u} , ${o}.schema, "${i}", parent, context);\n\t\t\t\t\tif (Array.isArray(${u} )) {\n                  \t\t${u} .forEach(err => errors.push(Object.assign({ message: ${o}.messages[err.type], field }, err)));\n\t\t\t\t\t}\n\t\t\t\t`;const l="res_"+o;return`\n\t\t\t\tconst ${o} = context.customs[${n}];\n\t\t\t\tconst ${l} = ${s.async?"await ":""}${o}.schema.${e}.call(this, ${t}, ${o}.schema, "${i}", parent, context);\n\t\t\t\tif (Array.isArray(${l})) {\n\t\t\t\t\t${l}.forEach(err => errors.push(Object.assign({ message: ${o}.messages[err.type], field }, err)));\n\t\t\t\t}\n\t\t`}return""}add(t,e){this.rules[t]=e}addMessage(t,e){this.messages[t]=e}alias(t,e){if(this.rules[t])throw new Error("Alias name must not be a rule name");this.aliases[t]=e}plugin(t){if("function"!=typeof t)throw new Error("Plugin fn type must be function");return t(this)}},Tt=Mt,Vt=/({{ *| *}})/g;function $t(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object.keys(t).join("|");if(""===n)return!1;var i="(\\b(".concat(n,")\\b)(((\\.[a-zA-Z_][a-zA-Z0-9_]*)|(\\[[0-9]*\\]))*)(?![a-z,A-Z_0-9])");return e?i:new RegExp(i,"g")}var jt=/{{((?!}}).)*}}/g,Nt=/( *mc-if *= *" *)[^"]*(?=")/g,Bt=/'.*'/g,Rt=/^ *([0-9.]+|('([^']|\\')*([^\\]')))( *\+ *([0-9.]+|('([^']|\\')*([^\\]'))))* *$/g,Lt=/^( *([0-9.]+|('([^']|\\')*([^\\]')))( *\+ *([0-9.]+|('([^']|\\')*([^\\]'))))* *)(==|===)( *([0-9.]+|('([^']|\\')*([^\\]')))( *\+ *([0-9.]+|('([^']|\\')*([^\\]'))))* *)$/g,Ft=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:N,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:window;gi(r,i)||(r[i]={});for(var s=r[i],a=t.split("."),o=0;o<a.length-1;o++)gi(s,a[o])||(s[a[o]]={}),s=s[a[o]];return!(gi(s,a[a.length-1])&&!n)&&(s[a[a.length-1]]=e,!0)},zt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:N,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window;""!==e&&(t=e+"."+t);for(var i,r=n,s=t.replaceAll(/\]/g,"").replaceAll(/\[/g,".").split("."),a=0;a<s.length;a++){if(!gi(r,s[a]))return;i=r[s[a]],r=r[s[a]]}return i},Gt="INUMBER",qt="IOP1",Kt="IOP2",Wt="IOP3",Jt="IVAR",Ht="IVARNAME",Ut="IFUNCALL",Qt="IFUNDEF",Zt="IEXPR",Xt="IEXPREVAL",Yt="IMEMBER",te="IENDSTATEMENT",ee="IARRAY";function ne(t,e){this.type=t,this.value=null!=e?e:0}function ie(t){return new ne(qt,t)}function re(t){return new ne(Kt,t)}function se(t){return new ne(Wt,t)}function ae(t,e,n,i,r){for(var s,a,o,u,l=[],c=[],h=0;h<t.length;h++){var d=t[h],p=d.type;if(p===Gt||p===Ht)Array.isArray(d.value)?l.push.apply(l,ae(d.value.map((function(t){return new ne(Gt,t)})).concat(new ne(ee,d.value.length)),e,n,i,r)):l.push(d);else if(p===Jt&&r.hasOwnProperty(d.value))d=new ne(Gt,r[d.value]),l.push(d);else if(p===Kt&&l.length>1)a=l.pop(),s=l.pop(),u=n[d.value],d=new ne(Gt,u(s.value,a.value)),l.push(d);else if(p===Wt&&l.length>2)o=l.pop(),a=l.pop(),s=l.pop(),"?"===d.value?l.push(s.value?a.value:o.value):(u=i[d.value],d=new ne(Gt,u(s.value,a.value,o.value)),l.push(d));else if(p===qt&&l.length>0)s=l.pop(),u=e[d.value],d=new ne(Gt,u(s.value)),l.push(d);else if(p===Zt){for(;l.length>0;)c.push(l.shift());c.push(new ne(Zt,ae(d.value,e,n,i,r)))}else if(p===Yt&&l.length>0)s=l.pop(),l.push(new ne(Gt,s.value[d.value]));else{for(;l.length>0;)c.push(l.shift());c.push(d)}}for(;l.length>0;)c.push(l.shift());return c}function oe(t,e,n){for(var i=[],r=0;r<t.length;r++){var s=t[r],a=s.type;if(a===Jt&&s.value===e)for(var o=0;o<n.tokens.length;o++){var u,l=n.tokens[o];u=l.type===qt?ie(l.value):l.type===Kt?re(l.value):l.type===Wt?se(l.value):new ne(l.type,l.value),i.push(u)}else a===Zt?i.push(new ne(Zt,oe(s.value,e,n))):i.push(s)}return i}function ue(t,e,n){var i,r,s,a,o,u,l=[];if(ce(t))return he(t,n);for(var c=t.length,h=0;h<c;h++){var d=t[h],p=d.type;if(p===Gt||p===Ht)l.push(d.value);else if(p===Kt)r=l.pop(),i=l.pop(),"and"===d.value?l.push(!!i&&!!ue(r,e,n)):"or"===d.value?l.push(!!i||!!ue(r,e,n)):"="===d.value?(a=e.binaryOps[d.value],l.push(a(i,ue(r,e,n),n))):(a=e.binaryOps[d.value],l.push(a(he(i,n),he(r,n))));else if(p===Wt)s=l.pop(),r=l.pop(),i=l.pop(),"?"===d.value?l.push(ue(i?r:s,e,n)):(a=e.ternaryOps[d.value],l.push(a(he(i,n),he(r,n),he(s,n))));else if(p===Jt)if(d.value in e.functions)l.push(e.functions[d.value]);else if(d.value in e.unaryOps&&e.parser.isOperatorEnabled(d.value))l.push(e.unaryOps[d.value]);else{var f=n[d.value];if(void 0===f)throw new Error("undefined variable: "+d.value);l.push(f)}else if(p===qt)i=l.pop(),a=e.unaryOps[d.value],l.push(a(he(i,n)));else if(p===Ut){for(u=d.value,o=[];u-- >0;)o.unshift(he(l.pop(),n));if(!(a=l.pop()).apply||!a.call)throw new Error(a+" is not a function");l.push(a.apply(void 0,o))}else if(p===Qt)l.push(function(){for(var t=l.pop(),i=[],r=d.value;r-- >0;)i.unshift(l.pop());var s=l.pop(),a=function(){for(var r=Object.assign({},n),s=0,a=i.length;s<a;s++)r[i[s]]=arguments[s];return ue(t,e,r)};return Object.defineProperty(a,"name",{value:s,writable:!1}),n[s]=a,a}());else if(p===Zt)l.push(le(d,e));else if(p===Xt)l.push(d);else if(p===Yt)i=l.pop(),l.push(i[d.value]);else if(p===te)l.pop();else{if(p!==ee)throw new Error("invalid Expression");for(u=d.value,o=[];u-- >0;)o.unshift(l.pop());l.push(o)}}if(l.length>1)throw new Error("invalid Expression (parity)");return 0===l[0]?0:he(l[0],n)}function le(t,e,n){return ce(t)?t:{type:Xt,value:function(n){return ue(t.value,e,n)}}}function ce(t){return t&&t.type===Xt}function he(t,e){return ce(t)?t.value(e):t}function de(t,e){for(var n,i,r,s,a,o,u=[],l=0;l<t.length;l++){var c=t[l],h=c.type;if(h===Gt)"number"==typeof c.value&&c.value<0?u.push("("+c.value+")"):Array.isArray(c.value)?u.push("["+c.value.map(pe).join(", ")+"]"):u.push(pe(c.value));else if(h===Kt)i=u.pop(),n=u.pop(),s=c.value,e?"^"===s?u.push("Math.pow("+n+", "+i+")"):"and"===s?u.push("(!!"+n+" && !!"+i+")"):"or"===s?u.push("(!!"+n+" || !!"+i+")"):"||"===s?u.push("(function(a,b){ return Array.isArray(a) && Array.isArray(b) ? a.concat(b) : String(a) + String(b); }(("+n+"),("+i+")))"):"=="===s?u.push("("+n+" === "+i+")"):"!="===s?u.push("("+n+" !== "+i+")"):"["===s?u.push(n+"[("+i+") | 0]"):u.push("("+n+" "+s+" "+i+")"):"["===s?u.push(n+"["+i+"]"):u.push("("+n+" "+s+" "+i+")");else if(h===Wt){if(r=u.pop(),i=u.pop(),n=u.pop(),"?"!==(s=c.value))throw new Error("invalid Expression");u.push("("+n+" ? "+i+" : "+r+")")}else if(h===Jt||h===Ht)u.push(c.value);else if(h===qt)n=u.pop(),"-"===(s=c.value)||"+"===s?u.push("("+s+n+")"):e?"not"===s?u.push("(!"+n+")"):"!"===s?u.push("fac("+n+")"):u.push(s+"("+n+")"):"!"===s?u.push("("+n+"!)"):u.push("("+s+" "+n+")");else if(h===Ut){for(o=c.value,a=[];o-- >0;)a.unshift(u.pop());s=u.pop(),u.push(s+"("+a.join(", ")+")")}else if(h===Qt){for(i=u.pop(),o=c.value,a=[];o-- >0;)a.unshift(u.pop());n=u.pop(),e?u.push("("+n+" = function("+a.join(", ")+") { return "+i+" })"):u.push("("+n+"("+a.join(", ")+") = "+i+")")}else if(h===Yt)n=u.pop(),u.push(n+"."+c.value);else if(h===ee){for(o=c.value,a=[];o-- >0;)a.unshift(u.pop());u.push("["+a.join(", ")+"]")}else if(h===Zt)u.push("("+de(c.value,e)+")");else if(h!==te)throw new Error("invalid Expression")}return u.length>1&&(u=e?[u.join(",")]:[u.join(";")]),String(u[0])}function pe(t){return"string"==typeof t?JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029"):t}function fe(t,e){for(var n=0;n<t.length;n++)if(t[n]===e)return!0;return!1}function me(t,e,n){for(var i=!!(n=n||{}).withMembers,r=null,s=0;s<t.length;s++){var a=t[s];a.type===Jt||a.type===Ht?i||fe(e,a.value)?null!==r?(fe(e,r)||e.push(r),r=a.value):r=a.value:e.push(a.value):a.type===Yt&&i&&null!==r?r+="."+a.value:a.type===Zt?me(a.value,e,n):null!==r&&(fe(e,r)||e.push(r),r=null)}null===r||fe(e,r)||e.push(r)}function ve(t,e){this.tokens=t,this.parser=e,this.unaryOps=e.unaryOps,this.binaryOps=e.binaryOps,this.ternaryOps=e.ternaryOps,this.functions=e.functions}ne.prototype.toString=function(){switch(this.type){case Gt:case qt:case Kt:case Wt:case Jt:case Ht:case te:return this.value;case Ut:return"CALL "+this.value;case Qt:return"DEF "+this.value;case ee:return"ARRAY "+this.value;case Yt:return"."+this.value;default:return"Invalid Instruction"}},ve.prototype.simplify=function(t){return t=t||{},new ve(ae(this.tokens,this.unaryOps,this.binaryOps,this.ternaryOps,t),this.parser)},ve.prototype.substitute=function(t,e){return e instanceof ve||(e=this.parser.parse(String(e))),new ve(oe(this.tokens,t,e),this.parser)},ve.prototype.evaluate=function(t){return t=t||{},ue(this.tokens,this,t)},ve.prototype.toString=function(){return de(this.tokens,!1)},ve.prototype.symbols=function(t){t=t||{};var e=[];return me(this.tokens,e,t),e},ve.prototype.variables=function(t){t=t||{};var e=[];me(this.tokens,e,t);var n=this.functions;return e.filter((function(t){return!(t in n)}))},ve.prototype.toJSFunction=function(t,e){var n=this,i=new Function(t,"with(this.functions) with (this.ternaryOps) with (this.binaryOps) with (this.unaryOps) { return "+de(this.simplify(e).tokens,!0)+"; }");return function(){return i.apply(n,arguments)}};var ge="TEOF",ye="TOP",ke="TNUMBER",be="TSTRING",xe="TPAREN",Ce="TBRACKET",Ie="TCOMMA",we="TNAME",Ee="TSEMICOLON";function Ae(t,e,n){this.type=t,this.value=e,this.index=n}function Pe(t,e){this.pos=0,this.current=null,this.unaryOps=t.unaryOps,this.binaryOps=t.binaryOps,this.ternaryOps=t.ternaryOps,this.consts=t.consts,this.expression=e,this.savedPosition=0,this.savedCurrent=null,this.options=t.options,this.parser=t}Ae.prototype.toString=function(){return this.type+": "+this.value},Pe.prototype.newToken=function(t,e,n){return new Ae(t,e,null!=n?n:this.pos)},Pe.prototype.save=function(){this.savedPosition=this.pos,this.savedCurrent=this.current},Pe.prototype.restore=function(){this.pos=this.savedPosition,this.current=this.savedCurrent},Pe.prototype.next=function(){return this.pos>=this.expression.length?this.newToken(ge,"EOF"):this.isWhitespace()||this.isComment()?this.next():this.isRadixInteger()||this.isNumber()||this.isOperator()||this.isString()||this.isParen()||this.isBracket()||this.isComma()||this.isSemicolon()||this.isNamedOp()||this.isConst()||this.isName()?this.current:void this.parseError('Unknown character "'+this.expression.charAt(this.pos)+'"')},Pe.prototype.isString=function(){var t=!1,e=this.pos,n=this.expression.charAt(e);if("'"===n||'"'===n)for(var i=this.expression.indexOf(n,e+1);i>=0&&this.pos<this.expression.length;){if(this.pos=i+1,"\\"!==this.expression.charAt(i-1)){var r=this.expression.substring(e+1,i);this.current=this.newToken(be,this.unescape(r),e),t=!0;break}i=this.expression.indexOf(n,i+1)}return t},Pe.prototype.isParen=function(){var t=this.expression.charAt(this.pos);return("("===t||")"===t)&&(this.current=this.newToken(xe,t),this.pos++,!0)},Pe.prototype.isBracket=function(){var t=this.expression.charAt(this.pos);return!("["!==t&&"]"!==t||!this.isOperatorEnabled("["))&&(this.current=this.newToken(Ce,t),this.pos++,!0)},Pe.prototype.isComma=function(){return","===this.expression.charAt(this.pos)&&(this.current=this.newToken(Ie,","),this.pos++,!0)},Pe.prototype.isSemicolon=function(){return";"===this.expression.charAt(this.pos)&&(this.current=this.newToken(Ee,";"),this.pos++,!0)},Pe.prototype.isConst=function(){for(var t=this.pos,e=t;e<this.expression.length;e++){var n=this.expression.charAt(e);if(n.toUpperCase()===n.toLowerCase()&&(e===this.pos||"_"!==n&&"."!==n&&(n<"0"||n>"9")))break}if(e>t){var i=this.expression.substring(t,e);if(i in this.consts)return this.current=this.newToken(ke,this.consts[i]),this.pos+=i.length,!0}return!1},Pe.prototype.isNamedOp=function(){for(var t=this.pos,e=t;e<this.expression.length;e++){var n=this.expression.charAt(e);if(n.toUpperCase()===n.toLowerCase()&&(e===this.pos||"_"!==n&&(n<"0"||n>"9")))break}if(e>t){var i=this.expression.substring(t,e);if(this.isOperatorEnabled(i)&&(i in this.binaryOps||i in this.unaryOps||i in this.ternaryOps))return this.current=this.newToken(ye,i),this.pos+=i.length,!0}return!1},Pe.prototype.isName=function(){for(var t=this.pos,e=t,n=!1;e<this.expression.length;e++){var i=this.expression.charAt(e);if(i.toUpperCase()===i.toLowerCase()){if(e===this.pos&&("$"===i||"_"===i)){"_"===i&&(n=!0);continue}if(e===this.pos||!n||"_"!==i&&(i<"0"||i>"9"))break}else n=!0}if(n){var r=this.expression.substring(t,e);return this.current=this.newToken(we,r),this.pos+=r.length,!0}return!1},Pe.prototype.isWhitespace=function(){for(var t=!1,e=this.expression.charAt(this.pos);!(" "!==e&&"\t"!==e&&"\n"!==e&&"\r"!==e||(t=!0,this.pos++,this.pos>=this.expression.length));)e=this.expression.charAt(this.pos);return t};var Oe=/^[0-9a-f]{4}$/i;function Se(t,e,n){this.parser=t,this.tokens=e,this.current=null,this.nextToken=null,this.next(),this.savedCurrent=null,this.savedNextToken=null,this.allowMemberAccess=!1!==n.allowMemberAccess}Pe.prototype.unescape=function(t){var e=t.indexOf("\\");if(e<0)return t;for(var n=t.substring(0,e);e>=0;){var i=t.charAt(++e);switch(i){case"'":n+="'";break;case'"':n+='"';break;case"\\":n+="\\";break;case"/":n+="/";break;case"b":n+="\b";break;case"f":n+="\f";break;case"n":n+="\n";break;case"r":n+="\r";break;case"t":n+="\t";break;case"u":var r=t.substring(e+1,e+5);Oe.test(r)||this.parseError("Illegal escape sequence: \\u"+r),n+=String.fromCharCode(parseInt(r,16)),e+=4;break;default:throw this.parseError('Illegal escape sequence: "\\'+i+'"')}++e;var s=t.indexOf("\\",e);n+=t.substring(e,s<0?t.length:s),e=s}return n},Pe.prototype.isComment=function(){return"/"===this.expression.charAt(this.pos)&&"*"===this.expression.charAt(this.pos+1)&&(this.pos=this.expression.indexOf("*/",this.pos)+2,1===this.pos&&(this.pos=this.expression.length),!0)},Pe.prototype.isRadixInteger=function(){var t,e,n=this.pos;if(n>=this.expression.length-2||"0"!==this.expression.charAt(n))return!1;if(++n,"x"===this.expression.charAt(n))t=16,e=/^[0-9a-f]$/i,++n;else{if("b"!==this.expression.charAt(n))return!1;t=2,e=/^[01]$/i,++n}for(var i=!1,r=n;n<this.expression.length;){var s=this.expression.charAt(n);if(!e.test(s))break;n++,i=!0}return i&&(this.current=this.newToken(ke,parseInt(this.expression.substring(r,n),t)),this.pos=n),i},Pe.prototype.isNumber=function(){for(var t,e=!1,n=this.pos,i=n,r=n,s=!1,a=!1;n<this.expression.length&&((t=this.expression.charAt(n))>="0"&&t<="9"||!s&&"."===t);)"."===t?s=!0:a=!0,n++,e=a;if(e&&(r=n),"e"===t||"E"===t){n++;for(var o=!0,u=!1;n<this.expression.length;){if(t=this.expression.charAt(n),!o||"+"!==t&&"-"!==t){if(!(t>="0"&&t<="9"))break;u=!0,o=!1}else o=!1;n++}u||(n=r)}return e?(this.current=this.newToken(ke,parseFloat(this.expression.substring(i,n))),this.pos=n):this.pos=r,e},Pe.prototype.isOperator=function(){var t=this.pos,e=this.expression.charAt(this.pos);if("+"===e||"-"===e||"*"===e||"/"===e||"%"===e||"^"===e||"?"===e||":"===e||"."===e)this.current=this.newToken(ye,e);else if("∙"===e||"•"===e)this.current=this.newToken(ye,"*");else if(">"===e)"="===this.expression.charAt(this.pos+1)?(this.current=this.newToken(ye,">="),this.pos++):this.current=this.newToken(ye,">");else if("<"===e)"="===this.expression.charAt(this.pos+1)?(this.current=this.newToken(ye,"<="),this.pos++):this.current=this.newToken(ye,"<");else if("|"===e){if("|"!==this.expression.charAt(this.pos+1))return!1;this.current=this.newToken(ye,"||"),this.pos++}else if("="===e)"="===this.expression.charAt(this.pos+1)?(this.current=this.newToken(ye,"=="),this.pos++):this.current=this.newToken(ye,e);else{if("!"!==e)return!1;"="===this.expression.charAt(this.pos+1)?(this.current=this.newToken(ye,"!="),this.pos++):this.current=this.newToken(ye,e)}return this.pos++,!!this.isOperatorEnabled(this.current.value)||(this.pos=t,!1)},Pe.prototype.isOperatorEnabled=function(t){return this.parser.isOperatorEnabled(t)},Pe.prototype.getCoordinates=function(){var t,e=0,n=-1;do{e++,t=this.pos-n,n=this.expression.indexOf("\n",n+1)}while(n>=0&&n<this.pos);return{line:e,column:t}},Pe.prototype.parseError=function(t){var e=this.getCoordinates();throw new Error("parse error ["+e.line+":"+e.column+"]: "+t)},Se.prototype.next=function(){return this.current=this.nextToken,this.nextToken=this.tokens.next()},Se.prototype.tokenMatches=function(t,e){return void 0===e||(Array.isArray(e)?fe(e,t.value):"function"==typeof e?e(t):t.value===e)},Se.prototype.save=function(){this.savedCurrent=this.current,this.savedNextToken=this.nextToken,this.tokens.save()},Se.prototype.restore=function(){this.tokens.restore(),this.current=this.savedCurrent,this.nextToken=this.savedNextToken},Se.prototype.accept=function(t,e){return!(this.nextToken.type!==t||!this.tokenMatches(this.nextToken,e))&&(this.next(),!0)},Se.prototype.expect=function(t,e){if(!this.accept(t,e)){var n=this.tokens.getCoordinates();throw new Error("parse error ["+n.line+":"+n.column+"]: Expected "+(e||t))}},Se.prototype.parseAtom=function(t){var e=this.tokens.unaryOps;if(this.accept(we)||this.accept(ye,(function(t){return t.value in e})))t.push(new ne(Jt,this.current.value));else if(this.accept(ke))t.push(new ne(Gt,this.current.value));else if(this.accept(be))t.push(new ne(Gt,this.current.value));else if(this.accept(xe,"("))this.parseExpression(t),this.expect(xe,")");else{if(!this.accept(Ce,"["))throw new Error("unexpected "+this.nextToken);if(this.accept(Ce,"]"))t.push(new ne(ee,0));else{var n=this.parseArrayList(t);t.push(new ne(ee,n))}}},Se.prototype.parseExpression=function(t){var e=[];this.parseUntilEndStatement(t,e)||(this.parseVariableAssignmentExpression(e),this.parseUntilEndStatement(t,e)||this.pushExpression(t,e))},Se.prototype.pushExpression=function(t,e){for(var n=0,i=e.length;n<i;n++)t.push(e[n])},Se.prototype.parseUntilEndStatement=function(t,e){return!!this.accept(Ee)&&(!this.nextToken||this.nextToken.type===ge||this.nextToken.type===xe&&")"===this.nextToken.value||e.push(new ne(te)),this.nextToken.type!==ge&&this.parseExpression(e),t.push(new ne(Zt,e)),!0)},Se.prototype.parseArrayList=function(t){for(var e=0;!this.accept(Ce,"]");)for(this.parseExpression(t),++e;this.accept(Ie);)this.parseExpression(t),++e;return e},Se.prototype.parseVariableAssignmentExpression=function(t){for(this.parseConditionalExpression(t);this.accept(ye,"=");){var e=t.pop(),n=[],i=t.length-1;if(e.type!==Ut){if(e.type!==Jt&&e.type!==Yt)throw new Error("expected variable for assignment");this.parseVariableAssignmentExpression(n),t.push(new ne(Ht,e.value)),t.push(new ne(Zt,n)),t.push(re("="))}else{if(!this.tokens.isOperatorEnabled("()="))throw new Error("function definition is not permitted");for(var r=0,s=e.value+1;r<s;r++){var a=i-r;t[a].type===Jt&&(t[a]=new ne(Ht,t[a].value))}this.parseVariableAssignmentExpression(n),t.push(new ne(Zt,n)),t.push(new ne(Qt,e.value))}}},Se.prototype.parseConditionalExpression=function(t){for(this.parseOrExpression(t);this.accept(ye,"?");){var e=[],n=[];this.parseConditionalExpression(e),this.expect(ye,":"),this.parseConditionalExpression(n),t.push(new ne(Zt,e)),t.push(new ne(Zt,n)),t.push(se("?"))}},Se.prototype.parseOrExpression=function(t){for(this.parseAndExpression(t);this.accept(ye,"or");){var e=[];this.parseAndExpression(e),t.push(new ne(Zt,e)),t.push(re("or"))}},Se.prototype.parseAndExpression=function(t){for(this.parseComparison(t);this.accept(ye,"and");){var e=[];this.parseComparison(e),t.push(new ne(Zt,e)),t.push(re("and"))}};var _e=["==","!=","<","<=",">=",">","in"];Se.prototype.parseComparison=function(t){for(this.parseAddSub(t);this.accept(ye,_e);){var e=this.current;this.parseAddSub(t),t.push(re(e.value))}};var De=["+","-","||"];Se.prototype.parseAddSub=function(t){for(this.parseTerm(t);this.accept(ye,De);){var e=this.current;this.parseTerm(t),t.push(re(e.value))}};var Me=["*","/","%"];function Te(t,e){return Number(t)+Number(e)}function Ve(t,e){return t-e}function $e(t,e){return t*e}function je(t,e){return t/e}function Ne(t,e){return t%e}function Be(t,e){return Array.isArray(t)&&Array.isArray(e)?t.concat(e):""+t+e}function Re(t,e){return t===e}function Le(t,e){return t!==e}function Fe(t,e){return t>e}function ze(t,e){return t<e}function Ge(t,e){return t>=e}function qe(t,e){return t<=e}function Ke(t,e){return Boolean(t&&e)}function We(t,e){return Boolean(t||e)}function Je(t,e){return fe(e,t)}function He(t){return(Math.exp(t)-Math.exp(-t))/2}function Ue(t){return(Math.exp(t)+Math.exp(-t))/2}function Qe(t){return t===1/0?1:t===-1/0?-1:(Math.exp(t)-Math.exp(-t))/(Math.exp(t)+Math.exp(-t))}function Ze(t){return t===-1/0?t:Math.log(t+Math.sqrt(t*t+1))}function Xe(t){return Math.log(t+Math.sqrt(t*t-1))}function Ye(t){return Math.log((1+t)/(1-t))/2}function tn(t){return Math.log(t)*Math.LOG10E}function en(t){return-t}function nn(t){return!t}function rn(t){return t<0?Math.ceil(t):Math.floor(t)}function sn(t){return Math.random()*(t||1)}function an(t){return un(t+1)}Se.prototype.parseTerm=function(t){for(this.parseFactor(t);this.accept(ye,Me);){var e=this.current;this.parseFactor(t),t.push(re(e.value))}},Se.prototype.parseFactor=function(t){var e=this.tokens.unaryOps;if(this.save(),this.accept(ye,(function(t){return t.value in e}))){if("-"!==this.current.value&&"+"!==this.current.value){if(this.nextToken.type===xe&&"("===this.nextToken.value)return this.restore(),void this.parseExponential(t);if(this.nextToken.type===Ee||this.nextToken.type===Ie||this.nextToken.type===ge||this.nextToken.type===xe&&")"===this.nextToken.value)return this.restore(),void this.parseAtom(t)}var n=this.current;this.parseFactor(t),t.push(ie(n.value))}else this.parseExponential(t)},Se.prototype.parseExponential=function(t){for(this.parsePostfixExpression(t);this.accept(ye,"^");)this.parseFactor(t),t.push(re("^"))},Se.prototype.parsePostfixExpression=function(t){for(this.parseFunctionCall(t);this.accept(ye,"!");)t.push(ie("!"))},Se.prototype.parseFunctionCall=function(t){var e=this.tokens.unaryOps;if(this.accept(ye,(function(t){return t.value in e}))){var n=this.current;this.parseAtom(t),t.push(ie(n.value))}else for(this.parseMemberExpression(t);this.accept(xe,"(");)if(this.accept(xe,")"))t.push(new ne(Ut,0));else{var i=this.parseArgumentList(t);t.push(new ne(Ut,i))}},Se.prototype.parseArgumentList=function(t){for(var e=0;!this.accept(xe,")");)for(this.parseExpression(t),++e;this.accept(Ie);)this.parseExpression(t),++e;return e},Se.prototype.parseMemberExpression=function(t){for(this.parseAtom(t);this.accept(ye,".")||this.accept(Ce,"[");){var e=this.current;if("."===e.value){if(!this.allowMemberAccess)throw new Error('unexpected ".", member access is not permitted');this.expect(we),t.push(new ne(Yt,this.current.value))}else{if("["!==e.value)throw new Error("unexpected symbol: "+e.value);if(!this.tokens.isOperatorEnabled("["))throw new Error('unexpected "[]", arrays are disabled');this.parseExpression(t),this.expect(Ce,"]"),t.push(re("["))}}};var on=[.9999999999999971,57.15623566586292,-59.59796035547549,14.136097974741746,-.4919138160976202,3399464998481189e-20,4652362892704858e-20,-9837447530487956e-20,.0001580887032249125,-.00021026444172410488,.00021743961811521265,-.0001643181065367639,8441822398385275e-20,-26190838401581408e-21,36899182659531625e-22];function un(t){var e,n;if(function(t){return isFinite(t)&&t===Math.round(t)}(t)){if(t<=0)return isFinite(t)?1/0:NaN;if(t>171)return 1/0;for(var i=t-2,r=t-1;i>1;)r*=i,i--;return 0===r&&(r=1),r}if(t<.5)return Math.PI/(Math.sin(Math.PI*t)*un(1-t));if(t>=171.35)return 1/0;if(t>85){var s=t*t,a=s*t,o=a*t,u=o*t;return Math.sqrt(2*Math.PI/t)*Math.pow(t/Math.E,t)*(1+1/(12*t)+1/(288*s)-139/(51840*a)-571/(2488320*o)+163879/(209018880*u)+5246819/(75246796800*u*t))}--t,n=on[0];for(var l=1;l<on.length;++l)n+=on[l]/(t+l);return e=t+4.7421875+.5,Math.sqrt(2*Math.PI)*Math.pow(e,t+.5)*Math.exp(-e)*n}function ln(t){return Array.isArray(t)?t.length:String(t).length}function cn(){for(var t=0,e=0,n=0;n<arguments.length;n++){var i,r=Math.abs(arguments[n]);e<r?(t=t*(i=e/r)*i+1,e=r):t+=r>0?(i=r/e)*i:r}return e===1/0?1/0:e*Math.sqrt(t)}function hn(t,e,n){return t?e:n}function dn(t,e){return void 0===e||0==+e?Math.round(t):(t=+t,e=-+e,isNaN(t)||"number"!=typeof e||e%1!=0?NaN:(t=t.toString().split("e"),+((t=(t=Math.round(+(t[0]+"e"+(t[1]?+t[1]-e:-e)))).toString().split("e"))[0]+"e"+(t[1]?+t[1]+e:e))))}function pn(t,e,n){return n&&(n[t]=e),e}function fn(t,e){return t[0|e]}function mn(t){return 1===arguments.length&&Array.isArray(t)?Math.max.apply(Math,t):Math.max.apply(Math,arguments)}function vn(t){return 1===arguments.length&&Array.isArray(t)?Math.min.apply(Math,t):Math.min.apply(Math,arguments)}function gn(t,e){if("function"!=typeof t)throw new Error("First argument to map is not a function");if(!Array.isArray(e))throw new Error("Second argument to map is not an array");return e.map((function(e,n){return t(e,n)}))}function yn(t,e,n){if("function"!=typeof t)throw new Error("First argument to fold is not a function");if(!Array.isArray(n))throw new Error("Second argument to fold is not an array");return n.reduce((function(e,n,i){return t(e,n,i)}),e)}function kn(t,e){if("function"!=typeof t)throw new Error("First argument to filter is not a function");if(!Array.isArray(e))throw new Error("Second argument to filter is not an array");return e.filter((function(e,n){return t(e,n)}))}function bn(t,e){if(!Array.isArray(e)&&"string"!=typeof e)throw new Error("Second argument to indexOf is not a string or array");return e.indexOf(t)}function xn(t,e){if(!Array.isArray(e))throw new Error("Second argument to join is not an array");return e.join(t)}function Cn(t){return(t>0)-(t<0)||+t}var In=1/3;function wn(t){return t<0?-Math.pow(-t,In):Math.pow(t,In)}function En(t){return Math.exp(t)-1}function An(t){return Math.log(1+t)}function Pn(t){return Math.log(t)/Math.LN2}function On(t){this.options=t||{},this.unaryOps={sin:Math.sin,cos:Math.cos,tan:Math.tan,asin:Math.asin,acos:Math.acos,atan:Math.atan,sinh:Math.sinh||He,cosh:Math.cosh||Ue,tanh:Math.tanh||Qe,asinh:Math.asinh||Ze,acosh:Math.acosh||Xe,atanh:Math.atanh||Ye,sqrt:Math.sqrt,cbrt:Math.cbrt||wn,log:Math.log,log2:Math.log2||Pn,ln:Math.log,lg:Math.log10||tn,log10:Math.log10||tn,expm1:Math.expm1||En,log1p:Math.log1p||An,abs:Math.abs,ceil:Math.ceil,floor:Math.floor,round:Math.round,trunc:Math.trunc||rn,"-":en,"+":Number,exp:Math.exp,not:nn,length:ln,"!":an,sign:Math.sign||Cn},this.binaryOps={"+":Te,"-":Ve,"*":$e,"/":je,"%":Ne,"^":Math.pow,"||":Be,"==":Re,"!=":Le,">":Fe,"<":ze,">=":Ge,"<=":qe,and:Ke,or:We,in:Je,"=":pn,"[":fn},this.ternaryOps={"?":hn},this.functions={random:sn,fac:an,min:vn,max:mn,hypot:Math.hypot||cn,pyt:Math.hypot||cn,pow:Math.pow,atan2:Math.atan2,if:hn,gamma:un,roundTo:dn,map:gn,fold:yn,filter:kn,indexOf:bn,join:xn},this.consts={E:Math.E,PI:Math.PI,true:!0,false:!1}}On.prototype.parse=function(t){var e=[],n=new Se(this,new Pe(this,t),{allowMemberAccess:this.options.allowMemberAccess});return n.parseExpression(e),n.expect(ge,"EOF"),new ve(e,this)},On.prototype.evaluate=function(t,e){return this.parse(t).evaluate(e)};var Sn=new On;On.parse=function(t){return Sn.parse(t)},On.evaluate=function(t,e){return Sn.parse(t).evaluate(e)};var _n={"+":"add","-":"subtract","*":"multiply","/":"divide","%":"remainder","^":"power","!":"factorial","<":"comparison",">":"comparison","<=":"comparison",">=":"comparison","==":"comparison","!=":"comparison","||":"concatenate",and:"logical",or:"logical",not:"logical","?":"conditional",":":"conditional","=":"assignment","[":"array","()=":"fndef"};On.prototype.isOperatorEnabled=function(t){var e=function(t){return _n.hasOwnProperty(t)?_n[t]:t}(t),n=this.options.operators||{};return!(e in n)||!!n[e]};var Dn=new Set(["getValue","setValue","_getFromProxy","__createPathProxies","hasOwnProperty","pushValue","removePathKey","removeKey","restoreKey","getKeys","exportFlattened","isArray","push","sortBy","findIndex"]);function Mn(t){var e={},n=new Set,i=Array.isArray(t),r=i?t.length:0,s=null;return new Proxy(t,{get:function(a,o){return"length"===o&&i?r:Dn.has(o)?this[o]:n.has(o)?void 0:(i&&null!==s&&(o=s[o]),gi(e,o)?e[o]:t[o])},isArray:function(){return i},_getFromProxy:function(t){return gi(e,t)?e[t]:void 0},set:_i,sortBy:function(t){if(s=null,!i)return!1;s=function(t,e){for(var n=[],i=0;i<t.length;i++)n.push([t[i],i]);n.sort((function(t,n){return t[0][e]<n[0][e]?-1:1}));var r=[];for(var s in n)r.push(n[s][1]);return r}(this,t)},__createPathProxies:function(n){for(var r=e,a=t,o=0;o<n.length-1;o++){var u=i&&null!==s?s[n[o]]:n[o];if(0===o?void 0===r[u]:void 0===r._getFromProxy(u)){var l=Mn(void 0!==a&&a[u]||{});0===o?r[u]=l:r.setValue(u,l)}r=r[u],a=void 0!==a?a[u]:{}}return{currentObject:r,currentRealObect:a}},findIndex:function(t){if(!i)return null;for(var e=0;e<r;e++)if(t(this[e]))return e;return null},setValue:function(t,e){var i=t.split("."),r=this.__createPathProxies(i).currentObject,s=e;return mi(e)&&(s=Mn(e)),1===i.length?(r[i[i.length-1]]=s,n.delete(s)):(r.setValue(i[i.length-1],s),r.restoreKey(i[i.length-1])),!0},pushValue:function(e,n){var i=e.split("."),r=this.__createPathProxies(i),s=r.currentObject;if(void 0===r.currentRealObect)return!1;var a=i[i.length-1],o=s[a],u=t[a];if(""===e&&(o=this,u=t),1!==i.length)return s.pushValue(a,n);var l=!1;if(void 0!==o){if(l=!0,!o.isArray())return!1}else if(!Array.isArray(u))return!1;if(!l){var c=Mn(u);s[a]=c,o=s[a]}return o.push(n),!0},push:function(t){return!!this.isArray()&&(e[r]=mi(t)?Mn(t):t,r+=1,!0)},removePathKey:function(t){var e=t.split(".");return this.__createPathProxies(e).currentObject.removeKey(e[e.length-1]),!0},removeKey:function(t){n.add(t)},restoreKey:function(t){n.delete(t)},hasOwnProperty:function(t){return!(n.has(t)||void 0===this[t])},getKeys:function(){var r;if(i)return[];var s=Object.keys(t);return(r=s).push.apply(r,k(Object.keys(e))),s=s.filter((function(t){return!n.has(t)}))},exportFlattened:function(){var n;if(i)if(n=[],null!==s)for(var r=0;r<s.length;r++){var a=s[r];if(gi(e,a)){var o=e[a];if(mi(o))try{n[r]=e[a].exportFlattened()}catch(t){n[r]=o}else n[r]=o}else n[r]=t[a]}else{n=k(t);for(var u=0,l=Object.entries(e);u<l.length;u++){var c=y(l[u],2),h=c[0],d=c[1];if(mi(d))try{n[h]=e[h].exportFlattened()}catch(t){n[h]=d}else n[h]=d}}else{n={};for(var p=this.getKeys(),f=0;f<p.length;f++){var m=p[f];void 0!==e[m]?n[m]=mi(e[m])?e[m].exportFlattened():e[m]:n[m]=t[m]}}return n}})}var Tn=new On,Vn=/ *mc-if *= *" */g;function $n(t){for(var e=t.split(/ *\+ */),n=0;n<e.length;n++)e[n]=e[n].trim(),e[n].match(Bt)&&(e[n]=e[n].substring(1,e[n].length-1));return e.join("")}function jn(t,e,n){function i(t){var i=t.match(Vn),r=Array.isArray(i);function s(t){return r&&(t=' mc-if="'.concat(t)),t}var a=(t=(t=t.replaceAll(/ *mc-if *= *" */g,"")).replaceAll(/ *mc-if *= *" */g,"")).match(Vt),o=t.replaceAll(Vt,""),u=$t(e.items),l=function(t){if(!mi(t))return!1;var e=Object.keys(t).join("|");if(""===e)return!1;var n="(\\b(".concat(e,"\\b))(?![a-z,A-Z_0-9.\\[])");return new RegExp(n,"g")}(e.keys);if(!1!==u&&(o=o.replaceAll(u,(function(t){if("initParams"===t||"attrs"===t)return s("undefined");var i=zt(t,"",e.items);return fi(i)&&(i="'".concat(n?$i(i):i,"'")),i}))),!1!==l&&(o=o.replaceAll(l,(function(t){var i=e.keys[t];return fi(i)&&(i="'".concat(n?$i(i):i,"'")),i}))),o.match(Lt)){var c=o.split(/===|==/);return c[0]=$n(c[0]),c[1]=$n(c[1]),s((c[0]===c[1]).toString())}try{var h=Tn.parse(o),d=Object.assign({},e.keys,e.items),p=h.evaluate(d);if(void 0!==p&&!isNaN(p))return s(p)}catch(t){}if(o.match(Rt))return s($n(o));var f=/===|==|>=|>|<=|<|!==|!=/g,m=o.split(f);if(2===m.length){var v=o.match(f)[0];try{var g=Tn.parse(m[0]),y=Tn.parse(m[1]),k=Object.assign({},e.keys,e.items);return s(function(t,e,n){switch(n){case"==":case"===":return t===e;case"!=":case"!==":return t!==e;case">":return t>e;case">=":return t>=e;case"<":return t<e;case"<=":return t<=e;default:return Mi.error("Not supported operator "+n),!1}}(g.evaluate(k),y.evaluate(k),v).toString())}catch(t){}}return s(null!==a?"{{".concat(o,"}}"):o)}return t.replaceAll(jt,i).replaceAll(Nt,i)}function Nn(t){var e,n=E(t.querySelectorAll("[mc-if]"));try{for(n.s();!(e=n.n()).done;){var i=e.value,r=i.getAttribute("mc-if");"true"===r?i.removeAttribute("mc-if"):"false"===r&&i.remove()}}catch(t){n.e(t)}finally{n.f()}}function Bn(t,e){if(!t.hasAttribute("mc-for")||!t.hasAttribute("mc-of"))return Mi.warning("Either mc-for and mc-of is missing from element"),!1;if(!t.getAttribute("mc-for").match(/^ *[a-zA-Z_][0-9a-zA-Z_]* *, *[a-zA-Z_][0-9a-zA-Z_]* *$/))return Mi.warning("mc-for attribute is not a valid expression"),!1;var n=function(t){var e="^ *".concat($t(t,!0)," *$");return new RegExp(e,"g")}(e),i=t.getAttribute("mc-of").match(n);if(1!==(null==i?void 0:i.length))return Mi.warning("mc-of attribute is not a valid expression"),!1;var r=zt(i[0].trim(),"",e);return void 0===r?(Mi.warning("mc-of value is undefined"),!1):mi(r)?r:(Mi.warning("mc-of value should be either an object or an array"),!1)}function Rn(t){var e=[],n=Mn(t.params);for(var i in t.items)n.setValue("keys.".concat(t.keys.key),i),n.setValue("items.".concat(t.keys.item),t.items[i]),e.push(Fn(t.template,n.exportFlattened(),!0));return e}function Ln(t,e){var n,i=E(t.querySelectorAll("[mc-for]"));try{for(i.s();!(n=i.n()).done;){var r=n.value,s=Bn(r,e.items);if(!1!==s&&mi(s)){var a=r.getAttribute("mc-for").split(","),o={key:a[0].trim(),item:a[1].trim()};r.removeAttribute("mc-for"),r.removeAttribute("mc-of");var u=Rn({template:r.outerHTML,keys:o,params:e,items:s});if(0!==u.length){for(var l=r,c=0;c<u.length;c++){var h=l.parentNode.insertBefore(u[c],l.nextSibling);l=h}r.remove()}else r.remove()}else r.remove()}}catch(t){i.e(t)}finally{i.f()}}function Fn(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(t=jn(t=t.replace(/^\s+|\s+$/g,""),e,n),!n)return t;var i=document.createElement("div");return i.innerHTML=t,Nn(i),Ln(i,e),1!==i.childElementCount?(console.error("parser only accepts close DOM trees (always contained on a single element). The root element can not have mc-for applied to it. Returning empty div"),document.createElement("div")):i.firstChild}var zn=function(t){t=t.replace(/ /g,"");var e=/\(([^\(\)]|\(([^\(\)]|\(([^\(\)]|\(([^\(\)])*\))*\))*\))*\)/.exec(t);if(void 0===e)return{result:!1};var n=t.split(")");return{result:!0,unit:n[n.length-1],expression:e[0]}},Gn=function(){function t(e){r(this,t),this.expressionProps=e}return a(t,[{key:"resize",value:function(t){var e=zn(this.expressionProps.expression),n="(".concat(e.expression,"*").concat(t,")");return"".concat(B.mathExpPreface,"(").concat(n,")").concat(this.expressionProps.unit)}},{key:"calculateValues",value:function(t,e){for(var n,i=t.length,r=[],s=(o(n={},B.totalElements,i),o(n,B.initParams,e),n),a=0;a<i;a++){s[B.elementIndex]=a;var u=this.expressionProps.expression.substring(1,this.expressionProps.expression.length-1),l=Fn("{{".concat(u,"}}"),{items:s});if(null===l.match(jt)){var c="".concat(l).concat(this.expressionProps.unit);r.push(pi(c)?1*c:c)}else Mi.error("".concat(this.expressionProps.expression," can not fully parsed. At least one of the provided parameters seem not to be valid. Returning 0")),r.push(0)}return r}}]),t}(),qn={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:(4-2*t)*t-1},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t},easeInSine:function(t){return-1*Math.cos(t*(Math.PI/2))+1},easeOutSine:function(t){return Math.sin(t*(Math.PI/2))},easeInOutSine:function(t){return-.5*(Math.cos(Math.PI*t)-1)},easeInExpo:function(t){return 0==t?1:1*Math.pow(2,10*(t-1))},easeOutExpo:function(t){return 1==t?1:1*(1-Math.pow(2,-10*t))},easeInOutExpo:function(t){return 0==t||1==t?t:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))},easeInCirc:function(t){return t>=1?t:-(Math.sqrt(1-(t/=1)*t)-1)},easeOutCirc:function(t){return Math.sqrt(1-(t=t/1-1)*t)},easeInOutCirc:function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){if(0==t||1==t)return t;var e=.3/(2*Math.PI)*Math.asin(1);return-Math.pow(2,10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/.3)},easeOutElastic:function(t){if(0==t||1==t)return t;var e=.3/(2*Math.PI)*Math.asin(1);return Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/.3)+1},easeInOutElastic:function(t){if(0==t||1==t)return t;var e=.3*1.5,n=e/(2*Math.PI)*Math.asin(1);return t<1?Math.pow(2,10*(t-=1))*Math.sin((t-n)*(2*Math.PI)/e)*-.5:Math.pow(2,-10*(t-=1))*Math.sin((t-n)*(2*Math.PI)/e)*.5+1},easeInBack:function(t){var e=1.70158;return t*t*((e+1)*t-e)},easeOutBack:function(t){var e=1.70158;return(t-=-1)*t*((e+1)*t+e)+1},easeInOutBack:function(t){var e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},easeInBounce:function(t){return 1-qn.easeOutBounce(1-t)},easeOutBounce:function(t){return t<1/2.75?7.5625*t*t*1:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:function(t){return t<.5?.5*qn.easeInBounce(2*t):.5*(qn.easeOutBounce(2*t-1)+1)}};function Kn(t){t=t.replace(/ /g,"");return/^@stagger\(([_A-z0-9.%-]+?(,[_A-z0-9.%-]+)?(,[_A-z0-9.%-]+)?(,[_A-z0-9.%-]+)?(,[_A-z0-9.%-]+)?(,[_A-z0-9.%-]+))\)$/.test(t)}var Wn=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(t=t.replace(/ /g,""),e&&!Kn(t))return!1;var n=/.*\((.*)\).*/,i=n.exec(t)[1],r=i.split(",");return{start:r[0],end:r[1],startFraction:1*r[2]||0,easing:r[3]||"linear",mode:r[4]||"linear",reverse:"true"===r[5]}};var Jn=function(){function t(e){r(this,t),this.staggerProps=e}return a(t,[{key:"resize",value:function(t){return this.staggerProps.from*=t,this.staggerProps.to*=t,!0===this.staggerProps.integer&&(this.staggerProps.from=Math.round(this.staggerProps.from),this.staggerProps.to=Math.round(this.staggerProps.to)),"@stagger(".concat(this.staggerProps.from).concat(this.staggerProps.unit,", ").concat(this.staggerProps.to).concat(this.staggerProps.unit,", ").concat(this.staggerProps.fraction||0,", ").concat(this.staggerProps.easing||"linear",", ").concat(this.staggerProps.mode||"linear",", ").concat(this.staggerProps.reverse||!1,")")}},{key:"calculateValues",value:function(t){for(var e,n,i,r,s=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"linear",i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=[];if("linear"===n)for(var s=0;s<t;s++){var a=s/(t-1),o=a<e?a+1-e+1/(t-1):a-e;i&&(o=1-o),r.push(o)}else if("omni"===n)for(var u=1-e,l=0;l<t;l++){var c=Math.abs(l/(t-1)-e)/u;i&&(c=1-c),r.push(c)}return r}(t.length,this.staggerProps.fraction,this.staggerProps.mode,this.staggerProps.reverse),a=[],o=0;o<s.length;o++){var u=(e=this.staggerProps.from,n=this.staggerProps.to,i=s[o],(r=this.staggerProps.easing)||(r="linear"),qn[r](i)*(n-e)+e);!0===this.staggerProps.integer&&(u=Math.round(u)),"measurement"===this.staggerProps.type&&(u+=this.staggerProps.unit),a.push(u)}return a}}]),t}(),Hn=Jn,Un=Kn,Qn=Object.keys(qn),Zn=new RegExp(/^[-+]?\d+$/),Xn=new RegExp("^".concat(B.attributeValue,"\\([_A-z0-9-]*\\)$")),Yn=new RegExp("^".concat(B.patternValue,"\\(([_A-z0-9.%-]+?(,[_A-z0-9.%-]+)*?)\\)$")),ti=new RegExp("^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)","gi");function ei(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"provided";return pi(t)?gi(e,"min")&&t<e.min?(n.push({type:"amount",actual:t,message:"The ".concat(i," value (").concat(t,") is lower than the minimum accepted (").concat(e.min,")")}),!1):gi(e,"max")&&t>e.max?(n.push({type:"amount",actual:t,message:"The ".concat(i," value (").concat(t,") is greater than the maximum accepted (").concat(e.max,")")}),!1):!(gi(e,"integer")&&!t.toString().match(Zn))||(n.push({type:"amount",actual:t,message:"The ".concat(i," number is not an integer (").concat(t,")")}),!1):(n.push({type:"amount",actual:t,message:"The ".concat(i," value is not a number")}),!1)}var ni=function(t){return function(e,n,i){return function(t,e,n,i){if(fi(t)){if((t=t.trim()).startsWith(B.staggerPreface)){if(!1===Un(t))return void e.push({type:"amount",message:"".concat(t," is not a valid stagger expression"),actual:t});var r=Wn(t,!1),s=ei(r.start,i,e,"stagger start"),a=ei(r.end,i,e,"stagger end");if(!s||!a)return;if(r.startFraction<0||r.startFraction>1)return void e.push({type:"amount",actual:r.startFraction,message:"The ".concat(B.staggerPreface," fraction must be a number >=0 and <=1")});if(!Qn.includes(r.easing))return void e.push({type:"amount",actual:r.startFraction,message:"The ".concat(B.staggerPreface," easing (").concat(r.easing,") is not supported by the system")});if("linear"!==r.mode&&"omni"!==r.mode)return void e.push({type:"amount",actual:r.mode,message:"The ".concat(B.staggerPreface,' mode to be either "linear" or "omni"')});if(!0!==r.reverse&&!1!==r.reverse)return void e.push({type:"amount",actual:r.reverse,message:"The ".concat(B.staggerPreface," reverse to be either true or false")})}else if(t.startsWith(B.patternValue)){if(!Yn.test(t.replace(/ /g,"")))return void e.push({type:"amount",actual:t,message:"The ".concat(B.patternValue," expression is not valid")});for(var o=wi(t),u=0;u<o.length;u++)if(!ei(o[u],i,e,"pattern value at index ".concat(u)))return}else if(t.startsWith(B.attributeValue)){if(!Xn.test(t))return void e.push({type:"amount",actual:t,message:"The ".concat(B.attributeValue," expression is not valid")})}else{if(!t.startsWith(B.mathExpPreface))return void e.push({type:"amount",actual:t,message:"The provided value is not a number"});var l=zn(t);if(!1===l.result)return void e.push({type:"amount",actual:t,message:"The ".concat(B.mathExpPreface," expression is not valid")});if(""!==l.unit)return void e.push({type:"amount",actual:t,message:"The ".concat(B.mathExpPreface," should not include units")})}return t}if(ei(t,i,e))return t}(e,n,0,t)}},ii=function(t){return function(e,n,i){return function(t,e,n,i){var r=new RegExp("^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)(".concat(i.units.join("|"),")$"),"gi");if(fi(t)){if((t=t.trim()).startsWith(B.attributeValue))return Xn.test(t)?t:void e.push({type:"measurement",actual:t,message:"The provided ".concat(B.attributeValue," value is not valid")});if(t.startsWith(B.staggerPreface)){if(!1===Un(t))return void e.push({type:"measurement",actual:t,message:"The provided ".concat(B.staggerPreface," value is not valid")});var s,a,o=Wn(t,!1);if(!o.start.match(r))return void e.push({type:"measurement",actual:t,message:"The provided ".concat(B.staggerPreface," start value is not valid")});var u=o.start.match(ti)[0];if(s=o.start.toString().substring(u.length),!ei(u,i,e,"stagger start"))return;if(!o.end.match(r))return void e.push({type:"measurement",actual:t,message:"The provided ".concat(B.staggerPreface," end value is not valid")});var l=o.end.match(ti)[0];if(a=o.end.toString().substring(l.length),!ei(l,i,e,"stagger end"))return;return s!==a?void e.push({type:"measurement",actual:t,message:"The ".concat(B.staggerPreface," start and end must always have the same units")}):o.startFraction<0||o.startFraction>1?void e.push({type:"measurement",actual:t,message:"The ".concat(B.staggerPreface," fraction must be a number >=0 and <=1")}):Qn.includes(o.easing)?"linear"!==o.mode&&"omni"!==o.mode?void e.push({type:"measurement",actual:t,message:"The ".concat(B.staggerPreface," mode can only be either linear or omni")}):!0!==o.reverse&&!1!==o.reverse?void e.push({type:"measurement",actual:t,message:"The ".concat(B.staggerPreface," reverse needs to be either true or false")}):t:void e.push({type:"measurement",actual:t,message:"The provided ".concat(B.staggerPreface," easing is not recognised by the system")})}if(t.startsWith(B.patternValue)){if(!Yn.test(t.replace(/ /g,"")))return void e.push({type:"measurement",actual:t,message:"The ".concat(B.patternValue," expression is invalid")});for(var c=wi(t),h=0;h<c.length;h++){var d=c[h];if(!d.match(r))return void e.push({type:"measurement",actual:t,message:"The ".concat(B.patternValue," value on index ").concat(h," is invalid")});if(!ei(d.match(ti)[0],i,e,"".concat(B.patternValue," value on index ").concat(h)))return}return t}if(t.startsWith(B.mathExpPreface)){var p=zn(t);return!1===p.result?void e.push({type:"measurement",actual:t,message:"The ".concat(B.mathExpPreface," is invalid")}):i.units.indexOf(p.unit)<0?void e.push({type:"measurement",actual:t,message:"The ".concat(B.mathExpPreface," expression has non-supported units")}):t}if(t.match(r)){if(ei(t.match(ti)[0],i,e,"measurement"))return t}else e.push({type:"measurement",actual:t,message:"The provided measurement in invalid"})}else e.push({type:"measurement",actual:t,message:"The provided value is not a valid measurement"})}(e,n,0,t)}},ri=new RegExp("^ *".concat(B.initParamsPreface,".[_A-z0-9]* *$"));function si(t,e){if(fi(t)&&t.match(ri))return t;e.push({actual:t,message:"The provided value is not an @expression"})}var ai=function(){function t(e){r(this,t),this.schema=e,this.adapted=Mn(e)}return a(t,[{key:"entryChange",value:function(t,e){var n=t.join(".");if(Array.isArray(e))for(var i=0;i<e.length;i++)this.entryChange(t.concat(["".concat(i)]),e[i]);else switch(e.type){case"amount":this.adapted.setValue("".concat(n,".type"),"custom"),this.adapted.setValue("".concat(n,".check"),ni(e));break;case"measurement":this.adapted.setValue("".concat(n,".type"),"custom"),this.adapted.setValue("".concat(n,".check"),ii(e));break;case"object":this.adapted.setValue(n,this.createObject(e));break;case"array":this.adapted.setValue(n,this.createArray(e));break;case"number":this.adapted.setValue(n,[e,{type:"custom",optional:!1!==e.optional,check:ni(e)}]);break;case"string":case"html":case"css":break;default:this.adapted.setValue(n,[e,{type:"custom",optional:!1!==e.optional,check:si}])}}},{key:"createArray",value:function(e){var i=new t({items:e.items}).adaptSchema();return[n(n({},e),{},{items:i.items}),{type:"custom",optional:!1!==e.optional,check:si}]}},{key:"createObject",value:function(e){var i,r=new t(null!==(i=e.props)&&void 0!==i?i:{}).adaptSchema();return[n(n({},e),{},{props:r}),{type:"custom",optional:!1!==e.optional,check:si}]}},{key:"adaptSchema",value:function(){return this.objectPropsChange([],this.schema),this.adapted}},{key:"objectPropsChange",value:function(t,e){for(var n in e)this.entryChange(t.concat([n]),e[n])}}]),t}(),oi=new RegExp(/^#([\da-f]{3}){1,2}$|^#([\da-f]{4}){1,2}$|(rgb|hsl)a?\((\s*-?\d+%?\s*,){2}(\s*-?\d+%?\s*,?\s*\)?)(,\s*(0?\.\d+)?|1)?\)/,"gi"),ui=new Tt({messages:{color:"The '{field}' field must be an a valid color! Actual: {actual}",measurement:"The '{field}' must be a measurement with specs that are not met. You've either provided wrong value/units or an invalid @ expression. Actual: {actual}"},useNewCustomCheckerFunction:!0});ui.add("html",(function(t,e,n){t.schema;var i=t.messages;return{source:"\n      if(value === null){\n        ".concat(this.makeError({type:"html",actual:"value",messages:i}),"\n      } else {\n        return value;\n      }\n    ")}})),ui.add("css",(function(t,e,n){t.schema;var i=t.messages;return{source:"\n      if(value === null){\n        ".concat(this.makeError({type:"css",actual:"value",messages:i}),"\n      } else {\n        return value;\n      }\n    ")}}));var li=["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgrey","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgrey","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"];ui.add("color",(function(t,e,n){var i=this;t.schema;var r=t.messages,s=function(t,e){return i.makeError({type:"color",actual:t,messages:{color:e}})};return{source:"\n      const validateExpression = ".concat(zn,";\n      const attributeRegexp = /^").concat(B.attributeValue,"\\([_A-z0-9-]*\\)$/;\n      const patternRegexp = /^").concat(B.patternValue,"\\(([_A-z0-9.%-]+?(,[_A-z0-9.%-]+)*?)\\)$/;\n      const extractParenthesisAttrsAsArray = ").concat(wi,';\n      var colors = "').concat(li.join(","),"\".split(',')\n      if(typeof value !== 'string' && !(value instanceof String)){\n        ").concat(this.makeError({type:"measurement",actual:"value",messages:r}),"\n        return ;\n      }\n    \n      if(value.trim().startsWith('").concat(B.patternValue,"')){\n          if(!patternRegexp.test(value.replace(/ /g, ''))){\n            ").concat(s("value","The "+B.patternValue+" expression is invalid"),";\n            return;\n          }\n          const patternValues = extractParenthesisAttrsAsArray(value);\n          for(let i=0; i<patternValues.length; i++){\n            const valToCheck = patternValues[i];\n            if(!valToCheck.match(").concat(oi,") && !colors.includes(valToCheck.toLowerCase())){\n              ").concat(this.makeError({type:"color",actual:"value",messages:r}),"\n              return;\n            }\n        }\n        return value;\n      } else if(value.trim().startsWith('").concat(B.attributeValue,"')){\n          if(!attributeRegexp.test(value)){\n            ").concat(s("value","The "+B.attributeValue+" expression is invalid"),";\n            return;\n          }\n\n          return value;\n        } else if(value.trim().startsWith('").concat(B.mathExpPreface,"')){\n          const validity = validateExpression(value);\n          if(validity.result === false){\n            ").concat(s("value","The "+B.expressionPreface+" expression is invalid"),';\n            return;\n          }\n          if(validity.unit !== ""){\n            ').concat(s("value","The "+B.expressionPreface+" expression includes units"),";\n            return;\n          }\n\n          return value;\n        }\n    \n      \n      if(!value.match(").concat(oi,") && !colors.includes(value.toLowerCase())){\n        ").concat(this.makeError({type:"color",actual:"value",messages:r}),"\n      }\n      return value;\n    ")}}));var ci,hi=function(t){var e=new ai(t,ui).adaptSchema();return ui.compile(e)};(ci=window).AudioContext||(ci.AudioContext=window.webkitAudioContext);var di=new window.AudioContext;function pi(t){return!isNaN(parseFloat(t))&&isFinite(t)}function fi(t){return"string"==typeof t||t instanceof String}function mi(t){return"object"===i(t)}function vi(t){return t&&"[object Function]"==={}.toString.call(t)}function gi(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return!(null===e||!mi(t))&&Object.prototype.hasOwnProperty.call(t,e)}function yi(t){return t.charAt(0).toUpperCase()+t.slice(1)}var ki=new RegExp("^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)","gi");function bi(t,e){var n=null==t?void 0:t[e];if(!fi(n))return null;var i=n.match(ki)[0],r=n.substring(i.length);return!function(t){return"number"==typeof t&&isFinite(t)}(i=Number(i))||"%"!==r&&"px"!==r?null:{number:i,unit:r}}var xi=['originalDims should be an object containing both the "width" and "height" keys'];function Ci(t){return null==t?{result:!0,analysis:{width:null,height:null}}:mi(t)&&gi(t,"width")&&gi(t,"height")?null==bi(t,"width")?{result:!1,errors:["originalDims.width should be defined either on px or %."]}:null==bi(t,"height")?{result:!1,errors:["originalDims.height should be defined either on px or %."]}:{result:!0,analysis:Ii(t)}:{result:!1,errors:xi}}function Ii(t){return mi(t)&&null!=t?{width:bi(t,"width"),height:bi(t,"height")}:{width:null,height:null}}function wi(t){var e=t.replace(/ /g,"");return/.*\((.*)\).*/.exec(e)[1].split(",")}function Ei(t,e){return Math.round(t/e)*e}function Ai(t){var e=t.split("___");return{mcid:e[0],attribute:e[1]}}function Pi(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}function Oi(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=t?"_":"-";return"".concat(Pi()).concat(Pi()).concat(e).concat(Pi()).concat(e).concat(Pi())}function Si(t,e){return"".concat(t).concat("___").concat(e)}function _i(){return!1}function Di(t,e,n){for(var i=e.split("."),r=t,s=0;s<i.length-1;s++){if(!gi(r,i[s]))return!1;r=r[i[s]]}return!!gi(r,i[i.length-1])&&(r[i[i.length-1]]=n,!0)}var Mi=new function t(e){r(this,t);var n=2;gi(e,"logLevel")&&(n=e.logLevel);for(var i=0;i<V.length;i++){var s=V[i];n>=s.level?this[s.key]=window.console[s.consoleMethod].bind(window.console,"MotorCortex - ".concat(s.key,": ")):this[s.key]=function(){}}this.log=n>=3?window.console.log.bind(window.console,"MotorCortex - "):function(){}};function Ti(t,e,n){var i=e(t);if(i.length>0){for(var r="Error on plugin's \"".concat(n.plugin_npm_name,'" "').concat(n.ClassName,'" instantiation. Errors (op props):'),s=0;s<i.length;s++)r+="\n - ".concat(i[s].message,". ").concat(i[s].actual," provided");return Mi.error(r),{result:!1,errors:i}}return{result:!0}}function Vi(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Error on validation";try{var i=hi(t),r=i(e);if(!0===r)return{result:!0};for(var s="".concat(n,":"),a=0;a<r.length;a++)s+="\n - ".concat(r[a].message,". ").concat(r[a].actual," provided");return Mi.error(s),{result:!1,errors:r}}catch(t){var o="".concat(n,". Invalid schema provided");return Mi.error(o),{result:!1,errors:[o]}}}function $i(t){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"};return(""+t).replace(/[&<>"'/]/g,(function(t){return e[t]}))}function ji(t,e,n){for(var i=[],r=0;r<t.length;r++){var s=t[r],a=s.parentMillisecond-n;a=a*e+n,1!==e&&i.push({id:s.incident.id,start:a,end:a+s.incident.duration*e,startDelta:a-s.millisecond})}return i}var Ni=function(t){return t.trimStart().startsWith("https://fonts.googleapis.com/css")};function Bi(t){return t.result?{result:!0,execute:t.execute}:{result:!1,errors:t.errors}}var Ri=function(){function t(e){r(this,t),this.runTimeInfo=e.runTimeInfo,this.context=e.context,this.onInitialise(),this.getIncidentById=e.getIncidentById}return a(t,[{key:"onInitialise",value:function(){}},{key:"_resize",value:function(){Mi.log("Please overwite the _resize method of the Channel")}},{key:"addIncidents",value:function(t){return Bi(this.checkAddition(t))}},{key:"editIncidents",value:function(t,e){return Bi(this.checkEdit(t,e))}},{key:"removeIncidents",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Bi(this.checkDelete(t,e))}},{key:"recalcScratchValues",value:function(t){}},{key:"checkAddition",value:function(t){return{result:!0,execute:function(){}}}},{key:"checkEdit",value:function(t,e){return{result:!0,execute:function(){}}}},{key:"checkDelete",value:function(t){return{result:!0,execute:function(){}}}},{key:"checkResizedIncidents",value:function(t){return{result:!0,execute:function(){}}}},{key:"moveTo",value:function(t,e,n){}}],[{key:"type",get:function(){return"plain"}}]),t}(),Li="up",Fi="down",zi="native.tree.bypass",Gi=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(this,t),this.parentNode=null,this.isNode=!1,gi(e,"id")?this.id=e.id:this.id=Oi(),this.props=e}return a(t,[{key:"name",get:function(){return gi(this.props,"name")?this.props.name:null},set:function(t){this.props.name=t}},{key:"delay",get:function(){return gi(this.props,"delay")?this.props.delay:0},set:function(t){0!==t&&(this.props.delay=t)}},{key:"hiatus",get:function(){return gi(this.props,"hiatus")?this.props.hiatus:0},set:function(t){0!==t&&(this.props.hiatus=t)}},{key:"repeats",get:function(){return gi(this.props,"repeats")?this.props.repeats:1},set:function(t){this.props.repeats=t}},{key:"duration",get:function(){return this.repeats*(this.delay+this.props.duration+this.hiatus)},set:function(t){var e=t/this.duration;this.props.duration*=e,this.hiatus*=e,this.delay*=e}},{key:"setNewDuration",value:function(t){this.duration=t,this.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!1,direction:Li})}},{key:"systoleDiastole",value:function(t){this.duration*=t}},{key:"hasParent",get:function(){return null!==this.parentNode}},{key:"attachToNode",value:function(t){this.parentNode=t}},{key:"detachFromParent",value:function(){this.parentNode=null}},{key:"putMessageOnPipe",value:function(t,e,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(gi(r,"direction")||(r.direction=Fi),r.direction!==Fi||gi(r,"positionDelta")||(r.positionDelta=0),r.selfExecute){var s="handle".concat(yi(t)),a="function"==typeof this[s];if(a){var o=this[s](i,e);if(o!==zi){var u={response:o,responder:this};return r.direction===Li?u:[n(n({},u),{},{positionDelta:r.positionDelta})]}}}return r.direction===Li?this.hasParent?this.parentNode.putMessageOnPipe(t,e,i,{selfExecute:!0,direction:Li}):{response:!1,responder:null}:[]}},{key:"bypass",value:function(){return zi}},{key:"positionOnPyramidion",get:function(){return this.getPositionOnPyramidion()}},{key:"getPositionOnPyramidion",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(this.hasParent){var e=this.putMessageOnPipe("getPositionOnPyramidion",{delta:t,id:this.id},"Parent",{selfExecute:!1,direction:Li});return e.response}return t}}]),t}(),qi="Leaf has already been attached to another Node",Ki="Negative positioning of childs on nodes is not allowed",Wi="The Leaf with the requested id couldn't be found on the Tree",Ji=function(t){u(i,t);var e=p(i);function i(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r(this,i),(t=e.call(this,n)).isNode=!0,t.children={},t.calculatedDuration=0,t}return a(i,[{key:"duration",get:function(){return this.repeats*(this.delay+this.calculatedDuration+this.hiatus)},set:function(t){if(0!==this.duration){var e=t/this.duration;for(var n in this.calculatedDuration*=e,this.hiatus*=e,this.delay*=e,this.children){var i=this.children[n];this.editPosition(i.id,i.position*e,!0),i.leaf.systoleDiastole(e)}}}},{key:"_calculateDuration",value:function(){var t=0;for(var e in this.children){var n=this.children[e];n.position+n.leaf.duration>t&&(t=n.position+n.leaf.duration)}return t!==this.calculatedDuration&&(this.calculatedDuration=t,!0)}},{key:"handleRecalcDuration",value:function(t,e){return!this._calculateDuration()||this.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!1,direction:Li})}},{key:"getLeafById",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(gi(this.children,t))return this.children[t].leaf;if(e)return null;for(var n in this.children){var i=this.children[n].leaf;if(i.isNode){var r=i.getLeafById(t);if(null!=r)return r}}return null}},{key:"getLeafPosition",value:function(t){if(gi(this.children,t))return this.children[t].position;var e=this.putMessageOnPipe("getLeafPosition",{id:t},"Groups",{selfExecute:!1,direction:Fi});return e.length>0?e[0].positionDelta+e[0].response:void 0}},{key:"handleGetLeafPosition",value:function(t,e){return this.getLeafPosition(e.id)}},{key:"checkAddition",value:function(t,e){return t.hasParent?{result:!1,reason:qi}:e<0?{result:!1,reason:Ki}:{result:!0}}},{key:"addChild",value:function(t,e){return t.hasParent?{result:!1,reason:qi}:(this.children[t.id]={id:t.id,leaf:t,position:e},t.attachToNode(this),this.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!0,direction:Li}),{result:!0})}},{key:"checkRemoveChild",value:function(t){return gi(this.children,t)?{result:!0}:{result:!1,reason:Wi}}},{key:"removeChild",value:function(t){return this.children[t].leaf.detachFromParent(),delete this.children[t],this.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!0,direction:Li}),{result:!0}}},{key:"checkEditPosition",value:function(t,e){return e<0?{result:!1,reason:Ki}:gi(this.children,t)?{result:!0}:{result:!1,reason:Wi}}},{key:"editPosition",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(gi(this.children,t))return this.children[t].position=e,n||this.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!0,direction:Li}),{result:!0}}},{key:"putMessageOnPipe",value:function(t,e,r){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(gi(s,"direction")||(s.direction=Fi),s.direction!==Fi||gi(s,"positionDelta")||(s.positionDelta=0),s.direction===Li)return m(l(i.prototype),"putMessageOnPipe",this).call(this,t,e,r,s);var a=m(l(i.prototype),"putMessageOnPipe",this).call(this,t,e,r,s);if(a.length>0)return a;for(var o in this.children){var u=this.children[o].leaf,c=n(n({},s),{},{selfExecute:!0,positionDelta:s.positionDelta+this.children[o].position});a.push.apply(a,k(u.putMessageOnPipe(t,e,r,c)))}return a}},{key:"handleGetPositionOnPyramidion",value:function(t,e){var n=e.delta+this.getLeafPosition(e.id);return this.getPositionOnPyramidion(n)}}]),i}(Gi);function Hi(t){t.descriptor.value=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};void 0!==this.blockID||e.blockId||(this.blockID=Oi()),this.DescriptiveIncident.putMessageOnPipe("setBlock",{id:this.blockID||e.blockId,description:t,incidentId:this.DescriptiveIncident.id,realIncidentId:this.id,options:e},"rootClip",{selfExecute:!0,direction:Li})}}function Ui(t){t.descriptor.value=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.DescriptiveIncident.putMessageOnPipe("unBlock",{id:null!==t?t:this.blockID},"rootClip",{selfExecute:!0,direction:Li})}}var Qi=P(null,(function(t,e){var n=function(e){u(i,e);var n=p(i);function i(e,s){var a;return r(this,i),a=n.call(this,s),t(h(a)),a.mc_plugin_npm_name="motor-cortex-js",a.plugin_channel_class=Ri,a.hasIncidents=!0,a.onGroupInitialise(),a.calculatedDuration=0,a}return i}(e);return{F:n,d:[{kind:"method",key:"onGroupInitialise",value:function(){}},{kind:"method",key:"handleAddIncident",value:function(t,e){if(this.id===t){var n=(0,e.incidentFromDescription)(e.incident,e.contextData,e.audio);return null===n?this.bypass():n}return this.bypass()}},{kind:"method",key:"handleMoveIncident",value:function(t,e){if(this.id===t){var n=this.getLeafById(e.incidentId,!0);return null===n?this.bypass():n}return this.bypass()}},{kind:"field",key:"handleRemoveIncident",value:function(){return this.handleMoveIncident}},{kind:"method",key:"handleResize",value:function(t){return this.id===t?this:this.bypass()}},{kind:"method",key:"removeChild",value:function(t){this.children[t].leaf.lastWish(),m(l(n.prototype),"removeChild",this).call(this,t)}},{kind:"method",key:"getIncidentsByChannel",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n={};for(var i in n["motor-cortex-js"]=[{millisecond:t,parentMillisecond:e,incident:this,id:this.id}],this.children){var r=this.children[i],s=r.leaf.getIncidentsByChannel(t+r.position,t);for(var a in s)gi(n,a)?n[a]=n[a].concat(s[a]):n[a]=s[a]}return n}},{kind:"method",key:"lastWish",value:function(){for(var t in this.children)this.children[t].leaf.lastWish()}},{kind:"method",decorators:[Hi],key:"setBlock",value:function(){}},{kind:"method",decorators:[Ui],key:"unblock",value:function(){}}]}}),Ji),Zi=function(t){u(n,t);var e=p(n);function n(){return r(this,n),e.apply(this,arguments)}return a(n,[{key:"onInitialise",value:function(){this.incidents=[],this.incidentsById={}}},{key:"_incidentById",value:function(t){return this.incidentsById[t]}},{key:"_resize",value:function(t){for(var e=0;e<this.incidents.length;e++)this.incidents[e].millisecond*=t}},{key:"checkAddition",value:function(t){for(var e=[],n={},i=[],r=0;r<t.length;r++)n[t[r].id]=t[r].incident,i.push({id:t[r].id,millisecond:t[r].millisecond}),gi(this.incidentsById,t[r].id)&&(Mi.error("Incident with the id ".concat(t[r].id," already exists. Addition is rejected.")),e.push({type:"Already existing id",meta:{id:t[r].id}}));if(e.length>0)return{result:!1,errors:e};var s=this;return{result:!0,execute:function(){var e;s.incidentsById=Object.assign(s.incidentsById,n),(e=s.incidents).push.apply(e,i),s.incidents.sort((function(t,e){return t.millisecond-e.millisecond}));for(var r=0;r<t.length;r++)s._incidentById(t[r].id)._onGetContextOnce(s.context)}}}},{key:"checkEdit",value:function(t,e){var n=this.incidents;return{result:!0,execute:function(){for(var i,r=0;r<t.length;r++){i=t[r].id;for(var s=0;s<n.length;s++)if(n[s].id===i){n[s].millisecond+=e;break}}n.sort((function(t,e){return t.millisecond-e.millisecond}))}}}},{key:"checkDelete",value:function(t){for(var e=this,n=[],i=0;i<t.length;i++)n.push(t[i].id);return{result:!0,execute:function(){var t=e.incidents.filter((function(t){return!n.includes(t.id)}));e.incidents=t;for(var i=0;i<n.length;i++)delete e.incidentsById[n[i]]}}}},{key:"checkResizedIncidents",value:function(t){var e=this.incidents;return{result:!0,execute:function(){for(var n,i=0;i<t.length;i++){n=t[i].id;for(var r=0;r<e.length;r++)if(e[r].id===n){e[r].millisecond+=t[i].startDelta;break}}e.sort((function(t,e){return t.millisecond-e.millisecond}))}}}},{key:"moveTo",value:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(i)for(var r=0;r<this.incidents.length;r++){var s=this.incidents[r],a=this._incidentById(s.id);e<s.millisecond?a.onProgress(0,0,n,!0):e>s.millisecond+a.duration?a.onProgress(1,a.duration,n,!0):a.onProgress((e-s.millisecond)/a.duration,e-s.millisecond,n,!0)}else{var o,u=this;o=e>t?this.incidents.filter((function(n){return n.millisecond+u._incidentById(n.id).duration>=t&&n.millisecond+u._incidentById(n.id).duration<=e||u._incidentById(n.id).duration+n.millisecond>=e&&n.millisecond<=e})):this.incidents.filter((function(n){return n.millisecond+u._incidentById(n.id).duration>=e&&n.millisecond+u._incidentById(n.id).duration<=t||u._incidentById(n.id).duration+n.millisecond>=t&&n.millisecond<=t}));for(var l=0;l<o.length;l++){var c=o[l],h=this._incidentById(c.id),d=(e-c.millisecond)/h.duration>=1,p=d?1:(e-c.millisecond)/h.duration,f=d?h.duration:e-c.millisecond;h.onProgress(p,f,n,!1)}}}}]),n}(Ri),Xi=.1,Yi="function"==typeof Float32Array;function tr(t,e){return 1-3*e+3*t}function er(t,e){return 3*e-6*t}function nr(t){return 3*t}function ir(t,e,n){return((tr(e,n)*t+er(e,n))*t+nr(e))*t}function rr(t,e,n){return 3*tr(e,n)*t*t+2*er(e,n)*t+nr(e)}function sr(t){return t}var ar=function(t,e,n,i){if(!(0<=t&&t<=1&&0<=n&&n<=1))throw new Error("bezier x values must be in [0, 1] range");if(t===e&&n===i)return sr;for(var r=Yi?new Float32Array(11):new Array(11),s=0;s<11;++s)r[s]=ir(s*Xi,t,n);function a(e){for(var i=0,s=1;10!==s&&r[s]<=e;++s)i+=Xi;--s;var a=i+(e-r[s])/(r[s+1]-r[s])*Xi,o=rr(a,t,n);return o>=.001?function(t,e,n,i){for(var r=0;r<4;++r){var s=rr(e,n,i);if(0===s)return e;e-=(ir(e,n,i)-t)/s}return e}(e,a,t,n):0===o?a:function(t,e,n,i,r){var s,a,o=0;do{(s=ir(a=e+(n-e)/2,i,r)-t)>0?n=a:e=a}while(Math.abs(s)>1e-7&&++o<10);return a}(e,i,i+Xi,t,n)}return function(t){return 0===t?0:1===t?1:ir(a(t),e,i)}};function or(t){t.descriptor.value=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n={};return n[this.mc_plugin_npm_name]=[{millisecond:t,parentMillisecond:e,incident:this,id:this.id}],n}}var ur=P(null,(function(t){return{F:function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2?arguments[2]:void 0;r(this,e),t(this),this.attrs=n,this.props=i,this.dna=s,this.context=s.context,this.mcid=s.mcid,this.id=i.id||Oi(),this.modelId=i.modelId,this.gotContext=!1,this.plugin_channel_class=Ri,this.mc_plugin_npm_name="motor-cortex-js",gi(i,"plugin_channel_class")&&(this.plugin_channel_class=i.plugin_channel_class),gi(i,"mc_plugin_npm_name")&&(this.mc_plugin_npm_name=i.mc_plugin_npm_name),this.hasIncidents=!1,this.initialValues={},this.userDefinedInitialValues=n.initialValues||{},this.pureInitialValues=null,this.autoGenerated=!1,this.onInitialise()},d:[{kind:"get",key:"selector",value:function(){return this.props.selector}},{kind:"get",key:"animAttributes",value:function(){return this.attrs.animatedAttrs}},{kind:"set",key:"animAttributes",value:function(t){this.attrs.animatedAttrs[this.attributeKey]=t}},{kind:"method",key:"getScratchValue",value:function(){return 0}},{kind:"get",key:"element",value:function(){return null===this.context?[]:this.context.getElementByMCID?this.context.getElementByMCID(this.mcid):this.context.getElements(this.selector)[0]}},{kind:"get",key:"attributeKey",value:function(){return Object.keys(this.attrs.animatedAttrs)[0]}},{kind:"get",key:"targetValue",value:function(){return this.animAttributes[this.attributeKey]}},{kind:"method",key:"getElementAttribute",value:function(t){return this.element.getAttribute(t)}},{kind:"method",decorators:[or],key:"getIncidentsByChannel",value:function(){}},{kind:"method",key:"hasUserDefinedInitialValue",value:function(){return gi(this.userDefinedInitialValues,this.attributeKey)}},{kind:"method",key:"setInitialValue",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(e&&(this.pureInitialValues=JSON.parse(JSON.stringify(t))),this.hasUserDefinedInitialValue())if(mi(this.targetValue)){for(var n in this.userDefinedInitialValues[this.attributeKey])t[n]=this.userDefinedInitialValues[this.attributeKey][n];this.initialValues[this.attributeKey]=t}else this.initialValues[this.attributeKey]=this.userDefinedInitialValues[this.attributeKey];else this.initialValues[this.attributeKey]=t}},{kind:"get",key:"initialValue",value:function(){return this.initialValues[this.attributeKey]}},{kind:"method",key:"_onGetContextOnce",value:function(){try{if(!0===this.context.fragment)return;this.gotContext||(this.onGetContext(),this.gotContext=!0)}catch(t){Mi.error(t),Mi.error(this.mcid)}}},{kind:"method",key:"onGetContext",value:function(){Mi.info('Overwritte the "onGetContext" method with the code you want to get executed',"info")}},{kind:"method",key:"lastWish",value:function(){}},{kind:"method",key:"onInitialise",value:function(){Mi.info('Overwritte the "onInialise" method with the code you want to get executed',"info")}},{kind:"method",key:"onProgress",value:function(t,e){}},{kind:"method",decorators:[Hi],key:"setBlock",value:function(){}},{kind:"method",decorators:[Ui],key:"unblock",value:function(){}}]}})),lr=function(t){u(i,t);var e=p(i);function i(t,n,s){var a;return r(this,i),(a=e.call(this,t,n,s)).runTimeInfo={currentMillisecond:0},a}return a(i,[{key:"duration",get:function(){return this.DescriptiveIncident.realClip.duration}},{key:"lastWish",value:function(){this.ownClip&&this.ownClip.context.unmount()}},{key:"onGetContext",value:function(){var t,e,i=this.DescriptiveIncident.realClip.exportConstructionArguments(),r=(t=this.context,e=this.mcid,t.rootElement.querySelectorAll("[".concat($,'="').concat(e,'"]'))[0]),s=n(n({},i.props),{},{selector:void 0,host:r,containerParams:this.DescriptiveIncident.props.containerParams||{},originalDims:this.DescriptiveIncident.constructor.originalDims||{}});this.ownClip=new this.DescriptiveIncident.constructor.Incident(i.attrs,s,this.DescriptiveIncident),this.ownClip.clipCopyId=this.id,this.DescriptiveIncident.realClip.addContext({clipId:this.id,context:this.ownClip.context},!0)}},{key:"onProgress",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!1!==this.ownClip.ownContext.contextLoaded||0===t){for(var i in this.DescriptiveIncident.realClip.instantiatedChannels){var r=this.DescriptiveIncident.realClip.instantiatedChannels[i];r.moveTo(this.runTimeInfo.currentMillisecond,e,this.id,n)}this.runTimeInfo.currentMillisecond=e,this.ownClip.onAfterProgress(t,e)}else this.setBlock("context loading",{blockId:this.id})}}]),i}(ur);function cr(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=e?t.DescriptiveIncident:{context:t.context,mcid:t.mcid},r=new t.Incident(t.attrs,n(n({},t.props),{},{id:t.id||Oi()}),i);return r.mc_plugin_npm_name=t.plugin_npm_name,r.plugin_channel_class=t.Channel,r.DescriptiveIncident=t.DescriptiveIncident,r}var hr=P(null,(function(t,e){return{F:function(e){u(s,e);var i=p(s);function s(e,a,o,u){var l;return r(this,s),l=i.call(this,n(n({},e.props),{},{id:"".concat(e.incidentId,"_").concat(o)})),t(h(l)),l.contexts={},l.constructionIngredients=e,l.mcid=o,l.DescriptiveIncident=u,l.mc_plugin_npm_name=e.plugin_npm_name,l.plugin_channel_class=e.Channel,l.addContext(a),l.timeScale=1,u.realClip.duration>0&&(l.timeScale=l.props.duration/u.realClip.duration),u.realClip.subscribeToDurationChange((function(t){l.props.duration=l.timeScale*t,l.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!1,direction:Li})})),l.easing=qn.linear,gi(l.props,"easing")&&(Array.isArray(l.props.easing)?l.easing=ar(l.props.easing[0],l.props.easing[1],l.props.easing[2],l.props.easing[3]):l.easing=qn[l.props.easing]),l}return s}(e),d:[{kind:"get",key:"originalContext",value:function(){return this.contexts[this.originalContextKey]}},{kind:"method",key:"onProgress",value:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=this.delay+this.props.duration+this.hiatus,s=e%r;0!==e&&0===s&&(s=this.delay+this.props.duration);var a=s-this.delay;a<0?a=0:a>this.props.duration&&(a=this.props.duration);var o=0===this.props.duration?0:a/this.props.duration,u=this.easing(o),l=u*this.props.duration*(1/this.timeScale);!1!==this.originalContext.context.contextLoaded&&this.contexts[n].onProgress(u,l,i)}},{kind:"method",key:"addContext",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];0===Object.keys(this.contexts).length&&(this.originalContextKey=t.clipId);var i=n(n({},this.constructionIngredients),{},{context:t.context,mcid:this.mcid,Incident:lr,DescriptiveIncident:this.DescriptiveIncident});this.contexts[t.clipId]=cr(i),e&&this.contexts[t.clipId]._onGetContextOnce()}},{kind:"method",key:"handleAddContext",value:function(t,e){return this.addContext(e,!0),!0}},{kind:"method",key:"handleContextLoaded",value:function(t,e){this._onGetContextOnce()}},{kind:"method",decorators:[or],key:"getIncidentsByChannel",value:function(){}},{kind:"method",key:"gotContext",value:function(){for(var t in this.contexts)this.contexts[t].gotContext()}},{kind:"method",key:"_onGetContextOnce",value:function(){if(!1!==this.originalContext.contextLoaded)for(var t in this.contexts)this.contexts[t]._onGetContextOnce()}},{kind:"method",key:"lastWish",value:function(){for(var t in this.contexts)this.contexts[t].lastWish()}},{kind:"method",key:"onGetContext",value:function(){if(!1!==this.originalContext.contextLoaded)for(var t in this.contexts)this.contexts[t].onGetContext()}}]}}),Gi),dr=P(null,(function(t,e){var i=function(e){u(s,e);var i=p(s);function s(e,a,o,u){var l;if(r(this,s),l=i.call(this,n(n({},e.props),{},{id:null!==u?"".concat(e.incidentId,"_").concat(o,"_").concat(u):"".concat(e.incidentId,"_").concat(o)})),t(h(l)),l.contexts={},l.constructionIngredients=e,l.mcid=o,l.attribute=u,l.mc_plugin_npm_name=e.plugin_npm_name,l.plugin_channel_class=e.Channel,l.DescriptiveIncident=e.DescriptiveIncident,l.addContext(a),null!==u){var c=l.constructionIngredients.attrs.animatedAttrs[l.attribute];Array.isArray(c)?l.originalAnimatedAttributeValue=k(c):mi(c)?l.originalAnimatedAttributeValue=n({},c):l.originalAnimatedAttributeValue=c}return l.easing=qn.linear,gi(l.props,"easing")&&(Array.isArray(l.props.easing)?l.easing=ar(l.props.easing[0],l.props.easing[1],l.props.easing[2],l.props.easing[3]):l.easing=qn[l.props.easing]),l}return s}(e);return{F:i,d:[{kind:"get",key:"originalContext",value:function(){return this.contexts[this.originalContextKey]}},{kind:"get",key:"duration",value:function(){return m(l(i.prototype),"duration",this)}},{kind:"set",key:"duration",value:function(t){for(var e in g(l(i.prototype),"duration",t,this,!0),this.contexts)this.contexts[e].duration=t}},{kind:"method",key:"addContext",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=!1;0===Object.keys(this.contexts).length&&(this.originalContextKey=t.clipId,this.originalClipContext=t.context,i=!0);var r=n(n({},this.constructionIngredients),{},{context:t.context,mcid:this.mcid}),s=cr(r);this.contexts[t.clipId]=s,i||null==this.attribute||this.contexts[t.clipId].setInitialValue(this.initialValue),e&&this.contexts[t.clipId].context.contextLoaded&&this.contexts[t.clipId]._onGetContextOnce()}},{kind:"method",key:"handleAddContext",value:function(t,e){return this.addContext(e,!0),!0}},{kind:"method",key:"handleContextLoaded",value:function(t,e){return this._onGetContextOnce(),!0}},{kind:"method",decorators:[or],key:"getIncidentsByChannel",value:function(){}},{kind:"method",key:"onProgress",value:function(t,e,n){var i=e%(this.delay+this.props.duration+this.hiatus);0!==e&&0===i&&(i=this.delay+this.props.duration);var r=i-this.delay;r<0?r=0:r>this.props.duration&&(r=this.props.duration);var s=r/this.props.duration,a=this.easing(s),o=a*this.props.duration;if(null!=n)!1!==this.contexts[n].context.contextLoaded&&this.contexts[n].onProgress(a,o);else for(var u in this.contexts)this.originalContextKey===u&&!0===this.originalContext.fragment||this.contexts[u].onProgress(a,o)}},{kind:"get",key:"animatedAttributeValue",value:function(){return this.constructionIngredients.attrs.animatedAttrs[this.attribute]}},{kind:"set",key:"animatedAttributeValue",value:function(t){this.constructionIngredients.attrs.animatedAttrs[this.attribute]=t}},{kind:"method",key:"gotContext",value:function(){for(var t in this.contexts)this.contexts[t].gotContext()}},{kind:"method",key:"_onGetContextOnce",value:function(){if(!1!==this.originalContext.context.contextLoaded)for(var t in this.contexts)this.contexts[t]._onGetContextOnce()}},{kind:"method",key:"lastWish",value:function(){for(var t in this.contexts)this.contexts[t].lastWish()}},{kind:"method",key:"onGetContext",value:function(){if(!1!==this.originalContext.contextLoaded)for(var t in this.contexts)this.contexts[t].context.contextLoaded&&this.contexts[t].onGetContext()}},{kind:"get",key:"initialValue",value:function(){return this.originalContext.initialValue}},{kind:"get",key:"scratchValue",value:function(){return this.originalContext.scratchValue}},{kind:"get",key:"pureInitialValues",value:function(){return this.originalContext.pureInitialValues}},{kind:"method",key:"setInitialValue",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];for(var n in null===t&&(t=this.getScratchValue()),this.contexts)this.contexts[n].setInitialValue(JSON.parse(JSON.stringify(t)),e)}},{kind:"method",key:"getScratchValue",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(!this.originalContext.context.contextLoaded)return 0;if(null!=t)return this.contexts[t].getScratchValue();var e=Object.keys(this.contexts);if(gi(this.originalClipContext,"nonFragmentedContext")){var i=n(n({},this.constructionIngredients),{},{context:this.originalClipContext.nonFragmentedContext,mcid:this.mcid}),r=cr(i);return r.getScratchValue()}return 1===e.length?this.originalContext.getScratchValue():this.contexts[e[1]].getScratchValue()}},{kind:"method",key:"setCompoAttrKeyValue",value:function(t,e){for(var n in this.contexts)this.contexts[n].attrs.animatedAttrs[this.attribute][t]=e,this.contexts[n].lastWish(),this.contexts[n].onGetContext()}},{kind:"method",key:"play",value:function(t,e,n){return this.contexts[n].play(e)}},{kind:"method",key:"stop",value:function(t){this.contexts[t].stop()}}]}}),Gi),pr=function(t){u(i,t);var e=p(i);function i(t,n,s,a,o){var u;return r(this,i),(u=e.call(this,{},{id:"".concat(t.id,"_").concat(s)})).mcid=s,u.selector=a,u.data=o,u.setUp(t,n),u}return a(i,[{key:"setUp",value:function(t,e){for(var i in this.data.attrs.animatedAttrs){var r={};r[i]=this.data.attrs.animatedAttrs[i];var s=n(n({},this.data.attrs),{},{animatedAttrs:r}),a=n(n({},this.data.props),{},{selector:this.selector}),o={incidentId:t.id,attrs:s,props:a,Incident:t.constructor.Incident,plugin_npm_name:t.constructor.plugin_npm_name,Channel:t.constructor.Channel,DescriptiveIncident:t},u=new dr(o,e,this.mcid,i);this.addChild(u,0)}}}]),i}(Qi);var fr=function(t){u(n,t);var e=p(n);function n(t,i){var s;return r(this,n),(s=e.call(this,{},{id:t.id})).contexts={},s.contexts[i.clipId]=i.context,s.originalContextKey=i.clipId,s.initParams=i.context.initParams,s.instantiatedCopiesContexts=i.instantiatedCopiesContexts,s.descriptiveIncident=t,s.staggerAttrs=[],s.staggerProps=[],s.setUp(t,i),s}return a(n,[{key:"originalContext",get:function(){return this.contexts[this.originalContextKey]}},{key:"parsePropsDynamicValues",value:function(t,e){for(var n,i=0;i<t.propsStaggers.length;i++)n=t.propsStaggers[i],this.staggerProps.push({path:n.path,values:n.stagger.calculateValues(e,this.initParams)})}},{key:"parseAttrsDynamicValues",value:function(t,e){for(var n,i=0;i<t.attributesStaggers.length;i++)n=t.attributesStaggers[i],this.staggerAttrs.push({path:n.path,values:n.stagger.calculateValues(e,this.initParams)})}},{key:"setUp",value:function(t,e){var n,i,r=this.originalContext.getElements(t.selector());this.parsePropsDynamicValues(t,r),this.parseAttrsDynamicValues(t,r);for(var s=0;s<r.length;s++){for(var a in n=r[s],i=this._getElementMCID(n),this.instantiatedCopiesContexts)this._setElementMCID(this.instantiatedCopiesContexts[a],this.instantiatedCopiesContexts[a].getElements(t.selector())[s],i);this._createElementIncident(n,t,e,s,r.length,i)}}},{key:"handleRecalcDuration",value:function(t,e){var i=m(l(n.prototype),"handleRecalcDuration",this).call(this,t,e);return this.descriptiveIncident.propsStaggers.length>0&&(this.descriptiveIncident.dynamicDurationValue=1*this.duration),i}},{key:"lastWish",value:function(){this.descriptiveIncident.propsStaggers.length>0&&(this.descriptiveIncident.dynamicDurationValue=null,this.descriptiveIncident.putMessageOnPipe("setDurationDynamic",{},"Groups",{selfExecute:!1,direction:Li})),m(l(n.prototype),"lastWish",this).call(this)}},{key:"_getElementMCID",value:function(t){var e=this.originalContext.getMCID(t);return e||(e=Oi(!0),this.originalContext.setMCID(t,e)),e}},{key:"_setElementMCID",value:function(t,e,n){t.getMCID(e)||t.setMCID(e,n)}},{key:"_prepareAttrsPropsForElement",value:function(t,e){var n=function(t,e){for(var n=[],i=0;i<t.length;i++)n.push({path:t[i].path,value:t[i].values[e]});return n}(this.staggerAttrs,e),i=function(t,e){for(var n=[],i=0;i<t.length;i++)n.push({path:t[i].path,value:t[i].values[e]});return n}(this.staggerProps,e),r=t.attrs,s=t.props;if(n.length>0){r=JSON.parse(JSON.stringify(t.attrs));for(var a=0;a<n.length;a++)Di(r,n[a].path,n[a].value)}if(i.length>0){s=JSON.parse(JSON.stringify(t.props));for(var o=0;o<i.length;o++)Di(s,i[o].path,i[o].value)}return{attrs:r,props:s}}},{key:"_createElementIncident",value:function(t,e,n,i,r,s){var a=this._prepareAttrsPropsForElement(e,i);if(gi(e.attrs,"animatedAttrs")){var o=new pr(e,n,s,n.context.getElementSelectorByMCID(s),a);this.addChild(o,0)}else{var u=a.attrs,l=a.props,c={incidentId:e.id,attrs:u,props:l,Incident:e.constructor.Incident,plugin_npm_name:e.constructor.plugin_npm_name,Channel:e.constructor.Channel,DescriptiveIncident:e},h=new dr(c,n,s,null);this.addChild(h,0)}}}]),n}(Qi);function mr(t){var e=new t.Class(t.attrs,t.props);if(!1===e.result)return e;if(gi(t,"incidents"))for(var n in t.incidents){var i=t.incidents[n],r=mr(i.leaf);if(!1===r.result)return r;var s=e.addIncident(r,i.position);if(!1===s.result)return s}return e}var vr=function(t){u(i,t);var e=p(i);function i(t,n){var s;return r(this,i),(s=e.call(this,t,n)).realClip=t.realClip,s}return a(i,[{key:"_createElementIncident",value:function(t,e,i,r,s,a){var o=this._prepareAttrsPropsForElement(e,0);if(e.realClip.isNullClip){var u=mr(n(n({},e.exportLiveDefinition()),o));e.realClip=u.realClip}var l=e.realClip.exportConstructionArguments(),c=n(n(n(n({},e.props),{},{duration:e.realClip.duration},l.props),o.props),{},{selector:i.context.getElementSelectorByMCID(a)}),h={incidentId:e.id,attrs:l.attrs,props:c,Incident:e.constructor.Incident,plugin_npm_name:e.constructor.plugin_npm_name,Channel:Zi,DescriptiveIncident:e},d=new hr(h,i,a,e);this.addChild(d,0)}}]),i}(fr),gr="7.5.4",yr=["cm","mm","in","px","pt","pc","em","ex","ch","rem","vw","vh","vmin","vmax","%"],kr=[{type:"string",optional:!0,default:"linear",enum:["linear","easeInQuad","easeOutQuad","easeInOutQuad","easeInCubic","easeOutCubic","easeInOutCubic","easeInQuart","easeOutQuart","easeInOutQuart","easeInQuint","easeOutQuint","easeInOutQuint","easeInSine","easeOutSine","easeInOutSine","easeInExpo","easeOutExpo","easeInOutExpo","easeInCirc","easeOutCirc","easeInOutCirc","easeInElastic","easeOutElastic","easeInOutElastic","easeInBack","easeOutBack","easeInOutBack","easeInBounce","easeOutBounce","easeInOutBounce"]},{type:"array",optional:!0,length:4,items:{type:"number"}}],br={type:"string",empty:!1,trim:!0,optional:!0},xr={type:"string",empty:!1,trim:!0,optional:!0},Cr={type:"string",empty:!1,optional:!1},Ir={type:"amount",optional:!1,integer:!0,min:0},wr={type:"amount",optional:!0,integer:!0,min:0},Er={type:"amount",integer:!0,min:1,optional:!0},Ar={type:"amount",integer:!0,min:0,optional:!0},Pr={type:"amount",integer:!0,min:0,optional:!0},Or={type:"html",optional:!0},Sr={type:"css",optional:!0},_r={type:"array",optional:!0,items:{type:"object",props:{type:{enum:["google-font"],type:"string"},src:{type:"string"}}}},Dr={type:"array",items:{type:"object",strict:!0,props:{src:"string",id:"string",mcid:{type:"string",optional:!0},classes:{type:"array",optional:!0,items:"string"},base64:{type:"boolean",optional:!0},startValues:{optional:!0,type:"object",props:{gain:{optional:!0,type:"number"},pan:{optional:!0,type:"number"}}}}},optional:!0},Mr=hi({id:br,name:xr,selector:n(n({},Cr),{},{optional:!0}),easing:kr,duration:Ir,startFrom:{type:"amount",integer:!0,min:0,optional:!0},repeats:Er,hiatus:Ar,delay:Pr}),Tr={type:"object",optional:!0,props:{width:{type:"measurement",units:yr,optional:!0},height:{type:"measurement",units:yr,optional:!0}}},Vr={type:"string",enum:["on","off","only"],optional:!0},$r=hi({props:[{type:"object",strict:!0,props:{id:br,name:xr,selector:n(n({},Cr),{},{optional:!0}),repeats:Er,hiatus:Ar,delay:Pr,easing:kr,duration:wr,html:Or,css:Sr,audioSources:Dr,audio:Vr,containerParams:Tr,fonts:_r,initParams:{type:"object",optional:!0}}},{type:"object",strict:!0,props:{id:br,name:xr,host:{type:"any",optional:!1},duration:wr,html:Or,css:Sr,audioSources:Dr,audio:Vr,containerParams:Tr,fonts:_r,initParams:{type:"object",optional:!0},initParamsValidationRules:{type:"object",optional:!0}}},{type:"object",strict:!0,props:{root:{type:"boolean",optional:!0},name:xr,id:br,audioSources:Dr,audio:n(n({},Vr),{},{enum:["on"]})}}]}),jr=hi({selector:n(n({},Cr),{},{optional:!0,strict:!0}),name:xr}),Nr=hi({selector:n(n({},Cr),{},{strict:!0,optional:!0}),name:xr,repeats:{type:"amount",integer:!0,min:1,optional:!0},hiatus:{type:"amount",integer:!0,min:0,optional:!0},delay:{type:"amount",integer:!0,min:0,optional:!0}});function Br(t){t.descriptor.value=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.exportLiveDefinition();for(var i in t)Ft(i,t[i],!0,"attrs",n);for(var r in e)Ft(r,e[r],!0,"props",n);return mr(n)}}hi({selector:Cr,duration:Ir});var Rr="mc.descriptive.decisionAuthority";function Lr(t){t.descriptor.value=function(t){if(null!==this.constructor.attrsValidationRules){var e=this.constructor.attrsValidationMethod(t);if(e.length>0)return{result:!1,errors:e}}return!0===this.putMessageOnPipe("checkForClip",{},Rr,{selfExecute:!0,direction:Li}).response?this.manageEditAttrProps(t,"attrs"):(this.attrs=t,{result:!0})}}function Fr(t){t.descriptor.value=function(t){var e=Ti(t,this.constructor.propsValidationRules,this.constructor);return e.result?!0===this.putMessageOnPipe("checkForClip",{},Rr,{selfExecute:!0,direction:Li}).response?this.manageEditAttrProps(t,"props"):(this.props=t,{result:!0}):e}}function zr(t){t.descriptor.value=function(){return null!==this.props.host&&void 0!==this.props.host?[this.props.host]:this.hasParent&&this.putMessageOnPipe("checkForClip",{},Rr,{selfExecute:!0,direction:Li}).response?this.putMessageOnPipe("getElements",{selector:this.selector()},Rr,{selfExecute:!1,direction:Li}).response:[]}}function Gr(t){t.descriptor.value=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{check:!0};if("dynamic"===this.duration)return{result:!1,reason:"Incidents with dynamic duration can't be resized. Once the Incident enters a Clip it'll become resizable"};if(t===this.duration)return{result:!0,meta:{unprocessed:!0}};if(t<=0)return{result:!1,reason:"Size must always be > 0"};if(e.check&&this.hasParent){var n=this.putMessageOnPipe("checkResize",{id:this.id,newSize:t,fraction:t/this.duration},Rr,{selfExecute:!1,direction:Li});if(!n.response.result)return n.response}return this.setNewDuration(t),{result:!0}}}function qr(t){t.descriptor.value=function(){return null===this.inheritedSelector?gi(this.props,"selector")?this.props.selector:null:gi(this.props,"selector")?"&"===this.props.selector.charAt(0)?this.inheritedSelector+this.props.selector.substring(1):"".concat(this.inheritedSelector," ").concat(this.props.selector):this.inheritedSelector}}var Kr=function(){function t(e){r(this,t),this.expressionProps=e}return a(t,[{key:"calculateValues",value:function(t){for(var e=[],n=0;n<t.length;n++){var i=t[n].getAttribute(this.expressionProps.attribute);pi(i)&&(i=parseFloat(i)),e.push(i)}return e}}]),t}(),Wr=function(){function t(e){r(this,t),this.patternProps=e}return a(t,[{key:"calculateValues",value:function(t){for(var e=this.patternProps.pattern.length,n=[],i=0;i<t.length;i++)n.push(this.patternProps.pattern[i%e]);return n}},{key:"resize",value:function(t){if("amount"!==this.patternProps.type)return"".concat(B.patternValue,"(").concat(this.patternProps.pattern.join(),")");for(var e=[],n=0;n<this.patternProps.pattern.length;n++)e.push(t*this.patternProps.pattern[n]);return"".concat(B.patternValue,"(").concat(e.join(),")")}}]),t}(),Jr=function(){function t(e){r(this,t),this.expressionProps=e}return a(t,[{key:"calculateValues",value:function(t,e){var n=this.expressionProps.expression.substring(this.expressionProps.expression.indexOf(".")+1),i=zt(n,"",e);return Array(t.length).fill(i)}}]),t}(),Hr=function t(e){return r(this,t),"expression"===e.dynamicType?new Gn(e):"stagger"===e.dynamicType?new Hn(e):"attribute"===e.dynamicType?new Kr(e):"pattern"===e.dynamicType?new Wr(e):"initParams"===e.dynamicType?new Jr(e):(Mi.error('dynamicType must be either "stagger", "expression", "pattern", "attribute" or "initParams". '.concat(e.dynamicType," provided")),!1)};function Ur(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!t)return[];for(var n=[],i=0,r=Object.entries(t);i<r.length;i++){var s=y(r[i],2),a=s[0],o=s[1];if(!(o instanceof Element))if(mi(o)){var u=Ur(o,"".concat(e).concat(""===e?"":".").concat(a));n.push.apply(n,k(u))}else if(fi(o)){var l=o.trim();if(l.startsWith(B.staggerPreface)){var c=Wn(l,!1),h=c.start.match(ki)[0],d=c.end.match(ki)[0],p=c.start.toString().substring(h.length),f={dynamicType:"stagger",path:"".concat(e).concat(""===e?"":".").concat(a),from:1*h,to:1*d,mode:c.mode,unit:p,fraction:c.startFraction,easing:c.easing,reverse:c.reverse,type:""===p?"amount":"measurement"};n.push(f)}else if(l.startsWith(B.attributeValue)){var m={dynamicType:"attribute",path:"".concat(e).concat(""===e?"":".").concat(a),unit:"",type:"measurement",attribute:/\(([^)]+)\)/.exec(l)[1]};n.push(m)}else if(l.startsWith(B.mathExpPreface)){var v=zn(l),g={dynamicType:"expression",path:"".concat(e).concat(""===e?"":".").concat(a),unit:v.unit,type:""===v.unit?"amount":"measurement",expression:v.expression};n.push(g)}else if(l.startsWith(B.patternValue)){for(var b=wi(l),x=!0,C=[],I=0;I<b.length;I++){if(!pi(b[I])){x=!1;break}C.push(parseFloat(b[I]))}x&&(b=C);var w={dynamicType:"pattern",path:"".concat(e).concat(""===e?"":".").concat(a),unit:"",type:x?"amount":"measurement",pattern:b};n.push(w)}else if(l.startsWith(B.initParamsPreface)){var E={dynamicType:"initParams",path:"".concat(e).concat(""===e?"":".").concat(a),unit:"",type:"",expression:l};n.push(E)}}}return n}function Qr(t){t.descriptor.value=function(){for(var t={attrs:{},props:{}},e=Ur(this.props),n=0;n<e.length;n++)this.propsStaggers.push({path:e[n].path,stagger:new Hr(e[n])}),gi(t.props,e[n].dynamicType)||(t.props[e[n].dynamicType]=0),t.props[e[n].dynamicType]+=1;for(var i=Ur(this.attrs),r=0;r<i.length;r++)this.attributesStaggers.push({path:i[r].path,stagger:new Hr(i[r])}),gi(t.attrs,i[r].dynamicType)||(t.attrs[i[r].dynamicType]=0),t.attrs[i[r].dynamicType]+=1;return t}}var Zr=P(null,(function(t,e){var n=function(e){u(i,e);var n=p(i);function i(){var e,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;r(this,i),null===a?(e=n.call(this,s),t(h(e)),e.attrs={},e.props=s):(e=n.call(this,a),t(h(e)),e.attrs=s,e.props=a);var o=Ti(e.props,jr,e.constructor);return o.result?(e._inheritedSelector=null,e.attributesStaggers=[],e.propsStaggers=[],e.setupDynamicValues(),e.passiveAddition=!0,e._buildTree(),e.passiveAddition=!1,d(e)):d(e,o)}return i}(e);return{F:n,d:[{kind:"field",static:!0,key:"Incident",value:function(){return Qi}},{kind:"field",static:!0,key:"plugin_npm_name",value:function(){return"motor-cortex-js"}},{kind:"field",static:!0,key:"version",value:function(){return gr}},{kind:"field",static:!0,key:"Channel",value:function(){return Ri}},{kind:"field",static:!0,key:"ClassName",value:function(){return"Group"}},{kind:"field",static:!0,key:"isGroup",value:function(){return!0}},{kind:"field",static:!0,key:"attrsValidationRules",value:function(){return null}},{kind:"field",static:!0,key:"propsValidationRules",value:function(){return jr}},{kind:"method",decorators:[Lr],key:"editAttributes",value:function(){}},{kind:"method",decorators:[Fr],key:"editProperties",value:function(){}},{kind:"method",decorators:[Gr],key:"resize",value:function(){}},{kind:"method",decorators:[Br],key:"clone",value:function(){}},{kind:"method",decorators:[qr],key:"selector",value:function(){}},{kind:"method",decorators:[zr],key:"getElements",value:function(){}},{kind:"method",decorators:[Qr],key:"setupDynamicValues",value:function(){}},{kind:"method",key:"_buildTree",value:function(){this.buildTree()}},{kind:"method",key:"_calculateDuration",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=0;for(var n in this.children){var i=this.children[n];if(!0===t&&!0===i.leaf.constructor.isGroup&&i.leaf._calculateDuration(!0),"dynamic"===i.leaf.duration){e="dynamic";break}i.position+i.leaf.duration>e&&(e=i.position+i.leaf.duration)}return e!==this.calculatedDuration&&(this.calculatedDuration=e,!0)}},{kind:"method",key:"_rebuildTree",value:function(){for(var t in this.children){var e=this.children[t];!0===e.leaf.passive&&this.removeIncident(e.id)}this.passiveAddition=!0,this.buildTree(),this.passiveAddition=!1}},{kind:"method",key:"buildTree",value:function(){}},{kind:"get",key:"duration",value:function(){return"dynamic"===this.calculatedDuration?this.calculatedDuration:m(l(n.prototype),"duration",this)}},{kind:"set",key:"duration",value:function(t){g(l(n.prototype),"duration",t,this,!0)}},{kind:"method",key:"manageEditAttrProps",value:function(t,e){var n=this.parentNode,i=n.getLeafPosition(this.id),r=JSON.parse(JSON.stringify(this[e]));this[e]=t,n.removeIncident(this.id),this._rebuildTree();var s=n.addIncident(this,i);return s.result||(this[e]=r,this._rebuildTree(),n.addIncident(this,i)),s}},{kind:"method",key:"detachFromParent",value:function(){m(l(n.prototype),"detachFromParent",this).call(this),this.inheritedSelector=null}},{kind:"get",key:"inheritedSelector",value:function(){return this._inheritedSelector}},{kind:"set",key:"inheritedSelector",value:function(t){for(var e in this._inheritedSelector=t,this.children){this.children[e].leaf.inheritedSelector=this.selector()}}},{kind:"get",key:"selectorToPassToChildren",value:function(){return this.selector()}},{kind:"method",key:"exportDefinition",value:function(){var t={ClassName:this.constructor.ClassName,version:this.constructor.version,plugin:this.constructor.plugin||this.constructor.plugin_npm_name,plugin_npm_name:this.constructor.plugin_npm_name,attrs:this.attrs,props:this.props,incidents:{},duration:this.duration};for(var e in this.children){var n=this.children[e];!0!==n.leaf.passive&&(t.incidents[e]={id:n.id,position:n.position,leaf:n.leaf.exportDefinition()})}return t}},{kind:"method",key:"exportLiveDefinition",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=JSON.parse(JSON.stringify(this.props));!1===t&&delete e.id;var n={Class:this.constructor,attrs:JSON.parse(JSON.stringify(this.attrs)),props:e,incidents:{}};for(var i in this.children){var r=this.children[i];!0!==r.leaf.passive&&(n.incidents[i]={position:r.position,leaf:r.leaf.exportLiveDefinition(t)})}return n}},{kind:"method",key:"addIncident",value:function(t,e){var i,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{check:!0};if(t.inheritedSelector=this.selectorToPassToChildren,!0===r.check){var s=m(l(n.prototype),"checkAddition",this).call(this,t,e);if(!s.result)return t.inheritedSelector=null,s;if(!0===(i=this.putMessageOnPipe("checkForClip",{},Rr,{selfExecute:!0,direction:Li})).response){var a=t.putMessageOnPipe("checkForInvalidSelectors",{},null,{selfExecute:!0,direction:Fi});if(a.length>0){for(var o=[],u=0;u<a.length;u++)o.push(a[u].response);return{result:!1,errors:o}}}var c=this.putMessageOnPipe("checkAddition",{incident:t,millisecond:e,parentGroupId:this.id},Rr,{selfExecute:!0,direction:Li});if(!c.response.result)return t.inheritedSelector=null,c.response}!0===this.passiveAddition&&(t.passive=!0);var h=this.addChild(t,e);return h.result||(t.inheritedSelector=null),"dynamic"===t.duration&&i&&this._calculateDuration(!0),h}},{kind:"method",key:"moveIncident",value:function(t,e){var i=t;mi(t)&&(i=t.id);var r=m(l(n.prototype),"checkEditPosition",this).call(this,i,e);if(!r.result)return r;var s=e-this.getLeafPosition(i);if(0===s)return{result:!0};var a=this.putMessageOnPipe("checkMove",{id:i,millisecond:e,positionDelta:s,parentGroupId:this.id},Rr,{selfExecute:!0,direction:Li});return a.response.result?this.editPosition(i,e):a.response}},{kind:"method",key:"removeIncident",value:function(t){var e=t;mi(t)&&(e=t.id);var i=m(l(n.prototype),"checkRemoveChild",this).call(this,e);if(!i.result)return i;var r=this.putMessageOnPipe("checkDeletion",{id:e,parentGroupId:this.id},Rr,{selfExecute:!0,direction:Li});return r.response.result?this.removeChild(e):r.response}},{kind:"method",key:"handleCheckForClip",value:function(t,e){return!!this.hasParent&&this.bypass()}},{kind:"method",key:"handleCheckAddition",value:function(t,e){return this.hasParent?this.bypass():{result:!0}}},{kind:"method",key:"handleCheckMove",value:function(t,e){return this.hasParent?this.bypass():{result:!0}}},{kind:"method",key:"handleCheckDeletion",value:function(t,e){return this.hasParent?this.bypass():{result:!0}}},{kind:"method",key:"handleCheckResize",value:function(t,e){return this.hasParent?this.bypass():{result:!0}}},{kind:"method",key:"handleSetDurationDynamic",value:function(t,e){this.calculatedDuration="dynamic",this.putMessageOnPipe("setDurationDynamic",{},"Groups",{selfExecute:!1,direction:Li})}}]}}),Ji),Xr="-",Yr={isCombo:function(t){return t.incidentClass.isCombo},getItem:function(t,e){return zt(e.join("."),"attrs",t)},getRepeatPosition:function(t,e,n,i){return i*(e||0)+(i+1)*(t||0)+i*n},refersToOwnSelector:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=e;!1===Array.isArray(e)&&(i=e.split("."));var r=this.getItem(t,i.slice(0,2+n));return(""===r.props.selector||void 0===r.props.selector||null===r.props.selector)&&("props"===i[2]||(!this.isCombo(r)||this.refersToOwnSelector(t,i,n+3)))},cascadeSelectors:function(t,e){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=[],r=0;r<e.length;r++){var s=e[r],a=void 0;if(a=gi(s.props,"selector")?"".concat(t," ").concat(s.props.selector):t,i.push({path:"".concat(n).concat(""===n?"":".").concat(r,".props.selector"),value:a}),this.isCombo(s)){var o=this.cascadeSelectors(a,s.attrs.incidents,"".concat(n).concat(""===n?"":".").concat(r,".attrs.incidents"));i=i.concat(o)}}return i},createDescriptiveIncidentLikeObject:function(t,e,n,i,r){return{constructor:{Incident:t.incidentClass.targetClass.Incident,plugin_npm_name:t.incidentClass.targetClass.plugin_npm_name,Channel:t.incidentClass.targetClass.Channel,isClip:!1},attrs:i||t.attrs,props:r||t.props,selector:function(){return t.props.selector},id:t.props.id,audioClip:null,audio:"no",dynamicDurationValue:null,putMessageOnPipe:function(){},attributesStaggers:e,propsStaggers:n}},parseElementsDynamics:function(t,e,n,i,r){for(var s="incidents.".concat(r,".attrs"),a="incidents.".concat(r,".props"),o=Mn(e),u=Mn(n),l=0;l<t.length;l++)if(0===t[l].path.indexOf(s)){var c=t[l].path.substring(s.length+1);o.setValue(c,t[l].values[i])}else if(0===t[l].path.indexOf(a)){var h=t[l].path.substring(a.length+1);u.setValue(h,t[l].values[i])}return{incidentAttrs:o.exportFlattened(),incidentProps:u.exportFlattened()}},getStaggersForChild:function(t,e,n){for(var i=[],r=[],s=0;s<t.length;s++)"position"===n&&0===t[s].path.indexOf("incidents.".concat(e,".").concat(n))?r.push({path:"position",stagger:t[s].stagger}):0===t[s].path.indexOf("incidents.".concat(e,".").concat(n))?r.push({path:t[s].path.substring("incidents.".concat(e,".").concat(n).length+1),stagger:t[s].stagger}):i.push(t[s]);return{identifiedDynamics:r,remainingDynamics:i}},createElementProxy:function(t,e,n,i,r){for(var s=Mn(t),a=this.cascadeSelectors(e,t.attrs.incidents,"attrs.incidents"),o=0;o<i.length;o++)s.setValue("attrs.".concat(i[o].path),i[o].values[n]);for(var u=0;u<r.length;u++)s.setValue("props.".concat(r[u].path),r[u].values[n]);for(var l=0;l<a.length;l++)s.setValue(a[l].path,a[l].value);return s}},ts=function(t){u(n,t);var e=p(n);function n(){return r(this,n),e.apply(this,arguments)}return a(n,[{key:"parseAttrsDynamicValues",value:function(t,e){this.childrenStaggers=[];for(var n=0;n<t.attributesStaggers.length;n++)Yr.refersToOwnSelector(t,t.attributesStaggers[n].path)?this.staggerAttrs.push({path:t.attributesStaggers[n].path,values:t.attributesStaggers[n].stagger.calculateValues(e,this.initParams)}):this.childrenStaggers.push(t.attributesStaggers[n])}},{key:"handleRecalcDuration",value:function(t,e){var i=m(l(n.prototype),"handleRecalcDuration",this).call(this,t,e);return this.descriptiveIncident.dynamicDurationValue=1*this.duration,i}},{key:"lastWish",value:function(){this.descriptiveIncident.dynamicDurationValue=null,this.descriptiveIncident.putMessageOnPipe("setDurationDynamic",{},"Groups",{selfExecute:!1,direction:Li}),m(l(n.prototype),"lastWish",this).call(this)}},{key:"_createElementIncident",value:function(t,e,n,i,r,s){for(var a=this,o=Yr.createElementProxy(e,n.context.getElementSelectorByMCID(s),i,this.staggerAttrs,this.staggerProps),u=0;u<this.staggerAttrs.length;u++)o.setValue("attrs.".concat(this.staggerAttrs[u].path),this.staggerAttrs[u].values[i]);for(var l=cr({id:"".concat(this.id,"_element").concat(Xr).concat(i),attrs:{},props:{},Incident:Zr.Incident,plugin_npm_name:Zr.plugin_npm_name,Channel:Zr.Channel,DescriptiveIncident:new Zr}),c=function(t){var e=cr({id:"".concat(a.id,"_element").concat(Xr).concat(i,"_repeat").concat(Xr).concat(t),attrs:{},props:{},Incident:Zr.Incident,plugin_npm_name:Zr.plugin_npm_name,Channel:Zr.Channel,DescriptiveIncident:new Zr}),s=a.childrenStaggers;o.attrs.incidents.forEach((function(u,l){var c=Yr.parseElementsDynamics(a.staggerAttrs,u.attrs,u.props,i,l),h=c.incidentAttrs,d=c.incidentProps,p=Yr.getStaggersForChild(s,l,"attrs"),f=Yr.getStaggersForChild(p.remainingDynamics,l,"props"),m=Yr.getStaggersForChild(p.remainingDynamics,l,"position");s=f.remainingDynamics,o.setValue("attrs.incidents.".concat(l,".props.id"),"".concat(a.id,"_element").concat(Xr).concat(i,"_repeat").concat(Xr).concat(t,"_incident").concat(Xr).concat(l));var v=es(Yr.createDescriptiveIncidentLikeObject(u,p.identifiedDynamics,f.identifiedDynamics,h,d),n),g=u.position;1===m.identifiedDynamics.length&&(g=m.identifiedDynamics[0].stagger.calculateValues(new Array(r),a.initParams)[i]),e.addChild(v,g)})),l.addChild(e,Yr.getRepeatPosition(o.props.delay,o.props.hiatus,e.duration,t))},h=0;h<(o.props.repeats||1);h++)c(h);this.addChild(l,0)}}]),n}(fr);function es(t,e){var n,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(i&&"off"===t.audio||!i&&"only"===t.audio)return null;if(gi(t.props,"selector")&&(!i&&"~"===t.props.selector.charAt(0)||i&&"~"!==t.props.selector.charAt(0)&&!t.constructor.isClip))return null;if(t.constructor.isClip){if(!gi(t.props,"selector")||i)return i?t.audioClip:t.realClip;(n=new vr(t,e)).plugin_channel_class=Ri}else if(t.constructor.isCombo)n=new ts(t,e);else if(t.constructor.isGroup)for(var r in n=cr({id:t.id,attrs:t.attrs,props:t.props,Incident:t.constructor.Incident,plugin_npm_name:t.constructor.plugin_npm_name,Channel:t.constructor.Channel,DescriptiveIncident:t}),t.children){var s=es(t.children[r].leaf,e);null!==s&&n.addChild(s,t.children[r].position)}else n=new fr(t,e);return n}var ns="@donkeyclip/self-contained-incidents";function is(t){return function(){for(var e=0;e<t.length;e++)t[e]()}}var rs=function(t){u(n,t);var e=p(n);function n(t,i,s){var a;return r(this,n),(a=e.call(this,t,i)).attrs=t,a.props=i,a.DescriptiveIncident=s,a.isTheClip=!0,a.blockingWaitings={},a.instantiatedChannels={},a.isHostedClip=!0,a.instantiatedCopiesContexts={},a.onClipInitialise(),a.runTimeInfo=a.props.runTimeInfo,a.durationSubs=[],a.audioClip=!1,a}return a(n,[{key:"contextReady",get:function(){return this.context.contextLoaded}},{key:"onClipInitialise",value:function(){}},{key:"contextLoading",value:function(){this.context.contextLoaded=!1}},{key:"contextLoaded",value:function(){for(var t in this.context.contextLoaded=!0,this.putMessageOnPipe("contextLoaded",{},{},{selfExecute:!1,direction:Fi}),this.instantiatedChannels)this.instantiatedChannels[t].recalcScratchValues();this.unblock(this.clipCopyId||null)}},{key:"getElements",value:function(t){if(null!==this.props.host&&void 0!==this.props.host)return this.context.getElements(t);var e=[];for(var n in this.instantiatedCopiesContexts)for(var i=this.instantiatedCopiesContexts[n].getElements(t),r=0;r<i.length;r++)e.push(i[r]);return e}},{key:"addContext",value:function(t){this.instantiatedCopiesContexts[t.clipId]=t.context,t.instantiatedCopiesContexts=this.instantiatedCopiesContexts;var e=this.putMessageOnPipe("addContext",t,{},{selfExecute:!1,direction:Fi});if(1===Object.keys(this.instantiatedCopiesContexts).length){for(var n in this.instantiatedChannels)this.instantiatedChannels[n].recalcScratchValues(t.clipId);this.context.nonFragmentedContext=t.context}return e}},{key:"exportConstructionArguments",value:function(){return{attrs:this.attrs,props:this.props}}},{key:"_resize",value:function(t){for(var e in this.instantiatedChannels)this.instantiatedChannels[e]._resize(t);this.setNewDuration(this.duration*t);for(var n=0;n<this.durationSubs.length;n++)this.durationSubs[n](this.duration)}},{key:"addIncident",value:function(t){for(var e=this,n=this.putMessageOnPipe("addIncident",{incident:t.incident,millisecond:t.millisecond,parentGroupId:t.parentGroupId,incidentFromDescription:es,contextData:{clipId:this.id,context:this.context,instantiatedCopiesContexts:this.instantiatedCopiesContexts},audio:this.audioClip},t.parentGroupId,{selfExecute:!0,direction:Fi}),i={},r=0;r<n.length;r++){var s=n[r].response.getIncidentsByChannel(n[r].positionDelta+t.millisecond);for(var a in s){var o;gi(i,a)||(i[a]=[]),(o=i[a]).push.apply(o,k(s[a]))}}var u=this.checkAddition(i);if(u.result){return{result:!0,execute:function(){u.execute();for(var i=0;i<n.length;i++)for(var r in n[i].responder.addChild(n[i].response,t.millisecond),n[i].responder.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!0,direction:Li}),e.instantiatedCopiesContexts)n[i].response.putMessageOnPipe("addContext",{clipId:r,context:e.instantiatedCopiesContexts[r]},"ContextAwareIncidents",{selfExecute:!1,direction:Fi});e._calculateDuration()}}}return u}},{key:"checkAddition",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all-or-nothing",n=!0,i=[],r=[];for(var s in t){gi(this.instantiatedChannels,s)||(this.instantiatedChannels[s]=new t[s][0].incident.plugin_channel_class({runTimeInfo:this.runTimeInfo,context:this.context,subscribe:this.props.subscribe}));var a=this.instantiatedChannels[s].addIncidents(t[s],e);n=n&&a.result,a.result?r.push(a.execute):i=i.concat(a.errors)}return{result:n,errors:i,execute:is(r)}}},{key:"moveIncident",value:function(t){for(var e=this.putMessageOnPipe("moveIncident",{incidentId:t.id,millisecond:t.millisecond,parentGroupId:t.parentGroupId,contextData:{clipId:this.id,context:this.context},audio:this.audioClip},t.parentGroupId,{selfExecute:!0,direction:Fi}),n={},i=0;i<e.length;i++){var r=e[i].response.getIncidentsByChannel(e[i].positionDelta+t.millisecond);for(var s in r){var a;gi(n,s)||(n[s]=[]),(a=n[s]).push.apply(a,k(r[s]))}}var o=this.checkMove(n,t.positionDelta);if(o.result){function n(){o.execute();for(var n=0;n<e.length;n++)e[n].responder.editPosition(e[n].response.id,t.millisecond),e[n].responder.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!0,direction:Li})}return{result:!0,execute:n}}return o}},{key:"checkMove",value:function(t,e){var n=!0,i=[],r=[];for(var s in t){var a=this.instantiatedChannels[s].editIncidents(t[s],e);n=n&&a.result,a.result?r.push(a.execute):i=i.concat(a.errors)}return{result:n,errors:i,execute:is(r)}}},{key:"removeIncident",value:function(t){for(var e=this.putMessageOnPipe("removeIncident",{incidentId:t.id,parentGroupId:t.parentGroupId,contextData:{clipId:this.id,context:this.context},audio:this.audioClip},t.parentGroupId,{selfExecute:!0,direction:Fi}),n={},i=0;i<e.length;i++){var r=e[i].response.getIncidentsByChannel();for(var s in r){var a;gi(n,s)||(n[s]=[]),(a=n[s]).push.apply(a,k(r[s]))}}var o=this.checkDelete(n);if(o.result){return{result:!0,execute:function(){o.execute();for(var t=0;t<e.length;t++)e[t].responder.removeChild(e[t].response.id),e[t].responder.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!0,direction:Li})}}}return o}},{key:"checkDelete",value:function(t){var e=!0,n=[],i=[];for(var r in t){var s=this.instantiatedChannels[r].removeIncidents(t[r]);e=e&&s.result,s.result?i.push(s.execute):n=n.concat(s.errors)}return{result:e,errors:n,execute:is(i)}}},{key:"resizeIncident",value:function(t){for(var e=this.putMessageOnPipe("resize",{incidentId:t.id,newSize:t.newSize,fraction:t.fraction,contextData:{clipId:this.id,context:this.context},audio:this.audioClip},t.id,{selfExecute:!1,direction:Fi}),n={},i=0;i<e.length;i++){var r=e[i].response.getIncidentsByChannel(e[i].positionDelta);for(var s in r){var a;gi(n,s)||(n[s]=[]),(a=n[s]).push.apply(a,k(r[s]))}}var o=0;e.length>0&&(o=e[0].positionDelta);var u=this.checkResize(t.fraction,n,o);if(u.result){return{result:!0,execute:function(){u.execute();for(var n=0;n<e.length;n++)e[n].responder.setNewDuration(t.newSize)}}}return u}},{key:"checkResize",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=!0,r=[],s=[];for(var a in e){var o=ji(e[a],t,n),u=this.instantiatedChannels[a].checkResizedIncidents(o);i&&(i=u.result),u.result?s.push(u.execute):r=r.concat(u.errors)}return{result:i,errors:r,execute:is(s)}}},{key:"context",get:function(){var t,e;return null!==(e=(t=this.ownContext).contextLoaded)&&void 0!==e||(t.contextLoaded=!0),this.ownContext}},{key:"getIncidentsByChannel",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e={};return e[ns]=[{millisecond:t,incident:this,id:this.id}],e}},{key:"setVolume",value:function(t){this.volume=parseFloat(t)}},{key:"_onGetContextOnce",value:function(t){}},{key:"handleRecalcDuration",value:function(t,e){if(this._calculateDuration())for(var n=0;n<this.durationSubs.length;n++)this.durationSubs[n](this.duration);return!0}},{key:"onProgress",value:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(!1!==this.contextReady){for(var r in n||(n=this.id),this.instantiatedChannels){var s=this.instantiatedChannels[r];s.moveTo(this.runTimeInfo.currentMillisecond,e,n,i)}this.onAfterProgress(t,e)}else this.setBlock()}},{key:"onAfterProgress",value:function(t,e){}},{key:"flash",value:function(){for(var t in this.instantiatedChannels){this.instantiatedChannels[t].moveTo(0,this.runTimeInfo.currentMillisecond,this.id,!0)}}},{key:"subscribeToDurationChange",value:function(t){this.durationSubs.push(t)}},{key:"handleSetBlockingWaiting",value:function(t,e){}},{key:"handleRemoveBlockingWaiting",value:function(t,e){}}]),n}(Qi),ss=function(){function t(){r(this,t),this.output=di.createGain(),this.gainNode=di.createGain(),di.createStereoPanner&&(this.pannerNode=di.createStereoPanner()),di.createStereoPanner?(this.pannerNode.connect(this.gainNode),this.gainNode.connect(this.output),this.input=this.pannerNode):(this.gainNode.connect(this.output),this.input=this.gainNode)}return a(t,[{key:"connect",value:function(t){this.output.connect(t)}},{key:"disconnect",value:function(){this.output.disconnect()}}]),t}();function as(t){for(var e=window.atob(t),n=e.length,i=new Uint8Array(n),r=0;r<n;r++)i[r]=e.charCodeAt(r);return i.buffer}var os=/\[data(-mcid="+\w+")+\]/g,us=function(){function t(){r(this,t),this.subscribers=[]}return a(t,[{key:"sub",value:function(t,e){this.subscribers.push(e)}},{key:"pub",value:function(t){for(var e=0;e<this.subscribers.length;e++)this.subscribers[e](t)}}]),t}(),ls=function(){function t(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;r(this,t),this.totalSources=n.length,this.audioSources={},this.elementsByMCID={};for(var s=function(t){var r=n[t],s={mcid:r.mcid||Oi(),id:r.id,src:r.src,classes:r.classes||[],base64:r.base64||!1,pubSub:new us,soundLoaded:!1,startValues:r.startValues||{}};if(e.audioSources[s.id]=s,e.elementsByMCID[s.mcid]=s,r.base64)di.decodeAudioData(as(r.src),(function(t){e._setBuffer(s,t,i)}));else{var a=new XMLHttpRequest;a.open("GET",s.src,!0),a.responseType="arraybuffer",e.soundLoaded=!1,a.onload=function(){di.decodeAudioData(a.response,(function(t){e._setBuffer(s,t,i)}),e.onError)},a.send()}},a=0;a<n.length;a++)s(a);this.context={document:document,window:window,rootElement:document.body,unmount:function(){},masterNode:i,audioContext:di,getElements:this.getElements.bind(this),getMCID:this.getMCID.bind(this),setMCID:this.setMCID.bind(this),getElementSelectorByMCID:this.getElementSelectorByMCID.bind(this),getElementByMCID:this.getElementByMCID.bind(this)}}return a(t,[{key:"_setBuffer",value:function(t,e,n){t.soundLoaded=!0,t.buffer=e,t.audioNodeSet=new ss,t.audioNodeSet.connect(n.input),t.pubSub.pub()}},{key:"getElementByMCID",value:function(t){return gi(this.elementsByMCID,t)?this.elementsByMCID[t]:null}},{key:"getElements",value:function(t){if("~"!==t.charAt(0)){if(os.exec(t)){var e=t.split('"')[1];return this.elementsByMCID[e]}return[]}if("#"===(t=t.substr(1)).charAt(0))return gi(this.audioSources,t.substr(1))?[this.audioSources[t.substr(1)]]:[];if("."===t.charAt(0)){var n=t.substr(1),i=[];for(var r in this.audioSources)r.classes.indexOf(n)>=0&&i.push(r);return i}}},{key:"getMCID",value:function(t){return t.mcid}},{key:"setMCID",value:function(t,e){t.mcid=e}},{key:"getElementSelectorByMCID",value:function(t){return'[data-mcid="'.concat(t,'"]')}}]),t}(),cs=function(t){u(i,t);var e=p(i);function i(t,s){var a;r(this,i),(a=e.call(this,t,s)).audioNodeSet=new ss,a.audioNodeSet.connect(di.destination);var o=new ls(a.props.audioSources,a.audioNodeSet);return a.ownContext=n(n({},o.context),{},{isHostedClip:!0,initParams:s.initParams}),a.audioClip=!0,a}return a(i,[{key:"handleRecalcDuration",value:function(t,e){m(l(i.prototype),"handleRecalcDuration",this).call(this,t,e)&&this.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!1,direction:Li})}},{key:"onProgress",value:function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=this.delay+this.calculatedDuration+this.hiatus,a=0===s?0:e%s;0!==e&&0===a&&(a=this.delay+this.calculatedDuration);var o=a-this.delay;if(!(o<0)){o>this.calculatedDuration&&(o=this.calculatedDuration);var u=0===this.calculatedDuration?0:o/this.calculatedDuration;m(l(i.prototype),"onProgress",this).call(this,u,o,this.id,r)}}},{key:"_onGetContextOnce",value:function(t){this.audioNodeSet.disconnect(),this.parentClipContext=t,this.audioNodeSet.connect(t.masterNode.input)}},{key:"lastWish",value:function(){this.audioNodeSet.output.disconnect(),this.audioNodeSet.output.connect(di.destination)}},{key:"volume",get:function(){return this.audioNodeSet.output.gain.value}},{key:"setVolume",value:function(t){this.audioNodeSet.output.gain.value=t}}]),i}(rs),hs=function(t){u(n,t);var e=p(n);function n(){return r(this,n),e.apply(this,arguments)}return a(n,[{key:"onProgress",value:function(t){var e=this;if(!this.element.soundLoaded)return this.setBlock("loading sound"),this.element.pubSub.sub(this.id,(function(){e.unblock()})),!1;if("gain"===this.attributeKey){var n=(this.targetValue-this.initialValue)*t+this.initialValue;this.element.audioNodeSet.gainNode.gain.value=n}else if("pan"===this.attributeKey){var i=(this.targetValue-this.initialValue)*t+this.initialValue;this.element.audioNodeSet.pannerNode.pan.value=i}}},{key:"getScratchValue",value:function(){return"pan"===this.attributeKey?gi(this.element.startValues,"pan")?this.element.startValues.pan:0:"gain"===this.attributeKey?gi(this.element.startValues,"gain")?this.element.startValues.gain:1:void 0}}]),n}(ur),ds="|||",ps=function(t){u(n,t);var e=p(n);function n(t){var i;return r(this,n),(i=e.call(this,t)).playingIncidentsIds=[],i.transitioned=!1,t.subscribe(Oi(),i._stateChange.bind(h(i)),0,1,!0),i}return a(n,[{key:"_stateChange",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};"paused"!==e&&"idle"!==e&&"blocked"!==e||(this._stopPlayingIncidents(n),this.transitioned=!0)}},{key:"_stopPlayingIncidents",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=0;e<this.playingIncidentsIds.length;e++){var n=this.playingIncidentsIds[e].split(ds);n[0].startsWith(t.exception)||this._incidentById(n[0]).stop(n[1])}this.playingIncidentsIds=[]}},{key:"moveTo",value:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if("transitional"===this.runTimeInfo.state||i){this.transitioned=!0,this._stopPlayingIncidents();for(var r=0;r<this.incidents.length;r++){var s=this.incidents[r],a=s.id,o=s.millisecond,u=this._incidentById(a),l=void 0,c=void 0;e<o?(l=0,c=0):e>o+u.duration?(l=1,c=u.duration):l=(c=e-o)/u.duration,u.onProgress(l,c,n,!0)}}else{this.transitioned&&(t=0,this.transitioned=!1);for(var h=t>e,d=this.incidents,p=0;p<d.length;p++){var f=d[p],m=f.millisecond,v=this._incidentById(f.id),g=v.duration,y=m+g,k="".concat(f.id).concat(ds).concat(n);if(y>t&&y<=e||h){v.stop(n);var b=this.playingIncidentsIds.indexOf(k);b>-1&&this.playingIncidentsIds.splice(b,1)}var x=h?0:t;if(m>=x&&m<e&&y>e){var C=(e-m)/g>=1,I=C?1:(e-m)/g,w=C?g:e-m,E=v.play(I,w,n);E&&this.playingIncidentsIds.push(k)}}this.runTimeInfo.currentMillisecond=e}}}]),n}(Zi),fs=P(null,(function(t){return{F:function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2?arguments[2]:void 0;r(this,e),t(this),this.attrs=n,this.props=i,this.dna=s,this.context=s.context,this.mcid=s.mcid,this.id=i.id||Oi(),this.modelId=i.modelId,this.gotContext=!1,this.plugin_channel_class=ps,this.mc_plugin_npm_name="motor-cortex-js-media-playback",gi(i,"plugin_channel_class")&&(this.plugin_channel_class=i.plugin_channel_class),gi(i,"mc_plugin_npm_name")&&(this.mc_plugin_npm_name=i.mc_plugin_npm_name),this.hasIncidents=!1,this.autoGenerated=!1,this.onInitialise(n,i)},d:[{kind:"get",key:"selector",value:function(){return this.props.selector}},{kind:"get",key:"element",value:function(){return this.context.getElementByMCID(this.mcid)}},{kind:"method",decorators:[or],key:"getIncidentsByChannel",value:function(){}},{kind:"method",key:"_onGetContextOnce",value:function(){try{if(!0===this.context.fragment)return;this.gotContext||(this.onGetContext(),this.gotContext=!0)}catch(t){Mi.error(t),Mi.error(this.mcid)}}},{kind:"method",key:"onGetContext",value:function(){Mi.info('Overwritte the "onGetContext" method with the code you want to get executed',"info")}},{kind:"method",key:"lastWish",value:function(){}},{kind:"method",key:"onInitialise",value:function(){Mi.info('Overwritte the "onInialise" method with the code you want to get executed',"info")}},{kind:"method",key:"onProgress",value:function(t,e){}},{kind:"method",key:"play",value:function(t){return!0}},{kind:"method",key:"stop",value:function(){}},{kind:"method",decorators:[Hi],key:"setBlock",value:function(){}},{kind:"method",decorators:[Ui],key:"unblock",value:function(){}}]}})),ms=function(t){u(n,t);var e=p(n);function n(){return r(this,n),e.apply(this,arguments)}return a(n,[{key:"play",value:function(t){var e=this;if(!this.element.soundLoaded)return this.setBlock("loading sound"),this.element.pubSub.sub(this.id,(function(){e.unblock()})),!1;var n=0;return gi(this.props,"startFrom")&&(n=this.props.startFrom),this.audioNode=di.createBufferSource(),this.audioNode.buffer=this.element.buffer,this.audioNode.connect(this.element.audioNodeSet.input),this.audioNode.start(0,(t+n)/1e3),!0}},{key:"stop",value:function(){this.audioNode&&this.audioNode.stop()}}]),n}(fs),vs={npm_name:"@donkeyclip/motorcortex-soundsystem",name:"Internal MotorCortex Soundsystem",incidents:[{exportable:ms,name:"AudioPlayback"},{exportable:hs,name:"AudioEffect"}],Clip:{exportable:cs},audio:"only"},gs=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;r(this,t),this.realArray=[],null!=e&&(this.realArray=e)}return a(t,[{key:"_hasOwnProperty",value:function(t){return gi(this.realArray,t)}},{key:"_get",value:function(t){return this.realArray[t]}},{key:"_set",value:function(t,e){this.realArray[t]=e}},{key:"_keys",value:function(){return Object.keys(this.realArray)}},{key:"_delete",value:function(t){return delete this.realArray[t]}},{key:"_export",value:function(){return this.realArray}}]),t}(),ys=function(){function t(e){r(this,t),this.originalArray=e,this.extraArray={},this.addedKeys=[],this.removedKeys=new Set}return a(t,[{key:"_hasOwnProperty",value:function(t){return gi(this.originalArray,t)||gi(this.extraArray,t)}},{key:"_get",value:function(t){return gi(this.extraArray,t)?this.extraArray[t]:gi(this.originalArray,t)?this.originalArray[t]:void 0}},{key:"_set",value:function(t,e){this.extraArray[t]=e,gi(this.originalArray,t)||this.addedKeys.push(t),this.removedKeys.delete(t)}},{key:"_keys",value:function(){var t=this,e=Object.keys(this.originalArray);return e.push.apply(e,k(this.addedKeys)),e.filter((function(e){return!t.removedKeys.has(e)}))}},{key:"_delete",value:function(t){var e=this.addedKeys.indexOf(t);return e>-1?(this.addedKeys.splice(e),delete this.extraArray[t]):(this.removedKeys.add(t),!0)}},{key:"_export",value:function(){for(var t in this.extraArray)this.originalArray[t]=this.extraArray[t];var e,n=E(this.removedKeys);try{for(n.s();!(e=n.n()).done;){var i=e.value;delete this.originalArray[i]}}catch(t){n.e(t)}finally{n.f()}return this.originalArray}}]),t}();function ks(t,e,n,i){var r=!1;for(var s in e)gi(n,s)||(r=!0,i[s]=e[s]);return t.animatedAttributeValue=i,r}function bs(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],s=t[i],a=e._get(s.id);a.setInitialValue(n,r);var o=ks(a,a.initialValue,a.originalAnimatedAttributeValue,JSON.parse(JSON.stringify(a.animatedAttributeValue)));o&&(a.lastWish(),a.onGetContext()),o&&i<t.length-1&&bs(t,e,a.animatedAttributeValue,i+1,!1)}var xs=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(this,t),this.lanes={},e.lanes&&(this.lanes=e.lanes),this.comboAttributes={},null!=e.comboAttributes&&(this.comboAttributes=e.comboAttributes),this.belongingLaneKeysByAnimationId={},e.belongingLaneKeysByAnimationId&&(this.belongingLaneKeysByAnimationId=e.belongingLaneKeysByAnimationId),this.incidentsById=new gs({}),e.incidentsById&&(this.incidentsById=e.incidentsById)}return a(t,[{key:"_resize",value:function(t){for(var e=Object.keys(this.lanes),n=0;n<e.length;n++)for(var i=e[n],r=this.lanes[i],s=0;s<r.length;s++)r[s].millisecond=r[s].millisecond*t}},{key:"createTestLanesSanbox",value:function(){var e={lanes:Mn(this.lanes),belongingLaneKeysByAnimationId:Mn(this.belongingLaneKeysByAnimationId),incidentsById:new ys(this.incidentsById._export())};return this.comboAttributes&&(e.comboAttributes=this.comboAttributes),new t(e)}},{key:"getLane",value:function(t,e){return this.lanes[Si(t,e)]}},{key:"applySandboxChanges",value:function(t){this.lanes=t.lanes.exportFlattened(),this.belongingLaneKeysByAnimationId=t.belongingLaneKeysByAnimationId.exportFlattened(),this.incidentsById=new gs(t.incidentsById._export())}},{key:"laneExists",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=Si(t,e);return!!this.lanes.hasOwnProperty(i)||(n&&this.lanes.setValue(i,[]),!1)}},{key:"getOverlappingAnims",value:function(t,e,n){var i=this,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return Array.from(this.lanes[Si(e,n)]||[]).filter((function(e){var n=t.incident.duration;null!=s&&(n=s);var a=i.incidentsById._get(e.id).duration;return e.id!==t.incident.id&&!r.includes(e.id)&&(e.millisecond>=t.millisecond&&e.millisecond<n+t.millisecond||e.millisecond+a>t.millisecond&&e.millisecond+a<=n+t.millisecond||e.millisecond<t.millisecond&&e.millisecond+a>n+t.millisecond)}))}},{key:"addElementToLane",value:function(t,e,n,i){var r=this,s=[],a=Si(t,e);this.incidentsById._set(i.id,i);var o={millisecond:n,id:i.id};this.laneExists(t,e,!0),this.lanes.pushValue(a,o),this.lanes[a].sortBy("millisecond");var u=this.lanes[a],l=this.lanes[a].findIndex((function(t){return t.id===i.id}));return gi(i.id)||this.belongingLaneKeysByAnimationId.setValue(i.id,[]),this.belongingLaneKeysByAnimationId.pushValue(i.id,a),0===l?this.lanes[a].length>1?s.push((function(){i.setInitialValue(r.incidentsById._get(u[1].id).pureInitialValues)})):s.push((function(){i.setInitialValue()})):s.push((function(){i.setInitialValue(r.incidentsById._get(u[l-1].id).animatedAttributeValue)})),gi(this.comboAttributes,e)&&s.push((function(){return bs(u,r.incidentsById,i.initialValue,l)})),l+1<u.length&&s.push((function(){r.incidentsById._get(u[l+1].id).setInitialValue(i.animatedAttributeValue),r.incidentsById._get(u[l+1].id).gotContext&&(r.incidentsById._get(u[l+1].id).lastWish(),r.incidentsById._get(u[l+1].id).onGetContext())})),s}},{key:"updateLane",value:function(t,e){for(var n=this,i={},r=0;r<t.length;r++)for(var s=this.belongingLaneKeysByAnimationId[t[r]],a=0;a<s.length;a++){var o=s[a];gi(i,o)||(i[o]={animations:[],lane:this.lanes[o],laneData:Ai(s[a])}),i[o].animations.push(t[r])}for(var u in i){var l=i[u],c=l.laneData,h=l.lane,d=l.animations,p=k(h);p.sort((function(t,e){return t.millisecond-e.millisecond}));for(var f=gi(this.comboAttributes,c.attribute),m=0;m<h.length;m++)d.includes(h[m].id)&&(h[m].millisecond+=e);h.sort((function(t,e){return t.millisecond-e.millisecond})),this.lanes[u]=h;for(var v=function(t){var e=d[t],i=p.findIndex((function(t){return t.id===e})),r=h.findIndex((function(t){return t.id===e}));if(i===r&&r<=1)return"continue";var s=n.incidentsById._get(h[r].id);if(i+1<h.length)if(0===i)if(f)bs(h,n.incidentsById,s.pureInitialValues,0,!0);else{var a=n.incidentsById._get(p[1].id);a.setInitialValue(s.pureInitialValues),a.onGetContext()}else if(f){var o=r>i?i:r;bs(h,n.incidentsById,n.incidentsById._get(p[i-1].id).animatedAttributeValue,o,!0)}else n.incidentsById._get(p[i+1].id).setInitialValue(n.incidentsById._get(p[i-1].id).animatedAttributeValue),n.incidentsById._get(p[i+1].id).onGetContext();if(0===r?f?bs(h,n.incidentsById,n.incidentsById._get(p[0].id).pureInitialValues,r,!0):(s.setInitialValue(n.incidentsById._get(p[0].id).pureInitialValues),s.onGetContext()):f?bs(h,n.incidentsById,n.incidentsById._get(h[r-1].id).animatedAttributeValue,r,!0):(s.setInitialValue(n.incidentsById._get(h[r-1].id).animatedAttributeValue),s.onGetContext()),r+1>=h.length)return"continue";if(f)return bs(h,n.incidentsById,s.animatedAttributeValue,r+1,!0),"continue";var u=n.incidentsById._get(h[r+1].id);u.setInitialValue(s.animatedAttributeValue),u.onGetContext()},g=0;g<d.length;g++)v(g)}}},{key:"deleteAnimations",value:function(t){for(var e={},i=0;i<t.length;i++){for(var r=t[i],s=this.belongingLaneKeysByAnimationId[r],a=0;a<s.length;a++){for(var o=this.lanes[s[a]],u=-1,l=0;l<o.length;l++)if(o[l].id===r){u=l;break}for(var c=n({},o[u]),h=this.incidentsById._get(c.id),d=Ai(s[a]),p=[],f=0;f<o.length;f++)o[f].id!==r&&p.push(o[f]);if(this.lanes[s[a]]=p,0!==(o=this.lanes[s[a]]).length){e[s[a]]=Ai(s[a]);var m=this.incidentsById._get(c.id).pureInitialValues;if(!(u>=o.length||!1===m))if(gi(this.comboAttributes,d.attribute))bs(o,this.incidentsById,m,u,!0);else{var v=this.incidentsById._get(o[u].id);v.setInitialValue(m),v.onGetContext()}}else h.onProgress(0,0),delete this.lanes[s[a]],gi(e,s[a])&&delete e[s[a]]}delete this.belongingLaneKeysByAnimationId[t[i]]}return e}},{key:"recalcScratchValues",value:function(t){for(var e=Object.keys(this.lanes),n=0;n<e.length;n++){var i=e[n],r=this.lanes[i];if(r.length>0){var s=this.incidentsById._get(r[0].id),a=s.getScratchValue(t),o=Ai(i);gi(this.comboAttributes,o.attribute)?bs(r,this.incidentsById,a,0,!0):s.setInitialValue(a),s.lastWish(),s.onGetContext()}}}}]),t}(),Cs=function(t){u(i,t);var e=p(i);function i(t){var n;return r(this,i),(n=e.call(this,t)).comboAttributes={},n.fixedAttributeName="_",null!=t.comboAttributes&&(n.comboAttributes=t.comboAttributes),n.LanesHandler=new xs({comboAttributes:n.comboAttributes}),n}return a(i,[{key:"setComboAttributes",value:function(t){this.comboAttributes=t,this.LanesHandler=new xs({comboAttributes:this.comboAttributes})}},{key:"lanes",get:function(){return this.LanesHandler.lanes}},{key:"incidentsById",get:function(){return this.LanesHandler.incidentsById}},{key:"_resize",value:function(t){this.LanesHandler._resize(t)}},{key:"checkAddition",value:function(t){for(var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all-or-nothing",i=this.LanesHandler.createTestLanesSanbox(),r=[],s=[],a=[],o=function(n){var o=!1,u=t[n],l=u.incident,c=l.mcid,h=l.attribute||e.fixedAttributeName;i.laneExists(c,h),r.push({mcid:c,attribute:h});var d=i.getOverlappingAnims(u,c,h);if(d.length>0&&(o=!0,a.push({type:"unauthorised, overlapping incidents on the same element",meta:{element_mcid:c,attribute:h,incident:u,overlappingAnims:d}})),!o){var p=i.addElementToLane(c,h,u.millisecond,l);s.push((function(){for(var t=0;t<p.length;t++)p[t]();l._onGetContextOnce()}))}},u=0;u<t.length;u++)o(u);if(a.length>0&&"all-or-nothing"===n)return{result:!1,errors:a};var l=this.LanesHandler,c=function(){for(var t=0;t<r.length;t++){var e=Si(r[t].mcid,r[t].attribute),n=i.lanes[e].exportFlattened();n.sort((function(t,e){return t.millisecond-e.millisecond})),i.lanes.setValue(e,n)}for(var a=0;a<s.length;a++)s[a]();l.applySandboxChanges(i)};return{result:!0,errors:a,execute:c}}},{key:"checkEdit",value:function(t,e){for(var i=[],r=0;r<t.length;r++)i.push(t[r].id);for(var s=this.LanesHandler.createTestLanesSanbox(),a=[],o=0;o<t.length;o++)for(var u=t[o].incident.id,l=t[o].incident.mcid,c=t[o].incident.attribute||this.fixedAttributeName,h=s.getLane(l,c),d=0;d<h.length;d++)if(h[d].id===u){var p=n({},h[d]);p.millisecond+=e,p.incident=s.incidentsById._get(p.id);var f=s.getOverlappingAnims(p,l,c,i);f.length>0&&a.push({type:"anauthorised, overlapping animations on the same element",meta:{element_mcid:l,attribute:c,newAnimation:p,overlappingAnims:f}});break}if(a.length>0)return{result:!1,errors:a};var m=this;return{result:!0,execute:function(){m.LanesHandler.updateLane(i,e)}}}},{key:"checkResizedIncidents",value:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=[],r=0;r<t.length;r++)i.push(t[r].id);for(var s=this.LanesHandler.createTestLanesSanbox(),a=[],o=0;o<t.length;o++)for(var u=this.LanesHandler.incidentsById._get(t[o].id),l=u.mcid,c=u.attribute||this.fixedAttributeName,h=s.getLane(l,c),d={mcid:l,attribute:c},p=t[o].end-t[o].start,f=0;f<h.length;f++)if(h[f].id===t[o].id){if(!e){var m=h[f],v=n({},m);v.millisecond+=t[o].startDelta,v.incident=s.incidentsById._get(v.id);var g=s.getOverlappingAnims(v,d.mcid,d.attribute,i,p);g.length>0&&a.push({type:"unauthorized overlapping animations on the same element",meta:{element_mcid:d.mcid,attribute:d.attribute,newAnimation:v,overlappingAnims:g}})}break}if(a.length>0)return{result:!1,errors:a};var y=this,k=function(){for(var e=0;e<t.length;e++)y.LanesHandler.updateLane([t[e].id],t[e].startDelta)};return{execute:k,result:!0}}},{key:"checkDelete",value:function(t){for(var e=[],n=0;n<t.length;n++)e.push(t[n].id);var i=this;return{result:!0,execute:function(){i.LanesHandler.deleteAnimations(e)}}}},{key:"recalcScratchValues",value:function(t){this.LanesHandler.recalcScratchValues(t)}},{key:"slipIntoLaneForwards",value:function(t,e,n,i){var r=this,s=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a=t.filter((function(t){var i=r.incidentsById._get(t.id).duration+t.millisecond;return i>=e&&i<=n||i>=n&&t.millisecond<=n}));if(0===a.length){if(s&&0===e){var o=this.incidentsById._get(t[0].id);o.onProgress(0,0,i)}return!0}var u=a.length-1,l=this.incidentsById._get(a[u].id),c=a[u].millisecond,h=1,d=l.duration;l.duration+c>n&&(h=(d=n-c)/l.duration),l.onProgress(h,d,i)}},{key:"slipToLaneBackwards",value:function(t,e,n,i){var r=this,s=t.filter((function(t){var i=r.incidentsById._get(t.id).duration+t.millisecond;return i<=n&&i>=e||t.millisecond>=e&&t.millisecond<=n||t.millisecond<e&&i>n}));if(0===s.length)return!0;var a=this.incidentsById._get(s[0].id),o=s[0].millisecond,u=0,l=0;o<n&&(u=(n-o)/a.duration,l=n-o),a.onProgress(u,l,i)}},{key:"moveTo",value:function(t,e,n){for(var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=Object.keys(this.lanes),s=0;s<r.length;s++){var a=this.lanes[r[s]];t<=e?this.slipIntoLaneForwards(a,t,e,n,i):this.slipToLaneBackwards(a,t,e,n,i)}}}]),i}(Ri);o(Cs,"type","attributes");var Is=function(){function t(){r(this,t),this.customEntities={}}return a(t,[{key:"calcClipDims",value:function(t){var e={use:!1,width:null,height:null};return gi(t,"originalDims")&&null!=t.originalDims.width&&null!=t.originalDims.height?{use:!0,width:t.originalDims.width.number+t.originalDims.width.unit,height:t.originalDims.height.number+t.originalDims.height.unit}:(gi(t,"containerParams")&&(gi(t.containerParams,"width")&&(e.use=!0,e.width=t.containerParams.width),gi(t.containerParams,"height")&&(e.use=!0,e.height=t.containerParams.height)),e)}},{key:"scalingCalculator",value:function(t){if(!gi(t,"containerParams")||!gi(t,"originalDims")||null==t.originalDims.width&&null==t.originalDims.height)return{width:1,height:1};var e=Ii(t.containerParams),n=null,i=null;return null!==e.width&&null!==t.originalDims.width&&(e.width.unit===t.originalDims.width.unit?n=e.width.number/t.originalDims.width.number:Mi.warning("containerParams and originalDims width of Incident have different dimensions.\n          containerParams.width will be ignored")),null!==e.height&&null!==t.originalDims.height&&(e.height.unit===t.originalDims.height.unit?i=e.height.number/t.originalDims.height.number:Mi.warning("containerParams and originalDims height of Incident have different dimensions.\n          containerParams.width will be ignored")),null===n&&null===i?{width:1,height:1}:(null!==n&&null===i?i=n:null!==i&&null===n&&(n=i),{width:n,height:i})}},{key:"getElementByMCID",value:function(t){if(gi(this.customEntities,t))return this.customEntities[t];if(gi(this.elementsByMCID,t))return this.elementsByMCID[t];var e=this.context.rootElement.querySelector(this.getElementSelectorByMCID(t));return this.elementsByMCID[t]=e,e}},{key:"getElements",value:function(t){if(null==t||""===t)return[];if("!"===t.charAt(0)){if("#"===(t=t.substr(1)).charAt(0))return[this.customEntities[t.substr(1)]];if("."===t.charAt(0)){var e=[];for(var n in this.customEntities){var i=this.customEntities[n];i.classes.includes(t.substr(1))&&e.push(i)}return e}}return Array.from(this.context.rootElement.querySelectorAll(t))}},{key:"getMCID",value:function(t){return t.customEntity?t.id:t.getAttribute($)}},{key:"setMCID",value:function(t,e){t.setAttribute($,e)}},{key:"getElementSelectorByMCID",value:function(t){return gi(this.customEntities,t)?"!#".concat(t):"[".concat($,'="').concat(t,'"]')}},{key:"setCustomEntity",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return gi(this.customEntities,t)?(Mi.error("Clip ".concat(this.id," already has custom Entity with id: ").concat(t)),!1):(this.customEntities[t]={id:t,entity:e,classes:n,customEntity:!0},!0)}}]),t}();function ws(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(vi(t))return t(e);var i=Fn(t,{items:{initParams:e},keys:{}},n);return fi(i)?i:i.outerHTML}function Es(t,e){if("google-font"===e.type)return function(t,e){var n=t.createElement("link");return n.setAttribute("rel","stylesheet"),Ni(e.src)?(n.setAttribute("href",e.src),n):(Mi.error("Only valid google font url are accepted on src of a google-font. ".concat(e.src," provided. No font will loaded")),n)}(t,e);Mi.error("The provided font type is not one of the supported. ".concat(e.type," provided. Aborting loading font."));var n=t.createElement("link");return n.setAttribute("rel","stylesheet"),n}var As=function(t){u(n,t);var e=p(n);function n(){var t,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(r(this,n),t=e.call(this),!mi(s))return Mi.error("ContextHandler expects an object on its constructor. ".concat(i(s)," passed")),d(t,!1);if(!gi(s,"html"))return Mi.error("ContextHandler expects the html key on its constructor properties which is missing"),d(t,!1);if(!gi(s,"css"))return Mi.error("ContextHandler expects the css key on its constructor properties which is missing"),d(t,!1);if(gi(s,"initParams")||Mi.info("ContextHandler got null initParams"),!gi(s,"host"))return Mi.error("ContextHandler expects the host key on its constructor properties which is missing"),d(t,!1);t.isDOM=!0;var a=s.host.ownerDocument;if(!a.getElementById("@donkeyclip/motorcortex/iframeContextHandler/css")){var o="\n            iframe[seamless]{\n                background-color: transparent;\n                border: 0px none transparent;\n                padding: 0px;\n                overflow: hidden;\n            }\n            ",u=a.createElement("style");u.id="@donkeyclip/motorcortex/iframeContextHandler/css",u.type="text/css";var l=a.head||a.getElementsByTagName("head")[0];u.styleSheet?u.styleSheet.cssText=o:u.appendChild(a.createTextNode(o)),l.appendChild(u)}var c=a.createElement("iframe");s.host.appendChild(c);var p=t.scalingCalculator(s),f=t.calcClipDims(s);c.setAttribute("seamless","seamless"),!0===f.use&&(null!==f.width&&c.setAttribute("width",f.width),null!==f.height&&c.setAttribute("height",f.height)),c.style.transform="scale(".concat(p.width,", ").concat(p.height,")"),c.style.transformOrigin="top left",c.style.position="absolute",c.src="";var m=c.contentWindow||c.contentDocument;m.document&&(m=m.document),m.write(ws(s.html,s.initParams,!0));var v="\n        body{\n            padding:0;\n            margin:0;\n        }\n        ",g=m.createElement("style");g.type="text/css",g.styleSheet?g.styleSheet.cssText=ws(s.css,s.initParams)+v:g.appendChild(a.createTextNode(ws(s.css,s.initParams)+v));var y=m.head||m.getElementsByTagName("head")[0];if(y.appendChild(g),gi(s,"fonts"))for(var k=0;k<s.fonts.length;k++){var b=s.fonts[k],x=Es(m,b);y.appendChild(x)}return t.rootElement=c,m.close(),t.context={document:m,window:c.contentWindow||c,clipContainer:c,rootElement:m.body,unmount:function(){s.host.removeChild(c)},getElements:t.getElements.bind(h(t)),getMCID:t.getMCID.bind(h(t)),setMCID:t.setMCID.bind(h(t)),getElementSelectorByMCID:t.getElementSelectorByMCID.bind(h(t)),getElementByMCID:t.getElementByMCID.bind(h(t)),setCustomEntity:t.setCustomEntity.bind(h(t))},t.elementsByMCID={},t}return n}(Is),Ps=function(t){u(n,t);var e=p(n);function n(){var t,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(r(this,n),t=e.call(this),!mi(s))return Mi.error("ContextHandler expects an object on its constructor. ".concat(i(s)," passed")),d(t);if(!gi(s,"html"))return Mi.error("ContextHandler expects the html key on its constructor properties which is missing"),d(t);if(!gi(s,"css"))return Mi.error("ContextHandler expects the css key on its constructor properties which is missing"),d(t);if(!gi(s,"host"))return Mi.error("ContextHandler expects the host key on its constructor properties which is missing"),d(t);t.isDOM=!0;var a=s.host.shadowRoot;a||(a=s.host.attachShadow({mode:"open"}));var o=document.createElement("div"),u=t.scalingCalculator(s),l=t.calcClipDims(s);o.setAttribute("data-motorocortex-container","true"),!0===l.use&&(null!==l.width&&(o.style.width=l.width),null!==l.height&&(o.style.height=l.height)),o.style.transform="scale(".concat(u.width,", ").concat(u.height,")"),o.style.transformOrigin="top left",o.style.position="absolute",o.style.overflow="hidden",o.innerHTML=ws(s.html,s.initParams,!0),a.appendChild(o);var c=document.createElement("slot");a.appendChild(c);var p=document.createElement("style");if(p.type="text/css",p.styleSheet?p.styleSheet.cssText=ws(s.css,s.initParams):p.appendChild(document.createTextNode("[data-motorocortex-container] { all: initial; }"+ws(s.css,s.initParams))),a.appendChild(p),t.fontTags=[],gi(s,"fonts"))for(var f=0;f<s.fonts.length;f++){var m=s.fonts[f],v=Es(document,m);document.getElementsByTagName("head")[0].appendChild(v),t.fontTags.push(v)}return o.style.overflow="hidden",t.rootElement=o,t.context={document:document,window:window,clipContainer:t.rootElement,rootElement:o,unmount:function(){try{a.innerHTML="";for(var t=0;t<this.fontTags.length;t++)document.getElementsByTagName("head")[0].removeChild(this.fontTags[t])}catch(t){Mi.warning("The element of the Clip to be removed seems not to exist any more")}},getElements:t.getElements.bind(h(t)),getMCID:t.getMCID.bind(h(t)),setMCID:t.setMCID.bind(h(t)),getElementSelectorByMCID:t.getElementSelectorByMCID.bind(h(t)),getElementByMCID:t.getElementByMCID.bind(h(t)),setCustomEntity:t.setCustomEntity.bind(h(t))},t.elementsByMCID={},t}return n}(Is),Os=function(t){u(i,t);var e=p(i);function i(){var t,s,a,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,l=arguments.length>2?arguments[2]:void 0;r(this,i),null===u?(s={},a=o):(s=o,a=u),t=e.call(this,s,a,l),a=n(n({},a),{},{html:""!==t.html?t.html:a.html,css:""!==t.css?t.css:a.css,fonts:t.fonts.length>0?t.fonts:a.fonts});var c=j;t.clipType=c;var h=new(document.head.createShadowRoot||document.head.attachShadow?Ps:As)(a);return t.ownContext=n(n({},h.context),{},{isHostedClip:t.isHostedClip,initParams:a.initParams}),t.iframe=h.iframeElement,t.forceExportIncidents=!0,t.onAfterRender(),t}return a(i,[{key:"onAfterRender",value:function(){}},{key:"html",get:function(){return""}},{key:"css",get:function(){return""}},{key:"fonts",get:function(){return[]}},{key:"rootElement",get:function(){return this.context.clipContainer}},{key:"exportConstructionArguments",value:function(){return{attrs:this.attrs,props:n(n({},this.props),{},{host:void 0,html:!0===this.DescriptiveIncident.constructor.customClip?"":this.context.rootElement.innerHTML})}}},{key:"setCustomEntity",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return this.context.setCustomEntity(t,e,n)}}]),i}(rs),Ss=function(t){u(s,t);var e=p(s);function s(){var t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(this,s),t=e.call(this);var o=n({},a);if(!mi(o))return Mi.error("HTMLFragmentContextHandler expects an object on its constructor. ".concat(i(o)," passed")),d(t,!1);gi(o,"html")||(o.html=""),t.isDOM=!0;var u=document.createDocumentFragment(),l=document.createElement("div");return gi(o,"containerParams")&&(gi(o,"width")&&(l.style.width=o.containerParams.width),gi(o,"height")&&(l.style.height=o.containerParams.height)),l.innerHTML=ws(o.html,o.initParams,!0),u.appendChild(l),l.style.overflow="hidden",t.rootElement=l,t.context={document:document,window:window,clipContainer:t.rootElement,rootElement:l,unmount:function(){o.host.removeChild(u)},getElements:t.getElements.bind(h(t)),getMCID:t.getMCID.bind(h(t)),setMCID:t.setMCID.bind(h(t)),getElementSelectorByMCID:t.getElementSelectorByMCID.bind(h(t)),getElementByMCID:t.getElementByMCID.bind(h(t)),setCustomEntity:t.setCustomEntity.bind(h(t)),fragment:!0},t.elementsByMCID={},t}return s}(Is),_s=function(t){u(i,t);var e=p(i);function i(){var t,s,a,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,l=arguments.length>2?arguments[2]:void 0;r(this,i),null===u?(s={},a=o):(s=o,a=u),t=e.call(this,s,a,l);var c=new Ss(n(n({},a),{},{html:gi(a,"html")?a.html:t.html,css:gi(a,"css")?a.css:t.css,fonts:gi(a,"fonts")?a.fonts:t.fonts}));return t.ownContext=n(n({},c.context),{},{isHostedClip:!1}),t.iframe=c.iframeElement,t.forceExportIncidents=!0,t.onDOMCLipInitialise(),t}return a(i,[{key:"exportConstructionArguments",value:function(){return{attrs:this.attrs,props:n(n({},this.props),{},{html:this.context.rootElement.innerHTML})}}},{key:"onDOMCLipInitialise",value:function(){}},{key:"rootElement",get:function(){return this.context.clipContainer}}]),i}(rs),Ds=function(){function t(){r(this,t),this.isNullClip=!0}return a(t,[{key:"duration",get:function(){return 0}},{key:"addIncident",value:function(){return{result:!0,execute:function(){}}}},{key:"moveIncident",value:function(){return{result:!0,execute:function(){}}}},{key:"removeIncident",value:function(){return{result:!0,execute:function(){}}}},{key:"resizeIncident",value:function(){return{result:!0,execute:function(){}}}},{key:"getIncidentsByChannel",value:function(){return{}}},{key:"flash",value:function(){}},{key:"_resize",value:function(){}},{key:"onProgress",value:function(){}}]),t}(),Ms=function(){function t(e){r(this,t),this.runTimeInfo={currentMillisecond:0,state:"transitional"},this.id=Oi(),this.realClip=e.descriptiveIncident.realClip;var i=e.descriptiveIncident.realClip.exportConstructionArguments(),s=n(n({},i.props),{},{selector:void 0,host:e.host,id:this.id});this.ownClip=new e.descriptiveIncident.constructor.Incident(i.attrs,s),e.descriptiveIncident.realClip.addContext({clipId:this.id,context:this.ownClip.context,synchronize:e.synchronize,runTimeInfo:this.runTimeInfo},!0)}return a(t,[{key:"onProgress",value:function(t,e){for(var n in this.realClip.instantiatedChannels){this.realClip.instantiatedChannels[n].moveTo(this.runTimeInfo.currentMillisecond,e,this.id,!0)}this.runTimeInfo.currentMillisecond=e}}]),t}(),Ts=function(t){u(n,t);var e=p(n);function n(t,i){var s;return r(this,n),(s=e.call(this,t,i)).runTimeInfo={currentMillisecond:0,state:"idle"},s.listeners={},s.previousTimeStamp=-1,s.speed=1,s}return a(n,[{key:"_setState",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(t!==this.runTimeInfo.state)for(var n in this.runTimeInfo.state=t,this.putMessageOnPipe("setState",{newState:t,options:e},"Clips",{selfExecute:!1,direction:Fi}),this.listeners){var i=this.listeners[n];i.funct(this.runTimeInfo.currentMillisecond,t,e)}}},{key:"handleSetState",value:function(t,e){this._setState(e.newState,e.options||{})}},{key:"play",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if("idle"===this.runTimeInfo.state||"paused"===this.runTimeInfo.state||"armed"===this.runTimeInfo.state||"transitional"===this.runTimeInfo.state||"blocked"===this.runTimeInfo.state){if("paused"===this.runTimeInfo.state){var n=(new Date).getTime()-this.pauseMoment;this.previousTimeStamp+=n}this._setState("playing"),this.onPlay(),e||window.requestAnimationFrame((function(e){t.step(e)}))}}},{key:"pause",value:function(){"playing"===this.runTimeInfo.state&&(this._setState("paused"),this.pauseMoment=(new Date).getTime(),this.onWait())}},{key:"arm",value:function(){"transitional"!==this.runTimeInfo.state&&"blocked"!==this.runTimeInfo.state||this._setState("armed")}},{key:"complete",value:function(){this._setState("idle"),this.previousTimeStamp=-1}},{key:"stop",value:function(){this._setState("transitional"),this.previousTimeStamp=-1}},{key:"block",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};gi(t,"exception")&&"playing"!==this.runTimeInfo.state||(this._setState("blocked",t),this.previousTimeStamp=-1)}},{key:"onPlay",value:function(){}},{key:"onWait",value:function(){}},{key:"playableProgress",value:function(t,e){if(this.isTheRootClip){for(var n in this.listeners){var i=this.listeners[n];!0!==i.onlyOnStateChange&&(Math.abs(e+i.cavaDelta-this.runTimeInfo.currentMillisecond)>i.threshold?(i.funct(Ei(e,i.roundTo),this.runTimeInfo.state),i.cavaDelta=0):i.cavaDelta+=Math.abs(e-this.runTimeInfo.currentMillisecond))}return this.onProgress(t,e),this.runTimeInfo.currentMillisecond=e,!0}return!1}},{key:"executionSpeed",set:function(t){this.isTheRootClip&&(this.speed=parseFloat(t))}},{key:"step",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("playing"===this.runTimeInfo.state){var n=this;-1===this.previousTimeStamp&&(this.previousTimeStamp=t);var i={milliseconds:Math.round(this.runTimeInfo.currentMillisecond+(t-this.previousTimeStamp)*this.speed),fraction:(this.runTimeInfo.currentMillisecond+(t-this.previousTimeStamp)*this.speed)/this.duration};if(i.fraction>=1)return this.playableProgress(1,this.duration),void this.complete();if(i.fraction<0)return this.playableProgress(0,0),void this.complete();this.playableProgress(i.fraction,i.milliseconds),this.previousTimeStamp=t,e||window.requestAnimationFrame(n.step.bind(n))}}},{key:"subscribe",value:function(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];n||(n=0),i||(i=1),this.listeners[t]={funct:e,threshold:n,roundTo:i,cavaDelta:0,onlyOnStateChange:r}}},{key:"unsubscribe",value:function(t){gi(this.listeners,t)&&delete this.listeners[t]}},{key:"subscribeToDurationChange",value:function(t){return!!this.isTheRootClip&&(this.realClip.subscribeToDurationChange(t),!0)}}]),n}(Zr);function Vs(){return{result:!0}}function $s(t,e){return new Proxy(t,{get:function(t,n){return vi(t[n])?Vs:"nonBlockingErrorClip"===n||("errors"===n?e:t[n])}})}var js=P(null,(function(t,e){var i=function(e){u(s,e);var i=p(s);function s(e){var a,o,u,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(r(this,s),null===l?(o={},u=e):(o=e,u=l),a=i.call(this,o,u),t(h(a)),a.mustHaveNullClip=!1,a.initParams=u.initParams||{},gi(u,"initParamsValidationRules")){var c=Vi(u.initParamsValidationRules,a.initParams,"Error on initParams validation");if(!c.result)return Mi.error("Clip initParams validation failed. Switching to non-blocking blank Clip"),d(a,$s(h(a),c.errors))}var p=Ti({props:a.props},$r,a.constructor,a.id);if(!p.result)return d(a,p);a.attributesStaggers=[],a.propsStaggers=[];var f=a.setupDynamicValues();a.isTheRootClip=!1,a.isExportableToJSONFormat=!0,a.volumeChangeSubsribers={},Object.prototype.hasOwnProperty.call(u,"html")&&vi(u.html)&&(a.isExportableToJSONFormat=!1);var m={id:a.id,attrs:o,props:n(n({},u),{},{html:Object.prototype.hasOwnProperty.call(u,"html")?u.html:a.html,css:Object.prototype.hasOwnProperty.call(u,"css")?u.css:a.css,fonts:Object.prototype.hasOwnProperty.call(u,"fonts")?u.fonts:a.fonts,runTimeInfo:a.runTimeInfo,subscribe:a.subscribe.bind(h(a)),repeats:1,delay:0,hiatus:0}),plugin_npm_name:a.constructor.plugin_npm_name,Channel:a.constructor.Channel,DescriptiveIncident:h(a)};if(a.audio="on",Object.prototype.hasOwnProperty.call(a.constructor,"audio")&&(a.audio=a.constructor.audio),Object.prototype.hasOwnProperty.call(u,"audio")&&(a.audio=u.audio),Object.prototype.hasOwnProperty.call(u,"selector")&&void 0!==u.selector&&!0!==a.constructor.customClip)m.Incident=_s;else if(Object.prototype.hasOwnProperty.call(u,"selector")&&void 0!==u.selector&&!0===a.constructor.customClip){delete m.props.selector;var v=new _s({html:'<div id="clip-container"></div>'});m.props.host=v.rootElement,m.Incident=a.constructor.Incident}else"only"===a.audio&&!0!==a.props.root?a.isTheRootClip=!1:(a.isTheRootClip=!0,a.blockingWaitings={},m.Incident=a.constructor.Incident);if("on"===a.audio||"only"===a.audio){var g={id:a.id,attrs:{},props:{audioSources:Object.prototype.hasOwnProperty.call(u,"audioSources")?u.audioSources:a.audioSources,runTimeInfo:a.runTimeInfo,subscribe:a.subscribe.bind(h(a)),hiatus:a.hiatus,delay:a.delay,repeats:a.repeats,initParams:a.initParams},plugin_npm_name:a.constructor.plugin_npm_name,Channel:a.constructor.Channel,Incident:cs,DescriptiveIncident:h(a)};a.audioClip=cr(g)}else a.audio="off",a.audioClip=new Ds;return"on"===a.audio||"off"===a.audio?gi(f.attrs,"expression")||gi(f.props,"expression")?(a.mustHaveNullClip=!0,a.realClip=new Ds):a.realClip=cr(m,!0):a.realClip=new Ds,a.dynamicDurationValue=null,a.passiveAddition=!0,a._buildTree(),a.passiveAddition=!1,a.constructor.isAnimation&&Object.prototype.hasOwnProperty.call(a.props,"duration")&&a.resize(a.duration),a}return s}(e);return{F:i,d:[{kind:"field",static:!0,key:"isClip",value:function(){return!0}},{kind:"field",static:!0,key:"Incident",value:function(){return Os}},{kind:"field",static:!0,key:"plugin_npm_name",value:function(){return"@donkeyclip/self-contained-incidents"}},{kind:"field",static:!0,key:"version",value:function(){return gr}},{kind:"field",static:!0,key:"Channel",value:function(){return Zi}},{kind:"field",static:!0,key:"ClassName",value:function(){return"HTMLClip"}},{kind:"field",static:!0,key:"propsValidationRules",value:function(){return $r}},{kind:"get",key:"selectorToPassToChildren",value:function(){return null}},{kind:"get",key:"inheritedSelector",value:function(){return this._inheritedSelector}},{kind:"set",key:"inheritedSelector",value:function(t){this._inheritedSelector=t}},{kind:"get",key:"html",value:function(){return""}},{kind:"get",key:"css",value:function(){return""}},{kind:"get",key:"fonts",value:function(){return[]}},{kind:"get",key:"audioSources",value:function(){return[]}},{kind:"method",decorators:[Qr],key:"setupDynamicValues",value:function(){}},{kind:"method",key:"detachFromParent",value:function(){m(l(i.prototype),"detachFromParent",this).call(this),this.mustHaveNullClip&&(this.realClip=new Ds)}},{kind:"get",key:"duration",value:function(){return null!==this.dynamicDurationValue?this.dynamicDurationValue:this.propsStaggers.length>0?"dynamic":Object.prototype.hasOwnProperty.call(this.props,"duration")?this.repeats*(this.delay+this.props.duration+this.hiatus):m(l(i.prototype),"duration",this)}},{kind:"set",key:"duration",value:function(t){if(0!=this.propsStaggers.length){for(var e=0;e<this.propsStaggers.length;e++)if("repeats"!==this.propsStaggers[e].path){var n=this.propsStaggers[e].stagger.resize(t/this.duration);Di(this.props,this.propsStaggers[e].path,n)}this.dynamicDurationValue=t}else g(l(i.prototype),"duration",t,this,!0)}},{kind:"method",key:"systoleDiastole",value:function(t){this.constructor.isAnimation&&(this.props.duration?this.props.duration*=t:this.props.duration=t*this.calculatedDuration),this.realClip._resize(t),m(l(i.prototype),"systoleDiastole",this).call(this,t)}},{kind:"method",key:"exportLiveDefinition",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=m(l(i.prototype),"exportLiveDefinition",this).call(this,t);return this.constructor.isAnimation&&(e.props.duration=this.props.duration?this.props.duration:this.calculatedDuration),vi(this.props.html)&&(e.props.html=this.props.html),vi(this.props.css)&&(e.props.css=this.props.css),e}},{kind:"method",key:"_buildTree",value:function(){void 0!==this.realClip&&this.buildTree()}},{kind:"method",key:"resize",value:function(t){if("dynamic"===this.duration)return{result:!1,reason:"Incidents with dynamic duration can't be resized. Once the Incident enters a Clip it'll become resizable"};var e=t/this.duration;return this.realClip._resize(e),this.audioClip._resize(e),this.duration=t,this.constructor.isAnimation&&(this.props.duration?this.props.duration*=e:this.props.duration=this.calculatedDuration),this.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!1,direction:Li}),this.putMessageOnPipe("flash",{},"RootClip",{selfExecute:!0,direction:Li}),{result:!0}}},{kind:"method",key:"manageEditAttrProps",value:function(t,e){return{result:!1,errors:["Clips attributes and properties can not be edited"]}}},{kind:"method",key:"handleCheckForClip",value:function(t,e){return!0}},{kind:"method",key:"handleGetElements",value:function(t,e){return this.realClip.getElements(e.selector)}},{kind:"method",key:"handleCheckAddition",value:function(t,e){var n=this.realClip.addIncident(e),i=this.audioClip.addIncident(e);return!0===n.result&&!0===i.result?(n.execute(),i.execute(),this.putMessageOnPipe("flash",{},"RootClip",{selfExecute:!0,direction:Li}),{result:!0}):n}},{kind:"method",key:"handleCheckMove",value:function(t,e){var n=this.realClip.moveIncident(e),i=this.audioClip.moveIncident(e);return!0===n.result&&!0===i.result?(n.execute(),i.execute(),this.putMessageOnPipe("flash",{},"RootClip",{selfExecute:!0,direction:Li}),{result:!0}):n}},{kind:"method",key:"handleCheckDeletion",value:function(t,e){var n=this.realClip.removeIncident(e),i=this.audioClip.removeIncident(e);return!0===n.result&&!0===i.result?(n.execute(),i.execute(),this.putMessageOnPipe("flash",{},"RootClip",{selfExecute:!0,direction:Li}),{result:!0}):n}},{kind:"method",key:"handleCheckResize",value:function(t,e){var n=this.realClip.resizeIncident(e),i=this.audioClip.resizeIncident(e);return!0===n.result&&!0===i.result?(n.execute(),i.execute(),this.putMessageOnPipe("flash",{},"RootClip",{selfExecute:!0,direction:Li}),{result:!0}):n}},{kind:"method",key:"handleFlash",value:function(t,e){if(!this.isTheRootClip)return this.bypass();this.flash()}},{kind:"method",key:"exportDefinition",value:function(){var t=m(l(i.prototype),"exportDefinition",this).call(this);return this.constructor.isAnimation&&(t.props.duration=this.props.duration?this.props.duration:this.calculatedDuration),t}},{kind:"method",key:"handleSetBlock",value:function(t,e){if(!this.isTheRootClip)return this.bypass();if("transitional"!==this.runTimeInfo.state){"blocked"!==this.runTimeInfo.state&&(this.statusBeforeBlock=this.runTimeInfo.state),this.blockingWaitings[e.id]=e;var n={};e.options.exceptional&&(n.exception=e.incidentId),this.block(n)}}},{kind:"method",key:"handleUnBlock",value:function(t,e){if(!this.isTheRootClip)return this.bypass();Object.prototype.hasOwnProperty.call(this.blockingWaitings,e.id)&&(delete this.blockingWaitings[e.id],0===Object.keys(this.blockingWaitings).length&&("playing"===this.statusBeforeBlock?(this.previousTimeStamp=-1,this.play()):this.arm()))}},{kind:"method",key:"stop",value:function(){m(l(i.prototype),"stop",this).call(this),this.blockingWaitings={}}},{kind:"method",key:"onProgress",value:function(t,e){this.realClip.onProgress(t,e),this.audioClip.onProgress(t,e)}},{kind:"method",key:"paste",value:function(t){return this.isTheRootClip?new Ms({host:t,descriptiveIncident:this}):null}},{kind:"method",key:"flash",value:function(){this.realClip.flash()}},{kind:"get",key:"volume",value:function(){return"off"===this.audio?0:this.audioClip.volume}},{kind:"method",key:"setVolume",value:function(t){if(t<0||t>1)return{result:!1,errors:[{type:"invalid volume number"}]};if("off"===this.audio)return{result:!1,errors:[{type:"can not set volume of Clip with audio off"}]};for(var e in this.audioClip.setVolume(t),this.volumeChangeSubsribers)this.volumeChangeSubsribers[e](t);return{result:!0}}},{kind:"method",key:"attachMediaElementSource",value:function(t){"off"!==this.audio&&this.audioClip.context.audioContext.createMediaElementSource(t).connect(this.audioClip.context.masterNode.input)}},{kind:"method",key:"volumeChangeSubscribe",value:function(t,e){return this.putMessageOnPipe("volumeChangeSubscribe",{type:"subscribe",id:t,funct:e},"RootClip",{selfExecute:!0,direction:Li}).response}},{kind:"method",key:"volumeChangeUnsubscribe",value:function(t){return this.putMessageOnPipe("volumeChangeSubscribe",{type:"unsubscribe",id:t},"RootClip",{selfExecute:!0,direction:Li}),0}},{kind:"method",key:"handleVolumeChangeSubscribe",value:function(t,e){if(!this.isTheRootClip)return this.bypass();switch(e.type){case"subscribe":return this.volumeChangeSubsribers[e.id]=e.funct,this.volume;case"unsubscribe":return delete this.volumeChangeSubsribers[e.id],0;default:return!1}}}]}}),Ts),Ns=function(t){u(n,t);var e=p(n);function n(t){var i,s,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return r(this,n),null===a&&gi(t,"audioSources")?(i={},s=t):null===a?(i=t,s={}):(i=t,s=a),s.audio="only",e.call(this,i,s)}return n}(js),Bs=hi({incidents:{type:"array",items:{type:"object",props:{position:{type:"amount",integer:!0,min:0,optional:!1},attrs:{type:"object",optional:!1},props:{type:"object",optional:!1},incidentClass:{type:"any",optional:!1}}}}}),Rs="Combos don't allow external addition or manipulation to their Incidents";function Ls(){return Mi.error(Rs),{result:!1,errors:[Rs]}}var Fs=function(t){u(i,t);var e=p(i);function i(t,n){var s;r(this,i),o(h(s=e.call(this,t,n)),"addIncident",Ls),o(h(s),"moveIncident",Ls),o(h(s),"removeIncident",Ls),o(h(s),"handleCheckAddition",_i),o(h(s),"handleCheckMove",_i),o(h(s),"handleCheckDeletion",_i),o(h(s),"handleCheckResize",_i),null!==s.incidents&&(s.attrs.incidents=s.incidents,s.attributesStaggers=[],s.propsStaggers=[],s.setupDynamicValues());var a=Ti(s.props,Nr,s.constructor);if(!a.result)return d(s,a);var u=Bs(s.attrs);if(u.length>0)return Mi.error("The provided attributes for Combo Incident are invalid"),d(s,{result:!1,errors:u});for(var l=[],c=0;c<s.attrs.length;c++){var p=s.attrs[c];if(null!==p.incidentClass.attrsValidationRules){var f=p.incidentClass.attrsValidationMethod(p.attrs);f.length>0&&l.concat(f.errors)}var m=Ti(p.props,p.incidentClass.propsValidationRules,p.incidentClass);m.result||l.concat(m.errors)}return l.length>0?d(s,{result:!1,errors:l}):(s.dynamicDurationValue=null,s)}return a(i,[{key:"incidents",get:function(){return null}},{key:"duration",get:function(){return null!==this.dynamicDurationValue?this.dynamicDurationValue:"dynamic"},set:function(t){g(l(i.prototype),"duration",t,this,!0)}},{key:"exportDefinition",value:function(){var t=n(n({},this.attrs),{},{incidents:function t(e){for(var i=[],r=0;r<e.length;r++){var s=e[r],a=s.attrs;"Combo"===s.incidentClass.ClassName&&(a=n(n({},a),{},{incidents:t(a.incidents)})),i.push({ClassName:s.incidentClass.ClassName||s.incidentClass.targetClass.ClassName,plugin_npm_name:s.incidentClass.plugin_npm_name||s.incidentClass.targetClass.plugin_npm_name,version:s.incidentClass.version||s.incidentClass.targetClass.version,attrs:a,props:JSON.parse(JSON.stringify(s.props)),position:s.position})}return i}(this.attrs.incidents)});return{ClassName:this.constructor.ClassName,version:this.constructor.version,plugin:this.constructor.plugin||this.constructor.plugin_npm_name,plugin_npm_name:this.constructor.plugin_npm_name,attrs:t,props:JSON.parse(JSON.stringify(this.props)),incidents:{},duration:this.duration}}},{key:"exportLiveDefinition",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=this.attrs;null!==this.incidents&&(e=n(n({},this.attrs),{},{incidents:void 0}));var i=JSON.parse(JSON.stringify(this.props));return t||delete i.id,{Class:this.constructor,attrs:e,props:i,incidents:{}}}}]),i}(Zr);o(Fs,"isCombo",!0),o(Fs,"ClassName","Combo"),o(Fs,"attrsValidationRules",null),o(Fs,"propsValidationRules",Nr);var zs=P(null,(function(t,e){var n=function(e){u(i,e);var n=p(i);function i(e,s){var a;r(this,i),void 0===s&&(s=e,e={}),a=n.call(this,s),t(h(a));var o=Ti(s,Mr,a.constructor,a.id);return o.result?(a.inheritedSelector=null,a.attrs=e,gi(s,"duration")||(s.duration=0),a.props=s,a.attributesStaggers=[],a.propsStaggers=[],a.setupDynamicValues(),a.dynamicDurationValue=null,a.passive=!1,a):d(a,o)}return i}(e);return{F:n,d:[{kind:"field",static:!0,key:"Incident",value:function(){return ur}},{kind:"field",static:!0,key:"plugin_npm_name",value:function(){return"motor-cortex-js-attribute"}},{kind:"field",static:!0,key:"version",value:function(){return gr}},{kind:"field",static:!0,key:"Channel",value:function(){return Cs}},{kind:"field",static:!0,key:"ClassName",value:function(){return"Incident"}},{kind:"field",static:!0,key:"attrsValidationRules",value:function(){return null}},{kind:"field",static:!0,key:"propsValidationRules",value:function(){return Mr}},{kind:"method",decorators:[Lr],key:"editAttributes",value:function(){}},{kind:"method",decorators:[Fr],key:"editProperties",value:function(){}},{kind:"method",decorators:[Gr],key:"resize",value:function(){}},{kind:"method",decorators:[Br],key:"clone",value:function(){}},{kind:"method",decorators:[qr],key:"selector",value:function(){}},{kind:"method",decorators:[zr],key:"getElements",value:function(){}},{kind:"method",decorators:[Qr],key:"setupDynamicValues",value:function(){}},{kind:"get",key:"duration",value:function(){return null!==this.dynamicDurationValue?this.dynamicDurationValue:this.propsStaggers.length>0?"dynamic":m(l(n.prototype),"duration",this)}},{kind:"set",key:"duration",value:function(t){if(this.propsStaggers.length>0){for(var e=0;e<this.propsStaggers.length;e++)if("repeats"!==this.propsStaggers[e].path){var i=this.propsStaggers[e].stagger.resize(t/this.duration);Di(this.props,this.propsStaggers[e].path,i)}this.dynamicDurationValue=t}else g(l(n.prototype),"duration",t,this,!0)}},{kind:"method",key:"manageEditAttrProps",value:function(t,e){var n=this.parentNode,i=n.getLeafPosition(this.id);n.removeIncident(this.id);var r=JSON.parse(JSON.stringify(this[e]));this[e]=t;var s=n.addIncident(this,i);return s.result||(n.removeIncident(this.id),this[e]=r,n.addIncident(this,i)),s}},{kind:"method",key:"detachFromParent",value:function(){m(l(n.prototype),"detachFromParent",this).call(this),this.inheritedSelector=null}},{kind:"method",key:"handleCheckForInvalidSelectors",value:function(){var t=this.selector();return null===t?{id:this.id,ClassName:this.constructor.ClassName,plugin_npm_name:this.constructor.plugin_npm_name,error:"null selector"}:"&"===t.charAt(0)?{id:this.id,ClassName:this.constructor.ClassName,plugin_npm_name:this.constructor.plugin_npm_name,error:"relative selector with no inherited selector",selector:t}:this.bypass()}},{kind:"method",key:"exportDefinition",value:function(){return{ClassName:this.constructor.ClassName,version:this.constructor.version,plugin:this.constructor.plugin||this.constructor.plugin_npm_name,plugin_npm_name:this.constructor.plugin_npm_name,attrs:this.attrs,props:this.props}}},{kind:"method",key:"exportLiveDefinition",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=JSON.parse(JSON.stringify(this.props));return!1===t&&delete e.id,{Class:this.constructor,attrs:JSON.parse(JSON.stringify(this.attrs)),props:e}}}]}}),Gi),Gs=function(t,e){return t.startsWith("on")&&"function"==typeof e},qs=function(t){return t.substr(2).toLowerCase()},Ks=function(t){return"function"==typeof t};function Ws(t){var e=document.createElement("div");return e.innerHTML=t.trim(),e.firstChild}function Js(t,e){if(!e)return t;for(var n=0,i=Object.entries(e);n<i.length;n++){var r=y(i[n],2),s=r[0],a=r[1];if(Gs(s))t.addEventListener(qs(s),a);else if("class"===s){var o,u=Array.isArray(a)?a:a.split(" ");(o=t.classList).add.apply(o,k(u))}else t.setAttribute(s,a)}return t}var Hs=function(){function t(e){if(r(this,t),!gi(e,"incident"))return Mi.error('Journey constructor expects an Incident on its properties on the key "incident"'),!1;this.memory=e.capsuleMemory,this.stations=[],this.incident=e.incident,this.startMillisecond=1*this.incident.runTimeInfo.currentMillisecond,this.startState="".concat(this.incident.runTimeInfo.state),this.incident.stop()}return a(t,[{key:"station",value:function(t){this.stations.length>0&&this.stations[this.stations.length-1],this.stations.push(t),this.incident.playableProgress(t/this.incident.duration,t)}},{key:"destination",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;null!=t?this.station(t):t=this.stations[this.stations.length-1],this.incident.playableProgress(t/this.incident.duration,t),"playing"===this.startState||"blocked"===this.startState&&"playing"===this.incident.statusBeforeBlock?this.incident.play():t>=this.incident.duration?this.incident.complete():this.incident.arm(),this.memory.push(this.exportJourneyLog)}},{key:"exportJourneyLog",value:function(){return{startMillisecond:this.startMillisecond,startState:this.startState,stations:this.stations}}}]),t}(),Us=function(){function t(){r(this,t),this.memory=[]}return a(t,[{key:"startJourney",value:function(t){return t?new Hs({incident:t,capsuleMemory:this.memory}):(Mi.error("startJourney expects an Incident as an argument"),!1)}}]),t}();function Qs(t){if(gi(t,"default")&&(t=t.default),gi(t,"npm_name")||(t.npm_name="plugin_".concat((new Date).getTime())),!function(t){gi(t,"default")&&(t=t.default);var e=t.npm_name,n=!0;if(gi(t,"name")||Mi.notice("Notice on plugin ".concat(e,'. A plugin is always good to have its name on\n        its main.js file, under the key "name". It\'s missing from this plugin')),gi(t,"version")||Mi.notice("Notice on ".concat(e,". Plugin should always expose its version number on main.js file.\n      Plugin version is missing")),gi(t,"incidents")||gi(t,"Clip")||(Mi.error("Error on plugin ".concat(e,'. A plugin must expose at least one Incident or a Clip.\n        Exposed plugin Incidents should be defined on the "incidents" key of the main.js file while Clips on the "Clip".')),n=!1),gi(t,"incidents")&&!Array.isArray(t.incidents))Mi.error("Error on plugin ".concat(e,'. thePlugin exposed Incidents are defined on the "incidents" key of the main.js file in array format.\n        Please refer to the documentation')),n=!1;else if(gi(t,"incidents"))for(var i=0;i<t.incidents.length;i++){var r=t.incidents[i];mi(r.exportable)&&gi(r.exportable,"default")&&(r.exportable=r.exportable.default);var s=r.exportable.prototype;s instanceof Zr||s instanceof js||s instanceof ur||s instanceof fs||(Mi.error("Error on plugin ".concat(e,". Exportable Incidents by any plugin must extend one of the base classes provided by MotorCortex.\n                ").concat(r.exportable.constructor.name," doesn't.\nPlease refer to documentation")),n=!1),s instanceof js&&(gi(r,"originalDims")?!1===Ci(r.originalDims).result&&(Mi.error("Error on plugin ".concat(e,". Invalid originalDims value passed on ").concat(r.name)),n=!1):Mi.log("Warning on plugin ".concat(e,'. It\'s always good to provide originalDims\nwhen exposing Incidents extending DOMClip. By defining their original dims the users\nof your plugin will be able to define the desired dimensions of your Incident by\nthe "containerParams object"'))),gi(r,"name")||(Mi.error("Error on plugin ".concat(e,'. Exportable Incidents by any plugin must have the "name" key which defines the name of the exported Incident.\nPlease refer to documentation')),n=!1)}return n}(t))return!1;var e={};if(gi(t,"Clip"))if(gi(t.Clip,"exportable")){var n,i,s,a=(i=n=function(t){u(n,t);var e=p(n);function n(){return r(this,n),e.apply(this,arguments)}return n}(js),o(n,"Incident",t.Clip.exportable),o(n,"plugin",t.npm_name),o(n,"version",t.version||"*"),o(n,"audio",t.audio||"off"),o(n,"customClip",!0),i);gi(t.Clip,"attributesValidationRules")&&(s=hi(t.Clip.attributesValidationRules));e.Clip=function e(n,i){r(this,e);var o,u=n,l=i;if(void 0===i&&(u={},l=n),gi(t.Clip,"attributesValidationRules")){var c=s(u);if(c.length>0){for(var h="Error on plugin's \"".concat(t.npm_name,'" Clip instantiation. Errors:'),d=0;d<c.length;d++)h+="\n - ".concat(c[d].message,". ").concat(c[d].actual," provided");return Mi.error(h),Mi.log("breaking"),{result:!1,errors:c}}Mi.log("instantiating"),(o=new a(u,l)).attrsValidationRules=t.Clip.attributesValidationRules,o.attrsValidationMethod=s}else Mi.log("instantiating"),(o=new a(u,l)).attrsValidationRules=null,Mi.warning("It's always good to provide attributesValidationRules to the exported incidents. ".concat(t.npm_name,".").concat(o.constructor.name," doesn't provide it"));return o}}else{var l,c,h=(c=l=function(t){u(n,t);var e=p(n);function n(){return r(this,n),e.apply(this,arguments)}return n}(js),o(l,"Incident",t.Clip),o(l,"plugin",t.npm_name),o(l,"version",t.version||"*"),o(l,"audio",t.audio||"off"),o(l,"customClip",!0),c);Mi.warning("It's always good to provide attributesValidationRules to the exported incidents. ".concat(t.npm_name,".Clip doesn't provide it")),e.Clip=h}var d=Cs;if(gi(t,"compositeAttributes")&&(d=function(e){u(i,e);var n=p(i);function i(e){return r(this,i),e.comboAttributes=t.compositeAttributes,n.call(this,e)}return i}(Cs)),gi(t,"incidents"))for(var f=function(n){var i,s,a=t.incidents[n].exportable,l=null,c=null,h=!1;if(gi(t.incidents[n],"attributesValidationRules")){h=!0;var f=JSON.parse(JSON.stringify(t.incidents[n].attributesValidationRules));gi(t.incidents[n].attributesValidationRules,"animatedAttrs")&&(f.initialValues=(i=f.animatedAttrs,function t(e){if(fi(e)&&(e={type:e}),e.optional=!0,"object"===e.type)for(var n in e.props)t(e.props[n])}(s=JSON.parse(JSON.stringify(i))),s)),c=f,l=hi(f)}var m,v,g=void 0;if(a.prototype instanceof ur)v=m=function(t){u(n,t);var e=p(n);function n(){return r(this,n),e.apply(this,arguments)}return n}(zs),o(m,"Incident",a),o(m,"plugin_npm_name",t.npm_name),o(m,"plugin",t.npm_name),o(m,"version",t.version||"*"),o(m,"ClassName",t.incidents[n].name),o(m,"Channel",d),o(m,"audio",t.audio||"off"),o(m,"attrsValidationRules",c),o(m,"attrsValidationMethod",l),g=v;else if(a.prototype instanceof fs){var y,k;k=y=function(t){u(n,t);var e=p(n);function n(){return r(this,n),e.apply(this,arguments)}return n}(zs),o(y,"Incident",a),o(y,"plugin_npm_name","@donkeyclip/media-playback"),o(y,"plugin",t.npm_name),o(y,"version",t.version||"*"),o(y,"ClassName",t.incidents[n].name),o(y,"Channel",ps),o(y,"audio",t.audio?t.audio:"off"),o(y,"attrsValidationRules",c),o(y,"attrsValidationMethod",l),g=k}else if(a.prototype instanceof js){var b,x;x=b=function(t){u(n,t);var e=p(n);function n(){return r(this,n),e.apply(this,arguments)}return n}(a),o(b,"plugin",t.npm_name),o(b,"version",t.version||"*"),o(b,"ClassName",t.incidents[n].name),o(b,"audio",t.audio?t.audio:"on"),o(b,"originalDims",Ci(t.incidents[n].originalDims).analysis),o(b,"attrsValidationRules",c),o(b,"attrsValidationMethod",l),o(b,"isAnimation",!0),g=x}else if(a.prototype instanceof Zr){var C,I;I=C=function(t){u(n,t);var e=p(n);function n(){return r(this,n),e.apply(this,arguments)}return n}(a),o(C,"plugin",t.npm_name),o(C,"version",t.version||"*"),o(C,"ClassName",t.incidents[n].name),o(C,"attrsValidationRules",c),o(C,"attrsValidationMethod",l),g=I}Object.defineProperty(e,t.incidents[n].name,{enumerable:!0,get:function(){var e=function e(i,s){var a;if(r(this,e),h){var o=l(i);if(o.length>0){for(var u="Error on plugin's \"".concat(t.npm_name,'" "').concat(t.incidents[n].name,'" instantiation. Errors:'),c=0;c<o.length;c++)u+="\n - ".concat(o[c].message,". ").concat(o[c].actual," provided");return Mi.error(u),{result:!1,errors:o}}}return(a=new g(i,s)).result&&!h&&Mi.warning("It's always good to provide attributesValidationRules to the exported incidents. ".concat(t.npm_name," doesn't provide it")),a};return o(e,"targetClass",g),e}})},m=0;m<t.incidents.length;m++)f(m);return e}var Zs={createDOMElement:function(t,e){for(var i=arguments.length,r=new Array(i>2?i-2:0),s=2;s<i;s++)r[s-2]=arguments[s];if(Ks(t))return t(n(n({},e),{},{children:r}));for(var a=Js(document.createElement(t),e),o=r.flat(),u=0;u<o.length;u++){var l=o[u];if(!1!==l){var c=mi(l)?l:Ws(l.toString());null!==c&&a.appendChild(c)}}return a.outerHTML},easings:qn,clipFromDefinition:mr},Xs=Qs(vs),Ys=Xs.Clip,ta=Xs.AudioEffect,ea=Xs.AudioPlayback,na={version:gr,Effect:ur,utils:Zs,HTMLClip:js,Group:Zr,Combo:Fs,BrowserClip:Os,loadPlugin:Qs,AudioClip:Ns,CoreAudioClip:Ys,AudioPlayback:ea,AudioEffect:ta,MediaPlayback:fs,TimeCapsule:Us};t.AudioClip=Ns,t.AudioEffect=ta,t.AudioPlayback=ea,t.BrowserClip=Os,t.Combo=Fs,t.CoreAudioClip=Ys,t.Effect=ur,t.Group=Zr,t.HTMLClip=js,t.MediaPlayback=fs,t.TimeCapsule=Us,t.default=na,t.loadPlugin=Qs,t.utils=Zs,Object.defineProperty(t,"__esModule",{value:!0})}));


/***/ }),

/***/ 697:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _donkeyclip_motorcortex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(473);
/* harmony import */ var _donkeyclip_motorcortex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_donkeyclip_motorcortex__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _donkeyclip_motorcortex_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(657);
/* harmony import */ var _donkeyclip_motorcortex_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_donkeyclip_motorcortex_player__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dist_motorcortex_comets_umd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(939);
/* harmony import */ var _dist_motorcortex_comets_umd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dist_motorcortex_comets_umd__WEBPACK_IMPORTED_MODULE_2__);



var MyPlugin = (0,_donkeyclip_motorcortex__WEBPACK_IMPORTED_MODULE_0__.loadPlugin)((_dist_motorcortex_comets_umd__WEBPACK_IMPORTED_MODULE_2___default()));
var clip = new _donkeyclip_motorcortex__WEBPACK_IMPORTED_MODULE_0__.HTMLClip({
  html: "\n    <div class=\"container\">\n      <div class=\"comet1\"> </div>\n      <div class=\"comet2\"> </div>\n    </div>",
  css: "\n    .container{\n      width: 800px;\n      height: 300px;\n    }\n  ",
  host: document.getElementById("clip"),
  containerParams: {
    width: "800px",
    height: "300px"
  }
});
var comet = new MyPlugin.Comets({
  width: 800,
  height: 300,
  cometMaxSize: 1500,
  cometMinSize: 100,
  meteoriteColors: ["#FFFFFF", "#FFDC63"],
  auraIner: ["#57DDBA", "#62D8B9", "#7CC8B3"],
  auraOuter: ["#47F7C5", "#87B3C1"],
  items: 6,
  repeats: 1,
  duration: 8000
}, {
  selector: ".comet1"
});
var cometMagenta = new MyPlugin.Comets({
  width: 800,
  height: 300,
  cometMaxSize: 1500,
  cometMinSize: 100,
  meteoriteColors: ["#FFFFFF", "#FFDC63"],
  auraIner: ["#AF4095", "#D48E93", "#CC9C9F"],
  auraOuter: ["#E06D95", "#E7B4A7"],
  items: 6,
  repeats: 1,
  duration: 8000
}, {
  selector: ".comet2"
});
var stars = new MyPlugin.Stars({
  width: 800,
  height: 300,
  starMaxSize: 30,
  starMinSize: 5,
  starColor: "#F0F0F0",
  starGlowColor: "0 0 0 0 0.950946003   0 0 0 0 0.81265567   0 0 0 0 0.51528336  0 0 0 1 0",
  items: 20,
  repeats: 2,
  duration: 8000,
  blinkType: "opacity"
}, {
  selector: ".comet2"
});
clip.addIncident(comet, 0);
clip.addIncident(cometMagenta, 0);
clip.addIncident(stars, 0);
new (_donkeyclip_motorcortex_player__WEBPACK_IMPORTED_MODULE_1___default())({
  clip: clip
});

/***/ }),

/***/ 939:
/***/ (function(module, exports, __webpack_require__) {

/* provided dependency */ var Promise = __webpack_require__(641);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t, n) {
  "object" == ( false ? 0 : _typeof(exports)) && "undefined" != "object" ? module.exports = n(__webpack_require__(473)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(473)], __WEBPACK_AMD_DEFINE_FACTORY__ = (n),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function (t) {
  "use strict";

  function n(t) {
    return t && "object" == _typeof(t) && "default" in t ? t : {
      default: t
    };
  }

  var e = n(t);

  function o(t, n) {
    var e = Object.keys(t);

    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(t);
      n && (o = o.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      })), e.push.apply(e, o);
    }

    return e;
  }

  function r(t, n) {
    if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
  }

  function i(t, n) {
    for (var e = 0; e < n.length; e++) {
      var o = n[e];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
    }
  }

  function a(t, n, e) {
    return n && i(t.prototype, n), e && i(t, e), t;
  }

  function s(t, n, e) {
    return n in t ? Object.defineProperty(t, n, {
      value: e,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = e, t;
  }

  function p(t, n) {
    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(n && n.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), n && u(t, n);
  }

  function l(t) {
    return l = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, l(t);
  }

  function u(t, n) {
    return u = Object.setPrototypeOf || function (t, n) {
      return t.__proto__ = n, t;
    }, u(t, n);
  }

  function c(t, n) {
    if (n && ("object" == _typeof(n) || "function" == typeof n)) return n;
    if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
    return function (t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }(t);
  }

  function f(t) {
    var n = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    }();

    return function () {
      var e,
          o = l(t);

      if (n) {
        var r = l(this).constructor;
        e = Reflect.construct(o, arguments, r);
      } else e = o.apply(this, arguments);

      return c(this, e);
    };
  }

  function d(t, n) {
    var e = Object.keys(t);

    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(t);
      n && (o = o.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      })), e.push.apply(e, o);
    }

    return e;
  }

  function y(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = null != arguments[n] ? arguments[n] : {};
      n % 2 ? d(Object(e), !0).forEach(function (n) {
        v(t, n, e[n]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : d(Object(e)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
      });
    }

    return t;
  }

  function h(t, n) {
    if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
  }

  function m(t, n) {
    for (var e = 0; e < n.length; e++) {
      var o = n[e];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
    }
  }

  function g(t, n, e) {
    return n && m(t.prototype, n), e && m(t, e), t;
  }

  function v(t, n, e) {
    return n in t ? Object.defineProperty(t, n, {
      value: e,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = e, t;
  }

  function b(t, n) {
    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(n && n.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), n && w(t, n);
  }

  function x(t) {
    return x = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, x(t);
  }

  function w(t, n) {
    return w = Object.setPrototypeOf || function (t, n) {
      return t.__proto__ = n, t;
    }, w(t, n);
  }

  function O(t, n) {
    if (n && ("object" == _typeof(n) || "function" == typeof n)) return n;
    if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
    return function (t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }(t);
  }

  function P(t) {
    var n = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    }();

    return function () {
      var e,
          o = x(t);

      if (n) {
        var r = x(this).constructor;
        e = Reflect.construct(o, arguments, r);
      } else e = o.apply(this, arguments);

      return O(this, e);
    };
  }

  var k = {},
      M = {
    duration: 1e3,
    round: 0
  },
      S = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective"],
      j = {
    CSS: {}
  };

  function E(t, n, e) {
    return Math.min(Math.max(t, n), e);
  }

  function C(t, n) {
    return t.indexOf(n) > -1;
  }

  var T = {
    arr: function arr(t) {
      return Array.isArray(t);
    },
    obj: function obj(t) {
      return C(Object.prototype.toString.call(t), "Object");
    },
    pth: function pth(t) {
      return T.obj(t) && t.hasOwnProperty("totalLength");
    },
    svg: function svg(t) {
      return t instanceof SVGElement;
    },
    inp: function inp(t) {
      return t instanceof HTMLInputElement;
    },
    dom: function dom(t) {
      return t.nodeType || T.svg(t);
    },
    str: function str(t) {
      return "string" == typeof t;
    },
    fnc: function fnc(t) {
      return "function" == typeof t;
    },
    und: function und(t) {
      return void 0 === t;
    },
    hex: function hex(t) {
      return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t);
    },
    rgb: function rgb(t) {
      return /^rgb/.test(t);
    },
    hsl: function hsl(t) {
      return /^hsl/.test(t);
    },
    col: function col(t) {
      return T.hex(t) || T.rgb(t) || T.hsl(t);
    },
    key: function key(t) {
      return !k.hasOwnProperty(t) && !M.hasOwnProperty(t) && "targets" !== t && "keyframes" !== t;
    }
  },
      I = {
    linear: function linear() {
      return function (t) {
        return t;
      };
    }
  };

  function R(t, n) {
    for (var e = t.length, o = arguments.length >= 2 ? arguments[1] : void 0, r = [], i = 0; i < e; i++) {
      if (i in t) {
        var a = t[i];
        n.call(o, a, i, t) && r.push(a);
      }
    }

    return r;
  }

  function L(t) {
    return t.reduce(function (t, n) {
      return t.concat(T.arr(n) ? L(n) : n);
    }, []);
  }

  function B(t) {
    return T.arr(t) ? t : (T.str(t) && (t = function (t) {
      try {
        return document.querySelectorAll(t);
      } catch (t) {
        return;
      }
    }(t) || t), t instanceof NodeList || t instanceof HTMLCollection ? [].slice.call(t) : [t]);
  }

  function A(t, n) {
    return t.some(function (t) {
      return t === n;
    });
  }

  function D(t) {
    var n = {};

    for (var e in t) {
      n[e] = t[e];
    }

    return n;
  }

  function z(t, n) {
    var e = D(t);

    for (var o in t) {
      e[o] = n.hasOwnProperty(o) ? n[o] : t[o];
    }

    return e;
  }

  function G(t, n) {
    var e = D(t);

    for (var o in n) {
      e[o] = T.und(t[o]) ? n[o] : t[o];
    }

    return e;
  }

  function _(t) {
    return T.rgb(t) ? (e = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n = t)) ? "rgba(" + e[1] + ",1)" : n : T.hex(t) ? function (t) {
      var n = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (t, n, e, o) {
        return n + n + e + e + o + o;
      }),
          e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);
      return "rgba(" + parseInt(e[1], 16) + "," + parseInt(e[2], 16) + "," + parseInt(e[3], 16) + ",1)";
    }(t) : T.hsl(t) ? function (t) {
      var n,
          e,
          o,
          r = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t),
          i = parseInt(r[1], 10) / 360,
          a = parseInt(r[2], 10) / 100,
          s = parseInt(r[3], 10) / 100,
          p = r[4] || 1;

      function l(t, n, e) {
        return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? t + 6 * (n - t) * e : e < .5 ? n : e < 2 / 3 ? t + (n - t) * (2 / 3 - e) * 6 : t;
      }

      if (0 == a) n = e = o = s;else {
        var u = s < .5 ? s * (1 + a) : s + a - s * a,
            c = 2 * s - u;
        n = l(c, u, i + 1 / 3), e = l(c, u, i), o = l(c, u, i - 1 / 3);
      }
      return "rgba(" + 255 * n + "," + 255 * e + "," + 255 * o + "," + p + ")";
    }(t) : void 0;
    var n, e;
  }

  function V(t) {
    var n = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t);
    if (n) return n[1];
  }

  function X(t, n) {
    return T.fnc(t) ? t(n.target, n.id, n.total) : t;
  }

  function Y(t, n) {
    return t.getAttribute(n);
  }

  function U(t, n, e) {
    if (A([e, "deg", "rad", "turn"], V(n))) return n;
    var o = j.CSS[n + e];
    if (!T.und(o)) return o;
    var r = document.createElement(t.tagName),
        i = t.parentNode && t.parentNode !== document ? t.parentNode : document.body;
    i.appendChild(r), r.style.position = "absolute", r.style.width = 100 + e;
    var a = 100 / r.offsetWidth;
    i.removeChild(r);
    var s = a * parseFloat(n);
    return j.CSS[n + e] = s, s;
  }

  function W(t, n, e) {
    if (n in t.style) {
      var o = n.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
          r = t.style[n] || getComputedStyle(t).getPropertyValue(o) || "0";
      return e ? U(t, r, e) : r;
    }
  }

  function N(t, n) {
    return T.dom(t) && !T.inp(t) && (Y(t, n) || T.svg(t) && t[n]) ? "attribute" : T.dom(t) && A(S, n) ? "transform" : T.dom(t) && "transform" !== n && W(t, n) ? "css" : null != t[n] ? "object" : void 0;
  }

  function Z(t) {
    if (T.dom(t)) {
      for (var n, e = t.style.transform || "", o = /(\w+)\(([^)]*)\)/g, r = new Map(); n = o.exec(e);) {
        r.set(n[1], n[2]);
      }

      return r;
    }
  }

  function F(t, n, e, o) {
    var r = C(n, "scale") ? 1 : 0 + function (t) {
      return C(t, "translate") || "perspective" === t ? "px" : C(t, "rotate") || C(t, "skew") ? "deg" : void 0;
    }(n),
        i = Z(t).get(n) || r;
    return e && (e.transforms.list.set(n, i), e.transforms.last = n), o ? U(t, i, o) : i;
  }

  function H(t, n, e, o) {
    switch (N(t, n)) {
      case "transform":
        return F(t, n, o, e);

      case "css":
        return W(t, n, e);

      case "attribute":
        return Y(t, n);

      default:
        return t[n] || 0;
    }
  }

  function $(t, n) {
    var e = /^(\*=|\+=|-=)/.exec(t);
    if (!e) return t;
    var o = V(t) || 0,
        r = parseFloat(n),
        i = parseFloat(t.replace(e[0], ""));

    switch (e[0][0]) {
      case "+":
        return r + i + o;

      case "-":
        return r - i + o;

      case "*":
        return r * i + o;
    }
  }

  function q(t, n) {
    if (T.col(t)) return _(t);
    if (/\s/g.test(t)) return t;
    var e = V(t),
        o = e ? t.substr(0, t.length - e.length) : t;
    return n ? o + n : o;
  }

  function K(t, n) {
    var e = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
        o = q(T.pth(t) ? t.totalLength : t, n) + "";
    return {
      original: o,
      numbers: o.match(e) ? o.match(e).map(Number) : [0],
      strings: T.str(t) || n ? o.split(e) : []
    };
  }

  function Q(t) {
    var n = function (t) {
      return R(t ? L(T.arr(t) ? t.map(B) : B(t)) : [], function (t, n, e) {
        return e.indexOf(t) === n;
      });
    }(t);

    return n.map(function (t, e) {
      return {
        target: t,
        id: e,
        total: n.length,
        transforms: {
          list: Z(t)
        }
      };
    });
  }

  function J(t, n) {
    var e = D(n);

    if (T.arr(t)) {
      var o = t.length;
      2 === o && !T.obj(t[0]) ? t = {
        value: t
      } : T.fnc(n.duration) || (e.duration = n.duration / o);
    }

    return (T.arr(t) ? t : [t]).map(function (t, n) {
      return T.obj(t) && !T.pth(t) ? t : {
        value: t
      };
    }).map(function (t) {
      return G(t, e);
    });
  }

  function tt(t, n) {
    var e;
    return t.tweens.map(function (o) {
      var r = function (t, n) {
        var e = {};

        for (var o in t) {
          var r = X(t[o], n);
          T.arr(r) && 1 === (r = r.map(function (t) {
            return X(t, n);
          })).length && (r = r[0]), e[o] = r;
        }

        return e.duration = parseFloat(e.duration), e;
      }(o, n),
          i = r.value,
          a = T.arr(i) ? i[1] : i,
          s = V(a),
          p = H(n.target, t.name, s, n),
          l = e ? e.to.original : p,
          u = T.arr(i) ? i[0] : l,
          c = V(u) || V(p),
          f = s || c;

      return T.und(a) && (a = l), r.from = K(u, f), r.to = K($(a, u), f), r.start = e ? e.end : 0, r.end = r.start + r.duration, r.isPath = !1, r.isColor = T.col(r.from.original), r.isColor && (r.round = 1), e = r, r;
    });
  }

  var nt = {
    css: function css(t, n, e) {
      return t.style[n] = e;
    },
    attribute: function attribute(t, n, e) {
      return t.setAttribute(n, e);
    },
    object: function object(t, n, e) {
      return t[n] = e;
    },
    transform: function transform(t, n, e, o, r) {
      if (o.list.set(n, e), n === o.last || r) {
        var i = "";
        o.list.forEach(function (t, n) {
          i += n + "(" + t + ") ";
        }), t.style.transform = i;
      }
    }
  };

  function et(t, n) {
    Q(t).forEach(function (t) {
      for (var e in n) {
        var o = X(n[e], t),
            r = t.target,
            i = V(o),
            a = H(r, e, i, t),
            s = $(q(o, i || V(a)), a),
            p = N(r, e);
        nt[p](r, e, s, t.transforms, !0);
      }
    });
  }

  function ot(t, n) {
    return R(L(t.map(function (t) {
      return n.map(function (n) {
        return function (t, n) {
          var e = N(t.target, n.name);

          if (e) {
            var o = tt(n, t),
                r = o[o.length - 1];
            return {
              type: e,
              property: n.name,
              animatable: t,
              tweens: o,
              duration: r.end
            };
          }
        }(t, n);
      });
    })), function (t) {
      return !T.und(t);
    });
  }

  var rt = 0;

  function it(t) {
    var n = z(k, t),
        e = z(M, t),
        o = function (t, n) {
      var e = [];

      for (var o in n) {
        T.key(o) && e.push({
          name: o,
          tweens: J(n[o], t)
        });
      }

      return e;
    }(e, t),
        r = Q(t.targets),
        i = ot(r, o),
        a = function (t, n) {
      var e = t.length,
          o = {};
      return o.duration = e ? Math.max.apply(Math, t.map(function (t) {
        return t.duration;
      })) : n.duration, o;
    }(i, e),
        s = rt;

    return rt++, G(n, {
      id: s,
      children: [],
      animatables: r,
      animations: i,
      duration: a.duration
    });
  }

  function at(t) {
    void 0 === t && (t = {});
    var n,
        e = 0,
        o = null;

    function r(t) {
      var n = window.Promise && new Promise(function (t) {
        return o = t;
      });
      return t.finished = n, n;
    }

    var i = it(t);

    function a(t, n) {
      n && n.seek(t);
    }

    function s(t) {
      var s = i.duration,
          p = t;
      i.progress = E(p / s * 100, 0, 100), i.reversePlayback = p < i.currentTime, n && function (t) {
        if (i.reversePlayback) for (var o = e; o--;) {
          a(t, n[o]);
        } else for (var r = 0; r < e; r++) {
          a(t, n[r]);
        }
      }(p), !i.began && i.currentTime > 0 && (i.began = !0), function (t) {
        for (var n = 0, e = i.animations, o = e.length; n < o;) {
          var r = e[n],
              a = r.animatable,
              s = r.tweens,
              p = s.length - 1,
              l = s[p];
          p && (l = R(s, function (n) {
            return t < n.end;
          })[0] || l);

          for (var u = E(t - l.start, 0, l.duration) / l.duration, c = l.to.strings, f = l.round, d = [], y = l.to.numbers.length, h = void 0, m = 0; m < y; m++) {
            var g = void 0,
                v = l.to.numbers[m],
                b = l.from.numbers[m] || 0;
            g = b + u * (v - b), f && (l.isColor && m > 2 || (g = Math.round(g * f) / f)), d.push(g);
          }

          var x = c.length;

          if (x) {
            h = c[0];

            for (var w = 0; w < x; w++) {
              c[w];
              var O = c[w + 1],
                  P = d[w];
              isNaN(P) || (h += O ? P + O : P + " ");
            }
          } else h = d[0];

          nt[r.type](a.target, r.property, h, a.transforms), r.currentValue = h, n++;
        }
      }(p), i.currentTime = E(p, 0, s), t >= s && (i.paused = !0, i.completed || (i.completed = !0, !i.passThrough && "Promise" in window && (o(), r(i))));
    }

    return r(i), i.reset = function () {
      i.passThrough = !1, i.currentTime = 0, i.progress = 0, i.paused = !0, i.began = !1, i.completed = !1, i.reversePlayback = !1, n = i.children;

      for (var t = e = n.length; t--;) {
        i.children[t].reset();
      }
    }, i.set = function (t, n) {
      return et(t, n), i;
    }, i.seek = function (t) {
      s(t);
    }, i.reset(), i;
  }

  function st(t, n) {
    return Math.sqrt(Math.pow(n.x - t.x, 2) + Math.pow(n.y - t.y, 2));
  }

  function pt(t) {
    for (var n, e = t.points, o = 0, r = 0; r < e.numberOfItems; r++) {
      var i = e.getItem(r);
      r > 0 && (o += st(n, i)), n = i;
    }

    return o;
  }

  function lt(t) {
    if (t.getTotalLength) return t.getTotalLength();

    switch (t.tagName.toLowerCase()) {
      case "circle":
        return function (t) {
          return 2 * Math.PI * Y(t, "r");
        }(t);

      case "rect":
        return function (t) {
          return 2 * Y(t, "width") + 2 * Y(t, "height");
        }(t);

      case "line":
        return function (t) {
          return st({
            x: Y(t, "x1"),
            y: Y(t, "y1")
          }, {
            x: Y(t, "x2"),
            y: Y(t, "y2")
          });
        }(t);

      case "polyline":
        return pt(t);

      case "polygon":
        return function (t) {
          var n = t.points;
          return pt(t) + st(n.getItem(n.numberOfItems - 1), n.getItem(0));
        }(t);
    }
  }

  function ut(t, n) {
    var e = n || {},
        o = e.el || function (t) {
      for (var n = t.parentNode; T.svg(n) && T.svg(n.parentNode);) {
        n = n.parentNode;
      }

      return n;
    }(t),
        r = o.getBoundingClientRect(),
        i = Y(o, "viewBox"),
        a = r.width,
        s = r.height,
        p = e.viewBox || (i ? i.split(" ") : [0, 0, a, s]);

    return {
      el: o,
      viewBox: p,
      x: p[0] / 1,
      y: p[1] / 1,
      w: a,
      h: s,
      vW: p[2],
      vH: p[3]
    };
  }

  at.version = "3.1.0", at.get = H, at.set = et, at.convertPx = U, at.penner = I, at.path = function (t) {
    return {
      el: t,
      svg: ut(t),
      totalLength: lt(t),
      deltaCorrections: {
        x: 4,
        y: 5
      }
    };
  }, at.getPathProgress = function (t, n, e) {
    function o(e) {
      void 0 === e && (e = 0);
      var o = n * t.totalLength,
          r = o + e >= 1 ? o + e : 0;
      return t.el.getPointAtLength(r);
    }

    var r = ut(t.el, t.svg),
        i = o(),
        a = o(-1),
        s = o(1);
    return {
      x: 1 * (i.x - r.x),
      y: 1 * (i.y - r.y),
      angle: 180 * Math.atan2(s.y - a.y, s.x - a.x) / Math.PI
    };
  };
  var ct = at,
      ft = {
    transform: ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skewX", "skewY", "perspective"]
  };

  var dt = function (t) {
    b(e, t);
    var n = P(e);

    function e() {
      return h(this, e), n.apply(this, arguments);
    }

    return g(e, [{
      key: "onGetContext",
      value: function value() {
        var t = {};
        if (Object.prototype.hasOwnProperty.call(ft, this.attributeKey)) for (var n = ft[this.attributeKey], e = 0; e < n.length; e++) {
          Object.prototype.hasOwnProperty.call(this.targetValue, n[e]) && (t[n[e]] = [this.initialValue[n[e]], this.targetValue[n[e]]]);
        } else t[this.attributeKey] = [this.initialValue, this.targetValue];
        this.target = ct(y(y({
          autoplay: !1,
          duration: this.props.duration,
          easing: "linear",
          targets: this.element
        }, (this.attrs || {}).attrs || {}), t));
      }
    }, {
      key: "getScratchValue",
      value: function value() {
        if ("transform" !== this.attributeKey) return ct.get(this.element, this.attributeKey);

        for (var t = {}, n = ft[this.attributeKey], e = function (t, n) {
          var e = t.getComputedStyle(n).transform;
          if ("" === e || "none" === e) return {};
          var o,
              r,
              i,
              a,
              s,
              p,
              l,
              u,
              c = e.split("(")[1].split(")")[0].split(",");
          return o = c, r = Math.atan2(o[1], o[0]), i = Math.pow(o[0], 2) + Math.pow(o[1], 2), a = Math.pow(o[2], 2) + Math.pow(o[3], 2), s = Math.sqrt(i), p = (o[0] * o[3] - o[2] * o[1]) / s, l = Math.atan2(o[0] * o[2] + o[1] * o[3], i), u = Math.atan2(o[1] * o[3] + o[0] * o[2], a), {
            rotate: r / (Math.PI / 180) + "deg",
            scaleX: s,
            scaleY: p,
            skewX: (1 === i ? l / (Math.PI / 180) : 0) + "deg",
            skewY: (1 === a ? u / (Math.PI / 180) : 0) + "deg",
            translateX: o[4] + "px",
            translateY: o[5] + "px"
          };
        }(this.context.window, this.element), o = 0; o < n.length; o++) {
          t[n[o]] = Object.prototype.hasOwnProperty.call(e, n[o]) ? e[n[o]] : ct.get(this.element, n[o]);
        }

        return t;
      }
    }, {
      key: "onProgress",
      value: function value(t) {
        return this.target.seek(this.target.duration * t);
      }
    }]), e;
  }(e.default.Effect),
      yt = function (t) {
    b(e, t);
    var n = P(e);

    function e() {
      return h(this, e), n.apply(this, arguments);
    }

    return g(e, [{
      key: "onGetContext",
      value: function value() {
        this.pixelsAccuracy = this.attrs.pixelsAccuracy || 4, this.calculatedPoints = [];
        var t = this.context.getElements(this.targetValue.pathElement)[0];
        this.path = ct.path(t), this.isPathTargetInsideSVG = this.element instanceof SVGElement;
      }
    }, {
      key: "onProgress",
      value: function value(t) {
        var n,
            e = Math.round(this.path.totalLength / this.pixelsAccuracy * t) * this.pixelsAccuracy;
        if (null !== this.calculatedPoints[e] && void 0 !== this.calculatedPoints[e]) n = this.calculatedPoints[e];else {
          var o = ct.getPathProgress(this.path, e / this.path.totalLength, this.isPathTargetInsideSVG);
          n = "\n            translateX(".concat(o.x, "px)\n            translateY(").concat(o.y, "px)\n            rotate(").concat(o.angle, "deg)\n        "), this.calculatedPoints[e] = n;
        }
        this.element.style.transform = n;
      }
    }]), e;
  }(e.default.Effect),
      ht = ["cm", "mm", "in", "px", "pt", "pc", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "%"],
      mt = ["deg", "rad", "grad", "turn"],
      gt = "measurement",
      vt = "color",
      bt = {
    npm_name: "@donkeyclip/motorcortex-anime",
    version: "2.1.16",
    incidents: [{
      exportable: dt,
      name: "Anime",
      attributesValidationRules: {
        animatedAttrs: {
          type: "object",
          props: {
            background: {
              optional: !0,
              type: vt
            },
            backgroundColor: {
              optional: !0,
              type: vt
            },
            backgroundPosition: {
              optional: !0,
              type: "string"
            },
            backgroundSize: {
              optional: !0,
              type: "string"
            },
            border: {
              optional: !0,
              type: "string"
            },
            borderBottom: {
              optional: !0,
              type: "string"
            },
            borderBottomColor: {
              optional: !0,
              type: vt
            },
            borderBottomLeftRadius: {
              optional: !0,
              type: gt,
              units: ht
            },
            borderBottomRightRadius: {
              optional: !0,
              type: gt,
              units: ht
            },
            borderBottomWidth: {
              optional: !0,
              type: gt,
              units: ht
            },
            borderColor: {
              optional: !0,
              type: vt
            },
            borderEndEndRadius: {
              optional: !0,
              type: gt,
              units: ht
            },
            borderEndStartRadius: {
              optional: !0,
              type: gt,
              units: ht
            },
            borderImageOutset: {
              optional: !0,
              type: gt,
              units: ht,
              min: 0
            },
            borderImageSlice: {
              optional: !0,
              type: gt,
              units: ht,
              min: 0
            },
            borderImageWidth: {
              optional: !0,
              type: gt,
              units: ht,
              min: 0
            },
            borderLeft: {
              optional: !0,
              type: "string"
            },
            borderLeftColor: {
              optional: !0,
              type: vt
            },
            borderLeftWidth: {
              optional: !0,
              type: gt,
              units: ht
            },
            borderRadius: {
              optional: !0,
              type: gt,
              units: ht
            },
            borderRight: {
              optional: !0,
              type: "string"
            },
            borderRightColor: {
              optional: !0,
              type: vt
            },
            borderRightWidth: {
              optional: !0,
              type: gt,
              units: ht
            },
            borderStartEndRadius: {
              optional: !0,
              type: gt,
              units: ht
            },
            borderStartStartRadius: {
              optional: !0,
              type: gt,
              units: ht
            },
            borderTop: {
              optional: !0,
              type: "string"
            },
            borderTopColor: {
              optional: !0,
              type: vt
            },
            borderTopLeftRadius: {
              optional: !0,
              type: gt,
              units: ht
            },
            borderTopRightRadius: {
              optional: !0,
              type: gt,
              units: ht
            },
            borderTopWidth: {
              optional: !0,
              type: gt,
              units: ht
            },
            borderWidth: {
              optional: !0,
              type: gt,
              units: ht
            },
            bottom: {
              optional: !0,
              type: gt,
              units: ht
            },
            boxShadow: {
              optional: !0,
              type: "string"
            },
            caretColor: {
              optional: !0,
              type: vt
            },
            color: {
              optional: !0,
              type: vt
            },
            columnCount: {
              optional: !0,
              type: "number",
              min: 0,
              integer: !0
            },
            columnGap: {
              optional: !0,
              type: gt,
              units: ht
            },
            columnRule: {
              optional: !0,
              type: "string"
            },
            columnRuleColor: {
              optional: !0,
              type: vt
            },
            columnRuleWidth: {
              optional: !0,
              type: gt,
              units: ht
            },
            columns: {
              optional: !0,
              type: "number",
              min: 0,
              integer: !0
            },
            columnWidth: {
              optional: !0,
              type: gt,
              units: ht
            },
            flex: {
              optional: !0,
              type: "number",
              min: 0,
              integer: !0
            },
            flexBasis: {
              optional: !0,
              type: gt,
              units: ht
            },
            flexGrow: {
              optional: !0,
              type: "number",
              min: 0,
              integer: !0
            },
            flexShrink: {
              optional: !0,
              type: "number",
              min: 0,
              integer: !0
            },
            font: {
              optional: !0,
              type: "string"
            },
            fontSize: {
              optional: !0,
              type: gt,
              units: ht
            },
            fontSizeAdjust: {
              optional: !0,
              type: gt,
              units: ht,
              min: 0
            },
            fontStretch: {
              optional: !0,
              type: gt,
              units: ["%"]
            },
            fontWeight: {
              optional: !0,
              type: "string"
            },
            gap: {
              optional: !0,
              type: gt,
              units: ht
            },
            gridColumnGap: {
              optional: !0,
              type: gt,
              units: ht
            },
            gridGap: {
              optional: !0,
              type: gt,
              units: ht
            },
            gridRowGap: {
              optional: !0,
              type: gt,
              units: ht
            },
            gridTemplateColumns: {
              optional: !0,
              type: gt,
              units: ht
            },
            gridTemplateRows: {
              optional: !0,
              type: gt,
              units: ht
            },
            height: {
              optional: !0,
              type: gt,
              units: ht,
              min: 0
            },
            inset: {
              optional: !0,
              type: gt,
              units: ht,
              min: 0
            },
            insetBlock: {
              optional: !0,
              type: gt,
              units: ht
            },
            insetBlockEnd: {
              optional: !0,
              type: gt,
              units: ht
            },
            insetBlockStart: {
              optional: !0,
              type: gt,
              units: ht
            },
            insetInline: {
              optional: !0,
              type: gt,
              units: ht
            },
            insetInlineEnd: {
              optional: !0,
              type: gt,
              units: ht
            },
            insetInlineStart: {
              optional: !0,
              type: gt,
              units: ht
            },
            left: {
              optional: !0,
              type: gt,
              units: ht
            },
            letterSpacing: {
              optional: !0,
              type: gt,
              units: ht
            },
            lineClamp: {
              optional: !0,
              type: "number",
              min: 0,
              integer: !0
            },
            lineHeight: {
              optional: !0,
              type: gt,
              units: ht,
              min: 0
            },
            margin: {
              optional: !0,
              type: "string"
            },
            marginBottom: {
              optional: !0,
              type: gt,
              units: ht
            },
            marginLeft: {
              optional: !0,
              type: gt,
              units: ht
            },
            marginRight: {
              optional: !0,
              type: gt,
              units: ht
            },
            marginTop: {
              optional: !0,
              type: gt,
              units: ht
            },
            maskBorder: {
              optional: !0,
              type: gt,
              units: ht,
              min: 0
            },
            maskPosition: {
              optional: !0,
              type: "string"
            },
            maskSize: {
              optional: !0,
              type: "string"
            },
            maxHeight: {
              optional: !0,
              type: gt,
              units: ht,
              min: 0
            },
            maxWidth: {
              optional: !0,
              type: gt,
              units: ht,
              min: 0
            },
            objectPosition: {
              optional: !0,
              type: "string"
            },
            offset: {
              optional: !0,
              type: gt,
              units: ht
            },
            offsetAnchor: {
              optional: !0,
              type: "string"
            },
            offsetDistance: {
              optional: !0,
              type: gt,
              units: ht
            },
            offsetPath: {
              optional: !0,
              type: "string"
            },
            offsetPosition: {
              optional: !0,
              type: "string"
            },
            offsetRotate: {
              optional: !0,
              type: gt,
              units: mt
            },
            opacity: {
              optional: !0,
              type: "number",
              min: 0,
              max: 1
            },
            order: {
              optional: !0,
              type: "number",
              integer: !0
            },
            outline: {
              optional: !0,
              type: "string"
            },
            outlineColor: {
              optional: !0,
              type: vt
            },
            outlineOffset: {
              optional: !0,
              type: gt,
              units: ht
            },
            outlineRadius: {
              optional: !0,
              type: gt,
              units: ht
            },
            outlineRadiusBottomleft: {
              optional: !0,
              type: gt,
              units: ht
            },
            outlineRadiusBottomright: {
              optional: !0,
              type: gt,
              units: ht
            },
            outlineRadiusTopleft: {
              optional: !0,
              type: gt,
              units: ht
            },
            outlineRadiusTopright: {
              optional: !0,
              type: gt,
              units: ht
            },
            outlineWidth: {
              optional: !0,
              type: gt,
              units: ht
            },
            padding: {
              optional: !0,
              type: gt,
              units: ht
            },
            paddingBottom: {
              optional: !0,
              type: gt,
              units: ht
            },
            paddingLeft: {
              optional: !0,
              type: gt,
              units: ht
            },
            paddingRight: {
              optional: !0,
              type: gt,
              units: ht
            },
            paddingTop: {
              optional: !0,
              type: gt,
              units: ht
            },
            perspective: {
              optional: !0,
              type: gt,
              units: ht
            },
            perspectiveOrigin: {
              optional: !0,
              type: "string"
            },
            right: {
              optional: !0,
              type: gt,
              units: ht
            },
            rotate: {
              optional: !0,
              type: gt,
              units: mt
            },
            rowGap: {
              optional: !0,
              type: gt,
              units: ht
            },
            scale: {
              optional: !0,
              type: "number",
              min: 0
            },
            scrollbarColor: {
              optional: !0,
              type: vt
            },
            scrollMargin: {
              optional: !0,
              type: gt,
              units: ht
            },
            scrollMarginBlock: {
              optional: !0,
              type: gt,
              units: ht
            },
            scrollMarginBlockEnd: {
              optional: !0,
              type: gt,
              units: ht
            },
            scrollMarginBlockStart: {
              optional: !0,
              type: gt,
              units: ht
            },
            scrollMarginBottom: {
              optional: !0,
              type: gt,
              units: ht
            },
            scrollMarginInline: {
              optional: !0,
              type: gt,
              units: ht
            },
            scrollMarginInlineEnd: {
              optional: !0,
              type: gt,
              units: ht
            },
            scrollMarginInlineStart: {
              optional: !0,
              type: gt,
              units: ht
            },
            scrollMarginLeft: {
              optional: !0,
              type: gt,
              units: ht
            },
            scrollMarginRight: {
              optional: !0,
              type: gt,
              units: ht
            },
            scrollMarginTop: {
              optional: !0,
              type: gt,
              units: ht
            },
            scrollPadding: {
              optional: !0,
              type: gt,
              units: ht
            },
            scrollPaddingBlock: {
              optional: !0,
              type: gt,
              units: ht
            },
            scrollPaddingBlockEnd: {
              optional: !0,
              type: gt,
              units: ht
            },
            scrollPaddingBlockStart: {
              optional: !0,
              type: gt,
              units: ht
            },
            scrollPaddingBottom: {
              optional: !0,
              type: gt,
              units: ht
            },
            scrollPaddingInline: {
              optional: !0,
              type: gt,
              units: ht
            },
            scrollPaddingInlineEnd: {
              optional: !0,
              type: gt,
              units: ht
            },
            scrollPaddingInlineStart: {
              optional: !0,
              type: gt,
              units: ht
            },
            scrollPaddingLeft: {
              optional: !0,
              type: gt,
              units: ht
            },
            scrollPaddingRight: {
              optional: !0,
              type: gt,
              units: ht
            },
            scrollPaddingTop: {
              optional: !0,
              type: gt,
              units: ht
            },
            scrollSnapCoordinate: {
              optional: !0,
              type: "string"
            },
            scrollSnapDestination: {
              optional: !0,
              type: gt,
              units: ht
            },
            shapeImageThreshold: {
              optional: !0,
              type: "string"
            },
            shapeMargin: {
              optional: !0,
              type: gt,
              units: ht
            },
            shapeOutside: {
              optional: !0,
              type: "string"
            },
            tabSize: {
              optional: !0,
              type: "string"
            },
            textDecoration: {
              optional: !0,
              type: "string"
            },
            textDecorationColor: {
              optional: !0,
              type: vt
            },
            textDecorationThickness: {
              optional: !0,
              type: gt,
              units: ht
            },
            textEmphasis: {
              optional: !0,
              type: "string"
            },
            textEmphasisColor: {
              optional: !0,
              type: vt
            },
            textFillColor: {
              optional: !0,
              type: vt
            },
            textIndent: {
              optional: !0,
              type: gt,
              units: ht
            },
            textShadow: {
              optional: !0,
              type: "string"
            },
            textStroke: {
              optional: !0,
              type: "string"
            },
            textStrokeColor: {
              optional: !0,
              type: vt
            },
            textUnderlineOffset: {
              optional: !0,
              type: gt,
              units: ht
            },
            top: {
              optional: !0,
              type: gt,
              units: ht
            },
            transform: {
              optional: !0,
              type: "object",
              props: {
                translateX: {
                  type: gt,
                  units: ht,
                  optional: !0
                },
                translateY: {
                  type: gt,
                  units: ht,
                  optional: !0
                },
                translateZ: {
                  type: gt,
                  units: ht,
                  optional: !0
                },
                rotate: {
                  type: gt,
                  units: mt,
                  optional: !0
                },
                rotateX: {
                  type: gt,
                  units: mt,
                  optional: !0
                },
                rotateY: {
                  type: gt,
                  units: mt,
                  optional: !0
                },
                rotateZ: {
                  type: gt,
                  units: mt,
                  optional: !0
                },
                scale: {
                  type: "number",
                  min: 0,
                  optional: !0
                },
                scaleX: {
                  type: "number",
                  min: 0,
                  optional: !0
                },
                scaleY: {
                  type: "number",
                  min: 0,
                  optional: !0
                },
                scaleZ: {
                  type: "number",
                  min: 0,
                  optional: !0
                },
                skewX: {
                  type: gt,
                  units: mt,
                  optional: !0
                },
                skewY: {
                  type: gt,
                  units: mt,
                  optional: !0
                },
                perspective: {
                  type: gt,
                  units: ht,
                  optional: !0
                }
              }
            },
            transformOrigin: {
              optional: !0,
              type: "string"
            },
            verticalAlign: {
              optional: !0,
              type: "string"
            },
            visibility: {
              optional: !0,
              type: "string"
            },
            width: {
              optional: !0,
              type: gt,
              units: ht
            },
            wordSpacing: {
              optional: !0,
              type: gt,
              units: ht
            },
            zIndex: {
              optional: !0,
              type: "number",
              integer: !0
            },
            zoom: {
              optional: !0,
              type: gt,
              units: ["%"],
              min: 0
            }
          },
          transformOrigin: {
            type: "string"
          },
          verticalAlign: {
            type: "string"
          },
          visibility: {
            type: "string"
          },
          width: {
            type: gt,
            units: ht
          },
          wordSpacing: {
            type: gt,
            units: ht
          },
          zIndex: {
            type: "number",
            integer: !0
          },
          zoom: {
            type: gt,
            units: ["%"],
            min: 0
          }
        }
      }
    }, {
      exportable: yt,
      name: "MotionPath",
      attributesValidationRules: {
        animatedAttrs: {
          type: "object",
          props: {
            positionOn: {
              type: "object",
              props: {
                pathElement: {
                  type: "string"
                }
              }
            }
          }
        }
      }
    }],
    compositeAttributes: ft
  };

  function xt(t, n) {
    if (null === n) {
      n = [];

      for (var e = 0; e < t.numberOfElements; e++) {
        n.push([]);
      }
    }

    for (var o = t.divisions || 4, r = t.numberOfElements % o, i = (t.numberOfElements - r) / o, a = (t.to - t.from) / o, s = [], p = 0; p < i; p++) {
      for (var l = 0; l < o; l++) {
        var u = {
          from: t.from + a * l,
          to: t.from + a * (l + 1)
        };
        s.push(u);
      }
    }

    if (0 !== r) for (var c = (t.to - t.from) / r, f = 0; f < r; f++) {
      var d = {
        from: t.from + c * f,
        to: t.from + c * (f + 1)
      };
      s.push(d);
    }

    for (var y = 0; y < s.length; y++) {
      n[y].push(Math.random() * (s[y].to - s[y].from) + s[y].from);
    }

    return function (t) {
      for (var n, e, o = t.length; 0 !== o;) {
        e = Math.floor(Math.random() * o), n = t[o -= 1], t[o] = t[e], t[e] = n;
      }

      return t;
    }(n);
  }

  function wt(t) {
    var n = xt({
      numberOfElements: t.numberOfElements,
      from: (t.minDuration || .2) * t.duration,
      to: (t.maxDuration || .6) * t.duration,
      divisions: t.divisions || 4
    }, null);
    n = xt({
      numberOfElements: t.numberOfElements,
      from: .3,
      to: 1,
      divisions: t.divisions || 4
    }, n);

    for (var e = {
      ms: 0,
      reference: null
    }, o = 0; o < n.length; o++) {
      var r = n[o];
      r[0] = Math.round(r[0]), e.ms < r[0] && (e = {
        ms: r[0],
        reference: r
      }), r[1] = Math.floor(t.duration - r[0] < t.duration * (t.maxDuration || .6) ? (t.duration - r[0]) * r[1] : (t.maxDuration || .6) * t.duration * r[1]);
    }

    return e.reference[1] = t.duration - e.reference[0], n;
  }

  var Ot = t.loadPlugin(bt),
      Pt = function (t) {
    p(e, t);
    var n = f(e);

    function e() {
      return r(this, e), n.apply(this, arguments);
    }

    return a(e, [{
      key: "html",
      get: function get() {
        this.comets = wt({
          duration: this.attrs.duration / this.attrs.repeats,
          numberOfElements: this.attrs.items,
          minDuration: .1,
          maxDuration: .9
        });

        for (var t = 0; t < this.comets.length; t++) {
          var n = this.comets[t],
              e = n[0] / (this.attrs.duration / this.attrs.repeats),
              o = (this.attrs.cometMaxSize - this.attrs.cometMinSize) * (1 - e) + this.attrs.cometMinSize;
          n.push(o);
        }

        var r = 61 * Math.PI / 180,
            i = this.attrs.height * Math.tan(r);
        this.comets = xt({
          from: 0,
          to: this.attrs.width + i,
          numberOfElements: this.attrs.items
        }, this.comets);
        var a = [];
        this.itemData = [];

        for (var s = 61 * Math.PI / 180, p = 29 * Math.PI / 180, l = 0; l < this.attrs.items; l++) {
          var u = this.comets[l][2],
              c = u * Math.sin(p),
              f = u * Math.sin(s),
              d = this.comets[l][3];
          this.itemData.push({
            left: d,
            top: -f,
            width: c,
            size: u
          }), a += ' \n                <svg class="comet-svg comet-svg-'.concat(l, '" style="left: ').concat(d, "px; top: -").concat(f, "px; width: ").concat(c, "px; height: ").concat(f, 'px;" xmlns="http://www.w3.org/2000/svg" class="comet-green-svg" data-name="Layer 1" viewBox="0 0 450 270.44">\n                <defs>\n                    <linearGradient id="b" x1="-56.99" x2="-56.74" y1="394.68" y2="394.93" gradientTransform="matrix(1363.47 0 0 -819.42 77776.05 323638.12)" gradientUnits="userSpaceOnUse">\n                    <stop offset="0" stop-color="').concat(this.attrs.auraOuter[0], '" stop-opacity=".59"/>\n                    <stop offset="1" stop-color="').concat(this.attrs.auraOuter[1], '" stop-opacity="0"/>\n                    </linearGradient>\n                    <linearGradient id="d" x1="-56.97" x2="-56.79" y1="394.95" y2="395.11" gradientTransform="matrix(900.62 0 0 -542.55 51377.26 214502.16)" gradientUnits="userSpaceOnUse">\n                    <stop offset="0" stop-color="').concat(this.attrs.auraIner[0], '"/>\n                    <stop offset=".31" stop-color="').concat(this.attrs.auraIner[1], '" stop-opacity=".97"/>\n                    <stop offset="1" stop-color="').concat(this.attrs.auraIner[2], '" stop-opacity="0"/>\n                    </linearGradient>\n                    <linearGradient id="f" x1="-56.81" x2="-56.49" y1="399.49" y2="399.76" gradientTransform="matrix(116.79 0 0 -75.59 6649.18 30453.64)" gradientUnits="userSpaceOnUse">\n                    <stop offset="0" stop-color="').concat(this.attrs.meteoriteColors[0], '"/>\n                    <stop offset="1" stop-color="').concat(this.attrs.meteoriteColors[1], '"/>\n                    </linearGradient>\n                    <mask id="a" width="450" height="270.44" x="0" y="0" maskUnits="userSpaceOnUse">\n                    <path fill="#fff" fill-rule="evenodd" d="M11.33 230a21.52 21.52 0 0020.31 38L450 38 429.7 0 11.33 230z"/>\n                    </mask>\n                    <mask id="c" width="297.24" height="179.06" x="7.51" y="84.83" maskUnits="userSpaceOnUse">\n                    <path fill="#fff" fill-rule="evenodd" d="M14.65 238.41a13.55 13.55 0 0012.78 23.89l277.32-153.58L292 84.83 14.65 238.41z"/>\n                    </mask>\n                    <mask id="e" width="38.55" height="24.95" x="12.81" y="234.29" maskUnits="userSpaceOnUse">\n                    <path fill="#fff" fill-rule="evenodd" d="M17.69 241.85a9.24 9.24 0 008.73 16.29c4.5-2.41 24.94-23.85 24.94-23.85s-29.17 5.15-33.67 7.56"/>\n                    </mask>\n                </defs>\n                <g mask="url(#a)">\n                    <path fill="url(#b)" fill-rule="evenodd" d="M11.33 230a21.52 21.52 0 0020.31 38L450 38 429.7 0 11.33 230z"/>\n                </g>\n                <g mask="url(#c)">\n                    <path fill="url(#d)" fill-rule="evenodd" d="M14.65 238.41a13.55 13.55 0 0012.78 23.89l277.32-153.58L292 84.83 14.65 238.41z"/>\n                </g>\n                <g mask="url(#e)">\n                    <path fill="url(#f)" fill-rule="evenodd" d="M17.69 241.85a9.24 9.24 0 008.73 16.29c4.5-2.41 24.94-23.85 24.94-23.85s-29.17 5.15-33.67 7.56"/>\n                </g>\n                </svg>\n            ');
        }

        return '\n            <div class="wrapper">\n            '.concat(a, "\n            </div>\n        ");
      }
    }, {
      key: "css",
      get: function get() {
        return "\n            .wrapper{\n                width: ".concat(this.attrs.width, "px;\n                height:").concat(this.attrs.height, "px;\n            }\n            .comet-svg{\n                position: absolute;\n                z-index: 3;\n            }\n        ");
      }
    }, {
      key: "buildTree",
      value: function value() {
        for (var t = 0; t < this.comets.length; t++) {
          var n = -29 * Math.PI / 180,
              e = new Ot.Anime({
            animatedAttrs: {
              left: "-".concat(this.itemData[t].width, "px"),
              top: "".concat(Math.tan(n) * (-this.itemData[t].width - this.itemData[t].left) + this.itemData[t].top, "px")
            }
          }, {
            selector: ".comet-svg-".concat(t),
            duration: this.comets[t][0],
            delay: this.comets[t][1],
            repeats: this.attrs.repeats
          });
          this.addIncident(e, 0);
        }
      }
    }]), e;
  }(t.HTMLClip),
      kt = t.loadPlugin(bt),
      Mt = function (n) {
    p(o, n);
    var e = f(o);

    function o() {
      return r(this, o), e.apply(this, arguments);
    }

    return a(o, [{
      key: "html",
      get: function get() {
        for (var t = function (t) {
          t.divisions || (t.divisions = []);

          for (var n = null, e = 0; e < t.dimensions.length; e++) {
            var o = t.dimensions[e],
                r = t.divisions[e] || 4;
            n = xt({
              from: o[0],
              to: o[1],
              numberOfElements: t.numberOfElements,
              divisions: r
            }, n);
          }

          return n;
        }({
          dimensions: [[0, this.attrs.width], [0, this.attrs.height], [this.attrs.starMinSize, this.attrs.starMaxSize]],
          divisions: [Math.floor(this.attrs.items / 2), Math.floor(this.attrs.items / 2), this.attrs.items],
          numberOfElements: this.attrs.items
        }), n = [], e = 0; e < this.attrs.items; e++) {
          var o = t[e][2],
              r = t[e][1],
              i = t[e][0];
          n += ' \n              <svg class="stars-svg stars-svg-'.concat(e, '" width="').concat(o, 'px" height="').concat(o, 'px" style="left: ').concat(i, "px; top:").concat(r, 'px;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50.15">\n                <defs>\n                  <radialGradient id="radial-gradient" cx="25.98" cy="26.84" r="22.27" gradientUnits="userSpaceOnUse">\n                    <stop offset="0" stop-color="#fff9a6" stop-opacity="0.9"/>\n                    <stop offset="0.07" stop-color="#fffab3" stop-opacity="0.77"/>\n                    <stop offset="0.2" stop-color="#fffbc7" stop-opacity="0.57"/>\n                    <stop offset="0.34" stop-color="#fffcd8" stop-opacity="0.4"/>\n                    <stop offset="0.47" stop-color="#fffde6" stop-opacity="0.25"/>\n                    <stop offset="0.6" stop-color="#fffef1" stop-opacity="0.14"/>\n                    <stop offset="0.74" stop-color="#fffff9" stop-opacity="0.06"/>\n                    <stop offset="0.87" stop-color="#fffffd" stop-opacity="0.02"/>\n                    <stop offset="1" stop-color="#fff" stop-opacity="0"/>\n                  </radialGradient>\n                </defs>\n                <title>Asset 10</title>\n                <g id="Layer_2" data-name="Layer 2">\n                  <g id="Layer_2-2" data-name="Layer 2">\n                    <g>\n                      <circle cx="25.98" cy="26.84" r="22.27" fill="url(#radial-gradient)"/>\n                      <path id="stars-svg-path-1" d="M.15,26.27q13.13-2,18.73-4.52Q24.31,19.32,26,.16h0A.18.18,0,0,1,26.14,0a.19.19,0,0,1,.17.17q.6,17.88,6.81,21.58t16.72,4.62h0a.18.18,0,0,1,.16.2.19.19,0,0,1-.16.16Q38.1,27.86,33.12,32.05T26.49,50h0a.18.18,0,0,1-.36,0Q25.31,36.65,18.88,32T.17,26.62h0A.17.17,0,0,1,0,26.43.18.18,0,0,1,.15,26.27Z" fill="').concat(this.attrs.starColor, '" fill-rule="evenodd"/>\n                    </g>\n                  </g>\n                </g>\n              </svg>');
        }

        return '\n    <div class="wrapper">\n      '.concat(n, "\n    </div>\n    \n    ");
      }
    }, {
      key: "css",
      get: function get() {
        return "\n    .wrapper{\n      width: ".concat(this.attrs.width, "px;\n      height:").concat(this.attrs.height, "px;\n      \n    }\n    .stars-svg{\n      position: absolute;\n      z-index: 3;\n\n    }\n\n  ");
      }
    }, {
      key: "buildTree",
      value: function value() {
        function n(t) {
          var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return !0 === n ? {
            opacity: t
          } : {
            transform: {
              scale: t
            }
          };
        }

        for (var e = wt({
          duration: this.attrs.duration / this.attrs.repeats,
          divisions: 3,
          numberOfElements: this.attrs.items,
          minDuration: .2,
          maxDuration: 1
        }), o = 0; o < this.attrs.items; o++) {
          var r = new t.Combo({
            incidents: [{
              incidentClass: kt.Anime,
              attrs: {
                animatedAttrs: n(0, "opacity" === this.attrs.blinkType)
              },
              props: {
                duration: Math.round(e[o][1] / 2)
              },
              position: 0
            }, {
              incidentClass: kt.Anime,
              attrs: {
                animatedAttrs: n(1, "opacity" === this.attrs.blinkType)
              },
              props: {
                duration: Math.round(e[o][1] / 2)
              },
              position: Math.round(e[o][1] / 2)
            }]
          }, {
            selector: ".stars-svg-".concat(o),
            delay: e[o][0],
            repeats: this.attrs.repeats
          });
          this.addIncident(r, 0);
        }
      }
    }]), o;
  }(t.HTMLClip),
      St = {
    npm_name: "@donkeyclip/motorcortex-comets",
    version: "1.0.6",
    incidents: [{
      exportable: Pt,
      name: "Comets",
      attributesValidationRules: function (t) {
        for (var n = 1; n < arguments.length; n++) {
          var e = null != arguments[n] ? arguments[n] : {};
          n % 2 ? o(Object(e), !0).forEach(function (n) {
            s(t, n, e[n]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : o(Object(e)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
          });
        }

        return t;
      }({}, {
        width: {
          optional: !1,
          type: "number"
        },
        height: {
          optional: !1,
          type: "number"
        },
        cometMaxSize: {
          optional: !1,
          type: "number"
        },
        cometMinSize: {
          optional: !1,
          type: "number"
        },
        meteoriteColors: {
          optional: !0,
          type: "array",
          min: 2,
          items: {
            optional: !0,
            type: "color"
          }
        },
        auraIner: {
          optional: !0,
          type: "array",
          min: 3,
          items: {
            optional: !0,
            type: "color"
          }
        },
        auraOuter: {
          optional: !0,
          type: "array",
          min: 2,
          items: {
            optional: !0,
            type: "color"
          }
        },
        items: {
          optional: !1,
          type: "number"
        },
        repeats: {
          optional: !1,
          type: "number"
        },
        duration: {
          optional: !1,
          type: "number"
        }
      })
    }, {
      exportable: Mt,
      name: "Stars"
    }]
  };

  return St;
});

/***/ }),

/***/ 641:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */

(function (global, factory) {
	 true ? module.exports = factory() :
	0;
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}



var _isArray = void 0;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = void 0;
var customSchedulerFn = void 0;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var vertx = Function('return this')().require('vertx');
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = void 0;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;


  if (_state) {
    var callback = arguments[_state - 1];
    asap(function () {
      return invokeCallback(_state, child, callback, parent._result);
    });
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(2);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then$$1, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return resolve(promise, value);
    }, function (reason) {
      return reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$1 === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$1)) {
      handleForeignThenable(promise, maybeThenable, then$$1);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    var then$$1 = void 0;
    try {
      then$$1 = value.then;
    } catch (error) {
      reject(promise, error);
      return;
    }
    handleMaybeThenable(promise, value, then$$1);
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;


  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = void 0,
      callback = void 0,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = void 0,
      error = void 0,
      succeeded = true;

  if (hasCallback) {
    try {
      value = callback(detail);
    } catch (e) {
      succeeded = false;
      error = e;
    }

    if (promise === value) {
      reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
    resolve(promise, value);
  } else if (succeeded === false) {
    reject(promise, error);
  } else if (settled === FULFILLED) {
    fulfill(promise, value);
  } else if (settled === REJECTED) {
    reject(promise, value);
  }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

var Enumerator = function () {
  function Enumerator(Constructor, input) {
    this._instanceConstructor = Constructor;
    this.promise = new Constructor(noop);

    if (!this.promise[PROMISE_ID]) {
      makePromise(this.promise);
    }

    if (isArray(input)) {
      this.length = input.length;
      this._remaining = input.length;

      this._result = new Array(this.length);

      if (this.length === 0) {
        fulfill(this.promise, this._result);
      } else {
        this.length = this.length || 0;
        this._enumerate(input);
        if (this._remaining === 0) {
          fulfill(this.promise, this._result);
        }
      }
    } else {
      reject(this.promise, validationError());
    }
  }

  Enumerator.prototype._enumerate = function _enumerate(input) {
    for (var i = 0; this._state === PENDING && i < input.length; i++) {
      this._eachEntry(input[i], i);
    }
  };

  Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
    var c = this._instanceConstructor;
    var resolve$$1 = c.resolve;


    if (resolve$$1 === resolve$1) {
      var _then = void 0;
      var error = void 0;
      var didError = false;
      try {
        _then = entry.then;
      } catch (e) {
        didError = true;
        error = e;
      }

      if (_then === then && entry._state !== PENDING) {
        this._settledAt(entry._state, i, entry._result);
      } else if (typeof _then !== 'function') {
        this._remaining--;
        this._result[i] = entry;
      } else if (c === Promise$1) {
        var promise = new c(noop);
        if (didError) {
          reject(promise, error);
        } else {
          handleMaybeThenable(promise, entry, _then);
        }
        this._willSettleAt(promise, i);
      } else {
        this._willSettleAt(new c(function (resolve$$1) {
          return resolve$$1(entry);
        }), i);
      }
    } else {
      this._willSettleAt(resolve$$1(entry), i);
    }
  };

  Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
    var promise = this.promise;


    if (promise._state === PENDING) {
      this._remaining--;

      if (state === REJECTED) {
        reject(promise, value);
      } else {
        this._result[i] = value;
      }
    }

    if (this._remaining === 0) {
      fulfill(promise, this._result);
    }
  };

  Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
    var enumerator = this;

    subscribe(promise, undefined, function (value) {
      return enumerator._settledAt(FULFILLED, i, value);
    }, function (reason) {
      return enumerator._settledAt(REJECTED, i, reason);
    });
  };

  return Enumerator;
}();

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {Function} resolver
  Useful for tooling.
  @constructor
*/

var Promise$1 = function () {
  function Promise(resolver) {
    this[PROMISE_ID] = nextId();
    this._result = this._state = undefined;
    this._subscribers = [];

    if (noop !== resolver) {
      typeof resolver !== 'function' && needsResolver();
      this instanceof Promise ? initializePromise(this, resolver) : needsNew();
    }
  }

  /**
  The primary way of interacting with a promise is through its `then` method,
  which registers callbacks to receive either a promise's eventual value or the
  reason why the promise cannot be fulfilled.
   ```js
  findUser().then(function(user){
    // user is available
  }, function(reason){
    // user is unavailable, and you are given the reason why
  });
  ```
   Chaining
  --------
   The return value of `then` is itself a promise.  This second, 'downstream'
  promise is resolved with the return value of the first promise's fulfillment
  or rejection handler, or rejected if the handler throws an exception.
   ```js
  findUser().then(function (user) {
    return user.name;
  }, function (reason) {
    return 'default name';
  }).then(function (userName) {
    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
    // will be `'default name'`
  });
   findUser().then(function (user) {
    throw new Error('Found user, but still unhappy');
  }, function (reason) {
    throw new Error('`findUser` rejected and we're unhappy');
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
  });
  ```
  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
   ```js
  findUser().then(function (user) {
    throw new PedagogicalException('Upstream error');
  }).then(function (value) {
    // never reached
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // The `PedgagocialException` is propagated all the way down to here
  });
  ```
   Assimilation
  ------------
   Sometimes the value you want to propagate to a downstream promise can only be
  retrieved asynchronously. This can be achieved by returning a promise in the
  fulfillment or rejection handler. The downstream promise will then be pending
  until the returned promise is settled. This is called *assimilation*.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // The user's comments are now available
  });
  ```
   If the assimliated promise rejects, then the downstream promise will also reject.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // If `findCommentsByAuthor` fulfills, we'll have the value here
  }, function (reason) {
    // If `findCommentsByAuthor` rejects, we'll have the reason here
  });
  ```
   Simple Example
  --------------
   Synchronous Example
   ```javascript
  let result;
   try {
    result = findResult();
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
  findResult(function(result, err){
    if (err) {
      // failure
    } else {
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findResult().then(function(result){
    // success
  }, function(reason){
    // failure
  });
  ```
   Advanced Example
  --------------
   Synchronous Example
   ```javascript
  let author, books;
   try {
    author = findAuthor();
    books  = findBooksByAuthor(author);
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
   function foundBooks(books) {
   }
   function failure(reason) {
   }
   findAuthor(function(author, err){
    if (err) {
      failure(err);
      // failure
    } else {
      try {
        findBoooksByAuthor(author, function(books, err) {
          if (err) {
            failure(err);
          } else {
            try {
              foundBooks(books);
            } catch(reason) {
              failure(reason);
            }
          }
        });
      } catch(error) {
        failure(err);
      }
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findAuthor().
    then(findBooksByAuthor).
    then(function(books){
      // found books
  }).catch(function(reason){
    // something went wrong
  });
  ```
   @method then
  @param {Function} onFulfilled
  @param {Function} onRejected
  Useful for tooling.
  @return {Promise}
  */

  /**
  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
  as the catch block of a try/catch statement.
  ```js
  function findAuthor(){
  throw new Error('couldn't find that author');
  }
  // synchronous
  try {
  findAuthor();
  } catch(reason) {
  // something went wrong
  }
  // async with promises
  findAuthor().catch(function(reason){
  // something went wrong
  });
  ```
  @method catch
  @param {Function} onRejection
  Useful for tooling.
  @return {Promise}
  */


  Promise.prototype.catch = function _catch(onRejection) {
    return this.then(null, onRejection);
  };

  /**
    `finally` will be invoked regardless of the promise's fate just as native
    try/catch/finally behaves
  
    Synchronous example:
  
    ```js
    findAuthor() {
      if (Math.random() > 0.5) {
        throw new Error();
      }
      return new Author();
    }
  
    try {
      return findAuthor(); // succeed or fail
    } catch(error) {
      return findOtherAuther();
    } finally {
      // always runs
      // doesn't affect the return value
    }
    ```
  
    Asynchronous example:
  
    ```js
    findAuthor().catch(function(reason){
      return findOtherAuther();
    }).finally(function(){
      // author was either found, or not
    });
    ```
  
    @method finally
    @param {Function} callback
    @return {Promise}
  */


  Promise.prototype.finally = function _finally(callback) {
    var promise = this;
    var constructor = promise.constructor;

    if (isFunction(callback)) {
      return promise.then(function (value) {
        return constructor.resolve(callback()).then(function () {
          return value;
        });
      }, function (reason) {
        return constructor.resolve(callback()).then(function () {
          throw reason;
        });
      });
    }

    return promise.then(callback, callback);
  };

  return Promise;
}();

Promise$1.prototype.then = then;
Promise$1.all = all;
Promise$1.race = race;
Promise$1.resolve = resolve$1;
Promise$1.reject = reject$1;
Promise$1._setScheduler = setScheduler;
Promise$1._setAsap = setAsap;
Promise$1._asap = asap;

/*global self*/
function polyfill() {
  var local = void 0;

  if (typeof __webpack_require__.g !== 'undefined') {
    local = __webpack_require__.g;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      local = Function('return this')();
    } catch (e) {
      throw new Error('polyfill failed because global object is unavailable in this environment');
    }
  }

  var P = local.Promise;

  if (P) {
    var promiseToString = null;
    try {
      promiseToString = Object.prototype.toString.call(P.resolve());
    } catch (e) {
      // silently ignored
    }

    if (promiseToString === '[object Promise]' && !P.cast) {
      return;
    }
  }

  local.Promise = Promise$1;
}

// Strange compat..
Promise$1.polyfill = polyfill;
Promise$1.Promise = Promise$1;

return Promise$1;

})));



//# sourceMappingURL=es6-promise.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("daac3491794086984533")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		// data-webpack is not used as build has no uniqueName
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						return setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						blockingPromises = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdate"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__(697);
/******/ 	
/******/ })()
;