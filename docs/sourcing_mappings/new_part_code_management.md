[Back to Sourcing Mappings](README.md)

# New Part Code Management Mapping

**Simple Explanation**: Assign part codes. ERPNext Item master with validation.

## AS-IS Steps (from AS-IS_Process.xlsx)
1. For new request for PO raise of new part, we create new part code.
2. There are 10 digit alphanumeric part code.
3. We identify the category of part as per our part code opening format.
4. We open the part code accordingly.
5. Register it into Odoo.
6. Maintain the history in google sheet.

## ERPNext Implementation Steps
1. For new PO requirement, buyer creates new Item.
2. System assigns 10-digit alphanumeric part code.
3. Buyer identifies category as per company format.
4. Assign part code accordingly.
5. Register in ERPNext Item master.
6. Maintain history in custom reports.

## Pain Points (AS-IS)
- Manual assignment.

## ERPNext Solutions
- Auto-generation, validation.
