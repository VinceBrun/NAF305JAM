// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Admin {
    address public admin;
    uint256 public lastMemberId; // Store the last issued membership ID

    struct Member {
        string name;
        string registrationId;
        string image;
        uint256 registrationFees;
        uint256 membershipRenewalFees;
        uint256 monthlyDues;
        uint256 monthlyLevies;
    }

    mapping(address => Member) private members;
    address[] public memberAddresses;

    event RegistrationIdGenerated(address indexed member, string registrationId);
    event MembershipRevoked(address indexed member);
    event FinancialStatusUpdated(address indexed member, uint256 registrationFees, uint256 membershipRenewalFees, uint256 monthlyDues, uint256 monthlyLevies);
    event MembershipIdGenerated(address indexed member, string membershipId);

    constructor() {
        admin = msg.sender;
        lastMemberId = 0;
    }

    // Modifier to check if the caller is the admin
    modifier onlyAdmin() {
        require(msg.sender == admin, "Only the admin can call this function.");
        _;
    }

    // Modifier to check if the caller is the member of the specified address
    modifier onlyMember(address memberAddress) {
        require(memberAddress == msg.sender, "You can only access your own dashboard.");
        _;
    }

    // Modifier to check if the caller is either the admin or the member of the specified address
    modifier onlyAdminOrMember(address memberAddress) {
        require(memberAddress == msg.sender || msg.sender == admin, "Only the admin or the member can access this function.");
        _;
    }

    // Function to generate a unique registration ID for a member
    function generateRegistrationId(string memory name, string memory image) external onlyAdmin {
        string memory registrationId = _generateRandomId();
        members[msg.sender].name = name;
        members[msg.sender].registrationId = registrationId;
        members[msg.sender].image = image;
        memberAddresses.push(msg.sender);

        emit RegistrationIdGenerated(msg.sender, registrationId);
    }

    // Function to update the financial status of a member
    function updateFinancialStatus(address member, uint256 registrationFees, uint256 membershipRenewalFees, uint256 monthlyDues, uint256 monthlyLevies) external onlyAdmin {
        members[member].registrationFees = registrationFees;
        members[member].membershipRenewalFees = membershipRenewalFees;
        members[member].monthlyDues = monthlyDues;
        members[member].monthlyLevies = monthlyLevies;

        emit FinancialStatusUpdated(member, registrationFees, membershipRenewalFees, monthlyDues, monthlyLevies);
    }

    // Function to revoke the membership of a member
    function revokeMembership(address member) external onlyAdmin {
        delete members[member];
        for (uint256 i = 0; i < memberAddresses.length; i++) {
            if (memberAddresses[i] == member) {
                memberAddresses[i] = memberAddresses[memberAddresses.length - 1];
                memberAddresses.pop();
                break;
            }
        }

        emit MembershipRevoked(member);
    }

    // Function to get the number of registered members
    function getMembersCount() external view returns (uint256) {
        return memberAddresses.length;
    }

    // Function to get the details of a member at the specified index
    function getMemberDetails(uint256 index) external view returns (string memory, string memory, string memory) {
        require(index < memberAddresses.length, "Invalid index.");
        address memberAddress = memberAddresses[index];
        Member memory member = members[memberAddress];
        return (member.name, member.registrationId, member.image);
    }

    // Function to get the name of a member given their address
    function getMemberName(address memberAddress) external view returns (string memory) {
        return members[memberAddress].name;
    }

    // Function to get the financial status of a member given their address
    function getFinancialStatus(address memberAddress) external view returns (
        uint256 registrationFees,
        uint256 membershipRenewalFees,
        uint256 monthlyDues,
        uint256 monthlyLevies
    ) {
        return (
            members[memberAddress].registrationFees,
            members[memberAddress].membershipRenewalFees,
            members[memberAddress].monthlyDues,
            members[memberAddress].monthlyLevies
        );
    }

    // Function to get the dashboard details of a member
    function getMemberDashboard() external view onlyMember(msg.sender) returns (string memory) {
        Member memory member = members[msg.sender];
        return string(abi.encodePacked("Welcome to your dashboard, ", member.name, "!"));
    }

    // Function to get the admin dashboard
    function getAdminDashboard() external view onlyAdmin returns (string memory) {
        return "Welcome to the Admin Dashboard!";
    }

    // Internal function to generate a random registration ID for a member
    function _generateRandomId() private view returns (string memory) {
        uint256 randomNumber = uint256(keccak256(abi.encodePacked(block.timestamp, block.basefee, msg.sender))) % 10000;
        string memory registrationId = string(abi.encodePacked(toString(randomNumber), "JAM"));
        return registrationId;
    }

    // Function to generate a unique membership ID in the format "NAF/JAM/305SMG/xxx"
    function generateUniqueMembershipId() public returns (string memory) {
        lastMemberId++;
        string memory prefix = "NAF/JAM/305SMG/";
        string memory idNumber = _toStringWithLeadingZeros(lastMemberId, 3);
        string memory uniqueId = string(abi.encodePacked(prefix, idNumber));

        emit MembershipIdGenerated(msg.sender, uniqueId);
        return uniqueId;
    }

    // Helper function to convert a uint to a string with leading zeros
    function _toStringWithLeadingZeros(uint256 value, uint256 length) private pure returns (string memory) {
        bytes memory buffer = new bytes(length);

        for (uint256 i = 0; i < length; i++) {
            buffer[i] = bytes1("0");
        }

        uint256 temp = value;
        uint256 digitPos = length - 1;

        while (temp != 0 && digitPos >= 0) {
            buffer[digitPos] = bytes1(uint8(48 + uint256(temp % 10)));
            temp /= 10;
            digitPos--;
        }

        string memory result = string(buffer);
        return result;
    }

    // Helper function to convert a uint to a string
    function toString(uint256 value) internal pure returns (string memory) {
        if (value == 0) {
            return "0";
        }

        uint256 temp = value;
        uint256 digits;

        while (temp != 0) {
            digits++;
            temp /= 10;
        }

        bytes memory buffer = new bytes(digits);

        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));
            value /= 10;
        }

        return string(buffer);
    }
}