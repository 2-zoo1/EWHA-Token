/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require("@nomiclabs/hardhat-waffle");
 require('@nomiclabs/hardhat-etherscan');
 
 
 task("accoun ts", "Prints the list of accounts", async () => {
   const accounts = await ethers.getSigners();
 
   for (const account of accounts) {
     console.log(account.address);
   }
 }); 
 
 module.exports = {
   solidity: {
     version: "0.8.13",
   }, 
   defaultNetwork: "ropsten",
   networks: {
   ropsten: {
     url: '//Alchemy Key//', // Alchemy > Apps > View >  Https
     chainId: 3, 
     accounts: ['//metamask Ropsten Private Key//'] // metamask Ropsten Private Key
   },
 },
 etherscan:{
  apiKey: "//Etherscan API Key//" // etherscan API 키 
}
};
