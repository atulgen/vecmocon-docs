[Back to R&D Mappings](README.md)

# Repair & Replacement Mapping

**Full Forms**:
- SCM = Supply Chain Management (logistics team)

**Simple Explanation**: Handle damaged items from transit by repairing or replacing them. ERPNext uses Delivery Notes for tracking returns and replacements.

## AS-IS Steps (from AS-IS_Process.xlsx)
1. Received Damage Sample from Sales team.
2. Replace/Repair the Item.
3. Handover to SCM team.

## ERPNext Implementation Steps
1. Create Delivery Note for return of damaged item.
2. Process repair/replacement in R&D.
3. Create new Delivery Note for replacement.
4. Handover to SCM.

## Pain Points (AS-IS)
- Physical handovers, no tracking

## ERPNext Solutions
- Digital tracking of returns and replacements.
- Integrated with inventory.
