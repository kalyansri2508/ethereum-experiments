pragma solidity ^0.4.4;

contract SimpleContract {
  string private name;
  function SimpleContract() {
    // constructor
  }
  function setName(string newName) public {name = newName;}
  function getName() public view returns (string){return name;}
}
