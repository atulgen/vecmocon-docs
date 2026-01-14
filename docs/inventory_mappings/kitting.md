[Back to Inventory Mappings](README.md)

# Kitting Mapping

**Full Forms**:
- BOM = Bill of Materials (component list)
- PPC = Production Planning and Control (planning team)
- DC = Delivery Challan (dispatch document)
- EMS = Electronic Manufacturing Services (outsourced manufacturing)
- QC = Quality Control (quality checking)

**Simple Explanation**: Assemble kits of components for production. ERPNext uses BOM and kitting processes for automated component picking.

## AS-IS Steps (from AS-IS_Process.xlsx)
1. Production share the BOM with quantity.
2. Store put location of each part in excel.
3. Get the print out of that excel.
4. After counting the parts it kept at kitting area.
5. Make DC of parts that are kept at kitting area.
6. If Eway bill required raise Eway bills.
7. Fill the porter form to book porter.
8. Ship the material to ems partner with DC.
9. Electronic Manufacturing Services receive the parts as per the DC.
10. If there is any discrepancy, Electronic Manufacturing Services inform to store.
11. Store reverse DC of that part and send regenerate the DC again with correct Qty.
12. QC checked.
13. If part rejected, informed to buyer.
14. Buyer, either send back to supplier or accept rejection.
15. Handover the rejection to scrap vendor.

## ERPNext Implementation Steps
1. PPC shares BOM with quantities in ERPNext.
2. System fetches part locations automatically.
3. Generate kitting pick list.
4. Create kitting entry and move to kitting area.
5. Generate DC for EMS shipment.
6. Auto-generate e-way bill if required.
7. Integrate porter booking.
8. Ship to EMS and track receipt.
9. Handle discrepancies with reverse entries.
10. QC inspection linked to kitting.
11. Manage rejections and scrap.

## Pain Points (AS-IS)
- Not able to Put expiry data of electronic component, Part Code Issue at ems end, Gap in material sent vs material received, Consumption Missing Data.

## ERPNext Solutions
- Barcode implementation, auto kitting data fetch, consumption tracking.
