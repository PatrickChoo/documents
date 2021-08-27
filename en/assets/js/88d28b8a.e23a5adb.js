"use strict";(self.webpackChunkonekey_document=self.webpackChunkonekey_document||[]).push([[605],{5166:function(a,n,e){e.r(n),e.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var t=e(7462),r=e(3366),i=(e(7294),e(3905)),o=e(9216),s={hide_table_of_contents:!0,draft:!0},l=void 0,c={unversionedId:"Connect/Method List/cardanoSignTransaction",id:"Connect/Method List/cardanoSignTransaction",isDocsHomePage:!1,title:"cardanoSignTransaction",description:"Cardano: Sign transaction",source:"@site/docs/Connect/Method List/cardanoSignTransaction.mdx",sourceDirName:"Connect/Method List",slug:"/Connect/Method List/cardanoSignTransaction",permalink:"/en/Connect/Method List/cardanoSignTransaction",editUrl:"https://github.com/onekeyhq/documents/edit/main/docs/Connect/Method List/cardanoSignTransaction.mdx",version:"current",frontMatter:{hide_table_of_contents:!0,draft:!0}},d=[{value:"Cardano: Sign transaction",id:"cardano-sign-transaction",children:[{value:"Notes",id:"notes",children:[]},{value:"Params",id:"params",children:[]},{value:"Stake pool registration certificate specifics",id:"stake-pool-registration-certificate-specifics",children:[]},{value:"Example",id:"example",children:[]},{value:"Result",id:"result",children:[]}]}],p={toc:d};function m(a){var n=a.components,e=(0,r.Z)(a,["components"]);return(0,i.kt)("wrapper",(0,t.Z)({},p,e,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"cardano-sign-transaction"},"Cardano: Sign transaction"),(0,i.kt)("p",null,"Asks device to sign given transaction. User is asked to confirm all transaction details on OneKey."),(0,i.kt)("p",null,"ES6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const result = await OneKeyConnect.cardanoSignTransaction(params);\n")),(0,i.kt)("p",null,"CommonJS"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.cardanoSignTransaction(params).then(function (result) {});\n")),(0,i.kt)("h3",{id:"notes"},"Notes"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Unfortunately we are aware of the fact that currently at most ~14 inputs are supported per transaction. This should be resolved when the cardano app is updated to support transaction streaming. Meanwhile, a workaround is to send multiple smaller transactions containing less inputs.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Also, each serialized transaction output size is currently limited to 512 bytes at OneKey firmware level. This limitation is a mitigation measure to prevent sending large (especially change) outputs containing many tokens that OneKey would not be able to spend given that currently the full Cardano transaction is held in-memory. Once Cardano-transaction signing is refactored to be streamed, this limit can be lifted.")),(0,i.kt)("h3",{id:"params"},"Params"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"./commonParams"},(0,i.kt)("strong",{parentName:"a"},"*","Optional common params","*","*"))),(0,i.kt)("h6",{id:"flowtype"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/OneKeyHQ/connect/blob/onekey/src/js/types/networks/cardano.js#L59-L142"},"flowtype")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"inputs")," \u2014 ",(0,i.kt)("em",{parentName:"li"},"required")," ",(0,i.kt)("inlineCode",{parentName:"li"},"Array")," of ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OneKeyHQ/connect/blob/onekey/src/js/types/networks/cardano.js#L59"},"CardanoInput")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"outputs")," - ",(0,i.kt)("em",{parentName:"li"},"required")," ",(0,i.kt)("inlineCode",{parentName:"li"},"Array")," of ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OneKeyHQ/connect/blob/onekey/src/js/types/networks/cardano.js#L74"},"CardanoOutput")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fee")," - ",(0,i.kt)("em",{parentName:"li"},"required")," ",(0,i.kt)("inlineCode",{parentName:"li"},"String")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"protocolMagic")," - ",(0,i.kt)("em",{parentName:"li"},"required")," ",(0,i.kt)("inlineCode",{parentName:"li"},"Integer")," 764824073 for Mainnet, 42 for Testnet"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"networkId")," - ",(0,i.kt)("em",{parentName:"li"},"required")," ",(0,i.kt)("inlineCode",{parentName:"li"},"Integer")," 1 for Mainnet, 0 for Testnet"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ttl")," - ",(0,i.kt)("em",{parentName:"li"},"optional")," ",(0,i.kt)("inlineCode",{parentName:"li"},"String")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"validityIntervalStart")," - ",(0,i.kt)("em",{parentName:"li"},"optional")," ",(0,i.kt)("inlineCode",{parentName:"li"},"String")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"certificates")," - ",(0,i.kt)("em",{parentName:"li"},"optional")," ",(0,i.kt)("inlineCode",{parentName:"li"},"Array")," of ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OneKeyHQ/connect/blob/onekey/src/js/types/networks/cardano.js#L119"},"CardanoCertificate")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"withdrawals")," - ",(0,i.kt)("em",{parentName:"li"},"optional")," ",(0,i.kt)("inlineCode",{parentName:"li"},"Array")," of ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OneKeyHQ/connect/blob/onekey/src/js/types/networks/cardano.js#L126"},"CardanoWithdrawal")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"metadata")," - ",(0,i.kt)("em",{parentName:"li"},"optional")," ",(0,i.kt)("inlineCode",{parentName:"li"},"String"))),(0,i.kt)("h3",{id:"stake-pool-registration-certificate-specifics"},"Stake pool registration certificate specifics"),(0,i.kt)("p",null,"OneKey supports signing of stake pool registration certificates as a pool owner.\nThe transaction may contain external inputs (e.g. belonging to the pool operator) and OneKey is not able verify whether they are actually external or not,\nso if we allowed signing the transaction with a spending key, there is the risk of losing funds from an input that the user did not intend to spend from.\nMoreover there is the risk of inadvertedly signing a withdrawal in the transaction if there's any. To mitigate those risks, we introduced special validation rules for stake pool registration transactions which are validated on OneKey as well.\nThe validation rules are the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The transaction must not contain any other certificates, not even another stake pool registration"),(0,i.kt)("li",{parentName:"ol"},"The transaction must not contain any withdrawals"),(0,i.kt)("li",{parentName:"ol"},"The transaction inputs must all be external, i.e. path must be either undefined or null"),(0,i.kt)("li",{parentName:"ol"},"Exactly one owner should be passed as a staking path and the rest of owners should be passed as bech32-encoded reward addresses")),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("h4",{id:"ordinary-transaction"},"Ordinary transaction"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.cardanoSignTransaction({\n  inputs: [\n    {\n      path: \"m/44'/1815'/0'/0/1\",\n      prev_hash: '1af8fa0b754ff99253d983894e63a2b09cbb56c833ba18c3384210163f63dcfc',\n      prev_index: 0,\n    },\n  ],\n  outputs: [\n    {\n      address: 'Ae2tdPwUPEZCanmBz5g2GEwFqKTKpNJcGYPKfDxoNeKZ8bRHr8366kseiK2',\n      amount: '3003112',\n    },\n    {\n      addressParameters: {\n        addressType: 0,\n        path: \"m/1852'/1815'/0'/0/0\",\n        stakingPath: \"m/1852'/1815'/0'/2/0\",\n      },\n      amount: '7120787',\n    },\n    {\n      address:\n        'addr1q84sh2j72ux0l03fxndjnhctdg7hcppsaejafsa84vh7lwgmcs5wgus8qt4atk45lvt4xfxpjtwfhdmvchdf2m3u3hlsd5tq5r',\n      amount: '2000000',\n      tokenBundle: [\n        {\n          policyId: '95a292ffee938be03e9bae5657982a74e9014eb4960108c9e23a5b39',\n          tokens: [\n            {\n              assetNameBytes: '74652474436f696e',\n              amount: '7878754',\n            },\n          ],\n        },\n      ],\n    },\n  ],\n  fee: '42',\n  ttl: '10',\n  validityIntervalStart: '20',\n  certificates: [\n    {\n      type: 0,\n      path: \"m/1852'/1815'/0'/2/0\",\n    },\n    {\n      type: 1,\n      path: \"m/1852'/1815'/0'/2/0\",\n    },\n    {\n      type: 2,\n      path: \"m/1852'/1815'/0'/2/0\",\n      pool: 'f61c42cbf7c8c53af3f520508212ad3e72f674f957fe23ff0acb4973',\n    },\n  ],\n  withdrawals: [\n    {\n      path: \"m/1852'/1815'/0'/2/0\",\n      amount: '1000',\n    },\n  ],\n  metadata:\n    'a200a11864a118c843aa00ff01a119012c590100aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',\n  protocolMagic: 764824073,\n  networkId: 1,\n});\n")),(0,i.kt)("h4",{id:"stake-pool-registration"},"Stake pool registration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.cardanoSignTransaction({\n  inputs: [\n    {\n      // notice no path is provided here\n      prev_hash: '3b40265111d8bb3c3c608d95b3a0bf83461ace32d79336579a1939b3aad1c0b7',\n      prev_index: 0,\n    },\n  ],\n  outputs: {\n    address: 'addr1q84sh2j72ux0l03fxndjnhctdg7hcppsaejafsa84vh7lwgmcs5wgus8qt4atk45lvt4xfxpjtwfhdmvchdf2m3u3hlsd5tq5r',\n    amount: '1000000',\n  },\n  fee: '300000',\n  ttl: '500000000',\n  protocolMagic: 764824073,\n  networkId: 1,\n  certificates: [\n    {\n      type: 3, // stake pool registration certificate type\n      poolParameters: {\n        poolId: 'f61c42cbf7c8c53af3f520508212ad3e72f674f957fe23ff0acb4973',\n        vrfKeyHash: '198890ad6c92e80fbdab554dda02da9fb49d001bbd96181f3e07f7a6ab0d0640',\n        pledge: '500000000', // amount in lovelace\n        cost: '340000000', // amount in lovelace\n        margin: {\n          // numerator/denominator should be <= 1 which is translated then to a percentage\n          numerator: '1',\n          denominator: '2',\n        },\n        rewardAccount: 'stake1uya87zwnmax0v6nnn8ptqkl6ydx4522kpsc3l3wmf3yswygwx45el', // bech32-encoded stake pool reward account\n        owners: [\n          {\n            stakingKeyPath: \"m/1852'/1815'/0'/2/0\", // this is the path to the owner's key that will be signing the tx on OneKey\n          },\n          {\n            stakingKeyHash: '3a7f09d3df4cf66a7399c2b05bfa234d5a29560c311fc5db4c490711', // other owner\n          },\n        ],\n        relays: [\n          {\n            type: 0, // single host ip address\n            ipv4Address: '192.168.0.1',\n            ipv6Address: '2001:0db8:85a3:0000:0000:8a2e:0370:7334', // ipv6 address in full form\n            port: 1234,\n          },\n          {\n            type: 0,\n            ipv6Address: '2001:0db8:85a3:0000:0000:8a2e:0370:7334',\n            port: 1234,\n          },\n          {\n            type: 0,\n            ipv4Address: '192.168.0.1',\n            port: 1234,\n          },\n          {\n            type: 1, // single hostname\n            hostName: 'www.test.test',\n            port: 1234,\n          },\n          {\n            type: 2, // multiple host names\n            hostName: 'www.test2.test', // max 64 characters long\n          },\n        ],\n        metadata: {\n          url: 'https://www.test.test', // max 64 characters long\n          hash: '914c57c1f12bbf4a82b12d977d4f274674856a11ed4b9b95bd70f5d41c5064a6',\n        },\n      },\n    },\n  ],\n});\n")),(0,i.kt)("h3",{id:"result"},"Result"),(0,i.kt)("h6",{id:"flowtype-1"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/OneKeyHQ/connect/blob/onekey/src/js/types/networks/cardano.js#L107-L110"},"flowtype")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: true,\n    payload: {\n        hash: string,\n        serializedTx: string,\n    }\n}\n")),(0,i.kt)("p",null,"Error"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: false,\n    payload: {\n        error: string // error message\n    }\n}\n")),(0,i.kt)(o.Z,{initValue:'OneKeyConnect.cardanoSignTransaction({\n    inputs: [\n        {\n            path: "m/44\'/1815\'/0\'/0/1",\n            prev_hash: "1af8fa0b754ff99253d983894e63a2b09cbb56c833ba18c3384210163f63dcfc",\n            prev_index: 0,\n        }\n    ],\n    outputs: [\n        {\n            address: "Ae2tdPwUPEZCanmBz5g2GEwFqKTKpNJcGYPKfDxoNeKZ8bRHr8366kseiK2",\n            amount: "3003112",\n        },\n        {\n            addressParameters: {\n                addressType: 0,\n                path: "m/1852\'/1815\'/0\'/0/0",\n                stakingPath: "m/1852\'/1815\'/0\'/2/0",\n            },\n            amount: "7120787",\n        },\n        {\n            address: \'addr1q84sh2j72ux0l03fxndjnhctdg7hcppsaejafsa84vh7lwgmcs5wgus8qt4atk45lvt4xfxpjtwfhdmvchdf2m3u3hlsd5tq5r\',\n            amount: \'2000000\',\n            tokenBundle: [\n                {\n                    policyId: "95a292ffee938be03e9bae5657982a74e9014eb4960108c9e23a5b39",\n                    tokens: [\n                        {\n                            assetNameBytes: "74652474436f696e",\n                            amount: "7878754"\n                        }\n                    ]\n                }\n            ]\n        }\n    ],\n    fee: "42",\n    ttl: "10",\n    validityIntervalStart: "20",\n    certificates: [\n        {\n            type: 0,\n            path: "m/1852\'/1815\'/0\'/2/0",\n        },\n        {\n            type: 1,\n            path: "m/1852\'/1815\'/0\'/2/0",\n        },\n        {\n            type: 2,\n            path: "m/1852\'/1815\'/0\'/2/0",\n            pool: "f61c42cbf7c8c53af3f520508212ad3e72f674f957fe23ff0acb4973",\n        },\n    ],\n    withdrawals: [\n        {\n            path: "m/1852\'/1815\'/0\'/2/0",\n            amount: "1000",\n        }\n    ],\n    metadata: "a200a11864a118c843aa00ff01a119012c590100aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",\n    protocolMagic: 764824073,\n    networkId: 1,\n});',mdxType:"Playground"}))}m.isMDXComponent=!0}}]);