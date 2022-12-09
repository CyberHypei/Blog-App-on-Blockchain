# Blockchain-Smart Contract

### Compile and Deploy

npx hardhat clean <br />
npx hardhat compile <br />
npx hardhat run scripts/deployMarketSentiment.js -network _networkname_ "Name*" "Symbol*" "Fees*" <br />
npx hardhat verify <your_contract> -network _networkname_ <br />


- Name = Name For the NFT <br />
- Symbol = Symbol For the NFT <br />
- Fees = Fees For minting NFT <br />


### Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
