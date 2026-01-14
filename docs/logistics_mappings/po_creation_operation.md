# PO CREATION (Operation) Mapping
[Back to Logistics Mappings](README.md)

## AS-IS Steps (from AS-IS_Process.xlsx)
1. Open Odoo and navigate to purchase.
2. Click on New to initiate a Purchase Order.
3. Put the "Amazon" in Vendor contact.
4. Enter "ADMIN" in part code.
5. Enter products, quantity and link of product in description; remove tax and mention GST included Price.
6. Click Confirm order.
7. Go to setting option and print the PO from Purchase order option.

## ERPNext Implementation Steps
1. Open ERPNext, go to Buying module.
2. Click "New Purchase Order".
3. Select "Amazon" as Supplier.
4. Add Item "ADMIN" or create custom item for office supplies.
5. Enter quantity, product link in description, set GST included.
6. Submit PO.
7. Print PO.

## Pain Points (AS-IS)
- Putting the product link on PO description.

## ERPNext Solutions
- Custom fields for product links.
- Automated printing.
