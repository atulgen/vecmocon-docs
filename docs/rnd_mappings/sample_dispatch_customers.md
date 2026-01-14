[Back to R&D Mappings](README.md)

# Sample Dispatch for Customers Mapping

**Full Forms**:
- EMS = Electronic Manufacturing Services (outsourced manufacturing)

**Simple Explanation**: Dispatch samples to customers based on type (hardware/software changes). ERPNext uses Delivery Notes with routing based on customer classification.

## AS-IS Steps (from AS-IS_Process.xlsx)
1. For Game Changers/SparkPlugs: Dispatch from Head Office.
2. For Mavericks: Dispatch from EMS Partner.

## ERPNext Implementation Steps
1. Classify customer type in Customer master.
2. Create Delivery Note for sample.
3. Route to appropriate warehouse (Head Office or EMS) based on type.
4. Dispatch accordingly.

## Pain Points (AS-IS)
- Manual routing based on customer type.

## ERPNext Solutions
- Automated routing via custom fields.
- Integrated dispatch tracking.
