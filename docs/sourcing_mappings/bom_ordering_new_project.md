[Back to Sourcing Mappings](README.md)

# BOM Ordering of New Project Mapping

**Full Forms**:
- BOM = Bill of Materials
- PM = Project Manager

**Simple Explanation**: Order components for new projects. ERPNext links BOM to projects.

## AS-IS Steps (from AS-IS_Process.xlsx)
1. Receive RAW BOM from PM
2. Put Vecmocon part code of all the parts.
3. Have meeting with R&D and PM for the BOM optimization.
4. Accordingly PM change BOM description, MPN, and release the BOM with Purchase.
5. Purchase raise sample order with respective supplier.
6. Sourcing start negotiation with supplier mass qty.

## ERPNext Implementation Steps
1. Receive BOM from PM in ERPNext Projects module.
2. Buyer adds Vecmocon part codes to BOM components.
3. Have meeting with R&D and PM for BOM optimization in ERPNext.
4. PM updates BOM description, MPN, releases BOM in Manufacturing module.
5. Buyer raises Purchase Requisition for sample components from BOM.
6. Sourcing negotiates with suppliers for mass quantity pricing.

## Pain Points (AS-IS)
- Manual BOM release, time-consuming.

## ERPNext Solutions
- Project-linked BOMs, automated ordering.
