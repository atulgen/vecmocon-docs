# Dispatch Process (Tax Invoice Basis) Mapping
[Back to Logistics Mappings](README.md)

## AS-IS Steps (from AS-IS_Process.xlsx)
1. Sales team fills the Dispatch Form, categorized by dispatch type
2. Details in the form are cross-checked: rate, quantity, product description, PO number, delivery address, customer name, and contact person.
3. Documentation begins once the dispatch type is confirmed.
4. If dispatch is based on Tax Invoice:
   - Sales is asked to share the PO.
   - PO is verified for rate, GST, amount, and billing address.
   - The relevant Proforma Invoice (PI) is retrieved on Odoo based on the PO/PI request form.
   - Then PI is set to confirmed status.
   - The LOT number is entered for the same-day dispatch, along with the requested quantity, aligned to the respective shipping address.
   - The DC is created using the same PI.
   - If the DC created is less than the total amount of PI, back order is created for further dispatches. And upon receival of request further DC can be generated within the same PI until the total amount of PI is consumed.
   - Once the DC is generated, it is shared with Finance along with supporting documents for Tax Invoice generation.
   - After documentation is finalized, material is packed and handed over to the logistics partner.

## ERPNext Implementation Steps
1. Sales creates or updates Sales Order with customer PO attached.
2. Verify PO details in SO.
3. Create Delivery Note from SO, select items, quantities, LOT/batch.
4. If partial dispatch, system creates backorder automatically.
5. Submit DN for approval.
6. Create Sales Invoice from DN with GST calculation.
7. Generate e-way bill if value >50,000.
8. Share DN and Invoice with Finance/Logistics.
9. Update shipment tracking.

## Pain Points (AS-IS)
- Creating multiple DC manually every time. On cancelling any DC, Odoo does not show the correct remaining quantity. Show Technical errors often.

## ERPNext Solutions
- Automated backorder creation for partial deliveries.
- Accurate quantity tracking with real-time updates.
- Workflow prevents errors; integrated e-way reduces manual steps.
