!function(b){"use strict";var o,k="File format is not recognized.",a="File contains encrypted entry.",s="File is using Zip64 (4gb+ file size).",w="Error while reading zip file.",n="Error while reading file data.",y=524288,c="text/plain";try{o=0===new Blob([new DataView(new ArrayBuffer(0))]).size}catch(e){}function r(){this.crc=-1}function l(){}function A(e,t){var r,n;return r=new ArrayBuffer(e),n=new Uint8Array(r),t&&n.set(t,0),{buffer:r,array:n,view:new DataView(r)}}function e(){}function t(n){var i,o=this;o.size=0,o.init=function(e,t){var r=new Blob([n],{type:c});(i=new f(r)).init(function(){o.size=i.size,e()},t)},o.readUint8Array=function(e,t,r,n){i.readUint8Array(e,t,r,n)}}function i(f){var u,r=this;r.size=0,r.init=function(e){for(var t=f.length;"="==f.charAt(t-1);)t--;u=f.indexOf(",")+1,r.size=Math.floor(.75*(t-u)),e()},r.readUint8Array=function(e,t,r){var n,i=A(t),o=4*Math.floor(e/3),a=4*Math.ceil((e+t)/3),s=b.atob(f.substring(o+u,a+u)),c=e-3*Math.floor(o/4);for(n=c;n<c+t;n++)i.array[n-c]=s.charCodeAt(n);r(i.array)}}function f(o){var t=this;t.size=0,t.init=function(e){t.size=o.size,e()},t.readUint8Array=function(e,t,r,n){var i=new FileReader;i.onload=function(e){r(new Uint8Array(e.target.result))},i.onerror=n;try{i.readAsArrayBuffer(function(e,t,r){if(t<0||r<0||t+r>e.size)throw new RangeError("offset:"+t+", length:"+r+", size:"+e.size);return e.slice?e.slice(t,t+r):e.webkitSlice?e.webkitSlice(t,t+r):e.mozSlice?e.mozSlice(t,t+r):e.msSlice?e.msSlice(t,t+r):void 0}(o,e,t))}catch(e){n(e)}}}function u(){}function h(n){var i;this.init=function(e){i=new Blob([],{type:c}),e()},this.writeUint8Array=function(e,t){i=new Blob([i,o?e:e.buffer],{type:c}),t()},this.getData=function(t,e){var r=new FileReader;r.onload=function(e){t(e.target.result)},r.onerror=e,r.readAsText(i,n)}}function p(t){var o="",a="";this.init=function(e){o+="data:"+(t||"")+";base64,",e()},this.writeUint8Array=function(e,t){var r,n=a.length,i=a;for(a="",r=0;r<3*Math.floor((n+e.length)/3)-n;r++)i+=String.fromCharCode(e[r]);for(;r<e.length;r++)a+=String.fromCharCode(e[r]);2<i.length?o+=b.btoa(i):a=i,t()},this.getData=function(e){e(o+b.btoa(a))}}function v(r){var n;this.init=function(e){n=new Blob([],{type:r}),e()},this.writeUint8Array=function(e,t){n=new Blob([n,o?e:e.buffer],{type:r}),t()},this.getData=function(e){e(n)}}function S(i,r,e,o,t,a,s,n,c,f){var u,l,w,h=0,p=r.sn;function v(){i.removeEventListener("message",d,!1),n(l,w)}function d(e){var t=e.data,r=t.data,n=t.error;if(n)return n.toString=function(){return"Error: "+this.message},void c(n);if(t.sn===p)switch("number"==typeof t.codecTime&&(i.codecTime+=t.codecTime),"number"==typeof t.crcTime&&(i.crcTime+=t.crcTime),t.type){case"append":r?(l+=r.length,o.writeUint8Array(r,function(){g()},f)):g();break;case"flush":w=t.crc,r?(l+=r.length,o.writeUint8Array(r,function(){v()},f)):v();break;case"progress":s&&s(u+t.loaded,a);break;case"importScripts":case"newTask":case"echo":break;default:console.warn("zip.js:launchWorkerProcess: unknown message: ",t)}}function g(){(u=h*y)<=a?e.readUint8Array(t+u,Math.min(y,a-u),function(e){s&&s(u,a);var t=0===u?r:{sn:p};t.type="append",t.data=e;try{i.postMessage(t,[e.buffer])}catch(e){i.postMessage(t)}h++},c):i.postMessage({sn:p,type:"flush"})}l=0,i.addEventListener("message",d,!1),g()}function _(n,t,i,o,a,e,s,c,f,u){var l,w=0,h=0,p="input"===e,v="output"===e,d=new r;!function r(){var e;if((l=w*y)<a)t.readUint8Array(o+l,Math.min(y,a-l),function(e){var t;try{t=n.append(e,function(e){s&&s(l+e,a)})}catch(e){return void f(e)}t?(h+=t.length,i.writeUint8Array(t,function(){w++,setTimeout(r,1)},u),v&&d.append(t)):(w++,setTimeout(r,1)),p&&d.append(e),s&&s(l,a)},f);else{try{e=n.flush()}catch(e){return void f(e)}e?(v&&d.append(e),h+=e.length,i.writeUint8Array(e,function(){c(h,d.get())},u)):c(h,d.get())}}()}function D(e,t,r,n,i,o,a,s,c,f,u){b.zip.useWebWorkers&&a?S(e,{sn:t,codecClass:"NOOP",crcType:"input"},r,n,i,o,c,s,f,u):_(new l,r,n,i,o,"input",c,s,f,u)}function d(e){var t,r,n="",i=["Ç","ü","é","â","ä","à","å","ç","ê","ë","è","ï","î","ì","Ä","Å","É","æ","Æ","ô","ö","ò","û","ù","ÿ","Ö","Ü","ø","£","Ø","×","ƒ","á","í","ó","ú","ñ","Ñ","ª","º","¿","®","¬","½","¼","¡","«","»","_","_","_","¦","¦","Á","Â","À","©","¦","¦","+","+","¢","¥","+","+","-","-","+","-","+","ã","Ã","+","+","-","-","¦","-","+","¤","ð","Ð","Ê","Ë","È","i","Í","Î","Ï","+","+","_","_","¦","Ì","_","Ó","ß","Ô","Ò","õ","Õ","µ","þ","Þ","Ú","Û","Ù","ý","Ý","¯","´","­","±","_","¾","¶","§","÷","¸","°","¨","·","¹","³","²","_"," "];for(t=0;t<e.length;t++)n+=127<(r=255&e.charCodeAt(t))?i[r-128]:String.fromCharCode(r);return n}function g(e){return decodeURIComponent(escape(e))}function L(e){var t,r="";for(t=0;t<e.length;t++)r+=String.fromCharCode(e[t]);return r}function M(e,t,r,n,i){e.version=t.view.getUint16(r,!0),e.bitFlag=t.view.getUint16(r+2,!0),e.compressionMethod=t.view.getUint16(r+4,!0),e.lastModDateRaw=t.view.getUint32(r+6,!0),e.lastModDate=function(e){var t=(4294901760&e)>>16,r=65535&e;try{return new Date(1980+((65024&t)>>9),((480&t)>>5)-1,31&t,(63488&r)>>11,(2016&r)>>5,2*(31&r),0)}catch(e){}}(e.lastModDateRaw),1!=(1&e.bitFlag)?((n||8!=(8&e.bitFlag))&&(e.crc32=t.view.getUint32(r+10,!0),e.compressedSize=t.view.getUint32(r+14,!0),e.uncompressedSize=t.view.getUint32(r+18,!0)),4294967295!==e.compressedSize&&4294967295!==e.uncompressedSize?(e.filenameLength=t.view.getUint16(r+22,!0),e.extraFieldLength=t.view.getUint16(r+24,!0)):i(s)):i(a)}function m(m,t,U){var z=0;function l(){}l.prototype.getData=function(w,i,h,p){var v=this;function d(e,t){var r,n;p&&(r=t,(n=A(4)).view.setUint32(0,r),v.crc32!=n.view.getUint32(0))?U("CRC failed."):w.getData(function(e){i(e)})}function g(e){U(e||n)}function y(e){U(e||"Error while writing file data.")}m.readUint8Array(v.offset,30,function(e){var l,t=A(e.length,e);1347093252==t.view.getUint32(0)?(M(v,t,4,!1,U),l=v.offset+30+v.filenameLength+v.extraFieldLength,w.init(function(){var e,t,r,n,i,o,a,s,c,f,u;0===v.compressionMethod?D(v._worker,z++,m,w,l,v.compressedSize,p,d,h,g,y):(e=v._worker,t=z++,r=m,n=w,i=l,o=v.compressedSize,a=d,s=h,c=g,f=y,u=p?"output":"none",b.zip.useWebWorkers?S(e,{sn:t,codecClass:"Inflater",crcType:u},r,n,i,o,s,a,c,f):_(new b.zip.Inflater,r,n,i,o,u,s,a,c,f))},y)):U(k)},g)};var r={getEntries:function(f){var u=this._worker;!function(n){var i=22;if(m.size<i)U(k);else{var e=i+65536;t(i,function(){t(Math.min(e,m.size),function(){U(k)})})}function t(e,r){m.readUint8Array(m.size-e,e,function(e){for(var t=e.length-i;0<=t;t--)if(80===e[t]&&75===e[t+1]&&5===e[t+2]&&6===e[t+3])return void n(new DataView(e.buffer,t,i));r()},function(){U(w)})}}(function(e){var t,c;t=e.getUint32(16,!0),c=e.getUint16(8,!0),t<0||t>=m.size?U(k):m.readUint8Array(t,m.size-t,function(e){var t,r,n,i,o=0,a=[],s=A(e.length,e);for(t=0;t<c;t++){if((r=new l)._worker=u,1347092738!=s.view.getUint32(o))return void U(k);M(r,s,o+6,!0,U),r.commentLength=s.view.getUint16(o+32,!0),r.directory=16==(16&s.view.getUint8(o+38)),r.offset=s.view.getUint32(o+42,!0),n=L(s.array.subarray(o+46,o+46+r.filenameLength)),r.filename=2048==(2048&r.bitFlag)?g(n):d(n),r.directory||"/"!=r.filename.charAt(r.filename.length-1)||(r.directory=!0),i=L(s.array.subarray(o+46+r.filenameLength+r.extraFieldLength,o+46+r.filenameLength+r.extraFieldLength+r.commentLength)),r.comment=2048==(2048&r.bitFlag)?g(i):d(i),a.push(r),o+=46+r.filenameLength+r.extraFieldLength+r.commentLength}f(a)},function(){U(w)})})},close:function(e){this._worker&&(this._worker.terminate(),this._worker=null),e&&e()},_worker:null};b.zip.useWebWorkers?E("inflater",function(e){r._worker=e,t(r)},function(e){U(e)}):t(r)}function z(e){return unescape(encodeURIComponent(e))}function W(e){var t,r=[];for(t=0;t<e.length;t++)r.push(e.charCodeAt(t));return r}function U(p,t,s,v){var c={},d=[],g=0,y=0;function m(e){s(e||"Error while writing zip file.")}function U(e){s(e||n)}var r={add:function(r,f,n,u,l){var i,o,a,w=this._worker;function h(e,t){var r=A(16);g+=e||0,r.view.setUint32(0,1347094280),void 0!==t&&(i.view.setUint32(10,t,!0),r.view.setUint32(4,t,!0)),f&&(r.view.setUint32(8,e,!0),i.view.setUint32(14,e,!0),r.view.setUint32(12,f.size,!0),i.view.setUint32(18,f.size,!0)),p.writeUint8Array(r.array,function(){g+=16,n()},m)}function e(){var e,t;(l=l||{},r=r.trim(),l.directory&&"/"!=r.charAt(r.length-1)&&(r+="/"),c.hasOwnProperty(r))?s("File already exists."):(o=W(z(r)),d.push(r),e=function(){var e,t,r,n,i,o,a,s,c;f?v||0===l.level?D(w,y++,f,p,0,f.size,!0,h,u,U,m):(e=w,t=y++,r=f,n=p,i=l.level,o=h,a=u,s=U,c=m,b.zip.useWebWorkers?S(e,{sn:t,options:{level:i},codecClass:"Deflater",crcType:"input"},r,n,0,r.size,a,o,s,c):_(new b.zip.Deflater,r,n,0,r.size,"input",a,o,s,c)):h()},a=l.lastModDate||new Date,i=A(26),c[r]={headerArray:i.array,directory:l.directory,filename:o,offset:g,comment:W(z(l.comment||""))},i.view.setUint32(0,335546376),l.version&&i.view.setUint8(0,l.version),v||0===l.level||l.directory||i.view.setUint16(4,2048),i.view.setUint16(6,(a.getHours()<<6|a.getMinutes())<<5|a.getSeconds()/2,!0),i.view.setUint16(8,(a.getFullYear()-1980<<4|a.getMonth()+1)<<5|a.getDate(),!0),i.view.setUint16(22,o.length,!0),(t=A(30+o.length)).view.setUint32(0,1347093252),t.array.set(i.array,4),t.array.set(o,30),g+=t.array.length,p.writeUint8Array(t.array,e,m))}f?f.init(e,U):e()},close:function(e){this._worker&&(this._worker.terminate(),this._worker=null);var t,r,n,i=0,o=0;for(r=0;r<d.length;r++)i+=46+(n=c[d[r]]).filename.length+n.comment.length;for(t=A(i+22),r=0;r<d.length;r++)n=c[d[r]],t.view.setUint32(o,1347092738),t.view.setUint16(o+4,5120),t.array.set(n.headerArray,o+6),t.view.setUint16(o+32,n.comment.length,!0),n.directory&&t.view.setUint8(o+38,16),t.view.setUint32(o+42,n.offset,!0),t.array.set(n.filename,o+46),t.array.set(n.comment,o+46+n.filename.length),o+=46+n.filename.length+n.comment.length;t.view.setUint32(o,1347093766),t.view.setUint16(o+8,d.length,!0),t.view.setUint16(o+10,d.length,!0),t.view.setUint32(o+12,i,!0),t.view.setUint32(o+16,g,!0),p.writeUint8Array(t.array,function(){p.getData(e)},m)},_worker:null};b.zip.useWebWorkers?E("deflater",function(e){r._worker=e,t(r)},function(e){s(e)}):t(r)}r.prototype.append=function(e){for(var t=0|this.crc,r=this.table,n=0,i=0|e.length;n<i;n++)t=t>>>8^r[255&(t^e[n])];this.crc=t},r.prototype.get=function(){return~this.crc},r.prototype.table=function(){var e,t,r,n=[];for(e=0;e<256;e++){for(r=e,t=0;t<8;t++)1&r?r=r>>>1^3988292384:r>>>=1;n[e]=r}return n}(),l.prototype.append=function(e,t){return e},l.prototype.flush=function(){},(t.prototype=new e).constructor=t,(i.prototype=new e).constructor=i,(f.prototype=new e).constructor=f,u.prototype.getData=function(e){e(this.data)},(h.prototype=new u).constructor=h,(p.prototype=new u).constructor=p,(v.prototype=new u).constructor=v;var C={deflater:["z-worker.js","deflate.js"],inflater:["z-worker.js","inflate.js"]};function E(e,n,i){if(null===b.zip.workerScripts||null===b.zip.workerScriptsPath){var t,r,o;if(b.zip.workerScripts){if(t=b.zip.workerScripts[e],!Array.isArray(t))return void i(new Error("zip.workerScripts."+e+" is not an array!"));r=t,o=document.createElement("a"),t=r.map(function(e){return o.href=e,o.href})}else(t=C[e].slice(0))[0]=(b.zip.workerScriptsPath||"")+t[0];var a=new Worker(t[0]);a.codecTime=a.crcTime=0,a.postMessage({type:"importScripts",scripts:t.slice(1)}),a.addEventListener("message",function e(t){var r=t.data;if(r.error)return a.terminate(),void i(r.error);"importScripts"===r.type&&(a.removeEventListener("message",e),a.removeEventListener("error",s),n(a))}),a.addEventListener("error",s)}else i(new Error("Either zip.workerScripts or zip.workerScriptsPath may be set, not both."));function s(e){a.terminate(),i(e)}}function F(e){console.error(e)}b.zip={Reader:e,Writer:u,BlobReader:f,Data64URIReader:i,TextReader:t,BlobWriter:v,Data64URIWriter:p,TextWriter:h,createReader:function(e,t,r){r=r||F,e.init(function(){m(e,t,r)},r)},createWriter:function(e,t,r,n){r=r||F,n=!!n,e.init(function(){U(e,t,r,n)},r)},useWebWorkers:!0,workerScriptsPath:null,workerScripts:null}}(this);