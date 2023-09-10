// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./Admin.sol";

contract MemberContract {
    address public memberAddress;
    Admin public adminContract;

    struct MemberProfile {
        string name;
        string phoneNumber;
        string image;
        string maritalStatus;
        string emailAddress;
        string houseAddress;
        string sex;
        string dateOfBirth;
        string validIdNumber;
    }

    MemberProfile public memberProfile;
    bool public isAdminRegistered;
    string public registrationId;
    string public membershipId;

    // Mapping to keep track of registered wallet addresses
    mapping(address => bool) public isRegistered;

    // Constructor to set the member address and link to the admin contract
    constructor(address _adminContractAddress) {
        memberAddress = msg.sender;
        adminContract = Admin(_adminContractAddress);
        isAdminRegistered = false;
    }

    // Function for members to input their unique registration ID provided by the admin
    function inputRegistrationId(string memory _registrationId) external {
        require(isAdminRegistered == false, "You have already inputted a registration ID.");
        require(bytes(adminContract.getMemberName(memberAddress)).length > 0, "Invalid registration ID.");

        isAdminRegistered = true;
        registrationId = _registrationId;
    }

    // Function for a member to self-register with their details
    function registerSelf(
        string memory _name,
        string memory _phoneNumber,
        string memory _image,
        string memory _maritalStatus,
        string memory _emailAddress,
        string memory _houseAddress,
        string memory _sex,
        string memory _dateOfBirth,
        string memory _validIdNumber
    ) external {
        require(isAdminRegistered, "Please input a valid registration ID provided by the admin.");
        require(!isRegistered[msg.sender], "You have already registered.");

        memberProfile = MemberProfile(
            _name,
            _phoneNumber,
            _image,
            _maritalStatus,
            _emailAddress,
            _houseAddress,
            _sex,
            _dateOfBirth,
            _validIdNumber
        );

        // Generate the membership ID and store it in the contract
        membershipId = generateUniqueMembershipId();
        emit MembershipIdGenerated(memberAddress, membershipId);

        // Mark the wallet address as registered
        isRegistered[msg.sender] = true;
    }

    // Function to update member profile information
    function updateProfile(
        string memory _name,
        string memory _phoneNumber,
        string memory _image,
        string memory _maritalStatus,
        string memory _emailAddress,
        string memory _houseAddress,
        string memory _sex,
        string memory _dateOfBirth,
        string memory _validIdNumber
    ) external {
        require(msg.sender == memberAddress, "You can only update your own profile.");

        memberProfile.name = _name;
        memberProfile.phoneNumber = _phoneNumber;
        memberProfile.image = _image;
        memberProfile.maritalStatus = _maritalStatus;
        memberProfile.emailAddress = _emailAddress;
        memberProfile.houseAddress = _houseAddress;
        memberProfile.sex = _sex;
        memberProfile.dateOfBirth = _dateOfBirth;
        memberProfile.validIdNumber = _validIdNumber;

        emit ProfileUpdated(memberAddress, _name, _image);
    }

    // Function to get the member's profile information
    function getMemberProfile() external view returns (
        string memory,      // MemberProfile name
        string memory,      // MemberProfile phoneNumber
        string memory,      // MemberProfile image
        string memory,      // MemberProfile maritalStatus
        string memory,      // MemberProfile emailAddress
        string memory,      // MemberProfile houseAddress
        string memory,      // MemberProfile sex
        string memory,      // MemberProfile dateOfBirth
        string memory       // MemberProfile validIdNumber
    ) {
        return (
            memberProfile.name,
            memberProfile.phoneNumber,
            memberProfile.image,
            memberProfile.maritalStatus,
            memberProfile.emailAddress,
            memberProfile.houseAddress,
            memberProfile.sex,
            memberProfile.dateOfBirth,
            memberProfile.validIdNumber
        );
    }

    // Function to get the member's financial status information
    function getMemberFinancialStatus() external view returns (
        uint256,            // registrationFees
        uint256,            // membershipRenewalFees
        uint256,            // monthlyDues
        uint256             // monthlyLevies
    ) {
        (
            uint256 registrationFees,
            uint256 membershipRenewalFees,
            uint256 monthlyDues,
            uint256 monthlyLevies
        ) = adminContract.getFinancialStatus(memberAddress);

        return (
            registrationFees,
            membershipRenewalFees,
            monthlyDues,
            monthlyLevies
        );
    }

    // Function to generate a unique membership ID in the format "NAF/JAM/305SMG/xxx"
    function generateUniqueMembershipId() private returns (string memory) {
        return adminContract.generateUniqueMembershipId();
    }

    // Function to convert a uint to a string
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

    // Event to notify when the profile is updated
    event ProfileUpdated(address indexed member, string name, string image);
    // Event to notify when the membership ID is generated
    event MembershipIdGenerated(address indexed member, string membershipId);
}