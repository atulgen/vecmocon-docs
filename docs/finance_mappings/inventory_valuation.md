[Back to Finance Mappings](README.md)

# Inventory Valuation Mapping

**Full Forms**:
- RM = Raw Materials
- FG = Finished Goods
- COGS = Cost of Goods Sold

**Simple Explanation**: Value inventory accurately. ERPNext stock valuation reports.

## AS-IS Steps (from AS-IS_Process.xlsx)
1. We take the sale register from tally.
2. Calculate the correct BOM price of that saled product.
3. Calculate the COGS Value.
4. Use last month Closing balance as opening balance of current month.
5. Based on the above data we calculate the closing inventory value.

## ERPNext Implementation Steps
1. Generate sales register from ERPNext.
2. Calculate BOM costs.
3. Compute COGS.
4. Run inventory valuation reports.

## Pain Points (AS-IS)
- All BOM and Update BOM availability.
- GRN sheet is not properly maintained.
- Actual physical verification data on monthly basis to calculate actual closing value.
- Inventory Aging.

## ERPNext Solutions
- Automated valuation.
- Real-time BOM integration.
- Aging reports.
