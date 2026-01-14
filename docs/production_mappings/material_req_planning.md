[Back to Production Mappings](README.md)

# Material Req. Planning Mapping

**Full Forms**:
- BOM = Bill of Materials (component list)
- EMS = Electronic Manufacturing Services

**Simple Explanation**: Plan material requirements for production. ERPNext uses BOM and Production Plans.

## AS-IS Steps (from AS-IS_Process.xlsx)
1. Receive stock data from EMS.
2. Identify shortages per BOM.
3. Consider GRN and IQC status.
4. Adjust production plan.

## ERPNext Implementation Steps
1. Link Production Plan to BOM.
2. Auto-calculate material requirements.
3. Check stock levels.
4. Generate MR if needed.

## Pain Points (AS-IS)
- Centralized BOM and stock visibility lacking.

## ERPNext Solutions
- Integrated BOM and stock tracking.
