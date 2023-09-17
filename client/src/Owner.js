// whenever we change state of contract we have to use .send otherwise we need to call .call

import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { Button, Select, MenuItem, Checkbox } from "@material-ui/core";
// import "./All.css";
export default function Owner({ state }) {
  const [acc, setAcc] = useState("");
  const [bal, setBal] = useState(0);
   const [choice,setChoice] = useState(0)
  const [trueChoice, SettrueChoice] = useState(100);

  const handleChangeee=(e)=>{
setChoice( e.target.value)
  }
  const sendmoney = async (a) => {
    console.log("dsd");
    const { contract } = state;

    try {
      const accs = await contract.methods.payEth(a).send({ from: acc });
    } catch (e) {
      console.log("eee", e);
    }
  };
  const sendmoneytocertain = async (a) => {
    console.log("dsd");
    const { contract } = state;

    try {
      const accs = await contract.methods
        .sendEthtoAcc("0xc7FFaaE85E53C173008Df6CC075dF9054DdD4B1d")
        .send({ from: acc });
    } catch (e) {
      console.log("eee", e);
    }
  };

  const getContractBalance = async () => {
    const { contract } = state;

    try {
      const balance = contract.methods.getBalance().call({ from: acc });
      console.log("balance", balance);
      setBal(balance);
    } catch (e) {
      console.log("e", e);
    }
  };

  useEffect(() => {
    const geAc = async () => {
      const { web3 } = state;
      const acs = await web3.eth.getAccounts();
      console.log(acs[0]);
      setAcc(acs[0]);
    };
    state.web3 && geAc();
  }, [state, state.web3]);

  const [bets, setBets] = useState(["1", "2", "3"]);
  const [events, setEvents] = useState([
    { string: "fvnfevkl", index: 43 },
    { string: "fvnfevkl", index: 43 },
    { string: "fvnfevkl", index: 43 },
  ]);

  const handleChange = (event) => {
    // 👇 Get input value from "event"
    SettrueChoice(event.target.value);
  };
  return (
    <div>
      <div className="frame">
        <div>
          <h1>no of Players in current event is : 5</h1>
          <div>
            <button
              onClick={async () => {
                const { contract } = state;if(choice==0){
                  console.log("error")
                }
                else{
                try {
                  const accs = await contract.methods
                    .chooseWinner(choice)
                    .send({ from: acc });
                  console.log(accs,"kk");
                } catch (e) {
                  console.log("eee", e);
                }
              }}}
            >
              Choose winner for this event
            </button>
            <button
              onClick={async () => {
                const { contract } = state;
                try {
                  const accs = await contract.methods
                    .sendEthToWinner()
                    .send({ from: acc ,gasLimit: 100000});
                  console.log(accs,"kk");
                } catch (e) {
                  console.log("eee", e);
                }
              }}
            >
              send eth to winner
            </button>
          
             <div>
   batting value :
   <Select
    labelId="demo-select-small"
    id="demo-select-small"
    // value={designation/}
    label="batting value"
    onChange={handleChangeee}
  >
    <MenuItem value={1}>1 </MenuItem>
    <MenuItem value={2}>2 </MenuItem>
    <MenuItem value={3}>3 </MenuItem>
  </Select>
</div>
          </div>
          to check balance of this contract press
          <button
            onClick={()=>getContractBalance()}
          >
            check balance{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

// <h3>Create new event </h3>
// <div style={{ margin: 20 }}>
//   <TextField
//     fullWidth
//     id="outlined-name"
//     label="Enter Event Discription here"
//     variant="outlined"
//   />
// </div>
// <div>
//   batting value :
//   <Select
//     labelId="demo-select-small"
//     id="demo-select-small"
//     // value={designation}
//     label="batting value"
//     // onChange={handleChangeee}
//   >
//     <MenuItem value={"1 ETH"}>1 ETH</MenuItem>
//     <MenuItem value={"2 ETH"}>2 ETH</MenuItem>
//     <MenuItem value={"3 ETH"}>3 ETH</MenuItem>
//     <MenuItem value={"4 ETH"}>4 ETH</MenuItem>
//   </Select>
// </div>
// </div>
// <button
// onClick={() => {
//   sendmoney(1000000);
// }}
// >
// callbalasgsgdfggdfne
// {bal}
// </button>
// <button
// onClick={() => {
//   sendmoneytocertain('0xc7FFaaE85E53C173008Df6CC075dF9054DdD4B1d');
// }}
// >
// fgfgfg
// {bal}
// </button>
// <div
// style={{
//   backgroundColor: "green",
//   display: "flex",
//   justifyContent: "center",
//   margin: 30,
// }}
// >
// <table>
//   {events.map((r) => {
//     return (
//       <div>
//         <td>{r.index}</td>
//         <td>
//           <div style={{ width: 750 }}>{r.string}</div>
//         </td>
//         <td>
//           <button>cancel</button>
//           <button
//             onClick={() => {
//               getContractBalance();
//             }}
//           >
//             callbalane
//             {bal}
//           </button>
//         </td>
//         <td>
//           <button>choose winner</button>
//         </td>
//       </div>
//     );
//   })}
// </table>
