# Maintaining PO Data Mapping
[Back to Logistics Mappings](README.md)

## AS-IS Steps (from AS-IS_Process.xlsx)
1. A separate sheet is maintained for series or bulk dispatches PO eg "Upgrid or Battery smart".
2. Once a PI is created, it is shared with Customer to obtain PO.
3. Once the PO is received, below details are mentioned in excel data:
   - PO number
   - Po date
   - Total quantity
   - Total amount
   - Product specification
   - Dispatched quantity till date
4. For each dispatch, deduct dispatched quantity from total PO quantity.
5. After each dispatch, the received quantity is subtracted from the total PO quantity until it is fully consumed.
6. On consuming the total quantity, new PI is created and shared to customer to obtain PO.

## ERPNext Implementation Steps
1. Create Sales Orders linked to customer POs.
2. Use ERPNext reports or custom dashboard to track:
   - SO/PO details
   - Total/dispatched quantities
   - Remaining balances
3. Automate updates via Delivery Notes.
4. Generate alerts for new PI when quantity consumed.

## Pain Points (AS-IS)
- Managing multiple POs manually while updating and subtracting dispatched quantities after each cycle can be time-consuming and error-prone.

## ERPNext Solutions
- Real-time tracking with automated updates.
- Custom reports for PO data maintenance.
- No manual subtraction needed.
