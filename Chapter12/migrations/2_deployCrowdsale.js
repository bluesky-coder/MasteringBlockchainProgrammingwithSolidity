const MSTToken = artifacts.require("MSTToken");
const MSTCrowdsale = artifacts.require("MSTCrowdsale");

module.exports = async function(deployer, network, accounts) {
  var owner = accounts[0];
  var wallet = accounts[1];

  await deployer.deploy(MSTToken, "Mastering Solidity Token", "MST", 18);

  var milliseconds = (new Date).getTime(); // Today time
  var currentTimeInSeconds = parseInt(milliseconds / 1000);
  var startTime = currentTimeInSeconds + 86400; // startTime next day
  await deployer.deploy(MSTCrowdsale, startTime, wallet, MSTToken.address)

};
