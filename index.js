class Account {

  constructor(username) {
    this.username = username;
    this.balance = 0;
  }
}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
  commit() {
    this.account.balance += this.value;
  }
}

class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }
}

class Deposit extends Transaction {
  get value() {
    return this.amount;
  }
}


// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account("Farida");

console.log('Starting Balance:', myAccount.balance);

const t1 = new Deposit(123.25, myAccount);
t1.commit();

const t2 = new Withdrawal(34.99, myAccount);
t2.commit();

const t3 = new Withdrawal(12.00, myAccount);
t3.commit();

console.log('Ending Balance:', myAccount.balance);
