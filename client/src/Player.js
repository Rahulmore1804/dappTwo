import React, { useState, useEffect } from "react";

import { TextField } from "@mui/material";
import { Button, Select, MenuItem, Checkbox } from "@material-ui/core";
// import '../src/cal.scss'
// import "./All.css";
export default function Player({ state, b, a }) {
  const [acc, setAcc] = useState("");
  const [isEnrolled, setEnrolled] = useState(false);
  const enroll = async (e) => {
    const { contract } = state;
    try {
      const accs = await contract.methods
        .payEth(e)
        .send({ from: acc, gasLimit: 100000, value: 3000000000000000000 });
    } catch (e) {
      console.log("eee", e);
    }
  };
  const [connected, setConnected] = useState(false);
  const [applied, setApplied] = useState(false);
  const [allPlayers, setAllPlayers] = useState([]);
  const [list, setList] = useState([1, 2, 3]);
  const [choice,setChoice] = useState(0)
  const [bets, setBets] = useState(["1", "2", "3"]);
  const [events, setEvents] = useState([
    { string: "Event Name", index: 1 },
    { string: "fvnfevkl", index: 2 },
    { string: "fvnfevkl", index: 3 },
  ]);
  const handleChangeee=(e)=>{
setChoice( e.target.value)
  }

  useEffect(async () => {
    const geta = async () => {
      const { web3 } = state;
      const acs = await web3.eth.getAccounts();
      const { contract } = state;
      try {
        const accs = await contract.methods.getAllPalyers().call();
        setAllPlayers(accs);
        for (let i = 0; i < accs.length; i++) {
          if (accs[i][0] == acs[0]) {
            setEnrolled(true);
          } else {
            console.log("user not enrolled");
          }
        }
      } catch (e) {
        console.log("eee", e);
      }
    };
    const geAc = async () => {
      const { web3 } = state;
      const acs = await web3.eth.getAccounts();
      console.log(acs[0]);
      setAcc(acs[0]);
    };
    state.web3 && geAc() && geta();
  }, [state, state.web3]);

  return (
    <div>
      {a ? (
        <div className="demo">wallet connected successfully</div>
      ) : (
        <div className="demo">
          connect your wallet to get Enrolled
          <button
            style={{ width: 100, height: 40, fontSize: 20 }}
            onClick={() => {
              window.location.reload();
            }}
          >
            Connect
          </button>
        </div>
      )}
      {isEnrolled ? (
        <div className="demo">you have already been part of this Event</div>
      ) : (
        <div className="demo1">
          Pay 2 Eth to enroll this event
          <button
            style={{ width: 200, height: 40, fontSize: 20 }}
            onClick={() => {
              enroll(choice);
            }}
          >
            Pay and Enroll
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
      )}
      <div
        style={{
          backgroundColor: "green",
          display: "flex",
          justifyContent: "center",
          marginTop: 30,
          color: "white",
        }}
      >
    
        <table>
          {allPlayers.map((r) => {
            return (
              <div>
                <td>{r[0]}</td>
                <td>{r[1]}</td>
              </div>
            );
          })}
        </table>
      </div>
    </div>
  );
}
