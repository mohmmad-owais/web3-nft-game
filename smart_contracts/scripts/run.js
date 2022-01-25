const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
      ["Superman", "IronMan", "Batman"],       // Names
      ["https://i.imgur.com/V9gzxMw.jpeg", // Images
      "https://i.imgur.com/Dp2sLsF.jpeg", 
      "https://i.imgur.com/2aTo5Jr.jpeg"],
      [100, 200, 1],                    // HP values
      [100, 50, 25],                       // Attack damage values

      "Thanos", // Boss name
      "https://media.comicbook.com/2017/09/avengers-infinity-war-thanos-infinity-gauntlet-1018561.jpeg", // Boss image
      10000, // Boss hp
      50 // Boss attack damage
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);


    let txn;
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();
    
    txn = await gameContract.attackBoss();
    await txn.wait();
    
    txn = await gameContract.attackBoss();
    await txn.wait();



  };
  


  

  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();