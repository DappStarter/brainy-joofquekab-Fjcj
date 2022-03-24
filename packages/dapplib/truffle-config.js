require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow fog table name release sad under imitate private food section'; 
let testAccounts = [
"0x4a07631235000f49eefbf8e29cc08452b228735fe95ef71bfb10cb0e5f5f3077",
"0xdfc453babf51be1de6b7818f04ebf71f70478a93833268fabf7e3e1f35b92a4e",
"0xc7d26965dbcd044709bc50c2ccaa03cde826ee09caeff76fd9213bf6b92e20ca",
"0x13453046c8c17622d84eaa20a477300ef186228aa48c20a349b6a1b7898b9805",
"0x15fba7aacb591df524d80115459b93d62debd425e1785d0b55e89d9c515740aa",
"0xeaf06d4db5d1a8d7f992e99cc4db769d3719782d150478a701d7b9a8c9992a4f",
"0x55725123fe76e6d78230ac7ec701113a927dee7a7c2c8e8d748a20ba85d7fe82",
"0xd7db688f57ffedd40274ed8fd3bce403dd15f0106b34f97d37b83b40e622783a",
"0x55ccdb9435e9fbdfdf5055d15156014b643242f257b09d7801c8c9579f8eca71",
"0xa808f7f0cd5d450660b91c339eadc8b8998881f72572654318d4bcb41beacf8f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

