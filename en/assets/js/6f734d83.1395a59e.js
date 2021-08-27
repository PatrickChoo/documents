"use strict";(self.webpackChunkonekey_document=self.webpackChunkonekey_document||[]).push([[6578],{5798:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return m},default:function(){return u}});var a=n(7462),r=n(3366),s=(n(7294),n(3905)),i=n(9216),o={hide_table_of_contents:!0},c=void 0,l={unversionedId:"Connect/Method List/ethereumVerifyMessage",id:"Connect/Method List/ethereumVerifyMessage",isDocsHomePage:!1,title:"ethereumVerifyMessage",description:"Ethereum: verify message",source:"@site/docs/Connect/Method List/ethereumVerifyMessage.mdx",sourceDirName:"Connect/Method List",slug:"/Connect/Method List/ethereumVerifyMessage",permalink:"/en/Connect/Method List/ethereumVerifyMessage",editUrl:"https://github.com/onekeyhq/documents/edit/main/docs/Connect/Method List/ethereumVerifyMessage.mdx",version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"ConnectSidebar",previous:{title:"ethereumSignTransaction",permalink:"/en/Connect/Method List/ethereumSignTransaction"},next:{title:"getAccountInfo",permalink:"/en/Connect/Method List/getAccountInfo"}},m=[{value:"Ethereum: verify message",id:"ethereum-verify-message",children:[{value:"Params",id:"params",children:[]},{value:"Example",id:"example",children:[]},{value:"Result",id:"result",children:[]}]}],d={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"ethereum-verify-message"},"Ethereum: verify message"),(0,s.kt)("p",null,"Asks device to verify a message using the signer address and signature."),(0,s.kt)("p",null,"ES6"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const result = await OneKeyConnect.ethereumVerifyMessage(params);\n")),(0,s.kt)("p",null,"CommonJS"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.ethereumVerifyMessage(params).then(function(result) {\n\n});\n")),(0,s.kt)("h3",{id:"params"},"Params"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"./commonParams"},(0,s.kt)("strong",{parentName:"a"},"Optional common params"))),(0,s.kt)("h6",{id:"flowtype"},(0,s.kt)("a",{parentName:"h6",href:"https://github.com/OneKeyHQ/connect/blob/onekey/src/js/types/params.js#L74-L78"},"flowtype")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"address")," - ",(0,s.kt)("em",{parentName:"li"},"required")," ",(0,s.kt)("inlineCode",{parentName:"li"},"string"),' signer address. "0x" prefix is optional'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"message")," - ",(0,s.kt)("em",{parentName:"li"},"required")," ",(0,s.kt)("inlineCode",{parentName:"li"},"string")," signed message in plain text"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"hex")," - ",(0,s.kt)("em",{parentName:"li"},"optional")," ",(0,s.kt)("inlineCode",{parentName:"li"},"boolean")," convert message from hex"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"signature")," - ",(0,s.kt)("em",{parentName:"li"},"required")," ",(0,s.kt)("inlineCode",{parentName:"li"},"string"),' signature in hexadecimal format. "0x" prefix is optional')),(0,s.kt)("h3",{id:"example"},"Example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'OneKeyConnect.ethereumVerifyMessage({\n    address: "0xdA0b608bdb1a4A154325C854607c68950b4F1a34",\n    message: "Example message",\n    signature: "11dc86c631ef5d9388c5e245501d571b864af1a717cbbb3ca1f6dacbf330742957242aa52b36bbe7bb46dce6ff0ead0548cc5a5ce76d0aaed166fd40cb3fc6e51c",\n});\n')),(0,s.kt)("h3",{id:"result"},"Result"),(0,s.kt)("h6",{id:"flowtype-1"},(0,s.kt)("a",{parentName:"h6",href:"https://github.com/OneKeyHQ/connect/blob/onekey/src/js/types/response.js#L133-L136"},"flowtype")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    success: true,\n    payload: {\n        message: "Message verified"\n    }\n}\n')),(0,s.kt)("p",null,"Error"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: false,\n    payload: {\n        error: string // error message\n    }\n}\n")),(0,s.kt)(i.Z,{initValue:'OneKeyConnect.ethereumVerifyMessage({\n    address: "0xdA0b608bdb1a4A154325C854607c68950b4F1a34",\n    message: "Example message",\n    signature: "11dc86c631ef5d9388c5e245501d571b864af1a717cbbb3ca1f6dacbf330742957242aa52b36bbe7bb46dce6ff0ead0548cc5a5ce76d0aaed166fd40cb3fc6e51c",\n});',mdxType:"Playground"}))}u.isMDXComponent=!0}}]);