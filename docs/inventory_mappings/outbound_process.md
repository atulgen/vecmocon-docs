[Back to Inventory Mappings](README.md)

# Outbound Process Mapping

**Full Forms**:
- DC = Delivery Challan (dispatch document)
- QR = Quick Response (barcode)

**Simple Explanation**: Issue materials to internal users or departments. ERPNext uses material requests and issues for tracking.

## AS-IS Steps (from AS-IS_Process.xlsx)
1. There is mail chain, for the Service requirement.
2. Service send the list of required part with store with keep purchase in CC.
3. Buyer check the stock and production plan.
4. Buy give the approval to store to issue the material to service with Qty.
5. Store move the inventory from store location to service location.
6. Store move the physical inventory to service.

## ERPNext Implementation Steps
1. User raises Material Request via email or form.
2. Buyer reviews stock and approves.
3. Store creates Material Issue in ERPNext.
4. Move inventory to service location.
5. Update records.

## Pain Points (AS-IS)
- No system generated service requirement.

## ERPNext Solutions
- System-generated requests, QR code slips.
