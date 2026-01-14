# Dispatch Process (Repair and Return) Mapping
[Back to Logistics Mappings](README.md)

## AS-IS Steps (from AS-IS_Process.xlsx)
1. Sales team fills the Dispatch Form, categorized according to the dispatch type.
2. All entries are cross-verified: rate, quantity, product description, PO number, delivery address, customer name, and contact person
3. Documentation is initiated upon confirmation of the dispatch type.
4. For Repair and Return DC, navigate to the Inventory module, click on Deliveries and select new in the Odoo dashboard.
5. Click on New to initiate the delivery creation.
6. Retrieve the shipping address from a separate Odoo tab and paste it into the address field.
7. Enter the part code and specify the quantity for dispatch..
8. In the notes below are mentioned:
   - Product
   - Quantity
   - Amount
   - Basis
9. Search for the previous LOT number to confirm availability of required on-hand quantity.
10. Once the LOT is obtained and all the details are mentioned: DC is marked as TO-DO.
11. Then go to the delivery option and the LOT obtained for on-hand quantity is mentioned.
12. Verify all details and cross-check the DC for discrepancies or omissions.
13. Validate the DC and generate the printed copy via the Picking Operations option under Settings.
14. Once the DC is generated, it is shared on the mail trail of particular month.
15. If the amount of dispatch is more than 50k, then E-way bill is generated for the respective DC.

## ERPNext Implementation Steps
1. Sales creates Sales Order for return/repair with negative quantities or custom return type.
2. Verify details.
3. Create Delivery Note from SO, select return items.
4. Assign LOT/batch from stock.
5. Add notes for product, quantity, amount, basis.
6. Submit for approval.
7. Validate DN.
8. If value >50k, generate e-way bill.
9. Email DC to stakeholders.

## Pain Points (AS-IS)
- Creating multiple DC manually every time. On cancelling any DC, Odoo does not show the correct remaining quantity. Show Technical errors often.

## ERPNext Solutions
- Automated DN creation from SO.
- Accurate stock tracking prevents quantity errors.
- Integrated workflows reduce technical issues.
