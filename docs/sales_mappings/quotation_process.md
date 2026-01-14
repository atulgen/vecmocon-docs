[Back to Sales Mappings](README.md)

# Quotation Process Mapping

## AS-IS Steps (from AS-IS_Process.xlsx)
1. Requirement received and aligned to customer
2. Draft Quotation preparation
3. Needs Review stage
4. In Review stage
5. Approved stage
6. Presented to customer
7. Accepted or Denied

## ERPNext Implementation Steps
1. Create Quotation in Selling module linked to Opportunity
2. Add items with pricing and BOM reference
3. Submit for review workflow (Draft → Review → Approved)
4. Apply discount rules if applicable
5. Email quotation to customer
6. Track acceptance status

## Pain Points (AS-IS)
- Delays in approval due to multiple review cycles
- Manual margin calculation errors
- Lack of integration with ERP for real-time BOM and pricing updates
- Version control issues

## ERPNext Solutions
- Automated workflow approvals
- Real-time BOM and cost integration
- Version control in documents
