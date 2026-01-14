[Back to Quality Mappings](README.md)

# Scrap Management Mapping

**Full Forms**:
- FG = Finished Goods

**Simple Explanation**: Handle rejected products by scrapping them after approval. ERPNext uses Stock Entries for scrap movement.

## AS-IS Steps (from AS-IS_Process.xlsx)
1. Get approval from operation head for scrapping.
2. Admin identifies and contacts scrap vendor.
3. Scrap material.

## ERPNext Implementation Steps
1. Create Stock Entry for scrap from rejected FG.
2. Submit for approval workflow.
3. Record scrap sale to vendor.
4. Update inventory.

## Pain Points (AS-IS)
- Manual approvals, vendor contact.

## ERPNext Solutions
- Automated workflows.
- Integrated scrap tracking.
