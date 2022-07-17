# Blockchain

## Compile and Deploy

npx hardhat clean
npx hardhat compile
npx hardhat run scripts/deployMarketSentiment.js -network _networkname_ "Name*" "Symbol*" "Fees*"
npx hardhat verify <your_contract> -network _networkname_

