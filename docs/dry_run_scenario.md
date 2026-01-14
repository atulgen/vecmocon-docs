# Dry Run Scenario: Sales Order to Dispatch (Tax Invoice Basis)

## Overview
This dry run simulates the end-to-end process for fulfilling a customer sales order for an EV charger, including production via EMS subcontracting and dispatch. Based on Vecmocon's AS-IS and mapped to ERPNext.

## Scenario
- **Customer**: ABC Motors (EV OEM)
- **Product**: EV Charger (Part Code: EVCH-001)
- **Quantity**: 100 units
- **PO**: Provided by customer

## AS-IS Process Steps (from CRP1 Script and AS-IS_Process.xlsx)
1. Sales creates Sales Order in Odoo.
2. Check FG stock; if insufficient, create Production Plan.
3. Explode BOM, check RM; procure if missing (PO, GRN, Invoice).
4. Create Subcontracting Orders for EMS (Sub-Assy-01 to Sub-Assy-02).
5. Transfer materials to EMS warehouses.
6. Receive subassemblies, bill services.
7. Final FG receipt, close Production Plan.
8. Resume Sales: Create DN, Sales Invoice, Payment.

**Pain Points**: Manual reconciliations, no real-time tracking, errors in LOT/quantities.

## ERPNext Dry Run Steps
1. **CRM/Sales**: Create Customer (ABC Motors) with GST auto-fetch.
2. **Selling**: Create Sales Order (SO-001) linked to customer PO, select EV Charger.
3. **Stock Check**: Run Stock Balance Report; if &lt;100, proceed to Manufacturing.
4. **Manufacturing**: Create Production Plan, explode BOM (e.g., Battery, PCB).
5. **Buying/Stock**: Auto-create Material Requests for shortages; approve and convert to POs.
6. **Procurement**: Receive GRN, create Purchase Invoice with GST.
7. **Manufacturing**: Create Work Orders for EMS subcontracting (Sub-Assy-01, Sub-Assy-02).
8. **Stock**: Transfer RMs to EMS Warehouse via Stock Entry.
9. **Receiving**: Create Subcontracting Receipts for subassemblies, bill via Purchase Invoice.
10. **Final Assembly**: Receive FG into Main Warehouse.
11. **Selling/Stock**: Link SO to DN with LOT tracking.
12. **Accounts**: Create Sales Invoice with e-invoice (India Compliance).
13. **Dispatch**: Generate E-way Bill via API, update POD.
14. **Payment**: Receive payment, reconcile in Bank Entry.

## Benefits in ERPNext
- Real-time stock visibility.
- Automated BOM explosion and MR creation.
- Workflow approvals for subcontracting.
- GST compliance and e-way auto-generation.
- Traceability via serial/batch numbers.
- Reduced manual errors and reconciliations.

## Timeline in ERPNext
- **Order to Dispatch**: 2-3 days (vs. manual 20-25 minutes per dispatch, but end-to-end faster).
