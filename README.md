# Blockchain-Smart Contract

### Compile and Deploy

npx hardhat clean <br />
npx hardhat compile <br />
npx hardhat run scripts/deployMarketSentiment.js -network _networkname_ "Name*" "Symbol*" "Fees*" <br />
npx hardhat verify <your_contract> -network _networkname_ <br />


- Name = Name For the NFT <br />
- Symbol = Symbol For the NFT <br />
- Fees = Fees For minting NFT <br />
