"use strict";(self.webpackChunkonekey_document=self.webpackChunkonekey_document||[]).push([[8375],{4306:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var a=t(7462),i=t(3366),l=(t(7294),t(3905)),r=t(9216),s={hide_table_of_contents:!0},o=void 0,c={unversionedId:"Connect/Method List/requestLogin",id:"Connect/Method List/requestLogin",isDocsHomePage:!1,title:"requestLogin",description:"Request login",source:"@site/docs/Connect/Method List/requestLogin.mdx",sourceDirName:"Connect/Method List",slug:"/Connect/Method List/requestLogin",permalink:"/en/Connect/Method List/requestLogin",editUrl:"https://github.com/onekeyhq/documents/edit/main/docs/Connect/Method List/requestLogin.mdx",version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"ConnectSidebar",previous:{title:"pushTransaction",permalink:"/en/Connect/Method List/pushTransaction"},next:{title:"resetDevice",permalink:"/en/Connect/Method List/resetDevice"}},u=[{value:"Request login",id:"request-login",children:[{value:"Params",id:"params",children:[]},{value:"Example",id:"example",children:[]},{value:"Result",id:"result",children:[]}]}],d={toc:u};function p(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"request-login"},"Request login"),(0,l.kt)("p",null,"Challenge-response authentication via OneKey. To protect against replay attacks\nyou should use a server-side generated and randomized ",(0,l.kt)("inlineCode",{parentName:"p"},"challengeHidden")," for every\nattempt. You can also provide a visual challenge that will be shown on the\ndevice."),(0,l.kt)("p",null,"Service backend needs to check whether the signature matches the generated\n",(0,l.kt)("inlineCode",{parentName:"p"},"challengeHidden"),", provided ",(0,l.kt)("inlineCode",{parentName:"p"},"challengeVisual")," and stored ",(0,l.kt)("inlineCode",{parentName:"p"},"publicKey")," fields.\nIf that is the case, the backend either creates an account (if the ",(0,l.kt)("inlineCode",{parentName:"p"},"publicKey"),"\nidentity is seen for the first time) or signs in the user (if the ",(0,l.kt)("inlineCode",{parentName:"p"},"publicKey"),"\nidentity is already a known user)."),(0,l.kt)("p",null,"To understand the full mechanics, please consult the Challenge-Response chapter\nof\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/satoshilabs/slips/blob/master/slip-0013.md"},"SLIP-0013: Authentication using deterministic hierarchy"),"."),(0,l.kt)("p",null,"ES6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const result = await OneKeyConnect.requestLogin(params);\n")),(0,l.kt)("p",null,"CommonJS"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.requestLogin(params).then(function(result) {\n\n});\n")),(0,l.kt)("h3",{id:"params"},"Params"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"./commonParams"},(0,l.kt)("strong",{parentName:"a"},"Optional common params"))),(0,l.kt)("p",null,"Common parameter ",(0,l.kt)("inlineCode",{parentName:"p"},"useEmptyPassphrase")," - is always set to ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," and it will be ignored by this method"),(0,l.kt)("h4",{id:"login-using-server-side-async-challenge"},"Login using server-side async challenge"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"callback")," \u2014 ",(0,l.kt)("em",{parentName:"li"},"required")," ",(0,l.kt)("inlineCode",{parentName:"li"},"function")," which will be called from API to fetch ",(0,l.kt)("inlineCode",{parentName:"li"},"challengeHidden")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"challengeVisual")," from server")),(0,l.kt)("h4",{id:"login-without-async-challenge"},"Login without async challenge"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"challengeHidden")," - ",(0,l.kt)("em",{parentName:"li"},"required")," ",(0,l.kt)("inlineCode",{parentName:"li"},"string")," hexadecimal value"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"challengeVisual")," - ",(0,l.kt)("em",{parentName:"li"},"required")," ",(0,l.kt)("inlineCode",{parentName:"li"},"string")," text displayed on OneKey")),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("h6",{id:"login-using-server-side-async-challenge-1"},"Login using server-side async challenge"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.requestLogin({\n    callback: function() {\n        // here should be a request to server to fetch \"challengeHidden\" and \"challengeVisual\"\n        return {\n            challengeHidden: '0123456789abcdef',\n            challengeVisual: 'Login to',\n        }\n    }\n})\n")),(0,l.kt)("h6",{id:"login-without-async-challenge-1"},"Login without async challenge"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.requestLogin({\n    challengeHidden: '0123456789abcdef',\n    challengeVisual: 'Login to',\n})\n")),(0,l.kt)("h3",{id:"result"},"Result"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: true,\n    payload: {\n        address: string,\n        publicKey: string,\n        signature: string,\n    }\n}\n")),(0,l.kt)("p",null,"Error"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: false,\n    payload: {\n        error: string // error message\n    }\n}\n")),(0,l.kt)(r.Z,{initValue:"OneKeyConnect.requestLogin({\n    challengeHidden: '0123456789abcdef',\n    challengeVisual: 'Login to',\n})",mdxType:"Playground"}))}p.isMDXComponent=!0}}]);