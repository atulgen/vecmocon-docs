[Back to Finance Mappings](README.md)

# Payment Advice / Payment Follow up Mapping

## AS-IS Steps (from AS-IS_Process.xlsx)
Payment Advice:
1. Identify payment in bank
2. Match with invoice
3. Send email requesting payment advice

Payment Follow up:
1. Proactively follow up with customers through email communication.

## ERPNext Implementation Steps
1. Import bank statement.
2. Create Payment Entry linked to Sales Invoice.
3. System auto-reconciles and updates outstanding.
4. For follow-up, use custom script to send email reminders for overdue invoices.

## Pain Points (AS-IS)
- Delay in response
- Mismatch in payment advice

## ERPNext Solutions
- Automated reconciliation with bank integration.
- Scheduled email follow-ups via workflows.
