# **Cash Register App**

## **Objective**
Build a cash register app that will return change to the customer based on the price of the item, the amount of cash provided by the customer, and the amount of cash in the cash drawer. The application should display different messages based on various scenarios, such as when the customer provides too little cash or when the cash drawer lacks the correct change.

The script will include:
- `price`: The price of the item.
- `cid`: The cash-in-drawer, represented as a 2D array listing available currency.
- `cash`: The amount of cash provided by the customer (from an input field).

## **Scenarios & Expected Outputs**
Your application should display different messages based on the given conditions:

1. **"Status: INSUFFICIENT_FUNDS"**  
   - If cash-in-drawer is **less** than the change due.
   - If you **cannot** return the exact change.

2. **"Status: CLOSED"**  
   - If cash-in-drawer is **exactly** equal to the change due.

3. **"Status: OPEN"**  
   - If cash-in-drawer is **greater** than the change due.
   - The change should be returned in the highest-to-lowest order of currency.

## **Currency Denominations**
| Currency Unit           | Amount  |
|------------------------|---------|
| Penny                 | $0.01 (PENNY) |
| Nickel                | $0.05 (NICKEL) |
| Dime                  | $0.10 (DIME) |
| Quarter               | $0.25 (QUARTER) |
| Dollar                | $1 (ONE) |
| Five Dollars          | $5 (FIVE) |
| Ten Dollars           | $10 (TEN) |
| Twenty Dollars        | $20 (TWENTY) |
| One Hundred Dollars   | $100 (ONE HUNDRED) |

## **User Stories**
- You should have an **input element** with an `id` of **"cash"**.
- You should have a **div, span, or p element** with an `id` of **"change-due"**.
- You should have a **button element** with an `id` of **"purchase-btn"**.

### **Functionality**
- If the value in the `#cash` element is **less** than `price`, display an **alert**:  
  `"Customer does not have enough money to purchase the item"`.

- If the value in the `#cash` element is **equal** to `price`, set `#change-due`:  
  `"No change due - customer paid with exact cash"`.

- **Example Cases:**
  1. **When**  
     - `price = 19.5`
     - `cash = 20`
     - `cid = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]`  
     - **On clicking `#purchase-btn`**, `#change-due` should display:  
       `"Status: OPEN QUARTER: $0.5"`

  2. **When**  
     - `price = 3.26`
     - `cash = 100`
     - `cid = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]`  
     - **On clicking `#purchase-btn`**, `#change-due` should display:  
       `"Status: OPEN TWENTY: $60 TEN: $20 FIVE: $15 ONE: $1 QUARTER: $0.5 DIME: $0.2 PENNY: $0.04"`

  3. **When**  
     - `price = 19.5`
     - `cash = 20`
     - `cid = [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]`  
     - **On clicking `#purchase-btn`**, `#change-due` should display:  
       `"Status: INSUFFICIENT_FUNDS"`

  4. **When**  
     - `price = 19.5`
     - `cash = 20`
     - `cid = [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]`  
     - **On clicking `#purchase-btn`**, `#change-due` should display:  
       `"Status: INSUFFICIENT_FUNDS"`

  5. **When**  
     - `price = 19.5`
     - `cash = 20`
     - `cid = [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]`  
     - **On clicking `#purchase-btn`**, `#change-due` should display:  
       `"Status: CLOSED PENNY: $0.5"`

## **Completion Criteria**
- Fulfill all the user stories.
- Pass all test cases.
- Add personal styling to enhance the UI.
- Make the app functionally similar to: [Cash Register Demo](https://cash-register.freecodecamp.rocks).

Happy Coding! 🚀