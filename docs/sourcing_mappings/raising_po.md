[Back to Sourcing Mappings](README.md)

# Raising PO Mapping

**Full Forms**:
- PO = Purchase Order
- PPC = Production Planning and Control

**Simple Explanation**: Create POs based on requirements. ERPNext POs with approvals.

## AS-IS Steps (from AS-IS_Process.xlsx)
1. Get BOM from PPC, Get stock from the Warehouse and EMS partner.
2. Calculate the part requirement by using excel.
3. Raise PO from the Odoo.
4. Share the schedule with the supplier through email.

## ERPNext Implementation Steps
1. Buyer gets BOM from PPC and stock from Warehouse and EMS partner.
2. Auto-calculate part requirements using BOM and stock levels.
3. Buyer raises Purchase Order in ERPNext with approval workflow.
4. System shares schedule with supplier via email integration.

## Pain Points (AS-IS)
- No approval matrix.

## ERPNext Solutions
- Workflow approvals for POs.
