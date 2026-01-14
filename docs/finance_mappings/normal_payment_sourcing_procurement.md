[Back to Finance Mappings](README.md)

# Normal Payment to Vendor of Sourcing and Procurement Mapping

**Full Forms**:
- GRN = Goods Receipt Note

**Simple Explanation**: Process normal payments for sourcing and procurement.

## AS-IS Steps (from AS-IS_Process.xlsx)
1. Sourcing & purchasing provides payment amount/ invoice via shared Google Sheet
2. Finance reconciles with supporting documents (After GRN is done and Invoice is entered in Tally)
3. Payment processed
4. Confirmation to sourcing & purchasing

## ERPNext Implementation Steps
1. Sourcing updates payment sheet
2. Finance reconciles with GRN
3. Create Payment Entry
4. Process payment

## Pain Points (AS-IS)
- Timing delays, missing invoice

## ERPNext Solutions
- Automated reconciliation
