# Online Ethereum DApp Simulator
This project is an Ethereum-based decentralized application that simulates balances which allows a player to place bets. 
The application comes with an Ethereum contract, a test for that contract, and a user interface.

## Technologies Used
* Hardhat
* Solidity
* Bootstrap
* React
* ethers.js
* node.js
* MetaMask
  
### Testing Framework
* chai.js

## Instructions
1. To start the program, we compile the contract Lock.sol in ```>/Project/Contract``` using ```npx hardhat compile```.
2. Once the program has started, you can deploy the accounts in ```>/Project/contract``` using ```npx hardhat node```.  
3. Finally, to run the user interface in ```>/Project/client```, use the command ```npm run start```.

## Additional Notes
1. There are test cases that were used to test different conditions for the program. To run these these cases, navigate to ```>/Project/contract```, and run the command ```npx hardhat test```.  
2. Another additional command that can be used but is not neccessary in ```>/Project/contract``` is ```npx hardhat run scripts/deploy.js --network localhost```.
