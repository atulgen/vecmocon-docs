[Back to Finance Mappings](README.md)

# MIS Preparation Mapping

**Full Forms**:
- MIS = Management Information System
- P&L = Profit and Loss
- COGS = Cost of Goods Sold
- BOM = Bill of Materials

**Simple Explanation**: Prepare monthly financial statements and MIS reports. ERPNext generates automated financial reports.

## AS-IS Steps (from AS-IS_Process.xlsx)
1. Hard closing of Trial Balance.
2. Preparation of financials from Trial Balance numbers.
3. Closing inventory valuation and recognition of COGS based on latest BOM used during the month.

## ERPNext Implementation Steps
1. Close accounting period and generate Trial Balance.
2. Run P&L, Balance Sheet, Cash Flow reports.
3. Calculate inventory valuation and COGS automatically.
4. Export MIS data in required format.

## Pain Points (AS-IS)
- Information gathering from other departments: availability of latest BOM, approximation of provisions.

## ERPNext Solutions
- Automated financial statement generation.
- Real-time integration with inventory and BOM.
- No manual data collection needed.
