class Category:
    """Represent one ledger which contains all transaction, include deposit and withdraw.

    Attributes:
        category (str): A name for ledger.
    """
    
    def __init__(self,category: str):
        """
        Initialize a ledger with given category name.
        
        Args:
            category (str): A name for ledger.
        
        """
        self.ledger = []
        self.category = category

    def deposit(self,amount: float,description: str = ""):
        """
        Add a dictionary which contain amount and description of the tracsaction to its ledger.
        
        Args:
            amount (float): Amount of the money to deposit.
            description (str, optional): Description of the transaction.
        
        """
        self.ledger.append(
            {
                'amount': amount,
                'description': description
            }
        )    

    def get_balance(self):
        """
        Return a balance of the ledger.
        """
        return sum(item['amount'] for item in self.ledger)

    def check_funds(self, amount):
        """
        Return whether the ledger balance is more equal than the given amount
        
        Args:
            amount (float): The amount that needed to check
        """
        return True if self.get_balance() >= amount else False

    def withdraw(self,amount,description=""):
        """
        Return whether the withdrawal transaction is possible. If so, record the transaction using negative amount of deposit.
        
        Args:
            amount (float): The amount to withdraw.
            description (str, optional): A description of transaction.
        
        """
        if self.check_funds(amount):
            self.deposit(-amount,description)
            return True
        else:
            return False

    def transfer(self,amount,target_category):
        """
        Return whether the transfer is possible. If so, record the withdrawal on its ledger and record the deposit on target ledger
        """
        
        
        if self.check_funds(amount):
            self.withdraw(amount,f'Transfer to {target_category.category}')
            target_category.deposit(amount,f'Transfer from {self.category}')
            return True
        else:
            return False
    def __str__(self):
        left_star_req = (30 -len(self.category))//2
        right_star_req = 30 - left_star_req - len(self.category)
        
        category_display = "*" * left_star_req + self.category + "*" * right_star_req + "\n"

        ledger_display = ""
        for item in self.ledger:
            des_display = item['description'] if len(item['description']) <= 23 else item['description'][:23]
            amount_display = '%.2f'% item['amount']
            space_req = 30 - len(des_display) - len(amount_display)
            ledger_display += des_display + " " * space_req + amount_display + "\n"

        total_amount = f"Total: {self.get_balance()}"

        return category_display + ledger_display + total_amount


def create_spend_chart(categories):
    spent_percentage = {}
    total_spent = 0
    #Calculate total spent
    for cat in categories:
        ledger = cat.ledger
        for item in ledger:
            total_spent += -item['amount'] if item['amount'] < 0 else 0
    #Calcuate spent percantage for each category
    for cat in categories:
        ledger = cat.ledger
        #Calculate total category spent
        total_cat_spent = -sum([item['amount'] for item in ledger if item['amount'] < 0])
        spent_percentage[f'{cat.category}'] = total_cat_spent*100/total_spent
    
    #Display the result
    display = "Percentage spent by category\n"
    cats_name = list(spent_percentage.keys())
    cats_spent_percentage = list(spent_percentage.values())
    #find longest name -> this determine the height of output
    longest_cat_name_length = max([len(name) for name in cats_name])
    for i in range(100,-1,-10):
        string_i = " " * (3 - len(str(i))) + str(i) + "|"
        temp_o = ""
        for percent in cats_spent_percentage:
            if percent >= i:
                temp_o += " " + "o" + " "
            else:
                temp_o += " " * 3
        display += string_i + temp_o + " " + "\n"
    horizontal_seperator = " " * 4 + "---" * len(categories) + "-"
    display += horizontal_seperator + "\n"
    for i in range(longest_cat_name_length):
            left_space = " " * 4
            line = ""
            for name in cats_name:
                try:
                    character = " " + name[i] + " "
                except:
                    character = " " * 3
                line += character
            display += left_space + line + " " + "\n"
    display = display.rstrip("\n")
    return display

#TEST CASE
# food = Category('Food')
# food.deposit(1000, 'deposit')
# food.withdraw(920, 'groceries')
# clothing = Category('Clothing')
# clothing.deposit(1000, 'deposit')
# clothing.withdraw(900, 'groceries')
# dsfasf = Category('dsfff')
# dsfasf.deposit(3000, 'deposit')
# dsfasf.withdraw(1500, 'groceries')
# aaaaaaaaaa = Category('aaaaaaaaaa')
# aaaaaaaaaa.deposit(2456, 'deposit')
# aaaaaaaaaa.withdraw(150, 'groceries')
# print(food)

# print(create_spend_chart([food,clothing,dsfasf,aaaaaaaaaa]))