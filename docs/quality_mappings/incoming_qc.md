[Back to Quality Mappings](README.md)

# Incoming Quality Check (IQC) Mapping

**Full Forms**:
- IQC = Incoming Quality Check (inspection of incoming materials)
- GRN = Goods Receipt Note (receipt document)
- DC = Delivery Challan (delivery document)
- QC = Quality Control (quality checking)
- EMS = Electronic Manufacturing Services (outsourced manufacturing)

**Simple Explanation**: This process checks the quality of materials received from suppliers before accepting them into stock. ERPNext automates this with inspections linked to receipts.

**Note**: Coordinates with EMS for outsourced parts; ensure integration.

## AS-IS Steps (from AS-IS_Process.xlsx)
1. Material arrives at Electronic Manufacturing Services.
2. Storekeeper creates Goods Receipt Note based on Vecmocon DC.
3. Quality Inspector conducts IQC as per inspection plan & standards.
4. Inspection outcomes (Accepted/Rejected/Hold) updated in google spreadsheet.
5. Only QC Approved items moved to stock; Rejected items tagged for supplier return.
6. Supplier Quality Monitoring done manually through spreadsheets.
7. Monthly Supplier Rejection sent back to Supplier through SNCR.

## ERPNext Implementation Steps
1. Create Purchase Receipt (GRN) in Stock module.
2. Link Quality Inspection to GRN.
3. Perform inspection with templates.
4. Update status: Accept/Reject/Hold.
5. If accepted, move to stock; if rejected, create return.
6. Generate reports for supplier quality tracking.

## Pain Points (AS-IS)
- Manual tracking leading to errors and missing traceability.
- Challenges with multiple EMS partners (DC documentation issues).
- Supplier rejection monitoring is manual, leading to incorrect stock allocation.

## ERPNext Solutions
- Automated inspection workflows.
- Centralized quality tracking.
- Integrated supplier performance reports.
