# Exploratory Test Session: Monefy

**Session Time Planned:** Large 190mins (10 mins in every charter)

**Areas of Focus:** Mobile UI, Application resiliency, Information persistency, Calculations consistency, security.

**Notes:**

	Setup: Mobile Application installed
	Tools: Android Smartphone

### Prioritization Order:

| Module | Priority Description |
| ----------- | ----------- | 
| Account Initital Setup  | Needed to start using the app to setup the accounts |
| Income and Expense creation | Main funtionality to validate the proper values track and balances calculation |
| Donut Chart | It shows the expenses in graphical way, it's in the main screen |
| Categories and Accounts Managment | Additional setup |
| Settings - Balance | Balance calculation setup, it's involved in the balance calculation |
| Additional Settings and security | Additional setup |

### Risks to Mitigate:
- This application should accomplish the main objecive to track the expenses without losing data and the correct balance calculation. 
- Security is also a highlight to be covered in tests as this application stores sensible data

### Charter Reporting Sumary
| Item | Total Count | Notes |
| ----------- | ----------- | ----------- |
| Total Bugs  | 0       |  |
| Total Charts   | 19        | |
| Potential Bugs | 2     | 1. Charter #12 - Should the budget mode just ignore the incomes and use the Monthly budget - expenses formula to calculate the balance? <br> 2. Charter #14 - Should the cash account allow overdraft through transfer ?
|


    Charter #01
    Explore the Account creation
    With different special characters in the name
    To discover the application resiliency on input fields

    Charter #02
    Explore the Account creation
    With future initial balance date
    To discover application balance miscalculations

    Charter #03
    Explore the Account creation
    With negative number
    To discover application balance miscalculations

    Charter #04
    Explore the new Income and Expense
    With negative number
    To discover application balance miscalculations

    Charter #05
    Explore the new Income and Expense
    With decimal value
    To discover application balance miscalculations and number presicion

    Charter #06
    Explore the new Income and Expense
    With the longest number accepted
    To discover application balance miscalculations and number presicion

    Charter #07
    Explore the recurring Income and Expense
    With future and past dates 
    With "Furure recurring records" enabled
    To discover application balance miscalculations

    Charter #08
    Explore the Expenses and Incomes Categoires creation
    With different special characters
    To discover the application resiliency on input fields


    Charter #09
    Explore the carry over functionality
    With negative values from past month
    To discover application balance miscalculations


    Charter #10
    Explore the carry over functionality
    With negative values from past month
    To discover application balance miscalculations

    Charter #11
    Explore the carry over functionality
    With negative values from past month
    To discover application balance miscalculations


    Charter #12
    Explore the budget mode
    With alreade registered incomes and expenses
    To discover application balance miscalculations


    Charter #13
    Explore home donut chart
    With different expenses
    To discover percentage miscalculations in the donut chart

    Charter #14
    Explore transfer option
    With no balance in the origin account
    To discover the balance miscalculation

    Charter #15
    Explore currency change
    With different currencies
    To discover the currency symbol changes

    Charter #16
    Explore the export to file
    With the export settings option
    To discover the errors exporting and loading the file

    Charter #17
    Explore the filters
    With each account
    with each timeframe value
    with a date range
    To discover errors when filtering the data

    Charter #18
    Explore the clear data 
    With the clear data option in settings
    To discover errors when cleaning the data

    Charter #19
    Explore the passcode protection
    With the passcode protection option in settings
    To discover the security errors 






