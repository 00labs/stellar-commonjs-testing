require("dotenv").config();
const SDK = require("@huma-finance/soroban-sdk");

const borrower = new SDK.StellarWallet(process.env.TEST_PRIVATE_KEY);

const helper = SDK.CreditContractHelper;
console.log(helper);
async function getBalance() {
  const res = await helper.getAvailableBalanceForPool(
    "Roam",
    "testnet",
    borrower
  );
  console.log(res);
}

getBalance();
