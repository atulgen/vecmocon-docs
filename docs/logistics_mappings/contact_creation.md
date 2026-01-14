# Contact Creation Process Mapping
[Back to Logistics Mappings](README.md)

## AS-IS Steps (from AS-IS_Process.xlsx)
1. Check KYC form for GST, customer name, billing and shipping address
2. If GST is missing on the form, verify GST from the signed NDA
3. Confirm whether NDA has been signed by the customer
4. Once GST and all required details are confirmed, proceed with contact creation in Odoo
5. Go to the Contacts module on the Odoo dashboard
6. Click the Create button
7. Select Individual or Company as the contact type
8. Enter GST; if matched, Odoo will auto-fetch customer details
9. If auto-fetch fails, manually enter Name, Address, Pin code, etc.
10. Click Save to complete the contact creation

## ERPNext Implementation Steps
1. Access CRM module in ERPNext dashboard
2. Click "New Customer" (or use Customer doctype)
3. Fill mandatory fields: Customer Name, Customer Type (Individual/Company)
4. Enter GST Number in custom GST field
5. System calls India Compliance API to auto-fetch: Company Name, Address, PAN, etc.
6. If auto-fetch succeeds, populate billing and shipping addresses automatically
7. If auto-fetch fails, manually enter Name, Address, Pin Code, etc.
8. Add custom field for NDA confirmation (Yes/No dropdown)
9. Attach KYC form and NDA document files
10. Save Customer record

## Pain Points (AS-IS)
- Confirming GST, address and other details every time individually if the customer is new to the system.

## ERPNext Solutions
- GST auto-fetch via API eliminates manual verification for GST details.
- One-time customer creation with reusable data across Sales, Purchase, CRM, Accounting modules.
- Attachment support for KYC and NDA documents.
- Custom fields ensure NDA confirmation is tracked.
- Real-time validation reduces errors.
