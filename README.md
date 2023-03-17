# Online Betting Ethereum DApp Project
This project shows a simple Ethereum-based DApp that allows a person to bet on a player. It comes with the contract, a test for that contract, and a UI for the app.

Technologies used: Hardhat, Solidity, Bootstrap, React.js, MetaMask, ethers.js and node.js.  
Testing Framework: Chai.js

To start the program: Compile the contract Lock.sol in >/Project/Contract: npx hardhat compile  
Deploy accounts in >/Project/contract: npx hardhat node  
Run UI in >/Project/client: npm run start

To run tests in >/Project/contract: npx hardhat test  
Additional (not needed to run) in >/Project/contract: npx hardhat run scripts/deploy.js --network localhost
