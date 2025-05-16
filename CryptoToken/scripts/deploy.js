const hre = require("hardhat");

async function main() {
    const CryptosToken = await hre.ethers.getContractFactory("CryptosToken");
    const cryptosToken = await CryptosToken.deploy(1000000000, 50);

    await cryptosToken.deployed();

    console.log("Cryptos Token deployed: ", cryptosToken.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});