var HDWalletProvider = require("truffle-hdwallet-provider");

var mnemonic = "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    kovan : {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://kovan.infura.io/tujM56fkQ4BiRxR4mC3u")
      },
      network_id: 42
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/tujM56fkQ4BiRxR4mC3u")
      },
      network_id: 3
    }  
  }
};
