[Back to Inventory Mappings](README.md)

# Physical vs System Inventory Mapping

**Full Forms**:
- ABC = Activity Based Costing (inventory classification)

**Simple Explanation**: Reconcile physical stock with system records. ERPNext uses stock reconciliation and reports.

## AS-IS Steps (from AS-IS_Process.xlsx)
1. Do physical inventory and share with finance.
2. Stock adjustment in system.

## ERPNext Implementation Steps
1. Conduct physical count.
2. Compare with ERPNext stock levels.
3. Create stock reconciliation entry for adjustments.
4. Generate reports.

## Pain Points (AS-IS)
- System Generated Data Missing, No Proper valuation report from odoo.

## ERPNext Solutions
- Auto stock count reports based on ABC, proper valuation.
