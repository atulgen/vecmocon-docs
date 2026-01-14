[Back to Finance Mappings](README.md)

# Foreign Remittance Payment Process (BOE) Mapping

## AS-IS Steps (from AS-IS_Process.xlsx)
1. Sourcing team fills Google Form with payment details
2. Attach BOE, Commercial Invoice, AWB number, Packing List in a single file
3. Submit form for Finance review
4. Finance verifies documents and payment details
5. Approval obtained if required
6. Payment processed through finance system
7. Payment confirmation and updates communicated

## ERPNext Implementation Steps
1. Link to import process, create Purchase Invoice for customs.
2. Use custom form for remittance with attachments.
3. Submit for verification workflow.
4. Create Payment Entry for BOE payment.
5. Process via bank.
6. Auto-confirm and notify.

## Pain Points (AS-IS)
- Delays in verification due to incomplete attachments

## ERPNext Solutions
- Mandatory attachment validations.
- Integrated import tracking.
- Workflow for approvals.
