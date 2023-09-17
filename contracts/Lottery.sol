// SPDX-License-Identifier: GPL-3.0

//21 to 24

pragma solidity >=0.8.2 <0.9.0;

struct Player {
    address add;
    uint256 choice;
}

contract Lottery {
    uint256 public playersCount;

    uint256 public trueChoice;

    uint256 public winnerplayersCount;

    uint256 public winPrice = 0 ether;

    Player[] public allPlayers;

    Player[] public winnnerlist;

    address payable user;

    address public ww;

    uint256 public adde;

    uint256 public addedfrdfd;

    address owner;

    address payable[] public winners;

    constructor() {
        owner = msg.sender;
    }

    function getBalance() public view returns (uint256) {
        require(owner == msg.sender, "you are not manager");

        return address(this).balance;
    }

    function sendEthtoAcc(address a) public {
        adde = 5;

        user = payable(a);

        user.transfer(1 ether);
    }

    // payEth will let player to pay contract for betting

    // the amount we can fix from front-end

    function payEth(uint256 a) public payable returns (address) {
        require(msg.value == 3 ether, "Incorrect amount"); // this will allow user to send only specific amount

        adde = a;

        //ww = address(this);

        ww = msg.sender;

        allPlayers.push(Player(msg.sender, a));

        return msg.sender;
    }

    // this function will filter out true choices and save it to winner list

    function chooseWinner(uint256 dummy) public returns(Player[] memory) {
        trueChoice = dummy;

        for (uint256 i = playersCount; i < allPlayers.length; i++) {
            addedfrdfd = allPlayers[i].choice;

            if (allPlayers[i].choice == 1) {
                winnerplayersCount++; // will Count of right predictor

                winnnerlist.push(allPlayers[i]); // will add right predictor to winnerlist
            }

            playersCount++;
        }
        return winnnerlist;
    }

    // this function will send eth to the winners

    function sendEthToWinner() public {
        winPrice = ((playersCount * 2) / winnerplayersCount);

        for (uint256 i = 0; i < winnnerlist.length; i++) {
            user = payable(winnnerlist[i].add);

            user.transfer(winPrice * 1000000000000000000); // wei
        }
    }

    function getAllPalyers() public view returns (Player[] memory) {
        return allPlayers;
    }
}
