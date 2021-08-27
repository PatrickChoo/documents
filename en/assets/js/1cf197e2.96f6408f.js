"use strict";(self.webpackChunkonekey_document=self.webpackChunkonekey_document||[]).push([[5783],{2874:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return r},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return u},default:function(){return c}});var a=t(7462),i=t(3366),l=(t(7294),t(3905)),s=t(9216),r={hide_table_of_contents:!0},o=void 0,d={unversionedId:"Connect/Method List/liskGetPublicKey",id:"Connect/Method List/liskGetPublicKey",isDocsHomePage:!1,title:"liskGetPublicKey",description:"Lisk: get public key",source:"@site/docs/Connect/Method List/liskGetPublicKey.mdx",sourceDirName:"Connect/Method List",slug:"/Connect/Method List/liskGetPublicKey",permalink:"/en/Connect/Method List/liskGetPublicKey",editUrl:"https://github.com/onekeyhq/documents/edit/main/docs/Connect/Method List/liskGetPublicKey.mdx",version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"ConnectSidebar",previous:{title:"liskGetAddress",permalink:"/en/Connect/Method List/liskGetAddress"},next:{title:"liskSignMessage",permalink:"/en/Connect/Method List/liskSignMessage"}},u=[{value:"Lisk: get public key",id:"lisk-get-public-key",children:[{value:"Params",id:"params",children:[]},{value:"Example",id:"example",children:[]},{value:"Result",id:"result",children:[]}]}],p={toc:u};function c(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"lisk-get-public-key"},"Lisk: get public key"),(0,l.kt)("p",null,"Retrieves BIP32 extended public derived by given BIP32 path.\nUser is presented with a description of the requested key and asked to confirm the export on OneKey."),(0,l.kt)("p",null,"ES6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const result = await OneKeyConnect.liskGetPublicKey(params);\n")),(0,l.kt)("p",null,"CommonJS"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.liskGetPublicKey(params).then(function(result) {\n\n});\n")),(0,l.kt)("h3",{id:"params"},"Params"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"./commonParams"},(0,l.kt)("strong",{parentName:"a"},"Optional common params"))),(0,l.kt)("h4",{id:"exporting-single-address"},"Exporting single address"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"path")," \u2014 ",(0,l.kt)("em",{parentName:"li"},"required")," ",(0,l.kt)("inlineCode",{parentName:"li"},"string | Array<number>")," minimum length is ",(0,l.kt)("inlineCode",{parentName:"li"},"3"),". ",(0,l.kt)("a",{parentName:"li",href:"./path"},"read more")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"showOnOneKey")," \u2014 ",(0,l.kt)("em",{parentName:"li"},"optional")," ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")," determines if address will be displayed on device. Default is set to ",(0,l.kt)("inlineCode",{parentName:"li"},"false"))),(0,l.kt)("h4",{id:"exporting-bundle-of-addresses"},"Exporting bundle of addresses"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bundle")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"Array")," of Objects with ",(0,l.kt)("inlineCode",{parentName:"li"},"path")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"showOnOneKey")," fields")),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("p",null,"Display address of first Lisk account:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.liskGetPublicKey({\n    path: \"m/44'/134'/0'/0'/0'\"\n});\n")),(0,l.kt)("p",null,"Return a bundle of Lisk addresses without displaying them on device:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.liskGetPublicKey({\n    bundle: [\n        { path: \"m/44'/134'/0'/0'/0'\", showOnOneKey: false }, // account 1\n        { path: \"m/44'/134'/0'/0'/1'\", showOnOneKey: false }, // account 2\n        { path: \"m/44'/134'/0'/0'/2'\", showOnOneKey: false }  // account 3\n    ]\n});\n")),(0,l.kt)("h3",{id:"result"},"Result"),(0,l.kt)("p",null,"Result with only one address"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: true,\n    payload: {\n        publicKey: string,     // displayed address\n        path: Array<number>, // hardended path\n        serializedPath: string,\n    }\n}\n")),(0,l.kt)("p",null,"Result with bundle of addresses sorted by FIFO"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: true,\n    payload: [\n        { publicKey: string, path: Array<number>, serializedPath: string }, // account 1\n        { publicKey: string, path: Array<number>, serializedPath: string }, // account 2\n        { publicKey: string, path: Array<number>, serializedPath: string }  // account 3\n    ]\n}\n")),(0,l.kt)("p",null,"Error"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: false,\n    payload: {\n        error: string // error message\n    }\n}\n")),(0,l.kt)(s.Z,{initValue:"OneKeyConnect.liskGetPublicKey({\n    path: \"m/44'/134'/0'/0'/0'\"\n});",mdxType:"Playground"}))}c.isMDXComponent=!0}}]);