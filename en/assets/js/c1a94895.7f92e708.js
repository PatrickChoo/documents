"use strict";(self.webpackChunkonekey_document=self.webpackChunkonekey_document||[]).push([[8796],{6533:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var a=t(7462),i=t(3366),o=(t(7294),t(3905)),r={sidebar_position:6},s="Sending Transactions",c={unversionedId:"Extension/Guide/sending-transactions",id:"Extension/Guide/sending-transactions",isDocsHomePage:!1,title:"Sending Transactions",description:"Transactions are a formal action on a blockchain. They are always initiated in OneKey Browser Extension with a call to the ethsendTransaction method. They can involve a simple sending of ether, may result in sending tokens, creating a new smart contract, or changing state on the blockchain in any number of ways. They are always initiated by a signature from an external account_, or a simple key pair.",source:"@site/docs/Extension/01-Guide/sending-transactions.md",sourceDirName:"Extension/01-Guide",slug:"/Extension/Guide/sending-transactions",permalink:"/en/Extension/Guide/sending-transactions",editUrl:"https://github.com/onekeyhq/documents/edit/main/docs/Extension/01-Guide/sending-transactions.md",version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"ExtensionSidebar",previous:{title:"Accessing Accounts",permalink:"/en/Extension/Guide/accessing-accounts"},next:{title:"OneKey Provider API",permalink:"/en/Extension/API Reference/onekey-provider"}},l=[{value:"Example",id:"example",children:[]},{value:"Transaction Parameters",id:"transaction-parameters",children:[{value:"Nonce ignored",id:"nonce-ignored",children:[]},{value:"Gas Price optional",id:"gas-price-optional",children:[]},{value:"Gas Limit optional",id:"gas-limit-optional",children:[]},{value:"To semi-optional",id:"to-semi-optional",children:[]},{value:"Value optional",id:"value-optional",children:[]},{value:"Data semi-optional",id:"data-semi-optional",children:[]},{value:"Chain ID currently ignored",id:"chain-id-currently-ignored",children:[]}]}],u={toc:l};function d(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sending-transactions"},"Sending Transactions"),(0,o.kt)("p",null,"Transactions are a formal action on a blockchain. They are always initiated in OneKey Browser Extension with a call to the ",(0,o.kt)("inlineCode",{parentName:"p"},"eth_sendTransaction")," method. They can involve a simple sending of ether, may result in sending tokens, creating a new smart contract, or changing state on the blockchain in any number of ways. They are always initiated by a signature from an ",(0,o.kt)("em",{parentName:"p"},"external account"),", or a simple key pair."),(0,o.kt)("p",null,"In OneKey Browser Extension, using the ",(0,o.kt)("inlineCode",{parentName:"p"},"onekey.request")," method directly, sending a transaction will involve composing an options object like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const transactionParameters = {\n  nonce: '0x00', // ignored by OneKey Browser Extension\n  gasPrice: '0x09184e72a000', // customizable by user during OneKey Browser Extension confirmation.\n  gas: '0x2710', // customizable by user during OneKey Browser Extension confirmation.\n  to: '0x0000000000000000000000000000000000000000', // Required except during contract publications.\n  from: onekey.selectedAddress, // must match user's active address.\n  value: '0x00', // Only required to send ether to the recipient from the initiating external account.\n  data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057', // Optional, but used for defining smart contract creation and interaction.\n  chainId: '0x3', // Used to prevent transaction reuse across blockchains. Auto-filled by OneKey Browser Extension.\n};\n\n// txHash is a hex string\n// As with any RPC call, it may throw an error\nconst txHash = await onekey.request({\n  method: 'eth_sendTransaction',\n  params: [transactionParameters],\n});\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<button class="enableEthereumButton btn">\n  Enable Ethereum\n</button>\n<button class="sendEthButton btn">Send Eth</button>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const ethereumButton = document.querySelector('.enableEthereumButton');\nconst sendEthButton = document.querySelector('.sendEthButton');\n\nlet accounts = [];\n\n//Sending Ethereum to an address\nsendEthButton.addEventListener('click', () => {\n  onekey\n    .request({\n      method: 'eth_sendTransaction',\n      params: [\n        {\n          from: accounts[0],\n          to: '0x2f318C334780961FB129D2a6c30D0763d9a5C970',\n          value: '0x29a2241af62c0000',\n          gasPrice: '0x09184e72a000',\n          gas: '0x2710',\n        },\n      ],\n    })\n    .then((txHash) => console.log(txHash))\n    .catch((error) => console.error);\n});\n\nethereumButton.addEventListener('click', () => {\n  getAccount();\n});\n\nasync function getAccount() {\n  accounts = await onekey.request({ method: 'eth_requestAccounts' });\n}\n")),(0,o.kt)("h2",{id:"transaction-parameters"},"Transaction Parameters"),(0,o.kt)("p",null,"Many transaction parameters are handled for you by OneKey Browser Extension, but it's good to know what all the parameters do."),(0,o.kt)("h3",{id:"nonce-ignored"},"Nonce ","[ignored]"),(0,o.kt)("p",null,"This field is ignored by OneKey Browser Extension."),(0,o.kt)("p",null,"In Ethereum every transaction has a nonce. This is so that each transaction can only be processed by the blockchain once. Additionally, to be a valid transaction, the nonce must either be ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),", or a transaction with the previous number must have already been processed."),(0,o.kt)("p",null,"That means that transactions are always processed in order for a given account, and so incrementing nonces is a very sensitive matter that is easy to mess up, especially when a user is interacting with multiple applications with pending transactions using the same account, potentially across multiple devices."),(0,o.kt)("p",null,"For these reasons, OneKey Browser Extension currently does not provide application developers any way to customize the nonce of transactions it suggests, and instead assists the user in managing their transaction queue themselves."),(0,o.kt)("h3",{id:"gas-price-optional"},"Gas Price ","[optional]"),(0,o.kt)("p",null,"Optional parameter - best used on private blockchains."),(0,o.kt)("p",null,"In Ethereum, the pool of pending transactions offer their gas price as a sort of auction bid to the validators to include this transaction in a block in exchange for a transaction fee. That means high gas prices can mean faster processing, but also more expensive transactions."),(0,o.kt)("p",null,'OneKey Browser Extension helps users select a competitive gas price on the Ethereum Main Network and popular test networks. We make requests to an API maintained by our friends at MyCrypto and allow users to choose between "slow," "medium," and "fast" options for their gas price.'),(0,o.kt)("p",null,"We cannot know about the gas market on all blockchains because it requires some deep analysis. For this reason, while you can safely ignore this parameter on our main hosted networks, you may want to suggest a gas price in situations where your application knows more about the target network than we do."),(0,o.kt)("h3",{id:"gas-limit-optional"},"Gas Limit ","[optional]"),(0,o.kt)("p",null,"Optional parameter. Rarely useful to Dapp developers."),(0,o.kt)("p",null,"Gas limit is a highly optional parameter, and we automatically calculate a reasonable price for it. You will probably know that your smart contract benefits from a custom gas limit if it ever does for some reason."),(0,o.kt)("h3",{id:"to-semi-optional"},"To ","[semi-optional]"),(0,o.kt)("p",null,"A hex-encoded Ethereum address. Required for transactions with a recipient (all transactions except for contract creation)."),(0,o.kt)("p",null,"Contract creation occurs when there is no ",(0,o.kt)("inlineCode",{parentName:"p"},"to")," value but there is a ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," value."),(0,o.kt)("h3",{id:"value-optional"},"Value ","[optional]"),(0,o.kt)("p",null,"Hex-encoded value of the network's native currency to send. On the Main Ethereum network, this is ",(0,o.kt)("a",{parentName:"p",href:"https://www.ethereum.org/eth"},"ether"),", which is denominated in ",(0,o.kt)("em",{parentName:"p"},"wei"),", which is ",(0,o.kt)("inlineCode",{parentName:"p"},"1e-18")," ether."),(0,o.kt)("p",null,"Please note that these numbers often used in Ethereum are far higher precision than native JavaScript numbers, and can cause unpredictable behavior if not anticipated. For this reason, we highly recommend using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/indutny/bn.js/"},"BN.js")," when manipulating values intended for the blockchain."),(0,o.kt)("h3",{id:"data-semi-optional"},"Data ","[semi-optional]"),(0,o.kt)("p",null,"Required for smart contract creation."),(0,o.kt)("p",null,"This field is also used for specifying contract methods and their parameters. You can learn more about how that data is encoded on ",(0,o.kt)("a",{parentName:"p",href:"https://solidity.readthedocs.io/en/develop/abi-spec.html"},"the solidity ABI spec"),"."),(0,o.kt)("h3",{id:"chain-id-currently-ignored"},"Chain ID ","[currently ignored]"),(0,o.kt)("p",null,"Chain ID is currently derived by the user's current selected network at ",(0,o.kt)("inlineCode",{parentName:"p"},"onekey.networkVersion"),". In the future we will probably allow a way to connect to multiple networks at once, at which point this parameter will become important, so it may be useful to be in the habit of including now."))}d.isMDXComponent=!0}}]);