import { Account, AccountFree, AccountPremium } from "./proxy.js";

const account = new Account({ owner: "John Doe", cash: 1000 });

const accountPremium = new AccountPremium();
accountPremium.deposit(account, 100);
accountPremium.showBalance(account);
accountPremium.withdraw(account, 50);
accountPremium.showBalance(account);

const accountFree = new AccountFree();
accountFree.deposit(account, 100);
accountFree.showBalance(account);
accountFree.withdraw(account, 50);
accountFree.showBalance(account);
