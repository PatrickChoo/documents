"use strict";(self.webpackChunkonekey_document=self.webpackChunkonekey_document||[]).push([[561],{2169:function(n,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var t=a(7462),r=a(3366),i=(a(7294),a(3905)),c=a(9216),o={hide_table_of_contents:!0,draft:!0},s=void 0,l={unversionedId:"Connect/Method List/binanceSignTransaction",id:"Connect/Method List/binanceSignTransaction",isDocsHomePage:!1,title:"binanceSignTransaction",description:"\uff08OneKey Pro supported\uff09",source:"@site/docs/Connect/Method List/binanceSignTransaction.mdx",sourceDirName:"Connect/Method List",slug:"/Connect/Method List/binanceSignTransaction",permalink:"/en/Connect/Method List/binanceSignTransaction",editUrl:"https://github.com/onekeyhq/documents/edit/main/docs/Connect/Method List/binanceSignTransaction.mdx",version:"current",frontMatter:{hide_table_of_contents:!0,draft:!0}},p=[{value:"Binance: sign transaction",id:"binance-sign-transaction",children:[{value:"Params",id:"params",children:[]},{value:"Transfer example",id:"transfer-example",children:[]},{value:"Place order example",id:"place-order-example",children:[]},{value:"Cancel order example",id:"cancel-order-example",children:[]},{value:"Result",id:"result",children:[]}]}],m={toc:p};function d(n){var e=n.components,a=(0,r.Z)(n,["components"]);return(0,i.kt)("wrapper",(0,t.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\uff08OneKey Pro supported\uff09"),(0,i.kt)("h2",{id:"binance-sign-transaction"},"Binance: sign transaction"),(0,i.kt)("p",null,"Asks device to sign given transaction using the private key derived by given ",(0,i.kt)("a",{parentName:"p",href:"./path"},"BIP44 path"),". User is asked to confirm all transaction\ndetails on OneKey."),(0,i.kt)("p",null,"ES6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const result = await OneKeyConnect.binanceSignTransaction(params);\n")),(0,i.kt)("p",null,"CommonJS"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.binanceSignTransaction(params).then(function(result) {\n\n});\n")),(0,i.kt)("h3",{id:"params"},"Params"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"./commonParams"},(0,i.kt)("strong",{parentName:"a"},"Optional common params"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path")," \u2014 ",(0,i.kt)("em",{parentName:"li"},"required")," ",(0,i.kt)("inlineCode",{parentName:"li"},"string | Array<number>")," minimum length is ",(0,i.kt)("inlineCode",{parentName:"li"},"5"),". ",(0,i.kt)("a",{parentName:"li",href:"./path"},"read more")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"transaction")," - ",(0,i.kt)("em",{parentName:"li"},"required")," ",(0,i.kt)("inlineCode",{parentName:"li"},"Object")," type of ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OneKeyHQ/connect/blob/onekey/src/js/types/binance.js#L61-71"},"transaction"))),(0,i.kt)("h3",{id:"transfer-example"},"Transfer example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.binanceSignTransaction({\n    path: \"m/44'/714'/0'/0/0\",\n    transaction: {\n        chain_id: 'Binance-Chain-Nile',\n        account_number: 34,\n        memo: 'test',\n        sequence: 31,\n        source: 1,\n        transfer: {\n            inputs: [\n                {\n                    address: 'tbnb1hgm0p7khfk85zpz5v0j8wnej3a90w709zzlffd',\n                    coins: [\n                        { amount: 1000000000, denom: 'BNB' },\n                    ],\n                },\n            ],\n            outputs: [\n                {\n                    address: 'tbnb1ss57e8sa7xnwq030k2ctr775uac9gjzglqhvpy',\n                    coins: [\n                        { amount: 1000000000, denom: 'BNB' },\n                    ],\n                },\n            ],\n        },\n    },\n});\n")),(0,i.kt)("h3",{id:"place-order-example"},"Place order example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.binanceSignTransaction({\n    path: \"m/44'/714'/0'/0/0\",\n    transaction: {\n        chain_id: 'Binance-Chain-Nile',\n        account_number: 34,\n        memo: '',\n        sequence: 32,\n        source: 1,\n        placeOrder: {\n            id: 'BA36F0FAD74D8F41045463E4774F328F4AF779E5-33',\n            ordertype: 2,\n            price: 100000000,\n            quantity: 100000000,\n            sender: 'tbnb1hgm0p7khfk85zpz5v0j8wnej3a90w709zzlffd',\n            side: 1,\n            symbol: 'ADA.B-B63_BNB',\n            timeinforce: 1,\n        },\n    },\n});\n")),(0,i.kt)("h3",{id:"cancel-order-example"},"Cancel order example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.binanceSignTransaction({\n    path: \"m/44'/714'/0'/0/0\",\n    transaction: {\n        chain_id: 'Binance-Chain-Nile',\n        account_number: 34,\n        memo: '',\n        sequence: 33,\n        source: 1,\n        cancelOrder: {\n            refid: 'BA36F0FAD74D8F41045463E4774F328F4AF779E5-29',\n            sender: 'tbnb1hgm0p7khfk85zpz5v0j8wnej3a90w709zzlffd',\n            symbol: 'BCHSV.B-10F_BNB',\n        },\n    },\n});\n")),(0,i.kt)("h3",{id:"result"},"Result"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: true,\n    payload: {\n        signature: string,\n        public_key: string,\n    }\n}\n")),(0,i.kt)("p",null,"Error"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: false,\n    payload: {\n        error: string // error message\n    }\n}\n")),(0,i.kt)(c.Z,{initValue:"OneKeyConnect.binanceSignTransaction({\n    path: \"m/44'/714'/0'/0/0\",\n    transaction: {\n        chain_id: 'Binance-Chain-Nile',\n        account_number: 34,\n        memo: '',\n        sequence: 32,\n        source: 1,\n        placeOrder: {\n            id: 'BA36F0FAD74D8F41045463E4774F328F4AF779E5-33',\n            ordertype: 2,\n            price: 100000000,\n            quantity: 100000000,\n            sender: 'tbnb1hgm0p7khfk85zpz5v0j8wnej3a90w709zzlffd',\n            side: 1,\n            symbol: 'ADA.B-B63_BNB',\n            timeinforce: 1,\n        },\n    },\n});",mdxType:"Playground"}))}d.isMDXComponent=!0}}]);