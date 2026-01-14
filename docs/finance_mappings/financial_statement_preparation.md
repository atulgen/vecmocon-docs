[Back to Finance Mappings](README.md)

# Financial Statement Preparation Mapping

## AS-IS Steps (from AS-IS_Process.xlsx)
1. Hard closing of Trial Balance.
2. Preparation of financials from Trial Balance numbers.
3. Closing inventory valuation and recognization of COGS based on latest BOM used during the month.

## ERPNext Implementation Steps
1. Post all transactions and close the accounting period.
2. Run Trial Balance report.
3. Generate Profit & Loss, Balance Sheet, Cash Flow statements from Accounts module.
4. Include inventory valuation and COGS calculation automatically.

## Pain Points (AS-IS)
- Information gathering from other departments (latest BOM, provisions).
- Manual hard closing and valuation.

## ERPNext Solutions
- Automated financial statement generation.
- Real-time inventory valuation integration.
- No manual gathering; system pulls data automatically.
