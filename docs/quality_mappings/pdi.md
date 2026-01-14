[Back to Quality Mappings](README.md)

# Pre-Dispatch Inspection (PDI) Mapping

**Full Forms**:
- PDI = Pre-Dispatch Inspection (final quality check before shipping)
- FG = Finished Goods
- DN = Delivery Note (shipping document)

**Simple Explanation**: Final inspection of products before dispatch to customers. ERPNext requires PDI before creating Delivery Notes.

## AS-IS Steps (from AS-IS_Process.xlsx)
1. Process not implemented.
2. Inspections assumed or tracked informally.

## ERPNext Implementation Steps
1. Create Quality Inspection for FG before dispatch.
2. Link to Delivery Note.
3. Perform PDI checks.
4. Approve only if passed.
5. Attach reports.

## Pain Points (AS-IS)
- Manual communication, missing historical data.

## ERPNext Solutions
- Mandatory PDI workflows.
- Digital records and traceability.
