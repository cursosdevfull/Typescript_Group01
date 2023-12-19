export class Account {
    constructor(info) {
        this.accountId = Date.now();
        this.owner = info.owner;
        this._cash = info.cash;
    }
    get cash() {
        return this._cash;
    }
    set cash(value) {
        this._cash = value;
    }
}
export class AccountPremium {
    constructor() {
        this.commission = 0.05;
    }
    deposit(account, amount) {
        const cash = account.cash;
        account.cash = cash + amount - amount * this.commission;
    }
    withdraw(account, amount) {
        const cash = account.cash;
        account.cash = cash - amount - amount * this.commission;
    }
    showBalance(account) {
        console.log(`El saldo de la cuenta es ${account.cash}`);
    }
}
export class AccountFree {
    constructor() {
        this.commission = 0;
        this.feeDeposit = 1;
        this.feeWithdraw = 2;
    }
    deposit(account, amount) {
        const cash = account.cash;
        account.cash = cash + amount - this.feeDeposit;
    }
    withdraw(account, amount) {
        const cash = account.cash;
        account.cash = cash - amount - this.feeWithdraw;
    }
    showBalance(account) {
        console.log(`El saldo de la cuenta es ${account.cash}`);
    }
}
