[Back to Quality Mappings](README.md)

# Finished Goods Quality Check Mapping

**Full Forms**:
- FG = Finished Goods (completed products)
- PDI = Pre-Dispatch Inspection (final check before shipping)

**Simple Explanation**: Check finished products before storing or shipping. ERPNext links inspections to production orders.

## AS-IS Steps (from AS-IS_Process.xlsx)
1. Production completes assembly and notifies Quality.
2. However, finished goods inspection is not done; 100% testing during production.

## ERPNext Implementation Steps
1. Create Quality Inspection linked to Production Order.
2. Perform checks on FG.
3. Approve or reject.
4. Move to FG warehouse if passed.

## Pain Points (AS-IS)
- Manual records, no formal inspection.

## ERPNext Solutions
- Standardized FG inspections.
- Integrated with production.
