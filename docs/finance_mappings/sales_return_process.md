[Back to Finance Mappings](README.md)

# Sales Return Process Mapping

## AS-IS Steps (from AS-IS_Process.xlsx)
1. Receive return request
2. Receive Material & debit note, confirmation for receiving from stores team.
3. Approval of CN Generation
4. Raise credit note
5. Inform sales KAM & customer

## ERPNext Implementation Steps
1. Create Sales Return (Return Invoice) from original Sales Invoice.
2. Select items returned, quantities.
3. System auto-generates Credit Note.
4. Update inventory if applicable.
5. Email notification to sales and customer.

## Pain Points (AS-IS)
- Incorrect Documention
- Missing of Debit note

## ERPNext Solutions
- Structured return process with validations.
- Auto-generation of credit notes and inventory updates.
- Document attachments for debit notes.
