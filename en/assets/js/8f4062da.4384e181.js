"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[11400],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),m=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=m(n),c=a,k=u["".concat(o,".").concat(c)]||u[c]||d[c]||p;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,i=new Array(p);i[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var m=2;m<p;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},56510:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>l,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const p={},i="\u7ba1\u9053\uff08Pipe\uff09",l={unversionedId:"pipe",id:"pipe",title:"\u7ba1\u9053\uff08Pipe\uff09",description:"\u7ba1\u9053\u662f\u53c2\u6570\u88c5\u9970\u5668\u7684\u5185\u90e8\u673a\u5236\uff0c\u53ef\u4ee5\u5728\u53c2\u6570\u88c5\u9970\u5668\u903b\u8f91\u4e4b\u540e\u6267\u884c\u4e00\u4e9b\u81ea\u5b9a\u4e49\u4ee3\u7801\uff0c\u4e00\u822c\u7528\u4e8e\u4ee5\u4e0b\u7684\u573a\u666f\uff1a",source:"@site/docs/pipe.md",sourceDirName:".",slug:"/pipe",permalink:"/en/docs/pipe",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/pipe.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"Life cycle",permalink:"/en/docs/lifecycle"},next:{title:"Log",permalink:"/en/docs/logger"}},o={},m=[{value:"\u7ec4\u4ef6\u63d0\u4f9b\u7684\u7ba1\u9053",id:"\u7ec4\u4ef6\u63d0\u4f9b\u7684\u7ba1\u9053",level:2},{value:"\u81ea\u5b9a\u4e49\u7ba1\u9053",id:"\u81ea\u5b9a\u4e49\u7ba1\u9053",level:2},{value:"\u7ed1\u5b9a\u7ba1\u9053",id:"\u7ed1\u5b9a\u7ba1\u9053",level:2},{value:"\u9ed8\u8ba4\u7ed1\u5b9a\u7684\u7ba1\u9053",id:"\u9ed8\u8ba4\u7ed1\u5b9a\u7684\u7ba1\u9053",level:2}],s={toc:m};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7ba1\u9053pipe"},"\u7ba1\u9053\uff08Pipe\uff09"),(0,a.kt)("p",null,"\u7ba1\u9053\u662f\u53c2\u6570\u88c5\u9970\u5668\u7684\u5185\u90e8\u673a\u5236\uff0c\u53ef\u4ee5\u5728\u53c2\u6570\u88c5\u9970\u5668\u903b\u8f91\u4e4b\u540e\u6267\u884c\u4e00\u4e9b\u81ea\u5b9a\u4e49\u4ee3\u7801\uff0c\u4e00\u822c\u7528\u4e8e\u4ee5\u4e0b\u7684\u573a\u666f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1\u3001\u6570\u636e\u7684\u6821\u9a8c"),(0,a.kt)("li",{parentName:"ul"},"2\u3001\u53c2\u6570\u7684\u8f6c\u6362")),(0,a.kt)("h2",{id:"\u7ec4\u4ef6\u63d0\u4f9b\u7684\u7ba1\u9053"},"\u7ec4\u4ef6\u63d0\u4f9b\u7684\u7ba1\u9053"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/validate")," \u9ed8\u8ba4\u63d0\u4f9b\u4e86\u9a8c\u8bc1\u7ba1\u9053\uff0c\u53ea\u9700\u8981\u542f\u7528\u7ec4\u4ef6\u5373\u53ef\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@Controller('/api/user')\nexport class HomeController {\n\n  @Post('/')\n  async updateUser(@Body() user: UserDTO ) {\n    // ...\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@Body")," \u88c5\u9970\u5668\u5df2\u7ecf\u88ab\u81ea\u52a8\u6ce8\u518c\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"ValidatePipe")," \uff0c\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"p"},"UserDTO")," \u662f\u4e00\u4e2a\u5df2\u7ecf\u7ecf\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"@Rule")," \u88c5\u9970\u5668\u4fee\u9970\u7684 DTO\uff0c\u4f1a\u81ea\u52a8\u6821\u9a8c\u5e76\u8f6c\u6362\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4f7f\u7528\u4e86\u57fa\u7840\u7c7b\u578b\uff0c\u5219\u4e5f\u53ef\u4ee5\u901a\u8fc7\u6570\u636e\u8f6c\u6362\u7ba1\u9053\u8fdb\u884c\u6821\u9a8c\u548c\u8f6c\u6362\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ParseIntPipe } from '@midwayjs/validate';\n\n@Controller('/api/user')\nexport class HomeController {\n\n  @Post('/update_age')\n  async updateAge(@Body('age', [ParseIntPipe]) age: number ) {\n    // ...\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ParseIntPipe")," \u7ba1\u9053\u53ef\u4ee5\u5c06\u5b57\u7b26\u4e32\uff0c\u6570\u5b57\u6570\u636e\u8f6c\u6362\u4e3a\u6570\u5b57\uff0c\u8fd9\u6837\u4ece\u8bf7\u6c42\u53c2\u6570\u83b7\u53d6\u5230\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"age")," \u5b57\u6bb5\u5219\u4f1a\u901a\u8fc7\u7ba1\u9053\u7684\u6821\u9a8c\u5e76\u8f6c\u6362\u4e3a\u6570\u5b57\u683c\u5f0f\u3002"),(0,a.kt)("p",null,"\u9664\u6b64\u4e4b\u5916\uff0c\u8fd8\u63d0\u4f9b\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"ParseBoolPipe")," \uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"ParseFloatPipe")," \u7b49\u66f4\u591a\u6570\u636e\u8f6c\u6362\u7ba1\u9053\uff0c\u5177\u4f53\u8bf7\u67e5\u770b ",(0,a.kt)("a",{parentName:"p",href:"./extensions/validate"},"Validate \u7ec4\u4ef6"),"\u3002"),(0,a.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u7ba1\u9053"},"\u81ea\u5b9a\u4e49\u7ba1\u9053"),(0,a.kt)("p",null,"\u7ba1\u9053\u53ef\u4ee5\u662f\u4e00\u4e2a\u5b9e\u73b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"PipeTransform"),"  \u63a5\u53e3\u7684\u7c7b\u6216\u8005\u65b9\u6cd5\uff0c\u6211\u4eec\u4e00\u822c\u5c06\u7ba1\u9053\u653e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/pipe")," \u76ee\u5f55\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/pipe/validate.pipe.ts\nimport { Pipe, PipeTransform, TransformOptions } from '@midwayjs/core';\n\n@Pipe()\nexport class ValidatePipe implements PipeTransform<T, R> {\n  transform(value: T, options:TransformOptions): R {\n    return value;\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"PipeTransform<T, R>")," \u662f\u6bcf\u4e2a\u7ba1\u9053\u5fc5\u987b\u8981\u5b9e\u73b0\u7684\u6cdb\u578b\u63a5\u53e3\u3002\u6cdb\u578b ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," \u8868\u660e\u8f93\u5165\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," \u7684\u7c7b\u578b\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"R")," \u8868\u660e ",(0,a.kt)("inlineCode",{parentName:"p"},"transfrom()")," \u65b9\u6cd5\u7684\u8fd4\u56de\u7c7b\u578b\u3002"),(0,a.kt)("p",null,"\u4e3a\u5b9e\u73b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"PipeTransfrom"),"\uff0c\u6bcf\u4e2a\u7ba1\u9053\u5fc5\u987b\u58f0\u660e ",(0,a.kt)("inlineCode",{parentName:"p"},"transfrom()")," \u65b9\u6cd5\u3002\u8be5\u65b9\u6cd5\u6709\u4e24\u4e2a\u53c2\u6570\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"value")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"value")," \u662f\u5f53\u524d\u5904\u7406\u7684\u53c2\u6570\u503c\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"options")," \u662f\u5f53\u524d\u5904\u7406\u7684\u9009\u9879\uff0c\u5305\u542b\u4ee5\u4e0b\u5c5e\u6027\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export TransformOptions<OriginType = unknown> {\n  metaType: TSDesignType<OriginType>;\n  metadata: Record<string, any>;\n  target: any;\n  methodName: string;\n}\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"metaType"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u4e00\u4e2a ts \u5143\u6570\u636e\u7c7b\u578b\u7684\u89e3\u6790\u5bf9\u8c61\uff0c\u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"td"},"name")," \u3001",(0,a.kt)("inlineCode",{parentName:"td"},"originDesign"),"\u3001",(0,a.kt)("inlineCode",{parentName:"td"},"isBaseType")," \u4e09\u4e2a\u5c5e\u6027\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"metadata"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u53c2\u6570\u88c5\u9970\u5668\u7684\u5143\u6570\u636e\u5bf9\u8c61")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"target"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5f53\u524d\u88c5\u9970\u7684\u5b9e\u4f8b\u672c\u8eab")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"methodName"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5f53\u524d\u53c2\u6570\u88c5\u9970\u5668\u88c5\u9970\u5668\u7684\u65b9\u6cd5\u540d")))),(0,a.kt)("h2",{id:"\u7ed1\u5b9a\u7ba1\u9053"},"\u7ed1\u5b9a\u7ba1\u9053"),(0,a.kt)("p",null,"\u7ba1\u9053\u5fc5\u987b\u4f9d\u9644\u5728\u53c2\u6570\u88c5\u9970\u5668\u4e0a\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u5728\u81ea\u5b9a\u4e49\u88c5\u9970\u5668\u7684\u9009\u9879\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u900f\u4f20\u7ba1\u9053\u53c2\u6570\u8fbe\u5230\u5e94\u7528\u7ba1\u9053\u7684\u76ee\u7684\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\u6211\u4eec\u81ea\u5b9a\u4e49\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"RegValid")," \u53c2\u6570\u88c5\u9970\u5668\uff0c\u7528\u4e8e\u4f20\u5165\u6b63\u5219\u548c\u53e6\u4e00\u4e2a\u7ba1\u9053\u53c2\u6570\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { PipeTransform, createCustomParamDecorator } from '@midwayjs/core';\n\nfunction RegValid(reg: Regexp, pipe: PipeTransform) {\n  return createCustomParamDecorator('reg-valid', {\n    reg,\n  }, {\n    // ...\n    pipes: [pipe]\n  });\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"createCustomParamDecorator")," \u7684\u7b2c\u4e09\u4e2a\u53c2\u6570\u652f\u6301\u4f20\u5165\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"pipes")," \u5c5e\u6027\uff0c\u6211\u4eec\u9700\u8981\u5c06\u7ba1\u9053\u4f20\u5165\u5176\u4e2d\uff0c\u8fd9\u6837\u7ba1\u9053\u5c31\u4f1a\u548c\u88c5\u9970\u5668\u7ed1\u5b9a\uff0c\u5728\u540e\u7eed\u7684\u8fd0\u884c\u4e2d\u81ea\u52a8\u6267\u884c\u3002"),(0,a.kt)("p",null,"\u5177\u4f53\u53ef\u4ee5\u67e5\u8be2 ",(0,a.kt)("a",{parentName:"p",href:"./custom_decorator"},"\u81ea\u5b9a\u4e49\u88c5\u9970\u5668")," \u4e2d\u7684\u53c2\u6570\u88c5\u9970\u5668\u7ae0\u8282\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"RegValid")," \u88c5\u9970\u5668\u7528\u4e8e\u6b63\u5219\u7684\u6821\u9a8c\uff0c\u5b9e\u73b0\u90e8\u5206\u6211\u4eec\u6682\u65f6\u5ffd\u7565\u3002"),(0,a.kt)("p",null,"\u53e6\u5916\uff0c\u6211\u4eec\u518d\u5b9a\u4e49\u4e00\u4e2a\u7ba1\u9053\u7528\u4e8e\u622a\u53d6\u6570\u636e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@Pipe()\nexport class CutPipe implements PipeTransform {\n  transform(value: number, options:TransformOptions): string {\n    return String(value).splice(5);\n  }\n}\n")),(0,a.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u4ed6\u4eec\u4e86\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class UserService {\n  async invoke(@RegValid(/^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$/, CutPipe) phoneNumber: string) {\n    return phoneNumber;\n  }\n}\n\ninvoke(13712345678) => '345678'\n")),(0,a.kt)("h2",{id:"\u9ed8\u8ba4\u7ed1\u5b9a\u7684\u7ba1\u9053"},"\u9ed8\u8ba4\u7ed1\u5b9a\u7684\u7ba1\u9053"),(0,a.kt)("p",null,"\u5047\u5982\u6211\u4eec\u5e0c\u671b\u5411\u4e00\u4e2a\u73b0\u6210\u7684\u53c2\u6570\u88c5\u9970\u5668\u80fd\u62e5\u6709\u7ba1\u9053\u80fd\u529b\uff0c\u4f46\u662f\u4e0d\u5e0c\u671b\u8be5\u88c5\u9970\u5668\u6709\u7ba1\u9053\u53c2\u6570\u3002"),(0,a.kt)("p",null,"\u5c31\u50cf\u5185\u7f6e\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"@Query")," \u7b49\u88c5\u9970\u5668\uff0c\u6ca1\u6709\u7ba1\u9053\u53c2\u6570\uff0c\u5374\u53ef\u4ee5\u5728 validate \u7ec4\u4ef6\u542f\u7528\u65f6\u81ea\u52a8\u6267\u884c\u7ba1\u9053\u903b\u8f91\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"decoratorService")," \u63d0\u4f9b\u7684\u53cd\u5411\u6ce8\u518c API\uff0c\u8fd9\u5728\u8de8\u7ec4\u4ef6\u63d0\u4f9b\u80fd\u529b\u65f6\u975e\u5e38\u6709\u7528\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u4ee5\u4e0a\u9762\u7f16\u5199\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"RegValid")," \u4e3a\u4f8b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@Configuration({\n  // ...\n})\nexport class MainConfiguration {\n  @Inject()\n  decoratorService: MidwayDecoratorService;\n\n  async onReady(container: IMidwayContainer) {\n    // register default pipe\n    this.decoratorService.registerParameterPipes('reg-valid', [\n      CutPipe,\n    ]);\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"registerParameterPipes")," \u65b9\u6cd5\u7528\u4e8e\u5411\u67d0\u4e00\u79cd\u53c2\u6570\u88c5\u9970\u5668\u9690\u5f0f\u6ce8\u518c\u4e00\u4e9b\u7ba1\u9053\uff0c\u4e0a\u8ff0\u5b9e\u4f8b\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"reg-valid")," \u662f\u81ea\u5b9a\u4e49\u53c2\u6570\u7684 key\uff0c\u901a\u8fc7 key \u6211\u4eec\u53ef\u4ee5\u5411\u8fd9\u4e2a\u53c2\u6570\u88c5\u9970\u5668\u6ce8\u518c\u3002 "),(0,a.kt)("p",null,"\u8fd9\u4e9b\u7ba1\u9053\u4f1a\u5728\u663e\u5f0f\u4f20\u5165\u7684\u7ba1\u9053\u4e4b\u524d\u88ab\u9ed8\u8ba4\u6267\u884c\u3002"),(0,a.kt)("p",null,"\u8fd9\u6837\u5728\u4f7f\u7528\u65f6\uff0c\u5373\u4f7f\u6211\u4eec\u4e0d\u4f20\u9012\u7ba1\u9053\u53c2\u6570\uff0c\u4e5f\u4f9d\u65e7\u4f1a\u6267\u884c\u7ba1\u9053\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class UserService {\n  async invoke(@RegValid(/^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$/) phoneNumber: string) {\n    return phoneNumber;\n  }\n}\n\ninvoke(13712345678) => '345678'\n")))}u.isMDXComponent=!0}}]);