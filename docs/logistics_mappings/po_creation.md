# PO CREATION Process Mapping
[Back to Logistics Mappings](README.md)

## AS-IS Steps (from AS-IS_Process.xlsx)
1. Open Odoo navigate to purchase.
2. Click on New.
3. If the product is dispatched from R&D, mention "Vecmocon Technologies Pvt Ltd – R&D" as the dispatch contact.
4. If dispatched directly by the Electronic Manufacturing Services partner, mention the vendor's contact accordingly—for example: "Shigan Quantum Technologies".
5. Enter products and quantity, remove tax, price and Packaging dot.
6. Confirm order and click on receipt.
7. Put the destination location as "VECWH/Stock/FG"
8. Click on moves, put the LOT number as today's date.
9. Save and Click on Validate.

## ERPNext Implementation Steps
1. Open ERPNext, go to Buying module.
2. Click "New Purchase Order".
3. Select Supplier (R&D internal or EMS partner like "Shigan Quantum Technologies").
4. Add items with quantity (remove taxes as needed).
5. Set delivery warehouse to "VECWH/Stock/FG".
6. Submit PO.
7. Create Purchase Receipt for goods receipt.
8. In Stock Entry, assign LOT number (batch) as today's date for tracking.
9. Validate and save.

## Pain Points (AS-IS)
- Generating separate LOT number for each dispatch is manual.

## ERPNext Solutions
- Automated LOT/batch assignment during stock entries.
- Centralized PO tracking with warehouse integration.
- Real-time inventory updates reduce manual LOT creation.
