require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.17",
    networks: {
        goerli: {
            url: process.env.RPC_URL,
            accounts: [process.env.Ptibs],
        },
    },
};