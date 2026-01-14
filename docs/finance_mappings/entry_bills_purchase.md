[Back to Finance Mappings](README.md)

# Entry of Bills for Purchase Mapping

**Full Forms**:
- GRN = Goods Receipt Note

**Simple Explanation**: Record purchase bills. ERPNext Purchase Invoices.

## AS-IS Steps (from AS-IS_Process.xlsx)
1. Receive bill/invoice from vendor.
2. Inventory team provides GRN on the bills.
3. Check for correct tax application (CGST/SGST or IGST as applicable).
4. Enter bill/invoice details into ERP/Finance System.

## ERPNext Implementation Steps
1. Receive vendor bill.
2. Link to GRN.
3. Verify taxes.
4. Create Purchase Invoice.

## Pain Points (AS-IS)
- Mismatched documents, incorrect GST details.

## ERPNext Solutions
- Automated tax validation.
- Document attachments.
