## Getting Started

Create a project using this example:

```bash
npx thirdweb create --contract --template hardhat-javascript-starter
```

You can start editing the page by modifying `contracts/Contract.sol`.

To add functionality to your contracts, you can use the `@thirdweb-dev/contracts` package which provides base contracts and extensions to inherit. The package is already installed with this project. Head to our [Contracts Extensions Docs](https://portal.thirdweb.com/contractkit) to learn more.

## Building the project

After any changes to the contract, run:

```bash
npm run build
# or
yarn build
```

to compile your contracts. This will also detect the [Contracts Extensions Docs](https://portal.thirdweb.com/contractkit) detected on your contract.

## Deploying Contracts

When you're ready to deploy your contracts, just run one of the following command to deploy you're contracts:

```bash
npm run deploy
# or
yarn deploy
```

## Releasing Contracts

If you want to release a version of your contracts publicly, you can use one of the followings command:

```bash
npm run release
# or
yarn release
```

## Join our Discord!

For any questions, suggestions, join our discord at [https://discord.gg/thirdweb](https://discord.gg/thirdweb).


## What the smart contract does.

**Admin Contract:**
The `Admin` contract is responsible for managing the registration of members and their financial status. It stores member details, such as name, registration ID, image, and financial information, including registration fees, membership renewal fees, monthly dues, and monthly levies.

**Contract Structure:**
1. `admin`: An address variable that stores the address of the contract admin.
2. `lastMemberId`: A uint256 variable that stores the last issued membership ID.
3. `Member` struct: A struct that defines the details of a member, including their name, registration ID, image, and financial information.
4. `members`: A private mapping that stores the details of each member, identified by their address.
5. `memberAddresses`: An array that stores the addresses of all registered members.
6. Events: `RegistrationIdGenerated`, `MembershipRevoked`, `FinancialStatusUpdated`, and `MembershipIdGenerated` are events used to notify the frontend about important contract activities.

**Contract Functions:**
1. `generateRegistrationId`: Only the admin can call this function to generate a unique registration ID for a member. The generated ID is a combination of a random number and the word "Admin."
2. `updateFinancialStatus`: Only the admin can call this function to update the financial status of a member. The admin can set the registration fees, membership renewal fees, monthly dues, and monthly levies for a member.
3. `revokeMembership`: Only the admin can call this function to revoke the membership of a member. It removes the member's details from the contract.
4. `getMembersCount`: This function returns the number of registered members.
5. `getMemberDetails`: Given an index, this function returns the name, registration ID, and image of a member at that index.
6. `getMemberName`: Given a member's address, this function returns the member's name.
7. `getFinancialStatus`: Given a member's address, this function returns their financial status (registration fees, membership renewal fees, monthly dues, and monthly levies).
8. `getMemberDashboard`: This function can be called only by a member and returns a personalized welcome message.
9. `generateUniqueMembershipId`: A private function that generates a unique membership ID in the format "JAM/305-SMG/xxx". This ID is based on the total number of registered members and is used to identify each member.
10. Helper Functions: `toString` and `_generateRandomId` are internal functions to convert a uint to a string and to generate a random registration ID for a member, respectively.

**Member Contract:**
The `MemberContract` contract handles the registration process for members. It allows a member to input their unique registration ID provided by the admin, register themselves with their details, update their profile information, and retrieve their profile and financial status.

**Contract Structure:**
1. `memberAddress`: An address variable that stores the address of the member who is using this contract.
2. `adminContract`: A reference to the `Admin` contract, allowing the member contract to interact with the admin contract.
3. `MemberProfile` struct: A struct that defines the details of a member, including their name, phone number, image, marital status, email address, house address, sex, date of birth, and valid ID number.
4. `memberProfile`: A public variable that stores the member's profile information.
5. `isAdminRegistered`: A boolean variable that indicates whether the member has already inputted a valid registration ID.
6. `registrationId`: A string variable that stores the member's registration ID.
7. `membershipId`: A string variable that stores the member's generated membership ID.

**Contract Functions:**
1. `inputRegistrationId`: This function allows a member to input their unique registration ID provided by the admin. The member must input a valid registration ID before proceeding with other actions.
2. `registerSelf`: This function allows a member to register themselves with their personal details. It requires a valid registration ID provided by the admin. Upon successful registration, the contract generates a unique membership ID for the member.
3. `updateProfile`: This function allows a member to update their profile information. Only the member themselves can call this function.
4. `getMemberProfile`: This function returns the member's profile information, including name, phone number, image, marital status, email address, house address, sex, date of birth, and valid ID number.
5. `getMemberFinancialStatus`: This function returns the financial status of the member, including registration fees, membership renewal fees, monthly dues, and monthly levies.
6. `generateUniqueMembershipId`: This function calls the `generateUniqueMembershipId` function from the `Admin` contract to generate a unique membership ID for the member.
7. Helper Function: `toString` is an internal function to convert a uint to a string.

**Usage:**
1. First, deploy the `Admin` contract.
2. Deploy the `MemberContract` contract, passing the address of the deployed `Admin` contract as a constructor argument.
3. As an admin, use the `generateRegistrationId` function to generate a unique registration ID for each member.
4. Members can then use the `inputRegistrationId` function to input their registration ID.
5. Members can call the `registerSelf` function with their personal details to complete their registration and generate a membership ID.
6. Members can update their profile information using the `updateProfile` function.
7. Members can retrieve their profile information and financial status using the appropriate getter functions.

Remember that the `Admin` contract acts as an admin interface for managing member details, while the `MemberContract` contract allows members to interact with the system, register themselves, and manage their profiles.