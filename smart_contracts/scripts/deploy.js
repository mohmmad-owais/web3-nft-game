const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
        ["Superman", "IronMan", "Batman"],       // Names
        ["QmRnicPacL1QGdqTLNouj7mzPn1ytqvhQPW5qQfqTwLYQm", // Images
        "QmdHGCd8arbeMo1aM75f4RBf6itTAbYBCK6XeW85LTU2nw", 
        "QmaeSVspwkP49RzZKzCR2pkxVMDFAWarETHQYs1fURGLYG"],
        [100, 200, 300],  // HP values
        [100, 50, 25],     // Attack damage values
        
        "Thanos", // Boss name
        "https://media.comicbook.com/2017/09/avengers-infinity-war-thanos-infinity-gauntlet-1018561.jpeg", // Boss image
        10000, // Boss hp
        50 // Boss attack damage
      
        );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
  
    
   
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


  // ["https://i.imgur.com/V9gzxMw.jpeg", // Images
  //       "https://i.imgur.com/Dp2sLsF.jpeg", 
  //       "https://i.imgur.com/2aTo5Jr.jpeg"],