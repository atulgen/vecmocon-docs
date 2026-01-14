[Back to Inventory Mappings](README.md)

# Item Creation Mapping

**Full Forms**:
- VPN = Vecmocon Part Number
- MPN = Manufacturer Part Number
- EMS = Electronic Manufacturing Services
- RM = Raw Materials
- FG = Finished Goods
- FIFO = First In First Out (valuation method)

**Simple Explanation**: Create and standardize item masters. ERPNext Item doctype with multiple fields.

## AS-IS Steps (from AS-IS_Process.xlsx)
1. Purchase team create items as per the PM's request in Odoo.
2. Email/internal communication.

## ERPNext Implementation Steps
1. Buyer creates Item with all required fields.
2. System validates uniqueness.
3. Register in ERPNext.

## Pain Points (AS-IS)
- System can not define/differentiate between VPN, MPN, Display Name, EMS Part Code. Valuation is not there (FIFO).

## ERPNext Solutions
- Multiple fields for VPN, MPN, Display Name, EMS code.
- Material category (RM, FG, Consumable).
- FIFO valuation.
