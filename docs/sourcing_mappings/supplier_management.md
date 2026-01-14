[Back to Sourcing Mappings](README.md)

# Supplier Management Mapping

**Full Forms**:
- PPAP = Production Part Approval Process
- IQC = Incoming Quality Control

**Simple Explanation**: Onboard and manage suppliers. ERPNext Supplier master with evaluations.

## AS-IS Steps (from AS-IS_Process.xlsx)
1. After identification of supplier, share supplier evaluation sheet.
2. Audit as per the evaluation sheet data.
3. Share supplier onboarding format with supplier.
4. Raise sample order PO.
5. PPAP of critical parts.
6. Sample approval.
7. PO for mass production after sample approval.

## ERPNext Implementation Steps
1. After identification, share supplier evaluation sheet in ERPNext.
2. Conduct audit and update evaluation in Supplier record.
3. Share onboarding format and collect documents.
4. Raise sample Purchase Order.
5. Link PPAP audit reports to Supplier.
6. Approve samples via Quality Inspection.
7. Raise mass production Purchase Order after approval.

## Pain Points (AS-IS)
- Manual onboarding.

## ERPNext Solutions
- Structured supplier management.
