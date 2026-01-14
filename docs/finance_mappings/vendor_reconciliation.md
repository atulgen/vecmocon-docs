[Back to Finance Mappings](README.md)

# Vendor Reconciliation Mapping

**Full Forms**:
- None

**Simple Explanation**: Reconcile vendor accounts. ERPNext accounts payable reconciliation.

## AS-IS Steps (from AS-IS_Process.xlsx)
1. Request for ledger form vendor.
2. When ledger have been received then reconcile with our ledger with vendor ledger.
3. If find any discrepancy found, solve the issue.

## ERPNext Implementation Steps
1. Request vendor ledger via email.
2. Reconcile with ERPNext AP ledger.
3. Resolve discrepancies and communicate.

## Pain Points (AS-IS)
- Vendor details are not available like MSME number, contact details etc.

## ERPNext Solutions
- Centralized vendor master with all details.
- Automated reconciliation tools.
