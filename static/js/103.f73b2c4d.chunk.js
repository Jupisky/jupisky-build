(this["webpackJsonpjupisky-ui"]=this["webpackJsonpjupisky-ui"]||[]).push([[103],{1281:function(n,r,e){"use strict";e.r(r);var t=e(1),u=e.n(t),i=(e(429),e(518));e(78),e(432),e(431);function o(n,r,e,t,u,i,o){try{var c=n[i](o),a=c.value}catch(s){return void e(s)}c.done?r(a):Promise.resolve(a).then(t,u)}function c(n){return function(){var r=this,e=arguments;return new Promise((function(t,u){var i=n.apply(r,e);function c(n){o(i,t,u,c,a,"next",n)}function a(n){o(i,t,u,c,a,"throw",n)}c(void 0)}))}}r.default=function(n){var r=n.apiKey,t=n.rpcUrl,o=n.networkId,a=n.preferred,s=n.label,f=n.iconSrc;return{name:s||"Fortmatic",svg:n.svg||'\n  <svg \n    height="40" \n    viewBox="0 0 40 40" \n    width="40" \n    xmlns="http://www.w3.org/2000/svg"\n  >\n    <path d="m2744.99995 1155h9.99997 10.00008v9.98139h-10.00008-9.99997-9.99998v9.9814.64001 9.28323.05815 9.9234h-9.99997v-9.9234-.05815-9.28323-.64001-9.9814-9.98139h9.99997zm9.99961 29.88552h-9.94167v-9.92324h19.93595v10.27235c0 2.55359-1.01622 5.00299-2.82437 6.80909-1.80867 1.8061-4.26182 2.82181-6.82018 2.82335h-.34973z" \n      fill="#617bff" \n      fill-rule="evenodd" \n      transform="translate(-2725 -1155)"/>\n  </svg>\n',iconSrc:f,wallet:function(){var n=c(u.a.mark((function n(a){var s,f,p,l,v,d,h;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(112).then(e.t.bind(null,1981,7));case 2:return s=n.sent,f=s.default,p=new f(r,t?{chainId:o,rpcUrl:t}:1===o?void 0:Object(i.m)(o)),l=p.getProvider(),v=a.BigNumber,d=a.getAddress,n.abrupt("return",{provider:l,instance:p,interface:{name:"Fortmatic",connect:function(){return p.user.login().then((function(n){return h=!0,n}))},disconnect:function(){return p.user.logout()},address:{get:function(){return h?d(l):Promise.resolve()}},network:{get:function(){return Promise.resolve(o)}},balance:{get:function(){var n=c(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",h&&p.user.getBalances().then((function(n){return n[0]?v(n[0].crypto_amount).times(v("1000000000000000000")).toString(10):null})));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()},dashboard:function(){return p.user.settings()}}});case 8:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),type:"sdk",desktop:!0,mobile:!0,preferred:a}}}}]);
//# sourceMappingURL=103.f73b2c4d.chunk.js.map