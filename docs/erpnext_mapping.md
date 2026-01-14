[Back to Main Documentation](README.md)

# ERPNext Module Mapping

## Mapping Vecmocon Processes to ERPNext Modules

| S.No | Vecmocon Process Title | ERPNext Module | Key Features to Use |
|------|-------------------------|----------------|---------------------|
| 1 | Contact Creation | CRM | Customer master with GST auto-fetch |
| 2 | PI Creation | Selling, Buying | Quotation, Purchase Order |
| 3 | PO CREATION | Buying | Purchase Order, Material Request |
| 4 | Dispatch Process (Tax Invoice) | Selling, Stock | Sales Order, Delivery Note, Sales Invoice |
| 5 | Dispatch Process (Repair/Return) | Stock, Selling | Delivery Note with return, Sales Invoice credit |
| 6 | Dispatch Process (Replacement) | Stock | Stock Entry, Delivery Note |
| 7 | Dispatch Process (Returnable) | Stock | Delivery Note, Stock Transfer |
| 8 | Dispatch Process (Job Work) | Manufacturing | Work Order for subcontracting |
| 9 | PO CREATION (Operation) | Buying | Purchase Order for admin/IT |
| 10 | E-way Creation | Accounts | India Compliance app for auto e-way bill generation |
| 11 | Maintaining PO data | Buying, Accounts | Purchase Order tracking, custom reports |
| 12 | Maintaining Dispatch data | Stock, Selling | Delivery Note reports, custom MIS |
| 14 | Importing / International purchase | Buying, Stock | Purchase Order, Stock Entry for imports |
| 15 | Import form | Custom | Custom doctype for import tracking |
| 16 | Import MIS | Custom | Custom reports for import KPIs |
| 17 | Exporting / International selling | Selling, Stock | Sales Order, Delivery Note |
| 18 | Export Form | Custom | Custom doctype for export form |
| 19 | Export MIS | Custom | Custom reports for export data |
| 20 | NDA & Agreement/Vendor Management | CRM, Buying | Supplier master, custom agreements |
ERPNext supports subcontracting via Work Orders and Stock Entries, which aligns with EMS-based manufacturing.

[Back to Main Documentation](README.md)
