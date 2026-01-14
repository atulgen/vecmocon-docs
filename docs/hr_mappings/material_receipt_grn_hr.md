[Back to HR Mappings](README.md)

# Material Receipt & GRN Entry Mapping

**Full Forms**:
- GRN = Goods Receipt Note (document confirming receipt of goods)
- QC = Quality Control (checking product quality)
- PO = Purchase Order (official buying document)

**Simple Explanation**: This process handles receiving materials from suppliers, verifying them, checking quality, recording in the system, and notifying accounts. ERPNext automates this to reduce manual work and errors.

**Note**: This process appears to be related to procurement/inventory rather than HR. It matches the Inventory GRN process. Needs to be checked and possibly moved to the correct department later.

## AS-IS Steps (from AS-IS_Process.xlsx)
1. Material arrives at gate
2. Verify against PO
3. QC check
4. Excel GRN entry
5. Submit to accounts

## ERPNext Implementation Steps
1. Receive material at gate, scan or verify PO.
2. Perform QC check via Quality Inspection.
3. Create Purchase Receipt (GRN) in ERPNext.
4. Update stock automatically.
5. Submit for accounts approval.

## Pain Points (AS-IS)
- Manual GRN, No batch tracking

## ERPNext Solutions
- Automated GRN creation, batch tracking.
- Integrated QC and accounts workflow.
