require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock bridge silver normal note muscle coast gesture person forget gate'; 
let testAccounts = [
"0x1ad6bc94a7c91417ba81f664381f48a1408a92ac51c222f9110e45287a9b66c4",
"0xfa480c654d88d233c9c640af5aaeefe2b23ea7441facefac29d333ec34c260f1",
"0xdab6ab07372c90fce47695a4e81dd413fd836aabcdd4dfa73d1566a901d31b64",
"0x959b11478b5558cf440fd46e1d927b191c6197ef809bf22f9208f48ee3b72842",
"0xfacd7437bb971f0d1b4a104679a1d81c313afa4b3a5ffd185f41ce6f7314ab12",
"0x071968a68f05567b7d1c172005550f6ef8adf5b100657b03b0b281da509e8b8e",
"0xe83fc5769d0468e9b1ec434455ff13b4f40a4b6d2e72a8cd55e055bb7ff7cfd0",
"0x23647d2b32d6fdafab6c0f06add88d7bddf690a1fa7a5e32dad2ec8b6eff1c6b",
"0x95fd7216a664eef13711c7823ae054f176c10efbef7c1e6fc82c1c441c58e29b",
"0x8ff35f49ae691ed35c8a4834961eeba193e91c092f899ef356c0f6661c2fb2ed"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
