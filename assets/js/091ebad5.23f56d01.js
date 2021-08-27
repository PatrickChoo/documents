"use strict";(self.webpackChunkonekey_document=self.webpackChunkonekey_document||[]).push([[841],{8252:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),s={sidebar_position:1},o="\u6ce8\u518c\u5408\u7ea6\u7684\u65b9\u6cd5\u540d\u79f0",l={unversionedId:"Extension/Best Practices/registering-function-names",id:"Extension/Best Practices/registering-function-names",isDocsHomePage:!1,title:"\u6ce8\u518c\u5408\u7ea6\u7684\u65b9\u6cd5\u540d\u79f0",description:"OneKey \u6d4f\u89c8\u5668\u63d2\u4ef6\u4f7f\u7528\u529f\u80fd\u7b7e\u540d\u7684\u5947\u5076\u6821\u9a8c\u94fe\u4e0a\u6ce8\u518c\u8868\u5728\u786e\u8ba4\u63d2\u4ef6\u4e2d\u663e\u793a\u65b9\u6cd5\u540d\u79f0\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/Extension/03-Best Practices/registering-function-names.md",sourceDirName:"Extension/03-Best Practices",slug:"/Extension/Best Practices/registering-function-names",permalink:"/Extension/Best Practices/registering-function-names",editUrl:"https://github.com/onekeyhq/documents/edit/main/docs/Extension/03-Best Practices/registering-function-names.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"ExtensionSidebar",previous:{title:"\u7b7e\u540d\u6570\u636e",permalink:"/Extension/API Reference/signing-data"},next:{title:"\u5411\u7528\u6237\u6dfb\u52a0 Token",permalink:"/Extension/Best Practices/registering-your-token"}},c=[{value:"\u68c0\u67e5\u6838\u5b9e",id:"\u68c0\u67e5\u6838\u5b9e",children:[{value:"\u4f7f\u7528 remix.ethereum.org",id:"\u4f7f\u7528-remixethereumorg",children:[]},{value:"\u4f7f\u7528 <code>eth-method-registry</code>",id:"\u4f7f\u7528-eth-method-registry",children:[]}]}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6ce8\u518c\u5408\u7ea6\u7684\u65b9\u6cd5\u540d\u79f0"},"\u6ce8\u518c\u5408\u7ea6\u7684\u65b9\u6cd5\u540d\u79f0"),(0,a.kt)("p",null,"OneKey \u6d4f\u89c8\u5668\u63d2\u4ef6\u4f7f\u7528\u529f\u80fd\u7b7e\u540d\u7684\u5947\u5076\u6821\u9a8c\u94fe\u4e0a\u6ce8\u518c\u8868\u5728\u786e\u8ba4\u63d2\u4ef6\u4e2d\u663e\u793a\u65b9\u6cd5\u540d\u79f0\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u8bb8\u591a\u5e38\u89c1\u7684\u65b9\u6cd5\u540d\u79f0\uff0c\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"tokenMethod"),"\uff0c\u8fd9\u79cd\u65b9\u6cd5\u4f7f OneKey \u6d4f\u89c8\u5668\u63d2\u4ef6\u53ef\u4ee5\u901a\u8fc7\u5176 ",(0,a.kt)("a",{parentName:"p",href:"https://solidity.readthedocs.io/en/v0.4.21/abi-spec.html"},"\u65b9\u6cd5\u7b7e\u540d")," \u6210\u529f\u67e5\u627e\u65b9\u6cd5\u540d\u79f0\u3002\u4f46\u662f\uff0c\u6709\u65f6\u60a8\u4f7f\u7528\u7684\u65b9\u6cd5\u4e0d\u5728\u8be5\u94fe\u4e0a\u7684\u6ce8\u518c\u8868\u4e2d\uff0c\u56e0\u6b64 OneKey \u6d4f\u89c8\u5668\u63d2\u4ef6\u53ea\u4f1a\u5411\u7528\u6237\u663e\u793a\u300c\u5408\u7ea6\u4e92\u52a8\u300d\u3002"),(0,a.kt)("p",null,"\u8981\u5c06\u5408\u540c\u7684\u529f\u80fd\u540d\u79f0\u6dfb\u52a0\u5230\u6b64\u6ce8\u518c\u8868\u4e2d\uff0c\u4ee5\u4f7f\u5176\u663e\u793a\u5728 OneKey \u6d4f\u89c8\u5668\u63d2\u4ef6\u754c\u9762\u4e2d\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8f6c\u5230 ",(0,a.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x44691b39d1a75dc4e0a0346cbb15e310e6ed1e86#writeContract"},"etherscan \u4e0a\u7684 Mainnet \u5947\u5076\u6821\u9a8c\u7b7e\u540d\u5408\u7ea6")),(0,a.kt)("li",{parentName:"ol"},"\u8fde\u63a5 OneKey \u6d4f\u89c8\u5668\u63d2\u4ef6"),(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528 etherscan \u7684\u5199\u534f\u5b9a\u529f\u80fd\u5c06\u5b57\u7b26\u4e32\u503c\uff08\u4e0d\u5e26\u5f15\u53f7\u6216\u7a7a\u683c\uff09\u8f93\u5165\u5230\u5bc4\u5b58\u5668\u529f\u80fd\u3002\u4f8b\u5982\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"getOwners()\nexecTransaction(address\uff0cuint256\uff0cbytes\uff0cuint8\uff0cuint256\uff0cuint256\uff0cuint256\uff0caddress\uff0caddress\uff0cbytes)\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u300c\u5199\u300d"),(0,a.kt)("li",{parentName:"ol"},"\u6279\u51c6 OneKey \u6d4f\u89c8\u5668\u63d2\u4ef6\u4e2d\u7684\u4ea4\u6613\uff08\u60a8\u53ea\u9700\u652f\u4ed8\u71c3\u6599\u8d39\u7528\uff09")),(0,a.kt)("h2",{id:"\u68c0\u67e5\u6838\u5b9e"},"\u68c0\u67e5\u6838\u5b9e"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ethers.utils.keccak256('getOwners()')=> 0xa0e67e2bdc0a6d8a09ccd6c353c9df590807ad66ff5e6630c4f31a86dfa84821")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53d6\u524d 10 \u4e2a\u5b57\u7b26\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"0xa0e67e2b")),(0,a.kt)("li",{parentName:"ul"},"\u5c06\u5b83\u4eec\u8f93\u5165\u5230",(0,a.kt)("a",{parentName:"li",href:"https://jennypollack.github.io/function_signature_registry/"},"\u68c0\u67e5\u6b64\u6f14\u793a\u5e94\u7528\u7a0b\u5e8f"),"\u4e2d\uff0c\u4ee5\u68c0\u67e5\u94fe\u4e0a\u6ce8\u518c\u8868"),(0,a.kt)("li",{parentName:"ul"},"\u4ec5 Mainnet \u6216 Rinkeby")),(0,a.kt)("h3",{id:"\u4f7f\u7528-remixethereumorg"},"\u4f7f\u7528 remix.ethereum.org"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c06\u5408\u7ea6\u4ee3\u7801\u4ece",(0,a.kt)("a",{parentName:"li",href:"https://www.bokconsulting.com.au/blog/a-quick-look-at-paritys-signature-registry-contract/"},"bokky \u7684\u535a\u5ba2\u6587\u7ae0"),"\u4e2d\u7c98\u8d34\u5230 ",(0,a.kt)("a",{parentName:"li",href:"https%EF%BC%9A//remix.ethereum.org"},"remix"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6839\u636e\u5408\u7ea6\u8bbe\u7f6e\u6b63\u786e\u7684\u7f16\u8bd1\u5668\u7248\u672c\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 remix \u7684\u5199\u5165\u529f\u80fd\u5c06\u5176\u6dfb\u52a0\u5230\u6ce8\u518c\u8868\u4e2d\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u60a8\u53ef\u4ee5\u901a\u8fc7\u52a0\u8f7d\u7b7e\u540d\u6ce8\u518c\u8868\u5408\u540c\u6765\u67e5\u770b ",(0,a.kt)("a",{parentName:"li",href:"https://remix.ethereum.org"},"remix")," \u4e0a\u7684 ",(0,a.kt)("strong",{parentName:"li"},"FUNCTIONHASHES")," \u90e8\u5206\uff0c\u7136\u540e\u5355\u51fb\u201c\u7f16\u8bd1\u201d\u9009\u9879\u5361\u4e0a\u7684\u201c\u8be6\u7ec6\u4fe1\u606f\u201d\u6309\u94ae\u3002")),(0,a.kt)("h3",{id:"\u4f7f\u7528-eth-method-registry"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"h3"},"eth-method-registry")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528\u90e8\u7f72\u5728 Rinkeby \u4e0a\u7684",(0,a.kt)("a",{parentName:"li",href:"https://rinkeby.etherscan.io/address/0x0c0831fb1ec7442485fb41a033ba188389a990b4"},"\u7b7e\u540d\u6ce8\u518c\u8868")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/onekeyhq/eth-method-registry"},(0,a.kt)("inlineCode",{parentName:"a"},"eth-method-registry"))," \u7528\u4e8e\u5728 OneKey \u6d4f\u89c8\u5668\u63d2\u4ef6\u4e2d\u67e5\u627e\u65b9\u6cd5\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8bf7\u6ce8\u610f\uff0c\u65e0\u8bba\u7528\u6237\u4f7f\u7528\u4ec0\u4e48\u7f51\u7edc\uff0cOneKey \u6d4f\u89c8\u5668\u63d2\u4ef6\u90fd\u4f1a\u4ece Mainnet \u7684 eth-method-registry \u7aef\u70b9\u8bfb\u53d6\u6570\u636e\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6709\u5173\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,a.kt)("a",{parentName:"li",href:"https://ethereum.stackexchange.com/questions/59678/metamask-shows-unknown-function-when-calling-method-send-function"},"\u6b64 StackExchange \u7b54\u6848"),"\u3002")))}m.isMDXComponent=!0}}]);