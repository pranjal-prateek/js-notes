/**
 * ==============================
 * Encapsulation in JavaScript (Data Hiding)
 * ==============================
 * Encapsulation is a core concept of Object-Oriented Programming (OOP) that restricts direct access to certain data.
 * It ensures data security by allowing access only through defined methods.
 *
 * ✅ Key Benefits:
 * - Prevents unauthorized access to data.
 * - Ensures data integrity by controlling modifications.
 * - Hides implementation details from the user.
 */

class Bank {
  #balance; // Private field: Cannot be accessed directly from outside the class

  constructor(initialBalance) {
    // Ensure the initial balance is not negative
    if (initialBalance < 0) {
      throw new Error("Initial balance cannot be negative");
    }
    this.#balance = initialBalance;
  }

  /**
   * Getter method to safely access the balance
   */
  getBalance() {
    return this.#balance;
  }

  /**
   * Method to deposit money (Encapsulated logic)
   * Prevents negative deposits
   */
  deposit(amount) {
    if (amount <= 0) {
      console.log("Deposit amount must be greater than zero.");
      return;
    }
    this.#balance += amount;
    console.log(`Deposited: $${amount}. Current balance: $${this.#balance}`);
  }

  /**
   * Method to withdraw money (Encapsulated logic)
   * Prevents withdrawal if insufficient balance
   */
  withdrawal(amount) {
    if (amount <= 0) {
      console.log("Withdrawal amount must be greater than zero.");
      return;
    }
    if (this.#balance >= amount) {
      this.#balance -= amount;
      console.log(`Withdrawn: $${amount}. Current balance: $${this.#balance}`);
    } else {
      console.log("Insufficient balance.");
    }
  }
}

// ✅ Example Usage
const myBankAccount = new Bank(1000);
myBankAccount.deposit(500); // Deposited: $500. Current balance: $1500
myBankAccount.withdrawal(200); // Withdrawn: $200. Current balance: $1300
myBankAccount.withdrawal(2000); // Insufficient balance
console.log("Final Balance:", myBankAccount.getBalance()); // Safe access to balance
