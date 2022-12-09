const hre = require("hardhat");

async function main () {

    const Pun = await hre.ethers.getContractFactory("Pun");
    const pun = await Pun.deploy(
        "Pun Blog", // Name for the NFT
        "BLOG", // Symbol for the NFTium
        "1000000000000000000" //  Fees for the NFT i.e. 1 Matic
    );
    await pun.deployed();

    console.log("Pun deployed to:", pun.address);
}

main()
    .then(()=>process.exit(0))
    .catch((error)=>{
        console.error(error);
        process.exit(1);
    });