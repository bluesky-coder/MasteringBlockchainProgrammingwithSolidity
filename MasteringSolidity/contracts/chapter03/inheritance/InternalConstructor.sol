pragma solidity ^0.4.24;

contract InternalConstructor {

    uint public value = 10;

    constructor () internal {

    }

    function setValue(uint _value) public {
        value = _value;
    }
}
