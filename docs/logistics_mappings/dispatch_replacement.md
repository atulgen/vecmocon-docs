# Dispatch Process (Replacement) Mapping
[Back to Logistics Mappings](README.md)

## AS-IS Steps (from AS-IS_Process.xlsx)
1. Sales team fills the Dispatch Form, categorized according to the dispatch type.
2. All entries are cross-verified: rate, quantity, product description, PO number, delivery address, customer name, and contact person
3. Documentation is initiated upon confirmation of the dispatch type.
4. For Replacement DC, navigate to the Inventory module, click on Deliveries and select new in the Odoo dashboard.
5. Click on New to initiate the delivery creation.
6. Retrieve the shipping address from a separate Odoo tab and paste it into the address field.
7. Enter the part code and specify the quantity for dispatch..
8. In the notes below are mentioned:
   - Product
   - Quantity
   - Amount
   - Basis
9. On a separate Odoo tab, transfer material from R&D or Production to Finished Good Stock to generate the LOT number.
10. Once the LOT is generated, Go to the DC and mark as TO-DO.
11. Go to the Delivery option mention the same LOT number and click on save.
12. Verify all details and cross-check the DC for discrepancies or omissions.
13. Validate the DC and generate the printed copy via the Picking Operations option under Settings.
14. Once the DC is generated, it is shared on the mail trail of particular month.
15. If the amount of dispatch is more than 50k, then E-way bill is generated for the respective DC.

## ERPNext Implementation Steps
1. Sales creates Sales Order for replacement.
2. Verify details.
3. Transfer material to FG stock via Stock Entry to generate LOT.
4. Create Delivery Note, assign LOT.
5. Add notes.
6. Submit and validate.
7. Generate e-way if >50k.
8. Share via email.

## Pain Points (AS-IS)
- Creating multiple DC manually every time. On cancelling any DC, Odoo does not show the correct remaining quantity. Show Technical errors often.

## ERPNext Solutions
- Integrated stock transfers and DN creation.
- Automatic LOT tracking.
- Error-free workflows.
