"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[26545],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),i=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=i(n),c=r,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var i=2;i<l;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(87462),r=n(67294),l=n(86010),o=n(72389),s=n(67392),p=n(7094),i=n(12466);const u="tabList__CuJ",d="tabItem_LNqP";function m(e){var t;const{lazy:n,block:o,defaultValue:m,values:c,groupId:k,className:h}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=c??y.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,s.l)(g,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===m?m:m??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==b&&!g.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:x}=(0,p.U)(),[v,T]=(0,r.useState)(b),C=[],{blockElementScrollPositionUntilNextRender:w}=(0,i.o5)();if(null!=k){const e=N[k];null!=e&&e!==v&&g.some((t=>t.value===e))&&T(e)}const A=e=>{const t=e.currentTarget,n=C.indexOf(t),a=g[n].value;a!==v&&(w(t),T(a),null!=k&&x(k,String(a)))},H=e=>{var t;let n=null;switch(e.key){case"Enter":A(e);break;case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;n=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;n=C[t]??C[C.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},h)},g.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>C.push(e),onKeyDown:H,onClick:A},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":v===t})}),n??t)}))),n?(0,r.cloneElement)(y.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function c(e){const t=(0,o.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},51063:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),l=n(65488),o=n(85162);const s={},p="API Development",i={unversionedId:"hooks/api",id:"hooks/api",title:"API Development",description:"Routing",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/hooks/api.md",sourceDirName:"hooks",slug:"/hooks/api",permalink:"/en/docs/hooks/api",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/hooks/api.md",tags:[],version:"current",frontMatter:{},sidebar:"hooks",previous:{title:"Introduction",permalink:"/en/docs/hooks/intro"},next:{title:"Hooks",permalink:"/en/docs/hooks/builtin-hooks"}},u={},d=[{value:"Routing",id:"routing",level:2},{value:"Request context (Context / Request / Response)",id:"request-context-context--request--response",level:2},{value:"Http trigger",id:"http-trigger",level:2},{value:"Request",id:"request",level:2},{value:"Pass parameter Data",id:"pass-parameter-data",level:3},{value:"Query parameter Query",id:"query-parameter-query",level:3},{value:"Path parameter Params",id:"path-parameter-params",level:3},{value:"Request header Headers",id:"request-header-headers",level:3},{value:"Response Response",id:"response-response",level:2},{value:"Status code HttpCode",id:"status-code-httpcode",level:3},{value:"Response header SetHeader",id:"response-header-setheader",level:3},{value:"Redirect Redirect",id:"redirect-redirect",level:3},{value:"Return value type ContentType",id:"return-value-type-contenttype",level:3}],m={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"api-development"},"API Development"),(0,r.kt)("h2",{id:"routing"},"Routing"),(0,r.kt)("p",null,"In Midway Hooks, you can quickly create interfaces through the ",(0,r.kt)("inlineCode",{parentName:"p"},"Api()")," function provided by ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/hooks"),"."),(0,r.kt)("p",null,"Hello World example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="/src/hello.ts"',title:'"/src/hello.ts"'},"import {\n  Api\n  Get\n} from '@midwayjs/hooks';\n\nexport default Api (\n  Get(), // Http Path: /api/hello\n  async () => {\n    return 'Hello World!';\n  }\n);\n")),(0,r.kt)("p",null,"An API interface consists of the following parts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Api()"),": defines an API function."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Get(path?: String)"),": specifies the Http trigger, the request method is set to GET, and the optional ",(0,r.kt)("inlineCode",{parentName:"li"},"path")," is the path of the interface. If you do not specify a path, the path is generated based on the ",(0,r.kt)("inlineCode",{parentName:"li"},"function name and file name"),". By default, the path is prefixed with ",(0,r.kt)("inlineCode",{parentName:"li"},"/API"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Handler: async (...args: any[]) => { ... }"),": user logic, processes requests and returns results")),(0,r.kt)("p",null,"You can also specify the path, as shown in the following example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="/src/hello.ts"',title:'"/src/hello.ts"'},"import {\n  Api\n  Get\n} from '@midwayjs/hooks';\n\nexport default Api (\n  Get('/hello'), // Http Path: /hello\n  async () => {\n    return 'Hello World!';\n  }\n);\n")),(0,r.kt)("h2",{id:"request-context-context--request--response"},"Request context (Context / Request / Response)"),(0,r.kt)("p",null,"You can get the request context object through the ",(0,r.kt)("inlineCode",{parentName:"p"},"useContext")," provided by ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/hooks"),"."),(0,r.kt)("p",null,"Taking ",(0,r.kt)("a",{parentName:"p",href:"https://koajs.com/"},"Koa")," framework as an example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"useContext")," will return Koa's ",(0,r.kt)("a",{parentName:"p",href:"https://koajs.com/#context"},"Context")," object."),(0,r.kt)("p",null,"Basic example:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Get the request Method and Path")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Api\n  Get\n  useContext\n} from '@midwayjs/hooks';\nimport { Context } from '@midwayjs/koa';\n\nexport default Api(Get(), async () => {\n  const ctx = useContext<Context>();\n  return {\n    method: ctx.method\n    path: ctx.path\n  };\n});\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Set the returned Header")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Api\n  Get\n  useContext\n} from '@midwayjs/hooks';\n\nexport default Api(Get(), async () => {\n  const ctx = useContext<Context>();\n  ctx.set('X-Powered-By', 'Midway');\n  return 'Hello World!';\n});\n")),(0,r.kt)("p",null,"At the same time, we can also set Header by ",(0,r.kt)("inlineCode",{parentName:"p"},"SetHeader()"),"."),(0,r.kt)("h2",{id:"http-trigger"},"Http trigger"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Trigger"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"All(path?: string)")),(0,r.kt)("td",{parentName:"tr",align:null},"Accept all Http Method requests")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Get(path?: string)")),(0,r.kt)("td",{parentName:"tr",align:null},"Accept GET request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Post(path?: string)")),(0,r.kt)("td",{parentName:"tr",align:null},"Accept POST request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Put(path?: string)")),(0,r.kt)("td",{parentName:"tr",align:null},"Accept PUT request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Delete(path?: string)")),(0,r.kt)("td",{parentName:"tr",align:null},"Accept DELETE request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Patch(path?: string)")),(0,r.kt)("td",{parentName:"tr",align:null},"Accept PATCH request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Head(path?: string)")),(0,r.kt)("td",{parentName:"tr",align:null},"Accept HEAD request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Options(path?: string)")),(0,r.kt)("td",{parentName:"tr",align:null},"Accept OPTIONS request")))),(0,r.kt)("h2",{id:"request"},"Request"),(0,r.kt)("h3",{id:"pass-parameter-data"},"Pass parameter Data"),(0,r.kt)("p",null,"In Midway Hooks, the input parameter of the interface is the parameter that declares the function."),(0,r.kt)("p",null,"The basic example is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Api\n  Post\n} from '@midwayjs/hooks';\n\nexport default Api (\n  Post(), // Http Path: /api/say\n  async (name: string) => {\n    return 'Hello ${name}!';\n  }\n);\n")),(0,r.kt)("p",null,"You can call the interface in two ways."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Full stack project: based on zero Api, import interface and call"),(0,r.kt)("li",{parentName:"ol"},"Manual call: Use fetch to ",(0,r.kt)("inlineCode",{parentName:"li"},"Handler(...args: any[])")," input parameters under Http, and you can pass parameters by setting the args parameter of Http Body during manual request.")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"fullstack",label:"\u5168\u6808\u5e94\u7528\uff08\u96f6 Api\uff09",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import say from './api';\n\nconst response = await say('Midway');\nconsole.log(response); // Hello Midway!\n"))),(0,r.kt)(o.Z,{value:"mannual",label:"\u624b\u52a8\u8c03\u7528",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"fetch('/api/say', {\n  method: 'POST',\n  headers: {\n    'Content-Type': 'application/json',\n  },\n  body: JSON.stringify({\n    args: ['Midway']\n  }),\n})\n  .then((res) => res.text())\n  .then((res) => console.log(res)); // Hello Midway!\n")))),(0,r.kt)("h3",{id:"query-parameter-query"},"Query parameter Query"),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Query<T>")," parameter to pass the parameter to the URL."),(0,r.kt)("p",null,"If you want the interface path to be ",(0,r.kt)("inlineCode",{parentName:"p"},"/articles? Page = 0 & limit = 10"),", you can write like this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Api\n  Get\n  Query\n  useContext\n} from '@midwayjs/hooks';\n\nexport default Api (\n  Get()\n  Query< {\n    page: string;\n    limit: string;\n  }>(),\n  async () => {\n    const ctx = useContext();\n    return {\n      page: ctx.query.page\n      limit: ctx.query.limit\n    };\n  }\n);\n")),(0,r.kt)("p",null,"Front-end call"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"fullstack",label:"\u5168\u6808\u5e94\u7528",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import getArticles from './api';\nconst response = await getArticles({\n  query: { page: '0', limit: '10'}\n});\nconsole.log(response); // { page: '0', limit: '10'}\n"))),(0,r.kt)(o.Z,{value:"mannual",label:"\u624b\u52a8\u8c03\u7528",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"fetch('/api/articles?page=0&limit=10')\n  .then((res) => res.json())\n  .then((res) => console.log(res)); // { page: '0', limit: '10'}\n")))),(0,r.kt)("h3",{id:"path-parameter-params"},"Path parameter Params"),(0,r.kt)("p",null,"Path parameters can realize the functions of dynamic paths and obtaining parameters from paths. When you use this feature, you must manually set the path and use ",(0,r.kt)("inlineCode",{parentName:"p"},"Params<T>")," to declare the type."),(0,r.kt)("p",null,"If you want the interface path to be ",(0,r.kt)("inlineCode",{parentName:"p"},"/article/100")," and get a value with id ",(0,r.kt)("inlineCode",{parentName:"p"},"100"),", you can write as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Api\n  Get\n  Params\n  useContext\n} from '@midwayjs/hooks';\n\nexport default Api (\n  Get('/article/:id')\n  Params<{ id: string }>()\n  async () => {\n    const ctx = useContext();\n    return {\n      article: ctx.params.id\n    };\n  }\n);\n")),(0,r.kt)("p",null,"Front-end call"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"fullstack",label:"\u5168\u6808\u5e94\u7528",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import getArticle from './api/article';\nconst response = await getArticle({\n  params: { id: '100'}\n});\nconsole.log(response); // { article: '100'}\n"))),(0,r.kt)(o.Z,{value:"mannual",label:"\u624b\u52a8\u8c03\u7528",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"fetch('/article/100')\n  .then((res) => res.json())\n  .then((res) => console.log(res)); // { article: '100'}\n")))),(0,r.kt)("h3",{id:"request-header-headers"},"Request header Headers"),(0,r.kt)("p",null,"The request header can realize the function of passing parameters through Http Headers. When using this function, the type must be declared by ",(0,r.kt)("inlineCode",{parentName:"p"},"Headers<T>"),"."),(0,r.kt)("p",null,"If you want to request ",(0,r.kt)("inlineCode",{parentName:"p"},"/auth")," and pass token in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Request Headers"),", you can write as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Api\n  Get\n  Headers\n  useContext\n} from '@midwayjs/hooks';\n\nexport default Api (\n  Get('/auth')\n  Headers<{ token: string }>()\n  async () => {\n    const ctx = useContext();\n    return {\n      token: ctx.headers.token\n    };\n  }\n);\n")),(0,r.kt)("p",null,"Front-end call"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"fullstack",label:"\u5168\u6808\u5e94\u7528",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import getAuth from './api/auth';\nconst response = await getAuth({\n  headers: { token: '123456'}\n});\nconsole.log(response); // { token: '123456'}\n"))),(0,r.kt)(o.Z,{value:"mannual",label:"\u624b\u52a8\u8c03\u7528",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"fetch('/auth', {\n  headers: {\n    token: '123456',\n  },\n})\n  .then((res) => res.json())\n  .then((res) => console.log(res)); // { token: '123456'}\n")))),(0,r.kt)("h2",{id:"response-response"},"Response Response"),(0,r.kt)("h3",{id:"status-code-httpcode"},"Status code HttpCode"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"HttpCode(status: number)")," is supported."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"operator",label:"SetHeader",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Api\n  Get\n  HttpCode\n} from '@midwayjs/hooks';\n\nexport default Api (\n  Get()\n  HttpCode(201)\n  async () => {\n    return 'Hello World!';\n  }\n);\n"))),(0,r.kt)(o.Z,{value:"mannual",label:"\u624b\u52a8\u8bbe\u7f6e",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Api\n  Get\n  useContext\n} from '@midwayjs/hooks';\n\nexport default Api(Get(), async () => {\n  const ctx = useContext<Context>();\n  ctx.status = 201;\n  return 'Hello World!';\n});\n")))),(0,r.kt)("h3",{id:"response-header-setheader"},"Response header SetHeader"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SetHeader(key: string, value: string)")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"operator",label:"SetHeader",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Api\n  Get\n  SetHeader\n} from '@midwayjs/hooks';\n\nexport default Api (\n  Get()\n  SetHeader('X-Powered-By', 'Midway')\n  async () => {\n    return 'Hello World!';\n  }\n);\n"))),(0,r.kt)(o.Z,{value:"mannual",label:"\u624b\u52a8\u8bbe\u7f6e",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Api\n  Get\n  useContext\n} from '@midwayjs/hooks';\n\nexport default Api(Get(), async () => {\n  const ctx = useContext<Context>();\n  ctx.set('X-Powered-By', 'Midway');\n  return 'Hello World!';\n});\n")))),(0,r.kt)("h3",{id:"redirect-redirect"},"Redirect Redirect"),(0,r.kt)("p",null,"Support: ",(0,r.kt)("inlineCode",{parentName:"p"},"Redirect(url: string, code?: number = 302)")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"operator",label:"Redirect",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Api\n  Get\n  Redirect\n} from '@midwayjs/hooks';\n\nexport default Api (\n  Get('/demo')\n  Redirect('/hello')\n  async () => {}\n);\n"))),(0,r.kt)(o.Z,{value:"mannual",label:"\u624b\u52a8\u8bbe\u7f6e",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Api\n  Get\n  useContext\n} from '@midwayjs/hooks';\n\nexport default Api (\n  Get('/demo')\n  async () => {\n    const ctx = useContext<Context>();\n    ctx.redirect('/hello');\n  }\n);\n")))),(0,r.kt)("h3",{id:"return-value-type-contenttype"},"Return value type ContentType"),(0,r.kt)("p",null,"Supported: ",(0,r.kt)("inlineCode",{parentName:"p"},"ContentType(type: string)"),"."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"operator",label:"ContentType",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Api\n  Get\n  ContentType\n} from '@midwayjs/hooks';\n\nexport default Api (\n  Get()\n  ContentType('text/html')\n  async () => {\n    return '<h1>Hello World! </h1>';\n  }\n);\n"))),(0,r.kt)(o.Z,{value:"mannual",label:"\u624b\u52a8\u8bbe\u7f6e",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Api\n  Get\n  ContentType\n} from '@midwayjs/hooks';\n\nexport default Api (\n  Get()\n  ContentType('text/html')\n  async () => {\n    return '<h1>Hello World! </h1>';\n  }\n);\n")))))}c.isMDXComponent=!0}}]);