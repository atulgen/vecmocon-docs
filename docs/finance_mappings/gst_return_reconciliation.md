[Back to Finance Mappings](README.md)

# GST Return & Reconciliation Mapping

**Full Forms**:
- GST = Goods and Services Tax
- GSTR-1 = GST Return 1 (outward supplies)
- GSTR-3B = GST Return 3B (monthly summary)
- GSTR-2 = GST Return 2 (inward supplies)
- HSN = Harmonized System of Nomenclature
- SAC = Services Accounting Code

**Simple Explanation**: File monthly GST returns and reconcile with portal data. ERPNext provides GST reports and reconciliation tools.

## AS-IS Steps (from AS-IS_Process.xlsx)
GSTR-1:
1. We have required monthly sales bill with below mentioned details i)Tax invoice number ii) Product/services wise HSN/SAC details iii) GST number wise bills details

GSTR-3B:
1. For GSTR 3B we need purchase and sale details

GSTR-2:
1. Export the data from GST portal
2. Check with the invoices entered in tally and create the reconciliation

## ERPNext Implementation Steps
1. Generate GSTR-1 from sales invoices with HSN/SAC details.
2. Create GSTR-3B summary report.
3. Import GSTR-2A/2B from portal and reconcile with purchases.
4. File returns directly or export data.

## Pain Points (AS-IS)
- Problem at return filing: don't know which invoices are on portal vs system, manual matching required.

## ERPNext Solutions
- Automated GST calculation and return preparation.
- Portal integration for reconciliation.
- Real-time tracking of filed vs pending returns.
