[Back to Sales Mappings](README.md)

# Product & Discount Management Mapping

## AS-IS Steps (from AS-IS_Process.xlsx)
1. Quotation preparation or opportunity pricing
2. Catalog setup
3. Price book selection
4. Discount rule application
5. Approvals for discounts

## ERPNext Implementation Steps
1. Set up Item masters with standard prices
2. Create Pricing Rules for discounts based on customer, quantity, etc.
3. Apply rules automatically in Quotations
4. Set approval workflows for high discounts
5. Maintain price lists per customer group

## Pain Points (AS-IS)
- Multiple price books create confusion in selection
- Discount approval delays slow down quotation finalization
- Inconsistent discount application across different opportunities
- Manual intervention required for non-standard pricing

## ERPNext Solutions
- Unified Item pricing with conditional rules
- Automated discount application
- Workflow approvals for exceptions
