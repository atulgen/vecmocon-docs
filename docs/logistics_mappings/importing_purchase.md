# Importing / International Purchase Mapping
[Back to Logistics Mappings](README.md)

## AS-IS Steps (from AS-IS_Process.xlsx)
1. Supplier & Purchase Process: Select vendor, share PO/quotation, receive PI, initiate payment.
2. Material Readiness: Supplier confirms readiness.
3. Document Handling: Supplier shares docs, validated by sourcing/logistics.
4. Import Readiness: Submit Import Form, share with FF/CHA.
5. Freight Forwarder Coordination: Get quotations, finalize FF.
6. Shipment Pickup & Documentation: Pickup, validate docs, share ETA.
7. Clearance at Origin: Customs clearance, load to vessel/flight.
8. In-Transit & Destination Handling: Tracking, duty calculation, customs clearance, POD.
9. Document Submission: Submit to Finance, store in Master Drive.

## ERPNext Implementation Steps
1. Create Purchase Order for international supplier.
2. Use custom doctype for Import Form with FF details.
3. Track shipment with custom fields in PO.
4. Integrate with customs APIs for duty calculation.
5. Create Purchase Receipt on clearance.
6. Link to accounts for payment processing.

## Pain Points (AS-IS)
- Invoices not thoroughly checked, double invoice numbers, missing details, multiple follow-ups.

## ERPNext Solutions
- Structured import tracking with validations.
- Automated document linking.
- Integration with freight forwarders.
