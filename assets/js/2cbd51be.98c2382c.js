"use strict";(self.webpackChunkonekey_document=self.webpackChunkonekey_document||[]).push([[479],{7127:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var a=t(7462),i=t(3366),r=(t(7294),t(3905)),c=t(9216),o={hide_table_of_contents:!0,draft:!0},s=void 0,l={unversionedId:"Connect/Method List/binanceSignTransaction",id:"Connect/Method List/binanceSignTransaction",isDocsHomePage:!1,title:"binanceSignTransaction",description:"\uff08\u5728 OneKey Pro \u4e0a\u652f\u6301\uff09",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/Connect/Method List/binanceSignTransaction.mdx",sourceDirName:"Connect/Method List",slug:"/Connect/Method List/binanceSignTransaction",permalink:"/Connect/Method List/binanceSignTransaction",editUrl:"https://github.com/onekeyhq/documents/edit/main/docs/Connect/Method List/binanceSignTransaction.mdx",version:"current",frontMatter:{hide_table_of_contents:!0,draft:!0}},u=[{value:"Binance\uff1a\u7b7e\u7f72\u4ea4\u6613",id:"binance\uff1a\u7b7e\u7f72\u4ea4\u6613",children:[{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u8f6c\u8d26\u793a\u4f8b",id:"\u8f6c\u8d26\u793a\u4f8b",children:[]},{value:"\u4e0b\u8ba2\u5355\u793a\u4f8b",id:"\u4e0b\u8ba2\u5355\u793a\u4f8b",children:[]},{value:"\u53d6\u6d88\u8ba2\u5355\u793a\u4f8b",id:"\u53d6\u6d88\u8ba2\u5355\u793a\u4f8b",children:[]},{value:"\u7ed3\u679c",id:"\u7ed3\u679c",children:[]}]}],p={toc:u};function d(n){var e=n.components,t=(0,i.Z)(n,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\uff08\u5728 OneKey Pro \u4e0a\u652f\u6301\uff09"),(0,r.kt)("h2",{id:"binance\uff1a\u7b7e\u7f72\u4ea4\u6613"},"Binance\uff1a\u7b7e\u7f72\u4ea4\u6613"),(0,r.kt)("p",null,"\u8981\u6c42\u8bbe\u5907\u4f7f\u7528\u7ed9\u5b9a\u7684 ",(0,r.kt)("a",{parentName:"p",href:"./path"},"BIP44\u8def\u5f84")," \u6d3e\u751f\u7684\u79c1\u94a5\u5bf9\u7ed9\u5b9a\u7684\u4ea4\u6613\u8fdb\u884c\u7b7e\u540d\u3002"),(0,r.kt)("p",null,"\u8981\u6c42\u7528\u6237\u5728 OneKey \u4e0a\u786e\u8ba4\u6240\u6709\u4ea4\u6613\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,r.kt)("p",null,"ES6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const result = await OneKeyConnect.binanceSignTransaction(params);\n")),(0,r.kt)("p",null,"CommonJS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.binanceSignTransaction(params).then(function(result) {\n\n});\n")),(0,r.kt)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./commonParams"},(0,r.kt)("strong",{parentName:"a"},"\u53ef\u9009\u7684\u901a\u7528\u53c2\u6570"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path")," - ",(0,r.kt)("em",{parentName:"li"},"\u5fc5\u586b")," ",(0,r.kt)("inlineCode",{parentName:"li"},"string | Array<number>")," \u7684\u6700\u5c0f\u957f\u5ea6\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"5"),"\u3002 ",(0,r.kt)("a",{parentName:"li",href:"./path"},"\u4e86\u89e3\u66f4\u591a")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transaction")," - ",(0,r.kt)("em",{parentName:"li"},"\u5fc5\u586b")," \u5bf9\u8c61\u7c7b\u578b\u7684 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OneKeyHQ/connect/blob/onekey/src/js/types/binance.js#L61-71"},"transaction")," \u662f\u5fc5\u586b\u9879")),(0,r.kt)("h3",{id:"\u8f6c\u8d26\u793a\u4f8b"},"\u8f6c\u8d26\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.binanceSignTransaction({\n    path: \"m/44'/714'/0'/0/0\",\n    transaction: {\n        chain_id: 'Binance-Chain-Nile',\n        account_number: 34,\n        memo: 'test',\n        sequence: 31,\n        source: 1,\n        transfer: {\n            inputs: [\n                {\n                    address: 'tbnb1hgm0p7khfk85zpz5v0j8wnej3a90w709zzlffd',\n                    coins: [\n                        { amount: 1000000000, denom: 'BNB' },\n                    ],\n                },\n            ],\n            outputs: [\n                {\n                    address: 'tbnb1ss57e8sa7xnwq030k2ctr775uac9gjzglqhvpy',\n                    coins: [\n                        { amount: 1000000000, denom: 'BNB' },\n                    ],\n                },\n            ],\n        },\n    },\n});\n")),(0,r.kt)("h3",{id:"\u4e0b\u8ba2\u5355\u793a\u4f8b"},"\u4e0b\u8ba2\u5355\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.binanceSignTransaction({\n    path: \"m/44'/714'/0'/0/0\",\n    transaction: {\n        chain_id: 'Binance-Chain-Nile',\n        account_number: 34,\n        memo: '',\n        sequence: 32,\n        source: 1,\n        placeOrder: {\n            id: 'BA36F0FAD74D8F41045463E4774F328F4AF779E5-33',\n            ordertype: 2,\n            price: 100000000,\n            quantity: 100000000,\n            sender: 'tbnb1hgm0p7khfk85zpz5v0j8wnej3a90w709zzlffd',\n            side: 1,\n            symbol: 'ADA.B-B63_BNB',\n            timeinforce: 1,\n        },\n    },\n});\n")),(0,r.kt)("h3",{id:"\u53d6\u6d88\u8ba2\u5355\u793a\u4f8b"},"\u53d6\u6d88\u8ba2\u5355\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.binanceSignTransaction({\n    path: \"m/44'/714'/0'/0/0\",\n    transaction: {\n        chain_id: 'Binance-Chain-Nile',\n        account_number: 34,\n        memo: '',\n        sequence: 33,\n        source: 1,\n        cancelOrder: {\n            refid: 'BA36F0FAD74D8F41045463E4774F328F4AF779E5-29',\n            sender: 'tbnb1hgm0p7khfk85zpz5v0j8wnej3a90w709zzlffd',\n            symbol: 'BCHSV.B-10F_BNB',\n        },\n    },\n});\n")),(0,r.kt)("h3",{id:"\u7ed3\u679c"},"\u7ed3\u679c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: true,\n    payload: {\n        signature: string,\n        public_key: string,\n    }\n}\n")),(0,r.kt)("p",null,"\u9519\u8bef"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: false,\n    payload: {\n        error: string // error message\n    }\n}\n")),(0,r.kt)(c.Z,{initValue:"OneKeyConnect.binanceSignTransaction({\n    path: \"m/44'/714'/0'/0/0\",\n    transaction: {\n        chain_id: 'Binance-Chain-Nile',\n        account_number: 34,\n        memo: '',\n        sequence: 32,\n        source: 1,\n        placeOrder: {\n            id: 'BA36F0FAD74D8F41045463E4774F328F4AF779E5-33',\n            ordertype: 2,\n            price: 100000000,\n            quantity: 100000000,\n            sender: 'tbnb1hgm0p7khfk85zpz5v0j8wnej3a90w709zzlffd',\n            side: 1,\n            symbol: 'ADA.B-B63_BNB',\n            timeinforce: 1,\n        },\n    },\n});",mdxType:"Playground"}))}d.isMDXComponent=!0}}]);