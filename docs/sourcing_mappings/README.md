[Back to Main Documentation](../README.md)

# Sourcing & Purchasing Mappings: AS-IS to ERPNext

This directory contains detailed mappings for each of the 14 sourcing & purchasing processes from the AS-IS_Process.xlsx Sourcing & Purchasing sheet.

Each process has its own .md file with:
- Exact AS-IS steps from the sheet
- Broken down ERPNext implementation steps
- Pain points identified
- How ERPNext solves them

## Process Files

| S.No | Process Title | File |
|------|---------------|------|
| 1 | Sample Order for the R&D | [sample_order_rnd.md](sample_order_rnd.md) |
| 2 | BOM Ordering of New Project | [bom_ordering_new_project.md](bom_ordering_new_project.md) |
| 3 | Negotiation of BOM | [negotiation_bom.md](negotiation_bom.md) |
| 4 | Raising PO | [raising_po.md](raising_po.md) |
| 5 | Supplier Management | [supplier_management.md](supplier_management.md) |
| 6 | Supplier Rating | [supplier_rating.md](supplier_rating.md) |
| 7 | Inventory Management | [inventory_management.md](inventory_management.md) |
| 8 | New Part Code Management | [new_part_code_management.md](new_part_code_management.md) |
| 9 | Reconciliation of Supplier's Ledger | [reconciliation_supplier_ledger.md](reconciliation_supplier_ledger.md) |
| 10 | Payment Request | [payment_request.md](payment_request.md) |
| 11 | Logistics Management (Porter) | [logistics_management_porter.md](logistics_management_porter.md) |
| 12 | Logistics Management (Import) | [logistics_management_import.md](logistics_management_import.md) |
| 13 | Quality Requirement | [quality_requirement.md](quality_requirement.md) |
| 14 | Scrap Management | [scrap_management.md](scrap_management.md) |

## Process Summaries

### 1. Sample Order for the R&D
**AS-IS Overview**: Manual PR, tracking via sheets.
**ERPNext Usage**: Purchase Requisition, PO.
**Key Improvements**: Approval matrix, auto-tracking.

### 2. BOM Ordering of New Project
**AS-IS Overview**: Manual BOM release, time-consuming.
**ERPNext Usage**: BOM module, PR auto-creation.
**Key Improvements**: Project-linked BOMs, automated ordering.

### 3. Negotiation of BOM
**AS-IS Overview**: Manual RFQ, Excel comparison.
**ERPNext Usage**: RFQ, Supplier Quotation.
**Key Improvements**: Automated comparison, approval workflows.

### 4. Raising PO
**AS-IS Overview**: Manual calculation, no approval.
**ERPNext Usage**: Purchase Order with workflows.
**Key Improvements**: Auto-calculations, approvals.

### 5. Supplier Management
**AS-IS Overview**: Manual onboarding, Excel tracking.
**ERPNext Usage**: Supplier doctype, custom workflows.
**Key Improvements**: Structured onboarding, rating integration.

### 6. Supplier Rating
**AS-IS Overview**: Manual rating, no system.
**ERPNext Usage**: Custom rating fields.
**Key Improvements**: Automated scoring, reports.

### 7. Inventory Management
**AS-IS Overview**: Manual push/pull, Excel tracking.
**ERPNext Usage**: Reorder levels, auto MR.
**Key Improvements**: Real-time visibility, auto-alerts.

### 8. New Part Code Management
**AS-IS Overview**: Manual code creation.
**ERPNext Usage**: Item master with validation.
**Key Improvements**: Auto-generation, uniqueness checks.

### 9. Reconciliation of Supplier's Ledger
**AS-IS Overview**: Manual reconciliation.
**ERPNext Usage**: Accounts payable reports.
**Key Improvements**: Automated matching, alerts.

### 10. Payment Request
**AS-IS Overview**: Email approvals, sheet tracking.
**ERPNext Usage**: Payment Entry with workflows.
**Key Improvements**: Integrated approvals, tracking.

### 11. Logistics Management (Porter)
**AS-IS Overview**: Form-based booking.
**ERPNext Usage**: Custom doctype for logistics.
**Key Improvements**: Integration with transport providers.

### 12. Logistics Management (Import)
**AS-IS Overview**: Manual form, tracking.
**ERPNext Usage**: Custom import tracking.
**Key Improvements**: End-to-end visibility.

### 13. Quality Requirement
**AS-IS Overview**: Manual data sharing.
**ERPNext Usage**: Quality module integration.
**Key Improvements**: Automated data flow.

### 14. Scrap Management
**AS-IS Overview**: Manual approval, vendor contact.
**ERPNext Usage**: Scrap management in Stock.
**Key Improvements**: Workflow approvals, tracking.

[Back to Main Documentation](../README.md)
