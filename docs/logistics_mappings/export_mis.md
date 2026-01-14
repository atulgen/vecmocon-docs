[Back to Logistics Mappings](../README.md)

# Export MIS

**Process ID**: Logistics Process 19
**Department**: Logistics (International)
**Purpose**: Used for maintaining shipment docs, details etc

## AS-IS Data Fields Captured
- Air Waybill
- Invoice Type
- FedEx Invoice Number
- Invoice Date
- Form Date
- Ship Date (formatted)
- Bill to Currency
- Freight Charges
- Demand Surcharge
- FUEL SURCHARGES
- Total Logistic Cost
- Proof Of Delivery Date
- Pieces
- Actual Weight
- Actual Weight
- Units
- Sender Company Name
- Sender Address Country/Territory
- Recipient Company Name
- Recipient Address Country/Territory
- Rated Weight Amount
- Rated Weight Units
- DOCUMENTS
- Expected Delivery Date
- Dispatch Days
- Delivery Days

## Inputs Required
- Shipping Bill, invoice, packing list, Bill of Lading/Airway Bill, Freight Cert, Freight Forwarder Invoice, Other related docs

## Outputs Generated
- MIS, AUDIT

## Systems Used
- GOOGLE SHEETS
- Operations

## Pain Points
- None specified

## Documents Used
- Google sheets

## Frequency
- NOT OFTEN

## ERPNext Implementation

### Step-by-Step ERPNext Mapping:

#### 1. **Export MIS DocType Creation**
- Create custom DocType: "Export MIS"
- Fields mapping to all export data points from AS-IS
- Auto-population from Export Request Form and Delivery Notes
- Integration with Sales Invoices and shipping transactions

#### 2. **Automated Data Capture**
- API integration with:
  - Export promotion councils
  - Freight forwarder systems (FedEx, DHL)
  - Customs export portals
- Webhooks for real-time shipping updates
- Scheduled jobs for periodic data sync

#### 3. **Invoice & Documentation Tracking**
- Link to Sales Invoice creation
- Auto-calculation of export incentives and drawbacks
- Currency conversion with live rates
- Approval workflows for documentation validation

#### 4. **Freight Forwarder Integration**
- Enhanced FF management with export-specific tracking
- Invoice auto-matching and reconciliation
- Cost tracking with export-specific charges
- Performance dashboard per FF and route

#### 5. **Export Compliance Workflow**
- Shipping Bill tracking and status monitoring
- Export realization certificate management
- Duty drawback claim automation
- Export promotion scheme compliance

#### 6. **Dashboard & Reporting**
- Real-time export status dashboard
- KPI calculations (shipping time, costs, on-time delivery)
- Market performance analytics
- Monthly/quarterly export performance reports

#### 7. **Document Management**
- Centralized export document repository
- Version control and audit trails
- Automated archiving after completion
- Integration with regulatory filing systems

## Key ERPNext Modules Used
- **Custom DocTypes**: Export MIS, Shipping Bill Management
- **Selling Module**: Sales Orders, Delivery Notes, Sales Invoices
- **Accounts Module**: Export incentives, duty drawbacks
- **Workflow Engine**: Export documentation approvals
- **Dashboard Module**: Export KPIs and market analytics
- **API Integration**: External system connections (FF, customs)

## Key Improvements
- Reduced manual data entry
- Real-time export analytics
- Automated performance tracking
- Better compliance reporting
- Improved decision-making with data insights
- Predictive analytics for export optimization
