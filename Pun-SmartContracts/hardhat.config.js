require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

//const dotenv = require("dotenv");

//dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.11",
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/2qDcnqCKJYhBtl1G9c1FkOeWpdjRBgdP",
      accounts: ["6f5811fb6ccd3f37675e4bb2849c5c652deeec9e342730d1b5f39cd50da95d30"]
    },
  },
  etherscan: {
    apiKey: "31EQ1E3DDYCEK2RT8GVKS26SSY9QR3QZPN",
  }
};
