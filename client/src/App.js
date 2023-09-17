import React, { useState, useEffect } from "react";
import getWeb3 from "./getWeb3";
import Lottery from "./contracts/Lottery.json";
import "./App.css";
import Player from "./Player";
import Owner from "./Owner";

const App = () => {
  const [isWalltetConnected,setWalltetConnected] =useState(false)
  const [state, setState] = useState({
    web3: null,
    contract: null,
  });
  const [OwnerTab, setOwnerTab] = useState(false);
  useEffect(() => {
    const init = async () => {
      try {
        const web3 = await getWeb3({a:setWalltetConnected});
        const networkId = await web3.eth.net.getId();

        const deployedNetwork = Lottery.networks[networkId];
        console.log("Contract Address:", deployedNetwork.address);
        const instance = new web3.eth.Contract(
          Lottery.abi,
          deployedNetwork && deployedNetwork.address
        );
        setState({ web3, contract: instance });
      } catch (error) {
        alert("Falied to load web3 or contract.");
        console.log(error);
      }
    };
    init();
  }, []);

  return (
    <div className="App">
      <div>Hello World</div>
      <div className="main" >
      <div className="tabs" onClick={()=>setOwnerTab(false)}>Player</div> 
      <div className="tabs" onClick={()=>setOwnerTab(true)}>Owner</div> </div>
    <div>
    {!OwnerTab ? <Player state={state} b={setWalltetConnected} a={isWalltetConnected}/> : <Owner state={state} />}</div>
    </div>
  );
};
export default App;


// Compiling your contracts...
// ===========================
// > Compiling .\contracts\Lottery.sol
// > Compiling .\contracts\Lottery.sol
// > Artifacts written to D:\dappTwo\ks\client\src\contracts
// > Compiled successfully using:
//    - solc: 0.8.11+commit.d7f03943.Emscripten.clang


// Starting migrations...
// ======================
// > Network name:    'development'
// > Network id:      5777
// > Block gas limit: 6721975 (0x6691b7)



// 1_deploy_contracts.js
// =====================

//    Replacing 'Lottery'
//    -------------------
//    > transaction hash:    0x19acadfd42d0ac5363ab952df31ab374eb3cd4c3842cde88f11e72861b3a550c
//    > Blocks: 0            Seconds: 0
//    > contract address:    0x9032B3F48FB2eD4257c6BEb3D491faD414E7ed71
//    > block number:        23
//    > block timestamp:     1692857162
//    > account:             0x11149dbAEC95Bb5F41C20Acb945105137c82B617
//    > balance:             99.89856254
//    > gas used:            865854 (0xd363e)
//    > gas price:           20 gwei
//    > value sent:          0 ETH
//    > total cost:          0.01731708 ETH




// goerli testnetcd 



// > transaction hash:    0xefebda7ab4668ba2de5ec6c1cf145b9e86c060cda3f87507ea89a392f65b1170
// > Blocks: 0            Seconds: 8
// > contract address:    0x6AA0F54A7319478Bb509784f4ff5aa6551745714
// > block number:        9594611
// > block timestamp:     1693213560
// > account:             0x3CF0BEde9C5FeB1cC2CF28017D5130b75c13D3E5
// > balance:             0.02782802498609936
// > gas used:            868790 (0xd41b6)
// > gas price:           2.500000016 gwei
// > value sent:          0 ETH
// > total cost:          0.00217197501390064 ETH

// Pausing for 2 confirmations...

// -------------------------------
// > confirmation number: 1 (block: 9594612)
// > confirmation number: 2 (block: 9594613)
// > Saving artifacts
// -------------------------------------
// > Total cost:     0.00217197501390064 ETH

// Summary
// =======
// > Total deployments:   1
// > Final cost:          0.00217197501390064 ETH
