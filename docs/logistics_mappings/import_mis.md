[Back to Logistics Mappings](../README.md)

# Import MIS

**Process ID**: Logistics Process 16
**Department**: Logistics (International)
**Purpose**: Used for maintaining shipment docs, details etc

## AS-IS Process Steps

### Form Submission
- Import form is filled

### Order Placement
- Purchase order is confirmed with the supplier

### Data Collection
- Required shipment and order details are gathered from various relevant websites (tracking portals, customs portals)

### Invoice Recording
- As invoices are received, corresponding data is entered into the MIS

### Ongoing Updates
- Data is updated progressively until all shipment and billing details are complete

### Dashboard / Reports Creation
- Analyze Monthly / Quarterly Performance (KPIs)

## Data Fields Captured
- Custom Location
- MIS Date
- HBL/HAWB (House Bill of lading / House Airway Bill)
- Freight Forwarder Name
- Commercial Invoice no.
- Commercial Invoice value (USD)
- Exchange Rate
- Commercial Value (INR)
- Gross Weight
- No. of boxes
- Invoice No. of Freight Forwarder (FF) / CHA (Custom House Agent)
- Pickup Date
- Actual Delivery Date
- Import form Date
- Expected Delivery Date
- Month
- Bill of Entry No.
- Bill of Entry Date
- Arrival Date at Clearance Port
- OOC Date (Out Of Charge)
- Transportation Charges/Freight
- Disbursement charge
- Go Green Charges
- Fuel Surcharge
- Airport Authority India charges/Storage Charges (Airport Authority Charge)
- Other cost
- Total Freight Cost
- BCD (Basic Custom Duty)
- SWS (Social Welfare Surcharge)
- ADD (Anti Dumping Duty)
- Penalty & Fine
- Insurance
- Total logistics cost
- Packing List
- Supplier Name
- Document Attachment
- Country
- Remarks
- Mode
- Incoterm
- Damage in Transit
- Transit Time
- Clearance Day
- Clearance Status
- Delivery Days
- Delivery status
- Pickup Day
- Pick Up Status

## Inputs Required
- BOE, invoice, packing list, BL, Freight Cert, FF Invoice, Other related docs / information from import form, Icegate website, different FF (DHL/Fedex) website

## Outputs Generated
- MIS, AUDIT, Dashboard, Performance Report (KPIs)

## Systems Used
- Google Form, Google Sheet, Looker Studio
- Operations and Logistics

## Pain Points
- Maintaining lots of data
- Chances of error is high as there can be typing error

## Documents Used
- Google sheets

## Frequency
- REGULAR

## ERPNext Implementation

### Step-by-Step ERPNext Mapping:

#### 1. **Import MIS DocType Creation**
- Create custom DocType: "Import MIS"
- Fields mapping to all 50+ data points from AS-IS
- Auto-population from Import Request Form
- Integration with Purchase Orders and Goods Receipts

#### 2. **Automated Data Capture**
- API integration with:
  - Customs portals (Icegate)
  - Freight forwarder portals (DHL, FedEx)
  - Shipping line tracking systems
- Webhooks for real-time updates
- Scheduled jobs for periodic data sync

#### 3. **Invoice Processing Automation**
- Link to Purchase Invoice creation
- Auto-calculation of duties and taxes
- Currency conversion with live rates
- Approval workflows for invoice validation

#### 4. **Freight Forwarder Integration**
- Custom DocType for FF management
- Invoice auto-matching and reconciliation
- Cost tracking and variance analysis
- Performance dashboard per FF

#### 5. **Customs Clearance Workflow**
- Bill of Entry creation and tracking
- Duty calculation automation
- Clearance status monitoring
- Integration with payment gateways

#### 6. **Dashboard & Reporting**
- Real-time import status dashboard
- KPI calculations (clearance time, costs, delays)
- Supplier performance analytics
- Monthly/quarterly performance reports

#### 7. **Document Management**
- Centralized document repository
- Version control and audit trails
- Automated archiving after completion
- Integration with cloud storage

## Key ERPNext Modules Used
- **Custom DocTypes**: Import MIS, Freight Forwarder Management
- **Buying Module**: Purchase Orders, Purchase Receipts, Purchase Invoices
- **Accounts Module**: GST, customs duty calculations
- **Workflow Engine**: Approval processes for customs clearance
- **Dashboard Module**: Real-time KPIs and analytics
- **API Integration**: External system connections

## Key Improvements
- Reduced manual data entry errors
- Real-time visibility into import status
- Automated KPI calculations
- Integration with external systems
- Better audit trail and compliance
- Predictive analytics for import planning
