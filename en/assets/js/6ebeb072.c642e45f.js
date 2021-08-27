"use strict";(self.webpackChunkonekey_document=self.webpackChunkonekey_document||[]).push([[5984],{2399:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return o},toc:function(){return p},default:function(){return c}});var a=t(7462),r=t(3366),s=(t(7294),t(3905)),i=t(9216),l={hide_table_of_contents:!0,draft:!0},d=void 0,o={unversionedId:"Connect/Method List/rippleGetAddress",id:"Connect/Method List/rippleGetAddress",isDocsHomePage:!1,title:"rippleGetAddress",description:"Ripple: get address",source:"@site/docs/Connect/Method List/rippleGetAddress.mdx",sourceDirName:"Connect/Method List",slug:"/Connect/Method List/rippleGetAddress",permalink:"/en/Connect/Method List/rippleGetAddress",editUrl:"https://github.com/onekeyhq/documents/edit/main/docs/Connect/Method List/rippleGetAddress.mdx",version:"current",frontMatter:{hide_table_of_contents:!0,draft:!0}},p=[{value:"Ripple: get address",id:"ripple-get-address",children:[{value:"Params",id:"params",children:[]},{value:"Example",id:"example",children:[]},{value:"Result",id:"result",children:[]}]}],u={toc:p};function c(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"ripple-get-address"},"Ripple: get address"),(0,s.kt)("p",null,"Display requested address on device and returns it to caller. User is presented with a description of the requested key and asked to confirm the export."),(0,s.kt)("p",null,"ES6"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const result = await OneKeyConnect.rippleGetAddress(params);\n")),(0,s.kt)("p",null,"CommonJS"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.rippleGetAddress(params).then(function(result) {\n\n});\n")),(0,s.kt)("h3",{id:"params"},"Params"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"./commonParams"},(0,s.kt)("strong",{parentName:"a"},"Optional common params"))),(0,s.kt)("h4",{id:"exporting-single-address"},"Exporting single address"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"path")," \u2014 ",(0,s.kt)("em",{parentName:"li"},"required")," ",(0,s.kt)("inlineCode",{parentName:"li"},"string | Array<number>")," minimum length is ",(0,s.kt)("inlineCode",{parentName:"li"},"5"),". ",(0,s.kt)("a",{parentName:"li",href:"./path"},"read more")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"address")," \u2014 ",(0,s.kt)("em",{parentName:"li"},"optional")," ",(0,s.kt)("inlineCode",{parentName:"li"},"string")," address for validation (read ",(0,s.kt)("inlineCode",{parentName:"li"},"Handle button request")," section below)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"showOnOneKey")," \u2014 ",(0,s.kt)("em",{parentName:"li"},"optional")," ",(0,s.kt)("inlineCode",{parentName:"li"},"boolean")," determines if address will be displayed on device. Default is set to ",(0,s.kt)("inlineCode",{parentName:"li"},"true"))),(0,s.kt)("h4",{id:"exporting-bundle-of-addresses"},"Exporting bundle of addresses"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"bundle")," - ",(0,s.kt)("inlineCode",{parentName:"li"},"Array")," of Objects with ",(0,s.kt)("inlineCode",{parentName:"li"},"path")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"showOnOneKey")," fields")),(0,s.kt)("h4",{id:"handle-button-request"},"Handle button request"),(0,s.kt)("p",null,"There is a possibility to handle ",(0,s.kt)("inlineCode",{parentName:"p"},"UI.ADDRESS_VALIDATION")," event which will be triggered once the address is displayed on the device.\nYou can handle this event and display custom UI inside of your application."),(0,s.kt)("p",null,"If certain conditions are fulfilled popup will not be used at all:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"the user gave permissions to communicate with OneKey"),(0,s.kt)("li",{parentName:"ul"},"device is authenticated by pin/passphrase"),(0,s.kt)("li",{parentName:"ul"},"application has ",(0,s.kt)("inlineCode",{parentName:"li"},"OneKeyConnect.on(UI.ADDRESS_VALIDATION, () => {});")," listener registered"),(0,s.kt)("li",{parentName:"ul"},"parameter ",(0,s.kt)("inlineCode",{parentName:"li"},"address")," is set"),(0,s.kt)("li",{parentName:"ul"},"parameter ",(0,s.kt)("inlineCode",{parentName:"li"},"showOnOneKey")," is set to ",(0,s.kt)("inlineCode",{parentName:"li"},"true")," (or not set at all)"),(0,s.kt)("li",{parentName:"ul"},"application is requesting ONLY ONE(!) address")),(0,s.kt)("h3",{id:"example"},"Example"),(0,s.kt)("p",null,"Display first address of second ripple account:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.rippleGetAddress({\n    path: \"m/44'/144'/1'/0/0\"\n});\n")),(0,s.kt)("p",null,"Return a bundle of ripple addresses without displaying them on device:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.rippleGetAddress({\n    bundle: [\n        { path: \"m/44'/144'/0'/0/0\", showOnOneKey: false }, // account 1\n        { path: \"m/44'/144'/1'/0/1\", showOnOneKey: false }, // account 2\n        { path: \"m/44'/144'/2'/0/2\", showOnOneKey: false }  // account 3\n    ]\n});\n")),(0,s.kt)("p",null,"Validate address using custom UI inside of your application:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'import OneKeyConnect, { UI } from \'@onekeyhq/connect\';\n\nOneKeyConnect.on(UI.ADDRESS_VALIDATION, data => {\n    console.log("Handle button request", data.address, data.serializedPath);\n    // here you can display custom UI inside of your app\n});\n\nconst result = await OneKeyConnect.rippleGetAddress({\n    path: "m/44\'/144\'/0\'/0/0",\n    address: "rNaqKtKrMSwpwZSzRckPf7S96DkimjkF4H",\n});\n// dont forget to hide your custom UI after you get the result!\n')),(0,s.kt)("h3",{id:"result"},"Result"),(0,s.kt)("p",null,"Result with only one address"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: true,\n    payload: {\n        address: string,\n        path: Array<number>,\n        serializedPath: string,\n    }\n}\n")),(0,s.kt)("p",null,"Result with bundle of addresses"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: true,\n    payload: [\n        { address: string, path: Array<number>, serializedPath: string }, // account 1, address 1\n        { address: string, path: Array<number>, serializedPath: string }, // account 2, address 2\n        { address: string, path: Array<number>, serializedPath: string }, // account 3, address 3\n    ]\n}\n")),(0,s.kt)("p",null,"Error"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: false,\n    payload: {\n        error: string // error message\n    }\n}\n")),(0,s.kt)(i.Z,{initValue:"OneKeyConnect.rippleGetAddress({\n    path: \"m/44'/144'/1'/0/0\"\n});",mdxType:"Playground"}))}c.isMDXComponent=!0}}]);