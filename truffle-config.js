require('babel-register');
require('babel-polyfill');

module.exports = {
  migrations_directory: "./migrations",
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
  },
  contracts_directory: './contracts',
  contracts_build_directory: './src/abis',
  compilers: {
    solc: {
      version: "^0.4.18",
      optimizer: {
        enabled: true,
        runs: 200
      },
      evmVersion: 'byzantium'
    }
  }
}