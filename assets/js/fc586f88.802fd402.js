"use strict";(self.webpackChunkonekey_document=self.webpackChunkonekey_document||[]).push([[3711],{9559:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return o},toc:function(){return p},default:function(){return u}});var a=t(7462),s=t(3366),i=(t(7294),t(3905)),r=t(9216),l={hide_table_of_contents:!0},c=void 0,o={unversionedId:"Connect/Method List/liskVerifyMessage",id:"Connect/Method List/liskVerifyMessage",isDocsHomePage:!1,title:"liskVerifyMessage",description:"Lisk\uff1a\u9a8c\u8bc1\u6d88\u606f",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/Connect/Method List/liskVerifyMessage.mdx",sourceDirName:"Connect/Method List",slug:"/Connect/Method List/liskVerifyMessage",permalink:"/Connect/Method List/liskVerifyMessage",editUrl:"https://github.com/onekeyhq/documents/edit/main/docs/Connect/Method List/liskVerifyMessage.mdx",version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"ConnectSidebar",previous:{title:"liskSignTransaction",permalink:"/Connect/Method List/liskSignTransaction"},next:{title:"nemGetAddress",permalink:"/Connect/Method List/nemGetAddress"}},p=[{value:"Lisk\uff1a\u9a8c\u8bc1\u6d88\u606f",id:"lisk\uff1a\u9a8c\u8bc1\u6d88\u606f",children:[{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"Example",id:"example",children:[]},{value:"\u7ed3\u679c",id:"\u7ed3\u679c",children:[]}]}],d={toc:p};function u(e){var n=e.components,t=(0,s.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"lisk\uff1a\u9a8c\u8bc1\u6d88\u606f"},"Lisk\uff1a\u9a8c\u8bc1\u6d88\u606f"),(0,i.kt)("p",null,"\u5728\u8bbe\u5907\u8be2\u95ee\u662f\u5426\u4f7f\u7528\u516c\u94a5\u548c\u7b7e\u540d\u6765\u9a8c\u8bc1\u6d88\u606f\u3002"),(0,i.kt)("p",null,"ES6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const result = await OneKeyConnect.liskVerifyMessage(params);\n")),(0,i.kt)("p",null,"CommonJS"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.liskVerifyMessage(params).then(function (result) {\n\n});\n")),(0,i.kt)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"./commonParams"},(0,i.kt)("strong",{parentName:"a"},"\u53ef\u9009\u7684\u901a\u7528\u53c2\u6570"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/OneKeyHQ/connect/blob/onekey/src/js/types/lisk.js#L133-L137"},"\u53c2\u6570\u53ca\u7c7b\u578b")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"publicKey")," - ",(0,i.kt)("em",{parentName:"li"},"\u5fc5\u586b")," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," \u7b7e\u540d\u8005\u516c\u94a5\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"signature")," - ",(0,i.kt)("em",{parentName:"li"},"\u5fc5\u586b")," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," \u6d88\u606f\u7b7e\u540d"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"message")," - ",(0,i.kt)("em",{parentName:"li"},"\u5fc5\u987b")," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," \u88ab\u7b7e\u540d\u7684\u6587\u672c\u6d88\u606f")),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.ethereumVerifyMessage({\n  publicKey: 'bf70027c9e4cea4584bd6016748c21e350708b2c166bf61ea78a147b5ff320ae',\n  signature:\n    'd39843f39983cf42609d1667f1c5a7958d8aef6b06880b93f67833630113a11c6847607a184d17da24bfaf799afc45fdcf2abef34142a23cabeb0d11374ac103',\n  message: 'example message',\n});\n")),(0,i.kt)("h3",{id:"\u7ed3\u679c"},"\u7ed3\u679c"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/OneKeyHQ/connect/blob/onekey/src/js/types/lisk.js#L139-L142"},"\u53c2\u6570\u53ca\u7c7b\u578b")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    success: true,\n    payload: {\n        message: "Message verified"\n    }\n}\n')),(0,i.kt)("p",null,"\u9519\u8bef"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: false,\n    payload: {\n        error: string // error message\n    }\n}\n")),(0,i.kt)(r.Z,{initValue:'OneKeyConnect.ethereumVerifyMessage({\n    publicKey: "bf70027c9e4cea4584bd6016748c21e350708b2c166bf61ea78a147b5ff320ae",\n    signature: "d39843f39983cf42609d1667f1c5a7958d8aef6b06880b93f67833630113a11c6847607a184d17da24bfaf799afc45fdcf2abef34142a23cabeb0d11374ac103",\n    message: "example message",\n});',mdxType:"Playground"}))}u.isMDXComponent=!0}}]);