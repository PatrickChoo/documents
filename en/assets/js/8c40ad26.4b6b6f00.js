"use strict";(self.webpackChunkonekey_document=self.webpackChunkonekey_document||[]).push([[2951],{7173:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return k}});var a=t(7462),i=t(3366),s=(t(7294),t(3905)),r=t(9216),o={hide_table_of_contents:!0},l=void 0,c={unversionedId:"Connect/Method List/liskSignTransaction",id:"Connect/Method List/liskSignTransaction",isDocsHomePage:!1,title:"liskSignTransaction",description:"Lisk: Sign transaction",source:"@site/docs/Connect/Method List/liskSignTransaction.mdx",sourceDirName:"Connect/Method List",slug:"/Connect/Method List/liskSignTransaction",permalink:"/en/Connect/Method List/liskSignTransaction",editUrl:"https://github.com/onekeyhq/documents/edit/main/docs/Connect/Method List/liskSignTransaction.mdx",version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"ConnectSidebar",previous:{title:"liskSignMessage",permalink:"/en/Connect/Method List/liskSignMessage"},next:{title:"liskVerifyMessage",permalink:"/en/Connect/Method List/liskVerifyMessage"}},p=[{value:"Lisk: Sign transaction",id:"lisk-sign-transaction",children:[{value:"Params",id:"params",children:[]},{value:"Example",id:"example",children:[]},{value:"Result",id:"result",children:[]}]}],m={toc:p};function k(n){var e=n.components,t=(0,i.Z)(n,["components"]);return(0,s.kt)("wrapper",(0,a.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"lisk-sign-transaction"},"Lisk: Sign transaction"),(0,s.kt)("p",null,"Asks device to sign given transaction using the private key derived by given BIP32 path. User is asked to confirm all transaction\ndetails on OneKey."),(0,s.kt)("p",null,"ES6"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const result = await OneKeyConnect.liskSignTransaction(params);\n")),(0,s.kt)("p",null,"CommonJS"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.liskSignTransaction(params).then(function(result) {\n\n});\n")),(0,s.kt)("h3",{id:"params"},"Params"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"./commonParams"},(0,s.kt)("strong",{parentName:"a"},"Optional common params"))),(0,s.kt)("h6",{id:"flowtype"},(0,s.kt)("a",{parentName:"h6",href:"https://github.com/OneKeyHQ/connect/blob/onekey/src/js/types/lisk.js#L121-L124"},"flowtype")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"path")," \u2014 ",(0,s.kt)("em",{parentName:"li"},"required")," ",(0,s.kt)("inlineCode",{parentName:"li"},"string | Array<number>")," minimum length is ",(0,s.kt)("inlineCode",{parentName:"li"},"3"),". ",(0,s.kt)("a",{parentName:"li",href:"./path"},"read more")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"transaction")," - ",(0,s.kt)("em",{parentName:"li"},"required")," ",(0,s.kt)("inlineCode",{parentName:"li"},"Object")," type of ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/OneKeyHQ/connect/blob/onekey/src/js/types/lisk.js#42-L52"},"LiskTransaction"))),(0,s.kt)("h3",{id:"example"},"Example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'OneKeyConnect.liskSignTransaction(\n    path: "m/44\'/134\'/0\'/0\'",\n    transaction: {\n        amount: "10000000",\n        recipientId: "9971262264659915921L",\n        timestamp: 57525937,\n        type: 0,\n        fee: "20000000",\n        asset: {\n            data: "Test data"\n        }\n    }\n);\n')),(0,s.kt)("h3",{id:"result"},"Result"),(0,s.kt)("h6",{id:"flowtype-1"},(0,s.kt)("a",{parentName:"h6",href:"https://github.com/OneKeyHQ/connect/blob/onekey/src/js/types/lisk.js#L126-L129"},"flowtype")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: true,\n    payload: {\n        signature: string\n    }\n}\n")),(0,s.kt)("p",null,"Error"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: false,\n    payload: {\n        error: string // error message\n    }\n}\n")),(0,s.kt)(r.Z,{initValue:'OneKeyConnect.liskSignTransaction({\n    path: "m/44\'/134\'/0\'/0\'",\n        transaction: {\n            amount: "10000000",\n            recipientId: "9971262264659915921L",\n            timestamp: 57525937,\n            type: 0,\n            fee: "20000000",\n            asset: {\n                data: "Test data"\n            }\n        }\n    }\n);',mdxType:"Playground"}))}k.isMDXComponent=!0}}]);