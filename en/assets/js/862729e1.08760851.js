"use strict";(self.webpackChunkonekey_document=self.webpackChunkonekey_document||[]).push([[4336],{3590:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),l=t(9216),o={hide_table_of_contents:!0,draft:!0},s=void 0,c={unversionedId:"Connect/Method List/cardanoGetPublicKey",id:"Connect/Method List/cardanoGetPublicKey",isDocsHomePage:!1,title:"cardanoGetPublicKey",description:"Cardano: get public key",source:"@site/docs/Connect/Method List/cardanoGetPublicKey.mdx",sourceDirName:"Connect/Method List",slug:"/Connect/Method List/cardanoGetPublicKey",permalink:"/en/Connect/Method List/cardanoGetPublicKey",editUrl:"https://github.com/onekeyhq/documents/edit/main/docs/Connect/Method List/cardanoGetPublicKey.mdx",version:"current",frontMatter:{hide_table_of_contents:!0,draft:!0}},u=[{value:"Cardano: get public key",id:"cardano-get-public-key",children:[{value:"Params",id:"params",children:[]},{value:"Example",id:"example",children:[]},{value:"Result",id:"result",children:[]}]}],p={toc:u};function d(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"cardano-get-public-key"},"Cardano: get public key"),(0,i.kt)("p",null,"Retrieves ",(0,i.kt)("a",{parentName:"p",href:"https://cardanolaunch.com/assets/Ed25519_BIP.pdf"},"BIP32-Ed25519")," extended public derived by given ",(0,i.kt)("a",{parentName:"p",href:"https://cardanolaunch.com/assets/Ed25519_BIP.pdf"},"BIP32-Ed25519")," path.\nUser is presented with a description of the requested key and asked to confirm the export on OneKey."),(0,i.kt)("p",null,"ES6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const result = await OneKeyConnect.cardanoGetPublicKey(params);\n")),(0,i.kt)("p",null,"CommonJS"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.cardanoGetPublicKey(params).then(function(result) {\n\n});\n")),(0,i.kt)("h3",{id:"params"},"Params"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"./commonParams"},(0,i.kt)("strong",{parentName:"a"},"Optional common params"))),(0,i.kt)("h4",{id:"exporting-single-public-key"},"Exporting single public key"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path")," \u2014 ",(0,i.kt)("em",{parentName:"li"},"required")," ",(0,i.kt)("inlineCode",{parentName:"li"},"string | Array<number>")," minimum length is ",(0,i.kt)("inlineCode",{parentName:"li"},"3"),". ",(0,i.kt)("a",{parentName:"li",href:"./path"},"read more")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"showOnOneKey")," \u2014 ",(0,i.kt)("em",{parentName:"li"},"optional")," ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean")," determines if publick key will be displayed on device. Default is set to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"))),(0,i.kt)("h4",{id:"exporting-bundle-of-publick-keys"},"Exporting bundle of publick keys"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bundle")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"Array")," of Objects with ",(0,i.kt)("inlineCode",{parentName:"li"},"path")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"showOnOneKey")," fields")),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("p",null,"Display public key of first cardano account:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.cardanoGetPublicKey({\n    path: \"m/44'/1815'/0'\"\n});\n")),(0,i.kt)("p",null,"Return a bundle of cardano public keys without displaying them on device:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.cardanoGetPublicKey({\n    bundle: [\n        { path: \"m/44'/1815'/0'\", showOnOneKey: false }, // account 1\n        { path: \"m/44'/1815'/1'\", showOnOneKey: false }, // account 2\n        { path: \"m/44'/1815'/2'\", showOnOneKey: false }  // account 3\n    ]\n});\n")),(0,i.kt)("h3",{id:"result"},"Result"),(0,i.kt)("p",null,"Result with only one public key"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: true,\n    payload: {\n        path: Array<number>, // hardended path\n        serializedPath: string,\n        publicKey: string,\n        node: HDPubNode,\n        rootHDPassphrase: string,\n    }\n}\n")),(0,i.kt)("p",null,"Result with bundle of publick keys"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: true,\n    payload: [\n        { path: Array<number>, serializedPath: string, publicKey: string, node: HDPubNode, hdPassphrase: string }, // account 1\n        { path: Array<number>, serializedPath: string, publicKey: string, node: HDPubNode, rootHDPassphrase: string }, // account 2\n        { path: Array<number>, serializedPath: string, publicKey: string, node: HDPubNode, hdPassphrase: string }  // account 3\n    ]\n}\n")),(0,i.kt)("p",null,"Error"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: false,\n    payload: {\n        error: string // error message\n    }\n}\n")),(0,i.kt)(l.Z,{initValue:"OneKeyConnect.cardanoGetPublicKey({\n    path: \"m/44'/1815'/0'\"\n});",mdxType:"Playground"}))}d.isMDXComponent=!0}}]);