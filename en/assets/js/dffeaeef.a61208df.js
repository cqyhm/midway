"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[69018],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(y,s(s({ref:t},p),{},{components:n})):r.createElement(y,s({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40819:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={slug:"release/3.9.0",title:"Release 3.9.0",authors:["harry"],tags:["release"]},s=void 0,o={permalink:"/en/blog/release/3.9.0",source:"@site/blog/2022-12-13-release-3-9.md",title:"Release 3.9.0",description:"\u5927\u4fc3\u79ef\u6512\u4e86\u7ea6\u4e24\u5468\u7684\u9700\u6c42\uff0c\u7edf\u4e00\u5728 v3.9.0 \u53d1\u5e03\u3002",date:"2022-12-13T00:00:00.000Z",formattedDate:"December 13, 2022",tags:[{label:"release",permalink:"/en/blog/tags/release"}],readingTime:3.295,hasTruncateMarker:!1,authors:[{name:"Harry Chen",title:"Maintainer of Midway",url:"https://github.com/czy88840616",imageURL:"https://avatars.githubusercontent.com/u/418820",key:"harry"}],frontMatter:{slug:"release/3.9.0",title:"Release 3.9.0",authors:["harry"],tags:["release"]},prevItem:{title:"Release 3.10.0",permalink:"/en/blog/release/3.10.0"},nextItem:{title:"Release 3.8.0",permalink:"/en/blog/release/3.8.0"}},c={authorsImageUrls:[void 0]},l=[{value:"Breaking",id:"breaking",level:2},{value:"Features",id:"features",level:2},{value:"1\u3001bootstrap \u65b0\u589e\u8fdb\u7a0b\u6a21\u578b",id:"1bootstrap-\u65b0\u589e\u8fdb\u7a0b\u6a21\u578b",level:3},{value:"2\u3001\u589e\u52a0 @InjectClient \u652f\u6301",id:"2\u589e\u52a0-injectclient-\u652f\u6301",level:3},{value:"3\u3001casbin \u652f\u6301 watcher  \u62bd\u8c61",id:"3casbin-\u652f\u6301-watcher--\u62bd\u8c61",level:3},{value:"4\u3001DataSource \u7684\u4e0d\u540c\u8def\u5f84\u652f\u6301",id:"4datasource-\u7684\u4e0d\u540c\u8def\u5f84\u652f\u6301",level:3}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5927\u4fc3\u79ef\u6512\u4e86\u7ea6\u4e24\u5468\u7684\u9700\u6c42\uff0c\u7edf\u4e00\u5728 v3.9.0 \u53d1\u5e03\u3002"),(0,a.kt)("p",null,"\u5347\u7ea7\u8bf7\u53c2\u8003  ",(0,a.kt)("a",{parentName:"p",href:"/docs/how_to_update_midway"},"\u5982\u4f55\u66f4\u65b0 Midway")," \u4e2d\u63cf\u8ff0\uff0c\u8bf7\u4e0d\u8981\u5355\u72ec\u5347\u7ea7\u67d0\u4e2a\u7ec4\u4ef6\u5305\u3002"),(0,a.kt)("h2",{id:"breaking"},"Breaking"),(0,a.kt)("p",null,"\u4ece v3.9.0 \u5f00\u59cb\uff0cMidway \u4ec5\u652f\u6301 Node.js ",(0,a.kt)("inlineCode",{parentName:"p"}," >=12.11.0")," \u7248\u672c\u3002"),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("h3",{id:"1bootstrap-\u65b0\u589e\u8fdb\u7a0b\u6a21\u578b"},"1\u3001bootstrap \u65b0\u589e\u8fdb\u7a0b\u6a21\u578b"),(0,a.kt)("p",null,"\u4ece v3.9.0 \u5f00\u59cb\uff0c\u4e3a\u4e86\u5e94\u5bf9 socket.io \u5728 pm2 \u573a\u666f\u4e0b\u7684\u7c98\u6027\u4f1a\u8bdd\uff0c\u6211\u4eec\u65b0\u589e\u4e00\u79cd master-worker \u6a21\u578b\u652f\u6301\u3002\u7b80\u5355\u6765\u8bf4\uff0c\u5c06\u7531 pm2 \u6765\u542f\u52a8 midway \u7684 master\uff0c\u5728 master \u542f\u52a8 worker\uff0c\u8fd9\u6837\u53ef\u4ee5\u76f8\u5bf9\u81ea\u7531\u7684\u5b9a\u5236 master \u4e2d\u7684\u903b\u8f91\u3002"),(0,a.kt)("p",null,"\u539f\u6709\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Bootstrap")," \u4e4b\u5916\uff0c\u65b0\u589e\u4e86\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterManager")," \u6765\u5904\u7406\u8fdb\u7a0b\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const { ClusterManager, Bootstrap } = require('@midwayjs/bootstrap');\n\nconst clusterManager = new ClusterManager({\n  // \u6267\u884c\u7684\u5b50\u8fdb\u7a0b\u6587\u4ef6\n  exec: __filename,\n  // \u8fdb\u7a0b\u6570\n  count: 2,\n});\n\nif (clusterManager.isPrimary()) {\n  // \u542f\u52a8\u4e3b\u8fdb\u7a0b\n  clusterManager.start();\n} else {\n  // \u539f\u6709\u5b50\u8fdb\u7a0b\u6267\u884c\n  Bootstrap.run();\n}\n")),(0,a.kt)("p",null,"\u5173\u4e8e socket.io \u7684\u7c98\u6027\u4f1a\u8bdd\uff0c\u6211\u4eec\u5c06\u5728 socket.io \u7ec4\u4ef6\u4e2d\u4ecb\u7ecd\u66f4\u591a\u3002"),(0,a.kt)("h3",{id:"2\u589e\u52a0-injectclient-\u652f\u6301"},"2\u3001\u589e\u52a0 @InjectClient \u652f\u6301"),(0,a.kt)("p",null,"\u4e3a ServiceFactory \u7c7b\u578b\u6dfb\u52a0\u4e00\u4e2a @InjectClient \u88c5\u9970\u5668\uff0c\u65b9\u4fbf\u5728\u591a\u5ba2\u6237\u7aef\u7684\u7684\u65f6\u5019\u9009\u62e9\u6ce8\u5165\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\u4f7f\u7528\u591a\u4e2a redis \u7ec4\u4ef6\u7684\u65f6\u5019\u3002"),(0,a.kt)("p",null,"\u539f\u6765\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { RedisServiceFactory } from '@midwayjs/redis';\nimport { join } from 'path';\n\n@Provide()\nexport class UserService {\n\n  @Inject()\n  redisServiceFactory: RedisServiceFactory;\n\n  async save() {\n    const redis1 = this.redisServiceFactory.get('instance1');\n    const redis2 = this.redisServiceFactory.get('instance2');\n\n    //...\n\n  }\n}\n")),(0,a.kt)("p",null,"\u73b0\u5728\u53ef\u4ee5\u901a\u8fc7\u6ce8\u5165\u6765\u7b80\u5316\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { RedisServiceFactory } from '@midwayjs/redis';\nimport { InjectClient } from '@midwayjs/core';\n\n@Provide()\nexport class UserService {\n\n  @InjectClient(RedisServiceFactory, 'instance1')\n  redis1: RedisService;\n  \n  @InjectClient(RedisServiceFactory, 'instance2')\n  redis2: RedisService;\n\n  async save() {\n    // this.redis1.set(...)\n    // this.redis2.set(...)\n  }\n}\n")),(0,a.kt)("p",null,"\u6ce8\u610f\uff0c\u6240\u6709\u7ee7\u627f\u4e8e ServiceFactory \u7684\u591a\u5b9e\u4f8b\u7ec4\u4ef6\u90fd\u53ef\u4ee5\u4f7f\u7528\u4e0a\u8ff0\u65b9\u6cd5\u3002"),(0,a.kt)("h3",{id:"3casbin-\u652f\u6301-watcher--\u62bd\u8c61"},"3\u3001casbin \u652f\u6301 watcher  \u62bd\u8c61"),(0,a.kt)("p",null,"\u9664\u4e86\u793e\u533a\u7684 casbin-redis-watcher\uff0c\u6211\u4eec\u4e5f\u63d0\u4f9b\u4e86\u590d\u7528 redis \u8fde\u63a5\u7684 watcher\uff0c\u4e3a\u4e86\u51cf\u5c11\u5305\uff0c\u540e\u7eed\u6240\u6709\u7684 casbin/redis \u76f8\u5173\u7684\u529f\u80fd\u90fd\u5c06\u590d\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"casbin-redis-adapter")," \u5305\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { MidwayAppInfo } from '@midwayjs/core';\nimport { join } from 'path';\nimport { createAdapter, createWatcher } from '@midwayjs/casbin-redis-adapter';\n\nexport default (appInfo: MidwayAppInfo) => {\n  return {\n    keys: '123456',\n    redis: {\n      clients: {\n        'node-casbin-official': {\n          host: '127.0.0.1',\n          port: 6379,\n          password: '',\n          db: '0',\n        },\n        'node-casbin-sub': {\n          host: '127.0.0.1',\n          port: 6379,\n          password: '',\n          db: '0',\n        }\n      }\n    },\n    casbin: {\n      // ...\n      policyAdapter: createAdapter({\n        clientName: 'node-casbin-official'\n      }),\n      policyWatcher: createWatcher({\n        pubClientName: 'node-casbin-official',\n        subClientName: 'node-casbin-sub',\n      })\n    },\n  };\n}\n\n")),(0,a.kt)("p",null,"\u7531\u4e8e pub/sub \u8fde\u63a5\u9700\u8981\u4e0d\u540c\uff0c\u8fd9\u91cc\u5b9a\u4e49\u4e86\u4e24\u4e2a\u5ba2\u6237\u7aef\uff0c\u548c adapter \u5b58\u50a8\u590d\u7528\u5176\u4e2d\u4e00\u4e2a\u8fde\u63a5\u3002"),(0,a.kt)("h3",{id:"4datasource-\u7684\u4e0d\u540c\u8def\u5f84\u652f\u6301"},"4\u3001DataSource \u7684\u4e0d\u540c\u8def\u5f84\u652f\u6301"),(0,a.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u4e0d\u540c\u7528\u6237\u7684\u4f7f\u7528\u4e60\u60ef\uff0c\u6211\u4eec\u652f\u6301\u4e86\u5927\u591a\u6570\u53ef\u80fd\u7684\u901a\u914d\u5f62\u5f0f\uff0c\u73b0\u5728\u4f60\u53ef\u4ee5\u5728 DataSource \u4e2d\u4f7f\u7528\u5f88\u591a\u4ee5\u524d\u7684\u683c\u5f0f\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n  mysql: {\n    dataSource: {\n      dataSource1: {\n        // ...\n        entities: [\n          'entity',             // \u7279\u5b9a\u76ee\u5f55\n          '**/abc/**',          // \u4ec5\u83b7\u53d6\u5305\u542b abc \u5b57\u7b26\u7684\u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\n          'abc/**/*.ts',        // \u7279\u5b9a\u76ee\u5f55 + \u901a\u914d\n          'abc/*.entity.ts',    // \u5339\u914d\u540e\u7f00\n          '**/*.entity.ts',     // \u901a\u914d\u52a0\u540e\u7f00\u5339\u914d\n          '**/*.{j,t}s',        // \u540e\u7f00\u5339\u914d\n        ]\n      },\n      // ...\n      // ...\n    }\n  }\n}\n")))}u.isMDXComponent=!0}}]);