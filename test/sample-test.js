const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("JLToken", function () {
  it("Should mint and transfer an NFT to Some One", async function () {
    const JLToken = await ethers.getContractFactory("JLToken");
    const jltoken = await JLToken.deploy();
    await jltoken.deployed();

    console.log("jltoken deployed to:", jltoken.address);

    const recipient = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';

    const metadataURI = 'cid/test.png';

    let balance = await jltoken.balanceOf(recipient);
    expect(balance).to.equal(0);

    const newlyMintedToken = await jltoken.payToMint(recipient, metadataURI, { value: ethers.utils.parseEther('0.05') });
    // wait until the transaction is mined
    await newlyMintedToken.wait();    
    balance = await jltoken.balanceOf(recipient)
    expect(balance).to.equal(1);

    // wait until the transaction is mined
    
    expect(await jltoken.isContentOwned(metadataURI)).to.equal(true);
    const newlyMintedToken2 = await jltoken.payToMint(recipient, 'foo', { value: ethers.utils.parseEther('0.05') });

    
  });
});
