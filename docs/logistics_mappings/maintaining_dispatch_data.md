# Maintaining Dispatch Data Mapping
[Back to Logistics Mappings](README.md)

## AS-IS Steps (from AS-IS_Process.xlsx)
1. A centralized sheet is maintained to track all dispatches
2. The following fields are documented in the sheet:
   - S No.
   - MIS Date
   - Dispatched & Pick-up From
   - Invoice Number
   - Delivery Challan No
   - Returnable DC No
   - Performa Invoice No.
   - Purchase Order No.
   - E-Way Bill No.
   - Month
   - Form Fill Date
   - Invoice Date
   - Invoice Type
   - Picking City
   - Ship To Party
   - Bill To Party
   - Drop City
   - Material Description
   - Invoice Quantity
   - Freight Cost
   - Premium Cost
   - Extra Cost L&U
   - Total Domestic Logistic
   - Freight Cost
   - Invoice Value
   - Remark / Reason for Delay
   - Proof of Delivery
   - Claim ID
   - Transport Name
   - Mode of Dispatch
   - Lorry Receipt No.
   - Lorry Receipt Date
   - Estimated Delivery Date / Actual Delivery Date
   - Vehicle No.
   - Delivery Status
   - Vehicle
   - Placed By
   - Approved By
   - Request By
   - Delivery Type
   - Dispatch Type
   - Damage in Transit
   - Reason for Delay
   - Insurance
   - Transit Time
   - Days Delay in Dispatch/Pick-up
   - Dispatch/Pick-up Status
   - Delivery Time
   - Delivery Status
3. Once the form is filled, document creation is initiated
4. After documentation is complete, the material is handed over to the logistics partner and dispatched to the shipping address
5. All finalized dispatch details are updated in the sheet for record keeping
6. Dashboard / Reports Creation - Analyze Monthly / Quarterly Performance (KPIs)

## ERPNext Implementation Steps
1. Use Delivery Note and Sales Invoice modules to capture all fields.
2. Create custom fields in DN/SI for additional details (e.g., POD, Claim ID).
3. Set up custom reports or dashboards for dispatch MIS.
4. Automate data population from linked documents.
5. Generate monthly/quarterly KPI reports.

## Pain Points (AS-IS)
- Managing multiple POs manually while updating and subtracting dispatched quantities after each cycle can be time-consuming and error-prone.

## ERPNext Solutions
- Automated data capture from transactions.
- Centralized reporting.
- Real-time dashboards.
