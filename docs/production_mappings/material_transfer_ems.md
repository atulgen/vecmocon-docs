[Back to Production Mappings](README.md)

# Material Transfer to EMS Mapping

**Full Forms**:
- EMS = Electronic Manufacturing Services
- DC = Delivery Challan

**Simple Explanation**: Transfer materials to EMS for production. ERPNext uses Stock Entries.

## AS-IS Steps (from AS-IS_Process.xlsx)
1. Ship material from inventory to EMS.
2. Track movement.
3. Record receipt at EMS.

## ERPNext Implementation Steps
1. Create Stock Entry for material transfer.
2. Link to Production Order.
3. Update warehouse locations.

## Pain Points (AS-IS)
- Manual DC creation.

## ERPNext Solutions
- Automated transfer tracking.
