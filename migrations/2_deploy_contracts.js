const FileVault = artifacts.require("FileVault");

module.exports = function(deployer) {
  deployer.deploy(FileVault);
};
