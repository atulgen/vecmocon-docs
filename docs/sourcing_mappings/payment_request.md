[Back to Sourcing Mappings](README.md)

# Payment Request Mapping

**Simple Explanation**: Request payments for suppliers. ERPNext Payment Entries.

## AS-IS Steps (from AS-IS_Process.xlsx)
1. For advance payment: mail approval from the operation manager.
2. For credit term payment: fill the payment amount in google sheet.
3. Account team do payment as per the sheet.

## ERPNext Implementation Steps
1. For advance: Buyer sends approval email to Operations Manager.
2. For credit: Buyer fills amount in shared sheet.
3. Accounts team processes payment via Payment Entry.

## Pain Points (AS-IS)
- Email approvals.

## ERPNext Solutions
- Integrated approvals.
