// const HDWalletProvider = require('@truffle/hdwallet-provider');
// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!

  networks: {
   development: {
     host: "127.0.0.1",
     port: 9545,
     network_id: "*"
   },
   test: {
     host: "127.0.0.1",
     port: 9545,
     network_id: "*"
   }//,
   // matic:  {
   //    provider: () => new HDWalletProvider({
   //      mnemonic: {
   //        phrase: mnemonic
   //      },
   //      providerOrUrl:  `https://matic-mumbai.chainstacklabs.com`,
   //      chainId: 80001
   //    }),
   //    network_id: 80001,
   //    confirmations: 2,
   //    timeoutBlocks: 200,
   //    skipDryRun: true,
   //    chainId: 80001
   //  }
  }
};