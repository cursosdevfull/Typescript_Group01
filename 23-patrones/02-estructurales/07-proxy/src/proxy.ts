export interface IAccount {
  owner: string;
  cash: number;
}

export class Account {
  private readonly accountId: number;
  private readonly owner: string;
  private _cash: number;

  constructor(info: IAccount) {
    this.accountId = Date.now();
    this.owner = info.owner;
    this._cash = info.cash;
  }

  get cash(): number {
    return this._cash;
  }

  set cash(value: number) {
    this._cash = value;
  }
}

export interface IAccountProxy {
  deposit(account: Account, amount: number): void;
  withdraw(account: Account, amount: number): void;
  showBalance(account: Account): void;
}

export class AccountPremium implements IAccountProxy {
  commission: number = 0.05;

  deposit(account: Account, amount: number): void {
    const cash = account.cash;
    account.cash = cash + amount - amount * this.commission;
  }

  withdraw(account: Account, amount: number): void {
    const cash = account.cash;
    account.cash = cash - amount - amount * this.commission;
  }

  showBalance(account: Account): void {
    console.log(`El saldo de la cuenta es ${account.cash}`);
  }
}

export class AccountFree implements IAccountProxy {
  commission: number = 0;
  feeDeposit: number = 1;
  feeWithdraw: number = 2;

  deposit(account: Account, amount: number): void {
    const cash = account.cash;
    account.cash = cash + amount - this.feeDeposit;
  }

  withdraw(account: Account, amount: number): void {
    const cash = account.cash;
    account.cash = cash - amount - this.feeWithdraw;
  }

  showBalance(account: Account): void {
    console.log(`El saldo de la cuenta es ${account.cash}`);
  }
}
