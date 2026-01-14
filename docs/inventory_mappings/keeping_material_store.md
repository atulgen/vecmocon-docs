[Back to Inventory Mappings](README.md)

# Keeping Material in Store Mapping

**Full Forms**:
- MPN = Manufacturer Part Number (supplier's part code)
- VPN = Vecmocon Part Number (internal part code)
- UOM = Unit of Measure (measurement unit)
- FIFO = First In First Out (inventory valuation method)

**Simple Explanation**: Organize and store materials in predefined locations. ERPNext uses warehouse and bin management for location tracking.

## AS-IS Steps (from AS-IS_Process.xlsx)
1. There are predefined material location of all parts.
2. Racks have specific location and all the material kept at their pre specified location.
3. In every racks there are bins, each bins have sticker with part codes.

## ERPNext Implementation Steps
1. Set up warehouse with racks and bins in ERPNext.
2. Assign default locations to items.
3. During GRN, auto-assign bin locations.
4. Track material by location and bin.

## Pain Points (AS-IS)
- No barcode process available. Space Constraint.

## ERPNext Solutions
- Barcode support, auto-location detection, FIFO valuation.
