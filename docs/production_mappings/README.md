[Back to Main Documentation](../README.md)

# Production Mappings: AS-IS to ERPNext

This directory contains detailed mappings for each of the 9 production processes from the AS-IS_Process.xlsx Production sheet.

Each process has its own .md file with:

- Exact AS-IS steps from the sheet
- Broken down ERPNext implementation steps
- Pain points identified
- How ERPNext solves them

## Process Files

| S.No | Process Title                                                               | File                                                                 |
| ---- | --------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 1    | Sales Plan                                                                  | [sales_plan.md](sales_plan.md)                                       |
| 2    | Monthly Prod Plan                                                           | [monthly_prod_plan.md](monthly_prod_plan.md)                         |
| 3    | Material Req. Planning                                                      | [material_req_planning.md](material_req_planning.md)                 |
| 4    | Plan vs actual                                                              | [plan_vs_actual.md](plan_vs_actual.md)                               |
| 5    | Material transfer to Electronic Manufacturing Services                      | [material_transfer_ems.md](material_transfer_ems.md)                 |
| 6    | PO to Electronic Manufacturing Services                                     | [po_to_ems.md](po_to_ems.md)                                         |
| 7    | Vecmocon Outward vs Electronic Manufacturing Services Inward reconciliation | [vecmocon_outward_ems_inward.md](vecmocon_outward_ems_inward.md)     |
| 8    | Actual consumption vs planned consumption                                   | [actual_vs_planned_consumption.md](actual_vs_planned_consumption.md) |
| 9    | Dispatch tool                                                               | [dispatch_tool.md](dispatch_tool.md)                                 |

## Process Summaries

### 1. Sales Plan

**AS-IS Overview**: Manual forecast sharing, Excel planning.
**ERPNext Usage**: Production Plan from Sales Orders.
**Key Improvements**: Auto-forecast integration, real-time updates.

### 2. Monthly Prod Plan

**AS-IS Overview**: Manual consolidation, email sharing.
**ERPNext Usage**: Production Plan module.
**Key Improvements**: Centralized planning, approval workflows.

### 3. Material Req. Planning

**AS-IS Overview**: Excel-based shortage calculation.
**ERPNext Usage**: BOM and Production Plan.
**Key Improvements**: Auto-shortage alerts, integrated planning.

### 4. Plan vs actual

**AS-IS Overview**: Manual daily tracking.
**ERPNext Usage**: Job Cards and reports.
**Key Improvements**: Real-time variance tracking.

### 5. Material transfer to EMS

**AS-IS Overview**: Manual DC creation.
**ERPNext Usage**: Stock Entry for transfers.
**Key Improvements**: Automated transfers, traceability.

### 6. PO to EMS

**AS-IS Overview**: Manual subcontract POs.
**ERPNext Usage**: Purchase Order for services.
**Key Improvements**: Linked to production, auto-invoicing.

### 7. Reconciliation

**AS-IS Overview**: Manual variance reports.
**ERPNext Usage**: Custom reports for EMS reconciliation.
**Key Improvements**: Automated comparisons, alerts.

### 8. Actual vs planned consumption

**AS-IS Overview**: Manual BOM checks.
**ERPNext Usage**: BOM variance reports.
**Key Improvements**: Real-time consumption tracking.

### 9. Dispatch tool

**AS-IS Overview**: Manual QR scanning.
**ERPNext Usage**: Serial tracking in Stock.
**Key Improvements**: Integrated QR/barcode support.

[Back to Main Documentation](../README.md)
