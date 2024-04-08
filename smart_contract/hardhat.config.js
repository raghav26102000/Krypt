//https://eth-goerli.g.alchemy.com/v2/PCEGrRuNBOtg0zHTsBkW6LMXnV3Fm7rs

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.9',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/PCEGrRuNBOtg0zHTsBkW6LMXnV3Fm7rs',
      accounts: ['4776a73bc8203a7ba833b264f60ad2e9f42c43450b5400757792ddd7132e45a6'],
    },
  },
};
