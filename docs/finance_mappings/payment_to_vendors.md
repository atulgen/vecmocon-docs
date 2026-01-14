[Back to Finance Mappings](README.md)

# Payment to Vendors Mapping

## AS-IS Steps (from AS-IS_Process.xlsx)
Advance Payment:
1. Respective team issues PI and PO shares via email Trail
2. Department Head and COO approves payment in email trail
3. Finance verifies documents.
4. Advance payment processed via bank.
Regular Payment:
1. Production provides payment amount/ invoice via shared Google Sheet.
2. Other teams provides payment amount/ invoice via mail with approval
3. Finance reconciles with supporting documents (After GRN is done and Invoice is entered in Tally)
4. Payment processed.
5. Confirmation to production.

## ERPNext Implementation Steps
1. Create Purchase Invoice from PO.
2. Submit for approval workflow (Department Head, COO).
3. Create Payment Entry linked to Invoice.
4. Process payment via bank integration.
5. Auto-send confirmation emails.

## Pain Points (AS-IS)
- Incomplete Document

## ERPNext Solutions
- Mandatory document attachments and validations.
- Automated approval workflows.
- Integrated payment processing.
