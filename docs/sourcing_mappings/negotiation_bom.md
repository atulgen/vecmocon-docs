[Back to Sourcing Mappings](README.md)

# Negotiation of BOM Mapping

**Full Forms**:
- RFQ = Request for Quotation
- BOM = Bill of Materials
- L1 = Lowest bidder

**Simple Explanation**: Negotiate prices for BOM components. ERPNext RFQ and quotation comparison.

## AS-IS Steps (from AS-IS_Process.xlsx)
1. Send RFQ to all the supplier and distributor.
2. Get quotation and make comparison.
3. Negotiate with L1 further.
4. After Negotiation, review BOM with Management with price.
5. Raise the PO accordingly.

## ERPNext Implementation Steps
1. Buyer sends Request for Quotation to all suppliers and distributors.
2. Buyer receives quotations and compares in ERPNext.
3. Negotiate with lowest bidder further via email/custom communication.
4. Review BOM with Management with price in ERPNext reports.
5. Raise Purchase Order accordingly in ERPNext.

## Pain Points (AS-IS)
- Manual comparison, time-consuming.

## ERPNext Solutions
- Automated RFQ and comparison.
