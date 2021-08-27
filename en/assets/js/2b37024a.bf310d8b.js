"use strict";(self.webpackChunkonekey_document=self.webpackChunkonekey_document||[]).push([[4772],{163:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var a=t(7462),i=t(3366),r=(t(7294),t(3905)),l=t(9216),o={hide_table_of_contents:!0},p=void 0,c={unversionedId:"Connect/Method List/cipherKeyValue",id:"Connect/Method List/cipherKeyValue",isDocsHomePage:!1,title:"cipherKeyValue",description:"Symmetric key-value encryption",source:"@site/docs/Connect/Method List/cipherKeyValue.mdx",sourceDirName:"Connect/Method List",slug:"/Connect/Method List/cipherKeyValue",permalink:"/en/Connect/Method List/cipherKeyValue",editUrl:"https://github.com/onekeyhq/documents/edit/main/docs/Connect/Method List/cipherKeyValue.mdx",version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"ConnectSidebar",previous:{title:"bixinReboot",permalink:"/en/Connect/Method List/bixinReboot"},next:{title:"composeTransaction",permalink:"/en/Connect/Method List/composeTransaction"}},s=[{value:"Symmetric key-value encryption",id:"symmetric-key-value-encryption",children:[{value:"Params",id:"params",children:[]},{value:"Example",id:"example",children:[]},{value:"Result",id:"result",children:[]}]}],u={toc:s};function m(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"symmetric-key-value-encryption"},"Symmetric key-value encryption"),(0,r.kt)("p",null,'Cipher key value provides symmetric encryption in the OneKey device where the user might be forced to confirm the encryption/decryption on the display. The key for the encryption is constructed from the private key on the BIP address, the key displayed on the device, and the two informations about whether to ask for confirmation. It is constructed in such a way, that different path, key or the confirm information will get a different encryption key and IV. So, you cannot "skip" the confirmation by using different input. IV can be either manually set, or it is computed together with the key.The value must be divisible into 16-byte blocks. The application has to pad the blocks itself and ensure safety; for example, by using PKCS7.'),(0,r.kt)("p",null,"More information can be found in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/satoshilabs/slips/blob/master/slip-0011.md"},"SLIP-0011"),"."),(0,r.kt)("p",null,"ES6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const result = await OneKeyConnect.cipherKeyValue(params);\n")),(0,r.kt)("p",null,"CommonJS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.cipherKeyValue(params).then(function(result) {\n\n});\n")),(0,r.kt)("h3",{id:"params"},"Params"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./commonParams"},(0,r.kt)("strong",{parentName:"a"},"Optional common params"))),(0,r.kt)("p",null,"Common parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"useEmptyPassphrase")," - is always set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," and it will be ignored by this method"),(0,r.kt)("h4",{id:"encrypt-single-value"},"Encrypt single value"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path")," \u2014 ",(0,r.kt)("em",{parentName:"li"},"required")," ",(0,r.kt)("inlineCode",{parentName:"li"},"string | Array<number>")," minimum length is ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),". ",(0,r.kt)("a",{parentName:"li",href:"./path"},"read more")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key")," \u2014 ",(0,r.kt)("em",{parentName:"li"},"optional")," ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," a message shown on device"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value")," \u2014 ",(0,r.kt)("em",{parentName:"li"},"optional")," ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," hexadecimal value with length a multiple of 16 bytes (32 letters in hexadecimal). Value is what is actually being encrypted."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"askOnEncrypt")," - ",(0,r.kt)("em",{parentName:"li"},"optional")," ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")," should user confirm encrypt?"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"askOnDecrypt")," - ",(0,r.kt)("em",{parentName:"li"},"optional")," ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")," should user confirm decrypt?"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"iv")," - ",(0,r.kt)("em",{parentName:"li"},"optional")," ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," initialization vector - keep unset if you don't know what it means, it will be computed automatically.")),(0,r.kt)("h4",{id:"encrypt-multiple-values"},"Encrypt multiple values"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bundle")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"Array")," of Objects with ",(0,r.kt)("inlineCode",{parentName:"li"},"path"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"key"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"value"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"askOnEncrypt"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"askOnDecrypt")," fields")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"Return encrypted value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'OneKeyConnect.cipherKeyValue({\n    path: "m/49\'/0\'/0\'",\n    key: "This text is displayed on OneKey during encrypt",\n    value: "1c0ffeec0ffeec0ffeec0ffeec0ffee1",\n    encrypt: true,\n    askOnEncrypt: true,\n    askOnDecrypt: true\n});\n')),(0,r.kt)("p",null,"Return a bundle of encrypted values:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'OneKeyConnect.cipherKeyValue({\n    bundle: [\n        { path: "m/49\'/0\'/0\'", key: "1 text on OneKey", value: "1c0ffeec0ffeec0ffeec0ffeec0ffee1", encrypt: true  },\n        { path: "m/49\'/0\'/1\'", key: "2 text on OneKey", value: "1c0ffeec0ffeec0ffeec0ffeec0ffee1", encrypt: false },\n        { path: "m/49\'/0\'/2\'", key: "3 text on OneKey", value: "1c0ffeec0ffeec0ffeec0ffeec0ffee1" }\n    ]\n});\n')),(0,r.kt)("h3",{id:"result"},"Result"),(0,r.kt)("p",null,"Result with only one value"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: true,\n    payload: {\n        value: string\n    }\n}\n")),(0,r.kt)("p",null,"Result with bundle of values"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: true,\n    payload: [\n        { value: string },\n        { value: string },\n        { value: string }\n    ]\n}\n")),(0,r.kt)("p",null,"Error"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: false,\n    payload: {\n        error: string // error message\n    }\n}\n")),(0,r.kt)(l.Z,{initValue:'OneKeyConnect.cipherKeyValue({\n    path: "m/49\'/0\'/0\'",\n    key: "This text is displayed on OneKey during encrypt",\n    value: "1c0ffeec0ffeec0ffeec0ffeec0ffee1",\n    encrypt: true,\n    askOnEncrypt: true,\n    askOnDecrypt: true\n});',mdxType:"Playground"}))}m.isMDXComponent=!0}}]);