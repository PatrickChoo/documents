"use strict";(self.webpackChunkonekey_document=self.webpackChunkonekey_document||[]).push([[56],{3745:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var t=a(7462),r=a(3366),d=(a(7294),a(3905)),s=a(9216),i={hide_table_of_contents:!0,draft:!0},o=void 0,l={unversionedId:"Connect/Method List/cardanoGetAddress",id:"Connect/Method List/cardanoGetAddress",isDocsHomePage:!1,title:"cardanoGetAddress",description:"Cardano\uff1a\u83b7\u53d6\u5730\u5740",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/Connect/Method List/cardanoGetAddress.mdx",sourceDirName:"Connect/Method List",slug:"/Connect/Method List/cardanoGetAddress",permalink:"/Connect/Method List/cardanoGetAddress",editUrl:"https://github.com/onekeyhq/documents/edit/main/docs/Connect/Method List/cardanoGetAddress.mdx",version:"current",frontMatter:{hide_table_of_contents:!0,draft:!0}},p=[{value:"Cardano\uff1a\u83b7\u53d6\u5730\u5740",id:"cardano\uff1a\u83b7\u53d6\u5730\u5740",children:[{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c",children:[]}]}],c={toc:p};function m(e){var n=e.components,a=(0,r.Z)(e,["components"]);return(0,d.kt)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,d.kt)("h2",{id:"cardano\uff1a\u83b7\u53d6\u5730\u5740"},"Cardano\uff1a\u83b7\u53d6\u5730\u5740"),(0,d.kt)("p",null,"\u5728\u8bbe\u5907\u4e0a\u663e\u793a\u7531\u7ed9\u5b9a\u7684 ",(0,d.kt)("a",{parentName:"p",href:"https://cardanolaunch.com/assets/Ed25519_BIP.pdf"},"BIP32-Ed25519")," \u8def\u5f84\u6d3e\u751f\u7684\u8bf7\u6c42\u5730\u5740\uff0c\u5e76\u5c06\u5176\u8fd4\u56de\u7ed9\u8c03\u7528\u65b9\u3002"),(0,d.kt)("p",null,"\u5411\u7528\u6237\u663e\u793a\u6240\u8bf7\u6c42\u5bc6\u94a5\u7684\u63cf\u8ff0\uff0c\u5e76\u8981\u6c42\u786e\u8ba4 OneKey \u4e0a\u5bfc\u51fa\u3002"),(0,d.kt)("p",null,"ES6"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-javascript"},"const result = await OneKeyConnect.cardanoGetAddress(params);\n")),(0,d.kt)("p",null,"CommonJS"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.cardanoGetAddress(params).then(function(result) {\n\n});\n")),(0,d.kt)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"./commonParams"},(0,d.kt)("strong",{parentName:"a"},"\u53ef\u9009\u7684\u901a\u7528\u53c2\u6570"))),(0,d.kt)("h4",{id:"\u5bfc\u51fa\u5355\u4e2a\u5730\u5740"},"\u5bfc\u51fa\u5355\u4e2a\u5730\u5740"),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("inlineCode",{parentName:"li"},"addressParameters")," - ",(0,d.kt)("em",{parentName:"li"},"\u5fc5\u586b"),"\uff0c\u8bf7\u53c2\u89c1\u4e0b\u9762\u7684\u63cf\u8ff0"),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("inlineCode",{parentName:"li"},"address")," - ",(0,d.kt)("em",{parentName:"li"},"\u53ef\u9009")," ",(0,d.kt)("inlineCode",{parentName:"li"},"string")," \u7528\u4e8e\u9a8c\u8bc1\u7684\u5730\u5740\uff08\u8bf7\u53c2\u9605\u4e0b\u9762\u7684\u300c\u5904\u7406\u6309\u94ae\u8bf7\u6c42\u300d\u90e8\u5206\uff09"),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("inlineCode",{parentName:"li"},"protocolMagic")," - ",(0,d.kt)("em",{parentName:"li"},"\u5fc5\u586b")," ",(0,d.kt)("inlineCode",{parentName:"li"},"Integer")," 764824073\uff08\u7528\u4e8e\u4e3b\u7f51\uff09\uff0c42\uff08\u7528\u4e8eTestnet\uff09"),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("inlineCode",{parentName:"li"},"networkId")," - ",(0,d.kt)("em",{parentName:"li"},"\u5fc5\u586b")," ",(0,d.kt)("inlineCode",{parentName:"li"},"Integer")," 1 \u4ee3\u8868 Mainnet\uff0c0 \u4ee3\u8868 Testnet"),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("inlineCode",{parentName:"li"},"showOnOneKey")," - ",(0,d.kt)("em",{parentName:"li"},"\u53ef\u9009")," ",(0,d.kt)("inlineCode",{parentName:"li"},"boolean")," \u51b3\u5b9a\u662f\u5426\u5728\u8bbe\u5907\u4e0a\u663e\u793a\u5730\u5740\uff0c\u9ed8\u8ba4\u8bbe\u7f6e\u4e3a ",(0,d.kt)("inlineCode",{parentName:"li"},"true"),"\u3002")),(0,d.kt)("h4",{id:"\u5bfc\u51fa\u5730\u5740\u7ec4\u5408"},"\u5bfc\u51fa\u5730\u5740\u7ec4\u5408"),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("inlineCode",{parentName:"li"},"bundle")," - \u5177\u6709\u5355\u4e2a\u5730\u5740\u5b57\u6bb5\u7684\u5bf9\u8c61\u6570\u7ec4")),(0,d.kt)("h4",{id:"\u5730\u5740\u53c2\u6570"},"\u5730\u5740\u53c2\u6570"),(0,d.kt)("h6",{id:"\u53c2\u6570\u53ca\u7c7b\u578b"},(0,d.kt)("a",{parentName:"h6",href:"https://github.com/OneKeyHQ/connect/blob/onekey/src/js/types/networks/cardano.js#L37-L43"},"\u53c2\u6570\u53ca\u7c7b\u578b")),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("inlineCode",{parentName:"li"},"addressType")," - ",(0,d.kt)("em",{parentName:"li"},"\u5fc5\u586b"),(0,d.kt)("inlineCode",{parentName:"li"}," CardanoAddressType"),"/",(0,d.kt)("inlineCode",{parentName:"li"},"number"),"\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,d.kt)("inlineCode",{parentName:"li"},"CARDANO.ADDRESS_TYPE")," \u5bf9\u8c61\u6216\u4f7f\u7528 ",(0,d.kt)("inlineCode",{parentName:"li"},"CardanoAddressType")," \u679a\u4e3e\u3002\u652f\u6301 \u300cBase address\u300d\u300cPointer address\u300d\u300cEnterprise address\u300d,\u300cByron\u300d \u548c \u300cReward address\u300d \u8fd9\u4e9b\u7c7b\u578b\u3002"),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("inlineCode",{parentName:"li"},"path")," - ",(0,d.kt)("em",{parentName:"li"},"\u5fc5\u586b")," ",(0,d.kt)("inlineCode",{parentName:"li"},"string | Array<number>")," \u7684\u6700\u5c0f\u957f\u5ea6\u4e3a 5\u3002 ",(0,d.kt)("a",{parentName:"li",href:"./path"},"\u4e86\u89e3\u66f4\u591a")),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("inlineCode",{parentName:"li"},"stakingPath")," - ",(0,d.kt)("em",{parentName:"li"},"\u53ef\u9009")," ",(0,d.kt)("inlineCode",{parentName:"li"},"string | Array<number>")," \u7684\u6700\u5c0f\u957f\u5ea6\u4e3a 5\u3002 ",(0,d.kt)("a",{parentName:"li",href:"./path"},"\u66f4\u591a")," \u7528\u4e8e\u57fa\u5730\u5740\u6d3e\u751f\u3002"),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("inlineCode",{parentName:"li"},"stakingKeyHash")," - ",(0,d.kt)("em",{parentName:"li"},"\u53ef\u9009")," ",(0,d.kt)("inlineCode",{parentName:"li"},"string")," \u5341\u516d\u8fdb\u5236\u5bc6\u94a5\u7684\u5b57\u7b26\u4e32\u3002\u7528\u4e8e\u57fa\u5730\u5740\u6d3e\u751f\uff08\u4f5c\u4e3a ",(0,d.kt)("inlineCode",{parentName:"li"},"stakingPath")," \u7684\u66ff\u4ee3\u54c1\uff09\u3002"),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("inlineCode",{parentName:"li"},"certificatePointer")," - ",(0,d.kt)("em",{parentName:"li"},"\u53ef\u9009")," ",(0,d.kt)("inlineCode",{parentName:"li"},"CardanoCertificatePointer")," \u5bf9\u8c61\uff0c\u5fc5\u987b\u5305\u542b \u300cblockIndex\u300d\uff0c\u300ctxIndex\u300d \u548c \u300ccertificateIndex\u300d\u3002 ",(0,d.kt)("a",{parentName:"li",href:"https://github.com/OneKeyHQ/connect/blob/onekey/src/js/types/networks/cardano.js#L31-L35"},"\u67e5\u770b\u7c7b\u578b")," \u7528\u4e8e\u6307\u9488\u5730\u5740\u6d3e\u751f\uff0c",(0,d.kt)("a",{parentName:"li",href:"https://hydra.iohk.io/build/2006688/download/1/delegation_design_spec.pdf#subsubsection.3.2.2"},"\u4e86\u89e3\u6709\u5173\u6307\u9488\u5730\u5740\u7684\u66f4\u591a\u4fe1\u606f"))),(0,d.kt)("h4",{id:"\u5904\u7406\u6309\u94ae\u8bf7\u6c42"},"\u5904\u7406\u6309\u94ae\u8bf7\u6c42"),(0,d.kt)("p",null,"\u53ef\u4ee5\u5f00\u59cb\u5904\u7406 ",(0,d.kt)("inlineCode",{parentName:"p"},"UI.ADDRESS_VALIDATION")," \u4e8b\u4ef6\uff0c\u4e00\u65e6\u5728\u8bbe\u5907\u4e0a\u663e\u793a\u5730\u5740\u5c31\u4f1a\u89e6\u53d1\u8be5\u4e8b\u4ef6\uff0c\u60a8\u53ef\u4ee5\u5904\u7406\u6b64\u4e8b\u4ef6\u5e76\u5728\u5e94\u7528\u7a0b\u5e8f\u5185\u90e8\u663e\u793a\u81ea\u5b9a\u4e49 UI\u3002"),(0,d.kt)("p",null,"\u5982\u679c\u6ee1\u8db3\u67d0\u4e9b\u6761\u4ef6\uff0c\u5c06\u5b8c\u5168\u4e0d\u4f7f\u7528\u5f39\u51fa\u7a97\u53e3\uff1a"),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},"\u7528\u6237\u6388\u4e88\u4e0e OneKey \u901a\u4fe1\u7684\u6743\u9650"),(0,d.kt)("li",{parentName:"ul"},"\u8bbe\u5907\u5df2\u901a\u8fc7 pin / passphrase \u9a8c\u8bc1"),(0,d.kt)("li",{parentName:"ul"},"\u5e94\u7528\u7a0b\u5e8f\u5df2\u6ce8\u518c ",(0,d.kt)("inlineCode",{parentName:"li"},"OneKeyConnect.on(UI.ADDRESS_VALIDATION\uff0c()=> {});")),(0,d.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u53c2\u6570 ",(0,d.kt)("inlineCode",{parentName:"li"},"address")),(0,d.kt)("li",{parentName:"ul"},"\u5c06\u53c2\u6570 ",(0,d.kt)("inlineCode",{parentName:"li"},"showOnOneKey")," \u8bbe\u7f6e\u4e3a true (\u6216\u5b8c\u5168\u4e0d\u8bbe\u7f6e)"),(0,d.kt)("li",{parentName:"ul"},"\u5e94\u7528\u7a0b\u5e8f\u4ec5\u8bf7\u6c42\u4e00\u4e2a\u5730\u5740")),(0,d.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,d.kt)("p",null,"\u5c55\u793a\u7b2c\u4e00\u4e2a Cardano \u8d26\u6237\u7684 \u300cByron address\u300d:"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.cardanoGetAddress({\n    addressParameters: {\n        addressType: 8,\n        path: \"m/44'/1815'/0'/0/0\",\n    },\n    protocolMagic: 764824073,\n    networkId: 1,\n});\n")),(0,d.kt)("p",null,"\u5c55\u793a\u7b2c\u4e00\u4e2a Cardano \u8d26\u6237\u7684 \u300cBase address\u300d:"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.cardanoGetAddress({\n    addressParameters: {\n        addressType: 0,\n        path: \"m/1852'/1815'/0'/0/0\",\n        stakingPath: \"m/1852'/1815'/0'/2/0\",\n    },\n    protocolMagic: 764824073,\n    networkId: 1,\n});\n")),(0,d.kt)("p",null,"\u5c55\u793a\u7b2c\u4e00\u4e2a Cardano \u8d26\u6237\u7684 \u300cPointer address\u300d:"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.cardanoGetAddress({\n    addressParameters: {\n        addressType: 4,\n        path: \"m/1852'/1815'/0'/0/0\",\n        certificatePointer: {\n            blockIndex: 1,\n            txIndex: 2,\n            certificateIndex: 3,\n        },\n    },\n    protocolMagic: 764824073,\n    networkId: 1,\n});\n")),(0,d.kt)("p",null,"\u5c55\u793a\u7b2c\u4e00\u4e2a Cardano \u8d26\u6237\u7684 \u300cEnterprise address\u300d:"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.cardanoGetAddress({\n    addressParameters: {\n        addressType: 6,\n        path: \"m/1852'/1815'/0'/0/0\",\n    },\n    protocolMagic: 764824073,\n    networkId: 1,\n});\n")),(0,d.kt)("p",null,"\u5c55\u793a\u7b2c\u4e00\u4e2a Cardano \u8d26\u6237\u7684 \u300cReward address\u300d:"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.cardanoGetAddress({\n    addressParameters: {\n        addressType: 14,\n        path: \"m/1852'/1815'/0'/0/0\",\n    },\n    protocolMagic: 764824073,\n    networkId: 1,\n});\n")),(0,d.kt)("p",null,"\u8fd4\u56de Cardano \u8d26\u6237\u5217\u8868\uff0c\u540c\u65f6\u4e0d\u5728 OneKey \u786c\u4ef6\u8bbe\u5907\u4e0a\u5c55\u793a\u5b83\u4eec\uff1a"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.cardanoGetAddress({\n    bundle: [\n        // byron address, account 1, address 1\n        {\n            addressParameters: {\n                addressType: 8,\n                path: \"m/44'/1815'/0'/0/0\",\n            },\n            protocolMagic: 764824073,\n            networkId: 1,\n            showOnOneKey: false\n        },\n        // base address with staking key hash, account 1, address 1\n        {\n            addressParameters: {\n                addressType: 0,\n                path: \"m/1852'/1815'/0'/0/0\",\n                stakingKeyHash: '1bc428e4720702ebd5dab4fb175324c192dc9bb76cc5da956e3c8dff',\n            },\n            protocolMagic: 764824073,\n            networkId: 1,\n            showOnOneKey: false\n        },\n        // byron address, account 2, address 3, testnet\n        {\n            addressParameters: {\n                addressType: 8,\n                path: \"m/44'/1815'/1'/0/2\",\n            },\n            protocolMagic: 42,\n            networkId: 0,\n            showOnOneKey: false\n        },\n    ]\n});\n")),(0,d.kt)("p",null,"\u5728\u60a8\u7684\u5e94\u7528\u4e2d\u4f7f\u7528\u81ea\u5b9a\u4e49 UI \u786e\u8ba4\u5730\u5740"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-javascript"},'import OneKeyConnect, { UI } from \'@onekeyhq/connect\';\n\nOneKeyConnect.on(UI.ADDRESS_VALIDATION, data => {\n    console.log("Handle button request", data.address, data.serializedPath);\n    // here you can display custom UI inside of your app\n});\n\nconst result = await OneKeyConnect.cardanoGetAddress({\n    addressParameters: {\n        addressType: 8,\n        path: "m/44\'/1815\'/0\'/0/0",\n    },\n    protocolMagic: 764824073,\n    networkId: 0,\n    address: "Ae2tdPwUPEZ5YUb8sM3eS8JqKgrRLzhiu71crfuH2MFtqaYr5ACNRdsswsZ",\n});\n// dont forget to hide your custom UI after you get the result!\n')),(0,d.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c"},"\u8fd4\u56de\u7ed3\u679c"),(0,d.kt)("p",null,"\u5355\u5730\u5740\u8fd4\u56de\u65f6\u683c\u5f0f"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: true,\n    payload: {\n        addressParameters: {\n            addressType: number,\n            path: Array<number>, // hardend path\n            stakingPath?: Array<number>, // hardend path\n            stakingKeyHash?: string,\n            certificatePointer?: {\n                blockIndex: number,\n                txIndex: number,\n                certificatePointer: number,\n            }\n        }\n        serializedPath: string,\n        serializedStakingPath?: string,\n        protocolMagic: number,\n        networkId: number,\n        address: string,\n    }\n}\n")),(0,d.kt)("p",null,"\u591a\u5730\u5740\u8fd4\u56de\u65f6\u7ed3\u679c"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: true,\n    payload: [\n        {\n            addressParameters: {\n                addressType: number,\n                path: Array<number>, // hardend path\n                stakingPath?: Array<number>, // hardend path\n                stakingKeyHash?: string,\n                certificatePointer?: {\n                    blockIndex: number,\n                    txIndex: number,\n                    certificatePointer: number,\n                }\n            }\n            serializedPath: string,\n            serializedStakingPath?: string,\n            protocolMagic: number,\n            networkId: number,\n            address: string,\n        },\n        {\n            addressParameters: {\n                addressType: number,\n                path: Array<number>, // hardend path\n                stakingPath?: Array<number>, // hardend path\n                stakingKeyHash?: string,\n                certificatePointer?: {\n                    blockIndex: number,\n                    txIndex: number,\n                    certificatePointer: number,\n                }\n            }\n            serializedPath: string,\n            serializedStakingPath?: string,\n            protocolMagic: number,\n            networkId: number,\n            address: string,\n        },\n        {\n            addressParameters: {\n                addressType: number,\n                path: Array<number>, // hardend path\n                stakingPath?: Array<number>, // hardend path\n                stakingKeyHash?: string,\n                certificatePointer?: {\n                    blockIndex: number,\n                    txIndex: number,\n                    certificatePointer: number,\n                }\n            }\n            serializedPath: string,\n            serializedStakingPath?: string,\n            protocolMagic: number,\n            networkId: number,\n            address: string,\n        },\n    ]\n}\n")),(0,d.kt)("p",null,"\u8bf7\u6c42\u9519\u8bef\u8fd4\u56de\u7ed3\u679c"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: false,\n    payload: {\n        error: string // error message\n    }\n}\n")),(0,d.kt)(s.Z,{initValue:"OneKeyConnect.cardanoGetAddress({\n    addressParameters: {\n        addressType: 8,\n        path: \"m/44'/1815'/0'/0/0\",\n    },\n    protocolMagic: 764824073,\n    networkId: 1,\n});",mdxType:"Playground"}))}m.isMDXComponent=!0}}]);