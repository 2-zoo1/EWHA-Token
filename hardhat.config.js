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
     url: 'https://eth-ropsten.alchemyapi.io/v2/RPjIfVep7ZFXk40yYUitifq1Nq8vm00J', // Alchemy > Apps > View >  Https
     chainId: 3, 
     accounts: ['32e7b69f648cf1f6b8481924556fb906c25e2866c34c88eedec8e9c4e74685e3'] // metamask Ropsten Private Key
   },
 },
 etherscan:{
  apiKey: "4MYDCCMW8Z9RTRJKSSR4FTIPFYXHVCEWZZ" // etherscan API 키 
}
};