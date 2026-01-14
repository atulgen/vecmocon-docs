[Back to Finance Mappings](README.md)

# Tax Invoice Creation Mapping

## AS-IS Steps (from AS-IS_Process.xlsx)
1. Sales KAM emails or fills the dispatch form.
2. PO is shared by the sales KAM to operations.
3. Operation/logistics verifies the PO & packs the materials.
4. Operations create DC against the PO & shares it to finance team, logistics books vehicle for dispatch of material.
5. Finance verifies the DC & PO, Creates an Tax invoice against it. (if material value is above Rs 50,000 , logistics shares the Vehicle number for creation of e-way.)
6. Tax invoice is shared to logistics team.

## ERPNext Implementation Steps
1. Create Delivery Note from Sales Order.
2. Create Sales Invoice from Delivery Note.
3. GST rates auto-applied; generate e-invoice via India Compliance.
4. If value >50k, auto-generate e-way bill.
5. Share invoice and e-way to logistics.

## Pain Points (AS-IS)
- Issue in GST rate of product.
- Errors in GST split (e.g., IGST input instead of CGST+SGST for intra-state)
- Identification of sample sale & Series Sale
- PO open status

## ERPNext Solutions
- Auto GST calculation with India Compliance.
- Validation for GST types based on location.
- Custom fields for sale types.
- Real-time PO status tracking.
