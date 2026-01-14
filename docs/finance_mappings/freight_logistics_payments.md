[Back to Finance Mappings](README.md)

# Freight & Logistics Payments Mapping

## AS-IS Steps (from AS-IS_Process.xlsx)
Freight forwarder:
1. Invoice receipt from freight forwarder.
2. Invoice verification & entering in tally.
3. Instructions from logistics for payment release
4. Payment execution through bank/portal
5. Confirmation of payment to freight forwarder.

Porter:
1. Mail initation of porter wallet recharge with bifurcation of last recharge.
2. Payment for porter wallet.

Custom duty:
1. Receving of materials in the custom port
2. Filing for BOE.
3. Initation of custom duty payment by logistic team via email trail.
4. Payment of duty.

## ERPNext Implementation Steps
1. Create Purchase Invoice for freight/logistics services.
2. Link to import/export process.
3. Submit for logistics approval.
4. Create Payment Entry.
5. Process via bank integration.
6. For customs, integrate with ICEGATE API if available.

## Pain Points (AS-IS)
- Delays in invoice
- Issue in Custom portal

## ERPNext Solutions
- Automated invoice processing.
- Workflow approvals.
- API integration for customs payments.
