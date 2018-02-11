pragma solidity ^0.4.4;

contract SimpleContract {
  string private name;
  address private owner;
  function SimpleContract() {
    // constructor
    owner = msg.sender;
  }
  function setName(string newName) public {name = newName;}
  function getName() public view returns (string){return name;}
  function getOwner()public view returns(address) {
    return owner;
  }
}
