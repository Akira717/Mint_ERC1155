const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Mintcontract", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Mintcontract = await ethers.getContractFactory("NFTMint");
    const mintcontract = await Mintcontract.deploy("Hello, world!");
    await mintcontract.deployed();

    expect(await mintcontract.greet()).to.equal("Hello, world!");

    const setGreetingTx = await mintcontract.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await mintcontract.greet()).to.equal("Hola, mundo!");
  });
});
