[Back to Finance Mappings](README.md)

# Product Cost Estimation Mapping

**Full Forms**:
- GP = Gross Profit
- BOM = Bill of Materials
- CRM = Customer Relationship Management

**Simple Explanation**: Calculate product costs for pricing decisions. ERPNext BOM and pricing rules determine costs.

## AS-IS Steps (from AS-IS_Process.xlsx)
1. Collection of data of revised BOM (qty) from production team.
2. Updating latest prices for consumption.
3. Updating Price Engine costing sheet based on above inputs.
4. Updating Salesforce (CRM ERP) with the updated cost and sales price.

## ERPNext Implementation Steps
Note: Product cost estimation is out of scope per sheet feedback, but if implemented:
1. Update BOM with latest quantities and prices.
2. Run cost estimation reports.
3. Set pricing rules based on GP requirements.
4. Sync with CRM for sales pricing.

## Pain Points (AS-IS)
- Ensuring purchase register is accurate.
- Ensuring latest BOM information is available and floated.

## ERPNext Solutions
- Automated cost calculation from BOM.
- Real-time price updates.
- Integration with CRM.
