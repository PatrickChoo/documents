"use strict";(self.webpackChunkonekey_document=self.webpackChunkonekey_document||[]).push([[583],{5107:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=t(7462),i=t(3366),l=(t(7294),t(3905)),r=t(9216),s={hide_table_of_contents:!0},o=void 0,c={unversionedId:"Connect/Method List/liskGetPublicKey",id:"Connect/Method List/liskGetPublicKey",isDocsHomePage:!1,title:"liskGetPublicKey",description:"Lisk\uff1a\u83b7\u53d6\u516c\u94a5",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/Connect/Method List/liskGetPublicKey.mdx",sourceDirName:"Connect/Method List",slug:"/Connect/Method List/liskGetPublicKey",permalink:"/Connect/Method List/liskGetPublicKey",editUrl:"https://github.com/onekeyhq/documents/edit/main/docs/Connect/Method List/liskGetPublicKey.mdx",version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"ConnectSidebar",previous:{title:"liskGetAddress",permalink:"/Connect/Method List/liskGetAddress"},next:{title:"liskSignMessage",permalink:"/Connect/Method List/liskSignMessage"}},u=[{value:"Lisk\uff1a\u83b7\u53d6\u516c\u94a5",id:"lisk\uff1a\u83b7\u53d6\u516c\u94a5",children:[{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",children:[]},{value:"\u7ed3\u679c",id:"\u7ed3\u679c",children:[]}]}],p={toc:u};function d(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"lisk\uff1a\u83b7\u53d6\u516c\u94a5"},"Lisk\uff1a\u83b7\u53d6\u516c\u94a5"),(0,l.kt)("p",null,"\u83b7\u53d6\u6307\u5b9a BIP32 \u8def\u5f84\u7684\u6d3e\u751f\u6269\u5c55\u7684\u516c\u94a5\u3002\u4f1a\u5411\u7528\u6237\u663e\u793a\u8bf7\u6c42\u5bc6\u94a5\u7684\u63cf\u8ff0\uff0c\u8981\u6c42\u7528\u6237\u624b\u52a8\u5728 Onekey \u4e0a\u786e\u8ba4\u5bfc\u51fa\u7684\u516c\u94a5\u3002"),(0,l.kt)("p",null,"ES6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const result = await OneKeyConnect.liskGetPublicKey(params);\n")),(0,l.kt)("p",null,"CommonJS"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.liskGetPublicKey(params).then(function(result) {\n\n});\n")),(0,l.kt)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"./commonParams"},(0,l.kt)("strong",{parentName:"a"},"\u53ef\u9009\u7684\u901a\u7528\u53c2\u6570"))),(0,l.kt)("h4",{id:"\u5bfc\u51fa\u5355\u4e2a\u5730\u5740"},"\u5bfc\u51fa\u5355\u4e2a\u5730\u5740"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"path")," - ",(0,l.kt)("em",{parentName:"li"},"\u5fc5\u586b")," ",(0,l.kt)("inlineCode",{parentName:"li"},"string | Array<number>")," \u7684\u6700\u5c0f\u957f\u5ea6\u4e3a 3\u3002 ",(0,l.kt)("a",{parentName:"li",href:"./path"},"\u4e86\u89e3\u66f4\u591a")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"showOnOneKey")," - ",(0,l.kt)("em",{parentName:"li"},"\u53ef\u9009")," ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")," \u51b3\u5b9a\u662f\u5426\u5728\u8bbe\u5907\u4e0a\u663e\u793a\u5730\u5740\u3002 \u9ed8\u8ba4\u8bbe\u7f6e\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"false"))),(0,l.kt)("h4",{id:"\u6279\u91cf\u83b7\u53d6\u516c\u94a5"},"\u6279\u91cf\u83b7\u53d6\u516c\u94a5"),(0,l.kt)("p",null,"*",(0,l.kt)("inlineCode",{parentName:"p"},"bundle")," - ",(0,l.kt)("inlineCode",{parentName:"p"},"array")," \u5177\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"path")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"showOnOneKey")," \u5b57\u6bb5\u7684\u5bf9\u8c61"),(0,l.kt)("h3",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,l.kt)("p",null,"\u83b7\u53d6\u7b2c\u4e00\u4e2a\u5730\u5740"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.liskGetPublicKey({\n    path: \"m/44'/134'/0'/0'/0'\"\n});\n")),(0,l.kt)("p",null,"\u8fd4\u56de\u591a\u4e2a\u5730\u5740\u4e14\u65e0\u9700\u7528\u6237\u5728\u8bbe\u5907\u4e0a\u786e\u8ba4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.liskGetPublicKey({\n    bundle: [\n        { path: \"m/44'/134'/0'/0'/0'\", showOnOneKey: false }, // account 1\n        { path: \"m/44'/134'/0'/0'/1'\", showOnOneKey: false }, // account 2\n        { path: \"m/44'/134'/0'/0'/2'\", showOnOneKey: false }  // account 3\n    ]\n});\n")),(0,l.kt)("h3",{id:"\u7ed3\u679c"},"\u7ed3\u679c"),(0,l.kt)("p",null,"\u5355\u4e2a\u67e5\u8be2\u7ed3\u679c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: true,\n    payload: {\n        publicKey: string,     // displayed address\n        path: Array<number>, // hardended path\n        serializedPath: string,\n    }\n}\n")),(0,l.kt)("p",null,"\u6279\u91cf\u67e5\u8be2\u7684\u7ed3\u679c\u662f\u6309\u5148\u8fdb\u5148\u51fa\u539f\u5219\u6392\u5217"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: true,\n    payload: [\n        { publicKey: string, path: Array<number>, serializedPath: string }, // account 1\n        { publicKey: string, path: Array<number>, serializedPath: string }, // account 2\n        { publicKey: string, path: Array<number>, serializedPath: string }  // account 3\n    ]\n}\n")),(0,l.kt)("p",null,"\u9519\u8bef"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: false,\n    payload: {\n        error: string // error message\n    }\n}\n")),(0,l.kt)(r.Z,{initValue:"OneKeyConnect.liskGetPublicKey({\n    path: \"m/44'/134'/0'/0'/0'\"\n});",mdxType:"Playground"}))}d.isMDXComponent=!0}}]);