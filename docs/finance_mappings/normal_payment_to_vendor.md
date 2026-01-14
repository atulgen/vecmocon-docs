[Back to Finance Mappings](README.md)

# Normal Payment to Vendor Mapping

**Full Forms**:
- GRN = Goods Receipt Note

**Simple Explanation**: Process normal payments to vendors after receipt of goods/services.

## AS-IS Steps (from AS-IS_Process.xlsx)
1. Production provides payment amount/ invoice via shared Google Sheet
2. Finance reconciles with supporting documents (After GRN is done and Invoice is entered in Tally)
3. Payment processed
4. Confirmation to production

## ERPNext Implementation Steps
1. Production updates payment sheet
2. Finance reconciles with GRN and invoices
3. Create Payment Entry
4. Process payment

## Pain Points (AS-IS)
- Timing delays, missing invoice

## ERPNext Solutions
- Automated reconciliation
