[Back to Sourcing Mappings](README.md)

# Inventory Management Mapping

**Full Forms**:
- RM = Raw Materials

**Simple Explanation**: Manage RM inventory. ERPNext reorder levels and alerts.

## AS-IS Steps (from AS-IS_Process.xlsx)
1. Plan vs Inventory Comparison.
2. PO Push out and Pull in accordingly.
3. Consumption plan of Rejected parts.
4. Sale in open market of dead or extra inventory.

## ERPNext Implementation Steps
1. Compare production plan vs inventory stock levels.
2. Adjust Purchase Order quantities based on comparison.
3. Plan for rejected parts consumption.
4. Manage dead or extra inventory via Stock Reconciliation.

## Pain Points (AS-IS)
- Manual push/pull.

## ERPNext Solutions
- Automated reorder alerts.
