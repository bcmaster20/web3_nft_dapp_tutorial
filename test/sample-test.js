const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("JLToken", function () {
  it("Should mint and transfer an NFT to Some One", async function () {
    const JLToken = await ethers.getContractFactory("JLToken");
    const jltoken = await JLToken.deploy("Hello, world!");
    await jltoken.deployed();

    console.log("jltoken deployed to:", jltoken.address);

    const recipient = '';

    // wait until the transaction is mined
    

    
  });
});
