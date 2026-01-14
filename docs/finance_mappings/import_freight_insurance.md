[Back to Finance Mappings](README.md)

# Import Freight & Insurance Reversed Mapping

**Full Forms**:
- BOE = Bill of Entry

**Simple Explanation**: Adjust freight costs in imports. ERPNext purchase invoice adjustments.

## AS-IS Steps (from AS-IS_Process.xlsx)
1. Received Import bills after GRN along with BOE.
2. Recording transaction.
3. We booked the import bill based on assessable value mentioned on BOE.
4. Assessable value includes the Logistics cost and we received separate bill from DHL in which freight is also included so to remove the double impact we reversed of freight & insurance.

## ERPNext Implementation Steps
1. Receive import bills after GRN.
2. Record transactions.
3. Adjust for double freight booking.

## Pain Points (AS-IS)
- None specified

## ERPNext Solutions
- Automated adjustments in purchase entries.
