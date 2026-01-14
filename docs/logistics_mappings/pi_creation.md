# PI Creation Process Mapping
[Back to Logistics Mappings](README.md)

[Back to Logistics Mappings](README.md)

## AS-IS Steps (from AS-IS_Process.xlsx)
1. The Sales team initiates the process by completing the PI/PO form.
2. The completed form is reviewed by the Operations team to identify and rectify any discrepancies.
3. Prior to proceeding, the Non-Disclosure Agreement (NDA) status is verified with the Project Manager.
4. Upon confirmation of the NDA—either as signed or already in place—the PI creation process is initiated in Odoo.
5. If the required part code for the product does not exist on Odoo, the Product Manager is asked to provide the part code.
6. Once received, the part code is forwarded to the Purchase team for creation in Odoo.
7. Then PI is generated and shared via email.

## ERPNext Implementation Steps
1. Sales team creates a Quotation in ERPNext Selling module (equivalent to PI).
2. Operations reviews and approves the quotation via workflow.
3. System checks for NDA confirmation in linked Customer record.
4. If part code (Item) doesn't exist, system prompts to create new Item or notify Product Manager.
5. Purchase team creates Item if needed, with part codes and details.
6. Quotation is finalized and emailed to customer automatically.

## Pain Points (AS-IS)
- Confirming or aligning with multiple people for part codes.

## ERPNext Solutions
- Centralized Item master prevents duplicate part codes.
- Workflow approvals reduce manual alignment.
- Automatic email sharing.
