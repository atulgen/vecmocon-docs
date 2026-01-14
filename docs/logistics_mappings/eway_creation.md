# E-way Creation Process Mapping
[Back to Logistics Mappings](README.md)

## AS-IS Steps (from AS-IS_Process.xlsx)
1. Log in at ewaybillgst.gov.in using GSTIN credentials
2. Click on 'Generate New' under the E-Waybill section
3. Fill Part A:
   - Choose Transaction Type: Outward / Inward
   - Select Sub Type: Supply / Export / Others
   - Enter Document Type, Number, and Date
   - Provide Consignor and Consignee GSTIN and addresses
   - Add Item details including HSN Code, Name, Quantity, Taxable Value, and Applicable GST
4. Fill Part B:
   - Choose Transport Mode: Road / Rail / Air / Ship
   - Enter Vehicle Number or Transporter ID
5. Click 'Submit' to generate the 12-digit E-Way Bill
6. Print or share the bill with the transporter and ensure it travels with the consignment

## ERPNext Implementation Steps
1. After creating Delivery Note or Sales Invoice, go to the document.
2. Click "Generate E-Way Bill" (via India Compliance app).
3. System auto-fills Part A from invoice data (GSTIN, addresses, items, HSN).
4. Select Transport Mode and enter Vehicle/Transporter details.
5. Submit to GST portal via API.
6. E-Way Bill number is generated and linked to the document.
7. Print or email automatically.

## Pain Points (AS-IS)
- Portal requires login for each session.
- Manual entry is time-consuming, especially for high-volume dispatches.
- E-Way Bills can only be cancelled within 24 hours of generation.

## ERPNext Solutions
- No manual login; API integration handles submission.
- Auto-population from ERP data reduces entry time.
- Integrated cancellation within ERP.
- Bulk generation for multiple dispatches.
