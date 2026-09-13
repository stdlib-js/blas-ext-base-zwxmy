"use strict";var R=function(v,t){return function(){try{return t||v((t={exports:{}}).exports,t),t.exports}catch(o){throw (t=0, o)}};};var g=R(function(T,b){
var _=require('@stdlib/strided-base-reinterpret-complex128/dist'),f=require('@stdlib/complex-float64-base-mul/dist').assign,q=5;function F(v,t,o,w,x,m,c,y,O,D){var a,i,s,r,e,u,z,j,l,p,n;if(v<=0)return y;if(a=_(t,0),i=_(x,0),s=_(y,0),r=w*2,e=c*2,u=D*2,z=o*2,j=m*2,l=O*2,o===1&&m===1&&O===1){if(p=v%q,p>0)for(n=0;n<p;n++)f(a[r],a[r+1],i[e],i[e+1],s,1,u),r+=z,e+=j,u+=l;if(v<q)return y;for(n=p;n<v;n+=q)f(a[r],a[r+1],i[e],i[e+1],s,1,u),f(a[r+2],a[r+3],i[e+2],i[e+3],s,1,u+2),f(a[r+4],a[r+5],i[e+4],i[e+5],s,1,u+4),f(a[r+6],a[r+7],i[e+6],i[e+7],s,1,u+6),f(a[r+8],a[r+9],i[e+8],i[e+9],s,1,u+8),r+=q*2,e+=q*2,u+=q*2;return y}for(n=0;n<v;n++)f(a[r],a[r+1],i[e],i[e+1],s,1,u),r+=z,e+=j,u+=l;return y}b.exports=F
});var h=R(function(U,d){
var E=require('@stdlib/strided-base-stride2offset/dist'),G=g();function H(v,t,o,w,x,m,c){return G(v,t,o,E(v,o),w,x,E(v,x),m,c,E(v,c))}d.exports=H
});var B=R(function(V,A){
var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=h(),J=g();I(k,"ndarray",J);A.exports=k
});var K=require("path").join,L=require('@stdlib/utils-try-require/dist'),P=require('@stdlib/assert-is-error/dist'),Q=B(),M,C=L(K(__dirname,"./native.js"));P(C)?M=Q:M=C;module.exports=M;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
