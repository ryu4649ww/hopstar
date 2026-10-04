/*! ホップスター v1.0.2 — uses three.js (MIT License, Copyright © 2010-2026 three.js authors). See THIRD_PARTY_LICENSES.txt */
(()=>{var Au=0,kc=1,Cu=2;var Wi=1,Ru=2,Ns=3,Jn=0,Ye=1,Ze=2,bn=0,Si=1,Xi=2,Bc=3,Gc=4,Pu=5;var qi=100,Iu=101,Du=102,Lu=103,Nu=104,Uu=200,Fu=201,Ou=202,zu=203,Vc=204,Hc=205,ku=206,Bu=207,Gu=208,Vu=209,Hu=210,Wu=211,Xu=212,qu=213,Yu=214,ja=0,Qa=1,to=2,vs=3,eo=4,no=5,io=6,so=7,Fo=0,Zu=1,Ju=2,Ln=0,Yr=1,Zr=2,Jr=3,Yi=4,$r=5,Kr=6,jr=7;var Wc=300,wi=301,Zi=302,Us=303,Oo=304,Qr=306,bs=1e3,Vn=1001,ro=1002,He=1003,$u=1004;var ta=1005;var Xe=1006,zo=1007;var Ei=1008;var un=1009,Xc=1010,qc=1011,Fs=1012,ko=1013,Nn=1014,Mn=1015,Je=1016,Bo=1017,Go=1018,Os=1020,Yc=35902,Zc=35899,Jc=1021,$c=1022,Sn=1023,Hn=1026,Ti=1027,Vo=1028,Ho=1029,Ai=1030,Wo=1031;var Xo=1033,ea=33776,na=33777,ia=33778,sa=33779,qo=35840,Yo=35841,Zo=35842,Jo=35843,$o=36196,Ko=37492,jo=37496,Qo=37488,tl=37489,ra=37490,el=37491,nl=37808,il=37809,sl=37810,rl=37811,al=37812,ol=37813,ll=37814,cl=37815,hl=37816,ul=37817,dl=37818,fl=37819,pl=37820,ml=37821,gl=36492,xl=36494,_l=36495,yl=36283,vl=36284,aa=36285,bl=36286;var cr=2300,ao=2301,Ja=2302,Ac=2303,Cc=2400,Rc=2401,Pc=2402;var Ku=3200;var oa=0,ju=1,Un="",ze="srgb",hr="srgb-linear",ur="linear",he="srgb";var $a=7680;var Qu=519,td=512,ed=513,nd=514,Ml=515,id=516,sd=517,Sl=518,rd=519,Kc=35044;var jc="300 es",In=2e3,Ms=2001;function zf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function kf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ss(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ad(){let i=Ss("canvas");return i.style.display="block",i}var Jh={},ws=null;function dr(...i){let t="THREE."+i.shift();ws?ws("log",t,...i):console.log(t,...i)}function od(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Wt(...i){i=od(i);let t="THREE."+i.shift();if(ws)ws("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ht(...i){i=od(i);let t="THREE."+i.shift();if(ws)ws("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Fi(...i){let t=i.join(" ");t in Jh||(Jh[t]=!0,Wt(...i))}function ld(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var cd={[ja]:Qa,[to]:io,[eo]:so,[vs]:no,[Qa]:ja,[io]:to,[so]:eo,[no]:vs},Wn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var tc=Math.PI/180,oo=180/Math.PI;function si(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function ae(i,t,e){return Math.max(t,Math.min(e,i))}function Bf(i,t){return(i%t+t)%t}function ec(i,t,e){return(1-e)*i+e*t}function Gn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function xe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var sh=class sh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};sh.prototype.isVector2=!0;var rt=sh,Xn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,l){let o=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],b=r[a+3];if(u!==b||o!==d||c!==f||h!==g){let m=o*d+c*f+h*g+u*b;m<0&&(d=-d,f=-f,g=-g,b=-b,m=-m);let p=1-l;if(m<.9995){let y=Math.acos(m),w=Math.sin(y);p=Math.sin(p*y)/w,l=Math.sin(l*y)/w,o=o*p+d*l,c=c*p+f*l,h=h*p+g*l,u=u*p+b*l}else{o=o*p+d*l,c=c*p+f*l,h=h*p+g*l,u=u*p+b*l;let y=1/Math.sqrt(o*o+c*c+h*h+u*u);o*=y,c*=y,h*=y,u*=y}}t[e]=o,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let l=n[s],o=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=l*g+h*u+o*f-c*d,t[e+1]=o*g+h*d+c*u-l*f,t[e+2]=c*g+h*f+l*d-o*u,t[e+3]=h*g-l*u-o*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,l=Math.cos,o=Math.sin,c=l(n/2),h=l(s/2),u=l(r/2),d=o(n/2),f=o(s/2),g=o(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:Wt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],l=e[5],o=e[9],c=e[2],h=e[6],u=e[10],d=n+l+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-o)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>l&&n>u){let f=2*Math.sqrt(1+n-l-u);this._w=(h-o)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(l>u){let f=2*Math.sqrt(1+l-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(o+h)/f}else{let f=2*Math.sqrt(1+u-n-l);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(o+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ae(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=e._x,o=e._y,c=e._z,h=e._w;return this._x=n*h+a*l+s*c-r*o,this._y=s*h+a*o+r*l-n*c,this._z=r*h+a*c+n*o-s*l,this._w=a*h-n*l-s*o-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=this.dot(t);l<0&&(n=-n,s=-s,r=-r,a=-a,l=-l);let o=1-e;if(l<.9995){let c=Math.acos(l),h=Math.sin(c);o=Math.sin(o*c)/h,e=Math.sin(e*c)/h,this._x=this._x*o+n*e,this._y=this._y*o+s*e,this._z=this._z*o+r*e,this._w=this._w*o+a*e,this._onChangeCallback()}else this._x=this._x*o+n*e,this._y=this._y*o+s*e,this._z=this._z*o+r*e,this._w=this._w*o+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},rh=class rh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($h.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($h.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,l=t.z,o=t.w,c=2*(a*s-l*n),h=2*(l*e-r*s),u=2*(r*n-a*e);return this.x=e+o*c+a*u-l*h,this.y=n+o*h+l*c-r*u,this.z=s+o*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,l=e.y,o=e.z;return this.x=s*o-r*l,this.y=r*a-n*o,this.z=n*l-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return nc.copy(this).projectOnVector(t),this.sub(nc)}reflect(t){return this.sub(nc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};rh.prototype.isVector3=!0;var P=rh,nc=new P,$h=new Xn,ah=class ah{constructor(t,e,n,s,r,a,l,o,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,o,c)}set(t,e,n,s,r,a,l,o,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=l,h[3]=e,h[4]=r,h[5]=o,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[3],o=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],b=s[0],m=s[3],p=s[6],y=s[1],w=s[4],x=s[7],M=s[2],S=s[5],C=s[8];return r[0]=a*b+l*y+o*M,r[3]=a*m+l*w+o*S,r[6]=a*p+l*x+o*C,r[1]=c*b+h*y+u*M,r[4]=c*m+h*w+u*S,r[7]=c*p+h*x+u*C,r[2]=d*b+f*y+g*M,r[5]=d*m+f*w+g*S,r[8]=d*p+f*x+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],o=t[6],c=t[7],h=t[8];return e*a*h-e*l*c-n*r*h+n*l*o+s*r*c-s*a*o}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],o=t[6],c=t[7],h=t[8],u=h*a-l*c,d=l*o-h*r,f=c*r-a*o,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return t[0]=u*b,t[1]=(s*c-h*n)*b,t[2]=(l*n-s*a)*b,t[3]=d*b,t[4]=(h*e-s*o)*b,t[5]=(s*r-l*e)*b,t[6]=f*b,t[7]=(n*o-c*e)*b,t[8]=(a*e-n*r)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,l){let o=Math.cos(r),c=Math.sin(r);return this.set(n*o,n*c,-n*(o*a+c*l)+a+t,-s*c,s*o,-s*(-c*a+o*l)+l+e,0,0,1),this}scale(t,e){return Fi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ic.makeScale(t,e)),this}rotate(t){return Fi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ic.makeRotation(-t)),this}translate(t,e){return Fi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ic.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};ah.prototype.isMatrix3=!0;var Zt=ah,ic=new Zt,Kh=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jh=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gf(){let i={enabled:!0,workingColorSpace:hr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===he&&(s.r=ri(s.r),s.g=ri(s.g),s.b=ri(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===he&&(s.r=ys(s.r),s.g=ys(s.g),s.b=ys(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Un?ur:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Fi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Fi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[hr]:{primaries:t,whitePoint:n,transfer:ur,toXYZ:Kh,fromXYZ:jh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:t,whitePoint:n,transfer:he,toXYZ:Kh,fromXYZ:jh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}}),i}var ne=Gf();function ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ts,lo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ts===void 0&&(ts=Ss("canvas")),ts.width=t.width,ts.height=t.height;let s=ts.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ts}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ss("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ri(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ri(e[n]/255)*255):e[n]=ri(e[n]);return{data:e,width:t.width,height:t.height}}else return Wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Vf=0,Es=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=si(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(sc(s[a].image)):r.push(sc(s[a]))}else r=sc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function sc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?lo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Wt("Texture: Unable to serialize Texture."),{})}var Hf=0,rc=new P,nn=class i extends Wn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Vn,s=Vn,r=Xe,a=Ei,l=Sn,o=un,c=i.DEFAULT_ANISOTROPY,h=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=si(),this.name="",this.source=new Es(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=l,this.internalFormat=null,this.type=o,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(rc).x}get height(){return this.source.getSize(rc).y}get depth(){return this.source.getSize(rc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Wt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Wt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bs:t.x=t.x-Math.floor(t.x);break;case Vn:t.x=t.x<0?0:1;break;case ro:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bs:t.y=t.y-Math.floor(t.y);break;case Vn:t.y=t.y<0?0:1;break;case ro:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Wc;nn.DEFAULT_ANISOTROPY=1;var oh=class oh{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,o=t.elements,c=o[0],h=o[4],u=o[8],d=o[1],f=o[5],g=o[9],b=o[2],m=o[6],p=o[10];if(Math.abs(h-d)<.01&&Math.abs(u-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+b)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,x=(f+1)/2,M=(p+1)/2,S=(h+d)/4,C=(u+b)/4,v=(g+m)/4;return w>x&&w>M?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=S/n,r=C/n):x>M?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=S/s,r=v/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=C/r,s=v/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-b)*(u-b)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-b)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this.w=ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this.w=ae(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};oh.prototype.isVector4=!0;var Ee=oh,co=class extends Wn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new nn(s),a=n.count;for(let l=0;l<a;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Xe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Es(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Oe=class extends co{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},fr=class extends nn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ho=class extends nn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Uo=class Uo{constructor(t,e,n,s,r,a,l,o,c,h,u,d,f,g,b,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,o,c,h,u,d,f,g,b,m)}set(t,e,n,s,r,a,l,o,c,h,u,d,f,g,b,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=l,p[13]=o,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Uo().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/es.setFromMatrixColumn(t,0).length(),r=1/es.setFromMatrixColumn(t,1).length(),a=1/es.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),l=Math.sin(n),o=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,g=l*h,b=l*u;e[0]=o*h,e[4]=-o*u,e[8]=c,e[1]=f+g*c,e[5]=d-b*c,e[9]=-l*o,e[2]=b-d*c,e[6]=g+f*c,e[10]=a*o}else if(t.order==="YXZ"){let d=o*h,f=o*u,g=c*h,b=c*u;e[0]=d+b*l,e[4]=g*l-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-l,e[2]=f*l-g,e[6]=b+d*l,e[10]=a*o}else if(t.order==="ZXY"){let d=o*h,f=o*u,g=c*h,b=c*u;e[0]=d-b*l,e[4]=-a*u,e[8]=g+f*l,e[1]=f+g*l,e[5]=a*h,e[9]=b-d*l,e[2]=-a*c,e[6]=l,e[10]=a*o}else if(t.order==="ZYX"){let d=a*h,f=a*u,g=l*h,b=l*u;e[0]=o*h,e[4]=g*c-f,e[8]=d*c+b,e[1]=o*u,e[5]=b*c+d,e[9]=f*c-g,e[2]=-c,e[6]=l*o,e[10]=a*o}else if(t.order==="YZX"){let d=a*o,f=a*c,g=l*o,b=l*c;e[0]=o*h,e[4]=b-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-l*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-b*u}else if(t.order==="XZY"){let d=a*o,f=a*c,g=l*o,b=l*c;e[0]=o*h,e[4]=-u,e[8]=c*h,e[1]=d*u+b,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=l*h,e[10]=b*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Wf,t,Xf)}lookAt(t,e,n){let s=this.elements;return fn.subVectors(t,e),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),ui.crossVectors(n,fn),ui.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),ui.crossVectors(n,fn)),ui.normalize(),wa.crossVectors(fn,ui),s[0]=ui.x,s[4]=wa.x,s[8]=fn.x,s[1]=ui.y,s[5]=wa.y,s[9]=fn.y,s[2]=ui.z,s[6]=wa.z,s[10]=fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[4],o=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],b=n[6],m=n[10],p=n[14],y=n[3],w=n[7],x=n[11],M=n[15],S=s[0],C=s[4],v=s[8],T=s[12],R=s[1],L=s[5],U=s[9],k=s[13],N=s[2],B=s[6],q=s[10],X=s[14],nt=s[3],Y=s[7],Q=s[11],it=s[15];return r[0]=a*S+l*R+o*N+c*nt,r[4]=a*C+l*L+o*B+c*Y,r[8]=a*v+l*U+o*q+c*Q,r[12]=a*T+l*k+o*X+c*it,r[1]=h*S+u*R+d*N+f*nt,r[5]=h*C+u*L+d*B+f*Y,r[9]=h*v+u*U+d*q+f*Q,r[13]=h*T+u*k+d*X+f*it,r[2]=g*S+b*R+m*N+p*nt,r[6]=g*C+b*L+m*B+p*Y,r[10]=g*v+b*U+m*q+p*Q,r[14]=g*T+b*k+m*X+p*it,r[3]=y*S+w*R+x*N+M*nt,r[7]=y*C+w*L+x*B+M*Y,r[11]=y*v+w*U+x*q+M*Q,r[15]=y*T+w*k+x*X+M*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],l=t[5],o=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],b=t[7],m=t[11],p=t[15],y=o*f-c*d,w=l*f-c*u,x=l*d-o*u,M=a*f-c*h,S=a*d-o*h,C=a*u-l*h;return e*(b*y-m*w+p*x)-n*(g*y-m*M+p*S)+s*(g*w-b*M+p*C)-r*(g*x-b*S+m*C)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],l=t[9],o=t[2],c=t[6],h=t[10];return e*(a*h-l*c)-n*(r*h-l*o)+s*(r*c-a*o)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],o=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],b=t[13],m=t[14],p=t[15],y=e*l-n*a,w=e*o-s*a,x=e*c-r*a,M=n*o-s*l,S=n*c-r*l,C=s*c-r*o,v=h*b-u*g,T=h*m-d*g,R=h*p-f*g,L=u*m-d*b,U=u*p-f*b,k=d*p-f*m,N=y*k-w*U+x*L+M*R-S*T+C*v;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/N;return t[0]=(l*k-o*U+c*L)*B,t[1]=(s*U-n*k-r*L)*B,t[2]=(b*C-m*S+p*M)*B,t[3]=(d*S-u*C-f*M)*B,t[4]=(o*R-a*k-c*T)*B,t[5]=(e*k-s*R+r*T)*B,t[6]=(m*x-g*C-p*w)*B,t[7]=(h*C-d*x+f*w)*B,t[8]=(a*U-l*R+c*v)*B,t[9]=(n*R-e*U-r*v)*B,t[10]=(g*S-b*x+p*y)*B,t[11]=(u*x-h*S-f*y)*B,t[12]=(l*T-a*L-o*v)*B,t[13]=(e*L-n*T+s*v)*B,t[14]=(b*w-g*M-m*y)*B,t[15]=(h*M-u*w+d*y)*B,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,l=t.y,o=t.z,c=r*a,h=r*l;return this.set(c*a+n,c*l-s*o,c*o+s*l,0,c*l+s*o,h*l+n,h*o-s*a,0,c*o-s*l,h*o+s*a,r*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,l=e._z,o=e._w,c=r+r,h=a+a,u=l+l,d=r*c,f=r*h,g=r*u,b=a*h,m=a*u,p=l*u,y=o*c,w=o*h,x=o*u,M=n.x,S=n.y,C=n.z;return s[0]=(1-(b+p))*M,s[1]=(f+x)*M,s[2]=(g-w)*M,s[3]=0,s[4]=(f-x)*S,s[5]=(1-(d+p))*S,s[6]=(m+y)*S,s[7]=0,s[8]=(g+w)*C,s[9]=(m-y)*C,s[10]=(1-(d+b))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=es.set(s[0],s[1],s[2]).length(),l=es.set(s[4],s[5],s[6]).length(),o=es.set(s[8],s[9],s[10]).length();r<0&&(a=-a),An.copy(this);let c=1/a,h=1/l,u=1/o;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=u,An.elements[9]*=u,An.elements[10]*=u,e.setFromRotationMatrix(An),n.x=a,n.y=l,n.z=o,this}makePerspective(t,e,n,s,r,a,l=In,o=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),g,b;if(o)g=r/(a-r),b=a*r/(a-r);else if(l===In)g=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(l===Ms)g=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,l=In,o=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s),g,b;if(o)g=1/(a-r),b=a/(a-r);else if(l===In)g=-2/(a-r),b=-(a+r)/(a-r);else if(l===Ms)g=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Uo.prototype.isMatrix4=!0;var _e=Uo,es=new P,An=new _e,Wf=new P(0,0,0),Xf=new P(1,1,1),ui=new P,wa=new P,fn=new P,Qh=new _e,tu=new Xn,qn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],l=s[8],o=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,f),this._z=Math.atan2(o,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ae(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-ae(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(l,f));break;case"XZY":this._z=Math.asin(-ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Qh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return tu.setFromEuler(this),this.setFromQuaternion(tu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qn.DEFAULT_ORDER="XYZ";var pr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},qf=0,eu=new P,ns=new Xn,jn=new _e,Ea=new P,Ks=new P,Yf=new P,Zf=new Xn,nu=new P(1,0,0),iu=new P(0,1,0),su=new P(0,0,1),ru={type:"added"},Jf={type:"removed"},is={type:"childadded",child:null},ac={type:"childremoved",child:null},ke=class i extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new P,e=new qn,n=new Xn,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _e},normalMatrix:{value:new Zt}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ns.setFromAxisAngle(t,e),this.quaternion.multiply(ns),this}rotateOnWorldAxis(t,e){return ns.setFromAxisAngle(t,e),this.quaternion.premultiply(ns),this}rotateX(t){return this.rotateOnAxis(nu,t)}rotateY(t){return this.rotateOnAxis(iu,t)}rotateZ(t){return this.rotateOnAxis(su,t)}translateOnAxis(t,e){return eu.copy(t).applyQuaternion(this.quaternion),this.position.add(eu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nu,t)}translateY(t){return this.translateOnAxis(iu,t)}translateZ(t){return this.translateOnAxis(su,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ea.copy(t):Ea.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Ks,Ea,this.up):jn.lookAt(Ea,Ks,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),ns.setFromRotationMatrix(jn),this.quaternion.premultiply(ns.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ht("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ru),is.child=t,this.dispatchEvent(is),is.child=null):Ht("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Jf),ac.child=t,this.dispatchEvent(ac),ac.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ru),is.child=t,this.dispatchEvent(is),is.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,t,Yf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,Zf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,o){return l[o.uuid]===void 0&&(l[o.uuid]=o.toJSON(t)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let o=l.shapes;if(Array.isArray(o))for(let c=0,h=o.length;c<h;c++){let u=o[c];r(t.shapes,u)}else r(t.shapes,o)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let o=0,c=this.material.length;o<c;o++)l.push(r(t.materials,this.material[o]));s.material=l}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let o=this.animations[l];s.animations.push(r(t.animations,o))}}if(e){let l=a(t.geometries),o=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);l.length>0&&(n.geometries=l),o.length>0&&(n.materials=o),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(l){let o=[];for(let c in l){let h=l[c];delete h.metadata,o.push(h)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ke.DEFAULT_UP=new P(0,1,0);ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ce=class extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}},$f={type:"move"},Ts=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,l=this._targetRay,o=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let b of t.hand.values()){let m=e.getJointPose(b,n),p=this._getHandJoint(c,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else o!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:t,target:this})));l!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent($f)))}return l!==null&&(l.visible=s!==null),o!==null&&(o.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ce;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},hd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},Ta={h:0,s:0,l:0};function oc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var It=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ne.workingColorSpace){if(t=Bf(t,1),e=ae(e,0,1),n=ae(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=oc(a,r,t+1/3),this.g=oc(a,r,t),this.b=oc(a,r,t-1/3)}return ne.colorSpaceToWorking(this,s),this}setStyle(t,e=ze){function n(r){r!==void 0&&parseFloat(r)<1&&Wt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Wt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Wt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){let n=hd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Wt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ri(t.r),this.g=ri(t.g),this.b=ri(t.b),this}copyLinearToSRGB(t){return this.r=ys(t.r),this.g=ys(t.g),this.b=ys(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return ne.workingToColorSpace(en.copy(this),t),Math.round(ae(en.r*255,0,255))*65536+Math.round(ae(en.g*255,0,255))*256+Math.round(ae(en.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(en.copy(this),e);let n=en.r,s=en.g,r=en.b,a=Math.max(n,s,r),l=Math.min(n,s,r),o,c,h=(l+a)/2;if(l===a)o=0,c=0;else{let u=a-l;switch(c=h<=.5?u/(a+l):u/(2-a-l),a){case n:o=(s-r)/u+(s<r?6:0);break;case s:o=(r-n)/u+2;break;case r:o=(n-s)/u+4;break}o/=6}return t.h=o,t.s=c,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=ze){ne.workingToColorSpace(en.copy(this),t);let e=en.r,n=en.g,s=en.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(di),this.setHSL(di.h+t,di.s+e,di.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(di),t.getHSL(Ta);let n=ec(di.h,Ta.h,e),s=ec(di.s,Ta.s,e),r=ec(di.l,Ta.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new It;It.NAMES=hd;var mr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new It(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Oi=class extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Cn=new P,Qn=new P,lc=new P,ti=new P,ss=new P,rs=new P,au=new P,cc=new P,hc=new P,uc=new P,dc=new Ee,fc=new Ee,pc=new Ee,ii=class i{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Cn.subVectors(t,e),s.cross(Cn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Cn.subVectors(s,e),Qn.subVectors(n,e),lc.subVectors(t,e);let a=Cn.dot(Cn),l=Cn.dot(Qn),o=Cn.dot(lc),c=Qn.dot(Qn),h=Qn.dot(lc),u=a*c-l*l;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*o-l*h)*d,g=(a*h-l*o)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(t,e,n,s,r,a,l,o){return this.getBarycoord(t,e,n,s,ti)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(r,ti.x),o.addScaledVector(a,ti.y),o.addScaledVector(l,ti.z),o)}static getInterpolatedAttribute(t,e,n,s,r,a){return dc.setScalar(0),fc.setScalar(0),pc.setScalar(0),dc.fromBufferAttribute(t,e),fc.fromBufferAttribute(t,n),pc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(dc,r.x),a.addScaledVector(fc,r.y),a.addScaledVector(pc,r.z),a}static isFrontFacing(t,e,n,s){return Cn.subVectors(n,e),Qn.subVectors(t,e),Cn.cross(Qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Cn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Cn.cross(Qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,l;ss.subVectors(s,n),rs.subVectors(r,n),cc.subVectors(t,n);let o=ss.dot(cc),c=rs.dot(cc);if(o<=0&&c<=0)return e.copy(n);hc.subVectors(t,s);let h=ss.dot(hc),u=rs.dot(hc);if(h>=0&&u<=h)return e.copy(s);let d=o*u-h*c;if(d<=0&&o>=0&&h<=0)return a=o/(o-h),e.copy(n).addScaledVector(ss,a);uc.subVectors(t,r);let f=ss.dot(uc),g=rs.dot(uc);if(g>=0&&f<=g)return e.copy(r);let b=f*c-o*g;if(b<=0&&c>=0&&g<=0)return l=c/(c-g),e.copy(n).addScaledVector(rs,l);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return au.subVectors(r,s),l=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(au,l);let p=1/(m+b+d);return a=b*p,l=d*p,e.copy(n).addScaledVector(ss,a).addScaledVector(rs,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Yn=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,l=r.count;a<l;a++)t.isMesh===!0?t.getVertexPosition(a,Rn):Rn.fromBufferAttribute(r,a),Rn.applyMatrix4(t.matrixWorld),this.expandByPoint(Rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Aa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Aa.copy(n.boundingBox)),Aa.applyMatrix4(t.matrixWorld),this.union(Aa)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(js),Ca.subVectors(this.max,js),as.subVectors(t.a,js),os.subVectors(t.b,js),ls.subVectors(t.c,js),fi.subVectors(os,as),pi.subVectors(ls,os),Ii.subVectors(as,ls);let e=[0,-fi.z,fi.y,0,-pi.z,pi.y,0,-Ii.z,Ii.y,fi.z,0,-fi.x,pi.z,0,-pi.x,Ii.z,0,-Ii.x,-fi.y,fi.x,0,-pi.y,pi.x,0,-Ii.y,Ii.x,0];return!mc(e,as,os,ls,Ca)||(e=[1,0,0,0,1,0,0,0,1],!mc(e,as,os,ls,Ca))?!1:(Ra.crossVectors(fi,pi),e=[Ra.x,Ra.y,Ra.z],mc(e,as,os,ls,Ca))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ei=[new P,new P,new P,new P,new P,new P,new P,new P],Rn=new P,Aa=new Yn,as=new P,os=new P,ls=new P,fi=new P,pi=new P,Ii=new P,js=new P,Ca=new P,Ra=new P,Di=new P;function mc(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Di.fromArray(i,r);let l=s.x*Math.abs(Di.x)+s.y*Math.abs(Di.y)+s.z*Math.abs(Di.z),o=t.dot(Di),c=e.dot(Di),h=n.dot(Di);if(Math.max(-Math.max(o,c,h),Math.min(o,c,h))>l)return!1}return!0}var Fe=new P,Pa=new rt,Kf=0,hn=class extends Wn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Kf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Kc,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Pa.fromBufferAttribute(this,e),Pa.applyMatrix3(t),this.setXY(e,Pa.x,Pa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Gn(e,this.array)),e}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Gn(e,this.array)),e}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Gn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Gn(e,this.array)),e}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array),r=xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var gr=class extends hn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var xr=class extends hn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ee=class extends hn{constructor(t,e,n){super(new Float32Array(t),e,n)}},jf=new Yn,Qs=new P,gc=new P,gi=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):jf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qs.subVectors(t,this.center);let e=Qs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Qs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(gc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qs.copy(t.center).add(gc)),this.expandByPoint(Qs.copy(t.center).sub(gc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Qf=0,vn=new _e,xc=new ke,cs=new P,pn=new Yn,tr=new Yn,Ve=new P,Pe=class i extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zf(t)?xr:gr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return vn.makeRotationFromQuaternion(t),this.applyMatrix4(vn),this}rotateX(t){return vn.makeRotationX(t),this.applyMatrix4(vn),this}rotateY(t){return vn.makeRotationY(t),this.applyMatrix4(vn),this}rotateZ(t){return vn.makeRotationZ(t),this.applyMatrix4(vn),this}translate(t,e,n){return vn.makeTranslation(t,e,n),this.applyMatrix4(vn),this}scale(t,e,n){return vn.makeScale(t,e,n),this.applyMatrix4(vn),this}lookAt(t){return xc.lookAt(t),xc.updateMatrix(),this.applyMatrix4(xc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ee(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(pn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let l=e[r];tr.setFromBufferAttribute(l),this.morphTargetsRelative?(Ve.addVectors(pn.min,tr.min),pn.expandByPoint(Ve),Ve.addVectors(pn.max,tr.max),pn.expandByPoint(Ve)):(pn.expandByPoint(tr.min),pn.expandByPoint(tr.max))}pn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ve));if(e)for(let r=0,a=e.length;r<a;r++){let l=e[r],o=this.morphTargetsRelative;for(let c=0,h=l.count;c<h;c++)Ve.fromBufferAttribute(l,c),o&&(cs.fromBufferAttribute(t,c),Ve.add(cs)),s=Math.max(s,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new hn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let l=[],o=[];for(let v=0;v<n.count;v++)l[v]=new P,o[v]=new P;let c=new P,h=new P,u=new P,d=new rt,f=new rt,g=new rt,b=new P,m=new P;function p(v,T,R){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,R),d.fromBufferAttribute(r,v),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,R),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(b.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(L),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),l[v].add(b),l[T].add(b),l[R].add(b),o[v].add(m),o[T].add(m),o[R].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let v=0,T=y.length;v<T;++v){let R=y[v],L=R.start,U=R.count;for(let k=L,N=L+U;k<N;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let w=new P,x=new P,M=new P,S=new P;function C(v){M.fromBufferAttribute(s,v),S.copy(M);let T=l[v];w.copy(T),w.sub(M.multiplyScalar(M.dot(T))).normalize(),x.crossVectors(S,T);let L=x.dot(o[v])<0?-1:1;a.setXYZW(v,w.x,w.y,w.z,L)}for(let v=0,T=y.length;v<T;++v){let R=y[v],L=R.start,U=R.count;for(let k=L,N=L+U;k<N;k+=3)C(t.getX(k+0)),C(t.getX(k+1)),C(t.getX(k+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new hn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new P,r=new P,a=new P,l=new P,o=new P,c=new P,h=new P,u=new P;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),b=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,b),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),l.fromBufferAttribute(n,g),o.fromBufferAttribute(n,b),c.fromBufferAttribute(n,m),l.add(h),o.add(h),c.add(h),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(b,o.x,o.y,o.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(l,o){let c=l.array,h=l.itemSize,u=l.normalized,d=new c.constructor(o.length*h),f=0,g=0;for(let b=0,m=o.length;b<m;b++){l.isInterleavedBufferAttribute?f=o[b]*l.data.stride+l.offset:f=o[b]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new hn(d,h,u)}if(this.index===null)return Wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let l in s){let o=s[l],c=t(o,n);e.setAttribute(l,c)}let r=this.morphAttributes;for(let l in r){let o=[],c=r[l];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);o.push(f)}e.morphAttributes[l]=o}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,o=a.length;l<o;l++){let c=a[l];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let o=this.parameters;for(let c in o)o[c]!==void 0&&(t[c]=o[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let o in n){let c=n[o];t.data.attributes[o]=c.toJSON(t.data)}let s={},r=!1;for(let o in this.morphAttributes){let c=this.morphAttributes[o],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[o]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());let o=t.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},uo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Kc,this.updateRanges=[],this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},ln=new P,_r=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix4(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyNormalMatrix(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.transformDirection(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Gn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Gn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Gn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Gn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array),r=xe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){dr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new hn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){dr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},_c=new P,tp=new P,ep=new Zt,Pn=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=_c.subVectors(n,e).cross(tp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(_c),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ep.getNormalMatrix(t),s=this.coplanarPoint(_c).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},np=0,Zn=class extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=si(),this.name="",this.type="Material",this.blending=Si,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vc,this.blendDst=Hc,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$a,this.stencilZFail=$a,this.stencilZPass=$a,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Wt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Wt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let l in r){let o=r[l];delete o.metadata,a.push(o)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new It().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Pn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new rt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new rt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},xi=class extends Zn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},hs,er=new P,us=new P,ds=new P,fs=new rt,nr=new rt,ud=new _e,Ia=new P,ir=new P,Da=new P,ou=new rt,yc=new rt,lu=new rt,qe=class extends ke{constructor(t=new xi){if(super(),this.isSprite=!0,this.type="Sprite",hs===void 0){hs=new Pe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new uo(e,5);hs.setIndex([0,1,2,0,2,3]),hs.setAttribute("position",new _r(n,3,0,!1)),hs.setAttribute("uv",new _r(n,2,3,!1))}this.geometry=hs,this.material=t,this.center=new rt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Ht('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),us.setFromMatrixScale(this.matrixWorld),ud.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ds.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&us.multiplyScalar(-ds.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;La(Ia.set(-.5,-.5,0),ds,a,us,s,r),La(ir.set(.5,-.5,0),ds,a,us,s,r),La(Da.set(.5,.5,0),ds,a,us,s,r),ou.set(0,0),yc.set(1,0),lu.set(1,1);let l=t.ray.intersectTriangle(Ia,ir,Da,!1,er);if(l===null&&(La(ir.set(-.5,.5,0),ds,a,us,s,r),yc.set(0,1),l=t.ray.intersectTriangle(Ia,Da,ir,!1,er),l===null))return;let o=t.ray.origin.distanceTo(er);o<t.near||o>t.far||e.push({distance:o,point:er.clone(),uv:ii.getInterpolation(er,Ia,ir,Da,ou,yc,lu,new rt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function La(i,t,e,n,s,r){fs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(nr.x=r*fs.x-s*fs.y,nr.y=s*fs.x+r*fs.y):nr.copy(fs),i.copy(t),i.x+=nr.x,i.y+=nr.y,i.applyMatrix4(ud)}var ni=new P,vc=new P,Na=new P,Ua=new P,fo=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ni.copy(this.origin).addScaledVector(this.direction,e),ni.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){vc.copy(t).add(e).multiplyScalar(.5),Na.copy(e).sub(t).normalize(),Ua.copy(this.origin).sub(vc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Na),l=Ua.dot(this.direction),o=-Ua.dot(Na),c=Ua.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*o-l,d=a*l-o,g=r*h,u>=0)if(d>=-g)if(d<=g){let b=1/h;u*=b,d*=b,f=u*(u+a*d+2*l)+d*(a*u+d+2*o)+c}else d=r,u=Math.max(0,-(a*d+l)),f=-u*u+d*(d+2*o)+c;else d=-r,u=Math.max(0,-(a*d+l)),f=-u*u+d*(d+2*o)+c;else d<=-g?(u=Math.max(0,-(-a*r+l)),d=u>0?-r:Math.min(Math.max(-r,-o),r),f=-u*u+d*(d+2*o)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-o),r),f=d*(d+2*o)+c):(u=Math.max(0,-(a*r+l)),d=u>0?r:Math.min(Math.max(-r,-o),r),f=-u*u+d*(d+2*o)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+l)),f=-u*u+d*(d+2*o)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(vc).addScaledVector(Na,d),f}intersectSphere(t,e){if(t.radius<0)return null;ni.subVectors(t.center,this.origin);let n=ni.dot(this.direction),s=ni.dot(ni)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),l=n-a,o=n+a;return o<0?null:l<0?this.at(o,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,l,o,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(l=(t.min.z-d.z)*u,o=(t.max.z-d.z)*u):(l=(t.max.z-d.z)*u,o=(t.min.z-d.z)*u),n>o||l>s)||((l>n||n!==n)&&(n=l),(o<s||s!==s)&&(s=o),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ni)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,l=this.direction,o=l.x,c=l.y,h=l.z,u=t.x-a.x,d=t.y-a.y,f=t.z-a.z,g=e.x-a.x,b=e.y-a.y,m=e.z-a.z,p=n.x-a.x,y=n.y-a.y,w=n.z-a.z,x=Math.abs(o),M=Math.abs(c),S=Math.abs(h),C,v,T,R,L,U,k,N,B,q,X,nt;if(x>=M&&x>=S?(T=o,U=u,B=g,nt=p,o>=0?(C=c,v=h,R=d,L=f,k=b,N=m,q=y,X=w):(C=h,v=c,R=f,L=d,k=m,N=b,q=w,X=y)):M>=S?(T=c,U=d,B=b,nt=y,c>=0?(C=h,v=o,R=f,L=u,k=m,N=g,q=w,X=p):(C=o,v=h,R=u,L=f,k=g,N=m,q=p,X=w)):(T=h,U=f,B=m,nt=w,h>=0?(C=o,v=c,R=u,L=d,k=g,N=b,q=p,X=y):(C=c,v=o,R=d,L=u,k=b,N=g,q=y,X=p)),T===0)return null;let Y=C/T,Q=v/T,it=1/T,Nt=R-Y*U,At=L-Q*U,ue=k-Y*B,ie=N-Q*B,oe=q-Y*nt,$=X-Q*nt,tt=oe*ie-$*ue,yt=Nt*$-At*oe,Xt=ue*At-ie*Nt;if(s){if(tt<0||yt<0||Xt<0)return null}else if((tt<0||yt<0||Xt<0)&&(tt>0||yt>0||Xt>0))return null;let wt=tt+yt+Xt;if(wt===0)return null;let qt=it*(tt*U+yt*B+Xt*nt);return(wt>0?qt<0:qt>0)?null:this.at(qt/wt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Dn=class extends Zn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=Fo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},cu=new _e,Li=new fo,Fa=new gi,hu=new P,Oa=new P,za=new P,ka=new P,bc=new P,Ba=new P,uu=new P,Ga=new P,Ut=class extends ke{constructor(t=new Pe,e=new Dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let l=this.morphTargetInfluences;if(r&&l){Ba.set(0,0,0);for(let o=0,c=r.length;o<c;o++){let h=l[o],u=r[o];h!==0&&(bc.fromBufferAttribute(u,t),a?Ba.addScaledVector(bc,h):Ba.addScaledVector(bc.sub(e),h))}e.add(Ba)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(r),Li.copy(t.ray).recast(t.near),!(Fa.containsPoint(Li.origin)===!1&&(Li.intersectSphere(Fa,hu)===null||Li.origin.distanceToSquared(hu)>(t.far-t.near)**2))&&(cu.copy(r).invert(),Li.copy(t.ray).applyMatrix4(cu),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Li)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,l=r.index,o=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(l!==null)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){let m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,M=w;x<M;x+=3){let S=l.getX(x),C=l.getX(x+1),v=l.getX(x+2);s=Va(this,p,t,n,c,h,u,S,C,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),b=Math.min(l.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){let y=l.getX(m),w=l.getX(m+1),x=l.getX(m+2);s=Va(this,a,t,n,c,h,u,y,w,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(o!==void 0)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){let m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,M=w;x<M;x+=3){let S=x,C=x+1,v=x+2;s=Va(this,p,t,n,c,h,u,S,C,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){let y=m,w=m+1,x=m+2;s=Va(this,a,t,n,c,h,u,y,w,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function ip(i,t,e,n,s,r,a,l){let o;if(t.side===Ye?o=n.intersectTriangle(a,r,s,!0,l):o=n.intersectTriangle(s,r,a,t.side===Jn,l),o===null)return null;Ga.copy(l),Ga.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ga);return c<e.near||c>e.far?null:{distance:c,point:Ga.clone(),object:i}}function Va(i,t,e,n,s,r,a,l,o,c){i.getVertexPosition(l,Oa),i.getVertexPosition(o,za),i.getVertexPosition(c,ka);let h=ip(i,t,e,n,Oa,za,ka,uu);if(h){let u=new P;ii.getBarycoord(uu,Oa,za,ka,u),s&&(h.uv=ii.getInterpolatedAttribute(s,l,o,c,u,new rt)),r&&(h.uv1=ii.getInterpolatedAttribute(r,l,o,c,u,new rt)),a&&(h.normal=ii.getInterpolatedAttribute(a,l,o,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:l,b:o,c,normal:new P,materialIndex:0};ii.getNormal(Oa,za,ka,d.normal),h.face=d,h.barycoord=u}return h}var yr=class extends nn{constructor(t=null,e=1,n=1,s,r,a,l,o,c=He,h=He,u,d){super(null,a,l,o,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vr=class extends hn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ps=new _e,du=new _e,Ha=[],fu=new Yn,sp=new _e,sr=new Ut,rr=new gi,br=class extends Ut{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,sp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Yn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ps),fu.copy(t.boundingBox).applyMatrix4(ps),this.boundingBox.union(fu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new gi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ps),rr.copy(t.boundingSphere).applyMatrix4(ps),this.boundingSphere.union(rr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let l=0;l<n.length;l++)n[l]=s[a+l]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(sr.geometry=this.geometry,sr.material=this.material,sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rr.copy(this.boundingSphere),rr.applyMatrix4(n),t.ray.intersectsSphere(rr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ps),du.multiplyMatrices(n,ps),sr.matrixWorld=du,sr.raycast(t,Ha);for(let a=0,l=Ha.length;a<l;a++){let o=Ha[a];o.instanceId=r,o.object=this,e.push(o)}Ha.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new vr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new yr(new Float32Array(s*this.count),s,this.count,Vo,Mn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let l=this.geometry.morphTargetsRelative?1:1-a,o=s*t;return r[o]=l,r.set(n,o+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ni=new gi,rp=new rt(.5,.5),Wa=new P,As=class{constructor(t=new Pn,e=new Pn,n=new Pn,s=new Pn,r=new Pn,a=new Pn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=In,n=!1){let s=this.planes,r=t.elements,a=r[0],l=r[1],o=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],b=r[9],m=r[10],p=r[11],y=r[12],w=r[13],x=r[14],M=r[15];if(s[0].setComponents(c-a,f-h,p-g,M-y).normalize(),s[1].setComponents(c+a,f+h,p+g,M+y).normalize(),s[2].setComponents(c+l,f+u,p+b,M+w).normalize(),s[3].setComponents(c-l,f-u,p-b,M-w).normalize(),n)s[4].setComponents(o,d,m,x).normalize(),s[5].setComponents(c-o,f-d,p-m,M-x).normalize();else if(s[4].setComponents(c-o,f-d,p-m,M-x).normalize(),e===In)s[5].setComponents(c+o,f+d,p+m,M+x).normalize();else if(e===Ms)s[5].setComponents(o,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(t){Ni.center.set(0,0,0);let e=rp.distanceTo(t.center);return Ni.radius=.7071067811865476+e,Ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Wa.x=s.normal.x>0?t.max.x:t.min.x,Wa.y=s.normal.y>0?t.max.y:t.min.y,Wa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Wa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Mr=class extends nn{constructor(t=[],e=wi,n,s,r,a,l,o,c,h){super(t,e,n,s,r,a,l,o,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Sr=class extends nn{constructor(t,e,n,s,r,a,l,o,c){super(t,e,n,s,r,a,l,o,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var _i=class extends nn{constructor(t,e,n=Nn,s,r,a,l=He,o=He,c,h=Hn,u=1){if(h!==Hn&&h!==Ti)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,a,l,o,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Es(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},po=class extends _i{constructor(t,e=Nn,n=wi,s,r,a=He,l=He,o,c=Hn){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,l,o,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},wr=class extends nn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},sn=class i extends Pe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let o=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(o),this.setAttribute("position",new ee(c,3)),this.setAttribute("normal",new ee(h,3)),this.setAttribute("uv",new ee(u,2));function g(b,m,p,y,w,x,M,S,C,v,T){let R=x/C,L=M/v,U=x/2,k=M/2,N=S/2,B=C+1,q=v+1,X=0,nt=0,Y=new P;for(let Q=0;Q<q;Q++){let it=Q*L-k;for(let Nt=0;Nt<B;Nt++){let At=Nt*R-U;Y[b]=At*y,Y[m]=it*w,Y[p]=N,c.push(Y.x,Y.y,Y.z),Y[b]=0,Y[m]=0,Y[p]=S>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(Nt/C),u.push(1-Q/v),X+=1}}for(let Q=0;Q<v;Q++)for(let it=0;it<C;it++){let Nt=d+it+B*Q,At=d+it+B*(Q+1),ue=d+(it+1)+B*(Q+1),ie=d+(it+1)+B*Q;o.push(Nt,At,ie),o.push(At,ue,ie),nt+=6}l.addGroup(f,nt,T),f+=nt,d+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Er=class i extends Pe{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],l=[],o=[],c=[],h=e/2,u=Math.PI/2*t,d=e,f=2*u+d,g=n*2+r,b=s+1,m=new P,p=new P;for(let y=0;y<=g;y++){let w=0,x=0,M=0,S=0;if(y<=n){let T=y/n,R=T*Math.PI/2;x=-h-t*Math.cos(R),M=t*Math.sin(R),S=-t*Math.cos(R),w=T*u}else if(y<=n+r){let T=(y-n)/r;x=-h+T*e,M=t,S=0,w=u+T*d}else{let T=(y-n-r)/n,R=T*Math.PI/2;x=h+t*Math.sin(R),M=t*Math.cos(R),S=t*Math.sin(R),w=u+d+T*u}let C=Math.max(0,Math.min(1,w/f)),v=0;y===0?v=.5/s:y===g&&(v=-.5/s);for(let T=0;T<=s;T++){let R=T/s,L=R*Math.PI*2,U=Math.sin(L),k=Math.cos(L);p.x=-M*k,p.y=x,p.z=M*U,l.push(p.x,p.y,p.z),m.set(-M*k,S,M*U),m.normalize(),o.push(m.x,m.y,m.z),c.push(R+v,C)}if(y>0){let T=(y-1)*b;for(let R=0;R<s;R++){let L=T+R,U=T+R+1,k=y*b+R,N=y*b+R+1;a.push(L,U,k),a.push(U,N,k)}}}this.setIndex(a),this.setAttribute("position",new ee(l,3)),this.setAttribute("normal",new ee(o,3)),this.setAttribute("uv",new ee(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Tr=class i extends Pe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],l=[],o=[],c=new P,h=new rt;a.push(0,0,0),l.push(0,0,1),o.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),l.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,o.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ee(a,3)),this.setAttribute("normal",new ee(l,3)),this.setAttribute("uv",new ee(o,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},zi=class i extends Pe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,l=0,o=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:o};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,b=[],m=n/2,p=0;y(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new ee(u,3)),this.setAttribute("normal",new ee(d,3)),this.setAttribute("uv",new ee(f,2));function y(){let x=new P,M=new P,S=0,C=(e-t)/n;for(let v=0;v<=r;v++){let T=[],R=v/r,L=R*(e-t)+t;for(let U=0;U<=s;U++){let k=U/s,N=k*o+l,B=Math.sin(N),q=Math.cos(N);M.x=L*B,M.y=-R*n+m,M.z=L*q,u.push(M.x,M.y,M.z),x.set(B,C,q).normalize(),d.push(x.x,x.y,x.z),f.push(k,1-R),T.push(g++)}b.push(T)}for(let v=0;v<s;v++)for(let T=0;T<r;T++){let R=b[T][v],L=b[T+1][v],U=b[T+1][v+1],k=b[T][v+1];(t>0||T!==0)&&(h.push(R,L,k),S+=3),(e>0||T!==r-1)&&(h.push(L,U,k),S+=3)}c.addGroup(p,S,0),p+=S}function w(x){let M=g,S=new rt,C=new P,v=0,T=x===!0?t:e,R=x===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,m*R,0),d.push(0,R,0),f.push(.5,.5),g++;let L=g;for(let U=0;U<=s;U++){let N=U/s*o+l,B=Math.cos(N),q=Math.sin(N);C.x=T*q,C.y=m*R,C.z=T*B,u.push(C.x,C.y,C.z),d.push(0,R,0),S.x=B*.5+.5,S.y=q*.5*R+.5,f.push(S.x,S.y),g++}for(let U=0;U<s;U++){let k=M+U,N=L+U;x===!0?h.push(N,N+1,k):h.push(N+1,N,k),v+=3}c.addGroup(p,v,x===!0?1:2),p+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ar=class i extends zi{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,l=Math.PI*2){super(0,t,e,n,s,r,a,l),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Cr=class i extends Pe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];l(s),c(n),h(),this.setAttribute("position",new ee(r,3)),this.setAttribute("normal",new ee(r.slice(),3)),this.setAttribute("uv",new ee(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function l(y){let w=new P,x=new P,M=new P;for(let S=0;S<e.length;S+=3)f(e[S+0],w),f(e[S+1],x),f(e[S+2],M),o(w,x,M,y)}function o(y,w,x,M){let S=M+1,C=[];for(let v=0;v<=S;v++){C[v]=[];let T=y.clone().lerp(x,v/S),R=w.clone().lerp(x,v/S),L=S-v;for(let U=0;U<=L;U++)U===0&&v===S?C[v][U]=T:C[v][U]=T.clone().lerp(R,U/L)}for(let v=0;v<S;v++)for(let T=0;T<2*(S-v)-1;T++){let R=Math.floor(T/2);T%2===0?(d(C[v][R+1]),d(C[v+1][R]),d(C[v][R])):(d(C[v][R+1]),d(C[v+1][R+1]),d(C[v+1][R]))}}function c(y){let w=new P;for(let x=0;x<r.length;x+=3)w.x=r[x+0],w.y=r[x+1],w.z=r[x+2],w.normalize().multiplyScalar(y),r[x+0]=w.x,r[x+1]=w.y,r[x+2]=w.z}function h(){let y=new P;for(let w=0;w<r.length;w+=3){y.x=r[w+0],y.y=r[w+1],y.z=r[w+2];let x=m(y)/2/Math.PI+.5,M=p(y)/Math.PI+.5;a.push(x,1-M)}g(),u()}function u(){for(let y=0;y<a.length;y+=6){let w=a[y+0],x=a[y+2],M=a[y+4],S=Math.max(w,x,M),C=Math.min(w,x,M);S>.9&&C<.1&&(w<.2&&(a[y+0]+=1),x<.2&&(a[y+2]+=1),M<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,w){let x=y*3;w.x=t[x+0],w.y=t[x+1],w.z=t[x+2]}function g(){let y=new P,w=new P,x=new P,M=new P,S=new rt,C=new rt,v=new rt;for(let T=0,R=0;T<r.length;T+=9,R+=6){y.set(r[T+0],r[T+1],r[T+2]),w.set(r[T+3],r[T+4],r[T+5]),x.set(r[T+6],r[T+7],r[T+8]),S.set(a[R+0],a[R+1]),C.set(a[R+2],a[R+3]),v.set(a[R+4],a[R+5]),M.copy(y).add(w).add(x).divideScalar(3);let L=m(M);b(S,R+0,y,L),b(C,R+2,w,L),b(v,R+4,x,L)}}function b(y,w,x,M){M<0&&y.x===1&&(a[w]=y.x-1),x.x===0&&x.z===0&&(a[w]=M/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},Rr=class i extends Cr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Wt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let l=0,o=r-1,c;for(;l<=o;)if(s=Math.floor(l+(o-l)/2),c=n[s]-a,c<0)l=s+1;else if(c>0)o=s-1;else{o=s;break}if(s=o,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),l=this.getPoint(r),o=e||(a.isVector2?new rt:new P);return o.copy(l).sub(a).normalize(),o}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new P,s=[],r=[],a=[],l=new P,o=new _e;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),l.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],l),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),l.crossVectors(s[f-1],s[f]),l.length()>Number.EPSILON){l.normalize();let g=Math.acos(ae(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(o.makeRotationAxis(l,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ae(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(l.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(o.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Cs=class extends mn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,l=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=l,this.aRotation=o}getPoint(t,e=new rt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let l=this.aStartAngle+t*r,o=this.aX+this.xRadius*Math.cos(l),c=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=o-this.aX,f=c-this.aY;o=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(o,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},mo=class extends Cs{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Qc(){let i=0,t=0,e=0,n=0;function s(r,a,l,o){i=r,t=l,e=-3*r+3*a-2*l-o,n=2*r-2*a+l+o}return{initCatmullRom:function(r,a,l,o,c){s(a,l,c*(l-r),c*(o-a))},initNonuniformCatmullRom:function(r,a,l,o,c,h,u){let d=(a-r)/c-(l-r)/(c+h)+(l-a)/h,f=(l-a)/h-(o-a)/(h+u)+(o-l)/u;d*=h,f*=h,s(a,l,d,f)},calc:function(r){let a=r*r,l=a*r;return i+t*r+e*a+n*l}}}var pu=new P,mu=new P,Mc=new Qc,Sc=new Qc,wc=new Qc,go=class extends mn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,l=Math.floor(a),o=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:o===0&&l===r-1&&(l=r-2,o=1);let c,h;this.closed||l>0?c=s[(l-1)%r]:(mu.subVectors(s[0],s[1]).add(s[0]),c=mu);let u=s[l%r],d=s[(l+1)%r];if(this.closed||l+2<r?h=s[(l+2)%r]:(pu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=pu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),b=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);b<1e-4&&(b=1),g<1e-4&&(g=b),m<1e-4&&(m=b),Mc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,b,m),Sc.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,b,m),wc.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,b,m)}else this.curveType==="catmullrom"&&(Mc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Sc.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),wc.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Mc.calc(o),Sc.calc(o),wc.calc(o)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function gu(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,l=i*i,o=i*l;return(2*e-2*n+r+a)*o+(-3*e+3*n-2*r-a)*l+r*i+e}function ap(i,t){let e=1-i;return e*e*t}function op(i,t){return 2*(1-i)*i*t}function lp(i,t){return i*i*t}function or(i,t,e,n){return ap(i,t)+op(i,e)+lp(i,n)}function cp(i,t){let e=1-i;return e*e*e*t}function hp(i,t){let e=1-i;return 3*e*e*i*t}function up(i,t){return 3*(1-i)*i*i*t}function dp(i,t){return i*i*i*t}function lr(i,t,e,n,s){return cp(i,t)+hp(i,e)+up(i,n)+dp(i,s)}var Pr=class extends mn{constructor(t=new rt,e=new rt,n=new rt,s=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new rt){let n=e,s=this.v0,r=this.v1,a=this.v2,l=this.v3;return n.set(lr(t,s.x,r.x,a.x,l.x),lr(t,s.y,r.y,a.y,l.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},xo=class extends mn{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,a=this.v2,l=this.v3;return n.set(lr(t,s.x,r.x,a.x,l.x),lr(t,s.y,r.y,a.y,l.y),lr(t,s.z,r.z,a.z,l.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ir=class extends mn{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_o=class extends mn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Dr=class extends mn{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(or(t,s.x,r.x,a.x),or(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yo=class extends mn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(or(t,s.x,r.x,a.x),or(t,s.y,r.y,a.y),or(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Lr=class extends mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),l=r-a,o=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(gu(l,o.x,c.x,h.x,u.x),gu(l,o.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new rt().fromArray(s))}return this}},Ic=Object.freeze({__proto__:null,ArcCurve:mo,CatmullRomCurve3:go,CubicBezierCurve:Pr,CubicBezierCurve3:xo,EllipseCurve:Cs,LineCurve:Ir,LineCurve3:_o,QuadraticBezierCurve:Dr,QuadraticBezierCurve3:yo,SplineCurve:Lr}),vo=class extends mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ic[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,l=this.curves[r],o=l.getLength(),c=o===0?0:1-a/o;return l.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],l=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,o=a.getPoints(l);for(let c=0;c<o.length;c++){let h=o[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Ic[s.type]().fromJSON(s))}return this}},Nr=class extends vo{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ir(this.currentPoint.clone(),new rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Dr(this.currentPoint.clone(),new rt(t,e),new rt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let l=new Pr(this.currentPoint.clone(),new rt(t,e),new rt(n,s),new rt(r,a));return this.curves.push(l),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Lr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let l=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(t+l,e+o,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,l,o){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,l,o),this}absellipse(t,e,n,s,r,a,l,o){let c=new Cs(t,e,n,s,r,a,l,o);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Rs=class extends Nr{constructor(t){super(t),this.uuid=si(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Nr().fromJSON(s))}return this}};function fp(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=dd(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let l,o,c;if(n&&(r=_p(i,t,r,e)),i.length>80*e){l=i[0],o=i[1];let h=l,u=o;for(let d=e;d<s;d+=e){let f=i[d],g=i[d+1];f<l&&(l=f),g<o&&(o=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-l,u-o),c=c!==0?32767/c:0}return Ur(r,a,e,l,o,c,0),a}function dd(i,t,e,n,s){let r;if(s===Rp(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=xu(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=xu(a/n|0,i[a],i[a+1],r);return r&&Ps(r,r.next)&&(Or(r),r=r.next),r}function ki(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ps(e,e.next)||Ce(e.prev,e,e.next)===0)){if(Or(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ur(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Sp(i,n,s,r);let l=i;for(;i.prev!==i.next;){let o=i.prev,c=i.next;if(r?mp(i,n,s,r):pp(i)){t.push(o.i,i.i,c.i),Or(i),i=c.next,l=c.next;continue}if(i=c,i===l){a?a===1?(i=gp(ki(i),t),Ur(i,t,e,n,s,r,2)):a===2&&xp(i,t,e,n,s,r):Ur(ki(i),t,e,n,s,r,1);break}}}function pp(i){let t=i.prev,e=i,n=i.next;if(Ce(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,l=t.y,o=e.y,c=n.y,h=Math.min(s,r,a),u=Math.min(l,o,c),d=Math.max(s,r,a),f=Math.max(l,o,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&ar(s,l,r,o,a,c,g.x,g.y)&&Ce(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function mp(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Ce(s,r,a)>=0)return!1;let l=s.x,o=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(l,o,c),g=Math.min(h,u,d),b=Math.max(l,o,c),m=Math.max(h,u,d),p=Dc(f,g,t,e,n),y=Dc(b,m,t,e,n),w=i.prevZ,x=i.nextZ;for(;w&&w.z>=p&&x&&x.z<=y;){if(w.x>=f&&w.x<=b&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&ar(l,h,o,u,c,d,w.x,w.y)&&Ce(w.prev,w,w.next)>=0||(w=w.prevZ,x.x>=f&&x.x<=b&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&ar(l,h,o,u,c,d,x.x,x.y)&&Ce(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;w&&w.z>=p;){if(w.x>=f&&w.x<=b&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&ar(l,h,o,u,c,d,w.x,w.y)&&Ce(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;x&&x.z<=y;){if(x.x>=f&&x.x<=b&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&ar(l,h,o,u,c,d,x.x,x.y)&&Ce(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function gp(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Ps(n,s)&&pd(n,e,e.next,s)&&Fr(n,s)&&Fr(s,n)&&(t.push(n.i,e.i,s.i),Or(e),Or(e.next),e=i=s),e=e.next}while(e!==i);return ki(e)}function xp(i,t,e,n,s,r){let a=i;do{let l=a.next.next;for(;l!==a.prev;){if(a.i!==l.i&&Tp(a,l)){let o=md(a,l);a=ki(a,a.next),o=ki(o,o.next),Ur(a,t,e,n,s,r,0),Ur(o,t,e,n,s,r,0);return}l=l.next}a=a.next}while(a!==i)}function _p(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let l=t[r]*n,o=r<a-1?t[r+1]*n:i.length,c=dd(i,l,o,n,!1);c===c.next&&(c.steiner=!0),s.push(Ep(c))}s.sort(yp);for(let r=0;r<s.length;r++)e=vp(s[r],e);return e}function yp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function vp(i,t){let e=bp(i,t);if(!e)return t;let n=md(e,i);return ki(n,n.next),ki(e,e.next)}function bp(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Ps(i,e))return e;do{if(Ps(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;let l=a,o=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=o&&n!==e.x&&fd(s<c?n:r,s,o,c,s<c?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);Fr(e,i)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&Mp(a,e)))&&(a=e,h=u)}e=e.next}while(e!==l);return a}function Mp(i,t){return Ce(i.prev,i,t.prev)<0&&Ce(t.next,i,i.next)<0}function Sp(i,t,e,n){let s=i;do s.z===0&&(s.z=Dc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,wp(s)}function wp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,l=0;for(let c=0;c<e&&(l++,a=a.nextZ,!!a);c++);let o=e;for(;l>0||o>0&&a;)l!==0&&(o===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,l--):(s=a,a=a.nextZ,o--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Dc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Ep(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function fd(i,t,e,n,s,r,a,l){return(s-a)*(t-l)>=(i-a)*(r-l)&&(i-a)*(n-l)>=(e-a)*(t-l)&&(e-a)*(r-l)>=(s-a)*(n-l)}function ar(i,t,e,n,s,r,a,l){return!(i===a&&t===l)&&fd(i,t,e,n,s,r,a,l)}function Tp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Ap(i,t)&&(Fr(i,t)&&Fr(t,i)&&Cp(i,t)&&(Ce(i.prev,i,t.prev)||Ce(i,t.prev,t))||Ps(i,t)&&Ce(i.prev,i,i.next)>0&&Ce(t.prev,t,t.next)>0)}function Ce(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ps(i,t){return i.x===t.x&&i.y===t.y}function pd(i,t,e,n){let s=qa(Ce(i,t,e)),r=qa(Ce(i,t,n)),a=qa(Ce(e,n,i)),l=qa(Ce(e,n,t));return!!(s!==r&&a!==l||s===0&&Xa(i,e,t)||r===0&&Xa(i,n,t)||a===0&&Xa(e,i,n)||l===0&&Xa(e,t,n))}function Xa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function qa(i){return i>0?1:i<0?-1:0}function Ap(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&pd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Fr(i,t){return Ce(i.prev,i,i.next)<0?Ce(i,t,i.next)>=0&&Ce(i,i.prev,t)>=0:Ce(i,t,i.prev)<0||Ce(i,i.next,t)<0}function Cp(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function md(i,t){let e=Lc(i.i,i.x,i.y),n=Lc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function xu(i,t,e,n){let s=Lc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Or(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Lc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Rp(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Nc=class{static triangulate(t,e,n=2){return fp(t,e,n)}},Ui=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];_u(t),yu(n,t);let a=t.length;e.forEach(_u);for(let o=0;o<e.length;o++)s.push(a),a+=e[o].length,yu(n,e[o]);let l=Nc.triangulate(n,s);for(let o=0;o<l.length;o+=3)r.push(l.slice(o,o+3));return r}};function _u(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function yu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var zr=class i extends Pe{constructor(t=new Rs([new rt(.5,.5),new rt(-.5,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let l=0,o=t.length;l<o;l++){let c=t[l];a(c)}this.setAttribute("position",new ee(s,3)),this.setAttribute("uv",new ee(r,2)),this.computeVertexNormals();function a(l){let o=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,b=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Pp,w,x=!1,M,S,C,v;if(p){w=p.getSpacedPoints(h),x=!0,d=!1;let et=p.isCatmullRomCurve3?p.closed:!1;M=p.computeFrenetFrames(h,et),S=new P,C=new P,v=new P}d||(m=0,f=0,g=0,b=0);let T=l.extractPoints(c),R=T.shape,L=T.holes;if(!Ui.isClockWise(R)){R=R.reverse();for(let et=0,at=L.length;et<at;et++){let ot=L[et];Ui.isClockWise(ot)&&(L[et]=ot.reverse())}}function k(et){let ot=10000000000000001e-36,lt=et[0];for(let ut=1;ut<=et.length;ut++){let Gt=ut%et.length,kt=et[Gt],Yt=kt.x-lt.x,Jt=kt.y-lt.y,D=Yt*Yt+Jt*Jt,de=Math.max(Math.abs(kt.x),Math.abs(kt.y),Math.abs(lt.x),Math.abs(lt.y)),se=ot*de*de;if(D<=se){et.splice(Gt,1),ut--;continue}lt=kt}}k(R),L.forEach(k);let N=L.length,B=R;for(let et=0;et<N;et++){let at=L[et];R=R.concat(at)}function q(et,at,ot){return at||Ht("ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(at,ot)}let X=R.length;function nt(et,at,ot){let lt,ut,Gt,kt=et.x-at.x,Yt=et.y-at.y,Jt=ot.x-et.x,D=ot.y-et.y,de=kt*kt+Yt*Yt,se=kt*D-Yt*Jt;if(Math.abs(se)>Number.EPSILON){let A=Math.sqrt(de),_=Math.sqrt(Jt*Jt+D*D),z=at.x-Yt/A,H=at.y+kt/A,Z=ot.x-D/_,ct=ot.y+Jt/_,ht=((Z-z)*D-(ct-H)*Jt)/(kt*D-Yt*Jt);lt=z+kt*ht-et.x,ut=H+Yt*ht-et.y;let J=lt*lt+ut*ut;if(J<=2)return new rt(lt,ut);Gt=Math.sqrt(J/2)}else{let A=!1;kt>Number.EPSILON?Jt>Number.EPSILON&&(A=!0):kt<-Number.EPSILON?Jt<-Number.EPSILON&&(A=!0):Math.sign(Yt)===Math.sign(D)&&(A=!0),A?(lt=-Yt,ut=kt,Gt=Math.sqrt(de)):(lt=kt,ut=Yt,Gt=Math.sqrt(de/2))}return new rt(lt/Gt,ut/Gt)}let Y=[];for(let et=0,at=B.length,ot=at-1,lt=et+1;et<at;et++,ot++,lt++)ot===at&&(ot=0),lt===at&&(lt=0),Y[et]=nt(B[et],B[ot],B[lt]);let Q=[],it,Nt=Y.concat();for(let et=0,at=N;et<at;et++){let ot=L[et];it=[];for(let lt=0,ut=ot.length,Gt=ut-1,kt=lt+1;lt<ut;lt++,Gt++,kt++)Gt===ut&&(Gt=0),kt===ut&&(kt=0),it[lt]=nt(ot[lt],ot[Gt],ot[kt]);Q.push(it),Nt=Nt.concat(it)}let At;if(m===0)At=Ui.triangulateShape(B,L);else{let et=[],at=[];for(let ot=0;ot<m;ot++){let lt=ot/m,ut=f*Math.cos(lt*Math.PI/2),Gt=g*Math.sin(lt*Math.PI/2)+b;for(let kt=0,Yt=B.length;kt<Yt;kt++){let Jt=q(B[kt],Y[kt],Gt);yt(Jt.x,Jt.y,-ut),lt===0&&et.push(Jt)}for(let kt=0,Yt=N;kt<Yt;kt++){let Jt=L[kt];it=Q[kt];let D=[];for(let de=0,se=Jt.length;de<se;de++){let A=q(Jt[de],it[de],Gt);yt(A.x,A.y,-ut),lt===0&&D.push(A)}lt===0&&at.push(D)}}At=Ui.triangulateShape(et,at)}let ue=At.length,ie=g+b;for(let et=0;et<X;et++){let at=d?q(R[et],Nt[et],ie):R[et];x?(C.copy(M.normals[0]).multiplyScalar(at.x),S.copy(M.binormals[0]).multiplyScalar(at.y),v.copy(w[0]).add(C).add(S),yt(v.x,v.y,v.z)):yt(at.x,at.y,0)}for(let et=1;et<=h;et++)for(let at=0;at<X;at++){let ot=d?q(R[at],Nt[at],ie):R[at];x?(C.copy(M.normals[et]).multiplyScalar(ot.x),S.copy(M.binormals[et]).multiplyScalar(ot.y),v.copy(w[et]).add(C).add(S),yt(v.x,v.y,v.z)):yt(ot.x,ot.y,u/h*et)}for(let et=m-1;et>=0;et--){let at=et/m,ot=f*Math.cos(at*Math.PI/2),lt=g*Math.sin(at*Math.PI/2)+b;for(let ut=0,Gt=B.length;ut<Gt;ut++){let kt=q(B[ut],Y[ut],lt);yt(kt.x,kt.y,u+ot)}for(let ut=0,Gt=L.length;ut<Gt;ut++){let kt=L[ut];it=Q[ut];for(let Yt=0,Jt=kt.length;Yt<Jt;Yt++){let D=q(kt[Yt],it[Yt],lt);x?yt(D.x,D.y+w[h-1].y,w[h-1].x+ot):yt(D.x,D.y,u+ot)}}}oe(),$();function oe(){let et=s.length/3;if(d){let at=0,ot=X*at;for(let lt=0;lt<ue;lt++){let ut=At[lt];Xt(ut[2]+ot,ut[1]+ot,ut[0]+ot)}at=h+m*2,ot=X*at;for(let lt=0;lt<ue;lt++){let ut=At[lt];Xt(ut[0]+ot,ut[1]+ot,ut[2]+ot)}}else{for(let at=0;at<ue;at++){let ot=At[at];Xt(ot[2],ot[1],ot[0])}for(let at=0;at<ue;at++){let ot=At[at];Xt(ot[0]+X*h,ot[1]+X*h,ot[2]+X*h)}}n.addGroup(et,s.length/3-et,0)}function $(){let et=s.length/3,at=0;tt(B,at),at+=B.length;for(let ot=0,lt=L.length;ot<lt;ot++){let ut=L[ot];tt(ut,at),at+=ut.length}n.addGroup(et,s.length/3-et,1)}function tt(et,at){let ot=et.length;for(;--ot>=0;){let lt=ot,ut=ot-1;ut<0&&(ut=et.length-1);for(let Gt=0,kt=h+m*2;Gt<kt;Gt++){let Yt=X*Gt,Jt=X*(Gt+1),D=at+lt+Yt,de=at+ut+Yt,se=at+ut+Jt,A=at+lt+Jt;wt(D,de,se,A)}}}function yt(et,at,ot){o.push(et),o.push(at),o.push(ot)}function Xt(et,at,ot){qt(et),qt(at),qt(ot);let lt=s.length/3,ut=y.generateTopUV(n,s,lt-3,lt-2,lt-1);me(ut[0]),me(ut[1]),me(ut[2])}function wt(et,at,ot,lt){qt(et),qt(at),qt(lt),qt(at),qt(ot),qt(lt);let ut=s.length/3,Gt=y.generateSideWallUV(n,s,ut-6,ut-3,ut-2,ut-1);me(Gt[0]),me(Gt[1]),me(Gt[3]),me(Gt[1]),me(Gt[2]),me(Gt[3])}function qt(et){s.push(o[et*3+0]),s.push(o[et*3+1]),s.push(o[et*3+2])}function me(et){r.push(et.x),r.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ip(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let l=e[t.shapes[r]];n.push(l)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ic[s.type]().fromJSON(s)),new i(n,t.options)}},Pp={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],l=t[n*3],o=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new rt(r,a),new rt(l,o),new rt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],l=t[e*3+1],o=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],b=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(l-h)<Math.abs(a-c)?[new rt(a,1-o),new rt(c,1-u),new rt(d,1-g),new rt(b,1-p)]:[new rt(l,1-o),new rt(h,1-u),new rt(f,1-g),new rt(m,1-p)]}};function Ip(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Bi=class i extends Cr{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},cn=class i extends Pe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,l=Math.floor(n),o=Math.floor(s),c=l+1,h=o+1,u=t/l,d=e/o,f=[],g=[],b=[],m=[];for(let p=0;p<h;p++){let y=p*d-a;for(let w=0;w<c;w++){let x=w*u-r;g.push(x,-y,0),b.push(0,0,1),m.push(w/l),m.push(1-p/o)}}for(let p=0;p<o;p++)for(let y=0;y<l;y++){let w=y+c*p,x=y+c*(p+1),M=y+1+c*(p+1),S=y+1+c*p;f.push(w,x,S),f.push(x,M,S)}this.setIndex(f),this.setAttribute("position",new ee(g,3)),this.setAttribute("normal",new ee(b,3)),this.setAttribute("uv",new ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Gi=class i extends Pe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:l},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let o=Math.min(a+l,Math.PI),c=0,h=[],u=new P,d=new P,f=[],g=[],b=[],m=[];for(let p=0;p<=n;p++){let y=[],w=p/n,x=a+w*l,M=t*Math.cos(x),S=Math.sqrt(t*t-M*M),C=0;p===0&&a===0?C=.5/e:p===n&&o===Math.PI&&(C=-.5/e);for(let v=0;v<=e;v++){let T=v/e,R=s+T*r;u.x=-S*Math.cos(R),u.y=M,u.z=S*Math.sin(R),g.push(u.x,u.y,u.z),d.copy(u).normalize(),b.push(d.x,d.y,d.z),m.push(T+C,1-w),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let w=h[p][y+1],x=h[p][y],M=h[p+1][y],S=h[p+1][y+1];(p!==0||a>0)&&f.push(w,x,S),(p!==n-1||o<Math.PI)&&f.push(x,M,S)}this.setIndex(f),this.setAttribute("position",new ee(g,3)),this.setAttribute("normal",new ee(b,3)),this.setAttribute("uv",new ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Vi=class i extends Pe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:l},n=Math.floor(n),s=Math.floor(s);let o=[],c=[],h=[],u=[],d=new P,f=new P,g=new P;for(let b=0;b<=n;b++){let m=a+b/n*l;for(let p=0;p<=s;p++){let y=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(y),f.y=(t+e*Math.cos(m))*Math.sin(y),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),d.x=t*Math.cos(y),d.y=t*Math.sin(y),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(p/s),u.push(b/n)}}for(let b=1;b<=n;b++)for(let m=1;m<=s;m++){let p=(s+1)*b+m-1,y=(s+1)*(b-1)+m-1,w=(s+1)*(b-1)+m,x=(s+1)*b+m;o.push(p,y,x),o.push(y,w,x)}this.setIndex(o),this.setAttribute("position",new ee(c,3)),this.setAttribute("normal",new ee(h,3)),this.setAttribute("uv",new ee(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Ji(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(vu(s))s.isRenderTargetTexture?(Wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(vu(s[0])){let r=[];for(let a=0,l=s.length;a<l;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function rn(i){let t={};for(let e=0;e<i.length;e++){let n=Ji(i[e]);for(let s in n)t[s]=n[s]}return t}function vu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Dp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function th(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}var ai={clone:Ji,merge:rn},Lp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Np=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Le=class extends Zn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lp,this.fragmentShader=Np,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ji(t.uniforms),this.uniformsGroups=Dp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new It().setHex(s.value);break;case"v2":this.uniforms[n].value=new rt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ee().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Zt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new _e().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Is=class extends Le{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Me=class extends Zn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new It(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oa,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var kr=class extends Zn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oa,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=Fo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},bo=class extends Zn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ku,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Mo=class extends Zn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ms(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ec(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var yi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let l=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let l=e[1];t<l&&(n=2,r=l);for(let o=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let l=n+a>>>1;t<e[l]?a=l:n=l+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},So=class extends yi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cc,endingEnd:Cc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,l=s[r],o=s[a];if(l===void 0)switch(this.getSettings_().endingStart){case Rc:r=t,l=2*e-n;break;case Pc:r=s.length-2,l=e+s[r]-s[r+1];break;default:r=t,l=n}if(o===void 0)switch(this.getSettings_().endingEnd){case Rc:a=t,o=2*n-e;break;case Pc:a=1,o=n+s[1]-s[0];break;default:a=t-1,o=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-l),this._weightNext=c/(o-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=t*l,c=o-l,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),b=g*g,m=b*g,p=-d*m+2*d*b-d*g,y=(1+d)*m+(-1.5-2*d)*b+(-.5+d)*g+1,w=(-1-f)*m+(1.5+f)*b+.5*g,x=f*m-f*b;for(let M=0;M!==l;++M)r[M]=p*a[h+M]+y*a[c+M]+w*a[o+M]+x*a[u+M];return r}},wo=class extends yi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=t*l,c=o-l,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==l;++d)r[d]=a[c+d]*u+a[o+d]*h;return r}},Eo=class extends yi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},To=class extends yi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=t*l,c=o-l,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-e)/(s-e),b=1-g;for(let m=0;m!==l;++m)r[m]=a[c+m]*b+a[o+m]*g;return r}let d=l*2,f=t-1;for(let g=0;g!==l;++g){let b=a[c+g],m=a[o+g],p=f*d+g*2,y=u[p],w=u[p+1],x=t*d+g*2,M=h[x],S=h[x+1],C=Fp(n,e,y,M,s);r[g]=gd(C,b,w,S,m)}return r}};function gd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Up(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Fp(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let l=gd(r,t,e,n,s)-i;if(Math.abs(l)<1e-10)break;let o=Up(r,t,e,n,s);if(Math.abs(o)<1e-10)break;r=Math.max(0,Math.min(1,r-l/o))}return r}var gn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ms(e,this.TimeBufferType),this.values=ms(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ms(t.times,Array),values:ms(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Ec(t.settings)&&(n.settings={inTangents:ms(t.settings.inTangents,Array),outTangents:ms(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Eo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new wo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new So(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new To(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case cr:e=this.InterpolantFactoryMethodDiscrete;break;case ao:e=this.InterpolantFactoryMethodLinear;break;case Ja:e=this.InterpolantFactoryMethodSmooth;break;case Ac:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Wt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return cr;case this.InterpolantFactoryMethodLinear:return ao;case this.InterpolantFactoryMethodSmooth:return Ja;case this.InterpolantFactoryMethodBezier:return Ac}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Ec(this.settings)&&(bu(this.settings.inTangents,t),bu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let l=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*l,a*l)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ht("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ht("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let l=0;l!==r;l++){let o=n[l];if(typeof o=="number"&&isNaN(o)){Ht("KeyframeTrack: Time is not a valid number.",this,l,o),t=!1;break}if(a!==null&&a>o){Ht("KeyframeTrack: Out of order keys.",this,l,o,a),t=!1;break}a=o}if(s!==void 0&&kf(s))for(let l=0,o=s.length;l!==o;++l){let c=s[l];if(isNaN(c)){Ht("KeyframeTrack: Value is not a valid number.",this,l,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ja,r=t.length-1,a=1;for(let l=1;l<r;++l){let o=!1,c=t[l],h=t[l+1];if(c!==h&&(l!==1||c!==t[0]))if(s)o=!0;else{let u=l*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let b=e[u+g];if(b!==e[d+g]||b!==e[f+g]){o=!0;break}}}if(o){if(l!==a){t[a]=t[l];let u=l*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let l=r*n,o=a*n,c=0;c!==n;++c)e[o+c]=e[l+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Ec(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function bu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}gn.prototype.ValueTypeName="";gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=ao;var vi=class extends gn{constructor(t,e,n){super(t,e,n)}};vi.prototype.ValueTypeName="bool";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=cr;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ao=class extends gn{constructor(t,e,n,s){super(t,e,n,s)}};Ao.prototype.ValueTypeName="color";var Co=class extends gn{constructor(t,e,n,s){super(t,e,n,s)}};Co.prototype.ValueTypeName="number";var Ro=class extends yi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=(n-e)/(s-e),c=t*l;for(let h=c+l;c!==h;c+=4)Xn.slerpFlat(r,0,a,c-l,a,c,o);return r}},Br=class extends gn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ro(this.times,this.values,this.getValueSize(),t)}};Br.prototype.ValueTypeName="quaternion";Br.prototype.InterpolantFactoryMethodSmooth=void 0;var bi=class extends gn{constructor(t,e,n){super(t,e,n)}};bi.prototype.ValueTypeName="string";bi.prototype.ValueBufferType=Array;bi.prototype.DefaultInterpolation=cr;bi.prototype.InterpolantFactoryMethodLinear=void 0;bi.prototype.InterpolantFactoryMethodSmooth=void 0;var Po=class extends gn{constructor(t,e,n,s){super(t,e,n,s)}};Po.prototype.ValueTypeName="vector";var Ka={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Mu(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Mu(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Mu(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Io=class{constructor(t,e,n){let s=this,r=!1,a=0,l=0,o,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){l++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,l),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,l),a===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),o?o(h):h},this.setURLModifier=function(h){return o=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},xd=new Io,Ds=class{constructor(t){this.manager=t!==void 0?t:xd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ds.DEFAULT_MATERIAL_NAME="__DEFAULT";var gs=new WeakMap,Do=class extends Ds{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Ka.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let u=gs.get(a);u===void 0&&(u=[],gs.set(a,u)),u.push({onLoad:e,onError:s})}return a}let l=Ss("img");function o(){h(),e&&e(this);let u=gs.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}gs.delete(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),Ka.remove(`image:${t}`);let d=gs.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}gs.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){l.removeEventListener("load",o,!1),l.removeEventListener("error",c,!1)}return l.addEventListener("load",o,!1),l.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),Ka.add(`image:${t}`,l),r.manager.itemStart(t),l.src=t,l}};var Gr=class extends Ds{constructor(t){super(t)}load(t,e,n,s){let r=new nn,a=new Do(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(l){r.image=l,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},Ls=class extends ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Vr=class extends Ls{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new It(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Tc=new _e,Su=new P,wu=new P,Hr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new As,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Su.setFromMatrixPosition(t.matrixWorld),e.position.copy(Su),wu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Tc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Tc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,l=s?s.w/r.y:1,o=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Ms||t.reversedDepth?e.set(.5*a,0,0,.5*a+o,0,.5*l,0,.5*l+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+o,0,.5*l,0,.5*l+c,0,0,.5,.5,0,0,0,1),e.multiply(Tc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ya=new P,Za=new Xn,Bn=new P,Wr=class extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ya,Za,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ya,Za,Bn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ya,Za,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ya,Za,Bn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},mi=new P,Eu=new rt,Tu=new rt,We=class extends Wr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=oo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(tc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return oo*2*Math.atan(Math.tan(tc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(mi.x,mi.y).multiplyScalar(-t/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-t/mi.z)}getViewSize(t,e){return this.getViewBounds(t,Eu,Tu),e.subVectors(Tu,Eu)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(tc*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let o=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/o,e-=a.offsetY*n/c,s*=a.width/o,n*=a.height/c}let l=this.filmOffset;l!==0&&(r+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Uc=class extends Hr{constructor(){super(new We(90,1,.5,500)),this.isPointLightShadow=!0}},Hi=class extends Ls{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Uc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Mi=class extends Wr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,l=s+e,o=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,l-=h*this.view.offsetY,o=l-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Fc=class extends Hr{constructor(){super(new Mi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xr=class extends Ls{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.shadow=new Fc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var xs=-90,_s=1,Lo=class extends ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new We(xs,_s,t,e);s.layers=this.layers,this.add(s);let r=new We(xs,_s,t,e);r.layers=this.layers,this.add(r);let a=new We(xs,_s,t,e);a.layers=this.layers,this.add(a);let l=new We(xs,_s,t,e);l.layers=this.layers,this.add(l);let o=new We(xs,_s,t,e);o.layers=this.layers,this.add(o);let c=new We(xs,_s,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,l,o]=e;for(let c of e)this.remove(c);if(t===In)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===Ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,l,o,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},No=class extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},qr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Op.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Op(){this._document.hidden===!1&&this.reset()}var eh="\\[\\]\\.:\\/",zp=new RegExp("["+eh+"]","g"),nh="[^"+eh+"]",kp="[^"+eh.replace("\\.","")+"]",Bp=/((?:WC+[\/:])*)/.source.replace("WC",nh),Gp=/(WCOD+)?/.source.replace("WCOD",kp),Vp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nh),Hp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nh),Wp=new RegExp("^"+Bp+Gp+Vp+Hp+"$"),Xp=["material","materials","bones","map"],Oc=class{constructor(t,e,n){let s=n||we.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},we=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(zp,"")}static parseTrackName(t){let e=Wp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Xp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let l=r[a];if(l.name===e||l.uuid===e)return l;let o=n(l.children);if(o)return o}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Wt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ht("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ht("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ht("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ht("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Ht("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Ht("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}o=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(o=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(o=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};we.Composite=Oc;we.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};we.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};we.prototype.GetterByBindingType=[we.prototype._getValue_direct,we.prototype._getValue_array,we.prototype._getValue_arrayElement,we.prototype._getValue_toArray];we.prototype.SetterByBindingTypeAndVersioning=[[we.prototype._setValue_direct,we.prototype._setValue_direct_setNeedsUpdate,we.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[we.prototype._setValue_array,we.prototype._setValue_array_setNeedsUpdate,we.prototype._setValue_array_setMatrixWorldNeedsUpdate],[we.prototype._setValue_arrayElement,we.prototype._setValue_arrayElement_setNeedsUpdate,we.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[we.prototype._setValue_fromArray,we.prototype._setValue_fromArray_setNeedsUpdate,we.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var my=new Float32Array(1);var lh=class lh{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};lh.prototype.isMatrix2=!0;var zc=lh;function ih(i,t,e,n){let s=qp(n);switch(e){case Jc:return i*t;case Vo:return i*t/s.components*s.byteLength;case Ho:return i*t/s.components*s.byteLength;case Ai:return i*t*2/s.components*s.byteLength;case Wo:return i*t*2/s.components*s.byteLength;case $c:return i*t*3/s.components*s.byteLength;case Sn:return i*t*4/s.components*s.byteLength;case Xo:return i*t*4/s.components*s.byteLength;case ea:case na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ia:case sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Yo:case Jo:return Math.max(i,16)*Math.max(t,8)/4;case qo:case Zo:return Math.max(i,8)*Math.max(t,8)/2;case $o:case Ko:case Qo:case tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case jo:case ra:case el:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case nl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case il:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case sl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case rl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case al:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ol:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ll:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case cl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case hl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ul:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case dl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case fl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case pl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ml:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case gl:case xl:case _l:return Math.ceil(i/4)*Math.ceil(t/4)*16;case yl:case vl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case aa:case bl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function qp(i){switch(i){case un:case Xc:return{byteLength:1,components:1};case Fs:case qc:case Je:return{byteLength:2,components:1};case Bo:case Go:return{byteLength:2,components:4};case Nn:case ko:case Mn:return{byteLength:4,components:1};case Yc:case Zc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function kd(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Zp(i){let t=new WeakMap;function e(l,o){let c=l.array,h=l.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(o,d),i.bufferData(o,c,h),l.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)l.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:l.version,size:u}}function n(l,o,c){let h=o.array,u=o.updateRanges;if(i.bindBuffer(c,l),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],b=u[f];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++d,u[d]=b)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let b=u[f];i.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}o.clearUpdateRanges()}o.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let o=t.get(l);o&&(i.deleteBuffer(o.buffer),t.delete(l))}function a(l,o){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let h=t.get(l);(!h||h.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let c=t.get(l);if(c===void 0)t.set(l,e(l,o));else if(c.version<l.version){if(c.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,l,o),c.version=l.version}}return{get:s,remove:r,update:a}}var Jp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$p=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Kp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,em=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,im=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,sm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,am=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,om=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,lm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,mm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,gm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,_m=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ym=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,bm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Em="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Am=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Cm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Rm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Im=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Dm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Um=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Om=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,km=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Gm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Vm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ym=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$m=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Km=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,jm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,n0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,i0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,s0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,r0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,a0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,o0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,l0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,c0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,h0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,d0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,p0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,m0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,_0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,y0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,v0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,b0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,M0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,S0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,w0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,E0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,T0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,A0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,C0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,R0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,P0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,I0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,D0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,L0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,N0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,U0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,F0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,O0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,z0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,k0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,B0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,G0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,V0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,H0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,W0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,X0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Z0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,J0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ng=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ig=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ag=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,og=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ug=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_g=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Eg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ag=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qt={alphahash_fragment:Jp,alphahash_pars_fragment:$p,alphamap_fragment:Kp,alphamap_pars_fragment:jp,alphatest_fragment:Qp,alphatest_pars_fragment:tm,aomap_fragment:em,aomap_pars_fragment:nm,batching_pars_vertex:im,batching_vertex:sm,begin_vertex:rm,beginnormal_vertex:am,bsdfs:om,iridescence_fragment:lm,bumpmap_pars_fragment:cm,clipping_planes_fragment:hm,clipping_planes_pars_fragment:um,clipping_planes_pars_vertex:dm,clipping_planes_vertex:fm,color_fragment:pm,color_pars_fragment:mm,color_pars_vertex:gm,color_vertex:xm,common:_m,cube_uv_reflection_fragment:ym,defaultnormal_vertex:vm,displacementmap_pars_vertex:bm,displacementmap_vertex:Mm,emissivemap_fragment:Sm,emissivemap_pars_fragment:wm,colorspace_fragment:Em,colorspace_pars_fragment:Tm,envmap_fragment:Am,envmap_common_pars_fragment:Cm,envmap_pars_fragment:Rm,envmap_pars_vertex:Pm,envmap_physical_pars_fragment:Gm,envmap_vertex:Im,fog_vertex:Dm,fog_pars_vertex:Lm,fog_fragment:Nm,fog_pars_fragment:Um,gradientmap_pars_fragment:Fm,lightmap_pars_fragment:Om,lights_lambert_fragment:zm,lights_lambert_pars_fragment:km,lights_pars_begin:Bm,lights_toon_fragment:Vm,lights_toon_pars_fragment:Hm,lights_phong_fragment:Wm,lights_phong_pars_fragment:Xm,lights_physical_fragment:qm,lights_physical_pars_fragment:Ym,lights_fragment_begin:Zm,lights_fragment_maps:Jm,lights_fragment_end:$m,lightprobes_pars_fragment:Km,logdepthbuf_fragment:jm,logdepthbuf_pars_fragment:Qm,logdepthbuf_pars_vertex:t0,logdepthbuf_vertex:e0,map_fragment:n0,map_pars_fragment:i0,map_particle_fragment:s0,map_particle_pars_fragment:r0,metalnessmap_fragment:a0,metalnessmap_pars_fragment:o0,morphinstance_vertex:l0,morphcolor_vertex:c0,morphnormal_vertex:h0,morphtarget_pars_vertex:u0,morphtarget_vertex:d0,normal_fragment_begin:f0,normal_fragment_maps:p0,normal_pars_fragment:m0,normal_pars_vertex:g0,normal_vertex:x0,normalmap_pars_fragment:_0,clearcoat_normal_fragment_begin:y0,clearcoat_normal_fragment_maps:v0,clearcoat_pars_fragment:b0,iridescence_pars_fragment:M0,opaque_fragment:S0,packing:w0,premultiplied_alpha_fragment:E0,project_vertex:T0,dithering_fragment:A0,dithering_pars_fragment:C0,roughnessmap_fragment:R0,roughnessmap_pars_fragment:P0,shadowmap_pars_fragment:I0,shadowmap_pars_vertex:D0,shadowmap_vertex:L0,shadowmask_pars_fragment:N0,skinbase_vertex:U0,skinning_pars_vertex:F0,skinning_vertex:O0,skinnormal_vertex:z0,specularmap_fragment:k0,specularmap_pars_fragment:B0,tonemapping_fragment:G0,tonemapping_pars_fragment:V0,transmission_fragment:H0,transmission_pars_fragment:W0,uv_pars_fragment:X0,uv_pars_vertex:q0,uv_vertex:Y0,worldpos_vertex:Z0,background_vert:J0,background_frag:$0,backgroundCube_vert:K0,backgroundCube_frag:j0,cube_vert:Q0,cube_frag:tg,depth_vert:eg,depth_frag:ng,distance_vert:ig,distance_frag:sg,equirect_vert:rg,equirect_frag:ag,linedashed_vert:og,linedashed_frag:lg,meshbasic_vert:cg,meshbasic_frag:hg,meshlambert_vert:ug,meshlambert_frag:dg,meshmatcap_vert:fg,meshmatcap_frag:pg,meshnormal_vert:mg,meshnormal_frag:gg,meshphong_vert:xg,meshphong_frag:_g,meshphysical_vert:yg,meshphysical_frag:vg,meshtoon_vert:bg,meshtoon_frag:Mg,points_vert:Sg,points_frag:wg,shadow_vert:Eg,shadow_frag:Tg,sprite_vert:Ag,sprite_frag:Cg},_t={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Kn={basic:{uniforms:rn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:rn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new It(0)},envMapIntensity:{value:1}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:rn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:rn([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:rn([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new It(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:rn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:rn([_t.points,_t.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:rn([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:rn([_t.common,_t.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:rn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:rn([_t.sprite,_t.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distance:{uniforms:rn([_t.common,_t.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distance_vert,fragmentShader:Qt.distance_frag},shadow:{uniforms:rn([_t.lights,_t.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Kn.physical={uniforms:rn([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var wl={r:0,b:0,g:0},Rg=new _e,Bd=new Zt;Bd.set(-1,0,0,0,1,0,0,0,1);function Pg(i,t,e,n,s,r){let a=new It(0),l=s===!0?0:1,o,c,h=null,u=0,d=null;function f(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){let x=y.backgroundBlurriness>0;w=t.get(w,x)}return w}function g(y){let w=!1,x=f(y);x===null?m(a,l):x&&x.isColor&&(m(x,1),w=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(y,w){let x=f(w);x&&(x.isCubeTexture||x.mapping===Qr)?(c===void 0&&(c=new Ut(new sn(1,1,1),new Le({name:"BackgroundCubeMaterial",uniforms:Ji(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,S,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Rg.makeRotationFromEuler(w.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Bd),c.material.toneMapped=ne.getTransfer(x.colorSpace)!==he,(h!==x||u!==x.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,u=x.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(o===void 0&&(o=new Ut(new cn(2,2),new Le({name:"BackgroundMaterial",uniforms:Ji(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(o)),o.material.uniforms.t2D.value=x,o.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,o.material.toneMapped=ne.getTransfer(x.colorSpace)!==he,x.matrixAutoUpdate===!0&&x.updateMatrix(),o.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||u!==x.version||d!==i.toneMapping)&&(o.material.needsUpdate=!0,h=x,u=x.version,d=i.toneMapping),o.layers.enableAll(),y.unshift(o,o.geometry,o.material,0,0,null))}function m(y,w){y.getRGB(wl,th(i)),e.buffers.color.setClear(wl.r,wl.g,wl.b,w,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,w=1){a.set(y),l=w,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(a,l)},render:g,addToRenderList:b,dispose:p}}function Ig(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function l(L,U,k,N,B){let q=!1,X=u(L,N,k,U);r!==X&&(r=X,c(r.object)),q=f(L,N,k,B),q&&g(L,N,k,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,x(L,U,k,N),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function o(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function u(L,U,k,N){let B=N.wireframe===!0,q=n[U.id];q===void 0&&(q={},n[U.id]=q);let X=L.isInstancedMesh===!0?L.id:0,nt=q[X];nt===void 0&&(nt={},q[X]=nt);let Y=nt[k.id];Y===void 0&&(Y={},nt[k.id]=Y);let Q=Y[B];return Q===void 0&&(Q=d(o()),Y[B]=Q),Q}function d(L){let U=[],k=[],N=[];for(let B=0;B<e;B++)U[B]=0,k[B]=0,N[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:k,attributeDivisors:N,object:L,attributes:{},index:null}}function f(L,U,k,N){let B=r.attributes,q=U.attributes,X=0,nt=k.getAttributes();for(let Y in nt)if(nt[Y].location>=0){let it=B[Y],Nt=q[Y];if(Nt===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(Nt=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(Nt=L.instanceColor)),it===void 0||it.attribute!==Nt||Nt&&it.data!==Nt.data)return!0;X++}return r.attributesNum!==X||r.index!==N}function g(L,U,k,N){let B={},q=U.attributes,X=0,nt=k.getAttributes();for(let Y in nt)if(nt[Y].location>=0){let it=q[Y];it===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(it=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(it=L.instanceColor));let Nt={};Nt.attribute=it,it&&it.data&&(Nt.data=it.data),B[Y]=Nt,X++}r.attributes=B,r.attributesNum=X,r.index=N}function b(){let L=r.newAttributes;for(let U=0,k=L.length;U<k;U++)L[U]=0}function m(L){p(L,0)}function p(L,U){let k=r.newAttributes,N=r.enabledAttributes,B=r.attributeDivisors;k[L]=1,N[L]===0&&(i.enableVertexAttribArray(L),N[L]=1),B[L]!==U&&(i.vertexAttribDivisor(L,U),B[L]=U)}function y(){let L=r.newAttributes,U=r.enabledAttributes;for(let k=0,N=U.length;k<N;k++)U[k]!==L[k]&&(i.disableVertexAttribArray(k),U[k]=0)}function w(L,U,k,N,B,q,X){X===!0?i.vertexAttribIPointer(L,U,k,B,q):i.vertexAttribPointer(L,U,k,N,B,q)}function x(L,U,k,N){b();let B=N.attributes,q=k.getAttributes(),X=U.defaultAttributeValues;for(let nt in q){let Y=q[nt];if(Y.location>=0){let Q=B[nt];if(Q===void 0&&(nt==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),nt==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor)),Q!==void 0){let it=Q.normalized,Nt=Q.itemSize,At=t.get(Q);if(At===void 0)continue;let ue=At.buffer,ie=At.type,oe=At.bytesPerElement,$=ie===i.INT||ie===i.UNSIGNED_INT||Q.gpuType===ko;if(Q.isInterleavedBufferAttribute){let tt=Q.data,yt=tt.stride,Xt=Q.offset;if(tt.isInstancedInterleavedBuffer){for(let wt=0;wt<Y.locationSize;wt++)p(Y.location+wt,tt.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let wt=0;wt<Y.locationSize;wt++)m(Y.location+wt);i.bindBuffer(i.ARRAY_BUFFER,ue);for(let wt=0;wt<Y.locationSize;wt++)w(Y.location+wt,Nt/Y.locationSize,ie,it,yt*oe,(Xt+Nt/Y.locationSize*wt)*oe,$)}else{if(Q.isInstancedBufferAttribute){for(let tt=0;tt<Y.locationSize;tt++)p(Y.location+tt,Q.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let tt=0;tt<Y.locationSize;tt++)m(Y.location+tt);i.bindBuffer(i.ARRAY_BUFFER,ue);for(let tt=0;tt<Y.locationSize;tt++)w(Y.location+tt,Nt/Y.locationSize,ie,it,Nt*oe,Nt/Y.locationSize*tt*oe,$)}}else if(X!==void 0){let it=X[nt];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv(Y.location,it);break;case 3:i.vertexAttrib3fv(Y.location,it);break;case 4:i.vertexAttrib4fv(Y.location,it);break;default:i.vertexAttrib1fv(Y.location,it)}}}}y()}function M(){T();for(let L in n){let U=n[L];for(let k in U){let N=U[k];for(let B in N){let q=N[B];for(let X in q)h(q[X].object),delete q[X];delete N[B]}}delete n[L]}}function S(L){if(n[L.id]===void 0)return;let U=n[L.id];for(let k in U){let N=U[k];for(let B in N){let q=N[B];for(let X in q)h(q[X].object),delete q[X];delete N[B]}}delete n[L.id]}function C(L){for(let U in n){let k=n[U];for(let N in k){let B=k[N];if(B[L.id]===void 0)continue;let q=B[L.id];for(let X in q)h(q[X].object),delete q[X];delete B[L.id]}}}function v(L){for(let U in n){let k=n[U],N=L.isInstancedMesh===!0?L.id:0,B=k[N];if(B!==void 0){for(let q in B){let X=B[q];for(let nt in X)h(X[nt].object),delete X[nt];delete B[q]}delete k[N],Object.keys(k).length===0&&delete n[U]}}}function T(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:T,resetDefaultState:R,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:b,enableAttribute:m,disableUnusedAttributes:y}}function Dg(i,t,e){let n;function s(o){n=o}function r(o,c){i.drawArrays(n,o,c),e.update(c,n,1)}function a(o,c,h){h!==0&&(i.drawArraysInstanced(n,o,c,h),e.update(c,n,h))}function l(o,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,o,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l}function Lg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Sn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(C){let v=C===Je&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==un&&C!==Mn&&!v&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function o(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=o(c);h!==c&&(Wt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&Wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:o,textureFormatReadable:a,textureTypeReadable:l,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:x,maxSamples:M,samples:S}}function Ng(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Pn,l=new Zt,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,b=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,w=y*4,x=p.clippingState||null;o.value=x,x=h(g,d,w,f);for(let M=0;M!==w;++M)x[M]=e[M];p.clippingState=x,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=y}};function c(){o.value!==e&&(o.value=e,o.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let b=u!==null?u.length:0,m=null;if(b!==0){if(m=o.value,g!==!0||m===null){let p=f+b*4,y=d.matrixWorldInverse;l.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,x=f;w!==b;++w,x+=4)a.copy(u[w]).applyMatrix4(y,l),a.normal.toArray(m,x),m[x+3]=a.constant}o.value=m,o.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,m}}var ks=4,Ug=6,Fg=20,Og=256,la=new Mi,_d=new It,ch=null,hh=0,uh=0,dh=!1,zg=new P,$i=new P,Gs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:l=zg}=r;ch=this._renderer.getRenderTarget(),hh=this._renderer.getActiveCubeFace(),uh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o,l),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ch,hh,uh),this._renderer.xr.enabled=dh,t.scissorTest=!1,zs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===wi||t.mapping===Zi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ch=this._renderer.getRenderTarget(),hh=this._renderer.getActiveCubeFace(),uh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:Je,format:Sn,colorSpace:hr,depthBuffer:!1},s=yd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yd(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=kg(r)),this._blurMaterial=Gg(r,t,e),this._ggxMaterial=Bg(r,t,e)}return s}_compileMaterial(t){let e=new Ut(new Pe,t);this._renderer.compile(e,la)}_sceneToCubeUV(t,e,n,s,r){let o=new We(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(_d),u.toneMapping=Ln,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ut(new sn,new Dn({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,m=b.material,p=!1,y=t.background;y?y.isColor&&(m.color.copy(y),t.background=null,p=!0):(m.color.copy(_d),p=!0);for(let w=0;w<6;w++){let x=w%3;x===0?(o.up.set(0,c[w],0),o.position.set(r.x,r.y,r.z),o.lookAt(r.x+h[w],r.y,r.z)):x===1?(o.up.set(0,0,c[w]),o.position.set(r.x,r.y,r.z),o.lookAt(r.x,r.y+h[w],r.z)):(o.up.set(0,c[w],0),o.position.set(r.x,r.y,r.z),o.lookAt(r.x,r.y,r.z+h[w]));let M=this._cubeSize;zs(s,x*M,w>2?M:0,M,M),u.setRenderTarget(s),p&&u.render(b,o),u.render(t,o)}u.toneMapping=f,u.autoClear=d,t.background=y}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===wi||t.mapping===Zi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let l=r.uniforms;l.envMap.value=t;let o=this._cubeSize;zs(e,0,0,3*o,2*o),n.setRenderTarget(e),n.render(a,la)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[n];l.material=a;let o=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,f=u*d,{_lodMax:g}=this,b=this._sizeLods[n],m=3*b*(n>g-ks?n-g+ks:0),p=4*(this._cubeSize-b);o.envMap.value=t.texture,o.roughness.value=f,o.mipInt.value=g-e,zs(r,m,p,3*b,2*b),s.setRenderTarget(r),s.render(l,la),o.envMap.value=r.texture,o.roughness.value=0,o.mipInt.value=g-n,zs(t,m,p,3*b,2*b),s.setRenderTarget(t),s.render(l,la)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,l=this._blurMaterial,o=this._lodMeshes[s];o.material=l;let c=l.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-ks?s-this._lodMax+ks:0),d=4*(this._cubeSize-h);zs(e,u,d,3*h,2*h),a.setRenderTarget(e),a.render(o,la)}};function kg(i){let t=[],e=[],n=i,s=i-ks+1+Ug;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let l=1/(a-2),o=-l,c=1+l,h=[o,o,c,o,c,c,o,o,c,c,o,c],u=6,d=6,f=3,g=new Float32Array(f*d*u),b=new Float32Array(f*d*u);for(let p=0;p<u;p++){let y=p%3*2/3-1,w=p>2?0:-1,x=[y,w,0,y+2/3,w,0,y+2/3,w+1,0,y,w,0,y+2/3,w+1,0,y,w+1,0];g.set(x,f*d*p);for(let M=0;M<d;M++){let S=h[M*2]*2-1,C=h[M*2+1]*2-1;p===0?$i.set(1,C,S):p===1?$i.set(-S,1,-C):p===2?$i.set(-S,C,1):p===3?$i.set(-1,C,-S):p===4?$i.set(-S,-1,C):$i.set(S,C,-1),$i.toArray(b,(p*d+M)*f)}}let m=new Pe;m.setAttribute("position",new hn(g,f)),m.setAttribute("outputDirection",new hn(b,f)),e.push(new Ut(m,null)),n>ks&&n--}return{lodMeshes:e,sizeLods:t}}function yd(i,t,e){let n=new Oe(i,t,e);return n.texture.mapping=Qr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Bg(i,t,e){return new Le({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Og,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Cl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Gg(i,t,e){return new Le({name:"SphericalGaussianBlur",defines:{SAMPLES:Fg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Cl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function vd(){return new Le({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function bd(){return new Le({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Cl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Tl=class extends Oe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Mr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new sn(5,5,5),r=new Le({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ye,blending:bn});r.uniforms.tEquirect.value=e;let a=new Ut(s,r),l=e.minFilter;return e.minFilter===Ei&&(e.minFilter=Xe),new Lo(1,10,this).update(t,a),e.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Vg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Us||f===Oo)if(t.has(d)){let g=t.get(d).texture;return l(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let b=new Tl(g.height);return b.fromEquirectangularTexture(i,d),t.set(d,b),d.addEventListener("dispose",c),l(b.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,g=f===Us||f===Oo,b=f===wi||f===Zi;if(g||b){let m=e.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Gs(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let y=d.image;return g&&y&&y.height>0||b&&y&&o(y)?(n===null&&(n=new Gs(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function l(d,f){return f===Us?d.mapping=wi:f===Oo&&(d.mapping=Zi),d}function o(d){let f=0,g=6;for(let b=0;b<g;b++)d[b]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Hg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Fi("WebGLRenderer: "+n+" extension not supported."),s}}}function Wg(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function l(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function o(u){let d=u.attributes;for(let f in d)t.update(d[f],i.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,g=u.attributes.position,b=0;if(g===void 0)return;if(f!==null){let y=f.array;b=f.version;for(let w=0,x=y.length;w<x;w+=3){let M=y[w+0],S=y[w+1],C=y[w+2];d.push(M,S,S,C,C,M)}}else{let y=g.array;b=g.version;for(let w=0,x=y.length/3-1;w<x;w+=3){let M=w+0,S=w+1,C=w+2;d.push(M,S,S,C,C,M)}}let m=new(g.count>=65535?xr:gr)(d,1);m.version=b;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:l,update:o,getWireframeAttribute:h}}function Xg(i,t,e){let n;function s(u){n=u}let r,a;function l(u){r=u.type,a=u.bytesPerElement}function o(u,d){i.drawElements(n,d,r,u*a),e.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let b=0;for(let m=0;m<f;m++)b+=d[m];e.update(b,n,1)}this.setMode=s,this.setIndex=l,this.render=o,this.renderInstances=c,this.renderMultiDraw=h}function qg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,l){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=l*(r/3);break;case i.LINES:e.lines+=l*(r/2);break;case i.LINE_STRIP:e.lines+=l*(r-1);break;case i.LINE_LOOP:e.lines+=l*r;break;case i.POINTS:e.points+=l*r;break;default:Ht("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Yg(i,t,e){let n=new WeakMap,s=new Ee;function r(a,l,o){let c=a.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(l);if(d===void 0||d.count!==u){let T=function(){C.dispose(),n.delete(l),l.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let f=l.morphAttributes.position!==void 0,g=l.morphAttributes.normal!==void 0,b=l.morphAttributes.color!==void 0,m=l.morphAttributes.position||[],p=l.morphAttributes.normal||[],y=l.morphAttributes.color||[],w=0;f===!0&&(w=1),g===!0&&(w=2),b===!0&&(w=3);let x=l.attributes.position.count*w,M=1;x>t.maxTextureSize&&(M=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let S=new Float32Array(x*M*4*u),C=new fr(S,x,M,u);C.type=Mn,C.needsUpdate=!0;let v=w*4;for(let R=0;R<u;R++){let L=m[R],U=p[R],k=y[R],N=x*M*4*R;for(let B=0;B<L.count;B++){let q=B*v;f===!0&&(s.fromBufferAttribute(L,B),S[N+q+0]=s.x,S[N+q+1]=s.y,S[N+q+2]=s.z,S[N+q+3]=0),g===!0&&(s.fromBufferAttribute(U,B),S[N+q+4]=s.x,S[N+q+5]=s.y,S[N+q+6]=s.z,S[N+q+7]=0),b===!0&&(s.fromBufferAttribute(k,B),S[N+q+8]=s.x,S[N+q+9]=s.y,S[N+q+10]=s.z,S[N+q+11]=k.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new rt(x,M)},n.set(l,d),l.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)o.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let b=0;b<c.length;b++)f+=c[b];let g=l.morphTargetsRelative?1:1-f;o.getUniforms().setValue(i,"morphTargetBaseInfluence",g),o.getUniforms().setValue(i,"morphTargetInfluences",c)}o.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),o.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Zg(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function l(){r=new WeakMap}function o(c){let h=c.target;h.removeEventListener("dispose",o),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:l}}var Jg={[Yr]:"LINEAR_TONE_MAPPING",[Zr]:"REINHARD_TONE_MAPPING",[Jr]:"CINEON_TONE_MAPPING",[Yi]:"ACES_FILMIC_TONE_MAPPING",[Kr]:"AGX_TONE_MAPPING",[jr]:"NEUTRAL_TONE_MAPPING",[$r]:"CUSTOM_TONE_MAPPING"};function $g(i,t,e,n,s,r){let a=new Oe(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,o=null,c=new Pe;c.setAttribute("position",new ee([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ee([0,2,0,0,2,0],2));let h=new Is({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Ut(c,h),d=new Mi(-1,1,1,-1,0,1),f=null,g=null,b=!1,m,p=null,y=[],w=!1;this.setSize=function(x,M){a.setSize(x,M),l!==null&&l.setSize(x,M),o!==null&&o.setSize(x,M);for(let S=0;S<y.length;S++){let C=y[S];C.setSize&&C.setSize(x,M)}},this.setEffects=function(x){y=x,w=y.length>0&&y[0].isRenderPass===!0;let M=a.width,S=a.height;y.length>0&&l===null&&(l=new Oe(M,S,{type:Je,depthBuffer:!1,stencilBuffer:!1}),o=new Oe(M,S,{type:Je,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<y.length;C++){let v=y[C];v.setSize&&v.setSize(M,S)}},this.begin=function(x,M){if(b||x.toneMapping===Ln&&y.length===0)return!1;if(p=M,M!==null){let S=M.width,C=M.height;(a.width!==S||a.height!==C)&&this.setSize(S,C)}return w===!1&&x.setRenderTarget(a),m=x.toneMapping,x.toneMapping=Ln,!0},this.hasRenderPass=function(){return w},this.end=function(x,M){x.toneMapping=m,b=!0;let S=a,C=l;for(let v=0;v<y.length;v++){let T=y[v];T.enabled!==!1&&(T.render(x,C,S,M),T.needsSwap!==!1&&(S=C,C=C===l?o:l))}if(f!==x.outputColorSpace||g!==x.toneMapping){f=x.outputColorSpace,g=x.toneMapping,h.defines={},ne.getTransfer(f)===he&&(h.defines.SRGB_TRANSFER="");let v=Jg[g];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,x.setRenderTarget(p),x.render(u,d),p=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),o!==null&&o.dispose(),c.dispose(),h.dispose()}}var Gd=new nn,mh=new _i(1,1),Vd=new fr,Hd=new ho,Wd=new Mr,Md=[],Sd=[],wd=new Float32Array(16),Ed=new Float32Array(9),Td=new Float32Array(4);function Vs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Md[s];if(r===void 0&&(r=new Float32Array(s),Md[s]=r),t!==0){n.toArray(r,0);for(let a=1,l=0;a!==t;++a)l+=e,i[a].toArray(r,l)}return r}function Be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Rl(i,t){let e=Sd[t];e===void 0&&(e=new Int32Array(t),Sd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Kg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2fv(this.addr,t),Ge(e,t)}}function Qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;i.uniform3fv(this.addr,t),Ge(e,t)}}function tx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4fv(this.addr,t),Ge(e,t)}}function ex(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(Be(e,n))return;Td.set(n),i.uniformMatrix2fv(this.addr,!1,Td),Ge(e,n)}}function nx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(Be(e,n))return;Ed.set(n),i.uniformMatrix3fv(this.addr,!1,Ed),Ge(e,n)}}function ix(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(Be(e,n))return;wd.set(n),i.uniformMatrix4fv(this.addr,!1,wd),Ge(e,n)}}function sx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function rx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2iv(this.addr,t),Ge(e,t)}}function ax(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3iv(this.addr,t),Ge(e,t)}}function ox(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4iv(this.addr,t),Ge(e,t)}}function lx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function cx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2uiv(this.addr,t),Ge(e,t)}}function hx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3uiv(this.addr,t),Ge(e,t)}}function ux(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4uiv(this.addr,t),Ge(e,t)}}function dx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(mh.compareFunction=e.isReversedDepthBuffer()?Sl:Ml,r=mh):r=Gd,e.setTexture2D(t||r,s)}function fx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Hd,s)}function px(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Wd,s)}function mx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Vd,s)}function gx(i){switch(i){case 5126:return Kg;case 35664:return jg;case 35665:return Qg;case 35666:return tx;case 35674:return ex;case 35675:return nx;case 35676:return ix;case 5124:case 35670:return sx;case 35667:case 35671:return rx;case 35668:case 35672:return ax;case 35669:case 35673:return ox;case 5125:return lx;case 36294:return cx;case 36295:return hx;case 36296:return ux;case 35678:case 36198:case 36298:case 36306:case 35682:return dx;case 35679:case 36299:case 36307:return fx;case 35680:case 36300:case 36308:case 36293:return px;case 36289:case 36303:case 36311:case 36292:return mx}}function xx(i,t){i.uniform1fv(this.addr,t)}function _x(i,t){let e=Vs(t,this.size,2);i.uniform2fv(this.addr,e)}function yx(i,t){let e=Vs(t,this.size,3);i.uniform3fv(this.addr,e)}function vx(i,t){let e=Vs(t,this.size,4);i.uniform4fv(this.addr,e)}function bx(i,t){let e=Vs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Mx(i,t){let e=Vs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Sx(i,t){let e=Vs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function wx(i,t){i.uniform1iv(this.addr,t)}function Ex(i,t){i.uniform2iv(this.addr,t)}function Tx(i,t){i.uniform3iv(this.addr,t)}function Ax(i,t){i.uniform4iv(this.addr,t)}function Cx(i,t){i.uniform1uiv(this.addr,t)}function Rx(i,t){i.uniform2uiv(this.addr,t)}function Px(i,t){i.uniform3uiv(this.addr,t)}function Ix(i,t){i.uniform4uiv(this.addr,t)}function Dx(i,t,e){let n=this.cache,s=t.length,r=Rl(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=mh:a=Gd;for(let l=0;l!==s;++l)e.setTexture2D(t[l]||a,r[l])}function Lx(i,t,e){let n=this.cache,s=t.length,r=Rl(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Hd,r[a])}function Nx(i,t,e){let n=this.cache,s=t.length,r=Rl(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Wd,r[a])}function Ux(i,t,e){let n=this.cache,s=t.length,r=Rl(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Vd,r[a])}function Fx(i){switch(i){case 5126:return xx;case 35664:return _x;case 35665:return yx;case 35666:return vx;case 35674:return bx;case 35675:return Mx;case 35676:return Sx;case 5124:case 35670:return wx;case 35667:case 35671:return Ex;case 35668:case 35672:return Tx;case 35669:case 35673:return Ax;case 5125:return Cx;case 36294:return Rx;case 36295:return Px;case 36296:return Ix;case 35678:case 36198:case 36298:case 36306:case 35682:return Dx;case 35679:case 36299:case 36307:return Lx;case 35680:case 36300:case 36308:case 36293:return Nx;case 36289:case 36303:case 36311:case 36292:return Ux}}var gh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=gx(e.type)}},xh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Fx(e.type)}},_h=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let l=s[r];l.setValue(t,e[l.id],n)}}},fh=/(\w+)(\])?(\[|\.)?/g;function Ad(i,t){i.seq.push(t),i.map[t.id]=t}function Ox(i,t,e){let n=i.name,s=n.length;for(fh.lastIndex=0;;){let r=fh.exec(n),a=fh.lastIndex,l=r[1],o=r[2]==="]",c=r[3];if(o&&(l=l|0),c===void 0||c==="["&&a+2===s){Ad(e,c===void 0?new gh(l,i,t):new xh(l,i,t));break}else{let u=e.map[l];u===void 0&&(u=new _h(l),Ad(e,u)),e=u}}}var Bs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let l=t.getActiveUniform(e,a),o=t.getUniformLocation(e,l.name);Ox(l,o,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let l=e[r],o=n[l.id];o.needsUpdate!==!1&&l.setValue(t,o.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Cd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var zx=37297,kx=0;function Bx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let l=a+1;n.push(`${l===t?">":" "} ${l}: ${e[a]}`)}return n.join(`
`)}var Rd=new Zt;function Gx(i){ne._getMatrix(Rd,ne.workingColorSpace,i);let t=`mat3( ${Rd.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(i)){case ur:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return Wt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Pd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let l=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Bx(i.getShaderSource(t),l)}else return r}function Vx(i,t){let e=Gx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Hx={[Yr]:"Linear",[Zr]:"Reinhard",[Jr]:"Cineon",[Yi]:"ACESFilmic",[Kr]:"AgX",[jr]:"Neutral",[$r]:"Custom"};function Wx(i,t){let e=Hx[t];return e===void 0?(Wt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var El=new P;function Xx(){ne.getLuminanceCoefficients(El);let i=El.x.toFixed(4),t=El.y.toFixed(4),e=El.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ha).join(`
`)}function Yx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Zx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:l}}return e}function ha(i){return i!==""}function Id(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Dd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Jx=/^[ \t]*#include +<([\w\d./]+)>/gm;function yh(i){return i.replace(Jx,Kx)}var $x=new Map;function Kx(i,t){let e=Qt[t];if(e===void 0){let n=$x.get(t);if(n!==void 0)e=Qt[n],Wt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return yh(e)}var jx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ld(i){return i.replace(jx,Qx)}function Qx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var t_={[Wi]:"SHADOWMAP_TYPE_PCF",[Ns]:"SHADOWMAP_TYPE_VSM"};function e_(i){return t_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var n_={[wi]:"ENVMAP_TYPE_CUBE",[Zi]:"ENVMAP_TYPE_CUBE",[Qr]:"ENVMAP_TYPE_CUBE_UV"};function i_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":n_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var s_={[Zi]:"ENVMAP_MODE_REFRACTION"};function r_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":s_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var a_={[Fo]:"ENVMAP_BLENDING_MULTIPLY",[Zu]:"ENVMAP_BLENDING_MIX",[Ju]:"ENVMAP_BLENDING_ADD"};function o_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":a_[i.combine]||"ENVMAP_BLENDING_NONE"}function l_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function c_(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,l=e.fragmentShader,o=e_(e),c=i_(e),h=r_(e),u=o_(e),d=l_(e),f=qx(e),g=Yx(r),b=s.createProgram(),m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ha).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ha).join(`
`),p.length>0&&(p+=`
`)):(m=[Nd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ha).join(`
`),p=[Nd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ln?"#define TONE_MAPPING":"",e.toneMapping!==Ln?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Ln?Wx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,Vx("linearToOutputTexel",e.outputColorSpace),Xx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ha).join(`
`)),a=yh(a),a=Id(a,e),a=Dd(a,e),l=yh(l),l=Id(l,e),l=Dd(l,e),a=Ld(a),l=Ld(l),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=y+m+a,x=y+p+l,M=Cd(s,s.VERTEX_SHADER,w),S=Cd(s,s.FRAGMENT_SHADER,x);s.attachShader(b,M),s.attachShader(b,S),e.index0AttributeName!==void 0?s.bindAttribLocation(b,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function C(L){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(b)||"",k=s.getShaderInfoLog(M)||"",N=s.getShaderInfoLog(S)||"",B=U.trim(),q=k.trim(),X=N.trim(),nt=!0,Y=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(nt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,M,S);else{let Q=Pd(s,M,"vertex"),it=Pd(s,S,"fragment");Ht("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+B+`
`+Q+`
`+it)}else B!==""?Wt("WebGLProgram: Program Info Log:",B):(q===""||X==="")&&(Y=!1);Y&&(L.diagnostics={runnable:nt,programLog:B,vertexShader:{log:q,prefix:m},fragmentShader:{log:X,prefix:p}})}s.deleteShader(M),s.deleteShader(S),v=new Bs(s,b),T=Zx(s,b)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(b,zx)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=kx++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=M,this.fragmentShader=S,this}var h_=0,vh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new bh(t),e.set(t,n)),n}},bh=class{constructor(t){this.id=h_++,this.code=t,this.usedTimes=0}};function u_(i){return i===Ai||i===ra||i===aa}function d_(i,t,e,n,s,r){let a=new pr,l=new vh,o=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return o.add(v),v===0?"uv":`uv${v}`}function b(v,T,R,L,U,k){let N=L.fog,B=U.geometry,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,nt=t.get(v.envMap||q,X),Y=nt&&nt.mapping===Qr?nt.image.height:null,Q=f[v.type];v.precision!==null&&(d=n.getMaxPrecision(v.precision),d!==v.precision&&Wt("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));let it=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Nt=it!==void 0?it.length:0,At=0;B.morphAttributes.position!==void 0&&(At=1),B.morphAttributes.normal!==void 0&&(At=2),B.morphAttributes.color!==void 0&&(At=3);let ue,ie,oe,$;if(Q){let ve=Kn[Q];ue=ve.vertexShader,ie=ve.fragmentShader}else{ue=v.vertexShader,ie=v.fragmentShader;let ve=l.getVertexShaderStage(v),fe=l.getFragmentShaderStage(v);l.update(v,ve,fe),oe=ve.id,$=fe.id}let tt=i.getRenderTarget(),yt=i.state.buffers.depth.getReversed(),Xt=U.isInstancedMesh===!0,wt=U.isBatchedMesh===!0,qt=!!v.map,me=!!v.matcap,et=!!nt,at=!!v.aoMap,ot=!!v.lightMap,lt=!!v.bumpMap&&v.wireframe===!1,ut=!!v.normalMap,Gt=!!v.displacementMap,kt=!!v.emissiveMap,Yt=!!v.metalnessMap,Jt=!!v.roughnessMap,D=v.anisotropy>0,de=v.clearcoat>0,se=v.dispersion>0,A=v.retroreflectivity>0,_=v.iridescence>0,z=v.sheen>0,H=v.transmission>0,Z=D&&!!v.anisotropyMap,ct=de&&!!v.clearcoatMap,ht=de&&!!v.clearcoatNormalMap,J=de&&!!v.clearcoatRoughnessMap,j=_&&!!v.iridescenceMap,dt=_&&!!v.iridescenceThicknessMap,Ft=z&&!!v.sheenColorMap,xt=z&&!!v.sheenRoughnessMap,ft=!!v.specularMap,Ot=!!v.specularColorMap,Vt=!!v.specularIntensityMap,$t=H&&!!v.transmissionMap,O=H&&!!v.thicknessMap,pt=!!v.gradientMap,K=!!v.alphaMap,mt=v.alphaTest>0,Mt=!!v.alphaHash,st=!!v.extensions,zt=Ln;v.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(zt=i.toneMapping);let Dt={shaderID:Q,shaderType:v.type,shaderName:v.name,vertexShader:ue,fragmentShader:ie,defines:v.defines,customVertexShaderID:oe,customFragmentShaderID:$,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:wt,batchingColor:wt&&U._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&U.instanceColor!==null,instancingMorph:Xt&&U.morphTexture!==null,outputColorSpace:tt===null?i.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:ne.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:qt,matcap:me,envMap:et,envMapMode:et&&nt.mapping,envMapCubeUVHeight:Y,aoMap:at,lightMap:ot,bumpMap:lt,normalMap:ut,displacementMap:Gt,emissiveMap:kt,normalMapObjectSpace:ut&&v.normalMapType===ju,normalMapTangentSpace:ut&&v.normalMapType===oa,packedNormalMap:ut&&v.normalMapType===oa&&u_(v.normalMap.format),metalnessMap:Yt,roughnessMap:Jt,anisotropy:D,anisotropyMap:Z,clearcoat:de,clearcoatMap:ct,clearcoatNormalMap:ht,clearcoatRoughnessMap:J,dispersion:se,retroreflection:A,iridescence:_,iridescenceMap:j,iridescenceThicknessMap:dt,sheen:z,sheenColorMap:Ft,sheenRoughnessMap:xt,specularMap:ft,specularColorMap:Ot,specularIntensityMap:Vt,transmission:H,transmissionMap:$t,thicknessMap:O,gradientMap:pt,opaque:v.transparent===!1&&v.blending===Si&&v.alphaToCoverage===!1,alphaMap:K,alphaTest:mt,alphaHash:Mt,combine:v.combine,mapUv:qt&&g(v.map.channel),aoMapUv:at&&g(v.aoMap.channel),lightMapUv:ot&&g(v.lightMap.channel),bumpMapUv:lt&&g(v.bumpMap.channel),normalMapUv:ut&&g(v.normalMap.channel),displacementMapUv:Gt&&g(v.displacementMap.channel),emissiveMapUv:kt&&g(v.emissiveMap.channel),metalnessMapUv:Yt&&g(v.metalnessMap.channel),roughnessMapUv:Jt&&g(v.roughnessMap.channel),anisotropyMapUv:Z&&g(v.anisotropyMap.channel),clearcoatMapUv:ct&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ht&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:xt&&g(v.sheenRoughnessMap.channel),specularMapUv:ft&&g(v.specularMap.channel),specularColorMapUv:Ot&&g(v.specularColorMap.channel),specularIntensityMapUv:Vt&&g(v.specularIntensityMap.channel),transmissionMapUv:$t&&g(v.transmissionMap.channel),thicknessMapUv:O&&g(v.thicknessMap.channel),alphaMapUv:K&&g(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ut||D),vertexNormals:!!B.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!B.attributes.uv&&(qt||K),fog:!!N,useFog:v.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||B.attributes.normal===void 0&&ut===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:yt,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Nt,morphTextureStride:At,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:zt,decodeVideoTexture:qt&&v.map.isVideoTexture===!0&&ne.getTransfer(v.map.colorSpace)===he,decodeVideoTextureEmissive:kt&&v.emissiveMap.isVideoTexture===!0&&ne.getTransfer(v.emissiveMap.colorSpace)===he,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ze,flipSided:v.side===Ye,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:st&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&v.extensions.multiDraw===!0||wt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Dt.vertexUv1s=o.has(1),Dt.vertexUv2s=o.has(2),Dt.vertexUv3s=o.has(3),o.clear(),Dt}function m(v){let T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(let R in v.defines)T.push(R),T.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(p(T,v),y(T,v),T.push(i.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function p(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numSunLights),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numSunLightShadows),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function y(v,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function w(v){let T=f[v.type],R;if(T){let L=Kn[T];R=ai.clone(L.uniforms)}else R=v.uniforms;return R}function x(v,T){let R=h.get(T);return R!==void 0?++R.usedTimes:(R=new c_(i,T,v,s),c.push(R),h.set(T,R)),R}function M(v){if(--v.usedTimes===0){let T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function S(v){l.remove(v)}function C(){l.dispose()}return{getParameters:b,getProgramCacheKey:m,getUniforms:w,acquireProgram:x,releaseProgram:M,releaseShaderCache:S,programs:c,dispose:C}}function f_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function s(a,l,o){i.get(a)[l]=o}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function p_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Ud(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Fd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function l(d,f,g,b,m,p){let y=i[t];return y===void 0?(y={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:b,renderOrder:d.renderOrder,z:m,group:p},i[t]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=g,y.materialVariant=a(d),y.groupOrder=b,y.renderOrder=d.renderOrder,y.z=m,y.group=p),t++,y}function o(d,f,g,b,m,p,y){y.reversedDepth===!0&&(m=-m);let w=l(d,f,g,b,m,p);g.transmission>0?n.push(w):g.transparent===!0?s.push(w):e.push(w)}function c(d,f,g,b,m,p){let y=l(d,f,g,b,m,p);g.transmission>0?n.unshift(y):g.transparent===!0?s.unshift(y):e.unshift(y)}function h(d,f){e.length>1&&e.sort(d||p_),n.length>1&&n.sort(f||Ud),s.length>1&&s.sort(f||Ud)}function u(){for(let d=t,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:h}}function m_(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Fd,i.set(n,[a])):s>=r.length?(a=new Fd,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function g_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new It};break;case"SpotLight":e={position:new P,direction:new P,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function x_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var __=0;function y_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function v_(i){let t=new g_,e=x_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new _e,a=new _e;function l(c){let h=0,u=0,d=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,g=0,b=0,m=0,p=0,y=0,w=0,x=0,M=0,S=0,C=0,v=0,T=0,R=0;c.sort(y_);for(let U=0,k=c.length;U<k;U++){let N=c[U],B=N.color,q=N.intensity,X=N.distance,nt=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Ai?nt=N.shadow.map.texture:nt=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=B.r*q,u+=B.g*q,d+=B.b*q;else if(N.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(N.sh.coefficients[Y],q);R++}else if(N.isSunLight){let Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let Q=N.shadow,it=e.get(N);it.shadowIntensity=Q.intensity,it.shadowBias=Q.bias,it.shadowNormalBias=Q.normalBias,it.shadowRadius=Q.radius,it.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[g]=it,n.sunShadowMap[g]=nt;let Nt=Q.getViewportCount();for(let At=0;At<Nt;At++)n.sunShadowMatrix[b+At]=Q.getMatrix(At),n.sunShadowCascade[b+At]=Q._cascadeData[At];b+=Nt,g++}n.sun[f]=Y,f++}else if(N.isDirectionalLight){let Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let Q=N.shadow,it=e.get(N);it.shadowIntensity=Q.intensity,it.shadowBias=Q.bias,it.shadowNormalBias=Q.normalBias,it.shadowRadius=Q.radius,it.shadowMapSize=Q.mapSize,n.directionalShadow[m]=it,n.directionalShadowMap[m]=nt,n.directionalShadowMatrix[m]=N.shadow.matrix,M++}n.directional[m]=Y,m++}else if(N.isSpotLight){let Y=t.get(N);Y.position.setFromMatrixPosition(N.matrixWorld),Y.color.copy(B).multiplyScalar(q),Y.distance=X,Y.coneCos=Math.cos(N.angle),Y.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Y.decay=N.decay,n.spot[y]=Y;let Q=N.shadow;if(N.map&&(n.spotLightMap[v]=N.map,v++,Q.updateMatrices(N),N.castShadow&&T++),n.spotLightMatrix[y]=Q.matrix,N.castShadow){let it=e.get(N);it.shadowIntensity=Q.intensity,it.shadowBias=Q.bias,it.shadowNormalBias=Q.normalBias,it.shadowRadius=Q.radius,it.shadowMapSize=Q.mapSize,n.spotShadow[y]=it,n.spotShadowMap[y]=nt,C++}y++}else if(N.isRectAreaLight){let Y=t.get(N);Y.color.copy(B).multiplyScalar(q),Y.halfWidth.set(N.width*.5,0,0),Y.halfHeight.set(0,N.height*.5,0),n.rectArea[w]=Y,w++}else if(N.isPointLight){let Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),Y.distance=N.distance,Y.decay=N.decay,N.castShadow){let Q=N.shadow,it=e.get(N);it.shadowIntensity=Q.intensity,it.shadowBias=Q.bias,it.shadowNormalBias=Q.normalBias,it.shadowRadius=Q.radius,it.shadowMapSize=Q.mapSize,it.shadowCameraNear=Q.camera.near,it.shadowCameraFar=Q.camera.far,n.pointShadow[p]=it,n.pointShadowMap[p]=nt,n.pointShadowMatrix[p]=N.shadow.matrix,S++}n.point[p]=Y,p++}else if(N.isHemisphereLight){let Y=t.get(N);Y.skyColor.copy(N.color).multiplyScalar(q),Y.groundColor.copy(N.groundColor).multiplyScalar(q),n.hemi[x]=Y,x++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let L=n.hash;(L.sunLength!==f||L.directionalLength!==m||L.pointLength!==p||L.spotLength!==y||L.rectAreaLength!==w||L.hemiLength!==x||L.numSunShadows!==g||L.numDirectionalShadows!==M||L.numPointShadows!==S||L.numSpotShadows!==C||L.numSpotMaps!==v||L.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=m,n.spot.length=y,n.rectArea.length=w,n.point.length=p,n.hemi.length=x,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+v-T,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,L.sunLength=f,L.directionalLength=m,L.pointLength=p,L.spotLength=y,L.rectAreaLength=w,L.hemiLength=x,L.numSunShadows=g,L.numDirectionalShadows=M,L.numPointShadows=S,L.numSpotShadows=C,L.numSpotMaps=v,L.numLightProbes=R,n.version=__++)}function o(c,h){let u=0,d=0,f=0,g=0,b=0,m=0,p=h.matrixWorldInverse;for(let y=0,w=c.length;y<w;y++){let x=c[y];if(x.isSunLight){let M=n.sun[u];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(p),u++}else if(x.isDirectionalLight){let M=n.directional[d];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),d++}else if(x.isSpotLight){let M=n.spot[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),g++}else if(x.isRectAreaLight){let M=n.rectArea[b];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(x.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),b++}else if(x.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:l,setupView:o,state:n}}function Od(i){let t=new v_(i),e=[],n=[],s=[];function r(d){u.camera=d,e.length=0,n.length=0,s.length=0}function a(d){e.push(d)}function l(d){n.push(d)}function o(d){s.push(d)}function c(){t.setup(e)}function h(d){t.setupView(e,d)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:l,pushLightProbeGrid:o}}function b_(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),l;return a===void 0?(l=new Od(i),t.set(s,[l])):r>=a.length?(l=new Od(i),a.push(l)):l=a[r],l}function n(){t=new WeakMap}return{get:e,dispose:n}}var M_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,w_=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],E_=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],zd=new _e,ca=new P,ph=new P;function T_(i,t,e){let n=new As,s=new rt,r=new rt,a=new Ee,l=new bo,o=new Mo,c={},h=e.maxTextureSize,u={[Jn]:Ye,[Ye]:Jn,[Ze]:Ze},d=new Le({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:M_,fragmentShader:S_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Pe;g.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Ut(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wi;let p=this.type;this.render=function(S,C,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Ru&&(Wt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Wi);let T=i.getRenderTarget(),R=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),U=i.state;U.setBlending(bn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let k=p!==this.type;k&&C.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(B=>B.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,B=S.length;N<B;N++){let q=S[N],X=q.shadow;if(X===void 0){Wt("WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let nt=X.getFrameExtents();s.multiply(nt),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,X.mapSize.y=r.y));let Y=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=Y,X.map===null||k===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Ns){if(q.isPointLight){Wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Oe(s.x,s.y,{format:Ai,type:Je,minFilter:Xe,magFilter:Xe,generateMipmaps:!1}),X.map.texture.name=q.name+".shadowMap",X.map.depthTexture=new _i(s.x,s.y,Mn),X.map.depthTexture.name=q.name+".shadowMapDepth",X.map.depthTexture.format=Hn,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=He,X.map.depthTexture.magFilter=He}else q.isPointLight?(X.map=new Tl(s.x),X.map.depthTexture=new po(s.x,Nn)):(X.map=new Oe(s.x,s.y),X.map.depthTexture=new _i(s.x,s.y,Nn)),X.map.depthTexture.name=q.name+".shadowMap",X.map.depthTexture.format=Hn,this.type===Wi?(X.map.depthTexture.compareFunction=Y?Sl:Ml,X.map.depthTexture.minFilter=Xe,X.map.depthTexture.magFilter=Xe):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=He,X.map.depthTexture.magFilter=He);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let Q=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();q.isPointLight!==!0&&X.updateMatrices(q,v);for(let it=0;it<Q;it++){let Nt=X.getCamera(it);if(q.isPointLight){let At=X.camera,ue=X.matrix,ie=q.distance||At.far;ie!==At.far&&(At.far=ie,At.updateProjectionMatrix()),ca.setFromMatrixPosition(q.matrixWorld),At.position.copy(ca),ph.copy(At.position),ph.add(w_[it]),At.up.copy(E_[it]),At.lookAt(ph),At.updateMatrixWorld(),ue.makeTranslation(-ca.x,-ca.y,-ca.z),zd.multiplyMatrices(At.projectionMatrix,At.matrixWorldInverse),X._frustum.setFromProjectionMatrix(zd,At.coordinateSystem,At.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,it),i.clear();else{it===0&&(i.setRenderTarget(X.map),i.clear());let At=X.getViewport(it);a.set(r.x*At.x,r.y*At.y,r.x*At.z,r.y*At.w),U.viewport(a)}n=X.getFrustum(it),x(C,v,Nt,q,this.type)}X.isPointLightShadow!==!0&&this.type===Ns&&y(X,v),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,R,L)};function y(S,C){let v=t.update(b);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new Oe(s.x,s.y,{format:Ai,type:Je}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),d.uniforms.shadow_pass.value=S.map.depthTexture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(C,null,v,d,b,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(C,null,v,f,b,null)}function w(S,C,v,T){let R=null,L=v.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(L!==void 0)R=L;else if(R=v.isPointLight===!0?o:l,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let U=R.uuid,k=C.uuid,N=c[U];N===void 0&&(N={},c[U]=N);let B=N[k];B===void 0&&(B=R.clone(),N[k]=B,C.addEventListener("dispose",M)),R=B}if(R.visible=C.visible,R.wireframe=C.wireframe,T===Ns?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:u[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let U=i.properties.get(R);U.light=v}return R}function x(S,C,v,T,R){if(S.visible===!1)return;if(S.layers.test(C.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&R===Ns)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,S.matrixWorld);let k=t.update(S),N=S.material;if(Array.isArray(N)){let B=k.groups;for(let q=0,X=B.length;q<X;q++){let nt=B[q],Y=N[nt.materialIndex];if(Y&&Y.visible){let Q=w(S,Y,T,R);S.onBeforeShadow(i,S,C,v,k,Q,nt),i.renderBufferDirect(v,null,k,Q,S,nt),S.onAfterShadow(i,S,C,v,k,Q,nt)}}}else if(N.visible){let B=w(S,N,T,R);S.onBeforeShadow(i,S,C,v,k,B,null),i.renderBufferDirect(v,null,k,B,S,null),S.onAfterShadow(i,S,C,v,k,B,null)}}let U=S.children;for(let k=0,N=U.length;k<N;k++)x(U[k],C,v,T,R)}function M(S){S.target.removeEventListener("dispose",M);for(let v in c){let T=c[v],R=S.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function A_(i,t){function e(){let O=!1,pt=new Ee,K=null,mt=new Ee(0,0,0,0);return{setMask:function(Mt){K!==Mt&&!O&&(i.colorMask(Mt,Mt,Mt,Mt),K=Mt)},setLocked:function(Mt){O=Mt},setClear:function(Mt,st,zt,Dt,ve){ve===!0&&(Mt*=Dt,st*=Dt,zt*=Dt),pt.set(Mt,st,zt,Dt),mt.equals(pt)===!1&&(i.clearColor(Mt,st,zt,Dt),mt.copy(pt))},reset:function(){O=!1,K=null,mt.set(-1,0,0,0)}}}function n(){let O=!1,pt=!1,K=null,mt=null,Mt=null;return{setReversed:function(st){if(pt!==st){let zt=t.get("EXT_clip_control");st?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),pt=st;let Dt=Mt;Mt=null,this.setClear(Dt)}},getReversed:function(){return pt},setTest:function(st){st?tt(i.DEPTH_TEST):yt(i.DEPTH_TEST)},setMask:function(st){K!==st&&!O&&(i.depthMask(st),K=st)},setFunc:function(st){if(pt&&(st=cd[st]),mt!==st){switch(st){case ja:i.depthFunc(i.NEVER);break;case Qa:i.depthFunc(i.ALWAYS);break;case to:i.depthFunc(i.LESS);break;case vs:i.depthFunc(i.LEQUAL);break;case eo:i.depthFunc(i.EQUAL);break;case no:i.depthFunc(i.GEQUAL);break;case io:i.depthFunc(i.GREATER);break;case so:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}mt=st}},setLocked:function(st){O=st},setClear:function(st){Mt!==st&&(Mt=st,pt&&(st=1-st),i.clearDepth(st))},reset:function(){O=!1,K=null,mt=null,Mt=null,pt=!1}}}function s(){let O=!1,pt=null,K=null,mt=null,Mt=null,st=null,zt=null,Dt=null,ve=null;return{setTest:function(fe){O||(fe?tt(i.STENCIL_TEST):yt(i.STENCIL_TEST))},setMask:function(fe){pt!==fe&&!O&&(i.stencilMask(fe),pt=fe)},setFunc:function(fe,Tn,zn){(K!==fe||mt!==Tn||Mt!==zn)&&(i.stencilFunc(fe,Tn,zn),K=fe,mt=Tn,Mt=zn)},setOp:function(fe,Tn,zn){(st!==fe||zt!==Tn||Dt!==zn)&&(i.stencilOp(fe,Tn,zn),st=fe,zt=Tn,Dt=zn)},setLocked:function(fe){O=fe},setClear:function(fe){ve!==fe&&(i.clearStencil(fe),ve=fe)},reset:function(){O=!1,pt=null,K=null,mt=null,Mt=null,st=null,zt=null,Dt=null,ve=null}}}let r=new e,a=new n,l=new s,o=new WeakMap,c=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],b=null,m=!1,p=null,y=null,w=null,x=null,M=null,S=null,C=null,v=new It(0,0,0),T=0,R=!1,L=null,U=null,k=null,N=null,B=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,nt=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=nt>=1):Y.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=nt>=2);let Q=null,it={},Nt=i.getParameter(i.SCISSOR_BOX),At=i.getParameter(i.VIEWPORT),ue=new Ee().fromArray(Nt),ie=new Ee().fromArray(At);function oe(O,pt,K,mt){let Mt=new Uint8Array(4),st=i.createTexture();i.bindTexture(O,st),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let zt=0;zt<K;zt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,mt,0,i.RGBA,i.UNSIGNED_BYTE,Mt):i.texImage2D(pt+zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Mt);return st}let $={};$[i.TEXTURE_2D]=oe(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),tt(i.DEPTH_TEST),a.setFunc(vs),lt(!1),ut(kc),tt(i.CULL_FACE),at(bn);function tt(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function yt(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Xt(O,pt){return d[O]!==pt?(i.bindFramebuffer(O,pt),d[O]=pt,O===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=pt),O===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function wt(O,pt){let K=g,mt=!1;if(O){K=f.get(pt),K===void 0&&(K=[],f.set(pt,K));let Mt=O.textures;if(K.length!==Mt.length||K[0]!==i.COLOR_ATTACHMENT0){for(let st=0,zt=Mt.length;st<zt;st++)K[st]=i.COLOR_ATTACHMENT0+st;K.length=Mt.length,mt=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,mt=!0);mt&&i.drawBuffers(K)}function qt(O){return b!==O?(i.useProgram(O),b=O,!0):!1}let me={[qi]:i.FUNC_ADD,[Iu]:i.FUNC_SUBTRACT,[Du]:i.FUNC_REVERSE_SUBTRACT};me[Lu]=i.MIN,me[Nu]=i.MAX;let et={[Uu]:i.ZERO,[Fu]:i.ONE,[Ou]:i.SRC_COLOR,[Vc]:i.SRC_ALPHA,[Hu]:i.SRC_ALPHA_SATURATE,[Gu]:i.DST_COLOR,[ku]:i.DST_ALPHA,[zu]:i.ONE_MINUS_SRC_COLOR,[Hc]:i.ONE_MINUS_SRC_ALPHA,[Vu]:i.ONE_MINUS_DST_COLOR,[Bu]:i.ONE_MINUS_DST_ALPHA,[Wu]:i.CONSTANT_COLOR,[Xu]:i.ONE_MINUS_CONSTANT_COLOR,[qu]:i.CONSTANT_ALPHA,[Yu]:i.ONE_MINUS_CONSTANT_ALPHA};function at(O,pt,K,mt,Mt,st,zt,Dt,ve,fe){if(O===bn){m===!0&&(yt(i.BLEND),m=!1);return}if(m===!1&&(tt(i.BLEND),m=!0),O!==Pu){if(O!==p||fe!==R){if((y!==qi||M!==qi)&&(i.blendEquation(i.FUNC_ADD),y=qi,M=qi),fe)switch(O){case Si:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xi:i.blendFunc(i.ONE,i.ONE);break;case Bc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ht("WebGLState: Invalid blending: ",O);break}else switch(O){case Si:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Bc:Ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gc:Ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ht("WebGLState: Invalid blending: ",O);break}w=null,x=null,S=null,C=null,v.set(0,0,0),T=0,p=O,R=fe}return}Mt=Mt||pt,st=st||K,zt=zt||mt,(pt!==y||Mt!==M)&&(i.blendEquationSeparate(me[pt],me[Mt]),y=pt,M=Mt),(K!==w||mt!==x||st!==S||zt!==C)&&(i.blendFuncSeparate(et[K],et[mt],et[st],et[zt]),w=K,x=mt,S=st,C=zt),(Dt.equals(v)===!1||ve!==T)&&(i.blendColor(Dt.r,Dt.g,Dt.b,ve),v.copy(Dt),T=ve),p=O,R=!1}function ot(O,pt){O.side===Ze?yt(i.CULL_FACE):tt(i.CULL_FACE);let K=O.side===Ye;pt&&(K=!K),lt(K),O.blending===Si&&O.transparent===!1?at(bn):at(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let mt=O.stencilWrite;l.setTest(mt),mt&&(l.setMask(O.stencilWriteMask),l.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),l.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),kt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?tt(i.SAMPLE_ALPHA_TO_COVERAGE):yt(i.SAMPLE_ALPHA_TO_COVERAGE)}function lt(O){L!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),L=O)}function ut(O){O!==Au?(tt(i.CULL_FACE),O!==U&&(O===kc?i.cullFace(i.BACK):O===Cu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):yt(i.CULL_FACE),U=O}function Gt(O){O!==k&&(X&&i.lineWidth(O),k=O)}function kt(O,pt,K){O?(tt(i.POLYGON_OFFSET_FILL),(N!==pt||B!==K)&&(N=pt,B=K,a.getReversed()&&(pt=-pt),i.polygonOffset(pt,K))):yt(i.POLYGON_OFFSET_FILL)}function Yt(O){O?tt(i.SCISSOR_TEST):yt(i.SCISSOR_TEST)}function Jt(O){O===void 0&&(O=i.TEXTURE0+q-1),Q!==O&&(i.activeTexture(O),Q=O)}function D(O,pt,K){K===void 0&&(Q===null?K=i.TEXTURE0+q-1:K=Q);let mt=it[K];mt===void 0&&(mt={type:void 0,texture:void 0},it[K]=mt),(mt.type!==O||mt.texture!==pt)&&(Q!==K&&(i.activeTexture(K),Q=K),i.bindTexture(O,pt||$[O]),mt.type=O,mt.texture=pt)}function de(){let O=it[Q];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function se(){try{i.compressedTexImage2D(...arguments)}catch(O){Ht("WebGLState:",O)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(O){Ht("WebGLState:",O)}}function _(){try{i.texSubImage2D(...arguments)}catch(O){Ht("WebGLState:",O)}}function z(){try{i.texSubImage3D(...arguments)}catch(O){Ht("WebGLState:",O)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(O){Ht("WebGLState:",O)}}function Z(){try{i.compressedTexSubImage3D(...arguments)}catch(O){Ht("WebGLState:",O)}}function ct(){try{i.texStorage2D(...arguments)}catch(O){Ht("WebGLState:",O)}}function ht(){try{i.texStorage3D(...arguments)}catch(O){Ht("WebGLState:",O)}}function J(){try{i.texImage2D(...arguments)}catch(O){Ht("WebGLState:",O)}}function j(){try{i.texImage3D(...arguments)}catch(O){Ht("WebGLState:",O)}}function dt(O){return u[O]!==void 0?u[O]:i.getParameter(O)}function Ft(O,pt){u[O]!==pt&&(i.pixelStorei(O,pt),u[O]=pt)}function xt(O){ue.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),ue.copy(O))}function ft(O){ie.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),ie.copy(O))}function Ot(O,pt){let K=c.get(pt);K===void 0&&(K=new WeakMap,c.set(pt,K));let mt=K.get(O);mt===void 0&&(mt=i.getUniformBlockIndex(pt,O.name),K.set(O,mt))}function Vt(O,pt){let mt=c.get(pt).get(O);o.get(pt)!==mt&&(i.uniformBlockBinding(pt,mt,O.__bindingPointIndex),o.set(pt,mt))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},Q=null,it={},d={},f=new WeakMap,g=[],b=null,m=!1,p=null,y=null,w=null,x=null,M=null,S=null,C=null,v=new It(0,0,0),T=0,R=!1,L=null,U=null,k=null,N=null,B=null,ue.set(0,0,i.canvas.width,i.canvas.height),ie.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:tt,disable:yt,bindFramebuffer:Xt,drawBuffers:wt,useProgram:qt,setBlending:at,setMaterial:ot,setFlipSided:lt,setCullFace:ut,setLineWidth:Gt,setPolygonOffset:kt,setScissorTest:Yt,activeTexture:Jt,bindTexture:D,unbindTexture:de,compressedTexImage2D:se,compressedTexImage3D:A,texImage2D:J,texImage3D:j,pixelStorei:Ft,getParameter:dt,updateUBOMapping:Ot,uniformBlockBinding:Vt,texStorage2D:ct,texStorage3D:ht,texSubImage2D:_,texSubImage3D:z,compressedTexSubImage2D:H,compressedTexSubImage3D:Z,scissor:xt,viewport:ft,reset:$t}}function C_(i,t,e,n,s,r,a){let l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,h=new WeakMap,u=new Set,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(A,_){return g?new OffscreenCanvas(A,_):Ss("canvas")}function m(A,_,z){let H=1,Z=se(A);if((Z.width>z||Z.height>z)&&(H=z/Math.max(Z.width,Z.height)),H<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ct=Math.floor(H*Z.width),ht=Math.floor(H*Z.height);d===void 0&&(d=b(ct,ht));let J=_?b(ct,ht):d;return J.width=ct,J.height=ht,J.getContext("2d").drawImage(A,0,0,ct,ht),Wt("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ct+"x"+ht+")."),J}else return"data"in A&&Wt("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),A;return A}function p(A){return A.generateMipmaps}function y(A){i.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(A,_,z,H,Z,ct=!1){if(A!==null){if(i[A]!==void 0)return i[A];Wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ht;H&&(ht=t.get("EXT_texture_norm16"),ht||Wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=_;if(_===i.RED&&(z===i.FLOAT&&(J=i.R32F),z===i.HALF_FLOAT&&(J=i.R16F),z===i.UNSIGNED_BYTE&&(J=i.R8),z===i.UNSIGNED_SHORT&&ht&&(J=ht.R16_EXT),z===i.SHORT&&ht&&(J=ht.R16_SNORM_EXT)),_===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.R8UI),z===i.UNSIGNED_SHORT&&(J=i.R16UI),z===i.UNSIGNED_INT&&(J=i.R32UI),z===i.BYTE&&(J=i.R8I),z===i.SHORT&&(J=i.R16I),z===i.INT&&(J=i.R32I)),_===i.RG&&(z===i.FLOAT&&(J=i.RG32F),z===i.HALF_FLOAT&&(J=i.RG16F),z===i.UNSIGNED_BYTE&&(J=i.RG8),z===i.UNSIGNED_SHORT&&ht&&(J=ht.RG16_EXT),z===i.SHORT&&ht&&(J=ht.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RG8UI),z===i.UNSIGNED_SHORT&&(J=i.RG16UI),z===i.UNSIGNED_INT&&(J=i.RG32UI),z===i.BYTE&&(J=i.RG8I),z===i.SHORT&&(J=i.RG16I),z===i.INT&&(J=i.RG32I)),_===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGB8UI),z===i.UNSIGNED_SHORT&&(J=i.RGB16UI),z===i.UNSIGNED_INT&&(J=i.RGB32UI),z===i.BYTE&&(J=i.RGB8I),z===i.SHORT&&(J=i.RGB16I),z===i.INT&&(J=i.RGB32I)),_===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),z===i.UNSIGNED_INT&&(J=i.RGBA32UI),z===i.BYTE&&(J=i.RGBA8I),z===i.SHORT&&(J=i.RGBA16I),z===i.INT&&(J=i.RGBA32I)),_===i.RGB&&(z===i.UNSIGNED_SHORT&&ht&&(J=ht.RGB16_EXT),z===i.SHORT&&ht&&(J=ht.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),_===i.RGBA){let j=ct?ur:ne.getTransfer(Z);z===i.FLOAT&&(J=i.RGBA32F),z===i.HALF_FLOAT&&(J=i.RGBA16F),z===i.UNSIGNED_BYTE&&(J=j===he?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&ht&&(J=ht.RGBA16_EXT),z===i.SHORT&&ht&&(J=ht.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function M(A,_){let z;return A?_===null||_===Nn||_===Os?z=i.DEPTH24_STENCIL8:_===Mn?z=i.DEPTH32F_STENCIL8:_===Fs&&(z=i.DEPTH24_STENCIL8,Wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Nn||_===Os?z=i.DEPTH_COMPONENT24:_===Mn?z=i.DEPTH_COMPONENT32F:_===Fs&&(z=i.DEPTH_COMPONENT16),z}function S(A,_){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==He&&A.minFilter!==Xe?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function C(A){let _=A.target;_.removeEventListener("dispose",C),T(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&u.delete(_)}function v(A){let _=A.target;_.removeEventListener("dispose",v),L(_)}function T(A){let _=n.get(A);if(_.__webglInit===void 0)return;let z=A.source,H=f.get(z);if(H){let Z=H[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&R(A),Object.keys(H).length===0&&f.delete(z)}n.remove(A)}function R(A){let _=n.get(A);i.deleteTexture(_.__webglTexture);let z=A.source,H=f.get(z);delete H[_.__cacheKey],a.memory.textures--}function L(A){let _=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(_.__webglFramebuffer[H]))for(let Z=0;Z<_.__webglFramebuffer[H].length;Z++)i.deleteFramebuffer(_.__webglFramebuffer[H][Z]);else i.deleteFramebuffer(_.__webglFramebuffer[H]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[H])}else{if(Array.isArray(_.__webglFramebuffer))for(let H=0;H<_.__webglFramebuffer.length;H++)i.deleteFramebuffer(_.__webglFramebuffer[H]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let H=0;H<_.__webglColorRenderbuffer.length;H++)_.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[H]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let z=A.textures;for(let H=0,Z=z.length;H<Z;H++){let ct=n.get(z[H]);ct.__webglTexture&&(i.deleteTexture(ct.__webglTexture),a.memory.textures--),n.remove(z[H])}n.remove(A)}let U=0;function k(){U=0}function N(){return U}function B(A){U=A}function q(){let A=U;return A>=s.maxTextures&&Wt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,A}function X(A){let _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function nt(A,_){let z=n.get(A);if(A.isVideoTexture&&D(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){let H=A.image;if(H===null)Wt("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Wt("WebGLRenderer: Texture marked for update but image is incomplete");else{yt(z,A,_);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+_)}function Y(A,_){let z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){yt(z,A,_);return}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+_)}function Q(A,_){let z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){yt(z,A,_);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+_)}function it(A,_){let z=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&z.__version!==A.version){Xt(z,A,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+_)}let Nt={[bs]:i.REPEAT,[Vn]:i.CLAMP_TO_EDGE,[ro]:i.MIRRORED_REPEAT},At={[He]:i.NEAREST,[$u]:i.NEAREST_MIPMAP_NEAREST,[ta]:i.NEAREST_MIPMAP_LINEAR,[Xe]:i.LINEAR,[zo]:i.LINEAR_MIPMAP_NEAREST,[Ei]:i.LINEAR_MIPMAP_LINEAR},ue={[td]:i.NEVER,[rd]:i.ALWAYS,[ed]:i.LESS,[Ml]:i.LEQUAL,[nd]:i.EQUAL,[Sl]:i.GEQUAL,[id]:i.GREATER,[sd]:i.NOTEQUAL};function ie(A,_){if(_.type===Mn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Xe||_.magFilter===zo||_.magFilter===ta||_.magFilter===Ei||_.minFilter===Xe||_.minFilter===zo||_.minFilter===ta||_.minFilter===Ei)&&Wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Nt[_.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Nt[_.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Nt[_.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,At[_.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,At[_.minFilter]),_.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ue[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===He||_.minFilter!==ta&&_.minFilter!==Ei||_.type===Mn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function oe(A,_){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",C));let H=_.source,Z=f.get(H);Z===void 0&&(Z={},f.set(H,Z));let ct=X(_);if(ct!==A.__cacheKey){Z[ct]===void 0&&(Z[ct]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Z[ct].usedTimes++;let ht=Z[A.__cacheKey];ht!==void 0&&(Z[A.__cacheKey].usedTimes--,ht.usedTimes===0&&R(_)),A.__cacheKey=ct,A.__webglTexture=Z[ct].texture}return z}function $(A,_,z){return Math.floor(Math.floor(A/z)/_)}function tt(A,_,z,H){let ct=A.updateRanges;if(ct.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,z,H,_.data);else{ct.sort((Ft,xt)=>Ft.start-xt.start);let ht=0;for(let Ft=1;Ft<ct.length;Ft++){let xt=ct[ht],ft=ct[Ft],Ot=xt.start+xt.count,Vt=$(ft.start,_.width,4),$t=$(xt.start,_.width,4);ft.start<=Ot+1&&Vt===$t&&$(ft.start+ft.count-1,_.width,4)===Vt?xt.count=Math.max(xt.count,ft.start+ft.count-xt.start):(++ht,ct[ht]=ft)}ct.length=ht+1;let J=e.getParameter(i.UNPACK_ROW_LENGTH),j=e.getParameter(i.UNPACK_SKIP_PIXELS),dt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Ft=0,xt=ct.length;Ft<xt;Ft++){let ft=ct[Ft],Ot=Math.floor(ft.start/4),Vt=Math.ceil(ft.count/4),$t=Ot%_.width,O=Math.floor(Ot/_.width),pt=Vt,K=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,$t),e.pixelStorei(i.UNPACK_SKIP_ROWS,O),e.texSubImage2D(i.TEXTURE_2D,0,$t,O,pt,K,z,H,_.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,J),e.pixelStorei(i.UNPACK_SKIP_PIXELS,j),e.pixelStorei(i.UNPACK_SKIP_ROWS,dt)}}function yt(A,_,z){let H=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(H=i.TEXTURE_3D);let Z=oe(A,_),ct=_.source;e.bindTexture(H,A.__webglTexture,i.TEXTURE0+z);let ht=n.get(ct);if(ct.version!==ht.__version||Z===!0){if(e.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let K=ne.getPrimaries(ne.workingColorSpace),mt=_.colorSpace===Un?null:ne.getPrimaries(_.colorSpace),Mt=_.colorSpace===Un||K===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let j=m(_.image,!1,s.maxTextureSize);j=de(_,j);let dt=r.convert(_.format,_.colorSpace),Ft=r.convert(_.type),xt=x(_.internalFormat,dt,Ft,_.normalized,_.colorSpace,_.isVideoTexture);ie(H,_);let ft,Ot=_.mipmaps,Vt=_.isVideoTexture!==!0,$t=ht.__version===void 0||Z===!0,O=ct.dataReady,pt=S(_,j);if(_.isDepthTexture)xt=M(_.format===Ti,_.type),$t&&(Vt?e.texStorage2D(i.TEXTURE_2D,1,xt,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,xt,j.width,j.height,0,dt,Ft,null));else if(_.isDataTexture)if(Ot.length>0){Vt&&$t&&e.texStorage2D(i.TEXTURE_2D,pt,xt,Ot[0].width,Ot[0].height);for(let K=0,mt=Ot.length;K<mt;K++)ft=Ot[K],Vt?O&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,ft.width,ft.height,dt,Ft,ft.data):e.texImage2D(i.TEXTURE_2D,K,xt,ft.width,ft.height,0,dt,Ft,ft.data);_.generateMipmaps=!1}else Vt?($t&&e.texStorage2D(i.TEXTURE_2D,pt,xt,j.width,j.height),O&&tt(_,j,dt,Ft)):e.texImage2D(i.TEXTURE_2D,0,xt,j.width,j.height,0,dt,Ft,j.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Vt&&$t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,xt,Ot[0].width,Ot[0].height,j.depth);for(let K=0,mt=Ot.length;K<mt;K++)if(ft=Ot[K],_.format!==Sn)if(dt!==null)if(Vt){if(O)if(_.layerUpdates.size>0){let Mt=ih(ft.width,ft.height,_.format,_.type);for(let st of _.layerUpdates){let zt=ft.data.subarray(st*Mt/ft.data.BYTES_PER_ELEMENT,(st+1)*Mt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,st,ft.width,ft.height,1,dt,zt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,ft.width,ft.height,j.depth,dt,ft.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,xt,ft.width,ft.height,j.depth,0,ft.data,0,0);else Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,ft.width,ft.height,j.depth,dt,Ft,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,K,xt,ft.width,ft.height,j.depth,0,dt,Ft,ft.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Vt&&$t&&e.texStorage2D(i.TEXTURE_2D,pt,xt,Ot[0].width,Ot[0].height);for(let K=0,mt=Ot.length;K<mt;K++)ft=Ot[K],_.format!==Sn?dt!==null?Vt?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,ft.width,ft.height,dt,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,K,xt,ft.width,ft.height,0,ft.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?O&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,ft.width,ft.height,dt,Ft,ft.data):e.texImage2D(i.TEXTURE_2D,K,xt,ft.width,ft.height,0,dt,Ft,ft.data)}else if(_.isDataArrayTexture)if(Vt){if($t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,xt,j.width,j.height,j.depth),O)if(_.layerUpdates.size>0){let K=ih(j.width,j.height,_.format,_.type);for(let mt of _.layerUpdates){let Mt=j.data.subarray(mt*K/j.data.BYTES_PER_ELEMENT,(mt+1)*K/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,mt,j.width,j.height,1,dt,Ft,Mt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,dt,Ft,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,xt,j.width,j.height,j.depth,0,dt,Ft,j.data);else if(_.isData3DTexture)Vt?($t&&e.texStorage3D(i.TEXTURE_3D,pt,xt,j.width,j.height,j.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,dt,Ft,j.data)):e.texImage3D(i.TEXTURE_3D,0,xt,j.width,j.height,j.depth,0,dt,Ft,j.data);else if(_.isFramebufferTexture){if($t)if(Vt)e.texStorage2D(i.TEXTURE_2D,pt,xt,j.width,j.height);else{let K=j.width,mt=j.height;for(let Mt=0;Mt<pt;Mt++)e.texImage2D(i.TEXTURE_2D,Mt,xt,K,mt,0,dt,Ft,null),K>>=1,mt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let K=i.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),j.parentNode!==K){K.appendChild(j),u.add(_),K.onpaint=mt=>{let Mt=mt.changedElements;for(let st of u)Mt.includes(st.image)&&(st.needsUpdate=!0)},K.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{let Mt=i.RGBA,st=i.RGBA,zt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Mt,st,zt,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ot.length>0){if(Vt&&$t){let K=se(Ot[0]);e.texStorage2D(i.TEXTURE_2D,pt,xt,K.width,K.height)}for(let K=0,mt=Ot.length;K<mt;K++)ft=Ot[K],Vt?O&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,dt,Ft,ft):e.texImage2D(i.TEXTURE_2D,K,xt,dt,Ft,ft);_.generateMipmaps=!1}else if(Vt){if($t){let K=se(j);e.texStorage2D(i.TEXTURE_2D,pt,xt,K.width,K.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,Ft,j)}else e.texImage2D(i.TEXTURE_2D,0,xt,dt,Ft,j);p(_)&&y(H),ht.__version=ct.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Xt(A,_,z){if(_.image.length!==6)return;let H=oe(A,_),Z=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+z);let ct=n.get(Z);if(Z.version!==ct.__version||H===!0){e.activeTexture(i.TEXTURE0+z);let ht=ne.getPrimaries(ne.workingColorSpace),J=_.colorSpace===Un?null:ne.getPrimaries(_.colorSpace),j=_.colorSpace===Un||ht===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let dt=_.isCompressedTexture||_.image[0].isCompressedTexture,Ft=_.image[0]&&_.image[0].isDataTexture,xt=[];for(let st=0;st<6;st++)!dt&&!Ft?xt[st]=m(_.image[st],!0,s.maxCubemapSize):xt[st]=Ft?_.image[st].image:_.image[st],xt[st]=de(_,xt[st]);let ft=xt[0],Ot=r.convert(_.format,_.colorSpace),Vt=r.convert(_.type),$t=x(_.internalFormat,Ot,Vt,_.normalized,_.colorSpace),O=_.isVideoTexture!==!0,pt=ct.__version===void 0||H===!0,K=Z.dataReady,mt=S(_,ft);ie(i.TEXTURE_CUBE_MAP,_);let Mt;if(dt){O&&pt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,$t,ft.width,ft.height);for(let st=0;st<6;st++){Mt=xt[st].mipmaps;for(let zt=0;zt<Mt.length;zt++){let Dt=Mt[zt];_.format!==Sn?Ot!==null?O?K&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,zt,0,0,Dt.width,Dt.height,Ot,Dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,zt,$t,Dt.width,Dt.height,0,Dt.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,zt,0,0,Dt.width,Dt.height,Ot,Vt,Dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,zt,$t,Dt.width,Dt.height,0,Ot,Vt,Dt.data)}}}else{if(Mt=_.mipmaps,O&&pt){Mt.length>0&&mt++;let st=se(xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,$t,st.width,st.height)}for(let st=0;st<6;st++)if(Ft){O?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,xt[st].width,xt[st].height,Ot,Vt,xt[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,$t,xt[st].width,xt[st].height,0,Ot,Vt,xt[st].data);for(let zt=0;zt<Mt.length;zt++){let ve=Mt[zt].image[st].image;O?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,zt+1,0,0,ve.width,ve.height,Ot,Vt,ve.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,zt+1,$t,ve.width,ve.height,0,Ot,Vt,ve.data)}}else{O?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Ot,Vt,xt[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,$t,Ot,Vt,xt[st]);for(let zt=0;zt<Mt.length;zt++){let Dt=Mt[zt];O?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,zt+1,0,0,Ot,Vt,Dt.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,zt+1,$t,Ot,Vt,Dt.image[st])}}}p(_)&&y(i.TEXTURE_CUBE_MAP),ct.__version=Z.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function wt(A,_,z,H,Z,ct){let ht=r.convert(z.format,z.colorSpace),J=r.convert(z.type),j=x(z.internalFormat,ht,J,z.normalized,z.colorSpace),dt=n.get(_),Ft=n.get(z);if(Ft.__renderTarget=_,!dt.__hasExternalTextures){let xt=Math.max(1,_.width>>ct),ft=Math.max(1,_.height>>ct);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,ct,j,xt,ft,_.depth,0,ht,J,null):e.texImage2D(Z,ct,j,xt,ft,0,ht,J,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Jt(_)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,Z,Ft.__webglTexture,0,Yt(_)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,Z,Ft.__webglTexture,ct),e.bindFramebuffer(i.FRAMEBUFFER,null)}function qt(A,_,z){if(i.bindRenderbuffer(i.RENDERBUFFER,A),_.depthBuffer){let H=_.depthTexture,Z=H&&H.isDepthTexture?H.type:null,ct=M(_.stencilBuffer,Z),ht=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Jt(_)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Yt(_),ct,_.width,_.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt(_),ct,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ct,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,A)}else{let H=_.textures;for(let Z=0;Z<H.length;Z++){let ct=H[Z],ht=r.convert(ct.format,ct.colorSpace),J=r.convert(ct.type),j=x(ct.internalFormat,ht,J,ct.normalized,ct.colorSpace);Jt(_)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Yt(_),j,_.width,_.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt(_),j,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,j,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function me(A,_,z){let H=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=n.get(_.depthTexture);if(Z.__renderTarget=_,(!Z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),H){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,_.depthTexture.addEventListener("dispose",C)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),ie(i.TEXTURE_CUBE_MAP,_.depthTexture);let dt=r.convert(_.depthTexture.format),Ft=r.convert(_.depthTexture.type),xt;_.depthTexture.format===Hn?xt=i.DEPTH_COMPONENT24:_.depthTexture.format===Ti&&(xt=i.DEPTH24_STENCIL8);for(let ft=0;ft<6;ft++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,xt,_.width,_.height,0,dt,Ft,null)}}else nt(_.depthTexture,0);let ct=Z.__webglTexture,ht=Yt(_),J=H?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,j=_.depthTexture.format===Ti?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Hn)Jt(_)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,J,ct,0,ht):i.framebufferTexture2D(i.FRAMEBUFFER,j,J,ct,0);else if(_.depthTexture.format===Ti)Jt(_)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,J,ct,0,ht):i.framebufferTexture2D(i.FRAMEBUFFER,j,J,ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function et(A){let _=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){let H=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),H){let Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,H.removeEventListener("dispose",Z)};H.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=H}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(z)for(let H=0;H<6;H++)me(_.__webglFramebuffer[H],A,H);else{let H=A.texture.mipmaps;H&&H.length>0?me(_.__webglFramebuffer[0],A,0):me(_.__webglFramebuffer,A,0)}else if(z){_.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[H]),_.__webglDepthbuffer[H]===void 0)_.__webglDepthbuffer[H]=i.createRenderbuffer(),qt(_.__webglDepthbuffer[H],A,!1);else{let Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=_.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ct)}}else{let H=A.texture.mipmaps;if(H&&H.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),qt(_.__webglDepthbuffer,A,!1);else{let Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ct)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(A,_,z){let H=n.get(A);_!==void 0&&wt(H.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&et(A)}function ot(A){let _=A.texture,z=n.get(A),H=n.get(_);A.addEventListener("dispose",v);let Z=A.textures,ct=A.isWebGLCubeRenderTarget===!0,ht=Z.length>1;if(ht||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=_.version,a.memory.textures++),ct){z.__webglFramebuffer=[];for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[J]=[];for(let j=0;j<_.mipmaps.length;j++)z.__webglFramebuffer[J][j]=i.createFramebuffer()}else z.__webglFramebuffer[J]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let J=0;J<_.mipmaps.length;J++)z.__webglFramebuffer[J]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(ht)for(let J=0,j=Z.length;J<j;J++){let dt=n.get(Z[J]);dt.__webglTexture===void 0&&(dt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Jt(A)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){let j=Z[J];z.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[J]);let dt=r.convert(j.format,j.colorSpace),Ft=r.convert(j.type),xt=x(j.internalFormat,dt,Ft,j.normalized,j.colorSpace,A.isXRRenderTarget===!0),ft=Yt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,xt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,z.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),qt(z.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ct){e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),ie(i.TEXTURE_CUBE_MAP,_);for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0)for(let j=0;j<_.mipmaps.length;j++)wt(z.__webglFramebuffer[J][j],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,j);else wt(z.__webglFramebuffer[J],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(_)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){for(let J=0,j=Z.length;J<j;J++){let dt=Z[J],Ft=n.get(dt),xt=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(xt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(xt,Ft.__webglTexture),ie(xt,dt),wt(z.__webglFramebuffer,A,dt,i.COLOR_ATTACHMENT0+J,xt,0),p(dt)&&y(xt)}e.unbindTexture()}else{let J=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(J=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(J,H.__webglTexture),ie(J,_),_.mipmaps&&_.mipmaps.length>0)for(let j=0;j<_.mipmaps.length;j++)wt(z.__webglFramebuffer[j],A,_,i.COLOR_ATTACHMENT0,J,j);else wt(z.__webglFramebuffer,A,_,i.COLOR_ATTACHMENT0,J,0);p(_)&&y(J),e.unbindTexture()}A.depthBuffer&&et(A)}function lt(A){let _=A.textures;for(let z=0,H=_.length;z<H;z++){let Z=_[z];if(p(Z)){let ct=w(A),ht=n.get(Z).__webglTexture;e.bindTexture(ct,ht),y(ct),e.unbindTexture()}}}let ut=[],Gt=[];function kt(A){if(A.samples>0){if(Jt(A)===!1){let _=A.textures,z=A.width,H=A.height,Z=i.COLOR_BUFFER_BIT,ct=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=n.get(A),J=_.length>1;if(J)for(let dt=0;dt<_.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer);let j=A.texture.mipmaps;j&&j.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let dt=0;dt<_.length;dt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ht.__webglColorRenderbuffer[dt]);let Ft=n.get(_[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ft,0)}i.blitFramebuffer(0,0,z,H,0,0,z,H,Z,i.NEAREST),o===!0&&(ut.length=0,Gt.length=0,ut.push(i.COLOR_ATTACHMENT0+dt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(ut.push(ct),Gt.push(ct),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Gt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ut))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let dt=0;dt<_.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,ht.__webglColorRenderbuffer[dt]);let Ft=n.get(_[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,Ft,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&o){let _=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Yt(A){return Math.min(s.maxSamples,A.samples)}function Jt(A){let _=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function D(A){let _=a.render.frame;h.get(A)!==_&&(h.set(A,_),A.update())}function de(A,_){let z=A.colorSpace,H=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==hr&&z!==Un&&(ne.getTransfer(z)===he?(H!==Sn||Z!==un)&&Wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ht("WebGLTextures: Unsupported texture color space:",z)),_}function se(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=k,this.getTextureUnits=N,this.setTextureUnits=B,this.setTexture2D=nt,this.setTexture2DArray=Y,this.setTexture3D=Q,this.setTextureCube=it,this.rebindTextures=at,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Jt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function R_(i,t){function e(n,s=Un){let r,a=ne.getTransfer(s);if(n===un)return i.UNSIGNED_BYTE;if(n===Bo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Go)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Yc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Xc)return i.BYTE;if(n===qc)return i.SHORT;if(n===Fs)return i.UNSIGNED_SHORT;if(n===ko)return i.INT;if(n===Nn)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===Je)return i.HALF_FLOAT;if(n===Jc)return i.ALPHA;if(n===$c)return i.RGB;if(n===Sn)return i.RGBA;if(n===Hn)return i.DEPTH_COMPONENT;if(n===Ti)return i.DEPTH_STENCIL;if(n===Vo)return i.RED;if(n===Ho)return i.RED_INTEGER;if(n===Ai)return i.RG;if(n===Wo)return i.RG_INTEGER;if(n===Xo)return i.RGBA_INTEGER;if(n===ea||n===na||n===ia||n===sa)if(a===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qo||n===Yo||n===Zo||n===Jo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===qo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Yo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Jo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$o||n===Ko||n===jo||n===Qo||n===tl||n===ra||n===el)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$o||n===Ko)return a===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===jo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Qo)return r.COMPRESSED_R11_EAC;if(n===tl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ra)return r.COMPRESSED_RG11_EAC;if(n===el)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===nl||n===il||n===sl||n===rl||n===al||n===ol||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===nl)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===il)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sl)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===rl)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===al)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ol)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ll)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===cl)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===hl)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ul)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===dl)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fl)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pl)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ml)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===gl||n===xl||n===_l)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===gl)return a===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_l)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yl||n===vl||n===aa||n===bl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===yl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===vl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===aa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Os?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var P_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,I_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Mh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new wr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Le({vertexShader:P_,fragmentShader:I_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ut(new cn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Sh=class extends Wn{constructor(t,e){super();let n=this,s=null,r=1,a=null,l="local-floor",o=1,c=null,h=null,u=null,d=null,f=null,g=null,b=typeof XRWebGLBinding<"u",m=new Mh,p={},y=e.getContextAttributes(),w=null,x=null,M=[],S=[],C=new rt,v=null,T=null,R=new We;R.viewport=new Ee;let L=new We;L.viewport=new Ee;let U=[R,L],k=new No,N=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let tt=M[$];return tt===void 0&&(tt=new Ts,M[$]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function($){let tt=M[$];return tt===void 0&&(tt=new Ts,M[$]=tt),tt.getGripSpace()},this.getHand=function($){let tt=M[$];return tt===void 0&&(tt=new Ts,M[$]=tt),tt.getHandSpace()};function q($){let tt=S.indexOf($.inputSource);if(tt===-1)return;let yt=M[tt];yt!==void 0&&(yt.update($.inputSource,$.frame,c||a),yt.dispatchEvent({type:$.type,data:$.inputSource}))}function X(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",nt);for(let $=0;$<M.length;$++){let tt=S[$];tt!==null&&(S[$]=null,M[$].disconnect(tt))}N=null,B=null,m.reset();for(let $ in p)delete p[$];if(t.setRenderTarget(w),f=null,d=null,u=null,s=null,x=null,oe.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(C.width,C.height,!1),T!==null){let $=T.camera;$.fov=T.fov,$.zoom=T.zoom,$.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&Wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){l=$,n.isPresenting===!0&&Wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&b&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",X),s.addEventListener("inputsourceschange",nt),y.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(C),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Xt=null,wt=null;y.depth&&(wt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=y.stencil?Ti:Hn,Xt=y.stencil?Os:Nn);let qt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(qt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new Oe(d.textureWidth,d.textureHeight,{format:Sn,type:un,depthTexture:new _i(d.textureWidth,d.textureHeight,Xt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let yt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,yt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Oe(f.framebufferWidth,f.framebufferHeight,{format:Sn,type:un,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(o),c=null,a=await s.requestReferenceSpace(l),oe.setContext(s),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function nt($){for(let tt=0;tt<$.removed.length;tt++){let yt=$.removed[tt],Xt=S.indexOf(yt);Xt>=0&&(S[Xt]=null,M[Xt].disconnect(yt))}for(let tt=0;tt<$.added.length;tt++){let yt=$.added[tt],Xt=S.indexOf(yt);if(Xt===-1){for(let qt=0;qt<M.length;qt++)if(qt>=S.length){S.push(yt),Xt=qt;break}else if(S[qt]===null){S[qt]=yt,Xt=qt;break}if(Xt===-1)break}let wt=M[Xt];wt&&wt.connect(yt)}}let Y=new P,Q=new P;function it($,tt,yt){Y.setFromMatrixPosition(tt.matrixWorld),Q.setFromMatrixPosition(yt.matrixWorld);let Xt=Y.distanceTo(Q),wt=tt.projectionMatrix.elements,qt=yt.projectionMatrix.elements,me=wt[14]/(wt[10]-1),et=wt[14]/(wt[10]+1),at=(wt[9]+1)/wt[5],ot=(wt[9]-1)/wt[5],lt=(wt[8]-1)/wt[0],ut=(qt[8]+1)/qt[0],Gt=me*lt,kt=me*ut,Yt=Xt/(-lt+ut),Jt=Yt*-lt;if(tt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Jt),$.translateZ(Yt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),wt[10]===-1)$.projectionMatrix.copy(tt.projectionMatrix),$.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let D=me+Yt,de=et+Yt,se=Gt-Jt,A=kt+(Xt-Jt),_=at*et/de*D,z=ot*et/de*D;$.projectionMatrix.makePerspective(se,A,_,z,D,de),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Nt($,tt){tt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(tt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let tt=$.near,yt=$.far;m.texture!==null&&(m.depthNear>0&&(tt=m.depthNear),m.depthFar>0&&(yt=m.depthFar)),k.near=L.near=R.near=tt,k.far=L.far=R.far=yt,(N!==k.near||B!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),N=k.near,B=k.far),k.layers.mask=$.layers.mask|6,R.layers.mask=k.layers.mask&-5,L.layers.mask=k.layers.mask&-3;let Xt=$.parent,wt=k.cameras;Nt(k,Xt);for(let qt=0;qt<wt.length;qt++)Nt(wt[qt],Xt);wt.length===2?it(k,R,L):k.projectionMatrix.copy(R.projectionMatrix),T===null&&$.isPerspectiveCamera&&(T={camera:$,fov:$.fov,zoom:$.zoom}),At($,k,Xt)};function At($,tt,yt){yt===null?$.matrix.copy(tt.matrixWorld):($.matrix.copy(yt.matrixWorld),$.matrix.invert(),$.matrix.multiply(tt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(tt.projectionMatrix),$.projectionMatrixInverse.copy(tt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=oo*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&f===null))return o},this.setFoveation=function($){o=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function($){return p[$]};let ue=null;function ie($,tt){if(h=tt.getViewerPose(c||a),g=tt,h!==null){let yt=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let Xt=!1;yt.length!==k.cameras.length&&(k.cameras.length=0,Xt=!0);for(let et=0;et<yt.length;et++){let at=yt[et],ot=null;if(f!==null)ot=f.getViewport(at);else{let ut=u.getViewSubImage(d,at);ot=ut.viewport,et===0&&(t.setRenderTargetTextures(x,ut.colorTexture,ut.depthStencilTexture),t.setRenderTarget(x))}let lt=U[et];lt===void 0&&(lt=new We,lt.layers.enable(et),lt.viewport=new Ee,U[et]=lt),lt.matrix.fromArray(at.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(at.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(ot.x,ot.y,ot.width,ot.height),et===0&&(k.matrix.copy(lt.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Xt===!0&&k.cameras.push(lt)}let wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){u=n.getBinding();let et=u.getDepthInformation(yt[0]);et&&et.isValid&&et.texture&&m.init(et,s.renderState)}if(wt&&wt.includes("camera-access")&&b){t.state.unbindTexture(),u=n.getBinding();for(let et=0;et<yt.length;et++){let at=yt[et].camera;if(at){let ot=p[at];ot||(ot=new wr,p[at]=ot);let lt=u.getCameraImage(at);ot.sourceTexture=lt}}}}for(let yt=0;yt<M.length;yt++){let Xt=S[yt],wt=M[yt];Xt!==null&&wt!==void 0&&wt.update(Xt,tt,c||a)}ue&&ue($,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}let oe=new kd;oe.setAnimationLoop(ie),this.setAnimationLoop=function($){ue=$},this.dispose=function(){}}},D_=new _e,Xd=new Zt;Xd.set(-1,0,0,0,1,0,0,0,1);function L_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,th(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,w,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),b(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&l(m,p)):p.isPointsMaterial?o(m,p,y,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ye&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ye&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p),w=y.envMap,x=y.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(D_.makeRotationFromEuler(x)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Xd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function l(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function o(m,p,y,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=w*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ye&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function N_(i,t,e,n){let s={},r={},a=[],l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function o(x,M){let S=M.program;n.uniformBlockBinding(x,S)}function c(x,M){let S=s[x.id];S===void 0&&(m(x),S=h(x),s[x.id]=S,x.addEventListener("dispose",y));let C=M.program;n.updateUBOMapping(x,C);let v=t.render.frame;r[x.id]!==v&&(d(x),r[x.id]=v)}function h(x){let M=u();x.__bindingPointIndex=M;let S=i.createBuffer(),C=x.__size,v=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,C,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,S),S}function u(){for(let x=0;x<l;x++)if(a.indexOf(x)===-1)return a.push(x),x;return Ht("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let M=s[x.id],S=x.uniforms,C=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let v=0,T=S.length;v<T;v++){let R=S[v];if(Array.isArray(R))for(let L=0,U=R.length;L<U;L++)f(R[L],v,L,C);else f(R,v,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,M,S,C){if(b(x,M,S,C)===!0){let v=x.__offset,T=x.value;if(Array.isArray(T)){let R=0;for(let L=0;L<T.length;L++){let U=T[L],k=p(U);g(U,x.__data,R),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(R+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,x.__data)}}function g(x,M,S){typeof x=="number"||typeof x=="boolean"?M[0]=x:x.isMatrix3?(M[0]=x.elements[0],M[1]=x.elements[1],M[2]=x.elements[2],M[3]=0,M[4]=x.elements[3],M[5]=x.elements[4],M[6]=x.elements[5],M[7]=0,M[8]=x.elements[6],M[9]=x.elements[7],M[10]=x.elements[8],M[11]=0):ArrayBuffer.isView(x)?M.set(new x.constructor(x.buffer,x.byteOffset,M.length)):x.toArray(M,S)}function b(x,M,S,C){let v=x.value,T=M+"_"+S;if(C[T]===void 0)return typeof v=="number"||typeof v=="boolean"?C[T]=v:ArrayBuffer.isView(v)?C[T]=v.slice():C[T]=v.clone(),!0;{let R=C[T];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return C[T]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function m(x){let M=x.uniforms,S=0,C=16;for(let T=0,R=M.length;T<R;T++){let L=Array.isArray(M[T])?M[T]:[M[T]];for(let U=0,k=L.length;U<k;U++){let N=L[U],B=Array.isArray(N.value)?N.value:[N.value];for(let q=0,X=B.length;q<X;q++){let nt=B[q],Y=p(nt),Q=S%C,it=Q%Y.boundary,Nt=Q+it;S+=it,Nt!==0&&C-Nt<Y.storage&&(S+=C-Nt),N.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=S,S+=Y.storage}}}let v=S%C;return v>0&&(S+=C-v),x.__size=S,x.__cache={},this}function p(x){let M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?Wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(M.boundary=16,M.storage=x.byteLength):Wt("WebGLRenderer: Unsupported uniform value type.",x),M}function y(x){let M=x.target;M.removeEventListener("dispose",y);let S=a.indexOf(M.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function w(){for(let x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:o,update:c,dispose:w}}var U_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),$n=null;function F_(){return $n===null&&($n=new yr(U_,16,16,Ai,Je),$n.name="DFG_LUT",$n.minFilter=Xe,$n.magFilter=Xe,$n.wrapS=Vn,$n.wrapT=Vn,$n.generateMipmaps=!1,$n.needsUpdate=!0),$n}var Al=class{constructor(t={}){let{canvas:e=ad(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=un}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let b=f,m=new Set([Xo,Wo,Ho]),p=new Set([un,Nn,Fs,Os,Bo,Go]),y=new Uint32Array(4),w=new Int32Array(4),x=new P,M=null,S=null,C=[],v=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,L=!1,U=null,k=null,N=null,B=null;this._outputColorSpace=ze;let q=0,X=0,nt=null,Y=-1,Q=null,it=new Ee,Nt=new Ee,At=null,ue=new It(0),ie=0,oe=e.width,$=e.height,tt=1,yt=null,Xt=null,wt=new Ee(0,0,oe,$),qt=new Ee(0,0,oe,$),me=!1,et=new As,at=!1,ot=!1,lt=new _e,ut=new P,Gt=new Ee,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Yt=!1;function Jt(){return nt===null?tt:1}let D=n;function de(E,F){return e.getContext(E,F)}let se,A,_,z,H,Z,ct,ht,J,j,dt,Ft,xt,ft,Ot,Vt,$t,O,pt,K,mt,Mt,st;try{let E={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:o,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ve,!1),e.addEventListener("webglcontextrestored",fe,!1),e.addEventListener("webglcontextcreationerror",Tn,!1),D===null){let F="webgl2";if(D=de(F,E),D===null)throw de(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}zt()}catch(E){throw e.removeEventListener("webglcontextlost",ve,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",Tn,!1),Ht("WebGLRenderer: "+E.message),E}function zt(){se=new Hg(D),se.init(),mt=new R_(D,se),A=new Lg(D,se,t,mt),_=new A_(D,se),A.reversedDepthBuffer&&d&&_.buffers.depth.setReversed(!0),k=D.createFramebuffer(),N=D.createFramebuffer(),B=D.createFramebuffer(),z=new qg(D),H=new f_,Z=new C_(D,se,_,H,A,mt,z),ct=new Vg(R),ht=new Zp(D),Mt=new Ig(D,ht),J=new Wg(D,ht,z,Mt),j=new Zg(D,J,ht,Mt,z),O=new Yg(D,A,Z),Ot=new Ng(H),dt=new d_(R,ct,se,A,Mt,Ot),Ft=new L_(R,H),xt=new m_,ft=new b_(se),$t=new Pg(R,ct,_,j,g,o),Vt=new T_(R,j,A),st=new N_(D,z,A,_),pt=new Dg(D,se,z),K=new Xg(D,se,z),z.programs=dt.programs,R.capabilities=A,R.extensions=se,R.properties=H,R.renderLists=xt,R.shadowMap=Vt,R.state=_,R.info=z}b!==un&&(T=new $g(b,e.width,e.height,l,s,r));let Dt=new Sh(R,D);this.xr=Dt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let E=se.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=se.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(E){E!==void 0&&(tt=E,this.setSize(oe,$,!1))},this.getSize=function(E){return E.set(oe,$)},this.setSize=function(E,F,W=!0){if(Dt.isPresenting){Wt("WebGLRenderer: Can't change size while VR device is presenting.");return}oe=E,$=F,e.width=Math.floor(E*tt),e.height=Math.floor(F*tt),W===!0&&(e.style.width=E+"px",e.style.height=F+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(oe*tt,$*tt).floor()},this.setDrawingBufferSize=function(E,F,W){oe=E,$=F,tt=W,e.width=Math.floor(E*W),e.height=Math.floor(F*W),this.setViewport(0,0,E,F)},this.setEffects=function(E){if(b===un){Ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let F=0;F<E.length;F++)if(E[F].isOutputPass===!0){Wt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(it)},this.getViewport=function(E){return E.copy(wt)},this.setViewport=function(E,F,W,G){E.isVector4?wt.set(E.x,E.y,E.z,E.w):wt.set(E,F,W,G),_.viewport(it.copy(wt).multiplyScalar(tt).round())},this.getScissor=function(E){return E.copy(qt)},this.setScissor=function(E,F,W,G){E.isVector4?qt.set(E.x,E.y,E.z,E.w):qt.set(E,F,W,G),_.scissor(Nt.copy(qt).multiplyScalar(tt).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(E){_.setScissorTest(me=E)},this.setOpaqueSort=function(E){yt=E},this.setTransparentSort=function(E){Xt=E},this.getClearColor=function(E){return E.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor(...arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,W=!0){let G=0;if(E){let V=!1;if(nt!==null){let bt=nt.texture.format;V=m.has(bt)}if(V){let bt=nt.texture.type,Tt=p.has(bt),vt=$t.getClearColor(),Rt=$t.getClearAlpha(),Lt=vt.r,jt=vt.g,re=vt.b;Tt?(y[0]=Lt,y[1]=jt,y[2]=re,y[3]=Rt,D.clearBufferuiv(D.COLOR,0,y)):(w[0]=Lt,w[1]=jt,w[2]=re,w[3]=Rt,D.clearBufferiv(D.COLOR,0,w))}else G|=D.COLOR_BUFFER_BIT}F&&(G|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),U=E},this.dispose=function(){e.removeEventListener("webglcontextlost",ve,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",Tn,!1),$t.dispose(),xt.dispose(),ft.dispose(),H.dispose(),ct.dispose(),j.dispose(),Mt.dispose(),st.dispose(),dt.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",Bh),Dt.removeEventListener("sessionend",Gh),Pi.stop()};function ve(E){E.preventDefault(),dr("WebGLRenderer: Context Lost."),L=!0}function fe(){dr("WebGLRenderer: Context Restored."),L=!1;let E=z.autoReset,F=Vt.enabled,W=Vt.autoUpdate,G=Vt.needsUpdate,V=Vt.type;zt(),z.autoReset=E,Vt.enabled=F,Vt.autoUpdate=W,Vt.needsUpdate=G,Vt.type=V}function Tn(E){Ht("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function zn(E){let F=E.target;F.removeEventListener("dispose",zn),If(F)}function If(E){Df(E),H.remove(E)}function Df(E){let F=H.get(E).programs;F!==void 0&&(F.forEach(function(W){dt.releaseProgram(W)}),E.isShaderMaterial&&dt.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,W,G,V,bt){F===null&&(F=kt);let Tt=V.isMesh&&V.matrixWorld.determinantAffine()<0,vt=Uf(E,F,W,G,V);_.setMaterial(G,Tt);let Rt=W.index,Lt=1;if(G.wireframe===!0){if(Rt=J.getWireframeAttribute(W),Rt===void 0)return;Lt=2}let jt=W.drawRange,re=W.attributes.position,Pt=jt.start*Lt,pe=(jt.start+jt.count)*Lt;bt!==null&&(Pt=Math.max(Pt,bt.start*Lt),pe=Math.min(pe,(bt.start+bt.count)*Lt)),Rt!==null?(Pt=Math.max(Pt,0),pe=Math.min(pe,Rt.count)):re!=null&&(Pt=Math.max(Pt,0),pe=Math.min(pe,re.count));let Ue=pe-Pt;if(Ue<0||Ue===1/0)return;Mt.setup(V,G,vt,W,Rt);let Se,ye=pt;if(Rt!==null&&(Se=ht.get(Rt),ye=K,ye.setIndex(Se)),V.isMesh)G.wireframe===!0?(_.setLineWidth(G.wireframeLinewidth*Jt()),ye.setMode(D.LINES)):ye.setMode(D.TRIANGLES);else if(V.isLine){let Qe=G.linewidth;Qe===void 0&&(Qe=1),_.setLineWidth(Qe*Jt()),V.isLineSegments?ye.setMode(D.LINES):V.isLineLoop?ye.setMode(D.LINE_LOOP):ye.setMode(D.LINE_STRIP)}else V.isPoints?ye.setMode(D.POINTS):V.isSprite&&ye.setMode(D.TRIANGLES);if(V.isBatchedMesh)if(se.get("WEBGL_multi_draw"))ye.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Qe=V._multiDrawStarts,Et=V._multiDrawCounts,on=V._multiDrawCount,le=Rt?ht.get(Rt).bytesPerElement:1,yn=H.get(G).currentProgram.getUniforms();for(let kn=0;kn<on;kn++)yn.setValue(D,"_gl_DrawID",kn),ye.render(Qe[kn]/le,Et[kn])}else if(V.isInstancedMesh)ye.renderInstances(Pt,Ue,V.count);else if(W.isInstancedBufferGeometry){let Qe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Et=Math.min(W.instanceCount,Qe);ye.renderInstances(Pt,Ue,Et)}else ye.render(Pt,Ue)};function kh(E,F,W,G){U!==null&&E.isNodeMaterial&&U.setObject(G,E),at===!0&&Ot.setState(E,W,!1),E.transparent===!0&&E.side===Ze&&E.forceSinglePass===!1?(E.side=Ye,E.needsUpdate=!0,Sa(E,F,G),E.side=Jn,E.needsUpdate=!0,Sa(E,F,G),E.side=Ze):Sa(E,F,G)}this.compile=function(E,F,W=null){W===null&&(W=E),U!==null&&U.renderStart(E,F,W),S=ft.get(W),S.init(F),v.push(S),W.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(S.pushLight(V),V.castShadow&&S.pushShadow(V))}),E!==W&&E.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(S.pushLight(V),V.castShadow&&S.pushShadow(V))}),S.setupLights(),U!==null&&U.updateLights(S.state.lightsArray),ot=this.localClippingEnabled,at=Ot.init(this.clippingPlanes,ot),at===!0&&Ot.setGlobalState(this.clippingPlanes,F),U!==null&&Vt.render(S.state.shadowsArray,W,F);let G=new Set;return E.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let bt=V.material;if(bt)if(Array.isArray(bt))for(let Tt=0;Tt<bt.length;Tt++){let vt=bt[Tt];kh(vt,W,F,V),G.add(vt)}else kh(bt,W,F,V),G.add(bt)}),S=v.pop(),U!==null&&U.renderEnd(),G},this.compileAsync=function(E,F,W=null){let G=this.compile(E,F,W);return new Promise(V=>{function bt(){if(G.forEach(function(Tt){let Rt=H.get(Tt).currentProgram;(Rt===void 0||Rt.isReady())&&G.delete(Tt)}),G.size===0){V(E);return}setTimeout(bt,10)}se.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let jl=null;function Lf(E){jl&&jl(E)}function Bh(){Pi.stop()}function Gh(){Pi.start()}let Pi=new kd;Pi.setAnimationLoop(Lf),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(E){jl=E,Dt.setAnimationLoop(E),E===null?Pi.stop():Pi.start()},Dt.addEventListener("sessionstart",Bh),Dt.addEventListener("sessionend",Gh),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){Ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;U!==null&&U.renderStart(E,F);let W=Dt.enabled===!0&&Dt.isPresenting===!0,G=T!==null&&(nt===null||W)&&T.begin(R,nt);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(F),F=Dt.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,F,nt),S=ft.get(E,v.length),S.init(F),S.state.textureUnits=Z.getTextureUnits(),v.push(S),lt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),et.setFromProjectionMatrix(lt,In,F.reversedDepth),ot=this.localClippingEnabled,at=Ot.init(this.clippingPlanes,ot),M=xt.get(E,C.length),M.init(),C.push(M),Dt.enabled===!0&&Dt.isPresenting===!0){let Tt=R.xr.getDepthSensingMesh();Tt!==null&&Ql(Tt,F,-1/0,R.sortObjects)}Ql(E,F,0,R.sortObjects),M.finish(),U!==null&&U.updateLights(S.state.lightsArray),R.sortObjects===!0&&M.sort(yt,Xt),Yt=Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1,Yt&&$t.addToRenderList(M,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),at===!0&&Ot.beginShadows();let V=S.state.shadowsArray;if(Vt.render(V,E,F),at===!0&&Ot.endShadows(),(G&&T.hasRenderPass())===!1){let Tt=M.opaque,vt=M.transmissive;if(S.setupLights(),F.isArrayCamera){let Rt=F.cameras;if(vt.length>0)for(let Lt=0,jt=Rt.length;Lt<jt;Lt++){let re=Rt[Lt];Hh(Tt,vt,E,re)}Yt&&$t.render(E);for(let Lt=0,jt=Rt.length;Lt<jt;Lt++){let re=Rt[Lt];Vh(M,E,re,re.viewport)}}else vt.length>0&&Hh(Tt,vt,E,F),Yt&&$t.render(E),Vh(M,E,F)}nt!==null&&X===0&&(Z.updateMultisampleRenderTarget(nt),Z.updateRenderTargetMipmap(nt)),G&&T.end(R),E.isScene===!0&&E.onAfterRender(R,E,F),Mt.resetDefaultState(),Y=-1,Q=null,v.pop(),v.length>0?(S=v[v.length-1],Z.setTextureUnits(S.state.textureUnits),at===!0&&Ot.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,C.pop(),C.length>0?M=C[C.length-1]:M=null,U!==null&&U.renderEnd()};function Ql(E,F,W,G){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLightProbeGrid)S.pushLightProbeGrid(E);else if(E.isLight)S.pushLight(E),E.castShadow&&S.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(et)){G&&Gt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(lt);let Tt=j.update(E),vt=E.material;vt.visible&&M.push(E,Tt,vt,W,Gt.z,null,F)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(et))){let Tt=j.update(E),vt=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Gt.copy(E.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),Gt.copy(Tt.boundingSphere.center)),Gt.applyMatrix4(E.matrixWorld).applyMatrix4(lt)),Array.isArray(vt)){let Rt=Tt.groups;for(let Lt=0,jt=Rt.length;Lt<jt;Lt++){let re=Rt[Lt],Pt=vt[re.materialIndex];Pt&&Pt.visible&&M.push(E,Tt,Pt,W,Gt.z,re,F)}}else vt.visible&&M.push(E,Tt,vt,W,Gt.z,null,F)}}let bt=E.children;for(let Tt=0,vt=bt.length;Tt<vt;Tt++)Ql(bt[Tt],F,W,G)}function Vh(E,F,W,G){let{opaque:V,transmissive:bt,transparent:Tt}=E;S.setupLightsView(W),at===!0&&Ot.setGlobalState(R.clippingPlanes,W),G&&_.viewport(it.copy(G)),V.length>0&&Ma(V,F,W),bt.length>0&&Ma(bt,F,W),Tt.length>0&&Ma(Tt,F,W),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Hh(E,F,W,G){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[G.id]===void 0){let Pt=se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[G.id]=new Oe(1,1,{generateMipmaps:!0,type:Pt?Je:un,minFilter:Ei,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ne.workingColorSpace})}let bt=S.state.transmissionRenderTarget[G.id],Tt=G.viewport||it;bt.setSize(Tt.z*R.transmissionResolutionScale,Tt.w*R.transmissionResolutionScale);let vt=R.getRenderTarget(),Rt=R.getActiveCubeFace(),Lt=R.getActiveMipmapLevel();R.setRenderTarget(bt),R.getClearColor(ue),ie=R.getClearAlpha(),ie<1&&R.setClearColor(16777215,.5),R.clear(),Yt&&$t.render(W);let jt=R.toneMapping;R.toneMapping=Ln;let re=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),S.setupLightsView(G),at===!0&&Ot.setGlobalState(R.clippingPlanes,G),Ma(E,W,G),Z.updateMultisampleRenderTarget(bt),Z.updateRenderTargetMipmap(bt),se.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let pe=0,Ue=F.length;pe<Ue;pe++){let Se=F[pe],{object:ye,geometry:Qe,material:Et,group:on}=Se;if(Et.side===Ze&&ye.layers.test(G.layers)){let le=Et.side;Et.side=Ye,Et.needsUpdate=!0,Wh(ye,W,G,Qe,Et,on),Et.side=le,Et.needsUpdate=!0,Pt=!0}}Pt===!0&&(Z.updateMultisampleRenderTarget(bt),Z.updateRenderTargetMipmap(bt))}R.setRenderTarget(vt,Rt,Lt),R.setClearColor(ue,ie),re!==void 0&&(G.viewport=re),R.toneMapping=jt}function Ma(E,F,W){let G=F.isScene===!0?F.overrideMaterial:null;for(let V=0,bt=E.length;V<bt;V++){let Tt=E[V],{object:vt,geometry:Rt,group:Lt}=Tt,jt=Tt.material;jt.allowOverride===!0&&G!==null&&(jt=G),vt.layers.test(W.layers)&&Wh(vt,F,W,Rt,jt,Lt)}}function Wh(E,F,W,G,V,bt){U!==null&&V.isNodeMaterial&&U.setObject(E,V),E.onBeforeRender(R,F,W,G,V,bt),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(R,F,W,G,E,bt),V.transparent===!0&&V.side===Ze&&V.forceSinglePass===!1?(V.side=Ye,V.needsUpdate=!0,R.renderBufferDirect(W,F,G,V,E,bt),V.side=Jn,V.needsUpdate=!0,R.renderBufferDirect(W,F,G,V,E,bt),V.side=Ze):R.renderBufferDirect(W,F,G,V,E,bt),E.onAfterRender(R,F,W,G,V,bt)}function Sa(E,F,W){F.isScene!==!0&&(F=kt);let G=H.get(E),V=S.state.lights,bt=S.state.shadowsArray,Tt=V.state.version,vt=dt.getParameters(E,V.state,bt,F,W,S.state.lightProbeGridArray),Rt=dt.getProgramCacheKey(vt),Lt=G.programs;G.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,G.fog=F.fog;let jt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;G.envMap=ct.get(E.envMap||G.environment,jt),G.envMapRotation=G.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Lt===void 0&&(E.addEventListener("dispose",zn),Lt=new Map,G.programs=Lt);let re=Lt.get(Rt);if(re!==void 0){if(G.currentProgram===re&&G.lightsStateVersion===Tt)return qh(E,vt),re}else vt.uniforms=dt.getUniforms(E),U!==null&&E.isNodeMaterial&&U.build(E,W,vt),E.onBeforeCompile(vt,R),re=dt.acquireProgram(vt,Rt),Lt.set(Rt,re),G.uniforms=vt.uniforms;let Pt=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Pt.clippingPlanes=Ot.uniform),qh(E,vt),G.needsLights=Of(E),G.lightsStateVersion=Tt,G.needsLights&&(Pt.ambientLightColor.value=V.state.ambient,Pt.lightProbe.value=V.state.probe,Pt.sunLights.value=V.state.sun,Pt.sunLightShadows.value=V.state.sunShadow,Pt.directionalLights.value=V.state.directional,Pt.directionalLightShadows.value=V.state.directionalShadow,Pt.spotLights.value=V.state.spot,Pt.spotLightShadows.value=V.state.spotShadow,Pt.rectAreaLights.value=V.state.rectArea,Pt.ltc_1.value=V.state.rectAreaLTC1,Pt.ltc_2.value=V.state.rectAreaLTC2,Pt.pointLights.value=V.state.point,Pt.pointLightShadows.value=V.state.pointShadow,Pt.hemisphereLights.value=V.state.hemi,Pt.sunShadowMatrix.value=V.state.sunShadowMatrix,Pt.sunShadowCascade.value=V.state.sunShadowCascade,Pt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Pt.spotLightMatrix.value=V.state.spotLightMatrix,Pt.spotLightMap.value=V.state.spotLightMap,Pt.pointShadowMatrix.value=V.state.pointShadowMatrix),G.lightProbeGrid=S.state.lightProbeGridArray.length>0,G.currentProgram=re,G.uniformsList=null,re}function Xh(E){if(E.uniformsList===null){let F=E.currentProgram.getUniforms();E.uniformsList=Bs.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function qh(E,F){let W=H.get(E);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function Nf(E,F){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;x.setFromMatrixPosition(F.matrixWorld);for(let W=0,G=E.length;W<G;W++){let V=E[W];if(V.texture!==null&&V.boundingBox.containsPoint(x))return V}return null}function Uf(E,F,W,G,V){F.isScene!==!0&&(F=kt),Z.resetTextureUnits();let bt=F.fog,Tt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?F.environment:null,vt=nt===null?R.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:ne.workingColorSpace,Rt=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Lt=ct.get(G.envMap||Tt,Rt),jt=G.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,re=!!W.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Pt=!!W.morphAttributes.position,pe=!!W.morphAttributes.normal,Ue=!!W.morphAttributes.color,Se=Ln;G.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Se=R.toneMapping);let ye=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Qe=ye!==void 0?ye.length:0,Et=H.get(G),on=S.state.lights;if(at===!0&&(ot===!0||E!==Q)){let be=E===Q&&G.id===Y;Ot.setState(G,E,be)}let le=!1;G.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==on.state.version||Et.outputColorSpace!==vt||V.isBatchedMesh&&Et.batching===!1||!V.isBatchedMesh&&Et.batching===!0||V.isBatchedMesh&&Et.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Et.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Et.instancing===!1||!V.isInstancedMesh&&Et.instancing===!0||V.isSkinnedMesh&&Et.skinning===!1||!V.isSkinnedMesh&&Et.skinning===!0||V.isInstancedMesh&&Et.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Et.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Et.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Et.instancingMorph===!1&&V.morphTexture!==null||Et.envMap!==Lt||G.fog===!0&&Et.fog!==bt||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==Ot.numPlanes||Et.numIntersection!==Ot.numIntersection)||Et.vertexAlphas!==jt||Et.vertexTangents!==re||Et.morphTargets!==Pt||Et.morphNormals!==pe||Et.morphColors!==Ue||Et.toneMapping!==Se||Et.morphTargetsCount!==Qe||!!Et.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(le=!0):(le=!0,Et.__version=G.version);let yn=Et.currentProgram;le===!0&&(yn=Sa(G,F,V),U&&G.isNodeMaterial&&U.onUpdateProgram(G,yn,Et));let kn=!1,li=!1,ji=!1,ge=yn.getUniforms(),De=Et.uniforms;if(_.useProgram(yn.program)&&(kn=!0,li=!0,ji=!0),G.id!==Y&&(Y=G.id,li=!0),Et.needsLights){let be=Nf(S.state.lightProbeGridArray,V);Et.lightProbeGrid!==be&&(Et.lightProbeGrid=be,li=!0)}if(kn||Q!==E){_.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ge.setValue(D,"projectionMatrix",E.projectionMatrix),ge.setValue(D,"viewMatrix",E.matrixWorldInverse);let hi=ge.map.cameraPosition;hi!==void 0&&hi.setValue(D,ut.setFromMatrixPosition(E.matrixWorld)),A.logarithmicDepthBuffer&&ge.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ge.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),Q!==E&&(Q=E,li=!0,ji=!0)}if(Et.needsLights&&(on.state.sunShadowMap.length>0&&ge.setValue(D,"sunShadowMap",on.state.sunShadowMap,Z),on.state.directionalShadowMap.length>0&&ge.setValue(D,"directionalShadowMap",on.state.directionalShadowMap,Z),on.state.spotShadowMap.length>0&&ge.setValue(D,"spotShadowMap",on.state.spotShadowMap,Z),on.state.pointShadowMap.length>0&&ge.setValue(D,"pointShadowMap",on.state.pointShadowMap,Z)),V.isSkinnedMesh){ge.setOptional(D,V,"bindMatrix"),ge.setOptional(D,V,"bindMatrixInverse");let be=V.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),ge.setValue(D,"boneTexture",be.boneTexture,Z))}V.isBatchedMesh&&(ge.setOptional(D,V,"batchingTexture"),ge.setValue(D,"batchingTexture",V._matricesTexture,Z),ge.setOptional(D,V,"batchingIdTexture"),ge.setValue(D,"batchingIdTexture",V._indirectTexture,Z),ge.setOptional(D,V,"batchingColorTexture"),V._colorsTexture!==null&&ge.setValue(D,"batchingColorTexture",V._colorsTexture,Z));let ci=W.morphAttributes;if((ci.position!==void 0||ci.normal!==void 0||ci.color!==void 0)&&O.update(V,W,yn),(li||Et.receiveShadow!==V.receiveShadow)&&(Et.receiveShadow=V.receiveShadow,ge.setValue(D,"receiveShadow",V.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&F.environment!==null&&(De.envMapIntensity.value=F.environmentIntensity),De.dfgLUT!==void 0&&(De.dfgLUT.value=F_()),li){if(ge.setValue(D,"toneMappingExposure",R.toneMappingExposure),Et.needsLights&&Ff(De,ji),bt&&G.fog===!0&&Ft.refreshFogUniforms(De,bt),Ft.refreshMaterialUniforms(De,G,tt,$,S.state.transmissionRenderTarget[E.id]),Et.needsLights&&Et.lightProbeGrid){let be=Et.lightProbeGrid;De.probesSH.value=be.texture,De.probesMin.value.copy(be.boundingBox.min),De.probesMax.value.copy(be.boundingBox.max),De.probesResolution.value.copy(be.resolution)}Bs.upload(D,Xh(Et),De,Z)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Bs.upload(D,Xh(Et),De,Z),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ge.setValue(D,"center",V.center),ge.setValue(D,"modelViewMatrix",V.modelViewMatrix),ge.setValue(D,"normalMatrix",V.normalMatrix),ge.setValue(D,"modelMatrix",V.matrixWorld),G.uniformsGroups!==void 0){let be=G.uniformsGroups;for(let hi=0,Qi=be.length;hi<Qi;hi++){let Zh=be[hi];st.update(Zh,yn),st.bind(Zh,yn)}}return yn}function Ff(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.sunLights.needsUpdate=F,E.sunLightShadows.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function Of(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(E,F,W){let G=H.get(E);G.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),H.get(E.texture).__webglTexture=F,H.get(E.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:W,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){let W=H.get(E);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,W=0){nt=E,q=F,X=W;let G=null,V=!1,bt=!1;if(E){let vt=H.get(E);if(vt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(D.FRAMEBUFFER,vt.__webglFramebuffer),it.copy(E.viewport),Nt.copy(E.scissor),At=E.scissorTest,_.viewport(it),_.scissor(Nt),_.setScissorTest(At),Y=-1;return}else if(vt.__webglFramebuffer===void 0)Z.setupRenderTarget(E);else if(vt.__hasExternalTextures)Z.rebindTextures(E,H.get(E.texture).__webglTexture,H.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let jt=E.depthTexture;if(vt.__boundDepthTexture!==jt){if(jt!==null&&H.has(jt)&&(E.width!==jt.image.width||E.height!==jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(E)}}let Rt=E.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(bt=!0);let Lt=H.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Lt[F])?G=Lt[F][W]:G=Lt[F],V=!0):E.samples>0&&Z.useMultisampledRTT(E)===!1?G=H.get(E).__webglMultisampledFramebuffer:Array.isArray(Lt)?G=Lt[W]:G=Lt,it.copy(E.viewport),Nt.copy(E.scissor),At=E.scissorTest}else it.copy(wt).multiplyScalar(tt).floor(),Nt.copy(qt).multiplyScalar(tt).floor(),At=me;if(W!==0&&(G=k),_.bindFramebuffer(D.FRAMEBUFFER,G)&&_.drawBuffers(E,G),_.viewport(it),_.scissor(Nt),_.setScissorTest(At),V){let vt=H.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,vt.__webglTexture,W)}else if(bt){let vt=F;for(let Rt=0;Rt<E.textures.length;Rt++){let Lt=H.get(E.textures[Rt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Rt,Lt.__webglTexture,W,vt)}}else if(E!==null&&W!==0){let vt=H.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,vt.__webglTexture,W)}Y=-1};function Yh(E){let F=H.get(E);return(F.__readFormat!==E.format||F.__readType!==E.type)&&(F.__readFormat=E.format,F.__readType=E.type,F.__formatReadable=A.textureFormatReadable(E.format),F.__typeReadable=A.textureTypeReadable(E.type)),F}this.readRenderTargetPixels=function(E,F,W,G,V,bt,Tt,vt=0){if(!(E&&E.isWebGLRenderTarget)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=H.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Tt!==void 0&&(Rt=Rt[Tt]),Rt){_.bindFramebuffer(D.FRAMEBUFFER,Rt);try{let Lt=E.textures[vt],jt=Lt.format,re=Lt.type;E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+vt);let Pt=Yh(Lt);if(Pt.__formatReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-G&&W>=0&&W<=E.height-V&&D.readPixels(F,W,G,V,mt.convert(jt),mt.convert(re),bt)}finally{let Lt=nt!==null?H.get(nt).__webglFramebuffer:null;_.bindFramebuffer(D.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(E,F,W,G,V,bt,Tt,vt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=H.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Tt!==void 0&&(Rt=Rt[Tt]),Rt)if(F>=0&&F<=E.width-G&&W>=0&&W<=E.height-V){_.bindFramebuffer(D.FRAMEBUFFER,Rt);let Lt=E.textures[vt],jt=Lt.format,re=Lt.type;E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+vt);let Pt=Yh(Lt);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,pe),D.bufferData(D.PIXEL_PACK_BUFFER,bt.byteLength,D.STREAM_READ),D.readPixels(F,W,G,V,mt.convert(jt),mt.convert(re),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let Ue=nt!==null?H.get(nt).__webglFramebuffer:null;_.bindFramebuffer(D.FRAMEBUFFER,Ue);let Se=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await ld(D,Se,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,pe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,bt),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(pe),D.deleteSync(Se),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,W=0){let G=Math.pow(2,-W),V=Math.floor(E.image.width*G),bt=Math.floor(E.image.height*G),Tt=F!==null?F.x:0,vt=F!==null?F.y:0;Z.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,Tt,vt,V,bt),_.unbindTexture()},this.copyTextureToTexture=function(E,F,W=null,G=null,V=0,bt=0){let Tt,vt,Rt,Lt,jt,re,Pt,pe,Ue,Se=E.isCompressedTexture?E.mipmaps[bt]:E.image;if(W!==null)Tt=W.max.x-W.min.x,vt=W.max.y-W.min.y,Rt=W.isBox3?W.max.z-W.min.z:1,Lt=W.min.x,jt=W.min.y,re=W.isBox3?W.min.z:0;else{let De=Math.pow(2,-V);Tt=Math.floor(Se.width*De),vt=Math.floor(Se.height*De),E.isDataArrayTexture?Rt=Se.depth:E.isData3DTexture?Rt=Math.floor(Se.depth*De):Rt=1,Lt=0,jt=0,re=0}G!==null?(Pt=G.x,pe=G.y,Ue=G.z):(Pt=0,pe=0,Ue=0);let ye=mt.convert(F.format),Qe=mt.convert(F.type),Et;F.isData3DTexture?(Z.setTexture3D(F,0),Et=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Z.setTexture2DArray(F,0),Et=D.TEXTURE_2D_ARRAY):(Z.setTexture2D(F,0),Et=D.TEXTURE_2D),_.activeTexture(D.TEXTURE0),_.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),_.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),_.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);let on=_.getParameter(D.UNPACK_ROW_LENGTH),le=_.getParameter(D.UNPACK_IMAGE_HEIGHT),yn=_.getParameter(D.UNPACK_SKIP_PIXELS),kn=_.getParameter(D.UNPACK_SKIP_ROWS),li=_.getParameter(D.UNPACK_SKIP_IMAGES);_.pixelStorei(D.UNPACK_ROW_LENGTH,Se.width),_.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Se.height),_.pixelStorei(D.UNPACK_SKIP_PIXELS,Lt),_.pixelStorei(D.UNPACK_SKIP_ROWS,jt),_.pixelStorei(D.UNPACK_SKIP_IMAGES,re);let ji=E.isDataArrayTexture||E.isData3DTexture,ge=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){let De=H.get(E),ci=H.get(F),be=H.get(De.__renderTarget),hi=H.get(ci.__renderTarget);_.bindFramebuffer(D.READ_FRAMEBUFFER,be.__webglFramebuffer),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,hi.__webglFramebuffer);for(let Qi=0;Qi<Rt;Qi++)ji&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,H.get(E).__webglTexture,V,re+Qi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,H.get(F).__webglTexture,bt,Ue+Qi)),D.blitFramebuffer(Lt,jt,Tt,vt,Pt,pe,Tt,vt,D.DEPTH_BUFFER_BIT,D.NEAREST);_.bindFramebuffer(D.READ_FRAMEBUFFER,null),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(V!==0||E.isRenderTargetTexture||H.has(E)){let De=H.get(E),ci=H.get(F);_.bindFramebuffer(D.READ_FRAMEBUFFER,N),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,B);for(let be=0;be<Rt;be++)ji?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,De.__webglTexture,V,re+be):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,De.__webglTexture,V),ge?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ci.__webglTexture,bt,Ue+be):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ci.__webglTexture,bt),V!==0?D.blitFramebuffer(Lt,jt,Tt,vt,Pt,pe,Tt,vt,D.COLOR_BUFFER_BIT,D.NEAREST):ge?D.copyTexSubImage3D(Et,bt,Pt,pe,Ue+be,Lt,jt,Tt,vt):D.copyTexSubImage2D(Et,bt,Pt,pe,Lt,jt,Tt,vt);_.bindFramebuffer(D.READ_FRAMEBUFFER,null),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ge?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Et,bt,Pt,pe,Ue,Tt,vt,Rt,ye,Qe,Se.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Et,bt,Pt,pe,Ue,Tt,vt,Rt,ye,Se.data):D.texSubImage3D(Et,bt,Pt,pe,Ue,Tt,vt,Rt,ye,Qe,Se):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,bt,Pt,pe,Tt,vt,ye,Qe,Se.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,bt,Pt,pe,Se.width,Se.height,ye,Se.data):D.texSubImage2D(D.TEXTURE_2D,bt,Pt,pe,Tt,vt,ye,Qe,Se);_.pixelStorei(D.UNPACK_ROW_LENGTH,on),_.pixelStorei(D.UNPACK_IMAGE_HEIGHT,le),_.pixelStorei(D.UNPACK_SKIP_PIXELS,yn),_.pixelStorei(D.UNPACK_SKIP_ROWS,kn),_.pixelStorei(D.UNPACK_SKIP_IMAGES,li),bt===0&&F.generateMipmaps&&D.generateMipmap(Et),_.unbindTexture()},this.initRenderTarget=function(E){H.get(E).__webglFramebuffer===void 0&&Z.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Z.setTextureCube(E,0):E.isData3DTexture?Z.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Z.setTexture2DArray(E,0):Z.setTexture2D(E,0),_.unbindTexture()},this.resetState=function(){q=0,X=0,nt=null,_.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}};var Hs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var xn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},O_=new Mi(-1,1,1,-1,0,1),wh=class extends Pe{constructor(){super(),this.setAttribute("position",new ee([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ee([0,2,0,0,2,0],2))}},z_=new wh,Ci=class{constructor(t){this._mesh=new Ut(z_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,O_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Pl=class extends xn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Le?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ai.clone(t.uniforms),this.material=new Le({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Ci(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var da=class extends xn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,l;this.inverse?(a=0,l=1):(a=1,l=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(l),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Il=class extends xn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Dl=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new rt);this._width=n.width,this._height=n.height,e=new Oe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Je}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Pl(Hs),this.copyPass.material.blending=bn,this.timer=new qr}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let l=this.renderer.getContext(),o=this.renderer.state.buffers.stencil;o.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),o.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}da!==void 0&&(a instanceof da?n=!0:a instanceof Il&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new rt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ll=class extends xn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new It}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var qd={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new It(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Ws=class i extends xn{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new rt(t.x,t.y):new rt(256,256),this.clearColor=new It(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Oe(r,a,{type:Je,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Oe(r,a,{type:Je,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new Oe(r,a,{type:Je,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let l=qd;this.highPassUniforms=ai.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Le({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];let o=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(o[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new rt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ai.clone(Hs.uniforms),this.blendMaterial=new Le({uniforms:this.copyUniforms,vertexShader:Hs.vertexShader,fragmentShader:Hs.fragmentShader,premultipliedAlpha:!0,blending:Xi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new It,this._oldClearAlpha=1,this._basic=new Dn,this._fsQuad=new Ci(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new rt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let l=this.renderTargetBright;for(let o=0;o<this.nMips;o++)this._fsQuad.material=this.separableBlurMaterials[o],this.separableBlurMaterials[o].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[o].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[o]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[o].uniforms.colorTexture.value=this.renderTargetsHorizontal[o].texture,this.separableBlurMaterials[o].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[o]),t.clear(),this._fsQuad.render(t),l=this.renderTargetsVertical[o];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<t;a+=2){let l=e[a],o=a+1<t?e[a+1]:0,c=l+o;s.push((a*l+(a+1)*o)/c),r.push(c)}return new Le({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new rt(.5,.5)},direction:{value:new rt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new Le({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Ws.BlurDirectionX=new rt(1,0);Ws.BlurDirectionY=new rt(0,1);var fa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Nl=class extends xn{constructor(){super(),this.isOutputPass=!0,this.uniforms=ai.clone(fa.uniforms),this.material=new Is({name:fa.name,uniforms:this.uniforms,vertexShader:fa.vertexShader,fragmentShader:fa.fragmentShader}),this._fsQuad=new Ci(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ne.getTransfer(this._outputColorSpace)===he&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Yr?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Zr?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Jr?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Yi?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Kr?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===jr?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===$r&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ul=class extends Oi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new sn;t.deleteAttribute("uv");let e=new Me({side:Ye}),n=new Me,s=new Hi(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Ut(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new br(t,n,6),l=new ke;l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),l.updateMatrix(),a.setMatrixAt(0,l.matrix),l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),l.updateMatrix(),a.setMatrixAt(1,l.matrix),l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),l.updateMatrix(),a.setMatrixAt(2,l.matrix),l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),l.updateMatrix(),a.setMatrixAt(3,l.matrix),l.position.set(2.291,-.756,-2.621),l.rotation.set(0,-.286,0),l.scale.set(1.546,1.552,1.496),l.updateMatrix(),a.setMatrixAt(4,l.matrix),l.position.set(-2.193,-.369,-5.547),l.rotation.set(0,.516,0),l.scale.set(3.875,3.487,2.986),l.updateMatrix(),a.setMatrixAt(5,l.matrix),this.add(a);let o=new Ut(t,Xs(50));o.position.set(-16.116,14.37,8.208),o.scale.set(.1,2.428,2.739),this.add(o);let c=new Ut(t,Xs(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Ut(t,Xs(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new Ut(t,Xs(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new Ut(t,Xs(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new Ut(t,Xs(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Xs(i){return new kr({color:0,emissive:16777215,emissiveIntensity:i})}var Bt={smallW:.7,smallH:.9,bigW:.8,bigH:1.6,walk:6.5,dash:11,accel:45,decel:35,airAccel:24,iceK:.25,jumpV:13.5,jumpSpeedK:.18,gUpHold:24,gUpRelease:70,gDown:42,maxFall:26,coyote:.1,buffer:.12,stompV:11,stompVHold:15,hurtInv:2,springV:24,springVHold:28,swimG:9,swimSink:3.5,swimStroke:6,swimMax:5,swimDash:6.5,fireSpeed:13,fireG:40,fireBounce:7,fireLife:3,fireMax:2,starTime:10,deathY:-12},pa=1/120,Yd=300,Fl=5,ma=[{name:"\u8349\u539F\u306E\u56FD",theme:"grass",stages:["ground","cave","sky","castle"]},{name:"\u7802\u306E\u56FD",theme:"desert",stages:["ground","water","sky","castle"]},{name:"\u6D77\u306E\u56FD",theme:"sea",stages:["ground","water","sky","castle"]},{name:"\u68EE\u306E\u56FD",theme:"forest",stages:["ground","cave","sky","castle"]},{name:"\u96EA\u306E\u56FD",theme:"snow",stages:["ground","water","cave","castle"]},{name:"\u96F2\u306E\u56FD",theme:"cloud",stages:["sky","cave","sky","castle"]},{name:"\u591C\u306E\u56FD",theme:"night",stages:["ground","water","sky","castle"]},{name:"\u706B\u5C71\u306E\u56FD",theme:"volcano",stages:["ground","cave","sky","castle"]}],Ol={ground:"\u5730\u4E0A",cave:"\u5730\u4E0B",sky:"\u7A7A\u4E2D",water:"\u6C34\u4E2D",castle:"\u57CE"},wn={grass:{top:"grass_top",side:"grass_side",body:"dirt",plat:"wood",platTop:"grass_top",sky:"grass",fog:13624562,sun:16774108,amb:12376319,ground:6134344,caveSky:"cave",cave:"cave",cavebrick:"cavebrick"},desert:{top:"sand_top",side:"sand_side",body:"sandstone",plat:"sandstone",platTop:"sand_top",sky:"desert",fog:15777930,sun:16765600,amb:13148344,ground:13145434,cave:"sandstone",cavebrick:"brick"},sea:{top:"beach_top",side:"sand_side",body:"sandstone",plat:"wood",platTop:"wood",sky:"sea",fog:12576502,sun:16776168,amb:11065599,ground:4034496,cave:"coral",cavebrick:"cavebrick"},forest:{top:"forest_top",side:"forest_side",body:"forest_dirt",plat:"mush_cap",platTop:"mush_cap",sky:"forest",fog:12574924,sun:16773320,amb:10274984,ground:3107380,cave:"bark",cavebrick:"cavebrick"},snow:{top:"snow_top",side:"snow_side",body:"icerock",plat:"ice",platTop:"snow_top",sky:"snow",fog:14871802,sun:16777215,amb:13162751,ground:14674166,cave:"ice",cavebrick:"icerock",icy:!0},cloud:{top:"cloud",side:"cloud",body:"cloud",plat:"cloud",platTop:"cloud",sky:"cloud",fog:15134975,sun:16777215,amb:13689087,ground:15266047,cave:"cloud",cavebrick:"metal"},night:{top:"night_top",side:"nightstone",body:"nightstone",plat:"metal",platTop:"metal",sky:"night",fog:2764896,sun:12110079,amb:5267616,ground:2635872,cave:"nightstone",cavebrick:"metal"},volcano:{top:"basalt",side:"basalt",body:"basalt",plat:"basalt",platTop:"basalt",sky:"volcano",fog:6957598,sun:16756864,amb:10506304,ground:2757648,cave:"basalt",cavebrick:"castle"}};function k_(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var te=4,Eh=class{constructor(t,e){this.world=t,this.stage=e;let n=ma[t-1];this.type=n.stages[e-1],this.theme=n.theme,this.T=wn[this.theme],this.r=k_(t*1009+e*131+7),this.d=t-1+(e-1)*.25,this.x=0,this.gy=0,this.solids=[],this.blocks=[],this.coins=[],this.enemies=[],this.movers=[],this.firebars=[],this.bubbles=[],this.cannons=[],this.lava=[],this.water=null,this.decor=[],this.springs=[],this.checkpoint=null,this.goal=null,this.boss=null,this.ceil=null,this.bk=new Set}rand(t,e){return t+(e-t)*this.r()}ri(t,e){return Math.floor(this.rand(t,e+1))}pick(t){return t[Math.floor(this.r()*t.length)]}chance(t){return this.r()<t}solid(t,e,n,s,r,a,l,o={}){let c={x0:t,y0:e,z0:n,x1:s,y1:r,z1:a,mat:l,...o};return this.solids.push(c),c}slab(t,e,n,s=-te,r=te,a={}){let l=this.type==="castle"?"castle":this.type==="cave"?"cave":this.type==="water"?"seabed":"ground",o=this.solid(t,n-(this.type==="sky"?2:12),s,e,n,r,l,{cap:!0,icy:!!this.T.icy&&this.type==="ground",...a});return this.ceil!=null&&this.solid(t,n+this.ceil,s-0,e,n+this.ceil+3,r,"ceil"),o}plat(t,e,n,s,r,a="plat",l={}){return this.solid(t,n-1,s,e,n,r,a,{cap:!0,icy:!!this.T.icy,...l})}flat(t,e){this.slab(this.x,this.x+t,this.gy,-te,te,e),this.x+=t}gapCeil(t){this.ceil!=null&&this.solid(this.x,this.gy+this.ceil,-te,this.x+t,this.gy+this.ceil+3,te,"ceil")}block(t,e,n,s,r=null){let a=t+","+e+","+n;this.bk.has(a)||(this.bk.add(a),this.blocks.push({i:t,j:e,k:n,t:s,c:r}))}row(t,e,n,s=0){for(let r=0;r<n.length;r++){let a=n[r],l=t+r;a==="?"?this.block(l,e,s,"q","coin"):a==="M"?this.block(l,e,s,"q","power"):a==="S"?this.block(l,e,s,"q","star"):a==="U"?this.block(l,e,s,"hidden","1up"):a==="B"?this.block(l,e,s,"brick"):a==="C"?this.block(l,e,s,"brick","coins"):a==="H"&&this.block(l,e,s,"hard")}}coin(t,e,n){this.coins.push({x:t,y:e,z:n})}coinLine(t,e,n,s=0,r=1.2){for(let a=0;a<e;a++)this.coin(t+a*r,n,s)}coinArc(t,e,n,s,r=6,a=0){for(let l=0;l<r;l++){let o=l/(r-1);this.coin(t+o*e,n+Math.sin(o*Math.PI)*s,a)}}enemy(t,e,n,s=0,r={}){this.enemies.push({t,x:e,y:n,z:s,...r})}enemyType(){let t=this.world,e=this.r();if(this.type==="water")return"fish";let n=["dongurin","dongurin"];return t>=2&&n.push("kabuton","patadon"),t>=3&&n.push("togebou"),t>=5&&n.push("kabuton","togebou"),t>=7&&n.push("patadon","togebou"),n[Math.floor(e*n.length)]}addGroundEnemy(t,e,n=0,s=!1){let r=this.enemyType();if(r==="patadon"){this.enemy(r,t,e+2.5,n,{baseY:e+2.5});return}this.enemy(r,t,e,n,{edgeTurn:s||r!=="dongurin"})}decorAt(t,e,n,s,r=1){this.decor.push({t,x:e,y:n,z:s,s:r})}},Zd=[{name:"flatCoins",min:0,w:2,f(i){let t=i.ri(8,12);i.coinArc(i.x+2,t-4,i.gy+1.2,2.2,6,i.pick([-1.5,0,1.5])),i.flat(t)}},{name:"gap",min:0,w:3,f(i){let t=Math.min(5.2,2.5+i.d*.35+i.rand(0,.8));i.gapCeil(t),i.x+=t;let e=i.pick([0,0,1,-1,2]);i.gy=Math.max(0,Math.min(5,i.gy+e)),i.flat(i.ri(5,8))}},{name:"blocks",min:0,w:4,f(i){let t=i.x;i.flat(15);let n=["B?B?B","?M?","B?BMB","??B??","BBMBB","B?C?B","?BSB?"],s=i.pick(n);i.r()<.12&&(s=s.replace("B","C"));let r=Math.floor(t+4),a=i.pick([0,0,-1,1]);i.row(r,i.gy+3,s,a),i.chance(.45)&&i.row(r+1,i.gy+7,i.pick(["?B?","BMB","C","???"]).slice(0,s.length-1),a),i.chance(.5)&&i.addGroundEnemy(t+11,i.gy,i.rand(-2,2)),i.chance(.1)&&i.row(r+s.length+2,i.gy+3,"U",a)}},{name:"cross",min:.5,w:2,f(i){let t=i.x;i.flat(14);let e=Math.floor(t+6),n=i.gy+3;i.block(e,n,0,"q",i.chance(.5)?"power":"coin"),i.block(e-1,n,0,"brick"),i.block(e+1,n,0,"brick"),i.block(e,n,-1,"brick"),i.block(e,n,1,"brick"),i.block(e,n,-2,"q","coin"),i.block(e,n,2,"q","coin"),i.addGroundEnemy(t+11,i.gy,0)}},{name:"stairs",min:0,w:2,f(i){let t=i.x,e=Math.min(4,2+Math.floor(i.d/2)),n=i.d>=2?2:0,s=e*2+n+4,r=t+2+e;n?(i.slab(t,r,i.gy),i.x=r,i.gapCeil(n),i.slab(r+n,t+s,i.gy)):i.slab(t,t+s,i.gy),i.x=t+s;for(let a=0;a<e;a++)i.solid(t+2+a,i.gy,-te,r,i.gy+a+1,te,"hard");for(let a=0;a<e;a++)i.solid(r+n,i.gy,-te,r+n+e-a,i.gy+a+1,te,"hard");i.coinLine(r-1,2+n,i.gy+e+1.5)}},{name:"walls",min:.25,w:2,f(i){let t=i.x;i.flat(16);for(let e=0;e<2;e++){let n=t+4+e*6,s=i.ri(2,3);i.solid(n,i.gy,-te,n+2,i.gy+s,te,"pillar"),i.coin(n+1,i.gy+s+1.2,0)}i.addGroundEnemy(t+8,i.gy,i.rand(-2,2))}},{name:"enemies",min:0,w:3,f(i){let t=i.x;i.flat(16);let n=Math.min(4,1+Math.floor(i.d/2)+i.ri(0,1));for(let s=0;s<n;s++)i.addGroundEnemy(t+5+s*2.5,i.gy,i.rand(-2.5,2.5));i.chance(.5)&&i.row(Math.floor(t+6),i.gy+3,i.pick(["B?B","?","BMB"]),0)}},{name:"floatPlats",min:.5,w:2,f(i){let t=i.x;i.flat(18);let e="plat";i.plat(t+3,t+7,i.gy+3,-1.5,1.5,e),i.coinLine(t+3.6,3,i.gy+4),i.plat(t+9,t+13,i.gy+6,-1.5,1.5,e),i.coinLine(t+9.6,3,i.gy+7),i.chance(.5)&&i.row(Math.floor(t+10),i.gy+10,"?M?".slice(0,1+i.ri(0,2)),0),i.addGroundEnemy(t+12,i.gy,0)}},{name:"pitPlats",min:1.5,w:2,f(i){i.gapCeil(13);let e=i.x;i.plat(e+2,e+5.5,i.gy+1,-2,2),i.plat(e+7.5,e+11,i.gy+2,-2,2),i.coinArc(e+1,11,i.gy+3,2,7),i.x+=13,i.gy=Math.min(5,i.gy+i.pick([0,1,2])),i.flat(6)}},{name:"moverGap",min:2.5,w:2,f(i){i.gapCeil(13);let e=i.x;i.movers.push({x:e+3.5,y:i.gy,z:0,w:3,d:3,ax:"x",amp:3.2,period:4,phase:i.r(),mat:"plat"}),i.coinLine(e+3,7,i.gy+2.5),i.x+=13,i.flat(6)}},{name:"spring",min:1,w:1,f(i){let t=i.x;i.flat(14),i.springs.push({x:t+3.5,y:i.gy,z:0}),i.plat(t+6,t+12,i.gy+10,-2,2),i.coinLine(t+6.5,5,i.gy+11),i.row(Math.floor(t+8),i.gy+14,i.chance(.4)?"S":"M",0)}},{name:"hill",min:0,w:2,f(i){let t=i.x;i.flat(4);let e=i.ri(1,2);i.gy+=e,i.flat(i.ri(7,10)),i.coinLine(t+5,4,i.gy+1.4),i.addGroundEnemy(i.x-3,i.gy,0),i.gy=Math.max(0,i.gy-i.ri(0,e)),i.flat(4)}},{name:"narrow",min:1,w:2,f(i){let t=i.x,e=12;i.slab(t,t+e,i.gy,-1.5,1.5),i.x+=e,i.coinLine(t+2,7,i.gy+1.2),i.d>2&&i.addGroundEnemy(t+8,i.gy,0)}},{name:"split",min:1.5,w:2,f(i){let t=i.x,e=16;i.slab(t,t+e,i.gy,-te,-1.2),i.slab(t,t+e,i.gy,1.2,te),i.x+=e;let n=i.pick([-1,1]);i.coinLine(t+2,10,i.gy+1.2,n*2.6),i.addGroundEnemy(t+7,i.gy,-n*2.6),i.addGroundEnemy(t+11,i.gy,-n*2.6)}},{name:"dashGap",min:2.5,w:2,f(i){i.flat(10);let t=Math.min(8,5.5+(i.d-2)*.4);i.gapCeil(t),i.coinArc(i.x-1,t+2,i.gy+1.5,3,7),i.x+=t,i.flat(6)}},{name:"cannon",min:3,w:2,f(i){let t=i.x;i.flat(18);let e=i.ri(1,2);i.solid(t+12,i.gy,-1,t+13,i.gy+e+1,1,"cannon"),i.cannons.push({x:t+12.5,y:i.gy+e+.5,z:0,dir:-1,period:i.rand(3.2,4.2),phase:i.r()}),i.coinLine(t+3,4,i.gy+1.2,i.pick([-2.5,2.5]))}}],B_=[{name:"brickCeil",min:0,w:3,f(i){let t=i.x;i.flat(16);let e=i.gy+4;for(let n=Math.floor(t+3);n<t+13;n++)for(let s of[-1,0,1])i.r()<.8&&i.block(n,e,s,"brick",i.r()<.06?"coins":null);i.block(Math.floor(t+8),e,0,"q","power"),i.addGroundEnemy(t+10,i.gy,2.5)}},{name:"lowPass",min:.5,w:2,f(i){let t=i.x;i.flat(14),i.solid(t+3,i.gy+3.2,-te,t+11,i.gy+i.ceil,te,"ceil"),i.coinLine(t+3.5,6,i.gy+1),i.addGroundEnemy(t+8,i.gy,0)}}],G_=[{name:"platSeq",min:0,w:4,f(i){let t=i.ri(3,4);for(let e=0;e<t;e++){let n=Math.min(4.6,i.rand(1.8,3)+i.d*.18);i.x+=n;let s=i.rand(3.5,6.5)-i.d*.12;i.gy=Math.max(0,Math.min(8,i.gy+i.pick([-2,-1,0,1,2])*(i.d>1?1:.5)));let r=i.rand(-1.5,1.5)*(i.d>.5?1:0),a=Math.max(1.4,2.4-i.d*.08);i.plat(i.x,i.x+s,i.gy,r-a,r+a,"plat"),i.chance(.4)&&i.coinLine(i.x+.6,Math.floor(s/1.3),i.gy+1.2,r),i.d>.7&&s>4.5&&i.chance(.45)&&i.addGroundEnemy(i.x+s-1.2,i.gy,r,!0),i.chance(.2)&&i.row(Math.floor(i.x+s/2-.5),i.gy+3,i.pick(["?","M","B?B"]),Math.round(r)),i.x+=s,(i.theme==="sea"||i.theme==="night")&&i.chance(.5)&&i.enemy("haneuo",i.x+2.5,-8,0,{baseY:i.gy-8,period:i.rand(2.8,3.8)})}}},{name:"moverX",min:.5,w:3,f(i){let e=i.x;i.movers.push({x:e+3,y:i.gy,z:0,w:3,d:3,ax:"x",amp:3,period:3.6-Math.min(1,i.d*.1),phase:i.r(),mat:"mover"}),i.coinLine(e+2,6,i.gy+2.4),i.x+=12,i.plat(i.x,i.x+4,i.gy,-2,2),i.x+=4}},{name:"moverY",min:1,w:2,f(i){let t=i.x+2;i.movers.push({x:t+1.5,y:i.gy+2.5,z:0,w:3,d:3,ax:"y",amp:3,period:4,phase:i.r(),mat:"mover"}),i.x=t+5.5,i.gy=Math.min(8,i.gy+4),i.plat(i.x,i.x+5,i.gy,-2,2),i.coinLine(i.x+.5,4,i.gy+1.2),i.x+=5}},{name:"moverZ",min:2,w:2,f(i){let t=i.x+2.2;i.movers.push({x:t+1.5,y:i.gy,z:0,w:3,d:3,ax:"z",amp:3.5,period:4.5,phase:i.r(),mat:"mover"}),i.movers.push({x:t+6.5,y:i.gy,z:0,w:3,d:3,ax:"z",amp:3.5,period:4.5,phase:i.r()+.5,mat:"mover"}),i.coinLine(t+1,7,i.gy+2.2),i.x=t+10.2,i.plat(i.x,i.x+4,i.gy,-2,2),i.x+=4}},{name:"fallers",min:1.5,w:2,f(i){let t=i.x+2;for(let e=0;e<4;e++)i.movers.push({x:t+1.25,y:i.gy,z:0,w:2.5,d:2.5,fall:!0,mat:"faller"}),i.coin(t+1.25,i.gy+1.3,0),t+=2.5+Math.min(2.6,1.6+i.d*.1);i.x=t,i.plat(i.x,i.x+4,i.gy,-2,2),i.x+=4}},{name:"springSky",min:.7,w:1,f(i){i.x+=2.5,i.plat(i.x,i.x+4,i.gy,-1.5,1.5),i.springs.push({x:i.x+2,y:i.gy,z:0}),i.x+=4,i.coinLine(i.x-1,4,i.gy+9,0,1.4),i.x+=3,i.gy=Math.min(9,i.gy+6),i.plat(i.x,i.x+6,i.gy,-2,2),i.x+=6}},{name:"flyers",min:1.2,w:2,f(i){i.x+=2.5,i.plat(i.x,i.x+4,i.gy,-2,2),i.x+=4,i.enemy("patadon",i.x+2.5,i.gy+2.5,0,{baseY:i.gy+2.5}),i.x+=4.2,i.plat(i.x,i.x+4,i.gy,-2,2),i.x+=4}},{name:"beam",min:2,w:1,f(i){i.x+=2.5;let t=12;i.plat(i.x,i.x+t,i.gy,-.9,.9,"beam"),i.coinLine(i.x+1,9,i.gy+1.2),i.x+=t}}],V_=[{name:"open",min:0,w:2,f(i){let t=i.x;i.flat(14),i.coinArc(t+2,10,4,5,8,i.rand(-2,2)),i.enemy("fish",t+9,i.rand(3,9),i.rand(-2,2))}},{name:"pillars",min:0,w:4,f(i){let t=i.x;i.flat(18);for(let e=0;e<3;e++){let n=t+3+e*5,s=e%2===0,r=i.rand(5,7);s?i.solid(n,0,-te,n+1.6,r,te,"coralWall"):i.solid(n,13.5-r,-te,n+1.6,15.5,te,"coralWall"),i.coin(n+.8,s?r+2:13.5-r-2,0)}i.d>1&&i.enemy("fish",t+12,7,i.rand(-2,2))}},{name:"tunnel",min:.5,w:2,f(i){let t=i.x;i.flat(16);let e=i.rand(3,6);i.solid(t+3,0,-te,t+13,e,te,"coralWall"),i.solid(t+3,e+3.2,-te,t+13,15.5,te,"coralWall"),i.coinLine(t+4,8,e+1.4)}},{name:"school",min:1,w:3,f(i){let t=i.x;i.flat(18);let e=Math.min(5,2+Math.floor(i.d/2));for(let n=0;n<e;n++)i.enemy("fish",t+4+n*3,i.rand(2,11),i.rand(-3,3));i.row(Math.floor(t+8),6,i.pick(["?M?","B?B","?"]),0)}},{name:"pit",min:1.5,w:2,f(i){i.x+=6,i.coinArc(i.x-6,6,4,3,5),i.flat(8)}},{name:"coinRoom",min:0,w:1,f(i){let t=i.x;i.flat(12);for(let e=0;e<10;e++)i.coin(t+6+Math.cos(e/10*Math.PI*2)*3,7+Math.sin(e/10*Math.PI*2)*3,0)}}],H_=[{name:"lavaGap",min:0,w:4,f(i){let t=Math.min(5,2.6+i.d*.3),e=i.x;i.gapCeil(t),i.lava.push({x0:e,x1:e+t,z0:-te,z1:te,y:i.gy-2.5}),i.d>.5&&i.bubbles.push({x:e+t/2,z:i.rand(-1.5,1.5),y0:i.gy-2.5,h:i.rand(5,7),period:i.rand(2.6,3.6),phase:i.r()}),i.x+=t,i.flat(i.ri(5,7))}},{name:"firebar",min:0,w:3,f(i){let t=i.x;i.flat(14);let e=Math.floor(t+6),n=i.gy+3;i.block(e,n,0,"hard"),i.firebars.push({x:e+.5,y:n+.5,z:0,len:Math.min(6,4+Math.floor(i.d/3)),speed:(i.chance(.5)?1:-1)*(1.3+i.d*.06),phase:i.r()*6.28,plane:i.chance(.5)?"xy":"xz"}),i.coinLine(t+2,3,i.gy+1.2,2.8)}},{name:"lavaPlats",min:1,w:3,f(i){let e=i.x;i.gapCeil(12),i.lava.push({x0:e,x1:e+12,z0:-te,z1:te,y:i.gy-2.5}),i.plat(e+2.8,e+5,i.gy,-1.5,1.5,"castlePlat"),i.plat(e+7.2,e+9.4,i.gy+1,-1.5,1.5,"castlePlat"),i.bubbles.push({x:e+6.1,z:0,y0:i.gy-2.5,h:6,period:3,phase:i.r()}),i.x+=12,i.gy=Math.min(4,i.gy+i.pick([0,1])),i.flat(5)}},{name:"crushers",min:3,w:2,f(i){let t=i.x;i.flat(16);for(let e=0;e<2;e++)i.enemy("gorowa",t+5+e*6,i.gy+i.ceil-2.2,0,{topY:i.gy+i.ceil-2.2,floorY:i.gy})}},{name:"moverLava",min:2,w:2,f(i){let e=i.x;i.gapCeil(14),i.lava.push({x0:e,x1:e+14,z0:-te,z1:te,y:i.gy-2.5}),i.movers.push({x:e+3.5,y:i.gy,z:0,w:3,d:3,ax:"x",amp:3.6,period:4,phase:i.r(),mat:"castlePlat"}),i.coinLine(e+3,8,i.gy+2.2),i.x+=14,i.flat(5)}},{name:"castleBlocks",min:0,w:2,f(i){let t=i.x;i.flat(14),i.row(Math.floor(t+4),i.gy+3,i.pick(["B?B","BMB","?B?"]),0),i.addGroundEnemy(t+10,i.gy,0)}},{name:"cannonHall",min:3,w:1,f(i){let t=i.x;i.flat(16),i.solid(t+13,i.gy,-1,t+14,i.gy+2,1,"cannon"),i.cannons.push({x:t+13.5,y:i.gy+1.5,z:0,dir:-1,period:3.4,phase:i.r()})}}];function Jd(i,t){let e=t.filter(r=>i.d>=r.min),n=0;for(let r of e)n+=r.w;let s=i.r()*n;for(let r of e)if(s-=r.w,s<=0)return r;return e[e.length-1]}function W_(i,t){if(i.type==="sky"){i.x+=2.5,i.plat(i.x,i.x+7,i.gy,-2.5,2.5,"plat"),t&&(i.checkpoint={x:i.x+3.5,y:i.gy,z:0}),i.x+=7;return}let e=i.x;i.flat(8),t&&(i.checkpoint={x:e+4,y:i.type==="water"?1:i.gy,z:0})}function $d(i,t){let e=new Eh(i,t),n=170+i*9+t*4;e.gy=0,e.type==="cave"&&(e.ceil=10),e.type==="castle"&&(e.ceil=8);let s=Zd;e.type==="cave"&&(s=Zd.filter(o=>o.name!=="spring"&&o.name!=="floatPlats").concat(B_)),e.type==="sky"&&(s=G_),e.type==="water"&&(s=V_),e.type==="castle"&&(s=H_),e.type==="water"&&(e.water={x0:-10,x1:0,y0:-30,y1:14,z0:-te-3,z1:te+3}),e.type==="sky"?(e.slab(-6,10,0,-3,3),e.x=10):(e.slab(-6,0,0),e.flat(14)),e.type!=="water"&&e.type!=="castle"&&e.type!=="sky"&&e.row(8,3,i===1&&t===1?"?":"M",0),e.type==="castle"&&e.row(8,3,"M",0),e.type==="sky"&&e.row(5,3,"M",0);let r=!1,a="",l=0;for(;e.x<n&&l++<200;){if(!r&&e.x>n*.5){r=!0,W_(e,!0);continue}let o=Jd(e,s);o.name===a&&s.length>2&&(o=Jd(e,s)),a=o.name,o.f(e)}if(e.type==="castle"){e.flat(6);let o=e.x,c=e.ceil;e.ceil=13,e.flat(28),e.ceil=c;let h=i<=2?9:i<=5?12:i<=7?15:24;e.boss={x0:o,x1:o+28,y:e.gy,hp:h,kind:i===8?"garock":"golon",world:i},e.flat(8),e.goal={x:o+30,y:e.gy,z:0,boss:!0}}else if(e.type==="sky")e.x+=3,e.plat(e.x,e.x+18,e.gy,-3,3,"plat"),e.goal={x:e.x+11,y:e.gy,z:0},e.x+=18;else{if(e.flat(6),e.type!=="water"){let c=e.x;e.flat(14);for(let h=0;h<5;h++)e.solid(c+h,e.gy,-te,c+5,e.gy+h+1,te,"hard");e.flat(6)}let o=e.x+3;e.flat(18),e.goal={x:o,y:e.gy,z:0}}if(e.water&&(e.water.x1=e.x+10,e.solid(-6,15.5,-te,e.x+10,18,te,"invis")),e.type==="ground"){for(let o of e.solids)if(!(o.mat!=="ground"||o.x1-o.x0<4||o.z0>-te+.1))for(let c=o.x0+1;c<o.x1-1;c+=e.rand(2.5,5)){let h=e.pick([-1,1]),u=e.pick(X_(e.theme));e.decorAt(u,c,o.y1,h*e.rand(te+1.2,te+5),e.rand(.8,1.4))}}return{world:i,stage:t,type:e.type,theme:e.theme,name:ma[i-1].name,solids:e.solids,blocks:e.blocks,coins:e.coins,enemies:e.enemies,movers:e.movers,firebars:e.firebars,bubbles:e.bubbles,cannons:e.cannons,lava:e.lava,water:e.water,springs:e.springs,decor:e.decor,checkpoint:e.checkpoint,goal:e.goal,boss:e.boss,start:{x:2,y:e.type==="water"?1:0,z:0},walls:e.type!=="sky",hw:te,length:e.x}}function X_(i){return{grass:["tree","bush","bush","flower","rock"],desert:["cactus","rock","palm"],sea:["palm","rock","bush"],forest:["mushroom","tree","tree","bush"],snow:["pine","pine","snowman","rock"],cloud:["bush"],night:["lamp","pine","bush"],volcano:["rock","deadtree"]}[i]||["bush"]}var Fn=1e-4,zl=4,q_=1,Y_={dongurin:[.45,.9],kabuton:[.45,.95],shell:[.45,.7],togebou:[.5,.95],patadon:[.45,.9],fish:[.45,.8],haneuo:[.45,.8],bullet:[.45,.8],gorowa:[1,2]},kl={dongurin:2,kabuton:2,togebou:1.6,patadon:1.2,fish:2.2},ga=class{constructor(t){if(this.L=t,this.solids=t.solids.map(e=>({...e})),t.walls){let e=t.length+30;this.solids.push({x0:-10,y0:-40,z0:-t.hw-2,x1:e,y1:60,z1:-t.hw,mat:"invis",wall:!0}),this.solids.push({x0:-10,y0:-40,z0:t.hw,x1:e,y1:60,z1:t.hw+2,mat:"invis",wall:!0})}this.solids.push({x0:-8,y0:-40,z0:-20,x1:-6,y1:60,z1:20,mat:"invis",wall:!0}),this.buckets=new Map;for(let e of this.solids)if(e.mat!=="lavaVis")for(let n=Math.floor(e.x0/zl);n<=Math.floor(e.x1/zl);n++){let s=this.buckets.get(n);s||(s=[],this.buckets.set(n,s)),s.push(e)}}query(t,e,n){let s=Math.floor(t/zl),r=Math.floor(e/zl);for(let a=s;a<=r;a++){let l=this.buckets.get(a);if(l)for(let o of l)o._q!==n.qid&&(o._q=n.qid,n.push(o))}}};function Ki(i,t){return i.x0<t.x1-Fn&&i.x1>t.x0+Fn&&i.y0<t.y1-Fn&&i.y1>t.y0+Fn&&i.z0<t.z1-Fn&&i.z1>t.z0+Fn}function oi(i){return{x0:i.x-i.hw,x1:i.x+i.hw,y0:i.y,y1:i.y+i.h,z0:i.z-i.hw,z1:i.z+i.hw}}function Z_(i,t){if(i.fall)return{x:i.x,y:i.y-(i.fy||0),z:i.z};let e=Math.sin((t/i.period+i.phase)*Math.PI*2)*i.amp;return{x:i.x+(i.ax==="x"?e:0),y:i.y+(i.ax==="y"?e:0),z:i.z+(i.ax==="z"?e:0)}}var Bl=class{constructor(t,e={}){this.L=t,this.T=e.terrain||new ga(t),this.events=[],this._cand=[],this._cand.qid=0;let n=e.atCheckpoint&&t.checkpoint?t.checkpoint:t.start,s=e.power||0,r={};for(let a of t.blocks)r[a.i+","+a.j+","+a.k]={...a,alive:!0,used:!1,revealed:a.t!=="hidden",bump:0,left:a.c==="coins"?8:0,timer:-1};this.s={t:0,time:Yd,state:"play",p:{x:n.x,y:n.y,z:n.z,vx:0,vy:0,vz:0,power:s,hw:(s?Bt.bigW:Bt.smallW)/2,h:s?Bt.bigH:Bt.smallH,fx:1,fz:0,onGround:!1,gm:-1,icy:!1,coyote:0,jumpBuf:0,jumping:!1,inv:0,star:0,swim:!1,chain:0,fireCd:0,land:0,runT:0,flagY:0},blocks:r,coins:t.coins.map(a=>({...a,alive:!0})),enemies:t.enemies.map((a,l)=>this.makeEnemy(a,l)),items:[],fires:[],bfires:[],waves:[],movers:t.movers.map(a=>({...a,fy:0,fv:0,ft:-1,px:a.x,py:a.y,pz:a.z})),springs:t.springs.map(a=>({...a,sq:0})),cannons:t.cannons.map(a=>({...a,cd:a.period*(1-a.phase)})),cp:!!e.atCheckpoint,gate:!1,boss:t.boss?this.makeBoss(t.boss):null,crystal:null,nextId:1e3},this.s.boss&&(this.s.boss.id=999),this.stats=e.stats||{coins:0,score:0,lives:5}}makeEnemy(t,e){let[n,s]=Y_[t.t]||[.45,.9],r={id:e,t:t.t,x:t.x,y:t.y,z:t.z,ox:t.x,oz:t.z,vx:-(kl[t.t]||0),vz:0,vy:0,hw:n,h:s,alive:!0,active:!1,edgeTurn:!!t.edgeTurn,state:"walk",timer:0,baseY:t.baseY??t.y,dead:0,kickGrace:0};return t.t==="gorowa"&&(r.state="wait",r.topY=t.topY,r.floorY=t.floorY,r.vx=0),t.t==="fish"&&(r.vx=-kl.fish,r.phase=e*1.7%6.28),t.t==="patadon"&&(r.phase=e*1.3%6.28),t.t==="haneuo"&&(r.period=t.period||3.2,r.timer=e*.9%r.period,r.baseY=t.baseY,r.y=-30,r.vx=0,r.vy=0),r}makeBoss(t){let e=t.kind==="garock";return{kind:t.kind,world:t.world,x:t.x1-6,y:t.y,z:0,vx:0,vy:0,vz:0,hw:e?1.4:1.15,h:e?3.2:2.6,hp:t.hp,maxhp:t.hp,state:"sleep",timer:0,inv:0,fx:-1,act:0,x0:t.x0,x1:t.x1,floor:t.y,onGround:!0}}ev(t,e={}){this.events.push({type:t,...e})}addScore(t,e,n,s){this.stats.score+=t,e!==void 0&&this.ev("score",{n:t,x:e,y:n,z:s})}addCoin(t,e,n){this.stats.coins++,this.addScore(200),this.ev("coin",{x:t,y:e,z:n}),this.stats.coins>=100&&(this.stats.coins-=100,this.oneUp(t,e,n))}oneUp(t,e,n){this.stats.lives++,this.ev("1up",{x:t,y:e,z:n})}colliders(t,e){let n=this._cand;n.length=0,n.qid=q_++,this.T.query(t.x0-1,t.x1+1,n);let s=this.s,r=Math.floor(t.x0-.01),a=Math.floor(t.x1+.01),l=Math.floor(t.y0-1),o=Math.floor(t.y1+1),c=Math.round(t.z0-.01),h=Math.round(t.z1+.01);for(let u=r;u<=a;u++)for(let d=l;d<=o;d++)for(let f=c;f<=h;f++){let g=s.blocks[u+","+d+","+f];!g||!g.alive||n.push({x0:u,x1:u+1,y0:d,y1:d+1,z0:f-.5,z1:f+.5,block:g,hiddenOnly:!g.revealed})}for(let u of s.movers)u.gone||n.push({x0:u.px-u.w/2,x1:u.px+u.w/2,y0:u.py-.6,y1:u.py,z0:u.pz-u.d/2,z1:u.pz+u.d/2,oneway:!0,mover:u});for(let u of s.springs)n.push({x0:u.x-.5,x1:u.x+.5,y0:u.y,y1:u.y+.8,z0:u.z-.5,z1:u.z+.5,spring:u});if(e==="player")for(let u of s.enemies)u.t==="gorowa"&&u.alive&&n.push({x0:u.x-u.hw,x1:u.x+u.hw,y0:u.y,y1:u.y+u.h,z0:u.z-u.hw,z1:u.z+u.hw,oneway:!0,gorowa:u});if(s.gate&&this.L.boss){let u=this.L.boss.x0;n.push({x0:u-1,x1:u,y0:-10,y1:40,z0:-10,z1:10,gate:!0})}return n}move(t,e,n,s,r){let a={hitX:!1,hitZ:!1,ground:null,ceil:!1,ceilHits:[]},l={x0:t.x-t.hw+Math.min(e,0)-.1,x1:t.x+t.hw+Math.max(e,0)+.1,y0:t.y+Math.min(n,0)-.1,y1:t.y+t.h+Math.max(n,0)+.1,z0:t.z-t.hw+Math.min(s,0)-.1,z1:t.z+t.hw+Math.max(s,0)+.1},o=this.colliders(l,r);if(e){let c=t.x-t.hw,h=t.x+t.hw;t.x+=e;let u=oi(t);for(let d of o)d.oneway||d.hiddenOnly||d.wall&&r==="item0"||Ki(u,d)&&(e>0&&h<=d.x0+.02?(t.x=d.x0-t.hw-Fn,a.hitX=!0,u.x0=t.x-t.hw,u.x1=t.x+t.hw):e<0&&c>=d.x1-.02&&(t.x=d.x1+t.hw+Fn,a.hitX=!0,u.x0=t.x-t.hw,u.x1=t.x+t.hw))}if(s){let c=t.z-t.hw,h=t.z+t.hw;t.z+=s;let u=oi(t);for(let d of o)d.oneway||d.hiddenOnly||Ki(u,d)&&(s>0&&h<=d.z0+.02?(t.z=d.z0-t.hw-Fn,a.hitZ=!0,u.z0=t.z-t.hw,u.z1=t.z+t.hw):s<0&&c>=d.z1-.02&&(t.z=d.z1+t.hw+Fn,a.hitZ=!0,u.z0=t.z-t.hw,u.z1=t.z+t.hw))}if(n){let c=t.y,h=t.y+t.h;t.y+=n;let u=oi(t);for(let d of o)Ki(u,d)&&(n<0&&c>=d.y1-.05&&!d.hiddenOnly?t.y<d.y1&&(t.y=d.y1,a.ground=d,u.y0=t.y,u.y1=t.y+t.h):n>0&&h<=d.y0+.05&&!d.oneway&&(a.ceil=!0,a.ceilHits.push(d)));if(a.ceil){let d=1/0;for(let f of a.ceilHits)d=Math.min(d,f.y0);t.y=d-t.h-Fn}}return a}supported(t,e,n){let s={x0:t-.05,x1:t+.05,y0:e-.4,y1:e+.05,z0:n-.05,z1:n+.05},r=this.colliders(s,"probe");for(let a of r)if(!a.hiddenOnly&&!a.wall&&!a.gate&&a.x0<=t&&t<=a.x1&&a.z0<=n&&n<=a.z1&&a.y1<=e+.05&&a.y1>=e-.4)return!0;return!1}inWater(t,e,n){let s=this.L.water;return s?t>=s.x0&&t<=s.x1&&e>=s.y0&&e<=s.y1&&n>=s.z0&&n<=s.z1:!1}step(t){let e=this.s,n=pa;if(!(e.state==="dead"||e.state==="clear")){if(e.t+=n,e.state==="goal"){this.goalStep(n);return}e.time-=n;for(let s of e.movers){if(s.gone)continue;s.fall&&s.ft>=0&&(s.ft+=n,s.ft>.45&&(s.fv=Math.min(s.fv+30*n,18),s.fy+=s.fv*n,s.fy>30&&(s.gone=!0)));let r=Z_(s,e.t);s.dx=r.x-s.px,s.dy=r.y-s.py,s.dz=r.z-s.pz,s.px=r.x,s.py=r.y,s.pz=r.z}this.playerStep(t,n),this.blockStep(n),this.itemStep(n),this.enemyStep(n),this.fireStep(n),this.hazardStep(n),e.boss&&this.bossStep(n),e.time<=0&&e.state==="play"&&this.die("time")}}playerStep(t,e){let n=this.s,s=n.p;s.inv>0&&(s.inv-=e),s.star>0&&(s.star-=e,s.star<=0&&this.ev("starEnd")),s.fireCd>0&&(s.fireCd-=e),this._jumpHeld=!!t.jump,t.jumpPressed?(s.jumpBuf=Bt.buffer,t.jumpPressed=!1):s.jumpBuf=Math.max(0,s.jumpBuf-e);let r=this.inWater(s.x,s.y+s.h*.5,s.z);if(r!==s.swim&&(s.swim=r,!r&&s.vy>0&&(s.vy=Math.max(s.vy,9))),s.onGround&&s.gm>=0){let S=n.movers[s.gm];S.gone||(this.move(s,S.dx||0,(S.dy||0)<0?S.dy:0,S.dz||0,"player"),S.dy>0&&(s.y+=S.dy))}let a=t.mx||0,l=t.mz||0,o=Math.hypot(a,l);o>1&&(a/=o,l/=o);let c=s.onGround&&s.icy,h=t.dash?Bt.dash:Bt.walk;r&&(h=t.dash?Bt.swimDash:Bt.swimMax);let u=a*h,d=l*h,f=s.onGround?o>.05?Bt.accel:Bt.decel:Bt.airAccel;c&&(f*=Bt.iceK),r&&(f=14);let g=u-s.vx,b=d-s.vz,m=Math.hypot(g,b);if(m>0){let S=s.vx*u+s.vz*d<0?1.6:1,C=Math.min(1,f*S*e/m);(o>.05||s.onGround||r)&&(s.vx+=g*C,s.vz+=b*C)}if(o>.1){s.fx=a/Math.max(o,1e-4)*Math.min(1,o),s.fz=l/Math.max(o,1e-4)*Math.min(1,o);let S=Math.hypot(s.fx,s.fz);s.fx/=S,s.fz/=S}if(r)s.jumpBuf>0&&(s.vy=Bt.swimStroke,s.jumpBuf=0,this.ev("swim")),s.vy-=Bt.swimG*e,s.vy<-Bt.swimSink&&(s.vy=-Bt.swimSink),s.jumping=!1;else{if(s.onGround?s.coyote=Bt.coyote:s.coyote=Math.max(0,s.coyote-e),s.jumpBuf>0&&(s.onGround||s.coyote>0)){let C=Math.hypot(s.vx,s.vz);s.vy=Bt.jumpV+C*Bt.jumpSpeedK,s.jumping=!0,s.onGround=!1,s.coyote=0,s.jumpBuf=0,s.gm=-1,this.ev("jump",{big:s.power>0})}t.jump||(s.jumping=!1);let S=s.vy>0?s.jumping?Bt.gUpHold:Bt.gUpRelease:Bt.gDown;s.vy-=S*e,s.vy<-Bt.maxFall&&(s.vy=-Bt.maxFall)}t.firePressed&&(t.firePressed=!1,s.power===2&&s.fireCd<=0&&n.fires.length<Bt.fireMax&&(n.fires.push({x:s.x+s.fx*.5,y:s.y+s.h*.6,z:s.z+s.fz*.5,vx:s.fx*Bt.fireSpeed+s.vx*.3,vz:s.fz*Bt.fireSpeed+s.vz*.3,vy:-2,life:Bt.fireLife,hw:.2,h:.4,id:n.nextId++}),s.fireCd=.18,this.ev("fire")));let p=s.onGround,y=s.vy,w=this.move(s,s.vx*e,s.vy*e,s.vz*e,"player");if(w.hitX&&(s.vx=0),w.hitZ&&(s.vz=0),s.onGround=!1,s.gm=-1,w.ground){let S=w.ground;S.spring?(s.vy=J_(t)?Bt.springVHold:Bt.springV,s.jumping=!0,S.spring.sq=.3,this.ev("spring"),s.y+=.01):(s.vy<0&&(!p&&y<-6&&(s.land=.15,this.ev("land",{x:s.x,y:s.y,z:s.z,v:-y})),s.vy=0),s.onGround=!0,s.gm=S.mover?n.movers.indexOf(S.mover):-1,s.icy=!!S.icy,s.chain=0,S.mover&&S.mover.fall&&S.mover.ft<0&&(S.mover.ft=0))}if(w.ceil&&s.vy>0){let S=null,C=9;for(let v of w.ceilHits)if(v.block){let T=Math.abs((v.x0+v.x1)/2-s.x)+Math.abs((v.z0+v.z1)/2-s.z);T<C&&(C=T,S=v.block)}S?this.hitBlock(S):this.ev("bonk"),s.vy=Math.min(0,-1),s.jumping=!1}s.y<Bt.deathY&&this.die("fall"),s.land>0&&(s.land-=e),s.runT+=Math.hypot(s.vx,s.vz)*e;let x=s.y+s.h*.5;for(let S of n.coins)!S.alive||Math.abs(S.x-s.x)>1.2||Math.abs(S.y-x)<s.h*.5+.45&&Math.hypot(S.x-s.x,S.z-s.z)<s.hw+.45&&(S.alive=!1,this.addCoin(S.x,S.y,S.z));!n.cp&&this.L.checkpoint&&s.x>=this.L.checkpoint.x&&(n.cp=!0,this.ev("checkpoint"));let M=this.L.goal;if(M&&!M.boss&&s.x>=M.x-.3&&n.state==="play"){n.state="goal",s.flagY=Math.max(0,Math.min(8,s.y-M.y));let S=[100,400,800,2e3,5e3][Math.min(4,Math.floor(s.flagY/1.8))];this.addScore(S,s.x,s.y+1,s.z),n.goalT=0,this.ev("goal",{bonus:S})}n.crystal&&n.state==="play"&&Math.hypot(n.crystal.x-s.x,n.crystal.z-s.z)<1.4&&Math.abs(n.crystal.y-(s.y+.5))<2&&(n.state="goal",n.goalT=0,this.ev("goal",{bonus:0,crystal:!0}),n.crystal.taken=!0)}goalStep(t){let e=this.s,n=e.p;if(e.goalT+=t,n.vx=4,n.vz=-n.z*2,n.vy-=Bt.gDown*t,n.vy<-Bt.maxFall&&(n.vy=-Bt.maxFall),this.move(n,n.vx*t,n.vy*t,n.vz*t,"player").ground?(n.vy=0,n.onGround=!0):n.onGround=!1,e.goalT>.4&&e.time>0){let r=Math.min(Math.ceil(e.time),Math.ceil(t*300));e.time-=r,this.addScore(50*r)}e.goalT>3.2&&(e.state="clear",this.ev("clear"))}die(t){let e=this.s;e.state==="play"&&(e.state="dead",e.p.dead=t,this.ev("die",{why:t}))}hurt(){let t=this.s.p;t.inv>0||t.star>0||this.s.state!=="play"||(t.power>0?(t.power--,t.inv=Bt.hurtInv,this.setSize(t.power>0),this.ev("shrink",{power:t.power})):this.die("hit"))}setSize(t){let e=this.s.p;if(e.hw=(t?Bt.bigW:Bt.smallW)/2,e.h=t?Bt.bigH:Bt.smallH,t){let n=this.colliders(oi(e),"player");for(let s of n)if(!s.oneway&&!s.hiddenOnly&&Ki(oi(e),s)&&s.y0>e.y+.3){e.h=Bt.smallH;break}}}powerUp(t){let e=this.s.p;t==="heart"&&(e.power===0?(e.power=1,this.setSize(!0),this.ev("grow")):this.ev("powerKeep"),this.addScore(1e3,e.x,e.y+2,e.z)),t==="fire"&&(e.power=2,this.setSize(!0),this.ev("fireUp"),this.addScore(1e3,e.x,e.y+2,e.z)),t==="star"&&(e.star=Bt.starTime,this.ev("star"),this.addScore(1e3,e.x,e.y+2,e.z)),t==="green"&&this.oneUp(e.x,e.y+2,e.z)}hitBlock(t){let e=this.s,n=e.p;if(t.bump>0)return;let s=t.i+.5,r=t.j+1,a=t.k,l=()=>{for(let o of e.enemies)o.alive&&o.t!=="gorowa"&&Math.abs(o.y-r)<.3&&Math.abs(o.x-s)<.9&&Math.abs(o.z-a)<.9&&this.killEnemy(o,"bump");for(let o of e.items)Math.abs(o.y-r)<.3&&Math.abs(o.x-s)<.9&&(o.vy=8,o.vx=o.x<s?-3:3)};if(t.t==="hard"||t.used){this.ev("bonk");return}if(t.t==="brick"&&!t.c){if(n.power>0){t.alive=!1,this.ev("break",{i:t.i,j:t.j,k:t.k}),this.addScore(50),l();return}t.bump=.2,this.ev("bump",{b:t}),l();return}if(t.t==="brick"&&t.c==="coins"){t.timer<0&&(t.timer=5),t.left--,this.addCoin(s,r+.5,a),this.ev("blockCoin",{x:s,y:r,z:a}),(t.left<=0||t.timer<=0)&&(t.used=!0),t.bump=.2,this.ev("bump",{b:t}),l();return}if(t.revealed=!0,t.used=!0,t.bump=.2,this.ev("bump",{b:t}),l(),t.c==="coin")this.addCoin(s,r+.5,a),this.ev("blockCoin",{x:s,y:r,z:a});else{let o=t.c==="power"?n.power===0?"heart":"fire":t.c==="star"?"star":t.c==="1up"?"green":"heart";e.items.push({id:e.nextId++,kind:o,x:s,y:t.j+.2,z:a,vx:0,vy:0,vz:0,hw:.4,h:.8,state:"rise",timer:0,riseFrom:t.j+.2,dir:n.x<=s?1:-1}),this.ev("sprout",{kind:o,x:s,y:r,z:a})}}blockStep(t){for(let e in this.s.blocks){let n=this.s.blocks[e];n.bump>0&&(n.bump=Math.max(0,n.bump-t)),n.timer>0&&(n.timer-=t,n.timer<=0&&(n.timer=0))}for(let e of this.s.springs)e.sq>0&&(e.sq-=t)}itemStep(t){let e=this.s,n=e.p;for(let s=e.items.length-1;s>=0;s--){let r=e.items[s];if(r.state==="rise")r.timer+=t,r.y=r.riseFrom+Math.min(1,r.timer/.5)*.85,r.timer>=.5&&(r.state="move",r.y=r.riseFrom+.85,(r.kind==="heart"||r.kind==="green")&&(r.vx=3*r.dir),r.kind==="star"&&(r.vx=3.5*r.dir,r.vy=8));else if(r.kind!=="fire"){r.vy-=(r.kind==="star"?30:Bt.gDown)*t,r.vy<-20&&(r.vy=-20);let a=this.move(r,r.vx*t,r.vy*t,0,"item");if(a.hitX&&(r.vx=-r.vx),a.ground&&(r.vy=r.kind==="star"?9:0),r.y<Bt.deathY){e.items.splice(s,1);continue}}Math.abs(r.x-n.x)<n.hw+r.hw&&Math.abs(r.z-n.z)<n.hw+r.hw&&r.y<n.y+n.h&&r.y+r.h>n.y&&(r.state==="move"||r.timer>.25)&&(e.items.splice(s,1),this.powerUp(r.kind),this.ev("pickup",{kind:r.kind}))}}killEnemy(t,e){t.alive&&(t.alive=!1,t.dead=e,this.ev("kill",{id:t.id,t:t.t,how:e,x:t.x,y:t.y,z:t.z}))}stompScore(t){let e=this.s.p,n=[100,200,400,800,1e3];e.chain>=5?this.oneUp(t.x,t.y+1,t.z):this.addScore(n[e.chain],t.x,t.y+1,t.z),e.chain++}enemyStep(t){let e=this.s,n=e.p,s=oi(n);for(let r of e.enemies){if(!r.alive)continue;if(!r.active)if(Math.abs(r.x-n.x)<34)r.active=!0;else continue;if(Math.abs(r.x-n.x)>70)continue;r.kickGrace>0&&(r.kickGrace-=t);let a=r.t;if(a==="gorowa"){this.gorowaStep(r,t,s);continue}if(a==="bullet")r.x+=r.vx*t,r.timer+=t,r.timer>9&&(r.alive=!1);else if(a==="patadon")r.phase+=t*2.2,r.y=r.baseY+Math.sin(r.phase)*1.3,r.x=r.ox+Math.sin(r.phase*.5)*1.5,r.vx=Math.cos(r.phase*.5)*.75;else if(a==="fish")r.phase+=t,(this.move(r,r.vx*t,Math.sin(r.phase*1.6)*1.2*t,0,"enemy").hitX||Math.abs(r.x-r.ox)>5)&&(r.vx=-r.vx,r.x+=r.vx*t*2);else if(a==="haneuo")r.timer+=t,r.timer>r.period&&(r.timer=0,r.x=r.ox,r.y=r.baseY,r.vy=17,r.vx=-3.2),r.vy-=20*t,r.x+=r.vx*t,r.y+=r.vy*t;else{let h=r.state==="shellMove"?12:r.state==="shell"?0:kl[a]||2;if(r.state!=="shell"&&(r.vx=Math.sign(r.vx||-1)*h),r.vy-=Bt.gDown*t,r.vy<-20&&(r.vy=-20),r.edgeTurn&&r.state==="walk"&&r.onGround){let d=r.x+Math.sign(r.vx)*(r.hw+.15);this.supported(d,r.y,r.z)||(r.vx=-r.vx)}let u=this.move(r,r.vx*t,r.vy*t,r.vz*t,"enemy");if(r.onGround=!!u.ground,u.ground&&(r.vy=0),u.hitX&&(r.vx=-r.vx,r.state==="shellMove"&&this.ev("thud",{x:r.x,y:r.y,z:r.z})),r.y<Bt.deathY){r.alive=!1;continue}if(r.state==="shellMove")for(let d of e.enemies)d!==r&&d.alive&&d.t!=="gorowa"&&Math.abs(d.x-r.x)<d.hw+r.hw&&Math.abs(d.z-r.z)<d.hw+r.hw&&Math.abs(d.y-r.y)<1&&(this.killEnemy(d,"shell"),this.addScore(200,d.x,d.y+1,d.z))}if(r.state==="walk"&&(a==="dongurin"||a==="kabuton"||a==="togebou"))for(let h of e.enemies)h!==r&&h.alive&&h.state==="walk"&&h.id>r.id&&Math.abs(h.x-r.x)<h.hw+r.hw&&Math.abs(h.z-r.z)<h.hw+r.hw&&Math.abs(h.y-r.y)<.5&&((h.x-r.x)*r.vx>0&&(r.vx=-r.vx),(r.x-h.x)*h.vx>0&&(h.vx=-h.vx));if(e.state!=="play")continue;let l=oi(r);if(!Ki(s,l))continue;if(n.star>0){this.killEnemy(r,"star"),this.addScore(200,r.x,r.y+1,r.z);continue}if(n.vy<0&&n.y>=r.y+r.h*.45&&(a!=="togebou"&&a!=="fish")){n.vy=this._jumpHeld?Bt.stompVHold:Bt.stompV,n.jumping=!0,n.y=r.y+r.h+.01,this.ev("stomp",{x:r.x,y:r.y+r.h,z:r.z,t:a}),this.stompScore(r),a==="kabuton"?(r.t="shell",r.state="shell",r.vx=0,r.h=.7,r.edgeTurn=!1,r.kickGrace=.2):a==="shell"?r.state==="shellMove"?(r.state="shell",r.vx=0,r.kickGrace=.2):(r.state="shellMove",r.vx=(r.x>=n.x?1:-1)*12,r.kickGrace=.25,this.ev("kick")):a==="patadon"?(r.t="dongurin",r.state="walk",r.vy=0,r.edgeTurn=!0,r.vx=-kl.dongurin,this.ev("wingOff",{id:r.id})):this.killEnemy(r,"stomp");continue}if(a==="shell"&&r.state==="shell"){r.state="shellMove",r.vx=(r.x>=n.x?1:-1)*12,r.kickGrace=.25,this.ev("kick"),this.addScore(100,r.x,r.y+1,r.z);continue}r.kickGrace>0&&a==="shell"||this.hurt()}for(let r of e.cannons)if(!(Math.abs(r.x-n.x)>30||Math.abs(r.x-n.x)<2)&&(r.cd-=t,r.cd<=0)){r.cd=r.period;let a=n.x<r.x?-1:1,l=this.makeEnemy({t:"bullet",x:r.x+a*.9,y:r.y-.4,z:r.z},e.nextId++);l.vx=a*6,l.active=!0,l.timer=0,e.enemies.push(l),this.ev("cannon",{x:r.x,y:r.y,z:r.z})}e.enemies.length>80&&(e.enemies=e.enemies.filter(r=>r.alive||r.t!=="bullet"))}gorowaStep(t,e,n){let s=this.s.p;if(t.timer-=e,t.state==="wait"?Math.abs(s.x-t.x)<2.6&&s.y<t.y&&(t.state="fall",t.vy=0,this.ev("rumble")):t.state==="fall"?(t.vy=Math.max(t.vy-50*e,-24),t.y+=t.vy*e,t.y<=t.floorY&&(t.y=t.floorY,t.state="down",t.timer=1.2,this.ev("thump",{x:t.x,y:t.y,z:t.z}))):t.state==="down"?t.timer<=0&&(t.state="rise"):t.state==="rise"&&(t.y+=2.2*e,t.y>=t.topY&&(t.y=t.topY,t.state="wait")),this.s.state!=="play")return;let r=oi(t),a={x0:n.x0+.05,x1:n.x1-.05,y0:n.y0+.15,y1:n.y1,z0:n.z0+.05,z1:n.z1-.05};Ki(a,r)&&this.hurt()}fireStep(t){let e=this.s;for(let s=e.fires.length-1;s>=0;s--){let r=e.fires[s];r.life-=t,r.vy-=Bt.fireG*t;let a=this.move(r,r.vx*t,r.vy*t,r.vz*t,"fire");a.ground&&(r.vy=Bt.fireBounce);let l=a.hitX||a.hitZ||r.life<=0||r.y<Bt.deathY||a.ceil;if(!l){for(let c of e.enemies)if(!(!c.alive||c.t==="gorowa"||c.t==="bullet")&&Math.abs(c.x-r.x)<c.hw+.3&&Math.abs(c.z-r.z)<c.hw+.3&&r.y+.3>c.y&&r.y<c.y+c.h){this.killEnemy(c,"fire"),this.addScore(200,c.x,c.y+1,c.z),l=!0;break}let o=e.boss;!l&&o&&o.state!=="dead"&&o.state!=="sleep"&&Math.abs(o.x-r.x)<o.hw+.3&&Math.abs(o.z-r.z)<o.hw+.3&&r.y>o.y&&r.y<o.y+o.h&&(l=!0,o.inv<=0&&(o.hp-=1,o.inv=.15,this.ev("bossHit",{fire:!0}),o.hp<=0&&this.bossDefeat()))}l&&(e.fires.splice(s,1),this.ev("fizz",{x:r.x,y:r.y,z:r.z}))}let n=e.p;for(let s=e.bfires.length-1;s>=0;s--){let r=e.bfires[s];if(r.x+=r.vx*t,r.z+=r.vz*t,r.y+=r.vy*t,r.life-=t,r.life<=0){e.bfires.splice(s,1);continue}Math.abs(r.x-n.x)<n.hw+.35&&Math.abs(r.z-n.z)<n.hw+.35&&r.y>n.y-.3&&r.y<n.y+n.h+.3&&this.hurt()}for(let s=e.waves.length-1;s>=0;s--){let r=e.waves[s];if(r.r+=9*t,r.life-=t,r.life<=0){e.waves.splice(s,1);continue}let a=Math.hypot(n.x-r.x,n.z-r.z);Math.abs(a-r.r)<.6&&n.y<r.y+.5&&this.hurt()}}hazardStep(t){let e=this.s,n=e.p,s=this.L;if(e.state!=="play")return;let r=n.x,a=n.y+n.h*.5,l=n.z;for(let o of s.lava)if(n.x>o.x0&&n.x<o.x1&&n.y<o.y+.2){this.die("lava");return}for(let o of s.firebars){if(Math.abs(o.x-r)>o.len+2)continue;let c=o.phase+o.speed*e.t;for(let h=.5;h<=o.len;h+=.5){let u=o.x+Math.cos(c)*h,d=o.plane==="xy"?o.y+Math.sin(c)*h:o.y,f=o.plane==="xz"?o.z+Math.sin(c)*h:o.z;if(Math.abs(u-r)<n.hw+.25&&Math.abs(f-l)<n.hw+.25&&Math.abs(d-a)<n.h*.5+.25){this.hurt();return}}}for(let o of s.bubbles){let c=Th(o,e.t);if(Math.abs(o.x-r)<n.hw+.4&&Math.abs(o.z-l)<n.hw+.4&&Math.abs(c-a)<n.h*.5+.4){this.hurt();return}}}bossStep(t){let e=this.s,n=e.boss,s=e.p;if(n.inv>0&&(n.inv-=t),n.state==="sleep"){s.x>n.x0+2.5&&(n.state="roar",n.timer=1.4,e.gate=!0,this.ev("bossStart"));return}if(n.state==="dead"){n.timer-=t,n.timer<=0&&!e.crystal&&(e.crystal={x:(n.x0+n.x1)/2,y:n.floor+1.2,z:0},this.ev("crystal"));return}let r=n.world;n.timer-=t;let a=Math.sign(s.x-n.x)||1;if(n.vy-=40*t,n.x+=n.vx*t,n.z+=n.vz*t,n.y+=n.vy*t,n.y<=n.floor?(!n.onGround&&n.vy<-8&&(this.ev("bossLand",{x:n.x,y:n.floor,z:n.z}),n.state==="jump"&&r>=2&&e.waves.push({x:n.x,y:n.floor,z:n.z,r:.5,life:1})),n.y=n.floor,n.vy=0,n.onGround=!0):n.onGround=!1,n.x=Math.max(n.x0+1.5,Math.min(n.x1-1.5,n.x)),n.z=Math.max(-3,Math.min(3,n.z)),n.state==="roar")n.vx=0,n.timer<=0&&this.bossNext();else if(n.state==="walk")n.vx=a*(1.6+r*.15),n.vz=Math.sign(s.z-n.z)*1,n.fx=a,n.timer<=0&&this.bossNext();else if(n.state==="jump")n.onGround&&n.timer<.9&&(n.vx=0,n.vz=0),n.timer<=0&&n.onGround&&this.bossNext();else if(n.state==="breath"){if(n.vx=0,n.vz=0,n.fx=a,n.shots>0&&n.timer<n.shots*.45){n.shots--;let c=s.x-n.x,h=s.z-n.z,u=Math.hypot(c,h)||1;e.bfires.push({x:n.x+a*1.4,y:n.y+n.h*.65,z:n.z,vx:c/u*7,vz:h/u*7,vy:(s.y+.5-(n.y+n.h*.65))/Math.max(.6,u/7),life:4}),this.ev("breath")}n.timer<=0&&this.bossNext()}else if(n.state==="charge")n.timer>1.3?n.vx=0:n.vx=n.fx*10,(n.timer<=0||(n.x<=n.x0+1.6||n.x>=n.x1-1.6)&&n.timer<1.2)&&(n.vx=0,this.ev("thud",{x:n.x,y:n.y,z:n.z}),this.bossNext());else if(n.state==="summon"){if(n.vx=0,!n.summoned&&n.timer<.6){n.summoned=!0;for(let c of[-3,3]){let h=this.makeEnemy({t:r>=8?"togebou":"dongurin",x:n.x+c,y:n.floor+3,z:0,edgeTurn:!1},e.nextId++);h.active=!0,e.enemies.push(h)}this.ev("summon")}n.timer<=0&&this.bossNext()}else n.state==="hurt"&&(n.vx=-a*3,n.timer<=0&&this.bossNext());if(e.state!=="play")return;let l={x0:n.x-n.hw,x1:n.x+n.hw,y0:n.y,y1:n.y+n.h,z0:n.z-n.hw,z1:n.z+n.hw},o=oi(s);if(Ki(o,l)){if(s.vy<0&&s.y>=n.y+n.h*.6&&n.inv<=0){n.hp-=3,n.inv=1.2,s.vy=16,s.jumping=!0,s.y=n.y+n.h+.02,s.vx=-a*7,this.ev("bossHit",{stomp:!0}),this.addScore(1e3,n.x,n.y+n.h+1,n.z),n.hp<=0?this.bossDefeat():(n.state="hurt",n.timer=.8,n.vx=0);return}if(s.star>0){n.inv<=0&&(n.hp-=1,n.inv=.6,this.ev("bossHit",{}),n.hp<=0&&this.bossDefeat());return}n.inv>.6||(this.hurt(),s.vx=a*8,s.vy=8)}}bossNext(){let t=this.s.boss,e=t.world,n=["walk","walk"];e>=2&&n.push("jump"),e>=3&&n.push("breath"),e>=5&&n.push("charge"),e>=7&&n.push("summon"),t.act++;let s=n[(t.act*7+Math.floor(this.s.t*3))%n.length];s===t.state&&s!=="walk"&&(s="walk"),t.state=s,t.summoned=!1,s==="walk"&&(t.timer=2.2-Math.min(1,e*.1)),s==="jump"&&(t.timer=1.6,t.vy=15,t.vx=Math.sign(this.s.p.x-t.x)*4),s==="breath"&&(t.timer=1.8,t.shots=e>=6?3:2),s==="charge"&&(t.timer=2.2,t.fx=Math.sign(this.s.p.x-t.x)||-1,this.ev("bossRoar")),s==="summon"&&(t.timer=1.5)}bossDefeat(){let t=this.s,e=t.boss;e.state="dead",e.timer=1.6,e.hp=0,t.bfires.length=0,t.waves.length=0;for(let n of t.enemies)n.alive&&n.x>e.x0-2&&this.killEnemy(n,"boss");this.addScore(1e4,e.x,e.y+e.h+1,e.z),this.ev("bossDown",{x:e.x,y:e.y,z:e.z})}};function Th(i,t){let e=(t/i.period+i.phase)%1,n=.7;if(e>n)return i.y0-1.5;let s=e/n;return i.y0-.5+i.h*4*s*(1-s)}function J_(i){return!!i.jump}var $_=new Gr,Ah=new Map,jd=4;function Qd(i){jd=i}var K_=new Set(["p_shadow","p_spark","p_smoke","p_fire","p_bubble","e_wing"]),j_=new Set(["dirt","sandstone","ice","rock","cave","basalt","brick","castle","cavebrick","wood","coral","bark"]);function $e(i,t={}){let e=i+(t.clamp?"#c":"")+(t.variant?"#"+t.variant:"");if(Ah.has(e))return Ah.get(e);let n=K_.has(i)?".png":".jpg",s=$_.load("tex/"+i+n,()=>{Gl--,Kd&&Kd(1-Gl/Math.max(1,Ch))});return Gl++,Ch++,s.colorSpace=t.linear?Un:ze,t.clamp||(s.wrapS=s.wrapT=bs),s.anisotropy=jd,Ah.set(e,s),s}var Gl=0,Ch=0,Kd=null;function tf(){return{pending:Gl,total:Ch}}var qs=new Map;function Ie(i,t={}){let e=i+JSON.stringify(t);if(qs.has(e))return qs.get(e);let n=new Me({map:$e(i),roughness:t.rough??.88,metalness:t.metal??0,color:t.color??16777215});return j_.has(i)&&!t.noNormal&&(n.normalMap=$e(i+"_n",{linear:!0}),n.normalScale=new rt(.8,.8)),i==="ice"&&(n.roughness=.25,n.metalness=.05),i==="metal"&&(n.roughness=.45,n.metalness=.6),i==="lava"&&(n.emissive=new It(16734736),n.emissiveMap=n.map,n.emissiveIntensity=1.4),i==="cloud"&&(n.roughness=1,n.color=new It(15134463)),(i==="snow_top"||i==="snow_side")&&(n.color=new It(15265530)),i==="beach_top"&&(n.color=new It(15786696)),i==="basalt"&&(n.emissive=new It(16738848),n.emissiveMap=n.map,n.emissiveIntensity=.5),qs.set(e,n),n}function Kt(i,t={}){return new Me({color:i,roughness:t.rough??.7,metalness:t.metal??0,...t.extra})}function Ne(i,t={}){let e="tm:"+i+JSON.stringify(t);if(qs.has(e))return qs.get(e);let n=new Me({map:$e(i,{clamp:t.clamp}),roughness:t.rough??.75,metalness:t.metal??0,transparent:!!t.transparent,alphaTest:t.alphaTest??0,side:t.side??Jn});return t.emissive&&(n.emissive=new It(t.emissive),n.emissiveIntensity=t.ei??1,t.emissiveMap&&(n.emissiveMap=n.map)),t.repeat&&n.map.repeat.set(t.repeat[0],t.repeat[1]),qs.set(e,n),n}function an(i,t={}){return new xi({map:$e(i,{clamp:!0}),transparent:!0,depthWrite:!1,blending:t.add?Xi:Si,color:t.color??16777215,opacity:t.opacity??1})}var gt={sphere:new Gi(1,32,20),sphereLo:new Gi(1,16,10),half:new Gi(1,32,12,0,Math.PI*2,0,Math.PI/2),capsule:new Er(.5,1,6,12),cyl:new zi(1,1,1,24),cone:new Ar(1,1,14),box:new sn(1,1,1),torus:new Vi(1,.28,10,24)};function Ct(i,t,e=1,n=e,s=e){let r=new Ut(i,t);return r.scale.set(e,n,s),r.castShadow=!0,r.receiveShadow=!1,r}function nf(){let i=new ce,t=new ce;i.add(t);let e=Ne("skin",{rough:.6}),n=Ne("hero_cloth",{rough:.8}),s=Ne("hero_cloth_fire",{rough:.8}),r=Ne("hero_boots",{rough:.7}),a=Kt(16777215,{rough:.6}),l=Ct(gt.capsule,n,.62,.42,.56);l.position.y=.52,t.add(l);let o=new ce;o.position.y=1.12,t.add(o);let c=Ct(gt.sphere,Ne("hero_face",{rough:.55}),.42,.4,.42);o.add(c);let h=Ne("hero_cap",{rough:.7}),u=Ct(gt.half,h,.45,.36,.45);u.position.y=.06,o.add(u);let d=Ct(gt.cyl,Kt(1990584,{rough:.7}),.3,.035,.34);d.position.set(.32,.07,0),o.add(d);let f=Kt(16765562,{metal:.6,rough:.3});for(let M of[-1,1]){let S=Ct(gt.torus,f,.075,.075,.075);S.position.set(.18,.28,M*.11),S.rotation.y=Math.PI/2,o.add(S)}let g=Ct(gt.torus,Ne("hero_scarf"),.3,.3,.3);g.rotation.x=Math.PI/2,g.position.y=.86,g.scale.set(.31,.31,.4),t.add(g);let b=Ct(gt.box,Ne("hero_scarf"),.36,.1,.16);b.position.set(-.32,.8,.12),t.add(b);let m={};for(let[M,S,C,v,T,R,L]of[["armL",0,.78,.36,.42,e,.13],["armR",0,.78,-.36,.42,e,.13],["legL",0,.32,.15,.36,n,.15],["legR",0,.32,-.15,.36,n,.15]]){let U=new ce;U.position.set(S,C,v),t.add(U);let k=Ct(gt.capsule,R,L*2,T,L*2);k.position.y=-T*.55,U.add(k);let N=M.startsWith("arm")?Ct(gt.sphere,a,.13):Ct(gt.sphere,r,.17,.13,.15);N.position.set(M.startsWith("leg")?.06:0,-T*1.05,0),U.add(N),m[M]=U}let p=new Ut(new cn(1,1),new Dn({map:$e("p_shadow",{clamp:!0}),transparent:!0,depthWrite:!1,opacity:.75}));p.rotation.x=-Math.PI/2,p.renderOrder=2;let y=0,w=0;return{root:i,shadow:p,torso:l,limbs:m,setPower(M){l.material=M===2?s:n,m.legL.children[0].material=m.legR.children[0].material=M===2?s:n},update(M,S,C){y+=S;let v=Math.hypot(M.vx,M.vz),T=M.power?1:.6,R=i.scale.x;i.scale.setScalar(R+(T-R)*Math.min(1,S*12));let U=Math.atan2(-M.fz,M.fx)-i.rotation.y;for(;U>Math.PI;)U-=Math.PI*2;for(;U<-Math.PI;)U+=Math.PI*2;i.rotation.y+=U*Math.min(1,S*14);let k=!M.onGround&&!M.swim,N=M.runT*2.2,B=Math.min(1,v/6)*.9;if(M.swim){let nt=Math.sin(y*6)*.6;m.armL.rotation.z=2.4+nt,m.armR.rotation.z=2.4+nt,m.legL.rotation.z=-.3+nt*.5,m.legR.rotation.z=-.3-nt*.5,t.rotation.z=-.6}else if(k)m.armL.rotation.z=M.vy>0?2.6:1.2,m.armR.rotation.z=M.vy>0?-.6:1.2,m.legL.rotation.z=.7,m.legR.rotation.z=-.4,t.rotation.z=0;else{let nt=Math.sin(N);m.armL.rotation.z=-nt*B*1.1,m.armR.rotation.z=nt*B*1.1,m.legL.rotation.z=nt*B*1.2,m.legR.rotation.z=-nt*B*1.2,t.rotation.z=-Math.min(.25,v*.02)}let q=1,X=1;if(M.land>0?(q=1-M.land*1.6,X=1+M.land*1.2):k&&M.vy>4&&(q=1.08,X=.95),t.scale.set(X,q,X),t.position.y=!k&&!M.swim?Math.abs(Math.sin(N))*.06*B:0,w-=S,w<0&&(w=2+Math.random()*3),o.rotation.z=k?.12:Math.sin(y*2)*.03,i.visible=!(M.inv>0&&Math.floor(C*20)%2===0),M.star>0){let nt=C*3%1;l.material.emissive=l.material.emissive||new It,l.material.emissive.setHSL(nt,1,.45),l.material.emissiveIntensity=1}else l.material.emissive&&(l.material.emissiveIntensity=0)}}}function Vl(i,t,e,n){return Ct(gt.sphere,Ne(i,{rough:.6}),t,e,n)}function Rh(i,t,e=.08,n=.2){let s=Kt(t,{rough:.8}),r=Ct(gt.sphere,s,.2,.12,.16),a=Ct(gt.sphere,s,.2,.12,.16);return r.position.set(.05,e,n),a.position.set(.05,e,-n),i.add(r,a),[r,a]}function sf(i){let t=new ce,e=new ce;t.add(e);let n=()=>{};if(i==="dongurin"||i==="patadon"){let s=Vl("e_dongurin",.48,.46,.48);s.position.y=.48,e.add(s);let r=Ct(gt.half,Ne("e_acorncap"),.52,.34,.52);r.position.y=.6,e.add(r);let a=Ct(gt.cyl,Kt(5913116),.06,.18,.06);a.position.y=.98,e.add(a);let[l,o]=Rh(e,3810324),c=null;if(i==="patadon"){c=[];for(let h of[-1,1]){let u=new Ut(new cn(.8,.8),Ne("e_wing",{transparent:!0,alphaTest:.3,side:Ze,clamp:!0}));u.position.set(-.15,.8,h*.45),u.rotation.y=h>0?0:Math.PI,e.add(u),c.push(u)}}n=(h,u)=>{let d=Math.sin(u*10);l.position.x=.05+d*.12,o.position.x=.05-d*.12,e.rotation.x=Math.sin(u*10)*.06,c&&(c[0].rotation.x=-.4+Math.sin(u*16)*.6,c[1].rotation.x=.4-Math.sin(u*16)*.6)},t.userData.setWings=h=>{if(c)for(let u of c)u.visible=h}}else if(i==="kabuton"||i==="shell"){let s=Ct(gt.half,Ne("e_shell",{rough:.35}),.55,.55,.52);s.position.y=.18,e.add(s);let r=Ct(gt.cyl,Kt(16182992),.56,.08,.53);r.position.y=.18,e.add(r);let a=Vl("e_kabuton",.3,.3,.3);a.position.set(.48,.62,0),e.add(a);let[l,o]=Rh(e,15777872,.08,.25);t.userData.head=a,t.userData.feet=[l,o],n=(c,h)=>{let u=c.t==="shell";if(a.visible=!u,l.visible=o.visible=!u,u&&c.state==="shellMove"?e.rotation.y+=.5:u||(e.rotation.y=0),!u){let d=Math.sin(h*10);l.position.x=.05+d*.12,o.position.x=.05-d*.12,a.position.y=.62+Math.abs(d)*.03}}}else if(i==="togebou"){let s=Vl("e_togebou",.5,.48,.5);s.position.y=.5,e.add(s);let r=Kt(16052479,{rough:.3,metal:.2});for(let c=0;c<12;c++){let h=c/12*Math.PI*2,u=c%2?.5:-.1,d=Ct(gt.cone,r,.1,.32,.1),f=new P(Math.cos(h)*Math.cos(u),Math.sin(u),Math.sin(h)*Math.cos(u));Math.cos(h)>.7&&u<.3||(d.position.copy(f.clone().multiplyScalar(.5)).add(new P(0,.5,0)),d.quaternion.setFromUnitVectors(new P(0,1,0),f),e.add(d))}let a=Ct(gt.cone,r,.12,.38,.12);a.position.y=1.08,e.add(a);let[l,o]=Rh(e,4202592);n=(c,h)=>{let u=Math.sin(h*8);l.position.x=.05+u*.1,o.position.x=.05-u*.1}}else if(i==="fish"||i==="haneuo"){let s=Vl(i==="fish"?"e_fish":"e_fish2",.55,.42,.36);s.position.y=.42,e.add(s);let r=Kt(i==="fish"?16751184:7315711,{rough:.5}),a=Ct(gt.cone,r,.28,.4,.06);a.rotation.z=Math.PI/2,a.position.set(-.62,.42,0),e.add(a);let l=Ct(gt.cone,r,.16,.3,.05);l.position.set(-.05,.86,0),e.add(l),n=(o,c)=>{a.rotation.y=Math.sin(c*12)*.5,e.rotation.z=i==="haneuo"?Math.atan2(o.vy||0,Math.abs(o.vx)||1)*.6:0}}else if(i==="bullet"){let s=Ct(gt.capsule,Ne("e_bullet",{rough:.3,metal:.4}),.8,.5,.8);s.rotation.z=Math.PI/2,s.position.y=.4,e.add(s);let r=Ct(gt.torus,Kt(13684952,{metal:.7,rough:.3}),.36,.36,.36);r.rotation.y=Math.PI/2,r.position.set(-.45,.4,0),e.add(r),n=()=>{}}else if(i==="gorowa"){let s=Ct(gt.box,Ie("rock"),2,2,2);s.position.y=1,e.add(s);let r=new Ut(new cn(1.4,.9),Ne("boss_golon",{clamp:!0}));r.position.set(1.01,1.1,0),r.rotation.y=Math.PI/2,e.add(r);let a=Kt(9079440,{metal:.3});for(let[l,o]of[[-.6,-.6],[.6,-.6],[-.6,.6],[.6,.6]]){let c=Ct(gt.cone,a,.18,.4,.18);c.position.set(l,-.15,o),c.rotation.x=Math.PI,e.add(c)}n=l=>{e.position.x=(l.state==="wait",0)}}return t.userData.anim=n,t}function rf(i){let t=i==="garock",e=new ce,n=new ce;e.add(n),n.scale.setScalar(1.15);let s=Ne(t?"boss_armor2":"boss_armor",{rough:.45,metal:.4}),r=Ct(gt.sphere,s,t?1.35:1.1,t?1.25:1,t?1.25:1);r.position.y=t?1.3:1.05,n.add(r);let a=Ct(gt.sphere,Kt(t?13213912:15259304,{rough:.8}),t?.9:.75);a.position.set(t?.62:.5,t?1.15:.95,0),a.scale.set(.6,.9,.9),n.add(a);let l=Ct(gt.sphere,Ne(t?"boss_garock":"boss_golon",{rough:.55}),t?.95:.8);l.position.set(.25,t?2.6:2.1,0),n.add(l);let o=Kt(15919824,{rough:.4});for(let b of[-1,1]){let m=Ct(gt.cone,o,.18,.6,.18);m.position.set(.1,t?3.4:2.75,b*.5),m.rotation.x=b*.5,n.add(m)}if(t){let b=Ct(gt.cyl,Kt(15251504,{metal:.8,rough:.25}),.5,.35,.5);b.position.set(.2,3.55,0),n.add(b);let m=new Ut(new cn(2.4,2.6,6,6),Kt(9048096,{extra:{side:Ze}}));m.position.set(-1.25,1.6,0),m.rotation.y=Math.PI/2,n.add(m),e.userData.cape=m}let c=(b,m,p,y,w)=>{let x=new ce;x.position.set(b,m,p),n.add(x);let M=Ct(gt.capsule,s,y,w,y);return M.position.y=-w*.5,x.add(M),x},h=c(.2,t?1.9:1.55,t?1.35:1.1,.42,.8),u=c(.2,t?1.9:1.55,t?-1.35:-1.1,.42,.8),d=c(0,.6,.55,.5,.5),f=c(0,.6,-.55,.5,.5),g=new qe(an("p_fire",{add:!0}));return g.scale.setScalar(1.6),g.position.set(1.1,t?2.4:1.9,0),g.visible=!1,n.add(g),e.userData.anim=(b,m)=>{let p=b.state==="walk"||b.state==="charge",y=Math.sin(m*(b.state==="charge"?14:7));d.rotation.z=p?y*.5:0,f.rotation.z=p?-y*.5:0,h.rotation.z=b.state==="roar"||b.state==="summon"?2.2:p?-y*.4:.3,u.rotation.z=b.state==="roar"||b.state==="summon"?2.2:p?y*.4:.3,g.visible=b.state==="breath"&&Math.floor(m*12)%2===0,n.rotation.z=b.state==="hurt"?Math.sin(m*40)*.12:b.state==="charge"?-.25:0,e.userData.cape&&(e.userData.cape.rotation.x=Math.sin(m*3)*.15);let w=b.inv>0&&Math.floor(m*20)%2===0;r.material.emissive=r.material.emissive||new It,r.material.emissive.set(w?16724016:0)},e}function af(i){let t=new ce;if(i==="star"){let e=new Rs;for(let r=0;r<10;r++){let a=r%2?.2:.46,l=r/10*Math.PI*2+Math.PI/2,o=Math.cos(l)*a,c=Math.sin(l)*a;r?e.lineTo(o,c):e.moveTo(o,c)}let n=new zr(e,{depth:.18,bevelEnabled:!0,bevelSize:.05,bevelThickness:.05,bevelSegments:2});n.center();let s=new Ut(n,new Me({color:16765498,emissive:16756736,emissiveIntensity:.7,metalness:.5,roughness:.3}));s.position.y=.45,s.castShadow=!0,t.add(s),t.userData.spin=s}else{let e={heart:"i_heart",fire:"i_fire",green:"i_green"}[i],n=Ct(gt.sphere,Ne(e,{rough:.35}),.4);n.position.y=.42,t.add(n);let s=Ct(gt.sphere,Kt(3842112),.18,.06,.1);s.position.set(.05,.86,.08),s.rotation.z=.5,t.add(s);let r=Ct(gt.cyl,Kt(6963232),.03,.14,.03);if(r.position.y=.86,t.add(r),i==="fire"){let a=new qe(an("p_fire",{add:!0}));a.scale.setScalar(.9),a.position.y=.95,t.add(a)}t.userData.spin=n}return t}var Hl=null,ef=null;function Wl(){if(!Hl){Hl=new zi(.38,.38,.09,28),Hl.rotateX(Math.PI/2);let t=new Me({color:16761394,metalness:.45,roughness:.3,emissive:10512896,emissiveIntensity:.6}),e=new Me({map:$e("coin",{clamp:!0}),metalness:.4,roughness:.35,emissive:16777215,emissiveMap:$e("coin",{clamp:!0}),emissiveIntensity:.35});ef=[t,e,e]}let i=new Ut(Hl,ef);return i.castShadow=!0,i}function of(){let i=new ce,t=Kt(13685980,{metal:.8,rough:.25}),e=new ce;i.add(e);for(let r=0;r<4;r++){let a=Ct(gt.torus,t,.32,.32,.32);a.rotation.x=Math.PI/2,a.position.y=.12+r*.16,e.add(a)}let n=Ct(gt.cyl,Kt(15219258,{rough:.4}),.48,.1,.48);n.position.y=.76,i.add(n);let s=Ct(gt.cyl,Kt(4210760,{metal:.5}),.48,.1,.48);return s.position.y=.05,i.add(s),i.userData.top=n,i.userData.coil=e,i}function Ph(i){let t=new ce,e=i?9:3.2,n=Ct(gt.cyl,Kt(15265266,{metal:.7,rough:.25}),.09,e,.09);n.position.y=e/2,t.add(n);let s=Ct(gt.sphere,Kt(i?16764992:16732224,{metal:.6,rough:.3}),.24);s.position.y=e+.15,t.add(s);let r=Ct(gt.box,Ie("hardblock"),1,1,1);r.position.y=.5,i&&t.add(r);let a=new cn(i?1.8:1.2,i?1.3:.9,12,4);a.translate(i?-.9:.6,0,0);let l=new Ut(a,Ne(i?"flag_goal":"flag_mid",{side:Ze,clamp:!0}));l.castShadow=!0,l.position.y=i?e-.9:.8,t.add(l);let o=a.attributes.position.array.slice();return t.userData.flag=l,t.userData.h=e,t.userData.wave=c=>{let h=a.attributes.position.array;for(let u=0;u<h.length;u+=3){let d=o[u];h[u+2]=Math.sin(d*3+c*6)*.12*Math.abs(d)/1.8}a.attributes.position.needsUpdate=!0},t}function lf(){let i=new ce,t=new Ut(new Bi(.7,0),new Me({color:16774816,emissive:16760880,emissiveIntensity:1.2,metalness:.3,roughness:.15,transparent:!0,opacity:.92}));t.scale.set(.8,1.2,.8),i.add(t);let e=new qe(an("p_spark",{add:!0,color:16773280}));return e.scale.setScalar(3),i.add(e),i.userData.spin=t,i}function Ih(i,t){let e=new ce,n=Ie("leaves",{noNormal:!0}),s=Ie("bark"),r=a=>(a.castShadow=!0,e.add(a),a);if(i==="tree"){r(Ct(gt.cyl,s,.28,2.2,.28)).position.y=1.1;for(let[a,l,o,c]of[[0,2.8,0,1.3],[.6,2.4,.4,.9],[-.5,2.5,-.4,.95],[0,3.6,0,.9]])r(Ct(gt.sphereLo,n,c)).position.set(a,l,o)}else if(i==="bush")for(let[a,l,o]of[[0,0,.7],[.6,.2,.5],[-.55,-.1,.55]])r(Ct(gt.sphereLo,n,o,o*.8,o)).position.set(a,o*.5,l);else if(i==="flower"){let a=[16769120,16743080,16777215,9091327];for(let l=0;l<5;l++){let o=r(Ct(gt.cyl,Kt(3840570),.03,.5,.03)),c=(l-2)*.3,h=Math.sin(l*2)*.3;o.position.set(c,.25,h),r(Ct(gt.sphereLo,Kt(a[l%4],{rough:.5}),.14,.06,.14)).position.set(c,.52,h)}}else if(i==="rock"){let a=r(Ct(new Rr(1,0),Ie(t==="volcano"?"basalt":t==="snow"?"icerock":"rock"),.8,.6,.7));a.position.y=.3,a.rotation.y=Math.random()*3}else if(i==="cactus"){let a=Kt(4165445,{rough:.8});r(Ct(gt.capsule,a,.6,2.2,.6)).position.y=1.4,r(Ct(gt.capsule,a,.35,.8,.35)).position.set(0,1.6,.55),r(Ct(gt.capsule,a,.35,.6,.35)).position.set(0,1.3,-.55)}else if(i==="palm"){let a=r(Ct(gt.cyl,s,.18,4,.22));a.position.y=2,a.rotation.z=.12;let l=Kt(3971648,{rough:.7,extra:{side:Ze}});for(let o=0;o<7;o++){let c=r(Ct(gt.sphereLo,l,1.4,.08,.35)),h=o/7*Math.PI*2;c.position.set(.25+Math.cos(h)*.9,3.9,Math.sin(h)*.9),c.rotation.y=-h,c.rotation.z=-.4}}else if(i==="pine"){r(Ct(gt.cyl,s,.2,1,.2)).position.y=.5;let a=t==="snow"?Kt(15266047,{rough:.9}):Kt(2054708,{rough:.85});for(let l=0;l<3;l++){let o=r(Ct(gt.cone,l===0&&t==="snow"?Kt(2777152):a,1.1-l*.28,1.4,1.1-l*.28));o.position.y=1.3+l*.8}}else if(i==="snowman"){let a=Kt(16185855,{rough:.9});r(Ct(gt.sphere,a,.6)).position.y=.55,r(Ct(gt.sphere,a,.42)).position.y=1.4;let l=r(Ct(gt.cone,Kt(16744496),.07,.35,.07));l.rotation.z=-Math.PI/2,l.position.set(.5,1.45,0)}else if(i==="lamp"){r(Ct(gt.cyl,Kt(3159100,{metal:.7,rough:.4}),.08,3,.08)).position.y=1.5;let a=r(Ct(gt.sphere,new Me({color:16769184,emissive:16760928,emissiveIntensity:2}),.28));a.position.y=3.1;let l=new qe(an("p_fire",{add:!0,color:16769184,opacity:.6}));l.scale.setScalar(2.2),l.position.y=3.1,e.add(l)}else if(i==="mushroom"){r(Ct(gt.cyl,Ne("mush_stem"),.35,2.4,.35)).position.y=1.2;let a=r(Ct(gt.half,Ne("mush_cap",{rough:.5}),1.4,.9,1.4));a.position.y=2.3}else if(i==="deadtree"){let a=Kt(2759704,{rough:.9});r(Ct(gt.cyl,a,.2,2.6,.25)).position.y=1.3;for(let[l,o]of[[.8,1.8],[-.7,2.2],[.4,2.5]]){let c=r(Ct(gt.cyl,a,.07,1.1,.07));c.position.set(Math.sin(l)*.4,o,Math.cos(l)*.2),c.rotation.z=l}}return e}function cf(){let i=new ce,t=Ct(gt.cyl,Kt(2237482,{metal:.6,rough:.35}),.42,1,.42);t.rotation.z=Math.PI/2,i.add(t);let e=Ct(gt.torus,Kt(13148224,{metal:.8,rough:.3}),.4,.4,.4);e.rotation.y=Math.PI/2,e.position.x=.5,i.add(e);let n=e.clone();n.position.x=-.5,i.add(n);let s=new Ut(new Tr(.25,16),Kt(15790320));return s.position.set(0,0,.43),i.add(s),i}function Q_(i,t){let e=wn[i.theme],n=i.type==="castle";switch(t.mat){case"ground":return{top:e.top,side:e.side,body:e.body,capH:1};case"cave":return{top:i.theme==="grass"?"rock":e.cave,side:i.theme==="grass"?"rock":e.cave,body:i.theme==="grass"?"rock":e.cave};case"castle":return{top:"castle",side:"castle",body:"castle"};case"seabed":return{top:"seabed",side:"coral",body:"coral"};case"ceil":return{top:n?"castle":e.cavebrick,side:n?"castle":e.cavebrick,body:n?"castle":e.cavebrick};case"plat":return{top:e.platTop,side:e.plat,body:e.plat};case"beam":return{top:"metal",side:"metal",body:"metal"};case"castlePlat":return{top:"castle",side:"castle",body:"castle"};case"hard":return{top:"hardblock",side:"hardblock",body:"hardblock",unit:!0};case"pillar":return{top:i.theme==="night"?"metal":"wood",side:i.theme==="night"?"metal":i.theme==="forest"?"bark":"wood",body:"wood"};case"cannon":return{top:"metal",side:"metal",body:"metal"};case"coralWall":return{top:"coral",side:"coral",body:"coral"};default:return null}}var Dh=class{constructor(){this.m=new Map}get(t){let e=this.m.get(t);return e||(e={p:[],n:[],u:[],i:[]},this.m.set(t,e)),e}quad(t,e,n,s,r,a,l){let o=this.get(t),c=o.p.length/3;for(let h of[e,n,s,r])o.p.push(h[0],h[1],h[2]);for(let h=0;h<4;h++)o.n.push(a[0],a[1],a[2]);for(let h of l)o.u.push(h[0],h[1]);o.i.push(c,c+1,c+2,c,c+2,c+3)}build(t,e={}){for(let[n,s]of this.m){let r=new Pe;r.setAttribute("position",new ee(s.p,3)),r.setAttribute("normal",new ee(s.n,3)),r.setAttribute("uv",new ee(s.u,2)),r.setIndex(s.i);let a=new Ut(r,Ie(n));a.receiveShadow=!0,a.castShadow=!e.noCast,t.add(a)}}};function Ys(i,t,e,n=1){let{x0:s,y0:r,z0:a,x1:l,y1:o,z1:c}=t,h=1/n;i.quad(e.top,[s,o,c],[l,o,c],[l,o,a],[s,o,a],[0,1,0],[[s*h,c*h],[l*h,c*h],[l*h,a*h],[s*h,a*h]]),i.quad(e.body,[s,r,a],[l,r,a],[l,r,c],[s,r,c],[0,-1,0],[[s*h,a*h],[l*h,a*h],[l*h,c*h],[s*h,c*h]]);let u=e.capH&&o-r>1.01?e.capH:0,d=(f,g,b,m)=>{let p=y=>m?y-(o-1):y*h;i.quad(b,[s,f,c],[l,f,c],[l,g,c],[s,g,c],[0,0,1],[[s*h,p(f)],[l*h,p(f)],[l*h,p(g)],[s*h,p(g)]]),i.quad(b,[l,f,a],[s,f,a],[s,g,a],[l,g,a],[0,0,-1],[[-l*h,p(f)],[-s*h,p(f)],[-s*h,p(g)],[-l*h,p(g)]]),i.quad(b,[l,f,c],[l,f,a],[l,g,a],[l,g,c],[1,0,0],[[-c*h,p(f)],[-a*h,p(f)],[-a*h,p(g)],[-c*h,p(g)]]),i.quad(b,[s,f,a],[s,f,c],[s,g,c],[s,g,a],[-1,0,0],[[a*h,p(f)],[c*h,p(f)],[c*h,p(g)],[a*h,p(g)]])};u?(d(o-1,o,e.side,!0),d(r,o-1,e.body,!1)):d(r,o,e.side,!1)}var Xl=class{constructor(t,e,n){this.scene=t,this.L=e,this.q=n,this.group=new ce,t.add(this.group),this.dyn=new ce,t.add(this.dyn);let s=wn[e.theme],r=new Dh;for(let o of e.solids){let c=Q_(e,o);c&&(c.unit?Ys(r,o,c,1):Ys(r,o,c,o.mat==="ground"||o.mat==="cave"||o.mat==="seabed"?2:1.5),e.type==="ground"&&o.mat==="ground"&&o.z0<=-e.hw+.01&&o.z1>=e.hw-.01&&(Ys(r,{...o,z0:o.z1,z1:o.z1+7},c,2),Ys(r,{...o,z0:o.z0-7,z1:o.z0},c,2)))}if(e.type==="cave"||e.type==="castle"){let o=e.type==="castle"?"castle":e.theme==="grass"?"rock":wn[e.theme].cave;for(let c of[-1,1]){let h=c<0?-e.hw-1.5:e.hw,u=c<0?-e.hw:e.hw+1.5;Ys(r,{x0:-6,x1:e.length+10,y0:-14,y1:17,z0:h,z1:u},{top:o,side:o,body:o},2)}Ys(r,{x0:e.length+2,x1:e.length+4,y0:-14,y1:17,z0:-e.hw-1.5,z1:e.hw+1.5},{top:o,side:o,body:o},2)}if(r.build(this.group),e.type==="cave"||e.type==="castle"){let o=e.type==="castle",c=new Me({color:o?16756816:10481919,emissive:o?16742944:4247807,emissiveIntensity:2.2,roughness:.3}),h=new Bi(.35,0);this.torches=[];for(let u=6;u<e.length;u+=o?11:9)for(let d of[-1,1]){let f=new ce;if(o){let g=new Ut(gt.cyl,Kt(4861984));g.scale.set(.08,.7,.08),g.rotation.x=d*.5,f.add(g);let b=new qe(an("p_fire",{add:!0}));b.scale.setScalar(1.3),b.position.set(0,.55,-d*.25),f.add(b),this.torches.push(b)}else for(let g=0;g<3;g++){let b=new Ut(h,c);b.scale.set(.6,1.2+g*.3,.6),b.position.set(g*.3-.3,g*.1,0),b.rotation.z=(g-1)*.4,f.add(b)}f.position.set(u+(d>0?4:0),3.4,d*(e.hw-.05)),this.group.add(f)}}this.lavaMeshes=[];for(let o of e.lava){let c=new Ut(new sn(o.x1-o.x0+.02,4,o.z1-o.z0+14),Ie("lava"));c.position.set((o.x0+o.x1)/2,o.y-2,0),Ie("lava").map.repeat.set(1,1),this.group.add(c),this.lavaMeshes.push(c);let u=new Hi(16736288,30,10,2);u.position.set((o.x0+o.x1)/2,o.y+1.5,0),this.q.lights&&this.group.add(u)}if(e.water){let o=e.water,c=new Ut(new cn(o.x1-o.x0+40,60),new Me({map:$e("water"),color:10475775,transparent:!0,opacity:.75,side:Ze,roughness:.2,metalness:.1,emissive:2121888,emissiveIntensity:.4}));c.material.map.repeat.set((o.x1-o.x0)/8,6),c.rotation.x=-Math.PI/2,c.position.set((o.x0+o.x1)/2,o.y1,0),this.group.add(c),this.waterSurf=c;let h=new Ut(new cn(o.x1-o.x0+40,80),Ie("seabed"));Ie("seabed").map.repeat.set(1,1),h.rotation.x=-Math.PI/2,h.position.set((o.x0+o.x1)/2,-3,0),h.receiveShadow=!0,this.group.add(h);let u=Kt(3050064,{rough:.8});for(let d=0;d<o.x1;d+=3+Math.random()*3)for(let f of[-1,1]){let g=1.5+Math.random()*3,b=new Ut(gt.cone,u);b.scale.set(.25,g,.25),b.position.set(d,-3+g/2,f*(6+Math.random()*8)),this.group.add(b)}}if(e.type==="sky"||e.type==="ground"){let o=new Ut(new cn(e.length+400,400),new Me({map:$e("cloud"),color:e.type==="sky"?16777215:s.ground,roughness:1,transparent:!0,opacity:e.type==="sky"?.9:0}));e.type==="sky"&&(o.material.map=$e("cloud"),o.material.map.repeat.set(40,20),o.rotation.x=-Math.PI/2,o.position.set(e.length/2,-22,0),this.group.add(o),this.cloudSea=o)}if(e.type==="ground"||e.type==="sky"){let o=$e(e.type==="sky"?"cloud":s.top,{variant:"hill"});o.repeat.set(10,5);let c=new Me({map:o,roughness:1,color:14543069}),h=e.world*31+e.stage,u=()=>(h=h*16807%2147483647,h/2147483647);for(let d=-40;d<e.length+80;d+=18+u()*14)for(let f of[-1,1]){let g=16+u()*24,b=new Ut(gt.sphereLo,c);if(b.scale.set(g*(1.2+u()),g*(.5+u()*.5),g),b.position.set(d,e.type==="sky"?-30-u()*10:-22-u()*8,f*(70+u()*50)),b.receiveShadow=!1,this.group.add(b),e.type==="ground"&&(e.theme==="grass"||e.theme==="forest"||e.theme==="sea")&&u()<.6){let m=Ih(e.theme==="sea"?"palm":"tree",e.theme);m.scale.setScalar(3+u()*2),m.position.set(d+(u()-.5)*g,b.position.y+b.scale.y*.92,b.position.z+(u()-.5)*g*.5),this.group.add(m)}}}if(e.theme==="cloud"){let o=new Me({color:16054527,roughness:1,emissive:8425648,emissiveIntensity:.12}),c=7,h=()=>(c=c*16807%2147483647,c/2147483647);for(let u of e.solids){if(!(u.mat==="plat"||u.mat==="ground"))continue;let d=2*(u.x1-u.x0+(u.z1-u.z0)),f=Math.min(40,Math.floor(d/1.1));for(let g=0;g<f;g++){let b=(g+h()*.5)/f*d,m,p,y=u.x1-u.x0,w=u.z1-u.z0;b<y?(m=u.x0+b,p=u.z0):(b-=y)<w?(m=u.x1,p=u.z0+b):(b-=w)<y?(m=u.x1-b,p=u.z1):(b-=y,m=u.x0,p=u.z1-b);let x=.45+h()*.5,M=new Ut(gt.sphereLo,o);M.scale.set(x*1.3,x,x*1.3),M.position.set(m,u.y1-.55+h()*.3,p),this.group.add(M)}}}for(let o of e.decor){let c=Ih(o.t,e.theme);c.position.set(o.x,o.y,o.z),c.scale.setScalar(o.s),c.rotation.y=o.x*13.7%6.28,this.group.add(c)}if(e.goal&&!e.goal.boss){let o=Ph(!0);o.position.set(e.goal.x,e.goal.y,0),this.group.add(o),this.goalFlag=o;let c=new ce,h=Ie("brick"),u=(f,g,b,m,p,y)=>{let w=new Ut(gt.box,h);w.scale.set(m,p,y),w.position.set(f,g,b),w.castShadow=!0,w.receiveShadow=!0,c.add(w)};u(0,2,0,5,4,6),u(0,5,0,3,2,4);for(let[f,g]of[[-2,-2.6],[-2,2.6],[2,-2.6],[2,2.6]])u(f,4.4,g,.8,.8,.8);let d=new Ut(gt.box,Kt(1708048));d.scale.set(.2,2,1.6),d.position.set(-2.5,1,0),c.add(d),c.position.set(e.goal.x+9,e.goal.y,0),this.group.add(c)}if(e.checkpoint){let o=Ph(!1);o.position.set(e.checkpoint.x,e.checkpoint.y,-e.hw+.6),this.group.add(o),this.cpFlag=o}this.blockMeshes=new Map;let a={q:Ie("qblock",{noNormal:!0}),used:Ie("qblock_used",{noNormal:!0}),brick:Ie("brick"),hard:Ie("hardblock")};a.q.emissive=new It(8404992),a.q.emissiveIntensity=.3,this.bmat=a;let l=new sn(1,1,1);for(let o of e.blocks){let c=new Ut(l,o.t==="q"?a.q:o.t==="brick"?a.brick:o.t==="hard"?a.hard:a.used);c.position.set(o.i+.5,o.j+.5,o.k),c.castShadow=!0,c.receiveShadow=!0,o.t==="hidden"&&(c.visible=!1),this.group.add(c),this.blockMeshes.set(o.i+","+o.j+","+o.k,c)}this.coinMeshes=e.coins.map(o=>{let c=Wl();return c.position.set(o.x,o.y,o.z),this.group.add(c),c}),this.springMeshes=e.springs.map(o=>{let c=of();return c.position.set(o.x,o.y,o.z),this.group.add(c),c});for(let o of e.cannons){let c=cf();c.position.set(o.x,o.y,o.z),this.group.add(c)}if(this.firebarMeshes=e.firebars.map(o=>{let c=new ce,h=[],u=new Me({color:16752704,emissive:16732176,emissiveIntensity:2});for(let d=.5;d<=o.len;d+=.5){let f=new Ut(gt.sphereLo,u);f.scale.setScalar(.24),c.add(f),h.push([f,d]);let g=new qe(an("p_fire",{add:!0}));g.scale.setScalar(.9),f.add(g),g.scale.setScalar(4)}return this.group.add(c),{g:c,balls:h,fb:o}}),this.bubbleMeshes=e.bubbles.map(o=>{let c=new Ut(gt.sphere,new Me({map:$e("lava"),emissive:16736272,emissiveMap:$e("lava"),emissiveIntensity:1.6}));c.scale.setScalar(.45);let h=new qe(an("p_fire",{add:!0}));return h.scale.setScalar(4.5),c.add(h),this.group.add(c),c}),this.moverMeshes=e.movers.map(o=>{let c=o.mat==="faller"?"wood":o.mat==="mover"?e.theme==="cloud"?"cloud":e.theme==="night"?"metal":"wood":o.mat==="castlePlat"?"castle":wn[e.theme].plat,h=new Ut(new sn(o.w,.6,o.d),Ie(c));return o.mat==="faller"&&(h.material=Ie("wood",{color:16756896})),h.castShadow=!0,h.receiveShadow=!0,this.group.add(h),h}),this.enemyMeshes=new Map,this.itemMeshes=new Map,this.fireMeshes=[],this.bfireMeshes=[],this.waveMeshes=[],this.boss=null,this.crystal=null,this.gate=null,e.boss){let o=rf(e.boss.kind);this.dyn.add(o),this.boss=o;let c=new ce,h=Kt(3158074,{metal:.8,rough:.3});for(let u=-4;u<=4;u+=.8){let d=new Ut(gt.cyl,h);d.scale.set(.1,10,.1),d.position.set(0,5,u),c.add(d)}c.position.set(e.boss.x0-.5,e.boss.y+10,0),this.group.add(c),this.gate=c}}getEnemyMesh(t){let e=this.enemyMeshes.get(t.id),n=t.t==="shell"?"kabuton":t.t;return e&&e.userData.kind!==n&&!(n==="dongurin"&&e.userData.kind==="patadon")&&(this.dyn.remove(e),e=null),e||(e=sf(n),e.userData.kind=n,this.dyn.add(e),this.enemyMeshes.set(t.id,e)),e}sync(t,e,n){let s=t.s;for(let o in s.blocks){let c=s.blocks[o],h=this.blockMeshes.get(o);if(h){if(!c.alive){h.visible&&(h.visible=!1);continue}c.revealed&&!h.visible&&(h.visible=!0),c.used&&h.material!==this.bmat.used&&(h.material=this.bmat.used),h.position.y=c.j+.5+Math.sin(Math.max(0,c.bump)/.2*Math.PI)*.35}}this.bmat.q.emissiveIntensity=.25+Math.sin(e*4)*.15;for(let o=0;o<this.coinMeshes.length;o++){let c=this.coinMeshes[o];if(!s.coins[o].alive){c.visible=!1;continue}c.rotation.y=e*3+o*.3}s.movers.forEach((o,c)=>{let h=this.moverMeshes[c];h.visible=!o.gone,h.position.set(o.px,o.py-.3,o.pz),o.fall&&o.ft>=0&&o.ft<.45&&(h.position.x+=Math.sin(e*60)*.05)}),s.springs.forEach((o,c)=>{let h=this.springMeshes[c],u=o.sq>0?.55+(.3-o.sq)*1.5:1;h.userData.coil.scale.y=Math.min(1,u),h.userData.top.position.y=.76*Math.min(1,u)});for(let o of this.firebarMeshes){let c=o.fb.phase+o.fb.speed*s.t;for(let[h,u]of o.balls)h.position.set(o.fb.x+Math.cos(c)*u,o.fb.plane==="xy"?o.fb.y+Math.sin(c)*u:o.fb.y,o.fb.plane==="xz"?o.fb.z+Math.sin(c)*u:o.fb.z)}this.L.bubbles.forEach((o,c)=>{let h=this.bubbleMeshes[c],u=Th(o,s.t);h.position.set(o.x,u,o.z),h.visible=u>o.y0-1});let r=Ie("lava").map;r.offset.x=e*.02,r.offset.y=e*.03,this.waterSurf&&(this.waterSurf.material.map.offset.x=e*.03,this.waterSurf.material.map.offset.y=e*.02),this.cloudSea&&(this.cloudSea.material.map.offset.x=e*.004);let a=new Set;for(let o of s.enemies){if(!o.alive&&!this.enemyMeshes.has(o.id))continue;if(Math.abs(o.x-s.p.x)>60&&o.alive){let u=this.enemyMeshes.get(o.id);u&&(u.visible=!1);continue}let c=this.getEnemyMesh(o);if(a.add(o.id),c.visible=!0,!o.alive){c.userData.deadT=(c.userData.deadT||0)+n;let u=c.userData.deadT;o.dead==="stomp"?(c.scale.set(1.3,.25,1.3),c.position.set(o.x,o.y,o.z),u>.5&&(c.visible=!1)):(c.position.set(o.x,o.y+4*u-9*u*u,o.z),c.rotation.z=u*8,u>1.2&&(c.visible=!1));continue}c.position.set(o.x,o.y,o.z);let h=o.t==="gorowa"?0:Math.atan2(0,o.vx||-1);c.rotation.y=o.vx>.01?0:o.vx<-.01?Math.PI:c.rotation.y,(o.t==="patadon"||o.t==="dongurin")&&c.userData.setWings&&c.userData.setWings(o.t==="patadon"),c.userData.anim(o,e+o.id)}for(let[o,c]of this.enemyMeshes)!a.has(o)&&c.visible&&c.userData.deadT===void 0&&(c.visible=!1);let l=new Set;for(let o of s.items){let c=this.itemMeshes.get(o.id);c||(c=af(o.kind),this.dyn.add(c),this.itemMeshes.set(o.id,c)),c.position.set(o.x,o.y,o.z),l.add(o.id),c.userData.spin&&(c.userData.spin.rotation.y=e*3)}for(let[o,c]of this.itemMeshes)l.has(o)||(this.dyn.remove(c),this.itemMeshes.delete(o));for(;this.fireMeshes.length<s.fires.length;){let o=new ce,c=new Ut(gt.sphereLo,new Me({color:16765056,emissive:16740368,emissiveIntensity:2.5}));c.scale.setScalar(.2),o.add(c);let h=new qe(an("p_fire",{add:!0}));h.scale.setScalar(1.3),o.add(h),this.dyn.add(o),this.fireMeshes.push(o)}for(this.fireMeshes.forEach((o,c)=>{let h=s.fires[c];o.visible=!!h,h&&(o.position.set(h.x,h.y+.2,h.z),o.rotation.z=e*10)});this.bfireMeshes.length<s.bfires.length;){let o=new ce,c=new qe(an("p_fire",{add:!0,color:16744512}));c.scale.setScalar(1.8),o.add(c);let h=new Ut(gt.sphereLo,new Me({color:16736288,emissive:16723968,emissiveIntensity:2}));h.scale.setScalar(.35),o.add(h),this.dyn.add(o),this.bfireMeshes.push(o)}for(this.bfireMeshes.forEach((o,c)=>{let h=s.bfires[c];o.visible=!!h,h&&o.position.set(h.x,h.y,h.z)});this.waveMeshes.length<s.waves.length;){let o=new Ut(new Vi(1,.12,6,40),new Dn({color:16765056,transparent:!0,opacity:.8}));o.rotation.x=Math.PI/2,this.dyn.add(o),this.waveMeshes.push(o)}if(this.waveMeshes.forEach((o,c)=>{let h=s.waves[c];o.visible=!!h,h&&(o.position.set(h.x,h.y+.15,h.z),o.scale.set(h.r,h.r,1),o.material.opacity=Math.min(1,h.life*1.5))}),this.boss){let o=s.boss;this.boss.position.set(o.x,o.y,o.z);let c=o.state==="charge"?o.fx:Math.sign(s.p.x-o.x)||-1;if(this.boss.rotation.y=c>0?0:Math.PI,o.state==="dead"){let h=1.6-o.timer;this.boss.rotation.z=Math.min(1.5,h*2),this.boss.position.y=o.y-Math.max(0,h-.6)*3,this.boss.visible=h<1.55}else this.boss.visible=!0;this.boss.userData.anim(o,e),this.gate.position.y+=((s.gate?this.L.boss.y:this.L.boss.y+10)-this.gate.position.y)*Math.min(1,n*8),s.crystal&&!this.crystal&&(this.crystal=lf(),this.dyn.add(this.crystal)),this.crystal&&(this.crystal.position.set(s.crystal.x,s.crystal.y+Math.sin(e*2)*.25,s.crystal.z),this.crystal.userData.spin.rotation.y=e*2,this.crystal.visible=!s.crystal.taken)}if(this.goalFlag){this.goalFlag.userData.wave(e);let o=this.goalFlag.userData.flag,c=this.goalFlag.userData.h-.9,h=s.state==="goal"||s.state==="clear"?1:c;o.position.y+=(h-o.position.y)*Math.min(1,n*3)}this.torches&&this.torches.forEach((o,c)=>o.scale.setScalar(1.2+Math.sin(e*13+c*1.7)*.15)),this.cpFlag&&(this.cpFlag.userData.wave(e),this.cpFlag.userData.flag.position.y+=((s.cp?2.6:.8)-this.cpFlag.userData.flag.position.y)*Math.min(1,n*4))}dispose(){this.scene.remove(this.group),this.scene.remove(this.dyn);let t=new Set,e=n=>{n.traverse(s=>{s.geometry&&!Object.values(gt).includes(s.geometry)&&t.add(s.geometry)})};e(this.group),e(this.dyn);for(let n of t)n.dispose()}};var ql=class{constructor(t){this.scene=t,this.parts=[],this.debris=[],this.mats={smoke:an("p_smoke"),spark:an("p_spark",{add:!0}),fire:an("p_fire",{add:!0}),bubble:an("p_bubble")},this.textCache=new Map,this.cube=new sn(.35,.35,.35)}sprite(t,e,n,s,r={}){let a=new qe(this.mats[t].clone());r.color&&a.material.color.set(r.color),a.position.set(e,n,s),a.scale.setScalar(r.size||.6),this.scene.add(a),this.parts.push({m:a,vx:r.vx||0,vy:r.vy||0,vz:r.vz||0,g:r.g??0,life:r.life||.6,max:r.life||.6,grow:r.grow??1,size:r.size||.6,spin:r.spin||0})}burst(t,e,n,s,r,a={}){for(let l=0;l<r;l++){let o=Math.random()*Math.PI*2,c=(a.speed||2)*(.5+Math.random()*.7);this.sprite(t,e,n,s,{...a,vx:Math.cos(o)*c,vz:Math.sin(o)*c,vy:(a.up??1.5)*(.5+Math.random()),size:(a.size||.6)*(.7+Math.random()*.6)})}}bricks(t,e,n){let s=Ie("brick");for(let r=0;r<4;r++){let a=new Ut(this.cube,s);a.castShadow=!0,a.position.set(t+.25+r%2*.5,e+.25+Math.floor(r/2)*.5,n),this.scene.add(a),this.debris.push({m:a,vx:(r%2?1:-1)*(1.5+Math.random()),vy:8+Math.floor(r/2)*3,vz:(Math.random()-.5)*3,life:1.6})}}text(t,e,n,s,r="#fff"){let a=t+r,l=this.textCache.get(a);if(!l){let c=document.createElement("canvas");c.width=256,c.height=96;let h=c.getContext("2d");h.font="900 64px system-ui, sans-serif",h.textAlign="center",h.textBaseline="middle",h.lineWidth=10,h.strokeStyle="rgba(30,20,10,0.9)",h.strokeText(t,128,50),h.fillStyle=r,h.fillText(t,128,50),l=new Sr(c),l.colorSpace=ze,this.textCache.set(a,l)}let o=new qe(new xi({map:l,transparent:!0,depthWrite:!1,depthTest:!1}));o.position.set(e,n,s),o.scale.set(1.6,.6,1),o.renderOrder=10,this.scene.add(o),this.parts.push({m:o,vx:0,vy:1.6,vz:0,g:0,life:.9,max:.9,grow:1,size:0,text:!0})}coinPop(t,e,n,s){let r=s;r.position.set(t,e,n),this.scene.add(r),this.debris.push({m:r,vx:0,vy:11,vz:0,life:.55,coin:!0})}update(t){for(let e=this.parts.length-1;e>=0;e--){let n=this.parts[e];if(n.life-=t,n.life<=0){this.scene.remove(n.m),n.text,n.m.material.dispose(),this.parts.splice(e,1);continue}n.vy-=n.g*t,n.m.position.x+=n.vx*t,n.m.position.y+=n.vy*t,n.m.position.z+=n.vz*t;let s=n.life/n.max;n.m.material.opacity=Math.min(1,s*2),n.text||n.m.scale.setScalar(n.size*(1+(1-s)*(n.grow-1))),n.spin&&(n.m.material.rotation+=n.spin*t)}for(let e=this.debris.length-1;e>=0;e--){let n=this.debris[e];n.life-=t,n.vy-=(n.coin,30*t),n.m.position.x+=n.vx*t,n.m.position.y+=n.vy*t,n.m.position.z+=n.vz*t,n.m.rotation.x+=t*8,n.m.rotation.y+=t*(n.coin?20:5),n.life<=0&&(this.scene.remove(n.m),this.debris.splice(e,1))}}clear(){for(let t of this.parts)this.scene.remove(t.m);for(let t of this.debris)this.scene.remove(t.m);this.parts=[],this.debris=[]}};var Yl=class{constructor(t){this.keys=new Set,this.state={mx:0,mz:0,jump:!1,dash:!1,jumpPressed:!1,firePressed:!1},this.cam=0,this.camDrag=0,this.pausePressed=!1,this.touch={stick:null,jump:null,dash:null,fire:null,cam:null},this.stickV={x:0,y:0},this.isTouch=!1,this.anyPress=!1,this.bindKeys(),this.root=t}bindKeys(){let t=n=>n.code;addEventListener("keydown",n=>{let s=t(n);["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(s)&&n.preventDefault(),!n.repeat&&(this.keys.add(s),this.anyPress=!0,(s==="Space"||s==="KeyK"||s==="KeyZ")&&(this.state.jumpPressed=!0),(s==="KeyL"||s==="KeyF"||s==="KeyX")&&(this.state.firePressed=!0),(s==="ShiftLeft"||s==="ShiftRight"||s==="KeyJ")&&(this.state.firePressed=this.state.firePressed||!1),(s==="Escape"||s==="KeyP")&&(this.pausePressed=!0))}),addEventListener("keyup",n=>this.keys.delete(t(n))),addEventListener("blur",()=>this.releaseAll()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.releaseAll()});let e=null;addEventListener("mousedown",n=>{n.target.closest&&n.target.closest(".ui-btn, .menu, button")||(e=n.clientX)}),addEventListener("mousemove",n=>{e!==null&&n.buttons&&(this.camDrag+=(n.clientX-e)*.006,e=n.clientX)}),addEventListener("mouseup",()=>e=null)}releaseAll(){this.keys.clear(),this.touch={stick:null,jump:null,dash:null,fire:null,cam:null},this.stickV.x=this.stickV.y=0,this.onTouchVisual&&this.onTouchVisual()}bindTouch(t){this.els=t;let e=this.touch,n=a=>{this.isTouch=!0,this.anyPress=!0;let l=a.pointerId,o=a.target.closest("[data-pad]");if(!o)return;let c=o.dataset.pad;a.preventDefault();try{o.setPointerCapture(l)}catch{}if(c==="stick"){let h=t.stickZone.getBoundingClientRect();e.stick={id:l,ox:a.clientX,oy:a.clientY,r:h},this.moveStick(a.clientX,a.clientY)}else c==="jump"?(e.jump=l,this.state.jumpPressed=!0):c==="dash"?(e.dash=l,this.firePower&&(this.state.firePressed=!0)):c==="fire"?(e.fire=l,this.state.firePressed=!0):c==="cam"&&(e.cam={id:l,x:a.clientX});this.onTouchVisual&&this.onTouchVisual()},s=a=>{let l=a.pointerId;e.stick&&e.stick.id===l&&(a.preventDefault(),this.moveStick(a.clientX,a.clientY)),e.cam&&e.cam.id===l&&(this.camDrag+=(a.clientX-e.cam.x)*.008,e.cam.x=a.clientX)},r=a=>{let l=a.pointerId;e.stick&&e.stick.id===l&&(e.stick=null,this.stickV.x=this.stickV.y=0),e.jump===l&&(e.jump=null),e.dash===l&&(e.dash=null),e.fire===l&&(e.fire=null),e.cam&&e.cam.id===l&&(e.cam=null),this.onTouchVisual&&this.onTouchVisual()};for(let a of t.all)a.addEventListener("pointerdown",n,{passive:!1}),a.addEventListener("pointermove",s,{passive:!1}),a.addEventListener("pointerup",r),a.addEventListener("pointercancel",r),a.addEventListener("lostpointercapture",r);for(let a of t.all)a.addEventListener("click",l=>{l.preventDefault(),l.stopPropagation()},!0)}moveStick(t,e){let n=this.touch.stick;if(!n)return;let s=t-n.ox,r=e-n.oy,a=52,l=Math.hypot(s,r);l>a&&(s*=a/l,r*=a/l,n.ox=t-s,n.oy=e-r),this.stickV.x=s/a,this.stickV.y=r/a,this.els&&this.els.knob&&(this.els.knob.style.transform=`translate(${s}px, ${r}px)`,this.els.stickBase.style.left=n.ox-n.r.left+"px",this.els.stickBase.style.top=n.oy-n.r.top+"px")}poll(){let t=this.keys,e=(t.has("KeyD")||t.has("ArrowRight")?1:0)-(t.has("KeyA")||t.has("ArrowLeft")?1:0),n=(t.has("KeyW")||t.has("ArrowUp")?1:0)-(t.has("KeyS")||t.has("ArrowDown")?1:0);this.touch.stick&&(e=this.stickV.x,n=-this.stickV.y,Math.hypot(e,n)<.18&&(e=0,n=0));let s=Math.hypot(e,n);return s>1&&(e/=s,n/=s),this.screen={x:e,y:n},this.state.jump=t.has("Space")||t.has("KeyK")||t.has("KeyZ")||this.touch.jump!==null,this.state.dash=t.has("ShiftLeft")||t.has("ShiftRight")||t.has("KeyJ")||this.touch.dash!==null,this.cam=(t.has("KeyE")?1:0)-(t.has("KeyQ")?1:0),this.state}};var hf={ground:{tempo:150,beats:4,swing:.12,leadInst:"square",counter:"pluck",pad:"stab",bass:"bass",drums:"pop",chords:"C Am F G C Am Dm7/G C | F G Em Am F G E7 G7",lead:`E5:2 G5:2 C6:3 B5:1 A5:2 G5:2 E5:4 | A5:2 C6:2 E6:4 D6:2 C6:2 A5:4 | F5:3 G5:1 A5:2 F5:2 C6:4 A5:4 | B5:2 A5:2 G5:2 D5:2 G5:6 r:2 |
           E5:2 G5:2 C6:3 B5:1 A5:2 G5:2 E6:4 | D6:2 C6:2 A5:2 C6:2 E6:4 G6:4 | F6:2 E6:2 D6:2 C6:2 B5:2 C6:2 D6:4 | C6:6 G5:2 C6:4 r:4 |
           A5:2 F5:2 A5:2 C6:2 F6:4 E6:4 | D6:2 B5:2 G5:2 B5:2 D6:4 C6:2 B5:2 | G5:3 B5:1 E6:4 D6:2 B5:2 G5:4 | A5:2 C6:2 E6:2 A6:2 G6:4 E6:4 |
           F6:2 E6:2 C6:2 A5:2 F5:4 A5:4 | G5:2 B5:2 D6:2 G6:2 F6:4 D6:4 | E6:2 D6:2 C6:2 B5:2 G#5:4 B5:4 | D6:4 B5:4 G5:4 r:4`,counterLine:`r:8 C5:2 E5:2 G5:4 | r:8 E5:2 A5:2 C6:4 | r:8 A4:2 C5:2 F5:4 | r:8 B4:2 D5:2 G5:4 |
           r:8 C5:2 E5:2 G5:4 | r:8 E5:2 A5:2 C6:4 | r:4 F5:4 r:4 F5:4 | E5:4 G5:4 E5:4 r:4 |
           C5:4 r:4 C5:4 A4:4 | D5:4 r:4 D5:4 B4:4 | B4:4 r:4 G4:4 B4:4 | C5:4 r:4 E5:4 C5:4 |
           A4:4 C5:4 F5:4 C5:4 | B4:4 D5:4 G5:4 D5:4 | G#4:4 B4:4 E5:4 D5:4 | B4:4 D5:4 F5:4 r:4`},cave:{tempo:118,beats:4,swing:0,leadInst:"pluck",counter:"bell",pad:"pad",bass:"bass",drums:"tick",chords:"Am Am F E Am Am Dm E | Dm Am Bb E Dm Am Bb E",lead:`A4:1 r:1 C5:1 r:1 E5:1 r:3 D5:1 r:1 C5:1 r:1 B4:2 r:2 | A4:1 r:1 E5:1 r:1 A5:2 G5:2 E5:4 r:4 | F5:1 r:1 E5:1 r:1 C5:1 r:1 A4:2 C5:2 F5:2 r:4 | E5:2 D#5:2 E5:2 B4:2 G#4:4 r:4 |
           A5:1 r:1 G5:1 r:1 E5:1 r:3 D5:1 r:1 E5:1 r:1 C5:2 r:2 | B4:2 C5:2 D5:2 E5:2 A5:4 r:4 | D5:1 r:1 F5:1 r:1 A5:2 G5:2 F5:2 E5:2 D5:4 | E5:4 G#5:4 B5:4 r:4 |
           D5:2 r:2 F5:2 A5:2 D6:4 C6:4 | C6:2 B5:2 A5:2 E5:2 C5:4 r:4 | Bb4:2 D5:2 F5:2 Bb5:2 A5:4 F5:4 | G#5:2 A5:2 B5:2 E5:2 E6:4 r:4 |
           F5:2 E5:2 D5:2 A4:2 D5:4 F5:4 | E5:2 C5:2 A4:2 C5:2 E5:4 A5:4 | F5:2 D5:2 Bb4:2 D5:2 F5:4 Bb5:4 | B5:4 G#5:4 E5:4 r:4`,counterLine:`r:16 | r:12 A5:4 | r:16 | r:12 B5:4 | r:16 | r:12 E6:4 | r:16 | r:8 E6:8 |
           r:16 | r:12 E6:4 | r:16 | r:12 B5:4 | r:16 | r:12 C6:4 | r:16 | r:8 G#5:8`},sky:{tempo:132,beats:4,swing:.18,leadInst:"flute",counter:"bell",pad:"pad",bass:"bass",drums:"soft",chords:"F C/E Dm Bb F C Bb/C F | Dm Am Bb C Dm Am Gm C7",lead:`C6:4 A5:2 F5:2 G5:4 A5:4 | G5:4 E5:2 C5:2 D5:4 E5:4 | F5:2 A5:2 D6:4 C6:2 A5:2 F5:4 | D5:2 F5:2 Bb5:4 A5:4 G5:4 |
           C6:4 A5:2 F5:2 G5:2 A5:2 C6:4 | E6:4 D6:2 C6:2 G5:8 | Bb5:2 C6:2 D6:4 E6:2 D6:2 C6:4 | F6:6 C6:2 A5:4 r:4 |
           A5:2 D6:2 F6:4 E6:2 D6:2 A5:4 | C6:2 A5:2 E5:4 G5:4 A5:4 | Bb5:2 A5:2 G5:2 F5:2 D5:4 F5:4 | E5:2 G5:2 C6:4 Bb5:4 G5:4 |
           A5:2 D6:2 F6:4 A6:4 F6:4 | E6:2 C6:2 A5:2 C6:2 E6:8 | D6:2 Bb5:2 G5:2 Bb5:2 D6:4 G6:4 | E6:4 C6:4 Bb5:4 G5:4`,counterLine:`A5:16 | G5:16 | F5:16 | D5:16 | A5:16 | G5:16 | F5:8 E5:8 | F5:16 |
           F5:16 | E5:16 | D5:16 | E5:16 | F5:16 | E5:16 | D5:16 | E5:16`},water:{tempo:104,beats:3,swing:0,leadInst:"glass",counter:"flute",pad:"harp",bass:"softbass",drums:"none",chords:"C Am Dm G C Em F G | F G Em Am Dm G C G7",lead:`E5:6 G5:3 E5:3 | C5:6 E5:3 A5:3 | F5:6 A5:3 D6:3 | B5:6 A5:3 G5:3 | G5:6 C6:3 E6:3 | D6:6 B5:3 G5:3 | A5:4 C6:4 F6:4 | E6:6 D6:3 B5:3 |
           A5:6 C6:3 F6:3 | G6:6 F6:3 D6:3 | E6:6 D6:3 B5:3 | C6:6 B5:3 A5:3 | D6:6 F6:3 A6:3 | G6:4 F6:4 D6:4 | E6:9 C6:3 | D6:6 B5:3 G5:3`,counterLine:"r:12 | r:6 C5:6 | r:12 | r:6 D5:6 | r:12 | r:6 G5:6 | r:12 | r:6 G5:6 | r:12 | r:6 B5:6 | r:12 | r:6 E5:6 | r:12 | r:6 B5:6 | r:12 | r:6 F5:6"},castle:{tempo:140,beats:4,swing:0,leadInst:"brass",counter:"organ",pad:"organ",bass:"bass",drums:"march",chords:"Cm Cm Ab G Cm Cm Db G | Fm Cm Ab G Fm Cm Db G",lead:`C5:2 r:2 C5:2 Eb5:2 G5:4 F#5:4 | G5:2 Ab5:2 G5:2 F5:2 Eb5:4 D5:4 | C5:2 r:2 C5:2 Eb5:2 Ab5:4 G5:4 | B4:2 C5:2 D5:2 F5:2 G5:8 |
           C6:2 r:2 B5:2 r:2 Bb5:2 r:2 A5:2 r:2 | Ab5:4 G5:4 Eb5:4 C5:4 | Db5:2 F5:2 Ab5:2 Db6:2 C6:4 Ab5:4 | B4:4 D5:4 G5:4 B5:4 |
           F5:2 Ab5:2 C6:4 B5:2 C6:2 Ab5:4 | G5:2 Eb5:2 C5:4 D5:2 Eb5:2 G5:4 | Ab5:2 C6:2 Eb6:4 D6:2 C6:2 Ab5:4 | G5:2 B5:2 D6:4 F6:4 D6:4 |
           C6:3 B5:1 C6:2 Ab5:2 F5:4 r:4 | Eb5:3 D5:1 Eb5:2 G5:2 C6:4 r:4 | Db6:2 C6:2 Ab5:2 F5:2 Db5:4 F5:4 | G5:4 B5:4 D6:4 G6:4`,counterLine:"G4:16 | Eb4:16 | Eb4:16 | D4:16 | G4:16 | Eb4:16 | F4:16 | D4:16 | C5:16 | G4:16 | Eb5:16 | D5:16 | C5:16 | G4:16 | F4:16 | D5:16"},boss:{tempo:168,beats:4,swing:0,leadInst:"brass",counter:"square",pad:"stab",bass:"bass",drums:"rock",chords:"Am F G E Am F G E",lead:`A5:2 A5:1 A5:1 C6:2 A5:2 E6:4 D6:2 C6:2 | F5:2 F5:1 F5:1 A5:2 F5:2 C6:4 B5:2 A5:2 | G5:2 G5:1 G5:1 B5:2 G5:2 D6:4 C6:2 B5:2 | G#5:2 B5:2 E6:2 G#6:2 B6:4 G#6:4 |
           E6:2 D6:2 C6:2 B5:2 A5:4 E5:4 | F5:2 A5:2 C6:2 F6:2 E6:4 C6:4 | D6:2 B5:2 G5:2 B5:2 D6:4 G6:4 | E6:4 G#5:4 B5:4 E6:4`,counterLine:`A4:2 r:2 A4:2 r:2 A4:2 r:2 A4:2 r:2 | F4:2 r:2 F4:2 r:2 F4:2 r:2 F4:2 r:2 | G4:2 r:2 G4:2 r:2 G4:2 r:2 G4:2 r:2 | E4:2 r:2 E4:2 r:2 G#4:2 r:2 B4:2 r:2 |
           A4:2 r:2 A4:2 r:2 A4:2 r:2 A4:2 r:2 | F4:2 r:2 F4:2 r:2 F4:2 r:2 F4:2 r:2 | G4:2 r:2 G4:2 r:2 G4:2 r:2 G4:2 r:2 | E4:2 r:2 E4:2 r:2 G#4:2 r:2 B4:2 r:2`},title:{tempo:112,beats:4,swing:.1,leadInst:"flute",counter:"bell",pad:"pad",bass:"softbass",drums:"soft",chords:"G D/F# Em C G D C/D G",lead:`D5:2 G5:2 B5:4 A5:2 G5:2 D6:4 | C6:2 B5:2 A5:2 F#5:2 D5:8 | E5:2 G5:2 B5:2 E6:2 D6:4 B5:4 | C6:4 E6:4 D6:4 C6:4 |
           B5:2 D6:2 G6:4 F#6:2 E6:2 D6:4 | A5:2 D6:2 F#6:4 E6:2 D6:2 A5:4 | C6:2 B5:2 A5:4 B5:2 C6:2 D6:4 | G5:8 r:8`,counterLine:"B4:16 | A4:16 | G4:16 | E4:16 | D5:16 | F#4:16 | E4:8 F#4:8 | D4:16"},star:{tempo:180,beats:4,swing:0,leadInst:"square",counter:"pluck",pad:"stab",bass:"bass",drums:"rock",chords:"C F C G",lead:"C6:1 r:1 C6:1 r:1 C6:2 D6:2 E6:2 G6:2 E6:2 D6:2 | F6:1 r:1 F6:1 r:1 F6:2 E6:2 D6:2 C6:2 A5:4 | E6:1 r:1 E6:1 r:1 G6:2 E6:2 C6:2 E6:2 G6:4 | B5:2 D6:2 G6:2 F6:2 D6:2 B5:2 G5:4",counterLine:"r:16 | r:16 | r:16 | r:16"}},Nh={start:{tempo:160,notes:"G5:2 C6:2 E6:2 G6:4 E6:2 G6:6",inst:"square",bass:"C3:8 G3:8"},clear:{tempo:150,notes:"C5:2 E5:2 G5:2 C6:2 E6:2 G6:4 E6:4 Ab5:2 C6:2 Eb6:2 Ab6:4 Eb6:4 Bb5:2 D6:2 F6:2 Bb6:4 Bb6:1 r:1 Bb6:1 r:1 Bb6:2 C7:12",inst:"square",bass:"C3:12 Ab2:12 Bb2:12 C3:12"},castleClear:{tempo:130,notes:"G5:2 C6:2 E6:2 G6:6 F6:2 E6:2 D6:2 C6:6 D6:2 E6:2 F6:2 G6:2 A6:2 B6:2 C7:12",inst:"brass",bass:"C3:8 F3:8 G3:8 C3:12"},die:{tempo:120,notes:"B5:2 F6:2 r:2 F6:2 F6:3 E6:3 D6:2 C6:4 r:4",inst:"square",bass:"G3:4 r:4 G3:4 C3:8"},over:{tempo:90,notes:"C6:4 G5:4 E5:4 A5:3 B5:3 A5:3 G#5:3 Bb5:3 G#5:3 G5:2 F5:2 G5:8",inst:"flute",bass:"C3:12 F3:9 Db3:9 C3:12"},oneup:{tempo:200,notes:"E6:2 G6:2 E7:2 C7:2 D7:2 G7:4",inst:"square"},power:{tempo:220,notes:"C5:1 G5:1 C6:1 E5:1 B5:1 E6:1 G5:1 D6:1 G6:1 C6:1 G6:1 C7:3",inst:"square"},ending:{tempo:96,notes:"D5:4 G5:4 B5:4 D6:8 C6:2 B5:2 A5:4 G5:4 E5:4 G5:4 C6:8 B5:2 A5:2 G5:4 A5:4 B5:4 D6:4 G6:12",inst:"flute",bass:"G2:16 C3:16 E3:16 G2:16"}},uf=[{tr:0,tempo:1},{tr:-2,tempo:.96,lead:"reed"},{tr:2,tempo:1.02,lead:"pluck"},{tr:-3,tempo:.97,lead:"flute"},{tr:4,tempo:.95,lead:"glass"},{tr:5,tempo:1.04,lead:"flute"},{tr:-5,tempo:.92,lead:"bell"},{tr:-1,tempo:1.06,lead:"brass"}],ty={C:0,D:2,E:4,F:5,G:7,A:9,B:11};function Lh(i){let t=/^([A-G])([#b]?)(-?\d)$/.exec(i);if(!t)throw new Error("bad note "+i);return 12*(Number(t[3])+1)+ty[t[1]]+(t[2]==="#"?1:t[2]==="b"?-1:0)}function Zs(i){let t=[],e=0;for(let n of i.replace(/\|/g," ").split(/\s+/).filter(Boolean)){let[s,r]=n.split(":"),a=Number(r);s!=="r"&&t.push({n:Lh(s),at:e,len:a}),e+=a}return{notes:t,length:e}}var ey={"":[0,4,7],m:[0,3,7],7:[0,4,7,10],m7:[0,3,7,10],dim:[0,3,6]};function df(i){return i.replace(/\|/g," ").split(/\s+/).filter(Boolean).map(t=>{let[e,n]=t.split("/"),s=/^([A-G][#b]?)(m7|m|7|dim)?$/.exec(e),r=Lh(s[1]+"3")%12,a=ey[s[2]||""],l=n?Lh(n+"2")%12:r;return{root:r,ints:a,bass:l}})}var ny=typeof window<"u"?window.AudioContext||window.webkitAudioContext:null,ff={square:{harm:[1,0,.33,0,.2,0,.14,0,.1,0,.07],a:.005,d:.12,s:.55,r:.06,cut:3800,vib:.004,gain:.16},pluck:{harm:[1,.6,.35,.25,.15,.1,.06],a:.002,d:.22,s:0,r:.1,cut:2600,sweep:.5,gain:.2},flute:{harm:[1,.25,.08,.03],a:.04,d:.1,s:.8,r:.12,cut:4200,vib:.006,breath:.03,gain:.2},bell:{harm:[1,0,0,.4,0,0,.2],a:.002,d:.6,s:0,r:.4,cut:6e3,bell:!0,gain:.17},glass:{harm:[1,.1,.3,.05,.15],a:.01,d:.5,s:.25,r:.4,cut:5e3,vib:.003,bell:!0,gain:.17},brass:{harm:[1,.8,.6,.45,.35,.25,.18,.12],a:.03,d:.15,s:.7,r:.08,cut:1800,sweep:1.6,vib:.005,gain:.13},organ:{harm:[1,1,0,.5,0,0,0,.3],a:.01,d:.05,s:.9,r:.08,cut:3e3,gain:.08},reed:{harm:[1,.1,.6,.1,.4,.1,.25,.05,.15],a:.02,d:.1,s:.7,r:.08,cut:2600,vib:.007,gain:.15},pad:{harm:[1,.5,.3,.2,.12,.08],a:.35,d:.3,s:.8,r:.6,cut:1400,detune:8,gain:.05},stab:{harm:[1,.5,.33,.25,.2],a:.003,d:.09,s:0,r:.05,cut:2400,gain:.07},harp:{harm:[1,.4,.2,.1,.05],a:.003,d:.5,s:0,r:.3,cut:3e3,gain:.07},bass:{harm:[1,.5,.25,.12,.06],a:.005,d:.12,s:.6,r:.05,cut:900,gain:.26},softbass:{harm:[1,.2,.05],a:.02,d:.2,s:.6,r:.15,cut:700,gain:.26}},xa=i=>440*Math.pow(2,(i-69)/12),_a=class{constructor(){this.ctx=null,this.musicVol=.7,this.sfxVol=.8,this.song=null,this.timer=null,this.waves={},this.noiseBuf=null,this.muted=!1}init(t){if(this.ctx)return;this.ctx=t||new ny;let e=this.ctx;this.master=e.createGain(),this.master.gain.value=this.muted?0:.9;let n=e.createDynamicsCompressor();n.threshold.value=-16,n.ratio.value=4,n.attack.value=.004,n.release.value=.2,this.master.connect(n).connect(e.destination),this.musicBus=e.createGain(),this.musicBus.gain.value=this.musicVol,this.musicBus.connect(this.master),this.sfxBus=e.createGain(),this.sfxBus.gain.value=this.sfxVol,this.sfxBus.connect(this.master);let s=Math.floor(e.sampleRate*2.2),r=e.createBuffer(2,s,e.sampleRate),a=7;for(let c=0;c<2;c++){let h=r.getChannelData(c);for(let u=0;u<s;u++)a=a*1664525+1013904223>>>0,h[u]=(a/2147483648-1)*Math.pow(1-u/s,2.6)}this.verb=e.createConvolver(),this.verb.buffer=r,this.verbIn=e.createGain(),this.verbIn.gain.value=.22,this.verbIn.connect(this.verb).connect(this.master),this.delay=e.createDelay(1),this.delayFb=e.createGain(),this.delayFb.gain.value=.28,this.delayOut=e.createGain(),this.delayOut.gain.value=.16,this.delay.connect(this.delayFb).connect(this.delay),this.delay.connect(this.delayOut).connect(this.musicBus);let l=e.createBuffer(1,e.sampleRate,e.sampleRate),o=l.getChannelData(0);for(let c=0;c<o.length;c++)a=a*1664525+1013904223>>>0,o[c]=a/2147483648-1;this.noiseBuf=l;for(let[c,h]of Object.entries(ff)){let u=new Float32Array(h.harm.length+1),d=new Float32Array(h.harm.length+1);h.harm.forEach((f,g)=>d[g+1]=f),this.waves[c]=e.createPeriodicWave(u,d)}}resume(){this.ctx&&this.ctx.state!=="running"&&!(typeof document<"u"&&document.hidden)&&this.ctx.resume()}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}setVolumes(t,e){this.musicVol=t,this.sfxVol=e,this.ctx&&(this.musicBus.gain.setTargetAtTime(this.hold?0:t,this.ctx.currentTime,.05),this.sfxBus.gain.setTargetAtTime(e,this.ctx.currentTime,.05))}setMusicHold(t){this.hold=t,this.ctx&&this.musicBus.gain.setTargetAtTime(t?0:this.musicVol,this.ctx.currentTime,.06)}setMuted(t){this.muted=t,this.ctx&&this.master.gain.setTargetAtTime(t?0:.9,this.ctx.currentTime,.05)}note(t,e,n,s,r=1,a,l=0,o=.3){let c=this.ctx,h=ff[t],u=c.createOscillator();u.setPeriodicWave(this.waves[t]),u.frequency.setValueAtTime(xa(e),n);let d=null;if(h.detune&&(d=c.createOscillator(),d.setPeriodicWave(this.waves[t]),d.frequency.setValueAtTime(xa(e),n),d.detune.value=h.detune),h.vib&&s>.25){let w=c.createOscillator(),x=c.createGain();w.frequency.value=5.5,x.gain.setValueAtTime(0,n),x.gain.linearRampToValueAtTime(xa(e)*h.vib,n+.25),w.connect(x).connect(u.frequency),w.start(n),w.stop(n+s+h.r+.05)}let f=c.createBiquadFilter();f.type="lowpass",f.Q.value=.8,f.frequency.setValueAtTime(h.sweep?h.cut*(1+h.sweep):h.cut,n),h.sweep&&f.frequency.exponentialRampToValueAtTime(h.cut*.6,n+Math.min(s,.3));let g=c.createGain(),b=h.gain*r;g.gain.setValueAtTime(1e-4,n),g.gain.linearRampToValueAtTime(b,n+h.a),g.gain.setTargetAtTime(b*Math.max(1e-4,h.s),n+h.a,h.d/3);let m=n+Math.max(s,h.a+.01);g.gain.setTargetAtTime(1e-4,m,h.r/3);let p=c.createStereoPanner();if(p.pan.value=l,u.connect(f),d&&d.connect(f),f.connect(g).connect(p).connect(a),o){let w=c.createGain();w.gain.value=o,p.connect(w).connect(this.verbIn)}if(h.breath){let w=c.createBufferSource();w.buffer=this.noiseBuf;let x=c.createBiquadFilter();x.type="bandpass",x.frequency.value=xa(e)*2,x.Q.value=2;let M=c.createGain();M.gain.setValueAtTime(h.breath*r,n),M.gain.exponentialRampToValueAtTime(1e-4,n+.12),w.connect(x).connect(M).connect(p),w.start(n),w.stop(n+.15)}if(h.bell){let w=c.createOscillator();w.frequency.value=xa(e)*2.76;let x=c.createGain();x.gain.setValueAtTime(b*.25,n),x.gain.exponentialRampToValueAtTime(1e-4,n+.5),w.connect(x).connect(p),w.start(n),w.stop(n+.6)}let y=m+h.r*2+.05;return u.start(n),u.stop(y),d&&(d.start(n),d.stop(y)),{o:u,g}}drum(t,e,n=1,s){let r=this.ctx;if(t==="kick"){let a=r.createOscillator(),l=r.createGain();a.frequency.setValueAtTime(150,e),a.frequency.exponentialRampToValueAtTime(42,e+.12),l.gain.setValueAtTime(.55*n,e),l.gain.exponentialRampToValueAtTime(.001,e+.28),a.connect(l).connect(s),a.start(e),a.stop(e+.3)}else{let a=r.createBufferSource();a.buffer=this.noiseBuf;let l=r.createBiquadFilter(),o=r.createGain(),c={snare:["bandpass",1800,.9,.16,.32],hat:["highpass",7e3,1,.04,.12],ohat:["highpass",6500,1,.18,.1],rim:["bandpass",3200,6,.03,.22],shaker:["highpass",5e3,1,.06,.06],crash:["highpass",4e3,.7,1.1,.14],tom:["lowpass",600,1,.2,.3]}[t];if(l.type=c[0],l.frequency.value=c[1],l.Q.value=c[2],o.gain.setValueAtTime(c[4]*n,e),o.gain.exponentialRampToValueAtTime(.001,e+c[3]),a.connect(l).connect(o).connect(s),a.start(e),a.stop(e+c[3]+.02),t==="snare"||t==="tom"){let h=r.createOscillator(),u=r.createGain();h.frequency.setValueAtTime(t==="tom"?140:200,e),h.frequency.exponentialRampToValueAtTime(t==="tom"?80:150,e+.1),u.gain.setValueAtTime(.22*n,e),u.gain.exponentialRampToValueAtTime(.001,e+.12),h.connect(u).connect(s),h.start(e),h.stop(e+.14)}}}prepare(t,e=1){let n=hf[t],s=uf[(e-1)%8],r=t==="title"?0:s.tr,a=Zs(n.lead),l=Zs(n.counterLine),o=df(n.chords),c=n.beats*4;return{name:t,S:n,tr:r,tempo:n.tempo*(t==="title"?1:s.tempo),lead:a,counter:l,chords:o,bar:c,leadInst:(t==="ground"||t==="sky"||t==="cave")&&s.lead?s.lead:n.leadInst,length:a.length}}scheduleStep(t,e,n,s){let r=t.S,a=60/t.tempo/4,l=e%t.length,o=Math.floor(l/t.bar),c=l%t.bar,h=t.chords[o%t.chords.length],u=t.tr,d=c%2===1?r.swing*a:0,f=n+d;for(let M of t.lead.notes)if(M.at===l&&(this.note(t.leadInst,M.n+u,f,M.len*a*.92,1,s,.08,.32),t.leadInst!=="pad")){let S=this.ctx.createGain();S.gain.value=.5,this.note(t.leadInst,M.n+u,f,M.len*a*.92,.5,this.delay,0,0)}for(let M of t.counter.notes)M.at===l&&this.note(r.counter,M.n+u,f,M.len*a*.95,.75,s,-.3,.35);let g=Math.floor(c/4),b=c%4,m=36+((h.root+u)%12+12)%12,p=36+((h.bass+u)%12+12)%12;if(r.bass==="bass"){if(r.beats===4&&(b===0||b===2)&&!(iy(t)&&b===2&&g%2===1)){let M=[0,0,7,0,12,0,7,0],S=(g*2+b/2)%8;this.note("bass",(S===0?p:m)+M[S],f,a*1.7,t.name==="boss"?1.1:.95,s,0,.05)}}else r.bass==="softbass"&&b===0&&(g===0||r.beats===4&&g===2)&&this.note("softbass",p,f,a*(r.beats===3?10:7),1,s,0,.1);let y=h.ints.map(M=>60+((h.root+u)%12+12)%12+M-(((h.root+u)%12+12)%12>6?12:0));if(r.pad==="stab"&&b===2&&y.forEach((M,S)=>this.note("stab",M,f,a*1.2,.9,s,S%2?.35:-.35,.25)),r.pad==="pad"&&c===0&&y.forEach((M,S)=>this.note("pad",M,f,a*t.bar*.98,1,s,S%2?.4:-.4,.6)),r.pad==="organ"&&(c===0||c===8)&&y.forEach((M,S)=>this.note("organ",M-12,f,a*7.6,.8,s,S%2?.3:-.3,.5)),r.pad==="harp"&&b===0){let S=y[[0,1,2,1][g%4]%y.length];g>0&&(this.note("harp",S,f,a*4,.9,s,.25,.5),this.note("harp",S+12,f+a*2,a*3,.5,s,-.25,.5))}let w=r.drums,x=s;w==="pop"?(b===0&&(g===0||g===2)&&this.drum("kick",n,1,x),b===0&&(g===1||g===3)&&this.drum("snare",n,.9,x),b===2&&this.drum("hat",f,.8,x),c===14&&o%4===3&&this.drum("snare",n,.6,x)):w==="tick"?((c===0||c===10)&&this.drum("kick",n,.7,x),b===2&&this.drum("rim",f,.6,x)):w==="soft"?((c===0||c===10)&&this.drum("kick",n,.5,x),b===2&&this.drum("shaker",f,1,x),(c===4||c===12)&&this.drum("rim",n,.5,x)):w==="march"?(b===0&&this.drum(g%2?"snare":"kick",n,g%2?.7:1,x),(b===2||b===3)&&this.drum("snare",n,.25,x),c===0&&o%4===0&&this.drum("crash",n,.6,x)):w==="rock"&&((b===0&&g%2===0||c===10)&&this.drum("kick",n,1,x),b===0&&g%2===1&&this.drum("snare",n,1,x),this.drum("hat",n,b===0?.8:.45,x),c===0&&o%4===0&&this.drum("crash",n,.7,x))}renderSong(t,e,n){let s=this.prepare(t,e),r=this.ctx.createGain();r.connect(this.musicBus);let a=60/s.tempo/4;for(let l=0,o=.05;o<n;l++,o+=a)this.scheduleStep(s,l,o,r)}playSong(t,e=1){if(!this.ctx||this.song&&this.song.name===t&&this.song.world===e)return;this.stopSong(.25);let n=this.prepare(t,e),s=this.ctx.createGain();s.gain.value=0,s.connect(this.musicBus),s.gain.setTargetAtTime(1,this.ctx.currentTime,.08),n.out=s,n.world=e,n.step=0,n.next=this.ctx.currentTime+.08,this.song=n;let r=()=>{if(this.song!==n)return;let a=this.ctx,l=a.currentTime+.22;for(n.next<a.currentTime-.3&&(n.next=a.currentTime+.05);n.next<l;)this.scheduleStep(n,n.step,n.next,s),n.step++,n.next+=60/n.tempo/4};r(),clearInterval(this.timer),this.timer=setInterval(r,40)}stopSong(t=.2){if(this.song&&this.song.out){let e=this.song.out;e.gain.setTargetAtTime(0,this.ctx.currentTime,t/3),setTimeout(()=>e.disconnect(),t*1e3+400)}this.song=null,clearInterval(this.timer)}jingle(t,e){if(!this.ctx)return;this.stopSong(.05);let n=Nh[t],s=this.ctx,r=60/n.tempo/4,a=s.createGain();a.gain.value=1,a.connect(this.musicBus);let l=s.currentTime+.05,o=Zs(n.notes);for(let h of o.notes)this.note(n.inst,h.n,l+h.at*r,h.len*r*.9,1,a,0,.35),this.note(n.inst==="square"?"pluck":"bell",h.n+12,l+h.at*r,h.len*r*.6,.35,a,.3,.3);if(n.bass)for(let h of Zs(n.bass).notes)this.note("bass",h.n,l+h.at*r,h.len*r*.9,1,a,0,.1);let c=o.length*r;return e&&setTimeout(e,c*1e3+300),c}sfx(t,e={}){if(!this.ctx||this.ctx.state!=="running")return;let n=this.ctx,s=n.currentTime+.005,r=this.sfxBus,a=(c,h,u,d,f,g="exp")=>{let b=n.createOscillator(),m=n.createGain();b.type=c,b.frequency.setValueAtTime(h,s),g==="exp"?b.frequency.exponentialRampToValueAtTime(u,s+d):b.frequency.linearRampToValueAtTime(u,s+d),m.gain.setValueAtTime(f,s),m.gain.exponentialRampToValueAtTime(.001,s+d+.02),b.connect(m).connect(r),b.start(s),b.stop(s+d+.05)},l=(c,h,u,d,f="bandpass",g=0)=>{let b=n.createBufferSource();b.buffer=this.noiseBuf;let m=n.createBiquadFilter();m.type=f,m.frequency.value=c,m.Q.value=h;let p=n.createGain();p.gain.setValueAtTime(d,s+g),p.gain.exponentialRampToValueAtTime(.001,s+g+u),b.connect(m).connect(p).connect(r),b.start(s+g),b.stop(s+g+u+.02)},o=(c,h,u,d,f=1)=>this.note(c,h,s+u,d,f,r,0,.2);switch(t){case"jump":a("square",e.big?220:300,e.big?620:860,.16,.07),a("triangle",e.big?110:150,e.big?310:430,.16,.08);break;case"coin":o("bell",83,0,.07,1.4),o("bell",88,.07,.35,1.4);break;case"stomp":a("square",520,140,.12,.08),l(500,1,.08,.25);break;case"bump":a("triangle",220,90,.1,.25),l(300,1,.06,.2);break;case"bonk":a("triangle",180,80,.08,.2);break;case"break":l(900,.6,.35,.4),l(180,1,.25,.4,"lowpass"),a("triangle",200,50,.2,.25);break;case"sprout":for(let c=0;c<6;c++)o("pluck",60+c*3,c*.05,.08,.9);break;case"grow":case"fireUp":for(let c=0;c<9;c++)o("square",67+[0,4,7,12,4,7,12,16,19][c],c*.045,.06,.7);break;case"powerKeep":o("bell",84,0,.2),o("bell",91,.1,.3);break;case"star":o("bell",84,0,.1),o("bell",88,.08,.1),o("bell",91,.16,.1),o("bell",96,.24,.3);break;case"fire":a("sawtooth",900,200,.1,.05),l(2e3,1,.08,.15);break;case"fizz":l(3e3,1,.08,.06);break;case"kick":a("square",300,600,.06,.08),l(800,1,.08,.2);break;case"thud":l(200,1,.12,.3,"lowpass");break;case"shrink":for(let c=0;c<6;c++)o("square",79-c*3,c*.06,.07,.7);break;case"1up":this.jingleSfx("oneup");break;case"spring":a("sine",180,720,.32,.3,"lin"),a("triangle",360,1100,.32,.08,"lin");break;case"checkpoint":o("bell",79,0,.12),o("bell",84,.1,.12),o("bell",88,.2,.4);break;case"swim":l(1200,4,.12,.12),a("sine",400,900,.1,.06);break;case"land":l(400,.8,.07,Math.min(.25,.05+(e.v||10)*.008),"lowpass");break;case"cannon":a("triangle",140,40,.3,.4),l(300,.7,.3,.35,"lowpass");break;case"bossHit":a("square",300,80,.3,.15),l(600,1,.25,.35);break;case"bossRoar":case"bossStart":l(160,2,.8,.5,"lowpass"),a("sawtooth",90,55,.8,.12);break;case"bossLand":case"thump":a("sine",90,30,.35,.6),l(150,1,.3,.35,"lowpass");break;case"breath":l(1200,.7,.5,.25),a("sawtooth",200,90,.4,.05);break;case"rumble":l(100,1,.4,.3,"lowpass");break;case"bossDown":for(let c=0;c<4;c++)l(200+c*100,1,.4,.4,"lowpass",c*.18);break;case"crystal":for(let c=0;c<8;c++)o("glass",84+[0,4,7,11,12,16,19,24][c],c*.07,.3,.8);break;case"pause":o("bell",76,0,.08),o("bell",72,.08,.08);break;case"select":o("pluck",79,0,.06);break;case"ok":o("bell",84,0,.08),o("bell",91,.06,.15);break;case"summon":a("sawtooth",300,900,.4,.05);break;case"wingOff":l(3e3,1,.1,.1);break}}jingleSfx(t){let e=Nh[t],n=this.ctx,s=60/e.tempo/4,r=n.currentTime+.02;for(let a of Zs(e.notes).notes)this.note(e.inst,a.n,r+a.at*s,a.len*s*.9,1,this.sfxBus,0,.2)}};function iy(){return!1}var pf=["#4caf50","#e0a050","#2ea0d8","#2e7d4f","#8fb8e8","#9fb4ff","#4a4f9a","#d0502a"],mf={ground:"\u{1F333}",cave:"\u26CF",sky:"\u2601",water:"\u{1F30A}",castle:"\u{1F3F0}"};function gf(i){let t=document.getElementById("ui");t.innerHTML=`
  <div id="loading"><div class="bar"><i></i></div><span>\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</span></div>
  <section id="title" class="screen">
    <div class="title-bg"></div>
    <div class="logo"><div class="logo-main">\u30DB\u30C3\u30D7\u30B9\u30BF\u30FC</div><div class="logo-sub">\u2015 8\u3064\u306E\u661F\u306E\u738B\u56FD \u2015</div></div>
    <button class="big ui-btn" id="btnStart">\u306F\u3058\u3081\u308B</button>
    <div class="howto">
      <div><b>PC</b>\u3000\u79FB\u52D5 WASD/\u77E2\u5370\u3000\u30B8\u30E3\u30F3\u30D7 Space\u3000\u30C0\u30C3\u30B7\u30E5 Shift\u3000\u706B\u306E\u7389 F\u3000\u30AB\u30E1\u30E9 Q/E\u30FB\u30C9\u30E9\u30C3\u30B0\u3000\u30DD\u30FC\u30BA Esc</div>
      <div><b>\u30B9\u30DE\u30DB</b>\u3000\u5DE6\u3067\u30B9\u30C6\u30A3\u30C3\u30AF\u3000A \u30B8\u30E3\u30F3\u30D7\u3000B \u30C0\u30C3\u30B7\u30E5\u3000\u{1F525} \u706B\u306E\u7389\u3000\u53F3\u4E0A\u3092\u306A\u305E\u3063\u3066\u30AB\u30E1\u30E9</div>
    </div>
    <div class="ver">v${i.version}</div>
  </section>
  <section id="map" class="screen">
    <h2>\u30EF\u30FC\u30EB\u30C9\u3092\u9078\u3076</h2>
    <div class="worlds"></div>
    <div class="map-foot"><button class="ui-btn small" id="btnMapTitle">\u30BF\u30A4\u30C8\u30EB\u3078</button></div>
  </section>
  <section id="intro" class="screen"><div class="intro-card"><div class="intro-num"></div><div class="intro-name"></div><div class="intro-type"></div><div class="intro-lives"></div></div></section>
  <section id="hud">
    <div class="hud-l"><span class="hud-lives"></span><span class="hud-coins"></span><span class="hud-pow"></span></div>
    <div class="hud-c"><span class="hud-stage"></span></div>
    <div class="hud-r"><span class="hud-score"></span><span class="hud-time"></span></div>
    <div class="bossbar"><b>\u30DC\u30B9</b><div class="hp"><i></i></div></div>
  </section>
  <button id="btnPause" class="ui-btn">\u2161</button>
  <button id="btnMute" class="ui-btn" aria-label="\u97F3\u3092\u6D88\u3059\uFF0F\u51FA\u3059">\u266A</button>
  <section id="pause" class="screen menu">
    <h2>\u30DD\u30FC\u30BA</h2>
    <button class="ui-btn" id="btnResume">\u3064\u3065\u3051\u308B</button>
    <button class="ui-btn" id="btnRetry">\u3084\u308A\u306A\u304A\u3059\uFF08\u6B8B\u6A5F\u22121\uFF09</button>
    <button class="ui-btn" id="btnToMap">\u30EF\u30FC\u30EB\u30C9\u5730\u56F3\u3078</button>
    <div class="row"><span>\u30AB\u30E1\u30E9</span><button class="ui-btn small cam" data-cam="back">\u3046\u3057\u308D</button><button class="ui-btn small cam" data-cam="diag">\u306A\u306A\u3081</button><button class="ui-btn small cam" data-cam="side">\u3088\u3053</button></div>
    <label class="row"><span>\u97F3\u697D</span><input type="range" id="volM" min="0" max="1" step="0.05"></label>
    <label class="row"><span>\u52B9\u679C\u97F3</span><input type="range" id="volS" min="0" max="1" step="0.05"></label>
  </section>
  <section id="over" class="screen"><div class="over-t">\u30B2\u30FC\u30E0\u30AA\u30FC\u30D0\u30FC</div><div class="over-s">\u3053\u306E\u30EF\u30FC\u30EB\u30C9\u306E1\u9762\u304B\u3089\u3084\u308A\u76F4\u3057\u307E\u3059</div></section>
  <section id="ending" class="screen"><div class="end-card"><h1>\u304A\u3081\u3067\u3068\u3046\uFF01</h1><p>\u95C7\u306E\u5927\u738B\u30AC\u30ED\u30C3\u30AF\u3092\u5012\u3057\u30018\u3064\u306E\u661F\u306E\u304B\u3051\u3089\u304C\u305D\u308D\u3063\u305F\u3002<br>\u5B88\u308A\u59EB\u30EB\u30DF\u30CA\u3068\u738B\u56FD\u306B\u3001\u661F\u306E\u5149\u304C\u623B\u3063\u305F\u3002</p><p class="end-score"></p><button class="ui-btn" id="btnEnd">\u30EF\u30FC\u30EB\u30C9\u5730\u56F3\u3078</button></div></section>
  <div id="pad">
    <div id="stickZone" data-pad="stick"><div id="stickBase"><div id="knob"></div></div></div>
    <div id="camZone" data-pad="cam"><span>\u30AB\u30E1\u30E9</span></div>
    <div id="btnA" class="padbtn" data-pad="jump">A<small>\u30B8\u30E3\u30F3\u30D7</small></div>
    <div id="btnB" class="padbtn" data-pad="dash">B<small>\u30C0\u30C3\u30B7\u30E5</small></div>
    <div id="btnF" class="padbtn" data-pad="fire">\u{1F525}</div>
  </div>`;let e=y=>t.querySelector(y),n=["title","map","intro","pause","over","ending"],s=(y,w)=>e(y).addEventListener("click",x=>{x.preventDefault(),i.onFirstTouch(),w(x)});s("#btnStart",i.onStart),s("#btnMapTitle",()=>{p.show("title")}),s("#btnResume",i.onResume),s("#btnRetry",i.onRetry),s("#btnToMap",i.onMap),s("#btnEnd",i.onMap);let r=e("#btnMute"),a=y=>{r.classList.toggle("muted",y),r.textContent=y?"\u{1F507}":"\u266A",r.title=y?"\u97F3\u3092\u51FA\u3059":"\u97F3\u3092\u6D88\u3059"};a(!!i.save.mute),r.addEventListener("click",y=>{y.preventDefault(),y.stopPropagation(),i.onFirstTouch(),a(i.onMute())}),e("#btnPause").addEventListener("click",y=>{y.preventDefault(),window.dispatchEvent(new KeyboardEvent("keydown",{code:"Escape"}))});let l=e("#volM"),o=e("#volS");l.value=i.save.music,o.value=i.save.sfx;let c=()=>i.onVolume(Number(l.value),Number(o.value));l.addEventListener("input",c),o.addEventListener("input",c);let h=t.querySelectorAll(".cam"),u=()=>h.forEach(y=>y.classList.toggle("on",y.dataset.cam===i.save.cam));h.forEach(y=>y.addEventListener("click",w=>{w.preventDefault(),i.onCam(y.dataset.cam),u()})),u(),t.addEventListener("pointerdown",()=>i.onFirstTouch(),{capture:!0});let d={stickZone:e("#stickZone"),stickBase:e("#stickBase"),knob:e("#knob"),all:[e("#stickZone"),e("#camZone"),e("#btnA"),e("#btnB"),e("#btnF")]};i.isTouch&&document.body.classList.add("touch");let f="",g={lives:e(".hud-lives"),coins:e(".hud-coins"),pow:e(".hud-pow"),stage:e(".hud-stage"),score:e(".hud-score"),time:e(".hud-time")},b={},m=(y,w)=>{b[y]!==w&&(b[y]=w,g[y].innerHTML=w)},p={pad:d,show(y){f=y;for(let x of n)e("#"+x).classList.toggle("on",x===y);let w=y==="play"||y==="pause"||y==="intro";e("#hud").classList.toggle("on",w),e("#btnPause").classList.toggle("on",y==="play"),e("#pad").classList.toggle("on",y==="play"),y!=="play"&&e(".bossbar").classList.remove("on")},renderMap(y){let w=e(".worlds");w.innerHTML="",ma.forEach((x,M)=>{let S=document.createElement("div");S.className="wcard",S.style.setProperty("--wc",pf[M]);let C=y.crystals.includes(M+1)?'<span class="crys">\u25C6</span>':"";S.innerHTML=`<div class="wname"><b>\u30EF\u30FC\u30EB\u30C9${M+1}</b> ${x.name} ${C}</div><div class="stages"></div>`,x.stages.forEach((v,T)=>{let R=M*4+T+1,L=R<=y.unlocked,U=document.createElement("button");U.className="ui-btn sbtn"+(L?"":" locked");let k=y.best[`${M+1}-${T+1}`];U.innerHTML=`<span class="sn">${M+1}-${T+1}</span><span class="st">${mf[v]} ${Ol[v]}</span>${k?`<span class="sb">${k}</span>`:""}`,L?U.addEventListener("click",N=>{N.preventDefault(),i.onFirstTouch(),i.onPick(M+1,T+1)}):U.disabled=!0,S.querySelector(".stages").appendChild(U)}),w.appendChild(S)})},intro(y,w,x){e(".intro-num").textContent=`${y.world}-${y.stage}`,e(".intro-name").textContent=y.name,e(".intro-type").textContent=`${mf[y.type]} ${x}`,e(".intro-lives").innerHTML=`<span class="hop"></span> \xD7 ${w}`,e("#intro").style.setProperty("--wc",pf[y.world-1])},hud(y,w,x,M){m("lives",`<i class="hop"></i>\xD7${y.lives}`),m("coins",`<i class="coin"></i>\xD7${String(y.coins).padStart(2,"0")}`),m("pow",w.p.star>0?'<i class="pw star">\u2605</i>':w.p.power===2?'<i class="pw fire">\u{1F525}</i>':w.p.power===1?'<i class="pw heart">\u2665</i>':""),m("stage",`${x}-${M}`),m("score",String(y.score).padStart(7,"0")),m("time",`\u23F1${Math.max(0,Math.ceil(w.time))}`),e("#btnF").classList.toggle("on",w.p.power===2)},bossBar(y,w){let x=e(".bossbar");x.classList.toggle("on",!!y),w&&(x.querySelector("i").style.width=Math.max(0,w.hp/w.maxhp*100)+"%")},ending(y){e(".end-score").textContent=`\u30B9\u30B3\u30A2 ${y}`},loading(y){let w=e("#loading"),x=y.pending===0;w.classList.toggle("on",!x),x||(w.querySelector("i").style.width=(1-y.pending/Math.max(1,y.total))*100+"%")},padVisual(y){e("#btnA").classList.toggle("down",y.jump!==null),e("#btnB").classList.toggle("down",y.dash!==null),e("#btnF").classList.toggle("down",y.fire!==null),y.stick||(d.knob.style.transform="",d.stickBase.style.left="",d.stickBase.style.top=""),e("#stickZone").classList.toggle("active",!!y.stick)}};return p}var xf=`:root { --ink: #1d1a2e; --gold: #ffd23f; --cream: #fff8e6; --font: 'M PLUS Rounded 1c', 'Hiragino Maru Gothic ProN', 'Yu Gothic UI', 'Meiryo', system-ui, sans-serif; }\r
* { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }\r
html, body { margin: 0; height: 100%; overflow: hidden; background: #0b1020; color: var(--cream); font-family: var(--font); user-select: none; -webkit-user-select: none; touch-action: none; overscroll-behavior: none; }\r
#app { position: fixed; inset: 0; }\r
#app canvas { display: block; width: 100%; height: 100%; }\r
#ui { position: absolute; inset: 0; pointer-events: none; }\r
.screen { position: absolute; inset: 0; display: none; pointer-events: auto; }\r
.screen.on { display: flex; }\r
.ui-btn { font-family: var(--font); font-weight: 800; font-size: 18px; color: var(--ink); background: linear-gradient(#fff6d0, #ffd23f); border: 3px solid #2a2140; border-radius: 16px; padding: 10px 22px; box-shadow: 0 5px 0 #2a2140, 0 8px 18px rgba(0,0,0,.35); cursor: pointer; pointer-events: auto; transition: transform .08s; }\r
.ui-btn:active { transform: translateY(3px); box-shadow: 0 2px 0 #2a2140; }\r
.ui-btn.small { font-size: 14px; padding: 6px 12px; border-radius: 12px; }\r
.ui-btn.big { font-size: 26px; padding: 14px 48px; border-radius: 22px; }\r
\r
/* \u8AAD\u307F\u8FBC\u307F */\r
#loading { position: absolute; left: 50%; bottom: 18px; transform: translateX(-50%); display: none; gap: 10px; align-items: center; background: rgba(0,0,0,.55); padding: 6px 14px; border-radius: 20px; font-size: 13px; z-index: 50; }\r
#loading.on { display: flex; }\r
#loading .bar { width: 120px; height: 8px; background: #333; border-radius: 4px; overflow: hidden; }\r
#loading .bar i { display: block; height: 100%; background: var(--gold); width: 0; }\r
\r
/* \u30BF\u30A4\u30C8\u30EB */\r
#title { isolation: isolate; flex-direction: column; align-items: center; justify-content: center; gap: 22px; text-align: center; }\r
.title-bg { position: absolute; inset: 0; background: url(tex/title_bg.jpg) center/cover; z-index: -1; animation: drift 40s ease-in-out infinite alternate; }\r
.title-bg::after { content: ''; position: absolute; inset: 0; background: linear-gradient(transparent 40%, rgba(10,20,50,.55)); }\r
@keyframes drift { from { transform: scale(1.05) translateX(-1.5%); } to { transform: scale(1.12) translateX(1.5%); } }\r
.logo { animation: bob 3s ease-in-out infinite; }\r
@keyframes bob { 50% { transform: translateY(-8px); } }\r
.logo-main { font-size: clamp(48px, 13vw, 112px); font-weight: 900; letter-spacing: .04em; color: #fff; -webkit-text-stroke: 3px #2a2140; background: linear-gradient(#fff 30%, #ffe680 60%, #ffb02e); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(0 6px 0 #2a2140) drop-shadow(0 0 18px rgba(255,190,60,.7)); padding: 0 .1em; }\r
.logo-sub { font-size: clamp(18px, 4.5vw, 30px); font-weight: 800; color: #fff; text-shadow: 0 3px 0 #2a2140, 0 0 12px #2a2140; margin-top: 4px; }\r
.howto { font-size: 13px; background: rgba(20,20,40,.6); padding: 10px 14px; border-radius: 14px; line-height: 1.8; max-width: min(92vw, 720px); }\r
.howto b { color: var(--gold); }\r
.ver { position: absolute; right: 10px; bottom: 6px; font-size: 11px; opacity: .6; }\r
\r
/* \u30EF\u30FC\u30EB\u30C9\u5730\u56F3 */\r
#map { flex-direction: column; align-items: center; padding: 14px 16px 18px; overflow-y: auto; background: linear-gradient(rgba(10,20,50,.45), rgba(10,20,50,.8)), url(tex/title_bg.jpg) center/cover; touch-action: pan-y; }\r
#map h2 { margin: 4px 0 12px; font-size: 26px; text-shadow: 0 3px 0 #2a2140; }\r
.worlds { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 12px; width: min(1100px, 100%); }\r
.wcard { background: linear-gradient(135deg, var(--wc), rgba(0,0,0,.35)); border: 3px solid #2a2140; border-radius: 18px; padding: 10px; box-shadow: 0 6px 0 #2a2140; }\r
.wname { font-weight: 800; margin-bottom: 8px; text-shadow: 0 2px 0 #2a2140; }\r
.crys { color: #fff36a; text-shadow: 0 0 8px #ffd23f; }\r
.stages { display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; }\r
.sbtn { padding: 6px 2px; display: flex; flex-direction: column; align-items: center; font-size: 12px; border-radius: 12px; }\r
.sbtn .sn { font-size: 18px; }\r
.sbtn .sb { font-size: 10px; opacity: .7; }\r
.sbtn.locked { background: #6d6a7a; color: #c8c4d4; box-shadow: 0 3px 0 #2a2140; }\r
.map-foot { margin-top: 14px; }\r
\r
/* \u9762\u306E\u59CB\u307E\u308A */\r
#intro { align-items: center; justify-content: center; background: radial-gradient(circle, rgba(0,0,0,.2), rgba(0,0,0,.85)); }\r
.intro-card { text-align: center; animation: pop .5s cubic-bezier(.2,1.6,.4,1); }\r
@keyframes pop { from { transform: scale(.4); opacity: 0; } }\r
.intro-num { font-size: 84px; font-weight: 900; color: #fff; text-shadow: 0 6px 0 var(--wc, #4caf50), 0 10px 0 #2a2140; }\r
.intro-name { font-size: 30px; font-weight: 800; }\r
.intro-type { font-size: 20px; margin: 6px 0 14px; opacity: .9; }\r
.intro-lives { font-size: 26px; font-weight: 800; }\r
.hop, i.hop { display: inline-block; width: 26px; height: 26px; border-radius: 50%; background: radial-gradient(circle at 50% 70%, #ffd6b0 45%, transparent 46%), radial-gradient(circle at 50% 35%, #2b7be0 55%, transparent 56%); vertical-align: middle; border: 2px solid #2a2140; }\r
\r
/* HUD */\r
#hud { position: absolute; left: 0; right: 0; top: 0; display: none; justify-content: space-between; align-items: flex-start; padding: calc(8px + env(safe-area-inset-top)) 14px 0; font-weight: 900; font-size: 20px; text-shadow: 0 2px 0 #2a2140, 0 0 6px rgba(0,0,0,.6); pointer-events: none; }\r
#hud.on { display: flex; }\r
#hud span { margin-right: 14px; white-space: nowrap; }\r
.hud-l, .hud-r { display: flex; align-items: center; flex-wrap: wrap; }\r
.hud-r { justify-content: flex-end; }\r
i.coin { display: inline-block; width: 18px; height: 18px; border-radius: 50%; background: radial-gradient(circle at 40% 35%, #fff4a0, #ffc232 50%, #b07800); border: 2px solid #2a2140; vertical-align: -2px; margin-right: 2px; }\r
.pw { font-style: normal; padding: 0 6px; border-radius: 10px; background: rgba(0,0,0,.35); }\r
.pw.heart { color: #ff6b9a; } .pw.star { color: #ffe14a; }\r
.hud-c { position: absolute; left: 50%; transform: translateX(-50%); top: calc(8px + env(safe-area-inset-top)); }\r
.bossbar { position: absolute; left: 50%; transform: translateX(-50%); top: calc(40px + env(safe-area-inset-top)); display: none; align-items: center; gap: 8px; font-size: 14px; }\r
.bossbar.on { display: flex; }\r
.bossbar .hp { width: min(50vw, 260px); height: 12px; border: 2px solid #2a2140; border-radius: 8px; background: #3a1520; overflow: hidden; }\r
.bossbar .hp i { display: block; height: 100%; background: linear-gradient(#ff8a6a, #e0302a); transition: width .3s; }\r
#btnPause { position: absolute; top: calc(48px + env(safe-area-inset-top)); right: 12px; display: none; width: 44px; height: 44px; padding: 0; font-size: 16px; border-radius: 50%; z-index: 20; }\r
#btnPause.on { display: block; }\r
#btnMute { position: absolute; top: calc(48px + env(safe-area-inset-top)); right: 64px; width: 44px; height: 44px; padding: 0; font-size: 18px; border-radius: 50%; z-index: 21; }\r
#btnMute.muted { background: linear-gradient(#ddd, #999); }\r
\r
/* \u30DD\u30FC\u30BA */\r
.menu { flex-direction: column; align-items: center; justify-content: center; gap: 12px; background: rgba(10,10,30,.7); backdrop-filter: blur(3px); }\r
.menu h2 { margin: 0 0 6px; font-size: 32px; text-shadow: 0 3px 0 #2a2140; }\r
.menu .row { display: flex; align-items: center; gap: 8px; font-weight: 800; }\r
.menu .row > span { width: 64px; }\r
.menu input[type=range] { width: 180px; accent-color: var(--gold); }\r
.cam.on { background: linear-gradient(#bff0ff, #4cc4ff); }\r
\r
#over { align-items: center; justify-content: center; flex-direction: column; background: rgba(0,0,0,.8); }\r
.over-t { font-size: 54px; font-weight: 900; color: #ff6b6b; text-shadow: 0 5px 0 #2a2140; }\r
#ending { align-items: center; justify-content: center; background: radial-gradient(circle, rgba(255,220,120,.35), rgba(10,10,40,.9)); }\r
.end-card { text-align: center; padding: 20px; max-width: 560px; }\r
.end-card h1 { font-size: 52px; margin: 0 0 10px; color: var(--gold); text-shadow: 0 5px 0 #2a2140; }\r
.end-card p { font-size: 18px; line-height: 1.8; }\r
\r
/* \u30BF\u30C3\u30C1\u64CD\u4F5C */\r
#pad { position: absolute; inset: 0; display: none; pointer-events: none; }\r
body.touch #pad.on { display: block; }\r
#stickZone { position: absolute; left: 0; bottom: 0; width: 50%; height: 46%; pointer-events: auto; touch-action: none; }\r
#stickBase { position: absolute; left: 90px; top: calc(100% - 110px); width: 120px; height: 120px; margin: -60px 0 0 -60px; border-radius: 50%; background: radial-gradient(rgba(255,255,255,.18), rgba(255,255,255,.06)); border: 3px solid rgba(255,255,255,.45); }\r
#knob { position: absolute; left: 50%; top: 50%; width: 56px; height: 56px; margin: -28px 0 0 -28px; border-radius: 50%; background: radial-gradient(circle at 40% 35%, #fff, #c8d4ff); box-shadow: 0 3px 8px rgba(0,0,0,.4); }\r
#stickZone.active #stickBase { border-color: rgba(255,230,120,.8); }\r
#camZone { position: absolute; right: 0; top: 18%; width: 50%; height: 34%; pointer-events: auto; touch-action: none; display: flex; align-items: flex-start; justify-content: flex-end; padding: 6px 14px; }\r
#camZone span { font-size: 11px; opacity: .35; }\r
.padbtn { position: absolute; width: 78px; height: 78px; border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; font-weight: 900; font-size: 28px; color: #2a2140; border: 3px solid #2a2140; box-shadow: 0 5px 0 #2a2140; pointer-events: auto; touch-action: none; }\r
.padbtn small { font-size: 10px; margin-top: -2px; }\r
.padbtn.down { transform: translateY(3px); box-shadow: 0 2px 0 #2a2140; filter: brightness(1.15); }\r
#btnA { right: calc(18px + env(safe-area-inset-right)); bottom: calc(70px + env(safe-area-inset-bottom)); background: radial-gradient(circle at 40% 35%, #ffe7a0, #ffb52e); width: 92px; height: 92px; }\r
#btnB { right: calc(124px + env(safe-area-inset-right)); bottom: calc(26px + env(safe-area-inset-bottom)); background: radial-gradient(circle at 40% 35%, #c9f0ff, #4cb8f0); }\r
#btnF { right: calc(116px + env(safe-area-inset-right)); bottom: calc(124px + env(safe-area-inset-bottom)); width: 60px; height: 60px; font-size: 24px; background: radial-gradient(circle at 40% 35%, #ffd0b0, #ff6a3a); opacity: .35; }\r
#btnF.on { opacity: 1; }\r
@media (orientation: landscape) and (max-height: 520px) {\r
  #hud { font-size: 16px; }\r
  #stickZone { width: 40%; height: 70%; }\r
  #camZone { top: 14%; height: 30%; width: 40%; }\r
  #btnA { bottom: calc(40px + env(safe-area-inset-bottom)); }\r
  #btnB { bottom: calc(14px + env(safe-area-inset-bottom)); right: calc(122px + env(safe-area-inset-right)); }\r
  #btnF { bottom: calc(100px + env(safe-area-inset-bottom)); }\r
  .intro-num { font-size: 60px; }\r
  .howto { font-size: 11px; }\r
  #title { gap: 10px; }\r
}\r
@media (max-width: 420px) {\r
  #hud { font-size: 16px; padding-left: 8px; padding-right: 8px; }\r
  #hud span { margin-right: 8px; }\r
  .worlds { grid-template-columns: 1fr; }\r
}\r
`;var ry="1.0.2";document.head.insertAdjacentHTML("beforeend",`<style>${xf}</style>`);var Sf="hopstar-save-v1";function ay(){try{let i=JSON.parse(localStorage.getItem(Sf));if(i&&i.v===1)return i}catch{}return{v:1,unlocked:1,best:{},music:.7,sfx:.8,cam:"back",crystals:[],mute:!1}}var Ae=ay();function Zl(){try{localStorage.setItem(Sf,JSON.stringify(Ae))}catch{}}var wf=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,Fh=new URLSearchParams(location.search).get("q"),ya=Fh==="low"?!0:Fh==="high"?!1:wf||Math.min(screen.width,screen.height)<700,ba={lights:!ya,bloom:!ya,shadow:ya?1024:2048,dpr:Math.min(devicePixelRatio||1,ya?1.5:2)},Ef=document.getElementById("app"),_n=new Al({antialias:!ya,powerPreference:"high-performance"});_n.setPixelRatio(ba.dpr);_n.outputColorSpace=ze;_n.toneMapping=Yi;_n.toneMappingExposure=1.05;_n.shadowMap.enabled=!0;_n.shadowMap.type=Wi;Ef.prepend(_n.domElement);Qd(Math.min(8,_n.capabilities.getMaxAnisotropy()));var dn=new Oi,On=new We(55,1,.1,600),va=new Vr(13625087,6969920,1.1);dn.add(va);var En=new Xr(16774108,2.4);En.castShadow=!0;En.shadow.mapSize.set(ba.shadow,ba.shadow);var $s=En.shadow.camera;$s.left=-22;$s.right=22;$s.top=22;$s.bottom=-22;$s.near=1;$s.far=120;En.shadow.bias=-4e-4;En.shadow.normalBias=.03;dn.add(En);dn.add(En.target);var oy=new Gs(_n),Uh=null,Ri=null,Jl=null;ba.bloom&&(Ri=new Dl(_n),Ri.addPass(new Ll(dn,On)),Jl=new Ws(new rt(256,256),.35,.5,.88),Ri.addPass(Jl),Ri.addPass(new Nl));function Tf(){let i=innerWidth,t=innerHeight;_n.setSize(i,t),On.aspect=i/t,On.fov=i<t?68:55,On.updateProjectionMatrix(),Ri&&Ri.setSize(i,t)}addEventListener("resize",Tf);Tf();var St=new _a;St.musicVol=Ae.music;St.sfxVol=Ae.sfx;St.muted=!!Ae.mute;var Te=new Yl(Ef),Re=new ql(dn),Ke=nf();dn.add(Ke.root);dn.add(Ke.shadow);var je=gf({save:Ae,onStart:()=>yf(),onPick:(i,t)=>$l(i,t,!0),onResume:()=>Js(!1),onRetry:()=>{Js(!1),Cf(!0)},onMap:()=>{Js(!1),yf()},onVolume:(i,t)=>{Ae.music=i,Ae.sfx=t,Zl(),St.setVolumes(i,t)},onCam:i=>{Ae.cam=i,Zl()},onMute:()=>(Ae.mute=!Ae.mute,Zl(),St.setMuted(Ae.mute),Ae.mute),onFirstTouch:()=>Oh(),version:ry,isTouch:wf});Te.bindTouch(je.pad);Te.onTouchVisual=()=>je.padVisual(Te.touch);var I={mode:"title",world:1,stage:1,L:null,sim:null,view:null,terrain:null,session:{lives:Fl,coins:0,score:0},power:0,atCp:!1,acc:0,t:0,modeT:0,camYaw:0,camUser:0,camLastInput:0,camPos:new P,camLook:new P,camY:0,shake:0,paused:!1,skyTex:null,envTex:null};window.__hopstar=I;window.__scene=dn;window.__hopstarAudioObj=St;function Oh(){if(!St.ctx)try{St.init(),St.setVolumes(Ae.music,Ae.sfx)}catch(i){console.warn(i)}St.resume(),I.mode==="title"&&St.ctx&&!St.song&&St.playSong("title")}addEventListener("pointerdown",Oh,{capture:!0});addEventListener("keydown",Oh,{capture:!0});var _f=new Map;function zh(i,t,e){let n=_f.get(i);n||(n=$e("sky_"+i,{clamp:!0}),n.mapping=Us,_f.set(i,n)),dn.background=n,!Uh&&Fh!=="noenv"&&(Uh=oy.fromScene(new Ul,.04).texture),dn.environment=Uh,dn.environmentIntensity=e==="cave"||e==="castle"?.12:.22;let s=new It(t.fog),r=e==="water"?8:e==="cave"||e==="castle"?25:45,a=e==="water"?70:e==="cave"||e==="castle"?90:170;dn.fog=new mr(s,r,a),va.color.set(t.amb),va.groundColor.set(e==="water"?1060954:5917240),va.intensity=e==="cave"?.9:e==="castle"?.8:e==="water"?1.2:1.15,En.color.set(t.sun),En.intensity=e==="cave"?1.2:e==="castle"?1.3:e==="water"?1.6:t===wn.night?1.4:2.5;let l=i==="snow"||i==="cloud";_n.toneMappingExposure=l?.62:i==="sea"&&e==="ground"?.78:i==="desert"?.92:1.05,l&&(En.intensity=1.9,va.intensity=.75),Jl&&(Jl.threshold=l?.98:.88)}function yf(){Af(),St.setMusicHold(!1),I.mode="map",je.show("map"),je.renderMap(Ae),St.playSong("title"),zh("grass",wn.grass,"ground")}function Af(){I.view&&(I.view.dispose(),I.view=null),Re.clear(),I.sim=null}function $l(i,t,e){e&&(I.session={lives:Fl,coins:0,score:0},I.power=0,I.atCp=!1),I.world=i,I.stage=t,Af(),I.L=$d(i,t),I.terrain=new ga(I.L),I.view=new Xl(dn,I.L,ba);let n=wn[I.L.theme],s=I.L.type==="cave"?"cave":I.L.type==="castle"?"castle":I.L.type==="water"?"water":n.sky;zh(s,I.L.type==="water"?{...n,fog:1929134,amb:10475775}:I.L.type==="cave"?{...n,fog:1314846,amb:8943800}:I.L.type==="castle"?{...n,fog:2755600,amb:12615792,sun:16756880}:n,I.L.type),ly(),I.mode="intro",I.modeT=0,je.show("intro"),je.intro(I.L,I.session.lives,Ol[I.L.type]),St.stopSong(.2),St.ctx&&St.jingle("start"),py()}function ly(){I.sim=new Bl(I.L,{terrain:I.terrain,stats:I.session,atCheckpoint:I.atCp,power:I.power}),Ke.setPower(I.power),I.acc=0}function vf(){let i=I.L.type;return I.sim&&I.sim.s.p.star>0?"star":I.sim&&I.sim.s.boss&&I.sim.s.boss.state!=="sleep"&&I.sim.s.boss.state!=="dead"?"boss":i==="cave"?"cave":i==="sky"?"sky":i==="water"?"water":i==="castle"?"castle":"ground"}function Cf(i){if(I.session.lives--,I.power=0,I.sim&&I.sim.s.cp&&(I.atCp=!0),I.session.lives<=0){I.mode="over",I.modeT=0,je.show("over"),St.jingle("over"),I.session.lives=Fl,I.session.score=0,I.atCp=!1,I.overNext={w:I.world,s:1};return}$l(I.world,I.stage,!1)}function cy(){let i=`${I.world}-${I.stage}`,t=(I.world-1)*4+I.stage;if(Ae.best[i]=Math.max(Ae.best[i]||0,I.session.score),I.stage===4&&!Ae.crystals.includes(I.world)&&Ae.crystals.push(I.world),Ae.unlocked<Math.min(32,t+1)&&(Ae.unlocked=Math.min(32,t+1)),Zl(),I.power=I.sim.s.p.power,I.atCp=!1,I.world===8&&I.stage===4){I.mode="ending",I.modeT=0,je.show("ending"),je.ending(I.session.score),St.jingle("ending");return}let e=I.world,n=I.stage+1;n>4&&(e++,n=1),I.mode="between",I.modeT=0,I.next={w:e,s:n}}function Js(i){!["play","pause"].includes(I.mode)&&i||(I.paused=i,I.mode=i?"pause":"play",je.show(i?"pause":"play"),i&&(St.sfx("pause"),Te.releaseAll()),St.setMusicHold(i))}document.addEventListener("visibilitychange",()=>{document.hidden?(I.mode==="play"&&Js(!0),St.suspend()):St.resume()});addEventListener("pagehide",()=>St.suspend());function hy(i){let t=i.s.p;for(let e of i.events)switch(e.type){case"jump":St.sfx("jump",e);break;case"coin":St.sfx("coin"),Re.burst("spark",e.x,e.y,e.z,4,{size:.5,speed:1.5,life:.4,color:16773280});break;case"blockCoin":Re.coinPop(e.x,e.y+.5,e.z,Wl());break;case"stomp":St.sfx("stomp"),Re.burst("smoke",e.x,e.y,e.z,6,{size:.7,speed:2.5,up:.5,life:.4,grow:2}),Re.burst("spark",e.x,e.y+.4,e.z,4,{size:.6,speed:3,life:.35}),I.shake=.08;break;case"bump":St.sfx("bump");break;case"bonk":St.sfx("bonk");break;case"break":St.sfx("break"),Re.bricks(e.i,e.j,e.k),I.shake=.12;break;case"sprout":St.sfx("sprout");break;case"grow":St.sfx("grow"),Ke.setPower(1),Re.burst("spark",t.x,t.y+1,t.z,10,{size:.6,speed:3,life:.6});break;case"fireUp":St.sfx("fireUp"),Ke.setPower(2),Re.burst("fire",t.x,t.y+1,t.z,10,{size:.8,speed:3,life:.6});break;case"powerKeep":St.sfx("powerKeep");break;case"star":St.sfx("star");break;case"shrink":St.sfx("shrink"),Ke.setPower(e.power),Re.burst("smoke",t.x,t.y+.6,t.z,8,{size:.9,speed:2,life:.5,grow:2}),I.shake=.15;break;case"fire":St.sfx("fire");break;case"fizz":St.sfx("fizz"),Re.burst("smoke",e.x,e.y,e.z,3,{size:.4,speed:1,life:.3,grow:2});break;case"kick":St.sfx("kick");break;case"thud":St.sfx("thud");break;case"kill":(e.how==="fire"||e.how==="shell"||e.how==="star"||e.how==="bump")&&(St.sfx("stomp"),Re.burst("spark",e.x,e.y+.5,e.z,6,{size:.6,speed:3,life:.4,color:16769152}));break;case"score":Re.text(String(e.n),e.x,e.y,e.z,e.n>=1e3?"#ffe46a":"#ffffff");break;case"1up":St.sfx("1up"),Re.text("1UP",e.x??t.x,(e.y??t.y)+1,e.z??t.z,"#7dff8a");break;case"spring":St.sfx("spring");break;case"checkpoint":St.sfx("checkpoint"),Re.burst("spark",I.L.checkpoint.x,I.L.checkpoint.y+2.6,-I.L.hw+.6,12,{size:.6,speed:3,life:.7});break;case"swim":St.sfx("swim"),Re.burst("bubble",t.x,t.y+t.h,t.z,3,{size:.25,speed:.6,up:2,life:1,g:-1});break;case"land":St.sfx("land",e),Re.burst("smoke",e.x,e.y+.05,e.z,Math.min(10,3+Math.floor(e.v/4)),{size:.5,speed:2.2,up:.4,life:.45,grow:2.2});break;case"cannon":St.sfx("cannon"),Re.burst("smoke",e.x,e.y,e.z,6,{size:.9,speed:1.5,life:.6,grow:2});break;case"rumble":St.sfx("rumble");break;case"thump":St.sfx("thump"),I.shake=.25,Re.burst("smoke",e.x,e.y+.1,e.z,10,{size:1,speed:3,up:.6,life:.6,grow:2});break;case"bossStart":St.sfx("bossStart"),je.bossBar(!0,i.s.boss),I.shake=.3;break;case"bossHit":St.sfx("bossHit"),I.shake=.2,Re.burst("spark",i.s.boss.x,i.s.boss.y+i.s.boss.h,i.s.boss.z,10,{size:.9,speed:4,life:.5});break;case"bossLand":St.sfx("bossLand"),I.shake=.35,Re.burst("smoke",e.x,e.y+.1,e.z,14,{size:1.4,speed:4,up:.5,life:.7,grow:2});break;case"bossRoar":St.sfx("bossRoar");break;case"breath":St.sfx("breath");break;case"summon":St.sfx("summon");break;case"bossDown":St.sfx("bossDown"),I.shake=.5,St.stopSong(.5),Re.burst("smoke",e.x,e.y+1,e.z,20,{size:1.6,speed:4,life:1,grow:2});break;case"crystal":St.sfx("crystal"),je.bossBar(!1);break;case"wingOff":St.sfx("wingOff");break;case"starEnd":break;case"die":St.jingle("die"),I.mode="dying",I.modeT=0,I.shake=.2;break;case"goal":e.crystal?St.jingle("castleClear"):St.jingle("clear"),Re.burst("spark",t.x,t.y+1.5,t.z,24,{size:.8,speed:5,life:1,color:16769136});break;case"clear":cy();break}i.events.length=0}var uy={back:0,diag:-.6,side:-Math.PI/2};function Kl(){return I.camYawBase=uy[Ae.cam]??0,I.camYawBase}function dy(i,t,e,n){let s={x0:t-.05,x1:t+.05,y0:e-30,y1:e+.1,z0:n-.05,z1:n+.05},r=-1/0;for(let a of i.colliders(s,"probe"))!a.wall&&!a.gate&&!a.hiddenOnly&&a.x0<=t&&t<=a.x1&&a.z0<=n&&n<=a.z1&&a.y1<=e+.1&&a.y1>r&&(r=a.y1);return r}function bf(i,t,e,n){let s={x0:t-.05,x1:t+.05,y0:e+.5,y1:e+12,z0:n-.05,z1:n+.05},r=1/0;for(let a of i.colliders(s,"probe"))!a.wall&&!a.gate&&!a.oneway&&!a.hiddenOnly&&!a.block&&a.x0<=t&&t<=a.x1&&a.z0<=n&&n<=a.z1&&a.y0>=e+.5&&a.y0<r&&(r=a.y0);return r}function Rf(i){let t=I.sim.s,e=t.p;(e.onGround||e.swim||e.y<I.camY-1||e.y>I.camY+5)&&(I.camY+=(e.y-I.camY)*Math.min(1,i*(e.onGround?4:2.5)));let n=t.boss&&t.boss.state!=="sleep"&&t.boss.state!=="dead",s=Kl()+I.camUser,r=Math.cos(s),a=Math.sin(s),l=I.L.type==="water"?12.5:12,o=6.8;n&&(l=14,o=7.5),fy()&&(l+=2.5,o+=1.2);let c=bf(I.sim,e.x,e.y,e.z);c<e.y+o+1&&(o=Math.max(2.2,c-e.y-1),l=Math.min(l,8.5));let h=Ae.cam==="side"?2.5:3.5,u=e.x+Math.cos(Kl())*h*0+r*h,d=e.z*.6+a*h,f=I.camY+1.2,g=d-a*l,b=u-r*l,m=f+o;if(I.L.type==="cave"||I.L.type==="castle"){g=Math.max(-I.L.hw+.6,Math.min(I.L.hw-.6,g)),I.sim.s.gate&&I.L.boss&&(b=Math.max(b,I.L.boss.x0+.6));let p=bf(I.sim,b,e.y-.5,g);m>p-.7&&(m=p-.7)}return{pos:new P(b,m,g),look:new P(u,f,d)}}function fy(){return innerHeight>innerWidth}function py(){if(!I.sim)return;I.camY=I.sim.s.p.y,I.camUser=0;let i=Rf(1);I.camPos.copy(i.pos),I.camLook.copy(i.look)}var Mf=performance.now();function Pf(i){requestAnimationFrame(Pf);let t=Math.min(.1,(i-Mf)/1e3);Mf=i,I.t+=t,I.modeT+=t;let e=Te.poll();if(window.__hopstarController&&I.sim&&I.mode==="play"&&window.__hopstarController(e,Te,I),Te.pausePressed&&(Te.pausePressed=!1,I.mode==="play"?Js(!0):I.mode==="pause"&&Js(!1)),je.loading(tf()),I.mode==="intro"&&I.modeT>2.2&&(I.mode="play",je.show("play"),St.playSong(vf(),I.world)),I.mode==="between"&&I.modeT>.8&&$l(I.next.w,I.next.s,!1),I.mode==="dying"&&I.modeT>2.6&&Cf(),I.mode==="over"&&I.modeT>4.5&&(Te.anyPress||I.modeT>8)){Te.anyPress=!1;let n=I.overNext;$l(n.w,n.s,!1)}if(I.sim&&(I.mode==="play"||I.mode==="dying")){Te.cam&&(I.camUser+=Te.cam*t*1.8,I.camLastInput=I.t),Te.camDrag&&(I.camUser+=Te.camDrag,Te.camDrag=0,I.camLastInput=I.t),I.camUser=Math.max(-1.3,Math.min(1.3,I.camUser));let n=I.sim.s.p;I.t-I.camLastInput>2.5&&Math.hypot(n.vx,n.vz)>1&&(I.camUser*=Math.exp(-t*.8));let s=Kl()+I.camUser,r=Te.screen.x,a=Te.screen.y;if(e.mx=Math.cos(s)*a-Math.sin(s)*r,e.mz=Math.sin(s)*a+Math.cos(s)*r,Te.firePower=n.power===2,I.mode==="play"){I.acc+=t;let l=0;for(;I.acc>=pa&&l<8;){if(window.__hopstarController&&l>0){window.__hopstarController(e,Te,I);let o=Kl()+I.camUser;e.mx=Math.cos(o)*Te.screen.y-Math.sin(o)*Te.screen.x,e.mz=Math.sin(o)*Te.screen.y+Math.cos(o)*Te.screen.x}if(I.sim.step(e),I.acc-=pa,l++,hy(I.sim),I.mode!=="play")break}l>=8&&(I.acc=0),I.mode==="play"&&I.sim.s.state==="play"&&St.playSong(vf(),I.world)}}if(I.sim&&I.view){let n=I.sim.s,s=n.p;if(I.view.sync(I.sim,I.t,t),Ke.update(s,t,I.t),Ke.root.position.set(s.x,s.y,s.z),I.mode==="dying"){let o=Math.max(0,I.modeT-.4);s.dead!=="fall"&&s.dead!=="lava"&&(Ke.root.position.y=s.y+Math.max(-20,9*o-16*o*o),Ke.root.rotation.x=Math.min(Math.PI,o*4))}else Ke.root.rotation.x=0;n.state==="goal"&&I.L.goal&&!I.L.goal.boss&&s.x>I.L.goal.x+8&&(Ke.root.visible=!1);let r=dy(I.sim,s.x,s.y+.05,s.z);if(Ke.shadow.visible=r>-1e3&&I.mode!=="dying",Ke.shadow.visible){Ke.shadow.position.set(s.x,r+.03,s.z);let o=Math.max(.3,1-(s.y-r)/10);Ke.shadow.scale.setScalar((s.power?1.3:1)*o),Ke.shadow.material.opacity=.7*o}let a=Rf(t),l=1-Math.exp(-t*7);I.camPos.lerp(a.pos,l),I.camLook.lerp(a.look,1-Math.exp(-t*10)),On.position.copy(I.camPos),I.shake>0&&(On.position.x+=(Math.random()-.5)*I.shake,On.position.y+=(Math.random()-.5)*I.shake,I.shake=Math.max(0,I.shake-t*1.5)),On.lookAt(I.camLook),En.position.set(s.x-14,s.y+30,s.z+12),En.target.position.set(s.x+4,s.y,s.z),je.hud(I.session,n,I.world,I.stage,Te.isTouch),n.boss&&n.boss.state!=="sleep"&&je.bossBar(n.boss.state!=="dead"||!n.crystal,n.boss)}else On.position.set(Math.cos(I.t*.05)*30,8,Math.sin(I.t*.05)*30),On.lookAt(0,4,0);Re.update(t),Ri&&I.mode!=="title"&&I.mode!=="map"?Ri.render():_n.render(dn,On)}zh("grass",wn.grass,"ground");je.show("title");requestAnimationFrame(Pf);window.__hopstarAudioTest=async(i,t=1,e=10)=>{let s=new OfflineAudioContext(2,22050*e,22050),r=new _a;if(r.init(s),r.setVolumes(.7,.8),i.startsWith("sfx:")){let y=i.slice(4).split(","),w=0;for(let x of y)r.ctx=s}else r.renderSong(i,t,e-.5);let a=await s.startRendering(),l=0,o=0,c=0,h=0,u=0,d=a.getChannelData(0),f=a.getChannelData(1),g=22050/2,b=0;for(let y=0;y<d.length;y++){let w=Math.max(Math.abs(d[y]),Math.abs(f[y]));(!Number.isFinite(d[y])||!Number.isFinite(f[y]))&&c++,w>l&&(l=w),w>=.999&&h++,o+=d[y]*d[y]+f[y]*f[y],b+=d[y]*d[y],y%g===g-1&&(Math.sqrt(b/g)<.002&&u++,b=0)}let m=0;for(let y=0;y<d.length;y+=97)m=m*31+Math.round(d[y]*1e4)|0;let p={name:i,world:t,peak:+l.toFixed(4),rms:+Math.sqrt(o/(d.length*2)).toFixed(4),nan:c,clip:h,quietHalfSeconds:u,windows:Math.floor(d.length/g),hash:m};if(window.__hopstarWantWav){let y=d.length,w=new DataView(new ArrayBuffer(44+y*4)),x=(C,v)=>{for(let T=0;T<v.length;T++)w.setUint8(C+T,v.charCodeAt(T))};x(0,"RIFF"),w.setUint32(4,36+y*4,!0),x(8,"WAVE"),x(12,"fmt "),w.setUint32(16,16,!0),w.setUint16(20,1,!0),w.setUint16(22,2,!0),w.setUint32(24,22050,!0),w.setUint32(28,22050*4,!0),w.setUint16(32,4,!0),w.setUint16(34,16,!0),x(36,"data"),w.setUint32(40,y*4,!0);for(let C=0;C<y;C++)w.setInt16(44+C*4,Math.max(-1,Math.min(1,d[C]))*32767,!0),w.setInt16(46+C*4,Math.max(-1,Math.min(1,f[C]))*32767,!0);let M="",S=new Uint8Array(w.buffer);for(let C=0;C<S.length;C+=32768)M+=String.fromCharCode.apply(null,S.subarray(C,C+32768));p.wav=btoa(M)}return p};window.__hopstarInfo=()=>({mode:I.mode,world:I.world,stage:I.stage,lives:I.session.lives,coins:I.session.coins,score:I.session.score,p:I.sim?{x:I.sim.s.p.x,y:I.sim.s.p.y,z:I.sim.s.p.z,power:I.sim.s.p.power,onGround:I.sim.s.p.onGround}:null,state:I.sim?I.sim.s.state:null,music:St.song?St.song.name:null,audio:St.ctx?St.ctx.state:"none",unlocked:Ae.unlocked});})();
