[Back to Finance Mappings](README.md)

# Foreign Remittance Payment Process (Advance) Mapping

## AS-IS Steps (from AS-IS_Process.xlsx)
1. Receive Proforma Invoice (PI) with all required details from vendor/supplier
2. Fill out Google Form capturing PI and payment details
3. Initiate email trail for approval with all relevant documents
4. Obtain approval from Head/Authorized Signatory
5. Finance processes advance foreign remittance payment
6. Confirmation shared to team with swift copy

## ERPNext Implementation Steps
1. Create Purchase Order with foreign vendor.
2. Attach PI and fill custom form for remittance details.
3. Submit for approval workflow.
4. Create Payment Entry for advance.
5. Process via bank with SWIFT tracking.
6. Auto-send confirmation emails.

## Pain Points (AS-IS)
- Lack of automation for form and email tracking

## ERPNext Solutions
- Custom doctypes for remittance forms.
- Automated workflows and notifications.
- Bank integration for processing.
