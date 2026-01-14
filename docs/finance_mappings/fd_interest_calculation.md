[Back to Finance Mappings](README.md)

# FD Interest Calculation Mapping

**Full Forms**:
- FD = Fixed Deposit
- TDS = Tax Deducted at Source

**Simple Explanation**: Calculate accrued interest on fixed deposits. ERPNext can automate interest calculations.

## AS-IS Steps (from AS-IS_Process.xlsx)
1. We receive the FD statement from the bank, which includes the maturity date and the maturity amount for each deposit.
2. The difference between the principal amount and the maturity amount is treated as the total interest, which is then accrued monthly over the FD tenure.
3. On a quarterly basis, upon receiving actual interest credit details and TDS information from Form 26AS, we revise the accrued interest calculation to reflect the actual figures.

## ERPNext Implementation Steps
Note: FD interest calculation is out of scope per sheet feedback, but if implemented:
1. Record FD details with start date, maturity, rate.
2. System calculates monthly accrued interest.
3. Adjust based on actual credits and TDS.

## Pain Points (AS-IS)
- Correct accrued interest amount is not calculated.

## ERPNext Solutions
- Automated interest accrual.
- TDS calculation integration.
