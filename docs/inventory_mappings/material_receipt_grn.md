[Back to Inventory Mappings](README.md)

# Material Receipt & GRN Entry Mapping

**Full Forms**:
- GRN = Goods Receipt Note (document for material receipt)
- DC = Delivery Challan (delivery document)
- EMS = Electronic Manufacturing Services (outsourced manufacturing)
- QC = Quality Control (quality checking)
- WhatsApp = Messaging app for communication

**Simple Explanation**: Receive materials from suppliers, verify, record in system, and notify teams. ERPNext automates GRN creation and tracking.

## AS-IS Steps (from AS-IS_Process.xlsx)
1. Supplier share the invoice before dispatch to Electronic Manufacturing Services partner.
2. Store do GRN against the invoice and generate outbound from Odoo for the Electronic Manufacturing Services partner.
3. Electronic Manufacturing Services received the material against GRN and verify as per the invoice and DC.
4. Give receiving and share it on whatsapp group.
5. QC for mechanical items.
6. Handover to Electronic Manufacturing Services.

## ERPNext Implementation Steps
1. Supplier shares invoice; buyer creates Purchase Receipt in ERPNext.
2. System generates GRN and links to invoice.
3. Electronic Manufacturing Services receives via integrated system and verifies.
4. Updates receipt status in ERPNext.
5. Triggers QC inspection if required.
6. Material moved to Electronic Manufacturing Services location in ERPNext.

## Pain Points (AS-IS)
- Manual GRN, No batch tracking, Missed GRN in out to out material.

## ERPNext Solutions
- Automated GRN with batch tracking, barcode integration.
