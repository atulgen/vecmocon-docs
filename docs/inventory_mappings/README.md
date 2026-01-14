[Back to Main Documentation](../README.md)

# Inventory Mappings: AS-IS to ERPNext

This directory contains detailed mappings for each of the 6 inventory processes from the AS-IS_Process.xlsx Inventory sheet.

Each process has its own .md file with:
- Exact AS-IS steps from the sheet
- Broken down ERPNext implementation steps
- Pain points identified
- How ERPNext solves them

## Process Files

| S.No | Process Title | File |
|------|---------------|------|
| 1 | Material Receipt & GRN Entry | [material_receipt_grn.md](material_receipt_grn.md) |
| 2 | Keeping material in store | [keeping_material_store.md](keeping_material_store.md) |
| 3 | Kitting | [kitting.md](kitting.md) |
| 4 | Outbound Process | [outbound_process.md](outbound_process.md) |
| 5 | Physical vs system inventory | [physical_vs_system_inventory.md](physical_vs_system_inventory.md) |
| 6 | Item Creation | [item_creation.md](item_creation.md) |

## Process Summaries

### 1. Material Receipt & GRN Entry
**AS-IS Overview**: Manual GRN creation, QC checks, batch tracking issues.
**ERPNext Usage**: Stock module for GRN, Purchase Receipt.
**Key Improvements**: Automated batch tracking, QC integration.

### 2. Keeping material in store
**AS-IS Overview**: Manual location assignment, no barcode.
**ERPNext Usage**: Warehouse and bin management in Stock.
**Key Improvements**: Auto-location suggestion, barcode support.

### 3. Kitting
**AS-IS Overview**: Manual BOM fetching, DC creation.
**ERPNext Usage**: BOM and Work Order for kitting.
**Key Improvements**: Auto BOM explosion, traceability.

### 4. Outbound Process
**AS-IS Overview**: Email-based requests, no system tracking.
**ERPNext Usage**: Material Request and Delivery Note.
**Key Improvements**: Approval workflows, real-time tracking.

### 5. Physical vs system inventory
**AS-IS Overview**: Manual reconciliation, no reports.
**ERPNext Usage**: Stock Reconciliation and reports.
**Key Improvements**: Automated variance reports, aging.

### 6. Item Creation
**AS-IS Overview**: Manual part code assignment.
**ERPNext Usage**: Item master with custom fields.
**Key Improvements**: Standardized naming, auto-validation.

[Back to Main Documentation](../README.md)
