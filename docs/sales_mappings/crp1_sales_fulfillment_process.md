[Back to Sales Mappings](../README.md)

# CRP1 Sales Order Fulfillment Process

**Source**: CRP1 Script_Vecmocon.pdf - Detailed business process for fulfilling customer sales orders.

## Overview
This document details the complete business process for fulfilling a customer sales order for a Finished Good (FG) item, covering two primary scenarios:

1. **Scenario A**: FG item is available in stock
2. **Scenario B**: FG item requires production with subcontracting and procurement

## Phase 1: Sales Order Creation & Stock Check

### 1. Create Sales Order
- **Action**: Sales team creates Sales Order in ERP for required FG quantity
- **Details**: Includes item code, quantity, rate, payment terms, delivery date
- **System**: Document Type: Sales Order (SO-#####)

### 2. Check Finished Goods Availability
- **Action**: Warehouse/planning team runs Stock Balance Report
- **Decision**:
  - If FG IS available: Proceed to Phase 2A
  - If FG IS NOT available: Proceed to Phase 2B

## Phase 2A: Fulfillment When FG is in Stock

### 3. Create Delivery Note (DN)
- **Action**: Create Delivery Note from Sales Order
- **Inventory Impact**: FG stock level reduced in warehouse
- **Accounting Impact**:
  - Debit: Cost of Goods Sold (COGS)
  - Credit: Inventory Asset
- **System**: Stock Ledger Entry (outward movement), GL Entry

### 4. Create Sales Invoice
- **Action**: Create Sales Invoice from Delivery Note
- **Accounting Impact**:
  - Debit: Accounts Receivable / Customer
  - Credit: Sales Revenue
- **System**: GL Entry, Sales Order marked "Completed"

### 5. Payment Entry
- **Action**: Create Payment Entry when customer pays
- **Accounting Impact**:
  - Debit: Bank Account
  - Credit: Accounts Receivable / Customer
- **System**: Invoice status updated to "Paid", GL Entry

## Phase 2B: Fulfillment When FG is NOT in Stock

### 3. Create Production Plan
- **Action**: Planner creates Production Plan linked to Sales Order
- **Details**: Click "Get Finished Goods" to pull FG demand

### 4. Explode BOM & Check Raw Materials
- **Action**: Click "Get Raw Materials" to explode BOM
- **System**: Lists all required components
- **Decision**: For each material:
  - Available: Allocated to plan
  - Not available: Shows shortfall

### 5. Procure Missing Raw Materials
- **Action**: System auto-creates Material Requests for missing items
- **Process**: MR → RFQ → Supplier Quotation → Purchase Order
- **Receive Materials**: Create Purchase Receipt against PO
  - **Inventory**: Raw material stock increased
  - **Accounting**: Debit Inventory Asset, Credit GR/IR liability
- **Bill Materials**: Create Purchase Invoice against Receipt
  - **Accounting**: Debit GR/IR, Credit Accounts Payable

### 6. Initiate Subcontracting
- **Assumption**: BOM has sub-assemblies requiring different subcontractors
- **Action**: Create Subcontracting Purchase Orders from Production Plan
- **System**: Auto-creates Service POs (e.g., "Assembly Labor")

### 7. Create Subcontracting Order & Transfer
- **Action**: Create Subcontracting Order specifying raw materials to send
- **Transfer**: Stock Entry to move materials to subcontractor warehouse
- **Accounting**: No immediate impact (inter-warehouse transfer)

### 8. Receive First Subcontracted Item
- **Action**: Create Subcontracting Receipt against Order
- **Detail**: Target warehouse set to next subcontractor in chain
- **Inventory**: Sub-assembly received in next subcontractor's warehouse
- **Accounting**: Cost updated with raw materials + service cost

### 9. Bill for Subcontracting Service
- **Action**: Create Purchase Invoice against Service PO
- **Accounting**: Debit Subcontracting Expenses/Inventory, Credit Accounts Payable

### 10. Process for Next Subcontractor
- **Action**: Create Subcontracting Order for final assembly
- **Receive Final FG**: Subcontracting Receipt to Main FG Warehouse
- **Accounting**: Final cost includes all materials + subcontracting services

### 11. Finalize Production
- **Action**: Production Plan marked completed, FG available in stock

### 12. Resume Sales Process
- **Action**: Return to original Sales Order, proceed with Phase 2A (DN → Invoice → Payment)

## Reporting & Verification

### Stock Balance Report
- Check quantity of any item in any warehouse at any time

### Stock Ledger Report
- Verify inward/outward movements after each transaction
- Primary audit trail for inventory

### General Ledger Report
- Verify debit/credit entries after accounting transactions

## ERPNext Implementation Notes

### Scenario A (Stock Available)
1. Sales Order → Delivery Note → Sales Invoice → Payment Entry
2. Automatic stock reduction and COGS posting

### Scenario B (Production Required)
1. Sales Order → Production Plan → BOM Explosion → Material Requests
2. Purchase Order → Purchase Receipt → Purchase Invoice
3. Subcontracting Orders → Stock Transfers → Subcontracting Receipts
4. Final Production → Back to Sales Order fulfillment

### Key Customizations Needed
- Subcontracting workflow automation
- Multi-level BOM explosion
- Inter-warehouse transfer tracking
- Cost accumulation through subcontracting chain
