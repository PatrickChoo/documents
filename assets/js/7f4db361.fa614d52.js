"use strict";(self.webpackChunkonekey_document=self.webpackChunkonekey_document||[]).push([[6869],{6235:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return u},default:function(){return c}});var a=t(7462),r=t(3366),s=(t(7294),t(3905)),i=t(9216),o={hide_table_of_contents:!0},l=void 0,m={unversionedId:"Connect/Method List/ethereumSignMessage",id:"Connect/Method List/ethereumSignMessage",isDocsHomePage:!1,title:"ethereumSignMessage",description:"\u4ee5\u592a\u574a\uff1a\u7b7e\u540d\u6d88\u606f",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/Connect/Method List/ethereumSignMessage.mdx",sourceDirName:"Connect/Method List",slug:"/Connect/Method List/ethereumSignMessage",permalink:"/Connect/Method List/ethereumSignMessage",editUrl:"https://github.com/onekeyhq/documents/edit/main/docs/Connect/Method List/ethereumSignMessage.mdx",version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"ConnectSidebar",previous:{title:"ethereumGetAddress",permalink:"/Connect/Method List/ethereumGetAddress"},next:{title:"ethereumSignTransaction",permalink:"/Connect/Method List/ethereumSignTransaction"}},u=[{value:"\u4ee5\u592a\u574a\uff1a\u7b7e\u540d\u6d88\u606f",id:"\u4ee5\u592a\u574a\uff1a\u7b7e\u540d\u6d88\u606f",children:[{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",children:[]}]}],p={toc:u};function c(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"\u4ee5\u592a\u574a\uff1a\u7b7e\u540d\u6d88\u606f"},"\u4ee5\u592a\u574a\uff1a\u7b7e\u540d\u6d88\u606f"),(0,s.kt)("p",null,"\u8981\u6c42\u8bbe\u5907\u4f7f\u7528\u7531\u7ed9\u5b9a\u7684 ",(0,s.kt)("a",{parentName:"p",href:"https://cardanolaunch.com/assets/Ed25519_BIP.pdf"},"BIP32-Ed25519")," \u8def\u5f84\u6d3e\u751f\u7684\u79c1\u94a5\u5bf9\u7b7e\u540d\u6d88\u606f\u3002"),(0,s.kt)("p",null,"ES6"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const result = await OneKeyConnect.ethereumSignMessage(params);\n")),(0,s.kt)("p",null,"CommonJS"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.ethereumSignMessage(params).then(function(result) {\n\n});\n")),(0,s.kt)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"./commonParams"},(0,s.kt)("strong",{parentName:"a"},"\u53ef\u9009\u7684\u901a\u7528\u53c2\u6570"))),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/OneKeyHQ/connect/blob/onekey/src/js/types/params.js#L64-L67"},"\u53c2\u6570\u53ca\u7c7b\u578b")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"path")," - ",(0,s.kt)("em",{parentName:"li"},"\u5fc5\u586b")," ",(0,s.kt)("inlineCode",{parentName:"li"},"string | Array<number>"),"\u7684\u6700\u5c0f\u957f\u5ea6\u4e3a3\u3002 ",(0,s.kt)("a",{parentName:"li",href:"./path"},"\u4e86\u89e3\u66f4\u591a")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"message")," - ",(0,s.kt)("em",{parentName:"li"},"\u5fc5\u586b")," ",(0,s.kt)("inlineCode",{parentName:"li"},"string")," \u7528\u4e8e\u52a0\u5bc6\u7684\u7eaf\u6587\u672c\u6d88\u606f"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"hex")," - ",(0,s.kt)("em",{parentName:"li"},"\u53ef\u9009")," ",(0,s.kt)("inlineCode",{parentName:"li"},"boolean")," \u4ece 16 \u8fdb\u5236\u8f6c\u6362\u51fa\u6d88\u606f")),(0,s.kt)("h3",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/OneKeyHQ/connect/blob/onekey/src/js/types/response.js#L47-L50"},"\u53c2\u6570\u53ca\u7c7b\u578b")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'OneKeyConnect.ethereumSignMessage({\n    path: "m/44\'/60\'/0\'",\n    message: "example message"\n});\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: true,\n    payload: {\n        address: string,\n        signature: string,\n    }\n}\n")),(0,s.kt)("p",null,"\u9519\u8bef\u8fd4\u56de\u503c"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: false,\n    payload: {\n        error: string // error message\n    }\n}\n")),(0,s.kt)(i.Z,{initValue:'OneKeyConnect.ethereumSignMessage({\n    path: "m/44\'/60\'/0\'",\n    message: "example message"\n});',mdxType:"Playground"}))}c.isMDXComponent=!0}}]);