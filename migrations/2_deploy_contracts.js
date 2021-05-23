const JawsToken = artifacts.require("./JawsToken.sol");

module.exports = function (deployer) {
  deployer.deploy(JawsToken, 1000000);
};